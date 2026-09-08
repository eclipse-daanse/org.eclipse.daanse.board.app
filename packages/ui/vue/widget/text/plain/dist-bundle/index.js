(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-171a02c8]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-171a02c8]{font-size:var(--v03c0e3de);color:var(--v30456657);text-align:var(--fa842bec);font-weight:var(--e588d71c);font-style:var(--v0f55376e);text-decoration:var(--ca894bc8);overflow:hidden}.settings-container[data-v-d0cf0503]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.settings-block[data-v-d0cf0503]{display:flex;flex-direction:row;align-items:center;gap:8px}.text-title[data-v-d0cf0503]{width:100%}.text-size[data-v-d0cf0503]{width:100%;margin-left:12px}.text-weight[data-v-d0cf0503]{width:100px}.loading[data-v-d0cf0503]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}.toolbar[data-v-d0cf0503]{display:flex;flex-wrap:wrap;gap:.25rem;padding:.5rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:.375rem}.toolbar-group[data-v-d0cf0503]{display:flex;gap:2px;padding-right:.5rem;margin-right:.25rem;border-right:1px solid #e5e7eb}.toolbar-group[data-v-d0cf0503]:last-child{border-right:none;padding-right:0;margin-right:0}.toolbar-btn[data-v-d0cf0503]{min-width:28px!important;height:28px!important;padding:0 4px!important;border:1px solid transparent!important;border-radius:.25rem!important}.toolbar-btn[data-v-d0cf0503]:hover{background-color:#e5e7eb!important}.is-active[data-v-d0cf0503]{background-color:#fff3e0!important;border-color:#ec9c1d!important;color:#c45e00!important}.toolbar-group--inputs[data-v-d0cf0503]{align-items:center;gap:.25rem}.toolbar-input[data-v-d0cf0503]{max-width:70px}\n";})();
import { WidgetActionInterfaceImpl as ht, EVENT_ACTIONS_REGISTRY as vt, PayloadImpl as ce, EVENT_REGISTRY_ID as pt, EVENT_ACTIONS_REGISTRY_ID as gt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Tt, deactivate as _t, component as yt, inject as Me } from "@eclipse-daanse/tsm";
import { defineComponent as ze, mergeModels as wt, useCssVars as Et, useModel as Xe, computed as xe, toRefs as mt, inject as re, onMounted as Ct, onUnmounted as St, ref as de, watch as Fe, createElementBlock as Ot, openBlock as Pe, normalizeStyle as Nt, withModifiers as bt, createElementVNode as j, toDisplayString as It, resolveComponent as fe, createBlock as At, withCtx as Re, createVNode as k, unref as Lt, normalizeClass as z } from "vue";
import { useRoute as Mt } from "vue-router";
import { useDatasourceRepository as xt, VariableComplexStringWrapper as te, VariableWrapper as S } from "org.eclipse.daanse.board.app.ui.vue.composables";
import De from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { WidgetAction as He } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as Rt } from "org.eclipse.daanse.board.app.lib.api.variable";
import { ComplexTextInput as Dt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as Gt, BasicEPackage as kt, EPackageRegistry as Be, BasicEClass as Wt, BasicEReference as X, BasicEObject as Vt } from "@emfts/core";
import { WIDGET_SERVICE_ID as zt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ft } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Xt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ke = {};
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
var We;
function Pt() {
  if (We) return ke;
  We = 1;
  var E;
  return (function(i) {
    (function(n) {
      var p = typeof globalThis == "object" ? globalThis : typeof Ge == "object" ? Ge : typeof self == "object" ? self : typeof this == "object" ? this : m(), d = _(i);
      typeof p.Reflect < "u" && (d = _(p.Reflect, d)), n(d, p), typeof p.Reflect > "u" && (p.Reflect = i);
      function _(x, C) {
        return function(D, H) {
          Object.defineProperty(x, D, { configurable: !0, writable: !0, value: H }), C && C(D, H);
        };
      }
      function v() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function F() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function m() {
        return v() || F();
      }
    })(function(n, p) {
      var d = Object.prototype.hasOwnProperty, _ = typeof Symbol == "function", v = _ && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", F = _ && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", x = { __proto__: [] } instanceof Array, C = !m && !x, D = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: m ? function() {
          return ue(/* @__PURE__ */ Object.create(null));
        } : x ? function() {
          return ue({ __proto__: null });
        } : function() {
          return ue({});
        },
        has: C ? function(e, t) {
          return d.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: C ? function(e, t) {
          return d.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, H = Object.getPrototypeOf(Function), B = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : lt(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ut(), Y = typeof WeakMap == "function" ? WeakMap : ct(), V = _ ? Symbol.for("@reflect-metadata:registry") : void 0, U = at(), Q = ot(U);
      function q(e, t, r, a) {
        if (h(r)) {
          if (!Ce(e))
            throw new TypeError();
          if (!Se(t))
            throw new TypeError();
          return Je(e, t);
        } else {
          if (!Ce(e))
            throw new TypeError();
          if (!I(t))
            throw new TypeError();
          if (!I(a) && !h(a) && !Z(a))
            throw new TypeError();
          return Z(a) && (a = void 0), r = W(r), Qe(e, t, r, a);
        }
      }
      n("decorate", q);
      function ae(e, t) {
        function r(a, f) {
          if (!I(a))
            throw new TypeError();
          if (!h(f) && !nt(f))
            throw new TypeError();
          _e(e, t, a, f);
        }
        return r;
      }
      n("metadata", ae);
      function b(e, t, r, a) {
        if (!I(r))
          throw new TypeError();
        return h(a) || (a = W(a)), _e(e, t, r, a);
      }
      n("defineMetadata", b);
      function M(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = W(r)), pe(e, t, r);
      }
      n("hasMetadata", M);
      function R(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = W(r)), oe(e, t, r);
      }
      n("hasOwnMetadata", R);
      function K(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = W(r)), ge(e, t, r);
      }
      n("getMetadata", K);
      function Ze(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = W(r)), Te(e, t, r);
      }
      n("getOwnMetadata", Ze);
      function $e(e, t) {
        if (!I(e))
          throw new TypeError();
        return h(t) || (t = W(t)), ye(e, t);
      }
      n("getMetadataKeys", $e);
      function Ye(e, t) {
        if (!I(e))
          throw new TypeError();
        return h(t) || (t = W(t)), we(e, t);
      }
      n("getOwnMetadataKeys", Ye);
      function qe(e, t, r) {
        if (!I(t))
          throw new TypeError();
        if (h(r) || (r = W(r)), !I(t))
          throw new TypeError();
        h(r) || (r = W(r));
        var a = J(
          t,
          r,
          /*Create*/
          !1
        );
        return h(a) ? !1 : a.OrdinaryDeleteMetadata(e, t, r);
      }
      n("deleteMetadata", qe);
      function Je(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var a = e[r], f = a(t);
          if (!h(f) && !Z(f)) {
            if (!Se(f))
              throw new TypeError();
            t = f;
          }
        }
        return t;
      }
      function Qe(e, t, r, a) {
        for (var f = e.length - 1; f >= 0; --f) {
          var O = e[f], A = O(t, r, a);
          if (!h(A) && !Z(A)) {
            if (!I(A))
              throw new TypeError();
            a = A;
          }
        }
        return a;
      }
      function pe(e, t, r) {
        var a = oe(e, t, r);
        if (a)
          return !0;
        var f = le(t);
        return Z(f) ? !1 : pe(e, f, r);
      }
      function oe(e, t, r) {
        var a = J(
          t,
          r,
          /*Create*/
          !1
        );
        return h(a) ? !1 : me(a.OrdinaryHasOwnMetadata(e, t, r));
      }
      function ge(e, t, r) {
        var a = oe(e, t, r);
        if (a)
          return Te(e, t, r);
        var f = le(t);
        if (!Z(f))
          return ge(e, f, r);
      }
      function Te(e, t, r) {
        var a = J(
          t,
          r,
          /*Create*/
          !1
        );
        if (!h(a))
          return a.OrdinaryGetOwnMetadata(e, t, r);
      }
      function _e(e, t, r, a) {
        var f = J(
          r,
          a,
          /*Create*/
          !0
        );
        f.OrdinaryDefineOwnMetadata(e, t, r, a);
      }
      function ye(e, t) {
        var r = we(e, t), a = le(e);
        if (a === null)
          return r;
        var f = ye(a, t);
        if (f.length <= 0)
          return r;
        if (r.length <= 0)
          return f;
        for (var O = new L(), A = [], g = 0, o = r; g < o.length; g++) {
          var s = o[g], l = O.has(s);
          l || (O.add(s), A.push(s));
        }
        for (var u = 0, T = f; u < T.length; u++) {
          var s = T[u], l = O.has(s);
          l || (O.add(s), A.push(s));
        }
        return A;
      }
      function we(e, t) {
        var r = J(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function Ee(e) {
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
      function h(e) {
        return e === void 0;
      }
      function Z(e) {
        return e === null;
      }
      function Ke(e) {
        return typeof e == "symbol";
      }
      function I(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function et(e, t) {
        switch (Ee(e)) {
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
        var r = "string", a = Oe(e, v);
        if (a !== void 0) {
          var f = a.call(e, r);
          if (I(f))
            throw new TypeError();
          return f;
        }
        return tt(e);
      }
      function tt(e, t) {
        var r, a, f;
        {
          var O = e.toString;
          if (ee(O)) {
            var a = O.call(e);
            if (!I(a))
              return a;
          }
          var r = e.valueOf;
          if (ee(r)) {
            var a = r.call(e);
            if (!I(a))
              return a;
          }
        }
        throw new TypeError();
      }
      function me(e) {
        return !!e;
      }
      function rt(e) {
        return "" + e;
      }
      function W(e) {
        var t = et(e);
        return Ke(t) ? t : rt(t);
      }
      function Ce(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function ee(e) {
        return typeof e == "function";
      }
      function Se(e) {
        return typeof e == "function";
      }
      function nt(e) {
        switch (Ee(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function se(e, t) {
        return e === t || e !== e && t !== t;
      }
      function Oe(e, t) {
        var r = e[t];
        if (r != null) {
          if (!ee(r))
            throw new TypeError();
          return r;
        }
      }
      function Ne(e) {
        var t = Oe(e, F);
        if (!ee(t))
          throw new TypeError();
        var r = t.call(e);
        if (!I(r))
          throw new TypeError();
        return r;
      }
      function be(e) {
        return e.value;
      }
      function Ie(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function Ae(e) {
        var t = e.return;
        t && t.call(e);
      }
      function le(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === H || t !== H)
          return t;
        var r = e.prototype, a = r && Object.getPrototypeOf(r);
        if (a == null || a === Object.prototype)
          return t;
        var f = a.constructor;
        return typeof f != "function" || f === e ? t : f;
      }
      function it() {
        var e;
        !h(V) && typeof p.Reflect < "u" && !(V in p.Reflect) && typeof p.Reflect.defineMetadata == "function" && (e = st(p.Reflect));
        var t, r, a, f = new Y(), O = {
          registerProvider: A,
          getProvider: o,
          setProvider: l
        };
        return O;
        function A(u) {
          if (!Object.isExtensible(O))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === u:
              break;
            case h(t):
              t = u;
              break;
            case t === u:
              break;
            case h(r):
              r = u;
              break;
            case r === u:
              break;
            default:
              a === void 0 && (a = new L()), a.add(u);
              break;
          }
        }
        function g(u, T) {
          if (!h(t)) {
            if (t.isProviderFor(u, T))
              return t;
            if (!h(r)) {
              if (r.isProviderFor(u, T))
                return t;
              if (!h(a))
                for (var w = Ne(a); ; ) {
                  var N = Ie(w);
                  if (!N)
                    return;
                  var G = be(N);
                  if (G.isProviderFor(u, T))
                    return Ae(w), G;
                }
            }
          }
          if (!h(e) && e.isProviderFor(u, T))
            return e;
        }
        function o(u, T) {
          var w = f.get(u), N;
          return h(w) || (N = w.get(T)), h(N) && (N = g(u, T), h(N) || (h(w) && (w = new B(), f.set(u, w)), w.set(T, N))), N;
        }
        function s(u) {
          if (h(u))
            throw new TypeError();
          return t === u || r === u || !h(a) && a.has(u);
        }
        function l(u, T, w) {
          if (!s(w))
            throw new Error("Metadata provider not registered.");
          var N = o(u, T);
          if (N !== w) {
            if (!h(N))
              return !1;
            var G = f.get(u);
            h(G) && (G = new B(), f.set(u, G)), G.set(T, w);
          }
          return !0;
        }
      }
      function at() {
        var e;
        return !h(V) && I(p.Reflect) && Object.isExtensible(p.Reflect) && (e = p.Reflect[V]), h(e) && (e = it()), !h(V) && I(p.Reflect) && Object.isExtensible(p.Reflect) && Object.defineProperty(p.Reflect, V, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function ot(e) {
        var t = new Y(), r = {
          isProviderFor: function(s, l) {
            var u = t.get(s);
            return h(u) ? !1 : u.has(l);
          },
          OrdinaryDefineOwnMetadata: A,
          OrdinaryHasOwnMetadata: f,
          OrdinaryGetOwnMetadata: O,
          OrdinaryOwnMetadataKeys: g,
          OrdinaryDeleteMetadata: o
        };
        return U.registerProvider(r), r;
        function a(s, l, u) {
          var T = t.get(s), w = !1;
          if (h(T)) {
            if (!u)
              return;
            T = new B(), t.set(s, T), w = !0;
          }
          var N = T.get(l);
          if (h(N)) {
            if (!u)
              return;
            if (N = new B(), T.set(l, N), !e.setProvider(s, l, r))
              throw T.delete(l), w && t.delete(s), new Error("Wrong provider for target.");
          }
          return N;
        }
        function f(s, l, u) {
          var T = a(
            l,
            u,
            /*Create*/
            !1
          );
          return h(T) ? !1 : me(T.has(s));
        }
        function O(s, l, u) {
          var T = a(
            l,
            u,
            /*Create*/
            !1
          );
          if (!h(T))
            return T.get(s);
        }
        function A(s, l, u, T) {
          var w = a(
            u,
            T,
            /*Create*/
            !0
          );
          w.set(s, l);
        }
        function g(s, l) {
          var u = [], T = a(
            s,
            l,
            /*Create*/
            !1
          );
          if (h(T))
            return u;
          for (var w = T.keys(), N = Ne(w), G = 0; ; ) {
            var Le = Ie(N);
            if (!Le)
              return u.length = G, u;
            var ft = be(Le);
            try {
              u[G] = ft;
            } catch (dt) {
              try {
                Ae(N);
              } finally {
                throw dt;
              }
            }
            G++;
          }
        }
        function o(s, l, u) {
          var T = a(
            l,
            u,
            /*Create*/
            !1
          );
          if (h(T) || !T.delete(s))
            return !1;
          if (T.size === 0) {
            var w = t.get(l);
            h(w) || (w.delete(u), w.size === 0 && t.delete(w));
          }
          return !0;
        }
      }
      function st(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, a = e.getOwnMetadata, f = e.getOwnMetadataKeys, O = e.deleteMetadata, A = new Y(), g = {
          isProviderFor: function(o, s) {
            var l = A.get(o);
            return !h(l) && l.has(s) ? !0 : f(o, s).length ? (h(l) && (l = new L(), A.set(o, l)), l.add(s), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: a,
          OrdinaryOwnMetadataKeys: f,
          OrdinaryDeleteMetadata: O
        };
        return g;
      }
      function J(e, t, r) {
        var a = U.getProvider(e, t);
        if (!h(a))
          return a;
        if (r) {
          if (U.setProvider(e, t, Q))
            return Q;
          throw new Error("Illegal state.");
        }
      }
      function lt() {
        var e = {}, t = [], r = (
          /** @class */
          (function() {
            function g(o, s, l) {
              this._index = 0, this._keys = o, this._values = s, this._selector = l;
            }
            return g.prototype["@@iterator"] = function() {
              return this;
            }, g.prototype[F] = function() {
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
        ), a = (
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
                return this._keys.length--, this._values.length--, se(o, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, g.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, g.prototype.keys = function() {
              return new r(this._keys, this._values, f);
            }, g.prototype.values = function() {
              return new r(this._keys, this._values, O);
            }, g.prototype.entries = function() {
              return new r(this._keys, this._values, A);
            }, g.prototype["@@iterator"] = function() {
              return this.entries();
            }, g.prototype[F] = function() {
              return this.entries();
            }, g.prototype._find = function(o, s) {
              if (!se(this._cacheKey, o)) {
                this._cacheIndex = -1;
                for (var l = 0; l < this._keys.length; l++)
                  if (se(this._keys[l], o)) {
                    this._cacheIndex = l;
                    break;
                  }
              }
              return this._cacheIndex < 0 && s && (this._cacheIndex = this._keys.length, this._keys.push(o), this._values.push(void 0)), this._cacheIndex;
            }, g;
          })()
        );
        return a;
        function f(g, o) {
          return g;
        }
        function O(g, o) {
          return o;
        }
        function A(g, o) {
          return [g, o];
        }
      }
      function ut() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new B();
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
            }, t.prototype[F] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function ct() {
        var e = 16, t = D.create(), r = a();
        return (
          /** @class */
          (function() {
            function o() {
              this._key = a();
            }
            return o.prototype.has = function(s) {
              var l = f(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? D.has(l, this._key) : !1;
            }, o.prototype.get = function(s) {
              var l = f(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? D.get(l, this._key) : void 0;
            }, o.prototype.set = function(s, l) {
              var u = f(
                s,
                /*create*/
                !0
              );
              return u[this._key] = l, this;
            }, o.prototype.delete = function(s) {
              var l = f(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? delete l[this._key] : !1;
            }, o.prototype.clear = function() {
              this._key = a();
            }, o;
          })()
        );
        function a() {
          var o;
          do
            o = "@@WeakMap@@" + g();
          while (D.has(t, o));
          return t[o] = !0, o;
        }
        function f(o, s) {
          if (!d.call(o, r)) {
            if (!s)
              return;
            Object.defineProperty(o, r, { value: D.create() });
          }
          return o[r];
        }
        function O(o, s) {
          for (var l = 0; l < s; ++l)
            o[l] = Math.random() * 255 | 0;
          return o;
        }
        function A(o) {
          if (typeof Uint8Array == "function") {
            var s = new Uint8Array(o);
            return typeof crypto < "u" ? crypto.getRandomValues(s) : typeof msCrypto < "u" ? msCrypto.getRandomValues(s) : O(s, o), s;
          }
          return O(new Array(o), o);
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
      function ue(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(E || (E = {})), ke;
}
Pt();
var Ht = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, je = (E, i, n, p) => {
  for (var d = Bt(i, n), _ = E.length - 1, v; _ >= 0; _--)
    (v = E[_]) && (d = v(i, n, d) || d);
  return d && Ht(i, n, d), d;
};
class ie extends ht {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
je([
  He({ eventType: "text.clearContent" })
], ie.prototype, "clearContent");
je([
  He({ eventType: "text.copyContent" })
], ie.prototype, "copyContent");
const jt = { class: "component" }, Ut = /* @__PURE__ */ ze({
  __name: "TextWidget",
  props: /* @__PURE__ */ wt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(E, { expose: i }) {
    Et((b) => ({
      v03c0e3de: ae.value,
      v30456657: L.value.fontColor?.value,
      fa842bec: L.value.horizontalAlign?.value,
      e588d71c: L.value.fontWeight?.value,
      v0f55376e: L.value.fontStyle?.value,
      ca894bc8: L.value.textDecoration?.value
    }));
    const n = E, { datasourceId: p, id: d } = mt(n), _ = re(Ft.TINY_EMITTER), v = re(vt), m = Mt().params.pageid || "";
    class x extends ie {
      clearContent() {
        L.value?.text && (L.value.text.value = "");
      }
      copyContent() {
        const M = q.value || "";
        navigator.clipboard?.writeText(M).catch(() => {
        });
      }
    }
    const C = new x();
    i(C), Ct(() => {
      d?.value && v.registerInstance(d.value, C, "TextWidget", m);
    }), St(() => {
      d?.value && v.unregisterInstance(d.value);
    });
    const D = () => {
      d?.value && _.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: d.value,
        payload: { widgetId: d.value, timestamp: Date.now() }
      });
    }, H = () => {
      d?.value && _.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: d.value,
        payload: { widgetId: d.value, timestamp: Date.now() }
      });
    }, B = (b) => {
      d?.value && _.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: d.value,
        payload: { widgetId: d.value, text: b, timestamp: Date.now() }
      });
    }, L = Xe(E, "configv"), Y = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    }, V = de(null), { update: U } = xt(p, "object", V), Q = (b, M) => b === "text" ? new te(String(M)) : new S(String(M));
    for (const [b, M] of Object.entries(Y)) {
      const R = L.value[b];
      R == null ? L.value[b] = Q(b, M) : (R.value === void 0 || R.value === null || R.value === "") && (R.value = String(M));
    }
    Fe(p, (b, M) => {
      U(b, M);
    });
    const q = xe(() => {
      if (!L.value.text?.value)
        return "";
      const { parts: b } = De.widget.extractValuesAndFullObject(L.value.text.value);
      let M = "";
      for (const R of b)
        if (R.path || R.path === null) {
          const K = De.widget.getValueByPath(V.value, R.path);
          M += K !== void 0 ? JSON.stringify(K) : R.text;
        } else
          M += R.text;
      return M;
    }), ae = xe(() => (L.value?.fontSize?.value || 12) + "px");
    return Fe(q, (b, M) => {
      b !== M && B(b);
    }), (b, M) => (Pe(), Ot("div", {
      class: "text-container",
      onClick: D,
      onContextmenu: bt(H, ["prevent"]),
      style: Nt({
        "justify-content": L.value.verticalAlign?.value === "Top" ? "flex-start" : L.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
      })
    }, [
      j("div", jt, It(q.value), 1)
    ], 36));
  }
}), Ue = (E, i) => {
  const n = E.__vccOpts || E;
  for (const [p, d] of i)
    n[p] = d;
  return n;
}, Zt = /* @__PURE__ */ Ue(Ut, [["__scopeId", "data-v-171a02c8"]]), $t = { class: "settings-container" }, Yt = { class: "settings-block" }, qt = { class: "toolbar" }, Jt = { class: "toolbar-group" }, Qt = { class: "toolbar-group" }, Kt = { class: "toolbar-group" }, er = /* @__PURE__ */ ze({
  __name: "TextWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(E) {
    de({});
    const i = de({
      widgetSection: !1,
      storeSection: !1
    }), n = Xe(E, "modelValue");
    console.log(n), re(Rt);
    const p = re("i18n"), d = (_) => p ? p.t(_) : _;
    return (_, v) => {
      const F = fe("VaInput"), m = fe("VaButton"), x = fe("va-collapse");
      return Pe(), At(x, {
        modelValue: i.value.widgetSection,
        "onUpdate:modelValue": v[10] || (v[10] = (C) => i.value.widgetSection = C),
        icon: "settings",
        header: "Text und Formatierung"
      }, {
        default: Re(() => [
          j("div", $t, [
            j("div", Yt, [
              k(Lt(Dt), {
                modelValue: n.value.text,
                "onUpdate:modelValue": v[0] || (v[0] = (C) => n.value.text = C)
              }, {
                default: Re(({ value: C, change: D }) => [
                  k(F, {
                    modelValue: C,
                    onInput: D,
                    label: d("textBase:TextWidget.label"),
                    placeholder: "Enter text with variables...",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            j("div", qt, [
              j("div", Jt, [
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.fontWeight.value === "bold" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_bold",
                  onClick: v[1] || (v[1] = (C) => n.value.fontWeight.value = n.value.fontWeight.value === "bold" ? "normal" : "bold"),
                  title: "Bold"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.fontStyle.value === "italic" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_italic",
                  onClick: v[2] || (v[2] = (C) => n.value.fontStyle.value = n.value.fontStyle.value === "italic" ? "normal" : "italic"),
                  title: "Italic"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.textDecoration.value === "underline" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_underlined",
                  onClick: v[3] || (v[3] = (C) => n.value.textDecoration.value = n.value.textDecoration.value === "underline" ? "None" : "underline"),
                  title: "Underline"
                }, null, 8, ["class"])
              ]),
              j("div", Qt, [
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Left" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_left",
                  onClick: v[4] || (v[4] = (C) => n.value.horizontalAlign.value = "Left"),
                  title: "Left"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_center",
                  onClick: v[5] || (v[5] = (C) => n.value.horizontalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Right" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_right",
                  onClick: v[6] || (v[6] = (C) => n.value.horizontalAlign.value = "Right"),
                  title: "Right"
                }, null, 8, ["class"])
              ]),
              j("div", Kt, [
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Top" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_top",
                  onClick: v[7] || (v[7] = (C) => n.value.verticalAlign.value = "Top"),
                  title: "Top"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_center",
                  onClick: v[8] || (v[8] = (C) => n.value.verticalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                k(m, {
                  class: z(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Bottom" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_bottom",
                  onClick: v[9] || (v[9] = (C) => n.value.verticalAlign.value = "Bottom"),
                  title: "Bottom"
                }, null, 8, ["class"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), tr = /* @__PURE__ */ Ue(er, [["__scopeId", "data-v-d0cf0503"]]), rr = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: ce },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: ce },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: ce }
];
class he extends Gt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new he()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(y.eINSTANCE);
  }
  /**
   * Create a new TextSettings instance
   */
  createTextSettings() {
    return new c();
  }
  /**
   * Create an instance of the given class
   */
  create(i) {
    switch (i.getName()) {
      case "TextSettings":
        return this.createTextSettings();
      default:
        throw new Error(`Unknown class: ${i.getName()}`);
    }
  }
}
function P(E) {
  const i = Be.INSTANCE.getEPackage(E);
  if (!i)
    throw new Error(`EPackage '${E}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing TextsettingsPackage.`);
  return i;
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
    Be.INSTANCE.set(y.eNS_URI, this), this.setEFactoryInstance(he.eINSTANCE);
    const i = new Wt();
    i.setName("TextSettings"), i.setAbstract(!1), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), y.Literals.TEXT_SETTINGS = i;
    const n = new X();
    n.setContainment(!1), n.setName("text"), n.setLowerBound(0), n.setUpperBound(1), i.getEStructuralFeatures().push(n), y.Literals.TEXT_SETTINGS__TEXT = n;
    const p = new X();
    p.setContainment(!1), p.setName("fontSize"), p.setLowerBound(0), p.setUpperBound(1), i.getEStructuralFeatures().push(p), y.Literals.TEXT_SETTINGS__FONT_SIZE = p;
    const d = new X();
    d.setContainment(!1), d.setName("fontColor"), d.setLowerBound(0), d.setUpperBound(1), i.getEStructuralFeatures().push(d), y.Literals.TEXT_SETTINGS__FONT_COLOR = d;
    const _ = new X();
    _.setContainment(!1), _.setName("fontWeight"), _.setLowerBound(0), _.setUpperBound(1), i.getEStructuralFeatures().push(_), y.Literals.TEXT_SETTINGS__FONT_WEIGHT = _;
    const v = new X();
    v.setContainment(!1), v.setName("fontStyle"), v.setLowerBound(0), v.setUpperBound(1), i.getEStructuralFeatures().push(v), y.Literals.TEXT_SETTINGS__FONT_STYLE = v;
    const F = new X();
    F.setContainment(!1), F.setName("textDecoration"), F.setLowerBound(0), F.setUpperBound(1), i.getEStructuralFeatures().push(F), y.Literals.TEXT_SETTINGS__TEXT_DECORATION = F;
    const m = new X();
    m.setContainment(!1), m.setName("horizontalAlign"), m.setLowerBound(0), m.setUpperBound(1), i.getEStructuralFeatures().push(m), y.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN = m;
    const x = new X();
    x.setContainment(!1), x.setName("verticalAlign"), x.setLowerBound(0), x.setUpperBound(1), i.getEStructuralFeatures().push(x), y.Literals.TEXT_SETTINGS__VERTICAL_ALIGN = x, y.Literals.TEXT_SETTINGS__TEXT.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableComplexStringWrapper")), y.Literals.TEXT_SETTINGS__FONT_SIZE.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_COLOR.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_WEIGHT.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__FONT_STYLE.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__TEXT_DECORATION.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), y.Literals.TEXT_SETTINGS__VERTICAL_ALIGN.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class c extends Vt {
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
  _text = new te();
  _fontSize = new S();
  _fontColor = new S();
  _fontWeight = new S();
  _fontStyle = new S();
  _textDecoration = new S();
  _horizontalAlign = new S();
  _verticalAlign = new S();
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
  set text(i) {
    const n = this._text;
    this._text = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.TEXT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.TEXT,
      merge: () => !1
    });
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(i) {
    const n = this._fontSize;
    this._fontSize = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.FONT_SIZE,
      merge: () => !1
    });
  }
  get fontColor() {
    return this._fontColor;
  }
  set fontColor(i) {
    const n = this._fontColor;
    this._fontColor = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.FONT_COLOR,
      merge: () => !1
    });
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(i) {
    const n = this._fontWeight;
    this._fontWeight = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.FONT_WEIGHT,
      merge: () => !1
    });
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(i) {
    const n = this._fontStyle;
    this._fontStyle = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_STYLE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.FONT_STYLE,
      merge: () => !1
    });
  }
  get textDecoration() {
    return this._textDecoration;
  }
  set textDecoration(i) {
    const n = this._textDecoration;
    this._textDecoration = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.TEXT_DECORATION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.TEXT_DECORATION,
      merge: () => !1
    });
  }
  get horizontalAlign() {
    return this._horizontalAlign;
  }
  set horizontalAlign(i) {
    const n = this._horizontalAlign;
    this._horizontalAlign = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.HORIZONTAL_ALIGN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.HORIZONTAL_ALIGN,
      merge: () => !1
    });
  }
  get verticalAlign() {
    return this._verticalAlign;
  }
  set verticalAlign(i) {
    const n = this._verticalAlign;
    this._verticalAlign = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.VERTICAL_ALIGN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => c.VERTICAL_ALIGN,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case c.TEXT:
        return this.text;
      case c.FONT_SIZE:
        return this.fontSize;
      case c.FONT_COLOR:
        return this.fontColor;
      case c.FONT_WEIGHT:
        return this.fontWeight;
      case c.FONT_STYLE:
        return this.fontStyle;
      case c.TEXT_DECORATION:
        return this.textDecoration;
      case c.HORIZONTAL_ALIGN:
        return this.horizontalAlign;
      case c.VERTICAL_ALIGN:
        return this.verticalAlign;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case c.TEXT:
        this.text = n, super.eSet(i, n);
        break;
      case c.FONT_SIZE:
        this.fontSize = n, super.eSet(i, n);
        break;
      case c.FONT_COLOR:
        this.fontColor = n, super.eSet(i, n);
        break;
      case c.FONT_WEIGHT:
        this.fontWeight = n, super.eSet(i, n);
        break;
      case c.FONT_STYLE:
        this.fontStyle = n, super.eSet(i, n);
        break;
      case c.TEXT_DECORATION:
        this.textDecoration = n, super.eSet(i, n);
        break;
      case c.HORIZONTAL_ALIGN:
        this.horizontalAlign = n, super.eSet(i, n);
        break;
      case c.VERTICAL_ALIGN:
        this.verticalAlign = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case c.TEXT:
        return this._text !== new te();
      case c.FONT_SIZE:
        return this._fontSize !== new S();
      case c.FONT_COLOR:
        return this._fontColor !== new S();
      case c.FONT_WEIGHT:
        return this._fontWeight !== new S();
      case c.FONT_STYLE:
        return this._fontStyle !== new S();
      case c.TEXT_DECORATION:
        return this._textDecoration !== new S();
      case c.HORIZONTAL_ALIGN:
        return this._horizontalAlign !== new S();
      case c.VERTICAL_ALIGN:
        return this._verticalAlign !== new S();
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case c.TEXT:
        this._text = new te();
        return;
      case c.FONT_SIZE:
        this._fontSize = new S();
        return;
      case c.FONT_COLOR:
        this._fontColor = new S();
        return;
      case c.FONT_WEIGHT:
        this._fontWeight = new S();
        return;
      case c.FONT_STYLE:
        this._fontStyle = new S();
        return;
      case c.TEXT_DECORATION:
        this._textDecoration = new S();
        return;
      case c.HORIZONTAL_ALIGN:
        this._horizontalAlign = new S();
        return;
      case c.VERTICAL_ALIGN:
        this._verticalAlign = new S();
        return;
      default:
        super.eUnset(i);
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
const nr = `<?xml version="1.0" encoding="UTF-8"?>
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
var ir = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, ve = (E, i, n, p) => {
  for (var d = p > 1 ? void 0 : p ? ar(i, n) : i, _ = E.length - 1, v; _ >= 0; _--)
    (v = E[_]) && (d = (p ? v(i, n, d) : v(d)) || d);
  return p && d && ir(i, n, d), d;
}, Ve = (E, i) => (n, p) => i(n, p, E);
y.eINSTANCE;
const $ = "TextWidget";
let ne = class {
  constructor(E, i) {
    this.events = E, this.actions = i;
  }
  type = $;
  component = Zt;
  settingsComponent = tr;
  supportedDSTypes = [];
  icon = Xt;
  name = "Text";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: nr,
    uri: "/text-settings.ui.xmi",
    ePackage: () => y.eINSTANCE,
    create: () => new c(),
    /*
     * What the text says and how it is set are not fields: the text is
     * written in a field that can name variables inside it, and the rest
     * is six buttons that show at a glance which way it sits.
     */
    unmodelledSections: ["Text und Formatierung"]
  };
  register() {
    this.events.registerWidget($, rr), this.actions.registerWidgetType($, ie, "widget");
  }
  unregister() {
    this.events.unregisterWidget($), this.actions.unregisterWidgetType($);
  }
};
ve([
  Tt()
], ne.prototype, "register", 1);
ve([
  _t()
], ne.prototype, "unregister", 1);
ne = ve([
  yt({
    service: [zt],
    properties: { "widget.type": $ }
  }),
  Ve(0, Me(pt)),
  Ve(1, Me(gt))
], ne);
export {
  c as TextSettingsImpl,
  Zt as TextWidget,
  ne as TextWidgetProvider,
  tr as TextWidgetSettings,
  y as TextsettingsPackage,
  nr as textSettingsFormXmi
};
