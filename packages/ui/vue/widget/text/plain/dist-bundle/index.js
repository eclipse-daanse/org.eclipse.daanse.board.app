(function(){var i="ui.vue.widget.text.plain",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".text-container[data-v-7f505d2d]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.component[data-v-7f505d2d]{font-size:var(--a48f8840);color:var(--v34b31368);text-align:var(--v2c3809b9);font-weight:var(--v0788cc15);font-style:var(--ccf41bcc);text-decoration:var(--v1f06182b);overflow:hidden}.settings-container[data-v-99382129]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.settings-block[data-v-99382129]{display:flex;flex-direction:row;align-items:center;gap:8px}.text-title[data-v-99382129]{width:100%}.text-size[data-v-99382129]{width:100%;margin-left:12px}.text-weight[data-v-99382129]{width:100px}.loading[data-v-99382129]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}.toolbar[data-v-99382129]{display:flex;flex-wrap:wrap;gap:.25rem;padding:.5rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:.375rem}.toolbar-group[data-v-99382129]{display:flex;gap:2px;padding-right:.5rem;margin-right:.25rem;border-right:1px solid #e5e7eb}.toolbar-group[data-v-99382129]:last-child{border-right:none;padding-right:0;margin-right:0}.toolbar-btn[data-v-99382129]{min-width:28px!important;height:28px!important;padding:0 4px!important;border:1px solid transparent!important;border-radius:.25rem!important}.toolbar-btn[data-v-99382129]:hover{background-color:#e5e7eb!important}.is-active[data-v-99382129]{background-color:#fff3e0!important;border-color:#ec9c1d!important;color:#c45e00!important}.toolbar-group--inputs[data-v-99382129]{align-items:center;gap:.25rem}.toolbar-input[data-v-99382129]{max-width:70px}\n";})();
import { EVENT_ACTIONS_REGISTRY as ct, EVENT_REGISTRY_ID as dt, EVENT_ACTIONS_REGISTRY_ID as vt } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as pt, deactivate as ht, component as yt, inject as ke } from "@eclipse-daanse/tsm";
import { defineComponent as ze, mergeModels as gt, useCssVars as wt, useModel as Ge, computed as Ee, toRefs as _t, inject as te, onMounted as mt, onUnmounted as bt, ref as ce, watch as Ve, createElementBlock as Ct, openBlock as He, normalizeStyle as xt, withModifiers as Tt, createElementVNode as $, toDisplayString as Mt, resolveComponent as X, createBlock as Ot, withCtx as ee, createVNode as I, unref as se, normalizeClass as G } from "vue";
import { useRoute as St } from "vue-router";
import { VariableComplexStringWrapper as It, VariableWrapper as U, useDatasourceRepository as kt, WrapperTypes as Et } from "org.eclipse.daanse.board.app.ui.vue.composables";
import We from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { Reference as L, ModelClass as Vt } from "org.eclipse.daanse.board.app.lib.annotations";
import { WidgetAction as Be, WidgetActionInterface as Pt, Payload as fe } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as Rt } from "org.eclipse.daanse.board.app.lib.api.variable";
import { ComplexTextInput as At, VariableInput as Pe } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Dt } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Wt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), jt = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var zt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, H = (m, g, l, v) => {
  for (var s = v > 1 ? void 0 : v ? Gt(g, l) : g, w = m.length - 1, d; w >= 0; w--)
    (d = m[w]) && (s = (v ? d(g, l, s) : d(s)) || s);
  return v && s && zt(g, l, s), s;
};
let P = class {
  text = new It();
  fontSize = new U();
  fontColor = new U();
  fontWeight = new U();
  fontStyle = new U();
  textDecoration = new U();
  horizontalAlign = new U();
  verticalAlign = new U();
};
H([
  L("VariableComplexStringWrapper")
], P.prototype, "text", 2);
H([
  L("VariableWrapper")
], P.prototype, "fontSize", 2);
H([
  L("VariableWrapper")
], P.prototype, "fontColor", 2);
H([
  L("VariableWrapper")
], P.prototype, "fontWeight", 2);
H([
  L("VariableWrapper")
], P.prototype, "fontStyle", 2);
H([
  L("VariableWrapper")
], P.prototype, "textDecoration", 2);
H([
  L("VariableWrapper")
], P.prototype, "horizontalAlign", 2);
H([
  L("VariableWrapper")
], P.prototype, "verticalAlign", 2);
P = H([
  Vt({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.text.plain#//TextSettings" })
], P);
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ae = {};
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
var De;
function Ht() {
  if (De) return Ae;
  De = 1;
  var m;
  return (function(g) {
    (function(l) {
      var v = typeof globalThis == "object" ? globalThis : typeof Re == "object" ? Re : typeof self == "object" ? self : typeof this == "object" ? this : B(), s = w(g);
      typeof v.Reflect < "u" && (s = w(v.Reflect, s)), l(s, v), typeof v.Reflect > "u" && (v.Reflect = g);
      function w(R, S) {
        return function(V, y) {
          Object.defineProperty(R, V, { configurable: !0, writable: !0, value: y }), S && S(V, y);
        };
      }
      function d() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function D() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function B() {
        return d() || D();
      }
    })(function(l, v) {
      var s = Object.prototype.hasOwnProperty, w = typeof Symbol == "function", d = w && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", D = w && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", B = typeof Object.create == "function", R = { __proto__: [] } instanceof Array, S = !B && !R, V = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: B ? function() {
          return ue(/* @__PURE__ */ Object.create(null));
        } : R ? function() {
          return ue({ __proto__: null });
        } : function() {
          return ue({});
        },
        has: S ? function(e, t) {
          return s.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: S ? function(e, t) {
          return s.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, y = Object.getPrototypeOf(Function), E = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ot(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : lt(), N = typeof WeakMap == "function" ? WeakMap : ut(), j = w ? Symbol.for("@reflect-metadata:registry") : void 0, F = rt(), Z = at(F);
      function ae(e, t, n, r) {
        if (c(n)) {
          if (!be(e))
            throw new TypeError();
          if (!Ce(t))
            throw new TypeError();
          return Ye(e, t);
        } else {
          if (!be(e))
            throw new TypeError();
          if (!M(t))
            throw new TypeError();
          if (!M(r) && !c(r) && !Y(r))
            throw new TypeError();
          return Y(r) && (r = void 0), n = A(n), Je(e, t, n, r);
        }
      }
      l("decorate", ae);
      function T(e, t) {
        function n(r, f) {
          if (!M(r))
            throw new TypeError();
          if (!c(f) && !tt(f))
            throw new TypeError();
          ye(e, t, r, f);
        }
        return n;
      }
      l("metadata", T);
      function k(e, t, n, r) {
        if (!M(n))
          throw new TypeError();
        return c(r) || (r = A(r)), ye(e, t, n, r);
      }
      l("defineMetadata", k);
      function z(e, t, n) {
        if (!M(t))
          throw new TypeError();
        return c(n) || (n = A(n)), ve(e, t, n);
      }
      l("hasMetadata", z);
      function q(e, t, n) {
        if (!M(t))
          throw new TypeError();
        return c(n) || (n = A(n)), ie(e, t, n);
      }
      l("hasOwnMetadata", q);
      function Ue(e, t, n) {
        if (!M(t))
          throw new TypeError();
        return c(n) || (n = A(n)), pe(e, t, n);
      }
      l("getMetadata", Ue);
      function Ne(e, t, n) {
        if (!M(t))
          throw new TypeError();
        return c(n) || (n = A(n)), he(e, t, n);
      }
      l("getOwnMetadata", Ne);
      function Fe(e, t) {
        if (!M(e))
          throw new TypeError();
        return c(t) || (t = A(t)), ge(e, t);
      }
      l("getMetadataKeys", Fe);
      function Ze(e, t) {
        if (!M(e))
          throw new TypeError();
        return c(t) || (t = A(t)), we(e, t);
      }
      l("getOwnMetadataKeys", Ze);
      function qe(e, t, n) {
        if (!M(t))
          throw new TypeError();
        if (c(n) || (n = A(n)), !M(t))
          throw new TypeError();
        c(n) || (n = A(n));
        var r = Q(
          t,
          n,
          /*Create*/
          !1
        );
        return c(r) ? !1 : r.OrdinaryDeleteMetadata(e, t, n);
      }
      l("deleteMetadata", qe);
      function Ye(e, t) {
        for (var n = e.length - 1; n >= 0; --n) {
          var r = e[n], f = r(t);
          if (!c(f) && !Y(f)) {
            if (!Ce(f))
              throw new TypeError();
            t = f;
          }
        }
        return t;
      }
      function Je(e, t, n, r) {
        for (var f = e.length - 1; f >= 0; --f) {
          var b = e[f], O = b(t, n, r);
          if (!c(O) && !Y(O)) {
            if (!M(O))
              throw new TypeError();
            r = O;
          }
        }
        return r;
      }
      function ve(e, t, n) {
        var r = ie(e, t, n);
        if (r)
          return !0;
        var f = le(t);
        return Y(f) ? !1 : ve(e, f, n);
      }
      function ie(e, t, n) {
        var r = Q(
          t,
          n,
          /*Create*/
          !1
        );
        return c(r) ? !1 : me(r.OrdinaryHasOwnMetadata(e, t, n));
      }
      function pe(e, t, n) {
        var r = ie(e, t, n);
        if (r)
          return he(e, t, n);
        var f = le(t);
        if (!Y(f))
          return pe(e, f, n);
      }
      function he(e, t, n) {
        var r = Q(
          t,
          n,
          /*Create*/
          !1
        );
        if (!c(r))
          return r.OrdinaryGetOwnMetadata(e, t, n);
      }
      function ye(e, t, n, r) {
        var f = Q(
          n,
          r,
          /*Create*/
          !0
        );
        f.OrdinaryDefineOwnMetadata(e, t, n, r);
      }
      function ge(e, t) {
        var n = we(e, t), r = le(e);
        if (r === null)
          return n;
        var f = ge(r, t);
        if (f.length <= 0)
          return n;
        if (n.length <= 0)
          return f;
        for (var b = new x(), O = [], p = 0, a = n; p < a.length; p++) {
          var i = a[p], o = b.has(i);
          o || (b.add(i), O.push(i));
        }
        for (var u = 0, h = f; u < h.length; u++) {
          var i = h[u], o = b.has(i);
          o || (b.add(i), O.push(i));
        }
        return O;
      }
      function we(e, t) {
        var n = Q(
          e,
          t,
          /*create*/
          !1
        );
        return n ? n.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function _e(e) {
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
      function c(e) {
        return e === void 0;
      }
      function Y(e) {
        return e === null;
      }
      function Qe(e) {
        return typeof e == "symbol";
      }
      function M(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function Xe(e, t) {
        switch (_e(e)) {
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
        var n = "string", r = xe(e, d);
        if (r !== void 0) {
          var f = r.call(e, n);
          if (M(f))
            throw new TypeError();
          return f;
        }
        return Ke(e);
      }
      function Ke(e, t) {
        var n, r, f;
        {
          var b = e.toString;
          if (K(b)) {
            var r = b.call(e);
            if (!M(r))
              return r;
          }
          var n = e.valueOf;
          if (K(n)) {
            var r = n.call(e);
            if (!M(r))
              return r;
          }
        }
        throw new TypeError();
      }
      function me(e) {
        return !!e;
      }
      function et(e) {
        return "" + e;
      }
      function A(e) {
        var t = Xe(e);
        return Qe(t) ? t : et(t);
      }
      function be(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function K(e) {
        return typeof e == "function";
      }
      function Ce(e) {
        return typeof e == "function";
      }
      function tt(e) {
        switch (_e(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function oe(e, t) {
        return e === t || e !== e && t !== t;
      }
      function xe(e, t) {
        var n = e[t];
        if (n != null) {
          if (!K(n))
            throw new TypeError();
          return n;
        }
      }
      function Te(e) {
        var t = xe(e, D);
        if (!K(t))
          throw new TypeError();
        var n = t.call(e);
        if (!M(n))
          throw new TypeError();
        return n;
      }
      function Me(e) {
        return e.value;
      }
      function Oe(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function Se(e) {
        var t = e.return;
        t && t.call(e);
      }
      function le(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === y || t !== y)
          return t;
        var n = e.prototype, r = n && Object.getPrototypeOf(n);
        if (r == null || r === Object.prototype)
          return t;
        var f = r.constructor;
        return typeof f != "function" || f === e ? t : f;
      }
      function nt() {
        var e;
        !c(j) && typeof v.Reflect < "u" && !(j in v.Reflect) && typeof v.Reflect.defineMetadata == "function" && (e = it(v.Reflect));
        var t, n, r, f = new N(), b = {
          registerProvider: O,
          getProvider: a,
          setProvider: o
        };
        return b;
        function O(u) {
          if (!Object.isExtensible(b))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === u:
              break;
            case c(t):
              t = u;
              break;
            case t === u:
              break;
            case c(n):
              n = u;
              break;
            case n === u:
              break;
            default:
              r === void 0 && (r = new x()), r.add(u);
              break;
          }
        }
        function p(u, h) {
          if (!c(t)) {
            if (t.isProviderFor(u, h))
              return t;
            if (!c(n)) {
              if (n.isProviderFor(u, h))
                return t;
              if (!c(r))
                for (var _ = Te(r); ; ) {
                  var C = Oe(_);
                  if (!C)
                    return;
                  var W = Me(C);
                  if (W.isProviderFor(u, h))
                    return Se(_), W;
                }
            }
          }
          if (!c(e) && e.isProviderFor(u, h))
            return e;
        }
        function a(u, h) {
          var _ = f.get(u), C;
          return c(_) || (C = _.get(h)), c(C) && (C = p(u, h), c(C) || (c(_) && (_ = new E(), f.set(u, _)), _.set(h, C))), C;
        }
        function i(u) {
          if (c(u))
            throw new TypeError();
          return t === u || n === u || !c(r) && r.has(u);
        }
        function o(u, h, _) {
          if (!i(_))
            throw new Error("Metadata provider not registered.");
          var C = a(u, h);
          if (C !== _) {
            if (!c(C))
              return !1;
            var W = f.get(u);
            c(W) && (W = new E(), f.set(u, W)), W.set(h, _);
          }
          return !0;
        }
      }
      function rt() {
        var e;
        return !c(j) && M(v.Reflect) && Object.isExtensible(v.Reflect) && (e = v.Reflect[j]), c(e) && (e = nt()), !c(j) && M(v.Reflect) && Object.isExtensible(v.Reflect) && Object.defineProperty(v.Reflect, j, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function at(e) {
        var t = new N(), n = {
          isProviderFor: function(i, o) {
            var u = t.get(i);
            return c(u) ? !1 : u.has(o);
          },
          OrdinaryDefineOwnMetadata: O,
          OrdinaryHasOwnMetadata: f,
          OrdinaryGetOwnMetadata: b,
          OrdinaryOwnMetadataKeys: p,
          OrdinaryDeleteMetadata: a
        };
        return F.registerProvider(n), n;
        function r(i, o, u) {
          var h = t.get(i), _ = !1;
          if (c(h)) {
            if (!u)
              return;
            h = new E(), t.set(i, h), _ = !0;
          }
          var C = h.get(o);
          if (c(C)) {
            if (!u)
              return;
            if (C = new E(), h.set(o, C), !e.setProvider(i, o, n))
              throw h.delete(o), _ && t.delete(i), new Error("Wrong provider for target.");
          }
          return C;
        }
        function f(i, o, u) {
          var h = r(
            o,
            u,
            /*Create*/
            !1
          );
          return c(h) ? !1 : me(h.has(i));
        }
        function b(i, o, u) {
          var h = r(
            o,
            u,
            /*Create*/
            !1
          );
          if (!c(h))
            return h.get(i);
        }
        function O(i, o, u, h) {
          var _ = r(
            u,
            h,
            /*Create*/
            !0
          );
          _.set(i, o);
        }
        function p(i, o) {
          var u = [], h = r(
            i,
            o,
            /*Create*/
            !1
          );
          if (c(h))
            return u;
          for (var _ = h.keys(), C = Te(_), W = 0; ; ) {
            var Ie = Oe(C);
            if (!Ie)
              return u.length = W, u;
            var st = Me(Ie);
            try {
              u[W] = st;
            } catch (ft) {
              try {
                Se(C);
              } finally {
                throw ft;
              }
            }
            W++;
          }
        }
        function a(i, o, u) {
          var h = r(
            o,
            u,
            /*Create*/
            !1
          );
          if (c(h) || !h.delete(i))
            return !1;
          if (h.size === 0) {
            var _ = t.get(o);
            c(_) || (_.delete(u), _.size === 0 && t.delete(_));
          }
          return !0;
        }
      }
      function it(e) {
        var t = e.defineMetadata, n = e.hasOwnMetadata, r = e.getOwnMetadata, f = e.getOwnMetadataKeys, b = e.deleteMetadata, O = new N(), p = {
          isProviderFor: function(a, i) {
            var o = O.get(a);
            return !c(o) && o.has(i) ? !0 : f(a, i).length ? (c(o) && (o = new x(), O.set(a, o)), o.add(i), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: n,
          OrdinaryGetOwnMetadata: r,
          OrdinaryOwnMetadataKeys: f,
          OrdinaryDeleteMetadata: b
        };
        return p;
      }
      function Q(e, t, n) {
        var r = F.getProvider(e, t);
        if (!c(r))
          return r;
        if (n) {
          if (F.setProvider(e, t, Z))
            return Z;
          throw new Error("Illegal state.");
        }
      }
      function ot() {
        var e = {}, t = [], n = (
          /** @class */
          (function() {
            function p(a, i, o) {
              this._index = 0, this._keys = a, this._values = i, this._selector = o;
            }
            return p.prototype["@@iterator"] = function() {
              return this;
            }, p.prototype[D] = function() {
              return this;
            }, p.prototype.next = function() {
              var a = this._index;
              if (a >= 0 && a < this._keys.length) {
                var i = this._selector(this._keys[a], this._values[a]);
                return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, p.prototype.throw = function(a) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
            }, p.prototype.return = function(a) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
            }, p;
          })()
        ), r = (
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
            }), p.prototype.has = function(a) {
              return this._find(
                a,
                /*insert*/
                !1
              ) >= 0;
            }, p.prototype.get = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              return i >= 0 ? this._values[i] : void 0;
            }, p.prototype.set = function(a, i) {
              var o = this._find(
                a,
                /*insert*/
                !0
              );
              return this._values[o] = i, this;
            }, p.prototype.delete = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              if (i >= 0) {
                for (var o = this._keys.length, u = i + 1; u < o; u++)
                  this._keys[u - 1] = this._keys[u], this._values[u - 1] = this._values[u];
                return this._keys.length--, this._values.length--, oe(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, p.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, p.prototype.keys = function() {
              return new n(this._keys, this._values, f);
            }, p.prototype.values = function() {
              return new n(this._keys, this._values, b);
            }, p.prototype.entries = function() {
              return new n(this._keys, this._values, O);
            }, p.prototype["@@iterator"] = function() {
              return this.entries();
            }, p.prototype[D] = function() {
              return this.entries();
            }, p.prototype._find = function(a, i) {
              if (!oe(this._cacheKey, a)) {
                this._cacheIndex = -1;
                for (var o = 0; o < this._keys.length; o++)
                  if (oe(this._keys[o], a)) {
                    this._cacheIndex = o;
                    break;
                  }
              }
              return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
            }, p;
          })()
        );
        return r;
        function f(p, a) {
          return p;
        }
        function b(p, a) {
          return a;
        }
        function O(p, a) {
          return [p, a];
        }
      }
      function lt() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new E();
            }
            return Object.defineProperty(t.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.has = function(n) {
              return this._map.has(n);
            }, t.prototype.add = function(n) {
              return this._map.set(n, n), this;
            }, t.prototype.delete = function(n) {
              return this._map.delete(n);
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
            }, t.prototype[D] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function ut() {
        var e = 16, t = V.create(), n = r();
        return (
          /** @class */
          (function() {
            function a() {
              this._key = r();
            }
            return a.prototype.has = function(i) {
              var o = f(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? V.has(o, this._key) : !1;
            }, a.prototype.get = function(i) {
              var o = f(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? V.get(o, this._key) : void 0;
            }, a.prototype.set = function(i, o) {
              var u = f(
                i,
                /*create*/
                !0
              );
              return u[this._key] = o, this;
            }, a.prototype.delete = function(i) {
              var o = f(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? delete o[this._key] : !1;
            }, a.prototype.clear = function() {
              this._key = r();
            }, a;
          })()
        );
        function r() {
          var a;
          do
            a = "@@WeakMap@@" + p();
          while (V.has(t, a));
          return t[a] = !0, a;
        }
        function f(a, i) {
          if (!s.call(a, n)) {
            if (!i)
              return;
            Object.defineProperty(a, n, { value: V.create() });
          }
          return a[n];
        }
        function b(a, i) {
          for (var o = 0; o < i; ++o)
            a[o] = Math.random() * 255 | 0;
          return a;
        }
        function O(a) {
          if (typeof Uint8Array == "function") {
            var i = new Uint8Array(a);
            return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : b(i, a), i;
          }
          return b(new Array(a), a);
        }
        function p() {
          var a = O(e);
          a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
          for (var i = "", o = 0; o < e; ++o) {
            var u = a[o];
            (o === 4 || o === 6 || o === 8) && (i += "-"), u < 16 && (i += "0"), i += u.toString(16).toLowerCase();
          }
          return i;
        }
      }
      function ue(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(m || (m = {})), Ae;
}
Ht();
var Bt = Object.defineProperty, $t = Object.getOwnPropertyDescriptor, $e = (m, g, l, v) => {
  for (var s = $t(g, l), w = m.length - 1, d; w >= 0; w--)
    (d = m[w]) && (s = d(g, l, s) || s);
  return s && Bt(g, l, s), s;
};
class re extends Pt {
  clearContent() {
    throw new Error("clearContent not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
$e([
  Be({ eventType: "text.clearContent" })
], re.prototype, "clearContent");
$e([
  Be({ eventType: "text.copyContent" })
], re.prototype, "copyContent");
const Lt = { class: "component" }, Ut = /* @__PURE__ */ ze({
  __name: "TextWidget",
  props: /* @__PURE__ */ gt({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(m, { expose: g }) {
    wt((T) => ({
      a48f8840: ae.value,
      v34b31368: x.value.fontColor.value,
      v2c3809b9: x.value.horizontalAlign.value,
      v0788cc15: x.value.fontWeight.value,
      ccf41bcc: x.value.fontStyle.value,
      v1f06182b: x.value.textDecoration.value
    }));
    const l = m, { datasourceId: v, id: s } = _t(l), w = te(Wt.TINY_EMITTER), d = te(ct), B = St().params.pageid || "";
    class R extends re {
      clearContent() {
        x.value?.text && (x.value.text.value = "");
      }
      copyContent() {
        const k = Z.value || "";
        navigator.clipboard?.writeText(k).catch(() => {
        });
      }
    }
    const S = new R();
    g(S), mt(() => {
      s?.value && d.registerInstance(s.value, S, "TextWidget", B);
    }), bt(() => {
      s?.value && d.unregisterInstance(s.value);
    });
    const V = () => {
      s?.value && w.emit("widget:TextWidget:click", {
        type: "widget:TextWidget:click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, y = () => {
      s?.value && w.emit("widget:TextWidget:right_click", {
        type: "widget:TextWidget:right_click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, E = (T) => {
      s?.value && w.emit("widget:TextWidget:text_change", {
        type: "widget:TextWidget:text_change",
        widgetId: s.value,
        payload: { widgetId: s.value, text: T, timestamp: Date.now() }
      });
    }, x = Ge(m, "configv"), N = {
      text: "Some text",
      fontSize: 12,
      fontColor: "#000",
      fontWeight: "normal",
      fontStyle: "normal",
      textDecoration: "none",
      horizontalAlign: "Left",
      verticalAlign: "Top"
    }, j = ce(null), { update: F } = kt(v, "object", j);
    Object.keys(N).forEach((T) => {
      if (x.value[T] === void 0 || x.value[T] === null) {
        const k = Reflect.getMetadata("Reference", P.prototype, T), z = Et[k], q = N[T];
        x.value[T] = new z(q);
      }
    }), Ve(v, (T, k) => {
      F(T, k);
    });
    const Z = Ee(() => {
      if (!x.value.text.value)
        return "";
      const { parts: T } = We.widget.extractValuesAndFullObject(x.value.text.value);
      let k = "";
      for (const z of T)
        if (z.path || z.path === null) {
          const q = We.widget.getValueByPath(j.value, z.path);
          k += q !== void 0 ? JSON.stringify(q) : z.text;
        } else
          k += z.text;
      return k;
    }), ae = Ee(() => (x.value?.fontSize?.value || 12) + "px");
    return Ve(Z, (T, k) => {
      T !== k && E(T);
    }), (T, k) => (He(), Ct("div", {
      class: "text-container",
      onClick: V,
      onContextmenu: Tt(y, ["prevent"]),
      style: xt({
        "justify-content": x.value.verticalAlign?.value === "Top" ? "flex-start" : x.value.verticalAlign?.value === "Center" ? "center" : "flex-end"
      })
    }, [
      $("div", Lt, Mt(Z.value), 1)
    ], 36));
  }
}), Le = (m, g) => {
  const l = m.__vccOpts || m;
  for (const [v, s] of g)
    l[v] = s;
  return l;
}, Nt = /* @__PURE__ */ Le(Ut, [["__scopeId", "data-v-7f505d2d"]]), Ft = { class: "settings-container" }, Zt = { class: "settings-block" }, qt = { class: "toolbar" }, Yt = { class: "toolbar-group toolbar-group--inputs" }, Jt = { class: "toolbar-group" }, Qt = { class: "toolbar-group" }, Xt = { class: "toolbar-group" }, Kt = /* @__PURE__ */ ze({
  __name: "TextWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(m) {
    ce({});
    const g = ce({
      widgetSection: !1,
      storeSection: !1
    }), l = Ge(m, "modelValue");
    console.log(l), te(Rt);
    const v = te("i18n"), s = (w) => v ? v.t(w) : w;
    return (w, d) => {
      const D = X("VaInput"), B = X("va-input"), R = X("va-color-input"), S = X("VaButton"), V = X("va-collapse");
      return He(), Ot(V, {
        modelValue: g.value.widgetSection,
        "onUpdate:modelValue": d[12] || (d[12] = (y) => g.value.widgetSection = y),
        icon: "settings",
        header: s("textBase:TextWidget.title")
      }, {
        default: ee(() => [
          $("div", Ft, [
            $("div", Zt, [
              I(se(At), {
                modelValue: l.value.text,
                "onUpdate:modelValue": d[0] || (d[0] = (y) => l.value.text = y)
              }, {
                default: ee(({ value: y, change: E }) => [
                  I(D, {
                    modelValue: y,
                    onInput: E,
                    label: s("textBase:TextWidget.label"),
                    placeholder: "Enter text with variables...",
                    class: "w-full"
                  }, null, 8, ["modelValue", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            $("div", qt, [
              $("div", Yt, [
                I(se(Pe), {
                  modelValue: l.value.fontSize,
                  "onUpdate:modelValue": d[1] || (d[1] = (y) => l.value.fontSize = y),
                  label: s("textBase:TextWidget.fontSize")
                }, {
                  default: ee(({ value: y, change: E }) => [
                    I(B, {
                      "model-value": y,
                      onInput: E,
                      placeholder: "Size",
                      class: "toolbar-input"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "label"]),
                I(se(Pe), {
                  modelValue: l.value.fontColor,
                  "onUpdate:modelValue": d[2] || (d[2] = (y) => l.value.fontColor = y),
                  label: s("textBase:TextWidget.fontColor")
                }, {
                  default: ee(({ value: y, change: E }) => [
                    I(R, {
                      "model-value": y,
                      onInput: E,
                      class: "toolbar-input"
                    }, null, 8, ["model-value", "onInput"])
                  ]),
                  _: 1
                }, 8, ["modelValue", "label"])
              ]),
              $("div", Jt, [
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.fontWeight.value === "bold" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_bold",
                  onClick: d[3] || (d[3] = (y) => l.value.fontWeight.value = l.value.fontWeight.value === "bold" ? "normal" : "bold"),
                  title: "Bold"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.fontStyle.value === "italic" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_italic",
                  onClick: d[4] || (d[4] = (y) => l.value.fontStyle.value = l.value.fontStyle.value === "italic" ? "normal" : "italic"),
                  title: "Italic"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.textDecoration.value === "underline" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_underlined",
                  onClick: d[5] || (d[5] = (y) => l.value.textDecoration.value = l.value.textDecoration.value === "underline" ? "None" : "underline"),
                  title: "Underline"
                }, null, 8, ["class"])
              ]),
              $("div", Qt, [
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.horizontalAlign.value === "Left" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_left",
                  onClick: d[6] || (d[6] = (y) => l.value.horizontalAlign.value = "Left"),
                  title: "Left"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.horizontalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_center",
                  onClick: d[7] || (d[7] = (y) => l.value.horizontalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.horizontalAlign.value === "Right" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "format_align_right",
                  onClick: d[8] || (d[8] = (y) => l.value.horizontalAlign.value = "Right"),
                  title: "Right"
                }, null, 8, ["class"])
              ]),
              $("div", Xt, [
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.verticalAlign.value === "Top" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_top",
                  onClick: d[9] || (d[9] = (y) => l.value.verticalAlign.value = "Top"),
                  title: "Top"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.verticalAlign.value === "Center" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_center",
                  onClick: d[10] || (d[10] = (y) => l.value.verticalAlign.value = "Center"),
                  title: "Center"
                }, null, 8, ["class"]),
                I(S, {
                  class: G(["toolbar-btn", { "is-active": l.value.verticalAlign.value === "Bottom" }]),
                  size: "small",
                  preset: "secondary",
                  icon: "vertical_align_bottom",
                  onClick: d[11] || (d[11] = (y) => l.value.verticalAlign.value = "Bottom"),
                  title: "Bottom"
                }, null, 8, ["class"])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), en = /* @__PURE__ */ Le(Kt, [["__scopeId", "data-v-99382129"]]), tn = [
  { name: "Text Clicked", type: "click", description: "Triggered when the text widget is clicked", payloadType: fe },
  { name: "Text Right Clicked", type: "right_click", description: "Triggered when the text widget is right-clicked", payloadType: fe },
  { name: "Text Changed", type: "text_change", description: "Triggered when the text changes", payloadType: fe }
];
var nn = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, de = (m, g, l, v) => {
  for (var s = v > 1 ? void 0 : v ? rn(g, l) : g, w = m.length - 1, d; w >= 0; w--)
    (d = m[w]) && (s = (v ? d(g, l, s) : d(s)) || s);
  return v && s && nn(g, l, s), s;
}, je = (m, g) => (l, v) => g(l, v, m);
const J = "TextWidget";
let ne = class {
  constructor(m, g) {
    this.events = m, this.actions = g;
  }
  type = J;
  component = Nt;
  settingsComponent = en;
  supportedDSTypes = [];
  icon = jt;
  name = "Text";
  register() {
    this.events.registerWidget(J, tn), this.actions.registerWidgetType(J, re, "widget");
  }
  unregister() {
    this.events.unregisterWidget(J), this.actions.unregisterWidgetType(J);
  }
};
de([
  pt()
], ne.prototype, "register", 1);
de([
  ht()
], ne.prototype, "unregister", 1);
ne = de([
  yt({
    service: [Dt],
    properties: { "widget.type": J }
  }),
  je(0, ke(dt)),
  je(1, ke(vt))
], ne);
export {
  Nt as TextWidget,
  ne as TextWidgetProvider,
  en as TextWidgetSettings
};
