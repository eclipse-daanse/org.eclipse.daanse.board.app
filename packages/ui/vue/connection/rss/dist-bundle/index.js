import { CONNECTION_REPOSITORY as F } from "org.eclipse.daanse.board.app.lib.api.connection";
import { DInput as P } from "org.eclipse.daanse.board.app.ui.vue.controls";
const M = `<?xml version="1.0" encoding="UTF-8"?>
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
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="rssconnection"
                nsURI="http://org.eclipse.daanse.board.app.lib.connection.rss" nsPrefix="rssconn">

    <eClassifiers xsi:type="ecore:EClass" name="IRssConnectionConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="A connection to an RSS or Atom feed. Data sources built on it read the feed's entries."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.connection.base#//BaseConnectionConfig"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL of the RSS feed to connect to.
                                            This attribute overrides the 'url' from BaseConnectionConfig
                                            to specify its role in RSS feed connections."/>
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
const L = [], j = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), y = Object.assign, f = Array.isArray, g = (t) => typeof t == "function", u = (t) => typeof t == "string", z = (t) => typeof t == "symbol", _ = (t) => t !== null && typeof t == "object";
let T;
const d = () => T || (T = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function w(t) {
  if (f(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const o = t[n], s = u(o) ? G(o) : w(o);
      if (s)
        for (const l in s)
          e[l] = s[l];
    }
    return e;
  } else if (u(t) || _(t))
    return t;
}
const D = /;(?![^(]*\))/g, U = /:([^]+)/, B = /\/\*[^]*?\*\//g;
function G(t) {
  const e = {};
  return t.replace(B, "").split(D).forEach((n) => {
    if (n) {
      const o = n.split(U);
      o.length > 1 && (e[o[0].trim()] = o[1].trim());
    }
  }), e;
}
function E(t) {
  let e = "";
  if (u(t))
    e = t;
  else if (f(t))
    for (let n = 0; n < t.length; n++) {
      const o = E(t[n]);
      o && (e += o + " ");
    }
  else if (_(t))
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(z)
);
function I(t) {
  return t ? !!t.__v_raw : !1;
}
function x(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function q(t) {
  return x(t) ? t.value : t;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let b = null, X = null;
const Y = (t) => t.__isTeleport;
function A(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, A(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function H(t, e) {
  return g(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    y({ name: t.name }, e, { setup: t })
  ) : t;
}
d().requestIdleCallback;
d().cancelIdleCallback;
const K = Symbol.for("v-ndc"), J = {}, O = (t) => Object.getPrototypeOf(t) === J, Q = (t) => t.__isSuspense, k = Symbol.for("v-fgt"), W = Symbol.for("v-txt"), Z = Symbol.for("v-cmt"), m = [];
let a = null;
function $(t = !1) {
  m.push(a = t ? null : []);
}
function v() {
  m.pop(), a = m[m.length - 1] || null;
}
function tt(t) {
  return t.dynamicChildren = a || L, v(), a && a.push(t), t;
}
function et(t, e, n, o, s) {
  return tt(
    V(
      t,
      e,
      n,
      o,
      s,
      !0
    )
  );
}
function nt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const N = ({ key: t }) => t ?? null, p = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || x(t) || g(t) ? { i: b, r: t, k: e, f: !!n } : t : null);
function st(t, e = null, n = null, o = 0, s = null, l = t === k ? 0 : 1, c = !1, r = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && N(e),
    ref: e && p(e),
    scopeId: X,
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
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: b
  };
  return r ? (R(i, n), l & 128 && t.normalize(i)) : n && (i.shapeFlag |= u(n) ? 8 : 16), // avoid a block node from tracking itself
  !c && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && a.push(i), i;
}
const V = ot;
function ot(t, e = null, n = null, o = 0, s = null, l = !1) {
  if ((!t || t === K) && (t = Z), nt(t)) {
    const r = h(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && R(r, n), !l && a && (r.shapeFlag & 6 ? a[a.indexOf(t)] = r : a.push(r)), r.patchFlag = -2, r;
  }
  if (rt(t) && (t = t.__vccOpts), e) {
    e = lt(e);
    let { class: r, style: i } = e;
    r && !u(r) && (e.class = E(r)), _(i) && (I(i) && !f(i) && (i = y({}, i)), e.style = w(i));
  }
  const c = u(t) ? 1 : Q(t) ? 128 : Y(t) ? 64 : _(t) ? 4 : g(t) ? 2 : 0;
  return st(
    t,
    e,
    n,
    o,
    s,
    c,
    l,
    !0
  );
}
function lt(t) {
  return t ? I(t) || O(t) ? y({}, t) : t : null;
}
function h(t, e, n = !1, o = !1) {
  const { props: s, ref: l, patchFlag: c, children: r, transition: i } = t, C = e ? ct(s || {}, e) : s, S = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: C,
    key: C && N(C),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? f(l) ? l.concat(p(e)) : [l, p(e)] : p(e)
    ) : l,
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
    ssContent: t.ssContent && h(t.ssContent),
    ssFallback: t.ssFallback && h(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return i && o && A(
    S,
    i.clone(S)
  ), S;
}
function it(t = " ", e = 0) {
  return V(W, null, t, e);
}
function R(t, e) {
  let n = 0;
  const { shapeFlag: o } = t;
  if (e == null)
    e = null;
  else if (f(e))
    n = 16;
  else if (typeof e == "object")
    if (o & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), R(t, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !e._ && !O(e) && (e._ctx = b);
  else g(e) ? (e = { default: e, _ctx: b }, n = 32) : (e = String(e), o & 64 ? (n = 16, e = [it(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function ct(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const o = t[n];
    for (const s in o)
      if (s === "class")
        e.class !== o.class && (e.class = E([e.class, o.class]));
      else if (s === "style")
        e.style = w([e.style, o.style]);
      else if (j(s)) {
        const l = e[s], c = o[s];
        c && l !== c && !(f(l) && l.includes(c)) && (e[s] = l ? [].concat(l, c) : c);
      } else s !== "" && (e[s] = o[s]);
  }
  return e;
}
{
  const t = d(), e = (n, o) => {
    let s;
    return (s = t[n]) || (s = t[n] = []), s.push(o), (l) => {
      s.length > 1 ? s.forEach((c) => c(l)) : s[0](l);
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
const at = /* @__PURE__ */ H({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(t) {
    return (e, n) => ($(), et(q(P), {
      modelValue: t.config.url,
      "onUpdate:modelValue": n[0] || (n[0] = (o) => t.config.url = o),
      label: "URL"
    }, null, 8, ["modelValue"]));
  }
}), ut = Symbol.for("RssConnectionFactory"), ft = Symbol.for("RssConnectionSettings");
function pt({ services: t }) {
  t.register("RssConnectionSettings", at), t.getRequired(F).registerConnectionType("rss", {
    Model: M,
    Connection: ut,
    Settings: ft
  });
}
function _t({ services: t }) {
  t.getRequired(F).unregisterConnectionType("rss"), t.unregister("RssConnectionSettings");
}
export {
  pt as activate,
  _t as deactivate
};
