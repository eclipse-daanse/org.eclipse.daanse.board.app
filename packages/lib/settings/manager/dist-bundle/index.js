import { SETTINGS_MANAGER as ve, identifier as Tr } from "org.eclipse.daanse.board.app.lib.api.settings";
import { SETTINGS_MANAGER as Tt, identifier as Ot } from "org.eclipse.daanse.board.app.lib.api.settings";
var f = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var p, qe;
function de() {
  if (qe) return p;
  qe = 1;
  var e = Array.isArray;
  return p = e, p;
}
var g, Ce;
function jr() {
  if (Ce) return g;
  Ce = 1;
  var e = typeof f == "object" && f && f.Object === Object && f;
  return g = e, g;
}
var y, me;
function pe() {
  if (me) return y;
  me = 1;
  var e = jr(), r = typeof self == "object" && self && self.Object === Object && self, t = e || r || Function("return this")();
  return y = t, y;
}
var b, Se;
function ge() {
  if (Se) return b;
  Se = 1;
  var e = pe(), r = e.Symbol;
  return b = r, b;
}
var q, Re;
function wr() {
  if (Re) return q;
  Re = 1;
  var e = ge(), r = Object.prototype, t = r.hasOwnProperty, n = r.toString, i = e ? e.toStringTag : void 0;
  function a(u) {
    var s = t.call(u, i), o = u[i];
    try {
      u[i] = void 0;
      var c = !0;
    } catch {
    }
    var d = n.call(u);
    return c && (s ? u[i] = o : delete u[i]), d;
  }
  return q = a, q;
}
var C, Te;
function Ir() {
  if (Te) return C;
  Te = 1;
  var e = Object.prototype, r = e.toString;
  function t(n) {
    return r.call(n);
  }
  return C = t, C;
}
var m, Oe;
function br() {
  if (Oe) return m;
  Oe = 1;
  var e = ge(), r = wr(), t = Ir(), n = "[object Null]", i = "[object Undefined]", a = e ? e.toStringTag : void 0;
  function u(s) {
    return s == null ? s === void 0 ? i : n : a && a in Object(s) ? r(s) : t(s);
  }
  return m = u, m;
}
var S, je;
function Gr() {
  if (je) return S;
  je = 1;
  function e(r) {
    return r != null && typeof r == "object";
  }
  return S = e, S;
}
var R, we;
function ye() {
  if (we) return R;
  we = 1;
  var e = br(), r = Gr(), t = "[object Symbol]";
  function n(i) {
    return typeof i == "symbol" || r(i) && e(i) == t;
  }
  return R = n, R;
}
var T, Ie;
function Mr() {
  if (Ie) return T;
  Ie = 1;
  var e = de(), r = ye(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, u) {
    if (e(a))
      return !1;
    var s = typeof a;
    return s == "number" || s == "symbol" || s == "boolean" || a == null || r(a) ? !0 : n.test(a) || !t.test(a) || u != null && a in Object(u);
  }
  return T = i, T;
}
var O, Ge;
function qr() {
  if (Ge) return O;
  Ge = 1;
  function e(r) {
    var t = typeof r;
    return r != null && (t == "object" || t == "function");
  }
  return O = e, O;
}
var j, Me;
function Dr() {
  if (Me) return j;
  Me = 1;
  var e = br(), r = qr(), t = "[object AsyncFunction]", n = "[object Function]", i = "[object GeneratorFunction]", a = "[object Proxy]";
  function u(s) {
    if (!r(s))
      return !1;
    var o = e(s);
    return o == n || o == i || o == t || o == a;
  }
  return j = u, j;
}
var w, De;
function Pr() {
  if (De) return w;
  De = 1;
  var e = pe(), r = e["__core-js_shared__"];
  return w = r, w;
}
var I, Pe;
function xr() {
  if (Pe) return I;
  Pe = 1;
  var e = Pr(), r = (function() {
    var n = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function t(n) {
    return !!r && r in n;
  }
  return I = t, I;
}
var G, xe;
function zr() {
  if (xe) return G;
  xe = 1;
  var e = Function.prototype, r = e.toString;
  function t(n) {
    if (n != null) {
      try {
        return r.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return G = t, G;
}
var M, ze;
function Er() {
  if (ze) return M;
  ze = 1;
  var e = Dr(), r = xr(), t = qr(), n = zr(), i = /[\\^$.*+?()[\]{}|]/g, a = /^\[object .+?Constructor\]$/, u = Function.prototype, s = Object.prototype, o = u.toString, c = s.hasOwnProperty, d = RegExp(
    "^" + o.call(c).replace(i, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function be(h) {
    if (!t(h) || r(h))
      return !1;
    var Rr = e(h) ? d : a;
    return Rr.test(n(h));
  }
  return M = be, M;
}
var D, Ee;
function Hr() {
  if (Ee) return D;
  Ee = 1;
  function e(r, t) {
    return r?.[t];
  }
  return D = e, D;
}
var P, He;
function Cr() {
  if (He) return P;
  He = 1;
  var e = Er(), r = Hr();
  function t(n, i) {
    var a = r(n, i);
    return e(a) ? a : void 0;
  }
  return P = t, P;
}
var x, Ne;
function _() {
  if (Ne) return x;
  Ne = 1;
  var e = Cr(), r = e(Object, "create");
  return x = r, x;
}
var z, Ae;
function Nr() {
  if (Ae) return z;
  Ae = 1;
  var e = _();
  function r() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return z = r, z;
}
var E, Ke;
function Ar() {
  if (Ke) return E;
  Ke = 1;
  function e(r) {
    var t = this.has(r) && delete this.__data__[r];
    return this.size -= t ? 1 : 0, t;
  }
  return E = e, E;
}
var H, Fe;
function Kr() {
  if (Fe) return H;
  Fe = 1;
  var e = _(), r = "__lodash_hash_undefined__", t = Object.prototype, n = t.hasOwnProperty;
  function i(a) {
    var u = this.__data__;
    if (e) {
      var s = u[a];
      return s === r ? void 0 : s;
    }
    return n.call(u, a) ? u[a] : void 0;
  }
  return H = i, H;
}
var N, $e;
function Fr() {
  if ($e) return N;
  $e = 1;
  var e = _(), r = Object.prototype, t = r.hasOwnProperty;
  function n(i) {
    var a = this.__data__;
    return e ? a[i] !== void 0 : t.call(a, i);
  }
  return N = n, N;
}
var A, Le;
function $r() {
  if (Le) return A;
  Le = 1;
  var e = _(), r = "__lodash_hash_undefined__";
  function t(n, i) {
    var a = this.__data__;
    return this.size += this.has(n) ? 0 : 1, a[n] = e && i === void 0 ? r : i, this;
  }
  return A = t, A;
}
var K, Ve;
function Lr() {
  if (Ve) return K;
  Ve = 1;
  var e = Nr(), r = Ar(), t = Kr(), n = Fr(), i = $r();
  function a(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = r, a.prototype.get = t, a.prototype.has = n, a.prototype.set = i, K = a, K;
}
var F, Je;
function Vr() {
  if (Je) return F;
  Je = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return F = e, F;
}
var $, Ue;
function Jr() {
  if (Ue) return $;
  Ue = 1;
  function e(r, t) {
    return r === t || r !== r && t !== t;
  }
  return $ = e, $;
}
var L, ke;
function l() {
  if (ke) return L;
  ke = 1;
  var e = Jr();
  function r(t, n) {
    for (var i = t.length; i--; )
      if (e(t[i][0], n))
        return i;
    return -1;
  }
  return L = r, L;
}
var V, Xe;
function Ur() {
  if (Xe) return V;
  Xe = 1;
  var e = l(), r = Array.prototype, t = r.splice;
  function n(i) {
    var a = this.__data__, u = e(a, i);
    if (u < 0)
      return !1;
    var s = a.length - 1;
    return u == s ? a.pop() : t.call(a, u, 1), --this.size, !0;
  }
  return V = n, V;
}
var J, Ze;
function kr() {
  if (Ze) return J;
  Ze = 1;
  var e = l();
  function r(t) {
    var n = this.__data__, i = e(n, t);
    return i < 0 ? void 0 : n[i][1];
  }
  return J = r, J;
}
var U, Be;
function Xr() {
  if (Be) return U;
  Be = 1;
  var e = l();
  function r(t) {
    return e(this.__data__, t) > -1;
  }
  return U = r, U;
}
var k, Ye;
function Zr() {
  if (Ye) return k;
  Ye = 1;
  var e = l();
  function r(t, n) {
    var i = this.__data__, a = e(i, t);
    return a < 0 ? (++this.size, i.push([t, n])) : i[a][1] = n, this;
  }
  return k = r, k;
}
var X, Qe;
function Br() {
  if (Qe) return X;
  Qe = 1;
  var e = Vr(), r = Ur(), t = kr(), n = Xr(), i = Zr();
  function a(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = r, a.prototype.get = t, a.prototype.has = n, a.prototype.set = i, X = a, X;
}
var Z, We;
function Yr() {
  if (We) return Z;
  We = 1;
  var e = Cr(), r = pe(), t = e(r, "Map");
  return Z = t, Z;
}
var B, er;
function Qr() {
  if (er) return B;
  er = 1;
  var e = Lr(), r = Br(), t = Yr();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (t || r)(),
      string: new e()
    };
  }
  return B = n, B;
}
var Y, rr;
function Wr() {
  if (rr) return Y;
  rr = 1;
  function e(r) {
    var t = typeof r;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? r !== "__proto__" : r === null;
  }
  return Y = e, Y;
}
var Q, tr;
function v() {
  if (tr) return Q;
  tr = 1;
  var e = Wr();
  function r(t, n) {
    var i = t.__data__;
    return e(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
  }
  return Q = r, Q;
}
var W, ar;
function et() {
  if (ar) return W;
  ar = 1;
  var e = v();
  function r(t) {
    var n = e(this, t).delete(t);
    return this.size -= n ? 1 : 0, n;
  }
  return W = r, W;
}
var ee, nr;
function rt() {
  if (nr) return ee;
  nr = 1;
  var e = v();
  function r(t) {
    return e(this, t).get(t);
  }
  return ee = r, ee;
}
var re, ir;
function tt() {
  if (ir) return re;
  ir = 1;
  var e = v();
  function r(t) {
    return e(this, t).has(t);
  }
  return re = r, re;
}
var te, ur;
function at() {
  if (ur) return te;
  ur = 1;
  var e = v();
  function r(t, n) {
    var i = e(this, t), a = i.size;
    return i.set(t, n), this.size += i.size == a ? 0 : 1, this;
  }
  return te = r, te;
}
var ae, sr;
function nt() {
  if (sr) return ae;
  sr = 1;
  var e = Qr(), r = et(), t = rt(), n = tt(), i = at();
  function a(u) {
    var s = -1, o = u == null ? 0 : u.length;
    for (this.clear(); ++s < o; ) {
      var c = u[s];
      this.set(c[0], c[1]);
    }
  }
  return a.prototype.clear = e, a.prototype.delete = r, a.prototype.get = t, a.prototype.has = n, a.prototype.set = i, ae = a, ae;
}
var ne, or;
function it() {
  if (or) return ne;
  or = 1;
  var e = nt(), r = "Expected a function";
  function t(n, i) {
    if (typeof n != "function" || i != null && typeof i != "function")
      throw new TypeError(r);
    var a = function() {
      var u = arguments, s = i ? i.apply(this, u) : u[0], o = a.cache;
      if (o.has(s))
        return o.get(s);
      var c = n.apply(this, u);
      return a.cache = o.set(s, c) || o, c;
    };
    return a.cache = new (t.Cache || e)(), a;
  }
  return t.Cache = e, ne = t, ne;
}
var ie, cr;
function ut() {
  if (cr) return ie;
  cr = 1;
  var e = it(), r = 500;
  function t(n) {
    var i = e(n, function(u) {
      return a.size === r && a.clear(), u;
    }), a = i.cache;
    return i;
  }
  return ie = t, ie;
}
var ue, hr;
function st() {
  if (hr) return ue;
  hr = 1;
  var e = ut(), r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, n = e(function(i) {
    var a = [];
    return i.charCodeAt(0) === 46 && a.push(""), i.replace(r, function(u, s, o, c) {
      a.push(o ? c.replace(t, "$1") : s || u);
    }), a;
  });
  return ue = n, ue;
}
var se, fr;
function ot() {
  if (fr) return se;
  fr = 1;
  function e(r, t) {
    for (var n = -1, i = r == null ? 0 : r.length, a = Array(i); ++n < i; )
      a[n] = t(r[n], n, r);
    return a;
  }
  return se = e, se;
}
var oe, _r;
function ct() {
  if (_r) return oe;
  _r = 1;
  var e = ge(), r = ot(), t = de(), n = ye(), i = e ? e.prototype : void 0, a = i ? i.toString : void 0;
  function u(s) {
    if (typeof s == "string")
      return s;
    if (t(s))
      return r(s, u) + "";
    if (n(s))
      return a ? a.call(s) : "";
    var o = s + "";
    return o == "0" && 1 / s == -1 / 0 ? "-0" : o;
  }
  return oe = u, oe;
}
var ce, lr;
function ht() {
  if (lr) return ce;
  lr = 1;
  var e = ct();
  function r(t) {
    return t == null ? "" : e(t);
  }
  return ce = r, ce;
}
var he, vr;
function ft() {
  if (vr) return he;
  vr = 1;
  var e = de(), r = Mr(), t = st(), n = ht();
  function i(a, u) {
    return e(a) ? a : r(a, u) ? [a] : t(n(a));
  }
  return he = i, he;
}
var fe, dr;
function _t() {
  if (dr) return fe;
  dr = 1;
  var e = ye();
  function r(t) {
    if (typeof t == "string" || e(t))
      return t;
    var n = t + "";
    return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
  }
  return fe = r, fe;
}
var _e, pr;
function lt() {
  if (pr) return _e;
  pr = 1;
  var e = ft(), r = _t();
  function t(n, i) {
    i = e(i, n);
    for (var a = 0, u = i.length; n != null && a < u; )
      n = n[r(i[a++])];
    return a && a == u ? n : void 0;
  }
  return _e = t, _e;
}
var le, gr;
function vt() {
  if (gr) return le;
  gr = 1;
  var e = lt();
  function r(t, n, i) {
    var a = t == null ? void 0 : e(t, n);
    return a === void 0 ? i : a;
  }
  return le = r, le;
}
var dt = vt();
const pt = /* @__PURE__ */ Or(dt);
class gt {
  constructor() {
    this.ext_loaded = !1, this.path = "/config.json";
  }
  async loadData() {
    try {
      const t = await (await fetch(this.path)).json();
      globalThis.__env || (globalThis.__env = { settings: null }), globalThis.__env.settings = t;
    } catch {
      console.log("no external conf found");
    } finally {
      this.ext_loaded = !0;
    }
  }
  async getSettings(r) {
    this.ext_loaded || await this.loadData();
    const t = globalThis.__env?.settings;
    return t ? pt(t, r) : null;
  }
}
function mr({ services: e }) {
  e.register(ve, new gt());
}
function Sr({ services: e }) {
  e.unregister(ve);
}
const yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SETTINGS_MANAGER: ve,
  activate: mr,
  deactivate: Sr,
  identifier: Tr
}, Symbol.toStringTag, { value: "Module" })), yr = "org.eclipse.daanse.board.app.lib.settings.manager", bt = "0.0.1-next.1";
async function Ct(e) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error(`${yr}: tsm runtime is not initialized`);
  r.register(yr, yt, bt, "lib.settings.manager"), await mr?.(e);
}
async function mt(e) {
  await Sr?.(e);
}
export {
  Tt as SETTINGS_MANAGER,
  Ct as activate,
  mt as deactivate,
  Ot as identifier
};
