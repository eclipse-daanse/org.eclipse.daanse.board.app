import { NavigationRegistry as he, NavigationItem as z, NAVIGATION_REGISTRY as ve, NAVIGATION_REGISTRY_ID as Y } from "org.eclipse.daanse.board.app.lib.api.navigation";
import { NAVIGATION_REGISTRY as Ke, NAVIGATION_REGISTRY_ID as et, NavigationItem as tt, NavigationRegistry as rt } from "org.eclipse.daanse.board.app.lib.api.navigation";
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ce = {};
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
var de;
function ze() {
  if (de) return ce;
  de = 1;
  var M;
  return (function(h) {
    (function(v) {
      var g = typeof globalThis == "object" ? globalThis : typeof se == "object" ? se : typeof self == "object" ? self : typeof this == "object" ? this : x(), k = I(h);
      typeof g.Reflect < "u" && (k = I(g.Reflect, k)), v(k, g), typeof g.Reflect > "u" && (g.Reflect = h);
      function I(E, P) {
        return function(O, A) {
          Object.defineProperty(E, O, { configurable: !0, writable: !0, value: A }), P && P(O, A);
        };
      }
      function D() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function T() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function x() {
        return D() || T();
      }
    })(function(v, g) {
      var k = Object.prototype.hasOwnProperty, I = typeof Symbol == "function", D = I && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", T = I && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", x = typeof Object.create == "function", E = { __proto__: [] } instanceof Array, P = !x && !E, O = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: x ? function() {
          return $(/* @__PURE__ */ Object.create(null));
        } : E ? function() {
          return $({ __proto__: null });
        } : function() {
          return $({});
        },
        has: P ? function(e, t) {
          return k.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: P ? function(e, t) {
          return k.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, A = Object.getPrototypeOf(Function), j = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ve(), F = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Ue(), V = typeof WeakMap == "function" ? WeakMap : We(), R = I ? Symbol.for("@reflect-metadata:registry") : void 0, C = Ne(), B = De(C);
      function _e(e, t, r, n) {
        if (s(r)) {
          if (!te(e))
            throw new TypeError();
          if (!re(t))
            throw new TypeError();
          return Re(e, t);
        } else {
          if (!te(e))
            throw new TypeError();
          if (!w(t))
            throw new TypeError();
          if (!w(n) && !s(n) && !S(n))
            throw new TypeError();
          return S(n) && (n = void 0), r = b(r), Se(e, t, r, n);
        }
      }
      v("decorate", _e);
      function ge(e, t) {
        function r(n, u) {
          if (!w(n))
            throw new TypeError();
          if (!s(u) && !xe(u))
            throw new TypeError();
          J(e, t, n, u);
        }
        return r;
      }
      v("metadata", ge);
      function Me(e, t, r, n) {
        if (!w(r))
          throw new TypeError();
        return s(n) || (n = b(n)), J(e, t, r, n);
      }
      v("defineMetadata", Me);
      function me(e, t, r) {
        if (!w(t))
          throw new TypeError();
        return s(r) || (r = b(r)), q(e, t, r);
      }
      v("hasMetadata", me);
      function be(e, t, r) {
        if (!w(t))
          throw new TypeError();
        return s(r) || (r = b(r)), U(e, t, r);
      }
      v("hasOwnMetadata", be);
      function Oe(e, t, r) {
        if (!w(t))
          throw new TypeError();
        return s(r) || (r = b(r)), L(e, t, r);
      }
      v("getMetadata", Oe);
      function ke(e, t, r) {
        if (!w(t))
          throw new TypeError();
        return s(r) || (r = b(r)), Z(e, t, r);
      }
      v("getOwnMetadata", ke);
      function Ie(e, t) {
        if (!w(e))
          throw new TypeError();
        return s(t) || (t = b(t)), Q(e, t);
      }
      v("getMetadataKeys", Ie);
      function Te(e, t) {
        if (!w(e))
          throw new TypeError();
        return s(t) || (t = b(t)), X(e, t);
      }
      v("getOwnMetadataKeys", Te);
      function Ee(e, t, r) {
        if (!w(t))
          throw new TypeError();
        if (s(r) || (r = b(r)), !w(t))
          throw new TypeError();
        s(r) || (r = b(r));
        var n = G(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
      }
      v("deleteMetadata", Ee);
      function Re(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var n = e[r], u = n(t);
          if (!s(u) && !S(u)) {
            if (!re(u))
              throw new TypeError();
            t = u;
          }
        }
        return t;
      }
      function Se(e, t, r, n) {
        for (var u = e.length - 1; u >= 0; --u) {
          var y = e[u], _ = y(t, r, n);
          if (!s(_) && !S(_)) {
            if (!w(_))
              throw new TypeError();
            n = _;
          }
        }
        return n;
      }
      function q(e, t, r) {
        var n = U(e, t, r);
        if (n)
          return !0;
        var u = H(t);
        return S(u) ? !1 : q(e, u, r);
      }
      function U(e, t, r) {
        var n = G(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : ee(n.OrdinaryHasOwnMetadata(e, t, r));
      }
      function L(e, t, r) {
        var n = U(e, t, r);
        if (n)
          return Z(e, t, r);
        var u = H(t);
        if (!S(u))
          return L(e, u, r);
      }
      function Z(e, t, r) {
        var n = G(
          t,
          r,
          /*Create*/
          !1
        );
        if (!s(n))
          return n.OrdinaryGetOwnMetadata(e, t, r);
      }
      function J(e, t, r, n) {
        var u = G(
          r,
          n,
          /*Create*/
          !0
        );
        u.OrdinaryDefineOwnMetadata(e, t, r, n);
      }
      function Q(e, t) {
        var r = X(e, t), n = H(e);
        if (n === null)
          return r;
        var u = Q(n, t);
        if (u.length <= 0)
          return r;
        if (r.length <= 0)
          return u;
        for (var y = new F(), _ = [], c = 0, a = r; c < a.length; c++) {
          var i = a[c], o = y.has(i);
          o || (y.add(i), _.push(i));
        }
        for (var f = 0, d = u; f < d.length; f++) {
          var i = d[f], o = y.has(i);
          o || (y.add(i), _.push(i));
        }
        return _;
      }
      function X(e, t) {
        var r = G(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function K(e) {
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
      function s(e) {
        return e === void 0;
      }
      function S(e) {
        return e === null;
      }
      function Pe(e) {
        return typeof e == "symbol";
      }
      function w(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function Ae(e, t) {
        switch (K(e)) {
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
        var r = "string", n = ne(e, D);
        if (n !== void 0) {
          var u = n.call(e, r);
          if (w(u))
            throw new TypeError();
          return u;
        }
        return je(e);
      }
      function je(e, t) {
        var r, n, u;
        {
          var y = e.toString;
          if (N(y)) {
            var n = y.call(e);
            if (!w(n))
              return n;
          }
          var r = e.valueOf;
          if (N(r)) {
            var n = r.call(e);
            if (!w(n))
              return n;
          }
        }
        throw new TypeError();
      }
      function ee(e) {
        return !!e;
      }
      function Ge(e) {
        return "" + e;
      }
      function b(e) {
        var t = Ae(e);
        return Pe(t) ? t : Ge(t);
      }
      function te(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function N(e) {
        return typeof e == "function";
      }
      function re(e) {
        return typeof e == "function";
      }
      function xe(e) {
        switch (K(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function W(e, t) {
        return e === t || e !== e && t !== t;
      }
      function ne(e, t) {
        var r = e[t];
        if (r != null) {
          if (!N(r))
            throw new TypeError();
          return r;
        }
      }
      function ae(e) {
        var t = ne(e, T);
        if (!N(t))
          throw new TypeError();
        var r = t.call(e);
        if (!w(r))
          throw new TypeError();
        return r;
      }
      function ie(e) {
        return e.value;
      }
      function oe(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function fe(e) {
        var t = e.return;
        t && t.call(e);
      }
      function H(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === A || t !== A)
          return t;
        var r = e.prototype, n = r && Object.getPrototypeOf(r);
        if (n == null || n === Object.prototype)
          return t;
        var u = n.constructor;
        return typeof u != "function" || u === e ? t : u;
      }
      function Ce() {
        var e;
        !s(R) && typeof g.Reflect < "u" && !(R in g.Reflect) && typeof g.Reflect.defineMetadata == "function" && (e = Fe(g.Reflect));
        var t, r, n, u = new V(), y = {
          registerProvider: _,
          getProvider: a,
          setProvider: o
        };
        return y;
        function _(f) {
          if (!Object.isExtensible(y))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === f:
              break;
            case s(t):
              t = f;
              break;
            case t === f:
              break;
            case s(r):
              r = f;
              break;
            case r === f:
              break;
            default:
              n === void 0 && (n = new F()), n.add(f);
              break;
          }
        }
        function c(f, d) {
          if (!s(t)) {
            if (t.isProviderFor(f, d))
              return t;
            if (!s(r)) {
              if (r.isProviderFor(f, d))
                return t;
              if (!s(n))
                for (var l = ae(n); ; ) {
                  var p = oe(l);
                  if (!p)
                    return;
                  var m = ie(p);
                  if (m.isProviderFor(f, d))
                    return fe(l), m;
                }
            }
          }
          if (!s(e) && e.isProviderFor(f, d))
            return e;
        }
        function a(f, d) {
          var l = u.get(f), p;
          return s(l) || (p = l.get(d)), s(p) && (p = c(f, d), s(p) || (s(l) && (l = new j(), u.set(f, l)), l.set(d, p))), p;
        }
        function i(f) {
          if (s(f))
            throw new TypeError();
          return t === f || r === f || !s(n) && n.has(f);
        }
        function o(f, d, l) {
          if (!i(l))
            throw new Error("Metadata provider not registered.");
          var p = a(f, d);
          if (p !== l) {
            if (!s(p))
              return !1;
            var m = u.get(f);
            s(m) && (m = new j(), u.set(f, m)), m.set(d, l);
          }
          return !0;
        }
      }
      function Ne() {
        var e;
        return !s(R) && w(g.Reflect) && Object.isExtensible(g.Reflect) && (e = g.Reflect[R]), s(e) && (e = Ce()), !s(R) && w(g.Reflect) && Object.isExtensible(g.Reflect) && Object.defineProperty(g.Reflect, R, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function De(e) {
        var t = new V(), r = {
          isProviderFor: function(i, o) {
            var f = t.get(i);
            return s(f) ? !1 : f.has(o);
          },
          OrdinaryDefineOwnMetadata: _,
          OrdinaryHasOwnMetadata: u,
          OrdinaryGetOwnMetadata: y,
          OrdinaryOwnMetadataKeys: c,
          OrdinaryDeleteMetadata: a
        };
        return C.registerProvider(r), r;
        function n(i, o, f) {
          var d = t.get(i), l = !1;
          if (s(d)) {
            if (!f)
              return;
            d = new j(), t.set(i, d), l = !0;
          }
          var p = d.get(o);
          if (s(p)) {
            if (!f)
              return;
            if (p = new j(), d.set(o, p), !e.setProvider(i, o, r))
              throw d.delete(o), l && t.delete(i), new Error("Wrong provider for target.");
          }
          return p;
        }
        function u(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          return s(d) ? !1 : ee(d.has(i));
        }
        function y(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          if (!s(d))
            return d.get(i);
        }
        function _(i, o, f, d) {
          var l = n(
            f,
            d,
            /*Create*/
            !0
          );
          l.set(i, o);
        }
        function c(i, o) {
          var f = [], d = n(
            i,
            o,
            /*Create*/
            !1
          );
          if (s(d))
            return f;
          for (var l = d.keys(), p = ae(l), m = 0; ; ) {
            var ue = oe(p);
            if (!ue)
              return f.length = m, f;
            var He = ie(ue);
            try {
              f[m] = He;
            } catch ($e) {
              try {
                fe(p);
              } finally {
                throw $e;
              }
            }
            m++;
          }
        }
        function a(i, o, f) {
          var d = n(
            o,
            f,
            /*Create*/
            !1
          );
          if (s(d) || !d.delete(i))
            return !1;
          if (d.size === 0) {
            var l = t.get(o);
            s(l) || (l.delete(f), l.size === 0 && t.delete(l));
          }
          return !0;
        }
      }
      function Fe(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, u = e.getOwnMetadataKeys, y = e.deleteMetadata, _ = new V(), c = {
          isProviderFor: function(a, i) {
            var o = _.get(a);
            return !s(o) && o.has(i) ? !0 : u(a, i).length ? (s(o) && (o = new F(), _.set(a, o)), o.add(i), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: n,
          OrdinaryOwnMetadataKeys: u,
          OrdinaryDeleteMetadata: y
        };
        return c;
      }
      function G(e, t, r) {
        var n = C.getProvider(e, t);
        if (!s(n))
          return n;
        if (r) {
          if (C.setProvider(e, t, B))
            return B;
          throw new Error("Illegal state.");
        }
      }
      function Ve() {
        var e = {}, t = [], r = (
          /** @class */
          (function() {
            function c(a, i, o) {
              this._index = 0, this._keys = a, this._values = i, this._selector = o;
            }
            return c.prototype["@@iterator"] = function() {
              return this;
            }, c.prototype[T] = function() {
              return this;
            }, c.prototype.next = function() {
              var a = this._index;
              if (a >= 0 && a < this._keys.length) {
                var i = this._selector(this._keys[a], this._values[a]);
                return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, c.prototype.throw = function(a) {
              throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
            }, c.prototype.return = function(a) {
              return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
            }, c;
          })()
        ), n = (
          /** @class */
          (function() {
            function c() {
              this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
            }
            return Object.defineProperty(c.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), c.prototype.has = function(a) {
              return this._find(
                a,
                /*insert*/
                !1
              ) >= 0;
            }, c.prototype.get = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              return i >= 0 ? this._values[i] : void 0;
            }, c.prototype.set = function(a, i) {
              var o = this._find(
                a,
                /*insert*/
                !0
              );
              return this._values[o] = i, this;
            }, c.prototype.delete = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              if (i >= 0) {
                for (var o = this._keys.length, f = i + 1; f < o; f++)
                  this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
                return this._keys.length--, this._values.length--, W(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, c.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, c.prototype.keys = function() {
              return new r(this._keys, this._values, u);
            }, c.prototype.values = function() {
              return new r(this._keys, this._values, y);
            }, c.prototype.entries = function() {
              return new r(this._keys, this._values, _);
            }, c.prototype["@@iterator"] = function() {
              return this.entries();
            }, c.prototype[T] = function() {
              return this.entries();
            }, c.prototype._find = function(a, i) {
              if (!W(this._cacheKey, a)) {
                this._cacheIndex = -1;
                for (var o = 0; o < this._keys.length; o++)
                  if (W(this._keys[o], a)) {
                    this._cacheIndex = o;
                    break;
                  }
              }
              return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
            }, c;
          })()
        );
        return n;
        function u(c, a) {
          return c;
        }
        function y(c, a) {
          return a;
        }
        function _(c, a) {
          return [c, a];
        }
      }
      function Ue() {
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
            }, t.prototype[T] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function We() {
        var e = 16, t = O.create(), r = n();
        return (
          /** @class */
          (function() {
            function a() {
              this._key = n();
            }
            return a.prototype.has = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? O.has(o, this._key) : !1;
            }, a.prototype.get = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? O.get(o, this._key) : void 0;
            }, a.prototype.set = function(i, o) {
              var f = u(
                i,
                /*create*/
                !0
              );
              return f[this._key] = o, this;
            }, a.prototype.delete = function(i) {
              var o = u(
                i,
                /*create*/
                !1
              );
              return o !== void 0 ? delete o[this._key] : !1;
            }, a.prototype.clear = function() {
              this._key = n();
            }, a;
          })()
        );
        function n() {
          var a;
          do
            a = "@@WeakMap@@" + c();
          while (O.has(t, a));
          return t[a] = !0, a;
        }
        function u(a, i) {
          if (!k.call(a, r)) {
            if (!i)
              return;
            Object.defineProperty(a, r, { value: O.create() });
          }
          return a[r];
        }
        function y(a, i) {
          for (var o = 0; o < i; ++o)
            a[o] = Math.random() * 255 | 0;
          return a;
        }
        function _(a) {
          if (typeof Uint8Array == "function") {
            var i = new Uint8Array(a);
            return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : y(i, a), i;
          }
          return y(new Array(a), a);
        }
        function c() {
          var a = _(e);
          a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
          for (var i = "", o = 0; o < e; ++o) {
            var f = a[o];
            (o === 4 || o === 6 || o === 8) && (i += "-"), f < 16 && (i += "0"), i += f.toString(16).toLowerCase();
          }
          return i;
        }
      }
      function $(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(M || (M = {})), ce;
}
ze();
class ye extends he {
  constructor() {
    super(...arguments), this.itemsMap = /* @__PURE__ */ new Map();
  }
  registerNavigationItem(h) {
    return h.id ? (this.itemsMap.set(h.id, h), this.items = Array.from(this.itemsMap.values()), console.log(`Registered navigation item: ${h.id} (${h.label})`), !0) : (console.warn("Cannot register navigation item without id"), !1);
  }
  unregisterNavigationItem(h) {
    const v = this.itemsMap.delete(h);
    return v && (this.items = Array.from(this.itemsMap.values()), console.log(`Unregistered navigation item: ${h}`)), v;
  }
  getNavigationItem(h) {
    return h ? this.itemsMap.get(h) || new z() : new z();
  }
  getAllNavigationItems() {
    return Array.from(this.itemsMap.values()).filter((v) => v.visible !== !1).sort((v, g) => (v.order || 0) - (g.order || 0));
  }
  // Correct typed method for actual use
  getAllNavigationItemsArray() {
    return Array.from(this.itemsMap.values()).filter((h) => h.visible !== !1).sort((h, v) => (h.order || 0) - (v.order || 0));
  }
}
function pe({ services: M }) {
  M.register(Y, new ye());
}
function we({ services: M }) {
  M.unregister(Y);
}
const Ye = ve, Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NAVIGATION_REGISTRY: ve,
  NAVIGATION_REGISTRY_ID: Y,
  NavigationItem: z,
  NavigationRegistry: he,
  NavigationRegistryImpl: ye,
  activate: pe,
  deactivate: we,
  identifier: Ye
}, Symbol.toStringTag, { value: "Module" })), le = "org.eclipse.daanse.board.app.lib.repository.navigation", qe = "0.0.1-next.1";
async function Ze(M) {
  const h = globalThis.__tsm__;
  if (!h)
    throw new Error(`${le}: tsm runtime is not initialized`);
  h.register(le, Be, qe, "lib.repository.navigation"), await pe?.(M);
}
async function Je(M) {
  await we?.(M);
}
export {
  Ke as NAVIGATION_REGISTRY,
  et as NAVIGATION_REGISTRY_ID,
  tt as NavigationItem,
  rt as NavigationRegistry,
  ye as NavigationRegistryImpl,
  Ze as activate,
  Je as deactivate,
  Ye as identifier
};
