import { CONNECTION_REPOSITORY as E } from "org.eclipse.daanse.board.app.lib.api.connection";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const P = [], B = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), F = Object.assign, f = Array.isArray, g = (t) => typeof t == "function", u = (t) => typeof t == "string", q = (t) => typeof t == "symbol", p = (t) => t !== null && typeof t == "object", V = (t) => {
  const n = /* @__PURE__ */ Object.create(null);
  return ((e) => n[e] || (n[e] = t(e)));
}, D = /-\w/g, C = V(
  (t) => t.replace(D, (n) => n.slice(1).toUpperCase())
), A = V((t) => t.charAt(0).toUpperCase() + t.slice(1));
let I;
const R = () => I || (I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function T(t) {
  if (f(t)) {
    const n = {};
    for (let e = 0; e < t.length; e++) {
      const l = t[e], s = u(l) ? H(l) : T(l);
      if (s)
        for (const c in s)
          n[c] = s[c];
    }
    return n;
  } else if (u(t) || p(t))
    return t;
}
const L = /;(?![^(]*\))/g, Y = /:([^]+)/, G = /\/\*[^]*?\*\//g;
function H(t) {
  const n = {};
  return t.replace(G, "").split(L).forEach((e) => {
    if (e) {
      const l = e.split(Y);
      l.length > 1 && (n[l[0].trim()] = l[1].trim());
    }
  }), n;
}
function N(t) {
  let n = "";
  if (u(t))
    n = t;
  else if (f(t))
    for (let e = 0; e < t.length; e++) {
      const l = N(t[e]);
      l && (n += l + " ");
    }
  else if (p(t))
    for (const e in t)
      t[e] && (n += e + " ");
  return n.trim();
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(q)
);
function k(t) {
  return t ? !!t.__v_raw : !1;
}
function K(t) {
  return t ? t.__v_isRef === !0 : !1;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let S = null, J = null;
const Q = (t) => t.__isTeleport;
function x(t, n) {
  t.shapeFlag & 6 && t.component ? (t.transition = n, x(t.component.subTree, n)) : t.shapeFlag & 128 ? (t.ssContent.transition = n.clone(t.ssContent), t.ssFallback.transition = n.clone(t.ssFallback)) : t.transition = n;
}
// @__NO_SIDE_EFFECTS__
function W(t, n) {
  return g(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    F({ name: t.name }, n, { setup: t })
  ) : t;
}
R().requestIdleCallback;
R().cancelIdleCallback;
const X = "components";
function Z(t, n) {
  return v(X, t, !0, n) || t;
}
const $ = Symbol.for("v-ndc");
function v(t, n, e = !0, l = !1) {
  const s = M;
  if (s) {
    const c = s.type;
    {
      const o = _t(
        c,
        !1
      );
      if (o && (o === n || o === C(n) || o === A(C(n))))
        return c;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      d(s[t] || c[t], n) || // global registration
      d(s.appContext[t], n)
    );
    return !i && l ? c : i;
  }
}
function d(t, n) {
  return t && (t[n] || t[C(n)] || t[A(C(n))]);
}
const tt = {}, z = (t) => Object.getPrototypeOf(t) === tt, nt = (t) => t.__isSuspense, j = Symbol.for("v-fgt"), et = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), m = [];
let a = null;
function lt(t = !1) {
  m.push(a = t ? null : []);
}
function ct() {
  m.pop(), a = m[m.length - 1] || null;
}
function ot(t) {
  return t.dynamicChildren = a || P, ct(), a && a.push(t), t;
}
function it(t, n, e, l, s) {
  return ot(
    U(
      t,
      n,
      e,
      l,
      s,
      !0
    )
  );
}
function rt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const w = ({ key: t }) => t ?? null, _ = ({
  ref: t,
  ref_key: n,
  ref_for: e
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || K(t) || g(t) ? { i: S, r: t, k: n, f: !!e } : t : null);
function at(t, n = null, e = null, l = 0, s = null, c = t === j ? 0 : 1, i = !1, o = !1) {
  const r = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: n,
    key: n && w(n),
    ref: n && _(n),
    scopeId: J,
    slotScopeIds: null,
    children: e,
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
    shapeFlag: c,
    patchFlag: l,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: S
  };
  return o ? (O(r, e), c & 128 && t.normalize(r)) : e && (r.shapeFlag |= u(e) ? 8 : 16), // avoid a block node from tracking itself
  !i && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (r.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  r.patchFlag !== 32 && a.push(r), r;
}
const U = ut;
function ut(t, n = null, e = null, l = 0, s = null, c = !1) {
  if ((!t || t === $) && (t = st), rt(t)) {
    const o = h(
      t,
      n,
      !0
      /* mergeRef: true */
    );
    return e && O(o, e), !c && a && (o.shapeFlag & 6 ? a[a.indexOf(t)] = o : a.push(o)), o.patchFlag = -2, o;
  }
  if (pt(t) && (t = t.__vccOpts), n) {
    n = ft(n);
    let { class: o, style: r } = n;
    o && !u(o) && (n.class = N(o)), p(r) && (k(r) && !f(r) && (r = F({}, r)), n.style = T(r));
  }
  const i = u(t) ? 1 : nt(t) ? 128 : Q(t) ? 64 : p(t) ? 4 : g(t) ? 2 : 0;
  return at(
    t,
    n,
    e,
    l,
    s,
    i,
    c,
    !0
  );
}
function ft(t) {
  return t ? k(t) || z(t) ? F({}, t) : t : null;
}
function h(t, n, e = !1, l = !1) {
  const { props: s, ref: c, patchFlag: i, children: o, transition: r } = t, b = n ? mt(s || {}, n) : s, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: b,
    key: b && w(b),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && c ? f(c) ? c.concat(_(n)) : [c, _(n)] : _(n)
    ) : c,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && t.type !== j ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: r,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && h(t.ssContent),
    ssFallback: t.ssFallback && h(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return r && l && x(
    y,
    r.clone(y)
  ), y;
}
function gt(t = " ", n = 0) {
  return U(et, null, t, n);
}
function O(t, n) {
  let e = 0;
  const { shapeFlag: l } = t;
  if (n == null)
    n = null;
  else if (f(n))
    e = 16;
  else if (typeof n == "object")
    if (l & 65) {
      const s = n.default;
      s && (s._c && (s._d = !1), O(t, s()), s._c && (s._d = !0));
      return;
    } else
      e = 32, !n._ && !z(n) && (n._ctx = S);
  else g(n) ? (n = { default: n, _ctx: S }, e = 32) : (n = String(n), l & 64 ? (e = 16, n = [gt(n)]) : e = 8);
  t.children = n, t.shapeFlag |= e;
}
function mt(...t) {
  const n = {};
  for (let e = 0; e < t.length; e++) {
    const l = t[e];
    for (const s in l)
      if (s === "class")
        n.class !== l.class && (n.class = N([n.class, l.class]));
      else if (s === "style")
        n.style = T([n.style, l.style]);
      else if (B(s)) {
        const c = n[s], i = l[s];
        i && c !== i && !(f(c) && c.includes(i)) && (n[s] = c ? [].concat(c, i) : i);
      } else s !== "" && (n[s] = l[s]);
  }
  return n;
}
let M = null;
{
  const t = R(), n = (e, l) => {
    let s;
    return (s = t[e]) || (s = t[e] = []), s.push(l), (c) => {
      s.length > 1 ? s.forEach((i) => i(c)) : s[0](c);
    };
  };
  n(
    "__VUE_INSTANCE_SETTERS__",
    (e) => M = e
  ), n(
    "__VUE_SSR_SETTERS__",
    (e) => e
  );
}
function _t(t, n = !0) {
  return g(t) ? t.displayName || t.name : t.name || n && t.__name;
}
function pt(t) {
  return g(t) && "__vccOpts" in t;
}
const Ct = /* @__PURE__ */ W({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(t) {
    return (n, e) => {
      const l = Z("VaInput");
      return lt(), it(l, {
        modelValue: t.config.url,
        "onUpdate:modelValue": e[0] || (e[0] = (s) => t.config.url = s),
        label: "URL"
      }, null, 8, ["modelValue"]);
    };
  }
}), St = Symbol.for("RssConnectionFactory"), bt = Symbol.for("RssConnectionSettings");
function ht({ services: t }) {
  t.register("RssConnectionSettings", Ct), t.getRequired(E).registerConnectionType("rss", {
    Connection: St,
    Settings: bt
  });
}
function Ft({ services: t }) {
  t.getRequired(E).unregisterConnectionType("rss"), t.unregister("RssConnectionSettings");
}
export {
  ht as activate,
  Ft as deactivate
};
