import { CONNECTION_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.connection";
import { DInput as z } from "org.eclipse.daanse.board.app.ui.vue.controls";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const w = [], B = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), h = Object.assign, f = Array.isArray, g = (t) => typeof t == "function", u = (t) => typeof t == "string", P = (t) => typeof t == "symbol", C = (t) => t !== null && typeof t == "object";
let O;
const F = () => O || (O = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function R(t) {
  if (f(t)) {
    const n = {};
    for (let e = 0; e < t.length; e++) {
      const l = t[e], s = u(l) ? q(l) : R(l);
      if (s)
        for (const o in s)
          n[o] = s[o];
    }
    return n;
  } else if (u(t) || C(t))
    return t;
}
const U = /;(?![^(]*\))/g, D = /:([^]+)/, M = /\/\*[^]*?\*\//g;
function q(t) {
  const n = {};
  return t.replace(M, "").split(U).forEach((e) => {
    if (e) {
      const l = e.split(D);
      l.length > 1 && (n[l[0].trim()] = l[1].trim());
    }
  }), n;
}
function T(t) {
  let n = "";
  if (u(t))
    n = t;
  else if (f(t))
    for (let e = 0; e < t.length; e++) {
      const l = T(t[e]);
      l && (n += l + " ");
    }
  else if (C(t))
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(P)
);
function I(t) {
  return t ? !!t.__v_raw : !1;
}
function E(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function L(t) {
  return E(t) ? t.value : t;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let p = null, Y = null;
const G = (t) => t.__isTeleport;
function V(t, n) {
  t.shapeFlag & 6 && t.component ? (t.transition = n, V(t.component.subTree, n)) : t.shapeFlag & 128 ? (t.ssContent.transition = n.clone(t.ssContent), t.ssFallback.transition = n.clone(t.ssFallback)) : t.transition = n;
}
// @__NO_SIDE_EFFECTS__
function H(t, n) {
  return g(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    h({ name: t.name }, n, { setup: t })
  ) : t;
}
F().requestIdleCallback;
F().cancelIdleCallback;
const K = Symbol.for("v-ndc"), J = {}, k = (t) => Object.getPrototypeOf(t) === J, Q = (t) => t.__isSuspense, A = Symbol.for("v-fgt"), W = Symbol.for("v-txt"), X = Symbol.for("v-cmt"), m = [];
let a = null;
function Z(t = !1) {
  m.push(a = t ? null : []);
}
function $() {
  m.pop(), a = m[m.length - 1] || null;
}
function v(t) {
  return t.dynamicChildren = a || w, $(), a && a.push(t), t;
}
function tt(t, n, e, l, s) {
  return v(
    j(
      t,
      n,
      e,
      l,
      s,
      !0
    )
  );
}
function nt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const x = ({ key: t }) => t ?? null, _ = ({
  ref: t,
  ref_key: n,
  ref_for: e
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || E(t) || g(t) ? { i: p, r: t, k: n, f: !!e } : t : null);
function et(t, n = null, e = null, l = 0, s = null, o = t === A ? 0 : 1, c = !1, r = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: n,
    key: n && x(n),
    ref: n && _(n),
    scopeId: Y,
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
    shapeFlag: o,
    patchFlag: l,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: p
  };
  return r ? (N(i, e), o & 128 && t.normalize(i)) : e && (i.shapeFlag |= u(e) ? 8 : 16), // avoid a block node from tracking itself
  !c && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && a.push(i), i;
}
const j = st;
function st(t, n = null, e = null, l = 0, s = null, o = !1) {
  if ((!t || t === K) && (t = X), nt(t)) {
    const r = y(
      t,
      n,
      !0
      /* mergeRef: true */
    );
    return e && N(r, e), !o && a && (r.shapeFlag & 6 ? a[a.indexOf(t)] = r : a.push(r)), r.patchFlag = -2, r;
  }
  if (ct(t) && (t = t.__vccOpts), n) {
    n = lt(n);
    let { class: r, style: i } = n;
    r && !u(r) && (n.class = T(r)), C(i) && (I(i) && !f(i) && (i = h({}, i)), n.style = R(i));
  }
  const c = u(t) ? 1 : Q(t) ? 128 : G(t) ? 64 : C(t) ? 4 : g(t) ? 2 : 0;
  return et(
    t,
    n,
    e,
    l,
    s,
    c,
    o,
    !0
  );
}
function lt(t) {
  return t ? I(t) || k(t) ? h({}, t) : t : null;
}
function y(t, n, e = !1, l = !1) {
  const { props: s, ref: o, patchFlag: c, children: r, transition: i } = t, S = n ? it(s || {}, n) : s, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: S,
    key: S && x(S),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && o ? f(o) ? o.concat(_(n)) : [o, _(n)] : _(n)
    ) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: r,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && t.type !== A ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: i,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && y(t.ssContent),
    ssFallback: t.ssFallback && y(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return i && l && V(
    b,
    i.clone(b)
  ), b;
}
function ot(t = " ", n = 0) {
  return j(W, null, t, n);
}
function N(t, n) {
  let e = 0;
  const { shapeFlag: l } = t;
  if (n == null)
    n = null;
  else if (f(n))
    e = 16;
  else if (typeof n == "object")
    if (l & 65) {
      const s = n.default;
      s && (s._c && (s._d = !1), N(t, s()), s._c && (s._d = !0));
      return;
    } else
      e = 32, !n._ && !k(n) && (n._ctx = p);
  else g(n) ? (n = { default: n, _ctx: p }, e = 32) : (n = String(n), l & 64 ? (e = 16, n = [ot(n)]) : e = 8);
  t.children = n, t.shapeFlag |= e;
}
function it(...t) {
  const n = {};
  for (let e = 0; e < t.length; e++) {
    const l = t[e];
    for (const s in l)
      if (s === "class")
        n.class !== l.class && (n.class = T([n.class, l.class]));
      else if (s === "style")
        n.style = R([n.style, l.style]);
      else if (B(s)) {
        const o = n[s], c = l[s];
        c && o !== c && !(f(o) && o.includes(c)) && (n[s] = o ? [].concat(o, c) : c);
      } else s !== "" && (n[s] = l[s]);
  }
  return n;
}
{
  const t = F(), n = (e, l) => {
    let s;
    return (s = t[e]) || (s = t[e] = []), s.push(l), (o) => {
      s.length > 1 ? s.forEach((c) => c(o)) : s[0](o);
    };
  };
  n(
    "__VUE_INSTANCE_SETTERS__",
    (e) => e
  ), n(
    "__VUE_SSR_SETTERS__",
    (e) => e
  );
}
function ct(t) {
  return g(t) && "__vccOpts" in t;
}
const rt = /* @__PURE__ */ H({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(t) {
    return (n, e) => (Z(), tt(L(z), {
      modelValue: t.config.url,
      "onUpdate:modelValue": e[0] || (e[0] = (l) => t.config.url = l),
      label: "URL"
    }, null, 8, ["modelValue"]));
  }
}), at = Symbol.for("RssConnectionFactory"), ut = Symbol.for("RssConnectionSettings");
function mt({ services: t }) {
  t.register("RssConnectionSettings", rt), t.getRequired(d).registerConnectionType("rss", {
    Connection: at,
    Settings: ut
  });
}
function _t({ services: t }) {
  t.getRequired(d).unregisterConnectionType("rss"), t.unregister("RssConnectionSettings");
}
export {
  mt as activate,
  _t as deactivate
};
