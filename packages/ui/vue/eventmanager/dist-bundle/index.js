(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".event-manager-ui[data-v-ee120456]{padding:1.5rem;margin-left:75px;width:100%;min-height:100vh;background:var(--color-backgroundPrimary, #f6f6f6)}.header-section[data-v-ee120456]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem}.page-title[data-v-ee120456]{font-size:1.75rem;font-weight:600;color:#262824;margin:0}.ice[data-v-ee120456]{background:#f7f3f3d9;border-radius:16px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.space-y-4[data-v-ee120456]>*+*{margin-top:1rem}.space-y-2[data-v-ee120456]>*+*{margin-top:.5rem}.space-y-3[data-v-ee120456]>*+*{margin-top:.75rem}.card-section[data-v-ee120456]{background:#fff9;border-radius:12px;backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border:1px solid rgba(213,213,213,.3)}[data-v-ee120456] .card-section.va-card,[data-v-ee120456] .card-section .va-card__inner{box-shadow:none!important}.section-title[data-v-ee120456]{font-size:1rem;font-weight:500;color:#262824}.condition-row[data-v-ee120456]{display:flex;gap:.5rem;align-items:center}.parameter-wrapper[data-v-ee120456]{padding:1rem;background:#fffc;border-radius:8px;border:1px solid rgba(213,213,213,.4);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.parameter-header[data-v-ee120456]{margin-bottom:.75rem}.parameter-info[data-v-ee120456]{font-family:Monaco,Courier New,monospace;font-size:.9rem}.parameter-optional[data-v-ee120456]{color:#666}.parameter-separator[data-v-ee120456]{margin:0 .25rem;color:#666}.parameter-type[data-v-ee120456]{color:teal;font-weight:500}[data-v-ee120456] .va-modal__overlay{opacity:1!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:#cccccc8c!important}[data-v-ee120456] .va-modal{z-index:3000000!important}[data-v-ee120456] .va-modal__inner{background:#f7f3f3d9!important;border-radius:16px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}[data-v-ee120456] .va-modal__dialog,[data-v-ee120456] .va-modal__container{background:transparent!important}.table-header[data-v-ee120456]{display:flex;width:100%;padding:1rem;border-bottom:1px solid rgba(213,213,213,.4);background:#fff6;font-weight:500;font-size:.875rem;color:#262824}.header-cell[data-v-ee120456]{padding:0 .5rem;text-align:left}.table-content[data-v-ee120456]{background:#fff}[data-v-ee120456] .table-content .va-data-table{background:transparent}[data-v-ee120456] .table-content .va-data-table__table{background:#fff}.event-mapping-grid[data-v-ee120456]{display:grid;grid-template-columns:200px 120px 150px 120px 180px 150px 80px}[data-v-ee120456] .va-data-table__table-thead{background:#f9fafb;font-size:.75rem;font-weight:500;color:#6b7280;text-transform:uppercase;letter-spacing:.05em}.table-wrapper[data-v-ee120456]{height:calc(100vh - 130px);background:#fff}.actions-list[data-v-ee120456]{display:flex;flex-direction:column;gap:.25rem}.action-item[data-v-ee120456]{display:flex;align-items:center;gap:.25rem;font-size:.875rem}.mapping-id[data-v-ee120456]{font-size:.8rem;color:#374151;font-family:Monaco,Courier New,monospace;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.uid-badge[data-v-ee120456]{display:inline-block;font-size:.75rem;font-family:Monaco,Courier New,monospace;color:#1e40af;background-color:#dbeafe;padding:.1rem .4rem;border-radius:.25rem;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;margin-left:.25rem}.action-context[data-v-ee120456]{color:#6b7280;font-size:.8rem}.action-separator[data-v-ee120456]{color:#9ca3af}.actions-tabs[data-v-ee120456]{display:flex;flex-direction:column;gap:1rem}.action-tabs-header[data-v-ee120456]{display:flex;flex-wrap:wrap;gap:.5rem;padding-bottom:.75rem;border-bottom:1px solid rgba(213,213,213,.4)}.action-tab[data-v-ee120456]{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;background:#fff9;border:1px solid rgba(213,213,213,.4);border-radius:8px;cursor:pointer;transition:all .2s ease;font-size:.875rem}.action-tab[data-v-ee120456]:hover{background:#ffffffe6;border-color:#cd91004d}.action-tab.active[data-v-ee120456]{background:#0066cc1a;border-color:#cc9100;color:#cc9100}.action-tab-label[data-v-ee120456]{max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.action-tab-remove[data-v-ee120456]{margin-left:.25rem}.action-editor[data-v-ee120456]{padding:1rem;background:#fff6;border-radius:8px;border:1px solid rgba(213,213,213,.3)}.event-source-grid[data-v-ee120456],.actions-list-editor[data-v-ee120456]{display:flex;flex-direction:column;gap:.75rem}.action-card[data-v-ee120456]{border-radius:8px;cursor:pointer;transition:all .2s ease;box-shadow:1px 1px 5px #cccccc69}.action-card[data-v-ee120456]:hover,.action-card.active[data-v-ee120456]{border-color:#9595954d}.action-card-header[data-v-ee120456]{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem}.action-number[data-v-ee120456]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;font-size:.75rem;font-weight:600;flex-shrink:0;border:1px solid #cc9100;color:#cc9100}.action-summary[data-v-ee120456]{flex:1;display:flex;align-items:center;gap:.5rem;min-width:0}.action-context-badge[data-v-ee120456]{padding:.125rem .5rem;background:#e5e7eb;color:#4b5563;border-radius:4px;font-size:.7rem;font-weight:500;text-transform:uppercase;flex-shrink:0}.action-name-text[data-v-ee120456]{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.action-empty[data-v-ee120456]{color:#9ca3af;font-style:italic}.action-card-body[data-v-ee120456]{padding:0 1rem 1rem;border-top:1px solid rgba(213,213,213,.3);margin-top:0}.action-settings-row[data-v-ee120456]{display:grid;grid-template-columns:1fr 1fr 2fr;gap:.75rem;padding-top:.75rem}.context-select[data-v-ee120456]{min-width:100px}.target-select[data-v-ee120456]{min-width:120px}.action-select[data-v-ee120456]{min-width:180px}.action-parameters[data-v-ee120456]{margin-top:1rem;padding-top:.75rem;border-top:1px dashed rgba(213,213,213,.5)}.parameters-title[data-v-ee120456]{font-size:.75rem;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem}.parameters-list[data-v-ee120456]{display:flex;flex-direction:column;gap:.5rem}.parameter-item[data-v-ee120456]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem}.parameter-label[data-v-ee120456]{display:flex;align-items:center;gap:.25rem;font-size:.8rem}.parameter-label .parameter-name[data-v-ee120456]{font-weight:600}.parameter-label .parameter-optional[data-v-ee120456]{color:#9ca3af}.parameter-type-badge[data-v-ee120456]{margin-left:.25rem;padding:.0625rem .375rem;border-radius:3px;font-size:.65rem;font-weight:500;border:1px solid #ddd}.parameter-input-row[data-v-ee120456]{display:flex;align-items:center;gap:.5rem}.source-toggle[data-v-ee120456]{display:flex;border:1px solid rgba(213,213,213,.5);border-radius:4px;overflow:hidden;flex-shrink:0}.toggle-btn[data-v-ee120456]{padding:.25rem .5rem;font-size:.7rem;background:#fff;border:none;cursor:pointer;transition:all .15s ease;color:#6b7280}.toggle-btn[data-v-ee120456]:first-child{border-right:1px solid rgba(213,213,213,.5)}.toggle-btn[data-v-ee120456]:hover{background:#f3f4f6}.toggle-btn.active[data-v-ee120456]{background:#6767676e;color:#fff}.parameter-value-input[data-v-ee120456]{flex:1;min-width:150px}\n";})();
import { defineComponent as st, ref as L, computed as Ee, inject as ze, onMounted as ut, resolveComponent as ne, createElementBlock as k, openBlock as h, createElementVNode as y, createVNode as m, withCtx as w, createTextVNode as ae, toDisplayString as D, Fragment as ce, renderList as fe, createCommentVNode as z, createBlock as q, normalizeClass as _e, withModifiers as xe } from "vue";
import { EVENT_MANAGER as dt, EVENT_REGISTRY as ct, EVENT_ACTIONS_REGISTRY as ft } from "org.eclipse.daanse.board.app.lib.api.events";
import { Comperator as be, Condition as vt } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as pt } from "org.eclipse.daanse.board.app.lib.api.page";
import { NAVIGATION_REGISTRY_ID as et, NavigationItem as yt } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as tt, RouteDefinition as gt } from "org.eclipse.daanse.board.app.lib.api.route";
var Je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qe = {};
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
var Xe;
function mt() {
  if (Xe) return Qe;
  Xe = 1;
  var G;
  return (function(F) {
    (function(I) {
      var E = typeof globalThis == "object" ? globalThis : typeof Je == "object" ? Je : typeof self == "object" ? self : typeof this == "object" ? this : Z(), O = ee(F);
      typeof E.Reflect < "u" && (O = ee(E.Reflect, O)), I(O, E), typeof E.Reflect > "u" && (E.Reflect = F);
      function ee(J, X) {
        return function(W, j) {
          Object.defineProperty(J, W, { configurable: !0, writable: !0, value: j }), X && X(W, j);
        };
      }
      function ue() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function Y() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function Z() {
        return ue() || Y();
      }
    })(function(I, E) {
      var O = Object.prototype.hasOwnProperty, ee = typeof Symbol == "function", ue = ee && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", Y = ee && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", Z = typeof Object.create == "function", J = { __proto__: [] } instanceof Array, X = !Z && !J, W = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: Z ? function() {
          return He(/* @__PURE__ */ Object.create(null));
        } : J ? function() {
          return He({ __proto__: null });
        } : function() {
          return He({});
        },
        has: X ? function(e, t) {
          return O.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: X ? function(e, t) {
          return O.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, j = Object.getPrototypeOf(Function), d = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : V(), oe = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : s(), ve = typeof WeakMap == "function" ? WeakMap : B(), le = ee ? Symbol.for("@reflect-metadata:registry") : void 0, N = se(), we = Ie(N);
      function Ae(e, t, n, i) {
        if (p(n)) {
          if (!De(e))
            throw new TypeError();
          if (!Ge(t))
            throw new TypeError();
          return Pe(e, t);
        } else {
          if (!De(e))
            throw new TypeError();
          if (!A(t))
            throw new TypeError();
          if (!A(i) && !p(i) && !$(i))
            throw new TypeError();
          return $(i) && (i = void 0), n = H(n), Ue(e, t, n, i);
        }
      }
      I("decorate", Ae);
      function Oe(e, t) {
        function n(i, g) {
          if (!A(i))
            throw new TypeError();
          if (!p(g) && !Be(g))
            throw new TypeError();
          Ne(e, t, i, g);
        }
        return n;
      }
      I("metadata", Oe);
      function Me(e, t, n, i) {
        if (!A(n))
          throw new TypeError();
        return p(i) || (i = H(i)), Ne(e, t, n, i);
      }
      I("defineMetadata", Me);
      function Fe(e, t, n) {
        if (!A(t))
          throw new TypeError();
        return p(n) || (n = H(n)), Re(e, t, n);
      }
      I("hasMetadata", Fe);
      function We(e, t, n) {
        if (!A(t))
          throw new TypeError();
        return p(n) || (n = H(n)), te(e, t, n);
      }
      I("hasOwnMetadata", We);
      function qe(e, t, n) {
        if (!A(t))
          throw new TypeError();
        return p(n) || (n = H(n)), re(e, t, n);
      }
      I("getMetadata", qe);
      function pe(e, t, n) {
        if (!A(t))
          throw new TypeError();
        return p(n) || (n = H(n)), Se(e, t, n);
      }
      I("getOwnMetadata", pe);
      function ke(e, t) {
        if (!A(e))
          throw new TypeError();
        return p(t) || (t = H(t)), ge(e, t);
      }
      I("getMetadataKeys", ke);
      function ye(e, t) {
        if (!A(e))
          throw new TypeError();
        return p(t) || (t = H(t)), Ve(e, t);
      }
      I("getOwnMetadataKeys", ye);
      function de(e, t, n) {
        if (!A(t))
          throw new TypeError();
        if (p(n) || (n = H(n)), !A(t))
          throw new TypeError();
        p(n) || (n = H(n));
        var i = o(
          t,
          n,
          /*Create*/
          !1
        );
        return p(i) ? !1 : i.OrdinaryDeleteMetadata(e, t, n);
      }
      I("deleteMetadata", de);
      function Pe(e, t) {
        for (var n = e.length - 1; n >= 0; --n) {
          var i = e[n], g = i(t);
          if (!p(g) && !$(g)) {
            if (!Ge(g))
              throw new TypeError();
            t = g;
          }
        }
        return t;
      }
      function Ue(e, t, n, i) {
        for (var g = e.length - 1; g >= 0; --g) {
          var P = e[g], S = P(t, n, i);
          if (!p(S) && !$(S)) {
            if (!A(S))
              throw new TypeError();
            i = S;
          }
        }
        return i;
      }
      function Re(e, t, n) {
        var i = te(e, t, n);
        if (i)
          return !0;
        var g = R(t);
        return $(g) ? !1 : Re(e, g, n);
      }
      function te(e, t, n) {
        var i = o(
          t,
          n,
          /*Create*/
          !1
        );
        return p(i) ? !1 : Te(i.OrdinaryHasOwnMetadata(e, t, n));
      }
      function re(e, t, n) {
        var i = te(e, t, n);
        if (i)
          return Se(e, t, n);
        var g = R(t);
        if (!$(g))
          return re(e, g, n);
      }
      function Se(e, t, n) {
        var i = o(
          t,
          n,
          /*Create*/
          !1
        );
        if (!p(i))
          return i.OrdinaryGetOwnMetadata(e, t, n);
      }
      function Ne(e, t, n, i) {
        var g = o(
          n,
          i,
          /*Create*/
          !0
        );
        g.OrdinaryDefineOwnMetadata(e, t, n, i);
      }
      function ge(e, t) {
        var n = Ve(e, t), i = R(e);
        if (i === null)
          return n;
        var g = ge(i, t);
        if (g.length <= 0)
          return n;
        if (n.length <= 0)
          return g;
        for (var P = new oe(), S = [], _ = 0, u = n; _ < u.length; _++) {
          var c = u[_], f = P.has(c);
          f || (P.add(c), S.push(c));
        }
        for (var v = 0, x = g; v < x.length; v++) {
          var c = x[v], f = P.has(c);
          f || (P.add(c), S.push(c));
        }
        return S;
      }
      function Ve(e, t) {
        var n = o(
          e,
          t,
          /*create*/
          !1
        );
        return n ? n.OrdinaryOwnMetadataKeys(e, t) : [];
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
      function p(e) {
        return e === void 0;
      }
      function $(e) {
        return e === null;
      }
      function je(e) {
        return typeof e == "symbol";
      }
      function A(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function ie(e, t) {
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
        var n = "string", i = a(e, ue);
        if (i !== void 0) {
          var g = i.call(e, n);
          if (A(g))
            throw new TypeError();
          return g;
        }
        return me(e);
      }
      function me(e, t) {
        var n, i, g;
        {
          var P = e.toString;
          if (he(P)) {
            var i = P.call(e);
            if (!A(i))
              return i;
          }
          var n = e.valueOf;
          if (he(n)) {
            var i = n.call(e);
            if (!A(i))
              return i;
          }
        }
        throw new TypeError();
      }
      function Te(e) {
        return !!e;
      }
      function $e(e) {
        return "" + e;
      }
      function H(e) {
        var t = ie(e);
        return je(t) ? t : $e(t);
      }
      function De(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function he(e) {
        return typeof e == "function";
      }
      function Ge(e) {
        return typeof e == "function";
      }
      function Be(e) {
        switch (Ce(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function r(e, t) {
        return e === t || e !== e && t !== t;
      }
      function a(e, t) {
        var n = e[t];
        if (n != null) {
          if (!he(n))
            throw new TypeError();
          return n;
        }
      }
      function l(e) {
        var t = a(e, Y);
        if (!he(t))
          throw new TypeError();
        var n = t.call(e);
        if (!A(n))
          throw new TypeError();
        return n;
      }
      function b(e) {
        return e.value;
      }
      function C(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function M(e) {
        var t = e.return;
        t && t.call(e);
      }
      function R(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === j || t !== j)
          return t;
        var n = e.prototype, i = n && Object.getPrototypeOf(n);
        if (i == null || i === Object.prototype)
          return t;
        var g = i.constructor;
        return typeof g != "function" || g === e ? t : g;
      }
      function K() {
        var e;
        !p(le) && typeof E.Reflect < "u" && !(le in E.Reflect) && typeof E.Reflect.defineMetadata == "function" && (e = Le(E.Reflect));
        var t, n, i, g = new ve(), P = {
          registerProvider: S,
          getProvider: u,
          setProvider: f
        };
        return P;
        function S(v) {
          if (!Object.isExtensible(P))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === v:
              break;
            case p(t):
              t = v;
              break;
            case t === v:
              break;
            case p(n):
              n = v;
              break;
            case n === v:
              break;
            default:
              i === void 0 && (i = new oe()), i.add(v);
              break;
          }
        }
        function _(v, x) {
          if (!p(t)) {
            if (t.isProviderFor(v, x))
              return t;
            if (!p(n)) {
              if (n.isProviderFor(v, x))
                return t;
              if (!p(i))
                for (var T = l(i); ; ) {
                  var U = C(T);
                  if (!U)
                    return;
                  var Q = b(U);
                  if (Q.isProviderFor(v, x))
                    return M(T), Q;
                }
            }
          }
          if (!p(e) && e.isProviderFor(v, x))
            return e;
        }
        function u(v, x) {
          var T = g.get(v), U;
          return p(T) || (U = T.get(x)), p(U) && (U = _(v, x), p(U) || (p(T) && (T = new d(), g.set(v, T)), T.set(x, U))), U;
        }
        function c(v) {
          if (p(v))
            throw new TypeError();
          return t === v || n === v || !p(i) && i.has(v);
        }
        function f(v, x, T) {
          if (!c(T))
            throw new Error("Metadata provider not registered.");
          var U = u(v, x);
          if (U !== T) {
            if (!p(U))
              return !1;
            var Q = g.get(v);
            p(Q) && (Q = new d(), g.set(v, Q)), Q.set(x, T);
          }
          return !0;
        }
      }
      function se() {
        var e;
        return !p(le) && A(E.Reflect) && Object.isExtensible(E.Reflect) && (e = E.Reflect[le]), p(e) && (e = K()), !p(le) && A(E.Reflect) && Object.isExtensible(E.Reflect) && Object.defineProperty(E.Reflect, le, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function Ie(e) {
        var t = new ve(), n = {
          isProviderFor: function(c, f) {
            var v = t.get(c);
            return p(v) ? !1 : v.has(f);
          },
          OrdinaryDefineOwnMetadata: S,
          OrdinaryHasOwnMetadata: g,
          OrdinaryGetOwnMetadata: P,
          OrdinaryOwnMetadataKeys: _,
          OrdinaryDeleteMetadata: u
        };
        return N.registerProvider(n), n;
        function i(c, f, v) {
          var x = t.get(c), T = !1;
          if (p(x)) {
            if (!v)
              return;
            x = new d(), t.set(c, x), T = !0;
          }
          var U = x.get(f);
          if (p(U)) {
            if (!v)
              return;
            if (U = new d(), x.set(f, U), !e.setProvider(c, f, n))
              throw x.delete(f), T && t.delete(c), new Error("Wrong provider for target.");
          }
          return U;
        }
        function g(c, f, v) {
          var x = i(
            f,
            v,
            /*Create*/
            !1
          );
          return p(x) ? !1 : Te(x.has(c));
        }
        function P(c, f, v) {
          var x = i(
            f,
            v,
            /*Create*/
            !1
          );
          if (!p(x))
            return x.get(c);
        }
        function S(c, f, v, x) {
          var T = i(
            v,
            x,
            /*Create*/
            !0
          );
          T.set(c, f);
        }
        function _(c, f) {
          var v = [], x = i(
            c,
            f,
            /*Create*/
            !1
          );
          if (p(x))
            return v;
          for (var T = x.keys(), U = l(T), Q = 0; ; ) {
            var Ze = C(U);
            if (!Ze)
              return v.length = Q, v;
            var rt = b(Ze);
            try {
              v[Q] = rt;
            } catch (it) {
              try {
                M(U);
              } finally {
                throw it;
              }
            }
            Q++;
          }
        }
        function u(c, f, v) {
          var x = i(
            f,
            v,
            /*Create*/
            !1
          );
          if (p(x) || !x.delete(c))
            return !1;
          if (x.size === 0) {
            var T = t.get(f);
            p(T) || (T.delete(v), T.size === 0 && t.delete(T));
          }
          return !0;
        }
      }
      function Le(e) {
        var t = e.defineMetadata, n = e.hasOwnMetadata, i = e.getOwnMetadata, g = e.getOwnMetadataKeys, P = e.deleteMetadata, S = new ve(), _ = {
          isProviderFor: function(u, c) {
            var f = S.get(u);
            return !p(f) && f.has(c) ? !0 : g(u, c).length ? (p(f) && (f = new oe(), S.set(u, f)), f.add(c), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: n,
          OrdinaryGetOwnMetadata: i,
          OrdinaryOwnMetadataKeys: g,
          OrdinaryDeleteMetadata: P
        };
        return _;
      }
      function o(e, t, n) {
        var i = N.getProvider(e, t);
        if (!p(i))
          return i;
        if (n) {
          if (N.setProvider(e, t, we))
            return we;
          throw new Error("Illegal state.");
        }
      }
      function V() {
        var e = {}, t = [], n = (
          /** @class */
          (function() {
            function _(u, c, f) {
              this._index = 0, this._keys = u, this._values = c, this._selector = f;
            }
            return _.prototype["@@iterator"] = function() {
              return this;
            }, _.prototype[Y] = function() {
              return this;
            }, _.prototype.next = function() {
              var u = this._index;
              if (u >= 0 && u < this._keys.length) {
                var c = this._selector(this._keys[u], this._values[u]);
                return u + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: c, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, _.prototype.throw = function(u) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), u;
            }, _.prototype.return = function(u) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: u, done: !0 };
            }, _;
          })()
        ), i = (
          /** @class */
          (function() {
            function _() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(_.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), _.prototype.has = function(u) {
              return this._find(
                u,
                /*insert*/
                !1
              ) >= 0;
            }, _.prototype.get = function(u) {
              var c = this._find(
                u,
                /*insert*/
                !1
              );
              return c >= 0 ? this._values[c] : void 0;
            }, _.prototype.set = function(u, c) {
              var f = this._find(
                u,
                /*insert*/
                !0
              );
              return this._values[f] = c, this;
            }, _.prototype.delete = function(u) {
              var c = this._find(
                u,
                /*insert*/
                !1
              );
              if (c >= 0) {
                for (var f = this._keys.length, v = c + 1; v < f; v++)
                  this._keys[v - 1] = this._keys[v], this._values[v - 1] = this._values[v];
                return this._keys.length--, this._values.length--, r(u, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, _.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, _.prototype.keys = function() {
              return new n(this._keys, this._values, g);
            }, _.prototype.values = function() {
              return new n(this._keys, this._values, P);
            }, _.prototype.entries = function() {
              return new n(this._keys, this._values, S);
            }, _.prototype["@@iterator"] = function() {
              return this.entries();
            }, _.prototype[Y] = function() {
              return this.entries();
            }, _.prototype._find = function(u, c) {
              if (!r(this._cacheKey, u)) {
                this._cacheIndex = -1;
                for (var f = 0; f < this._keys.length; f++)
                  if (r(this._keys[f], u)) {
                    this._cacheIndex = f;
                    break;
                  }
              }
              return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(u), this._values.push(void 0)), this._cacheIndex;
            }, _;
          })()
        );
        return i;
        function g(_, u) {
          return _;
        }
        function P(_, u) {
          return u;
        }
        function S(_, u) {
          return [_, u];
        }
      }
      function s() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new d();
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
            }, t.prototype[Y] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function B() {
        var e = 16, t = W.create(), n = i();
        return (
          /** @class */
          (function() {
            function u() {
              this._key = i();
            }
            return u.prototype.has = function(c) {
              var f = g(
                c,
                /*create*/
                !1
              );
              return f !== void 0 ? W.has(f, this._key) : !1;
            }, u.prototype.get = function(c) {
              var f = g(
                c,
                /*create*/
                !1
              );
              return f !== void 0 ? W.get(f, this._key) : void 0;
            }, u.prototype.set = function(c, f) {
              var v = g(
                c,
                /*create*/
                !0
              );
              return v[this._key] = f, this;
            }, u.prototype.delete = function(c) {
              var f = g(
                c,
                /*create*/
                !1
              );
              return f !== void 0 ? delete f[this._key] : !1;
            }, u.prototype.clear = function() {
              this._key = i();
            }, u;
          })()
        );
        function i() {
          var u;
          do
            u = "@@WeakMap@@" + _();
          while (W.has(t, u));
          return t[u] = !0, u;
        }
        function g(u, c) {
          if (!O.call(u, n)) {
            if (!c)
              return;
            Object.defineProperty(u, n, { value: W.create() });
          }
          return u[n];
        }
        function P(u, c) {
          for (var f = 0; f < c; ++f)
            u[f] = Math.random() * 255 | 0;
          return u;
        }
        function S(u) {
          if (typeof Uint8Array == "function") {
            var c = new Uint8Array(u);
            return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, u), c;
          }
          return P(new Array(u), u);
        }
        function _() {
          var u = S(e);
          u[6] = u[6] & 79 | 64, u[8] = u[8] & 191 | 128;
          for (var c = "", f = 0; f < e; ++f) {
            var v = u[f];
            (f === 4 || f === 6 || f === 8) && (c += "-"), v < 16 && (c += "0"), c += v.toString(16).toLowerCase();
          }
          return c;
        }
      }
      function He(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(G || (G = {})), Qe;
}
mt();
const ht = { class: "event-manager-ui" }, _t = { class: "header-section" }, xt = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full table-wrapper" }, bt = { class: "w-full overflow-auto flex flex-col bg-white" }, wt = ["title"], Mt = ["title"], kt = { class: "actions-list" }, Vt = { class: "action-context" }, Ct = ["title"], Tt = { class: "action-name" }, It = { class: "text-xs" }, Et = { class: "flex gap-2" }, At = { class: "space-y-4" }, Ot = { class: "event-source-grid" }, Pt = {
  key: 0,
  class: "space-y-2"
}, Ut = {
  key: 1,
  class: "text-gray-500 italic text-sm"
}, Rt = {
  key: 0,
  class: "actions-list-editor"
}, St = ["onClick"], Nt = { class: "action-card-header" }, jt = { class: "action-number" }, $t = { class: "action-summary" }, Dt = { class: "action-context-badge" }, Gt = {
  key: 0,
  class: "action-name-text"
}, zt = {
  key: 1,
  class: "action-empty"
}, Ft = {
  key: 0,
  class: "action-card-body"
}, Wt = { class: "action-settings-row" }, qt = {
  key: 0,
  class: "action-parameters"
}, Bt = { class: "parameters-list" }, Lt = { class: "parameter-label" }, Ht = { class: "parameter-name" }, Yt = {
  key: 0,
  class: "parameter-optional"
}, Zt = { class: "parameter-type-badge" }, Jt = { class: "parameter-input-row" }, Qt = { class: "source-toggle" }, Xt = ["onClick"], Kt = ["onClick"], en = { class: "space-y-4" }, tn = { class: "event-source-grid" }, nn = {
  key: 0,
  class: "space-y-2"
}, an = {
  key: 1,
  class: "text-gray-500 italic text-sm"
}, on = {
  key: 0,
  class: "actions-list-editor"
}, ln = ["onClick"], rn = { class: "action-card-header" }, sn = { class: "action-number" }, un = { class: "action-summary" }, dn = { class: "action-context-badge" }, cn = {
  key: 0,
  class: "action-name-text"
}, fn = {
  key: 1,
  class: "action-empty"
}, vn = {
  key: 0,
  class: "action-card-body"
}, pn = { class: "action-settings-row" }, yn = {
  key: 0,
  class: "action-parameters"
}, gn = { class: "parameters-list" }, mn = { class: "parameter-label" }, hn = { class: "parameter-name" }, _n = {
  key: 0,
  class: "parameter-optional"
}, xn = { class: "parameter-type-badge" }, bn = { class: "parameter-input-row" }, wn = { class: "source-toggle" }, Mn = ["onClick"], kn = ["onClick"], Vn = { style: { "text-align": "center", padding: "1rem" } }, Cn = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, Tn = /* @__PURE__ */ st({
  __name: "EventManagerUI",
  setup(G) {
    let F, I, E, O;
    const ee = L([]), ue = L([]), Y = L([]), Z = L([]), J = L(!1), X = L(!1), W = L(null), j = L(0), d = L({
      context: "widget",
      conditions: [],
      actions: [{
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }]
    }), oe = [
      { text: "System", value: "system" },
      { text: "Page", value: "page" },
      { text: "Widget", value: "widget" }
    ], ve = [
      { text: "==", value: be.eq },
      { text: "!=", value: be.neq },
      { text: "<", value: be.lt },
      { text: "<=", value: be.lte },
      { text: ">", value: be.gt },
      { text: ">=", value: be.gte }
    ], le = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "context", label: "Event Context", sortable: !0 },
      { key: "eventType", label: "Event Type", sortable: !0 },
      { key: "actionsCount", label: "Actions", sortable: !0 },
      { key: "conditions", label: "Conditions" },
      { key: "tableActions", label: "", width: 100 }
    ], N = Ee(() => !d.value.actions || d.value.actions.length === 0 ? null : d.value.actions[j.value]), we = () => {
      d.value.actions || (d.value.actions = []), d.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }), j.value = d.value.actions.length - 1, p.value.clear(), $.value.clear();
    }, Ae = (r) => {
      d.value.actions && (d.value.actions.splice(r, 1), j.value >= d.value.actions.length && (j.value = Math.max(0, d.value.actions.length - 1)), p.value.clear(), $.value.clear());
    }, Oe = (r) => {
      j.value = r, p.value.clear(), $.value.clear();
      const a = d.value.actions?.[r];
      a && (a.payloadMapping && a.payloadMapping.forEach((l) => {
        p.value.set(l.argIndex, "payload");
      }), a.actionArgs && a.actionArgs.forEach((l, b) => {
        l !== void 0 && !a.payloadMapping?.some((C) => C.argIndex === b) && (p.value.set(b, "manual"), $.value.set(b, String(l)));
      }));
    }, Me = () => {
      ee.value = F.getAllMappings();
    }, Fe = () => {
      ue.value = I.getAllEvents();
    }, We = () => {
      Y.value = E.getWidgetTypes(), console.log("📋 Loaded widget types:", Y.value);
    }, qe = () => {
      Z.value = O.getAllPageIds(), console.log("📄 Loaded pages:", Z.value);
    }, pe = Ee(() => {
      if (!d.value.eventType) return [];
      try {
        const r = I.extractPayloadPropertiesForEvent(d.value.eventType);
        return console.log("📦 Payload properties from Ecore model:", r), r.map((a) => ({
          text: `${a.name}: ${a.type}${a.optional ? "?" : ""}`,
          value: a.name
        }));
      } catch (r) {
        return console.error("❌ Error extracting properties from Ecore:", r), [];
      }
    }), ke = Ee(() => {
      if (!N.value?.targetContext) return [];
      const r = N.value.targetContext, a = [];
      for (const l of Y.value) {
        const b = l.context !== void 0, C = l.context || "widget";
        let M = !1;
        if (b ? M = C === r : M = r === "system" && l.widgetType.includes("System") || r === "page" && l.widgetType.includes("Page") || r === "widget" && !l.widgetType.includes("System") && !l.widgetType.includes("Page"), M)
          for (const R of l.actions) {
            const K = r === "widget" ? `${l.widgetType}.` : "";
            a.push({
              text: `${K}${R.methodName}`,
              value: R.methodName,
              parameters: R.parameters,
              widgetType: l.widgetType
            });
          }
      }
      return a;
    }), ye = Ee(() => {
      if (!N.value?.actionName) return [];
      const r = ke.value.find((l) => l.value === N.value?.actionName);
      if (!r?.widgetType) return [];
      const a = E?.getRegisteredInstances(r.widgetType) || [];
      return [
        { text: "All instances", value: "" },
        ...a.map((l) => ({
          text: `${l.instanceId} (${l.widgetType})`,
          value: l.instanceId
        }))
      ];
    }), de = Ee(() => {
      if (!N.value?.actionName || !N.value?.targetContext) return [];
      const r = N.value.targetContext, a = Y.value.filter((l) => {
        const b = l.context !== void 0, C = l.context || "widget";
        return b ? C === r : r === "system" && l.widgetType.includes("System") || r === "page" && l.widgetType.includes("Page") || r === "widget" && !l.widgetType.includes("System") && !l.widgetType.includes("Page");
      });
      for (const l of a) {
        const b = l.actions.find((C) => C.methodName === N.value?.actionName);
        if (console.log("🎯 Looking for action:", N.value?.actionName, "in", l.widgetType), console.log("   Found action:", b), b && b.parameters)
          return console.log("   Action parameters:", b.parameters), b.parameters.map((C, M) => {
            const R = C.match(/^(\w+)(\?)?:\s*(.+)$/);
            return console.log("   Parsing param:", C, "Match:", R), R ? {
              name: R[1],
              optional: !!R[2],
              type: R[3],
              index: M
            } : {
              name: `arg${M}`,
              optional: !1,
              type: "any",
              index: M
            };
          });
      }
      return [];
    }), Pe = (r) => r.actions && r.actions.length > 0 ? r.actions : r.actionName ? [{
      targetContext: r.targetContext,
      targetContextId: r.targetContextId,
      actionName: r.actionName,
      actionArgs: r.actionArgs,
      payloadMapping: r.payloadMapping
    }] : [], Ue = () => {
      if (!d.value.eventType)
        return;
      const r = d.value.actions?.filter((l) => l.actionName) || [];
      if (r.length === 0)
        return;
      const a = {
        id: W.value || `mapping-${Date.now()}`,
        context: d.value.context,
        contextId: d.value.contextId,
        eventType: d.value.eventType,
        conditions: d.value.conditions || [],
        actions: r
      };
      W.value && F.unregisterMapping(W.value), F.registerMapping(a), Me(), ge(), J.value = !1, X.value = !1, W.value = null;
    }, Re = (r) => {
      W.value = r.id;
      const a = Pe(r);
      d.value = {
        context: r.context,
        contextId: r.contextId,
        eventType: r.eventType,
        conditions: r.conditions || [],
        actions: a.length > 0 ? a : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, j.value = 0, p.value.clear(), $.value.clear();
      const l = d.value.actions?.[0];
      l && (l.payloadMapping && l.payloadMapping.forEach((b) => {
        p.value.set(b.argIndex, "payload");
      }), l.actionArgs && l.actionArgs.forEach((b, C) => {
        b !== void 0 && !l.payloadMapping?.some((M) => M.argIndex === C) && (p.value.set(C, "manual"), $.value.set(C, String(b)));
      })), X.value = !0;
    }, te = L(!1), re = L(null), Se = (r) => {
      re.value = r, te.value = !0;
    }, Ne = () => {
      re.value && (F.unregisterMapping(re.value), Me()), te.value = !1, re.value = null;
    }, ge = () => {
      d.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, W.value = null, j.value = 0, p.value.clear(), $.value.clear();
    }, Ve = () => {
      d.value.conditions || (d.value.conditions = []), d.value.conditions.push(new vt());
    }, Ce = (r) => {
      d.value.conditions?.splice(r, 1);
    }, p = L(/* @__PURE__ */ new Map()), $ = L(/* @__PURE__ */ new Map()), je = (r, a) => {
      const l = N.value;
      l && (l.payloadMapping || (l.payloadMapping = []), l.payloadMapping = l.payloadMapping.filter(
        (b) => b.argIndex !== r
      ), a && l.payloadMapping.push({
        payloadPath: a,
        argIndex: r
      }));
    }, A = (r, a) => {
      $.value.set(r, a);
      const l = N.value;
      if (!l) return;
      for (l.actionArgs || (l.actionArgs = []); l.actionArgs.length <= r; )
        l.actionArgs.push(void 0);
      const b = de.value.find((C) => C.index === r);
      b && (b.type === "number" || b.type.includes("number") ? l.actionArgs[r] = parseFloat(a) || 0 : b.type === "boolean" ? l.actionArgs[r] = a === "true" : l.actionArgs[r] = a);
    }, ie = (r) => p.value.get(r) || "payload", me = (r, a) => {
      p.value.set(r, a);
      const l = N.value;
      l && (a === "manual" ? l.payloadMapping && (l.payloadMapping = l.payloadMapping.filter(
        (b) => b.argIndex !== r
      )) : ($.value.delete(r), l.actionArgs && l.actionArgs[r] !== void 0 && (l.actionArgs[r] = void 0)));
    }, Te = (r) => {
      const a = N.value;
      return a?.payloadMapping && a.payloadMapping.find((b) => b.argIndex === r)?.payloadPath || "";
    }, $e = (r) => $.value.get(r) || "", H = (r) => !r || r.length === 0 ? "-" : r.map((a) => `${a.prop} ${a.comperator} ${a.value}`).join(" AND "), De = ze(dt), he = ze(ct), Ge = ze(ft), Be = ze(pt);
    return ut(() => {
      F = De, I = he, E = Ge, O = Be, Me(), Fe(), We(), qe();
    }), (r, a) => {
      const l = ne("VaButton"), b = ne("VaDataTable"), C = ne("VaCardTitle"), M = ne("VaSelect"), R = ne("VaInput"), K = ne("VaCardContent"), se = ne("VaCard"), Ie = ne("VaModal"), Le = ne("VaIcon");
      return h(), k("div", ht, [
        y("div", _t, [
          a[15] || (a[15] = y("h2", { class: "page-title" }, "Event Manager", -1)),
          m(l, {
            onClick: a[0] || (a[0] = (o) => J.value = !0),
            icon: "add"
          }, {
            default: w(() => [...a[14] || (a[14] = [
              ae("Add Mapping", -1)
            ])]),
            _: 1
          })
        ]),
        y("div", xt, [
          y("div", bt, [
            m(b, {
              items: ee.value,
              columns: le,
              hoverable: !0,
              class: "w-full"
            }, {
              "cell(id)": w(({ rowData: o }) => [
                y("span", {
                  class: "mapping-id",
                  title: o.id
                }, D(o.id), 9, wt)
              ]),
              "cell(context)": w(({ rowData: o }) => [
                y("span", null, D(o.context), 1),
                o.contextId ? (h(), k("span", {
                  key: 0,
                  class: "uid-badge",
                  title: o.contextId
                }, D(o.contextId), 9, Mt)) : z("", !0)
              ]),
              "cell(actionsCount)": w(({ rowData: o }) => [
                y("div", kt, [
                  (h(!0), k(ce, null, fe(Pe(o), (V, s) => (h(), k("div", {
                    key: s,
                    class: "action-item"
                  }, [
                    y("span", Vt, D(V.targetContext), 1),
                    V.targetContextId ? (h(), k("span", {
                      key: 0,
                      class: "uid-badge",
                      title: V.targetContextId
                    }, D(V.targetContextId), 9, Ct)) : z("", !0),
                    a[16] || (a[16] = y("span", { class: "action-separator" }, "→", -1)),
                    y("span", Tt, D(V.actionName), 1)
                  ]))), 128))
                ])
              ]),
              "cell(conditions)": w(({ rowData: o }) => [
                y("span", It, D(H(o.conditions)), 1)
              ]),
              "cell(tableActions)": w(({ rowData: o }) => [
                y("div", Et, [
                  m(l, {
                    onClick: (V) => Re(o),
                    preset: "plain",
                    icon: "edit",
                    size: "small"
                  }, null, 8, ["onClick"]),
                  m(l, {
                    onClick: (V) => Se(o.id),
                    preset: "plain",
                    icon: "delete",
                    color: "danger",
                    size: "small"
                  }, null, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["items"])
          ])
        ]),
        m(Ie, {
          modelValue: J.value,
          "onUpdate:modelValue": a[5] || (a[5] = (o) => J.value = o),
          title: "Add Event-Action Mapping",
          size: "large",
          class: "event-manager-ui_modal",
          onOk: Ue,
          onCancel: ge,
          "ok-text": "Add",
          "cancel-text": "Cancel"
        }, {
          default: w(() => [
            y("div", At, [
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "section-title" }, {
                    default: w(() => [...a[17] || (a[17] = [
                      ae("1. Event Source", -1)
                    ])]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      y("div", Ot, [
                        m(M, {
                          modelValue: d.value.context,
                          "onUpdate:modelValue": a[1] || (a[1] = (o) => d.value.context = o),
                          label: "Context",
                          options: oe,
                          "text-by": "text",
                          "value-by": "value"
                        }, null, 8, ["modelValue"]),
                        d.value.context === "page" ? (h(), q(M, {
                          key: 0,
                          modelValue: d.value.contextId,
                          "onUpdate:modelValue": a[2] || (a[2] = (o) => d.value.contextId = o),
                          label: "Page ID",
                          options: [{ text: "Any page", value: "" }, ...Z.value.map((o) => ({ text: o, value: o }))],
                          "text-by": "text",
                          "value-by": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "options"])) : d.value.context === "widget" ? (h(), q(R, {
                          key: 1,
                          modelValue: d.value.contextId,
                          "onUpdate:modelValue": a[3] || (a[3] = (o) => d.value.contextId = o),
                          label: "Widget ID (optional)",
                          placeholder: "e.g., specific widgetId",
                          clearable: ""
                        }, null, 8, ["modelValue"])) : z("", !0),
                        m(M, {
                          modelValue: d.value.eventType,
                          "onUpdate:modelValue": a[4] || (a[4] = (o) => d.value.eventType = o),
                          label: "Event Type",
                          options: ue.value,
                          "text-by": "type",
                          "value-by": "type"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "flex justify-between items-center" }, {
                    default: w(() => [
                      a[19] || (a[19] = y("span", { class: "section-title" }, "2. Conditions", -1)),
                      m(l, {
                        onClick: Ve,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: w(() => [...a[18] || (a[18] = [
                          ae("Add", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      d.value.conditions && d.value.conditions.length > 0 ? (h(), k("div", Pt, [
                        (h(!0), k(ce, null, fe(d.value.conditions, (o, V) => (h(), k("div", {
                          key: V,
                          class: "condition-row"
                        }, [
                          m(M, {
                            modelValue: o.prop,
                            "onUpdate:modelValue": (s) => o.prop = s,
                            placeholder: "Property",
                            options: pe.value,
                            "text-by": "text",
                            "value-by": "value",
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                          m(M, {
                            modelValue: o.comperator,
                            "onUpdate:modelValue": (s) => o.comperator = s,
                            options: ve,
                            "text-by": "text",
                            "value-by": "value",
                            class: "w-20"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          m(R, {
                            modelValue: o.value,
                            "onUpdate:modelValue": (s) => o.value = s,
                            placeholder: "Value",
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          m(l, {
                            onClick: (s) => Ce(V),
                            preset: "plain",
                            icon: "delete",
                            color: "danger",
                            size: "small"
                          }, null, 8, ["onClick"])
                        ]))), 128))
                      ])) : (h(), k("div", Ut, " No conditions - action will always execute "))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "flex justify-between items-center" }, {
                    default: w(() => [
                      a[21] || (a[21] = y("span", { class: "section-title" }, "3. Actions", -1)),
                      m(l, {
                        onClick: we,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: w(() => [...a[20] || (a[20] = [
                          ae("Add Action", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      d.value.actions && d.value.actions.length > 0 ? (h(), k("div", Rt, [
                        (h(!0), k(ce, null, fe(d.value.actions, (o, V) => (h(), k("div", {
                          key: V,
                          class: _e(["action-card", { active: j.value === V }]),
                          onClick: (s) => Oe(V)
                        }, [
                          y("div", Nt, [
                            y("span", jt, D(V + 1), 1),
                            y("span", $t, [
                              y("span", Dt, D(o.targetContext), 1),
                              o.actionName ? (h(), k("span", Gt, D(o.actionName), 1)) : (h(), k("span", zt, "(select action)"))
                            ]),
                            d.value.actions.length > 1 ? (h(), q(l, {
                              key: 0,
                              onClick: xe((s) => Ae(V), ["stop"]),
                              preset: "plain",
                              icon: "close",
                              color: "danger",
                              size: "small"
                            }, null, 8, ["onClick"])) : z("", !0)
                          ]),
                          j.value === V ? (h(), k("div", Ft, [
                            y("div", Wt, [
                              m(M, {
                                modelValue: o.targetContext,
                                "onUpdate:modelValue": (s) => o.targetContext = s,
                                label: "Context",
                                options: oe,
                                "text-by": "text",
                                "value-by": "value",
                                class: "context-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              o.targetContext === "page" ? (h(), q(M, {
                                key: 0,
                                modelValue: o.targetContextId,
                                "onUpdate:modelValue": (s) => o.targetContextId = s,
                                label: "Target Page",
                                options: [{ text: "Any", value: "" }, ...Z.value.map((s) => ({ text: s, value: s }))],
                                "text-by": "text",
                                "value-by": "value",
                                clearable: "",
                                class: "target-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : o.targetContext === "widget" || o.targetContext === "system" ? (h(), q(M, {
                                key: 1,
                                modelValue: o.targetContextId,
                                "onUpdate:modelValue": (s) => o.targetContextId = s,
                                label: "Target Instance",
                                options: ye.value,
                                "text-by": "text",
                                "value-by": "value",
                                clearable: "",
                                class: "target-select",
                                placeholder: ye.value.length > 1 ? "Select instance" : "All instances"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : z("", !0),
                              m(M, {
                                modelValue: o.actionName,
                                "onUpdate:modelValue": (s) => o.actionName = s,
                                label: "Action",
                                options: ke.value,
                                "text-by": "text",
                                "value-by": "value",
                                class: "action-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            de.value.length > 0 ? (h(), k("div", qt, [
                              a[22] || (a[22] = y("div", { class: "parameters-title" }, "Parameters", -1)),
                              y("div", Bt, [
                                (h(!0), k(ce, null, fe(de.value, (s) => (h(), k("div", {
                                  key: s.index,
                                  class: "parameter-item"
                                }, [
                                  y("div", Lt, [
                                    y("span", Ht, D(s.name), 1),
                                    s.optional ? (h(), k("span", Yt, "?")) : z("", !0),
                                    y("span", Zt, D(s.type), 1)
                                  ]),
                                  y("div", Jt, [
                                    y("div", Qt, [
                                      y("button", {
                                        class: _e(["toggle-btn", { active: ie(s.index) === "payload" }]),
                                        onClick: xe((B) => me(s.index, "payload"), ["stop"]),
                                        type: "button"
                                      }, "Payload", 10, Xt),
                                      y("button", {
                                        class: _e(["toggle-btn", { active: ie(s.index) === "manual" }]),
                                        onClick: xe((B) => me(s.index, "manual"), ["stop"]),
                                        type: "button"
                                      }, "Manual", 10, Kt)
                                    ]),
                                    ie(s.index) === "payload" ? (h(), q(M, {
                                      key: 0,
                                      "model-value": Te(s.index),
                                      "onUpdate:modelValue": (B) => je(s.index, B),
                                      placeholder: s.optional ? "(optional)" : "Select property",
                                      options: pe.value,
                                      "text-by": "text",
                                      "value-by": "value",
                                      clearable: "",
                                      class: "parameter-value-input"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (h(), q(R, {
                                      key: 1,
                                      "model-value": $e(s.index),
                                      "onUpdate:modelValue": (B) => A(s.index, B),
                                      placeholder: `Enter ${s.type}`,
                                      class: "parameter-value-input"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                                  ])
                                ]))), 128))
                              ])
                            ])) : z("", !0)
                          ])) : z("", !0)
                        ], 10, St))), 128))
                      ])) : z("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m(Ie, {
          modelValue: X.value,
          "onUpdate:modelValue": a[10] || (a[10] = (o) => X.value = o),
          title: "Edit Event-Action Mapping",
          size: "large",
          onOk: Ue,
          onCancel: ge,
          "ok-text": "Save",
          "cancel-text": "Cancel"
        }, {
          default: w(() => [
            y("div", en, [
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "section-title" }, {
                    default: w(() => [...a[23] || (a[23] = [
                      ae("1. Event Source", -1)
                    ])]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      y("div", tn, [
                        m(M, {
                          modelValue: d.value.context,
                          "onUpdate:modelValue": a[6] || (a[6] = (o) => d.value.context = o),
                          label: "Context",
                          options: oe,
                          "text-by": "text",
                          "value-by": "value"
                        }, null, 8, ["modelValue"]),
                        d.value.context === "page" ? (h(), q(M, {
                          key: 0,
                          modelValue: d.value.contextId,
                          "onUpdate:modelValue": a[7] || (a[7] = (o) => d.value.contextId = o),
                          label: "Page ID",
                          options: [{ text: "Any page", value: "" }, ...Z.value.map((o) => ({ text: o, value: o }))],
                          "text-by": "text",
                          "value-by": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "options"])) : d.value.context === "widget" ? (h(), q(R, {
                          key: 1,
                          modelValue: d.value.contextId,
                          "onUpdate:modelValue": a[8] || (a[8] = (o) => d.value.contextId = o),
                          label: "Widget ID (optional)",
                          placeholder: "e.g., specific widgetId",
                          clearable: ""
                        }, null, 8, ["modelValue"])) : z("", !0),
                        m(M, {
                          modelValue: d.value.eventType,
                          "onUpdate:modelValue": a[9] || (a[9] = (o) => d.value.eventType = o),
                          label: "Event Type",
                          options: ue.value,
                          "text-by": "type",
                          "value-by": "type"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "flex justify-between items-center" }, {
                    default: w(() => [
                      a[25] || (a[25] = y("span", { class: "section-title" }, "2. Conditions", -1)),
                      m(l, {
                        onClick: Ve,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: w(() => [...a[24] || (a[24] = [
                          ae("Add", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      d.value.conditions && d.value.conditions.length > 0 ? (h(), k("div", nn, [
                        (h(!0), k(ce, null, fe(d.value.conditions, (o, V) => (h(), k("div", {
                          key: V,
                          class: "condition-row"
                        }, [
                          m(M, {
                            modelValue: o.prop,
                            "onUpdate:modelValue": (s) => o.prop = s,
                            placeholder: "Property",
                            options: pe.value,
                            "text-by": "text",
                            "value-by": "value",
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                          m(M, {
                            modelValue: o.comperator,
                            "onUpdate:modelValue": (s) => o.comperator = s,
                            options: ve,
                            "text-by": "text",
                            "value-by": "value",
                            class: "w-20"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          m(R, {
                            modelValue: o.value,
                            "onUpdate:modelValue": (s) => o.value = s,
                            placeholder: "Value",
                            class: "flex-1"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          m(l, {
                            onClick: (s) => Ce(V),
                            preset: "plain",
                            icon: "delete",
                            color: "danger",
                            size: "small"
                          }, null, 8, ["onClick"])
                        ]))), 128))
                      ])) : (h(), k("div", an, " No conditions - action will always execute "))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              m(se, { class: "card-section" }, {
                default: w(() => [
                  m(C, { class: "flex justify-between items-center" }, {
                    default: w(() => [
                      a[27] || (a[27] = y("span", { class: "section-title" }, "3. Actions", -1)),
                      m(l, {
                        onClick: we,
                        size: "small",
                        icon: "add",
                        preset: "secondary"
                      }, {
                        default: w(() => [...a[26] || (a[26] = [
                          ae("Add Action", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  m(K, null, {
                    default: w(() => [
                      d.value.actions && d.value.actions.length > 0 ? (h(), k("div", on, [
                        (h(!0), k(ce, null, fe(d.value.actions, (o, V) => (h(), k("div", {
                          key: V,
                          class: _e(["action-card", { active: j.value === V }]),
                          onClick: (s) => Oe(V)
                        }, [
                          y("div", rn, [
                            y("span", sn, D(V + 1), 1),
                            y("span", un, [
                              y("span", dn, D(o.targetContext), 1),
                              o.actionName ? (h(), k("span", cn, D(o.actionName), 1)) : (h(), k("span", fn, "(select action)"))
                            ]),
                            d.value.actions.length > 1 ? (h(), q(l, {
                              key: 0,
                              onClick: xe((s) => Ae(V), ["stop"]),
                              preset: "plain",
                              icon: "close",
                              color: "danger",
                              size: "small"
                            }, null, 8, ["onClick"])) : z("", !0)
                          ]),
                          j.value === V ? (h(), k("div", vn, [
                            y("div", pn, [
                              m(M, {
                                modelValue: o.targetContext,
                                "onUpdate:modelValue": (s) => o.targetContext = s,
                                label: "Context",
                                options: oe,
                                "text-by": "text",
                                "value-by": "value",
                                class: "context-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              o.targetContext === "page" ? (h(), q(M, {
                                key: 0,
                                modelValue: o.targetContextId,
                                "onUpdate:modelValue": (s) => o.targetContextId = s,
                                label: "Target Page",
                                options: [{ text: "Any", value: "" }, ...Z.value.map((s) => ({ text: s, value: s }))],
                                "text-by": "text",
                                "value-by": "value",
                                clearable: "",
                                class: "target-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : o.targetContext === "widget" || o.targetContext === "system" ? (h(), q(M, {
                                key: 1,
                                modelValue: o.targetContextId,
                                "onUpdate:modelValue": (s) => o.targetContextId = s,
                                label: "Target Instance",
                                options: ye.value,
                                "text-by": "text",
                                "value-by": "value",
                                clearable: "",
                                class: "target-select",
                                placeholder: ye.value.length > 1 ? "Select instance" : "All instances"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : z("", !0),
                              m(M, {
                                modelValue: o.actionName,
                                "onUpdate:modelValue": (s) => o.actionName = s,
                                label: "Action",
                                options: ke.value,
                                "text-by": "text",
                                "value-by": "value",
                                class: "action-select"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                            ]),
                            de.value.length > 0 ? (h(), k("div", yn, [
                              a[28] || (a[28] = y("div", { class: "parameters-title" }, "Parameters", -1)),
                              y("div", gn, [
                                (h(!0), k(ce, null, fe(de.value, (s) => (h(), k("div", {
                                  key: s.index,
                                  class: "parameter-item"
                                }, [
                                  y("div", mn, [
                                    y("span", hn, D(s.name), 1),
                                    s.optional ? (h(), k("span", _n, "?")) : z("", !0),
                                    y("span", xn, D(s.type), 1)
                                  ]),
                                  y("div", bn, [
                                    y("div", wn, [
                                      y("button", {
                                        class: _e(["toggle-btn", { active: ie(s.index) === "payload" }]),
                                        onClick: xe((B) => me(s.index, "payload"), ["stop"]),
                                        type: "button"
                                      }, "Payload", 10, Mn),
                                      y("button", {
                                        class: _e(["toggle-btn", { active: ie(s.index) === "manual" }]),
                                        onClick: xe((B) => me(s.index, "manual"), ["stop"]),
                                        type: "button"
                                      }, "Manual", 10, kn)
                                    ]),
                                    ie(s.index) === "payload" ? (h(), q(M, {
                                      key: 0,
                                      "model-value": Te(s.index),
                                      "onUpdate:modelValue": (B) => je(s.index, B),
                                      placeholder: s.optional ? "(optional)" : "Select property",
                                      options: pe.value,
                                      "text-by": "text",
                                      "value-by": "value",
                                      clearable: "",
                                      class: "parameter-value-input"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (h(), q(R, {
                                      key: 1,
                                      "model-value": $e(s.index),
                                      "onUpdate:modelValue": (B) => A(s.index, B),
                                      placeholder: `Enter ${s.type}`,
                                      class: "parameter-value-input"
                                    }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                                  ])
                                ]))), 128))
                              ])
                            ])) : z("", !0)
                          ])) : z("", !0)
                        ], 10, ln))), 128))
                      ])) : z("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        m(Ie, {
          modelValue: te.value,
          "onUpdate:modelValue": a[13] || (a[13] = (o) => te.value = o),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: w(() => [
            y("div", Cn, [
              m(l, {
                preset: "secondary",
                onClick: a[11] || (a[11] = (o) => {
                  te.value = !1, re.value = null;
                })
              }, {
                default: w(() => [...a[31] || (a[31] = [
                  ae(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              m(l, {
                color: "danger",
                icon: "delete",
                onClick: a[12] || (a[12] = (o) => Ne())
              }, {
                default: w(() => [...a[32] || (a[32] = [
                  ae(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: w(() => [
            y("div", Vn, [
              m(Le, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              a[29] || (a[29] = y("h5", { style: { margin: "0.5rem 0" } }, "Event-Mapping löschen", -1)),
              a[30] || (a[30] = y("p", null, "Möchtest du dieses Event-Mapping wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
}), In = (G, F) => {
  const I = G.__vccOpts || G;
  for (const [E, O] of F)
    I[E] = O;
  return I;
}, nt = /* @__PURE__ */ In(Tn, [["__scopeId", "data-v-ee120456"]]), Ye = "events", at = "events";
function ot({ services: G }) {
  const F = G.getRequired(tt), I = new gt();
  I.path = "/events", I.name = Ye, I.component = nt, F.registerRoute(I);
  const E = G.getRequired(et), O = new yt();
  O.id = at, O.label = "Event Manager", O.icon = "event", O.route = "/events", O.routeName = Ye, O.order = 15, O.visible = !0, E.registerNavigationItem(O);
}
function lt({ services: G }) {
  G.getRequired(tt).unregisterRoute(Ye), G.getRequired(et).unregisterNavigationItem(at);
}
const En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI: nt,
  activate: ot,
  deactivate: lt
}, Symbol.toStringTag, { value: "Module" })), Ke = "org.eclipse.daanse.board.app.ui.vue.eventmanager", An = "0.0.1-next.1";
async function jn(G) {
  const F = globalThis.__tsm__;
  if (!F)
    throw new Error(`${Ke}: tsm runtime is not initialized`);
  F.register(Ke, En, An, "ui.vue.eventmanager"), await ot?.(G);
}
async function $n(G) {
  await lt?.(G);
}
export {
  nt as EventManagerUI,
  jn as activate,
  $n as deactivate
};
