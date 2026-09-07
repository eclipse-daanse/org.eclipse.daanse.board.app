import { EVENT_REGISTRY_ID as J, EVENT_ACTIONS_REGISTRY_ID as X, EVENT_MANAGER_ID as ce, EVENT_BUS_BRIDGE_ID as ue, EVENT_MODEL_ECORE as pt, ECORE_METADATA_SERVICE_ID as le } from "org.eclipse.daanse.board.app.lib.api.events";
import { EVENT_ACTIONS_REGISTRY_ID as Lt, EVENT_REGISTRY_ID as Ut } from "org.eclipse.daanse.board.app.lib.api.events";
import { loggerFactory as Z } from "org.eclipse.daanse.board.app.lib.logger";
import { injectable as Ne, inject as Y } from "@eclipse-daanse/tsm";
import { EResourceSetImpl as ht, URI as yt, isEClass as Re } from "@emfts/core";
const { TINY_EMITTER: gt } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var F = /* @__PURE__ */ ((o) => (o.eq = "eq", o.lt = "lt", o.gt = "gt", o.lte = "lte", o.gte = "gte", o.neq = "neq", o))(F || {});
class vt {
  constructor() {
    this.comperator = F.eq;
  }
}
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ie = {};
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
var Oe;
function mt() {
  if (Oe) return Ie;
  Oe = 1;
  var o;
  return (function(e) {
    (function(t) {
      var n = typeof globalThis == "object" ? globalThis : typeof Pe == "object" ? Pe : typeof self == "object" ? self : typeof this == "object" ? this : m(), s = c(e);
      typeof n.Reflect < "u" && (s = c(n.Reflect, s)), t(s, n), typeof n.Reflect > "u" && (n.Reflect = e);
      function c(T, b) {
        return function(_, P) {
          Object.defineProperty(T, _, { configurable: !0, writable: !0, value: P }), b && b(_, P);
        };
      }
      function f() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function p() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function m() {
        return f() || p();
      }
    })(function(t, n) {
      var s = Object.prototype.hasOwnProperty, c = typeof Symbol == "function", f = c && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", p = c && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", T = { __proto__: [] } instanceof Array, b = !m && !T, _ = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: m ? function() {
          return ae(/* @__PURE__ */ Object.create(null));
        } : T ? function() {
          return ae({ __proto__: null });
        } : function() {
          return ae({});
        },
        has: b ? function(r, a) {
          return s.call(r, a);
        } : function(r, a) {
          return a in r;
        },
        get: b ? function(r, a) {
          return s.call(r, a) ? r[a] : void 0;
        } : function(r, a) {
          return r[a];
        }
      }, P = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : ct(), x = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ut(), D = typeof WeakMap == "function" ? WeakMap : lt(), I = c ? Symbol.for("@reflect-metadata:registry") : void 0, A = st(), G = ot(A);
      function Q(r, a, i, u) {
        if (v(i)) {
          if (!Me(r))
            throw new TypeError();
          if (!be(a))
            throw new TypeError();
          return Xe(r, a);
        } else {
          if (!Me(r))
            throw new TypeError();
          if (!k(a))
            throw new TypeError();
          if (!k(u) && !v(u) && !B(u))
            throw new TypeError();
          return B(u) && (u = void 0), i = j(i), Ze(r, a, i, u);
        }
      }
      t("decorate", Q);
      function ee(r, a) {
        function i(u, y) {
          if (!k(u))
            throw new TypeError();
          if (!v(y) && !rt(y))
            throw new TypeError();
          ye(r, a, u, y);
        }
        return i;
      }
      t("metadata", ee);
      function V(r, a, i, u) {
        if (!k(i))
          throw new TypeError();
        return v(u) || (u = j(u)), ye(r, a, i, u);
      }
      t("defineMetadata", V);
      function fe(r, a, i) {
        if (!k(a))
          throw new TypeError();
        return v(i) || (i = j(i)), pe(r, a, i);
      }
      t("hasMetadata", fe);
      function q(r, a, i) {
        if (!k(a))
          throw new TypeError();
        return v(i) || (i = j(i)), te(r, a, i);
      }
      t("hasOwnMetadata", q);
      function de(r, a, i) {
        if (!k(a))
          throw new TypeError();
        return v(i) || (i = j(i)), ge(r, a, i);
      }
      t("getMetadata", de);
      function Ye(r, a, i) {
        if (!k(a))
          throw new TypeError();
        return v(i) || (i = j(i)), he(r, a, i);
      }
      t("getOwnMetadata", Ye);
      function He(r, a) {
        if (!k(r))
          throw new TypeError();
        return v(a) || (a = j(a)), ve(r, a);
      }
      t("getMetadataKeys", He);
      function Ke(r, a) {
        if (!k(r))
          throw new TypeError();
        return v(a) || (a = j(a)), me(r, a);
      }
      t("getOwnMetadataKeys", Ke);
      function Je(r, a, i) {
        if (!k(a))
          throw new TypeError();
        if (v(i) || (i = j(i)), !k(a))
          throw new TypeError();
        v(i) || (i = j(i));
        var u = U(
          a,
          i,
          /*Create*/
          !1
        );
        return v(u) ? !1 : u.OrdinaryDeleteMetadata(r, a, i);
      }
      t("deleteMetadata", Je);
      function Xe(r, a) {
        for (var i = r.length - 1; i >= 0; --i) {
          var u = r[i], y = u(a);
          if (!v(y) && !B(y)) {
            if (!be(y))
              throw new TypeError();
            a = y;
          }
        }
        return a;
      }
      function Ze(r, a, i, u) {
        for (var y = r.length - 1; y >= 0; --y) {
          var S = r[y], R = S(a, i, u);
          if (!v(R) && !B(R)) {
            if (!k(R))
              throw new TypeError();
            u = R;
          }
        }
        return u;
      }
      function pe(r, a, i) {
        var u = te(r, a, i);
        if (u)
          return !0;
        var y = re(a);
        return B(y) ? !1 : pe(r, y, i);
      }
      function te(r, a, i) {
        var u = U(
          a,
          i,
          /*Create*/
          !1
        );
        return v(u) ? !1 : Ee(u.OrdinaryHasOwnMetadata(r, a, i));
      }
      function ge(r, a, i) {
        var u = te(r, a, i);
        if (u)
          return he(r, a, i);
        var y = re(a);
        if (!B(y))
          return ge(r, y, i);
      }
      function he(r, a, i) {
        var u = U(
          a,
          i,
          /*Create*/
          !1
        );
        if (!v(u))
          return u.OrdinaryGetOwnMetadata(r, a, i);
      }
      function ye(r, a, i, u) {
        var y = U(
          i,
          u,
          /*Create*/
          !0
        );
        y.OrdinaryDefineOwnMetadata(r, a, i, u);
      }
      function ve(r, a) {
        var i = me(r, a), u = re(r);
        if (u === null)
          return i;
        var y = ve(u, a);
        if (y.length <= 0)
          return i;
        if (i.length <= 0)
          return y;
        for (var S = new x(), R = [], w = 0, l = i; w < l.length; w++) {
          var d = l[w], g = S.has(d);
          g || (S.add(d), R.push(d));
        }
        for (var h = 0, E = y; h < E.length; h++) {
          var d = E[h], g = S.has(d);
          g || (S.add(d), R.push(d));
        }
        return R;
      }
      function me(r, a) {
        var i = U(
          r,
          a,
          /*create*/
          !1
        );
        return i ? i.OrdinaryOwnMetadataKeys(r, a) : [];
      }
      function we(r) {
        if (r === null)
          return 1;
        switch (typeof r) {
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
            return r === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function v(r) {
        return r === void 0;
      }
      function B(r) {
        return r === null;
      }
      function Qe(r) {
        return typeof r == "symbol";
      }
      function k(r) {
        return typeof r == "object" ? r !== null : typeof r == "function";
      }
      function et(r, a) {
        switch (we(r)) {
          case 0:
            return r;
          case 1:
            return r;
          case 2:
            return r;
          case 3:
            return r;
          case 4:
            return r;
          case 5:
            return r;
        }
        var i = "string", u = _e(r, f);
        if (u !== void 0) {
          var y = u.call(r, i);
          if (k(y))
            throw new TypeError();
          return y;
        }
        return tt(r);
      }
      function tt(r, a) {
        var i, u, y;
        {
          var S = r.toString;
          if (z(S)) {
            var u = S.call(r);
            if (!k(u))
              return u;
          }
          var i = r.valueOf;
          if (z(i)) {
            var u = i.call(r);
            if (!k(u))
              return u;
          }
        }
        throw new TypeError();
      }
      function Ee(r) {
        return !!r;
      }
      function nt(r) {
        return "" + r;
      }
      function j(r) {
        var a = et(r);
        return Qe(a) ? a : nt(a);
      }
      function Me(r) {
        return Array.isArray ? Array.isArray(r) : r instanceof Object ? r instanceof Array : Object.prototype.toString.call(r) === "[object Array]";
      }
      function z(r) {
        return typeof r == "function";
      }
      function be(r) {
        return typeof r == "function";
      }
      function rt(r) {
        switch (we(r)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function ne(r, a) {
        return r === a || r !== r && a !== a;
      }
      function _e(r, a) {
        var i = r[a];
        if (i != null) {
          if (!z(i))
            throw new TypeError();
          return i;
        }
      }
      function Ae(r) {
        var a = _e(r, p);
        if (!z(a))
          throw new TypeError();
        var i = a.call(r);
        if (!k(i))
          throw new TypeError();
        return i;
      }
      function Te(r) {
        return r.value;
      }
      function Se(r) {
        var a = r.next();
        return a.done ? !1 : a;
      }
      function $e(r) {
        var a = r.return;
        a && a.call(r);
      }
      function re(r) {
        var a = Object.getPrototypeOf(r);
        if (typeof r != "function" || r === P || a !== P)
          return a;
        var i = r.prototype, u = i && Object.getPrototypeOf(i);
        if (u == null || u === Object.prototype)
          return a;
        var y = u.constructor;
        return typeof y != "function" || y === r ? a : y;
      }
      function at() {
        var r;
        !v(I) && typeof n.Reflect < "u" && !(I in n.Reflect) && typeof n.Reflect.defineMetadata == "function" && (r = it(n.Reflect));
        var a, i, u, y = new D(), S = {
          registerProvider: R,
          getProvider: l,
          setProvider: g
        };
        return S;
        function R(h) {
          if (!Object.isExtensible(S))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case r === h:
              break;
            case v(a):
              a = h;
              break;
            case a === h:
              break;
            case v(i):
              i = h;
              break;
            case i === h:
              break;
            default:
              u === void 0 && (u = new x()), u.add(h);
              break;
          }
        }
        function w(h, E) {
          if (!v(a)) {
            if (a.isProviderFor(h, E))
              return a;
            if (!v(i)) {
              if (i.isProviderFor(h, E))
                return a;
              if (!v(u))
                for (var M = Ae(u); ; ) {
                  var $ = Se(M);
                  if (!$)
                    return;
                  var W = Te($);
                  if (W.isProviderFor(h, E))
                    return $e(M), W;
                }
            }
          }
          if (!v(r) && r.isProviderFor(h, E))
            return r;
        }
        function l(h, E) {
          var M = y.get(h), $;
          return v(M) || ($ = M.get(E)), v($) && ($ = w(h, E), v($) || (v(M) && (M = new C(), y.set(h, M)), M.set(E, $))), $;
        }
        function d(h) {
          if (v(h))
            throw new TypeError();
          return a === h || i === h || !v(u) && u.has(h);
        }
        function g(h, E, M) {
          if (!d(M))
            throw new Error("Metadata provider not registered.");
          var $ = l(h, E);
          if ($ !== M) {
            if (!v($))
              return !1;
            var W = y.get(h);
            v(W) && (W = new C(), y.set(h, W)), W.set(E, M);
          }
          return !0;
        }
      }
      function st() {
        var r;
        return !v(I) && k(n.Reflect) && Object.isExtensible(n.Reflect) && (r = n.Reflect[I]), v(r) && (r = at()), !v(I) && k(n.Reflect) && Object.isExtensible(n.Reflect) && Object.defineProperty(n.Reflect, I, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: r
        }), r;
      }
      function ot(r) {
        var a = new D(), i = {
          isProviderFor: function(d, g) {
            var h = a.get(d);
            return v(h) ? !1 : h.has(g);
          },
          OrdinaryDefineOwnMetadata: R,
          OrdinaryHasOwnMetadata: y,
          OrdinaryGetOwnMetadata: S,
          OrdinaryOwnMetadataKeys: w,
          OrdinaryDeleteMetadata: l
        };
        return A.registerProvider(i), i;
        function u(d, g, h) {
          var E = a.get(d), M = !1;
          if (v(E)) {
            if (!h)
              return;
            E = new C(), a.set(d, E), M = !0;
          }
          var $ = E.get(g);
          if (v($)) {
            if (!h)
              return;
            if ($ = new C(), E.set(g, $), !r.setProvider(d, g, i))
              throw E.delete(g), M && a.delete(d), new Error("Wrong provider for target.");
          }
          return $;
        }
        function y(d, g, h) {
          var E = u(
            g,
            h,
            /*Create*/
            !1
          );
          return v(E) ? !1 : Ee(E.has(d));
        }
        function S(d, g, h) {
          var E = u(
            g,
            h,
            /*Create*/
            !1
          );
          if (!v(E))
            return E.get(d);
        }
        function R(d, g, h, E) {
          var M = u(
            h,
            E,
            /*Create*/
            !0
          );
          M.set(d, g);
        }
        function w(d, g) {
          var h = [], E = u(
            d,
            g,
            /*Create*/
            !1
          );
          if (v(E))
            return h;
          for (var M = E.keys(), $ = Ae(M), W = 0; ; ) {
            var ke = Se($);
            if (!ke)
              return h.length = W, h;
            var ft = Te(ke);
            try {
              h[W] = ft;
            } catch (dt) {
              try {
                $e($);
              } finally {
                throw dt;
              }
            }
            W++;
          }
        }
        function l(d, g, h) {
          var E = u(
            g,
            h,
            /*Create*/
            !1
          );
          if (v(E) || !E.delete(d))
            return !1;
          if (E.size === 0) {
            var M = a.get(g);
            v(M) || (M.delete(h), M.size === 0 && a.delete(M));
          }
          return !0;
        }
      }
      function it(r) {
        var a = r.defineMetadata, i = r.hasOwnMetadata, u = r.getOwnMetadata, y = r.getOwnMetadataKeys, S = r.deleteMetadata, R = new D(), w = {
          isProviderFor: function(l, d) {
            var g = R.get(l);
            return !v(g) && g.has(d) ? !0 : y(l, d).length ? (v(g) && (g = new x(), R.set(l, g)), g.add(d), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: a,
          OrdinaryHasOwnMetadata: i,
          OrdinaryGetOwnMetadata: u,
          OrdinaryOwnMetadataKeys: y,
          OrdinaryDeleteMetadata: S
        };
        return w;
      }
      function U(r, a, i) {
        var u = A.getProvider(r, a);
        if (!v(u))
          return u;
        if (i) {
          if (A.setProvider(r, a, G))
            return G;
          throw new Error("Illegal state.");
        }
      }
      function ct() {
        var r = {}, a = [], i = (
          /** @class */
          (function() {
            function w(l, d, g) {
              this._index = 0, this._keys = l, this._values = d, this._selector = g;
            }
            return w.prototype["@@iterator"] = function() {
              return this;
            }, w.prototype[p] = function() {
              return this;
            }, w.prototype.next = function() {
              var l = this._index;
              if (l >= 0 && l < this._keys.length) {
                var d = this._selector(this._keys[l], this._values[l]);
                return l + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: d, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, w.prototype.throw = function(l) {
              throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), l;
            }, w.prototype.return = function(l) {
              return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: l, done: !0 };
            }, w;
          })()
        ), u = (
          /** @class */
          (function() {
            function w() {
              this._keys = [], this._values = [], this._cacheKey = r, this._cacheIndex = -2;
            }
            return Object.defineProperty(w.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), w.prototype.has = function(l) {
              return this._find(
                l,
                /*insert*/
                !1
              ) >= 0;
            }, w.prototype.get = function(l) {
              var d = this._find(
                l,
                /*insert*/
                !1
              );
              return d >= 0 ? this._values[d] : void 0;
            }, w.prototype.set = function(l, d) {
              var g = this._find(
                l,
                /*insert*/
                !0
              );
              return this._values[g] = d, this;
            }, w.prototype.delete = function(l) {
              var d = this._find(
                l,
                /*insert*/
                !1
              );
              if (d >= 0) {
                for (var g = this._keys.length, h = d + 1; h < g; h++)
                  this._keys[h - 1] = this._keys[h], this._values[h - 1] = this._values[h];
                return this._keys.length--, this._values.length--, ne(l, this._cacheKey) && (this._cacheKey = r, this._cacheIndex = -2), !0;
              }
              return !1;
            }, w.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = r, this._cacheIndex = -2;
            }, w.prototype.keys = function() {
              return new i(this._keys, this._values, y);
            }, w.prototype.values = function() {
              return new i(this._keys, this._values, S);
            }, w.prototype.entries = function() {
              return new i(this._keys, this._values, R);
            }, w.prototype["@@iterator"] = function() {
              return this.entries();
            }, w.prototype[p] = function() {
              return this.entries();
            }, w.prototype._find = function(l, d) {
              if (!ne(this._cacheKey, l)) {
                this._cacheIndex = -1;
                for (var g = 0; g < this._keys.length; g++)
                  if (ne(this._keys[g], l)) {
                    this._cacheIndex = g;
                    break;
                  }
              }
              return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(l), this._values.push(void 0)), this._cacheIndex;
            }, w;
          })()
        );
        return u;
        function y(w, l) {
          return w;
        }
        function S(w, l) {
          return l;
        }
        function R(w, l) {
          return [w, l];
        }
      }
      function ut() {
        var r = (
          /** @class */
          (function() {
            function a() {
              this._map = new C();
            }
            return Object.defineProperty(a.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), a.prototype.has = function(i) {
              return this._map.has(i);
            }, a.prototype.add = function(i) {
              return this._map.set(i, i), this;
            }, a.prototype.delete = function(i) {
              return this._map.delete(i);
            }, a.prototype.clear = function() {
              this._map.clear();
            }, a.prototype.keys = function() {
              return this._map.keys();
            }, a.prototype.values = function() {
              return this._map.keys();
            }, a.prototype.entries = function() {
              return this._map.entries();
            }, a.prototype["@@iterator"] = function() {
              return this.keys();
            }, a.prototype[p] = function() {
              return this.keys();
            }, a;
          })()
        );
        return r;
      }
      function lt() {
        var r = 16, a = _.create(), i = u();
        return (
          /** @class */
          (function() {
            function l() {
              this._key = u();
            }
            return l.prototype.has = function(d) {
              var g = y(
                d,
                /*create*/
                !1
              );
              return g !== void 0 ? _.has(g, this._key) : !1;
            }, l.prototype.get = function(d) {
              var g = y(
                d,
                /*create*/
                !1
              );
              return g !== void 0 ? _.get(g, this._key) : void 0;
            }, l.prototype.set = function(d, g) {
              var h = y(
                d,
                /*create*/
                !0
              );
              return h[this._key] = g, this;
            }, l.prototype.delete = function(d) {
              var g = y(
                d,
                /*create*/
                !1
              );
              return g !== void 0 ? delete g[this._key] : !1;
            }, l.prototype.clear = function() {
              this._key = u();
            }, l;
          })()
        );
        function u() {
          var l;
          do
            l = "@@WeakMap@@" + w();
          while (_.has(a, l));
          return a[l] = !0, l;
        }
        function y(l, d) {
          if (!s.call(l, i)) {
            if (!d)
              return;
            Object.defineProperty(l, i, { value: _.create() });
          }
          return l[i];
        }
        function S(l, d) {
          for (var g = 0; g < d; ++g)
            l[g] = Math.random() * 255 | 0;
          return l;
        }
        function R(l) {
          if (typeof Uint8Array == "function") {
            var d = new Uint8Array(l);
            return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : S(d, l), d;
          }
          return S(new Array(l), l);
        }
        function w() {
          var l = R(r);
          l[6] = l[6] & 79 | 64, l[8] = l[8] & 191 | 128;
          for (var d = "", g = 0; g < r; ++g) {
            var h = l[g];
            (g === 4 || g === 6 || g === 8) && (d += "-"), h < 16 && (d += "0"), d += h.toString(16).toLowerCase();
          }
          return d;
        }
      }
      function ae(r) {
        return r.__ = void 0, delete r.__, r;
      }
    });
  })(o || (o = {})), Ie;
}
mt();
class De {
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
    for (const n of t) {
      const s = `${e}:${n.type}`;
      this.widgetTypeMap.set(s, e), this.events.set(s, {
        ...n,
        type: s
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
    const t = e.prototype ?? e, n = {}, s = Reflect.getMetadataKeys(t);
    n.__class = s.map((p) => ({
      key: p,
      value: Reflect.getMetadata(p, t)
    }));
    const c = Object.getOwnPropertyNames(t), f = new Set(c);
    try {
      const p = new e();
      Object.keys(p).forEach((m) => f.add(m));
    } catch {
    }
    for (const p of f) {
      if (p === "constructor") continue;
      const m = Reflect.getMetadataKeys(t, p);
      m.length !== 0 && (n[p] = m.map((T) => ({
        key: T,
        value: Reflect.getMetadata(T, t, p)
      })));
    }
    return n;
  }
  /**
   * Extract payload properties with type information from Ecore model
   * Falls back to decorator-based extraction if Ecore model is not available
   */
  extractPayloadPropertiesForEvent(e) {
    const t = this.widgetTypeMap.get(e);
    if (!t || !this.ecoreMetadataService)
      return console.warn(`No widget type or EcoreMetadataService for event: ${e}`), [];
    const n = this.events.get(e);
    if (!n || !n.payloadType)
      return console.warn(`No event or payload type found for: ${e}`), [];
    const s = n.payloadType.name, c = this.ecoreMetadataService.extractPayloadMetadata(t, s);
    return c && c.properties ? (console.log(`✅ Extracted ${c.properties.length} properties from Ecore model for ${s}`), c.properties) : (console.warn(`No Ecore metadata found for ${s}, returning empty array`), []);
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
    for (const n of this.events.keys())
      n.startsWith(`${e}:`) && t.push(n);
    for (const n of t)
      this.events.delete(n);
  }
}
const We = Symbol.for(J), L = Z.createLogger("daanse:events:decorator"), oe = Symbol.for("daanse:widgetAction"), ie = Symbol.for("daanse:actionParameter");
function wt(o) {
  return function(e, t, n) {
    const s = Reflect.getMetadata(oe, e.constructor) || [], c = Reflect.getMetadata("design:paramtypes", e, t) || [];
    let f = o.parameters;
    if (!f && n.value) {
      const m = n.value.toString().match(/\(([^)]*)\)/);
      m && m[1].trim() && (f = m[1].split(",").map((b) => b.trim()).map((b, _) => {
        const P = b.match(/^(\w+)(\?)?:\s*(\w+)/);
        if (P) {
          const [, x, D, I] = P;
          return `${x}${D || ""}: ${I}`;
        }
        const C = c[_]?.name || "any";
        return `${b}: ${C}`;
      }));
    }
    return Reflect.defineMetadata(
      oe,
      [
        ...s,
        {
          methodName: t,
          ...o,
          parameters: f
        }
      ],
      e.constructor
    ), n;
  };
}
function Et(o) {
  return function(e, t, n) {
    const s = String(t), c = Reflect.getMetadata(ie, e, s) || [], p = (Reflect.getMetadata("design:paramtypes", e, s) || [])[n];
    let m = o?.name, T = o?.type, b = o?.optional;
    if (!m || !T) {
      const P = Object.getOwnPropertyDescriptor(e, s)?.value || e[s];
      if (P) {
        const x = P.toString().replace(/\s+/g, " ").match(/^[^(]*\(([^)]*)\)/);
        if (x && x[1].trim()) {
          const I = x[1].split(",").map((A) => A.replace(/\/\*.*\*\//, "").trim()).filter((A) => A.length > 0 && !A.startsWith("@"))[n];
          if (I) {
            const A = I.match(/^(\w+)(\?)?(?::\s*(.+?))?(?:\s*=|$)/);
            A && (m || (m = A[1]), b || (b = !!A[2]), !T && A[3] && (T = A[3].trim()));
          }
        }
      }
    }
    let _ = T;
    !_ && p && (_ = {
      String: "string",
      Number: "number",
      Boolean: "boolean",
      Array: "Array<any>",
      Object: "object"
    }[p.name] || p.name || "any"), c.push({
      index: n,
      name: m || `arg${n}`,
      type: _ || "any",
      optional: b
    }), Reflect.defineMetadata(ie, c, e, s), L(
      "ActionParameter: %s[%d] = %s: %s%s",
      s,
      n,
      m || `arg${n}`,
      T || p?.name || "any",
      b ? "?" : ""
    );
  };
}
function je(o) {
  const e = typeof o == "function" ? o : o.constructor;
  L("getWidgetActions called with target: %o", o), L("  constructor: %o", e), L("  constructor.name: %s", e?.name);
  const t = Reflect.getMetadataKeys(e);
  L("  All metadata keys: %o", t);
  let n = Reflect.getMetadata(oe, e) || [];
  return n = n.map((s) => {
    const c = Reflect.getMetadata(ie, e.prototype, s.methodName) || [];
    if (c.length > 0 && !s.parameters) {
      const f = [...c].sort((p, m) => p.index - m.index);
      s.parameters = f.map(
        (p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`
      );
    }
    return s;
  }), L("  Actions found: %o", n), n;
}
class Fe {
  constructor() {
    this.actions = /* @__PURE__ */ new Map(), this.widgetTypes = /* @__PURE__ */ new Map(), this.widgetInstances = /* @__PURE__ */ new Map(), this.instanceTypes = /* @__PURE__ */ new Map(), this.instancePages = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen eindeutigen Key für die Registry
   */
  createKey(e, t, n) {
    return n ? `${e}:${n}:${t}` : `${e}:${t}`;
  }
  /**
   * Registriert eine Aktion für ein Event in einem Kontext
   */
  register(e, t, n, s) {
    const c = this.createKey(e, t, s);
    this.actions.has(c) || this.actions.set(c, []), this.actions.get(c).push({
      context: e,
      contextId: s,
      eventType: t,
      action: n
    });
  }
  /**
   * Entfernt alle Aktionen für einen bestimmten Kontext
   */
  unregister(e, t, n) {
    const s = this.createKey(e, t, n);
    this.actions.delete(s);
  }
  /**
   * Führt alle registrierten Aktionen für ein Event aus
   */
  async execute(e, t, ...n) {
    const s = this.createKey(e, t), c = this.actions.get(s) || [];
    for (const f of c)
      try {
        await f.action(...n);
      } catch (p) {
        console.error(`Error executing action for ${s}:`, p);
      }
  }
  /**
   * Gibt alle Aktionen für einen Kontext zurück
   */
  getActions(e, t, n) {
    if (t) {
      const f = this.createKey(e, t, n);
      return this.actions.get(f) || [];
    }
    const s = [], c = n ? `${e}:${n}:` : `${e}:`;
    for (const [f, p] of this.actions.entries())
      f.startsWith(c) && s.push(...p);
    return s;
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
    const n = [], s = `${e}:${t}:`;
    for (const c of this.actions.keys())
      c.startsWith(s) && n.push(c);
    for (const c of n)
      this.actions.delete(c);
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
  registerWidgetType(e, t, n) {
    const s = je(t);
    this.widgetTypes.set(e, {
      widgetType: e,
      baseClass: t,
      actions: s,
      context: n || "widget"
    }), console.log(`📝 Registered widget type "${e}" (context: ${n || "widget"}) with ${s.length} actions:`), s.forEach((c) => {
      console.log(`  - ${c.methodName}(${c.parameters?.join(", ") || ""})`, c);
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
  async registerActionsFromEcore(e, t, n) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModel(e, t);
      const c = this.ecoreMetadataService.extractActions(e).map((f) => ({
        methodName: f.methodName,
        eventType: f.eventType,
        parameters: f.parameters.map(
          (p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: c,
        context: n || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${n || "widget"}) from Ecore with ${c.length} actions:`), c.forEach((f) => {
        console.log(`  - ${f.methodName}(${f.parameters?.join(", ") || ""})`, f);
      });
    } catch (s) {
      throw console.error(`Failed to register actions "${e}" from Ecore:`, s), s;
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
  async registerActionsFromEcoreString(e, t, n, s) {
    if (!this.ecoreMetadataService) {
      console.error("EcoreMetadataService not set. Cannot register actions from Ecore.");
      return;
    }
    try {
      await this.ecoreMetadataService.loadModelFromString(e, t, s);
      const f = this.ecoreMetadataService.extractActions(e).map((p) => ({
        methodName: p.methodName,
        eventType: p.eventType,
        parameters: p.parameters.map(
          (m) => `${m.name}${m.optional ? "?" : ""}: ${m.type}`
        )
      }));
      this.widgetTypes.set(e, {
        widgetType: e,
        baseClass: null,
        // No base class for Ecore-based actions
        actions: f,
        context: n || "widget"
      }), console.log(`📝 Registered actions "${e}" (context: ${n || "widget"}) from Ecore string with ${f.length} actions:`), f.forEach((p) => {
        console.log(`  - ${p.methodName}(${p.parameters?.join(", ") || ""})`, p);
      });
    } catch (c) {
      throw console.error(`Failed to register actions "${e}" from Ecore string:`, c), c;
    }
  }
  /**
   * @deprecated Use registerActionsFromEcoreString instead
   */
  async registerWidgetTypeFromEcoreString(e, t, n) {
    return console.warn("registerWidgetTypeFromEcoreString is deprecated. Use registerActionsFromEcoreString instead."), this.registerActionsFromEcoreString(e, t, "widget", n);
  }
  /**
   * Registriert eine Instanz (Widget, Composer, Datasource, etc.)
   * Wird beim Mount/Init aufgerufen
   * @param instanceId - Eindeutige ID der Instanz
   * @param instanceRef - Referenz auf die Instanz mit den Action-Methoden
   * @param widgetType - Optional: Widget-Typ für die Instanz (z.B. "OGCSTAToChartComposer")
   * @param pageId - Optional: Page ID auf der die Instanz lebt
   */
  registerInstance(e, t, n, s) {
    this.widgetInstances.set(e, t), n && this.instanceTypes.set(e, n), s && this.instancePages.set(e, s), console.log(`Registered instance "${e}"${n ? ` (type: ${n})` : ""}${s ? ` (page: ${s})` : ""}`);
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
    for (const [n, s] of this.widgetInstances.entries()) {
      const c = this.instanceTypes.get(n) || "unknown";
      (!e || c === e) && t.push({
        instanceId: n,
        widgetType: c,
        instanceRef: s
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
  async executeInstanceAction(e, t, ...n) {
    const s = this.widgetInstances.get(e);
    if (!s) {
      console.warn(`Instance "${e}" not found.`);
      return;
    }
    if (typeof s[t] != "function") {
      console.warn(`Action "${t}" not found on instance "${e}".`);
      return;
    }
    try {
      await s[t](...n);
    } catch (c) {
      console.error(`Error executing action "${t}" on "${e}":`, c);
    }
  }
  /**
   * @deprecated Use executeInstanceAction instead
   */
  async executeWidgetAction(e, t, ...n) {
    return this.executeInstanceAction(e, t, ...n);
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
    let n = 0;
    for (const [s, c] of this.widgetInstances.entries()) {
      const f = this.instanceTypes.get(s);
      if (console.log(`🎯 Checking instance "${s}" (type: ${f}), has ${e}: ${typeof c[e]}`), typeof c[e] == "function")
        try {
          console.log(`🎯 Calling ${e} on "${s}"...`), await c[e](...t), n++, console.log(`✅ Executed action "${e}" on instance "${s}"`);
        } catch (p) {
          console.error(`❌ Error executing action "${e}" on "${s}":`, p);
        }
    }
    n === 0 ? console.warn(`❌ Action "${e}" not found on any instances.`) : console.log(`✅ Executed action "${e}" on ${n} instance(s)`);
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
const Ge = Symbol.for(X);
var Mt = Object.getOwnPropertyDescriptor, bt = (o, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? Mt(e, t) : e, c = o.length - 1, f; c >= 0; c--)
    (f = o[c]) && (s = f(s) || s);
  return s;
}, _t = (o, e) => (t, n) => e(t, n, o);
const N = Z.createLogger("daanse:events:manager");
let H = class {
  constructor(o) {
    this.actionsRegistry = o, this.mappings = /* @__PURE__ */ new Map();
  }
  /**
   * Erstellt einen Key für die Mapping-Registry
   */
  createMappingKey(o, e, t) {
    return t ? `${o}:${t}:${e}` : `${o}:${e}`;
  }
  /**
   * Registriert ein Event-Action-Mapping
   */
  registerMapping(o) {
    const e = this.createMappingKey(o.context, o.eventType, o.contextId);
    this.mappings.has(e) || this.mappings.set(e, []), this.mappings.get(e).push(o), N("Registered event-action mapping: %s -> %s", e, o.actionName), this.onMappingsChangedCallback && this.onMappingsChangedCallback();
  }
  /**
   * Entfernt ein Event-Action-Mapping
   */
  unregisterMapping(o) {
    for (const [e, t] of this.mappings.entries()) {
      const n = t.findIndex((s) => s.id === o);
      if (n !== -1) {
        t.splice(n, 1), t.length === 0 && this.mappings.delete(e), N("Unregistered event-action mapping: %s", o);
        return;
      }
    }
  }
  /**
   * Registriert einen Callback der aufgerufen wird wenn Mappings geändert werden
   */
  onMappingsChanged(o) {
    this.onMappingsChangedCallback = o;
  }
  /**
   * Setzt alle Mappings (z.B. nach Laden aus Storage)
   */
  setAllMappings(o) {
    this.mappings.clear();
    for (const e of o) {
      const t = this.createMappingKey(e.context, e.eventType, e.contextId);
      this.mappings.has(t) || this.mappings.set(t, []), this.mappings.get(t).push(e);
    }
    this.onMappingsChangedCallback && (this.onMappingsChangedCallback(), N("Notified listeners about %d loaded mappings", o.length));
  }
  /**
   * Wertet Conditions gegen ein Payload aus
   */
  evaluateConditions(o, e) {
    return !o || o.length === 0 ? !0 : o.every((t) => {
      if (!t.prop)
        return !0;
      const n = this.getNestedProperty(e, t.prop), s = t.value;
      return this.evaluateComparison(n, t.comperator, s);
    });
  }
  /**
   * Hilfsfunktion zum Zugriff auf verschachtelte Properties (z.B. "location.coordinates.lat")
   */
  getNestedProperty(o, e) {
    return e.split(".").reduce((t, n) => t?.[n], o);
  }
  /**
   * Wertet einen Vergleich aus
   */
  evaluateComparison(o, e, t) {
    const n = Number(o), s = Number(t), c = !isNaN(n) && !isNaN(s);
    switch (e) {
      case F.eq:
        return c ? n === s : o == t;
      case F.neq:
        return c ? n !== s : o != t;
      case F.lt:
        return c ? n < s : o < t;
      case F.lte:
        return c ? n <= s : o <= t;
      case F.gt:
        return c ? n > s : o > t;
      case F.gte:
        return c ? n >= s : o >= t;
      default:
        return console.warn(`Unknown comperator: ${e}`), !1;
    }
  }
  /**
   * Baut die Action Arguments basierend auf statischen Args und Payload-Mapping
   */
  buildActionArgs(o, e) {
    const t = [...o.actionArgs || []];
    if (o.payloadMapping && o.payloadMapping.length > 0)
      for (const n of o.payloadMapping) {
        const s = this.getNestedProperty(e, n.payloadPath);
        t[n.argIndex] = s, N("  Mapped payload.%s -> arg[%d] = %o", n.payloadPath, n.argIndex, s);
      }
    return t;
  }
  /**
   * Führt eine einzelne Action aus
   */
  async executeAction(o, e) {
    const t = this.buildActionArgs(o, e);
    o.targetContextId ? await this.actionsRegistry.executeInstanceAction(
      o.targetContextId,
      o.actionName,
      ...t
    ) : (N("No targetContextId specified, executing action on all instances"), await this.actionsRegistry.executeActionOnAll(
      o.actionName,
      ...t
    ));
  }
  /**
   * Konvertiert ein legacy Mapping (mit actionName) zu ActionDefinition Array
   */
  getActionsFromMapping(o) {
    return o.actions && o.actions.length > 0 ? o.actions : o.actionName ? [{
      targetContext: o.targetContext,
      targetContextId: o.targetContextId,
      actionName: o.actionName,
      actionArgs: o.actionArgs,
      payloadMapping: o.payloadMapping
    }] : [];
  }
  /**
   * Verarbeitet ein Event und führt alle passenden Actions aus
   */
  async handleEvent(o, e, t, n) {
    const s = this.createMappingKey(o, e, n);
    let c = this.mappings.get(s) || [];
    if (c.length === 0 && n) {
      const f = this.createMappingKey(o, e);
      c = this.mappings.get(f) || [], N("📨 Handling event: %s, no specific mappings, using general mappings: %d", s, c.length);
    } else
      N("📨 Handling event: %s, found %d mapping(s)", s, c.length);
    N("  Payload: %o", t);
    for (const f of c)
      try {
        if (!this.evaluateConditions(f.conditions || [], t)) {
          N("⏭️  Conditions not met for mapping %s, skipping", f.id);
          continue;
        }
        const p = this.getActionsFromMapping(f);
        if (p.length === 0) {
          N("⚠️  No actions defined for mapping %s", f.id);
          continue;
        }
        N("▶️  Executing %d action(s) for mapping %s", p.length, f.id);
        for (const m of p)
          N("  → Action: %s on %s", m.actionName, m.targetContextId || "all instances"), await this.executeAction(m, t);
      } catch (p) {
        N("❌ Error executing actions for mapping %s: %o", f.id, p);
      }
  }
  /**
   * Gibt alle Mappings zurück
   */
  getAllMappings() {
    const o = [];
    for (const e of this.mappings.values())
      o.push(...e);
    return o;
  }
  /**
   * Gibt Mappings für einen bestimmten Context zurück
   */
  getMappings(o, e, t) {
    if (e) {
      const c = this.createMappingKey(o, e, t);
      return this.mappings.get(c) || [];
    }
    const n = [], s = t ? `${o}:${t}:` : `${o}:`;
    for (const [c, f] of this.mappings.entries())
      c.startsWith(s) && n.push(...f);
    return n;
  }
  /**
   * Löscht alle Mappings für einen Context
   */
  clearContext(o, e) {
    const t = [], n = `${o}:${e}:`;
    for (const s of this.mappings.keys())
      s.startsWith(n) && t.push(s);
    for (const s of t)
      this.mappings.delete(s);
    console.log(`Cleared event mappings for context ${o}:${e}`);
  }
  /**
   * Löscht alle Mappings
   */
  clear() {
    this.mappings.clear();
  }
};
H = bt([
  Ne(),
  _t(0, Y("EventActionsRegistry"))
], H);
const Be = Symbol.for(ce);
var At = Object.getOwnPropertyDescriptor, Tt = (o, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? At(e, t) : e, c = o.length - 1, f; c >= 0; c--)
    (f = o[c]) && (s = f(s) || s);
  return s;
}, se = (o, e) => (t, n) => e(t, n, o);
const O = Z.createLogger("daanse:events:bridge");
let K = class {
  constructor(o, e, t) {
    this.eventManager = o, this.eventRegistry = e, this.actionsRegistry = t, this.isSetup = !1, this.registeredListeners = /* @__PURE__ */ new Set();
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
  setup(o) {
    if (this.isSetup) {
      O("Bridge already setup, skipping");
      return;
    }
    try {
      this.eventBus = o.getRequired(gt), this.eventManager.onMappingsChanged(() => {
        O("📢 EventManager notified about mapping changes, refreshing listeners"), this.refreshListeners();
      }), this.setupListeners(), this.isSetup = !0, O("✅ EventBus Bridge setup complete");
    } catch (e) {
      O("❌ Failed to setup EventBus Bridge:", e);
    }
  }
  /**
   * Richtet Listener für alle Events ein die Mappings haben (widget, page, system)
   */
  setupListeners() {
    const o = this.eventManager.getAllMappings(), e = /* @__PURE__ */ new Set();
    for (const t of o)
      if (t.context === "widget") {
        const n = `widget:${t.eventType}`;
        e.add(n);
      } else if (t.context === "page") {
        const n = `widget:${t.eventType}`;
        e.add(n);
      } else if (t.context === "system") {
        const n = `system:${t.eventType}`;
        e.add(n);
      }
    for (const t of e)
      this.registeredListeners.has(t) || (this.eventBus.on(t, (n) => {
        O("📨 Received event via EventBus: %s", t), this.handleEvent(t, n);
      }), this.registeredListeners.add(t), O("Registered listener for: %s", t));
    O("✅ Bridge listening to %d event types", this.registeredListeners.size);
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
  async handleEvent(o, e) {
    try {
      const t = o.split(":");
      if (t.length < 2) {
        O("Invalid event format: %s", o);
        return;
      }
      const n = t[0];
      if (n === "widget") {
        if (t.length < 3) {
          O("Invalid widget event format: %s", o);
          return;
        }
        const s = t[1], c = t[2], f = e.widgetId, p = e.payload;
        O("📨 Widget event received: %s from widget %s", o, f), O("  Payload: %o", p), await this.eventManager.handleEvent(
          "widget",
          `${s}:${c}`,
          p,
          f
        );
        const m = this.actionsRegistry.getInstancePageId(f);
        m && (O("📨 Also handling as page event for page: %s", m), await this.eventManager.handleEvent(
          "page",
          `${s}:${c}`,
          p,
          m
        ));
      } else if (n === "system") {
        const s = t.slice(1).join(":"), c = e.payload || e;
        O("📨 System event received: %s", o), O("  Payload: %o", c), await this.eventManager.handleEvent(
          "system",
          s,
          c
        );
      } else
        O("Unknown event context: %s", n);
    } catch (t) {
      O("❌ Error handling event:", t);
    }
  }
};
K = Tt([
  Ne(),
  se(0, Y("EventManager")),
  se(1, Y("EventRegistry")),
  se(2, Y("EventActionsRegistry"))
], K);
const Le = Symbol.for(ue), Ce = "http://org.eclipse.daanse.board.app.lib.events";
class Ue {
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
    return new ht();
  }
  /**
   * Load the Events model synchronously and register it in the PackageRegistry
   */
  loadEventsModelSync() {
    try {
      const t = this.createLoadedResource(
        `${Ce}/EventModel.ecore`,
        pt
      ).getContents();
      if (t.size() > 0) {
        const n = t.get(0);
        this.registerPackage(n), console.log("✅ Loaded and registered Events model package with nsURI:", n.getNsURI());
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
    const n = this.resourceSet.createResource(yt.createURI(e));
    if (typeof n.loadFromString != "function")
      throw new Error(
        `Resource for "${e}" does not support loading from a string; expected an XMI resource.`
      );
    return n.loadFromString(t), n;
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
      const s = await (await fetch(t)).text();
      await this.loadModelFromString(e, s, t);
    } catch (n) {
      throw console.error(`Failed to load Ecore model from ${t}:`, n), n;
    }
  }
  /**
   * Load an Ecore model from a string
   */
  async loadModelFromString(e, t, n = "model.ecore") {
    try {
      const c = this.createLoadedResource(n, t).getContents();
      if (c.size() > 0) {
        const f = c.get(0);
        this.modelCache.set(e, f), console.log(`✅ Loaded Ecore model for widget type "${e}" from ${n}`);
      }
    } catch (s) {
      throw console.error(`Failed to parse Ecore model for ${e}:`, s), s;
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
    const n = [], s = t.getEClassifiers();
    for (let c = 0; c < s.size(); c++) {
      const f = s.get(c);
      if (Re(f)) {
        const p = f;
        if (!this.extendsWidgetActionInterface(p))
          continue;
        const T = p.getEOperations();
        for (let b = 0; b < T.length; b++) {
          const _ = T[b], P = _.getName(), C = _.getEAnnotation(
            "org.eclipse.daanse.board.app.lib.events/WidgetAction"
          );
          if (C) {
            const x = this.getAnnotationDetail(C, "eventType"), D = [], I = _.getEParameters();
            for (let A = 0; A < I.length; A++) {
              const G = I[A], Q = G.getEType(), ee = this.mapEcoreTypeToTS(Q), V = G.getEAnnotation(
                "org.eclipse.daanse.board.app.lib.events/ActionParameter"
              );
              let q = G.getLowerBound() === 0;
              V && this.getAnnotationDetail(V, "optional") === "true" && (q = !0), D.push({
                name: G.getName() || `arg${A}`,
                type: ee,
                optional: q,
                index: A
              });
            }
            n.push({
              methodName: P || `action${b}`,
              eventType: x || `${e}.${P}`,
              parameters: D
            });
          }
        }
      }
    }
    return console.log(`📝 Extracted ${n.length} actions from Ecore model for "${e}":`, n), n;
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
    const n = this.modelCache.get(e);
    if (!n)
      return console.warn(`No Ecore model registered for widget type "${e}"`), null;
    const s = n.getEClassifiers();
    for (let c = 0; c < s.size(); c++) {
      const f = s.get(c);
      if (Re(f)) {
        const p = f;
        if (p.getName() === t) {
          const m = [], T = p.getEAllStructuralFeatures();
          for (let b = 0; b < T.length; b++) {
            const _ = T[b], P = _.getName(), C = _.getEType(), x = _.getLowerBound(), D = _.getUpperBound();
            let I = this.mapEcoreTypeToTS(C);
            (D > 1 || D === -1) && (I += "[]");
            const A = x === 0;
            m.push({
              name: P,
              type: I,
              optional: A
            });
          }
          return {
            className: t,
            properties: m
          };
        }
      }
    }
    return console.warn(`Payload class "${t}" not found in Ecore model for "${e}"`), null;
  }
  /**
   * Check if an EClass extends WidgetActionInterfaceImpl
   */
  extendsWidgetActionInterface(e) {
    const t = e.getESuperTypes();
    for (let n = 0; n < t.length; n++) {
      const s = t[n], c = s.getName(), f = s.getEPackage()?.getNsURI() ?? null;
      if (c === "WidgetActionInterface" && f === Ce || this.extendsWidgetActionInterface(s))
        return !0;
    }
    return !1;
  }
  /**
   * Map Ecore data types to TypeScript types
   */
  mapEcoreTypeToTS(e) {
    if (!e) return "any";
    const t = e.getName(), n = t || String(e);
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
    }[n] || n;
  }
  /**
   * Clear all cached models
   */
  clear() {
    this.modelCache.clear();
  }
}
const Ve = Symbol.for(le), St = `<?xml version="1.0" encoding="UTF-8"?>
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
Z.createLogger("daanse:events:registry");
const $t = We, kt = Ge, Rt = Be, Pt = Le, It = Ve;
function qe({ services: o, log: e }) {
  const t = new De();
  o.register(J, t);
  const n = new Fe();
  o.register(X, n);
  const s = o.construct(H);
  o.register(ce, s);
  const c = o.construct(K);
  o.register(ue, c), c.setup(o);
  const f = new Ue();
  o.register(le, f), n.setEcoreMetadataService(f), t.setEcoreMetadataService(f), e.info("Ereignis-Registries bereit");
}
function ze({ services: o }) {
  for (const e of [
    le,
    ue,
    ce,
    X,
    J
  ])
    o.unregister(e);
}
const Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ActionParameter: Et,
  Comperator: F,
  Condition: vt,
  ECORE_METADATA_SERVICE: Ve,
  EVENT_ACTIONS_REGISTRY: Ge,
  EVENT_ACTIONS_REGISTRY_ID: X,
  EVENT_BUS_BRIDGE: Le,
  EVENT_MANAGER: Be,
  EVENT_REGISTRY: We,
  EVENT_REGISTRY_ID: J,
  EcoreMetadataService: Ue,
  EventActionsRegistry: Fe,
  get EventBusBridge() {
    return K;
  },
  get EventManager() {
    return H;
  },
  EventRegistry: De,
  SystemActionsEcoreContent: St,
  WidgetAction: wt,
  actionsIdentifier: kt,
  activate: qe,
  bridgeIdentifier: Pt,
  deactivate: ze,
  ecoreServiceIdentifier: It,
  getWidgetActions: je,
  identifier: $t,
  managerIdentifier: Rt
}, Symbol.toStringTag, { value: "Module" })), xe = "org.eclipse.daanse.board.app.lib.events", Ct = "0.0.1-next.1";
async function jt(o) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${xe}: tsm runtime is not initialized`);
  e.register(xe, Ot, Ct, "lib.events"), await qe?.(o);
}
async function Ft(o) {
  await ze?.(o);
}
export {
  Et as ActionParameter,
  F as Comperator,
  vt as Condition,
  Ve as ECORE_METADATA_SERVICE,
  Ge as EVENT_ACTIONS_REGISTRY,
  Lt as EVENT_ACTIONS_REGISTRY_ID,
  Le as EVENT_BUS_BRIDGE,
  Be as EVENT_MANAGER,
  We as EVENT_REGISTRY,
  Ut as EVENT_REGISTRY_ID,
  Ue as EcoreMetadataService,
  Fe as EventActionsRegistry,
  K as EventBusBridge,
  H as EventManager,
  De as EventRegistry,
  St as SystemActionsEcoreContent,
  wt as WidgetAction,
  kt as actionsIdentifier,
  jt as activate,
  Pt as bridgeIdentifier,
  Ft as deactivate,
  It as ecoreServiceIdentifier,
  je as getWidgetActions,
  $t as identifier,
  Rt as managerIdentifier
};
