(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-171a02c8]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-171a02c8]{font-size:var(--v03c0e3de);color:var(--v30456657);text-align:var(--fa842bec);font-weight:var(--e588d71c);font-style:var(--v0f55376e);text-decoration:var(--ca894bc8);overflow:hidden}.settings-container[data-v-b4efc2cf]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.settings-block[data-v-b4efc2cf]{display:flex;flex-direction:row;align-items:center;gap:8px}.text-title[data-v-b4efc2cf]{width:100%}.text-size[data-v-b4efc2cf]{width:100%;margin-left:12px}.text-weight[data-v-b4efc2cf]{width:100px}.loading[data-v-b4efc2cf]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}.toolbar[data-v-b4efc2cf]{display:flex;flex-wrap:wrap;gap:.25rem;padding:.5rem;background:var(--color-raised);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px)}.toolbar-group[data-v-b4efc2cf]{display:flex;gap:2px;padding-right:.5rem;margin-right:.25rem;border-right:1px solid var(--color-divider)}.toolbar-group[data-v-b4efc2cf]:last-child{border-right:none;padding-right:0;margin-right:0}.toolbar-btn[data-v-b4efc2cf]{min-width:28px;height:28px;padding:0 4px}.is-active[data-v-b4efc2cf]{background-color:color-mix(in srgb,var(--color-accent) 18%,transparent);border-color:var(--color-accent);color:var(--color-accent)}.toolbar-group--inputs[data-v-b4efc2cf]{align-items:center;gap:.25rem}.toolbar-input[data-v-b4efc2cf]{max-width:70px}\n";})();
import { WidgetActionInterfaceImpl as yt, EVENT_ACTIONS_REGISTRY as wt, PayloadImpl as he, EVENT_REGISTRY_ID as Et, EVENT_ACTIONS_REGISTRY_ID as mt } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as Xe, activate as St, deactivate as Ct, inject as Me } from "@eclipse-daanse/tsm";
import { defineComponent as He, mergeModels as Ot, useCssVars as Nt, useModel as je, computed as Re, toRefs as bt, inject as ve, onMounted as It, onUnmounted as At, ref as Be, watch as De, createElementBlock as Ue, openBlock as Ze, normalizeStyle as xt, withModifiers as Ft, createElementVNode as q, toDisplayString as Lt, unref as _, createVNode as N, withCtx as z, normalizeClass as P } from "vue";
import { useRoute as Mt } from "vue-router";
import { useDatasourceRepository as Rt, VariableComplexStringWrapper as ae, VariableWrapper as S, useTranslation as Dt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import Ge from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { WidgetAction as $e } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as Wt } from "org.eclipse.daanse.board.app.lib.api.variable";
import { ComplexTextInput as kt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { DInput as zt, DButton as X, DIcon as H } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEFactory as Vt, BasicEPackage as Pt, EPackageRegistry as qe, BasicEClass as Xt, BasicEReference as B, BasicEObject as Ht } from "@emfts/core";
import { WIDGET_SERVICE_ID as jt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Gt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Bt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
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
function Ut() {
  if (ze) return ke;
  ze = 1;
  var y;
  return (function(n) {
    (function(i) {
      var g = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : D(), o = v(n);
      typeof g.Reflect < "u" && (o = v(g.Reflect, o)), i(o, g), typeof g.Reflect > "u" && (g.Reflect = n);
      function v(L, j) {
        return function(W, Z) {
          Object.defineProperty(L, W, { configurable: !0, writable: !0, value: Z }), j && j(W, Z);
        };
      }
      function E() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function M() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function D() {
        return E() || M();
      }
    })(function(i, g) {
      var o = Object.prototype.hasOwnProperty, v = typeof Symbol == "function", E = v && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", M = v && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", D = typeof Object.create == "function", L = { __proto__: [] } instanceof Array, j = !D && !L, W = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: D ? function() {
          return de(/* @__PURE__ */ Object.create(null));
        } : L ? function() {
          return de({ __proto__: null });
        } : function() {
          return de({});
        },
        has: j ? function(e, t) {
          return o.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: j ? function(e, t) {
          return o.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, Z = Object.getPrototypeOf(Function), $ = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : vt(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : gt(), K = typeof WeakMap == "function" ? WeakMap : pt(), V = v ? Symbol.for("@reflect-metadata:registry") : void 0, Y = ft(), re = dt(Y);
      function ee(e, t, r, a) {
        if (h(r)) {
          if (!Oe(e))
            throw new TypeError();
          if (!Ne(t))
            throw new TypeError();
          return nt(e, t);
        } else {
          if (!Oe(e))
            throw new TypeError();
          if (!I(t))
            throw new TypeError();
          if (!I(a) && !h(a) && !J(a))
            throw new TypeError();
          return J(a) && (a = void 0), r = k(r), it(e, t, r, a);
        }
      }
      i("decorate", ee);
      function le(e, t) {
        function r(a, d) {
          if (!I(a))
            throw new TypeError();
          if (!h(d) && !ut(d))
            throw new TypeError();
          we(e, t, a, d);
        }
        return r;
      }
      i("metadata", le);
      function b(e, t, r, a) {
        if (!I(r))
          throw new TypeError();
        return h(a) || (a = k(a)), we(e, t, r, a);
      }
      i("defineMetadata", b);
      function F(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = k(r)), Te(e, t, r);
      }
      i("hasMetadata", F);
      function R(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = k(r)), ue(e, t, r);
      }
      i("hasOwnMetadata", R);
      function ne(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = k(r)), _e(e, t, r);
      }
      i("getMetadata", ne);
      function Ke(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return h(r) || (r = k(r)), ye(e, t, r);
      }
      i("getOwnMetadata", Ke);
      function et(e, t) {
        if (!I(e))
          throw new TypeError();
        return h(t) || (t = k(t)), Ee(e, t);
      }
      i("getMetadataKeys", et);
      function tt(e, t) {
        if (!I(e))
          throw new TypeError();
        return h(t) || (t = k(t)), me(e, t);
      }
      i("getOwnMetadataKeys", tt);
      function rt(e, t, r) {
        if (!I(t))
          throw new TypeError();
        if (h(r) || (r = k(r)), !I(t))
          throw new TypeError();
        h(r) || (r = k(r));
        var a = te(
          t,
          r,
          /*Create*/
          !1
        );
        return h(a) ? !1 : a.OrdinaryDeleteMetadata(e, t, r);
      }
      i("deleteMetadata", rt);
      function nt(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var a = e[r], d = a(t);
          if (!h(d) && !J(d)) {
            if (!Ne(d))
              throw new TypeError();
            t = d;
          }
        }
        return t;
      }
      function it(e, t, r, a) {
        for (var d = e.length - 1; d >= 0; --d) {
          var C = e[d], A = C(t, r, a);
          if (!h(A) && !J(A)) {
            if (!I(A))
              throw new TypeError();
            a = A;
          }
        }
        return a;
      }
      function Te(e, t, r) {
        var a = ue(e, t, r);
        if (a)
          return !0;
        var d = fe(t);
        return J(d) ? !1 : Te(e, d, r);
      }
      function ue(e, t, r) {
        var a = te(
          t,
          r,
          /*Create*/
          !1
        );
        return h(a) ? !1 : Ce(a.OrdinaryHasOwnMetadata(e, t, r));
      }
      function _e(e, t, r) {
        var a = ue(e, t, r);
        if (a)
          return ye(e, t, r);
        var d = fe(t);
        if (!J(d))
          return _e(e, d, r);
      }
      function ye(e, t, r) {
        var a = te(
          t,
          r,
          /*Create*/
          !1
        );
        if (!h(a))
          return a.OrdinaryGetOwnMetadata(e, t, r);
      }
      function we(e, t, r, a) {
        var d = te(
          r,
          a,
          /*Create*/
          !0
        );
        d.OrdinaryDefineOwnMetadata(e, t, r, a);
      }
      function Ee(e, t) {
        var r = me(e, t), a = fe(e);
        if (a === null)
          return r;
        var d = Ee(a, t);
        if (d.length <= 0)
          return r;
        if (r.length <= 0)
          return d;
        for (var C = new x(), A = [], p = 0, s = r; p < s.length; p++) {
          var l = s[p], u = C.has(l);
          u || (C.add(l), A.push(l));
        }
        for (var c = 0, T = d; c < T.length; c++) {
          var l = T[c], u = C.has(l);
          u || (C.add(l), A.push(l));
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
      function Se(e) {
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
      function J(e) {
        return e === null;
      }
      function at(e) {
        return typeof e == "symbol";
      }
      function I(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function ot(e, t) {
        switch (Se(e)) {
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
        var r = "string", a = be(e, E);
        if (a !== void 0) {
          var d = a.call(e, r);
          if (I(d))
            throw new TypeError();
          return d;
        }
        return st(e);
      }
      function st(e, t) {
        var r, a, d;
        {
          var C = e.toString;
          if (ie(C)) {
            var a = C.call(e);
            if (!I(a))
              return a;
          }
          var r = e.valueOf;
          if (ie(r)) {
            var a = r.call(e);
            if (!I(a))
              return a;
          }
        }
        throw new TypeError();
      }
      function Ce(e) {
        return !!e;
      }
      function lt(e) {
        return "" + e;
      }
      function k(e) {
        var t = ot(e);
        return at(t) ? t : lt(t);
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
      function ut(e) {
        switch (Se(e)) {
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
        var t = be(e, M);
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
      function xe(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function Fe(e) {
        var t = e.return;
        t && t.call(e);
      }
      function fe(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === Z || t !== Z)
          return t;
        var r = e.prototype, a = r && Object.getPrototypeOf(r);
        if (a == null || a === Object.prototype)
          return t;
        var d = a.constructor;
        return typeof d != "function" || d === e ? t : d;
      }
      function ct() {
        var e;
        !h(V) && typeof g.Reflect < "u" && !(V in g.Reflect) && typeof g.Reflect.defineMetadata == "function" && (e = ht(g.Reflect));
        var t, r, a, d = new K(), C = {
          registerProvider: A,
          getProvider: s,
          setProvider: u
        };
        return C;
        function A(c) {
          if (!Object.isExtensible(C))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === c:
              break;
            case h(t):
              t = c;
              break;
            case t === c:
              break;
            case h(r):
              r = c;
              break;
            case r === c:
              break;
            default:
              a === void 0 && (a = new x()), a.add(c);
              break;
          }
        }
        function p(c, T) {
          if (!h(t)) {
            if (t.isProviderFor(c, T))
              return t;
            if (!h(r)) {
              if (r.isProviderFor(c, T))
                return t;
              if (!h(a))
                for (var m = Ie(a); ; ) {
                  var O = xe(m);
                  if (!O)
                    return;
                  var G = Ae(O);
                  if (G.isProviderFor(c, T))
                    return Fe(m), G;
                }
            }
          }
          if (!h(e) && e.isProviderFor(c, T))
            return e;
        }
        function s(c, T) {
          var m = d.get(c), O;
          return h(m) || (O = m.get(T)), h(O) && (O = p(c, T), h(O) || (h(m) && (m = new $(), d.set(c, m)), m.set(T, O))), O;
        }
        function l(c) {
          if (h(c))
            throw new TypeError();
          return t === c || r === c || !h(a) && a.has(c);
        }
        function u(c, T, m) {
          if (!l(m))
            throw new Error("Metadata provider not registered.");
          var O = s(c, T);
          if (O !== m) {
            if (!h(O))
              return !1;
            var G = d.get(c);
            h(G) && (G = new $(), d.set(c, G)), G.set(T, m);
          }
          return !0;
        }
      }
      function ft() {
        var e;
        return !h(V) && I(g.Reflect) && Object.isExtensible(g.Reflect) && (e = g.Reflect[V]), h(e) && (e = ct()), !h(V) && I(g.Reflect) && Object.isExtensible(g.Reflect) && Object.defineProperty(g.Reflect, V, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function dt(e) {
        var t = new K(), r = {
          isProviderFor: function(l, u) {
            var c = t.get(l);
            return h(c) ? !1 : c.has(u);
          },
          OrdinaryDefineOwnMetadata: A,
          OrdinaryHasOwnMetadata: d,
          OrdinaryGetOwnMetadata: C,
          OrdinaryOwnMetadataKeys: p,
          OrdinaryDeleteMetadata: s
        };
        return Y.registerProvider(r), r;
        function a(l, u, c) {
          var T = t.get(l), m = !1;
          if (h(T)) {
            if (!c)
              return;
            T = new $(), t.set(l, T), m = !0;
          }
          var O = T.get(u);
          if (h(O)) {
            if (!c)
              return;
            if (O = new $(), T.set(u, O), !e.setProvider(l, u, r))
              throw T.delete(u), m && t.delete(l), new Error("Wrong provider for target.");
          }
          return O;
        }
        function d(l, u, c) {
          var T = a(
            u,
            c,
            /*Create*/
            !1
          );
          return h(T) ? !1 : Ce(T.has(l));
        }
        function C(l, u, c) {
          var T = a(
            u,
            c,
            /*Create*/
            !1
          );
          if (!h(T))
            return T.get(l);
        }
        function A(l, u, c, T) {
          var m = a(
            c,
            T,
            /*Create*/
            !0
          );
          m.set(l, u);
        }
        function p(l, u) {
          var c = [], T = a(
            l,
            u,
            /*Create*/
            !1
          );
          if (h(T))
            return c;
          for (var m = T.keys(), O = Ie(m), G = 0; ; ) {
            var Le = xe(O);
            if (!Le)
              return c.length = G, c;
            var Tt = Ae(Le);
            try {
              c[G] = Tt;
            } catch (_t) {
              try {
                Fe(O);
              } finally {
                throw _t;
              }
            }
            G++;
          }
        }
        function s(l, u, c) {
          var T = a(
            u,
            c,
            /*Create*/
            !1
          );
          if (h(T) || !T.delete(l))
            return !1;
          if (T.size === 0) {
            var m = t.get(u);
            h(m) || (m.delete(c), m.size === 0 && t.delete(m));
          }
          return !0;
        }
      }
      function ht(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, a = e.getOwnMetadata, d = e.getOwnMetadataKeys, C = e.deleteMetadata, A = new K(), p = {
          isProviderFor: function(s, l) {
            var u = A.get(s);
            return !h(u) && u.has(l) ? !0 : d(s, l).length ? (h(u) && (u = new x(), A.set(s, u)), u.add(l), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: a,
          OrdinaryOwnMetadataKeys: d,
          OrdinaryDeleteMetadata: C
        };
        return p;
      }
      function te(e, t, r) {
        var a = Y.getProvider(e, t);
        if (!h(a))
          return a;
        if (r) {
          if (Y.setProvider(e, t, re))
            return re;
          throw new Error("Illegal state.");
        }
      }
      function vt() {
        var e = {}, t = [], r = (
          /** @class */
          (function() {
            function p(s, l, u) {
              this._index = 0, this._keys = s, this._values = l, this._selector = u;
            }
            return p.prototype["@@iterator"] = function() {
              return this;
            }, p.prototype[M] = function() {
              return this;
            }, p.prototype.next = function() {
              var s = this._index;
              if (s >= 0 && s < this._keys.length) {
                var l = this._selector(this._keys[s], this._values[s]);
                return s + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: l, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, p.prototype.throw = function(s) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), s;
            }, p.prototype.return = function(s) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: s, done: !0 };
            }, p;
          })()
        ), a = (
          /** @class */
          (function() {
            function p() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(p.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), p.prototype.has = function(s) {
              return this._find(
                s,
                /*insert*/
                !1
              ) >= 0;
            }, p.prototype.get = function(s) {
              var l = this._find(
                s,
                /*insert*/
                !1
              );
              return l >= 0 ? this._values[l] : void 0;
            }, p.prototype.set = function(s, l) {
              var u = this._find(
                s,
                /*insert*/
                !0
              );
              return this._values[u] = l, this;
            }, p.prototype.delete = function(s) {
              var l = this._find(
                s,
                /*insert*/
                !1
              );
              if (l >= 0) {
                for (var u = this._keys.length, c = l + 1; c < u; c++)
                  this._keys[c - 1] = this._keys[c], this._values[c - 1] = this._values[c];
                return this._keys.length--, this._values.length--, ce(s, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, p.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, p.prototype.keys = function() {
              return new r(this._keys, this._values, d);
            }, p.prototype.values = function() {
              return new r(this._keys, this._values, C);
            }, p.prototype.entries = function() {
              return new r(this._keys, this._values, A);
            }, p.prototype["@@iterator"] = function() {
              return this.entries();
            }, p.prototype[M] = function() {
              return this.entries();
            }, p.prototype._find = function(s, l) {
              if (!ce(this._cacheKey, s)) {
                this._cacheIndex = -1;
                for (var u = 0; u < this._keys.length; u++)
                  if (ce(this._keys[u], s)) {
                    this._cacheIndex = u;
                    break;
                  }
              }
              return this._cacheIndex < 0 && l && (this._cacheIndex = this._keys.length, this._keys.push(s), this._values.push(void 0)), this._cacheIndex;
            }, p;
          })()
        );
        return a;
        function d(p, s) {
          return p;
        }
        function C(p, s) {
          return s;
        }
        function A(p, s) {
          return [p, s];
        }
      }
      function gt() {
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
            }, t.prototype[M] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function pt() {
        var e = 16, t = W.create(), r = a();
        return (
          /** @class */
          (function() {
            function s() {
              this._key = a();
            }
            return s.prototype.has = function(l) {
              var u = d(
                l,
                /*create*/
                !1
              );
              return u !== void 0 ? W.has(u, this._key) : !1;
            }, s.prototype.get = function(l) {
              var u = d(
                l,
                /*create*/
                !1
              );
              return u !== void 0 ? W.get(u, this._key) : void 0;
            }, s.prototype.set = function(l, u) {
              var c = d(
                l,
                /*create*/
                !0
              );
              return c[this._key] = u, this;
            }, s.prototype.delete = function(l) {
              var u = d(
                l,
                /*create*/
                !1
              );
              return u !== void 0 ? delete u[this._key] : !1;
            }, s.prototype.clear = function() {
              this._key = a();
            }, s;
          })()
        );
        function a() {
          var s;
          do
            s = "@@WeakMap@@" + p();
          while (W.has(t, s));
          return t[s] = !0, s;
        }
        function d(s, l) {
          if (!o.call(s, r)) {
            if (!l)
              return;
            Object.defineProperty(s, r, { value: W.create() });
          }
          return s[r];
        }
        function C(s, l) {
          for (var u = 0; u < l; ++u)
            s[u] = Math.random() * 255 | 0;
          return s;
        }
        function A(s) {
          if (typeof Uint8Array == "function") {
            var l = new Uint8Array(s);
            return typeof crypto < "u" ? crypto.getRandomValues(l) : typeof msCrypto < "u" ? msCrypto.getRandomValues(l) : C(l, s), l;
          }
          return C(new Array(s), s);
        }
        function p() {
          var s = A(e);
          s[6] = s[6] & 79 | 64, s[8] = s[8] & 191 | 128;
          for (var l = "", u = 0; u < e; ++u) {
            var c = s[u];
            (u === 4 || u === 6 || u === 8) && (l += "-"), c < 16 && (l += "0"), l += c.toString(16).toLowerCase();
          }
          return l;
        }
      }
      function de(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(y || (y = {})), ke;
}
Ut();
var Zt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, Ye = (y, n, i, g) => {
  for (var o = $t(n, i), v = y.length - 1, E; v >= 0; v--)
    (E = y[v]) && (o = E(n, i, o) || o);
  return o && Zt(n, i, o), o;
};
class se extends yt {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
Ye([
  $e({ eventType: "text.clearContent" })
], se.prototype, "clearContent");
Ye([
  $e({ eventType: "text.copyContent" })
], se.prototype, "copyContent");
const qt = { class: "component" }, Yt = /* @__PURE__ */ He({
  __name: "TextWidget",
  props: /* @__PURE__ */ Ot({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(y, { expose: n }) {
    Nt((b) => ({
      v03c0e3de: le.value,
      v30456657: x.value.fontColor?.value,
      fa842bec: x.value.horizontalAlign?.value,
      e588d71c: x.value.fontWeight?.value,
      v0f55376e: x.value.fontStyle?.value,
      ca894bc8: x.value.textDecoration?.value
    }));
    const i = y, { datasourceId: g, id: o } = bt(i), v = ve(Gt.TINY_EMITTER), E = ve(wt), D = Mt().params.pageid || "";
    class L extends se {
      clearContent() {
        x.value?.text && (x.value.text.value = "");
      }
      copyContent() {
        const F = ee.value || "";
        navigator.clipboard?.writeText(F).catch(() => {
        });
      }
    }
    const j = new L();
    n(j), It(() => {
      o?.value && E.registerInstance(o.value, j, "TextWidget", D);
    }), At(() => {
      o?.value && E.unregisterInstance(o.value);
    });
    const W = () => {
      o?.value && v.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, Z = () => {
      o?.value && v.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, $ = (b) => {
      o?.value && v.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: o.value,
        payload: { widgetId: o.value, text: b, timestamp: Date.now() }
      });
    }, x = je(y, "configv"), K = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    }, V = Be(null), { update: Y } = Rt(g, "object", V), re = (b, F) => b === "text" ? new ae(String(F)) : new S(String(F));
    for (const [b, F] of Object.entries(K)) {
      const R = x.value[b];
      R == null ? x.value[b] = re(b, F) : (R.value === void 0 || R.value === null || R.value === "") && (R.value = String(F));
    }
    De(g, (b, F) => {
      Y(b, F);
    });
    const ee = Re(() => {
      if (!x.value.text?.value)
        return "";
      const { parts: b } = Ge.widget.extractValuesAndFullObject(x.value.text.value);
      let F = "";
      for (const R of b)
        if (R.path || R.path === null) {
          const ne = Ge.widget.getValueByPath(V.value, R.path);
          F += ne !== void 0 ? JSON.stringify(ne) : R.text;
        } else
          F += R.text;
      return F;
    }), le = Re(() => (x.value?.fontSize?.value || 12) + "px");
    return De(ee, (b, F) => {
      b !== F && $(b);
    }), (b, F) => (Ze(), Ue("div", {
      class: "text-container",
      onClick: W,
      onContextmenu: Ft(Z, ["prevent"]),
      style: xt({
        "justify-content": x.value.verticalAlign?.value === "Top" ? "flex-start" : x.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
      })
    }, [
      q("div", qt, Lt(ee.value), 1)
    ], 36));
  }
}), Je = (y, n) => {
  const i = y.__vccOpts || y;
  for (const [g, o] of n)
    i[g] = o;
  return i;
}, Jt = /* @__PURE__ */ Je(Yt, [["__scopeId", "data-v-171a02c8"]]), Qt = ["data-section"], Kt = { class: "settings-container" }, er = { class: "settings-block" }, tr = { class: "toolbar" }, rr = { class: "toolbar-group" }, nr = { class: "toolbar-group" }, ir = { class: "toolbar-group" }, ar = /* @__PURE__ */ He({
  __name: "TextWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(y) {
    Be({});
    const n = je(y, "modelValue");
    ve(Wt);
    const { t: i } = Dt("textPlain");
    return (g, o) => (Ze(), Ue("section", {
      class: "settings-section",
      "data-section-id": "text",
      "data-section": _(i)("Settings.section")
    }, [
      q("div", Kt, [
        q("div", er, [
          N(_(kt), {
            modelValue: n.value.text,
            "onUpdate:modelValue": o[0] || (o[0] = (v) => n.value.text = v)
          }, {
            default: z(({ value: v, change: E }) => [
              N(_(zt), {
                modelValue: v,
                onInput: E,
                label: _(i)("Settings.text"),
                placeholder: _(i)("Settings.textPlaceholder"),
                class: "w-full"
              }, null, 8, ["modelValue", "onInput", "label", "placeholder"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        q("div", tr, [
          q("div", rr, [
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.fontWeight.value === "bold" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[1] || (o[1] = (v) => n.value.fontWeight.value = n.value.fontWeight.value === "bold" ? "normal" : "bold"),
              title: _(i)("Settings.bold")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_bold",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.fontStyle.value === "italic" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[2] || (o[2] = (v) => n.value.fontStyle.value = n.value.fontStyle.value === "italic" ? "normal" : "italic"),
              title: _(i)("Settings.italic")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_italic",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.textDecoration.value === "underline" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[3] || (o[3] = (v) => n.value.textDecoration.value = n.value.textDecoration.value === "underline" ? "None" : "underline"),
              title: _(i)("Settings.underline")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_underlined",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"])
          ]),
          q("div", nr, [
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Left" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[4] || (o[4] = (v) => n.value.horizontalAlign.value = "Left"),
              title: _(i)("Settings.left")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_align_left",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Center" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[5] || (o[5] = (v) => n.value.horizontalAlign.value = "Center"),
              title: _(i)("Settings.center")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_align_center",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Right" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[6] || (o[6] = (v) => n.value.horizontalAlign.value = "Right"),
              title: _(i)("Settings.right")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "format_align_right",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"])
          ]),
          q("div", ir, [
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Top" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[7] || (o[7] = (v) => n.value.verticalAlign.value = "Top"),
              title: _(i)("Settings.top")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "vertical_align_top",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Center" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[8] || (o[8] = (v) => n.value.verticalAlign.value = "Center"),
              title: _(i)("Settings.center")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "vertical_align_center",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"]),
            N(_(X), {
              class: P(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Bottom" }]),
              size: "sm",
              intent: "quiet",
              onClick: o[9] || (o[9] = (v) => n.value.verticalAlign.value = "Bottom"),
              title: _(i)("Settings.bottom")
            }, {
              default: z(() => [
                N(_(H), {
                  name: "vertical_align_bottom",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["class", "title"])
          ])
        ])
      ])
    ], 8, Qt));
  }
}), or = /* @__PURE__ */ Je(ar, [["__scopeId", "data-v-b4efc2cf"]]), sr = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: he },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: he },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: he }
];
class ge extends Vt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new ge()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(w.eINSTANCE);
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
function U(y) {
  const n = qe.INSTANCE.getEPackage(y);
  if (!n)
    throw new Error(`EPackage '${y}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing TextsettingsPackage.`);
  return n;
}
class w extends Pt {
  static eNAME = "textsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain";
  static eNS_PREFIX = "textsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new w(), this._instance.init()), this._instance;
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
    super(), this.setName(w.eNAME), this.setNsURI(w.eNS_URI), this.setNsPrefix(w.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    qe.INSTANCE.set(w.eNS_URI, this), this.setEFactoryInstance(ge.eINSTANCE);
    const n = new Xt();
    n.setName("TextSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), w.Literals.TEXT_SETTINGS = n;
    const i = new B();
    i.setContainment(!1), i.setName("text"), i.setLowerBound(0), i.setUpperBound(1), n.getEStructuralFeatures().push(i), w.Literals.TEXT_SETTINGS__TEXT = i;
    const g = new B();
    g.setContainment(!1), g.setName("fontSize"), g.setLowerBound(0), g.setUpperBound(1), n.getEStructuralFeatures().push(g), w.Literals.TEXT_SETTINGS__FONT_SIZE = g;
    const o = new B();
    o.setContainment(!1), o.setName("fontColor"), o.setLowerBound(0), o.setUpperBound(1), n.getEStructuralFeatures().push(o), w.Literals.TEXT_SETTINGS__FONT_COLOR = o;
    const v = new B();
    v.setContainment(!1), v.setName("fontWeight"), v.setLowerBound(0), v.setUpperBound(1), n.getEStructuralFeatures().push(v), w.Literals.TEXT_SETTINGS__FONT_WEIGHT = v;
    const E = new B();
    E.setContainment(!1), E.setName("fontStyle"), E.setLowerBound(0), E.setUpperBound(1), n.getEStructuralFeatures().push(E), w.Literals.TEXT_SETTINGS__FONT_STYLE = E;
    const M = new B();
    M.setContainment(!1), M.setName("textDecoration"), M.setLowerBound(0), M.setUpperBound(1), n.getEStructuralFeatures().push(M), w.Literals.TEXT_SETTINGS__TEXT_DECORATION = M;
    const D = new B();
    D.setContainment(!1), D.setName("horizontalAlign"), D.setLowerBound(0), D.setUpperBound(1), n.getEStructuralFeatures().push(D), w.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN = D;
    const L = new B();
    L.setContainment(!1), L.setName("verticalAlign"), L.setLowerBound(0), L.setUpperBound(1), n.getEStructuralFeatures().push(L), w.Literals.TEXT_SETTINGS__VERTICAL_ALIGN = L, w.Literals.TEXT_SETTINGS__TEXT.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableComplexStringWrapper")), w.Literals.TEXT_SETTINGS__FONT_SIZE.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__FONT_COLOR.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__FONT_WEIGHT.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__FONT_STYLE.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__TEXT_DECORATION.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), w.Literals.TEXT_SETTINGS__VERTICAL_ALIGN.setEType(U("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class f extends Ht {
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
    return w.Literals.TEXT_SETTINGS;
  }
  // Getters and Setters
  get text() {
    return this._text;
  }
  set text(n) {
    const i = this._text;
    this._text = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.TEXT),
      getOldValue: () => i,
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
    const i = this._fontSize;
    this._fontSize = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_SIZE),
      getOldValue: () => i,
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
    const i = this._fontColor;
    this._fontColor = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_COLOR),
      getOldValue: () => i,
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
    const i = this._fontWeight;
    this._fontWeight = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_WEIGHT),
      getOldValue: () => i,
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
    const i = this._fontStyle;
    this._fontStyle = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.FONT_STYLE),
      getOldValue: () => i,
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
    const i = this._textDecoration;
    this._textDecoration = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.TEXT_DECORATION),
      getOldValue: () => i,
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
    const i = this._horizontalAlign;
    this._horizontalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.HORIZONTAL_ALIGN),
      getOldValue: () => i,
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
    const i = this._verticalAlign;
    this._verticalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(f.VERTICAL_ALIGN),
      getOldValue: () => i,
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
  eSet(n, i) {
    switch (this.eClass().getFeatureID(n)) {
      case f.TEXT:
        this.text = i, super.eSet(n, i);
        break;
      case f.FONT_SIZE:
        this.fontSize = i, super.eSet(n, i);
        break;
      case f.FONT_COLOR:
        this.fontColor = i, super.eSet(n, i);
        break;
      case f.FONT_WEIGHT:
        this.fontWeight = i, super.eSet(n, i);
        break;
      case f.FONT_STYLE:
        this.fontStyle = i, super.eSet(n, i);
        break;
      case f.TEXT_DECORATION:
        this.textDecoration = i, super.eSet(n, i);
        break;
      case f.HORIZONTAL_ALIGN:
        this.horizontalAlign = i, super.eSet(n, i);
        break;
      case f.VERTICAL_ALIGN:
        this.verticalAlign = i, super.eSet(n, i);
        break;
      default:
        super.eSet(n, i);
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
        return this._fontSize !== new S();
      case f.FONT_COLOR:
        return this._fontColor !== new S();
      case f.FONT_WEIGHT:
        return this._fontWeight !== new S();
      case f.FONT_STYLE:
        return this._fontStyle !== new S();
      case f.TEXT_DECORATION:
        return this._textDecoration !== new S();
      case f.HORIZONTAL_ALIGN:
        return this._horizontalAlign !== new S();
      case f.VERTICAL_ALIGN:
        return this._verticalAlign !== new S();
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
        this._fontSize = new S();
        return;
      case f.FONT_COLOR:
        this._fontColor = new S();
        return;
      case f.FONT_WEIGHT:
        this._fontWeight = new S();
        return;
      case f.FONT_STYLE:
        this._fontStyle = new S();
        return;
      case f.TEXT_DECORATION:
        this._textDecoration = new S();
        return;
      case f.HORIZONTAL_ALIGN:
        this._horizontalAlign = new S();
        return;
      case f.VERTICAL_ALIGN:
        this._verticalAlign = new S();
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
const lr = `<?xml version="1.0" encoding="UTF-8"?>
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
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings/fontSize" label="textPlain:Form.fontSize"
        min="1" max="400" step="1"/>
    <fields xsi:type="uimodel:InputWidget" name="fontColor"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings/fontColor" label="textPlain:Form.fontColor"/>
  </components>
</uimodel:UIModel>
`, ur = { name: "Text" }, cr = { section: "Text und Formatierung", text: "Text", textPlaceholder: "Text mit Variablen eingeben…", bold: "Fett", italic: "Kursiv", underline: "Unterstrichen", left: "Links", center: "Mittig", right: "Rechts", top: "Oben", bottom: "Unten" }, fr = { fontSize: "Schriftgröße (px)", fontColor: "Schriftfarbe" }, dr = {
  Widget: ur,
  Settings: cr,
  Form: fr
}, hr = { name: "Text" }, vr = { section: "Text and formatting", text: "Text", textPlaceholder: "Enter text with variables…", bold: "Bold", italic: "Italic", underline: "Underline", left: "Left", center: "Centre", right: "Right", top: "Top", bottom: "Bottom" }, gr = { fontSize: "Font size (px)", fontColor: "Font colour" }, pr = {
  Widget: hr,
  Settings: vr,
  Form: gr
};
var Tr = Object.getOwnPropertyDescriptor, _r = (y, n, i, g) => {
  for (var o = g > 1 ? void 0 : g ? Tr(n, i) : n, v = y.length - 1, E; v >= 0; v--)
    (E = y[v]) && (o = E(o) || o);
  return o;
};
const Qe = "textPlain";
let Ve = class {
  namespace = Qe;
  resources = {
    de: dr,
    en: pr
  };
};
Ve = _r([
  Xe({
    service: ["Translations"],
    properties: { "i18n.namespace": Qe }
  })
], Ve);
var yr = Object.defineProperty, wr = Object.getOwnPropertyDescriptor, pe = (y, n, i, g) => {
  for (var o = g > 1 ? void 0 : g ? wr(n, i) : n, v = y.length - 1, E; v >= 0; v--)
    (E = y[v]) && (o = (g ? E(n, i, o) : E(o)) || o);
  return g && o && yr(n, i, o), o;
}, Pe = (y, n) => (i, g) => n(i, g, y);
w.eINSTANCE;
const Q = "TextWidget";
let oe = class {
  constructor(y, n) {
    this.events = y, this.actions = n;
  }
  type = Q;
  component = Jt;
  settingsComponent = or;
  supportedDSTypes = [];
  icon = Bt;
  name = "Text";
  nameKey = "textPlain:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: lr,
    uri: "/text-settings.ui.xmi",
    ePackage: () => w.eINSTANCE,
    create: () => new f(),
    /*
     * What the text says and how it is set are not fields: the text is
     * written in a field that can name variables inside it, and the rest
     * is six buttons that show at a glance which way it sits.
     */
    unmodelledSections: ["Text und Formatierung"]
  };
  register() {
    this.events.registerWidget(Q, sr), this.actions.registerWidgetType(Q, se, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Q), this.actions.unregisterWidgetType(Q);
  }
};
pe([
  St()
], oe.prototype, "register", 1);
pe([
  Ct()
], oe.prototype, "unregister", 1);
oe = pe([
  Xe({
    service: [jt],
    properties: { "widget.type": Q }
  }),
  Pe(0, Me(Et)),
  Pe(1, Me(mt))
], oe);
export {
  Ve as TextPlainTranslations,
  f as TextSettingsImpl,
  Jt as TextWidget,
  oe as TextWidgetProvider,
  or as TextWidgetSettings,
  w as TextsettingsPackage,
  lr as textSettingsFormXmi
};
