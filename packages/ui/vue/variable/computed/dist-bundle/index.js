(function(){var i="ui.vue.variable.computed",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".settings[data-v-76ad0a5e]{display:flex;flex-direction:column;gap:4px}\n";})();
import { VARIABLE_REPOSITORY as de } from "org.eclipse.daanse.board.app.lib.api.variable";
import { COMPUTED_VARIABLE as he, ComputedVariableSymbol as je } from "org.eclipse.daanse.board.app.lib.variables";
import { DInput as oe } from "org.eclipse.daanse.board.app.ui.vue.controls";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const E = {}, ze = [], N = () => {
}, Be = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $ = Object.assign, S = Array.isArray, We = (e) => X(e) === "[object Map]", Ue = (e) => X(e) === "[object Set]", b = (e) => typeof e == "function", D = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", He = (e) => (k(e) || b(e)) && b(e.then) && b(e.catch), qe = Object.prototype.toString, X = (e) => qe.call(e), Je = (e) => X(e) === "[object Object]", ge = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ye = /-\w/g, _e = ge(
  (e) => e.replace(Ye, (t) => t.slice(1).toUpperCase())
), Ge = /\B([A-Z])/g, me = ge(
  (e) => e.replace(Ge, "-$1").toLowerCase()
), T = (e, t) => !Object.is(e, t);
let ce;
const ee = () => ce || (ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function te(e) {
  if (S(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = D(s) ? Xe(s) : te(s);
      if (i)
        for (const l in i)
          t[l] = i[l];
    }
    return t;
  } else if (D(e) || k(e))
    return e;
}
const Ke = /;(?![^(]*\))/g, Qe = /:([^]+)/, Ze = /\/\*[^]*?\*\//g;
function Xe(e) {
  const t = {};
  return e.replace(Ze, "").split(Ke).forEach((n) => {
    if (n) {
      const s = n.split(Qe);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ne(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (S(e))
    for (let n = 0; n < e.length; n++) {
      const s = ne(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let p;
const H = /* @__PURE__ */ new WeakSet();
class et {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, H.has(this) && (H.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || tt(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fe(this), ye(this);
    const t = p, n = x;
    p = this, x = !0;
    try {
      return this.fn();
    } finally {
      Se(this), p = t, x = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        se(t);
      this.deps = this.depsTail = void 0, fe(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? H.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    J(this) && this.run();
  }
  get dirty() {
    return J(this);
  }
}
let be = 0, O, A;
function tt(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = A, A = e;
    return;
  }
  e.next = O, O = e;
}
function nt() {
  be++;
}
function st() {
  if (--be > 0)
    return;
  if (A) {
    let t = A;
    for (A = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; O; ) {
    let t = O;
    for (O = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ye(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Se(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), se(s), lt(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function J(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (it(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function it(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Y) || (e.globalVersion = Y, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !J(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = p, s = x;
  p = e, x = !0;
  try {
    ye(e);
    const i = e.fn(e._value);
    (t.version === 0 || T(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    p = n, x = s, Se(e), e.flags &= -3;
  }
}
function se(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      se(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lt(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let x = !0;
const ve = [];
function xe() {
  ve.push(x), x = !1;
}
function Ce() {
  const e = ve.pop();
  x = e === void 0 ? !0 : e;
}
function fe(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = p;
    p = void 0;
    try {
      t();
    } finally {
      p = n;
    }
  }
}
let Y = 0;
class rt {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ot {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!p || !x || p === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== p)
      n = this.activeLink = new rt(p, this), p.deps ? (n.prevDep = p.depsTail, p.depsTail.nextDep = n, p.depsTail = n) : p.deps = p.depsTail = n, Ie(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = p.depsTail, n.nextDep = void 0, p.depsTail.nextDep = n, p.depsTail = n, p.deps === n && (p.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Y++, this.notify(t);
  }
  notify(t) {
    nt();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      st();
    }
  }
}
function Ie(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ie(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
);
function j(e) {
  return ct(e) ? j(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function q(e) {
  return !!(e && e.__v_isShallow);
}
function Te(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ae(e) {
  return F(e) ? e.value : e;
}
class ft {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new ot(), { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function at(e) {
  return new ft(e);
}
const ue = {}, U = /* @__PURE__ */ new WeakMap();
let z;
function ut(e, t = !1, n = z) {
  if (n) {
    let s = U.get(n);
    s || U.set(n, s = []), s.push(e);
  }
}
function pt(e, t, n = E) {
  const { immediate: s, deep: i, once: l, scheduler: a, augmentJob: f, call: o } = n, h = (u) => i ? u : q(u) || i === !1 || i === 0 ? w(u, 1) : w(u);
  let r, d, v, c, _ = !1;
  F(e) ? (d = () => e.value, q(e)) : j(e) ? d = () => h(e) : S(e) ? (_ = !0, e.some((u) => j(u) || q(u)), d = () => e.map((u) => {
    if (F(u))
      return u.value;
    if (j(u))
      return h(u);
    if (b(u))
      return o ? o(u, 2) : u();
  })) : b(e) ? d = () => {
    if (v) {
      xe();
      try {
        v();
      } finally {
        Ce();
      }
    }
    const u = z;
    z = r;
    try {
      return o ? o(e, 3, [c]) : e(c);
    } finally {
      z = u;
    }
  } : d = N;
  const g = () => {
    r.stop();
  };
  _ && new Array(e.length).fill(ue);
  const L = (u) => {
    !(r.flags & 1) || !r.dirty && !u || r.run();
  };
  return f && f(L), r = new et(d), r.scheduler = a ? () => a(L, !1) : L, c = (u) => ut(u, !1, r), v = r.onStop = () => {
    const u = U.get(r);
    if (u) {
      if (o)
        o(u, 4);
      else
        for (const Ne of u) Ne();
      U.delete(r);
    }
  }, a ? a(L.bind(null, !0), !0) : r.run(), g.pause = r.pause.bind(r), g.resume = r.resume.bind(r), g.stop = g, g;
}
function w(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, F(e))
    w(e.value, t, n);
  else if (S(e))
    for (let s = 0; s < e.length; s++)
      w(e[s], t, n);
  else if (Ue(e) || We(e))
    e.forEach((s) => {
      w(s, t, n);
    });
  else if (Je(e)) {
    for (const s in e)
      w(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && w(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ie(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Ee(i, t, n);
  }
}
function we(e, t, n, s) {
  if (b(e)) {
    const i = ie(e, t, n, s);
    return i && He(i) && i.catch((l) => {
      Ee(l, t, n);
    }), i;
  }
  if (S(e)) {
    const i = [];
    for (let l = 0; l < e.length; l++)
      i.push(we(e[l], t, n, s));
    return i;
  }
}
function Ee(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: a } = t && t.appContext.config || E;
  if (t) {
    let f = t.parent;
    const o = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const r = f.ec;
      if (r) {
        for (let d = 0; d < r.length; d++)
          if (r[d](e, o, h) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      xe(), ie(l, null, 10, [
        e,
        o,
        h
      ]), Ce();
      return;
    }
  }
  dt(e, n, i, s, a);
}
function dt(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const m = [];
let C = -1;
const V = [];
let I = null, R = 0;
const ht = /* @__PURE__ */ Promise.resolve();
let G = null;
function gt(e) {
  let t = C + 1, n = m.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = m[s], l = P(i);
    l < e || l === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function _t(e) {
  if (!(e.flags & 1)) {
    const t = P(e), n = m[m.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= P(n) ? m.push(e) : m.splice(gt(t), 0, e), e.flags |= 1, De();
  }
}
function De() {
  G || (G = ht.then(Re));
}
function mt(e) {
  S(e) ? V.push(...e) : I && e.id === -1 ? I.splice(R + 1, 0, e) : e.flags & 1 || (V.push(e), e.flags |= 1), De();
}
function bt(e) {
  if (V.length) {
    const t = [...new Set(V)].sort(
      (n, s) => P(n) - P(s)
    );
    if (V.length = 0, I) {
      I.push(...t);
      return;
    }
    for (I = t, R = 0; R < I.length; R++) {
      const n = I[R];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    I = null, R = 0;
  }
}
const P = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Re(e) {
  try {
    for (C = 0; C < m.length; C++) {
      const t = m[C];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ie(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; C < m.length; C++) {
      const t = m[C];
      t && (t.flags &= -2);
    }
    C = -1, m.length = 0, bt(), G = null, (m.length || V.length) && Re();
  }
}
let M = null, yt = null;
const St = (e) => e.__isTeleport;
function Ve(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ve(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  return b(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $({ name: e.name }, t, { setup: e })
  ) : e;
}
ee().requestIdleCallback;
ee().cancelIdleCallback;
const xt = Symbol.for("v-ndc");
let Ct = null;
function It(e, t, n = !1) {
  const s = Pe();
  if (s || Ct) {
    let i = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && b(t) ? t.call(s && s.proxy) : t;
  }
}
const Tt = {}, ke = (e) => Object.getPrototypeOf(e) === Tt, wt = Ft, Et = Symbol.for("v-scx"), Dt = () => It(Et);
function Rt(e, t) {
  return Vt(
    e,
    null,
    { flush: "sync" }
  );
}
function Vt(e, t, n = E) {
  const { immediate: s, deep: i, flush: l, once: a } = n, f = $({}, n), o = l !== "post";
  let h;
  if (Z) {
    if (l === "sync") {
      const c = Dt();
      h = c.__watcherHandles || (c.__watcherHandles = []);
    } else if (!o) {
      const c = () => {
      };
      return c.stop = N, c.resume = N, c.pause = N, c;
    }
  }
  const r = re;
  f.call = (c, _, g) => we(c, r, _, g);
  let d = !1;
  l === "post" ? f.scheduler = (c) => {
    wt(c, r && r.suspense);
  } : l !== "sync" && (d = !0, f.scheduler = (c, _) => {
    _ ? c() : _t(c);
  }), f.augmentJob = (c) => {
    d && (c.flags |= 2, r && (c.id = r.uid, c.i = r));
  };
  const v = pt(e, t, f);
  return Z && (h ? h.push(v) : o && v()), v;
}
function kt(e, t, n = E) {
  const s = Pe(), i = _e(t), l = me(t), a = Ot(e, i), f = at((o, h) => {
    let r, d = E, v;
    return Rt(() => {
      const c = e[i];
      T(r, c) && (r = c, h());
    }), {
      get() {
        return o(), n.get ? n.get(r) : r;
      },
      set(c) {
        const _ = n.set ? n.set(c) : c;
        if (!T(_, r) && !(d !== E && T(c, d)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || i in g || l in g) && (`onUpdate:${t}` in g || `onUpdate:${i}` in g || `onUpdate:${l}` in g) || (r = c, h()), s.emit(`update:${t}`, _), T(c, _) && T(c, d) && !T(_, v) && h(), d = c, v = _;
      }
    };
  });
  return f[Symbol.iterator] = () => {
    let o = 0;
    return {
      next() {
        return o < 2 ? { value: o++ ? a || E : f, done: !1 } : { done: !0 };
      }
    };
  }, f;
}
const Ot = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${me(t)}Modifiers`], At = (e) => e.__isSuspense;
function Ft(e, t) {
  t && t.pendingBranch ? S(e) ? t.effects.push(...e) : t.effects.push(e) : mt(e);
}
const Oe = Symbol.for("v-fgt"), Pt = Symbol.for("v-txt"), Mt = Symbol.for("v-cmt"), B = [];
let y = null;
function Lt(e = !1) {
  B.push(y = e ? null : []);
}
function Nt() {
  B.pop(), y = B[B.length - 1] || null;
}
function jt(e) {
  return e.dynamicChildren = y || ze, Nt(), y && y.push(e), e;
}
function zt(e, t, n, s, i, l) {
  return jt(
    Fe(
      e,
      t,
      n,
      s,
      i,
      l,
      !0
    )
  );
}
function Bt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ae = ({ key: e }) => e ?? null, W = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? D(e) || F(e) || b(e) ? { i: M, r: e, k: t, f: !!n } : e : null);
function Fe(e, t = null, n = null, s = 0, i = null, l = e === Oe ? 0 : 1, a = !1, f = !1) {
  const o = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ae(t),
    ref: t && W(t),
    scopeId: yt,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: M
  };
  return f ? (le(o, n), l & 128 && e.normalize(o)) : n && (o.shapeFlag |= D(n) ? 8 : 16), // avoid a block node from tracking itself
  !a && // has current parent block
  y && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (o.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  o.patchFlag !== 32 && y.push(o), o;
}
const K = Wt;
function Wt(e, t = null, n = null, s = 0, i = null, l = !1) {
  if ((!e || e === xt) && (e = Mt), Bt(e)) {
    const f = Q(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && le(f, n), !l && y && (f.shapeFlag & 6 ? y[y.indexOf(e)] = f : y.push(f)), f.patchFlag = -2, f;
  }
  if (qt(e) && (e = e.__vccOpts), t) {
    t = Ut(t);
    let { class: f, style: o } = t;
    f && !D(f) && (t.class = ne(f)), k(o) && (Te(o) && !S(o) && (o = $({}, o)), t.style = te(o));
  }
  const a = D(e) ? 1 : At(e) ? 128 : St(e) ? 64 : k(e) ? 4 : b(e) ? 2 : 0;
  return Fe(
    e,
    t,
    n,
    s,
    i,
    a,
    l,
    !0
  );
}
function Ut(e) {
  return e ? Te(e) || ke(e) ? $({}, e) : e : null;
}
function Q(e, t, n = !1, s = !1) {
  const { props: i, ref: l, patchFlag: a, children: f, transition: o } = e, h = t ? Ht(i || {}, t) : i, r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Ae(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? S(l) ? l.concat(W(t)) : [l, W(t)] : W(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: o,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Q(e.ssContent),
    ssFallback: e.ssFallback && Q(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return o && s && Ve(
    r,
    o.clone(r)
  ), r;
}
function $t(e = " ", t = 0) {
  return K(Pt, null, e, t);
}
function le(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (S(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), le(e, i()), i._c && (i._d = !0));
      return;
    } else
      n = 32, !t._ && !ke(t) && (t._ctx = M);
  else b(t) ? (t = { default: t, _ctx: M }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$t(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ht(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = ne([t.class, s.class]));
      else if (i === "style")
        t.style = te([t.style, s.style]);
      else if (Be(i)) {
        const l = t[i], a = s[i];
        a && l !== a && !(S(l) && l.includes(a)) && (t[i] = l ? [].concat(l, a) : a);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
let re = null;
const Pe = () => re || M;
{
  const e = ee(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (l) => {
      i.length > 1 ? i.forEach((a) => a(l)) : i[0](l);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => re = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Z = n
  );
}
let Z = !1;
function qt(e) {
  return b(e) && "__vccOpts" in e;
}
const Jt = { class: "settings" }, Yt = /* @__PURE__ */ vt({
  __name: "Settings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = kt(e, "modelValue");
    return (n, s) => (Lt(), zt("div", Jt, [
      K(ae(oe), {
        modelValue: t.value.name,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value.name = i),
        label: "Name",
        placeholder: "Wie es gelesen wird"
      }, null, 8, ["modelValue"]),
      K(ae(oe), {
        modelValue: t.value.expression,
        "onUpdate:modelValue": s[1] || (s[1] = (i) => t.value.expression = i),
        label: "Ausdruck",
        placeholder: "Woraus der Wert gerechnet wird"
      }, null, 8, ["modelValue"])
    ]));
  }
}), Gt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Kt = /* @__PURE__ */ Gt(Yt, [["__scopeId", "data-v-76ad0a5e"]]);
function Me({ services: e }) {
  e.getRequired(de).registerVariableType(he, {
    Variable: je,
    Settings: Kt
  });
}
function Le({ services: e }) {
  e.getRequired(de).unregisterVariableType(he);
}
const Qt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Me,
  deactivate: Le
}, Symbol.toStringTag, { value: "Module" })), pe = "org.eclipse.daanse.board.app.ui.vue.variable.computed", Zt = "0.0.1-next.1";
async function nn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${pe}: tsm runtime is not initialized`);
  t.register(pe, Qt, Zt, "ui.vue.variable.computed"), await Me?.(e);
}
async function sn(e) {
  await Le?.(e);
}
export {
  nn as activate,
  sn as deactivate
};
