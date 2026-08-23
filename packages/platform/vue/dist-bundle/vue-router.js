import { inject as le, onUnmounted as Er, onDeactivated as mr, onActivated as gr, watch as on, defineComponent as sn, reactive as Or, computed as re, h as an, unref as Se, provide as st, ref as Tr, shallowRef as yr, getCurrentInstance as Rr, watchEffect as Sr, shallowReactive as vr, nextTick as Ir } from "vue";
import { c as ln } from "./index-BL070snA.js";
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
const ae = typeof document < "u";
function cn(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function un(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && cn(e.default);
}
const P = Object.assign;
function at(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = q(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ve = () => {
}, q = Array.isArray;
function Mt(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
let k = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const fn = Symbol("");
let Nr = /* @__PURE__ */ (function(e) {
  return e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated", e;
})({});
k.MATCHER_NOT_FOUND + "", k.NAVIGATION_GUARD_REDIRECT + "", k.NAVIGATION_ABORTED + "", k.NAVIGATION_CANCELLED + "", k.NAVIGATION_DUPLICATED + "";
function Ie(e, t) {
  return P(/* @__PURE__ */ new Error(), {
    type: e,
    [fn]: !0
  }, t);
}
function ne(e, t) {
  return e instanceof Error && fn in e && (t == null || !!(e.type & t));
}
const Ar = [
  "params",
  "query",
  "hash"
];
function Cr(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of Ar) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const et = Symbol(""), pt = Symbol(""), He = Symbol(""), tt = Symbol(""), Ye = Symbol("");
function Pr() {
  return le(He);
}
function wr(e) {
  return le(tt);
}
var br = Object.create, dn = Object.defineProperty, Dr = Object.getOwnPropertyDescriptor, kr = Object.getOwnPropertyNames, Lr = Object.getPrototypeOf, Vr = Object.prototype.hasOwnProperty, Ur = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Mr = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (var o = kr(t), i = 0, s = o.length, l; i < s; i++)
    l = o[i], !Vr.call(e, l) && l !== n && dn(e, l, {
      get: ((c) => t[c]).bind(null, l),
      enumerable: !(r = Dr(t, l)) || r.enumerable
    });
  return e;
}, xr = (e, t, n) => (n = e != null ? br(Lr(e)) : {}, Mr(dn(n, "default", {
  value: e,
  enumerable: !0
}), e));
const pn = typeof navigator < "u", T = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof T.chrome < "u" && T.chrome.devtools;
pn && (T.self, T.top);
typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron");
var Gr = /* @__PURE__ */ xr((/* @__PURE__ */ Ur(((e, t) => {
  t.exports = r;
  function n(i) {
    return i instanceof Buffer ? Buffer.from(i) : new i.constructor(i.buffer.slice(), i.byteOffset, i.length);
  }
  function r(i) {
    if (i = i || {}, i.circles) return o(i);
    const s = /* @__PURE__ */ new Map();
    if (s.set(Date, (a) => new Date(a)), s.set(Map, (a, f) => new Map(c(Array.from(a), f))), s.set(Set, (a, f) => new Set(c(Array.from(a), f))), i.constructorHandlers) for (const a of i.constructorHandlers) s.set(a[0], a[1]);
    let l = null;
    return i.proto ? p : d;
    function c(a, f) {
      const u = Object.keys(a), h = new Array(u.length);
      for (let g = 0; g < u.length; g++) {
        const E = u[g], m = a[E];
        typeof m != "object" || m === null ? h[E] = m : m.constructor !== Object && (l = s.get(m.constructor)) ? h[E] = l(m, f) : ArrayBuffer.isView(m) ? h[E] = n(m) : h[E] = f(m);
      }
      return h;
    }
    function d(a) {
      if (typeof a != "object" || a === null) return a;
      if (Array.isArray(a)) return c(a, d);
      if (a.constructor !== Object && (l = s.get(a.constructor))) return l(a, d);
      const f = {};
      for (const u in a) {
        if (Object.hasOwnProperty.call(a, u) === !1) continue;
        const h = a[u];
        typeof h != "object" || h === null ? f[u] = h : h.constructor !== Object && (l = s.get(h.constructor)) ? f[u] = l(h, d) : ArrayBuffer.isView(h) ? f[u] = n(h) : f[u] = d(h);
      }
      return f;
    }
    function p(a) {
      if (typeof a != "object" || a === null) return a;
      if (Array.isArray(a)) return c(a, p);
      if (a.constructor !== Object && (l = s.get(a.constructor))) return l(a, p);
      const f = {};
      for (const u in a) {
        const h = a[u];
        typeof h != "object" || h === null ? f[u] = h : h.constructor !== Object && (l = s.get(h.constructor)) ? f[u] = l(h, p) : ArrayBuffer.isView(h) ? f[u] = n(h) : f[u] = p(h);
      }
      return f;
    }
  }
  function o(i) {
    const s = [], l = [], c = /* @__PURE__ */ new Map();
    if (c.set(Date, (u) => new Date(u)), c.set(Map, (u, h) => new Map(p(Array.from(u), h))), c.set(Set, (u, h) => new Set(p(Array.from(u), h))), i.constructorHandlers) for (const u of i.constructorHandlers) c.set(u[0], u[1]);
    let d = null;
    return i.proto ? f : a;
    function p(u, h) {
      const g = Object.keys(u), E = new Array(g.length);
      for (let m = 0; m < g.length; m++) {
        const y = g[m], S = u[y];
        if (typeof S != "object" || S === null) E[y] = S;
        else if (S.constructor !== Object && (d = c.get(S.constructor))) E[y] = d(S, h);
        else if (ArrayBuffer.isView(S)) E[y] = n(S);
        else {
          const D = s.indexOf(S);
          D !== -1 ? E[y] = l[D] : E[y] = h(S);
        }
      }
      return E;
    }
    function a(u) {
      if (typeof u != "object" || u === null) return u;
      if (Array.isArray(u)) return p(u, a);
      if (u.constructor !== Object && (d = c.get(u.constructor))) return d(u, a);
      const h = {};
      s.push(u), l.push(h);
      for (const g in u) {
        if (Object.hasOwnProperty.call(u, g) === !1) continue;
        const E = u[g];
        if (typeof E != "object" || E === null) h[g] = E;
        else if (E.constructor !== Object && (d = c.get(E.constructor))) h[g] = d(E, a);
        else if (ArrayBuffer.isView(E)) h[g] = n(E);
        else {
          const m = s.indexOf(E);
          m !== -1 ? h[g] = l[m] : h[g] = a(E);
        }
      }
      return s.pop(), l.pop(), h;
    }
    function f(u) {
      if (typeof u != "object" || u === null) return u;
      if (Array.isArray(u)) return p(u, f);
      if (u.constructor !== Object && (d = c.get(u.constructor))) return d(u, f);
      const h = {};
      s.push(u), l.push(h);
      for (const g in u) {
        const E = u[g];
        if (typeof E != "object" || E === null) h[g] = E;
        else if (E.constructor !== Object && (d = c.get(E.constructor))) h[g] = d(E, f);
        else if (ArrayBuffer.isView(E)) h[g] = n(E);
        else {
          const m = s.indexOf(E);
          m !== -1 ? h[g] = l[m] : h[g] = f(E);
        }
      }
      return s.pop(), l.pop(), h;
    }
  }
})))());
const Br = /(?:^|[-_/])(\w)/g;
function $r(e, t) {
  return t ? t.toUpperCase() : "";
}
function zr(e) {
  return e && `${e}`.replace(Br, $r);
}
function jr(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const r = n.lastIndexOf("/"), o = n.substring(r + 1);
  {
    const i = o.lastIndexOf(t);
    return o.substring(0, i);
  }
}
const xt = (0, Gr.default)({ circles: !0 }), Hr = { trailing: !0 };
function Ne(e, t = 25, n = {}) {
  if (n = {
    ...Hr,
    ...n
  }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
  let r, o, i = [], s, l;
  const c = (a, f) => (s = Fr(e, a, f), s.finally(() => {
    if (s = null, n.trailing && l && !o) {
      const u = c(a, l);
      return l = null, u;
    }
  }), s), d = function(...a) {
    return n.trailing && (l = a), s || new Promise((f) => {
      const u = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = n.leading ? r : c(this, a);
        l = null;
        for (const g of i) g(h);
        i = [];
      }, t), u ? (r = c(this, a), f(r)) : i.push(f);
    });
  }, p = (a) => {
    a && (clearTimeout(a), o = null);
  };
  return d.isPending = () => !!o, d.cancel = () => {
    p(o), i = [], l = null;
  }, d.flush = () => {
    if (p(o), !l || s) return;
    const a = l;
    return l = null, c(this, a);
  }, d;
}
async function Fr(e, t, n) {
  return await e.apply(t, n);
}
var Kr = Object.create, _n = Object.defineProperty, qr = Object.getOwnPropertyDescriptor, Wr = Object.getOwnPropertyNames, Yr = Object.getPrototypeOf, Zr = Object.prototype.hasOwnProperty, hn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Xr = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (var o = Wr(t), i = 0, s = o.length, l; i < s; i++)
    l = o[i], !Zr.call(e, l) && l !== n && _n(e, l, {
      get: ((c) => t[c]).bind(null, l),
      enumerable: !(r = qr(t, l)) || r.enumerable
    });
  return e;
}, Qr = (e, t, n) => (n = e != null ? Kr(Yr(e)) : {}, Xr(_n(n, "default", {
  value: e,
  enumerable: !0
}), e));
function Jr(e) {
  if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
  const t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function eo(e) {
  const t = e.__file;
  if (t) return zr(jr(t, ".vue"));
}
function Gt(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function At(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function En(e) {
  const t = e.subTree?.type, n = At(e);
  return n ? n?.types?.Fragment === t : !1;
}
function nt(e) {
  const t = Jr(e?.type || {});
  if (t) return t;
  if (e?.root === e) return "Root";
  for (const r in e.parent?.type?.components) if (e.parent.type.components[r] === e?.type) return Gt(e, r);
  for (const r in e.appContext?.components) if (e.appContext.components[r] === e?.type) return Gt(e, r);
  const n = eo(e?.type || {});
  return n || "Anonymous Component";
}
function to(e) {
  return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function _t(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function no() {
  const e = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    get width() {
      return e.right - e.left;
    },
    get height() {
      return e.bottom - e.top;
    }
  };
  return e;
}
let Fe;
function ro(e) {
  return Fe || (Fe = document.createRange()), Fe.selectNode(e), Fe.getBoundingClientRect();
}
function oo(e) {
  const t = no();
  if (!e.children) return t;
  for (let n = 0, r = e.children.length; n < r; n++) {
    const o = e.children[n];
    let i;
    if (o.component) i = me(o.component);
    else if (o.el) {
      const s = o.el;
      s.nodeType === 1 || s.getBoundingClientRect ? i = s.getBoundingClientRect() : s.nodeType === 3 && s.data.trim() && (i = ro(s));
    }
    i && io(t, i);
  }
  return t;
}
function io(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
const Bt = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function me(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Bt : En(e) ? oo(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? me(e.subTree.component) : Bt;
}
function Ct(e) {
  return En(e) ? so(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function so(e) {
  if (!e.children) return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...Ct(n.component)) : n?.el && t.push(n.el);
  }), t;
}
const mn = "__vue-devtools-component-inspector__", gn = "__vue-devtools-component-inspector__card__", On = "__vue-devtools-component-inspector__name__", Tn = "__vue-devtools-component-inspector__indicator__", yn = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, ao = {
  fontFamily: "Arial, Helvetica, sans-serif",
  padding: "5px 8px",
  borderRadius: "4px",
  textAlign: "left",
  position: "absolute",
  left: 0,
  color: "#e9e9e9",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "24px",
  backgroundColor: "#42b883",
  boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, lo = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Ce() {
  return document.getElementById(mn);
}
function co() {
  return document.getElementById(gn);
}
function uo() {
  return document.getElementById(Tn);
}
function fo() {
  return document.getElementById(On);
}
function Pt(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function wt(e) {
  const t = document.createElement("div");
  t.id = e.elementId ?? mn, Object.assign(t.style, {
    ...yn,
    ...Pt(e.bounds),
    ...e.style
  });
  const n = document.createElement("span");
  n.id = gn, Object.assign(n.style, {
    ...ao,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = On, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const o = document.createElement("i");
  return o.id = Tn, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(o.style, lo), n.appendChild(r), n.appendChild(o), t.appendChild(n), document.body.appendChild(t), t;
}
function bt(e) {
  const t = Ce(), n = co(), r = fo(), o = uo();
  t && (Object.assign(t.style, {
    ...yn,
    ...Pt(e.bounds)
  }), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function po(e) {
  const t = me(e);
  if (!t.width && !t.height) return;
  const n = nt(e);
  Ce() ? bt({
    bounds: t,
    name: n
  }) : wt({
    bounds: t,
    name: n
  });
}
function Rn() {
  const e = Ce();
  e && (e.style.display = "none");
}
let ht = null;
function Et(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (ht = n, n.vnode.el)) {
      const r = me(n), o = nt(n);
      Ce() ? bt({
        bounds: r,
        name: o
      }) : wt({
        bounds: r,
        name: o
      });
    }
  }
}
function _o(e, t) {
  e.preventDefault(), e.stopPropagation(), ht && t(to(ht));
}
let Ze = null;
function ho() {
  Rn(), window.removeEventListener("mouseover", Et), window.removeEventListener("click", Ze, !0), Ze = null;
}
function Eo() {
  return window.addEventListener("mouseover", Et), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), _o(n, (r) => {
        window.removeEventListener("click", t, !0), Ze = null, window.removeEventListener("mouseover", Et);
        const o = Ce();
        o && (o.style.display = "none"), e(JSON.stringify({ id: r }));
      });
    }
    Ze = t, window.addEventListener("click", t, !0);
  });
}
function mo(e) {
  const t = _t(j.value, e.id);
  if (t) {
    const [n] = Ct(t);
    if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
    else {
      const r = me(t), o = document.createElement("div"), i = {
        ...Pt(r),
        position: "absolute"
      };
      Object.assign(o.style, i), document.body.appendChild(o), o.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const r = me(t);
      if (r.width || r.height) {
        const o = nt(t), i = Ce();
        i ? bt({
          ...e,
          name: o,
          bounds: r
        }) : wt({
          ...e,
          name: o,
          bounds: r
        }), setTimeout(() => {
          i && (i.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
T.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function go(e) {
  let t = 0;
  const n = setInterval(() => {
    T.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
  }, 30);
}
function Oo() {
  const e = T.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function To() {
  return new Promise((e) => {
    function t() {
      Oo(), e(T.__VUE_INSPECTOR__);
    }
    T.__VUE_INSPECTOR__ ? t() : go(() => {
      t();
    });
  });
}
let Xe = /* @__PURE__ */ (function(e) {
  return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
})({});
function yo(e) {
  return !!(e && e[Xe.IS_READONLY]);
}
function Sn(e) {
  return yo(e) ? Sn(e[Xe.RAW]) : !!(e && e[Xe.IS_REACTIVE]);
}
function lt(e) {
  return !!(e && e.__v_isRef === !0);
}
function Le(e) {
  const t = e && e[Xe.RAW];
  return t ? Le(t) : e;
}
var Ro = class {
  constructor() {
    this.refEditor = new So();
  }
  set(e, t, n, r) {
    const o = Array.isArray(t) ? t : t.split(".");
    for (; o.length > 1; ) {
      const l = o.shift();
      e instanceof Map ? e = e.get(l) : e instanceof Set ? e = Array.from(e.values())[l] : e = e[l], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const i = o[0], s = this.refEditor.get(e)[i];
    r ? r(e, i, n) : this.refEditor.isRef(s) ? this.refEditor.set(s, n) : e[i] = n;
  }
  get(e, t) {
    const n = Array.isArray(t) ? t : t.split(".");
    for (let r = 0; r < n.length; r++)
      if (e instanceof Map ? e = e.get(n[r]) : e = e[n[r]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
    return e;
  }
  has(e, t, n = !1) {
    if (typeof e > "u") return !1;
    const r = Array.isArray(t) ? t.slice() : t.split("."), o = n ? 2 : 1;
    for (; e && r.length > o; ) {
      const i = r.shift();
      e = e[i], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
  }
  createDefaultSetCallback(e) {
    return (t, n, r) => {
      if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Le(t) instanceof Map ? t.delete(n) : Le(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
        const o = t[e.newKey || n];
        this.refEditor.isRef(o) ? this.refEditor.set(o, r) : Le(t) instanceof Map ? t.set(e.newKey || n, r) : Le(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
      }
    };
  }
}, So = class {
  set(e, t) {
    if (lt(e)) e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((o) => e.add(o));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const o = new Set(e.keys());
        n.forEach((i) => {
          e.set(i, Reflect.get(t, i)), o.delete(i);
        }), o.forEach((i) => e.delete(i));
        return;
      }
      const r = new Set(Object.keys(e));
      n.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t, o)), r.delete(o);
      }), r.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return lt(e) ? e.value : e;
  }
  isRef(e) {
    return lt(e) || Sn(e);
  }
};
const vo = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Io() {
  if (typeof window > "u" || !pn || typeof localStorage > "u" || localStorage === null) return {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
  const e = typeof localStorage.getItem < "u" ? localStorage.getItem(vo) : null;
  return e ? JSON.parse(e) : {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
}
T.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS ??= [];
const No = new Proxy(T.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
  return Reflect.get(e, t, n);
} });
function Ao(e, t) {
  M.timelineLayersState[t.id] = !1, No.push({
    ...e,
    descriptorId: t.id,
    appRecord: At(t.app)
  });
}
T.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
const Dt = new Proxy(T.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
  return Reflect.get(e, t, n);
} }), vn = Ne(() => {
  Pe.hooks.callHook(Ee.SEND_INSPECTOR_TO_CLIENT, In());
});
function Co(e, t) {
  Dt.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
    stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: At(t.app)
  }), vn();
}
function In() {
  return Dt.filter((e) => e.descriptor.app === j.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
    const t = e.descriptor, n = e.options;
    return {
      id: n.id,
      label: n.label,
      logo: t.logo,
      icon: `custom-ic-baseline-${n?.icon?.replace(/_/g, "-")}`,
      packageName: t.packageName,
      homepage: t.homepage,
      pluginId: t.id
    };
  });
}
function qe(e, t) {
  return Dt.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
let G = /* @__PURE__ */ (function(e) {
  return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
})({}), b = /* @__PURE__ */ (function(e) {
  return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
})({}), Ee = /* @__PURE__ */ (function(e) {
  return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
})({});
function Po() {
  const e = ln();
  e.hook(b.ADD_INSPECTOR, ({ inspector: r, plugin: o }) => {
    Co(r, o.descriptor);
  });
  const t = Ne(async ({ inspectorId: r, plugin: o }) => {
    if (!r || !o?.descriptor?.app || M.highPerfModeEnabled) return;
    const i = qe(r, o.descriptor.app), s = {
      app: o.descriptor.app,
      inspectorId: r,
      filter: i?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(async (c) => {
        await Promise.all(c.map((d) => d(s))), l();
      }, G.GET_INSPECTOR_TREE);
    }), e.callHookWith(async (l) => {
      await Promise.all(l.map((c) => c({
        inspectorId: r,
        rootNodes: s.rootNodes
      })));
    }, Ee.SEND_INSPECTOR_TREE_TO_CLIENT);
  }, 120);
  e.hook(b.SEND_INSPECTOR_TREE, t);
  const n = Ne(async ({ inspectorId: r, plugin: o }) => {
    if (!r || !o?.descriptor?.app || M.highPerfModeEnabled) return;
    const i = qe(r, o.descriptor.app), s = {
      app: o.descriptor.app,
      inspectorId: r,
      nodeId: i?.selectedNodeId || "",
      state: null
    }, l = { currentTab: `custom-inspector:${r}` };
    s.nodeId && await new Promise((c) => {
      e.callHookWith(async (d) => {
        await Promise.all(d.map((p) => p(s, l))), c();
      }, G.GET_INSPECTOR_STATE);
    }), e.callHookWith(async (c) => {
      await Promise.all(c.map((d) => d({
        inspectorId: r,
        nodeId: s.nodeId,
        state: s.state
      })));
    }, Ee.SEND_INSPECTOR_STATE_TO_CLIENT);
  }, 120);
  return e.hook(b.SEND_INSPECTOR_STATE, n), e.hook(b.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: r, nodeId: o, plugin: i }) => {
    const s = qe(r, i.descriptor.app);
    s && (s.selectedNodeId = o);
  }), e.hook(b.TIMELINE_LAYER_ADDED, ({ options: r, plugin: o }) => {
    Ao(r, o.descriptor);
  }), e.hook(b.TIMELINE_EVENT_ADDED, ({ options: r, plugin: o }) => {
    M.highPerfModeEnabled || !M.timelineLayersState?.[o.descriptor.id] && ![
      "performance",
      "component-event",
      "keyboard",
      "mouse"
    ].includes(r.layerId) || e.callHookWith(async (i) => {
      await Promise.all(i.map((s) => s(r)));
    }, Ee.SEND_TIMELINE_EVENT_TO_CLIENT);
  }), e.hook(b.GET_COMPONENT_INSTANCES, async ({ app: r }) => {
    const o = r.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o) return null;
    const i = o.id.toString();
    return [...o.instanceMap].filter(([s]) => s.split(":")[0] === i).map(([, s]) => s);
  }), e.hook(b.GET_COMPONENT_BOUNDS, async ({ instance: r }) => me(r)), e.hook(b.GET_COMPONENT_NAME, ({ instance: r }) => nt(r)), e.hook(b.COMPONENT_HIGHLIGHT, ({ uid: r }) => {
    const o = j.value.instanceMap.get(r);
    o && po(o);
  }), e.hook(b.COMPONENT_UNHIGHLIGHT, () => {
    Rn();
  }), e;
}
T.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [];
T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {};
T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "";
T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [];
T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
const Ue = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function wo() {
  return {
    connected: !1,
    clientConnected: !1,
    vitePluginDetected: !0,
    appRecords: [],
    activeAppRecordId: "",
    tabs: [],
    commands: [],
    highPerfModeEnabled: !0,
    devtoolsClientDetected: {},
    perfUniqueGroupId: 0,
    timelineLayersState: Io()
  };
}
T[Ue] ??= wo();
const bo = Ne((e) => {
  Pe.hooks.callHook(Ee.DEVTOOLS_STATE_UPDATED, { state: e });
});
Ne((e, t) => {
  Pe.hooks.callHook(Ee.DEVTOOLS_CONNECTED_UPDATED, {
    state: e,
    oldState: t
  });
});
const rt = new Proxy(T.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
  return t === "value" ? T.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : T.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), j = new Proxy(T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
  return t === "value" ? T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Nn() {
  bo({
    ...T[Ue],
    appRecords: rt.value,
    activeAppRecordId: j.id,
    tabs: T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Do(e) {
  T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Nn();
}
function ko(e) {
  T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Nn();
}
const M = new Proxy(T[Ue], {
  get(e, t) {
    return t === "appRecords" ? rt : t === "activeAppRecordId" ? j.id : t === "tabs" ? T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : T[Ue][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return e[t] = n, T[Ue][t] = n, !0;
  }
});
function Lo(e = {}) {
  const { file: t, host: n, baseUrl: r = window.location.origin, line: o = 0, column: i = 0 } = e;
  if (t) {
    if (n === "chrome-extension") {
      const s = t.replace(/\\/g, "\\\\"), l = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
      fetch(`${l}__open-in-editor?file=${encodeURI(t)}`).then((c) => {
        if (!c.ok) {
          const d = `Opening component ${s} failed`;
          console.log(`%c${d}`, "color:red");
        }
      });
    } else if (M.vitePluginDetected) {
      const s = T.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
      T.__VUE_INSPECTOR__.openInEditor(s, t, o, i);
    }
  }
}
T.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
const kt = new Proxy(T.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
  return Reflect.get(e, t, n);
} });
function mt(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Lt(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function Vo(e) {
  return (kt.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function An(e, t) {
  const n = Lt(e);
  if (n) {
    const r = localStorage.getItem(n);
    if (r) return JSON.parse(r);
  }
  return mt(e ? (kt.find((r) => r[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function Uo(e, t) {
  const n = Lt(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(mt(t)));
}
function Mo(e, t, n) {
  const r = Lt(e), o = localStorage.getItem(r), i = JSON.parse(o || "{}"), s = {
    ...i,
    [t]: n
  };
  localStorage.setItem(r, JSON.stringify(s)), Pe.hooks.callHookWith((l) => {
    l.forEach((c) => c({
      pluginId: e,
      key: t,
      oldValue: i[t],
      newValue: n,
      settings: s
    }));
  }, G.SET_PLUGIN_SETTINGS);
}
let F = /* @__PURE__ */ (function(e) {
  return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
})({});
const K = T.__VUE_DEVTOOLS_HOOK ??= ln(), xo = {
  vueAppInit(e) {
    K.hook(F.APP_INIT, e);
  },
  vueAppUnmount(e) {
    K.hook(F.APP_UNMOUNT, e);
  },
  vueAppConnected(e) {
    K.hook(F.APP_CONNECTED, e);
  },
  componentAdded(e) {
    return K.hook(F.COMPONENT_ADDED, e);
  },
  componentEmit(e) {
    return K.hook(F.COMPONENT_EMIT, e);
  },
  componentUpdated(e) {
    return K.hook(F.COMPONENT_UPDATED, e);
  },
  componentRemoved(e) {
    return K.hook(F.COMPONENT_REMOVED, e);
  },
  setupDevtoolsPlugin(e) {
    K.hook(F.SETUP_DEVTOOLS_PLUGIN, e);
  },
  perfStart(e) {
    return K.hook(F.PERFORMANCE_START, e);
  },
  perfEnd(e) {
    return K.hook(F.PERFORMANCE_END, e);
  }
}, Cn = {
  on: xo,
  setupDevToolsPlugin(e, t) {
    return K.callHook(F.SETUP_DEVTOOLS_PLUGIN, e, t);
  }
};
var Go = class {
  constructor({ plugin: e, ctx: t }) {
    this.hooks = t.hooks, this.plugin = e;
  }
  get on() {
    return {
      visitComponentTree: (e) => {
        this.hooks.hook(G.VISIT_COMPONENT_TREE, e);
      },
      inspectComponent: (e) => {
        this.hooks.hook(G.INSPECT_COMPONENT, e);
      },
      editComponentState: (e) => {
        this.hooks.hook(G.EDIT_COMPONENT_STATE, e);
      },
      getInspectorTree: (e) => {
        this.hooks.hook(G.GET_INSPECTOR_TREE, e);
      },
      getInspectorState: (e) => {
        this.hooks.hook(G.GET_INSPECTOR_STATE, e);
      },
      editInspectorState: (e) => {
        this.hooks.hook(G.EDIT_INSPECTOR_STATE, e);
      },
      inspectTimelineEvent: (e) => {
        this.hooks.hook(G.INSPECT_TIMELINE_EVENT, e);
      },
      timelineCleared: (e) => {
        this.hooks.hook(G.TIMELINE_CLEARED, e);
      },
      setPluginSettings: (e) => {
        this.hooks.hook(G.SET_PLUGIN_SETTINGS, e);
      }
    };
  }
  notifyComponentUpdate(e) {
    if (M.highPerfModeEnabled) return;
    const t = In().find((n) => n.packageName === this.plugin.descriptor.packageName);
    if (t?.id) {
      if (e) {
        const n = [
          e.appContext.app,
          e.uid,
          e.parent?.uid,
          e
        ];
        K.callHook(F.COMPONENT_UPDATED, ...n);
      } else K.callHook(F.COMPONENT_UPDATED);
      this.hooks.callHook(b.SEND_INSPECTOR_STATE, {
        inspectorId: t.id,
        plugin: this.plugin
      });
    }
  }
  addInspector(e) {
    this.hooks.callHook(b.ADD_INSPECTOR, {
      inspector: e,
      plugin: this.plugin
    }), this.plugin.descriptor.settings && Uo(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    M.highPerfModeEnabled || this.hooks.callHook(b.SEND_INSPECTOR_TREE, {
      inspectorId: e,
      plugin: this.plugin
    });
  }
  sendInspectorState(e) {
    M.highPerfModeEnabled || this.hooks.callHook(b.SEND_INSPECTOR_STATE, {
      inspectorId: e,
      plugin: this.plugin
    });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook(b.CUSTOM_INSPECTOR_SELECT_NODE, {
      inspectorId: e,
      nodeId: t,
      plugin: this.plugin
    });
  }
  visitComponentTree(e) {
    return this.hooks.callHook(G.VISIT_COMPONENT_TREE, e);
  }
  now() {
    return M.highPerfModeEnabled ? 0 : Date.now();
  }
  addTimelineLayer(e) {
    this.hooks.callHook(b.TIMELINE_LAYER_ADDED, {
      options: e,
      plugin: this.plugin
    });
  }
  addTimelineEvent(e) {
    M.highPerfModeEnabled || this.hooks.callHook(b.TIMELINE_EVENT_ADDED, {
      options: e,
      plugin: this.plugin
    });
  }
  getSettings(e) {
    return An(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  getComponentInstances(e) {
    return this.hooks.callHook(b.GET_COMPONENT_INSTANCES, { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook(b.GET_COMPONENT_BOUNDS, { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook(b.GET_COMPONENT_NAME, { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook(b.COMPONENT_HIGHLIGHT, { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(b.COMPONENT_UNHIGHLIGHT);
  }
};
const Bo = Go, $o = "__vue_devtool_undefined__", zo = "__vue_devtool_infinity__", jo = "__vue_devtool_negative_infinity__", Ho = "__vue_devtool_nan__", Fo = {
  [$o]: "undefined",
  [Ho]: "NaN",
  [zo]: "Infinity",
  [jo]: "-Infinity"
};
Object.entries(Fo).reduce((e, [t, n]) => (e[n] = t, e), {});
T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function Ko(e, t) {
  return Cn.setupDevToolsPlugin(e, t);
}
function qo(e, t) {
  const [n, r] = e;
  if (n.app !== t) return;
  const o = new Bo({
    plugin: {
      setupFn: r,
      descriptor: n
    },
    ctx: Pe
  });
  n.packageName === "vuex" && o.on.editInspectorState((i) => {
    o.sendInspectorState(i.inspectorId);
  }), r(o);
}
function Pn(e, t) {
  T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || M.highPerfModeEnabled && !t?.inspectingComponent || (T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), kt.forEach((n) => {
    qo(n, e);
  }));
}
const Qe = "__VUE_DEVTOOLS_ROUTER__", Ge = "__VUE_DEVTOOLS_ROUTER_INFO__";
T[Ge] ??= {
  currentRoute: null,
  routes: []
};
T[Qe] ??= {};
new Proxy(T[Ge], { get(e, t) {
  return T[Ge][t];
} });
new Proxy(T[Qe], { get(e, t) {
  if (t === "value") return T[Qe];
} });
function Wo(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Vt(e) {
  return e.map((t) => {
    let { path: n, name: r, children: o, meta: i } = t;
    return o?.length && (o = Vt(o)), {
      path: n,
      name: r,
      children: o,
      meta: i
    };
  });
}
function Yo(e) {
  if (e) {
    const { fullPath: t, hash: n, href: r, path: o, name: i, matched: s, params: l, query: c } = e;
    return {
      fullPath: t,
      hash: n,
      href: r,
      path: o,
      name: i,
      params: l,
      query: c,
      matched: Vt(s)
    };
  }
  return e;
}
function Zo(e, t) {
  function n() {
    const r = e.app?.config.globalProperties.$router, o = Yo(r?.currentRoute.value), i = Vt(Wo(r)), s = console.warn;
    console.warn = () => {
    }, T[Ge] = {
      currentRoute: o ? xt(o) : {},
      routes: xt(i)
    }, T[Qe] = r, console.warn = s;
  }
  n(), Cn.on.componentUpdated(Ne(() => {
    t.value?.app === e.app && (n(), !M.highPerfModeEnabled && Pe.hooks.callHook(Ee.ROUTER_INFO_UPDATED, { state: T[Ge] }));
  }, 200));
}
function Xo(e) {
  return {
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: j.value.app,
        rootNodes: []
      };
      return await new Promise((r) => {
        e.callHookWith(async (o) => {
          await Promise.all(o.map((i) => i(n))), r();
        }, G.GET_INSPECTOR_TREE);
      }), n.rootNodes;
    },
    async getInspectorState(t) {
      const n = {
        ...t,
        app: j.value.app,
        state: null
      }, r = { currentTab: `custom-inspector:${t.inspectorId}` };
      return await new Promise((o) => {
        e.callHookWith(async (i) => {
          await Promise.all(i.map((s) => s(n, r))), o();
        }, G.GET_INSPECTOR_STATE);
      }), n.state;
    },
    editInspectorState(t) {
      const n = new Ro(), r = {
        ...t,
        app: j.value.app,
        set: (o, i = t.path, s = t.state.value, l) => {
          n.set(o, i, s, l || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith((o) => {
        o.forEach((i) => i(r));
      }, G.EDIT_INSPECTOR_STATE);
    },
    sendInspectorState(t) {
      const n = qe(t);
      e.callHook(b.SEND_INSPECTOR_STATE, {
        inspectorId: t,
        plugin: {
          descriptor: n.descriptor,
          setupFn: () => ({})
        }
      });
    },
    inspectComponentInspector() {
      return Eo();
    },
    cancelInspectComponentInspector() {
      return ho();
    },
    getComponentRenderCode(t) {
      const n = _t(j.value, t);
      if (n) return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    scrollToComponent(t) {
      return mo({ id: t });
    },
    openInEditor: Lo,
    getVueInspector: To,
    toggleApp(t, n) {
      const r = rt.value.find((o) => o.id === t);
      r && (ko(t), Do(r), Zo(r, j), vn(), Pn(r.app, n));
    },
    inspectDOM(t) {
      const n = _t(j.value, t);
      if (n) {
        const [r] = Ct(n);
        r && (T.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r);
      }
    },
    updatePluginSettings(t, n, r) {
      Mo(t, n, r);
    },
    getPluginSettings(t) {
      return {
        options: Vo(t),
        values: An(t)
      };
    }
  };
}
T.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
const $t = Po();
T.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
  hooks: $t,
  get state() {
    return {
      ...M,
      activeAppRecordId: j.id,
      activeAppRecord: j.value,
      appRecords: rt.value
    };
  },
  api: Xo($t)
};
const Pe = T.__VUE_DEVTOOLS_KIT_CONTEXT__;
var Qo = /* @__PURE__ */ hn(((e, t) => {
  (function(n) {
    var r = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "Ae",
      Å: "A",
      Æ: "AE",
      Ç: "C",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      Ð: "D",
      Ñ: "N",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "Oe",
      Ő: "O",
      Ø: "O",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "Ue",
      Ű: "U",
      Ý: "Y",
      Þ: "TH",
      ß: "ss",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "ae",
      å: "a",
      æ: "ae",
      ç: "c",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      ð: "d",
      ñ: "n",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "oe",
      ő: "o",
      ø: "o",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "ue",
      ű: "u",
      ý: "y",
      þ: "th",
      ÿ: "y",
      "ẞ": "SS",
      ا: "a",
      أ: "a",
      إ: "i",
      آ: "aa",
      ؤ: "u",
      ئ: "e",
      ء: "a",
      ب: "b",
      ت: "t",
      ث: "th",
      ج: "j",
      ح: "h",
      خ: "kh",
      د: "d",
      ذ: "th",
      ر: "r",
      ز: "z",
      س: "s",
      ش: "sh",
      ص: "s",
      ض: "dh",
      ط: "t",
      ظ: "z",
      ع: "a",
      غ: "gh",
      ف: "f",
      ق: "q",
      ك: "k",
      ل: "l",
      م: "m",
      ن: "n",
      ه: "h",
      و: "w",
      ي: "y",
      ى: "a",
      ة: "h",
      ﻻ: "la",
      ﻷ: "laa",
      ﻹ: "lai",
      ﻵ: "laa",
      گ: "g",
      چ: "ch",
      پ: "p",
      ژ: "zh",
      ک: "k",
      ی: "y",
      "َ": "a",
      "ً": "an",
      "ِ": "e",
      "ٍ": "en",
      "ُ": "u",
      "ٌ": "on",
      "ْ": "",
      "٠": "0",
      "١": "1",
      "٢": "2",
      "٣": "3",
      "٤": "4",
      "٥": "5",
      "٦": "6",
      "٧": "7",
      "٨": "8",
      "٩": "9",
      "۰": "0",
      "۱": "1",
      "۲": "2",
      "۳": "3",
      "۴": "4",
      "۵": "5",
      "۶": "6",
      "۷": "7",
      "۸": "8",
      "۹": "9",
      က: "k",
      ခ: "kh",
      ဂ: "g",
      ဃ: "ga",
      င: "ng",
      စ: "s",
      ဆ: "sa",
      ဇ: "z",
      "စျ": "za",
      ည: "ny",
      ဋ: "t",
      ဌ: "ta",
      ဍ: "d",
      ဎ: "da",
      ဏ: "na",
      တ: "t",
      ထ: "ta",
      ဒ: "d",
      ဓ: "da",
      န: "n",
      ပ: "p",
      ဖ: "pa",
      ဗ: "b",
      ဘ: "ba",
      မ: "m",
      ယ: "y",
      ရ: "ya",
      လ: "l",
      ဝ: "w",
      သ: "th",
      ဟ: "h",
      ဠ: "la",
      အ: "a",
      "ြ": "y",
      "ျ": "ya",
      "ွ": "w",
      "ြွ": "yw",
      "ျွ": "ywa",
      "ှ": "h",
      ဧ: "e",
      "၏": "-e",
      ဣ: "i",
      ဤ: "-i",
      ဉ: "u",
      ဦ: "-u",
      ဩ: "aw",
      "သြော": "aw",
      ဪ: "aw",
      "၀": "0",
      "၁": "1",
      "၂": "2",
      "၃": "3",
      "၄": "4",
      "၅": "5",
      "၆": "6",
      "၇": "7",
      "၈": "8",
      "၉": "9",
      "္": "",
      "့": "",
      "း": "",
      č: "c",
      ď: "d",
      ě: "e",
      ň: "n",
      ř: "r",
      š: "s",
      ť: "t",
      ů: "u",
      ž: "z",
      Č: "C",
      Ď: "D",
      Ě: "E",
      Ň: "N",
      Ř: "R",
      Š: "S",
      Ť: "T",
      Ů: "U",
      Ž: "Z",
      ހ: "h",
      ށ: "sh",
      ނ: "n",
      ރ: "r",
      ބ: "b",
      ޅ: "lh",
      ކ: "k",
      އ: "a",
      ވ: "v",
      މ: "m",
      ފ: "f",
      ދ: "dh",
      ތ: "th",
      ލ: "l",
      ގ: "g",
      ޏ: "gn",
      ސ: "s",
      ޑ: "d",
      ޒ: "z",
      ޓ: "t",
      ޔ: "y",
      ޕ: "p",
      ޖ: "j",
      ޗ: "ch",
      ޘ: "tt",
      ޙ: "hh",
      ޚ: "kh",
      ޛ: "th",
      ޜ: "z",
      ޝ: "sh",
      ޞ: "s",
      ޟ: "d",
      ޠ: "t",
      ޡ: "z",
      ޢ: "a",
      ޣ: "gh",
      ޤ: "q",
      ޥ: "w",
      "ަ": "a",
      "ާ": "aa",
      "ި": "i",
      "ީ": "ee",
      "ު": "u",
      "ޫ": "oo",
      "ެ": "e",
      "ޭ": "ey",
      "ޮ": "o",
      "ޯ": "oa",
      "ް": "",
      ა: "a",
      ბ: "b",
      გ: "g",
      დ: "d",
      ე: "e",
      ვ: "v",
      ზ: "z",
      თ: "t",
      ი: "i",
      კ: "k",
      ლ: "l",
      მ: "m",
      ნ: "n",
      ო: "o",
      პ: "p",
      ჟ: "zh",
      რ: "r",
      ს: "s",
      ტ: "t",
      უ: "u",
      ფ: "p",
      ქ: "k",
      ღ: "gh",
      ყ: "q",
      შ: "sh",
      ჩ: "ch",
      ც: "ts",
      ძ: "dz",
      წ: "ts",
      ჭ: "ch",
      ხ: "kh",
      ჯ: "j",
      ჰ: "h",
      α: "a",
      β: "v",
      γ: "g",
      δ: "d",
      ε: "e",
      ζ: "z",
      η: "i",
      θ: "th",
      ι: "i",
      κ: "k",
      λ: "l",
      μ: "m",
      ν: "n",
      ξ: "ks",
      ο: "o",
      π: "p",
      ρ: "r",
      σ: "s",
      τ: "t",
      υ: "y",
      φ: "f",
      χ: "x",
      ψ: "ps",
      ω: "o",
      ά: "a",
      έ: "e",
      ί: "i",
      ό: "o",
      ύ: "y",
      ή: "i",
      ώ: "o",
      ς: "s",
      ϊ: "i",
      ΰ: "y",
      ϋ: "y",
      ΐ: "i",
      Α: "A",
      Β: "B",
      Γ: "G",
      Δ: "D",
      Ε: "E",
      Ζ: "Z",
      Η: "I",
      Θ: "TH",
      Ι: "I",
      Κ: "K",
      Λ: "L",
      Μ: "M",
      Ν: "N",
      Ξ: "KS",
      Ο: "O",
      Π: "P",
      Ρ: "R",
      Σ: "S",
      Τ: "T",
      Υ: "Y",
      Φ: "F",
      Χ: "X",
      Ψ: "PS",
      Ω: "O",
      Ά: "A",
      Έ: "E",
      Ί: "I",
      Ό: "O",
      Ύ: "Y",
      Ή: "I",
      Ώ: "O",
      Ϊ: "I",
      Ϋ: "Y",
      ā: "a",
      ē: "e",
      ģ: "g",
      ī: "i",
      ķ: "k",
      ļ: "l",
      ņ: "n",
      ū: "u",
      Ā: "A",
      Ē: "E",
      Ģ: "G",
      Ī: "I",
      Ķ: "k",
      Ļ: "L",
      Ņ: "N",
      Ū: "U",
      Ќ: "Kj",
      ќ: "kj",
      Љ: "Lj",
      љ: "lj",
      Њ: "Nj",
      њ: "nj",
      Тс: "Ts",
      тс: "ts",
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ś: "s",
      ź: "z",
      ż: "z",
      Ą: "A",
      Ć: "C",
      Ę: "E",
      Ł: "L",
      Ń: "N",
      Ś: "S",
      Ź: "Z",
      Ż: "Z",
      Є: "Ye",
      І: "I",
      Ї: "Yi",
      Ґ: "G",
      є: "ye",
      і: "i",
      ї: "yi",
      ґ: "g",
      ă: "a",
      Ă: "A",
      ș: "s",
      Ș: "S",
      ț: "t",
      Ț: "T",
      ţ: "t",
      Ţ: "T",
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "i",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "c",
      ч: "ch",
      ш: "sh",
      щ: "sh",
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ё: "Yo",
      Ж: "Zh",
      З: "Z",
      И: "I",
      Й: "I",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Х: "Kh",
      Ц: "C",
      Ч: "Ch",
      Ш: "Sh",
      Щ: "Sh",
      Ъ: "",
      Ы: "Y",
      Ь: "",
      Э: "E",
      Ю: "Yu",
      Я: "Ya",
      ђ: "dj",
      ј: "j",
      ћ: "c",
      џ: "dz",
      Ђ: "Dj",
      Ј: "j",
      Ћ: "C",
      Џ: "Dz",
      ľ: "l",
      ĺ: "l",
      ŕ: "r",
      Ľ: "L",
      Ĺ: "L",
      Ŕ: "R",
      ş: "s",
      Ş: "S",
      ı: "i",
      İ: "I",
      ğ: "g",
      Ğ: "G",
      ả: "a",
      Ả: "A",
      ẳ: "a",
      Ẳ: "A",
      ẩ: "a",
      Ẩ: "A",
      đ: "d",
      Đ: "D",
      ẹ: "e",
      Ẹ: "E",
      ẽ: "e",
      Ẽ: "E",
      ẻ: "e",
      Ẻ: "E",
      ế: "e",
      Ế: "E",
      ề: "e",
      Ề: "E",
      ệ: "e",
      Ệ: "E",
      ễ: "e",
      Ễ: "E",
      ể: "e",
      Ể: "E",
      ỏ: "o",
      ọ: "o",
      Ọ: "o",
      ố: "o",
      Ố: "O",
      ồ: "o",
      Ồ: "O",
      ổ: "o",
      Ổ: "O",
      ộ: "o",
      Ộ: "O",
      ỗ: "o",
      Ỗ: "O",
      ơ: "o",
      Ơ: "O",
      ớ: "o",
      Ớ: "O",
      ờ: "o",
      Ờ: "O",
      ợ: "o",
      Ợ: "O",
      ỡ: "o",
      Ỡ: "O",
      Ở: "o",
      ở: "o",
      ị: "i",
      Ị: "I",
      ĩ: "i",
      Ĩ: "I",
      ỉ: "i",
      Ỉ: "i",
      ủ: "u",
      Ủ: "U",
      ụ: "u",
      Ụ: "U",
      ũ: "u",
      Ũ: "U",
      ư: "u",
      Ư: "U",
      ứ: "u",
      Ứ: "U",
      ừ: "u",
      Ừ: "U",
      ự: "u",
      Ự: "U",
      ữ: "u",
      Ữ: "U",
      ử: "u",
      Ử: "ư",
      ỷ: "y",
      Ỷ: "y",
      ỳ: "y",
      Ỳ: "Y",
      ỵ: "y",
      Ỵ: "Y",
      ỹ: "y",
      Ỹ: "Y",
      ạ: "a",
      Ạ: "A",
      ấ: "a",
      Ấ: "A",
      ầ: "a",
      Ầ: "A",
      ậ: "a",
      Ậ: "A",
      ẫ: "a",
      Ẫ: "A",
      ắ: "a",
      Ắ: "A",
      ằ: "a",
      Ằ: "A",
      ặ: "a",
      Ặ: "A",
      ẵ: "a",
      Ẵ: "A",
      "⓪": "0",
      "①": "1",
      "②": "2",
      "③": "3",
      "④": "4",
      "⑤": "5",
      "⑥": "6",
      "⑦": "7",
      "⑧": "8",
      "⑨": "9",
      "⑩": "10",
      "⑪": "11",
      "⑫": "12",
      "⑬": "13",
      "⑭": "14",
      "⑮": "15",
      "⑯": "16",
      "⑰": "17",
      "⑱": "18",
      "⑲": "18",
      "⑳": "18",
      "⓵": "1",
      "⓶": "2",
      "⓷": "3",
      "⓸": "4",
      "⓹": "5",
      "⓺": "6",
      "⓻": "7",
      "⓼": "8",
      "⓽": "9",
      "⓾": "10",
      "⓿": "0",
      "⓫": "11",
      "⓬": "12",
      "⓭": "13",
      "⓮": "14",
      "⓯": "15",
      "⓰": "16",
      "⓱": "17",
      "⓲": "18",
      "⓳": "19",
      "⓴": "20",
      "Ⓐ": "A",
      "Ⓑ": "B",
      "Ⓒ": "C",
      "Ⓓ": "D",
      "Ⓔ": "E",
      "Ⓕ": "F",
      "Ⓖ": "G",
      "Ⓗ": "H",
      "Ⓘ": "I",
      "Ⓙ": "J",
      "Ⓚ": "K",
      "Ⓛ": "L",
      "Ⓜ": "M",
      "Ⓝ": "N",
      "Ⓞ": "O",
      "Ⓟ": "P",
      "Ⓠ": "Q",
      "Ⓡ": "R",
      "Ⓢ": "S",
      "Ⓣ": "T",
      "Ⓤ": "U",
      "Ⓥ": "V",
      "Ⓦ": "W",
      "Ⓧ": "X",
      "Ⓨ": "Y",
      "Ⓩ": "Z",
      "ⓐ": "a",
      "ⓑ": "b",
      "ⓒ": "c",
      "ⓓ": "d",
      "ⓔ": "e",
      "ⓕ": "f",
      "ⓖ": "g",
      "ⓗ": "h",
      "ⓘ": "i",
      "ⓙ": "j",
      "ⓚ": "k",
      "ⓛ": "l",
      "ⓜ": "m",
      "ⓝ": "n",
      "ⓞ": "o",
      "ⓟ": "p",
      "ⓠ": "q",
      "ⓡ": "r",
      "ⓢ": "s",
      "ⓣ": "t",
      "ⓤ": "u",
      "ⓦ": "v",
      "ⓥ": "w",
      "ⓧ": "x",
      "ⓨ": "y",
      "ⓩ": "z",
      "“": '"',
      "”": '"',
      "‘": "'",
      "’": "'",
      "∂": "d",
      ƒ: "f",
      "™": "(TM)",
      "©": "(C)",
      œ: "oe",
      Œ: "OE",
      "®": "(R)",
      "†": "+",
      "℠": "(SM)",
      "…": "...",
      "˚": "o",
      º: "o",
      ª: "a",
      "•": "*",
      "၊": ",",
      "။": ".",
      $: "USD",
      "€": "EUR",
      "₢": "BRN",
      "₣": "FRF",
      "£": "GBP",
      "₤": "ITL",
      "₦": "NGN",
      "₧": "ESP",
      "₩": "KRW",
      "₪": "ILS",
      "₫": "VND",
      "₭": "LAK",
      "₮": "MNT",
      "₯": "GRD",
      "₱": "ARS",
      "₲": "PYG",
      "₳": "ARA",
      "₴": "UAH",
      "₵": "GHS",
      "¢": "cent",
      "¥": "CNY",
      元: "CNY",
      円: "YEN",
      "﷼": "IRR",
      "₠": "EWE",
      "฿": "THB",
      "₨": "INR",
      "₹": "INR",
      "₰": "PF",
      "₺": "TRY",
      "؋": "AFN",
      "₼": "AZN",
      лв: "BGN",
      "៛": "KHR",
      "₡": "CRC",
      "₸": "KZT",
      ден: "MKD",
      zł: "PLN",
      "₽": "RUB",
      "₾": "GEL"
    }, o = ["်", "ް"], i = {
      "ာ": "a",
      "ါ": "a",
      "ေ": "e",
      "ဲ": "e",
      "ိ": "i",
      "ီ": "i",
      "ို": "o",
      "ု": "u",
      "ူ": "u",
      "ေါင်": "aung",
      "ော": "aw",
      "ော်": "aw",
      "ေါ": "aw",
      "ေါ်": "aw",
      "်": "်",
      "က်": "et",
      "ိုက်": "aik",
      "ောက်": "auk",
      "င်": "in",
      "ိုင်": "aing",
      "ောင်": "aung",
      "စ်": "it",
      "ည်": "i",
      "တ်": "at",
      "ိတ်": "eik",
      "ုတ်": "ok",
      "ွတ်": "ut",
      "ေတ်": "it",
      "ဒ်": "d",
      "ိုဒ်": "ok",
      "ုဒ်": "ait",
      "န်": "an",
      "ာန်": "an",
      "ိန်": "ein",
      "ုန်": "on",
      "ွန်": "un",
      "ပ်": "at",
      "ိပ်": "eik",
      "ုပ်": "ok",
      "ွပ်": "ut",
      "န်ုပ်": "nub",
      "မ်": "an",
      "ိမ်": "ein",
      "ုမ်": "on",
      "ွမ်": "un",
      "ယ်": "e",
      "ိုလ်": "ol",
      "ဉ်": "in",
      "ံ": "an",
      "ိံ": "ein",
      "ုံ": "on",
      "ައް": "ah",
      "ަށް": "ah"
    }, s = {
      en: {},
      az: {
        ç: "c",
        ə: "e",
        ğ: "g",
        ı: "i",
        ö: "o",
        ş: "s",
        ü: "u",
        Ç: "C",
        Ə: "E",
        Ğ: "G",
        İ: "I",
        Ö: "O",
        Ş: "S",
        Ü: "U"
      },
      cs: {
        č: "c",
        ď: "d",
        ě: "e",
        ň: "n",
        ř: "r",
        š: "s",
        ť: "t",
        ů: "u",
        ž: "z",
        Č: "C",
        Ď: "D",
        Ě: "E",
        Ň: "N",
        Ř: "R",
        Š: "S",
        Ť: "T",
        Ů: "U",
        Ž: "Z"
      },
      fi: {
        ä: "a",
        Ä: "A",
        ö: "o",
        Ö: "O"
      },
      hu: {
        ä: "a",
        Ä: "A",
        ö: "o",
        Ö: "O",
        ü: "u",
        Ü: "U",
        ű: "u",
        Ű: "U"
      },
      lt: {
        ą: "a",
        č: "c",
        ę: "e",
        ė: "e",
        į: "i",
        š: "s",
        ų: "u",
        ū: "u",
        ž: "z",
        Ą: "A",
        Č: "C",
        Ę: "E",
        Ė: "E",
        Į: "I",
        Š: "S",
        Ų: "U",
        Ū: "U"
      },
      lv: {
        ā: "a",
        č: "c",
        ē: "e",
        ģ: "g",
        ī: "i",
        ķ: "k",
        ļ: "l",
        ņ: "n",
        š: "s",
        ū: "u",
        ž: "z",
        Ā: "A",
        Č: "C",
        Ē: "E",
        Ģ: "G",
        Ī: "i",
        Ķ: "k",
        Ļ: "L",
        Ņ: "N",
        Š: "S",
        Ū: "u",
        Ž: "Z"
      },
      pl: {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z",
        Ą: "A",
        Ć: "C",
        Ę: "e",
        Ł: "L",
        Ń: "N",
        Ó: "O",
        Ś: "S",
        Ź: "Z",
        Ż: "Z"
      },
      sv: {
        ä: "a",
        Ä: "A",
        ö: "o",
        Ö: "O"
      },
      sk: {
        ä: "a",
        Ä: "A"
      },
      sr: {
        љ: "lj",
        њ: "nj",
        Љ: "Lj",
        Њ: "Nj",
        đ: "dj",
        Đ: "Dj"
      },
      tr: {
        Ü: "U",
        Ö: "O",
        ü: "u",
        ö: "o"
      }
    }, l = {
      ar: {
        "∆": "delta",
        "∞": "la-nihaya",
        "♥": "hob",
        "&": "wa",
        "|": "aw",
        "<": "aqal-men",
        ">": "akbar-men",
        "∑": "majmou",
        "¤": "omla"
      },
      az: {},
      ca: {
        "∆": "delta",
        "∞": "infinit",
        "♥": "amor",
        "&": "i",
        "|": "o",
        "<": "menys que",
        ">": "mes que",
        "∑": "suma dels",
        "¤": "moneda"
      },
      cs: {
        "∆": "delta",
        "∞": "nekonecno",
        "♥": "laska",
        "&": "a",
        "|": "nebo",
        "<": "mensi nez",
        ">": "vetsi nez",
        "∑": "soucet",
        "¤": "mena"
      },
      de: {
        "∆": "delta",
        "∞": "unendlich",
        "♥": "Liebe",
        "&": "und",
        "|": "oder",
        "<": "kleiner als",
        ">": "groesser als",
        "∑": "Summe von",
        "¤": "Waehrung"
      },
      dv: {
        "∆": "delta",
        "∞": "kolunulaa",
        "♥": "loabi",
        "&": "aai",
        "|": "noonee",
        "<": "ah vure kuda",
        ">": "ah vure bodu",
        "∑": "jumula",
        "¤": "faisaa"
      },
      en: {
        "∆": "delta",
        "∞": "infinity",
        "♥": "love",
        "&": "and",
        "|": "or",
        "<": "less than",
        ">": "greater than",
        "∑": "sum",
        "¤": "currency"
      },
      es: {
        "∆": "delta",
        "∞": "infinito",
        "♥": "amor",
        "&": "y",
        "|": "u",
        "<": "menos que",
        ">": "mas que",
        "∑": "suma de los",
        "¤": "moneda"
      },
      fa: {
        "∆": "delta",
        "∞": "bi-nahayat",
        "♥": "eshgh",
        "&": "va",
        "|": "ya",
        "<": "kamtar-az",
        ">": "bishtar-az",
        "∑": "majmooe",
        "¤": "vahed"
      },
      fi: {
        "∆": "delta",
        "∞": "aarettomyys",
        "♥": "rakkaus",
        "&": "ja",
        "|": "tai",
        "<": "pienempi kuin",
        ">": "suurempi kuin",
        "∑": "summa",
        "¤": "valuutta"
      },
      fr: {
        "∆": "delta",
        "∞": "infiniment",
        "♥": "Amour",
        "&": "et",
        "|": "ou",
        "<": "moins que",
        ">": "superieure a",
        "∑": "somme des",
        "¤": "monnaie"
      },
      ge: {
        "∆": "delta",
        "∞": "usasruloba",
        "♥": "siqvaruli",
        "&": "da",
        "|": "an",
        "<": "naklebi",
        ">": "meti",
        "∑": "jami",
        "¤": "valuta"
      },
      gr: {},
      hu: {
        "∆": "delta",
        "∞": "vegtelen",
        "♥": "szerelem",
        "&": "es",
        "|": "vagy",
        "<": "kisebb mint",
        ">": "nagyobb mint",
        "∑": "szumma",
        "¤": "penznem"
      },
      it: {
        "∆": "delta",
        "∞": "infinito",
        "♥": "amore",
        "&": "e",
        "|": "o",
        "<": "minore di",
        ">": "maggiore di",
        "∑": "somma",
        "¤": "moneta"
      },
      lt: {
        "∆": "delta",
        "∞": "begalybe",
        "♥": "meile",
        "&": "ir",
        "|": "ar",
        "<": "maziau nei",
        ">": "daugiau nei",
        "∑": "suma",
        "¤": "valiuta"
      },
      lv: {
        "∆": "delta",
        "∞": "bezgaliba",
        "♥": "milestiba",
        "&": "un",
        "|": "vai",
        "<": "mazak neka",
        ">": "lielaks neka",
        "∑": "summa",
        "¤": "valuta"
      },
      my: {
        "∆": "kwahkhyaet",
        "∞": "asaonasme",
        "♥": "akhyait",
        "&": "nhin",
        "|": "tho",
        "<": "ngethaw",
        ">": "kyithaw",
        "∑": "paungld",
        "¤": "ngwekye"
      },
      mk: {},
      nl: {
        "∆": "delta",
        "∞": "oneindig",
        "♥": "liefde",
        "&": "en",
        "|": "of",
        "<": "kleiner dan",
        ">": "groter dan",
        "∑": "som",
        "¤": "valuta"
      },
      pl: {
        "∆": "delta",
        "∞": "nieskonczonosc",
        "♥": "milosc",
        "&": "i",
        "|": "lub",
        "<": "mniejsze niz",
        ">": "wieksze niz",
        "∑": "suma",
        "¤": "waluta"
      },
      pt: {
        "∆": "delta",
        "∞": "infinito",
        "♥": "amor",
        "&": "e",
        "|": "ou",
        "<": "menor que",
        ">": "maior que",
        "∑": "soma",
        "¤": "moeda"
      },
      ro: {
        "∆": "delta",
        "∞": "infinit",
        "♥": "dragoste",
        "&": "si",
        "|": "sau",
        "<": "mai mic ca",
        ">": "mai mare ca",
        "∑": "suma",
        "¤": "valuta"
      },
      ru: {
        "∆": "delta",
        "∞": "beskonechno",
        "♥": "lubov",
        "&": "i",
        "|": "ili",
        "<": "menshe",
        ">": "bolshe",
        "∑": "summa",
        "¤": "valjuta"
      },
      sk: {
        "∆": "delta",
        "∞": "nekonecno",
        "♥": "laska",
        "&": "a",
        "|": "alebo",
        "<": "menej ako",
        ">": "viac ako",
        "∑": "sucet",
        "¤": "mena"
      },
      sr: {},
      tr: {
        "∆": "delta",
        "∞": "sonsuzluk",
        "♥": "ask",
        "&": "ve",
        "|": "veya",
        "<": "kucuktur",
        ">": "buyuktur",
        "∑": "toplam",
        "¤": "para birimi"
      },
      uk: {
        "∆": "delta",
        "∞": "bezkinechnist",
        "♥": "lubov",
        "&": "i",
        "|": "abo",
        "<": "menshe",
        ">": "bilshe",
        "∑": "suma",
        "¤": "valjuta"
      },
      vn: {
        "∆": "delta",
        "∞": "vo cuc",
        "♥": "yeu",
        "&": "va",
        "|": "hoac",
        "<": "nho hon",
        ">": "lon hon",
        "∑": "tong",
        "¤": "tien te"
      }
    }, c = [
      ";",
      "?",
      ":",
      "@",
      "&",
      "=",
      "+",
      "$",
      ",",
      "/"
    ].join(""), d = [
      ";",
      "?",
      ":",
      "@",
      "&",
      "=",
      "+",
      "$",
      ","
    ].join(""), p = [
      ".",
      "!",
      "~",
      "*",
      "'",
      "(",
      ")"
    ].join(""), a = function(E, m) {
      var y = "-", S = "", D = "", Z = !0, x = {}, B, ge, oe, Oe, Te, we, X, ce, ye, W, I, ue, Y, J, Q = "";
      if (typeof E != "string") return "";
      if (typeof m == "string" && (y = m), X = l.en, ce = s.en, typeof m == "object") {
        B = m.maintainCase || !1, x = m.custom && typeof m.custom == "object" ? m.custom : x, oe = +m.truncate > 1 && m.truncate || !1, Oe = m.uric || !1, Te = m.uricNoSlash || !1, we = m.mark || !1, Z = !(m.symbols === !1 || m.lang === !1), y = m.separator || y, Oe && (Q += c), Te && (Q += d), we && (Q += p), X = m.lang && l[m.lang] && Z ? l[m.lang] : Z ? l.en : {}, ce = m.lang && s[m.lang] ? s[m.lang] : m.lang === !1 || m.lang === !0 ? {} : s.en, m.titleCase && typeof m.titleCase.length == "number" && Array.prototype.toString.call(m.titleCase) ? (m.titleCase.forEach(function($) {
          x[$ + ""] = $ + "";
        }), ge = !0) : ge = !!m.titleCase, m.custom && typeof m.custom.length == "number" && Array.prototype.toString.call(m.custom) && m.custom.forEach(function($) {
          x[$ + ""] = $ + "";
        }), Object.keys(x).forEach(function($) {
          var ie;
          $.length > 1 ? ie = new RegExp("\\b" + u($) + "\\b", "gi") : ie = new RegExp(u($), "gi"), E = E.replace(ie, x[$]);
        });
        for (I in x) Q += I;
      }
      for (Q += y, Q = u(Q), E = E.replace(/(^\s+|\s+$)/g, ""), Y = !1, J = !1, W = 0, ue = E.length; W < ue; W++)
        I = E[W], h(I, x) ? Y = !1 : ce[I] ? (I = Y && ce[I].match(/[A-Za-z0-9]/) ? " " + ce[I] : ce[I], Y = !1) : I in r ? (W + 1 < ue && o.indexOf(E[W + 1]) >= 0 ? (D += I, I = "") : J === !0 ? (I = i[D] + r[I], D = "") : I = Y && r[I].match(/[A-Za-z0-9]/) ? " " + r[I] : r[I], Y = !1, J = !1) : I in i ? (D += I, I = "", W === ue - 1 && (I = i[D]), J = !0) : X[I] && !(Oe && c.indexOf(I) !== -1) && !(Te && d.indexOf(I) !== -1) ? (I = Y || S.substr(-1).match(/[A-Za-z0-9]/) ? y + X[I] : X[I], I += E[W + 1] !== void 0 && E[W + 1].match(/[A-Za-z0-9]/) ? y : "", Y = !0) : (J === !0 ? (I = i[D] + I, D = "", J = !1) : Y && (/[A-Za-z0-9]/.test(I) || S.substr(-1).match(/A-Za-z0-9]/)) && (I = " " + I), Y = !1), S += I.replace(new RegExp("[^\\w\\s" + Q + "_-]", "g"), y);
      return ge && (S = S.replace(/(\w)(\S*)/g, function($, ie, _e) {
        var ee = ie.toUpperCase() + (_e !== null ? _e : "");
        return Object.keys(x).indexOf(ee.toLowerCase()) < 0 ? ee : ee.toLowerCase();
      })), S = S.replace(/\s+/g, y).replace(new RegExp("\\" + y + "+", "g"), y).replace(new RegExp("(^\\" + y + "+|\\" + y + "+$)", "g"), ""), oe && S.length > oe && (ye = S.charAt(oe) === y, S = S.slice(0, oe), ye || (S = S.slice(0, S.lastIndexOf(y)))), !B && !ge && (S = S.toLowerCase()), S;
    }, f = function(E) {
      return function(y) {
        return a(y, E);
      };
    }, u = function(E) {
      return E.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
    }, h = function(g, E) {
      for (var m in E) if (E[m] === g) return !0;
    };
    if (typeof t < "u" && t.exports)
      t.exports = a, t.exports.createSlug = f;
    else if (typeof define < "u" && define.amd) define([], function() {
      return a;
    });
    else try {
      if (n.getSlug || n.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
      n.getSlug = a, n.createSlug = f;
    } catch {
    }
  })(e);
}));
(/* @__PURE__ */ hn(((e, t) => {
  t.exports = Qo();
})))();
T.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
};
function Jo(e) {
  M.highPerfModeEnabled = e ?? !M.highPerfModeEnabled, !e && j.value && Pn(j.value.app);
}
function ei(e) {
  M.devtoolsClientDetected = {
    ...M.devtoolsClientDetected,
    ...e
  }, Jo(!Object.values(M.devtoolsClientDetected).some(Boolean));
}
T.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= ei;
var ti = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, wn = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new ti();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, ni = class extends wn {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
function ri(e) {
  if ("values" in Object) return Object.values(e);
  const t = [];
  for (const n in e) e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function oi(e, t) {
  const n = ri(e);
  if ("find" in n) return n.find(t);
  const r = n;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t(i)) return i;
  }
}
function Ae(e, t) {
  Object.entries(e).forEach(([n, r]) => t(r, n));
}
function We(e, t) {
  return e.indexOf(t) !== -1;
}
function zt(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r)) return r;
  }
}
var ii = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return oi(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
const si = (e) => Object.prototype.toString.call(e).slice(8, -1), bn = (e) => typeof e > "u", ai = (e) => e === null, Be = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, gt = (e) => Be(e) && Object.keys(e).length === 0, de = (e) => Array.isArray(e), li = (e) => typeof e == "string", ci = (e) => typeof e == "number" && !isNaN(e), ui = (e) => typeof e == "boolean", fi = (e) => e instanceof RegExp, $e = (e) => e instanceof Map, ze = (e) => e instanceof Set, Dn = (e) => si(e) === "Symbol", di = (e) => e instanceof Date && !isNaN(e.valueOf()), pi = (e) => e instanceof Error, jt = (e) => typeof e == "number" && isNaN(e), _i = (e) => ui(e) || ai(e) || bn(e) || ci(e) || li(e) || Dn(e), hi = (e) => typeof e == "bigint", Ei = (e) => e === 1 / 0 || e === -1 / 0, mi = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), gi = (e) => e instanceof URL, kn = (e) => e.replace(/\./g, "\\."), ct = (e) => e.map(String).map(kn).join("."), Me = (e) => {
  const t = [];
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let i = e.charAt(o);
    if (i === "\\" && e.charAt(o + 1) === ".") {
      n += ".", o++;
      continue;
    }
    if (i === ".") {
      t.push(n), n = "";
      continue;
    }
    n += i;
  }
  const r = n;
  return t.push(r), t;
};
function te(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
const Ln = [
  te(bn, "undefined", () => null, () => {
  }),
  te(hi, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  te(di, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  te(pi, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }),
  te(fi, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  te(ze, "set", (e) => [...e.values()], (e) => new Set(e)),
  te($e, "map", (e) => [...e.entries()], (e) => new Map(e)),
  te((e) => jt(e) || Ei(e), "number", (e) => jt(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  te((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  te(gi, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ot(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
const Vn = ot((e, t) => Dn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const r = n.symbolRegistry.getValue(t[1]);
  if (!r) throw new Error("Trying to deserialize unknown symbol");
  return r;
}), Oi = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Un = ot(mi, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = Oi[t[1]];
  if (!n) throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Mn(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
const xn = ot(Mn, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n) return { ...e };
  const r = {};
  return n.forEach((o) => {
    r[o] = e[o];
  }), r;
}, (e, t, n) => {
  const r = n.classRegistry.getValue(t[1]);
  if (!r) throw new Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
  return Object.assign(Object.create(r.prototype), e);
}), Gn = ot((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const r = n.customTransformerRegistry.findByName(t[1]);
  if (!r) throw new Error("Trying to deserialize unknown custom value");
  return r.deserialize(e);
}), Ti = [
  xn,
  Vn,
  Gn,
  Un
], Ht = (e, t) => {
  const n = zt(Ti, (o) => o.isApplicable(e, t));
  if (n) return {
    value: n.transform(e, t),
    type: n.annotation(e, t)
  };
  const r = zt(Ln, (o) => o.isApplicable(e, t));
  if (r) return {
    value: r.transform(e, t),
    type: r.annotation
  };
}, Bn = {};
Ln.forEach((e) => {
  Bn[e.annotation] = e;
});
const yi = (e, t, n) => {
  if (de(t)) switch (t[0]) {
    case "symbol":
      return Vn.untransform(e, t, n);
    case "class":
      return xn.untransform(e, t, n);
    case "custom":
      return Gn.untransform(e, t, n);
    case "typed-array":
      return Un.untransform(e, t, n);
    default:
      throw new Error("Unknown transformation: " + t);
  }
  else {
    const r = Bn[t];
    if (!r) throw new Error("Unknown transformation: " + t);
    return r.untransform(e, n);
  }
}, ve = (e, t) => {
  if (t > e.size) throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function $n(e) {
  if (We(e, "__proto__")) throw new Error("__proto__ is not allowed as a property");
  if (We(e, "prototype")) throw new Error("prototype is not allowed as a property");
  if (We(e, "constructor")) throw new Error("constructor is not allowed as a property");
}
const Ri = (e, t) => {
  $n(t);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ze(e)) e = ve(e, +r);
    else if ($e(e)) {
      const o = +r, i = +t[++n] == 0 ? "key" : "value", s = ve(e, o);
      switch (i) {
        case "key":
          e = s;
          break;
        case "value":
          e = e.get(s);
          break;
      }
    } else e = e[r];
  }
  return e;
}, Ot = (e, t, n) => {
  if ($n(t), t.length === 0) return n(e);
  let r = e;
  for (let i = 0; i < t.length - 1; i++) {
    const s = t[i];
    if (de(r)) {
      const l = +s;
      r = r[l];
    } else if (Be(r)) r = r[s];
    else if (ze(r)) {
      const l = +s;
      r = ve(r, l);
    } else if ($e(r)) {
      if (i === t.length - 2) break;
      const l = +s, c = +t[++i] == 0 ? "key" : "value", d = ve(r, l);
      switch (c) {
        case "key":
          r = d;
          break;
        case "value":
          r = r.get(d);
          break;
      }
    }
  }
  const o = t[t.length - 1];
  if (de(r) ? r[+o] = n(r[+o]) : Be(r) && (r[o] = n(r[o])), ze(r)) {
    const i = ve(r, +o), s = n(i);
    i !== s && (r.delete(i), r.add(s));
  }
  if ($e(r)) {
    const i = +t[t.length - 2], s = ve(r, i);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const l = n(s);
        r.set(l, r.get(s)), l !== s && r.delete(s);
        break;
      }
      case "value":
        r.set(s, n(r.get(s)));
        break;
    }
  }
  return e;
};
function Tt(e, t, n = []) {
  if (!e) return;
  if (!de(e)) {
    Ae(e, (i, s) => Tt(i, t, [...n, ...Me(s)]));
    return;
  }
  const [r, o] = e;
  o && Ae(o, (i, s) => {
    Tt(i, t, [...n, ...Me(s)]);
  }), t(r, n);
}
function Si(e, t, n) {
  return Tt(t, (r, o) => {
    e = Ot(e, o, (i) => yi(i, r, n));
  }), e;
}
function vi(e, t) {
  function n(r, o) {
    const i = Ri(e, Me(o));
    r.map(Me).forEach((s) => {
      e = Ot(e, s, () => i);
    });
  }
  if (de(t)) {
    const [r, o] = t;
    r.forEach((i) => {
      e = Ot(e, Me(i), () => e);
    }), o && Ae(o, n);
  } else Ae(t, n);
  return e;
}
const Ii = (e, t) => Be(e) || de(e) || $e(e) || ze(e) || Mn(e, t);
function Ni(e, t, n) {
  const r = n.get(e);
  r ? r.push(t) : n.set(e, [t]);
}
function Ai(e, t) {
  const n = {};
  let r;
  return e.forEach((o) => {
    if (o.length <= 1) return;
    t || (o = o.map((l) => l.map(String)).sort((l, c) => l.length - c.length));
    const [i, ...s] = o;
    i.length === 0 ? r = s.map(ct) : n[ct(i)] = s.map(ct);
  }), r ? gt(n) ? [r] : [r, n] : gt(n) ? void 0 : n;
}
const zn = (e, t, n, r, o = [], i = [], s = /* @__PURE__ */ new Map()) => {
  const l = _i(e);
  if (!l) {
    Ni(e, o, t);
    const u = s.get(e);
    if (u) return r ? { transformedValue: null } : u;
  }
  if (!Ii(e, n)) {
    const u = Ht(e, n), h = u ? {
      transformedValue: u.value,
      annotations: [u.type]
    } : { transformedValue: e };
    return l || s.set(e, h), h;
  }
  if (We(i, e)) return { transformedValue: null };
  const c = Ht(e, n), d = c?.value ?? e, p = de(d) ? [] : {}, a = {};
  Ae(d, (u, h) => {
    if (h === "__proto__" || h === "constructor" || h === "prototype") throw new Error(`Detected property ${h}. This is a prototype pollution risk, please remove it from your object.`);
    const g = zn(u, t, n, r, [...o, h], [...i, e], s);
    p[h] = g.transformedValue, de(g.annotations) ? a[h] = g.annotations : Be(g.annotations) && Ae(g.annotations, (E, m) => {
      a[kn(h) + "." + m] = E;
    });
  });
  const f = gt(a) ? {
    transformedValue: p,
    annotations: c ? [c.type] : void 0
  } : {
    transformedValue: p,
    annotations: c ? [c.type, a] : a
  };
  return l || s.set(e, f), f;
};
function jn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ft(e) {
  return jn(e) === "Array";
}
function Ci(e) {
  if (jn(e) !== "Object") return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Pi(e, t, n, r, o) {
  const i = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), o && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function yt(e, t = {}) {
  if (Ft(e)) return e.map((o) => yt(o, t));
  if (!Ci(e)) return e;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
  return [...n, ...r].reduce((o, i) => {
    if (Ft(t.props) && !t.props.includes(i)) return o;
    const s = e[i];
    return Pi(o, i, yt(s, t), e, t.nonenumerable), o;
  }, {});
}
var w = class {
  /**
  * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
  */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new ni(), this.symbolRegistry = new wn((t) => t.description ?? ""), this.customTransformerRegistry = new ii(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = zn(e, t, this, this.dedupe), r = { json: n.transformedValue };
    n.annotations && (r.meta = {
      ...r.meta,
      values: n.annotations
    });
    const o = Ai(t, this.dedupe);
    return o && (r.meta = {
      ...r.meta,
      referentialEqualities: o
    }), r;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let r = yt(t);
    return n?.values && (r = Si(r, n.values, this)), n?.referentialEqualities && (r = vi(r, n.referentialEqualities)), r;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
w.defaultInstance = new w();
w.serialize = w.defaultInstance.serialize.bind(w.defaultInstance);
w.deserialize = w.defaultInstance.deserialize.bind(w.defaultInstance);
w.stringify = w.defaultInstance.stringify.bind(w.defaultInstance);
w.parse = w.defaultInstance.parse.bind(w.defaultInstance);
w.registerClass = w.defaultInstance.registerClass.bind(w.defaultInstance);
w.registerSymbol = w.defaultInstance.registerSymbol.bind(w.defaultInstance);
w.registerCustom = w.defaultInstance.registerCustom.bind(w.defaultInstance);
w.allowErrorProps = w.defaultInstance.allowErrorProps.bind(w.defaultInstance);
T.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ ??= [];
T.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ ??= null;
T.__VUE_DEVTOOLS_KIT_RPC_SERVER__ ??= null;
T.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ ??= null;
T.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ ??= null;
T.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ ??= null;
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
const Hn = /#/g, wi = /&/g, bi = /\//g, Di = /=/g, ki = /\?/g, Fn = /\+/g, Li = /%5B/g, Vi = /%5D/g, Kn = /%5E/g, Ui = /%60/g, qn = /%7B/g, Mi = /%7C/g, Wn = /%7D/g, xi = /%20/g;
function Ut(e) {
  return e == null ? "" : encodeURI("" + e).replace(Mi, "|").replace(Li, "[").replace(Vi, "]");
}
function Gi(e) {
  return Ut(e).replace(qn, "{").replace(Wn, "}").replace(Kn, "^");
}
function Rt(e) {
  return Ut(e).replace(Fn, "%2B").replace(xi, "+").replace(Hn, "%23").replace(wi, "%26").replace(Ui, "`").replace(qn, "{").replace(Wn, "}").replace(Kn, "^");
}
function Bi(e) {
  return Rt(e).replace(Di, "%3D");
}
function $i(e) {
  return Ut(e).replace(Hn, "%23").replace(ki, "%3F");
}
function zi(e) {
  return $i(e).replace(bi, "%2F");
}
function je(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const ji = /\/$/, Hi = (e) => e.replace(ji, "");
function ut(e, t, n = "/") {
  let r, o = {}, i = "", s = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return c = l >= 0 && c > l ? -1 : c, c >= 0 && (r = t.slice(0, c), i = t.slice(c, l > 0 ? l : t.length), o = e(i.slice(1))), l >= 0 && (r = r || t.slice(0, l), s = t.slice(l, t.length)), r = Wi(r ?? t, n), {
    fullPath: r + i + s,
    path: r,
    query: o,
    hash: je(s)
  };
}
function Fi(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Kt(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Ki(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && pe(t.matched[r], n.matched[o]) && Yn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function pe(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Yn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!qi(e[n], t[n])) return !1;
  return !0;
}
function qi(e, t) {
  return q(e) ? qt(e, t) : q(t) ? qt(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function qt(e, t) {
  return q(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function Wi(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let i = n.length - 1, s, l;
  for (s = 0; s < r.length; s++)
    if (l = r[s], l !== ".")
      if (l === "..")
        i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + r.slice(s).join("/");
}
const se = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
let Je = /* @__PURE__ */ (function(e) {
  return e.pop = "pop", e.push = "push", e;
})({}), xe = /* @__PURE__ */ (function(e) {
  return e.back = "back", e.forward = "forward", e.unknown = "", e;
})({});
const ft = "";
function Zn(e) {
  if (!e) if (ae) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Hi(e);
}
const Yi = /^[^#]+#/;
function Xn(e, t) {
  return e.replace(Yi, "#") + t;
}
function Zi(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const it = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function Xi(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o)
      return;
    t = Zi(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Wt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const St = /* @__PURE__ */ new Map();
function Qi(e, t) {
  St.set(e, t);
}
function Ji(e) {
  const t = St.get(e);
  return St.delete(e), t;
}
function Qn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Jn(e) {
  return typeof e == "string" || typeof e == "symbol";
}
function er(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const o = n[r].replace(Fn, " "), i = o.indexOf("="), s = je(i < 0 ? o : o.slice(0, i)), l = i < 0 ? null : je(o.slice(i + 1));
    if (s in t) {
      let c = t[s];
      q(c) || (c = t[s] = [c]), c.push(l);
    } else t[s] = l;
  }
  return t;
}
function vt(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = Bi(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (q(r) ? r.map((o) => o && Rt(o)) : [r && Rt(r)]).forEach((o) => {
      o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
    });
  }
  return t;
}
function es(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = q(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
function De() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const o = e.indexOf(r);
      o > -1 && e.splice(o, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function tr(e, t, n) {
  const r = e.value;
  if (!r)
    return;
  let o = r;
  const i = () => {
    o[t].delete(n);
  };
  Er(i), mr(i), gr(() => {
    const s = e.value;
    s && (o = s), o[t].add(n);
  }), o[t].add(n);
}
function ts(e) {
  tr(le(et, {}), "leaveGuards", e);
}
function ns(e) {
  tr(le(et, {}), "updateGuards", e);
}
function fe(e, t, n, r, o, i = (s) => s()) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((l, c) => {
    const d = (f) => {
      f === !1 ? c(Ie(k.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : f instanceof Error ? c(f) : Qn(f) ? c(Ie(k.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: f
      })) : (s && r.enterCallbacks[o] === s && typeof f == "function" && s.push(f), l());
    }, p = i(() => e.call(r && r.instances[o], t, n, d));
    let a = Promise.resolve(p);
    e.length < 3 && (a = a.then(d)), a.catch((f) => c(f));
  });
}
function dt(e, t, n, r, o = (i) => i()) {
  const i = [];
  for (const s of e)
    for (const l in s.components) {
      let c = s.components[l];
      if (!(t !== "beforeRouteEnter" && !s.instances[l]))
        if (cn(c)) {
          const d = (c.__vccOpts || c)[t];
          d && i.push(fe(d, n, r, s, l, o));
        } else {
          let d = c();
          i.push(() => d.then((p) => {
            if (!p) throw new Error(`Couldn't resolve component "${l}" at "${s.path}"`);
            const a = un(p) ? p.default : p;
            s.mods[l] = p, s.components[l] = a;
            const f = (a.__vccOpts || a)[t];
            return f && fe(f, n, r, s, l, o)();
          }));
        }
    }
  return i;
}
function rs(e) {
  return e.matched.every((t) => t.redirect) ? Promise.reject(/* @__PURE__ */ new Error("Cannot load a route that redirects.")) : Promise.all(e.matched.map((t) => t.components && Promise.all(Object.keys(t.components).reduce((n, r) => {
    const o = t.components[r];
    return typeof o == "function" && !("displayName" in o) && n.push(o().then((i) => {
      if (!i) return Promise.reject(/* @__PURE__ */ new Error(`Couldn't resolve component "${r}" at "${t.path}". Ensure you passed a function that returns a promise.`));
      const s = un(i) ? i.default : i;
      t.mods[r] = i, t.components[r] = s;
    })), n;
  }, [])))).then(() => e);
}
function os(e, t) {
  const n = [], r = [], o = [], i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((d) => pe(d, l)) ? r.push(l) : n.push(l));
    const c = e.matched[s];
    c && (t.matched.find((d) => pe(d, c)) || o.push(c));
  }
  return [
    n,
    r,
    o
  ];
}
function ke(e, t) {
  const n = P({}, e, { matched: e.matched.map((r) => hs(r, [
    "instances",
    "children",
    "aliasOf"
  ])) });
  return { _custom: {
    type: null,
    readOnly: !0,
    display: e.fullPath,
    tooltip: t,
    value: n
  } };
}
function Ke(e) {
  return { _custom: { display: e } };
}
let is = 0;
function ss(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const r = is++;
  Ko({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (o) => {
    o.on.inspectComponent((p) => {
      p.instanceData && p.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: ke(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: p, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const f = a.__vrv_devtools;
        p.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: nr
        });
      }
      q(a.__vrl_devtools) && (a.__devtoolsApi = o, a.__vrl_devtools.forEach((f) => {
        let u = f.route.path, h = ir, g = "", E = 0;
        f.error ? (u = f.error, h = fs, E = ds) : f.isExactActive ? (h = or, g = "This is exactly active") : f.isActive && (h = rr, g = "This link is active"), p.tags.push({
          label: u,
          textColor: E,
          tooltip: g,
          backgroundColor: h
        });
      }));
    }), on(t.currentRoute, () => {
      c(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
    });
    const i = "router:navigations:" + r;
    o.addTimelineLayer({
      id: i,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((p, a) => {
      o.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: a.fullPath,
          logType: "error",
          time: o.now(),
          data: { error: p },
          groupId: a.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((p, a) => {
      const f = {
        guard: Ke("beforeEach"),
        from: ke(a, "Current Location during this navigation"),
        to: ke(p, "Target location")
      };
      Object.defineProperty(p.meta, "__navigationId", { value: s++ }), o.addTimelineEvent({
        layerId: i,
        event: {
          time: o.now(),
          title: "Start of navigation",
          subtitle: p.fullPath,
          data: f,
          groupId: p.meta.__navigationId
        }
      });
    }), t.afterEach((p, a, f) => {
      const u = { guard: Ke("afterEach") };
      f ? (u.failure = { _custom: {
        type: Error,
        readOnly: !0,
        display: f ? f.message : "",
        tooltip: "Navigation Failure",
        value: f
      } }, u.status = Ke("❌")) : u.status = Ke("✅"), u.from = ke(a, "Current Location during this navigation"), u.to = ke(p, "Target location"), o.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: p.fullPath,
          time: o.now(),
          data: u,
          logType: f ? "warning" : "default",
          groupId: p.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + r;
    o.addInspector({
      id: l,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!d) return;
      const p = d;
      let a = n.getRoutes().filter((f) => !f.parent || !f.parent.record.components);
      a.forEach(lr), p.filter && (a = a.filter((f) => It(f, p.filter.toLowerCase()))), a.forEach((f) => ar(f, t.currentRoute.value)), p.rootNodes = a.map(sr);
    }
    let d;
    o.on.getInspectorTree((p) => {
      d = p, p.app === e && p.inspectorId === l && c();
    }), o.on.getInspectorState((p) => {
      if (p.app === e && p.inspectorId === l) {
        const a = n.getRoutes().find((f) => f.record.__vd_id === p.nodeId);
        a && (p.state = { options: ls(a) });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function as(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ls(e) {
  const { record: t } = e, n = [{
    editable: !1,
    key: "path",
    value: t.path
  }];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({
    editable: !1,
    key: "regexp",
    value: e.re
  }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.keys.map((r) => `${r.name}${as(r)}`).join(" "),
      tooltip: "Param keys",
      value: e.keys
    } }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: { _custom: {
      type: null,
      readOnly: !0,
      display: e.score.map((r) => r.join(", ")).join(" | "),
      tooltip: "Score used to sort routes",
      value: e.score
    } }
  }), n;
}
const nr = 15485081, rr = 2450411, or = 8702998, cs = 2282478, ir = 16486972, us = 6710886, fs = 16704226, ds = 12131356;
function sr(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: cs
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: ir
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: nr
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: or
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: rr
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: us
  });
  let r = n.__vd_id;
  return r == null && (r = String(ps++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(sr)
  };
}
let ps = 0;
const _s = /^\/(.*)\/([a-z]*)$/;
function ar(e, t) {
  const n = t.matched.length && pe(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => pe(r, e.record))), e.children.forEach((r) => ar(r, t));
}
function lr(e) {
  e.__vd_match = !1, e.children.forEach(lr);
}
function It(e, t) {
  const n = String(e.re).match(_s);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => It(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), o = je(r);
  return !t.startsWith("/") && (o.includes(t) || r.includes(t)) || o.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => It(i, t));
}
function hs(e, t) {
  const n = {};
  for (const r in e) t.includes(r) || (n[r] = e[r]);
  return n;
}
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
let Es = () => location.protocol + "//" + location.host;
function cr(e, t) {
  const { pathname: n, search: r, hash: o } = t, i = e.indexOf("#");
  if (i > -1) {
    let s = o.includes(e.slice(i)) ? e.slice(i).length : 1, l = o.slice(s);
    return l[0] !== "/" && (l = "/" + l), Kt(l, "");
  }
  return Kt(n, e) + r + o;
}
function ms(e, t, n, r) {
  let o = [], i = [], s = null;
  const l = ({ state: f }) => {
    const u = cr(e, location), h = n.value, g = t.value;
    let E = 0;
    if (f) {
      if (n.value = u, t.value = f, s && s === h) {
        s = null;
        return;
      }
      E = g ? f.position - g.position : 0;
    } else r(u);
    o.forEach((m) => {
      m(n.value, h, {
        delta: E,
        type: Je.pop,
        direction: E ? E > 0 ? xe.forward : xe.back : xe.unknown
      });
    });
  };
  function c() {
    s = n.value;
  }
  function d(f) {
    o.push(f);
    const u = () => {
      const h = o.indexOf(f);
      h > -1 && o.splice(h, 1);
    };
    return i.push(u), u;
  }
  function p() {
    if (document.visibilityState === "hidden") {
      const { history: f } = window;
      if (!f.state) return;
      f.replaceState(P({}, f.state, { scroll: it() }), "");
    }
  }
  function a() {
    for (const f of i) f();
    i = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", p), document.removeEventListener("visibilitychange", p);
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", p), document.addEventListener("visibilitychange", p), {
    pauseListeners: c,
    listen: d,
    destroy: a
  };
}
function Yt(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? it() : null
  };
}
function gs(e) {
  const { history: t, location: n } = window, r = { value: cr(e, n) }, o = { value: t.state };
  o.value || i(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function i(c, d, p) {
    const a = e.indexOf("#"), f = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + c : Es() + e + c;
    try {
      t[p ? "replaceState" : "pushState"](d, "", f), o.value = d;
    } catch (u) {
      console.error(u), n[p ? "replace" : "assign"](f);
    }
  }
  function s(c, d) {
    i(c, P({}, t.state, Yt(o.value.back, c, o.value.forward, !0), d, { position: o.value.position }), !0), r.value = c;
  }
  function l(c, d) {
    const p = P({}, o.value, t.state, {
      forward: c,
      scroll: it()
    });
    i(p.current, p, !0), i(c, P({}, Yt(r.value, c, null), { position: p.position + 1 }, d), !1), r.value = c;
  }
  return {
    location: r,
    state: o,
    push: l,
    replace: s
  };
}
function ur(e) {
  e = Zn(e);
  const t = gs(e), n = ms(e, t.state, t.location, t.replace);
  function r(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const o = P({
    location: "",
    base: e,
    go: r,
    createHref: Xn.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Os(e = "") {
  let t = [], n = [[ft, {}]], r = 0;
  e = Zn(e);
  function o(l, c = {}) {
    r++, r !== n.length && n.splice(r), n.push([l, c]);
  }
  function i(l, c, { direction: d, delta: p }) {
    const a = {
      direction: d,
      delta: p,
      type: Je.pop
    };
    for (const f of t) f(l, c, a);
  }
  const s = {
    location: ft,
    state: {},
    base: e,
    createHref: Xn.bind(null, e),
    replace(l, c) {
      n.splice(r--, 1), o(l, c);
    },
    push(l, c) {
      o(l, c);
    },
    listen(l) {
      return t.push(l), () => {
        const c = t.indexOf(l);
        c > -1 && t.splice(c, 1);
      };
    },
    destroy() {
      t = [], n = [[ft, {}]], r = 0;
    },
    go(l, c = !0) {
      const d = this.location, p = l < 0 ? xe.back : xe.forward;
      r = Math.max(0, Math.min(r + l, n.length - 1)), c && i(this.location, d, {
        direction: p,
        delta: l
      });
    }
  };
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => n[r][0]
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => n[r][1]
  }), s;
}
function Ts(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), ur(e);
}
let he = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var U = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(U || {});
const ys = {
  type: he.Static,
  value: ""
}, Rs = /[a-zA-Z0-9_]/;
function Ss(e) {
  if (!e) return [[]];
  if (e === "/") return [[ys]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(u) {
    throw new Error(`ERR (${n})/"${d}": ${u}`);
  }
  let n = U.Static, r = n;
  const o = [];
  let i;
  function s() {
    i && o.push(i), i = [];
  }
  let l = 0, c, d = "", p = "";
  function a() {
    d && (n === U.Static ? i.push({
      type: he.Static,
      value: d
    }) : n === U.Param || n === U.ParamRegExp || n === U.ParamRegExpEnd ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: he.Param,
      value: d,
      regexp: p,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), d = "");
  }
  function f() {
    d += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== U.ParamRegExp) {
      r = n, n = U.EscapeNext;
      continue;
    }
    switch (n) {
      case U.Static:
        c === "/" ? (d && a(), s()) : c === ":" ? (a(), n = U.Param) : f();
        break;
      case U.EscapeNext:
        f(), n = r;
        break;
      case U.Param:
        c === "(" ? n = U.ParamRegExp : Rs.test(c) ? f() : (a(), n = U.Static, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case U.ParamRegExp:
        c === ")" ? p[p.length - 1] == "\\" ? p = p.slice(0, -1) + c : n = U.ParamRegExpEnd : p += c;
        break;
      case U.ParamRegExpEnd:
        a(), n = U.Static, c !== "*" && c !== "?" && c !== "+" && l--, p = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === U.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`), a(), s(), o;
}
const Zt = "[^/]+?", vs = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var z = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(z || {});
const Is = /[.+*?^${}()[\]/\\]/g;
function Ns(e, t) {
  const n = P({}, vs, t), r = [];
  let o = n.start ? "^" : "";
  const i = [];
  for (const d of e) {
    const p = d.length ? [] : [z.Root];
    n.strict && !d.length && (o += "/");
    for (let a = 0; a < d.length; a++) {
      const f = d[a];
      let u = z.Segment + (n.sensitive ? z.BonusCaseSensitive : 0);
      if (f.type === he.Static)
        a || (o += "/"), o += f.value.replace(Is, "\\$&"), u += z.Static;
      else if (f.type === he.Param) {
        const { value: h, repeatable: g, optional: E, regexp: m } = f;
        i.push({
          name: h,
          repeatable: g,
          optional: E
        });
        const y = m || Zt;
        if (y !== Zt) {
          u += z.BonusCustomRegExp;
          try {
            new RegExp(`(${y})`);
          } catch (D) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${y}): ` + D.message);
          }
        }
        let S = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        a || (S = E && d.length < 2 ? `(?:/${S})` : "/" + S), E && (S += "?"), o += S, u += z.Dynamic, E && (u += z.BonusOptional), g && (u += z.BonusRepeatable), y === ".*" && (u += z.BonusWildcard);
      }
      p.push(u);
    }
    r.push(p);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += z.BonusStrict;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const s = new RegExp(o, n.sensitive ? "" : "i");
  function l(d) {
    const p = d.match(s), a = {};
    if (!p) return null;
    for (let f = 1; f < p.length; f++) {
      const u = p[f] || "", h = i[f - 1];
      a[h.name] = u && h.repeatable ? u.split("/") : u;
    }
    return a;
  }
  function c(d) {
    let p = "", a = !1;
    for (const f of e) {
      (!a || !p.endsWith("/")) && (p += "/"), a = !1;
      for (const u of f) if (u.type === he.Static) p += u.value;
      else if (u.type === he.Param) {
        const { value: h, repeatable: g, optional: E } = u, m = h in d ? d[h] : "";
        if (q(m) && !g) throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
        const y = q(m) ? m.join("/") : m;
        if (!y) if (E)
          f.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : a = !0);
        else throw new Error(`Missing required param "${h}"`);
        p += y;
      }
    }
    return p || "/";
  }
  return {
    re: s,
    score: r,
    keys: i,
    parse: l,
    stringify: c
  };
}
function As(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === z.Static + z.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === z.Static + z.Segment ? 1 : -1 : 0;
}
function fr(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const i = As(r[n], o[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Xt(r)) return 1;
    if (Xt(o)) return -1;
  }
  return o.length - r.length;
}
function Xt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Cs = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Ps(e, t, n) {
  const r = Ns(Ss(e.path), n), o = P(r, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function dr(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Mt(Cs, t);
  function o(a) {
    return r.get(a);
  }
  function i(a, f, u) {
    const h = !u, g = Jt(a);
    g.aliasOf = u && u.record;
    const E = Mt(t, a), m = [g];
    if ("alias" in a) {
      const D = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const Z of D) m.push(Jt(P({}, g, {
        components: u ? u.record.components : g.components,
        path: Z,
        aliasOf: u ? u.record : g
      })));
    }
    let y, S;
    for (const D of m) {
      const { path: Z } = D;
      if (f && Z[0] !== "/") {
        const x = f.record.path, B = x[x.length - 1] === "/" ? "" : "/";
        D.path = f.record.path + (Z && B + Z);
      }
      if (y = Ps(D, f, E), u ? u.alias.push(y) : (S = S || y, S !== y && S.alias.push(y), h && a.name && !en(y) && s(a.name)), pr(y) && c(y), g.children) {
        const x = g.children;
        for (let B = 0; B < x.length; B++) i(x[B], y, u && u.children[B]);
      }
      u = u || y;
    }
    return S ? () => {
      s(S);
    } : Ve;
  }
  function s(a) {
    if (Jn(a)) {
      const f = r.get(a);
      f && (r.delete(a), n.splice(n.indexOf(f), 1), f.children.forEach(s), f.alias.forEach(s));
    } else {
      const f = n.indexOf(a);
      f > -1 && (n.splice(f, 1), a.record.name && r.delete(a.record.name), a.children.forEach(s), a.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function c(a) {
    const f = Ds(a, n);
    n.splice(f, 0, a), a.record.name && !en(a) && r.set(a.record.name, a);
  }
  function d(a, f) {
    let u, h = {}, g, E;
    if ("name" in a && a.name) {
      if (u = r.get(a.name), !u) throw Ie(k.MATCHER_NOT_FOUND, { location: a });
      E = u.record.name, h = P(Qt(f.params, u.keys.filter((S) => !S.optional).concat(u.parent ? u.parent.keys.filter((S) => S.optional) : []).map((S) => S.name)), a.params && Qt(a.params, u.keys.map((S) => S.name))), g = u.stringify(h);
    } else if (a.path != null)
      g = a.path, u = n.find((S) => S.re.test(g)), u && (h = u.parse(g), E = u.record.name);
    else {
      if (u = f.name ? r.get(f.name) : n.find((S) => S.re.test(f.path)), !u) throw Ie(k.MATCHER_NOT_FOUND, {
        location: a,
        currentLocation: f
      });
      E = u.record.name, h = P({}, f.params, a.params), g = u.stringify(h);
    }
    const m = [];
    let y = u;
    for (; y; )
      m.unshift(y.record), y = y.parent;
    return {
      name: E,
      path: g,
      params: h,
      matched: m,
      meta: bs(m)
    };
  }
  e.forEach((a) => i(a));
  function p() {
    n.length = 0, r.clear();
  }
  return {
    addRoute: i,
    resolve: d,
    removeRoute: s,
    clearRoutes: p,
    getRoutes: l,
    getRecordMatcher: o
  };
}
function Qt(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Jt(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: ws(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function ws(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function en(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function bs(e) {
  return e.reduce((t, n) => P(t, n.meta), {});
}
function Ds(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const i = n + r >> 1;
    fr(e, t[i]) < 0 ? r = i : n = i + 1;
  }
  const o = ks(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function ks(e) {
  let t = e;
  for (; t = t.parent; ) if (pr(t) && fr(e, t) === 0) return t;
}
function pr({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Nt(e) {
  const t = le(He), n = le(tt), r = re(() => {
    const c = Se(e.to);
    return t.resolve(c);
  }), o = re(() => {
    const { matched: c } = r.value, { length: d } = c, p = c[d - 1], a = n.matched;
    if (!p || !a.length) return -1;
    const f = a.findIndex(pe.bind(null, p));
    if (f > -1) return f;
    const u = tn(c[d - 2]);
    return d > 1 && tn(p) === u && a[a.length - 1].path !== u ? a.findIndex(pe.bind(null, c[d - 2])) : f;
  }), i = re(() => o.value > -1 && Ms(n.params, r.value.params)), s = re(() => o.value > -1 && o.value === n.matched.length - 1 && Yn(n.params, r.value.params));
  function l(c = {}) {
    if (Us(c)) {
      const d = t[Se(e.replace) ? "replace" : "push"](Se(e.to)).catch(Ve);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (ae) {
    const c = Rr();
    if (c) {
      const d = {
        route: r.value,
        isActive: i.value,
        isExactActive: s.value,
        error: null
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), Sr(() => {
        d.route = r.value, d.isActive = i.value, d.isExactActive = s.value, d.error = Qn(Se(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: re(() => r.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l
  };
}
function Ls(e) {
  return e.length === 1 ? e[0] : e;
}
const Vs = /* @__PURE__ */ sn({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Nt,
  setup(e, { slots: t }) {
    const n = Or(Nt(e)), { options: r } = le(He), o = re(() => ({
      [nn(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [nn(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const i = t.default && Ls(t.default(n));
      return e.custom ? i : an("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: o.value
      }, i);
    };
  }
}), _r = Vs;
function Us(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Ms(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!q(o) || o.length !== r.length || r.some((i, s) => i.valueOf() !== o[s].valueOf())) return !1;
  }
  return !0;
}
function tn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const nn = (e, t, n) => e ?? t ?? n, xs = /* @__PURE__ */ sn({
  name: "RouterView",
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = le(Ye), o = re(() => e.route || r.value), i = le(pt, 0), s = re(() => {
      let d = Se(i);
      const { matched: p } = o.value;
      let a;
      for (; (a = p[d]) && !a.components; ) d++;
      return d;
    }), l = re(() => o.value.matched[s.value]);
    st(pt, re(() => s.value + 1)), st(et, l), st(Ye, o);
    const c = Tr();
    return on(() => [
      c.value,
      l.value,
      e.name
    ], ([d, p, a], [f, u, h]) => {
      p && (p.instances[a] = d, u && u !== p && d && d === f && (p.leaveGuards.size || (p.leaveGuards = u.leaveGuards), p.updateGuards.size || (p.updateGuards = u.updateGuards))), d && p && (!u || !pe(p, u) || !f) && (p.enterCallbacks[a] || []).forEach((g) => g(d));
    }, { flush: "post" }), () => {
      const d = o.value, p = e.name, a = l.value, f = a && a.components[p];
      if (!f) return rn(n.default, {
        Component: f,
        route: d
      });
      const u = a.props[p], h = u ? u === !0 ? d.params : typeof u == "function" ? u(d) : u : null, E = an(f, P({}, h, t, {
        onVnodeUnmounted: (m) => {
          m.component.isUnmounted && (a.instances[p] = null);
        },
        ref: c
      }));
      if (ae && E.ref) {
        const m = {
          depth: s.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (q(E.ref) ? E.ref.map((y) => y.i) : [E.ref.i]).forEach((y) => {
          y.__vrv_devtools = m;
        });
      }
      return rn(n.default, {
        Component: E,
        route: d
      }) || E;
    };
  }
});
function rn(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const hr = xs;
function Gs(e) {
  const t = dr(e.routes, e), n = e.parseQuery || er, r = e.stringifyQuery || vt, o = e.history, i = De(), s = De(), l = De(), c = yr(se);
  let d = se;
  ae && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p = at.bind(null, (_) => "" + _), a = at.bind(null, zi), f = at.bind(null, je);
  function u(_, R) {
    let O, v;
    return Jn(_) ? (O = t.getRecordMatcher(_), v = R) : v = _, t.addRoute(v, O);
  }
  function h(_) {
    const R = t.getRecordMatcher(_);
    R && t.removeRoute(R);
  }
  function g() {
    return t.getRoutes().map((_) => _.record);
  }
  function E(_) {
    return !!t.getRecordMatcher(_);
  }
  function m(_, R) {
    if (R = P({}, R || c.value), typeof _ == "string") {
      const N = ut(n, _, R.path), V = t.resolve({ path: N.path }, R), be = o.createHref(N.fullPath);
      return P(N, V, {
        params: f(V.params),
        redirectedFrom: void 0,
        href: be
      });
    }
    let O;
    if (_.path != null)
      O = P({}, _, { path: ut(n, _.path, R.path).path });
    else {
      const N = P({}, _.params);
      for (const V in N) N[V] == null && delete N[V];
      O = P({}, _, { params: a(N) }), R.params = a(R.params);
    }
    const v = t.resolve(O, R), C = _.hash || "";
    v.params = p(f(v.params));
    const L = Fi(r, P({}, _, {
      hash: Gi(C),
      path: v.path
    })), A = o.createHref(L);
    return P({
      fullPath: L,
      hash: C,
      query: r === vt ? es(_.query) : _.query || {}
    }, v, {
      redirectedFrom: void 0,
      href: A
    });
  }
  function y(_) {
    return typeof _ == "string" ? ut(n, _, c.value.path) : P({}, _);
  }
  function S(_, R) {
    if (d !== _) return Ie(k.NAVIGATION_CANCELLED, {
      from: R,
      to: _
    });
  }
  function D(_) {
    return B(_);
  }
  function Z(_) {
    return D(P(y(_), { replace: !0 }));
  }
  function x(_, R) {
    const O = _.matched[_.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: v } = O;
      let C = typeof v == "function" ? v(_, R) : v;
      return typeof C == "string" && (C = C.includes("?") || C.includes("#") ? C = y(C) : { path: C }, C.params = {}), P({
        query: _.query,
        hash: _.hash,
        params: C.path != null ? {} : _.params
      }, C);
    }
  }
  function B(_, R) {
    const O = d = m(_), v = c.value, C = _.state, L = _.force, A = _.replace === !0, N = x(O, v);
    if (N) return B(P(y(N), {
      state: typeof N == "object" ? P({}, C, N.state) : C,
      force: L,
      replace: A
    }), R || O);
    const V = O;
    V.redirectedFrom = R;
    let be;
    return !L && Ki(r, v, O) && (be = Ie(k.NAVIGATION_DUPLICATED, {
      to: V,
      from: v
    }), Q(v, v, !0, !1)), (be ? Promise.resolve(be) : Oe(V, v)).catch((H) => ne(H) ? ne(H, k.NAVIGATION_GUARD_REDIRECT) ? H : J(H) : ue(H, V, v)).then((H) => {
      if (H) {
        if (ne(H, k.NAVIGATION_GUARD_REDIRECT))
          return B(P({ replace: A }, y(H.to), {
            state: typeof H.to == "object" ? P({}, C, H.to.state) : C,
            force: L
          }), R || V);
      } else H = we(V, v, !0, A, C);
      return Te(V, v, H), H;
    });
  }
  function ge(_, R) {
    const O = S(_, R);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function oe(_) {
    const R = _e.values().next().value;
    return R && typeof R.runWithContext == "function" ? R.runWithContext(_) : _();
  }
  function Oe(_, R) {
    let O;
    const [v, C, L] = os(_, R);
    O = dt(v.reverse(), "beforeRouteLeave", _, R);
    for (const N of v) N.leaveGuards.forEach((V) => {
      O.push(fe(V, _, R));
    });
    const A = ge.bind(null, _, R);
    return O.push(A), Re(O).then(() => {
      O = [];
      for (const N of i.list()) O.push(fe(N, _, R));
      return O.push(A), Re(O);
    }).then(() => {
      O = dt(C, "beforeRouteUpdate", _, R);
      for (const N of C) N.updateGuards.forEach((V) => {
        O.push(fe(V, _, R));
      });
      return O.push(A), Re(O);
    }).then(() => {
      O = [];
      for (const N of L) if (N.beforeEnter) if (q(N.beforeEnter)) for (const V of N.beforeEnter) O.push(fe(V, _, R));
      else O.push(fe(N.beforeEnter, _, R));
      return O.push(A), Re(O);
    }).then(() => (_.matched.forEach((N) => N.enterCallbacks = {}), O = dt(L, "beforeRouteEnter", _, R, oe), O.push(A), Re(O))).then(() => {
      O = [];
      for (const N of s.list()) O.push(fe(N, _, R));
      return O.push(A), Re(O);
    }).catch((N) => ne(N, k.NAVIGATION_CANCELLED) ? N : Promise.reject(N));
  }
  function Te(_, R, O) {
    l.list().forEach((v) => oe(() => v(_, R, O)));
  }
  function we(_, R, O, v, C) {
    const L = S(_, R);
    if (L) return L;
    const A = R === se, N = ae ? history.state : {};
    O && (v || A ? o.replace(_.fullPath, P({ scroll: A && N && N.scroll }, C)) : o.push(_.fullPath, C)), c.value = _, Q(_, R, O, A), J();
  }
  let X;
  function ce() {
    X || (X = o.listen((_, R, O) => {
      if (!ee.listening) return;
      const v = m(_), C = x(v, ee.currentRoute.value);
      if (C) {
        B(P(C, {
          replace: !0,
          force: !0
        }), v).catch(Ve);
        return;
      }
      d = v;
      const L = c.value;
      ae && Qi(Wt(L.fullPath, O.delta), it()), Oe(v, L).catch((A) => ne(A, k.NAVIGATION_ABORTED | k.NAVIGATION_CANCELLED) ? A : ne(A, k.NAVIGATION_GUARD_REDIRECT) ? (B(P(y(A.to), { force: !0 }), v).then((N) => {
        ne(N, k.NAVIGATION_ABORTED | k.NAVIGATION_DUPLICATED) && !O.delta && O.type === Je.pop && o.go(-1, !1);
      }).catch(Ve), Promise.reject()) : (O.delta && o.go(-O.delta, !1), ue(A, v, L))).then((A) => {
        A = A || we(v, L, !1), A && (O.delta && !ne(A, k.NAVIGATION_CANCELLED) ? o.go(-O.delta, !1) : O.type === Je.pop && ne(A, k.NAVIGATION_ABORTED | k.NAVIGATION_DUPLICATED) && o.go(-1, !1)), Te(v, L, A);
      }).catch(Ve);
    }));
  }
  let ye = De(), W = De(), I;
  function ue(_, R, O) {
    J(_);
    const v = W.list();
    return v.length ? v.forEach((C) => C(_, R, O)) : console.error(_), Promise.reject(_);
  }
  function Y() {
    return I && c.value !== se ? Promise.resolve() : new Promise((_, R) => {
      ye.add([_, R]);
    });
  }
  function J(_) {
    return I || (I = !_, ce(), ye.list().forEach(([R, O]) => _ ? O(_) : R()), ye.reset()), _;
  }
  function Q(_, R, O, v) {
    const { scrollBehavior: C } = e;
    if (!ae || !C) return Promise.resolve();
    const L = !O && Ji(Wt(_.fullPath, 0)) || (v || !O) && history.state && history.state.scroll || null;
    return Ir().then(() => C(_, R, L)).then((A) => A && Xi(A)).catch((A) => ue(A, _, R));
  }
  const $ = (_) => o.go(_);
  let ie;
  const _e = /* @__PURE__ */ new Set(), ee = {
    currentRoute: c,
    listening: !0,
    addRoute: u,
    removeRoute: h,
    clearRoutes: t.clearRoutes,
    hasRoute: E,
    getRoutes: g,
    resolve: m,
    options: e,
    push: D,
    replace: Z,
    go: $,
    back: () => $(-1),
    forward: () => $(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: l.add,
    onError: W.add,
    isReady: Y,
    install(_) {
      _.component("RouterLink", _r), _.component("RouterView", hr), _.config.globalProperties.$router = ee, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Se(c)
      }), ae && !ie && c.value === se && (ie = !0, D(o.location).catch((v) => {
      }));
      const R = {};
      for (const v in se) Object.defineProperty(R, v, {
        get: () => c.value[v],
        enumerable: !0
      });
      _.provide(He, ee), _.provide(tt, vr(R)), _.provide(Ye, c);
      const O = _.unmount;
      _e.add(_), _.unmount = function() {
        _e.delete(_), _e.size < 1 && (d = se, X && X(), X = null, c.value = se, ie = !1, I = !1), O();
      }, ae && ss(_, ee, t);
    }
  };
  function Re(_) {
    return _.reduce((R, O) => R.then(() => oe(O)), Promise.resolve());
  }
  return ee;
}
const zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NavigationFailureType: Nr,
  RouterLink: _r,
  RouterView: hr,
  START_LOCATION: se,
  createMemoryHistory: Os,
  createRouter: Gs,
  createRouterMatcher: dr,
  createWebHashHistory: Ts,
  createWebHistory: ur,
  isNavigationFailure: ne,
  loadRouteLocation: rs,
  matchedRouteKey: et,
  onBeforeRouteLeave: ts,
  onBeforeRouteUpdate: ns,
  parseQuery: er,
  routeLocationKey: tt,
  routerKey: He,
  routerViewLocationKey: Ye,
  stringifyQuery: vt,
  useLink: Nt,
  useRoute: wr,
  useRouter: Pr,
  viewDepthKey: pt
}, Symbol.toStringTag, { value: "Module" }));
export {
  Nr as NavigationFailureType,
  _r as RouterLink,
  hr as RouterView,
  se as START_LOCATION,
  Os as createMemoryHistory,
  Gs as createRouter,
  dr as createRouterMatcher,
  Ts as createWebHashHistory,
  ur as createWebHistory,
  zs as default,
  ne as isNavigationFailure,
  rs as loadRouteLocation,
  et as matchedRouteKey,
  ts as onBeforeRouteLeave,
  ns as onBeforeRouteUpdate,
  er as parseQuery,
  tt as routeLocationKey,
  He as routerKey,
  Ye as routerViewLocationKey,
  vt as stringifyQuery,
  Nt as useLink,
  wr as useRoute,
  Pr as useRouter,
  pt as viewDepthKey
};
