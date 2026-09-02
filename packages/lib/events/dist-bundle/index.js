import { Documentation as xe, Attribute as ht, ModelClass as ft } from "org.eclipse.daanse.board.app.lib.annotations";
import { EVENT_REGISTRY_ID as gt, EVENT_ACTIONS_REGISTRY_ID as pt, EVENT_MANAGER_ID as kt, EVENT_BUS_BRIDGE_ID as Mt, ECORE_METADATA_SERVICE_ID as Ot } from "org.eclipse.daanse.board.app.lib.api.events";
import { EVENT_ACTIONS_REGISTRY_ID as Yn, EVENT_REGISTRY_ID as qn } from "org.eclipse.daanse.board.app.lib.api.events";
import { loggerFactory as dt } from "org.eclipse.daanse.board.app.lib.logger";
import { injectable as cs, inject as at } from "@eclipse-daanse/tsm";
const { TINY_EMITTER: Us } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var js = Object.defineProperty, $s = Object.getOwnPropertyDescriptor, Je = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? $s(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = (s ? i(e, t, r) : i(r)) || r);
  return s && r && js(e, t, r), r;
};
let Me = class {
};
Je([
  xe("Type of the event (e.g., 'click_on_thing', 'click_on_datastream')."),
  ht()
], Me.prototype, "eventType", 2);
Je([
  xe("ID of the widget that emitted this event."),
  ht()
], Me.prototype, "widgetId", 2);
Je([
  xe("Unix timestamp when the event was emitted."),
  ht()
], Me.prototype, "timestamp", 2);
Je([
  xe("Optional metadata object for additional context."),
  ht()
], Me.prototype, "metadata", 2);
Me = Je([
  xe("Abstract base class for all event payloads."),
  ft({ type: "http://org.eclipse.daanse.board.app.lib.events#//Payload" })
], Me);
var Gs = Object.getOwnPropertyDescriptor, Ws = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Gs(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = i(r) || r);
  return r;
};
let He = class {
};
He = Ws([
  xe("Abstract base class for all widget action interfaces. Widget-specific action interfaces should extend this class."),
  ft({ type: "http://org.eclipse.daanse.board.app.lib.events#//WidgetActionInterface" })
], He);
var Xs = Object.getOwnPropertyDescriptor, zs = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Xs(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = i(r) || r);
  return r;
};
let vt = class extends He {
};
vt = zs([
  xe("Abstract base class for all system-level action interfaces. System-specific action interfaces should extend this class."),
  ft({ type: "http://org.eclipse.daanse.board.app.lib.events#//SystemActionInterface" })
], vt);
var Ys = Object.getOwnPropertyDescriptor, qs = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? Ys(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = i(r) || r);
  return r;
};
let At = class extends He {
};
At = qs([
  xe("Abstract base class for all page-level action interfaces. Page-specific action interfaces should extend this class."),
  ft({ type: "http://org.eclipse.daanse.board.app.lib.events#//PageActionInterface" })
], At);
var ve = /* @__PURE__ */ ((u) => (u.eq = "eq", u.lt = "lt", u.gt = "gt", u.lte = "lte", u.gte = "gte", u.neq = "neq", u))(ve || {});
class Ks {
  constructor() {
    this.comperator = ve.eq;
  }
}
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Hs(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function Vs(u) {
  if (Object.prototype.hasOwnProperty.call(u, "__esModule")) return u;
  var e = u.default;
  if (typeof e == "function") {
    var t = function s() {
      return this instanceof s ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(u).forEach(function(s) {
    var r = Object.getOwnPropertyDescriptor(u, s);
    Object.defineProperty(t, s, r.get ? r : {
      enumerable: !0,
      get: function() {
        return u[s];
      }
    });
  }), t;
}
var Xt = {};
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
var zt;
function Js() {
  if (zt) return Xt;
  zt = 1;
  var u;
  return (function(e) {
    (function(t) {
      var s = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : l(), r = n(e);
      typeof s.Reflect < "u" && (r = n(s.Reflect, r)), t(r, s), typeof s.Reflect > "u" && (s.Reflect = e);
      function n(h, m) {
        return function(g, T) {
          Object.defineProperty(h, g, { configurable: !0, writable: !0, value: T }), m && m(g, T);
        };
      }
      function i() {
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
      function l() {
        return i() || o();
      }
    })(function(t, s) {
      var r = Object.prototype.hasOwnProperty, n = typeof Symbol == "function", i = n && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", o = n && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", l = typeof Object.create == "function", h = { __proto__: [] } instanceof Array, m = !l && !h, g = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: l ? function() {
          return Tt(/* @__PURE__ */ Object.create(null));
        } : h ? function() {
          return Tt({ __proto__: null });
        } : function() {
          return Tt({});
        },
        has: m ? function(p, y) {
          return r.call(p, y);
        } : function(p, y) {
          return y in p;
        },
        get: m ? function(p, y) {
          return r.call(p, y) ? p[y] : void 0;
        } : function(p, y) {
          return p[y];
        }
      }, T = Object.getPrototypeOf(Function), v = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : it(), P = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ds(), D = typeof WeakMap == "function" ? WeakMap : Fs(), F = n ? Symbol.for("@reflect-metadata:registry") : void 0, x = ye(), te = Ct(x);
      function he(p, y, C, S) {
        if (R(C)) {
          if (!rt(p))
            throw new TypeError();
          if (!a(y))
            throw new TypeError();
          return yt(p, y);
        } else {
          if (!rt(p))
            throw new TypeError();
          if (!$(y))
            throw new TypeError();
          if (!$(S) && !R(S) && !_e(S))
            throw new TypeError();
          return _e(S) && (S = void 0), C = fe(C), Ze(p, y, C, S);
        }
      }
      t("decorate", he);
      function oe(p, y) {
        function C(S, w) {
          if (!$(S))
            throw new TypeError();
          if (!R(w) && !E(w))
            throw new TypeError();
          $e(p, y, S, w);
        }
        return C;
      }
      t("metadata", oe);
      function j(p, y, C, S) {
        if (!$(C))
          throw new TypeError();
        return R(S) || (S = fe(S)), $e(p, y, C, S);
      }
      t("defineMetadata", j);
      function ce(p, y, C) {
        if (!$(y))
          throw new TypeError();
        return R(C) || (C = fe(C)), et(p, y, C);
      }
      t("hasMetadata", ce);
      function Se(p, y, C) {
        if (!$(y))
          throw new TypeError();
        return R(C) || (C = fe(C)), je(p, y, C);
      }
      t("hasOwnMetadata", Se);
      function ue(p, y, C) {
        if (!$(y))
          throw new TypeError();
        return R(C) || (C = fe(C)), H(p, y, C);
      }
      t("getMetadata", ue);
      function Ie(p, y, C) {
        if (!$(y))
          throw new TypeError();
        return R(C) || (C = fe(C)), we(p, y, C);
      }
      t("getOwnMetadata", Ie);
      function d(p, y) {
        if (!$(p))
          throw new TypeError();
        return R(y) || (y = fe(y)), Ne(p, y);
      }
      t("getMetadataKeys", d);
      function Qe(p, y) {
        if (!$(p))
          throw new TypeError();
        return R(y) || (y = fe(y)), Ge(p, y);
      }
      t("getOwnMetadataKeys", Qe);
      function ke(p, y, C) {
        if (!$(y))
          throw new TypeError();
        if (R(C) || (C = fe(C)), !$(y))
          throw new TypeError();
        R(C) || (C = fe(C));
        var S = be(
          y,
          C,
          /*Create*/
          !1
        );
        return R(S) ? !1 : S.OrdinaryDeleteMetadata(p, y, C);
      }
      t("deleteMetadata", ke);
      function yt(p, y) {
        for (var C = p.length - 1; C >= 0; --C) {
          var S = p[C], w = S(y);
          if (!R(w) && !_e(w)) {
            if (!a(w))
              throw new TypeError();
            y = w;
          }
        }
        return y;
      }
      function Ze(p, y, C, S) {
        for (var w = p.length - 1; w >= 0; --w) {
          var Z = p[w], re = Z(y, C, S);
          if (!R(re) && !_e(re)) {
            if (!$(re))
              throw new TypeError();
            S = re;
          }
        }
        return S;
      }
      function et(p, y, C) {
        var S = je(p, y, C);
        if (S)
          return !0;
        var w = ge(y);
        return _e(w) ? !1 : et(p, w, C);
      }
      function je(p, y, C) {
        var S = be(
          y,
          C,
          /*Create*/
          !1
        );
        return R(S) ? !1 : tt(S.OrdinaryHasOwnMetadata(p, y, C));
      }
      function H(p, y, C) {
        var S = je(p, y, C);
        if (S)
          return we(p, y, C);
        var w = ge(y);
        if (!_e(w))
          return H(p, w, C);
      }
      function we(p, y, C) {
        var S = be(
          y,
          C,
          /*Create*/
          !1
        );
        if (!R(S))
          return S.OrdinaryGetOwnMetadata(p, y, C);
      }
      function $e(p, y, C, S) {
        var w = be(
          C,
          S,
          /*Create*/
          !0
        );
        w.OrdinaryDefineOwnMetadata(p, y, C, S);
      }
      function Ne(p, y) {
        var C = Ge(p, y), S = ge(p);
        if (S === null)
          return C;
        var w = Ne(S, y);
        if (w.length <= 0)
          return C;
        if (C.length <= 0)
          return w;
        for (var Z = new P(), re = [], M = 0, N = C; M < N.length; M++) {
          var _ = N[M], b = Z.has(_);
          b || (Z.add(_), re.push(_));
        }
        for (var A = 0, O = w; A < O.length; A++) {
          var _ = O[A], b = Z.has(_);
          b || (Z.add(_), re.push(_));
        }
        return re;
      }
      function Ge(p, y) {
        var C = be(
          p,
          y,
          /*create*/
          !1
        );
        return C ? C.OrdinaryOwnMetadataKeys(p, y) : [];
      }
      function U(p) {
        if (p === null)
          return 1;
        switch (typeof p) {
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
            return p === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function R(p) {
        return p === void 0;
      }
      function _e(p) {
        return p === null;
      }
      function We(p) {
        return typeof p == "symbol";
      }
      function $(p) {
        return typeof p == "object" ? p !== null : typeof p == "function";
      }
      function Xe(p, y) {
        switch (U(p)) {
          case 0:
            return p;
          case 1:
            return p;
          case 2:
            return p;
          case 3:
            return p;
          case 4:
            return p;
          case 5:
            return p;
        }
        var C = "string", S = L(p, i);
        if (S !== void 0) {
          var w = S.call(p, C);
          if ($(w))
            throw new TypeError();
          return w;
        }
        return Et(p);
      }
      function Et(p, y) {
        var C, S, w;
        {
          var Z = p.toString;
          if (c(Z)) {
            var S = Z.call(p);
            if (!$(S))
              return S;
          }
          var C = p.valueOf;
          if (c(C)) {
            var S = C.call(p);
            if (!$(S))
              return S;
          }
        }
        throw new TypeError();
      }
      function tt(p) {
        return !!p;
      }
      function st(p) {
        return "" + p;
      }
      function fe(p) {
        var y = Xe(p);
        return We(y) ? y : st(y);
      }
      function rt(p) {
        return Array.isArray ? Array.isArray(p) : p instanceof Object ? p instanceof Array : Object.prototype.toString.call(p) === "[object Array]";
      }
      function c(p) {
        return typeof p == "function";
      }
      function a(p) {
        return typeof p == "function";
      }
      function E(p) {
        switch (U(p)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function f(p, y) {
        return p === y || p !== p && y !== y;
      }
      function L(p, y) {
        var C = p[y];
        if (C != null) {
          if (!c(C))
            throw new TypeError();
          return C;
        }
      }
      function q(p) {
        var y = L(p, o);
        if (!c(y))
          throw new TypeError();
        var C = y.call(p);
        if (!$(C))
          throw new TypeError();
        return C;
      }
      function J(p) {
        return p.value;
      }
      function ne(p) {
        var y = p.next();
        return y.done ? !1 : y;
      }
      function ie(p) {
        var y = p.return;
        y && y.call(p);
      }
      function ge(p) {
        var y = Object.getPrototypeOf(p);
        if (typeof p != "function" || p === T || y !== T)
          return y;
        var C = p.prototype, S = C && Object.getPrototypeOf(C);
        if (S == null || S === Object.prototype)
          return y;
        var w = S.constructor;
        return typeof w != "function" || w === p ? y : w;
      }
      function se() {
        var p;
        !R(F) && typeof s.Reflect < "u" && !(F in s.Reflect) && typeof s.Reflect.defineMetadata == "function" && (p = nt(s.Reflect));
        var y, C, S, w = new D(), Z = {
          registerProvider: re,
          getProvider: N,
          setProvider: b
        };
        return Z;
        function re(A) {
          if (!Object.isExtensible(Z))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case p === A:
              break;
            case R(y):
              y = A;
              break;
            case y === A:
              break;
            case R(C):
              C = A;
              break;
            case C === A:
              break;
            default:
              S === void 0 && (S = new P()), S.add(A);
              break;
          }
        }
        function M(A, O) {
          if (!R(y)) {
            if (y.isProviderFor(A, O))
              return y;
            if (!R(C)) {
              if (C.isProviderFor(A, O))
                return y;
              if (!R(S))
                for (var X = q(S); ; ) {
                  var ee = ne(X);
                  if (!ee)
                    return;
                  var Ee = J(ee);
                  if (Ee.isProviderFor(A, O))
                    return ie(X), Ee;
                }
            }
          }
          if (!R(p) && p.isProviderFor(A, O))
            return p;
        }
        function N(A, O) {
          var X = w.get(A), ee;
          return R(X) || (ee = X.get(O)), R(ee) && (ee = M(A, O), R(ee) || (R(X) && (X = new v(), w.set(A, X)), X.set(O, ee))), ee;
        }
        function _(A) {
          if (R(A))
            throw new TypeError();
          return y === A || C === A || !R(S) && S.has(A);
        }
        function b(A, O, X) {
          if (!_(X))
            throw new Error("Metadata provider not registered.");
          var ee = N(A, O);
          if (ee !== X) {
            if (!R(ee))
              return !1;
            var Ee = w.get(A);
            R(Ee) && (Ee = new v(), w.set(A, Ee)), Ee.set(O, X);
          }
          return !0;
        }
      }
      function ye() {
        var p;
        return !R(F) && $(s.Reflect) && Object.isExtensible(s.Reflect) && (p = s.Reflect[F]), R(p) && (p = se()), !R(F) && $(s.Reflect) && Object.isExtensible(s.Reflect) && Object.defineProperty(s.Reflect, F, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: p
        }), p;
      }
      function Ct(p) {
        var y = new D(), C = {
          isProviderFor: function(_, b) {
            var A = y.get(_);
            return R(A) ? !1 : A.has(b);
          },
          OrdinaryDefineOwnMetadata: re,
          OrdinaryHasOwnMetadata: w,
          OrdinaryGetOwnMetadata: Z,
          OrdinaryOwnMetadataKeys: M,
          OrdinaryDeleteMetadata: N
        };
        return x.registerProvider(C), C;
        function S(_, b, A) {
          var O = y.get(_), X = !1;
          if (R(O)) {
            if (!A)
              return;
            O = new v(), y.set(_, O), X = !0;
          }
          var ee = O.get(b);
          if (R(ee)) {
            if (!A)
              return;
            if (ee = new v(), O.set(b, ee), !p.setProvider(_, b, C))
              throw O.delete(b), X && y.delete(_), new Error("Wrong provider for target.");
          }
          return ee;
        }
        function w(_, b, A) {
          var O = S(
            b,
            A,
            /*Create*/
            !1
          );
          return R(O) ? !1 : tt(O.has(_));
        }
        function Z(_, b, A) {
          var O = S(
            b,
            A,
            /*Create*/
            !1
          );
          if (!R(O))
            return O.get(_);
        }
        function re(_, b, A, O) {
          var X = S(
            A,
            O,
            /*Create*/
            !0
          );
          X.set(_, b);
        }
        function M(_, b) {
          var A = [], O = S(
            _,
            b,
            /*Create*/
            !1
          );
          if (R(O))
            return A;
          for (var X = O.keys(), ee = q(X), Ee = 0; ; ) {
            var Gt = ne(ee);
            if (!Gt)
              return A.length = Ee, A;
            var Bs = J(Gt);
            try {
              A[Ee] = Bs;
            } catch (Ls) {
              try {
                ie(ee);
              } finally {
                throw Ls;
              }
            }
            Ee++;
          }
        }
        function N(_, b, A) {
          var O = S(
            b,
            A,
            /*Create*/
            !1
          );
          if (R(O) || !O.delete(_))
            return !1;
          if (O.size === 0) {
            var X = y.get(b);
            R(X) || (X.delete(A), X.size === 0 && y.delete(X));
          }
          return !0;
        }
      }
      function nt(p) {
        var y = p.defineMetadata, C = p.hasOwnMetadata, S = p.getOwnMetadata, w = p.getOwnMetadataKeys, Z = p.deleteMetadata, re = new D(), M = {
          isProviderFor: function(N, _) {
            var b = re.get(N);
            return !R(b) && b.has(_) ? !0 : w(N, _).length ? (R(b) && (b = new P(), re.set(N, b)), b.add(_), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: y,
          OrdinaryHasOwnMetadata: C,
          OrdinaryGetOwnMetadata: S,
          OrdinaryOwnMetadataKeys: w,
          OrdinaryDeleteMetadata: Z
        };
        return M;
      }
      function be(p, y, C) {
        var S = x.getProvider(p, y);
        if (!R(S))
          return S;
        if (C) {
          if (x.setProvider(p, y, te))
            return te;
          throw new Error("Illegal state.");
        }
      }
      function it() {
        var p = {}, y = [], C = (
          /** @class */
          (function() {
            function M(N, _, b) {
              this._index = 0, this._keys = N, this._values = _, this._selector = b;
            }
            return M.prototype["@@iterator"] = function() {
              return this;
            }, M.prototype[o] = function() {
              return this;
            }, M.prototype.next = function() {
              var N = this._index;
              if (N >= 0 && N < this._keys.length) {
                var _ = this._selector(this._keys[N], this._values[N]);
                return N + 1 >= this._keys.length ? (this._index = -1, this._keys = y, this._values = y) : this._index++, { value: _, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, M.prototype.throw = function(N) {
              throw this._index >= 0 && (this._index = -1, this._keys = y, this._values = y), N;
            }, M.prototype.return = function(N) {
              return this._index >= 0 && (this._index = -1, this._keys = y, this._values = y), { value: N, done: !0 };
            }, M;
          })()
        ), S = (
          /** @class */
          (function() {
            function M() {
              this._keys = [], this._values = [], this._cacheKey = p, this._cacheIndex = -2;
            }
            return Object.defineProperty(M.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), M.prototype.has = function(N) {
              return this._find(
                N,
                /*insert*/
                !1
              ) >= 0;
            }, M.prototype.get = function(N) {
              var _ = this._find(
                N,
                /*insert*/
                !1
              );
              return _ >= 0 ? this._values[_] : void 0;
            }, M.prototype.set = function(N, _) {
              var b = this._find(
                N,
                /*insert*/
                !0
              );
              return this._values[b] = _, this;
            }, M.prototype.delete = function(N) {
              var _ = this._find(
                N,
                /*insert*/
                !1
              );
              if (_ >= 0) {
                for (var b = this._keys.length, A = _ + 1; A < b; A++)
                  this._keys[A - 1] = this._keys[A], this._values[A - 1] = this._values[A];
                return this._keys.length--, this._values.length--, f(N, this._cacheKey) && (this._cacheKey = p, this._cacheIndex = -2), !0;
              }
              return !1;
            }, M.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = p, this._cacheIndex = -2;
            }, M.prototype.keys = function() {
              return new C(this._keys, this._values, w);
            }, M.prototype.values = function() {
              return new C(this._keys, this._values, Z);
            }, M.prototype.entries = function() {
              return new C(this._keys, this._values, re);
            }, M.prototype["@@iterator"] = function() {
              return this.entries();
            }, M.prototype[o] = function() {
              return this.entries();
            }, M.prototype._find = function(N, _) {
              if (!f(this._cacheKey, N)) {
                this._cacheIndex = -1;
                for (var b = 0; b < this._keys.length; b++)
                  if (f(this._keys[b], N)) {
                    this._cacheIndex = b;
                    break;
                  }
              }
              return this._cacheIndex < 0 && _ && (this._cacheIndex = this._keys.length, this._keys.push(N), this._values.push(void 0)), this._cacheIndex;
            }, M;
          })()
        );
        return S;
        function w(M, N) {
          return M;
        }
        function Z(M, N) {
          return N;
        }
        function re(M, N) {
          return [M, N];
        }
      }
      function Ds() {
        var p = (
          /** @class */
          (function() {
            function y() {
              this._map = new v();
            }
            return Object.defineProperty(y.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), y.prototype.has = function(C) {
              return this._map.has(C);
            }, y.prototype.add = function(C) {
              return this._map.set(C, C), this;
            }, y.prototype.delete = function(C) {
              return this._map.delete(C);
            }, y.prototype.clear = function() {
              this._map.clear();
            }, y.prototype.keys = function() {
              return this._map.keys();
            }, y.prototype.values = function() {
              return this._map.keys();
            }, y.prototype.entries = function() {
              return this._map.entries();
            }, y.prototype["@@iterator"] = function() {
              return this.keys();
            }, y.prototype[o] = function() {
              return this.keys();
            }, y;
          })()
        );
        return p;
      }
      function Fs() {
        var p = 16, y = g.create(), C = S();
        return (
          /** @class */
          (function() {
            function N() {
              this._key = S();
            }
            return N.prototype.has = function(_) {
              var b = w(
                _,
                /*create*/
                !1
              );
              return b !== void 0 ? g.has(b, this._key) : !1;
            }, N.prototype.get = function(_) {
              var b = w(
                _,
                /*create*/
                !1
              );
              return b !== void 0 ? g.get(b, this._key) : void 0;
            }, N.prototype.set = function(_, b) {
              var A = w(
                _,
                /*create*/
                !0
              );
              return A[this._key] = b, this;
            }, N.prototype.delete = function(_) {
              var b = w(
                _,
                /*create*/
                !1
              );
              return b !== void 0 ? delete b[this._key] : !1;
            }, N.prototype.clear = function() {
              this._key = S();
            }, N;
          })()
        );
        function S() {
          var N;
          do
            N = "@@WeakMap@@" + M();
          while (g.has(y, N));
          return y[N] = !0, N;
        }
        function w(N, _) {
          if (!r.call(N, C)) {
            if (!_)
              return;
            Object.defineProperty(N, C, { value: g.create() });
          }
          return N[C];
        }
        function Z(N, _) {
          for (var b = 0; b < _; ++b)
            N[b] = Math.random() * 255 | 0;
          return N;
        }
        function re(N) {
          if (typeof Uint8Array == "function") {
            var _ = new Uint8Array(N);
            return typeof crypto < "u" ? crypto.getRandomValues(_) : typeof msCrypto < "u" ? msCrypto.getRandomValues(_) : Z(_, N), _;
          }
          return Z(new Array(N), N);
        }
        function M() {
          var N = re(p);
          N[6] = N[6] & 79 | 64, N[8] = N[8] & 191 | 128;
          for (var _ = "", b = 0; b < p; ++b) {
            var A = N[b];
            (b === 4 || b === 6 || b === 8) && (_ += "-"), A < 16 && (_ += "0"), _ += A.toString(16).toLowerCase();
          }
          return _;
        }
      }
      function Tt(p) {
        return p.__ = void 0, delete p.__, p;
      }
    });
  })(u || (u = {})), Xt;
}
Js();
class us {
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
    const n = Object.getOwnPropertyNames(t), i = new Set(n);
    try {
      const o = new e();
      Object.keys(o).forEach((l) => i.add(l));
    } catch {
    }
    for (const o of i) {
      if (o === "constructor") continue;
      const l = Reflect.getMetadataKeys(t, o);
      l.length !== 0 && (s[o] = l.map((h) => ({
        key: h,
        value: Reflect.getMetadata(h, t, o)
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
const ls = Symbol.for(gt), De = dt.createLogger("daanse:events:decorator"), It = Symbol.for("daanse:widgetAction"), wt = Symbol.for("daanse:actionParameter");
function Qs(u) {
  return function(e, t, s) {
    const r = Reflect.getMetadata(It, e.constructor) || [], n = Reflect.getMetadata("design:paramtypes", e, t) || [];
    let i = u.parameters;
    if (!i && s.value) {
      const l = s.value.toString().match(/\(([^)]*)\)/);
      l && l[1].trim() && (i = l[1].split(",").map((m) => m.trim()).map((m, g) => {
        const T = m.match(/^(\w+)(\?)?:\s*(\w+)/);
        if (T) {
          const [, P, D, F] = T;
          return `${P}${D || ""}: ${F}`;
        }
        const v = n[g]?.name || "any";
        return `${m}: ${v}`;
      }));
    }
    return Reflect.defineMetadata(
      It,
      [
        ...r,
        {
          methodName: t,
          ...u,
          parameters: i
        }
      ],
      e.constructor
    ), s;
  };
}
function Zs(u) {
  return function(e, t, s) {
    const r = String(t), n = Reflect.getMetadata(wt, e, r) || [], o = (Reflect.getMetadata("design:paramtypes", e, r) || [])[s];
    let l = u?.name, h = u?.type, m = u?.optional;
    if (!l || !h) {
      const T = Object.getOwnPropertyDescriptor(e, r)?.value || e[r];
      if (T) {
        const P = T.toString().replace(/\s+/g, " ").match(/^[^(]*\(([^)]*)\)/);
        if (P && P[1].trim()) {
          const F = P[1].split(",").map((x) => x.replace(/\/\*.*\*\//, "").trim()).filter((x) => x.length > 0 && !x.startsWith("@"))[s];
          if (F) {
            const x = F.match(/^(\w+)(\?)?(?::\s*(.+?))?(?:\s*=|$)/);
            x && (l || (l = x[1]), m || (m = !!x[2]), !h && x[3] && (h = x[3].trim()));
          }
        }
      }
    }
    let g = h;
    !g && o && (g = {
      String: "string",
      Number: "number",
      Boolean: "boolean",
      Array: "Array<any>",
      Object: "object"
    }[o.name] || o.name || "any"), n.push({
      index: s,
      name: l || `arg${s}`,
      type: g || "any",
      optional: m
    }), Reflect.defineMetadata(wt, n, e, r), De(
      "ActionParameter: %s[%d] = %s: %s%s",
      r,
      s,
      l || `arg${s}`,
      h || o?.name || "any",
      m ? "?" : ""
    );
  };
}
function hs(u) {
  const e = typeof u == "function" ? u : u.constructor;
  De("getWidgetActions called with target: %o", u), De("  constructor: %o", e), De("  constructor.name: %s", e?.name);
  const t = Reflect.getMetadataKeys(e);
  De("  All metadata keys: %o", t);
  let s = Reflect.getMetadata(It, e) || [];
  return s = s.map((r) => {
    const n = Reflect.getMetadata(wt, e.prototype, r.methodName) || [];
    if (n.length > 0 && !r.parameters) {
      const i = [...n].sort((o, l) => o.index - l.index);
      r.parameters = i.map(
        (o) => `${o.name}${o.optional ? "?" : ""}: ${o.type}`
      );
    }
    return r;
  }), De("  Actions found: %o", s), s;
}
class fs {
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
    for (const i of n)
      try {
        await i.action(...s);
      } catch (o) {
        console.error(`Error executing action for ${r}:`, o);
      }
  }
  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(e, t, s) {
    if (t) {
      const i = this.createKey(e, t, s);
      return this.actions.get(i) || [];
    }
    const r = [], n = s ? `${e}:${s}:` : `${e}:`;
    for (const [i, o] of this.actions.entries())
      i.startsWith(n) && r.push(...o);
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
    const r = hs(t);
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
      const n = this.ecoreMetadataService.extractActions(e).map((i) => ({
        methodName: i.methodName,
        eventType: i.eventType,
        parameters: i.parameters.map(
          (o) => `${o.name}${o.optional ? "?" : ""}: ${o.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: n,
        context: s || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${s || "widget"}) from Ecore with ${n.length} actions:`), n.forEach((i) => {
        console.log(`  - ${i.methodName}(${i.parameters?.join(", ") || ""})`, i);
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
      const i = this.ecoreMetadataService.extractActions(e).map((o) => ({
        methodName: o.methodName,
        eventType: o.eventType,
        parameters: o.parameters.map(
          (l) => `${l.name}${l.optional ? "?" : ""}: ${l.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: i,
        context: s || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${s || "widget"}) from Ecore string with ${i.length} actions:`), i.forEach((o) => {
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
      const i = this.instanceTypes.get(r);
      if (console.log(`🎯 Checking instance "${r}" (type: ${i}), has ${e}: ${typeof n[e]}`), typeof n[e] == "function")
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
const gs = Symbol.for(pt);
var er = Object.getOwnPropertyDescriptor, tr = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? er(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = i(r) || r);
  return r;
}, sr = (u, e) => (t, s) => e(t, s, u);
const pe = dt.createLogger("daanse:events:manager");
let ot = class {
  constructor(u) {
    this.actionsRegistry = u, this.mappings = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  createMappingKey(u, e, t) {
    return t ? `${u}:${t}:${e}` : `${u}:${e}`;
  }
  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(u) {
    const e = this.createMappingKey(u.context, u.eventType, u.contextId);
    this.mappings.has(e) || this.mappings.set(e, []), this.mappings.get(e).push(u), pe("Registered event-action mapping: %s -> %s", e, u.actionName), this.onMappingsChangedCallback && this.onMappingsChangedCallback();
  }
  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(u) {
    for (const [e, t] of this.mappings.entries()) {
      const s = t.findIndex((r) => r.id === u);
      if (s !== -1) {
        t.splice(s, 1), t.length === 0 && this.mappings.delete(e), pe("Unregistered event-action mapping: %s", u);
        return;
      }
    }
  }
  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(u) {
    this.onMappingsChangedCallback = u;
  }
  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(u) {
    this.mappings.clear();
    for (const e of u) {
      const t = this.createMappingKey(e.context, e.eventType, e.contextId);
      this.mappings.has(t) || this.mappings.set(t, []), this.mappings.get(t).push(e);
    }
    this.onMappingsChangedCallback && (this.onMappingsChangedCallback(), pe("Notified listeners about %d loaded mappings", u.length));
  }
  /**
   * Wertet Conditions gegen ein Payload aus
   */
  evaluateConditions(u, e) {
    return !u || u.length === 0 ? !0 : u.every((t) => {
      if (!t.prop)
        return !0;
      const s = this.getNestedProperty(e, t.prop), r = t.value;
      return this.evaluateComparison(s, t.comperator, r);
    });
  }
  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  getNestedProperty(u, e) {
    return e.split(".").reduce((t, s) => t?.[s], u);
  }
  /**
   * Wertet einen Vergleich aus
   */
  evaluateComparison(u, e, t) {
    const s = Number(u), r = Number(t), n = !isNaN(s) && !isNaN(r);
    switch (e) {
      case ve.eq:
        return n ? s === r : u == t;
      case ve.neq:
        return n ? s !== r : u != t;
      case ve.lt:
        return n ? s < r : u < t;
      case ve.lte:
        return n ? s <= r : u <= t;
      case ve.gt:
        return n ? s > r : u > t;
      case ve.gte:
        return n ? s >= r : u >= t;
      default:
        return console.warn(`Unknown comperator: ${e}`), !1;
    }
  }
  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  buildActionArgs(u, e) {
    const t = [...u.actionArgs || []];
    if (u.payloadMapping && u.payloadMapping.length > 0)
      for (const s of u.payloadMapping) {
        const r = this.getNestedProperty(e, s.payloadPath);
        t[s.argIndex] = r, pe("  Mapped payload.%s -> arg[%d] = %o", s.payloadPath, s.argIndex, r);
      }
    return t;
  }
  /**
   * Führt eine einzelne Action aus
   */
  async executeAction(u, e) {
    const t = this.buildActionArgs(u, e);
    u.targetContextId ? await this.actionsRegistry.executeInstanceAction(
      u.targetContextId,
      u.actionName,
      ...t
    ) : (pe("No targetContextId specified, executing action on all instances"), await this.actionsRegistry.executeActionOnAll(
      u.actionName,
      ...t
    ));
  }
  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  getActionsFromMapping(u) {
    return u.actions && u.actions.length > 0 ? u.actions : u.actionName ? [{
      targetContext: u.targetContext,
      targetContextId: u.targetContextId,
      actionName: u.actionName,
      actionArgs: u.actionArgs,
      payloadMapping: u.payloadMapping
    }] : [];
  }
  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(u, e, t, s) {
    const r = this.createMappingKey(u, e, s);
    let n = this.mappings.get(r) || [];
    if (n.length === 0 && s) {
      const i = this.createMappingKey(u, e);
      n = this.mappings.get(i) || [], pe("📨 Handling event: %s, no specific mappings, using general mappings: %d", r, n.length);
    } else
      pe("📨 Handling event: %s, found %d mapping(s)", r, n.length);
    pe("  Payload: %o", t);
    for (const i of n)
      try {
        if (!this.evaluateConditions(i.conditions || [], t)) {
          pe("⏭️  Conditions not met for mapping %s, skipping", i.id);
          continue;
        }
        const o = this.getActionsFromMapping(i);
        if (o.length === 0) {
          pe("⚠️  No actions defined for mapping %s", i.id);
          continue;
        }
        pe("▶️  Executing %d action(s) for mapping %s", o.length, i.id);
        for (const l of o)
          pe("  → Action: %s on %s", l.actionName, l.targetContextId || "all instances"), await this.executeAction(l, t);
      } catch (o) {
        pe("❌ Error executing actions for mapping %s: %o", i.id, o);
      }
  }
  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings() {
    const u = [];
    for (const e of this.mappings.values())
      u.push(...e);
    return u;
  }
  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(u, e, t) {
    if (e) {
      const n = this.createMappingKey(u, e, t);
      return this.mappings.get(n) || [];
    }
    const s = [], r = t ? `${u}:${t}:` : `${u}:`;
    for (const [n, i] of this.mappings.entries())
      n.startsWith(r) && s.push(...i);
    return s;
  }
  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(u, e) {
    const t = [], s = `${u}:${e}:`;
    for (const r of this.mappings.keys())
      r.startsWith(s) && t.push(r);
    for (const r of t)
      this.mappings.delete(r);
    console.log(`Cleared event mappings for context ${u}:${e}`);
  }
  /**
   * Löscht alle Mappings
   */
  clear() {
    this.mappings.clear();
  }
};
ot = tr([
  cs(),
  sr(0, at("EventActionsRegistry"))
], ot);
const ps = Symbol.for(kt);
var rr = Object.getOwnPropertyDescriptor, nr = (u, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? rr(e, t) : e, n = u.length - 1, i; n >= 0; n--)
    (i = u[n]) && (r = i(r) || r);
  return r;
}, St = (u, e) => (t, s) => e(t, s, u);
const le = dt.createLogger("daanse:events:bridge");
let ct = class {
  constructor(u, e, t) {
    this.eventManager = u, this.eventRegistry = e, this.actionsRegistry = t, this.isSetup = !1, this.registeredListeners = /* @__PURE__ */ new Set();
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
  setup(u) {
    if (this.isSetup) {
      le("Bridge already setup, skipping");
      return;
    }
    try {
      this.eventBus = u.getRequired(Us), this.eventManager.onMappingsChanged(() => {
        le("📢 EventManager notified about mapping changes, refreshing listeners"), this.refreshListeners();
      }), this.setupListeners(), this.isSetup = !0, le("✅ EventBus Bridge setup complete");
    } catch (e) {
      le("❌ Failed to setup EventBus Bridge:", e);
    }
  }
  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  setupListeners() {
    const u = this.eventManager.getAllMappings(), e = /* @__PURE__ */ new Set();
    for (const t of u)
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
        le("📨 Received event via EventBus: %s", t), this.handleEvent(t, s);
      }), this.registeredListeners.add(t), le("Registered listener for: %s", t));
    le("✅ Bridge listening to %d event types", this.registeredListeners.size);
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
  async handleEvent(u, e) {
    try {
      const t = u.split(":");
      if (t.length < 2) {
        le("Invalid event format: %s", u);
        return;
      }
      const s = t[0];
      if (s === "widget") {
        if (t.length < 3) {
          le("Invalid widget event format: %s", u);
          return;
        }
        const r = t[1], n = t[2], i = e.widgetId, o = e.payload;
        le("📨 Widget event received: %s from widget %s", u, i), le("  Payload: %o", o), await this.eventManager.handleEvent(
          "widget",
          `${r}:${n}`,
          o,
          i
        );
        const l = this.actionsRegistry.getInstancePageId(i);
        l && (le("📨 Also handling as page event for page: %s", l), await this.eventManager.handleEvent(
          "page",
          `${r}:${n}`,
          o,
          l
        ));
      } else if (s === "system") {
        const r = t.slice(1).join(":"), n = e.payload || e;
        le("📨 System event received: %s", u), le("  Payload: %o", n), await this.eventManager.handleEvent(
          "system",
          r,
          n
        );
      } else
        le("Unknown event context: %s", s);
    } catch (t) {
      le("❌ Error handling event:", t);
    }
  }
};
ct = nr([
  cs(),
  St(0, at("EventManager")),
  St(1, at("EventRegistry")),
  St(2, at("EventActionsRegistry"))
], ct);
const ds = Symbol.for(Mt);
function Pe(u) {
  return u && typeof u.eProxyURI == "function" && typeof u.eSetProxyURI == "function";
}
const B = {
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
}, Dt = -1, ir = -1;
class qe {
  constructor(e, t, s, r, n, i = Dt, o = !0) {
    this.notifier = e, this.eventType = t, this.feature = s, this.featureID = ir, this.oldValue = r, this.newValue = n, this.position = i, this.wasSetFlag = o;
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
      case B.RESOLVE:
      case B.REMOVING_ADAPTER:
        return !0;
      case B.ADD:
      case B.ADD_MANY:
      case B.REMOVE:
      case B.REMOVE_MANY:
      case B.MOVE:
        return !1;
      case B.SET:
      case B.UNSET:
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
      [B.SET]: "SET",
      [B.UNSET]: "UNSET",
      [B.ADD]: "ADD",
      [B.REMOVE]: "REMOVE",
      [B.ADD_MANY]: "ADD_MANY",
      [B.REMOVE_MANY]: "REMOVE_MANY",
      [B.MOVE]: "MOVE",
      [B.REMOVING_ADAPTER]: "REMOVING_ADAPTER",
      [B.RESOLVE]: "RESOLVE"
    }, t = this.feature?.getName() || "unknown";
    return `Notification(${e[this.eventType]}, feature=${t}, old=${this.oldValue}, new=${this.newValue})`;
  }
}
const Nt = /^(?:0|[1-9]\d*)$/, ms = Symbol.for("emfts.indexedList"), ys = {
  get(u, e, t) {
    if (e === ms)
      return !0;
    if (typeof e == "string" && Nt.test(e)) {
      const s = Number(e), r = u.data;
      return r !== void 0 ? r[s] : s < u.size() ? u.get(s) : void 0;
    }
    return Reflect.get(u, e, t);
  },
  set(u, e, t, s) {
    if (e === "length") {
      const r = typeof t == "number" ? t : parseInt(t, 10);
      if (isNaN(r) || r < 0)
        throw new RangeError(`Invalid list length: ${String(t)}`);
      if (r === 0)
        u.clear();
      else
        for (; u.size() > r; )
          u.removeAt(u.size() - 1);
      return !0;
    }
    if (typeof e == "string" && Nt.test(e)) {
      const r = Number(e), n = u.size();
      if (r < n)
        u.set(r, t);
      else if (r === n)
        u.add(t);
      else
        throw new RangeError(`Index ${r} out of bounds for list of size ${n}. ELists do not support sparse assignment - use add() or push().`);
      return !0;
    }
    return Reflect.set(u, e, t, s);
  },
  has(u, e) {
    return typeof e == "string" && Nt.test(e) ? Number(e) < u.size() : Reflect.has(u, e);
  }
};
class me {
  constructor(e = null, t = null) {
    return this.data = [], this.owner = e, this.feature = t, new Proxy(this, ys);
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
    const r = e < 0 ? Math.max(this.data.length + e, 0) : Math.min(e, this.data.length), n = t === void 0 ? this.data.length - r : Math.min(Math.max(t, 0), this.data.length - r), i = [];
    for (let o = 0; o < n; o++)
      r < this.data.length && i.push(this.removeAt(r));
    for (let o = 0; o < s.length; o++)
      this.addAt(r + o, s[o]);
    return i;
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
      Array.isArray(s) ? t.push(...s) : s instanceof me ? t.push(...s.data) : t.push(s);
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
    this.dispatchNotification(B.ADD, null, t, e);
  }
  didAddMany(e, t) {
    this.dispatchNotification(B.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.dispatchNotification(B.REMOVE, t, null, e);
  }
  didClear(e) {
    e.length === 1 ? this.dispatchNotification(B.REMOVE, e[0], null, 0) : this.dispatchNotification(B.REMOVE_MANY, e, null, Dt);
  }
  didSet(e, t, s) {
    this.dispatchNotification(B.SET, s, t, e);
  }
  didMove(e, t, s) {
    this.dispatchNotification(B.MOVE, s, t, e);
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
    const i = new qe(this.owner, e, n, t, s, r);
    "eNotify" in this.owner && this.owner.eNotify(i);
  }
}
class Ft extends me {
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
class ar extends Ft {
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
    Cs(), super.dispatchNotification(e, t, s, r);
  }
}
class or extends me {
  constructor(e, t) {
    super(e, t);
  }
  get(e) {
    if (e < 0 || e >= this.data.length)
      throw new RangeError(`Index ${e} out of bounds for list of size ${this.data.length}`);
    let t = this.data[e];
    if (t && Pe(t) && t.eIsProxy() && this.owner && "eResolveProxy" in this.owner) {
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
function ae(u) {
  return u && typeof u.add == "function" && typeof u.size == "function" && typeof u.get == "function";
}
function Q(u, e) {
  let t;
  if (Array.isArray(e))
    t = e;
  else if (ae(e))
    t = e.toArray();
  else if (e !== null && typeof e == "object" && typeof e[Symbol.iterator] == "function")
    t = [...e];
  else
    return !1;
  const s = [...t];
  return u.clear(), u.addAll(s), !0;
}
class cr extends me {
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
function ur(u, e) {
  return Ce(new cr(u, e));
}
let Es = 0;
function Cs() {
  Es++;
}
function lr() {
  return Es;
}
function Re(u, e, t) {
  const s = lr();
  if (u.value !== null && u.value.revision === s)
    return u.value.list;
  const r = ur(t(), e);
  return u.value = { revision: s, list: r }, r;
}
class hr extends me {
  constructor(e, t) {
    super(e, null), this.featureResolver = t ?? null;
  }
  getFeature() {
    return this.feature === null && this.featureResolver !== null && (this.feature = this.featureResolver()), this.feature;
  }
  dispatchNotification(e, t, s, r) {
    Cs(), super.dispatchNotification(e, t, s, r);
  }
}
function K(u, e) {
  return Ce(new hr(u, e));
}
function Ce(u) {
  return u[ms] ? u : new Proxy(u, ys);
}
function fr(u, e) {
  return Ce(new Ft(u, e));
}
function gr(u, e) {
  return Ce(new or(u, e));
}
function pr(u, e) {
  return Ce(new me(u, e));
}
class dr extends me {
  constructor(e) {
    super(null, null), this.resource = e;
  }
  didAdd(e, t) {
    this.setResource(t), this.dispatchResourceNotification(B.ADD, null, t, e);
  }
  didAddMany(e, t) {
    for (const s of t)
      this.setResource(s);
    this.dispatchResourceNotification(B.ADD_MANY, null, t, e);
  }
  didRemove(e, t) {
    this.unsetResource(t), this.dispatchResourceNotification(B.REMOVE, t, null, e);
  }
  didClear(e) {
    for (const t of e)
      this.unsetResource(t);
    e.length === 1 ? this.dispatchResourceNotification(B.REMOVE, e[0], null, 0) : e.length > 1 && this.dispatchResourceNotification(B.REMOVE_MANY, e, null, Dt);
  }
  didSet(e, t, s) {
    this.unsetResource(s), this.setResource(t), this.dispatchResourceNotification(B.SET, s, t, e);
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
    const n = { getName: () => "contents" }, i = new qe(this.resource, e, n, t, s, r);
    "eNotify" in this.resource && this.resource.eNotify(i);
  }
}
function mr(u) {
  return Ce(new dr(u));
}
var de;
(function(u) {
  u.INSTANCE = yr();
})(de || (de = {}));
function Ts(u, e) {
  for (const t of e.getESubpackages()) {
    const s = t.getNsURI();
    s && u.set(s, t), Ts(u, t);
  }
}
function Ss(u) {
  const e = u.getNsURI();
  if (!e)
    throw new Error(`Cannot register package '${u.getName() ?? "<unnamed>"}': it has no nsURI.`);
  return e;
}
function yr() {
  const u = /* @__PURE__ */ new Map();
  return {
    getEPackage(e) {
      const t = u.get(e);
      return t ? "getEPackage" in t ? t.getEPackage() : t : null;
    },
    getEFactory(e) {
      const t = u.get(e);
      return t ? "getEFactory" in t ? t.getEFactory() : t.getEFactoryInstance() : null;
    },
    get(e) {
      return u.get(e) || null;
    },
    set(e, t) {
      u.set(e, t), "getEPackage" in t || Ts(u, t);
    },
    registerPackage(e) {
      this.set(Ss(e), e);
    },
    delete(e) {
      return u.delete(e);
    },
    has(e) {
      return u.has(e);
    },
    keys() {
      return u.keys();
    },
    values() {
      return u.values();
    }
  };
}
class k {
  constructor(e, t, s, r, n) {
    this._scheme = e, this._authority = t, this._path = s, this._query = r, this._fragment = n;
  }
  /**
   * Creates a URI from a string.
   */
  static createURI(e) {
    if (!e)
      return new k(null, null, "", null, null);
    let t = null, s = null, r = null, n = null, i = null, o = 0;
    e.length;
    const l = e.indexOf("#");
    l >= 0 && (i = e.substring(l + 1), e = e.substring(0, l));
    const h = e.indexOf("?");
    h >= 0 && (n = e.substring(h + 1), e = e.substring(0, h));
    const m = e.indexOf(":");
    if (m > 0) {
      let g = !0;
      for (let T = 0; T < m; T++)
        if (e.charAt(T) === "/") {
          g = !1;
          break;
        }
      g && (t = e.substring(0, m), o = m + 1);
    }
    if (e.startsWith("//", o)) {
      const g = o + 2;
      let T = g;
      for (; T < e.length && e.charAt(T) !== "/"; )
        T++;
      s = e.substring(g, T), o = T;
    }
    return o < e.length ? r = e.substring(o) : s !== null && (r = ""), new k(t, s, r, n, i);
  }
  /**
   * Creates a file URI.
   */
  static createFileURI(e) {
    return new k("file", null, e, null, null);
  }
  /**
   * Creates a platform resource URI.
   */
  static createPlatformResourceURI(e, t = !0) {
    return new k("platform", null, "/resource" + e, null, null);
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
    return new k(this._scheme, this._authority, this._path, this._query, e);
  }
  /**
   * Returns a new URI with the given path segment appended.
   */
  appendSegment(e) {
    let t = this._path || "";
    return !t && this._authority && (t = "/"), t && !t.endsWith("/") && (t += "/"), t += e, new k(this._scheme, this._authority, t, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the specified number of segments trimmed from the end.
   */
  trimSegments(e) {
    if (!this._path || e <= 0)
      return this;
    const t = this._path.split("/").filter((n) => n.length > 0), s = t.slice(0, Math.max(0, t.length - e));
    let r = this._path.startsWith("/") ? "/" : "";
    return r += s.join("/"), this._path.endsWith("/") && r.length > 0 && (r += "/"), new k(this._scheme, this._authority, r, this._query, this._fragment);
  }
  /**
   * Returns a new URI with the query removed.
   */
  trimQuery() {
    return new k(this._scheme, this._authority, this._path, null, this._fragment);
  }
  /**
   * Returns a new URI with the fragment removed.
   */
  trimFragment() {
    return new k(this._scheme, this._authority, this._path, this._query, null);
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
          const i = r.lastIndexOf("/");
          i >= 0 && (r = r.substring(0, i + 1));
        }
      } else
        r = e._path;
      n = this._query !== null ? this._query : e._query;
    } else
      r.startsWith("/") || (r = this.mergePaths(e._path, r), r = this.removeDotSegments(r));
    return new k(t, s, r, n, this._fragment);
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
      return new k(null, this._authority, this._path, this._query, this._fragment);
    const t = this._path || "", s = e._path || "";
    if (t === s)
      return this._query === e._query ? new k(null, null, null, null, this._fragment) : new k(null, null, "", this._query, this._fragment);
    const r = t.split("/"), n = s.split("/");
    let i = 0;
    const o = Math.min(r.length, n.length);
    for (let T = 0; T < o - 1 && r[T] === n[T]; T++)
      i++;
    const l = n.length - i - 1, h = t.includes("/./") || t.includes("/../") || t.endsWith("/.") || t.endsWith("/..");
    if (t.startsWith("/") && (l >= 3 || h && l > 0))
      return new k(null, null, t, this._query, this._fragment);
    const m = [];
    for (let T = 0; T < l; T++)
      m.push("..");
    for (let T = i; T < r.length; T++)
      m.push(r[T]);
    let g = m.join("/");
    return g === "" && t.endsWith("/") && (g = "./"), new k(null, null, g, this._query, this._fragment);
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
      const i = s[n];
      i === ".." ? t.length > 0 && t[t.length - 1] !== "" && t.pop() : i !== "." && !(i === "" && n > 0 && n < s.length - 1) && t.push(i);
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
function Er(u) {
  return "unsetTarget" in u && typeof u.unsetTarget == "function";
}
class Te {
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
        if (Array.isArray(n) || ae(n))
          for (const i of n)
            e.push(i);
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
    const n = t.toString(), i = n.indexOf("#");
    if (i > 0) {
      const o = n.substring(0, i), l = n.substring(i + 1);
      let h;
      const m = s.getURI();
      m && !o.includes("://") ? h = m.resolve(k.createURI(o)) : h = k.createURI(o);
      const g = r.getResource(h, !0);
      if (g) {
        const P = g.getEObject(l);
        if (P)
          return P;
      }
      const T = r.getPackageRegistry(), v = this.resolveFragmentViaPackageRegistry(T, o, l, r);
      if (v)
        return v;
    } else if (i === 0) {
      const o = n.substring(1), l = s.getEObject(o);
      if (l)
        return l;
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
      const h = this.resolveFragmentInPackage(n, s);
      if (h)
        return h;
    }
    let i = t;
    const o = i.lastIndexOf("/");
    o >= 0 && (i = i.substring(o + 1));
    const l = i.indexOf(".");
    if (l > 0 && (i = i.substring(0, l)), i)
      for (const h of e.keys()) {
        const m = e.getEPackage(h);
        if (m && m.getName() === i) {
          const g = this.resolveFragmentInPackage(m, s);
          if (g)
            return g;
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
    for (let l = 0; l < r.length - 1; l++) {
      const h = n.getESubpackages();
      let m = null;
      for (let g = 0; g < h.length; g++)
        if (h.get(g).getName() === r[l]) {
          m = h.get(g);
          break;
        }
      if (!m)
        return null;
      n = m;
    }
    const i = r[r.length - 1];
    return n.getEClassifier(i) ?? null;
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
        const s = new qe(this, B.REMOVING_ADAPTER, null, e, null);
        e.notifyChanged(s);
      }
      return this._eAdapters.splice(t, 1), Er(e) ? e.unsetTarget(this) : e.setTarget(null), !0;
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
          if (Array.isArray(n) || ae(n))
            for (const i of n)
              e.push(i);
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
          for (const i of t)
            i && "eSetContainer" in i && i.eSetContainer(this, n);
        else
          t.eSetContainer(this, n);
    }
    if (this._eDeliver && this._eAdapters.length > 0) {
      const n = new qe(this, B.SET, e, r, t);
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
      const r = new qe(this, B.UNSET, e, s, e.getDefaultValue());
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
class Ns extends Te {
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
      if (!e.isMany() && r && Pe(r) && r.eIsProxy()) {
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
        n.isContainment() ? r = fr(this, n) : r = gr(this, n);
      } else
        r = pr(this, e);
      return this.eSettings.set(t, r), r;
    }
    const s = e.getDefaultValue();
    return s !== void 0 ? s : null;
  }
}
class Cr extends Ft {
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
class Tr {
  constructor(e, t, s) {
    this.mapIndex = null, this._owner = e, this.entryEClass = s, this.delegateList = new Cr(e, t, this);
    const r = s.getEStructuralFeature("key"), n = s.getEStructuralFeature("value");
    if (!r || !n)
      throw new Error(`Entry EClass '${s.getName()}' must have 'key' and 'value' features`);
    return this.keyFeature = r, this.valueFeature = n, Ce(this);
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
    let i;
    n && n.getEFactoryInstance() ? i = n.getEFactoryInstance().create(this.entryEClass) : i = new Ns(this.entryEClass), i.eSet(this.keyFeature, e), i.eSet(this.valueFeature, t), this.delegateList.add(i);
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
function Sr(u, e, t) {
  return new Tr(u, e, t);
}
var Ve;
(function(u) {
  u.INSTANCE_FACTORY_REGISTRY = Nr();
})(Ve || (Ve = {}));
function Nr() {
  const u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return {
    getFactory(s) {
      const r = s.scheme();
      if (r && e.has(r))
        return e.get(r);
      const n = s.fileExtension();
      return n && u.has(n) ? u.get(n) : null;
    },
    getExtensionToFactoryMap() {
      return u;
    },
    getProtocolToFactoryMap() {
      return e;
    },
    getContentTypeToFactoryMap() {
      return t;
    }
  };
}
class Bt {
  constructor(e) {
    this.resourceSet = null, this.loaded = !1, this.modified = !1, this.errors = [], this.warnings = [], this._eAdapters = [], this._eDeliver = !0, this.uri = e || null, this.contents = mr(this);
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
      let n = null, i = 0;
      if (s && (n = this.contents.size() > 0 ? this.contents.get(0) : null, !n || (r[0].startsWith("@") ? n = this.eObjectForURIFragmentSegment(n, r[0]) : n = this.findByNameInContents(n, r[0]), i = 1, !n)))
        return null;
      for (let o = i; o < r.length; o++) {
        const l = r[o], h = parseInt(l, 10);
        if (n === null ? isNaN(h) ? (n = this.findByName(this.contents.toArray(), l), !n && this.contents.size() > 0 && (n = this.findByNameInContents(this.contents.get(0), l))) : n = h < this.contents.size() ? this.contents.get(h) : null : isNaN(h) ? n = this.navigateByNameOrFeature(n, l) : n = n.eContents()[h] || null, !n)
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
    const i = e.eClass().getEStructuralFeature(t);
    if (i) {
      const o = e.eGet(i);
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
    let i, o = -1;
    if (n >= "0" && n <= "9") {
      const m = s.lastIndexOf(".");
      if (m > 0) {
        const g = parseInt(s.substring(m + 1), 10);
        isNaN(g) ? i = s : (i = s.substring(0, m), o = g);
      } else
        i = s;
    } else
      i = s;
    const l = r.getEStructuralFeature(i);
    if (!l)
      return null;
    const h = e.eGet(l);
    return h == null ? null : o >= 0 ? Array.isArray(h) ? h[o] ?? null : typeof h == "object" && "get" in h && typeof h.get == "function" ? h.get(o) ?? null : null : typeof h == "object" && "eClass" in h ? h : null;
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
      const i = r.eContents().indexOf(s);
      i >= 0 && t.unshift(i), s = r;
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
      const r = s.value, i = r.eClass().getEIDAttribute();
      if (i && r.eGet(i) === e)
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
      n != null && (r.isMany() && Array.isArray(n) ? s[r.getName()] = n.map((i) => typeof i == "object" && "eClass" in i ? this.serializeObject(i) : i) : s[r.getName()] = typeof n == "object" && "eClass" in n ? this.serializeObject(n) : n);
    }
    return s;
  }
}
var _t = {};
const _r = {}, br = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _r
}, Symbol.toStringTag, { value: "Module" })), vr = /* @__PURE__ */ Vs(br);
var Yt;
function Ar() {
  return Yt || (Yt = 1, (function(u) {
    (function(e) {
      e.parser = function(c, a) {
        return new s(c, a);
      }, e.SAXParser = s, e.SAXStream = g, e.createStream = h, e.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function s(c, a) {
        if (!(this instanceof s))
          return new s(c, a);
        var E = this;
        n(E), E.q = E.c = "", E.bufferCheckPosition = e.MAX_BUFFER_LENGTH, E.encoding = null, E.opt = a || {}, E.opt.lowercase = E.opt.lowercase || E.opt.lowercasetags, E.looseCase = E.opt.lowercase ? "toLowerCase" : "toUpperCase", E.opt.maxEntityCount = E.opt.maxEntityCount || 512, E.opt.maxEntityDepth = E.opt.maxEntityDepth || 4, E.entityCount = E.entityDepth = 0, E.tags = [], E.closed = E.closedRoot = E.sawRoot = !1, E.tag = E.error = null, E.strict = !!c, E.noscript = !!(c || E.opt.noscript), E.state = d.BEGIN, E.strictEntities = E.opt.strictEntities, E.ENTITIES = E.strictEntities ? Object.create(e.XML_ENTITIES) : Object.create(e.ENTITIES), E.attribList = [], E.opt.xmlns && (E.ns = Object.create(F)), E.opt.unquotedAttributeValues === void 0 && (E.opt.unquotedAttributeValues = !c), E.trackPosition = E.opt.position !== !1, E.trackPosition && (E.position = E.line = E.column = 0), ke(E, "onready");
      }
      Object.create || (Object.create = function(c) {
        function a() {
        }
        a.prototype = c;
        var E = new a();
        return E;
      }), Object.keys || (Object.keys = function(c) {
        var a = [];
        for (var E in c) c.hasOwnProperty(E) && a.push(E);
        return a;
      });
      function r(c) {
        for (var a = Math.max(e.MAX_BUFFER_LENGTH, 10), E = 0, f = 0, L = t.length; f < L; f++) {
          var q = c[t[f]].length;
          if (q > a)
            switch (t[f]) {
              case "textNode":
                we(c);
                break;
              case "cdata":
                H(c, "oncdata", c.cdata), c.cdata = "";
                break;
              case "script":
                H(c, "onscript", c.script), c.script = "";
                break;
              default:
                Ne(c, "Max buffer length exceeded: " + t[f]);
            }
          E = Math.max(E, q);
        }
        var J = e.MAX_BUFFER_LENGTH - E;
        c.bufferCheckPosition = J + c.position;
      }
      function n(c) {
        for (var a = 0, E = t.length; a < E; a++)
          c[t[a]] = "";
      }
      function i(c) {
        we(c), c.cdata !== "" && (H(c, "oncdata", c.cdata), c.cdata = ""), c.script !== "" && (H(c, "onscript", c.script), c.script = "");
      }
      s.prototype = {
        end: function() {
          Ge(this);
        },
        write: rt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          i(this);
        }
      };
      var o;
      try {
        o = vr.Stream;
      } catch {
        o = function() {
        };
      }
      o || (o = function() {
      });
      var l = e.EVENTS.filter(function(c) {
        return c !== "error" && c !== "end";
      });
      function h(c, a) {
        return new g(c, a);
      }
      function m(c, a) {
        if (c.length >= 2) {
          if (c[0] === 255 && c[1] === 254)
            return "utf-16le";
          if (c[0] === 254 && c[1] === 255)
            return "utf-16be";
        }
        return c.length >= 3 && c[0] === 239 && c[1] === 187 && c[2] === 191 ? "utf8" : c.length >= 4 ? c[0] === 60 && c[1] === 0 && c[2] === 63 && c[3] === 0 ? "utf-16le" : c[0] === 0 && c[1] === 60 && c[2] === 0 && c[3] === 63 ? "utf-16be" : "utf8" : a ? "utf8" : null;
      }
      function g(c, a) {
        if (!(this instanceof g))
          return new g(c, a);
        o.apply(this), this._parser = new s(c, a), this.writable = !0, this.readable = !0;
        var E = this;
        this._parser.onend = function() {
          E.emit("end");
        }, this._parser.onerror = function(f) {
          E.emit("error", f), E._parser.error = null;
        }, this._decoder = null, this._decoderBuffer = null, l.forEach(function(f) {
          Object.defineProperty(E, "on" + f, {
            get: function() {
              return E._parser["on" + f];
            },
            set: function(L) {
              if (!L)
                return E.removeAllListeners(f), E._parser["on" + f] = L, L;
              E.on(f, L);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      g.prototype = Object.create(o.prototype, {
        constructor: {
          value: g
        }
      }), g.prototype._decodeBuffer = function(c, a) {
        if (this._decoderBuffer && (c = Buffer.concat([this._decoderBuffer, c]), this._decoderBuffer = null), !this._decoder) {
          var E = m(c, a);
          if (!E)
            return this._decoderBuffer = c, "";
          this._parser.encoding = E, this._decoder = new TextDecoder(E);
        }
        return this._decoder.decode(c, { stream: !a });
      }, g.prototype.write = function(c) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(c))
          c = this._decodeBuffer(c, !1);
        else if (this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        }
        return this._parser.write(c.toString()), this.emit("data", c), !0;
      }, g.prototype.end = function(c) {
        if (c && c.length && this.write(c), this._decoderBuffer) {
          var a = this._decodeBuffer(Buffer.alloc(0), !0);
          a && (this._parser.write(a), this.emit("data", a));
        } else if (this._decoder) {
          var E = this._decoder.decode();
          E && (this._parser.write(E), this.emit("data", E));
        }
        return this._parser.end(), !0;
      }, g.prototype.on = function(c, a) {
        var E = this;
        return !E._parser["on" + c] && l.indexOf(c) !== -1 && (E._parser["on" + c] = function() {
          var f = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          f.splice(0, 0, c), E.emit.apply(E, f);
        }), o.prototype.on.call(E, c, a);
      };
      var T = /^\[CDATA\[$/i, v = /^DOCTYPE$/i, P = "http://www.w3.org/XML/1998/namespace", D = "http://www.w3.org/2000/xmlns/", F = { xml: P, xmlns: D }, x = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, te = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, he = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, oe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function j(c) {
        return c === " " || c === `
` || c === "\r" || c === "	";
      }
      function ce(c) {
        return c === '"' || c === "'";
      }
      function Se(c) {
        return c === ">" || j(c);
      }
      function ue(c, a) {
        return c.test(a);
      }
      function Ie(c, a) {
        return !ue(c, a);
      }
      var d = 0;
      e.STATE = {
        BEGIN: d++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: d++,
        // leading whitespace
        TEXT: d++,
        // general stuff
        TEXT_ENTITY: d++,
        // &amp and such.
        OPEN_WAKA: d++,
        // <
        SGML_DECL: d++,
        // <!BLARG
        SGML_DECL_QUOTED: d++,
        // <!BLARG foo "bar
        DOCTYPE: d++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: d++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: d++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: d++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: d++,
        // <!-
        COMMENT: d++,
        // <!--
        COMMENT_ENDING: d++,
        // <!-- blah -
        COMMENT_ENDED: d++,
        // <!-- blah --
        CDATA: d++,
        // <![CDATA[ something
        CDATA_ENDING: d++,
        // ]
        CDATA_ENDING_2: d++,
        // ]]
        PROC_INST: d++,
        // <?hi
        PROC_INST_BODY: d++,
        // <?hi there
        PROC_INST_ENDING: d++,
        // <?hi "there" ?
        OPEN_TAG: d++,
        // <strong
        OPEN_TAG_SLASH: d++,
        // <strong /
        ATTRIB: d++,
        // <a
        ATTRIB_NAME: d++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: d++,
        // <a foo _
        ATTRIB_VALUE: d++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: d++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: d++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: d++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: d++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: d++,
        // <foo bar=&quot
        CLOSE_TAG: d++,
        // </a
        CLOSE_TAG_SAW_WHITE: d++,
        // </a   >
        SCRIPT: d++,
        // <script> ...
        SCRIPT_ENDING: d++
        // <script> ... <
      }, e.XML_ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }), e.ENTITIES = Object.assign(/* @__PURE__ */ Object.create(null), {
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
      }), Object.keys(e.ENTITIES).forEach(function(c) {
        var a = e.ENTITIES[c], E = typeof a == "number" ? String.fromCharCode(a) : a;
        e.ENTITIES[c] = E;
      });
      for (var Qe in e.STATE)
        e.STATE[e.STATE[Qe]] = Qe;
      d = e.STATE;
      function ke(c, a, E) {
        c[a] && c[a](E);
      }
      function yt(c) {
        var a = c && c.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
        return a ? a[2] : null;
      }
      function Ze(c) {
        return c ? c.toLowerCase().replace(/[^a-z0-9]/g, "") : null;
      }
      function et(c, a) {
        const E = Ze(c), f = Ze(a);
        return !E || !f ? !0 : f === "utf16" ? E === "utf16le" || E === "utf16be" : E === f;
      }
      function je(c, a) {
        if (!(!c.strict || !c.encoding || !a || a.name !== "xml")) {
          var E = yt(a.body);
          E && !et(c.encoding, E) && U(
            c,
            "XML declaration encoding " + E + " does not match detected stream encoding " + c.encoding.toUpperCase()
          );
        }
      }
      function H(c, a, E) {
        c.textNode && we(c), ke(c, a, E);
      }
      function we(c) {
        c.textNode = $e(c.opt, c.textNode), c.textNode && ke(c, "ontext", c.textNode), c.textNode = "";
      }
      function $e(c, a) {
        return c.trim && (a = a.trim()), c.normalize && (a = a.replace(/\s+/g, " ")), a;
      }
      function Ne(c, a) {
        return we(c), c.trackPosition && (a += `
Line: ` + c.line + `
Column: ` + c.column + `
Char: ` + c.c), a = new Error(a), c.error = a, ke(c, "onerror", a), c;
      }
      function Ge(c) {
        return c.sawRoot && !c.closedRoot && U(c, "Unclosed root tag"), c.state !== d.BEGIN && c.state !== d.BEGIN_WHITESPACE && c.state !== d.TEXT && Ne(c, "Unexpected end"), we(c), c.c = "", c.closed = !0, ke(c, "onend"), s.call(c, c.strict, c.opt), c;
      }
      function U(c, a) {
        if (typeof c != "object" || !(c instanceof s))
          throw new Error("bad call to strictFail");
        c.strict && Ne(c, a);
      }
      function R(c) {
        c.strict || (c.tagName = c.tagName[c.looseCase]());
        var a = c.tags[c.tags.length - 1] || c, E = c.tag = { name: c.tagName, attributes: {} };
        c.opt.xmlns && (E.ns = a.ns), c.attribList.length = 0, H(c, "onopentagstart", E);
      }
      function _e(c, a) {
        var E = c.indexOf(":"), f = E < 0 ? ["", c] : c.split(":"), L = f[0], q = f[1];
        return a && c === "xmlns" && (L = "xmlns", q = ""), { prefix: L, local: q };
      }
      function We(c) {
        if (c.strict || (c.attribName = c.attribName[c.looseCase]()), c.attribList.indexOf(c.attribName) !== -1 || c.tag.attributes.hasOwnProperty(c.attribName)) {
          c.attribName = c.attribValue = "";
          return;
        }
        if (c.opt.xmlns) {
          var a = _e(c.attribName, !0), E = a.prefix, f = a.local;
          if (E === "xmlns")
            if (f === "xml" && c.attribValue !== P)
              U(
                c,
                "xml: prefix must be bound to " + P + `
Actual: ` + c.attribValue
              );
            else if (f === "xmlns" && c.attribValue !== D)
              U(
                c,
                "xmlns: prefix must be bound to " + D + `
Actual: ` + c.attribValue
              );
            else {
              var L = c.tag, q = c.tags[c.tags.length - 1] || c;
              L.ns === q.ns && (L.ns = Object.create(q.ns)), L.ns[f] = c.attribValue;
            }
          c.attribList.push([c.attribName, c.attribValue]);
        } else
          c.tag.attributes[c.attribName] = c.attribValue, H(c, "onattribute", {
            name: c.attribName,
            value: c.attribValue
          });
        c.attribName = c.attribValue = "";
      }
      function $(c, a) {
        if (c.opt.xmlns) {
          var E = c.tag, f = _e(c.tagName);
          E.prefix = f.prefix, E.local = f.local, E.uri = E.ns[f.prefix] || "", E.prefix && !E.uri && (U(
            c,
            "Unbound namespace prefix: " + JSON.stringify(c.tagName)
          ), E.uri = f.prefix);
          var L = c.tags[c.tags.length - 1] || c;
          E.ns && L.ns !== E.ns && Object.keys(E.ns).forEach(function(it) {
            H(c, "onopennamespace", {
              prefix: it,
              uri: E.ns[it]
            });
          });
          for (var q = 0, J = c.attribList.length; q < J; q++) {
            var ne = c.attribList[q], ie = ne[0], ge = ne[1], se = _e(ie, !0), ye = se.prefix, Ct = se.local, nt = ye === "" ? "" : E.ns[ye] || "", be = {
              name: ie,
              value: ge,
              prefix: ye,
              local: Ct,
              uri: nt
            };
            ye && ye !== "xmlns" && !nt && (U(
              c,
              "Unbound namespace prefix: " + JSON.stringify(ye)
            ), be.uri = ye), c.tag.attributes[ie] = be, H(c, "onattribute", be);
          }
          c.attribList.length = 0;
        }
        c.tag.isSelfClosing = !!a, c.sawRoot = !0, c.tags.push(c.tag), H(c, "onopentag", c.tag), a || (!c.noscript && c.tagName.toLowerCase() === "script" ? c.state = d.SCRIPT : c.state = d.TEXT, c.tag = null, c.tagName = ""), c.attribName = c.attribValue = "", c.attribList.length = 0;
      }
      function Xe(c) {
        if (!c.tagName) {
          U(c, "Weird empty close tag."), c.textNode += "</>", c.state = d.TEXT;
          return;
        }
        if (c.script) {
          if (c.tagName !== "script") {
            c.script += "</" + c.tagName + ">", c.tagName = "", c.state = d.SCRIPT;
            return;
          }
          H(c, "onscript", c.script), c.script = "";
        }
        var a = c.tags.length, E = c.tagName;
        c.strict || (E = E[c.looseCase]());
        for (var f = E; a--; ) {
          var L = c.tags[a];
          if (L.name !== f)
            U(c, "Unexpected close tag");
          else
            break;
        }
        if (a < 0) {
          U(c, "Unmatched closing tag: " + c.tagName), c.textNode += "</" + c.tagName + ">", c.state = d.TEXT;
          return;
        }
        c.tagName = E;
        for (var q = c.tags.length; q-- > a; ) {
          var J = c.tag = c.tags.pop();
          c.tagName = c.tag.name, H(c, "onclosetag", c.tagName);
          var ne = {};
          for (var ie in J.ns)
            ne[ie] = J.ns[ie];
          var ge = c.tags[c.tags.length - 1] || c;
          c.opt.xmlns && J.ns !== ge.ns && Object.keys(J.ns).forEach(function(se) {
            var ye = J.ns[se];
            H(c, "onclosenamespace", { prefix: se, uri: ye });
          });
        }
        a === 0 && (c.closedRoot = !0), c.tagName = c.attribValue = c.attribName = "", c.attribList.length = 0, c.state = d.TEXT;
      }
      function Et(c) {
        var a = c.entity, E = a.toLowerCase(), f, L = "";
        return c.ENTITIES[a] ? c.ENTITIES[a] : c.ENTITIES[E] ? c.ENTITIES[E] : (a = E, a.charAt(0) === "#" && (a.charAt(1) === "x" ? (a = a.slice(2), f = parseInt(a, 16), L = f.toString(16)) : (a = a.slice(1), f = parseInt(a, 10), L = f.toString(10))), a = a.replace(/^0+/, ""), isNaN(f) || L.toLowerCase() !== a || f < 0 || f > 1114111 || !tt(f) ? (U(c, "Invalid character entity"), "&" + c.entity + ";") : String.fromCodePoint(f));
      }
      function tt(c) {
        return c === 9 || c === 10 || c === 13 || c >= 32 && c <= 55295 || c >= 57344 && c <= 65533 || c >= 65536 && c <= 1114111;
      }
      function st(c, a) {
        a === "<" ? (c.state = d.OPEN_WAKA, c.startTagPosition = c.position) : j(a) || (U(c, "Non-whitespace before first tag."), c.textNode = a, c.state = d.TEXT);
      }
      function fe(c, a) {
        var E = "";
        return a < c.length && (E = c.charAt(a)), E;
      }
      function rt(c) {
        var a = this;
        if (this.error)
          throw this.error;
        if (a.closed)
          return Ne(
            a,
            "Cannot write after close. Assign an onready handler."
          );
        if (c === null)
          return Ge(a);
        typeof c == "object" && (c = c.toString());
        for (var E = 0, f = ""; f = fe(c, E++), a.c = f, !!f; )
          switch (a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++), a.state) {
            case d.BEGIN:
              if (a.state = d.BEGIN_WHITESPACE, f === "\uFEFF")
                continue;
              st(a, f);
              continue;
            case d.BEGIN_WHITESPACE:
              st(a, f);
              continue;
            case d.TEXT:
              if (a.sawRoot && !a.closedRoot) {
                for (var q = E - 1; f && f !== "<" && f !== "&"; )
                  f = fe(c, E++), f && a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++);
                a.textNode += c.substring(q, E - 1);
              }
              f === "<" && !(a.sawRoot && a.closedRoot && !a.strict) ? (a.state = d.OPEN_WAKA, a.startTagPosition = a.position) : (!j(f) && (!a.sawRoot || a.closedRoot) && U(a, "Text data outside of root node."), f === "&" ? a.state = d.TEXT_ENTITY : a.textNode += f);
              continue;
            case d.SCRIPT:
              f === "<" ? a.state = d.SCRIPT_ENDING : a.script += f;
              continue;
            case d.SCRIPT_ENDING:
              f === "/" ? a.state = d.CLOSE_TAG : (a.script += "<" + f, a.state = d.SCRIPT);
              continue;
            case d.OPEN_WAKA:
              if (f === "!")
                a.state = d.SGML_DECL, a.sgmlDecl = "";
              else if (!j(f)) if (ue(x, f))
                a.state = d.OPEN_TAG, a.tagName = f;
              else if (f === "/")
                a.state = d.CLOSE_TAG, a.tagName = "";
              else if (f === "?")
                a.state = d.PROC_INST, a.procInstName = a.procInstBody = "";
              else {
                if (U(a, "Unencoded <"), a.startTagPosition + 1 < a.position) {
                  var L = a.position - a.startTagPosition;
                  f = new Array(L).join(" ") + f;
                }
                a.textNode += "<" + f, a.state = d.TEXT;
              }
              continue;
            case d.SGML_DECL:
              if (a.sgmlDecl + f === "--") {
                a.state = d.COMMENT, a.comment = "", a.sgmlDecl = "";
                continue;
              }
              a.doctype && a.doctype !== !0 && a.sgmlDecl ? (a.state = d.DOCTYPE_DTD, a.doctype += "<!" + a.sgmlDecl + f, a.sgmlDecl = "") : T.test(a.sgmlDecl + f) ? (H(a, "onopencdata"), a.state = d.CDATA, a.sgmlDecl = "", a.cdata = "") : v.test(a.sgmlDecl + f) ? (a.state = d.DOCTYPE, (a.doctype || a.sawRoot) && U(
                a,
                "Inappropriately located doctype declaration"
              ), a.doctype = "", a.sgmlDecl = "") : f === ">" ? (H(a, "onsgmldeclaration", a.sgmlDecl), a.sgmlDecl = "", a.state = d.TEXT) : (ce(f) && (a.state = d.SGML_DECL_QUOTED), a.sgmlDecl += f);
              continue;
            case d.SGML_DECL_QUOTED:
              f === a.q && (a.state = d.SGML_DECL, a.q = ""), a.sgmlDecl += f;
              continue;
            case d.DOCTYPE:
              f === ">" ? (a.state = d.TEXT, H(a, "ondoctype", a.doctype), a.doctype = !0) : (a.doctype += f, f === "[" ? a.state = d.DOCTYPE_DTD : ce(f) && (a.state = d.DOCTYPE_QUOTED, a.q = f));
              continue;
            case d.DOCTYPE_QUOTED:
              a.doctype += f, f === a.q && (a.q = "", a.state = d.DOCTYPE);
              continue;
            case d.DOCTYPE_DTD:
              f === "]" ? (a.doctype += f, a.state = d.DOCTYPE) : f === "<" ? (a.state = d.OPEN_WAKA, a.startTagPosition = a.position) : ce(f) ? (a.doctype += f, a.state = d.DOCTYPE_DTD_QUOTED, a.q = f) : a.doctype += f;
              continue;
            case d.DOCTYPE_DTD_QUOTED:
              a.doctype += f, f === a.q && (a.state = d.DOCTYPE_DTD, a.q = "");
              continue;
            case d.COMMENT:
              f === "-" ? a.state = d.COMMENT_ENDING : a.comment += f;
              continue;
            case d.COMMENT_ENDING:
              f === "-" ? (a.state = d.COMMENT_ENDED, a.comment = $e(a.opt, a.comment), a.comment && H(a, "oncomment", a.comment), a.comment = "") : (a.comment += "-" + f, a.state = d.COMMENT);
              continue;
            case d.COMMENT_ENDED:
              f !== ">" ? (U(a, "Malformed comment"), a.comment += "--" + f, a.state = d.COMMENT) : a.doctype && a.doctype !== !0 ? a.state = d.DOCTYPE_DTD : a.state = d.TEXT;
              continue;
            case d.CDATA:
              for (var q = E - 1; f && f !== "]"; )
                f = fe(c, E++), f && a.trackPosition && (a.position++, f === `
` ? (a.line++, a.column = 0) : a.column++);
              a.cdata += c.substring(q, E - 1), f === "]" && (a.state = d.CDATA_ENDING);
              continue;
            case d.CDATA_ENDING:
              f === "]" ? a.state = d.CDATA_ENDING_2 : (a.cdata += "]" + f, a.state = d.CDATA);
              continue;
            case d.CDATA_ENDING_2:
              f === ">" ? (a.cdata && H(a, "oncdata", a.cdata), H(a, "onclosecdata"), a.cdata = "", a.state = d.TEXT) : f === "]" ? a.cdata += "]" : (a.cdata += "]]" + f, a.state = d.CDATA);
              continue;
            case d.PROC_INST:
              f === "?" ? a.state = d.PROC_INST_ENDING : j(f) ? a.state = d.PROC_INST_BODY : a.procInstName += f;
              continue;
            case d.PROC_INST_BODY:
              if (!a.procInstBody && j(f))
                continue;
              f === "?" ? a.state = d.PROC_INST_ENDING : a.procInstBody += f;
              continue;
            case d.PROC_INST_ENDING:
              if (f === ">") {
                const ge = {
                  name: a.procInstName,
                  body: a.procInstBody
                };
                je(a, ge), H(a, "onprocessinginstruction", ge), a.procInstName = a.procInstBody = "", a.state = d.TEXT;
              } else
                a.procInstBody += "?" + f, a.state = d.PROC_INST_BODY;
              continue;
            case d.OPEN_TAG:
              ue(te, f) ? a.tagName += f : (R(a), f === ">" ? $(a) : f === "/" ? a.state = d.OPEN_TAG_SLASH : (j(f) || U(a, "Invalid character in tag name"), a.state = d.ATTRIB));
              continue;
            case d.OPEN_TAG_SLASH:
              f === ">" ? ($(a, !0), Xe(a)) : (U(
                a,
                "Forward-slash in opening tag not followed by >"
              ), a.state = d.ATTRIB);
              continue;
            case d.ATTRIB:
              if (j(f))
                continue;
              f === ">" ? $(a) : f === "/" ? a.state = d.OPEN_TAG_SLASH : ue(x, f) ? (a.attribName = f, a.attribValue = "", a.state = d.ATTRIB_NAME) : U(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME:
              f === "=" ? a.state = d.ATTRIB_VALUE : f === ">" ? (U(a, "Attribute without value"), a.attribValue = a.attribName, We(a), $(a)) : j(f) ? a.state = d.ATTRIB_NAME_SAW_WHITE : ue(te, f) ? a.attribName += f : U(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_NAME_SAW_WHITE:
              if (f === "=")
                a.state = d.ATTRIB_VALUE;
              else {
                if (j(f))
                  continue;
                U(a, "Attribute without value"), a.tag.attributes[a.attribName] = "", a.attribValue = "", H(a, "onattribute", {
                  name: a.attribName,
                  value: ""
                }), a.attribName = "", f === ">" ? $(a) : ue(x, f) ? (a.attribName = f, a.state = d.ATTRIB_NAME) : (U(a, "Invalid attribute name"), a.state = d.ATTRIB);
              }
              continue;
            case d.ATTRIB_VALUE:
              if (j(f))
                continue;
              ce(f) ? (a.q = f, a.state = d.ATTRIB_VALUE_QUOTED) : (a.opt.unquotedAttributeValues || Ne(a, "Unquoted attribute value"), a.state = d.ATTRIB_VALUE_UNQUOTED, a.attribValue = f);
              continue;
            case d.ATTRIB_VALUE_QUOTED:
              if (f !== a.q) {
                f === "&" ? a.state = d.ATTRIB_VALUE_ENTITY_Q : a.attribValue += f;
                continue;
              }
              We(a), a.q = "", a.state = d.ATTRIB_VALUE_CLOSED;
              continue;
            case d.ATTRIB_VALUE_CLOSED:
              j(f) ? a.state = d.ATTRIB : f === ">" ? $(a) : f === "/" ? a.state = d.OPEN_TAG_SLASH : ue(x, f) ? (U(a, "No whitespace between attributes"), a.attribName = f, a.attribValue = "", a.state = d.ATTRIB_NAME) : U(a, "Invalid attribute name");
              continue;
            case d.ATTRIB_VALUE_UNQUOTED:
              if (!Se(f)) {
                f === "&" ? a.state = d.ATTRIB_VALUE_ENTITY_U : a.attribValue += f;
                continue;
              }
              We(a), f === ">" ? $(a) : a.state = d.ATTRIB;
              continue;
            case d.CLOSE_TAG:
              if (a.tagName)
                f === ">" ? Xe(a) : ue(te, f) ? a.tagName += f : a.script ? (a.script += "</" + a.tagName + f, a.tagName = "", a.state = d.SCRIPT) : (j(f) || U(a, "Invalid tagname in closing tag"), a.state = d.CLOSE_TAG_SAW_WHITE);
              else {
                if (j(f))
                  continue;
                Ie(x, f) ? a.script ? (a.script += "</" + f, a.state = d.SCRIPT) : U(a, "Invalid tagname in closing tag.") : a.tagName = f;
              }
              continue;
            case d.CLOSE_TAG_SAW_WHITE:
              if (j(f))
                continue;
              f === ">" ? Xe(a) : U(a, "Invalid characters in closing tag");
              continue;
            case d.TEXT_ENTITY:
            case d.ATTRIB_VALUE_ENTITY_Q:
            case d.ATTRIB_VALUE_ENTITY_U:
              var J, ne;
              switch (a.state) {
                case d.TEXT_ENTITY:
                  J = d.TEXT, ne = "textNode";
                  break;
                case d.ATTRIB_VALUE_ENTITY_Q:
                  J = d.ATTRIB_VALUE_QUOTED, ne = "attribValue";
                  break;
                case d.ATTRIB_VALUE_ENTITY_U:
                  J = d.ATTRIB_VALUE_UNQUOTED, ne = "attribValue";
                  break;
              }
              if (f === ";") {
                var ie = Et(a);
                a.opt.unparsedEntities && !Object.values(e.XML_ENTITIES).includes(ie) ? ((a.entityCount += 1) > a.opt.maxEntityCount && Ne(
                  a,
                  "Parsed entity count exceeds max entity count"
                ), (a.entityDepth += 1) > a.opt.maxEntityDepth && Ne(
                  a,
                  "Parsed entity depth exceeds max entity depth"
                ), a.entity = "", a.state = J, a.write(ie), a.entityDepth -= 1) : (a[ne] += ie, a.entity = "", a.state = J);
              } else ue(a.entity.length ? oe : he, f) ? a.entity += f : (U(a, "Invalid character in entity name"), a[ne] += "&" + a.entity + f, a.entity = "", a.state = J);
              continue;
            default:
              throw new Error(a, "Unknown state: " + a.state);
          }
        return a.position >= a.bufferCheckPosition && r(a), a;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || (function() {
        var c = String.fromCharCode, a = Math.floor, E = function() {
          var f = 16384, L = [], q, J, ne = -1, ie = arguments.length;
          if (!ie)
            return "";
          for (var ge = ""; ++ne < ie; ) {
            var se = Number(arguments[ne]);
            if (!isFinite(se) || // `NaN`, `+Infinity`, or `-Infinity`
            se < 0 || // not a valid Unicode code point
            se > 1114111 || // not a valid Unicode code point
            a(se) !== se)
              throw RangeError("Invalid code point: " + se);
            se <= 65535 ? L.push(se) : (se -= 65536, q = (se >> 10) + 55296, J = se % 1024 + 56320, L.push(q, J)), (ne + 1 === ie || L.length > f) && (ge += c.apply(null, L), L.length = 0);
          }
          return ge;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: E,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = E;
      })();
    })(u);
  })(_t)), _t;
}
var Ir = Ar();
const wr = /* @__PURE__ */ Hs(Ir), qt = "http:///org/eclipse/emf/ecore/util/ExtendedMetaData", Rr = 0, Pr = 1, Lt = 2, xr = 3, kr = 4, Mr = 0, Or = 1, Ke = 2, Kt = 3, Dr = 4, Fr = 5, Br = 6;
class Ht {
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
    t = Rr;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Lt;
          break;
        case "mixed":
          t = xr;
          break;
        case "empty":
          t = Pr;
          break;
        case "elementOnly":
          t = kr;
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
    t = Mr;
    const s = this.getAnnotationDetail(e, "kind");
    if (s)
      switch (s) {
        case "simple":
          t = Or;
          break;
        case "element":
          t = Ke;
          break;
        case "attribute":
          t = Kt;
          break;
        case "elementWildcard":
          t = Dr;
          break;
        case "attributeWildcard":
          t = Fr;
          break;
        case "group":
          t = Br;
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
      if (this.getFeatureKind(r) !== Ke)
        continue;
      const i = this.getName(r) ?? r.getName();
      if (i !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && i === s)
        return r;
    }
    return null;
  }
  /**
   * Find a feature by its EMD namespace and name, where the feature kind is "attribute".
   */
  getAttributeFeature(e, t, s) {
    for (const r of e.getEAllStructuralFeatures()) {
      if (this.getFeatureKind(r) !== Kt)
        continue;
      const i = this.getName(r) ?? r.getName();
      if (i !== s)
        continue;
      const o = this.getNamespace(r);
      if (t && o && o === t || !t && !o || !o && i === s)
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
    const s = e.getEAnnotation(qt);
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
    const t = e.getEAnnotation(qt);
    if (!t)
      return null;
    const s = t.getDetails();
    return s && typeof s.getByKey == "function" ? s.toMap() : null;
  }
}
const Lr = "FEATURE_NAME_MAP", Ur = "EXTENDED_META_DATA", Rt = 1, Pt = 2, Vt = 3, jr = 4, Jt = 5;
class $r {
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
class mt {
  constructor(e) {
    this.noNamespacePackage = null, this.resource = null, this.xmlResource = null, this.resourceURI = null, this.packageRegistry = de.INSTANCE, this.packages = /* @__PURE__ */ new Map(), this.featuresToKinds = /* @__PURE__ */ new Map(), this.prefixesToURIs = /* @__PURE__ */ new Map(), this.urisToPrefixes = /* @__PURE__ */ new Map(), this.namespaceSupport = new $r(), this.allPrefixToURI = [], this.featureNameMap = /* @__PURE__ */ new Map(), this.reverseFeatureNameMap = /* @__PURE__ */ new Map(), this.extendedMetaData = null, e && this.setResource(e);
  }
  setResource(e) {
    if (this.resource = e, this.xmlResource = e && "getID" in e ? e : null, e) {
      this.resourceURI = e.getURI();
      const t = e.getResourceSet();
      t ? this.packageRegistry = t.getPackageRegistry() : this.packageRegistry = de.INSTANCE;
    }
  }
  setOptions(e) {
    const t = e.get(Lr);
    if (t) {
      this.featureNameMap = new Map(t), this.reverseFeatureNameMap = /* @__PURE__ */ new Map();
      for (const [r, n] of t)
        this.reverseFeatureNameMap.set(n, r);
    }
    const s = e.get(Ur);
    s instanceof Ht ? this.extendedMetaData = s : s === !0 && (this.extendedMetaData = new Ht());
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
    return t === void 0 && (this.computeFeatureKind(e), t = this.featuresToKinds.get(e)), t ?? Jt;
  }
  computeFeatureKind(e) {
    const t = e.getEType();
    if (!("isContainment" in e && typeof e.isContainment == "function") && (!t || !("getESuperTypes" in t)))
      e.isMany() ? this.featuresToKinds.set(e, Pt) : this.featuresToKinds.set(e, Rt);
    else if (e.isMany())
      if ("getEOpposite" in e && typeof e.getEOpposite == "function") {
        const n = e.getEOpposite();
        !n || typeof n.isTransient != "function" || n.isTransient() || !n.isMany() ? this.featuresToKinds.set(e, Vt) : this.featuresToKinds.set(e, jr);
      } else
        this.featuresToKinds.set(e, Vt);
    else
      this.featuresToKinds.set(e, Jt);
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
    const s = [], r = e.getObject(), n = e.getFeature(), i = e.getValues(), o = e.getPositions();
    for (let l = 0; l < i.length; l++) {
      const h = i[l], m = o[l];
      try {
        this.setValue(r, n, h, m);
      } catch (g) {
        s.push(g instanceof Error ? g : new Error(String(g)));
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
class _s {
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
        const n = e.eProxyURI().toString(), i = n.indexOf("#");
        if (i > 0) {
          const o = k.createURI(n.substring(0, i)), l = n.substring(i + 1), h = s.getResource(o, !0);
          if (h) {
            const m = h.getEObject(l);
            if (m)
              return m;
          }
        } else if (i === 0) {
          const o = n.substring(1), l = t.getEObject(o);
          if (l)
            return l;
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
function Le(u, e) {
  let t = e;
  for (; t.startsWith("/"); )
    t = t.substring(1);
  if (!t)
    return null;
  const s = t.split("/");
  if (s.length === 1)
    return u.getEClassifier(s[0]);
  const r = s[s.length - 1];
  let n = u;
  for (let i = 0; i < s.length - 1; i++) {
    const o = s[i], l = n.getESubpackages();
    n = null;
    for (let h = 0; h < l.length; h++) {
      const m = l.get(h);
      if (m.getName() === o) {
        n = m;
        break;
      }
    }
    if (!n)
      return null;
  }
  return n.getEClassifier(r);
}
const ze = "error", Oe = "object", Qt = "reference", bt = "xmiWrapper", Zt = "deferredType";
class Gr {
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
const Fe = "http://www.w3.org/2001/XMLSchema-instance", xt = "http://www.omg.org/XMI", es = "xmlns", Wr = "type", Xr = "nil", zr = "schemaLocation", ts = "href", Yr = "id";
class bs {
  constructor(e, t, s) {
    this.elements = [], this.objects = [], this.types = [], this.prefixesToFactories = /* @__PURE__ */ new Map(), this.urisToLocations = /* @__PURE__ */ new Map(), this.forwardSingleReferences = [], this.sameDocumentProxies = [], this.attribs = null, this.text = null, this.isRoot = !0, this.isNamespaceAware = !1, this.needsPushContext = !1, this.deferredFeature = null, this.deferredParent = null, this.deferredExtent = null, this.resolve = !0, this.useNewMethods = !0, this.errors = [], this.lineNumber = 0, this.columnNumber = 0, this.resource = e, this.helper = t, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || de.INSTANCE, this.extent = e.getContents(), s && this.processOptions(s);
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
      this.objects.push(null), this.types.push(bt);
      return;
    }
    this.objects.length === 0 || this.objects.length === 1 && this.types[0] === bt ? this.createTopObject(t, s) : this.handleFeature(t, s);
  }
  /**
   * Handle end of element
   */
  endElement(e, t, s) {
    this.elements.pop();
    const r = this.types.pop();
    if (r === Oe) {
      const n = this.objects.pop();
      if (this.text !== null && this.text.length > 0 && n) {
        const i = this.text.trim();
        if (i.length > 0) {
          const o = this.helper.getExtendedMetaData();
          if (o) {
            const l = n.eClass();
            if (o.getContentKind(l) === Lt) {
              const h = o.getSimpleContentFeature(l);
              h && this.setFeatureValue(n, h, i);
            }
          }
          this.handleProxy(n, i);
        }
      }
      this.text = null;
    } else if (r === ze)
      this.objects.pop(), this.text = null;
    else if (r === Qt)
      this.objects.pop(), this.text = null;
    else if (r === Zt)
      this.objects.pop(), this.deferredParent = null, this.deferredFeature = null, this.text = null;
    else if (r === bt)
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
        if (t.startsWith(es)) {
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
    const e = this.attribs.getValueByName(Fe, zr);
    e && this.handleXSISchemaLocation(e);
  }
  handleXSISchemaLocation(e) {
    const t = e.trim().split(/\s+/);
    for (let s = 0; s + 1 < t.length; s += 2) {
      const r = t[s], n = t[s + 1];
      this.urisToLocations.set(r, k.createURI(n));
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
      const i = this.helper.getType(s, t);
      i && (n = this.helper.createObject(s, i));
    }
    n ? (this.processTopObject(n), this.handleObjectAttribs(n)) : (this.error(`Cannot create object for '${t}'`), this.processObject(null));
  }
  /**
   * Get xsi:type attribute value
   */
  getXSIType() {
    return this.attribs ? this.attribs.getValueByName(Fe, Wr) : null;
  }
  /**
   * Create object based on xsi:type
   */
  createObjectByType(e, t, s) {
    let r = e, n = t;
    const i = t.indexOf(":");
    i !== -1 && (r = t.substring(0, i), n = t.substring(i + 1));
    const o = this.getFactoryForPrefix(r);
    if (!o)
      return this.error(`Factory not found for type '${t}'`), null;
    const l = this.helper.getType(o, n);
    return l ? this.helper.createObject(o, l) : (this.error(`Type '${n}' not found`), null);
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
    this.objects.push(e), this.types.push(e ? Oe : ze);
  }
  /**
   * Handle object attributes
   */
  handleObjectAttribs(e) {
    if (this.attribs)
      for (let t = 0; t < this.attribs.getLength(); t++) {
        const s = this.attribs.getQName(t), r = this.attribs.getValue(t), n = this.attribs.getURI(t), i = this.attribs.getLocalName(t);
        if (!s.startsWith(es) && n !== Fe) {
          if (n === xt) {
            i === Yr && this.handleId(e, r);
            continue;
          }
          this.setAttribValue(e, i || s, r, n || null);
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
    const n = e.eClass(), i = this.helper.getFeature(n, r ?? null, t);
    i && this.setFeatureValue(e, i, s, -2);
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
      this.objects.push(null), this.types.push(ze), this.error(`Feature '${t}' has no parent object`);
      return;
    }
    const r = s.eClass(), n = e && this.helper.getURI(e) || null, i = this.helper.getFeatureWithElement(r, n, t, !0);
    if (i) {
      const o = this.helper.getFeatureKind(i);
      o === Rt || o === Pt ? (this.objects.push(null), this.types.push(i), this.isNull() || (this.text = "")) : this.createObject(s, i);
    } else
      this.handleUnknownFeature(e, t, s);
  }
  /**
   * Check if xsi:nil="true"
   */
  isNull() {
    return this.attribs ? this.attribs.getValueByName(Fe, Xr) === "true" : !1;
  }
  /**
   * Create child object for reference
   */
  createObject(e, t) {
    const s = this.attribs?.getValueByQName(ts) || this.attribs?.getValueByName("", ts);
    if (s) {
      this.setValueFromId(e, t, s, -1), this.objects.push(null), this.types.push(Qt);
      return;
    }
    const r = this.getXSIType();
    let n = null;
    if (r)
      n = this.createObjectByType("", r, !1);
    else {
      let i = t.getEType();
      if (i && !("getESuperTypes" in i) && typeof i.eIsProxy == "function" && i.eIsProxy()) {
        const o = i.eProxyURI();
        if (o) {
          const l = o.toString(), h = l.indexOf("#");
          if (h > 0) {
            const m = l.substring(0, h), g = l.substring(h + 1), T = this.packageRegistry.getEPackage(m);
            if (T) {
              const v = Le(T, g);
              v && (i = v, typeof t.setEType == "function" && t.setEType(v));
            }
          }
        }
      }
      if (i && "getESuperTypes" in i) {
        const o = i;
        if (o.isAbstract()) {
          this.deferredParent = e, this.deferredFeature = t, this.objects.push(null), this.types.push(Zt);
          return;
        } else {
          const l = o.getEPackage()?.getEFactoryInstance();
          l && (n = l.create(o));
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
      const i = s.eClass(), o = n.getElementFeature(i, r, t);
      if (o) {
        const l = this.helper.getFeatureKind(o);
        l === Rt || l === Pt ? (this.objects.push(null), this.types.push(o), this.isNull() || (this.text = "")) : this.createObject(s, o);
        return;
      }
    }
    if (r) {
      const i = this.packageRegistry.getEPackage(r);
      if (i) {
        const o = i.getEClassifier(t);
        if (o && "getESuperTypes" in o) {
          const l = o, h = s.eClass();
          if (l === h) {
            this.handleObjectAttribs(s), this.objects.push(s), this.types.push(Oe);
            return;
          }
          if (h.isSuperTypeOf(l) && !l.isAbstract()) {
            const m = l.getEPackage()?.getEFactoryInstance();
            if (m) {
              const g = m.create(l);
              for (const v of h.getEAllStructuralFeatures()) {
                if (v.isTransient() || v.isDerived())
                  continue;
                const P = s.eGet(v);
                if (P != null)
                  try {
                    g.eSet(v, P);
                  } catch {
                  }
              }
              this.replaceInParentContainment(s, g);
              const T = this.objects.length - 1;
              this.objects[T] = g, this.handleObjectAttribs(g), this.objects.push(g), this.types.push(Oe);
              return;
            }
          }
        }
      }
    }
    this.objects.push(null), this.types.push(ze), this.error(`Unknown feature '${t}' for type '${s.eClass().getName()}'`);
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
    for (const i of n.getEAllStructuralFeatures()) {
      if (!("isContainment" in i))
        continue;
      const o = i;
      if (o.isContainment()) {
        if (o.isMany()) {
          const l = r.eGet(o);
          if (l) {
            for (let h = l.length - 1; h >= 0; h--)
              if (l[h] === e) {
                l[h] = t;
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
    let i = null;
    if (n) {
      const o = this.packageRegistry.getEPackage(n);
      if (o) {
        const l = o.getEClassifier(t);
        if (l && "getESuperTypes" in l) {
          const h = l;
          if (!h.isAbstract()) {
            const m = h.getEPackage()?.getEFactoryInstance();
            m && (i = m.create(h));
          }
        }
      }
    }
    i ? (this.helper.setValue(s, r, i, -1), this.handleObjectAttribs(i), this.objects[this.objects.length - 1] = i, this.types[this.types.length - 1] = Oe, this.objects.push(i), this.types.push(Oe)) : (this.objects.push(null), this.types.push(ze), this.error(`Cannot resolve type '${t}' for deferred containment`));
  }
  /**
   * Set feature value
   */
  setFeatureValue(e, t, s, r = -1) {
    if (s == null)
      return;
    if ("isContainment" in t)
      if (t.isMany()) {
        const i = s.trim().split(/\s+/);
        for (const o of i)
          o && this.setValueFromId(e, t, o, -1);
      } else
        this.setValueFromId(e, t, s, r);
    else {
      const o = t.getEType();
      let l = null;
      if (o && typeof o.getEPackage == "function")
        l = o.getEPackage()?.getEFactoryInstance() ?? null;
      else if (o && typeof o.eGet == "function" && typeof o.eClass == "function") {
        const h = o.eClass();
        if (h) {
          const m = h.getEStructuralFeature?.("ePackage");
          if (m) {
            const g = o.eGet(m);
            g?.getEFactoryInstance && (l = g.getEFactoryInstance());
          }
        }
      }
      try {
        if (l && o) {
          const h = l.createFromString(o, s);
          this.helper.setValue(e, t, h, r);
        } else
          this.helper.setValue(e, t, s, r);
      } catch (h) {
        const m = h instanceof Error ? h.message : String(h);
        this.error(`Invalid value for feature '${t.getName()}': ${m}`);
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
    const i = t.indexOf("#");
    if (i > 0) {
      const m = t.substring(0, i), g = t.substring(i + 1);
      if (r && !m.includes("://")) {
        const T = r.toString();
        if (m === T || T.endsWith(m) || T.endsWith("/" + m))
          s = k.createURI(T + "#" + g);
        else {
          const v = k.createURI(m).resolve(r);
          s = k.createURI(v.toString() + "#" + g);
        }
      } else
        s = k.createURI(t);
    } else i === 0 ? r ? s = k.createURI(r.toString() + t) : s = k.createURI(t) : (t.startsWith("/"), r ? s = k.createURI(r.toString() + "#" + t) : s = k.createURI("#" + t));
    const o = e.getEType(), l = o && "getESuperTypes" in o ? o : null, h = new _s(s, l || void 0);
    return h.eSetResource(this.resource), h;
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
      const l = this.packageRegistry.getEPackage(r);
      if (l)
        return this.resolveFragmentInPackage(l, n);
      const h = this.resource.getContents();
      for (let g = 0; g < h.length; g++) {
        const T = h.get(g);
        if (T && typeof T.getNsURI == "function") {
          const v = T;
          if (v.getNsURI() === r)
            return this.resolveFragmentInPackage(v, n);
        }
      }
      const m = this.resource.getResourceSet();
      if (m) {
        const g = k.createURI(r), T = m.getResource(g, !0);
        if (T)
          return T.getEObject(n);
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
    const r = s.split("/"), n = Le(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let i = e;
      for (let h = 0; h < r.length - 2; h++) {
        const m = i.getESubpackages();
        let g = null;
        for (let T = 0; T < m.length; T++)
          if (m.get(T).getName() === r[h]) {
            g = m.get(T);
            break;
          }
        if (!g)
          return null;
        i = g;
      }
      const o = r[r.length - 2], l = i.getEClassifier(o);
      if (l && "getEStructuralFeature" in l) {
        const h = l.getEStructuralFeature(r[r.length - 1]);
        if (h)
          return h;
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
class vs {
  constructor(e) {
    this.helper = e || new mt();
  }
  /**
   * Load resource from string
   */
  load(e, t, s) {
    const r = s || /* @__PURE__ */ new Map(), n = this.makeDefaultHandler(e, r), i = wr.parser(!0, {
      xmlns: !0,
      position: !0,
      trim: !1
    }), o = new Gr();
    i.onprocessinginstruction = (h) => {
      h.name;
    }, i.onopentag = (h) => {
      o.clear();
      const m = h;
      for (const [g, T] of Object.entries(m.attributes)) {
        const v = T, P = v.prefix ? `${v.prefix}:${v.local}` : v.local;
        if (v.prefix === "xmlns" || v.name === "xmlns") {
          const D = v.prefix === "xmlns" ? v.local : "";
          n.startPrefixMapping(D, v.value);
        }
        o.add(P, v.local, v.uri, v.value);
      }
      n.lineNumber = i.line, n.columnNumber = i.column, n.startElement(m.uri, m.local, m.name, o);
    }, i.onclosetag = (h) => {
      const m = h.indexOf(":"), g = m >= 0 ? h.substring(m + 1) : h;
      n.endElement("", g, h);
    }, i.ontext = (h) => {
      h.trim() && n.characters(h);
    }, i.oncdata = (h) => {
      n.characters(h);
    }, i.onerror = (h) => {
      console.error("XML Parse Error:", h.message), n.error(h.message);
    }, i.write(t).close(), n.endDocument();
    const l = n.getErrors();
    if (l.length > 0 && e.getErrors) {
      const h = e.getErrors();
      for (const m of l) {
        const g = m.message.match(/\[Line\s*(\d+),?\s*Col\s*(\d+)\]\s*(.*)/i);
        g ? h.push({
          message: g[3] || m.message,
          line: parseInt(g[1], 10),
          column: parseInt(g[2], 10)
        }) : h.push({ message: m.message });
      }
    }
  }
  /**
   * Create the default handler for loading
   */
  makeDefaultHandler(e, t) {
    return new bs(e, this.helper, t);
  }
}
class qr extends vs {
  constructor(e) {
    super(e || new Kr());
  }
  makeDefaultHandler(e, t) {
    return new Hr(e, this.helper, t);
  }
}
class Kr extends mt {
}
class Hr extends bs {
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
function ss(u) {
  return u != null && typeof u.getESuperTypes == "function" && typeof u.getEAllStructuralFeatures == "function";
}
function ut(u) {
  return u != null && typeof u.getELiterals == "function" && typeof u.getEEnumLiteral == "function";
}
class As {
  constructor(e) {
    this.declaredNamespaces = /* @__PURE__ */ new Map(), this.output = [], this.indent = 0, this.indentString = "  ", this.idAttributeName = "id", this.helper = e || new mt(), this.resource = null;
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
    this.output.push("<xmi:XMI"), this.output.push(` xmlns:xmi="${xt}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Fe}"`);
    const s = /* @__PURE__ */ new Set();
    for (const r of t) {
      const n = r.getNsURI(), i = this.getPrefix(r);
      n && i && !s.has(i) && (this.output.push(` xmlns:${i}="${n}"`), this.declaredNamespaces.set(n, i), s.add(i));
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
    const s = e.eClass(), r = s.getEPackage(), n = r ? this.getPrefix(r) : "", i = s.getName() || "Object", o = n ? `${n}:${i}` : i;
    this.writeIndent(), this.output.push(`<${o}`), t && this.writeNamespaces(e), t || this.writeTypeAttribute(e), this.saveID(e), this.writeAttributes(e);
    const l = this.helper.getExtendedMetaData(), h = this.getSimpleContentText(e, l), m = this.hasElementContent(e);
    h !== null ? (this.output.push(`>${this.escapeXml(h)}`), m && (this.output.push(`
`), this.indent++, this.writeElements(e), this.indent--, this.writeIndent()), this.output.push(`</${o}>
`)) : m ? (this.output.push(`>
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
    this.output.push(` xmlns:xmi="${xt}"`), this.output.push(' xmi:version="2.0"'), this.output.push(` xmlns:xsi="${Fe}"`);
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      const i = n.getNsURI(), o = this.getPrefix(n);
      i && o && !s.has(o) && (this.output.push(` xmlns:${o}="${i}"`), this.declaredNamespaces.set(i, o), s.add(o));
    }
    const r = this.helper.getExtendedMetaData();
    r && this.collectEMDNamespaces(e, r, s);
  }
  /**
   * Collect and declare additional namespaces from EMD annotations.
   */
  collectEMDNamespaces(e, t, s) {
    const r = (n) => {
      const i = n.eClass();
      for (const o of i.getEAllStructuralFeatures()) {
        const l = t.getNamespace(o);
        if (l && !this.declaredNamespaces.has(l) && l !== "http://www.w3.org/XML/1998/namespace") {
          const h = this.generatePrefix(l, s);
          h && (this.output.push(` xmlns:${h}="${l}"`), this.declaredNamespaces.set(l, h), s.add(h));
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
      const i = `${r}${n}`;
      if (!t.has(i))
        return i;
    }
    return null;
  }
  /**
   * Collect all packages used by object tree
   */
  collectPackages(e) {
    const t = /* @__PURE__ */ new Set(), s = (r) => {
      const i = r.eClass().getEPackage();
      i && t.add(i);
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
          if (s && s.getFeatureKind(r) === Ke)
            continue;
          const n = r;
          let i = e.eGet(n);
          if (i != null && (i = this.resolveValue(i, e), i != null)) {
            let o = null;
            try {
              o = n.getDefaultValue();
            } catch {
            }
            if (i !== o) {
              const l = this.convertToString(n, i), h = this.getSerializedAttributeName(n, s);
              this.output.push(` ${h}="${this.escapeXml(l)}"`);
            }
          }
        } else if ("isContainment" in r) {
          const n = r;
          if (!n.isContainment()) {
            let i = e.eGet(n);
            if (i != null) {
              const o = this.helper.getSerializedFeatureName(n);
              if (r.isMany()) {
                if (Array.isArray(i) || ae(i)) {
                  const l = [];
                  for (const h of i) {
                    const m = this.resolveValue(h, e);
                    if (m == null || typeof m == "string")
                      continue;
                    const g = m.eResource?.();
                    if (g && g === this.resource) {
                      const T = this.getHref(m);
                      T && l.push(T);
                    }
                  }
                  l.length > 0 && this.output.push(` ${o}="${this.escapeXml(l.join(" "))}"`);
                }
              } else if (i = this.resolveValue(i, e), i != null)
                if (typeof i == "string")
                  this.output.push(` ${o}="${this.escapeXml(i)}"`);
                else if (typeof i == "boolean")
                  this.output.push(` ${o}="${i ? "true" : "false"}"`);
                else if (typeof i == "number")
                  this.output.push(` ${o}="${String(i)}"`);
                else {
                  const l = this.getTypePrefixedHref(n, i);
                  l && this.output.push(` ${o}="${this.escapeXml(l)}"`);
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
    if (Pe(e) && e.eIsProxy()) {
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
        const n = r.getEPackage?.(), i = r.getName?.(), o = e.getName?.();
        if (n && i && o) {
          const l = n.getNsURI?.();
          if (l)
            return `${l}#//${i}/${o}`;
        }
      }
    }
    if ("getEPackage" in e && typeof e.getEPackage == "function") {
      const r = e.getEPackage();
      if (r) {
        const n = r.getNsURI?.(), i = e.getName?.();
        if (n && i)
          return `${n}#//${i}`;
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
      const i = e.getName?.(), o = n.getName?.();
      if (!i || !o)
        return null;
      t.push(o, i), s = n.getEPackage?.() ?? null;
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
      const i = s.getName?.();
      i && t.unshift(i), s = n;
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
    const n = e.getEType(), i = t.eClass();
    if (n && i && i !== n && "isAbstract" in n && n.isAbstract()) {
      const o = i.getEPackage();
      if (o) {
        const l = this.getPrefix(o), h = i.getName();
        if (l && h)
          return `${l}:${h} ${s}`;
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
        if (n.isTransient() || n.isDerived() || !this.isAttribute(n) || r.getFeatureKind(n) !== Ke)
          continue;
        const i = e.eGet(n);
        if (i != null)
          return !0;
      }
    for (const n of s)
      if ("isContainment" in n) {
        const i = n;
        if (n.isTransient())
          continue;
        const o = e.eGet(i);
        if (o == null)
          continue;
        if (i.isContainment()) {
          if ((Array.isArray(o) || ae(o)) && o.length > 0 || !Array.isArray(o) && !ae(o))
            return !0;
        } else if (n.isMany() && (Array.isArray(o) || ae(o)) && o.length > 0)
          for (const l of o) {
            const h = l.eResource?.();
            if (!h || h !== this.resource)
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
        if (r.isTransient() || r.isDerived() || !this.isAttribute(r) || s.getFeatureKind(r) !== Ke)
          continue;
        const i = e.eGet(r);
        if (i == null)
          continue;
        const o = this.getSerializedElementName(r, s), l = r;
        if (r.isMany() && (Array.isArray(i) || ae(i))) {
          for (const h of i)
            if (h != null) {
              this.writeIndent();
              const m = this.convertSingleValueToString(l, h);
              this.output.push(`<${o}>${this.escapeXml(m)}</${o}>
`);
            }
        } else {
          this.writeIndent();
          const h = this.convertToString(l, i);
          this.output.push(`<${o}>${this.escapeXml(h)}</${o}>
`);
        }
      }
    for (const r of t.getEAllStructuralFeatures())
      if ("isContainment" in r) {
        const n = r;
        if (r.isTransient())
          continue;
        const i = e.eGet(n);
        if (i == null)
          continue;
        if (n.isContainment())
          if (Array.isArray(i) || ae(i))
            for (const o of i)
              this.writeElement(n, o);
          else
            this.writeElement(n, i);
        else if (r.isMany() && (Array.isArray(i) || ae(i)) && i.length > 0)
          for (const o of i) {
            const l = this.resolveValue(o, e);
            if (l == null)
              continue;
            const h = typeof l != "string" ? l.eResource?.() : null;
            if (h && h === this.resource)
              continue;
            const m = typeof l == "string" ? l : this.getHref(l);
            m && (this.writeIndent(), this.output.push(`<${this.helper.getSerializedFeatureName(n)} href="${this.escapeXml(m)}"/>
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
    const n = e.getEType(), i = t.eClass();
    if (n && i && i !== n) {
      const h = i.getEPackage(), m = h ? this.getPrefix(h) : "", g = m ? `${m}:${i.getName()}` : i.getName();
      this.output.push(` xsi:type="${g}"`);
    }
    this.saveID(t), this.writeAttributes(t);
    const o = this.getSimpleContentText(t, s), l = this.hasElementContent(t);
    o !== null ? (this.output.push(`>${this.escapeXml(o)}`), l && (this.output.push(`
`), this.indent++, this.writeElements(t), this.indent--, this.writeIndent()), this.output.push(`</${r}>
`)) : l ? (this.output.push(`>
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
    if (Pe(e) && e.eIsProxy()) {
      if ("eResolveProxy" in t && typeof t.eResolveProxy == "function") {
        const r = t.eResolveProxy(e);
        if (r !== e && !(Pe(r) && r.eIsProxy()))
          return r;
      }
      const s = e.eProxyURI();
      if (s && this.resource) {
        const r = this.resource.getResourceSet();
        if (r) {
          const n = s.toString(), i = n.indexOf("#");
          if (i >= 0) {
            const o = n.substring(i + 1);
            let l = this.resource;
            if (i > 0) {
              const h = k.createURI(n.substring(0, i));
              l = r.getResource(h, !0) || this.resource;
            }
            if (l) {
              const h = l.getEObject(o);
              if (h)
                return h;
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
    if (Array.isArray(t) || ae(t)) {
      const r = [];
      for (const n of t)
        n != null && r.push(this.convertSingleValueToString(e, n));
      return r.join(" ");
    }
    if (ut(e.getEType()))
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
    if (!ut(e.getEType())) {
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
        const i = n.getEFactoryInstance();
        if (i)
          return i.convertToString(r, t);
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
    if (t.getContentKind(s) !== Lt)
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
class Vr extends As {
  constructor(e) {
    super(e), this.idAttributeName = "xmi:id";
  }
  writeNamespaces(e) {
    super.writeNamespaces(e);
  }
}
class Is extends Bt {
  constructor(e) {
    super(e), this.idToEObjectMap = /* @__PURE__ */ new Map(), this.eObjectToIDMap = /* @__PURE__ */ new Map(), this.xmlHelper = this.createXMLHelper();
  }
  createXMLHelper() {
    return new mt(this);
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
        const n = await s.createInputStream(r), i = await Qr(n);
        this.loadFromString(i, e);
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
    return new vs(this.xmlHelper);
  }
  /**
   * Create the XML saver
   */
  createXMLSave() {
    return new As(this.xmlHelper);
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
class Jr extends Is {
  createXMLLoad() {
    return new qr(this.xmlHelper);
  }
  createXMLSave() {
    return new Vr(this.xmlHelper);
  }
}
async function Qr(u) {
  const e = u.getReader(), t = new TextDecoder();
  let s = "";
  for (; ; ) {
    const { done: r, value: n } = await e.read();
    if (r)
      break;
    s += t.decode(n, { stream: !0 });
  }
  return s += t.decode(), s;
}
class Zr {
  createResource(e) {
    return new Is(e);
  }
}
class lt {
  createResource(e) {
    return new Jr(e);
  }
}
const Ue = Ve.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
Ue.has("xml") || Ue.set("xml", new Zr());
Ue.has("xmi") || Ue.set("xmi", new lt());
Ue.has("ecore") || Ue.set("ecore", new lt());
class en {
  constructor() {
    this.forwardReferences = [], this.errors = [];
  }
  /**
   * Load a JSON string into the resource.
   */
  load(e, t, s) {
    this.resource = e, this.packageRegistry = e.getResourceSet()?.getPackageRegistry() || de.INSTANCE, this.forwardReferences = [], this.errors = [];
    let r;
    try {
      r = JSON.parse(t);
    } catch (n) {
      this.error(`Invalid JSON: ${n instanceof Error ? n.message : String(n)}`);
      return;
    }
    if (Array.isArray(r))
      for (const n of r) {
        const i = this.loadObject(n);
        i && e.getContents().push(i);
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
    const i = r.getEFactoryInstance().create(s);
    for (const [o, l] of Object.entries(e)) {
      if (o === "eClass" || l == null)
        continue;
      const h = s.getEStructuralFeature(o);
      if (!h) {
        this.error(`Unknown feature '${o}' for type '${s.getName()}'`);
        continue;
      }
      if (this.isAttribute(h))
        this.loadAttribute(i, h, l);
      else {
        const m = h;
        m.isContainment() ? this.loadContainment(i, m, l) : this.loadCrossReference(i, m, l);
      }
    }
    return i;
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
    const i = n.getEClassifier(r);
    return i ? "getESuperTypes" in i ? i : (this.error(`'${r}' is not an EClass`), null) : (this.error(`Classifier '${r}' not found in package '${s}'`), null);
  }
  /**
   * Load an attribute value.
   */
  loadAttribute(e, t, s) {
    if (t.isMany()) {
      const r = Array.isArray(s) ? s : [s], n = e.eGet(t);
      if (n && (Array.isArray(n) || ae(n)))
        for (const i of r)
          n.push(this.convertAttributeValue(t, i));
      else
        e.eSet(t, r.map((i) => this.convertAttributeValue(t, i)));
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
      const n = Array.isArray(s) ? s : [s], i = e.eGet(t);
      for (const o of n)
        if (o && typeof o == "object") {
          const l = this.loadObject(o, r);
          l && i && (Array.isArray(i) || ae(i)) && i.push(l);
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
      r && (Array.isArray(r) || ae(r)) && r.push(s);
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
      const i = this.packageRegistry.getEPackage(s);
      if (i)
        return this.resolveFragmentInPackage(i, r);
      const o = this.resource.getResourceSet();
      if (o) {
        const l = k.createURI(s), h = o.getResource(l, !0);
        if (h)
          return h.getEObject(r);
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
    const r = s.split("/"), n = Le(e, s);
    if (n)
      return n;
    if (r.length >= 2) {
      let i = e;
      for (let h = 0; h < r.length - 2; h++) {
        const m = i.getESubpackages();
        let g = null;
        for (let T = 0; T < m.length; T++)
          if (m.get(T).getName() === r[h]) {
            g = m.get(T);
            break;
          }
        if (!g)
          return null;
        i = g;
      }
      const o = r[r.length - 2], l = i.getEClassifier(o);
      if (l && "getEStructuralFeature" in l) {
        const h = l.getEStructuralFeature(r[r.length - 1]);
        if (h)
          return h;
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
      s = k.createURI(t);
    else if (r === 0) {
      const l = this.resource.getURI();
      l ? s = k.createURI(l.toString() + t) : s = k.createURI(t);
    } else {
      const l = this.resource.getURI();
      l ? s = k.createURI(l.toString() + "#" + t) : s = k.createURI("#" + t);
    }
    const n = e.getEType(), i = n && "getESuperTypes" in n ? n : null, o = new _s(s, i || void 0);
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
const rs = "SERIALIZE_TYPE", ns = "INDENT", tn = "always", sn = "polymorphic";
class rn {
  constructor() {
    this.serializeType = sn, this.indent = 2;
  }
  /**
   * Serialize resource contents to JSON string.
   */
  save(e, t) {
    this.resource = e, t && (t.has(rs) && (this.serializeType = t.get(rs)), t.has(ns) && (this.indent = t.get(ns)));
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
    for (const i of n.getEAllStructuralFeatures()) {
      if (i.isTransient() || i.isDerived())
        continue;
      const o = e.eGet(i);
      if (o != null)
        if (this.isAttribute(i))
          this.saveAttribute(r, e, i, o);
        else {
          const l = i;
          l.isContainment() ? this.saveContainment(r, e, l, o) : this.saveCrossReference(r, e, l, o);
        }
    }
    return r;
  }
  /**
   * Serialize an attribute value.
   */
  saveAttribute(e, t, s, r) {
    try {
      const i = s.getDefaultValue();
      if (r === i)
        return;
    } catch {
    }
    const n = s.getName();
    if (s.isMany()) {
      const i = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      e[n] = i.map((o) => this.convertAttributeValue(s, o));
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
      const i = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      e[n] = i.map((o) => this.saveContainedChild(o, s));
    } else
      e[n] = this.saveContainedChild(r, s);
  }
  /**
   * Serialize a single contained child. Proxies become `{ "$ref": "..." }`.
   */
  saveContainedChild(e, t) {
    if (Pe(e) && e.eIsProxy()) {
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
      const i = Array.isArray(r) || ae(r) ? [...r] : [r];
      if (i.length === 0)
        return;
      const o = [];
      for (const l of i) {
        const h = this.getHref(l);
        h && o.push({ $ref: h });
      }
      o.length > 0 && (e[n] = o);
    } else {
      const i = this.getHref(r);
      i && (e[n] = { $ref: i });
    }
  }
  /**
   * Determine whether the eClass type URI should be written.
   */
  shouldSaveType(e, t, s = !1) {
    if (this.serializeType === tn || s)
      return !0;
    if (t && "isContainment" in t) {
      const n = t.getEType(), i = e.eClass();
      return !!(n && i && n !== i);
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
    if (Pe(e) && e.eIsProxy())
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
        const r = s.getEPackage?.(), n = s.getName?.(), i = e.getName?.();
        if (r && n && i) {
          const o = r.getNsURI?.();
          if (o)
            return `${o}#//${n}/${i}`;
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
class nn extends Bt {
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
      const i = this.getErrors();
      for (const o of n)
        i.push({ message: o.message });
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
    return new en();
  }
  /**
   * Create the JSON saver.
   */
  createJSONSave() {
    return new rn();
  }
  /**
   * Unload resource.
   */
  unload() {
    super.unload(), this.clearIdMaps();
  }
}
class an {
  createResource(e) {
    return new nn(e);
  }
}
const is = Ve.INSTANCE_FACTORY_REGISTRY.getExtensionToFactoryMap();
is.has("json") || is.set("json", new an());
class on {
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
const W = new on();
class z extends Te {
  constructor() {
    super(...arguments), this._name = null, this.abstract_ = !1, this.interface_ = !1, this._eSuperTypes = null, this._eStructuralFeatures = null, this._eOperations = null, this.ePackage = null, this.instanceClassName = null, this.instanceClass = null, this.featureID = 0, this.eTypeParameters = K(this), this.eGenericSuperTypes = K(this), this.eAnnotations = K(this), this.xmlNameToFeature = /* @__PURE__ */ new Map(), this.allSuperTypesCache = { value: null }, this.allFeaturesCache = { value: null }, this.attributesCache = { value: null }, this.allAttributesCache = { value: null }, this.referencesCache = { value: null }, this.allReferencesCache = { value: null }, this.allContainmentsCache = { value: null }, this.allOperationsCache = { value: null };
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
    return this._eSuperTypes === null && (this._eSuperTypes = K(this, () => this.resolveOwnFeature("eSuperTypes"))), this._eSuperTypes;
  }
  getEAllSuperTypes() {
    return Re(this.allSuperTypesCache, "getEAllSuperTypes", () => {
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
      const e = this, t = new ar(this, () => {
        if (W.isRegistered())
          try {
            const s = W.getEClassClass();
            if (s !== e && s instanceof z && s._eStructuralFeatures !== null)
              return s.getEStructuralFeature("eStructuralFeatures");
          } catch {
          }
        return null;
      }, (s, r) => {
        "setEContainingClass" in s && s.setEContainingClass(r), r && "setFeatureID" in s && s.setFeatureID(this.featureID++);
      });
      this._eStructuralFeatures = Ce(t);
    }
    return this._eStructuralFeatures;
  }
  getEAllStructuralFeatures() {
    return Re(this.allFeaturesCache, "getEAllStructuralFeatures", () => {
      const e = [];
      for (const t of this.getEAllSuperTypes())
        e.push(...t.getEStructuralFeatures());
      return e.push(...this.getEStructuralFeatures()), e;
    });
  }
  getEAttributes() {
    return Re(this.attributesCache, "getEAttributes", () => this.getEStructuralFeatures().filter((e) => this.isAttribute(e)));
  }
  getEAllAttributes() {
    return Re(this.allAttributesCache, "getEAllAttributes", () => this.getEAllStructuralFeatures().filter((e) => this.isAttribute(e)));
  }
  getEReferences() {
    return Re(this.referencesCache, "getEReferences", () => this.getEStructuralFeatures().filter((e) => this.isReference(e)));
  }
  getEAllReferences() {
    return Re(this.allReferencesCache, "getEAllReferences", () => this.getEAllStructuralFeatures().filter((e) => this.isReference(e)));
  }
  getEAllContainments() {
    return Re(this.allContainmentsCache, "getEAllContainments", () => this.getEAllReferences().filter((e) => e.isContainment()));
  }
  getEOperations() {
    return this._eOperations === null && (this._eOperations = K(this, () => this.resolveOwnFeature("eOperations"))), this._eOperations;
  }
  getEAllOperations() {
    return Re(this.allOperationsCache, "getEAllOperations", () => {
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
    if (!W.isRegistered())
      return null;
    try {
      const t = W.getEClassClass();
      if (t !== this && t instanceof z && t._eStructuralFeatures !== null)
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
        if (r instanceof z) {
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
    return W.getEClassClass();
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
        Q(this.getESuperTypes(), t);
        break;
      case "eStructuralFeatures":
        Q(this.getEStructuralFeatures(), t);
        break;
      case "eOperations":
        Q(this.getEOperations(), t);
        break;
      case "eTypeParameters":
        Q(this.eTypeParameters, t);
        break;
      case "eGenericSuperTypes":
        Q(this.eGenericSuperTypes, t);
        break;
      case "eAnnotations":
        Q(this.eAnnotations, t);
        break;
      case "instanceClassName":
        this.instanceClassName = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class cn {
  constructor() {
    this.convertersByClassName = /* @__PURE__ */ new Map(), this.convertersByName = /* @__PURE__ */ new Map(), this.registerDefaultConverters();
  }
  /**
   * Register default converters for standard EMF types
   */
  registerDefaultConverters() {
    const e = {
      fromString: (g) => g.toLowerCase() === "true",
      toString: (g) => String(g)
    };
    this.registerByClassName("boolean", e), this.registerByClassName("java.lang.Boolean", e), this.registerByName("EBoolean", e), this.registerByName("EBooleanObject", e);
    const t = {
      fromString: (g) => parseInt(g, 10),
      toString: (g) => String(g)
    };
    this.registerByClassName("int", t), this.registerByClassName("java.lang.Integer", t), this.registerByClassName("short", t), this.registerByClassName("java.lang.Short", t), this.registerByClassName("byte", t), this.registerByClassName("java.lang.Byte", t), this.registerByName("EInt", t), this.registerByName("EIntegerObject", t), this.registerByName("EShort", t), this.registerByName("EShortObject", t), this.registerByName("EByte", t), this.registerByName("EByteObject", t);
    const s = {
      fromString: (g) => {
        const T = parseInt(g, 10);
        return Math.abs(T) > Number.MAX_SAFE_INTEGER ? BigInt(g) : T;
      },
      toString: (g) => String(g)
    };
    this.registerByClassName("long", s), this.registerByClassName("java.lang.Long", s), this.registerByName("ELong", s), this.registerByName("ELongObject", s);
    const r = {
      fromString: (g) => parseFloat(g),
      toString: (g) => String(g)
    };
    this.registerByClassName("float", r), this.registerByClassName("java.lang.Float", r), this.registerByClassName("double", r), this.registerByClassName("java.lang.Double", r), this.registerByName("EFloat", r), this.registerByName("EFloatObject", r), this.registerByName("EDouble", r), this.registerByName("EDoubleObject", r);
    const n = {
      fromString: (g) => g,
      toString: (g) => g ?? ""
    };
    this.registerByClassName("java.lang.String", n), this.registerByClassName("java.lang.Object", n), this.registerByName("EString", n);
    const i = {
      fromString: (g) => g.charAt(0) || "",
      toString: (g) => g ?? ""
    };
    this.registerByClassName("char", i), this.registerByClassName("java.lang.Character", i), this.registerByName("EChar", i), this.registerByName("ECharacterObject", i);
    const o = {
      fromString: (g) => new Date(g),
      toString: (g) => g?.toISOString() ?? ""
    };
    this.registerByClassName("java.util.Date", o), this.registerByName("EDate", o);
    const l = {
      fromString: (g) => g,
      // Keep as string to preserve precision
      toString: (g) => g ?? "0"
    };
    this.registerByClassName("java.math.BigDecimal", l), this.registerByClassName("java.math.BigInteger", l), this.registerByName("EBigDecimal", l), this.registerByName("EBigInteger", l);
    const h = {
      fromString: (g) => {
        if (typeof atob == "function") {
          const T = atob(g), v = new Uint8Array(T.length);
          for (let P = 0; P < T.length; P++)
            v[P] = T.charCodeAt(P);
          return v;
        }
        return new Uint8Array(Buffer.from(g, "base64"));
      },
      toString: (g) => typeof btoa == "function" ? btoa(String.fromCharCode(...g)) : Buffer.from(g).toString("base64")
    };
    this.registerByClassName("byte[]", h), this.registerByName("EByteArray", h);
    const m = {
      fromString: (g) => g,
      toString: (g) => String(g ?? "")
    };
    this.registerByName("EFeatureMapEntry", m);
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
    if (ut(e)) {
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
    if (ut(e)) {
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
const I = new cn();
class Ut {
  constructor() {
    this.ePackage = null, this.creators = /* @__PURE__ */ new Map(), this.eAnnotations = K(this);
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
    return new Ns(e);
  }
  createFromString(e, t) {
    return I.createFromString(e, t);
  }
  convertToString(e, t) {
    return I.convertToString(e, t);
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
    return W.getEFactoryClass();
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
class un extends me {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eClassifiers feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && W.isRegistered()) {
      const t = W.getEPackageClass();
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
class ln extends me {
  constructor(e) {
    super(e, null), this.pkg = e;
  }
  /**
   * Lazily resolve the eSubpackages feature from EcorePackage.
   * This avoids circular dependency issues during initialization.
   */
  getFeature() {
    if (!this.feature && W.isRegistered()) {
      const e = W.getEPackageClass();
      this.feature = e.getEStructuralFeature("eSubpackages");
    }
    return this.feature;
  }
  didAdd(e, t) {
    t instanceof Ae && (t.eSuperPackage = this.pkg), super.didAdd(e, t);
  }
  didAddMany(e, t) {
    for (const s of t)
      s instanceof Ae && (s.eSuperPackage = this.pkg);
    super.didAddMany(e, t);
  }
  didRemove(e, t) {
    t instanceof Ae && (t.eSuperPackage = null), super.didRemove(e, t);
  }
  didClear(e) {
    for (const t of e)
      t instanceof Ae && (t.eSuperPackage = null);
    super.didClear(e);
  }
  didSet(e, t, s) {
    s instanceof Ae && (s.eSuperPackage = null), t instanceof Ae && (t.eSuperPackage = this.pkg), super.didSet(e, t, s);
  }
}
class Ae extends Te {
  /**
   * Constructor
   */
  constructor(e, t) {
    super(), this.name = null, this.nsURI = null, this.nsPrefix = null, this.eFactoryInstance = null, this._eClassifiers = null, this._eSubpackages = null, this.eSuperPackage = null, this.eAnnotations = K(this), e && (this.nsURI = e), t && (this.eFactoryInstance = t);
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
      const e = new Ut();
      e.setEPackage(this), this.eFactoryInstance = e;
    }
    return this.eFactoryInstance;
  }
  setEFactoryInstance(e) {
    this.eFactoryInstance = e;
  }
  getEClassifiers() {
    return this._eClassifiers || (this._eClassifiers = Ce(new un(this))), this._eClassifiers;
  }
  getESubpackages() {
    return this._eSubpackages || (this._eSubpackages = Ce(new ln(this))), this._eSubpackages;
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
    return W.getEPackageClass();
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
class ws extends Te {
  constructor() {
    super(...arguments), this.name = null, this.changeable = !0, this.volatile = !1, this.transient = !1, this.defaultValueLiteral = null, this.unsettable = !1, this.derived = !1, this.eType = null, this.eGenericType = null, this.eContainingClass = null, this.lowerBound = 0, this.upperBound = 1, this.featureID = -1, this.eAnnotations = K(this);
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
    if (this.eType && Pe(this.eType) && this.eType.eIsProxy()) {
      const e = this.eType, t = e.eProxyURI();
      if (t) {
        const s = this.eResolveProxy(e);
        if (s !== e)
          return this.eType = s, this.eType;
        const r = t.toString(), n = r.indexOf("#");
        if (n > 0) {
          const i = r.substring(0, n), o = r.substring(n + 1), l = [de.INSTANCE];
          let h = this.eResource()?.getResourceSet();
          if (!h) {
            let m = this.eContainingClass;
            for (; m; ) {
              if (typeof m.eResource == "function") {
                const g = m.eResource();
                if (g) {
                  h = g.getResourceSet();
                  break;
                }
              }
              m = m.getEPackage?.() ?? m.getESuperPackage?.() ?? m.eContainer?.();
            }
          }
          h && l.push(h.getPackageRegistry());
          for (const m of l) {
            const g = m.getEPackage(i);
            if (g) {
              const D = Le(g, o);
              if (D)
                return this.eType = D, this.eType;
            }
            let T = i;
            const v = T.lastIndexOf("/");
            v >= 0 && (T = T.substring(v + 1));
            const P = T.indexOf(".");
            if (P > 0 && (T = T.substring(0, P)), T)
              for (const D of m.keys()) {
                const F = m.getEPackage(D);
                if (F && F.getName() === T) {
                  const x = Le(F, o);
                  if (x)
                    return this.eType = x, this.eType;
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
    return W.getEStructuralFeatureClass();
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
        Q(this.eAnnotations, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class G extends ws {
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
    return W.getEAttributeClass();
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
class V extends ws {
  constructor() {
    super(...arguments), this.containment = !1, this.resolveProxies = !0, this.eOpposite = null, this.eKeys = K(this);
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
    return W.getEReferenceClass();
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
        Q(this.eKeys, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Y extends Te {
  constructor() {
    super(...arguments), this.name = null, this.instanceClassName = null, this.instanceClass = null, this.ePackage = null, this.serializable = !0, this.eAnnotations = K(this), this.eTypeParameters = K(this);
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
    return W.getEDataTypeClass();
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
        Q(this.eAnnotations, t);
        break;
      case "eTypeParameters":
        Q(this.eTypeParameters, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
(() => {
  const u = new Y();
  return u.setName("EString"), u.setInstanceClassName("java.lang.String"), u;
})();
(() => {
  const u = new Y();
  return u.setName("EInt"), u.setInstanceClassName("int"), u;
})();
(() => {
  const u = new Y();
  return u.setName("EBoolean"), u.setInstanceClassName("boolean"), u;
})();
(() => {
  const u = new Y();
  return u.setName("EFloat"), u.setInstanceClassName("float"), u;
})();
(() => {
  const u = new Y();
  return u.setName("EDouble"), u.setInstanceClassName("double"), u;
})();
(() => {
  const u = new Y();
  return u.setName("ELong"), u.setInstanceClassName("long"), u;
})();
(() => {
  const u = new Y();
  return u.setName("EDate"), u.setInstanceClassName("java.util.Date"), u;
})();
class hn {
  constructor(e, t) {
    this.resources = new me(), this.packageRegistry = e || this.createDefaultPackageRegistry(), this.resourceFactoryRegistry = t || Ve.INSTANCE_FACTORY_REGISTRY, this.uriConverter = this.createDefaultURIConverter();
  }
  getResources() {
    return this.resources;
  }
  getResource(e, t) {
    const s = this.resources.find((i) => {
      const o = i.getURI();
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
    return n && n.load().catch((i) => {
      console.error(`Failed to load resource ${e}:`, i);
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
    const r = new fn(t, e);
    return r.setResourceSet(this), this.resources.push(r), r;
  }
  /**
   * Async version of getResource that awaits resource.load().
   * Uses URIConverter.createInputStream() for loading.
   */
  async getResourceAsync(e, t) {
    const s = this.resources.find((i) => {
      const o = i.getURI();
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
    return t ? s = t.createResource(e) : s = new Bt(e), "setResourceSet" in s && s.setResourceSet(this), this.resources.push(s), s;
  }
  getEObject(e, t) {
    const s = e.fragment();
    if (!s)
      return null;
    const r = k.createURI(e.toString().split("#")[0]), n = this.getResource(r, t);
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
      for (const i of n)
        try {
          const o = k.createURI(i);
          (await this.getResourceAsync(o, !0))?.isLoaded() && (t++, s = !0);
        } catch (o) {
          console.warn(`[resolveProxiesAsync] Failed to resolve ${i}:`, o);
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
            for (const i of n)
              this.checkProxy(i, t);
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
        return r ? "getEPackage" in r ? r.getEPackage() : r : de.INSTANCE.getEPackage(s);
      },
      getEFactory(s) {
        const r = this.getEPackage(s);
        return r ? r.getEFactoryInstance() : null;
      },
      get(s) {
        return e.get(s) || de.INSTANCE.get(s);
      },
      set(s, r) {
        e.set(s, r), r && !("getEPackage" in r) && typeof r.getESubpackages == "function" && t(r);
      },
      registerPackage(s) {
        this.set(Ss(s), s);
      },
      delete(s) {
        return e.delete(s);
      },
      has(s) {
        return e.has(s) || de.INSTANCE.has(s);
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
          const n = s.toString(), i = t.toString();
          if (i.startsWith(n)) {
            const o = i.substring(n.length);
            return k.createURI(r.toString() + o);
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
class fn {
  constructor(e, t) {
    this.resourceSet = null, this.uri = e, this._syntheticPackage = t;
    const s = new me(null, null);
    s.add(t), this._contents = Ce(s);
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
    const s = t.split("/"), r = Le(this._syntheticPackage, t);
    if (r)
      return r;
    if (s.length >= 2) {
      let n = this._syntheticPackage;
      for (let l = 0; l < s.length - 2; l++) {
        const h = n.getESubpackages();
        let m = null;
        for (let g = 0; g < h.length; g++)
          if (h.get(g).getName() === s[l]) {
            m = h.get(g);
            break;
          }
        if (!m)
          return null;
        n = m;
      }
      const i = s[s.length - 2], o = n.getEClassifier(i);
      if (o && "getEStructuralFeature" in o) {
        const l = o.getEStructuralFeature(s[s.length - 1]);
        if (l)
          return l;
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
class gn extends Te {
  constructor() {
    super(...arguments), this.source = null, this._detailsMap = null, this.eModelElement = null, this.contents = K(this), this.references = K(this), this.eAnnotations = K(this);
  }
  getOrCreateDetailsMap() {
    if (!this._detailsMap) {
      const t = W.getEAnnotationClass().getEStructuralFeature("details"), s = W.getEStringToStringMapEntryClass();
      this._detailsMap = Sr(this, t, s);
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
    return W.getEAnnotationClass();
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
          for (const [n, i] of t)
            r.putByKey(n, i);
        }
        super.eSet(e, t);
        break;
      case "eModelElement":
        this.eModelElement = t, super.eSet(e, t);
        break;
      case "contents":
        Q(this.contents, t);
        break;
      case "references":
        Q(this.references, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class Rs extends Te {
  constructor() {
    super(...arguments), this._name = null, this._value = 0, this.instance = null, this.literal = null, this.eEnum = null, this.eAnnotations = K(this);
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
    return W.getEEnumLiteralClass();
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
        Q(this.eAnnotations, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class pn extends Y {
  constructor() {
    super(...arguments), this.eLiterals = K(this);
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
    return W.getEEnumClass();
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
        if (Q(this.eLiterals, t))
          for (const r of this.eLiterals)
            r instanceof Rs && r.setEEnum(this);
        super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
}
class dn extends Te {
  constructor() {
    super(...arguments), this.name = null, this.eContainingClass = null, this.eType = null, this.eParameters = K(this), this.eExceptions = K(this), this.eAnnotations = K(this), this.eGenericType = null, this.eTypeParameters = K(this), this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
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
      const n = t[r].getEType(), i = s[r].getEType();
      if (n !== i)
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
    return W.getEOperationClass();
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
        Q(this.eTypeParameters, t);
        break;
      case "eParameters":
        Q(this.eParameters, t);
        break;
      case "eExceptions":
        Q(this.eExceptions, t);
        break;
      case "eAnnotations":
        Q(this.eAnnotations, t);
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
class mn extends Te {
  constructor() {
    super(...arguments), this.name = null, this.eType = null, this.eOperation = null, this.eAnnotations = K(this), this.eGenericType = null, this.ordered = !0, this.unique = !0, this.lowerBound = 0, this.upperBound = 1;
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
    return W.getEParameterClass();
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
        Q(this.eAnnotations, t);
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
class yn extends Te {
  constructor() {
    super(...arguments), this.eClassifier = null, this.eTypeParameter = null, this.eTypeArguments = K(this), this.eUpperBound = null, this.eLowerBound = null;
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
    return this.eUpperBound ? this.eUpperBound.getERawType() : W.getEObjectClass();
  }
  eClass() {
    return W.getEGenericTypeClass();
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
        Q(this.eTypeArguments, t);
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
class En extends Te {
  constructor() {
    super(...arguments), this.name = null, this.eBounds = K(this), this.eAnnotations = K(this);
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
    return W.getETypeParameterClass();
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
        Q(this.eBounds, t);
        break;
      case "eAnnotations":
        Q(this.eAnnotations, t);
        break;
    }
    super.eSet(e, t);
  }
}
const Cn = "ecore.xml.type";
let Ye = null;
function Tn() {
  return Ye || (Ye = new Nn(), Ye.initialize(), de.INSTANCE.set(Ps, Ye)), Ye;
}
const Sn = [
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
class Nn extends Ae {
  constructor() {
    super(), this._dataTypes = /* @__PURE__ */ new Map(), this._initialized = !1, this.setName("type"), this.setNsURI(Ps), this.setNsPrefix(Cn);
  }
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0;
    for (const [t, s] of Sn) {
      const r = new Y();
      r.setName(t), r.setInstanceClassName(s), this.getEClassifiers().push(r), this._dataTypes.set(t, r);
    }
    for (const t of this.getEClassifiers())
      "setEPackage" in t && t.setEPackage(this);
    const e = new _n(this);
    this.setEFactoryInstance(e), this.registerConverters();
  }
  registerConverters() {
    const e = { fromString: (o) => o.toLowerCase() === "true" || o === "1", toString: (o) => String(o) };
    I.registerByName("Boolean", e), I.registerByName("BooleanObject", e);
    const t = { fromString: (o) => parseInt(o, 10), toString: (o) => String(o) };
    I.registerByName("Int", t), I.registerByName("IntObject", t), I.registerByName("Short", t), I.registerByName("ShortObject", t), I.registerByName("Byte", t), I.registerByName("ByteObject", t), I.registerByName("UnsignedByte", t), I.registerByName("UnsignedByteObject", t), I.registerByName("UnsignedShort", t), I.registerByName("UnsignedShortObject", t), I.registerByName("UnsignedInt", t), I.registerByName("UnsignedIntObject", t);
    const s = {
      fromString: (o) => {
        const l = parseInt(o, 10);
        return Math.abs(l) > Number.MAX_SAFE_INTEGER ? BigInt(o) : l;
      },
      toString: (o) => String(o)
    };
    I.registerByName("Long", s), I.registerByName("LongObject", s);
    const r = { fromString: (o) => parseFloat(o), toString: (o) => String(o) };
    I.registerByName("Float", r), I.registerByName("FloatObject", r), I.registerByName("Double", r), I.registerByName("DoubleObject", r);
    const n = { fromString: (o) => o, toString: (o) => o ?? "0" };
    I.registerByName("Decimal", n), I.registerByName("Integer", n), I.registerByName("NonNegativeInteger", n), I.registerByName("NonPositiveInteger", n), I.registerByName("NegativeInteger", n), I.registerByName("PositiveInteger", n), I.registerByName("UnsignedLong", n);
    const i = { fromString: (o) => o, toString: (o) => o ?? "" };
    I.registerByName("String", i), I.registerByName("AnySimpleType", i), I.registerByName("AnyURI", i), I.registerByName("NormalizedString", i), I.registerByName("Token", i), I.registerByName("Name", i), I.registerByName("NCName", i), I.registerByName("Language", i), I.registerByName("ID", i), I.registerByName("IDREF", i), I.registerByName("ENTITY", i), I.registerByName("NMTOKEN", i), I.registerByName("Date", i), I.registerByName("DateTime", i), I.registerByName("Time", i), I.registerByName("Duration", i), I.registerByName("GDay", i), I.registerByName("GMonth", i), I.registerByName("GMonthDay", i), I.registerByName("GYear", i), I.registerByName("GYearMonth", i), I.registerByName("QName", i), I.registerByName("NOTATION", i);
  }
  getDataType(e) {
    return this._dataTypes.get(e) ?? null;
  }
}
class _n extends Ut {
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
const jt = "http://www.eclipse.org/emf/2002/Ecore", bn = "ecore", Ps = "http://www.eclipse.org/emf/2003/XMLType";
let Be = null;
function $t() {
  return Be || (Be = new An(), Be.initialize(), vn(), W.register($t)), Be;
}
function vn() {
  Be && (de.INSTANCE.set(jt, Be), Tn());
}
class An extends Ae {
  constructor() {
    super(), this._initialized = !1, this.setName("ecore"), this.setNsURI(jt), this.setNsPrefix(bn);
  }
  /**
   * Initialize the package (called once)
   */
  initialize() {
    if (this._initialized)
      return;
    this._initialized = !0, this.createDataTypes(), this.createClasses(), this.createAttributes(), this.createReferences(), this.initializeClassifierPackages();
    const e = new In(this);
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
    this._eBooleanDataType = new Y(), this._eBooleanDataType.setName("EBoolean"), this._eBooleanDataType.setInstanceClassName("boolean"), this.getEClassifiers().push(this._eBooleanDataType), this._eIntDataType = new Y(), this._eIntDataType.setName("EInt"), this._eIntDataType.setInstanceClassName("int"), this.getEClassifiers().push(this._eIntDataType), this._eStringDataType = new Y(), this._eStringDataType.setName("EString"), this._eStringDataType.setInstanceClassName("java.lang.String"), this.getEClassifiers().push(this._eStringDataType), this._eDoubleDataType = new Y(), this._eDoubleDataType.setName("EDouble"), this._eDoubleDataType.setInstanceClassName("double"), this.getEClassifiers().push(this._eDoubleDataType), this._eFloatDataType = new Y(), this._eFloatDataType.setName("EFloat"), this._eFloatDataType.setInstanceClassName("float"), this.getEClassifiers().push(this._eFloatDataType), this._eLongDataType = new Y(), this._eLongDataType.setName("ELong"), this._eLongDataType.setInstanceClassName("long"), this.getEClassifiers().push(this._eLongDataType), this._eShortDataType = new Y(), this._eShortDataType.setName("EShort"), this._eShortDataType.setInstanceClassName("short"), this.getEClassifiers().push(this._eShortDataType), this._eByteDataType = new Y(), this._eByteDataType.setName("EByte"), this._eByteDataType.setInstanceClassName("byte"), this.getEClassifiers().push(this._eByteDataType), this._eCharDataType = new Y(), this._eCharDataType.setName("EChar"), this._eCharDataType.setInstanceClassName("char"), this.getEClassifiers().push(this._eCharDataType), this._eDateDataType = new Y(), this._eDateDataType.setName("EDate"), this._eDateDataType.setInstanceClassName("java.util.Date"), this.getEClassifiers().push(this._eDateDataType), this._eBigIntegerDataType = new Y(), this._eBigIntegerDataType.setName("EBigInteger"), this._eBigIntegerDataType.setInstanceClassName("java.math.BigInteger"), this.getEClassifiers().push(this._eBigIntegerDataType), this._eBigDecimalDataType = new Y(), this._eBigDecimalDataType.setName("EBigDecimal"), this._eBigDecimalDataType.setInstanceClassName("java.math.BigDecimal"), this.getEClassifiers().push(this._eBigDecimalDataType), this._eFeatureMapEntryDataType = new Y(), this._eFeatureMapEntryDataType.setName("EFeatureMapEntry"), this._eFeatureMapEntryDataType.setInstanceClassName("org.eclipse.emf.ecore.util.FeatureMap.Entry"), this.getEClassifiers().push(this._eFeatureMapEntryDataType), this._eJavaObjectDataType = new Y(), this._eJavaObjectDataType.setName("EJavaObject"), this._eJavaObjectDataType.setInstanceClassName("java.lang.Object"), this.getEClassifiers().push(this._eJavaObjectDataType), this._eJavaClassDataType = new Y(), this._eJavaClassDataType.setName("EJavaClass"), this._eJavaClassDataType.setInstanceClassName("java.lang.Class"), this.getEClassifiers().push(this._eJavaClassDataType);
  }
  createClasses() {
    this._eObjectClass = new z(), this._eObjectClass.setName("EObject"), this.getEClassifiers().push(this._eObjectClass), this._eModelElementClass = new z(), this._eModelElementClass.setName("EModelElement"), this._eModelElementClass.setAbstract(!0), this._eModelElementClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eModelElementClass), this._eNamedElementClass = new z(), this._eNamedElementClass.setName("ENamedElement"), this._eNamedElementClass.setAbstract(!0), this._eNamedElementClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eNamedElementClass), this._eTypedElementClass = new z(), this._eTypedElementClass.setName("ETypedElement"), this._eTypedElementClass.setAbstract(!0), this._eTypedElementClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypedElementClass), this._eClassifierClass = new z(), this._eClassifierClass.setName("EClassifier"), this._eClassifierClass.setAbstract(!0), this._eClassifierClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eClassifierClass), this._eClassClass = new z(), this._eClassClass.setName("EClass"), this._eClassClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eClassClass), this._eDataTypeClass = new z(), this._eDataTypeClass.setName("EDataType"), this._eDataTypeClass.getESuperTypes().push(this._eClassifierClass), this.getEClassifiers().push(this._eDataTypeClass), this._eEnumClass = new z(), this._eEnumClass.setName("EEnum"), this._eEnumClass.getESuperTypes().push(this._eDataTypeClass), this.getEClassifiers().push(this._eEnumClass), this._eEnumLiteralClass = new z(), this._eEnumLiteralClass.setName("EEnumLiteral"), this._eEnumLiteralClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eEnumLiteralClass), this._ePackageClass = new z(), this._ePackageClass.setName("EPackage"), this._ePackageClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._ePackageClass), this._eFactoryClass = new z(), this._eFactoryClass.setName("EFactory"), this._eFactoryClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eFactoryClass), this._eStructuralFeatureClass = new z(), this._eStructuralFeatureClass.setName("EStructuralFeature"), this._eStructuralFeatureClass.setAbstract(!0), this._eStructuralFeatureClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eStructuralFeatureClass), this._eAttributeClass = new z(), this._eAttributeClass.setName("EAttribute"), this._eAttributeClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eAttributeClass), this._eReferenceClass = new z(), this._eReferenceClass.setName("EReference"), this._eReferenceClass.getESuperTypes().push(this._eStructuralFeatureClass), this.getEClassifiers().push(this._eReferenceClass), this._eOperationClass = new z(), this._eOperationClass.setName("EOperation"), this._eOperationClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eOperationClass), this._eParameterClass = new z(), this._eParameterClass.setName("EParameter"), this._eParameterClass.getESuperTypes().push(this._eTypedElementClass), this.getEClassifiers().push(this._eParameterClass), this._eAnnotationClass = new z(), this._eAnnotationClass.setName("EAnnotation"), this._eAnnotationClass.getESuperTypes().push(this._eModelElementClass), this.getEClassifiers().push(this._eAnnotationClass), this._eTypeParameterClass = new z(), this._eTypeParameterClass.setName("ETypeParameter"), this._eTypeParameterClass.getESuperTypes().push(this._eNamedElementClass), this.getEClassifiers().push(this._eTypeParameterClass), this._eGenericTypeClass = new z(), this._eGenericTypeClass.setName("EGenericType"), this._eGenericTypeClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eGenericTypeClass), this._eStringToStringMapEntryClass = new z(), this._eStringToStringMapEntryClass.setName("EStringToStringMapEntry"), this._eStringToStringMapEntryClass.getESuperTypes().push(this._eObjectClass), this.getEClassifiers().push(this._eStringToStringMapEntryClass);
  }
  createAttributes() {
    const e = new G();
    e.setName("name"), e.setEType(this._eStringDataType), this._eNamedElementClass.getEStructuralFeatures().push(e);
    const t = new G();
    t.setName("ordered"), t.setEType(this._eBooleanDataType), t.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new G();
    s.setName("unique"), s.setEType(this._eBooleanDataType), s.setDefaultValueLiteral("true"), this._eTypedElementClass.getEStructuralFeatures().push(s);
    const r = new G();
    r.setName("lowerBound"), r.setEType(this._eIntDataType), r.setDefaultValueLiteral("0"), this._eTypedElementClass.getEStructuralFeatures().push(r);
    const n = new G();
    n.setName("upperBound"), n.setEType(this._eIntDataType), n.setDefaultValueLiteral("1"), this._eTypedElementClass.getEStructuralFeatures().push(n);
    const i = new G();
    i.setName("instanceClassName"), i.setEType(this._eStringDataType), this._eClassifierClass.getEStructuralFeatures().push(i);
    const o = new G();
    o.setName("abstract"), o.setEType(this._eBooleanDataType), o.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(o);
    const l = new G();
    l.setName("interface"), l.setEType(this._eBooleanDataType), l.setDefaultValueLiteral("false"), this._eClassClass.getEStructuralFeatures().push(l);
    const h = new G();
    h.setName("nsURI"), h.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(h);
    const m = new G();
    m.setName("nsPrefix"), m.setEType(this._eStringDataType), this._ePackageClass.getEStructuralFeatures().push(m);
    const g = new G();
    g.setName("changeable"), g.setEType(this._eBooleanDataType), g.setDefaultValueLiteral("true"), this._eStructuralFeatureClass.getEStructuralFeatures().push(g);
    const T = new G();
    T.setName("volatile"), T.setEType(this._eBooleanDataType), T.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(T);
    const v = new G();
    v.setName("transient"), v.setEType(this._eBooleanDataType), v.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(v);
    const P = new G();
    P.setName("defaultValueLiteral"), P.setEType(this._eStringDataType), this._eStructuralFeatureClass.getEStructuralFeatures().push(P);
    const D = new G();
    D.setName("unsettable"), D.setEType(this._eBooleanDataType), D.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(D);
    const F = new G();
    F.setName("derived"), F.setEType(this._eBooleanDataType), F.setDefaultValueLiteral("false"), this._eStructuralFeatureClass.getEStructuralFeatures().push(F);
    const x = new G();
    x.setName("iD"), x.setEType(this._eBooleanDataType), x.setDefaultValueLiteral("false"), this._eAttributeClass.getEStructuralFeatures().push(x);
    const te = new G();
    te.setName("containment"), te.setEType(this._eBooleanDataType), te.setDefaultValueLiteral("false"), this._eReferenceClass.getEStructuralFeatures().push(te);
    const he = new G();
    he.setName("resolveProxies"), he.setEType(this._eBooleanDataType), he.setDefaultValueLiteral("true"), this._eReferenceClass.getEStructuralFeatures().push(he);
    const oe = new G();
    oe.setName("value"), oe.setEType(this._eIntDataType), oe.setDefaultValueLiteral("0"), this._eEnumLiteralClass.getEStructuralFeatures().push(oe);
    const j = new G();
    j.setName("literal"), j.setEType(this._eStringDataType), this._eEnumLiteralClass.getEStructuralFeatures().push(j);
    const ce = new G();
    ce.setName("source"), ce.setEType(this._eStringDataType), this._eAnnotationClass.getEStructuralFeatures().push(ce);
    const Se = new G();
    Se.setName("key"), Se.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(Se);
    const ue = new G();
    ue.setName("value"), ue.setEType(this._eStringDataType), this._eStringToStringMapEntryClass.getEStructuralFeatures().push(ue);
    const Ie = new G();
    Ie.setName("serializable"), Ie.setEType(this._eBooleanDataType), Ie.setDefaultValueLiteral("true"), this._eDataTypeClass.getEStructuralFeatures().push(Ie);
  }
  createReferences() {
    const e = new V();
    e.setName("eAnnotations"), e.setEType(this._eAnnotationClass), e.setContainment(!0), e.setUpperBound(-1), this._eModelElementClass.getEStructuralFeatures().push(e);
    const t = new V();
    t.setName("eType"), t.setEType(this._eClassifierClass), this._eTypedElementClass.getEStructuralFeatures().push(t);
    const s = new V();
    s.setName("eSuperTypes"), s.setEType(this._eClassClass), s.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(s);
    const r = new V();
    r.setName("eStructuralFeatures"), r.setEType(this._eStructuralFeatureClass), r.setContainment(!0), r.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(r);
    const n = new V();
    n.setName("eOperations"), n.setEType(this._eOperationClass), n.setContainment(!0), n.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(n);
    const i = new V();
    i.setName("eClassifiers"), i.setEType(this._eClassifierClass), i.setContainment(!0), i.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(i);
    const o = new V();
    o.setName("eSubpackages"), o.setEType(this._ePackageClass), o.setContainment(!0), o.setUpperBound(-1), this._ePackageClass.getEStructuralFeatures().push(o);
    const l = new V();
    l.setName("eFactoryInstance"), l.setEType(this._eFactoryClass), this._ePackageClass.getEStructuralFeatures().push(l);
    const h = new V();
    h.setName("eLiterals"), h.setEType(this._eEnumLiteralClass), h.setContainment(!0), h.setUpperBound(-1), this._eEnumClass.getEStructuralFeatures().push(h);
    const m = new V();
    m.setName("eOpposite"), m.setEType(this._eReferenceClass), this._eReferenceClass.getEStructuralFeatures().push(m);
    const g = new V();
    g.setName("eParameters"), g.setEType(this._eParameterClass), g.setContainment(!0), g.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(g);
    const T = new V();
    T.setName("details"), T.setEType(this._eStringToStringMapEntryClass), T.setContainment(!0), T.setUpperBound(-1), this._eAnnotationClass.getEStructuralFeatures().push(T);
    const v = new V();
    v.setName("eGenericType"), v.setEType(this._eGenericTypeClass), v.setContainment(!0), this._eTypedElementClass.getEStructuralFeatures().push(v);
    const P = new V();
    P.setName("eTypeParameters"), P.setEType(this._eTypeParameterClass), P.setContainment(!0), P.setUpperBound(-1), this._eClassifierClass.getEStructuralFeatures().push(P);
    const D = new V();
    D.setName("eGenericSuperTypes"), D.setEType(this._eGenericTypeClass), D.setContainment(!0), D.setUpperBound(-1), this._eClassClass.getEStructuralFeatures().push(D);
    const F = new V();
    F.setName("eTypeParameters"), F.setEType(this._eTypeParameterClass), F.setContainment(!0), F.setUpperBound(-1), this._eOperationClass.getEStructuralFeatures().push(F);
    const x = new V();
    x.setName("eBounds"), x.setEType(this._eGenericTypeClass), x.setContainment(!0), x.setUpperBound(-1), this._eTypeParameterClass.getEStructuralFeatures().push(x);
    const te = new V();
    te.setName("eClassifier"), te.setEType(this._eClassifierClass), this._eGenericTypeClass.getEStructuralFeatures().push(te);
    const he = new V();
    he.setName("eTypeParameter"), he.setEType(this._eTypeParameterClass), this._eGenericTypeClass.getEStructuralFeatures().push(he);
    const oe = new V();
    oe.setName("eTypeArguments"), oe.setEType(this._eGenericTypeClass), oe.setContainment(!0), oe.setUpperBound(-1), this._eGenericTypeClass.getEStructuralFeatures().push(oe);
    const j = new V();
    j.setName("eUpperBound"), j.setEType(this._eGenericTypeClass), j.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(j);
    const ce = new V();
    ce.setName("eLowerBound"), ce.setEType(this._eGenericTypeClass), ce.setContainment(!0), this._eGenericTypeClass.getEStructuralFeatures().push(ce);
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
class In extends Ut {
  constructor(e) {
    super(), this._ePackage = e;
  }
  getEPackage() {
    return this._ePackage;
  }
  create(e) {
    switch (e.getName()) {
      case "EClass":
        return new z();
      case "EAttribute":
        return new G();
      case "EReference":
        return new V();
      case "EDataType":
        return new Y();
      case "EEnum":
        return new pn();
      case "EEnumLiteral":
        return new Rs();
      case "EAnnotation":
        return new gn();
      case "EPackage":
        return new Ae();
      case "EOperation":
        return new dn();
      case "EParameter":
        return new mn();
      case "EGenericType":
        return new yn();
      case "ETypeParameter":
        return new En();
      default:
        return super.create(e);
    }
  }
}
$t();
class wn extends hn {
  constructor() {
    super(), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("ecore", new lt()), this.getResourceFactoryRegistry().getExtensionToFactoryMap().set("xmi", new lt()), this.getPackageRegistry().set(jt, $t());
  }
  /**
   * Create resource and return with loadFromString support
   */
  createResource(e) {
    return super.createResource(e);
  }
}
const Rn = `<?xml version="1.0" encoding="UTF-8"?>
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

</ecore:EPackage>`, as = "http://org.eclipse.daanse.board.app.lib.events";
class xs {
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
    return new wn();
  }
  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  loadEventsModelSync() {
    try {
      const t = this.createLoadedResource(
        `${as}/EventModel.ecore`,
        Rn
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
    const s = this.resourceSet.createResource(k.createURI(e));
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
        const i = n.get(0);
        this.modelCache.set(e, i), console.log(`✅ Loaded Ecore model for widget type "${e}" from ${s}`);
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
      const i = r.get(n);
      if (ss(i)) {
        const o = i;
        if (!this.extendsWidgetActionInterface(o))
          continue;
        const h = o.getEOperations();
        for (let m = 0; m < h.length; m++) {
          const g = h[m], T = g.getName(), v = g.getEAnnotation(
            "org.eclipse.daanse.board.app.lib.events/WidgetAction"
          );
          if (v) {
            const P = this.getAnnotationDetail(v, "eventType"), D = [], F = g.getEParameters();
            for (let x = 0; x < F.length; x++) {
              const te = F[x], he = te.getEType(), oe = this.mapEcoreTypeToTS(he), j = te.getEAnnotation(
                "org.eclipse.daanse.board.app.lib.events/ActionParameter"
              );
              let Se = te.getLowerBound() === 0;
              j && this.getAnnotationDetail(j, "optional") === "true" && (Se = !0), D.push({
                name: te.getName() || `arg${x}`,
                type: oe,
                optional: Se,
                index: x
              });
            }
            s.push({
              methodName: T || `action${m}`,
              eventType: P || `${e}.${T}`,
              parameters: D
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
      const i = r.get(n);
      if (ss(i)) {
        const o = i;
        if (o.getName() === t) {
          const l = [], h = o.getEAllStructuralFeatures();
          for (let m = 0; m < h.length; m++) {
            const g = h[m], T = g.getName(), v = g.getEType(), P = g.getLowerBound(), D = g.getUpperBound();
            let F = this.mapEcoreTypeToTS(v);
            (D > 1 || D === -1) && (F += "[]");
            const x = P === 0;
            l.push({
              name: T,
              type: F,
              optional: x
            });
          }
          return {
            className: t,
            properties: l
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
      const r = t[s], n = r.getName(), i = r.getEPackage()?.getNsURI() ?? null;
      if (n === "WidgetActionInterface" && i === as || this.extendsWidgetActionInterface(r))
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
const ks = Symbol.for(Ot), Pn = `<?xml version="1.0" encoding="UTF-8"?>
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
dt.createLogger("daanse:events:registry");
const xn = ls, kn = gs, Mn = ps, On = ds, Dn = ks;
function Ms({ services: u, log: e }) {
  const t = new us();
  u.register(gt, t);
  const s = new fs();
  u.register(pt, s);
  const r = u.construct(ot);
  u.register(kt, r);
  const n = u.construct(ct);
  u.register(Mt, n), n.setup(u);
  const i = new xs();
  u.register(Ot, i), s.setEcoreMetadataService(i), t.setEcoreMetadataService(i), e.info("Ereignis-Registries bereit");
}
function Os({ services: u }) {
  for (const e of [
    Ot,
    Mt,
    kt,
    pt,
    gt
  ])
    u.unregister(e);
}
const Fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionParameter: Zs,
  Comperator: ve,
  Condition: Ks,
  ECORE_METADATA_SERVICE: ks,
  EVENT_ACTIONS_REGISTRY: gs,
  EVENT_ACTIONS_REGISTRY_ID: pt,
  EVENT_BUS_BRIDGE: ds,
  EVENT_MANAGER: ps,
  EVENT_REGISTRY: ls,
  EVENT_REGISTRY_ID: gt,
  EcoreMetadataService: xs,
  EventActionsRegistry: fs,
  get EventBusBridge() {
    return ct;
  },
  get EventManager() {
    return ot;
  },
  EventRegistry: us,
  get PageActionInterface() {
    return At;
  },
  get Payload() {
    return Me;
  },
  get SystemActionInterface() {
    return vt;
  },
  SystemActionsEcoreContent: Pn,
  WidgetAction: Qs,
  get WidgetActionInterface() {
    return He;
  },
  actionsIdentifier: kn,
  activate: Ms,
  bridgeIdentifier: On,
  deactivate: Os,
  ecoreServiceIdentifier: Dn,
  getWidgetActions: hs,
  identifier: xn,
  managerIdentifier: Mn
}, Symbol.toStringTag, { value: "Module" })), os = "org.eclipse.daanse.board.app.lib.events", Bn = "0.0.1-next.1";
async function Gn(u) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${os}: tsm runtime is not initialized`);
  e.register(os, Fn, Bn, "lib.events"), await Ms?.(u);
}
async function Wn(u) {
  await Os?.(u);
}
export {
  Zs as ActionParameter,
  ve as Comperator,
  Ks as Condition,
  ks as ECORE_METADATA_SERVICE,
  gs as EVENT_ACTIONS_REGISTRY,
  Yn as EVENT_ACTIONS_REGISTRY_ID,
  ds as EVENT_BUS_BRIDGE,
  ps as EVENT_MANAGER,
  ls as EVENT_REGISTRY,
  qn as EVENT_REGISTRY_ID,
  xs as EcoreMetadataService,
  fs as EventActionsRegistry,
  ct as EventBusBridge,
  ot as EventManager,
  us as EventRegistry,
  At as PageActionInterface,
  Me as Payload,
  vt as SystemActionInterface,
  Pn as SystemActionsEcoreContent,
  Qs as WidgetAction,
  He as WidgetActionInterface,
  kn as actionsIdentifier,
  Gn as activate,
  On as bridgeIdentifier,
  Wn as deactivate,
  Dn as ecoreServiceIdentifier,
  hs as getWidgetActions,
  xn as identifier,
  Mn as managerIdentifier
};
