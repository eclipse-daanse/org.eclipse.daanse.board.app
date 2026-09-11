(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".events[data-v-947e3e3d]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.events__head[data-v-947e3e3d],.rules[data-v-947e3e3d],.events__empty[data-v-947e3e3d]{width:100%;max-width:940px}.events__head[data-v-947e3e3d]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.events__title[data-v-947e3e3d]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.events__lead[data-v-947e3e3d]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.events__empty[data-v-947e3e3d]{max-width:52ch;margin:0;padding:20px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}.rules[data-v-947e3e3d]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.rule[data-v-947e3e3d]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:16px;padding:14px 8px 16px 0;border-bottom:1px solid var(--color-divider)}.rule[data-v-947e3e3d]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.rule__clauses[data-v-947e3e3d]{display:flex;flex-direction:column;gap:4px;min-width:0}.clause[data-v-947e3e3d]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;margin:0;line-height:1.5}.clause__word[data-v-947e3e3d]{text-align:right;font-size:var(--text-sm);color:var(--color-dim);padding-top:1px}.clause__body[data-v-947e3e3d]{min-width:0;font-size:var(--text-base)}.clause__subject[data-v-947e3e3d]{font-family:var(--font-mono);overflow-wrap:anywhere}.clause__place[data-v-947e3e3d]{margin-left:10px;color:var(--color-dim)}.rule__tools[data-v-947e3e3d]{display:flex;gap:2px}.form[data-v-947e3e3d]{display:flex;flex-direction:column}.part[data-v-947e3e3d]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;padding:16px 0;border-top:1px solid var(--color-divider)}.part[data-v-947e3e3d]:first-child{border-top:0;padding-top:4px}.part__word[data-v-947e3e3d]{margin:0;text-align:right;font-size:var(--text-sm);font-weight:400;color:var(--color-dim);padding-top:7px}.part__body[data-v-947e3e3d]{display:flex;flex-direction:column;align-items:flex-start;gap:10px;min-width:0}.part__body--row[data-v-947e3e3d]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-end;gap:12px;width:100%}.part__body--row[data-v-947e3e3d]>*{flex:1 1 180px;min-width:0}.part__none[data-v-947e3e3d]{margin:0;font-size:var(--text-base);color:var(--color-dim)}.conditions[data-v-947e3e3d]{display:flex;flex-direction:column;gap:8px;width:100%}.condition[data-v-947e3e3d]{display:flex;align-items:center;gap:8px}.condition[data-v-947e3e3d]>*{flex:1 1 0;min-width:0}.condition__operator[data-v-947e3e3d]{flex:0 0 5rem}.condition>.btn[data-v-947e3e3d],.rule__tools .btn[data-v-947e3e3d]{flex:0 0 auto}.actions[data-v-947e3e3d]{display:flex;flex-direction:column;width:100%;border-top:1px solid var(--color-divider)}.action[data-v-947e3e3d]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:8px;border-bottom:1px solid var(--color-divider)}.action__head[data-v-947e3e3d]{display:flex;align-items:baseline;gap:10px;min-width:0;padding:10px 0;border:0;background:none;text-align:left;cursor:pointer;color:inherit;font-family:inherit}.action__name[data-v-947e3e3d]{font-family:var(--font-mono);font-size:var(--text-base);overflow-wrap:anywhere}.action__place[data-v-947e3e3d]{font-size:var(--text-sm);color:var(--color-dim)}.action__body[data-v-947e3e3d]{grid-column:1 / -1;display:flex;flex-direction:column;gap:14px;padding:4px 0 16px}.action--open[data-v-947e3e3d]{box-shadow:inset 2px 0 0 var(--color-accent);padding-left:10px}.actions[data-v-947e3e3d]:has(>.action:only-child){border-top:0}.action[data-v-947e3e3d]:only-child{border-bottom:0;box-shadow:none;padding-left:0}.action:only-child .action__body[data-v-947e3e3d]{padding-top:0;padding-bottom:0}.params[data-v-947e3e3d]{display:flex;flex-direction:column;gap:10px}.param[data-v-947e3e3d]{display:grid;grid-template-columns:9rem minmax(0,1fr);gap:12px;align-items:center}.param__name[data-v-947e3e3d]{font-family:var(--font-mono);font-size:var(--text-sm);overflow-wrap:anywhere}.param__optional[data-v-947e3e3d]{font-family:var(--font-sans);color:var(--color-dim)}.param__value[data-v-947e3e3d]{display:flex;align-items:center;gap:8px;min-width:0}.param__value[data-v-947e3e3d]>*:last-child{flex:1 1 0;min-width:0}.source[data-v-947e3e3d]{display:inline-flex;flex:0 0 auto;border:1px solid var(--color-outline);border-radius:var(--radius-md);overflow:hidden}.source__side[data-v-947e3e3d]{padding:5px 10px;border:0;background-color:transparent;color:var(--color-dim);font-family:var(--font-sans);font-size:var(--text-sm);cursor:pointer;transition:background-color .12s ease,color .12s ease}.source__side+.source__side[data-v-947e3e3d]{border-left:1px solid var(--color-outline)}.source__side[data-v-947e3e3d]:hover{color:var(--color-fg)}.source__side--on[data-v-947e3e3d]{background-color:var(--color-accent);color:var(--color-onAccent)}.source__side[data-v-947e3e3d]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.confirm__title[data-v-947e3e3d]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-947e3e3d]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.events[data-v-947e3e3d]{padding:20px 16px 32px}.clause[data-v-947e3e3d],.part[data-v-947e3e3d]{grid-template-columns:minmax(0,1fr);gap:2px}.clause__word[data-v-947e3e3d],.part__word[data-v-947e3e3d]{text-align:left;padding-top:0}.param[data-v-947e3e3d]{grid-template-columns:minmax(0,1fr);align-items:start}}\n";})();
import { defineComponent as vt, ref as z, computed as ie, inject as je, onMounted as pt, createElementBlock as I, openBlock as w, createElementVNode as g, createVNode as k, unref as m, withCtx as j, createTextVNode as K, Fragment as me, renderList as we, createCommentVNode as J, toDisplayString as Y, createBlock as oe, normalizeClass as He, withModifiers as Le } from "vue";
import { EVENT_MANAGER as yt, EVENT_REGISTRY as gt, EVENT_ACTIONS_REGISTRY as ht } from "org.eclipse.daanse.board.app.lib.api.events";
import { Comperator as ve, Condition as _t } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as mt } from "org.eclipse.daanse.board.app.lib.api.page";
import { DButton as q, DIcon as ee, DModal as Qe, DSelect as Z, DInput as Ye } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { NAVIGATION_REGISTRY_ID as nt, NavigationItem as wt } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as at, RouteDefinition as kt } from "org.eclipse.daanse.board.app.lib.api.route";
var Xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ke = {};
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
var et;
function Mt() {
  if (et) return Ke;
  et = 1;
  var P;
  return (function(N) {
    (function(b) {
      var x = typeof globalThis == "object" ? globalThis : typeof Xe == "object" ? Xe : typeof self == "object" ? self : typeof this == "object" ? this : Q(), C = B(N);
      typeof x.Reflect < "u" && (C = B(x.Reflect, C)), b(C, x), typeof x.Reflect > "u" && (x.Reflect = N);
      function B(G, W) {
        return function(U, D) {
          Object.defineProperty(G, U, { configurable: !0, writable: !0, value: D }), W && W(U, D);
        };
      }
      function le() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function H() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function Q() {
        return le() || H();
      }
    })(function(b, x) {
      var C = Object.prototype.hasOwnProperty, B = typeof Symbol == "function", le = B && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", H = B && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", Q = typeof Object.create == "function", G = { __proto__: [] } instanceof Array, W = !Q && !G, U = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: Q ? function() {
          return Be(/* @__PURE__ */ Object.create(null));
        } : G ? function() {
          return Be({ __proto__: null });
        } : function() {
          return Be({});
        },
        has: W ? function(e, t) {
          return C.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: W ? function(e, t) {
          return C.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, D = Object.getPrototypeOf(Function), v = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : st(), se = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ut(), ue = typeof WeakMap == "function" ? WeakMap : dt(), V = B ? Symbol.for("@reflect-metadata:registry") : void 0, de = f(), ke = S(de);
      function Ne(e, t, a, o) {
        if (c(a)) {
          if (!Re(e))
            throw new TypeError();
          if (!ge(t))
            throw new TypeError();
          return Ge(e, t);
        } else {
          if (!Re(e))
            throw new TypeError();
          if (!T(t))
            throw new TypeError();
          if (!T(o) && !c(o) && !A(o))
            throw new TypeError();
          return A(o) && (o = void 0), a = $(a), We(e, t, a, o);
        }
      }
      b("decorate", Ne);
      function pe(e, t) {
        function a(o, p) {
          if (!T(o))
            throw new TypeError();
          if (!c(p) && !he(p))
            throw new TypeError();
          ce(e, t, o, p);
        }
        return a;
      }
      b("metadata", pe);
      function Ue(e, t, a, o) {
        if (!T(a))
          throw new TypeError();
        return c(o) || (o = $(o)), ce(e, t, a, o);
      }
      b("defineMetadata", Ue);
      function De(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return c(a) || (a = $(a)), te(e, t, a);
      }
      b("hasMetadata", De);
      function $e(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return c(a) || (a = $(a)), X(e, t, a);
      }
      b("hasOwnMetadata", $e);
      function Me(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return c(a) || (a = $(a)), Ce(e, t, a);
      }
      b("getMetadata", Me);
      function be(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return c(a) || (a = $(a)), Te(e, t, a);
      }
      b("getOwnMetadata", be);
      function ze(e, t) {
        if (!T(e))
          throw new TypeError();
        return c(t) || (t = $(t)), fe(e, t);
      }
      b("getMetadataKeys", ze);
      function ye(e, t) {
        if (!T(e))
          throw new TypeError();
        return c(t) || (t = $(t)), Ee(e, t);
      }
      b("getOwnMetadataKeys", ye);
      function xe(e, t, a) {
        if (!T(t))
          throw new TypeError();
        if (c(a) || (a = $(a)), !T(t))
          throw new TypeError();
        c(a) || (a = $(a));
        var o = re(
          t,
          a,
          /*Create*/
          !1
        );
        return c(o) ? !1 : o.OrdinaryDeleteMetadata(e, t, a);
      }
      b("deleteMetadata", xe);
      function Ge(e, t) {
        for (var a = e.length - 1; a >= 0; --a) {
          var o = e[a], p = o(t);
          if (!c(p) && !A(p)) {
            if (!ge(p))
              throw new TypeError();
            t = p;
          }
        }
        return t;
      }
      function We(e, t, a, o) {
        for (var p = e.length - 1; p >= 0; --p) {
          var E = e[p], R = E(t, a, o);
          if (!c(R) && !A(R)) {
            if (!T(R))
              throw new TypeError();
            o = R;
          }
        }
        return o;
      }
      function te(e, t, a) {
        var o = X(e, t, a);
        if (o)
          return !0;
        var p = n(t);
        return A(p) ? !1 : te(e, p, a);
      }
      function X(e, t, a) {
        var o = re(
          t,
          a,
          /*Create*/
          !1
        );
        return c(o) ? !1 : Ve(o.OrdinaryHasOwnMetadata(e, t, a));
      }
      function Ce(e, t, a) {
        var o = X(e, t, a);
        if (o)
          return Te(e, t, a);
        var p = n(t);
        if (!A(p))
          return Ce(e, p, a);
      }
      function Te(e, t, a) {
        var o = re(
          t,
          a,
          /*Create*/
          !1
        );
        if (!c(o))
          return o.OrdinaryGetOwnMetadata(e, t, a);
      }
      function ce(e, t, a, o) {
        var p = re(
          a,
          o,
          /*Create*/
          !0
        );
        p.OrdinaryDefineOwnMetadata(e, t, a, o);
      }
      function fe(e, t) {
        var a = Ee(e, t), o = n(e);
        if (o === null)
          return a;
        var p = fe(o, t);
        if (p.length <= 0)
          return a;
        if (a.length <= 0)
          return p;
        for (var E = new se(), R = [], h = 0, l = a; h < l.length; h++) {
          var s = l[h], u = E.has(s);
          u || (E.add(s), R.push(s));
        }
        for (var d = 0, _ = p; d < _.length; d++) {
          var s = _[d], u = E.has(s);
          u || (E.add(s), R.push(s));
        }
        return R;
      }
      function Ee(e, t) {
        var a = re(
          e,
          t,
          /*create*/
          !1
        );
        return a ? a.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function Oe(e) {
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
      function A(e) {
        return e === null;
      }
      function Fe(e) {
        return typeof e == "symbol";
      }
      function T(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function ne(e, t) {
        switch (Oe(e)) {
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
        var a = "string", o = Ae(e, le);
        if (o !== void 0) {
          var p = o.call(e, a);
          if (T(p))
            throw new TypeError();
          return p;
        }
        return Ie(e);
      }
      function Ie(e, t) {
        var a, o, p;
        {
          var E = e.toString;
          if (ae(E)) {
            var o = E.call(e);
            if (!T(o))
              return o;
          }
          var a = e.valueOf;
          if (ae(a)) {
            var o = a.call(e);
            if (!T(o))
              return o;
          }
        }
        throw new TypeError();
      }
      function Ve(e) {
        return !!e;
      }
      function qe(e) {
        return "" + e;
      }
      function $(e) {
        var t = ne(e);
        return Fe(t) ? t : qe(t);
      }
      function Re(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function ae(e) {
        return typeof e == "function";
      }
      function ge(e) {
        return typeof e == "function";
      }
      function he(e) {
        switch (Oe(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function _e(e, t) {
        return e === t || e !== e && t !== t;
      }
      function Ae(e, t) {
        var a = e[t];
        if (a != null) {
          if (!ae(a))
            throw new TypeError();
          return a;
        }
      }
      function Se(e) {
        var t = Ae(e, H);
        if (!ae(t))
          throw new TypeError();
        var a = t.call(e);
        if (!T(a))
          throw new TypeError();
        return a;
      }
      function Pe(e) {
        return e.value;
      }
      function i(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function r(e) {
        var t = e.return;
        t && t.call(e);
      }
      function n(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === D || t !== D)
          return t;
        var a = e.prototype, o = a && Object.getPrototypeOf(a);
        if (o == null || o === Object.prototype)
          return t;
        var p = o.constructor;
        return typeof p != "function" || p === e ? t : p;
      }
      function y() {
        var e;
        !c(V) && typeof x.Reflect < "u" && !(V in x.Reflect) && typeof x.Reflect.defineMetadata == "function" && (e = L(x.Reflect));
        var t, a, o, p = new ue(), E = {
          registerProvider: R,
          getProvider: l,
          setProvider: u
        };
        return E;
        function R(d) {
          if (!Object.isExtensible(E))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === d:
              break;
            case c(t):
              t = d;
              break;
            case t === d:
              break;
            case c(a):
              a = d;
              break;
            case a === d:
              break;
            default:
              o === void 0 && (o = new se()), o.add(d);
              break;
          }
        }
        function h(d, _) {
          if (!c(t)) {
            if (t.isProviderFor(d, _))
              return t;
            if (!c(a)) {
              if (a.isProviderFor(d, _))
                return t;
              if (!c(o))
                for (var M = Se(o); ; ) {
                  var O = i(M);
                  if (!O)
                    return;
                  var F = Pe(O);
                  if (F.isProviderFor(d, _))
                    return r(M), F;
                }
            }
          }
          if (!c(e) && e.isProviderFor(d, _))
            return e;
        }
        function l(d, _) {
          var M = p.get(d), O;
          return c(M) || (O = M.get(_)), c(O) && (O = h(d, _), c(O) || (c(M) && (M = new v(), p.set(d, M)), M.set(_, O))), O;
        }
        function s(d) {
          if (c(d))
            throw new TypeError();
          return t === d || a === d || !c(o) && o.has(d);
        }
        function u(d, _, M) {
          if (!s(M))
            throw new Error("Metadata provider not registered.");
          var O = l(d, _);
          if (O !== M) {
            if (!c(O))
              return !1;
            var F = p.get(d);
            c(F) && (F = new v(), p.set(d, F)), F.set(_, M);
          }
          return !0;
        }
      }
      function f() {
        var e;
        return !c(V) && T(x.Reflect) && Object.isExtensible(x.Reflect) && (e = x.Reflect[V]), c(e) && (e = y()), !c(V) && T(x.Reflect) && Object.isExtensible(x.Reflect) && Object.defineProperty(x.Reflect, V, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function S(e) {
        var t = new ue(), a = {
          isProviderFor: function(s, u) {
            var d = t.get(s);
            return c(d) ? !1 : d.has(u);
          },
          OrdinaryDefineOwnMetadata: R,
          OrdinaryHasOwnMetadata: p,
          OrdinaryGetOwnMetadata: E,
          OrdinaryOwnMetadataKeys: h,
          OrdinaryDeleteMetadata: l
        };
        return de.registerProvider(a), a;
        function o(s, u, d) {
          var _ = t.get(s), M = !1;
          if (c(_)) {
            if (!d)
              return;
            _ = new v(), t.set(s, _), M = !0;
          }
          var O = _.get(u);
          if (c(O)) {
            if (!d)
              return;
            if (O = new v(), _.set(u, O), !e.setProvider(s, u, a))
              throw _.delete(u), M && t.delete(s), new Error("Wrong provider for target.");
          }
          return O;
        }
        function p(s, u, d) {
          var _ = o(
            u,
            d,
            /*Create*/
            !1
          );
          return c(_) ? !1 : Ve(_.has(s));
        }
        function E(s, u, d) {
          var _ = o(
            u,
            d,
            /*Create*/
            !1
          );
          if (!c(_))
            return _.get(s);
        }
        function R(s, u, d, _) {
          var M = o(
            d,
            _,
            /*Create*/
            !0
          );
          M.set(s, u);
        }
        function h(s, u) {
          var d = [], _ = o(
            s,
            u,
            /*Create*/
            !1
          );
          if (c(_))
            return d;
          for (var M = _.keys(), O = Se(M), F = 0; ; ) {
            var Je = i(O);
            if (!Je)
              return d.length = F, d;
            var ct = Pe(Je);
            try {
              d[F] = ct;
            } catch (ft) {
              try {
                r(O);
              } finally {
                throw ft;
              }
            }
            F++;
          }
        }
        function l(s, u, d) {
          var _ = o(
            u,
            d,
            /*Create*/
            !1
          );
          if (c(_) || !_.delete(s))
            return !1;
          if (_.size === 0) {
            var M = t.get(u);
            c(M) || (M.delete(d), M.size === 0 && t.delete(M));
          }
          return !0;
        }
      }
      function L(e) {
        var t = e.defineMetadata, a = e.hasOwnMetadata, o = e.getOwnMetadata, p = e.getOwnMetadataKeys, E = e.deleteMetadata, R = new ue(), h = {
          isProviderFor: function(l, s) {
            var u = R.get(l);
            return !c(u) && u.has(s) ? !0 : p(l, s).length ? (c(u) && (u = new se(), R.set(l, u)), u.add(s), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: a,
          OrdinaryGetOwnMetadata: o,
          OrdinaryOwnMetadataKeys: p,
          OrdinaryDeleteMetadata: E
        };
        return h;
      }
      function re(e, t, a) {
        var o = de.getProvider(e, t);
        if (!c(o))
          return o;
        if (a) {
          if (de.setProvider(e, t, ke))
            return ke;
          throw new Error("Illegal state.");
        }
      }
      function st() {
        var e = {}, t = [], a = (
          /** @class */
          (function() {
            function h(l, s, u) {
              this._index = 0, this._keys = l, this._values = s, this._selector = u;
            }
            return h.prototype["@@iterator"] = function() {
              return this;
            }, h.prototype[H] = function() {
              return this;
            }, h.prototype.next = function() {
              var l = this._index;
              if (l >= 0 && l < this._keys.length) {
                var s = this._selector(this._keys[l], this._values[l]);
                return l + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: s, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, h.prototype.throw = function(l) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), l;
            }, h.prototype.return = function(l) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: l, done: !0 };
            }, h;
          })()
        ), o = (
          /** @class */
          (function() {
            function h() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(h.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), h.prototype.has = function(l) {
              return this._find(
                l,
                /*insert*/
                !1
              ) >= 0;
            }, h.prototype.get = function(l) {
              var s = this._find(
                l,
                /*insert*/
                !1
              );
              return s >= 0 ? this._values[s] : void 0;
            }, h.prototype.set = function(l, s) {
              var u = this._find(
                l,
                /*insert*/
                !0
              );
              return this._values[u] = s, this;
            }, h.prototype.delete = function(l) {
              var s = this._find(
                l,
                /*insert*/
                !1
              );
              if (s >= 0) {
                for (var u = this._keys.length, d = s + 1; d < u; d++)
                  this._keys[d - 1] = this._keys[d], this._values[d - 1] = this._values[d];
                return this._keys.length--, this._values.length--, _e(l, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, h.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, h.prototype.keys = function() {
              return new a(this._keys, this._values, p);
            }, h.prototype.values = function() {
              return new a(this._keys, this._values, E);
            }, h.prototype.entries = function() {
              return new a(this._keys, this._values, R);
            }, h.prototype["@@iterator"] = function() {
              return this.entries();
            }, h.prototype[H] = function() {
              return this.entries();
            }, h.prototype._find = function(l, s) {
              if (!_e(this._cacheKey, l)) {
                this._cacheIndex = -1;
                for (var u = 0; u < this._keys.length; u++)
                  if (_e(this._keys[u], l)) {
                    this._cacheIndex = u;
                    break;
                  }
              }
              return this._cacheIndex < 0 && s && (this._cacheIndex = this._keys.length, this._keys.push(l), this._values.push(void 0)), this._cacheIndex;
            }, h;
          })()
        );
        return o;
        function p(h, l) {
          return h;
        }
        function E(h, l) {
          return l;
        }
        function R(h, l) {
          return [h, l];
        }
      }
      function ut() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new v();
            }
            return Object.defineProperty(t.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), t.prototype.has = function(a) {
              return this._map.has(a);
            }, t.prototype.add = function(a) {
              return this._map.set(a, a), this;
            }, t.prototype.delete = function(a) {
              return this._map.delete(a);
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
            }, t.prototype[H] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function dt() {
        var e = 16, t = U.create(), a = o();
        return (
          /** @class */
          (function() {
            function l() {
              this._key = o();
            }
            return l.prototype.has = function(s) {
              var u = p(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? U.has(u, this._key) : !1;
            }, l.prototype.get = function(s) {
              var u = p(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? U.get(u, this._key) : void 0;
            }, l.prototype.set = function(s, u) {
              var d = p(
                s,
                /*create*/
                !0
              );
              return d[this._key] = u, this;
            }, l.prototype.delete = function(s) {
              var u = p(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? delete u[this._key] : !1;
            }, l.prototype.clear = function() {
              this._key = o();
            }, l;
          })()
        );
        function o() {
          var l;
          do
            l = "@@WeakMap@@" + h();
          while (U.has(t, l));
          return t[l] = !0, l;
        }
        function p(l, s) {
          if (!C.call(l, a)) {
            if (!s)
              return;
            Object.defineProperty(l, a, { value: U.create() });
          }
          return l[a];
        }
        function E(l, s) {
          for (var u = 0; u < s; ++u)
            l[u] = Math.random() * 255 | 0;
          return l;
        }
        function R(l) {
          if (typeof Uint8Array == "function") {
            var s = new Uint8Array(l);
            return typeof crypto < "u" ? crypto.getRandomValues(s) : typeof msCrypto < "u" ? msCrypto.getRandomValues(s) : E(s, l), s;
          }
          return E(new Array(l), l);
        }
        function h() {
          var l = R(e);
          l[6] = l[6] & 79 | 64, l[8] = l[8] & 191 | 128;
          for (var s = "", u = 0; u < e; ++u) {
            var d = l[u];
            (u === 4 || u === 6 || u === 8) && (s += "-"), d < 16 && (s += "0"), s += d.toString(16).toLowerCase();
          }
          return s;
        }
      }
      function Be(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(P || (P = {})), Ke;
}
Mt();
const bt = { class: "events" }, xt = { class: "events__head" }, Ct = {
  key: 0,
  class: "rules"
}, Tt = { class: "rule__clauses" }, Et = { class: "clause" }, Ot = { class: "clause__body" }, It = { class: "clause__subject" }, Vt = { class: "clause__place" }, Rt = {
  key: 0,
  class: "clause"
}, At = { class: "clause__body" }, St = { class: "clause__subject" }, Pt = { class: "clause__word" }, jt = { class: "clause__body" }, Nt = { class: "clause__subject" }, Ut = { class: "clause__place" }, Dt = { class: "rule__tools" }, $t = {
  key: 1,
  class: "events__empty"
}, zt = { class: "form" }, Gt = { class: "part" }, Wt = { class: "part__body part__body--row" }, Ft = { class: "part" }, qt = { class: "part__body" }, Bt = {
  key: 0,
  class: "conditions"
}, Ht = {
  key: 1,
  class: "part__none"
}, Lt = { class: "part" }, Yt = { class: "part__body" }, Zt = {
  key: 0,
  class: "actions"
}, Jt = ["onClick"], Qt = { class: "action__name" }, Xt = { class: "action__place" }, Kt = {
  key: 2,
  class: "action__body"
}, en = { class: "part__body--row" }, tn = {
  key: 0,
  class: "params"
}, nn = { class: "param__name" }, an = {
  key: 0,
  class: "param__optional"
}, rn = { class: "param__value" }, on = ["aria-label"], ln = ["aria-pressed", "onClick"], sn = ["aria-pressed", "onClick"], un = /* @__PURE__ */ vt({
  __name: "EventManagerUI",
  setup(P) {
    let N, b, x, C;
    const B = z([]), le = z([]), H = z([]), Q = z([]), G = z(!1), W = z(!1), U = z(null), D = z(0), v = z({
      context: "widget",
      conditions: [],
      actions: [{
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }]
    }), se = [
      { text: "System", value: "system" },
      { text: "Seite", value: "page" },
      { text: "Widget", value: "widget" }
    ], ue = [
      { text: "==", value: ve.eq },
      { text: "!=", value: ve.neq },
      { text: "<", value: ve.lt },
      { text: "<=", value: ve.lte },
      { text: ">", value: ve.gt },
      { text: ">=", value: ve.gte }
    ], V = ie(() => !v.value.actions || v.value.actions.length === 0 ? null : v.value.actions[D.value]), de = () => {
      v.value.actions || (v.value.actions = []), v.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }), D.value = v.value.actions.length - 1, c.value.clear(), A.value.clear();
    }, ke = (i) => {
      v.value.actions && (v.value.actions.splice(i, 1), D.value >= v.value.actions.length && (D.value = Math.max(0, v.value.actions.length - 1)), c.value.clear(), A.value.clear());
    }, Ne = (i) => {
      D.value = i, c.value.clear(), A.value.clear();
      const r = v.value.actions?.[i];
      r && (r.payloadMapping && r.payloadMapping.forEach((n) => {
        c.value.set(n.argIndex, "payload");
      }), r.actionArgs && r.actionArgs.forEach((n, y) => {
        n !== void 0 && !r.payloadMapping?.some((f) => f.argIndex === y) && (c.value.set(y, "manual"), A.value.set(y, String(n)));
      }));
    }, pe = () => {
      B.value = N.getAllMappings();
    }, Ue = () => {
      le.value = b.getAllEvents();
    }, De = () => {
      H.value = x.getWidgetTypes();
    }, $e = () => {
      Q.value = C.getAllPageIds();
    }, Me = ie(() => {
      if (!v.value.eventType) return [];
      try {
        return b.extractPayloadPropertiesForEvent(v.value.eventType).map((r) => ({
          text: `${r.name}: ${r.type}${r.optional ? "?" : ""}`,
          value: r.name
        }));
      } catch (i) {
        return console.error("❌ Error extracting properties from Ecore:", i), [];
      }
    }), be = ie(() => {
      if (!V.value?.targetContext) return [];
      const i = V.value.targetContext, r = [];
      for (const n of H.value) {
        const y = n.context !== void 0, f = n.context || "widget";
        let S = !1;
        if (y ? S = f === i : S = i === "system" && n.widgetType.includes("System") || i === "page" && n.widgetType.includes("Page") || i === "widget" && !n.widgetType.includes("System") && !n.widgetType.includes("Page"), S)
          for (const L of n.actions) {
            const re = i === "widget" ? `${n.widgetType}.` : "";
            r.push({
              text: `${re}${L.methodName}`,
              value: L.methodName,
              parameters: L.parameters,
              widgetType: n.widgetType
            });
          }
      }
      return r;
    }), ze = ie(() => {
      if (!V.value?.actionName) return [];
      const i = be.value.find((n) => n.value === V.value?.actionName);
      if (!i?.widgetType) return [];
      const r = x?.getRegisteredInstances(i.widgetType) || [];
      return [
        { text: "alle Instanzen", value: "" },
        ...r.map((n) => ({
          text: `${n.instanceId} (${n.widgetType})`,
          value: n.instanceId
        }))
      ];
    }), ye = ie(() => {
      if (!V.value?.actionName || !V.value?.targetContext) return [];
      const i = V.value.targetContext, r = H.value.filter((n) => {
        const y = n.context !== void 0, f = n.context || "widget";
        return y ? f === i : i === "system" && n.widgetType.includes("System") || i === "page" && n.widgetType.includes("Page") || i === "widget" && !n.widgetType.includes("System") && !n.widgetType.includes("Page");
      });
      for (const n of r) {
        const y = n.actions.find((f) => f.methodName === V.value?.actionName);
        if (y && y.parameters)
          return y.parameters.map((f, S) => {
            const L = f.match(/^(\w+)(\?)?:\s*(.+)$/);
            return L ? {
              name: L[1],
              optional: !!L[2],
              type: L[3],
              index: S
            } : {
              name: `arg${S}`,
              optional: !1,
              type: "any",
              index: S
            };
          });
      }
      return [];
    }), xe = (i) => i.actions && i.actions.length > 0 ? i.actions : i.actionName ? [{
      targetContext: i.targetContext,
      targetContextId: i.targetContextId,
      actionName: i.actionName,
      actionArgs: i.actionArgs,
      payloadMapping: i.payloadMapping
    }] : [], Ge = () => {
      if (!v.value.eventType)
        return;
      const i = v.value.actions?.filter((n) => n.actionName) || [];
      if (i.length === 0)
        return;
      const r = {
        id: U.value || `mapping-${Date.now()}`,
        context: v.value.context,
        contextId: v.value.contextId,
        eventType: v.value.eventType,
        conditions: v.value.conditions || [],
        actions: i
      };
      U.value && N.unregisterMapping(U.value), N.registerMapping(r), pe(), fe(), G.value = !1, W.value = !1, U.value = null;
    }, We = (i) => {
      U.value = i.id;
      const r = xe(i);
      v.value = {
        context: i.context,
        contextId: i.contextId,
        eventType: i.eventType,
        conditions: i.conditions || [],
        actions: r.length > 0 ? r : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, D.value = 0, c.value.clear(), A.value.clear();
      const n = v.value.actions?.[0];
      n && (n.payloadMapping && n.payloadMapping.forEach((y) => {
        c.value.set(y.argIndex, "payload");
      }), n.actionArgs && n.actionArgs.forEach((y, f) => {
        y !== void 0 && !n.payloadMapping?.some((S) => S.argIndex === f) && (c.value.set(f, "manual"), A.value.set(f, String(y)));
      })), W.value = !0;
    }, te = z(!1), X = z(null), Ce = (i) => {
      X.value = i, te.value = !0;
    }, Te = () => {
      X.value && (N.unregisterMapping(X.value), pe()), ce();
    }, ce = () => {
      te.value = !1, X.value = null;
    }, fe = () => {
      v.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, U.value = null, D.value = 0, c.value.clear(), A.value.clear();
    }, Ee = () => {
      v.value.conditions || (v.value.conditions = []), v.value.conditions.push(new _t());
    }, Oe = (i) => {
      v.value.conditions?.splice(i, 1);
    }, c = z(/* @__PURE__ */ new Map()), A = z(/* @__PURE__ */ new Map()), Fe = (i, r) => {
      const n = V.value;
      n && (n.payloadMapping || (n.payloadMapping = []), n.payloadMapping = n.payloadMapping.filter(
        (y) => y.argIndex !== i
      ), r && n.payloadMapping.push({
        payloadPath: r,
        argIndex: i
      }));
    }, T = (i, r) => {
      A.value.set(i, r);
      const n = V.value;
      if (!n) return;
      for (n.actionArgs || (n.actionArgs = []); n.actionArgs.length <= i; )
        n.actionArgs.push(void 0);
      const y = ye.value.find((f) => f.index === i);
      y && (y.type === "number" || y.type.includes("number") ? n.actionArgs[i] = parseFloat(r) || 0 : y.type === "boolean" ? n.actionArgs[i] = r === "true" : n.actionArgs[i] = r);
    }, ne = (i) => c.value.get(i) || "payload", Ie = (i, r) => {
      c.value.set(i, r);
      const n = V.value;
      n && (r === "manual" ? n.payloadMapping && (n.payloadMapping = n.payloadMapping.filter(
        (y) => y.argIndex !== i
      )) : (A.value.delete(i), n.actionArgs && n.actionArgs[i] !== void 0 && (n.actionArgs[i] = void 0)));
    }, Ve = (i) => {
      const r = V.value;
      return r?.payloadMapping && r.payloadMapping.find((y) => y.argIndex === i)?.payloadPath || "";
    }, qe = (i) => A.value.get(i) || "", $ = (i) => !i || i.length === 0 ? "" : i.map((r) => {
      const n = ue.find((y) => y.value === r.comperator)?.text ?? r.comperator;
      return [r.prop, n, r.value].filter((y) => y !== void 0 && y !== "").join(" ");
    }).join(" und "), Re = (i) => i.context === "system" ? "im System" : i.context === "page" ? i.contextId ? `auf Seite ${i.contextId}` : "auf jeder Seite" : i.contextId ? `an ${i.contextId}` : "an jedem Widget dieser Art", ae = (i) => i.targetContext === "system" ? "im System" : i.targetContext === "page" ? i.targetContextId ? `auf Seite ${i.targetContextId}` : "auf jeder Seite" : i.targetContextId ? `an ${i.targetContextId}` : "an allen Instanzen", ge = ie(() => W.value), he = ie({
      get: () => G.value || W.value,
      set: (i) => {
        i || (G.value = !1, W.value = !1);
      }
    }), _e = je(yt), Ae = je(gt), Se = je(ht), Pe = je(mt);
    return pt(() => {
      N = _e, b = Ae, x = Se, C = Pe, pe(), Ue(), De(), $e();
    }), (i, r) => (w(), I("div", bt, [
      g("header", xt, [
        r[10] || (r[10] = g("div", null, [
          g("h1", { class: "events__title" }, "Ereignisse"),
          g("p", { class: "events__lead" }, " Eine Regel verbindet, was auf einem Board geschieht, mit dem, was daraufhin geschehen soll. ")
        ], -1)),
        k(m(q), {
          intent: "primary",
          onClick: r[0] || (r[0] = (n) => G.value = !0)
        }, {
          default: j(() => [
            k(m(ee), {
              name: "add",
              size: "sm"
            }),
            r[9] || (r[9] = K("Regel anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      B.value.length ? (w(), I("ul", Ct, [
        (w(!0), I(me, null, we(B.value, (n) => (w(), I("li", {
          key: n.id,
          class: "rule"
        }, [
          g("div", Tt, [
            g("p", Et, [
              r[11] || (r[11] = g("span", { class: "clause__word" }, "Wenn", -1)),
              g("span", Ot, [
                g("span", It, Y(n.eventType || "irgendein Ereignis"), 1),
                g("span", Vt, Y(Re(n)), 1)
              ])
            ]),
            $(n.conditions) ? (w(), I("p", Rt, [
              r[12] || (r[12] = g("span", { class: "clause__word" }, "Falls", -1)),
              g("span", At, [
                g("span", St, Y($(n.conditions)), 1)
              ])
            ])) : J("", !0),
            (w(!0), I(me, null, we(xe(n), (y, f) => (w(), I("p", {
              key: f,
              class: "clause"
            }, [
              g("span", Pt, Y(f === 0 ? "Dann" : "und"), 1),
              g("span", jt, [
                g("span", Nt, Y(y.actionName || "noch keine Aktion"), 1),
                g("span", Ut, Y(ae(y)), 1)
              ])
            ]))), 128))
          ]),
          g("div", Dt, [
            k(m(q), {
              intent: "quiet",
              size: "sm",
              title: "Regel bearbeiten",
              onClick: (y) => We(n)
            }, {
              default: j(() => [
                k(m(ee), {
                  name: "edit",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["onClick"]),
            k(m(q), {
              intent: "quiet",
              size: "sm",
              title: "Regel löschen",
              onClick: (y) => Ce(n.id)
            }, {
              default: j(() => [
                k(m(ee), {
                  name: "delete",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]))), 128))
      ])) : (w(), I("p", $t, " Noch keine Regel. Eine beginnt mit einem Ereignis — ein Klick auf ein Widget, eine Zeile in einer Tabelle — und endet in einer Aktion auf einem anderen. ")),
      k(m(Qe), {
        modelValue: he.value,
        "onUpdate:modelValue": r[6] || (r[6] = (n) => he.value = n),
        title: ge.value ? "Regel bearbeiten" : "Regel anlegen",
        size: "lg",
        onCancel: fe
      }, {
        actions: j(() => [
          k(m(q), {
            intent: "quiet",
            onClick: r[5] || (r[5] = (n) => {
              he.value = !1, fe();
            })
          }, {
            default: j(() => [...r[18] || (r[18] = [
              K("Abbrechen", -1)
            ])]),
            _: 1
          }),
          k(m(q), {
            intent: "primary",
            onClick: Ge
          }, {
            default: j(() => [
              K(Y(ge.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: j(() => [
          g("div", zt, [
            g("section", Gt, [
              r[13] || (r[13] = g("h3", { class: "part__word" }, "Wenn", -1)),
              g("div", Wt, [
                k(m(Z), {
                  modelValue: v.value.context,
                  "onUpdate:modelValue": r[1] || (r[1] = (n) => v.value.context = n),
                  label: "Kontext",
                  stacked: "",
                  options: se,
                  "label-key": "text",
                  "value-key": "value"
                }, null, 8, ["modelValue"]),
                v.value.context === "page" ? (w(), oe(m(Z), {
                  key: 0,
                  modelValue: v.value.contextId,
                  "onUpdate:modelValue": r[2] || (r[2] = (n) => v.value.contextId = n),
                  label: "Seite",
                  stacked: "",
                  options: [{ text: "jede Seite", value: "" }, ...Q.value.map((n) => ({ text: n, value: n }))],
                  "label-key": "text",
                  "value-key": "value",
                  clearable: ""
                }, null, 8, ["modelValue", "options"])) : v.value.context === "widget" ? (w(), oe(m(Ye), {
                  key: 1,
                  modelValue: v.value.contextId,
                  "onUpdate:modelValue": r[3] || (r[3] = (n) => v.value.contextId = n),
                  label: "Widget",
                  stacked: "",
                  placeholder: "Kennung, leer für jedes"
                }, null, 8, ["modelValue"])) : J("", !0),
                k(m(Z), {
                  modelValue: v.value.eventType,
                  "onUpdate:modelValue": r[4] || (r[4] = (n) => v.value.eventType = n),
                  label: "Ereignis",
                  stacked: "",
                  options: le.value,
                  "label-key": "type",
                  "value-key": "type"
                }, null, 8, ["modelValue", "options"])
              ])
            ]),
            g("section", Ft, [
              r[15] || (r[15] = g("h3", { class: "part__word" }, "Falls", -1)),
              g("div", qt, [
                v.value.conditions && v.value.conditions.length ? (w(), I("div", Bt, [
                  (w(!0), I(me, null, we(v.value.conditions, (n, y) => (w(), I("div", {
                    key: y,
                    class: "condition"
                  }, [
                    k(m(Z), {
                      modelValue: n.prop,
                      "onUpdate:modelValue": (f) => n.prop = f,
                      placeholder: "Eigenschaft",
                      options: Me.value,
                      "label-key": "text",
                      "value-key": "value"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    k(m(Z), {
                      modelValue: n.comperator,
                      "onUpdate:modelValue": (f) => n.comperator = f,
                      options: ue,
                      "label-key": "text",
                      "value-key": "value",
                      class: "condition__operator"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    k(m(Ye), {
                      modelValue: n.value,
                      "onUpdate:modelValue": (f) => n.value = f,
                      placeholder: "Wert"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    k(m(q), {
                      intent: "quiet",
                      size: "sm",
                      title: "Bedingung entfernen",
                      onClick: (f) => Oe(y)
                    }, {
                      default: j(() => [
                        k(m(ee), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128))
                ])) : (w(), I("p", Ht, "Ohne Bedingung läuft die Regel jedes Mal.")),
                k(m(q), {
                  size: "sm",
                  intent: "quiet",
                  onClick: Ee
                }, {
                  default: j(() => [
                    k(m(ee), {
                      name: "add",
                      size: "sm"
                    }),
                    r[14] || (r[14] = K("Bedingung ", -1))
                  ]),
                  _: 1
                })
              ])
            ]),
            g("section", Lt, [
              r[17] || (r[17] = g("h3", { class: "part__word" }, "Dann", -1)),
              g("div", Yt, [
                v.value.actions && v.value.actions.length ? (w(), I("div", Zt, [
                  (w(!0), I(me, null, we(v.value.actions, (n, y) => (w(), I("div", {
                    key: y,
                    class: He(["action", { "action--open": D.value === y }])
                  }, [
                    v.value.actions.length > 1 ? (w(), I("button", {
                      key: 0,
                      type: "button",
                      class: "action__head",
                      onClick: (f) => Ne(y)
                    }, [
                      g("span", Qt, Y(n.actionName || "Aktion wählen"), 1),
                      g("span", Xt, Y(ae(n)), 1)
                    ], 8, Jt)) : J("", !0),
                    v.value.actions.length > 1 ? (w(), oe(m(q), {
                      key: 1,
                      intent: "quiet",
                      size: "sm",
                      title: "Aktion entfernen",
                      onClick: Le((f) => ke(y), ["stop"])
                    }, {
                      default: j(() => [
                        k(m(ee), {
                          name: "close",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : J("", !0),
                    D.value === y ? (w(), I("div", Kt, [
                      g("div", en, [
                        k(m(Z), {
                          modelValue: n.targetContext,
                          "onUpdate:modelValue": (f) => n.targetContext = f,
                          label: "Kontext",
                          stacked: "",
                          options: se,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        n.targetContext === "page" ? (w(), oe(m(Z), {
                          key: 0,
                          modelValue: n.targetContextId,
                          "onUpdate:modelValue": (f) => n.targetContextId = f,
                          label: "Seite",
                          stacked: "",
                          options: [{ text: "jede Seite", value: "" }, ...Q.value.map((f) => ({ text: f, value: f }))],
                          "label-key": "text",
                          "value-key": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : n.targetContext === "widget" || n.targetContext === "system" ? (w(), oe(m(Z), {
                          key: 1,
                          modelValue: n.targetContextId,
                          "onUpdate:modelValue": (f) => n.targetContextId = f,
                          label: "Ziel",
                          stacked: "",
                          options: ze.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: "",
                          placeholder: "alle Instanzen"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : J("", !0),
                        k(m(Z), {
                          modelValue: n.actionName,
                          "onUpdate:modelValue": (f) => n.actionName = f,
                          label: "Aktion",
                          stacked: "",
                          options: be.value,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      ye.value.length ? (w(), I("div", tn, [
                        (w(!0), I(me, null, we(ye.value, (f) => (w(), I("div", {
                          key: f.index,
                          class: "param"
                        }, [
                          g("span", nn, [
                            K(Y(f.name), 1),
                            f.optional ? (w(), I("span", an, ", wahlweise")) : J("", !0)
                          ]),
                          g("div", rn, [
                            g("div", {
                              class: "source",
                              role: "group",
                              "aria-label": `Wert für ${f.name}`
                            }, [
                              g("button", {
                                type: "button",
                                class: He(["source__side", { "source__side--on": ne(f.index) === "payload" }]),
                                "aria-pressed": ne(f.index) === "payload",
                                onClick: Le((S) => Ie(f.index, "payload"), ["stop"])
                              }, " aus dem Ereignis ", 10, ln),
                              g("button", {
                                type: "button",
                                class: He(["source__side", { "source__side--on": ne(f.index) === "manual" }]),
                                "aria-pressed": ne(f.index) === "manual",
                                onClick: Le((S) => Ie(f.index, "manual"), ["stop"])
                              }, " fester Wert ", 10, sn)
                            ], 8, on),
                            ne(f.index) === "payload" ? (w(), oe(m(Z), {
                              key: 0,
                              "model-value": Ve(f.index),
                              options: Me.value,
                              "label-key": "text",
                              "value-key": "value",
                              placeholder: f.optional ? "wahlweise" : "Eigenschaft wählen",
                              clearable: "",
                              "onUpdate:modelValue": (S) => Fe(f.index, String(S ?? ""))
                            }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : (w(), oe(m(Ye), {
                              key: 1,
                              "model-value": qe(f.index),
                              placeholder: f.type,
                              "onUpdate:modelValue": (S) => T(f.index, String(S ?? ""))
                            }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"]))
                          ])
                        ]))), 128))
                      ])) : J("", !0)
                    ])) : J("", !0)
                  ], 2))), 128))
                ])) : J("", !0),
                k(m(q), {
                  size: "sm",
                  intent: "quiet",
                  onClick: de
                }, {
                  default: j(() => [
                    k(m(ee), {
                      name: "add",
                      size: "sm"
                    }),
                    r[16] || (r[16] = K("Aktion ", -1))
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      k(m(Qe), {
        modelValue: te.value,
        "onUpdate:modelValue": r[8] || (r[8] = (n) => te.value = n),
        size: "sm",
        onCancel: ce
      }, {
        header: j(() => [
          k(m(ee), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          r[19] || (r[19] = g("h2", { class: "confirm__title" }, "Regel löschen", -1))
        ]),
        actions: j(() => [
          k(m(q), {
            intent: "quiet",
            onClick: ce
          }, {
            default: j(() => [...r[20] || (r[20] = [
              K("Abbrechen", -1)
            ])]),
            _: 1
          }),
          k(m(q), {
            intent: "danger",
            onClick: r[7] || (r[7] = (n) => Te())
          }, {
            default: j(() => [...r[21] || (r[21] = [
              K("Löschen", -1)
            ])]),
            _: 1
          })
        ]),
        default: j(() => [
          r[22] || (r[22] = g("p", { class: "confirm__text" }, " Die Regel wird entfernt. Das lässt sich nicht rückgängig machen. ", -1))
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), dn = (P, N) => {
  const b = P.__vccOpts || P;
  for (const [x, C] of N)
    b[x] = C;
  return b;
}, rt = /* @__PURE__ */ dn(un, [["__scopeId", "data-v-947e3e3d"]]), Ze = "events", it = "events";
function ot({ services: P }) {
  const N = P.getRequired(at), b = new kt();
  b.path = "/events", b.name = Ze, b.component = rt, N.registerRoute(b);
  const x = P.getRequired(nt), C = new wt();
  C.id = it, C.label = "Event Manager", C.icon = "event", C.route = "/events", C.routeName = Ze, C.order = 15, C.visible = !0, x.registerNavigationItem(C);
}
function lt({ services: P }) {
  P.getRequired(at).unregisterRoute(Ze), P.getRequired(nt).unregisterNavigationItem(it);
}
const cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI: rt,
  activate: ot,
  deactivate: lt
}, Symbol.toStringTag, { value: "Module" })), tt = "org.eclipse.daanse.board.app.ui.vue.eventmanager", fn = "0.0.1-next.1";
async function wn(P) {
  const N = globalThis.__tsm__;
  if (!N)
    throw new Error(`${tt}: tsm runtime is not initialized`);
  N.register(tt, cn, fn, "ui.vue.eventmanager"), await ot?.(P);
}
async function kn(P) {
  await lt?.(P);
}
export {
  rt as EventManagerUI,
  wn as activate,
  kn as deactivate
};
