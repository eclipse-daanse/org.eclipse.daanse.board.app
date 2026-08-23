var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _i(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ie = { exports: {} }, Ge, wr;
function Ne() {
  if (wr) return Ge;
  wr = 1;
  const i = "2.0.0", e = 256, t = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, r = 16, n = e - 6;
  return Ge = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_SAFE_INTEGER: t,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: i,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, Ge;
}
var ze, Er;
function _e() {
  if (Er) return ze;
  Er = 1;
  var i = {};
  return ze = typeof process == "object" && i && i.NODE_DEBUG && /\bsemver\b/i.test(i.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
  }, ze;
}
var Rr;
function Re() {
  return Rr || (Rr = 1, (function(i, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: t,
      MAX_SAFE_BUILD_LENGTH: r,
      MAX_LENGTH: n
    } = Ne(), s = _e();
    e = i.exports = {};
    const o = e.re = [], a = e.safeRe = [], f = e.src = [], d = e.safeSrc = [], c = e.t = {};
    let l = 0;
    const p = "[a-zA-Z0-9-]", m = [
      ["\\s", 1],
      ["\\d", n],
      [p, r]
    ], j = (N) => {
      for (const [q, W] of m)
        N = N.split(`${q}*`).join(`${q}{0,${W}}`).split(`${q}+`).join(`${q}{1,${W}}`);
      return N;
    }, w = (N, q, W) => {
      const x = j(q), Z = l++;
      s(N, Z, q), c[N] = Z, f[Z] = q, d[Z] = x, o[Z] = new RegExp(q, W ? "g" : void 0), a[Z] = new RegExp(x, W ? "g" : void 0);
    };
    w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), w("MAINVERSION", `(${f[c.NUMERICIDENTIFIER]})\\.(${f[c.NUMERICIDENTIFIER]})\\.(${f[c.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${f[c.NUMERICIDENTIFIERLOOSE]})\\.(${f[c.NUMERICIDENTIFIERLOOSE]})\\.(${f[c.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${f[c.NONNUMERICIDENTIFIER]}|${f[c.NUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${f[c.NONNUMERICIDENTIFIER]}|${f[c.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASE", `(?:-(${f[c.PRERELEASEIDENTIFIER]}(?:\\.${f[c.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${f[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${f[c.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${p}+`), w("BUILD", `(?:\\+(${f[c.BUILDIDENTIFIER]}(?:\\.${f[c.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${f[c.MAINVERSION]}${f[c.PRERELEASE]}?${f[c.BUILD]}?`), w("FULL", `^${f[c.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${f[c.MAINVERSIONLOOSE]}${f[c.PRERELEASELOOSE]}?${f[c.BUILD]}?`), w("LOOSE", `^${f[c.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${f[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${f[c.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${f[c.XRANGEIDENTIFIER]})(?:\\.(${f[c.XRANGEIDENTIFIER]})(?:\\.(${f[c.XRANGEIDENTIFIER]})(?:${f[c.PRERELEASE]})?${f[c.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${f[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${f[c.XRANGEIDENTIFIERLOOSE]})(?:${f[c.PRERELEASELOOSE]})?${f[c.BUILD]}?)?)?`), w("XRANGE", `^${f[c.GTLT]}\\s*${f[c.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${f[c.GTLT]}\\s*${f[c.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`), w("COERCE", `${f[c.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", f[c.COERCEPLAIN] + `(?:${f[c.PRERELEASE]})?(?:${f[c.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", f[c.COERCE], !0), w("COERCERTLFULL", f[c.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${f[c.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${f[c.LONETILDE]}${f[c.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${f[c.LONETILDE]}${f[c.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${f[c.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${f[c.LONECARET]}${f[c.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${f[c.LONECARET]}${f[c.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${f[c.GTLT]}\\s*(${f[c.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${f[c.GTLT]}\\s*(${f[c.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${f[c.GTLT]}\\s*(${f[c.LOOSEPLAIN]}|${f[c.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${f[c.XRANGEPLAIN]})\\s+-\\s+(${f[c.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${f[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${f[c.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Ie, Ie.exports)), Ie.exports;
}
var We, br;
function Ht() {
  if (br) return We;
  br = 1;
  const i = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return We = (r) => r ? typeof r != "object" ? i : r : e, We;
}
var Xe, $r;
function bn() {
  if ($r) return Xe;
  $r = 1;
  const i = /^[0-9]+$/, e = (r, n) => {
    if (typeof r == "number" && typeof n == "number")
      return r === n ? 0 : r < n ? -1 : 1;
    const s = i.test(r), o = i.test(n);
    return s && o && (r = +r, n = +n), r === n ? 0 : s && !o ? -1 : o && !s ? 1 : r < n ? -1 : 1;
  };
  return Xe = {
    compareIdentifiers: e,
    rcompareIdentifiers: (r, n) => e(n, r)
  }, Xe;
}
var Ye, Ir;
function ee() {
  if (Ir) return Ye;
  Ir = 1;
  const i = _e(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: t } = Ne(), { safeRe: r, t: n } = Re(), s = Ht(), { compareIdentifiers: o } = bn();
  class a {
    constructor(d, c) {
      if (c = s(c), d instanceof a) {
        if (d.loose === !!c.loose && d.includePrerelease === !!c.includePrerelease)
          return d;
        d = d.version;
      } else if (typeof d != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof d}".`);
      if (d.length > e)
        throw new TypeError(
          `version is longer than ${e} characters`
        );
      i("SemVer", d, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
      const l = d.trim().match(c.loose ? r[n.LOOSE] : r[n.FULL]);
      if (!l)
        throw new TypeError(`Invalid Version: ${d}`);
      if (this.raw = d, this.major = +l[1], this.minor = +l[2], this.patch = +l[3], this.major > t || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > t || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > t || this.patch < 0)
        throw new TypeError("Invalid patch version");
      l[4] ? this.prerelease = l[4].split(".").map((p) => {
        if (/^[0-9]+$/.test(p)) {
          const m = +p;
          if (m >= 0 && m < t)
            return m;
        }
        return p;
      }) : this.prerelease = [], this.build = l[5] ? l[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(d) {
      if (i("SemVer.compare", this.version, this.options, d), !(d instanceof a)) {
        if (typeof d == "string" && d === this.version)
          return 0;
        d = new a(d, this.options);
      }
      return d.version === this.version ? 0 : this.compareMain(d) || this.comparePre(d);
    }
    compareMain(d) {
      return d instanceof a || (d = new a(d, this.options)), this.major < d.major ? -1 : this.major > d.major ? 1 : this.minor < d.minor ? -1 : this.minor > d.minor ? 1 : this.patch < d.patch ? -1 : this.patch > d.patch ? 1 : 0;
    }
    comparePre(d) {
      if (d instanceof a || (d = new a(d, this.options)), this.prerelease.length && !d.prerelease.length)
        return -1;
      if (!this.prerelease.length && d.prerelease.length)
        return 1;
      if (!this.prerelease.length && !d.prerelease.length)
        return 0;
      let c = 0;
      do {
        const l = this.prerelease[c], p = d.prerelease[c];
        if (i("prerelease compare", c, l, p), l === void 0 && p === void 0)
          return 0;
        if (p === void 0)
          return 1;
        if (l === void 0)
          return -1;
        if (l === p)
          continue;
        return o(l, p);
      } while (++c);
    }
    compareBuild(d) {
      d instanceof a || (d = new a(d, this.options));
      let c = 0;
      do {
        const l = this.build[c], p = d.build[c];
        if (i("build compare", c, l, p), l === void 0 && p === void 0)
          return 0;
        if (p === void 0)
          return 1;
        if (l === void 0)
          return -1;
        if (l === p)
          continue;
        return o(l, p);
      } while (++c);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(d, c, l) {
      if (d.startsWith("pre")) {
        if (!c && l === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (c) {
          const p = `-${c}`.match(this.options.loose ? r[n.PRERELEASELOOSE] : r[n.PRERELEASE]);
          if (!p || p[1] !== c)
            throw new Error(`invalid identifier: ${c}`);
        }
      }
      switch (d) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", c, l);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", c, l);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", c, l), this.inc("pre", c, l);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", c, l), this.inc("pre", c, l);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const p = Number(l) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [p];
          else {
            let m = this.prerelease.length;
            for (; --m >= 0; )
              typeof this.prerelease[m] == "number" && (this.prerelease[m]++, m = -2);
            if (m === -1) {
              if (c === this.prerelease.join(".") && l === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(p);
            }
          }
          if (c) {
            let m = [c, p];
            l === !1 && (m = [c]), o(this.prerelease[0], c) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = m) : this.prerelease = m;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${d}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Ye = a, Ye;
}
var He, Or;
function he() {
  if (Or) return He;
  Or = 1;
  const i = ee();
  return He = (t, r, n = !1) => {
    if (t instanceof i)
      return t;
    try {
      return new i(t, r);
    } catch (s) {
      if (!n)
        return null;
      throw s;
    }
  }, He;
}
var Ke, Sr;
function Pi() {
  if (Sr) return Ke;
  Sr = 1;
  const i = he();
  return Ke = (t, r) => {
    const n = i(t, r);
    return n ? n.version : null;
  }, Ke;
}
var Je, Cr;
function ji() {
  if (Cr) return Je;
  Cr = 1;
  const i = he();
  return Je = (t, r) => {
    const n = i(t.trim().replace(/^[=v]+/, ""), r);
    return n ? n.version : null;
  }, Je;
}
var Ze, Ar;
function ki() {
  if (Ar) return Ze;
  Ar = 1;
  const i = ee();
  return Ze = (t, r, n, s, o) => {
    typeof n == "string" && (o = s, s = n, n = void 0);
    try {
      return new i(
        t instanceof i ? t.version : t,
        n
      ).inc(r, s, o).version;
    } catch {
      return null;
    }
  }, Ze;
}
var Qe, Mr;
function Di() {
  if (Mr) return Qe;
  Mr = 1;
  const i = he();
  return Qe = (t, r) => {
    const n = i(t, null, !0), s = i(r, null, !0), o = n.compare(s);
    if (o === 0)
      return null;
    const a = o > 0, f = a ? n : s, d = a ? s : n, c = !!f.prerelease.length;
    if (!!d.prerelease.length && !c) {
      if (!d.patch && !d.minor)
        return "major";
      if (d.compareMain(f) === 0)
        return d.minor && !d.patch ? "minor" : "patch";
    }
    const p = c ? "pre" : "";
    return n.major !== s.major ? p + "major" : n.minor !== s.minor ? p + "minor" : n.patch !== s.patch ? p + "patch" : "prerelease";
  }, Qe;
}
var et, Tr;
function qi() {
  if (Tr) return et;
  Tr = 1;
  const i = ee();
  return et = (t, r) => new i(t, r).major, et;
}
var tt, Lr;
function Fi() {
  if (Lr) return tt;
  Lr = 1;
  const i = ee();
  return tt = (t, r) => new i(t, r).minor, tt;
}
var rt, Nr;
function xi() {
  if (Nr) return rt;
  Nr = 1;
  const i = ee();
  return rt = (t, r) => new i(t, r).patch, rt;
}
var nt, _r;
function Bi() {
  if (_r) return nt;
  _r = 1;
  const i = he();
  return nt = (t, r) => {
    const n = i(t, r);
    return n && n.prerelease.length ? n.prerelease : null;
  }, nt;
}
var it, Pr;
function re() {
  if (Pr) return it;
  Pr = 1;
  const i = ee();
  return it = (t, r, n) => new i(t, n).compare(new i(r, n)), it;
}
var st, jr;
function Vi() {
  if (jr) return st;
  jr = 1;
  const i = re();
  return st = (t, r, n) => i(r, t, n), st;
}
var ot, kr;
function Ui() {
  if (kr) return ot;
  kr = 1;
  const i = re();
  return ot = (t, r) => i(t, r, !0), ot;
}
var at, Dr;
function Kt() {
  if (Dr) return at;
  Dr = 1;
  const i = ee();
  return at = (t, r, n) => {
    const s = new i(t, n), o = new i(r, n);
    return s.compare(o) || s.compareBuild(o);
  }, at;
}
var ct, qr;
function Gi() {
  if (qr) return ct;
  qr = 1;
  const i = Kt();
  return ct = (t, r) => t.sort((n, s) => i(n, s, r)), ct;
}
var ft, Fr;
function zi() {
  if (Fr) return ft;
  Fr = 1;
  const i = Kt();
  return ft = (t, r) => t.sort((n, s) => i(s, n, r)), ft;
}
var dt, xr;
function Pe() {
  if (xr) return dt;
  xr = 1;
  const i = re();
  return dt = (t, r, n) => i(t, r, n) > 0, dt;
}
var ut, Br;
function Jt() {
  if (Br) return ut;
  Br = 1;
  const i = re();
  return ut = (t, r, n) => i(t, r, n) < 0, ut;
}
var lt, Vr;
function $n() {
  if (Vr) return lt;
  Vr = 1;
  const i = re();
  return lt = (t, r, n) => i(t, r, n) === 0, lt;
}
var ht, Ur;
function In() {
  if (Ur) return ht;
  Ur = 1;
  const i = re();
  return ht = (t, r, n) => i(t, r, n) !== 0, ht;
}
var pt, Gr;
function Zt() {
  if (Gr) return pt;
  Gr = 1;
  const i = re();
  return pt = (t, r, n) => i(t, r, n) >= 0, pt;
}
var gt, zr;
function Qt() {
  if (zr) return gt;
  zr = 1;
  const i = re();
  return gt = (t, r, n) => i(t, r, n) <= 0, gt;
}
var mt, Wr;
function On() {
  if (Wr) return mt;
  Wr = 1;
  const i = $n(), e = In(), t = Pe(), r = Zt(), n = Jt(), s = Qt();
  return mt = (a, f, d, c) => {
    switch (f) {
      case "===":
        return typeof a == "object" && (a = a.version), typeof d == "object" && (d = d.version), a === d;
      case "!==":
        return typeof a == "object" && (a = a.version), typeof d == "object" && (d = d.version), a !== d;
      case "":
      case "=":
      case "==":
        return i(a, d, c);
      case "!=":
        return e(a, d, c);
      case ">":
        return t(a, d, c);
      case ">=":
        return r(a, d, c);
      case "<":
        return n(a, d, c);
      case "<=":
        return s(a, d, c);
      default:
        throw new TypeError(`Invalid operator: ${f}`);
    }
  }, mt;
}
var vt, Xr;
function Wi() {
  if (Xr) return vt;
  Xr = 1;
  const i = ee(), e = he(), { safeRe: t, t: r } = Re();
  return vt = (s, o) => {
    if (s instanceof i)
      return s;
    if (typeof s == "number" && (s = String(s)), typeof s != "string")
      return null;
    o = o || {};
    let a = null;
    if (!o.rtl)
      a = s.match(o.includePrerelease ? t[r.COERCEFULL] : t[r.COERCE]);
    else {
      const m = o.includePrerelease ? t[r.COERCERTLFULL] : t[r.COERCERTL];
      let j;
      for (; (j = m.exec(s)) && (!a || a.index + a[0].length !== s.length); )
        (!a || j.index + j[0].length !== a.index + a[0].length) && (a = j), m.lastIndex = j.index + j[1].length + j[2].length;
      m.lastIndex = -1;
    }
    if (a === null)
      return null;
    const f = a[2], d = a[3] || "0", c = a[4] || "0", l = o.includePrerelease && a[5] ? `-${a[5]}` : "", p = o.includePrerelease && a[6] ? `+${a[6]}` : "";
    return e(`${f}.${d}.${c}${l}${p}`, o);
  }, vt;
}
var yt, Yr;
function Xi() {
  if (Yr) return yt;
  Yr = 1;
  class i {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(t) {
      const r = this.map.get(t);
      if (r !== void 0)
        return this.map.delete(t), this.map.set(t, r), r;
    }
    delete(t) {
      return this.map.delete(t);
    }
    set(t, r) {
      if (!this.delete(t) && r !== void 0) {
        if (this.map.size >= this.max) {
          const s = this.map.keys().next().value;
          this.delete(s);
        }
        this.map.set(t, r);
      }
      return this;
    }
  }
  return yt = i, yt;
}
var wt, Hr;
function ne() {
  if (Hr) return wt;
  Hr = 1;
  const i = /\s+/g;
  class e {
    constructor(v, A) {
      if (A = n(A), v instanceof e)
        return v.loose === !!A.loose && v.includePrerelease === !!A.includePrerelease ? v : new e(v.raw, A);
      if (v instanceof s)
        return this.raw = v.value, this.set = [[v]], this.formatted = void 0, this;
      if (this.options = A, this.loose = !!A.loose, this.includePrerelease = !!A.includePrerelease, this.raw = v.trim().replace(i, " "), this.set = this.raw.split("||").map((S) => this.parseRange(S.trim())).filter((S) => S.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const S = this.set[0];
        if (this.set = this.set.filter((M) => !w(M[0])), this.set.length === 0)
          this.set = [S];
        else if (this.set.length > 1) {
          for (const M of this.set)
            if (M.length === 1 && N(M[0])) {
              this.set = [M];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let v = 0; v < this.set.length; v++) {
          v > 0 && (this.formatted += "||");
          const A = this.set[v];
          for (let S = 0; S < A.length; S++)
            S > 0 && (this.formatted += " "), this.formatted += A[S].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(v) {
      const S = ((this.options.includePrerelease && m) | (this.options.loose && j)) + ":" + v, M = r.get(S);
      if (M)
        return M;
      const C = this.options.loose, L = C ? f[d.HYPHENRANGELOOSE] : f[d.HYPHENRANGE];
      v = v.replace(L, me(this.options.includePrerelease)), o("hyphen replace", v), v = v.replace(f[d.COMPARATORTRIM], c), o("comparator trim", v), v = v.replace(f[d.TILDETRIM], l), o("tilde trim", v), v = v.replace(f[d.CARETTRIM], p), o("caret trim", v);
      let F = v.split(" ").map((z) => W(z, this.options)).join(" ").split(/\s+/).map((z) => ge(z, this.options));
      C && (F = F.filter((z) => (o("loose invalid filter", z, this.options), !!z.match(f[d.COMPARATORLOOSE])))), o("range list", F);
      const P = /* @__PURE__ */ new Map(), E = F.map((z) => new s(z, this.options));
      for (const z of E) {
        if (w(z))
          return [z];
        P.set(z.value, z);
      }
      P.size > 1 && P.has("") && P.delete("");
      const G = [...P.values()];
      return r.set(S, G), G;
    }
    intersects(v, A) {
      if (!(v instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((S) => q(S, A) && v.set.some((M) => q(M, A) && S.every((C) => M.every((L) => C.intersects(L, A)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(v) {
      if (!v)
        return !1;
      if (typeof v == "string")
        try {
          v = new a(v, this.options);
        } catch {
          return !1;
        }
      for (let A = 0; A < this.set.length; A++)
        if (ve(this.set[A], v, this.options))
          return !0;
      return !1;
    }
  }
  wt = e;
  const t = Xi(), r = new t(), n = Ht(), s = je(), o = _e(), a = ee(), {
    safeRe: f,
    t: d,
    comparatorTrimReplace: c,
    tildeTrimReplace: l,
    caretTrimReplace: p
  } = Re(), { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: j } = Ne(), w = (b) => b.value === "<0.0.0-0", N = (b) => b.value === "", q = (b, v) => {
    let A = !0;
    const S = b.slice();
    let M = S.pop();
    for (; A && S.length; )
      A = S.every((C) => M.intersects(C, v)), M = S.pop();
    return A;
  }, W = (b, v) => (b = b.replace(f[d.BUILD], ""), o("comp", b, v), b = B(b, v), o("caret", b), b = Z(b, v), o("tildes", b), b = _(b, v), o("xrange", b), b = pe(b, v), o("stars", b), b), x = (b) => !b || b.toLowerCase() === "x" || b === "*", Z = (b, v) => b.trim().split(/\s+/).map((A) => Q(A, v)).join(" "), Q = (b, v) => {
    const A = v.loose ? f[d.TILDELOOSE] : f[d.TILDE];
    return b.replace(A, (S, M, C, L, F) => {
      o("tilde", b, S, M, C, L, F);
      let P;
      return x(M) ? P = "" : x(C) ? P = `>=${M}.0.0 <${+M + 1}.0.0-0` : x(L) ? P = `>=${M}.${C}.0 <${M}.${+C + 1}.0-0` : F ? (o("replaceTilde pr", F), P = `>=${M}.${C}.${L}-${F} <${M}.${+C + 1}.0-0`) : P = `>=${M}.${C}.${L} <${M}.${+C + 1}.0-0`, o("tilde return", P), P;
    });
  }, B = (b, v) => b.trim().split(/\s+/).map((A) => X(A, v)).join(" "), X = (b, v) => {
    o("caret", b, v);
    const A = v.loose ? f[d.CARETLOOSE] : f[d.CARET], S = v.includePrerelease ? "-0" : "";
    return b.replace(A, (M, C, L, F, P) => {
      o("caret", b, M, C, L, F, P);
      let E;
      return x(C) ? E = "" : x(L) ? E = `>=${C}.0.0${S} <${+C + 1}.0.0-0` : x(F) ? C === "0" ? E = `>=${C}.${L}.0${S} <${C}.${+L + 1}.0-0` : E = `>=${C}.${L}.0${S} <${+C + 1}.0.0-0` : P ? (o("replaceCaret pr", P), C === "0" ? L === "0" ? E = `>=${C}.${L}.${F}-${P} <${C}.${L}.${+F + 1}-0` : E = `>=${C}.${L}.${F}-${P} <${C}.${+L + 1}.0-0` : E = `>=${C}.${L}.${F}-${P} <${+C + 1}.0.0-0`) : (o("no pr"), C === "0" ? L === "0" ? E = `>=${C}.${L}.${F}${S} <${C}.${L}.${+F + 1}-0` : E = `>=${C}.${L}.${F}${S} <${C}.${+L + 1}.0-0` : E = `>=${C}.${L}.${F} <${+C + 1}.0.0-0`), o("caret return", E), E;
    });
  }, _ = (b, v) => (o("replaceXRanges", b, v), b.split(/\s+/).map((A) => ae(A, v)).join(" ")), ae = (b, v) => {
    b = b.trim();
    const A = v.loose ? f[d.XRANGELOOSE] : f[d.XRANGE];
    return b.replace(A, (S, M, C, L, F, P) => {
      o("xRange", b, S, M, C, L, F, P);
      const E = x(C), G = E || x(L), z = G || x(F), V = z;
      return M === "=" && V && (M = ""), P = v.includePrerelease ? "-0" : "", E ? M === ">" || M === "<" ? S = "<0.0.0-0" : S = "*" : M && V ? (G && (L = 0), F = 0, M === ">" ? (M = ">=", G ? (C = +C + 1, L = 0, F = 0) : (L = +L + 1, F = 0)) : M === "<=" && (M = "<", G ? C = +C + 1 : L = +L + 1), M === "<" && (P = "-0"), S = `${M + C}.${L}.${F}${P}`) : G ? S = `>=${C}.0.0${P} <${+C + 1}.0.0-0` : z && (S = `>=${C}.${L}.0${P} <${C}.${+L + 1}.0-0`), o("xRange return", S), S;
    });
  }, pe = (b, v) => (o("replaceStars", b, v), b.trim().replace(f[d.STAR], "")), ge = (b, v) => (o("replaceGTE0", b, v), b.trim().replace(f[v.includePrerelease ? d.GTE0PRE : d.GTE0], "")), me = (b) => (v, A, S, M, C, L, F, P, E, G, z, V) => (x(S) ? A = "" : x(M) ? A = `>=${S}.0.0${b ? "-0" : ""}` : x(C) ? A = `>=${S}.${M}.0${b ? "-0" : ""}` : L ? A = `>=${A}` : A = `>=${A}${b ? "-0" : ""}`, x(E) ? P = "" : x(G) ? P = `<${+E + 1}.0.0-0` : x(z) ? P = `<${E}.${+G + 1}.0-0` : V ? P = `<=${E}.${G}.${z}-${V}` : b ? P = `<${E}.${G}.${+z + 1}-0` : P = `<=${P}`, `${A} ${P}`.trim()), ve = (b, v, A) => {
    for (let S = 0; S < b.length; S++)
      if (!b[S].test(v))
        return !1;
    if (v.prerelease.length && !A.includePrerelease) {
      for (let S = 0; S < b.length; S++)
        if (o(b[S].semver), b[S].semver !== s.ANY && b[S].semver.prerelease.length > 0) {
          const M = b[S].semver;
          if (M.major === v.major && M.minor === v.minor && M.patch === v.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return wt;
}
var Et, Kr;
function je() {
  if (Kr) return Et;
  Kr = 1;
  const i = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return i;
    }
    constructor(c, l) {
      if (l = t(l), c instanceof e) {
        if (c.loose === !!l.loose)
          return c;
        c = c.value;
      }
      c = c.trim().split(/\s+/).join(" "), o("comparator", c, l), this.options = l, this.loose = !!l.loose, this.parse(c), this.semver === i ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(c) {
      const l = this.options.loose ? r[n.COMPARATORLOOSE] : r[n.COMPARATOR], p = c.match(l);
      if (!p)
        throw new TypeError(`Invalid comparator: ${c}`);
      this.operator = p[1] !== void 0 ? p[1] : "", this.operator === "=" && (this.operator = ""), p[2] ? this.semver = new a(p[2], this.options.loose) : this.semver = i;
    }
    toString() {
      return this.value;
    }
    test(c) {
      if (o("Comparator.test", c, this.options.loose), this.semver === i || c === i)
        return !0;
      if (typeof c == "string")
        try {
          c = new a(c, this.options);
        } catch {
          return !1;
        }
      return s(c, this.operator, this.semver, this.options);
    }
    intersects(c, l) {
      if (!(c instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new f(c.value, l).test(this.value) : c.operator === "" ? c.value === "" ? !0 : new f(this.value, l).test(c.semver) : (l = t(l), l.includePrerelease && (this.value === "<0.0.0-0" || c.value === "<0.0.0-0") || !l.includePrerelease && (this.value.startsWith("<0.0.0") || c.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && c.operator.startsWith(">") || this.operator.startsWith("<") && c.operator.startsWith("<") || this.semver.version === c.semver.version && this.operator.includes("=") && c.operator.includes("=") || s(this.semver, "<", c.semver, l) && this.operator.startsWith(">") && c.operator.startsWith("<") || s(this.semver, ">", c.semver, l) && this.operator.startsWith("<") && c.operator.startsWith(">")));
    }
  }
  Et = e;
  const t = Ht(), { safeRe: r, t: n } = Re(), s = On(), o = _e(), a = ee(), f = ne();
  return Et;
}
var Rt, Jr;
function ke() {
  if (Jr) return Rt;
  Jr = 1;
  const i = ne();
  return Rt = (t, r, n) => {
    try {
      r = new i(r, n);
    } catch {
      return !1;
    }
    return r.test(t);
  }, Rt;
}
var bt, Zr;
function Yi() {
  if (Zr) return bt;
  Zr = 1;
  const i = ne();
  return bt = (t, r) => new i(t, r).set.map((n) => n.map((s) => s.value).join(" ").trim().split(" ")), bt;
}
var $t, Qr;
function Hi() {
  if (Qr) return $t;
  Qr = 1;
  const i = ee(), e = ne();
  return $t = (r, n, s) => {
    let o = null, a = null, f = null;
    try {
      f = new e(n, s);
    } catch {
      return null;
    }
    return r.forEach((d) => {
      f.test(d) && (!o || a.compare(d) === -1) && (o = d, a = new i(o, s));
    }), o;
  }, $t;
}
var It, en;
function Ki() {
  if (en) return It;
  en = 1;
  const i = ee(), e = ne();
  return It = (r, n, s) => {
    let o = null, a = null, f = null;
    try {
      f = new e(n, s);
    } catch {
      return null;
    }
    return r.forEach((d) => {
      f.test(d) && (!o || a.compare(d) === 1) && (o = d, a = new i(o, s));
    }), o;
  }, It;
}
var Ot, tn;
function Ji() {
  if (tn) return Ot;
  tn = 1;
  const i = ee(), e = ne(), t = Pe();
  return Ot = (n, s) => {
    n = new e(n, s);
    let o = new i("0.0.0");
    if (n.test(o) || (o = new i("0.0.0-0"), n.test(o)))
      return o;
    o = null;
    for (let a = 0; a < n.set.length; ++a) {
      const f = n.set[a];
      let d = null;
      f.forEach((c) => {
        const l = new i(c.semver.version);
        switch (c.operator) {
          case ">":
            l.prerelease.length === 0 ? l.patch++ : l.prerelease.push(0), l.raw = l.format();
          /* fallthrough */
          case "":
          case ">=":
            (!d || t(l, d)) && (d = l);
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${c.operator}`);
        }
      }), d && (!o || t(o, d)) && (o = d);
    }
    return o && n.test(o) ? o : null;
  }, Ot;
}
var St, rn;
function Zi() {
  if (rn) return St;
  rn = 1;
  const i = ne();
  return St = (t, r) => {
    try {
      return new i(t, r).range || "*";
    } catch {
      return null;
    }
  }, St;
}
var Ct, nn;
function er() {
  if (nn) return Ct;
  nn = 1;
  const i = ee(), e = je(), { ANY: t } = e, r = ne(), n = ke(), s = Pe(), o = Jt(), a = Qt(), f = Zt();
  return Ct = (c, l, p, m) => {
    c = new i(c, m), l = new r(l, m);
    let j, w, N, q, W;
    switch (p) {
      case ">":
        j = s, w = a, N = o, q = ">", W = ">=";
        break;
      case "<":
        j = o, w = f, N = s, q = "<", W = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (n(c, l, m))
      return !1;
    for (let x = 0; x < l.set.length; ++x) {
      const Z = l.set[x];
      let Q = null, B = null;
      if (Z.forEach((X) => {
        X.semver === t && (X = new e(">=0.0.0")), Q = Q || X, B = B || X, j(X.semver, Q.semver, m) ? Q = X : N(X.semver, B.semver, m) && (B = X);
      }), Q.operator === q || Q.operator === W || (!B.operator || B.operator === q) && w(c, B.semver))
        return !1;
      if (B.operator === W && N(c, B.semver))
        return !1;
    }
    return !0;
  }, Ct;
}
var At, sn;
function Qi() {
  if (sn) return At;
  sn = 1;
  const i = er();
  return At = (t, r, n) => i(t, r, ">", n), At;
}
var Mt, on;
function es() {
  if (on) return Mt;
  on = 1;
  const i = er();
  return Mt = (t, r, n) => i(t, r, "<", n), Mt;
}
var Tt, an;
function ts() {
  if (an) return Tt;
  an = 1;
  const i = ne();
  return Tt = (t, r, n) => (t = new i(t, n), r = new i(r, n), t.intersects(r, n)), Tt;
}
var Lt, cn;
function rs() {
  if (cn) return Lt;
  cn = 1;
  const i = ke(), e = re();
  return Lt = (t, r, n) => {
    const s = [];
    let o = null, a = null;
    const f = t.sort((p, m) => e(p, m, n));
    for (const p of f)
      i(p, r, n) ? (a = p, o || (o = p)) : (a && s.push([o, a]), a = null, o = null);
    o && s.push([o, null]);
    const d = [];
    for (const [p, m] of s)
      p === m ? d.push(p) : !m && p === f[0] ? d.push("*") : m ? p === f[0] ? d.push(`<=${m}`) : d.push(`${p} - ${m}`) : d.push(`>=${p}`);
    const c = d.join(" || "), l = typeof r.raw == "string" ? r.raw : String(r);
    return c.length < l.length ? c : r;
  }, Lt;
}
var Nt, fn;
function ns() {
  if (fn) return Nt;
  fn = 1;
  const i = ne(), e = je(), { ANY: t } = e, r = ke(), n = re(), s = (l, p, m = {}) => {
    if (l === p)
      return !0;
    l = new i(l, m), p = new i(p, m);
    let j = !1;
    e: for (const w of l.set) {
      for (const N of p.set) {
        const q = f(w, N, m);
        if (j = j || q !== null, q)
          continue e;
      }
      if (j)
        return !1;
    }
    return !0;
  }, o = [new e(">=0.0.0-0")], a = [new e(">=0.0.0")], f = (l, p, m) => {
    if (l === p)
      return !0;
    if (l.length === 1 && l[0].semver === t) {
      if (p.length === 1 && p[0].semver === t)
        return !0;
      m.includePrerelease ? l = o : l = a;
    }
    if (p.length === 1 && p[0].semver === t) {
      if (m.includePrerelease)
        return !0;
      p = a;
    }
    const j = /* @__PURE__ */ new Set();
    let w, N;
    for (const _ of l)
      _.operator === ">" || _.operator === ">=" ? w = d(w, _, m) : _.operator === "<" || _.operator === "<=" ? N = c(N, _, m) : j.add(_.semver);
    if (j.size > 1)
      return null;
    let q;
    if (w && N) {
      if (q = n(w.semver, N.semver, m), q > 0)
        return null;
      if (q === 0 && (w.operator !== ">=" || N.operator !== "<="))
        return null;
    }
    for (const _ of j) {
      if (w && !r(_, String(w), m) || N && !r(_, String(N), m))
        return null;
      for (const ae of p)
        if (!r(_, String(ae), m))
          return !1;
      return !0;
    }
    let W, x, Z, Q, B = N && !m.includePrerelease && N.semver.prerelease.length ? N.semver : !1, X = w && !m.includePrerelease && w.semver.prerelease.length ? w.semver : !1;
    B && B.prerelease.length === 1 && N.operator === "<" && B.prerelease[0] === 0 && (B = !1);
    for (const _ of p) {
      if (Q = Q || _.operator === ">" || _.operator === ">=", Z = Z || _.operator === "<" || _.operator === "<=", w) {
        if (X && _.semver.prerelease && _.semver.prerelease.length && _.semver.major === X.major && _.semver.minor === X.minor && _.semver.patch === X.patch && (X = !1), _.operator === ">" || _.operator === ">=") {
          if (W = d(w, _, m), W === _ && W !== w)
            return !1;
        } else if (w.operator === ">=" && !r(w.semver, String(_), m))
          return !1;
      }
      if (N) {
        if (B && _.semver.prerelease && _.semver.prerelease.length && _.semver.major === B.major && _.semver.minor === B.minor && _.semver.patch === B.patch && (B = !1), _.operator === "<" || _.operator === "<=") {
          if (x = c(N, _, m), x === _ && x !== N)
            return !1;
        } else if (N.operator === "<=" && !r(N.semver, String(_), m))
          return !1;
      }
      if (!_.operator && (N || w) && q !== 0)
        return !1;
    }
    return !(w && Z && !N && q !== 0 || N && Q && !w && q !== 0 || X || B);
  }, d = (l, p, m) => {
    if (!l)
      return p;
    const j = n(l.semver, p.semver, m);
    return j > 0 ? l : j < 0 || p.operator === ">" && l.operator === ">=" ? p : l;
  }, c = (l, p, m) => {
    if (!l)
      return p;
    const j = n(l.semver, p.semver, m);
    return j < 0 ? l : j > 0 || p.operator === "<" && l.operator === "<=" ? p : l;
  };
  return Nt = s, Nt;
}
var _t, dn;
function is() {
  if (dn) return _t;
  dn = 1;
  const i = Re(), e = Ne(), t = ee(), r = bn(), n = he(), s = Pi(), o = ji(), a = ki(), f = Di(), d = qi(), c = Fi(), l = xi(), p = Bi(), m = re(), j = Vi(), w = Ui(), N = Kt(), q = Gi(), W = zi(), x = Pe(), Z = Jt(), Q = $n(), B = In(), X = Zt(), _ = Qt(), ae = On(), pe = Wi(), ge = je(), me = ne(), ve = ke(), b = Yi(), v = Hi(), A = Ki(), S = Ji(), M = Zi(), C = er(), L = Qi(), F = es(), P = ts(), E = rs(), G = ns();
  return _t = {
    parse: n,
    valid: s,
    clean: o,
    inc: a,
    diff: f,
    major: d,
    minor: c,
    patch: l,
    prerelease: p,
    compare: m,
    rcompare: j,
    compareLoose: w,
    compareBuild: N,
    sort: q,
    rsort: W,
    gt: x,
    lt: Z,
    eq: Q,
    neq: B,
    gte: X,
    lte: _,
    cmp: ae,
    coerce: pe,
    Comparator: ge,
    Range: me,
    satisfies: ve,
    toComparators: b,
    maxSatisfying: v,
    minSatisfying: A,
    minVersion: S,
    validRange: M,
    outside: C,
    gtr: L,
    ltr: F,
    intersects: P,
    simplifyRange: E,
    subset: G,
    SemVer: t,
    re: i.re,
    src: i.src,
    tokens: i.t,
    SEMVER_SPEC_VERSION: e.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: e.RELEASE_TYPES,
    compareIdentifiers: r.compareIdentifiers,
    rcompareIdentifiers: r.rcompareIdentifiers
  }, _t;
}
var K = is();
const le = /* @__PURE__ */ _i(K);
function Sn(i) {
  return i.cardinality ? i.cardinality.startsWith("1..") : i.optional !== !0;
}
function Cn(i) {
  return i.cardinality?.endsWith("..n") === !0;
}
function un(i) {
  return typeof i == "string" ? { id: i } : i;
}
function Pt(i) {
  return typeof i == "string" ? i : i.id;
}
class An {
  /**
   * Resolve dependencies and return load order
   * Uses Kahn's algorithm for topological sorting
   * Validates version compatibility using semver
   */
  resolve(e) {
    const t = {
      loadOrder: [],
      circular: [],
      missing: [],
      versionConflicts: [],
      resolvedVersions: /* @__PURE__ */ new Map()
    }, r = /* @__PURE__ */ new Map();
    for (const s of e) {
      const o = r.get(s.id) ?? [];
      o.push(s), r.set(s.id, o);
    }
    const n = /* @__PURE__ */ new Map();
    for (const [s, o] of r) {
      const a = [...o].sort((f, d) => K.rcompare(f.version, d.version));
      n.set(s, a[0]), t.resolvedVersions.set(s, a[0].version);
    }
    for (const s of e)
      for (const o of s.dependencies ?? []) {
        const a = un(o), f = n.get(a.id);
        if (!f)
          t.missing.push({ moduleId: s.id, missingDep: a.id });
        else if (a.versionRange && !K.satisfies(f.version, a.versionRange)) {
          let d = t.versionConflicts.find((c) => c.moduleId === a.id);
          d || (d = {
            moduleId: a.id,
            availableVersion: f.version,
            requirements: []
          }, t.versionConflicts.push(d)), d.requirements.push({
            requiredBy: s.id,
            versionRange: a.versionRange
          });
        }
      }
    return t.circular = this.detectCycles(e), t.circular.length > 0 ? (t.loadOrder = this.fallbackSort(e), t) : (t.loadOrder = this.topologicalSort(e, n), t);
  }
  /**
   * Find the best matching version for a dependency spec
   * Returns undefined if no matching version exists
   */
  findMatchingVersion(e, t) {
    const r = t.filter((s) => s.id === e.id);
    return r.length === 0 ? void 0 : e.versionRange ? r.filter((s) => K.satisfies(s.version, e.versionRange)).sort((s, o) => K.rcompare(s.version, o.version))[0] : r.sort((s, o) => K.rcompare(s.version, o.version))[0];
  }
  /**
   * Check if a specific version satisfies a dependency spec
   */
  satisfies(e, t) {
    return t.versionRange ? K.satisfies(e, t.versionRange) : !0;
  }
  /**
   * Find the maximum version that satisfies all given constraints
   */
  findCompatibleVersion(e, t, r) {
    const n = r.filter((s) => s.id === e).map((s) => s.version).sort((s, o) => K.rcompare(s, o));
    for (const s of n)
      if (t.every((a) => K.satisfies(s, a)))
        return s;
  }
  /**
   * Which module provides which service, by service ID.
   *
   * The highest declared ranking wins, matching how the registry picks the
   * visible service; ties go to the first declaration. Only that one provider
   * becomes a load-order edge: with several providers the set is filled at
   * runtime, and an edge per provider would turn ordinary fan-in into
   * artificial cycles.
   */
  serviceProviders(e) {
    const t = /* @__PURE__ */ new Map();
    for (const r of e)
      for (const n of r.provides ?? []) {
        const s = n.ranking ?? 0, o = t.get(n.id);
        (!o || s > o.ranking) && t.set(n.id, { moduleId: r.id, ranking: s });
      }
    return new Map([...t].map(([r, n]) => [r, n.moduleId]));
  }
  /**
   * Module IDs a module has to be ordered after: its declared dependencies plus
   * the providers of the services it requires.
   *
   * Without the service edges, load order has to be maintained by hand even
   * though the manifests already say what a module needs.
   */
  effectiveDependencyIds(e, t) {
    const r = /* @__PURE__ */ new Set();
    for (const n of e.dependencies ?? [])
      r.add(Pt(n));
    for (const n of e.requiresService ?? []) {
      if (!Sn(n) || Cn(n))
        continue;
      const s = t.get(n.id);
      s && s !== e.id && r.add(s);
    }
    return [...r];
  }
  /**
   * Detect circular dependencies using DFS
   */
  detectCycles(e) {
    const t = [], r = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = [], o = /* @__PURE__ */ new Map();
    for (const d of e)
      o.has(d.id) || o.set(d.id, d);
    const a = this.serviceProviders(o.values()), f = (d) => {
      r.add(d), n.add(d), s.push(d);
      const c = o.get(d);
      if (c) {
        for (const l of this.effectiveDependencyIds(c, a))
          if (r.has(l)) {
            if (n.has(l)) {
              const p = s.indexOf(l), m = s.slice(p);
              return m.push(l), t.push(m), !0;
            }
          } else if (f(l))
            return !0;
      }
      return s.pop(), n.delete(d), !1;
    };
    for (const d of e)
      r.has(d.id) || f(d.id);
    return t;
  }
  /**
   * Topological sort using Kahn's algorithm
   */
  topologicalSort(e, t) {
    const r = Array.from(t.values()), n = this.serviceProviders(r), s = /* @__PURE__ */ new Map();
    for (const d of r)
      s.set(d.id, this.effectiveDependencyIds(d, n));
    const o = /* @__PURE__ */ new Map();
    for (const d of r)
      o.set(d.id, 0);
    for (const d of r)
      for (const c of s.get(d.id) ?? [])
        t.has(c) && o.set(d.id, (o.get(d.id) ?? 0) + 1);
    const a = [];
    for (const d of r)
      o.get(d.id) === 0 && a.push(d);
    a.sort((d, c) => (c.priority ?? 0) - (d.priority ?? 0));
    const f = [];
    for (; a.length > 0; ) {
      a.sort((c, l) => (l.priority ?? 0) - (c.priority ?? 0));
      const d = a.shift();
      f.push(d);
      for (const c of r)
        if (s.get(c.id)?.includes(d.id)) {
          const p = (o.get(c.id) ?? 1) - 1;
          o.set(c.id, p), p === 0 && a.push(c);
        }
    }
    return f;
  }
  /**
   * Fallback sorting when cycles exist
   */
  fallbackSort(e) {
    const t = /* @__PURE__ */ new Map();
    for (const r of e) {
      const n = t.get(r.id);
      (!n || K.gt(r.version, n.version)) && t.set(r.id, r);
    }
    return [...t.values()].sort((r, n) => {
      const s = (n.priority ?? 0) - (r.priority ?? 0);
      if (s !== 0)
        return s;
      const o = r.dependencies?.length ?? 0, a = n.dependencies?.length ?? 0;
      return o - a;
    });
  }
  /**
   * Get all transitive dependencies of a module
   */
  getTransitiveDependencies(e, t) {
    const r = /* @__PURE__ */ new Map();
    for (const a of t)
      r.has(a.id) || r.set(a.id, a);
    const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), o = (a) => {
      if (s.has(a))
        return;
      s.add(a);
      const f = r.get(a);
      if (f)
        for (const d of f.dependencies ?? []) {
          const c = Pt(d);
          n.add(c), o(c);
        }
    };
    return o(e), Array.from(n);
  }
  /**
   * Get modules that depend on the given module
   */
  getDependents(e, t) {
    return t.filter((r) => r.dependencies?.some((n) => Pt(n) === e)).map((r) => r.id);
  }
  /**
   * Every module that depends on the given one, directly or through others,
   * nearest first.
   *
   * `getDependents()` stops at the first level; reloading a module has to reach
   * the whole chain, or a module two steps away keeps running against code that
   * was replaced.
   */
  getTransitiveDependents(e, t) {
    const r = [], n = /* @__PURE__ */ new Set([e]);
    let s = [e];
    for (; s.length > 0; ) {
      const o = [];
      for (const a of s)
        for (const f of this.getDependents(a, t))
          n.has(f) || (n.add(f), r.push(f), o.push(f));
      s = o;
    }
    return r;
  }
  /**
   * Check if all version constraints can be satisfied
   * Returns list of modules with unsatisfiable constraints
   */
  validateVersionConstraints(e) {
    const t = [], r = /* @__PURE__ */ new Map();
    for (const n of e)
      for (const s of n.dependencies ?? []) {
        const o = un(s);
        if (o.versionRange) {
          const a = r.get(o.id) ?? [];
          a.push({ requiredBy: n.id, versionRange: o.versionRange }), r.set(o.id, a);
        }
      }
    for (const [n, s] of r) {
      const o = e.filter((f) => f.id === n);
      if (o.length === 0)
        continue;
      if (!o.find((f) => s.every((d) => K.satisfies(f.version, d.versionRange)))) {
        const f = o.sort((d, c) => K.rcompare(d.version, c.version))[0];
        t.push({
          moduleId: n,
          availableVersion: f.version,
          requirements: s
        });
      }
    }
    return t;
  }
  /**
   * Suggest version ranges that could resolve conflicts
   */
  suggestResolution(e) {
    const t = e.requirements.map((r) => r.versionRange);
    try {
      if (K.intersects(t[0], t[1]))
        return `Consider using version range that satisfies: ${t.join(" AND ")}`;
    } catch {
    }
    return `No compatible version found. Required: ${t.join(", ")}`;
  }
}
var ln = {};
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
var hn;
function ss() {
  if (hn) return ln;
  hn = 1;
  var i;
  return (function(e) {
    (function(t) {
      var r = typeof globalThis == "object" ? globalThis : typeof yr == "object" ? yr : typeof self == "object" ? self : typeof this == "object" ? this : f(), n = s(e);
      typeof r.Reflect < "u" && (n = s(r.Reflect, n)), t(n, r), typeof r.Reflect > "u" && (r.Reflect = e);
      function s(d, c) {
        return function(l, p) {
          Object.defineProperty(d, l, { configurable: !0, writable: !0, value: p }), c && c(l, p);
        };
      }
      function o() {
        try {
          return Function("return this;")();
        } catch {
        }
      }
      function a() {
        try {
          return (0, eval)("(function() { return this; })()");
        } catch {
        }
      }
      function f() {
        return o() || a();
      }
    })(function(t, r) {
      var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", o = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", a = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", f = typeof Object.create == "function", d = { __proto__: [] } instanceof Array, c = !f && !d, l = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: f ? function() {
          return Ue(/* @__PURE__ */ Object.create(null));
        } : d ? function() {
          return Ue({ __proto__: null });
        } : function() {
          return Ue({});
        },
        has: c ? function(u, h) {
          return n.call(u, h);
        } : function(u, h) {
          return h in u;
        },
        get: c ? function(u, h) {
          return n.call(u, h) ? u[h] : void 0;
        } : function(u, h) {
          return u[h];
        }
      }, p = Object.getPrototypeOf(Function), m = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ai(), j = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mi(), w = typeof WeakMap == "function" ? WeakMap : Ti(), N = s ? Symbol.for("@reflect-metadata:registry") : void 0, q = Oi(), W = Si(q);
      function x(u, h, g, y) {
        if (E(g)) {
          if (!dr(u))
            throw new TypeError();
          if (!ur(h))
            throw new TypeError();
          return ve(u, h);
        } else {
          if (!dr(u))
            throw new TypeError();
          if (!V(h))
            throw new TypeError();
          if (!V(y) && !E(y) && !G(y))
            throw new TypeError();
          return G(y) && (y = void 0), g = ie(g), b(u, h, g, y);
        }
      }
      t("decorate", x);
      function Z(u, h) {
        function g(y, T) {
          if (!V(y))
            throw new TypeError();
          if (!E(T) && !$i(T))
            throw new TypeError();
          C(u, h, y, T);
        }
        return g;
      }
      t("metadata", Z);
      function Q(u, h, g, y) {
        if (!V(g))
          throw new TypeError();
        return E(y) || (y = ie(y)), C(u, h, g, y);
      }
      t("defineMetadata", Q);
      function B(u, h, g) {
        if (!V(h))
          throw new TypeError();
        return E(g) || (g = ie(g)), v(u, h, g);
      }
      t("hasMetadata", B);
      function X(u, h, g) {
        if (!V(h))
          throw new TypeError();
        return E(g) || (g = ie(g)), A(u, h, g);
      }
      t("hasOwnMetadata", X);
      function _(u, h, g) {
        if (!V(h))
          throw new TypeError();
        return E(g) || (g = ie(g)), S(u, h, g);
      }
      t("getMetadata", _);
      function ae(u, h, g) {
        if (!V(h))
          throw new TypeError();
        return E(g) || (g = ie(g)), M(u, h, g);
      }
      t("getOwnMetadata", ae);
      function pe(u, h) {
        if (!V(u))
          throw new TypeError();
        return E(h) || (h = ie(h)), L(u, h);
      }
      t("getMetadataKeys", pe);
      function ge(u, h) {
        if (!V(u))
          throw new TypeError();
        return E(h) || (h = ie(h)), F(u, h);
      }
      t("getOwnMetadataKeys", ge);
      function me(u, h, g) {
        if (!V(h))
          throw new TypeError();
        if (E(g) || (g = ie(g)), !V(h))
          throw new TypeError();
        E(g) || (g = ie(g));
        var y = ye(
          h,
          g,
          /*Create*/
          !1
        );
        return E(y) ? !1 : y.OrdinaryDeleteMetadata(u, h, g);
      }
      t("deleteMetadata", me);
      function ve(u, h) {
        for (var g = u.length - 1; g >= 0; --g) {
          var y = u[g], T = y(h);
          if (!E(T) && !G(T)) {
            if (!ur(T))
              throw new TypeError();
            h = T;
          }
        }
        return h;
      }
      function b(u, h, g, y) {
        for (var T = u.length - 1; T >= 0; --T) {
          var Y = u[T], J = Y(h, g, y);
          if (!E(J) && !G(J)) {
            if (!V(J))
              throw new TypeError();
            y = J;
          }
        }
        return y;
      }
      function v(u, h, g) {
        var y = A(u, h, g);
        if (y)
          return !0;
        var T = Ve(h);
        return G(T) ? !1 : v(u, T, g);
      }
      function A(u, h, g) {
        var y = ye(
          h,
          g,
          /*Create*/
          !1
        );
        return E(y) ? !1 : fr(y.OrdinaryHasOwnMetadata(u, h, g));
      }
      function S(u, h, g) {
        var y = A(u, h, g);
        if (y)
          return M(u, h, g);
        var T = Ve(h);
        if (!G(T))
          return S(u, T, g);
      }
      function M(u, h, g) {
        var y = ye(
          h,
          g,
          /*Create*/
          !1
        );
        if (!E(y))
          return y.OrdinaryGetOwnMetadata(u, h, g);
      }
      function C(u, h, g, y) {
        var T = ye(
          g,
          y,
          /*Create*/
          !0
        );
        T.OrdinaryDefineOwnMetadata(u, h, g, y);
      }
      function L(u, h) {
        var g = F(u, h), y = Ve(u);
        if (y === null)
          return g;
        var T = L(y, h);
        if (T.length <= 0)
          return g;
        if (g.length <= 0)
          return T;
        for (var Y = new j(), J = [], k = 0, R = g; k < R.length; k++) {
          var $ = R[k], I = Y.has($);
          I || (Y.add($), J.push($));
        }
        for (var O = 0, D = T; O < D.length; O++) {
          var $ = D[O], I = Y.has($);
          I || (Y.add($), J.push($));
        }
        return J;
      }
      function F(u, h) {
        var g = ye(
          u,
          h,
          /*create*/
          !1
        );
        return g ? g.OrdinaryOwnMetadataKeys(u, h) : [];
      }
      function P(u) {
        if (u === null)
          return 1;
        switch (typeof u) {
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
            return u === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function E(u) {
        return u === void 0;
      }
      function G(u) {
        return u === null;
      }
      function z(u) {
        return typeof u == "symbol";
      }
      function V(u) {
        return typeof u == "object" ? u !== null : typeof u == "function";
      }
      function Ei(u, h) {
        switch (P(u)) {
          case 0:
            return u;
          case 1:
            return u;
          case 2:
            return u;
          case 3:
            return u;
          case 4:
            return u;
          case 5:
            return u;
        }
        var g = "string", y = lr(u, o);
        if (y !== void 0) {
          var T = y.call(u, g);
          if (V(T))
            throw new TypeError();
          return T;
        }
        return Ri(u);
      }
      function Ri(u, h) {
        var g, y, T;
        {
          var Y = u.toString;
          if ($e(Y)) {
            var y = Y.call(u);
            if (!V(y))
              return y;
          }
          var g = u.valueOf;
          if ($e(g)) {
            var y = g.call(u);
            if (!V(y))
              return y;
          }
        }
        throw new TypeError();
      }
      function fr(u) {
        return !!u;
      }
      function bi(u) {
        return "" + u;
      }
      function ie(u) {
        var h = Ei(u);
        return z(h) ? h : bi(h);
      }
      function dr(u) {
        return Array.isArray ? Array.isArray(u) : u instanceof Object ? u instanceof Array : Object.prototype.toString.call(u) === "[object Array]";
      }
      function $e(u) {
        return typeof u == "function";
      }
      function ur(u) {
        return typeof u == "function";
      }
      function $i(u) {
        switch (P(u)) {
          case 3:
            return !0;
          case 4:
            return !0;
          default:
            return !1;
        }
      }
      function Be(u, h) {
        return u === h || u !== u && h !== h;
      }
      function lr(u, h) {
        var g = u[h];
        if (g != null) {
          if (!$e(g))
            throw new TypeError();
          return g;
        }
      }
      function hr(u) {
        var h = lr(u, a);
        if (!$e(h))
          throw new TypeError();
        var g = h.call(u);
        if (!V(g))
          throw new TypeError();
        return g;
      }
      function pr(u) {
        return u.value;
      }
      function gr(u) {
        var h = u.next();
        return h.done ? !1 : h;
      }
      function mr(u) {
        var h = u.return;
        h && h.call(u);
      }
      function Ve(u) {
        var h = Object.getPrototypeOf(u);
        if (typeof u != "function" || u === p || h !== p)
          return h;
        var g = u.prototype, y = g && Object.getPrototypeOf(g);
        if (y == null || y === Object.prototype)
          return h;
        var T = y.constructor;
        return typeof T != "function" || T === u ? h : T;
      }
      function Ii() {
        var u;
        !E(N) && typeof r.Reflect < "u" && !(N in r.Reflect) && typeof r.Reflect.defineMetadata == "function" && (u = Ci(r.Reflect));
        var h, g, y, T = new w(), Y = {
          registerProvider: J,
          getProvider: R,
          setProvider: I
        };
        return Y;
        function J(O) {
          if (!Object.isExtensible(Y))
            throw new Error("Cannot add provider to a frozen registry.");
          switch (!0) {
            case u === O:
              break;
            case E(h):
              h = O;
              break;
            case h === O:
              break;
            case E(g):
              g = O;
              break;
            case g === O:
              break;
            default:
              y === void 0 && (y = new j()), y.add(O);
              break;
          }
        }
        function k(O, D) {
          if (!E(h)) {
            if (h.isProviderFor(O, D))
              return h;
            if (!E(g)) {
              if (g.isProviderFor(O, D))
                return h;
              if (!E(y))
                for (var U = hr(y); ; ) {
                  var H = gr(U);
                  if (!H)
                    return;
                  var te = pr(H);
                  if (te.isProviderFor(O, D))
                    return mr(U), te;
                }
            }
          }
          if (!E(u) && u.isProviderFor(O, D))
            return u;
        }
        function R(O, D) {
          var U = T.get(O), H;
          return E(U) || (H = U.get(D)), E(H) && (H = k(O, D), E(H) || (E(U) && (U = new m(), T.set(O, U)), U.set(D, H))), H;
        }
        function $(O) {
          if (E(O))
            throw new TypeError();
          return h === O || g === O || !E(y) && y.has(O);
        }
        function I(O, D, U) {
          if (!$(U))
            throw new Error("Metadata provider not registered.");
          var H = R(O, D);
          if (H !== U) {
            if (!E(H))
              return !1;
            var te = T.get(O);
            E(te) && (te = new m(), T.set(O, te)), te.set(D, U);
          }
          return !0;
        }
      }
      function Oi() {
        var u;
        return !E(N) && V(r.Reflect) && Object.isExtensible(r.Reflect) && (u = r.Reflect[N]), E(u) && (u = Ii()), !E(N) && V(r.Reflect) && Object.isExtensible(r.Reflect) && Object.defineProperty(r.Reflect, N, {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: u
        }), u;
      }
      function Si(u) {
        var h = new w(), g = {
          isProviderFor: function($, I) {
            var O = h.get($);
            return E(O) ? !1 : O.has(I);
          },
          OrdinaryDefineOwnMetadata: J,
          OrdinaryHasOwnMetadata: T,
          OrdinaryGetOwnMetadata: Y,
          OrdinaryOwnMetadataKeys: k,
          OrdinaryDeleteMetadata: R
        };
        return q.registerProvider(g), g;
        function y($, I, O) {
          var D = h.get($), U = !1;
          if (E(D)) {
            if (!O)
              return;
            D = new m(), h.set($, D), U = !0;
          }
          var H = D.get(I);
          if (E(H)) {
            if (!O)
              return;
            if (H = new m(), D.set(I, H), !u.setProvider($, I, g))
              throw D.delete(I), U && h.delete($), new Error("Wrong provider for target.");
          }
          return H;
        }
        function T($, I, O) {
          var D = y(
            I,
            O,
            /*Create*/
            !1
          );
          return E(D) ? !1 : fr(D.has($));
        }
        function Y($, I, O) {
          var D = y(
            I,
            O,
            /*Create*/
            !1
          );
          if (!E(D))
            return D.get($);
        }
        function J($, I, O, D) {
          var U = y(
            O,
            D,
            /*Create*/
            !0
          );
          U.set($, I);
        }
        function k($, I) {
          var O = [], D = y(
            $,
            I,
            /*Create*/
            !1
          );
          if (E(D))
            return O;
          for (var U = D.keys(), H = hr(U), te = 0; ; ) {
            var vr = gr(H);
            if (!vr)
              return O.length = te, O;
            var Li = pr(vr);
            try {
              O[te] = Li;
            } catch (Ni) {
              try {
                mr(H);
              } finally {
                throw Ni;
              }
            }
            te++;
          }
        }
        function R($, I, O) {
          var D = y(
            I,
            O,
            /*Create*/
            !1
          );
          if (E(D) || !D.delete($))
            return !1;
          if (D.size === 0) {
            var U = h.get(I);
            E(U) || (U.delete(O), U.size === 0 && h.delete(U));
          }
          return !0;
        }
      }
      function Ci(u) {
        var h = u.defineMetadata, g = u.hasOwnMetadata, y = u.getOwnMetadata, T = u.getOwnMetadataKeys, Y = u.deleteMetadata, J = new w(), k = {
          isProviderFor: function(R, $) {
            var I = J.get(R);
            return !E(I) && I.has($) ? !0 : T(R, $).length ? (E(I) && (I = new j(), J.set(R, I)), I.add($), !0) : !1;
          },
          OrdinaryDefineOwnMetadata: h,
          OrdinaryHasOwnMetadata: g,
          OrdinaryGetOwnMetadata: y,
          OrdinaryOwnMetadataKeys: T,
          OrdinaryDeleteMetadata: Y
        };
        return k;
      }
      function ye(u, h, g) {
        var y = q.getProvider(u, h);
        if (!E(y))
          return y;
        if (g) {
          if (q.setProvider(u, h, W))
            return W;
          throw new Error("Illegal state.");
        }
      }
      function Ai() {
        var u = {}, h = [], g = (
          /** @class */
          (function() {
            function k(R, $, I) {
              this._index = 0, this._keys = R, this._values = $, this._selector = I;
            }
            return k.prototype["@@iterator"] = function() {
              return this;
            }, k.prototype[a] = function() {
              return this;
            }, k.prototype.next = function() {
              var R = this._index;
              if (R >= 0 && R < this._keys.length) {
                var $ = this._selector(this._keys[R], this._values[R]);
                return R + 1 >= this._keys.length ? (this._index = -1, this._keys = h, this._values = h) : this._index++, { value: $, done: !1 };
              }
              return { value: void 0, done: !0 };
            }, k.prototype.throw = function(R) {
              throw this._index >= 0 && (this._index = -1, this._keys = h, this._values = h), R;
            }, k.prototype.return = function(R) {
              return this._index >= 0 && (this._index = -1, this._keys = h, this._values = h), { value: R, done: !0 };
            }, k;
          })()
        ), y = (
          /** @class */
          (function() {
            function k() {
              this._keys = [], this._values = [], this._cacheKey = u, this._cacheIndex = -2;
            }
            return Object.defineProperty(k.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: !0,
              configurable: !0
            }), k.prototype.has = function(R) {
              return this._find(
                R,
                /*insert*/
                !1
              ) >= 0;
            }, k.prototype.get = function(R) {
              var $ = this._find(
                R,
                /*insert*/
                !1
              );
              return $ >= 0 ? this._values[$] : void 0;
            }, k.prototype.set = function(R, $) {
              var I = this._find(
                R,
                /*insert*/
                !0
              );
              return this._values[I] = $, this;
            }, k.prototype.delete = function(R) {
              var $ = this._find(
                R,
                /*insert*/
                !1
              );
              if ($ >= 0) {
                for (var I = this._keys.length, O = $ + 1; O < I; O++)
                  this._keys[O - 1] = this._keys[O], this._values[O - 1] = this._values[O];
                return this._keys.length--, this._values.length--, Be(R, this._cacheKey) && (this._cacheKey = u, this._cacheIndex = -2), !0;
              }
              return !1;
            }, k.prototype.clear = function() {
              this._keys.length = 0, this._values.length = 0, this._cacheKey = u, this._cacheIndex = -2;
            }, k.prototype.keys = function() {
              return new g(this._keys, this._values, T);
            }, k.prototype.values = function() {
              return new g(this._keys, this._values, Y);
            }, k.prototype.entries = function() {
              return new g(this._keys, this._values, J);
            }, k.prototype["@@iterator"] = function() {
              return this.entries();
            }, k.prototype[a] = function() {
              return this.entries();
            }, k.prototype._find = function(R, $) {
              if (!Be(this._cacheKey, R)) {
                this._cacheIndex = -1;
                for (var I = 0; I < this._keys.length; I++)
                  if (Be(this._keys[I], R)) {
                    this._cacheIndex = I;
                    break;
                  }
              }
              return this._cacheIndex < 0 && $ && (this._cacheIndex = this._keys.length, this._keys.push(R), this._values.push(void 0)), this._cacheIndex;
            }, k;
          })()
        );
        return y;
        function T(k, R) {
          return k;
        }
        function Y(k, R) {
          return R;
        }
        function J(k, R) {
          return [k, R];
        }
      }
      function Mi() {
        var u = (
          /** @class */
          (function() {
            function h() {
              this._map = new m();
            }
            return Object.defineProperty(h.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: !0,
              configurable: !0
            }), h.prototype.has = function(g) {
              return this._map.has(g);
            }, h.prototype.add = function(g) {
              return this._map.set(g, g), this;
            }, h.prototype.delete = function(g) {
              return this._map.delete(g);
            }, h.prototype.clear = function() {
              this._map.clear();
            }, h.prototype.keys = function() {
              return this._map.keys();
            }, h.prototype.values = function() {
              return this._map.keys();
            }, h.prototype.entries = function() {
              return this._map.entries();
            }, h.prototype["@@iterator"] = function() {
              return this.keys();
            }, h.prototype[a] = function() {
              return this.keys();
            }, h;
          })()
        );
        return u;
      }
      function Ti() {
        var u = 16, h = l.create(), g = y();
        return (
          /** @class */
          (function() {
            function R() {
              this._key = y();
            }
            return R.prototype.has = function($) {
              var I = T(
                $,
                /*create*/
                !1
              );
              return I !== void 0 ? l.has(I, this._key) : !1;
            }, R.prototype.get = function($) {
              var I = T(
                $,
                /*create*/
                !1
              );
              return I !== void 0 ? l.get(I, this._key) : void 0;
            }, R.prototype.set = function($, I) {
              var O = T(
                $,
                /*create*/
                !0
              );
              return O[this._key] = I, this;
            }, R.prototype.delete = function($) {
              var I = T(
                $,
                /*create*/
                !1
              );
              return I !== void 0 ? delete I[this._key] : !1;
            }, R.prototype.clear = function() {
              this._key = y();
            }, R;
          })()
        );
        function y() {
          var R;
          do
            R = "@@WeakMap@@" + k();
          while (l.has(h, R));
          return h[R] = !0, R;
        }
        function T(R, $) {
          if (!n.call(R, g)) {
            if (!$)
              return;
            Object.defineProperty(R, g, { value: l.create() });
          }
          return R[g];
        }
        function Y(R, $) {
          for (var I = 0; I < $; ++I)
            R[I] = Math.random() * 255 | 0;
          return R;
        }
        function J(R) {
          if (typeof Uint8Array == "function") {
            var $ = new Uint8Array(R);
            return typeof crypto < "u" ? crypto.getRandomValues($) : typeof msCrypto < "u" ? msCrypto.getRandomValues($) : Y($, R), $;
          }
          return Y(new Array(R), R);
        }
        function k() {
          var R = J(u);
          R[6] = R[6] & 79 | 64, R[8] = R[8] & 191 | 128;
          for (var $ = "", I = 0; I < u; ++I) {
            var O = R[I];
            (I === 4 || I === 6 || I === 8) && ($ += "-"), O < 16 && ($ += "0"), $ += O.toString(16).toLowerCase();
          }
          return $;
        }
      }
      function Ue(u) {
        return u.__ = void 0, delete u.__, u;
      }
    });
  })(i || (i = {})), ln;
}
ss();
const tr = Symbol.for("tsm:injectable"), Ft = Symbol.for("tsm:inject"), xt = Symbol.for("tsm:inject:property"), De = Symbol.for("tsm:scope"), rr = Symbol.for("tsm:component"), Mn = Symbol.for("tsm:component:activate"), Tn = Symbol.for("tsm:component:deactivate"), Ln = Symbol.for("tsm:component:modified"), Bt = Symbol.for("tsm:inject:all"), Vt = Symbol.for("tsm:component:bind"), Ut = Symbol.for("tsm:component:unbind");
function os(i, e = {}) {
  return (t, r) => {
    const n = t.constructor, s = Reflect.getOwnMetadata(Bt, n) ?? [];
    Reflect.defineMetadata(Bt, [...s, {
      propertyKey: r,
      serviceId: i,
      target: e.target,
      fieldOption: e.fieldOption ?? "replace"
    }], n);
  };
}
function jt(i) {
  return Reflect.getOwnMetadata(Bt, i) ?? [];
}
function as() {
  return (i) => {
    Reflect.defineMetadata(tr, !0, i);
  };
}
function cs(i, e) {
  return (t, r, n) => {
    if (n !== void 0) {
      const s = Reflect.getOwnMetadata(Ft, t) ?? [];
      s.push({
        index: n,
        serviceId: i,
        optional: e?.optional ?? !1
      }), Reflect.defineMetadata(Ft, s, t);
    } else {
      const s = t.constructor, o = Reflect.getOwnMetadata(xt, s) ?? [];
      o.push({
        propertyKey: r,
        serviceId: i,
        optional: e?.optional ?? !1
      }), Reflect.defineMetadata(xt, o, s);
    }
  };
}
function fs() {
  return (i) => {
    Reflect.defineMetadata(De, "singleton", i);
  };
}
function ds() {
  return (i) => {
    Reflect.defineMetadata(De, "module", i);
  };
}
function us() {
  return (i) => {
    Reflect.defineMetadata(De, "transient", i);
  };
}
function Gt(i) {
  return (Reflect.getOwnMetadata(Ft, i) ?? []).sort((t, r) => t.index - r.index);
}
function zt(i) {
  return Reflect.getOwnMetadata(xt, i) ?? [];
}
function ls(i = {}) {
  return (e) => {
    Reflect.defineMetadata(rr, i, e), Reflect.defineMetadata(tr, !0, e);
  };
}
function hs() {
  return (i, e) => {
    Reflect.defineMetadata(Mn, e, i.constructor);
  };
}
function ps() {
  return (i, e) => {
    Reflect.defineMetadata(Tn, e, i.constructor);
  };
}
function gs() {
  return (i, e) => {
    Reflect.defineMetadata(Ln, e, i.constructor);
  };
}
function ms(i) {
  return Reflect.getOwnMetadata(rr, i);
}
function vs(i) {
  return Reflect.getOwnMetadata(rr, i) !== void 0;
}
function pn(i) {
  return Reflect.getOwnMetadata(Mn, i);
}
function gn(i) {
  return Reflect.getOwnMetadata(Tn, i);
}
function ys(i, e) {
  return (t, r) => {
    const n = Reflect.getOwnMetadata(Vt, t.constructor) ?? [];
    Reflect.defineMetadata(Vt, [...n, { serviceId: i, method: r, optional: e?.optional === !0 }], t.constructor);
  };
}
function ws(i) {
  return (e, t) => {
    const r = Reflect.getOwnMetadata(Ut, e.constructor) ?? [];
    Reflect.defineMetadata(Ut, [...r, { serviceId: i, method: t, optional: !1 }], e.constructor);
  };
}
function Ce(i) {
  return Reflect.getOwnMetadata(Vt, i) ?? [];
}
function mn(i) {
  return Reflect.getOwnMetadata(Ut, i) ?? [];
}
function vn(i) {
  return Reflect.getOwnMetadata(Ln, i);
}
function yn(i) {
  return Reflect.getOwnMetadata(tr, i) === !0;
}
function Es(i) {
  return Reflect.getOwnMetadata(De, i);
}
class Rs {
  source;
  read;
  position = 0;
  constructor(e, t) {
    this.source = e, this.read = t;
  }
  parse() {
    const e = this.parseFilter();
    if (this.skipWhitespace(), this.position < this.source.length)
      throw this.error("unexpected trailing input");
    return e;
  }
  parseFilter() {
    this.skipWhitespace(), this.expect("("), this.skipWhitespace();
    const e = this.source[this.position];
    let t;
    if ((e === "&" || e === "|") && this.filterFollows(1)) {
      this.position++;
      const r = this.parseOperands();
      t = e === "&" ? (n) => r.every((s) => s(n)) : (n) => r.some((s) => s(n));
    } else if (e === "!" && this.filterFollows(1)) {
      this.position++;
      const r = this.parseFilter();
      t = (n) => !r(n);
    } else
      t = this.parseItem();
    return this.skipWhitespace(), this.expect(")"), t;
  }
  /** Whether the next non-whitespace character after an offset opens a filter */
  filterFollows(e) {
    let t = this.position + e;
    for (; t < this.source.length && /\s/.test(this.source[t]); )
      t++;
    return this.source[t] === "(";
  }
  parseOperands() {
    const e = [];
    for (this.skipWhitespace(); this.source[this.position] === "("; )
      e.push(this.parseFilter()), this.skipWhitespace();
    if (e.length === 0)
      throw this.error("operator without operands");
    return e;
  }
  parseItem() {
    const e = this.readAttribute(), t = this.readOperator(), { parts: r, wildcards: n } = this.readValue();
    if (t === "~=") {
      const o = wn(r.join(""));
      return (a) => Oe(this.read(a, e), (f) => typeof f == "string" || typeof f == "number" ? wn(String(f)) === o : !1);
    }
    if (t === "=" && n) {
      if (r.every((a) => a.length === 0))
        return (a) => this.read(a, e) !== void 0;
      const o = bs(r);
      return (a) => Oe(
        this.read(a, e),
        // A wildcard is a string operation: OSGi does not apply it to numbers
        // or booleans, so (intvalue=100*) does not match 1000
        (f) => typeof f == "string" && o.test(f)
      );
    }
    const s = r.join("");
    return t === "=" ? (o) => Oe(this.read(o, e), (a) => Os(a, s)) : (o) => Oe(this.read(o, e), (a) => Ss(a, s, t));
  }
  readAttribute() {
    const e = this.position;
    for (; this.position < this.source.length && !"=<>()~".includes(this.source[this.position]); )
      this.position++;
    const t = this.source.slice(e, this.position).trim();
    if (t.length === 0)
      throw this.error("missing attribute name");
    return t;
  }
  readOperator() {
    if (this.source.startsWith(">=", this.position))
      return this.position += 2, ">=";
    if (this.source.startsWith("<=", this.position))
      return this.position += 2, "<=";
    if (this.source[this.position] === "=")
      return this.position++, "=";
    if (this.source.startsWith("~=", this.position))
      return this.position += 2, "~=";
    throw this.error("expected =, >=, <= or ~=");
  }
  /**
   * Read a value as literal segments split at unescaped wildcards.
   *
   * Splitting while reading is what keeps `\*` apart from `*`: once the escape
   * is dropped, a literal asterisk is indistinguishable from a wildcard.
   */
  readValue() {
    const e = [""];
    let t = !1;
    for (; this.position < this.source.length; ) {
      const r = this.source[this.position];
      if (r === ")")
        break;
      if (r === "\\") {
        const n = this.source[this.position + 1];
        if (n === void 0)
          throw this.error("trailing escape character");
        e[e.length - 1] += n, this.position += 2;
        continue;
      }
      if (r === "*") {
        t = !0, e.push(""), this.position++;
        continue;
      }
      e[e.length - 1] += r, this.position++;
    }
    return { parts: e, wildcards: t };
  }
  skipWhitespace() {
    for (; this.position < this.source.length && /\s/.test(this.source[this.position]); )
      this.position++;
  }
  expect(e) {
    if (this.source[this.position] !== e)
      throw this.error(`expected '${e}'`);
    this.position++;
  }
  error(e) {
    return new Error(`Invalid service filter at position ${this.position}: ${e} — '${this.source}'`);
  }
}
function bs(i) {
  const e = i.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join(".*");
  return new RegExp(`^${e}$`);
}
const $s = (i, e) => {
  const t = i[e];
  if (t !== void 0)
    return t;
  const r = e.toLowerCase();
  for (const [n, s] of Object.entries(i))
    if (n.toLowerCase() === r)
      return s;
}, Is = (i, e) => i[e];
function Oe(i, e) {
  return i === void 0 ? !1 : Array.isArray(i) ? i.some((t) => e(t)) : e(i);
}
function Os(i, e) {
  return typeof i == "boolean" ? String(i) === e.trim() : typeof i == "number" ? Nn(e) === i : i === e;
}
function Nn(i) {
  const e = i.trim();
  return e.length === 0 ? Number.NaN : Number(e);
}
function Ss(i, e, t) {
  if (typeof i == "boolean")
    return !1;
  if (typeof i == "number") {
    const r = Nn(e);
    return Number.isNaN(r) ? !1 : t === ">=" ? i >= r : i <= r;
  }
  return t === ">=" ? i >= e : i <= e;
}
function wn(i) {
  return i.replace(/\s+/g, "").toLowerCase();
}
function qe(i, e = {}) {
  return new Rs(i, e.caseSensitive === !0 ? Is : $s).parse();
}
function se(i) {
  const e = { ...i.properties };
  return e["service.ranking"] = i.ranking, i.providedBy !== void 0 && (e["service.providedBy"] = i.providedBy), e;
}
function kt(i, e) {
  return `${i}#${e.seq}`;
}
class _n {
  services = /* @__PURE__ */ new Map();
  bindings = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  /**
   * The filter a listener was added with, when it was added with one.
   *
   * Kept beside the set rather than wrapping the listener, so `removeListener`
   * still works with the object the caller passed.
   */
  listenerFilters = /* @__PURE__ */ new Map();
  /** Reverse index: primary service ID -> alias IDs created for it */
  aliasesOf = /* @__PURE__ */ new Map();
  /** Reverse index: service ID -> binding IDs that inject it (from bindClass) */
  injectedInto = /* @__PURE__ */ new Map();
  /**
   * Registrations for an ID that are currently outranked by the visible one.
   *
   * Readers still see a single service per ID, but a second provider is kept
   * instead of dropped: when the visible one goes, the best of these takes
   * over rather than the ID falling silent.
   */
  shadowed = /* @__PURE__ */ new Map();
  nextSeq = 1;
  /** Parsed target filters, so a repeated lookup does not re-parse */
  filterCache = /* @__PURE__ */ new Map();
  /**
   * Install a registration and decide whether it becomes the visible one.
   *
   * A registration from the same provider replaces its own earlier one, so
   * registering twice under one ID does not accumulate.
   */
  addRegistration(e, t) {
    const r = this.bindings.has(e), n = this.bindings.get(e), s = (a) => a.providedBy === t.providedBy && a.origin === t.origin && a.instanceKey === t.instanceKey;
    this.removeShadowed(e, s);
    const o = n !== void 0 && s(n);
    return !n || o || this.outranks(t, n) ? (n && !o && this.pushShadowed(e, n), o && (this.dropAliasesOf(e, n.seq), this.dropInjectionEdges(e)), this.setVisible(e, t), this.notify({
      type: r ? "updated" : "registered",
      serviceId: e,
      service: t.instance,
      properties: se(t)
    })) : (this.pushShadowed(e, t), this.notify({
      type: "registered",
      serviceId: e,
      service: t.instance,
      properties: se(t)
    })), this.createHandle(e, t);
  }
  outranks(e, t) {
    return e.ranking !== t.ranking ? e.ranking > t.ranking : e.seq < t.seq;
  }
  setVisible(e, t) {
    this.invalidateInjectors(e, /* @__PURE__ */ new Set()), this.bindings.set(e, t), t.instance !== void 0 ? this.services.set(e, t.instance) : this.services.delete(e);
  }
  pushShadowed(e, t) {
    const r = this.shadowed.get(e);
    r ? r.push(t) : this.shadowed.set(e, [t]);
  }
  removeShadowed(e, t) {
    const r = this.shadowed.get(e);
    if (!r)
      return !1;
    const n = r.filter((s) => !t(s));
    return n.length === r.length ? !1 : (n.length === 0 ? this.shadowed.delete(e) : this.shadowed.set(e, n), !0);
  }
  /** All registrations for an ID, best first */
  registrationsOf(e) {
    const t = this.bindings.get(e), r = [...this.shadowed.get(e) ?? []].sort((n, s) => n.ranking !== s.ranking ? s.ranking - n.ranking : n.seq - s.seq);
    return t ? [t, ...r] : r;
  }
  createHandle(e, t) {
    return {
      serviceId: e,
      providedBy: t.providedBy,
      ranking: t.ranking,
      key: kt(e, t),
      unregister: () => this.unregisterRegistration(e, t.seq),
      setProperties: (r, n = {}) => this.updateProperties(e, t, r, n),
      resolve: () => {
        if (this.registrationsOf(e).some((r) => r.seq === t.seq))
          return this.instantiate(e, t, /* @__PURE__ */ new Set());
      }
    };
  }
  /**
   * Replace the properties of one registration, and of the alias registrations
   * that belong to it.
   *
   * The properties declared for an individual ID are kept underneath: the
   * manifest describes where a service belongs, the new properties — in practice
   * a component's configuration — win over that per key.
   */
  updateProperties(e, t, r, n) {
    const s = this.registrationsOf(e).find((l) => l.seq === t.seq);
    if (!s)
      return !1;
    const o = se(s), { ranking: a, propertiesById: f } = n, d = (l, p) => {
      l.properties = { ...f?.[p] ?? r }, a !== void 0 && (l.ranking = a);
    };
    d(s, e);
    for (const l of this.aliasesOf.get(e) ?? []) {
      const p = this.registrationsOf(l).find((m) => m.aliasSeq === t.seq);
      p && (d(p, l), a !== void 0 && this.reevaluateVisibility(l));
    }
    a !== void 0 && this.reevaluateVisibility(e);
    const c = se(s);
    return this.notify({ type: "updated", serviceId: e, service: s.instance, properties: c }), this.notifyEndMatch(e, s.instance, o, c), !0;
  }
  /**
   * Decide again which registration for an ID is the visible one.
   *
   * Only needed after a ranking changed underneath: registration order alone
   * cannot have moved anything, so nothing else disturbs the bench.
   */
  reevaluateVisibility(e) {
    const t = this.registrationsOf(e);
    if (t.length < 2)
      return;
    const r = t.reduce((s, o) => this.outranks(o, s) ? o : s), n = this.bindings.get(e);
    n !== r && (this.removeShadowed(e, (s) => s.seq === r.seq), n && this.pushShadowed(e, n), this.setVisible(e, r));
  }
  /**
   * Withdraw one specific registration. When it was the visible one, the best
   * remaining registration takes over instead of the ID falling silent.
   */
  unregisterRegistration(e, t) {
    if (this.bindings.get(e)?.seq !== t) {
      const s = this.registrationsOf(e).find((a) => a.seq === t), o = this.removeShadowed(e, (a) => a.seq === t);
      return o && (this.dropAliasesOf(e, t), this.notify({
        type: "unregistered",
        serviceId: e,
        service: s?.instance,
        properties: s ? se(s) : void 0
      })), o;
    }
    const n = this.registrationsOf(e).find((s) => s.seq !== t);
    return n ? (this.removeShadowed(e, (s) => s.seq === n.seq), this.dropAliasesOf(e, t), this.dropInjectionEdges(e), this.setVisible(e, n), this.notify({
      type: "updated",
      serviceId: e,
      service: n.instance,
      properties: se(n)
    }), !0) : this.unregister(e);
  }
  /**
   * Register a service instance directly
   */
  register(e, t, r = {}) {
    return this.addRegistration(e, {
      instance: t,
      scope: "singleton",
      providedBy: r.providedBy,
      ranking: r.ranking ?? 0,
      seq: this.nextSeq++,
      properties: r.properties,
      instanceKey: r.instanceKey
    });
  }
  /**
   * Bind a factory function for lazy instantiation
   */
  bind(e, t, r = {}) {
    return this.addRegistration(e, {
      factory: t,
      scope: r.scope ?? "singleton",
      providedBy: r.providedBy,
      ranking: r.ranking ?? 0,
      seq: this.nextSeq++,
      properties: r.properties,
      instanceKey: r.instanceKey
    });
  }
  /**
   * Bind a class with automatic constructor injection.
   * The class must be decorated with @injectable() and declare dependencies via @inject().
   *
   * Scope resolution order: options.scope > @singleton()/@transient() decorator > 'singleton' default
   *
   * If options.implements is provided, additional alias bindings are created that
   * delegate to the primary ID, so the same singleton is shared.
   */
  bindClass(e, t, r = {}) {
    if (!yn(t))
      throw new Error(`Class '${t.name}' is not decorated with @injectable(). Add @injectable() to use bindClass().`);
    const n = Gt(t), s = zt(t), o = Es(t), a = r.scope ?? o ?? "singleton";
    for (const c of [...n, ...s]) {
      let l = this.injectedInto.get(c.serviceId);
      l || (l = /* @__PURE__ */ new Set(), this.injectedInto.set(c.serviceId, l)), l.add(e);
    }
    const f = this.nextSeq++, d = this.addRegistration(e, {
      factory: (...c) => new t(...c),
      scope: a,
      // The class identifies the registration, so a second class from the same
      // module does not replace this one
      origin: t,
      providedBy: r.providedBy,
      ranking: r.ranking ?? 0,
      seq: f,
      properties: r.propertiesById?.[e] ?? r.properties,
      instanceKey: r.instanceKey,
      deps: n.map((c) => ({ serviceId: c.serviceId, optional: c.optional })),
      propertyDeps: s.length > 0 ? s : void 0
    });
    if (r.implements) {
      let c = this.aliasesOf.get(e);
      c || (c = /* @__PURE__ */ new Set(), this.aliasesOf.set(e, c));
      for (const l of r.implements) {
        const p = this.bindings.get(l);
        p?.aliasOf && p.aliasOf !== e && this.aliasesOf.get(p.aliasOf)?.delete(l), this.addRegistration(l, {
          scope: a,
          aliasOf: e,
          aliasSeq: f,
          origin: t,
          providedBy: r.providedBy,
          ranking: r.ranking ?? 0,
          seq: this.nextSeq++,
          instanceKey: r.instanceKey,
          // The interface is what consumers filter on, so it may carry its own
          properties: r.propertiesById?.[l] ?? r.properties
        }), c.add(l);
      }
    }
    return d;
  }
  /**
   * Get a service by ID
   * For singletons: creates instance on first access, returns same instance thereafter
   * For transients: creates new instance on each call
   * Automatically resolves dependencies declared via @inject()
   */
  /**
   * Construct an injectable class with its dependencies injected, without
   * registering it: the same resolution as `bindClass()`, minus the registration.
   */
  construct(e) {
    return this.constructFor(void 0, e);
  }
  /**
   * Construct a class on behalf of a module, so a `module`-scoped dependency is
   * that module's own.
   *
   * The counterpart of `getFor`. Without it a component with no service of its
   * own — built through `construct` rather than through a registration — would
   * silently share one instance with every other module, which is the one case
   * where the scope would be wrong rather than merely absent.
   */
  constructFor(e, t) {
    if (!yn(t))
      throw new Error(`Class '${t.name}' is not decorated with @injectable() or @component(), so its dependencies are unknown`);
    const r = /* @__PURE__ */ new Set(), n = Gt(t).map((o) => {
      const a = this.resolveFor(e, o.serviceId, r);
      if (a === void 0 && !o.optional)
        throw new Error(`Dependency '${o.serviceId}' not found (required by '${t.name}')`);
      return a;
    }), s = new t(...n);
    for (const o of zt(t)) {
      const a = this.resolveFor(e, o.serviceId, r);
      if (a === void 0 && !o.optional)
        throw new Error(`Property dependency '${o.serviceId}' not found (required by '${t.name}' on property '${String(o.propertyKey)}')`);
      s[o.propertyKey] = a;
    }
    return s;
  }
  get(e, t) {
    return this.resolveFor(void 0, e, t);
  }
  /**
   * Resolve a service on behalf of a module, so a `module`-scoped registration
   * can hand that module its own instance.
   */
  getFor(e, t) {
    return this.resolveFor(e, t);
  }
  resolveFor(e, t, r) {
    if (this.services.has(t))
      return this.services.get(t);
    const n = this.bindings.get(t);
    if (n)
      return this.instantiate(t, n, r ?? /* @__PURE__ */ new Set(), e);
  }
  /** Resolve one reference on behalf of a module — see {@link getFor} */
  resolveReferenceFor(e, t) {
    const r = this.registrationsOf(t.serviceId).find((n) => kt(t.serviceId, n) === t.key);
    if (r)
      return this.instantiate(t.serviceId, r, /* @__PURE__ */ new Set(), e);
  }
  /**
   * Drop what a module holds under `module` scope.
   *
   * A per-module instance whose module is gone is exactly the leak this scope
   * would otherwise introduce, so the teardown has to reach it. An instance with
   * a `dispose()` method is told, which is the counterpart of `ungetService`.
   */
  releaseConsumer(e) {
    const t = [];
    for (const [r, n] of this.bindings)
      for (const s of [n, ...this.shadowed.get(r) ?? []]) {
        const o = s.perConsumer?.get(e);
        if (o === void 0)
          continue;
        s.perConsumer.delete(e), t.push(r);
        const a = o;
        if (typeof a.dispose == "function")
          try {
            a.dispose();
          } catch (f) {
            console.error(`Disposing ${r} for ${e} failed:`, f);
          }
      }
    return [...new Set(t)];
  }
  /**
   * Resolve one binding: follow an alias, reuse a singleton, or build via the
   * factory with its dependencies injected.
   *
   * Split out of `get()` because an outranked registration has to be
   * resolvable too, even though the ID answers with a different one.
   */
  instantiate(e, t, r, n) {
    if (t.aliasOf) {
      const c = this.aliasTarget(t);
      return c ? this.instantiate(t.aliasOf, c, r, n) : void 0;
    }
    const s = t.scope === "module" ? n : void 0, o = t.scope === "singleton" || t.scope === "module" && !n;
    if (o && t.instance !== void 0)
      return t.instance;
    if (s !== void 0) {
      const c = t.perConsumer?.get(s);
      if (c !== void 0)
        return c;
    }
    if (!t.factory)
      return;
    if (r.has(e)) {
      const c = [...r, e].join(" → ");
      throw new Error(`Circular dependency detected: ${c}`);
    }
    r.add(e);
    const a = t.providedBy ?? n, f = (t.deps ?? []).map((c) => {
      const l = this.resolveFor(a, c.serviceId, r);
      if (l === void 0 && !c.optional)
        throw new Error(`Dependency '${c.serviceId}' not found (required by '${e}')`);
      return l;
    }), d = t.factory(...f);
    if (t.propertyDeps)
      for (const c of t.propertyDeps) {
        const l = this.resolveFor(a, c.serviceId, r);
        if (l === void 0 && !c.optional)
          throw new Error(`Property dependency '${c.serviceId}' not found (required by '${e}' on property '${String(c.propertyKey)}')`);
        d[c.propertyKey] = l;
      }
    return o ? (t.instance = d, t.scope === "singleton" && this.bindings.get(e) === t && this.services.set(e, d)) : s !== void 0 && (t.perConsumer ??= /* @__PURE__ */ new Map(), t.perConsumer.set(s, d)), d;
  }
  /**
   * Get all instantiated services whose ID matches a wildcard pattern.
   *
   * @deprecated Matches ID names rather than registrations, and only sees what
   * has already been instantiated. Use `getServiceReferences(id, target?)`.
   */
  getAll(e) {
    const t = new RegExp("^" + e.replace(/\*/g, ".*") + "$"), r = [];
    for (const [n, s] of this.services)
      t.test(n) && r.push(s);
    return r;
  }
  /**
   * Check if a service exists (registered or bound)
   */
  has(e) {
    return this.resolveExisting(e, /* @__PURE__ */ new Set()) !== void 0;
  }
  /**
   * Resolve an ID to the binding that would actually serve it.
   * Follows aliases, so an alias whose target is gone resolves to undefined.
   */
  resolveExisting(e, t) {
    if (t.has(e))
      return;
    if (t.add(e), this.services.has(e))
      return this.bindings.get(e);
    const r = this.bindings.get(e);
    if (r) {
      if (r.aliasOf) {
        const n = this.aliasTarget(r);
        return n ? this.resolveExisting(r.aliasOf, t) && n : void 0;
      }
      return r;
    }
  }
  /**
   * The registration an alias stands for: the one it was created with, not
   * whatever is visible under that ID now.
   */
  aliasTarget(e) {
    if (e.aliasOf === void 0)
      return;
    const t = this.registrationsOf(e.aliasOf);
    return e.aliasSeq === void 0 ? t[0] : t.find((r) => r.seq === e.aliasSeq);
  }
  /**
   * Get a required service - throws if not available
   */
  getRequired(e) {
    const t = this.get(e);
    if (t === void 0)
      throw new Error(`Required service not found: ${e}`);
    return t;
  }
  /**
   * Check if all required services are available
   */
  checkRequirements(e) {
    const t = [];
    for (const r of e) {
      if (!Sn(r))
        continue;
      (r.target !== void 0 ? this.countProviders(r.id, r.target) > 0 : this.has(r.id)) || t.push(r.id);
    }
    return {
      satisfied: t.length === 0,
      missing: t
    };
  }
  /**
   * Every registration for an ID, best first, without instantiating any of them.
   *
   * Collecting must not build objects nobody asked for, which is why this
   * returns references rather than services.
   */
  getServiceReferences(e, t) {
    const r = t !== void 0 ? this.filterFor(t) : void 0;
    return this.registrationsOf(e).filter((n) => !r || r(se(n))).map((n) => ({
      serviceId: e,
      providedBy: n.providedBy,
      ranking: n.ranking,
      scope: n.scope,
      instantiated: n.instance !== void 0,
      properties: se(n),
      key: kt(e, n)
    }));
  }
  /**
   * The best service for an ID whose properties match the filter.
   *
   * `get(id)` answers with the highest-ranked registration regardless of
   * properties; a consumer that declared a target needs this one.
   */
  getMatching(e, t) {
    const [r] = this.getServiceReferences(e, t);
    return r ? this.resolveReference(r) : void 0;
  }
  /**
   * Parse a filter once and remember it. An invalid filter throws here rather
   * than quietly matching nothing.
   */
  filterFor(e) {
    const t = this.filterCache.get(e);
    if (t)
      return t;
    const r = qe(e);
    return this.filterCache.set(e, r), r;
  }
  /**
   * Every service registered under an id, best first.
   *
   * The typed way to consume 0..n: `getServiceReferences` plus a resolve per
   * reference, without naming the contract again at each one. A provider that
   * fails to instantiate is left out rather than appearing as `undefined` — a
   * collection of services should not need a null check per element.
   */
  getServices(e, t) {
    return this.getServiceReferences(e, t).map((r) => this.resolveReference(r)).filter((r) => r !== void 0);
  }
  /**
   * Resolve one reference from getServiceReferences().
   *
   * The visible registration resolves like `get()`; an outranked one is built
   * from its own binding, so a collection can use every provider even though
   * only one of them answers to the ID.
   */
  resolveReference(e) {
    const t = Number(e.key.slice(e.key.lastIndexOf("#") + 1)), r = this.registrationsOf(e.serviceId).find((n) => n.seq === t);
    if (r)
      return this.bindings.get(e.serviceId)?.seq === t ? this.get(e.serviceId) : this.instantiate(e.serviceId, r, /* @__PURE__ */ new Set());
  }
  /** How many registrations an ID carries, optionally matching a target filter */
  countProviders(e, t) {
    return this.getServiceReferences(e, t).length;
  }
  /**
   * Unregister a service
   */
  unregister(e) {
    const t = this.services.get(e), r = this.bindings.get(e);
    if (t === void 0 && !(r !== void 0))
      return !1;
    for (const s of this.registrationsOf(e))
      s.aliasOf && this.aliasesOf.get(s.aliasOf)?.delete(e);
    return this.shadowed.delete(e), this.services.delete(e), this.bindings.delete(e), this.notify({
      type: "unregistered",
      serviceId: e,
      service: t,
      properties: r ? se(r) : void 0
    }), this.dropAliasesOf(e), this.dropInjectionEdges(e), this.invalidateInjectors(e, /* @__PURE__ */ new Set()), !0;
  }
  /**
   * Forget which services a binding injects
   */
  dropInjectionEdges(e) {
    for (const [t, r] of this.injectedInto)
      r.delete(e) && r.size === 0 && this.injectedInto.delete(t);
  }
  /**
   * Discard singleton instances built with a service that changed, transitively.
   *
   * A singleton receives its dependencies once, at construction, so after the
   * service is gone it would keep serving the old one. The next `get()` builds
   * the instance again with whatever is available then.
   *
   * Only reaches classes bound through `bindClass()`, whose dependencies the
   * registry knows. What a hand-written `bind()` factory pulls from the registry
   * is invisible here and cannot be invalidated — see the notes on dynamic
   * requirements in the README.
   */
  invalidateInjectors(e, t) {
    if (!t.has(e)) {
      t.add(e);
      for (const r of this.injectedInto.get(e) ?? []) {
        const n = this.bindings.get(r);
        !n?.factory || n.instance === void 0 || (n.instance = void 0, this.services.delete(r), this.invalidateInjectors(r, t));
      }
    }
  }
  /**
   * Remove every alias binding that delegates to the given primary ID
   */
  /**
   * Remove the alias registrations a primary registration created.
   *
   * @param primarySeq Restricts it to the aliases of that one registration.
   *   Needed once a class can be registered more than once under an ID — one
   *   instance per factory configuration — where dropping the first alias found
   *   would take another instance's interface with it. Without it, every alias
   *   of the ID goes, which is what withdrawing the ID itself means.
   */
  dropAliasesOf(e, t) {
    const r = this.aliasesOf.get(e);
    if (!r)
      return;
    const n = /* @__PURE__ */ new Set();
    for (const s of r) {
      const o = this.registrationsOf(s).filter((a) => a.aliasOf === e && (t === void 0 || a.aliasSeq === t));
      if (o.length === 0) {
        t !== void 0 && n.add(s);
        continue;
      }
      for (const a of o)
        this.unregisterRegistration(s, a.seq);
      t !== void 0 && this.registrationsOf(s).some((a) => a.aliasOf === e) && n.add(s);
    }
    n.size > 0 ? this.aliasesOf.set(e, n) : this.aliasesOf.delete(e);
  }
  /**
   * Get information about a binding
   */
  getBindingInfo(e) {
    const t = this.bindings.get(e);
    if (t)
      return {
        scope: t.scope,
        providedBy: t.providedBy
      };
  }
  /**
   * Get all registered service IDs
   */
  getServiceIds() {
    return Array.from(this.services.keys());
  }
  /**
   * Clear all services
   */
  clear() {
    this.injectedInto.clear();
    const e = /* @__PURE__ */ new Set([...this.services.keys(), ...this.bindings.keys()]);
    for (const t of e)
      this.unregister(t);
  }
  /**
   * Resolve once a service is available.
   *
   * Resolves immediately when it is already there, otherwise on the
   * registration that provides it. Replaces polling the registry in a loop.
   *
   * @param options.timeoutMs Reject after this long instead of waiting forever
   */
  whenAvailable(e, t = {}) {
    const r = this.get(e);
    return r !== void 0 ? Promise.resolve(r) : new Promise((n, s) => {
      let o;
      const a = {
        onServiceEvent: (f) => {
          if (f.serviceId !== e || f.type === "unregistered")
            return;
          const d = this.get(e);
          d !== void 0 && (o !== void 0 && clearTimeout(o), this.removeListener(a), n(d));
        }
      };
      this.addListener(a), t.timeoutMs !== void 0 && (o = setTimeout(() => {
        this.removeListener(a), s(new Error(`Service ${e} did not become available within ${t.timeoutMs}ms`));
      }, t.timeoutMs));
    });
  }
  /**
   * Add a listener for service events, optionally narrowed by a filter over the
   * services' properties.
   *
   * An invalid filter is rejected here rather than quietly matching nothing —
   * the same choice `getServiceReferences` makes.
   */
  addListener(e, t = {}) {
    this.listeners.add(e), t.filter !== void 0 && this.listenerFilters.set(e, this.filterFor(t.filter));
  }
  /**
   * Remove a listener
   */
  removeListener(e) {
    this.listeners.delete(e), this.listenerFilters.delete(e);
  }
  notify(e) {
    for (const t of this.listeners) {
      const r = this.listenerFilters.get(t);
      r && e.type !== "modified-endmatch" && (!e.properties || !r(e.properties)) || this.deliver(t, e);
    }
  }
  deliver(e, t) {
    try {
      e.onServiceEvent(t);
    } catch (r) {
      console.error("Service registry listener error:", r);
    }
  }
  /**
   * Tell filtering listeners that a property change ended their match.
   *
   * Only those whose filter matched the old properties and no longer matches the
   * new ones: a listener that never accepted the service has nothing to
   * withdraw, and one that still accepts it got `updated` already.
   */
  notifyEndMatch(e, t, r, n) {
    for (const [s, o] of this.listenerFilters)
      this.listeners.has(s) && (!o(r) || o(n) || this.deliver(s, {
        type: "modified-endmatch",
        serviceId: e,
        service: t,
        properties: n
      }));
  }
}
class Pn {
  moduleId;
  target;
  declaredRankings;
  declaredProperties;
  /** Registrations made through this facade, in registration order */
  ownRegistrations = [];
  /** Listeners this module added, so they do not outlive it */
  ownListeners = /* @__PURE__ */ new Set();
  /**
   * @param declaredRankings Rankings from the manifest's `provides`, applied when
   *   a registration passes none of its own
   */
  constructor(e, t, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map()) {
    this.moduleId = e, this.target = t, this.declaredRankings = r, this.declaredProperties = n;
  }
  rankingFor(e, t) {
    return t ?? this.declaredRankings.get(e);
  }
  /**
   * Merge the manifest's declared properties with the ones passed at
   * registration, per key.
   *
   * Not "one or the other": the manifest describes where a service belongs —
   * deployment information a module should not have to repeat — while the code
   * adds what only it knows. Replacing wholesale would silently drop a declared
   * property as soon as the code passes any property at all.
   */
  propertiesFor(e, t) {
    const r = this.declaredProperties.get(e);
    return r ? t ? { ...r, ...t } : r : t;
  }
  register(e, t, r = {}) {
    return this.track(this.target.register(e, t, {
      ...r,
      providedBy: r.providedBy ?? this.moduleId,
      ranking: this.rankingFor(e, r.ranking),
      properties: this.propertiesFor(e, r.properties)
    }));
  }
  bind(e, t, r = {}) {
    return this.track(this.target.bind(e, t, {
      ...r,
      providedBy: r.providedBy ?? this.moduleId,
      ranking: this.rankingFor(e, r.ranking),
      properties: this.propertiesFor(e, r.properties)
    }));
  }
  bindClass(e, t, r = {}) {
    const n = {};
    for (const s of [e, ...r.implements ?? []]) {
      const o = this.propertiesFor(s, r.propertiesById?.[s]);
      o && (n[s] = o);
    }
    return this.track(this.target.bindClass(e, t, {
      ...r,
      providedBy: r.providedBy ?? this.moduleId,
      ranking: this.rankingFor(e, r.ranking),
      properties: this.propertiesFor(e, r.properties),
      propertiesById: n
    }));
  }
  /**
   * Remember a registration for the teardown, and keep the manifest's declared
   * properties in play for later property changes.
   *
   * A component updating its properties from configuration passes what it and
   * its configuration know; where the service belongs is still the manifest's
   * business, exactly as at registration time.
   */
  track(e) {
    const t = {
      ...e,
      unregister: () => e.unregister(),
      resolve: () => e.resolve(),
      setProperties: (r, n = {}) => {
        const s = {};
        for (const [o, a] of Object.entries(n.propertiesById ?? {})) {
          const f = this.propertiesFor(o, a);
          f && (s[o] = f);
        }
        return e.setProperties(this.propertiesFor(e.serviceId, r) ?? r, { ...n, propertiesById: s });
      }
    };
    return this.ownRegistrations.push(t), t;
  }
  /**
   * Construct a class for this module, so a `module`-scoped dependency is this
   * module's own instance.
   *
   * The path a component without a service of its own takes, which makes it the
   * one that must not lose the consumer.
   */
  construct(e) {
    const t = this.target;
    return typeof t.constructFor == "function" ? t.constructFor(this.moduleId, e) : this.target.construct(e);
  }
  /**
   * Reads pass through, but no longer anonymously: the facade knows which module
   * is asking, and that is the whole of what `module` scope needs.
   *
   * A target registry without `getFor` falls back to the plain read, where a
   * `module`-scoped registration behaves as a singleton.
   */
  get(e) {
    const t = this.target;
    return typeof t.getFor == "function" ? t.getFor(this.moduleId, e) : this.target.get(e);
  }
  getRequired(e) {
    const t = this.get(e);
    return t === void 0 ? this.target.getRequired(e) : t;
  }
  getAll(e) {
    return this.target.getAll(e);
  }
  has(e) {
    return this.target.has(e);
  }
  checkRequirements(e) {
    return this.target.checkRequirements(e);
  }
  getServiceReferences(e, t) {
    return this.target.getServiceReferences(e, t);
  }
  /**
   * Every service under an id, best first — resolved as this module, so a
   * `module`-scoped provider hands over this module's own instance.
   */
  getServices(e, t) {
    return this.getServiceReferences(e, t).map((r) => this.resolveReference(r)).filter((r) => r !== void 0);
  }
  resolveReference(e) {
    const t = this.target;
    return typeof t.resolveReferenceFor == "function" ? t.resolveReferenceFor(this.moduleId, e) : this.target.resolveReference(e);
  }
  countProviders(e, t) {
    return this.target.countProviders(e, t);
  }
  getMatching(e, t) {
    return this.target.getMatching(e, t);
  }
  /**
   * Withdraw this module's registrations for an ID.
   *
   * Only its own: with several providers per ID, delegating to the shared
   * `unregister(id)` would take other modules' registrations along. An ID this
   * module never registered still falls through to the shared registry.
   */
  unregister(e) {
    const t = this.ownRegistrations.filter((r) => r.serviceId === e);
    return t.length === 0 ? this.target.unregister(e) : (this.ownRegistrations = this.ownRegistrations.filter((r) => r.serviceId !== e), t.map((r) => r.unregister()).some((r) => r));
  }
  getBindingInfo(e) {
    return this.target.getBindingInfo(e);
  }
  getServiceIds() {
    return this.target.getServiceIds();
  }
  /**
   * Listen for service registrations and withdrawals.
   *
   * The listener is removed when the module is deactivated, so a collection
   * held by the module cannot keep reacting after the module stopped.
   *
   * Requires an observable target registry; a custom `ServiceRegistry` without
   * listener support cannot provide this.
   */
  addListener(e, t = {}) {
    const r = this.target;
    if (typeof r.addListener != "function")
      throw new Error(`Service registry does not support listeners, so module ${this.moduleId} cannot observe it`);
    this.ownListeners.add(e), r.addListener(e, t);
  }
  /**
   * Resolve once a service is available.
   *
   * A pending wait is not cancelled when the module is deactivated; keep the
   * `timeoutMs` in mind if the service may never arrive.
   */
  whenAvailable(e, t = {}) {
    const r = this.target;
    return typeof r.whenAvailable != "function" ? Promise.reject(new Error(`Service registry does not support waiting, so module ${this.moduleId} cannot await ${e}`)) : r.whenAvailable(e, t);
  }
  removeListener(e) {
    const t = this.target;
    this.ownListeners.delete(e), typeof t.removeListener == "function" && t.removeListener(e);
  }
  /** IDs this module registered and has not withdrawn itself */
  getOwnServiceIds() {
    return [...new Set(this.ownRegistrations.map((e) => e.serviceId))];
  }
  /**
   * Withdraw everything this module registered.
   * Returns the IDs that were actually removed.
   */
  releaseAll() {
    const e = this.target;
    for (const r of this.ownListeners)
      e.removeListener?.(r);
    this.ownListeners.clear();
    const t = [];
    for (const r of [...this.ownRegistrations].reverse())
      r.unregister() && t.push(r.serviceId);
    return this.ownRegistrations = [], e.releaseConsumer?.(this.moduleId), t;
  }
}
const jn = "tsm.component.runtime", we = "osgi.extender", kn = "osgi.component", Dn = "osgi.metatype", Ee = "osgi.implementation", qn = "osgi.cm", Fn = "tsm.feature.service", xn = "osgi.feature", Bn = "1.0.0", Me = "1.0";
function Vn(i) {
  let e = "", t = 0;
  for (; t < i.length; ) {
    const r = i[t];
    if (r === '"') {
      for (e += r, t++; t < i.length; ) {
        if (e += i[t], i[t] === "\\") {
          e += i[t + 1] ?? "", t += 2;
          continue;
        }
        if (i[t] === '"') {
          t++;
          break;
        }
        t++;
      }
      continue;
    }
    if (r === "/" && i[t + 1] === "/") {
      for (; t < i.length && i[t] !== `
`; )
        t++;
      continue;
    }
    if (r === "/" && i[t + 1] === "*") {
      for (t += 2; t < i.length && !(i[t] === "*" && i[t + 1] === "/"); )
        t++;
      t += 2;
      continue;
    }
    e += r, t++;
  }
  return e;
}
function Fe(i) {
  const e = i.lastIndexOf("@");
  if (e <= 0)
    throw new Error(`Feature id '${i}' has no version — expected 'name@version'`);
  const t = i.slice(0, e), r = i.slice(e + 1);
  if (t.length === 0 || r.length === 0)
    throw new Error(`Feature id '${i}' has an empty name or version`);
  return { name: t, version: r };
}
function fe(i) {
  return `${i.name}@${i.version}`;
}
const Cs = {
  String: (i) => i,
  Integer: (i) => Number.parseInt(i, 10),
  Long: (i) => Number.parseInt(i, 10),
  Float: (i) => Number.parseFloat(i),
  Double: (i) => Number.parseFloat(i),
  Boolean: (i) => i === "true"
};
function As(i, e) {
  return i.replace(/\$\{([^}]*)\}/g, (t, r) => {
    const n = e[r];
    return n == null ? t : String(n);
  });
}
function nr(i, e = {}) {
  const t = { ...i.variables, ...e }, r = {};
  for (const [n, s] of Object.entries(i.configurations)) {
    const o = {};
    for (const [a, f] of Object.entries(s)) {
      const d = a.lastIndexOf(":"), c = d > 0 ? a.slice(d + 1) : void 0, l = c === void 0 ? void 0 : Cs[c], p = l === void 0 ? a : a.slice(0, d), m = typeof f == "string" ? As(f, t) : f;
      o[p] = l !== void 0 && typeof m == "string" ? l(m) : m;
    }
    r[n] = o;
  }
  return r;
}
function ir(i, e = {}) {
  return Object.entries(i.variables).filter(([t, r]) => r === null && e[t] === void 0).map(([t]) => t);
}
function Un(i) {
  const e = typeof i == "string" ? JSON.parse(Vn(i)) : i;
  if (typeof e != "object" || e === null)
    throw new Error("A feature document has to be a JSON object");
  if (typeof e.id != "string")
    throw new Error('A feature needs an "id" of the form "name@version"');
  const t = e["feature-resource-version"];
  if (t !== void 0 && t !== Me)
    throw new Error(`Unsupported feature-resource-version '${String(t)}' — this reads ${Me}`);
  return Object.freeze({
    id: Fe(e.id),
    name: de(e.name, "name"),
    description: de(e.description, "description"),
    categories: Object.freeze(Ms(e.categories)),
    complete: e.complete === !0,
    docURL: de(e.docURL, "docURL"),
    license: de(e.license, "license"),
    scm: de(e.scm, "scm"),
    vendor: de(e.vendor, "vendor"),
    bundles: Object.freeze(Gn(e.bundles)),
    configurations: Object.freeze(Ts(e.configurations)),
    variables: Object.freeze(Ls(e.variables)),
    extensions: Object.freeze(Ns(e.extensions))
  });
}
function de(i, e) {
  if (i !== void 0) {
    if (typeof i != "string")
      throw new Error(`Feature "${e}" has to be a string`);
    return i;
  }
}
function Ms(i) {
  if (i === void 0)
    return [];
  if (!Array.isArray(i) || i.some((e) => typeof e != "string"))
    throw new Error('Feature "categories" has to be an array of strings');
  return [...i];
}
function Gn(i) {
  if (i === void 0)
    return [];
  if (!Array.isArray(i))
    throw new Error('Feature "bundles" has to be an array');
  return i.map((e) => {
    if (typeof e != "object" || e === null)
      throw new Error('Every entry in "bundles" has to be an object with an "id"');
    const { id: t, ...r } = e;
    if (typeof t != "string")
      throw new Error('Every entry in "bundles" needs a string "id"');
    const n = {};
    for (const [s, o] of Object.entries(r)) {
      if (typeof o != "string" && typeof o != "number" && typeof o != "boolean")
        throw new Error(`Bundle metadata '${s}' of '${t}' is a ${typeof o}; only strings, numbers and booleans are allowed`);
      n[s] = o;
    }
    return Object.freeze({
      id: Fe(t),
      ...Object.keys(n).length > 0 ? { metadata: Object.freeze(n) } : {}
    });
  });
}
function Ts(i) {
  if (i === void 0)
    return {};
  if (typeof i != "object" || i === null || Array.isArray(i))
    throw new Error('Feature "configurations" has to be an object keyed by PID');
  const e = {};
  for (const [t, r] of Object.entries(i)) {
    if (typeof r != "object" || r === null || Array.isArray(r))
      throw new Error(`Configuration '${t}' has to be an object of properties`);
    e[t] = Object.freeze({ ...r });
  }
  return e;
}
function Ls(i) {
  if (i === void 0)
    return {};
  if (typeof i != "object" || i === null || Array.isArray(i))
    throw new Error('Feature "variables" has to be an object');
  const e = {};
  for (const [t, r] of Object.entries(i)) {
    if (r !== null && typeof r != "string" && typeof r != "number" && typeof r != "boolean")
      throw new Error(`Variable '${t}' is a ${typeof r}; a default has to be a string, a number, a boolean, or null for "the launcher must supply this"`);
    e[t] = r;
  }
  return e;
}
function Ns(i) {
  if (i === void 0)
    return {};
  if (typeof i != "object" || i === null || Array.isArray(i))
    throw new Error('Feature "extensions" has to be an object');
  const e = {};
  for (const [t, r] of Object.entries(i)) {
    if (typeof r != "object" || r === null)
      throw new Error(`Extension '${t}' has to be an object`);
    const n = r, s = _s(n.kind, t);
    switch (n.type) {
      case "text":
        if (!Array.isArray(n.text) || n.text.some((o) => typeof o != "string"))
          throw new Error(`Text extension '${t}' needs a "text" array of strings`);
        e[t] = Object.freeze({
          type: "text",
          kind: s,
          text: Object.freeze([...n.text])
        });
        break;
      case "json":
        if (!("json" in n))
          throw new Error(`JSON extension '${t}' needs a "json" value`);
        e[t] = Object.freeze({ type: "json", kind: s, json: n.json });
        break;
      case "artifacts":
        e[t] = Object.freeze({
          type: "artifacts",
          kind: s,
          artifacts: Object.freeze(Gn(n.artifacts))
        });
        break;
      default:
        throw new Error(`Extension '${t}' has type '${String(n.type)}'; expected 'text', 'json' or 'artifacts'`);
    }
  }
  return e;
}
function _s(i, e) {
  if (i === void 0)
    return "optional";
  if (i !== "mandatory" && i !== "optional" && i !== "transient")
    throw new Error(`Extension '${e}' has kind '${String(i)}'; expected 'mandatory', 'optional' or 'transient'`);
  return i;
}
function zn(i, e = {}) {
  const t = {
    "feature-resource-version": Me,
    id: fe(i.id)
  };
  return i.name !== void 0 && (t.name = i.name), i.description !== void 0 && (t.description = i.description), i.categories.length > 0 && (t.categories = [...i.categories]), i.complete && (t.complete = !0), i.docURL !== void 0 && (t.docURL = i.docURL), i.license !== void 0 && (t.license = i.license), i.scm !== void 0 && (t.scm = i.scm), i.vendor !== void 0 && (t.vendor = i.vendor), i.bundles.length > 0 && (t.bundles = i.bundles.map((r) => ({
    id: fe(r.id),
    ...r.metadata
  }))), Object.keys(i.configurations).length > 0 && (t.configurations = i.configurations), Object.keys(i.variables).length > 0 && (t.variables = i.variables), Object.keys(i.extensions).length > 0 && (t.extensions = i.extensions), JSON.stringify(t, void 0, e.indent ?? 2);
}
function sr(i, e = {}) {
  const t = [], r = /* @__PURE__ */ new Map();
  i.bundles.forEach((s, o) => {
    const a = fe(s.id), f = r.get(a);
    f !== void 0 ? t.push({ at: `bundles[${o}]`, problem: `'${a}' is already listed at ${f}` }) : r.set(a, o);
  });
  for (const s of ir(i, e.supplied))
    t.push({
      at: `variables.${s}`,
      problem: "declared without a default, so a value has to be supplied"
    });
  const n = new Set(e.handles ?? []);
  for (const [s, o] of Object.entries(i.extensions))
    o.kind === "mandatory" && !n.has(s) && t.push({
      at: `extensions.${s}`,
      problem: "is mandatory, and this consumer does not handle it"
    });
  return t;
}
const Wn = Object.freeze({
  readFeature: Un,
  writeFeature: zn,
  validateFeature: sr,
  resolveConfigurations: nr,
  missingVariables: ir,
  getId: (i, e) => ({ name: i, version: e }),
  parseId: Fe,
  formatId: fe
}), ce = "osgi.identity", or = "osgi.service", xe = "tsm.library", Xn = "1.5.0", Yn = "1.4.0", Hn = "1.6.0", Kn = "tsm.module", Ps = "resolve", Te = "system.bundle", Jn = "environment";
function Zn(i) {
  return i === void 0 || i === Ps;
}
function Qn(i) {
  const e = [
    {
      namespace: ce,
      attributes: {
        [ce]: i.id,
        type: Kn,
        version: i.version
      }
    }
  ];
  for (const t of i.provides ?? [])
    e.push({
      namespace: or,
      attributes: {
        // A list, as in the specification: one capability may cover several IDs
        objectClass: [t.id],
        ...t.properties
      }
    });
  return [...e, ...i.capabilities ?? []];
}
function ei(i) {
  const e = [];
  for (const t of i.dependencies ?? []) {
    const r = typeof t == "string" ? { id: t } : t;
    e.push({
      namespace: ce,
      filter: `(${ce}=${Se(r.id)})`,
      versionRange: r.versionRange,
      resolution: r.optional === !0 ? "optional" : "mandatory"
    });
  }
  for (const t of i.optionalDependencies ?? []) {
    const r = typeof t == "string" ? { id: t } : t;
    e.push({
      namespace: ce,
      filter: `(${ce}=${Se(r.id)})`,
      versionRange: r.versionRange,
      resolution: "optional"
    });
  }
  for (const t of i.requiresService ?? [])
    e.push({
      namespace: or,
      filter: `(objectClass=${Se(t.id)})`,
      // The runtime requirement may be mandatory while the resolution is not:
      // cardinality 0..n means the module runs with no provider at all
      resolution: t.optional === !0 || t.cardinality?.startsWith("0") ? "optional" : "mandatory"
    });
  for (const t of i.sharedDependencies ?? [])
    e.push({
      namespace: xe,
      filter: `(library=${Se(t.id)})`,
      versionRange: t.versionRange
    });
  return [...e, ...i.requirements ?? []];
}
function Se(i) {
  return i.replace(/[\\()*]/g, (e) => `\\${e}`);
}
function ti(i, e) {
  if (e.namespace !== i.namespace || !Zn(e.directives?.effective))
    return !1;
  const t = e.attributes ?? {};
  if (i.versionRange !== void 0) {
    const r = t.version;
    if (typeof r != "string" || !le.validRange(i.versionRange) || !le.satisfies(r, i.versionRange, { includePrerelease: !0 }))
      return !1;
  }
  return i.filter === void 0 ? !0 : qe(i.filter, { caseSensitive: !0 })(t);
}
function ri(i) {
  return (i instanceof Map ? [...i].map(([t, r]) => [t, r.version]) : Object.entries(i)).map(([t, r]) => ({
    namespace: xe,
    attributes: { library: t, version: r }
  }));
}
function ni(i = {}) {
  return {
    id: Te,
    name: "System Bundle",
    version: i.version ?? "0.0.0",
    entry: "System Bundle",
    exports: {},
    capabilities: [
      // What the runtime offers of its own accord. In OSGi this one comes from
      // the SCR bundle rather than from the framework; here the loader is both,
      // so the system bundle is where it belongs — and a module can require it
      // exactly as it would require Felix SCR
      {
        namespace: we,
        attributes: { [we]: kn, version: Xn }
      },
      // These two only when they are really there: a capability nobody can rely
      // on is worse than none, because a module would resolve and then find
      // nothing behind it
      ...i.metatype === !0 ? [{
        namespace: we,
        attributes: { [we]: Dn, version: Yn }
      }] : [],
      // Always there, as the feature service needs nothing from the application
      {
        namespace: Ee,
        attributes: {
          [Ee]: xn,
          version: Bn
        }
      },
      ...i.configurationAdmin === !0 ? [{
        namespace: Ee,
        attributes: {
          [Ee]: qn,
          version: Hn
        }
      }] : [],
      ...i.libraries ? ri(i.libraries) : [],
      ...i.capabilities ?? []
    ]
  };
}
function ii(i, e = {}) {
  const t = [
    ...i.flatMap((a) => Qn(a).map((f) => ({ provider: a.id, capability: f }))),
    ...(e.offered ?? []).map((a) => ({ provider: Jn, capability: a }))
  ], r = [], n = [], s = [], o = /* @__PURE__ */ new Set();
  for (const a of i)
    for (const f of ei(a)) {
      if (!Zn(f.effective))
        continue;
      const d = t.filter((p) => ti(f, p.capability)), c = { moduleId: a.id, requirement: f, wires: [] };
      if (s.push(c), d.length === 0) {
        if ((f.resolution ?? "mandatory") === "optional")
          continue;
        const p = t.some((j) => j.capability.namespace === f.namespace), m = {
          moduleId: a.id,
          requirement: f,
          reason: p ? "no-match" : "no-capability"
        };
        n.push(m), c.failure = m, o.add(a.id);
        continue;
      }
      const l = (f.cardinality ?? "single") === "multiple" ? d : [js(d)];
      for (const p of l) {
        const m = {
          requirer: a.id,
          requirement: f,
          provider: p.provider,
          capability: p.capability
        };
        r.push(m), c.wires.push(m);
      }
    }
  return {
    wires: r,
    unresolved: n,
    requirements: s,
    resolved: i.map((a) => a.id).filter((a) => !o.has(a))
  };
}
function js(i) {
  return i.reduce((e, t) => {
    const r = En(t.capability), n = En(e.capability);
    return r === void 0 || n === void 0 ? e : le.gt(r, n) ? t : e;
  });
}
function En(i) {
  const e = i.attributes?.version;
  return typeof e == "string" && le.valid(e) ? e : void 0;
}
function si(i, e) {
  return {
    requires: i.wires.filter((t) => t.requirer === e),
    provides: i.wires.filter((t) => t.provider === e)
  };
}
const oi = "tsm.configuration.admin", Wt = "~", Ae = "|";
function Le(i, e) {
  if (!e)
    return [i];
  const t = [i + Ae + e.id];
  return e.version !== void 0 && t.unshift(i + Ae + e.id + Ae + e.version), t.push(i), t;
}
const ai = "service.pid", ci = "service.factoryPid";
class fi {
  records = /* @__PURE__ */ new Map();
  constructor(e = []) {
    for (const t of e)
      this.records.set(t.pid, t);
  }
  load() {
    return [...this.records.values()];
  }
  save(e) {
    this.records.set(e.pid, e);
  }
  remove(e) {
    this.records.delete(e);
  }
}
class ks {
  prefix;
  constructor(e = "tsm.config.") {
    if (this.prefix = e, typeof localStorage > "u")
      throw new Error("LocalStorageConfigurationStore needs localStorage; use MemoryConfigurationStore or a store of your own outside the browser");
  }
  load() {
    const e = [];
    for (let t = 0; t < localStorage.length; t++) {
      const r = localStorage.key(t);
      if (r === null || !r.startsWith(this.prefix))
        continue;
      const n = localStorage.getItem(r);
      if (n !== null)
        try {
          e.push(JSON.parse(n));
        } catch {
        }
    }
    return e;
  }
  save(e) {
    localStorage.setItem(this.prefix + e.pid, JSON.stringify(e));
  }
  remove(e) {
    localStorage.removeItem(this.prefix + e);
  }
}
function Ds(i, e) {
  const t = /* @__PURE__ */ new Map();
  for (const [r, n] of Object.entries(e)) {
    const s = r.toLowerCase(), o = t.get(s);
    if (o !== void 0)
      throw new Error(`Configuration '${i}' has the keys '${o}' and '${r}', which differ only in case`);
    t.set(s, r);
    const a = Array.isArray(n) ? n : [n];
    for (const f of a) {
      const d = typeof f;
      if (d !== "string" && d !== "number" && d !== "boolean")
        throw new Error(`Configuration '${i}' property '${r}' is ${f === null ? "null" : d}; only strings, numbers, booleans and arrays of those can be stored and filtered on`);
    }
  }
}
function qs(i, e) {
  if (i === void 0)
    return !1;
  const t = Object.keys(i);
  return t.length !== Object.keys(e).length ? !1 : t.every((r) => {
    const n = i[r], s = e[r];
    return Array.isArray(n) && Array.isArray(s) ? n.length === s.length && n.every((o, a) => o === s[a]) : n === s;
  });
}
class Fs {
  entries = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  store;
  loaded;
  generated = 0;
  /**
   * The schemas values are checked against, when the host supplied a registry.
   *
   * A deliberate departure: in OSGi, Config Admin does not validate and Metatype
   * only describes, leaving the checking to whichever user interface writes the
   * values. Here a wrong value can be refused at the source instead, which is
   * worth more than the symmetry — and without a registry nothing changes.
   */
  metatype;
  constructor(e = {}) {
    this.store = e.store ?? new fi(), this.metatype = e.metatype, this.loaded = this.load();
  }
  /**
   * Refuse values a schema says are wrong.
   *
   * A PID without a schema passes: a configuration nobody described is not
   * thereby invalid.
   */
  assertValidAgainstSchema(e, t) {
    const r = this.metatype?.validate(e, t) ?? [];
    if (r.length === 0)
      return;
    const n = r.map((s) => `${s.attribute} ${s.message}`).join("; ");
    throw new Error(`Configuration '${e}' does not match its schema: ${n}`);
  }
  async load() {
    const e = await this.store.load();
    for (const t of e)
      this.entries.has(t.pid) || this.entries.set(t.pid, {
        pid: t.pid,
        factoryPid: t.factoryPid,
        properties: t.properties,
        changeCount: t.changeCount
      });
    for (const t of this.entries.values())
      t.properties !== void 0 && this.notify({ type: "updated", pid: t.pid, factoryPid: t.factoryPid });
  }
  /**
   * Resolves once the store's contents are available.
   *
   * `ModuleLoader.loadAll()` awaits this, so a component requiring
   * configuration is not parked for values that are already on disk.
   */
  async ready() {
    await this.loaded;
  }
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.delete(e);
  }
  notify(e) {
    for (const t of this.listeners)
      try {
        t.onConfigurationEvent(e);
      } catch {
      }
  }
  /**
   * The configuration for a PID, created empty if it does not exist yet — the
   * same conflation of get and create that OSGi's `getConfiguration()` has.
   *
   * A configuration without values is not delivered anywhere; only `update()`
   * makes it count. That is what lets a management UI list a PID it has never
   * configured.
   */
  getConfiguration(e) {
    return this.handleFor(this.entryFor(e));
  }
  /** The configuration for a PID, or undefined when there is none */
  findConfiguration(e) {
    const t = this.entries.get(e);
    return t ? this.handleFor(t) : void 0;
  }
  /**
   * The configuration for a PID as seen by one module, following the targeted
   * PID chain: most specific first, and the first one that has values wins.
   *
   * Without a target this is `findConfiguration`. With one it is what lets a
   * single PID mean different things to two versions of a module — the reason
   * targeted PIDs exist (CM 104.3.2).
   */
  findTargetedConfiguration(e, t) {
    for (const r of Le(e, t)) {
      const n = this.entries.get(r);
      if (n?.properties !== void 0)
        return this.handleFor(n);
    }
  }
  /**
   * The factory configurations of a PID as seen by one module.
   *
   * The chain works as for a single configuration, but stops at the first
   * targeted factory PID that has *any* configuration: a more specific factory
   * PID replaces the less specific set rather than adding to it, since a merge
   * would give the module instances it was targeted away from.
   */
  listTargetedFactoryConfigurations(e, t) {
    for (const r of Le(e, t)) {
      const n = this.listFactoryConfigurations(r);
      if (n.length > 0)
        return n;
    }
    return [];
  }
  /**
   * A named configuration of a factory PID (OSGi CM 1.6).
   *
   * The resulting PID is `factoryPid~name`, so it stays stable across restarts —
   * unlike {@link createFactoryConfiguration}, which generates one.
   */
  getFactoryConfiguration(e, t) {
    if (t.length === 0)
      throw new Error(`Factory configuration of '${e}' needs a name`);
    return this.handleFor(this.entryFor(e + Wt + t, e));
  }
  /**
   * A configuration of a factory PID under a generated name.
   *
   * Convenient for a configuration nobody has to find again; prefer
   * {@link getFactoryConfiguration} when it should survive a restart as itself.
   */
  createFactoryConfiguration(e) {
    let t;
    do
      t = String(++this.generated);
    while (this.entries.has(e + Wt + t));
    return this.getFactoryConfiguration(e, t);
  }
  /**
   * Every configuration that has values, optionally narrowed by an LDAP-style
   * filter over its properties — the same syntax a target filter uses.
   *
   * Returns an empty array when nothing matches. OSGi returns `null` here; that
   * is a documented wart of the API, not something worth copying.
   */
  listConfigurations(e) {
    const t = e === void 0 ? void 0 : qe(e);
    return [...this.entries.values()].filter((r) => r.properties !== void 0).filter((r) => t === void 0 || t(this.effectiveProperties(r))).map((r) => this.handleFor(r));
  }
  /** The configurations belonging to a factory PID, in creation order */
  listFactoryConfigurations(e) {
    return [...this.entries.values()].filter((t) => t.factoryPid === e && t.properties !== void 0).map((t) => this.handleFor(t));
  }
  entryFor(e, t) {
    let r = this.entries.get(e);
    return r || (r = { pid: e, factoryPid: t, changeCount: 0 }, this.entries.set(e, r)), r;
  }
  /**
   * What a consumer sees: the stored values plus the PID properties the admin
   * knows itself, as Config Admin adds `service.pid`.
   */
  effectiveProperties(e) {
    const t = { ...e.properties };
    return t[ai] = e.pid, e.factoryPid !== void 0 && (t[ci] = e.factoryPid), t;
  }
  handleFor(e) {
    const t = () => {
      if (e.deleted)
        throw new Error(`Configuration '${e.pid}' has been deleted`);
    };
    return {
      pid: e.pid,
      factoryPid: e.factoryPid,
      get changeCount() {
        return e.changeCount;
      },
      getProperties: () => e.properties === void 0 || e.deleted ? void 0 : this.effectiveProperties(e),
      update: async (r) => {
        if (t(), r !== void 0)
          Ds(e.pid, r), this.assertValidAgainstSchema(e.pid, r), e.properties = { ...r };
        else if (e.properties === void 0)
          throw new Error(`Configuration '${e.pid}' has no properties to re-deliver; call update(properties) first`);
        e.changeCount++, await this.store.save({
          pid: e.pid,
          factoryPid: e.factoryPid,
          properties: e.properties,
          changeCount: e.changeCount
        }), this.notify({ type: "updated", pid: e.pid, factoryPid: e.factoryPid });
      },
      updateIfDifferent: async (r) => (t(), qs(e.properties, r) ? !1 : (await this.handleFor(e).update(r), !0)),
      delete: async () => {
        t(), e.deleted = !0, this.entries.delete(e.pid), await this.store.remove(e.pid), this.notify({ type: "deleted", pid: e.pid, factoryPid: e.factoryPid });
      }
    };
  }
}
function xs(i) {
  return i;
}
const Bs = "~";
function Vs(i) {
  return (i.cardinality ?? "single") !== "single";
}
function Us(i) {
  return typeof i.cardinality == "number" ? i.cardinality : void 0;
}
class Gs {
  singletons = /* @__PURE__ */ new Map();
  factories = /* @__PURE__ */ new Map();
  /** Which module registered a PID, so a teardown can take its schemas with it */
  owners = /* @__PURE__ */ new Map();
  /**
   * Connect a description to a PID — OSGi's `@Designate`.
   *
   * @param options.factory The PID is a factory PID, so the description applies
   *   to every instance created from it. A user interface reads this as a licence
   *   to offer "add another one".
   * @param options.providedBy Module the declaration came from
   */
  designate(e, t, r = {}) {
    (r.factory === !0 ? this.factories : this.singletons).set(e, t), r.providedBy !== void 0 && this.owners.set(e, r.providedBy);
  }
  /** Withdraw the descriptions a module registered */
  removeAllOf(e) {
    for (const [t, r] of [...this.owners])
      r === e && (this.singletons.delete(t), this.factories.delete(t), this.owners.delete(t));
  }
  /** PIDs with a description of their own */
  getPids() {
    return [...this.singletons.keys()];
  }
  /** Factory PIDs, whose description applies to every configuration of them */
  getFactoryPids() {
    return [...this.factories.keys()];
  }
  /**
   * The description for a PID, with `%key` references resolved for a locale.
   *
   * A factory instance's PID (`factoryPid~name`) is answered with its factory's
   * description: that is what a user interface editing the instance needs, and
   * the instance has no description of its own.
   */
  getObjectClassDefinition(e, t) {
    const r = this.definitionFor(e);
    if (r)
      return t === void 0 ? r : di(r, t);
  }
  definitionFor(e) {
    const t = this.singletons.get(e) ?? this.factories.get(e);
    if (t)
      return t;
    const r = e.indexOf(Bs);
    if (!(r < 0))
      return this.factories.get(e.slice(0, r));
  }
  /** The locales a description has translations for */
  getLocales(e) {
    return Object.keys(this.definitionFor(e)?.localization ?? {});
  }
  /**
   * The declared default values of a PID.
   *
   * The loader merges these underneath a component's properties, so a component
   * reads a configured value or the declared default and never has to invent one.
   */
  defaults(e) {
    const t = this.definitionFor(e);
    if (!t)
      return {};
    const r = {};
    for (const [n, s] of Object.entries(t.attributes))
      s.default !== void 0 && (r[n] = s.default);
    return r;
  }
  /**
   * What is wrong with these values, according to the description.
   *
   * An empty array means they are acceptable. Every problem is reported, not just
   * the first, because a form wants to mark all its fields at once.
   *
   * Attributes the description does not mention are left alone: a configuration
   * may carry more than a schema knows, and `service.pid` always does.
   */
  validate(e, t) {
    const r = this.definitionFor(e);
    if (!r)
      return [];
    const n = [];
    for (const [s, o] of Object.entries(r.attributes)) {
      const a = t[s];
      if (a === void 0) {
        o.required !== !1 && o.default === void 0 && n.push({ attribute: s, message: "is required" });
        continue;
      }
      n.push(...zs(s, o, a));
    }
    return n;
  }
  /**
   * The values, with defaults filled in, or an error listing everything wrong.
   *
   * One call for the usual sequence a form goes through before writing.
   */
  coerce(e, t) {
    const r = { ...this.defaults(e), ...t };
    return { values: r, errors: this.validate(e, r) };
  }
}
function zs(i, e, t) {
  const r = [], n = Vs(e);
  if (n !== Array.isArray(t))
    return r.push({
      attribute: i,
      message: n ? "expects a list of values" : "expects a single value"
    }), r;
  const s = Array.isArray(t) ? [...t] : [t], o = Us(e);
  o !== void 0 && s.length > o && r.push({ attribute: i, message: `takes at most ${o} value(s)` });
  for (const a of s)
    r.push(...Ws(i, e, a));
  if (e.validate) {
    const a = e.validate(t);
    a !== void 0 && r.push({ attribute: i, message: a });
  }
  return r;
}
function Ws(i, e, t) {
  const r = [];
  switch (e.type) {
    case "boolean":
      typeof t != "boolean" && r.push({ attribute: i, message: "expects true or false" });
      break;
    case "number":
    case "integer":
      if (typeof t != "number" || Number.isNaN(t)) {
        r.push({ attribute: i, message: "expects a number" });
        break;
      }
      e.type === "integer" && !Number.isInteger(t) && r.push({ attribute: i, message: "expects a whole number" }), e.min !== void 0 && t < e.min && r.push({ attribute: i, message: `must be at least ${e.min}` }), e.max !== void 0 && t > e.max && r.push({ attribute: i, message: `must be at most ${e.max}` });
      break;
    case "string":
    case "password":
      if (typeof t != "string") {
        r.push({ attribute: i, message: "expects text" });
        break;
      }
      e.minLength !== void 0 && t.length < e.minLength && r.push({
        attribute: i,
        message: `must be at least ${e.minLength} character(s)`
      }), e.maxLength !== void 0 && t.length > e.maxLength && r.push({
        attribute: i,
        message: `must be at most ${e.maxLength} character(s)`
      });
      break;
  }
  if (e.options && !e.options.some((n) => n.value === t)) {
    const n = e.options.map((s) => String(s.value)).join(", ");
    r.push({ attribute: i, message: `must be one of: ${n}` });
  }
  return r;
}
function di(i, e) {
  const t = i.localization?.[e];
  if (!t)
    return i;
  const r = (s) => s !== void 0 && s.startsWith("%") ? t[s.slice(1)] ?? s : s, n = {};
  for (const [s, o] of Object.entries(i.attributes))
    n[s] = {
      ...o,
      name: r(o.name),
      description: r(o.description),
      options: o.options?.map((a) => ({
        ...a,
        label: r(a.label)
      }))
    };
  return {
    ...i,
    name: r(i.name),
    description: r(i.description),
    attributes: n
  };
}
const ui = "tsm.metatype", li = "tsm.component.factory", ar = "component.factory", hi = "component.name";
function Xs(i) {
  return `(${ar}=${i})`;
}
const Xt = "tsm.condition", be = "condition.id", cr = "true", pi = Object.freeze({}), Ys = `(${be}=${cr})`;
function Hs(i, e) {
  return { ...e, [be]: i };
}
function Ks(i) {
  return `(${be}=${i})`;
}
const oe = /* @__PURE__ */ new Map(), ue = {
  require(i) {
    const e = oe.get(i);
    if (!e) {
      const t = Array.from(oe.keys());
      throw new Error(`[TSM] Shared library not found: '${i}'
Available libraries: ${t.length > 0 ? t.join(", ") : "none"}
Make sure the host application has registered this library.`);
    }
    return e.exports;
  },
  register(i, e, t, r) {
    if (!K.valid(t))
      throw new Error(`[TSM] Invalid version '${t}' for library '${i}'. Must be valid semver (e.g., '3.4.0').`);
    const n = oe.get(i);
    n && console.warn(`[TSM] Overwriting shared library '${i}' (${n.version} → ${t})`), oe.set(i, {
      exports: e,
      version: t,
      providedBy: r
    }), console.debug(`[TSM] Registered: ${i}@${t}${r ? ` (by ${r})` : ""}`);
  },
  has(i) {
    return oe.has(i);
  },
  getVersion(i) {
    return oe.get(i)?.version;
  },
  satisfies(i, e) {
    const t = oe.get(i);
    return t ? K.satisfies(t.version, e) : !1;
  },
  getRegistered() {
    const i = /* @__PURE__ */ new Map();
    for (const [e, t] of oe)
      i.set(e, { version: t.version, providedBy: t.providedBy });
    return i;
  },
  validate(i) {
    const e = {
      valid: !0,
      missing: [],
      incompatible: []
    };
    for (const t of i) {
      const r = oe.get(t.id);
      r ? K.satisfies(r.version, t.versionRange) || (e.valid = !1, e.incompatible.push({
        id: t.id,
        required: t.versionRange,
        available: r.version
      })) : (e.valid = !1, e.missing.push(t.id));
    }
    return e;
  }
};
function Js() {
  if (typeof window < "u") {
    if (window.__tsm__)
      return console.warn("[TSM] Runtime already initialized, returning existing instance"), window.__tsm__;
    window.__tsm__ = ue;
  }
  return ue;
}
function Yt() {
  return typeof window < "u" && !!window.__tsm__;
}
function Zs(i, e) {
  if (i === null || typeof i != "object" && typeof i != "function")
    throw new Error(`Container for module '${e}' is ${i === null ? "null" : typeof i}; expected a module namespace, as an import() resolves to`);
}
const Rn = 10, Qs = /* @__PURE__ */ new Set([
  "resolving",
  "loading",
  "activating",
  "active",
  "unsatisfied"
]), eo = {
  loadTimeout: 1e4,
  continueOnError: !0,
  hotReload: !1,
  serviceRegistry: void 0,
  strictRequirements: !1,
  logger: void 0,
  configurationAdmin: void 0,
  metatype: void 0,
  systemCapabilities: [],
  sharedLibraries: "runtime",
  entryResolver: void 0
};
let Dt = class {
  prefix;
  constructor(e = "[TSM]") {
    this.prefix = e;
  }
  debug(e, ...t) {
    console.debug(`${this.prefix} ${e}`, ...t);
  }
  info(e, ...t) {
    console.info(`${this.prefix} ${e}`, ...t);
  }
  warn(e, ...t) {
    console.warn(`${this.prefix} ${e}`, ...t);
  }
  error(e, ...t) {
    console.error(`${this.prefix} ${e}`, ...t);
  }
};
function to(i) {
  return [
    ...Gt(i).map((e) => ({
      serviceId: e.serviceId,
      optional: e.optional
    })),
    ...zt(i).map((e) => ({
      serviceId: e.serviceId,
      optional: e.optional
    })),
    // A bound service is a reference too — the difference is only what a change
    // does: a method call instead of a rebuild
    ...Ce(i).map((e) => ({
      serviceId: e.serviceId,
      optional: e.optional
    }))
  ];
}
function ro(i, e) {
  return i.length === e.length && i.every((t, r) => t === e[r]);
}
const no = "\0singleton", io = "\0factory:";
function qt(i) {
  return i.factory && i.pid !== void 0 ? i.pid : no;
}
function so(i, e) {
  const t = Object.keys(i);
  return t.length !== Object.keys(e).length ? !1 : t.every((r) => {
    const n = i[r], s = e[r];
    return Array.isArray(n) && Array.isArray(s) ? n.length === s.length && n.every((o, a) => o === s[a]) : n === s;
  });
}
const oo = new Function("specifier", "return import(specifier)");
function ao(i) {
  return typeof i.activate == "function" || typeof i.deactivate == "function" ? !0 : Object.entries(i).some(([e, t]) => e !== "default" && typeof t == "function" && vs(t));
}
async function co(i) {
  try {
    return await oo(i);
  } catch (e) {
    if (e?.code === "ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING")
      return await import(
        /* @vite-ignore */
        i
      );
    throw e;
  }
}
class fo {
  modules = /* @__PURE__ */ new Map();
  manifests = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  resolver = new An();
  options;
  services;
  logger;
  serviceListener;
  /** Activations per cascade, to catch a module that flips between states forever */
  cascadeActivations = /* @__PURE__ */ new Map();
  disposed = !1;
  /**
   * Per module: how many providers each of its dynamic requirements had at the
   * last check. A count, not a flag, so a module consuming cardinality 0..n
   * hears about a provider joining or leaving an already non-empty set.
   */
  dynamicBindings = /* @__PURE__ */ new Map();
  /**
   * Per module: which registration served each of its requirements when it was
   * activated. Identity of the registration, not of the service object, so a
   * lazily bound provider is not instantiated just to be compared.
   */
  boundRegistrations = /* @__PURE__ */ new Map();
  /** Per module: services it declared in `provides` but never registered */
  declarationMismatches = /* @__PURE__ */ new Map();
  /**
   * Modules that must not run until enabled again.
   *
   * A separate dimension from the state, as in DS: a disabled module is not
   * broken and not waiting, it is switched off. Without this a manual stop is
   * pointless — the next reconcile would activate it right back.
   */
  disabled = /* @__PURE__ */ new Set();
  /**
   * Components switched off individually, keyed `moduleId/ClassName`.
   *
   * A dimension of its own, as with modules: a disabled component is not waiting
   * for anything, it is off. DS has the same pair (112.5.1), one level down.
   */
  disabledComponents = /* @__PURE__ */ new Set();
  /**
   * Per module: its `@component()` classes and what became of them.
   *
   * Two things at once, and deliberately so. A service reference names the
   * module that registered it, never the class inside it, so without this the
   * components of a bundle are invisible from outside — the view DS offers as
   * `scr:list`. And a component's lifecycle is no longer its module's:
   * configuration can hold one component back or instantiate it several times
   * while the module around it just runs.
   */
  componentRuntimes = /* @__PURE__ */ new Map();
  /** Where component configuration comes from, when the host supplied one */
  configurations;
  /** Where configuration schemas are collected, when the host supplied a registry */
  metatype;
  configurationListener;
  /**
   * Containers handed over instead of fetched, kept so a reload can restart a
   * module that has no URL to fetch.
   */
  preloaded = /* @__PURE__ */ new Map();
  /** Module-scoped registry facades, so a teardown can withdraw what a module registered */
  scopes = /* @__PURE__ */ new Map();
  /** Serializes reactions to registry events; they are async, the events are not */
  queue = Promise.resolve();
  pendingTasks = 0;
  constructor(e = {}) {
    this.options = { ...eo, ...e }, this.services = e.serviceRegistry ?? new _n(), this.logger = e.logger ?? new Dt(), this.publishTrueCondition(), this.publishComponentRuntime(), this.publishFeatureService(), this.observeServiceRegistry(), this.observeConfigurations(e.configurationAdmin), this.publishMetatype(e.metatype);
  }
  /**
   * Register the condition that always holds.
   *
   * DS treats `(osgi.condition.id=true)` as the default satisfying condition, so
   * there is always a baseline a filter can be written against — and so the
   * mechanism needs no special case for "no condition given". Registered once
   * here rather than lazily: a component asking for it must not depend on
   * whether some other component asked first.
   */
  publishTrueCondition() {
    this.services.register(Xt, pi, {
      providedBy: "tsm",
      properties: { [be]: cr }
    });
  }
  /**
   * Publish the component layer as a service, as SCR does.
   *
   * In OSGi, introspecting components goes through `ServiceComponentRuntime`
   * rather than through the framework, because SCR is a bundle like any other.
   * Keeping that here is what lets a component view or a diagnostics panel ship
   * as a module: without it the loader is the only way in, and every such tool
   * would have to live in the host.
   *
   * A facade over methods this object already has — deliberately, so there is one
   * implementation and not two that can disagree.
   */
  publishComponentRuntime() {
    const e = {
      getComponentDescriptions: (t) => this.getComponents(t),
      getComponentDescription: (t, r) => this.getComponents(t).find((n) => n.className === r),
      isComponentEnabled: (t, r) => !this.isComponentDisabled(t, r),
      disableComponent: (t, r) => this.disableComponent(t, r),
      enableComponent: (t, r) => this.enableComponent(t, r),
      getDisabledComponents: () => this.getDisabledComponents()
    };
    this.services.register(jn, e, { providedBy: "tsm" });
  }
  /**
   * Publish the feature service, as OSGi has it in the registry (159.11).
   *
   * Always: reading and writing features needs nothing from the application, and
   * a tool that builds them should not have to import the host's package. What
   * *installing* one needs — a resolver, a Configuration Admin — belongs to the
   * launcher and not here, which is the line the specification draws too.
   */
  publishFeatureService() {
    this.services.register(Fn, Wn, { providedBy: "tsm" });
  }
  /**
   * Take the schema registry and publish it, as the Metatype Service is a service
   * in OSGi too — so a configuration user interface can be a module.
   */
  publishMetatype(e) {
    e && (this.metatype = e, this.services.register(ui, e, { providedBy: "tsm" }));
  }
  /**
   * Watch configuration, and publish the admin as a service.
   *
   * Config Admin is a service in OSGi too, and SCR is one of its clients rather
   * than part of it: everything the loader does with configuration goes through
   * PIDs and these events.
   */
  observeConfigurations(e) {
    e && (this.configurations = e, this.configurationListener = {
      onConfigurationEvent: (t) => {
        this.enqueue(() => this.applyConfiguration(t));
      }
    }, e.addListener(this.configurationListener), this.services.register(oi, e, { providedBy: "tsm" }));
  }
  /**
   * Watch the registry for services that active modules depend on.
   *
   * Observation only: a withdrawal is reported, not acted upon. Tearing the
   * consumer down (or rebinding it) is a lifecycle change and belongs with the
   * `unsatisfied` state, not here.
   */
  observeServiceRegistry() {
    const e = this.services;
    typeof e.addListener == "function" && (this.serviceListener = {
      onServiceEvent: () => {
        this.enqueue(() => this.reconcile());
      }
    }, e.addListener(this.serviceListener));
  }
  /**
   * Queue a reaction to a registry event.
   *
   * Registry listeners are synchronous while activation is not, so reactions
   * cannot run inside the event. Serializing them also keeps a cascade in
   * order when a teardown withdraws further services.
   */
  enqueue(e) {
    this.disposed || (this.pendingTasks === 0 && this.cascadeActivations.clear(), this.pendingTasks++, this.queue = this.queue.then(e).catch((t) => {
      this.logger.error("Service event reaction failed:", t);
    }).finally(() => {
      this.pendingTasks--;
    }));
  }
  /**
   * Wait until every queued reaction has run, including those a reaction caused.
   *
   * `loadAll()`, `unloadModule()` and `reloadModule()` await this themselves.
   * After a single `loadModule()` it has to be called by the caller — or
   * `loadModule(manifest, { awaitCascade: true })` does it in one step:
   * activating one module can satisfy others, and that cascade runs in the queue.
   *
   * Do not call it from a lifecycle hook — a hook runs inside the cascade it
   * would be waiting for, which deadlocks. Whether a call sits inside a queued
   * reaction cannot be detected from here without async context tracking, so
   * this is a rule rather than a guard.
   */
  async settle() {
    for (; this.pendingTasks > 0; )
      await this.queue;
  }
  /**
   * Why a module cannot run right now: missing services, and dependencies
   * that are not active themselves.
   *
   * A module whose dependency is parked must wait too, otherwise it activates
   * against code that is not running.
   */
  unsatisfiedReasons(e, t = "activation") {
    const r = (e.requiresService ?? []).filter((o) => t === "activation" || o.policy !== "dynamic"), n = r.length > 0 ? this.services.checkRequirements(r).missing : [], s = [];
    for (const o of e.dependencies ?? []) {
      const a = typeof o == "string" ? { id: o } : o;
      a.optional || this.isLoaded(a.id) || s.push(a.id);
    }
    return { services: n, modules: s };
  }
  isSatisfied(e) {
    const t = this.unsatisfiedReasons(e);
    return t.services.length === 0 && t.modules.length === 0;
  }
  /**
   * Park a loaded module until what it needs is available.
   *
   * Kept apart from 'error': nothing failed, the module is simply not due yet.
   */
  park(e, t) {
    const { manifest: r } = e, n = [
      ...t.services,
      ...t.modules.map((s) => `module ${s}`)
    ];
    e.state = "unsatisfied", e.error = void 0, this.logger.info(`Module ${r.id} waits for: ${n.join(", ")}`), this.emit({
      type: "unsatisfied",
      moduleId: r.id,
      manifest: r,
      serviceIds: t.services,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Bring loaded modules in line with what is currently available.
   *
   * Two directions, in this order: active modules whose requirements are gone
   * are torn down, then parked modules that became satisfied are activated.
   * Tearing a module down withdraws its own services, which produces further
   * registry events — that is what carries a cascade to indirect consumers.
   */
  async reconcile() {
    this.disposed || (await this.parkUnsatisfiedActive(), await this.rebindGreedyRequirements(), await this.notifyDynamicChanges(), await this.activateSatisfiedPending(), await this.reconcileComponentReferences());
  }
  /**
   * Move active modules to a better-ranked provider where they asked for it.
   *
   * Without `policyOption: 'greedy'` a running module stays with the provider it
   * has, even after a higher-ranked one appears — the ranking then only decides
   * what a later lookup gets. This is DS' reluctant/greedy distinction.
   */
  async rebindGreedyRequirements() {
    for (const e of [...this.modules.values()]) {
      if (e.state !== "active")
        continue;
      const t = (e.manifest.requiresService ?? []).filter((s) => s.policyOption === "greedy");
      if (t.length === 0)
        continue;
      const r = e.manifest.id, n = this.boundRegistrations.get(r);
      if (n)
        for (const s of t) {
          const o = this.visibleRegistrationKey(s.id, s.target), a = n.get(s.id);
          if (!(o === void 0 || a === void 0 || o === a)) {
            if (s.policy === "dynamic") {
              await this.callDynamicHook(e, "onServiceUnbound", s.id), await this.callDynamicHook(e, "onServiceBound", s.id), n.set(s.id, o);
              continue;
            }
            this.logger.info(`Rebuilding ${r}: a better provider for ${s.id} appeared`), await this.deactivate(e), await this.activateLoaded(e);
            break;
          }
        }
    }
  }
  /**
   * Identity of the registration currently serving an ID, without resolving it.
   * Undefined when the registry predates references or nothing serves the ID.
   */
  visibleRegistrationKey(e, t) {
    const r = this.services;
    if (typeof r.getServiceReferences == "function")
      return r.getServiceReferences(e, t)[0]?.key;
  }
  captureBoundRegistrations(e) {
    const t = e.requiresService ?? [];
    if (t.length === 0)
      return;
    const r = /* @__PURE__ */ new Map();
    for (const n of t) {
      const s = this.visibleRegistrationKey(n.id, n.target);
      s !== void 0 && r.set(n.id, s);
    }
    this.boundRegistrations.set(e.id, r);
  }
  /**
   * Tell active modules about dynamic requirements that came or went.
   *
   * The module keeps running; dropping the reference is its job, which is the
   * contract `policy: 'dynamic'` expresses.
   */
  async notifyDynamicChanges() {
    for (const e of [...this.modules.values()]) {
      if (e.state !== "active")
        continue;
      const t = (e.manifest.requiresService ?? []).filter((o) => o.policy === "dynamic");
      if (t.length === 0)
        continue;
      const r = e.manifest.id, n = this.dynamicBindings.get(r) ?? /* @__PURE__ */ new Map(), s = this.countDynamicProviders(t);
      this.dynamicBindings.set(r, s);
      for (const o of t) {
        const a = n.get(o.id) ?? 0, f = s.get(o.id) ?? 0;
        f < a ? await this.callDynamicHook(e, "onServiceUnbound", o.id) : f > a && await this.callDynamicHook(e, "onServiceBound", o.id);
      }
    }
  }
  async callDynamicHook(e, t, r) {
    const n = e.lifecycle?.[t];
    if (n)
      try {
        await n.call(e.lifecycle, this.createContext(e), r);
      } catch (s) {
        this.logger.error(`${t} of ${e.manifest.id} failed for service ${r}:`, s);
      }
  }
  /**
   * Record which dynamic requirements are available, so the first reconcile
   * after activation does not report them as newly bound
   */
  captureDynamicBindings(e) {
    const t = (e.requiresService ?? []).filter((r) => r.policy === "dynamic");
    t.length !== 0 && this.dynamicBindings.set(e.id, this.countDynamicProviders(t));
  }
  /**
   * What each dynamic requirement currently sees.
   *
   * A collection counts providers, so it hears about one joining or leaving.
   * A single-valued requirement only counts presence — that a second provider
   * waits on the bench is none of its business, and reporting it would double
   * up with the greedy swap.
   */
  countDynamicProviders(e) {
    const t = /* @__PURE__ */ new Map();
    for (const r of e) {
      const n = this.countProviders(r.id, r.target);
      t.set(r.id, Cn(r) ? n : Math.min(n, 1));
    }
    return t;
  }
  countProviders(e, t) {
    const r = this.services;
    return typeof r.countProviders == "function" ? r.countProviders(e, t) : this.services.has(e) ? 1 : 0;
  }
  async parkUnsatisfiedActive() {
    let e = !0;
    for (; e; )
      e = await this.parkUnsatisfiedActiveOnce();
  }
  async parkUnsatisfiedActiveOnce() {
    let e = !1;
    for (const t of [...this.modules.values()]) {
      if (t.state !== "active")
        continue;
      const r = this.unsatisfiedReasons(t.manifest, "runtime");
      r.services.length === 0 && r.modules.length === 0 || (r.services.length > 0 && (this.logger.warn(`Service(s) ${r.services.join(", ")} withdrawn while ${t.manifest.id} is active and requires them`), this.emit({
        type: "service-withdrawn",
        moduleId: t.manifest.id,
        manifest: t.manifest,
        serviceIds: r.services,
        timestamp: /* @__PURE__ */ new Date()
      })), await this.deactivate(t), this.park(t, r), e = !0);
    }
    return e;
  }
  async activateSatisfiedPending() {
    let e = !0;
    for (; e; )
      e = await this.activateSatisfiedPendingOnce();
  }
  async activateSatisfiedPendingOnce() {
    let e = !1;
    for (const t of [...this.modules.values()])
      t.state === "unsatisfied" && (this.disabled.has(t.manifest.id) || this.isSatisfied(t.manifest) && (this.exceedsCascadeBudget(t) || (await this.activateLoaded(t), e = !0)));
    return e;
  }
  /**
   * Guard against a module that keeps activating and parking within one cascade
   * (for instance one that registers a service on activate and withdraws the
   * same service on deactivate while requiring it).
   */
  exceedsCascadeBudget(e) {
    const t = e.manifest.id, r = (this.cascadeActivations.get(t) ?? 0) + 1;
    if (this.cascadeActivations.set(t, r), r <= Rn)
      return !1;
    const n = new Error(`Module ${t} activated and parked ${Rn} times in one cascade; giving up to avoid an endless loop`);
    return e.state = "error", e.error = n, this.logger.error(n.message), this.emit({
      type: "error",
      moduleId: t,
      manifest: e.manifest,
      error: n,
      timestamp: /* @__PURE__ */ new Date()
    }), !0;
  }
  /**
   * Run activation for an already loaded module and record the outcome
   */
  async activateLoaded(e) {
    const { manifest: t } = e;
    e.state = "activating";
    try {
      await this.activate(e), this.captureDynamicBindings(t), this.captureBoundRegistrations(t), e.state = "active", this.emit({
        type: "activated",
        moduleId: t.id,
        manifest: t,
        timestamp: /* @__PURE__ */ new Date()
      }), this.logger.info(`Module ${t.id} activated`);
    } catch (r) {
      e.state = "error", e.error = r, this.emit({
        type: "error",
        moduleId: t.id,
        manifest: t,
        error: r,
        timestamp: /* @__PURE__ */ new Date()
      });
    }
  }
  /**
   * Detach from the service registry. Call when the loader is discarded,
   * otherwise its listener outlives it.
   */
  dispose() {
    this.disposed = !0;
    const e = this.services;
    this.serviceListener && typeof e.removeListener == "function" && e.removeListener(this.serviceListener), this.serviceListener = void 0, this.scopes.clear(), this.cascadeActivations.clear(), this.dynamicBindings.clear(), this.boundRegistrations.clear(), this.declarationMismatches.clear(), this.disabled.clear(), this.disabledComponents.clear(), this.preloaded.clear(), this.componentRuntimes.clear(), this.configurationListener && (this.configurations?.removeListener(this.configurationListener), this.configurationListener = void 0), this.configurations = void 0, this.metatype = void 0;
  }
  /**
   * Register module manifests
   */
  register(e) {
    for (const t of e)
      this.manifests.set(t.id, t), this.emit({
        type: "registering",
        moduleId: t.id,
        manifest: t,
        timestamp: /* @__PURE__ */ new Date()
      });
  }
  /**
   * Load all registered modules in dependency order
   */
  async loadAll() {
    await this.configurations?.ready();
    const e = Array.from(this.manifests.values()), t = this.resolver.resolve(e);
    t.circular.length > 0 && this.logger.warn("Circular dependencies detected:", t.circular), t.missing.length > 0 && this.logger.warn("Missing dependencies:", t.missing), this.logger.info(`Loading ${t.loadOrder.length} module(s)...`);
    for (const s of t.loadOrder) {
      if (this.disabled.has(s.id)) {
        this.logger.debug(`Skipping disabled module: ${s.id}`);
        continue;
      }
      try {
        await this.loadModule(s);
      } catch (o) {
        if (this.logger.error(`Failed to load module ${s.id}:`, o), !this.options.continueOnError)
          throw o;
      }
    }
    await this.settle();
    const r = this.getDeclarationMismatches();
    r.length > 0 && this.logger.warn(`${r.length} module(s) declared services they did not register:`, r.map((s) => `${s.moduleId} -> ${s.serviceIds.join(", ")}`));
    const n = this.getUnsatisfiedModules();
    n.length > 0 && this.logger.warn(`${n.length} module(s) waiting for dependencies:`, n.map((s) => `${s.moduleId} <- ${s.waitingFor.join(", ")}`));
  }
  /**
   * What the loaded modules declared as `@component()` classes, and what became
   * of each declaration.
   *
   * The view a service reference cannot give: it names the module that registered
   * a service, never the class inside it. DS offers the same listing as
   * `scr:list`, including the distinction between a declaration and its
   * configurations — a component may currently be running once, several times, or
   * not at all.
   *
   * @param moduleId Restricts the listing to one module
   */
  getComponents(e) {
    return (e !== void 0 ? [[e, this.componentRuntimes.get(e) ?? []]] : [...this.componentRuntimes.entries()]).flatMap(([r, n]) => n.map((s) => this.describeComponent(r, s)));
  }
  describeComponent(e, t) {
    const r = pn(t.ctor), n = [...t.instances.values()].map((s) => ({
      pid: s.pid,
      state: s.instance !== void 0 || this.isInstantiated(s) ? "active" : "satisfied",
      properties: s.properties
    }));
    if (n.length === 0) {
      const s = this.missingReferences(t);
      n.push(s.length > 0 ? { state: "unsatisfied-reference", waitingFor: s, properties: {} } : t.factory !== void 0 ? { state: "satisfied", properties: {} } : { state: "unsatisfied-configuration", properties: {} });
    }
    return {
      moduleId: e,
      className: t.className,
      disabled: this.isComponentDisabled(e, t.className),
      services: [...t.options.service ?? []],
      immediate: t.options.immediate ?? r !== void 0,
      hasActivate: r !== void 0,
      hasDeactivate: gn(t.ctor) !== void 0,
      hasModified: vn(t.ctor) !== void 0,
      references: t.references,
      collections: jt(t.ctor).map((s) => ({
        serviceId: s.serviceId,
        target: s.target,
        fieldOption: s.fieldOption
      })),
      satisfyingCondition: t.options.satisfyingCondition,
      factory: t.options.factory === void 0 ? void 0 : {
        name: t.options.factory,
        registered: t.factory !== void 0,
        instances: t.instances.size
      },
      configurationPid: t.pids,
      configurationPolicy: t.policy,
      configurations: n
    };
  }
  /**
   * Services declared in a manifest's `provides` that the module did not
   * register on activation.
   *
   * The resolver builds load-order edges from `provides`, so a declaration
   * nothing backs orders modules after a provider that never delivers. Query
   * this in CI to catch the drift where it is cheap to fix.
   */
  getDeclarationMismatches() {
    return [...this.declarationMismatches].map(([e, t]) => ({
      moduleId: e,
      serviceIds: t
    }));
  }
  /**
   * Modules that are loaded but waiting, with what each of them waits for.
   * The answer to "why is this module not running?".
   */
  getUnsatisfiedModules() {
    const e = [];
    for (const t of this.modules.values()) {
      if (t.state !== "unsatisfied")
        continue;
      const r = this.unsatisfiedReasons(t.manifest);
      e.push({
        moduleId: t.manifest.id,
        waitingFor: [
          ...r.services,
          ...r.modules.map((n) => `module ${n}`)
        ]
      });
    }
    return e;
  }
  /**
   * Load a single module.
   *
   * Returns once this module is loaded, activated or parked. Modules that become
   * satisfied *because* of it are activated in the queued cascade afterwards.
   *
   * @param options.awaitCascade Also wait for that cascade, so the whole picture
   *   is stable on return — the behaviour OSGi gets for free, where a service
   *   registration is delivered synchronously and `registerService()` returns
   *   with the consequences already applied. Off by default, and it must not be
   *   set from a lifecycle hook: a hook runs inside the cascade it would then
   *   wait for. There is no timeout — the loader knows how many reactions are
   *   outstanding, so waiting is exact rather than a guess.
   * @param options.container A module that is already imported, handed over
   *   instead of fetched from `manifest.entry`. For an application still bundling
   *   its modules with the host, and for tests, which then need no URL at all.
   *   `ModuleLoaderOptions.entryResolver` does the same for many modules at once.
   */
  async loadModule(e, t = {}) {
    if (e.id === Te)
      throw new Error(`'${Te}' stands for the runtime itself and cannot be loaded`);
    if (this.manifests.has(e.id) || this.register([e]), this.disabled.has(e.id)) {
      const s = this.modules.get(e.id);
      if (s)
        return this.logger.warn(`Module ${e.id} is disabled — enableModule() first`), s;
      throw new Error(`Module ${e.id} is disabled — enableModule() first`);
    }
    const r = this.modules.get(e.id);
    if (r && Qs.has(r.state))
      return r;
    const n = {
      manifest: e,
      state: "resolving",
      exports: /* @__PURE__ */ new Map(),
      loadedAt: /* @__PURE__ */ new Date()
    };
    this.modules.set(e.id, n);
    try {
      await this.ensureDependencies(e), this.validateSharedDependencies(e), n.state = "loading", this.emit({
        type: "loading",
        moduleId: e.id,
        manifest: e,
        timestamp: /* @__PURE__ */ new Date()
      }), await this.doLoad(n, t.container), n.state = "activating", this.emit({
        type: "loaded",
        moduleId: e.id,
        manifest: e,
        timestamp: /* @__PURE__ */ new Date()
      });
      const s = this.unsatisfiedReasons(e);
      if (s.services.length > 0 || s.modules.length > 0) {
        if (this.options.strictRequirements && s.services.length > 0)
          throw new Error(`Module ${e.id} requires services that are not available: ${s.services.join(", ")}`);
        return this.park(n, s), t.awaitCascade && await this.settle(), n;
      }
      return await this.activate(n), this.captureDynamicBindings(e), this.captureBoundRegistrations(e), n.state = "active", this.emit({
        type: "activated",
        moduleId: e.id,
        manifest: e,
        timestamp: /* @__PURE__ */ new Date()
      }), this.logger.info(`Module ${e.id} activated`), this.enqueue(() => this.reconcile()), t.awaitCascade && await this.settle(), n;
    } catch (s) {
      throw n.state = "error", n.error = s, this.emit({
        type: "error",
        moduleId: e.id,
        manifest: e,
        error: s,
        timestamp: /* @__PURE__ */ new Date()
      }), s;
    }
  }
  /**
   * Ensure all dependencies are loaded
   */
  async ensureDependencies(e) {
    for (const t of e.dependencies ?? []) {
      const r = typeof t == "string" ? t : t.id;
      if (!this.isLoaded(r)) {
        const n = this.manifests.get(r);
        if (!n)
          throw new Error(`Missing dependency: ${r}`);
        await this.loadModule(n);
      }
    }
  }
  /**
   * Validate that all shared library dependencies are available
   * Shared libraries are provided by the host via __tsm__.register()
   */
  validateSharedDependencies(e) {
    const t = e.sharedDependencies;
    if (!t || t.length === 0 || this.options.sharedLibraries === "import-map")
      return;
    if (!Yt())
      throw new Error(`Module '${e.id}' requires shared libraries (${t.map((n) => n.id).join(", ")}), but TSM runtime is not initialized. Call initTsmRuntime() and register shared libraries before loading modules.`);
    const r = ue.validate(t);
    if (!r.valid) {
      const n = [];
      if (r.missing.length > 0 && n.push(`Missing shared libraries: ${r.missing.join(", ")}`), r.incompatible.length > 0)
        for (const s of r.incompatible)
          n.push(`Incompatible version for '${s.id}': requires ${s.required}, but ${s.available} is available`);
      throw new Error(`Module '${e.id}' has unmet shared library dependencies:
` + n.map((s) => `  - ${s}`).join(`
`) + `

Available shared libraries:
` + Array.from(ue.getRegistered().entries()).map(([s, o]) => `  - ${s}@${o.version}`).join(`
`));
    }
    this.logger.debug(`Module ${e.id}: shared dependencies validated`, t.map((n) => `${n.id}@${n.versionRange}`));
  }
  /**
   * Actually load the module entry point
   */
  async doLoad(e, t) {
    const { manifest: r } = e, n = await this.loadEntry(r, t);
    if (e.container = n, n && typeof n == "object") {
      const s = n;
      if ((typeof s.activate == "function" || typeof s.deactivate == "function") && (e.lifecycle = s), s.default && typeof s.default == "object") {
        const o = s.default;
        (typeof o.activate == "function" || typeof o.deactivate == "function") && (e.lifecycle = o);
      }
    }
    for (const [s] of Object.entries(r.exports ?? {}))
      try {
        const o = await this.loadExport(r.id, s);
        e.exports.set(s, o);
      } catch (o) {
        this.logger.warn(`Failed to load export ${s} from ${r.id}:`, o);
      }
  }
  /**
   * Load module entry point via dynamic import
   */
  /**
   * Get hold of the module: from a container that was handed over, or by
   * importing its entry.
   *
   * Order: the container passed to `loadModule`, then what `entryResolver`
   * answers, then the URL. Nothing consults a global — a module used to be handed
   * over through `window[moduleId]`, which cost collisions with DOM ids and made
   * the loader unusable in Node, where `window` does not exist.
   */
  async loadEntry(e, t) {
    const r = t !== void 0 ? t : this.preloaded.get(e.id) ?? this.options.entryResolver?.(e);
    if (r !== void 0)
      return Zs(r, e.id), this.preloaded.set(e.id, r), r;
    try {
      const s = await co(e.entry);
      return ao(s) ? s : s.default ?? s;
    } catch (n) {
      throw new Error(`Failed to load module entry: ${e.entry} - ${n}`);
    }
  }
  /**
   * Load a specific export from a module
   */
  async loadExport(e, t) {
    const r = this.modules.get(e);
    if (r?.exports.has(t))
      return r.exports.get(t);
    throw new Error(`Export ${t} not found in module ${e}`);
  }
  /**
   * Activate a module (call lifecycle hook)
   */
  async activate(e) {
    const t = e.manifest;
    if (this.emit({
      type: "activating",
      moduleId: t.id,
      manifest: t,
      timestamp: /* @__PURE__ */ new Date()
    }), e.lifecycle?.activate) {
      const r = this.createContext(e);
      await e.lifecycle.activate(r);
    }
    if (await this.startComponents(e), t.provides && t.provides.length > 0) {
      const r = [], n = this.servicesAwaitingConfiguration(t.id);
      for (const s of t.provides)
        n.has(s.id) ? this.logger.info(`Module ${t.id} does not provide ${s.id} yet: its component waits for configuration`) : this.services.has(s.id) ? this.logger.info(`Module ${t.id} provides service: ${s.id} (${s.scope ?? "singleton"})`) : r.push(s.id);
      r.length > 0 ? (this.declarationMismatches.set(t.id, r), this.logger.warn(`Module ${t.id} declared service(s) it did not register: ${r.join(", ")}`), this.emit({
        type: "declaration-mismatch",
        moduleId: t.id,
        manifest: t,
        serviceIds: r,
        timestamp: /* @__PURE__ */ new Date()
      })) : this.declarationMismatches.delete(t.id);
    }
  }
  /**
   * Register and start the `@component()` classes a module exports.
   *
   * The declarative counterpart to registering services by hand in a module's
   * `activate` export: what a component offers stands on the class, so manifest
   * and code cannot drift apart.
   *
   * Both ways work side by side, and the imperative `activate` runs first: it may
   * set up what a component needs injected, whereas the reverse — a component
   * preparing something for `activate` — is what a declared service is for.
   */
  async startComponents(e) {
    const t = this.findComponents(e);
    if (t.length === 0)
      return;
    const r = {
      id: e.manifest.id,
      version: e.manifest.version
    }, n = t.map(({ ctor: a, options: f }) => ({
      ctor: a,
      options: f,
      className: a.name,
      target: r,
      references: to(a),
      pids: this.pidsOf(a, f),
      policy: f.configurationPolicy ?? "optional",
      instances: /* @__PURE__ */ new Map()
    }));
    this.componentRuntimes.set(e.manifest.id, n), this.designateSchemas(e.manifest.id, n);
    const s = [];
    let o = !0;
    for (; o; ) {
      o = !1;
      for (const a of n)
        if (!this.isComponentDisabled(e.manifest.id, a.className) && !(this.missingReferences(a).length > 0)) {
          if (a.options.factory !== void 0) {
            if (a.factory)
              continue;
            this.registerComponentFactory(e, a), o = !0;
            continue;
          }
          if (!(a.instances.size > 0)) {
            for (const f of this.configurationsFor(a))
              this.registerInstance(e, a, f), o = !0;
            a.instances.size > 0 && s.push(a);
          }
        }
    }
    for (const a of n) {
      if (a.instances.size > 0 || a.factory)
        continue;
      const f = this.missingReferences(a);
      this.logger.info(f.length > 0 ? `Component ${a.className} of ${e.manifest.id} waits for service(s): ${f.join(", ")}` : `Component ${a.className} of ${e.manifest.id} waits for configuration: ${a.pids.join(", ")}`);
    }
    for (const a of s)
      for (const f of [...a.instances.values()])
        await this.activateInstance(e, a, f);
  }
  /**
   * The configuration PIDs a component reads.
   *
   * Defaults to the class name, as DS defaults to the component name — so a
   * component is configurable without declaring anything, and the PID is
   * something a person can guess.
   */
  pidsOf(e, t) {
    const r = t.configurationPid;
    return r === void 0 ? [e.name] : Array.isArray(r) ? r : [r];
  }
  /**
   * Publish what each component declared about the shape of its configuration.
   *
   * The equivalent of bnd writing a Designate element next to the component
   * descriptor: nothing in the running system needs it, and a user interface
   * cannot be written without it.
   */
  designateSchemas(e, t) {
    const r = this.metatype;
    if (r)
      for (const n of t) {
        const s = n.options.configurationSchema;
        if (!(!s || n.policy === "ignore"))
          for (const o of n.pids) {
            const a = r.getObjectClassDefinition(o);
            a !== void 0 && a !== s && this.logger.warn(`Component ${n.className} describes ${o} as '${s.id}', which is already described as '${a.id}' — the later one wins`), r.designate(o, s, {
              factory: n.options.configurationFactory,
              providedBy: e
            });
          }
      }
  }
  /**
   * The declared defaults for a component's PIDs, in the same order the PIDs
   * merge, so a specific PID's default beats a shared one's.
   */
  declaredDefaults(e) {
    if (!this.metatype)
      return {};
    let t = {};
    for (const r of e.pids)
      t = { ...t, ...this.metatype.defaults(r) };
    return t;
  }
  /**
   * Which instances of a component its configuration calls for.
   *
   * Three outcomes, and they are what `configurationPolicy` means:
   * none when required configuration is missing, one for the ordinary case, and
   * one per configuration when a PID turns out to be a factory PID. In DS the
   * last one is not a separate feature either — it follows from the PID.
   */
  configurationsFor(e) {
    const t = e.policy === "ignore" ? {} : this.declaredDefaults(e), r = () => e.policy === "require" ? [] : [{ factory: !1, values: { ...t } }];
    if (e.policy === "ignore" || !this.configurations)
      return r();
    let n = { ...t }, s;
    for (const a of e.pids) {
      const f = this.configurations.findTargetedConfiguration(a, e.target), d = f?.getProperties();
      d && (n = { ...n, ...d }, s ??= f.pid);
    }
    const o = e.options.configurationFactory;
    if (o !== !1)
      for (const a of e.pids) {
        const f = this.configurations.listTargetedFactoryConfigurations(a, e.target);
        if (f.length !== 0)
          return f.map((d) => ({
            pid: d.pid,
            factory: !0,
            values: { ...n, ...d.getProperties() }
          }));
      }
    return o !== !0 && s !== void 0 ? [{ pid: s, factory: !1, values: n }] : r();
  }
  /**
   * What the services of one instance publish: what the component declared, with
   * its configuration merged over it.
   *
   * Configuration wins, as in DS — it is the later, deployment-time word on the
   * same question. Keys starting with a dot stay private to the component and
   * out of the service properties, also as in DS.
   */
  propertiesFor(e, t) {
    const r = { ...e };
    for (const [n, s] of Object.entries(t))
      n.startsWith(".") || (r[n] = s);
    return r;
  }
  /**
   * The ranking one instance registers with.
   *
   * `service.ranking` from configuration overrides what the class declared,
   * which is how DS lets deployment re-order providers without touching code.
   */
  rankingFor(e, t) {
    const r = t["service.ranking"];
    return typeof r == "number" ? r : e.ranking;
  }
  /**
   * The mandatory references of a component that nothing provides.
   *
   * Empty means it may run. This is where the component level lives: a missing
   * service used to throw and take the module's start with it — now the component
   * waits and the module keeps running, as DS has it (112.5.2).
   */
  missingReferences(e) {
    const t = new Set(mn(e.ctor).filter((s) => e.references.find((a) => a.serviceId === s.serviceId)?.optional === !0).map((s) => s.serviceId)), r = e.references.filter((s) => !s.optional && !t.has(s.serviceId) && !this.services.has(s.serviceId)).map((s) => s.serviceId), n = e.options.satisfyingCondition;
    return n !== void 0 && this.matchingConditions(n) === 0 && r.push(`condition ${n}`), r;
  }
  /**
   * How many registered conditions match a filter.
   *
   * An invalid filter is reported once and treated as unsatisfied: a component
   * whose condition cannot be parsed must not start as though it had none, and
   * throwing here would take the whole module's start with it.
   */
  matchingConditions(e) {
    try {
      return this.services.countProviders(Xt, e);
    } catch (t) {
      return this.logger.error(`Invalid satisfying condition '${e}':`, t), 0;
    }
  }
  /**
   * Start components whose references arrived, stop those whose references left.
   *
   * Runs on every registry event, next to the module-level reconciliation. A
   * component going down withdraws its own services, which is what carries the
   * cascade on — and the queue keeps that in order.
   */
  async reconcileComponentReferences() {
    for (const [e, t] of [...this.componentRuntimes]) {
      const r = this.modules.get(e);
      if (!(!r || r.state !== "active"))
        for (const n of t) {
          if (this.isComponentDisabled(e, n.className))
            continue;
          for (const o of [...n.instances.values()])
            this.applyCollections(r, n, o), await this.applyBindings(r, n, o);
          const s = this.missingReferences(n);
          if (s.length > 0) {
            n.factory && (this.logger.info(`Component factory ${n.options.factory} of ${e} goes: service(s) gone: ${s.join(", ")}`), await this.withdrawComponentFactory(r, n));
            for (const [o, a] of [...n.instances])
              this.logger.info(`Component ${n.className} of ${e} stops: service(s) gone: ${s.join(", ")}`), await this.stopInstance(r, n, o, a);
            continue;
          }
          if (n.options.factory !== void 0) {
            this.registerComponentFactory(r, n);
            continue;
          }
          if (!(n.instances.size > 0))
            for (const o of this.configurationsFor(n)) {
              const a = this.registerInstance(r, n, o);
              await this.activateInstance(r, n, a);
            }
        }
    }
  }
  /**
   * Bring an instance's `@injectAll()` collections up to date.
   *
   * Runs on every registry event, so a collection reflects the registry rather
   * than the moment the component was built. Which is the point: cardinality
   * 0..n is not a snapshot.
   */
  applyCollections(e, t, r) {
    const n = r.instance;
    if (!n)
      return;
    const s = this.scopeFor(e.manifest.id);
    for (const o of jt(t.ctor)) {
      let a;
      try {
        a = s.getServiceReferences(o.serviceId, o.target).map((d) => s.resolveReference(d)).filter((d) => d !== void 0);
      } catch (d) {
        this.logger.error(`Invalid target on ${t.className}.${String(o.propertyKey)}:`, d);
        continue;
      }
      const f = n[o.propertyKey];
      if (!(Array.isArray(f) && ro(f, a))) {
        if (o.fieldOption === "update") {
          if (Array.isArray(f)) {
            f.length = 0, f.push(...a);
            continue;
          }
          this.logger.warn(`${t.className}.${String(o.propertyKey)} declares fieldOption 'update' but is not an array, so it is replaced instead — initialise it with '= []'`);
        }
        n[o.propertyKey] = a;
      }
    }
  }
  /**
   * Tell a running instance about its `@bind()` services coming and going.
   *
   * This is what a dynamic reference buys: the component stays and is handed the
   * change, where a plain `@inject()` reference would mean a rebuild.
   *
   * Without an `@unbind()` method the loss is only reported: the component keeps
   * whatever it stored, which is stale. Stopping it instead would turn an optional
   * reference into a mandatory one, so the choice is the component's — a mandatory
   * reference does go down, since nothing could keep it consistent.
   */
  async applyBindings(e, t, r) {
    if (r.instance === void 0)
      return;
    const n = new Map(mn(t.ctor).map((s) => [s.serviceId, s.method]));
    for (const s of Ce(t.ctor)) {
      const o = this.services.has(s.serviceId), a = r.bound.has(s.serviceId);
      if (o && !a) {
        r.bound.add(s.serviceId), await this.callBinding(e, t, r, s.method, s.serviceId);
        continue;
      }
      if (!o && a) {
        r.bound.delete(s.serviceId);
        const f = n.get(s.serviceId);
        f !== void 0 ? await this.callBinding(e, t, r, f, s.serviceId) : this.logger.warn(`Component ${t.className} has no @unbind for ${s.serviceId}, so it still holds a service that is gone`);
      }
    }
  }
  /**
   * Register the factory of a factory component.
   *
   * Instead of the component's own services: nobody is meant to reach the
   * template, only the instances built from it. The factory is registered once
   * the component is satisfied and withdrawn when it stops being — with no
   * factory in the registry, nobody can ask for an instance of something that
   * cannot run, which is what DS means by the factory tracking satisfaction.
   */
  registerComponentFactory(e, t) {
    if (t.factory)
      return;
    const r = t.options.factory;
    if (r === void 0)
      return;
    t.policy === "require" && this.logger.warn(`Component ${t.className} is a factory component, so configurationPolicy 'require' does not apply — its instances are configured by whoever calls newInstance()`);
    const n = this.scopeFor(e.manifest.id), s = /* @__PURE__ */ new Map();
    let o = 0;
    const a = {
      name: r,
      get instances() {
        return [...s.values()];
      },
      newInstance: async (d = {}) => {
        const c = io + String(++o), l = { ...this.declaredDefaults(t), ...d }, p = this.registerInstance(e, t, { factory: !0, values: l }, c);
        await this.activateInstance(e, t, p, { force: !0 });
        const m = {
          get instance() {
            return p.instance;
          },
          properties: { ...l },
          dispose: async () => {
            s.delete(c) && await this.stopInstance(e, t, c, p);
          }
        };
        return s.set(c, m), m;
      }
    }, f = n.register(li, a, {
      ranking: t.options.ranking,
      properties: {
        ...t.options.properties,
        [ar]: r,
        [hi]: t.className
      }
    });
    t.factory = {
      registration: f,
      disposeAll: async () => {
        for (const d of [...s.values()].reverse())
          await d.dispose();
      }
    }, this.logger.info(`Component factory ${r} of ${e.manifest.id} registered (${t.className})`);
  }
  /**
   * Withdraw a factory and everything it built.
   *
   * The instances go too: they are instances of a component that can no longer
   * run, and nothing would ever reclaim them — their lifetime was the caller's
   * business only while the component was satisfied.
   */
  async withdrawComponentFactory(e, t) {
    const r = t.factory;
    r && (t.factory = void 0, await r.disposeAll(), r.registration.unregister(), this.logger.info(`Component factory ${t.options.factory} of ${e.manifest.id} withdrawn`));
  }
  /** Register the services of one component instance, without creating it yet */
  registerInstance(e, t, r, n = qt(r)) {
    const s = this.scopeFor(e.manifest.id), { options: o } = t, [a, ...f] = o.service ?? [], d = this.propertiesFor(o.properties, r.values), c = {};
    for (const m of o.service ?? [])
      c[m] = this.propertiesFor(o.propertiesById?.[m] ?? o.properties, r.values);
    const l = a === void 0 ? void 0 : s.bindClass(a, t.ctor, {
      implements: f,
      properties: d,
      propertiesById: c,
      ranking: this.rankingFor(o, r.values),
      scope: o.scope,
      // Only a factory configuration or a factory component makes this one of
      // several registrations of the class; for an ordinary PID it is the
      // class's one registration, and a repeated one should replace it
      instanceKey: r.factory ? r.pid ?? n : void 0
    }), p = {
      pid: r.pid,
      configuration: r.values,
      properties: d,
      registration: l,
      bound: /* @__PURE__ */ new Set()
    };
    return t.instances.set(n, p), p;
  }
  /**
   * Create a component instance and run its `@activate` method.
   *
   * Only for immediate components: one that merely offers a service waits until
   * somebody resolves it, and then the registry creates it.
   */
  async activateInstance(e, t, r, n = {}) {
    if (r.instance !== void 0)
      return;
    const s = pn(t.ctor), o = Ce(t.ctor), a = jt(t.ctor);
    if (!(n.force === !0 || (t.options.immediate ?? (s !== void 0 || o.length > 0 || a.length > 0))))
      return;
    const d = r.registration ? r.registration.resolve() : this.scopeFor(e.manifest.id).construct(t.ctor);
    d && (r.instance = d, this.applyCollections(e, t, r), await this.bindAvailable(e, t, r), s !== void 0 && await this.callComponentMethod(e, t, r, s));
  }
  /**
   * Hand the instance every `@bind()` service that is there, in declaration order.
   */
  async bindAvailable(e, t, r) {
    for (const n of Ce(t.ctor))
      r.bound.has(n.serviceId) || this.services.has(n.serviceId) && (r.bound.add(n.serviceId), await this.callBinding(e, t, r, n.method, n.serviceId));
  }
  /**
   * Call one bind or unbind method with the service and the component's context.
   *
   * A failure is logged and does not stop the rest: the component stays as it is,
   * which is what a dynamic reference promises.
   */
  async callBinding(e, t, r, n, s) {
    const o = r.instance;
    if (!o)
      return;
    const a = o[n];
    if (typeof a == "function")
      try {
        await a.call(o, this.services.get(s), this.componentContext(e, t, r));
      } catch (f) {
        this.logger.error(`${String(n)} of ${t.className} failed for ${s}:`, f);
      }
  }
  /** Run one of a component's lifecycle methods with its context */
  async callComponentMethod(e, t, r, n) {
    const s = r.instance;
    if (!s)
      return;
    const o = s[n];
    typeof o == "function" && await o.call(s, this.componentContext(e, t, r));
  }
  componentContext(e, t, r) {
    return {
      ...this.createContext(e),
      // A logger named after the component, not just its module: with several
      // components in one module, a line saying only which module it came from
      // makes the reader grep for the message. DS 112.3.12 gives a component a
      // logger under the component's own name for the same reason.
      // For a factory instance the PID is part of the name — one line per
      // instance is otherwise indistinguishable from the same line four times
      log: new Dt(r.pid !== void 0 && r.pid !== t.className ? `[${e.manifest.id}/${t.className}(${r.pid})]` : `[${e.manifest.id}/${t.className}]`),
      configuration: r.configuration,
      properties: r.properties,
      configurationPid: r.pid
    };
  }
  /**
   * Bring a component's instances in line with its configuration.
   *
   * The component lifecycle runs on its own here, which is the whole point: the
   * module around it stays active while one of its components waits for a PID,
   * is rebuilt, or gains a second instance. In OSGi that separation is the line
   * between the framework and SCR.
   */
  async applyConfiguration(e) {
    if (!(this.disposed || !this.configurations))
      for (const [t, r] of [...this.componentRuntimes]) {
        const n = this.modules.get(t);
        if (!(!n || n.state !== "active"))
          for (const s of r)
            this.affects(s, e) && await this.reconcileComponent(n, s);
      }
  }
  /** Whether an event concerns a component: its own PID, or its factory PID */
  affects(e, t) {
    if (e.policy === "ignore")
      return !1;
    const r = new Set(e.pids.flatMap((n) => Le(n, e.target)));
    return r.has(t.pid) || t.factoryPid !== void 0 && r.has(t.factoryPid);
  }
  async reconcileComponent(e, t) {
    const r = new Map(this.configurationsFor(t).map((n) => [qt(n), n]));
    for (const [n, s] of [...t.instances])
      r.has(n) || await this.stopInstance(e, t, n, s);
    for (const [n, s] of r) {
      const o = t.instances.get(n);
      if (!o) {
        const a = this.registerInstance(e, t, s);
        await this.activateInstance(e, t, a);
        continue;
      }
      await this.updateInstance(e, t, o, s);
    }
  }
  /**
   * Apply changed configuration to an instance that already exists.
   *
   * Three ways, in DS' order of preference: an instance that was never created
   * only needs its properties updated, one with a `@modified()` method is handed
   * the new values, and one without is torn down and built again.
   */
  async updateInstance(e, t, r, n) {
    const s = this.propertiesFor(t.options.properties, n.values);
    if (so(r.properties, s))
      return;
    const o = vn(t.ctor), a = r.instance !== void 0 || this.isInstantiated(r);
    if (a && o === void 0) {
      await this.stopInstance(e, t, qt(n), r);
      const d = this.registerInstance(e, t, n);
      await this.activateInstance(e, t, d);
      return;
    }
    r.pid = n.pid, r.configuration = n.values, r.properties = s;
    const f = {};
    for (const d of t.options.service ?? [])
      f[d] = this.propertiesFor(t.options.propertiesById?.[d] ?? t.options.properties, n.values);
    r.registration?.setProperties(s, {
      ranking: this.rankingFor(t.options, n.values),
      propertiesById: f
    }), a && o !== void 0 && await this.callComponentMethod(e, t, r, o);
  }
  /**
   * Whether the registry has built this instance, which it does for a delayed
   * component the moment a consumer resolves it — without telling the loader.
   */
  isInstantiated(e) {
    const t = e.registration;
    if (!t)
      return !1;
    const r = this.services;
    return typeof r.getServiceReferences != "function" ? !1 : r.getServiceReferences(t.serviceId).some((n) => n.key === t.key && n.instantiated);
  }
  /** Run one instance's `@deactivate` method and withdraw its services */
  async stopInstance(e, t, r, n) {
    t.instances.delete(r);
    const s = gn(t.ctor);
    if (s !== void 0 && n.instance)
      try {
        await this.callComponentMethod(e, t, n, s);
      } catch (o) {
        this.logger.error(`@deactivate of ${t.className} in ${e.manifest.id} failed:`, o);
      }
    n.registration?.unregister();
  }
  /** The key a component is switched off under */
  componentKey(e, t) {
    return `${e}/${t}`;
  }
  isComponentDisabled(e, t) {
    return this.disabledComponents.has(this.componentKey(e, t));
  }
  /**
   * Switch off one component, leaving its module and its siblings running.
   *
   * DS' enabled state, one level below a module's (112.5.1): the component's
   * services are withdrawn and its `@deactivate` runs, but nothing about it is
   * waiting — it is off, and only `enableComponent()` brings it back. Whatever
   * consumed its services reacts as it would to any withdrawal.
   */
  async disableComponent(e, t) {
    this.disabledComponents.add(this.componentKey(e, t));
    const r = this.modules.get(e), n = this.componentRuntimes.get(e)?.find((s) => s.className === t);
    if (!r || !n)
      return !1;
    for (const [s, o] of [...n.instances])
      await this.stopInstance(r, n, s, o);
    return this.logger.info(`Component ${t} of ${e} disabled`), await this.settle(), !0;
  }
  /** Let a component run again, if what it needs is there */
  async enableComponent(e, t) {
    return this.disabledComponents.delete(this.componentKey(e, t)) ? (this.logger.info(`Component ${t} of ${e} enabled`), this.enqueue(() => this.reconcile()), await this.settle(), !0) : !1;
  }
  /** Components switched off individually, as `moduleId/ClassName` */
  getDisabledComponents() {
    return [...this.disabledComponents];
  }
  /**
   * Services a module declares but cannot register yet, because the components
   * offering them require configuration that does not exist.
   */
  servicesAwaitingConfiguration(e) {
    const t = /* @__PURE__ */ new Set();
    for (const r of this.componentRuntimes.get(e) ?? [])
      if (!(r.instances.size > 0))
        for (const n of r.options.service ?? [])
          t.add(n);
    return t;
  }
  /** The exported classes of a module that declare `@component()` */
  findComponents(e) {
    const t = e.container;
    if (t === null || typeof t != "object")
      return [];
    const r = [];
    for (const n of Object.values(t)) {
      if (typeof n != "function")
        continue;
      const s = ms(n);
      s !== void 0 && r.push({ ctor: n, options: s });
    }
    return r;
  }
  /** Run the `@deactivate` methods of a module's components, newest first */
  async stopComponents(e) {
    const t = e.manifest.id, r = this.componentRuntimes.get(t);
    if (r) {
      this.componentRuntimes.delete(t), this.metatype?.removeAllOf(t);
      for (const n of [...r].reverse()) {
        await this.withdrawComponentFactory(e, n);
        for (const [s, o] of [...n.instances].reverse())
          await this.stopInstance(e, n, s, o);
      }
    }
  }
  /**
   * Deactivate a module
   */
  async deactivate(e) {
    if (this.emit({
      type: "deactivating",
      moduleId: e.manifest.id,
      manifest: e.manifest,
      timestamp: /* @__PURE__ */ new Date()
    }), e.state = "deactivating", e.lifecycle?.deactivate) {
      const r = this.createContext(e);
      await e.lifecycle.deactivate(r);
    }
    await this.stopComponents(e);
    const t = this.scopes.get(e.manifest.id)?.releaseAll() ?? [];
    t.length > 0 && this.logger.debug(`Withdrew service(s) of ${e.manifest.id}: ${t.join(", ")}`), this.dynamicBindings.delete(e.manifest.id), this.boundRegistrations.delete(e.manifest.id), this.declarationMismatches.delete(e.manifest.id), e.state = "stopped", this.emit({
      type: "deactivated",
      moduleId: e.manifest.id,
      manifest: e.manifest,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Create module context for lifecycle hooks
   */
  createContext(e) {
    return {
      manifest: e.manifest,
      getModule: (t) => this.getModuleExports(t),
      isModuleLoaded: (t) => this.isLoaded(t),
      services: this.scopeFor(e.manifest.id),
      log: new Dt(`[${e.manifest.id}]`)
    };
  }
  /**
   * The registry facade a module registers through
   */
  scopeFor(e) {
    let t = this.scopes.get(e);
    if (!t) {
      const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (const s of this.manifests.get(e)?.provides ?? [])
        s.ranking !== void 0 && r.set(s.id, s.ranking), s.properties !== void 0 && n.set(s.id, s.properties);
      t = new Pn(e, this.services, r, n), this.scopes.set(e, t);
    }
    return t;
  }
  /**
   * Unload a module
   */
  async unloadModule(e) {
    const t = this.modules.get(e);
    if (!t)
      return !1;
    const n = this.resolver.getDependents(e, Array.from(this.manifests.values())).filter((s) => this.isLoaded(s));
    return n.length > 0 ? (this.logger.warn(`Cannot unload ${e}: modules depend on it:`, n), !1) : (t.state === "active" && await this.deactivate(t), this.modules.delete(e), this.scopes.delete(e), this.disabled.delete(e), this.preloaded.delete(e), this.emit({
      type: "unloaded",
      moduleId: e,
      manifest: t.manifest,
      timestamp: /* @__PURE__ */ new Date()
    }), this.enqueue(() => this.reconcile()), await this.settle(), this.logger.info(`Module ${e} unloaded`), !0);
  }
  /**
   * Reload a module (hot reload)
   */
  async reloadModule(e) {
    if (!this.options.hotReload)
      throw new Error("Hot reload is not enabled");
    if (!this.modules.get(e))
      throw new Error(`Module not loaded: ${e}`);
    this.logger.info(`Reloading module ${e}...`);
    const r = new Map([e, ...this.resolver.getTransitiveDependents(e, Array.from(this.manifests.values()))].filter((o) => this.preloaded.has(o)).map((o) => [o, this.preloaded.get(o)])), n = this.resolver.getTransitiveDependents(e, Array.from(this.manifests.values())).filter((o) => this.modules.has(o));
    for (const o of [...n].reverse())
      if (!await this.unloadModule(o))
        throw new Error(`Cannot reload ${e}: dependent ${o} could not be unloaded`);
    if (!await this.unloadModule(e))
      throw new Error(`Cannot reload ${e}: it could not be unloaded`);
    const s = this.manifests.get(e);
    r.has(e) || (s.entry = `${s.entry.split("?")[0]}?t=${Date.now()}`), await this.loadModule(s, { container: r.get(e) });
    for (const o of n) {
      const a = this.manifests.get(o);
      a && await this.loadModule(a, { container: r.get(o) });
    }
    await this.settle(), this.logger.info(`Module ${e} reloaded`);
  }
  /**
   * Check if a module is loaded
   */
  isLoaded(e) {
    return this.modules.get(e)?.state === "active";
  }
  /**
   * Get a loaded module
   */
  getModule(e) {
    return this.modules.get(e);
  }
  /**
   * Get exports from a loaded module
   */
  getModuleExports(e) {
    const t = this.modules.get(e);
    if (!t)
      return;
    const r = {};
    for (const [n, s] of t.exports)
      r[n] = s;
    return r;
  }
  /**
   * Stop a module and keep it stopped.
   *
   * Deactivating alone would not last: the module is satisfied, so the next
   * reconcile activates it again. A disabled module stays stopped until
   * `enableModule()`, which is what makes a manual stop meaningful — the
   * `enabled` flag of DS components.
   *
   * Its services are withdrawn, so consumers are parked in the usual cascade.
   */
  async disableModule(e) {
    if (!this.manifests.has(e))
      return !1;
    this.disabled.add(e);
    const t = this.modules.get(e);
    return t && t.state === "active" && await this.deactivate(t), this.enqueue(() => this.reconcile()), await this.settle(), this.logger.info(`Module ${e} disabled`), !0;
  }
  /**
   * Allow a disabled module to run again. It activates as soon as what it needs
   * is available — immediately, if that is already the case.
   */
  async enableModule(e) {
    if (!this.disabled.delete(e))
      return !1;
    const t = this.manifests.get(e);
    if (t && !this.modules.has(e))
      return await this.loadModule(t, { awaitCascade: !0 }), this.logger.info(`Module ${e} enabled`), !0;
    const r = this.modules.get(e);
    return r && r.state === "stopped" && this.park(r, this.unsatisfiedReasons(r.manifest)), this.enqueue(() => this.reconcile()), await this.settle(), this.logger.info(`Module ${e} enabled`), !0;
  }
  /** Whether a module is switched off */
  isDisabled(e) {
    return this.disabled.has(e);
  }
  /** Every module that is currently switched off */
  getDisabledModules() {
    return [...this.disabled];
  }
  /**
   * Which modules declared a requirement on a service, and how.
   *
   * The counterpart to `getBindingInfo().providedBy`: that answers who offers a
   * service, this answers who asked for it — `inspect service` in OSGi terms.
   * Derived from the manifests, so it also covers modules that are not running.
   */
  getServiceConsumers(e) {
    const t = [];
    for (const r of this.manifests.values()) {
      const n = r.requiresService?.find((s) => s.id === e);
      n && t.push({
        moduleId: r.id,
        state: this.modules.get(r.id)?.state ?? "not loaded",
        requirement: n
      });
    }
    return t;
  }
  /**
   * Every registered manifest, whether the module is loaded or not.
   *
   * `getLoadedModuleIds()` answers what is running; this answers what is known,
   * which is what a listing needs in order to show a module as not loaded.
   */
  /**
   * Wire the registered manifests against each other (Core 3.3).
   *
   * Static: it reads manifests, not the running system, and answers whether a
   * module *could* run. A service capability is a promise at this point — that it
   * is kept is what `requiresService` checks at runtime.
   */
  getWiring() {
    return ii([...this.getManifests(), this.getSystemBundle()]);
  }
  /**
   * The module standing for the runtime itself, as OSGi's system bundle does.
   *
   * It carries what the environment brings: the shared libraries the host
   * registered, plus whatever `systemCapabilities` declares. Without it a module
   * with `sharedDependencies` could never resolve — its requirement comes from its
   * manifest while the library lives outside the model.
   *
   * Not part of `getManifests()`: that answers what was registered, and this was
   * not. It is not loadable either.
   *
   * With `sharedLibraries: 'import-map'` the libraries are missing from it, since
   * the browser resolves those specifiers and the loader is never told which ones
   * exist; `generateImportMap()` checks them instead.
   */
  getSystemBundle() {
    const e = this.options.sharedLibraries !== "import-map" && Yt() ? ue.getRegistered() : void 0;
    return ni({
      libraries: e,
      capabilities: this.options.systemCapabilities,
      // What this loader was actually given, so a module requiring it resolves
      // against the truth rather than against the package's feature list
      metatype: this.metatype !== void 0,
      configurationAdmin: this.configurations !== void 0
    });
  }
  /**
   * What a module is wired to, and what is wired to it — Gogo's `inspect`.
   */
  getModuleWiring(e) {
    return si(this.getWiring(), e);
  }
  /**
   * Requirements that no registered manifest can ever satisfy.
   *
   * The difference to `getUnsatisfiedModules()` is the one that matters in
   * practice: that reports a module *waiting*, this one reports a module waiting
   * **in vain**, because nothing among the manifests even promises what it needs.
   */
  getUnresolvedModules() {
    return this.getWiring().unresolved;
  }
  getManifests() {
    return Array.from(this.manifests.values());
  }
  /**
   * Get all loaded module IDs
   */
  getLoadedModuleIds() {
    return Array.from(this.modules.keys()).filter((e) => this.isLoaded(e));
  }
  /**
   * Get service registry
   */
  getServiceRegistry() {
    return this.services;
  }
  /**
   * Add event listener
   */
  addEventListener(e) {
    this.listeners.add(e);
  }
  /**
   * Remove event listener
   */
  removeEventListener(e) {
    this.listeners.delete(e);
  }
  /**
   * Emit an event
   */
  emit(e) {
    for (const t of this.listeners)
      try {
        t.onModuleEvent(e);
      } catch (r) {
        this.logger.error("Event listener error:", r);
      }
  }
}
const uo = {
  fetchTimeout: 1e4,
  fetchFn: (i, e) => fetch(i, e),
  logger: void 0,
  cacheTtl: 300 * 1e3
  // 5 minutes
};
class lo {
  prefix;
  constructor(e = "[TSM Registry]") {
    this.prefix = e;
  }
  debug(e, ...t) {
    console.debug(`${this.prefix} ${e}`, ...t);
  }
  info(e, ...t) {
    console.info(`${this.prefix} ${e}`, ...t);
  }
  warn(e, ...t) {
    console.warn(`${this.prefix} ${e}`, ...t);
  }
  error(e, ...t) {
    console.error(`${this.prefix} ${e}`, ...t);
  }
}
class ho {
  repositories = /* @__PURE__ */ new Map();
  discovered = /* @__PURE__ */ new Map();
  listeners = /* @__PURE__ */ new Set();
  options;
  logger;
  // Caches
  indexCache = /* @__PURE__ */ new Map();
  manifestCache = /* @__PURE__ */ new Map();
  constructor(e = {}) {
    this.options = { ...uo, ...e }, this.logger = e.logger ?? new lo();
  }
  /**
   * Add a plugin repository
   */
  addRepository(e) {
    const t = {
      ...e,
      url: e.url.replace(/\/$/, ""),
      enabled: e.enabled ?? !0,
      priority: e.priority ?? 0
    };
    this.repositories.set(e.id, t), this.logger.info(`Added repository: ${e.name} (${e.url})`), this.emit({
      type: "repository-added",
      repository: t,
      timestamp: /* @__PURE__ */ new Date()
    });
  }
  /**
   * Remove a plugin repository
   */
  removeRepository(e) {
    const t = this.repositories.get(e);
    return t ? (this.repositories.delete(e), this.discovered.delete(e), this.emit({
      type: "repository-removed",
      repository: t,
      timestamp: /* @__PURE__ */ new Date()
    }), this.logger.info(`Removed repository: ${t.name}`), !0) : !1;
  }
  /**
   * Get all configured repositories
   */
  getRepositories() {
    return Array.from(this.repositories.values());
  }
  /**
   * Get a specific repository
   */
  getRepository(e) {
    return this.repositories.get(e);
  }
  /**
   * Discover all modules from all enabled repositories
   */
  async discoverAll() {
    const e = [], t = Array.from(this.repositories.values()).filter((r) => r.enabled).sort((r, n) => (n.priority ?? 0) - (r.priority ?? 0));
    for (const r of t)
      try {
        const n = await this.discoverFromRepository(r);
        e.push(...n);
      } catch (n) {
        this.logger.error(`Failed to discover from ${r.name}:`, n), this.emit({
          type: "discovery-error",
          repository: r,
          error: n,
          timestamp: /* @__PURE__ */ new Date()
        });
      }
    return e;
  }
  /**
   * Discover modules from a specific repository
   */
  async discoverFromRepository(e) {
    this.logger.debug(`Discovering modules from ${e.name}...`);
    const t = await this.fetchIndex(e);
    this.logger.debug(`Found ${t.modules.length} modules in ${e.name}`);
    const r = [];
    for (const n of t.modules)
      try {
        const s = await this.fetchManifest(e, n);
        s.entry.startsWith("http") || (s.entry = `${e.url}/${n}/${s.entry}`);
        const o = {
          manifest: s,
          repository: e,
          manifestUrl: `${e.url}/${n}/manifest.json`
        };
        r.push(o);
      } catch (s) {
        this.logger.warn(`Failed to fetch manifest for ${n}:`, s);
      }
    return this.discovered.set(e.id, r), this.emit({
      type: "modules-discovered",
      repository: e,
      modules: r,
      timestamp: /* @__PURE__ */ new Date()
    }), this.logger.info(`Discovered ${r.length} modules from ${e.name}`), r;
  }
  /**
   * Get all discovered modules (from cache)
   */
  getDiscoveredModules() {
    const e = [];
    for (const t of this.discovered.values())
      e.push(...t);
    return e;
  }
  /**
   * Get manifests for all discovered modules
   * Deduplicates by ID, keeping highest version from highest priority repo
   */
  getManifests() {
    const e = /* @__PURE__ */ new Map(), t = Array.from(this.repositories.values()).sort((r, n) => (n.priority ?? 0) - (r.priority ?? 0));
    for (const r of t) {
      const n = this.discovered.get(r.id) ?? [];
      for (const { manifest: s } of n) {
        const o = e.get(s.id);
        o ? r.priority === o.priority && K.gt(s.version, o.manifest.version) && e.set(s.id, { manifest: s, priority: r.priority ?? 0 }) : e.set(s.id, { manifest: s, priority: r.priority ?? 0 });
      }
    }
    return Array.from(e.values()).map((r) => r.manifest);
  }
  /**
   * Find a specific module by ID
   */
  findModule(e, t) {
    const r = [];
    for (const n of this.discovered.values())
      for (const s of n)
        s.manifest.id === e && (!t || K.satisfies(s.manifest.version, t)) && r.push(s);
    if (r.length !== 0)
      return r.sort((n, s) => K.rcompare(n.manifest.version, s.manifest.version))[0];
  }
  /**
   * Find all versions of a module
   */
  findModuleVersions(e) {
    const t = [];
    for (const r of this.discovered.values())
      for (const n of r)
        n.manifest.id === e && t.push(n);
    return t.sort((r, n) => K.rcompare(r.manifest.version, n.manifest.version));
  }
  /**
   * Check for updates to currently loaded modules
   */
  async checkUpdates(e) {
    await this.discoverAll();
    const t = [];
    for (const r of e) {
      const n = this.findModule(r.id);
      n && K.gt(n.manifest.version, r.version) && t.push({
        moduleId: r.id,
        currentVersion: r.version,
        availableVersion: n.manifest.version,
        repository: n.repository
      });
    }
    return t.length > 0 && this.emit({
      type: "update-available",
      updates: t,
      timestamp: /* @__PURE__ */ new Date()
    }), t;
  }
  /**
   * Fetch repository index
   */
  async fetchIndex(e) {
    const t = `${e.url}/index.json`, r = this.indexCache.get(t);
    if (r && this.isCacheValid(r))
      return r.data;
    const n = await this.fetchWithTimeout(t, e.token);
    if (!n.ok)
      throw new Error(`Failed to fetch index: ${n.status} ${n.statusText}`);
    const s = await n.json();
    if (!s.modules || !Array.isArray(s.modules))
      throw new Error("Invalid repository index: missing modules array");
    return this.indexCache.set(t, { data: s, timestamp: Date.now() }), s;
  }
  /**
   * Fetch module manifest
   */
  async fetchManifest(e, t) {
    const r = `${e.url}/${t}/manifest.json`, n = this.manifestCache.get(r);
    if (n && this.isCacheValid(n))
      return n.data;
    const s = await this.fetchWithTimeout(r, e.token);
    if (!s.ok)
      throw new Error(`Failed to fetch manifest: ${s.status} ${s.statusText}`);
    const o = await s.json();
    if (!o.id || !o.name || !o.version || !o.entry)
      throw new Error(`Invalid manifest for ${t}: missing required fields`);
    return this.manifestCache.set(r, { data: o, timestamp: Date.now() }), o;
  }
  /**
   * Fetch with timeout and optional auth
   */
  async fetchWithTimeout(e, t) {
    const r = new AbortController(), n = setTimeout(() => r.abort(), this.options.fetchTimeout);
    try {
      const s = {};
      return t && (s.Authorization = `Bearer ${t}`), await this.options.fetchFn(e, {
        headers: s,
        signal: r.signal
      });
    } finally {
      clearTimeout(n);
    }
  }
  /**
   * Check if cache entry is still valid
   */
  isCacheValid(e) {
    return this.options.cacheTtl === 0 ? !1 : Date.now() - e.timestamp < this.options.cacheTtl;
  }
  /**
   * Clear all caches
   */
  clearCache() {
    this.indexCache.clear(), this.manifestCache.clear(), this.logger.debug("Cache cleared");
  }
  /**
   * Add event listener
   */
  addEventListener(e) {
    this.listeners.add(e);
  }
  /**
   * Remove event listener
   */
  removeEventListener(e) {
    this.listeners.delete(e);
  }
  /**
   * Emit event to listeners
   */
  emit(e) {
    for (const t of this.listeners)
      try {
        t.onRegistryEvent(e);
      } catch (r) {
        this.logger.error("Registry event listener error:", r);
      }
  }
}
function po(i) {
  return i;
}
function gi(i) {
  const e = {};
  for (const t of i)
    for (const r of t.capabilities ?? []) {
      if (r.namespace !== xe)
        continue;
      const n = r.attributes?.library;
      if (typeof n != "string")
        continue;
      const s = r.attributes?.version;
      e[n] = {
        // The module's own entry is where the package lives: a library bundle is
        // the package, so there is nothing else it could point at
        url: t.entry,
        version: typeof s == "string" ? s : void 0,
        moduleId: t.id
      };
    }
  return e;
}
function go(i, e = {}) {
  const t = {}, r = [], n = [], s = [], o = gi(i);
  for (const [a, f] of Object.entries(o)) {
    if (e[a] === void 0)
      continue;
    const d = e[a];
    s.push({
      library: a,
      moduleId: f.moduleId,
      moduleVersion: f.version,
      hostVersion: typeof d == "string" ? void 0 : d.version
    });
  }
  for (const a of i)
    for (const f of a.sharedDependencies ?? []) {
      const d = e[f.id] ?? o[f.id];
      if (d === void 0) {
        r.push({
          moduleId: a.id,
          library: f.id,
          versionRange: f.versionRange
        });
        continue;
      }
      const c = typeof d == "string" ? { url: d } : d;
      if (c.version !== void 0 && le.validRange(f.versionRange) && !le.satisfies(c.version, f.versionRange, { includePrerelease: !0 })) {
        n.push({
          moduleId: a.id,
          library: f.id,
          versionRange: f.versionRange,
          offered: c.version
        });
        continue;
      }
      t[f.id] = c.url;
    }
  return { importMap: { imports: t }, missing: r, incompatible: n, shadowed: s };
}
function mo(i) {
  return `<script type="importmap">
${JSON.stringify(i, null, 2).replace(/<\/script/gi, "<\\/script")}
<\/script>`;
}
function vo(i, e = document) {
  if (e.querySelector('script[type="importmap"]') !== null)
    return !1;
  const t = e.createElement("script");
  return t.type = "importmap", t.textContent = JSON.stringify(i), e.head.appendChild(t), !0;
}
async function yo(i, e) {
  const { loader: t, configurationAdmin: r, resolve: n } = e, s = fe(i.id), o = sr(i, {
    supplied: e.variables,
    handles: e.handles
  });
  if (o.length > 0)
    throw new Error(`Feature ${s} cannot be installed:
` + o.map((p) => `  ${p.at}: ${p.problem}`).join(`
`));
  const a = nr(i, e.variables), f = Object.keys(a);
  if (f.length > 0 && !r)
    throw new Error(`Feature ${s} carries configuration for ${f.length} PID(s) but no Configuration Admin was given — its components would start on defaults`);
  const d = [], c = [];
  for (const p of i.bundles) {
    const m = await n(p.id);
    m ? d.push(m) : c.push(fe(p.id));
  }
  if (c.length > 0)
    throw new Error(`Feature ${s} lists module(s) nothing provides: ${c.join(", ")}`);
  for (const [p, m] of Object.entries(a))
    await r.getConfiguration(p).update(m);
  t.register(d), e.load !== !1 && await t.loadAll(), await t.settle();
  const l = e.load === !1 ? [] : d.map((p) => p.id).filter((p) => t.getModule(p)?.state === "active");
  return { feature: i, manifests: d, loaded: l, configured: f };
}
function mi(i, e) {
  const t = new Set(i.bundles.map((n) => n.id.name));
  return e.loader.getWiring().unresolved.filter((n) => t.has(n.moduleId)).map((n) => `${n.moduleId}: ${n.requirement.namespace}` + (n.requirement.filter ? ` ${n.requirement.filter}` : "") + ` (${n.reason})`);
}
function wo(i, e) {
  return mi(i, e).length === 0;
}
const vi = "https://json-schema.org/draft/2020-12/schema";
function yi(i, e = {}) {
  const t = e.locale === void 0 ? i : di(i, e.locale), r = {}, n = [], s = [];
  for (const [a, f] of Object.entries(t.attributes))
    r[a] = $o(f), f.required !== !1 && f.default === void 0 && n.push(a), f.validate !== void 0 && s.push(a);
  const o = {
    $schema: vi,
    type: "object",
    "x-tsm-object-class": t.id,
    properties: r
  };
  return e.id !== void 0 && (o.$id = e.id), t.name !== void 0 && (o.title = t.name), t.description !== void 0 && (o.description = t.description), n.length > 0 && (o.required = n), s.length > 0 && (o["x-tsm-validated"] = s), e.locale === void 0 && i.localization !== void 0 && (o["x-tsm-localization"] = i.localization), o;
}
function Eo(i, e = {}) {
  const t = Array.isArray(i) ? [...i] : bo(i, e.locale), r = {}, n = /* @__PURE__ */ new Set();
  for (const o of t) {
    const a = yi(o, e);
    delete a.$schema, delete a.$id;
    const f = wi(o.id, n);
    Ro(f, a, r, n), r[f] = a;
  }
  const s = { $schema: vi, $defs: r };
  return e.id !== void 0 && (s.$id = e.id), e.name !== void 0 && (s.title = e.name), s;
}
function Ro(i, e, t, r) {
  for (const [n, s] of Object.entries(e.properties ?? {})) {
    const o = s.type === "array" && s.items ? s.items : s;
    if (o.enum === void 0)
      continue;
    const a = wi(`${i} ${n}`, r);
    t[a] = { enum: o.enum }, o["x-tsm-option-labels"] !== void 0 && (t[a]["x-tsm-option-labels"] = o["x-tsm-option-labels"]), delete o.enum, delete o["x-tsm-option-labels"], delete o.type, o.$ref = `#/$defs/${a}`;
  }
}
function bo(i, e) {
  return [...i.getPids(), ...i.getFactoryPids()].map((t) => i.getObjectClassDefinition(t, e)).filter((t) => t !== void 0);
}
function wi(i, e) {
  const t = i.split(/[^A-Za-z0-9]+/).filter((s) => s.length > 0).map((s) => s[0].toUpperCase() + s.slice(1)).join("") || "Configuration";
  let r = t, n = 1;
  for (; e.has(r); )
    r = `${t}${++n}`;
  return e.add(r), r;
}
function $o(i) {
  const e = Io(i), t = i.cardinality ?? "single", r = t === "single" ? e : { type: "array", items: e };
  return typeof t == "number" && (r.maxItems = t), i.name !== void 0 && (r.title = i.name), i.description !== void 0 && (r.description = i.description), i.default !== void 0 && (r.default = i.default), r;
}
function Io(i) {
  const e = {
    type: i.type === "password" ? "string" : i.type
  };
  if (i.type === "password" && (e.format = "password"), i.min !== void 0 && (e.minimum = i.min), i.max !== void 0 && (e.maximum = i.max), i.minLength !== void 0 && (e.minLength = i.minLength), i.maxLength !== void 0 && (e.maxLength = i.maxLength), i.options) {
    e.enum = i.options.map((r) => r.value);
    const t = {};
    for (const r of i.options)
      r.label !== void 0 && (t[String(r.value)] = r.label);
    Object.keys(t).length > 0 && (e["x-tsm-option-labels"] = t);
  }
  return e;
}
const So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CM_VERSION: Hn,
  COMPONENT_EXTENDER: kn,
  COMPONENT_FACTORY: ar,
  COMPONENT_FACTORY_SERVICE_ID: li,
  COMPONENT_NAME: hi,
  COMPONENT_RUNTIME_SERVICE_ID: jn,
  CONDITION_ID: be,
  CONDITION_SERVICE_ID: Xt,
  CONFIGURATION_ADMIN_SERVICE_ID: oi,
  CONFIGURATION_IMPLEMENTATION: qn,
  ConfigurationAdmin: Fs,
  DS_VERSION: Xn,
  DefaultServiceRegistry: _n,
  DependencyResolver: An,
  ENVIRONMENT: Jn,
  EXTENDER_NAMESPACE: we,
  FACTORY_PID_SEPARATOR: Wt,
  FEATURE_IMPLEMENTATION: xn,
  FEATURE_RESOURCE_VERSION: Me,
  FEATURE_SERVICE_ID: Fn,
  FEATURE_VERSION: Bn,
  IDENTITY_NAMESPACE: ce,
  IMPLEMENTATION_NAMESPACE: Ee,
  LIBRARY_NAMESPACE: xe,
  LocalStorageConfigurationStore: ks,
  METATYPE_EXTENDER: Dn,
  METATYPE_SERVICE_ID: ui,
  METATYPE_VERSION: Yn,
  MODULE_TYPE: Kn,
  MemoryConfigurationStore: fi,
  MetatypeRegistry: Gs,
  ModuleLoader: fo,
  PluginRegistry: ho,
  SERVICE_FACTORY_PID: ci,
  SERVICE_NAMESPACE: or,
  SERVICE_PID: ai,
  SYSTEM_BUNDLE_ID: Te,
  ScopedServiceRegistry: Pn,
  TARGETED_PID_SEPARATOR: Ae,
  TRUE_CONDITION: pi,
  TRUE_CONDITION_FILTER: Ys,
  TRUE_CONDITION_ID: cr,
  activate: hs,
  bind: ys,
  capabilitiesOf: Qn,
  component: ls,
  componentFactoryFilter: Xs,
  conditionFilter: Ks,
  conditionProperties: Hs,
  createServiceFilter: qe,
  deactivate: ps,
  featureService: Wn,
  formatFeatureId: fe,
  generateImportMap: go,
  importMapScript: mo,
  initTsmRuntime: Js,
  inject: cs,
  injectAll: os,
  injectable: as,
  installFeature: yo,
  installImportMap: vo,
  isComplete: wo,
  isTsmRuntimeAvailable: Yt,
  libraryCapabilities: ri,
  missingVariables: ir,
  modified: gs,
  objectClass: xs,
  offeredByModules: gi,
  parseFeatureId: Fe,
  perModule: ds,
  readFeature: Un,
  requirementsOf: ei,
  resolveConfigurations: nr,
  resolveWiring: ii,
  satisfies: ti,
  serviceId: po,
  singleton: fs,
  stripComments: Vn,
  systemBundle: ni,
  targetedPids: Le,
  toJsonSchema: yi,
  toMetamodelSchema: Eo,
  transient: us,
  tsmRuntime: ue,
  unbind: ws,
  unsatisfiedRequirements: mi,
  validateFeature: sr,
  wiringOf: si,
  writeFeature: zn
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hn as CM_VERSION,
  kn as COMPONENT_EXTENDER,
  ar as COMPONENT_FACTORY,
  li as COMPONENT_FACTORY_SERVICE_ID,
  hi as COMPONENT_NAME,
  jn as COMPONENT_RUNTIME_SERVICE_ID,
  be as CONDITION_ID,
  Xt as CONDITION_SERVICE_ID,
  oi as CONFIGURATION_ADMIN_SERVICE_ID,
  qn as CONFIGURATION_IMPLEMENTATION,
  Fs as ConfigurationAdmin,
  Xn as DS_VERSION,
  _n as DefaultServiceRegistry,
  An as DependencyResolver,
  Jn as ENVIRONMENT,
  we as EXTENDER_NAMESPACE,
  Wt as FACTORY_PID_SEPARATOR,
  xn as FEATURE_IMPLEMENTATION,
  Me as FEATURE_RESOURCE_VERSION,
  Fn as FEATURE_SERVICE_ID,
  Bn as FEATURE_VERSION,
  ce as IDENTITY_NAMESPACE,
  Ee as IMPLEMENTATION_NAMESPACE,
  xe as LIBRARY_NAMESPACE,
  ks as LocalStorageConfigurationStore,
  Dn as METATYPE_EXTENDER,
  ui as METATYPE_SERVICE_ID,
  Yn as METATYPE_VERSION,
  Kn as MODULE_TYPE,
  fi as MemoryConfigurationStore,
  Gs as MetatypeRegistry,
  fo as ModuleLoader,
  ho as PluginRegistry,
  ci as SERVICE_FACTORY_PID,
  or as SERVICE_NAMESPACE,
  ai as SERVICE_PID,
  Te as SYSTEM_BUNDLE_ID,
  Pn as ScopedServiceRegistry,
  Ae as TARGETED_PID_SEPARATOR,
  pi as TRUE_CONDITION,
  Ys as TRUE_CONDITION_FILTER,
  cr as TRUE_CONDITION_ID,
  hs as activate,
  ys as bind,
  Qn as capabilitiesOf,
  ls as component,
  Xs as componentFactoryFilter,
  Ks as conditionFilter,
  Hs as conditionProperties,
  qe as createServiceFilter,
  ps as deactivate,
  So as default,
  Wn as featureService,
  fe as formatFeatureId,
  go as generateImportMap,
  mo as importMapScript,
  Js as initTsmRuntime,
  cs as inject,
  os as injectAll,
  as as injectable,
  yo as installFeature,
  vo as installImportMap,
  wo as isComplete,
  Yt as isTsmRuntimeAvailable,
  ri as libraryCapabilities,
  ir as missingVariables,
  gs as modified,
  xs as objectClass,
  gi as offeredByModules,
  Fe as parseFeatureId,
  ds as perModule,
  Un as readFeature,
  ei as requirementsOf,
  nr as resolveConfigurations,
  ii as resolveWiring,
  ti as satisfies,
  po as serviceId,
  fs as singleton,
  Vn as stripComments,
  ni as systemBundle,
  Le as targetedPids,
  yi as toJsonSchema,
  Eo as toMetamodelSchema,
  us as transient,
  ue as tsmRuntime,
  ws as unbind,
  mi as unsatisfiedRequirements,
  sr as validateFeature,
  si as wiringOf,
  zn as writeFeature
};
