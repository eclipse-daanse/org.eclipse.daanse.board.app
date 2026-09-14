import { CONNECTION_REPOSITORY as I } from "org.eclipse.daanse.board.app.lib.api.connection";
import { DInput as G } from "org.eclipse.daanse.board.app.ui.vue.controls";
const V = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="graphqlconnection"
                nsURI="http://org.eclipse.daanse.board.app.lib.connection.graphql" nsPrefix="graphqlconn">

    <eClassifiers xsi:type="ecore:EClass" name="IGraphQLConnectionConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="A connection to a GraphQL endpoint. Data sources built on it send queries to the single URL a GraphQL server exposes."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.connection.base#//BaseConnectionConfig"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The specific URL endpoint for the GraphQL API.
                                            This attribute overrides the 'url' from BaseConnectionConfig
                                            to emphasize its specific role in GraphQL connections."/>
            </eAnnotations>
        </eStructuralFeatures>

    </eClassifiers>

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.connection.base#/"/>

</ecore:EPackage>
`;
/**
* @vue/shared v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const q = [], P = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), y = Object.assign, f = Array.isArray, g = (t) => typeof t == "function", u = (t) => typeof t == "string", M = (t) => typeof t == "symbol", h = (t) => t !== null && typeof t == "object";
let F;
const d = () => F || (F = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function w(t) {
  if (f(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const l = t[n], s = u(l) ? D(l) : w(l);
      if (s)
        for (const o in s)
          e[o] = s[o];
    }
    return e;
  } else if (u(t) || h(t))
    return t;
}
const z = /;(?![^(]*\))/g, U = /:([^]+)/, j = /\/\*[^]*?\*\//g;
function D(t) {
  const e = {};
  return t.replace(j, "").split(z).forEach((n) => {
    if (n) {
      const l = n.split(U);
      l.length > 1 && (e[l[0].trim()] = l[1].trim());
    }
  }), e;
}
function E(t) {
  let e = "";
  if (u(t))
    e = t;
  else if (f(t))
    for (let n = 0; n < t.length; n++) {
      const l = E(t[n]);
      l && (e += l + " ");
    }
  else if (h(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(M)
);
function R(t) {
  return t ? !!t.__v_raw : !1;
}
function x(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function B(t) {
  return x(t) ? t.value : t;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _ = null, Q = null;
const X = (t) => t.__isTeleport;
function A(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, A(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Y(t, e) {
  return g(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    y({ name: t.name }, e, { setup: t })
  ) : t;
}
d().requestIdleCallback;
d().cancelIdleCallback;
const H = Symbol.for("v-ndc"), K = {}, O = (t) => Object.getPrototypeOf(t) === K, J = (t) => t.__isSuspense, k = Symbol.for("v-fgt"), W = Symbol.for("v-txt"), Z = Symbol.for("v-cmt"), p = [];
let a = null;
function $(t = !1) {
  p.push(a = t ? null : []);
}
function v() {
  p.pop(), a = p[p.length - 1] || null;
}
function tt(t) {
  return t.dynamicChildren = a || q, v(), a && a.push(t), t;
}
function et(t, e, n, l, s) {
  return tt(
    L(
      t,
      e,
      n,
      l,
      s,
      !0
    )
  );
}
function nt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const N = ({ key: t }) => t ?? null, m = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || x(t) || g(t) ? { i: _, r: t, k: e, f: !!n } : t : null);
function st(t, e = null, n = null, l = 0, s = null, o = t === k ? 0 : 1, c = !1, r = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && N(e),
    ref: e && m(e),
    scopeId: Q,
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
    shapeFlag: o,
    patchFlag: l,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: _
  };
  return r ? (T(i, n), o & 128 && t.normalize(i)) : n && (i.shapeFlag |= u(n) ? 8 : 16), // avoid a block node from tracking itself
  !c && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && a.push(i), i;
}
const L = lt;
function lt(t, e = null, n = null, l = 0, s = null, o = !1) {
  if ((!t || t === H) && (t = Z), nt(t)) {
    const r = S(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && T(r, n), !o && a && (r.shapeFlag & 6 ? a[a.indexOf(t)] = r : a.push(r)), r.patchFlag = -2, r;
  }
  if (rt(t) && (t = t.__vccOpts), e) {
    e = ot(e);
    let { class: r, style: i } = e;
    r && !u(r) && (e.class = E(r)), h(i) && (R(i) && !f(i) && (i = y({}, i)), e.style = w(i));
  }
  const c = u(t) ? 1 : J(t) ? 128 : X(t) ? 64 : h(t) ? 4 : g(t) ? 2 : 0;
  return st(
    t,
    e,
    n,
    l,
    s,
    c,
    o,
    !0
  );
}
function ot(t) {
  return t ? R(t) || O(t) ? y({}, t) : t : null;
}
function S(t, e, n = !1, l = !1) {
  const { props: s, ref: o, patchFlag: c, children: r, transition: i } = t, b = e ? ct(s || {}, e) : s, C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: b,
    key: b && N(b),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? f(o) ? o.concat(m(e)) : [o, m(e)] : m(e)
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
    patchFlag: e && t.type !== k ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: t.ssContent && S(t.ssContent),
    ssFallback: t.ssFallback && S(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return i && l && A(
    C,
    i.clone(C)
  ), C;
}
function it(t = " ", e = 0) {
  return L(W, null, t, e);
}
function T(t, e) {
  let n = 0;
  const { shapeFlag: l } = t;
  if (e == null)
    e = null;
  else if (f(e))
    n = 16;
  else if (typeof e == "object")
    if (l & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), T(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !O(e) && (e._ctx = _);
  else g(e) ? (e = { default: e, _ctx: _ }, n = 32) : (e = String(e), l & 64 ? (n = 16, e = [it(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function ct(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const l = t[n];
    for (const s in l)
      if (s === "class")
        e.class !== l.class && (e.class = E([e.class, l.class]));
      else if (s === "style")
        e.style = w([e.style, l.style]);
      else if (P(s)) {
        const o = e[s], c = l[s];
        c && o !== c && !(f(o) && o.includes(c)) && (e[s] = o ? [].concat(o, c) : c);
      } else s !== "" && (e[s] = l[s]);
  }
  return e;
}
{
  const t = d(), e = (n, l) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(l), (o) => {
      s.length > 1 ? s.forEach((c) => c(o)) : s[0](o);
    };
  };
  e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), e(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
function rt(t) {
  return g(t) && "__vccOpts" in t;
}
const at = /* @__PURE__ */ Y({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(t) {
    return (e, n) => ($(), et(B(G), {
      modelValue: t.config.url,
      "onUpdate:modelValue": n[0] || (n[0] = (l) => t.config.url = l),
      label: "URL"
    }, null, 8, ["modelValue"]));
  }
}), ut = Symbol.for("GraphQLConnectionFactory"), ft = Symbol.for("GraphqlConnectionSettings");
function mt({ services: t }) {
  t.register("GraphqlConnectionSettings", at), t.getRequired(I).registerConnectionType("graphql", {
    icon: "hub",
    Model: V,
    Connection: ut,
    Settings: ft
  });
}
function ht({ services: t }) {
  t.getRequired(I).unregisterConnectionType("graphql"), t.unregister("GraphqlConnectionSettings");
}
export {
  mt as activate,
  ht as deactivate
};
