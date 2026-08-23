import { Documentation as yt, Attribute as Et, ModelClass as Ct } from "org.eclipse.daanse.board.app.lib.annotations";
import { EVENT_REGISTRY_ID as Tt, EVENT_ACTIONS_REGISTRY_ID as St, EVENT_MANAGER_ID as Lt, EVENT_BUS_BRIDGE_ID as jt, ECORE_METADATA_SERVICE_ID as $t } from "org.eclipse.daanse.board.app.lib.api.events";
import { EVENT_ACTIONS_REGISTRY_ID as ci, EVENT_REGISTRY_ID as ui } from "org.eclipse.daanse.board.app.lib.api.events";
import { loggerFactory as Nt } from "org.eclipse.daanse.board.app.lib.logger";
import { injectable as Ts, inject as ft } from "@eclipse-daanse/tsm";
const { TINY_EMITTER: Hs } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var Vs = Object.defineProperty, Js = Object.getOwnPropertyDescriptor, ut = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Js(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = (s ? a(e, t, r) : a(r)) || r);
  return s && r && Vs(e, t, r), r;
};
let qe = class {
};
ut([
  yt("Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."),
  Et()
], qe.prototype, "eventType", 2);
ut([
  yt("ID of the widget that emitted this event."),
  Et()
], qe.prototype, "widgetId", 2);
ut([
  yt("Unix timestamp when the event was emitted."),
  Et()
], qe.prototype, "timestamp", 2);
ut([
  yt("Optional metadata object for additional context."),
  Et()
], qe.prototype, "metadata", 2);
qe = ut([
  Ct({ type: "http://org.eclipse.daanse.board.app.lib.events#//Payload" })
], qe);
var Qs = Object.getOwnPropertyDescriptor, Zs = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Qs(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = a(r) || r);
  return r;
};
let ot = class {
};
ot = Zs([
  Ct({ type: "http://org.eclipse.daanse.board.app.lib.events#//WidgetActionInterface" })
], ot);
var er = Object.getOwnPropertyDescriptor, tr = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? er(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = a(r) || r);
  return r;
};
let Ft = class extends ot {
};
Ft = tr([
  Ct({ type: "http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface" })
], Ft);
var sr = Object.getOwnPropertyDescriptor, rr = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? sr(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = a(r) || r);
  return r;
};
let kt = class extends ot {
};
kt = rr([
  Ct({ type: "http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface" })
], kt);
var Me = /* @__PURE__ */ ((l) => (l.eq = "eq", l.lt = "lt", l.gt = "gt", l.lte = "lte", l.gte = "gte", l.neq = "neq", l))(Me || {});
class nr {
  constructor() {
    this.comperator = Me.eq;
  }
}
var Vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ir(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
function ar(l) {
  if (Object.prototype.hasOwnProperty.call(l, "__esModule")) return l;
  var e = l.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(l).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(l, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return l[s];
      }
    });
  }), t;
}
var Jt = {};
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
var Qt;
function or() {
  if (Qt) return Jt;
  Qt = 1;
  var l;
  return (function(e) {
    (function(t) {
      var s = typeof globalThis == "object" ? globalThis : typeof Vt == "object" ? Vt : typeof self == "object" ? self : typeof this == "object" ? this : d(), r = n(e);
      typeof s.Reflect < "u" && (r = n(s.Reflect, r)), t(r, s), typeof s.Reflect > "u" && (s.Reflect = e);
      function n(y, S) {
        return function(C, A) {
          Object.defineProperty(y, C, { configurable: !0, writable: !0, value: A }), S && S(C, A);
        };
      }
      function a() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function o() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function d() {
        return a() || o();
      }
    })(function(t, s) {
      var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", a = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", o = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", d = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, S = !d && !y, C = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: d ? function() {
          return E(/* @__PURE__ */ Object.create(null));
        } : y ? function() {
          return E({ __proto__: null });
        } : function() {
          return E({});
        },
        has: S ? function(f, m) {
          return r.call(f, m);
        } : function(f, m) {
          return m in f;
        },
        get: S ? function(f, m) {
          return r.call(f, m) ? f[m] : void 0;
        } : function(f, m) {
          return f[m];
        }
      }, A = Object.getPrototypeOf(Function), b = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : i(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : c(), M = typeof WeakMap == "function" ? WeakMap : p(), U = n ? Symbol.for("@reflect-metadata:registry") : void 0, _ = wt(), x = Fe(_);
      function D(f, m, w, v) {
        if (G(w)) {
          if (!Z(f))
            throw new TypeError();
          if (!ue(m))
            throw new TypeError();
          return Be(f, m);
        } else {
          if (!Z(f))
            throw new TypeError();
          if (!ae(m))
            throw new TypeError();
          if (!ae(v) && !G(v) && !Ne(v))
            throw new TypeError();
          return Ne(v) && (v = void 0), w = q(w), Xe(f, m, w, v);
        }
      }
      t("decorate", D);
      function $(f, m) {
        function w(v, P) {
          if (!ae(v))
            throw new TypeError();
          if (!G(P) && !de(P))
            throw new TypeError();
          Ue(f, m, v, P);
        }
        return w;
      }
      t("metadata", $);
      function L(f, m, w, v) {
        if (!ae(w))
          throw new TypeError();
        return G(v) || (v = q(v)), Ue(f, m, w, v);
      }
      t("defineMetadata", L);
      function Ee(f, m, w) {
        if (!ae(m))
          throw new TypeError();
        return G(w) || (w = q(w)), Ae(f, m, w);
      }
      t("hasMetadata", Ee);
      function fe(f, m, w) {
        if (!ae(m))
          throw new TypeError();
        return G(w) || (w = q(w)), Oe(f, m, w);
      }
      t("hasOwnMetadata", fe);
      function Pe(f, m, w) {
        if (!ae(m))
          throw new TypeError();
        return G(w) || (w = q(w)), V(f, m, w);
      }
      t("getMetadata", Pe);
      function N(f, m, w) {
        if (!ae(m))
          throw new TypeError();
        return G(w) || (w = q(w)), ze(f, m, w);
      }
      t("getOwnMetadata", N);
      function Ye(f, m) {
        if (!ae(f))
          throw new TypeError();
        return G(m) || (m = q(m)), Le(f, m);
      }
      t("getMetadataKeys", Ye);
      function ke(f, m) {
        if (!ae(f))
          throw new TypeError();
        return G(m) || (m = q(m)), Q(f, m);
      }
      t("getOwnMetadataKeys", ke);
      function ie(f, m, w) {
        if (!ae(m))
          throw new TypeError();
        if (G(w) || (w = q(w)), !ae(m))
          throw new TypeError();
        G(w) || (w = q(w));
        var v = h(
          m,
          w,
          /*Create*/
          !1
        );
        return G(v) ? !1 : v.OrdinaryDeleteMetadata(f, m, w);
      }
      t("deleteMetadata", ie);
      function Be(f, m) {
        for (var w = f.length - 1; w >= 0; --w) {
          var v = f[w], P = v(m);
          if (!G(P) && !Ne(P)) {
            if (!ue(P))
              throw new TypeError();
            m = P;
          }
        }
        return m;
      }
      function Xe(f, m, w, v) {
        for (var P = f.length - 1; P >= 0; --P) {
          var X = f[P], W = X(m, w, v);
          if (!G(W) && !Ne(W)) {
            if (!ae(W))
              throw new TypeError();
            v = W;
          }
        }
        return v;
      }
      function Ae(f, m, w) {
        var v = Oe(f, m, w);
        if (v)
          return !0;
        var P = me(m);
        return Ne(P) ? !1 : Ae(f, P, w);
      }
      function Oe(f, m, w) {
        var v = h(
          m,
          w,
          /*Create*/
          !1
        );
        return G(v) ? !1 : I(v.OrdinaryHasOwnMetadata(f, m, w));
      }
      function V(f, m, w) {
        var v = Oe(f, m, w);
        if (v)
          return ze(f, m, w);
        var P = me(m);
        if (!Ne(P))
          return V(f, P, w);
      }
      function ze(f, m, w) {
        var v = h(
          m,
          w,
          /*Create*/
          !1
        );
        if (!G(v))
          return v.OrdinaryGetOwnMetadata(f, m, w);
      }
      function Ue(f, m, w, v) {
        var P = h(
          w,
          v,
          /*Create*/
          !0
        );
        P.OrdinaryDefineOwnMetadata(f, m, w, v);
      }
      function Le(f, m) {
        var w = Q(f, m), v = me(f);
        if (v === null)
          return w;
        var P = Le(v, m);
        if (P.length <= 0)
          return w;
        if (w.length <= 0)
          return P;
        for (var X = new R(), W = [], z = 0, F = w; z < F.length; z++) {
          var k = F[z], B = X.has(k);
          B || (X.add(k), W.push(k));
        }
        for (var O = 0, K = P; O < K.length; O++) {
          var k = K[O], B = X.has(k);
          B || (X.add(k), W.push(k));
        }
        return W;
      }
      function Q(f, m) {
        var w = h(
          f,
          m,
          /*create*/
          !1
        );
        return w ? w.OrdinaryOwnMetadataKeys(f, m) : [];
      }
      function ge(f) {
        if (f === null)
          return 1;
        switch (typeof f) {
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
            return f === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function G(f) {
        return f === void 0;
      }
      function Ne(f) {
        return f === null;
      }
      function je(f) {
        return typeof f == "symbol";
      }
      function ae(f) {
        return typeof f == "object" ? f !== null : typeof f == "function";
      }
      function g(f, m) {
        switch (ge(f)) {
          case 0:
            return f;
          case 1:
            return f;
          case 2:
            return f;
          case 3:
            return f;
          case 4:
            return f;
          case 5:
            return f;
        }
        var w = "string", v = oe(f, a);
        if (v !== void 0) {
          var P = v.call(f, w);
          if (ae(P))
            throw new TypeError();
          return P;
        }
        return u(f);
      }
      function u(f, m) {
        var w, v, P;
        {
          var X = f.toString;
          if (J(X)) {
            var v = X.call(f);
            if (!ae(v))
              return v;
          }
          var w = f.valueOf;
          if (J(w)) {
            var v = w.call(f);
            if (!ae(v))
              return v;
          }
        }
        throw new TypeError();
      }
      function I(f) {
        return !!f;
      }
      function T(f) {
        return "" + f;
      }
      function q(f) {
        var m = g(f);
        return je(m) ? m : T(m);
      }
      function Z(f) {
        return Array.isArray ? Array.isArray(f) : f instanceof Object ? f instanceof Array : Object.prototype.toString.call(f) === "[object Array]";
      }
      function J(f) {
        return typeof f == "function";
      }
      function ue(f) {
        return typeof f == "function";
      }
      function de(f) {
        switch (ge(f)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function _e(f, m) {
        return f === m || f !== f && m !== m;
      }
      function oe(f, m) {
        var w = f[m];
        if (w != null) {
          if (!J(w))
            throw new TypeError();
          return w;
        }
      }
      function Te(f) {
        var m = oe(f, o);
        if (!J(m))
          throw new TypeError();
        var w = m.call(f);
        if (!ae(w))
          throw new TypeError();
        return w;
      }
      function Ke(f) {
        return f.value;
      }
      function $e(f) {
        var m = f.next();
        return m.done ? !1 : m;
      }
      function be(f) {
        var m = f.return;
        m && m.call(f);
      }
      function me(f) {
        var m = Object.getPrototypeOf(f);
        if (typeof f != "function" || f === A || m !== A)
          return m;
        var w = f.prototype, v = w && Object.getPrototypeOf(w);
        if (v == null || v === Object.prototype)
          return m;
        var P = v.constructor;
        return typeof P != "function" || P === f ? m : P;
      }
      function tt() {
        var f;
        !G(U) && typeof s.Reflect < "u" && !(U in s.Reflect) && typeof s.Reflect.defineMetadata == "function" && (f = It(s.Reflect));
        var m, w, v, P = new M(), X = {
          registerProvider: W,
          getProvider: F,
          setProvider: B
        };
        return X;
        function W(O) {
          if (!Object.isExtensible(X))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case f === O:
              break;
            case G(m):
              m = O;
              break;
            case m === O:
              break;
            case G(w):
              w = O;
              break;
            case w === O:
              break;
            default:
              v === void 0 && (v = new R()), v.add(O);
              break;
          }
        }
        function z(O, K) {
          if (!G(m)) {
            if (m.isProviderFor(O, K))
              return m;
            if (!G(w)) {
              if (w.isProviderFor(O, K))
                return m;
              if (!G(v))
                for (var se = Te(v); ; ) {
                  var pe = $e(se);
                  if (!pe)
                    return;
                  var ve = Ke(pe);
                  if (ve.isProviderFor(O, K))
                    return be(se), ve;
                }
            }
          }
          if (!G(f) && f.isProviderFor(O, K))
            return f;
        }
        function F(O, K) {
          var se = P.get(O), pe;
          return G(se) || (pe = se.get(K)), G(pe) && (pe = z(O, K), G(pe) || (G(se) && (se = new b(), P.set(O, se)), se.set(K, pe))), pe;
        }
        function k(O) {
          if (G(O))
            throw new TypeError();
          return m === O || w === O || !G(v) && v.has(O);
        }
        function B(O, K, se) {
          if (!k(se))
            throw new Error("Metadata provider not registered.");
          var pe = F(O, K);
          if (pe !== se) {
            if (!G(pe))
              return !1;
            var ve = P.get(O);
            G(ve) && (ve = new b(), P.set(O, ve)), ve.set(K, se);
          }
          return !0;
        }
      }
      function wt() {
        var f;
        return !G(U) && ae(s.Reflect) && Object.isExtensible(s.Reflect) && (f = s.Reflect[U]), G(f) && (f = tt()), !G(U) && ae(s.Reflect) && Object.isExtensible(s.Reflect) && Object.defineProperty(s.Reflect, U, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: f
        }), f;
      }
      function Fe(f) {
        var m = new M(), w = {
          isProviderFor: function(k, B) {
            var O = m.get(k);
            return G(O) ? !1 : O.has(B);
          },
          OrdinaryDefineOwnMetadata: W,
          OrdinaryHasOwnMetadata: P,
          OrdinaryGetOwnMetadata: X,
          OrdinaryOwnMetadataKeys: z,
          OrdinaryDeleteMetadata: F
        };
        return _.registerProvider(w), w;
        function v(k, B, O) {
          var K = m.get(k), se = !1;
          if (G(K)) {
            if (!O)
              return;
            K = new b(), m.set(k, K), se = !0;
          }
          var pe = K.get(B);
          if (G(pe)) {
            if (!O)
              return;
            if (pe = new b(), K.set(B, pe), !f.setProvider(k, B, w))
              throw K.delete(B), se && m.delete(k), new Error("Wrong provider for target.");
          }
          return pe;
        }
        function P(k, B, O) {
          var K = v(
            B,
            O,
            /*Create*/
            !1
          );
          return G(K) ? !1 : I(K.has(k));
        }
        function X(k, B, O) {
          var K = v(
            B,
            O,
            /*Create*/
            !1
          );
          if (!G(K))
            return K.get(k);
        }
        function W(k, B, O, K) {
          var se = v(
            O,
            K,
            /*Create*/
            !0
          );
          se.set(k, B);
        }
        function z(k, B) {
          var O = [], K = v(
            k,
            B,
            /*Create*/
            !1
          );
          if (G(K))
            return O;
          for (var se = K.keys(), pe = Te(se), ve = 0; ; ) {
            var Ht = $e(pe);
            if (!Ht)
              return O.length = ve, O;
            var zs = Ke(Ht);
            try {
              O[ve] = zs;
            } catch (Ks) {
              try {
                be(pe);
              } finally {
                throw Ks;
              }
            }
            ve++;
          }
        }
        function F(k, B, O) {
          var K = v(
            B,
            O,
            /*Create*/
            !1
          );
          if (G(K) || !K.delete(k))
            return !1;
          if (K.size === 0) {
            var se = m.get(B);
            G(se) || (se.delete(O), se.size === 0 && m.delete(se));
          }
          return !0;
        }
      }
      function It(f) {
        var m = f.defineMetadata, w = f.hasOwnMetadata, v = f.getOwnMetadata, P = f.getOwnMetadataKeys, X = f.deleteMetadata, W = new M(), z = {
          isProviderFor: function(F, k) {
            var B = W.get(F);
            return !G(B) && B.has(k) ? !0 : P(F, k).length ? (G(B) && (B = new R(), W.set(F, B)), B.add(k), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: m,
          OrdinaryHasOwnMetadata: w,
          OrdinaryGetOwnMetadata: v,
          OrdinaryOwnMetadataKeys: P,
          OrdinaryDeleteMetadata: X
        };
        return z;
      }
      function h(f, m, w) {
        var v = _.getProvider(f, m);
        if (!G(v))
          return v;
        if (w) {
          if (_.setProvider(f, m, x))
            return x;
          throw new Error("Illegal state.");
        }
      }
      function i() {
        var f = {}, m = [], w = (
          /** @class */
          (function() {
            function z(F, k, B) {
              this._index = 0, this._keys = F, this._values = k, this._selector = B;
            }
            return z.prototype["@@iterator"] = function() {
              return this;
            }, z.prototype[o] = function() {
              return this;
            }, z.prototype.next = function() {
              var F = this._index;
              if (F >= 0 && F < this._keys.length) {
                var k = this._selector(this._keys[F], this._values[F]);
                return F + 1 >= this._keys.length ? (this._index = -1, this._keys = m, this._values = m) : this._index++, { value: k, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, z.prototype.throw = function(F) {
              throw this._index >= 0 && (this._index = -1, this._keys = m, this._values = m), F;
            }, z.prototype.return = function(F) {
              return this._index >= 0 && (this._index = -1, this._keys = m, this._values = m), { value: F, done: !0 };
            }, z;
          })()
        ), v = (
          /** @class */
          (function() {
            function z() {
              this._keys = [], this._values = [], this._cacheKey = f, this._cacheIndex = -2;
            }
            return Object.defineProperty(z.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), z.prototype.has = function(F) {
              return this._find(
                F,
                /*insert*/
                !1
              ) >= 0;
            }, z.prototype.get = function(F) {
              var k = this._find(
                F,
                /*insert*/
                !1
              );
              return k >= 0 ? this._values[k] : void 0;
            }, z.prototype.set = function(F, k) {
              var B = this._find(
                F,
                /*insert*/
                !0
              );
              return this._values[B] = k, this;
            }, z.prototype.delete = function(F) {
              var k = this._find(
                F,
                /*insert*/
                !1
              );
              if (k >= 0) {
                for (var B = this._keys.length, O = k + 1; O < B; O++)
                  this._keys[O - 1] = this._keys[O], this._values[O - 1] = this._values[O];
                return this._keys.length--, this._values.length--, _e(F, this._cacheKey) && (this._cacheKey = f, this._cacheIndex = -2), !0;
              }
              return !1;
            }, z.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = f, this._cacheIndex = -2;
            }, z.prototype.keys = function() {
              return new w(this._keys, this._values, P);
            }, z.prototype.values = function() {
              return new w(this._keys, this._values, X);
            }, z.prototype.entries = function() {
              return new w(this._keys, this._values, W);
            }, z.prototype["@@iterator"] = function() {
              return this.entries();
            }, z.prototype[o] = function() {
              return this.entries();
            }, z.prototype._find = function(F, k) {
              if (!_e(this._cacheKey, F)) {
                this._cacheIndex = -1;
                for (var B = 0; B < this._keys.length; B++)
                  if (_e(this._keys[B], F)) {
                    this._cacheIndex = B;
                    break;
                  }
              }
              return this._cacheIndex < 0 && k && (this._cacheIndex = this._keys.length, this._keys.push(F), this._values.push(void 0)), this._cacheIndex;
            }, z;
          })()
        );
        return v;
        function P(z, F) {
          return z;
        }
        function X(z, F) {
          return F;
        }
        function W(z, F) {
          return [z, F];
        }
      }
      function c() {
        var f = (
          /** @class */
          (function() {
            function m() {
              this._map = new b();
            }
            return Object.defineProperty(m.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), m.prototype.has = function(w) {
              return this._map.has(w);
            }, m.prototype.add = function(w) {
              return this._map.set(w, w), this;
            }, m.prototype.delete = function(w) {
              return this._map.delete(w);
            }, m.prototype.clear = function() {
              this._map.clear();
            }, m.prototype.keys = function() {
              return this._map.keys();
            }, m.prototype.values = function() {
              return this._map.keys();
            }, m.prototype.entries = function() {
              return this._map.entries();
            }, m.prototype["@@iterator"] = function() {
              return this.keys();
            }, m.prototype[o] = function() {
              return this.keys();
            }, m;
          })()
        );
        return f;
      }
      function p() {
        var f = 16, m = C.create(), w = v();
        return (
          /** @class */
          (function() {
            function F() {
              this._key = v();
            }
            return F.prototype.has = function(k) {
              var B = P(
                k,
                /*create*/
                !1
              );
              return B !== void 0 ? C.has(B, this._key) : !1;
            }, F.prototype.get = function(k) {
              var B = P(
                k,
                /*create*/
                !1
              );
              return B !== void 0 ? C.get(B, this._key) : void 0;
            }, F.prototype.set = function(k, B) {
              var O = P(
                k,
                /*create*/
                !0
              );
              return O[this._key] = B, this;
            }, F.prototype.delete = function(k) {
              var B = P(
                k,
                /*create*/
                !1
              );
              return B !== void 0 ? delete B[this._key] : !1;
            }, F.prototype.clear = function() {
              this._key = v();
            }, F;
          })()
        );
        function v() {
          var F;
          do
            F = "@@WeakMap@@" + z();
          while (C.has(m, F));
          return m[F] = !0, F;
        }
        function P(F, k) {
          if (!r.call(F, w)) {
            if (!k)
              return;
            Object.defineProperty(F, w, { value: C.create() });
          }
          return F[w];
        }
        function X(F, k) {
          for (var B = 0; B < k; ++B)
            F[B] = Math.random() * 255 | 0;
          return F;
        }
        function W(F) {
          if (typeof Uint8Array == "function") {
            var k = new Uint8Array(F);
            return typeof crypto < "u" ? crypto.getRandomValues(k) : typeof msCrypto < "u" ? msCrypto.getRandomValues(k) : X(k, F), k;
          }
          return X(new Array(F), F);
        }
        function z() {
          var F = W(f);
          F[6] = F[6] & 79 | 64, F[8] = F[8] & 191 | 128;
          for (var k = "", B = 0; B < f; ++B) {
            var O = F[B];
            (B === 4 || B === 6 || B === 8) && (k += "-"), O < 16 && (k += "0"), k += O.toString(16).toLowerCase();
          }
          return k;
        }
      }
      function E(f) {
        return f.__ = void 0, delete f.__, f;
      }
    });
  })(l || (l = {})), Jt;
}
or();
class Ss {
  constructor() {
    this.events = /* @__PURE__ */ new Map(), this.widgetTypeMap = /* @__PURE__ */ new Map();
  }
  // EcoreMetadataService instance
  /**
   * Set EcoreMetadataService instance for Ecore-based metadata extraction
   */
  setEcoreMetadataService(e) {
    this.ecoreMetadataService = e;
  }
  /**
   * Registriert alle Events eines Widgets
   */
  registerWidget(e, t) {
    for (const s of t) {
      const r = `${e}:${s.type}`;
      this.widgetTypeMap.set(r, e), this.events.set(r, {
        ...s,
        type: r
        // z.B. "MapWidget:click_on_datastream"
      });
    }
  }
  /**
   * Gibt alle registrierten Events zurück (mit vollständigem widgetType:eventType)
   */
  getAllEvents() {
    return Array.from(this.events.values());
  }
  /**
   * Gibt ein Event zurück
   */
  getEvent(e, t) {
    return this.events.get(`${e}:${t}`);
  }
  /**
   * Gibt alle Events für einen Widget-Typ zurück
   */
  getWidgetEvents(e) {
    return Array.from(this.events.entries()).filter(([t]) => t.startsWith(`${e}:`)).map(([, t]) => t);
  }
  /**
   * Extrahiert alle Metadaten aus einem Payload-Typ
   */
  extractPayloadMetadata(e) {
    const t = e.prototype ?? e, s = {}, r = Reflect.getMetadataKeys(t);
    s.__class = r.map((o) => ({
      key: o,
      value: Reflect.getMetadata(o, t)
    }));
    const n = Object.getOwnPropertyNames(t), a = new Set(n);
    try {
      const o = new e();
      Object.keys(o).forEach((d) => a.add(d));
    } catch {
    }
    for (const o of a) {
      if (o === "constructor") continue;
      const d = Reflect.getMetadataKeys(t, o);
      d.length !== 0 && (s[o] = d.map((y) => ({
        key: y,
        value: Reflect.getMetadata(y, t, o)
      })));
    }
    return s;
  }
  /**
   * Extract payload properties with type information from Ecore model
   * Falls back to decorator-based extraction if Ecore model is not available
   */
  extractPayloadPropertiesForEvent(e) {
    const t = this.widgetTypeMap.get(e);
    if (!t || !this.ecoreMetadataService)
      return console.warn(`No widget type or EcoreMetadataService for event: ${e}`), [];
    const s = this.events.get(e);
    if (!s || !s.payloadType)
      return console.warn(`No event or payload type found for: ${e}`), [];
    const r = s.payloadType.name, n = this.ecoreMetadataService.extractPayloadMetadata(t, r);
    return n && n.properties ? (console.log(`✅ Extracted ${n.properties.length} properties from Ecore model for ${r}`), n.properties) : (console.warn(`No Ecore metadata found for ${r}, returning empty array`), []);
  }
  /**
   * Extract payload properties with type information (legacy method for backward compatibility)
   * @deprecated Use extractPayloadPropertiesForEvent instead
   */
  extractPayloadProperties(e) {
    return console.warn("extractPayloadProperties() called - this method is deprecated, use extractPayloadPropertiesForEvent() instead"), [];
  }
  /**
   * Löscht alle registrierten Events
   */
  clear() {
    this.events.clear();
  }
  /**
   * Entfernt alle Events eines Widget-Typs
   */
  unregisterWidget(e) {
    const t = [];
    for (const s of this.events.keys())
      s.startsWith(`${e}:`) && t.push(s);
    for (const s of t)
      this.events.delete(s);
  }
}
const Ns = Symbol.for(Tt), Ve = Nt.createLogger("daanse:events:decorator"), Bt = Symbol.for("daanse:widgetAction"), Mt = Symbol.for("daanse:actionParameter");
function cr(l) {
  return function(e, t, s) {
    const r = Reflect.getMetadata(Bt, e.constructor) || [], n = Reflect.getMetadata("design:paramtypes", e, t) || [];
    let a = l.parameters;
    if (!a && s.value) {
      const d = s.value.toString().match(/\(([^)]*)\)/);
      d && d[1].trim() && (a = d[1].split(",").map((S) => S.trim()).map((S, C) => {
        const A = S.match(/^(\w+)(\?)?:\s*(\w+)/);
        if (A) {
          const [, R, M, U] = A;
          return `${R}${M || ""}: ${U}`;
        }
        const b = n[C]?.name || "any";
        return `${S}: ${b}`;
      }));
    }
    return Reflect.defineMetadata(
      Bt,
      [
        ...r,
        {
          methodName: t,
          ...l,
          parameters: a
        }
      ],
      e.constructor
    ), s;
  };
}
function ur(l) {
  return function(e, t, s) {
    const r = String(t), n = Reflect.getMetadata(Mt, e, r) || [], o = (Reflect.getMetadata("design:paramtypes", e, r) || [])[s];
    let d = l?.name, y = l?.type, S = l?.optional;
    if (!d || !y) {
      const A = Object.getOwnPropertyDescriptor(e, r)?.value || e[r];
      if (A) {
        const R = A.toString().replace(/\s+/g, " ").match(/^[^(]*\(([^)]*)\)/);
        if (R && R[1].trim()) {
          const U = R[1].split(",").map((_) => _.replace(/\/\*.*\*\//, "").trim()).filter((_) => _.length > 0 && !_.startsWith("@"))[s];
          if (U) {
            const _ = U.match(/^(\w+)(\?)?(?::\s*(.+?))?(?:\s*=|$)/);
            _ && (d || (d = _[1]), S || (S = !!_[2]), !y && _[3] && (y = _[3].trim()));
          }
        }
      }
    }
    let C = y;
    !C && o && (C = {
      String: "string",
      Number: "number",
      Boolean: "boolean",
      Array: "Array<any>",
      Object: "object"
    }[o.name] || o.name || "any"), n.push({
      index: s,
      name: d || `arg${s}`,
      type: C || "any",
      optional: S
    }), Reflect.defineMetadata(Mt, n, e, r), Ve(
      "ActionParameter: %s[%d] = %s: %s%s",
      r,
      s,
      d || `arg${s}`,
      y || o?.name || "any",
      S ? "?" : ""
    );
  };
}
function _s(l) {
  const e = typeof l == "function" ? l : l.constructor;
  Ve("getWidgetActions called with target: %o", l), Ve("  constructor: %o", e), Ve("  constructor.name: %s", e?.name);
  const t = Reflect.getMetadataKeys(e);
  Ve("  All metadata keys: %o", t);
  let s = Reflect.getMetadata(Bt, e) || [];
  return s = s.map((r) => {
    const n = Reflect.getMetadata(Mt, e.prototype, r.methodName) || [];
    if (n.length > 0 && !r.parameters) {
      const a = [...n].sort((o, d) => o.index - d.index);
      r.parameters = a.map(
        (o) => `${o.name}${o.optional ? "?" : ""}: ${o.type}`
      );
    }
    return r;
  }), Ve("  Actions found: %o", s), s;
}
class ws {
  constructor() {
    this.actions = /* @__PURE__ */ new Map(), this.widgetTypes = /* @__PURE__ */ new Map(), this.widgetInstances = /* @__PURE__ */ new Map(), this.instanceTypes = /* @__PURE__ */ new Map(), this.instancePages = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen eindeutigen Key für die Registry
   */
  createKey(e, t, s) {
    return s ? `${e}:${s}:${t}` : `${e}:${t}`;
  }
  /**
   * Registriert eine Aktion für ein Event in einem Kontext
   */
  register(e, t, s, r) {
    const n = this.createKey(e, t, r);
    this.actions.has(n) || this.actions.set(n, []), this.actions.get(n).push({
      context: e,
      contextId: r,
      eventType: t,
      action: s
    });
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Kontext
   */
  unregister(e, t, s) {
    const r = this.createKey(e, t, s);
    this.actions.delete(r);
  }
  /**
   * Führt alle registrierten Aktionen für ein Event aus
   */
  async execute(e, t, ...s) {
    const r = this.createKey(e, t), n = this.actions.get(r) || [];
    for (const a of n)
      try {
        await a.action(...s);
      } catch (o) {
        console.error(`Error executing action for ${r}:`, o);
      }
  }
  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(e, t, s) {
    if (t) {
      const a = this.createKey(e, t, s);
      return this.actions.get(a) || [];
    }
    const r = [], n = s ? `${e}:${s}:` : `${e}:`;
    for (const [a, o] of this.actions.entries())
      a.startsWith(n) && r.push(...o);
    return r;
  }
  /**
   * Löscht alle registrierten Aktionen
   */
  clear() {
    this.actions.clear();
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Context-ID (z.B. beim Unmount eines Widgets)
   */
  clearContext(e, t) {
    const s = [], r = `${e}:${t}:`;
    for (const n of this.actions.keys())
      n.startsWith(r) && s.push(n);
    for (const n of s)
      this.actions.delete(n);
    e === "widget" && this.widgetInstances.delete(t);
  }
  /**
   * Set the EcoreMetadataService (injected manually to avoid circular dependency)
   */
  setEcoreMetadataService(e) {
    this.ecoreMetadataService = e;
  }
  /**
   * Registriert einen Widget-Typ mit seinen Actions (aus @WidgetAction Decorators)
   * Wird beim Package-Import aufgerufen
   * @param widgetType - Widget type identifier
   * @param baseClass - Die abstrakte Basis-Klasse mit @WidgetAction Decorators
   * @param context - Optional: Kontext für diese Actions (default: 'widget')
   */
  registerWidgetType(e, t, s) {
    const r = _s(t);
    this.widgetTypes.set(e, {
      widgetType: e,
      baseClass: t,
      actions: r,
      context: s || "widget"
    }), console.log(`📝 Registered widget type "${e}" (context: ${s || "widget"}) with ${r.length} actions:`), r.forEach((n) => {
      console.log(`  - ${n.methodName}(${n.parameters?.join(", ") || ""})`, n);
    });
  }
  /**
   * Nimmt die Registrierung eines Widget-Typs zurück.
   *
   * Gegenstück zu registerWidgetType, damit ein Widget-Modul seine
   * Registrierung in deactivate() wieder aufheben kann.
   *
   * @param widgetType - Widget type identifier
   * @returns ob der Typ registriert war
   */
  unregisterWidgetType(e) {
    return this.widgetTypes.delete(e);
  }
  /**
   * Registriert Actions aus einem Ecore-Modell
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreUri - URI zum Ecore-Model (z.B. "model/model.ecore")
   * @param context - Kontext für diese Actions (default: 'widget')
   */
  async registerActionsFromEcore(e, t, s) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModel(e, t);
      const n = this.ecoreMetadataService.extractActions(e).map((a) => ({
        methodName: a.methodName,
        eventType: a.eventType,
        parameters: a.parameters.map(
          (o) => `${o.name}${o.optional ? "?" : ""}: ${o.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: n,
        context: s || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${s || "widget"}) from Ecore with ${n.length} actions:`), n.forEach((a) => {
        console.log(`  - ${a.methodName}(${a.parameters?.join(", ") || ""})`, a);
      });
    } catch (r) {
      throw console.error(`Failed to register actions "${e}" from Ecore:`, r), r;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcore instead
   */
  async registerWidgetTypeFromEcore(e, t) {
    return console.warn("registerWidgetTypeFromEcore is deprecated. Use registerActionsFromEcore instead."), this.registerActionsFromEcore(e, t, "widget");
  }
  /**
   * Registriert Actions aus einem Ecore-Modell-String
   * @param name - Action type identifier (z.B. "MapWidget", "OGCSTAToChartComposer")
   * @param ecoreContent - Ecore model as string
   * @param context - Kontext für diese Actions (default: 'widget')
   * @param uri - Optional URI for the model
   */
  async registerActionsFromEcoreString(e, t, s, r) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModelFromString(e, t, r);
      const a = this.ecoreMetadataService.extractActions(e).map((o) => ({
        methodName: o.methodName,
        eventType: o.eventType,
        parameters: o.parameters.map(
          (d) => `${d.name}${d.optional ? "?" : ""}: ${d.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: a,
        context: s || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${s || "widget"}) from Ecore string with ${a.length} actions:`), a.forEach((o) => {
        console.log(`  - ${o.methodName}(${o.parameters?.join(", ") || ""})`, o);
      });
    } catch (n) {
      throw console.error(`Failed to register actions "${e}" from Ecore string:`, n), n;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcoreString instead
   */
  async registerWidgetTypeFromEcoreString(e, t, s) {
    return console.warn("registerWidgetTypeFromEcoreString is deprecated. Use registerActionsFromEcoreString instead."), this.registerActionsFromEcoreString(e, t, "widget", s);
  }
  /**
   * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
   * Wird beim Mount/Init aufgerufen
   * @param instanceId - Eindeutige ID der Instanz
   * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
   * @param widgetType - Optional: Widget-Typ für die Instanz (z.B. "OGCSTAToChartComposer")
   * @param pageId - Optional: Page ID auf der die Instanz lebt
   */
  registerInstance(e, t, s, r) {
    this.widgetInstances.set(e, t), s && this.instanceTypes.set(e, s), r && this.instancePages.set(e, r), console.log(`Registered instance "${e}"${s ? ` (type: ${s})` : ""}${r ? ` (page: ${r})` : ""}`);
  }
  /**
   * Gibt die pageId für eine Instanz zurück
   * Prüft zuerst die manuelle Registrierung, dann die Lookup-Funktion
   */
  getInstancePageId(e) {
    const t = this.instancePages.get(e);
    if (t) return t;
    if (this.pageIdLookupFn)
      return this.pageIdLookupFn(e);
  }
  /**
   * Setzt eine Funktion die pageId von widgetId ableiten kann
   * Diese Funktion wird von der Vue-App gesetzt um Zugriff auf die Pinia Stores zu haben
   */
  setPageIdLookup(e) {
    this.pageIdLookupFn = e, console.log("📝 PageId lookup function registered");
  }
  /**
   * @deprecated Use registerInstance instead
   */
  registerWidgetInstance(e, t) {
    this.registerInstance(e, t);
  }
  /**
   * Entfernt eine Instanz
   * Wird beim Unmount/Dispose aufgerufen
   * @param instanceId - ID der Instanz
   */
  unregisterInstance(e) {
    this.widgetInstances.delete(e), this.instanceTypes.delete(e), this.instancePages.delete(e), console.log(`Unregistered instance "${e}"`);
  }
  /**
   * Gibt alle registrierten Instanzen zurück
   * @param widgetType - Optional: Filter nach Widget-Typ
   */
  getRegisteredInstances(e) {
    const t = [];
    for (const [s, r] of this.widgetInstances.entries()) {
      const n = this.instanceTypes.get(s) || "unknown";
      (!e || n === e) && t.push({
        instanceId: s,
        widgetType: n,
        instanceRef: r
      });
    }
    return t;
  }
  /**
   * Gibt alle Instanz-IDs zurück
   */
  getInstanceIds() {
    return Array.from(this.widgetInstances.keys());
  }
  /**
   * @deprecated Use unregisterInstance instead
   */
  unregisterWidgetInstance(e) {
    this.unregisterInstance(e);
  }
  /**
   * Führt eine Action auf einer Instanz aus
   * @param instanceId - ID der Instanz
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing', 'switchThingByName')
   * @param args - Argumente für die Action
   */
  async executeInstanceAction(e, t, ...s) {
    const r = this.widgetInstances.get(e);
    if (!r) {
      console.warn(`Instance "${e}" not found.`);
      return;
    }
    if (typeof r[t] != "function") {
      console.warn(`Action "${t}" not found on instance "${e}".`);
      return;
    }
    try {
      await r[t](...s);
    } catch (n) {
      console.error(`Error executing action "${t}" on "${e}":`, n);
    }
  }
  /**
   * @deprecated Use executeInstanceAction instead
   */
  async executeWidgetAction(e, t, ...s) {
    return this.executeInstanceAction(e, t, ...s);
  }
  /**
   * Führt eine Action auf allen registrierten Instanzen aus
   * @param actionName - Name der Action-Methode (z.B. 'zoomToThing')
   * @param args - Argumente für die Action
   */
  async executeActionOnAll(e, ...t) {
    if (console.log(`🎯 executeActionOnAll: "${e}" with args:`, t), console.log(`🎯 Registered instances: ${this.widgetInstances.size}`), this.widgetInstances.size === 0) {
      console.warn(`❌ No instances registered to execute action "${e}".`);
      return;
    }
    let s = 0;
    for (const [r, n] of this.widgetInstances.entries()) {
      const a = this.instanceTypes.get(r);
      if (console.log(`🎯 Checking instance "${r}" (type: ${a}), has ${e}: ${typeof n[e]}`), typeof n[e] == "function")
        try {
          console.log(`🎯 Calling ${e} on "${r}"...`), await n[e](...t), s++, console.log(`✅ Executed action "${e}" on instance "${r}"`);
        } catch (o) {
          console.error(`❌ Error executing action "${e}" on "${r}":`, o);
        }
    }
    s === 0 ? console.warn(`❌ Action "${e}" not found on any instances.`) : console.log(`✅ Executed action "${e}" on ${s} instance(s)`);
  }
  /**
   * @deprecated Use executeActionOnAll instead
   */
  async executeWidgetActionOnAll(e, ...t) {
    return this.executeActionOnAll(e, ...t);
  }
  /**
   * Gibt alle registrierten Widget-Typen zurück
   */
  getWidgetTypes() {
    return Array.from(this.widgetTypes.values());
  }
  /**
   * Gibt die Registrierung für einen Widget-Typ zurück
   */
  getWidgetType(e) {
    return this.widgetTypes.get(e);
  }
}
const Is = Symbol.for(St);
var lr = Object.getOwnPropertyDescriptor, hr = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? lr(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = a(r) || r);
  return r;
}, fr = (l, e) => (t, s) => e(t, s, l);
const Se = Nt.createLogger("daanse:events:manager");
let gt = class {
  constructor(l) {
    this.actionsRegistry = l, this.mappings = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  createMappingKey(l, e, t) {
    return t ? `${l}:${t}:${e}` : `${l}:${e}`;
  }
  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(l) {
    const e = this.createMappingKey(l.context, l.eventType, l.contextId);
    this.mappings.has(e) || this.mappings.set(e, []), this.mappings.get(e).push(l), Se("Registered event-action mapping: %s -> %s", e, l.actionName), this.onMappingsChangedCallback && this.onMappingsChangedCallback();
  }
  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(l) {
    for (const [e, t] of this.mappings.entries()) {
      const s = t.findIndex((r) => r.id === l);
      if (s !== -1) {
        t.splice(s, 1), t.length === 0 && this.mappings.delete(e), Se("Unregistered event-action mapping: %s", l);
        return;
      }
    }
  }
  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(l) {
    this.onMappingsChangedCallback = l;
  }
  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(l) {
    this.mappings.clear();
    for (const e of l) {
      const t = this.createMappingKey(e.context, e.eventType, e.contextId);
      this.mappings.has(t) || this.mappings.set(t, []), this.mappings.get(t).push(e);
    }
    this.onMappingsChangedCallback && (this.onMappingsChangedCallback(), Se("Notified listeners about %d loaded mappings", l.length));
  }
  /**
   * Wertet Conditions gegen ein Payload aus
   */
  evaluateConditions(l, e) {
    return !l || l.length === 0 ? !0 : l.every((t) => {
      if (!t.prop)
        return !0;
      const s = this.getNestedProperty(e, t.prop), r = t.value;
      return this.evaluateComparison(s, t.comperator, r);
    });
  }
  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  getNestedProperty(l, e) {
    return e.split(".").reduce((t, s) => t?.[s], l);
  }
  /**
   * Wertet einen Vergleich aus
   */
  evaluateComparison(l, e, t) {
    const s = Number(l), r = Number(t), n = !isNaN(s) && !isNaN(r);
    switch (e) {
      case Me.eq:
        return n ? s === r : l == t;
      case Me.neq:
        return n ? s !== r : l != t;
      case Me.lt:
        return n ? s < r : l < t;
      case Me.lte:
        return n ? s <= r : l <= t;
      case Me.gt:
        return n ? s > r : l > t;
      case Me.gte:
        return n ? s >= r : l >= t;
      default:
        return console.warn(`Unknown comperator: ${e}`), !1;
    }
  }
  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  buildActionArgs(l, e) {
    const t = [...l.actionArgs || []];
    if (l.payloadMapping && l.payloadMapping.length > 0)
      for (const s of l.payloadMapping) {
        const r = this.getNestedProperty(e, s.payloadPath);
        t[s.argIndex] = r, Se("  Mapped payload.%s -> arg[%d] = %o", s.payloadPath, s.argIndex, r);
      }
    return t;
  }
  /**
   * Führt eine einzelne Action aus
   */
  async executeAction(l, e) {
    const t = this.buildActionArgs(l, e);
    l.targetContextId ? await this.actionsRegistry.executeInstanceAction(
      l.targetContextId,
      l.actionName,
      ...t
    ) : (Se("No targetContextId specified, executing action on all instances"), await this.actionsRegistry.executeActionOnAll(
      l.actionName,
      ...t
    ));
  }
  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  getActionsFromMapping(l) {
    return l.actions && l.actions.length > 0 ? l.actions : l.actionName ? [{
      targetContext: l.targetContext,
      targetContextId: l.targetContextId,
      actionName: l.actionName,
      actionArgs: l.actionArgs,
      payloadMapping: l.payloadMapping
    }] : [];
  }
  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(l, e, t, s) {
    const r = this.createMappingKey(l, e, s);
    let n = this.mappings.get(r) || [];
    if (n.length === 0 && s) {
      const a = this.createMappingKey(l, e);
      n = this.mappings.get(a) || [], Se("📨 Handling event: %s, no specific mappings, using general mappings: %d", r, n.length);
    } else
      Se("📨 Handling event: %s, found %d mapping(s)", r, n.length);
    Se("  Payload: %o", t);
    for (const a of n)
      try {
        if (!this.evaluateConditions(a.conditions || [], t)) {
          Se("⏭️  Conditions not met for mapping %s, skipping", a.id);
          continue;
        }
        const o = this.getActionsFromMapping(a);
        if (o.length === 0) {
          Se("⚠️  No actions defined for mapping %s", a.id);
          continue;
        }
        Se("▶️  Executing %d action(s) for mapping %s", o.length, a.id);
        for (const d of o)
          Se("  → Action: %s on %s", d.actionName, d.targetContextId || "all instances"), await this.executeAction(d, t);
      } catch (o) {
        Se("❌ Error executing actions for mapping %s: %o", a.id, o);
      }
  }
  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings() {
    const l = [];
    for (const e of this.mappings.values())
      l.push(...e);
    return l;
  }
  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(l, e, t) {
    if (e) {
      const n = this.createMappingKey(l, e, t);
      return this.mappings.get(n) || [];
    }
    const s = [], r = t ? `${l}:${t}:` : `${l}:`;
    for (const [n, a] of this.mappings.entries())
      n.startsWith(r) && s.push(...a);
    return s;
  }
  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(l, e) {
    const t = [], s = `${l}:${e}:`;
    for (const r of this.mappings.keys())
      r.startsWith(s) && t.push(r);
    for (const r of t)
      this.mappings.delete(r);
    console.log(`Cleared event mappings for context ${l}:${e}`);
  }
  /**
   * Löscht alle Mappings
   */
  clear() {
    this.mappings.clear();
  }
};
gt = hr([
  Ts(),
  fr(0, ft("EventActionsRegistry"))
], gt);
const As = Symbol.for(Lt);
var gr = Object.getOwnPropertyDescriptor, pr = (l, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? gr(e, t) : e, n = l.length - 1, a; n >= 0; n--)
    (a = l[n]) && (r = a(r) || r);
  return r;
}, At = (l, e) => (t, s) => e(t, s, l);
const Ce = Nt.createLogger("daanse:events:bridge");
let pt = class {
  constructor(l, e, t) {
    this.eventManager = l, this.eventRegistry = e, this.actionsRegistry = t, this.isSetup = !1, this.registeredListeners = /* @__PURE__ */ new Set();
  }
  /**
   * Richtet die Bridge ein (muss nach Container-Initialisierung aufgerufen werden)
   */
  /**
   * Verbindet die Bruecke mit dem Ereignisbus.
   *
   * Nimmt die ServiceRegistry statt des Inversify-Containers: gebraucht wird
   * daraus nur der Emitter, und ueber die Registry ist er unter seiner
   * String-ID erreichbar.
   */
  setup(l) {
    if (this.isSetup) {
      Ce("Bridge already setup, skipping");
      return;
    }
    try {
      this.eventBus = l.getRequired(Hs), this.eventManager.onMappingsChanged(() => {
        Ce("📢 EventManager notified about mapping changes, refreshing listeners"), this.refreshListeners();
      }), this.setupListeners(), this.isSetup = !0, Ce("✅ EventBus Bridge setup complete");
    } catch (e) {
      Ce("❌ Failed to setup EventBus Bridge:", e);
    }
  }
  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  setupListeners() {
    const l = this.eventManager.getAllMappings(), e = /* @__PURE__ */ new Set();
    for (const t of l)
      if (t.context === "widget") {
        const s = `widget:${t.eventType}`;
        e.add(s);
      } else if (t.context === "page") {
        const s = `widget:${t.eventType}`;
        e.add(s);
      } else if (t.context === "system") {
        const s = `system:${t.eventType}`;
        e.add(s);
      }
    for (const t of e)
      this.registeredListeners.has(t) || (this.eventBus.on(t, (s) => {
        Ce("📨 Received event via EventBus: %s", t), this.handleEvent(t, s);
      }), this.registeredListeners.add(t), Ce("Registered listener for: %s", t));
    Ce("✅ Bridge listening to %d event types", this.registeredListeners.size);
  }
  /**
   * Aktualisiert die Listener basierend auf aktuellen Mappings
   * Wird aufgerufen wenn neue Mappings hinzugefügt werden
   */
  refreshListeners() {
    this.isSetup && this.setupListeners();
  }
  /**
   * Verarbeitet ein Event und leitet es an den EventManager weiter
   * Unterstützt widget, page und system Events
   */
  async handleEvent(l, e) {
    try {
      const t = l.split(":");
      if (t.length < 2) {
        Ce("Invalid event format: %s", l);
        return;
      }
      const s = t[0];
      if (s === "widget") {
        if (t.length < 3) {
          Ce("Invalid widget event format: %s", l);
          return;
        }
        const r = t[1], n = t[2], a = e.widgetId, o = e.payload;
        Ce("📨 Widget event received: %s from widget %s", l, a), Ce("  Payload: %o", o), await this.eventManager.handleEvent(
          "widget",
          `${r}:${n}`,
          o,
          a
        );
        const d = this.actionsRegistry.getInstancePageId(a);
        d && (Ce("📨 Also handling as page event for page: %s", d), await this.eventManager.handleEvent(
          "page",
          `${r}:${n}`,
          o,
          d
        ));
      } else if (s === "system") {
        const r = t.slice(1).join(":"), n = e.payload || e;
        Ce("📨 System event received: %s", l), Ce("  Payload: %o", n), await this.eventManager.handleEvent(
          "system",
          r,
          n
        );
      } else
        Ce("Unknown event context: %s", s);
    } catch (t) {
      Ce("❌ Error handling event:", t);
    }
  }
};
pt = pr([
  Ts(),
  At(0, ft("EventManager")),
  At(1, ft("EventRegistry")),
  At(2, ft("EventActionsRegistry"))
], pt);
const bs = Symbol.for(jt);
function We(l) {
  return l && typeof l.eProxyURI == "function" && typeof l.eSetProxyURI == "function";
}
const H = {
  /** A feature has been set */
  SET: 1,
  /** A feature has been unset */
  UNSET: 2,
  /** A value has been added to a list */
  ADD: 3,
  /** A value has been removed from a list */
  REMOVE: 4,
  /** Multiple values have been added to a list */
  ADD_MANY: 5,
  /** Multiple values have been removed from a list */
  REMOVE_MANY: 6,
  /** A value has been moved within a list */
  MOVE: 7,
  /** An adapter is being removed */
  REMOVING_ADAPTER: 8,
  /** A proxy has been resolved */
  RESOLVE: 9
}, Gt = -1, dr = -1;
class it {
  constructor(e, t, s, r, n, a = Gt, o = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = dr, this.oldValue = r, this.newValue = n, this.position = a, this.wasSetFlag = o;
  }
  getNotifier() {
    return this.notifier;
  }
  getEventType() {
    return this.eventType;
  }
  getFeature() {
    return this.feature;
  }
  getFeatureID() {
    return this.featureID;
  }
  getOldValue() {
    return this.oldValue;
  }
  getNewValue() {
    return this.newValue;
  }
  wasSet() {
    return this.wasSetFlag;
  }
  isTouch() {
    switch (this.eventType) {
      case H.RESOLVE:
      case H.REMOVING_ADAPTER:
        return !0;
      case H.ADD:
      case H.ADD_MANY:
      case H.REMOVE:
      case H.REMOVE_MANY:
      case H.MOVE:
        return !1;
      case H.SET:
      case H.UNSET:
        return this.oldValue === this.newValue ? !0 : this.oldValue === null || this.newValue === null ? !1 : this.oldValue === this.newValue;
      default:
        return !1;
    }
  }
  isReset() {
    if (this.feature) {
      const e = this.feature.getDefaultValue();
      return this.newValue === e;
    }
    return !1;
  }
  getPosition() {
    return this.position;
  }
  merge(e) {
    return !1;
  }
  toString() {
    const e = {
      [H.SET]: "SET",
      [H.UNSET]: "UNSET",
      [H.ADD]: "ADD",
      [H.REMOVE]: "REMOVE",
      [H.ADD_MANY]: "ADD_MANY",
      [H.REMOVE_MANY]: "REMOVE_MANY",
      [H.MOVE]: "MOVE",
      [H.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [H.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const bt = /^(?:0|[1-9]\d*)$/, vs = Symbol.for("emfts.indexedList"), xs = {
  get(l, e, t) {
    if (e === vs)
      return !0;
    if (typeof e == "string" && bt.test(e)) {
      const s = Number(e), r = l.data;
      return r !== void 0 ? r[s] : s < l.size() ? l.get(s) : void 0;
    }
    return Reflect.get(l, e, t);
  },
  set(l, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        l.clear();
      else
        for (; l.size() > r; )
          l.removeAt(l.size() - 1);
      return !0;
    }
    if (typeof e == "string" && bt.test(e)) {
      const r = Number(e), n = l.size();
      if (r < n)
        l.set(r, t);
      else if (r === n)
        l.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${n}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(l, e, t, s);
  },
  has(l, e) {
    return typeof e == "string" && bt.test(e) ? Number(e) < l.size() : Reflect.has(l, e);
  }
};
class Ie {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, xs);
  }
  // ===== Array-compatible properties and methods =====
  /**
   * Array-compatible length property.
   */
  get length() {
    return this.data.length;
  }
  /**
   * Array-compatible push method. Adds elements to the end of the list.
   * Sends ADD or ADD_MANY notification.
   */
  push(...e) {
    return e.length === 0 ? this.data.length : (e.length === 1 ? this.add(e[0]) : this.addAll(e), this.data.length);
  }
  /**
   * Array-compatible pop method. Removes and returns the last element.
   * Sends REMOVE notification.
   */
  pop() {
    if (this.data.length !== 0)
      return this.removeAt(this.data.length - 1);
  }
  /**
   * Array-compatible shift method. Removes and returns the first element.
   * Sends REMOVE notification.
   */
  shift() {
    if (this.data.length !== 0)
      return this.removeAt(0);
  }
  /**
   * Array-compatible unshift method. Adds elements to the beginning of the list.
   * Sends ADD or ADD_MANY notification.
   */
  unshift(...e) {
    return e.length === 0 ? this.data.length : (e.length === 1 ? this.addAt(0, e[0]) : this.addAllAt(0, e), this.data.length);
  }
  /**
   * Array-compatible splice method.
   * Removes elements and/or inserts new elements.
   * Sends appropriate notifications.
   */
  splice(e, t, ...s) {
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), n = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), a = [];
    for (let o = 0; o < n; o++)
      r < this.data.length && a.push(this.removeAt(r));
    for (let o = 0; o < s.length; o++)
      this.addAt(r + o, s[o]);
    return a;
  }
  /**
   * Array-compatible forEach method.
   */
  forEach(e, t) {
    this.data.forEach((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible map method.
   */
  map(e, t) {
    return this.data.map((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible filter method.
   */
  filter(e, t) {
    return this.data.filter((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible find method.
   */
  find(e, t) {
    return this.data.find((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible findIndex method.
   */
  findIndex(e, t) {
    return this.data.findIndex((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible some method.
   */
  some(e, t) {
    return this.data.some((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible every method.
   */
  every(e, t) {
    return this.data.every((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Array-compatible reduce method.
   */
  reduce(e, t) {
    return this.data.reduce((s, r, n) => e(s, r, n, this.data), t);
  }
  /**
   * Array-compatible includes method.
   */
  includes(e) {
    return this.contains(e);
  }
  /**
   * Array-compatible slice method. Returns a shallow copy.
   */
  slice(e, t) {
    return this.data.slice(e, t);
  }
  /**
   * Array-compatible concat method. Returns a new array, list is unchanged.
   * Accepts single values, arrays and other ELists as arguments.
   */
  concat(...e) {
    const t = [...this.data];
    for (const s of e)
      Array.isArray(s) ? t.push(...s) : s instanceof Ie ? t.push(...s.data) : t.push(s);
    return t;
  }
  /**
   * Array-compatible sort method. Sorts in place and returns the list.
   *
   * The reordering is applied through move(), so each relocated element emits a
   * MOVE notification. This mirrors ECollections.sort() in Java EMF rather than
   * silently rewriting the backing array.
   */
  sort(e) {
    return this.reorderTo([...this.data].sort(e)), this;
  }
  /**
   * Array-compatible reverse method. Reverses in place and returns the list.
   * Emits MOVE notifications, see {@link sort}.
   */
  reverse() {
    return this.reorderTo([...this.data].reverse()), this;
  }
  /**
   * Rearranges the list to match the given order using move(), so that every
   * relocation is observable. The order must be a permutation of the list.
   */
  reorderTo(e) {
    for (let t = 0; t < e.length; t++) {
      if (this.data[t] === e[t])
        continue;
      const s = this.data.indexOf(e[t], t);
      s > t && this.move(t, s);
    }
  }
  /**
   * Array-compatible join method.
   */
  join(e) {
    return this.data.join(e);
  }
  /**
   * Array-compatible at method. Negative indices count from the end.
   * Implemented directly rather than via Array.prototype.at, which the ES2020
   * target of this project does not provide.
   */
  at(e) {
    const t = e < 0 ? this.data.length + e : e;
    return t >= 0 && t < this.data.length ? this.data[t] : void 0;
  }
  /**
   * Array-compatible lastIndexOf method.
   */
  lastIndexOf(e) {
    return this.data.lastIndexOf(e);
  }
  /**
   * Array-compatible flatMap method.
   */
  flatMap(e, t) {
    return this.data.flatMap((s, r) => e.call(t, s, r, this.data));
  }
  /**
   * Makes JSON.stringify(list) produce a plain array. Without this the internal
   * fields would be serialized, and `owner` would drag the whole model along.
   */
  toJSON() {
    return [...this.data];
  }
  // ===== End Array-compatible methods =====
  getOwner() {
    return this.owner;
  }
  getFeature() {
    return this.feature;
  }
  size() {
    return this.data.length;
  }
  isEmpty() {
    return this.data.length === 0;
  }
  contains(e) {
    return this.data.indexOf(e) !== -1;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    return this.data[e];
  }
  set(e, t) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    const s = this.data[e];
    return s === t || (this.data[e] = t, this.didSet(e, t, s)), s;
  }
  add(e) {
    const t = this.data.length;
    return this.data.push(e), this.didAdd(t, e), !0;
  }
  addAt(e, t) {
    if (e < 0 || e > this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    this.data.splice(e, 0, t), this.didAdd(e, t);
  }
  addAll(e) {
    if (e.length === 0)
      return !1;
    const t = this.data.length;
    return this.data.push(...e), this.didAddMany(t, e), !0;
  }
  addAllAt(e, t) {
    if (t.length === 0)
      return !1;
    if (e < 0 || e > this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    return this.data.splice(e, 0, ...t), this.didAddMany(e, t), !0;
  }
  remove(e) {
    const t = this.data.indexOf(e);
    return t === -1 ? !1 : (this.removeAt(t), !0);
  }
  removeAt(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    const t = this.data.splice(e, 1)[0];
    return this.didRemove(e, t), t;
  }
  clear() {
    if (this.data.length === 0)
      return;
    const e = [...this.data];
    this.data.length = 0, this.didClear(e);
  }
  move(e, t) {
    if (t < 0 || t >= this.data.length)
      throw new RangeError(`fromIndex ${t} out of bounds for list of size ${this.data.length}`);
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`toIndex ${e} out of bounds for list of size ${this.data.length}`);
    const s = this.data[t];
    return t === e || (this.data.splice(t, 1), this.data.splice(e, 0, s), this.didMove(e, s, t)), s;
  }
  toArray() {
    return [...this.data];
  }
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
  // ===== Notification hooks =====
  didAdd(e, t) {
    this.dispatchNotification(H.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(H.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(H.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(H.REMOVE, e[0], null, 0) : this.dispatchNotification(H.REMOVE_MANY, e, null, Gt);
  }
  didSet(e, t, s) {
    this.dispatchNotification(H.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(H.MOVE, s, t, e);
  }
  dispatchNotification(e, t, s, r) {
    const n = this.getFeature();
    if (!this.owner || !n || "eDeliver" in this.owner && !this.owner.eDeliver())
      return;
    if ("eAdapters" in this.owner) {
      const o = this.owner.eAdapters();
      if (!o || o.length === 0)
        return;
    } else
      return;
    const a = new it(this.owner, e, n, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(a);
  }
}
class Wt extends Ie {
  constructor(e, t) {
    super(e, t);
  }
  didAdd(e, t) {
    this.setContainer(t), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setContainer(s);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    this.unsetContainer(t), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      this.unsetContainer(t);
    super.didClear(e);
  }
  didSet(e, t, s) {
    this.unsetContainer(s), this.setContainer(t), super.didSet(e, t, s);
  }
  add(e) {
    return this.removeFromOldContainer(e), super.add(e);
  }
  addAt(e, t) {
    this.removeFromOldContainer(t), super.addAt(e, t);
  }
  addAll(e) {
    for (const t of e)
      this.removeFromOldContainer(t);
    return super.addAll(e);
  }
  addAllAt(e, t) {
    for (const s of t)
      this.removeFromOldContainer(s);
    return super.addAllAt(e, t);
  }
  set(e, t) {
    return this.removeFromOldContainer(t), super.set(e, t);
  }
  setContainer(e) {
    const t = this.getFeature();
    e && "eSetContainer" in e && this.owner && e.eSetContainer(this.owner, t);
  }
  unsetContainer(e) {
    e && "eSetContainer" in e && e.eSetContainer(null, null);
  }
  removeFromOldContainer(e) {
    const t = e.eContainer();
    if (t && t !== this.owner) {
      const s = e.eContainmentFeature();
      if (s && s.isMany()) {
        const r = t.eGet(s);
        if (r && "remove" in r)
          r.remove(e);
        else if (Array.isArray(r)) {
          const n = r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        }
      }
    }
  }
}
class mr extends Wt {
  constructor(e, t, s) {
    super(e, null), this.resolvedFeature = void 0, this.featureResolver = t, this.inverseSetter = s;
  }
  getFeature() {
    return this.resolvedFeature === void 0 && (this.resolvedFeature = this.featureResolver()), this.resolvedFeature;
  }
  didAdd(e, t) {
    this.inverseSetter(t, this.owner), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.inverseSetter(s, this.owner);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    this.inverseSetter(t, null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      this.inverseSetter(t, null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    this.inverseSetter(s, null), this.inverseSetter(t, this.owner), super.didSet(e, t, s);
  }
  /**
   * This list holds EClass.eStructuralFeatures, which every derived feature list
   * is assembled from, so each change has to invalidate those caches.
   */
  dispatchNotification(e, t, s, r) {
    Ps(), super.dispatchNotification(e, t, s, r);
  }
}
class yr extends Ie {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && We(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
      const s = this.owner.eResolveProxy(t);
      s !== t && (this.data[e] = s, t = s);
    }
    return t;
  }
  [Symbol.iterator]() {
    const e = this;
    let t = 0;
    return {
      next() {
        return t >= e.data.length ? { done: !0, value: void 0 } : { done: !1, value: e.get(t++) };
      }
    };
  }
}
function ye(l) {
  return l && typeof l.add == "function" && typeof l.size == "function" && typeof l.get == "function";
}
function he(l, e) {
  let t;
  if (Array.isArray(e))
    t = e;
  else if (ye(e))
    t = e.toArray();
  else if (e !== null && typeof e == "object" && typeof e[Symbol.iterator] == "function")
    t = [...e];
  else
    return !1;
  const s = [...t];
  return l.clear(), l.addAll(s), !0;
}
class Er extends Ie {
  /**
   * @param data the computed contents; used as backing store, not copied
   * @param accessorName name of the accessor, used in the error message
   */
  constructor(e, t) {
    super(null, null), this.data = e, this.accessorName = t;
  }
  /**
   * Raises the error every mutating method funnels through.
   */
  refuse(e) {
    throw new Error(`Cannot call ${e}() on the result of ${this.accessorName}: it is a derived list and cannot be modified. Modify the owning list instead (e.g. getEStructuralFeatures()).`);
  }
  set(e, t) {
    this.refuse("set");
  }
  add(e) {
    this.refuse("add");
  }
  addAt(e, t) {
    this.refuse("addAt");
  }
  addAll(e) {
    this.refuse("addAll");
  }
  addAllAt(e, t) {
    this.refuse("addAllAt");
  }
  remove(e) {
    this.refuse("remove");
  }
  removeAt(e) {
    this.refuse("removeAt");
  }
  clear() {
    this.refuse("clear");
  }
  move(e, t) {
    this.refuse("move");
  }
  push(...e) {
    this.refuse("push");
  }
  pop() {
    this.refuse("pop");
  }
  shift() {
    this.refuse("shift");
  }
  unshift(...e) {
    this.refuse("unshift");
  }
  splice(e, t, ...s) {
    this.refuse("splice");
  }
  sort(e) {
    this.refuse("sort");
  }
  reverse() {
    this.refuse("reverse");
  }
}
function Cr(l, e) {
  return xe(new Er(l, e));
}
let Rs = 0;
function Ps() {
  Rs++;
}
function Tr() {
  return Rs;
}
function Ge(l, e, t) {
  const s = Tr();
  if (l.value !== null && l.value.revision === s)
    return l.value.list;
  const r = Cr(t(), e);
  return l.value = { revision: s, list: r }, r;
}
class Sr extends Ie {
  constructor(e, t) {
    super(e, null), this.featureResolver = t ?? null;
  }
  getFeature() {
    return this.feature === null && this.featureResolver !== null && (this.feature = this.featureResolver()), this.feature;
  }
  dispatchNotification(e, t, s, r) {
    Ps(), super.dispatchNotification(e, t, s, r);
  }
}
function ce(l, e) {
  return xe(new Sr(l, e));
}
function xe(l) {
  return l[vs] ? l : new Proxy(l, xs);
}
function Nr(l, e) {
  return xe(new Wt(l, e));
}
function _r(l, e) {
  return xe(new yr(l, e));
}
function wr(l, e) {
  return xe(new Ie(l, e));
}
class Ir extends Ie {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(H.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(H.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(H.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(H.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(H.REMOVE_MANY, e, null, Gt);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(H.SET, s, t, e);
  }
  setResource(e) {
    e && "eSetResource" in e && e.eSetResource(this.resource);
  }
  unsetResource(e) {
    e && "eSetResource" in e && e.eSetResource(null);
  }
  /**
   * Dispatch notification to the Resource (which is a Notifier).
   * Uses a synthetic 'contents' feature for the notification.
   */
  dispatchResourceNotification(e, t, s, r) {
    if (!this.resource || "eDeliver" in this.resource && !this.resource.eDeliver())
      return;
    if ("eAdapters" in this.resource) {
      const o = this.resource.eAdapters();
      if (!o || o.length === 0)
        return;
    } else
      return;
    const n = { getName: () => "contents" }, a = new it(this.resource, e, n, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(a);
  }
}
function Ar(l) {
  return xe(new Ir(l));
}
var we;
(function(l) {
  l.INSTANCE = br();
})(we || (we = {}));
function Fs(l, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && l.set(s, t), Fs(l, t);
  }
}
function ks(l) {
  const e = l.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${l.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function br() {
  const l = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = l.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = l.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return l.get(e) || null;
    },
    set(e, t) {
      l.set(e, t), "getEPackage" in t || Fs(l, t);
    },
    registerPackage(e) {
      this.set(ks(e), e);
    },
    delete(e) {
      return l.delete(e);
    },
    has(e) {
      return l.has(e);
    },
    keys() {
      return l.keys();
    },
    values() {
      return l.values();
    }
  };
}
class Y {
  constructor(e, t, s, r, n) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = n;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new Y(null, null, "", null, null);
    let t = null, s = null, r = null, n = null, a = null, o = 0;
    e.length;
    const d = e.indexOf("#");
    d >= 0 && (a = e.substring(d + 1), e = e.substring(0, d));
    const y = e.indexOf("?");
    y >= 0 && (n = e.substring(y + 1), e = e.substring(0, y));
    const S = e.indexOf(":");
    if (S > 0) {
      let C = !0;
      for (let A = 0; A < S; A++)
        if (e.charAt(A) === "/") {
          C = !1;
          break;
        }
      C && (t = e.substring(0, S), o = S + 1);
    }
    if (e.startsWith("//", o)) {
      const C = o + 2;
      let A = C;
      for (; A < e.length && e.charAt(A) !== "/"; )
        A++;
      s = e.substring(C, A), o = A;
    }
    return o < e.length ? r = e.substring(o) : s !== null && (r = ""), new Y(t, s, r, n, a);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new Y("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new Y("platform", null, "/resource" + e, null, null);
  }
  /**
   * Returns the scheme, or null.
   */
  scheme() {
    return this._scheme;
  }
  /**
   * Returns the authority, or null.
   */
  authority() {
    return this._authority;
  }
  /**
   * Returns the path, or null.
   */
  path() {
    return this._path;
  }
  /**
   * Returns the query, or null.
   */
  query() {
    return this._query;
  }
  /**
   * Returns the fragment, or null.
   */
  fragment() {
    return this._fragment;
  }
  /**
   * Returns the host part of the authority, or null.
   */
  host() {
    if (!this._authority)
      return null;
    let e = this._authority;
    const t = e.indexOf("@");
    t >= 0 && (e = e.substring(t + 1));
    const s = e.lastIndexOf(":");
    return s >= 0 && (e = e.substring(0, s)), e;
  }
  /**
   * Returns the port part of the authority, or null.
   */
  port() {
    if (!this._authority)
      return null;
    let e = this._authority;
    const t = e.indexOf("@");
    t >= 0 && (e = e.substring(t + 1));
    const s = e.lastIndexOf(":");
    return s >= 0 ? e.substring(s + 1) : null;
  }
  /**
   * Returns the userinfo part of the authority, or null.
   */
  userInfo() {
    if (!this._authority)
      return null;
    const e = this._authority.indexOf("@");
    return e >= 0 ? this._authority.substring(0, e) : null;
  }
  /**
   * Returns the file extension, or null.
   */
  fileExtension() {
    if (!this._path)
      return null;
    const e = this._path.lastIndexOf("."), t = this._path.lastIndexOf("/");
    return e > t && e > 0 ? this._path.substring(e + 1) : null;
  }
  /**
   * Returns a new URI with the given fragment.
   */
  appendFragment(e) {
    return new Y(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new Y(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((n) => n.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new Y(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new Y(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new Y(this._scheme, this._authority, this._path, this._query, null);
  }
  /**
   * Resolves this URI against a base URI (RFC 3986 with EMF modifications).
   */
  resolve(e) {
    if (this._scheme !== null)
      return this;
    let t = e._scheme, s = this._authority, r = this._path, n = this._query;
    if (s !== null)
      r = this.removeDotSegments(r || "");
    else if (s = e._authority, !r || r === "") {
      if (this._query !== null) {
        if (r = e._path, r) {
          const a = r.lastIndexOf("/");
          a >= 0 && (r = r.substring(0, a + 1));
        }
      } else
        r = e._path;
      n = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new Y(t, s, r, n, this._fragment);
  }
  /**
   * Deresolves this URI against a base URI.
   */
  deresolve(e) {
    if (this._scheme !== e._scheme)
      return this;
    if (this._authority === null != (e._authority === null))
      return this;
    if (this._authority !== null && e._authority !== null && this._authority !== e._authority)
      return new Y(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new Y(null, null, null, null, this._fragment) : new Y(null, null, "", this._query, this._fragment);
    const r = t.split("/"), n = s.split("/");
    let a = 0;
    const o = Math.min(r.length, n.length);
    for (let A = 0; A < o - 1 && r[A] === n[A]; A++)
      a++;
    const d = n.length - a - 1, y = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (d >= 3 || y && d > 0))
      return new Y(null, null, t, this._query, this._fragment);
    const S = [];
    for (let A = 0; A < d; A++)
      S.push("..");
    for (let A = a; A < r.length; A++)
      S.push(r[A]);
    let C = S.join("/");
    return C === "" && t.endsWith("/") && (C = "./"), new Y(null, null, C, this._query, this._fragment);
  }
  /**
   * Merges a relative path with a base path.
   */
  mergePaths(e, t) {
    if (!e)
      return "/" + t;
    const s = e.lastIndexOf("/");
    return s >= 0 ? e.substring(0, s + 1) + t : t;
  }
  /**
   * Removes dot segments from a path (RFC 3986).
   */
  removeDotSegments(e) {
    const t = [], s = e.split("/"), r = s.length > 0 && (s[s.length - 1] === "." || s[s.length - 1] === "..");
    for (let n = 0; n < s.length; n++) {
      const a = s[n];
      a === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : a !== "." && !(a === "" && n > 0 && n < s.length - 1) && t.push(a);
    }
    return r && t.length > 0 && t.push(""), t.join("/");
  }
  /**
   * Returns the string representation.
   */
  toString() {
    let e = "";
    return this._scheme && (e += this._scheme + ":"), this._authority && (e += "//" + this._authority), this._path && (e += this._path), this._query && (e += "?" + this._query), this._fragment && (e += "#" + this._fragment), e;
  }
  /**
   * Returns whether this URI is hierarchical.
   */
  isHierarchical() {
    return this._authority !== null || this._path !== null && this._path.startsWith("/");
  }
  /**
   * Returns whether this URI is a file URI.
   */
  isFile() {
    return this._scheme === "file";
  }
  /**
   * Returns whether this URI is a platform resource URI.
   */
  isPlatformResource() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/resource");
  }
  /**
   * Returns whether this URI is a platform plugin URI.
   */
  isPlatformPlugin() {
    return this._scheme === "platform" && this._path !== null && this._path.startsWith("/plugin");
  }
  /**
   * Returns whether this URI is an archive URI.
   */
  isArchive() {
    return this._scheme === "archive" || this._scheme === "jar" || this._scheme === "zip";
  }
  /**
   * Returns whether this URI is relative (no scheme).
   */
  isRelative() {
    return this._scheme === null;
  }
}
function vr(l) {
  return "unsetTarget" in l && typeof l.unsetTarget == "function";
}
class Re {
  constructor() {
    this._eResource = null, this._eContainer = null, this._eContainerFeature = null, this._eProxyURI = null, this._eAdapters = [], this._eDeliver = !0, this.eSettings = /* @__PURE__ */ new Map();
  }
  /**
   * Returns the containing resource
   */
  eResource() {
    return this._eContainer ? this._eContainer.eResource() : this._eResource;
  }
  /**
   * Sets the resource (internal use)
   */
  eSetResource(e) {
    this._eResource = e;
  }
  /**
   * Returns the containing object
   */
  eContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container (internal use)
   */
  eSetContainer(e, t) {
    this._eContainer = e, this._eContainerFeature = t;
  }
  /**
   * Returns the containing feature
   */
  eContainingFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns the containment feature
   */
  eContainmentFeature() {
    return this._eContainerFeature;
  }
  /**
   * Returns all direct contents
   */
  eContents() {
    const e = [], s = this.eClass().getEAllContainments();
    for (const r of s) {
      const n = this.eGet(r);
      if (n)
        if (Array.isArray(n) || ye(n))
          for (const a of n)
            e.push(a);
        else
          e.push(n);
    }
    return e;
  }
  /**
   * Returns an iterator over all contents
   */
  eAllContents() {
    const e = this.eContents(), t = [...e];
    for (const s of e) {
      const r = s.eAllContents();
      let n = r.next();
      for (; !n.done; )
        t.push(n.value), n = r.next();
    }
    return t[Symbol.iterator]();
  }
  /**
   * Returns whether this object is a proxy
   */
  eIsProxy() {
    return this._eProxyURI !== null;
  }
  /**
   * Returns the proxy URI if this object is a proxy
   */
  eProxyURI() {
    return this._eProxyURI;
  }
  /**
   * Sets the proxy URI
   */
  eSetProxyURI(e) {
    this._eProxyURI = e;
  }
  /**
   * Resolves a proxy to the actual object
   */
  eResolveProxy(e) {
    const t = e.eProxyURI();
    if (!t)
      return e;
    const s = this.eResource();
    if (!s)
      return e;
    const r = s.getResourceSet();
    if (!r)
      return e;
    const n = t.toString(), a = n.indexOf("#");
    if (a > 0) {
      const o = n.substring(0, a), d = n.substring(a + 1);
      let y;
      const S = s.getURI();
      S && !o.includes("://") ? y = S.resolve(Y.createURI(o)) : y = Y.createURI(o);
      const C = r.getResource(y, !0);
      if (C) {
        const R = C.getEObject(d);
        if (R)
          return R;
      }
      const A = r.getPackageRegistry(), b = this.resolveFragmentViaPackageRegistry(A, o, d, r);
      if (b)
        return b;
    } else if (a === 0) {
      const o = n.substring(1), d = s.getEObject(o);
      if (d)
        return d;
    } else {
      const o = s.getEObject(n);
      if (o)
        return o;
    }
    return e;
  }
  /**
   * Resolve a fragment via the package registry.
   * When a proxy like foaf.ecore#//Agent can't be resolved through the resource
   * (e.g., because the resource is empty after package registration), try to
   * find the correct package in the registry.
   */
  resolveFragmentViaPackageRegistry(e, t, s, r) {
    const n = e.getEPackage(t);
    if (n) {
      const y = this.resolveFragmentInPackage(n, s);
      if (y)
        return y;
    }
    let a = t;
    const o = a.lastIndexOf("/");
    o >= 0 && (a = a.substring(o + 1));
    const d = a.indexOf(".");
    if (d > 0 && (a = a.substring(0, d)), a)
      for (const y of e.keys()) {
        const S = e.getEPackage(y);
        if (S && S.getName() === a) {
          const C = this.resolveFragmentInPackage(S, s);
          if (C)
            return C;
        }
      }
    return null;
  }
  /**
   * Resolve a fragment path (e.g., //Agent or //sub/Agent) within an EPackage.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return null;
    const r = s.split("/");
    let n = e;
    for (let d = 0; d < r.length - 1; d++) {
      const y = n.getESubpackages();
      let S = null;
      for (let C = 0; C < y.length; C++)
        if (y.get(C).getName() === r[d]) {
          S = y.get(C);
          break;
        }
      if (!S)
        return null;
      n = S;
    }
    const a = r[r.length - 1];
    return n.getEClassifier(a) ?? null;
  }
  /**
   * Returns the internal resource (bypassing container navigation)
   */
  eInternalResource() {
    return this._eResource;
  }
  /**
   * Returns the internal container
   */
  eInternalContainer() {
    return this._eContainer;
  }
  /**
   * Sets the container without notification
   */
  eBasicSetContainer(e, t) {
    this._eContainer = e;
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns list of the adapters associated with this notifier.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this notifier will deliver notifications to the adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this notifier will deliver notifications to the adapters.
   */
  eSetDeliver(e) {
    this._eDeliver = e;
  }
  /**
   * Notifies a change to a feature of this notifier as described by the notification.
   */
  eNotify(e) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const t of this._eAdapters)
        t.notifyChanged(e);
  }
  /**
   * Adds an adapter to this notifier.
   */
  eAdapterAdd(e) {
    this._eAdapters.push(e), e.setTarget(this);
  }
  /**
   * Removes an adapter from this notifier.
   */
  eAdapterRemove(e) {
    const t = this._eAdapters.indexOf(e);
    if (t !== -1) {
      if (this._eDeliver) {
        const s = new it(this, H.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), vr(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
    }
    return !1;
  }
  // ===== End Notifier interface =====
  /**
   * Returns all cross references
   */
  eCrossReferences() {
    const e = [], s = this.eClass().getEAllReferences();
    for (const r of s)
      if (!r.isContainment()) {
        const n = this.eGet(r);
        if (n)
          if (Array.isArray(n) || ye(n))
            for (const a of n)
              e.push(a);
          else
            e.push(n);
      }
    return e;
  }
  /**
   * Reflective get (default implementation)
   */
  eGet(e) {
    const t = e.getName() || "";
    return this.eSettings.get(t);
  }
  /**
   * Reflective set (default implementation)
   */
  eSet(e, t) {
    const s = e.getName() || "", r = this.eSettings.get(s);
    if (this.eSettings.set(s, t), e instanceof Object && "isContainment" in e) {
      const n = e;
      if (n.isContainment() && (r && typeof r == "object" && "eSetContainer" in r && r.eSetContainer(null, null), t && typeof t == "object" && "eSetContainer" in t))
        if (Array.isArray(t))
          for (const a of t)
            a && "eSetContainer" in a && a.eSetContainer(this, n);
        else
          t.eSetContainer(this, n);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const n = new it(this, H.SET, e, r, t);
      this.eNotify(n);
    }
  }
  /**
   * Reflective isSet
   */
  eIsSet(e) {
    const t = e.getName() || "";
    return this.eSettings.has(t);
  }
  /**
   * Reflective unset
   */
  eUnset(e) {
    const t = e.getName() || "", s = this.eSettings.get(t);
    if (this.eSettings.delete(t), e instanceof Object && "isContainment" in e && e.isContainment() && s)
      if (Array.isArray(s))
        for (const n of s)
          n && "eSetContainer" in n && n.eSetContainer(null, null);
      else typeof s == "object" && "eSetContainer" in s && s.eSetContainer(null, null);
    if (this._eDeliver && this._eAdapters.length > 0) {
      const r = new it(this, H.UNSET, e, s, e.getDefaultValue());
      this.eNotify(r);
    }
  }
  /**
   * Invoke operation
   */
  eInvoke(e, t) {
    throw new Error(`Operation ${e.getName()} not implemented`);
  }
  /**
   * Get direct class (for generated code)
   */
  eStaticClass() {
    return this.eClass();
  }
  /**
   * Get feature by ID
   */
  eFeature(e) {
    return this.eClass().getEStructuralFeature(e);
  }
  /**
   * String representation
   */
  toString() {
    return `${this.eClass()?.getName() || "UnknownClass"}@${this.hashCode()}`;
  }
  /**
   * Simple hash code
   */
  hashCode() {
    return Math.random().toString(36).substring(7);
  }
}
class Bs extends Re {
  constructor(e) {
    super(), this._eClass = e;
  }
  eClass() {
    return this._eClass;
  }
  /**
   * Override eGet to handle dynamic features and proxy resolution.
   * Returns EList for multi-valued features.
   */
  eGet(e) {
    const t = e.getName() || "";
    if (this.eSettings.has(t)) {
      let r = this.eSettings.get(t);
      if (!e.isMany() && r && We(r) && r.eIsProxy()) {
        const n = this.eResolveProxy(r);
        if (n !== r)
          return this.eSettings.set(t, n), n;
      }
      return r;
    }
    if (e.isMany()) {
      let r;
      if ("isContainment" in e) {
        const n = e;
        n.isContainment() ? r = Nr(this, n) : r = _r(this, n);
      } else
        r = wr(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class xr extends Wt {
  constructor(e, t, s) {
    super(e, t), this.eMap = s;
  }
  didAdd(e, t) {
    super.didAdd(e, t), this.eMap.entryAdded(t);
  }
  didAddMany(e, t) {
    super.didAddMany(e, t);
    for (const s of t)
      this.eMap.entryAdded(s);
  }
  didRemove(e, t) {
    super.didRemove(e, t), this.eMap.entryRemoved(t);
  }
  didClear(e) {
    super.didClear(e), this.eMap.entriesCleared();
  }
  didSet(e, t, s) {
    super.didSet(e, t, s), this.eMap.entryRemoved(s), this.eMap.entryAdded(t);
  }
}
class Rr {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new xr(e, t, this);
    const r = s.getEStructuralFeature("key"), n = s.getEStructuralFeature("value");
    if (!r || !n)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = n, xe(this);
  }
  /**
   * Rebuild map index from the delegate list contents.
   * Entries may have been added before their key/value were set (e.g. by XMI loader),
   * so we rebuild on every map-method access.
   */
  ensureIndex() {
    this.mapIndex === null && (this.mapIndex = /* @__PURE__ */ new Map()), this.mapIndex.clear();
    for (let e = 0; e < this.delegateList.size(); e++) {
      const t = this.delegateList.get(e), s = t.eGet(this.keyFeature);
      s != null && this.mapIndex.set(s, t);
    }
    return this.mapIndex;
  }
  // ===== Map methods =====
  getByKey(e) {
    const s = this.ensureIndex().get(e);
    if (s)
      return s.eGet(this.valueFeature);
  }
  putByKey(e, t) {
    const r = this.ensureIndex().get(e);
    if (r) {
      const o = r.eGet(this.valueFeature);
      return r.eSet(this.valueFeature, t), o;
    }
    const n = this.entryEClass.getEPackage();
    let a;
    n && n.getEFactoryInstance() ? a = n.getEFactoryInstance().create(this.entryEClass) : a = new Bs(this.entryEClass), a.eSet(this.keyFeature, e), a.eSet(this.valueFeature, t), this.delegateList.add(a);
  }
  removeByKey(e) {
    const s = this.ensureIndex().get(e);
    if (!s)
      return;
    const r = s.eGet(this.valueFeature);
    return this.delegateList.remove(s), r;
  }
  containsKey(e) {
    return this.ensureIndex().has(e);
  }
  containsValue(e) {
    for (const t of this.ensureIndex().values())
      if (t.eGet(this.valueFeature) === e)
        return !0;
    return !1;
  }
  keys() {
    return Array.from(this.ensureIndex().keys());
  }
  mapValues() {
    const e = [];
    for (const t of this.ensureIndex().values())
      e.push(t.eGet(this.valueFeature));
    return e;
  }
  toMap() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, s] of this.ensureIndex())
      e.set(t, s.eGet(this.valueFeature));
    return e;
  }
  // ===== Index management callbacks (called by EMapContainmentEList) =====
  entryAdded(e) {
    this.mapIndex = null;
  }
  entryRemoved(e) {
    this.mapIndex = null;
  }
  entriesCleared() {
    this.mapIndex = null;
  }
  // ===== EList delegation =====
  size() {
    return this.delegateList.size();
  }
  get length() {
    return this.delegateList.length;
  }
  isEmpty() {
    return this.delegateList.isEmpty();
  }
  contains(e) {
    return this.delegateList.contains(e);
  }
  indexOf(e) {
    return this.delegateList.indexOf(e);
  }
  get(e) {
    return this.delegateList.get(e);
  }
  set(e, t) {
    return this.delegateList.set(e, t);
  }
  add(e) {
    return this.delegateList.add(e);
  }
  addAt(e, t) {
    this.delegateList.addAt(e, t);
  }
  addAll(e) {
    return this.delegateList.addAll(e);
  }
  addAllAt(e, t) {
    return this.delegateList.addAllAt(e, t);
  }
  remove(e) {
    return this.delegateList.remove(e);
  }
  removeAt(e) {
    return this.delegateList.removeAt(e);
  }
  clear() {
    this.delegateList.clear();
  }
  move(e, t) {
    return this.delegateList.move(e, t);
  }
  toArray() {
    return this.delegateList.toArray();
  }
  [Symbol.iterator]() {
    return this.delegateList[Symbol.iterator]();
  }
  push(...e) {
    return this.delegateList.push(...e);
  }
  filter(e, t) {
    return this.delegateList.filter(e, t);
  }
  map(e, t) {
    return this.delegateList.map(e, t);
  }
  forEach(e, t) {
    this.delegateList.forEach(e, t);
  }
  find(e, t) {
    return this.delegateList.find(e, t);
  }
  findIndex(e, t) {
    return this.delegateList.findIndex(e, t);
  }
  some(e, t) {
    return this.delegateList.some(e, t);
  }
  every(e, t) {
    return this.delegateList.every(e, t);
  }
  includes(e) {
    return this.delegateList.includes(e);
  }
  slice(e, t) {
    return this.delegateList.slice(e, t);
  }
  concat(...e) {
    return this.delegateList.concat(...e);
  }
  sort(e) {
    return this.delegateList.sort(e), this;
  }
  reverse() {
    return this.delegateList.reverse(), this;
  }
  join(e) {
    return this.delegateList.join(e);
  }
  at(e) {
    return this.delegateList.at(e);
  }
  lastIndexOf(e) {
    return this.delegateList.lastIndexOf(e);
  }
  flatMap(e, t) {
    return this.delegateList.flatMap(e, t);
  }
  toJSON() {
    return this.delegateList.toJSON();
  }
}
function Pr(l, e, t) {
  return new Rr(l, e, t);
}
var ct;
(function(l) {
  l.INSTANCE_FACTORY_REGISTRY = Fr();
})(ct || (ct = {}));
function Fr() {
  const l = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const n = s.fileExtension();
      return n && l.has(n) ? l.get(n) : null;
    },
    getExtensionToFactoryMap() {
      return l;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class Xt {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = Ar(this);
  }
  // ===== Notifier interface implementation =====
  /**
   * Returns the list of adapters associated with this resource.
   */
  eAdapters() {
    return this._eAdapters;
  }
  /**
   * Returns whether this resource will deliver notifications to adapters.
   */
  eDeliver() {
    return this._eDeliver;
  }
  /**
   * Sets whether this resource will deliver notifications to adapters.
   */
  eSetDeliver(e) {
    this._eDeliver = e;
  }
  /**
   * Notifies all adapters of a change.
   */
  eNotify(e) {
    if (this._eDeliver && this._eAdapters.length > 0)
      for (const t of this._eAdapters)
        t.notifyChanged(e);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(e) {
    this.resourceSet = e;
  }
  getURI() {
    return this.uri;
  }
  setURI(e) {
    this.uri = e;
  }
  getContents() {
    return this.contents;
  }
  getAllContents() {
    const e = [...this.contents];
    for (const t of this.contents) {
      const s = t.eAllContents();
      let r = s.next();
      for (; !r.done; )
        e.push(r.value), r = s.next();
    }
    return e[Symbol.iterator]();
  }
  getEObject(e) {
    if (e.startsWith("/")) {
      const t = e.split("/"), s = t.length >= 2 && t[0] === "" && t[1] === "", r = t.filter((o) => o.length > 0);
      if (r.length === 0)
        return this.contents.size() > 0 ? this.contents.get(0) : null;
      let n = null, a = 0;
      if (s && (n = this.contents.size() > 0 ? this.contents.get(0) : null, !n || (r[0].startsWith("@") ? n = this.eObjectForURIFragmentSegment(n, r[0]) : n = this.findByNameInContents(n, r[0]), a = 1, !n)))
        return null;
      for (let o = a; o < r.length; o++) {
        const d = r[o], y = parseInt(d, 10);
        if (n === null ? isNaN(y) ? (n = this.findByName(this.contents.toArray(), d), !n && this.contents.size() > 0 && (n = this.findByNameInContents(this.contents.get(0), d))) : n = y < this.contents.size() ? this.contents.get(y) : null : isNaN(y) ? n = this.navigateByNameOrFeature(n, d) : n = n.eContents()[y] || null, !n)
          return null;
      }
      return n;
    }
    return this.getEObjectByID(e);
  }
  /**
   * Find a named element in an object's eContents().
   * This is used for EMF-style fragment navigation like //SortOrder
   * which searches for named elements within a container (e.g., EPackage's eClassifiers).
   */
  findByNameInContents(e, t) {
    const s = e.eContents();
    return this.findByName(s, t);
  }
  /**
   * Find an object by name in a list of objects.
   * Looks for 'name' via:
   * 1. getName() method (for static typed objects)
   * 2. eGet(nameFeature) (for dynamic objects loaded from XMI)
   * 3. Direct name property
   */
  findByName(e, t) {
    for (const s of e) {
      if ("getName" in s && typeof s.getName == "function" && s.getName() === t)
        return s;
      try {
        const r = s.eClass();
        if (r) {
          const n = r.getEStructuralFeature("name");
          if (n && s.eGet(n) === t)
            return s;
        }
      } catch {
      }
      if ("name" in s && s.name === t)
        return s;
    }
    return null;
  }
  /**
   * Navigate from an object to a child by name or feature.
   */
  navigateByNameOrFeature(e, t) {
    if (t.startsWith("@"))
      return this.eObjectForURIFragmentSegment(e, t);
    const s = e.eContents(), r = this.findByName(s, t);
    if (r)
      return r;
    const a = e.eClass().getEStructuralFeature(t);
    if (a) {
      const o = e.eGet(a);
      if (o && typeof o == "object" && "eClass" in o)
        return o;
      if (Array.isArray(o) && o.length > 0)
        return o[0];
    }
    return null;
  }
  /**
   * Resolve a @feature.index URI fragment segment (Java EMF format).
   * Formats:
   * - @featureName.index → eGet(feature)[index] (multi-valued)
   * - @featureName → eGet(feature) (single-valued)
   */
  eObjectForURIFragmentSegment(e, t) {
    const s = t.substring(1), r = e.eClass(), n = s.charAt(s.length - 1);
    let a, o = -1;
    if (n >= "0" && n <= "9") {
      const S = s.lastIndexOf(".");
      if (S > 0) {
        const C = parseInt(s.substring(S + 1), 10);
        isNaN(C) ? a = s : (a = s.substring(0, S), o = C);
      } else
        a = s;
    } else
      a = s;
    const d = r.getEStructuralFeature(a);
    if (!d)
      return null;
    const y = e.eGet(d);
    return y == null ? null : o >= 0 ? Array.isArray(y) ? y[o] ?? null : typeof y == "object" && "get" in y && typeof y.get == "function" ? y.get(o) ?? null : null : typeof y == "object" && "eClass" in y ? y : null;
  }
  getURIFragment(e) {
    const t = [];
    let s = e;
    for (; s; ) {
      const r = s.eContainer();
      if (!r) {
        const o = this.contents.indexOf(s);
        o >= 0 && t.unshift(o);
        break;
      }
      const a = r.eContents().indexOf(s);
      a >= 0 && t.unshift(a), s = r;
    }
    return "/" + t.join("/");
  }
  async save(e) {
    this.errors = [], this.warnings = [];
    try {
      const t = this.serialize();
      this.modified = !1;
    } catch (t) {
      throw this.errors.push({
        message: t instanceof Error ? t.message : String(t)
      }), t;
    }
  }
  async load(e) {
    this.errors = [], this.warnings = [];
    try {
      this.loaded = !0;
    } catch (t) {
      throw this.errors.push({
        message: t instanceof Error ? t.message : String(t)
      }), t;
    }
  }
  isLoaded() {
    return this.loaded;
  }
  unload() {
    this.contents.clear(), this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [];
  }
  isModified() {
    return this.modified;
  }
  setModified(e) {
    this.modified = e;
  }
  getErrors() {
    return this.errors;
  }
  getWarnings() {
    return this.warnings;
  }
  /**
   * Helper to find object by ID attribute
   */
  getEObjectByID(e) {
    const t = this.getAllContents();
    let s = t.next();
    for (; !s.done; ) {
      const r = s.value, a = r.eClass().getEIDAttribute();
      if (a && r.eGet(a) === e)
        return r;
      s = t.next();
    }
    return null;
  }
  /**
   * Simple JSON serialization
   */
  serialize() {
    return {
      uri: this.uri?.toString(),
      contents: this.contents.toArray().map((e) => this.serializeObject(e))
    };
  }
  serializeObject(e) {
    const t = e.eClass(), s = {
      eClass: t.getName()
    };
    for (const r of t.getEAllStructuralFeatures()) {
      if (r.isTransient())
        continue;
      const n = e.eGet(r);
      n != null && (r.isMany() && Array.isArray(n) ? s[r.getName()] = n.map((a) => typeof a == "object" && "eClass" in a ? this.serializeObject(a) : a) : s[r.getName()] = typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n);
    }
    return s;
  }
}
var vt = {};
const kr = {}, Br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kr
}, Symbol.toStringTag, { value: "Module" })), Mr = /* @__PURE__ */ ar(Br);
var xt = {}, lt = { exports: {} }, Rt = {}, st = {}, Zt;
function Dr() {
  if (Zt) return st;
  Zt = 1, st.byteLength = o, st.toByteArray = y, st.fromByteArray = A;
  for (var l = [], e = [], t = typeof Uint8Array < "u" ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = 0, n = s.length; r < n; ++r)
    l[r] = s[r], e[s.charCodeAt(r)] = r;
  e[45] = 62, e[95] = 63;
  function a(b) {
    var R = b.length;
    if (R % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var M = b.indexOf("=");
    M === -1 && (M = R);
    var U = M === R ? 0 : 4 - M % 4;
    return [M, U];
  }
  function o(b) {
    var R = a(b), M = R[0], U = R[1];
    return (M + U) * 3 / 4 - U;
  }
  function d(b, R, M) {
    return (R + M) * 3 / 4 - M;
  }
  function y(b) {
    var R, M = a(b), U = M[0], _ = M[1], x = new t(d(b, U, _)), D = 0, $ = _ > 0 ? U - 4 : U, L;
    for (L = 0; L < $; L += 4)
      R = e[b.charCodeAt(L)] << 18 | e[b.charCodeAt(L + 1)] << 12 | e[b.charCodeAt(L + 2)] << 6 | e[b.charCodeAt(L + 3)], x[D++] = R >> 16 & 255, x[D++] = R >> 8 & 255, x[D++] = R & 255;
    return _ === 2 && (R = e[b.charCodeAt(L)] << 2 | e[b.charCodeAt(L + 1)] >> 4, x[D++] = R & 255), _ === 1 && (R = e[b.charCodeAt(L)] << 10 | e[b.charCodeAt(L + 1)] << 4 | e[b.charCodeAt(L + 2)] >> 2, x[D++] = R >> 8 & 255, x[D++] = R & 255), x;
  }
  function S(b) {
    return l[b >> 18 & 63] + l[b >> 12 & 63] + l[b >> 6 & 63] + l[b & 63];
  }
  function C(b, R, M) {
    for (var U, _ = [], x = R; x < M; x += 3)
      U = (b[x] << 16 & 16711680) + (b[x + 1] << 8 & 65280) + (b[x + 2] & 255), _.push(S(U));
    return _.join("");
  }
  function A(b) {
    for (var R, M = b.length, U = M % 3, _ = [], x = 16383, D = 0, $ = M - U; D < $; D += x)
      _.push(C(b, D, D + x > $ ? $ : D + x));
    return U === 1 ? (R = b[M - 1], _.push(
      l[R >> 2] + l[R << 4 & 63] + "=="
    )) : U === 2 && (R = (b[M - 2] << 8) + b[M - 1], _.push(
      l[R >> 10] + l[R >> 4 & 63] + l[R << 2 & 63] + "="
    )), _.join("");
  }
  return st;
}
var ht = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var es;
function Or() {
  return es || (es = 1, ht.read = function(l, e, t, s, r) {
    var n, a, o = r * 8 - s - 1, d = (1 << o) - 1, y = d >> 1, S = -7, C = t ? r - 1 : 0, A = t ? -1 : 1, b = l[e + C];
    for (C += A, n = b & (1 << -S) - 1, b >>= -S, S += o; S > 0; n = n * 256 + l[e + C], C += A, S -= 8)
      ;
    for (a = n & (1 << -S) - 1, n >>= -S, S += s; S > 0; a = a * 256 + l[e + C], C += A, S -= 8)
      ;
    if (n === 0)
      n = 1 - y;
    else {
      if (n === d)
        return a ? NaN : (b ? -1 : 1) * (1 / 0);
      a = a + Math.pow(2, s), n = n - y;
    }
    return (b ? -1 : 1) * a * Math.pow(2, n - s);
  }, ht.write = function(l, e, t, s, r, n) {
    var a, o, d, y = n * 8 - r - 1, S = (1 << y) - 1, C = S >> 1, A = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = s ? 0 : n - 1, R = s ? 1 : -1, M = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, a = S) : (a = Math.floor(Math.log(e) / Math.LN2), e * (d = Math.pow(2, -a)) < 1 && (a--, d *= 2), a + C >= 1 ? e += A / d : e += A * Math.pow(2, 1 - C), e * d >= 2 && (a++, d /= 2), a + C >= S ? (o = 0, a = S) : a + C >= 1 ? (o = (e * d - 1) * Math.pow(2, r), a = a + C) : (o = e * Math.pow(2, C - 1) * Math.pow(2, r), a = 0)); r >= 8; l[t + b] = o & 255, b += R, o /= 256, r -= 8)
      ;
    for (a = a << r | o, y += r; y > 0; l[t + b] = a & 255, b += R, a /= 256, y -= 8)
      ;
    l[t + b - R] |= M * 128;
  }), ht;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var ts;
function Ur() {
  return ts || (ts = 1, (function(l) {
    const e = Dr(), t = Or(), s = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    l.Buffer = o, l.SlowBuffer = x, l.INSPECT_MAX_BYTES = 50;
    const r = 2147483647;
    l.kMaxLength = r, o.TYPED_ARRAY_SUPPORT = n(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
    function n() {
      try {
        const h = new Uint8Array(1), i = { foo: function() {
          return 42;
        } };
        return Object.setPrototypeOf(i, Uint8Array.prototype), Object.setPrototypeOf(h, i), h.foo() === 42;
      } catch {
        return !1;
      }
    }
    Object.defineProperty(o.prototype, "parent", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.buffer;
      }
    }), Object.defineProperty(o.prototype, "offset", {
      enumerable: !0,
      get: function() {
        if (o.isBuffer(this))
          return this.byteOffset;
      }
    });
    function a(h) {
      if (h > r)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
      const i = new Uint8Array(h);
      return Object.setPrototypeOf(i, o.prototype), i;
    }
    function o(h, i, c) {
      if (typeof h == "number") {
        if (typeof i == "string")
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        return C(h);
      }
      return d(h, i, c);
    }
    o.poolSize = 8192;
    function d(h, i, c) {
      if (typeof h == "string")
        return A(h, i);
      if (ArrayBuffer.isView(h))
        return R(h);
      if (h == null)
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
        );
      if (me(h, ArrayBuffer) || h && me(h.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (me(h, SharedArrayBuffer) || h && me(h.buffer, SharedArrayBuffer)))
        return M(h, i, c);
      if (typeof h == "number")
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      const p = h.valueOf && h.valueOf();
      if (p != null && p !== h)
        return o.from(p, i, c);
      const E = U(h);
      if (E) return E;
      if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof h[Symbol.toPrimitive] == "function")
        return o.from(h[Symbol.toPrimitive]("string"), i, c);
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof h
      );
    }
    o.from = function(h, i, c) {
      return d(h, i, c);
    }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
    function y(h) {
      if (typeof h != "number")
        throw new TypeError('"size" argument must be of type number');
      if (h < 0)
        throw new RangeError('The value "' + h + '" is invalid for option "size"');
    }
    function S(h, i, c) {
      return y(h), h <= 0 ? a(h) : i !== void 0 ? typeof c == "string" ? a(h).fill(i, c) : a(h).fill(i) : a(h);
    }
    o.alloc = function(h, i, c) {
      return S(h, i, c);
    };
    function C(h) {
      return y(h), a(h < 0 ? 0 : _(h) | 0);
    }
    o.allocUnsafe = function(h) {
      return C(h);
    }, o.allocUnsafeSlow = function(h) {
      return C(h);
    };
    function A(h, i) {
      if ((typeof i != "string" || i === "") && (i = "utf8"), !o.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      const c = D(h, i) | 0;
      let p = a(c);
      const E = p.write(h, i);
      return E !== c && (p = p.slice(0, E)), p;
    }
    function b(h) {
      const i = h.length < 0 ? 0 : _(h.length) | 0, c = a(i);
      for (let p = 0; p < i; p += 1)
        c[p] = h[p] & 255;
      return c;
    }
    function R(h) {
      if (me(h, Uint8Array)) {
        const i = new Uint8Array(h);
        return M(i.buffer, i.byteOffset, i.byteLength);
      }
      return b(h);
    }
    function M(h, i, c) {
      if (i < 0 || h.byteLength < i)
        throw new RangeError('"offset" is outside of buffer bounds');
      if (h.byteLength < i + (c || 0))
        throw new RangeError('"length" is outside of buffer bounds');
      let p;
      return i === void 0 && c === void 0 ? p = new Uint8Array(h) : c === void 0 ? p = new Uint8Array(h, i) : p = new Uint8Array(h, i, c), Object.setPrototypeOf(p, o.prototype), p;
    }
    function U(h) {
      if (o.isBuffer(h)) {
        const i = _(h.length) | 0, c = a(i);
        return c.length === 0 || h.copy(c, 0, 0, i), c;
      }
      if (h.length !== void 0)
        return typeof h.length != "number" || tt(h.length) ? a(0) : b(h);
      if (h.type === "Buffer" && Array.isArray(h.data))
        return b(h.data);
    }
    function _(h) {
      if (h >= r)
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
      return h | 0;
    }
    function x(h) {
      return +h != h && (h = 0), o.alloc(+h);
    }
    o.isBuffer = function(i) {
      return i != null && i._isBuffer === !0 && i !== o.prototype;
    }, o.compare = function(i, c) {
      if (me(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), me(c, Uint8Array) && (c = o.from(c, c.offset, c.byteLength)), !o.isBuffer(i) || !o.isBuffer(c))
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (i === c) return 0;
      let p = i.length, E = c.length;
      for (let f = 0, m = Math.min(p, E); f < m; ++f)
        if (i[f] !== c[f]) {
          p = i[f], E = c[f];
          break;
        }
      return p < E ? -1 : E < p ? 1 : 0;
    }, o.isEncoding = function(i) {
      switch (String(i).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, o.concat = function(i, c) {
      if (!Array.isArray(i))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (i.length === 0)
        return o.alloc(0);
      let p;
      if (c === void 0)
        for (c = 0, p = 0; p < i.length; ++p)
          c += i[p].length;
      const E = o.allocUnsafe(c);
      let f = 0;
      for (p = 0; p < i.length; ++p) {
        let m = i[p];
        if (me(m, Uint8Array))
          f + m.length > E.length ? (o.isBuffer(m) || (m = o.from(m)), m.copy(E, f)) : Uint8Array.prototype.set.call(
            E,
            m,
            f
          );
        else if (o.isBuffer(m))
          m.copy(E, f);
        else
          throw new TypeError('"list" argument must be an Array of Buffers');
        f += m.length;
      }
      return E;
    };
    function D(h, i) {
      if (o.isBuffer(h))
        return h.length;
      if (ArrayBuffer.isView(h) || me(h, ArrayBuffer))
        return h.byteLength;
      if (typeof h != "string")
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof h
        );
      const c = h.length, p = arguments.length > 2 && arguments[2] === !0;
      if (!p && c === 0) return 0;
      let E = !1;
      for (; ; )
        switch (i) {
          case "ascii":
          case "latin1":
          case "binary":
            return c;
          case "utf8":
          case "utf-8":
            return oe(h).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return c * 2;
          case "hex":
            return c >>> 1;
          case "base64":
            return $e(h).length;
          default:
            if (E)
              return p ? -1 : oe(h).length;
            i = ("" + i).toLowerCase(), E = !0;
        }
    }
    o.byteLength = D;
    function $(h, i, c) {
      let p = !1;
      if ((i === void 0 || i < 0) && (i = 0), i > this.length || ((c === void 0 || c > this.length) && (c = this.length), c <= 0) || (c >>>= 0, i >>>= 0, c <= i))
        return "";
      for (h || (h = "utf8"); ; )
        switch (h) {
          case "hex":
            return Ue(this, i, c);
          case "utf8":
          case "utf-8":
            return Xe(this, i, c);
          case "ascii":
            return V(this, i, c);
          case "latin1":
          case "binary":
            return ze(this, i, c);
          case "base64":
            return Be(this, i, c);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Le(this, i, c);
          default:
            if (p) throw new TypeError("Unknown encoding: " + h);
            h = (h + "").toLowerCase(), p = !0;
        }
    }
    o.prototype._isBuffer = !0;
    function L(h, i, c) {
      const p = h[i];
      h[i] = h[c], h[c] = p;
    }
    o.prototype.swap16 = function() {
      const i = this.length;
      if (i % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (let c = 0; c < i; c += 2)
        L(this, c, c + 1);
      return this;
    }, o.prototype.swap32 = function() {
      const i = this.length;
      if (i % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (let c = 0; c < i; c += 4)
        L(this, c, c + 3), L(this, c + 1, c + 2);
      return this;
    }, o.prototype.swap64 = function() {
      const i = this.length;
      if (i % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let c = 0; c < i; c += 8)
        L(this, c, c + 7), L(this, c + 1, c + 6), L(this, c + 2, c + 5), L(this, c + 3, c + 4);
      return this;
    }, o.prototype.toString = function() {
      const i = this.length;
      return i === 0 ? "" : arguments.length === 0 ? Xe(this, 0, i) : $.apply(this, arguments);
    }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(i) {
      if (!o.isBuffer(i)) throw new TypeError("Argument must be a Buffer");
      return this === i ? !0 : o.compare(this, i) === 0;
    }, o.prototype.inspect = function() {
      let i = "";
      const c = l.INSPECT_MAX_BYTES;
      return i = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (i += " ... "), "<Buffer " + i + ">";
    }, s && (o.prototype[s] = o.prototype.inspect), o.prototype.compare = function(i, c, p, E, f) {
      if (me(i, Uint8Array) && (i = o.from(i, i.offset, i.byteLength)), !o.isBuffer(i))
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof i
        );
      if (c === void 0 && (c = 0), p === void 0 && (p = i ? i.length : 0), E === void 0 && (E = 0), f === void 0 && (f = this.length), c < 0 || p > i.length || E < 0 || f > this.length)
        throw new RangeError("out of range index");
      if (E >= f && c >= p)
        return 0;
      if (E >= f)
        return -1;
      if (c >= p)
        return 1;
      if (c >>>= 0, p >>>= 0, E >>>= 0, f >>>= 0, this === i) return 0;
      let m = f - E, w = p - c;
      const v = Math.min(m, w), P = this.slice(E, f), X = i.slice(c, p);
      for (let W = 0; W < v; ++W)
        if (P[W] !== X[W]) {
          m = P[W], w = X[W];
          break;
        }
      return m < w ? -1 : w < m ? 1 : 0;
    };
    function Ee(h, i, c, p, E) {
      if (h.length === 0) return -1;
      if (typeof c == "string" ? (p = c, c = 0) : c > 2147483647 ? c = 2147483647 : c < -2147483648 && (c = -2147483648), c = +c, tt(c) && (c = E ? 0 : h.length - 1), c < 0 && (c = h.length + c), c >= h.length) {
        if (E) return -1;
        c = h.length - 1;
      } else if (c < 0)
        if (E) c = 0;
        else return -1;
      if (typeof i == "string" && (i = o.from(i, p)), o.isBuffer(i))
        return i.length === 0 ? -1 : fe(h, i, c, p, E);
      if (typeof i == "number")
        return i = i & 255, typeof Uint8Array.prototype.indexOf == "function" ? E ? Uint8Array.prototype.indexOf.call(h, i, c) : Uint8Array.prototype.lastIndexOf.call(h, i, c) : fe(h, [i], c, p, E);
      throw new TypeError("val must be string, number or Buffer");
    }
    function fe(h, i, c, p, E) {
      let f = 1, m = h.length, w = i.length;
      if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
        if (h.length < 2 || i.length < 2)
          return -1;
        f = 2, m /= 2, w /= 2, c /= 2;
      }
      function v(X, W) {
        return f === 1 ? X[W] : X.readUInt16BE(W * f);
      }
      let P;
      if (E) {
        let X = -1;
        for (P = c; P < m; P++)
          if (v(h, P) === v(i, X === -1 ? 0 : P - X)) {
            if (X === -1 && (X = P), P - X + 1 === w) return X * f;
          } else
            X !== -1 && (P -= P - X), X = -1;
      } else
        for (c + w > m && (c = m - w), P = c; P >= 0; P--) {
          let X = !0;
          for (let W = 0; W < w; W++)
            if (v(h, P + W) !== v(i, W)) {
              X = !1;
              break;
            }
          if (X) return P;
        }
      return -1;
    }
    o.prototype.includes = function(i, c, p) {
      return this.indexOf(i, c, p) !== -1;
    }, o.prototype.indexOf = function(i, c, p) {
      return Ee(this, i, c, p, !0);
    }, o.prototype.lastIndexOf = function(i, c, p) {
      return Ee(this, i, c, p, !1);
    };
    function Pe(h, i, c, p) {
      c = Number(c) || 0;
      const E = h.length - c;
      p ? (p = Number(p), p > E && (p = E)) : p = E;
      const f = i.length;
      p > f / 2 && (p = f / 2);
      let m;
      for (m = 0; m < p; ++m) {
        const w = parseInt(i.substr(m * 2, 2), 16);
        if (tt(w)) return m;
        h[c + m] = w;
      }
      return m;
    }
    function N(h, i, c, p) {
      return be(oe(i, h.length - c), h, c, p);
    }
    function Ye(h, i, c, p) {
      return be(Te(i), h, c, p);
    }
    function ke(h, i, c, p) {
      return be($e(i), h, c, p);
    }
    function ie(h, i, c, p) {
      return be(Ke(i, h.length - c), h, c, p);
    }
    o.prototype.write = function(i, c, p, E) {
      if (c === void 0)
        E = "utf8", p = this.length, c = 0;
      else if (p === void 0 && typeof c == "string")
        E = c, p = this.length, c = 0;
      else if (isFinite(c))
        c = c >>> 0, isFinite(p) ? (p = p >>> 0, E === void 0 && (E = "utf8")) : (E = p, p = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      const f = this.length - c;
      if ((p === void 0 || p > f) && (p = f), i.length > 0 && (p < 0 || c < 0) || c > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      E || (E = "utf8");
      let m = !1;
      for (; ; )
        switch (E) {
          case "hex":
            return Pe(this, i, c, p);
          case "utf8":
          case "utf-8":
            return N(this, i, c, p);
          case "ascii":
          case "latin1":
          case "binary":
            return Ye(this, i, c, p);
          case "base64":
            return ke(this, i, c, p);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ie(this, i, c, p);
          default:
            if (m) throw new TypeError("Unknown encoding: " + E);
            E = ("" + E).toLowerCase(), m = !0;
        }
    }, o.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Be(h, i, c) {
      return i === 0 && c === h.length ? e.fromByteArray(h) : e.fromByteArray(h.slice(i, c));
    }
    function Xe(h, i, c) {
      c = Math.min(h.length, c);
      const p = [];
      let E = i;
      for (; E < c; ) {
        const f = h[E];
        let m = null, w = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
        if (E + w <= c) {
          let v, P, X, W;
          switch (w) {
            case 1:
              f < 128 && (m = f);
              break;
            case 2:
              v = h[E + 1], (v & 192) === 128 && (W = (f & 31) << 6 | v & 63, W > 127 && (m = W));
              break;
            case 3:
              v = h[E + 1], P = h[E + 2], (v & 192) === 128 && (P & 192) === 128 && (W = (f & 15) << 12 | (v & 63) << 6 | P & 63, W > 2047 && (W < 55296 || W > 57343) && (m = W));
              break;
            case 4:
              v = h[E + 1], P = h[E + 2], X = h[E + 3], (v & 192) === 128 && (P & 192) === 128 && (X & 192) === 128 && (W = (f & 15) << 18 | (v & 63) << 12 | (P & 63) << 6 | X & 63, W > 65535 && W < 1114112 && (m = W));
          }
        }
        m === null ? (m = 65533, w = 1) : m > 65535 && (m -= 65536, p.push(m >>> 10 & 1023 | 55296), m = 56320 | m & 1023), p.push(m), E += w;
      }
      return Oe(p);
    }
    const Ae = 4096;
    function Oe(h) {
      const i = h.length;
      if (i <= Ae)
        return String.fromCharCode.apply(String, h);
      let c = "", p = 0;
      for (; p < i; )
        c += String.fromCharCode.apply(
          String,
          h.slice(p, p += Ae)
        );
      return c;
    }
    function V(h, i, c) {
      let p = "";
      c = Math.min(h.length, c);
      for (let E = i; E < c; ++E)
        p += String.fromCharCode(h[E] & 127);
      return p;
    }
    function ze(h, i, c) {
      let p = "";
      c = Math.min(h.length, c);
      for (let E = i; E < c; ++E)
        p += String.fromCharCode(h[E]);
      return p;
    }
    function Ue(h, i, c) {
      const p = h.length;
      (!i || i < 0) && (i = 0), (!c || c < 0 || c > p) && (c = p);
      let E = "";
      for (let f = i; f < c; ++f)
        E += wt[h[f]];
      return E;
    }
    function Le(h, i, c) {
      const p = h.slice(i, c);
      let E = "";
      for (let f = 0; f < p.length - 1; f += 2)
        E += String.fromCharCode(p[f] + p[f + 1] * 256);
      return E;
    }
    o.prototype.slice = function(i, c) {
      const p = this.length;
      i = ~~i, c = c === void 0 ? p : ~~c, i < 0 ? (i += p, i < 0 && (i = 0)) : i > p && (i = p), c < 0 ? (c += p, c < 0 && (c = 0)) : c > p && (c = p), c < i && (c = i);
      const E = this.subarray(i, c);
      return Object.setPrototypeOf(E, o.prototype), E;
    };
    function Q(h, i, c) {
      if (h % 1 !== 0 || h < 0) throw new RangeError("offset is not uint");
      if (h + i > c) throw new RangeError("Trying to access beyond buffer length");
    }
    o.prototype.readUintLE = o.prototype.readUIntLE = function(i, c, p) {
      i = i >>> 0, c = c >>> 0, p || Q(i, c, this.length);
      let E = this[i], f = 1, m = 0;
      for (; ++m < c && (f *= 256); )
        E += this[i + m] * f;
      return E;
    }, o.prototype.readUintBE = o.prototype.readUIntBE = function(i, c, p) {
      i = i >>> 0, c = c >>> 0, p || Q(i, c, this.length);
      let E = this[i + --c], f = 1;
      for (; c > 0 && (f *= 256); )
        E += this[i + --c] * f;
      return E;
    }, o.prototype.readUint8 = o.prototype.readUInt8 = function(i, c) {
      return i = i >>> 0, c || Q(i, 1, this.length), this[i];
    }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(i, c) {
      return i = i >>> 0, c || Q(i, 2, this.length), this[i] | this[i + 1] << 8;
    }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(i, c) {
      return i = i >>> 0, c || Q(i, 2, this.length), this[i] << 8 | this[i + 1];
    }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), (this[i] | this[i + 1] << 8 | this[i + 2] << 16) + this[i + 3] * 16777216;
    }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), this[i] * 16777216 + (this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3]);
    }, o.prototype.readBigUInt64LE = Fe(function(i) {
      i = i >>> 0, J(i, "offset");
      const c = this[i], p = this[i + 7];
      (c === void 0 || p === void 0) && ue(i, this.length - 8);
      const E = c + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24, f = this[++i] + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + p * 2 ** 24;
      return BigInt(E) + (BigInt(f) << BigInt(32));
    }), o.prototype.readBigUInt64BE = Fe(function(i) {
      i = i >>> 0, J(i, "offset");
      const c = this[i], p = this[i + 7];
      (c === void 0 || p === void 0) && ue(i, this.length - 8);
      const E = c * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i], f = this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + p;
      return (BigInt(E) << BigInt(32)) + BigInt(f);
    }), o.prototype.readIntLE = function(i, c, p) {
      i = i >>> 0, c = c >>> 0, p || Q(i, c, this.length);
      let E = this[i], f = 1, m = 0;
      for (; ++m < c && (f *= 256); )
        E += this[i + m] * f;
      return f *= 128, E >= f && (E -= Math.pow(2, 8 * c)), E;
    }, o.prototype.readIntBE = function(i, c, p) {
      i = i >>> 0, c = c >>> 0, p || Q(i, c, this.length);
      let E = c, f = 1, m = this[i + --E];
      for (; E > 0 && (f *= 256); )
        m += this[i + --E] * f;
      return f *= 128, m >= f && (m -= Math.pow(2, 8 * c)), m;
    }, o.prototype.readInt8 = function(i, c) {
      return i = i >>> 0, c || Q(i, 1, this.length), this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i];
    }, o.prototype.readInt16LE = function(i, c) {
      i = i >>> 0, c || Q(i, 2, this.length);
      const p = this[i] | this[i + 1] << 8;
      return p & 32768 ? p | 4294901760 : p;
    }, o.prototype.readInt16BE = function(i, c) {
      i = i >>> 0, c || Q(i, 2, this.length);
      const p = this[i + 1] | this[i] << 8;
      return p & 32768 ? p | 4294901760 : p;
    }, o.prototype.readInt32LE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), this[i] | this[i + 1] << 8 | this[i + 2] << 16 | this[i + 3] << 24;
    }, o.prototype.readInt32BE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), this[i] << 24 | this[i + 1] << 16 | this[i + 2] << 8 | this[i + 3];
    }, o.prototype.readBigInt64LE = Fe(function(i) {
      i = i >>> 0, J(i, "offset");
      const c = this[i], p = this[i + 7];
      (c === void 0 || p === void 0) && ue(i, this.length - 8);
      const E = this[i + 4] + this[i + 5] * 2 ** 8 + this[i + 6] * 2 ** 16 + (p << 24);
      return (BigInt(E) << BigInt(32)) + BigInt(c + this[++i] * 2 ** 8 + this[++i] * 2 ** 16 + this[++i] * 2 ** 24);
    }), o.prototype.readBigInt64BE = Fe(function(i) {
      i = i >>> 0, J(i, "offset");
      const c = this[i], p = this[i + 7];
      (c === void 0 || p === void 0) && ue(i, this.length - 8);
      const E = (c << 24) + // Overflow
      this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + this[++i];
      return (BigInt(E) << BigInt(32)) + BigInt(this[++i] * 2 ** 24 + this[++i] * 2 ** 16 + this[++i] * 2 ** 8 + p);
    }), o.prototype.readFloatLE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), t.read(this, i, !0, 23, 4);
    }, o.prototype.readFloatBE = function(i, c) {
      return i = i >>> 0, c || Q(i, 4, this.length), t.read(this, i, !1, 23, 4);
    }, o.prototype.readDoubleLE = function(i, c) {
      return i = i >>> 0, c || Q(i, 8, this.length), t.read(this, i, !0, 52, 8);
    }, o.prototype.readDoubleBE = function(i, c) {
      return i = i >>> 0, c || Q(i, 8, this.length), t.read(this, i, !1, 52, 8);
    };
    function ge(h, i, c, p, E, f) {
      if (!o.isBuffer(h)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (i > E || i < f) throw new RangeError('"value" argument is out of bounds');
      if (c + p > h.length) throw new RangeError("Index out of range");
    }
    o.prototype.writeUintLE = o.prototype.writeUIntLE = function(i, c, p, E) {
      if (i = +i, c = c >>> 0, p = p >>> 0, !E) {
        const w = Math.pow(2, 8 * p) - 1;
        ge(this, i, c, p, w, 0);
      }
      let f = 1, m = 0;
      for (this[c] = i & 255; ++m < p && (f *= 256); )
        this[c + m] = i / f & 255;
      return c + p;
    }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(i, c, p, E) {
      if (i = +i, c = c >>> 0, p = p >>> 0, !E) {
        const w = Math.pow(2, 8 * p) - 1;
        ge(this, i, c, p, w, 0);
      }
      let f = p - 1, m = 1;
      for (this[c + f] = i & 255; --f >= 0 && (m *= 256); )
        this[c + f] = i / m & 255;
      return c + p;
    }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 1, 255, 0), this[c] = i & 255, c + 1;
    }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 2, 65535, 0), this[c] = i & 255, this[c + 1] = i >>> 8, c + 2;
    }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 2, 65535, 0), this[c] = i >>> 8, this[c + 1] = i & 255, c + 2;
    }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 4, 4294967295, 0), this[c + 3] = i >>> 24, this[c + 2] = i >>> 16, this[c + 1] = i >>> 8, this[c] = i & 255, c + 4;
    }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 4, 4294967295, 0), this[c] = i >>> 24, this[c + 1] = i >>> 16, this[c + 2] = i >>> 8, this[c + 3] = i & 255, c + 4;
    };
    function G(h, i, c, p, E) {
      Z(i, p, E, h, c, 7);
      let f = Number(i & BigInt(4294967295));
      h[c++] = f, f = f >> 8, h[c++] = f, f = f >> 8, h[c++] = f, f = f >> 8, h[c++] = f;
      let m = Number(i >> BigInt(32) & BigInt(4294967295));
      return h[c++] = m, m = m >> 8, h[c++] = m, m = m >> 8, h[c++] = m, m = m >> 8, h[c++] = m, c;
    }
    function Ne(h, i, c, p, E) {
      Z(i, p, E, h, c, 7);
      let f = Number(i & BigInt(4294967295));
      h[c + 7] = f, f = f >> 8, h[c + 6] = f, f = f >> 8, h[c + 5] = f, f = f >> 8, h[c + 4] = f;
      let m = Number(i >> BigInt(32) & BigInt(4294967295));
      return h[c + 3] = m, m = m >> 8, h[c + 2] = m, m = m >> 8, h[c + 1] = m, m = m >> 8, h[c] = m, c + 8;
    }
    o.prototype.writeBigUInt64LE = Fe(function(i, c = 0) {
      return G(this, i, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeBigUInt64BE = Fe(function(i, c = 0) {
      return Ne(this, i, c, BigInt(0), BigInt("0xffffffffffffffff"));
    }), o.prototype.writeIntLE = function(i, c, p, E) {
      if (i = +i, c = c >>> 0, !E) {
        const v = Math.pow(2, 8 * p - 1);
        ge(this, i, c, p, v - 1, -v);
      }
      let f = 0, m = 1, w = 0;
      for (this[c] = i & 255; ++f < p && (m *= 256); )
        i < 0 && w === 0 && this[c + f - 1] !== 0 && (w = 1), this[c + f] = (i / m >> 0) - w & 255;
      return c + p;
    }, o.prototype.writeIntBE = function(i, c, p, E) {
      if (i = +i, c = c >>> 0, !E) {
        const v = Math.pow(2, 8 * p - 1);
        ge(this, i, c, p, v - 1, -v);
      }
      let f = p - 1, m = 1, w = 0;
      for (this[c + f] = i & 255; --f >= 0 && (m *= 256); )
        i < 0 && w === 0 && this[c + f + 1] !== 0 && (w = 1), this[c + f] = (i / m >> 0) - w & 255;
      return c + p;
    }, o.prototype.writeInt8 = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 1, 127, -128), i < 0 && (i = 255 + i + 1), this[c] = i & 255, c + 1;
    }, o.prototype.writeInt16LE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 2, 32767, -32768), this[c] = i & 255, this[c + 1] = i >>> 8, c + 2;
    }, o.prototype.writeInt16BE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 2, 32767, -32768), this[c] = i >>> 8, this[c + 1] = i & 255, c + 2;
    }, o.prototype.writeInt32LE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 4, 2147483647, -2147483648), this[c] = i & 255, this[c + 1] = i >>> 8, this[c + 2] = i >>> 16, this[c + 3] = i >>> 24, c + 4;
    }, o.prototype.writeInt32BE = function(i, c, p) {
      return i = +i, c = c >>> 0, p || ge(this, i, c, 4, 2147483647, -2147483648), i < 0 && (i = 4294967295 + i + 1), this[c] = i >>> 24, this[c + 1] = i >>> 16, this[c + 2] = i >>> 8, this[c + 3] = i & 255, c + 4;
    }, o.prototype.writeBigInt64LE = Fe(function(i, c = 0) {
      return G(this, i, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }), o.prototype.writeBigInt64BE = Fe(function(i, c = 0) {
      return Ne(this, i, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function je(h, i, c, p, E, f) {
      if (c + p > h.length) throw new RangeError("Index out of range");
      if (c < 0) throw new RangeError("Index out of range");
    }
    function ae(h, i, c, p, E) {
      return i = +i, c = c >>> 0, E || je(h, i, c, 4), t.write(h, i, c, p, 23, 4), c + 4;
    }
    o.prototype.writeFloatLE = function(i, c, p) {
      return ae(this, i, c, !0, p);
    }, o.prototype.writeFloatBE = function(i, c, p) {
      return ae(this, i, c, !1, p);
    };
    function g(h, i, c, p, E) {
      return i = +i, c = c >>> 0, E || je(h, i, c, 8), t.write(h, i, c, p, 52, 8), c + 8;
    }
    o.prototype.writeDoubleLE = function(i, c, p) {
      return g(this, i, c, !0, p);
    }, o.prototype.writeDoubleBE = function(i, c, p) {
      return g(this, i, c, !1, p);
    }, o.prototype.copy = function(i, c, p, E) {
      if (!o.isBuffer(i)) throw new TypeError("argument should be a Buffer");
      if (p || (p = 0), !E && E !== 0 && (E = this.length), c >= i.length && (c = i.length), c || (c = 0), E > 0 && E < p && (E = p), E === p || i.length === 0 || this.length === 0) return 0;
      if (c < 0)
        throw new RangeError("targetStart out of bounds");
      if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
      if (E < 0) throw new RangeError("sourceEnd out of bounds");
      E > this.length && (E = this.length), i.length - c < E - p && (E = i.length - c + p);
      const f = E - p;
      return this === i && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, p, E) : Uint8Array.prototype.set.call(
        i,
        this.subarray(p, E),
        c
      ), f;
    }, o.prototype.fill = function(i, c, p, E) {
      if (typeof i == "string") {
        if (typeof c == "string" ? (E = c, c = 0, p = this.length) : typeof p == "string" && (E = p, p = this.length), E !== void 0 && typeof E != "string")
          throw new TypeError("encoding must be a string");
        if (typeof E == "string" && !o.isEncoding(E))
          throw new TypeError("Unknown encoding: " + E);
        if (i.length === 1) {
          const m = i.charCodeAt(0);
          (E === "utf8" && m < 128 || E === "latin1") && (i = m);
        }
      } else typeof i == "number" ? i = i & 255 : typeof i == "boolean" && (i = Number(i));
      if (c < 0 || this.length < c || this.length < p)
        throw new RangeError("Out of range index");
      if (p <= c)
        return this;
      c = c >>> 0, p = p === void 0 ? this.length : p >>> 0, i || (i = 0);
      let f;
      if (typeof i == "number")
        for (f = c; f < p; ++f)
          this[f] = i;
      else {
        const m = o.isBuffer(i) ? i : o.from(i, E), w = m.length;
        if (w === 0)
          throw new TypeError('The value "' + i + '" is invalid for argument "value"');
        for (f = 0; f < p - c; ++f)
          this[f + c] = m[f % w];
      }
      return this;
    };
    const u = {};
    function I(h, i, c) {
      u[h] = class extends c {
        constructor() {
          super(), Object.defineProperty(this, "message", {
            value: i.apply(this, arguments),
            writable: !0,
            configurable: !0
          }), this.name = `${this.name} [${h}]`, this.stack, delete this.name;
        }
        get code() {
          return h;
        }
        set code(E) {
          Object.defineProperty(this, "code", {
            configurable: !0,
            enumerable: !0,
            value: E,
            writable: !0
          });
        }
        toString() {
          return `${this.name} [${h}]: ${this.message}`;
        }
      };
    }
    I(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(h) {
        return h ? `${h} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      },
      RangeError
    ), I(
      "ERR_INVALID_ARG_TYPE",
      function(h, i) {
        return `The "${h}" argument must be of type number. Received type ${typeof i}`;
      },
      TypeError
    ), I(
      "ERR_OUT_OF_RANGE",
      function(h, i, c) {
        let p = `The value of "${h}" is out of range.`, E = c;
        return Number.isInteger(c) && Math.abs(c) > 2 ** 32 ? E = T(String(c)) : typeof c == "bigint" && (E = String(c), (c > BigInt(2) ** BigInt(32) || c < -(BigInt(2) ** BigInt(32))) && (E = T(E)), E += "n"), p += ` It must be ${i}. Received ${E}`, p;
      },
      RangeError
    );
    function T(h) {
      let i = "", c = h.length;
      const p = h[0] === "-" ? 1 : 0;
      for (; c >= p + 4; c -= 3)
        i = `_${h.slice(c - 3, c)}${i}`;
      return `${h.slice(0, c)}${i}`;
    }
    function q(h, i, c) {
      J(i, "offset"), (h[i] === void 0 || h[i + c] === void 0) && ue(i, h.length - (c + 1));
    }
    function Z(h, i, c, p, E, f) {
      if (h > c || h < i) {
        const m = typeof i == "bigint" ? "n" : "";
        let w;
        throw i === 0 || i === BigInt(0) ? w = `>= 0${m} and < 2${m} ** ${(f + 1) * 8}${m}` : w = `>= -(2${m} ** ${(f + 1) * 8 - 1}${m}) and < 2 ** ${(f + 1) * 8 - 1}${m}`, new u.ERR_OUT_OF_RANGE("value", w, h);
      }
      q(p, E, f);
    }
    function J(h, i) {
      if (typeof h != "number")
        throw new u.ERR_INVALID_ARG_TYPE(i, "number", h);
    }
    function ue(h, i, c) {
      throw Math.floor(h) !== h ? (J(h, c), new u.ERR_OUT_OF_RANGE("offset", "an integer", h)) : i < 0 ? new u.ERR_BUFFER_OUT_OF_BOUNDS() : new u.ERR_OUT_OF_RANGE(
        "offset",
        `>= 0 and <= ${i}`,
        h
      );
    }
    const de = /[^+/0-9A-Za-z-_]/g;
    function _e(h) {
      if (h = h.split("=")[0], h = h.trim().replace(de, ""), h.length < 2) return "";
      for (; h.length % 4 !== 0; )
        h = h + "=";
      return h;
    }
    function oe(h, i) {
      i = i || 1 / 0;
      let c;
      const p = h.length;
      let E = null;
      const f = [];
      for (let m = 0; m < p; ++m) {
        if (c = h.charCodeAt(m), c > 55295 && c < 57344) {
          if (!E) {
            if (c > 56319) {
              (i -= 3) > -1 && f.push(239, 191, 189);
              continue;
            } else if (m + 1 === p) {
              (i -= 3) > -1 && f.push(239, 191, 189);
              continue;
            }
            E = c;
            continue;
          }
          if (c < 56320) {
            (i -= 3) > -1 && f.push(239, 191, 189), E = c;
            continue;
          }
          c = (E - 55296 << 10 | c - 56320) + 65536;
        } else E && (i -= 3) > -1 && f.push(239, 191, 189);
        if (E = null, c < 128) {
          if ((i -= 1) < 0) break;
          f.push(c);
        } else if (c < 2048) {
          if ((i -= 2) < 0) break;
          f.push(
            c >> 6 | 192,
            c & 63 | 128
          );
        } else if (c < 65536) {
          if ((i -= 3) < 0) break;
          f.push(
            c >> 12 | 224,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else if (c < 1114112) {
          if ((i -= 4) < 0) break;
          f.push(
            c >> 18 | 240,
            c >> 12 & 63 | 128,
            c >> 6 & 63 | 128,
            c & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return f;
    }
    function Te(h) {
      const i = [];
      for (let c = 0; c < h.length; ++c)
        i.push(h.charCodeAt(c) & 255);
      return i;
    }
    function Ke(h, i) {
      let c, p, E;
      const f = [];
      for (let m = 0; m < h.length && !((i -= 2) < 0); ++m)
        c = h.charCodeAt(m), p = c >> 8, E = c % 256, f.push(E), f.push(p);
      return f;
    }
    function $e(h) {
      return e.toByteArray(_e(h));
    }
    function be(h, i, c, p) {
      let E;
      for (E = 0; E < p && !(E + c >= i.length || E >= h.length); ++E)
        i[E + c] = h[E];
      return E;
    }
    function me(h, i) {
      return h instanceof i || h != null && h.constructor != null && h.constructor.name != null && h.constructor.name === i.name;
    }
    function tt(h) {
      return h !== h;
    }
    const wt = (function() {
      const h = "0123456789abcdef", i = new Array(256);
      for (let c = 0; c < 16; ++c) {
        const p = c * 16;
        for (let E = 0; E < 16; ++E)
          i[p + E] = h[c] + h[E];
      }
      return i;
    })();
    function Fe(h) {
      return typeof BigInt > "u" ? It : h;
    }
    function It() {
      throw new Error("BigInt not supported");
    }
  })(Rt)), Rt;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var ss;
function Lr() {
  return ss || (ss = 1, (function(l, e) {
    var t = Ur(), s = t.Buffer;
    function r(a, o) {
      for (var d in a)
        o[d] = a[d];
    }
    s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? l.exports = t : (r(t, e), e.Buffer = n);
    function n(a, o, d) {
      return s(a, o, d);
    }
    n.prototype = Object.create(s.prototype), r(s, n), n.from = function(a, o, d) {
      if (typeof a == "number")
        throw new TypeError("Argument must not be a number");
      return s(a, o, d);
    }, n.alloc = function(a, o, d) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      var y = s(a);
      return o !== void 0 ? typeof d == "string" ? y.fill(o, d) : y.fill(o) : y.fill(0), y;
    }, n.allocUnsafe = function(a) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      return s(a);
    }, n.allocUnsafeSlow = function(a) {
      if (typeof a != "number")
        throw new TypeError("Argument must be a number");
      return t.SlowBuffer(a);
    };
  })(lt, lt.exports)), lt.exports;
}
var rs;
function jr() {
  if (rs) return xt;
  rs = 1;
  var l = Lr().Buffer, e = l.isEncoding || function(_) {
    switch (_ = "" + _, _ && _.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function t(_) {
    if (!_) return "utf8";
    for (var x; ; )
      switch (_) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return _;
        default:
          if (x) return;
          _ = ("" + _).toLowerCase(), x = !0;
      }
  }
  function s(_) {
    var x = t(_);
    if (typeof x != "string" && (l.isEncoding === e || !e(_))) throw new Error("Unknown encoding: " + _);
    return x || _;
  }
  xt.StringDecoder = r;
  function r(_) {
    this.encoding = s(_);
    var x;
    switch (this.encoding) {
      case "utf16le":
        this.text = C, this.end = A, x = 4;
        break;
      case "utf8":
        this.fillLast = d, x = 4;
        break;
      case "base64":
        this.text = b, this.end = R, x = 3;
        break;
      default:
        this.write = M, this.end = U;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = l.allocUnsafe(x);
  }
  r.prototype.write = function(_) {
    if (_.length === 0) return "";
    var x, D;
    if (this.lastNeed) {
      if (x = this.fillLast(_), x === void 0) return "";
      D = this.lastNeed, this.lastNeed = 0;
    } else
      D = 0;
    return D < _.length ? x ? x + this.text(_, D) : this.text(_, D) : x || "";
  }, r.prototype.end = S, r.prototype.text = y, r.prototype.fillLast = function(_) {
    if (this.lastNeed <= _.length)
      return _.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    _.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, _.length), this.lastNeed -= _.length;
  };
  function n(_) {
    return _ <= 127 ? 0 : _ >> 5 === 6 ? 2 : _ >> 4 === 14 ? 3 : _ >> 3 === 30 ? 4 : _ >> 6 === 2 ? -1 : -2;
  }
  function a(_, x, D) {
    var $ = x.length - 1;
    if ($ < D) return 0;
    var L = n(x[$]);
    return L >= 0 ? (L > 0 && (_.lastNeed = L - 1), L) : --$ < D || L === -2 ? 0 : (L = n(x[$]), L >= 0 ? (L > 0 && (_.lastNeed = L - 2), L) : --$ < D || L === -2 ? 0 : (L = n(x[$]), L >= 0 ? (L > 0 && (L === 2 ? L = 0 : _.lastNeed = L - 3), L) : 0));
  }
  function o(_, x, D) {
    if ((x[0] & 192) !== 128)
      return _.lastNeed = 0, "�";
    if (_.lastNeed > 1 && x.length > 1) {
      if ((x[1] & 192) !== 128)
        return _.lastNeed = 1, "�";
      if (_.lastNeed > 2 && x.length > 2 && (x[2] & 192) !== 128)
        return _.lastNeed = 2, "�";
    }
  }
  function d(_) {
    var x = this.lastTotal - this.lastNeed, D = o(this, _);
    if (D !== void 0) return D;
    if (this.lastNeed <= _.length)
      return _.copy(this.lastChar, x, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    _.copy(this.lastChar, x, 0, _.length), this.lastNeed -= _.length;
  }
  function y(_, x) {
    var D = a(this, _, x);
    if (!this.lastNeed) return _.toString("utf8", x);
    this.lastTotal = D;
    var $ = _.length - (D - this.lastNeed);
    return _.copy(this.lastChar, 0, $), _.toString("utf8", x, $);
  }
  function S(_) {
    var x = _ && _.length ? this.write(_) : "";
    return this.lastNeed ? x + "�" : x;
  }
  function C(_, x) {
    if ((_.length - x) % 2 === 0) {
      var D = _.toString("utf16le", x);
      if (D) {
        var $ = D.charCodeAt(D.length - 1);
        if ($ >= 55296 && $ <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = _[_.length - 2], this.lastChar[1] = _[_.length - 1], D.slice(0, -1);
      }
      return D;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = _[_.length - 1], _.toString("utf16le", x, _.length - 1);
  }
  function A(_) {
    var x = _ && _.length ? this.write(_) : "";
    if (this.lastNeed) {
      var D = this.lastTotal - this.lastNeed;
      return x + this.lastChar.toString("utf16le", 0, D);
    }
    return x;
  }
  function b(_, x) {
    var D = (_.length - x) % 3;
    return D === 0 ? _.toString("base64", x) : (this.lastNeed = 3 - D, this.lastTotal = 3, D === 1 ? this.lastChar[0] = _[_.length - 1] : (this.lastChar[0] = _[_.length - 2], this.lastChar[1] = _[_.length - 1]), _.toString("base64", x, _.length - D));
  }
  function R(_) {
    var x = _ && _.length ? this.write(_) : "";
    return this.lastNeed ? x + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : x;
  }
  function M(_) {
    return _.toString(this.encoding);
  }
  function U(_) {
    return _ && _.length ? this.write(_) : "";
  }
  return xt;
}
var ns;
function $r() {
  return ns || (ns = 1, (function(l) {
    (function(e) {
      e.parser = function(g, u) {
        return new s(g, u);
      }, e.SAXParser = s, e.SAXStream = S, e.createStream = y, e.MAX_BUFFER_LENGTH = 64 * 1024;
      var t = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script"
      ];
      e.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace"
      ];
      function s(g, u) {
        if (!(this instanceof s))
          return new s(g, u);
        var I = this;
        n(I), I.q = I.c = "", I.bufferCheckPosition = e.MAX_BUFFER_LENGTH, I.opt = u || {}, I.opt.lowercase = I.opt.lowercase || I.opt.lowercasetags, I.looseCase = I.opt.lowercase ? "toLowerCase" : "toUpperCase", I.tags = [], I.closed = I.closedRoot = I.sawRoot = !1, I.tag = I.error = null, I.strict = !!g, I.noscript = !!(g || I.opt.noscript), I.state = N.BEGIN, I.strictEntities = I.opt.strictEntities, I.ENTITIES = I.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), I.attribList = [], I.opt.xmlns && (I.ns = Object.create(M)), I.opt.unquotedAttributeValues === void 0 && (I.opt.unquotedAttributeValues = !g), I.trackPosition = I.opt.position !== !1, I.trackPosition && (I.position = I.line = I.column = 0), ke(I, "onready");
      }
      Object.create || (Object.create = function(g) {
        function u() {
        }
        u.prototype = g;
        var I = new u();
        return I;
      }), Object.keys || (Object.keys = function(g) {
        var u = [];
        for (var I in g) g.hasOwnProperty(I) && u.push(I);
        return u;
      });
      function r(g) {
        for (var u = Math.max(e.MAX_BUFFER_LENGTH, 10), I = 0, T = 0, q = t.length; T < q; T++) {
          var Z = g[t[T]].length;
          if (Z > u)
            switch (t[T]) {
              case "textNode":
                Be(g);
                break;
              case "cdata":
                ie(g, "oncdata", g.cdata), g.cdata = "";
                break;
              case "script":
                ie(g, "onscript", g.script), g.script = "";
                break;
              default:
                Ae(g, "Max buffer length exceeded: " + t[T]);
            }
          I = Math.max(I, Z);
        }
        var J = e.MAX_BUFFER_LENGTH - I;
        g.bufferCheckPosition = J + g.position;
      }
      function n(g) {
        for (var u = 0, I = t.length; u < I; u++)
          g[t[u]] = "";
      }
      function a(g) {
        Be(g), g.cdata !== "" && (ie(g, "oncdata", g.cdata), g.cdata = ""), g.script !== "" && (ie(g, "onscript", g.script), g.script = "");
      }
      s.prototype = {
        end: function() {
          Oe(this);
        },
        write: ae,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          a(this);
        }
      };
      var o;
      try {
        o = Mr.Stream;
      } catch {
        o = function() {
        };
      }
      o || (o = function() {
      });
      var d = e.EVENTS.filter(function(g) {
        return g !== "error" && g !== "end";
      });
      function y(g, u) {
        return new S(g, u);
      }
      function S(g, u) {
        if (!(this instanceof S))
          return new S(g, u);
        o.apply(this), this._parser = new s(g, u), this.writable = !0, this.readable = !0;
        var I = this;
        this._parser.onend = function() {
          I.emit("end");
        }, this._parser.onerror = function(T) {
          I.emit("error", T), I._parser.error = null;
        }, this._decoder = null, d.forEach(function(T) {
          Object.defineProperty(I, "on" + T, {
            get: function() {
              return I._parser["on" + T];
            },
            set: function(q) {
              if (!q)
                return I.removeAllListeners(T), I._parser["on" + T] = q, q;
              I.on(T, q);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      S.prototype = Object.create(o.prototype, {
        constructor: {
          value: S
        }
      }), S.prototype.write = function(g) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(g)) {
          if (!this._decoder) {
            var u = jr().StringDecoder;
            this._decoder = new u("utf8");
          }
          g = this._decoder.write(g);
        }
        return this._parser.write(g.toString()), this.emit("data", g), !0;
      }, S.prototype.end = function(g) {
        return g && g.length && this.write(g), this._parser.end(), !0;
      }, S.prototype.on = function(g, u) {
        var I = this;
        return !I._parser["on" + g] && d.indexOf(g) !== -1 && (I._parser["on" + g] = function() {
          var T = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          T.splice(0, 0, g), I.emit.apply(I, T);
        }), o.prototype.on.call(I, g, u);
      };
      var C = "[CDATA[", A = "DOCTYPE", b = "http://www.w3.org/XML/1998/namespace", R = "http://www.w3.org/2000/xmlns/", M = { xml: b, xmlns: R }, U = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, _ = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, x = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, D = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function $(g) {
        return g === " " || g === `
` || g === "\r" || g === "	";
      }
      function L(g) {
        return g === '"' || g === "'";
      }
      function Ee(g) {
        return g === ">" || $(g);
      }
      function fe(g, u) {
        return g.test(u);
      }
      function Pe(g, u) {
        return !fe(g, u);
      }
      var N = 0;
      e.STATE = {
        BEGIN: N++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: N++,
        // leading whitespace
        TEXT: N++,
        // general stuff
        TEXT_ENTITY: N++,
        // &amp and such.
        OPEN_WAKA: N++,
        // <
        SGML_DECL: N++,
        // <!BLARG
        SGML_DECL_QUOTED: N++,
        // <!BLARG foo "bar
        DOCTYPE: N++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: N++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: N++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: N++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: N++,
        // <!-
        COMMENT: N++,
        // <!--
        COMMENT_ENDING: N++,
        // <!-- blah -
        COMMENT_ENDED: N++,
        // <!-- blah --
        CDATA: N++,
        // <![CDATA[ something
        CDATA_ENDING: N++,
        // ]
        CDATA_ENDING_2: N++,
        // ]]
        PROC_INST: N++,
        // <?hi
        PROC_INST_BODY: N++,
        // <?hi there
        PROC_INST_ENDING: N++,
        // <?hi "there" ?
        OPEN_TAG: N++,
        // <strong
        OPEN_TAG_SLASH: N++,
        // <strong /
        ATTRIB: N++,
        // <a
        ATTRIB_NAME: N++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: N++,
        // <a foo _
        ATTRIB_VALUE: N++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: N++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: N++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: N++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: N++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: N++,
        // <foo bar=&quot
        CLOSE_TAG: N++,
        // </a
        CLOSE_TAG_SAW_WHITE: N++,
        // </a   >
        SCRIPT: N++,
        // <script> ...
        SCRIPT_ENDING: N++
        // <script> ... <
      }, e.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, e.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      }, Object.keys(e.ENTITIES).forEach(function(g) {
        var u = e.ENTITIES[g], I = typeof u == "number" ? String.fromCharCode(u) : u;
        e.ENTITIES[g] = I;
      });
      for (var Ye in e.STATE)
        e.STATE[e.STATE[Ye]] = Ye;
      N = e.STATE;
      function ke(g, u, I) {
        g[u] && g[u](I);
      }
      function ie(g, u, I) {
        g.textNode && Be(g), ke(g, u, I);
      }
      function Be(g) {
        g.textNode = Xe(g.opt, g.textNode), g.textNode && ke(g, "ontext", g.textNode), g.textNode = "";
      }
      function Xe(g, u) {
        return g.trim && (u = u.trim()), g.normalize && (u = u.replace(/\s+/g, " ")), u;
      }
      function Ae(g, u) {
        return Be(g), g.trackPosition && (u += `
Line: ` + g.line + `
Column: ` + g.column + `
Char: ` + g.c), u = new Error(u), g.error = u, ke(g, "onerror", u), g;
      }
      function Oe(g) {
        return g.sawRoot && !g.closedRoot && V(g, "Unclosed root tag"), g.state !== N.BEGIN && g.state !== N.BEGIN_WHITESPACE && g.state !== N.TEXT && Ae(g, "Unexpected end"), Be(g), g.c = "", g.closed = !0, ke(g, "onend"), s.call(g, g.strict, g.opt), g;
      }
      function V(g, u) {
        if (typeof g != "object" || !(g instanceof s))
          throw new Error("bad call to strictFail");
        g.strict && Ae(g, u);
      }
      function ze(g) {
        g.strict || (g.tagName = g.tagName[g.looseCase]());
        var u = g.tags[g.tags.length - 1] || g, I = g.tag = { name: g.tagName, attributes: {} };
        g.opt.xmlns && (I.ns = u.ns), g.attribList.length = 0, ie(g, "onopentagstart", I);
      }
      function Ue(g, u) {
        var I = g.indexOf(":"), T = I < 0 ? ["", g] : g.split(":"), q = T[0], Z = T[1];
        return u && g === "xmlns" && (q = "xmlns", Z = ""), { prefix: q, local: Z };
      }
      function Le(g) {
        if (g.strict || (g.attribName = g.attribName[g.looseCase]()), g.attribList.indexOf(g.attribName) !== -1 || g.tag.attributes.hasOwnProperty(g.attribName)) {
          g.attribName = g.attribValue = "";
          return;
        }
        if (g.opt.xmlns) {
          var u = Ue(g.attribName, !0), I = u.prefix, T = u.local;
          if (I === "xmlns")
            if (T === "xml" && g.attribValue !== b)
              V(
                g,
                "xml: prefix must be bound to " + b + `
Actual: ` + g.attribValue
              );
            else if (T === "xmlns" && g.attribValue !== R)
              V(
                g,
                "xmlns: prefix must be bound to " + R + `
Actual: ` + g.attribValue
              );
            else {
              var q = g.tag, Z = g.tags[g.tags.length - 1] || g;
              q.ns === Z.ns && (q.ns = Object.create(Z.ns)), q.ns[T] = g.attribValue;
            }
          g.attribList.push([g.attribName, g.attribValue]);
        } else
          g.tag.attributes[g.attribName] = g.attribValue, ie(g, "onattribute", {
            name: g.attribName,
            value: g.attribValue
          });
        g.attribName = g.attribValue = "";
      }
      function Q(g, u) {
        if (g.opt.xmlns) {
          var I = g.tag, T = Ue(g.tagName);
          I.prefix = T.prefix, I.local = T.local, I.uri = I.ns[T.prefix] || "", I.prefix && !I.uri && (V(
            g,
            "Unbound namespace prefix: " + JSON.stringify(g.tagName)
          ), I.uri = T.prefix);
          var q = g.tags[g.tags.length - 1] || g;
          I.ns && q.ns !== I.ns && Object.keys(I.ns).forEach(function(me) {
            ie(g, "onopennamespace", {
              prefix: me,
              uri: I.ns[me]
            });
          });
          for (var Z = 0, J = g.attribList.length; Z < J; Z++) {
            var ue = g.attribList[Z], de = ue[0], _e = ue[1], oe = Ue(de, !0), Te = oe.prefix, Ke = oe.local, $e = Te === "" ? "" : I.ns[Te] || "", be = {
              name: de,
              value: _e,
              prefix: Te,
              local: Ke,
              uri: $e
            };
            Te && Te !== "xmlns" && !$e && (V(
              g,
              "Unbound namespace prefix: " + JSON.stringify(Te)
            ), be.uri = Te), g.tag.attributes[de] = be, ie(g, "onattribute", be);
          }
          g.attribList.length = 0;
        }
        g.tag.isSelfClosing = !!u, g.sawRoot = !0, g.tags.push(g.tag), ie(g, "onopentag", g.tag), u || (!g.noscript && g.tagName.toLowerCase() === "script" ? g.state = N.SCRIPT : g.state = N.TEXT, g.tag = null, g.tagName = ""), g.attribName = g.attribValue = "", g.attribList.length = 0;
      }
      function ge(g) {
        if (!g.tagName) {
          V(g, "Weird empty close tag."), g.textNode += "</>", g.state = N.TEXT;
          return;
        }
        if (g.script) {
          if (g.tagName !== "script") {
            g.script += "</" + g.tagName + ">", g.tagName = "", g.state = N.SCRIPT;
            return;
          }
          ie(g, "onscript", g.script), g.script = "";
        }
        var u = g.tags.length, I = g.tagName;
        g.strict || (I = I[g.looseCase]());
        for (var T = I; u--; ) {
          var q = g.tags[u];
          if (q.name !== T)
            V(g, "Unexpected close tag");
          else
            break;
        }
        if (u < 0) {
          V(g, "Unmatched closing tag: " + g.tagName), g.textNode += "</" + g.tagName + ">", g.state = N.TEXT;
          return;
        }
        g.tagName = I;
        for (var Z = g.tags.length; Z-- > u; ) {
          var J = g.tag = g.tags.pop();
          g.tagName = g.tag.name, ie(g, "onclosetag", g.tagName);
          var ue = {};
          for (var de in J.ns)
            ue[de] = J.ns[de];
          var _e = g.tags[g.tags.length - 1] || g;
          g.opt.xmlns && J.ns !== _e.ns && Object.keys(J.ns).forEach(function(oe) {
            var Te = J.ns[oe];
            ie(g, "onclosenamespace", { prefix: oe, uri: Te });
          });
        }
        u === 0 && (g.closedRoot = !0), g.tagName = g.attribValue = g.attribName = "", g.attribList.length = 0, g.state = N.TEXT;
      }
      function G(g) {
        var u = g.entity, I = u.toLowerCase(), T, q = "";
        return g.ENTITIES[u] ? g.ENTITIES[u] : g.ENTITIES[I] ? g.ENTITIES[I] : (u = I, u.charAt(0) === "#" && (u.charAt(1) === "x" ? (u = u.slice(2), T = parseInt(u, 16), q = T.toString(16)) : (u = u.slice(1), T = parseInt(u, 10), q = T.toString(10))), u = u.replace(/^0+/, ""), isNaN(T) || q.toLowerCase() !== u || T < 0 || T > 1114111 ? (V(g, "Invalid character entity"), "&" + g.entity + ";") : String.fromCodePoint(T));
      }
      function Ne(g, u) {
        u === "<" ? (g.state = N.OPEN_WAKA, g.startTagPosition = g.position) : $(u) || (V(g, "Non-whitespace before first tag."), g.textNode = u, g.state = N.TEXT);
      }
      function je(g, u) {
        var I = "";
        return u < g.length && (I = g.charAt(u)), I;
      }
      function ae(g) {
        var u = this;
        if (this.error)
          throw this.error;
        if (u.closed)
          return Ae(
            u,
            "Cannot write after close. Assign an onready handler."
          );
        if (g === null)
          return Oe(u);
        typeof g == "object" && (g = g.toString());
        for (var I = 0, T = ""; T = je(g, I++), u.c = T, !!T; )
          switch (u.trackPosition && (u.position++, T === `
` ? (u.line++, u.column = 0) : u.column++), u.state) {
            case N.BEGIN:
              if (u.state = N.BEGIN_WHITESPACE, T === "\uFEFF")
                continue;
              Ne(u, T);
              continue;
            case N.BEGIN_WHITESPACE:
              Ne(u, T);
              continue;
            case N.TEXT:
              if (u.sawRoot && !u.closedRoot) {
                for (var Z = I - 1; T && T !== "<" && T !== "&"; )
                  T = je(g, I++), T && u.trackPosition && (u.position++, T === `
` ? (u.line++, u.column = 0) : u.column++);
                u.textNode += g.substring(Z, I - 1);
              }
              T === "<" && !(u.sawRoot && u.closedRoot && !u.strict) ? (u.state = N.OPEN_WAKA, u.startTagPosition = u.position) : (!$(T) && (!u.sawRoot || u.closedRoot) && V(u, "Text data outside of root node."), T === "&" ? u.state = N.TEXT_ENTITY : u.textNode += T);
              continue;
            case N.SCRIPT:
              T === "<" ? u.state = N.SCRIPT_ENDING : u.script += T;
              continue;
            case N.SCRIPT_ENDING:
              T === "/" ? u.state = N.CLOSE_TAG : (u.script += "<" + T, u.state = N.SCRIPT);
              continue;
            case N.OPEN_WAKA:
              if (T === "!")
                u.state = N.SGML_DECL, u.sgmlDecl = "";
              else if (!$(T)) if (fe(U, T))
                u.state = N.OPEN_TAG, u.tagName = T;
              else if (T === "/")
                u.state = N.CLOSE_TAG, u.tagName = "";
              else if (T === "?")
                u.state = N.PROC_INST, u.procInstName = u.procInstBody = "";
              else {
                if (V(u, "Unencoded <"), u.startTagPosition + 1 < u.position) {
                  var q = u.position - u.startTagPosition;
                  T = new Array(q).join(" ") + T;
                }
                u.textNode += "<" + T, u.state = N.TEXT;
              }
              continue;
            case N.SGML_DECL:
              if (u.sgmlDecl + T === "--") {
                u.state = N.COMMENT, u.comment = "", u.sgmlDecl = "";
                continue;
              }
              u.doctype && u.doctype !== !0 && u.sgmlDecl ? (u.state = N.DOCTYPE_DTD, u.doctype += "<!" + u.sgmlDecl + T, u.sgmlDecl = "") : (u.sgmlDecl + T).toUpperCase() === C ? (ie(u, "onopencdata"), u.state = N.CDATA, u.sgmlDecl = "", u.cdata = "") : (u.sgmlDecl + T).toUpperCase() === A ? (u.state = N.DOCTYPE, (u.doctype || u.sawRoot) && V(
                u,
                "Inappropriately located doctype declaration"
              ), u.doctype = "", u.sgmlDecl = "") : T === ">" ? (ie(u, "onsgmldeclaration", u.sgmlDecl), u.sgmlDecl = "", u.state = N.TEXT) : (L(T) && (u.state = N.SGML_DECL_QUOTED), u.sgmlDecl += T);
              continue;
            case N.SGML_DECL_QUOTED:
              T === u.q && (u.state = N.SGML_DECL, u.q = ""), u.sgmlDecl += T;
              continue;
            case N.DOCTYPE:
              T === ">" ? (u.state = N.TEXT, ie(u, "ondoctype", u.doctype), u.doctype = !0) : (u.doctype += T, T === "[" ? u.state = N.DOCTYPE_DTD : L(T) && (u.state = N.DOCTYPE_QUOTED, u.q = T));
              continue;
            case N.DOCTYPE_QUOTED:
              u.doctype += T, T === u.q && (u.q = "", u.state = N.DOCTYPE);
              continue;
            case N.DOCTYPE_DTD:
              T === "]" ? (u.doctype += T, u.state = N.DOCTYPE) : T === "<" ? (u.state = N.OPEN_WAKA, u.startTagPosition = u.position) : L(T) ? (u.doctype += T, u.state = N.DOCTYPE_DTD_QUOTED, u.q = T) : u.doctype += T;
              continue;
            case N.DOCTYPE_DTD_QUOTED:
              u.doctype += T, T === u.q && (u.state = N.DOCTYPE_DTD, u.q = "");
              continue;
            case N.COMMENT:
              T === "-" ? u.state = N.COMMENT_ENDING : u.comment += T;
              continue;
            case N.COMMENT_ENDING:
              T === "-" ? (u.state = N.COMMENT_ENDED, u.comment = Xe(u.opt, u.comment), u.comment && ie(u, "oncomment", u.comment), u.comment = "") : (u.comment += "-" + T, u.state = N.COMMENT);
              continue;
            case N.COMMENT_ENDED:
              T !== ">" ? (V(u, "Malformed comment"), u.comment += "--" + T, u.state = N.COMMENT) : u.doctype && u.doctype !== !0 ? u.state = N.DOCTYPE_DTD : u.state = N.TEXT;
              continue;
            case N.CDATA:
              for (var Z = I - 1; T && T !== "]"; )
                T = je(g, I++), T && u.trackPosition && (u.position++, T === `
` ? (u.line++, u.column = 0) : u.column++);
              u.cdata += g.substring(Z, I - 1), T === "]" && (u.state = N.CDATA_ENDING);
              continue;
            case N.CDATA_ENDING:
              T === "]" ? u.state = N.CDATA_ENDING_2 : (u.cdata += "]" + T, u.state = N.CDATA);
              continue;
            case N.CDATA_ENDING_2:
              T === ">" ? (u.cdata && ie(u, "oncdata", u.cdata), ie(u, "onclosecdata"), u.cdata = "", u.state = N.TEXT) : T === "]" ? u.cdata += "]" : (u.cdata += "]]" + T, u.state = N.CDATA);
              continue;
            case N.PROC_INST:
              T === "?" ? u.state = N.PROC_INST_ENDING : $(T) ? u.state = N.PROC_INST_BODY : u.procInstName += T;
              continue;
            case N.PROC_INST_BODY:
              if (!u.procInstBody && $(T))
                continue;
              T === "?" ? u.state = N.PROC_INST_ENDING : u.procInstBody += T;
              continue;
            case N.PROC_INST_ENDING:
              T === ">" ? (ie(u, "onprocessinginstruction", {
                name: u.procInstName,
                body: u.procInstBody
              }), u.procInstName = u.procInstBody = "", u.state = N.TEXT) : (u.procInstBody += "?" + T, u.state = N.PROC_INST_BODY);
              continue;
            case N.OPEN_TAG:
              fe(_, T) ? u.tagName += T : (ze(u), T === ">" ? Q(u) : T === "/" ? u.state = N.OPEN_TAG_SLASH : ($(T) || V(u, "Invalid character in tag name"), u.state = N.ATTRIB));
              continue;
            case N.OPEN_TAG_SLASH:
              T === ">" ? (Q(u, !0), ge(u)) : (V(
                u,
                "Forward-slash in opening tag not followed by >"
              ), u.state = N.ATTRIB);
              continue;
            case N.ATTRIB:
              if ($(T))
                continue;
              T === ">" ? Q(u) : T === "/" ? u.state = N.OPEN_TAG_SLASH : fe(U, T) ? (u.attribName = T, u.attribValue = "", u.state = N.ATTRIB_NAME) : V(u, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME:
              T === "=" ? u.state = N.ATTRIB_VALUE : T === ">" ? (V(u, "Attribute without value"), u.attribValue = u.attribName, Le(u), Q(u)) : $(T) ? u.state = N.ATTRIB_NAME_SAW_WHITE : fe(_, T) ? u.attribName += T : V(u, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME_SAW_WHITE:
              if (T === "=")
                u.state = N.ATTRIB_VALUE;
              else {
                if ($(T))
                  continue;
                V(u, "Attribute without value"), u.tag.attributes[u.attribName] = "", u.attribValue = "", ie(u, "onattribute", {
                  name: u.attribName,
                  value: ""
                }), u.attribName = "", T === ">" ? Q(u) : fe(U, T) ? (u.attribName = T, u.state = N.ATTRIB_NAME) : (V(u, "Invalid attribute name"), u.state = N.ATTRIB);
              }
              continue;
            case N.ATTRIB_VALUE:
              if ($(T))
                continue;
              L(T) ? (u.q = T, u.state = N.ATTRIB_VALUE_QUOTED) : (u.opt.unquotedAttributeValues || Ae(u, "Unquoted attribute value"), u.state = N.ATTRIB_VALUE_UNQUOTED, u.attribValue = T);
              continue;
            case N.ATTRIB_VALUE_QUOTED:
              if (T !== u.q) {
                T === "&" ? u.state = N.ATTRIB_VALUE_ENTITY_Q : u.attribValue += T;
                continue;
              }
              Le(u), u.q = "", u.state = N.ATTRIB_VALUE_CLOSED;
              continue;
            case N.ATTRIB_VALUE_CLOSED:
              $(T) ? u.state = N.ATTRIB : T === ">" ? Q(u) : T === "/" ? u.state = N.OPEN_TAG_SLASH : fe(U, T) ? (V(u, "No whitespace between attributes"), u.attribName = T, u.attribValue = "", u.state = N.ATTRIB_NAME) : V(u, "Invalid attribute name");
              continue;
            case N.ATTRIB_VALUE_UNQUOTED:
              if (!Ee(T)) {
                T === "&" ? u.state = N.ATTRIB_VALUE_ENTITY_U : u.attribValue += T;
                continue;
              }
              Le(u), T === ">" ? Q(u) : u.state = N.ATTRIB;
              continue;
            case N.CLOSE_TAG:
              if (u.tagName)
                T === ">" ? ge(u) : fe(_, T) ? u.tagName += T : u.script ? (u.script += "</" + u.tagName, u.tagName = "", u.state = N.SCRIPT) : ($(T) || V(u, "Invalid tagname in closing tag"), u.state = N.CLOSE_TAG_SAW_WHITE);
              else {
                if ($(T))
                  continue;
                Pe(U, T) ? u.script ? (u.script += "</" + T, u.state = N.SCRIPT) : V(u, "Invalid tagname in closing tag.") : u.tagName = T;
              }
              continue;
            case N.CLOSE_TAG_SAW_WHITE:
              if ($(T))
                continue;
              T === ">" ? ge(u) : V(u, "Invalid characters in closing tag");
              continue;
            case N.TEXT_ENTITY:
            case N.ATTRIB_VALUE_ENTITY_Q:
            case N.ATTRIB_VALUE_ENTITY_U:
              var J, ue;
              switch (u.state) {
                case N.TEXT_ENTITY:
                  J = N.TEXT, ue = "textNode";
                  break;
                case N.ATTRIB_VALUE_ENTITY_Q:
                  J = N.ATTRIB_VALUE_QUOTED, ue = "attribValue";
                  break;
                case N.ATTRIB_VALUE_ENTITY_U:
                  J = N.ATTRIB_VALUE_UNQUOTED, ue = "attribValue";
                  break;
              }
              if (T === ";") {
                var de = G(u);
                u.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(de) ? (u.entity = "", u.state = J, u.write(de)) : (u[ue] += de, u.entity = "", u.state = J);
              } else fe(u.entity.length ? D : x, T) ? u.entity += T : (V(u, "Invalid character in entity name"), u[ue] += "&" + u.entity + T, u.entity = "", u.state = J);
              continue;
            default:
              throw new Error(u, "Unknown state: " + u.state);
          }
        return u.position >= u.bufferCheckPosition && r(u), u;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var g = String.fromCharCode, u = Math.floor, I = function() {
          var T = 16384, q = [], Z, J, ue = -1, de = arguments.length;
          if (!de)
            return "";
          for (var _e = ""; ++ue < de; ) {
            var oe = Number(arguments[ue]);
            if (!isFinite(oe) || // `NaN`, `+Infinity`, or `-Infinity`
            oe < 0 || // not a valid Unicode code point
            oe > 1114111 || // not a valid Unicode code point
            u(oe) !== oe)
              throw RangeError("Invalid code point: " + oe);
            oe <= 65535 ? q.push(oe) : (oe -= 65536, Z = (oe >> 10) + 55296, J = oe % 1024 + 56320, q.push(Z, J)), (ue + 1 === de || q.length > T) && (_e += g.apply(null, q), q.length = 0);
          }
          return _e;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: I,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = I;
      })();
    })(l);
  })(vt)), vt;
}
var Gr = $r();
const Wr = /* @__PURE__ */ ir(Gr), is = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", Xr = 0, qr = 1, qt = 2, Yr = 3, zr = 4, Kr = 0, Hr = 1, at = 2, as = 3, Vr = 4, Jr = 5, Qr = 6;
class os {
  constructor() {
    this.contentKindCache = /* @__PURE__ */ new Map(), this.featureKindCache = /* @__PURE__ */ new Map(), this.nameCache = /* @__PURE__ */ new Map(), this.namespaceCache = /* @__PURE__ */ new Map(), this.simpleContentFeatureCache = /* @__PURE__ */ new Map();
  }
  /**
   * Get the content kind for a class (class-level annotation).
   */
  getContentKind(e) {
    let t = this.contentKindCache.get(e);
    if (t !== void 0)
      return t;
    t = Xr;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = qt;
          break;
        case "mixed":
          t = Yr;
          break;
        case "empty":
          t = qr;
          break;
        case "elementOnly":
          t = zr;
          break;
      }
    return this.contentKindCache.set(e, t), t;
  }
  /**
   * Get the feature kind (element, attribute, simple, etc.)
   */
  getFeatureKind(e) {
    let t = this.featureKindCache.get(e);
    if (t !== void 0)
      return t;
    t = Kr;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Hr;
          break;
        case "element":
          t = at;
          break;
        case "attribute":
          t = as;
          break;
        case "elementWildcard":
          t = Vr;
          break;
        case "attributeWildcard":
          t = Jr;
          break;
        case "group":
          t = Qr;
          break;
      }
    return this.featureKindCache.set(e, t), t;
  }
  /**
   * Get the XML name for a feature from its EMD annotation.
   * Returns null if no annotation is present.
   */
  getName(e) {
    if (this.nameCache.has(e))
      return this.nameCache.get(e);
    const t = this.getAnnotationDetail(e, "name") ?? null;
    return this.nameCache.set(e, t), t;
  }
  /**
   * Get the namespace URI for a feature from its EMD annotation.
   * Resolves special values:
   * - `##targetNamespace` → owning EPackage's nsURI
   * - `##local` → null (no namespace)
   */
  getNamespace(e) {
    if (this.namespaceCache.has(e))
      return this.namespaceCache.get(e);
    let s = this.getAnnotationDetail(e, "namespace") ?? null;
    if (s === "##targetNamespace") {
      if (s = e.getEContainingClass?.()?.getEPackage?.()?.getNsURI?.() ?? null, s === null)
        return null;
    } else s === "##local" && (s = null);
    return this.namespaceCache.set(e, s), s;
  }
  /**
   * Find the feature that represents simple text content (name=":0", kind="simple").
   */
  getSimpleContentFeature(e) {
    if (this.simpleContentFeatureCache.has(e))
      return this.simpleContentFeatureCache.get(e);
    let t = null;
    for (const s of e.getEAllStructuralFeatures())
      if (this.getName(s) === ":0") {
        t = s;
        break;
      }
    return this.simpleContentFeatureCache.set(e, t), t;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "element".
   */
  getElementFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== at)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && a === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== as)
        continue;
      const a = this.getName(r) ?? r.getName();
      if (a !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && a === s)
        return r;
    }
    return null;
  }
  /**
   * Find any feature by EMD namespace and name (element or attribute).
   */
  getFeature(e, t, s, r) {
    return r ? this.getElementFeature(e, t, s) : this.getAttributeFeature(e, t, s);
  }
  /**
   * Read a detail value from the ExtendedMetaData annotation on a model element.
   */
  getAnnotationDetail(e, t) {
    if (!e || typeof e.getEAnnotation != "function")
      return;
    const s = e.getEAnnotation(is);
    if (!s)
      return;
    const r = s.getDetails();
    if (!(!r || typeof r.getByKey != "function"))
      return r.getByKey(t);
  }
  /**
   * Read the ExtendedMetaData annotation details as a Map.
   */
  getAnnotation(e) {
    if (!e || typeof e.getEAnnotation != "function")
      return null;
    const t = e.getEAnnotation(is);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Zr = "FEATURE_NAME_MAP", en = "EXTENDED_META_DATA", Dt = 1, Ot = 2, cs = 3, tn = 4, us = 5;
class sn {
  constructor() {
    this.contexts = [], this.currentContext = /* @__PURE__ */ new Map();
  }
  pushContext() {
    this.contexts.push(new Map(this.currentContext));
  }
  popContext() {
    const e = this.contexts.pop(), t = /* @__PURE__ */ new Map();
    if (e) {
      for (const [s, r] of this.currentContext)
        (!e.has(s) || e.get(s) !== r) && t.set(s, r);
      this.currentContext = e;
    }
    return t;
  }
  declarePrefix(e, t) {
    this.currentContext.set(e, t);
  }
  getURI(e) {
    return this.currentContext.get(e) ?? null;
  }
  getPrefix(e) {
    for (const [t, s] of this.currentContext)
      if (s === e)
        return t;
    return null;
  }
}
class _t {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = we.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new sn(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = we.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Zr);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, n] of t)
        this.reverseFeatureNameMap.set(n, r);
    }
    const s = e.get(en);
    s instanceof os ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new os());
  }
  getExtendedMetaData() {
    return this.extendedMetaData;
  }
  setNoNamespacePackage(e) {
    this.noNamespacePackage = e;
  }
  getNoNamespacePackage() {
    return this.noNamespacePackage;
  }
  getResource() {
    return this.resource;
  }
  getName(e) {
    return e.getName() || "";
  }
  getQName(e) {
    const t = e.getEPackage();
    if (t) {
      const s = this.getPrefixForPackage(t);
      if (s && s.length > 0)
        return s + ":" + e.getName();
    }
    return e.getName() || "";
  }
  getPrefix(e) {
    if (e === null)
      return null;
    const t = this.urisToPrefixes.get(e);
    return t && t.length > 0 ? t[0] : null;
  }
  getPrefixForPackage(e) {
    let t = this.packages.get(e);
    if (t === void 0) {
      const s = e.getNsURI();
      if (s) {
        const r = this.getPrefix(s);
        t = r !== null ? r : e.getNsPrefix() || "";
      } else
        t = e.getNsPrefix() || "";
      this.packages.set(e, t || "");
    }
    return t || null;
  }
  getNamespaceURI(e) {
    return this.prefixesToURIs.get(e) ?? null;
  }
  getURI(e) {
    return this.namespaceSupport.getURI(e);
  }
  addPrefix(e, t) {
    this.namespaceSupport.declarePrefix(e, t), this.prefixesToURIs.set(e, t);
    let s = this.urisToPrefixes.get(t);
    s || (s = [], this.urisToPrefixes.set(t, s)), s.includes(e) || s.push(e), this.allPrefixToURI.push(e, t);
  }
  pushContext() {
    this.namespaceSupport.pushContext();
  }
  popContext() {
    this.namespaceSupport.popContext();
  }
  popContextWithFactories(e) {
    const t = this.namespaceSupport.popContext();
    for (const [s] of t)
      e.delete(s);
  }
  recordPrefixToURIMapping() {
  }
  getPrefixToNamespaceMap() {
    return new Map(this.prefixesToURIs);
  }
  createObject(e, t) {
    return t && "getESuperTypes" in t ? e.create(t) : null;
  }
  getType(e, t) {
    const s = e.getEPackage();
    return s ? s.getEClassifier(t) : null;
  }
  getFeature(e, t, s) {
    if (this.extendedMetaData) {
      const n = this.extendedMetaData.getAttributeFeature(e, t, s);
      if (n)
        return this.computeFeatureKind(n), n;
    }
    let r = e.getEStructuralFeature(s);
    if (!r && this.reverseFeatureNameMap.size > 0) {
      const n = this.reverseFeatureNameMap.get(s);
      n && (r = e.getEStructuralFeature(n));
    }
    return r && this.computeFeatureKind(r), r;
  }
  getFeatureWithElement(e, t, s, r) {
    if (this.extendedMetaData) {
      const n = this.extendedMetaData.getFeature(e, t, s, r);
      if (n)
        return this.computeFeatureKind(n), n;
    }
    return this.getFeature(e, t, s);
  }
  getSerializedFeatureName(e) {
    if (this.extendedMetaData) {
      const s = this.extendedMetaData.getName(e);
      if (s && !s.startsWith(":"))
        return s;
    }
    const t = e.getName() || "";
    if (this.featureNameMap.size > 0) {
      const s = this.featureNameMap.get(t);
      if (s !== void 0)
        return s;
    }
    return t;
  }
  getFeatureKind(e) {
    let t = this.featuresToKinds.get(e);
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? us;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Ot) : this.featuresToKinds.set(e, Dt);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const n = e.getEOpposite();
        !n || typeof n.isTransient != "function" || n.isTransient() || !n.isMany() ? this.featuresToKinds.set(e, cs) : this.featuresToKinds.set(e, tn);
      } else
        this.featuresToKinds.set(e, cs);
    else
      this.featuresToKinds.set(e, us);
  }
  setValue(e, t, s, r) {
    if (t.isMany()) {
      let n = e.eGet(t);
      n || (n = [], e.eSet(t, n)), r === -1 ? n.push(s) : r === -2 ? n.unshift(s) : n.splice(r, 0, s);
    } else
      e.eSet(t, s);
    if (s && typeof s == "object") {
      const n = t.getName();
      n === "eClassifiers" && "setEPackage" in s && s.setEPackage(e), n === "eStructuralFeatures" && "setEContainingClass" in s && s.setEContainingClass(e), n === "eOperations" && "setEContainingClass" in s && s.setEContainingClass(e);
    }
  }
  setManyReference(e, t) {
    const s = [], r = e.getObject(), n = e.getFeature(), a = e.getValues(), o = e.getPositions();
    for (let d = 0; d < a.length; d++) {
      const y = a[d], S = o[d];
      try {
        this.setValue(r, n, y, S);
      } catch (C) {
        s.push(C instanceof Error ? C : new Error(String(C)));
      }
    }
    return s;
  }
  deresolve(e) {
    return this.resourceURI && !e.isRelative() ? e.deresolve(this.resourceURI) : e;
  }
  resolve(e, t) {
    return e.resolve(t);
  }
  getID(e) {
    return this.xmlResource ? this.xmlResource.getID(e) : null;
  }
  convertToString(e, t, s) {
    return e.convertToString(t, s);
  }
}
class Ms {
  constructor(e, t) {
    this._proxyURI = null, this._eClass = null, this._resource = null, this._proxyURI = e, this._eClass = t || null;
  }
  // --- Proxy-specific methods ---
  eProxyURI() {
    return this._proxyURI;
  }
  eSetProxyURI(e) {
    this._proxyURI = e;
  }
  eIsProxy() {
    return this._proxyURI !== null;
  }
  eResolveProxy(e) {
    const t = this._resource || this.eResource();
    if (t) {
      const s = t.getResourceSet();
      if (s && e.eProxyURI()) {
        const n = e.eProxyURI().toString(), a = n.indexOf("#");
        if (a > 0) {
          const o = Y.createURI(n.substring(0, a)), d = n.substring(a + 1), y = s.getResource(o, !0);
          if (y) {
            const S = y.getEObject(d);
            if (S)
              return S;
          }
        } else if (a === 0) {
          const o = n.substring(1), d = t.getEObject(o);
          if (d)
            return d;
        }
      }
    }
    return e;
  }
  // --- InternalEObject methods ---
  eInternalResource() {
    return this._resource;
  }
  eSetResource(e) {
    this._resource = e;
  }
  eInternalContainer() {
    return null;
  }
  eBasicSetContainer(e, t) {
  }
  // --- EObject interface (minimal implementation) ---
  eClass() {
    if (this._eClass)
      return this._eClass;
    throw new Error("Proxy has no EClass - must be resolved first");
  }
  eResource() {
    return this._resource;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eCrossReferences() {
    return [];
  }
  eGet(e) {
    throw new Error(`Cannot get feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eSet(e, t) {
    throw new Error(`Cannot set feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eIsSet(e) {
    return !1;
  }
  eUnset(e) {
    throw new Error(`Cannot unset feature '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  eInvoke(e, t) {
    throw new Error(`Cannot invoke operation '${e.getName()}' on unresolved proxy: ${this._proxyURI?.toString()}`);
  }
  toString() {
    return `EProxy(${this._proxyURI?.toString() || "null"})`;
  }
}
function Ze(l, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return l.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let n = l;
  for (let a = 0; a < s.length - 1; a++) {
    const o = s[a], d = n.getESubpackages();
    n = null;
    for (let y = 0; y < d.length; y++) {
      const S = d.get(y);
      if (S.getName() === o) {
        n = S;
        break;
      }
    }
    if (!n)
      return null;
  }
  return n.getEClassifier(r);
}
const rt = "error", He = "object", ls = "reference", Pt = "xmiWrapper", hs = "deferredType";
class rn {
  constructor() {
    this.attrs = [];
  }
  add(e, t, s, r) {
    this.attrs.push({ qName: e, localName: t, uri: s, value: r });
  }
  clear() {
    this.attrs = [];
  }
  getLength() {
    return this.attrs.length;
  }
  getQName(e) {
    return this.attrs[e]?.qName || "";
  }
  getValue(e) {
    return this.attrs[e]?.value || "";
  }
  getLocalName(e) {
    return this.attrs[e]?.localName || "";
  }
  getURI(e) {
    return this.attrs[e]?.uri || "";
  }
  getValueByQName(e) {
    return this.attrs.find((s) => s.qName === e)?.value ?? null;
  }
  getValueByName(e, t) {
    return this.attrs.find((r) => r.uri === e && r.localName === t)?.value ?? null;
  }
}
const Je = "http://www.w3.org/2001/XMLSchema-instance", Ut = "http://www.omg.org/XMI", fs = "xmlns", nn = "type", an = "nil", on = "schemaLocation", gs = "href", cn = "id";
class Ds {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || we.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
  }
  processOptions(e) {
    this.helper.setOptions(e);
  }
  /**
   * Set attributes for current element
   */
  setAttributes(e) {
    this.attribs = e;
  }
  /**
   * Handle start of element
   */
  startElement(e, t, s, r) {
    this.setAttributes(r), this.startElementInternal(e, t, s);
  }
  startElementInternal(e, t, s) {
    this.needsPushContext && this.helper.pushContext(), this.needsPushContext = !0, this.elements.push(s);
    let r = "";
    if (this.useNewMethods)
      this.isRoot && this.handleSchemaLocation(), r = this.helper.getPrefix(e.length === 0 ? null : e) || "";
    else {
      this.handleNamespaceAttribs();
      const n = s.indexOf(":");
      n !== -1 && (r = s.substring(0, n), t = s.substring(n + 1));
    }
    this.processElement(s, r, t);
  }
  processElement(e, t, s) {
    if (this.isRoot && (this.isRoot = !1, this.recordHeaderInformation()), t === "xmi" && s === "XMI") {
      this.objects.push(null), this.types.push(Pt);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === Pt ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === He) {
      const n = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && n) {
        const a = this.text.trim();
        if (a.length > 0) {
          const o = this.helper.getExtendedMetaData();
          if (o) {
            const d = n.eClass();
            if (o.getContentKind(d) === qt) {
              const y = o.getSimpleContentFeature(d);
              y && this.setFeatureValue(n, y, a);
            }
          }
          this.handleProxy(n, a);
        }
      }
      this.text = null;
    } else if (r === rt)
      this.objects.pop(), this.text = null;
    else if (r === ls)
      this.objects.pop(), this.text = null;
    else if (r === hs)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === Pt)
      this.objects.pop();
    else if (r !== void 0) {
      const n = this.objects.pop() || this.objects[this.objects.length - 1];
      n && r && this.setFeatureValue(n, r, this.text), this.text = null;
    }
    this.helper.popContextWithFactories(this.prefixesToFactories);
  }
  /**
   * Handle character data
   */
  characters(e) {
    this.text === null ? this.text = e : this.text += e;
  }
  /**
   * Handle start of prefix mapping
   */
  startPrefixMapping(e, t) {
    this.isNamespaceAware = !0, this.needsPushContext && (this.helper.pushContext(), this.needsPushContext = !1), this.helper.addPrefix(e, t), this.prefixesToFactories.delete(e);
  }
  /**
   * Handle end of document
   */
  endDocument() {
    this.deferredExtent !== null && this.extent.push(...this.deferredExtent), this.helper.recordPrefixToURIMapping(), this.helper.popContext(), this.handleForwardReferences();
  }
  /**
   * Handle namespace attributes
   */
  handleNamespaceAttribs() {
    if (this.attribs)
      for (let e = 0; e < this.attribs.getLength(); e++) {
        const t = this.attribs.getQName(e);
        if (t.startsWith(fs)) {
          const s = t.length > 5 ? t.substring(6) : "", r = this.attribs.getValue(e);
          this.startPrefixMapping(s, r);
        }
      }
  }
  /**
   * Handle schema location
   */
  handleSchemaLocation() {
    if (!this.attribs)
      return;
    const e = this.attribs.getValueByName(Je, on);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], n = t[s + 1];
      this.urisToLocations.set(r, Y.createURI(n));
    }
  }
  /**
   * Record header information
   */
  recordHeaderInformation() {
  }
  /**
   * Create top-level object
   */
  createTopObject(e, t) {
    const s = this.getFactoryForPrefix(e);
    if (!s) {
      this.error(`Package not found for prefix '${e}'`), this.processObject(null);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType(e, r, !0);
    else {
      const a = this.helper.getType(s, t);
      a && (n = this.helper.createObject(s, a));
    }
    n ? (this.processTopObject(n), this.handleObjectAttribs(n)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(Je, nn) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, n = t;
    const a = t.indexOf(":");
    a !== -1 && (r = t.substring(0, a), n = t.substring(a + 1));
    const o = this.getFactoryForPrefix(r);
    if (!o)
      return this.error(`Factory not found for type '${t}'`), null;
    const d = this.helper.getType(o, n);
    return d ? this.helper.createObject(o, d) : (this.error(`Type '${n}' not found`), null);
  }
  /**
   * Process top-level object
   */
  processTopObject(e) {
    e && (this.deferredExtent !== null ? this.deferredExtent.push(e) : this.extent.push(e)), this.processObject(e);
  }
  /**
   * Push object onto stack
   */
  processObject(e) {
    this.objects.push(e), this.types.push(e ? He : rt);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), n = this.attribs.getURI(t), a = this.attribs.getLocalName(t);
        if (!s.startsWith(fs) && n !== Je) {
          if (n === Ut) {
            a === cn && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, a || s, r, n || null);
        }
      }
  }
  /**
   * Handle ID attribute
   */
  handleId(e, t) {
  }
  /**
   * Set attribute value on object
   */
  setAttribValue(e, t, s, r) {
    const n = e.eClass(), a = this.helper.getFeature(n, r ?? null, t);
    a && this.setFeatureValue(e, a, s, -2);
  }
  /**
   * Handle feature (nested element)
   */
  handleFeature(e, t) {
    const s = this.objects[this.objects.length - 1];
    if (!s) {
      if (this.deferredParent && this.deferredFeature) {
        this.handleDeferredType(e, t);
        return;
      }
      this.objects.push(null), this.types.push(rt), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), n = e && this.helper.getURI(e) || null, a = this.helper.getFeatureWithElement(r, n, t, !0);
    if (a) {
      const o = this.helper.getFeatureKind(a);
      o === Dt || o === Ot ? (this.objects.push(null), this.types.push(a), this.isNull() || (this.text = "")) : this.createObject(s, a);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(Je, an) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(gs) || this.attribs?.getValueByName("", gs);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(ls);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType("", r, !1);
    else {
      let a = t.getEType();
      if (a && !("getESuperTypes" in a) && typeof a.eIsProxy == "function" && a.eIsProxy()) {
        const o = a.eProxyURI();
        if (o) {
          const d = o.toString(), y = d.indexOf("#");
          if (y > 0) {
            const S = d.substring(0, y), C = d.substring(y + 1), A = this.packageRegistry.getEPackage(S);
            if (A) {
              const b = Ze(A, C);
              b && (a = b, typeof t.setEType == "function" && t.setEType(b));
            }
          }
        }
      }
      if (a && "getESuperTypes" in a) {
        const o = a;
        if (o.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(hs);
          return;
        } else {
          const d = o.getEPackage()?.getEFactoryInstance();
          d && (n = d.create(o));
        }
      }
    }
    n && (this.helper.setValue(e, t, n, -1), this.handleObjectAttribs(n)), this.processObject(n);
  }
  /**
   * Handle unknown feature.
   * Priority:
   * 1. EMD feature lookup with owner package namespace (wrapper pattern)
   * 2. EClassifier match for type replacement (#53)
   * 3. Error
   */
  handleUnknownFeature(e, t, s) {
    const r = e && this.helper.getURI(e) || null, n = this.helper.getExtendedMetaData();
    if (n && r) {
      const a = s.eClass(), o = n.getElementFeature(a, r, t);
      if (o) {
        const d = this.helper.getFeatureKind(o);
        d === Dt || d === Ot ? (this.objects.push(null), this.types.push(o), this.isNull() || (this.text = "")) : this.createObject(s, o);
        return;
      }
    }
    if (r) {
      const a = this.packageRegistry.getEPackage(r);
      if (a) {
        const o = a.getEClassifier(t);
        if (o && "getESuperTypes" in o) {
          const d = o, y = s.eClass();
          if (d === y) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(He);
            return;
          }
          if (y.isSuperTypeOf(d) && !d.isAbstract()) {
            const S = d.getEPackage()?.getEFactoryInstance();
            if (S) {
              const C = S.create(d);
              for (const b of y.getEAllStructuralFeatures()) {
                if (b.isTransient() || b.isDerived())
                  continue;
                const R = s.eGet(b);
                if (R != null)
                  try {
                    C.eSet(b, R);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, C);
              const A = this.objects.length - 1;
              this.objects[A] = C, this.handleObjectAttribs(C), this.objects.push(C), this.types.push(He);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(rt), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
  }
  /**
   * Replace an object in the grandparent's containment reference.
   */
  replaceInParentContainment(e, t) {
    const s = this.objects.length - 1;
    if (s < 1)
      return;
    const r = this.objects[s - 1];
    if (!r)
      return;
    const n = r.eClass();
    for (const a of n.getEAllStructuralFeatures()) {
      if (!("isContainment" in a))
        continue;
      const o = a;
      if (o.isContainment()) {
        if (o.isMany()) {
          const d = r.eGet(o);
          if (d) {
            for (let y = d.length - 1; y >= 0; y--)
              if (d[y] === e) {
                d[y] = t;
                return;
              }
          }
        } else if (r.eGet(o) === e) {
          r.eSet(o, t);
          return;
        }
      }
    }
  }
  /**
   * Handle deferred type resolution (RDF/XML wrapping pattern).
   * When a containment feature has an abstract type, the inner element
   * specifies the concrete type to instantiate.
   */
  handleDeferredType(e, t) {
    const s = this.deferredParent, r = this.deferredFeature;
    this.deferredParent = null, this.deferredFeature = null;
    const n = e && this.helper.getURI(e) || null;
    let a = null;
    if (n) {
      const o = this.packageRegistry.getEPackage(n);
      if (o) {
        const d = o.getEClassifier(t);
        if (d && "getESuperTypes" in d) {
          const y = d;
          if (!y.isAbstract()) {
            const S = y.getEPackage()?.getEFactoryInstance();
            S && (a = S.create(y));
          }
        }
      }
    }
    a ? (this.helper.setValue(s, r, a, -1), this.handleObjectAttribs(a), this.objects[this.objects.length - 1] = a, this.types[this.types.length - 1] = He, this.objects.push(a), this.types.push(He)) : (this.objects.push(null), this.types.push(rt), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const a = s.trim().split(/\s+/);
        for (const o of a)
          o && this.setValueFromId(e, t, o, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const o = t.getEType();
      let d = null;
      if (o && typeof o.getEPackage == "function")
        d = o.getEPackage()?.getEFactoryInstance() ?? null;
      else if (o && typeof o.eGet == "function" && typeof o.eClass == "function") {
        const y = o.eClass();
        if (y) {
          const S = y.getEStructuralFeature?.("ePackage");
          if (S) {
            const C = o.eGet(S);
            C?.getEFactoryInstance && (d = C.getEFactoryInstance());
          }
        }
      }
      try {
        if (d && o) {
          const y = d.createFromString(o, s);
          this.helper.setValue(e, t, y, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (y) {
        const S = y instanceof Error ? y.message : String(y);
        this.error(`Invalid value for feature '${t.getName()}': ${S}`);
      }
    }
  }
  /**
   * Set reference value from ID
   */
  setValueFromId(e, t, s, r = -1) {
    this.forwardSingleReferences.push({
      object: e,
      feature: t,
      value: s,
      position: r,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber
    });
  }
  /**
   * Handle forward references
   */
  handleForwardReferences() {
    for (const e of this.forwardSingleReferences) {
      const t = this.resolveReference(e.value);
      if (t)
        this.helper.setValue(e.object, e.feature, t, e.position);
      else {
        console.warn(`[XMLHandler] Forward ref UNRESOLVED: '${e.value}' on feature '${e.feature?.getName?.()}'`);
        const s = this.createProxy(e.feature, e.value);
        s ? this.helper.setValue(e.object, e.feature, s, e.position) : this.error(`Unresolved reference '${e.value}'`);
      }
    }
    this.forwardSingleReferences = [];
  }
  /**
   * Creates a proxy for an unresolved reference.
   * The proxy will be resolved when accessed.
   */
  createProxy(e, t) {
    let s;
    const r = this.resource.getURI(), n = t.indexOf(" ");
    n > 0 && (t = t.substring(n + 1));
    const a = t.indexOf("#");
    if (a > 0) {
      const S = t.substring(0, a), C = t.substring(a + 1);
      if (r && !S.includes("://")) {
        const A = r.toString();
        if (S === A || A.endsWith(S) || A.endsWith("/" + S))
          s = Y.createURI(A + "#" + C);
        else {
          const b = Y.createURI(S).resolve(r);
          s = Y.createURI(b.toString() + "#" + C);
        }
      } else
        s = Y.createURI(t);
    } else a === 0 ? r ? s = Y.createURI(r.toString() + t) : s = Y.createURI(t) : (t.startsWith("/"), r ? s = Y.createURI(r.toString() + "#" + t) : s = Y.createURI("#" + t));
    const o = e.getEType(), d = o && "getESuperTypes" in o ? o : null, y = new Ms(s, d || void 0);
    return y.eSetResource(this.resource), y;
  }
  /**
   * Resolve a reference string.
   * Supports:
   * - Fragment references: #//EString or //EString
   * - External URIs: http://www.eclipse.org/emf/2002/Ecore#//EString
   * - Typed references: ecore:EClass audiogram.ecore#//HIMSAAudiometricStandardType
   * - Local IDs: someId
   */
  resolveReference(e) {
    const t = e.indexOf(" ");
    t > 0 && (e = e.substring(t + 1));
    const s = e.indexOf("#");
    if (s > 0) {
      const r = e.substring(0, s), n = e.substring(s + 1), o = this.resource.getURI()?.toString();
      if (o && (o === r || o.endsWith(r) || o.endsWith("/" + r) || r.endsWith(o)))
        return this.resource.getEObject(n);
      const d = this.packageRegistry.getEPackage(r);
      if (d)
        return this.resolveFragmentInPackage(d, n);
      const y = this.resource.getContents();
      for (let C = 0; C < y.length; C++) {
        const A = y.get(C);
        if (A && typeof A.getNsURI == "function") {
          const b = A;
          if (b.getNsURI() === r)
            return this.resolveFragmentInPackage(b, n);
        }
      }
      const S = this.resource.getResourceSet();
      if (S) {
        const C = Y.createURI(r), A = S.getResource(C, !0);
        if (A)
          return A.getEObject(n);
      }
      return null;
    }
    return e.startsWith("#") ? this.resource.getEObject(e.substring(1)) : e.startsWith("/") ? this.resource.getEObject(e) : this.resource.getEObject(e);
  }
  /**
   * Resolve a fragment path within an EPackage.
   * Handles paths like //EString, //EClass, etc.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return e;
    const r = s.split("/"), n = Ze(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let a = e;
      for (let y = 0; y < r.length - 2; y++) {
        const S = a.getESubpackages();
        let C = null;
        for (let A = 0; A < S.length; A++)
          if (S.get(A).getName() === r[y]) {
            C = S.get(A);
            break;
          }
        if (!C)
          return null;
        a = C;
      }
      const o = r[r.length - 2], d = a.getEClassifier(o);
      if (d && "getEStructuralFeature" in d) {
        const y = d.getEStructuralFeature(r[r.length - 1]);
        if (y)
          return y;
      }
    }
    return null;
  }
  /**
   * Handle proxy reference
   */
  handleProxy(e, t) {
  }
  /**
   * Get factory for prefix
   */
  getFactoryForPrefix(e) {
    let t = this.prefixesToFactories.get(e);
    if (t)
      return t;
    const s = this.helper.getURI(e);
    if (s) {
      const r = this.packageRegistry.getEPackage(s);
      if (r && (t = r.getEFactoryInstance(), t))
        return this.prefixesToFactories.set(e, t), t;
    }
    return null;
  }
  /**
   * Report error
   */
  error(e) {
    const t = new Error(`[Line ${this.lineNumber}, Col ${this.columnNumber}] ${e}`);
    this.errors.push(t), console.error(t.message);
  }
  /**
   * Get errors
   */
  getErrors() {
    return this.errors;
  }
}
class Os {
  constructor(e) {
    this.helper = e || new _t();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), n = this.makeDefaultHandler(e, r), a = Wr.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), o = new rn();
    a.onprocessinginstruction = (y) => {
      y.name;
    }, a.onopentag = (y) => {
      o.clear();
      const S = y;
      for (const [C, A] of Object.entries(S.attributes)) {
        const b = A, R = b.prefix ? `${b.prefix}:${b.local}` : b.local;
        if (b.prefix === "xmlns" || b.name === "xmlns") {
          const M = b.prefix === "xmlns" ? b.local : "";
          n.startPrefixMapping(M, b.value);
        }
        o.add(R, b.local, b.uri, b.value);
      }
      n.lineNumber = a.line, n.columnNumber = a.column, n.startElement(S.uri, S.local, S.name, o);
    }, a.onclosetag = (y) => {
      const S = y.indexOf(":"), C = S >= 0 ? y.substring(S + 1) : y;
      n.endElement("", C, y);
    }, a.ontext = (y) => {
      y.trim() && n.characters(y);
    }, a.oncdata = (y) => {
      n.characters(y);
    }, a.onerror = (y) => {
      console.error("XML Parse Error:", y.message), n.error(y.message);
    }, a.write(t).close(), n.endDocument();
    const d = n.getErrors();
    if (d.length > 0 && e.getErrors) {
      const y = e.getErrors();
      for (const S of d) {
        const C = S.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        C ? y.push({
          message: C[3] || S.message,
          line: parseInt(C[1], 10),
          column: parseInt(C[2], 10)
        }) : y.push({ message: S.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new Ds(e, this.helper, t);
  }
}
class un extends Os {
  constructor(e) {
    super(e || new ln());
  }
  makeDefaultHandler(e, t) {
    return new hn(e, this.helper, t);
  }
}
class ln extends _t {
}
class hn extends Ds {
  constructor(e, t, s) {
    super(e, t, s), this.xmiVersion = "2.0";
  }
  recordHeaderInformation() {
    if (this.attribs) {
      const e = this.attribs.getValueByQName("xmi:version");
      e && (this.xmiVersion = e);
    }
  }
  getXSIType() {
    let e = super.getXSIType();
    return !e && this.attribs && (e = this.attribs.getValueByQName("xmi:type")), e;
  }
  handleId(e, t) {
    this.resource && "setID" in this.resource && this.resource.setID(e, t);
  }
}
function ps(l) {
  return l != null && typeof l.getESuperTypes == "function" && typeof l.getEAllStructuralFeatures == "function";
}
function dt(l) {
  return l != null && typeof l.getELiterals == "function" && typeof l.getEEnumLiteral == "function";
}
class Us {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new _t(), this.resource = null;
  }
  /**
   * Save resource to string
   */
  save(e, t) {
    return this.saveObjects(e, e.getContents(), t);
  }
  /**
   * Save a specific set of objects using the given resource for reference resolution.
   */
  saveObjects(e, t, s) {
    this.resource = e, this.output = [], this.declaredNamespaces.clear(), this.indent = 0, s && this.helper.setOptions(s), this.output.push(`<?xml version="1.0" encoding="UTF-8"?>
`);
    const r = Array.isArray(t) ? t : [...t];
    if (r.length > 1)
      this.saveMultipleRoots(r);
    else
      for (const n of r)
        this.saveObject(n, !0);
    return this.output.join("");
  }
  /**
   * Save multiple root objects wrapped in an <xmi:XMI> container element
   */
  saveMultipleRoots(e) {
    const t = /* @__PURE__ */ new Set();
    for (const r of e)
      for (const n of this.collectPackages(r))
        t.add(n);
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${Ut}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Je}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const n = r.getNsURI(), a = this.getPrefix(r);
      n && a && !s.has(a) && (this.output.push(` xmlns:${a}="${n}"`), this.declaredNamespaces.set(n, a), s.add(a));
    }
    this.output.push(`>
`), this.indent++;
    for (const r of e)
      this.saveObject(r, !1);
    this.indent--, this.output.push(`</xmi:XMI>
`);
  }
  /**
   * Save a single object
   */
  saveObject(e, t) {
    const s = e.eClass(), r = s.getEPackage(), n = r ? this.getPrefix(r) : "", a = s.getName() || "Object", o = n ? `${n}:${a}` : a;
    this.writeIndent(), this.output.push(`<${o}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const d = this.helper.getExtendedMetaData(), y = this.getSimpleContentText(e, d), S = this.hasElementContent(e);
    y !== null ? (this.output.push(`>${this.escapeXml(y)}`), S && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${o}>
`)) : S ? (this.output.push(`>
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent(), this.output.push(`</${o}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Write xmi:id attribute if the resource tracks an ID for this object
   */
  saveID(e) {
    const t = this.helper.getID(e);
    t && this.output.push(` ${this.idAttributeName}="${this.escapeXml(t)}"`);
  }
  /**
   * Write namespace declarations
   */
  writeNamespaces(e) {
    const t = this.collectPackages(e);
    this.output.push(` xmlns:xmi="${Ut}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Je}"`);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const a = n.getNsURI(), o = this.getPrefix(n);
      a && o && !s.has(o) && (this.output.push(` xmlns:${o}="${a}"`), this.declaredNamespaces.set(a, o), s.add(o));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (n) => {
      const a = n.eClass();
      for (const o of a.getEAllStructuralFeatures()) {
        const d = t.getNamespace(o);
        if (d && !this.declaredNamespaces.has(d) && d !== "http://www.w3.org/XML/1998/namespace") {
          const y = this.generatePrefix(d, s);
          y && (this.output.push(` xmlns:${y}="${d}"`), this.declaredNamespaces.set(d, y), s.add(y));
        }
      }
      for (const o of n.eContents())
        r(o);
    };
    r(e);
  }
  /**
   * Generate a namespace prefix for a URI.
   */
  generatePrefix(e, t) {
    const s = e.lastIndexOf("/");
    let r = s >= 0 ? e.substring(s + 1) : e;
    if (r = r.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(), r || (r = "ns"), r.length > 10 && (r = r.substring(0, 10)), !t.has(r))
      return r;
    for (let n = 1; n < 100; n++) {
      const a = `${r}${n}`;
      if (!t.has(a))
        return a;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const a = r.eClass().getEPackage();
      a && t.add(a);
      for (const o of r.eContents())
        s(o);
    };
    return s(e), t;
  }
  /**
   * Get prefix for package
   */
  getPrefix(e) {
    return e.getNsPrefix() || e.getName() || "ns";
  }
  /**
   * Write xsi:type attribute if needed
   */
  writeTypeAttribute(e) {
  }
  /**
   * Write attribute values and non-containment references
   */
  writeAttributes(e) {
    const t = e.eClass(), s = this.helper.getExtendedMetaData();
    for (const r of t.getEAllStructuralFeatures())
      if (!(r.isTransient() || r.isDerived()) && !(s && s.getName(r) === ":0")) {
        if (this.isAttribute(r)) {
          if (s && s.getFeatureKind(r) === at)
            continue;
          const n = r;
          let a = e.eGet(n);
          if (a != null && (a = this.resolveValue(a, e), a != null)) {
            let o = null;
            try {
              o = n.getDefaultValue();
            } catch {
            }
            if (a !== o) {
              const d = this.convertToString(n, a), y = this.getSerializedAttributeName(n, s);
              this.output.push(` ${y}="${this.escapeXml(d)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const n = r;
          if (!n.isContainment()) {
            let a = e.eGet(n);
            if (a != null) {
              const o = this.helper.getSerializedFeatureName(n);
              if (r.isMany()) {
                if (Array.isArray(a) || ye(a)) {
                  const d = [];
                  for (const y of a) {
                    const S = this.resolveValue(y, e);
                    if (S == null || typeof S == "string")
                      continue;
                    const C = S.eResource?.();
                    if (C && C === this.resource) {
                      const A = this.getHref(S);
                      A && d.push(A);
                    }
                  }
                  d.length > 0 && this.output.push(` ${o}="${this.escapeXml(d.join(" "))}"`);
                }
              } else if (a = this.resolveValue(a, e), a != null)
                if (typeof a == "string")
                  this.output.push(` ${o}="${this.escapeXml(a)}"`);
                else if (typeof a == "boolean")
                  this.output.push(` ${o}="${a ? "true" : "false"}"`);
                else if (typeof a == "number")
                  this.output.push(` ${o}="${String(a)}"`);
                else {
                  const d = this.getTypePrefixedHref(n, a);
                  d && this.output.push(` ${o}="${this.escapeXml(d)}"`);
                }
            }
          }
        }
      }
  }
  /**
   * Get href for cross-reference
   */
  getHref(e) {
    if (We(e) && e.eIsProxy()) {
      const r = e.eProxyURI();
      return r ? this.helper.deresolve(r).toString() : null;
    }
    const t = this.getIntraResourceFragment(e);
    if (t)
      return t;
    const s = e.eResource?.();
    if (s) {
      const r = s.getURIFragment(e);
      if (r) {
        if (s === this.resource)
          return r;
        const n = s.getURI();
        return n ? `${n.toString()}#${r}` : `#${r}`;
      }
    }
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const r = e.getEContainingClass();
      if (r) {
        const n = r.getEPackage?.(), a = r.getName?.(), o = e.getName?.();
        if (n && a && o) {
          const d = n.getNsURI?.();
          if (d)
            return `${d}#//${a}/${o}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const n = r.getNsURI?.(), a = e.getName?.();
        if (n && a)
          return `${n}#//${a}`;
      }
    }
    if ("getName" in e) {
      const r = e.getName?.();
      if (r)
        return `//${r}`;
    }
    return null;
  }
  /**
   * For Ecore objects (EClassifier, EStructuralFeature) that lack eResource()
   * because the eContainer chain is not set, walk up the Ecore-specific
   * hierarchy (ePackage/eSuperPackage) to find the root package. If that root
   * is in this.resource, build a hierarchical fragment path like
   * "//service/base/Service" or "//service/base/Service/id".
   */
  getIntraResourceFragment(e) {
    if (!this.resource)
      return null;
    const t = [];
    let s = null;
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const n = e.getEContainingClass();
      if (!n)
        return null;
      const a = e.getName?.(), o = n.getName?.();
      if (!a || !o)
        return null;
      t.push(o, a), s = n.getEPackage?.() ?? null;
    } else if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const n = e.getName?.();
      if (!n)
        return null;
      t.push(n), s = e.getEPackage();
    }
    if (!s)
      return null;
    for (; s; ) {
      const n = typeof s.getESuperPackage == "function" ? s.getESuperPackage() : null;
      if (!n)
        break;
      const a = s.getName?.();
      a && t.unshift(a), s = n;
    }
    const r = this.resource.getContents();
    for (const n of r)
      if (n === s)
        return "#//" + t.join("/");
    return null;
  }
  /**
   * Get href with type prefix for cross-document references when the declared
   * type is abstract and differs from the actual type.
   * Java EMF format: "prefix:TypeName URI#fragment"
   */
  getTypePrefixedHref(e, t) {
    const s = this.getHref(t);
    if (!s)
      return null;
    const r = t.eResource?.();
    if (r && r === this.resource || s.startsWith("/") || s.startsWith("#"))
      return s;
    const n = e.getEType(), a = t.eClass();
    if (n && a && a !== n && "isAbstract" in n && n.isAbstract()) {
      const o = a.getEPackage();
      if (o) {
        const d = this.getPrefix(o), y = a.getName();
        if (d && y)
          return `${d}:${y} ${s}`;
      }
    }
    return s;
  }
  /**
   * Check if feature is an attribute (not a reference)
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
  /**
   * Check if object has element content (containments, multi-valued non-containment refs, or EMD element features)
   */
  hasElementContent(e) {
    const s = e.eClass().getEAllStructuralFeatures(), r = this.helper.getExtendedMetaData();
    if (r)
      for (const n of s) {
        if (n.isTransient() || n.isDerived() || !this.isAttribute(n) || r.getFeatureKind(n) !== at)
          continue;
        const a = e.eGet(n);
        if (a != null)
          return !0;
      }
    for (const n of s)
      if ("isContainment" in n) {
        const a = n;
        if (n.isTransient())
          continue;
        const o = e.eGet(a);
        if (o == null)
          continue;
        if (a.isContainment()) {
          if ((Array.isArray(o) || ye(o)) && o.length > 0 || !Array.isArray(o) && !ye(o))
            return !0;
        } else if (n.isMany() && (Array.isArray(o) || ye(o)) && o.length > 0)
          for (const d of o) {
            const y = d.eResource?.();
            if (!y || y !== this.resource)
              return !0;
          }
      }
    return !1;
  }
  /**
   * Write element content (containments and multi-valued non-containment references)
   */
  writeElements(e) {
    const t = e.eClass(), s = this.helper.getExtendedMetaData();
    if (s)
      for (const r of t.getEAllStructuralFeatures()) {
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== at)
          continue;
        const a = e.eGet(r);
        if (a == null)
          continue;
        const o = this.getSerializedElementName(r, s), d = r;
        if (r.isMany() && (Array.isArray(a) || ye(a))) {
          for (const y of a)
            if (y != null) {
              this.writeIndent();
              const S = this.convertSingleValueToString(d, y);
              this.output.push(`<${o}>${this.escapeXml(S)}</${o}>
`);
            }
        } else {
          this.writeIndent();
          const y = this.convertToString(d, a);
          this.output.push(`<${o}>${this.escapeXml(y)}</${o}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const n = r;
        if (r.isTransient())
          continue;
        const a = e.eGet(n);
        if (a == null)
          continue;
        if (n.isContainment())
          if (Array.isArray(a) || ye(a))
            for (const o of a)
              this.writeElement(n, o);
          else
            this.writeElement(n, a);
        else if (r.isMany() && (Array.isArray(a) || ye(a)) && a.length > 0)
          for (const o of a) {
            const d = this.resolveValue(o, e);
            if (d == null)
              continue;
            const y = typeof d != "string" ? d.eResource?.() : null;
            if (y && y === this.resource)
              continue;
            const S = typeof d == "string" ? d : this.getHref(d);
            S && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(n)} href="${this.escapeXml(S)}"/>
`));
          }
      }
  }
  /**
   * Write a single element
   */
  writeElement(e, t) {
    const s = this.helper.getExtendedMetaData(), r = this.getSerializedElementName(e, s) || "element";
    this.writeIndent(), this.output.push(`<${r}`);
    const n = e.getEType(), a = t.eClass();
    if (n && a && a !== n) {
      const y = a.getEPackage(), S = y ? this.getPrefix(y) : "", C = S ? `${S}:${a.getName()}` : a.getName();
      this.output.push(` xsi:type="${C}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const o = this.getSimpleContentText(t, s), d = this.hasElementContent(t);
    o !== null ? (this.output.push(`>${this.escapeXml(o)}`), d && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : d ? (this.output.push(`>
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent(), this.output.push(`</${r}>
`)) : this.output.push(`/>
`);
  }
  /**
   * Resolve a value if it's a proxy.
   * Returns the resolved value or the original value if not a proxy or cannot be resolved.
   */
  resolveValue(e, t) {
    if (e == null)
      return e;
    if (We(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(We(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const n = s.toString(), a = n.indexOf("#");
          if (a >= 0) {
            const o = n.substring(a + 1);
            let d = this.resource;
            if (a > 0) {
              const y = Y.createURI(n.substring(0, a));
              d = r.getResource(y, !0) || this.resource;
            }
            if (d) {
              const y = d.getEObject(o);
              if (y)
                return y;
            }
          }
        }
      }
      return s?.toString() || null;
    }
    return e;
  }
  /**
   * Convert value to string
   */
  convertToString(e, t) {
    if (t == null)
      return "";
    if (Array.isArray(t) || ye(t)) {
      const r = [];
      for (const n of t)
        n != null && r.push(this.convertSingleValueToString(e, n));
      return r.join(" ");
    }
    if (dt(e.getEType()))
      return this.convertSingleValueToString(e, t);
    if (typeof t == "string")
      return t;
    if (typeof t == "boolean")
      return t ? "true" : "false";
    if (typeof t == "number")
      return String(t);
    if (t && typeof t == "object" && "eClass" in t)
      return "getName" in t && typeof t.getName == "function" && t.getName() || "";
    const s = e.getEType();
    if (s && "getEPackage" in s) {
      const r = s.getEPackage();
      if (r) {
        const n = r.getEFactoryInstance();
        if (n)
          return n.convertToString(s, t);
      }
    }
    return String(t);
  }
  /**
   * Convert a single value to string (helper for arrays)
   */
  convertSingleValueToString(e, t) {
    if (t == null)
      return "";
    if (!dt(e.getEType())) {
      if (typeof t == "string")
        return t;
      if (typeof t == "boolean")
        return t ? "true" : "false";
      if (typeof t == "number")
        return String(t);
    }
    const r = e.getEType();
    if (r && "getEPackage" in r) {
      const n = r.getEPackage();
      if (n) {
        const a = n.getEFactoryInstance();
        if (a)
          return a.convertToString(r, t);
      }
    }
    return String(t);
  }
  /**
   * Get the text content for a simple-content class, or null if not applicable.
   */
  getSimpleContentText(e, t) {
    if (!t)
      return null;
    const s = e.eClass();
    if (t.getContentKind(s) !== qt)
      return null;
    const r = t.getSimpleContentFeature(s);
    if (!r)
      return null;
    const n = e.eGet(r);
    return n == null ? null : typeof n == "string" ? n : typeof n == "boolean" ? n ? "true" : "false" : String(n);
  }
  /**
   * Get the serialized attribute name, including namespace prefix if EMD specifies one.
   */
  getSerializedAttributeName(e, t) {
    if (t) {
      const s = t.getNamespace(e), r = t.getName(e) ?? e.getName() ?? "";
      if (s) {
        const n = this.getNamespacePrefix(s);
        if (n)
          return `${n}:${r}`;
      }
      if (r && !r.startsWith(":"))
        return r;
    }
    return this.helper.getSerializedFeatureName(e);
  }
  /**
   * Get the serialized element name, including namespace prefix if EMD specifies one.
   */
  getSerializedElementName(e, t) {
    if (t) {
      const s = t.getNamespace(e), r = t.getName(e) ?? e.getName() ?? "";
      if (s) {
        const n = this.getNamespacePrefix(s);
        if (n)
          return `${n}:${r}`;
      }
      if (r && !r.startsWith(":"))
        return r;
    }
    return this.helper.getSerializedFeatureName(e);
  }
  /**
   * Get or create a namespace prefix for the given URI.
   */
  getNamespacePrefix(e) {
    const t = this.declaredNamespaces.get(e);
    return t || (e === "http://www.w3.org/XML/1998/namespace" ? "xml" : null);
  }
  /**
   * Escape XML special characters
   */
  escapeXml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  /**
   * Write indentation
   */
  writeIndent() {
    for (let e = 0; e < this.indent; e++)
      this.output.push(this.indentString);
  }
}
class fn extends Us {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class Ls extends Xt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new _t(this);
  }
  /**
   * Get EObject by ID
   */
  getEObject(e) {
    const t = this.idToEObjectMap.get(e);
    return t || super.getEObject(e);
  }
  /**
   * Get URI fragment for an object
   */
  getURIFragment(e) {
    const t = this.eObjectToIDMap.get(e);
    return t || super.getURIFragment(e);
  }
  /**
   * Set ID for an object
   */
  setID(e, t) {
    t && (this.idToEObjectMap.set(t, e), this.eObjectToIDMap.set(e, t));
  }
  /**
   * Get ID for an object
   */
  getID(e) {
    return this.eObjectToIDMap.get(e) ?? null;
  }
  /**
   * Clear ID maps
   */
  clearIdMaps() {
    this.idToEObjectMap.clear(), this.eObjectToIDMap.clear();
  }
  /**
   * Load resource using URIConverter if available, otherwise no-op.
   * For direct string loading, use loadFromString().
   */
  async load(e) {
    const s = this.getResourceSet()?.getURIConverter(), r = this.getURI();
    if (s && r)
      try {
        const n = await s.createInputStream(r), a = await pn(n);
        this.loadFromString(a, e);
      } catch {
        this.loaded = !0;
      }
    else
      this.loaded = !0;
  }
  /**
   * Load from XML string
   */
  loadFromString(e, t) {
    this.clearIdMaps();
    const s = t || /* @__PURE__ */ new Map();
    this.createXMLLoad().load(this, e, s), this.loaded = !0;
  }
  /**
   * Create the XML loader
   */
  createXMLLoad() {
    return new Os(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new Us(this.xmlHelper);
  }
  /**
   * Save to XML string
   */
  saveToString(e) {
    const t = e || /* @__PURE__ */ new Map();
    return this.createXMLSave().save(this, t);
  }
  /**
   * Save a subset of objects to XML string.
   * Uses this resource's context (IDs, reference resolution) but only
   * serializes the given objects as root elements.
   */
  saveContents(e, t) {
    const s = t || /* @__PURE__ */ new Map();
    return this.createXMLSave().saveObjects(this, e, s);
  }
  /**
   * Unload resource
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class gn extends Ls {
  createXMLLoad() {
    return new un(this.xmlHelper);
  }
  createXMLSave() {
    return new fn(this.xmlHelper);
  }
}
async function pn(l) {
  const e = l.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: n } = await e.read();
    if (r)
      break;
    s += t.decode(n, { stream: !0 });
  }
  return s += t.decode(), s;
}
class dn {
  createResource(e) {
    return new Ls(e);
  }
}
class mt {
  createResource(e) {
    return new gn(e);
  }
}
const et = ct.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
et.has("xml") || et.set("xml", new dn());
et.has("xmi") || et.set("xmi", new mt());
et.has("ecore") || et.set("ecore", new mt());
class mn {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || we.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (n) {
      this.error(`Invalid JSON: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    if (Array.isArray(r))
      for (const n of r) {
        const a = this.loadObject(n);
        a && e.getContents().push(a);
      }
    else if (r && typeof r == "object") {
      const n = this.loadObject(r);
      n && e.getContents().push(n);
    }
    this.handleForwardReferences();
  }
  /**
   * Load a single JSON object into an EObject.
   */
  loadObject(e, t) {
    const s = this.resolveEClass(e, t);
    if (!s)
      return this.error(`Cannot determine type for object: ${JSON.stringify(e).substring(0, 100)}`), null;
    const r = s.getEPackage();
    if (!r)
      return this.error(`No package for class '${s.getName()}'`), null;
    const a = r.getEFactoryInstance().create(s);
    for (const [o, d] of Object.entries(e)) {
      if (o === "eClass" || d == null)
        continue;
      const y = s.getEStructuralFeature(o);
      if (!y) {
        this.error(`Unknown feature '${o}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(y))
        this.loadAttribute(a, y, d);
      else {
        const S = y;
        S.isContainment() ? this.loadContainment(a, S, d) : this.loadCrossReference(a, S, d);
      }
    }
    return a;
  }
  /**
   * Resolve the EClass for a JSON object.
   * Uses `eClass` property if present, otherwise falls back to expectedType.
   */
  resolveEClass(e, t) {
    const s = e.eClass;
    return s ? this.resolveType(s) : t || null;
  }
  /**
   * Resolve an eClass type URI (`nsURI#//ClassName`) to an EClass.
   */
  resolveType(e) {
    const t = e.indexOf("#");
    if (t < 0)
      return this.error(`Invalid eClass URI (no '#'): ${e}`), null;
    const s = e.substring(0, t);
    let r = e.substring(t + 1);
    for (; r.startsWith("/"); )
      r = r.substring(1);
    const n = this.packageRegistry.getEPackage(s);
    if (!n)
      return this.error(`Package not found for nsURI: ${s}`), null;
    const a = n.getEClassifier(r);
    return a ? "getESuperTypes" in a ? a : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], n = e.eGet(t);
      if (n && (Array.isArray(n) || ye(n)))
        for (const a of r)
          n.push(this.convertAttributeValue(t, a));
      else
        e.eSet(t, r.map((a) => this.convertAttributeValue(t, a)));
    } else
      e.eSet(t, this.convertAttributeValue(t, s));
  }
  /**
   * Convert a JSON value to the appropriate attribute type using EFactory.createFromString.
   */
  convertAttributeValue(e, t) {
    if (t == null)
      return null;
    if (typeof t == "string" || typeof t == "number" || typeof t == "boolean") {
      if (typeof t == "string") {
        const s = e.getEType();
        if (s && "getEPackage" in s) {
          const r = s.getEPackage();
          if (r) {
            const n = r.getEFactoryInstance();
            if (n)
              try {
                return n.createFromString(s, t);
              } catch {
              }
          }
        }
      }
      return t;
    }
    return t;
  }
  /**
   * Load a containment reference value (nested objects).
   */
  loadContainment(e, t, s) {
    const r = t.getEType() && "getESuperTypes" in t.getEType() ? t.getEType() : void 0;
    if (t.isMany()) {
      const n = Array.isArray(s) ? s : [s], a = e.eGet(t);
      for (const o of n)
        if (o && typeof o == "object") {
          const d = this.loadObject(o, r);
          d && a && (Array.isArray(a) || ye(a)) && a.push(d);
        }
    } else if (s && typeof s == "object" && !Array.isArray(s)) {
      const n = this.loadObject(s, r);
      n && e.eSet(t, n);
    }
  }
  /**
   * Load a cross-reference value (`{ "$ref": "uri#fragment" }`).
   */
  loadCrossReference(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s];
      for (const n of r)
        n && typeof n == "object" && "$ref" in n && this.forwardReferences.push({
          object: e,
          feature: t,
          value: n.$ref
        });
    } else
      s && typeof s == "object" && "$ref" in s && this.forwardReferences.push({
        object: e,
        feature: t,
        value: s.$ref
      });
  }
  /**
   * Resolve all forward references collected during loading.
   */
  handleForwardReferences() {
    for (const e of this.forwardReferences) {
      const t = this.resolveReference(e.value);
      if (t)
        this.setReferenceValue(e.object, e.feature, t);
      else {
        const s = this.createProxy(e.feature, e.value);
        s ? this.setReferenceValue(e.object, e.feature, s) : this.error(`Unresolved reference: ${e.value}`);
      }
    }
    this.forwardReferences = [];
  }
  /**
   * Set a reference value on an object (handles single and multi-valued).
   */
  setReferenceValue(e, t, s) {
    if (t.isMany()) {
      const r = e.eGet(t);
      r && (Array.isArray(r) || ye(r)) && r.push(s);
    } else
      e.eSet(t, s);
  }
  /**
   * Resolve a $ref URI to an EObject.
   */
  resolveReference(e) {
    const t = e.indexOf("#");
    if (t > 0) {
      const s = e.substring(0, t), r = e.substring(t + 1), n = this.resource.getURI();
      if (n && n.toString() === s)
        return this.resource.getEObject(r);
      const a = this.packageRegistry.getEPackage(s);
      if (a)
        return this.resolveFragmentInPackage(a, r);
      const o = this.resource.getResourceSet();
      if (o) {
        const d = Y.createURI(s), y = o.getResource(d, !0);
        if (y)
          return y.getEObject(r);
      }
      return null;
    }
    return e.startsWith("#") ? this.resource.getEObject(e.substring(1)) : e.startsWith("/") ? this.resource.getEObject(e) : this.resource.getEObject(e);
  }
  /**
   * Resolve a fragment path within an EPackage.
   */
  resolveFragmentInPackage(e, t) {
    let s = t;
    for (; s.startsWith("/"); )
      s = s.substring(1);
    if (!s)
      return e;
    const r = s.split("/"), n = Ze(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let a = e;
      for (let y = 0; y < r.length - 2; y++) {
        const S = a.getESubpackages();
        let C = null;
        for (let A = 0; A < S.length; A++)
          if (S.get(A).getName() === r[y]) {
            C = S.get(A);
            break;
          }
        if (!C)
          return null;
        a = C;
      }
      const o = r[r.length - 2], d = a.getEClassifier(o);
      if (d && "getEStructuralFeature" in d) {
        const y = d.getEStructuralFeature(r[r.length - 1]);
        if (y)
          return y;
      }
    }
    return null;
  }
  /**
   * Create a proxy for an unresolved reference.
   */
  createProxy(e, t) {
    let s;
    const r = t.indexOf("#");
    if (r > 0)
      s = Y.createURI(t);
    else if (r === 0) {
      const d = this.resource.getURI();
      d ? s = Y.createURI(d.toString() + t) : s = Y.createURI(t);
    } else {
      const d = this.resource.getURI();
      d ? s = Y.createURI(d.toString() + "#" + t) : s = Y.createURI("#" + t);
    }
    const n = e.getEType(), a = n && "getESuperTypes" in n ? n : null, o = new Ms(s, a || void 0);
    return o.eSetResource(this.resource), o;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
  /**
   * Report an error.
   */
  error(e) {
    this.errors.push(new Error(e));
  }
  /**
   * Get accumulated errors.
   */
  getErrors() {
    return this.errors;
  }
}
const ds = "SERIALIZE_TYPE", ms = "INDENT", yn = "always", En = "polymorphic";
class Cn {
  constructor() {
    this.serializeType = En, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(ds) && (this.serializeType = t.get(ds)), t.has(ms) && (this.indent = t.get(ms)));
    const s = e.getContents();
    if (s.size() === 0)
      return "{}";
    if (s.size() === 1) {
      const n = this.saveObject(s.get(0), void 0, !0);
      return JSON.stringify(n, null, this.indent);
    }
    const r = [];
    for (const n of s)
      r.push(this.saveObject(n, void 0, !0));
    return JSON.stringify(r, null, this.indent);
  }
  /**
   * Convert an EObject to a plain JS object for JSON serialization.
   */
  saveObject(e, t, s = !1) {
    const r = {}, n = e.eClass();
    this.shouldSaveType(e, t, s) && (r.eClass = this.getEClassURI(n));
    for (const a of n.getEAllStructuralFeatures()) {
      if (a.isTransient() || a.isDerived())
        continue;
      const o = e.eGet(a);
      if (o != null)
        if (this.isAttribute(a))
          this.saveAttribute(r, e, a, o);
        else {
          const d = a;
          d.isContainment() ? this.saveContainment(r, e, d, o) : this.saveCrossReference(r, e, d, o);
        }
    }
    return r;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(e, t, s, r) {
    try {
      const a = s.getDefaultValue();
      if (r === a)
        return;
    } catch {
    }
    const n = s.getName();
    if (s.isMany()) {
      const a = Array.isArray(r) || ye(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[n] = a.map((o) => this.convertAttributeValue(s, o));
    } else
      e[n] = this.convertAttributeValue(s, r);
  }
  /**
   * Convert a single attribute value to a JSON-compatible value.
   */
  convertAttributeValue(e, t) {
    if (t == null)
      return null;
    if (typeof t == "string" || typeof t == "number" || typeof t == "boolean")
      return t;
    const s = e.getEType();
    if (s && "getEPackage" in s) {
      const r = s.getEPackage();
      if (r) {
        const n = r.getEFactoryInstance();
        if (n)
          return n.convertToString(s, t);
      }
    }
    return String(t);
  }
  /**
   * Serialize a containment reference.
   * Proxies inside containment are serialized as `{ "$ref": "uri" }` (emfjson-jackson convention).
   */
  saveContainment(e, t, s, r) {
    const n = s.getName();
    if (s.isMany()) {
      const a = Array.isArray(r) || ye(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      e[n] = a.map((o) => this.saveContainedChild(o, s));
    } else
      e[n] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (We(e) && e.eIsProxy()) {
      const s = e.eProxyURI()?.toString();
      if (s)
        return { $ref: s };
    }
    return this.saveObject(e, t);
  }
  /**
   * Serialize a cross-reference (non-containment) as `{ "$ref": "uri#fragment" }`.
   */
  saveCrossReference(e, t, s, r) {
    const n = s.getName();
    if (s.isMany()) {
      const a = Array.isArray(r) || ye(r) ? [...r] : [r];
      if (a.length === 0)
        return;
      const o = [];
      for (const d of a) {
        const y = this.getHref(d);
        y && o.push({ $ref: y });
      }
      o.length > 0 && (e[n] = o);
    } else {
      const a = this.getHref(r);
      a && (e[n] = { $ref: a });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === yn || s)
      return !0;
    if (t && "isContainment" in t) {
      const n = t.getEType(), a = e.eClass();
      return !!(n && a && n !== a);
    }
    return !1;
  }
  /**
   * Get the emfjson-style type URI for an EClass: `nsURI#//ClassName`
   */
  getEClassURI(e) {
    const s = e.getEPackage()?.getNsURI(), r = e.getName();
    return s && r ? `${s}#//${r}` : r || "Unknown";
  }
  /**
   * Get href for a cross-referenced object.
   * Reuses the pattern from XMLSave.getHref().
   */
  getHref(e) {
    if (We(e) && e.eIsProxy())
      return e.eProxyURI()?.toString() || null;
    const t = e.eResource?.();
    if (t) {
      const s = t.getURIFragment(e), r = t.getURI();
      if (r && s)
        return `${r.toString()}#${s}`;
      if (s)
        return `#${s}`;
    }
    if ("getEContainingClass" in e && typeof e.getEContainingClass == "function") {
      const s = e.getEContainingClass();
      if (s) {
        const r = s.getEPackage?.(), n = s.getName?.(), a = e.getName?.();
        if (r && n && a) {
          const o = r.getNsURI?.();
          if (o)
            return `${o}#//${n}/${a}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const s = e.getEPackage();
      if (s) {
        const r = s.getNsURI?.(), n = e.getName?.();
        if (r && n)
          return `${r}#//${n}`;
      }
    }
    if ("getName" in e) {
      const s = e.getName?.();
      if (s)
        return `//${s}`;
    }
    return null;
  }
  /**
   * Check if a feature is an EAttribute (not an EReference).
   */
  isAttribute(e) {
    return !("isContainment" in e);
  }
}
class Tn extends Xt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map();
  }
  /**
   * Get EObject by ID or path fragment.
   */
  getEObject(e) {
    const t = this.idToEObjectMap.get(e);
    return t || super.getEObject(e);
  }
  /**
   * Get URI fragment for an object.
   */
  getURIFragment(e) {
    const t = this.eObjectToIDMap.get(e);
    return t || super.getURIFragment(e);
  }
  /**
   * Set ID for an object.
   */
  setID(e, t) {
    t && (this.idToEObjectMap.set(t, e), this.eObjectToIDMap.set(e, t));
  }
  /**
   * Get ID for an object.
   */
  getID(e) {
    return this.eObjectToIDMap.get(e) ?? null;
  }
  clearIdMaps() {
    this.idToEObjectMap.clear(), this.eObjectToIDMap.clear();
  }
  /**
   * Load from a JSON string.
   */
  loadFromString(e, t) {
    this.clearIdMaps();
    const s = t || /* @__PURE__ */ new Map(), r = this.createJSONLoad();
    r.load(this, e, s);
    const n = r.getErrors();
    if (n.length > 0) {
      const a = this.getErrors();
      for (const o of n)
        a.push({ message: o.message });
    }
    this.loaded = !0;
  }
  /**
   * Save to a JSON string.
   */
  saveToString(e) {
    const t = e || /* @__PURE__ */ new Map();
    return this.createJSONSave().save(this, t);
  }
  /**
   * Create the JSON loader.
   */
  createJSONLoad() {
    return new mn();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new Cn();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class Sn {
  createResource(e) {
    return new Tn(e);
  }
}
const ys = ct.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
ys.has("json") || ys.set("json", new Sn());
class Nn {
  constructor() {
    this._getEcorePackage = null;
  }
  /**
   * Register the getEcorePackage function
   */
  register(e) {
    this._getEcorePackage = e;
  }
  /**
   * Get the EClass for EObject
   */
  getEObjectClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEObjectClass();
  }
  /**
   * Get the EClass for EClass
   */
  getEClassClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEClassClass();
  }
  /**
   * Get the EClass for EPackage
   */
  getEPackageClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEPackageClass();
  }
  /**
   * Get the EClass for EFactory
   */
  getEFactoryClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEFactoryClass();
  }
  /**
   * Get the EClass for EAttribute
   */
  getEAttributeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEAttributeClass();
  }
  /**
   * Get the EClass for EReference
   */
  getEReferenceClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEReferenceClass();
  }
  /**
   * Get the EClass for EStructuralFeature
   */
  getEStructuralFeatureClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEStructuralFeatureClass();
  }
  /**
   * Get the EClass for EDataType
   */
  getEDataTypeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEDataTypeClass();
  }
  /**
   * Get the EClass for EOperation
   */
  getEOperationClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEOperationClass();
  }
  /**
   * Get the EClass for EParameter
   */
  getEParameterClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEParameterClass();
  }
  /**
   * Get the EClass for EGenericType
   */
  getEGenericTypeClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEGenericTypeClass();
  }
  /**
   * Get the EClass for ETypeParameter
   */
  getETypeParameterClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getETypeParameterClass();
  }
  /**
   * Get the EClass for EAnnotation
   */
  getEAnnotationClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEAnnotationClass();
  }
  /**
   * Get the EClass for EStringToStringMapEntry
   */
  getEStringToStringMapEntryClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEStringToStringMapEntryClass();
  }
  /**
   * Get the EClass for EEnum
   */
  getEEnumClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEEnumClass();
  }
  /**
   * Get the EClass for EEnumLiteral
   */
  getEEnumLiteralClass() {
    if (!this._getEcorePackage)
      throw new Error("EcorePackage not registered. Import EcorePackage first.");
    return this._getEcorePackage().getEEnumLiteralClass();
  }
  /**
   * Check if registry is initialized
   */
  isRegistered() {
    return this._getEcorePackage !== null;
  }
}
const te = new Nn();
class re extends Re {
  constructor() {
    super(...arguments), this._name = null, this.abstract_ = !1, this.interface_ = !1, this._eSuperTypes = null, this._eStructuralFeatures = null, this._eOperations = null, this.ePackage = null, this.instanceClassName = null, this.instanceClass = null, this.featureID = 0, this.eTypeParameters = ce(this), this.eGenericSuperTypes = ce(this), this.eAnnotations = ce(this), this.xmlNameToFeature = /* @__PURE__ */ new Map(), this.allSuperTypesCache = { value: null }, this.allFeaturesCache = { value: null }, this.attributesCache = { value: null }, this.allAttributesCache = { value: null }, this.referencesCache = { value: null }, this.allReferencesCache = { value: null }, this.allContainmentsCache = { value: null }, this.allOperationsCache = { value: null };
  }
  // Public getter for PrimeVue compatibility (optionLabel="name")
  get name() {
    return this._name;
  }
  getName() {
    return this._name;
  }
  setName(e) {
    this._name = e;
  }
  isAbstract() {
    return this.abstract_;
  }
  setAbstract(e) {
    this.abstract_ = e;
  }
  isInterface() {
    return this.interface_;
  }
  setInterface(e) {
    this.interface_ = e;
  }
  getESuperTypes() {
    return this._eSuperTypes === null && (this._eSuperTypes = ce(this, () => this.resolveOwnFeature("eSuperTypes"))), this._eSuperTypes;
  }
  getEAllSuperTypes() {
    return Ge(this.allSuperTypesCache, "getEAllSuperTypes", () => {
      const e = [], t = /* @__PURE__ */ new Set(), s = (r) => {
        for (const n of r.getESuperTypes())
          t.has(n) || (t.add(n), s(n), e.push(n));
      };
      return s(this), e;
    });
  }
  getEIDAttribute() {
    for (const e of this.getEAllAttributes())
      if (e.isID())
        return e;
    return null;
  }
  getEStructuralFeatures() {
    if (this._eStructuralFeatures === null) {
      const e = this, t = new mr(this, () => {
        if (te.isRegistered())
          try {
            const s = te.getEClassClass();
            if (s !== e && s instanceof re && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = xe(t);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    return Ge(this.allFeaturesCache, "getEAllStructuralFeatures", () => {
      const e = [];
      for (const t of this.getEAllSuperTypes())
        e.push(...t.getEStructuralFeatures());
      return e.push(...this.getEStructuralFeatures()), e;
    });
  }
  getEAttributes() {
    return Ge(this.attributesCache, "getEAttributes", () => this.getEStructuralFeatures().filter((e) => this.isAttribute(e)));
  }
  getEAllAttributes() {
    return Ge(this.allAttributesCache, "getEAllAttributes", () => this.getEAllStructuralFeatures().filter((e) => this.isAttribute(e)));
  }
  getEReferences() {
    return Ge(this.referencesCache, "getEReferences", () => this.getEStructuralFeatures().filter((e) => this.isReference(e)));
  }
  getEAllReferences() {
    return Ge(this.allReferencesCache, "getEAllReferences", () => this.getEAllStructuralFeatures().filter((e) => this.isReference(e)));
  }
  getEAllContainments() {
    return Ge(this.allContainmentsCache, "getEAllContainments", () => this.getEAllReferences().filter((e) => e.isContainment()));
  }
  getEOperations() {
    return this._eOperations === null && (this._eOperations = ce(this, () => this.resolveOwnFeature("eOperations"))), this._eOperations;
  }
  getEAllOperations() {
    return Ge(this.allOperationsCache, "getEAllOperations", () => {
      const e = [...this.getEOperations()];
      for (const t of this.getEAllSuperTypes())
        e.push(...t.getEOperations());
      return e;
    });
  }
  /**
   * Resolves one of this class's own metamodel features (eSuperTypes,
   * eOperations, ...) on the Ecore EClass descriptor, for notifications.
   *
   * Returns null while the Ecore package is still bootstrapping, which is why
   * the lists resolve their feature lazily rather than in the constructor.
   */
  resolveOwnFeature(e) {
    if (!te.isRegistered())
      return null;
    try {
      const t = te.getEClassClass();
      if (t !== this && t instanceof re && t._eStructuralFeatures !== null)
        return t.getEStructuralFeature(e);
    } catch {
    }
    return null;
  }
  getEStructuralFeature(e) {
    if (typeof e == "string") {
      const t = this.getEAllStructuralFeatures().find((r) => r.getName() === e);
      if (t)
        return t;
      const s = this.xmlNameToFeature.get(e);
      if (s)
        return s;
      for (const r of this.getEAllSuperTypes())
        if (r instanceof re) {
          const n = r.xmlNameToFeature.get(e);
          if (n)
            return n;
        }
      return null;
    } else
      return this.getEAllStructuralFeatures()[e] || null;
  }
  /**
   * Register an XML serialization name for a feature (from ExtendedMetaData annotations)
   */
  registerXmlName(e, t) {
    this.xmlNameToFeature.set(e, t);
  }
  isSuperTypeOf(e) {
    return e.getEAllSuperTypes().includes(this);
  }
  getFeatureCount() {
    return this.getEAllStructuralFeatures().length;
  }
  getFeatureID(e) {
    return this.getEAllStructuralFeatures().indexOf(e);
  }
  getEOperation(e) {
    return this.getEAllOperations()[e] || null;
  }
  getOperationCount() {
    return this.getEAllOperations().length;
  }
  getOperationID(e) {
    return this.getEAllOperations().indexOf(e);
  }
  // EClassifier methods
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(e) {
    this.instanceClassName = e;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(e) {
    this.instanceClass = e;
  }
  getDefaultValue() {
    return null;
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(e) {
    this.instanceClassName = e;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(e) {
    if (!e || typeof e != "object" || !("eClass" in e))
      return !1;
    const t = e.eClass();
    return t === this || this.isSuperTypeOf(t);
  }
  getClassifierID() {
    return this.ePackage ? this.ePackage.getEClassifiers().indexOf(this) : -1;
  }
  // Helpers
  isAttribute(e) {
    return "getEAttributeType" in e;
  }
  isReference(e) {
    return "getEReferenceType" in e;
  }
  /**
   * Add feature to this class.
   * Uses the EList's add() method which automatically:
   * - Sets the container (eSetContainer)
   * - Sets the inverse reference (eContainingClass)
   * - Fires notifications for adapters
   * - Assigns a featureID
   */
  addFeature(e) {
    this.getEStructuralFeatures().add(e);
  }
  /**
   * Add operation to this class
   */
  addOperation(e) {
    this.getEOperations().add(e);
  }
  /**
   * Add super type
   */
  addSuperType(e) {
    this.getESuperTypes().add(e);
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEClassClass();
  }
  /**
   * Override eGet to handle class-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "abstract":
        return this.abstract_;
      case "interface":
        return this.interface_;
      case "eSuperTypes":
        return this.getESuperTypes();
      case "eStructuralFeatures":
        return this.getEStructuralFeatures();
      case "eOperations":
        return this.getEOperations();
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eGenericSuperTypes":
        return this.eGenericSuperTypes;
      case "eAnnotations":
        return this.eAnnotations;
      case "instanceClassName":
        return this.instanceClassName;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle class-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this._name = t, super.eSet(e, t);
        break;
      case "abstract":
        this.abstract_ = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "interface":
        this.interface_ = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eSuperTypes":
        he(this.getESuperTypes(), t);
        break;
      case "eStructuralFeatures":
        he(this.getEStructuralFeatures(), t);
        break;
      case "eOperations":
        he(this.getEOperations(), t);
        break;
      case "eTypeParameters":
        he(this.eTypeParameters, t);
        break;
      case "eGenericSuperTypes":
        he(this.eGenericSuperTypes, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      case "instanceClassName":
        this.instanceClassName = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class _n {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (C) => C.toLowerCase() === "true",
      toString: (C) => String(C)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (C) => parseInt(C, 10),
      toString: (C) => String(C)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (C) => {
        const A = parseInt(C, 10);
        return Math.abs(A) > Number.MAX_SAFE_INTEGER ? BigInt(C) : A;
      },
      toString: (C) => String(C)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (C) => parseFloat(C),
      toString: (C) => String(C)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const n = {
      fromString: (C) => C,
      toString: (C) => C ?? ""
    };
    this.registerByClassName("java.lang.String", n), this.registerByClassName("java.lang.Object", n), this.registerByName("EString", n);
    const a = {
      fromString: (C) => C.charAt(0) || "",
      toString: (C) => C ?? ""
    };
    this.registerByClassName("char", a), this.registerByClassName("java.lang.Character", a), this.registerByName("EChar", a), this.registerByName("ECharacterObject", a);
    const o = {
      fromString: (C) => new Date(C),
      toString: (C) => C?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", o), this.registerByName("EDate", o);
    const d = {
      fromString: (C) => C,
      // Keep as string to preserve precision
      toString: (C) => C ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", d), this.registerByClassName("java.math.BigInteger", d), this.registerByName("EBigDecimal", d), this.registerByName("EBigInteger", d);
    const y = {
      fromString: (C) => {
        if (typeof atob == "function") {
          const A = atob(C), b = new Uint8Array(A.length);
          for (let R = 0; R < A.length; R++)
            b[R] = A.charCodeAt(R);
          return b;
        }
        return new Uint8Array(Buffer.from(C, "base64"));
      },
      toString: (C) => typeof btoa == "function" ? btoa(String.fromCharCode(...C)) : Buffer.from(C).toString("base64")
    };
    this.registerByClassName("byte[]", y), this.registerByName("EByteArray", y);
    const S = {
      fromString: (C) => C,
      toString: (C) => String(C ?? "")
    };
    this.registerByName("EFeatureMapEntry", S);
  }
  /**
   * Register a converter by instanceClassName
   */
  registerByClassName(e, t) {
    this.convertersByClassName.set(e, t);
  }
  /**
   * Register a converter by DataType name
   */
  registerByName(e, t) {
    this.convertersByName.set(e, t);
  }
  /**
   * Get converter for a DataType
   */
  getConverter(e) {
    const t = e.getInstanceClassName();
    if (t) {
      const r = this.convertersByClassName.get(t);
      if (r)
        return r;
    }
    const s = e.getName();
    if (s) {
      const r = this.convertersByName.get(s);
      if (r)
        return r;
    }
    return null;
  }
  /**
   * Convert a string literal to a value using the DataType's converter.
   *
   * For an EEnum the string is resolved to the matching EEnumLiteral, and an
   * invalid value throws - same as EFactoryImpl.createFromString in Java EMF.
   * The XMI loader turns that throw into a resource error, so a single bad
   * attribute does not abort the document (see XMLHandler.setFeatureValue).
   */
  createFromString(e, t) {
    if (dt(e)) {
      if (t == null)
        return null;
      const r = this.resolveEEnumLiteral(e, t);
      if (!r)
        throw new Error(`The value '${t}' is not a valid enumerator of '${e.getName()}'`);
      return r.getInstance() ?? r;
    }
    const s = this.getConverter(e);
    return s ? s.fromString(t) : t;
  }
  /**
   * Convert a value to a string literal using the DataType's converter.
   *
   * For an EEnum the literal string is written, not the name - Java EMF
   * serializes enum values via EEnumLiteralImpl.toString(), which is getLiteral().
   */
  convertToString(e, t) {
    if (t == null)
      return "";
    if (dt(e)) {
      const r = this.findEEnumLiteral(e, t);
      if (r)
        return r.getLiteral() ?? "";
    }
    const s = this.getConverter(e);
    return s ? s.toString(t) : String(t);
  }
  /**
   * Resolve a serialized enum value to its EEnumLiteral.
   *
   * Java EMF only ever looks up by literal. We additionally accept the name
   * and the ordinal, because both are unambiguous and both occur in files
   * written by non-conforming serializers - rejecting them would make those
   * models unloadable for no gain. Saving always writes the literal back, so
   * a load/save cycle normalizes the file.
   */
  resolveEEnumLiteral(e, t) {
    const s = e.getEEnumLiteralByLiteral(t);
    if (s)
      return s;
    const r = e.getEEnumLiteral(t);
    if (r)
      return r;
    const n = t.trim();
    return /^-?\d+$/.test(n) ? e.getEEnumLiteral(Number(n)) : null;
  }
  /**
   * Resolve an enum value to its EEnumLiteral. Accepts the literal itself as
   * well as the `instance` a generated enum carries.
   */
  findEEnumLiteral(e, t) {
    if (t && typeof t == "object" && typeof t.getLiteral == "function")
      return t;
    for (const s of e.getELiterals())
      if (s.getInstance() === t)
        return s;
    return null;
  }
  /**
   * Check if a converter is registered for a DataType
   */
  hasConverter(e) {
    return this.getConverter(e) !== null;
  }
  /**
   * Get all registered classNames
   */
  getRegisteredClassNames() {
    return Array.from(this.convertersByClassName.keys());
  }
  /**
   * Get all registered names
   */
  getRegisteredNames() {
    return Array.from(this.convertersByName.keys());
  }
}
const j = new _n();
class Yt {
  constructor() {
    this.ePackage = null, this.creators = /* @__PURE__ */ new Map(), this.eAnnotations = ce(this);
  }
  getEPackage() {
    if (!this.ePackage)
      throw new Error("EPackage not set on factory");
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e, e && typeof e.setEFactoryInstance == "function" && e.setEFactoryInstance(this);
  }
  create(e) {
    const t = this.creators.get(e);
    return t ? t() : this.createDynamic(e);
  }
  /**
   * Create a dynamic EObject instance
   */
  createDynamic(e) {
    if (e.isAbstract())
      throw new Error(`Cannot instantiate abstract class: ${e.getName()}`);
    if (e.isInterface())
      throw new Error(`Cannot instantiate interface: ${e.getName()}`);
    return new Bs(e);
  }
  createFromString(e, t) {
    return j.createFromString(e, t);
  }
  convertToString(e, t) {
    return j.convertToString(e, t);
  }
  /**
   * Register a creator function for a specific EClass
   */
  registerCreator(e, t) {
    this.creators.set(e, t);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return null;
  }
  // EObject methods
  eClass() {
    return te.getEFactoryClass();
  }
  eResource() {
    return null;
  }
  eContainer() {
    return null;
  }
  eContainingFeature() {
    return null;
  }
  eContainmentFeature() {
    return null;
  }
  eContents() {
    return [];
  }
  eAllContents() {
    return [][Symbol.iterator]();
  }
  eIsProxy() {
    return !1;
  }
  eCrossReferences() {
    return [];
  }
  eGet(e) {
    return null;
  }
  eSet(e, t) {
  }
  eIsSet(e) {
    return !1;
  }
  eUnset(e) {
  }
  eInvoke(e, t) {
    return null;
  }
}
class wn extends Ie {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && te.isRegistered()) {
      const t = te.getEPackageClass();
      this.feature = t.getEStructuralFeature("eClassifiers");
    }
    return this.feature;
  }
  didAdd(e, t) {
    "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      "setEPackage" in s && typeof s.setEPackage == "function" && s.setEPackage(this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    "setEPackage" in s && typeof s.setEPackage == "function" && s.setEPackage(null), "setEPackage" in t && typeof t.setEPackage == "function" && t.setEPackage(this.pkg), super.didSet(e, t, s);
  }
}
class In extends Ie {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && te.isRegistered()) {
      const e = te.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof De && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof De && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof De && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof De && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof De && (s.eSuperPackage = null), t instanceof De && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class De extends Re {
  /**
   * Constructor
   */
  constructor(e, t) {
    super(), this.name = null, this.nsURI = null, this.nsPrefix = null, this.eFactoryInstance = null, this._eClassifiers = null, this._eSubpackages = null, this.eSuperPackage = null, this.eAnnotations = ce(this), e && (this.nsURI = e), t && (this.eFactoryInstance = t);
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getNsURI() {
    return this.nsURI;
  }
  setNsURI(e) {
    this.nsURI = e;
  }
  getNsPrefix() {
    return this.nsPrefix;
  }
  setNsPrefix(e) {
    this.nsPrefix = e;
  }
  getEFactoryInstance() {
    if (!this.eFactoryInstance) {
      const e = new Yt();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = xe(new wn(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = xe(new In(this))), this._eSubpackages;
  }
  getESuperPackage() {
    return this.eSuperPackage;
  }
  getEClassifier(e) {
    const t = this.getEClassifiers();
    for (const s of t)
      if (typeof s.getName == "function") {
        if (s.getName() === e)
          return s;
      } else if (typeof s.eGet == "function" && typeof s.eClass == "function") {
        const r = s.eClass();
        if (r) {
          const n = r.getEStructuralFeature?.("name");
          if (n && s.eGet(n) === e)
            return s;
        }
      }
    return null;
  }
  /**
   * Add classifier to this package
   */
  addClassifier(e) {
    this.getEClassifiers().add(e);
  }
  /**
   * Add subpackage
   */
  addSubpackage(e) {
    this.getESubpackages().add(e);
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return null;
  }
  eClass() {
    return te.getEPackageClass();
  }
  /**
   * Override eGet to handle package-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "nsURI":
        return this.nsURI;
      case "nsPrefix":
        return this.nsPrefix;
      case "eClassifiers":
        return this.getEClassifiers();
      case "eSubpackages":
        return this.getESubpackages();
      case "eSuperPackage":
        return this.eSuperPackage;
      case "eFactoryInstance":
        return this.eFactoryInstance;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle package-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "nsURI":
        this.nsURI = t, super.eSet(e, t);
        break;
      case "nsPrefix":
        this.nsPrefix = t, super.eSet(e, t);
        break;
      case "eClassifiers":
        if (Array.isArray(t) || t && typeof t[Symbol.iterator] == "function") {
          const r = this.getEClassifiers();
          r.clear();
          for (const n of t)
            r.add(n);
        }
        break;
      case "eSubpackages":
        if (Array.isArray(t) || t && typeof t[Symbol.iterator] == "function") {
          const r = this.getESubpackages();
          r.clear();
          for (const n of t)
            r.add(n);
        }
        break;
      case "eSuperPackage":
        this.eSuperPackage = t, super.eSet(e, t);
        break;
      case "eFactoryInstance":
        this.eFactoryInstance = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class js extends Re {
  constructor() {
    super(...arguments), this.name = null, this.changeable = !0, this.volatile = !1, this.transient = !1, this.defaultValueLiteral = null, this.unsettable = !1, this.derived = !1, this.eType = null, this.eGenericType = null, this.eContainingClass = null, this.lowerBound = 0, this.upperBound = 1, this.featureID = -1, this.eAnnotations = ce(this);
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  isChangeable() {
    return this.changeable;
  }
  setChangeable(e) {
    this.changeable = e;
  }
  isVolatile() {
    return this.volatile;
  }
  setVolatile(e) {
    this.volatile = e;
  }
  isTransient() {
    return this.transient;
  }
  setTransient(e) {
    this.transient = e;
  }
  getDefaultValueLiteral() {
    return this.defaultValueLiteral;
  }
  setDefaultValueLiteral(e) {
    this.defaultValueLiteral = e;
  }
  isUnsettable() {
    return this.unsettable;
  }
  setUnsettable(e) {
    this.unsettable = e;
  }
  isDerived() {
    return this.derived;
  }
  setDerived(e) {
    this.derived = e;
  }
  getEType() {
    if (this.eType && We(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), n = r.indexOf("#");
        if (n > 0) {
          const a = r.substring(0, n), o = r.substring(n + 1), d = [we.INSTANCE];
          let y = this.eResource()?.getResourceSet();
          if (!y) {
            let S = this.eContainingClass;
            for (; S; ) {
              if (typeof S.eResource == "function") {
                const C = S.eResource();
                if (C) {
                  y = C.getResourceSet();
                  break;
                }
              }
              S = S.getEPackage?.() ?? S.getESuperPackage?.() ?? S.eContainer?.();
            }
          }
          y && d.push(y.getPackageRegistry());
          for (const S of d) {
            const C = S.getEPackage(a);
            if (C) {
              const M = Ze(C, o);
              if (M)
                return this.eType = M, this.eType;
            }
            let A = a;
            const b = A.lastIndexOf("/");
            b >= 0 && (A = A.substring(b + 1));
            const R = A.indexOf(".");
            if (R > 0 && (A = A.substring(0, R)), A)
              for (const M of S.keys()) {
                const U = S.getEPackage(M);
                if (U && U.getName() === A) {
                  const _ = Ze(U, o);
                  if (_)
                    return this.eType = _, this.eType;
                }
              }
          }
        }
      }
    }
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  setEType(e) {
    this.eType = e;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(e) {
    this.eContainingClass = e;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getFeatureID() {
    return this.featureID;
  }
  setFeatureID(e) {
    this.featureID = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEStructuralFeatureClass();
  }
  /**
   * Override eGet to handle feature-specific properties
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "changeable":
        return this.changeable;
      case "volatile":
        return this.volatile;
      case "transient":
        return this.transient;
      case "defaultValueLiteral":
        return this.defaultValueLiteral;
      case "unsettable":
        return this.unsettable;
      case "derived":
        return this.derived;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle feature-specific properties
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "changeable":
        this.changeable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "volatile":
        this.volatile = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "transient":
        this.transient = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "defaultValueLiteral":
        this.defaultValueLiteral = t, super.eSet(e, t);
        break;
      case "unsettable":
        this.unsettable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "derived":
        this.derived = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eType":
        this.eType = t, super.eSet(e, t);
        break;
      case "eGenericType":
        this.eGenericType = t, super.eSet(e, t);
        break;
      case "lowerBound":
        this.lowerBound = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "upperBound":
        this.upperBound = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class ee extends js {
  constructor() {
    super(...arguments), this.id = !1;
  }
  isID() {
    return this.id;
  }
  setID(e) {
    this.id = e;
  }
  getEAttributeType() {
    const e = this.getEType();
    return !e || !("isSerializable" in e) ? null : e;
  }
  getDefaultValue() {
    const e = this.getDefaultValueLiteral(), t = this.getEAttributeType();
    if (!t)
      return null;
    if (e === null)
      return t.getDefaultValue();
    const s = t.getEPackage()?.getEFactoryInstance();
    return s ? s.createFromString(t, e) : e;
  }
  eClass() {
    return te.getEAttributeClass();
  }
  /**
   * Override eGet to handle attribute-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "iD":
        return this.id;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle attribute-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "iD":
        this.id = t === !0 || t === "true", super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class le extends js {
  constructor() {
    super(...arguments), this.containment = !1, this.resolveProxies = !0, this.eOpposite = null, this.eKeys = ce(this);
  }
  isContainment() {
    return this.containment;
  }
  setContainment(e) {
    this.containment = e;
  }
  isContainer() {
    return this.eOpposite ? this.eOpposite.isContainment() : !1;
  }
  isResolveProxies() {
    return this.resolveProxies;
  }
  setResolveProxies(e) {
    this.resolveProxies = e;
  }
  getEOpposite() {
    return this.eOpposite;
  }
  setEOpposite(e) {
    this.eOpposite !== e && (this.eOpposite && this.eOpposite.getEOpposite() === this && (this.eOpposite.eOpposite = null), this.eOpposite = e, e && e.getEOpposite() !== this && e.setEOpposite(this));
  }
  getEReferenceType() {
    const e = this.getEType();
    if (!e)
      throw new Error("Reference type not set");
    if (!("getEStructuralFeatures" in e))
      throw new Error("Reference type must be EClass");
    return e;
  }
  getEKeys() {
    return this.eKeys;
  }
  addEKey(e) {
    this.eKeys.add(e);
  }
  getDefaultValue() {
    return null;
  }
  eClass() {
    return te.getEReferenceClass();
  }
  /**
   * Override eGet to handle reference-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "containment":
        return this.containment;
      case "resolveProxies":
        return this.resolveProxies;
      case "eOpposite":
        return this.eOpposite;
      case "eKeys":
        return this.eKeys;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle reference-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "containment":
        this.containment = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "resolveProxies":
        this.resolveProxies = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eOpposite":
        this.eOpposite = t, super.eSet(e, t);
        break;
      case "eKeys":
        he(this.eKeys, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class ne extends Re {
  constructor() {
    super(...arguments), this.name = null, this.instanceClassName = null, this.instanceClass = null, this.ePackage = null, this.serializable = !0, this.eAnnotations = ce(this), this.eTypeParameters = ce(this);
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getInstanceClassName() {
    return this.instanceClassName;
  }
  setInstanceClassName(e) {
    this.instanceClassName = e;
  }
  getInstanceClass() {
    return this.instanceClass;
  }
  setInstanceClass(e) {
    this.instanceClass = e;
  }
  getDefaultValue() {
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return !1;
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
        return 0;
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return 0;
      case "java.lang.String":
        return null;
      default:
        return null;
    }
  }
  getInstanceTypeName() {
    return this.instanceClassName;
  }
  setInstanceTypeName(e) {
    this.instanceClassName = e;
  }
  getEPackage() {
    return this.ePackage;
  }
  setEPackage(e) {
    this.ePackage = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  isInstance(e) {
    const t = typeof e;
    switch (this.instanceClassName) {
      case "boolean":
      case "java.lang.Boolean":
        return t === "boolean";
      case "int":
      case "java.lang.Integer":
      case "long":
      case "java.lang.Long":
      case "short":
      case "java.lang.Short":
      case "byte":
      case "java.lang.Byte":
      case "float":
      case "java.lang.Float":
      case "double":
      case "java.lang.Double":
        return t === "number";
      case "java.lang.String":
        return t === "string";
      default:
        return !1;
    }
  }
  getClassifierID() {
    return this.ePackage ? this.ePackage.getEClassifiers().indexOf(this) : -1;
  }
  isSerializable() {
    return this.serializable;
  }
  setSerializable(e) {
    this.serializable = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEDataTypeClass();
  }
  /**
   * Override eGet to handle datatype-specific features
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "instanceClassName":
        return this.instanceClassName;
      case "serializable":
        return this.serializable;
      case "eAnnotations":
        return this.eAnnotations;
      case "eTypeParameters":
        return this.eTypeParameters;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Override eSet to handle datatype-specific features
   */
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t, super.eSet(e, t);
        break;
      case "instanceClassName":
        this.instanceClassName = t, super.eSet(e, t);
        break;
      case "serializable":
        this.serializable = t === !0 || t === "true", super.eSet(e, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      case "eTypeParameters":
        he(this.eTypeParameters, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
(() => {
  const l = new ne();
  return l.setName("EString"), l.setInstanceClassName("java.lang.String"), l;
})();
(() => {
  const l = new ne();
  return l.setName("EInt"), l.setInstanceClassName("int"), l;
})();
(() => {
  const l = new ne();
  return l.setName("EBoolean"), l.setInstanceClassName("boolean"), l;
})();
(() => {
  const l = new ne();
  return l.setName("EFloat"), l.setInstanceClassName("float"), l;
})();
(() => {
  const l = new ne();
  return l.setName("EDouble"), l.setInstanceClassName("double"), l;
})();
(() => {
  const l = new ne();
  return l.setName("ELong"), l.setInstanceClassName("long"), l;
})();
(() => {
  const l = new ne();
  return l.setName("EDate"), l.setInstanceClassName("java.util.Date"), l;
})();
class An {
  constructor(e, t) {
    this.resources = new Ie(), this.packageRegistry = e || this.createDefaultPackageRegistry(), this.resourceFactoryRegistry = t || ct.INSTANCE_FACTORY_REGISTRY, this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(e, t) {
    const s = this.resources.find((a) => {
      const o = a.getURI();
      return o && o.toString() === e.toString();
    });
    if (s)
      return s;
    const r = this.delegatedGetResource(e, t);
    if (r)
      return r;
    if (!t)
      return null;
    const n = this.createResource(e);
    return n && n.load().catch((a) => {
      console.error(`Failed to load resource ${e}:`, a);
    }), n;
  }
  /**
   * Returns a resolved resource available outside of the resource set.
   * Looks up the URI in the package registry.
   * This is called by getResource when the URI cannot be resolved
   * based on the existing contents of the resource set.
   */
  delegatedGetResource(e, t) {
    const s = e.toString(), r = this.packageRegistry.getEPackage(s);
    if (r) {
      if ("eResource" in r && typeof r.eResource == "function") {
        const n = r.eResource();
        if (n)
          return n;
      }
      return this.createSyntheticResourceForPackage(r, e);
    }
    return null;
  }
  /**
   * Creates a synthetic resource for a package that doesn't have one.
   * This allows resolving fragment references like //EString within the package.
   */
  createSyntheticResourceForPackage(e, t) {
    const s = this.resources.find((n) => "_syntheticPackage" in n ? n._syntheticPackage === e : !1);
    if (s)
      return s;
    const r = new bn(t, e);
    return r.setResourceSet(this), this.resources.push(r), r;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(e, t) {
    const s = this.resources.find((a) => {
      const o = a.getURI();
      return o && o.toString() === e.toString();
    });
    if (s)
      return s;
    const r = this.delegatedGetResource(e, t);
    if (r)
      return r;
    if (!t)
      return null;
    const n = this.createResource(e);
    return n && await n.load(), n;
  }
  createResource(e) {
    const t = this.resourceFactoryRegistry.getFactory(e);
    let s;
    return t ? s = t.createResource(e) : s = new Xt(e), "setResourceSet" in s && s.setResourceSet(this), this.resources.push(s), s;
  }
  getEObject(e, t) {
    const s = e.fragment();
    if (!s)
      return null;
    const r = Y.createURI(e.toString().split("#")[0]), n = this.getResource(r, t);
    return n ? n.getEObject(s) : null;
  }
  getPackageRegistry() {
    return this.packageRegistry;
  }
  setPackageRegistry(e) {
    this.packageRegistry = e;
  }
  getResourceFactoryRegistry() {
    return this.resourceFactoryRegistry;
  }
  setResourceFactoryRegistry(e) {
    this.resourceFactoryRegistry = e;
  }
  getURIConverter() {
    return this.uriConverter;
  }
  setURIConverter(e) {
    this.uriConverter = e;
  }
  /**
   * Iteratively resolves proxy references by loading packages via getResourceAsync.
   * Loops until no more progress is made or maxDepth is reached.
   */
  async resolveProxiesAsync(e = -1) {
    let t = 0, s = !0, r = 0;
    for (; s && !(e >= 0 && r >= e); ) {
      s = !1;
      const n = this.collectUnresolvedNsURIs();
      if (n.size === 0)
        break;
      for (const a of n)
        try {
          const o = Y.createURI(a);
          (await this.getResourceAsync(o, !0))?.isLoaded() && (t++, s = !0);
        } catch (o) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${a}:`, o);
        }
      r++;
    }
    return t;
  }
  /**
   * Collects nsURIs from unresolved proxy references across all resources.
   */
  collectUnresolvedNsURIs() {
    const e = /* @__PURE__ */ new Set();
    for (const t of this.resources)
      for (const s of t.getContents())
        this.collectProxyURIs(s, e);
    return e;
  }
  /**
   * Recursively walks EObject tree and collects nsURIs from proxy references.
   */
  collectProxyURIs(e, t) {
    const s = e.eClass();
    if (s) {
      for (const r of s.getEAllReferences())
        try {
          const n = e.eGet(r);
          if (!n)
            continue;
          if (r.isMany() && Array.isArray(n))
            for (const a of n)
              this.checkProxy(a, t);
          else typeof n == "object" && "eClass" in n && this.checkProxy(n, t);
        } catch {
        }
      for (const r of e.eContents())
        this.collectProxyURIs(r, t);
    }
  }
  /**
   * Checks if an EObject is a proxy and extracts the nsURI.
   */
  checkProxy(e, t) {
    if (typeof e.eIsProxy == "function" && e.eIsProxy()) {
      const s = e.eProxyURI?.();
      if (s) {
        const n = (typeof s == "string" ? s : s.toString()).split("#")[0];
        n && !this.packageRegistry.has(n) && t.add(n);
      }
    }
  }
  /**
   * Create default package registry that delegates to global EPackageRegistry.INSTANCE
   */
  createDefaultPackageRegistry() {
    const e = /* @__PURE__ */ new Map();
    function t(s) {
      for (const r of s.getESubpackages()) {
        const n = r.getNsURI();
        n && e.set(n, r), t(r);
      }
    }
    return {
      getEPackage(s) {
        const r = e.get(s);
        return r ? "getEPackage" in r ? r.getEPackage() : r : we.INSTANCE.getEPackage(s);
      },
      getEFactory(s) {
        const r = this.getEPackage(s);
        return r ? r.getEFactoryInstance() : null;
      },
      get(s) {
        return e.get(s) || we.INSTANCE.get(s);
      },
      set(s, r) {
        e.set(s, r), r && !("getEPackage" in r) && typeof r.getESubpackages == "function" && t(r);
      },
      registerPackage(s) {
        this.set(ks(s), s);
      },
      delete(s) {
        return e.delete(s);
      },
      has(s) {
        return e.has(s) || we.INSTANCE.has(s);
      },
      keys() {
        return e.keys();
      },
      values() {
        return e.values();
      }
    };
  }
  /**
   * Create default URI converter
   */
  createDefaultURIConverter() {
    const e = /* @__PURE__ */ new Map();
    return {
      normalize(t) {
        for (const [s, r] of e.entries()) {
          const n = s.toString(), a = t.toString();
          if (a.startsWith(n)) {
            const o = a.substring(n.length);
            return Y.createURI(r.toString() + o);
          }
        }
        return t;
      },
      async createInputStream(t) {
        throw new Error("createInputStream not implemented");
      },
      async createOutputStream(t) {
        throw new Error("createOutputStream not implemented");
      },
      async exists(t) {
        return !1;
      },
      async delete(t) {
        throw new Error("delete not implemented");
      },
      getURIMap() {
        return e;
      }
    };
  }
}
class bn {
  constructor(e, t) {
    this.resourceSet = null, this.uri = e, this._syntheticPackage = t;
    const s = new Ie(null, null);
    s.add(t), this._contents = xe(s);
  }
  getResourceSet() {
    return this.resourceSet;
  }
  setResourceSet(e) {
    this.resourceSet = e;
  }
  getURI() {
    return this.uri;
  }
  setURI(e) {
    e && (this.uri = e);
  }
  getContents() {
    return this._contents;
  }
  getAllContents() {
    return this._contents.toArray()[Symbol.iterator]();
  }
  getEObject(e) {
    let t = e;
    for (; t.startsWith("/"); )
      t = t.substring(1);
    if (!t)
      return this._syntheticPackage;
    const s = t.split("/"), r = Ze(this._syntheticPackage, t);
    if (r)
      return r;
    if (s.length >= 2) {
      let n = this._syntheticPackage;
      for (let d = 0; d < s.length - 2; d++) {
        const y = n.getESubpackages();
        let S = null;
        for (let C = 0; C < y.length; C++)
          if (y.get(C).getName() === s[d]) {
            S = y.get(C);
            break;
          }
        if (!S)
          return null;
        n = S;
      }
      const a = s[s.length - 2], o = n.getEClassifier(a);
      if (o && "getEStructuralFeature" in o) {
        const d = o.getEStructuralFeature(s[s.length - 1]);
        if (d)
          return d;
      }
    }
    return null;
  }
  getURIFragment(e) {
    if (e === this._syntheticPackage)
      return "/";
    for (const t of this._syntheticPackage.getEClassifiers())
      if (t === e)
        return "//" + t.getName();
    return "";
  }
  async save(e) {
  }
  async load(e) {
  }
  isLoaded() {
    return !0;
  }
  unload() {
  }
  isModified() {
    return !1;
  }
  setModified(e) {
  }
  getErrors() {
    return [];
  }
  getWarnings() {
    return [];
  }
}
class vn extends Re {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = ce(this), this.references = ce(this), this.eAnnotations = ce(this);
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = te.getEAnnotationClass().getEStructuralFeature("details"), s = te.getEStringToStringMapEntryClass();
      this._detailsMap = Pr(this, t, s);
    }
    return this._detailsMap;
  }
  getSource() {
    return this.source;
  }
  setSource(e) {
    this.source = e;
  }
  getDetails() {
    return this.getOrCreateDetailsMap();
  }
  getEModelElement() {
    return this.eModelElement;
  }
  setEModelElement(e) {
    this.eModelElement = e;
  }
  getContents() {
    return this.contents;
  }
  getReferences() {
    return this.references;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEAnnotationClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "source":
        return this.source;
      case "details":
        return this.getOrCreateDetailsMap();
      case "eModelElement":
        return this.eModelElement;
      case "contents":
        return this.contents;
      case "references":
        return this.references;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "source":
        this.source = t, super.eSet(e, t);
        break;
      case "details":
        if (t instanceof Map) {
          const r = this.getOrCreateDetailsMap();
          r.clear();
          for (const [n, a] of t)
            r.putByKey(n, a);
        }
        super.eSet(e, t);
        break;
      case "eModelElement":
        this.eModelElement = t, super.eSet(e, t);
        break;
      case "contents":
        he(this.contents, t);
        break;
      case "references":
        he(this.references, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class $s extends Re {
  constructor() {
    super(...arguments), this._name = null, this._value = 0, this.instance = null, this.literal = null, this.eEnum = null, this.eAnnotations = ce(this);
  }
  getName() {
    return this._name;
  }
  setName(e) {
    this._name = e;
  }
  getValue() {
    return this._value;
  }
  setValue(e) {
    this._value = e;
  }
  getInstance() {
    return this.instance;
  }
  setInstance(e) {
    this.instance = e;
  }
  /**
   * Returns the literal string, falling back to the name when no explicit
   * literal is set. In .ecore files the `literal` attribute is usually
   * omitted, so without this fallback lookups by literal would never match.
   */
  getLiteral() {
    return this.literal ?? this._name;
  }
  setLiteral(e) {
    this.literal = e;
  }
  getEEnum() {
    return this.eEnum;
  }
  setEEnum(e) {
    this.eEnum = e;
  }
  // EModelElement methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEEnumLiteralClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this._name;
      case "value":
        return this._value;
      case "instance":
        return this.instance;
      case "literal":
        return this.literal;
      case "eEnum":
        return this.eEnum;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this._name = t, super.eSet(e, t);
        break;
      case "value":
        this._value = typeof t == "number" ? t : parseInt(t, 10), super.eSet(e, t);
        break;
      case "instance":
        this.instance = t, super.eSet(e, t);
        break;
      case "literal":
        this.literal = t, super.eSet(e, t);
        break;
      case "eEnum":
        this.eEnum = t, super.eSet(e, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class xn extends ne {
  constructor() {
    super(...arguments), this.eLiterals = ce(this);
  }
  getELiterals() {
    return this.eLiterals;
  }
  /**
   * Returns the literal with the given name or ordinal value.
   */
  getEEnumLiteral(e) {
    return typeof e == "string" ? this.eLiterals.find((t) => t.getName() === e) || null : this.eLiterals.find((t) => t.getValue() === e) || null;
  }
  /**
   * Returns the literal with the given literal string.
   */
  getEEnumLiteralByLiteral(e) {
    return this.eLiterals.find((t) => t.getLiteral() === e) || null;
  }
  /**
   * Add a literal to this enum.
   */
  addLiteral(e) {
    e.setEEnum(this), this.eLiterals.push(e);
  }
  eClass() {
    return te.getEEnumClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "eLiterals":
        return this.eLiterals;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "eLiterals":
        if (he(this.eLiterals, t))
          for (const r of this.eLiterals)
            r instanceof $s && r.setEEnum(this);
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Rn extends Re {
  constructor() {
    super(...arguments), this.name = null, this.eContainingClass = null, this.eType = null, this.eParameters = ce(this), this.eExceptions = ce(this), this.eAnnotations = ce(this), this.eGenericType = null, this.eTypeParameters = ce(this), this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEContainingClass() {
    return this.eContainingClass;
  }
  setEContainingClass(e) {
    this.eContainingClass = e;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  getETypeParameters() {
    return this.eTypeParameters;
  }
  setEType(e) {
    this.eType = e;
  }
  getEParameters() {
    return this.eParameters;
  }
  addParameter(e) {
    this.eParameters.add(e);
  }
  getEExceptions() {
    return this.eExceptions;
  }
  addException(e) {
    this.eExceptions.add(e);
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getOperationID() {
    return this.eContainingClass ? this.eContainingClass.getOperationID(this) : -1;
  }
  isOverrideOf(e) {
    if (this.name !== e.getName())
      return !1;
    const t = this.eParameters, s = e.getEParameters();
    if (t.length !== s.length)
      return !1;
    for (let r = 0; r < t.length; r++) {
      const n = t[r].getEType(), a = s[r].getEType();
      if (n !== a)
        return !1;
    }
    return !this.eContainingClass || !e.getEContainingClass() ? !1 : this.eContainingClass.getEAllSuperTypes().includes(e.getEContainingClass());
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(e) {
    this.ordered = e;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(e) {
    this.unique = e;
  }
  // EObject methods
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEOperationClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eTypeParameters":
        return this.eTypeParameters;
      case "eParameters":
        return this.eParameters;
      case "eExceptions":
        return this.eExceptions;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eType":
        this.eType = t;
        break;
      case "eGenericType":
        this.eGenericType = t;
        break;
      case "eTypeParameters":
        he(this.eTypeParameters, t);
        break;
      case "eParameters":
        he(this.eParameters, t);
        break;
      case "eExceptions":
        he(this.eExceptions, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      case "ordered":
        this.ordered = t === !0 || t === "true";
        break;
      case "unique":
        this.unique = t === !0 || t === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(t);
        break;
      case "upperBound":
        this.upperBound = Number(t);
        break;
    }
    super.eSet(e, t);
  }
}
class Pn extends Re {
  constructor() {
    super(...arguments), this.name = null, this.eType = null, this.eOperation = null, this.eAnnotations = ce(this), this.eGenericType = null, this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEType() {
    return !this.eType && this.eGenericType ? this.eGenericType.getERawType() : this.eType;
  }
  getEGenericType() {
    return this.eGenericType;
  }
  setEGenericType(e) {
    this.eGenericType = e;
  }
  setEType(e) {
    this.eType = e;
  }
  getEOperation() {
    return this.eOperation;
  }
  setEOperation(e) {
    this.eOperation = e;
  }
  isOrdered() {
    return this.ordered;
  }
  setOrdered(e) {
    this.ordered = e;
  }
  isUnique() {
    return this.unique;
  }
  setUnique(e) {
    this.unique = e;
  }
  isMany() {
    return this.upperBound < 0 || this.upperBound > 1;
  }
  isRequired() {
    return this.lowerBound >= 1;
  }
  getLowerBound() {
    return this.lowerBound;
  }
  setLowerBound(e) {
    this.lowerBound = e;
  }
  getUpperBound() {
    return this.upperBound;
  }
  setUpperBound(e) {
    this.upperBound = e;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getEParameterClass();
  }
  /**
   * Reflective get - binds the declared fields to the reflective API, so the
   * XMI loader and typed accessors see the same state.
   */
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eType":
        return this.eType;
      case "eGenericType":
        return this.eGenericType;
      case "eAnnotations":
        return this.eAnnotations;
      case "ordered":
        return this.ordered;
      case "unique":
        return this.unique;
      case "lowerBound":
        return this.lowerBound;
      case "upperBound":
        return this.upperBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eType":
        this.eType = t;
        break;
      case "eGenericType":
        this.eGenericType = t;
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
      case "ordered":
        this.ordered = t === !0 || t === "true";
        break;
      case "unique":
        this.unique = t === !0 || t === "true";
        break;
      case "lowerBound":
        this.lowerBound = Number(t);
        break;
      case "upperBound":
        this.upperBound = Number(t);
        break;
    }
    super.eSet(e, t);
  }
}
class Fn extends Re {
  constructor() {
    super(...arguments), this.eClassifier = null, this.eTypeParameter = null, this.eTypeArguments = ce(this), this.eUpperBound = null, this.eLowerBound = null;
  }
  getEClassifier() {
    return this.eClassifier;
  }
  setEClassifier(e) {
    this.eClassifier = e;
  }
  getETypeParameter() {
    return this.eTypeParameter;
  }
  setETypeParameter(e) {
    this.eTypeParameter = e;
  }
  getETypeArguments() {
    return this.eTypeArguments;
  }
  getEUpperBound() {
    return this.eUpperBound;
  }
  setEUpperBound(e) {
    this.eUpperBound = e;
  }
  getELowerBound() {
    return this.eLowerBound;
  }
  setELowerBound(e) {
    this.eLowerBound = e;
  }
  /**
   * The erasure of this generic type. For a classifier reference that is the
   * classifier itself; for a type parameter it is the erasure of its first
   * bound, mirroring Java EMF's EGenericTypeImpl.getERawType().
   */
  getERawType() {
    if (this.eClassifier)
      return this.eClassifier;
    if (this.eTypeParameter) {
      const e = this.eTypeParameter.getEBounds();
      if (e.length > 0)
        return e[0].getERawType();
    }
    return this.eUpperBound ? this.eUpperBound.getERawType() : te.getEObjectClass();
  }
  eClass() {
    return te.getEGenericTypeClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "eClassifier":
        return this.eClassifier;
      case "eTypeParameter":
        return this.eTypeParameter;
      case "eTypeArguments":
        return this.eTypeArguments;
      case "eUpperBound":
        return this.eUpperBound;
      case "eLowerBound":
        return this.eLowerBound;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "eClassifier":
        this.eClassifier = t;
        break;
      case "eTypeParameter":
        this.eTypeParameter = t;
        break;
      case "eTypeArguments":
        he(this.eTypeArguments, t);
        break;
      case "eUpperBound":
        this.eUpperBound = t;
        break;
      case "eLowerBound":
        this.eLowerBound = t;
        break;
    }
    super.eSet(e, t);
  }
}
class kn extends Re {
  constructor() {
    super(...arguments), this.name = null, this.eBounds = ce(this), this.eAnnotations = ce(this);
  }
  getName() {
    return this.name;
  }
  setName(e) {
    this.name = e;
  }
  getEBounds() {
    return this.eBounds;
  }
  getEAnnotations() {
    return this.eAnnotations;
  }
  getEAnnotation(e) {
    return this.eAnnotations.find((t) => t.getSource() === e) || null;
  }
  eClass() {
    return te.getETypeParameterClass();
  }
  eGet(e) {
    switch (e.getName()) {
      case "name":
        return this.name;
      case "eBounds":
        return this.eBounds;
      case "eAnnotations":
        return this.eAnnotations;
      default:
        return super.eGet(e);
    }
  }
  eSet(e, t) {
    switch (e.getName()) {
      case "name":
        this.name = t;
        break;
      case "eBounds":
        he(this.eBounds, t);
        break;
      case "eAnnotations":
        he(this.eAnnotations, t);
        break;
    }
    super.eSet(e, t);
  }
}
const Bn = "ecore.xml.type";
let nt = null;
function Mn() {
  return nt || (nt = new On(), nt.initialize(), we.INSTANCE.set(Gs, nt)), nt;
}
const Dn = [
  // Commonly used
  ["AnySimpleType", "java.lang.Object"],
  ["AnyURI", "java.lang.String"],
  ["Base64Binary", "byte[]"],
  ["Boolean", "boolean"],
  ["BooleanObject", "java.lang.Boolean"],
  ["Byte", "byte"],
  ["ByteObject", "java.lang.Byte"],
  ["Date", "javax.xml.datatype.XMLGregorianCalendar"],
  ["DateTime", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Decimal", "java.math.BigDecimal"],
  ["Double", "double"],
  ["DoubleObject", "java.lang.Double"],
  ["Duration", "javax.xml.datatype.Duration"],
  ["ENTITIES", "java.util.List"],
  ["ENTITIESBase", "java.util.List"],
  ["ENTITY", "java.lang.String"],
  ["Float", "float"],
  ["FloatObject", "java.lang.Float"],
  ["GDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GMonthDay", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYear", "javax.xml.datatype.XMLGregorianCalendar"],
  ["GYearMonth", "javax.xml.datatype.XMLGregorianCalendar"],
  ["HexBinary", "byte[]"],
  ["ID", "java.lang.String"],
  ["IDREF", "java.lang.String"],
  ["IDREFS", "java.util.List"],
  ["IDREFSBase", "java.util.List"],
  ["Int", "int"],
  ["Integer", "java.math.BigInteger"],
  ["IntObject", "java.lang.Integer"],
  ["Language", "java.lang.String"],
  ["Long", "long"],
  ["LongObject", "java.lang.Long"],
  ["Name", "java.lang.String"],
  ["NCName", "java.lang.String"],
  ["NegativeInteger", "java.math.BigInteger"],
  ["NMTOKEN", "java.lang.String"],
  ["NMTOKENS", "java.util.List"],
  ["NMTOKENSBase", "java.util.List"],
  ["NonNegativeInteger", "java.math.BigInteger"],
  ["NonPositiveInteger", "java.math.BigInteger"],
  ["NormalizedString", "java.lang.String"],
  ["NOTATION", "javax.xml.namespace.QName"],
  ["PositiveInteger", "java.math.BigInteger"],
  ["QName", "javax.xml.namespace.QName"],
  ["Short", "short"],
  ["ShortObject", "java.lang.Short"],
  ["String", "java.lang.String"],
  ["Time", "javax.xml.datatype.XMLGregorianCalendar"],
  ["Token", "java.lang.String"],
  ["UnsignedByte", "short"],
  ["UnsignedByteObject", "java.lang.Short"],
  ["UnsignedInt", "long"],
  ["UnsignedIntObject", "java.lang.Long"],
  ["UnsignedLong", "java.math.BigInteger"],
  ["UnsignedShort", "int"],
  ["UnsignedShortObject", "java.lang.Integer"]
];
class On extends De {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(Gs), this.setNsPrefix(Bn);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of Dn) {
      const r = new ne();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new Un(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (o) => o.toLowerCase() === "true" || o === "1", toString: (o) => String(o) };
    j.registerByName("Boolean", e), j.registerByName("BooleanObject", e);
    const t = { fromString: (o) => parseInt(o, 10), toString: (o) => String(o) };
    j.registerByName("Int", t), j.registerByName("IntObject", t), j.registerByName("Short", t), j.registerByName("ShortObject", t), j.registerByName("Byte", t), j.registerByName("ByteObject", t), j.registerByName("UnsignedByte", t), j.registerByName("UnsignedByteObject", t), j.registerByName("UnsignedShort", t), j.registerByName("UnsignedShortObject", t), j.registerByName("UnsignedInt", t), j.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (o) => {
        const d = parseInt(o, 10);
        return Math.abs(d) > Number.MAX_SAFE_INTEGER ? BigInt(o) : d;
      },
      toString: (o) => String(o)
    };
    j.registerByName("Long", s), j.registerByName("LongObject", s);
    const r = { fromString: (o) => parseFloat(o), toString: (o) => String(o) };
    j.registerByName("Float", r), j.registerByName("FloatObject", r), j.registerByName("Double", r), j.registerByName("DoubleObject", r);
    const n = { fromString: (o) => o, toString: (o) => o ?? "0" };
    j.registerByName("Decimal", n), j.registerByName("Integer", n), j.registerByName("NonNegativeInteger", n), j.registerByName("NonPositiveInteger", n), j.registerByName("NegativeInteger", n), j.registerByName("PositiveInteger", n), j.registerByName("UnsignedLong", n);
    const a = { fromString: (o) => o, toString: (o) => o ?? "" };
    j.registerByName("String", a), j.registerByName("AnySimpleType", a), j.registerByName("AnyURI", a), j.registerByName("NormalizedString", a), j.registerByName("Token", a), j.registerByName("Name", a), j.registerByName("NCName", a), j.registerByName("Language", a), j.registerByName("ID", a), j.registerByName("IDREF", a), j.registerByName("ENTITY", a), j.registerByName("NMTOKEN", a), j.registerByName("Date", a), j.registerByName("DateTime", a), j.registerByName("Time", a), j.registerByName("Duration", a), j.registerByName("GDay", a), j.registerByName("GMonth", a), j.registerByName("GMonthDay", a), j.registerByName("GYear", a), j.registerByName("GYearMonth", a), j.registerByName("QName", a), j.registerByName("NOTATION", a);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class Un extends Yt {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    return super.create(e);
  }
}
const zt = "http://www.eclipse.org/emf/2002/Ecore", Ln = "ecore", Gs = "http://www.eclipse.org/emf/2003/XMLType";
let Qe = null;
function Kt() {
  return Qe || (Qe = new $n(), Qe.initialize(), jn(), te.register(Kt)), Qe;
}
function jn() {
  Qe && (we.INSTANCE.set(zt, Qe), Mn());
}
class $n extends De {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(zt), this.setNsPrefix(Ln);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new Gn(this);
    this.setEFactoryInstance(e);
  }
  /**
   * Set the ePackage reference on all classifiers
   */
  initializeClassifierPackages() {
    for (const e of this.getEClassifiers())
      "setEPackage" in e && e.setEPackage(this);
  }
  createDataTypes() {
    this._eBooleanDataType = new ne(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new ne(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new ne(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new ne(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new ne(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new ne(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new ne(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new ne(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new ne(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new ne(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new ne(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new ne(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new ne(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new ne(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new ne(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new re(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new re(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new re(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new re(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new re(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new re(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new re(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new re(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new re(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new re(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new re(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new re(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new re(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new re(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new re(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new re(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new re(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new re(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new re(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new re(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new ee();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new ee();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new ee();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new ee();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const n = new ee();
    n.setName("upperBound"), n.setEType(this._eIntDataType), n.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const a = new ee();
    a.setName("instanceClassName"), a.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(a);
    const o = new ee();
    o.setName("abstract"), o.setEType(this._eBooleanDataType), o.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(o);
    const d = new ee();
    d.setName("interface"), d.setEType(this._eBooleanDataType), d.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(d);
    const y = new ee();
    y.setName("nsURI"), y.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(y);
    const S = new ee();
    S.setName("nsPrefix"), S.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(S);
    const C = new ee();
    C.setName("changeable"), C.setEType(this._eBooleanDataType), C.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(C);
    const A = new ee();
    A.setName("volatile"), A.setEType(this._eBooleanDataType), A.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(A);
    const b = new ee();
    b.setName("transient"), b.setEType(this._eBooleanDataType), b.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(b);
    const R = new ee();
    R.setName("defaultValueLiteral"), R.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(R);
    const M = new ee();
    M.setName("unsettable"), M.setEType(this._eBooleanDataType), M.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(M);
    const U = new ee();
    U.setName("derived"), U.setEType(this._eBooleanDataType), U.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(U);
    const _ = new ee();
    _.setName("iD"), _.setEType(this._eBooleanDataType), _.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(_);
    const x = new ee();
    x.setName("containment"), x.setEType(this._eBooleanDataType), x.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(x);
    const D = new ee();
    D.setName("resolveProxies"), D.setEType(this._eBooleanDataType), D.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(D);
    const $ = new ee();
    $.setName("value"), $.setEType(this._eIntDataType), $.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push($);
    const L = new ee();
    L.setName("literal"), L.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(L);
    const Ee = new ee();
    Ee.setName("source"), Ee.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(Ee);
    const fe = new ee();
    fe.setName("key"), fe.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(fe);
    const Pe = new ee();
    Pe.setName("value"), Pe.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Pe);
    const N = new ee();
    N.setName("serializable"), N.setEType(this._eBooleanDataType), N.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(N);
  }
  createReferences() {
    const e = new le();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new le();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new le();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new le();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const n = new le();
    n.setName("eOperations"), n.setEType(this._eOperationClass), n.setContainment(!0), n.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(n);
    const a = new le();
    a.setName("eClassifiers"), a.setEType(this._eClassifierClass), a.setContainment(!0), a.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(a);
    const o = new le();
    o.setName("eSubpackages"), o.setEType(this._ePackageClass), o.setContainment(!0), o.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(o);
    const d = new le();
    d.setName("eFactoryInstance"), d.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(d);
    const y = new le();
    y.setName("eLiterals"), y.setEType(this._eEnumLiteralClass), y.setContainment(!0), y.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(y);
    const S = new le();
    S.setName("eOpposite"), S.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(S);
    const C = new le();
    C.setName("eParameters"), C.setEType(this._eParameterClass), C.setContainment(!0), C.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(C);
    const A = new le();
    A.setName("details"), A.setEType(this._eStringToStringMapEntryClass), A.setContainment(!0), A.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(A);
    const b = new le();
    b.setName("eGenericType"), b.setEType(this._eGenericTypeClass), b.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(b);
    const R = new le();
    R.setName("eTypeParameters"), R.setEType(this._eTypeParameterClass), R.setContainment(!0), R.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(R);
    const M = new le();
    M.setName("eGenericSuperTypes"), M.setEType(this._eGenericTypeClass), M.setContainment(!0), M.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(M);
    const U = new le();
    U.setName("eTypeParameters"), U.setEType(this._eTypeParameterClass), U.setContainment(!0), U.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(U);
    const _ = new le();
    _.setName("eBounds"), _.setEType(this._eGenericTypeClass), _.setContainment(!0), _.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(_);
    const x = new le();
    x.setName("eClassifier"), x.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(x);
    const D = new le();
    D.setName("eTypeParameter"), D.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(D);
    const $ = new le();
    $.setName("eTypeArguments"), $.setEType(this._eGenericTypeClass), $.setContainment(!0), $.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push($);
    const L = new le();
    L.setName("eUpperBound"), L.setEType(this._eGenericTypeClass), L.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(L);
    const Ee = new le();
    Ee.setName("eLowerBound"), Ee.setEType(this._eGenericTypeClass), Ee.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(Ee);
  }
  // Getters for EClasses
  getEObjectClass() {
    return this._eObjectClass;
  }
  getEModelElementClass() {
    return this._eModelElementClass;
  }
  getENamedElementClass() {
    return this._eNamedElementClass;
  }
  getEClassifierClass() {
    return this._eClassifierClass;
  }
  getEClassClass() {
    return this._eClassClass;
  }
  getEDataTypeClass() {
    return this._eDataTypeClass;
  }
  getEEnumClass() {
    return this._eEnumClass;
  }
  getEEnumLiteralClass() {
    return this._eEnumLiteralClass;
  }
  getEPackageClass() {
    return this._ePackageClass;
  }
  getEFactoryClass() {
    return this._eFactoryClass;
  }
  getEStructuralFeatureClass() {
    return this._eStructuralFeatureClass;
  }
  getEAttributeClass() {
    return this._eAttributeClass;
  }
  getEReferenceClass() {
    return this._eReferenceClass;
  }
  getEOperationClass() {
    return this._eOperationClass;
  }
  getEParameterClass() {
    return this._eParameterClass;
  }
  getEAnnotationClass() {
    return this._eAnnotationClass;
  }
  getEGenericTypeClass() {
    return this._eGenericTypeClass;
  }
  getETypeParameterClass() {
    return this._eTypeParameterClass;
  }
  getEStringToStringMapEntryClass() {
    return this._eStringToStringMapEntryClass;
  }
  // Getters for EDataTypes
  getEBoolean() {
    return this._eBooleanDataType;
  }
  getEInt() {
    return this._eIntDataType;
  }
  getEString() {
    return this._eStringDataType;
  }
  getEDouble() {
    return this._eDoubleDataType;
  }
  getEFloat() {
    return this._eFloatDataType;
  }
  getELong() {
    return this._eLongDataType;
  }
  getEDate() {
    return this._eDateDataType;
  }
  getEShort() {
    return this._eShortDataType;
  }
  getEByte() {
    return this._eByteDataType;
  }
  getEChar() {
    return this._eCharDataType;
  }
  getEBigInteger() {
    return this._eBigIntegerDataType;
  }
  getEBigDecimal() {
    return this._eBigDecimalDataType;
  }
  getEJavaObject() {
    return this._eJavaObjectDataType;
  }
}
class Gn extends Yt {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new re();
      case "EAttribute":
        return new ee();
      case "EReference":
        return new le();
      case "EDataType":
        return new ne();
      case "EEnum":
        return new xn();
      case "EEnumLiteral":
        return new $s();
      case "EAnnotation":
        return new vn();
      case "EPackage":
        return new De();
      case "EOperation":
        return new Rn();
      case "EParameter":
        return new Pn();
      case "EGenericType":
        return new Fn();
      case "ETypeParameter":
        return new kn();
      default:
        return super.create(e);
    }
  }
}
Kt();
class Wn extends An {
  constructor() {
    super(), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new mt()), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new mt()), this.getPackageRegistry().set(zt, Kt());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(e) {
    return super.createResource(e);
  }
}
const Xn = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="Events"
                nsURI="http://org.eclipse.daanse.board.app.lib.events" nsPrefix="Events">

    <!-- Abstract Base Payload -->
    <eClassifiers xsi:type="ecore:EClass" name="Payload" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all event payloads."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="eventType" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="widgetId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the widget that emitted this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="timestamp" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//ELong">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unix timestamp when the event was emitted."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="metadata" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional metadata object for additional context."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Abstract Widget Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="WidgetActionInterface" abstract="true">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract System Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="SystemActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

    <!-- Abstract Page Action Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="PageActionInterface" abstract="true" eSuperTypes="#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."/>
        </eAnnotations>
    </eClassifiers>

</ecore:EPackage>`, Es = "http://org.eclipse.daanse.board.app.lib.events";
class Ws {
  constructor() {
    this.modelCache = /* @__PURE__ */ new Map(), this.resourceSet = this.createResourceSet(), this.loadEventsModelSync();
  }
  /**
   * Creates a ResourceSet with registered Ecore package
   *
   * EResourceSetImpl registers the Ecore package and the XMI resource
   * factory for the `.ecore` extension in its constructor.
   */
  createResourceSet() {
    return new Wn();
  }
  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  loadEventsModelSync() {
    try {
      const t = this.createLoadedResource(
        `${Es}/EventModel.ecore`,
        Xn
      ).getContents();
      if (t.size() > 0) {
        const s = t.get(0);
        this.registerPackage(s), console.log("✅ Loaded and registered Events model package with nsURI:", s.getNsURI());
      }
    } catch (e) {
      console.error("❌ Failed to load Events model:", e);
    }
  }
  /**
   * Create a resource for the given URI and load the XMI content into it.
   *
   * `loadFromString` is optional on the Resource interface — only the XMI
   * resource implementation provides it. The resource factory registered for
   * `.ecore` returns one, so a missing method means the URI did not resolve to
   * an XMI resource and the caller needs to know.
   */
  createLoadedResource(e, t) {
    const s = this.resourceSet.createResource(Y.createURI(e));
    if (typeof s.loadFromString != "function")
      throw new Error(
        `Resource for "${e}" does not support loading from a string; expected an XMI resource.`
      );
    return s.loadFromString(t), s;
  }
  /**
   * Register an EPackage in the ResourceSet's package registry under its nsURI
   */
  registerPackage(e) {
    const t = e.getNsURI();
    t && this.resourceSet.getPackageRegistry().set(t, e);
  }
  /**
   * Get the ResourceSet instance
   */
  getResourceSet() {
    return this.resourceSet;
  }
  /**
   * Load an Ecore model from a URI string
   */
  async loadModel(e, t) {
    try {
      const r = await (await fetch(t)).text();
      await this.loadModelFromString(e, r, t);
    } catch (s) {
      throw console.error(`Failed to load Ecore model from ${t}:`, s), s;
    }
  }
  /**
   * Load an Ecore model from a string
   */
  async loadModelFromString(e, t, s = "model.ecore") {
    try {
      const n = this.createLoadedResource(s, t).getContents();
      if (n.size() > 0) {
        const a = n.get(0);
        this.modelCache.set(e, a), console.log(`✅ Loaded Ecore model for widget type "${e}" from ${s}`);
      }
    } catch (r) {
      throw console.error(`Failed to parse Ecore model for ${e}:`, r), r;
    }
  }
  /**
   * Register an already loaded EPackage for a widget type
   */
  registerModel(e, t) {
    this.modelCache.set(e, t);
  }
  /**
   * Extract action metadata from an Ecore model
   */
  extractActions(e) {
    const t = this.modelCache.get(e);
    if (!t)
      return console.warn(`No Ecore model registered for widget type "${e}"`), [];
    const s = [], r = t.getEClassifiers();
    for (let n = 0; n < r.size(); n++) {
      const a = r.get(n);
      if (ps(a)) {
        const o = a;
        if (!this.extendsWidgetActionInterface(o))
          continue;
        const y = o.getEOperations();
        for (let S = 0; S < y.length; S++) {
          const C = y[S], A = C.getName(), b = C.getEAnnotation(
            "org.eclipse.daanse.board.app.lib.events/WidgetAction"
          );
          if (b) {
            const R = this.getAnnotationDetail(b, "eventType"), M = [], U = C.getEParameters();
            for (let _ = 0; _ < U.length; _++) {
              const x = U[_], D = x.getEType(), $ = this.mapEcoreTypeToTS(D), L = x.getEAnnotation(
                "org.eclipse.daanse.board.app.lib.events/ActionParameter"
              );
              let fe = x.getLowerBound() === 0;
              L && this.getAnnotationDetail(L, "optional") === "true" && (fe = !0), M.push({
                name: x.getName() || `arg${_}`,
                type: $,
                optional: fe,
                index: _
              });
            }
            s.push({
              methodName: A || `action${S}`,
              eventType: R || `${e}.${A}`,
              parameters: M
            });
          }
        }
      }
    }
    return console.log(`📝 Extracted ${s.length} actions from Ecore model for "${e}":`, s), s;
  }
  /**
   * Get annotation detail value by key
   */
  getAnnotationDetail(e, t) {
    return e.getDetails().getByKey(t) || void 0;
  }
  /**
   * Extract payload metadata from an Ecore model by class name
   */
  extractPayloadMetadata(e, t) {
    const s = this.modelCache.get(e);
    if (!s)
      return console.warn(`No Ecore model registered for widget type "${e}"`), null;
    const r = s.getEClassifiers();
    for (let n = 0; n < r.size(); n++) {
      const a = r.get(n);
      if (ps(a)) {
        const o = a;
        if (o.getName() === t) {
          const d = [], y = o.getEAllStructuralFeatures();
          for (let S = 0; S < y.length; S++) {
            const C = y[S], A = C.getName(), b = C.getEType(), R = C.getLowerBound(), M = C.getUpperBound();
            let U = this.mapEcoreTypeToTS(b);
            (M > 1 || M === -1) && (U += "[]");
            const _ = R === 0;
            d.push({
              name: A,
              type: U,
              optional: _
            });
          }
          return {
            className: t,
            properties: d
          };
        }
      }
    }
    return console.warn(`Payload class "${t}" not found in Ecore model for "${e}"`), null;
  }
  /**
   * Check if an EClass extends WidgetActionInterface
   */
  extendsWidgetActionInterface(e) {
    const t = e.getESuperTypes();
    for (let s = 0; s < t.length; s++) {
      const r = t[s], n = r.getName(), a = r.getEPackage()?.getNsURI() ?? null;
      if (n === "WidgetActionInterface" && a === Es || this.extendsWidgetActionInterface(r))
        return !0;
    }
    return !1;
  }
  /**
   * Map Ecore data types to TypeScript types
   */
  mapEcoreTypeToTS(e) {
    if (!e) return "any";
    const t = e.getName(), s = t || String(e);
    return {
      EString: "string",
      EInt: "number",
      EDouble: "number",
      EFloat: "number",
      EBoolean: "boolean",
      EDate: "Date",
      EBigInteger: "number",
      EBigDecimal: "number",
      ELong: "number",
      EShort: "number",
      EByte: "number",
      EChar: "string",
      EByteArray: "Uint8Array",
      EJavaObject: "any"
    }[s] || s;
  }
  /**
   * Clear all cached models
   */
  clear() {
    this.modelCache.clear();
  }
}
const Xs = Symbol.for($t), qn = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  Copyright (c) 2025 Contributors to the Eclipse Foundation.

  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

  Contributors:
    Smart City Jena
-->
<ecore:EPackage xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="systemactions" nsURI="http://org.eclipse.daanse.board.app.lib.events.systemactions"
    nsPrefix="systemactions">

  <eClassifiers xsi:type="ecore:EClass" name="SystemActions" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="System-level actions that can be triggered by events"/>
    </eAnnotations>

    <eOperations name="changePage">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Navigate to a different page"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="system.changePage"/>
      </eAnnotations>
      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="ID of the page to navigate to"/>
        </eAnnotations>
      </eParameters>
    </eOperations>

    <eOperations name="setGlobalVariable">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Set or update a global variable"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="system.setGlobalVariable"/>
      </eAnnotations>
      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the variable to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Value to set"/>
        </eAnnotations>
      </eParameters>
    </eOperations>
  </eClassifiers>

  <eClassifiers xsi:type="ecore:EClass" name="PageActions">
    <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
      <details key="documentation" value="Page-level actions that can be triggered by events"/>
    </eAnnotations>

    <eOperations name="setPageVariable">
      <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
        <details key="documentation" value="Set or update a page-scoped variable"/>
      </eAnnotations>
      <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
        <details key="eventType" value="page.setPageVariable"/>
      </eAnnotations>
      <eParameters name="variableName" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Name of the variable to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Value to set"/>
        </eAnnotations>
      </eParameters>
      <eParameters name="pageId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
          <details key="documentation" value="Optional page ID (defaults to current page)"/>
        </eAnnotations>
      </eParameters>
    </eOperations>
  </eClassifiers>
</ecore:EPackage>`;
Nt.createLogger("daanse:events:registry");
const Yn = Ns, zn = Is, Kn = As, Hn = bs, Vn = Xs;
function qs({ services: l, log: e }) {
  const t = new Ss();
  l.register(Tt, t);
  const s = new ws();
  l.register(St, s);
  const r = l.construct(gt);
  l.register(Lt, r);
  const n = l.construct(pt);
  l.register(jt, n), n.setup(l);
  const a = new Ws();
  l.register($t, a), s.setEcoreMetadataService(a), t.setEcoreMetadataService(a), e.info("Ereignis-Registries bereit");
}
function Ys({ services: l }) {
  for (const e of [
    $t,
    jt,
    Lt,
    St,
    Tt
  ])
    l.unregister(e);
}
const Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionParameter: ur,
  Comperator: Me,
  Condition: nr,
  ECORE_METADATA_SERVICE: Xs,
  EVENT_ACTIONS_REGISTRY: Is,
  EVENT_ACTIONS_REGISTRY_ID: St,
  EVENT_BUS_BRIDGE: bs,
  EVENT_MANAGER: As,
  EVENT_REGISTRY: Ns,
  EVENT_REGISTRY_ID: Tt,
  EcoreMetadataService: Ws,
  EventActionsRegistry: ws,
  get EventBusBridge() {
    return pt;
  },
  get EventManager() {
    return gt;
  },
  EventRegistry: Ss,
  get PageActionInterface() {
    return kt;
  },
  get Payload() {
    return qe;
  },
  get SystemActionInterface() {
    return Ft;
  },
  SystemActionsEcoreContent: qn,
  WidgetAction: cr,
  get WidgetActionInterface() {
    return ot;
  },
  actionsIdentifier: zn,
  activate: qs,
  bridgeIdentifier: Hn,
  deactivate: Ys,
  ecoreServiceIdentifier: Vn,
  getWidgetActions: _s,
  identifier: Yn,
  managerIdentifier: Kn
}, Symbol.toStringTag, { value: "Module" })), Cs = "org.eclipse.daanse.board.app.lib.events", Qn = "0.0.1-next.1";
async function ni(l) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${Cs}: tsm runtime is not initialized`);
  e.register(Cs, Jn, Qn, "lib.events"), await qs?.(l);
}
async function ii(l) {
  await Ys?.(l);
}
export {
  ur as ActionParameter,
  Me as Comperator,
  nr as Condition,
  Xs as ECORE_METADATA_SERVICE,
  Is as EVENT_ACTIONS_REGISTRY,
  ci as EVENT_ACTIONS_REGISTRY_ID,
  bs as EVENT_BUS_BRIDGE,
  As as EVENT_MANAGER,
  Ns as EVENT_REGISTRY,
  ui as EVENT_REGISTRY_ID,
  Ws as EcoreMetadataService,
  ws as EventActionsRegistry,
  pt as EventBusBridge,
  gt as EventManager,
  Ss as EventRegistry,
  kt as PageActionInterface,
  qe as Payload,
  Ft as SystemActionInterface,
  qn as SystemActionsEcoreContent,
  cr as WidgetAction,
  ot as WidgetActionInterface,
  zn as actionsIdentifier,
  ni as activate,
  Hn as bridgeIdentifier,
  ii as deactivate,
  Vn as ecoreServiceIdentifier,
  _s as getWidgetActions,
  Yn as identifier,
  Kn as managerIdentifier
};
