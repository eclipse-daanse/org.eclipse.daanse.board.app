(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".events[data-v-186198d7]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.events__head[data-v-186198d7],.rules[data-v-186198d7],.events__empty[data-v-186198d7]{width:100%;max-width:940px}.events__head[data-v-186198d7]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.events__title[data-v-186198d7]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.events__lead[data-v-186198d7]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.events__empty[data-v-186198d7]{max-width:52ch;margin:0;padding:20px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}.rules[data-v-186198d7]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.rule[data-v-186198d7]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:16px;padding:14px 8px 16px 0;border-bottom:1px solid var(--color-divider)}.rule[data-v-186198d7]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.rule__clauses[data-v-186198d7]{display:flex;flex-direction:column;gap:4px;min-width:0}.clause[data-v-186198d7]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;margin:0;line-height:1.5}.clause__word[data-v-186198d7]{text-align:right;font-size:var(--text-sm);color:var(--color-dim);padding-top:1px}.clause__body[data-v-186198d7]{min-width:0;font-size:var(--text-base)}.clause__subject[data-v-186198d7]{font-family:var(--font-mono);overflow-wrap:anywhere}.clause__place[data-v-186198d7]{margin-left:10px;color:var(--color-dim)}.rule__tools[data-v-186198d7]{display:flex;gap:2px}.form[data-v-186198d7]{display:flex;flex-direction:column}.part[data-v-186198d7]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;padding:16px 0;border-top:1px solid var(--color-divider)}.part[data-v-186198d7]:first-child{border-top:0;padding-top:4px}.part__word[data-v-186198d7]{margin:0;text-align:right;font-size:var(--text-sm);font-weight:400;color:var(--color-dim);padding-top:7px}.part__body[data-v-186198d7]{display:flex;flex-direction:column;align-items:flex-start;gap:10px;min-width:0}.part__body--row[data-v-186198d7]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-end;gap:12px;width:100%}.part__body--row[data-v-186198d7]>*{flex:1 1 180px;min-width:0}.part__none[data-v-186198d7]{margin:0;font-size:var(--text-base);color:var(--color-dim)}.conditions[data-v-186198d7]{display:flex;flex-direction:column;gap:8px;width:100%}.condition[data-v-186198d7]{display:flex;align-items:center;gap:8px}.condition[data-v-186198d7]>*{flex:1 1 0;min-width:0}.condition__operator[data-v-186198d7]{flex:0 0 5rem}.condition>.btn[data-v-186198d7],.rule__tools .btn[data-v-186198d7]{flex:0 0 auto}.actions[data-v-186198d7]{display:flex;flex-direction:column;width:100%;border-top:1px solid var(--color-divider)}.action[data-v-186198d7]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:8px;border-bottom:1px solid var(--color-divider)}.action__head[data-v-186198d7]{display:flex;align-items:baseline;gap:10px;min-width:0;padding:10px 0;border:0;background:none;text-align:left;cursor:pointer;color:inherit;font-family:inherit}.action__name[data-v-186198d7]{font-family:var(--font-mono);font-size:var(--text-base);overflow-wrap:anywhere}.action__place[data-v-186198d7]{font-size:var(--text-sm);color:var(--color-dim)}.action__body[data-v-186198d7]{grid-column:1 / -1;display:flex;flex-direction:column;gap:14px;padding:4px 0 16px}.action--open[data-v-186198d7]{box-shadow:inset 2px 0 0 var(--color-accent);padding-left:10px}.actions[data-v-186198d7]:has(>.action:only-child){border-top:0}.action[data-v-186198d7]:only-child{border-bottom:0;box-shadow:none;padding-left:0}.action:only-child .action__body[data-v-186198d7]{padding-top:0;padding-bottom:0}.params[data-v-186198d7]{display:flex;flex-direction:column;gap:10px}.param[data-v-186198d7]{display:grid;grid-template-columns:9rem minmax(0,1fr);gap:12px;align-items:center}.param__name[data-v-186198d7]{font-family:var(--font-mono);font-size:var(--text-sm);overflow-wrap:anywhere}.param__optional[data-v-186198d7]{font-family:var(--font-sans);color:var(--color-dim)}.param__value[data-v-186198d7]{display:flex;align-items:center;gap:8px;min-width:0}.param__value[data-v-186198d7]>*:last-child{flex:1 1 0;min-width:0}.source[data-v-186198d7]{display:inline-flex;flex:0 0 auto;border:1px solid var(--color-outline);border-radius:var(--radius-md);overflow:hidden}.source__side[data-v-186198d7]{padding:5px 10px;border:0;background-color:transparent;color:var(--color-dim);font-family:var(--font-sans);font-size:var(--text-sm);cursor:pointer;transition:background-color .12s ease,color .12s ease}.source__side+.source__side[data-v-186198d7]{border-left:1px solid var(--color-outline)}.source__side[data-v-186198d7]:hover{color:var(--color-fg)}.source__side--on[data-v-186198d7]{background-color:var(--color-accent);color:var(--color-onAccent)}.source__side[data-v-186198d7]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.confirm__title[data-v-186198d7]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-186198d7]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.events[data-v-186198d7]{padding:20px 16px 32px}.clause[data-v-186198d7],.part[data-v-186198d7]{grid-template-columns:minmax(0,1fr);gap:2px}.clause__word[data-v-186198d7],.part__word[data-v-186198d7]{text-align:left;padding-top:0}.param[data-v-186198d7]{grid-template-columns:minmax(0,1fr);align-items:start}}\n";})();
import { defineComponent as vt, ref as z, computed as ee, inject as je, onMounted as pt, createElementBlock as I, openBlock as w, createElementVNode as g, createVNode as k, unref as m, withCtx as j, createTextVNode as te, Fragment as we, renderList as ke, createCommentVNode as Q, toDisplayString as Z, createBlock as ie, normalizeClass as He, withModifiers as Le } from "vue";
import { EVENT_MANAGER as yt, EVENT_REGISTRY as gt, EVENT_ACTIONS_REGISTRY as ht } from "org.eclipse.daanse.board.app.lib.api.events";
import { Comperator as pe, Condition as _t } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as mt } from "org.eclipse.daanse.board.app.lib.api.page";
import { DButton as H, DIcon as ne, DModal as Qe, DSelect as J, DInput as Ye } from "org.eclipse.daanse.board.app.ui.vue.controls";
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
      var x = typeof globalThis == "object" ? globalThis : typeof Xe == "object" ? Xe : typeof self == "object" ? self : typeof this == "object" ? this : X(), C = L(N);
      typeof x.Reflect < "u" && (C = L(x.Reflect, C)), b(C, x), typeof x.Reflect > "u" && (x.Reflect = N);
      function L(F, q) {
        return function(U, D) {
          Object.defineProperty(F, U, { configurable: !0, writable: !0, value: D }), q && q(U, D);
        };
      }
      function le() {
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
      function X() {
        return le() || Y();
      }
    })(function(b, x) {
      var C = Object.prototype.hasOwnProperty, L = typeof Symbol == "function", le = L && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", Y = L && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", X = typeof Object.create == "function", F = { __proto__: [] } instanceof Array, q = !X && !F, U = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: X ? function() {
          return Be(/* @__PURE__ */ Object.create(null));
        } : F ? function() {
          return Be({ __proto__: null });
        } : function() {
          return Be({});
        },
        has: q ? function(e, t) {
          return C.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: q ? function(e, t) {
          return C.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, D = Object.getPrototypeOf(Function), f = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : st(), se = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ut(), ue = typeof WeakMap == "function" ? WeakMap : dt(), V = L ? Symbol.for("@reflect-metadata:registry") : void 0, de = y(), Me = c(de);
      function Ne(e, t, a, i) {
        if (p(a)) {
          if (!_e(e))
            throw new TypeError();
          if (!me(t))
            throw new TypeError();
          return Ce(e, t);
        } else {
          if (!_e(e))
            throw new TypeError();
          if (!T(t))
            throw new TypeError();
          if (!T(i) && !p(i) && !A(i))
            throw new TypeError();
          return A(i) && (i = void 0), a = W(a), We(e, t, a, i);
        }
      }
      b("decorate", Ne);
      function ye(e, t) {
        function a(i, v) {
          if (!T(i))
            throw new TypeError();
          if (!p(v) && !Ve(v))
            throw new TypeError();
          Oe(e, t, i, v);
        }
        return a;
      }
      b("metadata", ye);
      function Ue(e, t, a, i) {
        if (!T(a))
          throw new TypeError();
        return p(i) || (i = W(i)), Oe(e, t, a, i);
      }
      b("defineMetadata", Ue);
      function De(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return p(a) || (a = W(a)), Te(e, t, a);
      }
      b("hasMetadata", De);
      function $e(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return p(a) || (a = W(a)), K(e, t, a);
      }
      b("hasOwnMetadata", $e);
      function be(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return p(a) || (a = W(a)), ae(e, t, a);
      }
      b("getMetadata", be);
      function ze(e, t, a) {
        if (!T(t))
          throw new TypeError();
        return p(a) || (a = W(a)), Ee(e, t, a);
      }
      b("getOwnMetadata", ze);
      function xe(e, t) {
        if (!T(e))
          throw new TypeError();
        return p(t) || (t = W(t)), ce(e, t);
      }
      b("getMetadataKeys", xe);
      function Ge(e, t) {
        if (!T(e))
          throw new TypeError();
        return p(t) || (t = W(t)), fe(e, t);
      }
      b("getOwnMetadataKeys", Ge);
      function ge(e, t, a) {
        if (!T(t))
          throw new TypeError();
        if (p(a) || (a = W(a)), !T(t))
          throw new TypeError();
        p(a) || (a = W(a));
        var i = $(
          t,
          a,
          /*Create*/
          !1
        );
        return p(i) ? !1 : i.OrdinaryDeleteMetadata(e, t, a);
      }
      b("deleteMetadata", ge);
      function Ce(e, t) {
        for (var a = e.length - 1; a >= 0; --a) {
          var i = e[a], v = i(t);
          if (!p(v) && !A(v)) {
            if (!me(v))
              throw new TypeError();
            t = v;
          }
        }
        return t;
      }
      function We(e, t, a, i) {
        for (var v = e.length - 1; v >= 0; --v) {
          var E = e[v], R = E(t, a, i);
          if (!p(R) && !A(R)) {
            if (!T(R))
              throw new TypeError();
            i = R;
          }
        }
        return i;
      }
      function Te(e, t, a) {
        var i = K(e, t, a);
        if (i)
          return !0;
        var v = r(t);
        return A(v) ? !1 : Te(e, v, a);
      }
      function K(e, t, a) {
        var i = $(
          t,
          a,
          /*Create*/
          !1
        );
        return p(i) ? !1 : he(i.OrdinaryHasOwnMetadata(e, t, a));
      }
      function ae(e, t, a) {
        var i = K(e, t, a);
        if (i)
          return Ee(e, t, a);
        var v = r(t);
        if (!A(v))
          return ae(e, v, a);
      }
      function Ee(e, t, a) {
        var i = $(
          t,
          a,
          /*Create*/
          !1
        );
        if (!p(i))
          return i.OrdinaryGetOwnMetadata(e, t, a);
      }
      function Oe(e, t, a, i) {
        var v = $(
          a,
          i,
          /*Create*/
          !0
        );
        v.OrdinaryDefineOwnMetadata(e, t, a, i);
      }
      function ce(e, t) {
        var a = fe(e, t), i = r(e);
        if (i === null)
          return a;
        var v = ce(i, t);
        if (v.length <= 0)
          return a;
        if (a.length <= 0)
          return v;
        for (var E = new se(), R = [], h = 0, l = a; h < l.length; h++) {
          var s = l[h], u = E.has(s);
          u || (E.add(s), R.push(s));
        }
        for (var d = 0, _ = v; d < _.length; d++) {
          var s = _[d], u = E.has(s);
          u || (E.add(s), R.push(s));
        }
        return R;
      }
      function fe(e, t) {
        var a = $(
          e,
          t,
          /*create*/
          !1
        );
        return a ? a.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function Ie(e) {
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
      function A(e) {
        return e === null;
      }
      function G(e) {
        return typeof e == "symbol";
      }
      function T(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function Fe(e, t) {
        switch (Ie(e)) {
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
        var a = "string", i = Re(e, le);
        if (i !== void 0) {
          var v = i.call(e, a);
          if (T(v))
            throw new TypeError();
          return v;
        }
        return re(e);
      }
      function re(e, t) {
        var a, i, v;
        {
          var E = e.toString;
          if (ve(E)) {
            var i = E.call(e);
            if (!T(i))
              return i;
          }
          var a = e.valueOf;
          if (ve(a)) {
            var i = a.call(e);
            if (!T(i))
              return i;
          }
        }
        throw new TypeError();
      }
      function he(e) {
        return !!e;
      }
      function qe(e) {
        return "" + e;
      }
      function W(e) {
        var t = Fe(e);
        return G(t) ? t : qe(t);
      }
      function _e(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function ve(e) {
        return typeof e == "function";
      }
      function me(e) {
        return typeof e == "function";
      }
      function Ve(e) {
        switch (Ie(e)) {
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
      function Re(e, t) {
        var a = e[t];
        if (a != null) {
          if (!ve(a))
            throw new TypeError();
          return a;
        }
      }
      function Ae(e) {
        var t = Re(e, Y);
        if (!ve(t))
          throw new TypeError();
        var a = t.call(e);
        if (!T(a))
          throw new TypeError();
        return a;
      }
      function Se(e) {
        return e.value;
      }
      function Pe(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function o(e) {
        var t = e.return;
        t && t.call(e);
      }
      function r(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === D || t !== D)
          return t;
        var a = e.prototype, i = a && Object.getPrototypeOf(a);
        if (i == null || i === Object.prototype)
          return t;
        var v = i.constructor;
        return typeof v != "function" || v === e ? t : v;
      }
      function n() {
        var e;
        !p(V) && typeof x.Reflect < "u" && !(V in x.Reflect) && typeof x.Reflect.defineMetadata == "function" && (e = S(x.Reflect));
        var t, a, i, v = new ue(), E = {
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
            case p(t):
              t = d;
              break;
            case t === d:
              break;
            case p(a):
              a = d;
              break;
            case a === d:
              break;
            default:
              i === void 0 && (i = new se()), i.add(d);
              break;
          }
        }
        function h(d, _) {
          if (!p(t)) {
            if (t.isProviderFor(d, _))
              return t;
            if (!p(a)) {
              if (a.isProviderFor(d, _))
                return t;
              if (!p(i))
                for (var M = Ae(i); ; ) {
                  var O = Pe(M);
                  if (!O)
                    return;
                  var B = Se(O);
                  if (B.isProviderFor(d, _))
                    return o(M), B;
                }
            }
          }
          if (!p(e) && e.isProviderFor(d, _))
            return e;
        }
        function l(d, _) {
          var M = v.get(d), O;
          return p(M) || (O = M.get(_)), p(O) && (O = h(d, _), p(O) || (p(M) && (M = new f(), v.set(d, M)), M.set(_, O))), O;
        }
        function s(d) {
          if (p(d))
            throw new TypeError();
          return t === d || a === d || !p(i) && i.has(d);
        }
        function u(d, _, M) {
          if (!s(M))
            throw new Error("Metadata provider not registered.");
          var O = l(d, _);
          if (O !== M) {
            if (!p(O))
              return !1;
            var B = v.get(d);
            p(B) && (B = new f(), v.set(d, B)), B.set(_, M);
          }
          return !0;
        }
      }
      function y() {
        var e;
        return !p(V) && T(x.Reflect) && Object.isExtensible(x.Reflect) && (e = x.Reflect[V]), p(e) && (e = n()), !p(V) && T(x.Reflect) && Object.isExtensible(x.Reflect) && Object.defineProperty(x.Reflect, V, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function c(e) {
        var t = new ue(), a = {
          isProviderFor: function(s, u) {
            var d = t.get(s);
            return p(d) ? !1 : d.has(u);
          },
          OrdinaryDefineOwnMetadata: R,
          OrdinaryHasOwnMetadata: v,
          OrdinaryGetOwnMetadata: E,
          OrdinaryOwnMetadataKeys: h,
          OrdinaryDeleteMetadata: l
        };
        return de.registerProvider(a), a;
        function i(s, u, d) {
          var _ = t.get(s), M = !1;
          if (p(_)) {
            if (!d)
              return;
            _ = new f(), t.set(s, _), M = !0;
          }
          var O = _.get(u);
          if (p(O)) {
            if (!d)
              return;
            if (O = new f(), _.set(u, O), !e.setProvider(s, u, a))
              throw _.delete(u), M && t.delete(s), new Error("Wrong provider for target.");
          }
          return O;
        }
        function v(s, u, d) {
          var _ = i(
            u,
            d,
            /*Create*/
            !1
          );
          return p(_) ? !1 : he(_.has(s));
        }
        function E(s, u, d) {
          var _ = i(
            u,
            d,
            /*Create*/
            !1
          );
          if (!p(_))
            return _.get(s);
        }
        function R(s, u, d, _) {
          var M = i(
            d,
            _,
            /*Create*/
            !0
          );
          M.set(s, u);
        }
        function h(s, u) {
          var d = [], _ = i(
            s,
            u,
            /*Create*/
            !1
          );
          if (p(_))
            return d;
          for (var M = _.keys(), O = Ae(M), B = 0; ; ) {
            var Je = Pe(O);
            if (!Je)
              return d.length = B, d;
            var ct = Se(Je);
            try {
              d[B] = ct;
            } catch (ft) {
              try {
                o(O);
              } finally {
                throw ft;
              }
            }
            B++;
          }
        }
        function l(s, u, d) {
          var _ = i(
            u,
            d,
            /*Create*/
            !1
          );
          if (p(_) || !_.delete(s))
            return !1;
          if (_.size === 0) {
            var M = t.get(u);
            p(M) || (M.delete(d), M.size === 0 && t.delete(M));
          }
          return !0;
        }
      }
      function S(e) {
        var t = e.defineMetadata, a = e.hasOwnMetadata, i = e.getOwnMetadata, v = e.getOwnMetadataKeys, E = e.deleteMetadata, R = new ue(), h = {
          isProviderFor: function(l, s) {
            var u = R.get(l);
            return !p(u) && u.has(s) ? !0 : v(l, s).length ? (p(u) && (u = new se(), R.set(l, u)), u.add(s), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: a,
          OrdinaryGetOwnMetadata: i,
          OrdinaryOwnMetadataKeys: v,
          OrdinaryDeleteMetadata: E
        };
        return h;
      }
      function $(e, t, a) {
        var i = de.getProvider(e, t);
        if (!p(i))
          return i;
        if (a) {
          if (de.setProvider(e, t, Me))
            return Me;
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
            }, h.prototype[Y] = function() {
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
        ), i = (
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
                return this._keys.length--, this._values.length--, oe(l, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, h.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, h.prototype.keys = function() {
              return new a(this._keys, this._values, v);
            }, h.prototype.values = function() {
              return new a(this._keys, this._values, E);
            }, h.prototype.entries = function() {
              return new a(this._keys, this._values, R);
            }, h.prototype["@@iterator"] = function() {
              return this.entries();
            }, h.prototype[Y] = function() {
              return this.entries();
            }, h.prototype._find = function(l, s) {
              if (!oe(this._cacheKey, l)) {
                this._cacheIndex = -1;
                for (var u = 0; u < this._keys.length; u++)
                  if (oe(this._keys[u], l)) {
                    this._cacheIndex = u;
                    break;
                  }
              }
              return this._cacheIndex < 0 && s && (this._cacheIndex = this._keys.length, this._keys.push(l), this._values.push(void 0)), this._cacheIndex;
            }, h;
          })()
        );
        return i;
        function v(h, l) {
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
              this._map = new f();
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
            }, t.prototype[Y] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function dt() {
        var e = 16, t = U.create(), a = i();
        return (
          /** @class */
          (function() {
            function l() {
              this._key = i();
            }
            return l.prototype.has = function(s) {
              var u = v(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? U.has(u, this._key) : !1;
            }, l.prototype.get = function(s) {
              var u = v(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? U.get(u, this._key) : void 0;
            }, l.prototype.set = function(s, u) {
              var d = v(
                s,
                /*create*/
                !0
              );
              return d[this._key] = u, this;
            }, l.prototype.delete = function(s) {
              var u = v(
                s,
                /*create*/
                !1
              );
              return u !== void 0 ? delete u[this._key] : !1;
            }, l.prototype.clear = function() {
              this._key = i();
            }, l;
          })()
        );
        function i() {
          var l;
          do
            l = "@@WeakMap@@" + h();
          while (U.has(t, l));
          return t[l] = !0, l;
        }
        function v(l, s) {
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
    const L = z([]), le = z([]), Y = z([]), X = z([]), F = z(!1), q = z(!1), U = z(null), D = z(0), f = z({
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
      { text: "==", value: pe.eq },
      { text: "!=", value: pe.neq },
      { text: "<", value: pe.lt },
      { text: "<=", value: pe.lte },
      { text: ">", value: pe.gt },
      { text: ">=", value: pe.gte }
    ], V = ee(() => !f.value.actions || f.value.actions.length === 0 ? null : f.value.actions[D.value]), de = () => {
      f.value.actions || (f.value.actions = []), f.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }), D.value = f.value.actions.length - 1, A.value.clear(), G.value.clear();
    }, Me = (o) => {
      f.value.actions && (f.value.actions.splice(o, 1), D.value >= f.value.actions.length && (D.value = Math.max(0, f.value.actions.length - 1)), A.value.clear(), G.value.clear());
    }, Ne = (o) => {
      D.value = o, A.value.clear(), G.value.clear();
      const r = f.value.actions?.[o];
      r && (r.payloadMapping && r.payloadMapping.forEach((n) => {
        A.value.set(n.argIndex, "payload");
      }), r.actionArgs && r.actionArgs.forEach((n, y) => {
        n !== void 0 && !r.payloadMapping?.some((c) => c.argIndex === y) && (A.value.set(y, "manual"), G.value.set(y, String(n)));
      }));
    }, ye = () => {
      L.value = N.getAllMappings();
    }, Ue = () => {
      le.value = b.getAllEvents();
    }, De = () => {
      Y.value = x.getWidgetTypes();
    }, $e = () => {
      X.value = C.getAllPageIds();
    }, be = ee(() => {
      if (!f.value.eventType) return [];
      try {
        return b.extractPayloadPropertiesForEvent(f.value.eventType).map((r) => ({
          text: `${r.name}: ${r.type}${r.optional ? "?" : ""}`,
          value: r.name
        }));
      } catch (o) {
        return console.error("❌ Error extracting properties from Ecore:", o), [];
      }
    }), ze = ee(
      () => le.value.map((o) => {
        const r = o.type.indexOf(":");
        return {
          value: o.type,
          text: r > -1 ? o.type.slice(r + 1) : o.type,
          group: r > -1 ? o.type.slice(0, r) : "Sonstige"
        };
      })
    ), xe = ee(() => {
      if (!V.value?.targetContext) return [];
      const o = V.value.targetContext, r = [];
      for (const n of Y.value) {
        const y = n.context !== void 0, c = n.context || "widget";
        let S = !1;
        if (y ? S = c === o : S = o === "system" && n.widgetType.includes("System") || o === "page" && n.widgetType.includes("Page") || o === "widget" && !n.widgetType.includes("System") && !n.widgetType.includes("Page"), S)
          for (const $ of n.actions)
            r.push({
              /* The type is the heading now, so the entry is the method alone. */
              text: $.methodName,
              group: n.widgetType,
              value: $.methodName,
              parameters: $.parameters,
              widgetType: n.widgetType
            });
      }
      return r;
    }), Ge = ee(() => {
      if (!V.value?.actionName) return [];
      const o = xe.value.find((n) => n.value === V.value?.actionName);
      if (!o?.widgetType) return [];
      const r = x?.getRegisteredInstances(o.widgetType) || [];
      return [
        { text: "alle Instanzen", value: "" },
        ...r.map((n) => ({
          text: `${n.instanceId} (${n.widgetType})`,
          value: n.instanceId
        }))
      ];
    }), ge = ee(() => {
      if (!V.value?.actionName || !V.value?.targetContext) return [];
      const o = V.value.targetContext, r = Y.value.filter((n) => {
        const y = n.context !== void 0, c = n.context || "widget";
        return y ? c === o : o === "system" && n.widgetType.includes("System") || o === "page" && n.widgetType.includes("Page") || o === "widget" && !n.widgetType.includes("System") && !n.widgetType.includes("Page");
      });
      for (const n of r) {
        const y = n.actions.find((c) => c.methodName === V.value?.actionName);
        if (y && y.parameters)
          return y.parameters.map((c, S) => {
            const $ = c.match(/^(\w+)(\?)?:\s*(.+)$/);
            return $ ? {
              name: $[1],
              optional: !!$[2],
              type: $[3],
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
    }), Ce = (o) => o.actions && o.actions.length > 0 ? o.actions : o.actionName ? [{
      targetContext: o.targetContext,
      targetContextId: o.targetContextId,
      actionName: o.actionName,
      actionArgs: o.actionArgs,
      payloadMapping: o.payloadMapping
    }] : [], We = () => {
      if (!f.value.eventType)
        return;
      const o = f.value.actions?.filter((n) => n.actionName) || [];
      if (o.length === 0)
        return;
      const r = {
        id: U.value || `mapping-${Date.now()}`,
        context: f.value.context,
        contextId: f.value.contextId,
        eventType: f.value.eventType,
        conditions: f.value.conditions || [],
        actions: o
      };
      U.value && N.unregisterMapping(U.value), N.registerMapping(r), ye(), fe(), F.value = !1, q.value = !1, U.value = null;
    }, Te = (o) => {
      U.value = o.id;
      const r = Ce(o);
      f.value = {
        context: o.context,
        contextId: o.contextId,
        eventType: o.eventType,
        conditions: o.conditions || [],
        actions: r.length > 0 ? r : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, D.value = 0, A.value.clear(), G.value.clear();
      const n = f.value.actions?.[0];
      n && (n.payloadMapping && n.payloadMapping.forEach((y) => {
        A.value.set(y.argIndex, "payload");
      }), n.actionArgs && n.actionArgs.forEach((y, c) => {
        y !== void 0 && !n.payloadMapping?.some((S) => S.argIndex === c) && (A.value.set(c, "manual"), G.value.set(c, String(y)));
      })), q.value = !0;
    }, K = z(!1), ae = z(null), Ee = (o) => {
      ae.value = o, K.value = !0;
    }, Oe = () => {
      ae.value && (N.unregisterMapping(ae.value), ye()), ce();
    }, ce = () => {
      K.value = !1, ae.value = null;
    }, fe = () => {
      f.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, U.value = null, D.value = 0, A.value.clear(), G.value.clear();
    }, Ie = () => {
      f.value.conditions || (f.value.conditions = []), f.value.conditions.push(new _t());
    }, p = (o) => {
      f.value.conditions?.splice(o, 1);
    }, A = z(/* @__PURE__ */ new Map()), G = z(/* @__PURE__ */ new Map()), T = (o, r) => {
      const n = V.value;
      n && (n.payloadMapping || (n.payloadMapping = []), n.payloadMapping = n.payloadMapping.filter(
        (y) => y.argIndex !== o
      ), r && n.payloadMapping.push({
        payloadPath: r,
        argIndex: o
      }));
    }, Fe = (o, r) => {
      G.value.set(o, r);
      const n = V.value;
      if (!n) return;
      for (n.actionArgs || (n.actionArgs = []); n.actionArgs.length <= o; )
        n.actionArgs.push(void 0);
      const y = ge.value.find((c) => c.index === o);
      y && (y.type === "number" || y.type.includes("number") ? n.actionArgs[o] = parseFloat(r) || 0 : y.type === "boolean" ? n.actionArgs[o] = r === "true" : n.actionArgs[o] = r);
    }, re = (o) => A.value.get(o) || "payload", he = (o, r) => {
      A.value.set(o, r);
      const n = V.value;
      n && (r === "manual" ? n.payloadMapping && (n.payloadMapping = n.payloadMapping.filter(
        (y) => y.argIndex !== o
      )) : (G.value.delete(o), n.actionArgs && n.actionArgs[o] !== void 0 && (n.actionArgs[o] = void 0)));
    }, qe = (o) => {
      const r = V.value;
      return r?.payloadMapping && r.payloadMapping.find((y) => y.argIndex === o)?.payloadPath || "";
    }, W = (o) => G.value.get(o) || "", _e = (o) => !o || o.length === 0 ? "" : o.map((r) => {
      const n = ue.find((y) => y.value === r.comperator)?.text ?? r.comperator;
      return [r.prop, n, r.value].filter((y) => y !== void 0 && y !== "").join(" ");
    }).join(" und "), ve = (o) => o.context === "system" ? "im System" : o.context === "page" ? o.contextId ? `auf Seite ${o.contextId}` : "auf jeder Seite" : o.contextId ? `an ${o.contextId}` : "an jedem Widget dieser Art", me = (o) => o.targetContext === "system" ? "im System" : o.targetContext === "page" ? o.targetContextId ? `auf Seite ${o.targetContextId}` : "auf jeder Seite" : o.targetContextId ? `an ${o.targetContextId}` : "an allen Instanzen", Ve = ee(() => q.value), oe = ee({
      get: () => F.value || q.value,
      set: (o) => {
        o || (F.value = !1, q.value = !1);
      }
    }), Re = je(yt), Ae = je(gt), Se = je(ht), Pe = je(mt);
    return pt(() => {
      N = Re, b = Ae, x = Se, C = Pe, ye(), Ue(), De(), $e();
    }), (o, r) => (w(), I("div", bt, [
      g("header", xt, [
        r[10] || (r[10] = g("div", null, [
          g("h1", { class: "events__title" }, "Ereignisse"),
          g("p", { class: "events__lead" }, " Eine Regel verbindet, was auf einem Board geschieht, mit dem, was daraufhin geschehen soll. ")
        ], -1)),
        k(m(H), {
          intent: "primary",
          onClick: r[0] || (r[0] = (n) => F.value = !0)
        }, {
          default: j(() => [
            k(m(ne), {
              name: "add",
              size: "sm"
            }),
            r[9] || (r[9] = te("Regel anlegen ", -1))
          ]),
          _: 1
        })
      ]),
      L.value.length ? (w(), I("ul", Ct, [
        (w(!0), I(we, null, ke(L.value, (n) => (w(), I("li", {
          key: n.id,
          class: "rule"
        }, [
          g("div", Tt, [
            g("p", Et, [
              r[11] || (r[11] = g("span", { class: "clause__word" }, "Wenn", -1)),
              g("span", Ot, [
                g("span", It, Z(n.eventType || "irgendein Ereignis"), 1),
                g("span", Vt, Z(ve(n)), 1)
              ])
            ]),
            _e(n.conditions) ? (w(), I("p", Rt, [
              r[12] || (r[12] = g("span", { class: "clause__word" }, "Falls", -1)),
              g("span", At, [
                g("span", St, Z(_e(n.conditions)), 1)
              ])
            ])) : Q("", !0),
            (w(!0), I(we, null, ke(Ce(n), (y, c) => (w(), I("p", {
              key: c,
              class: "clause"
            }, [
              g("span", Pt, Z(c === 0 ? "Dann" : "und"), 1),
              g("span", jt, [
                g("span", Nt, Z(y.actionName || "noch keine Aktion"), 1),
                g("span", Ut, Z(me(y)), 1)
              ])
            ]))), 128))
          ]),
          g("div", Dt, [
            k(m(H), {
              intent: "quiet",
              size: "sm",
              title: "Regel bearbeiten",
              onClick: (y) => Te(n)
            }, {
              default: j(() => [
                k(m(ne), {
                  name: "edit",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["onClick"]),
            k(m(H), {
              intent: "quiet",
              size: "sm",
              title: "Regel löschen",
              onClick: (y) => Ee(n.id)
            }, {
              default: j(() => [
                k(m(ne), {
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
        modelValue: oe.value,
        "onUpdate:modelValue": r[6] || (r[6] = (n) => oe.value = n),
        title: Ve.value ? "Regel bearbeiten" : "Regel anlegen",
        size: "lg",
        onCancel: fe
      }, {
        actions: j(() => [
          k(m(H), {
            intent: "quiet",
            onClick: r[5] || (r[5] = (n) => {
              oe.value = !1, fe();
            })
          }, {
            default: j(() => [...r[18] || (r[18] = [
              te("Abbrechen", -1)
            ])]),
            _: 1
          }),
          k(m(H), {
            intent: "primary",
            onClick: We
          }, {
            default: j(() => [
              te(Z(Ve.value ? "Speichern" : "Anlegen"), 1)
            ]),
            _: 1
          })
        ]),
        default: j(() => [
          g("div", zt, [
            g("section", Gt, [
              r[13] || (r[13] = g("h3", { class: "part__word" }, "Wenn", -1)),
              g("div", Wt, [
                k(m(J), {
                  modelValue: f.value.context,
                  "onUpdate:modelValue": r[1] || (r[1] = (n) => f.value.context = n),
                  label: "Kontext",
                  stacked: "",
                  options: se,
                  "label-key": "text",
                  "value-key": "value"
                }, null, 8, ["modelValue"]),
                f.value.context === "page" ? (w(), ie(m(J), {
                  key: 0,
                  modelValue: f.value.contextId,
                  "onUpdate:modelValue": r[2] || (r[2] = (n) => f.value.contextId = n),
                  label: "Seite",
                  stacked: "",
                  options: [{ text: "jede Seite", value: "" }, ...X.value.map((n) => ({ text: n, value: n }))],
                  "label-key": "text",
                  "value-key": "value",
                  clearable: ""
                }, null, 8, ["modelValue", "options"])) : f.value.context === "widget" ? (w(), ie(m(Ye), {
                  key: 1,
                  modelValue: f.value.contextId,
                  "onUpdate:modelValue": r[3] || (r[3] = (n) => f.value.contextId = n),
                  label: "Widget",
                  stacked: "",
                  placeholder: "Kennung, leer für jedes"
                }, null, 8, ["modelValue"])) : Q("", !0),
                k(m(J), {
                  modelValue: f.value.eventType,
                  "onUpdate:modelValue": r[4] || (r[4] = (n) => f.value.eventType = n),
                  label: "Ereignis",
                  stacked: "",
                  options: ze.value,
                  "label-key": "text",
                  "value-key": "value",
                  "group-key": "group"
                }, null, 8, ["modelValue", "options"])
              ])
            ]),
            g("section", Ft, [
              r[15] || (r[15] = g("h3", { class: "part__word" }, "Falls", -1)),
              g("div", qt, [
                f.value.conditions && f.value.conditions.length ? (w(), I("div", Bt, [
                  (w(!0), I(we, null, ke(f.value.conditions, (n, y) => (w(), I("div", {
                    key: y,
                    class: "condition"
                  }, [
                    k(m(J), {
                      modelValue: n.prop,
                      "onUpdate:modelValue": (c) => n.prop = c,
                      placeholder: "Eigenschaft",
                      options: be.value,
                      "label-key": "text",
                      "value-key": "value"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                    k(m(J), {
                      modelValue: n.comperator,
                      "onUpdate:modelValue": (c) => n.comperator = c,
                      options: ue,
                      "label-key": "text",
                      "value-key": "value",
                      class: "condition__operator"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    k(m(Ye), {
                      modelValue: n.value,
                      "onUpdate:modelValue": (c) => n.value = c,
                      placeholder: "Wert"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    k(m(H), {
                      intent: "quiet",
                      size: "sm",
                      title: "Bedingung entfernen",
                      onClick: (c) => p(y)
                    }, {
                      default: j(() => [
                        k(m(ne), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128))
                ])) : (w(), I("p", Ht, "Ohne Bedingung läuft die Regel jedes Mal.")),
                k(m(H), {
                  size: "sm",
                  intent: "quiet",
                  onClick: Ie
                }, {
                  default: j(() => [
                    k(m(ne), {
                      name: "add",
                      size: "sm"
                    }),
                    r[14] || (r[14] = te("Bedingung ", -1))
                  ]),
                  _: 1
                })
              ])
            ]),
            g("section", Lt, [
              r[17] || (r[17] = g("h3", { class: "part__word" }, "Dann", -1)),
              g("div", Yt, [
                f.value.actions && f.value.actions.length ? (w(), I("div", Zt, [
                  (w(!0), I(we, null, ke(f.value.actions, (n, y) => (w(), I("div", {
                    key: y,
                    class: He(["action", { "action--open": D.value === y }])
                  }, [
                    f.value.actions.length > 1 ? (w(), I("button", {
                      key: 0,
                      type: "button",
                      class: "action__head",
                      onClick: (c) => Ne(y)
                    }, [
                      g("span", Qt, Z(n.actionName || "Aktion wählen"), 1),
                      g("span", Xt, Z(me(n)), 1)
                    ], 8, Jt)) : Q("", !0),
                    f.value.actions.length > 1 ? (w(), ie(m(H), {
                      key: 1,
                      intent: "quiet",
                      size: "sm",
                      title: "Aktion entfernen",
                      onClick: Le((c) => Me(y), ["stop"])
                    }, {
                      default: j(() => [
                        k(m(ne), {
                          name: "close",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : Q("", !0),
                    D.value === y ? (w(), I("div", Kt, [
                      g("div", en, [
                        k(m(J), {
                          modelValue: n.targetContext,
                          "onUpdate:modelValue": (c) => n.targetContext = c,
                          label: "Kontext",
                          stacked: "",
                          options: se,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        n.targetContext === "page" ? (w(), ie(m(J), {
                          key: 0,
                          modelValue: n.targetContextId,
                          "onUpdate:modelValue": (c) => n.targetContextId = c,
                          label: "Seite",
                          stacked: "",
                          options: [{ text: "jede Seite", value: "" }, ...X.value.map((c) => ({ text: c, value: c }))],
                          "label-key": "text",
                          "value-key": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : n.targetContext === "widget" || n.targetContext === "system" ? (w(), ie(m(J), {
                          key: 1,
                          modelValue: n.targetContextId,
                          "onUpdate:modelValue": (c) => n.targetContextId = c,
                          label: "Ziel",
                          stacked: "",
                          options: Ge.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: "",
                          placeholder: "alle Instanzen"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : Q("", !0),
                        k(m(J), {
                          modelValue: n.actionName,
                          "onUpdate:modelValue": (c) => n.actionName = c,
                          label: "Aktion",
                          stacked: "",
                          options: xe.value,
                          "label-key": "text",
                          "value-key": "value",
                          "group-key": "group"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      ge.value.length ? (w(), I("div", tn, [
                        (w(!0), I(we, null, ke(ge.value, (c) => (w(), I("div", {
                          key: c.index,
                          class: "param"
                        }, [
                          g("span", nn, [
                            te(Z(c.name), 1),
                            c.optional ? (w(), I("span", an, ", wahlweise")) : Q("", !0)
                          ]),
                          g("div", rn, [
                            g("div", {
                              class: "source",
                              role: "group",
                              "aria-label": `Wert für ${c.name}`
                            }, [
                              g("button", {
                                type: "button",
                                class: He(["source__side", { "source__side--on": re(c.index) === "payload" }]),
                                "aria-pressed": re(c.index) === "payload",
                                onClick: Le((S) => he(c.index, "payload"), ["stop"])
                              }, " aus dem Ereignis ", 10, ln),
                              g("button", {
                                type: "button",
                                class: He(["source__side", { "source__side--on": re(c.index) === "manual" }]),
                                "aria-pressed": re(c.index) === "manual",
                                onClick: Le((S) => he(c.index, "manual"), ["stop"])
                              }, " fester Wert ", 10, sn)
                            ], 8, on),
                            re(c.index) === "payload" ? (w(), ie(m(J), {
                              key: 0,
                              "model-value": qe(c.index),
                              options: be.value,
                              "label-key": "text",
                              "value-key": "value",
                              placeholder: c.optional ? "wahlweise" : "Eigenschaft wählen",
                              clearable: "",
                              "onUpdate:modelValue": (S) => T(c.index, String(S ?? ""))
                            }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : (w(), ie(m(Ye), {
                              key: 1,
                              "model-value": W(c.index),
                              placeholder: c.type,
                              "onUpdate:modelValue": (S) => Fe(c.index, String(S ?? ""))
                            }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"]))
                          ])
                        ]))), 128))
                      ])) : Q("", !0)
                    ])) : Q("", !0)
                  ], 2))), 128))
                ])) : Q("", !0),
                k(m(H), {
                  size: "sm",
                  intent: "quiet",
                  onClick: de
                }, {
                  default: j(() => [
                    k(m(ne), {
                      name: "add",
                      size: "sm"
                    }),
                    r[16] || (r[16] = te("Aktion ", -1))
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
        modelValue: K.value,
        "onUpdate:modelValue": r[8] || (r[8] = (n) => K.value = n),
        size: "sm",
        onCancel: ce
      }, {
        header: j(() => [
          k(m(ne), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          r[19] || (r[19] = g("h2", { class: "confirm__title" }, "Regel löschen", -1))
        ]),
        actions: j(() => [
          k(m(H), {
            intent: "quiet",
            onClick: ce
          }, {
            default: j(() => [...r[20] || (r[20] = [
              te("Abbrechen", -1)
            ])]),
            _: 1
          }),
          k(m(H), {
            intent: "danger",
            onClick: r[7] || (r[7] = (n) => Oe())
          }, {
            default: j(() => [...r[21] || (r[21] = [
              te("Löschen", -1)
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
}, rt = /* @__PURE__ */ dn(un, [["__scopeId", "data-v-186198d7"]]), Ze = "events", ot = "events";
function it({ services: P }) {
  const N = P.getRequired(at), b = new kt();
  b.path = "/events", b.name = Ze, b.component = rt, N.registerRoute(b);
  const x = P.getRequired(nt), C = new wt();
  C.id = ot, C.label = "Event Manager", C.icon = "event", C.route = "/events", C.routeName = Ze, C.order = 15, C.visible = !0, x.registerNavigationItem(C);
}
function lt({ services: P }) {
  P.getRequired(at).unregisterRoute(Ze), P.getRequired(nt).unregisterNavigationItem(ot);
}
const cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI: rt,
  activate: it,
  deactivate: lt
}, Symbol.toStringTag, { value: "Module" })), tt = "org.eclipse.daanse.board.app.ui.vue.eventmanager", fn = "0.0.1-next.1";
async function wn(P) {
  const N = globalThis.__tsm__;
  if (!N)
    throw new Error(`${tt}: tsm runtime is not initialized`);
  N.register(tt, cn, fn, "ui.vue.eventmanager"), await it?.(P);
}
async function kn(P) {
  await lt?.(P);
}
export {
  rt as EventManagerUI,
  wn as activate,
  kn as deactivate
};
