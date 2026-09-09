(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-171a02c8]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-171a02c8]{font-size:var(--v03c0e3de);color:var(--v30456657);text-align:var(--fa842bec);font-weight:var(--e588d71c);font-style:var(--v0f55376e);text-decoration:var(--ca894bc8);overflow:hidden}.settings-container[data-v-f8c5e830]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.settings-block[data-v-f8c5e830]{display:flex;flex-direction:row;align-items:center;gap:8px}.text-title[data-v-f8c5e830]{width:100%}.text-size[data-v-f8c5e830]{width:100%;margin-left:12px}.text-weight[data-v-f8c5e830]{width:100px}.loading[data-v-f8c5e830]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}.toolbar[data-v-f8c5e830]{display:flex;flex-wrap:wrap;gap:.25rem;padding:.5rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:.375rem}.toolbar-group[data-v-f8c5e830]{display:flex;gap:2px;padding-right:.5rem;margin-right:.25rem;border-right:1px solid #e5e7eb}.toolbar-group[data-v-f8c5e830]:last-child{border-right:none;padding-right:0;margin-right:0}.toolbar-btn[data-v-f8c5e830]{min-width:28px!important;height:28px!important;padding:0 4px!important;border:1px solid transparent!important;border-radius:.25rem!important}.toolbar-btn[data-v-f8c5e830]:hover{background-color:#e5e7eb!important}.is-active[data-v-f8c5e830]{background-color:#fff3e0!important;border-color:#ec9c1d!important;color:#c45e00!important}.toolbar-group--inputs[data-v-f8c5e830]{align-items:center;gap:.25rem}.toolbar-input[data-v-f8c5e830]{max-width:70px}\n";})();
import { WidgetActionInterfaceImpl as ht, EVENT_ACTIONS_REGISTRY as vt, PayloadImpl as ce, EVENT_REGISTRY_ID as pt, EVENT_ACTIONS_REGISTRY_ID as gt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Tt, deactivate as _t, component as yt, inject as Ae } from "@eclipse-daanse/tsm";
import { defineComponent as ke, mergeModels as wt, useCssVars as Et, useModel as Ve, computed as Le, toRefs as mt, inject as re, onMounted as Ct, onUnmounted as St, ref as ze, watch as Me, createElementBlock as Xe, openBlock as Pe, normalizeStyle as Ot, withModifiers as Nt, createElementVNode as B, toDisplayString as bt, resolveComponent as xe, createVNode as D, unref as It, withCtx as At, normalizeClass as V } from "vue";
import { useRoute as Lt } from "vue-router";
import { useDatasourceRepository as Mt, VariableComplexStringWrapper as te, VariableWrapper as S } from "org.eclipse.daanse.board.app.ui.vue.composables";
import Fe from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { WidgetAction as He } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as Ft } from "org.eclipse.daanse.board.app.lib.api.variable";
import { ComplexTextInput as Rt } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as Dt, BasicEPackage as Gt, EPackageRegistry as je, BasicEClass as Wt, BasicEReference as X, BasicEObject as kt } from "@emfts/core";
import { WIDGET_SERVICE_ID as Vt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: xt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), zt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, De = {};
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
var Ge;
function Xt() {
  if (Ge) return De;
  Ge = 1;
  var E;
  return (function(n) {
    (function(a) {
      var p = typeof globalThis == "object" ? globalThis : typeof Re == "object" ? Re : typeof self == "object" ? self : typeof this == "object" ? this : y(), f = h(n);
      typeof p.Reflect < "u" && (f = h(p.Reflect, f)), a(f, p), typeof p.Reflect > "u" && (p.Reflect = n);
      function h(x, z) {
        return function(G, H) {
          Object.defineProperty(x, G, { configurable: !0, writable: !0, value: H }), z && z(G, H);
        };
      }
      function C() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function m() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function y() {
        return C() || m();
      }
    })(function(a, p) {
      var f = Object.prototype.hasOwnProperty, h = typeof Symbol == "function", C = h && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", m = h && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", y = typeof Object.create == "function", x = { __proto__: [] } instanceof Array, z = !y && !x, G = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: y ? function() {
          return ue(/* @__PURE__ */ Object.create(null));
        } : x ? function() {
          return ue({ __proto__: null });
        } : function() {
          return ue({});
        },
        has: z ? function(e, t) {
          return f.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: z ? function(e, t) {
          return f.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, H = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : lt(), L = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ut(), Y = typeof WeakMap == "function" ? WeakMap : ct(), k = h ? Symbol.for("@reflect-metadata:registry") : void 0, Z = at(), Q = ot(Z);
      function q(e, t, r, i) {
        if (v(r)) {
          if (!Ee(e))
            throw new TypeError();
          if (!me(t))
            throw new TypeError();
          return Je(e, t);
        } else {
          if (!Ee(e))
            throw new TypeError();
          if (!I(t))
            throw new TypeError();
          if (!I(i) && !v(i) && !U(i))
            throw new TypeError();
          return U(i) && (i = void 0), r = W(r), Qe(e, t, r, i);
        }
      }
      a("decorate", q);
      function ae(e, t) {
        function r(i, d) {
          if (!I(i))
            throw new TypeError();
          if (!v(d) && !nt(d))
            throw new TypeError();
          ge(e, t, i, d);
        }
        return r;
      }
      a("metadata", ae);
      function b(e, t, r, i) {
        if (!I(r))
          throw new TypeError();
        return v(i) || (i = W(i)), ge(e, t, r, i);
      }
      a("defineMetadata", b);
      function M(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = W(r)), he(e, t, r);
      }
      a("hasMetadata", M);
      function F(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = W(r)), oe(e, t, r);
      }
      a("hasOwnMetadata", F);
      function K(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = W(r)), ve(e, t, r);
      }
      a("getMetadata", K);
      function Ue(e, t, r) {
        if (!I(t))
          throw new TypeError();
        return v(r) || (r = W(r)), pe(e, t, r);
      }
      a("getOwnMetadata", Ue);
      function $e(e, t) {
        if (!I(e))
          throw new TypeError();
        return v(t) || (t = W(t)), Te(e, t);
      }
      a("getMetadataKeys", $e);
      function Ye(e, t) {
        if (!I(e))
          throw new TypeError();
        return v(t) || (t = W(t)), _e(e, t);
      }
      a("getOwnMetadataKeys", Ye);
      function qe(e, t, r) {
        if (!I(t))
          throw new TypeError();
        if (v(r) || (r = W(r)), !I(t))
          throw new TypeError();
        v(r) || (r = W(r));
        var i = J(
          t,
          r,
          /*Create*/
          !1
        );
        return v(i) ? !1 : i.OrdinaryDeleteMetadata(e, t, r);
      }
      a("deleteMetadata", qe);
      function Je(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var i = e[r], d = i(t);
          if (!v(d) && !U(d)) {
            if (!me(d))
              throw new TypeError();
            t = d;
          }
        }
        return t;
      }
      function Qe(e, t, r, i) {
        for (var d = e.length - 1; d >= 0; --d) {
          var O = e[d], A = O(t, r, i);
          if (!v(A) && !U(A)) {
            if (!I(A))
              throw new TypeError();
            i = A;
          }
        }
        return i;
      }
      function he(e, t, r) {
        var i = oe(e, t, r);
        if (i)
          return !0;
        var d = le(t);
        return U(d) ? !1 : he(e, d, r);
      }
      function oe(e, t, r) {
        var i = J(
          t,
          r,
          /*Create*/
          !1
        );
        return v(i) ? !1 : we(i.OrdinaryHasOwnMetadata(e, t, r));
      }
      function ve(e, t, r) {
        var i = oe(e, t, r);
        if (i)
          return pe(e, t, r);
        var d = le(t);
        if (!U(d))
          return ve(e, d, r);
      }
      function pe(e, t, r) {
        var i = J(
          t,
          r,
          /*Create*/
          !1
        );
        if (!v(i))
          return i.OrdinaryGetOwnMetadata(e, t, r);
      }
      function ge(e, t, r, i) {
        var d = J(
          r,
          i,
          /*Create*/
          !0
        );
        d.OrdinaryDefineOwnMetadata(e, t, r, i);
      }
      function Te(e, t) {
        var r = _e(e, t), i = le(e);
        if (i === null)
          return r;
        var d = Te(i, t);
        if (d.length <= 0)
          return r;
        if (r.length <= 0)
          return d;
        for (var O = new L(), A = [], g = 0, o = r; g < o.length; g++) {
          var s = o[g], l = O.has(s);
          l || (O.add(s), A.push(s));
        }
        for (var u = 0, T = d; u < T.length; u++) {
          var s = T[u], l = O.has(s);
          l || (O.add(s), A.push(s));
        }
        return A;
      }
      function _e(e, t) {
        var r = J(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function ye(e) {
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
      function U(e) {
        return e === null;
      }
      function Ke(e) {
        return typeof e == "symbol";
      }
      function I(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function et(e, t) {
        switch (ye(e)) {
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
        var r = "string", i = Ce(e, C);
        if (i !== void 0) {
          var d = i.call(e, r);
          if (I(d))
            throw new TypeError();
          return d;
        }
        return tt(e);
      }
      function tt(e, t) {
        var r, i, d;
        {
          var O = e.toString;
          if (ee(O)) {
            var i = O.call(e);
            if (!I(i))
              return i;
          }
          var r = e.valueOf;
          if (ee(r)) {
            var i = r.call(e);
            if (!I(i))
              return i;
          }
        }
        throw new TypeError();
      }
      function we(e) {
        return !!e;
      }
      function rt(e) {
        return "" + e;
      }
      function W(e) {
        var t = et(e);
        return Ke(t) ? t : rt(t);
      }
      function Ee(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function ee(e) {
        return typeof e == "function";
      }
      function me(e) {
        return typeof e == "function";
      }
      function nt(e) {
        switch (ye(e)) {
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
      function Ce(e, t) {
        var r = e[t];
        if (r != null) {
          if (!ee(r))
            throw new TypeError();
          return r;
        }
      }
      function Se(e) {
        var t = Ce(e, m);
        if (!ee(t))
          throw new TypeError();
        var r = t.call(e);
        if (!I(r))
          throw new TypeError();
        return r;
      }
      function Oe(e) {
        return e.value;
      }
      function Ne(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function be(e) {
        var t = e.return;
        t && t.call(e);
      }
      function le(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === H || t !== H)
          return t;
        var r = e.prototype, i = r && Object.getPrototypeOf(r);
        if (i == null || i === Object.prototype)
          return t;
        var d = i.constructor;
        return typeof d != "function" || d === e ? t : d;
      }
      function it() {
        var e;
        !v(k) && typeof p.Reflect < "u" && !(k in p.Reflect) && typeof p.Reflect.defineMetadata == "function" && (e = st(p.Reflect));
        var t, r, i, d = new Y(), O = {
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
                for (var w = Se(i); ; ) {
                  var N = Ne(w);
                  if (!N)
                    return;
                  var R = Oe(N);
                  if (R.isProviderFor(u, T))
                    return be(w), R;
                }
            }
          }
          if (!v(e) && e.isProviderFor(u, T))
            return e;
        }
        function o(u, T) {
          var w = d.get(u), N;
          return v(w) || (N = w.get(T)), v(N) && (N = g(u, T), v(N) || (v(w) && (w = new j(), d.set(u, w)), w.set(T, N))), N;
        }
        function s(u) {
          if (v(u))
            throw new TypeError();
          return t === u || r === u || !v(i) && i.has(u);
        }
        function l(u, T, w) {
          if (!s(w))
            throw new Error("Metadata provider not registered.");
          var N = o(u, T);
          if (N !== w) {
            if (!v(N))
              return !1;
            var R = d.get(u);
            v(R) && (R = new j(), d.set(u, R)), R.set(T, w);
          }
          return !0;
        }
      }
      function at() {
        var e;
        return !v(k) && I(p.Reflect) && Object.isExtensible(p.Reflect) && (e = p.Reflect[k]), v(e) && (e = it()), !v(k) && I(p.Reflect) && Object.isExtensible(p.Reflect) && Object.defineProperty(p.Reflect, k, {
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
            return v(u) ? !1 : u.has(l);
          },
          OrdinaryDefineOwnMetadata: A,
          OrdinaryHasOwnMetadata: d,
          OrdinaryGetOwnMetadata: O,
          OrdinaryOwnMetadataKeys: g,
          OrdinaryDeleteMetadata: o
        };
        return Z.registerProvider(r), r;
        function i(s, l, u) {
          var T = t.get(s), w = !1;
          if (v(T)) {
            if (!u)
              return;
            T = new j(), t.set(s, T), w = !0;
          }
          var N = T.get(l);
          if (v(N)) {
            if (!u)
              return;
            if (N = new j(), T.set(l, N), !e.setProvider(s, l, r))
              throw T.delete(l), w && t.delete(s), new Error("Wrong provider for target.");
          }
          return N;
        }
        function d(s, l, u) {
          var T = i(
            l,
            u,
            /*Create*/
            !1
          );
          return v(T) ? !1 : we(T.has(s));
        }
        function O(s, l, u) {
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
          for (var w = T.keys(), N = Se(w), R = 0; ; ) {
            var Ie = Ne(N);
            if (!Ie)
              return u.length = R, u;
            var ft = Oe(Ie);
            try {
              u[R] = ft;
            } catch (dt) {
              try {
                be(N);
              } finally {
                throw dt;
              }
            }
            R++;
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
      function st(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, i = e.getOwnMetadata, d = e.getOwnMetadataKeys, O = e.deleteMetadata, A = new Y(), g = {
          isProviderFor: function(o, s) {
            var l = A.get(o);
            return !v(l) && l.has(s) ? !0 : d(o, s).length ? (v(l) && (l = new L(), A.set(o, l)), l.add(s), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: i,
          OrdinaryOwnMetadataKeys: d,
          OrdinaryDeleteMetadata: O
        };
        return g;
      }
      function J(e, t, r) {
        var i = Z.getProvider(e, t);
        if (!v(i))
          return i;
        if (r) {
          if (Z.setProvider(e, t, Q))
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
            }, g.prototype[m] = function() {
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
                return this._keys.length--, this._values.length--, se(o, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, g.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, g.prototype.keys = function() {
              return new r(this._keys, this._values, d);
            }, g.prototype.values = function() {
              return new r(this._keys, this._values, O);
            }, g.prototype.entries = function() {
              return new r(this._keys, this._values, A);
            }, g.prototype["@@iterator"] = function() {
              return this.entries();
            }, g.prototype[m] = function() {
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
        return i;
        function d(g, o) {
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
              this._map = new j();
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
            }, t.prototype[m] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function ct() {
        var e = 16, t = G.create(), r = i();
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
              return l !== void 0 ? G.has(l, this._key) : !1;
            }, o.prototype.get = function(s) {
              var l = d(
                s,
                /*create*/
                !1
              );
              return l !== void 0 ? G.get(l, this._key) : void 0;
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
          while (G.has(t, o));
          return t[o] = !0, o;
        }
        function d(o, s) {
          if (!f.call(o, r)) {
            if (!s)
              return;
            Object.defineProperty(o, r, { value: G.create() });
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
  })(E || (E = {})), De;
}
Xt();
var Pt = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, Be = (E, n, a, p) => {
  for (var f = Ht(n, a), h = E.length - 1, C; h >= 0; h--)
    (C = E[h]) && (f = C(n, a, f) || f);
  return f && Pt(n, a, f), f;
};
class ie extends ht {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
Be([
  He({ eventType: "text.clearContent" })
], ie.prototype, "clearContent");
Be([
  He({ eventType: "text.copyContent" })
], ie.prototype, "copyContent");
const jt = { class: "component" }, Bt = /* @__PURE__ */ ke({
  __name: "TextWidget",
  props: /* @__PURE__ */ wt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(E, { expose: n }) {
    Et((b) => ({
      v03c0e3de: ae.value,
      v30456657: L.value.fontColor?.value,
      fa842bec: L.value.horizontalAlign?.value,
      e588d71c: L.value.fontWeight?.value,
      v0f55376e: L.value.fontStyle?.value,
      ca894bc8: L.value.textDecoration?.value
    }));
    const a = E, { datasourceId: p, id: f } = mt(a), h = re(xt.TINY_EMITTER), C = re(vt), y = Lt().params.pageid || "";
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
    const z = new x();
    n(z), Ct(() => {
      f?.value && C.registerInstance(f.value, z, "TextWidget", y);
    }), St(() => {
      f?.value && C.unregisterInstance(f.value);
    });
    const G = () => {
      f?.value && h.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: f.value,
        payload: { widgetId: f.value, timestamp: Date.now() }
      });
    }, H = () => {
      f?.value && h.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: f.value,
        payload: { widgetId: f.value, timestamp: Date.now() }
      });
    }, j = (b) => {
      f?.value && h.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: f.value,
        payload: { widgetId: f.value, text: b, timestamp: Date.now() }
      });
    }, L = Ve(E, "configv"), Y = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    }, k = ze(null), { update: Z } = Mt(p, "object", k), Q = (b, M) => b === "text" ? new te(String(M)) : new S(String(M));
    for (const [b, M] of Object.entries(Y)) {
      const F = L.value[b];
      F == null ? L.value[b] = Q(b, M) : (F.value === void 0 || F.value === null || F.value === "") && (F.value = String(M));
    }
    Me(p, (b, M) => {
      Z(b, M);
    });
    const q = Le(() => {
      if (!L.value.text?.value)
        return "";
      const { parts: b } = Fe.widget.extractValuesAndFullObject(L.value.text.value);
      let M = "";
      for (const F of b)
        if (F.path || F.path === null) {
          const K = Fe.widget.getValueByPath(k.value, F.path);
          M += K !== void 0 ? JSON.stringify(K) : F.text;
        } else
          M += F.text;
      return M;
    }), ae = Le(() => (L.value?.fontSize?.value || 12) + "px");
    return Me(q, (b, M) => {
      b !== M && j(b);
    }), (b, M) => (Pe(), Xe("div", {
      class: "text-container",
      onClick: G,
      onContextmenu: Nt(H, ["prevent"]),
      style: Ot({
        "justify-content": L.value.verticalAlign?.value === "Top" ? "flex-start" : L.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
      })
    }, [
      B("div", jt, bt(q.value), 1)
    ], 36));
  }
}), Ze = (E, n) => {
  const a = E.__vccOpts || E;
  for (const [p, f] of n)
    a[p] = f;
  return a;
}, Zt = /* @__PURE__ */ Ze(Bt, [["__scopeId", "data-v-171a02c8"]]), Ut = {
  class: "settings-section",
  "data-section": "Text und Formatierung"
}, $t = { class: "settings-container" }, Yt = { class: "settings-block" }, qt = { class: "toolbar" }, Jt = { class: "toolbar-group" }, Qt = { class: "toolbar-group" }, Kt = { class: "toolbar-group" }, er = /* @__PURE__ */ ke({
  __name: "TextWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(E) {
    ze({});
    const n = Ve(E, "modelValue");
    re(Ft);
    const a = re("i18n"), p = (f) => a ? a.t(f) : f;
    return (f, h) => {
      const C = xe("VaInput"), m = xe("VaButton");
      return Pe(), Xe("section", Ut, [
        B("div", $t, [
          B("div", Yt, [
            D(It(Rt), {
              modelValue: n.value.text,
              "onUpdate:modelValue": h[0] || (h[0] = (y) => n.value.text = y)
            }, {
              default: At(({ value: y, change: x }) => [
                D(C, {
                  modelValue: y,
                  onInput: x,
                  label: p("textBase:TextWidget.label"),
                  placeholder: "Enter text with variables...",
                  class: "w-full"
                }, null, 8, ["modelValue", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          B("div", qt, [
            B("div", Jt, [
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.fontWeight.value === "bold" }]),
                size: "small",
                preset: "secondary",
                icon: "format_bold",
                onClick: h[1] || (h[1] = (y) => n.value.fontWeight.value = n.value.fontWeight.value === "bold" ? "normal" : "bold"),
                title: "Bold"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.fontStyle.value === "italic" }]),
                size: "small",
                preset: "secondary",
                icon: "format_italic",
                onClick: h[2] || (h[2] = (y) => n.value.fontStyle.value = n.value.fontStyle.value === "italic" ? "normal" : "italic"),
                title: "Italic"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.textDecoration.value === "underline" }]),
                size: "small",
                preset: "secondary",
                icon: "format_underlined",
                onClick: h[3] || (h[3] = (y) => n.value.textDecoration.value = n.value.textDecoration.value === "underline" ? "None" : "underline"),
                title: "Underline"
              }, null, 8, ["class"])
            ]),
            B("div", Qt, [
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Left" }]),
                size: "small",
                preset: "secondary",
                icon: "format_align_left",
                onClick: h[4] || (h[4] = (y) => n.value.horizontalAlign.value = "Left"),
                title: "Left"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Center" }]),
                size: "small",
                preset: "secondary",
                icon: "format_align_center",
                onClick: h[5] || (h[5] = (y) => n.value.horizontalAlign.value = "Center"),
                title: "Center"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.horizontalAlign.value === "Right" }]),
                size: "small",
                preset: "secondary",
                icon: "format_align_right",
                onClick: h[6] || (h[6] = (y) => n.value.horizontalAlign.value = "Right"),
                title: "Right"
              }, null, 8, ["class"])
            ]),
            B("div", Kt, [
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Top" }]),
                size: "small",
                preset: "secondary",
                icon: "vertical_align_top",
                onClick: h[7] || (h[7] = (y) => n.value.verticalAlign.value = "Top"),
                title: "Top"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Center" }]),
                size: "small",
                preset: "secondary",
                icon: "vertical_align_center",
                onClick: h[8] || (h[8] = (y) => n.value.verticalAlign.value = "Center"),
                title: "Center"
              }, null, 8, ["class"]),
              D(m, {
                class: V(["toolbar-btn", { "is-active": n.value.verticalAlign.value === "Bottom" }]),
                size: "small",
                preset: "secondary",
                icon: "vertical_align_bottom",
                onClick: h[9] || (h[9] = (y) => n.value.verticalAlign.value = "Bottom"),
                title: "Bottom"
              }, null, 8, ["class"])
            ])
          ])
        ])
      ]);
    };
  }
}), tr = /* @__PURE__ */ Ze(er, [["__scopeId", "data-v-f8c5e830"]]), rr = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: ce },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: ce },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: ce }
];
class fe extends Dt {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new fe()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(_.eINSTANCE);
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
  create(n) {
    switch (n.getName()) {
      case "TextSettings":
        return this.createTextSettings();
      default:
        throw new Error(`Unknown class: ${n.getName()}`);
    }
  }
}
function P(E) {
  const n = je.INSTANCE.getEPackage(E);
  if (!n)
    throw new Error(`EPackage '${E}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing TextsettingsPackage.`);
  return n;
}
class _ extends Gt {
  static eNAME = "textsettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain";
  static eNS_PREFIX = "textsettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new _(), this._instance.init()), this._instance;
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
    super(), this.setName(_.eNAME), this.setNsURI(_.eNS_URI), this.setNsPrefix(_.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    je.INSTANCE.set(_.eNS_URI, this), this.setEFactoryInstance(fe.eINSTANCE);
    const n = new Wt();
    n.setName("TextSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), _.Literals.TEXT_SETTINGS = n;
    const a = new X();
    a.setContainment(!1), a.setName("text"), a.setLowerBound(0), a.setUpperBound(1), n.getEStructuralFeatures().push(a), _.Literals.TEXT_SETTINGS__TEXT = a;
    const p = new X();
    p.setContainment(!1), p.setName("fontSize"), p.setLowerBound(0), p.setUpperBound(1), n.getEStructuralFeatures().push(p), _.Literals.TEXT_SETTINGS__FONT_SIZE = p;
    const f = new X();
    f.setContainment(!1), f.setName("fontColor"), f.setLowerBound(0), f.setUpperBound(1), n.getEStructuralFeatures().push(f), _.Literals.TEXT_SETTINGS__FONT_COLOR = f;
    const h = new X();
    h.setContainment(!1), h.setName("fontWeight"), h.setLowerBound(0), h.setUpperBound(1), n.getEStructuralFeatures().push(h), _.Literals.TEXT_SETTINGS__FONT_WEIGHT = h;
    const C = new X();
    C.setContainment(!1), C.setName("fontStyle"), C.setLowerBound(0), C.setUpperBound(1), n.getEStructuralFeatures().push(C), _.Literals.TEXT_SETTINGS__FONT_STYLE = C;
    const m = new X();
    m.setContainment(!1), m.setName("textDecoration"), m.setLowerBound(0), m.setUpperBound(1), n.getEStructuralFeatures().push(m), _.Literals.TEXT_SETTINGS__TEXT_DECORATION = m;
    const y = new X();
    y.setContainment(!1), y.setName("horizontalAlign"), y.setLowerBound(0), y.setUpperBound(1), n.getEStructuralFeatures().push(y), _.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN = y;
    const x = new X();
    x.setContainment(!1), x.setName("verticalAlign"), x.setLowerBound(0), x.setUpperBound(1), n.getEStructuralFeatures().push(x), _.Literals.TEXT_SETTINGS__VERTICAL_ALIGN = x, _.Literals.TEXT_SETTINGS__TEXT.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableComplexStringWrapper")), _.Literals.TEXT_SETTINGS__FONT_SIZE.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__FONT_COLOR.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__FONT_WEIGHT.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__FONT_STYLE.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__TEXT_DECORATION.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__HORIZONTAL_ALIGN.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), _.Literals.TEXT_SETTINGS__VERTICAL_ALIGN.setEType(P("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class c extends kt {
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
    return _.Literals.TEXT_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(c.TEXT),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set fontSize(n) {
    const a = this._fontSize;
    this._fontSize = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_SIZE),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set fontColor(n) {
    const a = this._fontColor;
    this._fontColor = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_COLOR),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set fontWeight(n) {
    const a = this._fontWeight;
    this._fontWeight = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_WEIGHT),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set fontStyle(n) {
    const a = this._fontStyle;
    this._fontStyle = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.FONT_STYLE),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set textDecoration(n) {
    const a = this._textDecoration;
    this._textDecoration = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.TEXT_DECORATION),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set horizontalAlign(n) {
    const a = this._horizontalAlign;
    this._horizontalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.HORIZONTAL_ALIGN),
      getOldValue: () => a,
      getNewValue: () => n,
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
  set verticalAlign(n) {
    const a = this._verticalAlign;
    this._verticalAlign = n, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(c.VERTICAL_ALIGN),
      getOldValue: () => a,
      getNewValue: () => n,
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
  eGet(n) {
    switch (this.eClass().getFeatureID(n)) {
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
        return super.eGet(n);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(n, a) {
    switch (this.eClass().getFeatureID(n)) {
      case c.TEXT:
        this.text = a, super.eSet(n, a);
        break;
      case c.FONT_SIZE:
        this.fontSize = a, super.eSet(n, a);
        break;
      case c.FONT_COLOR:
        this.fontColor = a, super.eSet(n, a);
        break;
      case c.FONT_WEIGHT:
        this.fontWeight = a, super.eSet(n, a);
        break;
      case c.FONT_STYLE:
        this.fontStyle = a, super.eSet(n, a);
        break;
      case c.TEXT_DECORATION:
        this.textDecoration = a, super.eSet(n, a);
        break;
      case c.HORIZONTAL_ALIGN:
        this.horizontalAlign = a, super.eSet(n, a);
        break;
      case c.VERTICAL_ALIGN:
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
        return super.eIsSet(n);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(n) {
    switch (this.eClass().getFeatureID(n)) {
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
var ir = Object.defineProperty, ar = Object.getOwnPropertyDescriptor, de = (E, n, a, p) => {
  for (var f = p > 1 ? void 0 : p ? ar(n, a) : n, h = E.length - 1, C; h >= 0; h--)
    (C = E[h]) && (f = (p ? C(n, a, f) : C(f)) || f);
  return p && f && ir(n, a, f), f;
}, We = (E, n) => (a, p) => n(a, p, E);
_.eINSTANCE;
const $ = "TextWidget";
let ne = class {
  constructor(E, n) {
    this.events = E, this.actions = n;
  }
  type = $;
  component = Zt;
  settingsComponent = tr;
  supportedDSTypes = [];
  icon = zt;
  name = "Text";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: nr,
    uri: "/text-settings.ui.xmi",
    ePackage: () => _.eINSTANCE,
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
de([
  Tt()
], ne.prototype, "register", 1);
de([
  _t()
], ne.prototype, "unregister", 1);
ne = de([
  yt({
    service: [Vt],
    properties: { "widget.type": $ }
  }),
  We(0, Ae(pt)),
  We(1, Ae(gt))
], ne);
export {
  c as TextSettingsImpl,
  Zt as TextWidget,
  ne as TextWidgetProvider,
  tr as TextWidgetSettings,
  _ as TextsettingsPackage,
  nr as textSettingsFormXmi
};
