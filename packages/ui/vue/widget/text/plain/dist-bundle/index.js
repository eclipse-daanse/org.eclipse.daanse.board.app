(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-171a02c8]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-171a02c8]{font-size:var(--v03c0e3de);color:var(--v30456657);text-align:var(--fa842bec);font-weight:var(--e588d71c);font-style:var(--v0f55376e);text-decoration:var(--ca894bc8);overflow:hidden}.settings-container[data-v-18bb1b67]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.settings-block[data-v-18bb1b67]{display:flex;flex-direction:row;align-items:center;gap:8px}.text-title[data-v-18bb1b67]{width:100%}.text-size[data-v-18bb1b67]{width:100%;margin-left:12px}.text-weight[data-v-18bb1b67]{width:100px}.loading[data-v-18bb1b67]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}.toolbar[data-v-18bb1b67]{display:flex;flex-wrap:wrap;gap:.25rem;padding:.5rem;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px)}.toolbar-group[data-v-18bb1b67]{display:flex;gap:2px;padding-right:.5rem;margin-right:.25rem;border-right:1px solid var(--color-divider)}.toolbar-group[data-v-18bb1b67]:last-child{border-right:none;padding-right:0;margin-right:0}.toolbar-btn[data-v-18bb1b67]{min-width:28px;height:28px;padding:0 4px}.is-active[data-v-18bb1b67]{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent);border-color:var(--color-accent);color:var(--color-accent)}.toolbar-group--inputs[data-v-18bb1b67]{align-items:center;gap:.25rem}.toolbar-input[data-v-18bb1b67]{max-width:70px}\n";})();
import { WidgetActionInterfaceImpl as gt, EVENT_ACTIONS_REGISTRY as Tt, PayloadImpl as ve, EVENT_REGISTRY_ID as _t, EVENT_ACTIONS_REGISTRY_ID as yt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as wt, deactivate as Et, component as mt, inject as Fe } from "@eclipse-daanse/tsm";
import { defineComponent as Xe, mergeModels as Ct, useCssVars as St, useModel as Pe, computed as Re, toRefs as Ot, inject as oe, onMounted as Nt, onUnmounted as bt, ref as He, watch as De, createElementBlock as je, openBlock as Be, normalizeStyle as It, withModifiers as At, createElementVNode as q, toDisplayString as Lt, createVNode as O, unref as N, withCtx as z, normalizeClass as X } from "vue";
import { useRoute as Mt } from "vue-router";
import { useDatasourceRepository as xt, VariableComplexStringWrapper as ae, VariableWrapper as m } from "org.eclipse.daanse.board.app.ui.vue.composables";
import Ge from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { WidgetAction as Ze } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as Rt } from "org.eclipse.daanse.board.app.lib.api.variable";
import { ComplexTextInput as Dt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { DInput as Gt, DButton as P, DIcon as H } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEFactory as Wt, BasicEPackage as kt, EPackageRegistry as Ue, BasicEClass as zt, BasicEReference as B, BasicEObject as Vt } from "@emfts/core";
import { WIDGET_SERVICE_ID as Xt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ft } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Pt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var ze;
function Ht() {
  if (ze) return ke;
  ze = 1;
  var E;
  return (function(n) {
    (function(a) {
      var p = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : D(), c = h(n);
      typeof p.Reflect < "u" && (c = h(p.Reflect, c)), a(c, p), typeof p.Reflect > "u" && (p.Reflect = n);
      function h(F, j) {
        return function(W, U) {
          Object.defineProperty(F, W, { configurable: !0, writable: !0, value: U }), j && j(W, U);
        };
      }
      function _() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function x() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function D() {
        return _() || x();
      }
    })(function(a, p) {
      var c = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", _ = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", x = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", D = typeof Object.create == "function", F = { __proto__: [] } instanceof Array, j = !D && !F, W = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: D ? function() {
          return he(/* @__PURE__ */ Object.create(null));
        } : F ? function() {
          return he({ __proto__: null });
        } : function() {
          return he({});
        },
        has: j ? function(e, t) {
          return c.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: j ? function(e, t) {
          return c.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, U = Object.getPrototypeOf(Function), $ = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ct(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : dt(), K = typeof WeakMap == "function" ? WeakMap : ht(), V = h ? Symbol.for("@reflect-metadata:registry") : void 0, Y = lt(), re = ut(Y);
      function ee(e, t, r, i) {
        if (v(r)) {
          if (!Oe(e))
            throw new TypeError();
          if (!Ne(t))
            throw new TypeError();
          return et(e, t);
        } else {
          if (!Oe(e))
            throw new TypeError();
          if (!I(t))
            throw new TypeError();
          if (!I(i) && !v(i) && !J(i))
            throw new TypeError();
          return J(i) && (i = void 0), r = k(r), tt(e, t, r, i);
        }
      }
      a("decorate", ee);
      function ue(e, t) {
        function r(i, d) {
          if (!I(i))
            throw new TypeError();
          if (!v(d) && !ot(d))
            throw new TypeError();
          we(e, t, i, d);
        }
        return r;
      }
      a("metadata", ue);
      function b(e, t, r, i) {
        if (!I(r))
          throw new TypeError();
        return v(i) || (i = k(i)), we(e, t, r, i);
      }
      a("defineMetadata", b);
      function M(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = k(r)), Te(e, t, r);
      }
      a("hasMetadata", M);
      function R(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = k(r)), fe(e, t, r);
      }
      a("hasOwnMetadata", R);
      function ne(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = k(r)), _e(e, t, r);
      }
      a("getMetadata", ne);
      function Ye(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = k(r)), ye(e, t, r);
      }
      a("getOwnMetadata", Ye);
      function Je(e, t) {
        if (!I(e))
          throw new TypeError();
        return v(t) || (t = k(t)), Ee(e, t);
      }
      a("getMetadataKeys", Je);
      function Qe(e, t) {
        if (!I(e))
          throw new TypeError();
        return v(t) || (t = k(t)), me(e, t);
      }
      a("getOwnMetadataKeys", Qe);
      function Ke(e, t, r) {
        if (!I(t))
          throw new TypeError();
        if (v(r) || (r = k(r)), !I(t))
          throw new TypeError();
        v(r) || (r = k(r));
        var i = te(
          t,
          r,
          /*Create*/
          !1
        );
        return v(i) ? !1 : i.OrdinaryDeleteMetadata(e, t, r);
      }
      a("deleteMetadata", Ke);
      function et(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var i = e[r], d = i(t);
          if (!v(d) && !J(d)) {
            if (!Ne(d))
              throw new TypeError();
            t = d;
          }
        }
        return t;
      }
      function tt(e, t, r, i) {
        for (var d = e.length - 1; d >= 0; --d) {
          var C = e[d], A = C(t, r, i);
          if (!v(A) && !J(A)) {
            if (!I(A))
              throw new TypeError();
            i = A;
          }
        }
        return i;
      }
      function Te(e, t, r) {
        var i = fe(e, t, r);
        if (i)
          return !0;
        var d = de(t);
        return J(d) ? !1 : Te(e, d, r);
      }
      function fe(e, t, r) {
        var i = te(
          t,
          r,
          /*Create*/
          !1
        );
        return v(i) ? !1 : Se(i.OrdinaryHasOwnMetadata(e, t, r));
      }
      function _e(e, t, r) {
        var i = fe(e, t, r);
        if (i)
          return ye(e, t, r);
        var d = de(t);
        if (!J(d))
          return _e(e, d, r);
      }
      function ye(e, t, r) {
        var i = te(
          t,
          r,
          /*Create*/
          !1
        );
        if (!v(i))
          return i.OrdinaryGetOwnMetadata(e, t, r);
      }
      function we(e, t, r, i) {
        var d = te(
          r,
          i,
          /*Create*/
          !0
        );
        d.OrdinaryDefineOwnMetadata(e, t, r, i);
      }
      function Ee(e, t) {
        var r = me(e, t), i = de(e);
        if (i === null)
          return r;
        var d = Ee(i, t);
        if (d.length <= 0)
          return r;
        if (r.length <= 0)
          return d;
        for (var C = new L(), A = [], g = 0, o = r; g < o.length; g++) {
          var s = o[g], l = C.has(s);
          l || (C.add(s), A.push(s));
        }
        for (var u = 0, T = d; u < T.length; u++) {
          var s = T[u], l = C.has(s);
          l || (C.add(s), A.push(s));
        }
        return A;
      }
      function me(e, t) {
        var r = te(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function Ce(e) {
        if (e === null)
          return 1;
        switch (typeof e) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return e === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function v(e) {
        return e === void 0;
      }
      function J(e) {
        return e === null;
      }
      function rt(e) {
        return typeof e == "symbol";
      }
      function I(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function nt(e, t) {
        switch (Ce(e)) {
          case 0:
            return e;
          case 1:
            return e;
          case 2:
            return e;
          case 3:
            return e;
          case 4:
            return e;
          case 5:
            return e;
        }
        var r = "string", i = be(e, _);
        if (i !== void 0) {
          var d = i.call(e, r);
          if (I(d))
            throw new TypeError();
          return d;
        }
        return it(e);
      }
      function it(e, t) {
        var r, i, d;
        {
          var C = e.toString;
          if (ie(C)) {
            var i = C.call(e);
            if (!I(i))
              return i;
          }
          var r = e.valueOf;
          if (ie(r)) {
            var i = r.call(e);
            if (!I(i))
              return i;
          }
        }
        throw new TypeError();
      }
      function Se(e) {
        return !!e;
      }
      function at(e) {
        return "" + e;
      }
      function k(e) {
        var t = nt(e);
        return rt(t) ? t : at(t);
      }
      function Oe(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function ie(e) {
        return typeof e == "function";
      }
      function Ne(e) {
        return typeof e == "function";
      }
      function ot(e) {
        switch (Ce(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function ce(e, t) {
        return e === t || e !== e && t !== t;
      }
      function be(e, t) {
        var r = e[t];
        if (r != null) {
          if (!ie(r))
            throw new TypeError();
          return r;
        }
      }
      function Ie(e) {
        var t = be(e, x);
        if (!ie(t))
          throw new TypeError();
        var r = t.call(e);
        if (!I(r))
          throw new TypeError();
        return r;
      }
      function Ae(e) {
        return e.value;
      }
      function Le(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function Me(e) {
        var t = e.return;
        t && t.call(e);
      }
      function de(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === U || t !== U)
          return t;
        var r = e.prototype, i = r && Object.getPrototypeOf(r);
        if (i == null || i === Object.prototype)
          return t;
        var d = i.constructor;
        return typeof d != "function" || d === e ? t : d;
      }
      function st() {
        var e;
        !v(V) && typeof p.Reflect < "u" && !(V in p.Reflect) && typeof p.Reflect.defineMetadata == "function" && (e = ft(p.Reflect));
        var t, r, i, d = new K(), C = {
          registerProvider: A,
          getProvider: o,
          setProvider: l
        };
        return C;
        function A(u) {
          if (!Object.isExtensible(C))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === u:
              break;
            case v(t):
              t = u;
              break;
            case t === u:
              break;
            case v(r):
              r = u;
              break;
            case r === u:
              break;
            default:
              i === void 0 && (i = new L()), i.add(u);
              break;
          }
        }
        function g(u, T) {
          if (!v(t)) {
            if (t.isProviderFor(u, T))
              return t;
            if (!v(r)) {
              if (r.isProviderFor(u, T))
                return t;
              if (!v(i))
                for (var w = Ie(i); ; ) {
                  var S = Le(w);
                  if (!S)
                    return;
                  var G = Ae(S);
                  if (G.isProviderFor(u, T))
                    return Me(w), G;
                }
            }
          }
          if (!v(e) && e.isProviderFor(u, T))
            return e;
        }
        function o(u, T) {
          var w = d.get(u), S;
          return v(w) || (S = w.get(T)), v(S) && (S = g(u, T), v(S) || (v(w) && (w = new $(), d.set(u, w)), w.set(T, S))), S;
        }
        function s(u) {
          if (v(u))
            throw new TypeError();
          return t === u || r === u || !v(i) && i.has(u);
        }
        function l(u, T, w) {
          if (!s(w))
            throw new Error("Metadata provider not registered.");
          var S = o(u, T);
          if (S !== w) {
            if (!v(S))
              return !1;
            var G = d.get(u);
            v(G) && (G = new $(), d.set(u, G)), G.set(T, w);
          }
          return !0;
        }
      }
      function lt() {
        var e;
        return !v(V) && I(p.Reflect) && Object.isExtensible(p.Reflect) && (e = p.Reflect[V]), v(e) && (e = st()), !v(V) && I(p.Reflect) && Object.isExtensible(p.Reflect) && Object.defineProperty(p.Reflect, V, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function ut(e) {
        var t = new K(), r = {
          isProviderFor: function(s, l) {
            var u = t.get(s);
            return v(u) ? !1 : u.has(l);
          },
          OrdinaryDefineOwnMetadata: A,
          OrdinaryHasOwnMetadata: d,
          OrdinaryGetOwnMetadata: C,
          OrdinaryOwnMetadataKeys: g,
          OrdinaryDeleteMetadata: o
        };
        return Y.registerProvider(r), r;
        function i(s, l, u) {
          var T = t.get(s), w = !1;
          if (v(T)) {
            if (!u)
              return;
            T = new $(), t.set(s, T), w = !0;
          }
          var S = T.get(l);
          if (v(S)) {
            if (!u)
              return;
            if (S = new $(), T.set(l, S), !e.setProvider(s, l, r))
              throw T.delete(l), w && t.delete(s), new Error("Wrong provider for target.");
          }
          return S;
        }
        function d(s, l, u) {
          var T = i(
            l,
            u,
            /*Create*/
            !1
          );
          return v(T) ? !1 : Se(T.has(s));
        }
        function C(s, l, u) {
          var T = i(
            l,
            u,
            /*Create*/
            !1
          );
          if (!v(T))
            return T.get(s);
        }
        function A(s, l, u, T) {
          var w = i(
            u,
            T,
            /*Create*/
            !0
          );
          w.set(s, l);
        }
        function g(s, l) {
          var u = [], T = i(
            s,
            l,
            /*Create*/
            !1
          );
          if (v(T))
            return u;
          for (var w = T.keys(), S = Ie(w), G = 0; ; ) {
            var xe = Le(S);
            if (!xe)
              return u.length = G, u;
            var vt = Ae(xe);
            try {
              u[G] = vt;
            } catch (pt) {
              try {
                Me(S);
              } finally {
                throw pt;
              }
            }
            G++;
          }
        }
        function o(s, l, u) {
          var T = i(
            l,
            u,
            /*Create*/
            !1
          );
          if (v(T) || !T.delete(s))
            return !1;
          if (T.size === 0) {
            var w = t.get(l);
            v(w) || (w.delete(u), w.size === 0 && t.delete(w));
          }
          return !0;
        }
      }
      function ft(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, i = e.getOwnMetadata, d = e.getOwnMetadataKeys, C = e.deleteMetadata, A = new K(), g = {
          isProviderFor: function(o, s) {
            var l = A.get(o);
            return !v(l) && l.has(s) ? !0 : d(o, s).length ? (v(l) && (l = new L(), A.set(o, l)), l.add(s), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: i,
          OrdinaryOwnMetadataKeys: d,
          OrdinaryDeleteMetadata: C
        };
        return g;
      }
      function te(e, t, r) {
        var i = Y.getProvider(e, t);
        if (!v(i))
          return i;
        if (r) {
          if (Y.setProvider(e, t, re))
            return re;
          throw new Error("Illegal state.");
        }
      }
      function ct() {
        var e = {}, t = [], r = (
          /** @class */
          (function() {
            function g(o, s, l) {
              this._index = 0, this._keys = o, this._values = s, this._selector = l;
            }
            return g.prototype["@@iterator"] = function() {
              return this;
            }, g.prototype[x] = function() {
              return this;
            }, g.prototype.next = function() {
              var o = this._index;
              if (o >= 0 && o < this._keys.length) {
                var s = this._selector(this._keys[o], this._values[o]);
                return o + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: s, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, g.prototype.throw = function(o) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), o;
            }, g.prototype.return = function(o) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: o, done: !0 };
            }, g;
          })()
        ), i = (
          /** @class */
          (function() {
            function g() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(g.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), g.prototype.has = function(o) {
              return this._find(
                o,
                /*insert*/
                !1
              ) >= 0;
            }, g.prototype.get = function(o) {
              var s = this._find(
                o,
                /*insert*/
                !1
              );
              return s >= 0 ? this._values[s] : void 0;
            }, g.prototype.set = function(o, s) {
              var l = this._find(
                o,
                /*insert*/
                !0
              );
              return this._values[l] = s, this;
            }, g.prototype.delete = function(o) {
              var s = this._find(
                o,
                /*insert*/
                !1
              );
              if (s >= 0) {
                for (var l = this._keys.length, u = s + 1; u < l; u++)
                  this._keys[u - 1] = this._keys[u], this._values[u - 1] = this._values[u];
                return this._keys.length--, this._values.length--, ce(o, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, g.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, g.prototype.keys = function() {
              return new r(this._keys, this._values, d);
            }, g.prototype.values = function() {
              return new r(this._keys, this._values, C);
            }, g.prototype.entries = function() {
              return new r(this._keys, this._values, A);
            }, g.prototype["@@iterator"] = function() {
              return this.entries();
            }, g.prototype[x] = function() {
              return this.entries();
            }, g.prototype._find = function(o, s) {
              if (!ce(this._cacheKey, o)) {
                this._cacheIndex = -1;
                for (var l = 0; l < this._keys.length; l++)
                  if (ce(this._keys[l], o)) {
                    this._cacheIndex = l;
                    break;
                  }
              }
              return this._cacheIndex < 0 && s && (this._cacheIndex = this._keys.length, this._keys.push(o), this._values.push(void 0)), this._cacheIndex;
            }, g;
          })()
        );
        return i;
        function d(g, o) {
          return g;
        }
        function C(g, o) {
          return o;
        }
        function A(g, o) {
          return [g, o];
        }
      }
      function dt() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new $();
            }
            return Object.defineProperty(t.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.has = function(r) {
              return this._map.has(r);
            }, t.prototype.add = function(r) {
              return this._map.set(r, r), this;
            }, t.prototype.delete = function(r) {
              return this._map.delete(r);
            }, t.prototype.clear = function() {
              this._map.clear();
            }, t.prototype.keys = function() {
              return this._map.keys();
            }, t.prototype.values = function() {
              return this._map.keys();
            }, t.prototype.entries = function() {
              return this._map.entries();
            }, t.prototype["@@iterator"] = function() {
              return this.keys();
            }, t.prototype[x] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function ht() {
        var e = 16, t = W.create(), r = i();
        return (
          /** @class */
          (function() {
            function o() {
              this._key = i();
            }
            return o.prototype.has = function(s) {
              var l = d(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? W.has(l, this._key) : !1;
            }, o.prototype.get = function(s) {
              var l = d(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? W.get(l, this._key) : void 0;
            }, o.prototype.set = function(s, l) {
              var u = d(
                s,
                /*create*/
                !0
              );
              return u[this._key] = l, this;
            }, o.prototype.delete = function(s) {
              var l = d(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? delete l[this._key] : !1;
            }, o.prototype.clear = function() {
              this._key = i();
            }, o;
          })()
        );
        function i() {
          var o;
          do
            o = "@@WeakMap@@" + g();
          while (W.has(t, o));
          return t[o] = !0, o;
        }
        function d(o, s) {
          if (!c.call(o, r)) {
            if (!s)
              return;
            Object.defineProperty(o, r, { value: W.create() });
          }
          return o[r];
        }
        function C(o, s) {
          for (var l = 0; l < s; ++l)
            o[l] = Math.random() * 255 | 0;
          return o;
        }
        function A(o) {
          if (typeof Uint8Array == "function") {
            var s = new Uint8Array(o);
            return typeof crypto < "u" ? crypto.getRandomValues(s) : typeof msCrypto < "u" ? msCrypto.getRandomValues(s) : C(s, o), s;
          }
          return C(new Array(o), o);
        }
        function g() {
          var o = A(e);
          o[6] = o[6] & 79 | 64, o[8] = o[8] & 191 | 128;
          for (var s = "", l = 0; l < e; ++l) {
            var u = o[l];
            (l === 4 || l === 6 || l === 8) && (s += "-"), u < 16 && (s += "0"), s += u.toString(16).toLowerCase();
          }
          return s;
        }
      }
      function he(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(E || (E = {})), ke;
}
Ht();
var jt = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, $e = (E, n, a, p) => {
  for (var c = Bt(n, a), h = E.length - 1, _; h >= 0; h--)
    (_ = E[h]) && (c = _(n, a, c) || c);
  return c && jt(n, a, c), c;
};
class le extends gt {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
$e([
  Ze({ eventType: "text.clearContent" })
], le.prototype, "clearContent");
$e([
  Ze({ eventType: "text.copyContent" })
], le.prototype, "copyContent");
const Zt = { class: "component" }, Ut = /* @__PURE__ */ Xe({
  __name: "TextWidget",
  props: /* @__PURE__ */ Ct({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(E, { expose: n }) {
    St((b) => ({
      v03c0e3de: ue.value,
      v30456657: L.value.fontColor?.value,
      fa842bec: L.value.horizontalAlign?.value,
      e588d71c: L.value.fontWeight?.value,
      v0f55376e: L.value.fontStyle?.value,
      ca894bc8: L.value.textDecoration?.value
    }));
    const a = E, { datasourceId: p, id: c } = Ot(a), h = oe(Ft.TINY_EMITTER), _ = oe(Tt), D = Mt().params.pageid || "";
    class F extends le {
      clearContent() {
        L.value?.text && (L.value.text.value = "");
      }
      copyContent() {
        const M = ee.value || "";
        navigator.clipboard?.writeText(M).catch(() => {
        });
      }
    }
    const j = new F();
    n(j), Nt(() => {
      c?.value && _.registerInstance(c.value, j, "TextWidget", D);
    }), bt(() => {
      c?.value && _.unregisterInstance(c.value);
    });
    const W = () => {
      c?.value && h.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: c.value,
        payload: { widgetId: c.value, timestamp: Date.now() }
      });
    }, U = () => {
      c?.value && h.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: c.value,
        payload: { widgetId: c.value, timestamp: Date.now() }
      });
    }, $ = (b) => {
      c?.value && h.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: c.value,
        payload: { widgetId: c.value, text: b, timestamp: Date.now() }
      });
    }, L = Pe(E, "configv"), K = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    }, V = He(null), { update: Y } = xt(p, "object", V), re = (b, M) => b === "text" ? new ae(String(M)) : new m(String(M));
    for (const [b, M] of Object.entries(K)) {
      const R = L.value[b];
      R == null ? L.value[b] = re(b, M) : (R.value === void 0 || R.value === null || R.value === "") && (R.value = String(M));
    }
    De(p, (b, M) => {
      Y(b, M);
    });
    const ee = Re(() => {
      if (!L.value.text?.value)
        return "";
      const { parts: b } = Ge.widget.extractValuesAndFullObject(L.value.text.value);
      let M = "";
      for (const R of b)
        if (R.path || R.path === null) {
          const ne = Ge.widget.getValueByPath(V.value, R.path);
          M += ne !== void 0 ? JSON.stringify(ne) : R.text;
        } else
          M += R.text;
      return M;
    }), ue = Re(() => (L.value?.fontSize?.value || 12) + "px");
    return De(ee, (b, M) => {
      b !== M && $(b);
    }), (b, M) => (Be(), je("div", {
      class: "text-container",
      onClick: W,
      onContextmenu: At(U, ["prevent"]),
      style: It({
        "justify-content": L.value.verticalAlign?.value === "Top" ? "flex-start" : L.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
      })
    }, [
      q("div", Zt, Lt(ee.value), 1)
    ], 36));
  }
}), qe = (E, n) => {
  const a = E.__vccOpts || E;
  for (const [p, c] of n)
    a[p] = c;
  return a;
}, $t = /* @__PURE__ */ qe(Ut, [["__scopeId", "data-v-171a02c8"]]), qt = {
  class: "settings-section",
  "data-section": "Text und Formatierung"
}, Yt = { class: "settings-container" }, Jt = { class: "settings-block" }, Qt = { class: "toolbar" }, Kt = { class: "toolbar-group" }, er = { class: "toolbar-group" }, tr = { class: "toolbar-group" }, rr = /* @__PURE__ */ Xe({
  __name: "TextWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(E) {
    He({});
    const n = Pe(E, "modelValue");
    oe(Rt);
    const a = oe("i18n"), p = (c) => a ? a.t(c) : c;
    return (c, h) => (Be(), je("section", qt, [
      q("div", Yt, [
        q("div", Jt, [
          O(N(Dt), {
            modelValue: n.value.text,
            "onUpdate:modelValue": h[0] || (h[0] = (_) => n.value.text = _)
          }, {
            default: z(({ value: _, change: x }) => [
              O(N(Gt), {
                modelValue: _,
                onInput: x,
                label: p("textBase:TextWidget.label"),
                placeholder: "Enter text with variables...",
                class: "w-full"
              }, null, 8, ["modelValue", "onInput", "label"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        q("div", Qt, [
          q("div", Kt, [
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.fontWeight.value === "bold" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[1] || (h[1] = (_) => n.value.fontWeight.value = n.value.fontWeight.value === "bold" ? "normal" : "bold"),
              title: "Bold"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_bold",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.fontStyle.value === "italic" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[2] || (h[2] = (_) => n.value.fontStyle.value = n.value.fontStyle.value === "italic" ? "normal" : "italic"),
              title: "Italic"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_italic",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.textDecoration.value === "underline" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[3] || (h[3] = (_) => n.value.textDecoration.value = n.value.textDecoration.value === "underline" ? "None" : "underline"),
              title: "Underline"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_underlined",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          q("div", er, [
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Left" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[4] || (h[4] = (_) => n.value.horizontalAlign.value = "Left"),
              title: "Left"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_align_left",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Center" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[5] || (h[5] = (_) => n.value.horizontalAlign.value = "Center"),
              title: "Center"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_align_center",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Right" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[6] || (h[6] = (_) => n.value.horizontalAlign.value = "Right"),
              title: "Right"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "format_align_right",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          q("div", tr, [
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Top" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[7] || (h[7] = (_) => n.value.verticalAlign.value = "Top"),
              title: "Top"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "vertical_align_top",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Center" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[8] || (h[8] = (_) => n.value.verticalAlign.value = "Center"),
              title: "Center"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "vertical_align_center",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"]),
            O(N(P), {
              class: X(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Bottom" }]),
              size: "sm",
              intent: "quiet",
              onClick: h[9] || (h[9] = (_) => n.value.verticalAlign.value = "Bottom"),
              title: "Bottom"
            }, {
              default: z(() => [
                O(N(H), {
                  name: "vertical_align_bottom",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ])
      ])
    ]));
  }
}), nr = /* @__PURE__ */ qe(rr, [["__scopeId", "data-v-18bb1b67"]]), ir = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: ve },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: ve },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: ve }
];
class pe extends Wt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new pe()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(y.eINSTANCE);
  }
  /**
   * Create a new TextSettings instance
   */
  createTextSettings() {
    return new f();
  }
  /**
   * Create an instance of the given class
   */
  create(n) {
    switch (n.getName()) {
      case "TextSettings":
        return this.createTextSettings();
      default:
        throw new Error(`Unknown class: ${n.getName()}`);
    }
  }
}
function Z(E) {
  const n = Ue.INSTANCE.getEPackage(E);
  if (!n)
    throw new Error(`EPackage '${E}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing TextsettingsPackage.`);
  return n;
}
class y extends kt {
  static eNAME = "textsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain";
  static eNS_PREFIX = "textsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new y(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    TEXT_SETTINGS: null,
    TEXT_SETTINGS__TEXT: null,
    TEXT_SETTINGS__FONT_SIZE: null,
    TEXT_SETTINGS__FONT_COLOR: null,
    TEXT_SETTINGS__FONT_WEIGHT: null,
    TEXT_SETTINGS__FONT_STYLE: null,
    TEXT_SETTINGS__TEXT_DECORATION: null,
    TEXT_SETTINGS__HORIZONTAL_ALIGN: null,
    TEXT_SETTINGS__VERTICAL_ALIGN: null
  };
  constructor() {
    super(), this.setName(y.eNAME), this.setNsURI(y.eNS_URI), this.setNsPrefix(y.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Ue.INSTANCE.set(y.eNS_URI, this), this.setEFactoryInstance(pe.eINSTANCE);
    const n = new zt();
    n.setName("TextSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), y.Literals.TEXT_SETTINGS = n;
    const a = new B();
    a.setContainment(!1), a.setName("text"), a.setLowerBound(0), a.setUpperBound(1), n.getEStructuralFeatures().push(a), y.Literals.TEXT_SETTINGS__TEXT = a;
    const p = new B();
    p.setContainment(!1), p.setName("fontSize"), p.setLowerBound(0), p.setUpperBound(1), n.getEStructuralFeatures().push(p), y.Literals.TEXT_SETTINGS__FONT_SIZE = p;
    const c = new B();
    c.setContainment(!1), c.setName("fontColor"), c.setLowerBound(0), c.setUpperBound(1), n.getEStructuralFeatures().push(c), y.Literals.TEXT_SETTINGS__FONT_COLOR = c;
    const h = new B();
    h.setContainment(!1), h.setName("fontWeight"), h.setLowerBound(0), h.setUpperBound(1), n.getEStructuralFeatures().push(h), y.Literals.TEXT_SETTINGS__FONT_WEIGHT = h;
    const _ = new B();
    _.setContainment(!1), _.setName("fontStyle"), _.setLowerBound(0), _.setUpperBound(1), n.getEStructuralFeatures().push(_), y.Literals.TEXT_SETTINGS__FONT_STYLE = _;
    const x = new B();
    x.setContainment(!1), x.setName("textDecoration"), x.setLowerBound(0), x.setUpperBound(1), n.getEStructuralFeatures().push(x), y.Literals.TEXT_SETTINGS__TEXT_DECORATION = x;
    const D = new B();
    D.setContainment(!1), D.setName("horizontalAlign"), D.setLowerBound(0), D.setUpperBound(1), n.getEStructuralFeatures().push(D), y.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN = D;
    const F = new B();
    F.setContainment(!1), F.setName("verticalAlign"), F.setLowerBound(0), F.setUpperBound(1), n.getEStructuralFeatures().push(F), y.Literals.TEXT_SETTINGS__VERTICAL_ALIGN = F, y.Literals.TEXT_SETTINGS__TEXT.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableComplexStringWrapper")), y.Literals.TEXT_SETTINGS__FONT_SIZE.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_COLOR.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_WEIGHT.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_STYLE.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__TEXT_DECORATION.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__VERTICAL_ALIGN.setEType(Z("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class f extends Vt {
  // Feature ID Constants (eLiterals)
  static TEXT = 0;
  static FONT_SIZE = 1;
  static FONT_COLOR = 2;
  static FONT_WEIGHT = 3;
  static FONT_STYLE = 4;
  static TEXT_DECORATION = 5;
  static HORIZONTAL_ALIGN = 6;
  static VERTICAL_ALIGN = 7;
  // Private fields
  _text = new ae();
  _fontSize = new m();
  _fontColor = new m();
  _fontWeight = new m();
  _fontStyle = new m();
  _textDecoration = new m();
  _horizontalAlign = new m();
  _verticalAlign = new m();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return y.Literals.TEXT_SETTINGS;
  }
  // Getters and Setters
  get text() {
    return this._text;
  }
  set text(n) {
    const a = this._text;
    this._text = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.TEXT),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.TEXT,
      merge: () => !1
    });
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(n) {
    const a = this._fontSize;
    this._fontSize = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_SIZE),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.FONT_SIZE,
      merge: () => !1
    });
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(n) {
    const a = this._fontColor;
    this._fontColor = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_COLOR),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.FONT_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(n) {
    const a = this._fontWeight;
    this._fontWeight = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_WEIGHT),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.FONT_WEIGHT,
      merge: () => !1
    });
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(n) {
    const a = this._fontStyle;
    this._fontStyle = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_STYLE),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.FONT_STYLE,
      merge: () => !1
    });
  }
  get textDecoration() {
    return this._textDecoration;
  }
  set textDecoration(n) {
    const a = this._textDecoration;
    this._textDecoration = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.TEXT_DECORATION),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.TEXT_DECORATION,
      merge: () => !1
    });
  }
  get horizontalAlign() {
    return this._horizontalAlign;
  }
  set horizontalAlign(n) {
    const a = this._horizontalAlign;
    this._horizontalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.HORIZONTAL_ALIGN),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.HORIZONTAL_ALIGN,
      merge: () => !1
    });
  }
  get verticalAlign() {
    return this._verticalAlign;
  }
  set verticalAlign(n) {
    const a = this._verticalAlign;
    this._verticalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.VERTICAL_ALIGN),
      getOldValue: () => a,
      getNewValue: () => n,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => f.VERTICAL_ALIGN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(n) {
    switch (this.eClass().getFeatureID(n)) {
      case f.TEXT:
        return this.text;
      case f.FONT_SIZE:
        return this.fontSize;
      case f.FONT_COLOR:
        return this.fontColor;
      case f.FONT_WEIGHT:
        return this.fontWeight;
      case f.FONT_STYLE:
        return this.fontStyle;
      case f.TEXT_DECORATION:
        return this.textDecoration;
      case f.HORIZONTAL_ALIGN:
        return this.horizontalAlign;
      case f.VERTICAL_ALIGN:
        return this.verticalAlign;
      default:
        return super.eGet(n);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(n, a) {
    switch (this.eClass().getFeatureID(n)) {
      case f.TEXT:
        this.text = a, super.eSet(n, a);
        break;
      case f.FONT_SIZE:
        this.fontSize = a, super.eSet(n, a);
        break;
      case f.FONT_COLOR:
        this.fontColor = a, super.eSet(n, a);
        break;
      case f.FONT_WEIGHT:
        this.fontWeight = a, super.eSet(n, a);
        break;
      case f.FONT_STYLE:
        this.fontStyle = a, super.eSet(n, a);
        break;
      case f.TEXT_DECORATION:
        this.textDecoration = a, super.eSet(n, a);
        break;
      case f.HORIZONTAL_ALIGN:
        this.horizontalAlign = a, super.eSet(n, a);
        break;
      case f.VERTICAL_ALIGN:
        this.verticalAlign = a, super.eSet(n, a);
        break;
      default:
        super.eSet(n, a);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(n) {
    switch (this.eClass().getFeatureID(n)) {
      case f.TEXT:
        return this._text !== new ae();
      case f.FONT_SIZE:
        return this._fontSize !== new m();
      case f.FONT_COLOR:
        return this._fontColor !== new m();
      case f.FONT_WEIGHT:
        return this._fontWeight !== new m();
      case f.FONT_STYLE:
        return this._fontStyle !== new m();
      case f.TEXT_DECORATION:
        return this._textDecoration !== new m();
      case f.HORIZONTAL_ALIGN:
        return this._horizontalAlign !== new m();
      case f.VERTICAL_ALIGN:
        return this._verticalAlign !== new m();
      default:
        return super.eIsSet(n);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(n) {
    switch (this.eClass().getFeatureID(n)) {
      case f.TEXT:
        this._text = new ae();
        return;
      case f.FONT_SIZE:
        this._fontSize = new m();
        return;
      case f.FONT_COLOR:
        this._fontColor = new m();
        return;
      case f.FONT_WEIGHT:
        this._fontWeight = new m();
        return;
      case f.FONT_STYLE:
        this._fontStyle = new m();
        return;
      case f.TEXT_DECORATION:
        this._textDecoration = new m();
        return;
      case f.HORIZONTAL_ALIGN:
        this._horizontalAlign = new m();
        return;
      case f.VERTICAL_ALIGN:
        this._verticalAlign = new m();
        return;
      default:
        super.eUnset(n);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      text: this.text,
      fontSize: this.fontSize,
      fontColor: this.fontColor,
      fontWeight: this.fontWeight,
      fontStyle: this.fontStyle,
      textDecoration: this.textDecoration,
      horizontalAlign: this.horizontalAlign,
      verticalAlign: this.verticalAlign
    };
  }
}
const ar = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the text widget: the two values that are typed.

What the text says, and how it is set - bold, italic, underlined, aligned -
stay with the hand-written half beside this. Those are pressed, not typed:
six alignment buttons say at a glance which way the text sits, where six
entries in two dropdowns would not. And the text itself is written in a
field that can name variables inside it, which is a way of composing rather
than a value to enter.

Size and colour are neither. They sat in the same toolbar only because
that is where there was room.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="TextSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings"/>

  <components xsi:type="uimodel:FormView" name="TextSettingsFormView">
    <fields xsi:type="uimodel:NumberWidget" name="fontSize"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings/fontSize" label="Schriftgröße (px)"
        min="1" max="400" step="1"/>
    <fields xsi:type="uimodel:InputWidget" name="fontColor"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings/fontColor" label="Schriftfarbe"/>
  </components>
</uimodel:UIModel>
`;
var or = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, ge = (E, n, a, p) => {
  for (var c = p > 1 ? void 0 : p ? sr(n, a) : n, h = E.length - 1, _; h >= 0; h--)
    (_ = E[h]) && (c = (p ? _(n, a, c) : _(c)) || c);
  return p && c && or(n, a, c), c;
}, Ve = (E, n) => (a, p) => n(a, p, E);
y.eINSTANCE;
const Q = "TextWidget";
let se = class {
  constructor(E, n) {
    this.events = E, this.actions = n;
  }
  type = Q;
  component = $t;
  settingsComponent = nr;
  supportedDSTypes = [];
  icon = Pt;
  name = "Text";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: ar,
    uri: "/text-settings.ui.xmi",
    ePackage: () => y.eINSTANCE,
    create: () => new f(),
    /*
     * What the text says and how it is set are not fields: the text is
     * written in a field that can name variables inside it, and the rest
     * is six buttons that show at a glance which way it sits.
     */
    unmodelledSections: ["Text und Formatierung"]
  };
  register() {
    this.events.registerWidget(Q, ir), this.actions.registerWidgetType(Q, le, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Q), this.actions.unregisterWidgetType(Q);
  }
};
ge([
  wt()
], se.prototype, "register", 1);
ge([
  Et()
], se.prototype, "unregister", 1);
se = ge([
  mt({
    service: [Xt],
    properties: { "widget.type": Q }
  }),
  Ve(0, Fe(_t)),
  Ve(1, Fe(yt))
], se);
export {
  f as TextSettingsImpl,
  $t as TextWidget,
  se as TextWidgetProvider,
  nr as TextWidgetSettings,
  y as TextsettingsPackage,
  ar as textSettingsFormXmi
};
