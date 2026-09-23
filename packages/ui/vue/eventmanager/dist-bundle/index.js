(function(){var i="ui.vue.eventmanager",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".events[data-v-23d171f7]{display:flex;flex-direction:column;gap:28px;box-sizing:border-box;width:100%;height:100%;overflow-y:auto;padding:28px 32px 40px;font-family:var(--font-sans);color:var(--color-fg);background-color:var(--color-bg)}.events__head[data-v-23d171f7],.rules[data-v-23d171f7],.events__empty[data-v-23d171f7]{width:100%;max-width:940px}.events__head[data-v-23d171f7]{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap}.events__title[data-v-23d171f7]{margin:0 0 6px;font-size:20px;font-weight:600;letter-spacing:-.01em}.events__lead[data-v-23d171f7]{margin:0;max-width:56ch;font-size:var(--text-base);line-height:1.55;color:var(--color-dim)}.events__empty[data-v-23d171f7]{max-width:52ch;margin:0;padding:20px 0;border-top:1px solid var(--color-divider);font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}.rules[data-v-23d171f7]{margin:0;padding:0;list-style:none;border-top:1px solid var(--color-divider)}.rule[data-v-23d171f7]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:start;gap:16px;padding:14px 8px 16px 0;border-bottom:1px solid var(--color-divider)}.rule[data-v-23d171f7]:hover{background-color:color-mix(in srgb,var(--color-pane) 60%,transparent)}.rule__clauses[data-v-23d171f7]{display:flex;flex-direction:column;gap:4px;min-width:0}.clause[data-v-23d171f7]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;margin:0;line-height:1.5}.clause__word[data-v-23d171f7]{text-align:right;font-size:var(--text-sm);color:var(--color-dim);padding-top:1px}.clause__body[data-v-23d171f7]{min-width:0;font-size:var(--text-base)}.clause__subject[data-v-23d171f7]{font-family:var(--font-mono);overflow-wrap:anywhere}.clause__place[data-v-23d171f7]{margin-left:10px;color:var(--color-dim)}.rule__tools[data-v-23d171f7]{display:flex;gap:2px}.form[data-v-23d171f7]{display:flex;flex-direction:column}.part[data-v-23d171f7]{display:grid;grid-template-columns:4.5rem minmax(0,1fr);gap:12px;padding:16px 0;border-top:1px solid var(--color-divider)}.part[data-v-23d171f7]:first-child{border-top:0;padding-top:4px}.part__word[data-v-23d171f7]{margin:0;text-align:right;font-size:var(--text-sm);font-weight:400;color:var(--color-dim);padding-top:7px}.part__body[data-v-23d171f7]{display:flex;flex-direction:column;align-items:flex-start;gap:10px;min-width:0}.part__body--row[data-v-23d171f7]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-end;gap:12px;width:100%}.part__body--row[data-v-23d171f7]>*{flex:1 1 180px;min-width:0}.part__none[data-v-23d171f7]{margin:0;font-size:var(--text-base);color:var(--color-dim)}.conditions[data-v-23d171f7]{display:flex;flex-direction:column;gap:8px;width:100%}.condition[data-v-23d171f7]{display:flex;align-items:center;gap:8px}.condition[data-v-23d171f7]>*{flex:1 1 0;min-width:0}.condition__operator[data-v-23d171f7]{flex:0 0 5rem}.condition>.btn[data-v-23d171f7],.rule__tools .btn[data-v-23d171f7]{flex:0 0 auto}.actions[data-v-23d171f7]{display:flex;flex-direction:column;width:100%;border-top:1px solid var(--color-divider)}.action[data-v-23d171f7]{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;column-gap:8px;border-bottom:1px solid var(--color-divider)}.action__head[data-v-23d171f7]{display:flex;align-items:baseline;gap:10px;min-width:0;padding:10px 0;border:0;background:none;text-align:left;cursor:pointer;color:inherit;font-family:inherit}.action__name[data-v-23d171f7]{font-family:var(--font-mono);font-size:var(--text-base);overflow-wrap:anywhere}.action__place[data-v-23d171f7]{font-size:var(--text-sm);color:var(--color-dim)}.action__body[data-v-23d171f7]{grid-column:1 / -1;display:flex;flex-direction:column;gap:14px;padding:4px 0 16px}.action--open[data-v-23d171f7]{box-shadow:inset 2px 0 0 var(--color-accent);padding-left:10px}.actions[data-v-23d171f7]:has(>.action:only-child){border-top:0}.action[data-v-23d171f7]:only-child{border-bottom:0;box-shadow:none;padding-left:0}.action:only-child .action__body[data-v-23d171f7]{padding-top:0;padding-bottom:0}.params[data-v-23d171f7]{display:flex;flex-direction:column;gap:10px}.param[data-v-23d171f7]{display:grid;grid-template-columns:9rem minmax(0,1fr);gap:12px;align-items:center}.param__name[data-v-23d171f7]{font-family:var(--font-mono);font-size:var(--text-sm);overflow-wrap:anywhere}.param__optional[data-v-23d171f7]{font-family:var(--font-sans);color:var(--color-dim)}.param__value[data-v-23d171f7]{display:flex;align-items:center;gap:8px;min-width:0}.param__value[data-v-23d171f7]>*:last-child{flex:1 1 0;min-width:0}.source[data-v-23d171f7]{display:inline-flex;flex:0 0 auto;border:1px solid var(--color-outline);border-radius:var(--radius-md);overflow:hidden}.source__side[data-v-23d171f7]{padding:5px 10px;border:0;background-color:transparent;color:var(--color-dim);font-family:var(--font-sans);font-size:var(--text-sm);cursor:pointer;transition:background-color .12s ease,color .12s ease}.source__side+.source__side[data-v-23d171f7]{border-left:1px solid var(--color-outline)}.source__side[data-v-23d171f7]:hover{color:var(--color-fg)}.source__side--on[data-v-23d171f7]{background-color:var(--color-accent);color:var(--color-onAccent)}.source__side[data-v-23d171f7]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.confirm__title[data-v-23d171f7]{margin:0;font-size:var(--text-lg);font-weight:600}.confirm__text[data-v-23d171f7]{margin:0;font-size:var(--text-base);line-height:1.6;color:var(--color-dim)}@media(max-width:640px){.events[data-v-23d171f7]{padding:20px 16px 32px}.clause[data-v-23d171f7],.part[data-v-23d171f7]{grid-template-columns:minmax(0,1fr);gap:2px}.clause__word[data-v-23d171f7],.part__word[data-v-23d171f7]{text-align:left;padding-top:0}.param[data-v-23d171f7]{grid-template-columns:minmax(0,1fr);align-items:start}}\n";})();
import { defineComponent as yt, ref as z, computed as Z, inject as Ne, onMounted as ht, createElementBlock as I, openBlock as M, createElementVNode as _, createVNode as E, toDisplayString as k, unref as o, withCtx as N, createTextVNode as ae, Fragment as xe, renderList as Me, createCommentVNode as ee, createBlock as ue, normalizeClass as Ye, withModifiers as Ze } from "vue";
import { EVENT_MANAGER as gt, EVENT_REGISTRY as _t, EVENT_ACTIONS_REGISTRY as mt } from "org.eclipse.daanse.board.app.lib.api.events";
import { Comperator as ye, Condition as wt } from "org.eclipse.daanse.board.app.lib.events";
import { identifier as bt } from "org.eclipse.daanse.board.app.lib.api.page";
import { DButton as B, DIcon as re, DModal as et, DSelect as J, DInput as Je } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as kt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { NAVIGATION_REGISTRY_ID as ot, NavigationItem as xt } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { ROUTE_REGISTRY_ID as it, RouteDefinition as Mt } from "org.eclipse.daanse.board.app.lib.api.route";
import { component as Rt } from "@eclipse-daanse/tsm";
var tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, nt = {};
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
var at;
function Ct() {
  if (at) return nt;
  at = 1;
  var O;
  return (function(i) {
    (function(x) {
      var R = typeof globalThis == "object" ? globalThis : typeof tt == "object" ? tt : typeof self == "object" ? self : typeof this == "object" ? this : te(), C = W(i);
      typeof R.Reflect < "u" && (C = W(R.Reflect, C)), x(C, R), typeof R.Reflect > "u" && (R.Reflect = i);
      function W(X, H) {
        return function(U, G) {
          Object.defineProperty(X, U, { configurable: !0, writable: !0, value: G }), H && H(U, G);
        };
      }
      function L() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function Q() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function te() {
        return L() || Q();
      }
    })(function(x, R) {
      var C = Object.prototype.hasOwnProperty, W = typeof Symbol == "function", L = W && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", Q = W && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", te = typeof Object.create == "function", X = { __proto__: [] } instanceof Array, H = !te && !X, U = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: te ? function() {
          return He(/* @__PURE__ */ Object.create(null));
        } : X ? function() {
          return He({ __proto__: null });
        } : function() {
          return He({});
        },
        has: H ? function(e, t) {
          return C.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: H ? function(e, t) {
          return C.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, G = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : S(), y = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Y(), ce = typeof WeakMap == "function" ? WeakMap : ft(), K = W ? Symbol.for("@reflect-metadata:registry") : void 0, oe = u(), D = a(oe);
      function je(e, t, n, l) {
        if (p(n)) {
          if (!Ie(e))
            throw new TypeError();
          if (!we(t))
            throw new TypeError();
          return Fe(e, t);
        } else {
          if (!Ie(e))
            throw new TypeError();
          if (!b(t))
            throw new TypeError();
          if (!b(l) && !p(l) && !ne(l))
            throw new TypeError();
          return ne(l) && (l = void 0), n = $(n), ge(e, t, n, l);
        }
      }
      x("decorate", je);
      function De(e, t) {
        function n(l, h) {
          if (!b(l))
            throw new TypeError();
          if (!p(h) && !Le(h))
            throw new TypeError();
          le(e, t, l, h);
        }
        return n;
      }
      x("metadata", De);
      function Ue(e, t, n, l) {
        if (!b(n))
          throw new TypeError();
        return p(l) || (l = $(l)), le(e, t, n, l);
      }
      x("defineMetadata", Ue);
      function he(e, t, n) {
        if (!b(t))
          throw new TypeError();
        return p(n) || (n = $(n)), _e(e, t, n);
      }
      x("hasMetadata", he);
      function We(e, t, n) {
        if (!b(t))
          throw new TypeError();
        return p(n) || (n = $(n)), me(e, t, n);
      }
      x("hasOwnMetadata", We);
      function $e(e, t, n) {
        if (!b(t))
          throw new TypeError();
        return p(n) || (n = $(n)), Ee(e, t, n);
      }
      x("getMetadata", $e);
      function ze(e, t, n) {
        if (!b(t))
          throw new TypeError();
        return p(n) || (n = $(n)), ie(e, t, n);
      }
      x("getOwnMetadata", ze);
      function Re(e, t) {
        if (!b(e))
          throw new TypeError();
        return p(t) || (t = $(t)), Te(e, t);
      }
      x("getMetadataKeys", Re);
      function Ge(e, t) {
        if (!b(e))
          throw new TypeError();
        return p(t) || (t = $(t)), Pe(e, t);
      }
      x("getOwnMetadataKeys", Ge);
      function Ce(e, t, n) {
        if (!b(t))
          throw new TypeError();
        if (p(n) || (n = $(n)), !b(t))
          throw new TypeError();
        p(n) || (n = $(n));
        var l = v(
          t,
          n,
          /*Create*/
          !1
        );
        return p(l) ? !1 : l.OrdinaryDeleteMetadata(e, t, n);
      }
      x("deleteMetadata", Ce);
      function Fe(e, t) {
        for (var n = e.length - 1; n >= 0; --n) {
          var l = e[n], h = l(t);
          if (!p(h) && !ne(h)) {
            if (!we(h))
              throw new TypeError();
            t = h;
          }
        }
        return t;
      }
      function ge(e, t, n, l) {
        for (var h = e.length - 1; h >= 0; --h) {
          var P = e[h], V = P(t, n, l);
          if (!p(V) && !ne(V)) {
            if (!b(V))
              throw new TypeError();
            l = V;
          }
        }
        return l;
      }
      function _e(e, t, n) {
        var l = me(e, t, n);
        if (l)
          return !0;
        var h = ke(t);
        return ne(h) ? !1 : _e(e, h, n);
      }
      function me(e, t, n) {
        var l = v(
          t,
          n,
          /*Create*/
          !1
        );
        return p(l) ? !1 : Ae(l.OrdinaryHasOwnMetadata(e, t, n));
      }
      function Ee(e, t, n) {
        var l = me(e, t, n);
        if (l)
          return ie(e, t, n);
        var h = ke(t);
        if (!ne(h))
          return Ee(e, h, n);
      }
      function ie(e, t, n) {
        var l = v(
          t,
          n,
          /*Create*/
          !1
        );
        if (!p(l))
          return l.OrdinaryGetOwnMetadata(e, t, n);
      }
      function le(e, t, n, l) {
        var h = v(
          n,
          l,
          /*Create*/
          !0
        );
        h.OrdinaryDefineOwnMetadata(e, t, n, l);
      }
      function Te(e, t) {
        var n = Pe(e, t), l = ke(e);
        if (l === null)
          return n;
        var h = Te(l, t);
        if (h.length <= 0)
          return n;
        if (n.length <= 0)
          return h;
        for (var P = new y(), V = [], m = 0, s = n; m < s.length; m++) {
          var c = s[m], d = P.has(c);
          d || (P.add(c), V.push(c));
        }
        for (var f = 0, w = h; f < w.length; f++) {
          var c = w[f], d = P.has(c);
          d || (P.add(c), V.push(c));
        }
        return V;
      }
      function Pe(e, t) {
        var n = v(
          e,
          t,
          /*create*/
          !1
        );
        return n ? n.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function de(e) {
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
      function ne(e) {
        return e === null;
      }
      function qe(e) {
        return typeof e == "symbol";
      }
      function b(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function F(e, t) {
        switch (de(e)) {
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
        var n = "string", l = be(e, L);
        if (l !== void 0) {
          var h = l.call(e, n);
          if (b(h))
            throw new TypeError();
          return h;
        }
        return Be(e);
      }
      function Be(e, t) {
        var n, l, h;
        {
          var P = e.toString;
          if (fe(P)) {
            var l = P.call(e);
            if (!b(l))
              return l;
          }
          var n = e.valueOf;
          if (fe(n)) {
            var l = n.call(e);
            if (!b(l))
              return l;
          }
        }
        throw new TypeError();
      }
      function Ae(e) {
        return !!e;
      }
      function se(e) {
        return "" + e;
      }
      function $(e) {
        var t = F(e);
        return qe(t) ? t : se(t);
      }
      function Ie(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function fe(e) {
        return typeof e == "function";
      }
      function we(e) {
        return typeof e == "function";
      }
      function Le(e) {
        switch (de(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function ve(e, t) {
        return e === t || e !== e && t !== t;
      }
      function be(e, t) {
        var n = e[t];
        if (n != null) {
          if (!fe(n))
            throw new TypeError();
          return n;
        }
      }
      function pe(e) {
        var t = be(e, Q);
        if (!fe(t))
          throw new TypeError();
        var n = t.call(e);
        if (!b(n))
          throw new TypeError();
        return n;
      }
      function Oe(e) {
        return e.value;
      }
      function Ve(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function Se(e) {
        var t = e.return;
        t && t.call(e);
      }
      function ke(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === G || t !== G)
          return t;
        var n = e.prototype, l = n && Object.getPrototypeOf(n);
        if (l == null || l === Object.prototype)
          return t;
        var h = l.constructor;
        return typeof h != "function" || h === e ? t : h;
      }
      function r() {
        var e;
        !p(K) && typeof R.Reflect < "u" && !(K in R.Reflect) && typeof R.Reflect.defineMetadata == "function" && (e = g(R.Reflect));
        var t, n, l, h = new ce(), P = {
          registerProvider: V,
          getProvider: s,
          setProvider: d
        };
        return P;
        function V(f) {
          if (!Object.isExtensible(P))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === f:
              break;
            case p(t):
              t = f;
              break;
            case t === f:
              break;
            case p(n):
              n = f;
              break;
            case n === f:
              break;
            default:
              l === void 0 && (l = new y()), l.add(f);
              break;
          }
        }
        function m(f, w) {
          if (!p(t)) {
            if (t.isProviderFor(f, w))
              return t;
            if (!p(n)) {
              if (n.isProviderFor(f, w))
                return t;
              if (!p(l))
                for (var T = pe(l); ; ) {
                  var A = Ve(T);
                  if (!A)
                    return;
                  var q = Oe(A);
                  if (q.isProviderFor(f, w))
                    return Se(T), q;
                }
            }
          }
          if (!p(e) && e.isProviderFor(f, w))
            return e;
        }
        function s(f, w) {
          var T = h.get(f), A;
          return p(T) || (A = T.get(w)), p(A) && (A = m(f, w), p(A) || (p(T) && (T = new j(), h.set(f, T)), T.set(w, A))), A;
        }
        function c(f) {
          if (p(f))
            throw new TypeError();
          return t === f || n === f || !p(l) && l.has(f);
        }
        function d(f, w, T) {
          if (!c(T))
            throw new Error("Metadata provider not registered.");
          var A = s(f, w);
          if (A !== T) {
            if (!p(A))
              return !1;
            var q = h.get(f);
            p(q) && (q = new j(), h.set(f, q)), q.set(w, T);
          }
          return !0;
        }
      }
      function u() {
        var e;
        return !p(K) && b(R.Reflect) && Object.isExtensible(R.Reflect) && (e = R.Reflect[K]), p(e) && (e = r()), !p(K) && b(R.Reflect) && Object.isExtensible(R.Reflect) && Object.defineProperty(R.Reflect, K, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function a(e) {
        var t = new ce(), n = {
          isProviderFor: function(c, d) {
            var f = t.get(c);
            return p(f) ? !1 : f.has(d);
          },
          OrdinaryDefineOwnMetadata: V,
          OrdinaryHasOwnMetadata: h,
          OrdinaryGetOwnMetadata: P,
          OrdinaryOwnMetadataKeys: m,
          OrdinaryDeleteMetadata: s
        };
        return oe.registerProvider(n), n;
        function l(c, d, f) {
          var w = t.get(c), T = !1;
          if (p(w)) {
            if (!f)
              return;
            w = new j(), t.set(c, w), T = !0;
          }
          var A = w.get(d);
          if (p(A)) {
            if (!f)
              return;
            if (A = new j(), w.set(d, A), !e.setProvider(c, d, n))
              throw w.delete(d), T && t.delete(c), new Error("Wrong provider for target.");
          }
          return A;
        }
        function h(c, d, f) {
          var w = l(
            d,
            f,
            /*Create*/
            !1
          );
          return p(w) ? !1 : Ae(w.has(c));
        }
        function P(c, d, f) {
          var w = l(
            d,
            f,
            /*Create*/
            !1
          );
          if (!p(w))
            return w.get(c);
        }
        function V(c, d, f, w) {
          var T = l(
            f,
            w,
            /*Create*/
            !0
          );
          T.set(c, d);
        }
        function m(c, d) {
          var f = [], w = l(
            c,
            d,
            /*Create*/
            !1
          );
          if (p(w))
            return f;
          for (var T = w.keys(), A = pe(T), q = 0; ; ) {
            var Ke = Ve(A);
            if (!Ke)
              return f.length = q, f;
            var vt = Oe(Ke);
            try {
              f[q] = vt;
            } catch (pt) {
              try {
                Se(A);
              } finally {
                throw pt;
              }
            }
            q++;
          }
        }
        function s(c, d, f) {
          var w = l(
            d,
            f,
            /*Create*/
            !1
          );
          if (p(w) || !w.delete(c))
            return !1;
          if (w.size === 0) {
            var T = t.get(d);
            p(T) || (T.delete(f), T.size === 0 && t.delete(T));
          }
          return !0;
        }
      }
      function g(e) {
        var t = e.defineMetadata, n = e.hasOwnMetadata, l = e.getOwnMetadata, h = e.getOwnMetadataKeys, P = e.deleteMetadata, V = new ce(), m = {
          isProviderFor: function(s, c) {
            var d = V.get(s);
            return !p(d) && d.has(c) ? !0 : h(s, c).length ? (p(d) && (d = new y(), V.set(s, d)), d.add(c), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: n,
          OrdinaryGetOwnMetadata: l,
          OrdinaryOwnMetadataKeys: h,
          OrdinaryDeleteMetadata: P
        };
        return m;
      }
      function v(e, t, n) {
        var l = oe.getProvider(e, t);
        if (!p(l))
          return l;
        if (n) {
          if (oe.setProvider(e, t, D))
            return D;
          throw new Error("Illegal state.");
        }
      }
      function S() {
        var e = {}, t = [], n = (
          /** @class */
          (function() {
            function m(s, c, d) {
              this._index = 0, this._keys = s, this._values = c, this._selector = d;
            }
            return m.prototype["@@iterator"] = function() {
              return this;
            }, m.prototype[Q] = function() {
              return this;
            }, m.prototype.next = function() {
              var s = this._index;
              if (s >= 0 && s < this._keys.length) {
                var c = this._selector(this._keys[s], this._values[s]);
                return s + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: c, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, m.prototype.throw = function(s) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), s;
            }, m.prototype.return = function(s) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: s, done: !0 };
            }, m;
          })()
        ), l = (
          /** @class */
          (function() {
            function m() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(m.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), m.prototype.has = function(s) {
              return this._find(
                s,
                /*insert*/
                !1
              ) >= 0;
            }, m.prototype.get = function(s) {
              var c = this._find(
                s,
                /*insert*/
                !1
              );
              return c >= 0 ? this._values[c] : void 0;
            }, m.prototype.set = function(s, c) {
              var d = this._find(
                s,
                /*insert*/
                !0
              );
              return this._values[d] = c, this;
            }, m.prototype.delete = function(s) {
              var c = this._find(
                s,
                /*insert*/
                !1
              );
              if (c >= 0) {
                for (var d = this._keys.length, f = c + 1; f < d; f++)
                  this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
                return this._keys.length--, this._values.length--, ve(s, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, m.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, m.prototype.keys = function() {
              return new n(this._keys, this._values, h);
            }, m.prototype.values = function() {
              return new n(this._keys, this._values, P);
            }, m.prototype.entries = function() {
              return new n(this._keys, this._values, V);
            }, m.prototype["@@iterator"] = function() {
              return this.entries();
            }, m.prototype[Q] = function() {
              return this.entries();
            }, m.prototype._find = function(s, c) {
              if (!ve(this._cacheKey, s)) {
                this._cacheIndex = -1;
                for (var d = 0; d < this._keys.length; d++)
                  if (ve(this._keys[d], s)) {
                    this._cacheIndex = d;
                    break;
                  }
              }
              return this._cacheIndex < 0 && c && (this._cacheIndex = this._keys.length, this._keys.push(s), this._values.push(void 0)), this._cacheIndex;
            }, m;
          })()
        );
        return l;
        function h(m, s) {
          return m;
        }
        function P(m, s) {
          return s;
        }
        function V(m, s) {
          return [m, s];
        }
      }
      function Y() {
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
            }, t.prototype[Q] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function ft() {
        var e = 16, t = U.create(), n = l();
        return (
          /** @class */
          (function() {
            function s() {
              this._key = l();
            }
            return s.prototype.has = function(c) {
              var d = h(
                c,
                /*create*/
                !1
              );
              return d !== void 0 ? U.has(d, this._key) : !1;
            }, s.prototype.get = function(c) {
              var d = h(
                c,
                /*create*/
                !1
              );
              return d !== void 0 ? U.get(d, this._key) : void 0;
            }, s.prototype.set = function(c, d) {
              var f = h(
                c,
                /*create*/
                !0
              );
              return f[this._key] = d, this;
            }, s.prototype.delete = function(c) {
              var d = h(
                c,
                /*create*/
                !1
              );
              return d !== void 0 ? delete d[this._key] : !1;
            }, s.prototype.clear = function() {
              this._key = l();
            }, s;
          })()
        );
        function l() {
          var s;
          do
            s = "@@WeakMap@@" + m();
          while (U.has(t, s));
          return t[s] = !0, s;
        }
        function h(s, c) {
          if (!C.call(s, n)) {
            if (!c)
              return;
            Object.defineProperty(s, n, { value: U.create() });
          }
          return s[n];
        }
        function P(s, c) {
          for (var d = 0; d < c; ++d)
            s[d] = Math.random() * 255 | 0;
          return s;
        }
        function V(s) {
          if (typeof Uint8Array == "function") {
            var c = new Uint8Array(s);
            return typeof crypto < "u" ? crypto.getRandomValues(c) : typeof msCrypto < "u" ? msCrypto.getRandomValues(c) : P(c, s), c;
          }
          return P(new Array(s), s);
        }
        function m() {
          var s = V(e);
          s[6] = s[6] & 79 | 64, s[8] = s[8] & 191 | 128;
          for (var c = "", d = 0; d < e; ++d) {
            var f = s[d];
            (d === 4 || d === 6 || d === 8) && (c += "-"), f < 16 && (c += "0"), c += f.toString(16).toLowerCase();
          }
          return c;
        }
      }
      function He(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(O || (O = {})), nt;
}
Ct();
const Et = { class: "events" }, Tt = { class: "events__head" }, Pt = { class: "events__title" }, At = { class: "events__lead" }, It = {
  key: 0,
  class: "rules"
}, Ot = { class: "rule__clauses" }, Vt = { class: "clause" }, St = { class: "clause__word" }, Nt = { class: "clause__body" }, jt = { class: "clause__subject" }, Dt = { class: "clause__place" }, Ut = {
  key: 0,
  class: "clause"
}, Wt = { class: "clause__word" }, $t = { class: "clause__body" }, zt = { class: "clause__subject" }, Gt = { class: "clause__word" }, Ft = { class: "clause__body" }, qt = { class: "clause__subject" }, Bt = { class: "clause__place" }, Lt = { class: "rule__tools" }, Ht = {
  key: 1,
  class: "events__empty"
}, Yt = { class: "form" }, Zt = { class: "part" }, Jt = { class: "part__word" }, Qt = { class: "part__body part__body--row" }, Xt = { class: "part" }, Kt = { class: "part__word" }, en = { class: "part__body" }, tn = {
  key: 0,
  class: "conditions"
}, nn = {
  key: 1,
  class: "part__none"
}, an = { class: "part" }, rn = { class: "part__word" }, on = { class: "part__body" }, ln = {
  key: 0,
  class: "actions"
}, sn = ["onClick"], un = { class: "action__name" }, cn = { class: "action__place" }, dn = {
  key: 2,
  class: "action__body"
}, fn = { class: "part__body--row" }, vn = {
  key: 0,
  class: "params"
}, pn = { class: "param__name" }, yn = {
  key: 0,
  class: "param__optional"
}, hn = { class: "param__value" }, gn = ["aria-label"], _n = ["aria-pressed", "onClick"], mn = ["aria-pressed", "onClick"], wn = { class: "confirm__title" }, bn = { class: "confirm__text" }, kn = /* @__PURE__ */ yt({
  __name: "EventManagerUI",
  setup(O) {
    const { t: i } = kt("eventmanager");
    let x, R, C, W;
    const L = z([]), Q = z([]), te = z([]), X = z([]), H = z(!1), U = z(!1), G = z(null), j = z(0), y = z({
      context: "widget",
      conditions: [],
      actions: [{
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }]
    }), ce = Z(() => [
      { text: i("Context.system"), value: "system" },
      { text: i("Context.page"), value: "page" },
      { text: i("Context.widget"), value: "widget" }
    ]), K = Z(() => [
      { text: i("Rule.anyPage"), value: "" },
      ...X.value.map((r) => ({ text: r, value: r }))
    ]), oe = [
      { text: "==", value: ye.eq },
      { text: "!=", value: ye.neq },
      { text: "<", value: ye.lt },
      { text: "<=", value: ye.lte },
      { text: ">", value: ye.gt },
      { text: ">=", value: ye.gte }
    ], D = Z(() => !y.value.actions || y.value.actions.length === 0 ? null : y.value.actions[j.value]), je = () => {
      y.value.actions || (y.value.actions = []), y.value.actions.push({
        targetContext: "widget",
        actionName: "",
        actionArgs: [],
        payloadMapping: []
      }), j.value = y.value.actions.length - 1, b.value.clear(), F.value.clear();
    }, De = (r) => {
      y.value.actions && (y.value.actions.splice(r, 1), j.value >= y.value.actions.length && (j.value = Math.max(0, y.value.actions.length - 1)), b.value.clear(), F.value.clear());
    }, Ue = (r) => {
      j.value = r, b.value.clear(), F.value.clear();
      const u = y.value.actions?.[r];
      u && (u.payloadMapping && u.payloadMapping.forEach((a) => {
        b.value.set(a.argIndex, "payload");
      }), u.actionArgs && u.actionArgs.forEach((a, g) => {
        a !== void 0 && !u.payloadMapping?.some((v) => v.argIndex === g) && (b.value.set(g, "manual"), F.value.set(g, String(a)));
      }));
    }, he = () => {
      L.value = x.getAllMappings();
    }, We = () => {
      Q.value = R.getAllEvents();
    }, $e = () => {
      te.value = C.getWidgetTypes();
    }, ze = () => {
      X.value = W.getAllPageIds();
    }, Re = Z(() => {
      if (!y.value.eventType) return [];
      try {
        return R.extractPayloadPropertiesForEvent(y.value.eventType).map((u) => ({
          text: `${u.name}: ${u.type}${u.optional ? "?" : ""}`,
          value: u.name
        }));
      } catch (r) {
        return console.error("❌ Error extracting properties from Ecore:", r), [];
      }
    }), Ge = Z(
      () => Q.value.map((r) => {
        const u = r.type.indexOf(":");
        return {
          value: r.type,
          text: u > -1 ? r.type.slice(u + 1) : r.type,
          group: u > -1 ? r.type.slice(0, u) : i("Rule.otherEvents")
        };
      })
    ), Ce = Z(() => {
      if (!D.value?.targetContext) return [];
      const r = D.value.targetContext, u = [];
      for (const a of te.value) {
        const g = a.context !== void 0, v = a.context || "widget";
        let S = !1;
        if (g ? S = v === r : S = r === "system" && a.widgetType.includes("System") || r === "page" && a.widgetType.includes("Page") || r === "widget" && !a.widgetType.includes("System") && !a.widgetType.includes("Page"), S)
          for (const Y of a.actions)
            u.push({
              /* The type is the heading now, so the entry is the method alone. */
              text: Y.methodName,
              group: a.widgetType,
              value: Y.methodName,
              parameters: Y.parameters,
              widgetType: a.widgetType
            });
      }
      return u;
    }), Fe = Z(() => {
      if (!D.value?.actionName) return [];
      const r = Ce.value.find((a) => a.value === D.value?.actionName);
      if (!r?.widgetType) return [];
      const u = C?.getRegisteredInstances(r.widgetType) || [];
      return [
        { text: i("Rule.allInstances"), value: "" },
        ...u.map((a) => ({
          text: `${a.instanceId} (${a.widgetType})`,
          value: a.instanceId
        }))
      ];
    }), ge = Z(() => {
      if (!D.value?.actionName || !D.value?.targetContext) return [];
      const r = D.value.targetContext, u = te.value.filter((a) => {
        const g = a.context !== void 0, v = a.context || "widget";
        return g ? v === r : r === "system" && a.widgetType.includes("System") || r === "page" && a.widgetType.includes("Page") || r === "widget" && !a.widgetType.includes("System") && !a.widgetType.includes("Page");
      });
      for (const a of u) {
        const g = a.actions.find((v) => v.methodName === D.value?.actionName);
        if (g && g.parameters)
          return g.parameters.map((v, S) => {
            const Y = v.match(/^(\w+)(\?)?:\s*(.+)$/);
            return Y ? {
              name: Y[1],
              optional: !!Y[2],
              type: Y[3],
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
    }), _e = (r) => r.actions && r.actions.length > 0 ? r.actions : r.actionName ? [{
      targetContext: r.targetContext,
      targetContextId: r.targetContextId,
      actionName: r.actionName,
      actionArgs: r.actionArgs,
      payloadMapping: r.payloadMapping
    }] : [], me = () => {
      if (!y.value.eventType)
        return;
      const r = y.value.actions?.filter((a) => a.actionName) || [];
      if (r.length === 0)
        return;
      const u = {
        id: G.value || `mapping-${Date.now()}`,
        context: y.value.context,
        contextId: y.value.contextId,
        eventType: y.value.eventType,
        conditions: y.value.conditions || [],
        actions: r
      };
      G.value && x.unregisterMapping(G.value), x.registerMapping(u), he(), p(), H.value = !1, U.value = !1, G.value = null;
    }, Ee = (r) => {
      G.value = r.id;
      const u = _e(r);
      y.value = {
        context: r.context,
        contextId: r.contextId,
        eventType: r.eventType,
        conditions: r.conditions || [],
        actions: u.length > 0 ? u : [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, j.value = 0, b.value.clear(), F.value.clear();
      const a = y.value.actions?.[0];
      a && (a.payloadMapping && a.payloadMapping.forEach((g) => {
        b.value.set(g.argIndex, "payload");
      }), a.actionArgs && a.actionArgs.forEach((g, v) => {
        g !== void 0 && !a.payloadMapping?.some((S) => S.argIndex === v) && (b.value.set(v, "manual"), F.value.set(v, String(g)));
      })), U.value = !0;
    }, ie = z(!1), le = z(null), Te = (r) => {
      le.value = r, ie.value = !0;
    }, Pe = () => {
      le.value && (x.unregisterMapping(le.value), he()), de();
    }, de = () => {
      ie.value = !1, le.value = null;
    }, p = () => {
      y.value = {
        context: "widget",
        conditions: [],
        actions: [{
          targetContext: "widget",
          actionName: "",
          actionArgs: [],
          payloadMapping: []
        }]
      }, G.value = null, j.value = 0, b.value.clear(), F.value.clear();
    }, ne = () => {
      y.value.conditions || (y.value.conditions = []), y.value.conditions.push(new wt());
    }, qe = (r) => {
      y.value.conditions?.splice(r, 1);
    }, b = z(/* @__PURE__ */ new Map()), F = z(/* @__PURE__ */ new Map()), Be = (r, u) => {
      const a = D.value;
      a && (a.payloadMapping || (a.payloadMapping = []), a.payloadMapping = a.payloadMapping.filter(
        (g) => g.argIndex !== r
      ), u && a.payloadMapping.push({
        payloadPath: u,
        argIndex: r
      }));
    }, Ae = (r, u) => {
      F.value.set(r, u);
      const a = D.value;
      if (!a) return;
      for (a.actionArgs || (a.actionArgs = []); a.actionArgs.length <= r; )
        a.actionArgs.push(void 0);
      const g = ge.value.find((v) => v.index === r);
      g && (g.type === "number" || g.type.includes("number") ? a.actionArgs[r] = parseFloat(u) || 0 : g.type === "boolean" ? a.actionArgs[r] = u === "true" : a.actionArgs[r] = u);
    }, se = (r) => b.value.get(r) || "payload", $ = (r, u) => {
      b.value.set(r, u);
      const a = D.value;
      a && (u === "manual" ? a.payloadMapping && (a.payloadMapping = a.payloadMapping.filter(
        (g) => g.argIndex !== r
      )) : (F.value.delete(r), a.actionArgs && a.actionArgs[r] !== void 0 && (a.actionArgs[r] = void 0)));
    }, Ie = (r) => {
      const u = D.value;
      return u?.payloadMapping && u.payloadMapping.find((g) => g.argIndex === r)?.payloadPath || "";
    }, fe = (r) => F.value.get(r) || "", we = (r) => !r || r.length === 0 ? "" : r.map((u) => {
      const a = oe.find((g) => g.value === u.comperator)?.text ?? u.comperator;
      return [u.prop, a, u.value].filter((g) => g !== void 0 && g !== "").join(" ");
    }).join(i("Rule.and")), Le = (r) => r.context === "system" ? i("Phrase.inSystem") : r.context === "page" ? r.contextId ? i("Phrase.onPage", { page: r.contextId }) : i("Phrase.onAnyPage") : r.contextId ? i("Phrase.at", { target: r.contextId }) : i("Phrase.atAnyWidget"), ve = (r) => r.targetContext === "system" ? i("Phrase.inSystem") : r.targetContext === "page" ? r.targetContextId ? i("Phrase.onPage", { page: r.targetContextId }) : i("Phrase.onAnyPage") : r.targetContextId ? i("Phrase.at", { target: r.targetContextId }) : i("Phrase.atAllInstances"), be = Z(() => U.value), pe = Z({
      get: () => H.value || U.value,
      set: (r) => {
        r || (H.value = !1, U.value = !1);
      }
    }), Oe = Ne(gt), Ve = Ne(_t), Se = Ne(mt), ke = Ne(bt);
    return ht(() => {
      x = Oe, R = Ve, C = Se, W = ke, he(), We(), $e(), ze();
    }), (r, u) => (M(), I("div", Et, [
      _("header", Tt, [
        _("div", null, [
          _("h1", Pt, k(o(i)("Title")), 1),
          _("p", At, k(o(i)("Lead")), 1)
        ]),
        E(o(B), {
          intent: "primary",
          onClick: u[0] || (u[0] = (a) => H.value = !0)
        }, {
          default: N(() => [
            E(o(re), {
              name: "add",
              size: "sm"
            }),
            ae(k(o(i)("Rule.create")), 1)
          ]),
          _: 1
        })
      ]),
      L.value.length ? (M(), I("ul", It, [
        (M(!0), I(xe, null, Me(L.value, (a) => (M(), I("li", {
          key: a.id,
          class: "rule"
        }, [
          _("div", Ot, [
            _("p", Vt, [
              _("span", St, k(o(i)("Rule.when")), 1),
              _("span", Nt, [
                _("span", jt, k(a.eventType || o(i)("Rule.anyEvent")), 1),
                _("span", Dt, k(Le(a)), 1)
              ])
            ]),
            we(a.conditions) ? (M(), I("p", Ut, [
              _("span", Wt, k(o(i)("Rule.if")), 1),
              _("span", $t, [
                _("span", zt, k(we(a.conditions)), 1)
              ])
            ])) : ee("", !0),
            (M(!0), I(xe, null, Me(_e(a), (g, v) => (M(), I("p", {
              key: v,
              class: "clause"
            }, [
              _("span", Gt, k(v === 0 ? o(i)("Rule.then") : o(i)("Rule.andWord")), 1),
              _("span", Ft, [
                _("span", qt, k(g.actionName || o(i)("Rule.noAction")), 1),
                _("span", Bt, k(ve(g)), 1)
              ])
            ]))), 128))
          ]),
          _("div", Lt, [
            E(o(B), {
              intent: "quiet",
              size: "sm",
              title: o(i)("Rule.edit"),
              onClick: (g) => Ee(a)
            }, {
              default: N(() => [
                E(o(re), {
                  name: "edit",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["title", "onClick"]),
            E(o(B), {
              intent: "quiet",
              size: "sm",
              title: o(i)("Rule.remove"),
              onClick: (g) => Te(a.id)
            }, {
              default: N(() => [
                E(o(re), {
                  name: "delete",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["title", "onClick"])
          ])
        ]))), 128))
      ])) : (M(), I("p", Ht, k(o(i)("Empty")), 1)),
      E(o(et), {
        modelValue: pe.value,
        "onUpdate:modelValue": u[6] || (u[6] = (a) => pe.value = a),
        title: be.value ? o(i)("Rule.edit") : o(i)("Rule.create"),
        size: "lg",
        onCancel: p
      }, {
        actions: N(() => [
          E(o(B), {
            intent: "quiet",
            onClick: u[5] || (u[5] = (a) => {
              pe.value = !1, p();
            })
          }, {
            default: N(() => [
              ae(k(o(i)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          E(o(B), {
            intent: "primary",
            onClick: me
          }, {
            default: N(() => [
              ae(k(be.value ? o(i)("common:Action.save") : o(i)("common:Action.create")), 1)
            ]),
            _: 1
          })
        ]),
        default: N(() => [
          _("div", Yt, [
            _("section", Zt, [
              _("h3", Jt, k(o(i)("Rule.when")), 1),
              _("div", Qt, [
                E(o(J), {
                  modelValue: y.value.context,
                  "onUpdate:modelValue": u[1] || (u[1] = (a) => y.value.context = a),
                  label: o(i)("Rule.context"),
                  stacked: "",
                  options: ce.value,
                  "label-key": "text",
                  "value-key": "value"
                }, null, 8, ["modelValue", "label", "options"]),
                y.value.context === "page" ? (M(), ue(o(J), {
                  key: 0,
                  modelValue: y.value.contextId,
                  "onUpdate:modelValue": u[2] || (u[2] = (a) => y.value.contextId = a),
                  label: o(i)("Context.page"),
                  stacked: "",
                  options: K.value,
                  "label-key": "text",
                  "value-key": "value",
                  clearable: ""
                }, null, 8, ["modelValue", "label", "options"])) : y.value.context === "widget" ? (M(), ue(o(Je), {
                  key: 1,
                  modelValue: y.value.contextId,
                  "onUpdate:modelValue": u[3] || (u[3] = (a) => y.value.contextId = a),
                  label: o(i)("Context.widget"),
                  stacked: "",
                  placeholder: o(i)("Rule.widgetPlaceholder")
                }, null, 8, ["modelValue", "label", "placeholder"])) : ee("", !0),
                E(o(J), {
                  modelValue: y.value.eventType,
                  "onUpdate:modelValue": u[4] || (u[4] = (a) => y.value.eventType = a),
                  label: o(i)("Rule.event"),
                  stacked: "",
                  options: Ge.value,
                  "label-key": "text",
                  "value-key": "value",
                  "group-key": "group"
                }, null, 8, ["modelValue", "label", "options"])
              ])
            ]),
            _("section", Xt, [
              _("h3", Kt, k(o(i)("Rule.if")), 1),
              _("div", en, [
                y.value.conditions && y.value.conditions.length ? (M(), I("div", tn, [
                  (M(!0), I(xe, null, Me(y.value.conditions, (a, g) => (M(), I("div", {
                    key: g,
                    class: "condition"
                  }, [
                    E(o(J), {
                      modelValue: a.prop,
                      "onUpdate:modelValue": (v) => a.prop = v,
                      placeholder: o(i)("Rule.property"),
                      options: Re.value,
                      "label-key": "text",
                      "value-key": "value"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "options"]),
                    E(o(J), {
                      modelValue: a.comperator,
                      "onUpdate:modelValue": (v) => a.comperator = v,
                      options: oe,
                      "label-key": "text",
                      "value-key": "value",
                      class: "condition__operator"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    E(o(Je), {
                      modelValue: a.value,
                      "onUpdate:modelValue": (v) => a.value = v,
                      placeholder: o(i)("Rule.value")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                    E(o(B), {
                      intent: "quiet",
                      size: "sm",
                      title: o(i)("Rule.removeCondition"),
                      onClick: (v) => qe(g)
                    }, {
                      default: N(() => [
                        E(o(re), {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title", "onClick"])
                  ]))), 128))
                ])) : (M(), I("p", nn, k(o(i)("Rule.noCondition")), 1)),
                E(o(B), {
                  size: "sm",
                  intent: "quiet",
                  onClick: ne
                }, {
                  default: N(() => [
                    E(o(re), {
                      name: "add",
                      size: "sm"
                    }),
                    ae(k(o(i)("Rule.condition")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            _("section", an, [
              _("h3", rn, k(o(i)("Rule.then")), 1),
              _("div", on, [
                y.value.actions && y.value.actions.length ? (M(), I("div", ln, [
                  (M(!0), I(xe, null, Me(y.value.actions, (a, g) => (M(), I("div", {
                    key: g,
                    class: Ye(["action", { "action--open": j.value === g }])
                  }, [
                    y.value.actions.length > 1 ? (M(), I("button", {
                      key: 0,
                      type: "button",
                      class: "action__head",
                      onClick: (v) => Ue(g)
                    }, [
                      _("span", un, k(a.actionName || o(i)("Rule.chooseAction")), 1),
                      _("span", cn, k(ve(a)), 1)
                    ], 8, sn)) : ee("", !0),
                    y.value.actions.length > 1 ? (M(), ue(o(B), {
                      key: 1,
                      intent: "quiet",
                      size: "sm",
                      title: o(i)("Rule.removeAction"),
                      onClick: Ze((v) => De(g), ["stop"])
                    }, {
                      default: N(() => [
                        E(o(re), {
                          name: "close",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title", "onClick"])) : ee("", !0),
                    j.value === g ? (M(), I("div", dn, [
                      _("div", fn, [
                        E(o(J), {
                          modelValue: a.targetContext,
                          "onUpdate:modelValue": (v) => a.targetContext = v,
                          label: o(i)("Rule.context"),
                          stacked: "",
                          options: ce.value,
                          "label-key": "text",
                          "value-key": "value"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"]),
                        a.targetContext === "page" ? (M(), ue(o(J), {
                          key: 0,
                          modelValue: a.targetContextId,
                          "onUpdate:modelValue": (v) => a.targetContextId = v,
                          label: o(i)("Context.page"),
                          stacked: "",
                          options: K.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])) : a.targetContext === "widget" || a.targetContext === "system" ? (M(), ue(o(J), {
                          key: 1,
                          modelValue: a.targetContextId,
                          "onUpdate:modelValue": (v) => a.targetContextId = v,
                          label: o(i)("Rule.target"),
                          stacked: "",
                          options: Fe.value,
                          "label-key": "text",
                          "value-key": "value",
                          clearable: "",
                          placeholder: o(i)("Rule.allInstances")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options", "placeholder"])) : ee("", !0),
                        E(o(J), {
                          modelValue: a.actionName,
                          "onUpdate:modelValue": (v) => a.actionName = v,
                          label: o(i)("Rule.action"),
                          stacked: "",
                          options: Ce.value,
                          "label-key": "text",
                          "value-key": "value",
                          "group-key": "group"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "options"])
                      ]),
                      ge.value.length ? (M(), I("div", vn, [
                        (M(!0), I(xe, null, Me(ge.value, (v) => (M(), I("div", {
                          key: v.index,
                          class: "param"
                        }, [
                          _("span", pn, [
                            ae(k(v.name), 1),
                            v.optional ? (M(), I("span", yn, ", " + k(o(i)("Rule.optional")), 1)) : ee("", !0)
                          ]),
                          _("div", hn, [
                            _("div", {
                              class: "source",
                              role: "group",
                              "aria-label": o(i)("Rule.valueFor", { name: v.name })
                            }, [
                              _("button", {
                                type: "button",
                                class: Ye(["source__side", { "source__side--on": se(v.index) === "payload" }]),
                                "aria-pressed": se(v.index) === "payload",
                                onClick: Ze((S) => $(v.index, "payload"), ["stop"])
                              }, k(o(i)("Rule.fromEvent")), 11, _n),
                              _("button", {
                                type: "button",
                                class: Ye(["source__side", { "source__side--on": se(v.index) === "manual" }]),
                                "aria-pressed": se(v.index) === "manual",
                                onClick: Ze((S) => $(v.index, "manual"), ["stop"])
                              }, k(o(i)("Rule.fixedValue")), 11, mn)
                            ], 8, gn),
                            se(v.index) === "payload" ? (M(), ue(o(J), {
                              key: 0,
                              "model-value": Ie(v.index),
                              options: Re.value,
                              "label-key": "text",
                              "value-key": "value",
                              placeholder: v.optional ? o(i)("Rule.optional") : o(i)("Rule.chooseProperty"),
                              clearable: "",
                              "onUpdate:modelValue": (S) => Be(v.index, String(S ?? ""))
                            }, null, 8, ["model-value", "options", "placeholder", "onUpdate:modelValue"])) : (M(), ue(o(Je), {
                              key: 1,
                              "model-value": fe(v.index),
                              placeholder: v.type,
                              "onUpdate:modelValue": (S) => Ae(v.index, String(S ?? ""))
                            }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue"]))
                          ])
                        ]))), 128))
                      ])) : ee("", !0)
                    ])) : ee("", !0)
                  ], 2))), 128))
                ])) : ee("", !0),
                E(o(B), {
                  size: "sm",
                  intent: "quiet",
                  onClick: je
                }, {
                  default: N(() => [
                    E(o(re), {
                      name: "add",
                      size: "sm"
                    }),
                    ae(k(o(i)("Rule.action")), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      E(o(et), {
        modelValue: ie.value,
        "onUpdate:modelValue": u[8] || (u[8] = (a) => ie.value = a),
        size: "sm",
        onCancel: de
      }, {
        header: N(() => [
          E(o(re), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          _("h2", wn, k(o(i)("Rule.remove")), 1)
        ]),
        actions: N(() => [
          E(o(B), {
            intent: "quiet",
            onClick: de
          }, {
            default: N(() => [
              ae(k(o(i)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          E(o(B), {
            intent: "danger",
            onClick: u[7] || (u[7] = (a) => Pe())
          }, {
            default: N(() => [
              ae(k(o(i)("common:Action.delete")), 1)
            ]),
            _: 1
          })
        ]),
        default: N(() => [
          _("p", bn, k(o(i)("Rule.confirmRemove")), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
}), xn = (O, i) => {
  const x = O.__vccOpts || O;
  for (const [R, C] of i)
    x[R] = C;
  return x;
}, lt = /* @__PURE__ */ xn(kn, [["__scopeId", "data-v-23d171f7"]]), Mn = { label: "Ereignisse" }, Rn = "Ereignisse", Cn = "Eine Regel verbindet, was auf einem Board geschieht, mit dem, was daraufhin geschehen soll.", En = "Noch keine Regel. Eine beginnt mit einem Ereignis — ein Klick auf ein Widget, eine Zeile in einer Tabelle — und endet in einer Aktion auf einem anderen.", Tn = { system: "System", page: "Seite", widget: "Widget" }, Pn = { create: "Regel anlegen", edit: "Regel bearbeiten", remove: "Regel löschen", confirmRemove: "Die Regel wird entfernt. Das lässt sich nicht rückgängig machen.", when: "Wenn", if: "Falls", then: "Dann", andWord: "und", and: " und ", anyEvent: "irgendein Ereignis", noAction: "noch keine Aktion", anyPage: "jede Seite", otherEvents: "Sonstige", allInstances: "alle Instanzen", context: "Kontext", widgetPlaceholder: "Kennung, leer für jedes", event: "Ereignis", property: "Eigenschaft", value: "Wert", removeCondition: "Bedingung entfernen", noCondition: "Ohne Bedingung läuft die Regel jedes Mal.", condition: "Bedingung", chooseAction: "Aktion wählen", removeAction: "Aktion entfernen", target: "Ziel", action: "Aktion", optional: "wahlweise", valueFor: "Wert für {{name}}", fromEvent: "aus dem Ereignis", fixedValue: "fester Wert", chooseProperty: "Eigenschaft wählen" }, An = { inSystem: "im System", onPage: "auf Seite {{page}}", onAnyPage: "auf jeder Seite", at: "an {{target}}", atAnyWidget: "an jedem Widget dieser Art", atAllInstances: "an allen Instanzen" }, In = {
  Nav: Mn,
  Title: Rn,
  Lead: Cn,
  Empty: En,
  Context: Tn,
  Rule: Pn,
  Phrase: An
}, On = { label: "Events" }, Vn = "Events", Sn = "A rule connects what happens on a board with what should happen in response.", Nn = "No rule yet. A rule starts with an event — a click on a widget, a row in a table — and ends in an action on another one.", jn = { system: "System", page: "Page", widget: "Widget" }, Dn = { create: "Create rule", edit: "Edit rule", remove: "Delete rule", confirmRemove: "The rule will be removed. This cannot be undone.", when: "When", if: "If", then: "Then", andWord: "and", and: " and ", anyEvent: "any event", noAction: "no action yet", anyPage: "any page", otherEvents: "Other", allInstances: "all instances", context: "Context", widgetPlaceholder: "Identifier, empty for any", event: "Event", property: "Property", value: "Value", removeCondition: "Remove condition", noCondition: "Without a condition the rule runs every time.", condition: "Condition", chooseAction: "Choose action", removeAction: "Remove action", target: "Target", action: "Action", optional: "optional", valueFor: "Value for {{name}}", fromEvent: "from the event", fixedValue: "fixed value", chooseProperty: "Choose property" }, Un = { inSystem: "in the system", onPage: "on page {{page}}", onAnyPage: "on any page", at: "at {{target}}", atAnyWidget: "at any widget of this kind", atAllInstances: "at all instances" }, Wn = {
  Nav: On,
  Title: Vn,
  Lead: Sn,
  Empty: Nn,
  Context: jn,
  Rule: Dn,
  Phrase: Un
};
var $n = Object.getOwnPropertyDescriptor, zn = (O, i, x, R) => {
  for (var C = R > 1 ? void 0 : R ? $n(i, x) : i, W = O.length - 1, L; W >= 0; W--)
    (L = O[W]) && (C = L(C) || C);
  return C;
};
const st = "eventmanager";
let Qe = class {
  namespace = st;
  resources = {
    de: In,
    en: Wn
  };
};
Qe = zn([
  Rt({
    service: ["Translations"],
    properties: { "i18n.namespace": st }
  })
], Qe);
const Xe = "events", ut = "events";
function ct({ services: O }) {
  const i = O.getRequired(it), x = new Mt();
  x.path = "/events", x.name = Xe, x.component = lt, i.registerRoute(x);
  const R = O.getRequired(ot), C = new xt();
  C.id = ut, C.label = "eventmanager:Nav.label", C.icon = "event", C.route = "/events", C.routeName = Xe, C.order = 15, C.visible = !0, R.registerNavigationItem(C);
}
function dt({ services: O }) {
  O.getRequired(it).unregisterRoute(Xe), O.getRequired(ot).unregisterNavigationItem(ut);
}
const Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventManagerUI: lt,
  get EventmanagerTranslations() {
    return Qe;
  },
  activate: ct,
  deactivate: dt
}, Symbol.toStringTag, { value: "Module" })), rt = "org.eclipse.daanse.board.app.ui.vue.eventmanager", Fn = "0.0.1-next.1";
async function Kn(O) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${rt}: tsm runtime is not initialized`);
  i.register(rt, Gn, Fn, "ui.vue.eventmanager"), await ct?.(O);
}
async function ea(O) {
  await dt?.(O);
}
export {
  lt as EventManagerUI,
  Qe as EventmanagerTranslations,
  Kn as activate,
  ea as deactivate
};
