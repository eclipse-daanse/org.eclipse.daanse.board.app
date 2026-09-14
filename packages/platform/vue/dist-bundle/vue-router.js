import { inject as le, onUnmounted as Or, onDeactivated as Tr, onActivated as yr, watch as an, defineComponent as ln, reactive as vr, computed as re, h as cn, unref as Re, provide as it, ref as Rr, shallowRef as Sr, getCurrentInstance as Ir, watchEffect as Nr, shallowReactive as Ar, nextTick as Cr } from "vue";
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
const ae = typeof document < "u";
function un(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function fn(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && un(e.default);
}
const P = Object.assign;
function at(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = W(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ve = () => {
}, W = Array.isArray;
function Gt(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
let D = /* @__PURE__ */ (function(e) {
  return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e;
})({});
const dn = Symbol("");
let Pr = /* @__PURE__ */ (function(e) {
  return e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated", e;
})({});
D.MATCHER_NOT_FOUND + "", D.NAVIGATION_GUARD_REDIRECT + "", D.NAVIGATION_ABORTED + "", D.NAVIGATION_CANCELLED + "", D.NAVIGATION_DUPLICATED + "";
function Ie(e, t) {
  return P(/* @__PURE__ */ new Error(), {
    type: e,
    [dn]: !0
  }, t);
}
function ne(e, t) {
  return e instanceof Error && dn in e && (t == null || !!(e.type & t));
}
const br = [
  "params",
  "query",
  "hash"
];
function wr(e) {
  if (typeof e == "string") return e;
  if (e.path != null) return e.path;
  const t = {};
  for (const n of br) n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const et = Symbol(""), _t = Symbol(""), je = Symbol(""), tt = Symbol(""), Ye = Symbol("");
function kr() {
  return le(je);
}
function Dr(e) {
  return le(tt);
}
var Lr = Object.create, pn = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, Ur = Object.getOwnPropertyNames, Mr = Object.getPrototypeOf, xr = Object.prototype.hasOwnProperty, Gr = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Br = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (var o = Ur(t), s = 0, i = o.length, l; s < i; s++)
    l = o[s], !xr.call(e, l) && l !== n && pn(e, l, {
      get: ((c) => t[c]).bind(null, l),
      enumerable: !(r = Vr(t, l)) || r.enumerable
    });
  return e;
}, $r = (e, t, n) => (n = e != null ? Lr(Mr(e)) : {}, Br(pn(n, "default", {
  value: e,
  enumerable: !0
}), e));
const _n = typeof navigator < "u", T = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
typeof T.chrome < "u" && T.chrome.devtools;
_n && (T.self, T.top);
typeof navigator < "u" && navigator.userAgent?.toLowerCase().includes("electron");
var Hr = /* @__PURE__ */ $r((/* @__PURE__ */ Gr(((e, t) => {
  t.exports = r;
  function n(s) {
    return s instanceof Buffer ? Buffer.from(s) : new s.constructor(s.buffer.slice(), s.byteOffset, s.length);
  }
  function r(s) {
    if (s = s || {}, s.circles) return o(s);
    const i = /* @__PURE__ */ new Map();
    if (i.set(Date, (a) => new Date(a)), i.set(Map, (a, f) => new Map(c(Array.from(a), f))), i.set(Set, (a, f) => new Set(c(Array.from(a), f))), s.constructorHandlers) for (const a of s.constructorHandlers) i.set(a[0], a[1]);
    let l = null;
    return s.proto ? p : d;
    function c(a, f) {
      const u = Object.keys(a), h = new Array(u.length);
      for (let g = 0; g < u.length; g++) {
        const E = u[g], m = a[E];
        typeof m != "object" || m === null ? h[E] = m : m.constructor !== Object && (l = i.get(m.constructor)) ? h[E] = l(m, f) : ArrayBuffer.isView(m) ? h[E] = n(m) : h[E] = f(m);
      }
      return h;
    }
    function d(a) {
      if (typeof a != "object" || a === null) return a;
      if (Array.isArray(a)) return c(a, d);
      if (a.constructor !== Object && (l = i.get(a.constructor))) return l(a, d);
      const f = {};
      for (const u in a) {
        if (Object.hasOwnProperty.call(a, u) === !1) continue;
        const h = a[u];
        typeof h != "object" || h === null ? f[u] = h : h.constructor !== Object && (l = i.get(h.constructor)) ? f[u] = l(h, d) : ArrayBuffer.isView(h) ? f[u] = n(h) : f[u] = d(h);
      }
      return f;
    }
    function p(a) {
      if (typeof a != "object" || a === null) return a;
      if (Array.isArray(a)) return c(a, p);
      if (a.constructor !== Object && (l = i.get(a.constructor))) return l(a, p);
      const f = {};
      for (const u in a) {
        const h = a[u];
        typeof h != "object" || h === null ? f[u] = h : h.constructor !== Object && (l = i.get(h.constructor)) ? f[u] = l(h, p) : ArrayBuffer.isView(h) ? f[u] = n(h) : f[u] = p(h);
      }
      return f;
    }
  }
  function o(s) {
    const i = [], l = [], c = /* @__PURE__ */ new Map();
    if (c.set(Date, (u) => new Date(u)), c.set(Map, (u, h) => new Map(p(Array.from(u), h))), c.set(Set, (u, h) => new Set(p(Array.from(u), h))), s.constructorHandlers) for (const u of s.constructorHandlers) c.set(u[0], u[1]);
    let d = null;
    return s.proto ? f : a;
    function p(u, h) {
      const g = Object.keys(u), E = new Array(g.length);
      for (let m = 0; m < g.length; m++) {
        const y = g[m], R = u[y];
        if (typeof R != "object" || R === null) E[y] = R;
        else if (R.constructor !== Object && (d = c.get(R.constructor))) E[y] = d(R, h);
        else if (ArrayBuffer.isView(R)) E[y] = n(R);
        else {
          const k = i.indexOf(R);
          k !== -1 ? E[y] = l[k] : E[y] = h(R);
        }
      }
      return E;
    }
    function a(u) {
      if (typeof u != "object" || u === null) return u;
      if (Array.isArray(u)) return p(u, a);
      if (u.constructor !== Object && (d = c.get(u.constructor))) return d(u, a);
      const h = {};
      i.push(u), l.push(h);
      for (const g in u) {
        if (Object.hasOwnProperty.call(u, g) === !1) continue;
        const E = u[g];
        if (typeof E != "object" || E === null) h[g] = E;
        else if (E.constructor !== Object && (d = c.get(E.constructor))) h[g] = d(E, a);
        else if (ArrayBuffer.isView(E)) h[g] = n(E);
        else {
          const m = i.indexOf(E);
          m !== -1 ? h[g] = l[m] : h[g] = a(E);
        }
      }
      return i.pop(), l.pop(), h;
    }
    function f(u) {
      if (typeof u != "object" || u === null) return u;
      if (Array.isArray(u)) return p(u, f);
      if (u.constructor !== Object && (d = c.get(u.constructor))) return d(u, f);
      const h = {};
      i.push(u), l.push(h);
      for (const g in u) {
        const E = u[g];
        if (typeof E != "object" || E === null) h[g] = E;
        else if (E.constructor !== Object && (d = c.get(E.constructor))) h[g] = d(E, f);
        else if (ArrayBuffer.isView(E)) h[g] = n(E);
        else {
          const m = i.indexOf(E);
          m !== -1 ? h[g] = l[m] : h[g] = f(E);
        }
      }
      return i.pop(), l.pop(), h;
    }
  }
})))());
const zr = /(?:^|[-_/])(\w)/g;
function jr(e, t) {
  return t ? t.toUpperCase() : "";
}
function Fr(e) {
  return e && `${e}`.replace(zr, jr);
}
function Kr(e, t) {
  let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
  n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
  const r = n.lastIndexOf("/"), o = n.substring(r + 1);
  {
    const s = o.lastIndexOf(t);
    return o.substring(0, s);
  }
}
const Bt = (0, Hr.default)({ circles: !0 }), Wr = { trailing: !0 };
function Ne(e, t = 25, n = {}) {
  if (n = {
    ...Wr,
    ...n
  }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
  let r, o, s = [], i, l;
  const c = (a, f) => (i = qr(e, a, f), i.finally(() => {
    if (i = null, n.trailing && l && !o) {
      const u = c(a, l);
      return l = null, u;
    }
  }), i), d = function(...a) {
    return n.trailing && (l = a), i || new Promise((f) => {
      const u = !o && n.leading;
      clearTimeout(o), o = setTimeout(() => {
        o = null;
        const h = n.leading ? r : c(this, a);
        l = null;
        for (const g of s) g(h);
        s = [];
      }, t), u ? (r = c(this, a), f(r)) : s.push(f);
    });
  }, p = (a) => {
    a && (clearTimeout(a), o = null);
  };
  return d.isPending = () => !!o, d.cancel = () => {
    p(o), s = [], l = null;
  }, d.flush = () => {
    if (p(o), !l || i) return;
    const a = l;
    return l = null, c(this, a);
  }, d;
}
async function qr(e, t, n) {
  return await e.apply(t, n);
}
function ht(e, t = {}, n) {
  for (const r in e) {
    const o = e[r], s = n ? `${n}:${r}` : r;
    typeof o == "object" && o !== null ? ht(o, t, s) : typeof o == "function" && (t[s] = o);
  }
  return t;
}
const Yr = { run: (e) => e() }, Zr = () => Yr, hn = typeof console.createTask < "u" ? console.createTask : Zr;
function Xr(e, t) {
  const n = t.shift(), r = hn(n);
  return e.reduce(
    (o, s) => o.then(() => r.run(() => s(...t))),
    Promise.resolve()
  );
}
function Qr(e, t) {
  const n = t.shift(), r = hn(n);
  return Promise.all(e.map((o) => r.run(() => o(...t))));
}
function lt(e, t) {
  for (const n of [...e])
    n(t);
}
class Jr {
  constructor() {
    this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
  }
  hook(t, n, r = {}) {
    if (!t || typeof n != "function")
      return () => {
      };
    const o = t;
    let s;
    for (; this._deprecatedHooks[t]; )
      s = this._deprecatedHooks[t], t = s.to;
    if (s && !r.allowDeprecated) {
      let i = s.message;
      i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
    }
    if (!n.name)
      try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: !0
        });
      } catch {
      }
    return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
      n && (this.removeHook(t, n), n = void 0);
    };
  }
  hookOnce(t, n) {
    let r, o = (...s) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...s));
    return r = this.hook(t, o), r;
  }
  removeHook(t, n) {
    if (this._hooks[t]) {
      const r = this._hooks[t].indexOf(n);
      r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
    }
  }
  deprecateHook(t, n) {
    this._deprecatedHooks[t] = typeof n == "string" ? { to: n } : n;
    const r = this._hooks[t] || [];
    delete this._hooks[t];
    for (const o of r)
      this.hook(t, o);
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t);
    for (const n in t)
      this.deprecateHook(n, t[n]);
  }
  addHooks(t) {
    const n = ht(t), r = Object.keys(n).map(
      (o) => this.hook(o, n[o])
    );
    return () => {
      for (const o of r.splice(0, r.length))
        o();
    };
  }
  removeHooks(t) {
    const n = ht(t);
    for (const r in n)
      this.removeHook(r, n[r]);
  }
  removeAllHooks() {
    for (const t in this._hooks)
      delete this._hooks[t];
  }
  callHook(t, ...n) {
    return n.unshift(t), this.callHookWith(Xr, t, ...n);
  }
  callHookParallel(t, ...n) {
    return n.unshift(t), this.callHookWith(Qr, t, ...n);
  }
  callHookWith(t, n, ...r) {
    const o = this._before || this._after ? { name: n, args: r, context: {} } : void 0;
    this._before && lt(this._before, o);
    const s = t(
      n in this._hooks ? [...this._hooks[n]] : [],
      r
    );
    return s instanceof Promise ? s.finally(() => {
      this._after && o && lt(this._after, o);
    }) : (this._after && o && lt(this._after, o), s);
  }
  beforeEach(t) {
    return this._before = this._before || [], this._before.push(t), () => {
      if (this._before !== void 0) {
        const n = this._before.indexOf(t);
        n !== -1 && this._before.splice(n, 1);
      }
    };
  }
  afterEach(t) {
    return this._after = this._after || [], this._after.push(t), () => {
      if (this._after !== void 0) {
        const n = this._after.indexOf(t);
        n !== -1 && this._after.splice(n, 1);
      }
    };
  }
}
function En() {
  return new Jr();
}
var eo = Object.create, mn = Object.defineProperty, to = Object.getOwnPropertyDescriptor, no = Object.getOwnPropertyNames, ro = Object.getPrototypeOf, oo = Object.prototype.hasOwnProperty, gn = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), so = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (var o = no(t), s = 0, i = o.length, l; s < i; s++)
    l = o[s], !oo.call(e, l) && l !== n && mn(e, l, {
      get: ((c) => t[c]).bind(null, l),
      enumerable: !(r = to(t, l)) || r.enumerable
    });
  return e;
}, io = (e, t, n) => (n = e != null ? eo(ro(e)) : {}, so(mn(n, "default", {
  value: e,
  enumerable: !0
}), e));
function ao(e) {
  if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
  const t = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
  return t === "index" && e.__file?.endsWith("index.vue") ? "" : t;
}
function lo(e) {
  const t = e.__file;
  if (t) return Fr(Kr(t, ".vue"));
}
function $t(e, t) {
  return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function Pt(e) {
  if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
  if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function On(e) {
  const t = e.subTree?.type, n = Pt(e);
  return n ? n?.types?.Fragment === t : !1;
}
function nt(e) {
  const t = ao(e?.type || {});
  if (t) return t;
  if (e?.root === e) return "Root";
  for (const r in e.parent?.type?.components) if (e.parent.type.components[r] === e?.type) return $t(e, r);
  for (const r in e.appContext?.components) if (e.appContext.components[r] === e?.type) return $t(e, r);
  const n = lo(e?.type || {});
  return n || "Anonymous Component";
}
function co(e) {
  return `${e?.appContext?.app?.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__ ?? 0}:${e === e?.root ? "root" : e.uid}`;
}
function Et(e, t) {
  return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function uo() {
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
function fo(e) {
  return Fe || (Fe = document.createRange()), Fe.selectNode(e), Fe.getBoundingClientRect();
}
function po(e) {
  const t = uo();
  if (!e.children) return t;
  for (let n = 0, r = e.children.length; n < r; n++) {
    const o = e.children[n];
    let s;
    if (o.component) s = me(o.component);
    else if (o.el) {
      const i = o.el;
      i.nodeType === 1 || i.getBoundingClientRect ? s = i.getBoundingClientRect() : i.nodeType === 3 && i.data.trim() && (s = fo(i));
    }
    s && _o(t, s);
  }
  return t;
}
function _o(e, t) {
  return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
const Ht = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: 0,
  height: 0
};
function me(e) {
  const t = e.subTree.el;
  return typeof window > "u" ? Ht : On(e) ? po(e.subTree) : t?.nodeType === 1 ? t?.getBoundingClientRect() : e.subTree.component ? me(e.subTree.component) : Ht;
}
function bt(e) {
  return On(e) ? ho(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function ho(e) {
  if (!e.children) return [];
  const t = [];
  return e.children.forEach((n) => {
    n.component ? t.push(...bt(n.component)) : n?.el && t.push(n.el);
  }), t;
}
const Tn = "__vue-devtools-component-inspector__", yn = "__vue-devtools-component-inspector__card__", vn = "__vue-devtools-component-inspector__name__", Rn = "__vue-devtools-component-inspector__indicator__", Sn = {
  display: "block",
  zIndex: 2147483640,
  position: "fixed",
  backgroundColor: "#42b88325",
  border: "1px solid #42b88350",
  borderRadius: "5px",
  transition: "all 0.1s ease-in",
  pointerEvents: "none"
}, Eo = {
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
}, mo = {
  display: "inline-block",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: "12px",
  opacity: 0.7
};
function Ce() {
  return document.getElementById(Tn);
}
function go() {
  return document.getElementById(yn);
}
function Oo() {
  return document.getElementById(Rn);
}
function To() {
  return document.getElementById(vn);
}
function wt(e) {
  return {
    left: `${Math.round(e.left * 100) / 100}px`,
    top: `${Math.round(e.top * 100) / 100}px`,
    width: `${Math.round(e.width * 100) / 100}px`,
    height: `${Math.round(e.height * 100) / 100}px`
  };
}
function kt(e) {
  const t = document.createElement("div");
  t.id = e.elementId ?? Tn, Object.assign(t.style, {
    ...Sn,
    ...wt(e.bounds),
    ...e.style
  });
  const n = document.createElement("span");
  n.id = yn, Object.assign(n.style, {
    ...Eo,
    top: e.bounds.top < 35 ? 0 : "-35px"
  });
  const r = document.createElement("span");
  r.id = vn, r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
  const o = document.createElement("i");
  return o.id = Rn, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(o.style, mo), n.appendChild(r), n.appendChild(o), t.appendChild(n), document.body.appendChild(t), t;
}
function Dt(e) {
  const t = Ce(), n = go(), r = To(), o = Oo();
  t && (Object.assign(t.style, {
    ...Sn,
    ...wt(e.bounds)
  }), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, o.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function yo(e) {
  const t = me(e);
  if (!t.width && !t.height) return;
  const n = nt(e);
  Ce() ? Dt({
    bounds: t,
    name: n
  }) : kt({
    bounds: t,
    name: n
  });
}
function In() {
  const e = Ce();
  e && (e.style.display = "none");
}
let mt = null;
function gt(e) {
  const t = e.target;
  if (t) {
    const n = t.__vueParentComponent;
    if (n && (mt = n, n.vnode.el)) {
      const r = me(n), o = nt(n);
      Ce() ? Dt({
        bounds: r,
        name: o
      }) : kt({
        bounds: r,
        name: o
      });
    }
  }
}
function vo(e, t) {
  e.preventDefault(), e.stopPropagation(), mt && t(co(mt));
}
let Ze = null;
function Ro() {
  In(), window.removeEventListener("mouseover", gt), window.removeEventListener("click", Ze, !0), Ze = null;
}
function So() {
  return window.addEventListener("mouseover", gt), new Promise((e) => {
    function t(n) {
      n.preventDefault(), n.stopPropagation(), vo(n, (r) => {
        window.removeEventListener("click", t, !0), Ze = null, window.removeEventListener("mouseover", gt);
        const o = Ce();
        o && (o.style.display = "none"), e(JSON.stringify({ id: r }));
      });
    }
    Ze = t, window.addEventListener("click", t, !0);
  });
}
function Io(e) {
  const t = Et(z.value, e.id);
  if (t) {
    const [n] = bt(t);
    if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
    else {
      const r = me(t), o = document.createElement("div"), s = {
        ...wt(r),
        position: "absolute"
      };
      Object.assign(o.style, s), document.body.appendChild(o), o.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
        document.body.removeChild(o);
      }, 2e3);
    }
    setTimeout(() => {
      const r = me(t);
      if (r.width || r.height) {
        const o = nt(t), s = Ce();
        s ? Dt({
          ...e,
          name: o,
          bounds: r
        }) : kt({
          ...e,
          name: o,
          bounds: r
        }), setTimeout(() => {
          s && (s.style.display = "none");
        }, 1500);
      }
    }, 1200);
  }
}
T.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ ??= !0;
function No(e) {
  let t = 0;
  const n = setInterval(() => {
    T.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
  }, 30);
}
function Ao() {
  const e = T.__VUE_INSPECTOR__, t = e.openInEditor;
  e.openInEditor = async (...n) => {
    e.disable(), t(...n);
  };
}
function Co() {
  return new Promise((e) => {
    function t() {
      Ao(), e(T.__VUE_INSPECTOR__);
    }
    T.__VUE_INSPECTOR__ ? t() : No(() => {
      t();
    });
  });
}
let Xe = /* @__PURE__ */ (function(e) {
  return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
})({});
function Po(e) {
  return !!(e && e[Xe.IS_READONLY]);
}
function Nn(e) {
  return Po(e) ? Nn(e[Xe.RAW]) : !!(e && e[Xe.IS_REACTIVE]);
}
function ct(e) {
  return !!(e && e.__v_isRef === !0);
}
function Le(e) {
  const t = e && e[Xe.RAW];
  return t ? Le(t) : e;
}
var bo = class {
  constructor() {
    this.refEditor = new wo();
  }
  set(e, t, n, r) {
    const o = Array.isArray(t) ? t : t.split(".");
    for (; o.length > 1; ) {
      const l = o.shift();
      e instanceof Map ? e = e.get(l) : e instanceof Set ? e = Array.from(e.values())[l] : e = e[l], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
    }
    const s = o[0], i = this.refEditor.get(e)[s];
    r ? r(e, s, n) : this.refEditor.isRef(i) ? this.refEditor.set(i, n) : e[s] = n;
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
      const s = r.shift();
      e = e[s], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
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
}, wo = class {
  set(e, t) {
    if (ct(e)) e.value = t;
    else {
      if (e instanceof Set && Array.isArray(t)) {
        e.clear(), t.forEach((o) => e.add(o));
        return;
      }
      const n = Object.keys(t);
      if (e instanceof Map) {
        const o = new Set(e.keys());
        n.forEach((s) => {
          e.set(s, Reflect.get(t, s)), o.delete(s);
        }), o.forEach((s) => e.delete(s));
        return;
      }
      const r = new Set(Object.keys(e));
      n.forEach((o) => {
        Reflect.set(e, o, Reflect.get(t, o)), r.delete(o);
      }), r.forEach((o) => Reflect.deleteProperty(e, o));
    }
  }
  get(e) {
    return ct(e) ? e.value : e;
  }
  isRef(e) {
    return ct(e) || Nn(e);
  }
};
const ko = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function Do() {
  if (typeof window > "u" || !_n || typeof localStorage > "u" || localStorage === null) return {
    recordingState: !1,
    mouseEventEnabled: !1,
    keyboardEventEnabled: !1,
    componentEventEnabled: !1,
    performanceEventEnabled: !1,
    selected: ""
  };
  const e = typeof localStorage.getItem < "u" ? localStorage.getItem(ko) : null;
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
const Lo = new Proxy(T.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
  return Reflect.get(e, t, n);
} });
function Vo(e, t) {
  M.timelineLayersState[t.id] = !1, Lo.push({
    ...e,
    descriptorId: t.id,
    appRecord: Pt(t.app)
  });
}
T.__VUE_DEVTOOLS_KIT_INSPECTOR__ ??= [];
const Lt = new Proxy(T.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
  return Reflect.get(e, t, n);
} }), An = Ne(() => {
  Pe.hooks.callHook(Ee.SEND_INSPECTOR_TO_CLIENT, Cn());
});
function Uo(e, t) {
  Lt.push({
    options: e,
    descriptor: t,
    treeFilterPlaceholder: e.treeFilterPlaceholder ?? "Search tree...",
    stateFilterPlaceholder: e.stateFilterPlaceholder ?? "Search state...",
    treeFilter: "",
    selectedNodeId: "",
    appRecord: Pt(t.app)
  }), An();
}
function Cn() {
  return Lt.filter((e) => e.descriptor.app === z.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
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
function We(e, t) {
  return Lt.find((n) => n.options.id === e && (t ? n.descriptor.app === t : !0));
}
let G = /* @__PURE__ */ (function(e) {
  return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
})({}), w = /* @__PURE__ */ (function(e) {
  return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
})({}), Ee = /* @__PURE__ */ (function(e) {
  return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
})({});
function Mo() {
  const e = En();
  e.hook(w.ADD_INSPECTOR, ({ inspector: r, plugin: o }) => {
    Uo(r, o.descriptor);
  });
  const t = Ne(async ({ inspectorId: r, plugin: o }) => {
    if (!r || !o?.descriptor?.app || M.highPerfModeEnabled) return;
    const s = We(r, o.descriptor.app), i = {
      app: o.descriptor.app,
      inspectorId: r,
      filter: s?.treeFilter || "",
      rootNodes: []
    };
    await new Promise((l) => {
      e.callHookWith(async (c) => {
        await Promise.all(c.map((d) => d(i))), l();
      }, G.GET_INSPECTOR_TREE);
    }), e.callHookWith(async (l) => {
      await Promise.all(l.map((c) => c({
        inspectorId: r,
        rootNodes: i.rootNodes
      })));
    }, Ee.SEND_INSPECTOR_TREE_TO_CLIENT);
  }, 120);
  e.hook(w.SEND_INSPECTOR_TREE, t);
  const n = Ne(async ({ inspectorId: r, plugin: o }) => {
    if (!r || !o?.descriptor?.app || M.highPerfModeEnabled) return;
    const s = We(r, o.descriptor.app), i = {
      app: o.descriptor.app,
      inspectorId: r,
      nodeId: s?.selectedNodeId || "",
      state: null
    }, l = { currentTab: `custom-inspector:${r}` };
    i.nodeId && await new Promise((c) => {
      e.callHookWith(async (d) => {
        await Promise.all(d.map((p) => p(i, l))), c();
      }, G.GET_INSPECTOR_STATE);
    }), e.callHookWith(async (c) => {
      await Promise.all(c.map((d) => d({
        inspectorId: r,
        nodeId: i.nodeId,
        state: i.state
      })));
    }, Ee.SEND_INSPECTOR_STATE_TO_CLIENT);
  }, 120);
  return e.hook(w.SEND_INSPECTOR_STATE, n), e.hook(w.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: r, nodeId: o, plugin: s }) => {
    const i = We(r, s.descriptor.app);
    i && (i.selectedNodeId = o);
  }), e.hook(w.TIMELINE_LAYER_ADDED, ({ options: r, plugin: o }) => {
    Vo(r, o.descriptor);
  }), e.hook(w.TIMELINE_EVENT_ADDED, ({ options: r, plugin: o }) => {
    M.highPerfModeEnabled || !M.timelineLayersState?.[o.descriptor.id] && ![
      "performance",
      "component-event",
      "keyboard",
      "mouse"
    ].includes(r.layerId) || e.callHookWith(async (s) => {
      await Promise.all(s.map((i) => i(r)));
    }, Ee.SEND_TIMELINE_EVENT_TO_CLIENT);
  }), e.hook(w.GET_COMPONENT_INSTANCES, async ({ app: r }) => {
    const o = r.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
    if (!o) return null;
    const s = o.id.toString();
    return [...o.instanceMap].filter(([i]) => i.split(":")[0] === s).map(([, i]) => i);
  }), e.hook(w.GET_COMPONENT_BOUNDS, async ({ instance: r }) => me(r)), e.hook(w.GET_COMPONENT_NAME, ({ instance: r }) => nt(r)), e.hook(w.COMPONENT_HIGHLIGHT, ({ uid: r }) => {
    const o = z.value.instanceMap.get(r);
    o && yo(o);
  }), e.hook(w.COMPONENT_UNHIGHLIGHT, () => {
    In();
  }), e;
}
T.__VUE_DEVTOOLS_KIT_APP_RECORDS__ ??= [];
T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ ??= {};
T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ ??= "";
T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ ??= [];
T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ ??= [];
const Ue = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function xo() {
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
    timelineLayersState: Do()
  };
}
T[Ue] ??= xo();
const Go = Ne((e) => {
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
} }), z = new Proxy(T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
  return t === "value" ? T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function Pn() {
  Go({
    ...T[Ue],
    appRecords: rt.value,
    activeAppRecordId: z.id,
    tabs: T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
    commands: T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
  });
}
function Bo(e) {
  T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, Pn();
}
function $o(e) {
  T.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, Pn();
}
const M = new Proxy(T[Ue], {
  get(e, t) {
    return t === "appRecords" ? rt : t === "activeAppRecordId" ? z.id : t === "tabs" ? T.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? T.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : T[Ue][t];
  },
  deleteProperty(e, t) {
    return delete e[t], !0;
  },
  set(e, t, n) {
    return e[t] = n, T[Ue][t] = n, !0;
  }
});
function Ho(e = {}) {
  const { file: t, host: n, baseUrl: r = window.location.origin, line: o = 0, column: s = 0 } = e;
  if (t) {
    if (n === "chrome-extension") {
      const i = t.replace(/\\/g, "\\\\"), l = window.VUE_DEVTOOLS_CONFIG?.openInEditorHost ?? "/";
      fetch(`${l}__open-in-editor?file=${encodeURI(t)}`).then((c) => {
        if (!c.ok) {
          const d = `Opening component ${i} failed`;
          console.log(`%c${d}`, "color:red");
        }
      });
    } else if (M.vitePluginDetected) {
      const i = T.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__ ?? r;
      T.__VUE_INSPECTOR__.openInEditor(i, t, o, s);
    }
  }
}
T.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ ??= [];
const Vt = new Proxy(T.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
  return Reflect.get(e, t, n);
} });
function Ot(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = e[n].defaultValue;
  }), t;
}
function Ut(e) {
  return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function zo(e) {
  return (Vt.find((t) => t[0].id === e && !!t[0]?.settings)?.[0] ?? null)?.settings ?? null;
}
function bn(e, t) {
  const n = Ut(e);
  if (n) {
    const r = localStorage.getItem(n);
    if (r) return JSON.parse(r);
  }
  return Ot(e ? (Vt.find((r) => r[0].id === e)?.[0] ?? null)?.settings ?? {} : t);
}
function jo(e, t) {
  const n = Ut(e);
  localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(Ot(t)));
}
function Fo(e, t, n) {
  const r = Ut(e), o = localStorage.getItem(r), s = JSON.parse(o || "{}"), i = {
    ...s,
    [t]: n
  };
  localStorage.setItem(r, JSON.stringify(i)), Pe.hooks.callHookWith((l) => {
    l.forEach((c) => c({
      pluginId: e,
      key: t,
      oldValue: s[t],
      newValue: n,
      settings: i
    }));
  }, G.SET_PLUGIN_SETTINGS);
}
let F = /* @__PURE__ */ (function(e) {
  return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
})({});
const K = T.__VUE_DEVTOOLS_HOOK ??= En(), Ko = {
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
}, wn = {
  on: Ko,
  setupDevToolsPlugin(e, t) {
    return K.callHook(F.SETUP_DEVTOOLS_PLUGIN, e, t);
  }
};
var Wo = class {
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
    const t = Cn().find((n) => n.packageName === this.plugin.descriptor.packageName);
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
      this.hooks.callHook(w.SEND_INSPECTOR_STATE, {
        inspectorId: t.id,
        plugin: this.plugin
      });
    }
  }
  addInspector(e) {
    this.hooks.callHook(w.ADD_INSPECTOR, {
      inspector: e,
      plugin: this.plugin
    }), this.plugin.descriptor.settings && jo(e.id, this.plugin.descriptor.settings);
  }
  sendInspectorTree(e) {
    M.highPerfModeEnabled || this.hooks.callHook(w.SEND_INSPECTOR_TREE, {
      inspectorId: e,
      plugin: this.plugin
    });
  }
  sendInspectorState(e) {
    M.highPerfModeEnabled || this.hooks.callHook(w.SEND_INSPECTOR_STATE, {
      inspectorId: e,
      plugin: this.plugin
    });
  }
  selectInspectorNode(e, t) {
    this.hooks.callHook(w.CUSTOM_INSPECTOR_SELECT_NODE, {
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
    this.hooks.callHook(w.TIMELINE_LAYER_ADDED, {
      options: e,
      plugin: this.plugin
    });
  }
  addTimelineEvent(e) {
    M.highPerfModeEnabled || this.hooks.callHook(w.TIMELINE_EVENT_ADDED, {
      options: e,
      plugin: this.plugin
    });
  }
  getSettings(e) {
    return bn(e ?? this.plugin.descriptor.id, this.plugin.descriptor.settings);
  }
  getComponentInstances(e) {
    return this.hooks.callHook(w.GET_COMPONENT_INSTANCES, { app: e });
  }
  getComponentBounds(e) {
    return this.hooks.callHook(w.GET_COMPONENT_BOUNDS, { instance: e });
  }
  getComponentName(e) {
    return this.hooks.callHook(w.GET_COMPONENT_NAME, { instance: e });
  }
  highlightElement(e) {
    const t = e.__VUE_DEVTOOLS_NEXT_UID__;
    return this.hooks.callHook(w.COMPONENT_HIGHLIGHT, { uid: t });
  }
  unhighlightElement() {
    return this.hooks.callHook(w.COMPONENT_UNHIGHLIGHT);
  }
};
const qo = Wo, Yo = "__vue_devtool_undefined__", Zo = "__vue_devtool_infinity__", Xo = "__vue_devtool_negative_infinity__", Qo = "__vue_devtool_nan__", Jo = {
  [Yo]: "undefined",
  [Qo]: "NaN",
  [Zo]: "Infinity",
  [Xo]: "-Infinity"
};
Object.entries(Jo).reduce((e, [t, n]) => (e[n] = t, e), {});
T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ ??= /* @__PURE__ */ new Set();
function es(e, t) {
  return wn.setupDevToolsPlugin(e, t);
}
function ts(e, t) {
  const [n, r] = e;
  if (n.app !== t) return;
  const o = new qo({
    plugin: {
      setupFn: r,
      descriptor: n
    },
    ctx: Pe
  });
  n.packageName === "vuex" && o.on.editInspectorState((s) => {
    o.sendInspectorState(s.inspectorId);
  }), r(o);
}
function kn(e, t) {
  T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || M.highPerfModeEnabled && !t?.inspectingComponent || (T.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), Vt.forEach((n) => {
    ts(n, e);
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
function ns(e) {
  const t = /* @__PURE__ */ new Map();
  return (e?.getRoutes() || []).filter((n) => !t.has(n.path) && t.set(n.path, 1));
}
function Mt(e) {
  return e.map((t) => {
    let { path: n, name: r, children: o, meta: s } = t;
    return o?.length && (o = Mt(o)), {
      path: n,
      name: r,
      children: o,
      meta: s
    };
  });
}
function rs(e) {
  if (e) {
    const { fullPath: t, hash: n, href: r, path: o, name: s, matched: i, params: l, query: c } = e;
    return {
      fullPath: t,
      hash: n,
      href: r,
      path: o,
      name: s,
      params: l,
      query: c,
      matched: Mt(i)
    };
  }
  return e;
}
function os(e, t) {
  function n() {
    const r = e.app?.config.globalProperties.$router, o = rs(r?.currentRoute.value), s = Mt(ns(r)), i = console.warn;
    console.warn = () => {
    }, T[Ge] = {
      currentRoute: o ? Bt(o) : {},
      routes: Bt(s)
    }, T[Qe] = r, console.warn = i;
  }
  n(), wn.on.componentUpdated(Ne(() => {
    t.value?.app === e.app && (n(), !M.highPerfModeEnabled && Pe.hooks.callHook(Ee.ROUTER_INFO_UPDATED, { state: T[Ge] }));
  }, 200));
}
function ss(e) {
  return {
    async getInspectorTree(t) {
      const n = {
        ...t,
        app: z.value.app,
        rootNodes: []
      };
      return await new Promise((r) => {
        e.callHookWith(async (o) => {
          await Promise.all(o.map((s) => s(n))), r();
        }, G.GET_INSPECTOR_TREE);
      }), n.rootNodes;
    },
    async getInspectorState(t) {
      const n = {
        ...t,
        app: z.value.app,
        state: null
      }, r = { currentTab: `custom-inspector:${t.inspectorId}` };
      return await new Promise((o) => {
        e.callHookWith(async (s) => {
          await Promise.all(s.map((i) => i(n, r))), o();
        }, G.GET_INSPECTOR_STATE);
      }), n.state;
    },
    editInspectorState(t) {
      const n = new bo(), r = {
        ...t,
        app: z.value.app,
        set: (o, s = t.path, i = t.state.value, l) => {
          n.set(o, s, i, l || n.createDefaultSetCallback(t.state));
        }
      };
      e.callHookWith((o) => {
        o.forEach((s) => s(r));
      }, G.EDIT_INSPECTOR_STATE);
    },
    sendInspectorState(t) {
      const n = We(t);
      e.callHook(w.SEND_INSPECTOR_STATE, {
        inspectorId: t,
        plugin: {
          descriptor: n.descriptor,
          setupFn: () => ({})
        }
      });
    },
    inspectComponentInspector() {
      return So();
    },
    cancelInspectComponentInspector() {
      return Ro();
    },
    getComponentRenderCode(t) {
      const n = Et(z.value, t);
      if (n) return typeof n?.type != "function" ? n.render.toString() : n.type.toString();
    },
    scrollToComponent(t) {
      return Io({ id: t });
    },
    openInEditor: Ho,
    getVueInspector: Co,
    toggleApp(t, n) {
      const r = rt.value.find((o) => o.id === t);
      r && ($o(t), Bo(r), os(r, z), An(), kn(r.app, n));
    },
    inspectDOM(t) {
      const n = Et(z.value, t);
      if (n) {
        const [r] = bt(n);
        r && (T.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = r);
      }
    },
    updatePluginSettings(t, n, r) {
      Fo(t, n, r);
    },
    getPluginSettings(t) {
      return {
        options: zo(t),
        values: bn(t)
      };
    }
  };
}
T.__VUE_DEVTOOLS_ENV__ ??= { vitePluginDetected: !1 };
const zt = Mo();
T.__VUE_DEVTOOLS_KIT_CONTEXT__ ??= {
  hooks: zt,
  get state() {
    return {
      ...M,
      activeAppRecordId: z.id,
      activeAppRecord: z.value,
      appRecords: rt.value
    };
  },
  api: ss(zt)
};
const Pe = T.__VUE_DEVTOOLS_KIT_CONTEXT__;
var is = /* @__PURE__ */ gn(((e, t) => {
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
    }, o = ["်", "ް"], s = {
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
    }, i = {
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
      var y = "-", R = "", k = "", Z = !0, x = {}, B, ge, oe, Oe, Te, be, X, ce, ye, q, I, ue, Y, J, Q = "";
      if (typeof E != "string") return "";
      if (typeof m == "string" && (y = m), X = l.en, ce = i.en, typeof m == "object") {
        B = m.maintainCase || !1, x = m.custom && typeof m.custom == "object" ? m.custom : x, oe = +m.truncate > 1 && m.truncate || !1, Oe = m.uric || !1, Te = m.uricNoSlash || !1, be = m.mark || !1, Z = !(m.symbols === !1 || m.lang === !1), y = m.separator || y, Oe && (Q += c), Te && (Q += d), be && (Q += p), X = m.lang && l[m.lang] && Z ? l[m.lang] : Z ? l.en : {}, ce = m.lang && i[m.lang] ? i[m.lang] : m.lang === !1 || m.lang === !0 ? {} : i.en, m.titleCase && typeof m.titleCase.length == "number" && Array.prototype.toString.call(m.titleCase) ? (m.titleCase.forEach(function($) {
          x[$ + ""] = $ + "";
        }), ge = !0) : ge = !!m.titleCase, m.custom && typeof m.custom.length == "number" && Array.prototype.toString.call(m.custom) && m.custom.forEach(function($) {
          x[$ + ""] = $ + "";
        }), Object.keys(x).forEach(function($) {
          var se;
          $.length > 1 ? se = new RegExp("\\b" + u($) + "\\b", "gi") : se = new RegExp(u($), "gi"), E = E.replace(se, x[$]);
        });
        for (I in x) Q += I;
      }
      for (Q += y, Q = u(Q), E = E.replace(/(^\s+|\s+$)/g, ""), Y = !1, J = !1, q = 0, ue = E.length; q < ue; q++)
        I = E[q], h(I, x) ? Y = !1 : ce[I] ? (I = Y && ce[I].match(/[A-Za-z0-9]/) ? " " + ce[I] : ce[I], Y = !1) : I in r ? (q + 1 < ue && o.indexOf(E[q + 1]) >= 0 ? (k += I, I = "") : J === !0 ? (I = s[k] + r[I], k = "") : I = Y && r[I].match(/[A-Za-z0-9]/) ? " " + r[I] : r[I], Y = !1, J = !1) : I in s ? (k += I, I = "", q === ue - 1 && (I = s[k]), J = !0) : X[I] && !(Oe && c.indexOf(I) !== -1) && !(Te && d.indexOf(I) !== -1) ? (I = Y || R.substr(-1).match(/[A-Za-z0-9]/) ? y + X[I] : X[I], I += E[q + 1] !== void 0 && E[q + 1].match(/[A-Za-z0-9]/) ? y : "", Y = !0) : (J === !0 ? (I = s[k] + I, k = "", J = !1) : Y && (/[A-Za-z0-9]/.test(I) || R.substr(-1).match(/A-Za-z0-9]/)) && (I = " " + I), Y = !1), R += I.replace(new RegExp("[^\\w\\s" + Q + "_-]", "g"), y);
      return ge && (R = R.replace(/(\w)(\S*)/g, function($, se, _e) {
        var ee = se.toUpperCase() + (_e !== null ? _e : "");
        return Object.keys(x).indexOf(ee.toLowerCase()) < 0 ? ee : ee.toLowerCase();
      })), R = R.replace(/\s+/g, y).replace(new RegExp("\\" + y + "+", "g"), y).replace(new RegExp("(^\\" + y + "+|\\" + y + "+$)", "g"), ""), oe && R.length > oe && (ye = R.charAt(oe) === y, R = R.slice(0, oe), ye || (R = R.slice(0, R.lastIndexOf(y)))), !B && !ge && (R = R.toLowerCase()), R;
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
(/* @__PURE__ */ gn(((e, t) => {
  t.exports = is();
})))();
T.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ ??= {
  id: 0,
  appIds: /* @__PURE__ */ new Set()
};
function as(e) {
  M.highPerfModeEnabled = e ?? !M.highPerfModeEnabled, !e && z.value && kn(z.value.app);
}
function ls(e) {
  M.devtoolsClientDetected = {
    ...M.devtoolsClientDetected,
    ...e
  }, as(!Object.values(M.devtoolsClientDetected).some(Boolean));
}
T.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ ??= ls;
var cs = class {
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
}, Dn = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new cs();
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
}, us = class extends Dn {
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
function fs(e) {
  if ("values" in Object) return Object.values(e);
  const t = [];
  for (const n in e) e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function ds(e, t) {
  const n = fs(e);
  if ("find" in n) return n.find(t);
  const r = n;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t(s)) return s;
  }
}
function Ae(e, t) {
  Object.entries(e).forEach(([n, r]) => t(r, n));
}
function qe(e, t) {
  return e.indexOf(t) !== -1;
}
function jt(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r)) return r;
  }
}
var ps = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return ds(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
};
const _s = (e) => Object.prototype.toString.call(e).slice(8, -1), Ln = (e) => typeof e > "u", hs = (e) => e === null, Be = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, Tt = (e) => Be(e) && Object.keys(e).length === 0, de = (e) => Array.isArray(e), Es = (e) => typeof e == "string", ms = (e) => typeof e == "number" && !isNaN(e), gs = (e) => typeof e == "boolean", Os = (e) => e instanceof RegExp, $e = (e) => e instanceof Map, He = (e) => e instanceof Set, Vn = (e) => _s(e) === "Symbol", Ts = (e) => e instanceof Date && !isNaN(e.valueOf()), ys = (e) => e instanceof Error, Ft = (e) => typeof e == "number" && isNaN(e), vs = (e) => gs(e) || hs(e) || Ln(e) || ms(e) || Es(e) || Vn(e), Rs = (e) => typeof e == "bigint", Ss = (e) => e === 1 / 0 || e === -1 / 0, Is = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), Ns = (e) => e instanceof URL, Un = (e) => e.replace(/\./g, "\\."), ut = (e) => e.map(String).map(Un).join("."), Me = (e) => {
  const t = [];
  let n = "";
  for (let o = 0; o < e.length; o++) {
    let s = e.charAt(o);
    if (s === "\\" && e.charAt(o + 1) === ".") {
      n += ".", o++;
      continue;
    }
    if (s === ".") {
      t.push(n), n = "";
      continue;
    }
    n += s;
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
const Mn = [
  te(Ln, "undefined", () => null, () => {
  }),
  te(Rs, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
  te(Ts, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  te(ys, "Error", (e, t) => {
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
  te(Os, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  te(He, "set", (e) => [...e.values()], (e) => new Set(e)),
  te($e, "map", (e) => [...e.entries()], (e) => new Map(e)),
  te((e) => Ft(e) || Ss(e), "number", (e) => Ft(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  te((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  te(Ns, "URL", (e) => e.toString(), (e) => new URL(e))
];
function ot(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
const xn = ot((e, t) => Vn(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const r = n.symbolRegistry.getValue(t[1]);
  if (!r) throw new Error("Trying to deserialize unknown symbol");
  return r;
}), As = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Gn = ot(Is, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = As[t[1]];
  if (!n) throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Bn(e, t) {
  return e?.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
const $n = ot(Bn, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
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
}), Hn = ot((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const r = n.customTransformerRegistry.findByName(t[1]);
  if (!r) throw new Error("Trying to deserialize unknown custom value");
  return r.deserialize(e);
}), Cs = [
  $n,
  xn,
  Hn,
  Gn
], Kt = (e, t) => {
  const n = jt(Cs, (o) => o.isApplicable(e, t));
  if (n) return {
    value: n.transform(e, t),
    type: n.annotation(e, t)
  };
  const r = jt(Mn, (o) => o.isApplicable(e, t));
  if (r) return {
    value: r.transform(e, t),
    type: r.annotation
  };
}, zn = {};
Mn.forEach((e) => {
  zn[e.annotation] = e;
});
const Ps = (e, t, n) => {
  if (de(t)) switch (t[0]) {
    case "symbol":
      return xn.untransform(e, t, n);
    case "class":
      return $n.untransform(e, t, n);
    case "custom":
      return Hn.untransform(e, t, n);
    case "typed-array":
      return Gn.untransform(e, t, n);
    default:
      throw new Error("Unknown transformation: " + t);
  }
  else {
    const r = zn[t];
    if (!r) throw new Error("Unknown transformation: " + t);
    return r.untransform(e, n);
  }
}, Se = (e, t) => {
  if (t > e.size) throw new Error("index out of bounds");
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function jn(e) {
  if (qe(e, "__proto__")) throw new Error("__proto__ is not allowed as a property");
  if (qe(e, "prototype")) throw new Error("prototype is not allowed as a property");
  if (qe(e, "constructor")) throw new Error("constructor is not allowed as a property");
}
const bs = (e, t) => {
  jn(t);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (He(e)) e = Se(e, +r);
    else if ($e(e)) {
      const o = +r, s = +t[++n] == 0 ? "key" : "value", i = Se(e, o);
      switch (s) {
        case "key":
          e = i;
          break;
        case "value":
          e = e.get(i);
          break;
      }
    } else e = e[r];
  }
  return e;
}, yt = (e, t, n) => {
  if (jn(t), t.length === 0) return n(e);
  let r = e;
  for (let s = 0; s < t.length - 1; s++) {
    const i = t[s];
    if (de(r)) {
      const l = +i;
      r = r[l];
    } else if (Be(r)) r = r[i];
    else if (He(r)) {
      const l = +i;
      r = Se(r, l);
    } else if ($e(r)) {
      if (s === t.length - 2) break;
      const l = +i, c = +t[++s] == 0 ? "key" : "value", d = Se(r, l);
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
  if (de(r) ? r[+o] = n(r[+o]) : Be(r) && (r[o] = n(r[o])), He(r)) {
    const s = Se(r, +o), i = n(s);
    s !== i && (r.delete(s), r.add(i));
  }
  if ($e(r)) {
    const s = +t[t.length - 2], i = Se(r, s);
    switch (+o == 0 ? "key" : "value") {
      case "key": {
        const l = n(i);
        r.set(l, r.get(i)), l !== i && r.delete(i);
        break;
      }
      case "value":
        r.set(i, n(r.get(i)));
        break;
    }
  }
  return e;
};
function vt(e, t, n = []) {
  if (!e) return;
  if (!de(e)) {
    Ae(e, (s, i) => vt(s, t, [...n, ...Me(i)]));
    return;
  }
  const [r, o] = e;
  o && Ae(o, (s, i) => {
    vt(s, t, [...n, ...Me(i)]);
  }), t(r, n);
}
function ws(e, t, n) {
  return vt(t, (r, o) => {
    e = yt(e, o, (s) => Ps(s, r, n));
  }), e;
}
function ks(e, t) {
  function n(r, o) {
    const s = bs(e, Me(o));
    r.map(Me).forEach((i) => {
      e = yt(e, i, () => s);
    });
  }
  if (de(t)) {
    const [r, o] = t;
    r.forEach((s) => {
      e = yt(e, Me(s), () => e);
    }), o && Ae(o, n);
  } else Ae(t, n);
  return e;
}
const Ds = (e, t) => Be(e) || de(e) || $e(e) || He(e) || Bn(e, t);
function Ls(e, t, n) {
  const r = n.get(e);
  r ? r.push(t) : n.set(e, [t]);
}
function Vs(e, t) {
  const n = {};
  let r;
  return e.forEach((o) => {
    if (o.length <= 1) return;
    t || (o = o.map((l) => l.map(String)).sort((l, c) => l.length - c.length));
    const [s, ...i] = o;
    s.length === 0 ? r = i.map(ut) : n[ut(s)] = i.map(ut);
  }), r ? Tt(n) ? [r] : [r, n] : Tt(n) ? void 0 : n;
}
const Fn = (e, t, n, r, o = [], s = [], i = /* @__PURE__ */ new Map()) => {
  const l = vs(e);
  if (!l) {
    Ls(e, o, t);
    const u = i.get(e);
    if (u) return r ? { transformedValue: null } : u;
  }
  if (!Ds(e, n)) {
    const u = Kt(e, n), h = u ? {
      transformedValue: u.value,
      annotations: [u.type]
    } : { transformedValue: e };
    return l || i.set(e, h), h;
  }
  if (qe(s, e)) return { transformedValue: null };
  const c = Kt(e, n), d = c?.value ?? e, p = de(d) ? [] : {}, a = {};
  Ae(d, (u, h) => {
    if (h === "__proto__" || h === "constructor" || h === "prototype") throw new Error(`Detected property ${h}. This is a prototype pollution risk, please remove it from your object.`);
    const g = Fn(u, t, n, r, [...o, h], [...s, e], i);
    p[h] = g.transformedValue, de(g.annotations) ? a[h] = g.annotations : Be(g.annotations) && Ae(g.annotations, (E, m) => {
      a[Un(h) + "." + m] = E;
    });
  });
  const f = Tt(a) ? {
    transformedValue: p,
    annotations: c ? [c.type] : void 0
  } : {
    transformedValue: p,
    annotations: c ? [c.type, a] : a
  };
  return l || i.set(e, f), f;
};
function Kn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Wt(e) {
  return Kn(e) === "Array";
}
function Us(e) {
  if (Kn(e) !== "Object") return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Ms(e, t, n, r, o) {
  const s = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
  s === "enumerable" && (e[t] = n), o && s === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function Rt(e, t = {}) {
  if (Wt(e)) return e.map((o) => Rt(o, t));
  if (!Us(e)) return e;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
  return [...n, ...r].reduce((o, s) => {
    if (Wt(t.props) && !t.props.includes(s)) return o;
    const i = e[s];
    return Ms(o, s, Rt(i, t), e, t.nonenumerable), o;
  }, {});
}
var b = class {
  /**
  * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
  */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new us(), this.symbolRegistry = new Dn((t) => t.description ?? ""), this.customTransformerRegistry = new ps(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = Fn(e, t, this, this.dedupe), r = { json: n.transformedValue };
    n.annotations && (r.meta = {
      ...r.meta,
      values: n.annotations
    });
    const o = Vs(t, this.dedupe);
    return o && (r.meta = {
      ...r.meta,
      referentialEqualities: o
    }), r;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let r = Rt(t);
    return n?.values && (r = ws(r, n.values, this)), n?.referentialEqualities && (r = ks(r, n.referentialEqualities)), r;
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
b.defaultInstance = new b();
b.serialize = b.defaultInstance.serialize.bind(b.defaultInstance);
b.deserialize = b.defaultInstance.deserialize.bind(b.defaultInstance);
b.stringify = b.defaultInstance.stringify.bind(b.defaultInstance);
b.parse = b.defaultInstance.parse.bind(b.defaultInstance);
b.registerClass = b.defaultInstance.registerClass.bind(b.defaultInstance);
b.registerSymbol = b.defaultInstance.registerSymbol.bind(b.defaultInstance);
b.registerCustom = b.defaultInstance.registerCustom.bind(b.defaultInstance);
b.allowErrorProps = b.defaultInstance.allowErrorProps.bind(b.defaultInstance);
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
const Wn = /#/g, xs = /&/g, Gs = /\//g, Bs = /=/g, $s = /\?/g, qn = /\+/g, Hs = /%5B/g, zs = /%5D/g, Yn = /%5E/g, js = /%60/g, Zn = /%7B/g, Fs = /%7C/g, Xn = /%7D/g, Ks = /%20/g;
function xt(e) {
  return e == null ? "" : encodeURI("" + e).replace(Fs, "|").replace(Hs, "[").replace(zs, "]");
}
function Ws(e) {
  return xt(e).replace(Zn, "{").replace(Xn, "}").replace(Yn, "^");
}
function St(e) {
  return xt(e).replace(qn, "%2B").replace(Ks, "+").replace(Wn, "%23").replace(xs, "%26").replace(js, "`").replace(Zn, "{").replace(Xn, "}").replace(Yn, "^");
}
function qs(e) {
  return St(e).replace(Bs, "%3D");
}
function Ys(e) {
  return xt(e).replace(Wn, "%23").replace($s, "%3F");
}
function Zs(e) {
  return Ys(e).replace(Gs, "%2F");
}
function ze(e) {
  if (e == null) return null;
  try {
    return decodeURIComponent("" + e);
  } catch {
  }
  return "" + e;
}
const Xs = /\/$/, Qs = (e) => e.replace(Xs, "");
function ft(e, t, n = "/") {
  let r, o = {}, s = "", i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return c = l >= 0 && c > l ? -1 : c, c >= 0 && (r = t.slice(0, c), s = t.slice(c, l > 0 ? l : t.length), o = e(s.slice(1))), l >= 0 && (r = r || t.slice(0, l), i = t.slice(l, t.length)), r = ni(r ?? t, n), {
    fullPath: r + s + i,
    path: r,
    query: o,
    hash: ze(i)
  };
}
function Js(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function qt(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function ei(e, t, n) {
  const r = t.matched.length - 1, o = n.matched.length - 1;
  return r > -1 && r === o && pe(t.matched[r], n.matched[o]) && Qn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function pe(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Qn(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (var n in e) if (!ti(e[n], t[n])) return !1;
  return !0;
}
function ti(e, t) {
  return W(e) ? Yt(e, t) : W(t) ? Yt(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Yt(e, t) {
  return W(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
function ni(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
  (o === ".." || o === ".") && r.push("");
  let s = n.length - 1, i, l;
  for (i = 0; i < r.length; i++)
    if (l = r[i], l !== ".")
      if (l === "..")
        s > 1 && s--;
      else break;
  return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
}
const ie = {
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
const dt = "";
function Jn(e) {
  if (!e) if (ae) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Qs(e);
}
const ri = /^[^#]+#/;
function er(e, t) {
  return e.replace(ri, "#") + t;
}
function oi(e, t) {
  const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - n.left - (t.left || 0),
    top: r.top - n.top - (t.top || 0)
  };
}
const st = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function si(e) {
  let t;
  if ("el" in e) {
    const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!o)
      return;
    t = oi(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Zt(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const It = /* @__PURE__ */ new Map();
function ii(e, t) {
  It.set(e, t);
}
function ai(e) {
  const t = It.get(e);
  return It.delete(e), t;
}
function tr(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function nr(e) {
  return typeof e == "string" || typeof e == "symbol";
}
function rr(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const o = n[r].replace(qn, " "), s = o.indexOf("="), i = ze(s < 0 ? o : o.slice(0, s)), l = s < 0 ? null : ze(o.slice(s + 1));
    if (i in t) {
      let c = t[i];
      W(c) || (c = t[i] = [c]), c.push(l);
    } else t[i] = l;
  }
  return t;
}
function Nt(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (n = qs(n), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (W(r) ? r.map((o) => o && St(o)) : [r && St(r)]).forEach((o) => {
      o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
    });
  }
  return t;
}
function li(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = W(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
  }
  return t;
}
function ke() {
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
function or(e, t, n) {
  const r = e.value;
  if (!r)
    return;
  let o = r;
  const s = () => {
    o[t].delete(n);
  };
  Or(s), Tr(s), yr(() => {
    const i = e.value;
    i && (o = i), o[t].add(n);
  }), o[t].add(n);
}
function ci(e) {
  or(le(et, {}), "leaveGuards", e);
}
function ui(e) {
  or(le(et, {}), "updateGuards", e);
}
function fe(e, t, n, r, o, s = (i) => i()) {
  const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () => new Promise((l, c) => {
    const d = (f) => {
      f === !1 ? c(Ie(D.NAVIGATION_ABORTED, {
        from: n,
        to: t
      })) : f instanceof Error ? c(f) : tr(f) ? c(Ie(D.NAVIGATION_GUARD_REDIRECT, {
        from: t,
        to: f
      })) : (i && r.enterCallbacks[o] === i && typeof f == "function" && i.push(f), l());
    }, p = s(() => e.call(r && r.instances[o], t, n, d));
    let a = Promise.resolve(p);
    e.length < 3 && (a = a.then(d)), a.catch((f) => c(f));
  });
}
function pt(e, t, n, r, o = (s) => s()) {
  const s = [];
  for (const i of e)
    for (const l in i.components) {
      let c = i.components[l];
      if (!(t !== "beforeRouteEnter" && !i.instances[l]))
        if (un(c)) {
          const d = (c.__vccOpts || c)[t];
          d && s.push(fe(d, n, r, i, l, o));
        } else {
          let d = c();
          s.push(() => d.then((p) => {
            if (!p) throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
            const a = fn(p) ? p.default : p;
            i.mods[l] = p, i.components[l] = a;
            const f = (a.__vccOpts || a)[t];
            return f && fe(f, n, r, i, l, o)();
          }));
        }
    }
  return s;
}
function fi(e) {
  return e.matched.every((t) => t.redirect) ? Promise.reject(/* @__PURE__ */ new Error("Cannot load a route that redirects.")) : Promise.all(e.matched.map((t) => t.components && Promise.all(Object.keys(t.components).reduce((n, r) => {
    const o = t.components[r];
    return typeof o == "function" && !("displayName" in o) && n.push(o().then((s) => {
      if (!s) return Promise.reject(/* @__PURE__ */ new Error(`Couldn't resolve component "${r}" at "${t.path}". Ensure you passed a function that returns a promise.`));
      const i = fn(s) ? s.default : s;
      t.mods[r] = s, t.components[r] = i;
    })), n;
  }, [])))).then(() => e);
}
function di(e, t) {
  const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find((d) => pe(d, l)) ? r.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((d) => pe(d, c)) || o.push(c));
  }
  return [
    n,
    r,
    o
  ];
}
function De(e, t) {
  const n = P({}, e, { matched: e.matched.map((r) => Ri(r, [
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
let pi = 0;
function _i(e, t, n) {
  if (t.__hasDevtools) return;
  t.__hasDevtools = !0;
  const r = pi++;
  es({
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
        value: De(t.currentRoute.value, "Current Route")
      });
    }), o.on.visitComponentTree(({ treeNode: p, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const f = a.__vrv_devtools;
        p.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: sr
        });
      }
      W(a.__vrl_devtools) && (a.__devtoolsApi = o, a.__vrl_devtools.forEach((f) => {
        let u = f.route.path, h = lr, g = "", E = 0;
        f.error ? (u = f.error, h = Oi, E = Ti) : f.isExactActive ? (h = ar, g = "This is exactly active") : f.isActive && (h = ir, g = "This link is active"), p.tags.push({
          label: u,
          textColor: E,
          tooltip: g,
          backgroundColor: h
        });
      }));
    }), an(t.currentRoute, () => {
      c(), o.notifyComponentUpdate(), o.sendInspectorTree(l), o.sendInspectorState(l);
    });
    const s = "router:navigations:" + r;
    o.addTimelineLayer({
      id: s,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((p, a) => {
      o.addTimelineEvent({
        layerId: s,
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
    let i = 0;
    t.beforeEach((p, a) => {
      const f = {
        guard: Ke("beforeEach"),
        from: De(a, "Current Location during this navigation"),
        to: De(p, "Target location")
      };
      Object.defineProperty(p.meta, "__navigationId", { value: i++ }), o.addTimelineEvent({
        layerId: s,
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
      } }, u.status = Ke("❌")) : u.status = Ke("✅"), u.from = De(a, "Current Location during this navigation"), u.to = De(p, "Target location"), o.addTimelineEvent({
        layerId: s,
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
      a.forEach(fr), p.filter && (a = a.filter((f) => At(f, p.filter.toLowerCase()))), a.forEach((f) => ur(f, t.currentRoute.value)), p.rootNodes = a.map(cr);
    }
    let d;
    o.on.getInspectorTree((p) => {
      d = p, p.app === e && p.inspectorId === l && c();
    }), o.on.getInspectorState((p) => {
      if (p.app === e && p.inspectorId === l) {
        const a = n.getRoutes().find((f) => f.record.__vd_id === p.nodeId);
        a && (p.state = { options: Ei(a) });
      }
    }), o.sendInspectorTree(l), o.sendInspectorState(l);
  });
}
function hi(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function Ei(e) {
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
      display: e.keys.map((r) => `${r.name}${hi(r)}`).join(" "),
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
const sr = 15485081, ir = 2450411, ar = 8702998, mi = 2282478, lr = 16486972, gi = 6710886, Oi = 16704226, Ti = 12131356;
function cr(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: mi
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: lr
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: sr
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: ar
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: ir
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: gi
  });
  let r = n.__vd_id;
  return r == null && (r = String(yi++), n.__vd_id = r), {
    id: r,
    label: n.path,
    tags: t,
    children: e.children.map(cr)
  };
}
let yi = 0;
const vi = /^\/(.*)\/([a-z]*)$/;
function ur(e, t) {
  const n = t.matched.length && pe(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((r) => pe(r, e.record))), e.children.forEach((r) => ur(r, t));
}
function fr(e) {
  e.__vd_match = !1, e.children.forEach(fr);
}
function At(e, t) {
  const n = String(e.re).match(vi);
  if (e.__vd_match = !1, !n || n.length < 3) return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((s) => At(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const r = e.record.path.toLowerCase(), o = ze(r);
  return !t.startsWith("/") && (o.includes(t) || r.includes(t)) || o.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => At(s, t));
}
function Ri(e, t) {
  const n = {};
  for (const r in e) t.includes(r) || (n[r] = e[r]);
  return n;
}
/*!
 * vue-router v5.0.6
 * (c) 2026 Eduardo San Martin Morote
 * @license MIT
 */
let Si = () => location.protocol + "//" + location.host;
function dr(e, t) {
  const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
  if (s > -1) {
    let i = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(i);
    return l[0] !== "/" && (l = "/" + l), qt(l, "");
  }
  return qt(n, e) + r + o;
}
function Ii(e, t, n, r) {
  let o = [], s = [], i = null;
  const l = ({ state: f }) => {
    const u = dr(e, location), h = n.value, g = t.value;
    let E = 0;
    if (f) {
      if (n.value = u, t.value = f, i && i === h) {
        i = null;
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
    i = n.value;
  }
  function d(f) {
    o.push(f);
    const u = () => {
      const h = o.indexOf(f);
      h > -1 && o.splice(h, 1);
    };
    return s.push(u), u;
  }
  function p() {
    if (document.visibilityState === "hidden") {
      const { history: f } = window;
      if (!f.state) return;
      f.replaceState(P({}, f.state, { scroll: st() }), "");
    }
  }
  function a() {
    for (const f of s) f();
    s = [], window.removeEventListener("popstate", l), window.removeEventListener("pagehide", p), document.removeEventListener("visibilitychange", p);
  }
  return window.addEventListener("popstate", l), window.addEventListener("pagehide", p), document.addEventListener("visibilitychange", p), {
    pauseListeners: c,
    listen: d,
    destroy: a
  };
}
function Xt(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? st() : null
  };
}
function Ni(e) {
  const { history: t, location: n } = window, r = { value: dr(e, n) }, o = { value: t.state };
  o.value || s(r.value, {
    back: null,
    current: r.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function s(c, d, p) {
    const a = e.indexOf("#"), f = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + c : Si() + e + c;
    try {
      t[p ? "replaceState" : "pushState"](d, "", f), o.value = d;
    } catch (u) {
      console.error(u), n[p ? "replace" : "assign"](f);
    }
  }
  function i(c, d) {
    s(c, P({}, t.state, Xt(o.value.back, c, o.value.forward, !0), d, { position: o.value.position }), !0), r.value = c;
  }
  function l(c, d) {
    const p = P({}, o.value, t.state, {
      forward: c,
      scroll: st()
    });
    s(p.current, p, !0), s(c, P({}, Xt(r.value, c, null), { position: p.position + 1 }, d), !1), r.value = c;
  }
  return {
    location: r,
    state: o,
    push: l,
    replace: i
  };
}
function pr(e) {
  e = Jn(e);
  const t = Ni(e), n = Ii(e, t.state, t.location, t.replace);
  function r(s, i = !0) {
    i || n.pauseListeners(), history.go(s);
  }
  const o = P({
    location: "",
    base: e,
    go: r,
    createHref: er.bind(null, e)
  }, t, n);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function Ai(e = "") {
  let t = [], n = [[dt, {}]], r = 0;
  e = Jn(e);
  function o(l, c = {}) {
    r++, r !== n.length && n.splice(r), n.push([l, c]);
  }
  function s(l, c, { direction: d, delta: p }) {
    const a = {
      direction: d,
      delta: p,
      type: Je.pop
    };
    for (const f of t) f(l, c, a);
  }
  const i = {
    location: dt,
    state: {},
    base: e,
    createHref: er.bind(null, e),
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
      t = [], n = [[dt, {}]], r = 0;
    },
    go(l, c = !0) {
      const d = this.location, p = l < 0 ? xe.back : xe.forward;
      r = Math.max(0, Math.min(r + l, n.length - 1)), c && s(this.location, d, {
        direction: p,
        delta: l
      });
    }
  };
  return Object.defineProperty(i, "location", {
    enumerable: !0,
    get: () => n[r][0]
  }), Object.defineProperty(i, "state", {
    enumerable: !0,
    get: () => n[r][1]
  }), i;
}
function Ci(e) {
  return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), pr(e);
}
let he = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e;
})({});
var U = /* @__PURE__ */ (function(e) {
  return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e;
})(U || {});
const Pi = {
  type: he.Static,
  value: ""
}, bi = /[a-zA-Z0-9_]/;
function wi(e) {
  if (!e) return [[]];
  if (e === "/") return [[Pi]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(u) {
    throw new Error(`ERR (${n})/"${d}": ${u}`);
  }
  let n = U.Static, r = n;
  const o = [];
  let s;
  function i() {
    s && o.push(s), s = [];
  }
  let l = 0, c, d = "", p = "";
  function a() {
    d && (n === U.Static ? s.push({
      type: he.Static,
      value: d
    }) : n === U.Param || n === U.ParamRegExp || n === U.ParamRegExpEnd ? (s.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`), s.push({
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
        c === "/" ? (d && a(), i()) : c === ":" ? (a(), n = U.Param) : f();
        break;
      case U.EscapeNext:
        f(), n = r;
        break;
      case U.Param:
        c === "(" ? n = U.ParamRegExp : bi.test(c) ? f() : (a(), n = U.Static, c !== "*" && c !== "?" && c !== "+" && l--);
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
  return n === U.ParamRegExp && t(`Unfinished custom RegExp for param "${d}"`), a(), i(), o;
}
const Qt = "[^/]+?", ki = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
};
var H = /* @__PURE__ */ (function(e) {
  return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = 0.7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = 0.25] = "BonusCaseSensitive", e;
})(H || {});
const Di = /[.+*?^${}()[\]/\\]/g;
function Li(e, t) {
  const n = P({}, ki, t), r = [];
  let o = n.start ? "^" : "";
  const s = [];
  for (const d of e) {
    const p = d.length ? [] : [H.Root];
    n.strict && !d.length && (o += "/");
    for (let a = 0; a < d.length; a++) {
      const f = d[a];
      let u = H.Segment + (n.sensitive ? H.BonusCaseSensitive : 0);
      if (f.type === he.Static)
        a || (o += "/"), o += f.value.replace(Di, "\\$&"), u += H.Static;
      else if (f.type === he.Param) {
        const { value: h, repeatable: g, optional: E, regexp: m } = f;
        s.push({
          name: h,
          repeatable: g,
          optional: E
        });
        const y = m || Qt;
        if (y !== Qt) {
          u += H.BonusCustomRegExp;
          try {
            new RegExp(`(${y})`);
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${h}" (${y}): ` + k.message);
          }
        }
        let R = g ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`;
        a || (R = E && d.length < 2 ? `(?:/${R})` : "/" + R), E && (R += "?"), o += R, u += H.Dynamic, E && (u += H.BonusOptional), g && (u += H.BonusRepeatable), y === ".*" && (u += H.BonusWildcard);
      }
      p.push(u);
    }
    r.push(p);
  }
  if (n.strict && n.end) {
    const d = r.length - 1;
    r[d][r[d].length - 1] += H.BonusStrict;
  }
  n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
  const i = new RegExp(o, n.sensitive ? "" : "i");
  function l(d) {
    const p = d.match(i), a = {};
    if (!p) return null;
    for (let f = 1; f < p.length; f++) {
      const u = p[f] || "", h = s[f - 1];
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
        if (W(m) && !g) throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
        const y = W(m) ? m.join("/") : m;
        if (!y) if (E)
          f.length < 2 && (p.endsWith("/") ? p = p.slice(0, -1) : a = !0);
        else throw new Error(`Missing required param "${h}"`);
        p += y;
      }
    }
    return p || "/";
  }
  return {
    re: i,
    score: r,
    keys: s,
    parse: l,
    stringify: c
  };
}
function Vi(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === H.Static + H.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === H.Static + H.Segment ? 1 : -1 : 0;
}
function _r(e, t) {
  let n = 0;
  const r = e.score, o = t.score;
  for (; n < r.length && n < o.length; ) {
    const s = Vi(r[n], o[n]);
    if (s) return s;
    n++;
  }
  if (Math.abs(o.length - r.length) === 1) {
    if (Jt(r)) return 1;
    if (Jt(o)) return -1;
  }
  return o.length - r.length;
}
function Jt(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ui = {
  strict: !1,
  end: !0,
  sensitive: !1
};
function Mi(e, t, n) {
  const r = Li(wi(e.path), n), o = P(r, {
    record: e,
    parent: t,
    children: [],
    alias: []
  });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function hr(e, t) {
  const n = [], r = /* @__PURE__ */ new Map();
  t = Gt(Ui, t);
  function o(a) {
    return r.get(a);
  }
  function s(a, f, u) {
    const h = !u, g = tn(a);
    g.aliasOf = u && u.record;
    const E = Gt(t, a), m = [g];
    if ("alias" in a) {
      const k = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const Z of k) m.push(tn(P({}, g, {
        components: u ? u.record.components : g.components,
        path: Z,
        aliasOf: u ? u.record : g
      })));
    }
    let y, R;
    for (const k of m) {
      const { path: Z } = k;
      if (f && Z[0] !== "/") {
        const x = f.record.path, B = x[x.length - 1] === "/" ? "" : "/";
        k.path = f.record.path + (Z && B + Z);
      }
      if (y = Mi(k, f, E), u ? u.alias.push(y) : (R = R || y, R !== y && R.alias.push(y), h && a.name && !nn(y) && i(a.name)), Er(y) && c(y), g.children) {
        const x = g.children;
        for (let B = 0; B < x.length; B++) s(x[B], y, u && u.children[B]);
      }
      u = u || y;
    }
    return R ? () => {
      i(R);
    } : Ve;
  }
  function i(a) {
    if (nr(a)) {
      const f = r.get(a);
      f && (r.delete(a), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i));
    } else {
      const f = n.indexOf(a);
      f > -1 && (n.splice(f, 1), a.record.name && r.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(a) {
    const f = Bi(a, n);
    n.splice(f, 0, a), a.record.name && !nn(a) && r.set(a.record.name, a);
  }
  function d(a, f) {
    let u, h = {}, g, E;
    if ("name" in a && a.name) {
      if (u = r.get(a.name), !u) throw Ie(D.MATCHER_NOT_FOUND, { location: a });
      E = u.record.name, h = P(en(f.params, u.keys.filter((R) => !R.optional).concat(u.parent ? u.parent.keys.filter((R) => R.optional) : []).map((R) => R.name)), a.params && en(a.params, u.keys.map((R) => R.name))), g = u.stringify(h);
    } else if (a.path != null)
      g = a.path, u = n.find((R) => R.re.test(g)), u && (h = u.parse(g), E = u.record.name);
    else {
      if (u = f.name ? r.get(f.name) : n.find((R) => R.re.test(f.path)), !u) throw Ie(D.MATCHER_NOT_FOUND, {
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
      meta: Gi(m)
    };
  }
  e.forEach((a) => s(a));
  function p() {
    n.length = 0, r.clear();
  }
  return {
    addRoute: s,
    resolve: d,
    removeRoute: i,
    clearRoutes: p,
    getRoutes: l,
    getRecordMatcher: o
  };
}
function en(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function tn(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: xi(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", { value: {} }), t;
}
function xi(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
  return t;
}
function nn(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Gi(e) {
  return e.reduce((t, n) => P(t, n.meta), {});
}
function Bi(e, t) {
  let n = 0, r = t.length;
  for (; n !== r; ) {
    const s = n + r >> 1;
    _r(e, t[s]) < 0 ? r = s : n = s + 1;
  }
  const o = $i(e);
  return o && (r = t.lastIndexOf(o, r - 1)), r;
}
function $i(e) {
  let t = e;
  for (; t = t.parent; ) if (Er(t) && _r(e, t) === 0) return t;
}
function Er({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Ct(e) {
  const t = le(je), n = le(tt), r = re(() => {
    const c = Re(e.to);
    return t.resolve(c);
  }), o = re(() => {
    const { matched: c } = r.value, { length: d } = c, p = c[d - 1], a = n.matched;
    if (!p || !a.length) return -1;
    const f = a.findIndex(pe.bind(null, p));
    if (f > -1) return f;
    const u = rn(c[d - 2]);
    return d > 1 && rn(p) === u && a[a.length - 1].path !== u ? a.findIndex(pe.bind(null, c[d - 2])) : f;
  }), s = re(() => o.value > -1 && Fi(n.params, r.value.params)), i = re(() => o.value > -1 && o.value === n.matched.length - 1 && Qn(n.params, r.value.params));
  function l(c = {}) {
    if (ji(c)) {
      const d = t[Re(e.replace) ? "replace" : "push"](Re(e.to)).catch(Ve);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => d), d;
    }
    return Promise.resolve();
  }
  if (ae) {
    const c = Ir();
    if (c) {
      const d = {
        route: r.value,
        isActive: s.value,
        isExactActive: i.value,
        error: null
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(d), Nr(() => {
        d.route = r.value, d.isActive = s.value, d.isExactActive = i.value, d.error = tr(Re(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: re(() => r.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l
  };
}
function Hi(e) {
  return e.length === 1 ? e[0] : e;
}
const zi = /* @__PURE__ */ ln({
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
  useLink: Ct,
  setup(e, { slots: t }) {
    const n = vr(Ct(e)), { options: r } = le(je), o = re(() => ({
      [on(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      [on(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const s = t.default && Hi(t.default(n));
      return e.custom ? s : cn("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        onClick: n.navigate,
        class: o.value
      }, s);
    };
  }
}), mr = zi;
function ji(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Fi(e, t) {
  for (const n in t) {
    const r = t[n], o = e[n];
    if (typeof r == "string") {
      if (r !== o) return !1;
    } else if (!W(o) || o.length !== r.length || r.some((s, i) => s.valueOf() !== o[i].valueOf())) return !1;
  }
  return !0;
}
function rn(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const on = (e, t, n) => e ?? t ?? n, Ki = /* @__PURE__ */ ln({
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
    const r = le(Ye), o = re(() => e.route || r.value), s = le(_t, 0), i = re(() => {
      let d = Re(s);
      const { matched: p } = o.value;
      let a;
      for (; (a = p[d]) && !a.components; ) d++;
      return d;
    }), l = re(() => o.value.matched[i.value]);
    it(_t, re(() => i.value + 1)), it(et, l), it(Ye, o);
    const c = Rr();
    return an(() => [
      c.value,
      l.value,
      e.name
    ], ([d, p, a], [f, u, h]) => {
      p && (p.instances[a] = d, u && u !== p && d && d === f && (p.leaveGuards.size || (p.leaveGuards = u.leaveGuards), p.updateGuards.size || (p.updateGuards = u.updateGuards))), d && p && (!u || !pe(p, u) || !f) && (p.enterCallbacks[a] || []).forEach((g) => g(d));
    }, { flush: "post" }), () => {
      const d = o.value, p = e.name, a = l.value, f = a && a.components[p];
      if (!f) return sn(n.default, {
        Component: f,
        route: d
      });
      const u = a.props[p], h = u ? u === !0 ? d.params : typeof u == "function" ? u(d) : u : null, E = cn(f, P({}, h, t, {
        onVnodeUnmounted: (m) => {
          m.component.isUnmounted && (a.instances[p] = null);
        },
        ref: c
      }));
      if (ae && E.ref) {
        const m = {
          depth: i.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (W(E.ref) ? E.ref.map((y) => y.i) : [E.ref.i]).forEach((y) => {
          y.__vrv_devtools = m;
        });
      }
      return sn(n.default, {
        Component: E,
        route: d
      }) || E;
    };
  }
});
function sn(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const gr = Ki;
function Wi(e) {
  const t = hr(e.routes, e), n = e.parseQuery || rr, r = e.stringifyQuery || Nt, o = e.history, s = ke(), i = ke(), l = ke(), c = Sr(ie);
  let d = ie;
  ae && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const p = at.bind(null, (_) => "" + _), a = at.bind(null, Zs), f = at.bind(null, ze);
  function u(_, v) {
    let O, S;
    return nr(_) ? (O = t.getRecordMatcher(_), S = v) : S = _, t.addRoute(S, O);
  }
  function h(_) {
    const v = t.getRecordMatcher(_);
    v && t.removeRoute(v);
  }
  function g() {
    return t.getRoutes().map((_) => _.record);
  }
  function E(_) {
    return !!t.getRecordMatcher(_);
  }
  function m(_, v) {
    if (v = P({}, v || c.value), typeof _ == "string") {
      const N = ft(n, _, v.path), V = t.resolve({ path: N.path }, v), we = o.createHref(N.fullPath);
      return P(N, V, {
        params: f(V.params),
        redirectedFrom: void 0,
        href: we
      });
    }
    let O;
    if (_.path != null)
      O = P({}, _, { path: ft(n, _.path, v.path).path });
    else {
      const N = P({}, _.params);
      for (const V in N) N[V] == null && delete N[V];
      O = P({}, _, { params: a(N) }), v.params = a(v.params);
    }
    const S = t.resolve(O, v), C = _.hash || "";
    S.params = p(f(S.params));
    const L = Js(r, P({}, _, {
      hash: Ws(C),
      path: S.path
    })), A = o.createHref(L);
    return P({
      fullPath: L,
      hash: C,
      query: r === Nt ? li(_.query) : _.query || {}
    }, S, {
      redirectedFrom: void 0,
      href: A
    });
  }
  function y(_) {
    return typeof _ == "string" ? ft(n, _, c.value.path) : P({}, _);
  }
  function R(_, v) {
    if (d !== _) return Ie(D.NAVIGATION_CANCELLED, {
      from: v,
      to: _
    });
  }
  function k(_) {
    return B(_);
  }
  function Z(_) {
    return k(P(y(_), { replace: !0 }));
  }
  function x(_, v) {
    const O = _.matched[_.matched.length - 1];
    if (O && O.redirect) {
      const { redirect: S } = O;
      let C = typeof S == "function" ? S(_, v) : S;
      return typeof C == "string" && (C = C.includes("?") || C.includes("#") ? C = y(C) : { path: C }, C.params = {}), P({
        query: _.query,
        hash: _.hash,
        params: C.path != null ? {} : _.params
      }, C);
    }
  }
  function B(_, v) {
    const O = d = m(_), S = c.value, C = _.state, L = _.force, A = _.replace === !0, N = x(O, S);
    if (N) return B(P(y(N), {
      state: typeof N == "object" ? P({}, C, N.state) : C,
      force: L,
      replace: A
    }), v || O);
    const V = O;
    V.redirectedFrom = v;
    let we;
    return !L && ei(r, S, O) && (we = Ie(D.NAVIGATION_DUPLICATED, {
      to: V,
      from: S
    }), Q(S, S, !0, !1)), (we ? Promise.resolve(we) : Oe(V, S)).catch((j) => ne(j) ? ne(j, D.NAVIGATION_GUARD_REDIRECT) ? j : J(j) : ue(j, V, S)).then((j) => {
      if (j) {
        if (ne(j, D.NAVIGATION_GUARD_REDIRECT))
          return B(P({ replace: A }, y(j.to), {
            state: typeof j.to == "object" ? P({}, C, j.to.state) : C,
            force: L
          }), v || V);
      } else j = be(V, S, !0, A, C);
      return Te(V, S, j), j;
    });
  }
  function ge(_, v) {
    const O = R(_, v);
    return O ? Promise.reject(O) : Promise.resolve();
  }
  function oe(_) {
    const v = _e.values().next().value;
    return v && typeof v.runWithContext == "function" ? v.runWithContext(_) : _();
  }
  function Oe(_, v) {
    let O;
    const [S, C, L] = di(_, v);
    O = pt(S.reverse(), "beforeRouteLeave", _, v);
    for (const N of S) N.leaveGuards.forEach((V) => {
      O.push(fe(V, _, v));
    });
    const A = ge.bind(null, _, v);
    return O.push(A), ve(O).then(() => {
      O = [];
      for (const N of s.list()) O.push(fe(N, _, v));
      return O.push(A), ve(O);
    }).then(() => {
      O = pt(C, "beforeRouteUpdate", _, v);
      for (const N of C) N.updateGuards.forEach((V) => {
        O.push(fe(V, _, v));
      });
      return O.push(A), ve(O);
    }).then(() => {
      O = [];
      for (const N of L) if (N.beforeEnter) if (W(N.beforeEnter)) for (const V of N.beforeEnter) O.push(fe(V, _, v));
      else O.push(fe(N.beforeEnter, _, v));
      return O.push(A), ve(O);
    }).then(() => (_.matched.forEach((N) => N.enterCallbacks = {}), O = pt(L, "beforeRouteEnter", _, v, oe), O.push(A), ve(O))).then(() => {
      O = [];
      for (const N of i.list()) O.push(fe(N, _, v));
      return O.push(A), ve(O);
    }).catch((N) => ne(N, D.NAVIGATION_CANCELLED) ? N : Promise.reject(N));
  }
  function Te(_, v, O) {
    l.list().forEach((S) => oe(() => S(_, v, O)));
  }
  function be(_, v, O, S, C) {
    const L = R(_, v);
    if (L) return L;
    const A = v === ie, N = ae ? history.state : {};
    O && (S || A ? o.replace(_.fullPath, P({ scroll: A && N && N.scroll }, C)) : o.push(_.fullPath, C)), c.value = _, Q(_, v, O, A), J();
  }
  let X;
  function ce() {
    X || (X = o.listen((_, v, O) => {
      if (!ee.listening) return;
      const S = m(_), C = x(S, ee.currentRoute.value);
      if (C) {
        B(P(C, {
          replace: !0,
          force: !0
        }), S).catch(Ve);
        return;
      }
      d = S;
      const L = c.value;
      ae && ii(Zt(L.fullPath, O.delta), st()), Oe(S, L).catch((A) => ne(A, D.NAVIGATION_ABORTED | D.NAVIGATION_CANCELLED) ? A : ne(A, D.NAVIGATION_GUARD_REDIRECT) ? (B(P(y(A.to), { force: !0 }), S).then((N) => {
        ne(N, D.NAVIGATION_ABORTED | D.NAVIGATION_DUPLICATED) && !O.delta && O.type === Je.pop && o.go(-1, !1);
      }).catch(Ve), Promise.reject()) : (O.delta && o.go(-O.delta, !1), ue(A, S, L))).then((A) => {
        A = A || be(S, L, !1), A && (O.delta && !ne(A, D.NAVIGATION_CANCELLED) ? o.go(-O.delta, !1) : O.type === Je.pop && ne(A, D.NAVIGATION_ABORTED | D.NAVIGATION_DUPLICATED) && o.go(-1, !1)), Te(S, L, A);
      }).catch(Ve);
    }));
  }
  let ye = ke(), q = ke(), I;
  function ue(_, v, O) {
    J(_);
    const S = q.list();
    return S.length ? S.forEach((C) => C(_, v, O)) : console.error(_), Promise.reject(_);
  }
  function Y() {
    return I && c.value !== ie ? Promise.resolve() : new Promise((_, v) => {
      ye.add([_, v]);
    });
  }
  function J(_) {
    return I || (I = !_, ce(), ye.list().forEach(([v, O]) => _ ? O(_) : v()), ye.reset()), _;
  }
  function Q(_, v, O, S) {
    const { scrollBehavior: C } = e;
    if (!ae || !C) return Promise.resolve();
    const L = !O && ai(Zt(_.fullPath, 0)) || (S || !O) && history.state && history.state.scroll || null;
    return Cr().then(() => C(_, v, L)).then((A) => A && si(A)).catch((A) => ue(A, _, v));
  }
  const $ = (_) => o.go(_);
  let se;
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
    push: k,
    replace: Z,
    go: $,
    back: () => $(-1),
    forward: () => $(1),
    beforeEach: s.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: q.add,
    isReady: Y,
    install(_) {
      _.component("RouterLink", mr), _.component("RouterView", gr), _.config.globalProperties.$router = ee, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Re(c)
      }), ae && !se && c.value === ie && (se = !0, k(o.location).catch((S) => {
      }));
      const v = {};
      for (const S in ie) Object.defineProperty(v, S, {
        get: () => c.value[S],
        enumerable: !0
      });
      _.provide(je, ee), _.provide(tt, Ar(v)), _.provide(Ye, c);
      const O = _.unmount;
      _e.add(_), _.unmount = function() {
        _e.delete(_), _e.size < 1 && (d = ie, X && X(), X = null, c.value = ie, se = !1, I = !1), O();
      }, ae && _i(_, ee, t);
    }
  };
  function ve(_) {
    return _.reduce((v, O) => v.then(() => oe(O)), Promise.resolve());
  }
  return ee;
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NavigationFailureType: Pr,
  RouterLink: mr,
  RouterView: gr,
  START_LOCATION: ie,
  createMemoryHistory: Ai,
  createRouter: Wi,
  createRouterMatcher: hr,
  createWebHashHistory: Ci,
  createWebHistory: pr,
  isNavigationFailure: ne,
  loadRouteLocation: fi,
  matchedRouteKey: et,
  onBeforeRouteLeave: ci,
  onBeforeRouteUpdate: ui,
  parseQuery: rr,
  routeLocationKey: tt,
  routerKey: je,
  routerViewLocationKey: Ye,
  stringifyQuery: Nt,
  useLink: Ct,
  useRoute: Dr,
  useRouter: kr,
  viewDepthKey: _t
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pr as NavigationFailureType,
  mr as RouterLink,
  gr as RouterView,
  ie as START_LOCATION,
  Ai as createMemoryHistory,
  Wi as createRouter,
  hr as createRouterMatcher,
  Ci as createWebHashHistory,
  pr as createWebHistory,
  Yi as default,
  ne as isNavigationFailure,
  fi as loadRouteLocation,
  et as matchedRouteKey,
  ci as onBeforeRouteLeave,
  ui as onBeforeRouteUpdate,
  rr as parseQuery,
  tt as routeLocationKey,
  je as routerKey,
  Ye as routerViewLocationKey,
  Nt as stringifyQuery,
  Ct as useLink,
  Dr as useRoute,
  kr as useRouter,
  _t as viewDepthKey
};
