import { TwoWayConnection as Da } from "org.eclipse.daanse.board.app.lib.connection.twowayconnection";
import { inject as Fa, injectable as Wa } from "@eclipse-daanse/tsm";
import { LOGGER_FACTORY as qa } from "org.eclipse.daanse.board.app.lib.api.logger";
const { serviceId: $a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var ji = Object.defineProperty, za = Object.getOwnPropertyDescriptor, Va = Object.getOwnPropertyNames, Ka = Object.prototype.hasOwnProperty, ze = (h, f) => () => (h && (f = h(h = 0)), f), de = (h, f) => () => (f || h((f = { exports: {} }).exports, f), f.exports), Mt = (h, f) => {
  for (var s in f) ji(h, s, { get: f[s], enumerable: !0 });
}, Ha = (h, f, s, a) => {
  if (f && typeof f == "object" || typeof f == "function") for (let u of Va(f)) !Ka.call(h, u) && u !== s && ji(h, u, { get: () => f[u], enumerable: !(a = za(f, u)) || a.enumerable });
  return h;
}, Pe = (h) => Ha(ji({}, "__esModule", { value: !0 }), h), le = ze(() => {
}), Re = {};
Mt(Re, { _debugEnd: () => yn, _debugProcess: () => gn, _events: () => Rn, _eventsCount: () => Cn, _exiting: () => en, _fatalExceptions: () => hn, _getActiveHandles: () => hs, _getActiveRequests: () => fs, _kill: () => nn, _linkedBinding: () => us, _maxListeners: () => Pn, _preload_modules: () => On, _rawDebug: () => Jr, _startProfilerIdleNotifier: () => bn, _stopProfilerIdleNotifier: () => mn, _tickCallback: () => dn, abort: () => Sn, addListener: () => Mn, allowedNodeEnvironmentFlags: () => cn, arch: () => Ur, argv: () => Fr, argv0: () => Tn, assert: () => ps, binding: () => Vr, browser: () => Yr, chdir: () => Gr, config: () => tn, cpuUsage: () => Wt, cwd: () => Hr, debugPort: () => xn, default: () => Bi, dlopen: () => cs, domain: () => Zr, emit: () => Ln, emitWarning: () => zr, env: () => Dr, execArgv: () => Wr, execPath: () => In, exit: () => ln, features: () => fn, hasUncaughtExceptionCaptureCallback: () => ds, hrtime: () => er, kill: () => an, listeners: () => ys, memoryUsage: () => sn, moduleLoadList: () => Xr, nextTick: () => as, off: () => Nn, on: () => rt, once: () => jn, openStdin: () => un, pid: () => En, platform: () => Lr, ppid: () => An, prependListener: () => Dn, prependOnceListener: () => Fn, reallyExit: () => rn, release: () => Qr, removeAllListeners: () => Un, removeListener: () => Bn, resourceUsage: () => on, setSourceMapsEnabled: () => kn, setUncaughtExceptionCaptureCallback: () => pn, stderr: () => wn, stdin: () => _n, stdout: () => vn, title: () => Br, umask: () => Kr, uptime: () => gs, version: () => qr, versions: () => $r });
function Ni(h) {
  throw new Error("Node.js process " + h + " is not supported by JSPM core outside of Node.js");
}
function Ga() {
  !St || !wt || (St = !1, wt.length ? Ze = wt.concat(Ze) : Vt = -1, Ze.length && ss());
}
function ss() {
  if (!St) {
    var h = setTimeout(Ga, 0);
    St = !0;
    for (var f = Ze.length; f; ) {
      for (wt = Ze, Ze = []; ++Vt < f; ) wt && wt[Vt].run();
      Vt = -1, f = Ze.length;
    }
    wt = null, St = !1, clearTimeout(h);
  }
}
function as(h) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var s = 1; s < arguments.length; s++) f[s - 1] = arguments[s];
  Ze.push(new ls(h, f)), Ze.length === 1 && !St && setTimeout(ss, 0);
}
function ls(h, f) {
  this.fun = h, this.array = f;
}
function Le() {
}
function us(h) {
  Ni("_linkedBinding");
}
function cs(h) {
  Ni("dlopen");
}
function fs() {
  return [];
}
function hs() {
  return [];
}
function ps(h, f) {
  if (!h) throw new Error(f || "assertion error");
}
function ds() {
  return !1;
}
function gs() {
  return it.now() / 1e3;
}
function er(h) {
  var f = Math.floor((Date.now() - it.now()) * 1e-3), s = it.now() * 1e-3, a = Math.floor(s) + f, u = Math.floor(s % 1 * 1e9);
  return h && (a = a - h[0], u = u - h[1], u < 0 && (a--, u += tr)), [a, u];
}
function rt() {
  return Bi;
}
function ys(h) {
  return [];
}
var Ze, St, wt, Vt, Br, Ur, Lr, Dr, Fr, Wr, qr, $r, zr, Vr, Kr, Hr, Gr, Qr, Yr, Jr, Xr, Zr, en, tn, rn, nn, Wt, on, sn, an, ln, un, cn, fn, hn, pn, dn, gn, yn, bn, mn, vn, wn, _n, Sn, En, An, In, xn, Tn, On, kn, it, Mr, tr, Pn, Rn, Cn, Mn, jn, Nn, Bn, Un, Ln, Dn, Fn, Bi, Qa = ze(() => {
  le(), ce(), ue(), Ze = [], St = !1, Vt = -1, ls.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, Br = "browser", Ur = "x64", Lr = "browser", Dr = { PATH: "/usr/bin", LANG: typeof navigator < "u" ? navigator.language + ".UTF-8" : void 0, PWD: "/", HOME: "/home", TMP: "/tmp" }, Fr = ["/usr/bin/node"], Wr = [], qr = "v16.8.0", $r = {}, zr = function(h, f) {
    console.warn((f ? f + ": " : "") + h);
  }, Vr = function(h) {
    Ni("binding");
  }, Kr = function(h) {
    return 0;
  }, Hr = function() {
    return "/";
  }, Gr = function(h) {
  }, Qr = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" }, Yr = !0, Jr = Le, Xr = [], Zr = {}, en = !1, tn = {}, rn = Le, nn = Le, Wt = function() {
    return {};
  }, on = Wt, sn = Wt, an = Le, ln = Le, un = Le, cn = {}, fn = { inspector: !1, debug: !1, uv: !1, ipv6: !1, tls_alpn: !1, tls_sni: !1, tls_ocsp: !1, tls: !1, cached_builtins: !0 }, hn = Le, pn = Le, dn = Le, gn = Le, yn = Le, bn = Le, mn = Le, vn = void 0, wn = void 0, _n = void 0, Sn = Le, En = 2, An = 1, In = "/bin/usr/node", xn = 9229, Tn = "node", On = [], kn = Le, it = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 }, it.now === void 0 && (Mr = Date.now(), it.timing && it.timing.navigationStart && (Mr = it.timing.navigationStart), it.now = () => Date.now() - Mr), tr = 1e9, er.bigint = function(h) {
    var f = er(h);
    return typeof BigInt > "u" ? f[0] * tr + f[1] : BigInt(f[0] * tr) + BigInt(f[1]);
  }, Pn = 10, Rn = {}, Cn = 0, Mn = rt, jn = rt, Nn = rt, Bn = rt, Un = rt, Ln = Le, Dn = rt, Fn = rt, Bi = { version: qr, versions: $r, arch: Ur, platform: Lr, browser: Yr, release: Qr, _rawDebug: Jr, moduleLoadList: Xr, binding: Vr, _linkedBinding: us, _events: Rn, _eventsCount: Cn, _maxListeners: Pn, on: rt, addListener: Mn, once: jn, off: Nn, removeListener: Bn, removeAllListeners: Un, emit: Ln, prependListener: Dn, prependOnceListener: Fn, listeners: ys, domain: Zr, _exiting: en, config: tn, dlopen: cs, uptime: gs, _getActiveRequests: fs, _getActiveHandles: hs, reallyExit: rn, _kill: nn, cpuUsage: Wt, resourceUsage: on, memoryUsage: sn, kill: an, exit: ln, openStdin: un, allowedNodeEnvironmentFlags: cn, assert: ps, features: fn, _fatalExceptions: hn, setUncaughtExceptionCaptureCallback: pn, hasUncaughtExceptionCaptureCallback: ds, emitWarning: zr, nextTick: as, _tickCallback: dn, _debugProcess: gn, _debugEnd: yn, _startProfilerIdleNotifier: bn, _stopProfilerIdleNotifier: mn, stdout: vn, stdin: _n, stderr: wn, abort: Sn, umask: Kr, chdir: Gr, cwd: Hr, env: Dr, title: Br, argv: Fr, execArgv: Wr, pid: En, ppid: An, execPath: In, debugPort: xn, hrtime: er, argv0: Tn, _preload_modules: On, setSourceMapsEnabled: kn };
}), ue = ze(() => {
  Qa();
});
function Ya() {
  if (Wn) return kt;
  Wn = !0, kt.byteLength = n, kt.toByteArray = i, kt.fromByteArray = d;
  for (var h = [], f = [], s = typeof Uint8Array < "u" ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = 0, r = a.length; u < r; ++u) h[u] = a[u], f[a.charCodeAt(u)] = u;
  f[45] = 62, f[95] = 63;
  function t(m) {
    var c = m.length;
    if (c % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var y = m.indexOf("=");
    y === -1 && (y = c);
    var b = y === c ? 0 : 4 - y % 4;
    return [y, b];
  }
  function n(m) {
    var c = t(m), y = c[0], b = c[1];
    return (y + b) * 3 / 4 - b;
  }
  function e(m, c, y) {
    return (c + y) * 3 / 4 - y;
  }
  function i(m) {
    var c, y = t(m), b = y[0], S = y[1], p = new s(e(m, b, S)), _ = 0, I = S > 0 ? b - 4 : b, v;
    for (v = 0; v < I; v += 4) c = f[m.charCodeAt(v)] << 18 | f[m.charCodeAt(v + 1)] << 12 | f[m.charCodeAt(v + 2)] << 6 | f[m.charCodeAt(v + 3)], p[_++] = c >> 16 & 255, p[_++] = c >> 8 & 255, p[_++] = c & 255;
    return S === 2 && (c = f[m.charCodeAt(v)] << 2 | f[m.charCodeAt(v + 1)] >> 4, p[_++] = c & 255), S === 1 && (c = f[m.charCodeAt(v)] << 10 | f[m.charCodeAt(v + 1)] << 4 | f[m.charCodeAt(v + 2)] >> 2, p[_++] = c >> 8 & 255, p[_++] = c & 255), p;
  }
  function o(m) {
    return h[m >> 18 & 63] + h[m >> 12 & 63] + h[m >> 6 & 63] + h[m & 63];
  }
  function g(m, c, y) {
    for (var b, S = [], p = c; p < y; p += 3) b = (m[p] << 16 & 16711680) + (m[p + 1] << 8 & 65280) + (m[p + 2] & 255), S.push(o(b));
    return S.join("");
  }
  function d(m) {
    for (var c, y = m.length, b = y % 3, S = [], p = 16383, _ = 0, I = y - b; _ < I; _ += p) S.push(g(m, _, _ + p > I ? I : _ + p));
    return b === 1 ? (c = m[y - 1], S.push(h[c >> 2] + h[c << 4 & 63] + "==")) : b === 2 && (c = (m[y - 2] << 8) + m[y - 1], S.push(h[c >> 10] + h[c >> 4 & 63] + h[c << 2 & 63] + "=")), S.join("");
  }
  return kt;
}
function Ja() {
  return qn ? qt : (qn = !0, qt.read = function(h, f, s, a, u) {
    var r, t, n = u * 8 - a - 1, e = (1 << n) - 1, i = e >> 1, o = -7, g = s ? u - 1 : 0, d = s ? -1 : 1, m = h[f + g];
    for (g += d, r = m & (1 << -o) - 1, m >>= -o, o += n; o > 0; r = r * 256 + h[f + g], g += d, o -= 8) ;
    for (t = r & (1 << -o) - 1, r >>= -o, o += a; o > 0; t = t * 256 + h[f + g], g += d, o -= 8) ;
    if (r === 0) r = 1 - i;
    else {
      if (r === e) return t ? NaN : (m ? -1 : 1) * (1 / 0);
      t = t + Math.pow(2, a), r = r - i;
    }
    return (m ? -1 : 1) * t * Math.pow(2, r - a);
  }, qt.write = function(h, f, s, a, u, r) {
    var t, n, e, i = r * 8 - u - 1, o = (1 << i) - 1, g = o >> 1, d = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = a ? 0 : r - 1, c = a ? 1 : -1, y = f < 0 || f === 0 && 1 / f < 0 ? 1 : 0;
    for (f = Math.abs(f), isNaN(f) || f === 1 / 0 ? (n = isNaN(f) ? 1 : 0, t = o) : (t = Math.floor(Math.log(f) / Math.LN2), f * (e = Math.pow(2, -t)) < 1 && (t--, e *= 2), t + g >= 1 ? f += d / e : f += d * Math.pow(2, 1 - g), f * e >= 2 && (t++, e /= 2), t + g >= o ? (n = 0, t = o) : t + g >= 1 ? (n = (f * e - 1) * Math.pow(2, u), t = t + g) : (n = f * Math.pow(2, g - 1) * Math.pow(2, u), t = 0)); u >= 8; h[s + m] = n & 255, m += c, n /= 256, u -= 8) ;
    for (t = t << u | n, i += u; i > 0; h[s + m] = t & 255, m += c, t /= 256, i -= 8) ;
    h[s + m - c] |= y * 128;
  }, qt);
}
function Xa() {
  if ($n) return pt;
  $n = !0;
  let h = Ya(), f = Ja(), s = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  pt.Buffer = t, pt.SlowBuffer = S, pt.INSPECT_MAX_BYTES = 50;
  let a = 2147483647;
  pt.kMaxLength = a, t.TYPED_ARRAY_SUPPORT = u(), !t.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function u() {
    try {
      let l = new Uint8Array(1), w = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(w, Uint8Array.prototype), Object.setPrototypeOf(l, w), l.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(t.prototype, "parent", { enumerable: !0, get: function() {
    if (t.isBuffer(this)) return this.buffer;
  } }), Object.defineProperty(t.prototype, "offset", { enumerable: !0, get: function() {
    if (t.isBuffer(this)) return this.byteOffset;
  } });
  function r(l) {
    if (l > a) throw new RangeError('The value "' + l + '" is invalid for option "size"');
    let w = new Uint8Array(l);
    return Object.setPrototypeOf(w, t.prototype), w;
  }
  function t(l, w, x) {
    if (typeof l == "number") {
      if (typeof w == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
      return o(l);
    }
    return n(l, w, x);
  }
  t.poolSize = 8192;
  function n(l, w, x) {
    if (typeof l == "string") return g(l, w);
    if (ArrayBuffer.isView(l)) return m(l);
    if (l == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l);
    if ($(l, ArrayBuffer) || l && $(l.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && ($(l, SharedArrayBuffer) || l && $(l.buffer, SharedArrayBuffer))) return c(l, w, x);
    if (typeof l == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let U = l.valueOf && l.valueOf();
    if (U != null && U !== l) return t.from(U, w, x);
    let X = y(l);
    if (X) return X;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof l[Symbol.toPrimitive] == "function") return t.from(l[Symbol.toPrimitive]("string"), w, x);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof l);
  }
  t.from = function(l, w, x) {
    return n(l, w, x);
  }, Object.setPrototypeOf(t.prototype, Uint8Array.prototype), Object.setPrototypeOf(t, Uint8Array);
  function e(l) {
    if (typeof l != "number") throw new TypeError('"size" argument must be of type number');
    if (l < 0) throw new RangeError('The value "' + l + '" is invalid for option "size"');
  }
  function i(l, w, x) {
    return e(l), l <= 0 ? r(l) : w !== void 0 ? typeof x == "string" ? r(l).fill(w, x) : r(l).fill(w) : r(l);
  }
  t.alloc = function(l, w, x) {
    return i(l, w, x);
  };
  function o(l) {
    return e(l), r(l < 0 ? 0 : b(l) | 0);
  }
  t.allocUnsafe = function(l) {
    return o(l);
  }, t.allocUnsafeSlow = function(l) {
    return o(l);
  };
  function g(l, w) {
    if ((typeof w != "string" || w === "") && (w = "utf8"), !t.isEncoding(w)) throw new TypeError("Unknown encoding: " + w);
    let x = p(l, w) | 0, U = r(x), X = U.write(l, w);
    return X !== x && (U = U.slice(0, X)), U;
  }
  function d(l) {
    let w = l.length < 0 ? 0 : b(l.length) | 0, x = r(w);
    for (let U = 0; U < w; U += 1) x[U] = l[U] & 255;
    return x;
  }
  function m(l) {
    if ($(l, Uint8Array)) {
      let w = new Uint8Array(l);
      return c(w.buffer, w.byteOffset, w.byteLength);
    }
    return d(l);
  }
  function c(l, w, x) {
    if (w < 0 || l.byteLength < w) throw new RangeError('"offset" is outside of buffer bounds');
    if (l.byteLength < w + (x || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let U;
    return w === void 0 && x === void 0 ? U = new Uint8Array(l) : x === void 0 ? U = new Uint8Array(l, w) : U = new Uint8Array(l, w, x), Object.setPrototypeOf(U, t.prototype), U;
  }
  function y(l) {
    if (t.isBuffer(l)) {
      let w = b(l.length) | 0, x = r(w);
      return x.length === 0 || l.copy(x, 0, 0, w), x;
    }
    if (l.length !== void 0) return typeof l.length != "number" || ge(l.length) ? r(0) : d(l);
    if (l.type === "Buffer" && Array.isArray(l.data)) return d(l.data);
  }
  function b(l) {
    if (l >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
    return l | 0;
  }
  function S(l) {
    return +l != l && (l = 0), t.alloc(+l);
  }
  t.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== t.prototype;
  }, t.compare = function(l, w) {
    if ($(l, Uint8Array) && (l = t.from(l, l.offset, l.byteLength)), $(w, Uint8Array) && (w = t.from(w, w.offset, w.byteLength)), !t.isBuffer(l) || !t.isBuffer(w)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (l === w) return 0;
    let x = l.length, U = w.length;
    for (let X = 0, fe = Math.min(x, U); X < fe; ++X) if (l[X] !== w[X]) {
      x = l[X], U = w[X];
      break;
    }
    return x < U ? -1 : U < x ? 1 : 0;
  }, t.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
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
  }, t.concat = function(l, w) {
    if (!Array.isArray(l)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0) return t.alloc(0);
    let x;
    if (w === void 0) for (w = 0, x = 0; x < l.length; ++x) w += l[x].length;
    let U = t.allocUnsafe(w), X = 0;
    for (x = 0; x < l.length; ++x) {
      let fe = l[x];
      if ($(fe, Uint8Array)) X + fe.length > U.length ? (t.isBuffer(fe) || (fe = t.from(fe)), fe.copy(U, X)) : Uint8Array.prototype.set.call(U, fe, X);
      else if (t.isBuffer(fe)) fe.copy(U, X);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      X += fe.length;
    }
    return U;
  };
  function p(l, w) {
    if (t.isBuffer(l)) return l.length;
    if (ArrayBuffer.isView(l) || $(l, ArrayBuffer)) return l.byteLength;
    if (typeof l != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof l);
    let x = l.length, U = arguments.length > 2 && arguments[2] === !0;
    if (!U && x === 0) return 0;
    let X = !1;
    for (; ; ) switch (w) {
      case "ascii":
      case "latin1":
      case "binary":
        return x;
      case "utf8":
      case "utf-8":
        return W(l).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return x * 2;
      case "hex":
        return x >>> 1;
      case "base64":
        return pe(l).length;
      default:
        if (X) return U ? -1 : W(l).length;
        w = ("" + w).toLowerCase(), X = !0;
    }
  }
  t.byteLength = p;
  function _(l, w, x) {
    let U = !1;
    if ((w === void 0 || w < 0) && (w = 0), w > this.length || ((x === void 0 || x > this.length) && (x = this.length), x <= 0) || (x >>>= 0, w >>>= 0, x <= w)) return "";
    for (l || (l = "utf8"); ; ) switch (l) {
      case "hex":
        return K(this, w, x);
      case "utf8":
      case "utf-8":
        return q(this, w, x);
      case "ascii":
        return ae(this, w, x);
      case "latin1":
      case "binary":
        return Q(this, w, x);
      case "base64":
        return O(this, w, x);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return re(this, w, x);
      default:
        if (U) throw new TypeError("Unknown encoding: " + l);
        l = (l + "").toLowerCase(), U = !0;
    }
  }
  t.prototype._isBuffer = !0;
  function I(l, w, x) {
    let U = l[w];
    l[w] = l[x], l[x] = U;
  }
  t.prototype.swap16 = function() {
    let l = this.length;
    if (l % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let w = 0; w < l; w += 2) I(this, w, w + 1);
    return this;
  }, t.prototype.swap32 = function() {
    let l = this.length;
    if (l % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let w = 0; w < l; w += 4) I(this, w, w + 3), I(this, w + 1, w + 2);
    return this;
  }, t.prototype.swap64 = function() {
    let l = this.length;
    if (l % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let w = 0; w < l; w += 8) I(this, w, w + 7), I(this, w + 1, w + 6), I(this, w + 2, w + 5), I(this, w + 3, w + 4);
    return this;
  }, t.prototype.toString = function() {
    let l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? q(this, 0, l) : _.apply(this, arguments);
  }, t.prototype.toLocaleString = t.prototype.toString, t.prototype.equals = function(l) {
    if (!t.isBuffer(l)) throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : t.compare(this, l) === 0;
  }, t.prototype.inspect = function() {
    let l = "", w = pt.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, w).replace(/(.{2})/g, "$1 ").trim(), this.length > w && (l += " ... "), "<Buffer " + l + ">";
  }, s && (t.prototype[s] = t.prototype.inspect), t.prototype.compare = function(l, w, x, U, X) {
    if ($(l, Uint8Array) && (l = t.from(l, l.offset, l.byteLength)), !t.isBuffer(l)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l);
    if (w === void 0 && (w = 0), x === void 0 && (x = l ? l.length : 0), U === void 0 && (U = 0), X === void 0 && (X = this.length), w < 0 || x > l.length || U < 0 || X > this.length) throw new RangeError("out of range index");
    if (U >= X && w >= x) return 0;
    if (U >= X) return -1;
    if (w >= x) return 1;
    if (w >>>= 0, x >>>= 0, U >>>= 0, X >>>= 0, this === l) return 0;
    let fe = X - U, Se = x - w, V = Math.min(fe, Se), ie = this.slice(U, X), Ie = l.slice(w, x);
    for (let xe = 0; xe < V; ++xe) if (ie[xe] !== Ie[xe]) {
      fe = ie[xe], Se = Ie[xe];
      break;
    }
    return fe < Se ? -1 : Se < fe ? 1 : 0;
  };
  function v(l, w, x, U, X) {
    if (l.length === 0) return -1;
    if (typeof x == "string" ? (U = x, x = 0) : x > 2147483647 ? x = 2147483647 : x < -2147483648 && (x = -2147483648), x = +x, ge(x) && (x = X ? 0 : l.length - 1), x < 0 && (x = l.length + x), x >= l.length) {
      if (X) return -1;
      x = l.length - 1;
    } else if (x < 0) if (X) x = 0;
    else return -1;
    if (typeof w == "string" && (w = t.from(w, U)), t.isBuffer(w)) return w.length === 0 ? -1 : A(l, w, x, U, X);
    if (typeof w == "number") return w = w & 255, typeof Uint8Array.prototype.indexOf == "function" ? X ? Uint8Array.prototype.indexOf.call(l, w, x) : Uint8Array.prototype.lastIndexOf.call(l, w, x) : A(l, [w], x, U, X);
    throw new TypeError("val must be string, number or Buffer");
  }
  function A(l, w, x, U, X) {
    let fe = 1, Se = l.length, V = w.length;
    if (U !== void 0 && (U = String(U).toLowerCase(), U === "ucs2" || U === "ucs-2" || U === "utf16le" || U === "utf-16le")) {
      if (l.length < 2 || w.length < 2) return -1;
      fe = 2, Se /= 2, V /= 2, x /= 2;
    }
    function ie(xe, Te) {
      return fe === 1 ? xe[Te] : xe.readUInt16BE(Te * fe);
    }
    let Ie;
    if (X) {
      let xe = -1;
      for (Ie = x; Ie < Se; Ie++) if (ie(l, Ie) === ie(w, xe === -1 ? 0 : Ie - xe)) {
        if (xe === -1 && (xe = Ie), Ie - xe + 1 === V) return xe * fe;
      } else xe !== -1 && (Ie -= Ie - xe), xe = -1;
    } else for (x + V > Se && (x = Se - V), Ie = x; Ie >= 0; Ie--) {
      let xe = !0;
      for (let Te = 0; Te < V; Te++) if (ie(l, Ie + Te) !== ie(w, Te)) {
        xe = !1;
        break;
      }
      if (xe) return Ie;
    }
    return -1;
  }
  t.prototype.includes = function(l, w, x) {
    return this.indexOf(l, w, x) !== -1;
  }, t.prototype.indexOf = function(l, w, x) {
    return v(this, l, w, x, !0);
  }, t.prototype.lastIndexOf = function(l, w, x) {
    return v(this, l, w, x, !1);
  };
  function E(l, w, x, U) {
    x = Number(x) || 0;
    let X = l.length - x;
    U ? (U = Number(U), U > X && (U = X)) : U = X;
    let fe = w.length;
    U > fe / 2 && (U = fe / 2);
    let Se;
    for (Se = 0; Se < U; ++Se) {
      let V = parseInt(w.substr(Se * 2, 2), 16);
      if (ge(V)) return Se;
      l[x + Se] = V;
    }
    return Se;
  }
  function T(l, w, x, U) {
    return me(W(w, l.length - x), l, x, U);
  }
  function C(l, w, x, U) {
    return me(ee(w), l, x, U);
  }
  function P(l, w, x, U) {
    return me(pe(w), l, x, U);
  }
  function L(l, w, x, U) {
    return me(he(w, l.length - x), l, x, U);
  }
  t.prototype.write = function(l, w, x, U) {
    if (w === void 0) U = "utf8", x = this.length, w = 0;
    else if (x === void 0 && typeof w == "string") U = w, x = this.length, w = 0;
    else if (isFinite(w)) w = w >>> 0, isFinite(x) ? (x = x >>> 0, U === void 0 && (U = "utf8")) : (U = x, x = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let X = this.length - w;
    if ((x === void 0 || x > X) && (x = X), l.length > 0 && (x < 0 || w < 0) || w > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    U || (U = "utf8");
    let fe = !1;
    for (; ; ) switch (U) {
      case "hex":
        return E(this, l, w, x);
      case "utf8":
      case "utf-8":
        return T(this, l, w, x);
      case "ascii":
      case "latin1":
      case "binary":
        return C(this, l, w, x);
      case "base64":
        return P(this, l, w, x);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return L(this, l, w, x);
      default:
        if (fe) throw new TypeError("Unknown encoding: " + U);
        U = ("" + U).toLowerCase(), fe = !0;
    }
  }, t.prototype.toJSON = function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  };
  function O(l, w, x) {
    return w === 0 && x === l.length ? h.fromByteArray(l) : h.fromByteArray(l.slice(w, x));
  }
  function q(l, w, x) {
    x = Math.min(l.length, x);
    let U = [], X = w;
    for (; X < x; ) {
      let fe = l[X], Se = null, V = fe > 239 ? 4 : fe > 223 ? 3 : fe > 191 ? 2 : 1;
      if (X + V <= x) {
        let ie, Ie, xe, Te;
        switch (V) {
          case 1:
            fe < 128 && (Se = fe);
            break;
          case 2:
            ie = l[X + 1], (ie & 192) === 128 && (Te = (fe & 31) << 6 | ie & 63, Te > 127 && (Se = Te));
            break;
          case 3:
            ie = l[X + 1], Ie = l[X + 2], (ie & 192) === 128 && (Ie & 192) === 128 && (Te = (fe & 15) << 12 | (ie & 63) << 6 | Ie & 63, Te > 2047 && (Te < 55296 || Te > 57343) && (Se = Te));
            break;
          case 4:
            ie = l[X + 1], Ie = l[X + 2], xe = l[X + 3], (ie & 192) === 128 && (Ie & 192) === 128 && (xe & 192) === 128 && (Te = (fe & 15) << 18 | (ie & 63) << 12 | (Ie & 63) << 6 | xe & 63, Te > 65535 && Te < 1114112 && (Se = Te));
        }
      }
      Se === null ? (Se = 65533, V = 1) : Se > 65535 && (Se -= 65536, U.push(Se >>> 10 & 1023 | 55296), Se = 56320 | Se & 1023), U.push(Se), X += V;
    }
    return B(U);
  }
  let D = 4096;
  function B(l) {
    let w = l.length;
    if (w <= D) return String.fromCharCode.apply(String, l);
    let x = "", U = 0;
    for (; U < w; ) x += String.fromCharCode.apply(String, l.slice(U, U += D));
    return x;
  }
  function ae(l, w, x) {
    let U = "";
    x = Math.min(l.length, x);
    for (let X = w; X < x; ++X) U += String.fromCharCode(l[X] & 127);
    return U;
  }
  function Q(l, w, x) {
    let U = "";
    x = Math.min(l.length, x);
    for (let X = w; X < x; ++X) U += String.fromCharCode(l[X]);
    return U;
  }
  function K(l, w, x) {
    let U = l.length;
    (!w || w < 0) && (w = 0), (!x || x < 0 || x > U) && (x = U);
    let X = "";
    for (let fe = w; fe < x; ++fe) X += ve[l[fe]];
    return X;
  }
  function re(l, w, x) {
    let U = l.slice(w, x), X = "";
    for (let fe = 0; fe < U.length - 1; fe += 2) X += String.fromCharCode(U[fe] + U[fe + 1] * 256);
    return X;
  }
  t.prototype.slice = function(l, w) {
    let x = this.length;
    l = ~~l, w = w === void 0 ? x : ~~w, l < 0 ? (l += x, l < 0 && (l = 0)) : l > x && (l = x), w < 0 ? (w += x, w < 0 && (w = 0)) : w > x && (w = x), w < l && (w = l);
    let U = this.subarray(l, w);
    return Object.setPrototypeOf(U, t.prototype), U;
  };
  function F(l, w, x) {
    if (l % 1 !== 0 || l < 0) throw new RangeError("offset is not uint");
    if (l + w > x) throw new RangeError("Trying to access beyond buffer length");
  }
  t.prototype.readUintLE = t.prototype.readUIntLE = function(l, w, x) {
    l = l >>> 0, w = w >>> 0, x || F(l, w, this.length);
    let U = this[l], X = 1, fe = 0;
    for (; ++fe < w && (X *= 256); ) U += this[l + fe] * X;
    return U;
  }, t.prototype.readUintBE = t.prototype.readUIntBE = function(l, w, x) {
    l = l >>> 0, w = w >>> 0, x || F(l, w, this.length);
    let U = this[l + --w], X = 1;
    for (; w > 0 && (X *= 256); ) U += this[l + --w] * X;
    return U;
  }, t.prototype.readUint8 = t.prototype.readUInt8 = function(l, w) {
    return l = l >>> 0, w || F(l, 1, this.length), this[l];
  }, t.prototype.readUint16LE = t.prototype.readUInt16LE = function(l, w) {
    return l = l >>> 0, w || F(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, t.prototype.readUint16BE = t.prototype.readUInt16BE = function(l, w) {
    return l = l >>> 0, w || F(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, t.prototype.readUint32LE = t.prototype.readUInt32LE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, t.prototype.readUint32BE = t.prototype.readUInt32BE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, t.prototype.readBigUInt64LE = se(function(l) {
    l = l >>> 0, Y(l, "offset");
    let w = this[l], x = this[l + 7];
    (w === void 0 || x === void 0) && ye(l, this.length - 8);
    let U = w + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, X = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + x * 2 ** 24;
    return BigInt(U) + (BigInt(X) << BigInt(32));
  }), t.prototype.readBigUInt64BE = se(function(l) {
    l = l >>> 0, Y(l, "offset");
    let w = this[l], x = this[l + 7];
    (w === void 0 || x === void 0) && ye(l, this.length - 8);
    let U = w * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], X = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x;
    return (BigInt(U) << BigInt(32)) + BigInt(X);
  }), t.prototype.readIntLE = function(l, w, x) {
    l = l >>> 0, w = w >>> 0, x || F(l, w, this.length);
    let U = this[l], X = 1, fe = 0;
    for (; ++fe < w && (X *= 256); ) U += this[l + fe] * X;
    return X *= 128, U >= X && (U -= Math.pow(2, 8 * w)), U;
  }, t.prototype.readIntBE = function(l, w, x) {
    l = l >>> 0, w = w >>> 0, x || F(l, w, this.length);
    let U = w, X = 1, fe = this[l + --U];
    for (; U > 0 && (X *= 256); ) fe += this[l + --U] * X;
    return X *= 128, fe >= X && (fe -= Math.pow(2, 8 * w)), fe;
  }, t.prototype.readInt8 = function(l, w) {
    return l = l >>> 0, w || F(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, t.prototype.readInt16LE = function(l, w) {
    l = l >>> 0, w || F(l, 2, this.length);
    let x = this[l] | this[l + 1] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, t.prototype.readInt16BE = function(l, w) {
    l = l >>> 0, w || F(l, 2, this.length);
    let x = this[l + 1] | this[l] << 8;
    return x & 32768 ? x | 4294901760 : x;
  }, t.prototype.readInt32LE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, t.prototype.readInt32BE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, t.prototype.readBigInt64LE = se(function(l) {
    l = l >>> 0, Y(l, "offset");
    let w = this[l], x = this[l + 7];
    (w === void 0 || x === void 0) && ye(l, this.length - 8);
    let U = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (x << 24);
    return (BigInt(U) << BigInt(32)) + BigInt(w + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), t.prototype.readBigInt64BE = se(function(l) {
    l = l >>> 0, Y(l, "offset");
    let w = this[l], x = this[l + 7];
    (w === void 0 || x === void 0) && ye(l, this.length - 8);
    let U = (w << 24) + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(U) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + x);
  }), t.prototype.readFloatLE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), f.read(this, l, !0, 23, 4);
  }, t.prototype.readFloatBE = function(l, w) {
    return l = l >>> 0, w || F(l, 4, this.length), f.read(this, l, !1, 23, 4);
  }, t.prototype.readDoubleLE = function(l, w) {
    return l = l >>> 0, w || F(l, 8, this.length), f.read(this, l, !0, 52, 8);
  }, t.prototype.readDoubleBE = function(l, w) {
    return l = l >>> 0, w || F(l, 8, this.length), f.read(this, l, !1, 52, 8);
  };
  function Z(l, w, x, U, X, fe) {
    if (!t.isBuffer(l)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (w > X || w < fe) throw new RangeError('"value" argument is out of bounds');
    if (x + U > l.length) throw new RangeError("Index out of range");
  }
  t.prototype.writeUintLE = t.prototype.writeUIntLE = function(l, w, x, U) {
    if (l = +l, w = w >>> 0, x = x >>> 0, !U) {
      let Se = Math.pow(2, 8 * x) - 1;
      Z(this, l, w, x, Se, 0);
    }
    let X = 1, fe = 0;
    for (this[w] = l & 255; ++fe < x && (X *= 256); ) this[w + fe] = l / X & 255;
    return w + x;
  }, t.prototype.writeUintBE = t.prototype.writeUIntBE = function(l, w, x, U) {
    if (l = +l, w = w >>> 0, x = x >>> 0, !U) {
      let Se = Math.pow(2, 8 * x) - 1;
      Z(this, l, w, x, Se, 0);
    }
    let X = x - 1, fe = 1;
    for (this[w + X] = l & 255; --X >= 0 && (fe *= 256); ) this[w + X] = l / fe & 255;
    return w + x;
  }, t.prototype.writeUint8 = t.prototype.writeUInt8 = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 1, 255, 0), this[w] = l & 255, w + 1;
  }, t.prototype.writeUint16LE = t.prototype.writeUInt16LE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 2, 65535, 0), this[w] = l & 255, this[w + 1] = l >>> 8, w + 2;
  }, t.prototype.writeUint16BE = t.prototype.writeUInt16BE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 2, 65535, 0), this[w] = l >>> 8, this[w + 1] = l & 255, w + 2;
  }, t.prototype.writeUint32LE = t.prototype.writeUInt32LE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 4, 4294967295, 0), this[w + 3] = l >>> 24, this[w + 2] = l >>> 16, this[w + 1] = l >>> 8, this[w] = l & 255, w + 4;
  }, t.prototype.writeUint32BE = t.prototype.writeUInt32BE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 4, 4294967295, 0), this[w] = l >>> 24, this[w + 1] = l >>> 16, this[w + 2] = l >>> 8, this[w + 3] = l & 255, w + 4;
  };
  function R(l, w, x, U, X) {
    G(w, U, X, l, x, 7);
    let fe = Number(w & BigInt(4294967295));
    l[x++] = fe, fe = fe >> 8, l[x++] = fe, fe = fe >> 8, l[x++] = fe, fe = fe >> 8, l[x++] = fe;
    let Se = Number(w >> BigInt(32) & BigInt(4294967295));
    return l[x++] = Se, Se = Se >> 8, l[x++] = Se, Se = Se >> 8, l[x++] = Se, Se = Se >> 8, l[x++] = Se, x;
  }
  function J(l, w, x, U, X) {
    G(w, U, X, l, x, 7);
    let fe = Number(w & BigInt(4294967295));
    l[x + 7] = fe, fe = fe >> 8, l[x + 6] = fe, fe = fe >> 8, l[x + 5] = fe, fe = fe >> 8, l[x + 4] = fe;
    let Se = Number(w >> BigInt(32) & BigInt(4294967295));
    return l[x + 3] = Se, Se = Se >> 8, l[x + 2] = Se, Se = Se >> 8, l[x + 1] = Se, Se = Se >> 8, l[x] = Se, x + 8;
  }
  t.prototype.writeBigUInt64LE = se(function(l, w = 0) {
    return R(this, l, w, BigInt(0), BigInt("0xffffffffffffffff"));
  }), t.prototype.writeBigUInt64BE = se(function(l, w = 0) {
    return J(this, l, w, BigInt(0), BigInt("0xffffffffffffffff"));
  }), t.prototype.writeIntLE = function(l, w, x, U) {
    if (l = +l, w = w >>> 0, !U) {
      let V = Math.pow(2, 8 * x - 1);
      Z(this, l, w, x, V - 1, -V);
    }
    let X = 0, fe = 1, Se = 0;
    for (this[w] = l & 255; ++X < x && (fe *= 256); ) l < 0 && Se === 0 && this[w + X - 1] !== 0 && (Se = 1), this[w + X] = (l / fe >> 0) - Se & 255;
    return w + x;
  }, t.prototype.writeIntBE = function(l, w, x, U) {
    if (l = +l, w = w >>> 0, !U) {
      let V = Math.pow(2, 8 * x - 1);
      Z(this, l, w, x, V - 1, -V);
    }
    let X = x - 1, fe = 1, Se = 0;
    for (this[w + X] = l & 255; --X >= 0 && (fe *= 256); ) l < 0 && Se === 0 && this[w + X + 1] !== 0 && (Se = 1), this[w + X] = (l / fe >> 0) - Se & 255;
    return w + x;
  }, t.prototype.writeInt8 = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[w] = l & 255, w + 1;
  }, t.prototype.writeInt16LE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 2, 32767, -32768), this[w] = l & 255, this[w + 1] = l >>> 8, w + 2;
  }, t.prototype.writeInt16BE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 2, 32767, -32768), this[w] = l >>> 8, this[w + 1] = l & 255, w + 2;
  }, t.prototype.writeInt32LE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 4, 2147483647, -2147483648), this[w] = l & 255, this[w + 1] = l >>> 8, this[w + 2] = l >>> 16, this[w + 3] = l >>> 24, w + 4;
  }, t.prototype.writeInt32BE = function(l, w, x) {
    return l = +l, w = w >>> 0, x || Z(this, l, w, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[w] = l >>> 24, this[w + 1] = l >>> 16, this[w + 2] = l >>> 8, this[w + 3] = l & 255, w + 4;
  }, t.prototype.writeBigInt64LE = se(function(l, w = 0) {
    return R(this, l, w, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), t.prototype.writeBigInt64BE = se(function(l, w = 0) {
    return J(this, l, w, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function be(l, w, x, U, X, fe) {
    if (x + U > l.length) throw new RangeError("Index out of range");
    if (x < 0) throw new RangeError("Index out of range");
  }
  function te(l, w, x, U, X) {
    return w = +w, x = x >>> 0, X || be(l, w, x, 4), f.write(l, w, x, U, 23, 4), x + 4;
  }
  t.prototype.writeFloatLE = function(l, w, x) {
    return te(this, l, w, !0, x);
  }, t.prototype.writeFloatBE = function(l, w, x) {
    return te(this, l, w, !1, x);
  };
  function we(l, w, x, U, X) {
    return w = +w, x = x >>> 0, X || be(l, w, x, 8), f.write(l, w, x, U, 52, 8), x + 8;
  }
  t.prototype.writeDoubleLE = function(l, w, x) {
    return we(this, l, w, !0, x);
  }, t.prototype.writeDoubleBE = function(l, w, x) {
    return we(this, l, w, !1, x);
  }, t.prototype.copy = function(l, w, x, U) {
    if (!t.isBuffer(l)) throw new TypeError("argument should be a Buffer");
    if (x || (x = 0), !U && U !== 0 && (U = this.length), w >= l.length && (w = l.length), w || (w = 0), U > 0 && U < x && (U = x), U === x || l.length === 0 || this.length === 0) return 0;
    if (w < 0) throw new RangeError("targetStart out of bounds");
    if (x < 0 || x >= this.length) throw new RangeError("Index out of range");
    if (U < 0) throw new RangeError("sourceEnd out of bounds");
    U > this.length && (U = this.length), l.length - w < U - x && (U = l.length - w + x);
    let X = U - x;
    return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(w, x, U) : Uint8Array.prototype.set.call(l, this.subarray(x, U), w), X;
  }, t.prototype.fill = function(l, w, x, U) {
    if (typeof l == "string") {
      if (typeof w == "string" ? (U = w, w = 0, x = this.length) : typeof x == "string" && (U = x, x = this.length), U !== void 0 && typeof U != "string") throw new TypeError("encoding must be a string");
      if (typeof U == "string" && !t.isEncoding(U)) throw new TypeError("Unknown encoding: " + U);
      if (l.length === 1) {
        let fe = l.charCodeAt(0);
        (U === "utf8" && fe < 128 || U === "latin1") && (l = fe);
      }
    } else typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (w < 0 || this.length < w || this.length < x) throw new RangeError("Out of range index");
    if (x <= w) return this;
    w = w >>> 0, x = x === void 0 ? this.length : x >>> 0, l || (l = 0);
    let X;
    if (typeof l == "number") for (X = w; X < x; ++X) this[X] = l;
    else {
      let fe = t.isBuffer(l) ? l : t.from(l, U), Se = fe.length;
      if (Se === 0) throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (X = 0; X < x - w; ++X) this[X + w] = fe[X % Se];
    }
    return this;
  };
  let H = {};
  function N(l, w, x) {
    H[l] = class extends x {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: w.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${l}]`, this.stack, delete this.name;
      }
      get code() {
        return l;
      }
      set code(U) {
        Object.defineProperty(this, "code", { configurable: !0, enumerable: !0, value: U, writable: !0 });
      }
      toString() {
        return `${this.name} [${l}]: ${this.message}`;
      }
    };
  }
  N("ERR_BUFFER_OUT_OF_BOUNDS", function(l) {
    return l ? `${l} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), N("ERR_INVALID_ARG_TYPE", function(l, w) {
    return `The "${l}" argument must be of type number. Received type ${typeof w}`;
  }, TypeError), N("ERR_OUT_OF_RANGE", function(l, w, x) {
    let U = `The value of "${l}" is out of range.`, X = x;
    return Number.isInteger(x) && Math.abs(x) > 2 ** 32 ? X = ne(String(x)) : typeof x == "bigint" && (X = String(x), (x > BigInt(2) ** BigInt(32) || x < -(BigInt(2) ** BigInt(32))) && (X = ne(X)), X += "n"), U += ` It must be ${w}. Received ${X}`, U;
  }, RangeError);
  function ne(l) {
    let w = "", x = l.length, U = l[0] === "-" ? 1 : 0;
    for (; x >= U + 4; x -= 3) w = `_${l.slice(x - 3, x)}${w}`;
    return `${l.slice(0, x)}${w}`;
  }
  function z(l, w, x) {
    Y(w, "offset"), (l[w] === void 0 || l[w + x] === void 0) && ye(w, l.length - (x + 1));
  }
  function G(l, w, x, U, X, fe) {
    if (l > x || l < w) {
      let Se = typeof w == "bigint" ? "n" : "", V;
      throw w === 0 || w === BigInt(0) ? V = `>= 0${Se} and < 2${Se} ** ${(fe + 1) * 8}${Se}` : V = `>= -(2${Se} ** ${(fe + 1) * 8 - 1}${Se}) and < 2 ** ${(fe + 1) * 8 - 1}${Se}`, new H.ERR_OUT_OF_RANGE("value", V, l);
    }
    z(U, X, fe);
  }
  function Y(l, w) {
    if (typeof l != "number") throw new H.ERR_INVALID_ARG_TYPE(w, "number", l);
  }
  function ye(l, w, x) {
    throw Math.floor(l) !== l ? (Y(l, x), new H.ERR_OUT_OF_RANGE("offset", "an integer", l)) : w < 0 ? new H.ERR_BUFFER_OUT_OF_BOUNDS() : new H.ERR_OUT_OF_RANGE("offset", `>= 0 and <= ${w}`, l);
  }
  let oe = /[^+/0-9A-Za-z-_]/g;
  function M(l) {
    if (l = l.split("=")[0], l = l.trim().replace(oe, ""), l.length < 2) return "";
    for (; l.length % 4 !== 0; ) l = l + "=";
    return l;
  }
  function W(l, w) {
    w = w || 1 / 0;
    let x, U = l.length, X = null, fe = [];
    for (let Se = 0; Se < U; ++Se) {
      if (x = l.charCodeAt(Se), x > 55295 && x < 57344) {
        if (!X) {
          if (x > 56319) {
            (w -= 3) > -1 && fe.push(239, 191, 189);
            continue;
          } else if (Se + 1 === U) {
            (w -= 3) > -1 && fe.push(239, 191, 189);
            continue;
          }
          X = x;
          continue;
        }
        if (x < 56320) {
          (w -= 3) > -1 && fe.push(239, 191, 189), X = x;
          continue;
        }
        x = (X - 55296 << 10 | x - 56320) + 65536;
      } else X && (w -= 3) > -1 && fe.push(239, 191, 189);
      if (X = null, x < 128) {
        if ((w -= 1) < 0) break;
        fe.push(x);
      } else if (x < 2048) {
        if ((w -= 2) < 0) break;
        fe.push(x >> 6 | 192, x & 63 | 128);
      } else if (x < 65536) {
        if ((w -= 3) < 0) break;
        fe.push(x >> 12 | 224, x >> 6 & 63 | 128, x & 63 | 128);
      } else if (x < 1114112) {
        if ((w -= 4) < 0) break;
        fe.push(x >> 18 | 240, x >> 12 & 63 | 128, x >> 6 & 63 | 128, x & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return fe;
  }
  function ee(l) {
    let w = [];
    for (let x = 0; x < l.length; ++x) w.push(l.charCodeAt(x) & 255);
    return w;
  }
  function he(l, w) {
    let x, U, X, fe = [];
    for (let Se = 0; Se < l.length && !((w -= 2) < 0); ++Se) x = l.charCodeAt(Se), U = x >> 8, X = x % 256, fe.push(X), fe.push(U);
    return fe;
  }
  function pe(l) {
    return h.toByteArray(M(l));
  }
  function me(l, w, x, U) {
    let X;
    for (X = 0; X < U && !(X + x >= w.length || X >= l.length); ++X) w[X + x] = l[X];
    return X;
  }
  function $(l, w) {
    return l instanceof w || l != null && l.constructor != null && l.constructor.name != null && l.constructor.name === w.name;
  }
  function ge(l) {
    return l !== l;
  }
  let ve = (function() {
    let l = "0123456789abcdef", w = new Array(256);
    for (let x = 0; x < 16; ++x) {
      let U = x * 16;
      for (let X = 0; X < 16; ++X) w[U + X] = l[x] + l[X];
    }
    return w;
  })();
  function se(l) {
    return typeof BigInt > "u" ? Oe : l;
  }
  function Oe() {
    throw new Error("BigInt not supported");
  }
  return pt;
}
var kt, Wn, qt, qn, pt, $n, Za = ze(() => {
  le(), ce(), ue(), kt = {}, Wn = !1, qt = {}, qn = !1, pt = {}, $n = !1;
}), Ne = {};
Mt(Ne, { Buffer: () => Ir, INSPECT_MAX_BYTES: () => bs, default: () => nt, kMaxLength: () => ms });
var nt, Ir, bs, ms, Be = ze(() => {
  le(), ce(), ue(), Za(), nt = Xa(), nt.Buffer, nt.SlowBuffer, nt.INSPECT_MAX_BYTES, nt.kMaxLength, Ir = nt.Buffer, bs = nt.INSPECT_MAX_BYTES, ms = nt.kMaxLength;
}), ce = ze(() => {
  Be();
}), Me = de((h, f) => {
  le(), ce(), ue();
  var s = class extends Error {
    constructor(a) {
      if (!Array.isArray(a)) throw new TypeError(`Expected input to be an Array, got ${typeof a}`);
      let u = "";
      for (let r = 0; r < a.length; r++) u += `    ${a[r].stack}
`;
      super(u), this.name = "AggregateError", this.errors = a;
    }
  };
  f.exports = { AggregateError: s, ArrayIsArray(a) {
    return Array.isArray(a);
  }, ArrayPrototypeIncludes(a, u) {
    return a.includes(u);
  }, ArrayPrototypeIndexOf(a, u) {
    return a.indexOf(u);
  }, ArrayPrototypeJoin(a, u) {
    return a.join(u);
  }, ArrayPrototypeMap(a, u) {
    return a.map(u);
  }, ArrayPrototypePop(a, u) {
    return a.pop(u);
  }, ArrayPrototypePush(a, u) {
    return a.push(u);
  }, ArrayPrototypeSlice(a, u, r) {
    return a.slice(u, r);
  }, Error, FunctionPrototypeCall(a, u, ...r) {
    return a.call(u, ...r);
  }, FunctionPrototypeSymbolHasInstance(a, u) {
    return Function.prototype[Symbol.hasInstance].call(a, u);
  }, MathFloor: Math.floor, Number, NumberIsInteger: Number.isInteger, NumberIsNaN: Number.isNaN, NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER, NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER, NumberParseInt: Number.parseInt, ObjectDefineProperties(a, u) {
    return Object.defineProperties(a, u);
  }, ObjectDefineProperty(a, u, r) {
    return Object.defineProperty(a, u, r);
  }, ObjectGetOwnPropertyDescriptor(a, u) {
    return Object.getOwnPropertyDescriptor(a, u);
  }, ObjectKeys(a) {
    return Object.keys(a);
  }, ObjectSetPrototypeOf(a, u) {
    return Object.setPrototypeOf(a, u);
  }, Promise, PromisePrototypeCatch(a, u) {
    return a.catch(u);
  }, PromisePrototypeThen(a, u, r) {
    return a.then(u, r);
  }, PromiseReject(a) {
    return Promise.reject(a);
  }, PromiseResolve(a) {
    return Promise.resolve(a);
  }, ReflectApply: Reflect.apply, RegExpPrototypeTest(a, u) {
    return a.test(u);
  }, SafeSet: Set, String, StringPrototypeSlice(a, u, r) {
    return a.slice(u, r);
  }, StringPrototypeToLowerCase(a) {
    return a.toLowerCase();
  }, StringPrototypeToUpperCase(a) {
    return a.toUpperCase();
  }, StringPrototypeTrim(a) {
    return a.trim();
  }, Symbol, SymbolFor: Symbol.for, SymbolAsyncIterator: Symbol.asyncIterator, SymbolHasInstance: Symbol.hasInstance, SymbolIterator: Symbol.iterator, SymbolDispose: Symbol.dispose || Symbol("Symbol.dispose"), SymbolAsyncDispose: Symbol.asyncDispose || Symbol("Symbol.asyncDispose"), TypedArrayPrototypeSet(a, u, r) {
    return a.set(u, r);
  }, Boolean, Uint8Array };
}), vs = de((h, f) => {
  le(), ce(), ue(), f.exports = { format(s, ...a) {
    return s.replace(/%([sdifj])/g, function(...[u, r]) {
      let t = a.shift();
      return r === "f" ? t.toFixed(6) : r === "j" ? JSON.stringify(t) : r === "s" && typeof t == "object" ? `${t.constructor !== Object ? t.constructor.name : ""} {}`.trim() : t.toString();
    });
  }, inspect(s) {
    switch (typeof s) {
      case "string":
        if (s.includes("'")) if (s.includes('"')) {
          if (!s.includes("`") && !s.includes("${")) return `\`${s}\``;
        } else return `"${s}"`;
        return `'${s}'`;
      case "number":
        return isNaN(s) ? "NaN" : Object.is(s, -0) ? String(s) : s;
      case "bigint":
        return `${String(s)}n`;
      case "boolean":
      case "undefined":
        return String(s);
      case "object":
        return "{}";
    }
  } };
}), qe = de((h, f) => {
  le(), ce(), ue();
  var { format: s, inspect: a } = vs(), { AggregateError: u } = Me(), r = globalThis.AggregateError || u, t = Symbol("kIsNodeError"), n = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], e = /^([A-Z][a-z0-9]*)+$/, i = "__node_internal_", o = {};
  function g(p, _) {
    if (!p) throw new o.ERR_INTERNAL_ASSERTION(_);
  }
  function d(p) {
    let _ = "", I = p.length, v = p[0] === "-" ? 1 : 0;
    for (; I >= v + 4; I -= 3) _ = `_${p.slice(I - 3, I)}${_}`;
    return `${p.slice(0, I)}${_}`;
  }
  function m(p, _, I) {
    if (typeof _ == "function") return g(_.length <= I.length, `Code: ${p}; The provided arguments length (${I.length}) does not match the required ones (${_.length}).`), _(...I);
    let v = (_.match(/%[dfijoOs]/g) || []).length;
    return g(v === I.length, `Code: ${p}; The provided arguments length (${I.length}) does not match the required ones (${v}).`), I.length === 0 ? _ : s(_, ...I);
  }
  function c(p, _, I) {
    I || (I = Error);
    class v extends I {
      constructor(...E) {
        super(m(p, _, E));
      }
      toString() {
        return `${this.name} [${p}]: ${this.message}`;
      }
    }
    Object.defineProperties(v.prototype, { name: { value: I.name, writable: !0, enumerable: !1, configurable: !0 }, toString: { value() {
      return `${this.name} [${p}]: ${this.message}`;
    }, writable: !0, enumerable: !1, configurable: !0 } }), v.prototype.code = p, v.prototype[t] = !0, o[p] = v;
  }
  function y(p) {
    let _ = i + p.name;
    return Object.defineProperty(p, "name", { value: _ }), p;
  }
  function b(p, _) {
    if (p && _ && p !== _) {
      if (Array.isArray(_.errors)) return _.errors.push(p), _;
      let I = new r([_, p], _.message);
      return I.code = _.code, I;
    }
    return p || _;
  }
  var S = class extends Error {
    constructor(p = "The operation was aborted", _ = void 0) {
      if (_ !== void 0 && typeof _ != "object") throw new o.ERR_INVALID_ARG_TYPE("options", "Object", _);
      super(p, _), this.code = "ABORT_ERR", this.name = "AbortError";
    }
  };
  c("ERR_ASSERTION", "%s", Error), c("ERR_INVALID_ARG_TYPE", (p, _, I) => {
    g(typeof p == "string", "'name' must be a string"), Array.isArray(_) || (_ = [_]);
    let v = "The ";
    p.endsWith(" argument") ? v += `${p} ` : v += `"${p}" ${p.includes(".") ? "property" : "argument"} `, v += "must be ";
    let A = [], E = [], T = [];
    for (let P of _) g(typeof P == "string", "All expected entries have to be of type string"), n.includes(P) ? A.push(P.toLowerCase()) : e.test(P) ? E.push(P) : (g(P !== "object", 'The value "object" should be written as "Object"'), T.push(P));
    if (E.length > 0) {
      let P = A.indexOf("object");
      P !== -1 && (A.splice(A, P, 1), E.push("Object"));
    }
    if (A.length > 0) {
      switch (A.length) {
        case 1:
          v += `of type ${A[0]}`;
          break;
        case 2:
          v += `one of type ${A[0]} or ${A[1]}`;
          break;
        default: {
          let P = A.pop();
          v += `one of type ${A.join(", ")}, or ${P}`;
        }
      }
      (E.length > 0 || T.length > 0) && (v += " or ");
    }
    if (E.length > 0) {
      switch (E.length) {
        case 1:
          v += `an instance of ${E[0]}`;
          break;
        case 2:
          v += `an instance of ${E[0]} or ${E[1]}`;
          break;
        default: {
          let P = E.pop();
          v += `an instance of ${E.join(", ")}, or ${P}`;
        }
      }
      T.length > 0 && (v += " or ");
    }
    switch (T.length) {
      case 0:
        break;
      case 1:
        T[0].toLowerCase() !== T[0] && (v += "an "), v += `${T[0]}`;
        break;
      case 2:
        v += `one of ${T[0]} or ${T[1]}`;
        break;
      default: {
        let P = T.pop();
        v += `one of ${T.join(", ")}, or ${P}`;
      }
    }
    if (I == null) v += `. Received ${I}`;
    else if (typeof I == "function" && I.name) v += `. Received function ${I.name}`;
    else if (typeof I == "object") {
      var C;
      if ((C = I.constructor) !== null && C !== void 0 && C.name) v += `. Received an instance of ${I.constructor.name}`;
      else {
        let P = a(I, { depth: -1 });
        v += `. Received ${P}`;
      }
    } else {
      let P = a(I, { colors: !1 });
      P.length > 25 && (P = `${P.slice(0, 25)}...`), v += `. Received type ${typeof I} (${P})`;
    }
    return v;
  }, TypeError), c("ERR_INVALID_ARG_VALUE", (p, _, I = "is invalid") => {
    let v = a(_);
    return v.length > 128 && (v = v.slice(0, 128) + "..."), `The ${p.includes(".") ? "property" : "argument"} '${p}' ${I}. Received ${v}`;
  }, TypeError), c("ERR_INVALID_RETURN_VALUE", (p, _, I) => {
    var v;
    let A = I != null && (v = I.constructor) !== null && v !== void 0 && v.name ? `instance of ${I.constructor.name}` : `type ${typeof I}`;
    return `Expected ${p} to be returned from the "${_}" function but got ${A}.`;
  }, TypeError), c("ERR_MISSING_ARGS", (...p) => {
    g(p.length > 0, "At least one arg needs to be specified");
    let _, I = p.length;
    switch (p = (Array.isArray(p) ? p : [p]).map((v) => `"${v}"`).join(" or "), I) {
      case 1:
        _ += `The ${p[0]} argument`;
        break;
      case 2:
        _ += `The ${p[0]} and ${p[1]} arguments`;
        break;
      default:
        {
          let v = p.pop();
          _ += `The ${p.join(", ")}, and ${v} arguments`;
        }
        break;
    }
    return `${_} must be specified`;
  }, TypeError), c("ERR_OUT_OF_RANGE", (p, _, I) => {
    g(_, 'Missing "range" argument');
    let v;
    if (Number.isInteger(I) && Math.abs(I) > 2 ** 32) v = d(String(I));
    else if (typeof I == "bigint") {
      v = String(I);
      let A = BigInt(2) ** BigInt(32);
      (I > A || I < -A) && (v = d(v)), v += "n";
    } else v = a(I);
    return `The value of "${p}" is out of range. It must be ${_}. Received ${v}`;
  }, RangeError), c("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), c("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), c("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), c("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), c("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), c("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), c("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), c("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), c("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), c("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), c("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), f.exports = { AbortError: S, aggregateTwoErrors: y(b), hideStackFrames: y, codes: o };
}), Ht = de((h, f) => {
  le(), ce(), ue();
  var { AbortController: s, AbortSignal: a } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
  f.exports = s, f.exports.AbortSignal = a, f.exports.default = s;
}), yt = {};
Mt(yt, { EventEmitter: () => ws, default: () => Pt, defaultMaxListeners: () => _s, init: () => Ss, listenerCount: () => Es, on: () => As, once: () => Is });
function el() {
  if (zn) return $t;
  zn = !0;
  var h = typeof Reflect == "object" ? Reflect : null, f = h && typeof h.apply == "function" ? h.apply : function(I, v, A) {
    return Function.prototype.apply.call(I, v, A);
  }, s;
  h && typeof h.ownKeys == "function" ? s = h.ownKeys : Object.getOwnPropertySymbols ? s = function(I) {
    return Object.getOwnPropertyNames(I).concat(Object.getOwnPropertySymbols(I));
  } : s = function(I) {
    return Object.getOwnPropertyNames(I);
  };
  function a(I) {
    console && console.warn && console.warn(I);
  }
  var u = Number.isNaN || function(I) {
    return I !== I;
  };
  function r() {
    r.init.call(this);
  }
  $t = r, $t.once = S, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._eventsCount = 0, r.prototype._maxListeners = void 0;
  var t = 10;
  function n(I) {
    if (typeof I != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof I);
  }
  Object.defineProperty(r, "defaultMaxListeners", { enumerable: !0, get: function() {
    return t;
  }, set: function(I) {
    if (typeof I != "number" || I < 0 || u(I)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + I + ".");
    t = I;
  } }), r.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, r.prototype.setMaxListeners = function(I) {
    if (typeof I != "number" || I < 0 || u(I)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + I + ".");
    return this._maxListeners = I, this;
  };
  function e(I) {
    return I._maxListeners === void 0 ? r.defaultMaxListeners : I._maxListeners;
  }
  r.prototype.getMaxListeners = function() {
    return e(this);
  }, r.prototype.emit = function(I) {
    for (var v = [], A = 1; A < arguments.length; A++) v.push(arguments[A]);
    var E = I === "error", T = this._events;
    if (T !== void 0) E = E && T.error === void 0;
    else if (!E) return !1;
    if (E) {
      var C;
      if (v.length > 0 && (C = v[0]), C instanceof Error) throw C;
      var P = new Error("Unhandled error." + (C ? " (" + C.message + ")" : ""));
      throw P.context = C, P;
    }
    var L = T[I];
    if (L === void 0) return !1;
    if (typeof L == "function") f(L, this, v);
    else for (var O = L.length, q = c(L, O), A = 0; A < O; ++A) f(q[A], this, v);
    return !0;
  };
  function i(I, v, A, E) {
    var T, C, P;
    if (n(A), C = I._events, C === void 0 ? (C = I._events = /* @__PURE__ */ Object.create(null), I._eventsCount = 0) : (C.newListener !== void 0 && (I.emit("newListener", v, A.listener ? A.listener : A), C = I._events), P = C[v]), P === void 0) P = C[v] = A, ++I._eventsCount;
    else if (typeof P == "function" ? P = C[v] = E ? [A, P] : [P, A] : E ? P.unshift(A) : P.push(A), T = e(I), T > 0 && P.length > T && !P.warned) {
      P.warned = !0;
      var L = new Error("Possible EventEmitter memory leak detected. " + P.length + " " + String(v) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      L.name = "MaxListenersExceededWarning", L.emitter = I, L.type = v, L.count = P.length, a(L);
    }
    return I;
  }
  r.prototype.addListener = function(I, v) {
    return i(this, I, v, !1);
  }, r.prototype.on = r.prototype.addListener, r.prototype.prependListener = function(I, v) {
    return i(this, I, v, !0);
  };
  function o() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function g(I, v, A) {
    var E = { fired: !1, wrapFn: void 0, target: I, type: v, listener: A }, T = o.bind(E);
    return T.listener = A, E.wrapFn = T, T;
  }
  r.prototype.once = function(I, v) {
    return n(v), this.on(I, g(this, I, v)), this;
  }, r.prototype.prependOnceListener = function(I, v) {
    return n(v), this.prependListener(I, g(this, I, v)), this;
  }, r.prototype.removeListener = function(I, v) {
    var A, E, T, C, P;
    if (n(v), E = this._events, E === void 0) return this;
    if (A = E[I], A === void 0) return this;
    if (A === v || A.listener === v) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete E[I], E.removeListener && this.emit("removeListener", I, A.listener || v));
    else if (typeof A != "function") {
      for (T = -1, C = A.length - 1; C >= 0; C--) if (A[C] === v || A[C].listener === v) {
        P = A[C].listener, T = C;
        break;
      }
      if (T < 0) return this;
      T === 0 ? A.shift() : y(A, T), A.length === 1 && (E[I] = A[0]), E.removeListener !== void 0 && this.emit("removeListener", I, P || v);
    }
    return this;
  }, r.prototype.off = r.prototype.removeListener, r.prototype.removeAllListeners = function(I) {
    var v, A, E;
    if (A = this._events, A === void 0) return this;
    if (A.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : A[I] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete A[I]), this;
    if (arguments.length === 0) {
      var T = Object.keys(A), C;
      for (E = 0; E < T.length; ++E) C = T[E], C !== "removeListener" && this.removeAllListeners(C);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (v = A[I], typeof v == "function") this.removeListener(I, v);
    else if (v !== void 0) for (E = v.length - 1; E >= 0; E--) this.removeListener(I, v[E]);
    return this;
  };
  function d(I, v, A) {
    var E = I._events;
    if (E === void 0) return [];
    var T = E[v];
    return T === void 0 ? [] : typeof T == "function" ? A ? [T.listener || T] : [T] : A ? b(T) : c(T, T.length);
  }
  r.prototype.listeners = function(I) {
    return d(this, I, !0);
  }, r.prototype.rawListeners = function(I) {
    return d(this, I, !1);
  }, r.listenerCount = function(I, v) {
    return typeof I.listenerCount == "function" ? I.listenerCount(v) : m.call(I, v);
  }, r.prototype.listenerCount = m;
  function m(I) {
    var v = this._events;
    if (v !== void 0) {
      var A = v[I];
      if (typeof A == "function") return 1;
      if (A !== void 0) return A.length;
    }
    return 0;
  }
  r.prototype.eventNames = function() {
    return this._eventsCount > 0 ? s(this._events) : [];
  };
  function c(I, v) {
    for (var A = new Array(v), E = 0; E < v; ++E) A[E] = I[E];
    return A;
  }
  function y(I, v) {
    for (; v + 1 < I.length; v++) I[v] = I[v + 1];
    I.pop();
  }
  function b(I) {
    for (var v = new Array(I.length), A = 0; A < v.length; ++A) v[A] = I[A].listener || I[A];
    return v;
  }
  function S(I, v) {
    return new Promise(function(A, E) {
      function T(P) {
        I.removeListener(v, C), E(P);
      }
      function C() {
        typeof I.removeListener == "function" && I.removeListener("error", T), A([].slice.call(arguments));
      }
      _(I, v, C, { once: !0 }), v !== "error" && p(I, T, { once: !0 });
    });
  }
  function p(I, v, A) {
    typeof I.on == "function" && _(I, "error", v, A);
  }
  function _(I, v, A, E) {
    if (typeof I.on == "function") E.once ? I.once(v, A) : I.on(v, A);
    else if (typeof I.addEventListener == "function") I.addEventListener(v, function T(C) {
      E.once && I.removeEventListener(v, T), A(C);
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof I);
  }
  return $t;
}
var $t, zn, Pt, ws, _s, Ss, Es, As, Is, At = ze(() => {
  le(), ce(), ue(), $t = {}, zn = !1, Pt = el(), Pt.once, Pt.once = function(h, f) {
    return new Promise((s, a) => {
      function u(...t) {
        r !== void 0 && h.removeListener("error", r), s(t);
      }
      let r;
      f !== "error" && (r = (t) => {
        h.removeListener(name, u), a(t);
      }, h.once("error", r)), h.once(f, u);
    });
  }, Pt.on = function(h, f) {
    let s = [], a = [], u = null, r = !1, t = { async next() {
      let i = s.shift();
      if (i) return createIterResult(i, !1);
      if (u) {
        let o = Promise.reject(u);
        return u = null, o;
      }
      return r ? createIterResult(void 0, !0) : new Promise((o, g) => a.push({ resolve: o, reject: g }));
    }, async return() {
      h.removeListener(f, n), h.removeListener("error", e), r = !0;
      for (let i of a) i.resolve(createIterResult(void 0, !0));
      return createIterResult(void 0, !0);
    }, throw(i) {
      u = i, h.removeListener(f, n), h.removeListener("error", e);
    }, [Symbol.asyncIterator]() {
      return this;
    } };
    return h.on(f, n), h.on("error", e), t;
    function n(...i) {
      let o = a.shift();
      o ? o.resolve(createIterResult(i, !1)) : s.push(i);
    }
    function e(i) {
      r = !0;
      let o = a.shift();
      o ? o.reject(i) : u = i, t.return();
    }
  }, { EventEmitter: ws, defaultMaxListeners: _s, init: Ss, listenerCount: Es, on: As, once: Is } = Pt;
}), $e = de((h, f) => {
  le(), ce(), ue();
  var s = (Be(), Pe(Ne)), { format: a, inspect: u } = vs(), { codes: { ERR_INVALID_ARG_TYPE: r } } = qe(), { kResistStopPropagation: t, AggregateError: n, SymbolDispose: e } = Me(), i = globalThis.AbortSignal || Ht().AbortSignal, o = globalThis.AbortController || Ht().AbortController, g = Object.getPrototypeOf(async function() {
  }).constructor, d = globalThis.Blob || s.Blob, m = typeof d < "u" ? function(b) {
    return b instanceof d;
  } : function(b) {
    return !1;
  }, c = (b, S) => {
    if (b !== void 0 && (b === null || typeof b != "object" || !("aborted" in b))) throw new r(S, "AbortSignal", b);
  }, y = (b, S) => {
    if (typeof b != "function") throw new r(S, "Function", b);
  };
  f.exports = { AggregateError: n, kEmptyObject: Object.freeze({}), once(b) {
    let S = !1;
    return function(...p) {
      S || (S = !0, b.apply(this, p));
    };
  }, createDeferredPromise: function() {
    let b, S;
    return { promise: new Promise((p, _) => {
      b = p, S = _;
    }), resolve: b, reject: S };
  }, promisify(b) {
    return new Promise((S, p) => {
      b((_, ...I) => _ ? p(_) : S(...I));
    });
  }, debuglog() {
    return function() {
    };
  }, format: a, inspect: u, types: { isAsyncFunction(b) {
    return b instanceof g;
  }, isArrayBufferView(b) {
    return ArrayBuffer.isView(b);
  } }, isBlob: m, deprecate(b, S) {
    return b;
  }, addAbortListener: (At(), Pe(yt)).addAbortListener || function(b, S) {
    if (b === void 0) throw new r("signal", "AbortSignal", b);
    c(b, "signal"), y(S, "listener");
    let p;
    return b.aborted ? queueMicrotask(() => S()) : (b.addEventListener("abort", S, { __proto__: null, once: !0, [t]: !0 }), p = () => {
      b.removeEventListener("abort", S);
    }), { __proto__: null, [e]() {
      var _;
      (_ = p) === null || _ === void 0 || _();
    } };
  }, AbortSignalAny: i.any || function(b) {
    if (b.length === 1) return b[0];
    let S = new o(), p = () => S.abort();
    return b.forEach((_) => {
      c(_, "signals"), _.addEventListener("abort", p, { once: !0 });
    }), S.signal.addEventListener("abort", () => {
      b.forEach((_) => _.removeEventListener("abort", p));
    }, { once: !0 }), S.signal;
  } }, f.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom");
}), Gt = de((h, f) => {
  le(), ce(), ue();
  var { ArrayIsArray: s, ArrayPrototypeIncludes: a, ArrayPrototypeJoin: u, ArrayPrototypeMap: r, NumberIsInteger: t, NumberIsNaN: n, NumberMAX_SAFE_INTEGER: e, NumberMIN_SAFE_INTEGER: i, NumberParseInt: o, ObjectPrototypeHasOwnProperty: g, RegExpPrototypeExec: d, String: m, StringPrototypeToUpperCase: c, StringPrototypeTrim: y } = Me(), { hideStackFrames: b, codes: { ERR_SOCKET_BAD_PORT: S, ERR_INVALID_ARG_TYPE: p, ERR_INVALID_ARG_VALUE: _, ERR_OUT_OF_RANGE: I, ERR_UNKNOWN_SIGNAL: v } } = qe(), { normalizeEncoding: A } = $e(), { isAsyncFunction: E, isArrayBufferView: T } = $e().types, C = {};
  function P($) {
    return $ === ($ | 0);
  }
  function L($) {
    return $ === $ >>> 0;
  }
  var O = /^[0-7]+$/, q = "must be a 32-bit unsigned integer or an octal string";
  function D($, ge, ve) {
    if (typeof $ > "u" && ($ = ve), typeof $ == "string") {
      if (d(O, $) === null) throw new _(ge, $, q);
      $ = o($, 8);
    }
    return Q($, ge), $;
  }
  var B = b(($, ge, ve = i, se = e) => {
    if (typeof $ != "number") throw new p(ge, "number", $);
    if (!t($)) throw new I(ge, "an integer", $);
    if ($ < ve || $ > se) throw new I(ge, `>= ${ve} && <= ${se}`, $);
  }), ae = b(($, ge, ve = -2147483648, se = 2147483647) => {
    if (typeof $ != "number") throw new p(ge, "number", $);
    if (!t($)) throw new I(ge, "an integer", $);
    if ($ < ve || $ > se) throw new I(ge, `>= ${ve} && <= ${se}`, $);
  }), Q = b(($, ge, ve = !1) => {
    if (typeof $ != "number") throw new p(ge, "number", $);
    if (!t($)) throw new I(ge, "an integer", $);
    let se = ve ? 1 : 0, Oe = 4294967295;
    if ($ < se || $ > Oe) throw new I(ge, `>= ${se} && <= ${Oe}`, $);
  });
  function K($, ge) {
    if (typeof $ != "string") throw new p(ge, "string", $);
  }
  function re($, ge, ve = void 0, se) {
    if (typeof $ != "number") throw new p(ge, "number", $);
    if (ve != null && $ < ve || se != null && $ > se || (ve != null || se != null) && n($)) throw new I(ge, `${ve != null ? `>= ${ve}` : ""}${ve != null && se != null ? " && " : ""}${se != null ? `<= ${se}` : ""}`, $);
  }
  var F = b(($, ge, ve) => {
    if (!a(ve, $)) {
      let se = "must be one of: " + u(r(ve, (Oe) => typeof Oe == "string" ? `'${Oe}'` : m(Oe)), ", ");
      throw new _(ge, $, se);
    }
  });
  function Z($, ge) {
    if (typeof $ != "boolean") throw new p(ge, "boolean", $);
  }
  function R($, ge, ve) {
    return $ == null || !g($, ge) ? ve : $[ge];
  }
  var J = b(($, ge, ve = null) => {
    let se = R(ve, "allowArray", !1), Oe = R(ve, "allowFunction", !1);
    if (!R(ve, "nullable", !1) && $ === null || !se && s($) || typeof $ != "object" && (!Oe || typeof $ != "function")) throw new p(ge, "Object", $);
  }), be = b(($, ge) => {
    if ($ != null && typeof $ != "object" && typeof $ != "function") throw new p(ge, "a dictionary", $);
  }), te = b(($, ge, ve = 0) => {
    if (!s($)) throw new p(ge, "Array", $);
    if ($.length < ve) {
      let se = `must be longer than ${ve}`;
      throw new _(ge, $, se);
    }
  });
  function we($, ge) {
    te($, ge);
    for (let ve = 0; ve < $.length; ve++) K($[ve], `${ge}[${ve}]`);
  }
  function H($, ge) {
    te($, ge);
    for (let ve = 0; ve < $.length; ve++) Z($[ve], `${ge}[${ve}]`);
  }
  function N($, ge) {
    te($, ge);
    for (let ve = 0; ve < $.length; ve++) {
      let se = $[ve], Oe = `${ge}[${ve}]`;
      if (se == null) throw new p(Oe, "AbortSignal", se);
      ye(se, Oe);
    }
  }
  function ne($, ge = "signal") {
    if (K($, ge), C[$] === void 0) throw C[c($)] !== void 0 ? new v($ + " (signals must use all capital letters)") : new v($);
  }
  var z = b(($, ge = "buffer") => {
    if (!T($)) throw new p(ge, ["Buffer", "TypedArray", "DataView"], $);
  });
  function G($, ge) {
    let ve = A(ge), se = $.length;
    if (ve === "hex" && se % 2 !== 0) throw new _("encoding", ge, `is invalid for data of length ${se}`);
  }
  function Y($, ge = "Port", ve = !0) {
    if (typeof $ != "number" && typeof $ != "string" || typeof $ == "string" && y($).length === 0 || +$ !== +$ >>> 0 || $ > 65535 || $ === 0 && !ve) throw new S(ge, $, ve);
    return $ | 0;
  }
  var ye = b(($, ge) => {
    if ($ !== void 0 && ($ === null || typeof $ != "object" || !("aborted" in $))) throw new p(ge, "AbortSignal", $);
  }), oe = b(($, ge) => {
    if (typeof $ != "function") throw new p(ge, "Function", $);
  }), M = b(($, ge) => {
    if (typeof $ != "function" || E($)) throw new p(ge, "Function", $);
  }), W = b(($, ge) => {
    if ($ !== void 0) throw new p(ge, "undefined", $);
  });
  function ee($, ge, ve) {
    if (!a(ve, $)) throw new p(ge, `('${u(ve, "|")}')`, $);
  }
  var he = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;
  function pe($, ge) {
    if (typeof $ > "u" || !d(he, $)) throw new _(ge, $, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  function me($) {
    if (typeof $ == "string") return pe($, "hints"), $;
    if (s($)) {
      let ge = $.length, ve = "";
      if (ge === 0) return ve;
      for (let se = 0; se < ge; se++) {
        let Oe = $[se];
        pe(Oe, "hints"), ve += Oe, se !== ge - 1 && (ve += ", ");
      }
      return ve;
    }
    throw new _("hints", $, 'must be an array or string of format "</styles.css>; rel=preload; as=style"');
  }
  f.exports = { isInt32: P, isUint32: L, parseFileMode: D, validateArray: te, validateStringArray: we, validateBooleanArray: H, validateAbortSignalArray: N, validateBoolean: Z, validateBuffer: z, validateDictionary: be, validateEncoding: G, validateFunction: oe, validateInt32: ae, validateInteger: B, validateNumber: re, validateObject: J, validateOneOf: F, validatePlainFunction: M, validatePort: Y, validateSignalName: ne, validateString: K, validateUint32: Q, validateUndefined: W, validateUnion: ee, validateAbortSignal: ye, validateLinkHeaderValue: me };
}), It = de((h, f) => {
  le(), ce(), ue();
  var s = f.exports = {}, a, u;
  function r() {
    throw new Error("setTimeout has not been defined");
  }
  function t() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      typeof setTimeout == "function" ? a = setTimeout : a = r;
    } catch {
      a = r;
    }
    try {
      typeof clearTimeout == "function" ? u = clearTimeout : u = t;
    } catch {
      u = t;
    }
  })();
  function n(S) {
    if (a === setTimeout) return setTimeout(S, 0);
    if ((a === r || !a) && setTimeout) return a = setTimeout, setTimeout(S, 0);
    try {
      return a(S, 0);
    } catch {
      try {
        return a.call(null, S, 0);
      } catch {
        return a.call(this, S, 0);
      }
    }
  }
  function e(S) {
    if (u === clearTimeout) return clearTimeout(S);
    if ((u === t || !u) && clearTimeout) return u = clearTimeout, clearTimeout(S);
    try {
      return u(S);
    } catch {
      try {
        return u.call(null, S);
      } catch {
        return u.call(this, S);
      }
    }
  }
  var i = [], o = !1, g, d = -1;
  function m() {
    !o || !g || (o = !1, g.length ? i = g.concat(i) : d = -1, i.length && c());
  }
  function c() {
    if (!o) {
      var S = n(m);
      o = !0;
      for (var p = i.length; p; ) {
        for (g = i, i = []; ++d < p; ) g && g[d].run();
        d = -1, p = i.length;
      }
      g = null, o = !1, e(S);
    }
  }
  s.nextTick = function(S) {
    var p = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var _ = 1; _ < arguments.length; _++) p[_ - 1] = arguments[_];
    i.push(new y(S, p)), i.length === 1 && !o && n(c);
  };
  function y(S, p) {
    this.fun = S, this.array = p;
  }
  y.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {};
  function b() {
  }
  s.on = b, s.addListener = b, s.once = b, s.off = b, s.removeListener = b, s.removeAllListeners = b, s.emit = b, s.prependListener = b, s.prependOnceListener = b, s.listeners = function(S) {
    return [];
  }, s.binding = function(S) {
    throw new Error("process.binding is not supported");
  }, s.cwd = function() {
    return "/";
  }, s.chdir = function(S) {
    throw new Error("process.chdir is not supported");
  }, s.umask = function() {
    return 0;
  };
}), lt = de((h, f) => {
  le(), ce(), ue();
  var { SymbolAsyncIterator: s, SymbolIterator: a, SymbolFor: u } = Me(), r = u("nodejs.stream.destroyed"), t = u("nodejs.stream.errored"), n = u("nodejs.stream.readable"), e = u("nodejs.stream.writable"), i = u("nodejs.stream.disturbed"), o = u("nodejs.webstream.isClosedPromise"), g = u("nodejs.webstream.controllerErrorFunction");
  function d(R, J = !1) {
    var be;
    return !!(R && typeof R.pipe == "function" && typeof R.on == "function" && (!J || typeof R.pause == "function" && typeof R.resume == "function") && (!R._writableState || ((be = R._readableState) === null || be === void 0 ? void 0 : be.readable) !== !1) && (!R._writableState || R._readableState));
  }
  function m(R) {
    var J;
    return !!(R && typeof R.write == "function" && typeof R.on == "function" && (!R._readableState || ((J = R._writableState) === null || J === void 0 ? void 0 : J.writable) !== !1));
  }
  function c(R) {
    return !!(R && typeof R.pipe == "function" && R._readableState && typeof R.on == "function" && typeof R.write == "function");
  }
  function y(R) {
    return R && (R._readableState || R._writableState || typeof R.write == "function" && typeof R.on == "function" || typeof R.pipe == "function" && typeof R.on == "function");
  }
  function b(R) {
    return !!(R && !y(R) && typeof R.pipeThrough == "function" && typeof R.getReader == "function" && typeof R.cancel == "function");
  }
  function S(R) {
    return !!(R && !y(R) && typeof R.getWriter == "function" && typeof R.abort == "function");
  }
  function p(R) {
    return !!(R && !y(R) && typeof R.readable == "object" && typeof R.writable == "object");
  }
  function _(R) {
    return b(R) || S(R) || p(R);
  }
  function I(R, J) {
    return R == null ? !1 : J === !0 ? typeof R[s] == "function" : J === !1 ? typeof R[a] == "function" : typeof R[s] == "function" || typeof R[a] == "function";
  }
  function v(R) {
    if (!y(R)) return null;
    let J = R._writableState, be = R._readableState, te = J || be;
    return !!(R.destroyed || R[r] || te != null && te.destroyed);
  }
  function A(R) {
    if (!m(R)) return null;
    if (R.writableEnded === !0) return !0;
    let J = R._writableState;
    return J != null && J.errored ? !1 : typeof J?.ended != "boolean" ? null : J.ended;
  }
  function E(R, J) {
    if (!m(R)) return null;
    if (R.writableFinished === !0) return !0;
    let be = R._writableState;
    return be != null && be.errored ? !1 : typeof be?.finished != "boolean" ? null : !!(be.finished || J === !1 && be.ended === !0 && be.length === 0);
  }
  function T(R) {
    if (!d(R)) return null;
    if (R.readableEnded === !0) return !0;
    let J = R._readableState;
    return !J || J.errored ? !1 : typeof J?.ended != "boolean" ? null : J.ended;
  }
  function C(R, J) {
    if (!d(R)) return null;
    let be = R._readableState;
    return be != null && be.errored ? !1 : typeof be?.endEmitted != "boolean" ? null : !!(be.endEmitted || J === !1 && be.ended === !0 && be.length === 0);
  }
  function P(R) {
    return R && R[n] != null ? R[n] : typeof R?.readable != "boolean" ? null : v(R) ? !1 : d(R) && R.readable && !C(R);
  }
  function L(R) {
    return R && R[e] != null ? R[e] : typeof R?.writable != "boolean" ? null : v(R) ? !1 : m(R) && R.writable && !A(R);
  }
  function O(R, J) {
    return y(R) ? v(R) ? !0 : !(J?.readable !== !1 && P(R) || J?.writable !== !1 && L(R)) : null;
  }
  function q(R) {
    var J, be;
    return y(R) ? R.writableErrored ? R.writableErrored : (J = (be = R._writableState) === null || be === void 0 ? void 0 : be.errored) !== null && J !== void 0 ? J : null : null;
  }
  function D(R) {
    var J, be;
    return y(R) ? R.readableErrored ? R.readableErrored : (J = (be = R._readableState) === null || be === void 0 ? void 0 : be.errored) !== null && J !== void 0 ? J : null : null;
  }
  function B(R) {
    if (!y(R)) return null;
    if (typeof R.closed == "boolean") return R.closed;
    let J = R._writableState, be = R._readableState;
    return typeof J?.closed == "boolean" || typeof be?.closed == "boolean" ? J?.closed || be?.closed : typeof R._closed == "boolean" && ae(R) ? R._closed : null;
  }
  function ae(R) {
    return typeof R._closed == "boolean" && typeof R._defaultKeepAlive == "boolean" && typeof R._removedConnection == "boolean" && typeof R._removedContLen == "boolean";
  }
  function Q(R) {
    return typeof R._sent100 == "boolean" && ae(R);
  }
  function K(R) {
    var J;
    return typeof R._consuming == "boolean" && typeof R._dumped == "boolean" && ((J = R.req) === null || J === void 0 ? void 0 : J.upgradeOrConnect) === void 0;
  }
  function re(R) {
    if (!y(R)) return null;
    let J = R._writableState, be = R._readableState, te = J || be;
    return !te && Q(R) || !!(te && te.autoDestroy && te.emitClose && te.closed === !1);
  }
  function F(R) {
    var J;
    return !!(R && ((J = R[i]) !== null && J !== void 0 ? J : R.readableDidRead || R.readableAborted));
  }
  function Z(R) {
    var J, be, te, we, H, N, ne, z, G, Y;
    return !!(R && ((J = (be = (te = (we = (H = (N = R[t]) !== null && N !== void 0 ? N : R.readableErrored) !== null && H !== void 0 ? H : R.writableErrored) !== null && we !== void 0 ? we : (ne = R._readableState) === null || ne === void 0 ? void 0 : ne.errorEmitted) !== null && te !== void 0 ? te : (z = R._writableState) === null || z === void 0 ? void 0 : z.errorEmitted) !== null && be !== void 0 ? be : (G = R._readableState) === null || G === void 0 ? void 0 : G.errored) !== null && J !== void 0 ? J : !((Y = R._writableState) === null || Y === void 0) && Y.errored));
  }
  f.exports = { isDestroyed: v, kIsDestroyed: r, isDisturbed: F, kIsDisturbed: i, isErrored: Z, kIsErrored: t, isReadable: P, kIsReadable: n, kIsClosedPromise: o, kControllerErrorFunction: g, kIsWritable: e, isClosed: B, isDuplexNodeStream: c, isFinished: O, isIterable: I, isReadableNodeStream: d, isReadableStream: b, isReadableEnded: T, isReadableFinished: C, isReadableErrored: D, isNodeStream: y, isWebStream: _, isWritable: L, isWritableNodeStream: m, isWritableStream: S, isWritableEnded: A, isWritableFinished: E, isWritableErrored: q, isServerRequest: K, isServerResponse: Q, willEmitClose: re, isTransformStream: p };
}), bt = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { AbortError: a, codes: u } = qe(), { ERR_INVALID_ARG_TYPE: r, ERR_STREAM_PREMATURE_CLOSE: t } = u, { kEmptyObject: n, once: e } = $e(), { validateAbortSignal: i, validateFunction: o, validateObject: g, validateBoolean: d } = Gt(), { Promise: m, PromisePrototypeThen: c, SymbolDispose: y } = Me(), { isClosed: b, isReadable: S, isReadableNodeStream: p, isReadableStream: _, isReadableFinished: I, isReadableErrored: v, isWritable: A, isWritableNodeStream: E, isWritableStream: T, isWritableFinished: C, isWritableErrored: P, isNodeStream: L, willEmitClose: O, kIsClosedPromise: q } = lt(), D;
  function B(F) {
    return F.setHeader && typeof F.abort == "function";
  }
  var ae = () => {
  };
  function Q(F, Z, R) {
    var J, be;
    if (arguments.length === 2 ? (R = Z, Z = n) : Z == null ? Z = n : g(Z, "options"), o(R, "callback"), i(Z.signal, "options.signal"), R = e(R), _(F) || T(F)) return K(F, Z, R);
    if (!L(F)) throw new r("stream", ["ReadableStream", "WritableStream", "Stream"], F);
    let te = (J = Z.readable) !== null && J !== void 0 ? J : p(F), we = (be = Z.writable) !== null && be !== void 0 ? be : E(F), H = F._writableState, N = F._readableState, ne = () => {
      F.writable || Y();
    }, z = O(F) && p(F) === te && E(F) === we, G = C(F, !1), Y = () => {
      G = !0, F.destroyed && (z = !1), !(z && (!F.readable || te)) && (!te || ye) && R.call(F);
    }, ye = I(F, !1), oe = () => {
      ye = !0, F.destroyed && (z = !1), !(z && (!F.writable || we)) && (!we || G) && R.call(F);
    }, M = ($) => {
      R.call(F, $);
    }, W = b(F), ee = () => {
      W = !0;
      let $ = P(F) || v(F);
      if ($ && typeof $ != "boolean") return R.call(F, $);
      if (te && !ye && p(F, !0) && !I(F, !1)) return R.call(F, new t());
      if (we && !G && !C(F, !1)) return R.call(F, new t());
      R.call(F);
    }, he = () => {
      W = !0;
      let $ = P(F) || v(F);
      if ($ && typeof $ != "boolean") return R.call(F, $);
      R.call(F);
    }, pe = () => {
      F.req.on("finish", Y);
    };
    B(F) ? (F.on("complete", Y), z || F.on("abort", ee), F.req ? pe() : F.on("request", pe)) : we && !H && (F.on("end", ne), F.on("close", ne)), !z && typeof F.aborted == "boolean" && F.on("aborted", ee), F.on("end", oe), F.on("finish", Y), Z.error !== !1 && F.on("error", M), F.on("close", ee), W ? s.nextTick(ee) : H != null && H.errorEmitted || N != null && N.errorEmitted ? z || s.nextTick(he) : (!te && (!z || S(F)) && (G || A(F) === !1) || !we && (!z || A(F)) && (ye || S(F) === !1) || N && F.req && F.aborted) && s.nextTick(he);
    let me = () => {
      R = ae, F.removeListener("aborted", ee), F.removeListener("complete", Y), F.removeListener("abort", ee), F.removeListener("request", pe), F.req && F.req.removeListener("finish", Y), F.removeListener("end", ne), F.removeListener("close", ne), F.removeListener("finish", Y), F.removeListener("end", oe), F.removeListener("error", M), F.removeListener("close", ee);
    };
    if (Z.signal && !W) {
      let $ = () => {
        let ge = R;
        me(), ge.call(F, new a(void 0, { cause: Z.signal.reason }));
      };
      if (Z.signal.aborted) s.nextTick($);
      else {
        D = D || $e().addAbortListener;
        let ge = D(Z.signal, $), ve = R;
        R = e((...se) => {
          ge[y](), ve.apply(F, se);
        });
      }
    }
    return me;
  }
  function K(F, Z, R) {
    let J = !1, be = ae;
    if (Z.signal) if (be = () => {
      J = !0, R.call(F, new a(void 0, { cause: Z.signal.reason }));
    }, Z.signal.aborted) s.nextTick(be);
    else {
      D = D || $e().addAbortListener;
      let we = D(Z.signal, be), H = R;
      R = e((...N) => {
        we[y](), H.apply(F, N);
      });
    }
    let te = (...we) => {
      J || s.nextTick(() => R.apply(F, we));
    };
    return c(F[q].promise, te, te), ae;
  }
  function re(F, Z) {
    var R;
    let J = !1;
    return Z === null && (Z = n), (R = Z) !== null && R !== void 0 && R.cleanup && (d(Z.cleanup, "cleanup"), J = Z.cleanup), new m((be, te) => {
      let we = Q(F, Z, (H) => {
        J && we(), H ? te(H) : be();
      });
    });
  }
  f.exports = Q, f.exports.finished = re;
}), jt = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { aggregateTwoErrors: a, codes: { ERR_MULTIPLE_CALLBACK: u }, AbortError: r } = qe(), { Symbol: t } = Me(), { kIsDestroyed: n, isDestroyed: e, isFinished: i, isServerRequest: o } = lt(), g = t("kDestroy"), d = t("kConstruct");
  function m(O, q, D) {
    O && (O.stack, q && !q.errored && (q.errored = O), D && !D.errored && (D.errored = O));
  }
  function c(O, q) {
    let D = this._readableState, B = this._writableState, ae = B || D;
    return B != null && B.destroyed || D != null && D.destroyed ? (typeof q == "function" && q(), this) : (m(O, B, D), B && (B.destroyed = !0), D && (D.destroyed = !0), ae.constructed ? y(this, O, q) : this.once(g, function(Q) {
      y(this, a(Q, O), q);
    }), this);
  }
  function y(O, q, D) {
    let B = !1;
    function ae(Q) {
      if (B) return;
      B = !0;
      let K = O._readableState, re = O._writableState;
      m(Q, re, K), re && (re.closed = !0), K && (K.closed = !0), typeof D == "function" && D(Q), Q ? s.nextTick(b, O, Q) : s.nextTick(S, O);
    }
    try {
      O._destroy(q || null, ae);
    } catch (Q) {
      ae(Q);
    }
  }
  function b(O, q) {
    p(O, q), S(O);
  }
  function S(O) {
    let q = O._readableState, D = O._writableState;
    D && (D.closeEmitted = !0), q && (q.closeEmitted = !0), (D != null && D.emitClose || q != null && q.emitClose) && O.emit("close");
  }
  function p(O, q) {
    let D = O._readableState, B = O._writableState;
    B != null && B.errorEmitted || D != null && D.errorEmitted || (B && (B.errorEmitted = !0), D && (D.errorEmitted = !0), O.emit("error", q));
  }
  function _() {
    let O = this._readableState, q = this._writableState;
    O && (O.constructed = !0, O.closed = !1, O.closeEmitted = !1, O.destroyed = !1, O.errored = null, O.errorEmitted = !1, O.reading = !1, O.ended = O.readable === !1, O.endEmitted = O.readable === !1), q && (q.constructed = !0, q.destroyed = !1, q.closed = !1, q.closeEmitted = !1, q.errored = null, q.errorEmitted = !1, q.finalCalled = !1, q.prefinished = !1, q.ended = q.writable === !1, q.ending = q.writable === !1, q.finished = q.writable === !1);
  }
  function I(O, q, D) {
    let B = O._readableState, ae = O._writableState;
    if (ae != null && ae.destroyed || B != null && B.destroyed) return this;
    B != null && B.autoDestroy || ae != null && ae.autoDestroy ? O.destroy(q) : q && (q.stack, ae && !ae.errored && (ae.errored = q), B && !B.errored && (B.errored = q), D ? s.nextTick(p, O, q) : p(O, q));
  }
  function v(O, q) {
    if (typeof O._construct != "function") return;
    let D = O._readableState, B = O._writableState;
    D && (D.constructed = !1), B && (B.constructed = !1), O.once(d, q), !(O.listenerCount(d) > 1) && s.nextTick(A, O);
  }
  function A(O) {
    let q = !1;
    function D(B) {
      if (q) {
        I(O, B ?? new u());
        return;
      }
      q = !0;
      let ae = O._readableState, Q = O._writableState, K = Q || ae;
      ae && (ae.constructed = !0), Q && (Q.constructed = !0), K.destroyed ? O.emit(g, B) : B ? I(O, B, !0) : s.nextTick(E, O);
    }
    try {
      O._construct((B) => {
        s.nextTick(D, B);
      });
    } catch (B) {
      s.nextTick(D, B);
    }
  }
  function E(O) {
    O.emit(d);
  }
  function T(O) {
    return O?.setHeader && typeof O.abort == "function";
  }
  function C(O) {
    O.emit("close");
  }
  function P(O, q) {
    O.emit("error", q), s.nextTick(C, O);
  }
  function L(O, q) {
    !O || e(O) || (!q && !i(O) && (q = new r()), o(O) ? (O.socket = null, O.destroy(q)) : T(O) ? O.abort() : T(O.req) ? O.req.abort() : typeof O.destroy == "function" ? O.destroy(q) : typeof O.close == "function" ? O.close() : q ? s.nextTick(P, O, q) : s.nextTick(C, O), O.destroyed || (O[n] = !0));
  }
  f.exports = { construct: v, destroyer: L, destroy: c, undestroy: _, errorOrDestroy: I };
}), Ui = de((h, f) => {
  le(), ce(), ue();
  var { ArrayIsArray: s, ObjectSetPrototypeOf: a } = Me(), { EventEmitter: u } = (At(), Pe(yt));
  function r(n) {
    u.call(this, n);
  }
  a(r.prototype, u.prototype), a(r, u), r.prototype.pipe = function(n, e) {
    let i = this;
    function o(S) {
      n.writable && n.write(S) === !1 && i.pause && i.pause();
    }
    i.on("data", o);
    function g() {
      i.readable && i.resume && i.resume();
    }
    n.on("drain", g), !n._isStdio && (!e || e.end !== !1) && (i.on("end", m), i.on("close", c));
    let d = !1;
    function m() {
      d || (d = !0, n.end());
    }
    function c() {
      d || (d = !0, typeof n.destroy == "function" && n.destroy());
    }
    function y(S) {
      b(), u.listenerCount(this, "error") === 0 && this.emit("error", S);
    }
    t(i, "error", y), t(n, "error", y);
    function b() {
      i.removeListener("data", o), n.removeListener("drain", g), i.removeListener("end", m), i.removeListener("close", c), i.removeListener("error", y), n.removeListener("error", y), i.removeListener("end", b), i.removeListener("close", b), n.removeListener("close", b);
    }
    return i.on("end", b), i.on("close", b), n.on("close", b), n.emit("pipe", i), n;
  };
  function t(n, e, i) {
    if (typeof n.prependListener == "function") return n.prependListener(e, i);
    !n._events || !n._events[e] ? n.on(e, i) : s(n._events[e]) ? n._events[e].unshift(i) : n._events[e] = [i, n._events[e]];
  }
  f.exports = { Stream: r, prependListener: t };
}), Tr = de((h, f) => {
  le(), ce(), ue();
  var { SymbolDispose: s } = Me(), { AbortError: a, codes: u } = qe(), { isNodeStream: r, isWebStream: t, kControllerErrorFunction: n } = lt(), e = bt(), { ERR_INVALID_ARG_TYPE: i } = u, o, g = (d, m) => {
    if (typeof d != "object" || !("aborted" in d)) throw new i(m, "AbortSignal", d);
  };
  f.exports.addAbortSignal = function(d, m) {
    if (g(d, "signal"), !r(m) && !t(m)) throw new i("stream", ["ReadableStream", "WritableStream", "Stream"], m);
    return f.exports.addAbortSignalNoValidate(d, m);
  }, f.exports.addAbortSignalNoValidate = function(d, m) {
    if (typeof d != "object" || !("aborted" in d)) return m;
    let c = r(m) ? () => {
      m.destroy(new a(void 0, { cause: d.reason }));
    } : () => {
      m[n](new a(void 0, { cause: d.reason }));
    };
    if (d.aborted) c();
    else {
      o = o || $e().addAbortListener;
      let y = o(d, c);
      e(m, y[s]);
    }
    return m;
  };
}), tl = de((h, f) => {
  le(), ce(), ue();
  var { StringPrototypeSlice: s, SymbolIterator: a, TypedArrayPrototypeSet: u, Uint8Array: r } = Me(), { Buffer: t } = (Be(), Pe(Ne)), { inspect: n } = $e();
  f.exports = class {
    constructor() {
      this.head = null, this.tail = null, this.length = 0;
    }
    push(e) {
      let i = { data: e, next: null };
      this.length > 0 ? this.tail.next = i : this.head = i, this.tail = i, ++this.length;
    }
    unshift(e) {
      let i = { data: e, next: this.head };
      this.length === 0 && (this.tail = i), this.head = i, ++this.length;
    }
    shift() {
      if (this.length === 0) return;
      let e = this.head.data;
      return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, e;
    }
    clear() {
      this.head = this.tail = null, this.length = 0;
    }
    join(e) {
      if (this.length === 0) return "";
      let i = this.head, o = "" + i.data;
      for (; (i = i.next) !== null; ) o += e + i.data;
      return o;
    }
    concat(e) {
      if (this.length === 0) return t.alloc(0);
      let i = t.allocUnsafe(e >>> 0), o = this.head, g = 0;
      for (; o; ) u(i, o.data, g), g += o.data.length, o = o.next;
      return i;
    }
    consume(e, i) {
      let o = this.head.data;
      if (e < o.length) {
        let g = o.slice(0, e);
        return this.head.data = o.slice(e), g;
      }
      return e === o.length ? this.shift() : i ? this._getString(e) : this._getBuffer(e);
    }
    first() {
      return this.head.data;
    }
    *[a]() {
      for (let e = this.head; e; e = e.next) yield e.data;
    }
    _getString(e) {
      let i = "", o = this.head, g = 0;
      do {
        let d = o.data;
        if (e > d.length) i += d, e -= d.length;
        else {
          e === d.length ? (i += d, ++g, o.next ? this.head = o.next : this.head = this.tail = null) : (i += s(d, 0, e), this.head = o, o.data = s(d, e));
          break;
        }
        ++g;
      } while ((o = o.next) !== null);
      return this.length -= g, i;
    }
    _getBuffer(e) {
      let i = t.allocUnsafe(e), o = e, g = this.head, d = 0;
      do {
        let m = g.data;
        if (e > m.length) u(i, m, o - e), e -= m.length;
        else {
          e === m.length ? (u(i, m, o - e), ++d, g.next ? this.head = g.next : this.head = this.tail = null) : (u(i, new r(m.buffer, m.byteOffset, e), o - e), this.head = g, g.data = m.slice(e));
          break;
        }
        ++d;
      } while ((g = g.next) !== null);
      return this.length -= d, i;
    }
    [Symbol.for("nodejs.util.inspect.custom")](e, i) {
      return n(this, { ...i, depth: 0, customInspect: !1 });
    }
  };
}), Or = de((h, f) => {
  le(), ce(), ue();
  var { MathFloor: s, NumberIsInteger: a } = Me(), { validateInteger: u } = Gt(), { ERR_INVALID_ARG_VALUE: r } = qe().codes, t = 16 * 1024, n = 16;
  function e(d, m, c) {
    return d.highWaterMark != null ? d.highWaterMark : m ? d[c] : null;
  }
  function i(d) {
    return d ? n : t;
  }
  function o(d, m) {
    u(m, "value", 0), d ? n = m : t = m;
  }
  function g(d, m, c, y) {
    let b = e(m, y, c);
    if (b != null) {
      if (!a(b) || b < 0) {
        let S = y ? `options.${c}` : "options.highWaterMark";
        throw new r(S, b);
      }
      return s(b);
    }
    return i(d.objectMode);
  }
  f.exports = { getHighWaterMark: g, getDefaultHighWaterMark: i, setDefaultHighWaterMark: o };
}), rl = de((h, f) => {
  le(), ce(), ue();
  var s = (Be(), Pe(Ne)), a = s.Buffer;
  function u(t, n) {
    for (var e in t) n[e] = t[e];
  }
  a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? f.exports = s : (u(s, h), h.Buffer = r);
  function r(t, n, e) {
    return a(t, n, e);
  }
  r.prototype = Object.create(a.prototype), u(a, r), r.from = function(t, n, e) {
    if (typeof t == "number") throw new TypeError("Argument must not be a number");
    return a(t, n, e);
  }, r.alloc = function(t, n, e) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    var i = a(t);
    return n !== void 0 ? typeof e == "string" ? i.fill(n, e) : i.fill(n) : i.fill(0), i;
  }, r.allocUnsafe = function(t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return a(t);
  }, r.allocUnsafeSlow = function(t) {
    if (typeof t != "number") throw new TypeError("Argument must be a number");
    return s.SlowBuffer(t);
  };
}), nl = de((h) => {
  le(), ce(), ue();
  var f = rl().Buffer, s = f.isEncoding || function(p) {
    switch (p = "" + p, p && p.toLowerCase()) {
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
  function a(p) {
    if (!p) return "utf8";
    for (var _; ; ) switch (p) {
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
        return p;
      default:
        if (_) return;
        p = ("" + p).toLowerCase(), _ = !0;
    }
  }
  function u(p) {
    var _ = a(p);
    if (typeof _ != "string" && (f.isEncoding === s || !s(p))) throw new Error("Unknown encoding: " + p);
    return _ || p;
  }
  h.StringDecoder = r;
  function r(p) {
    this.encoding = u(p);
    var _;
    switch (this.encoding) {
      case "utf16le":
        this.text = d, this.end = m, _ = 4;
        break;
      case "utf8":
        this.fillLast = i, _ = 4;
        break;
      case "base64":
        this.text = c, this.end = y, _ = 3;
        break;
      default:
        this.write = b, this.end = S;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = f.allocUnsafe(_);
  }
  r.prototype.write = function(p) {
    if (p.length === 0) return "";
    var _, I;
    if (this.lastNeed) {
      if (_ = this.fillLast(p), _ === void 0) return "";
      I = this.lastNeed, this.lastNeed = 0;
    } else I = 0;
    return I < p.length ? _ ? _ + this.text(p, I) : this.text(p, I) : _ || "";
  }, r.prototype.end = g, r.prototype.text = o, r.prototype.fillLast = function(p) {
    if (this.lastNeed <= p.length) return p.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    p.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, p.length), this.lastNeed -= p.length;
  };
  function t(p) {
    return p <= 127 ? 0 : p >> 5 === 6 ? 2 : p >> 4 === 14 ? 3 : p >> 3 === 30 ? 4 : p >> 6 === 2 ? -1 : -2;
  }
  function n(p, _, I) {
    var v = _.length - 1;
    if (v < I) return 0;
    var A = t(_[v]);
    return A >= 0 ? (A > 0 && (p.lastNeed = A - 1), A) : --v < I || A === -2 ? 0 : (A = t(_[v]), A >= 0 ? (A > 0 && (p.lastNeed = A - 2), A) : --v < I || A === -2 ? 0 : (A = t(_[v]), A >= 0 ? (A > 0 && (A === 2 ? A = 0 : p.lastNeed = A - 3), A) : 0));
  }
  function e(p, _, I) {
    if ((_[0] & 192) !== 128) return p.lastNeed = 0, "�";
    if (p.lastNeed > 1 && _.length > 1) {
      if ((_[1] & 192) !== 128) return p.lastNeed = 1, "�";
      if (p.lastNeed > 2 && _.length > 2 && (_[2] & 192) !== 128) return p.lastNeed = 2, "�";
    }
  }
  function i(p) {
    var _ = this.lastTotal - this.lastNeed, I = e(this, p);
    if (I !== void 0) return I;
    if (this.lastNeed <= p.length) return p.copy(this.lastChar, _, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    p.copy(this.lastChar, _, 0, p.length), this.lastNeed -= p.length;
  }
  function o(p, _) {
    var I = n(this, p, _);
    if (!this.lastNeed) return p.toString("utf8", _);
    this.lastTotal = I;
    var v = p.length - (I - this.lastNeed);
    return p.copy(this.lastChar, 0, v), p.toString("utf8", _, v);
  }
  function g(p) {
    var _ = p && p.length ? this.write(p) : "";
    return this.lastNeed ? _ + "�" : _;
  }
  function d(p, _) {
    if ((p.length - _) % 2 === 0) {
      var I = p.toString("utf16le", _);
      if (I) {
        var v = I.charCodeAt(I.length - 1);
        if (v >= 55296 && v <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = p[p.length - 2], this.lastChar[1] = p[p.length - 1], I.slice(0, -1);
      }
      return I;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = p[p.length - 1], p.toString("utf16le", _, p.length - 1);
  }
  function m(p) {
    var _ = p && p.length ? this.write(p) : "";
    if (this.lastNeed) {
      var I = this.lastTotal - this.lastNeed;
      return _ + this.lastChar.toString("utf16le", 0, I);
    }
    return _;
  }
  function c(p, _) {
    var I = (p.length - _) % 3;
    return I === 0 ? p.toString("base64", _) : (this.lastNeed = 3 - I, this.lastTotal = 3, I === 1 ? this.lastChar[0] = p[p.length - 1] : (this.lastChar[0] = p[p.length - 2], this.lastChar[1] = p[p.length - 1]), p.toString("base64", _, p.length - I));
  }
  function y(p) {
    var _ = p && p.length ? this.write(p) : "";
    return this.lastNeed ? _ + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : _;
  }
  function b(p) {
    return p.toString(this.encoding);
  }
  function S(p) {
    return p && p.length ? this.write(p) : "";
  }
}), xs = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { PromisePrototypeThen: a, SymbolAsyncIterator: u, SymbolIterator: r } = Me(), { Buffer: t } = (Be(), Pe(Ne)), { ERR_INVALID_ARG_TYPE: n, ERR_STREAM_NULL_VALUES: e } = qe().codes;
  function i(o, g, d) {
    let m;
    if (typeof g == "string" || g instanceof t) return new o({ objectMode: !0, ...d, read() {
      this.push(g), this.push(null);
    } });
    let c;
    if (g && g[u]) c = !0, m = g[u]();
    else if (g && g[r]) c = !1, m = g[r]();
    else throw new n("iterable", ["Iterable"], g);
    let y = new o({ objectMode: !0, highWaterMark: 1, ...d }), b = !1;
    y._read = function() {
      b || (b = !0, p());
    }, y._destroy = function(_, I) {
      a(S(_), () => s.nextTick(I, _), (v) => s.nextTick(I, v || _));
    };
    async function S(_) {
      let I = _ != null, v = typeof m.throw == "function";
      if (I && v) {
        let { value: A, done: E } = await m.throw(_);
        if (await A, E) return;
      }
      if (typeof m.return == "function") {
        let { value: A } = await m.return();
        await A;
      }
    }
    async function p() {
      for (; ; ) {
        try {
          let { value: _, done: I } = c ? await m.next() : m.next();
          if (I) y.push(null);
          else {
            let v = _ && typeof _.then == "function" ? await _ : _;
            if (v === null) throw b = !1, new e();
            if (y.push(v)) continue;
            b = !1;
          }
        } catch (_) {
          y.destroy(_);
        }
        break;
      }
    }
    return y;
  }
  f.exports = i;
}), kr = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { ArrayPrototypeIndexOf: a, NumberIsInteger: u, NumberIsNaN: r, NumberParseInt: t, ObjectDefineProperties: n, ObjectKeys: e, ObjectSetPrototypeOf: i, Promise: o, SafeSet: g, SymbolAsyncDispose: d, SymbolAsyncIterator: m, Symbol: c } = Me();
  f.exports = se, se.ReadableState = ve;
  var { EventEmitter: y } = (At(), Pe(yt)), { Stream: b, prependListener: S } = Ui(), { Buffer: p } = (Be(), Pe(Ne)), { addAbortSignal: _ } = Tr(), I = bt(), v = $e().debuglog("stream", (k) => {
    v = k;
  }), A = tl(), E = jt(), { getHighWaterMark: T, getDefaultHighWaterMark: C } = Or(), { aggregateTwoErrors: P, codes: { ERR_INVALID_ARG_TYPE: L, ERR_METHOD_NOT_IMPLEMENTED: O, ERR_OUT_OF_RANGE: q, ERR_STREAM_PUSH_AFTER_EOF: D, ERR_STREAM_UNSHIFT_AFTER_END_EVENT: B }, AbortError: ae } = qe(), { validateObject: Q } = Gt(), K = c("kPaused"), { StringDecoder: re } = nl(), F = xs();
  i(se.prototype, b.prototype), i(se, b);
  var Z = () => {
  }, { errorOrDestroy: R } = E, J = 1, be = 2, te = 4, we = 8, H = 16, N = 32, ne = 64, z = 128, G = 256, Y = 512, ye = 1024, oe = 2048, M = 4096, W = 8192, ee = 16384, he = 32768, pe = 65536, me = 1 << 17, $ = 1 << 18;
  function ge(k) {
    return { enumerable: !1, get() {
      return (this.state & k) !== 0;
    }, set(j) {
      j ? this.state |= k : this.state &= ~k;
    } };
  }
  n(ve.prototype, { objectMode: ge(J), ended: ge(be), endEmitted: ge(te), reading: ge(we), constructed: ge(H), sync: ge(N), needReadable: ge(ne), emittedReadable: ge(z), readableListening: ge(G), resumeScheduled: ge(Y), errorEmitted: ge(ye), emitClose: ge(oe), autoDestroy: ge(M), destroyed: ge(W), closed: ge(ee), closeEmitted: ge(he), multiAwaitDrain: ge(pe), readingMore: ge(me), dataEmitted: ge($) });
  function ve(k, j, _e) {
    typeof _e != "boolean" && (_e = j instanceof st()), this.state = oe | M | H | N, k && k.objectMode && (this.state |= J), _e && k && k.readableObjectMode && (this.state |= J), this.highWaterMark = k ? T(this, k, "readableHighWaterMark", _e) : C(!1), this.buffer = new A(), this.length = 0, this.pipes = [], this.flowing = null, this[K] = null, k && k.emitClose === !1 && (this.state &= ~oe), k && k.autoDestroy === !1 && (this.state &= ~M), this.errored = null, this.defaultEncoding = k && k.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.decoder = null, this.encoding = null, k && k.encoding && (this.decoder = new re(k.encoding), this.encoding = k.encoding);
  }
  function se(k) {
    if (!(this instanceof se)) return new se(k);
    let j = this instanceof st();
    this._readableState = new ve(k, this, j), k && (typeof k.read == "function" && (this._read = k.read), typeof k.destroy == "function" && (this._destroy = k.destroy), typeof k.construct == "function" && (this._construct = k.construct), k.signal && !j && _(k.signal, this)), b.call(this, k), E.construct(this, () => {
      this._readableState.needReadable && V(this, this._readableState);
    });
  }
  se.prototype.destroy = E.destroy, se.prototype._undestroy = E.undestroy, se.prototype._destroy = function(k, j) {
    j(k);
  }, se.prototype[y.captureRejectionSymbol] = function(k) {
    this.destroy(k);
  }, se.prototype[d] = function() {
    let k;
    return this.destroyed || (k = this.readableEnded ? null : new ae(), this.destroy(k)), new o((j, _e) => I(this, (Ee) => Ee && Ee !== k ? _e(Ee) : j(null)));
  }, se.prototype.push = function(k, j) {
    return Oe(this, k, j, !1);
  }, se.prototype.unshift = function(k, j) {
    return Oe(this, k, j, !0);
  };
  function Oe(k, j, _e, Ee) {
    v("readableAddChunk", j);
    let Ae = k._readableState, je;
    if ((Ae.state & J) === 0 && (typeof j == "string" ? (_e = _e || Ae.defaultEncoding, Ae.encoding !== _e && (Ee && Ae.encoding ? j = p.from(j, _e).toString(Ae.encoding) : (j = p.from(j, _e), _e = ""))) : j instanceof p ? _e = "" : b._isUint8Array(j) ? (j = b._uint8ArrayToBuffer(j), _e = "") : j != null && (je = new L("chunk", ["string", "Buffer", "Uint8Array"], j))), je) R(k, je);
    else if (j === null) Ae.state &= ~we, X(k, Ae);
    else if ((Ae.state & J) !== 0 || j && j.length > 0) if (Ee) if ((Ae.state & te) !== 0) R(k, new B());
    else {
      if (Ae.destroyed || Ae.errored) return !1;
      l(k, Ae, j, !0);
    }
    else if (Ae.ended) R(k, new D());
    else {
      if (Ae.destroyed || Ae.errored) return !1;
      Ae.state &= ~we, Ae.decoder && !_e ? (j = Ae.decoder.write(j), Ae.objectMode || j.length !== 0 ? l(k, Ae, j, !1) : V(k, Ae)) : l(k, Ae, j, !1);
    }
    else Ee || (Ae.state &= ~we, V(k, Ae));
    return !Ae.ended && (Ae.length < Ae.highWaterMark || Ae.length === 0);
  }
  function l(k, j, _e, Ee) {
    j.flowing && j.length === 0 && !j.sync && k.listenerCount("data") > 0 ? ((j.state & pe) !== 0 ? j.awaitDrainWriters.clear() : j.awaitDrainWriters = null, j.dataEmitted = !0, k.emit("data", _e)) : (j.length += j.objectMode ? 1 : _e.length, Ee ? j.buffer.unshift(_e) : j.buffer.push(_e), (j.state & ne) !== 0 && fe(k)), V(k, j);
  }
  se.prototype.isPaused = function() {
    let k = this._readableState;
    return k[K] === !0 || k.flowing === !1;
  }, se.prototype.setEncoding = function(k) {
    let j = new re(k);
    this._readableState.decoder = j, this._readableState.encoding = this._readableState.decoder.encoding;
    let _e = this._readableState.buffer, Ee = "";
    for (let Ae of _e) Ee += j.write(Ae);
    return _e.clear(), Ee !== "" && _e.push(Ee), this._readableState.length = Ee.length, this;
  };
  var w = 1073741824;
  function x(k) {
    if (k > w) throw new q("size", "<= 1GiB", k);
    return k--, k |= k >>> 1, k |= k >>> 2, k |= k >>> 4, k |= k >>> 8, k |= k >>> 16, k++, k;
  }
  function U(k, j) {
    return k <= 0 || j.length === 0 && j.ended ? 0 : (j.state & J) !== 0 ? 1 : r(k) ? j.flowing && j.length ? j.buffer.first().length : j.length : k <= j.length ? k : j.ended ? j.length : 0;
  }
  se.prototype.read = function(k) {
    v("read", k), k === void 0 ? k = NaN : u(k) || (k = t(k, 10));
    let j = this._readableState, _e = k;
    if (k > j.highWaterMark && (j.highWaterMark = x(k)), k !== 0 && (j.state &= ~z), k === 0 && j.needReadable && ((j.highWaterMark !== 0 ? j.length >= j.highWaterMark : j.length > 0) || j.ended)) return v("read: emitReadable", j.length, j.ended), j.length === 0 && j.ended ? Ye(this) : fe(this), null;
    if (k = U(k, j), k === 0 && j.ended) return j.length === 0 && Ye(this), null;
    let Ee = (j.state & ne) !== 0;
    if (v("need readable", Ee), (j.length === 0 || j.length - k < j.highWaterMark) && (Ee = !0, v("length less than watermark", Ee)), j.ended || j.reading || j.destroyed || j.errored || !j.constructed) Ee = !1, v("reading, ended or constructing", Ee);
    else if (Ee) {
      v("do read"), j.state |= we | N, j.length === 0 && (j.state |= ne);
      try {
        this._read(j.highWaterMark);
      } catch (je) {
        R(this, je);
      }
      j.state &= ~N, j.reading || (k = U(_e, j));
    }
    let Ae;
    return k > 0 ? Ae = Tt(k, j) : Ae = null, Ae === null ? (j.needReadable = j.length <= j.highWaterMark, k = 0) : (j.length -= k, j.multiAwaitDrain ? j.awaitDrainWriters.clear() : j.awaitDrainWriters = null), j.length === 0 && (j.ended || (j.needReadable = !0), _e !== k && j.ended && Ye(this)), Ae !== null && !j.errorEmitted && !j.closeEmitted && (j.dataEmitted = !0, this.emit("data", Ae)), Ae;
  };
  function X(k, j) {
    if (v("onEofChunk"), !j.ended) {
      if (j.decoder) {
        let _e = j.decoder.end();
        _e && _e.length && (j.buffer.push(_e), j.length += j.objectMode ? 1 : _e.length);
      }
      j.ended = !0, j.sync ? fe(k) : (j.needReadable = !1, j.emittedReadable = !0, Se(k));
    }
  }
  function fe(k) {
    let j = k._readableState;
    v("emitReadable", j.needReadable, j.emittedReadable), j.needReadable = !1, j.emittedReadable || (v("emitReadable", j.flowing), j.emittedReadable = !0, s.nextTick(Se, k));
  }
  function Se(k) {
    let j = k._readableState;
    v("emitReadable_", j.destroyed, j.length, j.ended), !j.destroyed && !j.errored && (j.length || j.ended) && (k.emit("readable"), j.emittedReadable = !1), j.needReadable = !j.flowing && !j.ended && j.length <= j.highWaterMark, Ge(k);
  }
  function V(k, j) {
    !j.readingMore && j.constructed && (j.readingMore = !0, s.nextTick(ie, k, j));
  }
  function ie(k, j) {
    for (; !j.reading && !j.ended && (j.length < j.highWaterMark || j.flowing && j.length === 0); ) {
      let _e = j.length;
      if (v("maybeReadMore read 0"), k.read(0), _e === j.length) break;
    }
    j.readingMore = !1;
  }
  se.prototype._read = function(k) {
    throw new O("_read()");
  }, se.prototype.pipe = function(k, j) {
    let _e = this, Ee = this._readableState;
    Ee.pipes.length === 1 && (Ee.multiAwaitDrain || (Ee.multiAwaitDrain = !0, Ee.awaitDrainWriters = new g(Ee.awaitDrainWriters ? [Ee.awaitDrainWriters] : []))), Ee.pipes.push(k), v("pipe count=%d opts=%j", Ee.pipes.length, j);
    let Ae = (!j || j.end !== !1) && k !== s.stdout && k !== s.stderr ? We : vt;
    Ee.endEmitted ? s.nextTick(Ae) : _e.once("end", Ae), k.on("unpipe", je);
    function je(Xe, tt) {
      v("onunpipe"), Xe === _e && tt && tt.hasUnpiped === !1 && (tt.hasUnpiped = !0, Dt());
    }
    function We() {
      v("onend"), k.end();
    }
    let Ke, Lt = !1;
    function Dt() {
      v("cleanup"), k.removeListener("close", Je), k.removeListener("finish", ft), Ke && k.removeListener("drain", Ke), k.removeListener("error", mt), k.removeListener("unpipe", je), _e.removeListener("end", We), _e.removeListener("end", vt), _e.removeListener("data", Jt), Lt = !0, Ke && Ee.awaitDrainWriters && (!k._writableState || k._writableState.needDrain) && Ke();
    }
    function Ft() {
      Lt || (Ee.pipes.length === 1 && Ee.pipes[0] === k ? (v("false write response, pause", 0), Ee.awaitDrainWriters = k, Ee.multiAwaitDrain = !1) : Ee.pipes.length > 1 && Ee.pipes.includes(k) && (v("false write response, pause", Ee.awaitDrainWriters.size), Ee.awaitDrainWriters.add(k)), _e.pause()), Ke || (Ke = Ie(_e, k), k.on("drain", Ke));
    }
    _e.on("data", Jt);
    function Jt(Xe) {
      v("ondata");
      let tt = k.write(Xe);
      v("dest.write", tt), tt === !1 && Ft();
    }
    function mt(Xe) {
      if (v("onerror", Xe), vt(), k.removeListener("error", mt), k.listenerCount("error") === 0) {
        let tt = k._writableState || k._readableState;
        tt && !tt.errorEmitted ? R(k, Xe) : k.emit("error", Xe);
      }
    }
    S(k, "error", mt);
    function Je() {
      k.removeListener("finish", ft), vt();
    }
    k.once("close", Je);
    function ft() {
      v("onfinish"), k.removeListener("close", Je), vt();
    }
    k.once("finish", ft);
    function vt() {
      v("unpipe"), _e.unpipe(k);
    }
    return k.emit("pipe", _e), k.writableNeedDrain === !0 ? Ft() : Ee.flowing || (v("pipe resume"), _e.resume()), k;
  };
  function Ie(k, j) {
    return function() {
      let _e = k._readableState;
      _e.awaitDrainWriters === j ? (v("pipeOnDrain", 1), _e.awaitDrainWriters = null) : _e.multiAwaitDrain && (v("pipeOnDrain", _e.awaitDrainWriters.size), _e.awaitDrainWriters.delete(j)), (!_e.awaitDrainWriters || _e.awaitDrainWriters.size === 0) && k.listenerCount("data") && k.resume();
    };
  }
  se.prototype.unpipe = function(k) {
    let j = this._readableState, _e = { hasUnpiped: !1 };
    if (j.pipes.length === 0) return this;
    if (!k) {
      let Ae = j.pipes;
      j.pipes = [], this.pause();
      for (let je = 0; je < Ae.length; je++) Ae[je].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    let Ee = a(j.pipes, k);
    return Ee === -1 ? this : (j.pipes.splice(Ee, 1), j.pipes.length === 0 && this.pause(), k.emit("unpipe", this, _e), this);
  }, se.prototype.on = function(k, j) {
    let _e = b.prototype.on.call(this, k, j), Ee = this._readableState;
    return k === "data" ? (Ee.readableListening = this.listenerCount("readable") > 0, Ee.flowing !== !1 && this.resume()) : k === "readable" && !Ee.endEmitted && !Ee.readableListening && (Ee.readableListening = Ee.needReadable = !0, Ee.flowing = !1, Ee.emittedReadable = !1, v("on readable", Ee.length, Ee.reading), Ee.length ? fe(this) : Ee.reading || s.nextTick(Te, this)), _e;
  }, se.prototype.addListener = se.prototype.on, se.prototype.removeListener = function(k, j) {
    let _e = b.prototype.removeListener.call(this, k, j);
    return k === "readable" && s.nextTick(xe, this), _e;
  }, se.prototype.off = se.prototype.removeListener, se.prototype.removeAllListeners = function(k) {
    let j = b.prototype.removeAllListeners.apply(this, arguments);
    return (k === "readable" || k === void 0) && s.nextTick(xe, this), j;
  };
  function xe(k) {
    let j = k._readableState;
    j.readableListening = k.listenerCount("readable") > 0, j.resumeScheduled && j[K] === !1 ? j.flowing = !0 : k.listenerCount("data") > 0 ? k.resume() : j.readableListening || (j.flowing = null);
  }
  function Te(k) {
    v("readable nexttick read 0"), k.read(0);
  }
  se.prototype.resume = function() {
    let k = this._readableState;
    return k.flowing || (v("resume"), k.flowing = !k.readableListening, ke(this, k)), k[K] = !1, this;
  };
  function ke(k, j) {
    j.resumeScheduled || (j.resumeScheduled = !0, s.nextTick(He, k, j));
  }
  function He(k, j) {
    v("resume", j.reading), j.reading || k.read(0), j.resumeScheduled = !1, k.emit("resume"), Ge(k), j.flowing && !j.reading && k.read(0);
  }
  se.prototype.pause = function() {
    return v("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (v("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[K] = !0, this;
  };
  function Ge(k) {
    let j = k._readableState;
    for (v("flow", j.flowing); j.flowing && k.read() !== null; ) ;
  }
  se.prototype.wrap = function(k) {
    let j = !1;
    k.on("data", (Ee) => {
      !this.push(Ee) && k.pause && (j = !0, k.pause());
    }), k.on("end", () => {
      this.push(null);
    }), k.on("error", (Ee) => {
      R(this, Ee);
    }), k.on("close", () => {
      this.destroy();
    }), k.on("destroy", () => {
      this.destroy();
    }), this._read = () => {
      j && k.resume && (j = !1, k.resume());
    };
    let _e = e(k);
    for (let Ee = 1; Ee < _e.length; Ee++) {
      let Ae = _e[Ee];
      this[Ae] === void 0 && typeof k[Ae] == "function" && (this[Ae] = k[Ae].bind(k));
    }
    return this;
  }, se.prototype[m] = function() {
    return Ue(this);
  }, se.prototype.iterator = function(k) {
    return k !== void 0 && Q(k, "options"), Ue(this, k);
  };
  function Ue(k, j) {
    typeof k.read != "function" && (k = se.wrap(k, { objectMode: !0 }));
    let _e = Qe(k, j);
    return _e.stream = k, _e;
  }
  async function* Qe(k, j) {
    let _e = Z;
    function Ee(We) {
      this === k ? (_e(), _e = Z) : _e = We;
    }
    k.on("readable", Ee);
    let Ae, je = I(k, { writable: !1 }, (We) => {
      Ae = We ? P(Ae, We) : null, _e(), _e = Z;
    });
    try {
      for (; ; ) {
        let We = k.destroyed ? null : k.read();
        if (We !== null) yield We;
        else {
          if (Ae) throw Ae;
          if (Ae === null) return;
          await new o(Ee);
        }
      }
    } catch (We) {
      throw Ae = P(Ae, We), Ae;
    } finally {
      (Ae || j?.destroyOnReturn !== !1) && (Ae === void 0 || k._readableState.autoDestroy) ? E.destroyer(k, null) : (k.off("readable", Ee), je());
    }
  }
  n(se.prototype, { readable: { __proto__: null, get() {
    let k = this._readableState;
    return !!k && k.readable !== !1 && !k.destroyed && !k.errorEmitted && !k.endEmitted;
  }, set(k) {
    this._readableState && (this._readableState.readable = !!k);
  } }, readableDidRead: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.dataEmitted;
  } }, readableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._readableState.readable !== !1 && (this._readableState.destroyed || this._readableState.errored) && !this._readableState.endEmitted);
  } }, readableHighWaterMark: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.highWaterMark;
  } }, readableBuffer: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState && this._readableState.buffer;
  } }, readableFlowing: { __proto__: null, enumerable: !1, get: function() {
    return this._readableState.flowing;
  }, set: function(k) {
    this._readableState && (this._readableState.flowing = k);
  } }, readableLength: { __proto__: null, enumerable: !1, get() {
    return this._readableState.length;
  } }, readableObjectMode: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.objectMode : !1;
  } }, readableEncoding: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.encoding : null;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.errored : null;
  } }, closed: { __proto__: null, get() {
    return this._readableState ? this._readableState.closed : !1;
  } }, destroyed: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.destroyed : !1;
  }, set(k) {
    this._readableState && (this._readableState.destroyed = k);
  } }, readableEnded: { __proto__: null, enumerable: !1, get() {
    return this._readableState ? this._readableState.endEmitted : !1;
  } } }), n(ve.prototype, { pipesCount: { __proto__: null, get() {
    return this.pipes.length;
  } }, paused: { __proto__: null, get() {
    return this[K] !== !1;
  }, set(k) {
    this[K] = !!k;
  } } }), se._fromList = Tt;
  function Tt(k, j) {
    if (j.length === 0) return null;
    let _e;
    return j.objectMode ? _e = j.buffer.shift() : !k || k >= j.length ? (j.decoder ? _e = j.buffer.join("") : j.buffer.length === 1 ? _e = j.buffer.first() : _e = j.buffer.concat(j.length), j.buffer.clear()) : _e = j.buffer.consume(k, j.decoder), _e;
  }
  function Ye(k) {
    let j = k._readableState;
    v("endReadable", j.endEmitted), j.endEmitted || (j.ended = !0, s.nextTick(Ve, j, k));
  }
  function Ve(k, j) {
    if (v("endReadableNT", k.endEmitted, k.length), !k.errored && !k.closeEmitted && !k.endEmitted && k.length === 0) {
      if (k.endEmitted = !0, j.emit("end"), j.writable && j.allowHalfOpen === !1) s.nextTick(Yt, j);
      else if (k.autoDestroy) {
        let _e = j._writableState;
        (!_e || _e.autoDestroy && (_e.finished || _e.writable === !1)) && j.destroy();
      }
    }
  }
  function Yt(k) {
    k.writable && !k.writableEnded && !k.destroyed && k.end();
  }
  se.from = function(k, j) {
    return F(se, k, j);
  };
  var Ot;
  function Ut() {
    return Ot === void 0 && (Ot = {}), Ot;
  }
  se.fromWeb = function(k, j) {
    return Ut().newStreamReadableFromReadableStream(k, j);
  }, se.toWeb = function(k, j) {
    return Ut().newReadableStreamFromStreamReadable(k, j);
  }, se.wrap = function(k, j) {
    var _e, Ee;
    return new se({ objectMode: (_e = (Ee = k.readableObjectMode) !== null && Ee !== void 0 ? Ee : k.objectMode) !== null && _e !== void 0 ? _e : !0, ...j, destroy(Ae, je) {
      E.destroyer(k, Ae), je(Ae);
    } }).wrap(k);
  };
}), Li = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { ArrayPrototypeSlice: a, Error: u, FunctionPrototypeSymbolHasInstance: r, ObjectDefineProperty: t, ObjectDefineProperties: n, ObjectSetPrototypeOf: e, StringPrototypeToLowerCase: i, Symbol: o, SymbolHasInstance: g } = Me();
  f.exports = Q, Q.WritableState = B;
  var { EventEmitter: d } = (At(), Pe(yt)), m = Ui().Stream, { Buffer: c } = (Be(), Pe(Ne)), y = jt(), { addAbortSignal: b } = Tr(), { getHighWaterMark: S, getDefaultHighWaterMark: p } = Or(), { ERR_INVALID_ARG_TYPE: _, ERR_METHOD_NOT_IMPLEMENTED: I, ERR_MULTIPLE_CALLBACK: v, ERR_STREAM_CANNOT_PIPE: A, ERR_STREAM_DESTROYED: E, ERR_STREAM_ALREADY_FINISHED: T, ERR_STREAM_NULL_VALUES: C, ERR_STREAM_WRITE_AFTER_END: P, ERR_UNKNOWN_ENCODING: L } = qe().codes, { errorOrDestroy: O } = y;
  e(Q.prototype, m.prototype), e(Q, m);
  function q() {
  }
  var D = o("kOnFinished");
  function B(M, W, ee) {
    typeof ee != "boolean" && (ee = W instanceof st()), this.objectMode = !!(M && M.objectMode), ee && (this.objectMode = this.objectMode || !!(M && M.writableObjectMode)), this.highWaterMark = M ? S(this, M, "writableHighWaterMark", ee) : p(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    let he = !!(M && M.decodeStrings === !1);
    this.decodeStrings = !he, this.defaultEncoding = M && M.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = R.bind(void 0, W), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, ae(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !M || M.emitClose !== !1, this.autoDestroy = !M || M.autoDestroy !== !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[D] = [];
  }
  function ae(M) {
    M.buffered = [], M.bufferedIndex = 0, M.allBuffers = !0, M.allNoop = !0;
  }
  B.prototype.getBuffer = function() {
    return a(this.buffered, this.bufferedIndex);
  }, t(B.prototype, "bufferedRequestCount", { __proto__: null, get() {
    return this.buffered.length - this.bufferedIndex;
  } });
  function Q(M) {
    let W = this instanceof st();
    if (!W && !r(Q, this)) return new Q(M);
    this._writableState = new B(M, this, W), M && (typeof M.write == "function" && (this._write = M.write), typeof M.writev == "function" && (this._writev = M.writev), typeof M.destroy == "function" && (this._destroy = M.destroy), typeof M.final == "function" && (this._final = M.final), typeof M.construct == "function" && (this._construct = M.construct), M.signal && b(M.signal, this)), m.call(this, M), y.construct(this, () => {
      let ee = this._writableState;
      ee.writing || we(this, ee), z(this, ee);
    });
  }
  t(Q, g, { __proto__: null, value: function(M) {
    return r(this, M) ? !0 : this !== Q ? !1 : M && M._writableState instanceof B;
  } }), Q.prototype.pipe = function() {
    O(this, new A());
  };
  function K(M, W, ee, he) {
    let pe = M._writableState;
    if (typeof ee == "function") he = ee, ee = pe.defaultEncoding;
    else {
      if (!ee) ee = pe.defaultEncoding;
      else if (ee !== "buffer" && !c.isEncoding(ee)) throw new L(ee);
      typeof he != "function" && (he = q);
    }
    if (W === null) throw new C();
    if (!pe.objectMode) if (typeof W == "string") pe.decodeStrings !== !1 && (W = c.from(W, ee), ee = "buffer");
    else if (W instanceof c) ee = "buffer";
    else if (m._isUint8Array(W)) W = m._uint8ArrayToBuffer(W), ee = "buffer";
    else throw new _("chunk", ["string", "Buffer", "Uint8Array"], W);
    let me;
    return pe.ending ? me = new P() : pe.destroyed && (me = new E("write")), me ? (s.nextTick(he, me), O(M, me, !0), me) : (pe.pendingcb++, re(M, pe, W, ee, he));
  }
  Q.prototype.write = function(M, W, ee) {
    return K(this, M, W, ee) === !0;
  }, Q.prototype.cork = function() {
    this._writableState.corked++;
  }, Q.prototype.uncork = function() {
    let M = this._writableState;
    M.corked && (M.corked--, M.writing || we(this, M));
  }, Q.prototype.setDefaultEncoding = function(M) {
    if (typeof M == "string" && (M = i(M)), !c.isEncoding(M)) throw new L(M);
    return this._writableState.defaultEncoding = M, this;
  };
  function re(M, W, ee, he, pe) {
    let me = W.objectMode ? 1 : ee.length;
    W.length += me;
    let $ = W.length < W.highWaterMark;
    return $ || (W.needDrain = !0), W.writing || W.corked || W.errored || !W.constructed ? (W.buffered.push({ chunk: ee, encoding: he, callback: pe }), W.allBuffers && he !== "buffer" && (W.allBuffers = !1), W.allNoop && pe !== q && (W.allNoop = !1)) : (W.writelen = me, W.writecb = pe, W.writing = !0, W.sync = !0, M._write(ee, he, W.onwrite), W.sync = !1), $ && !W.errored && !W.destroyed;
  }
  function F(M, W, ee, he, pe, me, $) {
    W.writelen = he, W.writecb = $, W.writing = !0, W.sync = !0, W.destroyed ? W.onwrite(new E("write")) : ee ? M._writev(pe, W.onwrite) : M._write(pe, me, W.onwrite), W.sync = !1;
  }
  function Z(M, W, ee, he) {
    --W.pendingcb, he(ee), te(W), O(M, ee);
  }
  function R(M, W) {
    let ee = M._writableState, he = ee.sync, pe = ee.writecb;
    if (typeof pe != "function") {
      O(M, new v());
      return;
    }
    ee.writing = !1, ee.writecb = null, ee.length -= ee.writelen, ee.writelen = 0, W ? (W.stack, ee.errored || (ee.errored = W), M._readableState && !M._readableState.errored && (M._readableState.errored = W), he ? s.nextTick(Z, M, ee, W, pe) : Z(M, ee, W, pe)) : (ee.buffered.length > ee.bufferedIndex && we(M, ee), he ? ee.afterWriteTickInfo !== null && ee.afterWriteTickInfo.cb === pe ? ee.afterWriteTickInfo.count++ : (ee.afterWriteTickInfo = { count: 1, cb: pe, stream: M, state: ee }, s.nextTick(J, ee.afterWriteTickInfo)) : be(M, ee, 1, pe));
  }
  function J({ stream: M, state: W, count: ee, cb: he }) {
    return W.afterWriteTickInfo = null, be(M, W, ee, he);
  }
  function be(M, W, ee, he) {
    for (!W.ending && !M.destroyed && W.length === 0 && W.needDrain && (W.needDrain = !1, M.emit("drain")); ee-- > 0; ) W.pendingcb--, he();
    W.destroyed && te(W), z(M, W);
  }
  function te(M) {
    if (M.writing) return;
    for (let pe = M.bufferedIndex; pe < M.buffered.length; ++pe) {
      var W;
      let { chunk: me, callback: $ } = M.buffered[pe], ge = M.objectMode ? 1 : me.length;
      M.length -= ge, $((W = M.errored) !== null && W !== void 0 ? W : new E("write"));
    }
    let ee = M[D].splice(0);
    for (let pe = 0; pe < ee.length; pe++) {
      var he;
      ee[pe]((he = M.errored) !== null && he !== void 0 ? he : new E("end"));
    }
    ae(M);
  }
  function we(M, W) {
    if (W.corked || W.bufferProcessing || W.destroyed || !W.constructed) return;
    let { buffered: ee, bufferedIndex: he, objectMode: pe } = W, me = ee.length - he;
    if (!me) return;
    let $ = he;
    if (W.bufferProcessing = !0, me > 1 && M._writev) {
      W.pendingcb -= me - 1;
      let ge = W.allNoop ? q : (se) => {
        for (let Oe = $; Oe < ee.length; ++Oe) ee[Oe].callback(se);
      }, ve = W.allNoop && $ === 0 ? ee : a(ee, $);
      ve.allBuffers = W.allBuffers, F(M, W, !0, W.length, ve, "", ge), ae(W);
    } else {
      do {
        let { chunk: ge, encoding: ve, callback: se } = ee[$];
        ee[$++] = null;
        let Oe = pe ? 1 : ge.length;
        F(M, W, !1, Oe, ge, ve, se);
      } while ($ < ee.length && !W.writing);
      $ === ee.length ? ae(W) : $ > 256 ? (ee.splice(0, $), W.bufferedIndex = 0) : W.bufferedIndex = $;
    }
    W.bufferProcessing = !1;
  }
  Q.prototype._write = function(M, W, ee) {
    if (this._writev) this._writev([{ chunk: M, encoding: W }], ee);
    else throw new I("_write()");
  }, Q.prototype._writev = null, Q.prototype.end = function(M, W, ee) {
    let he = this._writableState;
    typeof M == "function" ? (ee = M, M = null, W = null) : typeof W == "function" && (ee = W, W = null);
    let pe;
    if (M != null) {
      let me = K(this, M, W);
      me instanceof u && (pe = me);
    }
    return he.corked && (he.corked = 1, this.uncork()), pe || (!he.errored && !he.ending ? (he.ending = !0, z(this, he, !0), he.ended = !0) : he.finished ? pe = new T("end") : he.destroyed && (pe = new E("end"))), typeof ee == "function" && (pe || he.finished ? s.nextTick(ee, pe) : he[D].push(ee)), this;
  };
  function H(M) {
    return M.ending && !M.destroyed && M.constructed && M.length === 0 && !M.errored && M.buffered.length === 0 && !M.finished && !M.writing && !M.errorEmitted && !M.closeEmitted;
  }
  function N(M, W) {
    let ee = !1;
    function he(pe) {
      if (ee) {
        O(M, pe ?? v());
        return;
      }
      if (ee = !0, W.pendingcb--, pe) {
        let me = W[D].splice(0);
        for (let $ = 0; $ < me.length; $++) me[$](pe);
        O(M, pe, W.sync);
      } else H(W) && (W.prefinished = !0, M.emit("prefinish"), W.pendingcb++, s.nextTick(G, M, W));
    }
    W.sync = !0, W.pendingcb++;
    try {
      M._final(he);
    } catch (pe) {
      he(pe);
    }
    W.sync = !1;
  }
  function ne(M, W) {
    !W.prefinished && !W.finalCalled && (typeof M._final == "function" && !W.destroyed ? (W.finalCalled = !0, N(M, W)) : (W.prefinished = !0, M.emit("prefinish")));
  }
  function z(M, W, ee) {
    H(W) && (ne(M, W), W.pendingcb === 0 && (ee ? (W.pendingcb++, s.nextTick((he, pe) => {
      H(pe) ? G(he, pe) : pe.pendingcb--;
    }, M, W)) : H(W) && (W.pendingcb++, G(M, W))));
  }
  function G(M, W) {
    W.pendingcb--, W.finished = !0;
    let ee = W[D].splice(0);
    for (let he = 0; he < ee.length; he++) ee[he]();
    if (M.emit("finish"), W.autoDestroy) {
      let he = M._readableState;
      (!he || he.autoDestroy && (he.endEmitted || he.readable === !1)) && M.destroy();
    }
  }
  n(Q.prototype, { closed: { __proto__: null, get() {
    return this._writableState ? this._writableState.closed : !1;
  } }, destroyed: { __proto__: null, get() {
    return this._writableState ? this._writableState.destroyed : !1;
  }, set(M) {
    this._writableState && (this._writableState.destroyed = M);
  } }, writable: { __proto__: null, get() {
    let M = this._writableState;
    return !!M && M.writable !== !1 && !M.destroyed && !M.errored && !M.ending && !M.ended;
  }, set(M) {
    this._writableState && (this._writableState.writable = !!M);
  } }, writableFinished: { __proto__: null, get() {
    return this._writableState ? this._writableState.finished : !1;
  } }, writableObjectMode: { __proto__: null, get() {
    return this._writableState ? this._writableState.objectMode : !1;
  } }, writableBuffer: { __proto__: null, get() {
    return this._writableState && this._writableState.getBuffer();
  } }, writableEnded: { __proto__: null, get() {
    return this._writableState ? this._writableState.ending : !1;
  } }, writableNeedDrain: { __proto__: null, get() {
    let M = this._writableState;
    return M ? !M.destroyed && !M.ending && M.needDrain : !1;
  } }, writableHighWaterMark: { __proto__: null, get() {
    return this._writableState && this._writableState.highWaterMark;
  } }, writableCorked: { __proto__: null, get() {
    return this._writableState ? this._writableState.corked : 0;
  } }, writableLength: { __proto__: null, get() {
    return this._writableState && this._writableState.length;
  } }, errored: { __proto__: null, enumerable: !1, get() {
    return this._writableState ? this._writableState.errored : null;
  } }, writableAborted: { __proto__: null, enumerable: !1, get: function() {
    return !!(this._writableState.writable !== !1 && (this._writableState.destroyed || this._writableState.errored) && !this._writableState.finished);
  } } });
  var Y = y.destroy;
  Q.prototype.destroy = function(M, W) {
    let ee = this._writableState;
    return !ee.destroyed && (ee.bufferedIndex < ee.buffered.length || ee[D].length) && s.nextTick(te, ee), Y.call(this, M, W), this;
  }, Q.prototype._undestroy = y.undestroy, Q.prototype._destroy = function(M, W) {
    W(M);
  }, Q.prototype[d.captureRejectionSymbol] = function(M) {
    this.destroy(M);
  };
  var ye;
  function oe() {
    return ye === void 0 && (ye = {}), ye;
  }
  Q.fromWeb = function(M, W) {
    return oe().newStreamWritableFromWritableStream(M, W);
  }, Q.toWeb = function(M) {
    return oe().newWritableStreamFromStreamWritable(M);
  };
}), il = de((h, f) => {
  le(), ce(), ue();
  var s = It(), a = (Be(), Pe(Ne)), { isReadable: u, isWritable: r, isIterable: t, isNodeStream: n, isReadableNodeStream: e, isWritableNodeStream: i, isDuplexNodeStream: o, isReadableStream: g, isWritableStream: d } = lt(), m = bt(), { AbortError: c, codes: { ERR_INVALID_ARG_TYPE: y, ERR_INVALID_RETURN_VALUE: b } } = qe(), { destroyer: S } = jt(), p = st(), _ = kr(), I = Li(), { createDeferredPromise: v } = $e(), A = xs(), E = globalThis.Blob || a.Blob, T = typeof E < "u" ? function(D) {
    return D instanceof E;
  } : function(D) {
    return !1;
  }, C = globalThis.AbortController || Ht().AbortController, { FunctionPrototypeCall: P } = Me(), L = class extends p {
    constructor(D) {
      super(D), D?.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), D?.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0);
    }
  };
  f.exports = function D(B, ae) {
    if (o(B)) return B;
    if (e(B)) return q({ readable: B });
    if (i(B)) return q({ writable: B });
    if (n(B)) return q({ writable: !1, readable: !1 });
    if (g(B)) return q({ readable: _.fromWeb(B) });
    if (d(B)) return q({ writable: I.fromWeb(B) });
    if (typeof B == "function") {
      let { value: K, write: re, final: F, destroy: Z } = O(B);
      if (t(K)) return A(L, K, { objectMode: !0, write: re, final: F, destroy: Z });
      let R = K?.then;
      if (typeof R == "function") {
        let J, be = P(R, K, (te) => {
          if (te != null) throw new b("nully", "body", te);
        }, (te) => {
          S(J, te);
        });
        return J = new L({ objectMode: !0, readable: !1, write: re, final(te) {
          F(async () => {
            try {
              await be, s.nextTick(te, null);
            } catch (we) {
              s.nextTick(te, we);
            }
          });
        }, destroy: Z });
      }
      throw new b("Iterable, AsyncIterable or AsyncFunction", ae, K);
    }
    if (T(B)) return D(B.arrayBuffer());
    if (t(B)) return A(L, B, { objectMode: !0, writable: !1 });
    if (g(B?.readable) && d(B?.writable)) return L.fromWeb(B);
    if (typeof B?.writable == "object" || typeof B?.readable == "object") {
      let K = B != null && B.readable ? e(B?.readable) ? B?.readable : D(B.readable) : void 0, re = B != null && B.writable ? i(B?.writable) ? B?.writable : D(B.writable) : void 0;
      return q({ readable: K, writable: re });
    }
    let Q = B?.then;
    if (typeof Q == "function") {
      let K;
      return P(Q, B, (re) => {
        re != null && K.push(re), K.push(null);
      }, (re) => {
        S(K, re);
      }), K = new L({ objectMode: !0, writable: !1, read() {
      } });
    }
    throw new y(ae, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], B);
  };
  function O(D) {
    let { promise: B, resolve: ae } = v(), Q = new C(), K = Q.signal;
    return { value: D((async function* () {
      for (; ; ) {
        let re = B;
        B = null;
        let { chunk: F, done: Z, cb: R } = await re;
        if (s.nextTick(R), Z) return;
        if (K.aborted) throw new c(void 0, { cause: K.reason });
        ({ promise: B, resolve: ae } = v()), yield F;
      }
    })(), { signal: K }), write(re, F, Z) {
      let R = ae;
      ae = null, R({ chunk: re, done: !1, cb: Z });
    }, final(re) {
      let F = ae;
      ae = null, F({ done: !0, cb: re });
    }, destroy(re, F) {
      Q.abort(), F(re);
    } };
  }
  function q(D) {
    let B = D.readable && typeof D.readable.read != "function" ? _.wrap(D.readable) : D.readable, ae = D.writable, Q = !!u(B), K = !!r(ae), re, F, Z, R, J;
    function be(te) {
      let we = R;
      R = null, we ? we(te) : te && J.destroy(te);
    }
    return J = new L({ readableObjectMode: !!(B != null && B.readableObjectMode), writableObjectMode: !!(ae != null && ae.writableObjectMode), readable: Q, writable: K }), K && (m(ae, (te) => {
      K = !1, te && S(B, te), be(te);
    }), J._write = function(te, we, H) {
      ae.write(te, we) ? H() : re = H;
    }, J._final = function(te) {
      ae.end(), F = te;
    }, ae.on("drain", function() {
      if (re) {
        let te = re;
        re = null, te();
      }
    }), ae.on("finish", function() {
      if (F) {
        let te = F;
        F = null, te();
      }
    })), Q && (m(B, (te) => {
      Q = !1, te && S(B, te), be(te);
    }), B.on("readable", function() {
      if (Z) {
        let te = Z;
        Z = null, te();
      }
    }), B.on("end", function() {
      J.push(null);
    }), J._read = function() {
      for (; ; ) {
        let te = B.read();
        if (te === null) {
          Z = J._read;
          return;
        }
        if (!J.push(te)) return;
      }
    }), J._destroy = function(te, we) {
      !te && R !== null && (te = new c()), Z = null, re = null, F = null, R === null ? we(te) : (R = we, S(ae, te), S(B, te));
    }, J;
  }
}), st = de((h, f) => {
  le(), ce(), ue();
  var { ObjectDefineProperties: s, ObjectGetOwnPropertyDescriptor: a, ObjectKeys: u, ObjectSetPrototypeOf: r } = Me();
  f.exports = e;
  var t = kr(), n = Li();
  r(e.prototype, t.prototype), r(e, t);
  {
    let d = u(n.prototype);
    for (let m = 0; m < d.length; m++) {
      let c = d[m];
      e.prototype[c] || (e.prototype[c] = n.prototype[c]);
    }
  }
  function e(d) {
    if (!(this instanceof e)) return new e(d);
    t.call(this, d), n.call(this, d), d ? (this.allowHalfOpen = d.allowHalfOpen !== !1, d.readable === !1 && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), d.writable === !1 && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0;
  }
  s(e.prototype, { writable: { __proto__: null, ...a(n.prototype, "writable") }, writableHighWaterMark: { __proto__: null, ...a(n.prototype, "writableHighWaterMark") }, writableObjectMode: { __proto__: null, ...a(n.prototype, "writableObjectMode") }, writableBuffer: { __proto__: null, ...a(n.prototype, "writableBuffer") }, writableLength: { __proto__: null, ...a(n.prototype, "writableLength") }, writableFinished: { __proto__: null, ...a(n.prototype, "writableFinished") }, writableCorked: { __proto__: null, ...a(n.prototype, "writableCorked") }, writableEnded: { __proto__: null, ...a(n.prototype, "writableEnded") }, writableNeedDrain: { __proto__: null, ...a(n.prototype, "writableNeedDrain") }, destroyed: { __proto__: null, get() {
    return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
  }, set(d) {
    this._readableState && this._writableState && (this._readableState.destroyed = d, this._writableState.destroyed = d);
  } } });
  var i;
  function o() {
    return i === void 0 && (i = {}), i;
  }
  e.fromWeb = function(d, m) {
    return o().newStreamDuplexFromReadableWritablePair(d, m);
  }, e.toWeb = function(d) {
    return o().newReadableWritablePairFromDuplex(d);
  };
  var g;
  e.from = function(d) {
    return g || (g = il()), g(d, "body");
  };
}), Ts = de((h, f) => {
  le(), ce(), ue();
  var { ObjectSetPrototypeOf: s, Symbol: a } = Me();
  f.exports = e;
  var { ERR_METHOD_NOT_IMPLEMENTED: u } = qe().codes, r = st(), { getHighWaterMark: t } = Or();
  s(e.prototype, r.prototype), s(e, r);
  var n = a("kCallback");
  function e(g) {
    if (!(this instanceof e)) return new e(g);
    let d = g ? t(this, g, "readableHighWaterMark", !0) : null;
    d === 0 && (g = { ...g, highWaterMark: null, readableHighWaterMark: d, writableHighWaterMark: g.writableHighWaterMark || 0 }), r.call(this, g), this._readableState.sync = !1, this[n] = null, g && (typeof g.transform == "function" && (this._transform = g.transform), typeof g.flush == "function" && (this._flush = g.flush)), this.on("prefinish", o);
  }
  function i(g) {
    typeof this._flush == "function" && !this.destroyed ? this._flush((d, m) => {
      if (d) {
        g ? g(d) : this.destroy(d);
        return;
      }
      m != null && this.push(m), this.push(null), g && g();
    }) : (this.push(null), g && g());
  }
  function o() {
    this._final !== i && i.call(this);
  }
  e.prototype._final = i, e.prototype._transform = function(g, d, m) {
    throw new u("_transform()");
  }, e.prototype._write = function(g, d, m) {
    let c = this._readableState, y = this._writableState, b = c.length;
    this._transform(g, d, (S, p) => {
      if (S) {
        m(S);
        return;
      }
      p != null && this.push(p), y.ended || b === c.length || c.length < c.highWaterMark ? m() : this[n] = m;
    });
  }, e.prototype._read = function() {
    if (this[n]) {
      let g = this[n];
      this[n] = null, g();
    }
  };
}), Os = de((h, f) => {
  le(), ce(), ue();
  var { ObjectSetPrototypeOf: s } = Me();
  f.exports = u;
  var a = Ts();
  s(u.prototype, a.prototype), s(u, a);
  function u(r) {
    if (!(this instanceof u)) return new u(r);
    a.call(this, r);
  }
  u.prototype._transform = function(r, t, n) {
    n(null, r);
  };
}), Di = de((h, f) => {
  le(), ce(), ue();
  var s = It(), { ArrayIsArray: a, Promise: u, SymbolAsyncIterator: r, SymbolDispose: t } = Me(), n = bt(), { once: e } = $e(), i = jt(), o = st(), { aggregateTwoErrors: g, codes: { ERR_INVALID_ARG_TYPE: d, ERR_INVALID_RETURN_VALUE: m, ERR_MISSING_ARGS: c, ERR_STREAM_DESTROYED: y, ERR_STREAM_PREMATURE_CLOSE: b }, AbortError: S } = qe(), { validateFunction: p, validateAbortSignal: _ } = Gt(), { isIterable: I, isReadable: v, isReadableNodeStream: A, isNodeStream: E, isTransformStream: T, isWebStream: C, isReadableStream: P, isReadableFinished: L } = lt(), O = globalThis.AbortController || Ht().AbortController, q, D, B;
  function ae(te, we, H) {
    let N = !1;
    te.on("close", () => {
      N = !0;
    });
    let ne = n(te, { readable: we, writable: H }, (z) => {
      N = !z;
    });
    return { destroy: (z) => {
      N || (N = !0, i.destroyer(te, z || new y("pipe")));
    }, cleanup: ne };
  }
  function Q(te) {
    return p(te[te.length - 1], "streams[stream.length - 1]"), te.pop();
  }
  function K(te) {
    if (I(te)) return te;
    if (A(te)) return re(te);
    throw new d("val", ["Readable", "Iterable", "AsyncIterable"], te);
  }
  async function* re(te) {
    D || (D = kr()), yield* D.prototype[r].call(te);
  }
  async function F(te, we, H, { end: N }) {
    let ne, z = null, G = (oe) => {
      if (oe && (ne = oe), z) {
        let M = z;
        z = null, M();
      }
    }, Y = () => new u((oe, M) => {
      ne ? M(ne) : z = () => {
        ne ? M(ne) : oe();
      };
    });
    we.on("drain", G);
    let ye = n(we, { readable: !1 }, G);
    try {
      we.writableNeedDrain && await Y();
      for await (let oe of te) we.write(oe) || await Y();
      N && (we.end(), await Y()), H();
    } catch (oe) {
      H(ne !== oe ? g(ne, oe) : oe);
    } finally {
      ye(), we.off("drain", G);
    }
  }
  async function Z(te, we, H, { end: N }) {
    T(we) && (we = we.writable);
    let ne = we.getWriter();
    try {
      for await (let z of te) await ne.ready, ne.write(z).catch(() => {
      });
      await ne.ready, N && await ne.close(), H();
    } catch (z) {
      try {
        await ne.abort(z), H(z);
      } catch (G) {
        H(G);
      }
    }
  }
  function R(...te) {
    return J(te, e(Q(te)));
  }
  function J(te, we, H) {
    if (te.length === 1 && a(te[0]) && (te = te[0]), te.length < 2) throw new c("streams");
    let N = new O(), ne = N.signal, z = H?.signal, G = [];
    _(z, "options.signal");
    function Y() {
      pe(new S());
    }
    B = B || $e().addAbortListener;
    let ye;
    z && (ye = B(z, Y));
    let oe, M, W = [], ee = 0;
    function he(ve) {
      pe(ve, --ee === 0);
    }
    function pe(ve, se) {
      var Oe;
      if (ve && (!oe || oe.code === "ERR_STREAM_PREMATURE_CLOSE") && (oe = ve), !(!oe && !se)) {
        for (; W.length; ) W.shift()(oe);
        (Oe = ye) === null || Oe === void 0 || Oe[t](), N.abort(), se && (oe || G.forEach((l) => l()), s.nextTick(we, oe, M));
      }
    }
    let me;
    for (let ve = 0; ve < te.length; ve++) {
      let se = te[ve], Oe = ve < te.length - 1, l = ve > 0, w = Oe || H?.end !== !1, x = ve === te.length - 1;
      if (E(se)) {
        let U = function(X) {
          X && X.name !== "AbortError" && X.code !== "ERR_STREAM_PREMATURE_CLOSE" && he(X);
        };
        if (w) {
          let { destroy: X, cleanup: fe } = ae(se, Oe, l);
          W.push(X), v(se) && x && G.push(fe);
        }
        se.on("error", U), v(se) && x && G.push(() => {
          se.removeListener("error", U);
        });
      }
      if (ve === 0) if (typeof se == "function") {
        if (me = se({ signal: ne }), !I(me)) throw new m("Iterable, AsyncIterable or Stream", "source", me);
      } else I(se) || A(se) || T(se) ? me = se : me = o.from(se);
      else if (typeof se == "function") {
        if (T(me)) {
          var $;
          me = K(($ = me) === null || $ === void 0 ? void 0 : $.readable);
        } else me = K(me);
        if (me = se(me, { signal: ne }), Oe) {
          if (!I(me, !0)) throw new m("AsyncIterable", `transform[${ve - 1}]`, me);
        } else {
          var ge;
          q || (q = Os());
          let U = new q({ objectMode: !0 }), X = (ge = me) === null || ge === void 0 ? void 0 : ge.then;
          if (typeof X == "function") ee++, X.call(me, (V) => {
            M = V, V != null && U.write(V), w && U.end(), s.nextTick(he);
          }, (V) => {
            U.destroy(V), s.nextTick(he, V);
          });
          else if (I(me, !0)) ee++, F(me, U, he, { end: w });
          else if (P(me) || T(me)) {
            let V = me.readable || me;
            ee++, F(V, U, he, { end: w });
          } else throw new m("AsyncIterable or Promise", "destination", me);
          me = U;
          let { destroy: fe, cleanup: Se } = ae(me, !1, !0);
          W.push(fe), x && G.push(Se);
        }
      } else if (E(se)) {
        if (A(me)) {
          ee += 2;
          let U = be(me, se, he, { end: w });
          v(se) && x && G.push(U);
        } else if (T(me) || P(me)) {
          let U = me.readable || me;
          ee++, F(U, se, he, { end: w });
        } else if (I(me)) ee++, F(me, se, he, { end: w });
        else throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], me);
        me = se;
      } else if (C(se)) {
        if (A(me)) ee++, Z(K(me), se, he, { end: w });
        else if (P(me) || I(me)) ee++, Z(me, se, he, { end: w });
        else if (T(me)) ee++, Z(me.readable, se, he, { end: w });
        else throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], me);
        me = se;
      } else me = o.from(se);
    }
    return (ne != null && ne.aborted || z != null && z.aborted) && s.nextTick(Y), me;
  }
  function be(te, we, H, { end: N }) {
    let ne = !1;
    if (we.on("close", () => {
      ne || H(new b());
    }), te.pipe(we, { end: !1 }), N) {
      let z = function() {
        ne = !0, we.end();
      };
      L(te) ? s.nextTick(z) : te.once("end", z);
    } else H();
    return n(te, { readable: !0, writable: !1 }, (z) => {
      let G = te._readableState;
      z && z.code === "ERR_STREAM_PREMATURE_CLOSE" && G && G.ended && !G.errored && !G.errorEmitted ? te.once("end", H).once("error", H) : H(z);
    }), n(we, { readable: !1, writable: !0 }, H);
  }
  f.exports = { pipelineImpl: J, pipeline: R };
}), ks = de((h, f) => {
  le(), ce(), ue();
  var { pipeline: s } = Di(), a = st(), { destroyer: u } = jt(), { isNodeStream: r, isReadable: t, isWritable: n, isWebStream: e, isTransformStream: i, isWritableStream: o, isReadableStream: g } = lt(), { AbortError: d, codes: { ERR_INVALID_ARG_VALUE: m, ERR_MISSING_ARGS: c } } = qe(), y = bt();
  f.exports = function(...b) {
    if (b.length === 0) throw new c("streams");
    if (b.length === 1) return a.from(b[0]);
    let S = [...b];
    if (typeof b[0] == "function" && (b[0] = a.from(b[0])), typeof b[b.length - 1] == "function") {
      let O = b.length - 1;
      b[O] = a.from(b[O]);
    }
    for (let O = 0; O < b.length; ++O) if (!(!r(b[O]) && !e(b[O]))) {
      if (O < b.length - 1 && !(t(b[O]) || g(b[O]) || i(b[O]))) throw new m(`streams[${O}]`, S[O], "must be readable");
      if (O > 0 && !(n(b[O]) || o(b[O]) || i(b[O]))) throw new m(`streams[${O}]`, S[O], "must be writable");
    }
    let p, _, I, v, A;
    function E(O) {
      let q = v;
      v = null, q ? q(O) : O ? A.destroy(O) : !L && !P && A.destroy();
    }
    let T = b[0], C = s(b, E), P = !!(n(T) || o(T) || i(T)), L = !!(t(C) || g(C) || i(C));
    if (A = new a({ writableObjectMode: !!(T != null && T.writableObjectMode), readableObjectMode: !!(C != null && C.readableObjectMode), writable: P, readable: L }), P) {
      if (r(T)) A._write = function(q, D, B) {
        T.write(q, D) ? B() : p = B;
      }, A._final = function(q) {
        T.end(), _ = q;
      }, T.on("drain", function() {
        if (p) {
          let q = p;
          p = null, q();
        }
      });
      else if (e(T)) {
        let q = (i(T) ? T.writable : T).getWriter();
        A._write = async function(D, B, ae) {
          try {
            await q.ready, q.write(D).catch(() => {
            }), ae();
          } catch (Q) {
            ae(Q);
          }
        }, A._final = async function(D) {
          try {
            await q.ready, q.close().catch(() => {
            }), _ = D;
          } catch (B) {
            D(B);
          }
        };
      }
      let O = i(C) ? C.readable : C;
      y(O, () => {
        if (_) {
          let q = _;
          _ = null, q();
        }
      });
    }
    if (L) {
      if (r(C)) C.on("readable", function() {
        if (I) {
          let O = I;
          I = null, O();
        }
      }), C.on("end", function() {
        A.push(null);
      }), A._read = function() {
        for (; ; ) {
          let O = C.read();
          if (O === null) {
            I = A._read;
            return;
          }
          if (!A.push(O)) return;
        }
      };
      else if (e(C)) {
        let O = (i(C) ? C.readable : C).getReader();
        A._read = async function() {
          for (; ; ) try {
            let { value: q, done: D } = await O.read();
            if (!A.push(q)) return;
            if (D) {
              A.push(null);
              return;
            }
          } catch {
            return;
          }
        };
      }
    }
    return A._destroy = function(O, q) {
      !O && v !== null && (O = new d()), I = null, p = null, _ = null, v === null ? q(O) : (v = q, r(C) && u(C, O));
    }, A;
  };
}), ol = de((h, f) => {
  le(), ce(), ue();
  var s = globalThis.AbortController || Ht().AbortController, { codes: { ERR_INVALID_ARG_VALUE: a, ERR_INVALID_ARG_TYPE: u, ERR_MISSING_ARGS: r, ERR_OUT_OF_RANGE: t }, AbortError: n } = qe(), { validateAbortSignal: e, validateInteger: i, validateObject: o } = Gt(), g = Me().Symbol("kWeak"), d = Me().Symbol("kResistStopPropagation"), { finished: m } = bt(), c = ks(), { addAbortSignalNoValidate: y } = Tr(), { isWritable: b, isNodeStream: S } = lt(), { deprecate: p } = $e(), { ArrayPrototypePush: _, Boolean: I, MathFloor: v, Number: A, NumberIsNaN: E, Promise: T, PromiseReject: C, PromiseResolve: P, PromisePrototypeThen: L, Symbol: O } = Me(), q = O("kEmpty"), D = O("kEof");
  function B(z, G) {
    if (G != null && o(G, "options"), G?.signal != null && e(G.signal, "options.signal"), S(z) && !b(z)) throw new a("stream", z, "must be writable");
    let Y = c(this, z);
    return G != null && G.signal && y(G.signal, Y), Y;
  }
  function ae(z, G) {
    if (typeof z != "function") throw new u("fn", ["Function", "AsyncFunction"], z);
    G != null && o(G, "options"), G?.signal != null && e(G.signal, "options.signal");
    let Y = 1;
    G?.concurrency != null && (Y = v(G.concurrency));
    let ye = Y - 1;
    return G?.highWaterMark != null && (ye = v(G.highWaterMark)), i(Y, "options.concurrency", 1), i(ye, "options.highWaterMark", 0), ye += Y, async function* () {
      let oe = $e().AbortSignalAny([G?.signal].filter(I)), M = this, W = [], ee = { signal: oe }, he, pe, me = !1, $ = 0;
      function ge() {
        me = !0, ve();
      }
      function ve() {
        $ -= 1, se();
      }
      function se() {
        pe && !me && $ < Y && W.length < ye && (pe(), pe = null);
      }
      async function Oe() {
        try {
          for await (let l of M) {
            if (me) return;
            if (oe.aborted) throw new n();
            try {
              if (l = z(l, ee), l === q) continue;
              l = P(l);
            } catch (w) {
              l = C(w);
            }
            $ += 1, L(l, ve, ge), W.push(l), he && (he(), he = null), !me && (W.length >= ye || $ >= Y) && await new T((w) => {
              pe = w;
            });
          }
          W.push(D);
        } catch (l) {
          let w = C(l);
          L(w, ve, ge), W.push(w);
        } finally {
          me = !0, he && (he(), he = null);
        }
      }
      Oe();
      try {
        for (; ; ) {
          for (; W.length > 0; ) {
            let l = await W[0];
            if (l === D) return;
            if (oe.aborted) throw new n();
            l !== q && (yield l), W.shift(), se();
          }
          await new T((l) => {
            he = l;
          });
        }
      } finally {
        me = !0, pe && (pe(), pe = null);
      }
    }.call(this);
  }
  function Q(z = void 0) {
    return z != null && o(z, "options"), z?.signal != null && e(z.signal, "options.signal"), async function* () {
      let G = 0;
      for await (let ye of this) {
        var Y;
        if (z != null && (Y = z.signal) !== null && Y !== void 0 && Y.aborted) throw new n({ cause: z.signal.reason });
        yield [G++, ye];
      }
    }.call(this);
  }
  async function K(z, G = void 0) {
    for await (let Y of R.call(this, z, G)) return !0;
    return !1;
  }
  async function re(z, G = void 0) {
    if (typeof z != "function") throw new u("fn", ["Function", "AsyncFunction"], z);
    return !await K.call(this, async (...Y) => !await z(...Y), G);
  }
  async function F(z, G) {
    for await (let Y of R.call(this, z, G)) return Y;
  }
  async function Z(z, G) {
    if (typeof z != "function") throw new u("fn", ["Function", "AsyncFunction"], z);
    async function Y(ye, oe) {
      return await z(ye, oe), q;
    }
    for await (let ye of ae.call(this, Y, G)) ;
  }
  function R(z, G) {
    if (typeof z != "function") throw new u("fn", ["Function", "AsyncFunction"], z);
    async function Y(ye, oe) {
      return await z(ye, oe) ? ye : q;
    }
    return ae.call(this, Y, G);
  }
  var J = class extends r {
    constructor() {
      super("reduce"), this.message = "Reduce of an empty stream requires an initial value";
    }
  };
  async function be(z, G, Y) {
    var ye;
    if (typeof z != "function") throw new u("reducer", ["Function", "AsyncFunction"], z);
    Y != null && o(Y, "options"), Y?.signal != null && e(Y.signal, "options.signal");
    let oe = arguments.length > 1;
    if (Y != null && (ye = Y.signal) !== null && ye !== void 0 && ye.aborted) {
      let pe = new n(void 0, { cause: Y.signal.reason });
      throw this.once("error", () => {
      }), await m(this.destroy(pe)), pe;
    }
    let M = new s(), W = M.signal;
    if (Y != null && Y.signal) {
      let pe = { once: !0, [g]: this, [d]: !0 };
      Y.signal.addEventListener("abort", () => M.abort(), pe);
    }
    let ee = !1;
    try {
      for await (let pe of this) {
        var he;
        if (ee = !0, Y != null && (he = Y.signal) !== null && he !== void 0 && he.aborted) throw new n();
        oe ? G = await z(G, pe, { signal: W }) : (G = pe, oe = !0);
      }
      if (!ee && !oe) throw new J();
    } finally {
      M.abort();
    }
    return G;
  }
  async function te(z) {
    z != null && o(z, "options"), z?.signal != null && e(z.signal, "options.signal");
    let G = [];
    for await (let ye of this) {
      var Y;
      if (z != null && (Y = z.signal) !== null && Y !== void 0 && Y.aborted) throw new n(void 0, { cause: z.signal.reason });
      _(G, ye);
    }
    return G;
  }
  function we(z, G) {
    let Y = ae.call(this, z, G);
    return async function* () {
      for await (let ye of Y) yield* ye;
    }.call(this);
  }
  function H(z) {
    if (z = A(z), E(z)) return 0;
    if (z < 0) throw new t("number", ">= 0", z);
    return z;
  }
  function N(z, G = void 0) {
    return G != null && o(G, "options"), G?.signal != null && e(G.signal, "options.signal"), z = H(z), async function* () {
      var Y;
      if (G != null && (Y = G.signal) !== null && Y !== void 0 && Y.aborted) throw new n();
      for await (let oe of this) {
        var ye;
        if (G != null && (ye = G.signal) !== null && ye !== void 0 && ye.aborted) throw new n();
        z-- <= 0 && (yield oe);
      }
    }.call(this);
  }
  function ne(z, G = void 0) {
    return G != null && o(G, "options"), G?.signal != null && e(G.signal, "options.signal"), z = H(z), async function* () {
      var Y;
      if (G != null && (Y = G.signal) !== null && Y !== void 0 && Y.aborted) throw new n();
      for await (let oe of this) {
        var ye;
        if (G != null && (ye = G.signal) !== null && ye !== void 0 && ye.aborted) throw new n();
        if (z-- > 0 && (yield oe), z <= 0) return;
      }
    }.call(this);
  }
  f.exports.streamReturningOperators = { asIndexedPairs: p(Q, "readable.asIndexedPairs will be removed in a future version."), drop: N, filter: R, flatMap: we, map: ae, take: ne, compose: B }, f.exports.promiseReturningOperators = { every: re, forEach: Z, reduce: be, toArray: te, some: K, find: F };
}), Ps = de((h, f) => {
  le(), ce(), ue();
  var { ArrayPrototypePop: s, Promise: a } = Me(), { isIterable: u, isNodeStream: r, isWebStream: t } = lt(), { pipelineImpl: n } = Di(), { finished: e } = bt();
  Rs();
  function i(...o) {
    return new a((g, d) => {
      let m, c, y = o[o.length - 1];
      if (y && typeof y == "object" && !r(y) && !u(y) && !t(y)) {
        let b = s(o);
        m = b.signal, c = b.end;
      }
      n(o, (b, S) => {
        b ? d(b) : g(S);
      }, { signal: m, end: c });
    });
  }
  f.exports = { finished: e, pipeline: i };
}), Rs = de((h, f) => {
  le(), ce(), ue();
  var { Buffer: s } = (Be(), Pe(Ne)), { ObjectDefineProperty: a, ObjectKeys: u, ReflectApply: r } = Me(), { promisify: { custom: t } } = $e(), { streamReturningOperators: n, promiseReturningOperators: e } = ol(), { codes: { ERR_ILLEGAL_CONSTRUCTOR: i } } = qe(), o = ks(), { setDefaultHighWaterMark: g, getDefaultHighWaterMark: d } = Or(), { pipeline: m } = Di(), { destroyer: c } = jt(), y = bt(), b = Ps(), S = lt(), p = f.exports = Ui().Stream;
  p.isDestroyed = S.isDestroyed, p.isDisturbed = S.isDisturbed, p.isErrored = S.isErrored, p.isReadable = S.isReadable, p.isWritable = S.isWritable, p.Readable = kr();
  for (let I of u(n)) {
    let v = function(...E) {
      if (new.target) throw i();
      return p.Readable.from(r(A, this, E));
    }, A = n[I];
    a(v, "name", { __proto__: null, value: A.name }), a(v, "length", { __proto__: null, value: A.length }), a(p.Readable.prototype, I, { __proto__: null, value: v, enumerable: !1, configurable: !0, writable: !0 });
  }
  for (let I of u(e)) {
    let v = function(...E) {
      if (new.target) throw i();
      return r(A, this, E);
    }, A = e[I];
    a(v, "name", { __proto__: null, value: A.name }), a(v, "length", { __proto__: null, value: A.length }), a(p.Readable.prototype, I, { __proto__: null, value: v, enumerable: !1, configurable: !0, writable: !0 });
  }
  p.Writable = Li(), p.Duplex = st(), p.Transform = Ts(), p.PassThrough = Os(), p.pipeline = m;
  var { addAbortSignal: _ } = Tr();
  p.addAbortSignal = _, p.finished = y, p.destroy = c, p.compose = o, p.setDefaultHighWaterMark = g, p.getDefaultHighWaterMark = d, a(p, "promises", { __proto__: null, configurable: !0, enumerable: !0, get() {
    return b;
  } }), a(m, t, { __proto__: null, enumerable: !0, get() {
    return b.pipeline;
  } }), a(y, t, { __proto__: null, enumerable: !0, get() {
    return b.finished;
  } }), p.Stream = p, p._isUint8Array = function(I) {
    return I instanceof Uint8Array;
  }, p._uint8ArrayToBuffer = function(I) {
    return s.from(I.buffer, I.byteOffset, I.byteLength);
  };
}), xt = de((h, f) => {
  le(), ce(), ue();
  var s = Rs(), a = Ps(), u = s.Readable.destroy;
  f.exports = s.Readable, f.exports._uint8ArrayToBuffer = s._uint8ArrayToBuffer, f.exports._isUint8Array = s._isUint8Array, f.exports.isDisturbed = s.isDisturbed, f.exports.isErrored = s.isErrored, f.exports.isReadable = s.isReadable, f.exports.Readable = s.Readable, f.exports.Writable = s.Writable, f.exports.Duplex = s.Duplex, f.exports.Transform = s.Transform, f.exports.PassThrough = s.PassThrough, f.exports.addAbortSignal = s.addAbortSignal, f.exports.finished = s.finished, f.exports.destroy = s.destroy, f.exports.destroy = u, f.exports.pipeline = s.pipeline, f.exports.compose = s.compose, Object.defineProperty(s, "promises", { configurable: !0, enumerable: !0, get() {
    return a;
  } }), f.exports.Stream = s.Stream, f.exports.default = f.exports;
}), sl = de((h, f) => {
  le(), ce(), ue(), typeof Object.create == "function" ? f.exports = function(s, a) {
    a && (s.super_ = a, s.prototype = Object.create(a.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }));
  } : f.exports = function(s, a) {
    if (a) {
      s.super_ = a;
      var u = function() {
      };
      u.prototype = a.prototype, s.prototype = new u(), s.prototype.constructor = s;
    }
  };
}), al = de((h, f) => {
  le(), ce(), ue();
  var { Buffer: s } = (Be(), Pe(Ne)), a = Symbol.for("BufferList");
  function u(r) {
    if (!(this instanceof u)) return new u(r);
    u._init.call(this, r);
  }
  u._init = function(r) {
    Object.defineProperty(this, a, { value: !0 }), this._bufs = [], this.length = 0, r && this.append(r);
  }, u.prototype._new = function(r) {
    return new u(r);
  }, u.prototype._offset = function(r) {
    if (r === 0) return [0, 0];
    let t = 0;
    for (let n = 0; n < this._bufs.length; n++) {
      let e = t + this._bufs[n].length;
      if (r < e || n === this._bufs.length - 1) return [n, r - t];
      t = e;
    }
  }, u.prototype._reverseOffset = function(r) {
    let t = r[0], n = r[1];
    for (let e = 0; e < t; e++) n += this._bufs[e].length;
    return n;
  }, u.prototype.getBuffers = function() {
    return this._bufs;
  }, u.prototype.get = function(r) {
    if (r > this.length || r < 0) return;
    let t = this._offset(r);
    return this._bufs[t[0]][t[1]];
  }, u.prototype.slice = function(r, t) {
    return typeof r == "number" && r < 0 && (r += this.length), typeof t == "number" && t < 0 && (t += this.length), this.copy(null, 0, r, t);
  }, u.prototype.copy = function(r, t, n, e) {
    if ((typeof n != "number" || n < 0) && (n = 0), (typeof e != "number" || e > this.length) && (e = this.length), n >= this.length || e <= 0) return r || s.alloc(0);
    let i = !!r, o = this._offset(n), g = e - n, d = g, m = i && t || 0, c = o[1];
    if (n === 0 && e === this.length) {
      if (!i) return this._bufs.length === 1 ? this._bufs[0] : s.concat(this._bufs, this.length);
      for (let y = 0; y < this._bufs.length; y++) this._bufs[y].copy(r, m), m += this._bufs[y].length;
      return r;
    }
    if (d <= this._bufs[o[0]].length - c) return i ? this._bufs[o[0]].copy(r, t, c, c + d) : this._bufs[o[0]].slice(c, c + d);
    i || (r = s.allocUnsafe(g));
    for (let y = o[0]; y < this._bufs.length; y++) {
      let b = this._bufs[y].length - c;
      if (d > b) this._bufs[y].copy(r, m, c), m += b;
      else {
        this._bufs[y].copy(r, m, c, c + d), m += b;
        break;
      }
      d -= b, c && (c = 0);
    }
    return r.length > m ? r.slice(0, m) : r;
  }, u.prototype.shallowSlice = function(r, t) {
    if (r = r || 0, t = typeof t != "number" ? this.length : t, r < 0 && (r += this.length), t < 0 && (t += this.length), r === t) return this._new();
    let n = this._offset(r), e = this._offset(t), i = this._bufs.slice(n[0], e[0] + 1);
    return e[1] === 0 ? i.pop() : i[i.length - 1] = i[i.length - 1].slice(0, e[1]), n[1] !== 0 && (i[0] = i[0].slice(n[1])), this._new(i);
  }, u.prototype.toString = function(r, t, n) {
    return this.slice(t, n).toString(r);
  }, u.prototype.consume = function(r) {
    if (r = Math.trunc(r), Number.isNaN(r) || r <= 0) return this;
    for (; this._bufs.length; ) if (r >= this._bufs[0].length) r -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift();
    else {
      this._bufs[0] = this._bufs[0].slice(r), this.length -= r;
      break;
    }
    return this;
  }, u.prototype.duplicate = function() {
    let r = this._new();
    for (let t = 0; t < this._bufs.length; t++) r.append(this._bufs[t]);
    return r;
  }, u.prototype.append = function(r) {
    return this._attach(r, u.prototype._appendBuffer);
  }, u.prototype.prepend = function(r) {
    return this._attach(r, u.prototype._prependBuffer, !0);
  }, u.prototype._attach = function(r, t, n) {
    if (r == null) return this;
    if (r.buffer) t.call(this, s.from(r.buffer, r.byteOffset, r.byteLength));
    else if (Array.isArray(r)) {
      let [e, i] = n ? [r.length - 1, -1] : [0, 1];
      for (let o = e; o >= 0 && o < r.length; o += i) this._attach(r[o], t, n);
    } else if (this._isBufferList(r)) {
      let [e, i] = n ? [r._bufs.length - 1, -1] : [0, 1];
      for (let o = e; o >= 0 && o < r._bufs.length; o += i) this._attach(r._bufs[o], t, n);
    } else typeof r == "number" && (r = r.toString()), t.call(this, s.from(r));
    return this;
  }, u.prototype._appendBuffer = function(r) {
    this._bufs.push(r), this.length += r.length;
  }, u.prototype._prependBuffer = function(r) {
    this._bufs.unshift(r), this.length += r.length;
  }, u.prototype.indexOf = function(r, t, n) {
    if (n === void 0 && typeof t == "string" && (n = t, t = void 0), typeof r == "function" || Array.isArray(r)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
    if (typeof r == "number" ? r = s.from([r]) : typeof r == "string" ? r = s.from(r, n) : this._isBufferList(r) ? r = r.slice() : Array.isArray(r.buffer) ? r = s.from(r.buffer, r.byteOffset, r.byteLength) : s.isBuffer(r) || (r = s.from(r)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), r.length === 0) return t > this.length ? this.length : t;
    let e = this._offset(t), i = e[0], o = e[1];
    for (; i < this._bufs.length; i++) {
      let g = this._bufs[i];
      for (; o < g.length; ) if (g.length - o >= r.length) {
        let d = g.indexOf(r, o);
        if (d !== -1) return this._reverseOffset([i, d]);
        o = g.length - r.length + 1;
      } else {
        let d = this._reverseOffset([i, o]);
        if (this._match(d, r)) return d;
        o++;
      }
      o = 0;
    }
    return -1;
  }, u.prototype._match = function(r, t) {
    if (this.length - r < t.length) return !1;
    for (let n = 0; n < t.length; n++) if (this.get(r + n) !== t[n]) return !1;
    return !0;
  }, (function() {
    let r = { readDoubleBE: 8, readDoubleLE: 8, readFloatBE: 4, readFloatLE: 4, readBigInt64BE: 8, readBigInt64LE: 8, readBigUInt64BE: 8, readBigUInt64LE: 8, readInt32BE: 4, readInt32LE: 4, readUInt32BE: 4, readUInt32LE: 4, readInt16BE: 2, readInt16LE: 2, readUInt16BE: 2, readUInt16LE: 2, readInt8: 1, readUInt8: 1, readIntBE: null, readIntLE: null, readUIntBE: null, readUIntLE: null };
    for (let t in r) (function(n) {
      r[n] === null ? u.prototype[n] = function(e, i) {
        return this.slice(e, e + i)[n](0, i);
      } : u.prototype[n] = function(e = 0) {
        return this.slice(e, e + r[n])[n](0);
      };
    })(t);
  })(), u.prototype._isBufferList = function(r) {
    return r instanceof u || u.isBufferList(r);
  }, u.isBufferList = function(r) {
    return r != null && r[a];
  }, f.exports = u;
}), ll = de((h, f) => {
  le(), ce(), ue();
  var s = xt().Duplex, a = sl(), u = al();
  function r(t) {
    if (!(this instanceof r)) return new r(t);
    if (typeof t == "function") {
      this._callback = t;
      let n = function(e) {
        this._callback && (this._callback(e), this._callback = null);
      }.bind(this);
      this.on("pipe", function(e) {
        e.on("error", n);
      }), this.on("unpipe", function(e) {
        e.removeListener("error", n);
      }), t = null;
    }
    u._init.call(this, t), s.call(this);
  }
  a(r, s), Object.assign(r.prototype, u.prototype), r.prototype._new = function(t) {
    return new r(t);
  }, r.prototype._write = function(t, n, e) {
    this._appendBuffer(t), typeof e == "function" && e();
  }, r.prototype._read = function(t) {
    if (!this.length) return this.push(null);
    t = Math.min(t, this.length), this.push(this.slice(0, t)), this.consume(t);
  }, r.prototype.end = function(t) {
    s.prototype.end.call(this, t), this._callback && (this._callback(null, this.slice()), this._callback = null);
  }, r.prototype._destroy = function(t, n) {
    this._bufs.length = 0, this.length = 0, n(t);
  }, r.prototype._isBufferList = function(t) {
    return t instanceof r || t instanceof u || r.isBufferList(t);
  }, r.isBufferList = u.isBufferList, f.exports = r, f.exports.BufferListStream = r, f.exports.BufferList = u;
}), ul = de((h, f) => {
  le(), ce(), ue();
  var s = class {
    constructor() {
      this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null;
    }
  };
  f.exports = s;
}), Cs = de((h, f) => {
  le(), ce(), ue();
  var s = f.exports, { Buffer: a } = (Be(), Pe(Ne));
  s.types = { 0: "reserved", 1: "connect", 2: "connack", 3: "publish", 4: "puback", 5: "pubrec", 6: "pubrel", 7: "pubcomp", 8: "subscribe", 9: "suback", 10: "unsubscribe", 11: "unsuback", 12: "pingreq", 13: "pingresp", 14: "disconnect", 15: "auth" }, s.requiredHeaderFlags = { 1: 0, 2: 0, 4: 0, 5: 0, 6: 2, 7: 0, 8: 2, 9: 0, 10: 2, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0 }, s.requiredHeaderFlagsErrors = {};
  for (let r in s.requiredHeaderFlags) {
    let t = s.requiredHeaderFlags[r];
    s.requiredHeaderFlagsErrors[r] = "Invalid header flag bits, must be 0x" + t.toString(16) + " for " + s.types[r] + " packet";
  }
  s.codes = {};
  for (let r in s.types) {
    let t = s.types[r];
    s.codes[t] = r;
  }
  s.CMD_SHIFT = 4, s.CMD_MASK = 240, s.DUP_MASK = 8, s.QOS_MASK = 3, s.QOS_SHIFT = 1, s.RETAIN_MASK = 1, s.VARBYTEINT_MASK = 127, s.VARBYTEINT_FIN_MASK = 128, s.VARBYTEINT_MAX = 268435455, s.SESSIONPRESENT_MASK = 1, s.SESSIONPRESENT_HEADER = a.from([s.SESSIONPRESENT_MASK]), s.CONNACK_HEADER = a.from([s.codes.connack << s.CMD_SHIFT]), s.USERNAME_MASK = 128, s.PASSWORD_MASK = 64, s.WILL_RETAIN_MASK = 32, s.WILL_QOS_MASK = 24, s.WILL_QOS_SHIFT = 3, s.WILL_FLAG_MASK = 4, s.CLEAN_SESSION_MASK = 2, s.CONNECT_HEADER = a.from([s.codes.connect << s.CMD_SHIFT]), s.properties = { sessionExpiryInterval: 17, willDelayInterval: 24, receiveMaximum: 33, maximumPacketSize: 39, topicAliasMaximum: 34, requestResponseInformation: 25, requestProblemInformation: 23, userProperties: 38, authenticationMethod: 21, authenticationData: 22, payloadFormatIndicator: 1, messageExpiryInterval: 2, contentType: 3, responseTopic: 8, correlationData: 9, maximumQoS: 36, retainAvailable: 37, assignedClientIdentifier: 18, reasonString: 31, wildcardSubscriptionAvailable: 40, subscriptionIdentifiersAvailable: 41, sharedSubscriptionAvailable: 42, serverKeepAlive: 19, responseInformation: 26, serverReference: 28, topicAlias: 35, subscriptionIdentifier: 11 }, s.propertiesCodes = {};
  for (let r in s.properties) {
    let t = s.properties[r];
    s.propertiesCodes[t] = r;
  }
  s.propertiesTypes = { sessionExpiryInterval: "int32", willDelayInterval: "int32", receiveMaximum: "int16", maximumPacketSize: "int32", topicAliasMaximum: "int16", requestResponseInformation: "byte", requestProblemInformation: "byte", userProperties: "pair", authenticationMethod: "string", authenticationData: "binary", payloadFormatIndicator: "byte", messageExpiryInterval: "int32", contentType: "string", responseTopic: "string", correlationData: "binary", maximumQoS: "int8", retainAvailable: "byte", assignedClientIdentifier: "string", reasonString: "string", wildcardSubscriptionAvailable: "byte", subscriptionIdentifiersAvailable: "byte", sharedSubscriptionAvailable: "byte", serverKeepAlive: "int16", responseInformation: "string", serverReference: "string", topicAlias: "int16", subscriptionIdentifier: "var" };
  function u(r) {
    return [0, 1, 2].map((t) => [0, 1].map((n) => [0, 1].map((e) => {
      let i = a.alloc(1);
      return i.writeUInt8(s.codes[r] << s.CMD_SHIFT | (n ? s.DUP_MASK : 0) | t << s.QOS_SHIFT | e, 0, !0), i;
    })));
  }
  s.PUBLISH_HEADER = u("publish"), s.SUBSCRIBE_HEADER = u("subscribe"), s.SUBSCRIBE_OPTIONS_QOS_MASK = 3, s.SUBSCRIBE_OPTIONS_NL_MASK = 1, s.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, s.SUBSCRIBE_OPTIONS_RAP_MASK = 1, s.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, s.SUBSCRIBE_OPTIONS_RH_MASK = 3, s.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, s.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], s.SUBSCRIBE_OPTIONS_NL = 4, s.SUBSCRIBE_OPTIONS_RAP = 8, s.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], s.UNSUBSCRIBE_HEADER = u("unsubscribe"), s.ACKS = { unsuback: u("unsuback"), puback: u("puback"), pubcomp: u("pubcomp"), pubrel: u("pubrel"), pubrec: u("pubrec") }, s.SUBACK_HEADER = a.from([s.codes.suback << s.CMD_SHIFT]), s.VERSION3 = a.from([3]), s.VERSION4 = a.from([4]), s.VERSION5 = a.from([5]), s.VERSION131 = a.from([131]), s.VERSION132 = a.from([132]), s.QOS = [0, 1, 2].map((r) => a.from([r])), s.EMPTY = { pingreq: a.from([s.codes.pingreq << 4, 0]), pingresp: a.from([s.codes.pingresp << 4, 0]), disconnect: a.from([s.codes.disconnect << 4, 0]) }, s.MQTT5_PUBACK_PUBREC_CODES = { 0: "Success", 16: "No matching subscribers", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 144: "Topic Name invalid", 145: "Packet identifier in use", 151: "Quota exceeded", 153: "Payload format invalid" }, s.MQTT5_PUBREL_PUBCOMP_CODES = { 0: "Success", 146: "Packet Identifier not found" }, s.MQTT5_SUBACK_CODES = { 0: "Granted QoS 0", 1: "Granted QoS 1", 2: "Granted QoS 2", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use", 151: "Quota exceeded", 158: "Shared Subscriptions not supported", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, s.MQTT5_UNSUBACK_CODES = { 0: "Success", 17: "No subscription existed", 128: "Unspecified error", 131: "Implementation specific error", 135: "Not authorized", 143: "Topic Filter invalid", 145: "Packet Identifier in use" }, s.MQTT5_DISCONNECT_CODES = { 0: "Normal disconnection", 4: "Disconnect with Will Message", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 135: "Not authorized", 137: "Server busy", 139: "Server shutting down", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" }, s.MQTT5_AUTH_CODES = { 0: "Success", 24: "Continue authentication", 25: "Re-authenticate" };
}), cl = de((h, f) => {
  le(), ce(), ue();
  var s = 1e3, a = s * 60, u = a * 60, r = u * 24, t = r * 7, n = r * 365.25;
  f.exports = function(d, m) {
    m = m || {};
    var c = typeof d;
    if (c === "string" && d.length > 0) return e(d);
    if (c === "number" && isFinite(d)) return m.long ? o(d) : i(d);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(d));
  };
  function e(d) {
    if (d = String(d), !(d.length > 100)) {
      var m = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(d);
      if (m) {
        var c = parseFloat(m[1]), y = (m[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return c * n;
          case "weeks":
          case "week":
          case "w":
            return c * t;
          case "days":
          case "day":
          case "d":
            return c * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return c * u;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return c * a;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return c * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return c;
          default:
            return;
        }
      }
    }
  }
  function i(d) {
    var m = Math.abs(d);
    return m >= r ? Math.round(d / r) + "d" : m >= u ? Math.round(d / u) + "h" : m >= a ? Math.round(d / a) + "m" : m >= s ? Math.round(d / s) + "s" : d + "ms";
  }
  function o(d) {
    var m = Math.abs(d);
    return m >= r ? g(d, m, r, "day") : m >= u ? g(d, m, u, "hour") : m >= a ? g(d, m, a, "minute") : m >= s ? g(d, m, s, "second") : d + " ms";
  }
  function g(d, m, c, y) {
    var b = m >= c * 1.5;
    return Math.round(d / c) + " " + y + (b ? "s" : "");
  }
}), fl = de((h, f) => {
  le(), ce(), ue();
  function s(a) {
    r.debug = r, r.default = r, r.coerce = g, r.disable = i, r.enable = n, r.enabled = o, r.humanize = cl(), r.destroy = d, Object.keys(a).forEach((m) => {
      r[m] = a[m];
    }), r.names = [], r.skips = [], r.formatters = {};
    function u(m) {
      let c = 0;
      for (let y = 0; y < m.length; y++) c = (c << 5) - c + m.charCodeAt(y), c |= 0;
      return r.colors[Math.abs(c) % r.colors.length];
    }
    r.selectColor = u;
    function r(m) {
      let c, y = null, b, S;
      function p(..._) {
        if (!p.enabled) return;
        let I = p, v = Number(/* @__PURE__ */ new Date()), A = v - (c || v);
        I.diff = A, I.prev = c, I.curr = v, c = v, _[0] = r.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
        let E = 0;
        _[0] = _[0].replace(/%([a-zA-Z%])/g, (T, C) => {
          if (T === "%%") return "%";
          E++;
          let P = r.formatters[C];
          if (typeof P == "function") {
            let L = _[E];
            T = P.call(I, L), _.splice(E, 1), E--;
          }
          return T;
        }), r.formatArgs.call(I, _), (I.log || r.log).apply(I, _);
      }
      return p.namespace = m, p.useColors = r.useColors(), p.color = r.selectColor(m), p.extend = t, p.destroy = r.destroy, Object.defineProperty(p, "enabled", { enumerable: !0, configurable: !1, get: () => y !== null ? y : (b !== r.namespaces && (b = r.namespaces, S = r.enabled(m)), S), set: (_) => {
        y = _;
      } }), typeof r.init == "function" && r.init(p), p;
    }
    function t(m, c) {
      let y = r(this.namespace + (typeof c > "u" ? ":" : c) + m);
      return y.log = this.log, y;
    }
    function n(m) {
      r.save(m), r.namespaces = m, r.names = [], r.skips = [];
      let c = (typeof m == "string" ? m : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (let y of c) y[0] === "-" ? r.skips.push(y.slice(1)) : r.names.push(y);
    }
    function e(m, c) {
      let y = 0, b = 0, S = -1, p = 0;
      for (; y < m.length; ) if (b < c.length && (c[b] === m[y] || c[b] === "*")) c[b] === "*" ? (S = b, p = y, b++) : (y++, b++);
      else if (S !== -1) b = S + 1, p++, y = p;
      else return !1;
      for (; b < c.length && c[b] === "*"; ) b++;
      return b === c.length;
    }
    function i() {
      let m = [...r.names, ...r.skips.map((c) => "-" + c)].join(",");
      return r.enable(""), m;
    }
    function o(m) {
      for (let c of r.skips) if (e(m, c)) return !1;
      for (let c of r.names) if (e(m, c)) return !0;
      return !1;
    }
    function g(m) {
      return m instanceof Error ? m.stack || m.message : m;
    }
    function d() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  f.exports = s;
}), at = de((h, f) => {
  le(), ce(), ue(), h.formatArgs = a, h.save = u, h.load = r, h.useColors = s, h.storage = t(), h.destroy = /* @__PURE__ */ (() => {
    let e = !1;
    return () => {
      e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), h.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function s() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let e;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function a(e) {
    if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + f.exports.humanize(this.diff), !this.useColors) return;
    let i = "color: " + this.color;
    e.splice(1, 0, i, "color: inherit");
    let o = 0, g = 0;
    e[0].replace(/%[a-zA-Z%]/g, (d) => {
      d !== "%%" && (o++, d === "%c" && (g = o));
    }), e.splice(g, 0, i);
  }
  h.log = console.debug || console.log || (() => {
  });
  function u(e) {
    try {
      e ? h.storage.setItem("debug", e) : h.storage.removeItem("debug");
    } catch {
    }
  }
  function r() {
    let e;
    try {
      e = h.storage.getItem("debug") || h.storage.getItem("DEBUG");
    } catch {
    }
    return !e && typeof Re < "u" && "env" in Re && (e = Re.env.DEBUG), e;
  }
  function t() {
    try {
      return localStorage;
    } catch {
    }
  }
  f.exports = fl()(h);
  var { formatters: n } = f.exports;
  n.j = function(e) {
    try {
      return JSON.stringify(e);
    } catch (i) {
      return "[UnexpectedJSONParseError]: " + i.message;
    }
  };
}), hl = de((h, f) => {
  le(), ce(), ue();
  var s = ll(), { EventEmitter: a } = (At(), Pe(yt)), u = ul(), r = Cs(), t = at()("mqtt-packet:parser"), n = class Vn extends a {
    constructor() {
      super(), this.parser = this.constructor.parser;
    }
    static parser(i) {
      return this instanceof Vn ? (this.settings = i || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : new Vn().parser(i);
    }
    _resetState() {
      t("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new u(), this.error = null, this._list = s(), this._stateCounter = 0;
    }
    parse(i) {
      for (this.error && this._resetState(), this._list.append(i), t("parse: current state: %s", this._states[this._stateCounter]); (this.packet.length !== -1 || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error; ) this._stateCounter++, t("parse: state complete. _stateCounter is now: %d", this._stateCounter), t("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
      return t("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length;
    }
    _parseHeader() {
      let i = this._list.readUInt8(0), o = i >> r.CMD_SHIFT;
      this.packet.cmd = r.types[o];
      let g = i & 15, d = r.requiredHeaderFlags[o];
      return d != null && g !== d ? this._emitError(new Error(r.requiredHeaderFlagsErrors[o])) : (this.packet.retain = (i & r.RETAIN_MASK) !== 0, this.packet.qos = i >> r.QOS_SHIFT & r.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = (i & r.DUP_MASK) !== 0, t("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0));
    }
    _parseLength() {
      let i = this._parseVarByteNum(!0);
      return i && (this.packet.length = i.value, this._list.consume(i.bytes)), t("_parseLength %d", i.value), !!i;
    }
    _parsePayload() {
      t("_parsePayload: payload %O", this._list);
      let i = !1;
      if (this.packet.length === 0 || this._list.length >= this.packet.length) {
        switch (this._pos = 0, this.packet.cmd) {
          case "connect":
            this._parseConnect();
            break;
          case "connack":
            this._parseConnack();
            break;
          case "publish":
            this._parsePublish();
            break;
          case "puback":
          case "pubrec":
          case "pubrel":
          case "pubcomp":
            this._parseConfirmation();
            break;
          case "subscribe":
            this._parseSubscribe();
            break;
          case "suback":
            this._parseSuback();
            break;
          case "unsubscribe":
            this._parseUnsubscribe();
            break;
          case "unsuback":
            this._parseUnsuback();
            break;
          case "pingreq":
          case "pingresp":
            break;
          case "disconnect":
            this._parseDisconnect();
            break;
          case "auth":
            this._parseAuth();
            break;
          default:
            this._emitError(new Error("Not supported"));
        }
        i = !0;
      }
      return t("_parsePayload complete result: %s", i), i;
    }
    _parseConnect() {
      t("_parseConnect");
      let i, o, g, d, m = {}, c = this.packet, y = this._parseString();
      if (y === null) return this._emitError(new Error("Cannot parse protocolId"));
      if (y !== "MQTT" && y !== "MQIsdp") return this._emitError(new Error("Invalid protocolId"));
      if (c.protocolId = y, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (c.protocolVersion = this._list.readUInt8(this._pos), c.protocolVersion >= 128 && (c.bridgeMode = !0, c.protocolVersion = c.protocolVersion - 128), c.protocolVersion !== 3 && c.protocolVersion !== 4 && c.protocolVersion !== 5) return this._emitError(new Error("Invalid protocol version"));
      if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
      if (this._list.readUInt8(this._pos) & 1) return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
      m.username = this._list.readUInt8(this._pos) & r.USERNAME_MASK, m.password = this._list.readUInt8(this._pos) & r.PASSWORD_MASK, m.will = this._list.readUInt8(this._pos) & r.WILL_FLAG_MASK;
      let b = !!(this._list.readUInt8(this._pos) & r.WILL_RETAIN_MASK), S = (this._list.readUInt8(this._pos) & r.WILL_QOS_MASK) >> r.WILL_QOS_SHIFT;
      if (m.will) c.will = {}, c.will.retain = b, c.will.qos = S;
      else {
        if (b) return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
        if (S) return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"));
      }
      if (c.clean = (this._list.readUInt8(this._pos) & r.CLEAN_SESSION_MASK) !== 0, this._pos++, c.keepalive = this._parseNum(), c.keepalive === -1) return this._emitError(new Error("Packet too short"));
      if (c.protocolVersion === 5) {
        let _ = this._parseProperties();
        Object.getOwnPropertyNames(_).length && (c.properties = _);
      }
      let p = this._parseString();
      if (p === null) return this._emitError(new Error("Packet too short"));
      if (c.clientId = p, t("_parseConnect: packet.clientId: %s", c.clientId), m.will) {
        if (c.protocolVersion === 5) {
          let _ = this._parseProperties();
          Object.getOwnPropertyNames(_).length && (c.will.properties = _);
        }
        if (i = this._parseString(), i === null) return this._emitError(new Error("Cannot parse will topic"));
        if (c.will.topic = i, t("_parseConnect: packet.will.topic: %s", c.will.topic), o = this._parseBuffer(), o === null) return this._emitError(new Error("Cannot parse will payload"));
        c.will.payload = o, t("_parseConnect: packet.will.paylaod: %s", c.will.payload);
      }
      if (m.username) {
        if (d = this._parseString(), d === null) return this._emitError(new Error("Cannot parse username"));
        c.username = d, t("_parseConnect: packet.username: %s", c.username);
      }
      if (m.password) {
        if (g = this._parseBuffer(), g === null) return this._emitError(new Error("Cannot parse password"));
        c.password = g;
      }
      return this.settings = c, t("_parseConnect: complete"), c;
    }
    _parseConnack() {
      t("_parseConnack");
      let i = this.packet;
      if (this._list.length < 1) return null;
      let o = this._list.readUInt8(this._pos++);
      if (o > 1) return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
      if (i.sessionPresent = !!(o & r.SESSIONPRESENT_MASK), this.settings.protocolVersion === 5) this._list.length >= 2 ? i.reasonCode = this._list.readUInt8(this._pos++) : i.reasonCode = 0;
      else {
        if (this._list.length < 2) return null;
        i.returnCode = this._list.readUInt8(this._pos++);
      }
      if (i.returnCode === -1 || i.reasonCode === -1) return this._emitError(new Error("Cannot parse return code"));
      if (this.settings.protocolVersion === 5) {
        let g = this._parseProperties();
        Object.getOwnPropertyNames(g).length && (i.properties = g);
      }
      t("_parseConnack: complete");
    }
    _parsePublish() {
      t("_parsePublish");
      let i = this.packet;
      if (i.topic = this._parseString(), i.topic === null) return this._emitError(new Error("Cannot parse topic"));
      if (!(i.qos > 0 && !this._parseMessageId())) {
        if (this.settings.protocolVersion === 5) {
          let o = this._parseProperties();
          Object.getOwnPropertyNames(o).length && (i.properties = o);
        }
        i.payload = this._list.slice(this._pos, i.length), t("_parsePublish: payload from buffer list: %o", i.payload);
      }
    }
    _parseSubscribe() {
      t("_parseSubscribe");
      let i = this.packet, o, g, d, m, c, y, b;
      if (i.subscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let S = this._parseProperties();
          Object.getOwnPropertyNames(S).length && (i.properties = S);
        }
        if (i.length <= 0) return this._emitError(new Error("Malformed subscribe, no payload specified"));
        for (; this._pos < i.length; ) {
          if (o = this._parseString(), o === null) return this._emitError(new Error("Cannot parse topic"));
          if (this._pos >= i.length) return this._emitError(new Error("Malformed Subscribe Payload"));
          if (g = this._parseByte(), this.settings.protocolVersion === 5) {
            if (g & 192) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"));
          } else if (g & 252) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
          if (d = g & r.SUBSCRIBE_OPTIONS_QOS_MASK, d > 2) return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
          if (y = (g >> r.SUBSCRIBE_OPTIONS_NL_SHIFT & r.SUBSCRIBE_OPTIONS_NL_MASK) !== 0, c = (g >> r.SUBSCRIBE_OPTIONS_RAP_SHIFT & r.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0, m = g >> r.SUBSCRIBE_OPTIONS_RH_SHIFT & r.SUBSCRIBE_OPTIONS_RH_MASK, m > 2) return this._emitError(new Error("Invalid retain handling, must be <= 2"));
          b = { topic: o, qos: d }, this.settings.protocolVersion === 5 ? (b.nl = y, b.rap = c, b.rh = m) : this.settings.bridgeMode && (b.rh = 0, b.rap = !0, b.nl = !0), t("_parseSubscribe: push subscription `%s` to subscription", b), i.subscriptions.push(b);
        }
      }
    }
    _parseSuback() {
      t("_parseSuback");
      let i = this.packet;
      if (this.packet.granted = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let o = this._parseProperties();
          Object.getOwnPropertyNames(o).length && (i.properties = o);
        }
        if (i.length <= 0) return this._emitError(new Error("Malformed suback, no payload specified"));
        for (; this._pos < this.packet.length; ) {
          let o = this._list.readUInt8(this._pos++);
          if (this.settings.protocolVersion === 5) {
            if (!r.MQTT5_SUBACK_CODES[o]) return this._emitError(new Error("Invalid suback code"));
          } else if (o > 2 && o !== 128) return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
          this.packet.granted.push(o);
        }
      }
    }
    _parseUnsubscribe() {
      t("_parseUnsubscribe");
      let i = this.packet;
      if (i.unsubscriptions = [], !!this._parseMessageId()) {
        if (this.settings.protocolVersion === 5) {
          let o = this._parseProperties();
          Object.getOwnPropertyNames(o).length && (i.properties = o);
        }
        if (i.length <= 0) return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
        for (; this._pos < i.length; ) {
          let o = this._parseString();
          if (o === null) return this._emitError(new Error("Cannot parse topic"));
          t("_parseUnsubscribe: push topic `%s` to unsubscriptions", o), i.unsubscriptions.push(o);
        }
      }
    }
    _parseUnsuback() {
      t("_parseUnsuback");
      let i = this.packet;
      if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
      if ((this.settings.protocolVersion === 3 || this.settings.protocolVersion === 4) && i.length !== 2) return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
      if (i.length <= 0) return this._emitError(new Error("Malformed unsuback, no payload specified"));
      if (this.settings.protocolVersion === 5) {
        let o = this._parseProperties();
        for (Object.getOwnPropertyNames(o).length && (i.properties = o), i.granted = []; this._pos < this.packet.length; ) {
          let g = this._list.readUInt8(this._pos++);
          if (!r.MQTT5_UNSUBACK_CODES[g]) return this._emitError(new Error("Invalid unsuback code"));
          this.packet.granted.push(g);
        }
      }
    }
    _parseConfirmation() {
      t("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
      let i = this.packet;
      if (this._parseMessageId(), this.settings.protocolVersion === 5) {
        if (i.length > 2) {
          switch (i.reasonCode = this._parseByte(), this.packet.cmd) {
            case "puback":
            case "pubrec":
              if (!r.MQTT5_PUBACK_PUBREC_CODES[i.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
            case "pubrel":
            case "pubcomp":
              if (!r.MQTT5_PUBREL_PUBCOMP_CODES[i.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
              break;
          }
          t("_parseConfirmation: packet.reasonCode `%d`", i.reasonCode);
        } else i.reasonCode = 0;
        if (i.length > 3) {
          let o = this._parseProperties();
          Object.getOwnPropertyNames(o).length && (i.properties = o);
        }
      }
      return !0;
    }
    _parseDisconnect() {
      let i = this.packet;
      if (t("_parseDisconnect"), this.settings.protocolVersion === 5) {
        this._list.length > 0 ? (i.reasonCode = this._parseByte(), r.MQTT5_DISCONNECT_CODES[i.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : i.reasonCode = 0;
        let o = this._parseProperties();
        Object.getOwnPropertyNames(o).length && (i.properties = o);
      }
      return t("_parseDisconnect result: true"), !0;
    }
    _parseAuth() {
      t("_parseAuth");
      let i = this.packet;
      if (this.settings.protocolVersion !== 5) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
      if (i.reasonCode = this._parseByte(), !r.MQTT5_AUTH_CODES[i.reasonCode]) return this._emitError(new Error("Invalid auth reason code"));
      let o = this._parseProperties();
      return Object.getOwnPropertyNames(o).length && (i.properties = o), t("_parseAuth: result: true"), !0;
    }
    _parseMessageId() {
      let i = this.packet;
      return i.messageId = this._parseNum(), i.messageId === null ? (this._emitError(new Error("Cannot parse messageId")), !1) : (t("_parseMessageId: packet.messageId %d", i.messageId), !0);
    }
    _parseString(i) {
      let o = this._parseNum(), g = o + this._pos;
      if (o === -1 || g > this._list.length || g > this.packet.length) return null;
      let d = this._list.toString("utf8", this._pos, g);
      return this._pos += o, t("_parseString: result: %s", d), d;
    }
    _parseStringPair() {
      return t("_parseStringPair"), { name: this._parseString(), value: this._parseString() };
    }
    _parseBuffer() {
      let i = this._parseNum(), o = i + this._pos;
      if (i === -1 || o > this._list.length || o > this.packet.length) return null;
      let g = this._list.slice(this._pos, o);
      return this._pos += i, t("_parseBuffer: result: %o", g), g;
    }
    _parseNum() {
      if (this._list.length - this._pos < 2) return -1;
      let i = this._list.readUInt16BE(this._pos);
      return this._pos += 2, t("_parseNum: result: %s", i), i;
    }
    _parse4ByteNum() {
      if (this._list.length - this._pos < 4) return -1;
      let i = this._list.readUInt32BE(this._pos);
      return this._pos += 4, t("_parse4ByteNum: result: %s", i), i;
    }
    _parseVarByteNum(i) {
      t("_parseVarByteNum");
      let o = 4, g = 0, d = 1, m = 0, c = !1, y, b = this._pos ? this._pos : 0;
      for (; g < o && b + g < this._list.length; ) {
        if (y = this._list.readUInt8(b + g++), m += d * (y & r.VARBYTEINT_MASK), d *= 128, (y & r.VARBYTEINT_FIN_MASK) === 0) {
          c = !0;
          break;
        }
        if (this._list.length <= g) break;
      }
      return !c && g === o && this._list.length >= g && this._emitError(new Error("Invalid variable byte integer")), b && (this._pos += g), c ? i ? c = { bytes: g, value: m } : c = m : c = !1, t("_parseVarByteNum: result: %o", c), c;
    }
    _parseByte() {
      let i;
      return this._pos < this._list.length && (i = this._list.readUInt8(this._pos), this._pos++), t("_parseByte: result: %o", i), i;
    }
    _parseByType(i) {
      switch (t("_parseByType: type: %s", i), i) {
        case "byte":
          return this._parseByte() !== 0;
        case "int8":
          return this._parseByte();
        case "int16":
          return this._parseNum();
        case "int32":
          return this._parse4ByteNum();
        case "var":
          return this._parseVarByteNum();
        case "string":
          return this._parseString();
        case "pair":
          return this._parseStringPair();
        case "binary":
          return this._parseBuffer();
      }
    }
    _parseProperties() {
      t("_parseProperties");
      let i = this._parseVarByteNum(), o = this._pos + i, g = {};
      for (; this._pos < o; ) {
        let d = this._parseByte();
        if (!d) return this._emitError(new Error("Cannot parse property code type")), !1;
        let m = r.propertiesCodes[d];
        if (!m) return this._emitError(new Error("Unknown property")), !1;
        if (m === "userProperties") {
          g[m] || (g[m] = /* @__PURE__ */ Object.create(null));
          let c = this._parseByType(r.propertiesTypes[m]);
          if (g[m][c.name]) if (Array.isArray(g[m][c.name])) g[m][c.name].push(c.value);
          else {
            let y = g[m][c.name];
            g[m][c.name] = [y], g[m][c.name].push(c.value);
          }
          else g[m][c.name] = c.value;
          continue;
        }
        g[m] ? Array.isArray(g[m]) ? g[m].push(this._parseByType(r.propertiesTypes[m])) : (g[m] = [g[m]], g[m].push(this._parseByType(r.propertiesTypes[m]))) : g[m] = this._parseByType(r.propertiesTypes[m]);
      }
      return g;
    }
    _newPacket() {
      return t("_newPacket"), this.packet && (this._list.consume(this.packet.length), t("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), t("_newPacket: new packet"), this.packet = new u(), this._pos = 0, !0;
    }
    _emitError(i) {
      t("_emitError", i), this.error = i, this.emit("error", i);
    }
  };
  f.exports = n;
}), pl = de((h, f) => {
  le(), ce(), ue();
  var { Buffer: s } = (Be(), Pe(Ne)), a = 65536, u = {}, r = s.isBuffer(s.from([1, 2]).subarray(0, 1));
  function t(o) {
    let g = s.allocUnsafe(2);
    return g.writeUInt8(o >> 8, 0), g.writeUInt8(o & 255, 1), g;
  }
  function n() {
    for (let o = 0; o < a; o++) u[o] = t(o);
  }
  function e(o) {
    let g = 0, d = 0, m = s.allocUnsafe(4);
    do
      g = o % 128 | 0, o = o / 128 | 0, o > 0 && (g = g | 128), m.writeUInt8(g, d++);
    while (o > 0 && d < 4);
    return o > 0 && (d = 0), r ? m.subarray(0, d) : m.slice(0, d);
  }
  function i(o) {
    let g = s.allocUnsafe(4);
    return g.writeUInt32BE(o, 0), g;
  }
  f.exports = { cache: u, generateCache: n, generateNumber: t, genBufVariableByteInt: e, generate4ByteBuffer: i };
}), dl = de((h, f) => {
  le(), ce(), ue(), typeof Re > "u" || !Re.version || Re.version.indexOf("v0.") === 0 || Re.version.indexOf("v1.") === 0 && Re.version.indexOf("v1.8.") !== 0 ? f.exports = { nextTick: s } : f.exports = Re;
  function s(a, u, r, t) {
    if (typeof a != "function") throw new TypeError('"callback" argument must be a function');
    var n = arguments.length, e, i;
    switch (n) {
      case 0:
      case 1:
        return Re.nextTick(a);
      case 2:
        return Re.nextTick(function() {
          a.call(null, u);
        });
      case 3:
        return Re.nextTick(function() {
          a.call(null, u, r);
        });
      case 4:
        return Re.nextTick(function() {
          a.call(null, u, r, t);
        });
      default:
        for (e = new Array(n - 1), i = 0; i < e.length; ) e[i++] = arguments[i];
        return Re.nextTick(function() {
          a.apply(null, e);
        });
    }
  }
}), Ms = de((h, f) => {
  le(), ce(), ue();
  var s = Cs(), { Buffer: a } = (Be(), Pe(Ne)), u = a.allocUnsafe(0), r = a.from([0]), t = pl(), n = dl().nextTick, e = at()("mqtt-packet:writeToStream"), i = t.cache, o = t.generateNumber, g = t.generateCache, d = t.genBufVariableByteInt, m = t.generate4ByteBuffer, c = Q, y = !0;
  function b(H, N, ne) {
    switch (e("generate called"), N.cork && (N.cork(), n(S, N)), y && (y = !1, g()), e("generate: packet.cmd: %s", H.cmd), H.cmd) {
      case "connect":
        return p(H, N);
      case "connack":
        return _(H, N, ne);
      case "publish":
        return I(H, N, ne);
      case "puback":
      case "pubrec":
      case "pubrel":
      case "pubcomp":
        return v(H, N, ne);
      case "subscribe":
        return A(H, N, ne);
      case "suback":
        return E(H, N, ne);
      case "unsubscribe":
        return T(H, N, ne);
      case "unsuback":
        return C(H, N, ne);
      case "pingreq":
      case "pingresp":
        return P(H, N);
      case "disconnect":
        return L(H, N, ne);
      case "auth":
        return O(H, N, ne);
      default:
        return N.destroy(new Error("Unknown command")), !1;
    }
  }
  Object.defineProperty(b, "cacheNumbers", { get() {
    return c === Q;
  }, set(H) {
    H ? ((!i || Object.keys(i).length === 0) && (y = !0), c = Q) : (y = !1, c = K);
  } });
  function S(H) {
    H.uncork();
  }
  function p(H, N, ne) {
    let z = H || {}, G = z.protocolId || "MQTT", Y = z.protocolVersion || 4, ye = z.will, oe = z.clean, M = z.keepalive || 0, W = z.clientId || "", ee = z.username, he = z.password, pe = z.properties;
    oe === void 0 && (oe = !0);
    let me = 0;
    if (typeof G != "string" && !a.isBuffer(G)) return N.destroy(new Error("Invalid protocolId")), !1;
    if (me += G.length + 2, Y !== 3 && Y !== 4 && Y !== 5) return N.destroy(new Error("Invalid protocol version")), !1;
    if (me += 1, (typeof W == "string" || a.isBuffer(W)) && (W || Y >= 4) && (W || oe)) me += a.byteLength(W) + 2;
    else {
      if (Y < 4) return N.destroy(new Error("clientId must be supplied before 3.1.1")), !1;
      if (oe * 1 === 0) return N.destroy(new Error("clientId must be given if cleanSession set to 0")), !1;
    }
    if (typeof M != "number" || M < 0 || M > 65535 || M % 1 !== 0) return N.destroy(new Error("Invalid keepalive")), !1;
    me += 2, me += 1;
    let $, ge;
    if (Y === 5) {
      if ($ = Z(N, pe), !$) return !1;
      me += $.length;
    }
    if (ye) {
      if (typeof ye != "object") return N.destroy(new Error("Invalid will")), !1;
      if (!ye.topic || typeof ye.topic != "string") return N.destroy(new Error("Invalid will topic")), !1;
      if (me += a.byteLength(ye.topic) + 2, me += 2, ye.payload) if (ye.payload.length >= 0) typeof ye.payload == "string" ? me += a.byteLength(ye.payload) : me += ye.payload.length;
      else return N.destroy(new Error("Invalid will payload")), !1;
      if (ge = {}, Y === 5) {
        if (ge = Z(N, ye.properties), !ge) return !1;
        me += ge.length;
      }
    }
    let ve = !1;
    if (ee != null) if (we(ee)) ve = !0, me += a.byteLength(ee) + 2;
    else return N.destroy(new Error("Invalid username")), !1;
    if (he != null) {
      if (!ve) return N.destroy(new Error("Username is required to use password")), !1;
      if (we(he)) me += te(he) + 2;
      else return N.destroy(new Error("Invalid password")), !1;
    }
    N.write(s.CONNECT_HEADER), D(N, me), F(N, G), z.bridgeMode && (Y += 128), N.write(Y === 131 ? s.VERSION131 : Y === 132 ? s.VERSION132 : Y === 4 ? s.VERSION4 : Y === 5 ? s.VERSION5 : s.VERSION3);
    let se = 0;
    return se |= ee != null ? s.USERNAME_MASK : 0, se |= he != null ? s.PASSWORD_MASK : 0, se |= ye && ye.retain ? s.WILL_RETAIN_MASK : 0, se |= ye && ye.qos ? ye.qos << s.WILL_QOS_SHIFT : 0, se |= ye ? s.WILL_FLAG_MASK : 0, se |= oe ? s.CLEAN_SESSION_MASK : 0, N.write(a.from([se])), c(N, M), Y === 5 && $.write(), F(N, W), ye && (Y === 5 && ge.write(), B(N, ye.topic), F(N, ye.payload)), ee != null && F(N, ee), he != null && F(N, he), !0;
  }
  function _(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = z === 5 ? G.reasonCode : G.returnCode, ye = G.properties, oe = 2;
    if (typeof Y != "number") return N.destroy(new Error("Invalid return code")), !1;
    let M = null;
    if (z === 5) {
      if (M = Z(N, ye), !M) return !1;
      oe += M.length;
    }
    return N.write(s.CONNACK_HEADER), D(N, oe), N.write(G.sessionPresent ? s.SESSIONPRESENT_HEADER : r), N.write(a.from([Y])), M?.write(), !0;
  }
  function I(H, N, ne) {
    e("publish: packet: %o", H);
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.qos || 0, ye = G.retain ? s.RETAIN_MASK : 0, oe = G.topic, M = G.payload || u, W = G.messageId, ee = G.properties, he = 0;
    if (typeof oe == "string") he += a.byteLength(oe) + 2;
    else if (a.isBuffer(oe)) he += oe.length + 2;
    else return N.destroy(new Error("Invalid topic")), !1;
    if (a.isBuffer(M) ? he += M.length : he += a.byteLength(M), Y && typeof W != "number") return N.destroy(new Error("Invalid messageId")), !1;
    Y && (he += 2);
    let pe = null;
    if (z === 5) {
      if (pe = Z(N, ee), !pe) return !1;
      he += pe.length;
    }
    return N.write(s.PUBLISH_HEADER[Y][G.dup ? 1 : 0][ye ? 1 : 0]), D(N, he), c(N, te(oe)), N.write(oe), Y > 0 && c(N, W), pe?.write(), e("publish: payload: %o", M), N.write(M);
  }
  function v(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.cmd || "puback", ye = G.messageId, oe = G.dup && Y === "pubrel" ? s.DUP_MASK : 0, M = 0, W = G.reasonCode, ee = G.properties, he = z === 5 ? 3 : 2;
    if (Y === "pubrel" && (M = 1), typeof ye != "number") return N.destroy(new Error("Invalid messageId")), !1;
    let pe = null;
    if (z === 5 && typeof ee == "object") {
      if (pe = R(N, ee, ne, he), !pe) return !1;
      he += pe.length;
    }
    return N.write(s.ACKS[Y][M][oe][0]), he === 3 && (he += W !== 0 ? 1 : -1), D(N, he), c(N, ye), z === 5 && he !== 2 && N.write(a.from([W])), pe !== null ? pe.write() : he === 4 && N.write(a.from([0])), !0;
  }
  function A(H, N, ne) {
    e("subscribe: packet: ");
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.dup ? s.DUP_MASK : 0, ye = G.messageId, oe = G.subscriptions, M = G.properties, W = 0;
    if (typeof ye != "number") return N.destroy(new Error("Invalid messageId")), !1;
    W += 2;
    let ee = null;
    if (z === 5) {
      if (ee = Z(N, M), !ee) return !1;
      W += ee.length;
    }
    if (typeof oe == "object" && oe.length) for (let pe = 0; pe < oe.length; pe += 1) {
      let me = oe[pe].topic, $ = oe[pe].qos;
      if (typeof me != "string") return N.destroy(new Error("Invalid subscriptions - invalid topic")), !1;
      if (typeof $ != "number") return N.destroy(new Error("Invalid subscriptions - invalid qos")), !1;
      if (z === 5) {
        if (typeof (oe[pe].nl || !1) != "boolean") return N.destroy(new Error("Invalid subscriptions - invalid No Local")), !1;
        if (typeof (oe[pe].rap || !1) != "boolean") return N.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), !1;
        let ge = oe[pe].rh || 0;
        if (typeof ge != "number" || ge > 2) return N.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), !1;
      }
      W += a.byteLength(me) + 2 + 1;
    }
    else return N.destroy(new Error("Invalid subscriptions")), !1;
    e("subscribe: writing to stream: %o", s.SUBSCRIBE_HEADER), N.write(s.SUBSCRIBE_HEADER[1][Y ? 1 : 0][0]), D(N, W), c(N, ye), ee !== null && ee.write();
    let he = !0;
    for (let pe of oe) {
      let me = pe.topic, $ = pe.qos, ge = +pe.nl, ve = +pe.rap, se = pe.rh, Oe;
      B(N, me), Oe = s.SUBSCRIBE_OPTIONS_QOS[$], z === 5 && (Oe |= ge ? s.SUBSCRIBE_OPTIONS_NL : 0, Oe |= ve ? s.SUBSCRIBE_OPTIONS_RAP : 0, Oe |= se ? s.SUBSCRIBE_OPTIONS_RH[se] : 0), he = N.write(a.from([Oe]));
    }
    return he;
  }
  function E(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.messageId, ye = G.granted, oe = G.properties, M = 0;
    if (typeof Y != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if (M += 2, typeof ye == "object" && ye.length) for (let ee = 0; ee < ye.length; ee += 1) {
      if (typeof ye[ee] != "number") return N.destroy(new Error("Invalid qos vector")), !1;
      M += 1;
    }
    else return N.destroy(new Error("Invalid qos vector")), !1;
    let W = null;
    if (z === 5) {
      if (W = R(N, oe, ne, M), !W) return !1;
      M += W.length;
    }
    return N.write(s.SUBACK_HEADER), D(N, M), c(N, Y), W !== null && W.write(), N.write(a.from(ye));
  }
  function T(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.messageId, ye = G.dup ? s.DUP_MASK : 0, oe = G.unsubscriptions, M = G.properties, W = 0;
    if (typeof Y != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if (W += 2, typeof oe == "object" && oe.length) for (let pe = 0; pe < oe.length; pe += 1) {
      if (typeof oe[pe] != "string") return N.destroy(new Error("Invalid unsubscriptions")), !1;
      W += a.byteLength(oe[pe]) + 2;
    }
    else return N.destroy(new Error("Invalid unsubscriptions")), !1;
    let ee = null;
    if (z === 5) {
      if (ee = Z(N, M), !ee) return !1;
      W += ee.length;
    }
    N.write(s.UNSUBSCRIBE_HEADER[1][ye ? 1 : 0][0]), D(N, W), c(N, Y), ee !== null && ee.write();
    let he = !0;
    for (let pe = 0; pe < oe.length; pe++) he = B(N, oe[pe]);
    return he;
  }
  function C(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.messageId, ye = G.dup ? s.DUP_MASK : 0, oe = G.granted, M = G.properties, W = G.cmd, ee = 0, he = 2;
    if (typeof Y != "number") return N.destroy(new Error("Invalid messageId")), !1;
    if (z === 5) if (typeof oe == "object" && oe.length) for (let me = 0; me < oe.length; me += 1) {
      if (typeof oe[me] != "number") return N.destroy(new Error("Invalid qos vector")), !1;
      he += 1;
    }
    else return N.destroy(new Error("Invalid qos vector")), !1;
    let pe = null;
    if (z === 5) {
      if (pe = R(N, M, ne, he), !pe) return !1;
      he += pe.length;
    }
    return N.write(s.ACKS[W][ee][ye][0]), D(N, he), c(N, Y), pe !== null && pe.write(), z === 5 && N.write(a.from(oe)), !0;
  }
  function P(H, N, ne) {
    return N.write(s.EMPTY[H.cmd]);
  }
  function L(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.reasonCode, ye = G.properties, oe = z === 5 ? 1 : 0, M = null;
    if (z === 5) {
      if (M = R(N, ye, ne, oe), !M) return !1;
      oe += M.length;
    }
    return N.write(a.from([s.codes.disconnect << 4])), D(N, oe), z === 5 && N.write(a.from([Y])), M !== null && M.write(), !0;
  }
  function O(H, N, ne) {
    let z = ne ? ne.protocolVersion : 4, G = H || {}, Y = G.reasonCode, ye = G.properties, oe = z === 5 ? 1 : 0;
    z !== 5 && N.destroy(new Error("Invalid mqtt version for auth packet"));
    let M = R(N, ye, ne, oe);
    return M ? (oe += M.length, N.write(a.from([s.codes.auth << 4])), D(N, oe), N.write(a.from([Y])), M !== null && M.write(), !0) : !1;
  }
  var q = {};
  function D(H, N) {
    if (N > s.VARBYTEINT_MAX) return H.destroy(new Error(`Invalid variable byte integer: ${N}`)), !1;
    let ne = q[N];
    return ne || (ne = d(N), N < 16384 && (q[N] = ne)), e("writeVarByteInt: writing to stream: %o", ne), H.write(ne);
  }
  function B(H, N) {
    let ne = a.byteLength(N);
    return c(H, ne), e("writeString: %s", N), H.write(N, "utf8");
  }
  function ae(H, N, ne) {
    B(H, N), B(H, ne);
  }
  function Q(H, N) {
    return e("writeNumberCached: number: %d", N), e("writeNumberCached: %o", i[N]), H.write(i[N]);
  }
  function K(H, N) {
    let ne = o(N);
    return e("writeNumberGenerated: %o", ne), H.write(ne);
  }
  function re(H, N) {
    let ne = m(N);
    return e("write4ByteNumber: %o", ne), H.write(ne);
  }
  function F(H, N) {
    typeof N == "string" ? B(H, N) : N ? (c(H, N.length), H.write(N)) : c(H, 0);
  }
  function Z(H, N) {
    if (typeof N != "object" || N.length != null) return { length: 1, write() {
      be(H, {}, 0);
    } };
    let ne = 0;
    function z(G, Y) {
      let ye = s.propertiesTypes[G], oe = 0;
      switch (ye) {
        case "byte": {
          if (typeof Y != "boolean") return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 2;
          break;
        }
        case "int8": {
          if (typeof Y != "number" || Y < 0 || Y > 255) return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 2;
          break;
        }
        case "binary": {
          if (Y && Y === null) return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 1 + a.byteLength(Y) + 2;
          break;
        }
        case "int16": {
          if (typeof Y != "number" || Y < 0 || Y > 65535) return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 3;
          break;
        }
        case "int32": {
          if (typeof Y != "number" || Y < 0 || Y > 4294967295) return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 5;
          break;
        }
        case "var": {
          if (typeof Y != "number" || Y < 0 || Y > 268435455) return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 1 + a.byteLength(d(Y));
          break;
        }
        case "string": {
          if (typeof Y != "string") return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += 3 + a.byteLength(Y.toString());
          break;
        }
        case "pair": {
          if (typeof Y != "object") return H.destroy(new Error(`Invalid ${G}: ${Y}`)), !1;
          oe += Object.getOwnPropertyNames(Y).reduce((M, W) => {
            let ee = Y[W];
            return Array.isArray(ee) ? M += ee.reduce((he, pe) => (he += 3 + a.byteLength(W.toString()) + 2 + a.byteLength(pe.toString()), he), 0) : M += 3 + a.byteLength(W.toString()) + 2 + a.byteLength(Y[W].toString()), M;
          }, 0);
          break;
        }
        default:
          return H.destroy(new Error(`Invalid property ${G}: ${Y}`)), !1;
      }
      return oe;
    }
    if (N) for (let G in N) {
      let Y = 0, ye = 0, oe = N[G];
      if (oe !== void 0) {
        if (Array.isArray(oe)) for (let M = 0; M < oe.length; M++) {
          if (ye = z(G, oe[M]), !ye) return !1;
          Y += ye;
        }
        else {
          if (ye = z(G, oe), !ye) return !1;
          Y = ye;
        }
        if (!Y) return !1;
        ne += Y;
      }
    }
    return { length: a.byteLength(d(ne)) + ne, write() {
      be(H, N, ne);
    } };
  }
  function R(H, N, ne, z) {
    let G = ["reasonString", "userProperties"], Y = ne && ne.properties && ne.properties.maximumPacketSize ? ne.properties.maximumPacketSize : 0, ye = Z(H, N);
    if (Y) for (; z + ye.length > Y; ) {
      let oe = G.shift();
      if (oe && N[oe]) delete N[oe], ye = Z(H, N);
      else return !1;
    }
    return ye;
  }
  function J(H, N, ne) {
    switch (s.propertiesTypes[N]) {
      case "byte": {
        H.write(a.from([s.properties[N]])), H.write(a.from([+ne]));
        break;
      }
      case "int8": {
        H.write(a.from([s.properties[N]])), H.write(a.from([ne]));
        break;
      }
      case "binary": {
        H.write(a.from([s.properties[N]])), F(H, ne);
        break;
      }
      case "int16": {
        H.write(a.from([s.properties[N]])), c(H, ne);
        break;
      }
      case "int32": {
        H.write(a.from([s.properties[N]])), re(H, ne);
        break;
      }
      case "var": {
        H.write(a.from([s.properties[N]])), D(H, ne);
        break;
      }
      case "string": {
        H.write(a.from([s.properties[N]])), B(H, ne);
        break;
      }
      case "pair": {
        Object.getOwnPropertyNames(ne).forEach((z) => {
          let G = ne[z];
          Array.isArray(G) ? G.forEach((Y) => {
            H.write(a.from([s.properties[N]])), ae(H, z.toString(), Y.toString());
          }) : (H.write(a.from([s.properties[N]])), ae(H, z.toString(), G.toString()));
        });
        break;
      }
      default:
        return H.destroy(new Error(`Invalid property ${N} value: ${ne}`)), !1;
    }
  }
  function be(H, N, ne) {
    D(H, ne);
    for (let z in N) if (Object.prototype.hasOwnProperty.call(N, z) && N[z] != null) {
      let G = N[z];
      if (Array.isArray(G)) for (let Y = 0; Y < G.length; Y++) J(H, z, G[Y]);
      else J(H, z, G);
    }
  }
  function te(H) {
    return H ? H instanceof a ? H.length : a.byteLength(H) : 0;
  }
  function we(H) {
    return typeof H == "string" || H instanceof a;
  }
  f.exports = b;
}), gl = de((h, f) => {
  le(), ce(), ue();
  var s = Ms(), { EventEmitter: a } = (At(), Pe(yt)), { Buffer: u } = (Be(), Pe(Ne));
  function r(n, e) {
    let i = new t();
    return s(n, i, e), i.concat();
  }
  var t = class extends a {
    constructor() {
      super(), this._array = new Array(20), this._i = 0;
    }
    write(n) {
      return this._array[this._i++] = n, !0;
    }
    concat() {
      let n = 0, e = new Array(this._array.length), i = this._array, o = 0, g;
      for (g = 0; g < i.length && i[g] !== void 0; g++) typeof i[g] != "string" ? e[g] = i[g].length : e[g] = u.byteLength(i[g]), n += e[g];
      let d = u.allocUnsafe(n);
      for (g = 0; g < i.length && i[g] !== void 0; g++) typeof i[g] != "string" ? (i[g].copy(d, o), o += e[g]) : (d.write(i[g], o), o += e[g]);
      return d;
    }
    destroy(n) {
      n && this.emit("error", n);
    }
  };
  f.exports = r;
}), yl = de((h) => {
  le(), ce(), ue(), h.parser = hl().parser, h.generate = gl(), h.writeToStream = Ms();
}), bl = de((h, f) => {
  le(), ce(), ue(), f.exports = a;
  function s(r) {
    return r instanceof Ir ? Ir.from(r) : new r.constructor(r.buffer.slice(), r.byteOffset, r.length);
  }
  function a(r) {
    if (r = r || {}, r.circles) return u(r);
    let t = /* @__PURE__ */ new Map();
    if (t.set(Date, (g) => new Date(g)), t.set(Map, (g, d) => new Map(e(Array.from(g), d))), t.set(Set, (g, d) => new Set(e(Array.from(g), d))), r.constructorHandlers) for (let g of r.constructorHandlers) t.set(g[0], g[1]);
    let n = null;
    return r.proto ? o : i;
    function e(g, d) {
      let m = Object.keys(g), c = new Array(m.length);
      for (let y = 0; y < m.length; y++) {
        let b = m[y], S = g[b];
        typeof S != "object" || S === null ? c[b] = S : S.constructor !== Object && (n = t.get(S.constructor)) ? c[b] = n(S, d) : ArrayBuffer.isView(S) ? c[b] = s(S) : c[b] = d(S);
      }
      return c;
    }
    function i(g) {
      if (typeof g != "object" || g === null) return g;
      if (Array.isArray(g)) return e(g, i);
      if (g.constructor !== Object && (n = t.get(g.constructor))) return n(g, i);
      let d = {};
      for (let m in g) {
        if (Object.hasOwnProperty.call(g, m) === !1) continue;
        let c = g[m];
        typeof c != "object" || c === null ? d[m] = c : c.constructor !== Object && (n = t.get(c.constructor)) ? d[m] = n(c, i) : ArrayBuffer.isView(c) ? d[m] = s(c) : d[m] = i(c);
      }
      return d;
    }
    function o(g) {
      if (typeof g != "object" || g === null) return g;
      if (Array.isArray(g)) return e(g, o);
      if (g.constructor !== Object && (n = t.get(g.constructor))) return n(g, o);
      let d = {};
      for (let m in g) {
        let c = g[m];
        typeof c != "object" || c === null ? d[m] = c : c.constructor !== Object && (n = t.get(c.constructor)) ? d[m] = n(c, o) : ArrayBuffer.isView(c) ? d[m] = s(c) : d[m] = o(c);
      }
      return d;
    }
  }
  function u(r) {
    let t = [], n = [], e = /* @__PURE__ */ new Map();
    if (e.set(Date, (m) => new Date(m)), e.set(Map, (m, c) => new Map(o(Array.from(m), c))), e.set(Set, (m, c) => new Set(o(Array.from(m), c))), r.constructorHandlers) for (let m of r.constructorHandlers) e.set(m[0], m[1]);
    let i = null;
    return r.proto ? d : g;
    function o(m, c) {
      let y = Object.keys(m), b = new Array(y.length);
      for (let S = 0; S < y.length; S++) {
        let p = y[S], _ = m[p];
        if (typeof _ != "object" || _ === null) b[p] = _;
        else if (_.constructor !== Object && (i = e.get(_.constructor))) b[p] = i(_, c);
        else if (ArrayBuffer.isView(_)) b[p] = s(_);
        else {
          let I = t.indexOf(_);
          I !== -1 ? b[p] = n[I] : b[p] = c(_);
        }
      }
      return b;
    }
    function g(m) {
      if (typeof m != "object" || m === null) return m;
      if (Array.isArray(m)) return o(m, g);
      if (m.constructor !== Object && (i = e.get(m.constructor))) return i(m, g);
      let c = {};
      t.push(m), n.push(c);
      for (let y in m) {
        if (Object.hasOwnProperty.call(m, y) === !1) continue;
        let b = m[y];
        if (typeof b != "object" || b === null) c[y] = b;
        else if (b.constructor !== Object && (i = e.get(b.constructor))) c[y] = i(b, g);
        else if (ArrayBuffer.isView(b)) c[y] = s(b);
        else {
          let S = t.indexOf(b);
          S !== -1 ? c[y] = n[S] : c[y] = g(b);
        }
      }
      return t.pop(), n.pop(), c;
    }
    function d(m) {
      if (typeof m != "object" || m === null) return m;
      if (Array.isArray(m)) return o(m, d);
      if (m.constructor !== Object && (i = e.get(m.constructor))) return i(m, d);
      let c = {};
      t.push(m), n.push(c);
      for (let y in m) {
        let b = m[y];
        if (typeof b != "object" || b === null) c[y] = b;
        else if (b.constructor !== Object && (i = e.get(b.constructor))) c[y] = i(b, d);
        else if (ArrayBuffer.isView(b)) c[y] = s(b);
        else {
          let S = t.indexOf(b);
          S !== -1 ? c[y] = n[S] : c[y] = d(b);
        }
      }
      return t.pop(), n.pop(), c;
    }
  }
}), ml = de((h, f) => {
  le(), ce(), ue(), f.exports = bl()();
}), vl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.validateTopic = f, h.validateTopics = s;
  function f(a) {
    let u = a.split("/");
    for (let r = 0; r < u.length; r++) if (u[r] !== "+") {
      if (u[r] === "#") return r === u.length - 1;
      if (u[r].indexOf("+") !== -1 || u[r].indexOf("#") !== -1) return !1;
    }
    return !0;
  }
  function s(a) {
    if (a.length === 0) return "empty_topic_list";
    for (let u = 0; u < a.length; u++) if (!f(a[u])) return a[u];
    return null;
  }
}), js = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = xt(), s = { objectMode: !0 }, a = { clean: !0 }, u = class {
    options;
    _inflights;
    constructor(r) {
      this.options = r || {}, this.options = { ...a, ...r }, this._inflights = /* @__PURE__ */ new Map();
    }
    put(r, t) {
      return this._inflights.set(r.messageId, r), t && t(), this;
    }
    createStream() {
      let r = new f.Readable(s), t = [], n = !1, e = 0;
      return this._inflights.forEach((i, o) => {
        t.push(i);
      }), r._read = () => {
        !n && e < t.length ? r.push(t[e++]) : r.push(null);
      }, r.destroy = (i) => {
        if (!n) return n = !0, setTimeout(() => {
          r.emit("close");
        }, 0), r;
      }, r;
    }
    del(r, t) {
      let n = this._inflights.get(r.messageId);
      return n ? (this._inflights.delete(r.messageId), t(null, n)) : t && t(new Error("missing packet")), this;
    }
    get(r, t) {
      let n = this._inflights.get(r.messageId);
      return n ? t(null, n) : t && t(new Error("missing packet")), this;
    }
    close(r) {
      this.options.clean && (this._inflights = null), r && r();
    }
  };
  h.default = u;
}), wl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = [0, 16, 128, 131, 135, 144, 145, 151, 153], s = (a, u, r) => {
    a.log("handlePublish: packet %o", u), r = typeof r < "u" ? r : a.noop;
    let t = u.topic.toString(), n = u.payload, { qos: e } = u, { messageId: i } = u, { options: o } = a;
    if (a.options.protocolVersion === 5) {
      let g;
      if (u.properties && (g = u.properties.topicAlias), typeof g < "u") if (t.length === 0) if (g > 0 && g <= 65535) {
        let d = a.topicAliasRecv.getTopicByAlias(g);
        if (d) t = d, a.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", t, g);
        else {
          a.log("handlePublish :: unregistered topic alias. alias: %d", g), a.emit("error", new Error("Received unregistered Topic Alias"));
          return;
        }
      } else {
        a.log("handlePublish :: topic alias out of range. alias: %d", g), a.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
      else if (a.topicAliasRecv.put(t, g)) a.log("handlePublish :: registered topic: %s - alias: %d", t, g);
      else {
        a.log("handlePublish :: topic alias out of range. alias: %d", g), a.emit("error", new Error("Received Topic Alias is out of range"));
        return;
      }
    }
    switch (a.log("handlePublish: qos %d", e), e) {
      case 2: {
        o.customHandleAcks(t, n, u, (g, d) => {
          if (typeof g == "number" && (d = g, g = null), g) return a.emit("error", g);
          if (f.indexOf(d) === -1) return a.emit("error", new Error("Wrong reason code for pubrec"));
          d ? a._sendPacket({ cmd: "pubrec", messageId: i, reasonCode: d }, r) : a.incomingStore.put(u, () => {
            a._sendPacket({ cmd: "pubrec", messageId: i }, r);
          });
        });
        break;
      }
      case 1: {
        o.customHandleAcks(t, n, u, (g, d) => {
          if (typeof g == "number" && (d = g, g = null), g) return a.emit("error", g);
          if (f.indexOf(d) === -1) return a.emit("error", new Error("Wrong reason code for puback"));
          d || a.emit("message", t, n, u), a.handleMessage(u, (m) => {
            if (m) return r && r(m);
            a._sendPacket({ cmd: "puback", messageId: i, reasonCode: d }, r);
          });
        });
        break;
      }
      case 0:
        a.emit("message", t, n, u), a.handleMessage(u, r);
        break;
      default:
        a.log("handlePublish: unknown QoS. Doing nothing.");
        break;
    }
  };
  h.default = s;
}), _l = de((h, f) => {
  f.exports = { version: "5.14.1" };
}), Nt = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.MQTTJS_VERSION = h.nextTick = h.ErrorWithSubackPacket = h.ErrorWithReasonCode = void 0, h.applyMixin = a;
  var f = class Ns extends Error {
    code;
    constructor(r, t) {
      super(r), this.code = t, Object.setPrototypeOf(this, Ns.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode";
    }
  };
  h.ErrorWithReasonCode = f;
  var s = class Bs extends Error {
    packet;
    constructor(r, t) {
      super(r), this.packet = t, Object.setPrototypeOf(this, Bs.prototype), Object.getPrototypeOf(this).name = "ErrorWithSubackPacket";
    }
  };
  h.ErrorWithSubackPacket = s;
  function a(u, r, t = !1) {
    let n = [r];
    for (; ; ) {
      let e = n[0], i = Object.getPrototypeOf(e);
      if (i?.prototype) n.unshift(i);
      else break;
    }
    for (let e of n) for (let i of Object.getOwnPropertyNames(e.prototype)) (t || i !== "constructor") && Object.defineProperty(u.prototype, i, Object.getOwnPropertyDescriptor(e.prototype, i) ?? /* @__PURE__ */ Object.create(null));
  }
  h.nextTick = typeof Re?.nextTick == "function" ? Re.nextTick : (u) => {
    setTimeout(u, 0);
  }, h.MQTTJS_VERSION = _l().version;
}), Pr = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.ReasonCodes = void 0;
  var f = Nt();
  h.ReasonCodes = { 0: "", 1: "Unacceptable protocol version", 2: "Identifier rejected", 3: "Server unavailable", 4: "Bad username or password", 5: "Not authorized", 16: "No matching subscribers", 17: "No subscription existed", 128: "Unspecified error", 129: "Malformed Packet", 130: "Protocol Error", 131: "Implementation specific error", 132: "Unsupported Protocol Version", 133: "Client Identifier not valid", 134: "Bad User Name or Password", 135: "Not authorized", 136: "Server unavailable", 137: "Server busy", 138: "Banned", 139: "Server shutting down", 140: "Bad authentication method", 141: "Keep Alive timeout", 142: "Session taken over", 143: "Topic Filter invalid", 144: "Topic Name invalid", 145: "Packet identifier in use", 146: "Packet Identifier not found", 147: "Receive Maximum exceeded", 148: "Topic Alias invalid", 149: "Packet too large", 150: "Message rate too high", 151: "Quota exceeded", 152: "Administrative action", 153: "Payload format invalid", 154: "Retain not supported", 155: "QoS not supported", 156: "Use another server", 157: "Server moved", 158: "Shared Subscriptions not supported", 159: "Connection rate exceeded", 160: "Maximum connect time", 161: "Subscription Identifiers not supported", 162: "Wildcard Subscriptions not supported" };
  var s = (a, u) => {
    let { messageId: r } = u, t = u.cmd, n = null, e = a.outgoing[r] ? a.outgoing[r].cb : null, i = null;
    if (!e) {
      a.log("_handleAck :: Server sent an ack in error. Ignoring.");
      return;
    }
    switch (a.log("_handleAck :: packet type", t), t) {
      case "pubcomp":
      case "puback": {
        let o = u.reasonCode;
        o && o > 0 && o !== 16 ? (i = new f.ErrorWithReasonCode(`Publish error: ${h.ReasonCodes[o]}`, o), a._removeOutgoingAndStoreMessage(r, () => {
          e(i, u);
        })) : a._removeOutgoingAndStoreMessage(r, e);
        break;
      }
      case "pubrec": {
        n = { cmd: "pubrel", qos: 2, messageId: r };
        let o = u.reasonCode;
        o && o > 0 && o !== 16 ? (i = new f.ErrorWithReasonCode(`Publish error: ${h.ReasonCodes[o]}`, o), a._removeOutgoingAndStoreMessage(r, () => {
          e(i, u);
        })) : a._sendPacket(n);
        break;
      }
      case "suback": {
        delete a.outgoing[r], a.messageIdProvider.deallocate(r);
        let o = u.granted;
        for (let g = 0; g < o.length; g++) {
          let d = o[g];
          if ((d & 128) !== 0) {
            i = new Error(`Subscribe error: ${h.ReasonCodes[d]}`), i.code = d;
            let m = a.messageIdToTopic[r];
            m && m.forEach((c) => {
              delete a._resubscribeTopics[c];
            });
          }
        }
        delete a.messageIdToTopic[r], a._invokeStoreProcessingQueue(), e(i, u);
        break;
      }
      case "unsuback": {
        delete a.outgoing[r], a.messageIdProvider.deallocate(r), a._invokeStoreProcessingQueue(), e(null, u);
        break;
      }
      default:
        a.emit("error", new Error("unrecognized packet type"));
    }
    a.disconnecting && Object.keys(a.outgoing).length === 0 && a.emit("outgoingEmpty");
  };
  h.default = s;
}), Sl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = Nt(), s = Pr(), a = (u, r) => {
    let { options: t } = u, n = t.protocolVersion, e = n === 5 ? r.reasonCode : r.returnCode;
    if (n !== 5) {
      let i = new f.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${n}`, e);
      u.emit("error", i);
      return;
    }
    u.handleAuth(r, (i, o) => {
      if (i) {
        u.emit("error", i);
        return;
      }
      if (e === 24) u.reconnecting = !1, u._sendPacket(o);
      else {
        let g = new f.ErrorWithReasonCode(`Connection refused: ${s.ReasonCodes[e]}`, e);
        u.emit("error", g);
      }
    });
  };
  h.default = a;
}), El = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.LRUCache = void 0;
  var f = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date, s = /* @__PURE__ */ new Set(), a = typeof Re == "object" && Re ? Re : {}, u = (m, c, y, b) => {
    typeof a.emitWarning == "function" ? a.emitWarning(m, c, y, b) : console.error(`[${y}] ${c}: ${m}`);
  }, r = globalThis.AbortController, t = globalThis.AbortSignal;
  if (typeof r > "u") {
    t = class {
      onabort;
      _onabort = [];
      reason;
      aborted = !1;
      addEventListener(y, b) {
        this._onabort.push(b);
      }
    }, r = class {
      constructor() {
        c();
      }
      signal = new t();
      abort(y) {
        if (!this.signal.aborted) {
          this.signal.reason = y, this.signal.aborted = !0;
          for (let b of this.signal._onabort) b(y);
          this.signal.onabort?.(y);
        }
      }
    };
    let m = a.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1", c = () => {
      m && (m = !1, u("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", c));
    };
  }
  var n = (m) => !s.has(m), e = (m) => m && m === Math.floor(m) && m > 0 && isFinite(m), i = (m) => e(m) ? m <= Math.pow(2, 8) ? Uint8Array : m <= Math.pow(2, 16) ? Uint16Array : m <= Math.pow(2, 32) ? Uint32Array : m <= Number.MAX_SAFE_INTEGER ? o : null : null, o = class extends Array {
    constructor(m) {
      super(m), this.fill(0);
    }
  }, g = class zt {
    heap;
    length;
    static #l = !1;
    static create(c) {
      let y = i(c);
      if (!y) return [];
      zt.#l = !0;
      let b = new zt(c, y);
      return zt.#l = !1, b;
    }
    constructor(c, y) {
      if (!zt.#l) throw new TypeError("instantiate Stack using Stack.create(n)");
      this.heap = new y(c), this.length = 0;
    }
    push(c) {
      this.heap[this.length++] = c;
    }
    pop() {
      return this.heap[--this.length];
    }
  }, d = class Us {
    #l;
    #f;
    #g;
    #y;
    #P;
    #R;
    ttl;
    ttlResolution;
    ttlAutopurge;
    updateAgeOnGet;
    updateAgeOnHas;
    allowStale;
    noDisposeOnSet;
    noUpdateTTL;
    maxEntrySize;
    sizeCalculation;
    noDeleteOnFetchRejection;
    noDeleteOnStaleGet;
    allowStaleOnFetchAbort;
    allowStaleOnFetchRejection;
    ignoreFetchAbort;
    #i;
    #b;
    #n;
    #r;
    #e;
    #u;
    #h;
    #a;
    #o;
    #m;
    #s;
    #v;
    #w;
    #p;
    #_;
    #x;
    #c;
    static unsafeExposeInternals(c) {
      return { starts: c.#w, ttls: c.#p, sizes: c.#v, keyMap: c.#n, keyList: c.#r, valList: c.#e, next: c.#u, prev: c.#h, get head() {
        return c.#a;
      }, get tail() {
        return c.#o;
      }, free: c.#m, isBackgroundFetch: (y) => c.#t(y), backgroundFetch: (y, b, S, p) => c.#j(y, b, S, p), moveToTail: (y) => c.#k(y), indexes: (y) => c.#S(y), rindexes: (y) => c.#E(y), isStale: (y) => c.#d(y) };
    }
    get max() {
      return this.#l;
    }
    get maxSize() {
      return this.#f;
    }
    get calculatedSize() {
      return this.#b;
    }
    get size() {
      return this.#i;
    }
    get fetchMethod() {
      return this.#P;
    }
    get memoMethod() {
      return this.#R;
    }
    get dispose() {
      return this.#g;
    }
    get disposeAfter() {
      return this.#y;
    }
    constructor(c) {
      let { max: y = 0, ttl: b, ttlResolution: S = 1, ttlAutopurge: p, updateAgeOnGet: _, updateAgeOnHas: I, allowStale: v, dispose: A, disposeAfter: E, noDisposeOnSet: T, noUpdateTTL: C, maxSize: P = 0, maxEntrySize: L = 0, sizeCalculation: O, fetchMethod: q, memoMethod: D, noDeleteOnFetchRejection: B, noDeleteOnStaleGet: ae, allowStaleOnFetchRejection: Q, allowStaleOnFetchAbort: K, ignoreFetchAbort: re } = c;
      if (y !== 0 && !e(y)) throw new TypeError("max option must be a nonnegative integer");
      let F = y ? i(y) : Array;
      if (!F) throw new Error("invalid max value: " + y);
      if (this.#l = y, this.#f = P, this.maxEntrySize = L || this.#f, this.sizeCalculation = O, this.sizeCalculation) {
        if (!this.#f && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
        if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
      }
      if (D !== void 0 && typeof D != "function") throw new TypeError("memoMethod must be a function if defined");
      if (this.#R = D, q !== void 0 && typeof q != "function") throw new TypeError("fetchMethod must be a function if specified");
      if (this.#P = q, this.#x = !!q, this.#n = /* @__PURE__ */ new Map(), this.#r = new Array(y).fill(void 0), this.#e = new Array(y).fill(void 0), this.#u = new F(y), this.#h = new F(y), this.#a = 0, this.#o = 0, this.#m = g.create(y), this.#i = 0, this.#b = 0, typeof A == "function" && (this.#g = A), typeof E == "function" ? (this.#y = E, this.#s = []) : (this.#y = void 0, this.#s = void 0), this.#_ = !!this.#g, this.#c = !!this.#y, this.noDisposeOnSet = !!T, this.noUpdateTTL = !!C, this.noDeleteOnFetchRejection = !!B, this.allowStaleOnFetchRejection = !!Q, this.allowStaleOnFetchAbort = !!K, this.ignoreFetchAbort = !!re, this.maxEntrySize !== 0) {
        if (this.#f !== 0 && !e(this.#f)) throw new TypeError("maxSize must be a positive integer if specified");
        if (!e(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
        this.#W();
      }
      if (this.allowStale = !!v, this.noDeleteOnStaleGet = !!ae, this.updateAgeOnGet = !!_, this.updateAgeOnHas = !!I, this.ttlResolution = e(S) || S === 0 ? S : 1, this.ttlAutopurge = !!p, this.ttl = b || 0, this.ttl) {
        if (!e(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
        this.#N();
      }
      if (this.#l === 0 && this.ttl === 0 && this.#f === 0) throw new TypeError("At least one of max, maxSize, or ttl is required");
      if (!this.ttlAutopurge && !this.#l && !this.#f) {
        let Z = "LRU_CACHE_UNBOUNDED";
        n(Z) && (s.add(Z), u("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", Z, Us));
      }
    }
    getRemainingTTL(c) {
      return this.#n.has(c) ? 1 / 0 : 0;
    }
    #N() {
      let c = new o(this.#l), y = new o(this.#l);
      this.#p = c, this.#w = y, this.#B = (p, _, I = f.now()) => {
        if (y[p] = _ !== 0 ? I : 0, c[p] = _, _ !== 0 && this.ttlAutopurge) {
          let v = setTimeout(() => {
            this.#d(p) && this.#A(this.#r[p], "expire");
          }, _ + 1);
          v.unref && v.unref();
        }
      }, this.#T = (p) => {
        y[p] = c[p] !== 0 ? f.now() : 0;
      }, this.#I = (p, _) => {
        if (c[_]) {
          let I = c[_], v = y[_];
          if (!I || !v) return;
          p.ttl = I, p.start = v, p.now = b || S();
          let A = p.now - v;
          p.remainingTTL = I - A;
        }
      };
      let b = 0, S = () => {
        let p = f.now();
        if (this.ttlResolution > 0) {
          b = p;
          let _ = setTimeout(() => b = 0, this.ttlResolution);
          _.unref && _.unref();
        }
        return p;
      };
      this.getRemainingTTL = (p) => {
        let _ = this.#n.get(p);
        if (_ === void 0) return 0;
        let I = c[_], v = y[_];
        if (!I || !v) return 1 / 0;
        let A = (b || S()) - v;
        return I - A;
      }, this.#d = (p) => {
        let _ = y[p], I = c[p];
        return !!I && !!_ && (b || S()) - _ > I;
      };
    }
    #T = () => {
    };
    #I = () => {
    };
    #B = () => {
    };
    #d = () => !1;
    #W() {
      let c = new o(this.#l);
      this.#b = 0, this.#v = c, this.#O = (y) => {
        this.#b -= c[y], c[y] = 0;
      }, this.#U = (y, b, S, p) => {
        if (this.#t(b)) return 0;
        if (!e(S)) if (p) {
          if (typeof p != "function") throw new TypeError("sizeCalculation must be a function");
          if (S = p(b, y), !e(S)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
        return S;
      }, this.#C = (y, b, S) => {
        if (c[y] = b, this.#f) {
          let p = this.#f - c[y];
          for (; this.#b > p; ) this.#M(!0);
        }
        this.#b += c[y], S && (S.entrySize = b, S.totalCalculatedSize = this.#b);
      };
    }
    #O = (c) => {
    };
    #C = (c, y, b) => {
    };
    #U = (c, y, b, S) => {
      if (b || S) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
      return 0;
    };
    *#S({ allowStale: c = this.allowStale } = {}) {
      if (this.#i) for (let y = this.#o; !(!this.#L(y) || ((c || !this.#d(y)) && (yield y), y === this.#a)); ) y = this.#h[y];
    }
    *#E({ allowStale: c = this.allowStale } = {}) {
      if (this.#i) for (let y = this.#a; !(!this.#L(y) || ((c || !this.#d(y)) && (yield y), y === this.#o)); ) y = this.#u[y];
    }
    #L(c) {
      return c !== void 0 && this.#n.get(this.#r[c]) === c;
    }
    *entries() {
      for (let c of this.#S()) this.#e[c] !== void 0 && this.#r[c] !== void 0 && !this.#t(this.#e[c]) && (yield [this.#r[c], this.#e[c]]);
    }
    *rentries() {
      for (let c of this.#E()) this.#e[c] !== void 0 && this.#r[c] !== void 0 && !this.#t(this.#e[c]) && (yield [this.#r[c], this.#e[c]]);
    }
    *keys() {
      for (let c of this.#S()) {
        let y = this.#r[c];
        y !== void 0 && !this.#t(this.#e[c]) && (yield y);
      }
    }
    *rkeys() {
      for (let c of this.#E()) {
        let y = this.#r[c];
        y !== void 0 && !this.#t(this.#e[c]) && (yield y);
      }
    }
    *values() {
      for (let c of this.#S()) this.#e[c] !== void 0 && !this.#t(this.#e[c]) && (yield this.#e[c]);
    }
    *rvalues() {
      for (let c of this.#E()) this.#e[c] !== void 0 && !this.#t(this.#e[c]) && (yield this.#e[c]);
    }
    [Symbol.iterator]() {
      return this.entries();
    }
    [Symbol.toStringTag] = "LRUCache";
    find(c, y = {}) {
      for (let b of this.#S()) {
        let S = this.#e[b], p = this.#t(S) ? S.__staleWhileFetching : S;
        if (p !== void 0 && c(p, this.#r[b], this)) return this.get(this.#r[b], y);
      }
    }
    forEach(c, y = this) {
      for (let b of this.#S()) {
        let S = this.#e[b], p = this.#t(S) ? S.__staleWhileFetching : S;
        p !== void 0 && c.call(y, p, this.#r[b], this);
      }
    }
    rforEach(c, y = this) {
      for (let b of this.#E()) {
        let S = this.#e[b], p = this.#t(S) ? S.__staleWhileFetching : S;
        p !== void 0 && c.call(y, p, this.#r[b], this);
      }
    }
    purgeStale() {
      let c = !1;
      for (let y of this.#E({ allowStale: !0 })) this.#d(y) && (this.#A(this.#r[y], "expire"), c = !0);
      return c;
    }
    info(c) {
      let y = this.#n.get(c);
      if (y === void 0) return;
      let b = this.#e[y], S = this.#t(b) ? b.__staleWhileFetching : b;
      if (S === void 0) return;
      let p = { value: S };
      if (this.#p && this.#w) {
        let _ = this.#p[y], I = this.#w[y];
        if (_ && I) {
          let v = _ - (f.now() - I);
          p.ttl = v, p.start = Date.now();
        }
      }
      return this.#v && (p.size = this.#v[y]), p;
    }
    dump() {
      let c = [];
      for (let y of this.#S({ allowStale: !0 })) {
        let b = this.#r[y], S = this.#e[y], p = this.#t(S) ? S.__staleWhileFetching : S;
        if (p === void 0 || b === void 0) continue;
        let _ = { value: p };
        if (this.#p && this.#w) {
          _.ttl = this.#p[y];
          let I = f.now() - this.#w[y];
          _.start = Math.floor(Date.now() - I);
        }
        this.#v && (_.size = this.#v[y]), c.unshift([b, _]);
      }
      return c;
    }
    load(c) {
      this.clear();
      for (let [y, b] of c) {
        if (b.start) {
          let S = Date.now() - b.start;
          b.start = f.now() - S;
        }
        this.set(y, b.value, b);
      }
    }
    set(c, y, b = {}) {
      if (y === void 0) return this.delete(c), this;
      let { ttl: S = this.ttl, start: p, noDisposeOnSet: _ = this.noDisposeOnSet, sizeCalculation: I = this.sizeCalculation, status: v } = b, { noUpdateTTL: A = this.noUpdateTTL } = b, E = this.#U(c, y, b.size || 0, I);
      if (this.maxEntrySize && E > this.maxEntrySize) return v && (v.set = "miss", v.maxEntrySizeExceeded = !0), this.#A(c, "set"), this;
      let T = this.#i === 0 ? void 0 : this.#n.get(c);
      if (T === void 0) T = this.#i === 0 ? this.#o : this.#m.length !== 0 ? this.#m.pop() : this.#i === this.#l ? this.#M(!1) : this.#i, this.#r[T] = c, this.#e[T] = y, this.#n.set(c, T), this.#u[this.#o] = T, this.#h[T] = this.#o, this.#o = T, this.#i++, this.#C(T, E, v), v && (v.set = "add"), A = !1;
      else {
        this.#k(T);
        let C = this.#e[T];
        if (y !== C) {
          if (this.#x && this.#t(C)) {
            C.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: P } = C;
            P !== void 0 && !_ && (this.#_ && this.#g?.(P, c, "set"), this.#c && this.#s?.push([P, c, "set"]));
          } else _ || (this.#_ && this.#g?.(C, c, "set"), this.#c && this.#s?.push([C, c, "set"]));
          if (this.#O(T), this.#C(T, E, v), this.#e[T] = y, v) {
            v.set = "replace";
            let P = C && this.#t(C) ? C.__staleWhileFetching : C;
            P !== void 0 && (v.oldValue = P);
          }
        } else v && (v.set = "update");
      }
      if (S !== 0 && !this.#p && this.#N(), this.#p && (A || this.#B(T, S, p), v && this.#I(v, T)), !_ && this.#c && this.#s) {
        let C = this.#s, P;
        for (; P = C?.shift(); ) this.#y?.(...P);
      }
      return this;
    }
    pop() {
      try {
        for (; this.#i; ) {
          let c = this.#e[this.#a];
          if (this.#M(!0), this.#t(c)) {
            if (c.__staleWhileFetching) return c.__staleWhileFetching;
          } else if (c !== void 0) return c;
        }
      } finally {
        if (this.#c && this.#s) {
          let c = this.#s, y;
          for (; y = c?.shift(); ) this.#y?.(...y);
        }
      }
    }
    #M(c) {
      let y = this.#a, b = this.#r[y], S = this.#e[y];
      return this.#x && this.#t(S) ? S.__abortController.abort(new Error("evicted")) : (this.#_ || this.#c) && (this.#_ && this.#g?.(S, b, "evict"), this.#c && this.#s?.push([S, b, "evict"])), this.#O(y), c && (this.#r[y] = void 0, this.#e[y] = void 0, this.#m.push(y)), this.#i === 1 ? (this.#a = this.#o = 0, this.#m.length = 0) : this.#a = this.#u[y], this.#n.delete(b), this.#i--, y;
    }
    has(c, y = {}) {
      let { updateAgeOnHas: b = this.updateAgeOnHas, status: S } = y, p = this.#n.get(c);
      if (p !== void 0) {
        let _ = this.#e[p];
        if (this.#t(_) && _.__staleWhileFetching === void 0) return !1;
        if (this.#d(p)) S && (S.has = "stale", this.#I(S, p));
        else return b && this.#T(p), S && (S.has = "hit", this.#I(S, p)), !0;
      } else S && (S.has = "miss");
      return !1;
    }
    peek(c, y = {}) {
      let { allowStale: b = this.allowStale } = y, S = this.#n.get(c);
      if (S === void 0 || !b && this.#d(S)) return;
      let p = this.#e[S];
      return this.#t(p) ? p.__staleWhileFetching : p;
    }
    #j(c, y, b, S) {
      let p = y === void 0 ? void 0 : this.#e[y];
      if (this.#t(p)) return p;
      let _ = new r(), { signal: I } = b;
      I?.addEventListener("abort", () => _.abort(I.reason), { signal: _.signal });
      let v = { signal: _.signal, options: b, context: S }, A = (O, q = !1) => {
        let { aborted: D } = _.signal, B = b.ignoreFetchAbort && O !== void 0;
        if (b.status && (D && !q ? (b.status.fetchAborted = !0, b.status.fetchError = _.signal.reason, B && (b.status.fetchAbortIgnored = !0)) : b.status.fetchResolved = !0), D && !B && !q) return T(_.signal.reason);
        let ae = P;
        return this.#e[y] === P && (O === void 0 ? ae.__staleWhileFetching ? this.#e[y] = ae.__staleWhileFetching : this.#A(c, "fetch") : (b.status && (b.status.fetchUpdated = !0), this.set(c, O, v.options))), O;
      }, E = (O) => (b.status && (b.status.fetchRejected = !0, b.status.fetchError = O), T(O)), T = (O) => {
        let { aborted: q } = _.signal, D = q && b.allowStaleOnFetchAbort, B = D || b.allowStaleOnFetchRejection, ae = B || b.noDeleteOnFetchRejection, Q = P;
        if (this.#e[y] === P && (!ae || Q.__staleWhileFetching === void 0 ? this.#A(c, "fetch") : D || (this.#e[y] = Q.__staleWhileFetching)), B) return b.status && Q.__staleWhileFetching !== void 0 && (b.status.returnedStale = !0), Q.__staleWhileFetching;
        if (Q.__returned === Q) throw O;
      }, C = (O, q) => {
        let D = this.#P?.(c, p, v);
        D && D instanceof Promise && D.then((B) => O(B === void 0 ? void 0 : B), q), _.signal.addEventListener("abort", () => {
          (!b.ignoreFetchAbort || b.allowStaleOnFetchAbort) && (O(void 0), b.allowStaleOnFetchAbort && (O = (B) => A(B, !0)));
        });
      };
      b.status && (b.status.fetchDispatched = !0);
      let P = new Promise(C).then(A, E), L = Object.assign(P, { __abortController: _, __staleWhileFetching: p, __returned: void 0 });
      return y === void 0 ? (this.set(c, L, { ...v.options, status: void 0 }), y = this.#n.get(c)) : this.#e[y] = L, L;
    }
    #t(c) {
      if (!this.#x) return !1;
      let y = c;
      return !!y && y instanceof Promise && y.hasOwnProperty("__staleWhileFetching") && y.__abortController instanceof r;
    }
    async fetch(c, y = {}) {
      let { allowStale: b = this.allowStale, updateAgeOnGet: S = this.updateAgeOnGet, noDeleteOnStaleGet: p = this.noDeleteOnStaleGet, ttl: _ = this.ttl, noDisposeOnSet: I = this.noDisposeOnSet, size: v = 0, sizeCalculation: A = this.sizeCalculation, noUpdateTTL: E = this.noUpdateTTL, noDeleteOnFetchRejection: T = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: C = this.allowStaleOnFetchRejection, ignoreFetchAbort: P = this.ignoreFetchAbort, allowStaleOnFetchAbort: L = this.allowStaleOnFetchAbort, context: O, forceRefresh: q = !1, status: D, signal: B } = y;
      if (!this.#x) return D && (D.fetch = "get"), this.get(c, { allowStale: b, updateAgeOnGet: S, noDeleteOnStaleGet: p, status: D });
      let ae = { allowStale: b, updateAgeOnGet: S, noDeleteOnStaleGet: p, ttl: _, noDisposeOnSet: I, size: v, sizeCalculation: A, noUpdateTTL: E, noDeleteOnFetchRejection: T, allowStaleOnFetchRejection: C, allowStaleOnFetchAbort: L, ignoreFetchAbort: P, status: D, signal: B }, Q = this.#n.get(c);
      if (Q === void 0) {
        D && (D.fetch = "miss");
        let K = this.#j(c, Q, ae, O);
        return K.__returned = K;
      } else {
        let K = this.#e[Q];
        if (this.#t(K)) {
          let R = b && K.__staleWhileFetching !== void 0;
          return D && (D.fetch = "inflight", R && (D.returnedStale = !0)), R ? K.__staleWhileFetching : K.__returned = K;
        }
        let re = this.#d(Q);
        if (!q && !re) return D && (D.fetch = "hit"), this.#k(Q), S && this.#T(Q), D && this.#I(D, Q), K;
        let F = this.#j(c, Q, ae, O), Z = F.__staleWhileFetching !== void 0 && b;
        return D && (D.fetch = re ? "stale" : "refresh", Z && re && (D.returnedStale = !0)), Z ? F.__staleWhileFetching : F.__returned = F;
      }
    }
    async forceFetch(c, y = {}) {
      let b = await this.fetch(c, y);
      if (b === void 0) throw new Error("fetch() returned undefined");
      return b;
    }
    memo(c, y = {}) {
      let b = this.#R;
      if (!b) throw new Error("no memoMethod provided to constructor");
      let { context: S, forceRefresh: p, ..._ } = y, I = this.get(c, _);
      if (!p && I !== void 0) return I;
      let v = b(c, I, { options: _, context: S });
      return this.set(c, v, _), v;
    }
    get(c, y = {}) {
      let { allowStale: b = this.allowStale, updateAgeOnGet: S = this.updateAgeOnGet, noDeleteOnStaleGet: p = this.noDeleteOnStaleGet, status: _ } = y, I = this.#n.get(c);
      if (I !== void 0) {
        let v = this.#e[I], A = this.#t(v);
        return _ && this.#I(_, I), this.#d(I) ? (_ && (_.get = "stale"), A ? (_ && b && v.__staleWhileFetching !== void 0 && (_.returnedStale = !0), b ? v.__staleWhileFetching : void 0) : (p || this.#A(c, "expire"), _ && b && (_.returnedStale = !0), b ? v : void 0)) : (_ && (_.get = "hit"), A ? v.__staleWhileFetching : (this.#k(I), S && this.#T(I), v));
      } else _ && (_.get = "miss");
    }
    #D(c, y) {
      this.#h[y] = c, this.#u[c] = y;
    }
    #k(c) {
      c !== this.#o && (c === this.#a ? this.#a = this.#u[c] : this.#D(this.#h[c], this.#u[c]), this.#D(this.#o, c), this.#o = c);
    }
    delete(c) {
      return this.#A(c, "delete");
    }
    #A(c, y) {
      let b = !1;
      if (this.#i !== 0) {
        let S = this.#n.get(c);
        if (S !== void 0) if (b = !0, this.#i === 1) this.#F(y);
        else {
          this.#O(S);
          let p = this.#e[S];
          if (this.#t(p) ? p.__abortController.abort(new Error("deleted")) : (this.#_ || this.#c) && (this.#_ && this.#g?.(p, c, y), this.#c && this.#s?.push([p, c, y])), this.#n.delete(c), this.#r[S] = void 0, this.#e[S] = void 0, S === this.#o) this.#o = this.#h[S];
          else if (S === this.#a) this.#a = this.#u[S];
          else {
            let _ = this.#h[S];
            this.#u[_] = this.#u[S];
            let I = this.#u[S];
            this.#h[I] = this.#h[S];
          }
          this.#i--, this.#m.push(S);
        }
      }
      if (this.#c && this.#s?.length) {
        let S = this.#s, p;
        for (; p = S?.shift(); ) this.#y?.(...p);
      }
      return b;
    }
    clear() {
      return this.#F("delete");
    }
    #F(c) {
      for (let y of this.#E({ allowStale: !0 })) {
        let b = this.#e[y];
        if (this.#t(b)) b.__abortController.abort(new Error("deleted"));
        else {
          let S = this.#r[y];
          this.#_ && this.#g?.(b, S, c), this.#c && this.#s?.push([b, S, c]);
        }
      }
      if (this.#n.clear(), this.#e.fill(void 0), this.#r.fill(void 0), this.#p && this.#w && (this.#p.fill(0), this.#w.fill(0)), this.#v && this.#v.fill(0), this.#a = 0, this.#o = 0, this.#m.length = 0, this.#b = 0, this.#i = 0, this.#c && this.#s) {
        let y = this.#s, b;
        for (; b = y?.shift(); ) this.#y?.(...b);
      }
    }
  };
  h.LRUCache = d;
}), ut = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.ContainerIterator = h.Container = h.Base = void 0;
  var f = class {
    constructor(u = 0) {
      this.iteratorType = u;
    }
    equals(u) {
      return this.o === u.o;
    }
  };
  h.ContainerIterator = f;
  var s = class {
    constructor() {
      this.i = 0;
    }
    get length() {
      return this.i;
    }
    size() {
      return this.i;
    }
    empty() {
      return this.i === 0;
    }
  };
  h.Base = s;
  var a = class extends s {
  };
  h.Container = a;
}), Al = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = ut(), s = class extends f.Base {
    constructor(u = []) {
      super(), this.S = [];
      let r = this;
      u.forEach(function(t) {
        r.push(t);
      });
    }
    clear() {
      this.i = 0, this.S = [];
    }
    push(u) {
      return this.S.push(u), this.i += 1, this.i;
    }
    pop() {
      if (this.i !== 0) return this.i -= 1, this.S.pop();
    }
    top() {
      return this.S[this.i - 1];
    }
  }, a = s;
  h.default = a;
}), Il = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = ut(), s = class extends f.Base {
    constructor(u = []) {
      super(), this.j = 0, this.q = [];
      let r = this;
      u.forEach(function(t) {
        r.push(t);
      });
    }
    clear() {
      this.q = [], this.i = this.j = 0;
    }
    push(u) {
      let r = this.q.length;
      if (this.j / r > 0.5 && this.j + this.i >= r && r > 4096) {
        let t = this.i;
        for (let n = 0; n < t; ++n) this.q[n] = this.q[this.j + n];
        this.j = 0, this.q[this.i] = u;
      } else this.q[this.j + this.i] = u;
      return ++this.i;
    }
    pop() {
      if (this.i === 0) return;
      let u = this.q[this.j++];
      return this.i -= 1, u;
    }
    front() {
      if (this.i !== 0) return this.q[this.j];
    }
  }, a = s;
  h.default = a;
}), xl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = ut(), s = class extends f.Base {
    constructor(u = [], r = function(n, e) {
      return n > e ? -1 : n < e ? 1 : 0;
    }, t = !0) {
      if (super(), this.v = r, Array.isArray(u)) this.C = t ? [...u] : u;
      else {
        this.C = [];
        let e = this;
        u.forEach(function(i) {
          e.C.push(i);
        });
      }
      this.i = this.C.length;
      let n = this.i >> 1;
      for (let e = this.i - 1 >> 1; e >= 0; --e) this.k(e, n);
    }
    m(u) {
      let r = this.C[u];
      for (; u > 0; ) {
        let t = u - 1 >> 1, n = this.C[t];
        if (this.v(n, r) <= 0) break;
        this.C[u] = n, u = t;
      }
      this.C[u] = r;
    }
    k(u, r) {
      let t = this.C[u];
      for (; u < r; ) {
        let n = u << 1 | 1, e = n + 1, i = this.C[n];
        if (e < this.i && this.v(i, this.C[e]) > 0 && (n = e, i = this.C[e]), this.v(i, t) >= 0) break;
        this.C[u] = i, u = n;
      }
      this.C[u] = t;
    }
    clear() {
      this.i = 0, this.C.length = 0;
    }
    push(u) {
      this.C.push(u), this.m(this.i), this.i += 1;
    }
    pop() {
      if (this.i === 0) return;
      let u = this.C[0], r = this.C.pop();
      return this.i -= 1, this.i && (this.C[0] = r, this.k(0, this.i >> 1)), u;
    }
    top() {
      return this.C[0];
    }
    find(u) {
      return this.C.indexOf(u) >= 0;
    }
    remove(u) {
      let r = this.C.indexOf(u);
      return r < 0 ? !1 : (r === 0 ? this.pop() : r === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(r, 1, this.C.pop()), this.i -= 1, this.m(r), this.k(r, this.i >> 1)), !0);
    }
    updateItem(u) {
      let r = this.C.indexOf(u);
      return r < 0 ? !1 : (this.m(r), this.k(r, this.i >> 1), !0);
    }
    toArray() {
      return [...this.C];
    }
  }, a = s;
  h.default = a;
}), Fi = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = ut(), s = class extends f.Container {
  }, a = s;
  h.default = a;
}), ct = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.throwIteratorAccessError = f;
  function f() {
    throw new RangeError("Iterator access denied!");
  }
}), Ls = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.RandomIterator = void 0;
  var f = ut(), s = ct(), a = class extends f.ContainerIterator {
    constructor(u, r) {
      super(r), this.o = u, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === 0 && (0, s.throwIteratorAccessError)(), this.o -= 1, this;
      }, this.next = function() {
        return this.o === this.container.size() && (0, s.throwIteratorAccessError)(), this.o += 1, this;
      }) : (this.pre = function() {
        return this.o === this.container.size() - 1 && (0, s.throwIteratorAccessError)(), this.o += 1, this;
      }, this.next = function() {
        return this.o === -1 && (0, s.throwIteratorAccessError)(), this.o -= 1, this;
      });
    }
    get pointer() {
      return this.container.getElementByPos(this.o);
    }
    set pointer(u) {
      this.container.setElementByPos(this.o, u);
    }
  };
  h.RandomIterator = a;
}), Tl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = a(Fi()), s = Ls();
  function a(n) {
    return n && n.t ? n : { default: n };
  }
  var u = class Ds extends s.RandomIterator {
    constructor(e, i, o) {
      super(e, o), this.container = i;
    }
    copy() {
      return new Ds(this.o, this.container, this.iteratorType);
    }
  }, r = class extends f.default {
    constructor(n = [], e = !0) {
      if (super(), Array.isArray(n)) this.J = e ? [...n] : n, this.i = n.length;
      else {
        this.J = [];
        let i = this;
        n.forEach(function(o) {
          i.pushBack(o);
        });
      }
    }
    clear() {
      this.i = 0, this.J.length = 0;
    }
    begin() {
      return new u(0, this);
    }
    end() {
      return new u(this.i, this);
    }
    rBegin() {
      return new u(this.i - 1, this, 1);
    }
    rEnd() {
      return new u(-1, this, 1);
    }
    front() {
      return this.J[0];
    }
    back() {
      return this.J[this.i - 1];
    }
    getElementByPos(n) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      return this.J[n];
    }
    eraseElementByPos(n) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      return this.J.splice(n, 1), this.i -= 1, this.i;
    }
    eraseElementByValue(n) {
      let e = 0;
      for (let i = 0; i < this.i; ++i) this.J[i] !== n && (this.J[e++] = this.J[i]);
      return this.i = this.J.length = e, this.i;
    }
    eraseElementByIterator(n) {
      let e = n.o;
      return n = n.next(), this.eraseElementByPos(e), n;
    }
    pushBack(n) {
      return this.J.push(n), this.i += 1, this.i;
    }
    popBack() {
      if (this.i !== 0) return this.i -= 1, this.J.pop();
    }
    setElementByPos(n, e) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      this.J[n] = e;
    }
    insert(n, e, i = 1) {
      if (n < 0 || n > this.i) throw new RangeError();
      return this.J.splice(n, 0, ...new Array(i).fill(e)), this.i += i, this.i;
    }
    find(n) {
      for (let e = 0; e < this.i; ++e) if (this.J[e] === n) return new u(e, this);
      return this.end();
    }
    reverse() {
      this.J.reverse();
    }
    unique() {
      let n = 1;
      for (let e = 1; e < this.i; ++e) this.J[e] !== this.J[e - 1] && (this.J[n++] = this.J[e]);
      return this.i = this.J.length = n, this.i;
    }
    sort(n) {
      this.J.sort(n);
    }
    forEach(n) {
      for (let e = 0; e < this.i; ++e) n(this.J[e], e, this);
    }
    [Symbol.iterator]() {
      return function* () {
        yield* this.J;
      }.bind(this)();
    }
  }, t = r;
  h.default = t;
}), Ol = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = u(Fi()), s = ut(), a = ct();
  function u(e) {
    return e && e.t ? e : { default: e };
  }
  var r = class Fs extends s.ContainerIterator {
    constructor(i, o, g, d) {
      super(d), this.o = i, this.h = o, this.container = g, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
    get pointer() {
      return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o.l;
    }
    set pointer(i) {
      this.o === this.h && (0, a.throwIteratorAccessError)(), this.o.l = i;
    }
    copy() {
      return new Fs(this.o, this.h, this.container, this.iteratorType);
    }
  }, t = class extends f.default {
    constructor(e = []) {
      super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
      let i = this;
      e.forEach(function(o) {
        i.pushBack(o);
      });
    }
    V(e) {
      let { L: i, B: o } = e;
      i.B = o, o.L = i, e === this.p && (this.p = o), e === this._ && (this._ = i), this.i -= 1;
    }
    G(e, i) {
      let o = i.B, g = { l: e, L: i, B: o };
      i.B = g, o.L = g, i === this.h && (this.p = g), o === this.h && (this._ = g), this.i += 1;
    }
    clear() {
      this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    begin() {
      return new r(this.p, this.h, this);
    }
    end() {
      return new r(this.h, this.h, this);
    }
    rBegin() {
      return new r(this._, this.h, this, 1);
    }
    rEnd() {
      return new r(this.h, this.h, this, 1);
    }
    front() {
      return this.p.l;
    }
    back() {
      return this._.l;
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let i = this.p;
      for (; e--; ) i = i.B;
      return i.l;
    }
    eraseElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let i = this.p;
      for (; e--; ) i = i.B;
      return this.V(i), this.i;
    }
    eraseElementByValue(e) {
      let i = this.p;
      for (; i !== this.h; ) i.l === e && this.V(i), i = i.B;
      return this.i;
    }
    eraseElementByIterator(e) {
      let i = e.o;
      return i === this.h && (0, a.throwIteratorAccessError)(), e = e.next(), this.V(i), e;
    }
    pushBack(e) {
      return this.G(e, this._), this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let e = this._.l;
      return this.V(this._), e;
    }
    pushFront(e) {
      return this.G(e, this.h), this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let e = this.p.l;
      return this.V(this.p), e;
    }
    setElementByPos(e, i) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let o = this.p;
      for (; e--; ) o = o.B;
      o.l = i;
    }
    insert(e, i, o = 1) {
      if (e < 0 || e > this.i) throw new RangeError();
      if (o <= 0) return this.i;
      if (e === 0) for (; o--; ) this.pushFront(i);
      else if (e === this.i) for (; o--; ) this.pushBack(i);
      else {
        let g = this.p;
        for (let m = 1; m < e; ++m) g = g.B;
        let d = g.B;
        for (this.i += o; o--; ) g.B = { l: i, L: g }, g.B.L = g, g = g.B;
        g.B = d, d.L = g;
      }
      return this.i;
    }
    find(e) {
      let i = this.p;
      for (; i !== this.h; ) {
        if (i.l === e) return new r(i, this.h, this);
        i = i.B;
      }
      return this.end();
    }
    reverse() {
      if (this.i <= 1) return;
      let e = this.p, i = this._, o = 0;
      for (; o << 1 < this.i; ) {
        let g = e.l;
        e.l = i.l, i.l = g, e = e.B, i = i.L, o += 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let e = this.p;
      for (; e !== this.h; ) {
        let i = e;
        for (; i.B !== this.h && i.l === i.B.l; ) i = i.B, this.i -= 1;
        e.B = i.B, e.B.L = e, e = e.B;
      }
      return this.i;
    }
    sort(e) {
      if (this.i <= 1) return;
      let i = [];
      this.forEach(function(g) {
        i.push(g);
      }), i.sort(e);
      let o = this.p;
      i.forEach(function(g) {
        o.l = g, o = o.B;
      });
    }
    merge(e) {
      let i = this;
      if (this.i === 0) e.forEach(function(o) {
        i.pushBack(o);
      });
      else {
        let o = this.p;
        e.forEach(function(g) {
          for (; o !== i.h && o.l <= g; ) o = o.B;
          i.G(g, o.L);
        });
      }
      return this.i;
    }
    forEach(e) {
      let i = this.p, o = 0;
      for (; i !== this.h; ) e(i.l, o++, this), i = i.B;
    }
    [Symbol.iterator]() {
      return function* () {
        if (this.i === 0) return;
        let e = this.p;
        for (; e !== this.h; ) yield e.l, e = e.B;
      }.bind(this)();
    }
  }, n = t;
  h.default = n;
}), kl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = a(Fi()), s = Ls();
  function a(n) {
    return n && n.t ? n : { default: n };
  }
  var u = class Ws extends s.RandomIterator {
    constructor(e, i, o) {
      super(e, o), this.container = i;
    }
    copy() {
      return new Ws(this.o, this.container, this.iteratorType);
    }
  }, r = class extends f.default {
    constructor(n = [], e = 4096) {
      super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
      let i = (() => {
        if (typeof n.length == "number") return n.length;
        if (typeof n.size == "number") return n.size;
        if (typeof n.size == "function") return n.size();
        throw new TypeError("Cannot get the length or size of the container");
      })();
      this.F = e, this.P = Math.max(Math.ceil(i / this.F), 1);
      for (let d = 0; d < this.P; ++d) this.A.push(new Array(this.F));
      let o = Math.ceil(i / this.F);
      this.j = this.R = (this.P >> 1) - (o >> 1), this.D = this.N = this.F - i % this.F >> 1;
      let g = this;
      n.forEach(function(d) {
        g.pushBack(d);
      });
    }
    T() {
      let n = [], e = Math.max(this.P >> 1, 1);
      for (let i = 0; i < e; ++i) n[i] = new Array(this.F);
      for (let i = this.j; i < this.P; ++i) n[n.length] = this.A[i];
      for (let i = 0; i < this.R; ++i) n[n.length] = this.A[i];
      n[n.length] = [...this.A[this.R]], this.j = e, this.R = n.length - 1;
      for (let i = 0; i < e; ++i) n[n.length] = new Array(this.F);
      this.A = n, this.P = n.length;
    }
    O(n) {
      let e = this.D + n + 1, i = e % this.F, o = i - 1, g = this.j + (e - i) / this.F;
      return i === 0 && (g -= 1), g %= this.P, o < 0 && (o += this.F), { curNodeBucketIndex: g, curNodePointerIndex: o };
    }
    clear() {
      this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1;
    }
    begin() {
      return new u(0, this);
    }
    end() {
      return new u(this.i, this);
    }
    rBegin() {
      return new u(this.i - 1, this, 1);
    }
    rEnd() {
      return new u(-1, this, 1);
    }
    front() {
      if (this.i !== 0) return this.A[this.j][this.D];
    }
    back() {
      if (this.i !== 0) return this.A[this.R][this.N];
    }
    pushBack(n) {
      return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = n, this.i;
    }
    popBack() {
      if (this.i === 0) return;
      let n = this.A[this.R][this.N];
      return this.i !== 1 && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, n;
    }
    pushFront(n) {
      return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = n, this.i;
    }
    popFront() {
      if (this.i === 0) return;
      let n = this.A[this.j][this.D];
      return this.i !== 1 && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, n;
    }
    getElementByPos(n) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: e, curNodePointerIndex: i } = this.O(n);
      return this.A[e][i];
    }
    setElementByPos(n, e) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      let { curNodeBucketIndex: i, curNodePointerIndex: o } = this.O(n);
      this.A[i][o] = e;
    }
    insert(n, e, i = 1) {
      if (n < 0 || n > this.i) throw new RangeError();
      if (n === 0) for (; i--; ) this.pushFront(e);
      else if (n === this.i) for (; i--; ) this.pushBack(e);
      else {
        let o = [];
        for (let g = n; g < this.i; ++g) o.push(this.getElementByPos(g));
        this.cut(n - 1);
        for (let g = 0; g < i; ++g) this.pushBack(e);
        for (let g = 0; g < o.length; ++g) this.pushBack(o[g]);
      }
      return this.i;
    }
    cut(n) {
      if (n < 0) return this.clear(), 0;
      let { curNodeBucketIndex: e, curNodePointerIndex: i } = this.O(n);
      return this.R = e, this.N = i, this.i = n + 1, this.i;
    }
    eraseElementByPos(n) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      if (n === 0) this.popFront();
      else if (n === this.i - 1) this.popBack();
      else {
        let e = [];
        for (let o = n + 1; o < this.i; ++o) e.push(this.getElementByPos(o));
        this.cut(n), this.popBack();
        let i = this;
        e.forEach(function(o) {
          i.pushBack(o);
        });
      }
      return this.i;
    }
    eraseElementByValue(n) {
      if (this.i === 0) return 0;
      let e = [];
      for (let o = 0; o < this.i; ++o) {
        let g = this.getElementByPos(o);
        g !== n && e.push(g);
      }
      let i = e.length;
      for (let o = 0; o < i; ++o) this.setElementByPos(o, e[o]);
      return this.cut(i - 1);
    }
    eraseElementByIterator(n) {
      let e = n.o;
      return this.eraseElementByPos(e), n = n.next(), n;
    }
    find(n) {
      for (let e = 0; e < this.i; ++e) if (this.getElementByPos(e) === n) return new u(e, this);
      return this.end();
    }
    reverse() {
      let n = 0, e = this.i - 1;
      for (; n < e; ) {
        let i = this.getElementByPos(n);
        this.setElementByPos(n, this.getElementByPos(e)), this.setElementByPos(e, i), n += 1, e -= 1;
      }
    }
    unique() {
      if (this.i <= 1) return this.i;
      let n = 1, e = this.getElementByPos(0);
      for (let i = 1; i < this.i; ++i) {
        let o = this.getElementByPos(i);
        o !== e && (e = o, this.setElementByPos(n++, o));
      }
      for (; this.i > n; ) this.popBack();
      return this.i;
    }
    sort(n) {
      let e = [];
      for (let i = 0; i < this.i; ++i) e.push(this.getElementByPos(i));
      e.sort(n);
      for (let i = 0; i < this.i; ++i) this.setElementByPos(i, e[i]);
    }
    shrinkToFit() {
      if (this.i === 0) return;
      let n = [];
      this.forEach(function(e) {
        n.push(e);
      }), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
      for (let e = 0; e < this.P; ++e) this.A.push(new Array(this.F));
      for (let e = 0; e < n.length; ++e) this.pushBack(n[e]);
    }
    forEach(n) {
      for (let e = 0; e < this.i; ++e) n(this.getElementByPos(e), e, this);
    }
    [Symbol.iterator]() {
      return function* () {
        for (let n = 0; n < this.i; ++n) yield this.getElementByPos(n);
      }.bind(this)();
    }
  }, t = r;
  h.default = t;
}), Pl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.TreeNodeEnableIndex = h.TreeNode = void 0;
  var f = class {
    constructor(a, u) {
      this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = a, this.l = u;
    }
    L() {
      let a = this;
      if (a.ee === 1 && a.tt.tt === a) a = a.W;
      else if (a.U) for (a = a.U; a.W; ) a = a.W;
      else {
        let u = a.tt;
        for (; u.U === a; ) a = u, u = a.tt;
        a = u;
      }
      return a;
    }
    B() {
      let a = this;
      if (a.W) {
        for (a = a.W; a.U; ) a = a.U;
        return a;
      } else {
        let u = a.tt;
        for (; u.W === a; ) a = u, u = a.tt;
        return a.W !== u ? u : a;
      }
    }
    te() {
      let a = this.tt, u = this.W, r = u.U;
      return a.tt === this ? a.tt = u : a.U === this ? a.U = u : a.W = u, u.tt = a, u.U = this, this.tt = u, this.W = r, r && (r.tt = this), u;
    }
    se() {
      let a = this.tt, u = this.U, r = u.W;
      return a.tt === this ? a.tt = u : a.U === this ? a.U = u : a.W = u, u.tt = a, u.W = this, this.tt = u, this.U = r, r && (r.tt = this), u;
    }
  };
  h.TreeNode = f;
  var s = class extends f {
    constructor() {
      super(...arguments), this.rt = 1;
    }
    te() {
      let a = super.te();
      return this.ie(), a.ie(), a;
    }
    se() {
      let a = super.se();
      return this.ie(), a.ie(), a;
    }
    ie() {
      this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt);
    }
  };
  h.TreeNodeEnableIndex = s;
}), qs = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = Pl(), s = ut(), a = ct(), u = class extends s.Container {
    constructor(t = function(e, i) {
      return e < i ? -1 : e > i ? 1 : 0;
    }, n = !1) {
      super(), this.Y = void 0, this.v = t, n ? (this.re = f.TreeNodeEnableIndex, this.M = function(e, i, o) {
        let g = this.ne(e, i, o);
        if (g) {
          let d = g.tt;
          for (; d !== this.h; ) d.rt += 1, d = d.tt;
          let m = this.he(g);
          if (m) {
            let { parentNode: c, grandParent: y, curNode: b } = m;
            c.ie(), y.ie(), b.ie();
          }
        }
        return this.i;
      }, this.V = function(e) {
        let i = this.fe(e);
        for (; i !== this.h; ) i.rt -= 1, i = i.tt;
      }) : (this.re = f.TreeNode, this.M = function(e, i, o) {
        let g = this.ne(e, i, o);
        return g && this.he(g), this.i;
      }, this.V = this.fe), this.h = new this.re();
    }
    X(t, n) {
      let e = this.h;
      for (; t; ) {
        let i = this.v(t.u, n);
        if (i < 0) t = t.W;
        else if (i > 0) e = t, t = t.U;
        else return t;
      }
      return e;
    }
    Z(t, n) {
      let e = this.h;
      for (; t; ) this.v(t.u, n) <= 0 ? t = t.W : (e = t, t = t.U);
      return e;
    }
    $(t, n) {
      let e = this.h;
      for (; t; ) {
        let i = this.v(t.u, n);
        if (i < 0) e = t, t = t.W;
        else if (i > 0) t = t.U;
        else return t;
      }
      return e;
    }
    rr(t, n) {
      let e = this.h;
      for (; t; ) this.v(t.u, n) < 0 ? (e = t, t = t.W) : t = t.U;
      return e;
    }
    ue(t) {
      for (; ; ) {
        let n = t.tt;
        if (n === this.h) return;
        if (t.ee === 1) {
          t.ee = 0;
          return;
        }
        if (t === n.U) {
          let e = n.W;
          if (e.ee === 1) e.ee = 0, n.ee = 1, n === this.Y ? this.Y = n.te() : n.te();
          else if (e.W && e.W.ee === 1) {
            e.ee = n.ee, n.ee = 0, e.W.ee = 0, n === this.Y ? this.Y = n.te() : n.te();
            return;
          } else e.U && e.U.ee === 1 ? (e.ee = 1, e.U.ee = 0, e.se()) : (e.ee = 1, t = n);
        } else {
          let e = n.U;
          if (e.ee === 1) e.ee = 0, n.ee = 1, n === this.Y ? this.Y = n.se() : n.se();
          else if (e.U && e.U.ee === 1) {
            e.ee = n.ee, n.ee = 0, e.U.ee = 0, n === this.Y ? this.Y = n.se() : n.se();
            return;
          } else e.W && e.W.ee === 1 ? (e.ee = 1, e.W.ee = 0, e.te()) : (e.ee = 1, t = n);
        }
      }
    }
    fe(t) {
      if (this.i === 1) return this.clear(), this.h;
      let n = t;
      for (; n.U || n.W; ) {
        if (n.W) for (n = n.W; n.U; ) n = n.U;
        else n = n.U;
        [t.u, n.u] = [n.u, t.u], [t.l, n.l] = [n.l, t.l], t = n;
      }
      this.h.U === n ? this.h.U = n.tt : this.h.W === n && (this.h.W = n.tt), this.ue(n);
      let e = n.tt;
      return n === e.U ? e.U = void 0 : e.W = void 0, this.i -= 1, this.Y.ee = 0, e;
    }
    oe(t, n) {
      return t === void 0 ? !1 : this.oe(t.U, n) || n(t) ? !0 : this.oe(t.W, n);
    }
    he(t) {
      for (; ; ) {
        let n = t.tt;
        if (n.ee === 0) return;
        let e = n.tt;
        if (n === e.U) {
          let i = e.W;
          if (i && i.ee === 1) {
            if (i.ee = n.ee = 0, e === this.Y) return;
            e.ee = 1, t = e;
            continue;
          } else if (t === n.W) {
            if (t.ee = 0, t.U && (t.U.tt = n), t.W && (t.W.tt = e), n.W = t.U, e.U = t.W, t.U = n, t.W = e, e === this.Y) this.Y = t, this.h.tt = t;
            else {
              let o = e.tt;
              o.U === e ? o.U = t : o.W = t;
            }
            return t.tt = e.tt, n.tt = t, e.tt = t, e.ee = 1, { parentNode: n, grandParent: e, curNode: t };
          } else n.ee = 0, e === this.Y ? this.Y = e.se() : e.se(), e.ee = 1;
        } else {
          let i = e.U;
          if (i && i.ee === 1) {
            if (i.ee = n.ee = 0, e === this.Y) return;
            e.ee = 1, t = e;
            continue;
          } else if (t === n.U) {
            if (t.ee = 0, t.U && (t.U.tt = e), t.W && (t.W.tt = n), e.W = t.U, n.U = t.W, t.U = e, t.W = n, e === this.Y) this.Y = t, this.h.tt = t;
            else {
              let o = e.tt;
              o.U === e ? o.U = t : o.W = t;
            }
            return t.tt = e.tt, n.tt = t, e.tt = t, e.ee = 1, { parentNode: n, grandParent: e, curNode: t };
          } else n.ee = 0, e === this.Y ? this.Y = e.te() : e.te(), e.ee = 1;
        }
        return;
      }
    }
    ne(t, n, e) {
      if (this.Y === void 0) {
        this.i += 1, this.Y = new this.re(t, n), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, this.h.W = this.Y;
        return;
      }
      let i, o = this.h.U, g = this.v(o.u, t);
      if (g === 0) {
        o.l = n;
        return;
      } else if (g > 0) o.U = new this.re(t, n), o.U.tt = o, i = o.U, this.h.U = i;
      else {
        let d = this.h.W, m = this.v(d.u, t);
        if (m === 0) {
          d.l = n;
          return;
        } else if (m < 0) d.W = new this.re(t, n), d.W.tt = d, i = d.W, this.h.W = i;
        else {
          if (e !== void 0) {
            let c = e.o;
            if (c !== this.h) {
              let y = this.v(c.u, t);
              if (y === 0) {
                c.l = n;
                return;
              } else if (y > 0) {
                let b = c.L(), S = this.v(b.u, t);
                if (S === 0) {
                  b.l = n;
                  return;
                } else S < 0 && (i = new this.re(t, n), b.W === void 0 ? (b.W = i, i.tt = b) : (c.U = i, i.tt = c));
              }
            }
          }
          if (i === void 0) for (i = this.Y; ; ) {
            let c = this.v(i.u, t);
            if (c > 0) {
              if (i.U === void 0) {
                i.U = new this.re(t, n), i.U.tt = i, i = i.U;
                break;
              }
              i = i.U;
            } else if (c < 0) {
              if (i.W === void 0) {
                i.W = new this.re(t, n), i.W.tt = i, i = i.W;
                break;
              }
              i = i.W;
            } else {
              i.l = n;
              return;
            }
          }
        }
      }
      return this.i += 1, i;
    }
    I(t, n) {
      for (; t; ) {
        let e = this.v(t.u, n);
        if (e < 0) t = t.W;
        else if (e > 0) t = t.U;
        else return t;
      }
      return t || this.h;
    }
    clear() {
      this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0;
    }
    updateKeyByIterator(t, n) {
      let e = t.o;
      if (e === this.h && (0, a.throwIteratorAccessError)(), this.i === 1) return e.u = n, !0;
      if (e === this.h.U) return this.v(e.B().u, n) > 0 ? (e.u = n, !0) : !1;
      if (e === this.h.W) return this.v(e.L().u, n) < 0 ? (e.u = n, !0) : !1;
      let i = e.L().u;
      if (this.v(i, n) >= 0) return !1;
      let o = e.B().u;
      return this.v(o, n) <= 0 ? !1 : (e.u = n, !0);
    }
    eraseElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n = 0, e = this;
      return this.oe(this.Y, function(i) {
        return t === n ? (e.V(i), !0) : (n += 1, !1);
      }), this.i;
    }
    eraseElementByKey(t) {
      if (this.i === 0) return !1;
      let n = this.I(this.Y, t);
      return n === this.h ? !1 : (this.V(n), !0);
    }
    eraseElementByIterator(t) {
      let n = t.o;
      n === this.h && (0, a.throwIteratorAccessError)();
      let e = n.W === void 0;
      return t.iteratorType === 0 ? e && t.next() : (!e || n.U === void 0) && t.next(), this.V(n), t;
    }
    forEach(t) {
      let n = 0;
      for (let e of this) t(e, n++, this);
    }
    getElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n, e = 0;
      for (let i of this) {
        if (e === t) {
          n = i;
          break;
        }
        e += 1;
      }
      return n;
    }
    getHeight() {
      if (this.i === 0) return 0;
      let t = function(n) {
        return n ? Math.max(t(n.U), t(n.W)) + 1 : 0;
      };
      return t(this.Y);
    }
  }, r = u;
  h.default = r;
}), $s = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = ut(), s = ct(), a = class extends f.ContainerIterator {
    constructor(r, t, n) {
      super(n), this.o = r, this.h = t, this.iteratorType === 0 ? (this.pre = function() {
        return this.o === this.h.U && (0, s.throwIteratorAccessError)(), this.o = this.o.L(), this;
      }, this.next = function() {
        return this.o === this.h && (0, s.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }) : (this.pre = function() {
        return this.o === this.h.W && (0, s.throwIteratorAccessError)(), this.o = this.o.B(), this;
      }, this.next = function() {
        return this.o === this.h && (0, s.throwIteratorAccessError)(), this.o = this.o.L(), this;
      });
    }
    get index() {
      let r = this.o, t = this.h.tt;
      if (r === this.h) return t ? t.rt - 1 : 0;
      let n = 0;
      for (r.U && (n += r.U.rt); r !== t; ) {
        let e = r.tt;
        r === e.W && (n += 1, e.U && (n += e.U.rt)), r = e;
      }
      return n;
    }
  }, u = a;
  h.default = u;
}), Rl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = u(qs()), s = u($s()), a = ct();
  function u(e) {
    return e && e.t ? e : { default: e };
  }
  var r = class zs extends s.default {
    constructor(i, o, g, d) {
      super(i, o, d), this.container = g;
    }
    get pointer() {
      return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new zs(this.o, this.h, this.container, this.iteratorType);
    }
  }, t = class extends f.default {
    constructor(e = [], i, o) {
      super(i, o);
      let g = this;
      e.forEach(function(d) {
        g.insert(d);
      });
    }
    *K(e) {
      e !== void 0 && (yield* this.K(e.U), yield e.u, yield* this.K(e.W));
    }
    begin() {
      return new r(this.h.U || this.h, this.h, this);
    }
    end() {
      return new r(this.h, this.h, this);
    }
    rBegin() {
      return new r(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new r(this.h, this.h, this, 1);
    }
    front() {
      return this.h.U ? this.h.U.u : void 0;
    }
    back() {
      return this.h.W ? this.h.W.u : void 0;
    }
    insert(e, i) {
      return this.M(e, void 0, i);
    }
    find(e) {
      let i = this.I(this.Y, e);
      return new r(i, this.h, this);
    }
    lowerBound(e) {
      let i = this.X(this.Y, e);
      return new r(i, this.h, this);
    }
    upperBound(e) {
      let i = this.Z(this.Y, e);
      return new r(i, this.h, this);
    }
    reverseLowerBound(e) {
      let i = this.$(this.Y, e);
      return new r(i, this.h, this);
    }
    reverseUpperBound(e) {
      let i = this.rr(this.Y, e);
      return new r(i, this.h, this);
    }
    union(e) {
      let i = this;
      return e.forEach(function(o) {
        i.insert(o);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, n = t;
  h.default = n;
}), Cl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = u(qs()), s = u($s()), a = ct();
  function u(e) {
    return e && e.t ? e : { default: e };
  }
  var r = class Vs extends s.default {
    constructor(i, o, g, d) {
      super(i, o, d), this.container = g;
    }
    get pointer() {
      this.o === this.h && (0, a.throwIteratorAccessError)();
      let i = this;
      return new Proxy([], { get(o, g) {
        if (g === "0") return i.o.u;
        if (g === "1") return i.o.l;
      }, set(o, g, d) {
        if (g !== "1") throw new TypeError("props must be 1");
        return i.o.l = d, !0;
      } });
    }
    copy() {
      return new Vs(this.o, this.h, this.container, this.iteratorType);
    }
  }, t = class extends f.default {
    constructor(e = [], i, o) {
      super(i, o);
      let g = this;
      e.forEach(function(d) {
        g.setElement(d[0], d[1]);
      });
    }
    *K(e) {
      e !== void 0 && (yield* this.K(e.U), yield [e.u, e.l], yield* this.K(e.W));
    }
    begin() {
      return new r(this.h.U || this.h, this.h, this);
    }
    end() {
      return new r(this.h, this.h, this);
    }
    rBegin() {
      return new r(this.h.W || this.h, this.h, this, 1);
    }
    rEnd() {
      return new r(this.h, this.h, this, 1);
    }
    front() {
      if (this.i === 0) return;
      let e = this.h.U;
      return [e.u, e.l];
    }
    back() {
      if (this.i === 0) return;
      let e = this.h.W;
      return [e.u, e.l];
    }
    lowerBound(e) {
      let i = this.X(this.Y, e);
      return new r(i, this.h, this);
    }
    upperBound(e) {
      let i = this.Z(this.Y, e);
      return new r(i, this.h, this);
    }
    reverseLowerBound(e) {
      let i = this.$(this.Y, e);
      return new r(i, this.h, this);
    }
    reverseUpperBound(e) {
      let i = this.rr(this.Y, e);
      return new r(i, this.h, this);
    }
    setElement(e, i, o) {
      return this.M(e, i, o);
    }
    find(e) {
      let i = this.I(this.Y, e);
      return new r(i, this.h, this);
    }
    getElementByKey(e) {
      return this.I(this.Y, e).l;
    }
    union(e) {
      let i = this;
      return e.forEach(function(o) {
        i.setElement(o[0], o[1]);
      }), this.i;
    }
    [Symbol.iterator]() {
      return this.K(this.Y);
    }
  }, n = t;
  h.default = n;
}), Ks = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = f;
  function f(s) {
    let a = typeof s;
    return a === "object" && s !== null || a === "function";
  }
}), Hs = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.HashContainerIterator = h.HashContainer = void 0;
  var f = ut(), s = u(Ks()), a = ct();
  function u(n) {
    return n && n.t ? n : { default: n };
  }
  var r = class extends f.ContainerIterator {
    constructor(n, e, i) {
      super(i), this.o = n, this.h = e, this.iteratorType === 0 ? (this.pre = function() {
        return this.o.L === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.L, this;
      }, this.next = function() {
        return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.B, this;
      }) : (this.pre = function() {
        return this.o.B === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.B, this;
      }, this.next = function() {
        return this.o === this.h && (0, a.throwIteratorAccessError)(), this.o = this.o.L, this;
      });
    }
  };
  h.HashContainerIterator = r;
  var t = class extends f.Container {
    constructor() {
      super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h;
    }
    V(n) {
      let { L: e, B: i } = n;
      e.B = i, i.L = e, n === this.p && (this.p = i), n === this._ && (this._ = e), this.i -= 1;
    }
    M(n, e, i) {
      i === void 0 && (i = (0, s.default)(n));
      let o;
      if (i) {
        let g = n[this.HASH_TAG];
        if (g !== void 0) return this.H[g].l = e, this.i;
        Object.defineProperty(n, this.HASH_TAG, { value: this.H.length, configurable: !0 }), o = { u: n, l: e, L: this._, B: this.h }, this.H.push(o);
      } else {
        let g = this.g[n];
        if (g) return g.l = e, this.i;
        o = { u: n, l: e, L: this._, B: this.h }, this.g[n] = o;
      }
      return this.i === 0 ? (this.p = o, this.h.B = o) : this._.B = o, this._ = o, this.h.L = o, ++this.i;
    }
    I(n, e) {
      if (e === void 0 && (e = (0, s.default)(n)), e) {
        let i = n[this.HASH_TAG];
        return i === void 0 ? this.h : this.H[i];
      } else return this.g[n] || this.h;
    }
    clear() {
      let n = this.HASH_TAG;
      this.H.forEach(function(e) {
        delete e.u[n];
      }), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h;
    }
    eraseElementByKey(n, e) {
      let i;
      if (e === void 0 && (e = (0, s.default)(n)), e) {
        let o = n[this.HASH_TAG];
        if (o === void 0) return !1;
        delete n[this.HASH_TAG], i = this.H[o], delete this.H[o];
      } else {
        if (i = this.g[n], i === void 0) return !1;
        delete this.g[n];
      }
      return this.V(i), !0;
    }
    eraseElementByIterator(n) {
      let e = n.o;
      return e === this.h && (0, a.throwIteratorAccessError)(), this.V(e), n.next();
    }
    eraseElementByPos(n) {
      if (n < 0 || n > this.i - 1) throw new RangeError();
      let e = this.p;
      for (; n--; ) e = e.B;
      return this.V(e), this.i;
    }
  };
  h.HashContainer = t;
}), Ml = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = Hs(), s = ct(), a = class Gs extends f.HashContainerIterator {
    constructor(n, e, i, o) {
      super(n, e, o), this.container = i;
    }
    get pointer() {
      return this.o === this.h && (0, s.throwIteratorAccessError)(), this.o.u;
    }
    copy() {
      return new Gs(this.o, this.h, this.container, this.iteratorType);
    }
  }, u = class extends f.HashContainer {
    constructor(t = []) {
      super();
      let n = this;
      t.forEach(function(e) {
        n.insert(e);
      });
    }
    begin() {
      return new a(this.p, this.h, this);
    }
    end() {
      return new a(this.h, this.h, this);
    }
    rBegin() {
      return new a(this._, this.h, this, 1);
    }
    rEnd() {
      return new a(this.h, this.h, this, 1);
    }
    front() {
      return this.p.u;
    }
    back() {
      return this._.u;
    }
    insert(t, n) {
      return this.M(t, void 0, n);
    }
    getElementByPos(t) {
      if (t < 0 || t > this.i - 1) throw new RangeError();
      let n = this.p;
      for (; t--; ) n = n.B;
      return n.u;
    }
    find(t, n) {
      let e = this.I(t, n);
      return new a(e, this.h, this);
    }
    forEach(t) {
      let n = 0, e = this.p;
      for (; e !== this.h; ) t(e.u, n++, this), e = e.B;
    }
    [Symbol.iterator]() {
      return function* () {
        let t = this.p;
        for (; t !== this.h; ) yield t.u, t = t.B;
      }.bind(this)();
    }
  }, r = u;
  h.default = r;
}), jl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), h.default = void 0;
  var f = Hs(), s = u(Ks()), a = ct();
  function u(e) {
    return e && e.t ? e : { default: e };
  }
  var r = class Qs extends f.HashContainerIterator {
    constructor(i, o, g, d) {
      super(i, o, d), this.container = g;
    }
    get pointer() {
      this.o === this.h && (0, a.throwIteratorAccessError)();
      let i = this;
      return new Proxy([], { get(o, g) {
        if (g === "0") return i.o.u;
        if (g === "1") return i.o.l;
      }, set(o, g, d) {
        if (g !== "1") throw new TypeError("props must be 1");
        return i.o.l = d, !0;
      } });
    }
    copy() {
      return new Qs(this.o, this.h, this.container, this.iteratorType);
    }
  }, t = class extends f.HashContainer {
    constructor(e = []) {
      super();
      let i = this;
      e.forEach(function(o) {
        i.setElement(o[0], o[1]);
      });
    }
    begin() {
      return new r(this.p, this.h, this);
    }
    end() {
      return new r(this.h, this.h, this);
    }
    rBegin() {
      return new r(this._, this.h, this, 1);
    }
    rEnd() {
      return new r(this.h, this.h, this, 1);
    }
    front() {
      if (this.i !== 0) return [this.p.u, this.p.l];
    }
    back() {
      if (this.i !== 0) return [this._.u, this._.l];
    }
    setElement(e, i, o) {
      return this.M(e, i, o);
    }
    getElementByKey(e, i) {
      if (i === void 0 && (i = (0, s.default)(e)), i) {
        let g = e[this.HASH_TAG];
        return g !== void 0 ? this.H[g].l : void 0;
      }
      let o = this.g[e];
      return o ? o.l : void 0;
    }
    getElementByPos(e) {
      if (e < 0 || e > this.i - 1) throw new RangeError();
      let i = this.p;
      for (; e--; ) i = i.B;
      return [i.u, i.l];
    }
    find(e, i) {
      let o = this.I(e, i);
      return new r(o, this.h, this);
    }
    forEach(e) {
      let i = 0, o = this.p;
      for (; o !== this.h; ) e([o.u, o.l], i++, this), o = o.B;
    }
    [Symbol.iterator]() {
      return function* () {
        let e = this.p;
        for (; e !== this.h; ) yield [e.u, e.l], e = e.B;
      }.bind(this)();
    }
  }, n = t;
  h.default = n;
}), Nl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "t", { value: !0 }), Object.defineProperty(h, "Deque", { enumerable: !0, get: function() {
    return t.default;
  } }), Object.defineProperty(h, "HashMap", { enumerable: !0, get: function() {
    return o.default;
  } }), Object.defineProperty(h, "HashSet", { enumerable: !0, get: function() {
    return i.default;
  } }), Object.defineProperty(h, "LinkList", { enumerable: !0, get: function() {
    return r.default;
  } }), Object.defineProperty(h, "OrderedMap", { enumerable: !0, get: function() {
    return e.default;
  } }), Object.defineProperty(h, "OrderedSet", { enumerable: !0, get: function() {
    return n.default;
  } }), Object.defineProperty(h, "PriorityQueue", { enumerable: !0, get: function() {
    return a.default;
  } }), Object.defineProperty(h, "Queue", { enumerable: !0, get: function() {
    return s.default;
  } }), Object.defineProperty(h, "Stack", { enumerable: !0, get: function() {
    return f.default;
  } }), Object.defineProperty(h, "Vector", { enumerable: !0, get: function() {
    return u.default;
  } });
  var f = g(Al()), s = g(Il()), a = g(xl()), u = g(Tl()), r = g(Ol()), t = g(kl()), n = g(Rl()), e = g(Cl()), i = g(Ml()), o = g(jl());
  function g(d) {
    return d && d.t ? d : { default: d };
  }
}), Bl = de((h, f) => {
  le(), ce(), ue();
  var s = Nl().OrderedSet, a = at()("number-allocator:trace"), u = at()("number-allocator:error");
  function r(n, e) {
    this.low = n, this.high = e;
  }
  r.prototype.equals = function(n) {
    return this.low === n.low && this.high === n.high;
  }, r.prototype.compare = function(n) {
    return this.low < n.low && this.high < n.low ? -1 : n.low < this.low && n.high < this.low ? 1 : 0;
  };
  function t(n, e) {
    if (!(this instanceof t)) return new t(n, e);
    this.min = n, this.max = e, this.ss = new s([], (i, o) => i.compare(o)), a("Create"), this.clear();
  }
  t.prototype.firstVacant = function() {
    return this.ss.size() === 0 ? null : this.ss.front().low;
  }, t.prototype.alloc = function() {
    if (this.ss.size() === 0) return a("alloc():empty"), null;
    let n = this.ss.begin(), e = n.pointer.low, i = n.pointer.high, o = e;
    return o + 1 <= i ? this.ss.updateKeyByIterator(n, new r(e + 1, i)) : this.ss.eraseElementByPos(0), a("alloc():" + o), o;
  }, t.prototype.use = function(n) {
    let e = new r(n, n), i = this.ss.lowerBound(e);
    if (!i.equals(this.ss.end())) {
      let o = i.pointer.low, g = i.pointer.high;
      return i.pointer.equals(e) ? (this.ss.eraseElementByIterator(i), a("use():" + n), !0) : o > n ? !1 : o === n ? (this.ss.updateKeyByIterator(i, new r(o + 1, g)), a("use():" + n), !0) : g === n ? (this.ss.updateKeyByIterator(i, new r(o, g - 1)), a("use():" + n), !0) : (this.ss.updateKeyByIterator(i, new r(n + 1, g)), this.ss.insert(new r(o, n - 1)), a("use():" + n), !0);
    }
    return a("use():failed"), !1;
  }, t.prototype.free = function(n) {
    if (n < this.min || n > this.max) {
      u("free():" + n + " is out of range");
      return;
    }
    let e = new r(n, n), i = this.ss.upperBound(e);
    if (i.equals(this.ss.end())) {
      if (i.equals(this.ss.begin())) {
        this.ss.insert(e);
        return;
      }
      i.pre();
      let o = i.pointer.high;
      i.pointer.high + 1 === n ? this.ss.updateKeyByIterator(i, new r(o, n)) : this.ss.insert(e);
    } else if (i.equals(this.ss.begin())) if (n + 1 === i.pointer.low) {
      let o = i.pointer.high;
      this.ss.updateKeyByIterator(i, new r(n, o));
    } else this.ss.insert(e);
    else {
      let o = i.pointer.low, g = i.pointer.high;
      i.pre();
      let d = i.pointer.low;
      i.pointer.high + 1 === n ? n + 1 === o ? (this.ss.eraseElementByIterator(i), this.ss.updateKeyByIterator(i, new r(d, g))) : this.ss.updateKeyByIterator(i, new r(d, n)) : n + 1 === o ? (this.ss.eraseElementByIterator(i.next()), this.ss.insert(new r(n, g))) : this.ss.insert(e);
    }
    a("free():" + n);
  }, t.prototype.clear = function() {
    a("clear()"), this.ss.clear(), this.ss.insert(new r(this.min, this.max));
  }, t.prototype.intervalCount = function() {
    return this.ss.size();
  }, t.prototype.dump = function() {
    console.log("length:" + this.ss.size());
    for (let n of this.ss) console.log(n);
  }, f.exports = t;
}), Ys = de((h, f) => {
  le(), ce(), ue();
  var s = Bl();
  f.exports.NumberAllocator = s;
}), Ul = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = El(), s = Ys(), a = class {
    aliasToTopic;
    topicToAlias;
    max;
    numberAllocator;
    length;
    constructor(u) {
      u > 0 && (this.aliasToTopic = new f.LRUCache({ max: u }), this.topicToAlias = {}, this.numberAllocator = new s.NumberAllocator(1, u), this.max = u, this.length = 0);
    }
    put(u, r) {
      if (r === 0 || r > this.max) return !1;
      let t = this.aliasToTopic.get(r);
      return t && delete this.topicToAlias[t], this.aliasToTopic.set(r, u), this.topicToAlias[u] = r, this.numberAllocator.use(r), this.length = this.aliasToTopic.size, !0;
    }
    getTopicByAlias(u) {
      return this.aliasToTopic.get(u);
    }
    getAliasByTopic(u) {
      let r = this.topicToAlias[u];
      return typeof r < "u" && this.aliasToTopic.get(r), r;
    }
    clear() {
      this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0;
    }
    getLruAlias() {
      return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1];
    }
  };
  h.default = a;
}), Ll = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(t) {
    return t && t.__esModule ? t : { default: t };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var s = Pr(), a = f(Ul()), u = Nt(), r = (t, n) => {
    t.log("_handleConnack");
    let { options: e } = t, i = e.protocolVersion === 5 ? n.reasonCode : n.returnCode;
    if (clearTimeout(t.connackTimer), delete t.topicAliasSend, n.properties) {
      if (n.properties.topicAliasMaximum) {
        if (n.properties.topicAliasMaximum > 65535) {
          t.emit("error", new Error("topicAliasMaximum from broker is out of range"));
          return;
        }
        n.properties.topicAliasMaximum > 0 && (t.topicAliasSend = new a.default(n.properties.topicAliasMaximum));
      }
      n.properties.serverKeepAlive && e.keepalive && (e.keepalive = n.properties.serverKeepAlive), n.properties.maximumPacketSize && (e.properties || (e.properties = {}), e.properties.maximumPacketSize = n.properties.maximumPacketSize);
    }
    if (i === 0) t.reconnecting = !1, t._onConnect(n);
    else if (i > 0) {
      let o = new u.ErrorWithReasonCode(`Connection refused: ${s.ReasonCodes[i]}`, i);
      t.emit("error", o), t.options.reconnectOnConnackError && t._cleanUp(!0);
    }
  };
  h.default = r;
}), Dl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = (s, a, u) => {
    s.log("handling pubrel packet");
    let r = typeof u < "u" ? u : s.noop, { messageId: t } = a, n = { cmd: "pubcomp", messageId: t };
    s.incomingStore.get(a, (e, i) => {
      e ? s._sendPacket(n, r) : (s.emit("message", i.topic, i.payload, i), s.handleMessage(i, (o) => {
        if (o) return r(o);
        s.incomingStore.del(i, s.noop), s._sendPacket(n, r);
      }));
    });
  };
  h.default = f;
}), Fl = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var s = f(wl()), a = f(Sl()), u = f(Ll()), r = f(Pr()), t = f(Dl()), n = (e, i, o) => {
    let { options: g } = e;
    if (g.protocolVersion === 5 && g.properties && g.properties.maximumPacketSize && g.properties.maximumPacketSize < i.length) return e.emit("error", new Error(`exceeding packets size ${i.cmd}`)), e.end({ reasonCode: 149, properties: { reasonString: "Maximum packet size was exceeded" } }), e;
    switch (e.log("_handlePacket :: emitting packetreceive"), e.emit("packetreceive", i), i.cmd) {
      case "publish":
        (0, s.default)(e, i, o);
        break;
      case "puback":
      case "pubrec":
      case "pubcomp":
      case "suback":
      case "unsuback":
        e.reschedulePing(), (0, r.default)(e, i), o();
        break;
      case "pubrel":
        e.reschedulePing(), (0, t.default)(e, i, o);
        break;
      case "connack":
        (0, u.default)(e, i), o();
        break;
      case "auth":
        e.reschedulePing(), (0, a.default)(e, i), o();
        break;
      case "pingresp":
        e.log("_handlePacket :: received pingresp"), e.reschedulePing(!0), o();
        break;
      case "disconnect":
        e.emit("disconnect", i), o();
        break;
      default:
        e.log("_handlePacket :: unknown command"), o();
        break;
    }
  };
  h.default = n;
}), Js = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = class {
    nextId;
    constructor() {
      this.nextId = Math.max(1, Math.floor(Math.random() * 65535));
    }
    allocate() {
      let s = this.nextId++;
      return this.nextId === 65536 && (this.nextId = 1), s;
    }
    getLastAllocated() {
      return this.nextId === 1 ? 65535 : this.nextId - 1;
    }
    register(s) {
      return !0;
    }
    deallocate(s) {
    }
    clear() {
    }
  };
  h.default = f;
}), Wl = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = class {
    aliasToTopic;
    max;
    length;
    constructor(s) {
      this.aliasToTopic = {}, this.max = s;
    }
    put(s, a) {
      return a === 0 || a > this.max ? !1 : (this.aliasToTopic[a] = s, this.length = Object.keys(this.aliasToTopic).length, !0);
    }
    getTopicByAlias(s) {
      return this.aliasToTopic[s];
    }
    clear() {
      this.aliasToTopic = {};
    }
  };
  h.default = f;
}), ql = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(h, "__esModule", { value: !0 }), h.TypedEventEmitter = void 0;
  var s = f((At(), Pe(yt))), a = Nt(), u = class {
  };
  h.TypedEventEmitter = u, (0, a.applyMixin)(u, s.default);
}), Rr = de((h, f) => {
  le(), ce(), ue();
  function s(a) {
    "@babel/helpers - typeof";
    return f.exports = s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
      return typeof u;
    } : function(u) {
      return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
    }, f.exports.__esModule = !0, f.exports.default = f.exports, s(a);
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), $l = de((h, f) => {
  le(), ce(), ue();
  var s = Rr().default;
  function a(u, r) {
    if (s(u) != "object" || !u) return u;
    var t = u[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(u, r || "default");
      if (s(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(u);
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), zl = de((h, f) => {
  le(), ce(), ue();
  var s = Rr().default, a = $l();
  function u(r) {
    var t = a(r, "string");
    return s(t) == "symbol" ? t : t + "";
  }
  f.exports = u, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Vl = de((h, f) => {
  le(), ce(), ue();
  var s = zl();
  function a(u, r, t) {
    return (r = s(r)) in u ? Object.defineProperty(u, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : u[r] = t, u;
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Kl = de((h, f) => {
  le(), ce(), ue();
  function s(a) {
    if (Array.isArray(a)) return a;
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Hl = de((h, f) => {
  le(), ce(), ue();
  function s(a, u) {
    var r = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
    if (r != null) {
      var t, n, e, i, o = [], g = !0, d = !1;
      try {
        if (e = (r = r.call(a)).next, u === 0) {
          if (Object(r) !== r) return;
          g = !1;
        } else for (; !(g = (t = e.call(r)).done) && (o.push(t.value), o.length !== u); g = !0) ;
      } catch (m) {
        d = !0, n = m;
      } finally {
        try {
          if (!g && r.return != null && (i = r.return(), Object(i) !== i)) return;
        } finally {
          if (d) throw n;
        }
      }
      return o;
    }
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Gl = de((h, f) => {
  le(), ce(), ue();
  function s(a, u) {
    (u == null || u > a.length) && (u = a.length);
    for (var r = 0, t = Array(u); r < u; r++) t[r] = a[r];
    return t;
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Ql = de((h, f) => {
  le(), ce(), ue();
  var s = Gl();
  function a(u, r) {
    if (u) {
      if (typeof u == "string") return s(u, r);
      var t = {}.toString.call(u).slice(8, -1);
      return t === "Object" && u.constructor && (t = u.constructor.name), t === "Map" || t === "Set" ? Array.from(u) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(u, r) : void 0;
    }
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Yl = de((h, f) => {
  le(), ce(), ue();
  function s() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Jl = de((h, f) => {
  le(), ce(), ue();
  var s = Kl(), a = Hl(), u = Ql(), r = Yl();
  function t(n, e) {
    return s(n) || a(n, e) || u(n, e) || r();
  }
  f.exports = t, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Xs = de((h, f) => {
  le(), ce(), ue(), (function(s, a) {
    typeof h == "object" && typeof f < "u" ? a(h) : typeof define == "function" && define.amd ? define(["exports"], a) : (s = typeof globalThis < "u" ? globalThis : s || self, a(s.fastUniqueNumbers = {}));
  })(h, function(s) {
    var a = function(m) {
      return function(c) {
        var y = m(c);
        return c.add(y), y;
      };
    }, u = function(m) {
      return function(c, y) {
        return m.set(c, y), y;
      };
    }, r = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER, t = 536870912, n = t * 2, e = function(m, c) {
      return function(y) {
        var b = c.get(y), S = b === void 0 ? y.size : b < n ? b + 1 : 0;
        if (!y.has(S)) return m(y, S);
        if (y.size < t) {
          for (; y.has(S); ) S = Math.floor(Math.random() * n);
          return m(y, S);
        }
        if (y.size > r) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
        for (; y.has(S); ) S = Math.floor(Math.random() * r);
        return m(y, S);
      };
    }, i = /* @__PURE__ */ new WeakMap(), o = u(i), g = e(o, i), d = a(g);
    s.addUniqueNumber = d, s.generateUniqueNumber = g;
  });
}), Xl = de((h, f) => {
  le(), ce(), ue();
  function s(u, r, t, n, e, i, o) {
    try {
      var g = u[i](o), d = g.value;
    } catch (m) {
      return void t(m);
    }
    g.done ? r(d) : Promise.resolve(d).then(n, e);
  }
  function a(u) {
    return function() {
      var r = this, t = arguments;
      return new Promise(function(n, e) {
        var i = u.apply(r, t);
        function o(d) {
          s(i, n, e, o, g, "next", d);
        }
        function g(d) {
          s(i, n, e, o, g, "throw", d);
        }
        o(void 0);
      });
    };
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Zs = de((h, f) => {
  le(), ce(), ue();
  function s(a, u) {
    this.v = a, this.k = u;
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), ea = de((h, f) => {
  le(), ce(), ue();
  function s(a, u, r, t) {
    var n = Object.defineProperty;
    try {
      n({}, "", {});
    } catch {
      n = 0;
    }
    f.exports = s = function(e, i, o, g) {
      function d(m, c) {
        s(e, m, function(y) {
          return this._invoke(m, c, y);
        });
      }
      i ? n ? n(e, i, { value: o, enumerable: !g, configurable: !g, writable: !g }) : e[i] = o : (d("next", 0), d("throw", 1), d("return", 2));
    }, f.exports.__esModule = !0, f.exports.default = f.exports, s(a, u, r, t);
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), ta = de((h, f) => {
  le(), ce(), ue();
  var s = ea();
  function a() {
    var u, r, t = typeof Symbol == "function" ? Symbol : {}, n = t.iterator || "@@iterator", e = t.toStringTag || "@@toStringTag";
    function i(S, p, _, I) {
      var v = p && p.prototype instanceof g ? p : g, A = Object.create(v.prototype);
      return s(A, "_invoke", (function(E, T, C) {
        var P, L, O, q = 0, D = C || [], B = !1, ae = { p: 0, n: 0, v: u, a: Q, f: Q.bind(u, 4), d: function(K, re) {
          return P = K, L = 0, O = u, ae.n = re, o;
        } };
        function Q(K, re) {
          for (L = K, O = re, r = 0; !B && q && !F && r < D.length; r++) {
            var F, Z = D[r], R = ae.p, J = Z[2];
            K > 3 ? (F = J === re) && (O = Z[(L = Z[4]) ? 5 : (L = 3, 3)], Z[4] = Z[5] = u) : Z[0] <= R && ((F = K < 2 && R < Z[1]) ? (L = 0, ae.v = re, ae.n = Z[1]) : R < J && (F = K < 3 || Z[0] > re || re > J) && (Z[4] = K, Z[5] = re, ae.n = J, L = 0));
          }
          if (F || K > 1) return o;
          throw B = !0, re;
        }
        return function(K, re, F) {
          if (q > 1) throw TypeError("Generator is already running");
          for (B && re === 1 && Q(re, F), L = re, O = F; (r = L < 2 ? u : O) || !B; ) {
            P || (L ? L < 3 ? (L > 1 && (ae.n = -1), Q(L, O)) : ae.n = O : ae.v = O);
            try {
              if (q = 2, P) {
                if (L || (K = "next"), r = P[K]) {
                  if (!(r = r.call(P, O))) throw TypeError("iterator result is not an object");
                  if (!r.done) return r;
                  O = r.value, L < 2 && (L = 0);
                } else L === 1 && (r = P.return) && r.call(P), L < 2 && (O = TypeError("The iterator does not provide a '" + K + "' method"), L = 1);
                P = u;
              } else if ((r = (B = ae.n < 0) ? O : E.call(T, ae)) !== o) break;
            } catch (Z) {
              P = u, L = 1, O = Z;
            } finally {
              q = 1;
            }
          }
          return { value: r, done: B };
        };
      })(S, _, I), !0), A;
    }
    var o = {};
    function g() {
    }
    function d() {
    }
    function m() {
    }
    r = Object.getPrototypeOf;
    var c = [][n] ? r(r([][n]())) : (s(r = {}, n, function() {
      return this;
    }), r), y = m.prototype = g.prototype = Object.create(c);
    function b(S) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(S, m) : (S.__proto__ = m, s(S, e, "GeneratorFunction")), S.prototype = Object.create(y), S;
    }
    return d.prototype = m, s(y, "constructor", m), s(m, "constructor", d), d.displayName = "GeneratorFunction", s(m, e, "GeneratorFunction"), s(y), s(y, e, "Generator"), s(y, n, function() {
      return this;
    }), s(y, "toString", function() {
      return "[object Generator]";
    }), (f.exports = a = function() {
      return { w: i, m: b };
    }, f.exports.__esModule = !0, f.exports.default = f.exports)();
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), ra = de((h, f) => {
  le(), ce(), ue();
  var s = Zs(), a = ea();
  function u(r, t) {
    function n(i, o, g, d) {
      try {
        var m = r[i](o), c = m.value;
        return c instanceof s ? t.resolve(c.v).then(function(y) {
          n("next", y, g, d);
        }, function(y) {
          n("throw", y, g, d);
        }) : t.resolve(c).then(function(y) {
          m.value = y, g(m);
        }, function(y) {
          return n("throw", y, g, d);
        });
      } catch (y) {
        d(y);
      }
    }
    var e;
    this.next || (a(u.prototype), a(u.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
      return this;
    })), a(this, "_invoke", function(i, o, g) {
      function d() {
        return new t(function(m, c) {
          n(i, g, m, c);
        });
      }
      return e = e ? e.then(d, d) : d();
    }, !0);
  }
  f.exports = u, f.exports.__esModule = !0, f.exports.default = f.exports;
}), na = de((h, f) => {
  le(), ce(), ue();
  var s = ta(), a = ra();
  function u(r, t, n, e, i) {
    return new a(s().w(r, t, n, e), i || Promise);
  }
  f.exports = u, f.exports.__esModule = !0, f.exports.default = f.exports;
}), Zl = de((h, f) => {
  le(), ce(), ue();
  var s = na();
  function a(u, r, t, n, e) {
    var i = s(u, r, t, n, e);
    return i.next().then(function(o) {
      return o.done ? o.value : i.next();
    });
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), eu = de((h, f) => {
  le(), ce(), ue();
  function s(a) {
    var u = Object(a), r = [];
    for (var t in u) r.unshift(t);
    return function n() {
      for (; r.length; ) if ((t = r.pop()) in u) return n.value = t, n.done = !1, n;
      return n.done = !0, n;
    };
  }
  f.exports = s, f.exports.__esModule = !0, f.exports.default = f.exports;
}), tu = de((h, f) => {
  le(), ce(), ue();
  var s = Rr().default;
  function a(u) {
    if (u != null) {
      var r = u[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], t = 0;
      if (r) return r.call(u);
      if (typeof u.next == "function") return u;
      if (!isNaN(u.length)) return { next: function() {
        return u && t >= u.length && (u = void 0), { value: u && u[t++], done: !u };
      } };
    }
    throw new TypeError(s(u) + " is not iterable");
  }
  f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports;
}), ru = de((h, f) => {
  le(), ce(), ue();
  var s = Zs(), a = ta(), u = Zl(), r = na(), t = ra(), n = eu(), e = tu();
  function i() {
    var o = a(), g = o.m(i), d = (Object.getPrototypeOf ? Object.getPrototypeOf(g) : g.__proto__).constructor;
    function m(b) {
      var S = typeof b == "function" && b.constructor;
      return !!S && (S === d || (S.displayName || S.name) === "GeneratorFunction");
    }
    var c = { throw: 1, return: 2, break: 3, continue: 3 };
    function y(b) {
      var S, p;
      return function(_) {
        S || (S = { stop: function() {
          return p(_.a, 2);
        }, catch: function() {
          return _.v;
        }, abrupt: function(I, v) {
          return p(_.a, c[I], v);
        }, delegateYield: function(I, v, A) {
          return S.resultName = v, p(_.d, e(I), A);
        }, finish: function(I) {
          return p(_.f, I);
        } }, p = function(I, v, A) {
          _.p = S.prev, _.n = S.next;
          try {
            return I(v, A);
          } finally {
            S.next = _.n;
          }
        }), S.resultName && (S[S.resultName] = _.v, S.resultName = void 0), S.sent = _.v, S.next = _.n;
        try {
          return b.call(this, S);
        } finally {
          _.p = S.prev, _.n = S.next;
        }
      };
    }
    return (f.exports = i = function() {
      return { wrap: function(b, S, p, _) {
        return o.w(y(b), S, p, _ && _.reverse());
      }, isGeneratorFunction: m, mark: o.m, awrap: function(b, S) {
        return new s(b, S);
      }, AsyncIterator: t, async: function(b, S, p, _, I) {
        return (m(S) ? r : u)(y(b), S, p, _, I);
      }, keys: n, values: e };
    }, f.exports.__esModule = !0, f.exports.default = f.exports)();
  }
  f.exports = i, f.exports.__esModule = !0, f.exports.default = f.exports;
}), nu = de((h, f) => {
  le(), ce(), ue();
  var s = ru()();
  f.exports = s;
  try {
    regeneratorRuntime = s;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = s : Function("r", "regeneratorRuntime = r")(s);
  }
}), iu = de((h, f) => {
  le(), ce(), ue(), (function(s, a) {
    typeof h == "object" && typeof f < "u" ? a(h, Vl(), Jl(), Xs(), Xl(), nu()) : typeof define == "function" && define.amd ? define(["exports", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/slicedToArray", "fast-unique-numbers", "@babel/runtime/helpers/asyncToGenerator", "@babel/runtime/regenerator"], a) : (s = typeof globalThis < "u" ? globalThis : s || self, a(s.brokerFactory = {}, s._defineProperty, s._slicedToArray, s.fastUniqueNumbers, s._asyncToGenerator, s._regeneratorRuntime));
  })(h, function(s, a, u, r, t, n) {
    var e = function(p) {
      return typeof p.start == "function";
    }, i = /* @__PURE__ */ new WeakMap();
    function o(p, _) {
      var I = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(p);
        _ && (v = v.filter(function(A) {
          return Object.getOwnPropertyDescriptor(p, A).enumerable;
        })), I.push.apply(I, v);
      }
      return I;
    }
    function g(p) {
      for (var _ = 1; _ < arguments.length; _++) {
        var I = arguments[_] != null ? arguments[_] : {};
        _ % 2 ? o(Object(I), !0).forEach(function(v) {
          a(p, v, I[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(I)) : o(Object(I)).forEach(function(v) {
          Object.defineProperty(p, v, Object.getOwnPropertyDescriptor(I, v));
        });
      }
      return p;
    }
    var d = function(p) {
      return g(g({}, p), {}, { connect: function(_) {
        var I = _.call;
        return t(n.mark(function v() {
          var A, E, T, C;
          return n.wrap(function(P) {
            for (; ; ) switch (P.prev = P.next) {
              case 0:
                return A = new MessageChannel(), E = A.port1, T = A.port2, P.next = 1, I("connect", { port: E }, [E]);
              case 1:
                return C = P.sent, i.set(T, C), P.abrupt("return", T);
              case 2:
              case "end":
                return P.stop();
            }
          }, v);
        }));
      }, disconnect: function(_) {
        var I = _.call;
        return (function() {
          var v = t(n.mark(function A(E) {
            var T;
            return n.wrap(function(C) {
              for (; ; ) switch (C.prev = C.next) {
                case 0:
                  if (T = i.get(E), T !== void 0) {
                    C.next = 1;
                    break;
                  }
                  throw new Error("The given port is not connected.");
                case 1:
                  return C.next = 2, I("disconnect", { portId: T });
                case 2:
                case "end":
                  return C.stop();
              }
            }, A);
          }));
          return function(A) {
            return v.apply(this, arguments);
          };
        })();
      }, isSupported: function(_) {
        var I = _.call;
        return function() {
          return I("isSupported");
        };
      } });
    };
    function m(p, _) {
      var I = Object.keys(p);
      if (Object.getOwnPropertySymbols) {
        var v = Object.getOwnPropertySymbols(p);
        _ && (v = v.filter(function(A) {
          return Object.getOwnPropertyDescriptor(p, A).enumerable;
        })), I.push.apply(I, v);
      }
      return I;
    }
    function c(p) {
      for (var _ = 1; _ < arguments.length; _++) {
        var I = arguments[_] != null ? arguments[_] : {};
        _ % 2 ? m(Object(I), !0).forEach(function(v) {
          a(p, v, I[v]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(I)) : m(Object(I)).forEach(function(v) {
          Object.defineProperty(p, v, Object.getOwnPropertyDescriptor(I, v));
        });
      }
      return p;
    }
    var y = /* @__PURE__ */ new WeakMap(), b = function(p) {
      if (y.has(p)) return y.get(p);
      var _ = /* @__PURE__ */ new Map();
      return y.set(p, _), _;
    }, S = function(p) {
      var _ = d(p);
      return function(I) {
        var v = b(I);
        I.addEventListener("message", function(D) {
          var B = D.data, ae = B.id;
          if (ae !== null && v.has(ae)) {
            var Q = v.get(ae), K = Q.reject, re = Q.resolve;
            v.delete(ae), B.error === void 0 ? re(B.result) : K(new Error(B.error.message));
          }
        }), e(I) && I.start();
        for (var A = function(D) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          return new Promise(function(Q, K) {
            var re = r.generateUniqueNumber(v);
            v.set(re, { reject: K, resolve: Q }), B === null ? I.postMessage({ id: re, method: D }, ae) : I.postMessage({ id: re, method: D, params: B }, ae);
          });
        }, E = function(D, B) {
          var ae = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
          I.postMessage({ id: null, method: D, params: B }, ae);
        }, T = {}, C = 0, P = Object.entries(_); C < P.length; C++) {
          var L = u(P[C], 2), O = L[0], q = L[1];
          T = c(c({}, T), {}, a({}, O, q({ call: A, notify: E })));
        }
        return c({}, T);
      };
    };
    s.createBroker = S;
  });
}), ou = de((h, f) => {
  le(), ce(), ue(), (function(s, a) {
    typeof h == "object" && typeof f < "u" ? a(h, Rr(), iu(), Xs()) : typeof define == "function" && define.amd ? define(["exports", "@babel/runtime/helpers/typeof", "broker-factory", "fast-unique-numbers"], a) : (s = typeof globalThis < "u" ? globalThis : s || self, a(s.workerTimersBroker = {}, s._typeof, s.brokerFactory, s.fastUniqueNumbers));
  })(h, function(s, a, u, r) {
    var t = /* @__PURE__ */ new Map([[0, null]]), n = /* @__PURE__ */ new Map([[0, null]]), e = u.createBroker({ clearInterval: function(o) {
      var g = o.call;
      return function(d) {
        a(t.get(d)) === "symbol" && (t.set(d, null), g("clear", { timerId: d, timerType: "interval" }).then(function() {
          t.delete(d);
        }));
      };
    }, clearTimeout: function(o) {
      var g = o.call;
      return function(d) {
        a(n.get(d)) === "symbol" && (n.set(d, null), g("clear", { timerId: d, timerType: "timeout" }).then(function() {
          n.delete(d);
        }));
      };
    }, setInterval: function(o) {
      var g = o.call;
      return function(d) {
        for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, c = arguments.length, y = new Array(c > 2 ? c - 2 : 0), b = 2; b < c; b++) y[b - 2] = arguments[b];
        var S = Symbol(), p = r.generateUniqueNumber(t);
        t.set(p, S);
        var _ = function() {
          return g("set", { delay: m, now: performance.timeOrigin + performance.now(), timerId: p, timerType: "interval" }).then(function() {
            var I = t.get(p);
            if (I === void 0) throw new Error("The timer is in an undefined state.");
            I === S && (d.apply(void 0, y), t.get(p) === S && _());
          });
        };
        return _(), p;
      };
    }, setTimeout: function(o) {
      var g = o.call;
      return function(d) {
        for (var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, c = arguments.length, y = new Array(c > 2 ? c - 2 : 0), b = 2; b < c; b++) y[b - 2] = arguments[b];
        var S = Symbol(), p = r.generateUniqueNumber(n);
        return n.set(p, S), g("set", { delay: m, now: performance.timeOrigin + performance.now(), timerId: p, timerType: "timeout" }).then(function() {
          var _ = n.get(p);
          if (_ === void 0) throw new Error("The timer is in an undefined state.");
          _ === S && (n.delete(p), d.apply(void 0, y));
        }), p;
      };
    } }), i = function(o) {
      var g = new Worker(o);
      return e(g);
    };
    s.load = i, s.wrap = e;
  });
}), su = de((h, f) => {
  le(), ce(), ue(), (function(s, a) {
    typeof h == "object" && typeof f < "u" ? a(h, ou()) : typeof define == "function" && define.amd ? define(["exports", "worker-timers-broker"], a) : (s = typeof globalThis < "u" ? globalThis : s || self, a(s.workerTimers = {}, s.workerTimersBroker));
  })(h, function(s, a) {
    var u = function(g, d) {
      var m = null;
      return function() {
        if (m !== null) return m;
        var c = new Blob([d], { type: "application/javascript; charset=utf-8" }), y = URL.createObjectURL(c);
        return m = g(y), setTimeout(function() {
          return URL.revokeObjectURL(y);
        }), m;
      };
    }, r = `(()=>{var e={45:(e,t,r)=>{var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,t,r)=>{var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},156:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},172:e=>{e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},293:e=>{function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},373:e=>{e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},472:function(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise((function(t){e.set(a,[r(n,s,i,e,t,a),t])}))}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark((function e(r){var n,o,u;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark((function e(r){var n,o,u,a,i;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},546:e=>{function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){if(r)a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n;else{var u=function(r,n){t(e,r,(function(e){return this._invoke(r,n,e)}))};u("next",0),u("throw",1),u("return",2)}},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,t,r)=>{var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},623:function(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark((function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise((function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,(function(){u(),r.close(),x.delete(a)})),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark((function e(){var t,n,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},633:(e,t,r)=>{var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,t,r)=>{var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},715:(e,t,r)=>{var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,t,r)=>{var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},752:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},756:(e,t,r)=>{var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},791:(e,t,r)=>{var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then((function(e){u("next",e,a,i)}),(function(e){u("throw",e,a,i)})):r.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return u("throw",e,a,i)}))}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),o(this,"_invoke",(function(e,t,n){function o(){return new r((function(t,r){u(e,n,t,r)}))}return a=a?a.then(o,o):o()}),!0)},e.exports.__esModule=!0,e.exports.default=e.exports},869:(e,t,r)=>{var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then((function(e){return e.done?e.value:a.next()}))},e.exports.__esModule=!0,e.exports.default=e.exports},887:(e,t,r)=>{var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},987:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},993:(e,t,r)=>{var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,(function(){return this})),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,(function(){return this})),n(v,"toString",(function(){return"[object Generator]"})),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`, t = u(a.load, r), n = function(g) {
      return t().clearInterval(g);
    }, e = function(g) {
      return t().clearTimeout(g);
    }, i = function() {
      var g;
      return (g = t()).setInterval.apply(g, arguments);
    }, o = function() {
      var g;
      return (g = t()).setTimeout.apply(g, arguments);
    };
    s.clearInterval = n, s.clearTimeout = e, s.setInterval = i, s.setTimeout = o;
  });
}), Cr = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.isReactNativeBrowser = h.isWebWorker = void 0;
  var f = () => typeof window < "u" ? typeof navigator < "u" && navigator.userAgent?.toLowerCase().indexOf(" electron/") > -1 && Re?.versions ? !Object.prototype.hasOwnProperty.call(Re.versions, "electron") : typeof window.document < "u" : !1, s = () => !!(typeof self == "object" && self?.constructor?.name?.includes("WorkerGlobalScope") && typeof Deno > "u"), a = () => typeof navigator < "u" && navigator.product === "ReactNative", u = f() || s() || a();
  h.isWebWorker = s(), h.isReactNativeBrowser = a(), h.default = u;
}), au = de((h) => {
  le(), ce(), ue();
  var f = h && h.__createBinding || (Object.create ? function(i, o, g, d) {
    d === void 0 && (d = g);
    var m = Object.getOwnPropertyDescriptor(o, g);
    (!m || ("get" in m ? !o.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: function() {
      return o[g];
    } }), Object.defineProperty(i, d, m);
  } : function(i, o, g, d) {
    d === void 0 && (d = g), i[d] = o[g];
  }), s = h && h.__setModuleDefault || (Object.create ? function(i, o) {
    Object.defineProperty(i, "default", { enumerable: !0, value: o });
  } : function(i, o) {
    i.default = o;
  }), a = h && h.__importStar || /* @__PURE__ */ (function() {
    var i = function(o) {
      return i = Object.getOwnPropertyNames || function(g) {
        var d = [];
        for (var m in g) Object.prototype.hasOwnProperty.call(g, m) && (d[d.length] = m);
        return d;
      }, i(o);
    };
    return function(o) {
      if (o && o.__esModule) return o;
      var g = {};
      if (o != null) for (var d = i(o), m = 0; m < d.length; m++) d[m] !== "default" && f(g, o, d[m]);
      return s(g, o), g;
    };
  })();
  Object.defineProperty(h, "__esModule", { value: !0 });
  var u = su(), r = a(Cr()), t = { set: u.setInterval, clear: u.clearInterval }, n = { set: (i, o) => setInterval(i, o), clear: (i) => clearInterval(i) }, e = (i) => {
    switch (i) {
      case "native":
        return n;
      case "worker":
        return t;
      case "auto":
      default:
        return r.default && !r.isWebWorker && !r.isReactNativeBrowser ? t : n;
    }
  };
  h.default = e;
}), ia = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var s = f(au()), a = class {
    _keepalive;
    timerId;
    timer;
    destroyed = !1;
    counter;
    client;
    _keepaliveTimeoutTimestamp;
    _intervalEvery;
    get keepaliveTimeoutTimestamp() {
      return this._keepaliveTimeoutTimestamp;
    }
    get intervalEvery() {
      return this._intervalEvery;
    }
    get keepalive() {
      return this._keepalive;
    }
    constructor(u, r) {
      this.client = u, this.timer = typeof r == "object" && "set" in r && "clear" in r ? r : (0, s.default)(r), this.setKeepalive(u.options.keepalive);
    }
    clear() {
      this.timerId && (this.timer.clear(this.timerId), this.timerId = null);
    }
    setKeepalive(u) {
      if (u *= 1e3, isNaN(u) || u <= 0 || u > 2147483647) throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${u}`);
      this._keepalive = u, this.reschedule(), this.client.log(`KeepaliveManager: set keepalive to ${u}ms`);
    }
    destroy() {
      this.clear(), this.destroyed = !0;
    }
    reschedule() {
      if (this.destroyed) return;
      this.clear(), this.counter = 0;
      let u = Math.ceil(this._keepalive * 1.5);
      this._keepaliveTimeoutTimestamp = Date.now() + u, this._intervalEvery = Math.ceil(this._keepalive / 2), this.timerId = this.timer.set(() => {
        this.destroyed || (this.counter += 1, this.counter === 2 ? this.client.sendPing() : this.counter > 2 && this.client.onKeepaliveTimeout());
      }, this._intervalEvery);
    }
  };
  h.default = a;
}), Kn = de((h) => {
  le(), ce(), ue();
  var f = h && h.__createBinding || (Object.create ? function(v, A, E, T) {
    T === void 0 && (T = E);
    var C = Object.getOwnPropertyDescriptor(A, E);
    (!C || ("get" in C ? !A.__esModule : C.writable || C.configurable)) && (C = { enumerable: !0, get: function() {
      return A[E];
    } }), Object.defineProperty(v, T, C);
  } : function(v, A, E, T) {
    T === void 0 && (T = E), v[T] = A[E];
  }), s = h && h.__setModuleDefault || (Object.create ? function(v, A) {
    Object.defineProperty(v, "default", { enumerable: !0, value: A });
  } : function(v, A) {
    v.default = A;
  }), a = h && h.__importStar || /* @__PURE__ */ (function() {
    var v = function(A) {
      return v = Object.getOwnPropertyNames || function(E) {
        var T = [];
        for (var C in E) Object.prototype.hasOwnProperty.call(E, C) && (T[T.length] = C);
        return T;
      }, v(A);
    };
    return function(A) {
      if (A && A.__esModule) return A;
      var E = {};
      if (A != null) for (var T = v(A), C = 0; C < T.length; C++) T[C] !== "default" && f(E, A, T[C]);
      return s(E, A), E;
    };
  })(), u = h && h.__importDefault || function(v) {
    return v && v.__esModule ? v : { default: v };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var r = u(yl()), t = xt(), n = u(ml()), e = u(at()), i = a(vl()), o = u(js()), g = u(Fl()), d = u(Js()), m = u(Wl()), c = Nt(), y = ql(), b = u(ia()), S = a(Cr()), p = globalThis.setImmediate || ((...v) => {
    let A = v.shift();
    (0, c.nextTick)(() => {
      A(...v);
    });
  }), _ = { keepalive: 60, reschedulePings: !0, protocolId: "MQTT", protocolVersion: 4, reconnectPeriod: 1e3, connectTimeout: 30 * 1e3, clean: !0, resubscribe: !0, subscribeBatchSize: null, writeCache: !0, timerVariant: "auto" }, I = class Hn extends y.TypedEventEmitter {
    static VERSION = c.MQTTJS_VERSION;
    connected;
    disconnecting;
    disconnected;
    reconnecting;
    incomingStore;
    outgoingStore;
    options;
    queueQoSZero;
    _reconnectCount;
    log;
    messageIdProvider;
    outgoing;
    messageIdToTopic;
    noop;
    keepaliveManager;
    stream;
    queue;
    streamBuilder;
    _resubscribeTopics;
    connackTimer;
    reconnectTimer;
    _storeProcessing;
    _packetIdsDuringStoreProcessing;
    _storeProcessingQueue;
    _firstConnection;
    topicAliasRecv;
    topicAliasSend;
    _deferredReconnect;
    connackPacket;
    static defaultId() {
      return `mqttjs_${Math.random().toString(16).substr(2, 8)}`;
    }
    constructor(A, E) {
      super(), this.options = E || {};
      for (let T in _) typeof this.options[T] > "u" ? this.options[T] = _[T] : this.options[T] = E[T];
      this.log = this.options.log || (0, e.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: version:", Hn.VERSION), S.isWebWorker ? this.log("MqttClient :: environment", "webworker") : this.log("MqttClient :: environment", S.default ? "browser" : "node"), this.log("MqttClient :: options.protocol", E.protocol), this.log("MqttClient :: options.protocolVersion", E.protocolVersion), this.log("MqttClient :: options.username", E.username), this.log("MqttClient :: options.keepalive", E.keepalive), this.log("MqttClient :: options.reconnectPeriod", E.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", E.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", E.properties ? E.properties.topicAliasMaximum : void 0), this.options.clientId = typeof E.clientId == "string" ? E.clientId : Hn.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = E.protocolVersion === 5 && E.customHandleAcks ? E.customHandleAcks : (...T) => {
        T[3](null, 0);
      }, this.options.writeCache || (r.default.writeToStream.cacheNumbers = !1), this.streamBuilder = A, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new d.default() : this.options.messageIdProvider, this.outgoingStore = E.outgoingStore || new o.default(), this.incomingStore = E.incomingStore || new o.default(), this.queueQoSZero = E.queueQoSZero === void 0 ? !0 : E.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.keepaliveManager = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, E.properties && E.properties.topicAliasMaximum > 0 && (E.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new m.default(E.properties.topicAliasMaximum)), this.on("connect", () => {
        let { queue: T } = this, C = () => {
          let P = T.shift();
          this.log("deliver :: entry %o", P);
          let L = null;
          if (!P) {
            this._resubscribe();
            return;
          }
          L = P.packet, this.log("deliver :: call _sendPacket for %o", L);
          let O = !0;
          L.messageId && L.messageId !== 0 && (this.messageIdProvider.register(L.messageId) || (O = !1)), O ? this._sendPacket(L, (q) => {
            P.cb && P.cb(q), C();
          }) : (this.log("messageId: %d has already used. The message is skipped and removed.", L.messageId), C());
        };
        this.log("connect :: sending queued packets"), C();
      }), this.on("close", () => {
        this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this._destroyKeepaliveManager(), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect();
      }), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect());
    }
    handleAuth(A, E) {
      E();
    }
    handleMessage(A, E) {
      E();
    }
    _nextId() {
      return this.messageIdProvider.allocate();
    }
    getLastMessageId() {
      return this.messageIdProvider.getLastAllocated();
    }
    connect() {
      let A = new t.Writable(), E = r.default.parser(this.options), T = null, C = [];
      this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.disconnected && !this.reconnecting && (this.incomingStore = this.options.incomingStore || new o.default(), this.outgoingStore = this.options.outgoingStore || new o.default(), this.disconnecting = !1, this.disconnected = !1), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), E.on("packet", (D) => {
        this.log("parser :: on packet push to packets array."), C.push(D);
      });
      let P = () => {
        this.log("work :: getting next packet in queue");
        let D = C.shift();
        if (D) this.log("work :: packet pulled from queue"), (0, g.default)(this, D, L);
        else {
          this.log("work :: no packets in queue");
          let B = T;
          T = null, this.log("work :: done flag is %s", !!B), B && B();
        }
      }, L = () => {
        if (C.length) (0, c.nextTick)(P);
        else {
          let D = T;
          T = null, D();
        }
      };
      A._write = (D, B, ae) => {
        T = ae, this.log("writable stream :: parsing buffer"), E.parse(D), P();
      };
      let O = (D) => {
        this.log("streamErrorHandler :: error", D.message), D.code ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", D)) : this.noop(D);
      };
      this.log("connect :: pipe stream to writable stream"), this.stream.pipe(A), this.stream.on("error", O), this.stream.on("close", () => {
        this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close");
      }), this.log("connect: sending packet `connect`");
      let q = { cmd: "connect", protocolId: this.options.protocolId, protocolVersion: this.options.protocolVersion, clean: this.options.clean, clientId: this.options.clientId, keepalive: this.options.keepalive, username: this.options.username, password: this.options.password, properties: this.options.properties };
      if (this.options.will && (q.will = { ...this.options.will, payload: this.options.will?.payload }), this.topicAliasRecv && (q.properties || (q.properties = {}), this.topicAliasRecv && (q.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(q), E.on("error", this.emit.bind(this, "error")), this.options.properties) {
        if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return this.end(() => this.emit("error", new Error("Packet has no Authentication Method"))), this;
        if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket == "object") {
          let D = { cmd: "auth", reasonCode: 0, ...this.options.authPacket };
          this._writePacket(D);
        }
      }
      return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout(() => {
        this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this.emit("error", new Error("connack timeout")), this._cleanUp(!0);
      }, this.options.connectTimeout), this;
    }
    publish(A, E, T, C) {
      this.log("publish :: message `%s` to topic `%s`", E, A);
      let { options: P } = this;
      typeof T == "function" && (C = T, T = null), T = T || {}, T = { qos: 0, retain: !1, dup: !1, ...T };
      let { qos: L, retain: O, dup: q, properties: D, cbStorePut: B } = T;
      if (this._checkDisconnecting(C)) return this;
      let ae = () => {
        let Q = 0;
        if ((L === 1 || L === 2) && (Q = this._nextId(), Q === null)) return this.log("No messageId left"), !1;
        let K = { cmd: "publish", topic: A, payload: E, qos: L, retain: O, messageId: Q, dup: q };
        switch (P.protocolVersion === 5 && (K.properties = D), this.log("publish :: qos", L), L) {
          case 1:
          case 2:
            this.outgoing[K.messageId] = { volatile: !1, cb: C || this.noop }, this.log("MqttClient:publish: packet cmd: %s", K.cmd), this._sendPacket(K, void 0, B);
            break;
          default:
            this.log("MqttClient:publish: packet cmd: %s", K.cmd), this._sendPacket(K, C, B);
            break;
        }
        return !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !ae()) && this._storeProcessingQueue.push({ invoke: ae, cbStorePut: T.cbStorePut, callback: C }), this;
    }
    publishAsync(A, E, T) {
      return new Promise((C, P) => {
        this.publish(A, E, T, (L, O) => {
          L ? P(L) : C(O);
        });
      });
    }
    subscribe(A, E, T) {
      let C = this.options.protocolVersion;
      typeof E == "function" && (T = E), T = T || this.noop;
      let P = !1, L = [];
      typeof A == "string" ? (A = [A], L = A) : Array.isArray(A) ? L = A : typeof A == "object" && (P = A.resubscribe, delete A.resubscribe, L = Object.keys(A));
      let O = i.validateTopics(L);
      if (O !== null) return p(T, new Error(`Invalid topic ${O}`)), this;
      if (this._checkDisconnecting(T)) return this.log("subscribe: discconecting true"), this;
      let q = { qos: 0 };
      C === 5 && (q.nl = !1, q.rap = !1, q.rh = 0), E = { ...q, ...E };
      let { properties: D } = E, B = [], ae = (re, F) => {
        if (F = F || E, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, re) || this._resubscribeTopics[re].qos < F.qos || P) {
          let Z = { topic: re, qos: F.qos };
          C === 5 && (Z.nl = F.nl, Z.rap = F.rap, Z.rh = F.rh, Z.properties = D), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", Z.topic, Z.qos), B.push(Z);
        }
      };
      if (Array.isArray(A) ? A.forEach((re) => {
        this.log("subscribe: array topic %s", re), ae(re);
      }) : Object.keys(A).forEach((re) => {
        this.log("subscribe: object topic %s, %o", re, A[re]), ae(re, A[re]);
      }), !B.length) return T(null, []), this;
      let Q = (re, F) => {
        let Z = { cmd: "subscribe", subscriptions: re, messageId: F };
        if (D && (Z.properties = D), this.options.resubscribe) {
          this.log("subscribe :: resubscribe true");
          let J = [];
          re.forEach((be) => {
            if (this.options.reconnectPeriod > 0) {
              let te = { qos: be.qos };
              C === 5 && (te.nl = be.nl || !1, te.rap = be.rap || !1, te.rh = be.rh || 0, te.properties = be.properties), this._resubscribeTopics[be.topic] = te, J.push(be.topic);
            }
          }), this.messageIdToTopic[Z.messageId] = J;
        }
        let R = new Promise((J, be) => {
          this.outgoing[Z.messageId] = { volatile: !0, cb(te, we) {
            if (!te) {
              let { granted: H } = we;
              for (let N = 0; N < H.length; N += 1) re[N].qos = H[N];
            }
            te ? be(new c.ErrorWithSubackPacket(te.message, we)) : J(we);
          } };
        });
        return this.log("subscribe :: call _sendPacket"), this._sendPacket(Z), R;
      }, K = () => {
        let re = this.options.subscribeBatchSize ?? B.length, F = [];
        for (let Z = 0; Z < B.length; Z += re) {
          let R = B.slice(Z, Z + re), J = this._nextId();
          if (J === null) return this.log("No messageId left"), !1;
          F.push(Q(R, J));
        }
        return Promise.all(F).then((Z) => {
          T(null, B, Z.at(-1));
        }).catch((Z) => {
          T(Z, B, Z.packet);
        }), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !K()) && this._storeProcessingQueue.push({ invoke: K, callback: T }), this;
    }
    subscribeAsync(A, E) {
      return new Promise((T, C) => {
        this.subscribe(A, E, (P, L) => {
          P ? C(P) : T(L);
        });
      });
    }
    unsubscribe(A, E, T) {
      typeof A == "string" && (A = [A]), typeof E == "function" && (T = E), T = T || this.noop;
      let C = i.validateTopics(A);
      if (C !== null) return p(T, new Error(`Invalid topic ${C}`)), this;
      if (this._checkDisconnecting(T)) return this;
      let P = () => {
        let L = this._nextId();
        if (L === null) return this.log("No messageId left"), !1;
        let O = { cmd: "unsubscribe", messageId: L, unsubscriptions: [] };
        return typeof A == "string" ? O.unsubscriptions = [A] : Array.isArray(A) && (O.unsubscriptions = A), this.options.resubscribe && O.unsubscriptions.forEach((q) => {
          delete this._resubscribeTopics[q];
        }), typeof E == "object" && E.properties && (O.properties = E.properties), this.outgoing[O.messageId] = { volatile: !0, cb: T }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(O), !0;
      };
      return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !P()) && this._storeProcessingQueue.push({ invoke: P, callback: T }), this;
    }
    unsubscribeAsync(A, E) {
      return new Promise((T, C) => {
        this.unsubscribe(A, E, (P, L) => {
          P ? C(P) : T(L);
        });
      });
    }
    end(A, E, T) {
      this.log("end :: (%s)", this.options.clientId), (A == null || typeof A != "boolean") && (T = T || E, E = A, A = !1), typeof E != "object" && (T = T || E, E = null), this.log("end :: cb? %s", !!T), (!T || typeof T != "function") && (T = this.noop);
      let C = () => {
        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((L) => {
          this.outgoingStore.close((O) => {
            if (this.log("end :: closeStores: emitting end"), this.emit("end"), T) {
              let q = L || O;
              this.log("end :: closeStores: invoking callback with args"), T(q);
            }
          });
        }), this._deferredReconnect ? this._deferredReconnect() : (this.options.reconnectPeriod === 0 || this.options.manualConnect) && (this.disconnecting = !1);
      }, P = () => {
        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, A), this._cleanUp(A, () => {
          this.log("end :: finish :: calling process.nextTick on closeStores"), (0, c.nextTick)(C);
        }, E);
      };
      return this.disconnecting ? (T(), this) : (this._clearReconnect(), this.disconnecting = !0, !A && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, P, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), P()), this);
    }
    endAsync(A, E) {
      return new Promise((T, C) => {
        this.end(A, E, (P) => {
          P ? C(P) : T();
        });
      });
    }
    removeOutgoingMessage(A) {
      if (this.outgoing[A]) {
        let { cb: E } = this.outgoing[A];
        this._removeOutgoingAndStoreMessage(A, () => {
          E(new Error("Message removed"));
        });
      }
      return this;
    }
    reconnect(A) {
      this.log("client reconnect");
      let E = () => {
        A ? (this.options.incomingStore = A.incomingStore, this.options.outgoingStore = A.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new o.default(), this.outgoingStore = this.options.outgoingStore || new o.default(), this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect();
      };
      return this.disconnecting && !this.disconnected ? this._deferredReconnect = E : E(), this;
    }
    _flushVolatile() {
      this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((A) => {
        this.outgoing[A].volatile && typeof this.outgoing[A].cb == "function" && (this.outgoing[A].cb(new Error("Connection closed")), delete this.outgoing[A]);
      }));
    }
    _flush() {
      this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((A) => {
        typeof this.outgoing[A].cb == "function" && (this.outgoing[A].cb(new Error("Connection closed")), delete this.outgoing[A]);
      }));
    }
    _removeTopicAliasAndRecoverTopicName(A) {
      let E;
      A.properties && (E = A.properties.topicAlias);
      let T = A.topic.toString();
      if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", E, T), T.length === 0) {
        if (typeof E > "u") return new Error("Unregistered Topic Alias");
        if (T = this.topicAliasSend.getTopicByAlias(E), typeof T > "u") return new Error("Unregistered Topic Alias");
        A.topic = T;
      }
      E && delete A.properties.topicAlias;
    }
    _checkDisconnecting(A) {
      return this.disconnecting && (A && A !== this.noop ? A(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting;
    }
    _reconnect() {
      this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end(() => {
        this.connect();
      }), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect());
    }
    _setupReconnect() {
      !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval(() => {
        this.log("reconnectTimer :: reconnect triggered!"), this._reconnect();
      }, this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...");
    }
    _clearReconnect() {
      this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null);
    }
    _cleanUp(A, E, T = {}) {
      if (E && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", E)), this.log("_cleanUp :: forced? %s", A), A) this.options.reconnectPeriod === 0 && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
      else {
        let C = { cmd: "disconnect", ...T };
        this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(C, () => {
          this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), p(() => {
            this.stream.end(() => {
              this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId);
            });
          });
        });
      }
      !this.disconnecting && !this.reconnecting && (this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), this._destroyKeepaliveManager(), E && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", E), E());
    }
    _storeAndSend(A, E, T) {
      this.log("storeAndSend :: store packet with cmd %s to outgoingStore", A.cmd);
      let C = A, P;
      if (C.cmd === "publish" && (C = (0, n.default)(A), P = this._removeTopicAliasAndRecoverTopicName(C), P)) return E && E(P);
      this.outgoingStore.put(C, (L) => {
        if (L) return E && E(L);
        T(), this._writePacket(A, E);
      });
    }
    _applyTopicAlias(A) {
      if (this.options.protocolVersion === 5 && A.cmd === "publish") {
        let E;
        A.properties && (E = A.properties.topicAlias);
        let T = A.topic.toString();
        if (this.topicAliasSend) if (E) {
          if (T.length !== 0 && (this.log("applyTopicAlias :: register topic: %s - alias: %d", T, E), !this.topicAliasSend.put(T, E))) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", T, E), new Error("Sending Topic Alias out of range");
        } else T.length !== 0 && (this.options.autoAssignTopicAlias ? (E = this.topicAliasSend.getAliasByTopic(T), E ? (A.topic = "", A.properties = { ...A.properties, topicAlias: E }, this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", T, E)) : (E = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(T, E), A.properties = { ...A.properties, topicAlias: E }, this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", T, E))) : this.options.autoUseTopicAlias && (E = this.topicAliasSend.getAliasByTopic(T), E && (A.topic = "", A.properties = { ...A.properties, topicAlias: E }, this.log("applyTopicAlias :: auto use topic: %s - alias: %d", T, E))));
        else if (E) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", T, E), new Error("Sending Topic Alias out of range");
      }
    }
    _noop(A) {
      this.log("noop ::", A);
    }
    _writePacket(A, E) {
      this.log("_writePacket :: packet: %O", A), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", A), this.log("_writePacket :: writing to stream");
      let T = r.default.writeToStream(A, this.stream, this.options);
      this.log("_writePacket :: writeToStream result %s", T), !T && E && E !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", E)) : E && (this.log("_writePacket :: invoking cb"), E());
    }
    _sendPacket(A, E, T, C) {
      this.log("_sendPacket :: (%s) ::  start", this.options.clientId), T = T || this.noop, E = E || this.noop;
      let P = this._applyTopicAlias(A);
      if (P) {
        E(P);
        return;
      }
      if (!this.connected) {
        if (A.cmd === "auth") {
          this._writePacket(A, E);
          return;
        }
        this.log("_sendPacket :: client not connected. Storing packet offline."), this._storePacket(A, E, T);
        return;
      }
      if (C) {
        this._writePacket(A, E);
        return;
      }
      switch (A.cmd) {
        case "publish":
          break;
        case "pubrel":
          this._storeAndSend(A, E, T);
          return;
        default:
          this._writePacket(A, E);
          return;
      }
      switch (A.qos) {
        case 2:
        case 1:
          this._storeAndSend(A, E, T);
          break;
        case 0:
        default:
          this._writePacket(A, E);
          break;
      }
      this.log("_sendPacket :: (%s) ::  end", this.options.clientId);
    }
    _storePacket(A, E, T) {
      this.log("_storePacket :: packet: %o", A), this.log("_storePacket :: cb? %s", !!E), T = T || this.noop;
      let C = A;
      if (C.cmd === "publish") {
        C = (0, n.default)(A);
        let L = this._removeTopicAliasAndRecoverTopicName(C);
        if (L) return E && E(L);
      }
      let P = C.qos || 0;
      P === 0 && this.queueQoSZero || C.cmd !== "publish" ? this.queue.push({ packet: C, cb: E }) : P > 0 ? (E = this.outgoing[C.messageId] ? this.outgoing[C.messageId].cb : null, this.outgoingStore.put(C, (L) => {
        if (L) return E && E(L);
        T();
      })) : E && E(new Error("No connection to broker"));
    }
    _setupKeepaliveManager() {
      this.log("_setupKeepaliveManager :: keepalive %d (seconds)", this.options.keepalive), !this.keepaliveManager && this.options.keepalive && (this.keepaliveManager = new b.default(this, this.options.timerVariant));
    }
    _destroyKeepaliveManager() {
      this.keepaliveManager && (this.log("_destroyKeepaliveManager :: destroying keepalive manager"), this.keepaliveManager.destroy(), this.keepaliveManager = null);
    }
    reschedulePing(A = !1) {
      this.keepaliveManager && this.options.keepalive && (A || this.options.reschedulePings) && this._reschedulePing();
    }
    _reschedulePing() {
      this.log("_reschedulePing :: rescheduling ping"), this.keepaliveManager.reschedule();
    }
    sendPing() {
      this.log("_sendPing :: sending pingreq"), this._sendPacket({ cmd: "pingreq" });
    }
    onKeepaliveTimeout() {
      this.emit("error", new Error("Keepalive timeout")), this.log("onKeepaliveTimeout :: calling _cleanUp with force true"), this._cleanUp(!0);
    }
    _resubscribe() {
      this.log("_resubscribe");
      let A = Object.keys(this._resubscribeTopics);
      if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && A.length > 0) if (this.options.resubscribe) if (this.options.protocolVersion === 5) {
        this.log("_resubscribe: protocolVersion 5");
        for (let E = 0; E < A.length; E++) {
          let T = {};
          T[A[E]] = this._resubscribeTopics[A[E]], T.resubscribe = !0, this.subscribe(T, { properties: T[A[E]].properties });
        }
      } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
      else this._resubscribeTopics = {};
      this._firstConnection = !1;
    }
    _onConnect(A) {
      if (this.disconnected) {
        this.emit("connect", A);
        return;
      }
      this.connackPacket = A, this.messageIdProvider.clear(), this._setupKeepaliveManager(), this.connected = !0;
      let E = () => {
        let T = this.outgoingStore.createStream(), C = () => {
          T.destroy(), T = null, this._flushStoreProcessingQueue(), P();
        }, P = () => {
          this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {};
        };
        this.once("close", C), T.on("error", (O) => {
          P(), this._flushStoreProcessingQueue(), this.removeListener("close", C), this.emit("error", O);
        });
        let L = () => {
          if (!T) return;
          let O = T.read(1), q;
          if (!O) {
            T.once("readable", L);
            return;
          }
          if (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[O.messageId]) {
            L();
            return;
          }
          !this.disconnecting && !this.reconnectTimer ? (q = this.outgoing[O.messageId] ? this.outgoing[O.messageId].cb : null, this.outgoing[O.messageId] = { volatile: !1, cb(D, B) {
            q && q(D, B), L();
          } }, this._packetIdsDuringStoreProcessing[O.messageId] = !0, this.messageIdProvider.register(O.messageId) ? this._sendPacket(O, void 0, void 0, !0) : this.log("messageId: %d has already used.", O.messageId)) : T.destroy && T.destroy();
        };
        T.on("end", () => {
          let O = !0;
          for (let q in this._packetIdsDuringStoreProcessing) if (!this._packetIdsDuringStoreProcessing[q]) {
            O = !1;
            break;
          }
          this.removeListener("close", C), O ? (P(), this._invokeAllStoreProcessingQueue(), this.emit("connect", A)) : E();
        }), L();
      };
      E();
    }
    _invokeStoreProcessingQueue() {
      if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
        let A = this._storeProcessingQueue[0];
        if (A && A.invoke()) return this._storeProcessingQueue.shift(), !0;
      }
      return !1;
    }
    _invokeAllStoreProcessingQueue() {
      for (; this._invokeStoreProcessingQueue(); ) ;
    }
    _flushStoreProcessingQueue() {
      for (let A of this._storeProcessingQueue) A.cbStorePut && A.cbStorePut(new Error("Connection closed")), A.callback && A.callback(new Error("Connection closed"));
      this._storeProcessingQueue.splice(0);
    }
    _removeOutgoingAndStoreMessage(A, E) {
      delete this.outgoing[A], this.outgoingStore.del({ messageId: A }, (T, C) => {
        E(T, C), this.messageIdProvider.deallocate(A), this._invokeStoreProcessingQueue();
      });
    }
  };
  h.default = I;
}), lu = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = Ys(), s = class {
    numberAllocator;
    lastId;
    constructor() {
      this.numberAllocator = new f.NumberAllocator(1, 65535);
    }
    allocate() {
      return this.lastId = this.numberAllocator.alloc(), this.lastId;
    }
    getLastAllocated() {
      return this.lastId;
    }
    register(a) {
      return this.numberAllocator.use(a);
    }
    deallocate(a) {
      this.numberAllocator.free(a);
    }
    clear() {
      this.numberAllocator.clear();
    }
  };
  h.default = s;
});
function uu() {
  if (Gn) return rr;
  Gn = !0;
  let h = 2147483647, f = 36, s = 1, a = 26, u = 38, r = 700, t = 72, n = 128, e = "-", i = /^xn--/, o = /[^\0-\x7F]/, g = /[\x2E\u3002\uFF0E\uFF61]/g, d = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, m = f - s, c = Math.floor, y = String.fromCharCode;
  function b(P) {
    throw new RangeError(d[P]);
  }
  function S(P, L) {
    let O = [], q = P.length;
    for (; q--; ) O[q] = L(P[q]);
    return O;
  }
  function p(P, L) {
    let O = P.split("@"), q = "";
    O.length > 1 && (q = O[0] + "@", P = O[1]), P = P.replace(g, ".");
    let D = P.split("."), B = S(D, L).join(".");
    return q + B;
  }
  function _(P) {
    let L = [], O = 0, q = P.length;
    for (; O < q; ) {
      let D = P.charCodeAt(O++);
      if (D >= 55296 && D <= 56319 && O < q) {
        let B = P.charCodeAt(O++);
        (B & 64512) == 56320 ? L.push(((D & 1023) << 10) + (B & 1023) + 65536) : (L.push(D), O--);
      } else L.push(D);
    }
    return L;
  }
  let I = (P) => String.fromCodePoint(...P), v = function(P) {
    return P >= 48 && P < 58 ? 26 + (P - 48) : P >= 65 && P < 91 ? P - 65 : P >= 97 && P < 123 ? P - 97 : f;
  }, A = function(P, L) {
    return P + 22 + 75 * (P < 26) - ((L != 0) << 5);
  }, E = function(P, L, O) {
    let q = 0;
    for (P = O ? c(P / r) : P >> 1, P += c(P / L); P > m * a >> 1; q += f) P = c(P / m);
    return c(q + (m + 1) * P / (P + u));
  }, T = function(P) {
    let L = [], O = P.length, q = 0, D = n, B = t, ae = P.lastIndexOf(e);
    ae < 0 && (ae = 0);
    for (let Q = 0; Q < ae; ++Q) P.charCodeAt(Q) >= 128 && b("not-basic"), L.push(P.charCodeAt(Q));
    for (let Q = ae > 0 ? ae + 1 : 0; Q < O; ) {
      let K = q;
      for (let F = 1, Z = f; ; Z += f) {
        Q >= O && b("invalid-input");
        let R = v(P.charCodeAt(Q++));
        R >= f && b("invalid-input"), R > c((h - q) / F) && b("overflow"), q += R * F;
        let J = Z <= B ? s : Z >= B + a ? a : Z - B;
        if (R < J) break;
        let be = f - J;
        F > c(h / be) && b("overflow"), F *= be;
      }
      let re = L.length + 1;
      B = E(q - K, re, K == 0), c(q / re) > h - D && b("overflow"), D += c(q / re), q %= re, L.splice(q++, 0, D);
    }
    return String.fromCodePoint(...L);
  }, C = function(P) {
    let L = [];
    P = _(P);
    let O = P.length, q = n, D = 0, B = t;
    for (let K of P) K < 128 && L.push(y(K));
    let ae = L.length, Q = ae;
    for (ae && L.push(e); Q < O; ) {
      let K = h;
      for (let F of P) F >= q && F < K && (K = F);
      let re = Q + 1;
      K - q > c((h - D) / re) && b("overflow"), D += (K - q) * re, q = K;
      for (let F of P) if (F < q && ++D > h && b("overflow"), F === q) {
        let Z = D;
        for (let R = f; ; R += f) {
          let J = R <= B ? s : R >= B + a ? a : R - B;
          if (Z < J) break;
          let be = Z - J, te = f - J;
          L.push(y(A(J + be % te, 0))), Z = c(be / te);
        }
        L.push(y(A(Z, 0))), B = E(D, re, Q === ae), D = 0, ++Q;
      }
      ++D, ++q;
    }
    return L.join("");
  };
  return rr = { version: "2.3.1", ucs2: { decode: _, encode: I }, decode: T, encode: C, toASCII: function(P) {
    return p(P, function(L) {
      return o.test(L) ? "xn--" + C(L) : L;
    });
  }, toUnicode: function(P) {
    return p(P, function(L) {
      return i.test(L) ? T(L.slice(4).toLowerCase()) : L;
    });
  } }, rr;
}
var rr, Gn, dt, cu = ze(() => {
  le(), ce(), ue(), rr = {}, Gn = !1, dt = uu(), dt.decode, dt.encode, dt.toASCII, dt.toUnicode, dt.ucs2, dt.version;
});
function fu() {
  return Yn || (Yn = !0, Qn = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var h = {}, f = Symbol("test"), s = Object(f);
    if (typeof f == "string" || Object.prototype.toString.call(f) !== "[object Symbol]" || Object.prototype.toString.call(s) !== "[object Symbol]") return !1;
    var a = 42;
    h[f] = a;
    for (f in h) return !1;
    if (typeof Object.keys == "function" && Object.keys(h).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(h).length !== 0) return !1;
    var u = Object.getOwnPropertySymbols(h);
    if (u.length !== 1 || u[0] !== f || !Object.prototype.propertyIsEnumerable.call(h, f)) return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var r = Object.getOwnPropertyDescriptor(h, f);
      if (r.value !== a || r.enumerable !== !0) return !1;
    }
    return !0;
  }), Qn;
}
function hu() {
  return Xn || (Xn = !0, Jn = Error), Jn;
}
function pu() {
  return ei || (ei = !0, Zn = EvalError), Zn;
}
function du() {
  return ri || (ri = !0, ti = RangeError), ti;
}
function gu() {
  return ii || (ii = !0, ni = ReferenceError), ni;
}
function oa() {
  return si || (si = !0, oi = SyntaxError), oi;
}
function Qt() {
  return li || (li = !0, ai = TypeError), ai;
}
function yu() {
  return ci || (ci = !0, ui = URIError), ui;
}
function bu() {
  if (fi) return nr;
  fi = !0;
  var h = typeof Symbol < "u" && Symbol, f = fu();
  return nr = function() {
    return typeof h != "function" || typeof Symbol != "function" || typeof h("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : f();
  }, nr;
}
function mu() {
  if (hi) return ir;
  hi = !0;
  var h = { __proto__: null, foo: {} }, f = Object;
  return ir = function() {
    return { __proto__: h }.foo === h.foo && !(h instanceof f);
  }, ir;
}
function vu() {
  if (pi) return or;
  pi = !0;
  var h = "Function.prototype.bind called on incompatible ", f = Object.prototype.toString, s = Math.max, a = "[object Function]", u = function(n, e) {
    for (var i = [], o = 0; o < n.length; o += 1) i[o] = n[o];
    for (var g = 0; g < e.length; g += 1) i[g + n.length] = e[g];
    return i;
  }, r = function(n, e) {
    for (var i = [], o = e, g = 0; o < n.length; o += 1, g += 1) i[g] = n[o];
    return i;
  }, t = function(n, e) {
    for (var i = "", o = 0; o < n.length; o += 1) i += n[o], o + 1 < n.length && (i += e);
    return i;
  };
  return or = function(n) {
    var e = this;
    if (typeof e != "function" || f.apply(e) !== a) throw new TypeError(h + e);
    for (var i = r(arguments, 1), o, g = function() {
      if (this instanceof o) {
        var b = e.apply(this, u(i, arguments));
        return Object(b) === b ? b : this;
      }
      return e.apply(n, u(i, arguments));
    }, d = s(0, e.length - i.length), m = [], c = 0; c < d; c++) m[c] = "$" + c;
    if (o = Function("binder", "return function (" + t(m, ",") + "){ return binder.apply(this,arguments); }")(g), e.prototype) {
      var y = function() {
      };
      y.prototype = e.prototype, o.prototype = new y(), y.prototype = null;
    }
    return o;
  }, or;
}
function Wi() {
  if (di) return sr;
  di = !0;
  var h = vu();
  return sr = Function.prototype.bind || h, sr;
}
function wu() {
  if (gi) return ar;
  gi = !0;
  var h = Function.prototype.call, f = Object.prototype.hasOwnProperty, s = Wi();
  return ar = s.call(h, f), ar;
}
function Bt() {
  if (yi) return lr;
  yi = !0;
  var h, f = hu(), s = pu(), a = du(), u = gu(), r = oa(), t = Qt(), n = yu(), e = Function, i = function(Q) {
    try {
      return e('"use strict"; return (' + Q + ").constructor;")();
    } catch {
    }
  }, o = Object.getOwnPropertyDescriptor;
  if (o) try {
    o({}, "");
  } catch {
    o = null;
  }
  var g = function() {
    throw new t();
  }, d = o ? (function() {
    try {
      return arguments.callee, g;
    } catch {
      try {
        return o(arguments, "callee").get;
      } catch {
        return g;
      }
    }
  })() : g, m = bu()(), c = mu()(), y = Object.getPrototypeOf || (c ? function(Q) {
    return Q.__proto__;
  } : null), b = {}, S = typeof Uint8Array > "u" || !y ? h : y(Uint8Array), p = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? h : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? h : ArrayBuffer, "%ArrayIteratorPrototype%": m && y ? y([][Symbol.iterator]()) : h, "%AsyncFromSyncIteratorPrototype%": h, "%AsyncFunction%": b, "%AsyncGenerator%": b, "%AsyncGeneratorFunction%": b, "%AsyncIteratorPrototype%": b, "%Atomics%": typeof Atomics > "u" ? h : Atomics, "%BigInt%": typeof BigInt > "u" ? h : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? h : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? h : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? h : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": f, "%eval%": eval, "%EvalError%": s, "%Float32Array%": typeof Float32Array > "u" ? h : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? h : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? h : FinalizationRegistry, "%Function%": e, "%GeneratorFunction%": b, "%Int8Array%": typeof Int8Array > "u" ? h : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? h : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? h : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": m && y ? y(y([][Symbol.iterator]())) : h, "%JSON%": typeof JSON == "object" ? JSON : h, "%Map%": typeof Map > "u" ? h : Map, "%MapIteratorPrototype%": typeof Map > "u" || !m || !y ? h : y((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? h : Promise, "%Proxy%": typeof Proxy > "u" ? h : Proxy, "%RangeError%": a, "%ReferenceError%": u, "%Reflect%": typeof Reflect > "u" ? h : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? h : Set, "%SetIteratorPrototype%": typeof Set > "u" || !m || !y ? h : y((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? h : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": m && y ? y(""[Symbol.iterator]()) : h, "%Symbol%": m ? Symbol : h, "%SyntaxError%": r, "%ThrowTypeError%": d, "%TypedArray%": S, "%TypeError%": t, "%Uint8Array%": typeof Uint8Array > "u" ? h : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? h : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? h : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? h : Uint32Array, "%URIError%": n, "%WeakMap%": typeof WeakMap > "u" ? h : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? h : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? h : WeakSet };
  if (y) try {
    null.error;
  } catch (Q) {
    var _ = y(y(Q));
    p["%Error.prototype%"] = _;
  }
  var I = function Q(K) {
    var re;
    if (K === "%AsyncFunction%") re = i("async function () {}");
    else if (K === "%GeneratorFunction%") re = i("function* () {}");
    else if (K === "%AsyncGeneratorFunction%") re = i("async function* () {}");
    else if (K === "%AsyncGenerator%") {
      var F = Q("%AsyncGeneratorFunction%");
      F && (re = F.prototype);
    } else if (K === "%AsyncIteratorPrototype%") {
      var Z = Q("%AsyncGenerator%");
      Z && y && (re = y(Z.prototype));
    }
    return p[K] = re, re;
  }, v = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, A = Wi(), E = wu(), T = A.call(Function.call, Array.prototype.concat), C = A.call(Function.apply, Array.prototype.splice), P = A.call(Function.call, String.prototype.replace), L = A.call(Function.call, String.prototype.slice), O = A.call(Function.call, RegExp.prototype.exec), q = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, D = /\\(\\)?/g, B = function(Q) {
    var K = L(Q, 0, 1), re = L(Q, -1);
    if (K === "%" && re !== "%") throw new r("invalid intrinsic syntax, expected closing `%`");
    if (re === "%" && K !== "%") throw new r("invalid intrinsic syntax, expected opening `%`");
    var F = [];
    return P(Q, q, function(Z, R, J, be) {
      F[F.length] = J ? P(be, D, "$1") : R || Z;
    }), F;
  }, ae = function(Q, K) {
    var re = Q, F;
    if (E(v, re) && (F = v[re], re = "%" + F[0] + "%"), E(p, re)) {
      var Z = p[re];
      if (Z === b && (Z = I(re)), typeof Z > "u" && !K) throw new t("intrinsic " + Q + " exists, but is not available. Please file an issue!");
      return { alias: F, name: re, value: Z };
    }
    throw new r("intrinsic " + Q + " does not exist!");
  };
  return lr = function(Q, K) {
    if (typeof Q != "string" || Q.length === 0) throw new t("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof K != "boolean") throw new t('"allowMissing" argument must be a boolean');
    if (O(/^%?[^%]*%?$/, Q) === null) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var re = B(Q), F = re.length > 0 ? re[0] : "", Z = ae("%" + F + "%", K), R = Z.name, J = Z.value, be = !1, te = Z.alias;
    te && (F = te[0], C(re, T([0, 1], te)));
    for (var we = 1, H = !0; we < re.length; we += 1) {
      var N = re[we], ne = L(N, 0, 1), z = L(N, -1);
      if ((ne === '"' || ne === "'" || ne === "`" || z === '"' || z === "'" || z === "`") && ne !== z) throw new r("property names with quotes must have matching quotes");
      if ((N === "constructor" || !H) && (be = !0), F += "." + N, R = "%" + F + "%", E(p, R)) J = p[R];
      else if (J != null) {
        if (!(N in J)) {
          if (!K) throw new t("base intrinsic for " + Q + " exists, but the property is not available.");
          return;
        }
        if (o && we + 1 >= re.length) {
          var G = o(J, N);
          H = !!G, H && "get" in G && !("originalValue" in G.get) ? J = G.get : J = J[N];
        } else H = E(J, N), J = J[N];
        H && !be && (p[R] = J);
      }
    }
    return J;
  }, lr;
}
function qi() {
  if (bi) return ur;
  bi = !0;
  var h = Bt(), f = h("%Object.defineProperty%", !0) || !1;
  if (f) try {
    f({}, "a", { value: 1 });
  } catch {
    f = !1;
  }
  return ur = f, ur;
}
function sa() {
  if (mi) return cr;
  mi = !0;
  var h = Bt(), f = h("%Object.getOwnPropertyDescriptor%", !0);
  if (f) try {
    f([], "length");
  } catch {
    f = null;
  }
  return cr = f, cr;
}
function _u() {
  if (vi) return fr;
  vi = !0;
  var h = qi(), f = oa(), s = Qt(), a = sa();
  return fr = function(u, r, t) {
    if (!u || typeof u != "object" && typeof u != "function") throw new s("`obj` must be an object or a function`");
    if (typeof r != "string" && typeof r != "symbol") throw new s("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new s("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new s("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new s("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new s("`loose`, if provided, must be a boolean");
    var n = arguments.length > 3 ? arguments[3] : null, e = arguments.length > 4 ? arguments[4] : null, i = arguments.length > 5 ? arguments[5] : null, o = arguments.length > 6 ? arguments[6] : !1, g = !!a && a(u, r);
    if (h) h(u, r, { configurable: i === null && g ? g.configurable : !i, enumerable: n === null && g ? g.enumerable : !n, value: t, writable: e === null && g ? g.writable : !e });
    else if (o || !n && !e && !i) u[r] = t;
    else throw new f("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }, fr;
}
function Su() {
  if (wi) return hr;
  wi = !0;
  var h = qi(), f = function() {
    return !!h;
  };
  return f.hasArrayLengthDefineBug = function() {
    if (!h) return null;
    try {
      return h([], "length", { value: 1 }).length !== 1;
    } catch {
      return !0;
    }
  }, hr = f, hr;
}
function Eu() {
  if (_i) return pr;
  _i = !0;
  var h = Bt(), f = _u(), s = Su()(), a = sa(), u = Qt(), r = h("%Math.floor%");
  return pr = function(t, n) {
    if (typeof t != "function") throw new u("`fn` is not a function");
    if (typeof n != "number" || n < 0 || n > 4294967295 || r(n) !== n) throw new u("`length` must be a positive 32-bit integer");
    var e = arguments.length > 2 && !!arguments[2], i = !0, o = !0;
    if ("length" in t && a) {
      var g = a(t, "length");
      g && !g.configurable && (i = !1), g && !g.writable && (o = !1);
    }
    return (i || o || !e) && (s ? f(t, "length", n, !0, !0) : f(t, "length", n)), t;
  }, pr;
}
function Au() {
  if (Si) return Rt;
  Si = !0;
  var h = Wi(), f = Bt(), s = Eu(), a = Qt(), u = f("%Function.prototype.apply%"), r = f("%Function.prototype.call%"), t = f("%Reflect.apply%", !0) || h.call(r, u), n = qi(), e = f("%Math.max%");
  Rt = function(o) {
    if (typeof o != "function") throw new a("a function is required");
    var g = t(h, r, arguments);
    return s(g, 1 + e(0, o.length - (arguments.length - 1)), !0);
  };
  var i = function() {
    return t(h, u, arguments);
  };
  return n ? n(Rt, "apply", { value: i }) : Rt.apply = i, Rt;
}
function Iu() {
  if (Ei) return dr;
  Ei = !0;
  var h = Bt(), f = Au(), s = f(h("String.prototype.indexOf"));
  return dr = function(a, u) {
    var r = h(a, !!u);
    return typeof r == "function" && s(a, ".prototype.") > -1 ? f(r) : r;
  }, dr;
}
var Qn, Yn, Jn, Xn, Zn, ei, ti, ri, ni, ii, oi, si, ai, li, ui, ci, nr, fi, ir, hi, or, pi, sr, di, ar, gi, lr, yi, ur, bi, cr, mi, fr, vi, hr, wi, pr, _i, Rt, Si, dr, Ei, xu = ze(() => {
  le(), ce(), ue(), Qn = {}, Yn = !1, Jn = {}, Xn = !1, Zn = {}, ei = !1, ti = {}, ri = !1, ni = {}, ii = !1, oi = {}, si = !1, ai = {}, li = !1, ui = {}, ci = !1, nr = {}, fi = !1, ir = {}, hi = !1, or = {}, pi = !1, sr = {}, di = !1, ar = {}, gi = !1, lr = {}, yi = !1, ur = {}, bi = !1, cr = {}, mi = !1, fr = {}, vi = !1, hr = {}, wi = !1, pr = {}, _i = !1, Rt = {}, Si = !1, dr = {}, Ei = !1;
});
function $i(h) {
  throw new Error("Node.js process " + h + " is not supported by JSPM core outside of Node.js");
}
function Tu() {
  !Et || !_t || (Et = !1, _t.length ? et = _t.concat(et) : Kt = -1, et.length && aa());
}
function aa() {
  if (!Et) {
    var h = setTimeout(Tu, 0);
    Et = !0;
    for (var f = et.length; f; ) {
      for (_t = et, et = []; ++Kt < f; ) _t && _t[Kt].run();
      Kt = -1, f = et.length;
    }
    _t = null, Et = !1, clearTimeout(h);
  }
}
function Ou(h) {
  var f = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var s = 1; s < arguments.length; s++) f[s - 1] = arguments[s];
  et.push(new la(h, f)), et.length === 1 && !Et && setTimeout(aa, 0);
}
function la(h, f) {
  this.fun = h, this.array = f;
}
function De() {
}
function ku(h) {
  $i("_linkedBinding");
}
function Pu(h) {
  $i("dlopen");
}
function Ru() {
  return [];
}
function Cu() {
  return [];
}
function Mu(h, f) {
  if (!h) throw new Error(f || "assertion error");
}
function ju() {
  return !1;
}
function Nu() {
  return ot.now() / 1e3;
}
function jr(h) {
  var f = Math.floor((Date.now() - ot.now()) * 1e-3), s = ot.now() * 1e-3, a = Math.floor(s) + f, u = Math.floor(s % 1 * 1e9);
  return h && (a = a - h[0], u = u - h[1], u < 0 && (a--, u += gr)), [a, u];
}
function ht() {
  return zi;
}
function Bu(h) {
  return [];
}
var et, Et, _t, Kt, Qi, Yi, Ji, Xi, Zi, eo, to, ro, no, io, oo, so, ao, lo, uo, co, fo, ho, po, go, yo, Xt, bo, mo, vo, wo, _o, So, Eo, Ao, Io, xo, To, Oo, ko, Po, Ro, Co, Mo, jo, No, Bo, Uo, Lo, Do, Fo, Wo, ot, Nr, gr, qo, $o, zo, Vo, Ko, Ho, Go, Qo, Yo, Jo, Xo, zi, ua = ze(() => {
  le(), ce(), ue(), et = [], Et = !1, Kt = -1, la.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, Qi = "browser", Yi = "x64", Ji = "browser", Xi = { PATH: "/usr/bin", LANG: navigator.language + ".UTF-8", PWD: "/", HOME: "/home", TMP: "/tmp" }, Zi = ["/usr/bin/node"], eo = [], to = "v16.8.0", ro = {}, no = function(h, f) {
    console.warn((f ? f + ": " : "") + h);
  }, io = function(h) {
    $i("binding");
  }, oo = function(h) {
    return 0;
  }, so = function() {
    return "/";
  }, ao = function(h) {
  }, lo = { name: "node", sourceUrl: "", headersUrl: "", libUrl: "" }, uo = De, co = [], fo = {}, ho = !1, po = {}, go = De, yo = De, Xt = function() {
    return {};
  }, bo = Xt, mo = Xt, vo = De, wo = De, _o = De, So = {}, Eo = { inspector: !1, debug: !1, uv: !1, ipv6: !1, tls_alpn: !1, tls_sni: !1, tls_ocsp: !1, tls: !1, cached_builtins: !0 }, Ao = De, Io = De, xo = De, To = De, Oo = De, ko = De, Po = De, Ro = void 0, Co = void 0, Mo = void 0, jo = De, No = 2, Bo = 1, Uo = "/bin/usr/node", Lo = 9229, Do = "node", Fo = [], Wo = De, ot = { now: typeof performance < "u" ? performance.now.bind(performance) : void 0, timing: typeof performance < "u" ? performance.timing : void 0 }, ot.now === void 0 && (Nr = Date.now(), ot.timing && ot.timing.navigationStart && (Nr = ot.timing.navigationStart), ot.now = () => Date.now() - Nr), gr = 1e9, jr.bigint = function(h) {
    var f = jr(h);
    return typeof BigInt > "u" ? f[0] * gr + f[1] : BigInt(f[0] * gr) + BigInt(f[1]);
  }, qo = 10, $o = {}, zo = 0, Vo = ht, Ko = ht, Ho = ht, Go = ht, Qo = ht, Yo = De, Jo = ht, Xo = ht, zi = { version: to, versions: ro, arch: Yi, platform: Ji, release: lo, _rawDebug: uo, moduleLoadList: co, binding: io, _linkedBinding: ku, _events: $o, _eventsCount: zo, _maxListeners: qo, on: ht, addListener: Vo, once: Ko, off: Ho, removeListener: Go, removeAllListeners: Qo, emit: Yo, prependListener: Jo, prependOnceListener: Xo, listeners: Bu, domain: fo, _exiting: ho, config: po, dlopen: Pu, uptime: Nu, _getActiveRequests: Ru, _getActiveHandles: Cu, reallyExit: go, _kill: yo, cpuUsage: Xt, resourceUsage: bo, memoryUsage: mo, kill: vo, exit: wo, openStdin: _o, allowedNodeEnvironmentFlags: So, assert: Mu, features: Eo, _fatalExceptions: Ao, setUncaughtExceptionCaptureCallback: Io, hasUncaughtExceptionCaptureCallback: ju, emitWarning: no, nextTick: Ou, _tickCallback: xo, _debugProcess: To, _debugEnd: Oo, _startProfilerIdleNotifier: ko, _stopProfilerIdleNotifier: Po, stdout: Ro, stdin: Mo, stderr: Co, abort: jo, umask: oo, chdir: ao, cwd: so, env: Xi, title: Qi, argv: Zi, execArgv: eo, pid: No, ppid: Bo, execPath: Uo, debugPort: Lo, hrtime: jr, argv0: Do, _preload_modules: Fo, setSourceMapsEnabled: Wo };
});
function Uu() {
  if (Ai) return yr;
  Ai = !0;
  var h = zi;
  function f(r) {
    if (typeof r != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(r));
  }
  function s(r, t) {
    for (var n = "", e = 0, i = -1, o = 0, g, d = 0; d <= r.length; ++d) {
      if (d < r.length) g = r.charCodeAt(d);
      else {
        if (g === 47) break;
        g = 47;
      }
      if (g === 47) {
        if (!(i === d - 1 || o === 1)) if (i !== d - 1 && o === 2) {
          if (n.length < 2 || e !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              var m = n.lastIndexOf("/");
              if (m !== n.length - 1) {
                m === -1 ? (n = "", e = 0) : (n = n.slice(0, m), e = n.length - 1 - n.lastIndexOf("/")), i = d, o = 0;
                continue;
              }
            } else if (n.length === 2 || n.length === 1) {
              n = "", e = 0, i = d, o = 0;
              continue;
            }
          }
          t && (n.length > 0 ? n += "/.." : n = "..", e = 2);
        } else n.length > 0 ? n += "/" + r.slice(i + 1, d) : n = r.slice(i + 1, d), e = d - i - 1;
        i = d, o = 0;
      } else g === 46 && o !== -1 ? ++o : o = -1;
    }
    return n;
  }
  function a(r, t) {
    var n = t.dir || t.root, e = t.base || (t.name || "") + (t.ext || "");
    return n ? n === t.root ? n + e : n + r + e : e;
  }
  var u = { resolve: function() {
    for (var r = "", t = !1, n, e = arguments.length - 1; e >= -1 && !t; e--) {
      var i;
      e >= 0 ? i = arguments[e] : (n === void 0 && (n = h.cwd()), i = n), f(i), i.length !== 0 && (r = i + "/" + r, t = i.charCodeAt(0) === 47);
    }
    return r = s(r, !t), t ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : ".";
  }, normalize: function(r) {
    if (f(r), r.length === 0) return ".";
    var t = r.charCodeAt(0) === 47, n = r.charCodeAt(r.length - 1) === 47;
    return r = s(r, !t), r.length === 0 && !t && (r = "."), r.length > 0 && n && (r += "/"), t ? "/" + r : r;
  }, isAbsolute: function(r) {
    return f(r), r.length > 0 && r.charCodeAt(0) === 47;
  }, join: function() {
    if (arguments.length === 0) return ".";
    for (var r, t = 0; t < arguments.length; ++t) {
      var n = arguments[t];
      f(n), n.length > 0 && (r === void 0 ? r = n : r += "/" + n);
    }
    return r === void 0 ? "." : u.normalize(r);
  }, relative: function(r, t) {
    if (f(r), f(t), r === t || (r = u.resolve(r), t = u.resolve(t), r === t)) return "";
    for (var n = 1; n < r.length && r.charCodeAt(n) === 47; ++n) ;
    for (var e = r.length, i = e - n, o = 1; o < t.length && t.charCodeAt(o) === 47; ++o) ;
    for (var g = t.length, d = g - o, m = i < d ? i : d, c = -1, y = 0; y <= m; ++y) {
      if (y === m) {
        if (d > m) {
          if (t.charCodeAt(o + y) === 47) return t.slice(o + y + 1);
          if (y === 0) return t.slice(o + y);
        } else i > m && (r.charCodeAt(n + y) === 47 ? c = y : y === 0 && (c = 0));
        break;
      }
      var b = r.charCodeAt(n + y), S = t.charCodeAt(o + y);
      if (b !== S) break;
      b === 47 && (c = y);
    }
    var p = "";
    for (y = n + c + 1; y <= e; ++y) (y === e || r.charCodeAt(y) === 47) && (p.length === 0 ? p += ".." : p += "/..");
    return p.length > 0 ? p + t.slice(o + c) : (o += c, t.charCodeAt(o) === 47 && ++o, t.slice(o));
  }, _makeLong: function(r) {
    return r;
  }, dirname: function(r) {
    if (f(r), r.length === 0) return ".";
    for (var t = r.charCodeAt(0), n = t === 47, e = -1, i = !0, o = r.length - 1; o >= 1; --o) if (t = r.charCodeAt(o), t === 47) {
      if (!i) {
        e = o;
        break;
      }
    } else i = !1;
    return e === -1 ? n ? "/" : "." : n && e === 1 ? "//" : r.slice(0, e);
  }, basename: function(r, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    f(r);
    var n = 0, e = -1, i = !0, o;
    if (t !== void 0 && t.length > 0 && t.length <= r.length) {
      if (t.length === r.length && t === r) return "";
      var g = t.length - 1, d = -1;
      for (o = r.length - 1; o >= 0; --o) {
        var m = r.charCodeAt(o);
        if (m === 47) {
          if (!i) {
            n = o + 1;
            break;
          }
        } else d === -1 && (i = !1, d = o + 1), g >= 0 && (m === t.charCodeAt(g) ? --g === -1 && (e = o) : (g = -1, e = d));
      }
      return n === e ? e = d : e === -1 && (e = r.length), r.slice(n, e);
    } else {
      for (o = r.length - 1; o >= 0; --o) if (r.charCodeAt(o) === 47) {
        if (!i) {
          n = o + 1;
          break;
        }
      } else e === -1 && (i = !1, e = o + 1);
      return e === -1 ? "" : r.slice(n, e);
    }
  }, extname: function(r) {
    f(r);
    for (var t = -1, n = 0, e = -1, i = !0, o = 0, g = r.length - 1; g >= 0; --g) {
      var d = r.charCodeAt(g);
      if (d === 47) {
        if (!i) {
          n = g + 1;
          break;
        }
        continue;
      }
      e === -1 && (i = !1, e = g + 1), d === 46 ? t === -1 ? t = g : o !== 1 && (o = 1) : t !== -1 && (o = -1);
    }
    return t === -1 || e === -1 || o === 0 || o === 1 && t === e - 1 && t === n + 1 ? "" : r.slice(t, e);
  }, format: function(r) {
    if (r === null || typeof r != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof r);
    return a("/", r);
  }, parse: function(r) {
    f(r);
    var t = { root: "", dir: "", base: "", ext: "", name: "" };
    if (r.length === 0) return t;
    var n = r.charCodeAt(0), e = n === 47, i;
    e ? (t.root = "/", i = 1) : i = 0;
    for (var o = -1, g = 0, d = -1, m = !0, c = r.length - 1, y = 0; c >= i; --c) {
      if (n = r.charCodeAt(c), n === 47) {
        if (!m) {
          g = c + 1;
          break;
        }
        continue;
      }
      d === -1 && (m = !1, d = c + 1), n === 46 ? o === -1 ? o = c : y !== 1 && (y = 1) : o !== -1 && (y = -1);
    }
    return o === -1 || d === -1 || y === 0 || y === 1 && o === d - 1 && o === g + 1 ? d !== -1 && (g === 0 && e ? t.base = t.name = r.slice(1, d) : t.base = t.name = r.slice(g, d)) : (g === 0 && e ? (t.name = r.slice(1, o), t.base = r.slice(1, d)) : (t.name = r.slice(g, o), t.base = r.slice(g, d)), t.ext = r.slice(o, d)), g > 0 ? t.dir = r.slice(0, g - 1) : e && (t.dir = "/"), t;
  }, sep: "/", delimiter: ":", win32: null, posix: null };
  return u.posix = u, yr = u, yr;
}
var yr, Ai, Ii, Lu = ze(() => {
  le(), ce(), ue(), ua(), yr = {}, Ai = !1, Ii = Uu();
}), ca = {};
Mt(ca, { URL: () => wa, Url: () => ga, default: () => Fe, fileURLToPath: () => ha, format: () => ya, parse: () => va, pathToFileURL: () => pa, resolve: () => ba, resolveObject: () => ma });
function Du() {
  if (xi) return br;
  xi = !0;
  var h = typeof Map == "function" && Map.prototype, f = Object.getOwnPropertyDescriptor && h ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, s = h && f && typeof f.get == "function" ? f.get : null, a = h && Map.prototype.forEach, u = typeof Set == "function" && Set.prototype, r = Object.getOwnPropertyDescriptor && u ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, t = u && r && typeof r.get == "function" ? r.get : null, n = u && Set.prototype.forEach, e = typeof WeakMap == "function" && WeakMap.prototype, i = e ? WeakMap.prototype.has : null, o = typeof WeakSet == "function" && WeakSet.prototype, g = o ? WeakSet.prototype.has : null, d = typeof WeakRef == "function" && WeakRef.prototype, m = d ? WeakRef.prototype.deref : null, c = Boolean.prototype.valueOf, y = Object.prototype.toString, b = Function.prototype.toString, S = String.prototype.match, p = String.prototype.slice, _ = String.prototype.replace, I = String.prototype.toUpperCase, v = String.prototype.toLowerCase, A = RegExp.prototype.test, E = Array.prototype.concat, T = Array.prototype.join, C = Array.prototype.slice, P = Math.floor, L = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, O = Object.getOwnPropertySymbols, q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, D = typeof Symbol == "function" && typeof Symbol.iterator == "object", B = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === D || !0) ? Symbol.toStringTag : null, ae = Object.prototype.propertyIsEnumerable, Q = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(V) {
    return V.__proto__;
  } : null);
  function K(V, ie) {
    if (V === 1 / 0 || V === -1 / 0 || V !== V || V && V > -1e3 && V < 1e3 || A.call(/e/, ie)) return ie;
    var Ie = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof V == "number") {
      var xe = V < 0 ? -P(-V) : P(V);
      if (xe !== V) {
        var Te = String(xe), ke = p.call(ie, Te.length + 1);
        return _.call(Te, Ie, "$&_") + "." + _.call(_.call(ke, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return _.call(ie, Ie, "$&_");
  }
  var re = da, F = re.custom, Z = G(F) ? F : null;
  br = function V(ie, Ie, xe, Te) {
    var ke = Ie || {};
    if (oe(ke, "quoteStyle") && ke.quoteStyle !== "single" && ke.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (oe(ke, "maxStringLength") && (typeof ke.maxStringLength == "number" ? ke.maxStringLength < 0 && ke.maxStringLength !== 1 / 0 : ke.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var He = oe(ke, "customInspect") ? ke.customInspect : !0;
    if (typeof He != "boolean" && He !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (oe(ke, "indent") && ke.indent !== null && ke.indent !== "	" && !(parseInt(ke.indent, 10) === ke.indent && ke.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (oe(ke, "numericSeparator") && typeof ke.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var Ge = ke.numericSeparator;
    if (typeof ie > "u") return "undefined";
    if (ie === null) return "null";
    if (typeof ie == "boolean") return ie ? "true" : "false";
    if (typeof ie == "string") return se(ie, ke);
    if (typeof ie == "number") {
      if (ie === 0) return 1 / 0 / ie > 0 ? "0" : "-0";
      var Ue = String(ie);
      return Ge ? K(ie, Ue) : Ue;
    }
    if (typeof ie == "bigint") {
      var Qe = String(ie) + "n";
      return Ge ? K(ie, Qe) : Qe;
    }
    var Tt = typeof ke.depth > "u" ? 5 : ke.depth;
    if (typeof xe > "u" && (xe = 0), xe >= Tt && Tt > 0 && typeof ie == "object") return be(ie) ? "[Array]" : "[Object]";
    var Ye = X(ke, xe);
    if (typeof Te > "u") Te = [];
    else if (ee(Te, ie) >= 0) return "[Circular]";
    function Ve(Je, ft, vt) {
      if (ft && (Te = C.call(Te), Te.push(ft)), vt) {
        var Xe = { depth: ke.depth };
        return oe(ke, "quoteStyle") && (Xe.quoteStyle = ke.quoteStyle), V(Je, Xe, xe + 1, Te);
      }
      return V(Je, ke, xe + 1, Te);
    }
    if (typeof ie == "function" && !we(ie)) {
      var Yt = W(ie), Ot = Se(ie, Ve);
      return "[Function" + (Yt ? ": " + Yt : " (anonymous)") + "]" + (Ot.length > 0 ? " { " + T.call(Ot, ", ") + " }" : "");
    }
    if (G(ie)) {
      var Ut = D ? _.call(String(ie), /^(Symbol\(.*\))_[^)]*$/, "$1") : q.call(ie);
      return typeof ie == "object" && !D ? l(Ut) : Ut;
    }
    if (ve(ie)) {
      for (var k = "<" + v.call(String(ie.nodeName)), j = ie.attributes || [], _e = 0; _e < j.length; _e++) k += " " + j[_e].name + "=" + R(J(j[_e].value), "double", ke);
      return k += ">", ie.childNodes && ie.childNodes.length && (k += "..."), k += "</" + v.call(String(ie.nodeName)) + ">", k;
    }
    if (be(ie)) {
      if (ie.length === 0) return "[]";
      var Ee = Se(ie, Ve);
      return Ye && !U(Ee) ? "[" + fe(Ee, Ye) + "]" : "[ " + T.call(Ee, ", ") + " ]";
    }
    if (H(ie)) {
      var Ae = Se(ie, Ve);
      return !("cause" in Error.prototype) && "cause" in ie && !ae.call(ie, "cause") ? "{ [" + String(ie) + "] " + T.call(E.call("[cause]: " + Ve(ie.cause), Ae), ", ") + " }" : Ae.length === 0 ? "[" + String(ie) + "]" : "{ [" + String(ie) + "] " + T.call(Ae, ", ") + " }";
    }
    if (typeof ie == "object" && He) {
      if (Z && typeof ie[Z] == "function" && re) return re(ie, { depth: Tt - xe });
      if (He !== "symbol" && typeof ie.inspect == "function") return ie.inspect();
    }
    if (he(ie)) {
      var je = [];
      return a && a.call(ie, function(Je, ft) {
        je.push(Ve(ft, ie, !0) + " => " + Ve(Je, ie));
      }), x("Map", s.call(ie), je, Ye);
    }
    if ($(ie)) {
      var We = [];
      return n && n.call(ie, function(Je) {
        We.push(Ve(Je, ie));
      }), x("Set", t.call(ie), We, Ye);
    }
    if (pe(ie)) return w("WeakMap");
    if (ge(ie)) return w("WeakSet");
    if (me(ie)) return w("WeakRef");
    if (ne(ie)) return l(Ve(Number(ie)));
    if (Y(ie)) return l(Ve(L.call(ie)));
    if (z(ie)) return l(c.call(ie));
    if (N(ie)) return l(Ve(String(ie)));
    if (typeof window < "u" && ie === window) return "{ [object Window] }";
    if (typeof globalThis < "u" && ie === globalThis || typeof mr < "u" && ie === mr) return "{ [object globalThis] }";
    if (!te(ie) && !we(ie)) {
      var Ke = Se(ie, Ve), Lt = Q ? Q(ie) === Object.prototype : ie instanceof Object || ie.constructor === Object, Dt = ie instanceof Object ? "" : "null prototype", Ft = !Lt && B && Object(ie) === ie && B in ie ? p.call(M(ie), 8, -1) : Dt ? "Object" : "", Jt = Lt || typeof ie.constructor != "function" ? "" : ie.constructor.name ? ie.constructor.name + " " : "", mt = Jt + (Ft || Dt ? "[" + T.call(E.call([], Ft || [], Dt || []), ": ") + "] " : "");
      return Ke.length === 0 ? mt + "{}" : Ye ? mt + "{" + fe(Ke, Ye) + "}" : mt + "{ " + T.call(Ke, ", ") + " }";
    }
    return String(ie);
  };
  function R(V, ie, Ie) {
    var xe = (Ie.quoteStyle || ie) === "double" ? '"' : "'";
    return xe + V + xe;
  }
  function J(V) {
    return _.call(String(V), /"/g, "&quot;");
  }
  function be(V) {
    return M(V) === "[object Array]" && (!B || !(typeof V == "object" && B in V));
  }
  function te(V) {
    return M(V) === "[object Date]" && (!B || !(typeof V == "object" && B in V));
  }
  function we(V) {
    return M(V) === "[object RegExp]" && (!B || !(typeof V == "object" && B in V));
  }
  function H(V) {
    return M(V) === "[object Error]" && (!B || !(typeof V == "object" && B in V));
  }
  function N(V) {
    return M(V) === "[object String]" && (!B || !(typeof V == "object" && B in V));
  }
  function ne(V) {
    return M(V) === "[object Number]" && (!B || !(typeof V == "object" && B in V));
  }
  function z(V) {
    return M(V) === "[object Boolean]" && (!B || !(typeof V == "object" && B in V));
  }
  function G(V) {
    if (D) return V && typeof V == "object" && V instanceof Symbol;
    if (typeof V == "symbol") return !0;
    if (!V || typeof V != "object" || !q) return !1;
    try {
      return q.call(V), !0;
    } catch {
    }
    return !1;
  }
  function Y(V) {
    if (!V || typeof V != "object" || !L) return !1;
    try {
      return L.call(V), !0;
    } catch {
    }
    return !1;
  }
  var ye = Object.prototype.hasOwnProperty || function(V) {
    return V in (this || mr);
  };
  function oe(V, ie) {
    return ye.call(V, ie);
  }
  function M(V) {
    return y.call(V);
  }
  function W(V) {
    if (V.name) return V.name;
    var ie = S.call(b.call(V), /^function\s*([\w$]+)/);
    return ie ? ie[1] : null;
  }
  function ee(V, ie) {
    if (V.indexOf) return V.indexOf(ie);
    for (var Ie = 0, xe = V.length; Ie < xe; Ie++) if (V[Ie] === ie) return Ie;
    return -1;
  }
  function he(V) {
    if (!s || !V || typeof V != "object") return !1;
    try {
      s.call(V);
      try {
        t.call(V);
      } catch {
        return !0;
      }
      return V instanceof Map;
    } catch {
    }
    return !1;
  }
  function pe(V) {
    if (!i || !V || typeof V != "object") return !1;
    try {
      i.call(V, i);
      try {
        g.call(V, g);
      } catch {
        return !0;
      }
      return V instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function me(V) {
    if (!m || !V || typeof V != "object") return !1;
    try {
      return m.call(V), !0;
    } catch {
    }
    return !1;
  }
  function $(V) {
    if (!t || !V || typeof V != "object") return !1;
    try {
      t.call(V);
      try {
        s.call(V);
      } catch {
        return !0;
      }
      return V instanceof Set;
    } catch {
    }
    return !1;
  }
  function ge(V) {
    if (!g || !V || typeof V != "object") return !1;
    try {
      g.call(V, g);
      try {
        i.call(V, i);
      } catch {
        return !0;
      }
      return V instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function ve(V) {
    return !V || typeof V != "object" ? !1 : typeof HTMLElement < "u" && V instanceof HTMLElement ? !0 : typeof V.nodeName == "string" && typeof V.getAttribute == "function";
  }
  function se(V, ie) {
    if (V.length > ie.maxStringLength) {
      var Ie = V.length - ie.maxStringLength, xe = "... " + Ie + " more character" + (Ie > 1 ? "s" : "");
      return se(p.call(V, 0, ie.maxStringLength), ie) + xe;
    }
    var Te = _.call(_.call(V, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Oe);
    return R(Te, "single", ie);
  }
  function Oe(V) {
    var ie = V.charCodeAt(0), Ie = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[ie];
    return Ie ? "\\" + Ie : "\\x" + (ie < 16 ? "0" : "") + I.call(ie.toString(16));
  }
  function l(V) {
    return "Object(" + V + ")";
  }
  function w(V) {
    return V + " { ? }";
  }
  function x(V, ie, Ie, xe) {
    var Te = xe ? fe(Ie, xe) : T.call(Ie, ", ");
    return V + " (" + ie + ") {" + Te + "}";
  }
  function U(V) {
    for (var ie = 0; ie < V.length; ie++) if (ee(V[ie], `
`) >= 0) return !1;
    return !0;
  }
  function X(V, ie) {
    var Ie;
    if (V.indent === "	") Ie = "	";
    else if (typeof V.indent == "number" && V.indent > 0) Ie = T.call(Array(V.indent + 1), " ");
    else return null;
    return { base: Ie, prev: T.call(Array(ie + 1), Ie) };
  }
  function fe(V, ie) {
    if (V.length === 0) return "";
    var Ie = `
` + ie.prev + ie.base;
    return Ie + T.call(V, "," + Ie) + `
` + ie.prev;
  }
  function Se(V, ie) {
    var Ie = be(V), xe = [];
    if (Ie) {
      xe.length = V.length;
      for (var Te = 0; Te < V.length; Te++) xe[Te] = oe(V, Te) ? ie(V[Te], V) : "";
    }
    var ke = typeof O == "function" ? O(V) : [], He;
    if (D) {
      He = {};
      for (var Ge = 0; Ge < ke.length; Ge++) He["$" + ke[Ge]] = ke[Ge];
    }
    for (var Ue in V) oe(V, Ue) && (Ie && String(Number(Ue)) === Ue && Ue < V.length || D && He["$" + Ue] instanceof Symbol || (A.call(/[^\w$]/, Ue) ? xe.push(ie(Ue, V) + ": " + ie(V[Ue], V)) : xe.push(Ue + ": " + ie(V[Ue], V))));
    if (typeof O == "function") for (var Qe = 0; Qe < ke.length; Qe++) ae.call(V, ke[Qe]) && xe.push("[" + ie(ke[Qe]) + "]: " + ie(V[ke[Qe]], V));
    return xe;
  }
  return br;
}
function Fu() {
  if (Ti) return vr;
  Ti = !0;
  var h = Bt(), f = Iu(), s = Du(), a = Qt(), u = h("%WeakMap%", !0), r = h("%Map%", !0), t = f("WeakMap.prototype.get", !0), n = f("WeakMap.prototype.set", !0), e = f("WeakMap.prototype.has", !0), i = f("Map.prototype.get", !0), o = f("Map.prototype.set", !0), g = f("Map.prototype.has", !0), d = function(b, S) {
    for (var p = b, _; (_ = p.next) !== null; p = _) if (_.key === S) return p.next = _.next, _.next = b.next, b.next = _, _;
  }, m = function(b, S) {
    var p = d(b, S);
    return p && p.value;
  }, c = function(b, S, p) {
    var _ = d(b, S);
    _ ? _.value = p : b.next = { key: S, next: b.next, value: p };
  }, y = function(b, S) {
    return !!d(b, S);
  };
  return vr = function() {
    var b, S, p, _ = { assert: function(I) {
      if (!_.has(I)) throw new a("Side channel does not contain " + s(I));
    }, get: function(I) {
      if (u && I && (typeof I == "object" || typeof I == "function")) {
        if (b) return t(b, I);
      } else if (r) {
        if (S) return i(S, I);
      } else if (p) return m(p, I);
    }, has: function(I) {
      if (u && I && (typeof I == "object" || typeof I == "function")) {
        if (b) return e(b, I);
      } else if (r) {
        if (S) return g(S, I);
      } else if (p) return y(p, I);
      return !1;
    }, set: function(I, v) {
      u && I && (typeof I == "object" || typeof I == "function") ? (b || (b = new u()), n(b, I, v)) : r ? (S || (S = new r()), o(S, I, v)) : (p || (p = { key: {}, next: null }), c(p, I, v));
    } };
    return _;
  }, vr;
}
function Vi() {
  if (Oi) return wr;
  Oi = !0;
  var h = String.prototype.replace, f = /%20/g, s = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
  return wr = { default: s.RFC3986, formatters: { RFC1738: function(a) {
    return h.call(a, f, "+");
  }, RFC3986: function(a) {
    return String(a);
  } }, RFC1738: s.RFC1738, RFC3986: s.RFC3986 }, wr;
}
function fa() {
  if (ki) return _r;
  ki = !0;
  var h = Vi(), f = Object.prototype.hasOwnProperty, s = Array.isArray, a = (function() {
    for (var b = [], S = 0; S < 256; ++S) b.push("%" + ((S < 16 ? "0" : "") + S.toString(16)).toUpperCase());
    return b;
  })(), u = function(b) {
    for (; b.length > 1; ) {
      var S = b.pop(), p = S.obj[S.prop];
      if (s(p)) {
        for (var _ = [], I = 0; I < p.length; ++I) typeof p[I] < "u" && _.push(p[I]);
        S.obj[S.prop] = _;
      }
    }
  }, r = function(b, S) {
    for (var p = S && S.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, _ = 0; _ < b.length; ++_) typeof b[_] < "u" && (p[_] = b[_]);
    return p;
  }, t = function b(S, p, _) {
    if (!p) return S;
    if (typeof p != "object") {
      if (s(S)) S.push(p);
      else if (S && typeof S == "object") (_ && (_.plainObjects || _.allowPrototypes) || !f.call(Object.prototype, p)) && (S[p] = !0);
      else return [S, p];
      return S;
    }
    if (!S || typeof S != "object") return [S].concat(p);
    var I = S;
    return s(S) && !s(p) && (I = r(S, _)), s(S) && s(p) ? (p.forEach(function(v, A) {
      if (f.call(S, A)) {
        var E = S[A];
        E && typeof E == "object" && v && typeof v == "object" ? S[A] = b(E, v, _) : S.push(v);
      } else S[A] = v;
    }), S) : Object.keys(p).reduce(function(v, A) {
      var E = p[A];
      return f.call(v, A) ? v[A] = b(v[A], E, _) : v[A] = E, v;
    }, I);
  }, n = function(b, S) {
    return Object.keys(S).reduce(function(p, _) {
      return p[_] = S[_], p;
    }, b);
  }, e = function(b, S, p) {
    var _ = b.replace(/\+/g, " ");
    if (p === "iso-8859-1") return _.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(_);
    } catch {
      return _;
    }
  }, i = 1024, o = function(b, S, p, _, I) {
    if (b.length === 0) return b;
    var v = b;
    if (typeof b == "symbol" ? v = Symbol.prototype.toString.call(b) : typeof b != "string" && (v = String(b)), p === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(O) {
      return "%26%23" + parseInt(O.slice(2), 16) + "%3B";
    });
    for (var A = "", E = 0; E < v.length; E += i) {
      for (var T = v.length >= i ? v.slice(E, E + i) : v, C = [], P = 0; P < T.length; ++P) {
        var L = T.charCodeAt(P);
        if (L === 45 || L === 46 || L === 95 || L === 126 || L >= 48 && L <= 57 || L >= 65 && L <= 90 || L >= 97 && L <= 122 || I === h.RFC1738 && (L === 40 || L === 41)) {
          C[C.length] = T.charAt(P);
          continue;
        }
        if (L < 128) {
          C[C.length] = a[L];
          continue;
        }
        if (L < 2048) {
          C[C.length] = a[192 | L >> 6] + a[128 | L & 63];
          continue;
        }
        if (L < 55296 || L >= 57344) {
          C[C.length] = a[224 | L >> 12] + a[128 | L >> 6 & 63] + a[128 | L & 63];
          continue;
        }
        P += 1, L = 65536 + ((L & 1023) << 10 | T.charCodeAt(P) & 1023), C[C.length] = a[240 | L >> 18] + a[128 | L >> 12 & 63] + a[128 | L >> 6 & 63] + a[128 | L & 63];
      }
      A += C.join("");
    }
    return A;
  }, g = function(b) {
    for (var S = [{ obj: { o: b }, prop: "o" }], p = [], _ = 0; _ < S.length; ++_) for (var I = S[_], v = I.obj[I.prop], A = Object.keys(v), E = 0; E < A.length; ++E) {
      var T = A[E], C = v[T];
      typeof C == "object" && C !== null && p.indexOf(C) === -1 && (S.push({ obj: v, prop: T }), p.push(C));
    }
    return u(S), b;
  }, d = function(b) {
    return Object.prototype.toString.call(b) === "[object RegExp]";
  }, m = function(b) {
    return !b || typeof b != "object" ? !1 : !!(b.constructor && b.constructor.isBuffer && b.constructor.isBuffer(b));
  }, c = function(b, S) {
    return [].concat(b, S);
  }, y = function(b, S) {
    if (s(b)) {
      for (var p = [], _ = 0; _ < b.length; _ += 1) p.push(S(b[_]));
      return p;
    }
    return S(b);
  };
  return _r = { arrayToObject: r, assign: n, combine: c, compact: g, decode: e, encode: o, isBuffer: m, isRegExp: d, maybeMap: y, merge: t }, _r;
}
function Wu() {
  if (Pi) return Sr;
  Pi = !0;
  var h = Fu(), f = fa(), s = Vi(), a = Object.prototype.hasOwnProperty, u = { brackets: function(y) {
    return y + "[]";
  }, comma: "comma", indices: function(y, b) {
    return y + "[" + b + "]";
  }, repeat: function(y) {
    return y;
  } }, r = Array.isArray, t = Array.prototype.push, n = function(y, b) {
    t.apply(y, r(b) ? b : [b]);
  }, e = Date.prototype.toISOString, i = s.default, o = { addQueryPrefix: !1, allowDots: !1, allowEmptyArrays: !1, arrayFormat: "indices", charset: "utf-8", charsetSentinel: !1, delimiter: "&", encode: !0, encodeDotInKeys: !1, encoder: f.encode, encodeValuesOnly: !1, format: i, formatter: s.formatters[i], indices: !1, serializeDate: function(y) {
    return e.call(y);
  }, skipNulls: !1, strictNullHandling: !1 }, g = function(y) {
    return typeof y == "string" || typeof y == "number" || typeof y == "boolean" || typeof y == "symbol" || typeof y == "bigint";
  }, d = {}, m = function y(b, S, p, _, I, v, A, E, T, C, P, L, O, q, D, B, ae, Q) {
    for (var K = b, re = Q, F = 0, Z = !1; (re = re.get(d)) !== void 0 && !Z; ) {
      var R = re.get(b);
      if (F += 1, typeof R < "u") {
        if (R === F) throw new RangeError("Cyclic object value");
        Z = !0;
      }
      typeof re.get(d) > "u" && (F = 0);
    }
    if (typeof C == "function" ? K = C(S, K) : K instanceof Date ? K = O(K) : p === "comma" && r(K) && (K = f.maybeMap(K, function(M) {
      return M instanceof Date ? O(M) : M;
    })), K === null) {
      if (v) return T && !B ? T(S, o.encoder, ae, "key", q) : S;
      K = "";
    }
    if (g(K) || f.isBuffer(K)) {
      if (T) {
        var J = B ? S : T(S, o.encoder, ae, "key", q);
        return [D(J) + "=" + D(T(K, o.encoder, ae, "value", q))];
      }
      return [D(S) + "=" + D(String(K))];
    }
    var be = [];
    if (typeof K > "u") return be;
    var te;
    if (p === "comma" && r(K)) B && T && (K = f.maybeMap(K, T)), te = [{ value: K.length > 0 ? K.join(",") || null : void 0 }];
    else if (r(C)) te = C;
    else {
      var we = Object.keys(K);
      te = P ? we.sort(P) : we;
    }
    var H = E ? S.replace(/\./g, "%2E") : S, N = _ && r(K) && K.length === 1 ? H + "[]" : H;
    if (I && r(K) && K.length === 0) return N + "[]";
    for (var ne = 0; ne < te.length; ++ne) {
      var z = te[ne], G = typeof z == "object" && typeof z.value < "u" ? z.value : K[z];
      if (!(A && G === null)) {
        var Y = L && E ? z.replace(/\./g, "%2E") : z, ye = r(K) ? typeof p == "function" ? p(N, Y) : N : N + (L ? "." + Y : "[" + Y + "]");
        Q.set(b, F);
        var oe = h();
        oe.set(d, Q), n(be, y(G, ye, p, _, I, v, A, E, p === "comma" && B && r(K) ? null : T, C, P, L, O, q, D, B, ae, oe));
      }
    }
    return be;
  }, c = function(y) {
    if (!y) return o;
    if (typeof y.allowEmptyArrays < "u" && typeof y.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof y.encodeDotInKeys < "u" && typeof y.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (y.encoder !== null && typeof y.encoder < "u" && typeof y.encoder != "function") throw new TypeError("Encoder has to be a function.");
    var b = y.charset || o.charset;
    if (typeof y.charset < "u" && y.charset !== "utf-8" && y.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var S = s.default;
    if (typeof y.format < "u") {
      if (!a.call(s.formatters, y.format)) throw new TypeError("Unknown format option provided.");
      S = y.format;
    }
    var p = s.formatters[S], _ = o.filter;
    (typeof y.filter == "function" || r(y.filter)) && (_ = y.filter);
    var I;
    if (y.arrayFormat in u ? I = y.arrayFormat : "indices" in y ? I = y.indices ? "indices" : "repeat" : I = o.arrayFormat, "commaRoundTrip" in y && typeof y.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var v = typeof y.allowDots > "u" ? y.encodeDotInKeys === !0 ? !0 : o.allowDots : !!y.allowDots;
    return { addQueryPrefix: typeof y.addQueryPrefix == "boolean" ? y.addQueryPrefix : o.addQueryPrefix, allowDots: v, allowEmptyArrays: typeof y.allowEmptyArrays == "boolean" ? !!y.allowEmptyArrays : o.allowEmptyArrays, arrayFormat: I, charset: b, charsetSentinel: typeof y.charsetSentinel == "boolean" ? y.charsetSentinel : o.charsetSentinel, commaRoundTrip: y.commaRoundTrip, delimiter: typeof y.delimiter > "u" ? o.delimiter : y.delimiter, encode: typeof y.encode == "boolean" ? y.encode : o.encode, encodeDotInKeys: typeof y.encodeDotInKeys == "boolean" ? y.encodeDotInKeys : o.encodeDotInKeys, encoder: typeof y.encoder == "function" ? y.encoder : o.encoder, encodeValuesOnly: typeof y.encodeValuesOnly == "boolean" ? y.encodeValuesOnly : o.encodeValuesOnly, filter: _, format: S, formatter: p, serializeDate: typeof y.serializeDate == "function" ? y.serializeDate : o.serializeDate, skipNulls: typeof y.skipNulls == "boolean" ? y.skipNulls : o.skipNulls, sort: typeof y.sort == "function" ? y.sort : null, strictNullHandling: typeof y.strictNullHandling == "boolean" ? y.strictNullHandling : o.strictNullHandling };
  };
  return Sr = function(y, b) {
    var S = y, p = c(b), _, I;
    typeof p.filter == "function" ? (I = p.filter, S = I("", S)) : r(p.filter) && (I = p.filter, _ = I);
    var v = [];
    if (typeof S != "object" || S === null) return "";
    var A = u[p.arrayFormat], E = A === "comma" && p.commaRoundTrip;
    _ || (_ = Object.keys(S)), p.sort && _.sort(p.sort);
    for (var T = h(), C = 0; C < _.length; ++C) {
      var P = _[C];
      p.skipNulls && S[P] === null || n(v, m(S[P], P, A, E, p.allowEmptyArrays, p.strictNullHandling, p.skipNulls, p.encodeDotInKeys, p.encode ? p.encoder : null, p.filter, p.sort, p.allowDots, p.serializeDate, p.format, p.formatter, p.encodeValuesOnly, p.charset, T));
    }
    var L = v.join(p.delimiter), O = p.addQueryPrefix === !0 ? "?" : "";
    return p.charsetSentinel && (p.charset === "iso-8859-1" ? O += "utf8=%26%2310003%3B&" : O += "utf8=%E2%9C%93&"), L.length > 0 ? O + L : "";
  }, Sr;
}
function qu() {
  if (Ri) return Er;
  Ri = !0;
  var h = fa(), f = Object.prototype.hasOwnProperty, s = Array.isArray, a = { allowDots: !1, allowEmptyArrays: !1, allowPrototypes: !1, allowSparse: !1, arrayLimit: 20, charset: "utf-8", charsetSentinel: !1, comma: !1, decodeDotInKeys: !1, decoder: h.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: !1, interpretNumericEntities: !1, parameterLimit: 1e3, parseArrays: !0, plainObjects: !1, strictDepth: !1, strictNullHandling: !1 }, u = function(d) {
    return d.replace(/&#(\d+);/g, function(m, c) {
      return String.fromCharCode(parseInt(c, 10));
    });
  }, r = function(d, m) {
    return d && typeof d == "string" && m.comma && d.indexOf(",") > -1 ? d.split(",") : d;
  }, t = "utf8=%26%2310003%3B", n = "utf8=%E2%9C%93", e = function(d, m) {
    var c = { __proto__: null }, y = m.ignoreQueryPrefix ? d.replace(/^\?/, "") : d;
    y = y.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var b = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, S = y.split(m.delimiter, b), p = -1, _, I = m.charset;
    if (m.charsetSentinel) for (_ = 0; _ < S.length; ++_) S[_].indexOf("utf8=") === 0 && (S[_] === n ? I = "utf-8" : S[_] === t && (I = "iso-8859-1"), p = _, _ = S.length);
    for (_ = 0; _ < S.length; ++_) if (_ !== p) {
      var v = S[_], A = v.indexOf("]="), E = A === -1 ? v.indexOf("=") : A + 1, T, C;
      E === -1 ? (T = m.decoder(v, a.decoder, I, "key"), C = m.strictNullHandling ? null : "") : (T = m.decoder(v.slice(0, E), a.decoder, I, "key"), C = h.maybeMap(r(v.slice(E + 1), m), function(L) {
        return m.decoder(L, a.decoder, I, "value");
      })), C && m.interpretNumericEntities && I === "iso-8859-1" && (C = u(C)), v.indexOf("[]=") > -1 && (C = s(C) ? [C] : C);
      var P = f.call(c, T);
      P && m.duplicates === "combine" ? c[T] = h.combine(c[T], C) : (!P || m.duplicates === "last") && (c[T] = C);
    }
    return c;
  }, i = function(d, m, c, y) {
    for (var b = y ? m : r(m, c), S = d.length - 1; S >= 0; --S) {
      var p, _ = d[S];
      if (_ === "[]" && c.parseArrays) p = c.allowEmptyArrays && (b === "" || c.strictNullHandling && b === null) ? [] : [].concat(b);
      else {
        p = c.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        var I = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _, v = c.decodeDotInKeys ? I.replace(/%2E/g, ".") : I, A = parseInt(v, 10);
        !c.parseArrays && v === "" ? p = { 0: b } : !isNaN(A) && _ !== v && String(A) === v && A >= 0 && c.parseArrays && A <= c.arrayLimit ? (p = [], p[A] = b) : v !== "__proto__" && (p[v] = b);
      }
      b = p;
    }
    return b;
  }, o = function(d, m, c, y) {
    if (d) {
      var b = c.allowDots ? d.replace(/\.([^.[]+)/g, "[$1]") : d, S = /(\[[^[\]]*])/, p = /(\[[^[\]]*])/g, _ = c.depth > 0 && S.exec(b), I = _ ? b.slice(0, _.index) : b, v = [];
      if (I) {
        if (!c.plainObjects && f.call(Object.prototype, I) && !c.allowPrototypes) return;
        v.push(I);
      }
      for (var A = 0; c.depth > 0 && (_ = p.exec(b)) !== null && A < c.depth; ) {
        if (A += 1, !c.plainObjects && f.call(Object.prototype, _[1].slice(1, -1)) && !c.allowPrototypes) return;
        v.push(_[1]);
      }
      if (_) {
        if (c.strictDepth === !0) throw new RangeError("Input depth exceeded depth option of " + c.depth + " and strictDepth is true");
        v.push("[" + b.slice(_.index) + "]");
      }
      return i(v, m, c, y);
    }
  }, g = function(d) {
    if (!d) return a;
    if (typeof d.allowEmptyArrays < "u" && typeof d.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof d.decodeDotInKeys < "u" && typeof d.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (d.decoder !== null && typeof d.decoder < "u" && typeof d.decoder != "function") throw new TypeError("Decoder has to be a function.");
    if (typeof d.charset < "u" && d.charset !== "utf-8" && d.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var m = typeof d.charset > "u" ? a.charset : d.charset, c = typeof d.duplicates > "u" ? a.duplicates : d.duplicates;
    if (c !== "combine" && c !== "first" && c !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
    var y = typeof d.allowDots > "u" ? d.decodeDotInKeys === !0 ? !0 : a.allowDots : !!d.allowDots;
    return { allowDots: y, allowEmptyArrays: typeof d.allowEmptyArrays == "boolean" ? !!d.allowEmptyArrays : a.allowEmptyArrays, allowPrototypes: typeof d.allowPrototypes == "boolean" ? d.allowPrototypes : a.allowPrototypes, allowSparse: typeof d.allowSparse == "boolean" ? d.allowSparse : a.allowSparse, arrayLimit: typeof d.arrayLimit == "number" ? d.arrayLimit : a.arrayLimit, charset: m, charsetSentinel: typeof d.charsetSentinel == "boolean" ? d.charsetSentinel : a.charsetSentinel, comma: typeof d.comma == "boolean" ? d.comma : a.comma, decodeDotInKeys: typeof d.decodeDotInKeys == "boolean" ? d.decodeDotInKeys : a.decodeDotInKeys, decoder: typeof d.decoder == "function" ? d.decoder : a.decoder, delimiter: typeof d.delimiter == "string" || h.isRegExp(d.delimiter) ? d.delimiter : a.delimiter, depth: typeof d.depth == "number" || d.depth === !1 ? +d.depth : a.depth, duplicates: c, ignoreQueryPrefix: d.ignoreQueryPrefix === !0, interpretNumericEntities: typeof d.interpretNumericEntities == "boolean" ? d.interpretNumericEntities : a.interpretNumericEntities, parameterLimit: typeof d.parameterLimit == "number" ? d.parameterLimit : a.parameterLimit, parseArrays: d.parseArrays !== !1, plainObjects: typeof d.plainObjects == "boolean" ? d.plainObjects : a.plainObjects, strictDepth: typeof d.strictDepth == "boolean" ? !!d.strictDepth : a.strictDepth, strictNullHandling: typeof d.strictNullHandling == "boolean" ? d.strictNullHandling : a.strictNullHandling };
  };
  return Er = function(d, m) {
    var c = g(m);
    if (d === "" || d === null || typeof d > "u") return c.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (var y = typeof d == "string" ? e(d, c) : d, b = c.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, S = Object.keys(y), p = 0; p < S.length; ++p) {
      var _ = S[p], I = o(_, y[_], c, typeof d == "string");
      b = h.merge(b, I, c);
    }
    return c.allowSparse === !0 ? b : h.compact(b);
  }, Er;
}
function $u() {
  if (Ci) return Ar;
  Ci = !0;
  var h = Wu(), f = qu(), s = Vi();
  return Ar = { formats: s, parse: f, stringify: h }, Ar;
}
function zu() {
  if (Mi) return gt;
  Mi = !0;
  var h = dt;
  function f() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
  }
  var s = /^([a-z0-9.+-]+:)/i, a = /:[0-9]*$/, u = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, r = ["<", ">", '"', "`", " ", "\r", `
`, "	"], t = ["{", "}", "|", "\\", "^", "`"].concat(r), n = ["'"].concat(t), e = ["%", "/", "?", ";", "#"].concat(n), i = ["/", "?", "#"], o = 255, g = /^[+a-z0-9A-Z_-]{0,63}$/, d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, m = { javascript: !0, "javascript:": !0 }, c = { javascript: !0, "javascript:": !0 }, y = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, b = $u();
  function S(v, A, E) {
    if (v && typeof v == "object" && v instanceof f) return v;
    var T = new f();
    return T.parse(v, A, E), T;
  }
  f.prototype.parse = function(v, A, E) {
    if (typeof v != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof v);
    var T = v.indexOf("?"), C = T !== -1 && T < v.indexOf("#") ? "?" : "#", P = v.split(C), L = /\\/g;
    P[0] = P[0].replace(L, "/"), v = P.join(C);
    var O = v;
    if (O = O.trim(), !E && v.split("#").length === 1) {
      var q = u.exec(O);
      if (q) return this.path = O, this.href = O, this.pathname = q[1], q[2] ? (this.search = q[2], A ? this.query = b.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : A && (this.search = "", this.query = {}), this;
    }
    var D = s.exec(O);
    if (D) {
      D = D[0];
      var B = D.toLowerCase();
      this.protocol = B, O = O.substr(D.length);
    }
    if (E || D || O.match(/^\/\/[^@/]+@[^@/]+/)) {
      var ae = O.substr(0, 2) === "//";
      ae && !(D && c[D]) && (O = O.substr(2), this.slashes = !0);
    }
    if (!c[D] && (ae || D && !y[D])) {
      for (var Q = -1, K = 0; K < i.length; K++) {
        var re = O.indexOf(i[K]);
        re !== -1 && (Q === -1 || re < Q) && (Q = re);
      }
      var F, Z;
      Q === -1 ? Z = O.lastIndexOf("@") : Z = O.lastIndexOf("@", Q), Z !== -1 && (F = O.slice(0, Z), O = O.slice(Z + 1), this.auth = decodeURIComponent(F)), Q = -1;
      for (var K = 0; K < e.length; K++) {
        var re = O.indexOf(e[K]);
        re !== -1 && (Q === -1 || re < Q) && (Q = re);
      }
      Q === -1 && (Q = O.length), this.host = O.slice(0, Q), O = O.slice(Q), this.parseHost(), this.hostname = this.hostname || "";
      var R = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!R) for (var J = this.hostname.split(/\./), K = 0, be = J.length; K < be; K++) {
        var te = J[K];
        if (te && !te.match(g)) {
          for (var we = "", H = 0, N = te.length; H < N; H++) te.charCodeAt(H) > 127 ? we += "x" : we += te[H];
          if (!we.match(g)) {
            var ne = J.slice(0, K), z = J.slice(K + 1), G = te.match(d);
            G && (ne.push(G[1]), z.unshift(G[2])), z.length && (O = "/" + z.join(".") + O), this.hostname = ne.join(".");
            break;
          }
        }
      }
      this.hostname.length > o ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), R || (this.hostname = h.toASCII(this.hostname));
      var Y = this.port ? ":" + this.port : "", ye = this.hostname || "";
      this.host = ye + Y, this.href += this.host, R && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), O[0] !== "/" && (O = "/" + O));
    }
    if (!m[B]) for (var K = 0, be = n.length; K < be; K++) {
      var oe = n[K];
      if (O.indexOf(oe) !== -1) {
        var M = encodeURIComponent(oe);
        M === oe && (M = escape(oe)), O = O.split(oe).join(M);
      }
    }
    var W = O.indexOf("#");
    W !== -1 && (this.hash = O.substr(W), O = O.slice(0, W));
    var ee = O.indexOf("?");
    if (ee !== -1 ? (this.search = O.substr(ee), this.query = O.substr(ee + 1), A && (this.query = b.parse(this.query)), O = O.slice(0, ee)) : A && (this.search = "", this.query = {}), O && (this.pathname = O), y[B] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
      var Y = this.pathname || "", he = this.search || "";
      this.path = Y + he;
    }
    return this.href = this.format(), this;
  };
  function p(v) {
    return typeof v == "string" && (v = S(v)), v instanceof f ? v.format() : f.prototype.format.call(v);
  }
  f.prototype.format = function() {
    var v = this.auth || "";
    v && (v = encodeURIComponent(v), v = v.replace(/%3A/i, ":"), v += "@");
    var A = this.protocol || "", E = this.pathname || "", T = this.hash || "", C = !1, P = "";
    this.host ? C = v + this.host : this.hostname && (C = v + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (C += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (P = b.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: !1 }));
    var L = this.search || P && "?" + P || "";
    return A && A.substr(-1) !== ":" && (A += ":"), this.slashes || (!A || y[A]) && C !== !1 ? (C = "//" + (C || ""), E && E.charAt(0) !== "/" && (E = "/" + E)) : C || (C = ""), T && T.charAt(0) !== "#" && (T = "#" + T), L && L.charAt(0) !== "?" && (L = "?" + L), E = E.replace(/[?#]/g, function(O) {
      return encodeURIComponent(O);
    }), L = L.replace("#", "%23"), A + C + E + L + T;
  };
  function _(v, A) {
    return S(v, !1, !0).resolve(A);
  }
  f.prototype.resolve = function(v) {
    return this.resolveObject(S(v, !1, !0)).format();
  };
  function I(v, A) {
    return v ? S(v, !1, !0).resolveObject(A) : A;
  }
  return f.prototype.resolveObject = function(v) {
    if (typeof v == "string") {
      var A = new f();
      A.parse(v, !1, !0), v = A;
    }
    for (var E = new f(), T = Object.keys(this), C = 0; C < T.length; C++) {
      var P = T[C];
      E[P] = this[P];
    }
    if (E.hash = v.hash, v.href === "") return E.href = E.format(), E;
    if (v.slashes && !v.protocol) {
      for (var L = Object.keys(v), O = 0; O < L.length; O++) {
        var q = L[O];
        q !== "protocol" && (E[q] = v[q]);
      }
      return y[E.protocol] && E.hostname && !E.pathname && (E.pathname = "/", E.path = E.pathname), E.href = E.format(), E;
    }
    if (v.protocol && v.protocol !== E.protocol) {
      if (!y[v.protocol]) {
        for (var D = Object.keys(v), B = 0; B < D.length; B++) {
          var ae = D[B];
          E[ae] = v[ae];
        }
        return E.href = E.format(), E;
      }
      if (E.protocol = v.protocol, !v.host && !c[v.protocol]) {
        for (var be = (v.pathname || "").split("/"); be.length && !(v.host = be.shift()); ) ;
        v.host || (v.host = ""), v.hostname || (v.hostname = ""), be[0] !== "" && be.unshift(""), be.length < 2 && be.unshift(""), E.pathname = be.join("/");
      } else E.pathname = v.pathname;
      if (E.search = v.search, E.query = v.query, E.host = v.host || "", E.auth = v.auth, E.hostname = v.hostname || v.host, E.port = v.port, E.pathname || E.search) {
        var Q = E.pathname || "", K = E.search || "";
        E.path = Q + K;
      }
      return E.slashes = E.slashes || v.slashes, E.href = E.format(), E;
    }
    var re = E.pathname && E.pathname.charAt(0) === "/", F = v.host || v.pathname && v.pathname.charAt(0) === "/", Z = F || re || E.host && v.pathname, R = Z, J = E.pathname && E.pathname.split("/") || [], be = v.pathname && v.pathname.split("/") || [], te = E.protocol && !y[E.protocol];
    if (te && (E.hostname = "", E.port = null, E.host && (J[0] === "" ? J[0] = E.host : J.unshift(E.host)), E.host = "", v.protocol && (v.hostname = null, v.port = null, v.host && (be[0] === "" ? be[0] = v.host : be.unshift(v.host)), v.host = null), Z = Z && (be[0] === "" || J[0] === "")), F) E.host = v.host || v.host === "" ? v.host : E.host, E.hostname = v.hostname || v.hostname === "" ? v.hostname : E.hostname, E.search = v.search, E.query = v.query, J = be;
    else if (be.length) J || (J = []), J.pop(), J = J.concat(be), E.search = v.search, E.query = v.query;
    else if (v.search != null) {
      if (te) {
        E.host = J.shift(), E.hostname = E.host;
        var we = E.host && E.host.indexOf("@") > 0 ? E.host.split("@") : !1;
        we && (E.auth = we.shift(), E.hostname = we.shift(), E.host = E.hostname);
      }
      return E.search = v.search, E.query = v.query, (E.pathname !== null || E.search !== null) && (E.path = (E.pathname ? E.pathname : "") + (E.search ? E.search : "")), E.href = E.format(), E;
    }
    if (!J.length) return E.pathname = null, E.search ? E.path = "/" + E.search : E.path = null, E.href = E.format(), E;
    for (var H = J.slice(-1)[0], N = (E.host || v.host || J.length > 1) && (H === "." || H === "..") || H === "", ne = 0, z = J.length; z >= 0; z--) H = J[z], H === "." ? J.splice(z, 1) : H === ".." ? (J.splice(z, 1), ne++) : ne && (J.splice(z, 1), ne--);
    if (!Z && !R) for (; ne--; ne) J.unshift("..");
    Z && J[0] !== "" && (!J[0] || J[0].charAt(0) !== "/") && J.unshift(""), N && J.join("/").substr(-1) !== "/" && J.push("");
    var G = J[0] === "" || J[0] && J[0].charAt(0) === "/";
    if (te) {
      E.hostname = G ? "" : J.length ? J.shift() : "", E.host = E.hostname;
      var we = E.host && E.host.indexOf("@") > 0 ? E.host.split("@") : !1;
      we && (E.auth = we.shift(), E.hostname = we.shift(), E.host = E.hostname);
    }
    return Z = Z || E.host && J.length, Z && !G && J.unshift(""), J.length > 0 ? E.pathname = J.join("/") : (E.pathname = null, E.path = null), (E.pathname !== null || E.search !== null) && (E.path = (E.pathname ? E.pathname : "") + (E.search ? E.search : "")), E.auth = v.auth || E.auth, E.slashes = E.slashes || v.slashes, E.href = E.format(), E;
  }, f.prototype.parseHost = function() {
    var v = this.host, A = a.exec(v);
    A && (A = A[0], A !== ":" && (this.port = A.substr(1)), v = v.substr(0, v.length - A.length)), v && (this.hostname = v);
  }, gt.parse = S, gt.resolve = _, gt.resolveObject = I, gt.format = p, gt.Url = f, gt;
}
function ha(h) {
  if (typeof h == "string") h = new URL(h);
  else if (!(h instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
  if (h.protocol !== "file:") throw new Deno.errors.InvalidData("invalid url scheme");
  return xr ? Vu(h) : Ku(h);
}
function Vu(h) {
  let f = h.hostname, s = h.pathname;
  for (let a = 0; a < s.length; a++) if (s[a] === "%") {
    let u = s.codePointAt(a + 2) || 32;
    if (s[a + 1] === "2" && u === 102 || s[a + 1] === "5" && u === 99) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters");
  }
  if (s = s.replace(Ia, "\\"), s = decodeURIComponent(s), f !== "") return `\\\\${f}${s}`;
  {
    let a = s.codePointAt(1) | 32, u = s[2];
    if (a < Ea || a > Aa || u !== ":") throw new Deno.errors.InvalidData("file url path must be absolute");
    return s.slice(1);
  }
}
function Ku(h) {
  if (h.hostname !== "") throw new Deno.errors.InvalidData("invalid file url hostname");
  let f = h.pathname;
  for (let s = 0; s < f.length; s++) if (f[s] === "%") {
    let a = f.codePointAt(s + 2) || 32;
    if (f[s + 1] === "2" && a === 102) throw new Deno.errors.InvalidData("must not include encoded / characters");
  }
  return decodeURIComponent(f);
}
function pa(h) {
  let f = Ii.resolve(h), s = h.charCodeAt(h.length - 1);
  (s === Sa || xr && s === _a) && f[f.length - 1] !== Ii.sep && (f += "/");
  let a = new URL("file://");
  return f.includes("%") && (f = f.replace(xa, "%25")), !xr && f.includes("\\") && (f = f.replace(Ta, "%5C")), f.includes(`
`) && (f = f.replace(Oa, "%0A")), f.includes("\r") && (f = f.replace(ka, "%0D")), f.includes("	") && (f = f.replace(Pa, "%09")), a.pathname = f, a;
}
var da, br, xi, mr, vr, Ti, wr, Oi, _r, ki, Sr, Pi, Er, Ri, Ar, Ci, gt, Mi, Fe, Zo, ga, ya, ba, ma, va, wa, _a, Sa, Ea, Aa, xr, Ia, xa, Ta, Oa, ka, Pa, Hu = ze(() => {
  le(), ce(), ue(), cu(), xu(), Lu(), ua(), da = Object.freeze(/* @__PURE__ */ Object.create(null)), br = {}, xi = !1, mr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : global, vr = {}, Ti = !1, wr = {}, Oi = !1, _r = {}, ki = !1, Sr = {}, Pi = !1, Er = {}, Ri = !1, Ar = {}, Ci = !1, gt = {}, Mi = !1, Fe = zu(), Fe.parse, Fe.resolve, Fe.resolveObject, Fe.format, Fe.Url, Zo = typeof Deno < "u" ? Deno.build.os === "windows" ? "win32" : Deno.build.os : void 0, Fe.URL = typeof URL < "u" ? URL : null, Fe.pathToFileURL = pa, Fe.fileURLToPath = ha, ga = Fe.Url, ya = Fe.format, ba = Fe.resolve, ma = Fe.resolveObject, va = Fe.parse, wa = Fe.URL, _a = 92, Sa = 47, Ea = 97, Aa = 122, xr = Zo === "win32", Ia = /\//g, xa = /%/g, Ta = /\\/g, Oa = /\n/g, ka = /\r/g, Pa = /\t/g;
}), Gu = de((h, f) => {
  le(), ce(), ue(), f.exports = function() {
    throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
  };
}), Ki = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 }), h.BufferedDuplex = void 0, h.writev = a;
  var f = xt(), s = (Be(), Pe(Ne));
  function a(r, t) {
    let n = new Array(r.length);
    for (let e = 0; e < r.length; e++) typeof r[e].chunk == "string" ? n[e] = s.Buffer.from(r[e].chunk, "utf8") : n[e] = r[e].chunk;
    this._write(s.Buffer.concat(n), "binary", t);
  }
  var u = class extends f.Duplex {
    socket;
    proxy;
    isSocketOpen;
    writeQueue;
    constructor(r, t, n) {
      super({ objectMode: !0 }), this.proxy = t, this.socket = n, this.writeQueue = [], r.objectMode || (this._writev = a.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (e) => {
        !this.destroyed && this.readable && this.push(e);
      });
    }
    _read(r) {
      this.proxy.read(r);
    }
    _write(r, t, n) {
      this.isSocketOpen ? this.writeToProxy(r, t, n) : this.writeQueue.push({ chunk: r, encoding: t, cb: n });
    }
    _final(r) {
      this.writeQueue = [], this.proxy.end(r);
    }
    _destroy(r, t) {
      this.writeQueue = [], this.proxy.destroy(), t(r);
    }
    socketReady() {
      this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue();
    }
    writeToProxy(r, t, n) {
      this.proxy.write(r, t) === !1 ? this.proxy.once("drain", n) : n();
    }
    processWriteQueue() {
      for (; this.writeQueue.length > 0; ) {
        let { chunk: r, encoding: t, cb: n } = this.writeQueue.shift();
        this.writeToProxy(r, t, n);
      }
    }
  };
  h.BufferedDuplex = u;
}), Zt = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(h, "__esModule", { value: !0 }), h.streamBuilder = h.browserStreamBuilder = void 0;
  var s = (Be(), Pe(Ne)), a = f(Gu()), u = f(at()), r = xt(), t = f(Cr()), n = Ki(), e = (0, u.default)("mqttjs:ws"), i = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];
  function o(S, p) {
    let _ = `${S.protocol}://${S.hostname}:${S.port}${S.path}`;
    return typeof S.transformWsUrl == "function" && (_ = S.transformWsUrl(_, S, p)), _;
  }
  function g(S) {
    let p = S;
    return S.port || (S.protocol === "wss" ? p.port = 443 : p.port = 80), S.path || (p.path = "/"), S.wsOptions || (p.wsOptions = {}), !t.default && !S.forceNativeWebSocket && S.protocol === "wss" && i.forEach((_) => {
      Object.prototype.hasOwnProperty.call(S, _) && !Object.prototype.hasOwnProperty.call(S.wsOptions, _) && (p.wsOptions[_] = S[_]);
    }), p;
  }
  function d(S) {
    let p = g(S);
    if (p.hostname || (p.hostname = p.host), !p.hostname) {
      if (typeof document > "u") throw new Error("Could not determine host. Specify host manually.");
      let _ = new URL(document.URL);
      p.hostname = _.hostname, p.port || (p.port = Number(_.port));
    }
    return p.objectMode === void 0 && (p.objectMode = !(p.binary === !0 || p.binary === void 0)), p;
  }
  function m(S, p, _) {
    e("createWebSocket"), e(`protocol: ${_.protocolId} ${_.protocolVersion}`);
    let I = _.protocolId === "MQIsdp" && _.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    e(`creating new Websocket for url: ${p} and protocol: ${I}`);
    let v;
    return _.createWebsocket ? v = _.createWebsocket(p, [I], _) : v = new a.default(p, [I], _.wsOptions), v;
  }
  function c(S, p) {
    let _ = p.protocolId === "MQIsdp" && p.protocolVersion === 3 ? "mqttv3.1" : "mqtt", I = o(p, S), v;
    return p.createWebsocket ? v = p.createWebsocket(I, [_], p) : v = new WebSocket(I, [_]), v.binaryType = "arraybuffer", v;
  }
  var y = (S, p) => {
    e("streamBuilder");
    let _ = g(p);
    _.hostname = _.hostname || _.host || "localhost";
    let I = o(_, S), v = m(S, I, _), A = a.default.createWebSocketStream(v, _.wsOptions);
    return A.url = I, v.on("close", () => {
      A.destroy();
    }), A;
  };
  h.streamBuilder = y;
  var b = (S, p) => {
    e("browserStreamBuilder");
    let _, I = d(p).browserBufferSize || 1024 * 512, v = p.browserBufferTimeout || 1e3, A = !p.objectMode, E = c(S, p), T = P(p, B, ae);
    p.objectMode || (T._writev = n.writev.bind(T)), T.on("close", () => {
      E.close();
    });
    let C = typeof E.addEventListener < "u";
    E.readyState === E.OPEN ? (_ = T, _.socket = E) : (_ = new n.BufferedDuplex(p, T, E), C ? E.addEventListener("open", L) : E.onopen = L), C ? (E.addEventListener("close", O), E.addEventListener("error", q), E.addEventListener("message", D)) : (E.onclose = O, E.onerror = q, E.onmessage = D);
    function P(Q, K, re) {
      let F = new r.Transform({ objectMode: Q.objectMode });
      return F._write = K, F._flush = re, F;
    }
    function L() {
      e("WebSocket onOpen"), _ instanceof n.BufferedDuplex && _.socketReady();
    }
    function O(Q) {
      e("WebSocket onClose", Q), _.end(), _.destroy();
    }
    function q(Q) {
      e("WebSocket onError", Q);
      let K = new Error("WebSocket error");
      K.event = Q, _.destroy(K);
    }
    async function D(Q) {
      if (!T || !T.readable || !T.writable) return;
      let { data: K } = Q;
      K instanceof ArrayBuffer ? K = s.Buffer.from(K) : K instanceof Blob ? K = s.Buffer.from(await new Response(K).arrayBuffer()) : K = s.Buffer.from(K, "utf8"), T.push(K);
    }
    function B(Q, K, re) {
      if (E.bufferedAmount > I) {
        setTimeout(B, v, Q, K, re);
        return;
      }
      A && typeof Q == "string" && (Q = s.Buffer.from(Q, "utf8"));
      try {
        E.send(Q);
      } catch (F) {
        return re(F);
      }
      re();
    }
    function ae(Q) {
      E.close(), Q();
    }
    return _;
  };
  h.browserStreamBuilder = b;
}), Hi = {};
Mt(Hi, { Server: () => Ce, Socket: () => Ce, Stream: () => Ce, _createServerHandle: () => Ce, _normalizeArgs: () => Ce, _setSimultaneousAccepts: () => Ce, connect: () => Ce, createConnection: () => Ce, createServer: () => Ce, default: () => Ra, isIP: () => Ce, isIPv4: () => Ce, isIPv6: () => Ce });
function Ce() {
  throw new Error("Node.js net module is not supported by JSPM core outside of Node.js");
}
var Ra, Ca = ze(() => {
  le(), ce(), ue(), Ra = { _createServerHandle: Ce, _normalizeArgs: Ce, _setSimultaneousAccepts: Ce, connect: Ce, createConnection: Ce, createServer: Ce, isIP: Ce, isIPv4: Ce, isIPv6: Ce, Server: Ce, Socket: Ce, Stream: Ce };
}), Ma = de((h, f) => {
  le(), ce(), ue(), f.exports = {};
}), es = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var s = f((Ca(), Pe(Hi))), a = f(at()), u = f(Ma()), r = (0, a.default)("mqttjs:tcp"), t = (n, e) => {
    if (e.port = e.port || 1883, e.hostname = e.hostname || e.host || "localhost", e.socksProxy) return (0, u.default)(e.hostname, e.port, e.socksProxy, { timeout: e.socksTimeout });
    let { port: i, path: o } = e, g = e.hostname;
    return r("port %d and host %s", i, g), s.default.createConnection({ port: i, host: g, path: o });
  };
  h.default = t;
}), ja = {};
Mt(ja, { default: () => Na });
var Na, Qu = ze(() => {
  le(), ce(), ue(), Na = {};
}), ts = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var s = (Qu(), Pe(ja)), a = f((Ca(), Pe(Hi))), u = f(at()), r = f(Ma()), t = (0, u.default)("mqttjs:tls");
  function n(i) {
    let { host: o, port: g, socksProxy: d, ...m } = i;
    if (d !== void 0) {
      let c = (0, r.default)(o, g, d, { timeout: i.socksTimeout });
      return (0, s.connect)({ ...m, socket: c });
    }
    return (0, s.connect)(i);
  }
  var e = (i, o) => {
    o.port = o.port || 8883, o.host = o.hostname || o.host || "localhost", a.default.isIP(o.host) === 0 && (o.servername = o.host), o.rejectUnauthorized = o.rejectUnauthorized !== !1, delete o.path, t("port %d host %s rejectUnauthorized %b", o.port, o.host, o.rejectUnauthorized);
    let g = n(o);
    g.on("secureConnect", () => {
      o.rejectUnauthorized && !g.authorized ? g.emit("error", new Error("TLS not authorized")) : g.removeListener("error", d);
    });
    function d(m) {
      o.rejectUnauthorized && i.emit("error", m), g.end();
    }
    return g.on("error", d), g;
  };
  h.default = e;
}), rs = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = (Be(), Pe(Ne)), s = xt(), a = Ki(), u, r, t;
  function n() {
    let d = new s.Transform();
    return d._write = (m, c, y) => {
      u.send({ data: m.buffer, success() {
        y();
      }, fail(b) {
        y(new Error(b));
      } });
    }, d._flush = (m) => {
      u.close({ success() {
        m();
      } });
    }, d;
  }
  function e(d) {
    d.hostname || (d.hostname = "localhost"), d.path || (d.path = "/"), d.wsOptions || (d.wsOptions = {});
  }
  function i(d, m) {
    let c = d.protocol === "wxs" ? "wss" : "ws", y = `${c}://${d.hostname}${d.path}`;
    return d.port && d.port !== 80 && d.port !== 443 && (y = `${c}://${d.hostname}:${d.port}${d.path}`), typeof d.transformWsUrl == "function" && (y = d.transformWsUrl(y, d, m)), y;
  }
  function o() {
    u.onOpen(() => {
      t.socketReady();
    }), u.onMessage((d) => {
      let { data: m } = d;
      m instanceof ArrayBuffer ? m = f.Buffer.from(m) : m = f.Buffer.from(m, "utf8"), r.push(m);
    }), u.onClose(() => {
      t.emit("close"), t.end(), t.destroy();
    }), u.onError((d) => {
      let m = new Error(d.errMsg);
      t.destroy(m);
    });
  }
  var g = (d, m) => {
    if (m.hostname = m.hostname || m.host, !m.hostname) throw new Error("Could not determine host. Specify host manually.");
    let c = m.protocolId === "MQIsdp" && m.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    e(m);
    let y = i(m, d);
    u = wx.connectSocket({ url: y, protocols: [c] }), r = n(), t = new a.BufferedDuplex(m, r, u), t._destroy = (S, p) => {
      u.close({ success() {
        p && p(S);
      } });
    };
    let b = t.destroy;
    return t.destroy = (S, p) => (t.destroy = b, setTimeout(() => {
      u.close({ fail() {
        t._destroy(S, p);
      } });
    }, 0), t), o(), t;
  };
  h.default = g;
}), ns = de((h) => {
  le(), ce(), ue(), Object.defineProperty(h, "__esModule", { value: !0 });
  var f = (Be(), Pe(Ne)), s = xt(), a = Ki(), u, r, t, n = !1;
  function e() {
    let m = new s.Transform();
    return m._write = (c, y, b) => {
      u.sendSocketMessage({ data: c.buffer, success() {
        b();
      }, fail() {
        b(new Error());
      } });
    }, m._flush = (c) => {
      u.closeSocket({ success() {
        c();
      } });
    }, m;
  }
  function i(m) {
    m.hostname || (m.hostname = "localhost"), m.path || (m.path = "/"), m.wsOptions || (m.wsOptions = {});
  }
  function o(m, c) {
    let y = m.protocol === "alis" ? "wss" : "ws", b = `${y}://${m.hostname}${m.path}`;
    return m.port && m.port !== 80 && m.port !== 443 && (b = `${y}://${m.hostname}:${m.port}${m.path}`), typeof m.transformWsUrl == "function" && (b = m.transformWsUrl(b, m, c)), b;
  }
  function g() {
    n || (n = !0, u.onSocketOpen(() => {
      t.socketReady();
    }), u.onSocketMessage((m) => {
      if (typeof m.data == "string") {
        let c = f.Buffer.from(m.data, "base64");
        r.push(c);
      } else {
        let c = new FileReader();
        c.addEventListener("load", () => {
          if (c.result instanceof ArrayBuffer) {
            r.push(f.Buffer.from(c.result));
            return;
          }
          r.push(f.Buffer.from(c.result, "utf-8"));
        }), c.readAsArrayBuffer(m.data);
      }
    }), u.onSocketClose(() => {
      t.end(), t.destroy();
    }), u.onSocketError((m) => {
      t.destroy(m);
    }));
  }
  var d = (m, c) => {
    if (c.hostname = c.hostname || c.host, !c.hostname) throw new Error("Could not determine host. Specify host manually.");
    let y = c.protocolId === "MQIsdp" && c.protocolVersion === 3 ? "mqttv3.1" : "mqtt";
    i(c);
    let b = o(c, m);
    return u = c.my, u.connectSocket({ url: b, protocols: y }), r = e(), t = new a.BufferedDuplex(c, r, u), g(), t;
  };
  h.default = d;
}), Yu = de((h) => {
  le(), ce(), ue();
  var f = h && h.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  };
  Object.defineProperty(h, "__esModule", { value: !0 }), h.connectAsync = o;
  var s = f(at()), a = f((Hu(), Pe(ca))), u = f(Kn()), r = f(Cr());
  typeof Re?.nextTick != "function" && (Re.nextTick = setImmediate);
  var t = (0, s.default)("mqttjs"), n = null;
  function e(g) {
    let d;
    if (g.auth) if (d = g.auth.match(/^(.+):(.+)$/), d) {
      let [, m, c] = d;
      g.username = m, g.password = c;
    } else g.username = g.auth;
  }
  function i(g, d) {
    if (t("connecting to an MQTT broker..."), typeof g == "object" && !d && (d = g, g = ""), d = d || {}, g && typeof g == "string") {
      let y = a.default.parse(g, !0), b = {};
      if (y.port != null && (b.port = Number(y.port)), b.host = y.hostname, b.query = y.query, b.auth = y.auth, b.protocol = y.protocol, b.path = y.path, d = { ...b, ...d }, !d.protocol) throw new Error("Missing protocol");
      d.protocol = d.protocol.replace(/:$/, "");
    }
    if (d.unixSocket = d.unixSocket || d.protocol?.includes("+unix"), d.unixSocket ? d.protocol = d.protocol.replace("+unix", "") : !d.protocol?.startsWith("ws") && !d.protocol?.startsWith("wx") && delete d.path, e(d), d.query && typeof d.query.clientId == "string" && (d.clientId = d.query.clientId), r.default || d.unixSocket ? d.socksProxy = void 0 : d.socksProxy === void 0 && typeof Re < "u" && (d.socksProxy = Re.env.MQTTJS_SOCKS_PROXY), d.cert && d.key) if (d.protocol) {
      if (["mqtts", "wss", "wxs", "alis"].indexOf(d.protocol) === -1) switch (d.protocol) {
        case "mqtt":
          d.protocol = "mqtts";
          break;
        case "ws":
          d.protocol = "wss";
          break;
        case "wx":
          d.protocol = "wxs";
          break;
        case "ali":
          d.protocol = "alis";
          break;
        default:
          throw new Error(`Unknown protocol for secure connection: "${d.protocol}"!`);
      }
    } else throw new Error("Missing secure protocol key");
    if (n || (n = {}, !r.default && !d.forceNativeWebSocket ? (n.ws = Zt().streamBuilder, n.wss = Zt().streamBuilder, n.mqtt = es().default, n.tcp = es().default, n.ssl = ts().default, n.tls = n.ssl, n.mqtts = ts().default) : (n.ws = Zt().browserStreamBuilder, n.wss = Zt().browserStreamBuilder, n.wx = rs().default, n.wxs = rs().default, n.ali = ns().default, n.alis = ns().default)), !n[d.protocol]) {
      let y = ["mqtts", "wss"].indexOf(d.protocol) !== -1;
      d.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter((b, S) => y && S % 2 === 0 ? !1 : typeof n[b] == "function")[0];
    }
    if (d.clean === !1 && !d.clientId) throw new Error("Missing clientId for unclean clients");
    d.protocol && (d.defaultProtocol = d.protocol);
    function m(y) {
      return d.servers && ((!y._reconnectCount || y._reconnectCount === d.servers.length) && (y._reconnectCount = 0), d.host = d.servers[y._reconnectCount].host, d.port = d.servers[y._reconnectCount].port, d.protocol = d.servers[y._reconnectCount].protocol ? d.servers[y._reconnectCount].protocol : d.defaultProtocol, d.hostname = d.host, y._reconnectCount++), t("calling streambuilder for", d.protocol), n[d.protocol](y, d);
    }
    let c = new u.default(m, d);
    return c.on("error", () => {
    }), c;
  }
  function o(g, d, m = !0) {
    return new Promise((c, y) => {
      let b = i(g, d), S = { connect: (_) => {
        p(), c(b);
      }, end: () => {
        p(), c(b);
      }, error: (_) => {
        p(), b.end(), y(_);
      } };
      m === !1 && (S.close = () => {
        S.error(new Error("Couldn't connect to server"));
      });
      function p() {
        Object.keys(S).forEach((_) => {
          b.off(_, S[_]);
        });
      }
      Object.keys(S).forEach((_) => {
        b.on(_, S[_]);
      });
    });
  }
  h.default = i;
}), is = de((h) => {
  le(), ce(), ue();
  var f = h && h.__createBinding || (Object.create ? function(m, c, y, b) {
    b === void 0 && (b = y);
    var S = Object.getOwnPropertyDescriptor(c, y);
    (!S || ("get" in S ? !c.__esModule : S.writable || S.configurable)) && (S = { enumerable: !0, get: function() {
      return c[y];
    } }), Object.defineProperty(m, b, S);
  } : function(m, c, y, b) {
    b === void 0 && (b = y), m[b] = c[y];
  }), s = h && h.__setModuleDefault || (Object.create ? function(m, c) {
    Object.defineProperty(m, "default", { enumerable: !0, value: c });
  } : function(m, c) {
    m.default = c;
  }), a = h && h.__importStar || /* @__PURE__ */ (function() {
    var m = function(c) {
      return m = Object.getOwnPropertyNames || function(y) {
        var b = [];
        for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (b[b.length] = S);
        return b;
      }, m(c);
    };
    return function(c) {
      if (c && c.__esModule) return c;
      var y = {};
      if (c != null) for (var b = m(c), S = 0; S < b.length; S++) b[S] !== "default" && f(y, c, b[S]);
      return s(y, c), y;
    };
  })(), u = h && h.__exportStar || function(m, c) {
    for (var y in m) y !== "default" && !Object.prototype.hasOwnProperty.call(c, y) && f(c, m, y);
  }, r = h && h.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  };
  Object.defineProperty(h, "__esModule", { value: !0 }), h.ReasonCodes = h.KeepaliveManager = h.UniqueMessageIdProvider = h.DefaultMessageIdProvider = h.Store = h.MqttClient = h.connectAsync = h.connect = h.Client = void 0;
  var t = r(Kn());
  h.MqttClient = t.default;
  var n = r(Js());
  h.DefaultMessageIdProvider = n.default;
  var e = r(lu());
  h.UniqueMessageIdProvider = e.default;
  var i = r(js());
  h.Store = i.default;
  var o = a(Yu());
  h.connect = o.default, Object.defineProperty(h, "connectAsync", { enumerable: !0, get: function() {
    return o.connectAsync;
  } });
  var g = r(ia());
  h.KeepaliveManager = g.default, h.Client = t.default, u(Kn(), h), u(Nt(), h);
  var d = Pr();
  Object.defineProperty(h, "ReasonCodes", { enumerable: !0, get: function() {
    return d.ReasonCodes;
  } });
}), Ju = de((h) => {
  le(), ce(), ue();
  var f = h && h.__createBinding || (Object.create ? function(t, n, e, i) {
    i === void 0 && (i = e);
    var o = Object.getOwnPropertyDescriptor(n, e);
    (!o || ("get" in o ? !n.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return n[e];
    } }), Object.defineProperty(t, i, o);
  } : function(t, n, e, i) {
    i === void 0 && (i = e), t[i] = n[e];
  }), s = h && h.__setModuleDefault || (Object.create ? function(t, n) {
    Object.defineProperty(t, "default", { enumerable: !0, value: n });
  } : function(t, n) {
    t.default = n;
  }), a = h && h.__importStar || /* @__PURE__ */ (function() {
    var t = function(n) {
      return t = Object.getOwnPropertyNames || function(e) {
        var i = [];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (i[i.length] = o);
        return i;
      }, t(n);
    };
    return function(n) {
      if (n && n.__esModule) return n;
      var e = {};
      if (n != null) for (var i = t(n), o = 0; o < i.length; o++) i[o] !== "default" && f(e, n, i[o]);
      return s(e, n), e;
    };
  })(), u = h && h.__exportStar || function(t, n) {
    for (var e in t) e !== "default" && !Object.prototype.hasOwnProperty.call(n, e) && f(n, t, e);
  };
  Object.defineProperty(h, "__esModule", { value: !0 });
  var r = a(is());
  h.default = r, u(is(), h);
});
const Xu = Ju();
/*! Bundled license information:

@jspm/core/nodelibs/browser/chunk-DtuTasat.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@babel/runtime/helpers/regenerator.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
var Zu = Object.defineProperty, ec = Object.getOwnPropertyDescriptor, Ba = (h, f, s, a) => {
  for (var u = a > 1 ? void 0 : a ? ec(f, s) : f, r = h.length - 1, t; r >= 0; r--)
    (t = h[r]) && (u = (a ? t(f, s, u) : t(u)) || u);
  return a && u && Zu(f, s, u), u;
};
let Ct = class extends Da {
  loggerFactory;
  logMqtt;
  url;
  client = null;
  topicsMaps = /* @__PURE__ */ new Map();
  constructor() {
    super();
  }
  init(h) {
    this.logMqtt = this.loggerFactory.createLogger("daanse:mqtt:connection"), this.logMqtt("MQTTConnection configuration", h), this.client = Xu.connect(h.url), h.topic && this.client.subscribe(h.topic), this.client.on("connect", () => {
      super.onConnect();
    }), this.client.on("message", (f, s) => {
      this.logMqtt("Message:", f, s.toString()), super.onMessage(s.toString(), f);
    }), this.client.on("close", () => {
      super.onClose();
    }), this.client.on("error", (f) => {
      super.onError(f);
    });
  }
  setConfig(h) {
  }
  connectStore(h, f) {
    const s = this.topicsMaps.has(h), a = this.topicsMaps.get(h);
    this.topicsMaps.set(h, f), (!s || a !== f) && this.client && this.client.connected && (this.client.subscribe(f), this.logMqtt(" Subscribed to", f));
  }
  disconnectStore(h) {
    if (!this.topicsMaps.has(h))
      return;
    const f = this.topicsMaps.get(h);
    this.topicsMaps.delete(h), !Array.from(this.topicsMaps.values()).includes(f) && f && this.client && this.client.connected && (this.client.unsubscribe(f), this.logMqtt(" Unsubscribed from", f));
  }
  removeTopics() {
    if (!this.client || !this.client.connected)
      return;
    const h = new Set(Array.from(this.topicsMaps.values()));
    this.client.unsubscribe(Array.from(h));
  }
  updateTopicsList() {
    if (!this.client || !this.client.connected)
      return;
    const h = new Set(Array.from(this.topicsMaps.values()));
    this.client.subscribe(Array.from(h));
  }
  hasTopics() {
    return !0;
  }
  static validateConfiguration(h) {
    return !!h.url;
  }
};
Ba([
  Fa(qa)
], Ct.prototype, "loggerFactory", 2);
Ct = Ba([
  Wa()
], Ct);
const Gi = $a("MQTTConnectionFactory"), tc = Symbol.for(Gi);
function Ua({ services: h }) {
  h.register(Gi, (f) => {
    if (!Ct.validateConfiguration(f))
      throw new Error(
        "Invalid MQTTConnection configuration. Please provide a valid configuration."
      );
    const s = h.construct(Ct);
    return s.init(f), s;
  });
}
function La({ services: h }) {
  h.unregister(Gi);
}
const rc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get MQTTConnection() {
    return Ct;
  },
  activate: Ua,
  deactivate: La,
  factorySymbol: tc
}, Symbol.toStringTag, { value: "Module" })), os = "org.eclipse.daanse.board.app.lib.connection.mqtt", nc = "0.0.1-next.1";
async function ac(h) {
  const f = globalThis.__tsm__;
  if (!f)
    throw new Error(`${os}: tsm runtime is not initialized`);
  f.register(os, rc, nc, "lib.connection.mqtt"), await Ua?.(h);
}
async function lc(h) {
  await La?.(h);
}
export {
  Ct as MQTTConnection,
  ac as activate,
  lc as deactivate,
  tc as factorySymbol
};
