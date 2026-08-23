import { VARIABLE_REPOSITORY as de } from "org.eclipse.daanse.board.app.lib.api.variable";
import { COMPUTED_VARIABLE as ge, ComputedVariableSymbol as je } from "org.eclipse.daanse.board.app.lib.variables";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const w = {}, ze = [], L = () => {
}, Be = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), W = Object.assign, y = Array.isArray, Ue = (e) => te(e) === "[object Map]", $e = (e) => te(e) === "[object Set]", m = (e) => typeof e == "function", D = (e) => typeof e == "string", He = (e) => typeof e == "symbol", O = (e) => e !== null && typeof e == "object", We = (e) => (O(e) || m(e)) && m(e.then) && m(e.catch), qe = Object.prototype.toString, te = (e) => qe.call(e), Je = (e) => te(e) === "[object Object]", ne = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ye = /-\w/g, k = ne(
  (e) => e.replace(Ye, (t) => t.slice(1).toUpperCase())
), Ge = /\B([A-Z])/g, me = ne(
  (e) => e.replace(Ge, "-$1").toLowerCase()
), _e = ne((e) => e.charAt(0).toUpperCase() + e.slice(1)), I = (e, t) => !Object.is(e, t);
let fe;
const se = () => fe || (fe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ie(e) {
  if (y(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = D(s) ? Xe(s) : ie(s);
      if (i)
        for (const l in i)
          t[l] = i[l];
    }
    return t;
  } else if (D(e) || O(e))
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
function le(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (y(e))
    for (let n = 0; n < e.length; n++) {
      const s = le(e[n]);
      s && (t += s + " ");
    }
  else if (O(e))
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
const J = /* @__PURE__ */ new WeakSet();
class et {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, J.has(this) && (J.delete(this), this.trigger()));
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
    this.flags |= 2, ae(this), Se(this);
    const t = p, n = x;
    p = this, x = !0;
    try {
      return this.fn();
    } finally {
      ye(this), p = t, x = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        re(t);
      this.deps = this.depsTail = void 0, ae(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? J.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    G(this) && this.run();
  }
  get dirty() {
    return G(this);
  }
}
let be = 0, A, F;
function tt(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = F, F = e;
    return;
  }
  e.next = A, A = e;
}
function nt() {
  be++;
}
function st() {
  if (--be > 0)
    return;
  if (F) {
    let t = F;
    for (F = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; A; ) {
    let t = A;
    for (A = void 0; t; ) {
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
function Se(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ye(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), re(s), lt(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function G(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (it(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function it(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === K) || (e.globalVersion = K, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !G(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = p, s = x;
  p = e, x = !0;
  try {
    Se(e);
    const i = e.fn(e._value);
    (t.version === 0 || I(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    p = n, x = s, ye(e), e.flags &= -3;
  }
}
function re(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      re(l, !0);
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
function ae(e) {
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
let K = 0;
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
      n = this.activeLink = new rt(p, this), p.deps ? (n.prevDep = p.depsTail, p.depsTail.nextDep = n, p.depsTail = n) : p.deps = p.depsTail = n, Te(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = p.depsTail, n.nextDep = void 0, p.depsTail.nextDep = n, p.depsTail = n, p.deps === n && (p.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, K++, this.notify(t);
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
function Te(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Te(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function j(e) {
  return ct(e) ? j(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function Y(e) {
  return !!(e && e.__v_isShallow);
}
function Ie(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  return e ? e.__v_isRef === !0 : !1;
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
const ue = {}, H = /* @__PURE__ */ new WeakMap();
let z;
function ut(e, t = !1, n = z) {
  if (n) {
    let s = H.get(n);
    s || H.set(n, s = []), s.push(e);
  }
}
function pt(e, t, n = w) {
  const { immediate: s, deep: i, once: l, scheduler: a, augmentJob: o, call: c } = n, d = (u) => i ? u : Y(u) || i === !1 || i === 0 ? E(u, 1) : E(u);
  let r, h, v, f, _ = !1;
  $(e) ? (h = () => e.value, Y(e)) : j(e) ? h = () => d(e) : y(e) ? (_ = !0, e.some((u) => j(u) || Y(u)), h = () => e.map((u) => {
    if ($(u))
      return u.value;
    if (j(u))
      return d(u);
    if (m(u))
      return c ? c(u, 2) : u();
  })) : m(e) ? h = () => {
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
      return c ? c(e, 3, [f]) : e(f);
    } finally {
      z = u;
    }
  } : h = L;
  const g = () => {
    r.stop();
  };
  _ && new Array(e.length).fill(ue);
  const M = (u) => {
    !(r.flags & 1) || !r.dirty && !u || r.run();
  };
  return o && o(M), r = new et(h), r.scheduler = a ? () => a(M, !1) : M, f = (u) => ut(u, !1, r), v = r.onStop = () => {
    const u = H.get(r);
    if (u) {
      if (c)
        c(u, 4);
      else
        for (const Le of u) Le();
      H.delete(r);
    }
  }, a ? a(M.bind(null, !0), !0) : r.run(), g.pause = r.pause.bind(r), g.resume = r.resume.bind(r), g.stop = g, g;
}
function E(e, t = 1 / 0, n) {
  if (t <= 0 || !O(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, $(e))
    E(e.value, t, n);
  else if (y(e))
    for (let s = 0; s < e.length; s++)
      E(e[s], t, n);
  else if ($e(e) || Ue(e))
    e.forEach((s) => {
      E(s, t, n);
    });
  else if (Je(e)) {
    for (const s in e)
      E(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && E(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oe(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    we(i, t, n);
  }
}
function Ee(e, t, n, s) {
  if (m(e)) {
    const i = oe(e, t, n, s);
    return i && We(i) && i.catch((l) => {
      we(l, t, n);
    }), i;
  }
  if (y(e)) {
    const i = [];
    for (let l = 0; l < e.length; l++)
      i.push(Ee(e[l], t, n, s));
    return i;
  }
}
function we(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: a } = t && t.appContext.config || w;
  if (t) {
    let o = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const r = o.ec;
      if (r) {
        for (let h = 0; h < r.length; h++)
          if (r[h](e, c, d) === !1)
            return;
      }
      o = o.parent;
    }
    if (l) {
      xe(), oe(l, null, 10, [
        e,
        c,
        d
      ]), Ce();
      return;
    }
  }
  ht(e, n, i, s, a);
}
function ht(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const b = [];
let C = -1;
const R = [];
let T = null, V = 0;
const dt = /* @__PURE__ */ Promise.resolve();
let Q = null;
function gt(e) {
  let t = C + 1, n = b.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = b[s], l = N(i);
    l < e || l === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function mt(e) {
  if (!(e.flags & 1)) {
    const t = N(e), n = b[b.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= N(n) ? b.push(e) : b.splice(gt(t), 0, e), e.flags |= 1, De();
  }
}
function De() {
  Q || (Q = dt.then(Ve));
}
function _t(e) {
  y(e) ? R.push(...e) : T && e.id === -1 ? T.splice(V + 1, 0, e) : e.flags & 1 || (R.push(e), e.flags |= 1), De();
}
function bt(e) {
  if (R.length) {
    const t = [...new Set(R)].sort(
      (n, s) => N(n) - N(s)
    );
    if (R.length = 0, T) {
      T.push(...t);
      return;
    }
    for (T = t, V = 0; V < T.length; V++) {
      const n = T[V];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    T = null, V = 0;
  }
}
const N = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ve(e) {
  try {
    for (C = 0; C < b.length; C++) {
      const t = b[C];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), oe(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; C < b.length; C++) {
      const t = b[C];
      t && (t.flags &= -2);
    }
    C = -1, b.length = 0, bt(), Q = null, (b.length || R.length) && Ve();
  }
}
let P = null, St = null;
const yt = (e) => e.__isTeleport;
function Re(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Re(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  return m(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
se().requestIdleCallback;
se().cancelIdleCallback;
const xt = "components";
function Ct(e, t) {
  return It(xt, e, !0, t) || e;
}
const Tt = Symbol.for("v-ndc");
function It(e, t, n = !0, s = !1) {
  const i = q;
  if (i) {
    const l = i.type;
    {
      const o = Gt(
        l,
        !1
      );
      if (o && (o === t || o === k(t) || o === _e(k(t))))
        return l;
    }
    const a = (
      // local registration
      // check instance[type] first which is resolved for options API
      pe(i[e] || l[e], t) || // global registration
      pe(i.appContext[e], t)
    );
    return !a && s ? l : a;
  }
}
function pe(e, t) {
  return e && (e[t] || e[k(t)] || e[_e(k(t))]);
}
let Et = null;
function wt(e, t, n = !1) {
  const s = Ne();
  if (s || Et) {
    let i = s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && m(t) ? t.call(s && s.proxy) : t;
  }
}
const Dt = {}, Oe = (e) => Object.getPrototypeOf(e) === Dt, Vt = Mt, Rt = Symbol.for("v-scx"), Ot = () => wt(Rt);
function kt(e, t) {
  return At(
    e,
    null,
    { flush: "sync" }
  );
}
function At(e, t, n = w) {
  const { immediate: s, deep: i, flush: l, once: a } = n, o = W({}, n), c = l !== "post";
  let d;
  if (ee) {
    if (l === "sync") {
      const f = Ot();
      d = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!c) {
      const f = () => {
      };
      return f.stop = L, f.resume = L, f.pause = L, f;
    }
  }
  const r = q;
  o.call = (f, _, g) => Ee(f, r, _, g);
  let h = !1;
  l === "post" ? o.scheduler = (f) => {
    Vt(f, r && r.suspense);
  } : l !== "sync" && (h = !0, o.scheduler = (f, _) => {
    _ ? f() : mt(f);
  }), o.augmentJob = (f) => {
    h && (f.flags |= 2, r && (f.id = r.uid, f.i = r));
  };
  const v = pt(e, t, o);
  return ee && (d ? d.push(v) : c && v()), v;
}
function Ft(e, t, n = w) {
  const s = Ne(), i = k(t), l = me(t), a = Nt(e, i), o = at((c, d) => {
    let r, h = w, v;
    return kt(() => {
      const f = e[i];
      I(r, f) && (r = f, d());
    }), {
      get() {
        return c(), n.get ? n.get(r) : r;
      },
      set(f) {
        const _ = n.set ? n.set(f) : f;
        if (!I(_, r) && !(h !== w && I(f, h)))
          return;
        const g = s.vnode.props;
        g && // check if parent has passed v-model
        (t in g || i in g || l in g) && (`onUpdate:${t}` in g || `onUpdate:${i}` in g || `onUpdate:${l}` in g) || (r = f, d()), s.emit(`update:${t}`, _), I(f, _) && I(f, h) && !I(_, v) && d(), h = f, v = _;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? a || w : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Nt = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${k(t)}Modifiers`] || e[`${me(t)}Modifiers`], Pt = (e) => e.__isSuspense;
function Mt(e, t) {
  t && t.pendingBranch ? y(e) ? t.effects.push(...e) : t.effects.push(e) : _t(e);
}
const ke = Symbol.for("v-fgt"), Lt = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), B = [];
let S = null;
function zt(e = !1) {
  B.push(S = e ? null : []);
}
function Bt() {
  B.pop(), S = B[B.length - 1] || null;
}
function Ut(e) {
  return e.dynamicChildren = S || ze, Bt(), S && S.push(e), e;
}
function $t(e, t, n, s, i, l) {
  return Ut(
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
function Ht(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ae = ({ key: e }) => e ?? null, U = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? D(e) || $(e) || m(e) ? { i: P, r: e, k: t, f: !!n } : e : null);
function Fe(e, t = null, n = null, s = 0, i = null, l = e === ke ? 0 : 1, a = !1, o = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ae(t),
    ref: t && U(t),
    scopeId: St,
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
    ctx: P
  };
  return o ? (ce(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= D(n) ? 8 : 16), // avoid a block node from tracking itself
  !a && // has current parent block
  S && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && S.push(c), c;
}
const Z = Wt;
function Wt(e, t = null, n = null, s = 0, i = null, l = !1) {
  if ((!e || e === Tt) && (e = jt), Ht(e)) {
    const o = X(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ce(o, n), !l && S && (o.shapeFlag & 6 ? S[S.indexOf(e)] = o : S.push(o)), o.patchFlag = -2, o;
  }
  if (Kt(e) && (e = e.__vccOpts), t) {
    t = qt(t);
    let { class: o, style: c } = t;
    o && !D(o) && (t.class = le(o)), O(c) && (Ie(c) && !y(c) && (c = W({}, c)), t.style = ie(c));
  }
  const a = D(e) ? 1 : Pt(e) ? 128 : yt(e) ? 64 : O(e) ? 4 : m(e) ? 2 : 0;
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
function qt(e) {
  return e ? Ie(e) || Oe(e) ? W({}, e) : e : null;
}
function X(e, t, n = !1, s = !1) {
  const { props: i, ref: l, patchFlag: a, children: o, transition: c } = e, d = t ? Yt(i || {}, t) : i, r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ae(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? y(l) ? l.concat(U(t)) : [l, U(t)] : U(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && X(e.ssContent),
    ssFallback: e.ssFallback && X(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Re(
    r,
    c.clone(r)
  ), r;
}
function Jt(e = " ", t = 0) {
  return Z(Lt, null, e, t);
}
function ce(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (y(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ce(e, i()), i._c && (i._d = !0));
      return;
    } else
      n = 32, !t._ && !Oe(t) && (t._ctx = P);
  else m(t) ? (t = { default: t, _ctx: P }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Yt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = le([t.class, s.class]));
      else if (i === "style")
        t.style = ie([t.style, s.style]);
      else if (Be(i)) {
        const l = t[i], a = s[i];
        a && l !== a && !(y(l) && l.includes(a)) && (t[i] = l ? [].concat(l, a) : a);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
let q = null;
const Ne = () => q || P;
{
  const e = se(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (l) => {
      i.length > 1 ? i.forEach((a) => a(l)) : i[0](l);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => q = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => ee = n
  );
}
let ee = !1;
function Gt(e, t = !0) {
  return m(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kt(e) {
  return m(e) && "__vccOpts" in e;
}
const Qt = { class: "flex flex-col gap-4" }, Zt = /* @__PURE__ */ vt({
  __name: "Settings",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ft(e, "modelValue");
    return (n, s) => {
      const i = Ct("VaInput");
      return zt(), $t("div", Qt, [
        Z(i, {
          modelValue: t.value.name,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => t.value.name = l),
          label: "Variable Name",
          placeholder: "Enter variable name"
        }, null, 8, ["modelValue"]),
        Z(i, {
          modelValue: t.value.expression,
          "onUpdate:modelValue": s[1] || (s[1] = (l) => t.value.expression = l),
          label: "Expression",
          placeholder: "Enter variable name"
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
function Pe({ services: e }) {
  e.getRequired(de).registerVariableType(ge, {
    Variable: je,
    Settings: Zt
  });
}
function Me({ services: e }) {
  e.getRequired(de).unregisterVariableType(ge);
}
const Xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Pe,
  deactivate: Me
}, Symbol.toStringTag, { value: "Module" })), he = "org.eclipse.daanse.board.app.ui.vue.variable.computed", en = "0.0.1-next.1";
async function sn(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${he}: tsm runtime is not initialized`);
  t.register(he, Xt, en, "ui.vue.variable.computed"), await Pe?.(e);
}
async function ln(e) {
  await Me?.(e);
}
export {
  sn as activate,
  ln as deactivate
};
