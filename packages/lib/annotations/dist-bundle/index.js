var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ue = {};
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
var se;
function Fe() {
  if (se) return ue;
  se = 1;
  var _;
  return (function(b) {
    (function(p) {
      var M = typeof globalThis == "object" ? globalThis : typeof oe == "object" ? oe : typeof self == "object" ? self : typeof this == "object" ? this : D(), k = T(b);
      typeof M.Reflect < "u" && (k = T(M.Reflect, k)), p(k, M), typeof M.Reflect > "u" && (M.Reflect = b);
      function T(R, I) {
        return function(m, j) {
          Object.defineProperty(R, m, { configurable: !0, writable: !0, value: j }), I && I(m, j);
        };
      }
      function F() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function E() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function D() {
        return F() || E();
      }
    })(function(p, M) {
      var k = Object.prototype.hasOwnProperty, T = typeof Symbol == "function", F = T && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", E = T && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", D = typeof Object.create == "function", R = { __proto__: [] } instanceof Array, I = !D && !R, m = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: D ? function() {
          return B(/* @__PURE__ */ Object.create(null));
        } : R ? function() {
          return B({ __proto__: null });
        } : function() {
          return B({});
        },
        has: I ? function(e, t) {
          return k.call(e, t);
        } : function(e, t) {
          return t in e;
        },
        get: I ? function(e, t) {
          return k.call(e, t) ? e[t] : void 0;
        } : function(e, t) {
          return e[t];
        }
      }, j = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ce(), U = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), W = typeof WeakMap == "function" ? WeakMap : De(), P = T ? Symbol.for("@reflect-metadata:registry") : void 0, G = Se(), q = Ie(G);
      function de(e, t, r, n) {
        if (s(r)) {
          if (!K(e))
            throw new TypeError();
          if (!ee(t))
            throw new TypeError();
          return ge(e, t);
        } else {
          if (!K(e))
            throw new TypeError();
          if (!y(t))
            throw new TypeError();
          if (!y(n) && !s(n) && !S(n))
            throw new TypeError();
          return S(n) && (n = void 0), r = O(r), Oe(e, t, r, n);
        }
      }
      p("decorate", de);
      function le(e, t) {
        function r(n, u) {
          if (!y(n))
            throw new TypeError();
          if (!s(u) && !Re(u))
            throw new TypeError();
          Y(e, t, n, u);
        }
        return r;
      }
      p("metadata", le);
      function he(e, t, r, n) {
        if (!y(r))
          throw new TypeError();
        return s(n) || (n = O(n)), Y(e, t, r, n);
      }
      p("defineMetadata", he);
      function ve(e, t, r) {
        if (!y(t))
          throw new TypeError();
        return s(r) || (r = O(r)), L(e, t, r);
      }
      p("hasMetadata", ve);
      function ye(e, t, r) {
        if (!y(t))
          throw new TypeError();
        return s(r) || (r = O(r)), H(e, t, r);
      }
      p("hasOwnMetadata", ye);
      function we(e, t, r) {
        if (!y(t))
          throw new TypeError();
        return s(r) || (r = O(r)), N(e, t, r);
      }
      p("getMetadata", we);
      function pe(e, t, r) {
        if (!y(t))
          throw new TypeError();
        return s(r) || (r = O(r)), Z(e, t, r);
      }
      p("getOwnMetadata", pe);
      function _e(e, t) {
        if (!y(e))
          throw new TypeError();
        return s(t) || (t = O(t)), $(e, t);
      }
      p("getMetadataKeys", _e);
      function Me(e, t) {
        if (!y(e))
          throw new TypeError();
        return s(t) || (t = O(t)), J(e, t);
      }
      p("getOwnMetadataKeys", Me);
      function be(e, t, r) {
        if (!y(t))
          throw new TypeError();
        if (s(r) || (r = O(r)), !y(t))
          throw new TypeError();
        s(r) || (r = O(r));
        var n = x(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
      }
      p("deleteMetadata", be);
      function ge(e, t) {
        for (var r = e.length - 1; r >= 0; --r) {
          var n = e[r], u = n(t);
          if (!s(u) && !S(u)) {
            if (!ee(u))
              throw new TypeError();
            t = u;
          }
        }
        return t;
      }
      function Oe(e, t, r, n) {
        for (var u = e.length - 1; u >= 0; --u) {
          var h = e[u], w = h(t, r, n);
          if (!s(w) && !S(w)) {
            if (!y(w))
              throw new TypeError();
            n = w;
          }
        }
        return n;
      }
      function L(e, t, r) {
        var n = H(e, t, r);
        if (n)
          return !0;
        var u = z(t);
        return S(u) ? !1 : L(e, u, r);
      }
      function H(e, t, r) {
        var n = x(
          t,
          r,
          /*Create*/
          !1
        );
        return s(n) ? !1 : X(n.OrdinaryHasOwnMetadata(e, t, r));
      }
      function N(e, t, r) {
        var n = H(e, t, r);
        if (n)
          return Z(e, t, r);
        var u = z(t);
        if (!S(u))
          return N(e, u, r);
      }
      function Z(e, t, r) {
        var n = x(
          t,
          r,
          /*Create*/
          !1
        );
        if (!s(n))
          return n.OrdinaryGetOwnMetadata(e, t, r);
      }
      function Y(e, t, r, n) {
        var u = x(
          r,
          n,
          /*Create*/
          !0
        );
        u.OrdinaryDefineOwnMetadata(e, t, r, n);
      }
      function $(e, t) {
        var r = J(e, t), n = z(e);
        if (n === null)
          return r;
        var u = $(n, t);
        if (u.length <= 0)
          return r;
        if (r.length <= 0)
          return u;
        for (var h = new U(), w = [], c = 0, a = r; c < a.length; c++) {
          var i = a[c], f = h.has(i);
          f || (h.add(i), w.push(i));
        }
        for (var o = 0, d = u; o < d.length; o++) {
          var i = d[o], f = h.has(i);
          f || (h.add(i), w.push(i));
        }
        return w;
      }
      function J(e, t) {
        var r = x(
          e,
          t,
          /*create*/
          !1
        );
        return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
      }
      function Q(e) {
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
      function me(e) {
        return typeof e == "symbol";
      }
      function y(e) {
        return typeof e == "object" ? e !== null : typeof e == "function";
      }
      function ke(e, t) {
        switch (Q(e)) {
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
        var r = "string", n = te(e, F);
        if (n !== void 0) {
          var u = n.call(e, r);
          if (y(u))
            throw new TypeError();
          return u;
        }
        return Te(e);
      }
      function Te(e, t) {
        var r, n, u;
        {
          var h = e.toString;
          if (A(h)) {
            var n = h.call(e);
            if (!y(n))
              return n;
          }
          var r = e.valueOf;
          if (A(r)) {
            var n = r.call(e);
            if (!y(n))
              return n;
          }
        }
        throw new TypeError();
      }
      function X(e) {
        return !!e;
      }
      function Ee(e) {
        return "" + e;
      }
      function O(e) {
        var t = ke(e);
        return me(t) ? t : Ee(t);
      }
      function K(e) {
        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
      }
      function A(e) {
        return typeof e == "function";
      }
      function ee(e) {
        return typeof e == "function";
      }
      function Re(e) {
        switch (Q(e)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function V(e, t) {
        return e === t || e !== e && t !== t;
      }
      function te(e, t) {
        var r = e[t];
        if (r != null) {
          if (!A(r))
            throw new TypeError();
          return r;
        }
      }
      function re(e) {
        var t = te(e, E);
        if (!A(t))
          throw new TypeError();
        var r = t.call(e);
        if (!y(r))
          throw new TypeError();
        return r;
      }
      function ne(e) {
        return e.value;
      }
      function ae(e) {
        var t = e.next();
        return t.done ? !1 : t;
      }
      function ie(e) {
        var t = e.return;
        t && t.call(e);
      }
      function z(e) {
        var t = Object.getPrototypeOf(e);
        if (typeof e != "function" || e === j || t !== j)
          return t;
        var r = e.prototype, n = r && Object.getPrototypeOf(r);
        if (n == null || n === Object.prototype)
          return t;
        var u = n.constructor;
        return typeof u != "function" || u === e ? t : u;
      }
      function Pe() {
        var e;
        !s(P) && typeof M.Reflect < "u" && !(P in M.Reflect) && typeof M.Reflect.defineMetadata == "function" && (e = je(M.Reflect));
        var t, r, n, u = new W(), h = {
          registerProvider: w,
          getProvider: a,
          setProvider: f
        };
        return h;
        function w(o) {
          if (!Object.isExtensible(h))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case e === o:
              break;
            case s(t):
              t = o;
              break;
            case t === o:
              break;
            case s(r):
              r = o;
              break;
            case r === o:
              break;
            default:
              n === void 0 && (n = new U()), n.add(o);
              break;
          }
        }
        function c(o, d) {
          if (!s(t)) {
            if (t.isProviderFor(o, d))
              return t;
            if (!s(r)) {
              if (r.isProviderFor(o, d))
                return t;
              if (!s(n))
                for (var l = re(n); ; ) {
                  var v = ae(l);
                  if (!v)
                    return;
                  var g = ne(v);
                  if (g.isProviderFor(o, d))
                    return ie(l), g;
                }
            }
          }
          if (!s(e) && e.isProviderFor(o, d))
            return e;
        }
        function a(o, d) {
          var l = u.get(o), v;
          return s(l) || (v = l.get(d)), s(v) && (v = c(o, d), s(v) || (s(l) && (l = new C(), u.set(o, l)), l.set(d, v))), v;
        }
        function i(o) {
          if (s(o))
            throw new TypeError();
          return t === o || r === o || !s(n) && n.has(o);
        }
        function f(o, d, l) {
          if (!i(l))
            throw new Error("Metadata provider not registered.");
          var v = a(o, d);
          if (v !== l) {
            if (!s(v))
              return !1;
            var g = u.get(o);
            s(g) && (g = new C(), u.set(o, g)), g.set(d, l);
          }
          return !0;
        }
      }
      function Se() {
        var e;
        return !s(P) && y(M.Reflect) && Object.isExtensible(M.Reflect) && (e = M.Reflect[P]), s(e) && (e = Pe()), !s(P) && y(M.Reflect) && Object.isExtensible(M.Reflect) && Object.defineProperty(M.Reflect, P, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: e
        }), e;
      }
      function Ie(e) {
        var t = new W(), r = {
          isProviderFor: function(i, f) {
            var o = t.get(i);
            return s(o) ? !1 : o.has(f);
          },
          OrdinaryDefineOwnMetadata: w,
          OrdinaryHasOwnMetadata: u,
          OrdinaryGetOwnMetadata: h,
          OrdinaryOwnMetadataKeys: c,
          OrdinaryDeleteMetadata: a
        };
        return G.registerProvider(r), r;
        function n(i, f, o) {
          var d = t.get(i), l = !1;
          if (s(d)) {
            if (!o)
              return;
            d = new C(), t.set(i, d), l = !0;
          }
          var v = d.get(f);
          if (s(v)) {
            if (!o)
              return;
            if (v = new C(), d.set(f, v), !e.setProvider(i, f, r))
              throw d.delete(f), l && t.delete(i), new Error("Wrong provider for target.");
          }
          return v;
        }
        function u(i, f, o) {
          var d = n(
            f,
            o,
            /*Create*/
            !1
          );
          return s(d) ? !1 : X(d.has(i));
        }
        function h(i, f, o) {
          var d = n(
            f,
            o,
            /*Create*/
            !1
          );
          if (!s(d))
            return d.get(i);
        }
        function w(i, f, o, d) {
          var l = n(
            o,
            d,
            /*Create*/
            !0
          );
          l.set(i, f);
        }
        function c(i, f) {
          var o = [], d = n(
            i,
            f,
            /*Create*/
            !1
          );
          if (s(d))
            return o;
          for (var l = d.keys(), v = re(l), g = 0; ; ) {
            var fe = ae(v);
            if (!fe)
              return o.length = g, o;
            var Ge = ne(fe);
            try {
              o[g] = Ge;
            } catch (Ae) {
              try {
                ie(v);
              } finally {
                throw Ae;
              }
            }
            g++;
          }
        }
        function a(i, f, o) {
          var d = n(
            f,
            o,
            /*Create*/
            !1
          );
          if (s(d) || !d.delete(i))
            return !1;
          if (d.size === 0) {
            var l = t.get(f);
            s(l) || (l.delete(o), l.size === 0 && t.delete(l));
          }
          return !0;
        }
      }
      function je(e) {
        var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, u = e.getOwnMetadataKeys, h = e.deleteMetadata, w = new W(), c = {
          isProviderFor: function(a, i) {
            var f = w.get(a);
            return !s(f) && f.has(i) ? !0 : u(a, i).length ? (s(f) && (f = new U(), w.set(a, f)), f.add(i), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: t,
          OrdinaryHasOwnMetadata: r,
          OrdinaryGetOwnMetadata: n,
          OrdinaryOwnMetadataKeys: u,
          OrdinaryDeleteMetadata: h
        };
        return c;
      }
      function x(e, t, r) {
        var n = G.getProvider(e, t);
        if (!s(n))
          return n;
        if (r) {
          if (G.setProvider(e, t, q))
            return q;
          throw new Error("Illegal state.");
        }
      }
      function Ce() {
        var e = {}, t = [], r = (
          /** @class */
          (function() {
            function c(a, i, f) {
              this._index = 0, this._keys = a, this._values = i, this._selector = f;
            }
            return c.prototype["@@iterator"] = function() {
              return this;
            }, c.prototype[E] = function() {
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
              var f = this._find(
                a,
                /*insert*/
                !0
              );
              return this._values[f] = i, this;
            }, c.prototype.delete = function(a) {
              var i = this._find(
                a,
                /*insert*/
                !1
              );
              if (i >= 0) {
                for (var f = this._keys.length, o = i + 1; o < f; o++)
                  this._keys[o - 1] = this._keys[o], this._values[o - 1] = this._values[o];
                return this._keys.length--, this._values.length--, V(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
              }
              return !1;
            }, c.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
            }, c.prototype.keys = function() {
              return new r(this._keys, this._values, u);
            }, c.prototype.values = function() {
              return new r(this._keys, this._values, h);
            }, c.prototype.entries = function() {
              return new r(this._keys, this._values, w);
            }, c.prototype["@@iterator"] = function() {
              return this.entries();
            }, c.prototype[E] = function() {
              return this.entries();
            }, c.prototype._find = function(a, i) {
              if (!V(this._cacheKey, a)) {
                this._cacheIndex = -1;
                for (var f = 0; f < this._keys.length; f++)
                  if (V(this._keys[f], a)) {
                    this._cacheIndex = f;
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
        function h(c, a) {
          return a;
        }
        function w(c, a) {
          return [c, a];
        }
      }
      function xe() {
        var e = (
          /** @class */
          (function() {
            function t() {
              this._map = new C();
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
            }, t.prototype[E] = function() {
              return this.keys();
            }, t;
          })()
        );
        return e;
      }
      function De() {
        var e = 16, t = m.create(), r = n();
        return (
          /** @class */
          (function() {
            function a() {
              this._key = n();
            }
            return a.prototype.has = function(i) {
              var f = u(
                i,
                /*create*/
                !1
              );
              return f !== void 0 ? m.has(f, this._key) : !1;
            }, a.prototype.get = function(i) {
              var f = u(
                i,
                /*create*/
                !1
              );
              return f !== void 0 ? m.get(f, this._key) : void 0;
            }, a.prototype.set = function(i, f) {
              var o = u(
                i,
                /*create*/
                !0
              );
              return o[this._key] = f, this;
            }, a.prototype.delete = function(i) {
              var f = u(
                i,
                /*create*/
                !1
              );
              return f !== void 0 ? delete f[this._key] : !1;
            }, a.prototype.clear = function() {
              this._key = n();
            }, a;
          })()
        );
        function n() {
          var a;
          do
            a = "@@WeakMap@@" + c();
          while (m.has(t, a));
          return t[a] = !0, a;
        }
        function u(a, i) {
          if (!k.call(a, r)) {
            if (!i)
              return;
            Object.defineProperty(a, r, { value: m.create() });
          }
          return a[r];
        }
        function h(a, i) {
          for (var f = 0; f < i; ++f)
            a[f] = Math.random() * 255 | 0;
          return a;
        }
        function w(a) {
          if (typeof Uint8Array == "function") {
            var i = new Uint8Array(a);
            return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : h(i, a), i;
          }
          return h(new Array(a), a);
        }
        function c() {
          var a = w(e);
          a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
          for (var i = "", f = 0; f < e; ++f) {
            var o = a[f];
            (f === 4 || f === 6 || f === 8) && (i += "-"), o < 16 && (i += "0"), i += o.toString(16).toLowerCase();
          }
          return i;
        }
      }
      function B(e) {
        return e.__ = void 0, delete e.__, e;
      }
    });
  })(_ || (_ = {})), ue;
}
Fe();
function Ue() {
  return function(_, b) {
    Reflect.defineMetadata("Attribute", !0, _, b);
  };
}
function We(_) {
  return function(b, p) {
    Reflect.defineMetadata("Reference", _, b, p);
  };
}
function He(_) {
  return function(b, p) {
    Reflect.defineMetadata("Enum", _, b, p);
  };
}
function Ve(_) {
  return function(b) {
    Reflect.defineMetadata("ModelClass", _, b, "modelClass");
  };
}
function ze(_) {
  return function(b, p) {
    Reflect.defineMetadata("Documentation", _, b, p);
  };
}
const Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Attribute: Ue,
  Documentation: ze,
  Enum: He,
  ModelClass: Ve,
  Reference: We
}, Symbol.toStringTag, { value: "Module" })), ce = "org.eclipse.daanse.board.app.lib.annotations", qe = "0.0.1-next.1";
async function Le(_) {
  const b = globalThis.__tsm__;
  if (!b)
    throw new Error(`${ce}: tsm runtime is not initialized`);
  b.register(ce, Be, qe, "lib.annotations"), await void 0;
}
async function Ne(_) {
  await void 0;
}
export {
  Ue as Attribute,
  ze as Documentation,
  He as Enum,
  Ve as ModelClass,
  We as Reference,
  Le as activate,
  Ne as deactivate
};
