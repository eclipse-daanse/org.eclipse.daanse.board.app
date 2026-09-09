import { WidgetActionInterfaceImpl as e0, EVENT_ACTIONS_REGISTRY as r0, PayloadImpl as Ml, EVENT_REGISTRY_ID as i0, EVENT_ACTIONS_REGISTRY_ID as s0 } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as o0, deactivate as a0, component as n0, inject as $l } from "@eclipse-daanse/tsm";
import { defineComponent as l0, mergeModels as h0, useModel as c0, toRefs as u0, inject as Il, ref as Wo, onMounted as Ol, onUnmounted as d0, watch as Dl, nextTick as zo, createElementBlock as f0, openBlock as p0, withModifiers as g0, toDisplayString as m0 } from "vue";
import { useRoute as y0 } from "vue-router";
import { WidgetAction as Tc } from "org.eclipse.daanse.board.app.lib.events";
import { plainSettings as Rl } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { BasicEFactory as x0, BasicEPackage as b0, EPackageRegistry as k0, BasicEClass as T0, BasicEAttribute as Pl, getEcorePackage as Nl, BasicEObject as w0 } from "@emfts/core";
import { WIDGET_SERVICE_ID as S0 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: C0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), _0 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var v0 = Object.defineProperty, B0 = Object.getOwnPropertyDescriptor, wc = (e, t, r, i) => {
  for (var s = B0(t, r), o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (s = a(t, r, s) || s);
  return s && v0(t, r, s), s;
};
class no extends e0 {
  refresh() {
    throw new Error("refresh not implemented");
  }
  zoom(t) {
    throw new Error("zoom not implemented");
  }
}
wc([
  Tc({ eventType: "mermaid.refresh" })
], no.prototype, "refresh");
wc([
  Tc({ eventType: "mermaid.zoom" })
], no.prototype, "zoom");
function L0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ps = { exports: {} }, F0 = ps.exports, ql;
function A0() {
  return ql || (ql = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(F0, (function() {
      var r = 1e3, i = 6e4, s = 36e5, o = "millisecond", a = "second", n = "minute", l = "hour", c = "day", h = "week", u = "month", f = "quarter", d = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
        var F = ["th", "st", "nd", "rd"], L = I % 100;
        return "[" + I + (F[(L - 20) % 10] || F[L] || F[0]) + "]";
      } }, k = function(I, F, L) {
        var M = String(I);
        return !M || M.length >= F ? I : "" + Array(F + 1 - M.length).join(L) + I;
      }, w = { s: k, z: function(I) {
        var F = -I.utcOffset(), L = Math.abs(F), M = Math.floor(L / 60), R = L % 60;
        return (F <= 0 ? "+" : "-") + k(M, 2, "0") + ":" + k(R, 2, "0");
      }, m: function I(F, L) {
        if (F.date() < L.date()) return -I(L, F);
        var M = 12 * (L.year() - F.year()) + (L.month() - F.month()), R = F.clone().add(M, u), H = L - R < 0, U = F.clone().add(M + (H ? -1 : 1), u);
        return +(-(M + (L - R) / (H ? R - U : U - R)) || 0);
      }, a: function(I) {
        return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
      }, p: function(I) {
        return { M: u, y: d, w: h, d: c, D: g, h: l, m: n, s: a, ms: o, Q: f }[I] || String(I || "").toLowerCase().replace(/s$/, "");
      }, u: function(I) {
        return I === void 0;
      } }, S = "en", v = {};
      v[S] = b;
      var B = "$isDayjsObject", O = function(I) {
        return I instanceof z || !(!I || !I[B]);
      }, N = function I(F, L, M) {
        var R;
        if (!F) return S;
        if (typeof F == "string") {
          var H = F.toLowerCase();
          v[H] && (R = H), L && (v[H] = L, R = H);
          var U = F.split("-");
          if (!R && U.length > 1) return I(U[0]);
        } else {
          var Q = F.name;
          v[Q] = F, R = Q;
        }
        return !M && R && (S = R), R || !M && S;
      }, D = function(I, F) {
        if (O(I)) return I.clone();
        var L = typeof F == "object" ? F : {};
        return L.date = I, L.args = arguments, new z(L);
      }, $ = w;
      $.l = N, $.i = O, $.w = function(I, F) {
        return D(I, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
      };
      var z = (function() {
        function I(L) {
          this.$L = N(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[B] = !0;
        }
        var F = I.prototype;
        return F.parse = function(L) {
          this.$d = (function(M) {
            var R = M.date, H = M.utc;
            if (R === null) return /* @__PURE__ */ new Date(NaN);
            if ($.u(R)) return /* @__PURE__ */ new Date();
            if (R instanceof Date) return new Date(R);
            if (typeof R == "string" && !/Z$/i.test(R)) {
              var U = R.match(y);
              if (U) {
                var Q = U[2] - 1 || 0, dt = (U[7] || "0").substring(0, 3);
                return H ? new Date(Date.UTC(U[1], Q, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, dt)) : new Date(U[1], Q, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, dt);
              }
            }
            return new Date(R);
          })(L), this.init();
        }, F.init = function() {
          var L = this.$d;
          this.$y = L.getFullYear(), this.$M = L.getMonth(), this.$D = L.getDate(), this.$W = L.getDay(), this.$H = L.getHours(), this.$m = L.getMinutes(), this.$s = L.getSeconds(), this.$ms = L.getMilliseconds();
        }, F.$utils = function() {
          return $;
        }, F.isValid = function() {
          return this.$d.toString() !== m;
        }, F.isSame = function(L, M) {
          var R = D(L);
          return this.startOf(M) <= R && R <= this.endOf(M);
        }, F.isAfter = function(L, M) {
          return D(L) < this.startOf(M);
        }, F.isBefore = function(L, M) {
          return this.endOf(M) < D(L);
        }, F.$g = function(L, M, R) {
          return $.u(L) ? this[M] : this.set(R, L);
        }, F.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, F.valueOf = function() {
          return this.$d.getTime();
        }, F.startOf = function(L, M) {
          var R = this, H = !!$.u(M) || M, U = $.p(L), Q = function(xt, Ct) {
            var vt = $.w(R.$u ? Date.UTC(R.$y, Ct, xt) : new Date(R.$y, Ct, xt), R);
            return H ? vt : vt.endOf(c);
          }, dt = function(xt, Ct) {
            return $.w(R.toDate()[xt].apply(R.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ct)), R);
          }, et = this.$W, ut = this.$M, it = this.$D, rt = "set" + (this.$u ? "UTC" : "");
          switch (U) {
            case d:
              return H ? Q(1, 0) : Q(31, 11);
            case u:
              return H ? Q(1, ut) : Q(0, ut + 1);
            case h:
              var ht = this.$locale().weekStart || 0, pt = (et < ht ? et + 7 : et) - ht;
              return Q(H ? it - pt : it + (6 - pt), ut);
            case c:
            case g:
              return dt(rt + "Hours", 0);
            case l:
              return dt(rt + "Minutes", 1);
            case n:
              return dt(rt + "Seconds", 2);
            case a:
              return dt(rt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, F.endOf = function(L) {
          return this.startOf(L, !1);
        }, F.$set = function(L, M) {
          var R, H = $.p(L), U = "set" + (this.$u ? "UTC" : ""), Q = (R = {}, R[c] = U + "Date", R[g] = U + "Date", R[u] = U + "Month", R[d] = U + "FullYear", R[l] = U + "Hours", R[n] = U + "Minutes", R[a] = U + "Seconds", R[o] = U + "Milliseconds", R)[H], dt = H === c ? this.$D + (M - this.$W) : M;
          if (H === u || H === d) {
            var et = this.clone().set(g, 1);
            et.$d[Q](dt), et.init(), this.$d = et.set(g, Math.min(this.$D, et.daysInMonth())).$d;
          } else Q && this.$d[Q](dt);
          return this.init(), this;
        }, F.set = function(L, M) {
          return this.clone().$set(L, M);
        }, F.get = function(L) {
          return this[$.p(L)]();
        }, F.add = function(L, M) {
          var R, H = this;
          L = Number(L);
          var U = $.p(M), Q = function(ut) {
            var it = D(H);
            return $.w(it.date(it.date() + Math.round(ut * L)), H);
          };
          if (U === u) return this.set(u, this.$M + L);
          if (U === d) return this.set(d, this.$y + L);
          if (U === c) return Q(1);
          if (U === h) return Q(7);
          var dt = (R = {}, R[n] = i, R[l] = s, R[a] = r, R)[U] || 1, et = this.$d.getTime() + L * dt;
          return $.w(et, this);
        }, F.subtract = function(L, M) {
          return this.add(-1 * L, M);
        }, F.format = function(L) {
          var M = this, R = this.$locale();
          if (!this.isValid()) return R.invalidDate || m;
          var H = L || "YYYY-MM-DDTHH:mm:ssZ", U = $.z(this), Q = this.$H, dt = this.$m, et = this.$M, ut = R.weekdays, it = R.months, rt = R.meridiem, ht = function(Ct, vt, ue, se) {
            return Ct && (Ct[vt] || Ct(M, H)) || ue[vt].slice(0, se);
          }, pt = function(Ct) {
            return $.s(Q % 12 || 12, Ct, "0");
          }, xt = rt || function(Ct, vt, ue) {
            var se = Ct < 12 ? "AM" : "PM";
            return ue ? se.toLowerCase() : se;
          };
          return H.replace(C, (function(Ct, vt) {
            return vt || (function(ue) {
              switch (ue) {
                case "YY":
                  return String(M.$y).slice(-2);
                case "YYYY":
                  return $.s(M.$y, 4, "0");
                case "M":
                  return et + 1;
                case "MM":
                  return $.s(et + 1, 2, "0");
                case "MMM":
                  return ht(R.monthsShort, et, it, 3);
                case "MMMM":
                  return ht(it, et);
                case "D":
                  return M.$D;
                case "DD":
                  return $.s(M.$D, 2, "0");
                case "d":
                  return String(M.$W);
                case "dd":
                  return ht(R.weekdaysMin, M.$W, ut, 2);
                case "ddd":
                  return ht(R.weekdaysShort, M.$W, ut, 3);
                case "dddd":
                  return ut[M.$W];
                case "H":
                  return String(Q);
                case "HH":
                  return $.s(Q, 2, "0");
                case "h":
                  return pt(1);
                case "hh":
                  return pt(2);
                case "a":
                  return xt(Q, dt, !0);
                case "A":
                  return xt(Q, dt, !1);
                case "m":
                  return String(dt);
                case "mm":
                  return $.s(dt, 2, "0");
                case "s":
                  return String(M.$s);
                case "ss":
                  return $.s(M.$s, 2, "0");
                case "SSS":
                  return $.s(M.$ms, 3, "0");
                case "Z":
                  return U;
              }
              return null;
            })(Ct) || U.replace(":", "");
          }));
        }, F.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, F.diff = function(L, M, R) {
          var H, U = this, Q = $.p(M), dt = D(L), et = (dt.utcOffset() - this.utcOffset()) * i, ut = this - dt, it = function() {
            return $.m(U, dt);
          };
          switch (Q) {
            case d:
              H = it() / 12;
              break;
            case u:
              H = it();
              break;
            case f:
              H = it() / 3;
              break;
            case h:
              H = (ut - et) / 6048e5;
              break;
            case c:
              H = (ut - et) / 864e5;
              break;
            case l:
              H = ut / s;
              break;
            case n:
              H = ut / i;
              break;
            case a:
              H = ut / r;
              break;
            default:
              H = ut;
          }
          return R ? H : $.a(H);
        }, F.daysInMonth = function() {
          return this.endOf(u).$D;
        }, F.$locale = function() {
          return v[this.$L];
        }, F.locale = function(L, M) {
          if (!L) return this.$L;
          var R = this.clone(), H = N(L, M, !0);
          return H && (R.$L = H), R;
        }, F.clone = function() {
          return $.w(this.$d, this);
        }, F.toDate = function() {
          return new Date(this.valueOf());
        }, F.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, F.toISOString = function() {
          return this.$d.toISOString();
        }, F.toString = function() {
          return this.$d.toUTCString();
        }, I;
      })(), W = z.prototype;
      return D.prototype = W, [["$ms", o], ["$s", a], ["$m", n], ["$H", l], ["$W", c], ["$M", u], ["$y", d], ["$D", g]].forEach((function(I) {
        W[I[1]] = function(F) {
          return this.$g(F, I[0], I[1]);
        };
      })), D.extend = function(I, F) {
        return I.$i || (I(F, z, D), I.$i = !0), D;
      }, D.locale = N, D.isDayjs = O, D.unix = function(I) {
        return D(1e3 * I);
      }, D.en = v[S], D.Ls = v, D.p = {}, D;
    }));
  })(ps)), ps.exports;
}
var E0 = A0();
const M0 = /* @__PURE__ */ L0(E0);
var Sc = Object.defineProperty, p = (e, t) => Sc(e, "name", { value: t, configurable: !0 }), $0 = (e, t) => {
  for (var r in t)
    Sc(e, r, { get: t[r], enumerable: !0 });
}, Re = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, P = {
  trace: /* @__PURE__ */ p((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ p((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ p((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ p((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ p((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ p((...e) => {
  }, "fatal")
}, hn = /* @__PURE__ */ p(function(e = "fatal") {
  let t = Re.fatal;
  typeof e == "string" ? e.toLowerCase() in Re && (t = Re[e]) : typeof e == "number" && (t = e), P.trace = () => {
  }, P.debug = () => {
  }, P.info = () => {
  }, P.warn = () => {
  }, P.error = () => {
  }, P.fatal = () => {
  }, t <= Re.fatal && (P.fatal = console.error ? console.error.bind(console, le("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", le("FATAL"))), t <= Re.error && (P.error = console.error ? console.error.bind(console, le("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", le("ERROR"))), t <= Re.warn && (P.warn = console.warn ? console.warn.bind(console, le("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", le("WARN"))), t <= Re.info && (P.info = console.info ? console.info.bind(console, le("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", le("INFO"))), t <= Re.debug && (P.debug = console.debug ? console.debug.bind(console, le("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", le("DEBUG"))), t <= Re.trace && (P.trace = console.debug ? console.debug.bind(console, le("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", le("TRACE")));
}, "setLogLevel"), le = /* @__PURE__ */ p((e) => `%c${M0().format("ss.SSS")} : ${e} : `, "format");
const gs = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, o = 2 * r - s;
    switch (i) {
      case "r":
        return gs.hue2rgb(o, s, e + 1 / 3) * 255;
      case "g":
        return gs.hue2rgb(o, s, e) * 255;
      case "b":
        return gs.hue2rgb(o, s, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const s = Math.max(e, t, r), o = Math.min(e, t, r), a = (s + o) / 2;
    if (i === "l")
      return a * 100;
    if (s === o)
      return 0;
    const n = s - o, l = a > 0.5 ? n / (2 - s - o) : n / (s + o);
    if (i === "s")
      return l * 100;
    switch (s) {
      case e:
        return ((t - r) / n + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / n + 2) * 60;
      case r:
        return ((e - t) / n + 4) * 60;
      default:
        return -1;
    }
  }
}, I0 = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, O0 = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, nt = {
  channel: gs,
  lang: I0,
  unit: O0
}, Ve = {};
for (let e = 0; e <= 255; e++)
  Ve[e] = nt.unit.dec2hex(e);
const qt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class D0 {
  constructor() {
    this.type = qt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = qt.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class R0 {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new D0();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = qt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: s } = t;
    r === void 0 && (t.h = nt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = nt.channel.rgb2hsl(t, "s")), s === void 0 && (t.l = nt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: s } = t;
    r === void 0 && (t.r = nt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = nt.channel.hsl2rgb(t, "g")), s === void 0 && (t.b = nt.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(qt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(qt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(qt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(qt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(qt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(qt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(qt.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set(qt.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set(qt.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set(qt.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set(qt.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set(qt.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const lo = new R0({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Wr = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(Wr.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), s = r.length, o = s % 4 === 0, a = s > 4, n = a ? 1 : 17, l = a ? 8 : 4, c = o ? 0 : -1, h = a ? 255 : 15;
    return lo.set({
      r: (i >> l * (c + 3) & h) * n,
      g: (i >> l * (c + 2) & h) * n,
      b: (i >> l * (c + 1) & h) * n,
      a: o ? (i & h) * n / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `#${Ve[Math.round(t)]}${Ve[Math.round(r)]}${Ve[Math.round(i)]}${Ve[Math.round(s * 255)]}` : `#${Ve[Math.round(t)]}${Ve[Math.round(r)]}${Ve[Math.round(i)]}`;
  }
}, dr = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(dr.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return nt.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return nt.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return nt.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return nt.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(dr.re);
    if (!r)
      return;
    const [, i, s, o, a, n] = r;
    return lo.set({
      h: dr._hue2deg(i),
      s: nt.channel.clamp.s(parseFloat(s)),
      l: nt.channel.clamp.l(parseFloat(o)),
      a: a ? nt.channel.clamp.a(n ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: s } = e;
    return s < 1 ? `hsla(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%, ${s})` : `hsl(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%)`;
  }
}, _i = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = _i.colors[e];
    if (t)
      return Wr.parse(t);
  },
  stringify: (e) => {
    const t = Wr.stringify(e);
    for (const r in _i.colors)
      if (_i.colors[r] === t)
        return r;
  }
}, mi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(mi.re);
    if (!r)
      return;
    const [, i, s, o, a, n, l, c, h] = r;
    return lo.set({
      r: nt.channel.clamp.r(s ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: nt.channel.clamp.g(a ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: nt.channel.clamp.b(l ? parseFloat(n) * 2.55 : parseFloat(n)),
      a: c ? nt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `rgba(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)}, ${nt.lang.round(s)})` : `rgb(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)})`;
  }
}, Ae = {
  /* VARIABLES */
  format: {
    keyword: _i,
    hex: Wr,
    rgb: mi,
    rgba: mi,
    hsl: dr,
    hsla: dr
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = Wr.parse(e) || mi.parse(e) || dr.parse(e) || _i.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(qt.HSL) || e.data.r === void 0 ? dr.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? mi.stringify(e) : Wr.stringify(e)
}, _c = (e, t) => {
  const r = Ae.parse(e);
  for (const i in t)
    r[i] = nt.channel.clamp[i](t[i]);
  return Ae.stringify(r);
}, Je = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return _c(e, { a: t });
  const s = lo.set({
    r: nt.channel.clamp.r(e),
    g: nt.channel.clamp.g(t),
    b: nt.channel.clamp.b(r),
    a: nt.channel.clamp.a(i)
  });
  return Ae.stringify(s);
}, P0 = (e) => {
  const { r: t, g: r, b: i } = Ae.parse(e), s = 0.2126 * nt.channel.toLinear(t) + 0.7152 * nt.channel.toLinear(r) + 0.0722 * nt.channel.toLinear(i);
  return nt.lang.round(s);
}, N0 = (e) => P0(e) >= 0.5, Te = (e) => !N0(e), vc = (e, t, r) => {
  const i = Ae.parse(e), s = i[t], o = nt.channel.clamp[t](s + r);
  return s !== o && (i[t] = o), Ae.stringify(i);
}, A = (e, t) => vc(e, "l", t), E = (e, t) => vc(e, "l", -t), x = (e, t) => {
  const r = Ae.parse(e), i = {};
  for (const s in t)
    t[s] && (i[s] = r[s] + t[s]);
  return _c(e, i);
}, q0 = (e, t, r = 50) => {
  const { r: i, g: s, b: o, a } = Ae.parse(e), { r: n, g: l, b: c, a: h } = Ae.parse(t), u = r / 100, f = u * 2 - 1, d = a - h, m = ((f * d === -1 ? f : (f + d) / (1 + f * d)) + 1) / 2, y = 1 - m, C = i * m + n * y, b = s * m + l * y, k = o * m + c * y, w = a * u + h * (1 - u);
  return Je(C, b, k, w);
}, _ = (e, t = 100) => {
  const r = Ae.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, q0(r, e, t);
};
/*! @license DOMPurify 3.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.1/LICENSE */
const {
  entries: Bc,
  setPrototypeOf: Wl,
  isFrozen: W0,
  getPrototypeOf: z0,
  getOwnPropertyDescriptor: H0
} = Object;
let {
  freeze: Zt,
  seal: he,
  create: $r
} = Object, {
  apply: ha,
  construct: ca
} = typeof Reflect < "u" && Reflect;
Zt || (Zt = function(t) {
  return t;
});
he || (he = function(t) {
  return t;
});
ha || (ha = function(t, r) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
    s[o - 2] = arguments[o];
  return t.apply(r, s);
});
ca || (ca = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
    i[s - 1] = arguments[s];
  return new t(...i);
});
const si = Ft(Array.prototype.forEach), U0 = Ft(Array.prototype.lastIndexOf), zl = Ft(Array.prototype.pop), oi = Ft(Array.prototype.push), Y0 = Ft(Array.prototype.splice), Gt = Array.isArray, yi = Ft(String.prototype.toLowerCase), Ho = Ft(String.prototype.toString), Hl = Ft(String.prototype.match), Fr = Ft(String.prototype.replace), Ul = Ft(String.prototype.indexOf), G0 = Ft(String.prototype.trim), j0 = Ft(Number.prototype.toString), X0 = Ft(Boolean.prototype.toString), Yl = typeof BigInt > "u" ? null : Ft(BigInt.prototype.toString), Gl = typeof Symbol > "u" ? null : Ft(Symbol.prototype.toString), St = Ft(Object.prototype.hasOwnProperty), ai = Ft(Object.prototype.toString), Dt = Ft(RegExp.prototype.test), es = V0(TypeError);
function Ft(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return ha(e, t, i);
  };
}
function V0(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return ca(e, r);
  };
}
function lt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : yi;
  if (Wl && Wl(e, null), !Gt(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let s = t[i];
    if (typeof s == "string") {
      const o = r(s);
      o !== s && (W0(t) || (t[i] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function Z0(e) {
  for (let t = 0; t < e.length; t++)
    St(e, t) || (e[t] = null);
  return e;
}
function te(e) {
  const t = $r(null);
  for (const [r, i] of Bc(e))
    St(e, r) && (Gt(i) ? t[r] = Z0(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = te(i) : t[r] = i);
  return t;
}
function K0(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return j0(e);
    case "boolean":
      return X0(e);
    case "bigint":
      return Yl ? Yl(e) : "0";
    case "symbol":
      return Gl ? Gl(e) : "Symbol()";
    case "undefined":
      return ai(e);
    case "function":
    case "object": {
      if (e === null)
        return ai(e);
      const t = e, r = Ir(t, "toString");
      if (typeof r == "function") {
        const i = r(t);
        return typeof i == "string" ? i : ai(i);
      }
      return ai(e);
    }
    default:
      return ai(e);
  }
}
function Ir(e, t) {
  for (; e !== null; ) {
    const i = H0(e, t);
    if (i) {
      if (i.get)
        return Ft(i.get);
      if (typeof i.value == "function")
        return Ft(i.value);
    }
    e = z0(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Q0(e) {
  try {
    return Dt(e, ""), !0;
  } catch {
    return !1;
  }
}
const jl = Zt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Uo = Zt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yo = Zt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), J0 = Zt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Go = Zt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ty = Zt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xl = Zt(["#text"]), Vl = Zt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), jo = Zt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zl = Zt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), rs = Zt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ey = he(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ry = he(/<%[\w\W]*|[\w\W]*%>/gm), iy = he(/\$\{[\w\W]*/gm), sy = he(/^data-[\-\w.\u00B7-\uFFFF]+$/), oy = he(/^aria-[\-\w]+$/), Lc = he(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ay = he(/^(?:\w+script|data):/i), ny = he(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fc = he(/^html$/i), ly = he(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Kl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: oy,
  ATTR_WHITESPACE: ny,
  CUSTOM_ELEMENT: ly,
  DATA_ATTR: sy,
  DOCTYPE_NAME: Fc,
  ERB_EXPR: ry,
  IS_ALLOWED_URI: Lc,
  IS_SCRIPT_OR_DATA: ay,
  MUSTACHE_EXPR: ey,
  TMPLIT_EXPR: iy
});
const ni = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, hy = function() {
  return typeof window > "u" ? null : window;
}, cy = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  r && r.hasAttribute(s) && (i = r.getAttribute(s));
  const o = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(o, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, Ql = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Ac() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hy();
  const t = (J) => Ac(J);
  if (t.version = "3.4.1", t.removed = [], !e || !e.document || e.document.nodeType !== ni.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, s = i.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: a,
    Node: n,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: u,
    DOMParser: f,
    trustedTypes: d
  } = e, g = l.prototype, m = Ir(g, "cloneNode"), y = Ir(g, "remove"), C = Ir(g, "nextSibling"), b = Ir(g, "childNodes"), k = Ir(g, "parentNode");
  if (typeof a == "function") {
    const J = r.createElement("template");
    J.content && J.content.ownerDocument && (r = J.content.ownerDocument);
  }
  let w, S = "";
  const {
    implementation: v,
    createNodeIterator: B,
    createDocumentFragment: O,
    getElementsByTagName: N
  } = r, {
    importNode: D
  } = i;
  let $ = Ql();
  t.isSupported = typeof Bc == "function" && typeof k == "function" && v && v.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: z,
    ERB_EXPR: W,
    TMPLIT_EXPR: I,
    DATA_ATTR: F,
    ARIA_ATTR: L,
    IS_SCRIPT_OR_DATA: M,
    ATTR_WHITESPACE: R,
    CUSTOM_ELEMENT: H
  } = Kl;
  let {
    IS_ALLOWED_URI: U
  } = Kl, Q = null;
  const dt = lt({}, [...jl, ...Uo, ...Yo, ...Go, ...Xl]);
  let et = null;
  const ut = lt({}, [...Vl, ...jo, ...Zl, ...rs]);
  let it = Object.seal($r(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), rt = null, ht = null;
  const pt = Object.seal($r(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let xt = !0, Ct = !0, vt = !1, ue = !0, se = !1, Oe = !0, ar = !1, Lo = !1, Fo = !1, _r = !1, Ki = !1, Qi = !1, pl = !0, gl = !1;
  const ml = "user-content-";
  let Ao = !0, ri = !1, vr = {}, Se = null;
  const Eo = lt({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let yl = null;
  const Cl = lt({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mo = null;
  const xl = lt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ji = "http://www.w3.org/1998/Math/MathML", ts = "http://www.w3.org/2000/svg", _e = "http://www.w3.org/1999/xhtml";
  let Br = _e, $o = !1, Io = null;
  const Xm = lt({}, [Ji, ts, _e], Ho);
  let Oo = lt({}, ["mi", "mo", "mn", "ms", "mtext"]), Do = lt({}, ["annotation-xml"]);
  const Vm = lt({}, ["title", "style", "font", "a", "script"]);
  let ii = null;
  const Zm = ["application/xhtml+xml", "text/html"], Km = "text/html";
  let At = null, Lr = null;
  const Qm = r.createElement("form"), bl = function(T) {
    return T instanceof RegExp || T instanceof Function;
  }, Ro = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Lr && Lr === T)
      return;
    (!T || typeof T != "object") && (T = {}), T = te(T), ii = // eslint-disable-next-line unicorn/prefer-includes
    Zm.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? Km : T.PARSER_MEDIA_TYPE, At = ii === "application/xhtml+xml" ? Ho : yi, Q = St(T, "ALLOWED_TAGS") && Gt(T.ALLOWED_TAGS) ? lt({}, T.ALLOWED_TAGS, At) : dt, et = St(T, "ALLOWED_ATTR") && Gt(T.ALLOWED_ATTR) ? lt({}, T.ALLOWED_ATTR, At) : ut, Io = St(T, "ALLOWED_NAMESPACES") && Gt(T.ALLOWED_NAMESPACES) ? lt({}, T.ALLOWED_NAMESPACES, Ho) : Xm, Mo = St(T, "ADD_URI_SAFE_ATTR") && Gt(T.ADD_URI_SAFE_ATTR) ? lt(te(xl), T.ADD_URI_SAFE_ATTR, At) : xl, yl = St(T, "ADD_DATA_URI_TAGS") && Gt(T.ADD_DATA_URI_TAGS) ? lt(te(Cl), T.ADD_DATA_URI_TAGS, At) : Cl, Se = St(T, "FORBID_CONTENTS") && Gt(T.FORBID_CONTENTS) ? lt({}, T.FORBID_CONTENTS, At) : Eo, rt = St(T, "FORBID_TAGS") && Gt(T.FORBID_TAGS) ? lt({}, T.FORBID_TAGS, At) : te({}), ht = St(T, "FORBID_ATTR") && Gt(T.FORBID_ATTR) ? lt({}, T.FORBID_ATTR, At) : te({}), vr = St(T, "USE_PROFILES") ? T.USE_PROFILES && typeof T.USE_PROFILES == "object" ? te(T.USE_PROFILES) : T.USE_PROFILES : !1, xt = T.ALLOW_ARIA_ATTR !== !1, Ct = T.ALLOW_DATA_ATTR !== !1, vt = T.ALLOW_UNKNOWN_PROTOCOLS || !1, ue = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, se = T.SAFE_FOR_TEMPLATES || !1, Oe = T.SAFE_FOR_XML !== !1, ar = T.WHOLE_DOCUMENT || !1, _r = T.RETURN_DOM || !1, Ki = T.RETURN_DOM_FRAGMENT || !1, Qi = T.RETURN_TRUSTED_TYPE || !1, Fo = T.FORCE_BODY || !1, pl = T.SANITIZE_DOM !== !1, gl = T.SANITIZE_NAMED_PROPS || !1, Ao = T.KEEP_CONTENT !== !1, ri = T.IN_PLACE || !1, U = Q0(T.ALLOWED_URI_REGEXP) ? T.ALLOWED_URI_REGEXP : Lc, Br = typeof T.NAMESPACE == "string" ? T.NAMESPACE : _e, Oo = St(T, "MATHML_TEXT_INTEGRATION_POINTS") && T.MATHML_TEXT_INTEGRATION_POINTS && typeof T.MATHML_TEXT_INTEGRATION_POINTS == "object" ? te(T.MATHML_TEXT_INTEGRATION_POINTS) : lt({}, ["mi", "mo", "mn", "ms", "mtext"]), Do = St(T, "HTML_INTEGRATION_POINTS") && T.HTML_INTEGRATION_POINTS && typeof T.HTML_INTEGRATION_POINTS == "object" ? te(T.HTML_INTEGRATION_POINTS) : lt({}, ["annotation-xml"]);
    const q = St(T, "CUSTOM_ELEMENT_HANDLING") && T.CUSTOM_ELEMENT_HANDLING && typeof T.CUSTOM_ELEMENT_HANDLING == "object" ? te(T.CUSTOM_ELEMENT_HANDLING) : $r(null);
    if (it = $r(null), St(q, "tagNameCheck") && bl(q.tagNameCheck) && (it.tagNameCheck = q.tagNameCheck), St(q, "attributeNameCheck") && bl(q.attributeNameCheck) && (it.attributeNameCheck = q.attributeNameCheck), St(q, "allowCustomizedBuiltInElements") && typeof q.allowCustomizedBuiltInElements == "boolean" && (it.allowCustomizedBuiltInElements = q.allowCustomizedBuiltInElements), se && (Ct = !1), Ki && (_r = !0), vr && (Q = lt({}, Xl), et = $r(null), vr.html === !0 && (lt(Q, jl), lt(et, Vl)), vr.svg === !0 && (lt(Q, Uo), lt(et, jo), lt(et, rs)), vr.svgFilters === !0 && (lt(Q, Yo), lt(et, jo), lt(et, rs)), vr.mathMl === !0 && (lt(Q, Go), lt(et, Zl), lt(et, rs))), pt.tagCheck = null, pt.attributeCheck = null, St(T, "ADD_TAGS") && (typeof T.ADD_TAGS == "function" ? pt.tagCheck = T.ADD_TAGS : Gt(T.ADD_TAGS) && (Q === dt && (Q = te(Q)), lt(Q, T.ADD_TAGS, At))), St(T, "ADD_ATTR") && (typeof T.ADD_ATTR == "function" ? pt.attributeCheck = T.ADD_ATTR : Gt(T.ADD_ATTR) && (et === ut && (et = te(et)), lt(et, T.ADD_ATTR, At))), St(T, "ADD_URI_SAFE_ATTR") && Gt(T.ADD_URI_SAFE_ATTR) && lt(Mo, T.ADD_URI_SAFE_ATTR, At), St(T, "FORBID_CONTENTS") && Gt(T.FORBID_CONTENTS) && (Se === Eo && (Se = te(Se)), lt(Se, T.FORBID_CONTENTS, At)), St(T, "ADD_FORBID_CONTENTS") && Gt(T.ADD_FORBID_CONTENTS) && (Se === Eo && (Se = te(Se)), lt(Se, T.ADD_FORBID_CONTENTS, At)), Ao && (Q["#text"] = !0), ar && lt(Q, ["html", "head", "body"]), Q.table && (lt(Q, ["tbody"]), delete rt.tbody), T.TRUSTED_TYPES_POLICY) {
      if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw es('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw es('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      w = T.TRUSTED_TYPES_POLICY, S = w.createHTML("");
    } else
      w === void 0 && (w = cy(d, s)), w !== null && typeof S == "string" && (S = w.createHTML(""));
    Zt && Zt(T), Lr = T;
  }, kl = lt({}, [...Uo, ...Yo, ...J0]), Tl = lt({}, [...Go, ...ty]), Jm = function(T) {
    let q = k(T);
    (!q || !q.tagName) && (q = {
      namespaceURI: Br,
      tagName: "template"
    });
    const X = yi(T.tagName), bt = yi(q.tagName);
    return Io[T.namespaceURI] ? T.namespaceURI === ts ? q.namespaceURI === _e ? X === "svg" : q.namespaceURI === Ji ? X === "svg" && (bt === "annotation-xml" || Oo[bt]) : !!kl[X] : T.namespaceURI === Ji ? q.namespaceURI === _e ? X === "math" : q.namespaceURI === ts ? X === "math" && Do[bt] : !!Tl[X] : T.namespaceURI === _e ? q.namespaceURI === ts && !Do[bt] || q.namespaceURI === Ji && !Oo[bt] ? !1 : !Tl[X] && (Vm[X] || !kl[X]) : !!(ii === "application/xhtml+xml" && Io[T.namespaceURI]) : !1;
  }, de = function(T) {
    oi(t.removed, {
      element: T
    });
    try {
      k(T).removeChild(T);
    } catch {
      y(T);
    }
  }, nr = function(T, q) {
    try {
      oi(t.removed, {
        attribute: q.getAttributeNode(T),
        from: q
      });
    } catch {
      oi(t.removed, {
        attribute: null,
        from: q
      });
    }
    if (q.removeAttribute(T), T === "is")
      if (_r || Ki)
        try {
          de(q);
        } catch {
        }
      else
        try {
          q.setAttribute(T, "");
        } catch {
        }
  }, wl = function(T) {
    let q = null, X = null;
    if (Fo)
      T = "<remove></remove>" + T;
    else {
      const Bt = Hl(T, /^[\r\n\t ]+/);
      X = Bt && Bt[0];
    }
    ii === "application/xhtml+xml" && Br === _e && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
    const bt = w ? w.createHTML(T) : T;
    if (Br === _e)
      try {
        q = new f().parseFromString(bt, ii);
      } catch {
      }
    if (!q || !q.documentElement) {
      q = v.createDocument(Br, "template", null);
      try {
        q.documentElement.innerHTML = $o ? S : bt;
      } catch {
      }
    }
    const Nt = q.body || q.documentElement;
    return T && X && Nt.insertBefore(r.createTextNode(X), Nt.childNodes[0] || null), Br === _e ? N.call(q, ar ? "html" : "body")[0] : ar ? q.documentElement : Nt;
  }, Sl = function(T) {
    return B.call(
      T.ownerDocument || T,
      T,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Po = function(T) {
    return T instanceof u && (typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || !(T.attributes instanceof h) || typeof T.removeAttribute != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function");
  }, No = function(T) {
    return typeof n == "function" && T instanceof n;
  };
  function De(J, T, q) {
    si(J, (X) => {
      X.call(t, T, q, Lr);
    });
  }
  const _l = function(T) {
    let q = null;
    if (De($.beforeSanitizeElements, T, null), Po(T))
      return de(T), !0;
    const X = At(T.nodeName);
    if (De($.uponSanitizeElement, T, {
      tagName: X,
      allowedTags: Q
    }), Oe && T.hasChildNodes() && !No(T.firstElementChild) && Dt(/<[/\w!]/g, T.innerHTML) && Dt(/<[/\w!]/g, T.textContent) || Oe && T.namespaceURI === _e && X === "style" && No(T.firstElementChild) || T.nodeType === ni.progressingInstruction || Oe && T.nodeType === ni.comment && Dt(/<[/\w]/g, T.data))
      return de(T), !0;
    if (rt[X] || !(pt.tagCheck instanceof Function && pt.tagCheck(X)) && !Q[X]) {
      if (!rt[X] && Bl(X) && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, X) || it.tagNameCheck instanceof Function && it.tagNameCheck(X)))
        return !1;
      if (Ao && !Se[X]) {
        const bt = k(T) || T.parentNode, Nt = b(T) || T.childNodes;
        if (Nt && bt) {
          const Bt = Nt.length;
          for (let Qt = Bt - 1; Qt >= 0; --Qt) {
            const ne = m(Nt[Qt], !0);
            bt.insertBefore(ne, C(T));
          }
        }
      }
      return de(T), !0;
    }
    return T instanceof l && !Jm(T) || (X === "noscript" || X === "noembed" || X === "noframes") && Dt(/<\/no(script|embed|frames)/i, T.innerHTML) ? (de(T), !0) : (se && T.nodeType === ni.text && (q = T.textContent, si([z, W, I], (bt) => {
      q = Fr(q, bt, " ");
    }), T.textContent !== q && (oi(t.removed, {
      element: T.cloneNode()
    }), T.textContent = q)), De($.afterSanitizeElements, T, null), !1);
  }, vl = function(T, q, X) {
    if (ht[q] || pl && (q === "id" || q === "name") && (X in r || X in Qm))
      return !1;
    if (!(Ct && !ht[q] && Dt(F, q))) {
      if (!(xt && Dt(L, q))) {
        if (!(pt.attributeCheck instanceof Function && pt.attributeCheck(q, T))) {
          if (!et[q] || ht[q]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Bl(T) && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, T) || it.tagNameCheck instanceof Function && it.tagNameCheck(T)) && (it.attributeNameCheck instanceof RegExp && Dt(it.attributeNameCheck, q) || it.attributeNameCheck instanceof Function && it.attributeNameCheck(q, T)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              q === "is" && it.allowCustomizedBuiltInElements && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, X) || it.tagNameCheck instanceof Function && it.tagNameCheck(X)))
            ) return !1;
          } else if (!Mo[q]) {
            if (!Dt(U, Fr(X, R, ""))) {
              if (!((q === "src" || q === "xlink:href" || q === "href") && T !== "script" && Ul(X, "data:") === 0 && yl[T])) {
                if (!(vt && !Dt(M, Fr(X, R, "")))) {
                  if (X)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, t0 = lt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Bl = function(T) {
    return !t0[yi(T)] && Dt(H, T);
  }, Ll = function(T) {
    De($.beforeSanitizeAttributes, T, null);
    const {
      attributes: q
    } = T;
    if (!q || Po(T))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: et,
      forceKeepAttr: void 0
    };
    let bt = q.length;
    for (; bt--; ) {
      const Nt = q[bt], {
        name: Bt,
        namespaceURI: Qt,
        value: ne
      } = Nt, fe = At(Bt), qo = ne;
      let It = Bt === "value" ? qo : G0(qo);
      if (X.attrName = fe, X.attrValue = It, X.keepAttr = !0, X.forceKeepAttr = void 0, De($.uponSanitizeAttribute, T, X), It = X.attrValue, gl && (fe === "id" || fe === "name") && Ul(It, ml) !== 0 && (nr(Bt, T), It = ml + It), Oe && Dt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, It)) {
        nr(Bt, T);
        continue;
      }
      if (fe === "attributename" && Hl(It, "href")) {
        nr(Bt, T);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        nr(Bt, T);
        continue;
      }
      if (!ue && Dt(/\/>/i, It)) {
        nr(Bt, T);
        continue;
      }
      se && si([z, W, I], (El) => {
        It = Fr(It, El, " ");
      });
      const Al = At(T.nodeName);
      if (!vl(Al, fe, It)) {
        nr(Bt, T);
        continue;
      }
      if (w && typeof d == "object" && typeof d.getAttributeType == "function" && !Qt)
        switch (d.getAttributeType(Al, fe)) {
          case "TrustedHTML": {
            It = w.createHTML(It);
            break;
          }
          case "TrustedScriptURL": {
            It = w.createScriptURL(It);
            break;
          }
        }
      if (It !== qo)
        try {
          Qt ? T.setAttributeNS(Qt, Bt, It) : T.setAttribute(Bt, It), Po(T) ? de(T) : zl(t.removed);
        } catch {
          nr(Bt, T);
        }
    }
    De($.afterSanitizeAttributes, T, null);
  }, Fl = function(T) {
    let q = null;
    const X = Sl(T);
    for (De($.beforeSanitizeShadowDOM, T, null); q = X.nextNode(); )
      De($.uponSanitizeShadowNode, q, null), _l(q), Ll(q), q.content instanceof o && Fl(q.content);
    De($.afterSanitizeShadowDOM, T, null);
  };
  return t.sanitize = function(J) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = null, X = null, bt = null, Nt = null;
    if ($o = !J, $o && (J = "<!-->"), typeof J != "string" && !No(J) && (J = K0(J), typeof J != "string"))
      throw es("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    if (Lo || Ro(T), t.removed = [], typeof J == "string" && (ri = !1), ri) {
      const ne = J.nodeName;
      if (typeof ne == "string") {
        const fe = At(ne);
        if (!Q[fe] || rt[fe])
          throw es("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof n)
      q = wl("<!---->"), X = q.ownerDocument.importNode(J, !0), X.nodeType === ni.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? q = X : q.appendChild(X);
    else {
      if (!_r && !se && !ar && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return w && Qi ? w.createHTML(J) : J;
      if (q = wl(J), !q)
        return _r ? null : Qi ? S : "";
    }
    q && Fo && de(q.firstChild);
    const Bt = Sl(ri ? J : q);
    for (; bt = Bt.nextNode(); )
      _l(bt), Ll(bt), bt.content instanceof o && Fl(bt.content);
    if (ri)
      return J;
    if (_r) {
      if (se) {
        q.normalize();
        let ne = q.innerHTML;
        si([z, W, I], (fe) => {
          ne = Fr(ne, fe, " ");
        }), q.innerHTML = ne;
      }
      if (Ki)
        for (Nt = O.call(q.ownerDocument); q.firstChild; )
          Nt.appendChild(q.firstChild);
      else
        Nt = q;
      return (et.shadowroot || et.shadowrootmode) && (Nt = D.call(i, Nt, !0)), Nt;
    }
    let Qt = ar ? q.outerHTML : q.innerHTML;
    return ar && Q["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && Dt(Fc, q.ownerDocument.doctype.name) && (Qt = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + Qt), se && si([z, W, I], (ne) => {
      Qt = Fr(Qt, ne, " ");
    }), w && Qi ? w.createHTML(Qt) : Qt;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ro(J), Lo = !0;
  }, t.clearConfig = function() {
    Lr = null, Lo = !1;
  }, t.isValidAttribute = function(J, T, q) {
    Lr || Ro({});
    const X = At(J), bt = At(T);
    return vl(X, bt, q);
  }, t.addHook = function(J, T) {
    typeof T == "function" && oi($[J], T);
  }, t.removeHook = function(J, T) {
    if (T !== void 0) {
      const q = U0($[J], T);
      return q === -1 ? void 0 : Y0($[J], q, 1)[0];
    }
    return zl($[J]);
  }, t.removeHooks = function(J) {
    $[J] = [];
  }, t.removeAllHooks = function() {
    $ = Ql();
  }, t;
}
var Ur = Ac(), Ec = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, vi = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, uy = /\s*%%.*\n/gm, Mc = class extends Error {
  static {
    p(this, "UnknownDiagramError");
  }
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}, yr = {}, cn = /* @__PURE__ */ p(function(e, t) {
  e = e.replace(Ec, "").replace(vi, "").replace(uy, `
`);
  for (const [r, { detector: i }] of Object.entries(yr))
    if (i(e, t))
      return r;
  throw new Mc(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), ua = /* @__PURE__ */ p((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    $c(t, r, i);
}, "registerLazyLoadedDiagrams"), $c = /* @__PURE__ */ p((e, t, r) => {
  yr[e] && P.warn(`Detector with key ${e} already exists. Overwriting.`), yr[e] = { detector: t, loader: r }, P.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), dy = /* @__PURE__ */ p((e) => yr[e].loader, "getDiagramLoader"), da = /* @__PURE__ */ p((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const s = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((o) => da(e, o, s)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((o) => {
    e.includes(o) || e.push(o);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((o) => {
    typeof t[o] == "object" && t[o] !== null && (e[o] === void 0 || typeof e[o] == "object") ? (e[o] === void 0 && (e[o] = Array.isArray(t[o]) ? [] : {}), e[o] = da(e[o], t[o], { depth: r - 1, clobber: i })) : (i || typeof e[o] != "object" && typeof t[o] != "object") && (e[o] = t[o]);
  }), e);
}, "assignWithDepth"), Mt = da, Me = "#ffffff", $e = "#f2f2f2", at = /* @__PURE__ */ p((e, t) => t ? x(e, { s: -40, l: 10 }) : x(e, { s: -40, l: -10 }), "mkBorder"), fy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || E(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || E(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, py = /* @__PURE__ */ p((e) => {
  const t = new fy();
  return t.calculate(e), t;
}, "getThemeVariables"), gy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = E("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = E(this.sectionBkgColor, 10), this.taskBorderColor = Je(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Je(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || A(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || E(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
  }
  updateColors() {
    this.secondBkg = A(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = A(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = A(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = _(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || _(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let e = 0; e < 8; e++)
      this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? A(this["cScale" + e], 30);
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.mainBkg,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.mainBkg
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = A(this.secondaryColor, 20), this.git1 = A(this.pie2 || this.secondaryColor, 20), this.git2 = A(this.pie3 || this.tertiaryColor, 20), this.git3 = A(this.pie4 || x(this.primaryColor, { h: -30 }), 20), this.git4 = A(this.pie5 || x(this.primaryColor, { h: -60 }), 20), this.git5 = A(this.pie6 || x(this.primaryColor, { h: -90 }), 10), this.git6 = A(this.pie7 || x(this.primaryColor, { h: 60 }), 10), this.git7 = A(this.pie8 || x(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || A("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || A("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || A("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || A("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || A(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || A(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || A(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, my = /* @__PURE__ */ p((e) => {
  const t = new gy();
  return t.calculate(e), t;
}, "getThemeVariables"), yy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = x(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = Je(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || E(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || E(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = E(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || x(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || _(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || _(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || A(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || x(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || E(_(this.git0), 25), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (Object.keys(this).forEach((r) => {
      this[r] === "calculated" && (this[r] = void 0);
    }), typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Cy = /* @__PURE__ */ p((e) => {
  const t = new yy();
  return t.calculate(e), t;
}, "getThemeVariables"), xy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = A("#cde498", 10), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.primaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    this.actorBorder = E(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || E(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || E(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = E(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || x(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, by = /* @__PURE__ */ p((e) => {
  const t = new xy();
  return t.calculate(e), t;
}, "getThemeVariables"), ky = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = A(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.secondBkg = A(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = A(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || _(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || E(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = A(this.contrast, 30), this.sectionBkgColor2 = A(this.contrast, 30), this.taskBorderColor = E(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = A(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = E(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let e = 0; e < 8; e++)
      this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? this["cScale" + e];
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = E(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || x(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || x(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || x(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || x(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || x(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Ty = /* @__PURE__ */ p((e) => {
  const t = new ky();
  return t.calculate(e), t;
}, "getThemeVariables"), wy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    if (this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || e, this.cScale1 = this.cScale1 || t, this.cScale2 = this.cScale2 || r, this.cScale3 = this.cScale3 || x(e, { h: 30 }), this.cScale4 = this.cScale4 || x(e, { h: 60 }), this.cScale5 = this.cScale5 || x(e, { h: 90 }), this.cScale6 = this.cScale6 || x(e, { h: 120 }), this.cScale7 = this.cScale7 || x(e, { h: 150 }), this.cScale8 = this.cScale8 || x(e, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(e, { h: 270 }), this.cScale10 = this.cScale10 || x(e, { h: 300 }), this.cScale11 = this.cScale11 || x(e, { h: 330 }), this.darkMode)
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = E(this["cScale" + s], 75);
    else
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = E(this["cScale" + s], 25);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || _(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || A(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || E(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Sy = /* @__PURE__ */ p((e) => {
  const t = new wy();
  return t.calculate(e), t;
}, "getThemeVariables"), _y = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || E(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, vy = /* @__PURE__ */ p((e) => {
  const t = new _y();
  return t.calculate(e), t;
}, "getThemeVariables"), By = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = at("#28253D", this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScale" + s] = this.mainBkg;
    if (this.darkMode)
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = E(this["cScale" + s], 75);
    else
      for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
        this["cScale" + s] = E(this["cScale" + s], 25);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || _(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || A(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || E(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Ly = /* @__PURE__ */ p((e) => {
  const t = new By();
  return t.calculate(e), t;
}, "getThemeVariables"), Fy = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = E(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || E(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Ay = /* @__PURE__ */ p((e) => {
  const t = new Fy();
  return t.calculate(e), t;
}, "getThemeVariables"), Ey = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [
      "#FDF4FF",
      //Fuchsia-50
      "#F0FDFA",
      //Teal-50
      "#FFF7ED",
      //Orange-50
      "#ECFEFF",
      // Cyan-50
      "#F0FDF4",
      // Green-50
      "#F5F3FF",
      //Violet-50
      "#FEF2F2",
      //red-50
      "#FEFCE8",
      //yellow-50
      "#EEF2FF",
      //indigo-50
      "#F7FEE7",
      //Lime-50
      "#F0F9FF",
      //Sky-50
      "#FFF1F2"
      //Rose-50
    ], this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleInv" + s] = this["cScaleInv" + s] || _(this["cScale" + s]);
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this.darkMode ? this["cScalePeer" + s] = this["cScalePeer" + s] || A(this["cScale" + s], 10) : this["cScalePeer" + s] = this["cScalePeer" + s] || E(this["cScale" + s], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let s = 0; s < this.THEME_COLOR_LIMIT; s++)
      this["cScaleLabel" + s] = this["cScaleLabel" + s] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let s = 0; s < 5; s++)
      this["surface" + s] = this["surface" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + s * 3) }), this["surfacePeer" + s] = this["surfacePeer" + s] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + s * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, My = /* @__PURE__ */ p((e) => {
  const t = new Ey();
  return t.calculate(e), t;
}, "getThemeVariables"), $y = class {
  static {
    p(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Je(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || E(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || E(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = E(this["cScale" + t], 75);
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Te(this.quadrant1Fill) ? A(this.quadrant1Fill) : E(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? E(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = E(this.git0, 25), this.git1 = E(this.git1, 25), this.git2 = E(this.git2, 25), this.git3 = E(this.git3, 25), this.git4 = E(this.git4, 25), this.git5 = E(this.git5, 25), this.git6 = E(this.git6, 25), this.git7 = E(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Me, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || $e;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const t = Object.keys(e);
    t.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), t.forEach((r) => {
      this[r] = e[r];
    });
  }
}, Iy = /* @__PURE__ */ p((e) => {
  const t = new $y();
  return t.calculate(e), t;
}, "getThemeVariables"), We = {
  base: {
    getThemeVariables: py
  },
  dark: {
    getThemeVariables: my
  },
  default: {
    getThemeVariables: Cy
  },
  forest: {
    getThemeVariables: by
  },
  neutral: {
    getThemeVariables: Ty
  },
  neo: {
    getThemeVariables: Sy
  },
  "neo-dark": {
    getThemeVariables: vy
  },
  redux: {
    getThemeVariables: Ly
  },
  "redux-dark": {
    getThemeVariables: Ay
  },
  "redux-color": {
    getThemeVariables: My
  },
  "redux-dark-color": {
    getThemeVariables: Iy
  }
}, Yt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: null,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showDataLabelOutsideBar: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  ishikawa: {
    useMaxWidth: !0,
    diagramPadding: 20
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: "",
    nodeWidth: 10,
    nodePadding: 12,
    labelStyle: "legacy"
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  treeView: {
    useMaxWidth: !0,
    rowIndent: 10,
    paddingX: 5,
    paddingY: 5,
    lineThickness: 1
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16,
    randomize: !1,
    nodeSeparation: 75,
    idealEdgeLengthMultiplier: 1.5,
    edgeElasticity: 0.45,
    numIter: 2500
  },
  eventmodeling: {
    useMaxWidth: !0,
    padding: 30,
    rowHeight: 32
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  venn: {
    useMaxWidth: !0,
    width: 800,
    height: 450,
    padding: 8,
    useDebugLayout: !1
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, Ic = {
  ...Yt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: We.default.getThemeVariables(),
  sequence: {
    ...Yt.sequence,
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  gantt: {
    ...Yt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Yt.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...Yt.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ p(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...Yt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Yt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Yt.requirement,
    useWidth: void 0
  },
  packet: {
    ...Yt.packet
  },
  eventmodeling: {
    ...Yt.eventmodeling
  },
  treeView: {
    ...Yt.treeView,
    useWidth: void 0
  },
  radar: {
    ...Yt.radar
  },
  ishikawa: {
    ...Yt.ishikawa
  },
  sankey: {
    ...Yt.sankey,
    // Set so that `configKeys` includes this key for sanitizeDirective
    nodeColors: void 0
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  },
  venn: {
    ...Yt.venn
  }
}, Oc = /* @__PURE__ */ p((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...Oc(e[i], "")] : [...r, t + i], []), "keyify"), Oy = new Set(Oc(Ic, "")), Dc = Ic, Fs = /* @__PURE__ */ p((e) => {
  if (P.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => Fs(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (P.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !Oy.has(t) || e[t] == null) {
        P.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        if (t === "nodeColors") {
          const i = /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i;
          for (const s of Object.keys(e[t]))
            (typeof e[t][s] != "string" || !i.test(e[t][s])) && (P.debug("sanitize deleting invalid color:", s, e[t][s]), delete e[t][s]);
        } else
          P.debug("sanitizing object", t), Fs(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (P.debug("sanitizing css option", t), e[t] = Rc(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    P.debug("After sanitization", e);
  }
}, "sanitizeDirective"), Rc = /* @__PURE__ */ p((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Yr = Object.freeze(Dc), Ge = /* @__PURE__ */ p((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), ee = Mt({}, Yr), As, Cr = [], Bi = Mt({}, Yr), ho = /* @__PURE__ */ p((e, t) => {
  let r = Mt({}, e), i = {};
  for (const s of t)
    qc(s), i = Mt(i, s);
  if (r = Mt(r, i), i.theme && i.theme in We) {
    const s = Mt({}, As), o = Mt(
      s.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in We && (r.themeVariables = We[r.theme].getThemeVariables(o));
  }
  return Bi = r, zc(Bi), Bi;
}, "updateCurrentConfig"), Dy = /* @__PURE__ */ p((e) => (ee = Mt({}, Yr), ee = Mt(ee, e), e.theme && We[e.theme] && (ee.themeVariables = We[e.theme].getThemeVariables(e.themeVariables)), ho(ee, Cr), ee), "setSiteConfig"), Ry = /* @__PURE__ */ p((e) => {
  As = Mt({}, e);
}, "saveConfigFromInitialize"), Py = /* @__PURE__ */ p((e) => (ee = Mt(ee, e), ho(ee, Cr), ee), "updateSiteConfig"), Pc = /* @__PURE__ */ p(() => Mt({}, ee), "getSiteConfig"), Nc = /* @__PURE__ */ p((e) => (zc(e), Mt(Bi, e), Tt()), "setConfig"), Tt = /* @__PURE__ */ p(() => Mt({}, Bi), "getConfig"), qc = /* @__PURE__ */ p((e) => {
  e && (["secure", ...ee.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (P.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && qc(e[t]);
  }));
}, "sanitize"), Ny = /* @__PURE__ */ p((e) => {
  Fs(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), Cr.push(e), ho(ee, Cr);
}, "addDirective"), Es = /* @__PURE__ */ p((e = ee) => {
  Cr = [], ho(e, Cr);
}, "reset"), qy = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, Jl = {}, Wc = /* @__PURE__ */ p((e) => {
  Jl[e] || (P.warn(qy[e]), Jl[e] = !0);
}, "issueWarning"), zc = /* @__PURE__ */ p((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Wc("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), dL = /* @__PURE__ */ p(() => {
  let e = {};
  As && (e = Mt(e, As));
  for (const t of Cr)
    e = Mt(e, t);
  return e;
}, "getUserDefinedConfig"), Kt = /* @__PURE__ */ p((e) => (e.flowchart?.htmlLabels != null && Wc("FLOWCHART_HTML_LABELS_DEPRECATED"), Ge(e.htmlLabels ?? e.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), zi = /<br\s*\/?>/gi, Wy = /* @__PURE__ */ p((e) => e ? Yc(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), zy = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (Hc(), e = !0);
  };
})();
function Hc() {
  const e = "data-temp-href-target";
  Ur.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), Ur.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
p(Hc, "setupDompurifyHooks");
var Uc = /* @__PURE__ */ p((e) => (zy(), Ur.sanitize(e)), "removeScript"), th = /* @__PURE__ */ p((e, t) => {
  if (Kt(t)) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" || r === "sandbox" ? e = Uc(e) : r !== "loose" && (e = Yc(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = Gy(e));
  }
  return e;
}, "sanitizeMore"), ke = /* @__PURE__ */ p((e, t) => e && (t.dompurifyConfig ? e = Ur.sanitize(th(e, t), t.dompurifyConfig).toString() : e = Ur.sanitize(th(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), Hy = /* @__PURE__ */ p((e, t) => typeof e == "string" ? ke(e, t) : e.flat().map((r) => ke(r, t)), "sanitizeTextOrArray"), Uy = /* @__PURE__ */ p((e) => zi.test(e), "hasBreaks"), Yy = /* @__PURE__ */ p((e) => e.split(zi), "splitBreaks"), Gy = /* @__PURE__ */ p((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Yc = /* @__PURE__ */ p((e) => e.replace(zi, "#br#"), "breakToPlaceholder"), jy = /* @__PURE__ */ p((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Xy = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), Vy = /* @__PURE__ */ p(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), eh = /* @__PURE__ */ p(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (s === "," && i > 0 && i + 1 < t.length) {
      const o = t[i - 1], a = t[i + 1];
      Zy(o, a) && (s = o + "," + a, i++, r.pop());
    }
    r.push(Ky(s));
  }
  return r.join("");
}, "parseGenericTypes"), fa = /* @__PURE__ */ p((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Zy = /* @__PURE__ */ p((e, t) => {
  const r = fa(e, "~"), i = fa(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), Ky = /* @__PURE__ */ p((e) => {
  const t = fa(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let s = i.indexOf("~"), o = i.lastIndexOf("~");
  for (; s !== -1 && o !== -1 && s !== o; )
    i[s] = "<", i[o] = ">", s = i.indexOf("~"), o = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), rh = /* @__PURE__ */ p(() => window.MathMLElement !== void 0, "isMathMLSupported"), pa = /\$\$(.*)\$\$/g, Ai = /* @__PURE__ */ p((e) => (e.match(pa)?.length ?? 0) > 0, "hasKatex"), fL = /* @__PURE__ */ p(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await Gc(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const s = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), s;
}, "calculateMathMLDimensions"), Qy = /* @__PURE__ */ p(async (e, t) => {
  if (!Ai(e))
    return e;
  if (!(rh() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(pa, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-D3uLT2GX.js"), i = t.forceLegacyMathML || !rh() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(zi).map(
      (s) => Ai(s) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>` : `<div>${s}</div>`
    ).join("").replace(
      pa,
      (s, o) => r.renderToString(o, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), Gc = /* @__PURE__ */ p(async (e, t) => ke(await Qy(e, t), t), "renderKatexSanitized"), Hi = {
  getRows: Wy,
  sanitizeText: ke,
  sanitizeTextOrArray: Hy,
  hasBreaks: Uy,
  splitBreaks: Yy,
  lineBreakRegex: zi,
  removeScript: Uc,
  getUrl: jy,
  evaluate: Ge,
  getMax: Xy,
  getMin: Vy
}, Jy = /* @__PURE__ */ p(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), tC = /* @__PURE__ */ p(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), jc = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = tC(t, r, i);
  Jy(e, s);
}, "configureSvgSize"), eC = /* @__PURE__ */ p(function(e, t, r, i) {
  const s = t.node().getBBox(), o = s.width, a = s.height;
  P.info(`SVG bounds: ${o}x${a}`, s);
  let n = 0, l = 0;
  P.info(`Graph bounds: ${n}x${l}`, e), n = o + r * 2, l = a + r * 2, P.info(`Calculated bounds: ${n}x${l}`), jc(t, l, n, i);
  const c = `${s.x - r} ${s.y - r} ${s.width + 2 * r} ${s.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), ms = {};
function ga(e) {
  return [...e.cssRules].map((t) => t.cssText).join(`
`);
}
p(ga, "cssStyleSheetToString");
var rC = /* @__PURE__ */ p((e, t, r, i) => {
  let s = "";
  return e in ms && ms[e] ? s = ms[e]({ ...r, svgId: i }) : P.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${r.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}
  .node .neo-node {
    stroke: ${r.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }


  [data-look="neo"].node path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    stroke-width: ${r.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${r.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  ${t}
`;
}, "getStyles"), iC = /* @__PURE__ */ p((e, t) => {
  t !== void 0 && (ms[e] = t);
}, "addStylesForDiagram"), sC = rC, Xc = {};
$0(Xc, {
  clear: () => oC,
  getAccDescription: () => hC,
  getAccTitle: () => nC,
  getDiagramTitle: () => uC,
  setAccDescription: () => lC,
  setAccTitle: () => aC,
  setDiagramTitle: () => cC
});
var un = "", dn = "", fn = "", pn = /* @__PURE__ */ p((e) => ke(e, Tt()), "sanitizeText"), oC = /* @__PURE__ */ p(() => {
  un = "", fn = "", dn = "";
}, "clear"), aC = /* @__PURE__ */ p((e) => {
  un = pn(e).replace(/^\s+/g, "");
}, "setAccTitle"), nC = /* @__PURE__ */ p(() => un, "getAccTitle"), lC = /* @__PURE__ */ p((e) => {
  fn = pn(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), hC = /* @__PURE__ */ p(() => fn, "getAccDescription"), cC = /* @__PURE__ */ p((e) => {
  dn = pn(e);
}, "setDiagramTitle"), uC = /* @__PURE__ */ p(() => dn, "getDiagramTitle"), ih = P, dC = hn, gt = Tt, pL = Nc, gL = Yr, gn = /* @__PURE__ */ p((e) => ke(e, gt()), "sanitizeText"), fC = eC, pC = /* @__PURE__ */ p(() => Xc, "getCommonDb"), Ms = {}, $s = /* @__PURE__ */ p((e, t, r) => {
  Ms[e] && ih.warn(`Diagram with id ${e} already registered. Overwriting.`), Ms[e] = t, r && $c(e, r), iC(e, t.styles), t.injectUtils?.(
    ih,
    dC,
    gt,
    gn,
    fC,
    pC(),
    () => {
    }
  );
}, "registerDiagram"), ma = /* @__PURE__ */ p((e) => {
  if (e in Ms)
    return Ms[e];
  throw new gC(e);
}, "getDiagram"), gC = class extends Error {
  static {
    p(this, "DiagramNotFoundError");
  }
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}, mC = { value: () => {
} };
function Vc() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new ys(r);
}
function ys(e) {
  this._ = e;
}
function yC(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", s = r.indexOf(".");
    if (s >= 0 && (i = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
ys.prototype = Vc.prototype = {
  constructor: ys,
  on: function(e, t) {
    var r = this._, i = yC(e + "", r), s, o = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((s = (e = i[o]).type) && (s = CC(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (s = (e = i[o]).type) r[s] = sh(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = sh(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new ys(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), i = 0, s, o; i < s; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], i = 0, s = o.length; i < s; ++i) o[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], s = 0, o = i.length; s < o; ++s) i[s].value.apply(t, r);
  }
};
function CC(e, t) {
  for (var r = 0, i = e.length, s; r < i; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function sh(e, t, r) {
  for (var i = 0, s = e.length; i < s; ++i)
    if (e[i].name === t) {
      e[i] = mC, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var ya = "http://www.w3.org/1999/xhtml";
const oh = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ya,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function co(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), oh.hasOwnProperty(t) ? { space: oh[t], local: e } : e;
}
function xC(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === ya && t.documentElement.namespaceURI === ya ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function bC(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Zc(e) {
  var t = co(e);
  return (t.local ? bC : xC)(t);
}
function kC() {
}
function mn(e) {
  return e == null ? kC : function() {
    return this.querySelector(e);
  };
}
function TC(e) {
  typeof e != "function" && (e = mn(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = new Array(a), l, c, h = 0; h < a; ++h)
      (l = o[h]) && (c = e.call(l, l.__data__, h, o)) && ("__data__" in l && (c.__data__ = l.__data__), n[h] = c);
  return new ae(i, this._parents);
}
function wC(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function SC() {
  return [];
}
function Kc(e) {
  return e == null ? SC : function() {
    return this.querySelectorAll(e);
  };
}
function _C(e) {
  return function() {
    return wC(e.apply(this, arguments));
  };
}
function vC(e) {
  typeof e == "function" ? e = _C(e) : e = Kc(e);
  for (var t = this._groups, r = t.length, i = [], s = [], o = 0; o < r; ++o)
    for (var a = t[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && (i.push(e.call(l, l.__data__, c, a)), s.push(l));
  return new ae(i, s);
}
function Qc(e) {
  return function() {
    return this.matches(e);
  };
}
function Jc(e) {
  return function(t) {
    return t.matches(e);
  };
}
var BC = Array.prototype.find;
function LC(e) {
  return function() {
    return BC.call(this.children, e);
  };
}
function FC() {
  return this.firstElementChild;
}
function AC(e) {
  return this.select(e == null ? FC : LC(typeof e == "function" ? e : Jc(e)));
}
var EC = Array.prototype.filter;
function MC() {
  return Array.from(this.children);
}
function $C(e) {
  return function() {
    return EC.call(this.children, e);
  };
}
function IC(e) {
  return this.selectAll(e == null ? MC : $C(typeof e == "function" ? e : Jc(e)));
}
function OC(e) {
  typeof e != "function" && (e = Qc(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new ae(i, this._parents);
}
function tu(e) {
  return new Array(e.length);
}
function DC() {
  return new ae(this._enter || this._groups.map(tu), this._parents);
}
function Is(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Is.prototype = {
  constructor: Is,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function RC(e) {
  return function() {
    return e;
  };
}
function PC(e, t, r, i, s, o) {
  for (var a = 0, n, l = t.length, c = o.length; a < c; ++a)
    (n = t[a]) ? (n.__data__ = o[a], i[a] = n) : r[a] = new Is(e, o[a]);
  for (; a < l; ++a)
    (n = t[a]) && (s[a] = n);
}
function NC(e, t, r, i, s, o, a) {
  var n, l, c = /* @__PURE__ */ new Map(), h = t.length, u = o.length, f = new Array(h), d;
  for (n = 0; n < h; ++n)
    (l = t[n]) && (f[n] = d = a.call(l, l.__data__, n, t) + "", c.has(d) ? s[n] = l : c.set(d, l));
  for (n = 0; n < u; ++n)
    d = a.call(e, o[n], n, o) + "", (l = c.get(d)) ? (i[n] = l, l.__data__ = o[n], c.delete(d)) : r[n] = new Is(e, o[n]);
  for (n = 0; n < h; ++n)
    (l = t[n]) && c.get(f[n]) === l && (s[n] = l);
}
function qC(e) {
  return e.__data__;
}
function WC(e, t) {
  if (!arguments.length) return Array.from(this, qC);
  var r = t ? NC : PC, i = this._parents, s = this._groups;
  typeof e != "function" && (e = RC(e));
  for (var o = s.length, a = new Array(o), n = new Array(o), l = new Array(o), c = 0; c < o; ++c) {
    var h = i[c], u = s[c], f = u.length, d = zC(e.call(h, h && h.__data__, c, i)), g = d.length, m = n[c] = new Array(g), y = a[c] = new Array(g), C = l[c] = new Array(f);
    r(h, u, m, y, C, d, t);
    for (var b = 0, k = 0, w, S; b < g; ++b)
      if (w = m[b]) {
        for (b >= k && (k = b + 1); !(S = y[k]) && ++k < g; ) ;
        w._next = S || null;
      }
  }
  return a = new ae(a, i), a._enter = n, a._exit = l, a;
}
function zC(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function HC() {
  return new ae(this._exit || this._groups.map(tu), this._parents);
}
function UC(e, t, r) {
  var i = this.enter(), s = this, o = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? o.remove() : r(o), i && s ? i.merge(s).order() : s;
}
function YC(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, s = r.length, o = i.length, a = Math.min(s, o), n = new Array(s), l = 0; l < a; ++l)
    for (var c = r[l], h = i[l], u = c.length, f = n[l] = new Array(u), d, g = 0; g < u; ++g)
      (d = c[g] || h[g]) && (f[g] = d);
  for (; l < s; ++l)
    n[l] = r[l];
  return new ae(n, this._parents);
}
function GC() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], s = i.length - 1, o = i[s], a; --s >= 0; )
      (a = i[s]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function jC(e) {
  e || (e = XC);
  function t(u, f) {
    return u && f ? e(u.__data__, f.__data__) : !u - !f;
  }
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o) {
    for (var a = r[o], n = a.length, l = s[o] = new Array(n), c, h = 0; h < n; ++h)
      (c = a[h]) && (l[h] = c);
    l.sort(t);
  }
  return new ae(s, this._parents).order();
}
function XC(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function VC() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function ZC() {
  return Array.from(this);
}
function KC() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length; s < o; ++s) {
      var a = i[s];
      if (a) return a;
    }
  return null;
}
function QC() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function JC() {
  return !this.node();
}
function tx(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var s = t[r], o = 0, a = s.length, n; o < a; ++o)
      (n = s[o]) && e.call(n, n.__data__, o, s);
  return this;
}
function ex(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function rx(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function ix(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function sx(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ox(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function ax(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function nx(e, t) {
  var r = co(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? rx : ex : typeof t == "function" ? r.local ? ax : ox : r.local ? sx : ix)(r, t));
}
function eu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function lx(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hx(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function cx(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function ux(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? lx : typeof t == "function" ? cx : hx)(e, t, r ?? "")) : Gr(this.node(), e);
}
function Gr(e, t) {
  return e.style.getPropertyValue(t) || eu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function dx(e) {
  return function() {
    delete this[e];
  };
}
function fx(e, t) {
  return function() {
    this[e] = t;
  };
}
function px(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function gx(e, t) {
  return arguments.length > 1 ? this.each((t == null ? dx : typeof t == "function" ? px : fx)(e, t)) : this.node()[e];
}
function ru(e) {
  return e.trim().split(/^|\s+/);
}
function yn(e) {
  return e.classList || new iu(e);
}
function iu(e) {
  this._node = e, this._names = ru(e.getAttribute("class") || "");
}
iu.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function su(e, t) {
  for (var r = yn(e), i = -1, s = t.length; ++i < s; ) r.add(t[i]);
}
function ou(e, t) {
  for (var r = yn(e), i = -1, s = t.length; ++i < s; ) r.remove(t[i]);
}
function mx(e) {
  return function() {
    su(this, e);
  };
}
function yx(e) {
  return function() {
    ou(this, e);
  };
}
function Cx(e, t) {
  return function() {
    (t.apply(this, arguments) ? su : ou)(this, e);
  };
}
function xx(e, t) {
  var r = ru(e + "");
  if (arguments.length < 2) {
    for (var i = yn(this.node()), s = -1, o = r.length; ++s < o; ) if (!i.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Cx : t ? mx : yx)(r, t));
}
function bx() {
  this.textContent = "";
}
function kx(e) {
  return function() {
    this.textContent = e;
  };
}
function Tx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function wx(e) {
  return arguments.length ? this.each(e == null ? bx : (typeof e == "function" ? Tx : kx)(e)) : this.node().textContent;
}
function Sx() {
  this.innerHTML = "";
}
function _x(e) {
  return function() {
    this.innerHTML = e;
  };
}
function vx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Bx(e) {
  return arguments.length ? this.each(e == null ? Sx : (typeof e == "function" ? vx : _x)(e)) : this.node().innerHTML;
}
function Lx() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fx() {
  return this.each(Lx);
}
function Ax() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ex() {
  return this.each(Ax);
}
function Mx(e) {
  var t = typeof e == "function" ? e : Zc(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function $x() {
  return null;
}
function Ix(e, t) {
  var r = typeof e == "function" ? e : Zc(e), i = t == null ? $x : typeof t == "function" ? t : mn(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Ox() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Dx() {
  return this.each(Ox);
}
function Rx() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Px() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Nx(e) {
  return this.select(e ? Px : Rx);
}
function qx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Wx(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function zx(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Hx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, s = t.length, o; r < s; ++r)
        o = t[r], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++i] = o;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function Ux(e, t, r) {
  return function() {
    var i = this.__on, s, o = Wx(t);
    if (i) {
      for (var a = 0, n = i.length; a < n; ++a)
        if ((s = i[a]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = o, s.options = r), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, r), s = { type: e.type, name: e.name, value: t, listener: o, options: r }, i ? i.push(s) : this.__on = [s];
  };
}
function Yx(e, t, r) {
  var i = zx(e + ""), s, o = i.length, a;
  if (arguments.length < 2) {
    var n = this.node().__on;
    if (n) {
      for (var l = 0, c = n.length, h; l < c; ++l)
        for (s = 0, h = n[l]; s < o; ++s)
          if ((a = i[s]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (n = t ? Ux : Hx, s = 0; s < o; ++s) this.each(n(i[s], t, r));
  return this;
}
function au(e, t, r) {
  var i = eu(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = i.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function Gx(e, t) {
  return function() {
    return au(this, e, t);
  };
}
function jx(e, t) {
  return function() {
    return au(this, e, t.apply(this, arguments));
  };
}
function Xx(e, t) {
  return this.each((typeof t == "function" ? jx : Gx)(e, t));
}
function* Vx() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && (yield a);
}
var nu = [null];
function ae(e, t) {
  this._groups = e, this._parents = t;
}
function Ui() {
  return new ae([[document.documentElement]], nu);
}
function Zx() {
  return this;
}
ae.prototype = Ui.prototype = {
  constructor: ae,
  select: TC,
  selectAll: vC,
  selectChild: AC,
  selectChildren: IC,
  filter: OC,
  data: WC,
  enter: DC,
  exit: HC,
  join: UC,
  merge: YC,
  selection: Zx,
  order: GC,
  sort: jC,
  call: VC,
  nodes: ZC,
  node: KC,
  size: QC,
  empty: JC,
  each: tx,
  attr: nx,
  style: ux,
  property: gx,
  classed: xx,
  text: wx,
  html: Bx,
  raise: Fx,
  lower: Ex,
  append: Mx,
  insert: Ix,
  remove: Dx,
  clone: Nx,
  datum: qx,
  on: Yx,
  dispatch: Xx,
  [Symbol.iterator]: Vx
};
function ct(e) {
  return typeof e == "string" ? new ae([[document.querySelector(e)]], [document.documentElement]) : new ae([[e]], nu);
}
function Cn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function lu(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function Yi() {
}
var Ei = 0.7, Os = 1 / Ei, zr = "\\s*([+-]?\\d+)\\s*", Mi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Fe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Kx = /^#([0-9a-f]{3,8})$/, Qx = new RegExp(`^rgb\\(${zr},${zr},${zr}\\)$`), Jx = new RegExp(`^rgb\\(${Fe},${Fe},${Fe}\\)$`), tb = new RegExp(`^rgba\\(${zr},${zr},${zr},${Mi}\\)$`), eb = new RegExp(`^rgba\\(${Fe},${Fe},${Fe},${Mi}\\)$`), rb = new RegExp(`^hsl\\(${Mi},${Fe},${Fe}\\)$`), ib = new RegExp(`^hsla\\(${Mi},${Fe},${Fe},${Mi}\\)$`), ah = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Cn(Yi, $i, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: nh,
  // Deprecated! Use color.formatHex.
  formatHex: nh,
  formatHex8: sb,
  formatHsl: ob,
  formatRgb: lh,
  toString: lh
});
function nh() {
  return this.rgb().formatHex();
}
function sb() {
  return this.rgb().formatHex8();
}
function ob() {
  return hu(this).formatHsl();
}
function lh() {
  return this.rgb().formatRgb();
}
function $i(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Kx.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? hh(t) : r === 3 ? new ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? is(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? is(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Qx.exec(e)) ? new ie(t[1], t[2], t[3], 1) : (t = Jx.exec(e)) ? new ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = tb.exec(e)) ? is(t[1], t[2], t[3], t[4]) : (t = eb.exec(e)) ? is(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = rb.exec(e)) ? dh(t[1], t[2] / 100, t[3] / 100, 1) : (t = ib.exec(e)) ? dh(t[1], t[2] / 100, t[3] / 100, t[4]) : ah.hasOwnProperty(e) ? hh(ah[e]) : e === "transparent" ? new ie(NaN, NaN, NaN, 0) : null;
}
function hh(e) {
  return new ie(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function is(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new ie(e, t, r, i);
}
function ab(e) {
  return e instanceof Yi || (e = $i(e)), e ? (e = e.rgb(), new ie(e.r, e.g, e.b, e.opacity)) : new ie();
}
function Ca(e, t, r, i) {
  return arguments.length === 1 ? ab(e) : new ie(e, t, r, i ?? 1);
}
function ie(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
Cn(ie, Ca, lu(Yi, {
  brighter(e) {
    return e = e == null ? Os : Math.pow(Os, e), new ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ie(mr(this.r), mr(this.g), mr(this.b), Ds(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ch,
  // Deprecated! Use color.formatHex.
  formatHex: ch,
  formatHex8: nb,
  formatRgb: uh,
  toString: uh
}));
function ch() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}`;
}
function nb() {
  return `#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function uh() {
  const e = Ds(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mr(this.r)}, ${mr(this.g)}, ${mr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ds(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function fr(e) {
  return e = mr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function dh(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ye(e, t, r, i);
}
function hu(e) {
  if (e instanceof ye) return new ye(e.h, e.s, e.l, e.opacity);
  if (e instanceof Yi || (e = $i(e)), !e) return new ye();
  if (e instanceof ye) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, s = Math.min(t, r, i), o = Math.max(t, r, i), a = NaN, n = o - s, l = (o + s) / 2;
  return n ? (t === o ? a = (r - i) / n + (r < i) * 6 : r === o ? a = (i - t) / n + 2 : a = (t - r) / n + 4, n /= l < 0.5 ? o + s : 2 - o - s, a *= 60) : n = l > 0 && l < 1 ? 0 : a, new ye(a, n, l, e.opacity);
}
function lb(e, t, r, i) {
  return arguments.length === 1 ? hu(e) : new ye(e, t, r, i ?? 1);
}
function ye(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
Cn(ye, lb, lu(Yi, {
  brighter(e) {
    return e = e == null ? Os : Math.pow(Os, e), new ye(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ei : Math.pow(Ei, e), new ye(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - i;
    return new ie(
      Xo(e >= 240 ? e - 240 : e + 120, s, i),
      Xo(e, s, i),
      Xo(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new ye(fh(this.h), ss(this.s), ss(this.l), Ds(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ds(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${fh(this.h)}, ${ss(this.s) * 100}%, ${ss(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function fh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ss(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Xo(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const xn = (e) => () => e;
function cu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function hb(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function mL(e, t) {
  var r = t - e;
  return r ? cu(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : xn(isNaN(e) ? t : e);
}
function cb(e) {
  return (e = +e) == 1 ? uu : function(t, r) {
    return r - t ? hb(t, r, e) : xn(isNaN(t) ? r : t);
  };
}
function uu(e, t) {
  var r = t - e;
  return r ? cu(e, r) : xn(isNaN(e) ? t : e);
}
const ph = (function e(t) {
  var r = cb(t);
  function i(s, o) {
    var a = r((s = Ca(s)).r, (o = Ca(o)).r), n = r(s.g, o.g), l = r(s.b, o.b), c = uu(s.opacity, o.opacity);
    return function(h) {
      return s.r = a(h), s.g = n(h), s.b = l(h), s.opacity = c(h), s + "";
    };
  }
  return i.gamma = e, i;
})(1);
function Ze(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Vo = new RegExp(xa.source, "g");
function ub(e) {
  return function() {
    return e;
  };
}
function db(e) {
  return function(t) {
    return e(t) + "";
  };
}
function fb(e, t) {
  var r = xa.lastIndex = Vo.lastIndex = 0, i, s, o, a = -1, n = [], l = [];
  for (e = e + "", t = t + ""; (i = xa.exec(e)) && (s = Vo.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), n[a] ? n[a] += o : n[++a] = o), (i = i[0]) === (s = s[0]) ? n[a] ? n[a] += s : n[++a] = s : (n[++a] = null, l.push({ i: a, x: Ze(i, s) })), r = Vo.lastIndex;
  return r < t.length && (o = t.slice(r), n[a] ? n[a] += o : n[++a] = o), n.length < 2 ? l[0] ? db(l[0].x) : ub(t) : (t = l.length, function(c) {
    for (var h = 0, u; h < t; ++h) n[(u = l[h]).i] = u.x(c);
    return n.join("");
  });
}
var gh = 180 / Math.PI, ba = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function du(e, t, r, i, s, o) {
  var a, n, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * r + t * i) && (r -= e * l, i -= t * l), (n = Math.sqrt(r * r + i * i)) && (r /= n, i /= n, l /= n), e * i < t * r && (e = -e, t = -t, l = -l, a = -a), {
    translateX: s,
    translateY: o,
    rotate: Math.atan2(t, e) * gh,
    skewX: Math.atan(l) * gh,
    scaleX: a,
    scaleY: n
  };
}
var os;
function pb(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? ba : du(t.a, t.b, t.c, t.d, t.e, t.f);
}
function gb(e) {
  return e == null || (os || (os = document.createElementNS("http://www.w3.org/2000/svg", "g")), os.setAttribute("transform", e), !(e = os.transform.baseVal.consolidate())) ? ba : (e = e.matrix, du(e.a, e.b, e.c, e.d, e.e, e.f));
}
function fu(e, t, r, i) {
  function s(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: Ze(c, u) }, { i: m - 2, x: Ze(h, f) });
    } else (u || f) && d.push("translate(" + u + t + f + r);
  }
  function a(c, h, u, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: u.push(s(u) + "rotate(", null, i) - 2, x: Ze(c, h) })) : h && u.push(s(u) + "rotate(" + h + i);
  }
  function n(c, h, u, f) {
    c !== h ? f.push({ i: u.push(s(u) + "skewX(", null, i) - 2, x: Ze(c, h) }) : h && u.push(s(u) + "skewX(" + h + i);
  }
  function l(c, h, u, f, d, g) {
    if (c !== u || h !== f) {
      var m = d.push(s(d) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Ze(c, u) }, { i: m - 2, x: Ze(h, f) });
    } else (u !== 1 || f !== 1) && d.push(s(d) + "scale(" + u + "," + f + ")");
  }
  return function(c, h) {
    var u = [], f = [];
    return c = e(c), h = e(h), o(c.translateX, c.translateY, h.translateX, h.translateY, u, f), a(c.rotate, h.rotate, u, f), n(c.skewX, h.skewX, u, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, u, f), c = h = null, function(d) {
      for (var g = -1, m = f.length, y; ++g < m; ) u[(y = f[g]).i] = y.x(d);
      return u.join("");
    };
  };
}
var mb = fu(pb, "px, ", "px)", "deg)"), yb = fu(gb, ", ", ")", ")"), jr = 0, Ci = 0, li = 0, pu = 1e3, Rs, xi, Ps = 0, xr = 0, uo = 0, Ii = typeof performance == "object" && performance.now ? performance : Date, gu = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function bn() {
  return xr || (gu(Cb), xr = Ii.now() + uo);
}
function Cb() {
  xr = 0;
}
function Ns() {
  this._call = this._time = this._next = null;
}
Ns.prototype = mu.prototype = {
  constructor: Ns,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? bn() : +r) + (t == null ? 0 : +t), !this._next && xi !== this && (xi ? xi._next = this : Rs = this, xi = this), this._call = e, this._time = r, ka();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ka());
  }
};
function mu(e, t, r) {
  var i = new Ns();
  return i.restart(e, t, r), i;
}
function xb() {
  bn(), ++jr;
  for (var e = Rs, t; e; )
    (t = xr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --jr;
}
function mh() {
  xr = (Ps = Ii.now()) + uo, jr = Ci = 0;
  try {
    xb();
  } finally {
    jr = 0, kb(), xr = 0;
  }
}
function bb() {
  var e = Ii.now(), t = e - Ps;
  t > pu && (uo -= t, Ps = e);
}
function kb() {
  for (var e, t = Rs, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Rs = r);
  xi = e, ka(i);
}
function ka(e) {
  if (!jr) {
    Ci && (Ci = clearTimeout(Ci));
    var t = e - xr;
    t > 24 ? (e < 1 / 0 && (Ci = setTimeout(mh, e - Ii.now() - uo)), li && (li = clearInterval(li))) : (li || (Ps = Ii.now(), li = setInterval(bb, pu)), jr = 1, gu(mh));
  }
}
function yh(e, t, r) {
  var i = new Ns();
  return t = t == null ? 0 : +t, i.restart((s) => {
    i.stop(), e(s + t);
  }, t, r), i;
}
var Tb = Vc("start", "end", "cancel", "interrupt"), wb = [], yu = 0, Ch = 1, Ta = 2, Cs = 3, xh = 4, wa = 5, xs = 6;
function fo(e, t, r, i, s, o) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (r in a) return;
  Sb(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: s,
    // For context during callback.
    on: Tb,
    tween: wb,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: yu
  });
}
function kn(e, t) {
  var r = we(e, t);
  if (r.state > yu) throw new Error("too late; already scheduled");
  return r;
}
function Ie(e, t) {
  var r = we(e, t);
  if (r.state > Cs) throw new Error("too late; already running");
  return r;
}
function we(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function Sb(e, t, r) {
  var i = e.__transition, s;
  i[t] = r, r.timer = mu(o, 0, r.time);
  function o(c) {
    r.state = Ch, r.timer.restart(a, r.delay, r.time), r.delay <= c && a(c - r.delay);
  }
  function a(c) {
    var h, u, f, d;
    if (r.state !== Ch) return l();
    for (h in i)
      if (d = i[h], d.name === r.name) {
        if (d.state === Cs) return yh(a);
        d.state === xh ? (d.state = xs, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[h]) : +h < t && (d.state = xs, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[h]);
      }
    if (yh(function() {
      r.state === Cs && (r.state = xh, r.timer.restart(n, r.delay, r.time), n(c));
    }), r.state = Ta, r.on.call("start", e, e.__data__, r.index, r.group), r.state === Ta) {
      for (r.state = Cs, s = new Array(f = r.tween.length), h = 0, u = -1; h < f; ++h)
        (d = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++u] = d);
      s.length = u + 1;
    }
  }
  function n(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = wa, 1), u = -1, f = s.length; ++u < f; )
      s[u].call(e, h);
    r.state === wa && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = xs, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function _b(e, t) {
  var r = e.__transition, i, s, o = !0, a;
  if (r) {
    t = t == null ? null : t + "";
    for (a in r) {
      if ((i = r[a]).name !== t) {
        o = !1;
        continue;
      }
      s = i.state > Ta && i.state < wa, i.state = xs, i.timer.stop(), i.on.call(s ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[a];
    }
    o && delete e.__transition;
  }
}
function vb(e) {
  return this.each(function() {
    _b(this, e);
  });
}
function Bb(e, t) {
  var r, i;
  return function() {
    var s = Ie(this, e), o = s.tween;
    if (o !== r) {
      i = r = o;
      for (var a = 0, n = i.length; a < n; ++a)
        if (i[a].name === t) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    s.tween = i;
  };
}
function Lb(e, t, r) {
  var i, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var o = Ie(this, e), a = o.tween;
    if (a !== i) {
      s = (i = a).slice();
      for (var n = { name: t, value: r }, l = 0, c = s.length; l < c; ++l)
        if (s[l].name === t) {
          s[l] = n;
          break;
        }
      l === c && s.push(n);
    }
    o.tween = s;
  };
}
function Fb(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = we(this.node(), r).tween, s = 0, o = i.length, a; s < o; ++s)
      if ((a = i[s]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Bb : Lb)(r, e, t));
}
function Tn(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var s = Ie(this, i);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return we(s, i).value[t];
  };
}
function Cu(e, t) {
  var r;
  return (typeof t == "number" ? Ze : t instanceof $i ? ph : (r = $i(t)) ? (t = r, ph) : fb)(e, t);
}
function Ab(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Eb(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mb(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function $b(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function Ib(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function Ob(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function Db(e, t) {
  var r = co(e), i = r === "transform" ? yb : Cu;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Ob : Ib)(r, i, Tn(this, "attr." + e, t)) : t == null ? (r.local ? Eb : Ab)(r) : (r.local ? $b : Mb)(r, i, t));
}
function Rb(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Pb(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Nb(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && Pb(e, o)), r;
  }
  return s._value = t, s;
}
function qb(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && Rb(e, o)), r;
  }
  return s._value = t, s;
}
function Wb(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = co(e);
  return this.tween(r, (i.local ? Nb : qb)(i, t));
}
function zb(e, t) {
  return function() {
    kn(this, e).delay = +t.apply(this, arguments);
  };
}
function Hb(e, t) {
  return t = +t, function() {
    kn(this, e).delay = t;
  };
}
function Ub(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? zb : Hb)(t, e)) : we(this.node(), t).delay;
}
function Yb(e, t) {
  return function() {
    Ie(this, e).duration = +t.apply(this, arguments);
  };
}
function Gb(e, t) {
  return t = +t, function() {
    Ie(this, e).duration = t;
  };
}
function jb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Yb : Gb)(t, e)) : we(this.node(), t).duration;
}
function Xb(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ie(this, e).ease = t;
  };
}
function Vb(e) {
  var t = this._id;
  return arguments.length ? this.each(Xb(t, e)) : we(this.node(), t).ease;
}
function Zb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Ie(this, e).ease = r;
  };
}
function Kb(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Zb(this._id, e));
}
function Qb(e) {
  typeof e != "function" && (e = Qc(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new He(i, this._parents, this._name, this._id);
}
function Jb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, s = r.length, o = Math.min(i, s), a = new Array(i), n = 0; n < o; ++n)
    for (var l = t[n], c = r[n], h = l.length, u = a[n] = new Array(h), f, d = 0; d < h; ++d)
      (f = l[d] || c[d]) && (u[d] = f);
  for (; n < i; ++n)
    a[n] = t[n];
  return new He(a, this._parents, this._name, this._id);
}
function t1(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function e1(e, t, r) {
  var i, s, o = t1(t) ? kn : Ie;
  return function() {
    var a = o(this, e), n = a.on;
    n !== i && (s = (i = n).copy()).on(t, r), a.on = s;
  };
}
function r1(e, t) {
  var r = this._id;
  return arguments.length < 2 ? we(this.node(), r).on.on(e) : this.each(e1(r, e, t));
}
function i1(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function s1() {
  return this.on("end.remove", i1(this._id));
}
function o1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = mn(e));
  for (var i = this._groups, s = i.length, o = new Array(s), a = 0; a < s; ++a)
    for (var n = i[a], l = n.length, c = o[a] = new Array(l), h, u, f = 0; f < l; ++f)
      (h = n[f]) && (u = e.call(h, h.__data__, f, n)) && ("__data__" in h && (u.__data__ = h.__data__), c[f] = u, fo(c[f], t, r, f, c, we(h, r)));
  return new He(o, this._parents, t, r);
}
function a1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Kc(e));
  for (var i = this._groups, s = i.length, o = [], a = [], n = 0; n < s; ++n)
    for (var l = i[n], c = l.length, h, u = 0; u < c; ++u)
      if (h = l[u]) {
        for (var f = e.call(h, h.__data__, u, l), d, g = we(h, r), m = 0, y = f.length; m < y; ++m)
          (d = f[m]) && fo(d, t, r, m, f, g);
        o.push(f), a.push(h);
      }
  return new He(o, a, t, r);
}
var n1 = Ui.prototype.constructor;
function l1() {
  return new n1(this._groups, this._parents);
}
function h1(e, t) {
  var r, i, s;
  return function() {
    var o = Gr(this, e), a = (this.style.removeProperty(e), Gr(this, e));
    return o === a ? null : o === r && a === i ? s : s = t(r = o, i = a);
  };
}
function xu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function c1(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = Gr(this, e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function u1(e, t, r) {
  var i, s, o;
  return function() {
    var a = Gr(this, e), n = r(this), l = n + "";
    return n == null && (l = n = (this.style.removeProperty(e), Gr(this, e))), a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n));
  };
}
function d1(e, t) {
  var r, i, s, o = "style." + t, a = "end." + o, n;
  return function() {
    var l = Ie(this, e), c = l.on, h = l.value[o] == null ? n || (n = xu(t)) : void 0;
    (c !== r || s !== h) && (i = (r = c).copy()).on(a, s = h), l.on = i;
  };
}
function f1(e, t, r) {
  var i = (e += "") == "transform" ? mb : Cu;
  return t == null ? this.styleTween(e, h1(e, i)).on("end.style." + e, xu(e)) : typeof t == "function" ? this.styleTween(e, u1(e, i, Tn(this, "style." + e, t))).each(d1(this._id, e)) : this.styleTween(e, c1(e, i, t), r).on("end.style." + e, null);
}
function p1(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function g1(e, t, r) {
  var i, s;
  function o() {
    var a = t.apply(this, arguments);
    return a !== s && (i = (s = a) && p1(e, a, r)), i;
  }
  return o._value = t, o;
}
function m1(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, g1(e, t, r ?? ""));
}
function y1(e) {
  return function() {
    this.textContent = e;
  };
}
function C1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function x1(e) {
  return this.tween("text", typeof e == "function" ? C1(Tn(this, "text", e)) : y1(e == null ? "" : e + ""));
}
function b1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function k1(e) {
  var t, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && b1(s)), t;
  }
  return i._value = e, i;
}
function T1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, k1(e));
}
function w1() {
  for (var e = this._name, t = this._id, r = bu(), i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      if (l = a[c]) {
        var h = we(l, t);
        fo(l, e, r, c, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new He(i, this._parents, e, r);
}
function S1() {
  var e, t, r = this, i = r._id, s = r.size();
  return new Promise(function(o, a) {
    var n = { value: a }, l = { value: function() {
      --s === 0 && o();
    } };
    r.each(function() {
      var c = Ie(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(n), t._.interrupt.push(n), t._.end.push(l)), c.on = t;
    }), s === 0 && o();
  });
}
var _1 = 0;
function He(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function bu() {
  return ++_1;
}
var Pe = Ui.prototype;
He.prototype = {
  constructor: He,
  select: o1,
  selectAll: a1,
  selectChild: Pe.selectChild,
  selectChildren: Pe.selectChildren,
  filter: Qb,
  merge: Jb,
  selection: l1,
  transition: w1,
  call: Pe.call,
  nodes: Pe.nodes,
  node: Pe.node,
  size: Pe.size,
  empty: Pe.empty,
  each: Pe.each,
  on: r1,
  attr: Db,
  attrTween: Wb,
  style: f1,
  styleTween: m1,
  text: x1,
  textTween: T1,
  remove: s1,
  tween: Fb,
  delay: Ub,
  duration: jb,
  ease: Vb,
  easeVarying: Kb,
  end: S1,
  [Symbol.iterator]: Pe[Symbol.iterator]
};
function v1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var B1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: v1
};
function L1(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function F1(e) {
  var t, r;
  e instanceof He ? (t = e._id, e = e._name) : (t = bu(), (r = B1).time = bn(), e = e == null ? null : e + "");
  for (var i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && fo(l, e, t, c, a, r || L1(l, t));
  return new He(i, this._parents, e, t);
}
Ui.prototype.interrupt = vb;
Ui.prototype.transition = F1;
const Sa = Math.PI, _a = 2 * Sa, cr = 1e-6, A1 = _a - cr;
function ku(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function E1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ku;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, o = i.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + i[s];
  };
}
class M1 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ku : E1(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, s) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, i, s, o, a) {
    this._append`C${+t},${+r},${+i},${+s},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, i, s, o) {
    if (t = +t, r = +r, i = +i, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, n = this._y1, l = i - t, c = s - r, h = a - t, u = n - r, f = h * h + u * u;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > cr) if (!(Math.abs(u * l - c * h) > cr) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let d = i - a, g = s - n, m = l * l + c * c, y = d * d + g * g, C = Math.sqrt(m), b = Math.sqrt(f), k = o * Math.tan((Sa - Math.acos((m + f - y) / (2 * C * b))) / 2), w = k / b, S = k / C;
      Math.abs(w - 1) > cr && this._append`L${t + w * h},${r + w * u}`, this._append`A${o},${o},0,0,${+(u * d > h * g)},${this._x1 = t + S * l},${this._y1 = r + S * c}`;
    }
  }
  arc(t, r, i, s, o, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let n = i * Math.cos(s), l = i * Math.sin(s), c = t + n, h = r + l, u = 1 ^ a, f = a ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > cr || Math.abs(this._y1 - h) > cr) && this._append`L${c},${h}`, i && (f < 0 && (f = f % _a + _a), f > A1 ? this._append`A${i},${i},0,1,${u},${t - n},${r - l}A${i},${i},0,1,${u},${this._x1 = c},${this._y1 = h}` : f > cr && this._append`A${i},${i},0,${+(f >= Sa)},${u},${this._x1 = t + i * Math.cos(o)},${this._y1 = r + i * Math.sin(o)}`);
  }
  rect(t, r, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Ar(e) {
  return function() {
    return e;
  };
}
const yL = Math.abs, CL = Math.atan2, xL = Math.cos, bL = Math.max, kL = Math.min, TL = Math.sin, wL = Math.sqrt, bh = 1e-12, wn = Math.PI, kh = wn / 2, SL = 2 * wn;
function _L(e) {
  return e > 1 ? 0 : e < -1 ? wn : Math.acos(e);
}
function vL(e) {
  return e >= 1 ? kh : e <= -1 ? -kh : Math.asin(e);
}
function $1(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new M1(t);
}
function I1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Tu(e) {
  this._context = e;
}
Tu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Li(e) {
  return new Tu(e);
}
function O1(e) {
  return e[0];
}
function D1(e) {
  return e[1];
}
function R1(e, t) {
  var r = Ar(!0), i = null, s = Li, o = null, a = $1(n);
  e = typeof e == "function" ? e : e === void 0 ? O1 : Ar(e), t = typeof t == "function" ? t : t === void 0 ? D1 : Ar(t);
  function n(l) {
    var c, h = (l = I1(l)).length, u, f = !1, d;
    for (i == null && (o = s(d = a())), c = 0; c <= h; ++c)
      !(c < h && r(u = l[c], c, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+e(u, c, l), +t(u, c, l));
    if (d) return o = null, d + "" || null;
  }
  return n.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Ar(+l), n) : e;
  }, n.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Ar(+l), n) : t;
  }, n.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Ar(!!l), n) : r;
  }, n.curve = function(l) {
    return arguments.length ? (s = l, i != null && (o = s(i)), n) : s;
  }, n.context = function(l) {
    return arguments.length ? (l == null ? i = o = null : o = s(i = l), n) : i;
  }, n;
}
class wu {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function Su(e) {
  return new wu(e, !0);
}
function _u(e) {
  return new wu(e, !1);
}
function er() {
}
function qs(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function po(e) {
  this._context = e;
}
po.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        qs(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function va(e) {
  return new po(e);
}
function vu(e) {
  this._context = e;
}
vu.prototype = {
  areaStart: er,
  areaEnd: er,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function P1(e) {
  return new vu(e);
}
function Bu(e) {
  this._context = e;
}
Bu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        qs(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function N1(e) {
  return new Bu(e);
}
function Lu(e, t) {
  this._basis = new po(e), this._beta = t;
}
Lu.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], s = t[0], o = e[r] - i, a = t[r] - s, n = -1, l; ++n <= r; )
        l = n / r, this._basis.point(
          this._beta * e[n] + (1 - this._beta) * (i + l * o),
          this._beta * t[n] + (1 - this._beta) * (s + l * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const q1 = (function e(t) {
  function r(i) {
    return t === 1 ? new po(i) : new Lu(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function Ws(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Sn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Sn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Ws(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Ws(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Fu = (function e(t) {
  function r(i) {
    return new Sn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function _n(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
_n.prototype = {
  areaStart: er,
  areaEnd: er,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Ws(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const W1 = (function e(t) {
  function r(i) {
    return new _n(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function vn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
vn.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Ws(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const z1 = (function e(t) {
  function r(i) {
    return new vn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Bn(e, t, r) {
  var i = e._x1, s = e._y1, o = e._x2, a = e._y2;
  if (e._l01_a > bh) {
    var n = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * n - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, s = (s * n - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > bh) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, a = (a * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, s, o, a, e._x2, e._y2);
}
function Au(e, t) {
  this._context = e, this._alpha = t;
}
Au.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Bn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Eu = (function e(t) {
  function r(i) {
    return t ? new Au(i, t) : new Sn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Mu(e, t) {
  this._context = e, this._alpha = t;
}
Mu.prototype = {
  areaStart: er,
  areaEnd: er,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Bn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const H1 = (function e(t) {
  function r(i) {
    return t ? new Mu(i, t) : new _n(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function $u(e, t) {
  this._context = e, this._alpha = t;
}
$u.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Bn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const U1 = (function e(t) {
  function r(i) {
    return t ? new $u(i, t) : new vn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Iu(e) {
  this._context = e;
}
Iu.prototype = {
  areaStart: er,
  areaEnd: er,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function Y1(e) {
  return new Iu(e);
}
function Th(e) {
  return e < 0 ? -1 : 1;
}
function wh(e, t, r) {
  var i = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (i || s < 0 && -0), a = (r - e._y1) / (s || i < 0 && -0), n = (o * s + a * i) / (i + s);
  return (Th(o) + Th(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(n)) || 0;
}
function Sh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Zo(e, t, r) {
  var i = e._x0, s = e._y0, o = e._x1, a = e._y1, n = (o - i) / 3;
  e._context.bezierCurveTo(i + n, s + n * t, o - n, a - n * r, o, a);
}
function zs(e) {
  this._context = e;
}
zs.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Zo(this, this._t0, Sh(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Zo(this, Sh(this, r = wh(this, e, t)), r);
          break;
        default:
          Zo(this, this._t0, r = wh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Ou(e) {
  this._context = new Du(e);
}
(Ou.prototype = Object.create(zs.prototype)).point = function(e, t) {
  zs.prototype.point.call(this, t, e);
};
function Du(e) {
  this._context = e;
}
Du.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, s, o) {
    this._context.bezierCurveTo(t, e, i, r, o, s);
  }
};
function Ru(e) {
  return new zs(e);
}
function Pu(e) {
  return new Ou(e);
}
function Nu(e) {
  this._context = e;
}
Nu.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = _h(e), s = _h(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(i[0][o], s[0][o], i[1][o], s[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function _h(e) {
  var t, r = e.length - 1, i, s = new Array(r), o = new Array(r), a = new Array(r);
  for (s[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) s[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (s[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = s[t] / o[t - 1], o[t] -= i, a[t] -= i * a[t - 1];
  for (s[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) s[t] = (a[t] - s[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + s[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - s[t + 1];
  return [s, o];
}
function qu(e) {
  return new Nu(e);
}
function go(e, t) {
  this._context = e, this._t = t;
}
go.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function Wu(e) {
  return new go(e, 0.5);
}
function zu(e) {
  return new go(e, 0);
}
function Hu(e) {
  return new go(e, 1);
}
function bi(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
bi.prototype = {
  constructor: bi,
  scale: function(e) {
    return e === 1 ? this : new bi(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new bi(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
bi.prototype;
var G1 = /* @__PURE__ */ p((e) => {
  const { securityLevel: t } = gt();
  let r = ct("body");
  if (t === "sandbox") {
    const o = ct(`#i${e}`).node()?.contentDocument ?? document;
    r = ct(o.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function Ln(e) {
  return typeof e > "u" || e === null;
}
p(Ln, "isNothing");
function Uu(e) {
  return typeof e == "object" && e !== null;
}
p(Uu, "isObject");
function Yu(e) {
  return Array.isArray(e) ? e : Ln(e) ? [] : [e];
}
p(Yu, "toArray");
function Gu(e, t) {
  var r, i, s, o;
  if (t)
    for (o = Object.keys(t), r = 0, i = o.length; r < i; r += 1)
      s = o[r], e[s] = t[s];
  return e;
}
p(Gu, "extend");
function ju(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
p(ju, "repeat");
function Xu(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
p(Xu, "isNegativeZero");
var j1 = Ln, X1 = Uu, V1 = Yu, Z1 = ju, K1 = Xu, Q1 = Gu, $t = {
  isNothing: j1,
  isObject: X1,
  toArray: V1,
  repeat: Z1,
  isNegativeZero: K1,
  extend: Q1
};
function Fn(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
p(Fn, "formatError");
function Xr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Fn(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
p(Xr, "YAMLException$1");
Xr.prototype = Object.create(Error.prototype);
Xr.prototype.constructor = Xr;
Xr.prototype.toString = /* @__PURE__ */ p(function(t) {
  return this.name + ": " + Fn(this, t);
}, "toString");
var re = Xr;
function bs(e, t, r, i, s) {
  var o = "", a = "", n = Math.floor(s / 2) - 1;
  return i - t > n && (o = " ... ", t = i - n + o.length), r - i > n && (a = " ...", r = i + n - a.length), {
    str: o + e.slice(t, r).replace(/\t/g, "→") + a,
    pos: i - t + o.length
    // relative position
  };
}
p(bs, "getLine");
function ks(e, t) {
  return $t.repeat(" ", t - e.length) + e;
}
p(ks, "padStart");
function Vu(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], s = [], o, a = -1; o = r.exec(e.buffer); )
    s.push(o.index), i.push(o.index + o[0].length), e.position <= o.index && a < 0 && (a = i.length - 2);
  a < 0 && (a = i.length - 1);
  var n = "", l, c, h = Math.min(e.line + t.linesAfter, s.length).toString().length, u = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(a - l < 0); l++)
    c = bs(
      e.buffer,
      i[a - l],
      s[a - l],
      e.position - (i[a] - i[a - l]),
      u
    ), n = $t.repeat(" ", t.indent) + ks((e.line - l + 1).toString(), h) + " | " + c.str + `
` + n;
  for (c = bs(e.buffer, i[a], s[a], e.position, u), n += $t.repeat(" ", t.indent) + ks((e.line + 1).toString(), h) + " | " + c.str + `
`, n += $t.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(a + l >= s.length); l++)
    c = bs(
      e.buffer,
      i[a + l],
      s[a + l],
      e.position - (i[a] - i[a + l]),
      u
    ), n += $t.repeat(" ", t.indent) + ks((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return n.replace(/\n$/, "");
}
p(Vu, "makeSnippet");
var J1 = Vu, tk = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], ek = [
  "scalar",
  "sequence",
  "mapping"
];
function Zu(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
p(Zu, "compileStyleAliases");
function Ku(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (tk.indexOf(r) === -1)
      throw new re('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = Zu(t.styleAliases || null), ek.indexOf(this.kind) === -1)
    throw new re('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
p(Ku, "Type$1");
var Ht = Ku;
function Ba(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var s = r.length;
    r.forEach(function(o, a) {
      o.tag === i.tag && o.kind === i.kind && o.multi === i.multi && (s = a);
    }), r[s] = i;
  }), r;
}
p(Ba, "compileList");
function Qu() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(s) {
    s.multi ? (e.multi[s.kind].push(s), e.multi.fallback.push(s)) : e[s.kind][s.tag] = e.fallback[s.tag] = s;
  }
  for (p(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
p(Qu, "compileMap");
function Hs(e) {
  return this.extend(e);
}
p(Hs, "Schema$1");
Hs.prototype.extend = /* @__PURE__ */ p(function(t) {
  var r = [], i = [];
  if (t instanceof Ht)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new re("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(o) {
    if (!(o instanceof Ht))
      throw new re("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new re("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new re("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(o) {
    if (!(o instanceof Ht))
      throw new re("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(Hs.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(i), s.compiledImplicit = Ba(s, "implicit"), s.compiledExplicit = Ba(s, "explicit"), s.compiledTypeMap = Qu(s.compiledImplicit, s.compiledExplicit), s;
}, "extend");
var rk = Hs, ik = new Ht("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), sk = new Ht("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), ok = new Ht("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ p(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), ak = new rk({
  explicit: [
    ik,
    sk,
    ok
  ]
});
function Ju(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
p(Ju, "resolveYamlNull");
function td() {
  return null;
}
p(td, "constructYamlNull");
function ed(e) {
  return e === null;
}
p(ed, "isNull");
var nk = new Ht("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Ju,
  construct: td,
  predicate: ed,
  represent: {
    canonical: /* @__PURE__ */ p(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ p(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ p(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function rd(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
p(rd, "resolveYamlBoolean");
function id(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
p(id, "constructYamlBoolean");
function sd(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
p(sd, "isBoolean");
var lk = new Ht("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: rd,
  construct: id,
  predicate: sd,
  represent: {
    lowercase: /* @__PURE__ */ p(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ p(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ p(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function od(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
p(od, "isHexCode");
function ad(e) {
  return 48 <= e && e <= 55;
}
p(ad, "isOctCode");
function nd(e) {
  return 48 <= e && e <= 57;
}
p(nd, "isDecCode");
function ld(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, s;
  if (!t) return !1;
  if (s = e[r], (s === "-" || s === "+") && (s = e[++r]), s === "0") {
    if (r + 1 === t) return !0;
    if (s = e[++r], s === "b") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (s !== "0" && s !== "1") return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "x") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!od(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "o") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!ad(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < t; r++)
    if (s = e[r], s !== "_") {
      if (!nd(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || s === "_");
}
p(ld, "resolveYamlInteger");
function hd(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
p(hd, "constructYamlInteger");
function cd(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !$t.isNegativeZero(e);
}
p(cd, "isInteger");
var hk = new Ht("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: ld,
  construct: hd,
  predicate: cd,
  represent: {
    binary: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ p(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ p(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), ck = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function ud(e) {
  return !(e === null || !ck.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
p(ud, "resolveYamlFloat");
function dd(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
p(dd, "constructYamlFloat");
var uk = /^[-+]?[0-9]+e/;
function fd(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if ($t.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), uk.test(r) ? r.replace("e", ".e") : r;
}
p(fd, "representYamlFloat");
function pd(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || $t.isNegativeZero(e));
}
p(pd, "isFloat");
var dk = new Ht("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: ud,
  construct: dd,
  predicate: pd,
  represent: fd,
  defaultStyle: "lowercase"
}), gd = ak.extend({
  implicit: [
    nk,
    lk,
    hk,
    dk
  ]
}), fk = gd, md = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), yd = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function Cd(e) {
  return e === null ? !1 : md.exec(e) !== null || yd.exec(e) !== null;
}
p(Cd, "resolveYamlTimestamp");
function xd(e) {
  var t, r, i, s, o, a, n, l = 0, c = null, h, u, f;
  if (t = md.exec(e), t === null && (t = yd.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, s = +t[3], !t[4])
    return new Date(Date.UTC(r, i, s));
  if (o = +t[4], a = +t[5], n = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], u = +(t[11] || 0), c = (h * 60 + u) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, s, o, a, n, l)), c && f.setTime(f.getTime() - c), f;
}
p(xd, "constructYamlTimestamp");
function bd(e) {
  return e.toISOString();
}
p(bd, "representYamlTimestamp");
var pk = new Ht("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: Cd,
  construct: xd,
  instanceOf: Date,
  represent: bd
});
function kd(e) {
  return e === "<<" || e === null;
}
p(kd, "resolveYamlMerge");
var gk = new Ht("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: kd
}), An = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function Td(e) {
  if (e === null) return !1;
  var t, r, i = 0, s = e.length, o = An;
  for (r = 0; r < s; r++)
    if (t = o.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
p(Td, "resolveYamlBinary");
function wd(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), s = i.length, o = An, a = 0, n = [];
  for (t = 0; t < s; t++)
    t % 4 === 0 && t && (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)), a = a << 6 | o.indexOf(i.charAt(t));
  return r = s % 4 * 6, r === 0 ? (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)) : r === 18 ? (n.push(a >> 10 & 255), n.push(a >> 2 & 255)) : r === 12 && n.push(a >> 4 & 255), new Uint8Array(n);
}
p(wd, "constructYamlBinary");
function Sd(e) {
  var t = "", r = 0, i, s, o = e.length, a = An;
  for (i = 0; i < o; i++)
    i % 3 === 0 && i && (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]), r = (r << 8) + e[i];
  return s = o % 3, s === 0 ? (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]) : s === 2 ? (t += a[r >> 10 & 63], t += a[r >> 4 & 63], t += a[r << 2 & 63], t += a[64]) : s === 1 && (t += a[r >> 2 & 63], t += a[r << 4 & 63], t += a[64], t += a[64]), t;
}
p(Sd, "representYamlBinary");
function _d(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
p(_d, "isBinary");
var mk = new Ht("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: Td,
  construct: wd,
  predicate: _d,
  represent: Sd
}), yk = Object.prototype.hasOwnProperty, Ck = Object.prototype.toString;
function vd(e) {
  if (e === null) return !0;
  var t = [], r, i, s, o, a, n = e;
  for (r = 0, i = n.length; r < i; r += 1) {
    if (s = n[r], a = !1, Ck.call(s) !== "[object Object]") return !1;
    for (o in s)
      if (yk.call(s, o))
        if (!a) a = !0;
        else return !1;
    if (!a) return !1;
    if (t.indexOf(o) === -1) t.push(o);
    else return !1;
  }
  return !0;
}
p(vd, "resolveYamlOmap");
function Bd(e) {
  return e !== null ? e : [];
}
p(Bd, "constructYamlOmap");
var xk = new Ht("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: vd,
  construct: Bd
}), bk = Object.prototype.toString;
function Ld(e) {
  if (e === null) return !0;
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1) {
    if (i = a[t], bk.call(i) !== "[object Object]" || (s = Object.keys(i), s.length !== 1)) return !1;
    o[t] = [s[0], i[s[0]]];
  }
  return !0;
}
p(Ld, "resolveYamlPairs");
function Fd(e) {
  if (e === null) return [];
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1)
    i = a[t], s = Object.keys(i), o[t] = [s[0], i[s[0]]];
  return o;
}
p(Fd, "constructYamlPairs");
var kk = new Ht("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Ld,
  construct: Fd
}), Tk = Object.prototype.hasOwnProperty;
function Ad(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (Tk.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
p(Ad, "resolveYamlSet");
function Ed(e) {
  return e !== null ? e : {};
}
p(Ed, "constructYamlSet");
var wk = new Ht("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Ad,
  construct: Ed
}), Md = fk.extend({
  implicit: [
    pk,
    gk
  ],
  explicit: [
    mk,
    xk,
    kk,
    wk
  ]
}), rr = Object.prototype.hasOwnProperty, Us = 1, $d = 2, Id = 3, Ys = 4, Ko = 1, Sk = 2, vh = 3, _k = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, vk = /[\x85\u2028\u2029]/, Bk = /[,\[\]\{\}]/, Od = /^(?:!|!!|![a-z\-]+!)$/i, Dd = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function La(e) {
  return Object.prototype.toString.call(e);
}
p(La, "_class");
function xe(e) {
  return e === 10 || e === 13;
}
p(xe, "is_EOL");
function tr(e) {
  return e === 9 || e === 32;
}
p(tr, "is_WHITE_SPACE");
function Xt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
p(Xt, "is_WS_OR_EOL");
function pr(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
p(pr, "is_FLOW_INDICATOR");
function Rd(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
p(Rd, "fromHexCode");
function Pd(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
p(Pd, "escapedHexLen");
function Nd(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
p(Nd, "fromDecimalCode");
function Fa(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
p(Fa, "simpleEscapeSequence");
function qd(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
p(qd, "charFromCodepoint");
function En(e, t, r) {
  t === "__proto__" ? Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r
  }) : e[t] = r;
}
p(En, "setProperty");
var Wd = new Array(256), zd = new Array(256);
for (lr = 0; lr < 256; lr++)
  Wd[lr] = Fa(lr) ? 1 : 0, zd[lr] = Fa(lr);
var lr;
function Hd(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Md, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
p(Hd, "State$1");
function Mn(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = J1(r), new re(t, r);
}
p(Mn, "generateError");
function K(e, t) {
  throw Mn(e, t);
}
p(K, "throwError");
function Oi(e, t) {
  e.onWarning && e.onWarning.call(null, Mn(e, t));
}
p(Oi, "throwWarning");
var Bh = {
  YAML: /* @__PURE__ */ p(function(t, r, i) {
    var s, o, a;
    t.version !== null && K(t, "duplication of %YAML directive"), i.length !== 1 && K(t, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), s === null && K(t, "ill-formed argument of the YAML directive"), o = parseInt(s[1], 10), a = parseInt(s[2], 10), o !== 1 && K(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = a < 2, a !== 1 && a !== 2 && Oi(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ p(function(t, r, i) {
    var s, o;
    i.length !== 2 && K(t, "TAG directive accepts exactly two arguments"), s = i[0], o = i[1], Od.test(s) || K(t, "ill-formed tag handle (first argument) of the TAG directive"), rr.call(t.tagMap, s) && K(t, 'there is a previously declared suffix for "' + s + '" tag handle'), Dd.test(o) || K(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      K(t, "tag prefix is malformed: " + o);
    }
    t.tagMap[s] = o;
  }, "handleTagDirective")
};
function ze(e, t, r, i) {
  var s, o, a, n;
  if (t < r) {
    if (n = e.input.slice(t, r), i)
      for (s = 0, o = n.length; s < o; s += 1)
        a = n.charCodeAt(s), a === 9 || 32 <= a && a <= 1114111 || K(e, "expected valid JSON character");
    else _k.test(n) && K(e, "the stream contains non-printable characters");
    e.result += n;
  }
}
p(ze, "captureSegment");
function Aa(e, t, r, i) {
  var s, o, a, n;
  for ($t.isObject(r) || K(e, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), a = 0, n = s.length; a < n; a += 1)
    o = s[a], rr.call(t, o) || (En(t, o, r[o]), i[o] = !0);
}
p(Aa, "mergeMappings");
function gr(e, t, r, i, s, o, a, n, l) {
  var c, h;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), c = 0, h = s.length; c < h; c += 1)
      Array.isArray(s[c]) && K(e, "nested arrays are not supported inside keys"), typeof s == "object" && La(s[c]) === "[object Object]" && (s[c] = "[object Object]");
  if (typeof s == "object" && La(s) === "[object Object]" && (s = "[object Object]"), s = String(s), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (c = 0, h = o.length; c < h; c += 1)
        Aa(e, t, o[c], r);
    else
      Aa(e, t, o, r);
  else
    !e.json && !rr.call(r, s) && rr.call(t, s) && (e.line = a || e.line, e.lineStart = n || e.lineStart, e.position = l || e.position, K(e, "duplicated mapping key")), En(t, s, o), delete r[s];
  return t;
}
p(gr, "storeMappingPair");
function mo(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : K(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
p(mo, "readLineBreak");
function _t(e, t, r) {
  for (var i = 0, s = e.input.charCodeAt(e.position); s !== 0; ) {
    for (; tr(s); )
      s === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), s = e.input.charCodeAt(++e.position);
    if (t && s === 35)
      do
        s = e.input.charCodeAt(++e.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (xe(s))
      for (mo(e), s = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; s === 32; )
        e.lineIndent++, s = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && Oi(e, "deficient indentation"), i;
}
p(_t, "skipSeparationSpace");
function Gi(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Xt(r)));
}
p(Gi, "testDocumentSeparator");
function yo(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += $t.repeat(`
`, t - 1));
}
p(yo, "writeFoldedLines");
function Ud(e, t, r) {
  var i, s, o, a, n, l, c, h, u = e.kind, f = e.result, d;
  if (d = e.input.charCodeAt(e.position), Xt(d) || pr(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (s = e.input.charCodeAt(e.position + 1), Xt(s) || r && pr(s)))
    return !1;
  for (e.kind = "scalar", e.result = "", o = a = e.position, n = !1; d !== 0; ) {
    if (d === 58) {
      if (s = e.input.charCodeAt(e.position + 1), Xt(s) || r && pr(s))
        break;
    } else if (d === 35) {
      if (i = e.input.charCodeAt(e.position - 1), Xt(i))
        break;
    } else {
      if (e.position === e.lineStart && Gi(e) || r && pr(d))
        break;
      if (xe(d))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, _t(e, !1, -1), e.lineIndent >= t) {
          n = !0, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = a, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    n && (ze(e, o, a, !1), yo(e, e.line - l), o = a = e.position, n = !1), tr(d) || (a = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return ze(e, o, a, !1), e.result ? !0 : (e.kind = u, e.result = f, !1);
}
p(Ud, "readPlainScalar");
function Yd(e, t) {
  var r, i, s;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = s = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (ze(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, s = e.position;
      else
        return !0;
    else xe(r) ? (ze(e, i, s, !0), yo(e, _t(e, !1, t)), i = s = e.position) : e.position === e.lineStart && Gi(e) ? K(e, "unexpected end of the document within a single quoted scalar") : (e.position++, s = e.position);
  K(e, "unexpected end of the stream within a single quoted scalar");
}
p(Yd, "readSingleQuotedScalar");
function Gd(e, t) {
  var r, i, s, o, a, n;
  if (n = e.input.charCodeAt(e.position), n !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (n = e.input.charCodeAt(e.position)) !== 0; ) {
    if (n === 34)
      return ze(e, r, e.position, !0), e.position++, !0;
    if (n === 92) {
      if (ze(e, r, e.position, !0), n = e.input.charCodeAt(++e.position), xe(n))
        _t(e, !1, t);
      else if (n < 256 && Wd[n])
        e.result += zd[n], e.position++;
      else if ((a = Pd(n)) > 0) {
        for (s = a, o = 0; s > 0; s--)
          n = e.input.charCodeAt(++e.position), (a = Rd(n)) >= 0 ? o = (o << 4) + a : K(e, "expected hexadecimal character");
        e.result += qd(o), e.position++;
      } else
        K(e, "unknown escape sequence");
      r = i = e.position;
    } else xe(n) ? (ze(e, r, i, !0), yo(e, _t(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Gi(e) ? K(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  K(e, "unexpected end of the stream within a double quoted scalar");
}
p(Gd, "readDoubleQuotedScalar");
function jd(e, t) {
  var r = !0, i, s, o, a = e.tag, n, l = e.anchor, c, h, u, f, d, g = /* @__PURE__ */ Object.create(null), m, y, C, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, d = !1, n = [];
  else if (b === 123)
    h = 125, d = !0, n = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = n), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (_t(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = a, e.anchor = l, e.kind = d ? "mapping" : "sequence", e.result = n, !0;
    r ? b === 44 && K(e, "expected the node content, but found ','") : K(e, "missed comma between flow collection entries"), y = m = C = null, u = f = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), Xt(c) && (u = f = !0, e.position++, _t(e, !0, t))), i = e.line, s = e.lineStart, o = e.position, br(e, t, Us, !1, !0), y = e.tag, m = e.result, _t(e, !0, t), b = e.input.charCodeAt(e.position), (f || e.line === i) && b === 58 && (u = !0, b = e.input.charCodeAt(++e.position), _t(e, !0, t), br(e, t, Us, !1, !0), C = e.result), d ? gr(e, n, g, y, m, C, i, s, o) : u ? n.push(gr(e, null, g, y, m, C, i, s, o)) : n.push(m), _t(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  K(e, "unexpected end of the stream within a flow collection");
}
p(jd, "readFlowCollection");
function Xd(e, t) {
  var r, i, s = Ko, o = !1, a = !1, n = t, l = 0, c = !1, h, u;
  if (u = e.input.charCodeAt(e.position), u === 124)
    i = !1;
  else if (u === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; u !== 0; )
    if (u = e.input.charCodeAt(++e.position), u === 43 || u === 45)
      Ko === s ? s = u === 43 ? vh : Sk : K(e, "repeat of a chomping mode identifier");
    else if ((h = Nd(u)) >= 0)
      h === 0 ? K(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? K(e, "repeat of an indentation width identifier") : (n = t + h - 1, a = !0);
    else
      break;
  if (tr(u)) {
    do
      u = e.input.charCodeAt(++e.position);
    while (tr(u));
    if (u === 35)
      do
        u = e.input.charCodeAt(++e.position);
      while (!xe(u) && u !== 0);
  }
  for (; u !== 0; ) {
    for (mo(e), e.lineIndent = 0, u = e.input.charCodeAt(e.position); (!a || e.lineIndent < n) && u === 32; )
      e.lineIndent++, u = e.input.charCodeAt(++e.position);
    if (!a && e.lineIndent > n && (n = e.lineIndent), xe(u)) {
      l++;
      continue;
    }
    if (e.lineIndent < n) {
      s === vh ? e.result += $t.repeat(`
`, o ? 1 + l : l) : s === Ko && o && (e.result += `
`);
      break;
    }
    for (i ? tr(u) ? (c = !0, e.result += $t.repeat(`
`, o ? 1 + l : l)) : c ? (c = !1, e.result += $t.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += $t.repeat(`
`, l) : e.result += $t.repeat(`
`, o ? 1 + l : l), o = !0, a = !0, l = 0, r = e.position; !xe(u) && u !== 0; )
      u = e.input.charCodeAt(++e.position);
    ze(e, r, e.position, !1);
  }
  return !0;
}
p(Xd, "readBlockScalar");
function Ea(e, t) {
  var r, i = e.tag, s = e.anchor, o = [], a, n = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, K(e, "tab characters must not be used in indentation")), !(l !== 45 || (a = e.input.charCodeAt(e.position + 1), !Xt(a)))); ) {
    if (n = !0, e.position++, _t(e, !0, -1) && e.lineIndent <= t) {
      o.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, br(e, t, Id, !1, !0), o.push(e.result), _t(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      K(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return n ? (e.tag = i, e.anchor = s, e.kind = "sequence", e.result = o, !0) : !1;
}
p(Ea, "readBlockSequence");
function Vd(e, t, r) {
  var i, s, o, a, n, l, c = e.tag, h = e.anchor, u = {}, f = /* @__PURE__ */ Object.create(null), d = null, g = null, m = null, y = !1, C = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = u), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, K(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), o = e.line, (b === 63 || b === 58) && Xt(i))
      b === 63 ? (y && (gr(e, u, f, d, g, null, a, n, l), d = g = m = null), C = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : K(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (a = e.line, n = e.lineStart, l = e.position, !br(e, r, $d, !1, !0))
        break;
      if (e.line === o) {
        for (b = e.input.charCodeAt(e.position); tr(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), Xt(b) || K(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (gr(e, u, f, d, g, null, a, n, l), d = g = m = null), C = !0, y = !1, s = !1, d = e.tag, g = e.result;
        else if (C)
          K(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (C)
        K(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === o || e.lineIndent > t) && (y && (a = e.line, n = e.lineStart, l = e.position), br(e, t, Ys, !0, s) && (y ? g = e.result : m = e.result), y || (gr(e, u, f, d, g, m, a, n, l), d = g = m = null), _t(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && b !== 0)
      K(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && gr(e, u, f, d, g, null, a, n, l), C && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = u), C;
}
p(Vd, "readBlockMapping");
function Zd(e) {
  var t, r = !1, i = !1, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 33) return !1;
  if (e.tag !== null && K(e, "duplication of a tag property"), a = e.input.charCodeAt(++e.position), a === 60 ? (r = !0, a = e.input.charCodeAt(++e.position)) : a === 33 ? (i = !0, s = "!!", a = e.input.charCodeAt(++e.position)) : s = "!", t = e.position, r) {
    do
      a = e.input.charCodeAt(++e.position);
    while (a !== 0 && a !== 62);
    e.position < e.length ? (o = e.input.slice(t, e.position), a = e.input.charCodeAt(++e.position)) : K(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !Xt(a); )
      a === 33 && (i ? K(e, "tag suffix cannot contain exclamation marks") : (s = e.input.slice(t - 1, e.position + 1), Od.test(s) || K(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), a = e.input.charCodeAt(++e.position);
    o = e.input.slice(t, e.position), Bk.test(o) && K(e, "tag suffix cannot contain flow indicator characters");
  }
  o && !Dd.test(o) && K(e, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    K(e, "tag name is malformed: " + o);
  }
  return r ? e.tag = o : rr.call(e.tagMap, s) ? e.tag = e.tagMap[s] + o : s === "!" ? e.tag = "!" + o : s === "!!" ? e.tag = "tag:yaml.org,2002:" + o : K(e, 'undeclared tag handle "' + s + '"'), !0;
}
p(Zd, "readTagProperty");
function Kd(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && K(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Xt(r) && !pr(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && K(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
p(Kd, "readAnchorProperty");
function Qd(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Xt(i) && !pr(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && K(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), rr.call(e.anchorMap, r) || K(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], _t(e, !0, -1), !0;
}
p(Qd, "readAlias");
function br(e, t, r, i, s) {
  var o, a, n, l = 1, c = !1, h = !1, u, f, d, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = a = n = Ys === r || Id === r, i && _t(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; Zd(e) || Kd(e); )
      _t(e, !0, -1) ? (c = !0, n = o, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : n = !1;
  if (n && (n = c || s), (l === 1 || Ys === r) && (Us === r || $d === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? n && (Ea(e, y) || Vd(e, y, m)) || jd(e, m) ? h = !0 : (a && Xd(e, m) || Yd(e, m) || Gd(e, m) ? h = !0 : Qd(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && K(e, "alias node should not have any properties")) : Ud(e, m, Us === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = n && Ea(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && K(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), u = 0, f = e.implicitTypes.length; u < f; u += 1)
      if (g = e.implicitTypes[u], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (rr.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, d = e.typeMap.multi[e.kind || "fallback"], u = 0, f = d.length; u < f; u += 1)
        if (e.tag.slice(0, d[u].tag.length) === d[u].tag) {
          g = d[u];
          break;
        }
    g || K(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && K(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : K(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
p(br, "composeNode");
function Jd(e) {
  var t = e.position, r, i, s, o = !1, a;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (a = e.input.charCodeAt(e.position)) !== 0 && (_t(e, !0, -1), a = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || a !== 37)); ) {
    for (o = !0, a = e.input.charCodeAt(++e.position), r = e.position; a !== 0 && !Xt(a); )
      a = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), s = [], i.length < 1 && K(e, "directive name must not be less than one character in length"); a !== 0; ) {
      for (; tr(a); )
        a = e.input.charCodeAt(++e.position);
      if (a === 35) {
        do
          a = e.input.charCodeAt(++e.position);
        while (a !== 0 && !xe(a));
        break;
      }
      if (xe(a)) break;
      for (r = e.position; a !== 0 && !Xt(a); )
        a = e.input.charCodeAt(++e.position);
      s.push(e.input.slice(r, e.position));
    }
    a !== 0 && mo(e), rr.call(Bh, i) ? Bh[i](e, i, s) : Oi(e, 'unknown document directive "' + i + '"');
  }
  if (_t(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, _t(e, !0, -1)) : o && K(e, "directives end mark is expected"), br(e, e.lineIndent - 1, Ys, !1, !0), _t(e, !0, -1), e.checkLineBreaks && vk.test(e.input.slice(t, e.position)) && Oi(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Gi(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, _t(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    K(e, "end of the stream or a document separator is expected");
  else
    return;
}
p(Jd, "readDocument");
function $n(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Hd(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, K(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Jd(r);
  return r.documents;
}
p($n, "loadDocuments");
function Lk(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = $n(e, r);
  if (typeof t != "function")
    return i;
  for (var s = 0, o = i.length; s < o; s += 1)
    t(i[s]);
}
p(Lk, "loadAll$1");
function tf(e, t) {
  var r = $n(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new re("expected a single document in the stream, but found more");
  }
}
p(tf, "load$1");
var Fk = tf, Ak = {
  load: Fk
}, ef = Object.prototype.toString, rf = Object.prototype.hasOwnProperty, In = 65279, Ek = 9, Di = 10, Mk = 13, $k = 32, Ik = 33, Ok = 34, Ma = 35, Dk = 37, Rk = 38, Pk = 39, Nk = 42, sf = 44, qk = 45, Gs = 58, Wk = 61, zk = 62, Hk = 63, Uk = 64, of = 91, af = 93, Yk = 96, nf = 123, Gk = 124, lf = 125, Ut = {};
Ut[0] = "\\0";
Ut[7] = "\\a";
Ut[8] = "\\b";
Ut[9] = "\\t";
Ut[10] = "\\n";
Ut[11] = "\\v";
Ut[12] = "\\f";
Ut[13] = "\\r";
Ut[27] = "\\e";
Ut[34] = '\\"';
Ut[92] = "\\\\";
Ut[133] = "\\N";
Ut[160] = "\\_";
Ut[8232] = "\\L";
Ut[8233] = "\\P";
var jk = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], Xk = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function hf(e, t) {
  var r, i, s, o, a, n, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), s = 0, o = i.length; s < o; s += 1)
    a = i[s], n = String(t[a]), a.slice(0, 2) === "!!" && (a = "tag:yaml.org,2002:" + a.slice(2)), l = e.compiledTypeMap.fallback[a], l && rf.call(l.styleAliases, n) && (n = l.styleAliases[n]), r[a] = n;
  return r;
}
p(hf, "compileStyleMap");
function cf(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new re("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + $t.repeat("0", i - t.length) + t;
}
p(cf, "encodeHex");
var Vk = 1, Ri = 2;
function uf(e) {
  this.schema = e.schema || Md, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = $t.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = hf(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Ri : Vk, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
p(uf, "State");
function $a(e, t) {
  for (var r = $t.repeat(" ", t), i = 0, s = -1, o = "", a, n = e.length; i < n; )
    s = e.indexOf(`
`, i), s === -1 ? (a = e.slice(i), i = n) : (a = e.slice(i, s + 1), i = s + 1), a.length && a !== `
` && (o += r), o += a;
  return o;
}
p($a, "indentString");
function js(e, t) {
  return `
` + $t.repeat(" ", e.indent * t);
}
p(js, "generateNextLine");
function df(e, t) {
  var r, i, s;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (s = e.implicitTypes[r], s.resolve(t))
      return !0;
  return !1;
}
p(df, "testImplicitResolving");
function Pi(e) {
  return e === $k || e === Ek;
}
p(Pi, "isWhitespace");
function Vr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== In || 65536 <= e && e <= 1114111;
}
p(Vr, "isPrintable");
function Ia(e) {
  return Vr(e) && e !== In && e !== Mk && e !== Di;
}
p(Ia, "isNsCharOrWhitespace");
function Oa(e, t, r) {
  var i = Ia(e), s = i && !Pi(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== sf && e !== of && e !== af && e !== nf && e !== lf) && e !== Ma && !(t === Gs && !s) || Ia(t) && !Pi(t) && e === Ma || t === Gs && s
  );
}
p(Oa, "isPlainSafe");
function ff(e) {
  return Vr(e) && e !== In && !Pi(e) && e !== qk && e !== Hk && e !== Gs && e !== sf && e !== of && e !== af && e !== nf && e !== lf && e !== Ma && e !== Rk && e !== Nk && e !== Ik && e !== Gk && e !== Wk && e !== zk && e !== Pk && e !== Ok && e !== Dk && e !== Uk && e !== Yk;
}
p(ff, "isPlainSafeFirst");
function pf(e) {
  return !Pi(e) && e !== Gs;
}
p(pf, "isPlainSafeLast");
function Nr(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
p(Nr, "codePointAt");
function On(e) {
  var t = /^\n* /;
  return t.test(e);
}
p(On, "needIndentIndicator");
var gf = 1, Da = 2, mf = 3, yf = 4, Or = 5;
function Cf(e, t, r, i, s, o, a, n) {
  var l, c = 0, h = null, u = !1, f = !1, d = i !== -1, g = -1, m = ff(Nr(e, 0)) && pf(Nr(e, e.length - 1));
  if (t || a)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = Nr(e, l), !Vr(c))
        return Or;
      m = m && Oa(c, h, n), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = Nr(e, l), c === Di)
        u = !0, d && (f = f || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!Vr(c))
        return Or;
      m = m && Oa(c, h, n), h = c;
    }
    f = f || d && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !u && !f ? m && !a && !s(e) ? gf : o === Ri ? Or : Da : r > 9 && On(e) ? Or : a ? o === Ri ? Or : Da : f ? yf : mf;
}
p(Cf, "chooseScalarStyle");
function xf(e, t, r, i, s) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === Ri ? '""' : "''";
    if (!e.noCompatMode && (jk.indexOf(t) !== -1 || Xk.test(t)))
      return e.quotingType === Ri ? '"' + t + '"' : "'" + t + "'";
    var o = e.indent * Math.max(1, r), a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), n = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return df(e, c);
    }
    switch (p(l, "testAmbiguity"), Cf(
      t,
      n,
      e.indent,
      a,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      s
    )) {
      case gf:
        return t;
      case Da:
        return "'" + t.replace(/'/g, "''") + "'";
      case mf:
        return "|" + Ra(t, e.indent) + Pa($a(t, o));
      case yf:
        return ">" + Ra(t, e.indent) + Pa($a(bf(t, a), o));
      case Or:
        return '"' + kf(t) + '"';
      default:
        throw new re("impossible error: invalid scalar style");
    }
  })();
}
p(xf, "writeScalar");
function Ra(e, t) {
  var r = On(e) ? String(t) : "", i = e[e.length - 1] === `
`, s = i && (e[e.length - 2] === `
` || e === `
`), o = s ? "+" : i ? "" : "-";
  return r + o + `
`;
}
p(Ra, "blockHeader");
function Pa(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
p(Pa, "dropEndingNewline");
function bf(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Na(e.slice(0, c), t);
  })(), s = e[0] === `
` || e[0] === " ", o, a; a = r.exec(e); ) {
    var n = a[1], l = a[2];
    o = l[0] === " ", i += n + (!s && !o && l !== "" ? `
` : "") + Na(l, t), s = o;
  }
  return i;
}
p(bf, "foldString");
function Na(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, s = 0, o, a = 0, n = 0, l = ""; i = r.exec(e); )
    n = i.index, n - s > t && (o = a > s ? a : n, l += `
` + e.slice(s, o), s = o + 1), a = n;
  return l += `
`, e.length - s > t && a > s ? l += e.slice(s, a) + `
` + e.slice(a + 1) : l += e.slice(s), l.slice(1);
}
p(Na, "foldLine");
function kf(e) {
  for (var t = "", r = 0, i, s = 0; s < e.length; r >= 65536 ? s += 2 : s++)
    r = Nr(e, s), i = Ut[r], !i && Vr(r) ? (t += e[s], r >= 65536 && (t += e[s + 1])) : t += i || cf(r);
  return t;
}
p(kf, "escapeString");
function Tf(e, t, r) {
  var i = "", s = e.tag, o, a, n;
  for (o = 0, a = r.length; o < a; o += 1)
    n = r[o], e.replacer && (n = e.replacer.call(r, String(o), n)), (Ee(e, t, n, !1, !1) || typeof n > "u" && Ee(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = s, e.dump = "[" + i + "]";
}
p(Tf, "writeFlowSequence");
function qa(e, t, r, i) {
  var s = "", o = e.tag, a, n, l;
  for (a = 0, n = r.length; a < n; a += 1)
    l = r[a], e.replacer && (l = e.replacer.call(r, String(a), l)), (Ee(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && Ee(e, t + 1, null, !0, !0, !1, !0)) && ((!i || s !== "") && (s += js(e, t)), e.dump && Di === e.dump.charCodeAt(0) ? s += "-" : s += "- ", s += e.dump);
  e.tag = o, e.dump = s || "[]";
}
p(qa, "writeBlockSequence");
function wf(e, t, r) {
  var i = "", s = e.tag, o = Object.keys(r), a, n, l, c, h;
  for (a = 0, n = o.length; a < n; a += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = o[a], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), Ee(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Ee(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = s, e.dump = "{" + i + "}";
}
p(wf, "writeFlowMapping");
function Sf(e, t, r, i) {
  var s = "", o = e.tag, a = Object.keys(r), n, l, c, h, u, f;
  if (e.sortKeys === !0)
    a.sort();
  else if (typeof e.sortKeys == "function")
    a.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new re("sortKeys must be a boolean or a function");
  for (n = 0, l = a.length; n < l; n += 1)
    f = "", (!i || s !== "") && (f += js(e, t)), c = a[n], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), Ee(e, t + 1, c, !0, !0, !0) && (u = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, u && (e.dump && Di === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, u && (f += js(e, t)), Ee(e, t + 1, h, !0, u) && (e.dump && Di === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, s += f));
  e.tag = o, e.dump = s || "{}";
}
p(Sf, "writeBlockMapping");
function Wa(e, t, r) {
  var i, s, o, a, n, l;
  for (s = r ? e.explicitTypes : e.implicitTypes, o = 0, a = s.length; o < a; o += 1)
    if (n = s[o], (n.instanceOf || n.predicate) && (!n.instanceOf || typeof t == "object" && t instanceof n.instanceOf) && (!n.predicate || n.predicate(t))) {
      if (r ? n.multi && n.representName ? e.tag = n.representName(t) : e.tag = n.tag : e.tag = "?", n.represent) {
        if (l = e.styleMap[n.tag] || n.defaultStyle, ef.call(n.represent) === "[object Function]")
          i = n.represent(t, l);
        else if (rf.call(n.represent, l))
          i = n.represent[l](t, l);
        else
          throw new re("!<" + n.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
p(Wa, "detectType");
function Ee(e, t, r, i, s, o, a) {
  e.tag = null, e.dump = r, Wa(e, r, !1) || Wa(e, r, !0);
  var n = ef.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = n === "[object Object]" || n === "[object Array]", u, f;
  if (h && (u = e.duplicates.indexOf(r), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (s = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (h && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), n === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (Sf(e, t, e.dump, s), f && (e.dump = "&ref_" + u + e.dump)) : (wf(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (n === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !a && t > 0 ? qa(e, t - 1, e.dump, s) : qa(e, t, e.dump, s), f && (e.dump = "&ref_" + u + e.dump)) : (Tf(e, t, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (n === "[object String]")
      e.tag !== "?" && xf(e, e.dump, t, o, l);
    else {
      if (n === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new re("unacceptable kind of an object to dump " + n);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
p(Ee, "writeNode");
function _f(e, t) {
  var r = [], i = [], s, o;
  for (Xs(e, r, i), s = 0, o = i.length; s < o; s += 1)
    t.duplicates.push(r[i[s]]);
  t.usedDuplicates = new Array(o);
}
p(_f, "getDuplicateReferences");
function Xs(e, t, r) {
  var i, s, o;
  if (e !== null && typeof e == "object")
    if (s = t.indexOf(e), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (t.push(e), Array.isArray(e))
      for (s = 0, o = e.length; s < o; s += 1)
        Xs(e[s], t, r);
    else
      for (i = Object.keys(e), s = 0, o = i.length; s < o; s += 1)
        Xs(e[i[s]], t, r);
}
p(Xs, "inspectNode");
function Zk(e, t) {
  t = t || {};
  var r = new uf(t);
  r.noRefs || _f(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), Ee(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
p(Zk, "dump$1");
function Kk(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
p(Kk, "renamed");
var Qk = gd, Jk = Ak.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
var hi = /* @__PURE__ */ p((e, t) => {
  if (t)
    return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
  const r = e.x ?? 0, i = e.y ?? 0;
  return "translate(" + -(r + e.width / 2) + ", " + -(i + e.height / 2) + ")";
}, "computeLabelTransform"), Wt = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5
  //arrow_cross: 24,
}, Lh = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function ki(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = kt(e), t = kt(t);
  const [r, i] = [e.x, e.y], [s, o] = [t.x, t.y], a = s - r, n = o - i;
  return { angle: Math.atan(n / a), deltaX: a, deltaY: n };
}
p(ki, "calculateDeltaAndAngle");
var kt = /* @__PURE__ */ p((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), t2 = /* @__PURE__ */ p((e) => ({
  x: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = kt(i[0]).x < kt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Wt, e.arrowTypeStart)) {
      const { angle: d, deltaX: g } = ki(i[0], i[1]);
      s = Wt[e.arrowTypeStart] * Math.cos(d) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Wt, e.arrowTypeEnd)) {
      const { angle: d, deltaX: g } = ki(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Wt[e.arrowTypeEnd] * Math.cos(d) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      kt(t).x - kt(i[i.length - 1]).x
    ), n = Math.abs(
      kt(t).y - kt(i[i.length - 1]).y
    ), l = Math.abs(kt(t).x - kt(i[0]).x), c = Math.abs(kt(t).y - kt(i[0]).y), h = Wt[e.arrowTypeStart], u = Wt[e.arrowTypeEnd], f = 1;
    if (a < u && a > 0 && n < u) {
      let d = u + f - a;
      d *= o === "right" ? -1 : 1, s -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= o === "right" ? -1 : 1, s += d;
    }
    return kt(t).x + s;
  }, "x"),
  y: /* @__PURE__ */ p(function(t, r, i) {
    let s = 0;
    const o = kt(i[0]).y < kt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Wt, e.arrowTypeStart)) {
      const { angle: d, deltaY: g } = ki(i[0], i[1]);
      s = Wt[e.arrowTypeStart] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Wt, e.arrowTypeEnd)) {
      const { angle: d, deltaY: g } = ki(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = Wt[e.arrowTypeEnd] * Math.abs(Math.sin(d)) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      kt(t).y - kt(i[i.length - 1]).y
    ), n = Math.abs(
      kt(t).x - kt(i[i.length - 1]).x
    ), l = Math.abs(kt(t).y - kt(i[0]).y), c = Math.abs(kt(t).x - kt(i[0]).x), h = Wt[e.arrowTypeStart], u = Wt[e.arrowTypeEnd], f = 1;
    if (a < u && a > 0 && n < u) {
      let d = u + f - a;
      d *= o === "up" ? -1 : 1, s -= d;
    }
    if (l < h && l > 0 && c < h) {
      let d = h + f - l;
      d *= o === "up" ? -1 : 1, s += d;
    }
    return kt(t).y + s;
  }, "y")
}), "getLineFunctionsWithOffset"), ci = {}, Et = {}, Fh;
function e2() {
  return Fh || (Fh = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.BLANK_URL = Et.relativeFirstCharacters = Et.whitespaceEscapeCharsRegex = Et.urlSchemeRegex = Et.ctrlCharactersRegex = Et.htmlCtrlEntityRegex = Et.htmlEntitiesRegex = Et.invalidProtocolRegex = void 0, Et.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Et.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Et.htmlCtrlEntityRegex = /&(newline|tab);/gi, Et.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Et.urlSchemeRegex = /^.+(:|&colon;)/gim, Et.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Et.relativeFirstCharacters = [".", "/"], Et.BLANK_URL = "about:blank"), Et;
}
var Ah;
function r2() {
  if (Ah) return ci;
  Ah = 1, Object.defineProperty(ci, "__esModule", { value: !0 }), ci.sanitizeUrl = void 0;
  var e = e2();
  function t(a) {
    return e.relativeFirstCharacters.indexOf(a[0]) > -1;
  }
  function r(a) {
    var n = a.replace(e.ctrlCharactersRegex, "");
    return n.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(a) {
    return URL.canParse(a);
  }
  function s(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function o(a) {
    if (!a)
      return e.BLANK_URL;
    var n, l = s(a.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = s(l), n = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (n && n.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), u = h.match(e.urlSchemeRegex);
    if (!u)
      return c;
    var f = u[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var d = h.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return d;
    if (f === "http:" || f === "https:") {
      if (!i(d))
        return e.BLANK_URL;
      var g = new URL(d);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return d;
  }
  return ci.sanitizeUrl = o, ci;
}
var i2 = r2();
function Qo(e) {
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    const r = e[Symbol.toStringTag];
    return r == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${r}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function s2() {
}
function vf(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Dn(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const o2 = "[object RegExp]", Bf = "[object String]", Lf = "[object Number]", Ff = "[object Boolean]", Af = "[object Arguments]", a2 = "[object Symbol]", n2 = "[object Date]", l2 = "[object Map]", h2 = "[object Set]", c2 = "[object Array]", u2 = "[object ArrayBuffer]", d2 = "[object Object]", f2 = "[object DataView]", p2 = "[object Uint8Array]", g2 = "[object Uint8ClampedArray]", m2 = "[object Uint16Array]", y2 = "[object Uint32Array]", C2 = "[object Int8Array]", x2 = "[object Int16Array]", b2 = "[object Int32Array]", k2 = "[object Float32Array]", T2 = "[object Float64Array]", Eh = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function Rn(e) {
  return typeof Eh.Buffer < "u" && Eh.Buffer.isBuffer(e);
}
function w2(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function Ef(e) {
  return e != null && typeof e != "function" && w2(e.length);
}
function S2(e) {
  return e === "__proto__";
}
function Pn(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Nn(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _2(e, t) {
  return qr(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function qr(e, t, r, i = /* @__PURE__ */ new Map(), s = void 0) {
  const o = s?.(e, t, r, i);
  if (o !== void 0) return o;
  if (Pn(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const a = new Array(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = qr(e[n], n, r, i, s);
    return Object.hasOwn(e, "index") && (a.index = e.index), Object.hasOwn(e, "input") && (a.input = e.input), a;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    const a = new RegExp(e.source, e.flags);
    return a.lastIndex = e.lastIndex, a;
  }
  if (e instanceof Map) {
    const a = /* @__PURE__ */ new Map();
    i.set(e, a);
    for (const [n, l] of e) a.set(n, qr(l, n, r, i, s));
    return a;
  }
  if (e instanceof Set) {
    const a = /* @__PURE__ */ new Set();
    i.set(e, a);
    for (const n of e) a.add(qr(n, void 0, r, i, s));
    return a;
  }
  if (Rn(e)) return e.subarray();
  if (Nn(e)) {
    const a = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = qr(e[n], n, r, i, s);
    return a;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const a = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (typeof File < "u" && e instanceof File) {
    const a = new File([e], e.name, { type: e.type });
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const a = new Blob([e], { type: e.type });
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (e instanceof Error) {
    const a = structuredClone(e);
    return i.set(e, a), a.message = e.message, a.name = e.name, a.stack = e.stack, a.cause = e.cause, a.constructor = e.constructor, pe(a, e, r, i, s), a;
  }
  if (e instanceof Boolean) {
    const a = new Boolean(e.valueOf());
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (e instanceof Number) {
    const a = new Number(e.valueOf());
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (e instanceof String) {
    const a = new String(e.valueOf());
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  if (typeof e == "object" && v2(e)) {
    const a = Object.create(Object.getPrototypeOf(e));
    return i.set(e, a), pe(a, e, r, i, s), a;
  }
  return e;
}
function pe(e, t, r = e, i, s) {
  const o = [...Object.keys(t), ...vf(t)];
  for (let a = 0; a < o.length; a++) {
    const n = o[a], l = Object.getOwnPropertyDescriptor(e, n);
    (l == null || l.writable) && (e[n] = qr(t[n], n, r, i, s));
  }
}
function v2(e) {
  switch (Dn(e)) {
    case Af:
    case c2:
    case u2:
    case f2:
    case Ff:
    case n2:
    case k2:
    case T2:
    case C2:
    case x2:
    case b2:
    case l2:
    case Lf:
    case d2:
    case o2:
    case h2:
    case Bf:
    case a2:
    case p2:
    case g2:
    case m2:
    case y2:
      return !0;
    default:
      return !1;
  }
}
function B2(e, t) {
  return _2(e, (r, i, s, o) => {
    if (typeof e == "object") {
      if (Dn(e) === "[object Object]" && typeof e.constructor != "function") {
        const a = {};
        return o.set(e, a), pe(a, e, s, o), a;
      }
      switch (Object.prototype.toString.call(e)) {
        case Lf:
        case Bf:
        case Ff: {
          const a = new e.constructor(e?.valueOf());
          return pe(a, e), a;
        }
        case Af: {
          const a = {};
          return pe(a, e), a.length = e.length, a[Symbol.iterator] = e[Symbol.iterator], a;
        }
        default:
          return;
      }
    }
  });
}
function Mh(e) {
  return B2(e);
}
function za(e) {
  return e !== null && typeof e == "object" && Dn(e) === "[object Arguments]";
}
function Ha(e) {
  return typeof e == "object" && e !== null;
}
function L2(e) {
  return Ha(e) && Ef(e);
}
function ji(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  const r = function(...i) {
    const s = t ? t.apply(this, i) : i[0], o = r.cache;
    if (o.has(s)) return o.get(s);
    const a = e.apply(this, i);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (ji.Cache || Map)(), r;
}
ji.Cache = Map;
function Ts(e) {
  return Nn(e);
}
function F2(e) {
  const t = e?.constructor;
  return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function A2(e) {
  if (Pn(e)) return e;
  if (Array.isArray(e) || Nn(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  const t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  const r = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
  if (e instanceof RegExp) {
    const i = new r(e);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof DataView) return new r(e.buffer.slice(0));
  if (e instanceof Error) {
    let i;
    return e instanceof AggregateError ? i = new r(e.errors, e.message, { cause: e.cause }) : i = new r(e.message, { cause: e.cause }), i.stack = e.stack, Object.assign(i, e), i;
  }
  return typeof File < "u" && e instanceof File ? new r([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function E2(e, ...t) {
  const r = t.slice(0, -1), i = t[t.length - 1];
  let s = e;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s = ws(s, a, i, /* @__PURE__ */ new Map());
  }
  return s;
}
function ws(e, t, r, i) {
  if (Pn(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return A2(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let o = 0; o < t.length; o++) t[o] = t[o] ?? void 0;
  }
  const s = [...Object.keys(t), ...vf(t)];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (S2(a)) continue;
    let n = t[a], l = e[a];
    if (za(n) && (n = { ...n }), za(l) && (l = { ...l }), Rn(n) && (n = Mh(n)), Array.isArray(n)) if (Array.isArray(l)) {
      const h = [], u = Reflect.ownKeys(l);
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        h[d] = l[d];
      }
      l = h;
    } else if (L2(l)) {
      const h = [];
      for (let u = 0; u < l.length; u++) h[u] = l[u];
      l = h;
    } else l = [];
    const c = r(l, n, a, e, t, i);
    c !== void 0 ? e[a] = c : Array.isArray(n) || Ha(l) && Ha(n) && (Qo(l) || Qo(n) || Ts(l) || Ts(n)) ? e[a] = ws(l, n, r, i) : l == null && Qo(n) ? e[a] = ws({}, n, r, i) : l == null && Ts(n) ? e[a] = Mh(n) : (l === void 0 || n !== void 0) && (e[a] = n);
  }
  return e;
}
function M2(e, ...t) {
  return E2(e, ...t, s2);
}
function $h(e) {
  if (e == null) return !0;
  if (Ef(e))
    return typeof e.splice != "function" && typeof e != "string" && !Rn(e) && !Ts(e) && !za(e) ? !1 : e.length === 0;
  if (typeof e == "object" || typeof e == "function") {
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    const t = Object.keys(e);
    return F2(e) ? t.filter((r) => r !== "constructor").length === 0 : t.length === 0;
  }
  return !0;
}
var $2 = "​", I2 = {
  curveBasis: va,
  curveBasisClosed: P1,
  curveBasisOpen: N1,
  curveBumpX: Su,
  curveBumpY: _u,
  curveBundle: q1,
  curveCardinalClosed: W1,
  curveCardinalOpen: z1,
  curveCardinal: Fu,
  curveCatmullRomClosed: H1,
  curveCatmullRomOpen: U1,
  curveCatmullRom: Eu,
  curveLinear: Li,
  curveLinearClosed: Y1,
  curveMonotoneX: Ru,
  curveMonotoneY: Pu,
  curveNatural: qu,
  curveStep: Wu,
  curveStepAfter: Hu,
  curveStepBefore: zu
}, O2 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, D2 = /* @__PURE__ */ p(function(e, t) {
  const r = Mf(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((n) => n.args);
    Fs(a), i = Mt(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let s = cn(e, t);
  const o = "config";
  return i[o] !== void 0 && (s === "flowchart-v2" && (s = "flowchart"), i[s] = i[o], delete i[o]), i;
}, "detectInit"), Mf = /* @__PURE__ */ p(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${O2.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), P.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const s = [];
    for (; (i = vi.exec(e)) !== null; )
      if (i.index === vi.lastIndex && vi.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const o = i[1] ? i[1] : i[2], a = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        s.push({ type: o, args: a });
      }
    return s.length === 0 ? { type: e, args: null } : s.length === 1 ? s[0] : s;
  } catch (r) {
    return P.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), R2 = /* @__PURE__ */ p(function(e) {
  return e.replace(vi, "");
}, "removeDirectives"), P2 = /* @__PURE__ */ p(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function qn(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return I2[r] ?? t;
}
p(qn, "interpolateToCurve");
function $f(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? i2.sanitizeUrl(r) : r;
}
p($f, "formatUrl");
var N2 = /* @__PURE__ */ p((e, ...t) => {
  const r = e.split("."), i = r.length - 1, s = r[i];
  let o = window;
  for (let a = 0; a < i; a++)
    if (o = o[r[a]], !o) {
      P.error(`Function name: ${e} not found in window`);
      return;
    }
  o[s](...t);
}, "runFunc");
function Wn(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
p(Wn, "distance");
function If(e) {
  let t, r = 0;
  e.forEach((s) => {
    r += Wn(s, t), t = s;
  });
  const i = r / 2;
  return zn(e, i);
}
p(If, "traverseEdge");
function Of(e) {
  return e.length === 1 ? e[0] : If(e);
}
p(Of, "calcLabelPosition");
var Ih = /* @__PURE__ */ p((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), zn = /* @__PURE__ */ p((e, t) => {
  let r, i = t;
  for (const s of e) {
    if (r) {
      const o = Wn(s, r);
      if (o === 0)
        return r;
      if (o < i)
        i -= o;
      else {
        const a = i / o;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: s.x, y: s.y };
        if (a > 0 && a < 1)
          return {
            x: Ih((1 - a) * r.x + a * s.x, 5),
            y: Ih((1 - a) * r.y + a * s.y, 5)
          };
      }
    }
    r = s;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), q2 = /* @__PURE__ */ p((e, t, r) => {
  P.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const s = zn(t, 25), o = e ? 10 : 5, a = Math.atan2(t[0].y - s.y, t[0].x - s.x), n = { x: 0, y: 0 };
  return n.x = Math.sin(a) * o + (t[0].x + s.x) / 2, n.y = -Math.cos(a) * o + (t[0].y + s.y) / 2, n;
}, "calcCardinalityPosition");
function Df(e, t, r) {
  const i = structuredClone(r);
  P.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const s = 25 + e, o = zn(i, s), a = 10 + e * 0.5, n = Math.atan2(i[0].y - o.y, i[0].x - o.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(n + Math.PI) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n + Math.PI) * a + (i[0].y + o.y) / 2) : t === "end_right" ? (l.x = Math.sin(n - Math.PI) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n - Math.PI) * a + (i[0].y + o.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2 - 5) : (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2), l;
}
p(Df, "calcTerminalLabelPosition");
function Rf(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
p(Rf, "getStylesFromArray");
var Oh = 0, W2 = /* @__PURE__ */ p(() => (Oh++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Oh), "generateId");
function Pf(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let s = 0; s < e; s++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
p(Pf, "makeRandomHex");
var z2 = /* @__PURE__ */ p((e) => Pf(e.length), "random"), H2 = /* @__PURE__ */ p(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), U2 = /* @__PURE__ */ p(function(e, t) {
  const r = t.text.replace(Hi.lineBreakRegex, " "), [, i] = Co(t.fontSize), s = e.append("text");
  s.attr("x", t.x), s.attr("y", t.y), s.style("text-anchor", t.anchor), s.style("font-family", t.fontFamily), s.style("font-size", i), s.style("font-weight", t.fontWeight), s.attr("fill", t.fill), t.class !== void 0 && s.attr("class", t.class);
  const o = s.append("tspan");
  return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), s;
}, "drawSimpleText"), Y2 = ji(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Hi.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), s = [];
    let o = "";
    return i.forEach((a, n) => {
      const l = Ue(`${a} `, r), c = Ue(o, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: d } = G2(a, t, "-", r);
        s.push(o, ...f), o = d;
      } else c + l >= t ? (s.push(o), o = a) : o = [o, a].filter(Boolean).join(" ");
      n + 1 === i.length && s.push(o);
    }), s.filter((a) => a !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), G2 = ji(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const s = [...e], o = [];
    let a = "";
    return s.forEach((n, l) => {
      const c = `${a}${n}`;
      if (Ue(c, i) >= t) {
        const u = l + 1, f = s.length === u, d = `${c}${r}`;
        o.push(f ? c : d), a = "";
      } else
        a = c;
    }), { hyphenatedStrings: o, remainingWord: a };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function Nf(e, t) {
  return Hn(e, t).height;
}
p(Nf, "calculateTextHeight");
function Ue(e, t) {
  return Hn(e, t).width;
}
p(Ue, "calculateTextWidth");
var Hn = ji(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: s = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, o] = Co(r), a = ["sans-serif", i], n = e.split(Hi.lineBreakRegex), l = [], c = ct("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of a) {
      let d = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of n) {
        const y = H2();
        y.text = m || $2;
        const C = U2(h, y).style("font-size", o).style("font-weight", s).style("font-family", f), b = (C._groups || C)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), d = Math.round(b.height), g.height += d, g.lineHeight = Math.round(Math.max(g.lineHeight, d));
      }
      l.push(g);
    }
    h.remove();
    const u = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[u];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), j2 = class {
  constructor(e = !1, t) {
    this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
  static {
    p(this, "InitIDGenerator");
  }
}, as, X2 = /* @__PURE__ */ p(function(e) {
  return as = as || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), as.innerHTML = e, unescape(as.textContent);
}, "entityDecode");
function Un(e) {
  return "str" in e;
}
p(Un, "isDetailedError");
var V2 = /* @__PURE__ */ p((e, t, r, i) => {
  if (!i)
    return;
  const s = e.node()?.getBBox();
  s && e.append("text").text(i).attr("text-anchor", "middle").attr("x", s.x + s.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), Co = /* @__PURE__ */ p((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Yn(e, t) {
  return M2({}, e, t);
}
p(Yn, "cleanAndMerge");
var Ce = {
  assignWithDepth: Mt,
  wrapLabel: Y2,
  calculateTextHeight: Nf,
  calculateTextWidth: Ue,
  calculateTextDimensions: Hn,
  cleanAndMerge: Yn,
  detectInit: D2,
  detectDirective: Mf,
  isSubstringInArray: P2,
  interpolateToCurve: qn,
  calcLabelPosition: Of,
  calcCardinalityPosition: q2,
  calcTerminalLabelPosition: Df,
  formatUrl: $f,
  getStylesFromArray: Rf,
  generateId: W2,
  random: z2,
  runFunc: N2,
  entityDecode: X2,
  insertTitle: V2,
  isLabelCoordinateInPath: qf,
  parseFontSize: Co,
  InitIDGenerator: j2
}, Z2 = /* @__PURE__ */ p(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), kr = /* @__PURE__ */ p(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), BL = /* @__PURE__ */ p((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: s
}, o) => o || `${i ? `${i}_` : ""}${e}_${t}_${r}${s ? `_${s}` : ""}`, "getEdgeId");
function Ot(e) {
  return e ?? null;
}
p(Ot, "handleUndefinedAttr");
function qf(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), s = t.replace(
    /(\d+\.\d+)/g,
    (o) => Math.round(parseFloat(o)).toString()
  );
  return s.includes(r.toString()) || s.includes(i.toString());
}
p(qf, "isLabelCoordinateInPath");
var Gn = /* @__PURE__ */ p(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
async function Wf(e, t) {
  const r = e.getElementsByTagName("img");
  if (!r || r.length === 0)
    return;
  const i = t.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...r].map(
      (s) => new Promise((o) => {
        function a() {
          if (s.style.display = "flex", s.style.flexDirection = "column", i) {
            const n = gt().fontSize ? gt().fontSize : window.getComputedStyle(document.body).fontSize, l = 5, [c = Dc.fontSize] = Co(n), h = c * l + "px";
            s.style.minWidth = h, s.style.maxWidth = h;
          } else
            s.style.width = "100%";
          o(s);
        }
        p(a, "setupImage"), setTimeout(() => {
          s.complete && a();
        }), s.addEventListener("error", a), s.addEventListener("load", a);
      })
    )
  );
}
p(Wf, "configureLabelImages");
var K2 = /* @__PURE__ */ p((e) => {
  const { handDrawnSeed: t } = gt();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Qr = /* @__PURE__ */ p((e) => {
  const t = Q2([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), Q2 = /* @__PURE__ */ p((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, s] = r.split(":");
    t.set(i.trim(), s?.trim());
  }), t;
}, "styles2Map"), zf = /* @__PURE__ */ p((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), V = /* @__PURE__ */ p((e) => {
  const { stylesArray: t } = Qr(e), r = [], i = [], s = [], o = [];
  return t.forEach((a) => {
    const n = a[0];
    zf(n) ? r.push(a.join(":") + " !important") : (i.push(a.join(":") + " !important"), n.includes("stroke") && s.push(a.join(":") + " !important"), n === "fill" && o.push(a.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: s,
    backgroundStyles: o
  };
}, "styles2String"), j = /* @__PURE__ */ p((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = gt(), { nodeBorder: s, mainBkg: o } = r, { stylesMap: a } = Qr(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: a.get("fill") || o,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || s,
      seed: i,
      strokeWidth: a.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: J2(a.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), J2 = /* @__PURE__ */ p((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const s = isNaN(t[0]) ? 0 : t[0];
    return [s, s];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray");
const tT = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Vs = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Hf = Object.freeze({
  ...tT,
  ...Vs
}), eT = Object.freeze({
  ...Hf,
  body: "",
  hidden: !1
}), rT = Object.freeze({
  width: null,
  height: null
}), iT = Object.freeze({
  ...rT,
  ...Vs
}), sT = (e, t, r, i = "") => {
  const s = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3) return null;
    i = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length) return null;
  if (s.length > 1) {
    const n = s.pop(), l = s.pop(), c = {
      provider: s.length > 0 ? s[0] : i,
      prefix: l,
      name: n
    };
    return Jo(c) ? c : null;
  }
  const o = s[0], a = o.split("-");
  if (a.length > 1) {
    const n = {
      provider: i,
      prefix: a.shift(),
      name: a.join("-")
    };
    return Jo(n) ? n : null;
  }
  if (r && i === "") {
    const n = {
      provider: i,
      prefix: "",
      name: o
    };
    return Jo(n, r) ? n : null;
  }
  return null;
}, Jo = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function oT(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Dh(e, t) {
  const r = oT(e, t);
  for (const i in eT) i in Vs ? i in e && !(i in r) && (r[i] = Vs[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function aT(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a]) return s[a] = [];
    if (!(a in s)) {
      s[a] = null;
      const n = i[a] && i[a].parent, l = n && o(n);
      l && (s[a] = [n].concat(l));
    }
    return s[a];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(o), s;
}
function Rh(e, t, r) {
  const i = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(n) {
    o = Dh(i[n] || s[n], o);
  }
  return a(t), r.forEach(a), Dh(e, o);
}
function nT(e, t) {
  if (e.icons[t]) return Rh(e, t, []);
  const r = aT(e, [t])[t];
  return r ? Rh(e, t, r) : null;
}
const lT = /(-?[0-9.]*[0-9]+[0-9.]*)/g, hT = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ph(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(lT);
  if (i === null || !i.length) return e;
  const s = [];
  let o = i.shift(), a = hT.test(o);
  for (; ; ) {
    if (a) {
      const n = parseFloat(o);
      isNaN(n) ? s.push(o) : s.push(Math.ceil(n * t * r) / r);
    } else s.push(o);
    if (o = i.shift(), o === void 0) return s.join("");
    a = !a;
  }
}
function cT(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const s = e.indexOf(">", i), o = e.indexOf("</" + t);
    if (s === -1 || o === -1) break;
    const a = e.indexOf(">", o);
    if (a === -1) break;
    r += e.slice(s + 1, o).trim(), e = e.slice(0, i).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function uT(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function dT(e, t, r) {
  const i = cT(e);
  return uT(i.defs, t + i.content + r);
}
const fT = (e) => e === "unset" || e === "undefined" || e === "none";
function pT(e, t) {
  const r = {
    ...Hf,
    ...e
  }, i = {
    ...iT,
    ...t
  }, s = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, i].forEach((m) => {
    const y = [], C = m.hFlip, b = m.vFlip;
    let k = m.rotate;
    C ? b ? k += 2 : (y.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), y.push("scale(-1 1)"), s.top = s.left = 0) : b && (y.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), y.push("scale(1 -1)"), s.top = s.left = 0);
    let w;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        w = s.height / 2 + s.top, y.unshift("rotate(90 " + w.toString() + " " + w.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
        break;
      case 3:
        w = s.width / 2 + s.left, y.unshift("rotate(-90 " + w.toString() + " " + w.toString() + ")");
        break;
    }
    k % 2 === 1 && (s.left !== s.top && (w = s.left, s.left = s.top, s.top = w), s.width !== s.height && (w = s.width, s.width = s.height, s.height = w)), y.length && (o = dT(o, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const a = i.width, n = i.height, l = s.width, c = s.height;
  let h, u;
  a === null ? (u = n === null ? "1em" : n === "auto" ? c : n, h = Ph(u, l / c)) : (h = a === "auto" ? l : a, u = n === null ? Ph(h, c / l) : n === "auto" ? c : n);
  const f = {}, d = (m, y) => {
    fT(y) || (f[m] = y.toString());
  };
  d("width", h), d("height", u);
  const g = [
    s.left,
    s.top,
    l,
    c
  ];
  return f.viewBox = g.join(" "), {
    attributes: f,
    viewBox: g,
    body: o
  };
}
const gT = /\sid="(\S+)"/g, Nh = /* @__PURE__ */ new Map();
function mT(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = Nh.get(e) || 0;
  return Nh.set(e, t + 1), t ? `${e}${t}` : e;
}
function yT(e) {
  const t = [];
  let r;
  for (; r = gT.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const o = mT(s), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + o + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function CT(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function jn() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Sr = jn();
function Uf(e) {
  Sr = e;
}
var Fi = { exec: () => null };
function mt(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(Vt.caret, "$1"), r = r.replace(s, a), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var xT = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Vt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, bT = /^(?:[ \t]*(?:\n|$))+/, kT = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, TT = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Xi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wT = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Xn = /(?:[*+-]|\d{1,9}[.)])/, Yf = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Gf = mt(Yf).replace(/bull/g, Xn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ST = mt(Yf).replace(/bull/g, Xn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Vn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _T = /^[^\n]+/, Zn = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, vT = mt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Zn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), BT = mt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Xn).getRegex(), xo = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Kn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, LT = mt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Kn).replace("tag", xo).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), jf = mt(Vn).replace("hr", Xi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xo).getRegex(), FT = mt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", jf).getRegex(), Qn = { blockquote: FT, code: kT, def: vT, fences: TT, heading: wT, hr: Xi, html: LT, lheading: Gf, list: BT, newline: bT, paragraph: jf, table: Fi, text: _T }, qh = mt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Xi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xo).getRegex(), AT = { ...Qn, lheading: ST, table: qh, paragraph: mt(Vn).replace("hr", Xi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", qh).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", xo).getRegex() }, ET = { ...Qn, html: mt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Kn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Fi, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: mt(Vn).replace("hr", Xi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Gf).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, MT = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, $T = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Xf = /^( {2,}|\\)\n(?!\s*$)/, IT = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, bo = /[\p{P}\p{S}]/u, Jn = /[\s\p{P}\p{S}]/u, Vf = /[^\s\p{P}\p{S}]/u, OT = mt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Jn).getRegex(), Zf = /(?!~)[\p{P}\p{S}]/u, DT = /(?!~)[\s\p{P}\p{S}]/u, RT = /(?:[^\s\p{P}\p{S}]|~)/u, PT = mt(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", xT ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Kf = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, NT = mt(Kf, "u").replace(/punct/g, bo).getRegex(), qT = mt(Kf, "u").replace(/punct/g, Zf).getRegex(), Qf = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", WT = mt(Qf, "gu").replace(/notPunctSpace/g, Vf).replace(/punctSpace/g, Jn).replace(/punct/g, bo).getRegex(), zT = mt(Qf, "gu").replace(/notPunctSpace/g, RT).replace(/punctSpace/g, DT).replace(/punct/g, Zf).getRegex(), HT = mt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Vf).replace(/punctSpace/g, Jn).replace(/punct/g, bo).getRegex(), UT = mt(/\\(punct)/, "gu").replace(/punct/g, bo).getRegex(), YT = mt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), GT = mt(Kn).replace("(?:-->|$)", "-->").getRegex(), jT = mt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", GT).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Zs = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, XT = mt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Zs).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Jf = mt(/^!?\[(label)\]\[(ref)\]/).replace("label", Zs).replace("ref", Zn).getRegex(), tp = mt(/^!?\[(ref)\](?:\[\])?/).replace("ref", Zn).getRegex(), VT = mt("reflink|nolink(?!\\()", "g").replace("reflink", Jf).replace("nolink", tp).getRegex(), Wh = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, tl = { _backpedal: Fi, anyPunctuation: UT, autolink: YT, blockSkip: PT, br: Xf, code: $T, del: Fi, emStrongLDelim: NT, emStrongRDelimAst: WT, emStrongRDelimUnd: HT, escape: MT, link: XT, nolink: tp, punctuation: OT, reflink: Jf, reflinkSearch: VT, tag: jT, text: IT, url: Fi }, ZT = { ...tl, link: mt(/^!?\[(label)\]\((.*?)\)/).replace("label", Zs).getRegex(), reflink: mt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Zs).getRegex() }, Ua = { ...tl, emStrongRDelimAst: zT, emStrongLDelim: qT, url: mt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Wh).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: mt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Wh).getRegex() }, KT = { ...Ua, br: mt(Xf).replace("{2,}", "*").getRegex(), text: mt(Ua.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ns = { normal: Qn, gfm: AT, pedantic: ET }, ui = { normal: tl, gfm: Ua, breaks: KT, pedantic: ZT }, QT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, zh = (e) => QT[e];
function ve(e, t) {
  if (t) {
    if (Vt.escapeTest.test(e)) return e.replace(Vt.escapeReplace, zh);
  } else if (Vt.escapeTestNoEncode.test(e)) return e.replace(Vt.escapeReplaceNoEncode, zh);
  return e;
}
function Hh(e) {
  try {
    e = encodeURI(e).replace(Vt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function Uh(e, t) {
  let r = e.replace(Vt.findPipe, (o, a, n) => {
    let l = !1, c = a;
    for (; --c >= 0 && n[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(Vt.splitPipe), s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; s < i.length; s++) i[s] = i[s].trim().replace(Vt.slashPipe, "|");
  return i;
}
function di(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let s = 0;
  for (; s < i && e.charAt(i - s - 1) === t; )
    s++;
  return e.slice(0, i - s);
}
function JT(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function Yh(e, t, r, i, s) {
  let o = t.href, a = t.title || null, n = e[1].replace(s.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: o, title: a, text: n, tokens: i.inlineTokens(n) };
  return i.state.inLink = !1, l;
}
function tw(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let s = i[1];
  return t.split(`
`).map((o) => {
    let a = o.match(r.other.beginningSpace);
    if (a === null) return o;
    let [n] = a;
    return n.length >= s.length ? o.slice(s.length) : o;
  }).join(`
`);
}
var Ks = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || Sr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : di(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], s = tw(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: s };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let s = di(i, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (i = s.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: di(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = di(r[0], `
`).split(`
`), s = "", o = "", a = [];
      for (; i.length > 0; ) {
        let n = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), n = !0;
        else if (!n) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), u = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${h}` : h, o = o ? `${o}
${u}` : u;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(u, a, !0), this.lexer.state.top = f, i.length === 0) break;
        let d = a.at(-1);
        if (d?.type === "code") break;
        if (d?.type === "blockquote") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - g.raw.length) + y.raw, o = o.substring(0, o.length - g.text.length) + y.text;
          break;
        } else if (d?.type === "list") {
          let g = d, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - d.raw.length) + y.raw, o = o.substring(0, o.length - g.raw.length) + y.raw, i = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: o };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), s = i.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), n = !1;
      for (; t; ) {
        let c = !1, h = "", u = "";
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), d = t.split(`
`, 1)[0], g = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, u = f.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, u = f.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(d) && (h += d + `
`, t = t.substring(d.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), k = this.rules.other.hrRegex(m), w = this.rules.other.fencesBeginRegex(m), S = this.rules.other.headingBeginRegex(m), v = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let B = t.split(`
`, 1)[0], O;
            if (d = B, this.options.pedantic ? (d = d.replace(this.rules.other.listReplaceNesting, "  "), O = d) : O = d.replace(this.rules.other.tabCharGlobal, "    "), w.test(d) || S.test(d) || v.test(d) || b.test(d) || k.test(d)) break;
            if (O.search(this.rules.other.nonSpaceChar) >= m || !d.trim()) u += `
` + O.slice(m);
            else {
              if (g || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || w.test(f) || S.test(f) || k.test(f)) break;
              u += `
` + d;
            }
            !g && !d.trim() && (g = !0), h += B + `
`, t = t.substring(B.length + 1), f = O.slice(m);
          }
        }
        o.loose || (n ? o.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (n = !0));
        let y = null, C;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(u), y && (C = y[0] !== "[ ] ", u = u.replace(this.rules.other.listReplaceTask, ""))), o.items.push({ type: "list_item", raw: h, task: !!y, checked: C, loose: !1, text: u, tokens: [] }), o.raw += h;
      }
      let l = o.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        let h = o.items[c].tokens.filter((f) => f.type === "space"), u = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
        o.loose = u;
      }
      if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
      return o;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: s, title: o };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = Uh(r[1]), s = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === s.length) {
      for (let n of s) this.rules.other.tableAlignRight.test(n) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(n) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(n) ? a.align.push("left") : a.align.push(null);
      for (let n = 0; n < i.length; n++) a.header.push({ text: i[n], tokens: this.lexer.inline(i[n]), header: !0, align: a.align[n] });
      for (let n of o) a.rows.push(Uh(n, a.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[c] })));
      return a;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let a = di(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0) return;
      } else {
        let a = JT(r[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let n = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, n).trim(), r[3] = "";
        }
      }
      let s = r[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = r[3] ? r[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), Yh(r, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let s = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = r[s.toLowerCase()];
      if (!o) {
        let a = i[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Yh(i, o, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!s || s[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let o = [...s[0]].length - 1, a, n, l = o, c = 0, h = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + o); (s = h.exec(r)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (n = [...a].length, s[3] || s[4]) {
          l += n;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + n) % 3)) {
          c += n;
          continue;
        }
        if (l -= n, l > 0) continue;
        n = Math.min(n, n + l + c);
        let u = [...s[0]][0].length, f = t.slice(0, o + s.index + u + n);
        if (Math.min(o, n) % 2) {
          let g = f.slice(1, -1);
          return { type: "em", raw: f, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let d = f.slice(2, -2);
        return { type: "strong", raw: f, text: d, tokens: this.lexer.inlineTokens(d) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(i), o = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return s && o && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = r[1], s = "mailto:" + i) : (i = r[1], s = i), { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, s;
      if (r[2] === "@") i = r[0], s = "mailto:" + i;
      else {
        let o;
        do
          o = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (o !== r[0]);
        i = r[0], r[1] === "www." ? s = "http://" + r[0] : s = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, ge = class Ya {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Sr, this.options.tokenizer = this.options.tokenizer || new Ks(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: Vt, block: ns.normal, inline: ui.normal };
    this.options.pedantic ? (r.block = ns.pedantic, r.inline = ui.pedantic) : this.options.gfm && (r.block = ns.gfm, this.options.breaks ? r.inline = ui.breaks : r.inline = ui.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: ns, inline: ui };
  }
  static lex(t, r) {
    return new Ya(r).lex(t);
  }
  static lexInline(t, r) {
    return new Ya(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Vt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(Vt.tabCharGlobal, "    ").replace(Vt.spaceLine, "")); t; ) {
      let s;
      if (this.options.extensions?.block?.some((a) => (s = a.call({ lexer: this }, t, r)) ? (t = t.substring(s.raw.length), r.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        s.raw.length === 1 && a !== void 0 ? a.raw += `
` : r.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, r.push(s));
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      let o = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, n = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, n), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (o = t.substring(0, a + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        let a = r.at(-1);
        i && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s), i = o.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (t) {
        let a = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let i = t, s = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, s.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let o;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) o = s[2] ? s[2].length : 0, i = i.slice(0, s.index + o) + "[" + "a".repeat(s[0].length - o - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let a = !1, n = "";
    for (; t; ) {
      a || (n = ""), a = !1;
      let l;
      if (this.options.extensions?.inline?.some((h) => (l = h.call({ lexer: this }, t, r)) ? (t = t.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let h = r.at(-1);
        l.type === "text" && h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, i, n)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      let c = t;
      if (this.options.extensions?.startInline) {
        let h = 1 / 0, u = t.slice(1), f;
        this.options.extensions.startInline.forEach((d) => {
          f = d.call({ lexer: this }, u), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
        }), h < 1 / 0 && h >= 0 && (c = t.substring(0, h + 1));
      }
      if (l = this.tokenizer.inlineText(c)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (n = l.raw.slice(-1)), a = !0;
        let h = r.at(-1);
        h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return r;
  }
}, Qs = class {
  options;
  parser;
  constructor(t) {
    this.options = t || Sr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let s = (r || "").match(Vt.notSpaceStart)?.[0], o = t.replace(Vt.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + ve(s) + '">' + (i ? o : ve(o, !0)) + `</code></pre>
` : "<pre><code>" + (i ? o : ve(o, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, s = "";
    for (let n = 0; n < t.items.length; n++) {
      let l = t.items[n];
      s += this.listitem(l);
    }
    let o = r ? "ol" : "ul", a = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + o + a + `>
` + s + "</" + o + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + ve(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let o = 0; o < t.header.length; o++) i += this.tablecell(t.header[o]);
    r += this.tablerow({ text: i });
    let s = "";
    for (let o = 0; o < t.rows.length; o++) {
      let a = t.rows[o];
      i = "";
      for (let n = 0; n < a.length; n++) i += this.tablecell(a[n]);
      s += this.tablerow({ text: i });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${ve(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let s = this.parser.parseInline(i), o = Hh(t);
    if (o === null) return s;
    t = o;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + ve(r) + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: t, title: r, text: i, tokens: s }) {
    s && (i = this.parser.parseInline(s, this.parser.textRenderer));
    let o = Hh(t);
    if (o === null) return ve(i);
    t = o;
    let a = `<img src="${t}" alt="${i}"`;
    return r && (a += ` title="${ve(r)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : ve(t.text);
  }
}, el = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, me = class Ga {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || Sr, this.options.renderer = this.options.renderer || new Qs(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new el();
  }
  static parse(t, r) {
    return new Ga(r).parse(t);
  }
  static parseInline(t, r) {
    return new Ga(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = o, l = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(n.type)) {
          i += l || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "space": {
          i += this.renderer.space(a);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(a);
          continue;
        }
        case "code": {
          i += this.renderer.code(a);
          continue;
        }
        case "table": {
          i += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          i += this.renderer.list(a);
          continue;
        }
        case "html": {
          i += this.renderer.html(a);
          continue;
        }
        case "def": {
          i += this.renderer.def(a);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let n = a, l = this.renderer.text(n);
          for (; s + 1 < t.length && t[s + 1].type === "text"; ) n = t[++s], l += `
` + this.renderer.text(n);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (n !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += n || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "escape": {
          i += r.text(a);
          break;
        }
        case "html": {
          i += r.html(a);
          break;
        }
        case "link": {
          i += r.link(a);
          break;
        }
        case "image": {
          i += r.image(a);
          break;
        }
        case "strong": {
          i += r.strong(a);
          break;
        }
        case "em": {
          i += r.em(a);
          break;
        }
        case "codespan": {
          i += r.codespan(a);
          break;
        }
        case "br": {
          i += r.br(a);
          break;
        }
        case "del": {
          i += r.del(a);
          break;
        }
        case "text": {
          i += r.text(a);
          break;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
}, Ti = class {
  options;
  block;
  constructor(t) {
    this.options = t || Sr;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? ge.lex : ge.lexInline;
  }
  provideParser() {
    return this.block ? me.parse : me.parseInline;
  }
}, ew = class {
  defaults = jn();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = me;
  Renderer = Qs;
  TextRenderer = el;
  Lexer = ge;
  Tokenizer = Ks;
  Hooks = Ti;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let s of t) switch (i = i.concat(r.call(this, s)), s.type) {
      case "table": {
        let o = s;
        for (let a of o.header) i = i.concat(this.walkTokens(a.tokens, r));
        for (let a of o.rows) for (let n of a) i = i.concat(this.walkTokens(n.tokens, r));
        break;
      }
      case "list": {
        let o = s;
        i = i.concat(this.walkTokens(o.items, r));
        break;
      }
      default: {
        let o = s;
        this.defaults.extensions?.childTokens?.[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
          let n = o[a].flat(1 / 0);
          i = i.concat(this.walkTokens(n, r));
        }) : o.tokens && (i = i.concat(this.walkTokens(o.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let a = r.renderers[o.name];
          a ? r.renderers[o.name] = function(...n) {
            let l = o.renderer.apply(this, n);
            return l === !1 && (l = a.apply(this, n)), l;
          } : r.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = r[o.level];
          a ? a.unshift(o.tokenizer) : r[o.level] = [o.tokenizer], o.start && (o.level === "block" ? r.startBlock ? r.startBlock.push(o.start) : r.startBlock = [o.start] : o.level === "inline" && (r.startInline ? r.startInline.push(o.start) : r.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (r.childTokens[o.name] = o.childTokens);
      }), s.extensions = r), i.renderer) {
        let o = this.defaults.renderer || new Qs(this.defaults);
        for (let a in i.renderer) {
          if (!(a in o)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let n = a, l = i.renderer[n], c = o[n];
          o[n] = (...h) => {
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u || "";
          };
        }
        s.renderer = o;
      }
      if (i.tokenizer) {
        let o = this.defaults.tokenizer || new Ks(this.defaults);
        for (let a in i.tokenizer) {
          if (!(a in o)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let n = a, l = i.tokenizer[n], c = o[n];
          o[n] = (...h) => {
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u;
          };
        }
        s.tokenizer = o;
      }
      if (i.hooks) {
        let o = this.defaults.hooks || new Ti();
        for (let a in i.hooks) {
          if (!(a in o)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let n = a, l = i.hooks[n], c = o[n];
          Ti.passThroughHooks.has(a) ? o[n] = (h) => {
            if (this.defaults.async && Ti.passThroughHooksRespectAsync.has(a)) return (async () => {
              let f = await l.call(o, h);
              return c.call(o, f);
            })();
            let u = l.call(o, h);
            return c.call(o, u);
          } : o[n] = (...h) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(o, h);
              return f === !1 && (f = await c.apply(o, h)), f;
            })();
            let u = l.apply(o, h);
            return u === !1 && (u = c.apply(o, h)), u;
          };
        }
        s.hooks = o;
      }
      if (i.walkTokens) {
        let o = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(n) {
          let l = [];
          return l.push(a.call(this, n)), o && (l = l.concat(o.call(this, n))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return ge.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return me.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let s = { ...i }, o = { ...this.defaults, ...s }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = t), o.async) return (async () => {
        let n = o.hooks ? await o.hooks.preprocess(r) : r, l = await (o.hooks ? await o.hooks.provideLexer() : t ? ge.lex : ge.lexInline)(n, o), c = o.hooks ? await o.hooks.processAllTokens(l) : l;
        o.walkTokens && await Promise.all(this.walkTokens(c, o.walkTokens));
        let h = await (o.hooks ? await o.hooks.provideParser() : t ? me.parse : me.parseInline)(c, o);
        return o.hooks ? await o.hooks.postprocess(h) : h;
      })().catch(a);
      try {
        o.hooks && (r = o.hooks.preprocess(r));
        let n = (o.hooks ? o.hooks.provideLexer() : t ? ge.lex : ge.lexInline)(r, o);
        o.hooks && (n = o.hooks.processAllTokens(n)), o.walkTokens && this.walkTokens(n, o.walkTokens);
        let l = (o.hooks ? o.hooks.provideParser() : t ? me.parse : me.parseInline)(n, o);
        return o.hooks && (l = o.hooks.postprocess(l)), l;
      } catch (n) {
        return a(n);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let s = "<p>An error occurred:</p><pre>" + ve(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(s) : s;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, Tr = new ew();
function yt(e, t) {
  return Tr.parse(e, t);
}
yt.options = yt.setOptions = function(e) {
  return Tr.setOptions(e), yt.defaults = Tr.defaults, Uf(yt.defaults), yt;
};
yt.getDefaults = jn;
yt.defaults = Sr;
yt.use = function(...e) {
  return Tr.use(...e), yt.defaults = Tr.defaults, Uf(yt.defaults), yt;
};
yt.walkTokens = function(e, t) {
  return Tr.walkTokens(e, t);
};
yt.parseInline = Tr.parseInline;
yt.Parser = me;
yt.parser = me.parse;
yt.Renderer = Qs;
yt.TextRenderer = el;
yt.Lexer = ge;
yt.lexer = ge.lex;
yt.Tokenizer = Ks;
yt.Hooks = Ti;
yt.parse = yt;
yt.options;
yt.setOptions;
yt.use;
yt.walkTokens;
yt.parseInline;
me.parse;
ge.lex;
function ep(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = i.reduce(function(n, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? n.concat(c.map(function(h) {
      var u, f;
      return (f = (u = h.match(/[\t ]/g)) === null || u === void 0 ? void 0 : u.length) !== null && f !== void 0 ? f : 0;
    })) : n;
  }, []);
  if (s.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, s) + "}", "g");
    i = i.map(function(n) {
      return n.replace(o, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return t.forEach(function(n, l) {
    var c = a.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", u = n;
    typeof n == "string" && n.includes(`
`) && (u = String(n).split(`
`).map(function(f, d) {
      return d === 0 ? f : "" + h + f;
    }).join(`
`)), a += u + i[l + 1];
  }), a;
}
var rw = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, ja = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new Map(), iw = /* @__PURE__ */ p((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (P.debug("Registering icon pack:", t.name), "loader" in t)
      rp.set(t.name, t.loader);
    else if ("icons" in t)
      ja.set(t.name, t.icons);
    else
      throw P.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), ip = /* @__PURE__ */ p(async (e, t) => {
  const r = sT(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let s = ja.get(i);
  if (!s) {
    const a = rp.get(i);
    if (!a)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      s = { ...await a(), prefix: i }, ja.set(i, s);
    } catch (n) {
      throw P.error(n), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const o = nT(s, r.name);
  if (!o)
    throw new Error(`Icon not found: ${e}`);
  return o;
}, "getRegisteredIconData"), sw = /* @__PURE__ */ p(async (e) => {
  try {
    return await ip(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), Vi = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  try {
    i = await ip(e, t?.fallbackPrefix);
  } catch (a) {
    P.error(a), i = rw;
  }
  const s = pT(i, t), o = CT(yT(s.body), {
    ...s.attributes,
    ...r
  });
  return ke(o, Tt());
}, "getIconSVG");
function sp(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`);
  return ep(i);
}
p(sp, "preprocessMarkdown");
function op(e) {
  return e.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) => t.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((r) => ({ content: r, type: "normal" })) ?? []
  );
}
p(op, "nonMarkdownToLines");
function ap(e, t = {}) {
  const r = sp(e, t), i = yt.lexer(r), s = [[]];
  let o = 0;
  function a(n, l = "normal") {
    n.type === "text" ? n.text.split(`
`).forEach((h, u) => {
      u !== 0 && (o++, s.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && s[o].push({ content: f, type: l });
      });
    }) : n.type === "strong" || n.type === "em" ? n.tokens.forEach((c) => {
      a(c, n.type);
    }) : n.type === "html" && s[o].push({ content: n.text, type: "normal" });
  }
  return p(a, "processNode"), i.forEach((n) => {
    n.type === "paragraph" ? n.tokens?.forEach((l) => {
      a(l);
    }) : n.type === "html" ? s[o].push({ content: n.text, type: "normal" }) : s[o].push({ content: n.raw, type: "normal" });
  }), s;
}
p(ap, "markdownToLines");
function np(e) {
  return e ? `<p>${/**
  * Replace new lines with <br /> tags.
  *
  * Unlike in markdown text, `\n` sequences are treated as line breaks here.
  */
  e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
p(np, "nonMarkdownToHTML");
function lp(e, { markdownAutoWrap: t } = {}) {
  const r = yt.lexer(e);
  function i(s) {
    return s.type === "text" ? t === !1 ? s.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : s.text.replace(/\n */g, "<br/>") : s.type === "strong" ? `<strong>${s.tokens?.map(i).join("")}</strong>` : s.type === "em" ? `<em>${s.tokens?.map(i).join("")}</em>` : s.type === "paragraph" ? `<p>${s.tokens?.map(i).join("")}</p>` : s.type === "space" ? "" : s.type === "html" ? `${s.text}` : s.type === "escape" ? s.text : (P.warn(`Unsupported markdown: ${s.type}`), s.raw);
  }
  return p(i, "output"), r.map(i).join("");
}
p(lp, "markdownToHTML");
function hp(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
p(hp, "splitTextToChars");
function cp(e, t) {
  const r = hp(t.content);
  return rl(e, [], r, t.type);
}
p(cp, "splitWordToFitWidth");
function rl(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [s, ...o] = r, a = [...t, s];
  return e([{ content: a.join(""), type: i }]) ? rl(e, a, o, i) : (t.length === 0 && s && (t.push(s), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
p(rl, "splitWordToFitWidthRecursion");
function up(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Js(e, t);
}
p(up, "splitLineToFitWidth");
function Js(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let s = "";
  e[0].content === " " && (s = " ", e.shift());
  const o = e.shift() ?? { content: " ", type: "normal" }, a = [...i];
  if (s !== "" && a.push({ content: s, type: "normal" }), a.push(o), t(a))
    return Js(e, t, r, a);
  if (i.length > 0)
    r.push(i), e.unshift(o);
  else if (o.content) {
    const [n, l] = cp(t, o);
    r.push([n]), l.content && e.unshift(l);
  }
  return Js(e, t, r);
}
p(Js, "splitLineToFitWidthRecursion");
function Xa(e, t) {
  t && e.attr("style", t);
}
p(Xa, "applyStyle");
var Gh = 16384;
async function dp(e, t, r, i, s = !1, o = Tt()) {
  const a = e.append("foreignObject");
  a.attr("width", `${Math.min(10 * r, Gh)}px`), a.attr("height", `${Math.min(10 * r, Gh)}px`);
  const n = a.append("xhtml:div"), l = Ai(t.label) ? await Gc(t.label.replace(Hi.lineBreakRegex, `
`), o) : ke(t.label, o), c = t.isNode ? "nodeLabel" : "edgeLabel", h = n.append("span");
  h.html(l), Xa(h, t.labelStyle), h.attr("class", `${c} ${i}`), Xa(n, t.labelStyle), n.style("display", "table-cell"), n.style("white-space", "nowrap"), n.style("line-height", "1.5"), r !== Number.POSITIVE_INFINITY && (n.style("max-width", r + "px"), n.style("text-align", "center")), n.attr("xmlns", "http://www.w3.org/1999/xhtml"), s && n.attr("class", "labelBkg");
  let u = n.node().getBoundingClientRect();
  return u.width === r && (n.style("display", "table"), n.style("white-space", "break-spaces"), n.style("width", r + "px"), u = n.node().getBoundingClientRect()), a.node();
}
p(dp, "addHtmlSpan");
function ko(e, t, r, i = !1) {
  const s = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  return i && s.attr("text-anchor", "middle"), s;
}
p(ko, "createTspan");
function fp(e, t, r) {
  const i = e.append("text"), s = ko(i, 1, t);
  To(s, r);
  const o = s.node().getComputedTextLength();
  return i.remove(), o;
}
p(fp, "computeWidthOfText");
function ow(e, t, r) {
  const i = e.append("text"), s = ko(i, 1, t);
  To(s, [{ content: r, type: "normal" }]);
  const o = s.node()?.getBoundingClientRect();
  return o && i.remove(), o;
}
p(ow, "computeDimensionOfText");
function pp(e, t, r, i = !1, s = !1) {
  const a = t.append("g"), n = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = a.append("text").attr("y", "-10.1");
  s && l.attr("text-anchor", "middle");
  let c = 0;
  for (const h of r) {
    const u = /* @__PURE__ */ p((d) => fp(a, 1.1, d) <= e, "checkWidth"), f = u(h) ? [h] : up(h, u);
    for (const d of f) {
      const g = ko(l, c, 1.1, s);
      To(g, d), c++;
    }
  }
  if (i) {
    const h = l.node().getBBox(), u = 2;
    return n.attr("x", h.x - u).attr("y", h.y - u).attr("width", h.width + 2 * u).attr("height", h.height + 2 * u), a.node();
  } else
    return l.node();
}
p(pp, "createFormattedText");
function Va(e) {
  const t = /&(amp|lt|gt);/g;
  return e.replace(t, (r, i) => {
    switch (i) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      default:
        return r;
    }
  });
}
p(Va, "decodeHTMLEntities");
function To(e, t) {
  e.text(""), t.forEach((r, i) => {
    const s = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? s.text(Va(r.content)) : s.text(" " + Va(r.content));
  });
}
p(To, "updateTextContentAndStyles");
async function gp(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (s, o, a) => (r.push(
    (async () => {
      const n = `${o}:${a}`;
      return await sw(n) ? await Vi(n, void 0, { class: "label-icon" }) : `<i class='${ke(s, t).replace(":", " ")}'></i>`;
    })()
  ), s));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
p(gp, "replaceIconSubstring");
var je = /* @__PURE__ */ p(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: s = "",
  useHtmlLabels: o = !0,
  markdown: a = !0,
  isNode: n = !0,
  /**
   * The width to wrap the text within. Set to `Number.POSITIVE_INFINITY` for no wrapping.
   */
  width: l = 200,
  addSvgBackground: c = !1
} = {}, h) => {
  if (P.debug(
    "XYZ createText",
    t,
    r,
    i,
    s,
    o,
    n,
    "addSvgBackground: ",
    c
  ), o) {
    const u = a ? lp(t, h) : np(t), f = await gp(kr(u), h), d = t.replace(/\\\\/g, "\\"), g = {
      isNode: n,
      label: Ai(t) ? d : f,
      labelStyle: r.replace("fill:", "color:")
    };
    return await dp(e, g, l, s, c, h);
  } else {
    const u = kr(t.replace(/<br\s*\/?>/g, "<br/>")), f = a ? ap(u.replace("<br>", "<br/>"), h) : op(u), d = pp(
      l,
      e,
      f,
      t ? c : !1,
      !n
    );
    if (n) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ct(d).attr("style", g);
    } else {
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ct(d).select("rect").attr("style", g.replace(/background:/g, "fill:"));
      const m = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ct(d).select("text").attr("style", m);
    }
    return i ? ct(d).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : ct(d).selectAll("tspan.text-outer-tspan").classed("row", !0), d;
  }
}, "createText");
function ta(e, t, r) {
  if (e && e.length) {
    const [i, s] = t, o = Math.PI / 180 * r, a = Math.cos(o), n = Math.sin(o);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * a - (h - s) * n + i, l[1] = (c - i) * n + (h - s) * a + s;
    }
  }
}
function aw(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function nw(e, t, r, i = 1) {
  const s = r, o = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, n = [0, 0];
  if (s) for (const c of a) ta(c, n, s);
  const l = (function(c, h, u) {
    const f = [];
    for (const b of c) {
      const k = [...b];
      aw(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && f.push(k);
    }
    const d = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of f) for (let k = 0; k < b.length - 1; k++) {
      const w = b[k], S = b[k + 1];
      if (w[1] !== S[1]) {
        const v = Math.min(w[1], S[1]);
        g.push({ ymin: v, ymax: Math.max(w[1], S[1]), x: v === w[1] ? w[0] : S[0], islope: (S[0] - w[0]) / (S[1] - w[1]) });
      }
    }
    if (g.sort(((b, k) => b.ymin < k.ymin ? -1 : b.ymin > k.ymin ? 1 : b.x < k.x ? -1 : b.x > k.x ? 1 : b.ymax === k.ymax ? 0 : (b.ymax - k.ymax) / Math.abs(b.ymax - k.ymax))), !g.length) return d;
    let m = [], y = g[0].ymin, C = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let k = 0; k < g.length && !(g[k].ymin > y); k++) b = k;
        g.splice(0, b + 1).forEach(((k) => {
          m.push({ s: y, edge: k });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, k) => b.edge.x === k.edge.x ? 0 : (b.edge.x - k.edge.x) / Math.abs(b.edge.x - k.edge.x))), (u !== 1 || C % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const k = b + 1;
        if (k >= m.length) break;
        const w = m[b].edge, S = m[k].edge;
        d.push([[Math.round(w.x), y], [Math.round(S.x), y]]);
      }
      y += u, m.forEach(((b) => {
        b.edge.x = b.edge.x + u * b.edge.islope;
      })), C++;
    }
    return d;
  })(a, o, i);
  if (s) {
    for (const c of a) ta(c, n, -s);
    (function(c, h, u) {
      const f = [];
      c.forEach(((d) => f.push(...d))), ta(f, h, u);
    })(l, n, -s);
  }
  return l;
}
function Zi(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let s = t.hachureGap;
  s < 0 && (s = 4 * t.strokeWidth), s = Math.round(Math.max(s, 0.1));
  let o = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (o = s), nw(e, s, i, o || 1);
}
class il {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Zi(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const s of t) i.push(...this.helper.doubleLineOps(s[0][0], s[0][1], s[1][0], s[1][1], r));
    return i;
  }
}
function wo(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class lw extends il {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const s = Zi(t, Object.assign({}, r, { hachureGap: i })), o = Math.PI / 180 * r.hachureAngle, a = [], n = 0.5 * i * Math.cos(o), l = 0.5 * i * Math.sin(o);
    for (const [c, h] of s) wo([c, h]) && a.push([[c[0] - n, c[1] + l], [...h]], [[c[0] + n, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(a, r) };
  }
}
class hw extends il {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), s = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), o = this._fillPolygons(t, s);
    return i.ops = i.ops.concat(o.ops), i;
  }
}
class cw {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Zi(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let s = r.hachureGap;
    s < 0 && (s = 4 * r.strokeWidth), s = Math.max(s, 0.1);
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const a = s / 4;
    for (const n of t) {
      const l = wo(n), c = l / s, h = Math.ceil(c) - 1, u = l - h * s, f = (n[0][0] + n[1][0]) / 2 - s / 4, d = Math.min(n[0][1], n[1][1]);
      for (let g = 0; g < h; g++) {
        const m = d + u + g * s, y = f - a + 2 * Math.random() * a, C = m - a + 2 * Math.random() * a, b = this.helper.ellipse(y, C, o, o, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class uw {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Zi(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, s = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, o = [];
    return t.forEach(((a) => {
      const n = wo(a), l = Math.floor(n / (i + s)), c = (n + s - l * (i + s)) / 2;
      let h = a[0], u = a[1];
      h[0] > u[0] && (h = a[1], u = a[0]);
      const f = Math.atan((u[1] - h[1]) / (u[0] - h[0]));
      for (let d = 0; d < l; d++) {
        const g = d * (i + s), m = g + i, y = [h[0] + g * Math.cos(f) + c * Math.cos(f), h[1] + g * Math.sin(f) + c * Math.sin(f)], C = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        o.push(...this.helper.doubleLineOps(y[0], y[1], C[0], C[1], r));
      }
    })), o;
  }
}
class dw {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, s = r.zigzagOffset < 0 ? i : r.zigzagOffset, o = Zi(t, r = Object.assign({}, r, { hachureGap: i + s }));
    return { type: "fillSketch", ops: this.zigzagLines(o, s, r) };
  }
  zigzagLines(t, r, i) {
    const s = [];
    return t.forEach(((o) => {
      const a = wo(o), n = Math.round(a / (2 * r));
      let l = o[0], c = o[1];
      l[0] > c[0] && (l = o[1], c = o[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let u = 0; u < n; u++) {
        const f = 2 * u * r, d = 2 * (u + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + d * Math.cos(h), l[1] + d * Math.sin(h)], C = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        s.push(...this.helper.doubleLineOps(m[0], m[1], C[0], C[1], i), ...this.helper.doubleLineOps(C[0], C[1], y[0], y[1], i));
      }
    })), s;
  }
}
const Jt = {};
class fw {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const pw = 0, ea = 1, jh = 2, ls = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function ra(e, t) {
  return e.type === t;
}
function sl(e) {
  const t = [], r = (function(a) {
    const n = new Array();
    for (; a !== ""; ) if (a.match(/^([ \t\r\n,]+)/)) a = a.substr(RegExp.$1.length);
    else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n[n.length] = { type: pw, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
    else {
      if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n[n.length] = { type: ea, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
    }
    return n[n.length] = { type: jh, text: "" }, n;
  })(e);
  let i = "BOD", s = 0, o = r[s];
  for (; !ra(o, jh); ) {
    let a = 0;
    const n = [];
    if (i === "BOD") {
      if (o.text !== "M" && o.text !== "m") return sl("M0,0" + e);
      s++, a = ls[o.text], i = o.text;
    } else ra(o, ea) ? a = ls[i] : (s++, a = ls[o.text], i = o.text);
    if (!(s + a < r.length)) throw new Error("Path data ended short");
    for (let l = s; l < s + a; l++) {
      const c = r[l];
      if (!ra(c, ea)) throw new Error("Param not a number: " + i + "," + c.text);
      n[n.length] = +c.text;
    }
    if (typeof ls[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: n };
      t.push(l), s += a, o = r[s], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function mp(e) {
  let t = 0, r = 0, i = 0, s = 0;
  const o = [];
  for (const { key: a, data: n } of e) switch (a) {
    case "M":
      o.push({ key: "M", data: [...n] }), [t, r] = n, [i, s] = n;
      break;
    case "m":
      t += n[0], r += n[1], o.push({ key: "M", data: [t, r] }), i = t, s = r;
      break;
    case "L":
      o.push({ key: "L", data: [...n] }), [t, r] = n;
      break;
    case "l":
      t += n[0], r += n[1], o.push({ key: "L", data: [t, r] });
      break;
    case "C":
      o.push({ key: "C", data: [...n] }), t = n[4], r = n[5];
      break;
    case "c": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      o.push({ key: "Q", data: [...n] }), t = n[2], r = n[3];
      break;
    case "q": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      o.push({ key: "A", data: [...n] }), t = n[5], r = n[6];
      break;
    case "a":
      t += n[5], r += n[6], o.push({ key: "A", data: [n[0], n[1], n[2], n[3], n[4], t, r] });
      break;
    case "H":
      o.push({ key: "H", data: [...n] }), t = n[0];
      break;
    case "h":
      t += n[0], o.push({ key: "H", data: [t] });
      break;
    case "V":
      o.push({ key: "V", data: [...n] }), r = n[0];
      break;
    case "v":
      r += n[0], o.push({ key: "V", data: [r] });
      break;
    case "S":
      o.push({ key: "S", data: [...n] }), t = n[2], r = n[3];
      break;
    case "s": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      o.push({ key: "T", data: [...n] }), t = n[0], r = n[1];
      break;
    case "t":
      t += n[0], r += n[1], o.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      o.push({ key: "Z", data: [] }), t = i, r = s;
  }
  return o;
}
function yp(e) {
  const t = [];
  let r = "", i = 0, s = 0, o = 0, a = 0, n = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, s] = h, [o, a] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], s = h[5], n = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, s] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "V":
        s = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "S": {
        let u = 0, f = 0;
        r === "C" || r === "S" ? (u = i + (i - n), f = s + (s - l)) : (u = i, f = s), t.push({ key: "C", data: [u, f, ...h] }), n = h[0], l = h[1], i = h[2], s = h[3];
        break;
      }
      case "T": {
        const [u, f] = h;
        let d = 0, g = 0;
        r === "Q" || r === "T" ? (d = i + (i - n), g = s + (s - l)) : (d = i, g = s);
        const m = i + 2 * (d - i) / 3, y = s + 2 * (g - s) / 3, C = u + 2 * (d - u) / 3, b = f + 2 * (g - f) / 3;
        t.push({ key: "C", data: [m, y, C, b, u, f] }), n = d, l = g, i = u, s = f;
        break;
      }
      case "Q": {
        const [u, f, d, g] = h, m = i + 2 * (u - i) / 3, y = s + 2 * (f - s) / 3, C = d + 2 * (u - d) / 3, b = g + 2 * (f - g) / 3;
        t.push({ key: "C", data: [m, y, C, b, d, g] }), n = u, l = f, i = d, s = g;
        break;
      }
      case "A": {
        const u = Math.abs(h[0]), f = Math.abs(h[1]), d = h[2], g = h[3], m = h[4], y = h[5], C = h[6];
        u === 0 || f === 0 ? (t.push({ key: "C", data: [i, s, y, C, y, C] }), i = y, s = C) : (i !== y || s !== C) && (Cp(i, s, y, C, u, f, d, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, s = C);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = o, s = a;
    }
    r = c;
  }
  return t;
}
function fi(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function Cp(e, t, r, i, s, o, a, n, l, c) {
  const h = (u = a, Math.PI * u / 180);
  var u;
  let f = [], d = 0, g = 0, m = 0, y = 0;
  if (c) [d, g, m, y] = c;
  else {
    [e, t] = fi(e, t, -h), [r, i] = fi(r, i, -h);
    const W = (e - r) / 2, I = (t - i) / 2;
    let F = W * W / (s * s) + I * I / (o * o);
    F > 1 && (F = Math.sqrt(F), s *= F, o *= F);
    const L = s * s, M = o * o, R = L * M - L * I * I - M * W * W, H = L * I * I + M * W * W, U = (n === l ? -1 : 1) * Math.sqrt(Math.abs(R / H));
    m = U * s * I / o + (e + r) / 2, y = U * -o * W / s + (t + i) / 2, d = Math.asin(parseFloat(((t - y) / o).toFixed(9))), g = Math.asin(parseFloat(((i - y) / o).toFixed(9))), e < m && (d = Math.PI - d), r < m && (g = Math.PI - g), d < 0 && (d = 2 * Math.PI + d), g < 0 && (g = 2 * Math.PI + g), l && d > g && (d -= 2 * Math.PI), !l && g > d && (g -= 2 * Math.PI);
  }
  let C = g - d;
  if (Math.abs(C) > 120 * Math.PI / 180) {
    const W = g, I = r, F = i;
    g = l && g > d ? d + 120 * Math.PI / 180 * 1 : d + 120 * Math.PI / 180 * -1, f = Cp(r = m + s * Math.cos(g), i = y + o * Math.sin(g), I, F, s, o, a, 0, l, [g, W, m, y]);
  }
  C = g - d;
  const b = Math.cos(d), k = Math.sin(d), w = Math.cos(g), S = Math.sin(g), v = Math.tan(C / 4), B = 4 / 3 * s * v, O = 4 / 3 * o * v, N = [e, t], D = [e + B * k, t - O * b], $ = [r + B * S, i - O * w], z = [r, i];
  if (D[0] = 2 * N[0] - D[0], D[1] = 2 * N[1] - D[1], c) return [D, $, z].concat(f);
  {
    f = [D, $, z].concat(f);
    const W = [];
    for (let I = 0; I < f.length; I += 3) {
      const F = fi(f[I][0], f[I][1], h), L = fi(f[I + 1][0], f[I + 1][1], h), M = fi(f[I + 2][0], f[I + 2][1], h);
      W.push([F[0], F[1], L[0], L[1], M[0], M[1]]);
    }
    return W;
  }
}
const gw = { randOffset: function(e, t) {
  return ot(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return to(e, t, r);
}, ellipse: function(e, t, r, i, s) {
  const o = bp(r, i, s);
  return Za(e, t, s, o).opset;
}, doubleLineOps: function(e, t, r, i, s) {
  return ir(e, t, r, i, s, !0);
} };
function xp(e, t, r, i, s) {
  return { type: "path", ops: ir(e, t, r, i, s) };
}
function Ss(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const s = [];
    for (let o = 0; o < i - 1; o++) s.push(...ir(e[o][0], e[o][1], e[o + 1][0], e[o + 1][1], r));
    return t && s.push(...ir(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: s };
  }
  return i === 2 ? xp(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function mw(e, t, r, i, s) {
  return (function(o, a) {
    return Ss(o, !0, a);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], s);
}
function Xh(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = hs(r[0], 1 * (1 + 0.2 * t.roughness), t), s = t.disableMultiStroke ? [] : hs(r[0], 1.5 * (1 + 0.22 * t.roughness), Kh(t));
    for (let o = 1; o < r.length; o++) {
      const a = r[o];
      if (a.length) {
        const n = hs(a, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : hs(a, 1.5 * (1 + 0.22 * t.roughness), Kh(t));
        for (const c of n) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && s.push(c);
      }
    }
    return { type: "path", ops: i.concat(s) };
  }
  return { type: "path", ops: [] };
}
function bp(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), s = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), o = 2 * Math.PI / s;
  let a = Math.abs(e / 2), n = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return a += ot(a * l, r), n += ot(n * l, r), { increment: o, rx: a, ry: n };
}
function Za(e, t, r, i) {
  const [s, o] = Qh(i.increment, e, t, i.rx, i.ry, 1, i.increment * to(0.1, to(0.4, 1, r), r), r);
  let a = eo(s, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [n] = Qh(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = eo(n, null, r);
    a = a.concat(l);
  }
  return { estimatedPoints: o, opset: { type: "path", ops: a } };
}
function Vh(e, t, r, i, s, o, a, n, l) {
  const c = e, h = t;
  let u = Math.abs(r / 2), f = Math.abs(i / 2);
  u += ot(0.01 * u, l), f += ot(0.01 * f, l);
  let d = s, g = o;
  for (; d < 0; ) d += 2 * Math.PI, g += 2 * Math.PI;
  g - d > 2 * Math.PI && (d = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - d) / 2), C = Jh(y, c, h, u, f, d, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = Jh(y, c, h, u, f, d, g, 1.5, l);
    C.push(...b);
  }
  return a && (n ? C.push(...ir(c, h, c + u * Math.cos(d), h + f * Math.sin(d), l), ...ir(c, h, c + u * Math.cos(g), h + f * Math.sin(g), l)) : C.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + u * Math.cos(d), h + f * Math.sin(d)] })), { type: "path", ops: C };
}
function Zh(e, t) {
  const r = yp(mp(sl(e))), i = [];
  let s = [0, 0], o = [0, 0];
  for (const { key: a, data: n } of r) switch (a) {
    case "M":
      o = [n[0], n[1]], s = [n[0], n[1]];
      break;
    case "L":
      i.push(...ir(o[0], o[1], n[0], n[1], t)), o = [n[0], n[1]];
      break;
    case "C": {
      const [l, c, h, u, f, d] = n;
      i.push(...yw(l, c, h, u, f, d, o, t)), o = [f, d];
      break;
    }
    case "Z":
      i.push(...ir(o[0], o[1], s[0], s[1], t)), o = [s[0], s[1]];
  }
  return { type: "path", ops: i };
}
function ia(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const s = t.maxRandomnessOffset || 0, o = i.length;
    if (o > 2) {
      r.push({ op: "move", data: [i[0][0] + ot(s, t), i[0][1] + ot(s, t)] });
      for (let a = 1; a < o; a++) r.push({ op: "lineTo", data: [i[a][0] + ot(s, t), i[a][1] + ot(s, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Er(e, t) {
  return (function(r, i) {
    let s = r.fillStyle || "hachure";
    if (!Jt[s]) switch (s) {
      case "zigzag":
        Jt[s] || (Jt[s] = new lw(i));
        break;
      case "cross-hatch":
        Jt[s] || (Jt[s] = new hw(i));
        break;
      case "dots":
        Jt[s] || (Jt[s] = new cw(i));
        break;
      case "dashed":
        Jt[s] || (Jt[s] = new uw(i));
        break;
      case "zigzag-line":
        Jt[s] || (Jt[s] = new dw(i));
        break;
      default:
        s = "hachure", Jt[s] || (Jt[s] = new il(i));
    }
    return Jt[s];
  })(t, gw).fillPolygons(e, t);
}
function Kh(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function kp(e) {
  return e.randomizer || (e.randomizer = new fw(e.seed || 0)), e.randomizer.next();
}
function to(e, t, r, i = 1) {
  return r.roughness * i * (kp(r) * (t - e) + e);
}
function ot(e, t, r = 1) {
  return to(-e, e, t, r);
}
function ir(e, t, r, i, s, o = !1) {
  const a = o ? s.disableMultiStrokeFill : s.disableMultiStroke, n = Ka(e, t, r, i, s, !0, !1);
  if (a) return n;
  const l = Ka(e, t, r, i, s, !0, !0);
  return n.concat(l);
}
function Ka(e, t, r, i, s, o, a) {
  const n = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(n);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = s.maxRandomnessOffset || 0;
  h * h * 100 > n && (h = l / 10);
  const u = h / 2, f = 0.2 + 0.2 * kp(s);
  let d = s.bowing * s.maxRandomnessOffset * (i - t) / 200, g = s.bowing * s.maxRandomnessOffset * (e - r) / 200;
  d = ot(d, s, c), g = ot(g, s, c);
  const m = [], y = () => ot(u, s, c), C = () => ot(h, s, c), b = s.preserveVertices;
  return a ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : ot(h, s, c)), t + (b ? 0 : ot(h, s, c))] }), a ? m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + y(), g + t + (i - t) * f + y(), d + e + 2 * (r - e) * f + y(), g + t + 2 * (i - t) * f + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [d + e + (r - e) * f + C(), g + t + (i - t) * f + C(), d + e + 2 * (r - e) * f + C(), g + t + 2 * (i - t) * f + C(), r + (b ? 0 : C()), i + (b ? 0 : C())] }), m;
}
function hs(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + ot(t, r), e[0][1] + ot(t, r)]), i.push([e[0][0] + ot(t, r), e[0][1] + ot(t, r)]);
  for (let s = 1; s < e.length; s++) i.push([e[s][0] + ot(t, r), e[s][1] + ot(t, r)]), s === e.length - 1 && i.push([e[s][0] + ot(t, r), e[s][1] + ot(t, r)]);
  return eo(i, null, r);
}
function eo(e, t, r) {
  const i = e.length, s = [];
  if (i > 3) {
    const o = [], a = 1 - r.curveTightness;
    s.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let n = 1; n + 2 < i; n++) {
      const l = e[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, l[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], o[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], o[3] = [e[n + 1][0], e[n + 1][1]], s.push({ op: "bcurveTo", data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]] });
    }
  } else i === 3 ? (s.push({ op: "move", data: [e[1][0], e[1][1]] }), s.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && s.push(...Ka(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return s;
}
function Qh(e, t, r, i, s, o, a, n) {
  const l = [], c = [];
  if (n.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + s * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const u = [t + i * Math.cos(h), r + s * Math.sin(h)];
      l.push(u), c.push(u);
    }
    c.push([t + i * Math.cos(0), r + s * Math.sin(0)]), c.push([t + i * Math.cos(e), r + s * Math.sin(e)]);
  } else {
    const h = ot(0.5, n) - Math.PI / 2;
    c.push([ot(o, n) + t + 0.9 * i * Math.cos(h - e), ot(o, n) + r + 0.9 * s * Math.sin(h - e)]);
    const u = 2 * Math.PI + h - 0.01;
    for (let f = h; f < u; f += e) {
      const d = [ot(o, n) + t + i * Math.cos(f), ot(o, n) + r + s * Math.sin(f)];
      l.push(d), c.push(d);
    }
    c.push([ot(o, n) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * a), ot(o, n) + r + s * Math.sin(h + 2 * Math.PI + 0.5 * a)]), c.push([ot(o, n) + t + 0.98 * i * Math.cos(h + a), ot(o, n) + r + 0.98 * s * Math.sin(h + a)]), c.push([ot(o, n) + t + 0.9 * i * Math.cos(h + 0.5 * a), ot(o, n) + r + 0.9 * s * Math.sin(h + 0.5 * a)]);
  }
  return [c, l];
}
function Jh(e, t, r, i, s, o, a, n, l) {
  const c = o + ot(0.1, l), h = [];
  h.push([ot(n, l) + t + 0.9 * i * Math.cos(c - e), ot(n, l) + r + 0.9 * s * Math.sin(c - e)]);
  for (let u = c; u <= a; u += e) h.push([ot(n, l) + t + i * Math.cos(u), ot(n, l) + r + s * Math.sin(u)]);
  return h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), eo(h, null, l);
}
function yw(e, t, r, i, s, o, a, n) {
  const l = [], c = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const u = n.disableMultiStroke ? 1 : 2, f = n.preserveVertices;
  for (let d = 0; d < u; d++) d === 0 ? l.push({ op: "move", data: [a[0], a[1]] }) : l.push({ op: "move", data: [a[0] + (f ? 0 : ot(c[0], n)), a[1] + (f ? 0 : ot(c[0], n))] }), h = f ? [s, o] : [s + ot(c[d], n), o + ot(c[d], n)], l.push({ op: "bcurveTo", data: [e + ot(c[d], n), t + ot(c[d], n), r + ot(c[d], n), i + ot(c[d], n), h[0], h[1]] });
  return l;
}
function pi(e) {
  return [...e];
}
function tc(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(pi(e[0]), pi(e[1]), pi(e[2]), pi(e[2]));
  else {
    const s = [];
    s.push(e[0], e[0]);
    for (let n = 1; n < e.length; n++) s.push(e[n]), n === e.length - 1 && s.push(e[n]);
    const o = [], a = 1 - t;
    i.push(pi(s[0]));
    for (let n = 1; n + 2 < s.length; n++) {
      const l = s[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * s[n + 1][0] - a * s[n - 1][0]) / 6, l[1] + (a * s[n + 1][1] - a * s[n - 1][1]) / 6], o[2] = [s[n + 1][0] + (a * s[n][0] - a * s[n + 2][0]) / 6, s[n + 1][1] + (a * s[n][1] - a * s[n + 2][1]) / 6], o[3] = [s[n + 1][0], s[n + 1][1]], i.push(o[1], o[2], o[3]);
    }
  }
  return i;
}
function _s(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function Cw(e, t, r) {
  const i = _s(t, r);
  if (i === 0) return _s(e, t);
  let s = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return s = Math.max(0, Math.min(1, s)), _s(e, ur(t, r, s));
}
function ur(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Qa(e, t, r, i) {
  const s = i || [];
  if ((function(n, l) {
    const c = n[l + 0], h = n[l + 1], u = n[l + 2], f = n[l + 3];
    let d = 3 * h[0] - 2 * c[0] - f[0];
    d *= d;
    let g = 3 * h[1] - 2 * c[1] - f[1];
    g *= g;
    let m = 3 * u[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * u[1] - 2 * f[1] - c[1];
    return y *= y, d < m && (d = m), g < y && (g = y), d + g;
  })(e, t) < r) {
    const n = e[t + 0];
    s.length ? (o = s[s.length - 1], a = n, Math.sqrt(_s(o, a)) > 1 && s.push(n)) : s.push(n), s.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], u = e[t + 3], f = ur(l, c, 0.5), d = ur(c, h, 0.5), g = ur(h, u, 0.5), m = ur(f, d, 0.5), y = ur(d, g, 0.5), C = ur(m, y, 0.5);
    Qa([l, f, m, C], 0, r, s), Qa([C, y, g, u], 0, r, s);
  }
  var o, a;
  return s;
}
function xw(e, t) {
  return ro(e, 0, e.length, t);
}
function ro(e, t, r, i, s) {
  const o = s || [], a = e[t], n = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const u = Cw(e[h], a, n);
    u > l && (l = u, c = h);
  }
  return Math.sqrt(l) > i ? (ro(e, t, c + 1, i, o), ro(e, c, r, i, o)) : (o.length || o.push(a), o.push(n)), o;
}
function sa(e, t = 0.15, r) {
  const i = [], s = (e.length - 1) / 3;
  for (let o = 0; o < s; o++)
    Qa(e, 3 * o, t, i);
  return r && r > 0 ? ro(i, 0, i.length, r) : i;
}
const oe = "none";
class io {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, s, o) {
    const a = this._o(o);
    return this._d("line", [xp(t, r, i, s, a)], a);
  }
  rectangle(t, r, i, s, o) {
    const a = this._o(o), n = [], l = mw(t, r, i, s, a);
    if (a.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + s], [t, r + s]];
      a.fillStyle === "solid" ? n.push(ia([c], a)) : n.push(Er([c], a));
    }
    return a.stroke !== oe && n.push(l), this._d("rectangle", n, a);
  }
  ellipse(t, r, i, s, o) {
    const a = this._o(o), n = [], l = bp(i, s, a), c = Za(t, r, a, l);
    if (a.fill) if (a.fillStyle === "solid") {
      const h = Za(t, r, a, l).opset;
      h.type = "fillPath", n.push(h);
    } else n.push(Er([c.estimatedPoints], a));
    return a.stroke !== oe && n.push(c.opset), this._d("ellipse", n, a);
  }
  circle(t, r, i, s) {
    const o = this.ellipse(t, r, i, i, s);
    return o.shape = "circle", o;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [Ss(t, !1, i)], i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this._o(l), h = [], u = Vh(t, r, i, s, o, a, n, !0, c);
    if (n && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const d = Vh(t, r, i, s, o, a, !0, !1, f);
      d.type = "fillPath", h.push(d);
    } else h.push((function(f, d, g, m, y, C, b) {
      const k = f, w = d;
      let S = Math.abs(g / 2), v = Math.abs(m / 2);
      S += ot(0.01 * S, b), v += ot(0.01 * v, b);
      let B = y, O = C;
      for (; B < 0; ) B += 2 * Math.PI, O += 2 * Math.PI;
      O - B > 2 * Math.PI && (B = 0, O = 2 * Math.PI);
      const N = (O - B) / b.curveStepCount, D = [];
      for (let $ = B; $ <= O; $ += N) D.push([k + S * Math.cos($), w + v * Math.sin($)]);
      return D.push([k + S * Math.cos(O), w + v * Math.sin(O)]), D.push([k, w]), Er([D], b);
    })(t, r, i, s, o, a, c));
    return c.stroke !== oe && h.push(u), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), s = [], o = Xh(t, i);
    if (i.fill && i.fill !== oe) if (i.fillStyle === "solid") {
      const a = Xh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
    } else {
      const a = [], n = t;
      if (n.length) {
        const l = typeof n[0][0] == "number" ? [n] : n;
        for (const c of l) c.length < 3 ? a.push(...c) : c.length === 3 ? a.push(...sa(tc([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : a.push(...sa(tc(c), 10, (1 + i.roughness) / 2));
      }
      a.length && s.push(Er([a], i));
    }
    return i.stroke !== oe && s.push(o), this._d("curve", s, i);
  }
  polygon(t, r) {
    const i = this._o(r), s = [], o = Ss(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? s.push(ia([t], i)) : s.push(Er([t], i))), i.stroke !== oe && s.push(o), this._d("polygon", s, i);
  }
  path(t, r) {
    const i = this._o(r), s = [];
    if (!t) return this._d("path", s, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const o = i.fill && i.fill !== "transparent" && i.fill !== oe, a = i.stroke !== oe, n = !!(i.simplification && i.simplification < 1), l = (function(h, u, f) {
      const d = yp(mp(sl(h))), g = [];
      let m = [], y = [0, 0], C = [];
      const b = () => {
        C.length >= 4 && m.push(...sa(C, u)), C = [];
      }, k = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: S, data: v } of d) switch (S) {
        case "M":
          k(), y = [v[0], v[1]], m.push(y);
          break;
        case "L":
          b(), m.push([v[0], v[1]]);
          break;
        case "C":
          if (!C.length) {
            const B = m.length ? m[m.length - 1] : y;
            C.push([B[0], B[1]]);
          }
          C.push([v[0], v[1]]), C.push([v[2], v[3]]), C.push([v[4], v[5]]);
          break;
        case "Z":
          b(), m.push([y[0], y[1]]);
      }
      if (k(), !f) return g;
      const w = [];
      for (const S of g) {
        const v = xw(S, f);
        v.length && w.push(v);
      }
      return w;
    })(t, 1, n ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = Zh(t, i);
    if (o) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = Zh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else s.push(ia(l, i));
    else s.push(Er(l, i));
    return a && (n ? l.forEach(((h) => {
      s.push(Ss(h, !1, i));
    })) : s.push(c)), this._d("path", s, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const s of t.ops) {
      const o = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          i += `M${o[0]} ${o[1]} `;
          break;
        case "bcurveTo":
          i += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;
          break;
        case "lineTo":
          i += `L${o[0]} ${o[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, s = [];
    for (const o of r) {
      let a = null;
      switch (o.type) {
        case "path":
          a = { d: this.opsToPath(o), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: oe };
          break;
        case "fillPath":
          a = { d: this.opsToPath(o), stroke: oe, strokeWidth: 0, fill: i.fill || oe };
          break;
        case "fillSketch":
          a = this.fillSketch(o, i);
      }
      a && s.push(a);
    }
    return s;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || oe, strokeWidth: i, fill: oe };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class bw {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new io(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.ctx, o = t.options.fixedDecimalPlaceDigits;
    for (const a of r) switch (a.type) {
      case "path":
        s.save(), s.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, s.lineWidth = i.strokeWidth, i.strokeLineDash && s.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (s.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(s, a, o), s.restore();
        break;
      case "fillPath": {
        s.save(), s.fillStyle = i.fill || "";
        const n = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(s, a, o, n), s.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(s, a, i);
    }
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = s, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, s = "nonzero") {
    t.beginPath();
    for (const o of r.ops) {
      const a = typeof i == "number" && i >= 0 ? o.data.map(((n) => +n.toFixed(i))) : o.data;
      switch (o.op) {
        case "move":
          t.moveTo(a[0], a[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "lineTo":
          t.lineTo(a[0], a[1]);
      }
    }
    r.type === "fillPath" ? t.fill(s) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a), a;
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a), a;
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a), a;
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o), o;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const cs = "http://www.w3.org/2000/svg";
class kw {
  constructor(t, r) {
    this.svg = t, this.gen = new io(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.svg.ownerDocument || window.document, o = s.createElementNS(cs, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const n of r) {
      let l = null;
      switch (n.type) {
        case "path":
          l = s.createElementNS(cs, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = s.createElementNS(cs, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(s, n, i);
      }
      l && o.appendChild(l);
    }
    return o;
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2);
    const o = t.createElementNS(cs, "path");
    return o.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), o.setAttribute("stroke", i.fill || ""), o.setAttribute("stroke-width", s + ""), o.setAttribute("fill", "none"), i.fillLineDash && o.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && o.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), o;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a);
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a);
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a);
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var G = { canvas: (e, t) => new bw(e, t), svg: (e, t) => new kw(e, t), generator: (e) => new io(e), newSeed: () => io.newSeed() }, st = /* @__PURE__ */ p(async (e, t, r) => {
  let i;
  const s = t.useHtmlLabels || Ge(gt()?.htmlLabels);
  r ? i = r : i = "node default";
  const o = e.insert("g").attr("class", i).attr("id", t.domId || t.id), a = o.insert("g").attr("class", "label").attr("style", Ot(t.labelStyle));
  let n;
  t.label === void 0 ? n = "" : n = typeof t.label == "string" ? t.label : t.label[0];
  const l = !!t.icon || !!t.img, c = t.labelType === "markdown", h = await je(
    a,
    ke(kr(n), gt()),
    {
      useHtmlLabels: s,
      width: t.width || gt().flowchart?.wrappingWidth,
      classes: c ? "markdown-node-label" : "",
      style: t.labelStyle,
      addSvgBackground: l,
      markdown: c
    },
    gt()
  );
  let u = h.getBBox();
  const f = (t?.padding ?? 0) / 2;
  if (s) {
    const d = h.children[0], g = ct(h);
    await Wf(d, n), u = d.getBoundingClientRect(), g.attr("width", u.width), g.attr("height", u.height);
  }
  return s ? a.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")") : a.attr("transform", "translate(0, " + -u.height / 2 + ")"), t.centerLabel && a.attr("transform", "translate(" + -u.width / 2 + ", " + -u.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: o, bbox: u, halfPadding: f, label: a };
}, "labelHelper"), oa = /* @__PURE__ */ p(async (e, t, r) => {
  const i = r.useHtmlLabels ?? Kt(gt()), s = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), o = await je(s, ke(kr(t), gt()), {
    useHtmlLabels: i,
    width: r.width || gt()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let a = o.getBBox();
  const n = r.padding / 2;
  if (Kt(gt())) {
    const l = o.children[0], c = ct(o);
    a = l.getBoundingClientRect(), c.attr("width", a.width), c.attr("height", a.height);
  }
  return i ? s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")") : s.attr("transform", "translate(0, " + -a.height / 2 + ")"), r.centerLabel && s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: e, bbox: a, halfPadding: n, label: s };
}, "insertLabel"), Z = /* @__PURE__ */ p((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), tt = /* @__PURE__ */ p((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function ft(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
p(ft, "createPathFromPoints");
function sr(e, t, r, i, s, o) {
  const a = [], l = r - e, c = i - t, h = l / o, u = 2 * Math.PI / h, f = t + c / 2;
  for (let d = 0; d <= 50; d++) {
    const g = d / 50, m = e + g * l, y = f + s * Math.sin(u * (m - e));
    a.push({ x: m, y });
  }
  return a;
}
p(sr, "generateFullSineWavePoints");
function Ni(e, t, r, i, s, o) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(Ni, "generateCirclePoints");
function Ja(e) {
  const t = Array.from(e.childNodes).filter(
    (l) => l.tagName === "path"
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = t.map((l) => l.getAttribute("d")).filter((l) => l !== null).join(" ");
  r.setAttribute("d", i);
  const s = t.find((l) => l.getAttribute("fill") !== "none"), o = t.find((l) => l.getAttribute("stroke") !== "none"), a = /* @__PURE__ */ p((l, c) => l?.getAttribute(c) ?? void 0, "getAttr");
  if (s) {
    const l = {
      fill: a(s, "fill"),
      "fill-opacity": a(s, "fill-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  if (o) {
    const l = {
      stroke: a(o, "stroke"),
      "stroke-width": a(o, "stroke-width") ?? "1",
      "stroke-opacity": a(o, "stroke-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.appendChild(r), n;
}
p(Ja, "mergePaths");
var Tw = /* @__PURE__ */ p((e, t) => {
  var r = e.x, i = e.y, s = t.x - r, o = t.y - i, a = e.width / 2, n = e.height / 2, l, c;
  return Math.abs(o) * a > Math.abs(s) * n ? (o < 0 && (n = -n), l = o === 0 ? 0 : n * s / o, c = n) : (s < 0 && (a = -a), l = a, c = s === 0 ? 0 : a * o / s), { x: r + l, y: i + c };
}, "intersectRect"), Jr = Tw, ww = /* @__PURE__ */ p(async (e, t, r, i = !1, s = !1) => {
  let o = t || "";
  typeof o == "object" && (o = o[0]);
  const a = gt(), n = Kt(a);
  return await je(
    e,
    o,
    {
      style: r,
      isTitle: i,
      useHtmlLabels: n,
      markdown: !1,
      isNode: s,
      width: Number.POSITIVE_INFINITY
    },
    a
  );
}, "createLabel"), Ke = ww, or = /* @__PURE__ */ p((e, t, r, i, s) => [
  "M",
  e + s,
  t,
  // Move to the first point
  "H",
  e + r - s,
  // Draw horizontal line to the beginning of the right corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r,
  t + s,
  // Draw arc to the right top corner
  "V",
  t + i - s,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r - s,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + s,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e,
  t + i - s,
  // Draw arc to the left bottom corner
  "V",
  t + s,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + s,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), Tp = /* @__PURE__ */ p(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = V(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = Kt(r), d = u.insert("g").attr("class", "cluster-label ");
  let g;
  t.labelType === "markdown" ? g = await je(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  }) : g = await Ke(d, t.label, t.labelStyle || "", !1, !0);
  let m = g.getBBox();
  if (Kt(r)) {
    const B = g.children[0], O = ct(g);
    m = B.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let w;
  if (t.look === "handDrawn") {
    const B = G.svg(u), O = j(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 3,
      seed: s
    }), N = B.path(or(b, k, y, C, 0), O);
    w = u.insert(() => (P.debug("Rough node insert CXC", N), N), ":first-child"), w.select("path:nth-child(2)").attr("style", c.join(";")), w.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    w = u.insert("rect", ":first-child"), w.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: S } = Gn(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + S})`
  ), n) {
    const B = d.select("span");
    B && B.attr("style", n);
  }
  const v = w.node().getBBox();
  return t.offsetX = 0, t.width = v.width, t.height = v.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
    return Jr(t, B);
  }, { cluster: u, labelBBox: m };
}, "rect"), Sw = /* @__PURE__ */ p((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), i = r.insert("rect", ":first-child"), s = 0 * t.padding, o = s / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const a = i.node().getBBox();
  return t.width = a.width, t.height = a.height, t.intersect = function(n) {
    return Jr(t, n);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), _w = /* @__PURE__ */ p(async (e, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: s } = r, { altBackground: o, compositeBackground: a, compositeTitleBackground: n, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), u = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const d = await Ke(u, t.label, t.labelStyle, void 0, !0);
  let g = d.getBBox();
  if (Kt(r)) {
    const N = d.children[0], D = ct(d);
    g = N.getBoundingClientRect(), D.attr("width", g.width), D.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, C = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (C - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, k = t.height + m - g.height - 6, w = t.x - C / 2, S = t.y - b / 2;
  t.width = C;
  const v = t.y - t.height / 2 - y + g.height + 2;
  let B;
  if (t.look === "handDrawn") {
    const N = t.cssClasses.includes("statediagram-cluster-alt"), D = G.svg(c), $ = t.rx || t.ry ? D.path(or(w, S, C, b, 10), {
      roughness: 0.7,
      fill: n,
      fillStyle: "solid",
      stroke: l,
      seed: s
    }) : D.rectangle(w, S, C, b, { seed: s });
    B = c.insert(() => $, ":first-child");
    const z = D.rectangle(w, v, C, k, {
      fill: N ? o : a,
      fillStyle: N ? "hachure" : "solid",
      stroke: l,
      seed: s
    });
    B = c.insert(() => $, ":first-child"), f = c.insert(() => z);
  } else
    B = h.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", w).attr("y", S).attr("width", C).attr("height", b).attr("data-look", t.look), f.attr("class", "inner").attr("x", w).attr("y", v).attr("width", C).attr("height", k);
  u.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${S + 1 - (Kt(r) ? 0 : 3)})`
  );
  const O = B.node().getBBox();
  return t.height = O.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(N) {
    return Jr(t, N);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), vw = /* @__PURE__ */ p(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = V(t), u = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = Kt(r), d = u.insert("g").attr("class", "cluster-label "), g = await je(d, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (Kt(r)) {
    const B = g.children[0], O = ct(g);
    m = B.getBoundingClientRect(), O.attr("width", m.width), O.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let w;
  if (t.look === "handDrawn") {
    const B = G.svg(u), O = j(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 4,
      seed: s
    }), N = B.path(or(b, k, y, C, t.rx), O);
    w = u.insert(() => (P.debug("Rough node insert CXC", N), N), ":first-child"), w.select("path:nth-child(2)").attr("style", c.join(";")), w.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    w = u.insert("rect", ":first-child"), w.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: S } = Gn(r);
  if (d.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + S})`
  ), n) {
    const B = d.select("span");
    B && B.attr("style", n);
  }
  const v = w.node().getBBox();
  return t.offsetX = 0, t.width = v.width, t.height = v.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
    return Jr(t, B);
  }, { cluster: u, labelBBox: m };
}, "kanbanSection"), Bw = /* @__PURE__ */ p((e, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: s } = r, { nodeBorder: o } = i, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), n = a.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, u = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let d;
  if (t.look === "handDrawn") {
    const y = G.svg(a).rectangle(u, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: o,
      seed: s
    });
    d = a.insert(() => y, ":first-child");
  } else {
    d = n.insert("rect", ":first-child");
    let m = "outer";
    t.look, m = "divider", d.attr("class", m).attr("x", u).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  }
  const g = d.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Jr(t, m);
  }, { cluster: a, labelBBox: {} };
}, "divider"), Lw = Tp, Fw = {
  rect: Tp,
  squareRect: Lw,
  roundedWithTitle: _w,
  noteGroup: Sw,
  divider: Bw,
  kanbanSection: vw
}, wp = /* @__PURE__ */ new Map(), Aw = /* @__PURE__ */ p(async (e, t) => {
  const r = t.shape || "rect", i = await Fw[r](e, t);
  return wp.set(t.id, i), i;
}, "insertCluster"), $L = /* @__PURE__ */ p(() => {
  wp = /* @__PURE__ */ new Map();
}, "clear");
function Sp(e, t) {
  return e.intersect(t);
}
p(Sp, "intersectNode");
var Ew = Sp;
function _p(e, t, r, i) {
  var s = e.x, o = e.y, a = s - i.x, n = o - i.y, l = Math.sqrt(t * t * n * n + r * r * a * a), c = Math.abs(t * r * a / l);
  i.x < s && (c = -c);
  var h = Math.abs(t * r * n / l);
  return i.y < o && (h = -h), { x: s + c, y: o + h };
}
p(_p, "intersectEllipse");
var vp = _p;
function Bp(e, t, r) {
  return vp(e, t, t, r);
}
p(Bp, "intersectCircle");
var Mw = Bp;
function Lp(e, t, r, i) {
  {
    const s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, n = s * r.x + o * r.y + a, l = s * i.x + o * i.y + a, c = 1e-6;
    if (n !== 0 && l !== 0 && tn(n, l))
      return;
    const h = i.y - r.y, u = r.x - i.x, f = i.x * r.y - r.x * i.y, d = h * e.x + u * e.y + f, g = h * t.x + u * t.y + f;
    if (Math.abs(d) < c && Math.abs(g) < c && tn(d, g))
      return;
    const m = s * u - h * o;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let C = o * f - u * a;
    const b = C < 0 ? (C - y) / m : (C + y) / m;
    C = h * a - s * f;
    const k = C < 0 ? (C - y) / m : (C + y) / m;
    return { x: b, y: k };
  }
}
p(Lp, "intersectLine");
function tn(e, t) {
  return e * t > 0;
}
p(tn, "sameSign");
var $w = Lp;
function Fp(e, t, r) {
  let i = e.x, s = e.y, o = [], a = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    a = Math.min(a, h.x), n = Math.min(n, h.y);
  }) : (a = Math.min(a, t.x), n = Math.min(n, t.y));
  let l = i - e.width / 2 - a, c = s - e.height / 2 - n;
  for (let h = 0; h < t.length; h++) {
    let u = t[h], f = t[h < t.length - 1 ? h + 1 : 0], d = $w(
      e,
      r,
      { x: l + u.x, y: c + u.y },
      { x: l + f.x, y: c + f.y }
    );
    d && o.push(d);
  }
  return o.length ? (o.length > 1 && o.sort(function(h, u) {
    let f = h.x - r.x, d = h.y - r.y, g = Math.sqrt(f * f + d * d), m = u.x - r.x, y = u.y - r.y, C = Math.sqrt(m * m + y * y);
    return g < C ? -1 : g === C ? 0 : 1;
  }), o[0]) : e;
}
p(Fp, "intersectPolygon");
var Iw = Fp, Y = {
  node: Ew,
  circle: Mw,
  ellipse: vp,
  polygon: Iw,
  rect: Jr
};
function Ap(e, t) {
  const { labelStyles: r } = V(t);
  t.labelStyle = r;
  const i = tt(t);
  let s = i;
  i || (s = "anchor");
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = 1, { cssStyles: n } = t, l = G.svg(o), c = j(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, a * 2, c), u = o.insert(() => h, ":first-child");
  return u.attr("class", "anchor").attr("style", Ot(n)), Z(t, u), t.intersect = function(f) {
    return P.info("Circle intersect", t, a, f), Y.circle(t, a, f);
  }, o;
}
p(Ap, "anchor");
function en(e, t, r, i, s, o, a) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), u = (r - e) / 2, f = (i - t) / 2, d = u / s, g = f / o, m = Math.sqrt(d ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), C = l + y * o * Math.sin(h) * (a ? -1 : 1), b = c - y * s * Math.cos(h) * (a ? -1 : 1), k = Math.atan2((t - b) / o, (e - C) / s);
  let S = Math.atan2((i - b) / o, (r - C) / s) - k;
  a && S < 0 && (S += 2 * Math.PI), !a && S > 0 && (S -= 2 * Math.PI);
  const v = [];
  for (let B = 0; B < 20; B++) {
    const O = B / 19, N = k + O * S, D = C + s * Math.cos(N), $ = b + o * Math.sin(N);
    v.push({ x: D, y: $ });
  }
  return v;
}
p(en, "generateArcPoints");
function Ep(e, t, r) {
  const [i, s] = [t, r].sort((o, a) => a - o);
  return s * (1 - Math.sqrt(1 - (e / i / 2) ** 2));
}
p(Ep, "calculateArcSagitta");
async function Mp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = /* @__PURE__ */ p((N) => N + a, "calcTotalHeight"), l = /* @__PURE__ */ p((N) => {
    const D = N / 2;
    return [D / (2.5 + N / 50), D];
  }, "calcEllipseRadius"), { shapeSvg: c, bbox: h } = await st(e, t, tt(t)), u = n(t?.height ? t?.height : h.height), [f, d] = l(u), g = Ep(u, f, d), y = (t?.width ? t?.width : h.width) + o * 2 + g - g, C = u, { cssStyles: b } = t, k = [
    { x: y / 2, y: -C / 2 },
    { x: -y / 2, y: -C / 2 },
    ...en(-y / 2, -C / 2, -y / 2, C / 2, f, d, !1),
    { x: y / 2, y: C / 2 },
    ...en(y / 2, C / 2, y / 2, -C / 2, f, d, !0)
  ], w = G.svg(c), S = j(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const v = ft(k), B = w.path(v, S), O = c.insert(() => B, ":first-child");
  return O.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && O.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(${f / 2}, 0)`), Z(t, O), t.intersect = function(N) {
    return Y.polygon(t, k, N);
  }, c;
}
p(Mp, "bowTieRect");
function Xe(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(s) {
      return s.x + "," + s.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
p(Xe, "insertPolygonShape");
var us = 12;
async function $p(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 24 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.width ?? l.width) + (t.look === "neo" ? o * 2 : o + us), h = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), u = 0, f = c, d = -h, g = 0, m = [
    { x: u + us, y: d },
    { x: f, y: d },
    { x: f, y: g },
    { x: u, y: g },
    { x: u, y: d + us },
    { x: u + us, y: d }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = G.svg(n), k = j(t, {}), w = ft(m), S = b.path(w, k);
    y = n.insert(() => S, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), C && y.attr("style", C);
  } else
    y = Xe(n, c, h, m);
  return i && y.attr("style", i), Z(t, y), t.intersect = function(b) {
    return Y.polygon(t, m, b);
  }, n;
}
p($p, "card");
function Ip(e, t) {
  const { nodeStyles: r } = V(t);
  t.label = "";
  const i = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, o = Math.max(28, t.width ?? 0), a = [
    { x: 0, y: o / 2 },
    { x: o / 2, y: 0 },
    { x: 0, y: -o / 2 },
    { x: -o / 2, y: 0 }
  ], n = G.svg(i), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = ft(a), h = n.path(c, l), u = i.insert(() => h, ":first-child");
  return s && t.look !== "handDrawn" && u.selectAll("path").attr("style", s), r && t.look !== "handDrawn" && u.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return Y.polygon(t, a, f);
  }, i;
}
p(Ip, "choice");
async function ol(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, halfPadding: n } = await st(e, t, tt(t)), l = 16, c = r?.padding ?? n, h = t.look === "neo" ? a.width / 2 + l * 2 : a.width / 2 + c;
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = G.svg(o), g = j(t, {}), m = d.circle(0, 0, h * 2, g);
    u = o.insert(() => m, ":first-child"), u.attr("class", "basic label-container").attr("style", Ot(f));
  } else
    u = o.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", s).attr("r", h).attr("cx", 0).attr("cy", 0);
  return Z(t, u), t.calcIntersect = function(d, g) {
    const m = d.width / 2;
    return Y.circle(d, m, g);
  }, t.intersect = function(d) {
    return P.info("Circle intersect", t, h, d), Y.circle(t, h, d);
  }, o;
}
p(ol, "circle");
function Op(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, s = { x: i / 2 * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: -(i / 2) * r }, n = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${o.x},${o.y} L ${n.x},${n.y}
                   M ${s.x},${s.y} L ${a.x},${a.y}`;
}
p(Op, "createLine");
function Dp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r, t.label = "";
  const s = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), o = Math.max(30, t?.width ?? 0), { cssStyles: a } = t, n = G.svg(s), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = n.circle(0, 0, o * 2, l), h = Op(o), u = n.path(h, l), f = s.insert(() => c, ":first-child");
  return f.insert(() => u), f.attr("class", "outer-path"), a && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), Z(t, f), t.intersect = function(d) {
    return P.info("crossedCircle intersect", t, { radius: o, point: d }), Y.circle(t, o, d);
  }, s;
}
p(Dp, "crossedCircle");
function Ne(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(Ne, "generateCirclePoints");
async function Rp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + n, h = o.height + l, u = Math.max(5, h * 0.1), { cssStyles: f } = t, d = [
    ...Ne(c / 2, -h / 2, u, 30, -90, 0),
    { x: -c / 2 - u, y: u },
    ...Ne(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Ne(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: -h / 2 },
    ...Ne(c / 2, h / 2, u, 20, 0, 90)
  ], g = [
    { x: c / 2, y: -h / 2 - u },
    { x: -c / 2, y: -h / 2 - u },
    ...Ne(c / 2, -h / 2, u, 20, -90, 0),
    { x: -c / 2 - u, y: -u },
    ...Ne(c / 2 + c * 0.1, -u, u, 20, -180, -270),
    ...Ne(c / 2 + c * 0.1, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: h / 2 },
    ...Ne(c / 2, h / 2, u, 20, 0, 90),
    { x: -c / 2, y: h / 2 + u },
    { x: c / 2, y: h / 2 + u }
  ], m = G.svg(s), y = j(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = ft(d).replace("Z", ""), k = m.path(b, y), w = ft(g), S = m.path(w, { ...y }), v = s.insert("g", ":first-child");
  return v.insert(() => S, ":first-child").attr("stroke-opacity", 0), v.insert(() => k, ":first-child"), v.attr("class", "text"), f && t.look !== "handDrawn" && v.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${u}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + u - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return Y.polygon(t, g, B);
  }, s;
}
p(Rp, "curlyBraceLeft");
function qe(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: d, y: g });
  }
  return a;
}
p(qe, "generateCirclePoints");
async function Pp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, h * 0.1), { cssStyles: f } = t, d = [
    ...qe(c / 2, -h / 2, u, 20, -90, 0),
    { x: c / 2 + u, y: -u },
    ...qe(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...qe(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: c / 2 + u, y: h / 2 },
    ...qe(c / 2, h / 2, u, 20, 0, 90)
  ], g = [
    { x: -c / 2, y: -h / 2 - u },
    { x: c / 2, y: -h / 2 - u },
    ...qe(c / 2, -h / 2, u, 20, -90, 0),
    { x: c / 2 + u, y: -u },
    ...qe(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...qe(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: c / 2 + u, y: h / 2 },
    ...qe(c / 2, h / 2, u, 20, 0, 90),
    { x: c / 2, y: h / 2 + u },
    { x: -c / 2, y: h / 2 + u }
  ], m = G.svg(s), y = j(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = ft(d).replace("Z", ""), k = m.path(b, y), w = ft(g), S = m.path(w, { ...y }), v = s.insert("g", ":first-child");
  return v.insert(() => S, ":first-child").attr("stroke-opacity", 0), v.insert(() => k, ":first-child"), v.attr("class", "text"), f && t.look !== "handDrawn" && v.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-u}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return Y.polygon(t, g, B);
  }, s;
}
p(Pp, "curlyBraceRight");
function Rt(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let u = 0; u < i; u++) {
    const f = n + u * h, d = e + r * Math.cos(f), g = t + r * Math.sin(f);
    a.push({ x: -d, y: -g });
  }
  return a;
}
p(Rt, "generateCirclePoints");
async function Np(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), u = Math.max(5, h * 0.1), { cssStyles: f } = t, d = [
    ...Rt(c / 2, -h / 2, u, 30, -90, 0),
    { x: -c / 2 - u, y: u },
    ...Rt(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Rt(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: -h / 2 },
    ...Rt(c / 2, h / 2, u, 20, 0, 90)
  ], g = [
    ...Rt(-c / 2 + u + u / 2, -h / 2, u, 20, -90, -180),
    { x: c / 2 - u / 2, y: u },
    ...Rt(-c / 2 - u / 2, -u, u, 20, 0, 90),
    ...Rt(-c / 2 - u / 2, u, u, 20, -90, 0),
    { x: c / 2 - u / 2, y: -u },
    ...Rt(-c / 2 + u + u / 2, h / 2, u, 30, -180, -270)
  ], m = [
    { x: c / 2, y: -h / 2 - u },
    { x: -c / 2, y: -h / 2 - u },
    ...Rt(c / 2, -h / 2, u, 20, -90, 0),
    { x: -c / 2 - u, y: -u },
    ...Rt(c / 2 + u * 2, -u, u, 20, -180, -270),
    ...Rt(c / 2 + u * 2, u, u, 20, -90, -180),
    { x: -c / 2 - u, y: h / 2 },
    ...Rt(c / 2, h / 2, u, 20, 0, 90),
    { x: -c / 2, y: h / 2 + u },
    { x: c / 2 - u - u / 2, y: h / 2 + u },
    ...Rt(-c / 2 + u + u / 2, -h / 2, u, 20, -90, -180),
    { x: c / 2 - u / 2, y: u },
    ...Rt(-c / 2 - u / 2, -u, u, 20, 0, 90),
    ...Rt(-c / 2 - u / 2, u, u, 20, -90, 0),
    { x: c / 2 - u / 2, y: -u },
    ...Rt(-c / 2 + u + u / 2, h / 2, u, 30, -180, -270)
  ], y = G.svg(s), C = j(t, { fill: "none" });
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = ft(d).replace("Z", ""), w = y.path(k, C), v = ft(g).replace("Z", ""), B = y.path(v, C), O = ft(m), N = y.path(O, { ...C }), D = s.insert("g", ":first-child");
  return D.insert(() => N, ":first-child").attr("stroke-opacity", 0), D.insert(() => w, ":first-child"), D.insert(() => B, ":first-child"), D.attr("class", "text"), f && t.look !== "handDrawn" && D.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(${u - u / 4}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Z(t, D), t.intersect = function($) {
    return Y.polygon(t, m, $);
  }, s;
}
p(Np, "curlyBraces");
async function qp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 20, l = 5, { shapeSvg: c, bbox: h } = await st(e, t, tt(t)), u = Math.max(n, (h.width + o * 2) * 1.25, t?.width ?? 0), f = Math.max(l, h.height + a * 2, t?.height ?? 0), d = f / 2, { cssStyles: g } = t, m = G.svg(c), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = u, b = f, k = C - d, w = b / 4, S = [
    { x: k, y: 0 },
    { x: w, y: 0 },
    { x: 0, y: b / 2 },
    { x: w, y: b },
    { x: k, y: b },
    ...Ni(-k, -b / 2, d, 50, 270, 90)
  ], v = ft(S), B = m.path(v, y), O = c.insert(() => B, ":first-child");
  return O.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && O.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && O.selectChildren("path").attr("style", i), O.attr("transform", `translate(${-u / 2}, ${-f / 2})`), Z(t, O), t.intersect = function(N) {
    return Y.polygon(t, S, N);
  }, c;
}
p(qp, "curvedTrapezoid");
var Ow = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), Dw = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), Rw = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), ec = 8, rc = 8;
async function Wp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 24 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const y = t.width ?? 0;
    t.width = (t.width ?? 0) - a, t.width < rc && (t.width = rc);
    const b = y / 2 / (2.5 + y / 50);
    t.height = (t.height ?? 0) - o - b * 3, t.height < ec && (t.height = ec);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, tt(t)), h = (t.width ? t.width : l.width) + a, u = h / 2, f = u / (2.5 + h / 50), d = (t.height ? t.height : l.height) + o + f;
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = G.svg(n), C = Dw(0, 0, h, d, u, f), b = Rw(0, f, h, d, u, f), k = j(t, {}), w = y.path(C, k), S = y.path(b, j(t, { fill: "none" }));
    g = n.insert(() => S, ":first-child"), g = n.insert(() => w, ":first-child"), g.attr("class", "basic label-container"), m && g.attr("style", m);
  } else {
    const y = Ow(0, 0, h, d, u, f);
    g = n.insert("path", ":first-child").attr("d", y).attr("class", "basic label-container outer-path").attr("style", Ot(m)).attr("style", i);
  }
  return g.attr("label-offset-y", f), g.attr("transform", `translate(${-h / 2}, ${-(d / 2 + f)})`), Z(t, g), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + (t.padding ?? 0) / 1.5 - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(y) {
    const C = Y.rect(t, y), b = C.x - (t.x ?? 0);
    if (u != 0 && (Math.abs(b) < (t.width ?? 0) / 2 || Math.abs(b) == (t.width ?? 0) / 2 && Math.abs(C.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let k = f * f * (1 - b * b / (u * u));
      k > 0 && (k = Math.sqrt(k)), k = f - k, y.y - (t.y ?? 0) > 0 && (k = -k), C.y += k;
    }
    return C;
  }, n;
}
p(Wp, "cylinder");
async function ti(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a } = await st(e, t, tt(t)), n = Math.max(a.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(a.height + r.labelPaddingY * 2, t?.height || 0), c = -n / 2, h = -l / 2;
  let u, { rx: f, ry: d } = t;
  const { cssStyles: g } = t;
  if (r?.rx && r.ry && (f = r.rx, d = r.ry), t.look === "handDrawn") {
    const m = G.svg(o), y = j(t, {}), C = f || d ? m.path(or(c, h, n, l, f || 0), y) : m.rectangle(c, h, n, l, y);
    u = o.insert(() => C, ":first-child"), u.attr("class", "basic label-container").attr("style", Ot(g));
  } else
    u = o.insert("rect", ":first-child"), u.attr("class", "basic label-container").attr("style", s).attr("rx", Ot(f)).attr("ry", Ot(d)).attr("x", c).attr("y", h).attr("width", n).attr("height", l);
  return Z(t, u), t.calcIntersect = function(m, y) {
    return Y.rect(m, y);
  }, t.intersect = function(m) {
    return Y.rect(t, m);
  }, o;
}
p(ti, "drawRect");
async function zp(e, t) {
  const { cssClasses: r, labelPaddingX: i, labelPaddingY: s, padding: o, width: a, height: n } = t, l = {
    rx: 0,
    ry: 0,
    labelPaddingX: i ?? (o ?? 0) * 2,
    labelPaddingY: s ?? o ?? 0
  }, c = await ti(e, t, l);
  if (t.look === "handDrawn") {
    const d = G.svg(c), g = j(t, {}), m = c.select(".basic.label-container > path:nth-child(2)"), y = m.node();
    if (!y)
      return c;
    let C = null;
    if (y instanceof SVGGraphicsElement)
      C = y.getBBox();
    else
      return c;
    return c.insert(
      () => d.line(C.x, C.y, C.x + C.width, C.y, g),
      ".basic.label-container g.label"
    ), c.insert(
      () => d.line(
        C.x,
        C.y + C.height,
        C.x + C.width,
        C.y + C.height,
        g
      ),
      ".basic.label-container g.label"
    ), m.remove(), c;
  }
  const h = c.select(".basic.label-container"), u = (Number(h.attr("width")) || a) ?? 0, f = (Number(h.attr("height")) || n) ?? 0;
  return u > 0 && f > 0 && h.attr("stroke-dasharray", `${u} ${f}`), c;
}
p(zp, "datastore");
async function Hp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = n.width + s, h = n.height + o, u = h * 0.2, f = -c / 2, d = -h / 2 - u / 2, { cssStyles: g } = t, m = G.svg(a), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: f, y: d + u },
    { x: -f, y: d + u },
    { x: -f, y: -d },
    { x: f, y: -d },
    { x: f, y: d },
    { x: -f, y: d },
    { x: -f, y: d + u }
  ], b = m.polygon(
    C.map((w) => [w.x, w.y]),
    y
  ), k = a.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${f + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${d + u + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), Z(t, k), t.intersect = function(w) {
    return Y.rect(t, w);
  }, a;
}
p(Hp, "dividedRectangle");
async function Up(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t), s = t.look === "neo" ? 12 : 5;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = t.look === "neo" ? 16 : o, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.width ? t?.width / 2 : l.width / 2) + (a ?? 0), h = c - s;
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = G.svg(n), g = j(t, { roughness: 0.2, strokeWidth: 2.5 }), m = j(t, { roughness: 0.2, strokeWidth: 1.5 }), y = d.circle(0, 0, c * 2, g), C = d.circle(0, 0, h * 2, m);
    u = n.insert("g", ":first-child"), u.attr("class", Ot(t.cssClasses)).attr("style", Ot(f)), u.node()?.appendChild(y), u.node()?.appendChild(C);
  } else {
    u = n.insert("g", ":first-child");
    const d = u.insert("circle", ":first-child"), g = u.insert("circle");
    u.attr("class", "basic label-container").attr("style", i), d.attr("class", "outer-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0), g.attr("class", "inner-circle").attr("style", i).attr("r", h).attr("cx", 0).attr("cy", 0);
  }
  return Z(t, u), t.intersect = function(d) {
    return P.info("DoubleCircle intersect", t, c, d), Y.circle(t, c, d);
  }, n;
}
p(Up, "doublecircle");
function Yp(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.label = "", t.labelStyle = i;
  const o = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), a = 7, { cssStyles: n } = t, l = G.svg(o), { nodeBorder: c } = r, h = j(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const u = l.circle(0, 0, a * 2, h), f = o.insert(() => u, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), n && n.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), Z(t, f), t.intersect = function(d) {
    return P.info("filledCircle intersect", t, { radius: a, point: d }), Y.circle(t, a, d);
  }, o;
}
p(Yp, "filledCircle");
var ic = 10, sc = 10;
async function Gp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.height = t?.height ?? 0, t.height < ic && (t.height = ic), t.width = (t?.width ?? 0) - o - o / 2, t.width < sc && (t.width = sc));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = (t?.width ? t?.width : n.width) + (o ?? 0), h = t?.height ? t?.height : c + n.height, u = h, f = [
    { x: 0, y: -h },
    { x: u, y: -h },
    { x: u / 2, y: 0 }
  ], { cssStyles: d } = t, g = G.svg(a), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = ft(f), C = g.path(y, m), b = a.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`).attr("class", "outer-path");
  return d && t.look !== "handDrawn" && b.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), t.width = c, t.height = h, Z(t, b), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-h / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(k) {
    return P.info("Triangle intersect", t, f, k), Y.polygon(t, f, k);
  }, a;
}
p(Gp, "flippedTriangle");
function jp(e, t, { dir: r, config: { state: i, themeVariables: s } }) {
  const { nodeStyles: o } = V(t);
  t.label = "";
  const a = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, u = -1 * c / 2, f = G.svg(a), d = j(t, {
    stroke: s.lineColor,
    fill: s.lineColor
  });
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const g = f.rectangle(h, u, l, c, d), m = a.insert(() => g, ":first-child");
  n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), Z(t, m);
  const y = i?.padding ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(C) {
    return Y.rect(t, C);
  }, a;
}
p(jp, "forkJoin");
async function Xp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = 15, o = 10, a = t.look === "neo" ? 16 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.height = (t?.height ?? 0) - n * 2, t.height < o && (t.height = o), t.width = (t?.width ?? 0) - a * 2, t.width < s && (t.width = s));
  const { shapeSvg: l, bbox: c } = await st(e, t, tt(t)), h = (t?.width ? t?.width : Math.max(s, c.width)) + a * 2, u = (t?.height ? t?.height : Math.max(o, c.height)) + n * 2, f = u / 2, { cssStyles: d } = t, g = G.svg(l), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -h / 2, y: -u / 2 },
    { x: h / 2 - f, y: -u / 2 },
    ...Ni(-h / 2 + f, 0, f, 50, 90, 270),
    { x: h / 2 - f, y: u / 2 },
    { x: -h / 2, y: u / 2 }
  ], C = ft(y), b = g.path(C, m), k = l.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Z(t, k), t.intersect = function(w) {
    return P.info("Pill intersect", t, { radius: f, point: w }), Y.polygon(t, y, w);
  }, l;
}
p(Xp, "halfRoundedRectangle");
var Pw = /* @__PURE__ */ p((e, t, r, i, s) => [
  `M${e + s},${t}`,
  `L${e + r - s},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - s},${t - i}`,
  `L${e + s},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function Vp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t), s = t.look === "neo" ? 3.5 : 4;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = 70, n = 32, l = t.look === "neo" ? a : o, c = t.look === "neo" ? n : o;
  if (t.width || t.height) {
    const k = (t.height ?? 0) / s;
    t.width = (t?.width ?? 0) - 2 * k - c, t.height = (t.height ?? 0) - l;
  }
  const { shapeSvg: h, bbox: u } = await st(e, t, tt(t)), f = (t?.height ? t?.height : u.height) + l, d = f / s, g = (t?.width ? t?.width : u.width) + 2 * d + c, m = [
    { x: d, y: 0 },
    { x: g - d, y: 0 },
    { x: g, y: -f / 2 },
    { x: g - d, y: -f },
    { x: d, y: -f },
    { x: 0, y: -f / 2 }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = G.svg(h), k = j(t, {}), w = Pw(0, 0, g, f, d), S = b.path(w, k);
    y = h.insert(() => S, ":first-child").attr("transform", `translate(${-g / 2}, ${f / 2})`), C && y.attr("style", C);
  } else
    y = Xe(h, g, f, m);
  return i && y.attr("style", i), t.width = g, t.height = f, Z(t, y), t.intersect = function(b) {
    return Y.polygon(t, m, b);
  }, h;
}
p(Vp, "hexagon");
async function Zp(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: s } = await st(e, t, tt(t)), o = Math.max(30, t?.width ?? 0), a = Math.max(30, t?.height ?? 0), { cssStyles: n } = t, l = G.svg(s), c = j(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: 0, y: a },
    { x: o, y: a }
  ], u = ft(h), f = l.path(u, c), d = s.insert(() => f, ":first-child");
  return d.attr("class", "basic label-container outer-path"), n && t.look !== "handDrawn" && d.selectChildren("path").attr("style", n), i && t.look !== "handDrawn" && d.selectChildren("path").attr("style", i), d.attr("transform", `translate(${-o / 2}, ${-a / 2})`), Z(t, d), t.intersect = function(g) {
    return P.info("Pill intersect", t, { points: h }), Y.polygon(t, h, g);
  }, s;
}
p(Zp, "hourglass");
async function Kp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = V(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await st(e, t, "icon-shape default"), f = t.pos === "t", d = n, g = n, { nodeBorder: m } = r, { stylesMap: y } = Qr(t), C = -g / 2, b = -d / 2, k = t.label ? 8 : 0, w = G.svg(c), S = j(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const v = w.rectangle(C, b, g, d, S), B = Math.max(g, h.width), O = d + h.height + k, N = w.rectangle(-B / 2, -O / 2, B, O, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), D = c.insert(() => v, ":first-child"), $ = c.insert(() => N);
  if (t.icon) {
    const z = c.append("g");
    z.html(
      `<g>${await Vi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const W = z.node().getBBox(), I = W.width, F = W.height, L = W.x, M = W.y;
    z.attr(
      "transform",
      `translate(${-I / 2 - L},${f ? h.height / 2 + k / 2 - F / 2 - M : -h.height / 2 - k / 2 - F / 2 - M})`
    ), z.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -O / 2 : O / 2 - h.height})`
  ), D.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), Z(t, $), t.intersect = function(z) {
    if (P.info("iconSquare intersect", t, z), !t.label)
      return Y.rect(t, z);
    const W = t.x ?? 0, I = t.y ?? 0, F = t.height ?? 0;
    let L = [];
    return f ? L = [
      { x: W - h.width / 2, y: I - F / 2 },
      { x: W + h.width / 2, y: I - F / 2 },
      { x: W + h.width / 2, y: I - F / 2 + h.height + k },
      { x: W + g / 2, y: I - F / 2 + h.height + k },
      { x: W + g / 2, y: I + F / 2 },
      { x: W - g / 2, y: I + F / 2 },
      { x: W - g / 2, y: I - F / 2 + h.height + k },
      { x: W - h.width / 2, y: I - F / 2 + h.height + k }
    ] : L = [
      { x: W - g / 2, y: I - F / 2 },
      { x: W + g / 2, y: I - F / 2 },
      { x: W + g / 2, y: I - F / 2 + d },
      { x: W + h.width / 2, y: I - F / 2 + d },
      { x: W + h.width / 2 / 2, y: I + F / 2 },
      { x: W - h.width / 2, y: I + F / 2 },
      { x: W - h.width / 2, y: I - F / 2 + d },
      { x: W - g / 2, y: I - F / 2 + d }
    ], Y.polygon(t, L, z);
  }, c;
}
p(Kp, "icon");
async function Qp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = V(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: u } = await st(e, t, "icon-shape default"), f = 20, d = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: C } = Qr(t), b = G.svg(c), k = j(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const w = C.get("fill");
  k.stroke = w ?? y;
  const S = c.append("g");
  t.icon && S.html(
    `<g>${await Vi(t.icon, {
      height: n,
      width: n,
      fallbackPrefix: ""
    })}</g>`
  );
  const v = S.node().getBBox(), B = v.width, O = v.height, N = v.x, D = v.y, $ = Math.max(B, O) * Math.SQRT2 + f * 2, z = b.circle(0, 0, $, k), W = Math.max($, h.width), I = $ + h.height + d, F = b.rectangle(-W / 2, -I / 2, W, I, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), L = c.insert(() => z, ":first-child"), M = c.insert(() => F);
  return S.attr(
    "transform",
    `translate(${-B / 2 - N},${g ? h.height / 2 + d / 2 - O / 2 - D : -h.height / 2 - d / 2 - O / 2 - D})`
  ), S.attr("style", `color: ${C.get("stroke") ?? m};`), u.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -I / 2 : I / 2 - h.height})`
  ), L.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + d / 2 : -h.height / 2 - d / 2})`
  ), Z(t, M), t.intersect = function(R) {
    return P.info("iconSquare intersect", t, R), Y.rect(t, R);
  }, c;
}
p(Qp, "iconCircle");
async function Jp(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = V(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await st(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = n + u * 2, m = n + u * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Qr(t), k = -m / 2, w = -g / 2, S = t.label ? 8 : 0, v = G.svg(c), B = j(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  const O = b.get("fill");
  B.stroke = O ?? C;
  const N = v.path(or(k, w, m, g, 5), B), D = Math.max(m, h.width), $ = g + h.height + S, z = v.rectangle(-D / 2, -$ / 2, D, $, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child").attr("class", "icon-shape2"), I = c.insert(() => z);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await Vi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const L = F.node().getBBox(), M = L.width, R = L.height, H = L.x, U = L.y;
    F.attr(
      "transform",
      `translate(${-M / 2 - H},${d ? h.height / 2 + S / 2 - R / 2 - U : -h.height / 2 - S / 2 - R / 2 - U})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -$ / 2 : $ / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + S / 2 : -h.height / 2 - S / 2})`
  ), Z(t, I), t.intersect = function(F) {
    if (P.info("iconSquare intersect", t, F), !t.label)
      return Y.rect(t, F);
    const L = t.x ?? 0, M = t.y ?? 0, R = t.height ?? 0;
    let H = [];
    return d ? H = [
      { x: L - h.width / 2, y: M - R / 2 },
      { x: L + h.width / 2, y: M - R / 2 },
      { x: L + h.width / 2, y: M - R / 2 + h.height + S },
      { x: L + m / 2, y: M - R / 2 + h.height + S },
      { x: L + m / 2, y: M + R / 2 },
      { x: L - m / 2, y: M + R / 2 },
      { x: L - m / 2, y: M - R / 2 + h.height + S },
      { x: L - h.width / 2, y: M - R / 2 + h.height + S }
    ] : H = [
      { x: L - m / 2, y: M - R / 2 },
      { x: L + m / 2, y: M - R / 2 },
      { x: L + m / 2, y: M - R / 2 + g },
      { x: L + h.width / 2, y: M - R / 2 + g },
      { x: L + h.width / 2 / 2, y: M + R / 2 },
      { x: L - h.width / 2, y: M + R / 2 },
      { x: L - h.width / 2, y: M - R / 2 + g },
      { x: L - m / 2, y: M - R / 2 + g }
    ], Y.polygon(t, H, F);
  }, c;
}
p(Jp, "iconRounded");
async function tg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = V(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: u, label: f } = await st(
    e,
    t,
    "icon-shape default"
  ), d = t.pos === "t", g = n + u * 2, m = n + u * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Qr(t), k = -m / 2, w = -g / 2, S = t.label ? 8 : 0, v = G.svg(c), B = j(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  const O = b.get("fill");
  B.stroke = O ?? C;
  const N = v.path(or(k, w, m, g, 0.1), B), D = Math.max(m, h.width), $ = g + h.height + S, z = v.rectangle(-D / 2, -$ / 2, D, $, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child"), I = c.insert(() => z);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await Vi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const L = F.node().getBBox(), M = L.width, R = L.height, H = L.x, U = L.y;
    F.attr(
      "transform",
      `translate(${-M / 2 - H},${d ? h.height / 2 + S / 2 - R / 2 - U : -h.height / 2 - S / 2 - R / 2 - U})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${d ? -$ / 2 : $ / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${d ? h.height / 2 + S / 2 : -h.height / 2 - S / 2})`
  ), Z(t, I), t.intersect = function(F) {
    if (P.info("iconSquare intersect", t, F), !t.label)
      return Y.rect(t, F);
    const L = t.x ?? 0, M = t.y ?? 0, R = t.height ?? 0;
    let H = [];
    return d ? H = [
      { x: L - h.width / 2, y: M - R / 2 },
      { x: L + h.width / 2, y: M - R / 2 },
      { x: L + h.width / 2, y: M - R / 2 + h.height + S },
      { x: L + m / 2, y: M - R / 2 + h.height + S },
      { x: L + m / 2, y: M + R / 2 },
      { x: L - m / 2, y: M + R / 2 },
      { x: L - m / 2, y: M - R / 2 + h.height + S },
      { x: L - h.width / 2, y: M - R / 2 + h.height + S }
    ] : H = [
      { x: L - m / 2, y: M - R / 2 },
      { x: L + m / 2, y: M - R / 2 },
      { x: L + m / 2, y: M - R / 2 + g },
      { x: L + h.width / 2, y: M - R / 2 + g },
      { x: L + h.width / 2 / 2, y: M + R / 2 },
      { x: L - h.width / 2, y: M + R / 2 },
      { x: L - h.width / 2, y: M - R / 2 + g },
      { x: L - m / 2, y: M - R / 2 + g }
    ], Y.polygon(t, H, F);
  }, c;
}
p(tg, "iconSquare");
async function eg(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const s = Number(i.naturalWidth.toString().replace("px", "")), o = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = s / o;
  const { labelStyles: a } = V(t);
  t.labelStyle = a;
  const n = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? n ?? 0 : 0,
    t?.assetWidth ?? s
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? o;
  t.width = Math.max(c, n ?? 0);
  const { shapeSvg: u, bbox: f, label: d } = await st(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, C = t.label ? 8 : 0, b = G.svg(u), k = j(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const w = b.rectangle(m, y, c, h, k), S = Math.max(c, f.width), v = h + f.height + C, B = b.rectangle(-S / 2, -v / 2, S, v, {
    ...k,
    fill: "none",
    stroke: "none"
  }), O = u.insert(() => w, ":first-child"), N = u.insert(() => B);
  if (t.img) {
    const D = u.append("image");
    D.attr("href", t.img), D.attr("width", c), D.attr("height", h), D.attr("preserveAspectRatio", "none"), D.attr(
      "transform",
      `translate(${-c / 2},${g ? v / 2 - h : -v / 2})`
    );
  }
  return d.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${g ? -h / 2 - f.height / 2 - C / 2 : h / 2 - f.height / 2 + C / 2})`
  ), O.attr(
    "transform",
    `translate(0,${g ? f.height / 2 + C / 2 : -f.height / 2 - C / 2})`
  ), Z(t, N), t.intersect = function(D) {
    if (P.info("iconSquare intersect", t, D), !t.label)
      return Y.rect(t, D);
    const $ = t.x ?? 0, z = t.y ?? 0, W = t.height ?? 0;
    let I = [];
    return g ? I = [
      { x: $ - f.width / 2, y: z - W / 2 },
      { x: $ + f.width / 2, y: z - W / 2 },
      { x: $ + f.width / 2, y: z - W / 2 + f.height + C },
      { x: $ + c / 2, y: z - W / 2 + f.height + C },
      { x: $ + c / 2, y: z + W / 2 },
      { x: $ - c / 2, y: z + W / 2 },
      { x: $ - c / 2, y: z - W / 2 + f.height + C },
      { x: $ - f.width / 2, y: z - W / 2 + f.height + C }
    ] : I = [
      { x: $ - c / 2, y: z - W / 2 },
      { x: $ + c / 2, y: z - W / 2 },
      { x: $ + c / 2, y: z - W / 2 + h },
      { x: $ + f.width / 2, y: z - W / 2 + h },
      { x: $ + f.width / 2 / 2, y: z + W / 2 },
      { x: $ - f.width / 2, y: z + W / 2 },
      { x: $ - f.width / 2, y: z - W / 2 + h },
      { x: $ - c / 2, y: z - W / 2 + h }
    ], Y.polygon(t, I, D);
  }, u;
}
p(eg, "imageSquare");
async function rg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = Math.max(l.width + (a ?? 0) * 2, t?.width ?? 0), h = Math.max(l.height + (o ?? 0) * 2, t?.height ?? 0), u = [
    { x: 0, y: 0 },
    { x: c, y: 0 },
    { x: c + 3 * h / 6, y: -h },
    { x: -3 * h / 6, y: -h }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = ft(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), d && f.attr("style", d);
  } else
    f = Xe(n, c, h, u);
  return i && f.attr("style", i), t.width = c, t.height = h, Z(t, f), t.intersect = function(g) {
    return Y.polygon(t, u, g);
  }, n;
}
p(rg, "inv_trapezoid");
async function ig(e, t) {
  const { shapeSvg: r, bbox: i, label: s } = await st(e, t, "label"), o = r.insert("rect", ":first-child");
  return o.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), s.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), Z(t, o), t.intersect = function(l) {
    return Y.rect(t, l);
  }, r;
}
p(ig, "labelRect");
async function sg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, u = [
    { x: 0, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: -(3 * c) / 6, y: -c }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = ft(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), d && f.attr("style", d);
  } else
    f = Xe(n, h, c, u);
  return i && f.attr("style", i), t.width = h, t.height = c, Z(t, f), t.intersect = function(g) {
    return Y.polygon(t, u, g);
  }, n;
}
p(sg, "lean_left");
async function og(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, u = [
    { x: -3 * c / 6, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: 0, y: -c }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = ft(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), d && f.attr("style", d);
  } else
    f = Xe(n, h, c, u);
  return i && f.attr("style", i), t.width = h, t.height = c, Z(t, f), t.intersect = function(g) {
    return Y.polygon(t, u, g);
  }, n;
}
p(og, "lean_right");
function ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.label = "", t.labelStyle = r;
  const s = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, a = Math.max(35, t?.width ?? 0), n = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: a, y: 0 },
    { x: 0, y: n + l / 2 },
    { x: a - 2 * l, y: n + l / 2 },
    { x: 0, y: 2 * n },
    { x: a, y: n - l / 2 },
    { x: 2 * l, y: n - l / 2 }
  ], h = G.svg(s), u = j(t, {});
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const f = ft(c), d = h.path(f, u), g = s.insert(() => d, ":first-child");
  return g.attr("class", "outer-path"), o && t.look !== "handDrawn" && g.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${a / 2},${-n})`), Z(t, g), t.intersect = function(m) {
    return P.info("lightningBolt intersect", t, m), Y.polygon(t, c, m);
  }, s;
}
p(ag, "lightningBolt");
var Nw = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), qw = /* @__PURE__ */ p((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), Ww = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), oc = 10, ac = 10;
async function ng(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const C = t.width ?? 0;
    t.width = (t.width ?? 0) - o, t.width < ac && (t.width = ac);
    const k = C / 2 / (2.5 + C / 50);
    t.height = (t.height ?? 0) - a - k * 3, t.height < oc && (t.height = oc);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + o * 2, u = h / 2, f = u / (2.5 + h / 50), d = (t?.height ? t?.height : l.height) + f + a * 2, g = d * 0.1;
  let m;
  const { cssStyles: y } = t;
  if (t.look === "handDrawn") {
    const C = G.svg(n), b = qw(0, 0, h, d, u, f, g), k = Ww(0, f, h, d, u, f), w = j(t, {}), S = C.path(b, w), v = C.path(k, w);
    n.insert(() => v, ":first-child").attr("class", "line"), m = n.insert(() => S, ":first-child"), m.attr("class", "basic label-container"), y && m.attr("style", y);
  } else {
    const C = Nw(0, 0, h, d, u, f, g);
    m = n.insert("path", ":first-child").attr("d", C).attr("class", "basic label-container outer-path").attr("style", Ot(y)).attr("style", i);
  }
  return m.attr("label-offset-y", f), m.attr("transform", `translate(${-h / 2}, ${-(d / 2 + f)})`), Z(t, m), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + f - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(C) {
    const b = Y.rect(t, C), k = b.x - (t.x ?? 0);
    if (u != 0 && (Math.abs(k) < (t.width ?? 0) / 2 || Math.abs(k) == (t.width ?? 0) / 2 && Math.abs(b.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let w = f * f * (1 - k * k / (u * u));
      w > 0 && (w = Math.sqrt(w)), w = f - w, C.y - (t.y ?? 0) > 0 && (w = -w), b.y += w;
    }
    return b;
  }, n;
}
p(ng, "linedCylinder");
async function lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  if (t.width || t.height) {
    const w = t.width;
    t.width = (w ?? 0) * 10 / 11 - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + (o ?? 0) * 2, u = (t?.height ? t?.height : l.height) + (a ?? 0) * 2, f = t.look === "neo" ? u / 4 : u / 8, d = u + f, { cssStyles: g } = t, m = G.svg(n), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: -h / 2 - h / 2 * 0.1, y: -d / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: d / 2 },
    ...sr(
      -h / 2 - h / 2 * 0.1,
      d / 2,
      h / 2 + h / 2 * 0.1,
      d / 2,
      f,
      0.8
    ),
    { x: h / 2 + h / 2 * 0.1, y: -d / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: -d / 2 },
    { x: -h / 2, y: -d / 2 },
    { x: -h / 2, y: d / 2 * 1.1 },
    { x: -h / 2, y: -d / 2 }
  ], b = m.polygon(
    C.map((w) => [w.x, w.y]),
    y
  ), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), k.attr("transform", `translate(0,${-f / 2})`), c.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) + h / 2 * 0.1 / 2 - (l.x - (l.left ?? 0))},${-u / 2 + (t.padding ?? 0) - f / 2 - (l.y - (l.top ?? 0))})`
  ), Z(t, k), t.intersect = function(w) {
    return Y.polygon(t, C, w);
  }, n;
}
p(lg, "linedWaveEdgedRect");
async function hg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = t.look === "neo" ? 10 : 5;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2 - 2 * n, 10), t.height = Math.max((t?.height ?? 0) - a * 2 - 2 * n, 10));
  const { shapeSvg: l, bbox: c, label: h } = await st(e, t, tt(t)), u = (t?.width ? t?.width : c.width) + o * 2 + 2 * n, f = (t?.height ? t?.height : c.height) + a * 2 + 2 * n, d = u - 2 * n, g = f - 2 * n, m = -d / 2, y = -g / 2, { cssStyles: C } = t, b = G.svg(l), k = j(t, {}), w = [
    { x: m - n, y: y + n },
    { x: m - n, y: y + g + n },
    { x: m + d - n, y: y + g + n },
    { x: m + d - n, y: y + g },
    { x: m + d, y: y + g },
    { x: m + d, y: y + g - n },
    { x: m + d + n, y: y + g - n },
    { x: m + d + n, y: y - n },
    { x: m + n, y: y - n },
    { x: m + n, y },
    { x: m, y },
    { x: m, y: y + n }
  ], S = [
    { x: m, y: y + n },
    { x: m + d - n, y: y + n },
    { x: m + d - n, y: y + g },
    { x: m + d, y: y + g },
    { x: m + d, y },
    { x: m, y }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const v = ft(w);
  let B = b.path(v, k);
  const O = ft(S);
  let N = b.path(O, k);
  t.look !== "handDrawn" && (B = Ja(B), N = Ja(N));
  const D = l.insert("g", ":first-child");
  return D.insert(() => B), D.insert(() => N), D.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && D.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), h.attr(
    "transform",
    `translate(${-(c.width / 2) - n - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + n - (c.y - (c.top ?? 0))})`
  ), Z(t, D), t.intersect = function($) {
    return Y.polygon(t, w, $);
  }, l;
}
p(hg, "multiRect");
async function cg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, tt(t)), n = t.padding ?? 0, l = t.look === "neo" ? 16 : n, c = t.look === "neo" ? 12 : n;
  let h = !0;
  (t.width || t.height) && (h = !1, t.width = (t?.width ?? 0) - l * 2, t.height = (t?.height ?? 0) - c * 3);
  const u = Math.max(o.width, t?.width ?? 0) + l * 2, f = Math.max(o.height, t?.height ?? 0) + c * 3, d = t.look === "neo" ? f / 4 : f / 8, g = f + (h ? d / 2 : -d / 2), m = -u / 2, y = -g / 2, C = 10, { cssStyles: b } = t, k = sr(
    m - C,
    y + g + C,
    m + u - C,
    y + g + C,
    d,
    0.8
  ), w = k?.[k.length - 1], S = [
    { x: m - C, y: y + C },
    { x: m - C, y: y + g + C },
    ...k,
    { x: m + u - C, y: w.y - C },
    { x: m + u, y: w.y - C },
    { x: m + u, y: w.y - 2 * C },
    { x: m + u + C, y: w.y - 2 * C },
    { x: m + u + C, y: y - C },
    { x: m + C, y: y - C },
    { x: m + C, y },
    { x: m, y },
    { x: m, y: y + C }
  ], v = [
    { x: m, y: y + C },
    { x: m + u - C, y: y + C },
    { x: m + u - C, y: w.y - C },
    { x: m + u, y: w.y - C },
    { x: m + u, y },
    { x: m, y }
  ], B = G.svg(s), O = j(t, {});
  t.look !== "handDrawn" && (O.roughness = 0, O.fillStyle = "solid");
  const N = ft(S), D = B.path(N, O), $ = ft(v), z = B.path($, O), W = s.insert(() => D, ":first-child");
  return W.insert(() => z), W.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && W.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && W.selectAll("path").attr("style", i), W.attr("transform", `translate(0,${-d / 2})`), a.attr(
    "transform",
    `translate(${-(o.width / 2) - C - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + C - d / 2 - (o.y - (o.top ?? 0))})`
  ), Z(t, W), t.intersect = function(I) {
    return Y.polygon(t, S, I);
  }, s;
}
p(cg, "multiWaveEdgedRectangle");
async function ug(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.labelStyle = i, t.useHtmlLabels || Kt(Tt()) || (t.centerLabel = !0);
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), u = -c / 2, f = -h / 2, { cssStyles: d } = t, g = G.svg(a), m = j(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(u, f, c, h, m), C = a.insert(() => y, ":first-child");
  return C.attr("class", "basic label-container outer-path"), l.attr("class", "label noteLabel"), d && t.look !== "handDrawn" && C.selectAll("path").attr("style", d), s && t.look !== "handDrawn" && C.selectAll("path").attr("style", s), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, C), t.intersect = function(b) {
    return Y.rect(t, b);
  }, a;
}
p(ug, "note");
var zw = /* @__PURE__ */ p((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await st(e, t, tt(t)), a = o.width + (t.padding ?? 0), n = o.height + (t.padding ?? 0), l = a + n, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let u;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const d = G.svg(s), g = j(t, {}), m = zw(0, 0, l), y = d.path(m, g);
    u = s.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), f && u.attr("style", f);
  } else
    u = Xe(s, l, l, h), u.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && u.attr("style", i), Z(t, u), t.calcIntersect = function(d, g) {
    const m = d.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], C = Y.polygon(d, y, g);
    return { x: C.x - 0.5, y: C.y - 0.5 };
  }, t.intersect = function(d) {
    return this.calcIntersect(t, d);
  }, s;
}
p(dg, "question");
async function fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 21 : s ?? 0, a = t.look === "neo" ? 12 : s ?? 0, { shapeSvg: n, bbox: l, label: c } = await st(e, t, tt(t)), h = (t?.width ?? l.width) + (t.look === "neo" ? o * 2 : o), u = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), f = -h / 2, d = -u / 2, g = d / 2, m = [
    { x: f + g, y: d },
    { x: f, y: 0 },
    { x: f + g, y: -d },
    { x: -f, y: -d },
    { x: -f, y: d }
  ], { cssStyles: y } = t, C = G.svg(n), b = j(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = ft(m), w = C.path(k, b), S = n.insert(() => w, ":first-child");
  return S.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && S.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${-g / 2},0)`), c.attr(
    "transform",
    `translate(${-g / 2 - l.width / 2 - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), Z(t, S), t.intersect = function(v) {
    return Y.polygon(t, m, v);
  }, n;
}
p(fg, "rect_left_inv_arrow");
async function pg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  let s;
  t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = o.insert("g"), n = o.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = await Ke(n, c, t.labelStyle, !0, !0);
  let u = { width: 0, height: 0 };
  if (Kt(gt())) {
    const O = h.children[0], N = ct(h);
    u = O.getBoundingClientRect(), N.attr("width", u.width), N.attr("height", u.height);
  }
  P.info("Text 2", l);
  const f = l || [], d = h.getBBox(), g = await Ke(
    n,
    Array.isArray(f) ? f.join("<br/>") : f,
    t.labelStyle,
    !0,
    !0
  ), m = g.children[0], y = ct(g);
  u = m.getBoundingClientRect(), y.attr("width", u.width), y.attr("height", u.height);
  const C = (t.padding || 0) / 2;
  ct(g).attr(
    "transform",
    "translate( " + (u.width > d.width ? 0 : (d.width - u.width) / 2) + ", " + (d.height + C + 5) + ")"
  ), ct(h).attr(
    "transform",
    "translate( " + (u.width < d.width ? 0 : -(d.width - u.width) / 2) + ", 0)"
  ), u = n.node().getBBox(), n.attr(
    "transform",
    "translate(" + -u.width / 2 + ", " + (-u.height / 2 - C + 3) + ")"
  );
  const b = u.width + (t.padding || 0), k = u.height + (t.padding || 0), w = -u.width / 2 - C, S = -u.height / 2 - C;
  let v, B;
  if (t.look === "handDrawn") {
    const O = G.svg(o), N = j(t, {}), D = O.path(
      or(w, S, b, k, t.rx || 0),
      N
    ), $ = O.line(
      -u.width / 2 - C,
      -u.height / 2 - C + d.height + C,
      u.width / 2 + C,
      -u.height / 2 - C + d.height + C,
      N
    );
    B = o.insert(() => (P.debug("Rough node insert CXC", D), $), ":first-child"), v = o.insert(() => (P.debug("Rough node insert CXC", D), D), ":first-child");
  } else
    v = a.insert("rect", ":first-child"), B = a.insert("line"), v.attr("class", "outer title-state").attr("style", i).attr("x", -u.width / 2 - C).attr("y", -u.height / 2 - C).attr("width", u.width + (t.padding || 0)).attr("height", u.height + (t.padding || 0)), B.attr("class", "divider").attr("x1", -u.width / 2 - C).attr("x2", u.width / 2 + C).attr("y1", -u.height / 2 - C + d.height + C).attr("y2", -u.height / 2 - C + d.height + C);
  return Z(t, v), t.intersect = function(O) {
    return Y.rect(t, O);
  }, o;
}
p(pg, "rectWithTitle");
async function gg(e, t, { config: { themeVariables: r } }) {
  const i = r?.radius ?? 5, s = {
    rx: i,
    ry: i,
    labelPaddingX: (t?.padding ?? 0) * 1,
    labelPaddingY: (t?.padding ?? 0) * 1
  };
  return ti(e, t, s);
}
p(gg, "roundedRect");
var hr = 8;
async function mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = (t?.width ?? n.width) + s * 2 + (t.look === "neo" ? hr : hr * 2), h = (t?.height ?? n.height) + o * 2, u = c - hr, f = h, d = hr - c / 2, g = -h / 2, { cssStyles: m } = t, y = G.svg(a), C = j(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const b = [
    { x: d, y: g },
    { x: d + u, y: g },
    { x: d + u, y: g + f },
    { x: d - hr, y: g + f },
    { x: d - hr, y: g },
    { x: d, y: g },
    { x: d, y: g + f }
  ], k = y.polygon(
    b.map((S) => [S.x, S.y]),
    C
  ), w = a.insert(() => k, ":first-child");
  return w.attr("class", "basic label-container outer-path").attr("style", Ot(m)), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), m && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${hr / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, w), t.intersect = function(S) {
    return Y.rect(t, S);
  }, a;
}
p(mg, "shadedProcess");
async function yg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - a * 2, 10));
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + o * 2, u = ((t?.height ? t?.height : l.height) + a * 2) * 1.5, f = h, d = u / 1.5, g = -f / 2, m = -d / 2, { cssStyles: y } = t, C = G.svg(n), b = j(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = [
    { x: g, y: m },
    { x: g, y: m + d },
    { x: g + f, y: m + d },
    { x: g + f, y: m - d / 2 }
  ], w = ft(k), S = C.path(w, b), v = n.insert(() => S, ":first-child");
  return v.attr("class", "basic label-container  outer-path"), y && t.look !== "handDrawn" && v.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && v.selectChildren("path").attr("style", i), v.attr("transform", `translate(0, ${d / 4})`), c.attr(
    "transform",
    `translate(${-f / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))}, ${-d / 4 + (t.padding ?? 0) - (l.y - (l.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return Y.polygon(t, k, B);
  }, n;
}
p(yg, "slopedRect");
async function Cg(e, t) {
  const r = t.padding ?? 0, i = t.look === "neo" ? 16 : r * 2, s = t.look === "neo" ? 12 : r, o = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? i,
    labelPaddingY: s
  };
  return ti(e, t, o);
}
p(Cg, "squareRect");
async function xg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 20 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = l.height + (t.look === "neo" ? a * 2 : a), h = l.width + c / 4 + (t.look === "neo" ? o * 2 : o), u = c / 2, { cssStyles: f } = t, d = G.svg(n), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: -h / 2 + u, y: -c / 2 },
    { x: h / 2 - u, y: -c / 2 },
    ...Ni(-h / 2 + u, 0, u, 50, 90, 270),
    { x: h / 2 - u, y: c / 2 },
    ...Ni(h / 2 - u, 0, u, 50, 270, 450)
  ], y = ft(m), C = d.path(y, g), b = n.insert(() => C, ":first-child");
  return b.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && b.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), Z(t, b), t.intersect = function(k) {
    return Y.polygon(t, m, k);
  }, n;
}
p(xg, "stadium");
async function bg(e, t) {
  const r = {
    rx: t.look === "neo" ? 3 : 5,
    ry: t.look === "neo" ? 3 : 5
  };
  return ti(e, t, r);
}
p(bg, "state");
function kg(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.labelStyle = i;
  const { cssStyles: o } = t, { lineColor: a, stateBorder: n, nodeBorder: l, nodeShadow: c } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const h = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), u = G.svg(h), f = j(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const d = u.circle(0, 0, t.width, {
    ...f,
    stroke: a,
    strokeWidth: 2
  }), g = n ?? l, m = (t.width ?? 0) * 5 / 14, y = u.circle(0, 0, m, {
    ...f,
    fill: g,
    stroke: g,
    strokeWidth: 2,
    fillStyle: "solid"
  }), C = h.insert(() => d, ":first-child");
  if (C.insert(() => y), t.look !== "handDrawn" && C.attr("class", "outer-path"), o && C.selectAll("path").attr("style", o), s && C.selectAll("path").attr("style", s), t.width < 25 && c && t.look !== "handDrawn") {
    const b = e.node()?.ownerSVGElement?.id ?? "", k = b ? `${b}-drop-shadow-small` : "drop-shadow-small";
    C.attr("style", `filter:url(#${k})`);
  }
  return Z(t, C), t.intersect = function(b) {
    return Y.circle(t, (t.width ?? 0) / 2, b);
  }, h;
}
p(kg, "stateEnd");
function Tg(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i, nodeShadow: s } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const o = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const l = G.svg(o).circle(0, 0, t.width, K2(i));
    a = o.insert(() => l), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  } else
    a = o.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  if (t.width < 25 && s && t.look !== "handDrawn") {
    const n = e.node()?.ownerSVGElement?.id ?? "", l = n ? `${n}-drop-shadow-small` : "drop-shadow-small";
    a.attr("style", `filter:url(#${l})`);
  }
  return Z(t, a), t.intersect = function(n) {
    return Y.circle(t, (t.width ?? 7) / 2, n);
  }, o;
}
p(Tg, "stateStart");
var Mr = 8;
async function wg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t?.padding ?? 8, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.width ?? l.width) + 2 * Mr + o, h = (t?.height ?? l.height) + a, u = c - 2 * Mr, f = h, d = -c / 2, g = -h / 2, m = [
    { x: 0, y: 0 },
    { x: u, y: 0 },
    { x: u, y: -f },
    { x: 0, y: -f },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: u + 8, y: 0 },
    { x: u + 8, y: -f },
    { x: -8, y: -f },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const y = G.svg(n), C = j(t, {}), b = y.rectangle(d, g, u + 16, f, C), k = y.line(d + Mr, g, d + Mr, g + f, C), w = y.line(d + Mr + u, g, d + Mr + u, g + f, C);
    n.insert(() => k, ":first-child"), n.insert(() => w, ":first-child");
    const S = n.insert(() => b, ":first-child"), { cssStyles: v } = t;
    S.attr("class", "basic label-container").attr("style", Ot(v)), Z(t, S);
  } else {
    const y = Xe(n, u, f, m);
    i && y.attr("style", i), Z(t, y);
  }
  return t.intersect = function(y) {
    return Y.polygon(t, m, y);
  }, n;
}
p(wg, "subroutine");
var aa = 0.2;
async function Sg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - a * 2, 10), t.width = Math.max(
    (t?.width ?? 0) - o * 2 - aa * (t.height + a * 2),
    10
  ));
  const { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.height ? t?.height : l.height) + a * 2, h = aa * c, u = aa * c, d = (t?.width ? t?.width : l.width) + o * 2 + h - h, g = c, m = -d / 2, y = -g / 2, { cssStyles: C } = t, b = G.svg(n), k = j(t, {}), w = [
    { x: m - h / 2, y },
    { x: m + d + h / 2, y },
    { x: m + d + h / 2, y: y + g },
    { x: m - h / 2, y: y + g }
  ], S = [
    { x: m + d - h / 2, y: y + g },
    { x: m + d + h / 2, y: y + g },
    { x: m + d + h / 2, y: y + g - u }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const v = ft(w), B = b.path(v, k), O = ft(S), N = b.path(O, { ...k, fillStyle: "solid" }), D = n.insert(() => N, ":first-child");
  return D.insert(() => B, ":first-child"), D.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && D.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), Z(t, D), t.intersect = function($) {
    return Y.polygon(t, w, $);
  }, n;
}
p(Sg, "taggedRect");
async function _g(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, tt(t)), n = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = 0.2 * n, u = 0.2 * l, f = l + c, { cssStyles: d } = t, g = G.svg(s), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -n / 2 - n / 2 * 0.1, y: f / 2 },
    ...sr(
      -n / 2 - n / 2 * 0.1,
      f / 2,
      n / 2 + n / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: n / 2 + n / 2 * 0.1, y: -f / 2 },
    { x: -n / 2 - n / 2 * 0.1, y: -f / 2 }
  ], C = -n / 2 + n / 2 * 0.1, b = -f / 2 - u * 0.4, k = [
    { x: C + n - h, y: (b + l) * 1.3 },
    { x: C + n, y: b + l - u },
    { x: C + n, y: (b + l) * 0.9 },
    ...sr(
      C + n,
      (b + l) * 1.25,
      C + n - h,
      (b + l) * 1.3,
      -l * 0.02,
      0.5
    )
  ], w = ft(y), S = g.path(w, m), v = ft(k), B = g.path(v, {
    ...m,
    fillStyle: "solid"
  }), O = s.insert(() => B, ":first-child");
  return O.insert(() => S, ":first-child"), O.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && O.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(0,${-c / 2})`), a.attr(
    "transform",
    `translate(${-n / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (o.y - (o.top ?? 0))})`
  ), Z(t, O), t.intersect = function(N) {
    return Y.polygon(t, y, N);
  }, s;
}
p(_g, "taggedWaveEdgedRectangle");
async function vg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await st(e, t, tt(t)), a = Math.max(o.width + (t.padding ?? 0), t?.width || 0), n = Math.max(o.height + (t.padding ?? 0), t?.height || 0), l = -a / 2, c = -n / 2, h = s.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", a).attr("height", n), Z(t, h), t.intersect = function(u) {
    return Y.rect(t, u);
  }, s;
}
p(vg, "text");
var Hw = /* @__PURE__ */ p((e, t, r, i, s, o) => `M${e},${t}
    a${s},${o} 0,0,1 0,${-i}
    l${r},0
    a${s},${o} 0,0,1 0,${i}
    M${r},${-i}
    a${s},${o} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), Uw = /* @__PURE__ */ p((e, t, r, i, s, o) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${s},${o} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${s},${o} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), Yw = /* @__PURE__ */ p((e, t, r, i, s, o) => [`M${e + r / 2},${-i / 2}`, `a${s},${o} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD"), nc = 5, lc = 10;
async function Bg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 12 : s / 2;
  if (t.width || t.height) {
    const m = t.height ?? 0;
    t.height = (t.height ?? 0) - o, t.height < nc && (t.height = nc);
    const C = m / 2 / (2.5 + m / 50);
    t.width = (t.width ?? 0) - o - C * 3, t.width < lc && (t.width = lc);
  }
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = (t.height ? t.height : n.height) + o, h = c / 2, u = h / (2.5 + c / 50), f = (t.width ? t.width : n.width) + u + o, { cssStyles: d } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = G.svg(a), y = Uw(0, 0, f, c, u, h), C = Yw(0, 0, f, c, u, h), b = m.path(y, j(t, {})), k = m.path(C, j(t, { fill: "none" }));
    g = a.insert(() => k, ":first-child"), g = a.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), d && g.attr("style", d);
  } else {
    const m = Hw(0, 0, f, c, u, h);
    g = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Ot(d)).attr("style", i), g.attr("class", "basic label-container outer-path"), d && g.selectAll("path").attr("style", d), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", u), g.attr("transform", `translate(${-f / 2}, ${c / 2} )`), l.attr(
    "transform",
    `translate(${-(n.width / 2) - u - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, g), t.intersect = function(m) {
    const y = Y.rect(t, m), C = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(C) < (t.height ?? 0) / 2 || Math.abs(C) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - u)) {
      let b = u * u * (1 - C * C / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = u - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, a;
}
p(Bg, "tiltedCylinder");
async function Lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = (t.look === "neo", s), a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, u = [
    { x: -3 * c / 6, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: 0, y: -c }
  ];
  let f;
  const { cssStyles: d } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = ft(u), C = g.path(y, m);
    f = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), d && f.attr("style", d);
  } else
    f = Xe(n, h, c, u);
  return i && f.attr("style", i), t.width = h, t.height = c, Z(t, f), t.intersect = function(g) {
    return Y.polygon(t, u, g);
  }, n;
}
p(Lg, "trapezoid");
async function Fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 15, l = 5;
  (t.width || t.height) && (t.height = (t.height ?? 0) - a * 2, t.height < l && (t.height = l), t.width = (t.width ?? 0) - o * 2, t.width < n && (t.width = n));
  const { shapeSvg: c, bbox: h } = await st(e, t, tt(t)), u = (t?.width ? t?.width : h.width) + o * 2, f = (t?.height ? t?.height : h.height) + a * 2, { cssStyles: d } = t, g = G.svg(c), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -u / 2 * 0.8, y: -f / 2 },
    { x: u / 2 * 0.8, y: -f / 2 },
    { x: u / 2, y: -f / 2 * 0.6 },
    { x: u / 2, y: f / 2 },
    { x: -u / 2, y: f / 2 },
    { x: -u / 2, y: -f / 2 * 0.6 }
  ], C = ft(y), b = g.path(C, m), k = c.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), d && t.look !== "handDrawn" && k.selectChildren("path").attr("style", d), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Z(t, k), t.intersect = function(w) {
    return Y.polygon(t, y, w);
  }, c;
}
p(Fg, "trapezoidalPentagon");
var hc = 10, cc = 10;
async function Ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.width = ((t?.width ?? 0) - o) / 2, t.width < cc && (t.width = cc), t.height = t?.height ?? 0, t.height < hc && (t.height = hc));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = Ge(gt().flowchart?.htmlLabels), h = (t?.width ? t?.width : n.width) + o, u = t?.height ? t?.height : h + n.height, f = u, d = [
    { x: 0, y: 0 },
    { x: f, y: 0 },
    { x: f / 2, y: -u }
  ], { cssStyles: g } = t, m = G.svg(a), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = ft(d), b = m.path(C, y), k = a.insert(() => b, ":first-child").attr("transform", `translate(${-u / 2}, ${u / 2})`).attr("class", "outer-path");
  return g && t.look !== "handDrawn" && k.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), t.width = h, t.height = u, Z(t, k), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${u / 2 - (n.height + (t.padding ?? 0) / (c ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(w) {
    return P.info("Triangle intersect", t, d, w), Y.polygon(t, d, w);
  }, a;
}
p(Ag, "triangle");
async function Eg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  let n = !0;
  (t.width || t.height) && (n = !1, t.width = (t?.width ?? 0) - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10));
  const { shapeSvg: l, bbox: c, label: h } = await st(e, t, tt(t)), u = (t?.width ? t?.width : c.width) + (o ?? 0) * 2, f = (t?.height ? t?.height : c.height) + (a ?? 0) * 2, d = t.look === "neo" ? f / 4 : f / 8, g = f + (n ? d : -d), { cssStyles: m } = t, C = 14 - u, b = C > 0 ? C / 2 : 0, k = G.svg(l), w = j(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const S = [
    { x: -u / 2 - b, y: g / 2 },
    ...sr(
      -u / 2 - b,
      g / 2,
      u / 2 + b,
      g / 2,
      d,
      0.8
    ),
    { x: u / 2 + b, y: -g / 2 },
    { x: -u / 2 - b, y: -g / 2 }
  ], v = ft(S), B = k.path(v, w), O = l.insert(() => B, ":first-child");
  return O.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && O.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(0,${-d / 2})`), h.attr(
    "transform",
    `translate(${-u / 2 + (t.padding ?? 0) - (c.x - (c.left ?? 0))},${-f / 2 + (t.padding ?? 0) - d - (c.y - (c.top ?? 0))})`
  ), Z(t, O), t.intersect = function(N) {
    return Y.polygon(t, S, N);
  }, l;
}
p(Eg, "waveEdgedRectangle");
async function Mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 20 : s;
  if (t.width || t.height) {
    t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
    const w = Math.min(t.height * 0.2, t.height / 4);
    t.height = Math.ceil(t.height - a - w * (20 / 9)), t.width = t.width - o * 2;
  }
  const { shapeSvg: n, bbox: l } = await st(e, t, tt(t)), c = (t?.width ? t?.width : l.width) + o * 2, h = (t?.height ? t?.height : l.height) + a, u = h / 8, f = h + u * 2, { cssStyles: d } = t, g = G.svg(n), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -c / 2, y: f / 2 },
    ...sr(-c / 2, f / 2, c / 2, f / 2, u, 1),
    { x: c / 2, y: -f / 2 },
    ...sr(c / 2, -f / 2, -c / 2, -f / 2, u, -1)
  ], C = ft(y), b = g.path(C, m), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container"), d && t.look !== "handDrawn" && k.selectAll("path").attr("style", d), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), Z(t, k), t.intersect = function(w) {
    return Y.polygon(t, y, w);
  }, n;
}
p(Mg, "waveRectangle");
var wt = 10;
async function $g(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - s * 2 - wt, 10), t.height = Math.max((t?.height ?? 0) - o * 2 - wt, 10));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, tt(t)), c = (t?.width ? t?.width : n.width) + s * 2 + wt, h = (t?.height ? t?.height : n.height) + o * 2 + wt, u = c - wt, f = h - wt, d = -u / 2, g = -f / 2, { cssStyles: m } = t, y = G.svg(a), C = j(t, {}), b = [
    { x: d - wt, y: g - wt },
    { x: d - wt, y: g + f },
    { x: d + u, y: g + f },
    { x: d + u, y: g - wt }
  ], k = `M${d - wt},${g - wt} L${d + u},${g - wt} L${d + u},${g + f} L${d - wt},${g + f} L${d - wt},${g - wt}
                M${d - wt},${g} L${d + u},${g}
                M${d},${g - wt} L${d},${g + f}`;
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const w = y.path(k, C), S = a.insert(() => w, ":first-child");
  return S.attr("transform", `translate(${wt / 2}, ${wt / 2})`), S.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && S.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${-(n.width / 2) + wt / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + wt / 2 - (n.y - (n.top ?? 0))})`
  ), Z(t, S), t.intersect = function(v) {
    return Y.polygon(t, b, v);
  }, a;
}
p($g, "windowPane");
var uc = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), Gw = /* @__PURE__ */ new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function al(e, t) {
  const r = t;
  r.alias && (t.label = r.alias);
  const { theme: i, themeVariables: s } = Tt(), { rowEven: o, rowOdd: a, nodeBorder: n, borderColorArray: l } = s;
  if (t.look === "handDrawn") {
    const { themeVariables: rt } = Tt(), { background: ht } = rt, pt = {
      ...t,
      id: t.id + "-background",
      domId: (t.domId || t.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${ht}`]
    };
    await al(e, pt);
  }
  const c = Tt();
  t.useHtmlLabels = c.htmlLabels;
  let h = c.er?.diagramPadding ?? 10, u = c.er?.entityPadding ?? 6;
  const { cssStyles: f } = t, { labelStyles: d, nodeStyles: g } = V(t);
  if (r.attributes.length === 0 && t.label) {
    const rt = {
      rx: 0,
      ry: 0,
      labelPaddingX: h,
      labelPaddingY: h * 1.5
    };
    Ue(t.label, c) + rt.labelPaddingX * 2 < c.er.minEntityWidth && (t.width = c.er.minEntityWidth);
    const ht = await ti(e, t, rt);
    if (i != null && uc.has(i)) {
      const pt = r.colorIndex ?? 0;
      ht.attr("data-color-id", `color-${pt % l.length}`);
    }
    if (!Ge(c.htmlLabels)) {
      const pt = ht.select("text"), xt = pt.node()?.getBBox();
      pt.attr("transform", `translate(${-xt.width / 2}, 0)`);
    }
    return ht;
  }
  c.htmlLabels || (h *= 1.25, u *= 1.25);
  let m = tt(t);
  m || (m = "node default");
  const y = e.insert("g").attr("class", m).attr("id", t.domId || t.id), C = await Dr(y, t.label ?? "", c, 0, 0, ["name"], d);
  C.height += u;
  let b = 0;
  const k = [], w = [];
  let S = 0, v = 0, B = 0, O = 0, N = !0, D = !0;
  for (const rt of r.attributes) {
    const ht = await Dr(
      y,
      rt.type,
      c,
      0,
      b,
      ["attribute-type"],
      d
    );
    S = Math.max(S, ht.width + h);
    const pt = await Dr(
      y,
      rt.name,
      c,
      0,
      b,
      ["attribute-name"],
      d
    );
    v = Math.max(v, pt.width + h);
    const xt = await Dr(
      y,
      rt.keys.join(),
      c,
      0,
      b,
      ["attribute-keys"],
      d
    );
    B = Math.max(B, xt.width + h);
    const Ct = await Dr(
      y,
      rt.comment,
      c,
      0,
      b,
      ["attribute-comment"],
      d
    );
    O = Math.max(O, Ct.width + h);
    const vt = Math.max(ht.height, pt.height, xt.height, Ct.height) + u;
    w.push({ yOffset: b, rowHeight: vt }), b += vt;
  }
  let $ = 4;
  B <= h && (N = !1, B = 0, $--), O <= h && (D = !1, O = 0, $--);
  const z = y.node().getBBox();
  if (C.width + h * 2 - (S + v + B + O) > 0) {
    const rt = C.width + h * 2 - (S + v + B + O);
    S += rt / $, v += rt / $, B > 0 && (B += rt / $), O > 0 && (O += rt / $);
  }
  const W = S + v + B + O, I = G.svg(y), F = j(t, {});
  t.look !== "handDrawn" && (F.roughness = 0, F.fillStyle = "solid");
  let L = 0;
  w.length > 0 && (L = w.reduce((rt, ht) => rt + (ht?.rowHeight ?? 0), 0));
  const M = Math.max(z.width + h * 2, t?.width || 0, W), R = Math.max((L ?? 0) + C.height, t?.height || 0), H = -M / 2, U = -R / 2;
  if (y.selectAll("g:not(:first-child)").each((rt, ht, pt) => {
    const xt = ct(pt[ht]), Ct = xt.attr("transform");
    let vt = 0, ue = 0;
    if (Ct) {
      const Oe = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Ct);
      Oe && (vt = parseFloat(Oe[1]), ue = parseFloat(Oe[2]), xt.attr("class").includes("attribute-name") ? vt += S : xt.attr("class").includes("attribute-keys") ? vt += S + v : xt.attr("class").includes("attribute-comment") && (vt += S + v + B));
    }
    xt.attr(
      "transform",
      `translate(${H + h / 2 + vt}, ${ue + U + C.height + u / 2})`
    );
  }), y.select(".name").attr("transform", "translate(" + -C.width / 2 + ", " + (U + u / 2) + ")"), i != null && uc.has(i)) {
    const rt = r.colorIndex ?? 0;
    y.attr("data-color-id", `color-${rt % l.length}`);
  }
  const Q = I.rectangle(H, U, M, R, F), dt = y.insert(() => Q, ":first-child").attr("class", "outer-path").attr("style", f.join(""));
  k.push(0);
  for (const [rt, ht] of w.entries()) {
    const xt = (rt + 1) % 2 === 0 && ht.yOffset !== 0, Ct = I.rectangle(H, C.height + U + ht?.yOffset, M, ht?.rowHeight, {
      ...F,
      fill: xt ? o : a,
      stroke: n
    });
    y.insert(() => Ct, "g.label").attr("style", f.join("")).attr("class", `row-rect-${xt ? "even" : "odd"}`);
  }
  const et = 1e-4;
  let ut = Rr(H, C.height + U, M + H, C.height + U, et), it = I.polygon(
    ut.map((rt) => [rt.x, rt.y]),
    F
  );
  if (y.insert(() => it).attr("class", "divider"), ut = Rr(S + H, C.height + U, S + H, R + U, et), it = I.polygon(
    ut.map((rt) => [rt.x, rt.y]),
    F
  ), y.insert(() => it).attr("class", "divider"), N) {
    const rt = S + v + H;
    ut = Rr(rt, C.height + U, rt, R + U, et), it = I.polygon(
      ut.map((ht) => [ht.x, ht.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  if (D) {
    const rt = S + v + B + H;
    ut = Rr(rt, C.height + U, rt, R + U, et), it = I.polygon(
      ut.map((ht) => [ht.x, ht.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  for (const rt of k) {
    const ht = C.height + U + rt;
    ut = Rr(H, ht, M + H, ht, et), it = I.polygon(
      ut.map((pt) => [pt.x, pt.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  if (Z(t, dt), g && t.look !== "handDrawn")
    if (i != null && Gw.has(i))
      y.selectAll("path").attr("style", g);
    else {
      const ht = g.split(";")?.filter((pt) => pt.includes("stroke"))?.map((pt) => `${pt}`).join("; ");
      y.selectAll("path").attr("style", ht ?? ""), y.selectAll(".row-rect-even path").attr("style", g);
    }
  return t.intersect = function(rt) {
    return Y.rect(t, rt);
  }, y;
}
p(al, "erBox");
async function Dr(e, t, r, i = 0, s = 0, o = [], a = "") {
  const n = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${s})`).attr("style", a);
  t !== eh(t) && (t = eh(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = n.node().appendChild(
    await je(
      n,
      t,
      {
        width: Ue(t, r) + 100,
        style: a,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (Ge(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const u = ct(l);
    c = h.getBoundingClientRect(), u.attr("width", c.width), u.attr("height", c.height);
  }
  return c;
}
p(Dr, "addText");
function Rr(e, t, r, i, s) {
  return e === r ? [
    { x: e - s / 2, y: t },
    { x: e + s / 2, y: t },
    { x: r + s / 2, y: i },
    { x: r - s / 2, y: i }
  ] : [
    { x: e, y: t - s / 2 },
    { x: e, y: t + s / 2 },
    { x: r, y: i + s / 2 },
    { x: r, y: i - s / 2 }
  ];
}
p(Rr, "lineToPolygon");
async function Ig(e, t, r, i, s = r.class.padding ?? 12) {
  const o = i ? 0 : 3, a = e.insert("g").attr("class", tt(t)).attr("id", t.domId || t.id);
  let n = null, l = null, c = null, h = null, u = 0, f = 0, d = 0;
  if (n = a.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await wi(n, { text: `«${b}»` }, 0), u = n.node().getBBox().height;
  }
  l = a.insert("g").attr("class", "label-group text"), await wi(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  f = g.height, c = a.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const k = await wi(c, b, m, [b.parseClassifier()]);
    m += k + o;
  }
  d = c.node().getBBox().height, d <= 0 && (d = s / 2), h = a.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const k = await wi(h, b, y, [b.parseClassifier()]);
    y += k + o;
  }
  let C = a.node().getBBox();
  if (n !== null) {
    const b = n.node().getBBox();
    n.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${u})`), C = a.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${u + f + s * 2})`
  ), C = a.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${u + f + (d ? d + s * 4 : s * 2)})`
  ), C = a.node().getBBox(), { shapeSvg: a, bbox: C };
}
p(Ig, "textHelper");
async function wi(e, t, r, i = []) {
  const s = e.insert("g").attr("class", "label").attr("style", i.join("; ")), o = Tt();
  let a = "useHtmlLabels" in t ? t.useHtmlLabels : Ge(o.htmlLabels) ?? !0, n = "";
  "text" in t ? n = t.text : n = t.label, !a && n.startsWith("\\") && (n = n.substring(1)), Ai(n) && (a = !0);
  const l = await je(
    s,
    gn(kr(n)),
    {
      width: Ue(n, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a
    },
    o
  );
  let c, h = 1;
  if (a) {
    const u = l.children[0], f = ct(l);
    h = u.innerHTML.split("<br>").length, u.innerHTML.includes("</math>") && (h += u.innerHTML.split("<mrow>").length - 1);
    const d = u.getElementsByTagName("img");
    if (d) {
      const g = n.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...d].map(
          (m) => new Promise((y) => {
            function C() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = o.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, w = parseInt(b, 10) * 5 + "px";
                m.style.minWidth = w, m.style.maxWidth = w;
              } else
                m.style.width = "100%";
              y(m);
            }
            p(C, "setupImage"), setTimeout(() => {
              m.complete && C();
            }), m.addEventListener("error", C), m.addEventListener("load", C);
          })
        )
      );
    }
    c = u.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && ct(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const u = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (u.textContent = n[0] + n.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), n[1] === " " && (u.textContent = u.textContent[0] + " " + u.textContent.substring(1))), u.textContent === "undefined" && (u.textContent = ""), c = l.getBBox();
  }
  return s.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
p(wi, "addText");
async function Og(e, t) {
  const r = gt(), { themeVariables: i } = r, { useGradient: s } = i, o = r.class.padding ?? 12, a = o, n = t.useHtmlLabels ?? Ge(r.htmlLabels) ?? !0, l = t;
  l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
  const { shapeSvg: c, bbox: h } = await Ig(e, t, r, n, a), { labelStyles: u, nodeStyles: f } = V(t);
  t.labelStyle = u, t.cssStyles = l.styles || "";
  const d = l.styles?.join(";") || f || "";
  t.cssStyles || (t.cssStyles = d.replaceAll("!important", "").split(";"));
  const g = l.members.length === 0 && l.methods.length === 0 && !r.class?.hideEmptyMembersBox, m = G.svg(c), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = Math.max(t.width ?? 0, h.width);
  let b = Math.max(t.height ?? 0, h.height);
  const k = (t.height ?? 0) > h.height;
  l.members.length === 0 && l.methods.length === 0 ? b += a : l.members.length > 0 && l.methods.length === 0 && (b += a * 2);
  const w = -C / 2, S = -b / 2;
  let v = g ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0;
  k && (v = o * 2);
  const B = m.rectangle(
    w - o,
    S - o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0),
    C + 2 * o,
    b + 2 * o + v,
    y
  ), O = c.insert(() => B, ":first-child");
  O.attr("class", "basic label-container outer-path");
  const N = O.node().getBBox(), D = c.select(".annotation-group").node().getBBox().height - (g ? o / 2 : 0) || 0, $ = c.select(".label-group").node().getBBox().height - (g ? o / 2 : 0) || 0, z = c.select(".members-group").node().getBBox().height - (g ? o / 2 : 0) || 0, W = (D + $ + S + o - (S - o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0))) / 2;
  if (c.selectAll(".text").each((I, F, L) => {
    const M = ct(L[F]), R = M.attr("transform");
    let H = 0;
    if (R) {
      const et = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(R);
      et && (H = parseFloat(et[2]));
    }
    let U = H + S + o - (g ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
    if (M.attr("class").includes("methods-group")) {
      const dt = Math.max(z, a / 2);
      k ? U = Math.max(
        W,
        D + $ + dt + S + a * 2 + o
      ) + a * 2 : U = D + $ + dt + S + a * 4 + o;
    }
    l.members.length === 0 && l.methods.length === 0 && r.class?.hideEmptyMembersBox && (l.annotations.length > 0 ? U = H - a : U = H), n || (U -= 4);
    let Q = w;
    (M.attr("class").includes("label-group") || M.attr("class").includes("annotation-group")) && (Q = -M.node()?.getBBox().width / 2 || 0, c.selectAll("text").each(function(dt, et, ut) {
      window.getComputedStyle(ut[et]).textAnchor === "middle" && (Q = 0);
    })), M.attr("transform", `translate(${Q}, ${U})`);
  }), l.members.length > 0 || l.methods.length > 0 || g) {
    const I = D + $ + S + o, F = m.line(
      N.x,
      I,
      N.x + N.width,
      I + 1e-3,
      y
    );
    c.insert(() => F).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", d);
  }
  if (g || l.members.length > 0 || l.methods.length > 0) {
    const I = D + $ + z + S + a * 2 + o, F = m.line(
      N.x,
      k ? Math.max(W, I) : I,
      N.x + N.width,
      (k ? Math.max(W, I) : I) + 1e-3,
      y
    );
    c.insert(() => F).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", d);
  }
  if (l.look !== "handDrawn" && c.selectAll("path").attr("style", d), O.select(":nth-child(2)").attr("style", d), c.selectAll(".divider").select("path").attr("style", d), t.labelStyle ? c.selectAll("span").attr("style", t.labelStyle) : c.selectAll("span").attr("style", d), !n) {
    const I = RegExp(/color\s*:\s*([^;]*)/), F = I.exec(d);
    if (F) {
      const L = F[0].replace("color", "fill");
      c.selectAll("tspan").attr("style", L);
    } else if (u) {
      const L = I.exec(u);
      if (L) {
        const M = L[0].replace("color", "fill");
        c.selectAll("tspan").attr("style", M);
      }
    }
  }
  return Z(t, O), t.intersect = function(I) {
    return Y.rect(t, I);
  }, c;
}
p(Og, "classBox");
async function Dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const s = t, o = t, a = 20, n = 20, l = "verifyMethod" in t, c = tt(t), { themeVariables: h } = gt(), { borderColorArray: u, requirementEdgeLabelBackground: f } = h, d = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let g;
  l ? g = await Be(
    d,
    `&lt;&lt;${s.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : g = await Be(d, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let m = g;
  const y = await Be(
    d,
    s.name,
    m,
    t.labelStyle + "; font-weight: bold;"
  );
  if (m += y + n, l) {
    const N = await Be(
      d,
      `${s.requirementId ? `ID: ${s.requirementId}` : ""}`,
      m,
      t.labelStyle
    );
    m += N;
    const D = await Be(
      d,
      `${s.text ? `Text: ${s.text}` : ""}`,
      m,
      t.labelStyle
    );
    m += D;
    const $ = await Be(
      d,
      `${s.risk ? `Risk: ${s.risk}` : ""}`,
      m,
      t.labelStyle
    );
    m += $, await Be(
      d,
      `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`,
      m,
      t.labelStyle
    );
  } else {
    const N = await Be(
      d,
      `${o.type ? `Type: ${o.type}` : ""}`,
      m,
      t.labelStyle
    );
    m += N, await Be(
      d,
      `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`,
      m,
      t.labelStyle
    );
  }
  const C = (d.node()?.getBBox().width ?? 200) + a, b = (d.node()?.getBBox().height ?? 200) + a, k = -C / 2, w = -b / 2, S = G.svg(d), v = j(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const B = S.rectangle(k, w, C, b, v), O = d.insert(() => B, ":first-child");
  if (O.attr("class", "basic label-container outer-path").attr("style", i), u?.length) {
    const N = t.colorIndex ?? 0;
    d.attr("data-color-id", `color-${N % u.length}`);
  }
  if (d.selectAll(".label").each((N, D, $) => {
    const z = ct($[D]), W = z.attr("transform");
    let I = 0, F = 0;
    if (W) {
      const H = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(W);
      H && (I = parseFloat(H[1]), F = parseFloat(H[2]));
    }
    const L = F - b / 2;
    let M = k + a / 2;
    (D === 0 || D === 1) && (M = I), z.attr("transform", `translate(${M}, ${L + a})`);
  }), m > g + y + n) {
    const N = w + g + y + n;
    let D;
    if (t.look === "neo") {
      const W = [
        [k, N],
        [k + C, N],
        [k + C, N + 1e-3],
        [k, N + 1e-3]
      ];
      D = S.polygon(W, v);
    } else
      D = S.line(k, N, k + C, N, v);
    d.insert(() => D).attr("class", "divider");
  }
  return Z(t, O), t.intersect = function(N) {
    return Y.rect(t, N);
  }, i && t.look !== "handDrawn" && (f || u?.length) && d.selectAll("path").attr("style", i), d;
}
p(Dg, "requirementBox");
async function Be(e, t, r, i = "") {
  if (t === "")
    return 0;
  const s = e.insert("g").attr("class", "label").attr("style", i), o = gt(), a = o.htmlLabels ?? !0, n = await je(
    s,
    gn(kr(t)),
    {
      width: Ue(t, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a,
      style: i
    },
    o
  );
  let l;
  if (a) {
    const c = n.children[0], h = ct(n);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = n.children[0];
    for (const h of c.children)
      i && h.setAttribute("style", i);
    l = n.getBBox(), l.height += 6;
  }
  return s.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
p(Be, "addText");
var jw = /* @__PURE__ */ p((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function Rg(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: s } = V(t);
  t.labelStyle = i || "";
  const o = 10, a = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: n,
    bbox: l,
    label: c
  } = await st(e, t, tt(t)), h = t.padding || 10;
  let u = "", f;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (u = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = n.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", u).attr("target", "_blank"));
  const d = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  f ? { label: g, bbox: m } = await oa(
    f,
    "ticket" in t && t.ticket || "",
    d
  ) : { label: g, bbox: m } = await oa(
    n,
    "ticket" in t && t.ticket || "",
    d
  );
  const { label: y, bbox: C } = await oa(
    n,
    "assigned" in t && t.assigned || "",
    d
  );
  t.width = a;
  const b = 10, k = t?.width || 0, w = Math.max(m.height, C.height) / 2, S = Math.max(l.height + b * 2, t?.height || 0) + w, v = -k / 2, B = -S / 2;
  c.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-w - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-w + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + k / 2 - C.width - 2 * o) + ", " + (-w + l.height / 2) + ")"
  );
  let O;
  const { rx: N, ry: D } = t, { cssStyles: $ } = t;
  if (t.look === "handDrawn") {
    const z = G.svg(n), W = j(t, {}), I = N || D ? z.path(or(v, B, k, S, N || 0), W) : z.rectangle(v, B, k, S, W);
    O = n.insert(() => I, ":first-child"), O.attr("class", "basic label-container").attr("style", $ || null);
  } else {
    O = n.insert("rect", ":first-child"), O.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", N ?? 5).attr("ry", D ?? 5).attr("x", v).attr("y", B).attr("width", k).attr("height", S);
    const z = "priority" in t && t.priority;
    if (z) {
      const W = n.append("line"), I = v + 2, F = B + Math.floor((N ?? 0) / 2), L = B + S - Math.floor((N ?? 0) / 2);
      W.attr("x1", I).attr("y1", F).attr("x2", I).attr("y2", L).attr("stroke-width", "4").attr("stroke", jw(z));
    }
  }
  return Z(t, O), t.height = S, t.intersect = function(z) {
    return Y.rect(t, z);
  }, n;
}
p(Rg, "kanbanItem");
async function Pg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    tt(t)
  ), l = o.width + 10 * a, c = o.height + 8 * a, h = 0.15 * l, { cssStyles: u } = t, f = o.width + 20, d = o.height + 20, g = Math.max(l, f), m = Math.max(c, d);
  n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
  let y;
  const C = `M0 0 
    a${h},${h} 1 0,0 ${g * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},0
    a${h},${h} 1 0,0 ${g * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${g * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * g * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * g * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},0
    a${h},${h} 1 0,0 ${-1 * g * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * g * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${g * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const b = G.svg(s), k = j(t, {}), w = b.path(C, k);
    y = s.insert(() => w, ":first-child"), y.attr("class", "basic label-container").attr("style", Ot(u));
  } else
    y = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", C);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), Z(t, y), t.calcIntersect = function(b, k) {
    return Y.rect(b, k);
  }, t.intersect = function(b) {
    return P.info("Bang intersect", t, b), Y.rect(t, b);
  }, s;
}
p(Pg, "bang");
async function Ng(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    tt(t)
  ), l = o.width + 2 * a, c = o.height + 2 * a, h = 0.15 * l, u = 0.25 * l, f = 0.35 * l, d = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${u},${u} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${d},${d} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${u},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${d},${d} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const C = G.svg(s), b = j(t, {}), k = C.path(y, b);
    m = s.insert(() => k, ":first-child"), m.attr("class", "basic label-container").attr("style", Ot(g));
  } else
    m = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), Z(t, m), t.calcIntersect = function(C, b) {
    return Y.rect(C, b);
  }, t.intersect = function(C) {
    return P.info("Cloud intersect", t, C), Y.rect(t, C);
  }, s;
}
p(Ng, "cloud");
async function qg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    tt(t)
  ), l = o.width + 8 * a, c = o.height + 2 * a, h = 5, u = t.look === "neo" ? `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - h}
    H${-l / 2}
    Z
  ` : `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} ${-h},${h}
    h${-(l - 2 * h)}
    q${-h},0 ${-h},${-h}
    Z
  `;
  if (!t.domId)
    throw new Error(
      `defaultMindmapNode: node "${t.id}" is missing a domId — was render.ts domId prefixing skipped?`
    );
  const f = s.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", u);
  return s.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), s.append(() => n.node()), Z(t, f), t.calcIntersect = function(d, g) {
    return Y.rect(d, g);
  }, t.intersect = function(d) {
    return Y.rect(t, d);
  }, s;
}
p(qg, "defaultMindmapNode");
async function Wg(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return ol(e, t, r);
}
p(Wg, "mindmapCircle");
var Xw = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: Cg
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: gg
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: xg
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: wg
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Wp
  },
  {
    semanticName: "Data Store",
    name: "Data Store",
    shortName: "datastore",
    description: "Data flow diagram data store",
    aliases: ["data-store"],
    handler: zp
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: ol
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: Pg
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Ng
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: dg
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Vp
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: og
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: sg
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Lg
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: rg
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Up
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: vg
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: $p
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: mg
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: Tg
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: kg
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: jp
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Zp
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Rp
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Pp
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Np
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: ag
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Eg
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Xp
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Bg
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: ng
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: qp
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: Hp
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Ag
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: $g
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Yp
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: Fg
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Gp
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: yg
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: cg
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: hg
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Mp
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: Dp
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: _g
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Sg
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Mg
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: fg
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: lg
  }
], Vw = /* @__PURE__ */ p(() => {
  const t = [
    ...Object.entries({
      // States
      state: bg,
      choice: Ip,
      note: ug,
      // Rectangles
      rectWithTitle: pg,
      labelRect: ig,
      // Icons
      iconSquare: tg,
      iconCircle: Qp,
      icon: Kp,
      iconRounded: Jp,
      imageSquare: eg,
      anchor: Ap,
      // Kanban diagram
      kanbanItem: Rg,
      //Mindmap diagram
      mindmapCircle: Wg,
      defaultMindmapNode: qg,
      // class diagram
      classBox: Og,
      // er diagram
      erBox: al,
      // Requirement diagram
      requirementBox: Dg
    }),
    ...Xw.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((s) => [s, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), zg = Vw();
function Zw(e) {
  return e in zg;
}
p(Zw, "isValidShape");
var So = /* @__PURE__ */ new Map();
async function Hg(e, t, r) {
  let i, s;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const o = t.shape ? zg[t.shape] : void 0;
  if (!o)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let a;
    r.config.securityLevel === "sandbox" ? a = "_top" : t.linkTarget && (a = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a ?? null), s = await o(i, t, r);
  } else
    s = await o(e, t, r), i = s;
  return i.attr("data-look", Ot(t.look)), t.tooltip && s.attr("title", t.tooltip), So.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
p(Hg, "insertNode");
var IL = /* @__PURE__ */ p((e, t) => {
  So.set(t.id, e);
}, "setNodeElem"), OL = /* @__PURE__ */ p(() => {
  So.clear();
}, "clear"), DL = /* @__PURE__ */ p((e) => {
  const t = So.get(e.id);
  P.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), Kw = /* @__PURE__ */ p((e, t, r, i, s, o = !1, a) => {
  t.arrowTypeStart && dc(
    e,
    "start",
    t.arrowTypeStart,
    r,
    i,
    s,
    o,
    a
  ), t.arrowTypeEnd && dc(e, "end", t.arrowTypeEnd, r, i, s, o, a);
}, "addEdgeMarkers"), Qw = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_barb_neo: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, Jw = [
  "cross",
  "point",
  "circle",
  "lollipop",
  "aggregation",
  "extension",
  "composition",
  "dependency",
  "barb"
], dc = /* @__PURE__ */ p((e, t, r, i, s, o, a = !1, n) => {
  const l = Qw[r], c = l && Jw.includes(l.type);
  if (!l) {
    P.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const h = l.type, d = `${s}_${o}-${h}${t === "start" ? "Start" : "End"}${a && c ? "-margin" : ""}`;
  if (n && n.trim() !== "") {
    const g = n.replace(/[^\dA-Za-z]/g, "_"), m = `${d}_${g}`;
    if (!document.getElementById(m)) {
      const y = document.getElementById(d);
      if (y) {
        const C = y.cloneNode(!0);
        C.id = m, C.querySelectorAll("path, circle, line").forEach((k) => {
          k.setAttribute("stroke", n), l.fill && k.setAttribute("fill", n);
        }), y.parentNode?.appendChild(C);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${m})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${d})`);
}, "addEdgeMarker"), tS = /* @__PURE__ */ p((e) => typeof e == "string" ? e : gt()?.flowchart?.curve, "resolveEdgeCurveType"), so = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), RL = /* @__PURE__ */ p(() => {
  so.clear(), Pt.clear();
}, "clear"), gi = /* @__PURE__ */ p((e) => e ? typeof e == "string" ? e : e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles"), eS = /* @__PURE__ */ p(async (e, t) => {
  const r = gt();
  let i = Kt(r);
  const { labelStyles: s } = V(t);
  t.labelStyle = s;
  const o = e.insert("g").attr("class", "edgeLabel"), a = o.insert("g").attr("class", "label").attr("data-id", t.id), n = t.labelType === "markdown", c = await je(
    e,
    t.label,
    {
      style: gi(t.labelStyle),
      useHtmlLabels: i,
      addSvgBackground: !0,
      isNode: !1,
      markdown: n,
      // Plain text edge labels should auto-wrap, markdown edge labels respect markdownAutoWrap config
      width: n ? void 0 : void 0
    },
    r
  );
  a.node().appendChild(c), P.info("abc82", t, t.labelType);
  let h = c.getBBox(), u = h;
  if (i) {
    const d = c.children[0], g = ct(c);
    h = d.getBoundingClientRect(), u = h, g.attr("width", h.width), g.attr("height", h.height);
  } else {
    const d = ct(c).select("text").node();
    d && typeof d.getBBox == "function" && (u = d.getBBox());
  }
  a.attr("transform", hi(u, i)), so.set(t.id, o), t.width = h.width, t.height = h.height;
  let f;
  if (t.startLabelLeft) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await Ke(
      g,
      t.startLabelLeft,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", hi(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).startLeft = d, Si(f, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await Ke(
      g,
      t.startLabelRight,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", hi(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).startRight = d, Si(f, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await Ke(
      d,
      t.endLabelLeft,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", hi(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).endLeft = d, Si(f, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const d = e.insert("g").attr("class", "edgeTerminals"), g = d.insert("g").attr("class", "inner"), m = await Ke(
      d,
      t.endLabelRight,
      gi(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", hi(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).endRight = d, Si(f, t.endLabelRight);
  }
  return c;
}, "insertEdgeLabel");
function Si(e, t) {
  Kt(gt()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
p(Si, "setTerminalWidth");
var rS = /* @__PURE__ */ p((e, t) => {
  P.debug("Moving label abc88 ", e.id, e.label, so.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = gt(), { subGraphTitleTotalMargin: s } = Gn(i);
  if (e.label) {
    const o = so.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = Ce.calcLabelPosition(r);
      P.debug(
        "Moving label " + e.label + " from (",
        a,
        ",",
        n,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (a = l.x, n = l.y);
    }
    o.attr("transform", `translate(${a}, ${n + s / 2})`);
  }
  if (e.startLabelLeft) {
    const o = Pt.get(e.id).startLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Ce.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const o = Pt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Ce.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const o = Pt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = Ce.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const o = Pt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = Ce.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
}, "positionEdgeLabel"), iS = /* @__PURE__ */ p((e, t) => {
  const r = e.x, i = e.y, s = Math.abs(t.x - r), o = Math.abs(t.y - i), a = e.width / 2, n = e.height / 2;
  return s >= a || o >= n;
}, "outsideNode"), sS = /* @__PURE__ */ p((e, t, r) => {
  P.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, s = e.y, o = Math.abs(i - r.x), a = e.width / 2;
  let n = r.x < t.x ? a - o : a + o;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(s - t.y) * a > Math.abs(i - t.x) * l) {
    let u = r.y < t.y ? t.y - l - s : s - l - t.y;
    n = h * u / c;
    const f = {
      x: r.x < t.x ? r.x + n : r.x - h + n,
      y: r.y < t.y ? r.y + c - u : r.y - c + u
    };
    return n === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), P.debug(`abc89 top/bottom calc, Q ${c}, q ${u}, R ${h}, r ${n}`, f), f;
  } else {
    r.x < t.x ? n = t.x - a - i : n = i - a - t.x;
    let u = c * n / h, f = r.x < t.x ? r.x + h - n : r.x - h + n, d = r.y < t.y ? r.y + u : r.y - u;
    return P.debug(`sides calc abc89, Q ${c}, q ${u}, R ${h}, r ${n}`, { _x: f, _y: d }), n === 0 && (f = t.x, d = t.y), h === 0 && (f = t.x), c === 0 && (d = t.y), { x: f, y: d };
  }
}, "intersection"), fc = /* @__PURE__ */ p((e, t) => {
  P.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], s = !1;
  return e.forEach((o) => {
    if (P.info("abc88 checking point", o, t), !iS(t, o) && !s) {
      const a = sS(t, i, o);
      P.debug("abc88 inside", o, i, a), P.debug("abc88 intersection", a, t);
      let n = !1;
      r.forEach((l) => {
        n = n || l.x === a.x && l.y === a.y;
      }), r.some((l) => l.x === a.x && l.y === a.y) ? P.warn("abc88 no intersect", a, r) : r.push(a), s = !0;
    } else
      P.warn("abc88 outside", o, i), i = o, s || r.push(o);
  }), P.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Ug(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const s = e[i - 1], o = e[i], a = e[i + 1];
    (s.x === o.x && o.y === a.y && Math.abs(o.x - a.x) > 5 && Math.abs(o.y - s.y) > 5 || s.y === o.y && o.x === a.x && Math.abs(o.x - s.x) > 5 && Math.abs(o.y - a.y) > 5) && (t.push(o), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
p(Ug, "extractCornerPoints");
var pc = /* @__PURE__ */ p(function(e, t, r) {
  const i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s), a = r / o;
  return { x: t.x - a * i, y: t.y - a * s };
}, "findAdjacentPoint"), oS = /* @__PURE__ */ p(function(e) {
  const { cornerPointPositions: t } = Ug(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const s = e[i - 1], o = e[i + 1], a = e[i], n = pc(s, a, 5), l = pc(o, a, 5), c = l.x - n.x, h = l.y - n.y;
      r.push(n);
      const u = Math.sqrt(2) * 2;
      let f = { x: a.x, y: a.y };
      if (Math.abs(o.x - s.x) > 10 && Math.abs(o.y - s.y) >= 10) {
        P.debug(
          "Corner point fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
        const d = 5;
        a.x === n.x ? f = {
          x: c < 0 ? n.x - d + u : n.x + d - u,
          y: h < 0 ? n.y - u : n.y + u
        } : f = {
          x: c < 0 ? n.x - u : n.x + u,
          y: h < 0 ? n.y - d + u : n.y + d - u
        };
      } else
        P.debug(
          "Corner point skipping fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), aS = /* @__PURE__ */ p((e, t, r) => {
  const i = e - t - r, s = 2, o = 2, a = s + o, n = Math.floor(i / a), l = Array(n).fill(`${s} ${o}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), nS = /* @__PURE__ */ p(function(e, t, r, i, s, o, a, n = !1) {
  if (!a)
    throw new Error(
      `insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`
    );
  const { handDrawnSeed: l } = gt();
  let c = t.points, h = !1;
  const u = s;
  var f = o;
  const d = [];
  for (const M in t.cssCompiledStyles)
    zf(M) || d.push(t.cssCompiledStyles[M]);
  P.debug("UIO intersect check", t.points, f.x, u.x), f.intersect && u.intersect && !n && (c = c.slice(1, t.points.length - 1), c.unshift(u.intersect(c[0])), P.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    f,
    f.intersect(c[c.length - 1])
  ), c.push(f.intersect(c[c.length - 1])));
  const g = btoa(JSON.stringify(c));
  t.toCluster && (P.info("to cluster abc88", r.get(t.toCluster)), c = fc(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (P.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = fc(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((M) => !Number.isNaN(M.y));
  const y = tS(t.curve);
  y !== "rounded" && (m = oS(m));
  let C = Li;
  switch (y) {
    case "linear":
      C = Li;
      break;
    case "basis":
      C = va;
      break;
    case "cardinal":
      C = Fu;
      break;
    case "bumpX":
      C = Su;
      break;
    case "bumpY":
      C = _u;
      break;
    case "catmullRom":
      C = Eu;
      break;
    case "monotoneX":
      C = Ru;
      break;
    case "monotoneY":
      C = Pu;
      break;
    case "natural":
      C = qu;
      break;
    case "step":
      C = Wu;
      break;
    case "stepAfter":
      C = Hu;
      break;
    case "stepBefore":
      C = zu;
      break;
    case "rounded":
      C = Li;
      break;
    default:
      C = va;
  }
  const { x: b, y: k } = t2(t), w = R1().x(b).y(k).curve(C);
  let S;
  switch (t.thickness) {
    case "normal":
      S = "edge-thickness-normal";
      break;
    case "thick":
      S = "edge-thickness-thick";
      break;
    case "invisible":
      S = "edge-thickness-invisible";
      break;
    default:
      S = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      S += " edge-pattern-solid";
      break;
    case "dotted":
      S += " edge-pattern-dotted";
      break;
    case "dashed":
      S += " edge-pattern-dashed";
      break;
    default:
      S += " edge-pattern-solid";
  }
  let v, B = y === "rounded" ? Yg(Gg(m, t), 5) : w(m);
  const O = Array.isArray(t.style) ? t.style : [t.style];
  let N = O.find((M) => M?.startsWith("stroke:")), D = "";
  t.animate && (D = "edge-animation-fast"), t.animation && (D = "edge-animation-" + t.animation);
  let $ = !1;
  if (t.look === "handDrawn") {
    const M = G.svg(e);
    Object.assign([], m);
    const R = M.path(B, {
      roughness: 0.3,
      seed: l
    });
    S += " transition", v = ct(R).select("path").attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + S + (t.classes ? " " + t.classes : "") + (D ? " " + D : "")
    ).attr("style", O ? O.reduce((U, Q) => U + ";" + Q, "") : "");
    let H = v.attr("d");
    v.attr("d", H), e.node().appendChild(v.node());
  } else {
    const M = d.join(";"), R = O ? O.reduce((ut, it) => ut + it + ";", "") : "", H = (M ? M + ";" + R + ";" : R) + ";" + (O ? O.reduce((ut, it) => ut + ";" + it, "") : "");
    v = e.append("path").attr("d", B).attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + S + (t.classes ? " " + t.classes : "") + (D ? " " + D : "")
    ).attr("style", H), N = H.match(/stroke:([^;]+)/)?.[1], $ = t.animate === !0 || !!t.animation || M.includes("animation");
    const U = v.node(), Q = typeof U.getTotalLength == "function" ? U.getTotalLength() : 0, dt = Lh[t.arrowTypeStart] || 0, et = Lh[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !$) {
      const it = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? aS(Q, dt, et) : `0 ${dt} ${Q - dt - et} ${et}`}; stroke-dashoffset: 0;`;
      v.attr("style", it + v.attr("style"));
    }
  }
  v.attr("data-edge", !0), v.attr("data-et", "edge"), v.attr("data-id", t.id), v.attr("data-points", g), v.attr("data-look", Ot(t.look)), t.showPoints && m.forEach((M) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", M.x).attr("cy", M.y);
  });
  let z = "";
  (gt().flowchart.arrowMarkerAbsolute || gt().state.arrowMarkerAbsolute) && (z = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, z = z.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), P.info("arrowTypeStart", t.arrowTypeStart), P.info("arrowTypeEnd", t.arrowTypeEnd);
  const W = !$ && t?.look === "neo";
  Kw(v, t, z, a, i, W, N);
  const I = Math.floor(c.length / 2), F = c[I];
  Ce.isLabelCoordinateInPath(F, v.attr("d")) || (h = !0);
  let L = {};
  return h && (L.updatedPath = c), L.originalPath = t.points, L;
}, "insertEdge");
function Yg(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, s = 1e-5;
  for (let o = 0; o < i; o++) {
    const a = e[o], n = e[o - 1], l = e[o + 1];
    if (o === 0)
      r += `M${a.x},${a.y}`;
    else if (o === i - 1)
      r += `L${a.x},${a.y}`;
    else {
      const c = a.x - n.x, h = a.y - n.y, u = l.x - a.x, f = l.y - a.y, d = Math.hypot(c, h), g = Math.hypot(u, f);
      if (d < s || g < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const m = c / d, y = h / d, C = u / g, b = f / g, k = m * C + y * b, w = Math.max(-1, Math.min(1, k)), S = Math.acos(w);
      if (S < s || Math.abs(Math.PI - S) < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const v = Math.min(t / Math.sin(S / 2), d / 2, g / 2), B = a.x - m * v, O = a.y - y * v, N = a.x + C * v, D = a.y + b * v;
      r += `L${B},${O}`, r += `Q${a.x},${a.y} ${N},${D}`;
    }
  }
  return r;
}
p(Yg, "generateRoundedPath");
function rn(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
p(rn, "calculateDeltaAndAngle");
function Gg(e, t) {
  const r = e.map((s) => ({ ...s }));
  if (e.length >= 2 && Wt[t.arrowTypeStart]) {
    const s = Wt[t.arrowTypeStart], o = e[0], a = e[1], { angle: n } = rn(o, a), l = s * Math.cos(n), c = s * Math.sin(n);
    r[0].x = o.x + l, r[0].y = o.y + c;
  }
  const i = e.length;
  if (i >= 2 && Wt[t.arrowTypeEnd]) {
    const s = Wt[t.arrowTypeEnd], o = e[i - 1], a = e[i - 2], { angle: n } = rn(a, o), l = s * Math.cos(n), c = s * Math.sin(n);
    r[i - 1].x = o.x - l, r[i - 1].y = o.y - c;
  }
  return r;
}
p(Gg, "applyMarkerOffsetsToPoints");
var lS = /* @__PURE__ */ p((e, t, r, i) => {
  t.forEach((s) => {
    ES[s](e, r, i);
  });
}, "insertMarkers"), hS = /* @__PURE__ */ p((e, t, r) => {
  P.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", r + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
}, "extension"), cS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), uS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), dS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), fS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
}, "lollipop"), pS = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "point"), gS = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "circle"), mS = /* @__PURE__ */ p((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", r + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
}, "cross"), yS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), CS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { transitionColor: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${o}`);
}, "barbNeo"), xS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), bS = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), kS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), TS = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), wS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${o}`);
}, "only_one_neo"), SS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${o}`);
}, "zero_or_one_neo"), _S = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${o}`);
}, "one_or_more_neo"), vS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${o}`);
}, "zero_or_more_neo"), BS = /* @__PURE__ */ p((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), LS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${o}`).attr("viewBox", "0 0 25 20").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  ).attr("stroke-linejoin", "miter");
}, "requirement_arrow_neo"), FS = /* @__PURE__ */ p((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), AS = /* @__PURE__ */ p((e, t, r) => {
  const i = Tt(), { themeVariables: s } = i, { strokeWidth: o } = s, a = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
  a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${o}`);
}, "requirement_contains_neo"), ES = {
  extension: hS,
  composition: cS,
  aggregation: uS,
  dependency: dS,
  lollipop: fS,
  point: pS,
  circle: gS,
  cross: mS,
  barb: yS,
  barbNeo: CS,
  only_one: xS,
  zero_or_one: bS,
  one_or_more: kS,
  zero_or_more: TS,
  only_one_neo: wS,
  zero_or_one_neo: SS,
  one_or_more_neo: _S,
  zero_or_more_neo: vS,
  requirement_arrow: BS,
  requirement_contains: FS,
  requirement_arrow_neo: LS,
  requirement_contains_neo: AS
}, MS = lS, $S = {
  common: Hi,
  getConfig: Tt,
  insertCluster: Aw,
  insertEdge: nS,
  insertEdgeLabel: eS,
  insertMarkers: MS,
  insertNode: Hg,
  interpolateToCurve: qn,
  labelHelper: st,
  log: P,
  positionEdgeLabel: rS
}, qi = {}, jg = /* @__PURE__ */ p((e) => {
  for (const t of e)
    qi[t.name] = t;
}, "registerLayoutLoaders"), IS = /* @__PURE__ */ p(() => {
  jg([
    {
      name: "dagre",
      loader: /* @__PURE__ */ p(async () => await import("./dagre-BM42HDAG-BAGb-TWX.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ p(async () => await import("./cose-bilkent-S5V4N54A-OI8_4nCn.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
IS();
var PL = /* @__PURE__ */ p(async (e, t) => {
  if (!(e.layoutAlgorithm in qi))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  if (e.diagramId)
    for (const h of e.nodes) {
      const u = h.domId || h.id;
      h.domId = `${e.diagramId}-${u}`;
    }
  const r = qi[e.layoutAlgorithm], i = await r.loader(), { theme: s, themeVariables: o } = e.config, { useGradient: a, gradientStart: n, gradientStop: l } = o, c = t.attr("id");
  if (t.append("defs").append("filter").attr("id", `${c}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${c}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), a) {
    const h = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    h.append("svg:stop").attr("offset", "0%").attr("stop-color", n).attr("stop-opacity", 1), h.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
  }
  return i.render(e, t, $S, {
    algorithm: r.algorithm
  });
}, "render"), NL = /* @__PURE__ */ p((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in qi)
    return e;
  if (t in qi)
    return P.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), nl = "comm", Xg = "rule", Vg = "decl", OS = "@media", DS = "@import", RS = "@supports", PS = "@namespace", sn = "@keyframes", Zg = "@layer", NS = "@scope", Kg = Math.abs, ll = String.fromCharCode;
function Qg(e) {
  return e.trim();
}
function vs(e, t, r) {
  return e.replace(t, r);
}
function qS(e, t, r) {
  return e.indexOf(t, r);
}
function Hr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Zr(e, t, r) {
  return e.slice(t, r);
}
function Le(e) {
  return e.length;
}
function Jg(e) {
  return e.length;
}
function ds(e, t) {
  return t.push(e), e;
}
var _o = 1, Kr = 1, tm = 0, ce = 0, Lt = 0, ei = "";
function hl(e, t, r, i, s, o, a, n) {
  return { value: e, root: t, parent: r, type: i, props: s, children: o, line: _o, column: Kr, length: a, return: "", siblings: n };
}
function WS() {
  return Lt;
}
function zS() {
  return Lt = ce > 0 ? Hr(ei, --ce) : 0, Kr--, Lt === 10 && (Kr = 1, _o--), Lt;
}
function be() {
  return Lt = ce < tm ? Hr(ei, ce++) : 0, Kr++, Lt === 10 && (Kr = 1, _o++), Lt;
}
function Qe() {
  return Hr(ei, ce);
}
function Bs() {
  return ce;
}
function vo(e, t) {
  return Zr(ei, e, t);
}
function Wi(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function HS(e) {
  return _o = Kr = 1, tm = Le(ei = e), ce = 0, [];
}
function US(e) {
  return ei = "", e;
}
function na(e) {
  return Qg(vo(ce - 1, on(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function YS(e) {
  for (; (Lt = Qe()) && Lt < 33; )
    be();
  return Wi(e) > 2 || Wi(Lt) > 3 ? "" : " ";
}
function GS(e, t) {
  for (; --t && be() && !(Lt < 48 || Lt > 102 || Lt > 57 && Lt < 65 || Lt > 70 && Lt < 97); )
    ;
  return vo(e, Bs() + (t < 6 && Qe() == 32 && be() == 32));
}
function on(e) {
  for (; be(); )
    switch (Lt) {
      // ] ) " '
      case e:
        return ce;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && on(Lt);
        break;
      // (
      case 40:
        e === 41 && on(e);
        break;
      // \
      case 92:
        be();
        break;
    }
  return ce;
}
function jS(e, t) {
  for (; be() && e + Lt !== 57; )
    if (e + Lt === 84 && Qe() === 47)
      break;
  return "/*" + vo(t, ce - 1) + "*" + ll(e === 47 ? e : be());
}
function XS(e) {
  for (; !Wi(Qe()); )
    be();
  return vo(e, ce);
}
function VS(e) {
  return US(Ls("", null, null, null, [""], e = HS(e), 0, [0], e));
}
function Ls(e, t, r, i, s, o, a, n, l) {
  for (var c = 0, h = 0, u = a, f = 0, d = 0, g = 0, m = 1, y = 1, C = 1, b = 0, k = "", w = s, S = o, v = i, B = k; y; )
    switch (g = b, b = be()) {
      // (
      case 40:
        if (g != 108 && Hr(B, u - 1) == 58) {
          qS(B += vs(na(b), "&", "&\f"), "&\f", Kg(c ? n[c - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += na(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += YS(g);
        break;
      // \
      case 92:
        B += GS(Bs() - 1, 7);
        continue;
      // /
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            ds(ZS(jS(be(), Bs()), t, r, l), l), (Wi(g || 1) == 5 || Wi(Qe() || 1) == 5) && Le(B) && Zr(B, -1, void 0) !== " " && (B += " ");
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * m:
        n[c++] = Le(B) * C;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            C == -1 && (B = vs(B, /\f/g, "")), d > 0 && (Le(B) - u || m === 0 && g === 47) && ds(d > 32 ? mc(B + ";", i, r, u - 1, l) : mc(vs(B, " ", "") + ";", i, r, u - 2, l), l);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (ds(v = gc(B, t, r, c, h, s, n, k, w = [], S = [], u, o), o), b === 123)
              if (h === 0)
                Ls(B, t, v, v, w, o, u, n, S);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (Hr(B, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Hr(B, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? Ls(e, v, v, i && ds(gc(e, v, v, 0, 0, s, n, k, s, w = [], u, S), S), s, S, u, n, i ? w : S) : Ls(B, v, v, v, [""], S, 0, n, S);
              }
        }
        c = h = d = 0, m = C = 1, k = B = "", u = a;
        break;
      // :
      case 58:
        u = 1 + Le(B), d = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && zS() == 125)
            continue;
        }
        switch (B += ll(b), b * m) {
          // &
          case 38:
            C = h > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            n[c++] = (Le(B) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Qe() === 45 && (B += na(be())), f = Qe(), h = u = Le(k = B += XS(Bs())), b++;
            break;
          // -
          case 45:
            g === 45 && Le(B) == 2 && (m = 0);
        }
    }
  return o;
}
function gc(e, t, r, i, s, o, a, n, l, c, h, u) {
  for (var f = s - 1, d = s === 0 ? o : [""], g = Jg(d), m = 0, y = 0, C = 0; m < i; ++m)
    for (var b = 0, k = Zr(e, f + 1, f = Kg(y = a[m])), w = e; b < g; ++b)
      (w = Qg(y > 0 ? d[b] + " " + k : vs(k, /&\f/g, d[b]))) && (l[C++] = w);
  return hl(e, t, r, s === 0 ? Xg : n, l, c, h, u);
}
function ZS(e, t, r, i) {
  return hl(e, t, r, nl, ll(WS()), Zr(e, 2, -2), 0, i);
}
function mc(e, t, r, i, s) {
  return hl(e, t, r, Vg, Zr(e, 0, i), Zr(e, i + 1, -1), i, s);
}
function an(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function KS(e, t, r, i) {
  switch (e.type) {
    case Zg:
      if (e.children.length) break;
    case DS:
    case PS:
    case Vg:
      return e.return = e.return || e.value;
    case nl:
      return "";
    case sn:
      return e.return = e.value + "{" + an(e.children, i) + "}";
    case Xg:
      if (!Le(e.value = e.props.join(","))) return "";
  }
  return Le(r = an(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function QS(e) {
  var t = Jg(e);
  return function(r, i, s, o) {
    for (var a = "", n = 0; n < t; n++)
      a += e[n](r, i, s, o) || "";
    return a;
  };
}
var em = "c4", JS = /* @__PURE__ */ p((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), t_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./c4Diagram-AAUBKEIU-cQ2IMFPG.js");
  return { id: em, diagram: e };
}, "loader"), e_ = {
  id: em,
  detector: JS,
  loader: t_
}, r_ = e_, rm = "flowchart", i_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), s_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bds94ZaY.js");
  return { id: rm, diagram: e };
}, "loader"), o_ = {
  id: rm,
  detector: i_,
  loader: s_
}, a_ = o_, im = "flowchart-v2", n_ = /* @__PURE__ */ p((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), l_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bds94ZaY.js");
  return { id: im, diagram: e };
}, "loader"), h_ = {
  id: im,
  detector: n_,
  loader: l_
}, c_ = h_, sm = "er", u_ = /* @__PURE__ */ p((e) => /^\s*erDiagram/.test(e), "detector"), d_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./erDiagram-TEJ5UH35-DNt1IESP.js");
  return { id: sm, diagram: e };
}, "loader"), f_ = {
  id: sm,
  detector: u_,
  loader: d_
}, p_ = f_, om = "gitGraph", g_ = /* @__PURE__ */ p((e) => /^\s*gitGraph/.test(e), "detector"), m_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-PVQCEYII-TDkdJpNc.js");
  return { id: om, diagram: e };
}, "loader"), y_ = {
  id: om,
  detector: g_,
  loader: m_
}, C_ = y_, am = "gantt", x_ = /* @__PURE__ */ p((e) => /^\s*gantt/.test(e), "detector"), b_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ganttDiagram-6RSMTGT7-7BUzdw9h.js");
  return { id: am, diagram: e };
}, "loader"), k_ = {
  id: am,
  detector: x_,
  loader: b_
}, T_ = k_, nm = "info", w_ = /* @__PURE__ */ p((e) => /^\s*info/.test(e), "detector"), S_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./infoDiagram-5YYISTIA-CEX32sgc.js");
  return { id: nm, diagram: e };
}, "loader"), __ = {
  id: nm,
  detector: w_,
  loader: S_
}, lm = "pie", v_ = /* @__PURE__ */ p((e) => /^\s*pie/.test(e), "detector"), B_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./pieDiagram-4H26LBE5-CTaLmgY0.js");
  return { id: lm, diagram: e };
}, "loader"), L_ = {
  id: lm,
  detector: v_,
  loader: B_
}, hm = "quadrantChart", F_ = /* @__PURE__ */ p((e) => /^\s*quadrantChart/.test(e), "detector"), A_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./quadrantDiagram-W4KKPZXB-ByxVQUX9.js");
  return { id: hm, diagram: e };
}, "loader"), E_ = {
  id: hm,
  detector: F_,
  loader: A_
}, M_ = E_, cm = "xychart", $_ = /* @__PURE__ */ p((e) => /^\s*xychart(-beta)?/.test(e), "detector"), I_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./xychartDiagram-2RQKCTM6-BpfSWefK.js");
  return { id: cm, diagram: e };
}, "loader"), O_ = {
  id: cm,
  detector: $_,
  loader: I_
}, D_ = O_, um = "requirement", R_ = /* @__PURE__ */ p((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), P_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./requirementDiagram-4Y6WPE33-DdDUrqFL.js");
  return { id: um, diagram: e };
}, "loader"), N_ = {
  id: um,
  detector: R_,
  loader: P_
}, q_ = N_, dm = "sequence", W_ = /* @__PURE__ */ p((e) => /^\s*sequenceDiagram/.test(e), "detector"), z_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sequenceDiagram-3UESZ5HK-TWNU9YMV.js");
  return { id: dm, diagram: e };
}, "loader"), H_ = {
  id: dm,
  detector: W_,
  loader: z_
}, U_ = H_, fm = "class", Y_ = /* @__PURE__ */ p((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), G_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-4FO5ZUOK-CLP0doZQ.js");
  return { id: fm, diagram: e };
}, "loader"), j_ = {
  id: fm,
  detector: Y_,
  loader: G_
}, X_ = j_, pm = "classDiagram", V_ = /* @__PURE__ */ p((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), Z_ = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./classDiagram-v2-Q7XG4LA2-CLP0doZQ.js");
  return { id: pm, diagram: e };
}, "loader"), K_ = {
  id: pm,
  detector: V_,
  loader: Z_
}, Q_ = K_, gm = "state", J_ = /* @__PURE__ */ p((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), tv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-AJRCARHV-BkLeFckM.js");
  return { id: gm, diagram: e };
}, "loader"), ev = {
  id: gm,
  detector: J_,
  loader: tv
}, rv = ev, mm = "stateDiagram", iv = /* @__PURE__ */ p((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), sv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-BHNVJYJU-C_gojmWl.js");
  return { id: mm, diagram: e };
}, "loader"), ov = {
  id: mm,
  detector: iv,
  loader: sv
}, av = ov, ym = "journey", nv = /* @__PURE__ */ p((e) => /^\s*journey/.test(e), "detector"), lv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./journeyDiagram-JHISSGLW-CpyPr8qY.js");
  return { id: ym, diagram: e };
}, "loader"), hv = {
  id: ym,
  detector: nv,
  loader: lv
}, cv = hv, uv = /* @__PURE__ */ p((e, t, r) => {
  P.debug(`rendering svg for syntax error
`);
  const i = G1(t), s = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), jc(i, 100, 512, !0), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), s.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), s.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), Cm = { draw: uv }, dv = Cm, fv = {
  db: {},
  renderer: Cm,
  parser: {
    parse: /* @__PURE__ */ p(() => {
    }, "parse")
  }
}, pv = fv, xm = "flowchart-elk", gv = /* @__PURE__ */ p((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), mv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bds94ZaY.js");
  return { id: xm, diagram: e };
}, "loader"), yv = {
  id: xm,
  detector: gv,
  loader: mv
}, Cv = yv, bm = "timeline", xv = /* @__PURE__ */ p((e) => /^\s*timeline/.test(e), "detector"), bv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./timeline-definition-PNZ67QCA-Dve33Iz8.js");
  return { id: bm, diagram: e };
}, "loader"), kv = {
  id: bm,
  detector: xv,
  loader: bv
}, Tv = kv, km = "mindmap", wv = /* @__PURE__ */ p((e) => /^\s*mindmap/.test(e), "detector"), Sv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./mindmap-definition-RKZ34NQL-CJFdTyCG.js");
  return { id: km, diagram: e };
}, "loader"), _v = {
  id: km,
  detector: wv,
  loader: Sv
}, vv = _v, Tm = "kanban", Bv = /* @__PURE__ */ p((e) => /^\s*kanban/.test(e), "detector"), Lv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./kanban-definition-UN3LZRKU-DXBDmtda.js");
  return { id: Tm, diagram: e };
}, "loader"), Fv = {
  id: Tm,
  detector: Bv,
  loader: Lv
}, Av = Fv, wm = "sankey", Ev = /* @__PURE__ */ p((e) => /^\s*sankey(-beta)?/.test(e), "detector"), Mv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./sankeyDiagram-5OEKKPKP-Cd2E7hZm.js");
  return { id: wm, diagram: e };
}, "loader"), $v = {
  id: wm,
  detector: Ev,
  loader: Mv
}, Iv = $v, Sm = "packet", Ov = /* @__PURE__ */ p((e) => /^\s*packet(-beta)?/.test(e), "detector"), Dv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-LMA3HP47-BpsED40_.js");
  return { id: Sm, diagram: e };
}, "loader"), Rv = {
  id: Sm,
  detector: Ov,
  loader: Dv
}, _m = "radar", Pv = /* @__PURE__ */ p((e) => /^\s*radar-beta/.test(e), "detector"), Nv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-2AECGRRQ-BcaEtjWs.js");
  return { id: _m, diagram: e };
}, "loader"), qv = {
  id: _m,
  detector: Pv,
  loader: Nv
}, vm = "block", Wv = /* @__PURE__ */ p((e) => /^\s*block(-beta)?/.test(e), "detector"), zv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./blockDiagram-GPEHLZMM-iMd8K_j-.js");
  return { id: vm, diagram: e };
}, "loader"), Hv = {
  id: vm,
  detector: Wv,
  loader: zv
}, Uv = Hv, Bm = "treeView", Yv = /* @__PURE__ */ p((e) => /^\s*treeView-beta/.test(e), "detector"), Gv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-5GNKFQAL-BdCjuZjo.js");
  return { id: Bm, diagram: e };
}, "loader"), jv = {
  id: Bm,
  detector: Yv,
  loader: Gv
}, Xv = jv, Lm = "architecture", Vv = /* @__PURE__ */ p((e) => /^\s*architecture/.test(e), "detector"), Zv = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./architectureDiagram-3BPJPVTR-B4WdtfLW.js");
  return { id: Lm, diagram: e };
}, "loader"), Kv = {
  id: Lm,
  detector: Vv,
  loader: Zv
}, Qv = Kv, Fm = "eventmodeling", Jv = /* @__PURE__ */ p((e) => /^\s*eventmodeling/.test(e), "detector"), tB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-KO2AKTUF-CNnizUCn.js");
  return { id: Fm, diagram: e };
}, "loader"), eB = {
  id: Fm,
  detector: Jv,
  loader: tB
}, rB = eB, Am = "ishikawa", iB = /* @__PURE__ */ p((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), sB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./ishikawaDiagram-YF4QCWOH-BJ4Ar75B.js");
  return { id: Am, diagram: e };
}, "loader"), oB = {
  id: Am,
  detector: iB,
  loader: sB
}, Em = "venn", aB = /* @__PURE__ */ p((e) => /^\s*venn-beta/.test(e), "detector"), nB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./vennDiagram-CIIHVFJN-DeAB94eu.js");
  return { id: Em, diagram: e };
}, "loader"), lB = {
  id: Em,
  detector: aB,
  loader: nB
}, hB = lB, Mm = "treemap", cB = /* @__PURE__ */ p((e) => /^\s*treemap/.test(e), "detector"), uB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./diagram-OG6HWLK6-BzFe1VIh.js");
  return { id: Mm, diagram: e };
}, "loader"), dB = {
  id: Mm,
  detector: cB,
  loader: uB
}, $m = "wardley-beta", fB = /* @__PURE__ */ p((e) => /^\s*wardley-beta/i.test(e), "detector"), pB = /* @__PURE__ */ p(async () => {
  const { diagram: e } = await import("./wardleyDiagram-YWT4CUSO-ppLV1tJe.js");
  return { id: $m, diagram: e };
}, "loader"), gB = {
  id: $m,
  detector: fB,
  loader: pB
}, mB = gB, yc = !1, Bo = /* @__PURE__ */ p(() => {
  yc || (yc = !0, $s("error", pv, (e) => e.toLowerCase().trim() === "error"), $s(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ p(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ p(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ p(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ p(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ua(Cv, vv, Qv), ua(
    r_,
    Av,
    Q_,
    X_,
    p_,
    T_,
    __,
    L_,
    q_,
    U_,
    c_,
    a_,
    Tv,
    C_,
    av,
    rv,
    cv,
    M_,
    Iv,
    Rv,
    D_,
    Uv,
    rB,
    Xv,
    qv,
    oB,
    dB,
    hB,
    mB
  ));
}, "addDiagrams"), yB = /* @__PURE__ */ p(async () => {
  P.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(yr).map(async ([r, { detector: i, loader: s }]) => {
      if (s)
        try {
          ma(r);
        } catch {
          try {
            const { diagram: o, id: a } = await s();
            $s(a, o, i);
          } catch (o) {
            throw P.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete yr[r], o;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    P.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      P.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), CB = "graphics-document document";
function Im(e, t) {
  e.attr("role", CB), t !== "" && e.attr("aria-roledescription", t);
}
p(Im, "setA11yDiagramInfo");
function Om(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const s = `chart-desc-${i}`;
      e.attr("aria-describedby", s), e.insert("desc", ":first-child").attr("id", s).text(r);
    }
    if (t) {
      const s = `chart-title-${i}`;
      e.attr("aria-labelledby", s), e.insert("title", ":first-child").attr("id", s).text(t);
    }
  }
}
p(Om, "addSVGa11yTitleDescription");
var nn = class Dm {
  constructor(t, r, i, s, o) {
    this.type = t, this.text = r, this.db = i, this.parser = s, this.renderer = o;
  }
  static {
    p(this, "Diagram");
  }
  static async fromText(t, r = {}) {
    const i = Tt(), s = cn(t, i);
    t = Z2(t) + `
`;
    try {
      ma(s);
    } catch {
      const c = dy(s);
      if (!c)
        throw new Mc(`Diagram ${s} not found.`);
      const { id: h, diagram: u } = await c();
      $s(h, u);
    }
    const { db: o, parser: a, renderer: n, init: l } = ma(s);
    return a.parser && (a.parser.yy = o), o.clear?.(), l?.(i), r.title && o.setDiagramTitle?.(r.title), await a.parse(t), new Dm(s, t, o, a, n);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, Cc = [], xB = /* @__PURE__ */ p(() => {
  Cc.forEach((e) => {
    e();
  }), Cc = [];
}, "attachFunctions"), bB = /* @__PURE__ */ p((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Rm(e) {
  const t = e.match(Ec);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = Jk(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: Qk
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
p(Rm, "extractFrontMatter");
var kB = /* @__PURE__ */ p((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), TB = /* @__PURE__ */ p((e) => {
  const { text: t, metadata: r } = Rm(e), { displayMode: i, title: s, config: o = {} } = r;
  return i && (o.gantt || (o.gantt = {}), o.gantt.displayMode = i), { title: s, config: o, text: t };
}, "processFrontmatter"), wB = /* @__PURE__ */ p((e) => {
  const t = Ce.detectInit(e) ?? {}, r = Ce.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: R2(e),
    directive: t
  };
}, "processDirectives");
function cl(e) {
  const t = kB(e), r = TB(t), i = wB(r.text), s = Yn(r.config, i.directive);
  return e = bB(i.text), {
    code: e,
    title: r.title,
    config: s
  };
}
p(cl, "preprocessDiagram");
function Pm(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
p(Pm, "toBase64");
var SB = 5e4, _B = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", vB = "sandbox", BB = "loose", LB = "http://www.w3.org/2000/svg", FB = "http://www.w3.org/1999/xlink", AB = "http://www.w3.org/1999/xhtml", EB = "100%", MB = "100%", $B = "border:0;margin:0;", IB = "margin:0", OB = "allow-top-navigation-by-user-activation allow-popups", DB = 'The "iframe" tag is not supported by your browser.', RB = ["foreignobject"], PB = ["dominant-baseline"];
function ul(e) {
  const t = cl(e);
  return Es(), Ny(t.config ?? {}), t;
}
p(ul, "processAndSetConfigs");
async function Nm(e, t) {
  Bo();
  try {
    const { code: r, config: i } = ul(e);
    return { diagramType: (await Wm(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
p(Nm, "parse");
var xc = /* @__PURE__ */ p((e, t, r = []) => {
  const i = Rc(`{ ${r.join(" !important; ")} !important; }`);
  return `.${e} ${t} ${i}`;
}, "cssImportantStyles"), NB = /* @__PURE__ */ p((e, t = /* @__PURE__ */ new Map()) => {
  const r = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    r.cssRules.length
  ), e.altFontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    r.cssRules.length
  ), t instanceof Map) {
    const n = Kt(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      $h(l.styles) || n.forEach((c) => {
        r.insertRule(
          xc(l.id, c, l.styles),
          r.cssRules.length
        );
      }), $h(l.textStyles) || r.insertRule(
        xc(
          l.id,
          "tspan",
          (l?.textStyles || []).map((c) => c.replace("color", "fill"))
        ),
        r.cssRules.length
      );
    });
  }
  let i = "";
  if (e.themeCSS !== void 0)
    if (typeof r.replaceSync == "function") {
      const s = new CSSStyleSheet();
      s.replaceSync(e.themeCSS), i = ga(s) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + ga(r);
}, "createCssStyles"), qB = /* @__PURE__ */ p((e, t) => an(
  VS(`${e}{${t}}`),
  QS([
    /* @__PURE__ */ p(function(i, s, o, a) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === sn)
          return;
        i.props = i.props.map((n) => n.startsWith(e) ? n : `${e} ${n}`);
      } else i.type.startsWith("@") && ([
        ...[
          OS,
          RS,
          Zg,
          NS,
          "@container",
          "@starting-style"
        ],
        sn
        // needed for Mermaid's animation feature
      ].includes(i.type) || (P.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = nl));
    }, "addNamespace"),
    KS
  ])
), "compileCSS"), WB = /* @__PURE__ */ p((e, t, r, i) => {
  const s = NB(e, r), o = sC(
    t,
    s,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return qB(i, o);
}, "createUserStyles"), zB = /* @__PURE__ */ p((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = kr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), HB = /* @__PURE__ */ p((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : MB, i = Pm(`<body style="${IB}">${e}</body>`);
  return `<iframe style="width:${EB};height:${r};${$B}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${OB}">
  ${DB}
</iframe>`;
}, "putIntoIFrame"), bc = /* @__PURE__ */ p((e, t, r, i, s) => {
  const o = e.append("div");
  o.attr("id", r), i && o.attr("style", i);
  const a = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", LB);
  return s && a.attr("xmlns:xlink", s), a.append("g"), e;
}, "appendDivSvgG");
function ln(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
p(ln, "sandboxedIframe");
var UB = /* @__PURE__ */ p((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), YB = /* @__PURE__ */ p(async function(e, t, r) {
  Bo();
  const i = ul(t);
  t = i.code;
  const s = Tt();
  P.debug(s), t.length > (s?.maxTextSize ?? SB) && (t = _B);
  const o = `#${e}`, a = "i" + e, n = "#" + a, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ p(() => {
    const W = ct(f ? n : c).node();
    W && "remove" in W && W.remove();
  }, "removeTempElements");
  let u = ct(document.body);
  const f = s.securityLevel === vB, d = s.securityLevel === BB, g = s.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const z = ln(ct(r), a);
      u = ct(z.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = ct(r);
    bc(u, e, l, `font-family: ${g}`, FB);
  } else {
    if (UB(document, e, l, a), f) {
      const z = ln(ct(document.body), a);
      u = ct(z.nodes()[0].contentDocument.body), u.node().style.margin = "0";
    } else
      u = ct("body");
    bc(u, e, l);
  }
  let m, y;
  try {
    m = await nn.fromText(t, { title: i.title });
  } catch (z) {
    if (s.suppressErrorRendering)
      throw h(), z;
    m = await nn.fromText("error"), y = z;
  }
  const C = u.select(c).node(), b = m.type, k = C.firstChild, w = k.firstChild, S = m.renderer.getClasses?.(t, m), v = WB(s, b, S, o), B = document.createElement("style");
  B.innerHTML = v, k.insertBefore(B, w);
  try {
    await m.renderer.draw(t, e, "11.15.0", m);
  } catch (z) {
    throw s.suppressErrorRendering ? h() : dv.draw(t, e, "11.15.0"), z;
  }
  const O = u.select(`${c} svg`), N = m.db.getAccTitle?.(), D = m.db.getAccDescription?.();
  zm(b, O, N, D), u.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", AB);
  let $ = u.select(c).node().innerHTML;
  if (P.debug("config.arrowMarkerAbsolute", s.arrowMarkerAbsolute), $ = zB($, f, Ge(s.arrowMarkerAbsolute)), f) {
    const z = u.select(c + " svg").node();
    $ = HB($, z);
  } else d || ($ = Ur.sanitize($, {
    ADD_TAGS: RB,
    ADD_ATTR: PB,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (xB(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: $,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function qm(e = {}) {
  const t = Mt({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), Ry(t), t?.theme && t.theme in We ? t.themeVariables = We[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = We.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? Dy(t) : Pc();
  hn(r.logLevel), Bo();
}
p(qm, "initialize");
var Wm = /* @__PURE__ */ p((e, t = {}) => {
  const { code: r } = cl(e);
  return nn.fromText(r, t);
}, "getDiagramFromText");
function zm(e, t, r, i) {
  Im(t, e), Om(t, r, i, t.attr("id"));
}
p(zm, "addA11yInfo");
var wr = Object.freeze({
  render: YB,
  parse: Nm,
  getDiagramFromText: Wm,
  initialize: qm,
  getConfig: Tt,
  setConfig: Nc,
  getSiteConfig: Pc,
  updateSiteConfig: Py,
  reset: /* @__PURE__ */ p(() => {
    Es();
  }, "reset"),
  globalReset: /* @__PURE__ */ p(() => {
    Es(Yr);
  }, "globalReset"),
  defaultConfig: Yr
});
hn(Tt().logLevel);
Es(Tt());
var GB = /* @__PURE__ */ p((e, t, r) => {
  P.warn(e), Un(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), Hm = /* @__PURE__ */ p(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await jB(e);
  } catch (t) {
    if (Un(t) && P.error(t.str), Ye.parseError && Ye.parseError(t), !e.suppressErrors)
      throw P.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), jB = /* @__PURE__ */ p(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = wr.getConfig();
  P.debug(`${e ? "" : "No "}Callback function found`);
  let s;
  if (r)
    s = r;
  else if (t)
    s = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  P.debug(`Found ${s.length} diagrams`), i?.startOnLoad !== void 0 && (P.debug("Start On Load: " + i?.startOnLoad), wr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const o = new Ce.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const n = [];
  for (const l of Array.from(s)) {
    if (P.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${o.next()}`;
    a = l.innerHTML, a = ep(Ce.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = Ce.detectInit(a);
    h && P.debug("Detected early reinit: ", h);
    try {
      const { svg: u, bindFunctions: f } = await jm(c, a, l);
      l.innerHTML = u, e && await e(c), f && f(l);
    } catch (u) {
      GB(u, n, Ye.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, "runThrowsErrors"), Um = /* @__PURE__ */ p(function(e) {
  wr.initialize(e);
}, "initialize"), XB = /* @__PURE__ */ p(async function(e, t, r) {
  P.warn("mermaid.init is deprecated. Please use run instead."), e && Um(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await Hm(i);
}, "init"), VB = /* @__PURE__ */ p(async (e, {
  lazyLoad: t = !0
} = {}) => {
  Bo(), ua(...e), t === !1 && await yB();
}, "registerExternalDiagrams"), Ym = /* @__PURE__ */ p(function() {
  if (Ye.startOnLoad) {
    const { startOnLoad: e } = wr.getConfig();
    e && Ye.run().catch((t) => P.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Ym, !1);
var ZB = /* @__PURE__ */ p(function(e) {
  Ye.parseError = e;
}, "setParseErrorHandler"), oo = [], la = !1, Gm = /* @__PURE__ */ p(async () => {
  if (!la) {
    for (la = !0; oo.length > 0; ) {
      const e = oo.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          P.error("Error executing queue", t);
        }
    }
    la = !1;
  }
}, "executeQueue"), KB = /* @__PURE__ */ p(async (e, t) => new Promise((r, i) => {
  const s = /* @__PURE__ */ p(() => new Promise((o, a) => {
    wr.parse(e, t).then(
      (n) => {
        o(n), r(n);
      },
      (n) => {
        P.error("Error parsing", n), Ye.parseError?.(n), a(n), i(n);
      }
    );
  }), "performCall");
  oo.push(s), Gm().catch(i);
}), "parse"), jm = /* @__PURE__ */ p((e, t, r) => new Promise((i, s) => {
  const o = /* @__PURE__ */ p(() => new Promise((a, n) => {
    wr.render(e, t, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        P.error("Error parsing", l), Ye.parseError?.(l), n(l), s(l);
      }
    );
  }), "performCall");
  oo.push(o), Gm().catch(s);
}), "render"), QB = /* @__PURE__ */ p(() => Object.keys(yr).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), Ye = {
  startOnLoad: !0,
  mermaidAPI: wr,
  parse: KB,
  render: jm,
  init: XB,
  run: Hm,
  registerExternalDiagrams: VB,
  registerLayoutLoaders: jg,
  initialize: Um,
  parseError: void 0,
  contentLoaded: Ym,
  setParseErrorHandler: ZB,
  detectType: cn,
  registerIconPacks: iw,
  getRegisteredDiagramsMetadata: QB
}, fs = Ye;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
class dl extends x0 {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new dl()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(jt.eINSTANCE);
  }
  /**
   * Create a new MermaidWidgetSettings instance
   */
  createMermaidWidgetSettings() {
    return new zt();
  }
  /**
   * Create an instance of the given class
   */
  create(t) {
    switch (t.getName()) {
      case "MermaidWidgetSettings":
        return this.createMermaidWidgetSettings();
      default:
        throw new Error(`Unknown class: ${t.getName()}`);
    }
  }
}
class jt extends b0 {
  static eNAME = "mermaidwidgets";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.mermaid";
  static eNS_PREFIX = "mermaidwidgets";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new jt(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    MERMAID_WIDGET_SETTINGS: null,
    MERMAID_WIDGET_SETTINGS__THEME: null,
    MERMAID_WIDGET_SETTINGS__VALUE: null
  };
  constructor() {
    super(), this.setName(jt.eNAME), this.setNsURI(jt.eNS_URI), this.setNsPrefix(jt.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    k0.INSTANCE.set(jt.eNS_URI, this), this.setEFactoryInstance(dl.eINSTANCE);
    const t = new T0();
    t.setName("MermaidWidgetSettings"), t.setAbstract(!1), t.setInterface(!1), this.getEClassifiers().push(t), t.setEPackage(this), jt.Literals.MERMAID_WIDGET_SETTINGS = t;
    const r = new Pl();
    r.setName("theme"), r.setLowerBound(0), r.setUpperBound(1), t.getEStructuralFeatures().push(r), jt.Literals.MERMAID_WIDGET_SETTINGS__THEME = r;
    const i = new Pl();
    i.setName("value"), i.setLowerBound(0), i.setUpperBound(1), t.getEStructuralFeatures().push(i), jt.Literals.MERMAID_WIDGET_SETTINGS__VALUE = i, jt.Literals.MERMAID_WIDGET_SETTINGS__THEME.setEType(Nl().getEClassifier("EString")), jt.Literals.MERMAID_WIDGET_SETTINGS__VALUE.setEType(Nl().getEClassifier("EString"));
  }
}
class zt extends w0 {
  // Feature ID Constants (eLiterals)
  static THEME = 0;
  static VALUE = 1;
  // Private fields
  _theme = "default";
  _value = "flowchart TD A[Christmas] -->|Get money| B(Go shopping) B --> C{Let me think} C -->|One| D[Laptop C -->|Two| E[iPhone] C -->|Three| F[fa:fa-car Car]";
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return jt.Literals.MERMAID_WIDGET_SETTINGS;
  }
  // Getters and Setters
  get theme() {
    return this._theme;
  }
  set theme(t) {
    const r = this._theme;
    this._theme = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(zt.THEME),
      getOldValue: () => r,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => zt.THEME,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(t) {
    const r = this._value;
    this._value = t, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(zt.VALUE),
      getOldValue: () => r,
      getNewValue: () => t,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => zt.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case zt.THEME:
        return this.theme;
      case zt.VALUE:
        return this.value;
      default:
        return super.eGet(t);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(t, r) {
    switch (this.eClass().getFeatureID(t)) {
      case zt.THEME:
        this.theme = r, super.eSet(t, r);
        break;
      case zt.VALUE:
        this.value = r, super.eSet(t, r);
        break;
      default:
        super.eSet(t, r);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(t) {
    switch (this.eClass().getFeatureID(t)) {
      case zt.THEME:
        return this._theme !== "default";
      case zt.VALUE:
        return this._value !== "flowchart TD A[Christmas] -->|Get money| B(Go shopping) B --> C{Let me think} C -->|One| D[Laptop C -->|Two| E[iPhone] C -->|Three| F[fa:fa-car Car]";
      default:
        return super.eIsSet(t);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(t) {
    switch (this.eClass().getFeatureID(t)) {
      case zt.THEME:
        this._theme = "default";
        return;
      case zt.VALUE:
        this._value = "flowchart TD A[Christmas] -->|Get money| B(Go shopping) B --> C{Let me think} C -->|One| D[Laptop C -->|Two| E[iPhone] C -->|Three| F[fa:fa-car Car]";
        return;
      default:
        super.eUnset(t);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      theme: this.theme,
      value: this.value
    };
  }
}
const JB = /* @__PURE__ */ l0({
  __name: "MermaidWidget",
  props: /* @__PURE__ */ h0({
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(e, { expose: t }) {
    const r = c0(e, "configv"), i = e, { id: s } = u0(i), o = Il(C0.TINY_EMITTER), a = Il(r0), l = y0().params.pageid || "", c = Wo(1);
    class h extends no {
      refresh() {
        m.value = Date.now(), zo(() => {
          fs.run({ nodes: g.value ? [g.value] : [] }).catch(() => {
          });
        });
      }
      zoom(b) {
        c.value = Math.max(0.1, Math.min(5, b)), g.value && (g.value.style.transform = `scale(${c.value})`, g.value.style.transformOrigin = "top left");
      }
    }
    const u = new h();
    t(u), Ol(() => {
      s?.value && a.registerInstance(s.value, u, "MermaidWidget", l);
    }), d0(() => {
      s?.value && a.unregisterInstance(s.value);
    });
    const f = () => {
      s?.value && o.emit("widget:MermaidWidget:click", {
        type: "widget:MermaidWidget:click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, d = () => {
      s?.value && o.emit("widget:MermaidWidget:right_click", {
        type: "widget:MermaidWidget:right_click",
        widgetId: s.value,
        payload: { widgetId: s.value, timestamp: Date.now() }
      });
    }, g = Wo(null), m = Wo(Date.now()), y = new zt();
    return Ol(() => {
      r.value && Object.assign(r.value, {
        ...Rl(y),
        ...Rl(r.value)
      });
    }), Dl(() => r.value.theme, async (C) => {
      fs.initialize({
        theme: C
      }), m.value = Date.now(), await zo();
      try {
        await fs.run({
          nodes: g.value ? [g.value] : []
        });
      } catch {
      }
    }, { immediate: !0 }), Dl(() => r.value.value, async (C) => {
      m.value = Date.now(), await zo();
      try {
        await fs.run({
          nodes: g.value ? [g.value] : []
        });
      } catch {
      }
    }, { deep: !0, immediate: !0 }), (C, b) => (p0(), f0("div", {
      ref_key: "container",
      ref: g,
      key: m.value,
      onClick: f,
      onContextmenu: g0(d, ["prevent"]),
      class: "w-full h-full"
    }, m0(r.value.value), 33));
  }
}), tL = [
  {
    name: "Mermaid Clicked",
    type: "click",
    description: "Triggered when the mermaid widget is clicked",
    payloadType: Ml
  },
  {
    name: "Mermaid Right Clicked",
    type: "right_click",
    description: "Triggered when the mermaid widget is right-clicked",
    payloadType: Ml
  }
], eL = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the mermaid widget.

The diagram is written, not configured, so it gets the room to be written
in - twelve lines, which is about where a flowchart stops fitting on one
screen anyway. The theme comes after it: it is a choice about the finished
diagram, and there is nothing to theme until something is drawn.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="MermaidWidgetSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.mermaid#//MermaidWidgetSettings"/>

  <components xsi:type="uimodel:FormView" name="MermaidWidgetSettingsFormView">
    <fields xsi:type="uimodel:TextAreaWidget"
        name="value"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.mermaid#//MermaidWidgetSettings/value"
        label="Diagramm"
        rows="12"
        placeholder="graph TD; A--&gt;B;"/>
    <fields xsi:type="uimodel:SelectWidget"
        name="theme"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.mermaid#//MermaidWidgetSettings/theme"
        label="Farbschema">
      <values>default</values>
      <values>neutral</values>
      <values>dark</values>
      <values>forest</values>
      <values>base</values>
    </fields>
  </components>
</uimodel:UIModel>
`;
var rL = Object.defineProperty, iL = Object.getOwnPropertyDescriptor, fl = (e, t, r, i) => {
  for (var s = i > 1 ? void 0 : i ? iL(t, r) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (s = (i ? a(t, r, s) : a(s)) || s);
  return i && s && rL(t, r, s), s;
}, kc = (e, t) => (r, i) => t(r, i, e);
jt.eINSTANCE;
const Pr = "MermaidWidget";
let ao = class {
  constructor(e, t) {
    this.events = e, this.actions = t;
  }
  type = Pr;
  component = JB;
  supportedDSTypes = [];
  icon = _0;
  name = "Mermaid";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: eL,
    uri: "/mermaid-settings.ui.xmi",
    ePackage: () => jt.eINSTANCE,
    create: () => new zt()
  };
  register() {
    this.events.registerWidget(Pr, tL), this.actions.registerWidgetType(Pr, no, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Pr), this.actions.unregisterWidgetType(Pr);
  }
};
fl([
  o0()
], ao.prototype, "register", 1);
fl([
  a0()
], ao.prototype, "unregister", 1);
ao = fl([
  n0({
    service: [S0],
    properties: { "widget.type": Pr }
  }),
  kc(0, $l(i0)),
  kc(1, $l(s0))
], ao);
export {
  Xc as $,
  gL as A,
  Je as B,
  $0 as C,
  Tt as D,
  fC as E,
  Yn as F,
  Dc as G,
  z2 as H,
  G1 as I,
  Qk as J,
  Cy as K,
  Ai as L,
  fL as M,
  Co as N,
  jy as O,
  Gc as P,
  eh as Q,
  R1 as R,
  va as S,
  W2 as T,
  zi as U,
  Te as V,
  A as W,
  E as X,
  eC as Y,
  $2 as Z,
  p as _,
  nC as a,
  nS as a$,
  $1 as a0,
  kh as a1,
  bh as a2,
  SL as a3,
  xL as a4,
  TL as a5,
  kL as a6,
  yL as a7,
  Ar as a8,
  wn as a9,
  l2 as aA,
  b2 as aB,
  x2 as aC,
  C2 as aD,
  T2 as aE,
  k2 as aF,
  n2 as aG,
  Ff as aH,
  f2 as aI,
  u2 as aJ,
  c2 as aK,
  Af as aL,
  t2 as aM,
  Kt as aN,
  je as aO,
  hi as aP,
  Gn as aQ,
  Rf as aR,
  kr as aS,
  Wf as aT,
  vc as aU,
  MS as aV,
  OL as aW,
  RL as aX,
  $L as aY,
  Z as aZ,
  IL as a_,
  wL as aa,
  CL as ab,
  vL as ac,
  _L as ad,
  bL as ae,
  Aw as af,
  Hg as ag,
  DL as ah,
  nt as ai,
  Ae as aj,
  Hn as ak,
  G as al,
  ow as am,
  Pn as an,
  Dn as ao,
  Ts as ap,
  y2 as aq,
  m2 as ar,
  g2 as as,
  p2 as at,
  a2 as au,
  Bf as av,
  h2 as aw,
  o2 as ax,
  d2 as ay,
  Lf as az,
  aC as b,
  rS as b0,
  eS as b1,
  I1 as b2,
  dL as b3,
  L0 as b4,
  Vi as b5,
  iw as b6,
  rw as b7,
  xn as b8,
  Ze as b9,
  ph as ba,
  fb as bb,
  $i as bc,
  V as bd,
  zf as be,
  ie as bf,
  ab as bg,
  Cn as bh,
  lu as bi,
  Yi as bj,
  uu as bk,
  mL as bl,
  M0 as bm,
  ao as bn,
  JB as bo,
  zt as bp,
  jt as bq,
  eL as br,
  gt as c,
  ct as d,
  jc as e,
  Mt as f,
  hC as g,
  Ue as h,
  ke as i,
  i2 as j,
  Hi as k,
  P as l,
  Nf as m,
  pL as n,
  NL as o,
  cC as p,
  uC as q,
  PL as r,
  lC as s,
  Jk as t,
  Ce as u,
  Zw as v,
  Y2 as w,
  BL as x,
  Ur as y,
  oC as z
};
