(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".event-manager-ui[data-v-371363f0]{padding:1.5rem;margin-left:75px;width:100%;min-height:100vh;background:var(--color-backgroundPrimary, #f6f6f6)}.header-section[data-v-371363f0]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem}.page-title[data-v-371363f0]{font-size:1.75rem;font-weight:600;color:#262824;margin:0}.ice[data-v-371363f0]{background:#f7f3f3d9;border-radius:16px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.space-y-4[data-v-371363f0]>*+*{margin-top:1rem}.space-y-2[data-v-371363f0]>*+*{margin-top:.5rem}.space-y-3[data-v-371363f0]>*+*{margin-top:.75rem}.card-section[data-v-371363f0]{background:var(--color-pane);border:1px solid var(--color-divider);border-radius:var(--radius-md, 4px)}.card-section__head[data-v-371363f0]{display:flex;align-items:center;justify-content:space-between;width:100%}.section-title[data-v-371363f0]{margin:0;font-size:1rem;font-weight:500;color:var(--color-fg)}.confirm__title[data-v-371363f0]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-371363f0]{margin:0;color:var(--color-dim);line-height:1.5}.mappings[data-v-371363f0]{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.mappings th[data-v-371363f0]{position:sticky;top:0;z-index:1;padding:8px 10px;text-align:left;background:var(--color-raised);border-bottom:1px solid var(--color-divider);font-size:var(--text-xs);font-weight:500;color:var(--color-dim);text-transform:uppercase;letter-spacing:.05em;white-space:nowrap}.mappings td[data-v-371363f0]{padding:6px 10px;border-bottom:1px solid var(--color-divider);vertical-align:top}.mappings tbody tr[data-v-371363f0]:hover{background:var(--color-raised)}.mappings__actions[data-v-371363f0]{display:flex;gap:6px;justify-content:flex-end}.mappings__empty[data-v-371363f0]{padding:14px 10px;color:var(--color-dim)}.condition-row[data-v-371363f0]{display:flex;gap:.5rem;align-items:center}.parameter-wrapper[data-v-371363f0]{padding:1rem;background:#fffc;border-radius:8px;border:1px solid rgba(213,213,213,.4);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.parameter-header[data-v-371363f0]{margin-bottom:.75rem}.parameter-info[data-v-371363f0]{font-family:Monaco,Courier New,monospace;font-size:.9rem}.parameter-optional[data-v-371363f0]{color:#666}.parameter-separator[data-v-371363f0]{margin:0 .25rem;color:#666}.parameter-type[data-v-371363f0]{color:teal;font-weight:500}.table-header[data-v-371363f0]{display:flex;width:100%;padding:1rem;border-bottom:1px solid rgba(213,213,213,.4);background:#fff6;font-weight:500;font-size:.875rem;color:#262824}.header-cell[data-v-371363f0]{padding:0 .5rem;text-align:left}.table-content[data-v-371363f0]{background:#fff}.event-mapping-grid[data-v-371363f0]{display:grid;grid-template-columns:200px 120px 150px 120px 180px 150px 80px}.table-wrapper[data-v-371363f0]{height:calc(100vh - 130px);background:#fff}.actions-list[data-v-371363f0]{display:flex;flex-direction:column;gap:.25rem}.action-item[data-v-371363f0]{display:flex;align-items:center;gap:.25rem;font-size:.875rem}.mapping-id[data-v-371363f0]{font-size:.8rem;color:#374151;font-family:Monaco,Courier New,monospace;max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.uid-badge[data-v-371363f0]{display:inline-block;font-size:.75rem;font-family:Monaco,Courier New,monospace;color:#1e40af;background-color:#dbeafe;padding:.1rem .4rem;border-radius:.25rem;max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;margin-left:.25rem}.action-context[data-v-371363f0]{color:#6b7280;font-size:.8rem}.action-separator[data-v-371363f0]{color:#9ca3af}.actions-tabs[data-v-371363f0]{display:flex;flex-direction:column;gap:1rem}.action-tabs-header[data-v-371363f0]{display:flex;flex-wrap:wrap;gap:.5rem;padding-bottom:.75rem;border-bottom:1px solid rgba(213,213,213,.4)}.action-tab[data-v-371363f0]{display:flex;align-items:center;gap:.5rem;padding:.5rem .75rem;background:#fff9;border:1px solid rgba(213,213,213,.4);border-radius:8px;cursor:pointer;transition:all .2s ease;font-size:.875rem}.action-tab[data-v-371363f0]:hover{background:#ffffffe6;border-color:#cd91004d}.action-tab.active[data-v-371363f0]{background:#0066cc1a;border-color:#cc9100;color:#cc9100}.action-tab-label[data-v-371363f0]{max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.action-tab-remove[data-v-371363f0]{margin-left:.25rem}.action-editor[data-v-371363f0]{padding:1rem;background:#fff6;border-radius:8px;border:1px solid rgba(213,213,213,.3)}.event-source-grid[data-v-371363f0],.actions-list-editor[data-v-371363f0]{display:flex;flex-direction:column;gap:.75rem}.action-card[data-v-371363f0]{border-radius:8px;cursor:pointer;transition:all .2s ease;box-shadow:1px 1px 5px #cccccc69}.action-card[data-v-371363f0]:hover,.action-card.active[data-v-371363f0]{border-color:#9595954d}.action-card-header[data-v-371363f0]{display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem}.action-number[data-v-371363f0]{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;font-size:.75rem;font-weight:600;flex-shrink:0;border:1px solid #cc9100;color:#cc9100}.action-summary[data-v-371363f0]{flex:1;display:flex;align-items:center;gap:.5rem;min-width:0}.action-context-badge[data-v-371363f0]{padding:.125rem .5rem;background:#e5e7eb;color:#4b5563;border-radius:4px;font-size:.7rem;font-weight:500;text-transform:uppercase;flex-shrink:0}.action-name-text[data-v-371363f0]{font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.action-empty[data-v-371363f0]{color:#9ca3af;font-style:italic}.action-card-body[data-v-371363f0]{padding:0 1rem 1rem;border-top:1px solid rgba(213,213,213,.3);margin-top:0}.action-settings-row[data-v-371363f0]{display:flex;flex-direction:column;gap:.25rem;padding-top:.75rem}.action-parameters[data-v-371363f0]{margin-top:1rem;padding-top:.75rem;border-top:1px dashed rgba(213,213,213,.5)}.parameters-title[data-v-371363f0]{font-size:.75rem;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.5rem}.parameters-list[data-v-371363f0]{display:flex;flex-direction:column;gap:.5rem}.parameter-item[data-v-371363f0]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem}.parameter-label[data-v-371363f0]{display:flex;align-items:center;gap:.25rem;font-size:.8rem}.parameter-label .parameter-name[data-v-371363f0]{font-weight:600}.parameter-label .parameter-optional[data-v-371363f0]{color:#9ca3af}.parameter-type-badge[data-v-371363f0]{margin-left:.25rem;padding:.0625rem .375rem;border-radius:3px;font-size:.65rem;font-weight:500;border:1px solid #ddd}.parameter-input-row[data-v-371363f0]{display:flex;align-items:center;gap:.5rem}.source-toggle[data-v-371363f0]{display:flex;border:1px solid rgba(213,213,213,.5);border-radius:4px;overflow:hidden;flex-shrink:0}.toggle-btn[data-v-371363f0]{padding:.25rem .5rem;font-size:.7rem;background:#fff;border:none;cursor:pointer;transition:all .15s ease;color:#6b7280}.toggle-btn[data-v-371363f0]:first-child{border-right:1px solid rgba(213,213,213,.5)}.toggle-btn[data-v-371363f0]:hover{background:#f3f4f6}.toggle-btn.active[data-v-371363f0]{background:#6767676e;color:#fff}.parameter-value-input[data-v-371363f0]{flex:1;min-width:150px}\n";})();
import { defineComponent as pt, ref as B, computed as Ee, inject as Ge, onMounted as yt, createElementBlock as k, openBlock as g, createElementVNode as d, createVNode as m, unref as f, withCtx as b, createTextVNode as ee, Fragment as ae, renderList as oe, toDisplayString as S, createCommentVNode as $, createBlock as F, normalizeClass as he, withModifiers as _e } from "vue";
import { EVENT_MANAGER as gt, EVENT_REGISTRY as mt, EVENT_ACTIONS_REGISTRY as ht } from "org.eclipse.daanse.board.app.lib.api.events";
import { Comperator as we, Condition as _t } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as wt } from "org.eclipse.daanse.board.app.lib.api.page";
import { DButton as j, DIcon as Y, DModal as Ye, DCard as ke, DSelect as P, DInput as xe } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { NAVIGATION_REGISTRY_ID as tt, NavigationItem as kt } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as nt, RouteDefinition as xt } from "org.eclipse.daanse.board.app.lib.api.route";
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xe = {};
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
var Ke;
function bt() {
  if (Ke) return Xe;
  Ke = 1;
  var z;
  return (function(G) {
    (function(V) {
      var T = typeof globalThis == "object" ? globalThis : typeof Qe == "object" ? Qe : typeof self == "object" ? self : typeof this == "object" ? this : J(), E = te(G);
      typeof T.Reflect < "u" && (E = te(T.Reflect, E)), V(E, T), typeof T.Reflect > "u" && (T.Reflect = G);
      function te(L, Q) {
        return function(q, D) {
          Object.defineProperty(L, q, { configurable: !0, writable: !0, value: D }), Q && Q(q, D);
        };
      }
      function ue() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function Z() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function J() {
        return ue() || Z();
      }
    })(function(V, T) {
      var E = Object.prototype.hasOwnProperty, te = typeof Symbol == "function", ue = te && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", Z = te && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", J = typeof Object.create == "function", L = { __proto__: [] } instanceof Array, Q = !J && !L, q = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: J ? function() {
          return He(/* @__PURE__ */ Object.create(null));
        } : L ? function() {
          return He({ __proto__: null });
        } : function() {
          return He({});
        },
        has: Q ? function(e, n) {
          return E.call(e, n);
        } : function(e, n) {
          return n in e;
        },
        get: Q ? function(e, n) {
          return E.call(e, n) ? e[n] : void 0;
        } : function(e, n) {
          return e[n];
        }
      }, D = Object.getPrototypeOf(Function), u = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ut(), le = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : dt(), ve = typeof WeakMap == "function" ? WeakMap : ct(), ne = te ? Symbol.for("@reflect-metadata:registry") : void 0, U = Le(), be = it(U);
      function Ae(e, n, o, r) {
        if (h(o)) {
          if (!je(e))
            throw new TypeError();
          if (!ze(n))
            throw new TypeError();
          return Pe(e, n);
        } else {
          if (!je(e))
            throw new TypeError();
          if (!I(n))
            throw new TypeError();
          if (!I(r) && !h(r) && !N(r))
            throw new TypeError();
          return N(r) && (r = void 0), o = W(o), Re(e, n, o, r);
        }
      }
      V("decorate", Ae);
      function Oe(e, n) {
        function o(r, _) {
          if (!I(r))
            throw new TypeError();
          if (!h(_) && !Be(_))
            throw new TypeError();
          Ne(e, n, r, _);
        }
        return o;
      }
      V("metadata", Oe);
      function Me(e, n, o, r) {
        if (!I(o))
          throw new TypeError();
        return h(r) || (r = W(r)), Ne(e, n, o, r);
      }
      V("defineMetadata", Me);
      function qe(e, n, o) {
        if (!I(n))
          throw new TypeError();
        return h(o) || (o = W(o)), Se(e, n, o);
      }
      V("hasMetadata", qe);
      function Fe(e, n, o) {
        if (!I(n))
          throw new TypeError();
        return h(o) || (o = W(o)), re(e, n, o);
      }
      V("hasOwnMetadata", Fe);
      function We(e, n, o) {
        if (!I(n))
          throw new TypeError();
        return h(o) || (o = W(o)), ce(e, n, o);
      }
      V("getMetadata", We);
      function pe(e, n, o) {
        if (!I(n))
          throw new TypeError();
        return h(o) || (o = W(o)), Ue(e, n, o);
      }
      V("getOwnMetadata", pe);
      function Ce(e, n) {
        if (!I(e))
          throw new TypeError();
        return h(n) || (n = W(n)), ge(e, n);
      }
      V("getMetadataKeys", Ce);
      function ye(e, n) {
        if (!I(e))
          throw new TypeError();
        return h(n) || (n = W(n)), ie(e, n);
      }
      V("getOwnMetadataKeys", ye);
      function de(e, n, o) {
        if (!I(n))
          throw new TypeError();
        if (h(o) || (o = W(o)), !I(n))
          throw new TypeError();
        h(o) || (o = W(o));
        var r = Ie(
          n,
          o,
          /*Create*/
          !1
        );
        return h(r) ? !1 : r.OrdinaryDeleteMetadata(e, n, o);
      }
      V("deleteMetadata", de);
      function Pe(e, n) {
        for (var o = e.length - 1; o >= 0; --o) {
          var r = e[o], _ = r(n);
          if (!h(_) && !N(_)) {
            if (!ze(_))
              throw new TypeError();
            n = _;
          }
        }
        return n;
      }
      function Re(e, n, o, r) {
        for (var _ = e.length - 1; _ >= 0; --_) {
          var A = e[_], R = A(n, o, r);
          if (!h(R) && !N(R)) {
            if (!I(R))
              throw new TypeError();
            r = R;
          }
        }
        return r;
      }
      function Se(e, n, o) {
        var r = re(e, n, o);
        if (r)
          return !0;
        var _ = M(n);
        return N(_) ? !1 : Se(e, _, o);
      }
      function re(e, n, o) {
        var r = Ie(
          n,
          o,
          /*Create*/
          !1
        );
        return h(r) ? !1 : fe(r.OrdinaryHasOwnMetadata(e, n, o));
      }
      function ce(e, n, o) {
        var r = re(e, n, o);
        if (r)
          return Ue(e, n, o);
        var _ = M(n);
        if (!N(_))
          return ce(e, _, o);
      }
      function Ue(e, n, o) {
        var r = Ie(
          n,
          o,
          /*Create*/
          !1
        );
        if (!h(r))
          return r.OrdinaryGetOwnMetadata(e, n, o);
      }
      function Ne(e, n, o, r) {
        var _ = Ie(
          o,
          r,
          /*Create*/
          !0
        );
        _.OrdinaryDefineOwnMetadata(e, n, o, r);
      }
      function ge(e, n) {
        var o = ie(e, n), r = M(e);
        if (r === null)
          return o;
        var _ = ge(r, n);
        if (_.length <= 0)
          return o;
        if (o.length <= 0)
          return _;
        for (var A = new le(), R = [], w = 0, s = o; w < s.length; w++) {
          var c = s[w], v = A.has(c);
          v || (A.add(c), R.push(c));
        }
        for (var y = 0, x = _; y < x.length; y++) {
          var c = x[y], v = A.has(c);
          v || (A.add(c), R.push(c));
        }
        return R;
      }
      function ie(e, n) {
        var o = Ie(
          e,
          n,
          /*create*/
          !1
        );
        return o ? o.OrdinaryOwnMetadataKeys(e, n) : [];
      }
      function Ve(e) {
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
      function N(e) {
        return e === null;
      }
      function H(e) {
        return typeof e == "symbol";
      }
      function I(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function De(e, n) {
        switch (Ve(e)) {
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
        var o = "string", r = i(e, ue);
        if (r !== void 0) {
          var _ = r.call(e, o);
          if (I(_))
            throw new TypeError();
          return _;
        }
        return se(e);
      }
      function se(e, n) {
        var o, r, _;
        {
          var A = e.toString;
          if (me(A)) {
            var r = A.call(e);
            if (!I(r))
              return r;
          }
          var o = e.valueOf;
          if (me(o)) {
            var r = o.call(e);
            if (!I(r))
              return r;
          }
        }
        throw new TypeError();
      }
      function fe(e) {
        return !!e;
      }
      function $e(e) {
        return "" + e;
      }
      function W(e) {
        var n = De(e);
        return H(n) ? n : $e(n);
      }
      function je(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function me(e) {
        return typeof e == "function";
      }
      function ze(e) {
        return typeof e == "function";
      }
      function Be(e) {
        switch (Ve(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function Te(e, n) {
        return e === n || e !== e && n !== n;
      }
      function i(e, n) {
        var o = e[n];
        if (o != null) {
          if (!me(o))
            throw new TypeError();
          return o;
        }
      }
      function a(e) {
        var n = i(e, Z);
        if (!me(n))
          throw new TypeError();
        var o = n.call(e);
        if (!I(o))
          throw new TypeError();
        return o;
      }
      function t(e) {
        return e.value;
      }
      function p(e) {
        var n = e.next();
        return n.done ? !1 : n;
      }
      function l(e) {
        var n = e.return;
        n && n.call(e);
      }
      function M(e) {
        var n = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === D || n !== D)
          return n;
        var o = e.prototype, r = o && Object.getPrototypeOf(o);
        if (r == null || r === Object.prototype)
          return n;
        var _ = r.constructor;
        return typeof _ != "function" || _ === e ? n : _;
      }
      function X() {
        var e;
        !h(ne) && typeof T.Reflect < "u" && !(ne in T.Reflect) && typeof T.Reflect.defineMetadata == "function" && (e = st(T.Reflect));
        var n, o, r, _ = new ve(), A = {
          registerProvider: R,
          getProvider: s,
          setProvider: v
        };
        return A;
        function R(y) {
          if (!Object.isExtensible(A))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === y:
              break;
            case h(n):
              n = y;
              break;
            case n === y:
              break;
            case h(o):
              o = y;
              break;
            case o === y:
              break;
            default:
              r === void 0 && (r = new le()), r.add(y);
              break;
          }
        }
        function w(y, x) {
          if (!h(n)) {
            if (n.isProviderFor(y, x))
              return n;
            if (!h(o)) {
              if (o.isProviderFor(y, x))
                return n;
              if (!h(r))
                for (var C = a(r); ; ) {
                  var O = p(C);
                  if (!O)
                    return;
                  var K = t(O);
                  if (K.isProviderFor(y, x))
                    return l(C), K;
                }
            }
          }
          if (!h(e) && e.isProviderFor(y, x))
            return e;
        }
        function s(y, x) {
          var C = _.get(y), O;
          return h(C) || (O = C.get(x)), h(O) && (O = w(y, x), h(O) || (h(C) && (C = new u(), _.set(y, C)), C.set(x, O))), O;
        }
        function c(y) {
          if (h(y))
            throw new TypeError();
          return n === y || o === y || !h(r) && r.has(y);
        }
        function v(y, x, C) {
          if (!c(C))
            throw new Error("Metadata provider not registered.");
          var O = s(y, x);
          if (O !== C) {
            if (!h(O))
              return !1;
            var K = _.get(y);
            h(K) && (K = new u(), _.set(y, K)), K.set(x, C);
          }
          return !0;
        }
      }
      function Le() {
        var e;
        return !h(ne) && I(T.Reflect) && Object.isExtensible(T.Reflect) && (e = T.Reflect[ne]), h(e) && (e = X()), !h(ne) && I(T.Reflect) && Object.isExtensible(T.Reflect) && Object.defineProperty(T.Reflect, ne, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function it(e) {
        var n = new ve(), o = {
          isProviderFor: function(c, v) {
            var y = n.get(c);
            return h(y) ? !1 : y.has(v);
          },
          OrdinaryDefineOwnMetadata: R,
          OrdinaryHasOwnMetadata: _,
          OrdinaryGetOwnMetadata: A,
          OrdinaryOwnMetadataKeys: w,
          OrdinaryDeleteMetadata: s
        };
        return U.registerProvider(o), o;
        function r(c, v, y) {
          var x = n.get(c), C = !1;
          if (h(x)) {
            if (!y)
              return;
            x = new u(), n.set(c, x), C = !0;
          }
          var O = x.get(v);
          if (h(O)) {
            if (!y)
              return;
            if (O = new u(), x.set(v, O), !e.setProvider(c, v, o))
              throw x.delete(v), C && n.delete(c), new Error("Wrong provider for target.");
          }
          return O;
        }
        function _(c, v, y) {
          var x = r(
            v,
            y,
            /*Create*/
            !1
          );
          return h(x) ? !1 : fe(x.has(c));
        }
        function A(c, v, y) {
          var x = r(
            v,
            y,
            /*Create*/
            !1
          );
          if (!h(x))
            return x.get(c);
        }
        function R(c, v, y, x) {
          var C = r(
            y,
            x,
            /*Create*/
            !0
          );
          C.set(c, v);
        }
        function w(c, v) {
          var y = [], x = r(
            c,
            v,
            /*Create*/
            !1
          );
          if (h(x))
            return y;
          for (var C = x.keys(), O = a(C), K = 0; ; ) {
            var Je = p(O);
            if (!Je)
              return y.length = K, y;
            var ft = t(Je);
            try {
              y[K] = ft;
            } catch (vt) {
              try {
                l(O);
              } finally {
                throw vt;
              }
            }
            K++;
          }
        }
        function s(c, v, y) {
          var x = r(
            v,
            y,
            /*Create*/
            !1
          );
          if (h(x) || !x.delete(c))
            return !1;
          if (x.size === 0) {
            var C = n.get(v);
            h(C) || (C.delete(y), C.size === 0 && n.delete(C));
          }
          return !0;
        }
      }
      function st(e) {
        var n = e.defineMetadata, o = e.hasOwnMetadata, r = e.getOwnMetadata, _ = e.getOwnMetadataKeys, A = e.deleteMetadata, R = new ve(), w = {
          isProviderFor: function(s, c) {
            var v = R.get(s);
            return !h(v) && v.has(c) ? !0 : _(s, c).length ? (h(v) && (v = new le(), R.set(s, v)), v.add(c), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: n,
          OrdinaryHasOwnMetadata: o,
          OrdinaryGetOwnMetadata: r,
          OrdinaryOwnMetadataKeys: _,
          OrdinaryDeleteMetadata: A
        };
        return w;
      }
      function Ie(e, n, o) {
        var r = U.getProvider(e, n);
        if (!h(r))
          return r;
        if (o) {
          if (U.setProvider(e, n, be))
            return be;
          throw new Error("Illegal state.");
        }
      }
      function ut() {
        var e = {}, n = [], o = (
          /** @class */
          (function() {
            function w(s, c, v) {
              this._index = 0, this._keys = s, this._values = c, this._selector = v;
            }
            return w.prototype["@@iterator"] = function() {
              return this;
            }, w.prototype[Z] = function() {
              return this;
            }, w.prototype.next = function() {
              var s = this._index;
              if (s >= 0 && s < this._keys.length) {
                var c = this._selector(this._keys[s], this._values[s]);
                return s + 1 >= this._keys.length ? (this._index = -1, this._keys = n, this._values = n) : this._index++, { value: c, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, w.prototype.throw = function(s) {
              throw this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), s;
            }, w.prototype.return = function(s) {
              return this._index >= 0 && (this._index = -1, this._keys = n, this._values = n), { value: s, done: !0 };
            }, w;
          })()
        ), r = (
          /** @class */
          (function() {
            function w() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(w.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), w.prototype.has = function(s) {
              return this._find(
                s,
                /*insert*/
                !1
              ) >= 0;
            }, w.prototype.get = function(s) {
              var c = this._find(
                s,
                /*insert*/
                !1
              );
              return c >= 0 ? this._values[c] : void 0;
            }, w.prototype.set = function(s, c) {
              var v = this._find(
                s,
                /*insert*/
                !0
              );
              return this._values[v] = c, this;
            }, w.prototype.delete = function(s) {
              var c = this._find(
                s,
                /*insert*/
                !1
              );
              if (c >= 0) {
                for (var v = this._keys.length, y = c + 1; y < v; y++)
                  this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
                return this._keys.length--, this._values.length--, Te(s, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, w.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, w.prototype.keys = function() {
              return new o(this._keys, this._values, _);
            }, w.prototype.values = function() {
              return new o(this._keys, this._values, A);
            }, w.prototype.entries = function() {
              return new o(this._keys, this._values, R);
            }, w.prototype["@@iterator"] = function() {
              return this.entries();
            }, w.prototype[Z] = function() {
              return this.entries();
            }, w.prototype._find = function(s, c) {
              if (!Te(this._cacheKey, s)) {
                this._cacheIndex = -1;
                for (var v = 0; v < this._keys.length; v++)
                  if (Te(this._keys[v], s)) {
                    this._cacheIndex = v;
                    break;
                  }
              }
              return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(s), this._values.push(void 0)), this._cacheIndex;
            }, w;
          })()
        );
        return r;
        function _(w, s) {
          return w;
        }
        function A(w, s) {
          return s;
        }
        function R(w, s) {
          return [w, s];
        }
      }
      function dt() {
        var e = (
          /** @class */
          (function() {
            function n() {
              this._map = new u();
            }
            return Object.defineProperty(n.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), n.prototype.has = function(o) {
              return this._map.has(o);
            }, n.prototype.add = function(o) {
              return this._map.set(o, o), this;
            }, n.prototype.delete = function(o) {
              return this._map.delete(o);
            }, n.prototype.clear = function() {
              this._map.clear();
            }, n.prototype.keys = function() {
              return this._map.keys();
            }, n.prototype.values = function() {
              return this._map.keys();
            }, n.prototype.entries = function() {
              return this._map.entries();
            }, n.prototype["@@iterator"] = function() {
              return this.keys();
            }, n.prototype[Z] = function() {
              return this.keys();
            }, n;
          })()
        );
        return e;
      }
      function ct() {
        var e = 16, n = q.create(), o = r();
        return (
          /** @class */
          (function() {
            function s() {
              this._key = r();
            }
            return s.prototype.has = function(c) {
              var v = _(
                c,
                /*create*/
                !1
              );
              return v !== void 0 ? q.has(v, this._key) : !1;
            }, s.prototype.get = function(c) {
              var v = _(
                c,
                /*create*/
                !1
              );
              return v !== void 0 ? q.get(v, this._key) : void 0;
            }, s.prototype.set = function(c, v) {
              var y = _(
                c,
                /*create*/
                !0
              );
              return y[this._key] = v, this;
            }, s.prototype.delete = function(c) {
              var v = _(
                c,
                /*create*/
                !1
              );
              return v !== void 0 ? delete v[this._key] : !1;
            }, s.prototype.clear = function() {
              this._key = r();
            }, s;
          })()
        );
        function r() {
          var s;
          do
            s = "@@WeakMap@@" + w();
          while (q.has(n, s));
          return n[s] = !0, s;
        }
        function _(s, c) {
          if (!E.call(s, o)) {
            if (!c)
              return;
            Object.defineProperty(s, o, { value: q.create() });
          }
          return s[o];
        }
        function A(s, c) {
          for (var v = 0; v < c; ++v)
            s[v] = Math.random() * 255 | 0;
          return s;
        }
        function R(s) {
          if (typeof Uint8Array == "function") {
            var c = new Uint8Array(s);
            return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : A(c, s), c;
          }
          return A(new Array(s), s);
        }
        function w() {
          var s = R(e);
          s[6] = s[6] & 79 | 64, s[8] = s[8] & 191 | 128;
          for (var c = "", v = 0; v < e; ++v) {
            var y = s[v];
            (v === 4 || v === 6 || v === 8) && (c += "-"), y < 16 && (c += "0"), c += y.toString(16).toLowerCase();
          }
          return c;
        }
      }
      function He(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(z || (z = {})), Xe;
}
bt();
const Mt = { class: "event-manager-ui" }, Ct = { class: "header-section" }, Vt = { class: "flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full table-wrapper" }, Tt = { class: "w-full overflow-auto flex flex-col bg-white" }, It = { class: "mappings" }, Et = ["title"], At = ["title"], Ot = { class: "actions-list" }, Pt = { class: "action-context" }, Rt = ["title"], St = { class: "action-name" }, Ut = { class: "text-xs" }, Nt = { class: "mappings__actions" }, Dt = { key: 0 }, $t = ["colspan"], jt = { class: "space-y-4" }, zt = { class: "event-source-grid" }, Gt = { class: "card-section__head" }, qt = {
  key: 0,
  class: "space-y-2"
}, Ft = {
  key: 1,
  class: "text-gray-500 italic text-sm"
}, Wt = { class: "card-section__head" }, Bt = {
  key: 0,
  class: "actions-list-editor"
}, Lt = ["onClick"], Ht = { class: "action-card-header" }, Yt = { class: "action-number" }, Zt = { class: "action-summary" }, Jt = { class: "action-context-badge" }, Qt = {
  key: 0,
  class: "action-name-text"
}, Xt = {
  key: 1,
  class: "action-empty"
}, Kt = {
  key: 0,
  class: "action-card-body"
}, en = { class: "action-settings-row" }, tn = {
  key: 0,
  class: "action-parameters"
}, nn = { class: "parameters-list" }, an = { class: "parameter-label" }, on = { class: "parameter-name" }, ln = {
  key: 0,
  class: "parameter-optional"
}, rn = { class: "parameter-type-badge" }, sn = { class: "parameter-input-row" }, un = { class: "source-toggle" }, dn = ["onClick"], cn = ["onClick"], fn = { class: "space-y-4" }, vn = { class: "event-source-grid" }, pn = { class: "card-section__head" }, yn = {
  key: 0,
  class: "space-y-2"
}, gn = {
  key: 1,
  class: "text-gray-500 italic text-sm"
}, mn = { class: "card-section__head" }, hn = {
  key: 0,
  class: "actions-list-editor"
}, _n = ["onClick"], wn = { class: "action-card-header" }, kn = { class: "action-number" }, xn = { class: "action-summary" }, bn = { class: "action-context-badge" }, Mn = {
  key: 0,
  class: "action-name-text"
}, Cn = {
  key: 1,
  class: "action-empty"
}, Vn = {
  key: 0,
  class: "action-card-body"
}, Tn = { class: "action-settings-row" }, In = {
  key: 0,
  class: "action-parameters"
}, En = { class: "parameters-list" }, An = { class: "parameter-label" }, On = { class: "parameter-name" }, Pn = {
  key: 0,
  class: "parameter-optional"
}, Rn = { class: "parameter-type-badge" }, Sn = { class: "parameter-input-row" }, Un = { class: "source-toggle" }, Nn = ["onClick"], Dn = ["onClick"], $n = /* @__PURE__ */ pt({
  __name: "EventManagerUI",
  setup(z) {
    let G, V, T, E;
    const te = B([]), ue = B([]), Z = B([]), J = B([]), L = B(!1), Q = B(!1), q = B(null), D = B(0), u = B({
      context: "widget",
      conditions: [],
      actions: [{
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }]
    }), le = [
      { text: "System", value: "system" },
      { text: "Page", value: "page" },
      { text: "Widget", value: "widget" }
    ], ve = [
      { text: "==", value: we.eq },
      { text: "!=", value: we.neq },
      { text: "<", value: we.lt },
      { text: "<=", value: we.lte },
      { text: ">", value: we.gt },
      { text: ">=", value: we.gte }
    ], ne = [
      { key: "id", label: "ID", sortable: !0 },
      { key: "context", label: "Event Context", sortable: !0 },
      { key: "eventType", label: "Event Type", sortable: !0 },
      { key: "actionsCount", label: "Actions", sortable: !0 },
      { key: "conditions", label: "Conditions" },
      { key: "tableActions", label: "", width: 100 }
    ], U = Ee(() => !u.value.actions || u.value.actions.length === 0 ? null : u.value.actions[D.value]), be = () => {
      u.value.actions || (u.value.actions = []), u.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }), D.value = u.value.actions.length - 1, N.value.clear(), H.value.clear();
    }, Ae = (i) => {
      u.value.actions && (u.value.actions.splice(i, 1), D.value >= u.value.actions.length && (D.value = Math.max(0, u.value.actions.length - 1)), N.value.clear(), H.value.clear());
    }, Oe = (i) => {
      D.value = i, N.value.clear(), H.value.clear();
      const a = u.value.actions?.[i];
      a && (a.payloadMapping && a.payloadMapping.forEach((t) => {
        N.value.set(t.argIndex, "payload");
      }), a.actionArgs && a.actionArgs.forEach((t, p) => {
        t !== void 0 && !a.payloadMapping?.some((l) => l.argIndex === p) && (N.value.set(p, "manual"), H.value.set(p, String(t)));
      }));
    }, Me = () => {
      te.value = G.getAllMappings();
    }, qe = () => {
      ue.value = V.getAllEvents();
    }, Fe = () => {
      Z.value = T.getWidgetTypes(), console.log("📋 Loaded widget types:", Z.value);
    }, We = () => {
      J.value = E.getAllPageIds(), console.log("📄 Loaded pages:", J.value);
    }, pe = Ee(() => {
      if (!u.value.eventType) return [];
      try {
        const i = V.extractPayloadPropertiesForEvent(u.value.eventType);
        return console.log("📦 Payload properties from Ecore model:", i), i.map((a) => ({
          text: `${a.name}: ${a.type}${a.optional ? "?" : ""}`,
          value: a.name
        }));
      } catch (i) {
        return console.error("❌ Error extracting properties from Ecore:", i), [];
      }
    }), Ce = Ee(() => {
      if (!U.value?.targetContext) return [];
      const i = U.value.targetContext, a = [];
      for (const t of Z.value) {
        const p = t.context !== void 0, l = t.context || "widget";
        let M = !1;
        if (p ? M = l === i : M = i === "system" && t.widgetType.includes("System") || i === "page" && t.widgetType.includes("Page") || i === "widget" && !t.widgetType.includes("System") && !t.widgetType.includes("Page"), M)
          for (const X of t.actions) {
            const Le = i === "widget" ? `${t.widgetType}.` : "";
            a.push({
              text: `${Le}${X.methodName}`,
              value: X.methodName,
              parameters: X.parameters,
              widgetType: t.widgetType
            });
          }
      }
      return a;
    }), ye = Ee(() => {
      if (!U.value?.actionName) return [];
      const i = Ce.value.find((t) => t.value === U.value?.actionName);
      if (!i?.widgetType) return [];
      const a = T?.getRegisteredInstances(i.widgetType) || [];
      return [
        { text: "All instances", value: "" },
        ...a.map((t) => ({
          text: `${t.instanceId} (${t.widgetType})`,
          value: t.instanceId
        }))
      ];
    }), de = Ee(() => {
      if (!U.value?.actionName || !U.value?.targetContext) return [];
      const i = U.value.targetContext, a = Z.value.filter((t) => {
        const p = t.context !== void 0, l = t.context || "widget";
        return p ? l === i : i === "system" && t.widgetType.includes("System") || i === "page" && t.widgetType.includes("Page") || i === "widget" && !t.widgetType.includes("System") && !t.widgetType.includes("Page");
      });
      for (const t of a) {
        const p = t.actions.find((l) => l.methodName === U.value?.actionName);
        if (console.log("🎯 Looking for action:", U.value?.actionName, "in", t.widgetType), console.log("   Found action:", p), p && p.parameters)
          return console.log("   Action parameters:", p.parameters), p.parameters.map((l, M) => {
            const X = l.match(/^(\w+)(\?)?:\s*(.+)$/);
            return console.log("   Parsing param:", l, "Match:", X), X ? {
              name: X[1],
              optional: !!X[2],
              type: X[3],
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
    }), Pe = (i) => i.actions && i.actions.length > 0 ? i.actions : i.actionName ? [{
      targetContext: i.targetContext,
      targetContextId: i.targetContextId,
      actionName: i.actionName,
      actionArgs: i.actionArgs,
      payloadMapping: i.payloadMapping
    }] : [], Re = () => {
      if (!u.value.eventType)
        return;
      const i = u.value.actions?.filter((t) => t.actionName) || [];
      if (i.length === 0)
        return;
      const a = {
        id: q.value || `mapping-${Date.now()}`,
        context: u.value.context,
        contextId: u.value.contextId,
        eventType: u.value.eventType,
        conditions: u.value.conditions || [],
        actions: i
      };
      q.value && G.unregisterMapping(q.value), G.registerMapping(a), Me(), ie(), L.value = !1, Q.value = !1, q.value = null;
    }, Se = (i) => {
      q.value = i.id;
      const a = Pe(i);
      u.value = {
        context: i.context,
        contextId: i.contextId,
        eventType: i.eventType,
        conditions: i.conditions || [],
        actions: a.length > 0 ? a : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, D.value = 0, N.value.clear(), H.value.clear();
      const t = u.value.actions?.[0];
      t && (t.payloadMapping && t.payloadMapping.forEach((p) => {
        N.value.set(p.argIndex, "payload");
      }), t.actionArgs && t.actionArgs.forEach((p, l) => {
        p !== void 0 && !t.payloadMapping?.some((M) => M.argIndex === l) && (N.value.set(l, "manual"), H.value.set(l, String(p)));
      })), Q.value = !0;
    }, re = B(!1), ce = B(null), Ue = (i) => {
      ce.value = i, re.value = !0;
    }, Ne = () => {
      ce.value && (G.unregisterMapping(ce.value), Me()), ge();
    }, ge = () => {
      re.value = !1, ce.value = null;
    }, ie = () => {
      u.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, q.value = null, D.value = 0, N.value.clear(), H.value.clear();
    }, Ve = () => {
      u.value.conditions || (u.value.conditions = []), u.value.conditions.push(new _t());
    }, h = (i) => {
      u.value.conditions?.splice(i, 1);
    }, N = B(/* @__PURE__ */ new Map()), H = B(/* @__PURE__ */ new Map()), I = (i, a) => {
      const t = U.value;
      t && (t.payloadMapping || (t.payloadMapping = []), t.payloadMapping = t.payloadMapping.filter(
        (p) => p.argIndex !== i
      ), a && t.payloadMapping.push({
        payloadPath: a,
        argIndex: i
      }));
    }, De = (i, a) => {
      H.value.set(i, a);
      const t = U.value;
      if (!t) return;
      for (t.actionArgs || (t.actionArgs = []); t.actionArgs.length <= i; )
        t.actionArgs.push(void 0);
      const p = de.value.find((l) => l.index === i);
      p && (p.type === "number" || p.type.includes("number") ? t.actionArgs[i] = parseFloat(a) || 0 : p.type === "boolean" ? t.actionArgs[i] = a === "true" : t.actionArgs[i] = a);
    }, se = (i) => N.value.get(i) || "payload", fe = (i, a) => {
      N.value.set(i, a);
      const t = U.value;
      t && (a === "manual" ? t.payloadMapping && (t.payloadMapping = t.payloadMapping.filter(
        (p) => p.argIndex !== i
      )) : (H.value.delete(i), t.actionArgs && t.actionArgs[i] !== void 0 && (t.actionArgs[i] = void 0)));
    }, $e = (i) => {
      const a = U.value;
      return a?.payloadMapping && a.payloadMapping.find((p) => p.argIndex === i)?.payloadPath || "";
    }, W = (i) => H.value.get(i) || "", je = (i) => !i || i.length === 0 ? "-" : i.map((a) => `${a.prop} ${a.comperator} ${a.value}`).join(" AND "), me = Ge(gt), ze = Ge(mt), Be = Ge(ht), Te = Ge(wt);
    return yt(() => {
      G = me, V = ze, T = Be, E = Te, Me(), qe(), Fe(), We();
    }), (i, a) => (g(), k("div", Mt, [
      d("div", Ct, [
        a[16] || (a[16] = d("h2", { class: "page-title" }, "Event Manager", -1)),
        m(f(j), {
          onClick: a[0] || (a[0] = (t) => L.value = !0)
        }, {
          default: b(() => [
            m(f(Y), {
              name: "add",
              size: "sm"
            }),
            a[15] || (a[15] = ee("Add Mapping", -1))
          ]),
          _: 1
        })
      ]),
      d("div", Vt, [
        d("div", Tt, [
          d("table", It, [
            d("thead", null, [
              d("tr", null, [
                (g(), k(ae, null, oe(ne, (t) => d("th", {
                  key: t.key
                }, S(t.label), 1)), 64))
              ])
            ]),
            d("tbody", null, [
              (g(!0), k(ae, null, oe(te.value, (t) => (g(), k("tr", {
                key: t.id
              }, [
                d("td", null, [
                  d("span", {
                    class: "mapping-id",
                    title: t.id
                  }, S(t.id), 9, Et)
                ]),
                d("td", null, [
                  d("span", null, S(t.context), 1),
                  t.contextId ? (g(), k("span", {
                    key: 0,
                    class: "uid-badge",
                    title: t.contextId
                  }, S(t.contextId), 9, At)) : $("", !0)
                ]),
                d("td", null, S(t.eventType), 1),
                d("td", null, [
                  d("div", Ot, [
                    (g(!0), k(ae, null, oe(Pe(t), (p, l) => (g(), k("div", {
                      key: l,
                      class: "action-item"
                    }, [
                      d("span", Pt, S(p.targetContext), 1),
                      p.targetContextId ? (g(), k("span", {
                        key: 0,
                        class: "uid-badge",
                        title: p.targetContextId
                      }, S(p.targetContextId), 9, Rt)) : $("", !0),
                      a[17] || (a[17] = d("span", { class: "action-separator" }, "→", -1)),
                      d("span", St, S(p.actionName), 1)
                    ]))), 128))
                  ])
                ]),
                d("td", null, [
                  d("span", Ut, S(je(t.conditions)), 1)
                ]),
                d("td", Nt, [
                  m(f(j), {
                    intent: "quiet",
                    size: "sm",
                    title: "Edit mapping",
                    onClick: (p) => Se(t)
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "edit",
                        size: "sm"
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  m(f(j), {
                    intent: "danger",
                    size: "sm",
                    title: "Remove mapping",
                    onClick: (p) => Ue(t.id)
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "delete",
                        size: "sm"
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ])
              ]))), 128)),
              te.value.length === 0 ? (g(), k("tr", Dt, [
                d("td", {
                  class: "mappings__empty",
                  colspan: ne.length
                }, "No mappings yet.", 8, $t)
              ])) : $("", !0)
            ])
          ])
        ])
      ]),
      m(f(Ye), {
        modelValue: L.value,
        "onUpdate:modelValue": a[6] || (a[6] = (t) => L.value = t),
        title: "Add Event-Action Mapping",
        size: "lg",
        class: "event-manager-ui_modal",
        onCancel: ie
      }, {
        actions: b(() => [
          m(f(j), {
            intent: "quiet",
            onClick: a[5] || (a[5] = (t) => {
              L.value = !1, ie();
            })
          }, {
            default: b(() => [...a[24] || (a[24] = [
              ee("Cancel", -1)
            ])]),
            _: 1
          }),
          m(f(j), {
            intent: "primary",
            onClick: Re
          }, {
            default: b(() => [...a[25] || (a[25] = [
              ee("Add", -1)
            ])]),
            _: 1
          })
        ]),
        default: b(() => [
          d("div", jt, [
            m(f(ke), { class: "card-section" }, {
              header: b(() => [...a[18] || (a[18] = [
                d("h3", { class: "section-title" }, "1. Event Source", -1)
              ])]),
              default: b(() => [
                d("div", zt, [
                  m(f(P), {
                    modelValue: u.value.context,
                    "onUpdate:modelValue": a[1] || (a[1] = (t) => u.value.context = t),
                    label: "Context",
                    options: le,
                    "label-key": "text",
                    "value-key": "value"
                  }, null, 8, ["modelValue"]),
                  u.value.context === "page" ? (g(), F(f(P), {
                    key: 0,
                    modelValue: u.value.contextId,
                    "onUpdate:modelValue": a[2] || (a[2] = (t) => u.value.contextId = t),
                    label: "Page ID",
                    options: [{ text: "Any page", value: "" }, ...J.value.map((t) => ({ text: t, value: t }))],
                    "label-key": "text",
                    "value-key": "value",
                    clearable: ""
                  }, null, 8, ["modelValue", "options"])) : u.value.context === "widget" ? (g(), F(f(xe), {
                    key: 1,
                    modelValue: u.value.contextId,
                    "onUpdate:modelValue": a[3] || (a[3] = (t) => u.value.contextId = t),
                    label: "Widget ID (optional)",
                    placeholder: "e.g., specific widgetId"
                  }, null, 8, ["modelValue"])) : $("", !0),
                  m(f(P), {
                    modelValue: u.value.eventType,
                    "onUpdate:modelValue": a[4] || (a[4] = (t) => u.value.eventType = t),
                    label: "Event Type",
                    options: ue.value,
                    "label-key": "type",
                    "value-key": "type"
                  }, null, 8, ["modelValue", "options"])
                ])
              ]),
              _: 1
            }),
            m(f(ke), { class: "card-section" }, {
              header: b(() => [
                d("div", Gt, [
                  a[20] || (a[20] = d("span", { class: "section-title" }, "2. Conditions", -1)),
                  m(f(j), {
                    onClick: Ve,
                    size: "sm",
                    intent: "quiet"
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "add",
                        size: "sm"
                      }),
                      a[19] || (a[19] = ee("Add", -1))
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: b(() => [
                u.value.conditions && u.value.conditions.length > 0 ? (g(), k("div", qt, [
                  (g(!0), k(ae, null, oe(u.value.conditions, (t, p) => (g(), k("div", {
                    key: p,
                    class: "condition-row"
                  }, [
                    m(f(P), {
                      modelValue: t.prop,
                      "onUpdate:modelValue": (l) => t.prop = l,
                      placeholder: "Property",
                      options: pe.value,
                      "label-key": "text",
                      "value-key": "value",
                      class: "flex-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    m(f(P), {
                      modelValue: t.comperator,
                      "onUpdate:modelValue": (l) => t.comperator = l,
                      options: ve,
                      "label-key": "text",
                      "value-key": "value",
                      class: "w-20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    m(f(xe), {
                      modelValue: t.value,
                      "onUpdate:modelValue": (l) => t.value = l,
                      placeholder: "Value",
                      class: "flex-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    m(f(j), {
                      onClick: (l) => h(p),
                      intent: "danger",
                      size: "sm"
                    }, {
                      default: b(() => [
                        m(f(Y), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128))
                ])) : (g(), k("div", Ft, " No conditions - action will always execute "))
              ]),
              _: 1
            }),
            m(f(ke), { class: "card-section" }, {
              header: b(() => [
                d("div", Wt, [
                  a[22] || (a[22] = d("span", { class: "section-title" }, "3. Actions", -1)),
                  m(f(j), {
                    onClick: be,
                    size: "sm",
                    intent: "quiet"
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "add",
                        size: "sm"
                      }),
                      a[21] || (a[21] = ee("Add Action", -1))
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: b(() => [
                u.value.actions && u.value.actions.length > 0 ? (g(), k("div", Bt, [
                  (g(!0), k(ae, null, oe(u.value.actions, (t, p) => (g(), k("div", {
                    key: p,
                    class: he(["action-card", { active: D.value === p }]),
                    onClick: (l) => Oe(p)
                  }, [
                    d("div", Ht, [
                      d("span", Yt, S(p + 1), 1),
                      d("span", Zt, [
                        d("span", Jt, S(t.targetContext), 1),
                        t.actionName ? (g(), k("span", Qt, S(t.actionName), 1)) : (g(), k("span", Xt, "(select action)"))
                      ]),
                      u.value.actions.length > 1 ? (g(), F(f(j), {
                        key: 0,
                        onClick: _e((l) => Ae(p), ["stop"]),
                        intent: "danger",
                        size: "sm"
                      }, {
                        default: b(() => [
                          m(f(Y), {
                            name: "close",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : $("", !0)
                    ]),
                    D.value === p ? (g(), k("div", Kt, [
                      d("div", en, [
                        m(f(P), {
                          modelValue: t.targetContext,
                          "onUpdate:modelValue": (l) => t.targetContext = l,
                          label: "Context",
                          options: le,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        t.targetContext === "page" ? (g(), F(f(P), {
                          key: 0,
                          modelValue: t.targetContextId,
                          "onUpdate:modelValue": (l) => t.targetContextId = l,
                          label: "Target Page",
                          options: [{ text: "Any", value: "" }, ...J.value.map((l) => ({ text: l, value: l }))],
                          "label-key": "text",
                          "value-key": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : t.targetContext === "widget" || t.targetContext === "system" ? (g(), F(f(P), {
                          key: 1,
                          modelValue: t.targetContextId,
                          "onUpdate:modelValue": (l) => t.targetContextId = l,
                          label: "Target Instance",
                          options: ye.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: "",
                          placeholder: ye.value.length > 1 ? "Select instance" : "All instances"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : $("", !0),
                        m(f(P), {
                          modelValue: t.actionName,
                          "onUpdate:modelValue": (l) => t.actionName = l,
                          label: "Action",
                          options: Ce.value,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      de.value.length > 0 ? (g(), k("div", tn, [
                        a[23] || (a[23] = d("div", { class: "parameters-title" }, "Parameters", -1)),
                        d("div", nn, [
                          (g(!0), k(ae, null, oe(de.value, (l) => (g(), k("div", {
                            key: l.index,
                            class: "parameter-item"
                          }, [
                            d("div", an, [
                              d("span", on, S(l.name), 1),
                              l.optional ? (g(), k("span", ln, "?")) : $("", !0),
                              d("span", rn, S(l.type), 1)
                            ]),
                            d("div", sn, [
                              d("div", un, [
                                d("button", {
                                  class: he(["toggle-btn", { active: se(l.index) === "payload" }]),
                                  onClick: _e((M) => fe(l.index, "payload"), ["stop"]),
                                  type: "button"
                                }, "Payload", 10, dn),
                                d("button", {
                                  class: he(["toggle-btn", { active: se(l.index) === "manual" }]),
                                  onClick: _e((M) => fe(l.index, "manual"), ["stop"]),
                                  type: "button"
                                }, "Manual", 10, cn)
                              ]),
                              se(l.index) === "payload" ? (g(), F(f(P), {
                                key: 0,
                                "model-value": $e(l.index),
                                "onUpdate:modelValue": (M) => I(l.index, String(M ?? "")),
                                placeholder: l.optional ? "(optional)" : "Select property",
                                options: pe.value,
                                "label-key": "text",
                                "value-key": "value",
                                clearable: "",
                                class: "parameter-value-input"
                              }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (g(), F(f(xe), {
                                key: 1,
                                "model-value": W(l.index),
                                "onUpdate:modelValue": (M) => De(l.index, String(M ?? "")),
                                placeholder: `Enter ${l.type}`,
                                class: "parameter-value-input"
                              }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                            ])
                          ]))), 128))
                        ])
                      ])) : $("", !0)
                    ])) : $("", !0)
                  ], 10, Lt))), 128))
                ])) : $("", !0)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      m(f(Ye), {
        modelValue: Q.value,
        "onUpdate:modelValue": a[12] || (a[12] = (t) => Q.value = t),
        title: "Edit Event-Action Mapping",
        size: "lg",
        onCancel: ie
      }, {
        actions: b(() => [
          m(f(j), {
            intent: "quiet",
            onClick: a[11] || (a[11] = (t) => {
              Q.value = !1, ie();
            })
          }, {
            default: b(() => [...a[32] || (a[32] = [
              ee("Cancel", -1)
            ])]),
            _: 1
          }),
          m(f(j), {
            intent: "primary",
            onClick: Re
          }, {
            default: b(() => [...a[33] || (a[33] = [
              ee("Save", -1)
            ])]),
            _: 1
          })
        ]),
        default: b(() => [
          d("div", fn, [
            m(f(ke), { class: "card-section" }, {
              header: b(() => [...a[26] || (a[26] = [
                d("h3", { class: "section-title" }, "1. Event Source", -1)
              ])]),
              default: b(() => [
                d("div", vn, [
                  m(f(P), {
                    modelValue: u.value.context,
                    "onUpdate:modelValue": a[7] || (a[7] = (t) => u.value.context = t),
                    label: "Context",
                    options: le,
                    "label-key": "text",
                    "value-key": "value"
                  }, null, 8, ["modelValue"]),
                  u.value.context === "page" ? (g(), F(f(P), {
                    key: 0,
                    modelValue: u.value.contextId,
                    "onUpdate:modelValue": a[8] || (a[8] = (t) => u.value.contextId = t),
                    label: "Page ID",
                    options: [{ text: "Any page", value: "" }, ...J.value.map((t) => ({ text: t, value: t }))],
                    "label-key": "text",
                    "value-key": "value",
                    clearable: ""
                  }, null, 8, ["modelValue", "options"])) : u.value.context === "widget" ? (g(), F(f(xe), {
                    key: 1,
                    modelValue: u.value.contextId,
                    "onUpdate:modelValue": a[9] || (a[9] = (t) => u.value.contextId = t),
                    label: "Widget ID (optional)",
                    placeholder: "e.g., specific widgetId"
                  }, null, 8, ["modelValue"])) : $("", !0),
                  m(f(P), {
                    modelValue: u.value.eventType,
                    "onUpdate:modelValue": a[10] || (a[10] = (t) => u.value.eventType = t),
                    label: "Event Type",
                    options: ue.value,
                    "label-key": "type",
                    "value-key": "type"
                  }, null, 8, ["modelValue", "options"])
                ])
              ]),
              _: 1
            }),
            m(f(ke), { class: "card-section" }, {
              header: b(() => [
                d("div", pn, [
                  a[28] || (a[28] = d("span", { class: "section-title" }, "2. Conditions", -1)),
                  m(f(j), {
                    onClick: Ve,
                    size: "sm",
                    intent: "quiet"
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "add",
                        size: "sm"
                      }),
                      a[27] || (a[27] = ee("Add", -1))
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: b(() => [
                u.value.conditions && u.value.conditions.length > 0 ? (g(), k("div", yn, [
                  (g(!0), k(ae, null, oe(u.value.conditions, (t, p) => (g(), k("div", {
                    key: p,
                    class: "condition-row"
                  }, [
                    m(f(P), {
                      modelValue: t.prop,
                      "onUpdate:modelValue": (l) => t.prop = l,
                      placeholder: "Property",
                      options: pe.value,
                      "label-key": "text",
                      "value-key": "value",
                      class: "flex-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    m(f(P), {
                      modelValue: t.comperator,
                      "onUpdate:modelValue": (l) => t.comperator = l,
                      options: ve,
                      "label-key": "text",
                      "value-key": "value",
                      class: "w-20"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    m(f(xe), {
                      modelValue: t.value,
                      "onUpdate:modelValue": (l) => t.value = l,
                      placeholder: "Value",
                      class: "flex-1"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    m(f(j), {
                      onClick: (l) => h(p),
                      intent: "danger",
                      size: "sm"
                    }, {
                      default: b(() => [
                        m(f(Y), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128))
                ])) : (g(), k("div", gn, " No conditions - action will always execute "))
              ]),
              _: 1
            }),
            m(f(ke), { class: "card-section" }, {
              header: b(() => [
                d("div", mn, [
                  a[30] || (a[30] = d("span", { class: "section-title" }, "3. Actions", -1)),
                  m(f(j), {
                    onClick: be,
                    size: "sm",
                    intent: "quiet"
                  }, {
                    default: b(() => [
                      m(f(Y), {
                        name: "add",
                        size: "sm"
                      }),
                      a[29] || (a[29] = ee("Add Action", -1))
                    ]),
                    _: 1
                  })
                ])
              ]),
              default: b(() => [
                u.value.actions && u.value.actions.length > 0 ? (g(), k("div", hn, [
                  (g(!0), k(ae, null, oe(u.value.actions, (t, p) => (g(), k("div", {
                    key: p,
                    class: he(["action-card", { active: D.value === p }]),
                    onClick: (l) => Oe(p)
                  }, [
                    d("div", wn, [
                      d("span", kn, S(p + 1), 1),
                      d("span", xn, [
                        d("span", bn, S(t.targetContext), 1),
                        t.actionName ? (g(), k("span", Mn, S(t.actionName), 1)) : (g(), k("span", Cn, "(select action)"))
                      ]),
                      u.value.actions.length > 1 ? (g(), F(f(j), {
                        key: 0,
                        onClick: _e((l) => Ae(p), ["stop"]),
                        intent: "danger",
                        size: "sm"
                      }, {
                        default: b(() => [
                          m(f(Y), {
                            name: "close",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])) : $("", !0)
                    ]),
                    D.value === p ? (g(), k("div", Vn, [
                      d("div", Tn, [
                        m(f(P), {
                          modelValue: t.targetContext,
                          "onUpdate:modelValue": (l) => t.targetContext = l,
                          label: "Context",
                          options: le,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        t.targetContext === "page" ? (g(), F(f(P), {
                          key: 0,
                          modelValue: t.targetContextId,
                          "onUpdate:modelValue": (l) => t.targetContextId = l,
                          label: "Target Page",
                          options: [{ text: "Any", value: "" }, ...J.value.map((l) => ({ text: l, value: l }))],
                          "label-key": "text",
                          "value-key": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : t.targetContext === "widget" || t.targetContext === "system" ? (g(), F(f(P), {
                          key: 1,
                          modelValue: t.targetContextId,
                          "onUpdate:modelValue": (l) => t.targetContextId = l,
                          label: "Target Instance",
                          options: ye.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: "",
                          placeholder: ye.value.length > 1 ? "Select instance" : "All instances"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : $("", !0),
                        m(f(P), {
                          modelValue: t.actionName,
                          "onUpdate:modelValue": (l) => t.actionName = l,
                          label: "Action",
                          options: Ce.value,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      de.value.length > 0 ? (g(), k("div", In, [
                        a[31] || (a[31] = d("div", { class: "parameters-title" }, "Parameters", -1)),
                        d("div", En, [
                          (g(!0), k(ae, null, oe(de.value, (l) => (g(), k("div", {
                            key: l.index,
                            class: "parameter-item"
                          }, [
                            d("div", An, [
                              d("span", On, S(l.name), 1),
                              l.optional ? (g(), k("span", Pn, "?")) : $("", !0),
                              d("span", Rn, S(l.type), 1)
                            ]),
                            d("div", Sn, [
                              d("div", Un, [
                                d("button", {
                                  class: he(["toggle-btn", { active: se(l.index) === "payload" }]),
                                  onClick: _e((M) => fe(l.index, "payload"), ["stop"]),
                                  type: "button"
                                }, "Payload", 10, Nn),
                                d("button", {
                                  class: he(["toggle-btn", { active: se(l.index) === "manual" }]),
                                  onClick: _e((M) => fe(l.index, "manual"), ["stop"]),
                                  type: "button"
                                }, "Manual", 10, Dn)
                              ]),
                              se(l.index) === "payload" ? (g(), F(f(P), {
                                key: 0,
                                "model-value": $e(l.index),
                                "onUpdate:modelValue": (M) => I(l.index, String(M ?? "")),
                                placeholder: l.optional ? "(optional)" : "Select property",
                                options: pe.value,
                                "label-key": "text",
                                "value-key": "value",
                                clearable: "",
                                class: "parameter-value-input"
                              }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder", "options"])) : (g(), F(f(xe), {
                                key: 1,
                                "model-value": W(l.index),
                                "onUpdate:modelValue": (M) => De(l.index, String(M ?? "")),
                                placeholder: `Enter ${l.type}`,
                                class: "parameter-value-input"
                              }, null, 8, ["model-value", "onUpdate:modelValue", "placeholder"]))
                            ])
                          ]))), 128))
                        ])
                      ])) : $("", !0)
                    ])) : $("", !0)
                  ], 10, _n))), 128))
                ])) : $("", !0)
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]),
      m(f(Ye), {
        modelValue: re.value,
        "onUpdate:modelValue": a[14] || (a[14] = (t) => re.value = t),
        size: "sm",
        onCancel: ge
      }, {
        header: b(() => [
          m(f(Y), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          a[34] || (a[34] = d("h2", { class: "confirm__title" }, "Event-Mapping löschen", -1))
        ]),
        actions: b(() => [
          m(f(j), {
            intent: "quiet",
            onClick: ge
          }, {
            default: b(() => [...a[35] || (a[35] = [
              ee("Abbrechen", -1)
            ])]),
            _: 1
          }),
          m(f(j), {
            intent: "danger",
            onClick: a[13] || (a[13] = (t) => Ne())
          }, {
            default: b(() => [...a[36] || (a[36] = [
              ee("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: b(() => [
          a[37] || (a[37] = d("p", { class: "confirm__text" }, " Möchtest du dieses Event-Mapping wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden. ", -1))
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), jn = (z, G) => {
  const V = z.__vccOpts || z;
  for (const [T, E] of G)
    V[T] = E;
  return V;
}, at = /* @__PURE__ */ jn($n, [["__scopeId", "data-v-371363f0"]]), Ze = "events", ot = "events";
function lt({ services: z }) {
  const G = z.getRequired(nt), V = new xt();
  V.path = "/events", V.name = Ze, V.component = at, G.registerRoute(V);
  const T = z.getRequired(tt), E = new kt();
  E.id = ot, E.label = "Event Manager", E.icon = "event", E.route = "/events", E.routeName = Ze, E.order = 15, E.visible = !0, T.registerNavigationItem(E);
}
function rt({ services: z }) {
  z.getRequired(nt).unregisterRoute(Ze), z.getRequired(tt).unregisterNavigationItem(ot);
}
const zn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI: at,
  activate: lt,
  deactivate: rt
}, Symbol.toStringTag, { value: "Module" })), et = "org.eclipse.daanse.board.app.ui.vue.eventmanager", Gn = "0.0.1-next.1";
async function Zn(z) {
  const G = globalThis.__tsm__;
  if (!G)
    throw new Error(`${et}: tsm runtime is not initialized`);
  G.register(et, zn, Gn, "ui.vue.eventmanager"), await lt?.(z);
}
async function Jn(z) {
  await rt?.(z);
}
export {
  at as EventManagerUI,
  Zn as activate,
  Jn as deactivate
};
