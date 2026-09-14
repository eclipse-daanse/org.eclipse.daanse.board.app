import { CONNECTION_REPOSITORY as A } from "org.eclipse.daanse.board.app.lib.api.connection";
import { DInput as q } from "org.eclipse.daanse.board.app.ui.vue.controls";
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
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="mqttconnection"
                nsURI="http://org.eclipse.daanse.board.app.lib.connection.mqtt" nsPrefix="mqttconn">

    <eClassifiers xsi:type="ecore:EClass" name="IMQTTConnectionConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="A connection to an MQTT broker. It stays open and pushes messages as they are published, so data sources on it update without polling."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.connection.base#//BaseConnectionConfig"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL for the MQTT broker, e.g., 'mqtt://localhost:1883'.
                                            This attribute overrides the 'url' from BaseConnectionConfig
                                            to emphasize its specific role in MQTT connections."/>
            </eAnnotations>
        </eStructuralFeatures>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="topic" lowerBound="0" upperBound="1"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="An optional MQTT topic to subscribe or publish to by default.
                                            If not specified, a connection might use a default topic or require one per operation."/>
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
const P = [], z = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), d = Object.assign, f = Array.isArray, m = (t) => typeof t == "function", u = (t) => typeof t == "string", B = (t) => typeof t == "symbol", b = (t) => t !== null && typeof t == "object";
let F;
const y = () => F || (F = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function T(t) {
  if (f(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n], o = u(s) ? U(s) : T(s);
      if (o)
        for (const l in o)
          e[l] = o[l];
    }
    return e;
  } else if (u(t) || b(t))
    return t;
}
const L = /;(?![^(]*\))/g, j = /:([^]+)/, D = /\/\*[^]*?\*\//g;
function U(t) {
  const e = {};
  return t.replace(D, "").split(L).forEach((n) => {
    if (n) {
      const s = n.split(j);
      s.length > 1 && (e[s[0].trim()] = s[1].trim());
    }
  }), e;
}
function w(t) {
  let e = "";
  if (u(t))
    e = t;
  else if (f(t))
    for (let n = 0; n < t.length; n++) {
      const s = w(t[n]);
      s && (e += s + " ");
    }
  else if (b(t))
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
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(B)
);
function I(t) {
  return t ? !!t.__v_raw : !1;
}
function k(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Q(t) {
  return k(t) ? t.value : t;
}
/**
* @vue/runtime-core v3.5.24
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let h = null, G = null;
const X = (t) => t.__isTeleport;
function x(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, x(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Y(t, e) {
  return m(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    d({ name: t.name }, e, { setup: t })
  ) : t;
}
y().requestIdleCallback;
y().cancelIdleCallback;
const H = Symbol.for("v-ndc"), K = {}, M = (t) => Object.getPrototypeOf(t) === K, J = (t) => t.__isSuspense, R = Symbol.for("v-fgt"), W = Symbol.for("v-txt"), Z = Symbol.for("v-cmt"), p = [];
let a = null;
function $(t = !1) {
  p.push(a = t ? null : []);
}
function v() {
  p.pop(), a = p[p.length - 1] || null;
}
function tt(t) {
  return t.dynamicChildren = a || P, v(), a && a.push(t), t;
}
function et(t, e, n, s, o) {
  return tt(
    N(
      t,
      e,
      n,
      s,
      o,
      !0
    )
  );
}
function nt(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const O = ({ key: t }) => t ?? null, g = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? u(t) || k(t) || m(t) ? { i: h, r: t, k: e, f: !!n } : t : null);
function ot(t, e = null, n = null, s = 0, o = null, l = t === R ? 0 : 1, c = !1, r = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && O(e),
    ref: e && g(e),
    scopeId: G,
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
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: h
  };
  return r ? (E(i, n), l & 128 && t.normalize(i)) : n && (i.shapeFlag |= u(n) ? 8 : 16), // avoid a block node from tracking itself
  !c && // has current parent block
  a && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && a.push(i), i;
}
const N = st;
function st(t, e = null, n = null, s = 0, o = null, l = !1) {
  if ((!t || t === H) && (t = Z), nt(t)) {
    const r = S(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && E(r, n), !l && a && (r.shapeFlag & 6 ? a[a.indexOf(t)] = r : a.push(r)), r.patchFlag = -2, r;
  }
  if (rt(t) && (t = t.__vccOpts), e) {
    e = lt(e);
    let { class: r, style: i } = e;
    r && !u(r) && (e.class = w(r)), b(i) && (I(i) && !f(i) && (i = d({}, i)), e.style = T(i));
  }
  const c = u(t) ? 1 : J(t) ? 128 : X(t) ? 64 : b(t) ? 4 : m(t) ? 2 : 0;
  return ot(
    t,
    e,
    n,
    s,
    o,
    c,
    l,
    !0
  );
}
function lt(t) {
  return t ? I(t) || M(t) ? d({}, t) : t : null;
}
function S(t, e, n = !1, s = !1) {
  const { props: o, ref: l, patchFlag: c, children: r, transition: i } = t, _ = e ? ct(o || {}, e) : o, C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: _,
    key: _ && O(_),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? f(l) ? l.concat(g(e)) : [l, g(e)] : g(e)
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
    patchFlag: e && t.type !== R ? c === -1 ? 16 : c | 16 : c,
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
  return i && s && x(
    C,
    i.clone(C)
  ), C;
}
function it(t = " ", e = 0) {
  return N(W, null, t, e);
}
function E(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null)
    e = null;
  else if (f(e))
    n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), E(t, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !e._ && !M(e) && (e._ctx = h);
  else m(e) ? (e = { default: e, _ctx: h }, n = 32) : (e = String(e), s & 64 ? (n = 16, e = [it(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function ct(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const o in s)
      if (o === "class")
        e.class !== s.class && (e.class = w([e.class, s.class]));
      else if (o === "style")
        e.style = T([e.style, s.style]);
      else if (z(o)) {
        const l = e[o], c = s[o];
        c && l !== c && !(f(l) && l.includes(c)) && (e[o] = l ? [].concat(l, c) : c);
      } else o !== "" && (e[o] = s[o]);
  }
  return e;
}
{
  const t = y(), e = (n, s) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(s), (l) => {
      o.length > 1 ? o.forEach((c) => c(l)) : o[0](l);
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
  return m(t) && "__vccOpts" in t;
}
const at = /* @__PURE__ */ Y({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(t) {
    return (e, n) => ($(), et(Q(q), {
      modelValue: t.config.url,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => t.config.url = s),
      label: "URL"
    }, null, 8, ["modelValue"]));
  }
}), ut = Symbol.for("MQTTConnectionFactory"), ft = Symbol.for("MqttConnectionSettings");
function gt({ services: t }) {
  t.register("MqttConnectionSettings", at), t.getRequired(A).registerConnectionType("mqtt", {
    Model: V,
    Connection: ut,
    Settings: ft
  });
}
function bt({ services: t }) {
  t.getRequired(A).unregisterConnectionType("mqtt"), t.unregister("MqttConnectionSettings");
}
export {
  gt as activate,
  bt as deactivate
};
