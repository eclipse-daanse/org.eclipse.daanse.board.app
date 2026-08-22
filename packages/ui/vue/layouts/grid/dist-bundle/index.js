(function(){var i="ui.vue.layouts.grid",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.view_grid_layout[data-v-298470a1]{\n  padding-left:60px;\n}\n.vgl-layout[data-v-298470a1] {\n  --vgl-placeholder-bg: #aaa;\n  min-height:100vh;\n}\n/* Grid background disabled in view mode */\n.vgl-layout[data-v-298470a1]::before {\n  display: none;\n}\n[data-v-298470a1] .vgl-item:not(.vgl-item--placeholder) {\n\n  /*border: 1px dashed #ccc;*/\n}\n[data-v-298470a1] .vgl-item--resizing {\n  opacity: 90%;\n}\n[data-v-298470a1] .vgl-item--static {\n  background-color: #cce;\n}\n.text[data-v-298470a1] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  font-size: 24px;\n  text-align: center;\n}\n\n.alayout[data-v-9f621b82]{\n  padding-left:60px;\n}\n.vgl-layout[data-v-9f621b82] {\n  --vgl-placeholder-bg: #aaa;\n  min-height: 100vh;\n}\n.vgl-layout[data-v-9f621b82]::before {\n  position: absolute;\n  width: calc(100% - 5px);\n  height: calc(100% - 5px);\n  margin: 5px;\n  content: '';\n  background-image:\n    linear-gradient(to right, #e9e9e9 1px, transparent 1px),\n    linear-gradient(to bottom, #e9e9e9 1px, transparent 1px);\n  background-repeat: repeat;\n  background-size: calc(calc(100% - 5px) / var(--grid-cols, 12)) calc(var(--grid-row-height, 30px) + 10px);\n}\n[data-v-9f621b82] .vgl-item--placeholder {\n  outline: 2px dashed #888;\n  background-color: rgba(136,136,136,0.15);\n}\n[data-v-9f621b82] .vgl-item--resizing { opacity: 90%;\n}\n[data-v-9f621b82] .vgl-item--static { background-color: #cce;\n}\n.text[data-v-9f621b82] {\n  position: absolute; inset: 0; width: 100%; height: 100%;\n  margin: auto; font-size: 24px; text-align: center;\n}\n\n/* Overlay */\n.invisible-dropzone[data-v-9f621b82] {\n  position: absolute;\n  inset: 0;\n  z-index: 1000;\n  pointer-events: auto;\n}\n.invisible-dropzone[data-v-9f621b82] > * { opacity: 0;\n}\n\n/* Copy/Paste */\n.widget-item-wrapper[data-v-9f621b82] {\n  width: 100%;\n  height: 100%;\n}\n.dropdown-buttons-container[data-v-9f621b82] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  z-index: 99999;\n}\n.widget-context-menu[data-v-9f621b82],\n.canvas-context-menu[data-v-9f621b82] {\n  position: fixed;\n  background: white;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  padding: 4px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  z-index: 100000;\n}\n\n.grid-settings[data-v-2078e072] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.grid-settings-title[data-v-2078e072] {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 0;\n}\n.grid-settings-subtitle[data-v-2078e072] {\n  font-size: 13px;\n  font-weight: 500;\n  margin: 8px 0 0 0;\n}\n.cols-grid[data-v-2078e072] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.col-input[data-v-2078e072] {\n  width: 100%;\n}\n";})();
import { LAYOUT_REPOSITORY } from "org.eclipse.daanse.board.app.lib.repository.layout.page";
import { defineComponent, inject, shallowRef, reactive, ref, toRef, onBeforeMount, onMounted, watchEffect, onBeforeUnmount, computed, watch, createElementBlock, openBlock, normalizeStyle, normalizeClass, renderSlot, createCommentVNode, unref, getCurrentScope, onScopeDispose, nextTick, provide, toRefs, withDirectives, Fragment, renderList, createBlock, mergeProps, withCtx, createVNode, vShow, resolveComponent, createElementVNode, isRef, toDisplayString, withModifiers, createTextVNode, useModel } from "vue";
import { useWidgetsStore } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { useLayoutStore } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { WidgetWrapper, defaultConfig } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute } from "vue-router";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { identifier } from "org.eclipse.daanse.board.app.lib.repository.page";
import Draggable from "vuedraggable";
import { useClipboardStore } from "org.eclipse.daanse.board.app.ui.vue.layouts.base";
const y$2 = typeof window < "u";
var Ot$1;
y$2 && ((Ot$1 = window == null ? void 0 : window.navigator) == null ? void 0 : Ot$1.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ie(t2) {
  return t2 == null;
}
function it() {
}
const W = Object.freeze({
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
Object.freeze(new Set(Object.keys(W)));
function Zr() {
  const t2 = /* @__PURE__ */ new Map();
  return {
    on(e2, n) {
      const r2 = t2.get(e2);
      (r2 == null ? void 0 : r2.add(n)) || t2.set(e2, /* @__PURE__ */ new Set([n]));
    },
    off(e2, n) {
      const r2 = t2.get(e2);
      r2 && r2.delete(n);
    },
    clear(e2) {
      const n = t2.get(e2);
      n && n.clear();
    },
    clearAll() {
      t2.clear();
    },
    emit(e2, ...n) {
      const r2 = t2.get(e2);
      r2 && r2.forEach((o) => {
        o(...n);
      });
    }
  };
}
function eo(t2, e2 = 16) {
  if (typeof t2 != "function")
    return it;
  const n = (...i2) => {
    t2(...i2);
  };
  if (e2 <= 0)
    return Jt(n);
  let r2 = 0, o;
  return function(...i2) {
    const s2 = Date.now(), c2 = s2 - r2;
    clearTimeout(o), c2 >= e2 ? (r2 = s2, n(...i2)) : o = setTimeout(
      () => {
        r2 = Date.now(), n(...i2);
      },
      Math.max(0, e2 - c2)
    );
  };
}
function no(t2, e2 = 100) {
  if (typeof t2 != "function")
    return it;
  const n = (...o) => {
    t2(...o);
  };
  if (e2 <= 0)
    return Jt(n);
  let r2;
  return function(...o) {
    clearTimeout(r2), r2 = setTimeout(() => {
      n(...o);
    }, e2);
  };
}
function Jt(t2) {
  if (typeof t2 != "function")
    return t2;
  let e2 = false, n, r2;
  return function(...o) {
    return n = o, e2 || (e2 = true, r2 = Promise.resolve().then(() => (e2 = false, r2 = void 0, t2(...n)))), r2;
  };
}
const x$1 = /* @__PURE__ */ new Set(), vt = /* @__PURE__ */ new WeakMap();
function hn() {
  x$1.forEach((t2) => {
    t2(...vt.get(t2));
  }), x$1.clear();
}
function oo(t2, ...e2) {
  if (typeof t2 != "function")
    return t2;
  vt.set(t2, e2), !x$1.has(t2) && (x$1.add(t2), x$1.size === 1 && Promise.resolve().then(hn));
}
const T = Symbol("LAYOUT_KEY"), v$1 = Symbol("EMITTER_KEY");
function A(r2) {
  let n = 0, t2;
  for (let e2 = 0, i2 = r2.length; e2 < i2; e2++)
    t2 = r2[e2].y + r2[e2].h, t2 > n && (n = t2);
  return n;
}
function Y(r2) {
  const n = Array(r2.length);
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    n[t2] = y$1(r2[t2]);
  return n;
}
function y$1(r2) {
  return { ...r2 };
}
function a$1(r2, n) {
  return !(r2 === n || r2.x + r2.w <= n.x || r2.x >= n.x + n.w || r2.y + r2.h <= n.y || r2.y >= n.y + n.h);
}
function $(r2, n, t2) {
  const e2 = b(r2), i2 = g(r2), o = Array(r2.length);
  for (let s2 = 0, f = i2.length; s2 < f; s2++) {
    let c2 = i2[s2];
    c2.static || (c2 = E(e2, c2, n, t2), e2.push(c2)), o[r2.findIndex((l) => l.i === c2.i)] = c2, c2.moved = false;
  }
  return o;
}
function E(r2, n, t2, e2) {
  if (t2)
    for (; n.y > 0 && !h(r2, n); )
      n.y--;
  else if (e2) {
    const o = e2[n.i].y;
    for (; n.y > o && !h(r2, n); )
      n.y--;
  }
  let i2;
  for (; i2 = h(r2, n); )
    n.y = i2.y + i2.h;
  return n;
}
function _(r2, n) {
  const t2 = b(r2);
  for (let e2 = 0, i2 = r2.length; e2 < i2; e2++) {
    const o = r2[e2];
    if (o.x + o.w > n.cols && (o.x = n.cols - o.w), o.x < 0 && (o.x = 0, o.w = n.cols), !o.static) t2.push(o);
    else
      for (; h(t2, o); )
        o.y++;
  }
  return r2;
}
function C(r2, n) {
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    if (r2[t2].i === n) return r2[t2];
}
function h(r2, n) {
  for (let t2 = 0, e2 = r2.length; t2 < e2; t2++)
    if (a$1(r2[t2], n)) return r2[t2];
}
function L(r2, n) {
  return r2.filter((t2) => a$1(t2, n));
}
function b(r2) {
  return r2.filter((n) => n.static);
}
function x(r2, n, t2, e2, i2 = false, o = false) {
  if (n.static) return r2;
  const s2 = n.x, f = n.y, c2 = e2 && n.y > e2;
  typeof t2 == "number" && (n.x = t2), typeof e2 == "number" && (n.y = e2), n.moved = true;
  let l = g(r2);
  c2 && (l = l.reverse());
  const p = L(l, n);
  if (o && p.length)
    return n.x = s2, n.y = f, n.moved = false, r2;
  for (let w = 0, m = p.length; w < m; w++) {
    const u = p[w];
    u.moved || n.y > u.y && n.y - u.y > u.h / 4 || (u.static ? r2 = d$1(r2, u, n, i2) : r2 = d$1(r2, n, u, i2));
  }
  return r2;
}
function d$1(r2, n, t2, e2) {
  if (e2) {
    const o = {
      x: t2.x,
      y: t2.y,
      w: t2.w,
      h: t2.h
    };
    if (o.y = Math.max(n.y - t2.h, 0), !h(r2, o))
      return x(r2, t2, void 0, o.y, false);
  }
  return x(r2, t2, void 0, t2.y + 1, false);
}
function G(r2, n, t2, e2) {
  const i2 = "translate3d(" + n + "px," + r2 + "px, 0)";
  return {
    transform: i2,
    WebkitTransform: i2,
    MozTransform: i2,
    msTransform: i2,
    OTransform: i2,
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function O(r2, n, t2, e2) {
  const i2 = "translate3d(" + n * -1 + "px," + r2 + "px, 0)";
  return {
    transform: i2,
    WebkitTransform: i2,
    MozTransform: i2,
    msTransform: i2,
    OTransform: i2,
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function R(r2, n, t2, e2) {
  return {
    top: r2 + "px",
    left: n + "px",
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function V(r2, n, t2, e2) {
  return {
    top: r2 + "px",
    right: n + "px",
    width: t2 + "px",
    height: e2 + "px",
    position: "absolute"
  };
}
function g(r2) {
  return Array.from(r2).sort(function(n, t2) {
    return n.y === t2.y && n.x === t2.x ? 0 : n.y > t2.y || n.y === t2.y && n.x > t2.x ? 1 : -1;
  });
}
function k(r2, n) {
  n = n || "Layout";
  const t2 = ["x", "y", "w", "h"], e2 = [];
  if (!Array.isArray(r2)) throw new Error(n + " must be an array!");
  for (let i2 = 0, o = r2.length; i2 < o; i2++) {
    const s2 = r2[i2];
    for (let f = 0; f < t2.length; f++)
      if (typeof s2[t2[f]] != "number")
        throw new Error(
          "VueGridLayout: " + n + "[" + i2 + "]." + t2[f] + " must be a number!"
        );
    if (s2.i === void 0 || s2.i === null)
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i cannot be null!");
    if (typeof s2.i != "number" && typeof s2.i != "string")
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i must be a string or number!");
    if (e2.indexOf(s2.i) >= 0)
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].i must be unique!");
    if (e2.push(s2.i), s2.static !== void 0 && typeof s2.static != "boolean")
      throw new Error("VueGridLayout: " + n + "[" + i2 + "].static must be a boolean!");
  }
}
function K(r2, n = "vgl") {
  const t2 = () => `${n}-${r2}`;
  return {
    b: t2,
    be: (s2) => `${t2()}__${s2}`,
    bm: (s2) => `${t2()}--${s2}`,
    bem: (s2, f) => `${t2()}__${s2}--${f}`
  };
}
function a(t2) {
  return c(t2);
}
function c(t2) {
  var f;
  const n = ((f = t2.target) == null ? void 0 : f.offsetParent) || document.body, e2 = t2.offsetParent === document.body ? { left: 0, top: 0 } : n.getBoundingClientRect(), o = t2.clientX + n.scrollLeft - e2.left, r2 = t2.clientY + n.scrollTop - e2.top;
  return { x: o, y: r2 };
}
function i(t2, n, e2, o) {
  return s(t2) ? {
    deltaX: e2 - t2,
    deltaY: o - n,
    lastX: t2,
    lastY: n,
    x: e2,
    y: o
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: e2,
    lastY: o,
    x: e2,
    y: o
  };
}
function s(t2) {
  return typeof t2 == "number" && !Number.isNaN(t2);
}
function y(t2, e2) {
  const o = d(t2);
  let n = o[0];
  for (let r2 = 1, c2 = o.length; r2 < c2; r2++) {
    const i2 = o[r2];
    e2 > t2[i2] && (n = i2);
  }
  return n;
}
function B(t2, e2) {
  if (!e2[t2])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + t2 + " is missing!"
    );
  return e2[t2];
}
function v(t2, e2, o, n, r2, c2, i2) {
  if (e2[n]) return Y(e2[n]);
  let s2 = t2;
  const u = d(o), l = u.slice(u.indexOf(n));
  for (let f = 0, g2 = l.length; f < g2; f++) {
    const a2 = l[f];
    if (e2[a2]) {
      s2 = e2[a2];
      break;
    }
  }
  return s2 = Y(s2 || []), $(_(s2, { cols: c2 }), i2);
}
function d(t2) {
  return Object.keys(t2).sort((o, n) => t2[o] - t2[n]);
}
let t = "auto";
function e() {
  return typeof document < "u";
}
function r() {
  return e() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : t;
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var interact_min$1 = { exports: {} };
var interact_min = interact_min$1.exports;
var hasRequiredInteract_min;
function requireInteract_min() {
  if (hasRequiredInteract_min) return interact_min$1.exports;
  hasRequiredInteract_min = 1;
  (function(module, exports$1) {
    !(function(t2, e2) {
      module.exports = e2();
    })(interact_min, (function() {
      function t2(t3, e3) {
        var n2 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var r3 = Object.getOwnPropertySymbols(t3);
          e3 && (r3 = r3.filter((function(e4) {
            return Object.getOwnPropertyDescriptor(t3, e4).enumerable;
          }))), n2.push.apply(n2, r3);
        }
        return n2;
      }
      function e2(e3) {
        for (var n2 = 1; n2 < arguments.length; n2++) {
          var r3 = null != arguments[n2] ? arguments[n2] : {};
          n2 % 2 ? t2(Object(r3), true).forEach((function(t3) {
            a2(e3, t3, r3[t3]);
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : t2(Object(r3)).forEach((function(t3) {
            Object.defineProperty(e3, t3, Object.getOwnPropertyDescriptor(r3, t3));
          }));
        }
        return e3;
      }
      function n(t3) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, n(t3);
      }
      function r2(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function i2(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t3, d2(r3.key), r3);
        }
      }
      function o(t3, e3, n2) {
        return e3 && i2(t3.prototype, e3), Object.defineProperty(t3, "prototype", { writable: false }), t3;
      }
      function a2(t3, e3, n2) {
        return (e3 = d2(e3)) in t3 ? Object.defineProperty(t3, e3, { value: n2, enumerable: true, configurable: true, writable: true }) : t3[e3] = n2, t3;
      }
      function s2(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, writable: true, configurable: true } }), Object.defineProperty(t3, "prototype", { writable: false }), e3 && l(t3, e3);
      }
      function c2(t3) {
        return c2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        }, c2(t3);
      }
      function l(t3, e3) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
          return t4.__proto__ = e4, t4;
        }, l(t3, e3);
      }
      function u(t3) {
        if (void 0 === t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function p(t3) {
        var e3 = (function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if ("function" == typeof Proxy) return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
            }))), true;
          } catch (t4) {
            return false;
          }
        })();
        return function() {
          var n2, r3 = c2(t3);
          if (e3) {
            var i3 = c2(this).constructor;
            n2 = Reflect.construct(r3, arguments, i3);
          } else n2 = r3.apply(this, arguments);
          return (function(t4, e4) {
            if (e4 && ("object" == typeof e4 || "function" == typeof e4)) return e4;
            if (void 0 !== e4) throw new TypeError("Derived constructors may only return object or undefined");
            return u(t4);
          })(this, n2);
        };
      }
      function f() {
        return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t3, e3, n2) {
          var r3 = (function(t4, e4) {
            for (; !Object.prototype.hasOwnProperty.call(t4, e4) && null !== (t4 = c2(t4)); ) ;
            return t4;
          })(t3, e3);
          if (r3) {
            var i3 = Object.getOwnPropertyDescriptor(r3, e3);
            return i3.get ? i3.get.call(arguments.length < 3 ? t3 : n2) : i3.value;
          }
        }, f.apply(this, arguments);
      }
      function d2(t3) {
        var e3 = (function(t4, e4) {
          if ("object" != typeof t4 || null === t4) return t4;
          var n2 = t4[Symbol.toPrimitive];
          if (void 0 !== n2) {
            var r3 = n2.call(t4, e4);
            if ("object" != typeof r3) return r3;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t4);
        })(t3, "string");
        return "symbol" == typeof e3 ? e3 : e3 + "";
      }
      var h2 = function(t3) {
        return !(!t3 || !t3.Window) && t3 instanceof t3.Window;
      }, v2 = void 0, g2 = void 0;
      function m(t3) {
        v2 = t3;
        var e3 = t3.document.createTextNode("");
        e3.ownerDocument !== t3.document && "function" == typeof t3.wrap && t3.wrap(e3) === e3 && (t3 = t3.wrap(t3)), g2 = t3;
      }
      function y2(t3) {
        return h2(t3) ? t3 : (t3.ownerDocument || t3).defaultView || g2.window;
      }
      "undefined" != typeof window && window && m(window);
      var b2 = function(t3) {
        return !!t3 && "object" === n(t3);
      }, x2 = function(t3) {
        return "function" == typeof t3;
      }, w = { window: function(t3) {
        return t3 === g2 || h2(t3);
      }, docFrag: function(t3) {
        return b2(t3) && 11 === t3.nodeType;
      }, object: b2, func: x2, number: function(t3) {
        return "number" == typeof t3;
      }, bool: function(t3) {
        return "boolean" == typeof t3;
      }, string: function(t3) {
        return "string" == typeof t3;
      }, element: function(t3) {
        if (!t3 || "object" !== n(t3)) return false;
        var e3 = y2(t3) || g2;
        return /object|function/.test("undefined" == typeof Element ? "undefined" : n(Element)) ? t3 instanceof Element || t3 instanceof e3.Element : 1 === t3.nodeType && "string" == typeof t3.nodeName;
      }, plainObject: function(t3) {
        return b2(t3) && !!t3.constructor && /function Object\b/.test(t3.constructor.toString());
      }, array: function(t3) {
        return b2(t3) && void 0 !== t3.length && x2(t3.splice);
      } };
      function E2(t3) {
        var e3 = t3.interaction;
        if ("drag" === e3.prepared.name) {
          var n2 = e3.prepared.axis;
          "x" === n2 ? (e3.coords.cur.page.y = e3.coords.start.page.y, e3.coords.cur.client.y = e3.coords.start.client.y, e3.coords.velocity.client.y = 0, e3.coords.velocity.page.y = 0) : "y" === n2 && (e3.coords.cur.page.x = e3.coords.start.page.x, e3.coords.cur.client.x = e3.coords.start.client.x, e3.coords.velocity.client.x = 0, e3.coords.velocity.page.x = 0);
        }
      }
      function T2(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("drag" === n2.prepared.name) {
          var r3 = n2.prepared.axis;
          if ("x" === r3 || "y" === r3) {
            var i3 = "x" === r3 ? "y" : "x";
            e3.page[i3] = n2.coords.start.page[i3], e3.client[i3] = n2.coords.start.client[i3], e3.delta[i3] = 0;
          }
        }
      }
      var S = { id: "actions/drag", install: function(t3) {
        var e3 = t3.actions, n2 = t3.Interactable, r3 = t3.defaults;
        n2.prototype.draggable = S.draggable, e3.map.drag = S, e3.methodDict.drag = "draggable", r3.actions.drag = S.defaults;
      }, listeners: { "interactions:before-action-move": E2, "interactions:action-resume": E2, "interactions:action-move": T2, "auto-start:check": function(t3) {
        var e3 = t3.interaction, n2 = t3.interactable, r3 = t3.buttons, i3 = n2.options.drag;
        if (i3 && i3.enabled && (!e3.pointerIsDown || !/mouse|pointer/.test(e3.pointerType) || 0 != (r3 & n2.options.drag.mouseButtons))) return t3.action = { name: "drag", axis: "start" === i3.lockAxis ? i3.startAxis : i3.lockAxis }, false;
      } }, draggable: function(t3) {
        return w.object(t3) ? (this.options.drag.enabled = false !== t3.enabled, this.setPerAction("drag", t3), this.setOnEvents("drag", t3), /^(xy|x|y|start)$/.test(t3.lockAxis) && (this.options.drag.lockAxis = t3.lockAxis), /^(xy|x|y)$/.test(t3.startAxis) && (this.options.drag.startAxis = t3.startAxis), this) : w.bool(t3) ? (this.options.drag.enabled = t3, this) : this.options.drag;
      }, beforeMove: E2, move: T2, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t3) {
        return 0 === t3.search("drag");
      } }, _2 = S, P2 = { init: function(t3) {
        var e3 = t3;
        P2.document = e3.document, P2.DocumentFragment = e3.DocumentFragment || O2, P2.SVGElement = e3.SVGElement || O2, P2.SVGSVGElement = e3.SVGSVGElement || O2, P2.SVGElementInstance = e3.SVGElementInstance || O2, P2.Element = e3.Element || O2, P2.HTMLElement = e3.HTMLElement || P2.Element, P2.Event = e3.Event, P2.Touch = e3.Touch || O2, P2.PointerEvent = e3.PointerEvent || e3.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function O2() {
      }
      var k2 = P2;
      var D2 = { init: function(t3) {
        var e3 = k2.Element, n2 = t3.navigator || {};
        D2.supportsTouch = "ontouchstart" in t3 || w.func(t3.DocumentTouch) && k2.document instanceof t3.DocumentTouch, D2.supportsPointerEvent = false !== n2.pointerEnabled && !!k2.PointerEvent, D2.isIOS = /iP(hone|od|ad)/.test(n2.platform), D2.isIOS7 = /iP(hone|od|ad)/.test(n2.platform) && /OS 7[^\d]/.test(n2.appVersion), D2.isIe9 = /MSIE 9/.test(n2.userAgent), D2.isOperaMobile = "Opera" === n2.appName && D2.supportsTouch && /Presto/.test(n2.userAgent), D2.prefixedMatchesSelector = "matches" in e3.prototype ? "matches" : "webkitMatchesSelector" in e3.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e3.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e3.prototype ? "oMatchesSelector" : "msMatchesSelector", D2.pEventTypes = D2.supportsPointerEvent ? k2.PointerEvent === t3.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, D2.wheelEvent = k2.document && "onmousewheel" in k2.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null };
      var I = D2;
      function M(t3, e3) {
        if (t3.contains) return t3.contains(e3);
        for (; e3; ) {
          if (e3 === t3) return true;
          e3 = e3.parentNode;
        }
        return false;
      }
      function z(t3, e3) {
        for (; w.element(t3); ) {
          if (R2(t3, e3)) return t3;
          t3 = A2(t3);
        }
        return null;
      }
      function A2(t3) {
        var e3 = t3.parentNode;
        if (w.docFrag(e3)) {
          for (; (e3 = e3.host) && w.docFrag(e3); ) ;
          return e3;
        }
        return e3;
      }
      function R2(t3, e3) {
        return g2 !== v2 && (e3 = e3.replace(/\/deep\//g, " ")), t3[I.prefixedMatchesSelector](e3);
      }
      var C2 = function(t3) {
        return t3.parentNode || t3.host;
      };
      function j(t3, e3) {
        for (var n2, r3 = [], i3 = t3; (n2 = C2(i3)) && i3 !== e3 && n2 !== i3.ownerDocument; ) r3.unshift(i3), i3 = n2;
        return r3;
      }
      function F(t3, e3, n2) {
        for (; w.element(t3); ) {
          if (R2(t3, e3)) return true;
          if ((t3 = A2(t3)) === n2) return R2(t3, e3);
        }
        return false;
      }
      function X2(t3) {
        return t3.correspondingUseElement || t3;
      }
      function Y2(t3) {
        var e3 = t3 instanceof k2.SVGElement ? t3.getBoundingClientRect() : t3.getClientRects()[0];
        return e3 && { left: e3.left, right: e3.right, top: e3.top, bottom: e3.bottom, width: e3.width || e3.right - e3.left, height: e3.height || e3.bottom - e3.top };
      }
      function L2(t3) {
        var e3, n2 = Y2(t3);
        if (!I.isIOS7 && n2) {
          var r3 = { x: (e3 = (e3 = y2(t3)) || g2).scrollX || e3.document.documentElement.scrollLeft, y: e3.scrollY || e3.document.documentElement.scrollTop };
          n2.left += r3.x, n2.right += r3.x, n2.top += r3.y, n2.bottom += r3.y;
        }
        return n2;
      }
      function q(t3) {
        for (var e3 = []; t3; ) e3.push(t3), t3 = A2(t3);
        return e3;
      }
      function B2(t3) {
        return !!w.string(t3) && (k2.document.querySelector(t3), true);
      }
      function V2(t3, e3) {
        for (var n2 in e3) t3[n2] = e3[n2];
        return t3;
      }
      function W2(t3, e3, n2) {
        return "parent" === t3 ? A2(n2) : "self" === t3 ? e3.getRect(n2) : z(n2, t3);
      }
      function G2(t3, e3, n2, r3) {
        var i3 = t3;
        return w.string(i3) ? i3 = W2(i3, e3, n2) : w.func(i3) && (i3 = i3.apply(void 0, r3)), w.element(i3) && (i3 = L2(i3)), i3;
      }
      function N(t3) {
        return t3 && { x: "x" in t3 ? t3.x : t3.left, y: "y" in t3 ? t3.y : t3.top };
      }
      function U(t3) {
        return !t3 || "x" in t3 && "y" in t3 || ((t3 = V2({}, t3)).x = t3.left || 0, t3.y = t3.top || 0, t3.width = t3.width || (t3.right || 0) - t3.x, t3.height = t3.height || (t3.bottom || 0) - t3.y), t3;
      }
      function H(t3, e3, n2) {
        t3.left && (e3.left += n2.x), t3.right && (e3.right += n2.x), t3.top && (e3.top += n2.y), t3.bottom && (e3.bottom += n2.y), e3.width = e3.right - e3.left, e3.height = e3.bottom - e3.top;
      }
      function K2(t3, e3, n2) {
        var r3 = n2 && t3.options[n2];
        return N(G2(r3 && r3.origin || t3.options.origin, t3, e3, [t3 && e3])) || { x: 0, y: 0 };
      }
      function $2(t3, e3) {
        var n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t4) {
          return true;
        }, r3 = arguments.length > 3 ? arguments[3] : void 0;
        if (r3 = r3 || {}, w.string(t3) && -1 !== t3.search(" ") && (t3 = J(t3)), w.array(t3)) return t3.forEach((function(t4) {
          return $2(t4, e3, n2, r3);
        })), r3;
        if (w.object(t3) && (e3 = t3, t3 = ""), w.func(e3) && n2(t3)) r3[t3] = r3[t3] || [], r3[t3].push(e3);
        else if (w.array(e3)) for (var i3 = 0, o2 = e3; i3 < o2.length; i3++) {
          var a3 = o2[i3];
          $2(t3, a3, n2, r3);
        }
        else if (w.object(e3)) for (var s3 in e3) {
          $2(J(s3).map((function(e4) {
            return "".concat(t3).concat(e4);
          })), e3[s3], n2, r3);
        }
        return r3;
      }
      function J(t3) {
        return t3.trim().split(/ +/);
      }
      var Q = function(t3, e3) {
        return Math.sqrt(t3 * t3 + e3 * e3);
      }, Z2 = ["webkit", "moz"];
      function tt2(t3, e3) {
        t3.__set || (t3.__set = {});
        var n2 = function(n3) {
          if (Z2.some((function(t4) {
            return 0 === n3.indexOf(t4);
          }))) return 1;
          "function" != typeof t3[n3] && "__set" !== n3 && Object.defineProperty(t3, n3, { get: function() {
            return n3 in t3.__set ? t3.__set[n3] : t3.__set[n3] = e3[n3];
          }, set: function(e4) {
            t3.__set[n3] = e4;
          }, configurable: true });
        };
        for (var r3 in e3) n2(r3);
        return t3;
      }
      function et(t3, e3) {
        t3.page = t3.page || {}, t3.page.x = e3.page.x, t3.page.y = e3.page.y, t3.client = t3.client || {}, t3.client.x = e3.client.x, t3.client.y = e3.client.y, t3.timeStamp = e3.timeStamp;
      }
      function nt2(t3) {
        t3.page.x = 0, t3.page.y = 0, t3.client.x = 0, t3.client.y = 0;
      }
      function rt2(t3) {
        return t3 instanceof k2.Event || t3 instanceof k2.Touch;
      }
      function it2(t3, e3, n2) {
        return t3 = t3 || "page", (n2 = n2 || {}).x = e3[t3 + "X"], n2.y = e3[t3 + "Y"], n2;
      }
      function ot(t3, e3) {
        return e3 = e3 || { x: 0, y: 0 }, I.isOperaMobile && rt2(t3) ? (it2("screen", t3, e3), e3.x += window.scrollX, e3.y += window.scrollY) : it2("page", t3, e3), e3;
      }
      function at(t3) {
        return w.number(t3.pointerId) ? t3.pointerId : t3.identifier;
      }
      function st2(t3, e3, n2) {
        var r3 = e3.length > 1 ? lt(e3) : e3[0];
        ot(r3, t3.page), (function(t4, e4) {
          e4 = e4 || {}, I.isOperaMobile && rt2(t4) ? it2("screen", t4, e4) : it2("client", t4, e4);
        })(r3, t3.client), t3.timeStamp = n2;
      }
      function ct(t3) {
        var e3 = [];
        return w.array(t3) ? (e3[0] = t3[0], e3[1] = t3[1]) : "touchend" === t3.type ? 1 === t3.touches.length ? (e3[0] = t3.touches[0], e3[1] = t3.changedTouches[0]) : 0 === t3.touches.length && (e3[0] = t3.changedTouches[0], e3[1] = t3.changedTouches[1]) : (e3[0] = t3.touches[0], e3[1] = t3.touches[1]), e3;
      }
      function lt(t3) {
        for (var e3 = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n2 = 0; n2 < t3.length; n2++) {
          var r3 = t3[n2];
          for (var i3 in e3) e3[i3] += r3[i3];
        }
        for (var o2 in e3) e3[o2] /= t3.length;
        return e3;
      }
      function ut(t3) {
        if (!t3.length) return null;
        var e3 = ct(t3), n2 = Math.min(e3[0].pageX, e3[1].pageX), r3 = Math.min(e3[0].pageY, e3[1].pageY), i3 = Math.max(e3[0].pageX, e3[1].pageX), o2 = Math.max(e3[0].pageY, e3[1].pageY);
        return { x: n2, y: r3, left: n2, top: r3, right: i3, bottom: o2, width: i3 - n2, height: o2 - r3 };
      }
      function pt2(t3, e3) {
        var n2 = e3 + "X", r3 = e3 + "Y", i3 = ct(t3), o2 = i3[0][n2] - i3[1][n2], a3 = i3[0][r3] - i3[1][r3];
        return Q(o2, a3);
      }
      function ft(t3, e3) {
        var n2 = e3 + "X", r3 = e3 + "Y", i3 = ct(t3), o2 = i3[1][n2] - i3[0][n2], a3 = i3[1][r3] - i3[0][r3];
        return 180 * Math.atan2(a3, o2) / Math.PI;
      }
      function dt2(t3) {
        return w.string(t3.pointerType) ? t3.pointerType : w.number(t3.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t3.pointerType] : /touch/.test(t3.type || "") || t3 instanceof k2.Touch ? "touch" : "mouse";
      }
      function ht(t3) {
        var e3 = w.func(t3.composedPath) ? t3.composedPath() : t3.path;
        return [X2(e3 ? e3[0] : t3.target), X2(t3.currentTarget)];
      }
      var vt2 = (function() {
        function t3(e3) {
          r2(this, t3), this.immediatePropagationStopped = false, this.propagationStopped = false, this._interaction = e3;
        }
        return o(t3, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), t3;
      })();
      Object.defineProperty(vt2.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var gt = function(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          t3.push(r3);
        }
        return t3;
      }, mt = function(t3) {
        return gt([], t3);
      }, yt = function(t3, e3) {
        for (var n2 = 0; n2 < t3.length; n2++) if (e3(t3[n2], n2, t3)) return n2;
        return -1;
      }, bt = function(t3, e3) {
        return t3[yt(t3, e3)];
      }, xt = (function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2) {
          var a3;
          r2(this, n2), (a3 = e3.call(this, i3._interaction)).dropzone = void 0, a3.dragEvent = void 0, a3.relatedTarget = void 0, a3.draggable = void 0, a3.propagationStopped = false, a3.immediatePropagationStopped = false;
          var s3 = "dragleave" === o2 ? t4.prev : t4.cur, c3 = s3.element, l2 = s3.dropzone;
          return a3.type = o2, a3.target = c3, a3.currentTarget = c3, a3.dropzone = l2, a3.dragEvent = i3, a3.relatedTarget = i3.target, a3.draggable = i3.interactable, a3.timeStamp = i3.timeStamp, a3;
        }
        return o(n2, [{ key: "reject", value: function() {
          var t4 = this, e4 = this._interaction.dropState;
          if ("dropactivate" === this.type || this.dropzone && e4.cur.dropzone === this.dropzone && e4.cur.element === this.target) if (e4.prev.dropzone = this.dropzone, e4.prev.element = this.target, e4.rejected = true, e4.events.enter = null, this.stopImmediatePropagation(), "dropactivate" === this.type) {
            var r3 = e4.activeDrops, i3 = yt(r3, (function(e5) {
              var n3 = e5.dropzone, r4 = e5.element;
              return n3 === t4.dropzone && r4 === t4.target;
            }));
            e4.activeDrops.splice(i3, 1);
            var o2 = new n2(e4, this.dragEvent, "dropdeactivate");
            o2.dropzone = this.dropzone, o2.target = this.target, this.dropzone.fire(o2);
          } else this.dropzone.fire(new n2(e4, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }]), n2;
      })(vt2);
      function wt(t3, e3) {
        for (var n2 = 0, r3 = t3.slice(); n2 < r3.length; n2++) {
          var i3 = r3[n2], o2 = i3.dropzone, a3 = i3.element;
          e3.dropzone = o2, e3.target = a3, o2.fire(e3), e3.propagationStopped = e3.immediatePropagationStopped = false;
        }
      }
      function Et(t3, e3) {
        for (var n2 = (function(t4, e4) {
          for (var n3 = [], r4 = 0, i4 = t4.interactables.list; r4 < i4.length; r4++) {
            var o2 = i4[r4];
            if (o2.options.drop.enabled) {
              var a3 = o2.options.drop.accept;
              if (!(w.element(a3) && a3 !== e4 || w.string(a3) && !R2(e4, a3) || w.func(a3) && !a3({ dropzone: o2, draggableElement: e4 }))) for (var s3 = 0, c3 = o2.getAllElements(); s3 < c3.length; s3++) {
                var l2 = c3[s3];
                l2 !== e4 && n3.push({ dropzone: o2, element: l2, rect: o2.getRect(l2) });
              }
            }
          }
          return n3;
        })(t3, e3), r3 = 0; r3 < n2.length; r3++) {
          var i3 = n2[r3];
          i3.rect = i3.dropzone.getRect(i3.element);
        }
        return n2;
      }
      function Tt(t3, e3, n2) {
        for (var r3 = t3.dropState, i3 = t3.interactable, o2 = t3.element, a3 = [], s3 = 0, c3 = r3.activeDrops; s3 < c3.length; s3++) {
          var l2 = c3[s3], u2 = l2.dropzone, p2 = l2.element, f2 = l2.rect, d3 = u2.dropCheck(e3, n2, i3, o2, p2, f2);
          a3.push(d3 ? p2 : null);
        }
        var h3 = (function(t4) {
          for (var e4, n3, r4, i4 = [], o3 = 0; o3 < t4.length; o3++) {
            var a4 = t4[o3], s4 = t4[e4];
            if (a4 && o3 !== e4) if (s4) {
              var c4 = C2(a4), l3 = C2(s4);
              if (c4 !== a4.ownerDocument) if (l3 !== a4.ownerDocument) if (c4 !== l3) {
                i4 = i4.length ? i4 : j(s4);
                var u3 = void 0;
                if (s4 instanceof k2.HTMLElement && a4 instanceof k2.SVGElement && !(a4 instanceof k2.SVGSVGElement)) {
                  if (a4 === l3) continue;
                  u3 = a4.ownerSVGElement;
                } else u3 = a4;
                for (var p3 = j(u3, s4.ownerDocument), f3 = 0; p3[f3] && p3[f3] === i4[f3]; ) f3++;
                var d4 = [p3[f3 - 1], p3[f3], i4[f3]];
                if (d4[0]) for (var h4 = d4[0].lastChild; h4; ) {
                  if (h4 === d4[1]) {
                    e4 = o3, i4 = p3;
                    break;
                  }
                  if (h4 === d4[2]) break;
                  h4 = h4.previousSibling;
                }
              } else r4 = s4, (parseInt(y2(n3 = a4).getComputedStyle(n3).zIndex, 10) || 0) >= (parseInt(y2(r4).getComputedStyle(r4).zIndex, 10) || 0) && (e4 = o3);
              else e4 = o3;
            } else e4 = o3;
          }
          return e4;
        })(a3);
        return r3.activeDrops[h3] || null;
      }
      function St(t3, e3, n2) {
        var r3 = t3.dropState, i3 = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return "dragstart" === n2.type && (i3.activate = new xt(r3, n2, "dropactivate"), i3.activate.target = null, i3.activate.dropzone = null), "dragend" === n2.type && (i3.deactivate = new xt(r3, n2, "dropdeactivate"), i3.deactivate.target = null, i3.deactivate.dropzone = null), r3.rejected || (r3.cur.element !== r3.prev.element && (r3.prev.dropzone && (i3.leave = new xt(r3, n2, "dragleave"), n2.dragLeave = i3.leave.target = r3.prev.element, n2.prevDropzone = i3.leave.dropzone = r3.prev.dropzone), r3.cur.dropzone && (i3.enter = new xt(r3, n2, "dragenter"), n2.dragEnter = r3.cur.element, n2.dropzone = r3.cur.dropzone)), "dragend" === n2.type && r3.cur.dropzone && (i3.drop = new xt(r3, n2, "drop"), n2.dropzone = r3.cur.dropzone, n2.relatedTarget = r3.cur.element), "dragmove" === n2.type && r3.cur.dropzone && (i3.move = new xt(r3, n2, "dropmove"), n2.dropzone = r3.cur.dropzone)), i3;
      }
      function _t(t3, e3) {
        var n2 = t3.dropState, r3 = n2.activeDrops, i3 = n2.cur, o2 = n2.prev;
        e3.leave && o2.dropzone.fire(e3.leave), e3.enter && i3.dropzone.fire(e3.enter), e3.move && i3.dropzone.fire(e3.move), e3.drop && i3.dropzone.fire(e3.drop), e3.deactivate && wt(r3, e3.deactivate), n2.prev.dropzone = i3.dropzone, n2.prev.element = i3.element;
      }
      function Pt2(t3, e3) {
        var n2 = t3.interaction, r3 = t3.iEvent, i3 = t3.event;
        if ("dragmove" === r3.type || "dragend" === r3.type) {
          var o2 = n2.dropState;
          e3.dynamicDrop && (o2.activeDrops = Et(e3, n2.element));
          var a3 = r3, s3 = Tt(n2, a3, i3);
          o2.rejected = o2.rejected && !!s3 && s3.dropzone === o2.cur.dropzone && s3.element === o2.cur.element, o2.cur.dropzone = s3 && s3.dropzone, o2.cur.element = s3 && s3.element, o2.events = St(n2, 0, a3);
        }
      }
      var Ot2 = { id: "actions/drop", install: function(t3) {
        var e3 = t3.actions, n2 = t3.interactStatic, r3 = t3.Interactable, i3 = t3.defaults;
        t3.usePlugin(_2), r3.prototype.dropzone = function(t4) {
          return (function(t5, e4) {
            if (w.object(e4)) {
              if (t5.options.drop.enabled = false !== e4.enabled, e4.listeners) {
                var n3 = $2(e4.listeners), r4 = Object.keys(n3).reduce((function(t6, e5) {
                  return t6[/^(enter|leave)/.test(e5) ? "drag".concat(e5) : /^(activate|deactivate|move)/.test(e5) ? "drop".concat(e5) : e5] = n3[e5], t6;
                }), {}), i4 = t5.options.drop.listeners;
                i4 && t5.off(i4), t5.on(r4), t5.options.drop.listeners = r4;
              }
              return w.func(e4.ondrop) && t5.on("drop", e4.ondrop), w.func(e4.ondropactivate) && t5.on("dropactivate", e4.ondropactivate), w.func(e4.ondropdeactivate) && t5.on("dropdeactivate", e4.ondropdeactivate), w.func(e4.ondragenter) && t5.on("dragenter", e4.ondragenter), w.func(e4.ondragleave) && t5.on("dragleave", e4.ondragleave), w.func(e4.ondropmove) && t5.on("dropmove", e4.ondropmove), /^(pointer|center)$/.test(e4.overlap) ? t5.options.drop.overlap = e4.overlap : w.number(e4.overlap) && (t5.options.drop.overlap = Math.max(Math.min(1, e4.overlap), 0)), "accept" in e4 && (t5.options.drop.accept = e4.accept), "checker" in e4 && (t5.options.drop.checker = e4.checker), t5;
            }
            if (w.bool(e4)) return t5.options.drop.enabled = e4, t5;
            return t5.options.drop;
          })(this, t4);
        }, r3.prototype.dropCheck = function(t4, e4, n3, r4, i4, o2) {
          return (function(t5, e5, n4, r5, i5, o3, a3) {
            var s3 = false;
            if (!(a3 = a3 || t5.getRect(o3))) return !!t5.options.drop.checker && t5.options.drop.checker(e5, n4, s3, t5, o3, r5, i5);
            var c3 = t5.options.drop.overlap;
            if ("pointer" === c3) {
              var l2 = K2(r5, i5, "drag"), u2 = ot(e5);
              u2.x += l2.x, u2.y += l2.y;
              var p2 = u2.x > a3.left && u2.x < a3.right, f2 = u2.y > a3.top && u2.y < a3.bottom;
              s3 = p2 && f2;
            }
            var d3 = r5.getRect(i5);
            if (d3 && "center" === c3) {
              var h3 = d3.left + d3.width / 2, v3 = d3.top + d3.height / 2;
              s3 = h3 >= a3.left && h3 <= a3.right && v3 >= a3.top && v3 <= a3.bottom;
            }
            if (d3 && w.number(c3)) {
              s3 = Math.max(0, Math.min(a3.right, d3.right) - Math.max(a3.left, d3.left)) * Math.max(0, Math.min(a3.bottom, d3.bottom) - Math.max(a3.top, d3.top)) / (d3.width * d3.height) >= c3;
            }
            t5.options.drop.checker && (s3 = t5.options.drop.checker(e5, n4, s3, t5, o3, r5, i5));
            return s3;
          })(this, t4, e4, n3, r4, i4, o2);
        }, n2.dynamicDrop = function(e4) {
          return w.bool(e4) ? (t3.dynamicDrop = e4, n2) : t3.dynamicDrop;
        }, V2(e3.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e3.methodDict.drop = "dropzone", t3.dynamicDrop = false, i3.actions.drop = Ot2.defaults;
      }, listeners: { "interactions:before-action-start": function(t3) {
        var e3 = t3.interaction;
        "drag" === e3.prepared.name && (e3.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t3, e3) {
        var n2 = t3.interaction, r3 = (t3.event, t3.iEvent);
        if ("drag" === n2.prepared.name) {
          var i3 = n2.dropState;
          i3.activeDrops = [], i3.events = {}, i3.activeDrops = Et(e3, n2.element), i3.events = St(n2, 0, r3), i3.events.activate && (wt(i3.activeDrops, i3.events.activate), e3.fire("actions/drop:start", { interaction: n2, dragEvent: r3 }));
        }
      }, "interactions:action-move": Pt2, "interactions:after-action-move": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.iEvent;
        if ("drag" === n2.prepared.name) {
          var i3 = n2.dropState;
          _t(n2, i3.events), e3.fire("actions/drop:move", { interaction: n2, dragEvent: r3 }), i3.events = {};
        }
      }, "interactions:action-end": function(t3, e3) {
        if ("drag" === t3.interaction.prepared.name) {
          var n2 = t3.interaction, r3 = t3.iEvent;
          Pt2(t3, e3), _t(n2, n2.dropState.events), e3.fire("actions/drop:end", { interaction: n2, dragEvent: r3 });
        }
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction;
        if ("drag" === e3.prepared.name) {
          var n2 = e3.dropState;
          n2 && (n2.activeDrops = null, n2.events = null, n2.cur.dropzone = null, n2.cur.element = null, n2.prev.dropzone = null, n2.prev.element = null, n2.rejected = false);
        }
      } }, getActiveDrops: Et, getDrop: Tt, getDropEvents: St, fireDropEvents: _t, filterEventType: function(t3) {
        return 0 === t3.search("drag") || 0 === t3.search("drop");
      }, defaults: { enabled: false, accept: null, overlap: "pointer" } }, kt2 = Ot2;
      function Dt2(t3) {
        var e3 = t3.interaction, n2 = t3.iEvent, r3 = t3.phase;
        if ("gesture" === e3.prepared.name) {
          var i3 = e3.pointers.map((function(t4) {
            return t4.pointer;
          })), o2 = "start" === r3, a3 = "end" === r3, s3 = e3.interactable.options.deltaSource;
          if (n2.touches = [i3[0], i3[1]], o2) n2.distance = pt2(i3, s3), n2.box = ut(i3), n2.scale = 1, n2.ds = 0, n2.angle = ft(i3, s3), n2.da = 0, e3.gesture.startDistance = n2.distance, e3.gesture.startAngle = n2.angle;
          else if (a3 || e3.pointers.length < 2) {
            var c3 = e3.prevEvent;
            n2.distance = c3.distance, n2.box = c3.box, n2.scale = c3.scale, n2.ds = 0, n2.angle = c3.angle, n2.da = 0;
          } else n2.distance = pt2(i3, s3), n2.box = ut(i3), n2.scale = n2.distance / e3.gesture.startDistance, n2.angle = ft(i3, s3), n2.ds = n2.scale - e3.gesture.scale, n2.da = n2.angle - e3.gesture.angle;
          e3.gesture.distance = n2.distance, e3.gesture.angle = n2.angle, w.number(n2.scale) && n2.scale !== 1 / 0 && !isNaN(n2.scale) && (e3.gesture.scale = n2.scale);
        }
      }
      var It = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t3) {
        var e3 = t3.actions, n2 = t3.Interactable, r3 = t3.defaults;
        n2.prototype.gesturable = function(t4) {
          return w.object(t4) ? (this.options.gesture.enabled = false !== t4.enabled, this.setPerAction("gesture", t4), this.setOnEvents("gesture", t4), this) : w.bool(t4) ? (this.options.gesture.enabled = t4, this) : this.options.gesture;
        }, e3.map.gesture = It, e3.methodDict.gesture = "gesturable", r3.actions.gesture = It.defaults;
      }, listeners: { "interactions:action-start": Dt2, "interactions:action-move": Dt2, "interactions:action-end": Dt2, "interactions:new": function(t3) {
        t3.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t3) {
        if (!(t3.interaction.pointers.length < 2)) {
          var e3 = t3.interactable.options.gesture;
          if (e3 && e3.enabled) return t3.action = { name: "gesture" }, false;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t3) {
        return 0 === t3.search("gesture");
      } }, Mt2 = It;
      function zt2(t3, e3, n2, r3, i3, o2, a3) {
        if (!e3) return false;
        if (true === e3) {
          var s3 = w.number(o2.width) ? o2.width : o2.right - o2.left, c3 = w.number(o2.height) ? o2.height : o2.bottom - o2.top;
          if (a3 = Math.min(a3, Math.abs(("left" === t3 || "right" === t3 ? s3 : c3) / 2)), s3 < 0 && ("left" === t3 ? t3 = "right" : "right" === t3 && (t3 = "left")), c3 < 0 && ("top" === t3 ? t3 = "bottom" : "bottom" === t3 && (t3 = "top")), "left" === t3) {
            var l2 = s3 >= 0 ? o2.left : o2.right;
            return n2.x < l2 + a3;
          }
          if ("top" === t3) {
            var u2 = c3 >= 0 ? o2.top : o2.bottom;
            return n2.y < u2 + a3;
          }
          if ("right" === t3) return n2.x > (s3 >= 0 ? o2.right : o2.left) - a3;
          if ("bottom" === t3) return n2.y > (c3 >= 0 ? o2.bottom : o2.top) - a3;
        }
        return !!w.element(r3) && (w.element(e3) ? e3 === r3 : F(r3, e3, i3));
      }
      function At2(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("resize" === n2.prepared.name && n2.resizeAxes) {
          var r3 = e3;
          n2.interactable.options.resize.square ? ("y" === n2.resizeAxes ? r3.delta.x = r3.delta.y : r3.delta.y = r3.delta.x, r3.axes = "xy") : (r3.axes = n2.resizeAxes, "x" === n2.resizeAxes ? r3.delta.y = 0 : "y" === n2.resizeAxes && (r3.delta.x = 0));
        }
      }
      var Rt, Ct2, jt = { id: "actions/resize", before: ["actions/drag"], install: function(t3) {
        var e3 = t3.actions, n2 = t3.browser, r3 = t3.Interactable, i3 = t3.defaults;
        jt.cursors = (function(t4) {
          return t4.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        })(n2), jt.defaultMargin = n2.supportsTouch || n2.supportsPointerEvent ? 20 : 10, r3.prototype.resizable = function(e4) {
          return (function(t4, e5, n3) {
            if (w.object(e5)) return t4.options.resize.enabled = false !== e5.enabled, t4.setPerAction("resize", e5), t4.setOnEvents("resize", e5), w.string(e5.axis) && /^x$|^y$|^xy$/.test(e5.axis) ? t4.options.resize.axis = e5.axis : null === e5.axis && (t4.options.resize.axis = n3.defaults.actions.resize.axis), w.bool(e5.preserveAspectRatio) ? t4.options.resize.preserveAspectRatio = e5.preserveAspectRatio : w.bool(e5.square) && (t4.options.resize.square = e5.square), t4;
            if (w.bool(e5)) return t4.options.resize.enabled = e5, t4;
            return t4.options.resize;
          })(this, e4, t3);
        }, e3.map.resize = jt, e3.methodDict.resize = "resizable", i3.actions.resize = jt.defaults;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t3) {
        !(function(t4) {
          var e3 = t4.iEvent, n2 = t4.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r3 = e3, i3 = n2.rect;
            n2._rects = { start: V2({}, i3), corrected: V2({}, i3), previous: V2({}, i3), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, r3.edges = n2.prepared.edges, r3.rect = n2._rects.corrected, r3.deltaRect = n2._rects.delta;
          }
        })(t3), At2(t3);
      }, "interactions:action-move": function(t3) {
        !(function(t4) {
          var e3 = t4.iEvent, n2 = t4.interaction;
          if ("resize" === n2.prepared.name && n2.prepared.edges) {
            var r3 = e3, i3 = n2.interactable.options.resize.invert, o2 = "reposition" === i3 || "negate" === i3, a3 = n2.rect, s3 = n2._rects, c3 = s3.start, l2 = s3.corrected, u2 = s3.delta, p2 = s3.previous;
            if (V2(p2, l2), o2) {
              if (V2(l2, a3), "reposition" === i3) {
                if (l2.top > l2.bottom) {
                  var f2 = l2.top;
                  l2.top = l2.bottom, l2.bottom = f2;
                }
                if (l2.left > l2.right) {
                  var d3 = l2.left;
                  l2.left = l2.right, l2.right = d3;
                }
              }
            } else l2.top = Math.min(a3.top, c3.bottom), l2.bottom = Math.max(a3.bottom, c3.top), l2.left = Math.min(a3.left, c3.right), l2.right = Math.max(a3.right, c3.left);
            for (var h3 in l2.width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2) u2[h3] = l2[h3] - p2[h3];
            r3.edges = n2.prepared.edges, r3.rect = l2, r3.deltaRect = u2;
          }
        })(t3), At2(t3);
      }, "interactions:action-end": function(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction;
        if ("resize" === n2.prepared.name && n2.prepared.edges) {
          var r3 = e3;
          r3.edges = n2.prepared.edges, r3.rect = n2._rects.corrected, r3.deltaRect = n2._rects.delta;
        }
      }, "auto-start:check": function(t3) {
        var e3 = t3.interaction, n2 = t3.interactable, r3 = t3.element, i3 = t3.rect, o2 = t3.buttons;
        if (i3) {
          var a3 = V2({}, e3.coords.cur.page), s3 = n2.options.resize;
          if (s3 && s3.enabled && (!e3.pointerIsDown || !/mouse|pointer/.test(e3.pointerType) || 0 != (o2 & s3.mouseButtons))) {
            if (w.object(s3.edges)) {
              var c3 = { left: false, right: false, top: false, bottom: false };
              for (var l2 in c3) c3[l2] = zt2(l2, s3.edges[l2], a3, e3._latestPointer.eventTarget, r3, i3, s3.margin || jt.defaultMargin);
              c3.left = c3.left && !c3.right, c3.top = c3.top && !c3.bottom, (c3.left || c3.right || c3.top || c3.bottom) && (t3.action = { name: "resize", edges: c3 });
            } else {
              var u2 = "y" !== s3.axis && a3.x > i3.right - jt.defaultMargin, p2 = "x" !== s3.axis && a3.y > i3.bottom - jt.defaultMargin;
              (u2 || p2) && (t3.action = { name: "resize", axes: (u2 ? "x" : "") + (p2 ? "y" : "") });
            }
            return !t3.action && void 0;
          }
        }
      } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t3) {
        var e3 = t3.edges, n2 = t3.axis, r3 = t3.name, i3 = jt.cursors, o2 = null;
        if (n2) o2 = i3[r3 + n2];
        else if (e3) {
          for (var a3 = "", s3 = 0, c3 = ["top", "bottom", "left", "right"]; s3 < c3.length; s3++) {
            var l2 = c3[s3];
            e3[l2] && (a3 += l2);
          }
          o2 = i3[a3];
        }
        return o2;
      }, filterEventType: function(t3) {
        return 0 === t3.search("resize");
      }, defaultMargin: null }, Ft2 = jt, Xt2 = { id: "actions", install: function(t3) {
        t3.usePlugin(Mt2), t3.usePlugin(Ft2), t3.usePlugin(_2), t3.usePlugin(kt2);
      } }, Yt = 0;
      var Lt2 = { request: function(t3) {
        return Rt(t3);
      }, cancel: function(t3) {
        return Ct2(t3);
      }, init: function(t3) {
        if (Rt = t3.requestAnimationFrame, Ct2 = t3.cancelAnimationFrame, !Rt) for (var e3 = ["ms", "moz", "webkit", "o"], n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          Rt = t3["".concat(r3, "RequestAnimationFrame")], Ct2 = t3["".concat(r3, "CancelAnimationFrame")] || t3["".concat(r3, "CancelRequestAnimationFrame")];
        }
        Rt = Rt && Rt.bind(t3), Ct2 = Ct2 && Ct2.bind(t3), Rt || (Rt = function(e4) {
          var n3 = Date.now(), r4 = Math.max(0, 16 - (n3 - Yt)), i3 = t3.setTimeout((function() {
            e4(n3 + r4);
          }), r4);
          return Yt = n3 + r4, i3;
        }, Ct2 = function(t4) {
          return clearTimeout(t4);
        });
      } };
      var qt2 = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t3) {
        qt2.isScrolling = true, Lt2.cancel(qt2.i), t3.autoScroll = qt2, qt2.interaction = t3, qt2.prevTime = qt2.now(), qt2.i = Lt2.request(qt2.scroll);
      }, stop: function() {
        qt2.isScrolling = false, qt2.interaction && (qt2.interaction.autoScroll = null), Lt2.cancel(qt2.i);
      }, scroll: function() {
        var t3 = qt2.interaction, e3 = t3.interactable, n2 = t3.element, r3 = t3.prepared.name, i3 = e3.options[r3].autoScroll, o2 = Bt2(i3.container, e3, n2), a3 = qt2.now(), s3 = (a3 - qt2.prevTime) / 1e3, c3 = i3.speed * s3;
        if (c3 >= 1) {
          var l2 = { x: qt2.x * c3, y: qt2.y * c3 };
          if (l2.x || l2.y) {
            var u2 = Vt(o2);
            w.window(o2) ? o2.scrollBy(l2.x, l2.y) : o2 && (o2.scrollLeft += l2.x, o2.scrollTop += l2.y);
            var p2 = Vt(o2), f2 = { x: p2.x - u2.x, y: p2.y - u2.y };
            (f2.x || f2.y) && e3.fire({ type: "autoscroll", target: n2, interactable: e3, delta: f2, interaction: t3, container: o2 });
          }
          qt2.prevTime = a3;
        }
        qt2.isScrolling && (Lt2.cancel(qt2.i), qt2.i = Lt2.request(qt2.scroll));
      }, check: function(t3, e3) {
        var n2;
        return null == (n2 = t3.options[e3].autoScroll) ? void 0 : n2.enabled;
      }, onInteractionMove: function(t3) {
        var e3 = t3.interaction, n2 = t3.pointer;
        if (e3.interacting() && qt2.check(e3.interactable, e3.prepared.name)) if (e3.simulation) qt2.x = qt2.y = 0;
        else {
          var r3, i3, o2, a3, s3 = e3.interactable, c3 = e3.element, l2 = e3.prepared.name, u2 = s3.options[l2].autoScroll, p2 = Bt2(u2.container, s3, c3);
          if (w.window(p2)) a3 = n2.clientX < qt2.margin, r3 = n2.clientY < qt2.margin, i3 = n2.clientX > p2.innerWidth - qt2.margin, o2 = n2.clientY > p2.innerHeight - qt2.margin;
          else {
            var f2 = Y2(p2);
            a3 = n2.clientX < f2.left + qt2.margin, r3 = n2.clientY < f2.top + qt2.margin, i3 = n2.clientX > f2.right - qt2.margin, o2 = n2.clientY > f2.bottom - qt2.margin;
          }
          qt2.x = i3 ? 1 : a3 ? -1 : 0, qt2.y = o2 ? 1 : r3 ? -1 : 0, qt2.isScrolling || (qt2.margin = u2.margin, qt2.speed = u2.speed, qt2.start(e3));
        }
      } };
      function Bt2(t3, e3, n2) {
        return (w.string(t3) ? W2(t3, e3, n2) : t3) || y2(n2);
      }
      function Vt(t3) {
        return w.window(t3) && (t3 = window.document.body), { x: t3.scrollLeft, y: t3.scrollTop };
      }
      var Wt = { id: "auto-scroll", install: function(t3) {
        var e3 = t3.defaults, n2 = t3.actions;
        t3.autoScroll = qt2, qt2.now = function() {
          return t3.now();
        }, n2.phaselessTypes.autoscroll = true, e3.perAction.autoScroll = qt2.defaults;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.autoScroll = null;
      }, "interactions:destroy": function(t3) {
        t3.interaction.autoScroll = null, qt2.stop(), qt2.interaction && (qt2.interaction = null);
      }, "interactions:stop": qt2.stop, "interactions:action-move": function(t3) {
        return qt2.onInteractionMove(t3);
      } } }, Gt = Wt;
      function Nt(t3, e3) {
        var n2 = false;
        return function() {
          return n2 || (g2.console.warn(e3), n2 = true), t3.apply(this, arguments);
        };
      }
      function Ut(t3, e3) {
        return t3.name = e3.name, t3.axis = e3.axis, t3.edges = e3.edges, t3;
      }
      function Ht(t3) {
        return w.bool(t3) ? (this.options.styleCursor = t3, this) : null === t3 ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function Kt(t3) {
        return w.func(t3) ? (this.options.actionChecker = t3, this) : null === t3 ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var $t = { id: "auto-start/interactableMethods", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.getAction = function(e4, n2, r3, i3) {
          var o2 = (function(t4, e5, n3, r4, i4) {
            var o3 = t4.getRect(r4), a3 = e5.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[e5.button], s3 = { action: null, interactable: t4, interaction: n3, element: r4, rect: o3, buttons: a3 };
            return i4.fire("auto-start:check", s3), s3.action;
          })(this, n2, r3, i3, t3);
          return this.options.actionChecker ? this.options.actionChecker(e4, n2, o2, this, i3, r3) : o2;
        }, e3.prototype.ignoreFrom = Nt((function(t4) {
          return this._backCompatOption("ignoreFrom", t4);
        }), "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e3.prototype.allowFrom = Nt((function(t4) {
          return this._backCompatOption("allowFrom", t4);
        }), "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e3.prototype.actionChecker = Kt, e3.prototype.styleCursor = Ht;
      } };
      function Jt2(t3, e3, n2, r3, i3) {
        return e3.testIgnoreAllow(e3.options[t3.name], n2, r3) && e3.options[t3.name].enabled && ee(e3, n2, t3, i3) ? t3 : null;
      }
      function Qt(t3, e3, n2, r3, i3, o2, a3) {
        for (var s3 = 0, c3 = r3.length; s3 < c3; s3++) {
          var l2 = r3[s3], u2 = i3[s3], p2 = l2.getAction(e3, n2, t3, u2);
          if (p2) {
            var f2 = Jt2(p2, l2, u2, o2, a3);
            if (f2) return { action: f2, interactable: l2, element: u2 };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function Zt(t3, e3, n2, r3, i3) {
        var o2 = [], a3 = [], s3 = r3;
        function c3(t4) {
          o2.push(t4), a3.push(s3);
        }
        for (; w.element(s3); ) {
          o2 = [], a3 = [], i3.interactables.forEachMatch(s3, c3);
          var l2 = Qt(t3, e3, n2, o2, a3, r3, i3);
          if (l2.action && !l2.interactable.options[l2.action.name].manualStart) return l2;
          s3 = A2(s3);
        }
        return { action: null, interactable: null, element: null };
      }
      function te(t3, e3, n2) {
        var r3 = e3.action, i3 = e3.interactable, o2 = e3.element;
        r3 = r3 || { name: null }, t3.interactable = i3, t3.element = o2, Ut(t3.prepared, r3), t3.rect = i3 && r3.name ? i3.getRect(o2) : null, ie2(t3, n2), n2.fire("autoStart:prepared", { interaction: t3 });
      }
      function ee(t3, e3, n2, r3) {
        var i3 = t3.options, o2 = i3[n2.name].max, a3 = i3[n2.name].maxPerElement, s3 = r3.autoStart.maxInteractions, c3 = 0, l2 = 0, u2 = 0;
        if (!(o2 && a3 && s3)) return false;
        for (var p2 = 0, f2 = r3.interactions.list; p2 < f2.length; p2++) {
          var d3 = f2[p2], h3 = d3.prepared.name;
          if (d3.interacting()) {
            if (++c3 >= s3) return false;
            if (d3.interactable === t3) {
              if ((l2 += h3 === n2.name ? 1 : 0) >= o2) return false;
              if (d3.element === e3 && (u2++, h3 === n2.name && u2 >= a3)) return false;
            }
          }
        }
        return s3 > 0;
      }
      function ne(t3, e3) {
        return w.number(t3) ? (e3.autoStart.maxInteractions = t3, this) : e3.autoStart.maxInteractions;
      }
      function re2(t3, e3, n2) {
        var r3 = n2.autoStart.cursorElement;
        r3 && r3 !== t3 && (r3.style.cursor = ""), t3.ownerDocument.documentElement.style.cursor = e3, t3.style.cursor = e3, n2.autoStart.cursorElement = e3 ? t3 : null;
      }
      function ie2(t3, e3) {
        var n2 = t3.interactable, r3 = t3.element, i3 = t3.prepared;
        if ("mouse" === t3.pointerType && n2 && n2.options.styleCursor) {
          var o2 = "";
          if (i3.name) {
            var a3 = n2.options[i3.name].cursorChecker;
            o2 = w.func(a3) ? a3(i3, n2, r3, t3._interacting) : e3.actions.map[i3.name].getCursor(i3);
          }
          re2(t3.element, o2 || "", e3);
        } else e3.autoStart.cursorElement && re2(e3.autoStart.cursorElement, "", e3);
      }
      var oe2 = { id: "auto-start/base", before: ["actions"], install: function(t3) {
        var e3 = t3.interactStatic, n2 = t3.defaults;
        t3.usePlugin($t), n2.base.actionChecker = null, n2.base.styleCursor = true, V2(n2.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e3.maxInteractions = function(e4) {
          return ne(e4, t3);
        }, t3.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: ee, cursorElement: null };
      }, listeners: { "interactions:down": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget;
        n2.interacting() || te(n2, Zt(n2, r3, i3, o2, e3), e3);
      }, "interactions:move": function(t3, e3) {
        !(function(t4, e4) {
          var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget;
          "mouse" !== n2.pointerType || n2.pointerIsDown || n2.interacting() || te(n2, Zt(n2, r3, i3, o2, e4), e4);
        })(t3, e3), (function(t4, e4) {
          var n2 = t4.interaction;
          if (n2.pointerIsDown && !n2.interacting() && n2.pointerWasMoved && n2.prepared.name) {
            e4.fire("autoStart:before-start", t4);
            var r3 = n2.interactable, i3 = n2.prepared.name;
            i3 && r3 && (r3.options[i3].manualStart || !ee(r3, n2.element, n2.prepared, e4) ? n2.stop() : (n2.start(n2.prepared, r3, n2.element), ie2(n2, e4)));
          }
        })(t3, e3);
      }, "interactions:stop": function(t3, e3) {
        var n2 = t3.interaction, r3 = n2.interactable;
        r3 && r3.options.styleCursor && re2(n2.element, "", e3);
      } }, maxInteractions: ne, withinInteractionLimit: ee, validateAction: Jt2 }, ae2 = oe2;
      var se = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.eventTarget, i3 = t3.dx, o2 = t3.dy;
        if ("drag" === n2.prepared.name) {
          var a3 = Math.abs(i3), s3 = Math.abs(o2), c3 = n2.interactable.options.drag, l2 = c3.startAxis, u2 = a3 > s3 ? "x" : a3 < s3 ? "y" : "xy";
          if (n2.prepared.axis = "start" === c3.lockAxis ? u2[0] : c3.lockAxis, "xy" !== u2 && "xy" !== l2 && l2 !== u2) {
            n2.prepared.name = null;
            for (var p2 = r3, f2 = function(t4) {
              if (t4 !== n2.interactable) {
                var i4 = n2.interactable.options.drag;
                if (!i4.manualStart && t4.testIgnoreAllow(i4, p2, r3)) {
                  var o3 = t4.getAction(n2.downPointer, n2.downEvent, n2, p2);
                  if (o3 && "drag" === o3.name && (function(t5, e4) {
                    if (!e4) return false;
                    var n3 = e4.options.drag.startAxis;
                    return "xy" === t5 || "xy" === n3 || n3 === t5;
                  })(u2, t4) && ae2.validateAction(o3, t4, p2, r3, e3)) return t4;
                }
              }
            }; w.element(p2); ) {
              var d3 = e3.interactables.forEachMatch(p2, f2);
              if (d3) {
                n2.prepared.name = "drag", n2.interactable = d3, n2.element = p2;
                break;
              }
              p2 = A2(p2);
            }
          }
        }
      } } };
      function ce(t3) {
        var e3 = t3.prepared && t3.prepared.name;
        if (!e3) return null;
        var n2 = t3.interactable.options;
        return n2[e3].hold || n2[e3].delay;
      }
      var le = { id: "auto-start/hold", install: function(t3) {
        var e3 = t3.defaults;
        t3.usePlugin(ae2), e3.perAction.hold = 0, e3.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t3) {
        var e3 = t3.interaction, n2 = ce(e3);
        n2 > 0 && (e3.autoStartHoldTimer = setTimeout((function() {
          e3.start(e3.prepared, e3.interactable, e3.element);
        }), n2));
      }, "interactions:move": function(t3) {
        var e3 = t3.interaction, n2 = t3.duplicate;
        e3.autoStartHoldTimer && e3.pointerWasMoved && !n2 && (clearTimeout(e3.autoStartHoldTimer), e3.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t3) {
        var e3 = t3.interaction;
        ce(e3) > 0 && (e3.prepared.name = null);
      } }, getHoldDuration: ce }, ue = le, pe = { id: "auto-start", install: function(t3) {
        t3.usePlugin(ae2), t3.usePlugin(ue), t3.usePlugin(se);
      } }, fe2 = function(t3) {
        return /^(always|never|auto)$/.test(t3) ? (this.options.preventDefault = t3, this) : w.bool(t3) ? (this.options.preventDefault = t3 ? "always" : "never", this) : this.options.preventDefault;
      };
      function de(t3) {
        var e3 = t3.interaction, n2 = t3.event;
        e3.interactable && e3.interactable.checkAndPreventDefault(n2);
      }
      var he = { id: "core/interactablePreventDefault", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.preventDefault = fe2, e3.prototype.checkAndPreventDefault = function(e4) {
          return (function(t4, e5, n2) {
            var r3 = t4.options.preventDefault;
            if ("never" !== r3) if ("always" !== r3) {
              if (e5.events.supportsPassive && /^touch(start|move)$/.test(n2.type)) {
                var i3 = y2(n2.target).document, o2 = e5.getDocOptions(i3);
                if (!o2 || !o2.events || false !== o2.events.passive) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(n2.type) || w.element(n2.target) && R2(n2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || n2.preventDefault();
            } else n2.preventDefault();
          })(this, t3, e4);
        }, t3.interactions.docEvents.push({ type: "dragstart", listener: function(e4) {
          for (var n2 = 0, r3 = t3.interactions.list; n2 < r3.length; n2++) {
            var i3 = r3[n2];
            if (i3.element && (i3.element === e4.target || M(i3.element, e4.target))) return void i3.interactable.checkAndPreventDefault(e4);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce((function(t3, e3) {
        return t3["interactions:".concat(e3)] = de, t3;
      }), {}) };
      function ve(t3, e3) {
        if (e3.phaselessTypes[t3]) return true;
        for (var n2 in e3.map) if (0 === t3.indexOf(n2) && t3.substr(n2.length) in e3.phases) return true;
        return false;
      }
      function ge2(t3) {
        var e3 = {};
        for (var n2 in t3) {
          var r3 = t3[n2];
          w.plainObject(r3) ? e3[n2] = ge2(r3) : w.array(r3) ? e3[n2] = mt(r3) : e3[n2] = r3;
        }
        return e3;
      }
      var me = (function() {
        function t3(e3) {
          r2(this, t3), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e3, this.result = ye(), this.edges = { left: false, right: false, top: false, bottom: false };
        }
        return o(t3, [{ key: "start", value: function(t4, e3) {
          var n2, r3, i3 = t4.phase, o2 = this.interaction, a3 = (function(t5) {
            var e4 = t5.interactable.options[t5.prepared.name], n3 = e4.modifiers;
            if (n3 && n3.length) return n3;
            return ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((function(t6) {
              var n4 = e4[t6];
              return n4 && n4.enabled && { options: n4, methods: n4._methods };
            })).filter((function(t6) {
              return !!t6;
            }));
          })(o2);
          this.prepareStates(a3), this.startEdges = V2({}, o2.edges), this.edges = V2({}, this.startEdges), this.startOffset = (n2 = o2.rect, r3 = e3, n2 ? { left: r3.x - n2.left, top: r3.y - n2.top, right: n2.right - r3.x, bottom: n2.bottom - r3.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var s3 = this.fillArg({ phase: i3, pageCoords: e3, preEnd: false });
          return this.result = ye(), this.startAll(s3), this.result = this.setAll(s3);
        } }, { key: "fillArg", value: function(t4) {
          var e3 = this.interaction;
          return t4.interaction = e3, t4.interactable = e3.interactable, t4.element = e3.element, t4.rect || (t4.rect = e3.rect), t4.edges || (t4.edges = this.startEdges), t4.startOffset = this.startOffset, t4;
        } }, { key: "startAll", value: function(t4) {
          for (var e3 = 0, n2 = this.states; e3 < n2.length; e3++) {
            var r3 = n2[e3];
            r3.methods.start && (t4.state = r3, r3.methods.start(t4));
          }
        } }, { key: "setAll", value: function(t4) {
          var e3 = t4.phase, n2 = t4.preEnd, r3 = t4.skipModifiers, i3 = t4.rect, o2 = t4.edges;
          t4.coords = V2({}, t4.pageCoords), t4.rect = V2({}, i3), t4.edges = V2({}, o2);
          for (var a3 = r3 ? this.states.slice(r3) : this.states, s3 = ye(t4.coords, t4.rect), c3 = 0; c3 < a3.length; c3++) {
            var l2, u2 = a3[c3], p2 = u2.options, f2 = V2({}, t4.coords), d3 = null;
            null != (l2 = u2.methods) && l2.set && this.shouldDo(p2, n2, e3) && (t4.state = u2, d3 = u2.methods.set(t4), H(t4.edges, t4.rect, { x: t4.coords.x - f2.x, y: t4.coords.y - f2.y })), s3.eventProps.push(d3);
          }
          V2(this.edges, t4.edges), s3.delta.x = t4.coords.x - t4.pageCoords.x, s3.delta.y = t4.coords.y - t4.pageCoords.y, s3.rectDelta.left = t4.rect.left - i3.left, s3.rectDelta.right = t4.rect.right - i3.right, s3.rectDelta.top = t4.rect.top - i3.top, s3.rectDelta.bottom = t4.rect.bottom - i3.bottom;
          var h3 = this.result.coords, v3 = this.result.rect;
          if (h3 && v3) {
            var g3 = s3.rect.left !== v3.left || s3.rect.right !== v3.right || s3.rect.top !== v3.top || s3.rect.bottom !== v3.bottom;
            s3.changed = g3 || h3.x !== s3.coords.x || h3.y !== s3.coords.y;
          }
          return s3;
        } }, { key: "applyToInteraction", value: function(t4) {
          var e3 = this.interaction, n2 = t4.phase, r3 = e3.coords.cur, i3 = e3.coords.start, o2 = this.result, a3 = this.startDelta, s3 = o2.delta;
          "start" === n2 && V2(this.startDelta, o2.delta);
          for (var c3 = 0, l2 = [[i3, a3], [r3, s3]]; c3 < l2.length; c3++) {
            var u2 = l2[c3], p2 = u2[0], f2 = u2[1];
            p2.page.x += f2.x, p2.page.y += f2.y, p2.client.x += f2.x, p2.client.y += f2.y;
          }
          var d3 = this.result.rectDelta, h3 = t4.rect || e3.rect;
          h3.left += d3.left, h3.right += d3.right, h3.top += d3.top, h3.bottom += d3.bottom, h3.width = h3.right - h3.left, h3.height = h3.bottom - h3.top;
        } }, { key: "setAndApply", value: function(t4) {
          var e3 = this.interaction, n2 = t4.phase, r3 = t4.preEnd, i3 = t4.skipModifiers, o2 = this.setAll(this.fillArg({ preEnd: r3, phase: n2, pageCoords: t4.modifiedCoords || e3.coords.cur.page }));
          if (this.result = o2, !o2.changed && (!i3 || i3 < this.states.length) && e3.interacting()) return false;
          if (t4.modifiedCoords) {
            var a3 = e3.coords.cur.page, s3 = { x: t4.modifiedCoords.x - a3.x, y: t4.modifiedCoords.y - a3.y };
            o2.coords.x += s3.x, o2.coords.y += s3.y, o2.delta.x += s3.x, o2.delta.y += s3.y;
          }
          this.applyToInteraction(t4);
        } }, { key: "beforeEnd", value: function(t4) {
          var e3 = t4.interaction, n2 = t4.event, r3 = this.states;
          if (r3 && r3.length) {
            for (var i3 = false, o2 = 0; o2 < r3.length; o2++) {
              var a3 = r3[o2];
              t4.state = a3;
              var s3 = a3.options, c3 = a3.methods, l2 = c3.beforeEnd && c3.beforeEnd(t4);
              if (l2) return this.endResult = l2, false;
              i3 = i3 || !i3 && this.shouldDo(s3, true, t4.phase, true);
            }
            i3 && e3.move({ event: n2, preEnd: true });
          }
        } }, { key: "stop", value: function(t4) {
          var e3 = t4.interaction;
          if (this.states && this.states.length) {
            var n2 = V2({ states: this.states, interactable: e3.interactable, element: e3.element, rect: null }, t4);
            this.fillArg(n2);
            for (var r3 = 0, i3 = this.states; r3 < i3.length; r3++) {
              var o2 = i3[r3];
              n2.state = o2, o2.methods.stop && o2.methods.stop(n2);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(t4) {
          this.states = [];
          for (var e3 = 0; e3 < t4.length; e3++) {
            var n2 = t4[e3], r3 = n2.options, i3 = n2.methods, o2 = n2.name;
            this.states.push({ options: r3, methods: i3, index: e3, name: o2 });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(t4) {
          var e3 = t4.interaction, n2 = e3.coords, r3 = e3.rect, i3 = e3.modification;
          if (i3.result) {
            for (var o2 = i3.startDelta, a3 = i3.result, s3 = a3.delta, c3 = a3.rectDelta, l2 = 0, u2 = [[n2.start, o2], [n2.cur, s3]]; l2 < u2.length; l2++) {
              var p2 = u2[l2], f2 = p2[0], d3 = p2[1];
              f2.page.x -= d3.x, f2.page.y -= d3.y, f2.client.x -= d3.x, f2.client.y -= d3.y;
            }
            r3.left -= c3.left, r3.right -= c3.right, r3.top -= c3.top, r3.bottom -= c3.bottom;
          }
        } }, { key: "shouldDo", value: function(t4, e3, n2, r3) {
          return !(!t4 || false === t4.enabled || r3 && !t4.endOnly || t4.endOnly && !e3 || "start" === n2 && !t4.setStart);
        } }, { key: "copyFrom", value: function(t4) {
          this.startOffset = t4.startOffset, this.startDelta = t4.startDelta, this.startEdges = t4.startEdges, this.edges = t4.edges, this.states = t4.states.map((function(t5) {
            return ge2(t5);
          })), this.result = ye(V2({}, t4.result.coords), V2({}, t4.result.rect));
        } }, { key: "destroy", value: function() {
          for (var t4 in this) this[t4] = null;
        } }]), t3;
      })();
      function ye(t3, e3) {
        return { rect: e3, coords: t3, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
      }
      function be(t3, e3) {
        var n2 = t3.defaults, r3 = { start: t3.start, set: t3.set, beforeEnd: t3.beforeEnd, stop: t3.stop }, i3 = function(t4) {
          var i4 = t4 || {};
          for (var o2 in i4.enabled = false !== i4.enabled, n2) o2 in i4 || (i4[o2] = n2[o2]);
          var a3 = { options: i4, methods: r3, name: e3, enable: function() {
            return i4.enabled = true, a3;
          }, disable: function() {
            return i4.enabled = false, a3;
          } };
          return a3;
        };
        return e3 && "string" == typeof e3 && (i3._defaults = n2, i3._methods = r3), i3;
      }
      function xe2(t3) {
        var e3 = t3.iEvent, n2 = t3.interaction.modification.result;
        n2 && (e3.modifiers = n2.eventProps);
      }
      var we2 = { id: "modifiers/base", before: ["actions"], install: function(t3) {
        t3.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.modification = new me(e3);
      }, "interactions:before-action-start": function(t3) {
        var e3 = t3.interaction, n2 = t3.interaction.modification;
        n2.start(t3, e3.coords.start.page), e3.edges = n2.edges, n2.applyToInteraction(t3);
      }, "interactions:before-action-move": function(t3) {
        var e3 = t3.interaction, n2 = e3.modification, r3 = n2.setAndApply(t3);
        return e3.edges = n2.edges, r3;
      }, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction, n2 = e3.modification, r3 = n2.beforeEnd(t3);
        return e3.edges = n2.startEdges, r3;
      }, "interactions:action-start": xe2, "interactions:action-move": xe2, "interactions:action-end": xe2, "interactions:after-action-start": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:after-action-move": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:stop": function(t3) {
        return t3.interaction.modification.stop(t3);
      } } }, Ee = we2, Te = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} }, Se = (function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2, a3, s3, c3, l2) {
          var p2;
          r2(this, n2), (p2 = e3.call(this, t4)).relatedTarget = null, p2.screenX = void 0, p2.screenY = void 0, p2.button = void 0, p2.buttons = void 0, p2.ctrlKey = void 0, p2.shiftKey = void 0, p2.altKey = void 0, p2.metaKey = void 0, p2.page = void 0, p2.client = void 0, p2.delta = void 0, p2.rect = void 0, p2.x0 = void 0, p2.y0 = void 0, p2.t0 = void 0, p2.dt = void 0, p2.duration = void 0, p2.clientX0 = void 0, p2.clientY0 = void 0, p2.velocity = void 0, p2.speed = void 0, p2.swipe = void 0, p2.axes = void 0, p2.preEnd = void 0, s3 = s3 || t4.element;
          var f2 = t4.interactable, d3 = (f2 && f2.options || Te).deltaSource, h3 = K2(f2, s3, o2), v3 = "start" === a3, g3 = "end" === a3, m2 = v3 ? u(p2) : t4.prevEvent, y3 = v3 ? t4.coords.start : g3 ? { page: m2.page, client: m2.client, timeStamp: t4.coords.cur.timeStamp } : t4.coords.cur;
          return p2.page = V2({}, y3.page), p2.client = V2({}, y3.client), p2.rect = V2({}, t4.rect), p2.timeStamp = y3.timeStamp, g3 || (p2.page.x -= h3.x, p2.page.y -= h3.y, p2.client.x -= h3.x, p2.client.y -= h3.y), p2.ctrlKey = i3.ctrlKey, p2.altKey = i3.altKey, p2.shiftKey = i3.shiftKey, p2.metaKey = i3.metaKey, p2.button = i3.button, p2.buttons = i3.buttons, p2.target = s3, p2.currentTarget = s3, p2.preEnd = c3, p2.type = l2 || o2 + (a3 || ""), p2.interactable = f2, p2.t0 = v3 ? t4.pointers[t4.pointers.length - 1].downTime : m2.t0, p2.x0 = t4.coords.start.page.x - h3.x, p2.y0 = t4.coords.start.page.y - h3.y, p2.clientX0 = t4.coords.start.client.x - h3.x, p2.clientY0 = t4.coords.start.client.y - h3.y, p2.delta = v3 || g3 ? { x: 0, y: 0 } : { x: p2[d3].x - m2[d3].x, y: p2[d3].y - m2[d3].y }, p2.dt = t4.coords.delta.timeStamp, p2.duration = p2.timeStamp - p2.t0, p2.velocity = V2({}, t4.coords.velocity[d3]), p2.speed = Q(p2.velocity.x, p2.velocity.y), p2.swipe = g3 || "inertiastart" === a3 ? p2.getSwipe() : null, p2;
        }
        return o(n2, [{ key: "getSwipe", value: function() {
          var t4 = this._interaction;
          if (t4.prevEvent.speed < 600 || this.timeStamp - t4.prevEvent.timeStamp > 150) return null;
          var e4 = 180 * Math.atan2(t4.prevEvent.velocityY, t4.prevEvent.velocityX) / Math.PI;
          e4 < 0 && (e4 += 360);
          var n3 = 112.5 <= e4 && e4 < 247.5, r3 = 202.5 <= e4 && e4 < 337.5;
          return { up: r3, down: !r3 && 22.5 <= e4 && e4 < 157.5, left: n3, right: !n3 && (292.5 <= e4 || e4 < 67.5), angle: e4, speed: t4.prevEvent.speed, velocity: { x: t4.prevEvent.velocityX, y: t4.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = true;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = true;
        } }]), n2;
      })(vt2);
      Object.defineProperties(Se.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t3) {
        this.page.x = t3;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t3) {
        this.page.y = t3;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t3) {
        this.client.x = t3;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t3) {
        this.client.y = t3;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t3) {
        this.delta.x = t3;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t3) {
        this.delta.y = t3;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t3) {
        this.velocity.x = t3;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t3) {
        this.velocity.y = t3;
      } } });
      var _e = o((function t3(e3, n2, i3, o2, a3) {
        r2(this, t3), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e3, this.pointer = n2, this.event = i3, this.downTime = o2, this.downTarget = a3;
      })), Pe = (function(t3) {
        return t3.interactable = "", t3.element = "", t3.prepared = "", t3.pointerIsDown = "", t3.pointerWasMoved = "", t3._proxy = "", t3;
      })({}), Oe = (function(t3) {
        return t3.start = "", t3.move = "", t3.end = "", t3.stop = "", t3.interacting = "", t3;
      })({}), ke2 = 0, De2 = (function() {
        function t3(e3) {
          var n2 = this, i3 = e3.pointerType, o2 = e3.scopeFire;
          r2(this, t3), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = false, this.pointerWasMoved = false, this._interacting = false, this._ending = false, this._stopped = true, this._proxy = void 0, this.simulation = null, this.doMove = Nt((function(t4) {
            this.move(t4);
          }), "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ke2++, this._scopeFire = o2, this.pointerType = i3;
          var a3 = this;
          this._proxy = {};
          var s3 = function(t4) {
            Object.defineProperty(n2._proxy, t4, { get: function() {
              return a3[t4];
            } });
          };
          for (var c3 in Pe) s3(c3);
          var l2 = function(t4) {
            Object.defineProperty(n2._proxy, t4, { value: function() {
              return a3[t4].apply(a3, arguments);
            } });
          };
          for (var u2 in Oe) l2(u2);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return o(t3, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(t4, e3, n2) {
          var r3 = this.updatePointer(t4, e3, n2, true), i3 = this.pointers[r3];
          this._scopeFire("interactions:down", { pointer: t4, event: e3, eventTarget: n2, pointerIndex: r3, pointerInfo: i3, type: "down", interaction: this });
        } }, { key: "start", value: function(t4, e3, n2) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < ("gesture" === t4.name ? 2 : 1) || !e3.options[t4.name].enabled) && (Ut(this.prepared, t4), this.interactable = e3, this.element = n2, this.rect = e3.getRect(n2), this.edges = this.prepared.edges ? V2({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(t4, e3, n2) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(t4, e3, n2, false);
          var r3, i3, o2 = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (r3 = this.coords.cur.client.x - this.coords.start.client.x, i3 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Q(r3, i3) > this.pointerMoveTolerance);
          var a3, s3, c3, l2 = this.getPointerIndex(t4), u2 = { pointer: t4, pointerIndex: l2, pointerInfo: this.pointers[l2], event: e3, type: "move", eventTarget: n2, dx: r3, dy: i3, duplicate: o2, interaction: this };
          o2 || (a3 = this.coords.velocity, s3 = this.coords.delta, c3 = Math.max(s3.timeStamp / 1e3, 1e-3), a3.page.x = s3.page.x / c3, a3.page.y = s3.page.y / c3, a3.client.x = s3.client.x / c3, a3.client.y = s3.client.y / c3, a3.timeStamp = c3), this._scopeFire("interactions:move", u2), o2 || this.simulation || (this.interacting() && (u2.type = null, this.move(u2)), this.pointerWasMoved && et(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(t4) {
          t4 && t4.event || nt2(this.coords.delta), (t4 = V2({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, t4 || {})).phase = "move", this._doPhase(t4);
        } }, { key: "pointerUp", value: function(t4, e3, n2, r3) {
          var i3 = this.getPointerIndex(t4);
          -1 === i3 && (i3 = this.updatePointer(t4, e3, n2, false));
          var o2 = /cancel$/i.test(e3.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(o2), { pointer: t4, pointerIndex: i3, pointerInfo: this.pointers[i3], event: e3, eventTarget: n2, type: o2, curEventTarget: r3, interaction: this }), this.simulation || this.end(e3), this.removePointer(t4, e3);
        } }, { key: "documentBlur", value: function(t4) {
          this.end(t4), this._scopeFire("interactions:blur", { event: t4, type: "blur", interaction: this });
        } }, { key: "end", value: function(t4) {
          var e3;
          this._ending = true, t4 = t4 || this._latestPointer.event, this.interacting() && (e3 = this._doPhase({ event: t4, interaction: this, phase: "end" })), this._ending = false, true === e3 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(t4) {
          var e3 = at(t4);
          return "mouse" === this.pointerType || "pen" === this.pointerType ? this.pointers.length - 1 : yt(this.pointers, (function(t5) {
            return t5.id === e3;
          }));
        } }, { key: "getPointerInfo", value: function(t4) {
          return this.pointers[this.getPointerIndex(t4)];
        } }, { key: "updatePointer", value: function(t4, e3, n2, r3) {
          var i3, o2, a3, s3 = at(t4), c3 = this.getPointerIndex(t4), l2 = this.pointers[c3];
          return r3 = false !== r3 && (r3 || /(down|start)$/i.test(e3.type)), l2 ? l2.pointer = t4 : (l2 = new _e(s3, t4, e3, null, null), c3 = this.pointers.length, this.pointers.push(l2)), st2(this.coords.cur, this.pointers.map((function(t5) {
            return t5.pointer;
          })), this._now()), i3 = this.coords.delta, o2 = this.coords.prev, a3 = this.coords.cur, i3.page.x = a3.page.x - o2.page.x, i3.page.y = a3.page.y - o2.page.y, i3.client.x = a3.client.x - o2.client.x, i3.client.y = a3.client.y - o2.client.y, i3.timeStamp = a3.timeStamp - o2.timeStamp, r3 && (this.pointerIsDown = true, l2.downTime = this.coords.cur.timeStamp, l2.downTarget = n2, tt2(this.downPointer, t4), this.interacting() || (et(this.coords.start, this.coords.cur), et(this.coords.prev, this.coords.cur), this.downEvent = e3, this.pointerWasMoved = false)), this._updateLatestPointer(t4, e3, n2), this._scopeFire("interactions:update-pointer", { pointer: t4, event: e3, eventTarget: n2, down: r3, pointerInfo: l2, pointerIndex: c3, interaction: this }), c3;
        } }, { key: "removePointer", value: function(t4, e3) {
          var n2 = this.getPointerIndex(t4);
          if (-1 !== n2) {
            var r3 = this.pointers[n2];
            this._scopeFire("interactions:remove-pointer", { pointer: t4, event: e3, eventTarget: null, pointerIndex: n2, pointerInfo: r3, interaction: this }), this.pointers.splice(n2, 1), this.pointerIsDown = false;
          }
        } }, { key: "_updateLatestPointer", value: function(t4, e3, n2) {
          this._latestPointer.pointer = t4, this._latestPointer.event = e3, this._latestPointer.eventTarget = n2;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(t4, e3, n2, r3) {
          return new Se(this, t4, this.prepared.name, e3, this.element, n2, r3);
        } }, { key: "_fireEvent", value: function(t4) {
          var e3;
          null == (e3 = this.interactable) || e3.fire(t4), (!this.prevEvent || t4.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = t4);
        } }, { key: "_doPhase", value: function(t4) {
          var e3 = t4.event, n2 = t4.phase, r3 = t4.preEnd, i3 = t4.type, o2 = this.rect;
          if (o2 && "move" === n2 && (H(this.edges, o2, this.coords.delta[this.interactable.options.deltaSource]), o2.width = o2.right - o2.left, o2.height = o2.bottom - o2.top), false === this._scopeFire("interactions:before-action-".concat(n2), t4)) return false;
          var a3 = t4.iEvent = this._createPreparedEvent(e3, n2, r3, i3);
          return this._scopeFire("interactions:action-".concat(n2), t4), "start" === n2 && (this.prevEvent = a3), this._fireEvent(a3), this._scopeFire("interactions:after-action-".concat(n2), t4), true;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t3;
      })();
      function Ie(t3) {
        Me2(t3.interaction);
      }
      function Me2(t3) {
        if (!(function(t4) {
          return !(!t4.offset.pending.x && !t4.offset.pending.y);
        })(t3)) return false;
        var e3 = t3.offset.pending;
        return Ae2(t3.coords.cur, e3), Ae2(t3.coords.delta, e3), H(t3.edges, t3.rect, e3), e3.x = 0, e3.y = 0, true;
      }
      function ze(t3) {
        var e3 = t3.x, n2 = t3.y;
        this.offset.pending.x += e3, this.offset.pending.y += n2, this.offset.total.x += e3, this.offset.total.y += n2;
      }
      function Ae2(t3, e3) {
        var n2 = t3.page, r3 = t3.client, i3 = e3.x, o2 = e3.y;
        n2.x += i3, n2.y += o2, r3.x += i3, r3.y += o2;
      }
      Oe.offsetBy = "";
      var Re = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t3) {
        t3.Interaction.prototype.offsetBy = ze;
      }, listeners: { "interactions:new": function(t3) {
        t3.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t3) {
        return (function(t4) {
          t4.pointerIsDown && (Ae2(t4.coords.cur, t4.offset.total), t4.offset.pending.x = 0, t4.offset.pending.y = 0);
        })(t3.interaction);
      }, "interactions:before-action-start": Ie, "interactions:before-action-move": Ie, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction;
        if (Me2(e3)) return e3.move({ offset: true }), e3.end(), false;
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction;
        e3.offset.total.x = 0, e3.offset.total.y = 0, e3.offset.pending.x = 0, e3.offset.pending.y = 0;
      } } }, Ce2 = Re;
      var je2 = (function() {
        function t3(e3) {
          r2(this, t3), this.active = false, this.isModified = false, this.smoothEnd = false, this.allowResume = false, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e3;
        }
        return o(t3, [{ key: "start", value: function(t4) {
          var e3 = this.interaction, n2 = Fe(e3);
          if (!n2 || !n2.enabled) return false;
          var r3 = e3.coords.velocity.client, i3 = Q(r3.x, r3.y), o2 = this.modification || (this.modification = new me(e3));
          if (o2.copyFrom(e3.modification), this.t0 = e3._now(), this.allowResume = n2.allowResume, this.v0 = i3, this.currentOffset = { x: 0, y: 0 }, this.startCoords = e3.coords.cur.page, this.modifierArg = o2.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - e3.coords.cur.timeStamp < 50 && i3 > n2.minSpeed && i3 > n2.endSpeed) this.startInertia();
          else {
            if (o2.result = o2.setAll(this.modifierArg), !o2.result.changed) return false;
            this.startSmoothEnd();
          }
          return e3.modification.result.rect = null, e3.offsetBy(this.targetOffset), e3._doPhase({ interaction: e3, event: t4, phase: "inertiastart" }), e3.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), e3.modification.result.rect = null, this.active = true, e3.simulation = this, true;
        } }, { key: "startInertia", value: function() {
          var t4 = this, e3 = this.interaction.coords.velocity.client, n2 = Fe(this.interaction), r3 = n2.resistance, i3 = -Math.log(n2.endSpeed / this.v0) / r3;
          this.targetOffset = { x: (e3.x - i3) / r3, y: (e3.y - i3) / r3 }, this.te = i3, this.lambda_v0 = r3 / this.v0, this.one_ve_v0 = 1 - n2.endSpeed / this.v0;
          var o2 = this.modification, a3 = this.modifierArg;
          a3.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, o2.result = o2.setAll(a3), o2.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + o2.result.delta.x, y: this.targetOffset.y + o2.result.delta.y }), this.onNextFrame((function() {
            return t4.inertiaTick();
          }));
        } }, { key: "startSmoothEnd", value: function() {
          var t4 = this;
          this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame((function() {
            return t4.smoothEndTick();
          }));
        } }, { key: "onNextFrame", value: function(t4) {
          var e3 = this;
          this.timeout = Lt2.request((function() {
            e3.active && t4();
          }));
        } }, { key: "inertiaTick", value: function() {
          var t4, e3, n2, r3, i3, o2, a3, s3 = this, c3 = this.interaction, l2 = Fe(c3).resistance, u2 = (c3._now() - this.t0) / 1e3;
          if (u2 < this.te) {
            var p2, f2 = 1 - (Math.exp(-l2 * u2) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (t4 = 0, e3 = 0, n2 = this.targetOffset.x, r3 = this.targetOffset.y, i3 = this.modifiedOffset.x, o2 = this.modifiedOffset.y, p2 = { x: Ye2(a3 = f2, t4, n2, i3), y: Ye2(a3, e3, r3, o2) }) : p2 = { x: this.targetOffset.x * f2, y: this.targetOffset.y * f2 };
            var d3 = { x: p2.x - this.currentOffset.x, y: p2.y - this.currentOffset.y };
            this.currentOffset.x += d3.x, this.currentOffset.y += d3.y, c3.offsetBy(d3), c3.move(), this.onNextFrame((function() {
              return s3.inertiaTick();
            }));
          } else c3.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var t4 = this, e3 = this.interaction, n2 = e3._now() - this.t0, r3 = Fe(e3).smoothEndDuration;
          if (n2 < r3) {
            var i3 = { x: Le2(n2, 0, this.targetOffset.x, r3), y: Le2(n2, 0, this.targetOffset.y, r3) }, o2 = { x: i3.x - this.currentOffset.x, y: i3.y - this.currentOffset.y };
            this.currentOffset.x += o2.x, this.currentOffset.y += o2.y, e3.offsetBy(o2), e3.move({ skipModifiers: this.modifierCount }), this.onNextFrame((function() {
              return t4.smoothEndTick();
            }));
          } else e3.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(t4) {
          var e3 = t4.pointer, n2 = t4.event, r3 = t4.eventTarget, i3 = this.interaction;
          i3.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), i3.updatePointer(e3, n2, r3, true), i3._doPhase({ interaction: i3, event: n2, phase: "resume" }), et(i3.coords.prev, i3.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = false, this.interaction.simulation = null, Lt2.cancel(this.timeout);
        } }]), t3;
      })();
      function Fe(t3) {
        var e3 = t3.interactable, n2 = t3.prepared;
        return e3 && e3.options && n2.name && e3.options[n2.name].inertia;
      }
      var Xe = { id: "inertia", before: ["modifiers", "actions"], install: function(t3) {
        var e3 = t3.defaults;
        t3.usePlugin(Ce2), t3.usePlugin(Ee), t3.actions.phases.inertiastart = true, t3.actions.phases.resume = true, e3.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.inertia = new je2(e3);
      }, "interactions:before-action-end": function(t3) {
        var e3 = t3.interaction, n2 = t3.event;
        return (!e3._interacting || e3.simulation || !e3.inertia.start(n2)) && null;
      }, "interactions:down": function(t3) {
        var e3 = t3.interaction, n2 = t3.eventTarget, r3 = e3.inertia;
        if (r3.active) for (var i3 = n2; w.element(i3); ) {
          if (i3 === e3.element) {
            r3.resume(t3);
            break;
          }
          i3 = A2(i3);
        }
      }, "interactions:stop": function(t3) {
        var e3 = t3.interaction.inertia;
        e3.active && e3.stop();
      }, "interactions:before-action-resume": function(t3) {
        var e3 = t3.interaction.modification;
        e3.stop(t3), e3.start(t3, t3.interaction.coords.cur.page), e3.applyToInteraction(t3);
      }, "interactions:before-action-inertiastart": function(t3) {
        return t3.interaction.modification.setAndApply(t3);
      }, "interactions:action-resume": xe2, "interactions:action-inertiastart": xe2, "interactions:after-action-inertiastart": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      }, "interactions:after-action-resume": function(t3) {
        return t3.interaction.modification.restoreInteractionCoords(t3);
      } } };
      function Ye2(t3, e3, n2, r3) {
        var i3 = 1 - t3;
        return i3 * i3 * e3 + 2 * i3 * t3 * n2 + t3 * t3 * r3;
      }
      function Le2(t3, e3, n2, r3) {
        return -n2 * (t3 /= r3) * (t3 - 2) + e3;
      }
      var qe = Xe;
      function Be2(t3, e3) {
        for (var n2 = 0; n2 < e3.length; n2++) {
          var r3 = e3[n2];
          if (t3.immediatePropagationStopped) break;
          r3(t3);
        }
      }
      var Ve = (function() {
        function t3(e3) {
          r2(this, t3), this.options = void 0, this.types = {}, this.propagationStopped = false, this.immediatePropagationStopped = false, this.global = void 0, this.options = V2({}, e3 || {});
        }
        return o(t3, [{ key: "fire", value: function(t4) {
          var e3, n2 = this.global;
          (e3 = this.types[t4.type]) && Be2(t4, e3), !t4.propagationStopped && n2 && (e3 = n2[t4.type]) && Be2(t4, e3);
        } }, { key: "on", value: function(t4, e3) {
          var n2 = $2(t4, e3);
          for (t4 in n2) this.types[t4] = gt(this.types[t4] || [], n2[t4]);
        } }, { key: "off", value: function(t4, e3) {
          var n2 = $2(t4, e3);
          for (t4 in n2) {
            var r3 = this.types[t4];
            if (r3 && r3.length) for (var i3 = 0, o2 = n2[t4]; i3 < o2.length; i3++) {
              var a3 = o2[i3], s3 = r3.indexOf(a3);
              -1 !== s3 && r3.splice(s3, 1);
            }
          }
        } }, { key: "getRect", value: function(t4) {
          return null;
        } }]), t3;
      })();
      var We2 = (function() {
        function t3(e3) {
          r2(this, t3), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e3, tt2(this, e3);
        }
        return o(t3, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t3;
      })();
      function Ge(t3) {
        return w.object(t3) ? { capture: !!t3.capture, passive: !!t3.passive } : { capture: !!t3, passive: false };
      }
      function Ne2(t3, e3) {
        return t3 === e3 || ("boolean" == typeof t3 ? !!e3.capture === t3 && false == !!e3.passive : !!t3.capture == !!e3.capture && !!t3.passive == !!e3.passive);
      }
      var Ue2 = { id: "events", install: function(t3) {
        var e3, n2 = [], r3 = {}, i3 = [], o2 = { add: a3, remove: s3, addDelegate: function(t4, e4, n3, o3, s4) {
          var u2 = Ge(s4);
          if (!r3[n3]) {
            r3[n3] = [];
            for (var p2 = 0; p2 < i3.length; p2++) {
              var f2 = i3[p2];
              a3(f2, n3, c3), a3(f2, n3, l2, true);
            }
          }
          var d3 = r3[n3], h3 = bt(d3, (function(n4) {
            return n4.selector === t4 && n4.context === e4;
          }));
          h3 || (h3 = { selector: t4, context: e4, listeners: [] }, d3.push(h3));
          h3.listeners.push({ func: o3, options: u2 });
        }, removeDelegate: function(t4, e4, n3, i4, o3) {
          var a4, u2 = Ge(o3), p2 = r3[n3], f2 = false;
          if (!p2) return;
          for (a4 = p2.length - 1; a4 >= 0; a4--) {
            var d3 = p2[a4];
            if (d3.selector === t4 && d3.context === e4) {
              for (var h3 = d3.listeners, v3 = h3.length - 1; v3 >= 0; v3--) {
                var g3 = h3[v3];
                if (g3.func === i4 && Ne2(g3.options, u2)) {
                  h3.splice(v3, 1), h3.length || (p2.splice(a4, 1), s3(e4, n3, c3), s3(e4, n3, l2, true)), f2 = true;
                  break;
                }
              }
              if (f2) break;
            }
          }
        }, delegateListener: c3, delegateUseCapture: l2, delegatedEvents: r3, documents: i3, targets: n2, supportsOptions: false, supportsPassive: false };
        function a3(t4, e4, r4, i4) {
          if (t4.addEventListener) {
            var a4 = Ge(i4), s4 = bt(n2, (function(e5) {
              return e5.eventTarget === t4;
            }));
            s4 || (s4 = { eventTarget: t4, events: {} }, n2.push(s4)), s4.events[e4] || (s4.events[e4] = []), bt(s4.events[e4], (function(t5) {
              return t5.func === r4 && Ne2(t5.options, a4);
            })) || (t4.addEventListener(e4, r4, o2.supportsOptions ? a4 : a4.capture), s4.events[e4].push({ func: r4, options: a4 }));
          }
        }
        function s3(t4, e4, r4, i4) {
          if (t4.addEventListener && t4.removeEventListener) {
            var a4 = yt(n2, (function(e5) {
              return e5.eventTarget === t4;
            })), c4 = n2[a4];
            if (c4 && c4.events) if ("all" !== e4) {
              var l3 = false, u2 = c4.events[e4];
              if (u2) {
                if ("all" === r4) {
                  for (var p2 = u2.length - 1; p2 >= 0; p2--) {
                    var f2 = u2[p2];
                    s3(t4, e4, f2.func, f2.options);
                  }
                  return;
                }
                for (var d3 = Ge(i4), h3 = 0; h3 < u2.length; h3++) {
                  var v3 = u2[h3];
                  if (v3.func === r4 && Ne2(v3.options, d3)) {
                    t4.removeEventListener(e4, r4, o2.supportsOptions ? d3 : d3.capture), u2.splice(h3, 1), 0 === u2.length && (delete c4.events[e4], l3 = true);
                    break;
                  }
                }
              }
              l3 && !Object.keys(c4.events).length && n2.splice(a4, 1);
            } else for (e4 in c4.events) c4.events.hasOwnProperty(e4) && s3(t4, e4, "all");
          }
        }
        function c3(t4, e4) {
          for (var n3 = Ge(e4), i4 = new We2(t4), o3 = r3[t4.type], a4 = ht(t4)[0], s4 = a4; w.element(s4); ) {
            for (var c4 = 0; c4 < o3.length; c4++) {
              var l3 = o3[c4], u2 = l3.selector, p2 = l3.context;
              if (R2(s4, u2) && M(p2, a4) && M(p2, s4)) {
                var f2 = l3.listeners;
                i4.currentTarget = s4;
                for (var d3 = 0; d3 < f2.length; d3++) {
                  var h3 = f2[d3];
                  Ne2(h3.options, n3) && h3.func(i4);
                }
              }
            }
            s4 = A2(s4);
          }
        }
        function l2(t4) {
          return c3(t4, true);
        }
        return null == (e3 = t3.document) || e3.createElement("div").addEventListener("test", null, { get capture() {
          return o2.supportsOptions = true;
        }, get passive() {
          return o2.supportsPassive = true;
        } }), t3.events = o2, o2;
      } }, He2 = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t3) {
        for (var e3 = 0, n2 = He2.methodOrder; e3 < n2.length; e3++) {
          var r3 = n2[e3], i3 = He2[r3](t3);
          if (i3) return i3;
        }
        return null;
      }, simulationResume: function(t3) {
        var e3 = t3.pointerType, n2 = t3.eventType, r3 = t3.eventTarget, i3 = t3.scope;
        if (!/down|start/i.test(n2)) return null;
        for (var o2 = 0, a3 = i3.interactions.list; o2 < a3.length; o2++) {
          var s3 = a3[o2], c3 = r3;
          if (s3.simulation && s3.simulation.allowResume && s3.pointerType === e3) for (; c3; ) {
            if (c3 === s3.element) return s3;
            c3 = A2(c3);
          }
        }
        return null;
      }, mouseOrPen: function(t3) {
        var e3, n2 = t3.pointerId, r3 = t3.pointerType, i3 = t3.eventType, o2 = t3.scope;
        if ("mouse" !== r3 && "pen" !== r3) return null;
        for (var a3 = 0, s3 = o2.interactions.list; a3 < s3.length; a3++) {
          var c3 = s3[a3];
          if (c3.pointerType === r3) {
            if (c3.simulation && !Ke(c3, n2)) continue;
            if (c3.interacting()) return c3;
            e3 || (e3 = c3);
          }
        }
        if (e3) return e3;
        for (var l2 = 0, u2 = o2.interactions.list; l2 < u2.length; l2++) {
          var p2 = u2[l2];
          if (!(p2.pointerType !== r3 || /down/i.test(i3) && p2.simulation)) return p2;
        }
        return null;
      }, hasPointer: function(t3) {
        for (var e3 = t3.pointerId, n2 = 0, r3 = t3.scope.interactions.list; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          if (Ke(i3, e3)) return i3;
        }
        return null;
      }, idle: function(t3) {
        for (var e3 = t3.pointerType, n2 = 0, r3 = t3.scope.interactions.list; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          if (1 === i3.pointers.length) {
            var o2 = i3.interactable;
            if (o2 && (!o2.options.gesture || !o2.options.gesture.enabled)) continue;
          } else if (i3.pointers.length >= 2) continue;
          if (!i3.interacting() && e3 === i3.pointerType) return i3;
        }
        return null;
      } };
      function Ke(t3, e3) {
        return t3.pointers.some((function(t4) {
          return t4.id === e3;
        }));
      }
      var $e = He2, Je2 = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Qe(t3, e3) {
        return function(n2) {
          var r3 = e3.interactions.list, i3 = dt2(n2), o2 = ht(n2), a3 = o2[0], s3 = o2[1], c3 = [];
          if (/^touch/.test(n2.type)) {
            e3.prevTouchTime = e3.now();
            for (var l2 = 0, u2 = n2.changedTouches; l2 < u2.length; l2++) {
              var p2 = u2[l2], f2 = { pointer: p2, pointerId: at(p2), pointerType: i3, eventType: n2.type, eventTarget: a3, curEventTarget: s3, scope: e3 }, d3 = Ze(f2);
              c3.push([f2.pointer, f2.eventTarget, f2.curEventTarget, d3]);
            }
          } else {
            var h3 = false;
            if (!I.supportsPointerEvent && /mouse/.test(n2.type)) {
              for (var v3 = 0; v3 < r3.length && !h3; v3++) h3 = "mouse" !== r3[v3].pointerType && r3[v3].pointerIsDown;
              h3 = h3 || e3.now() - e3.prevTouchTime < 500 || 0 === n2.timeStamp;
            }
            if (!h3) {
              var g3 = { pointer: n2, pointerId: at(n2), pointerType: i3, eventType: n2.type, curEventTarget: s3, eventTarget: a3, scope: e3 }, m2 = Ze(g3);
              c3.push([g3.pointer, g3.eventTarget, g3.curEventTarget, m2]);
            }
          }
          for (var y3 = 0; y3 < c3.length; y3++) {
            var b3 = c3[y3], x3 = b3[0], w2 = b3[1], E3 = b3[2];
            b3[3][t3](x3, n2, w2, E3);
          }
        };
      }
      function Ze(t3) {
        var e3 = t3.pointerType, n2 = t3.scope, r3 = { interaction: $e.search(t3), searchDetails: t3 };
        return n2.fire("interactions:find", r3), r3.interaction || n2.interactions.new({ pointerType: e3 });
      }
      function tn(t3, e3) {
        var n2 = t3.doc, r3 = t3.scope, i3 = t3.options, o2 = r3.interactions.docEvents, a3 = r3.events, s3 = a3[e3];
        for (var c3 in r3.browser.isIOS && !i3.events && (i3.events = { passive: false }), a3.delegatedEvents) s3(n2, c3, a3.delegateListener), s3(n2, c3, a3.delegateUseCapture, true);
        for (var l2 = i3 && i3.events, u2 = 0; u2 < o2.length; u2++) {
          var p2 = o2[u2];
          s3(n2, p2.type, p2.listener, l2);
        }
      }
      var en = { id: "core/interactions", install: function(t3) {
        for (var e3 = {}, n2 = 0; n2 < Je2.length; n2++) {
          var i3 = Je2[n2];
          e3[i3] = Qe(i3, t3);
        }
        var a3, c3 = I.pEventTypes;
        function l2() {
          for (var e4 = 0, n3 = t3.interactions.list; e4 < n3.length; e4++) {
            var r3 = n3[e4];
            if (r3.pointerIsDown && "touch" === r3.pointerType && !r3._interacting) for (var i4 = function() {
              var e5 = a4[o2];
              t3.documents.some((function(t4) {
                return M(t4.doc, e5.downTarget);
              })) || r3.removePointer(e5.pointer, e5.event);
            }, o2 = 0, a4 = r3.pointers; o2 < a4.length; o2++) i4();
          }
        }
        (a3 = k2.PointerEvent ? [{ type: c3.down, listener: l2 }, { type: c3.down, listener: e3.pointerDown }, { type: c3.move, listener: e3.pointerMove }, { type: c3.up, listener: e3.pointerUp }, { type: c3.cancel, listener: e3.pointerUp }] : [{ type: "mousedown", listener: e3.pointerDown }, { type: "mousemove", listener: e3.pointerMove }, { type: "mouseup", listener: e3.pointerUp }, { type: "touchstart", listener: l2 }, { type: "touchstart", listener: e3.pointerDown }, { type: "touchmove", listener: e3.pointerMove }, { type: "touchend", listener: e3.pointerUp }, { type: "touchcancel", listener: e3.pointerUp }]).push({ type: "blur", listener: function(e4) {
          for (var n3 = 0, r3 = t3.interactions.list; n3 < r3.length; n3++) {
            r3[n3].documentBlur(e4);
          }
        } }), t3.prevTouchTime = 0, t3.Interaction = (function(e4) {
          s2(i4, e4);
          var n3 = p(i4);
          function i4() {
            return r2(this, i4), n3.apply(this, arguments);
          }
          return o(i4, [{ key: "pointerMoveTolerance", get: function() {
            return t3.interactions.pointerMoveTolerance;
          }, set: function(e5) {
            t3.interactions.pointerMoveTolerance = e5;
          } }, { key: "_now", value: function() {
            return t3.now();
          } }]), i4;
        })(De2), t3.interactions = { list: [], new: function(e4) {
          e4.scopeFire = function(e5, n4) {
            return t3.fire(e5, n4);
          };
          var n3 = new t3.Interaction(e4);
          return t3.interactions.list.push(n3), n3;
        }, listeners: e3, docEvents: a3, pointerMoveTolerance: 1 }, t3.usePlugin(he);
      }, listeners: { "scope:add-document": function(t3) {
        return tn(t3, "add");
      }, "scope:remove-document": function(t3) {
        return tn(t3, "remove");
      }, "interactable:unset": function(t3, e3) {
        for (var n2 = t3.interactable, r3 = e3.interactions.list.length - 1; r3 >= 0; r3--) {
          var i3 = e3.interactions.list[r3];
          i3.interactable === n2 && (i3.stop(), e3.fire("interactions:destroy", { interaction: i3 }), i3.destroy(), e3.interactions.list.length > 2 && e3.interactions.list.splice(r3, 1));
        }
      } }, onDocSignal: tn, doOnInteractions: Qe, methodNames: Je2 }, nn = en, rn = (function(t3) {
        return t3[t3.On = 0] = "On", t3[t3.Off = 1] = "Off", t3;
      })(rn || {}), on2 = (function() {
        function t3(e3, n2, i3, o2) {
          r2(this, t3), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Ve(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n2.actions, this.target = e3, this._context = n2.context || i3, this._win = y2(B2(e3) ? this._context : e3), this._doc = this._win.document, this._scopeEvents = o2, this.set(n2);
        }
        return o(t3, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(t4, e3) {
          return w.func(e3.onstart) && this.on("".concat(t4, "start"), e3.onstart), w.func(e3.onmove) && this.on("".concat(t4, "move"), e3.onmove), w.func(e3.onend) && this.on("".concat(t4, "end"), e3.onend), w.func(e3.oninertiastart) && this.on("".concat(t4, "inertiastart"), e3.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(t4, e3, n2) {
          var r3, i3 = this, o2 = null == (r3 = this._actions.map[t4]) ? void 0 : r3.filterEventType, a3 = function(t5) {
            return (null == o2 || o2(t5)) && ve(t5, i3._actions);
          };
          (w.array(e3) || w.object(e3)) && this._onOff(rn.Off, t4, e3, void 0, a3), (w.array(n2) || w.object(n2)) && this._onOff(rn.On, t4, n2, void 0, a3);
        } }, { key: "setPerAction", value: function(t4, e3) {
          var n2 = this._defaults;
          for (var r3 in e3) {
            var i3 = r3, o2 = this.options[t4], a3 = e3[i3];
            "listeners" === i3 && this.updatePerActionListeners(t4, o2.listeners, a3), w.array(a3) ? o2[i3] = mt(a3) : w.plainObject(a3) ? (o2[i3] = V2(o2[i3] || {}, ge2(a3)), w.object(n2.perAction[i3]) && "enabled" in n2.perAction[i3] && (o2[i3].enabled = false !== a3.enabled)) : w.bool(a3) && w.object(n2.perAction[i3]) ? o2[i3].enabled = a3 : o2[i3] = a3;
          }
        } }, { key: "getRect", value: function(t4) {
          return t4 = t4 || (w.element(this.target) ? this.target : null), w.string(this.target) && (t4 = t4 || this._context.querySelector(this.target)), L2(t4);
        } }, { key: "rectChecker", value: function(t4) {
          var e3 = this;
          return w.func(t4) ? (this.getRect = function(n2) {
            var r3 = V2({}, t4.apply(e3, n2));
            return "width" in r3 || (r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top), r3;
          }, this) : null === t4 ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(t4, e3) {
          if (B2(e3) || w.object(e3)) {
            for (var n2 in this.options[t4] = e3, this._actions.map) this.options[n2][t4] = e3;
            return this;
          }
          return this.options[t4];
        } }, { key: "origin", value: function(t4) {
          return this._backCompatOption("origin", t4);
        } }, { key: "deltaSource", value: function(t4) {
          return "page" === t4 || "client" === t4 ? (this.options.deltaSource = t4, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var t4 = this.target;
          return w.string(t4) ? Array.from(this._context.querySelectorAll(t4)) : w.func(t4) && t4.getAllElements ? t4.getAllElements() : w.element(t4) ? [t4] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(t4) {
          return this._context === t4.ownerDocument || M(this._context, t4);
        } }, { key: "testIgnoreAllow", value: function(t4, e3, n2) {
          return !this.testIgnore(t4.ignoreFrom, e3, n2) && this.testAllow(t4.allowFrom, e3, n2);
        } }, { key: "testAllow", value: function(t4, e3, n2) {
          return !t4 || !!w.element(n2) && (w.string(t4) ? F(n2, t4, e3) : !!w.element(t4) && M(t4, n2));
        } }, { key: "testIgnore", value: function(t4, e3, n2) {
          return !(!t4 || !w.element(n2)) && (w.string(t4) ? F(n2, t4, e3) : !!w.element(t4) && M(t4, n2));
        } }, { key: "fire", value: function(t4) {
          return this.events.fire(t4), this;
        } }, { key: "_onOff", value: function(t4, e3, n2, r3, i3) {
          w.object(e3) && !w.array(e3) && (r3 = n2, n2 = null);
          var o2 = $2(e3, n2, i3);
          for (var a3 in o2) {
            "wheel" === a3 && (a3 = I.wheelEvent);
            for (var s3 = 0, c3 = o2[a3]; s3 < c3.length; s3++) {
              var l2 = c3[s3];
              ve(a3, this._actions) ? this.events[t4 === rn.On ? "on" : "off"](a3, l2) : w.string(this.target) ? this._scopeEvents[t4 === rn.On ? "addDelegate" : "removeDelegate"](this.target, this._context, a3, l2, r3) : this._scopeEvents[t4 === rn.On ? "add" : "remove"](this.target, a3, l2, r3);
            }
          }
          return this;
        } }, { key: "on", value: function(t4, e3, n2) {
          return this._onOff(rn.On, t4, e3, n2);
        } }, { key: "off", value: function(t4, e3, n2) {
          return this._onOff(rn.Off, t4, e3, n2);
        } }, { key: "set", value: function(t4) {
          var e3 = this._defaults;
          for (var n2 in w.object(t4) || (t4 = {}), this.options = ge2(e3.base), this._actions.methodDict) {
            var r3 = n2, i3 = this._actions.methodDict[r3];
            this.options[r3] = {}, this.setPerAction(r3, V2(V2({}, e3.perAction), e3.actions[r3])), this[i3](t4[r3]);
          }
          for (var o2 in t4) "getRect" !== o2 ? w.func(this[o2]) && this[o2](t4[o2]) : this.rectChecker(t4.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (w.string(this.target)) for (var t4 in this._scopeEvents.delegatedEvents) for (var e3 = this._scopeEvents.delegatedEvents[t4], n2 = e3.length - 1; n2 >= 0; n2--) {
            var r3 = e3[n2], i3 = r3.selector, o2 = r3.context, a3 = r3.listeners;
            i3 === this.target && o2 === this._context && e3.splice(n2, 1);
            for (var s3 = a3.length - 1; s3 >= 0; s3--) this._scopeEvents.removeDelegate(this.target, this._context, t4, a3[s3][0], a3[s3][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t3;
      })(), an2 = (function() {
        function t3(e3) {
          var n2 = this;
          r2(this, t3), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e3, e3.addListeners({ "interactable:unset": function(t4) {
            var e4 = t4.interactable, r3 = e4.target, i3 = w.string(r3) ? n2.selectorMap[r3] : r3[n2.scope.id], o2 = yt(i3, (function(t5) {
              return t5 === e4;
            }));
            i3.splice(o2, 1);
          } });
        }
        return o(t3, [{ key: "new", value: function(t4, e3) {
          e3 = V2(e3 || {}, { actions: this.scope.actions });
          var n2 = new this.scope.Interactable(t4, e3, this.scope.document, this.scope.events);
          return this.scope.addDocument(n2._doc), this.list.push(n2), w.string(t4) ? (this.selectorMap[t4] || (this.selectorMap[t4] = []), this.selectorMap[t4].push(n2)) : (n2.target[this.scope.id] || Object.defineProperty(t4, this.scope.id, { value: [], configurable: true }), t4[this.scope.id].push(n2)), this.scope.fire("interactable:new", { target: t4, options: e3, interactable: n2, win: this.scope._win }), n2;
        } }, { key: "getExisting", value: function(t4, e3) {
          var n2 = e3 && e3.context || this.scope.document, r3 = w.string(t4), i3 = r3 ? this.selectorMap[t4] : t4[this.scope.id];
          if (i3) return bt(i3, (function(e4) {
            return e4._context === n2 && (r3 || e4.inContext(t4));
          }));
        } }, { key: "forEachMatch", value: function(t4, e3) {
          for (var n2 = 0, r3 = this.list; n2 < r3.length; n2++) {
            var i3 = r3[n2], o2 = void 0;
            if ((w.string(i3.target) ? w.element(t4) && R2(t4, i3.target) : t4 === i3.target) && i3.inContext(t4) && (o2 = e3(i3)), void 0 !== o2) return o2;
          }
        } }]), t3;
      })();
      var sn2 = (function() {
        function t3() {
          var e3 = this;
          r2(this, t3), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = false, this.listenerMaps = [], this.browser = I, this.defaults = ge2(Te), this.Eventable = Ve, this.actions = { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = (function(t4) {
            var e4 = function e5(n3, r3) {
              var i3 = t4.interactables.getExisting(n3, r3);
              return i3 || ((i3 = t4.interactables.new(n3, r3)).events.global = e5.globalEvents), i3;
            };
            return e4.getPointerAverage = lt, e4.getTouchBBox = ut, e4.getTouchDistance = pt2, e4.getTouchAngle = ft, e4.getElementRect = L2, e4.getElementClientRect = Y2, e4.matchesSelector = R2, e4.closest = z, e4.globalEvents = {}, e4.version = "1.10.27", e4.scope = t4, e4.use = function(t5, e5) {
              return this.scope.usePlugin(t5, e5), this;
            }, e4.isSet = function(t5, e5) {
              return !!this.scope.interactables.get(t5, e5 && e5.context);
            }, e4.on = Nt((function(t5, e5, n3) {
              if (w.string(t5) && -1 !== t5.search(" ") && (t5 = t5.trim().split(/ +/)), w.array(t5)) {
                for (var r3 = 0, i3 = t5; r3 < i3.length; r3++) {
                  var o2 = i3[r3];
                  this.on(o2, e5, n3);
                }
                return this;
              }
              if (w.object(t5)) {
                for (var a3 in t5) this.on(a3, t5[a3], e5);
                return this;
              }
              return ve(t5, this.scope.actions) ? this.globalEvents[t5] ? this.globalEvents[t5].push(e5) : this.globalEvents[t5] = [e5] : this.scope.events.add(this.scope.document, t5, e5, { options: n3 }), this;
            }), "The interact.on() method is being deprecated"), e4.off = Nt((function(t5, e5, n3) {
              if (w.string(t5) && -1 !== t5.search(" ") && (t5 = t5.trim().split(/ +/)), w.array(t5)) {
                for (var r3 = 0, i3 = t5; r3 < i3.length; r3++) {
                  var o2 = i3[r3];
                  this.off(o2, e5, n3);
                }
                return this;
              }
              if (w.object(t5)) {
                for (var a3 in t5) this.off(a3, t5[a3], e5);
                return this;
              }
              var s3;
              return ve(t5, this.scope.actions) ? t5 in this.globalEvents && -1 !== (s3 = this.globalEvents[t5].indexOf(e5)) && this.globalEvents[t5].splice(s3, 1) : this.scope.events.remove(this.scope.document, t5, e5, n3), this;
            }), "The interact.off() method is being deprecated"), e4.debug = function() {
              return this.scope;
            }, e4.supportsTouch = function() {
              return I.supportsTouch;
            }, e4.supportsPointerEvent = function() {
              return I.supportsPointerEvent;
            }, e4.stop = function() {
              for (var t5 = 0, e5 = this.scope.interactions.list; t5 < e5.length; t5++) e5[t5].stop();
              return this;
            }, e4.pointerMoveTolerance = function(t5) {
              return w.number(t5) ? (this.scope.interactions.pointerMoveTolerance = t5, this) : this.scope.interactions.pointerMoveTolerance;
            }, e4.addDocument = function(t5, e5) {
              this.scope.addDocument(t5, e5);
            }, e4.removeDocument = function(t5) {
              this.scope.removeDocument(t5);
            }, e4;
          })(this), this.InteractEvent = Se, this.Interactable = void 0, this.interactables = new an2(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(t4) {
            return e3.removeDocument(t4.target);
          };
          var n2 = this;
          this.Interactable = (function(t4) {
            s2(i3, t4);
            var e4 = p(i3);
            function i3() {
              return r2(this, i3), e4.apply(this, arguments);
            }
            return o(i3, [{ key: "_defaults", get: function() {
              return n2.defaults;
            } }, { key: "set", value: function(t5) {
              return f(c2(i3.prototype), "set", this).call(this, t5), n2.fire("interactable:set", { options: t5, interactable: this }), this;
            } }, { key: "unset", value: function() {
              f(c2(i3.prototype), "unset", this).call(this);
              var t5 = n2.interactables.list.indexOf(this);
              t5 < 0 || (n2.interactables.list.splice(t5, 1), n2.fire("interactable:unset", { interactable: this }));
            } }]), i3;
          })(on2);
        }
        return o(t3, [{ key: "addListeners", value: function(t4, e3) {
          this.listenerMaps.push({ id: e3, map: t4 });
        } }, { key: "fire", value: function(t4, e3) {
          for (var n2 = 0, r3 = this.listenerMaps; n2 < r3.length; n2++) {
            var i3 = r3[n2].map[t4];
            if (i3 && false === i3(e3, this, t4)) return false;
          }
        } }, { key: "init", value: function(t4) {
          return this.isInitialized ? this : (function(t5, e3) {
            t5.isInitialized = true, w.window(e3) && m(e3);
            return k2.init(e3), I.init(e3), Lt2.init(e3), t5.window = e3, t5.document = e3.document, t5.usePlugin(nn), t5.usePlugin(Ue2), t5;
          })(this, t4);
        } }, { key: "pluginIsInstalled", value: function(t4) {
          var e3 = t4.id;
          return e3 ? !!this._plugins.map[e3] : -1 !== this._plugins.list.indexOf(t4);
        } }, { key: "usePlugin", value: function(t4, e3) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(t4)) return this;
          if (t4.id && (this._plugins.map[t4.id] = t4), this._plugins.list.push(t4), t4.install && t4.install(this, e3), t4.listeners && t4.before) {
            for (var n2 = 0, r3 = this.listenerMaps.length, i3 = t4.before.reduce((function(t5, e4) {
              return t5[e4] = true, t5[cn2(e4)] = true, t5;
            }), {}); n2 < r3; n2++) {
              var o2 = this.listenerMaps[n2].id;
              if (o2 && (i3[o2] || i3[cn2(o2)])) break;
            }
            this.listenerMaps.splice(n2, 0, { id: t4.id, map: t4.listeners });
          } else t4.listeners && this.listenerMaps.push({ id: t4.id, map: t4.listeners });
          return this;
        } }, { key: "addDocument", value: function(t4, e3) {
          if (-1 !== this.getDocIndex(t4)) return false;
          var n2 = y2(t4);
          e3 = e3 ? V2({}, e3) : {}, this.documents.push({ doc: t4, options: e3 }), this.events.documents.push(t4), t4 !== this.document && this.events.add(n2, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: t4, window: n2, scope: this, options: e3 });
        } }, { key: "removeDocument", value: function(t4) {
          var e3 = this.getDocIndex(t4), n2 = y2(t4), r3 = this.documents[e3].options;
          this.events.remove(n2, "unload", this.onWindowUnload), this.documents.splice(e3, 1), this.events.documents.splice(e3, 1), this.fire("scope:remove-document", { doc: t4, window: n2, scope: this, options: r3 });
        } }, { key: "getDocIndex", value: function(t4) {
          for (var e3 = 0; e3 < this.documents.length; e3++) if (this.documents[e3].doc === t4) return e3;
          return -1;
        } }, { key: "getDocOptions", value: function(t4) {
          var e3 = this.getDocIndex(t4);
          return -1 === e3 ? null : this.documents[e3].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t3;
      })();
      function cn2(t3) {
        return t3 && t3.replace(/\/.*$/, "");
      }
      var ln2 = new sn2(), un2 = ln2.interactStatic, pn = "undefined" != typeof globalThis ? globalThis : window;
      ln2.init(pn);
      var fn2 = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t3) {
        var e3 = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter((function(e4) {
          var n3 = e4[0], r3 = e4[1];
          return n3 in t3 || r3 in t3;
        })), n2 = function(n3, r3) {
          for (var i3 = t3.range, o2 = t3.limits, a3 = void 0 === o2 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : o2, s3 = t3.offset, c3 = void 0 === s3 ? { x: 0, y: 0 } : s3, l2 = { range: i3, grid: t3, x: null, y: null }, u2 = 0; u2 < e3.length; u2++) {
            var p2 = e3[u2], f2 = p2[0], d3 = p2[1], h3 = Math.round((n3 - c3.x) / t3[f2]), v3 = Math.round((r3 - c3.y) / t3[d3]);
            l2[f2] = Math.max(a3.left, Math.min(a3.right, h3 * t3[f2] + c3.x)), l2[d3] = Math.max(a3.top, Math.min(a3.bottom, v3 * t3[d3] + c3.y));
          }
          return l2;
        };
        return n2.grid = t3, n2.coordFields = e3, n2;
      } }), dn2 = { id: "snappers", install: function(t3) {
        var e3 = t3.interactStatic;
        e3.snappers = V2(e3.snappers || {}, fn2), e3.createSnapGrid = e3.snappers.grid;
      } }, hn2 = dn2, vn = { start: function(t3) {
        var n2 = t3.state, r3 = t3.rect, i3 = t3.edges, o2 = t3.pageCoords, a3 = n2.options, s3 = a3.ratio, c3 = a3.enabled, l2 = n2.options, u2 = l2.equalDelta, p2 = l2.modifiers;
        "preserve" === s3 && (s3 = r3.width / r3.height), n2.startCoords = V2({}, o2), n2.startRect = V2({}, r3), n2.ratio = s3, n2.equalDelta = u2;
        var f2 = n2.linkedEdges = { top: i3.top || i3.left && !i3.bottom, left: i3.left || i3.top && !i3.right, bottom: i3.bottom || i3.right && !i3.top, right: i3.right || i3.bottom && !i3.left };
        if (n2.xIsPrimaryAxis = !(!i3.left && !i3.right), n2.equalDelta) {
          var d3 = (f2.left ? 1 : -1) * (f2.top ? 1 : -1);
          n2.edgeSign = { x: d3, y: d3 };
        } else n2.edgeSign = { x: f2.left ? -1 : 1, y: f2.top ? -1 : 1 };
        if (false !== c3 && V2(i3, f2), null != p2 && p2.length) {
          var h3 = new me(t3.interaction);
          h3.copyFrom(t3.interaction.modification), h3.prepareStates(p2), n2.subModification = h3, h3.startAll(e2({}, t3));
        }
      }, set: function(t3) {
        var n2 = t3.state, r3 = t3.rect, i3 = t3.coords, o2 = n2.linkedEdges, a3 = V2({}, i3), s3 = n2.equalDelta ? gn : mn;
        if (V2(t3.edges, o2), s3(n2, n2.xIsPrimaryAxis, i3, r3), !n2.subModification) return null;
        var c3 = V2({}, r3);
        H(o2, c3, { x: i3.x - a3.x, y: i3.y - a3.y });
        var l2 = n2.subModification.setAll(e2(e2({}, t3), {}, { rect: c3, edges: o2, pageCoords: i3, prevCoords: i3, prevRect: c3 })), u2 = l2.delta;
        l2.changed && (s3(n2, Math.abs(u2.x) > Math.abs(u2.y), l2.coords, l2.rect), V2(i3, l2.coords));
        return l2.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
      function gn(t3, e3, n2) {
        var r3 = t3.startCoords, i3 = t3.edgeSign;
        e3 ? n2.y = r3.y + (n2.x - r3.x) * i3.y : n2.x = r3.x + (n2.y - r3.y) * i3.x;
      }
      function mn(t3, e3, n2, r3) {
        var i3 = t3.startRect, o2 = t3.startCoords, a3 = t3.ratio, s3 = t3.edgeSign;
        if (e3) {
          var c3 = r3.width / a3;
          n2.y = o2.y + (c3 - i3.height) * s3.y;
        } else {
          var l2 = r3.height * a3;
          n2.x = o2.x + (l2 - i3.width) * s3.x;
        }
      }
      var yn = be(vn, "aspectRatio"), bn = function() {
      };
      bn._defaults = {};
      var xn2 = bn;
      function wn(t3, e3, n2) {
        return w.func(t3) ? G2(t3, e3.interactable, e3.element, [n2.x, n2.y, e3]) : G2(t3, e3.interactable, e3.element);
      }
      var En = { start: function(t3) {
        var e3 = t3.rect, n2 = t3.startOffset, r3 = t3.state, i3 = t3.interaction, o2 = t3.pageCoords, a3 = r3.options, s3 = a3.elementRect, c3 = V2({ left: 0, top: 0, right: 0, bottom: 0 }, a3.offset || {});
        if (e3 && s3) {
          var l2 = wn(a3.restriction, i3, o2);
          if (l2) {
            var u2 = l2.right - l2.left - e3.width, p2 = l2.bottom - l2.top - e3.height;
            u2 < 0 && (c3.left += u2, c3.right += u2), p2 < 0 && (c3.top += p2, c3.bottom += p2);
          }
          c3.left += n2.left - e3.width * s3.left, c3.top += n2.top - e3.height * s3.top, c3.right += n2.right - e3.width * (1 - s3.right), c3.bottom += n2.bottom - e3.height * (1 - s3.bottom);
        }
        r3.offset = c3;
      }, set: function(t3) {
        var e3 = t3.coords, n2 = t3.interaction, r3 = t3.state, i3 = r3.options, o2 = r3.offset, a3 = wn(i3.restriction, n2, e3);
        if (a3) {
          var s3 = (function(t4) {
            return !t4 || "left" in t4 && "top" in t4 || ((t4 = V2({}, t4)).left = t4.x || 0, t4.top = t4.y || 0, t4.right = t4.right || t4.left + t4.width, t4.bottom = t4.bottom || t4.top + t4.height), t4;
          })(a3);
          e3.x = Math.max(Math.min(s3.right - o2.right, e3.x), s3.left + o2.left), e3.y = Math.max(Math.min(s3.bottom - o2.bottom, e3.y), s3.top + o2.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } }, Tn2 = be(En, "restrict"), Sn2 = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, _n = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function Pn(t3, e3) {
        for (var n2 = 0, r3 = ["top", "left", "bottom", "right"]; n2 < r3.length; n2++) {
          var i3 = r3[n2];
          i3 in t3 || (t3[i3] = e3[i3]);
        }
        return t3;
      }
      var On2 = { noInner: Sn2, noOuter: _n, start: function(t3) {
        var e3, n2 = t3.interaction, r3 = t3.startOffset, i3 = t3.state, o2 = i3.options;
        o2 && (e3 = N(wn(o2.offset, n2, n2.coords.start.page))), e3 = e3 || { x: 0, y: 0 }, i3.offset = { top: e3.y + r3.top, left: e3.x + r3.left, bottom: e3.y - r3.bottom, right: e3.x - r3.right };
      }, set: function(t3) {
        var e3 = t3.coords, n2 = t3.edges, r3 = t3.interaction, i3 = t3.state, o2 = i3.offset, a3 = i3.options;
        if (n2) {
          var s3 = V2({}, e3), c3 = wn(a3.inner, r3, s3) || {}, l2 = wn(a3.outer, r3, s3) || {};
          Pn(c3, Sn2), Pn(l2, _n), n2.top ? e3.y = Math.min(Math.max(l2.top + o2.top, s3.y), c3.top + o2.top) : n2.bottom && (e3.y = Math.max(Math.min(l2.bottom + o2.bottom, s3.y), c3.bottom + o2.bottom)), n2.left ? e3.x = Math.min(Math.max(l2.left + o2.left, s3.x), c3.left + o2.left) : n2.right && (e3.x = Math.max(Math.min(l2.right + o2.right, s3.x), c3.right + o2.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } }, kn = be(On2, "restrictEdges"), Dn = V2({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t3) {
      } }, En.defaults), In = be({ start: En.start, set: En.set, defaults: Dn }, "restrictRect"), Mn = { width: -1 / 0, height: -1 / 0 }, zn2 = { width: 1 / 0, height: 1 / 0 };
      var An = be({ start: function(t3) {
        return On2.start(t3);
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.state, r3 = t3.rect, i3 = t3.edges, o2 = n2.options;
        if (i3) {
          var a3 = U(wn(o2.min, e3, t3.coords)) || Mn, s3 = U(wn(o2.max, e3, t3.coords)) || zn2;
          n2.options = { endOnly: o2.endOnly, inner: V2({}, On2.noInner), outer: V2({}, On2.noOuter) }, i3.top ? (n2.options.inner.top = r3.bottom - a3.height, n2.options.outer.top = r3.bottom - s3.height) : i3.bottom && (n2.options.inner.bottom = r3.top + a3.height, n2.options.outer.bottom = r3.top + s3.height), i3.left ? (n2.options.inner.left = r3.right - a3.width, n2.options.outer.left = r3.right - s3.width) : i3.right && (n2.options.inner.right = r3.left + a3.width, n2.options.outer.right = r3.left + s3.width), On2.set(t3), n2.options = o2;
        }
      }, defaults: { min: null, max: null, endOnly: false, enabled: false } }, "restrictSize");
      var Rn = { start: function(t3) {
        var e3, n2 = t3.interaction, r3 = t3.interactable, i3 = t3.element, o2 = t3.rect, a3 = t3.state, s3 = t3.startOffset, c3 = a3.options, l2 = c3.offsetWithOrigin ? (function(t4) {
          var e4 = t4.interaction.element, n3 = N(G2(t4.state.options.origin, null, null, [e4])), r4 = n3 || K2(t4.interactable, e4, t4.interaction.prepared.name);
          return r4;
        })(t3) : { x: 0, y: 0 };
        if ("startCoords" === c3.offset) e3 = { x: n2.coords.start.page.x, y: n2.coords.start.page.y };
        else {
          var u2 = G2(c3.offset, r3, i3, [n2]);
          (e3 = N(u2) || { x: 0, y: 0 }).x += l2.x, e3.y += l2.y;
        }
        var p2 = c3.relativePoints;
        a3.offsets = o2 && p2 && p2.length ? p2.map((function(t4, n3) {
          return { index: n3, relativePoint: t4, x: s3.left - o2.width * t4.x + e3.x, y: s3.top - o2.height * t4.y + e3.y };
        })) : [{ index: 0, relativePoint: null, x: e3.x, y: e3.y }];
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.coords, r3 = t3.state, i3 = r3.options, o2 = r3.offsets, a3 = K2(e3.interactable, e3.element, e3.prepared.name), s3 = V2({}, n2), c3 = [];
        i3.offsetWithOrigin || (s3.x -= a3.x, s3.y -= a3.y);
        for (var l2 = 0, u2 = o2; l2 < u2.length; l2++) for (var p2 = u2[l2], f2 = s3.x - p2.x, d3 = s3.y - p2.y, h3 = 0, v3 = i3.targets.length; h3 < v3; h3++) {
          var g3 = i3.targets[h3], m2 = void 0;
          (m2 = w.func(g3) ? g3(f2, d3, e3._proxy, p2, h3) : g3) && c3.push({ x: (w.number(m2.x) ? m2.x : f2) + p2.x, y: (w.number(m2.y) ? m2.y : d3) + p2.y, range: w.number(m2.range) ? m2.range : i3.range, source: g3, index: h3, offset: p2 });
        }
        for (var y3 = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, b3 = 0; b3 < c3.length; b3++) {
          var x3 = c3[b3], E3 = x3.range, T3 = x3.x - s3.x, S2 = x3.y - s3.y, _3 = Q(T3, S2), P3 = _3 <= E3;
          E3 === 1 / 0 && y3.inRange && y3.range !== 1 / 0 && (P3 = false), y3.target && !(P3 ? y3.inRange && E3 !== 1 / 0 ? _3 / E3 < y3.distance / y3.range : E3 === 1 / 0 && y3.range !== 1 / 0 || _3 < y3.distance : !y3.inRange && _3 < y3.distance) || (y3.target = x3, y3.distance = _3, y3.range = E3, y3.inRange = P3, y3.delta.x = T3, y3.delta.y = S2);
        }
        return y3.inRange && (n2.x = y3.target.x, n2.y = y3.target.y), r3.closest = y3, y3;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } }, Cn = be(Rn, "snap");
      var jn = { start: function(t3) {
        var e3 = t3.state, n2 = t3.edges, r3 = e3.options;
        if (!n2) return null;
        t3.state = { options: { targets: null, relativePoints: [{ x: n2.left ? 0 : 1, y: n2.top ? 0 : 1 }], offset: r3.offset || "self", origin: { x: 0, y: 0 }, range: r3.range } }, e3.targetFields = e3.targetFields || [["width", "height"], ["x", "y"]], Rn.start(t3), e3.offsets = t3.state.offsets, t3.state = e3;
      }, set: function(t3) {
        var e3 = t3.interaction, n2 = t3.state, r3 = t3.coords, i3 = n2.options, o2 = n2.offsets, a3 = { x: r3.x - o2[0].x, y: r3.y - o2[0].y };
        n2.options = V2({}, i3), n2.options.targets = [];
        for (var s3 = 0, c3 = i3.targets || []; s3 < c3.length; s3++) {
          var l2 = c3[s3], u2 = void 0;
          if (u2 = w.func(l2) ? l2(a3.x, a3.y, e3) : l2) {
            for (var p2 = 0, f2 = n2.targetFields; p2 < f2.length; p2++) {
              var d3 = f2[p2], h3 = d3[0], v3 = d3[1];
              if (h3 in u2 || v3 in u2) {
                u2.x = u2[h3], u2.y = u2[v3];
                break;
              }
            }
            n2.options.targets.push(u2);
          }
        }
        var g3 = Rn.set(t3);
        return n2.options = i3, g3;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } }, Fn = be(jn, "snapSize");
      var Xn = { aspectRatio: yn, restrictEdges: kn, restrict: Tn2, restrictRect: In, restrictSize: An, snapEdges: be({ start: function(t3) {
        var e3 = t3.edges;
        return e3 ? (t3.state.targetFields = t3.state.targetFields || [[e3.left ? "left" : "right", e3.top ? "top" : "bottom"]], jn.start(t3)) : null;
      }, set: jn.set, defaults: V2(ge2(jn.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Cn, snapSize: Fn, spring: xn2, avoid: xn2, transform: xn2, rubberband: xn2 }, Yn = { id: "modifiers", install: function(t3) {
        var e3 = t3.interactStatic;
        for (var n2 in t3.usePlugin(Ee), t3.usePlugin(hn2), e3.modifiers = Xn, Xn) {
          var r3 = Xn[n2], i3 = r3._defaults, o2 = r3._methods;
          i3._methods = o2, t3.defaults.perAction[n2] = i3;
        }
      } }, Ln2 = Yn, qn = (function(t3) {
        s2(n2, t3);
        var e3 = p(n2);
        function n2(t4, i3, o2, a3, s3, c3) {
          var l2;
          if (r2(this, n2), tt2(u(l2 = e3.call(this, s3)), o2), o2 !== i3 && tt2(u(l2), i3), l2.timeStamp = c3, l2.originalEvent = o2, l2.type = t4, l2.pointerId = at(i3), l2.pointerType = dt2(i3), l2.target = a3, l2.currentTarget = null, "tap" === t4) {
            var p2 = s3.getPointerIndex(i3);
            l2.dt = l2.timeStamp - s3.pointers[p2].downTime;
            var f2 = l2.timeStamp - s3.tapTime;
            l2.double = !!s3.prevTap && "doubletap" !== s3.prevTap.type && s3.prevTap.target === l2.target && f2 < 500;
          } else "doubletap" === t4 && (l2.dt = i3.timeStamp - s3.tapTime, l2.double = true);
          return l2;
        }
        return o(n2, [{ key: "_subtractOrigin", value: function(t4) {
          var e4 = t4.x, n3 = t4.y;
          return this.pageX -= e4, this.pageY -= n3, this.clientX -= e4, this.clientY -= n3, this;
        } }, { key: "_addOrigin", value: function(t4) {
          var e4 = t4.x, n3 = t4.y;
          return this.pageX += e4, this.pageY += n3, this.clientX += e4, this.clientY += n3, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n2;
      })(vt2), Bn = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t3) {
        t3.pointerEvents = Bn, t3.defaults.actions.pointerEvents = Bn.defaults, V2(t3.actions.phaselessTypes, Bn.types);
      }, listeners: { "interactions:new": function(t3) {
        var e3 = t3.interaction;
        e3.prevTap = null, e3.tapTime = 0;
      }, "interactions:update-pointer": function(t3) {
        var e3 = t3.down, n2 = t3.pointerInfo;
        if (!e3 && n2.hold) return;
        n2.hold = { duration: 1 / 0, timeout: null };
      }, "interactions:move": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget;
        t3.duplicate || n2.pointerIsDown && !n2.pointerWasMoved || (n2.pointerIsDown && Gn(t3), Vn({ interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "move" }, e3));
      }, "interactions:down": function(t3, e3) {
        !(function(t4, e4) {
          for (var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget, a3 = t4.pointerIndex, s3 = n2.pointers[a3].hold, c3 = q(o2), l2 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "hold", targets: [], path: c3, node: null }, u2 = 0; u2 < c3.length; u2++) {
            var p2 = c3[u2];
            l2.node = p2, e4.fire("pointerEvents:collect-targets", l2);
          }
          if (!l2.targets.length) return;
          for (var f2 = 1 / 0, d3 = 0, h3 = l2.targets; d3 < h3.length; d3++) {
            var v3 = h3[d3].eventable.options.holdDuration;
            v3 < f2 && (f2 = v3);
          }
          s3.duration = f2, s3.timeout = setTimeout((function() {
            Vn({ interaction: n2, eventTarget: o2, pointer: r3, event: i3, type: "hold" }, e4);
          }), f2);
        })(t3, e3), Vn(t3, e3);
      }, "interactions:up": function(t3, e3) {
        Gn(t3), Vn(t3, e3), (function(t4, e4) {
          var n2 = t4.interaction, r3 = t4.pointer, i3 = t4.event, o2 = t4.eventTarget;
          n2.pointerWasMoved || Vn({ interaction: n2, eventTarget: o2, pointer: r3, event: i3, type: "tap" }, e4);
        })(t3, e3);
      }, "interactions:cancel": function(t3, e3) {
        Gn(t3), Vn(t3, e3);
      } }, PointerEvent: qn, fire: Vn, collectEventTargets: Wn, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
      function Vn(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget, a3 = t3.type, s3 = t3.targets, c3 = void 0 === s3 ? Wn(t3, e3) : s3, l2 = new qn(a3, r3, i3, o2, n2, e3.now());
        e3.fire("pointerEvents:new", { pointerEvent: l2 });
        for (var u2 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, targets: c3, type: a3, pointerEvent: l2 }, p2 = 0; p2 < c3.length; p2++) {
          var f2 = c3[p2];
          for (var d3 in f2.props || {}) l2[d3] = f2.props[d3];
          var h3 = K2(f2.eventable, f2.node);
          if (l2._subtractOrigin(h3), l2.eventable = f2.eventable, l2.currentTarget = f2.node, f2.eventable.fire(l2), l2._addOrigin(h3), l2.immediatePropagationStopped || l2.propagationStopped && p2 + 1 < c3.length && c3[p2 + 1].node !== l2.currentTarget) break;
        }
        if (e3.fire("pointerEvents:fired", u2), "tap" === a3) {
          var v3 = l2.double ? Vn({ interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: "doubletap" }, e3) : l2;
          n2.prevTap = v3, n2.tapTime = v3.timeStamp;
        }
        return l2;
      }
      function Wn(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointer, i3 = t3.event, o2 = t3.eventTarget, a3 = t3.type, s3 = n2.getPointerIndex(r3), c3 = n2.pointers[s3];
        if ("tap" === a3 && (n2.pointerWasMoved || !c3 || c3.downTarget !== o2)) return [];
        for (var l2 = q(o2), u2 = { interaction: n2, pointer: r3, event: i3, eventTarget: o2, type: a3, path: l2, targets: [], node: null }, p2 = 0; p2 < l2.length; p2++) {
          var f2 = l2[p2];
          u2.node = f2, e3.fire("pointerEvents:collect-targets", u2);
        }
        return "hold" === a3 && (u2.targets = u2.targets.filter((function(t4) {
          var e4, r4;
          return t4.eventable.options.holdDuration === (null == (e4 = n2.pointers[s3]) || null == (r4 = e4.hold) ? void 0 : r4.duration);
        }))), u2.targets;
      }
      function Gn(t3) {
        var e3 = t3.interaction, n2 = t3.pointerIndex, r3 = e3.pointers[n2].hold;
        r3 && r3.timeout && (clearTimeout(r3.timeout), r3.timeout = null);
      }
      var Nn = Object.freeze({ __proto__: null, default: Bn });
      function Un(t3) {
        var e3 = t3.interaction;
        e3.holdIntervalHandle && (clearInterval(e3.holdIntervalHandle), e3.holdIntervalHandle = null);
      }
      var Hn = { id: "pointer-events/holdRepeat", install: function(t3) {
        t3.usePlugin(Bn);
        var e3 = t3.pointerEvents;
        e3.defaults.holdRepeatInterval = 0, e3.types.holdrepeat = t3.actions.phaselessTypes.holdrepeat = true;
      }, listeners: ["move", "up", "cancel", "endall"].reduce((function(t3, e3) {
        return t3["pointerEvents:".concat(e3)] = Un, t3;
      }), { "pointerEvents:new": function(t3) {
        var e3 = t3.pointerEvent;
        "hold" === e3.type && (e3.count = (e3.count || 0) + 1);
      }, "pointerEvents:fired": function(t3, e3) {
        var n2 = t3.interaction, r3 = t3.pointerEvent, i3 = t3.eventTarget, o2 = t3.targets;
        if ("hold" === r3.type && o2.length) {
          var a3 = o2[0].eventable.options.holdRepeatInterval;
          a3 <= 0 || (n2.holdIntervalHandle = setTimeout((function() {
            e3.pointerEvents.fire({ interaction: n2, eventTarget: i3, type: "hold", pointer: r3, event: r3 }, e3);
          }), a3));
        }
      } }) }, Kn = Hn;
      var $n = { id: "pointer-events/interactableTargets", install: function(t3) {
        var e3 = t3.Interactable;
        e3.prototype.pointerEvents = function(t4) {
          return V2(this.events.options, t4), this;
        };
        var n2 = e3.prototype._backCompatOption;
        e3.prototype._backCompatOption = function(t4, e4) {
          var r3 = n2.call(this, t4, e4);
          return r3 === this && (this.events.options[t4] = e4), r3;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t3, e3) {
        var n2 = t3.targets, r3 = t3.node, i3 = t3.type, o2 = t3.eventTarget;
        e3.interactables.forEachMatch(r3, (function(t4) {
          var e4 = t4.events, a3 = e4.options;
          e4.types[i3] && e4.types[i3].length && t4.testIgnoreAllow(a3, r3, o2) && n2.push({ node: r3, eventable: e4, props: { interactable: t4 } });
        }));
      }, "interactable:new": function(t3) {
        var e3 = t3.interactable;
        e3.events.getRect = function(t4) {
          return e3.getRect(t4);
        };
      }, "interactable:set": function(t3, e3) {
        var n2 = t3.interactable, r3 = t3.options;
        V2(n2.events.options, e3.pointerEvents.defaults), V2(n2.events.options, r3.pointerEvents || {});
      } } }, Jn = $n, Qn = { id: "pointer-events", install: function(t3) {
        t3.usePlugin(Nn), t3.usePlugin(Kn), t3.usePlugin(Jn);
      } }, Zn = Qn;
      var tr = { id: "reflow", install: function(t3) {
        var e3 = t3.Interactable;
        t3.actions.phases.reflow = true, e3.prototype.reflow = function(e4) {
          return (function(t4, e5, n2) {
            for (var r3 = t4.getAllElements(), i3 = n2.window.Promise, o2 = i3 ? [] : null, a3 = function() {
              var a4 = r3[s3], c3 = t4.getRect(a4);
              if (!c3) return 1;
              var l2, u2 = bt(n2.interactions.list, (function(n3) {
                return n3.interacting() && n3.interactable === t4 && n3.element === a4 && n3.prepared.name === e5.name;
              }));
              if (u2) u2.move(), o2 && (l2 = u2._reflowPromise || new i3((function(t5) {
                u2._reflowResolve = t5;
              })));
              else {
                var p2 = U(c3), f2 = /* @__PURE__ */ (function(t5) {
                  return { coords: t5, get page() {
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
                })({ page: { x: p2.x, y: p2.y }, client: { x: p2.x, y: p2.y }, timeStamp: n2.now() });
                l2 = (function(t5, e6, n3, r4, i4) {
                  var o3 = t5.interactions.new({ pointerType: "reflow" }), a5 = { interaction: o3, event: i4, pointer: i4, eventTarget: n3, phase: "reflow" };
                  o3.interactable = e6, o3.element = n3, o3.prevEvent = i4, o3.updatePointer(i4, i4, n3, true), nt2(o3.coords.delta), Ut(o3.prepared, r4), o3._doPhase(a5);
                  var s4 = t5.window, c4 = s4.Promise, l3 = c4 ? new c4((function(t6) {
                    o3._reflowResolve = t6;
                  })) : void 0;
                  o3._reflowPromise = l3, o3.start(r4, e6, n3), o3._interacting ? (o3.move(a5), o3.end(i4)) : (o3.stop(), o3._reflowResolve());
                  return o3.removePointer(i4, i4), l3;
                })(n2, t4, a4, e5, f2);
              }
              o2 && o2.push(l2);
            }, s3 = 0; s3 < r3.length && !a3(); s3++) ;
            return o2 && i3.all(o2).then((function() {
              return t4;
            }));
          })(this, e4, t3);
        };
      }, listeners: { "interactions:stop": function(t3, e3) {
        var n2 = t3.interaction;
        "reflow" === n2.pointerType && (n2._reflowResolve && n2._reflowResolve(), (function(t4, e4) {
          t4.splice(t4.indexOf(e4), 1);
        })(e3.interactions.list, n2));
      } } }, er = tr;
      if (un2.use(he), un2.use(Ce2), un2.use(Zn), un2.use(qe), un2.use(Ln2), un2.use(pe), un2.use(Xt2), un2.use(Gt), un2.use(er), un2.default = un2, "object" === n(module) && module) try {
        module.exports = un2;
      } catch (t3) {
      }
      return un2.default = un2, un2;
    }));
  })(interact_min$1, interact_min$1.exports);
  return interact_min$1.exports;
}
var interact_minExports = /* @__PURE__ */ requireInteract_min();
const He = /* @__PURE__ */ getDefaultExportFromCjs(interact_minExports);
const st = /* @__PURE__ */ defineComponent({
  __name: "grid-item",
  props: {
    isDraggable: { type: Boolean, default: void 0 },
    isResizable: { type: Boolean, default: void 0 },
    isBounded: { type: Boolean, default: void 0 },
    static: { type: Boolean, default: false },
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
    preserveAspectRatio: { type: Boolean, default: false },
    dragOption: { default: () => ({}) },
    resizeOption: { default: () => ({}) }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(Se, { expose: Me2, emit: We2 }) {
    const i$1 = Se, M = We2, l = inject(T), g2 = inject(v$1);
    if (!l)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const d2 = shallowRef(null), e2 = reactive({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: void 0,
      resizable: void 0,
      bounded: void 0,
      transformScale: 1,
      useCssTransforms: true,
      useStyleCursor: true,
      isDragging: false,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: false,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: false
    });
    let X2 = false, _2 = false, $2 = NaN, G$1 = NaN, k2 = NaN, E2 = NaN, j = -1, K$1 = -1, V$1 = -1, q = -1, h2 = i$1.x, v2 = i$1.y, p = i$1.w, y2 = i$1.h;
    const W2 = ref(), J = reactive({
      i: toRef(i$1, "i"),
      state: e2,
      wrapper: W2,
      calcXY: A2
    });
    function Q(t2) {
      Te(t2);
    }
    function Z2() {
      de();
    }
    function U(t2) {
      ie(i$1.isDraggable) && (e2.draggable = t2);
    }
    function ee(t2) {
      ie(i$1.isResizable) && (e2.resizable = t2);
    }
    function te(t2) {
      ie(i$1.isBounded) && (e2.bounded = t2);
    }
    function ie$1(t2) {
      e2.transformScale = t2;
    }
    function ae2(t2) {
      e2.rowHeight = t2;
    }
    function re2(t2) {
      e2.maxRows = t2;
    }
    function ne() {
      e2.rtl = r() === "rtl", de();
    }
    function oe2(t2) {
      e2.cols = Math.floor(t2);
    }
    l.increaseItem(J), onBeforeMount(() => {
      e2.rtl = r() === "rtl";
    }), onMounted(() => {
      l.responsive && l.lastBreakpoint ? e2.cols = B(l.lastBreakpoint, l.cols) : e2.cols = l.colNum, e2.rowHeight = l.rowHeight, e2.containerWidth = l.width !== null ? l.width : 100, e2.margin = l.margin !== void 0 ? l.margin.map(Number) : [10, 10], e2.maxRows = l.maxRows, ie(i$1.isDraggable) ? e2.draggable = l.isDraggable : e2.draggable = i$1.isDraggable, ie(i$1.isResizable) ? e2.resizable = l.isResizable : e2.resizable = i$1.isResizable, ie(i$1.isBounded) ? e2.bounded = l.isBounded : e2.bounded = i$1.isBounded, e2.transformScale = l.transformScale, e2.useCssTransforms = l.useCssTransforms, e2.useStyleCursor = l.useStyleCursor, watchEffect(() => {
        h2 = i$1.x, v2 = i$1.y, y2 = i$1.h, p = i$1.w, oo(H);
      }), g2.on("updateWidth", Q), g2.on("compact", Z2), g2.on("setDraggable", U), g2.on("setResizable", ee), g2.on("setBounded", te), g2.on("setTransformScale", ie$1), g2.on("setRowHeight", ae2), g2.on("setMaxRows", re2), g2.on("directionchange", ne), g2.on("setColNum", oe2);
    }), onBeforeUnmount(() => {
      g2.off("updateWidth", Q), g2.off("compact", Z2), g2.off("setDraggable", U), g2.off("setResizable", ee), g2.off("setBounded", te), g2.off("setTransformScale", ie$1), g2.off("setRowHeight", ae2), g2.off("setMaxRows", re2), g2.off("directionchange", ne), g2.off("setColNum", oe2), d2.value && (d2.value.unset(), d2.value = null), l.decreaseItem(J);
    }), Me2({ state: e2, wrapper: W2 });
    const Be2 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : false, se = computed(() => e2.resizable && !i$1.static), m = computed(() => l.isMirrored ? !e2.rtl : e2.rtl), Ce2 = computed(() => (e2.draggable || e2.resizable) && !i$1.static), z = K("item"), De2 = computed(() => ({
      [z.b()]: true,
      [z.bm("resizable")]: se.value,
      [z.bm("static")]: i$1.static,
      [z.bm("resizing")]: e2.isResizing,
      [z.bm("dragging")]: e2.isDragging,
      [z.bm("transform")]: e2.useCssTransforms,
      [z.bm("rtl")]: m.value,
      [z.bm("no-touch")]: Be2 && Ce2.value
    })), T$1 = computed(() => [z.be("resizer"), m.value && z.bem("resizer", "rtl")].filter(Boolean));
    watch(
      () => i$1.isDraggable,
      (t2) => {
        e2.draggable = t2;
      }
    ), watch(
      () => i$1.static,
      () => {
        oo(ue), oo(S);
      }
    ), watch(
      () => e2.draggable,
      () => {
        oo(ue);
      }
    ), watch(
      () => i$1.isResizable,
      (t2) => {
        e2.resizable = t2;
      }
    ), watch(
      () => i$1.isBounded,
      (t2) => {
        e2.bounded = t2;
      }
    ), watch(
      () => e2.resizable,
      () => {
        oo(S);
      }
    ), watch(
      () => e2.rowHeight,
      () => {
        oo(H), oo(F);
      }
    ), watch([() => e2.cols, () => e2.containerWidth], () => {
      oo(S), oo(H), oo(F);
    }), watch([() => i$1.minH, () => i$1.maxH, () => i$1.minW, () => i$1.maxW], () => {
      oo(S);
    }), watch(m, () => {
      oo(S), oo(H);
    }), watch([() => l.margin, () => l.margin[0], () => l.margin[1]], () => {
      const t2 = l.margin;
      !t2 || t2[0] === e2.margin[0] && t2[1] === e2.margin[1] || (e2.margin = t2.map(Number), oo(H), oo(F));
    });
    function H() {
      i$1.x + i$1.w > e2.cols ? (h2 = 0, p = i$1.w > e2.cols ? e2.cols : i$1.w) : (h2 = i$1.x, p = i$1.w);
      const t2 = B$1(h2, v2, p, y2);
      e2.isDragging && (t2.top = e2.dragging.top, m.value ? t2.right = e2.dragging.left : t2.left = e2.dragging.left), e2.isResizing && (t2.width = e2.resizing.width, t2.height = e2.resizing.height);
      let r2;
      e2.useCssTransforms ? m.value ? r2 = O(t2.top, t2.right, t2.width, t2.height) : r2 = G(t2.top, t2.left, t2.width, t2.height) : m.value ? r2 = V(t2.top, t2.right, t2.width, t2.height) : r2 = R(t2.top, t2.left, t2.width, t2.height), e2.style = r2;
    }
    function F() {
      const t2 = {};
      for (const r2 of ["width", "height"]) {
        const o = e2.style[r2].match(/^(\d+)px$/);
        if (!o)
          return;
        t2[r2] = o[1];
      }
      M("container-resized", i$1.i, i$1.h, i$1.w, t2.height, t2.width);
    }
    function le(t2) {
      if (i$1.static) return;
      const r2 = t2.type;
      if (r2 === "resizestart" && e2.isResizing || r2 !== "resizestart" && !e2.isResizing)
        return;
      const s2 = a(t2);
      if (ie(s2)) return;
      const { x: o, y: c2 } = s2, n = { width: 0, height: 0 };
      let a$12;
      switch (r2) {
        case "resizestart": {
          S(), j = p, K$1 = y2, a$12 = B$1(h2, v2, p, y2), n.width = a$12.width, n.height = a$12.height, e2.resizing = n, e2.isResizing = true;
          break;
        }
        case "resizemove": {
          !t2.edges.right && !t2.edges.left && (k2 = o), !t2.edges.top && !t2.edges.bottom && (E2 = c2);
          const u = i(k2, E2, o, c2);
          m.value ? n.width = e2.resizing.width - u.deltaX / e2.transformScale : n.width = e2.resizing.width + u.deltaX / e2.transformScale, n.height = e2.resizing.height + u.deltaY / e2.transformScale, e2.resizing = n;
          break;
        }
        case "resizeend": {
          a$12 = B$1(h2, v2, p, y2), n.width = a$12.width, n.height = a$12.height, e2.resizing = { width: -1, height: -1 }, e2.isResizing = false;
          break;
        }
      }
      a$12 = Ne2(n.height, n.width), a$12.w < i$1.minW && (a$12.w = i$1.minW), a$12.w > i$1.maxW && (a$12.w = i$1.maxW), a$12.h < i$1.minH && (a$12.h = i$1.minH), a$12.h > i$1.maxH && (a$12.h = i$1.maxH), a$12.h < 1 && (a$12.h = 1), a$12.w < 1 && (a$12.w = 1), k2 = o, E2 = c2, (p !== a$12.w || y2 !== a$12.h) && M("resize", i$1.i, a$12.h, a$12.w, n.height, n.width), t2.type === "resizeend" && (j !== p || K$1 !== y2) && M("resized", i$1.i, a$12.h, a$12.w, n.height, n.width), g2.emit("resizeEvent", t2.type, i$1.i, h2, v2, a$12.h, a$12.w);
    }
    function ge2(t2) {
      if (i$1.static || e2.isResizing) return;
      const r2 = t2.type;
      if (r2 === "dragstart" && e2.isDragging || r2 !== "dragstart" && !e2.isDragging)
        return;
      const s2 = a(t2);
      if (ie(s2)) return;
      const { x: o, y: c2 } = s2, n = t2.target;
      if (!n.offsetParent) return;
      const a$12 = { top: 0, left: 0 };
      switch (r2) {
        case "dragstart": {
          V$1 = h2, q = v2;
          const w = n.offsetParent.getBoundingClientRect(), R2 = n.getBoundingClientRect(), C2 = R2.left / e2.transformScale, D2 = w.left / e2.transformScale, P2 = R2.right / e2.transformScale, Y2 = w.right / e2.transformScale, L2 = R2.top / e2.transformScale, O2 = w.top / e2.transformScale;
          m.value ? a$12.left = (P2 - Y2) * -1 : a$12.left = C2 - D2, a$12.top = L2 - O2, e2.dragging = a$12, e2.isDragging = true;
          break;
        }
        case "dragmove": {
          const w = i($2, G$1, o, c2);
          if (m.value ? a$12.left = e2.dragging.left - w.deltaX / e2.transformScale : a$12.left = e2.dragging.left + w.deltaX / e2.transformScale, a$12.top = e2.dragging.top + w.deltaY / e2.transformScale, e2.bounded) {
            const R2 = n.offsetParent.clientHeight - ce(i$1.h, e2.rowHeight, e2.margin[1]);
            a$12.top = fe2(a$12.top, 0, R2);
            const C2 = I(), D2 = e2.containerWidth - ce(i$1.w, C2, e2.margin[0]);
            a$12.left = fe2(a$12.left, 0, D2);
          }
          e2.dragging = a$12;
          break;
        }
        case "dragend": {
          const w = n.offsetParent.getBoundingClientRect(), R2 = n.getBoundingClientRect(), C2 = R2.left / e2.transformScale, D2 = w.left / e2.transformScale, P2 = R2.right / e2.transformScale, Y2 = w.right / e2.transformScale, L2 = R2.top / e2.transformScale, O2 = w.top / e2.transformScale;
          m.value ? a$12.left = (P2 - Y2) * -1 : a$12.left = C2 - D2, a$12.top = L2 - O2, e2.dragging = { top: -1, left: -1 }, e2.isDragging = false;
          break;
        }
      }
      let u;
      m.value, u = A2(a$12.top, a$12.left), $2 = o, G$1 = c2, (h2 !== u.x || v2 !== u.y) && M("move", i$1.i, u.x, u.y), t2.type === "dragend" && (V$1 !== h2 || q !== v2) && M("moved", i$1.i, u.x, u.y), g2.emit("dragEvent", t2.type, i$1.i, u.x, u.y, y2, p);
    }
    function B$1(t2, r2, s2, o) {
      const c2 = I();
      let n;
      return m.value ? n = {
        right: Math.round(c2 * t2 + (t2 + 1) * e2.margin[0]),
        top: Math.round(e2.rowHeight * r2 + (r2 + 1) * e2.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s2 === 1 / 0 ? s2 : Math.round(c2 * s2 + Math.max(0, s2 - 1) * e2.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e2.rowHeight * o + Math.max(0, o - 1) * e2.margin[1])
      } : n = {
        left: Math.round(c2 * t2 + (t2 + 1) * e2.margin[0]),
        top: Math.round(e2.rowHeight * r2 + (r2 + 1) * e2.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: s2 === 1 / 0 ? s2 : Math.round(c2 * s2 + Math.max(0, s2 - 1) * e2.margin[0]),
        height: o === 1 / 0 ? o : Math.round(e2.rowHeight * o + Math.max(0, o - 1) * e2.margin[1])
      }, n;
    }
    function A2(t2, r2) {
      const s2 = I();
      let o = Math.round((r2 - e2.margin[0]) / (s2 + e2.margin[0])), c2 = Math.round((t2 - e2.margin[1]) / (e2.rowHeight + e2.margin[1]));
      return o = Math.max(Math.min(o, e2.cols - p), 0), c2 = Math.max(Math.min(c2, e2.maxRows - y2), 0), { x: o, y: c2 };
    }
    function I() {
      return (e2.containerWidth - e2.margin[0] * (e2.cols + 1)) / e2.cols;
    }
    function ce(t2, r2, s2) {
      return Number.isFinite(t2) ? Math.round(r2 * t2 + Math.max(0, t2 - 1) * s2) : t2;
    }
    function fe2(t2, r2, s2) {
      return Math.max(Math.min(t2, s2), r2);
    }
    function Ne2(t2, r2, s2 = false) {
      const o = I();
      let c2 = Math.round((r2 + e2.margin[0]) / (o + e2.margin[0])), n = 0;
      return s2 ? n = Math.ceil((t2 + e2.margin[1]) / (e2.rowHeight + e2.margin[1])) : n = Math.round((t2 + e2.margin[1]) / (e2.rowHeight + e2.margin[1])), c2 = Math.max(Math.min(c2, e2.cols - h2), 0), n = Math.max(Math.min(n, e2.maxRows - v2), 0), { w: c2, h: n };
    }
    function Te(t2, r2) {
      e2.containerWidth = t2;
    }
    function de() {
      H();
    }
    function me() {
      !d2.value && W2.value && (d2.value = He(W2.value), e2.useStyleCursor || d2.value.styleCursor(false));
    }
    const Ie = eo(ge2);
    function ue() {
      if (me(), !!d2.value)
        if (e2.draggable && !i$1.static) {
          const t2 = {
            ignoreFrom: i$1.dragIgnoreFrom,
            allowFrom: i$1.dragAllowFrom,
            ...i$1.dragOption
          };
          d2.value.draggable(t2), X2 || (X2 = true, d2.value.on("dragstart dragmove dragend", (r2) => {
            r2.type === "dragmove" ? Ie(r2) : ge2(r2);
          }));
        } else
          d2.value.draggable({ enabled: false });
    }
    const ke2 = eo(le);
    function S() {
      if (me(), !!d2.value)
        if (e2.resizable && !i$1.static) {
          const t2 = B$1(0, 0, i$1.maxW, i$1.maxH), r2 = B$1(0, 0, i$1.minW, i$1.minH), s2 = {
            edges: {
              left: m.value ? `.${T$1.value[0]}` : false,
              right: m.value ? false : `.${T$1.value[0]}`,
              bottom: `.${T$1.value[0]}`,
              top: false
            },
            ignoreFrom: i$1.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: r2.height * e2.transformScale,
                width: r2.width * e2.transformScale
              },
              max: {
                height: t2.height * e2.transformScale,
                width: t2.width * e2.transformScale
              }
            },
            ...i$1.resizeOption
          };
          i$1.preserveAspectRatio && (s2.modifiers = [He.modifiers.aspectRatio({ ratio: "preserve" })]), d2.value.resizable(s2), _2 || (_2 = true, d2.value.on("resizestart resizemove resizeend", (o) => {
            o.type === "resizemove" ? ke2(o) : le(o);
          }));
        } else
          d2.value.resizable({ enabled: false });
    }
    return (t2, r2) => (openBlock(), createElementBlock("section", {
      ref_key: "wrapper",
      ref: W2,
      class: normalizeClass(De2.value),
      style: normalizeStyle(e2.style)
    }, [
      renderSlot(t2.$slots, "default"),
      se.value ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(T$1.value)
      }, null, 2)) : createCommentVNode("", true)
    ], 6));
  }
});
const D = typeof window < "u";
var pt;
D && ((pt = window == null ? void 0 : window.navigator) != null && pt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Be(e2) {
  return e2 != null;
}
function P() {
}
const xn = Object.freeze({
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
Object.freeze(new Set(Object.keys(xn)));
const Tn = D && ("ontouchstart" in window || On() > 0), Sn = Tn ? "pointerdown" : "click";
function On() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function zn(e2, t2, n = window.Event) {
  const { type: r2, bubbles: o = false, cancelable: i2 = false, ...s2 } = t2;
  if (!Be(r2) || r2 === "") return false;
  let c2;
  return Be(n) ? c2 = new n(r2, { bubbles: o, cancelable: i2 }) : (c2 = document.createEvent("HTMLEvents"), c2.initEvent(r2, o, i2)), Object.assign(c2, s2), e2.dispatchEvent(c2);
}
const qt = "clickoutside", Ue = /* @__PURE__ */ new Set();
D && document.addEventListener(
  Sn,
  (e2) => {
    const t2 = e2.target, n = e2.composedPath && e2.composedPath();
    Ue.forEach((r2) => {
      r2 !== t2 && (n ? !n.includes(r2) : !r2.contains(t2)) && (!r2.__transferElement || r2.__transferElement !== t2 && !r2.__transferElement.contains(t2)) && zn(r2, { type: qt });
    });
  },
  true
);
const Ln = [
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
let ae;
if (D) {
  for (const e2 of Ln)
    if (e2[1] in document) {
      ae = e2;
      break;
    }
}
({
  full: computed(() => false)
});
const Xt = /* @__PURE__ */ new Set(), Je = /* @__PURE__ */ new WeakMap();
if (D && ae) {
  const e2 = ae[2], t2 = ae[4];
  document.addEventListener(
    t2,
    () => {
      if (Xt.forEach((n) => {
        n.value = false;
      }), document[e2]) {
        const n = Je.get(document[e2]);
        n && (n.value = true);
      }
    },
    false
  );
}
const Z = /* @__PURE__ */ new Map();
Z.set("x", 0);
Z.set("y", 0);
var re = [], Or = function() {
  return re.some(function(e2) {
    return e2.activeTargets.length > 0;
  });
}, zr = function() {
  return re.some(function(e2) {
    return e2.skippedTargets.length > 0;
  });
}, Ot = "ResizeObserver loop completed with undelivered notifications.", kr = function() {
  var e2;
  typeof ErrorEvent == "function" ? e2 = new ErrorEvent("error", {
    message: Ot
  }) : (e2 = document.createEvent("Event"), e2.initEvent("error", false, false), e2.message = Ot), window.dispatchEvent(e2);
}, we;
(function(e2) {
  e2.BORDER_BOX = "border-box", e2.CONTENT_BOX = "content-box", e2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(we || (we = {}));
var oe = function(e2) {
  return Object.freeze(e2);
}, Ar = /* @__PURE__ */ (function() {
  function e2(t2, n) {
    this.inlineSize = t2, this.blockSize = n, oe(this);
  }
  return e2;
})(), on = (function() {
  function e2(t2, n, r2, o) {
    return this.x = t2, this.y = n, this.width = r2, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, oe(this);
  }
  return e2.prototype.toJSON = function() {
    var t2 = this, n = t2.x, r2 = t2.y, o = t2.top, i2 = t2.right, s2 = t2.bottom, c2 = t2.left, a2 = t2.width, l = t2.height;
    return { x: n, y: r2, top: o, right: i2, bottom: s2, left: c2, width: a2, height: l };
  }, e2.fromRect = function(t2) {
    return new e2(t2.x, t2.y, t2.width, t2.height);
  }, e2;
})(), dt = function(e2) {
  return e2 instanceof SVGElement && "getBBox" in e2;
}, sn = function(e2) {
  if (dt(e2)) {
    var t2 = e2.getBBox(), n = t2.width, r2 = t2.height;
    return !n && !r2;
  }
  var o = e2, i2 = o.offsetWidth, s2 = o.offsetHeight;
  return !(i2 || s2 || e2.getClientRects().length);
}, zt = function(e2) {
  var t2;
  if (e2 instanceof Element)
    return true;
  var n = (t2 = e2 == null ? void 0 : e2.ownerDocument) === null || t2 === void 0 ? void 0 : t2.defaultView;
  return !!(n && e2 instanceof n.Element);
}, Cr = function(e2) {
  switch (e2.tagName) {
    case "INPUT":
      if (e2.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
}, ge = typeof window < "u" ? window : {}, ke = /* @__PURE__ */ new WeakMap(), kt = /auto|scroll/, Mr = /^tb|vertical/, Lr = /msie|trident/i.test(ge.navigator && ge.navigator.userAgent), X = function(e2) {
  return parseFloat(e2 || "0");
}, fe = function(e2, t2, n) {
  return e2 === void 0 && (e2 = 0), t2 === void 0 && (t2 = 0), n === void 0 && (n = false), new Ar((n ? t2 : e2) || 0, (n ? e2 : t2) || 0);
}, At = oe({
  devicePixelContentBoxSize: fe(),
  borderBoxSize: fe(),
  contentBoxSize: fe(),
  contentRect: new on(0, 0, 0, 0)
}), cn = function(e2, t2) {
  if (t2 === void 0 && (t2 = false), ke.has(e2) && !t2)
    return ke.get(e2);
  if (sn(e2))
    return ke.set(e2, At), At;
  var n = getComputedStyle(e2), r2 = dt(e2) && e2.ownerSVGElement && e2.getBBox(), o = !Lr && n.boxSizing === "border-box", i2 = Mr.test(n.writingMode || ""), s2 = !r2 && kt.test(n.overflowY || ""), c2 = !r2 && kt.test(n.overflowX || ""), a2 = r2 ? 0 : X(n.paddingTop), l = r2 ? 0 : X(n.paddingRight), f = r2 ? 0 : X(n.paddingBottom), d2 = r2 ? 0 : X(n.paddingLeft), v2 = r2 ? 0 : X(n.borderTopWidth), m = r2 ? 0 : X(n.borderRightWidth), b2 = r2 ? 0 : X(n.borderBottomWidth), g2 = r2 ? 0 : X(n.borderLeftWidth), p = d2 + l, h2 = a2 + f, u = g2 + m, y2 = v2 + b2, O2 = c2 ? e2.offsetHeight - y2 - e2.clientHeight : 0, T2 = s2 ? e2.offsetWidth - u - e2.clientWidth : 0, S = o ? p + u : 0, C2 = o ? h2 + y2 : 0, k2 = r2 ? r2.width : X(n.width) - S - T2, M = r2 ? r2.height : X(n.height) - C2 - O2, L2 = k2 + p + T2 + u, $2 = M + h2 + O2 + y2, _2 = oe({
    devicePixelContentBoxSize: fe(Math.round(k2 * devicePixelRatio), Math.round(M * devicePixelRatio), i2),
    borderBoxSize: fe(L2, $2, i2),
    contentBoxSize: fe(k2, M, i2),
    contentRect: new on(d2, a2, k2, M)
  });
  return ke.set(e2, _2), _2;
}, an = function(e2, t2, n) {
  var r2 = cn(e2, n), o = r2.borderBoxSize, i2 = r2.contentBoxSize, s2 = r2.devicePixelContentBoxSize;
  switch (t2) {
    case we.DEVICE_PIXEL_CONTENT_BOX:
      return s2;
    case we.BORDER_BOX:
      return o;
    default:
      return i2;
  }
}, Br = /* @__PURE__ */ (function() {
  function e2(t2) {
    var n = cn(t2);
    this.target = t2, this.contentRect = n.contentRect, this.borderBoxSize = oe([n.borderBoxSize]), this.contentBoxSize = oe([n.contentBoxSize]), this.devicePixelContentBoxSize = oe([n.devicePixelContentBoxSize]);
  }
  return e2;
})(), ln = function(e2) {
  if (sn(e2))
    return 1 / 0;
  for (var t2 = 0, n = e2.parentNode; n; )
    t2 += 1, n = n.parentNode;
  return t2;
}, Pr = function() {
  var e2 = 1 / 0, t2 = [];
  re.forEach(function(s2) {
    if (s2.activeTargets.length !== 0) {
      var c2 = [];
      s2.activeTargets.forEach(function(l) {
        var f = new Br(l.target), d2 = ln(l.target);
        c2.push(f), l.lastReportedSize = an(l.target, l.observedBox), d2 < e2 && (e2 = d2);
      }), t2.push(function() {
        s2.callback.call(s2.observer, c2, s2.observer);
      }), s2.activeTargets.splice(0, s2.activeTargets.length);
    }
  });
  for (var n = 0, r2 = t2; n < r2.length; n++) {
    var o = r2[n];
    o();
  }
  return e2;
}, Ct = function(e2) {
  re.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (ln(o.target) > e2 ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, Fr = function() {
  var e2 = 0;
  for (Ct(e2); Or(); )
    e2 = Pr(), Ct(e2);
  return zr() && kr(), e2 > 0;
}, je, fn = [], Dr = function() {
  return fn.splice(0).forEach(function(e2) {
    return e2();
  });
}, _r = function(e2) {
  if (!je) {
    var t2 = 0, n = document.createTextNode(""), r2 = { characterData: true };
    new MutationObserver(function() {
      return Dr();
    }).observe(n, r2), je = function() {
      n.textContent = "".concat(t2 ? t2-- : t2++);
    };
  }
  fn.push(e2), je();
}, Nr = function(e2) {
  _r(function() {
    requestAnimationFrame(e2);
  });
}, Me = 0, Wr = function() {
  return !!Me;
}, Ir = 250, Hr = { attributes: true, characterData: true, childList: true, subtree: true }, Mt = [
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
], Lt = function(e2) {
  return e2 === void 0 && (e2 = 0), Date.now() + e2;
}, Ye = false, $r = (function() {
  function e2() {
    var t2 = this;
    this.stopped = true, this.listener = function() {
      return t2.schedule();
    };
  }
  return e2.prototype.run = function(t2) {
    var n = this;
    if (t2 === void 0 && (t2 = Ir), !Ye) {
      Ye = true;
      var r2 = Lt(t2);
      Nr(function() {
        var o = false;
        try {
          o = Fr();
        } finally {
          if (Ye = false, t2 = r2 - Lt(), !Wr())
            return;
          o ? n.run(1e3) : t2 > 0 ? n.run(t2) : n.start();
        }
      });
    }
  }, e2.prototype.schedule = function() {
    this.stop(), this.run();
  }, e2.prototype.observe = function() {
    var t2 = this, n = function() {
      return t2.observer && t2.observer.observe(document.body, Hr);
    };
    document.body ? n() : ge.addEventListener("DOMContentLoaded", n);
  }, e2.prototype.start = function() {
    var t2 = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), Mt.forEach(function(n) {
      return ge.addEventListener(n, t2.listener, true);
    }));
  }, e2.prototype.stop = function() {
    var t2 = this;
    this.stopped || (this.observer && this.observer.disconnect(), Mt.forEach(function(n) {
      return ge.removeEventListener(n, t2.listener, true);
    }), this.stopped = true);
  }, e2;
})(), tt = new $r(), Bt = function(e2) {
  !Me && e2 > 0 && tt.start(), Me += e2, !Me && tt.stop();
}, qr = function(e2) {
  return !dt(e2) && !Cr(e2) && getComputedStyle(e2).display === "inline";
}, Vr = (function() {
  function e2(t2, n) {
    this.target = t2, this.observedBox = n || we.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e2.prototype.isActive = function() {
    var t2 = an(this.target, this.observedBox, true);
    return qr(this.target) && (this.lastReportedSize = t2), this.lastReportedSize.inlineSize !== t2.inlineSize || this.lastReportedSize.blockSize !== t2.blockSize;
  }, e2;
})(), Xr = /* @__PURE__ */ (function() {
  function e2(t2, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t2, this.callback = n;
  }
  return e2;
})(), Ae = /* @__PURE__ */ new WeakMap(), Pt = function(e2, t2) {
  for (var n = 0; n < e2.length; n += 1)
    if (e2[n].target === t2)
      return n;
  return -1;
}, Ce = (function() {
  function e2() {
  }
  return e2.connect = function(t2, n) {
    var r2 = new Xr(t2, n);
    Ae.set(t2, r2);
  }, e2.observe = function(t2, n, r2) {
    var o = Ae.get(t2), i2 = o.observationTargets.length === 0;
    Pt(o.observationTargets, n) < 0 && (i2 && re.push(o), o.observationTargets.push(new Vr(n, r2 && r2.box)), Bt(1), tt.schedule());
  }, e2.unobserve = function(t2, n) {
    var r2 = Ae.get(t2), o = Pt(r2.observationTargets, n), i2 = r2.observationTargets.length === 1;
    o >= 0 && (i2 && re.splice(re.indexOf(r2), 1), r2.observationTargets.splice(o, 1), Bt(-1));
  }, e2.disconnect = function(t2) {
    var n = this, r2 = Ae.get(t2);
    r2.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t2, o.target);
    }), r2.activeTargets.splice(0, r2.activeTargets.length);
  }, e2;
})(), Ft = (function() {
  function e2(t2) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t2 != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ce.connect(this, t2);
  }
  return e2.prototype.observe = function(t2, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!zt(t2))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ce.observe(this, t2, n);
  }, e2.prototype.unobserve = function(t2) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!zt(t2))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ce.unobserve(this, t2);
  }, e2.prototype.disconnect = function() {
    Ce.disconnect(this);
  }, e2.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e2;
})();
const Ne = /* @__PURE__ */ new WeakMap();
function jr(e2) {
  var t2;
  for (let n = 0, r2 = e2.length; n < r2; ++n) {
    const o = e2[n], i2 = Ne.get(o.target);
    if (typeof i2 == "function") {
      const { inlineSize: s2, blockSize: c2 } = ((t2 = o.borderBoxSize) == null ? void 0 : t2[0]) ?? {}, { offsetWidth: a2, offsetHeight: l } = o.target;
      i2(
        Object.assign(o, {
          offsetWidth: a2,
          offsetHeight: l,
          width: s2 ?? a2,
          height: c2 ?? l
        })
      );
    }
  }
}
const un = new (D && window.ResizeObserver || Ft)(
  jr
);
function xe(e2, t2) {
  Ne.set(e2, t2), un.observe(e2);
}
function nt(e2) {
  Ne.has(e2) && (un.unobserve(e2), Ne.delete(e2));
}
function wo(e2 = {}) {
  let t2 = P;
  const n = watch(
    () => unref(e2.target),
    (o) => {
      t2(), !(!o || typeof e2.onResize != "function") && (xe(o, e2.onResize), t2 = () => {
        nt(o), t2 = P;
      });
    },
    { immediate: true }
  ), r2 = () => {
    n(), t2();
  };
  return getCurrentScope() && onScopeDispose(r2), {
    /**
     * @deprecated Will be removed in next major version, please directly use `observeResize` from imports.
     */
    observeResize: xe,
    /**
     * @deprecated Will be removed in next major version, please directly use `unobserveResize` from imports.
     */
    unobserveResize: nt,
    unobserve: r2
  };
}
const dn = ref(false);
computed(() => dn.value);
const Dt = "__theme_style__", Le = "__theme_observer__";
const We = reactive(/* @__PURE__ */ new Map()), rt = /* @__PURE__ */ new Map();
watch(We, () => {
  if (!D) return;
  rt.clear();
  const e2 = document.head.querySelector(`#${Dt}`);
  e2 && document.head.removeChild(e2);
  const t2 = document.createElement("style");
  let n = `.${Le} { width: 1px }`, r2 = 1;
  for (const [o, [i2, s2]] of We.entries())
    n += ` html.${i2} .${Le}, .${s2} .${Le} { width: ${++r2}px }`, rt.set(r2, o);
  t2.textContent = n, t2.id = Dt, document.head.appendChild(t2);
});
const De = /* @__PURE__ */ defineComponent({
  __name: "grid-layout",
  props: {
    autoSize: { type: Boolean, default: true },
    colNum: { default: 12 },
    rowHeight: { default: 150 },
    maxRows: { default: 1 / 0 },
    margin: { default: () => [10, 10] },
    isDraggable: { type: Boolean, default: true },
    isResizable: { type: Boolean, default: true },
    isMirrored: { type: Boolean, default: false },
    isBounded: { type: Boolean, default: false },
    useCssTransforms: { type: Boolean, default: true },
    verticalCompact: { type: Boolean, default: true },
    restoreOnDrag: { type: Boolean, default: false },
    layout: {},
    responsive: { type: Boolean, default: false },
    responsiveLayouts: { default: () => ({}) },
    transformScale: { default: 1 },
    breakpoints: { default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }) },
    cols: { default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }) },
    preventCollision: { type: Boolean, default: false },
    useStyleCursor: { type: Boolean, default: true }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(Y$1, { expose: N, emit: $$1 }) {
    const a2 = Y$1, u = $$1, t2 = reactive({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: false,
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
    }), k$1 = /* @__PURE__ */ new Map(), o = ref(a2.layout), g2 = ref(), { observeResize: A$1, unobserveResize: U } = wo(), r2 = Zr();
    r2.on("resizeEvent", q), r2.on("dragEvent", G2), onBeforeMount(() => {
      u("layout-before-mount", o.value);
    }), onMounted(() => {
      u("layout-mounted", o.value), nextTick(() => {
        k(o.value), t2.originalLayout = o.value, nextTick(() => {
          D2(), g2.value && A$1(g2.value, no(C$1, 16)), $(o.value, a2.verticalCompact), u("layout-updated", o.value), y$12(), C$1();
        });
      });
    }), onBeforeUnmount(() => {
      r2.clearAll(), g2.value && U(g2.value);
    });
    function q(e2, n, l, f, d2, c2) {
      S(e2, n, l, f, d2, c2);
    }
    function G2(e2, n, l, f, d2, c2) {
      E2(e2, n, l, f, d2, c2);
    }
    watch(
      () => t2.width,
      (e2, n) => {
        nextTick(() => {
          r2.emit("updateWidth", e2), n === -1 && nextTick(() => {
            u("layout-ready", o.value);
          }), y$12();
        });
      }
    ), watch(
      () => [a2.layout, a2.layout.length],
      () => {
        o.value = a2.layout, R2();
      }
    ), watch(
      () => a2.colNum,
      (e2) => {
        r2.emit("setColNum", e2);
      }
    ), watch(
      () => a2.rowHeight,
      (e2) => {
        r2.emit("setRowHeight", e2);
      }
    ), watch(
      () => a2.isDraggable,
      (e2) => {
        r2.emit("setDraggable", e2);
      }
    ), watch(
      () => a2.isResizable,
      (e2) => {
        r2.emit("setResizable", e2);
      }
    ), watch(
      () => a2.isBounded,
      (e2) => {
        r2.emit("setBounded", e2);
      }
    ), watch(
      () => a2.transformScale,
      (e2) => {
        r2.emit("setTransformScale", e2);
      }
    ), watch(
      () => a2.responsive,
      (e2) => {
        e2 || (u("update:layout", t2.originalLayout), r2.emit("setColNum", a2.colNum)), C$1();
      }
    ), watch(
      () => a2.maxRows,
      (e2) => {
        r2.emit("setMaxRows", e2);
      }
    ), watch([() => a2.margin, () => a2.margin[1]], y$12), provide(
      T,
      reactive({
        ...toRefs(a2),
        ...toRefs(t2),
        increaseItem: K2,
        decreaseItem: j
      })
    ), provide(v$1, r2), N({ state: t2, getItem: P2, resizeEvent: S, dragEvent: E2, layoutUpdate: R2 });
    function K2(e2) {
      k$1.set(e2.i, e2);
    }
    function j(e2) {
      k$1.delete(e2.i);
    }
    function P2(e2) {
      return k$1.get(e2);
    }
    function R2() {
      if (!ie(o.value) && !ie(t2.originalLayout)) {
        if (o.value.length !== t2.originalLayout.length) {
          const e2 = J(o.value, t2.originalLayout);
          if (e2.length > 0)
            if (o.value.length > t2.originalLayout.length)
              t2.originalLayout = t2.originalLayout.concat(e2);
            else {
              const n = new Set(e2.map((l) => l.i));
              t2.originalLayout = t2.originalLayout.filter((l) => !n.has(l.i));
            }
          t2.lastLayoutLength = o.value.length, D2();
        }
        $(o.value, a2.verticalCompact), r2.emit("updateWidth", t2.width), y$12(), u("layout-updated", o.value);
      }
    }
    function y$12() {
      t2.mergedStyle = {
        height: V2()
      };
    }
    function C$1() {
      g2.value && (t2.width = g2.value.offsetWidth), r2.emit("resizeEvent");
    }
    function V2() {
      if (!a2.autoSize) return;
      const e2 = parseFloat(a2.margin[1]);
      return A(o.value) * (a2.rowHeight + e2) + e2 + "px";
    }
    let b2;
    function E2(e2, n, l, f, d2, c2) {
      let i2 = C(o.value, n);
      ie(i2) && (i2 = { h: 0, w: 0, x: 0, y: 0, i: "" }), e2 === "dragstart" && !a2.verticalCompact && (b2 = o.value.reduce(
        (v2, { i: x2, x: p, y: h2 }) => ({
          ...v2,
          [x2]: { x: p, y: h2 }
        }),
        {}
      )), e2 === "dragmove" || e2 === "dragstart" ? (t2.placeholder.i = n, t2.placeholder.x = i2.x, t2.placeholder.y = i2.y, t2.placeholder.w = c2, t2.placeholder.h = d2, nextTick(() => {
        t2.isDragging = true;
      }), r2.emit("updateWidth", t2.width)) : nextTick(() => {
        t2.isDragging = false;
      }), o.value = x(o.value, i2, l, f, true, a2.preventCollision), a2.restoreOnDrag ? (i2.static = true, $(o.value, a2.verticalCompact, b2), i2.static = false) : $(o.value, a2.verticalCompact), r2.emit("compact"), y$12(), e2 === "dragend" && (b2 = void 0, u("layout-updated", o.value));
    }
    function S(e2, n, l, f, d2, c2) {
      let i2 = C(o.value, n);
      ie(i2) && (i2 = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let v2;
      if (a2.preventCollision) {
        const x2 = L(o.value, { ...i2, w: c2, h: d2 }).filter(
          (p) => p.i !== i2.i
        );
        if (v2 = x2.length > 0, v2) {
          let p = 1 / 0, h2 = 1 / 0;
          x2.forEach((L2) => {
            L2.x > i2.x && (p = Math.min(p, L2.x)), L2.y > i2.y && (h2 = Math.min(h2, L2.y));
          }), Number.isFinite(p) && (i2.w = p - i2.x), Number.isFinite(h2) && (i2.h = h2 - i2.y);
        }
      }
      v2 || (i2.w = c2, i2.h = d2), e2 === "resizestart" || e2 === "resizemove" ? (t2.placeholder.i = n, t2.placeholder.x = l, t2.placeholder.y = f, t2.placeholder.w = i2.w, t2.placeholder.h = i2.h, nextTick(() => {
        t2.isDragging = true;
      }), r2.emit("updateWidth", t2.width)) : e2 && nextTick(() => {
        t2.isDragging = false;
      }), a2.responsive && X2(), $(o.value, a2.verticalCompact), r2.emit("compact"), y$12(), e2 === "resizeend" && u("layout-updated", o.value);
    }
    function X2() {
      const e2 = y(a2.breakpoints, t2.width);
      if (e2 === t2.lastBreakpoint)
        return;
      const n = B(e2, a2.cols);
      !ie(t2.lastBreakpoint) && !t2.layouts[t2.lastBreakpoint] && (t2.layouts[t2.lastBreakpoint] = Y(o.value));
      const l = v(
        t2.originalLayout,
        t2.layouts,
        a2.breakpoints,
        e2,
        t2.lastBreakpoint,
        n,
        a2.verticalCompact
      );
      t2.layouts[e2] = l, t2.lastBreakpoint !== e2 && u("breakpoint-changed", e2, l), o.value = l, u("update:layout", l), t2.lastBreakpoint = e2, r2.emit("setColNum", n);
    }
    function D2() {
      t2.layouts = Object.assign({}, a2.responsiveLayouts);
    }
    function J(e2, n) {
      const l = new Set(n.map((i2) => i2.i)), f = new Set(e2.map((i2) => i2.i)), d2 = e2.filter((i2) => !l.has(i2.i)), c2 = n.filter((i2) => !f.has(i2.i));
      return d2.concat(c2);
    }
    return (e2, n) => (openBlock(), createElementBlock("div", {
      ref_key: "wrapper",
      ref: g2,
      class: "vgl-layout",
      style: normalizeStyle(t2.mergedStyle)
    }, [
      e2.$slots.default ? renderSlot(e2.$slots, "default", { key: 0 }) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(o.value, (l) => (openBlock(), createBlock(st, mergeProps({
        key: l.i,
        ref_for: true
      }, l), {
        default: withCtx(() => [
          renderSlot(e2.$slots, "item", { item: l })
        ]),
        _: 2
      }, 1040))), 128)),
      withDirectives(createVNode(st, {
        class: "vgl-item--placeholder",
        x: t2.placeholder.x,
        y: t2.placeholder.y,
        w: t2.placeholder.w,
        h: t2.placeholder.h,
        i: t2.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [vShow, t2.isDragging]
      ])
    ], 4));
  }
});
(function() {
  try {
    if (typeof document < "u") {
      var e2 = document.createElement("style");
      e2.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')), document.head.appendChild(e2);
    }
  } catch (r2) {
    console.error("vite-plugin-css-injected-by-js", r2);
  }
})();
const DEFAULT_GRID_SETTINGS = {
  rowHeight: 30,
  cols: { lg: 18, md: 12, sm: 6, xs: 4, xxs: 2 }
};
const BREAKPOINTS = { lg: 1800, md: 1200, sm: 768, xs: 480, xxs: 0 };
function resolveGridSettings(layoutSettings) {
  const s2 = layoutSettings ?? {};
  return {
    rowHeight: s2.rowHeight ?? DEFAULT_GRID_SETTINGS.rowHeight,
    cols: { ...DEFAULT_GRID_SETTINGS.cols, ...s2.cols }
  };
}
const _hoisted_1$2 = {
  key: 1,
  class: "text"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "View",
  props: {
    pageId: {},
    layoutSettings: {}
  },
  setup(__props) {
    const props = __props;
    const layoutSettingsRef = ref(void 0);
    const gridSettings = computed(() => resolveGridSettings(layoutSettingsRef.value));
    const COLS = computed(() => gridSettings.value.cols);
    const ROW_HEIGHT = computed(() => gridSettings.value.rowHeight);
    const gridSettingsKey = computed(() => `${ROW_HEIGHT.value}-${Object.values(COLS.value).join("-")}`);
    const route = useRoute();
    const pageId = props.pageId ?? route.params.pageid ?? "";
    const widgets = ref([]);
    const storedLayout = ref([]);
    let widgetStore = null;
    let layoutStore = null;
    const eventBus = inject(identifiers.TINY_EMITTER);
    const pageRepo = inject(identifier) ?? null;
    function syncLayoutSettings() {
      if (pageRepo && pageId) {
        const page = pageRepo.getPage(pageId);
        layoutSettingsRef.value = page?.layoutSettings ? { ...page.layoutSettings } : void 0;
      }
    }
    onMounted(async () => {
      console.log("Grid View component mounted for page:", pageId);
      syncLayoutSettings();
      if (pageRepo && "subscribe" in pageRepo) {
        pageRepo.subscribe((ev) => {
          if (ev === "PAGE_UPDATE") syncLayoutSettings();
        });
      }
      await nextTick();
      const initStores = () => {
        try {
          widgetStore = useWidgetsStore(pageId);
          layoutStore = useLayoutStore(pageId);
          widgets.value = widgetStore.widgets;
          storedLayout.value = layoutStore.layout;
          console.log("Grid View stores initialized successfully, widgets:", widgets.value.length);
          return true;
        } catch (error) {
          console.error("Error initializing Grid View stores:", error);
          return false;
        }
      };
      if (!initStores()) {
        setTimeout(() => {
          if (!initStores()) {
            console.error("Failed to initialize Grid View stores after retry");
          } else {
            emitPageLoaded();
          }
        }, 100);
      } else {
        await nextTick();
        emitPageLoaded();
      }
    });
    const emitPageLoaded = () => {
      console.log("📄 Emitting system:pageLoaded for page:", pageId);
      eventBus.emit("system:pageLoaded", { pageId });
    };
    const gridLayout = ref();
    const wrapper = ref();
    function toNum(n, fallback) {
      const parsed = Number(n);
      return Number.isFinite(parsed) ? parsed : fallback;
    }
    function getMetrics() {
      const containerW = 1200;
      const cols = COLS.value.md;
      return { colW: containerW / cols, rowH: ROW_HEIGHT.value };
    }
    function toGrid(it2) {
      const { colW, rowH } = getMetrics();
      const xPx = toNum(it2.x, 0);
      const yPx = toNum(it2.y, 0);
      const wPx = toNum(it2.width, colW);
      const hPx = toNum(it2.height, rowH);
      return {
        i: String(it2.id ?? it2.i ?? ""),
        x: Math.round(xPx / colW),
        y: Math.round(yPx / rowH),
        w: Math.max(1, Math.round(wPx / colW)),
        h: Math.max(1, Math.round(hPx / rowH)),
        static: false
      };
    }
    let layout = computed(() => (storedLayout.value || []).map(toGrid));
    return (_ctx, _cache) => {
      const _component_VaScrollContainer = resolveComponent("VaScrollContainer");
      return openBlock(), createBlock(_component_VaScrollContainer, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "wrapper",
            ref: wrapper,
            class: "view_grid_layout"
          }, [
            (openBlock(), createBlock(unref(De), {
              ref_key: "gridLayout",
              ref: gridLayout,
              key: gridSettingsKey.value,
              layout: unref(layout),
              "onUpdate:layout": _cache[0] || (_cache[0] = ($event) => isRef(layout) ? layout.value = $event : layout = $event),
              "row-height": ROW_HEIGHT.value,
              responsive: true,
              "vertical-compact": false,
              breakpoints: unref(BREAKPOINTS),
              cols: COLS.value,
              "is-draggable": false,
              "is-resizable": false
            }, {
              item: withCtx(({ item }) => [
                widgets.value?.find((w) => w.uid === item.i) ? (openBlock(), createBlock(unref(WidgetWrapper), {
                  key: 0,
                  widget: widgets.value.find((w) => w.uid === item.i),
                  ref: `${item.i}_wrapper`,
                  editEnabled: false
                }, null, 8, ["widget"])) : (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(`${item.i}${item.static ? "- Static" : ""}`), 1))
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"]))
          ], 512)
        ]),
        _: 1
      });
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const View = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-298470a1"]]);
var lodash$1 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lodash = lodash$1.exports;
var hasRequiredLodash;
function requireLodash() {
  if (hasRequiredLodash) return lodash$1.exports;
  hasRequiredLodash = 1;
  (function(module, exports$1) {
    (function() {
      var undefined$1;
      var VERSION2 = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
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
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        // Latin Extended-A block.
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = exports$1 && !exports$1.nodeType && exports$1;
      var freeModule = freeExports && true && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = (function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e2) {
        }
      })();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined$1 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined$1) {
            result = result === undefined$1 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined$1 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = (function runInContext2(context) {
        context = context == null ? root : _2.defaults(root.Object(), context, _2.pick(root, contextProps));
        var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        })();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
        var defineProperty = (function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e2) {
          }
        })();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
        function lodash2(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ (function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined$1;
            return result2;
          };
        })();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined$1;
        }
        lodash2.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash2
          }
        };
        lodash2.prototype = baseLodash.prototype;
        lodash2.prototype.constructor = lodash2;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed2 = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed2;
                } else if (!computed2) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined$1 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined$1;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined$1 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined$1;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined$1 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined$1) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined$1) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined$1) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined$1 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined$1 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined$1, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed2) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed2, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed2 === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed2))) {
              var computed2 = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined$1 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined$1;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined$1 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed2) : includes2(result2, computed2, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed2) : includes2(arrays[othIndex], computed2, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined$1 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined$1 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
              if (newValue === undefined$1) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
          var isCommon = newValue === undefined$1;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined$1;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed2 = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed2, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
              if (newValue === undefined$1) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed2 = array[mid];
              if (computed2 !== null && !isSymbol(computed2) && (retHighest ? computed2 <= value : computed2 < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed2 = iteratee2(array[mid]), othIsDefined = computed2 !== undefined$1, othIsNull = computed2 === null, othIsReflexive = computed2 === computed2, othIsSymbol = isSymbol(computed2);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed2 <= value : computed2 < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed2, seen)) {
              var seen = computed2;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed2 = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed2 === computed2) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed2) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed2);
                }
                result2.push(value);
              } else if (!includes2(seen, computed2, comparator)) {
                if (seen !== result2) {
                  seen.push(computed2);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined$1;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined$1 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result2).set(new Uint8Array(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
            if (newValue === undefined$1) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined$1 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn2.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined$1,
                args,
                holders,
                undefined$1,
                undefined$1,
                arity - length
              );
            }
            var fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn2, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn2 = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn2 = Ctor || createCtor(fn2);
            }
            return fn2.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined$1 && other === undefined$1) {
              return defaultValue;
            }
            if (value !== undefined$1) {
              result2 = value;
            }
            if (other !== undefined$1) {
              if (result2 === undefined$1) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined$1 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn2 = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn2, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined$1;
            }
            start = toFinite(start);
            if (end === undefined$1) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= -4;
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined$1, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= -97;
            partials = holders = undefined$1;
          }
          ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined$1 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined$1;
          }
          var data = isBindKey ? undefined$1 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= -25;
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined$1, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined$1 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined$1) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined$1, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash2, "placeholder") ? lodash2 : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash2.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined$1;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined$1;
            var unmasked = true;
          } catch (e2) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash2[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined$1, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined$1 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e2) {
            }
            try {
              return func + "";
            } catch (e2) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined$1;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined$1;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined$1;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined$1;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined$1) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined$1;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined$1 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined$1 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined$1, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined$1;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined$1;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash2(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined$1
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined$1);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined$1) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined$1;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined$1
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined$1 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined$1 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined$1;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined$1 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined$1;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined$1 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined$1;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined$1;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined$1;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined$1) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined$1;
          }
          function flush() {
            return timerId === undefined$1 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined$1) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined$1) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined$1 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle2(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          var result2 = customizer ? customizer(value, other) : undefined$1;
          return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined$1;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined$1, customDefaultsMerge);
          return apply(mergeWith, undefined$1, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined$1 : baseGet(object, path);
          return result2 === undefined$1 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined$1;
          }
          while (++index < length) {
            var value = object == null ? undefined$1 : object[toKey(path[index])];
            if (value === undefined$1) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined$1;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined$1) {
            upper = lower;
            lower = undefined$1;
          }
          if (upper !== undefined$1) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined$1) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined$1;
          }
          if (floating === undefined$1) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined$1;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined$1;
            }
          }
          if (lower === undefined$1 && upper === undefined$1) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined$1) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined$1) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined$1;
          }
          limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash2.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined$1;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined$1)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined$1) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined$1 : pattern;
          if (pattern === undefined$1) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined$1, args);
          } catch (e2) {
            return isError(e2) ? e2 : new Error2(e2);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined$1 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash2.after = after;
        lodash2.ary = ary;
        lodash2.assign = assign;
        lodash2.assignIn = assignIn;
        lodash2.assignInWith = assignInWith;
        lodash2.assignWith = assignWith;
        lodash2.at = at;
        lodash2.before = before;
        lodash2.bind = bind;
        lodash2.bindAll = bindAll;
        lodash2.bindKey = bindKey;
        lodash2.castArray = castArray;
        lodash2.chain = chain;
        lodash2.chunk = chunk;
        lodash2.compact = compact;
        lodash2.concat = concat;
        lodash2.cond = cond;
        lodash2.conforms = conforms;
        lodash2.constant = constant;
        lodash2.countBy = countBy;
        lodash2.create = create;
        lodash2.curry = curry;
        lodash2.curryRight = curryRight;
        lodash2.debounce = debounce;
        lodash2.defaults = defaults;
        lodash2.defaultsDeep = defaultsDeep;
        lodash2.defer = defer;
        lodash2.delay = delay;
        lodash2.difference = difference;
        lodash2.differenceBy = differenceBy;
        lodash2.differenceWith = differenceWith;
        lodash2.drop = drop;
        lodash2.dropRight = dropRight;
        lodash2.dropRightWhile = dropRightWhile;
        lodash2.dropWhile = dropWhile;
        lodash2.fill = fill;
        lodash2.filter = filter;
        lodash2.flatMap = flatMap;
        lodash2.flatMapDeep = flatMapDeep;
        lodash2.flatMapDepth = flatMapDepth;
        lodash2.flatten = flatten;
        lodash2.flattenDeep = flattenDeep;
        lodash2.flattenDepth = flattenDepth;
        lodash2.flip = flip;
        lodash2.flow = flow;
        lodash2.flowRight = flowRight;
        lodash2.fromPairs = fromPairs;
        lodash2.functions = functions;
        lodash2.functionsIn = functionsIn;
        lodash2.groupBy = groupBy;
        lodash2.initial = initial;
        lodash2.intersection = intersection;
        lodash2.intersectionBy = intersectionBy;
        lodash2.intersectionWith = intersectionWith;
        lodash2.invert = invert;
        lodash2.invertBy = invertBy;
        lodash2.invokeMap = invokeMap;
        lodash2.iteratee = iteratee;
        lodash2.keyBy = keyBy;
        lodash2.keys = keys;
        lodash2.keysIn = keysIn;
        lodash2.map = map;
        lodash2.mapKeys = mapKeys;
        lodash2.mapValues = mapValues;
        lodash2.matches = matches;
        lodash2.matchesProperty = matchesProperty;
        lodash2.memoize = memoize;
        lodash2.merge = merge;
        lodash2.mergeWith = mergeWith;
        lodash2.method = method;
        lodash2.methodOf = methodOf;
        lodash2.mixin = mixin;
        lodash2.negate = negate;
        lodash2.nthArg = nthArg;
        lodash2.omit = omit;
        lodash2.omitBy = omitBy;
        lodash2.once = once;
        lodash2.orderBy = orderBy;
        lodash2.over = over;
        lodash2.overArgs = overArgs;
        lodash2.overEvery = overEvery;
        lodash2.overSome = overSome;
        lodash2.partial = partial;
        lodash2.partialRight = partialRight;
        lodash2.partition = partition;
        lodash2.pick = pick;
        lodash2.pickBy = pickBy;
        lodash2.property = property;
        lodash2.propertyOf = propertyOf;
        lodash2.pull = pull;
        lodash2.pullAll = pullAll;
        lodash2.pullAllBy = pullAllBy;
        lodash2.pullAllWith = pullAllWith;
        lodash2.pullAt = pullAt;
        lodash2.range = range;
        lodash2.rangeRight = rangeRight;
        lodash2.rearg = rearg;
        lodash2.reject = reject;
        lodash2.remove = remove;
        lodash2.rest = rest;
        lodash2.reverse = reverse;
        lodash2.sampleSize = sampleSize;
        lodash2.set = set;
        lodash2.setWith = setWith;
        lodash2.shuffle = shuffle;
        lodash2.slice = slice;
        lodash2.sortBy = sortBy;
        lodash2.sortedUniq = sortedUniq;
        lodash2.sortedUniqBy = sortedUniqBy;
        lodash2.split = split;
        lodash2.spread = spread;
        lodash2.tail = tail;
        lodash2.take = take;
        lodash2.takeRight = takeRight;
        lodash2.takeRightWhile = takeRightWhile;
        lodash2.takeWhile = takeWhile;
        lodash2.tap = tap;
        lodash2.throttle = throttle2;
        lodash2.thru = thru;
        lodash2.toArray = toArray;
        lodash2.toPairs = toPairs;
        lodash2.toPairsIn = toPairsIn;
        lodash2.toPath = toPath;
        lodash2.toPlainObject = toPlainObject;
        lodash2.transform = transform;
        lodash2.unary = unary;
        lodash2.union = union;
        lodash2.unionBy = unionBy;
        lodash2.unionWith = unionWith;
        lodash2.uniq = uniq;
        lodash2.uniqBy = uniqBy;
        lodash2.uniqWith = uniqWith;
        lodash2.unset = unset;
        lodash2.unzip = unzip;
        lodash2.unzipWith = unzipWith;
        lodash2.update = update;
        lodash2.updateWith = updateWith;
        lodash2.values = values;
        lodash2.valuesIn = valuesIn;
        lodash2.without = without;
        lodash2.words = words;
        lodash2.wrap = wrap;
        lodash2.xor = xor;
        lodash2.xorBy = xorBy;
        lodash2.xorWith = xorWith;
        lodash2.zip = zip;
        lodash2.zipObject = zipObject;
        lodash2.zipObjectDeep = zipObjectDeep;
        lodash2.zipWith = zipWith;
        lodash2.entries = toPairs;
        lodash2.entriesIn = toPairsIn;
        lodash2.extend = assignIn;
        lodash2.extendWith = assignInWith;
        mixin(lodash2, lodash2);
        lodash2.add = add;
        lodash2.attempt = attempt;
        lodash2.camelCase = camelCase;
        lodash2.capitalize = capitalize;
        lodash2.ceil = ceil;
        lodash2.clamp = clamp;
        lodash2.clone = clone;
        lodash2.cloneDeep = cloneDeep;
        lodash2.cloneDeepWith = cloneDeepWith;
        lodash2.cloneWith = cloneWith;
        lodash2.conformsTo = conformsTo;
        lodash2.deburr = deburr;
        lodash2.defaultTo = defaultTo;
        lodash2.divide = divide;
        lodash2.endsWith = endsWith;
        lodash2.eq = eq;
        lodash2.escape = escape;
        lodash2.escapeRegExp = escapeRegExp;
        lodash2.every = every;
        lodash2.find = find;
        lodash2.findIndex = findIndex;
        lodash2.findKey = findKey;
        lodash2.findLast = findLast;
        lodash2.findLastIndex = findLastIndex;
        lodash2.findLastKey = findLastKey;
        lodash2.floor = floor;
        lodash2.forEach = forEach;
        lodash2.forEachRight = forEachRight;
        lodash2.forIn = forIn;
        lodash2.forInRight = forInRight;
        lodash2.forOwn = forOwn;
        lodash2.forOwnRight = forOwnRight;
        lodash2.get = get;
        lodash2.gt = gt;
        lodash2.gte = gte;
        lodash2.has = has;
        lodash2.hasIn = hasIn;
        lodash2.head = head;
        lodash2.identity = identity;
        lodash2.includes = includes;
        lodash2.indexOf = indexOf;
        lodash2.inRange = inRange;
        lodash2.invoke = invoke;
        lodash2.isArguments = isArguments;
        lodash2.isArray = isArray;
        lodash2.isArrayBuffer = isArrayBuffer;
        lodash2.isArrayLike = isArrayLike;
        lodash2.isArrayLikeObject = isArrayLikeObject;
        lodash2.isBoolean = isBoolean;
        lodash2.isBuffer = isBuffer;
        lodash2.isDate = isDate;
        lodash2.isElement = isElement;
        lodash2.isEmpty = isEmpty;
        lodash2.isEqual = isEqual;
        lodash2.isEqualWith = isEqualWith;
        lodash2.isError = isError;
        lodash2.isFinite = isFinite;
        lodash2.isFunction = isFunction;
        lodash2.isInteger = isInteger;
        lodash2.isLength = isLength;
        lodash2.isMap = isMap;
        lodash2.isMatch = isMatch;
        lodash2.isMatchWith = isMatchWith;
        lodash2.isNaN = isNaN2;
        lodash2.isNative = isNative;
        lodash2.isNil = isNil;
        lodash2.isNull = isNull;
        lodash2.isNumber = isNumber;
        lodash2.isObject = isObject;
        lodash2.isObjectLike = isObjectLike;
        lodash2.isPlainObject = isPlainObject;
        lodash2.isRegExp = isRegExp;
        lodash2.isSafeInteger = isSafeInteger;
        lodash2.isSet = isSet;
        lodash2.isString = isString;
        lodash2.isSymbol = isSymbol;
        lodash2.isTypedArray = isTypedArray;
        lodash2.isUndefined = isUndefined;
        lodash2.isWeakMap = isWeakMap;
        lodash2.isWeakSet = isWeakSet;
        lodash2.join = join;
        lodash2.kebabCase = kebabCase;
        lodash2.last = last;
        lodash2.lastIndexOf = lastIndexOf;
        lodash2.lowerCase = lowerCase;
        lodash2.lowerFirst = lowerFirst;
        lodash2.lt = lt;
        lodash2.lte = lte;
        lodash2.max = max;
        lodash2.maxBy = maxBy;
        lodash2.mean = mean;
        lodash2.meanBy = meanBy;
        lodash2.min = min;
        lodash2.minBy = minBy;
        lodash2.stubArray = stubArray;
        lodash2.stubFalse = stubFalse;
        lodash2.stubObject = stubObject;
        lodash2.stubString = stubString;
        lodash2.stubTrue = stubTrue;
        lodash2.multiply = multiply;
        lodash2.nth = nth;
        lodash2.noConflict = noConflict;
        lodash2.noop = noop;
        lodash2.now = now;
        lodash2.pad = pad;
        lodash2.padEnd = padEnd;
        lodash2.padStart = padStart;
        lodash2.parseInt = parseInt2;
        lodash2.random = random;
        lodash2.reduce = reduce;
        lodash2.reduceRight = reduceRight;
        lodash2.repeat = repeat;
        lodash2.replace = replace;
        lodash2.result = result;
        lodash2.round = round;
        lodash2.runInContext = runInContext2;
        lodash2.sample = sample;
        lodash2.size = size;
        lodash2.snakeCase = snakeCase;
        lodash2.some = some;
        lodash2.sortedIndex = sortedIndex;
        lodash2.sortedIndexBy = sortedIndexBy;
        lodash2.sortedIndexOf = sortedIndexOf;
        lodash2.sortedLastIndex = sortedLastIndex;
        lodash2.sortedLastIndexBy = sortedLastIndexBy;
        lodash2.sortedLastIndexOf = sortedLastIndexOf;
        lodash2.startCase = startCase;
        lodash2.startsWith = startsWith;
        lodash2.subtract = subtract;
        lodash2.sum = sum;
        lodash2.sumBy = sumBy;
        lodash2.template = template;
        lodash2.times = times;
        lodash2.toFinite = toFinite;
        lodash2.toInteger = toInteger;
        lodash2.toLength = toLength;
        lodash2.toLower = toLower;
        lodash2.toNumber = toNumber;
        lodash2.toSafeInteger = toSafeInteger;
        lodash2.toString = toString;
        lodash2.toUpper = toUpper;
        lodash2.trim = trim;
        lodash2.trimEnd = trimEnd;
        lodash2.trimStart = trimStart;
        lodash2.truncate = truncate;
        lodash2.unescape = unescape;
        lodash2.uniqueId = uniqueId;
        lodash2.upperCase = upperCase;
        lodash2.upperFirst = upperFirst;
        lodash2.each = forEach;
        lodash2.eachRight = forEachRight;
        lodash2.first = head;
        mixin(lodash2, (function() {
          var source = {};
          baseForOwn(lodash2, function(func, methodName) {
            if (!hasOwnProperty.call(lodash2.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        })(), { "chain": false });
        lodash2.VERSION = VERSION2;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash2[methodName].placeholder = lodash2;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined$1 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined$1) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash2.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash2.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash2[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined$1
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash2.prototype.at = wrapperAt;
        lodash2.prototype.chain = wrapperChain;
        lodash2.prototype.commit = wrapperCommit;
        lodash2.prototype.next = wrapperNext;
        lodash2.prototype.plant = wrapperPlant;
        lodash2.prototype.reverse = wrapperReverse;
        lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
        lodash2.prototype.first = lodash2.prototype.head;
        if (symIterator) {
          lodash2.prototype[symIterator] = wrapperToIterator;
        }
        return lodash2;
      });
      var _2 = runInContext();
      if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(lodash);
  })(lodash$1, lodash$1.exports);
  return lodash$1.exports;
}
var lodashExports = requireLodash();
var isObject_1;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject_1;
  hasRequiredIsObject = 1;
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  isObject_1 = isObject;
  return isObject_1;
}
var _freeGlobal;
var hasRequired_freeGlobal;
function require_freeGlobal() {
  if (hasRequired_freeGlobal) return _freeGlobal;
  hasRequired_freeGlobal = 1;
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  _freeGlobal = freeGlobal;
  return _freeGlobal;
}
var _root;
var hasRequired_root;
function require_root() {
  if (hasRequired_root) return _root;
  hasRequired_root = 1;
  var freeGlobal = require_freeGlobal();
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  _root = root;
  return _root;
}
var now_1;
var hasRequiredNow;
function requireNow() {
  if (hasRequiredNow) return now_1;
  hasRequiredNow = 1;
  var root = require_root();
  var now = function() {
    return root.Date.now();
  };
  now_1 = now;
  return now_1;
}
var _trimmedEndIndex;
var hasRequired_trimmedEndIndex;
function require_trimmedEndIndex() {
  if (hasRequired_trimmedEndIndex) return _trimmedEndIndex;
  hasRequired_trimmedEndIndex = 1;
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  _trimmedEndIndex = trimmedEndIndex;
  return _trimmedEndIndex;
}
var _baseTrim;
var hasRequired_baseTrim;
function require_baseTrim() {
  if (hasRequired_baseTrim) return _baseTrim;
  hasRequired_baseTrim = 1;
  var trimmedEndIndex = require_trimmedEndIndex();
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
  }
  _baseTrim = baseTrim;
  return _baseTrim;
}
var _Symbol;
var hasRequired_Symbol;
function require_Symbol() {
  if (hasRequired_Symbol) return _Symbol;
  hasRequired_Symbol = 1;
  var root = require_root();
  var Symbol2 = root.Symbol;
  _Symbol = Symbol2;
  return _Symbol;
}
var _getRawTag;
var hasRequired_getRawTag;
function require_getRawTag() {
  if (hasRequired_getRawTag) return _getRawTag;
  hasRequired_getRawTag = 1;
  var Symbol2 = require_Symbol();
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e2) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  _getRawTag = getRawTag;
  return _getRawTag;
}
var _objectToString;
var hasRequired_objectToString;
function require_objectToString() {
  if (hasRequired_objectToString) return _objectToString;
  hasRequired_objectToString = 1;
  var objectProto = Object.prototype;
  var nativeObjectToString = objectProto.toString;
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  _objectToString = objectToString;
  return _objectToString;
}
var _baseGetTag;
var hasRequired_baseGetTag;
function require_baseGetTag() {
  if (hasRequired_baseGetTag) return _baseGetTag;
  hasRequired_baseGetTag = 1;
  var Symbol2 = require_Symbol(), getRawTag = require_getRawTag(), objectToString = require_objectToString();
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  _baseGetTag = baseGetTag;
  return _baseGetTag;
}
var isObjectLike_1;
var hasRequiredIsObjectLike;
function requireIsObjectLike() {
  if (hasRequiredIsObjectLike) return isObjectLike_1;
  hasRequiredIsObjectLike = 1;
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  isObjectLike_1 = isObjectLike;
  return isObjectLike_1;
}
var isSymbol_1;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol_1;
  hasRequiredIsSymbol = 1;
  var baseGetTag = require_baseGetTag(), isObjectLike = requireIsObjectLike();
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
  }
  isSymbol_1 = isSymbol;
  return isSymbol_1;
}
var toNumber_1;
var hasRequiredToNumber;
function requireToNumber() {
  if (hasRequiredToNumber) return toNumber_1;
  hasRequiredToNumber = 1;
  var baseTrim = require_baseTrim(), isObject = requireIsObject(), isSymbol = requireIsSymbol();
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  toNumber_1 = toNumber;
  return toNumber_1;
}
var debounce_1;
var hasRequiredDebounce;
function requireDebounce() {
  if (hasRequiredDebounce) return debounce_1;
  hasRequiredDebounce = 1;
  var isObject = requireIsObject(), now = requireNow(), toNumber = requireToNumber();
  var FUNC_ERROR_TEXT = "Expected a function";
  var nativeMax = Math.max, nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now());
    }
    function debounced() {
      var time = now(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  debounce_1 = debounce;
  return debounce_1;
}
var throttle_1;
var hasRequiredThrottle;
function requireThrottle() {
  if (hasRequiredThrottle) return throttle_1;
  hasRequiredThrottle = 1;
  var debounce = requireDebounce(), isObject = requireIsObject();
  var FUNC_ERROR_TEXT = "Expected a function";
  function throttle2(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    if (isObject(options)) {
      leading = "leading" in options ? !!options.leading : leading;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
      "leading": leading,
      "maxWait": wait,
      "trailing": trailing
    });
  }
  throttle_1 = throttle2;
  return throttle_1;
}
var throttleExports = requireThrottle();
const throttle = /* @__PURE__ */ getDefaultExportFromCjs(throttleExports);
const _hoisted_1$1 = ["onContextmenu"];
const _hoisted_2$1 = {
  key: 1,
  class: "text"
};
const dropId = "__drop__";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(__props, { emit: __emit }) {
    const layoutSettingsRef = ref(void 0);
    const gridSettings = computed(() => resolveGridSettings(layoutSettingsRef.value));
    const COLS = computed(() => gridSettings.value.cols);
    const ROW_HEIGHT = computed(() => gridSettings.value.rowHeight);
    const gridSettingsKey = computed(() => `${ROW_HEIGHT.value}-${Object.values(COLS.value).join("-")}`);
    const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 1200);
    const currentColCount = computed(() => getCurrentCols(windowWidth.value));
    const route = useRoute();
    const pageID = computed(() => route.params.pageid || "");
    const widgetStore = computed(() => useWidgetsStore(pageID.value));
    const layoutStore = computed(() => useLayoutStore(pageID.value));
    const widgets = computed(() => widgetStore.value.widgets);
    const storedLayout = computed(() => layoutStore.value.layout);
    const clipboardStore = useClipboardStore();
    const pastePosition = ref({ x: 0, y: 0 });
    const widgetContextMenu = ref({
      visible: false,
      x: 0,
      y: 0,
      widgetId: ""
    });
    const canvasContextMenu = ref({
      visible: false,
      x: 0,
      y: 0
    });
    const openWidgetContextMenu = (event, widgetId) => {
      widgetContextMenu.value = {
        visible: true,
        x: event.clientX,
        y: event.clientY,
        widgetId
      };
      canvasContextMenu.value.visible = false;
    };
    const closeAllContextMenus = () => {
      widgetContextMenu.value.visible = false;
      canvasContextMenu.value.visible = false;
    };
    const copyWidgetFromMenu = () => {
      copyWidget(widgetContextMenu.value.widgetId);
      closeAllContextMenus();
    };
    const pasteWidgetFromMenu = () => {
      pasteWidget();
      closeAllContextMenus();
    };
    const copyWidget = (widgetId) => {
      const widget = widgets.value.find((w) => w.uid === widgetId);
      const layoutItem = storedLayout.value.find((l) => l.id === widgetId);
      if (widget && layoutItem) {
        clipboardStore.copy(widget, layoutItem);
      }
    };
    const pasteWidget = () => {
      const clipboard = clipboardStore.paste();
      if (!clipboard) return;
      const newUid = "li_" + Math.random().toString(36).substring(7);
      const newWidget = lodashExports.cloneDeep(clipboard.widget);
      newWidget.uid = newUid;
      if (newWidget.config?.settings) {
        newWidget.config.settings.name = "widget_" + newUid;
      }
      const { colW, rowH } = getMetrics();
      const gridX = Math.round(pastePosition.value.x / colW);
      const gridY = Math.round(pastePosition.value.y / rowH);
      const newLayout = {
        i: newUid,
        x: gridX,
        y: gridY,
        w: Math.max(1, Math.round((clipboard.layout.width || 200) / colW)),
        h: Math.max(1, Math.round((clipboard.layout.height || 100) / rowH)),
        static: false
      };
      widgetStore.value.updateWidgets([...widgets.value, newWidget]);
      layoutModel.value = [...layoutModel.value, newLayout];
      persistLayout(layoutModel.value);
    };
    const gridLayout = ref();
    const wrapper = ref();
    const drag = ref(false);
    const lastPos = ref({ x: -1, y: -1 });
    const isDraggingPlaceholder = ref(false);
    const widgetsTmp = ref([]);
    const layoutModel = ref([]);
    const transient = ref([]);
    const gridLayoutModel = computed(() => [
      ...layoutModel.value,
      ...transient.value
    ]);
    const syncingFromStore = ref(false);
    function toNum(v2, fallback = 0) {
      if (typeof v2 === "number") return v2;
      const n = Number(v2);
      return Number.isFinite(n) ? n : fallback;
    }
    function getCurrentCols(width) {
      const cols = COLS.value;
      if (width >= BREAKPOINTS.lg) return cols.lg;
      if (width >= BREAKPOINTS.md) return cols.md;
      if (width >= BREAKPOINTS.sm) return cols.sm;
      if (width >= BREAKPOINTS.xs) return cols.xs;
      return cols.xxs;
    }
    function getMetrics() {
      const containerW = 1200;
      const cols = COLS.value.md;
      return { colW: containerW / cols, rowH: ROW_HEIGHT.value };
    }
    function toGrid(it2) {
      const { colW, rowH } = getMetrics();
      const xPx = toNum(it2.x, 0);
      const yPx = toNum(it2.y, 0);
      const wPx = toNum(it2.width, colW);
      const hPx = toNum(it2.height, rowH);
      const result = {
        i: String(it2.id ?? it2.i ?? ""),
        x: Math.round(xPx / colW),
        y: Math.round(yPx / rowH),
        w: Math.max(1, Math.round(wPx / colW)),
        h: Math.max(1, Math.round(hPx / rowH)),
        static: false
      };
      return result;
    }
    function toPixels(it2) {
      const { colW, rowH } = getMetrics();
      const result = {
        id: String(it2.i),
        x: toNum(it2.x, 0) * colW,
        y: toNum(it2.y, 0) * rowH,
        width: toNum(it2.w, 1) * colW,
        height: toNum(it2.h, 1) * rowH,
        z: 3e3
      };
      return result;
    }
    watch(storedLayout, (data) => {
      syncingFromStore.value = true;
      try {
        const arr = Array.isArray(data) ? data.map(toGrid) : [];
        if (!lodashExports.isEqual(layoutModel.value, arr)) {
          layoutModel.value = arr;
        }
      } finally {
        nextTick(() => syncingFromStore.value = false);
      }
    }, { immediate: true, deep: true });
    const onResize = throttle(() => {
      windowWidth.value = window.innerWidth;
      const data = storedLayout.value || [];
      const arr = Array.isArray(data) ? data.map(toGrid) : [];
      if (!lodashExports.isEqual(layoutModel.value, arr)) layoutModel.value = arr;
    }, 120);
    let pageSubId = null;
    const pageRepo = inject(identifier) ?? null;
    function syncLayoutSettings() {
      if (pageRepo && pageID.value) {
        const page = pageRepo.getPage(pageID.value);
        layoutSettingsRef.value = page?.layoutSettings ? { ...page.layoutSettings } : void 0;
      }
    }
    onMounted(() => {
      window.addEventListener("resize", onResize, { passive: true });
      syncLayoutSettings();
      if (pageRepo && "subscribe" in pageRepo) {
        pageSubId = pageRepo.subscribe((ev) => {
          if (ev === "PAGE_UPDATE") syncLayoutSettings();
        });
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResize);
      if (pageRepo && "unsubscribe" in pageRepo && pageSubId) {
        pageRepo.unsubscribe(pageSubId);
      }
    });
    function persistLayout(newLayout) {
      if (syncingFromStore.value) return;
      const src = (newLayout ?? gridLayoutModel.value).filter((it2) => it2.i !== dropId);
      const nextPixels = src.map(toPixels);
      const currPixels = storedLayout.value || [];
      const roundedNext = nextPixels.map((p) => ({
        ...p,
        x: Math.round(p.x * 100) / 100,
        y: Math.round(p.y * 100) / 100,
        width: Math.round(p.width * 100) / 100,
        height: Math.round(p.height * 100) / 100
      }));
      const roundedCurr = currPixels.map((p) => ({
        ...p,
        x: Math.round(p.x * 100) / 100,
        y: Math.round(p.y * 100) / 100,
        width: Math.round(p.width * 100) / 100,
        height: Math.round(p.height * 100) / 100
      }));
      if (!lodashExports.isEqual(roundedCurr, roundedNext)) {
        layoutStore.value.updateLayout(nextPixels);
      }
    }
    async function ensurePlaceholder() {
      if (!transient.value.find((it2) => it2.i === dropId)) {
        transient.value = [...transient.value, { x: 0, y: 0, w: 2, h: 2, i: dropId, static: false }];
        await nextTick();
      }
      await nextTick();
      return gridLayout.value?.getItem?.(dropId);
    }
    function removePlaceholder() {
      transient.value = transient.value.filter((it2) => it2.i !== dropId);
    }
    async function onOverlayStart() {
      drag.value = true;
      isDraggingPlaceholder.value = false;
      await ensurePlaceholder();
    }
    async function onDragMove(evt) {
      const e2 = evt;
      if (!e2 || !gridLayout.value) return;
      const gridEl = document.querySelector(".alayout");
      if (!gridEl) return;
      const rect = gridEl.getBoundingClientRect();
      if (!transient.value.find((it2) => it2.i === dropId)) {
        transient.value = [...transient.value, { x: 0, y: 0, w: 2, h: 2, i: dropId, static: false }];
        await nextTick();
      }
      await nextTick();
      const item = gridLayout.value?.getItem?.(dropId);
      if (!item) return;
      const left = e2.clientX - rect.left;
      const top = e2.clientY - rect.top;
      let pos = item.calcXY(top, left);
      const cols = gridLayout.value?.cols ?? 12;
      if (pos.x < 0 || pos.y < 0 || pos.x >= cols) pos = item.calcXY(left, top);
      lastPos.value = { x: toNum(pos.x, 0), y: toNum(pos.y, 0) };
      if (!isDraggingPlaceholder.value) {
        gridLayout.value.dragEvent("dragstart", dropId, lastPos.value.x, lastPos.value.y, 2, 2);
        isDraggingPlaceholder.value = true;
      } else {
        gridLayout.value.dragEvent("drag", dropId, lastPos.value.x, lastPos.value.y, 2, 2);
      }
    }
    function onOverlayEnd() {
      if (isDraggingPlaceholder.value && gridLayout.value) {
        gridLayout.value.dragEvent("dragend", dropId, lastPos.value.x, lastPos.value.y, 2, 2);
      }
      removePlaceholder();
      isDraggingPlaceholder.value = false;
      drag.value = false;
    }
    function onExternalDragAdd(e2) {
      const added = e2?.item?._underlying_vm_ || e2?.added?.element || e2?.item;
      const type = added?.type ?? "UnknownWidget";
      const datasourceId = added?.datasourceId ?? "default";
      if (isDraggingPlaceholder.value && gridLayout.value) {
        gridLayout.value.dragEvent("dragend", dropId, lastPos.value.x, lastPos.value.y, 2, 2);
      }
      removePlaceholder();
      isDraggingPlaceholder.value = false;
      drag.value = false;
      const finalId = `widget_${Math.random().toString(36).slice(2, 9)}`;
      const { x: x2, y: y2 } = lastPos.value;
      layoutModel.value = [...layoutModel.value, { i: finalId, x: x2, y: y2, w: 2, h: 2, static: false }];
      persistLayout(layoutModel.value);
      addWidget(finalId, type, datasourceId);
      lastPos.value = { x: -1, y: -1 };
    }
    function onDragEnter() {
      drag.value = true;
    }
    function onDrop() {
      onOverlayEnd();
    }
    function addWidget(uid, type, datasourceId) {
      const config = { datasourceId, settings: {} };
      const newWidget = { uid, type, config, wrapperConfig: lodashExports.cloneDeep(defaultConfig) };
      widgetStore.value.updateWidgets([...widgets.value, newWidget]);
    }
    function removeWidget(uid) {
      widgetStore.value.updateWidgets(widgets.value.filter((w) => w.uid !== uid));
      layoutModel.value = layoutModel.value.filter((it2) => it2.i !== uid);
      persistLayout(layoutModel.value);
    }
    const emit = __emit;
    const openWidgetSettings = (id) => {
      emit("openSettings", id);
    };
    return (_ctx, _cache) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_VaScrollContainer = resolveComponent("VaScrollContainer");
      return openBlock(), createBlock(_component_VaScrollContainer, {
        class: "max-h-screen ml-15",
        vertical: ""
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "wrapper",
            ref: wrapper,
            onDragenter: onDragEnter,
            onDrop: withModifiers(onDrop, ["prevent"]),
            onDrag: onDragMove,
            class: "alayout",
            onClick: closeAllContextMenus,
            style: normalizeStyle({ "--grid-row-height": ROW_HEIGHT.value + "px", "--grid-cols": currentColCount.value })
          }, [
            (openBlock(), createBlock(unref(De), {
              ref_key: "gridLayout",
              ref: gridLayout,
              key: gridSettingsKey.value,
              layout: gridLayoutModel.value,
              "row-height": ROW_HEIGHT.value,
              responsive: true,
              "vertical-compact": false,
              breakpoints: unref(BREAKPOINTS),
              cols: COLS.value,
              onLayoutUpdated: persistLayout
            }, {
              item: withCtx(({ item }) => [
                createElementVNode("div", {
                  class: "widget-item-wrapper",
                  onContextmenu: withModifiers(($event) => openWidgetContextMenu($event, String(item.i)), ["stop", "prevent"])
                }, [
                  widgets.value?.find((w) => w.uid === item.i) ? (openBlock(), createBlock(unref(WidgetWrapper), {
                    key: 0,
                    widget: widgets.value.find((w) => w.uid === item.i),
                    ref: `${item.i}_wrapper`,
                    onOpenSettings: openWidgetSettings,
                    editEnabled: "",
                    onRemoveWidget: () => removeWidget(item.i.toString())
                  }, null, 8, ["widget", "onRemoveWidget"])) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(`${item.i}${item.static ? "- Static" : ""}`), 1))
                ], 40, _hoisted_1$1)
              ]),
              _: 1
            }, 8, ["layout", "row-height", "breakpoints", "cols"])),
            widgetContextMenu.value.visible ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "widget-context-menu",
              style: normalizeStyle({ left: widgetContextMenu.value.x + "px", top: widgetContextMenu.value.y + "px" })
            }, [
              createVNode(_component_va_button, {
                onClick: copyWidgetFromMenu,
                size: "small"
              }, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode(" Copy ", -1)
                ])]),
                _: 1
              })
            ], 4)) : createCommentVNode("", true),
            withDirectives(createVNode(unref(Draggable), {
              list: widgetsTmp.value,
              group: { name: "widgets" },
              class: "invisible-dropzone",
              itemKey: "type",
              sort: false,
              onStart: onOverlayStart,
              onEnd: onOverlayEnd,
              onAdd: onExternalDragAdd
            }, {
              item: withCtx(({ element }) => [
                createElementVNode("div", null, toDisplayString(element.type), 1)
              ]),
              _: 1
            }, 8, ["list"]), [
              [vShow, drag.value]
            ]),
            canvasContextMenu.value.visible && unref(clipboardStore).hasClipboard ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "canvas-context-menu",
              style: normalizeStyle({ left: canvasContextMenu.value.x + "px", top: canvasContextMenu.value.y + "px" })
            }, [
              createVNode(_component_va_button, {
                onClick: pasteWidgetFromMenu,
                size: "small"
              }, {
                default: withCtx(() => [..._cache[1] || (_cache[1] = [
                  createTextVNode(" Paste ", -1)
                ])]),
                _: 1
              })
            ], 4)) : createCommentVNode("", true)
          ], 36)
        ]),
        _: 1
      });
    };
  }
});
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9f621b82"]]);
const _hoisted_1 = { class: "grid-settings" };
const _hoisted_2 = { class: "cols-grid" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GridSettingsPanel",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const breakpointKeys = ["lg", "md", "sm", "xs", "xxs"];
    const breakpointWidths = BREAKPOINTS;
    const settings = computed(() => {
      const s2 = model.value ?? {};
      return {
        rowHeight: s2.rowHeight ?? DEFAULT_GRID_SETTINGS.rowHeight,
        cols: { ...DEFAULT_GRID_SETTINGS.cols, ...s2.cols }
      };
    });
    function update(key, value) {
      model.value = { ...model.value, [key]: value };
    }
    function updateCol(bp, value) {
      const cols = { ...settings.value.cols, [bp]: value };
      model.value = { ...model.value, cols };
    }
    return (_ctx, _cache) => {
      const _component_va_input = resolveComponent("va-input");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createElementVNode("h4", { class: "grid-settings-title" }, "Grid Settings", -1)),
        createVNode(_component_va_input, {
          class: "field",
          label: "Row Height (px)",
          "model-value": settings.value.rowHeight,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => update("rowHeight", Number($event))),
          type: "number",
          min: 10,
          max: 200
        }, null, 8, ["model-value"]),
        _cache[2] || (_cache[2] = createElementVNode("h4", { class: "grid-settings-subtitle" }, "Columns per Breakpoint", -1)),
        createElementVNode("div", _hoisted_2, [
          (openBlock(), createElementBlock(Fragment, null, renderList(breakpointKeys, (bp) => {
            return createVNode(_component_va_input, {
              key: bp,
              label: `${bp} (≥${unref(breakpointWidths)[bp]}px)`,
              "model-value": settings.value.cols[bp],
              "onUpdate:modelValue": ($event) => updateCol(bp, Number($event)),
              type: "number",
              min: 1,
              max: 48,
              class: "col-input"
            }, null, 8, ["label", "model-value", "onUpdate:modelValue"]);
          }), 64))
        ])
      ]);
    };
  }
});
const GridSettingsPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2078e072"]]);
const LAYOUT_ID = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
function activate$1({ services }) {
  services.getRequired(LAYOUT_REPOSITORY).addLayout({
    id: LAYOUT_ID,
    name: "GridLayout",
    description: "responsive grid-based layout",
    component: View,
    editor: Edit,
    settings: GridSettingsPanel
  });
}
function deactivate$1({ services }) {
  services.getRequired(LAYOUT_REPOSITORY).removeLayout(LAYOUT_ID);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.layouts.grid";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.layouts.grid");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
