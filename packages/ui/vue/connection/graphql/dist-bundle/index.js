import { CONNECTION_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.connection";
import { DInput as j } from "org.eclipse.daanse.board.app.ui.vue.controls";
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const z = [], w = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), h = Object.assign, f = Array.isArray, g = (t) => typeof t == "function", u = (t) => typeof t == "string", G = (t) => typeof t == "symbol", p = (t) => t !== null && typeof t == "object";
let R;
const F = () => R || (R = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function T(t) {
  if (f(t)) {
    const n = {};
    for (let e = 0; e < t.length; e++) {
      const s = t[e], l = u(s) ? D(s) : T(s);
      if (l)
        for (const o in l)
          n[o] = l[o];
    }
    return n;
  } else if (u(t) || p(t))
    return t;
}
const B = /;(?![^(]*\))/g, P = /:([^]+)/, U = /\/\*[^]*?\*\//g;
function D(t) {
  const n = {};
  return t.replace(U, "").split(B).forEach((e) => {
    if (e) {
      const s = e.split(P);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function N(t) {
  let n = "";
  if (u(t))
    n = t;
  else if (f(t))
    for (let e = 0; e < t.length; e++) {
      const s = N(t[e]);
      s && (n += s + " ");
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(G)
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
let C = null, M = null;
const Y = (t) => t.__isTeleport;
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
const K = Symbol.for("v-ndc"), Q = {}, k = (t) => Object.getPrototypeOf(t) === Q, J = (t) => t.__isSuspense, A = Symbol.for("v-fgt"), W = Symbol.for("v-txt"), X = Symbol.for("v-cmt"), m = [];
let a = null;
function Z(t = !1) {
  m.push(a = t ? null : []);
}
function $() {
  m.pop(), a = m[m.length - 1] || null;
}
function v(t) {
  return t.dynamicChildren = a || z, $(), a && a.push(t), t;
}
function tt(t, n, e, s, l) {
  return v(
    q(
      t,
      n,
      e,
      s,
      l,
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
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || E(t) || g(t) ? { i: C, r: t, k: n, f: !!e } : t : null);
function et(t, n = null, e = null, s = 0, l = null, o = t === A ? 0 : 1, c = !1, r = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: n,
    key: n && x(n),
    ref: n && _(n),
    scopeId: M,
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
    patchFlag: s,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: C
  };
  return r ? (O(i, e), o & 128 && t.normalize(i)) : e && (i.shapeFlag |= u(e) ? 8 : 16), // avoid a block node from tracking itself
  !c && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && a.push(i), i;
}
const q = lt;
function lt(t, n = null, e = null, s = 0, l = null, o = !1) {
  if ((!t || t === K) && (t = X), nt(t)) {
    const r = y(
      t,
      n,
      !0
      /* mergeRef: true */
    );
    return e && O(r, e), !o && a && (r.shapeFlag & 6 ? a[a.indexOf(t)] = r : a.push(r)), r.patchFlag = -2, r;
  }
  if (ct(t) && (t = t.__vccOpts), n) {
    n = st(n);
    let { class: r, style: i } = n;
    r && !u(r) && (n.class = N(r)), p(i) && (I(i) && !f(i) && (i = h({}, i)), n.style = T(i));
  }
  const c = u(t) ? 1 : J(t) ? 128 : Y(t) ? 64 : p(t) ? 4 : g(t) ? 2 : 0;
  return et(
    t,
    n,
    e,
    s,
    l,
    c,
    o,
    !0
  );
}
function st(t) {
  return t ? I(t) || k(t) ? h({}, t) : t : null;
}
function y(t, n, e = !1, s = !1) {
  const { props: l, ref: o, patchFlag: c, children: r, transition: i } = t, S = n ? it(l || {}, n) : l, b = {
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
  return i && s && V(
    b,
    i.clone(b)
  ), b;
}
function ot(t = " ", n = 0) {
  return q(W, null, t, n);
}
function O(t, n) {
  let e = 0;
  const { shapeFlag: s } = t;
  if (n == null)
    n = null;
  else if (f(n))
    e = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const l = n.default;
      l && (l._c && (l._d = !1), O(t, l()), l._c && (l._d = !0));
      return;
    } else
      e = 32, !n._ && !k(n) && (n._ctx = C);
  else g(n) ? (n = { default: n, _ctx: C }, e = 32) : (n = String(n), s & 64 ? (e = 16, n = [ot(n)]) : e = 8);
  t.children = n, t.shapeFlag |= e;
}
function it(...t) {
  const n = {};
  for (let e = 0; e < t.length; e++) {
    const s = t[e];
    for (const l in s)
      if (l === "class")
        n.class !== s.class && (n.class = N([n.class, s.class]));
      else if (l === "style")
        n.style = T([n.style, s.style]);
      else if (w(l)) {
        const o = n[l], c = s[l];
        c && o !== c && !(f(o) && o.includes(c)) && (n[l] = o ? [].concat(o, c) : c);
      } else l !== "" && (n[l] = s[l]);
  }
  return n;
}
{
  const t = F(), n = (e, s) => {
    let l;
    return (l = t[e]) || (l = t[e] = []), l.push(s), (o) => {
      l.length > 1 ? l.forEach((c) => c(o)) : l[0](o);
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
    return (n, e) => (Z(), tt(L(j), {
      modelValue: t.config.url,
      "onUpdate:modelValue": e[0] || (e[0] = (s) => t.config.url = s),
      label: "URL"
    }, null, 8, ["modelValue"]));
  }
}), at = Symbol.for("GraphQLConnectionFactory"), ut = Symbol.for("GraphqlConnectionSettings");
function mt({ services: t }) {
  t.register("GraphqlConnectionSettings", rt), t.getRequired(d).registerConnectionType("graphql", {
    Connection: at,
    Settings: ut
  });
}
function _t({ services: t }) {
  t.getRequired(d).unregisterConnectionType("graphql"), t.unregister("GraphqlConnectionSettings");
}
export {
  mt as activate,
  _t as deactivate
};
