import { EVENT_ACTIONS_REGISTRY as s0, EVENT_REGISTRY_ID as a0, EVENT_ACTIONS_REGISTRY_ID as n0 } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as l0, deactivate as h0, component as c0, inject as Ml } from "@eclipse-daanse/tsm";
import { defineComponent as bc, mergeModels as d0, useModel as kc, toRefs as u0, inject as El, ref as qs, onMounted as $l, onUnmounted as p0, watch as Ol, nextTick as Ws, createElementBlock as wc, openBlock as Tc, withModifiers as f0, toDisplayString as g0, resolveComponent as Il, createVNode as Dl } from "vue";
import { useRoute as m0 } from "vue-router";
import { WidgetAction as Sc, WidgetActionInterface as C0, Payload as Rl } from "org.eclipse.daanse.board.app.lib.events";
import { Documentation as _c, Attribute as vc, ModelClass as x0 } from "org.eclipse.daanse.board.app.lib.annotations";
import { WIDGET_SERVICE_ID as b0 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: y0 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), k0 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var w0 = Object.defineProperty, T0 = Object.getOwnPropertyDescriptor, Bc = (e, t, r, i) => {
  for (var o = T0(t, r), s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (o = a(t, r, o) || o);
  return o && w0(t, r, o), o;
};
class ns extends C0 {
  refresh() {
    throw new Error("refresh not implemented");
  }
  zoom(t) {
    throw new Error("zoom not implemented");
  }
}
Bc([
  Sc({ eventType: "mermaid.refresh" })
], ns.prototype, "refresh");
Bc([
  Sc({ eventType: "mermaid.zoom" })
], ns.prototype, "zoom");
function S0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} }, _0 = fo.exports, Pl;
function v0() {
  return Pl || (Pl = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(_0, (function() {
      var r = 1e3, i = 6e4, o = 36e5, s = "millisecond", a = "second", n = "minute", l = "hour", c = "day", h = "week", d = "month", p = "quarter", u = "year", g = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, b = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
        var F = ["th", "st", "nd", "rd"], L = O % 100;
        return "[" + O + (F[(L - 20) % 10] || F[L] || F[0]) + "]";
      } }, k = function(O, F, L) {
        var E = String(O);
        return !E || E.length >= F ? O : "" + Array(F + 1 - E.length).join(L) + O;
      }, T = { s: k, z: function(O) {
        var F = -O.utcOffset(), L = Math.abs(F), E = Math.floor(L / 60), R = L % 60;
        return (F <= 0 ? "+" : "-") + k(E, 2, "0") + ":" + k(R, 2, "0");
      }, m: function O(F, L) {
        if (F.date() < L.date()) return -O(L, F);
        var E = 12 * (L.year() - F.year()) + (L.month() - F.month()), R = F.clone().add(E, d), H = L - R < 0, Y = F.clone().add(E + (H ? -1 : 1), d);
        return +(-(E + (L - R) / (H ? R - Y : Y - R)) || 0);
      }, a: function(O) {
        return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
      }, p: function(O) {
        return { M: d, y: u, w: h, d: c, D: g, h: l, m: n, s: a, ms: s, Q: p }[O] || String(O || "").toLowerCase().replace(/s$/, "");
      }, u: function(O) {
        return O === void 0;
      } }, S = "en", v = {};
      v[S] = b;
      var B = "$isDayjsObject", I = function(O) {
        return O instanceof z || !(!O || !O[B]);
      }, N = function O(F, L, E) {
        var R;
        if (!F) return S;
        if (typeof F == "string") {
          var H = F.toLowerCase();
          v[H] && (R = H), L && (v[H] = L, R = H);
          var Y = F.split("-");
          if (!R && Y.length > 1) return O(Y[0]);
        } else {
          var Q = F.name;
          v[Q] = F, R = Q;
        }
        return !E && R && (S = R), R || !E && S;
      }, D = function(O, F) {
        if (I(O)) return O.clone();
        var L = typeof F == "object" ? F : {};
        return L.date = O, L.args = arguments, new z(L);
      }, $ = T;
      $.l = N, $.i = I, $.w = function(O, F) {
        return D(O, { locale: F.$L, utc: F.$u, x: F.$x, $offset: F.$offset });
      };
      var z = (function() {
        function O(L) {
          this.$L = N(L.locale, null, !0), this.parse(L), this.$x = this.$x || L.x || {}, this[B] = !0;
        }
        var F = O.prototype;
        return F.parse = function(L) {
          this.$d = (function(E) {
            var R = E.date, H = E.utc;
            if (R === null) return /* @__PURE__ */ new Date(NaN);
            if ($.u(R)) return /* @__PURE__ */ new Date();
            if (R instanceof Date) return new Date(R);
            if (typeof R == "string" && !/Z$/i.test(R)) {
              var Y = R.match(y);
              if (Y) {
                var Q = Y[2] - 1 || 0, ut = (Y[7] || "0").substring(0, 3);
                return H ? new Date(Date.UTC(Y[1], Q, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, ut)) : new Date(Y[1], Q, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, ut);
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
        }, F.isSame = function(L, E) {
          var R = D(L);
          return this.startOf(E) <= R && R <= this.endOf(E);
        }, F.isAfter = function(L, E) {
          return D(L) < this.startOf(E);
        }, F.isBefore = function(L, E) {
          return this.endOf(E) < D(L);
        }, F.$g = function(L, E, R) {
          return $.u(L) ? this[E] : this.set(R, L);
        }, F.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, F.valueOf = function() {
          return this.$d.getTime();
        }, F.startOf = function(L, E) {
          var R = this, H = !!$.u(E) || E, Y = $.p(L), Q = function(xt, Ct) {
            var vt = $.w(R.$u ? Date.UTC(R.$y, Ct, xt) : new Date(R.$y, Ct, xt), R);
            return H ? vt : vt.endOf(c);
          }, ut = function(xt, Ct) {
            return $.w(R.toDate()[xt].apply(R.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ct)), R);
          }, et = this.$W, dt = this.$M, it = this.$D, rt = "set" + (this.$u ? "UTC" : "");
          switch (Y) {
            case u:
              return H ? Q(1, 0) : Q(31, 11);
            case d:
              return H ? Q(1, dt) : Q(0, dt + 1);
            case h:
              var ht = this.$locale().weekStart || 0, ft = (et < ht ? et + 7 : et) - ht;
              return Q(H ? it - ft : it + (6 - ft), dt);
            case c:
            case g:
              return ut(rt + "Hours", 0);
            case l:
              return ut(rt + "Minutes", 1);
            case n:
              return ut(rt + "Seconds", 2);
            case a:
              return ut(rt + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, F.endOf = function(L) {
          return this.startOf(L, !1);
        }, F.$set = function(L, E) {
          var R, H = $.p(L), Y = "set" + (this.$u ? "UTC" : ""), Q = (R = {}, R[c] = Y + "Date", R[g] = Y + "Date", R[d] = Y + "Month", R[u] = Y + "FullYear", R[l] = Y + "Hours", R[n] = Y + "Minutes", R[a] = Y + "Seconds", R[s] = Y + "Milliseconds", R)[H], ut = H === c ? this.$D + (E - this.$W) : E;
          if (H === d || H === u) {
            var et = this.clone().set(g, 1);
            et.$d[Q](ut), et.init(), this.$d = et.set(g, Math.min(this.$D, et.daysInMonth())).$d;
          } else Q && this.$d[Q](ut);
          return this.init(), this;
        }, F.set = function(L, E) {
          return this.clone().$set(L, E);
        }, F.get = function(L) {
          return this[$.p(L)]();
        }, F.add = function(L, E) {
          var R, H = this;
          L = Number(L);
          var Y = $.p(E), Q = function(dt) {
            var it = D(H);
            return $.w(it.date(it.date() + Math.round(dt * L)), H);
          };
          if (Y === d) return this.set(d, this.$M + L);
          if (Y === u) return this.set(u, this.$y + L);
          if (Y === c) return Q(1);
          if (Y === h) return Q(7);
          var ut = (R = {}, R[n] = i, R[l] = o, R[a] = r, R)[Y] || 1, et = this.$d.getTime() + L * ut;
          return $.w(et, this);
        }, F.subtract = function(L, E) {
          return this.add(-1 * L, E);
        }, F.format = function(L) {
          var E = this, R = this.$locale();
          if (!this.isValid()) return R.invalidDate || m;
          var H = L || "YYYY-MM-DDTHH:mm:ssZ", Y = $.z(this), Q = this.$H, ut = this.$m, et = this.$M, dt = R.weekdays, it = R.months, rt = R.meridiem, ht = function(Ct, vt, he, re) {
            return Ct && (Ct[vt] || Ct(E, H)) || he[vt].slice(0, re);
          }, ft = function(Ct) {
            return $.s(Q % 12 || 12, Ct, "0");
          }, xt = rt || function(Ct, vt, he) {
            var re = Ct < 12 ? "AM" : "PM";
            return he ? re.toLowerCase() : re;
          };
          return H.replace(C, (function(Ct, vt) {
            return vt || (function(he) {
              switch (he) {
                case "YY":
                  return String(E.$y).slice(-2);
                case "YYYY":
                  return $.s(E.$y, 4, "0");
                case "M":
                  return et + 1;
                case "MM":
                  return $.s(et + 1, 2, "0");
                case "MMM":
                  return ht(R.monthsShort, et, it, 3);
                case "MMMM":
                  return ht(it, et);
                case "D":
                  return E.$D;
                case "DD":
                  return $.s(E.$D, 2, "0");
                case "d":
                  return String(E.$W);
                case "dd":
                  return ht(R.weekdaysMin, E.$W, dt, 2);
                case "ddd":
                  return ht(R.weekdaysShort, E.$W, dt, 3);
                case "dddd":
                  return dt[E.$W];
                case "H":
                  return String(Q);
                case "HH":
                  return $.s(Q, 2, "0");
                case "h":
                  return ft(1);
                case "hh":
                  return ft(2);
                case "a":
                  return xt(Q, ut, !0);
                case "A":
                  return xt(Q, ut, !1);
                case "m":
                  return String(ut);
                case "mm":
                  return $.s(ut, 2, "0");
                case "s":
                  return String(E.$s);
                case "ss":
                  return $.s(E.$s, 2, "0");
                case "SSS":
                  return $.s(E.$ms, 3, "0");
                case "Z":
                  return Y;
              }
              return null;
            })(Ct) || Y.replace(":", "");
          }));
        }, F.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, F.diff = function(L, E, R) {
          var H, Y = this, Q = $.p(E), ut = D(L), et = (ut.utcOffset() - this.utcOffset()) * i, dt = this - ut, it = function() {
            return $.m(Y, ut);
          };
          switch (Q) {
            case u:
              H = it() / 12;
              break;
            case d:
              H = it();
              break;
            case p:
              H = it() / 3;
              break;
            case h:
              H = (dt - et) / 6048e5;
              break;
            case c:
              H = (dt - et) / 864e5;
              break;
            case l:
              H = dt / o;
              break;
            case n:
              H = dt / i;
              break;
            case a:
              H = dt / r;
              break;
            default:
              H = dt;
          }
          return R ? H : $.a(H);
        }, F.daysInMonth = function() {
          return this.endOf(d).$D;
        }, F.$locale = function() {
          return v[this.$L];
        }, F.locale = function(L, E) {
          if (!L) return this.$L;
          var R = this.clone(), H = N(L, E, !0);
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
        }, O;
      })(), W = z.prototype;
      return D.prototype = W, [["$ms", s], ["$s", a], ["$m", n], ["$H", l], ["$W", c], ["$M", d], ["$y", u], ["$D", g]].forEach((function(O) {
        W[O[1]] = function(F) {
          return this.$g(F, O[0], O[1]);
        };
      })), D.extend = function(O, F) {
        return O.$i || (O(F, z, D), O.$i = !0), D;
      }, D.locale = N, D.isDayjs = I, D.unix = function(O) {
        return D(1e3 * O);
      }, D.en = v[S], D.Ls = v, D.p = {}, D;
    }));
  })(fo)), fo.exports;
}
var B0 = v0();
const L0 = /* @__PURE__ */ S0(B0);
var Lc = Object.defineProperty, f = (e, t) => Lc(e, "name", { value: t, configurable: !0 }), F0 = (e, t) => {
  for (var r in t)
    Lc(e, r, { get: t[r], enumerable: !0 });
}, Ie = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, P = {
  trace: /* @__PURE__ */ f((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ f((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ f((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ f((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ f((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ f((...e) => {
  }, "fatal")
}, ln = /* @__PURE__ */ f(function(e = "fatal") {
  let t = Ie.fatal;
  typeof e == "string" ? e.toLowerCase() in Ie && (t = Ie[e]) : typeof e == "number" && (t = e), P.trace = () => {
  }, P.debug = () => {
  }, P.info = () => {
  }, P.warn = () => {
  }, P.error = () => {
  }, P.fatal = () => {
  }, t <= Ie.fatal && (P.fatal = console.error ? console.error.bind(console, ae("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", ae("FATAL"))), t <= Ie.error && (P.error = console.error ? console.error.bind(console, ae("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", ae("ERROR"))), t <= Ie.warn && (P.warn = console.warn ? console.warn.bind(console, ae("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", ae("WARN"))), t <= Ie.info && (P.info = console.info ? console.info.bind(console, ae("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", ae("INFO"))), t <= Ie.debug && (P.debug = console.debug ? console.debug.bind(console, ae("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ae("DEBUG"))), t <= Ie.trace && (P.trace = console.debug ? console.debug.bind(console, ae("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ae("TRACE")));
}, "setLogLevel"), ae = /* @__PURE__ */ f((e) => `%c${L0().format("ss.SSS")} : ${e} : `, "format");
const go = {
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
    const o = r < 0.5 ? r * (1 + t) : r + t - r * t, s = 2 * r - o;
    switch (i) {
      case "r":
        return go.hue2rgb(s, o, e + 1 / 3) * 255;
      case "g":
        return go.hue2rgb(s, o, e) * 255;
      case "b":
        return go.hue2rgb(s, o, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const o = Math.max(e, t, r), s = Math.min(e, t, r), a = (o + s) / 2;
    if (i === "l")
      return a * 100;
    if (o === s)
      return 0;
    const n = o - s, l = a > 0.5 ? n / (2 - o - s) : n / (o + s);
    if (i === "s")
      return l * 100;
    switch (o) {
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
}, A0 = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, M0 = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, nt = {
  channel: go,
  lang: A0,
  unit: M0
}, je = {};
for (let e = 0; e <= 255; e++)
  je[e] = nt.unit.dec2hex(e);
const qt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class E0 {
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
class $0 {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new E0();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = qt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: o } = t;
    r === void 0 && (t.h = nt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = nt.channel.rgb2hsl(t, "s")), o === void 0 && (t.l = nt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: o } = t;
    r === void 0 && (t.r = nt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = nt.channel.hsl2rgb(t, "g")), o === void 0 && (t.b = nt.channel.hsl2rgb(t, "b"));
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
const ls = new $0({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), Nr = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(Nr.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), o = r.length, s = o % 4 === 0, a = o > 4, n = a ? 1 : 17, l = a ? 8 : 4, c = s ? 0 : -1, h = a ? 255 : 15;
    return ls.set({
      r: (i >> l * (c + 3) & h) * n,
      g: (i >> l * (c + 2) & h) * n,
      b: (i >> l * (c + 1) & h) * n,
      a: s ? (i & h) * n / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: o } = e;
    return o < 1 ? `#${je[Math.round(t)]}${je[Math.round(r)]}${je[Math.round(i)]}${je[Math.round(o * 255)]}` : `#${je[Math.round(t)]}${je[Math.round(r)]}${je[Math.round(i)]}`;
  }
}, cr = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(cr.hueRe);
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
    const r = e.match(cr.re);
    if (!r)
      return;
    const [, i, o, s, a, n] = r;
    return ls.set({
      h: cr._hue2deg(i),
      s: nt.channel.clamp.s(parseFloat(o)),
      l: nt.channel.clamp.l(parseFloat(s)),
      a: a ? nt.channel.clamp.a(n ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: o } = e;
    return o < 1 ? `hsla(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%, ${o})` : `hsl(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%)`;
  }
}, Ti = {
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
    const t = Ti.colors[e];
    if (t)
      return Nr.parse(t);
  },
  stringify: (e) => {
    const t = Nr.stringify(e);
    for (const r in Ti.colors)
      if (Ti.colors[r] === t)
        return r;
  }
}, fi = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(fi.re);
    if (!r)
      return;
    const [, i, o, s, a, n, l, c, h] = r;
    return ls.set({
      r: nt.channel.clamp.r(o ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: nt.channel.clamp.g(a ? parseFloat(s) * 2.55 : parseFloat(s)),
      b: nt.channel.clamp.b(l ? parseFloat(n) * 2.55 : parseFloat(n)),
      a: c ? nt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: o } = e;
    return o < 1 ? `rgba(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)}, ${nt.lang.round(o)})` : `rgb(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)})`;
  }
}, Le = {
  /* VARIABLES */
  format: {
    keyword: Ti,
    hex: Nr,
    rgb: fi,
    rgba: fi,
    hsl: cr,
    hsla: cr
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = Nr.parse(e) || fi.parse(e) || cr.parse(e) || Ti.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(qt.HSL) || e.data.r === void 0 ? cr.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? fi.stringify(e) : Nr.stringify(e)
}, Fc = (e, t) => {
  const r = Le.parse(e);
  for (const i in t)
    r[i] = nt.channel.clamp[i](t[i]);
  return Le.stringify(r);
}, Ke = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return Fc(e, { a: t });
  const o = ls.set({
    r: nt.channel.clamp.r(e),
    g: nt.channel.clamp.g(t),
    b: nt.channel.clamp.b(r),
    a: nt.channel.clamp.a(i)
  });
  return Le.stringify(o);
}, O0 = (e) => {
  const { r: t, g: r, b: i } = Le.parse(e), o = 0.2126 * nt.channel.toLinear(t) + 0.7152 * nt.channel.toLinear(r) + 0.0722 * nt.channel.toLinear(i);
  return nt.lang.round(o);
}, I0 = (e) => O0(e) >= 0.5, be = (e) => !I0(e), Ac = (e, t, r) => {
  const i = Le.parse(e), o = i[t], s = nt.channel.clamp[t](o + r);
  return o !== s && (i[t] = s), Le.stringify(i);
}, A = (e, t) => Ac(e, "l", t), M = (e, t) => Ac(e, "l", -t), x = (e, t) => {
  const r = Le.parse(e), i = {};
  for (const o in t)
    t[o] && (i[o] = r[o] + t[o]);
  return Fc(e, i);
}, D0 = (e, t, r = 50) => {
  const { r: i, g: o, b: s, a } = Le.parse(e), { r: n, g: l, b: c, a: h } = Le.parse(t), d = r / 100, p = d * 2 - 1, u = a - h, m = ((p * u === -1 ? p : (p + u) / (1 + p * u)) + 1) / 2, y = 1 - m, C = i * m + n * y, b = o * m + l * y, k = s * m + c * y, T = a * d + h * (1 - d);
  return Ke(C, b, k, T);
}, _ = (e, t = 100) => {
  const r = Le.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, D0(r, e, t);
};
/*! @license DOMPurify 3.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.1/LICENSE */
const {
  entries: Mc,
  setPrototypeOf: Nl,
  isFrozen: R0,
  getPrototypeOf: P0,
  getOwnPropertyDescriptor: N0
} = Object;
let {
  freeze: Xt,
  seal: ne,
  create: Mr
} = Object, {
  apply: la,
  construct: ha
} = typeof Reflect < "u" && Reflect;
Xt || (Xt = function(t) {
  return t;
});
ne || (ne = function(t) {
  return t;
});
la || (la = function(t, r) {
  for (var i = arguments.length, o = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++)
    o[s - 2] = arguments[s];
  return t.apply(r, o);
});
ha || (ha = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    i[o - 1] = arguments[o];
  return new t(...i);
});
const ri = Ft(Array.prototype.forEach), q0 = Ft(Array.prototype.lastIndexOf), ql = Ft(Array.prototype.pop), ii = Ft(Array.prototype.push), W0 = Ft(Array.prototype.splice), Ut = Array.isArray, gi = Ft(String.prototype.toLowerCase), zs = Ft(String.prototype.toString), Wl = Ft(String.prototype.match), Br = Ft(String.prototype.replace), zl = Ft(String.prototype.indexOf), z0 = Ft(String.prototype.trim), H0 = Ft(Number.prototype.toString), Y0 = Ft(Boolean.prototype.toString), Hl = typeof BigInt > "u" ? null : Ft(BigInt.prototype.toString), Yl = typeof Symbol > "u" ? null : Ft(Symbol.prototype.toString), St = Ft(Object.prototype.hasOwnProperty), oi = Ft(Object.prototype.toString), Dt = Ft(RegExp.prototype.test), to = U0(TypeError);
function Ft(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
      i[o - 1] = arguments[o];
    return la(e, t, i);
  };
}
function U0(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return ha(e, r);
  };
}
function lt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gi;
  if (Nl && Nl(e, null), !Ut(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let o = t[i];
    if (typeof o == "string") {
      const s = r(o);
      s !== o && (R0(t) || (t[i] = s), o = s);
    }
    e[o] = !0;
  }
  return e;
}
function G0(e) {
  for (let t = 0; t < e.length; t++)
    St(e, t) || (e[t] = null);
  return e;
}
function Qt(e) {
  const t = Mr(null);
  for (const [r, i] of Mc(e))
    St(e, r) && (Ut(i) ? t[r] = G0(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = Qt(i) : t[r] = i);
  return t;
}
function j0(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return H0(e);
    case "boolean":
      return Y0(e);
    case "bigint":
      return Hl ? Hl(e) : "0";
    case "symbol":
      return Yl ? Yl(e) : "Symbol()";
    case "undefined":
      return oi(e);
    case "function":
    case "object": {
      if (e === null)
        return oi(e);
      const t = e, r = Er(t, "toString");
      if (typeof r == "function") {
        const i = r(t);
        return typeof i == "string" ? i : oi(i);
      }
      return oi(e);
    }
    default:
      return oi(e);
  }
}
function Er(e, t) {
  for (; e !== null; ) {
    const i = N0(e, t);
    if (i) {
      if (i.get)
        return Ft(i.get);
      if (typeof i.value == "function")
        return Ft(i.value);
    }
    e = P0(e);
  }
  function r() {
    return null;
  }
  return r;
}
function X0(e) {
  try {
    return Dt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ul = Xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hs = Xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ys = Xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), V0 = Xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Us = Xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Z0 = Xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Gl = Xt(["#text"]), jl = Xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Gs = Xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xl = Xt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), eo = Xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), K0 = ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Q0 = ne(/<%[\w\W]*|[\w\W]*%>/gm), J0 = ne(/\$\{[\w\W]*/gm), ty = ne(/^data-[\-\w.\u00B7-\uFFFF]+$/), ey = ne(/^aria-[\-\w]+$/), Ec = ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ry = ne(/^(?:\w+script|data):/i), iy = ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $c = ne(/^html$/i), oy = ne(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Vl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ey,
  ATTR_WHITESPACE: iy,
  CUSTOM_ELEMENT: oy,
  DATA_ATTR: ty,
  DOCTYPE_NAME: $c,
  ERB_EXPR: Q0,
  IS_ALLOWED_URI: Ec,
  IS_SCRIPT_OR_DATA: ry,
  MUSTACHE_EXPR: K0,
  TMPLIT_EXPR: J0
});
const si = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, sy = function() {
  return typeof window > "u" ? null : window;
}, ay = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const o = "data-tt-policy-suffix";
  r && r.hasAttribute(o) && (i = r.getAttribute(o));
  const s = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(s, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, Zl = function() {
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
function Oc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sy();
  const t = (J) => Oc(J);
  if (t.version = "3.4.1", t.removed = [], !e || !e.document || e.document.nodeType !== si.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, o = i.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: a,
    Node: n,
    Element: l,
    NodeFilter: c,
    NamedNodeMap: h = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: d,
    DOMParser: p,
    trustedTypes: u
  } = e, g = l.prototype, m = Er(g, "cloneNode"), y = Er(g, "remove"), C = Er(g, "nextSibling"), b = Er(g, "childNodes"), k = Er(g, "parentNode");
  if (typeof a == "function") {
    const J = r.createElement("template");
    J.content && J.content.ownerDocument && (r = J.content.ownerDocument);
  }
  let T, S = "";
  const {
    implementation: v,
    createNodeIterator: B,
    createDocumentFragment: I,
    getElementsByTagName: N
  } = r, {
    importNode: D
  } = i;
  let $ = Zl();
  t.isSupported = typeof Mc == "function" && typeof k == "function" && v && v.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: z,
    ERB_EXPR: W,
    TMPLIT_EXPR: O,
    DATA_ATTR: F,
    ARIA_ATTR: L,
    IS_SCRIPT_OR_DATA: E,
    ATTR_WHITESPACE: R,
    CUSTOM_ELEMENT: H
  } = Vl;
  let {
    IS_ALLOWED_URI: Y
  } = Vl, Q = null;
  const ut = lt({}, [...Ul, ...Hs, ...Ys, ...Us, ...Gl]);
  let et = null;
  const dt = lt({}, [...jl, ...Gs, ...Xl, ...eo]);
  let it = Object.seal(Mr(null, {
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
  const ft = Object.seal(Mr(null, {
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
  let xt = !0, Ct = !0, vt = !1, he = !0, re = !1, $e = !0, or = !1, Bs = !1, Ls = !1, Tr = !1, Zi = !1, Ki = !1, pl = !0, fl = !1;
  const gl = "user-content-";
  let Fs = !0, ti = !1, Sr = {}, we = null;
  const As = lt({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ml = null;
  const yl = lt({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ms = null;
  const Cl = lt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qi = "http://www.w3.org/1998/Math/MathML", Ji = "http://www.w3.org/2000/svg", Te = "http://www.w3.org/1999/xhtml";
  let _r = Te, Es = !1, $s = null;
  const Qm = lt({}, [Qi, Ji, Te], zs);
  let Os = lt({}, ["mi", "mo", "mn", "ms", "mtext"]), Is = lt({}, ["annotation-xml"]);
  const Jm = lt({}, ["title", "style", "font", "a", "script"]);
  let ei = null;
  const t0 = ["application/xhtml+xml", "text/html"], e0 = "text/html";
  let At = null, vr = null;
  const r0 = r.createElement("form"), xl = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Ds = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (vr && vr === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Qt(w), ei = // eslint-disable-next-line unicorn/prefer-includes
    t0.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? e0 : w.PARSER_MEDIA_TYPE, At = ei === "application/xhtml+xml" ? zs : gi, Q = St(w, "ALLOWED_TAGS") && Ut(w.ALLOWED_TAGS) ? lt({}, w.ALLOWED_TAGS, At) : ut, et = St(w, "ALLOWED_ATTR") && Ut(w.ALLOWED_ATTR) ? lt({}, w.ALLOWED_ATTR, At) : dt, $s = St(w, "ALLOWED_NAMESPACES") && Ut(w.ALLOWED_NAMESPACES) ? lt({}, w.ALLOWED_NAMESPACES, zs) : Qm, Ms = St(w, "ADD_URI_SAFE_ATTR") && Ut(w.ADD_URI_SAFE_ATTR) ? lt(Qt(Cl), w.ADD_URI_SAFE_ATTR, At) : Cl, ml = St(w, "ADD_DATA_URI_TAGS") && Ut(w.ADD_DATA_URI_TAGS) ? lt(Qt(yl), w.ADD_DATA_URI_TAGS, At) : yl, we = St(w, "FORBID_CONTENTS") && Ut(w.FORBID_CONTENTS) ? lt({}, w.FORBID_CONTENTS, At) : As, rt = St(w, "FORBID_TAGS") && Ut(w.FORBID_TAGS) ? lt({}, w.FORBID_TAGS, At) : Qt({}), ht = St(w, "FORBID_ATTR") && Ut(w.FORBID_ATTR) ? lt({}, w.FORBID_ATTR, At) : Qt({}), Sr = St(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Qt(w.USE_PROFILES) : w.USE_PROFILES : !1, xt = w.ALLOW_ARIA_ATTR !== !1, Ct = w.ALLOW_DATA_ATTR !== !1, vt = w.ALLOW_UNKNOWN_PROTOCOLS || !1, he = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, re = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, or = w.WHOLE_DOCUMENT || !1, Tr = w.RETURN_DOM || !1, Zi = w.RETURN_DOM_FRAGMENT || !1, Ki = w.RETURN_TRUSTED_TYPE || !1, Ls = w.FORCE_BODY || !1, pl = w.SANITIZE_DOM !== !1, fl = w.SANITIZE_NAMED_PROPS || !1, Fs = w.KEEP_CONTENT !== !1, ti = w.IN_PLACE || !1, Y = X0(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Ec, _r = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Te, Os = St(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Qt(w.MATHML_TEXT_INTEGRATION_POINTS) : lt({}, ["mi", "mo", "mn", "ms", "mtext"]), Is = St(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Qt(w.HTML_INTEGRATION_POINTS) : lt({}, ["annotation-xml"]);
    const q = St(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Qt(w.CUSTOM_ELEMENT_HANDLING) : Mr(null);
    if (it = Mr(null), St(q, "tagNameCheck") && xl(q.tagNameCheck) && (it.tagNameCheck = q.tagNameCheck), St(q, "attributeNameCheck") && xl(q.attributeNameCheck) && (it.attributeNameCheck = q.attributeNameCheck), St(q, "allowCustomizedBuiltInElements") && typeof q.allowCustomizedBuiltInElements == "boolean" && (it.allowCustomizedBuiltInElements = q.allowCustomizedBuiltInElements), re && (Ct = !1), Zi && (Tr = !0), Sr && (Q = lt({}, Gl), et = Mr(null), Sr.html === !0 && (lt(Q, Ul), lt(et, jl)), Sr.svg === !0 && (lt(Q, Hs), lt(et, Gs), lt(et, eo)), Sr.svgFilters === !0 && (lt(Q, Ys), lt(et, Gs), lt(et, eo)), Sr.mathMl === !0 && (lt(Q, Us), lt(et, Xl), lt(et, eo))), ft.tagCheck = null, ft.attributeCheck = null, St(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? ft.tagCheck = w.ADD_TAGS : Ut(w.ADD_TAGS) && (Q === ut && (Q = Qt(Q)), lt(Q, w.ADD_TAGS, At))), St(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? ft.attributeCheck = w.ADD_ATTR : Ut(w.ADD_ATTR) && (et === dt && (et = Qt(et)), lt(et, w.ADD_ATTR, At))), St(w, "ADD_URI_SAFE_ATTR") && Ut(w.ADD_URI_SAFE_ATTR) && lt(Ms, w.ADD_URI_SAFE_ATTR, At), St(w, "FORBID_CONTENTS") && Ut(w.FORBID_CONTENTS) && (we === As && (we = Qt(we)), lt(we, w.FORBID_CONTENTS, At)), St(w, "ADD_FORBID_CONTENTS") && Ut(w.ADD_FORBID_CONTENTS) && (we === As && (we = Qt(we)), lt(we, w.ADD_FORBID_CONTENTS, At)), Fs && (Q["#text"] = !0), or && lt(Q, ["html", "head", "body"]), Q.table && (lt(Q, ["tbody"]), delete rt.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw to('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw to('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      T = w.TRUSTED_TYPES_POLICY, S = T.createHTML("");
    } else
      T === void 0 && (T = ay(u, o)), T !== null && typeof S == "string" && (S = T.createHTML(""));
    Xt && Xt(w), vr = w;
  }, bl = lt({}, [...Hs, ...Ys, ...V0]), kl = lt({}, [...Us, ...Z0]), i0 = function(w) {
    let q = k(w);
    (!q || !q.tagName) && (q = {
      namespaceURI: _r,
      tagName: "template"
    });
    const X = gi(w.tagName), bt = gi(q.tagName);
    return $s[w.namespaceURI] ? w.namespaceURI === Ji ? q.namespaceURI === Te ? X === "svg" : q.namespaceURI === Qi ? X === "svg" && (bt === "annotation-xml" || Os[bt]) : !!bl[X] : w.namespaceURI === Qi ? q.namespaceURI === Te ? X === "math" : q.namespaceURI === Ji ? X === "math" && Is[bt] : !!kl[X] : w.namespaceURI === Te ? q.namespaceURI === Ji && !Is[bt] || q.namespaceURI === Qi && !Os[bt] ? !1 : !kl[X] && (Jm[X] || !bl[X]) : !!(ei === "application/xhtml+xml" && $s[w.namespaceURI]) : !1;
  }, ce = function(w) {
    ii(t.removed, {
      element: w
    });
    try {
      k(w).removeChild(w);
    } catch {
      y(w);
    }
  }, sr = function(w, q) {
    try {
      ii(t.removed, {
        attribute: q.getAttributeNode(w),
        from: q
      });
    } catch {
      ii(t.removed, {
        attribute: null,
        from: q
      });
    }
    if (q.removeAttribute(w), w === "is")
      if (Tr || Zi)
        try {
          ce(q);
        } catch {
        }
      else
        try {
          q.setAttribute(w, "");
        } catch {
        }
  }, wl = function(w) {
    let q = null, X = null;
    if (Ls)
      w = "<remove></remove>" + w;
    else {
      const Bt = Wl(w, /^[\r\n\t ]+/);
      X = Bt && Bt[0];
    }
    ei === "application/xhtml+xml" && _r === Te && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const bt = T ? T.createHTML(w) : w;
    if (_r === Te)
      try {
        q = new p().parseFromString(bt, ei);
      } catch {
      }
    if (!q || !q.documentElement) {
      q = v.createDocument(_r, "template", null);
      try {
        q.documentElement.innerHTML = Es ? S : bt;
      } catch {
      }
    }
    const Nt = q.body || q.documentElement;
    return w && X && Nt.insertBefore(r.createTextNode(X), Nt.childNodes[0] || null), _r === Te ? N.call(q, or ? "html" : "body")[0] : or ? q.documentElement : Nt;
  }, Tl = function(w) {
    return B.call(
      w.ownerDocument || w,
      w,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Rs = function(w) {
    return w instanceof d && (typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || !(w.attributes instanceof h) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function");
  }, Ps = function(w) {
    return typeof n == "function" && w instanceof n;
  };
  function Oe(J, w, q) {
    ri(J, (X) => {
      X.call(t, w, q, vr);
    });
  }
  const Sl = function(w) {
    let q = null;
    if (Oe($.beforeSanitizeElements, w, null), Rs(w))
      return ce(w), !0;
    const X = At(w.nodeName);
    if (Oe($.uponSanitizeElement, w, {
      tagName: X,
      allowedTags: Q
    }), $e && w.hasChildNodes() && !Ps(w.firstElementChild) && Dt(/<[/\w!]/g, w.innerHTML) && Dt(/<[/\w!]/g, w.textContent) || $e && w.namespaceURI === Te && X === "style" && Ps(w.firstElementChild) || w.nodeType === si.progressingInstruction || $e && w.nodeType === si.comment && Dt(/<[/\w]/g, w.data))
      return ce(w), !0;
    if (rt[X] || !(ft.tagCheck instanceof Function && ft.tagCheck(X)) && !Q[X]) {
      if (!rt[X] && vl(X) && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, X) || it.tagNameCheck instanceof Function && it.tagNameCheck(X)))
        return !1;
      if (Fs && !we[X]) {
        const bt = k(w) || w.parentNode, Nt = b(w) || w.childNodes;
        if (Nt && bt) {
          const Bt = Nt.length;
          for (let Zt = Bt - 1; Zt >= 0; --Zt) {
            const se = m(Nt[Zt], !0);
            bt.insertBefore(se, C(w));
          }
        }
      }
      return ce(w), !0;
    }
    return w instanceof l && !i0(w) || (X === "noscript" || X === "noembed" || X === "noframes") && Dt(/<\/no(script|embed|frames)/i, w.innerHTML) ? (ce(w), !0) : (re && w.nodeType === si.text && (q = w.textContent, ri([z, W, O], (bt) => {
      q = Br(q, bt, " ");
    }), w.textContent !== q && (ii(t.removed, {
      element: w.cloneNode()
    }), w.textContent = q)), Oe($.afterSanitizeElements, w, null), !1);
  }, _l = function(w, q, X) {
    if (ht[q] || pl && (q === "id" || q === "name") && (X in r || X in r0))
      return !1;
    if (!(Ct && !ht[q] && Dt(F, q))) {
      if (!(xt && Dt(L, q))) {
        if (!(ft.attributeCheck instanceof Function && ft.attributeCheck(q, w))) {
          if (!et[q] || ht[q]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(vl(w) && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, w) || it.tagNameCheck instanceof Function && it.tagNameCheck(w)) && (it.attributeNameCheck instanceof RegExp && Dt(it.attributeNameCheck, q) || it.attributeNameCheck instanceof Function && it.attributeNameCheck(q, w)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              q === "is" && it.allowCustomizedBuiltInElements && (it.tagNameCheck instanceof RegExp && Dt(it.tagNameCheck, X) || it.tagNameCheck instanceof Function && it.tagNameCheck(X)))
            ) return !1;
          } else if (!Ms[q]) {
            if (!Dt(Y, Br(X, R, ""))) {
              if (!((q === "src" || q === "xlink:href" || q === "href") && w !== "script" && zl(X, "data:") === 0 && ml[w])) {
                if (!(vt && !Dt(E, Br(X, R, "")))) {
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
  }, o0 = lt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), vl = function(w) {
    return !o0[gi(w)] && Dt(H, w);
  }, Bl = function(w) {
    Oe($.beforeSanitizeAttributes, w, null);
    const {
      attributes: q
    } = w;
    if (!q || Rs(w))
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
        namespaceURI: Zt,
        value: se
      } = Nt, de = At(Bt), Ns = se;
      let Ot = Bt === "value" ? Ns : z0(Ns);
      if (X.attrName = de, X.attrValue = Ot, X.keepAttr = !0, X.forceKeepAttr = void 0, Oe($.uponSanitizeAttribute, w, X), Ot = X.attrValue, fl && (de === "id" || de === "name") && zl(Ot, gl) !== 0 && (sr(Bt, w), Ot = gl + Ot), $e && Dt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ot)) {
        sr(Bt, w);
        continue;
      }
      if (de === "attributename" && Wl(Ot, "href")) {
        sr(Bt, w);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        sr(Bt, w);
        continue;
      }
      if (!he && Dt(/\/>/i, Ot)) {
        sr(Bt, w);
        continue;
      }
      re && ri([z, W, O], (Al) => {
        Ot = Br(Ot, Al, " ");
      });
      const Fl = At(w.nodeName);
      if (!_l(Fl, de, Ot)) {
        sr(Bt, w);
        continue;
      }
      if (T && typeof u == "object" && typeof u.getAttributeType == "function" && !Zt)
        switch (u.getAttributeType(Fl, de)) {
          case "TrustedHTML": {
            Ot = T.createHTML(Ot);
            break;
          }
          case "TrustedScriptURL": {
            Ot = T.createScriptURL(Ot);
            break;
          }
        }
      if (Ot !== Ns)
        try {
          Zt ? w.setAttributeNS(Zt, Bt, Ot) : w.setAttribute(Bt, Ot), Rs(w) ? ce(w) : ql(t.removed);
        } catch {
          sr(Bt, w);
        }
    }
    Oe($.afterSanitizeAttributes, w, null);
  }, Ll = function(w) {
    let q = null;
    const X = Tl(w);
    for (Oe($.beforeSanitizeShadowDOM, w, null); q = X.nextNode(); )
      Oe($.uponSanitizeShadowNode, q, null), Sl(q), Bl(q), q.content instanceof s && Ll(q.content);
    Oe($.afterSanitizeShadowDOM, w, null);
  };
  return t.sanitize = function(J) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = null, X = null, bt = null, Nt = null;
    if (Es = !J, Es && (J = "<!-->"), typeof J != "string" && !Ps(J) && (J = j0(J), typeof J != "string"))
      throw to("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    if (Bs || Ds(w), t.removed = [], typeof J == "string" && (ti = !1), ti) {
      const se = J.nodeName;
      if (typeof se == "string") {
        const de = At(se);
        if (!Q[de] || rt[de])
          throw to("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (J instanceof n)
      q = wl("<!---->"), X = q.ownerDocument.importNode(J, !0), X.nodeType === si.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? q = X : q.appendChild(X);
    else {
      if (!Tr && !re && !or && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return T && Ki ? T.createHTML(J) : J;
      if (q = wl(J), !q)
        return Tr ? null : Ki ? S : "";
    }
    q && Ls && ce(q.firstChild);
    const Bt = Tl(ti ? J : q);
    for (; bt = Bt.nextNode(); )
      Sl(bt), Bl(bt), bt.content instanceof s && Ll(bt.content);
    if (ti)
      return J;
    if (Tr) {
      if (re) {
        q.normalize();
        let se = q.innerHTML;
        ri([z, W, O], (de) => {
          se = Br(se, de, " ");
        }), q.innerHTML = se;
      }
      if (Zi)
        for (Nt = I.call(q.ownerDocument); q.firstChild; )
          Nt.appendChild(q.firstChild);
      else
        Nt = q;
      return (et.shadowroot || et.shadowrootmode) && (Nt = D.call(i, Nt, !0)), Nt;
    }
    let Zt = or ? q.outerHTML : q.innerHTML;
    return or && Q["!doctype"] && q.ownerDocument && q.ownerDocument.doctype && q.ownerDocument.doctype.name && Dt($c, q.ownerDocument.doctype.name) && (Zt = "<!DOCTYPE " + q.ownerDocument.doctype.name + `>
` + Zt), re && ri([z, W, O], (se) => {
      Zt = Br(Zt, se, " ");
    }), T && Ki ? T.createHTML(Zt) : Zt;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ds(J), Bs = !0;
  }, t.clearConfig = function() {
    vr = null, Bs = !1;
  }, t.isValidAttribute = function(J, w, q) {
    vr || Ds({});
    const X = At(J), bt = At(w);
    return _l(X, bt, q);
  }, t.addHook = function(J, w) {
    typeof w == "function" && ii($[J], w);
  }, t.removeHook = function(J, w) {
    if (w !== void 0) {
      const q = q0($[J], w);
      return q === -1 ? void 0 : W0($[J], q, 1)[0];
    }
    return ql($[J]);
  }, t.removeHooks = function(J) {
    $[J] = [];
  }, t.removeAllHooks = function() {
    $ = Zl();
  }, t;
}
var zr = Oc(), Ic = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, Si = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, ny = /\s*%%.*\n/gm, Dc = class extends Error {
  static {
    f(this, "UnknownDiagramError");
  }
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
}, gr = {}, hn = /* @__PURE__ */ f(function(e, t) {
  e = e.replace(Ic, "").replace(Si, "").replace(ny, `
`);
  for (const [r, { detector: i }] of Object.entries(gr))
    if (i(e, t))
      return r;
  throw new Dc(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), ca = /* @__PURE__ */ f((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    Rc(t, r, i);
}, "registerLazyLoadedDiagrams"), Rc = /* @__PURE__ */ f((e, t, r) => {
  gr[e] && P.warn(`Detector with key ${e} already exists. Overwriting.`), gr[e] = { detector: t, loader: r }, P.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), ly = /* @__PURE__ */ f((e) => gr[e].loader, "getDiagramLoader"), da = /* @__PURE__ */ f((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const o = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((s) => da(e, s, o)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((s) => {
    e.includes(s) || e.push(s);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((s) => {
    typeof t[s] == "object" && t[s] !== null && (e[s] === void 0 || typeof e[s] == "object") ? (e[s] === void 0 && (e[s] = Array.isArray(t[s]) ? [] : {}), e[s] = da(e[s], t[s], { depth: r - 1, clobber: i })) : (i || typeof e[s] != "object" && typeof t[s] != "object") && (e[s] = t[s]);
  }), e);
}, "assignWithDepth"), Et = da, Ae = "#ffffff", Me = "#f2f2f2", at = /* @__PURE__ */ f((e, t) => t ? x(e, { s: -40, l: 10 }) : x(e, { s: -40, l: -10 }), "mkBorder"), hy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || M(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || M(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || M(this["cScale" + t], 10);
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
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
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
}, cy = /* @__PURE__ */ f((e) => {
  const t = new hy();
  return t.calculate(e), t;
}, "getThemeVariables"), dy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = Ke(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = M("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = M(this.sectionBkgColor, 10), this.taskBorderColor = Ke(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ke(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || A(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || M(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
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
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = A(this.secondaryColor, 20), this.git1 = A(this.pie2 || this.secondaryColor, 20), this.git2 = A(this.pie3 || this.tertiaryColor, 20), this.git3 = A(this.pie4 || x(this.primaryColor, { h: -30 }), 20), this.git4 = A(this.pie5 || x(this.primaryColor, { h: -60 }), 20), this.git5 = A(this.pie6 || x(this.primaryColor, { h: -90 }), 10), this.git6 = A(this.pie7 || x(this.primaryColor, { h: 60 }), 10), this.git7 = A(this.pie8 || x(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || A("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || A("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || A("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || A("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || A(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || A(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || A(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || A(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
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
}, uy = /* @__PURE__ */ f((e) => {
  const t = new dy();
  return t.calculate(e), t;
}, "getThemeVariables"), py = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = x(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = Ke(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || M(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || M(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = M(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || x(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || _(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || _(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || A(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || x(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || M(_(this.git0), 25), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, fy = /* @__PURE__ */ f((e) => {
  const t = new py();
  return t.calculate(e), t;
}, "getThemeVariables"), gy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = A("#cde498", 10), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.primaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    this.actorBorder = M(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || M(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || M(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = M(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || x(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || A(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? x(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? x(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? x(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? x(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? x(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? x(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? x(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? x(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || _(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || _(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, my = /* @__PURE__ */ f((e) => {
  const t = new gy();
  return t.calculate(e), t;
}, "getThemeVariables"), yy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = A(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.lineColor = _(this.background), this.textColor = _(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || A(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.secondBkg = A(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = A(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || _(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || M(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || x(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || x(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = A(this.contrast, 30), this.sectionBkgColor2 = A(this.contrast, 30), this.taskBorderColor = M(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = A(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = M(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = x(this.primaryColor, { h: 64 }), this.fillType3 = x(this.secondaryColor, { h: 64 }), this.fillType4 = x(this.primaryColor, { h: -64 }), this.fillType5 = x(this.secondaryColor, { h: -64 }), this.fillType6 = x(this.primaryColor, { h: 128 }), this.fillType7 = x(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let e = 0; e < 8; e++)
      this["venn" + (e + 1)] = this["venn" + (e + 1)] ?? this["cScale" + e];
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = M(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || x(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || x(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || x(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || x(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || x(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, Cy = /* @__PURE__ */ f((e) => {
  const t = new yy();
  return t.calculate(e), t;
}, "getThemeVariables"), xy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    if (this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || e, this.cScale1 = this.cScale1 || t, this.cScale2 = this.cScale2 || r, this.cScale3 = this.cScale3 || x(e, { h: 30 }), this.cScale4 = this.cScale4 || x(e, { h: 60 }), this.cScale5 = this.cScale5 || x(e, { h: 90 }), this.cScale6 = this.cScale6 || x(e, { h: 120 }), this.cScale7 = this.cScale7 || x(e, { h: 150 }), this.cScale8 = this.cScale8 || x(e, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(e, { h: 270 }), this.cScale10 = this.cScale10 || x(e, { h: 300 }), this.cScale11 = this.cScale11 || x(e, { h: 330 }), this.darkMode)
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = M(this["cScale" + o], 75);
    else
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = M(this["cScale" + o], 25);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || _(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || A(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || M(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, by = /* @__PURE__ */ f((e) => {
  const t = new xy();
  return t.calculate(e), t;
}, "getThemeVariables"), ky = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Ke(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || M(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, wy = /* @__PURE__ */ f((e) => {
  const t = new ky();
  return t.calculate(e), t;
}, "getThemeVariables"), Ty = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = at("#28253D", this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScale" + o] = this.mainBkg;
    if (this.darkMode)
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = M(this["cScale" + o], 75);
    else
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = M(this["cScale" + o], 25);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || _(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || A(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || M(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, Sy = /* @__PURE__ */ f((e) => {
  const t = new Ty();
  return t.calculate(e), t;
}, "getThemeVariables"), _y = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Ke(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || x(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || x(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || x(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || x(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || x(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || x(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || x(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || x(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || x(this.primaryColor, { h: 330 }), this.darkMode)
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 75);
    else
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScale" + t] = M(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || M(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, vy = /* @__PURE__ */ f((e) => {
  const t = new _y();
  return t.calculate(e), t;
}, "getThemeVariables"), By = class {
  static {
    f(this, "Theme");
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
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor);
    const e = "#ECECFE", t = "#E9E9F1", r = x(e, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || r, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || t, this.sectionBkgColor2 = this.sectionBkgColor2 || e, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || e, this.activeTaskBorderColor = this.activeTaskBorderColor || e, this.activeTaskBkgColor = this.activeTaskBkgColor || A(e, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || _(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || A(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || M(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const i = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || x(this.mainBkg, { h: 180, s: -15, l: i * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || e, this.fillType1 = this.fillType1 || t, this.fillType2 = this.fillType2 || x(e, { h: 64 }), this.fillType3 = this.fillType3 || x(t, { h: 64 }), this.fillType4 = this.fillType4 || x(e, { h: -64 }), this.fillType5 = this.fillType5 || x(t, { h: -64 }), this.fillType6 = this.fillType6 || x(e, { h: 128 }), this.fillType7 = this.fillType7 || x(t, { h: 128 }), this.pie1 = this.pie1 || e, this.pie2 = this.pie2 || t, this.pie3 = this.pie3 || r, this.pie4 = this.pie4 || x(e, { l: -10 }), this.pie5 = this.pie5 || x(t, { l: -10 }), this.pie6 = this.pie6 || x(r, { l: -10 }), this.pie7 = this.pie7 || x(e, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(e, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(e, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(e, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(e, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(e, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || e, this.quadrant2Fill = this.quadrant2Fill || x(e, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(e, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(e, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || e, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || e, this.git1 = this.git1 || t, this.git2 = this.git2 || r, this.git3 = this.git3 || x(e, { h: -30 }), this.git4 = this.git4 || x(e, { h: -60 }), this.git5 = this.git5 || x(e, { h: -90 }), this.git6 = this.git6 || x(e, { h: 60 }), this.git7 = this.git7 || x(e, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, Ly = /* @__PURE__ */ f((e) => {
  const t = new By();
  return t.calculate(e), t;
}, "getThemeVariables"), Fy = class {
  static {
    f(this, "Theme");
  }
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = A(this.primaryColor, 16), this.tertiaryColor = x(this.primaryColor, { h: -160 }), this.primaryBorderColor = _(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = _(this.primaryColor), this.secondaryTextColor = _(this.secondaryColor), this.tertiaryTextColor = _(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = A(_("#323D47"), 10), this.border1 = "#ccc", this.border2 = Ke(255, 255, 255, 0.25), this.arrowheadColor = _(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
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
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || x(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || x(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || _(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || _(this.tertiaryColor), this.lineColor = this.lineColor || _(this.background), this.arrowheadColor = this.arrowheadColor || _(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || M(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || _(this.lineColor), this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || A(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || _(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || A(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || M(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = M(this["cScale" + t], 75);
    const e = this.darkMode ? -4 : -1;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (5 + t * 3) }), this["surfacePeer" + t] = this["surfacePeer" + t] || x(this.mainBkg, { h: 180, s: -15, l: e * (8 + t * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || x(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || x(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || x(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || x(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || x(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || x(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || x(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || x(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || x(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || x(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || x(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || x(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || x(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || x(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || x(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || x(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || x(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || x(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || x(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || x(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || x(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || be(this.quadrant1Fill) ? A(this.quadrant1Fill) : M(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
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
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? M(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || x(this.primaryColor, { h: -30 }), this.git4 = this.git4 || x(this.primaryColor, { h: -60 }), this.git5 = this.git5 || x(this.primaryColor, { h: -90 }), this.git6 = this.git6 || x(this.primaryColor, { h: 60 }), this.git7 = this.git7 || x(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)) : (this.git0 = M(this.git0, 25), this.git1 = M(this.git1, 25), this.git2 = M(this.git2, 25), this.git3 = M(this.git3, 25), this.git4 = M(this.git4, 25), this.git5 = M(this.git5, 25), this.git6 = M(this.git6, 25), this.git7 = M(this.git7, 25)), this.gitInv0 = this.gitInv0 || _(this.git0), this.gitInv1 = this.gitInv1 || _(this.git1), this.gitInv2 = this.gitInv2 || _(this.git2), this.gitInv3 = this.gitInv3 || _(this.git3), this.gitInv4 = this.gitInv4 || _(this.git4), this.gitInv5 = this.gitInv5 || _(this.git5), this.gitInv6 = this.gitInv6 || _(this.git6), this.gitInv7 = this.gitInv7 || _(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || Ae, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || Me;
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
}, Ay = /* @__PURE__ */ f((e) => {
  const t = new Fy();
  return t.calculate(e), t;
}, "getThemeVariables"), Ne = {
  base: {
    getThemeVariables: cy
  },
  dark: {
    getThemeVariables: uy
  },
  default: {
    getThemeVariables: fy
  },
  forest: {
    getThemeVariables: my
  },
  neutral: {
    getThemeVariables: Cy
  },
  neo: {
    getThemeVariables: by
  },
  "neo-dark": {
    getThemeVariables: wy
  },
  redux: {
    getThemeVariables: Sy
  },
  "redux-dark": {
    getThemeVariables: vy
  },
  "redux-color": {
    getThemeVariables: Ly
  },
  "redux-dark-color": {
    getThemeVariables: Ay
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
}, Pc = {
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
  themeVariables: Ne.default.getThemeVariables(),
  sequence: {
    ...Yt.sequence,
    messageFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ f(function() {
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
    personFont: /* @__PURE__ */ f(function() {
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
    external_personFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ f(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ f(function() {
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
}, Nc = /* @__PURE__ */ f((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...Nc(e[i], "")] : [...r, t + i], []), "keyify"), My = new Set(Nc(Pc, "")), qc = Pc, Fo = /* @__PURE__ */ f((e) => {
  if (P.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => Fo(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (P.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !My.has(t) || e[t] == null) {
        P.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        if (t === "nodeColors") {
          const i = /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i;
          for (const o of Object.keys(e[t]))
            (typeof e[t][o] != "string" || !i.test(e[t][o])) && (P.debug("sanitize deleting invalid color:", o, e[t][o]), delete e[t][o]);
        } else
          P.debug("sanitizing object", t), Fo(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (P.debug("sanitizing css option", t), e[t] = Wc(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    P.debug("After sanitization", e);
  }
}, "sanitizeDirective"), Wc = /* @__PURE__ */ f((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Hr = Object.freeze(qc), Ye = /* @__PURE__ */ f((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), Jt = Et({}, Hr), Ao, mr = [], _i = Et({}, Hr), hs = /* @__PURE__ */ f((e, t) => {
  let r = Et({}, e), i = {};
  for (const o of t)
    Yc(o), i = Et(i, o);
  if (r = Et(r, i), i.theme && i.theme in Ne) {
    const o = Et({}, Ao), s = Et(
      o.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in Ne && (r.themeVariables = Ne[r.theme].getThemeVariables(s));
  }
  return _i = r, Gc(_i), _i;
}, "updateCurrentConfig"), Ey = /* @__PURE__ */ f((e) => (Jt = Et({}, Hr), Jt = Et(Jt, e), e.theme && Ne[e.theme] && (Jt.themeVariables = Ne[e.theme].getThemeVariables(e.themeVariables)), hs(Jt, mr), Jt), "setSiteConfig"), $y = /* @__PURE__ */ f((e) => {
  Ao = Et({}, e);
}, "saveConfigFromInitialize"), Oy = /* @__PURE__ */ f((e) => (Jt = Et(Jt, e), hs(Jt, mr), Jt), "updateSiteConfig"), zc = /* @__PURE__ */ f(() => Et({}, Jt), "getSiteConfig"), Hc = /* @__PURE__ */ f((e) => (Gc(e), Et(_i, e), wt()), "setConfig"), wt = /* @__PURE__ */ f(() => Et({}, _i), "getConfig"), Yc = /* @__PURE__ */ f((e) => {
  e && (["secure", ...Jt.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (P.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Yc(e[t]);
  }));
}, "sanitize"), Iy = /* @__PURE__ */ f((e) => {
  Fo(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), mr.push(e), hs(Jt, mr);
}, "addDirective"), Mo = /* @__PURE__ */ f((e = Jt) => {
  mr = [], hs(e, mr);
}, "reset"), Dy = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, Kl = {}, Uc = /* @__PURE__ */ f((e) => {
  Kl[e] || (P.warn(Dy[e]), Kl[e] = !0);
}, "issueWarning"), Gc = /* @__PURE__ */ f((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && Uc("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), uL = /* @__PURE__ */ f(() => {
  let e = {};
  Ao && (e = Et(e, Ao));
  for (const t of mr)
    e = Et(e, t);
  return e;
}, "getUserDefinedConfig"), Vt = /* @__PURE__ */ f((e) => (e.flowchart?.htmlLabels != null && Uc("FLOWCHART_HTML_LABELS_DEPRECATED"), Ye(e.htmlLabels ?? e.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), Wi = /<br\s*\/?>/gi, Ry = /* @__PURE__ */ f((e) => e ? Vc(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), Py = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (jc(), e = !0);
  };
})();
function jc() {
  const e = "data-temp-href-target";
  zr.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), zr.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
f(jc, "setupDompurifyHooks");
var Xc = /* @__PURE__ */ f((e) => (Py(), zr.sanitize(e)), "removeScript"), Ql = /* @__PURE__ */ f((e, t) => {
  if (Vt(t)) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" || r === "sandbox" ? e = Xc(e) : r !== "loose" && (e = Vc(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = zy(e));
  }
  return e;
}, "sanitizeMore"), xe = /* @__PURE__ */ f((e, t) => e && (t.dompurifyConfig ? e = zr.sanitize(Ql(e, t), t.dompurifyConfig).toString() : e = zr.sanitize(Ql(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), Ny = /* @__PURE__ */ f((e, t) => typeof e == "string" ? xe(e, t) : e.flat().map((r) => xe(r, t)), "sanitizeTextOrArray"), qy = /* @__PURE__ */ f((e) => Wi.test(e), "hasBreaks"), Wy = /* @__PURE__ */ f((e) => e.split(Wi), "splitBreaks"), zy = /* @__PURE__ */ f((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Vc = /* @__PURE__ */ f((e) => e.replace(Wi, "#br#"), "breakToPlaceholder"), Hy = /* @__PURE__ */ f((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Yy = /* @__PURE__ */ f(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), Uy = /* @__PURE__ */ f(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), Jl = /* @__PURE__ */ f(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let o = t[i];
    if (o === "," && i > 0 && i + 1 < t.length) {
      const s = t[i - 1], a = t[i + 1];
      Gy(s, a) && (o = s + "," + a, i++, r.pop());
    }
    r.push(jy(o));
  }
  return r.join("");
}, "parseGenericTypes"), ua = /* @__PURE__ */ f((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), Gy = /* @__PURE__ */ f((e, t) => {
  const r = ua(e, "~"), i = ua(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), jy = /* @__PURE__ */ f((e) => {
  const t = ua(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let o = i.indexOf("~"), s = i.lastIndexOf("~");
  for (; o !== -1 && s !== -1 && o !== s; )
    i[o] = "<", i[s] = ">", o = i.indexOf("~"), s = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), th = /* @__PURE__ */ f(() => window.MathMLElement !== void 0, "isMathMLSupported"), pa = /\$\$(.*)\$\$/g, Li = /* @__PURE__ */ f((e) => (e.match(pa)?.length ?? 0) > 0, "hasKatex"), pL = /* @__PURE__ */ f(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await Zc(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const o = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), o;
}, "calculateMathMLDimensions"), Xy = /* @__PURE__ */ f(async (e, t) => {
  if (!Li(e))
    return e;
  if (!(th() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(pa, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex-D3uLT2GX.js"), i = t.forceLegacyMathML || !th() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split(Wi).map(
      (o) => Li(o) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${o}</div>` : `<div>${o}</div>`
    ).join("").replace(
      pa,
      (o, s) => r.renderToString(s, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), Zc = /* @__PURE__ */ f(async (e, t) => xe(await Xy(e, t), t), "renderKatexSanitized"), zi = {
  getRows: Ry,
  sanitizeText: xe,
  sanitizeTextOrArray: Ny,
  hasBreaks: qy,
  splitBreaks: Wy,
  lineBreakRegex: Wi,
  removeScript: Xc,
  getUrl: Hy,
  evaluate: Ye,
  getMax: Yy,
  getMin: Uy
}, Vy = /* @__PURE__ */ f(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), Zy = /* @__PURE__ */ f(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Kc = /* @__PURE__ */ f(function(e, t, r, i) {
  const o = Zy(t, r, i);
  Vy(e, o);
}, "configureSvgSize"), Ky = /* @__PURE__ */ f(function(e, t, r, i) {
  const o = t.node().getBBox(), s = o.width, a = o.height;
  P.info(`SVG bounds: ${s}x${a}`, o);
  let n = 0, l = 0;
  P.info(`Graph bounds: ${n}x${l}`, e), n = s + r * 2, l = a + r * 2, P.info(`Calculated bounds: ${n}x${l}`), Kc(t, l, n, i);
  const c = `${o.x - r} ${o.y - r} ${o.width + 2 * r} ${o.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), mo = {};
function fa(e) {
  return [...e.cssRules].map((t) => t.cssText).join(`
`);
}
f(fa, "cssStyleSheetToString");
var Qy = /* @__PURE__ */ f((e, t, r, i) => {
  let o = "";
  return e in mo && mo[e] ? o = mo[e]({ ...r, svgId: i }) : P.warn(`No theme found for ${e}`), ` & {
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

  ${o}
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
}, "getStyles"), Jy = /* @__PURE__ */ f((e, t) => {
  t !== void 0 && (mo[e] = t);
}, "addStylesForDiagram"), tC = Qy, Qc = {};
F0(Qc, {
  clear: () => eC,
  getAccDescription: () => sC,
  getAccTitle: () => iC,
  getDiagramTitle: () => nC,
  setAccDescription: () => oC,
  setAccTitle: () => rC,
  setDiagramTitle: () => aC
});
var cn = "", dn = "", un = "", pn = /* @__PURE__ */ f((e) => xe(e, wt()), "sanitizeText"), eC = /* @__PURE__ */ f(() => {
  cn = "", un = "", dn = "";
}, "clear"), rC = /* @__PURE__ */ f((e) => {
  cn = pn(e).replace(/^\s+/g, "");
}, "setAccTitle"), iC = /* @__PURE__ */ f(() => cn, "getAccTitle"), oC = /* @__PURE__ */ f((e) => {
  un = pn(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), sC = /* @__PURE__ */ f(() => un, "getAccDescription"), aC = /* @__PURE__ */ f((e) => {
  dn = pn(e);
}, "setDiagramTitle"), nC = /* @__PURE__ */ f(() => dn, "getDiagramTitle"), eh = P, lC = ln, gt = wt, fL = Hc, gL = Hr, fn = /* @__PURE__ */ f((e) => xe(e, gt()), "sanitizeText"), hC = Ky, cC = /* @__PURE__ */ f(() => Qc, "getCommonDb"), Eo = {}, $o = /* @__PURE__ */ f((e, t, r) => {
  Eo[e] && eh.warn(`Diagram with id ${e} already registered. Overwriting.`), Eo[e] = t, r && Rc(e, r), Jy(e, t.styles), t.injectUtils?.(
    eh,
    lC,
    gt,
    fn,
    hC,
    cC(),
    () => {
    }
  );
}, "registerDiagram"), ga = /* @__PURE__ */ f((e) => {
  if (e in Eo)
    return Eo[e];
  throw new dC(e);
}, "getDiagram"), dC = class extends Error {
  static {
    f(this, "DiagramNotFoundError");
  }
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
}, uC = { value: () => {
} };
function Jc() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new yo(r);
}
function yo(e) {
  this._ = e;
}
function pC(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", o = r.indexOf(".");
    if (o >= 0 && (i = r.slice(o + 1), r = r.slice(0, o)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
yo.prototype = Jc.prototype = {
  constructor: yo,
  on: function(e, t) {
    var r = this._, i = pC(e + "", r), o, s = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++s < a; ) if ((o = (e = i[s]).type) && (o = fC(r[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++s < a; )
      if (o = (e = i[s]).type) r[o] = rh(r[o], e.name, t);
      else if (t == null) for (o in r) r[o] = rh(r[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new yo(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var r = new Array(o), i = 0, o, s; i < o; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (s = this._[e], i = 0, o = s.length; i < o; ++i) s[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], o = 0, s = i.length; o < s; ++o) i[o].value.apply(t, r);
  }
};
function fC(e, t) {
  for (var r = 0, i = e.length, o; r < i; ++r)
    if ((o = e[r]).name === t)
      return o.value;
}
function rh(e, t, r) {
  for (var i = 0, o = e.length; i < o; ++i)
    if (e[i].name === t) {
      e[i] = uC, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var ma = "http://www.w3.org/1999/xhtml";
const ih = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ma,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function cs(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), ih.hasOwnProperty(t) ? { space: ih[t], local: e } : e;
}
function gC(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === ma && t.documentElement.namespaceURI === ma ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function mC(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function td(e) {
  var t = cs(e);
  return (t.local ? mC : gC)(t);
}
function yC() {
}
function gn(e) {
  return e == null ? yC : function() {
    return this.querySelector(e);
  };
}
function CC(e) {
  typeof e != "function" && (e = gn(e));
  for (var t = this._groups, r = t.length, i = new Array(r), o = 0; o < r; ++o)
    for (var s = t[o], a = s.length, n = i[o] = new Array(a), l, c, h = 0; h < a; ++h)
      (l = s[h]) && (c = e.call(l, l.__data__, h, s)) && ("__data__" in l && (c.__data__ = l.__data__), n[h] = c);
  return new oe(i, this._parents);
}
function xC(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function bC() {
  return [];
}
function ed(e) {
  return e == null ? bC : function() {
    return this.querySelectorAll(e);
  };
}
function kC(e) {
  return function() {
    return xC(e.apply(this, arguments));
  };
}
function wC(e) {
  typeof e == "function" ? e = kC(e) : e = ed(e);
  for (var t = this._groups, r = t.length, i = [], o = [], s = 0; s < r; ++s)
    for (var a = t[s], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && (i.push(e.call(l, l.__data__, c, a)), o.push(l));
  return new oe(i, o);
}
function rd(e) {
  return function() {
    return this.matches(e);
  };
}
function id(e) {
  return function(t) {
    return t.matches(e);
  };
}
var TC = Array.prototype.find;
function SC(e) {
  return function() {
    return TC.call(this.children, e);
  };
}
function _C() {
  return this.firstElementChild;
}
function vC(e) {
  return this.select(e == null ? _C : SC(typeof e == "function" ? e : id(e)));
}
var BC = Array.prototype.filter;
function LC() {
  return Array.from(this.children);
}
function FC(e) {
  return function() {
    return BC.call(this.children, e);
  };
}
function AC(e) {
  return this.selectAll(e == null ? LC : FC(typeof e == "function" ? e : id(e)));
}
function MC(e) {
  typeof e != "function" && (e = rd(e));
  for (var t = this._groups, r = t.length, i = new Array(r), o = 0; o < r; ++o)
    for (var s = t[o], a = s.length, n = i[o] = [], l, c = 0; c < a; ++c)
      (l = s[c]) && e.call(l, l.__data__, c, s) && n.push(l);
  return new oe(i, this._parents);
}
function od(e) {
  return new Array(e.length);
}
function EC() {
  return new oe(this._enter || this._groups.map(od), this._parents);
}
function Oo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Oo.prototype = {
  constructor: Oo,
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
function $C(e) {
  return function() {
    return e;
  };
}
function OC(e, t, r, i, o, s) {
  for (var a = 0, n, l = t.length, c = s.length; a < c; ++a)
    (n = t[a]) ? (n.__data__ = s[a], i[a] = n) : r[a] = new Oo(e, s[a]);
  for (; a < l; ++a)
    (n = t[a]) && (o[a] = n);
}
function IC(e, t, r, i, o, s, a) {
  var n, l, c = /* @__PURE__ */ new Map(), h = t.length, d = s.length, p = new Array(h), u;
  for (n = 0; n < h; ++n)
    (l = t[n]) && (p[n] = u = a.call(l, l.__data__, n, t) + "", c.has(u) ? o[n] = l : c.set(u, l));
  for (n = 0; n < d; ++n)
    u = a.call(e, s[n], n, s) + "", (l = c.get(u)) ? (i[n] = l, l.__data__ = s[n], c.delete(u)) : r[n] = new Oo(e, s[n]);
  for (n = 0; n < h; ++n)
    (l = t[n]) && c.get(p[n]) === l && (o[n] = l);
}
function DC(e) {
  return e.__data__;
}
function RC(e, t) {
  if (!arguments.length) return Array.from(this, DC);
  var r = t ? IC : OC, i = this._parents, o = this._groups;
  typeof e != "function" && (e = $C(e));
  for (var s = o.length, a = new Array(s), n = new Array(s), l = new Array(s), c = 0; c < s; ++c) {
    var h = i[c], d = o[c], p = d.length, u = PC(e.call(h, h && h.__data__, c, i)), g = u.length, m = n[c] = new Array(g), y = a[c] = new Array(g), C = l[c] = new Array(p);
    r(h, d, m, y, C, u, t);
    for (var b = 0, k = 0, T, S; b < g; ++b)
      if (T = m[b]) {
        for (b >= k && (k = b + 1); !(S = y[k]) && ++k < g; ) ;
        T._next = S || null;
      }
  }
  return a = new oe(a, i), a._enter = n, a._exit = l, a;
}
function PC(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function NC() {
  return new oe(this._exit || this._groups.map(od), this._parents);
}
function qC(e, t, r) {
  var i = this.enter(), o = this, s = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), r == null ? s.remove() : r(s), i && o ? i.merge(o).order() : o;
}
function WC(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, o = r.length, s = i.length, a = Math.min(o, s), n = new Array(o), l = 0; l < a; ++l)
    for (var c = r[l], h = i[l], d = c.length, p = n[l] = new Array(d), u, g = 0; g < d; ++g)
      (u = c[g] || h[g]) && (p[g] = u);
  for (; l < o; ++l)
    n[l] = r[l];
  return new oe(n, this._parents);
}
function zC() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], o = i.length - 1, s = i[o], a; --o >= 0; )
      (a = i[o]) && (s && a.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(a, s), s = a);
  return this;
}
function HC(e) {
  e || (e = YC);
  function t(d, p) {
    return d && p ? e(d.__data__, p.__data__) : !d - !p;
  }
  for (var r = this._groups, i = r.length, o = new Array(i), s = 0; s < i; ++s) {
    for (var a = r[s], n = a.length, l = o[s] = new Array(n), c, h = 0; h < n; ++h)
      (c = a[h]) && (l[h] = c);
    l.sort(t);
  }
  return new oe(o, this._parents).order();
}
function YC(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function UC() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function GC() {
  return Array.from(this);
}
function jC() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], o = 0, s = i.length; o < s; ++o) {
      var a = i[o];
      if (a) return a;
    }
  return null;
}
function XC() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function VC() {
  return !this.node();
}
function ZC(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var o = t[r], s = 0, a = o.length, n; s < a; ++s)
      (n = o[s]) && e.call(n, n.__data__, s, o);
  return this;
}
function KC(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function QC(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function JC(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function tx(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function ex(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function rx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function ix(e, t) {
  var r = cs(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? QC : KC : typeof t == "function" ? r.local ? rx : ex : r.local ? tx : JC)(r, t));
}
function sd(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function ox(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sx(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function ax(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function nx(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? ox : typeof t == "function" ? ax : sx)(e, t, r ?? "")) : Yr(this.node(), e);
}
function Yr(e, t) {
  return e.style.getPropertyValue(t) || sd(e).getComputedStyle(e, null).getPropertyValue(t);
}
function lx(e) {
  return function() {
    delete this[e];
  };
}
function hx(e, t) {
  return function() {
    this[e] = t;
  };
}
function cx(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function dx(e, t) {
  return arguments.length > 1 ? this.each((t == null ? lx : typeof t == "function" ? cx : hx)(e, t)) : this.node()[e];
}
function ad(e) {
  return e.trim().split(/^|\s+/);
}
function mn(e) {
  return e.classList || new nd(e);
}
function nd(e) {
  this._node = e, this._names = ad(e.getAttribute("class") || "");
}
nd.prototype = {
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
function ld(e, t) {
  for (var r = mn(e), i = -1, o = t.length; ++i < o; ) r.add(t[i]);
}
function hd(e, t) {
  for (var r = mn(e), i = -1, o = t.length; ++i < o; ) r.remove(t[i]);
}
function ux(e) {
  return function() {
    ld(this, e);
  };
}
function px(e) {
  return function() {
    hd(this, e);
  };
}
function fx(e, t) {
  return function() {
    (t.apply(this, arguments) ? ld : hd)(this, e);
  };
}
function gx(e, t) {
  var r = ad(e + "");
  if (arguments.length < 2) {
    for (var i = mn(this.node()), o = -1, s = r.length; ++o < s; ) if (!i.contains(r[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? fx : t ? ux : px)(r, t));
}
function mx() {
  this.textContent = "";
}
function yx(e) {
  return function() {
    this.textContent = e;
  };
}
function Cx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function xx(e) {
  return arguments.length ? this.each(e == null ? mx : (typeof e == "function" ? Cx : yx)(e)) : this.node().textContent;
}
function bx() {
  this.innerHTML = "";
}
function kx(e) {
  return function() {
    this.innerHTML = e;
  };
}
function wx(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Tx(e) {
  return arguments.length ? this.each(e == null ? bx : (typeof e == "function" ? wx : kx)(e)) : this.node().innerHTML;
}
function Sx() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _x() {
  return this.each(Sx);
}
function vx() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Bx() {
  return this.each(vx);
}
function Lx(e) {
  var t = typeof e == "function" ? e : td(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function Fx() {
  return null;
}
function Ax(e, t) {
  var r = typeof e == "function" ? e : td(e), i = t == null ? Fx : typeof t == "function" ? t : gn(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Mx() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ex() {
  return this.each(Mx);
}
function $x() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ox() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ix(e) {
  return this.select(e ? Ox : $x);
}
function Dx(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Rx(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Px(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function Nx(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, o = t.length, s; r < o; ++r)
        s = t[r], (!e.type || s.type === e.type) && s.name === e.name ? this.removeEventListener(s.type, s.listener, s.options) : t[++i] = s;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function qx(e, t, r) {
  return function() {
    var i = this.__on, o, s = Rx(t);
    if (i) {
      for (var a = 0, n = i.length; a < n; ++a)
        if ((o = i[a]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = s, o.options = r), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, s, r), o = { type: e.type, name: e.name, value: t, listener: s, options: r }, i ? i.push(o) : this.__on = [o];
  };
}
function Wx(e, t, r) {
  var i = Px(e + ""), o, s = i.length, a;
  if (arguments.length < 2) {
    var n = this.node().__on;
    if (n) {
      for (var l = 0, c = n.length, h; l < c; ++l)
        for (o = 0, h = n[l]; o < s; ++o)
          if ((a = i[o]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (n = t ? qx : Nx, o = 0; o < s; ++o) this.each(n(i[o], t, r));
  return this;
}
function cd(e, t, r) {
  var i = sd(e), o = i.CustomEvent;
  typeof o == "function" ? o = new o(t, r) : (o = i.document.createEvent("Event"), r ? (o.initEvent(t, r.bubbles, r.cancelable), o.detail = r.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function zx(e, t) {
  return function() {
    return cd(this, e, t);
  };
}
function Hx(e, t) {
  return function() {
    return cd(this, e, t.apply(this, arguments));
  };
}
function Yx(e, t) {
  return this.each((typeof t == "function" ? Hx : zx)(e, t));
}
function* Ux() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], o = 0, s = i.length, a; o < s; ++o)
      (a = i[o]) && (yield a);
}
var dd = [null];
function oe(e, t) {
  this._groups = e, this._parents = t;
}
function Hi() {
  return new oe([[document.documentElement]], dd);
}
function Gx() {
  return this;
}
oe.prototype = Hi.prototype = {
  constructor: oe,
  select: CC,
  selectAll: wC,
  selectChild: vC,
  selectChildren: AC,
  filter: MC,
  data: RC,
  enter: EC,
  exit: NC,
  join: qC,
  merge: WC,
  selection: Gx,
  order: zC,
  sort: HC,
  call: UC,
  nodes: GC,
  node: jC,
  size: XC,
  empty: VC,
  each: ZC,
  attr: ix,
  style: nx,
  property: dx,
  classed: gx,
  text: xx,
  html: Tx,
  raise: _x,
  lower: Bx,
  append: Lx,
  insert: Ax,
  remove: Ex,
  clone: Ix,
  datum: Dx,
  on: Wx,
  dispatch: Yx,
  [Symbol.iterator]: Ux
};
function ct(e) {
  return typeof e == "string" ? new oe([[document.querySelector(e)]], [document.documentElement]) : new oe([[e]], dd);
}
function yn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ud(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function Yi() {
}
var Fi = 0.7, Io = 1 / Fi, qr = "\\s*([+-]?\\d+)\\s*", Ai = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Be = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", jx = /^#([0-9a-f]{3,8})$/, Xx = new RegExp(`^rgb\\(${qr},${qr},${qr}\\)$`), Vx = new RegExp(`^rgb\\(${Be},${Be},${Be}\\)$`), Zx = new RegExp(`^rgba\\(${qr},${qr},${qr},${Ai}\\)$`), Kx = new RegExp(`^rgba\\(${Be},${Be},${Be},${Ai}\\)$`), Qx = new RegExp(`^hsl\\(${Ai},${Be},${Be}\\)$`), Jx = new RegExp(`^hsla\\(${Ai},${Be},${Be},${Ai}\\)$`), oh = {
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
yn(Yi, Mi, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sh,
  // Deprecated! Use color.formatHex.
  formatHex: sh,
  formatHex8: tb,
  formatHsl: eb,
  formatRgb: ah,
  toString: ah
});
function sh() {
  return this.rgb().formatHex();
}
function tb() {
  return this.rgb().formatHex8();
}
function eb() {
  return pd(this).formatHsl();
}
function ah() {
  return this.rgb().formatRgb();
}
function Mi(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = jx.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? nh(t) : r === 3 ? new ee(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ro(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ro(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Xx.exec(e)) ? new ee(t[1], t[2], t[3], 1) : (t = Vx.exec(e)) ? new ee(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Zx.exec(e)) ? ro(t[1], t[2], t[3], t[4]) : (t = Kx.exec(e)) ? ro(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Qx.exec(e)) ? ch(t[1], t[2] / 100, t[3] / 100, 1) : (t = Jx.exec(e)) ? ch(t[1], t[2] / 100, t[3] / 100, t[4]) : oh.hasOwnProperty(e) ? nh(oh[e]) : e === "transparent" ? new ee(NaN, NaN, NaN, 0) : null;
}
function nh(e) {
  return new ee(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ro(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new ee(e, t, r, i);
}
function rb(e) {
  return e instanceof Yi || (e = Mi(e)), e ? (e = e.rgb(), new ee(e.r, e.g, e.b, e.opacity)) : new ee();
}
function ya(e, t, r, i) {
  return arguments.length === 1 ? rb(e) : new ee(e, t, r, i ?? 1);
}
function ee(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
yn(ee, ya, ud(Yi, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new ee(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new ee(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ee(fr(this.r), fr(this.g), fr(this.b), Do(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lh,
  // Deprecated! Use color.formatHex.
  formatHex: lh,
  formatHex8: ib,
  formatRgb: hh,
  toString: hh
}));
function lh() {
  return `#${dr(this.r)}${dr(this.g)}${dr(this.b)}`;
}
function ib() {
  return `#${dr(this.r)}${dr(this.g)}${dr(this.b)}${dr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function hh() {
  const e = Do(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fr(this.r)}, ${fr(this.g)}, ${fr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Do(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function dr(e) {
  return e = fr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ch(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ge(e, t, r, i);
}
function pd(e) {
  if (e instanceof ge) return new ge(e.h, e.s, e.l, e.opacity);
  if (e instanceof Yi || (e = Mi(e)), !e) return new ge();
  if (e instanceof ge) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, o = Math.min(t, r, i), s = Math.max(t, r, i), a = NaN, n = s - o, l = (s + o) / 2;
  return n ? (t === s ? a = (r - i) / n + (r < i) * 6 : r === s ? a = (i - t) / n + 2 : a = (t - r) / n + 4, n /= l < 0.5 ? s + o : 2 - s - o, a *= 60) : n = l > 0 && l < 1 ? 0 : a, new ge(a, n, l, e.opacity);
}
function ob(e, t, r, i) {
  return arguments.length === 1 ? pd(e) : new ge(e, t, r, i ?? 1);
}
function ge(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
yn(ge, ob, ud(Yi, {
  brighter(e) {
    return e = e == null ? Io : Math.pow(Io, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new ge(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - i;
    return new ee(
      js(e >= 240 ? e - 240 : e + 120, o, i),
      js(e, o, i),
      js(e < 120 ? e + 240 : e - 120, o, i),
      this.opacity
    );
  },
  clamp() {
    return new ge(dh(this.h), io(this.s), io(this.l), Do(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Do(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${dh(this.h)}, ${io(this.s) * 100}%, ${io(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function dh(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function io(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function js(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Cn = (e) => () => e;
function fd(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function sb(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function mL(e, t) {
  var r = t - e;
  return r ? fd(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : Cn(isNaN(e) ? t : e);
}
function ab(e) {
  return (e = +e) == 1 ? gd : function(t, r) {
    return r - t ? sb(t, r, e) : Cn(isNaN(t) ? r : t);
  };
}
function gd(e, t) {
  var r = t - e;
  return r ? fd(e, r) : Cn(isNaN(e) ? t : e);
}
const uh = (function e(t) {
  var r = ab(t);
  function i(o, s) {
    var a = r((o = ya(o)).r, (s = ya(s)).r), n = r(o.g, s.g), l = r(o.b, s.b), c = gd(o.opacity, s.opacity);
    return function(h) {
      return o.r = a(h), o.g = n(h), o.b = l(h), o.opacity = c(h), o + "";
    };
  }
  return i.gamma = e, i;
})(1);
function Xe(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Ca = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xs = new RegExp(Ca.source, "g");
function nb(e) {
  return function() {
    return e;
  };
}
function lb(e) {
  return function(t) {
    return e(t) + "";
  };
}
function hb(e, t) {
  var r = Ca.lastIndex = Xs.lastIndex = 0, i, o, s, a = -1, n = [], l = [];
  for (e = e + "", t = t + ""; (i = Ca.exec(e)) && (o = Xs.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), n[a] ? n[a] += s : n[++a] = s), (i = i[0]) === (o = o[0]) ? n[a] ? n[a] += o : n[++a] = o : (n[++a] = null, l.push({ i: a, x: Xe(i, o) })), r = Xs.lastIndex;
  return r < t.length && (s = t.slice(r), n[a] ? n[a] += s : n[++a] = s), n.length < 2 ? l[0] ? lb(l[0].x) : nb(t) : (t = l.length, function(c) {
    for (var h = 0, d; h < t; ++h) n[(d = l[h]).i] = d.x(c);
    return n.join("");
  });
}
var ph = 180 / Math.PI, xa = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function md(e, t, r, i, o, s) {
  var a, n, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * r + t * i) && (r -= e * l, i -= t * l), (n = Math.sqrt(r * r + i * i)) && (r /= n, i /= n, l /= n), e * i < t * r && (e = -e, t = -t, l = -l, a = -a), {
    translateX: o,
    translateY: s,
    rotate: Math.atan2(t, e) * ph,
    skewX: Math.atan(l) * ph,
    scaleX: a,
    scaleY: n
  };
}
var oo;
function cb(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? xa : md(t.a, t.b, t.c, t.d, t.e, t.f);
}
function db(e) {
  return e == null || (oo || (oo = document.createElementNS("http://www.w3.org/2000/svg", "g")), oo.setAttribute("transform", e), !(e = oo.transform.baseVal.consolidate())) ? xa : (e = e.matrix, md(e.a, e.b, e.c, e.d, e.e, e.f));
}
function yd(e, t, r, i) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function s(c, h, d, p, u, g) {
    if (c !== d || h !== p) {
      var m = u.push("translate(", null, t, null, r);
      g.push({ i: m - 4, x: Xe(c, d) }, { i: m - 2, x: Xe(h, p) });
    } else (d || p) && u.push("translate(" + d + t + p + r);
  }
  function a(c, h, d, p) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), p.push({ i: d.push(o(d) + "rotate(", null, i) - 2, x: Xe(c, h) })) : h && d.push(o(d) + "rotate(" + h + i);
  }
  function n(c, h, d, p) {
    c !== h ? p.push({ i: d.push(o(d) + "skewX(", null, i) - 2, x: Xe(c, h) }) : h && d.push(o(d) + "skewX(" + h + i);
  }
  function l(c, h, d, p, u, g) {
    if (c !== d || h !== p) {
      var m = u.push(o(u) + "scale(", null, ",", null, ")");
      g.push({ i: m - 4, x: Xe(c, d) }, { i: m - 2, x: Xe(h, p) });
    } else (d !== 1 || p !== 1) && u.push(o(u) + "scale(" + d + "," + p + ")");
  }
  return function(c, h) {
    var d = [], p = [];
    return c = e(c), h = e(h), s(c.translateX, c.translateY, h.translateX, h.translateY, d, p), a(c.rotate, h.rotate, d, p), n(c.skewX, h.skewX, d, p), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, d, p), c = h = null, function(u) {
      for (var g = -1, m = p.length, y; ++g < m; ) d[(y = p[g]).i] = y.x(u);
      return d.join("");
    };
  };
}
var ub = yd(cb, "px, ", "px)", "deg)"), pb = yd(db, ", ", ")", ")"), Ur = 0, mi = 0, ai = 0, Cd = 1e3, Ro, yi, Po = 0, yr = 0, ds = 0, Ei = typeof performance == "object" && performance.now ? performance : Date, xd = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function xn() {
  return yr || (xd(fb), yr = Ei.now() + ds);
}
function fb() {
  yr = 0;
}
function No() {
  this._call = this._time = this._next = null;
}
No.prototype = bd.prototype = {
  constructor: No,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? xn() : +r) + (t == null ? 0 : +t), !this._next && yi !== this && (yi ? yi._next = this : Ro = this, yi = this), this._call = e, this._time = r, ba();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ba());
  }
};
function bd(e, t, r) {
  var i = new No();
  return i.restart(e, t, r), i;
}
function gb() {
  xn(), ++Ur;
  for (var e = Ro, t; e; )
    (t = yr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ur;
}
function fh() {
  yr = (Po = Ei.now()) + ds, Ur = mi = 0;
  try {
    gb();
  } finally {
    Ur = 0, yb(), yr = 0;
  }
}
function mb() {
  var e = Ei.now(), t = e - Po;
  t > Cd && (ds -= t, Po = e);
}
function yb() {
  for (var e, t = Ro, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Ro = r);
  yi = e, ba(i);
}
function ba(e) {
  if (!Ur) {
    mi && (mi = clearTimeout(mi));
    var t = e - yr;
    t > 24 ? (e < 1 / 0 && (mi = setTimeout(fh, e - Ei.now() - ds)), ai && (ai = clearInterval(ai))) : (ai || (Po = Ei.now(), ai = setInterval(mb, Cd)), Ur = 1, xd(fh));
  }
}
function gh(e, t, r) {
  var i = new No();
  return t = t == null ? 0 : +t, i.restart((o) => {
    i.stop(), e(o + t);
  }, t, r), i;
}
var Cb = Jc("start", "end", "cancel", "interrupt"), xb = [], kd = 0, mh = 1, ka = 2, Co = 3, yh = 4, wa = 5, xo = 6;
function us(e, t, r, i, o, s) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (r in a) return;
  bb(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: o,
    // For context during callback.
    on: Cb,
    tween: xb,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: kd
  });
}
function bn(e, t) {
  var r = ke(e, t);
  if (r.state > kd) throw new Error("too late; already scheduled");
  return r;
}
function Ee(e, t) {
  var r = ke(e, t);
  if (r.state > Co) throw new Error("too late; already running");
  return r;
}
function ke(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function bb(e, t, r) {
  var i = e.__transition, o;
  i[t] = r, r.timer = bd(s, 0, r.time);
  function s(c) {
    r.state = mh, r.timer.restart(a, r.delay, r.time), r.delay <= c && a(c - r.delay);
  }
  function a(c) {
    var h, d, p, u;
    if (r.state !== mh) return l();
    for (h in i)
      if (u = i[h], u.name === r.name) {
        if (u.state === Co) return gh(a);
        u.state === yh ? (u.state = xo, u.timer.stop(), u.on.call("interrupt", e, e.__data__, u.index, u.group), delete i[h]) : +h < t && (u.state = xo, u.timer.stop(), u.on.call("cancel", e, e.__data__, u.index, u.group), delete i[h]);
      }
    if (gh(function() {
      r.state === Co && (r.state = yh, r.timer.restart(n, r.delay, r.time), n(c));
    }), r.state = ka, r.on.call("start", e, e.__data__, r.index, r.group), r.state === ka) {
      for (r.state = Co, o = new Array(p = r.tween.length), h = 0, d = -1; h < p; ++h)
        (u = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (o[++d] = u);
      o.length = d + 1;
    }
  }
  function n(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = wa, 1), d = -1, p = o.length; ++d < p; )
      o[d].call(e, h);
    r.state === wa && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = xo, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function kb(e, t) {
  var r = e.__transition, i, o, s = !0, a;
  if (r) {
    t = t == null ? null : t + "";
    for (a in r) {
      if ((i = r[a]).name !== t) {
        s = !1;
        continue;
      }
      o = i.state > ka && i.state < wa, i.state = xo, i.timer.stop(), i.on.call(o ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[a];
    }
    s && delete e.__transition;
  }
}
function wb(e) {
  return this.each(function() {
    kb(this, e);
  });
}
function Tb(e, t) {
  var r, i;
  return function() {
    var o = Ee(this, e), s = o.tween;
    if (s !== r) {
      i = r = s;
      for (var a = 0, n = i.length; a < n; ++a)
        if (i[a].name === t) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    o.tween = i;
  };
}
function Sb(e, t, r) {
  var i, o;
  if (typeof r != "function") throw new Error();
  return function() {
    var s = Ee(this, e), a = s.tween;
    if (a !== i) {
      o = (i = a).slice();
      for (var n = { name: t, value: r }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = n;
          break;
        }
      l === c && o.push(n);
    }
    s.tween = o;
  };
}
function _b(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = ke(this.node(), r).tween, o = 0, s = i.length, a; o < s; ++o)
      if ((a = i[o]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Tb : Sb)(r, e, t));
}
function kn(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var o = Ee(this, i);
    (o.value || (o.value = {}))[t] = r.apply(this, arguments);
  }), function(o) {
    return ke(o, i).value[t];
  };
}
function wd(e, t) {
  var r;
  return (typeof t == "number" ? Xe : t instanceof Mi ? uh : (r = Mi(t)) ? (t = r, uh) : hb)(e, t);
}
function vb(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Bb(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lb(e, t, r) {
  var i, o = r + "", s;
  return function() {
    var a = this.getAttribute(e);
    return a === o ? null : a === i ? s : s = t(i = a, r);
  };
}
function Fb(e, t, r) {
  var i, o = r + "", s;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === o ? null : a === i ? s : s = t(i = a, r);
  };
}
function Ab(e, t, r) {
  var i, o, s;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = n + "", a === l ? null : a === i && l === o ? s : (o = l, s = t(i = a, n)));
  };
}
function Mb(e, t, r) {
  var i, o, s;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = n + "", a === l ? null : a === i && l === o ? s : (o = l, s = t(i = a, n)));
  };
}
function Eb(e, t) {
  var r = cs(e), i = r === "transform" ? pb : wd;
  return this.attrTween(e, typeof t == "function" ? (r.local ? Mb : Ab)(r, i, kn(this, "attr." + e, t)) : t == null ? (r.local ? Bb : vb)(r) : (r.local ? Fb : Lb)(r, i, t));
}
function $b(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function Ob(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function Ib(e, t) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && Ob(e, s)), r;
  }
  return o._value = t, o;
}
function Db(e, t) {
  var r, i;
  function o() {
    var s = t.apply(this, arguments);
    return s !== i && (r = (i = s) && $b(e, s)), r;
  }
  return o._value = t, o;
}
function Rb(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = cs(e);
  return this.tween(r, (i.local ? Ib : Db)(i, t));
}
function Pb(e, t) {
  return function() {
    bn(this, e).delay = +t.apply(this, arguments);
  };
}
function Nb(e, t) {
  return t = +t, function() {
    bn(this, e).delay = t;
  };
}
function qb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Pb : Nb)(t, e)) : ke(this.node(), t).delay;
}
function Wb(e, t) {
  return function() {
    Ee(this, e).duration = +t.apply(this, arguments);
  };
}
function zb(e, t) {
  return t = +t, function() {
    Ee(this, e).duration = t;
  };
}
function Hb(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Wb : zb)(t, e)) : ke(this.node(), t).duration;
}
function Yb(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ee(this, e).ease = t;
  };
}
function Ub(e) {
  var t = this._id;
  return arguments.length ? this.each(Yb(t, e)) : ke(this.node(), t).ease;
}
function Gb(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    Ee(this, e).ease = r;
  };
}
function jb(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Gb(this._id, e));
}
function Xb(e) {
  typeof e != "function" && (e = rd(e));
  for (var t = this._groups, r = t.length, i = new Array(r), o = 0; o < r; ++o)
    for (var s = t[o], a = s.length, n = i[o] = [], l, c = 0; c < a; ++c)
      (l = s[c]) && e.call(l, l.__data__, c, s) && n.push(l);
  return new We(i, this._parents, this._name, this._id);
}
function Vb(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, o = r.length, s = Math.min(i, o), a = new Array(i), n = 0; n < s; ++n)
    for (var l = t[n], c = r[n], h = l.length, d = a[n] = new Array(h), p, u = 0; u < h; ++u)
      (p = l[u] || c[u]) && (d[u] = p);
  for (; n < i; ++n)
    a[n] = t[n];
  return new We(a, this._parents, this._name, this._id);
}
function Zb(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function Kb(e, t, r) {
  var i, o, s = Zb(t) ? bn : Ee;
  return function() {
    var a = s(this, e), n = a.on;
    n !== i && (o = (i = n).copy()).on(t, r), a.on = o;
  };
}
function Qb(e, t) {
  var r = this._id;
  return arguments.length < 2 ? ke(this.node(), r).on.on(e) : this.each(Kb(r, e, t));
}
function Jb(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function t1() {
  return this.on("end.remove", Jb(this._id));
}
function e1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = gn(e));
  for (var i = this._groups, o = i.length, s = new Array(o), a = 0; a < o; ++a)
    for (var n = i[a], l = n.length, c = s[a] = new Array(l), h, d, p = 0; p < l; ++p)
      (h = n[p]) && (d = e.call(h, h.__data__, p, n)) && ("__data__" in h && (d.__data__ = h.__data__), c[p] = d, us(c[p], t, r, p, c, ke(h, r)));
  return new We(s, this._parents, t, r);
}
function r1(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = ed(e));
  for (var i = this._groups, o = i.length, s = [], a = [], n = 0; n < o; ++n)
    for (var l = i[n], c = l.length, h, d = 0; d < c; ++d)
      if (h = l[d]) {
        for (var p = e.call(h, h.__data__, d, l), u, g = ke(h, r), m = 0, y = p.length; m < y; ++m)
          (u = p[m]) && us(u, t, r, m, p, g);
        s.push(p), a.push(h);
      }
  return new We(s, a, t, r);
}
var i1 = Hi.prototype.constructor;
function o1() {
  return new i1(this._groups, this._parents);
}
function s1(e, t) {
  var r, i, o;
  return function() {
    var s = Yr(this, e), a = (this.style.removeProperty(e), Yr(this, e));
    return s === a ? null : s === r && a === i ? o : o = t(r = s, i = a);
  };
}
function Td(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function a1(e, t, r) {
  var i, o = r + "", s;
  return function() {
    var a = Yr(this, e);
    return a === o ? null : a === i ? s : s = t(i = a, r);
  };
}
function n1(e, t, r) {
  var i, o, s;
  return function() {
    var a = Yr(this, e), n = r(this), l = n + "";
    return n == null && (l = n = (this.style.removeProperty(e), Yr(this, e))), a === l ? null : a === i && l === o ? s : (o = l, s = t(i = a, n));
  };
}
function l1(e, t) {
  var r, i, o, s = "style." + t, a = "end." + s, n;
  return function() {
    var l = Ee(this, e), c = l.on, h = l.value[s] == null ? n || (n = Td(t)) : void 0;
    (c !== r || o !== h) && (i = (r = c).copy()).on(a, o = h), l.on = i;
  };
}
function h1(e, t, r) {
  var i = (e += "") == "transform" ? ub : wd;
  return t == null ? this.styleTween(e, s1(e, i)).on("end.style." + e, Td(e)) : typeof t == "function" ? this.styleTween(e, n1(e, i, kn(this, "style." + e, t))).each(l1(this._id, e)) : this.styleTween(e, a1(e, i, t), r).on("end.style." + e, null);
}
function c1(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function d1(e, t, r) {
  var i, o;
  function s() {
    var a = t.apply(this, arguments);
    return a !== o && (i = (o = a) && c1(e, a, r)), i;
  }
  return s._value = t, s;
}
function u1(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, d1(e, t, r ?? ""));
}
function p1(e) {
  return function() {
    this.textContent = e;
  };
}
function f1(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function g1(e) {
  return this.tween("text", typeof e == "function" ? f1(kn(this, "text", e)) : p1(e == null ? "" : e + ""));
}
function m1(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function y1(e) {
  var t, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (t = (r = o) && m1(o)), t;
  }
  return i._value = e, i;
}
function C1(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, y1(e));
}
function x1() {
  for (var e = this._name, t = this._id, r = Sd(), i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var a = i[s], n = a.length, l, c = 0; c < n; ++c)
      if (l = a[c]) {
        var h = ke(l, t);
        us(l, e, r, c, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new We(i, this._parents, e, r);
}
function b1() {
  var e, t, r = this, i = r._id, o = r.size();
  return new Promise(function(s, a) {
    var n = { value: a }, l = { value: function() {
      --o === 0 && s();
    } };
    r.each(function() {
      var c = Ee(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(n), t._.interrupt.push(n), t._.end.push(l)), c.on = t;
    }), o === 0 && s();
  });
}
var k1 = 0;
function We(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function Sd() {
  return ++k1;
}
var De = Hi.prototype;
We.prototype = {
  constructor: We,
  select: e1,
  selectAll: r1,
  selectChild: De.selectChild,
  selectChildren: De.selectChildren,
  filter: Xb,
  merge: Vb,
  selection: o1,
  transition: x1,
  call: De.call,
  nodes: De.nodes,
  node: De.node,
  size: De.size,
  empty: De.empty,
  each: De.each,
  on: Qb,
  attr: Eb,
  attrTween: Rb,
  style: h1,
  styleTween: u1,
  text: g1,
  textTween: C1,
  remove: t1,
  tween: _b,
  delay: qb,
  duration: Hb,
  ease: Ub,
  easeVarying: jb,
  end: b1,
  [Symbol.iterator]: De[Symbol.iterator]
};
function w1(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var T1 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: w1
};
function S1(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function _1(e) {
  var t, r;
  e instanceof We ? (t = e._id, e = e._name) : (t = Sd(), (r = T1).time = xn(), e = e == null ? null : e + "");
  for (var i = this._groups, o = i.length, s = 0; s < o; ++s)
    for (var a = i[s], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && us(l, e, t, c, a, r || S1(l, t));
  return new We(i, this._parents, e, t);
}
Hi.prototype.interrupt = wb;
Hi.prototype.transition = _1;
const Ta = Math.PI, Sa = 2 * Ta, lr = 1e-6, v1 = Sa - lr;
function _d(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function B1(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return _d;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let o = 1, s = i.length; o < s; ++o)
      this._ += Math.round(arguments[o] * r) / r + i[o];
  };
}
class L1 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? _d : B1(t);
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
  quadraticCurveTo(t, r, i, o) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, i, o, s, a) {
    this._append`C${+t},${+r},${+i},${+o},${this._x1 = +s},${this._y1 = +a}`;
  }
  arcTo(t, r, i, o, s) {
    if (t = +t, r = +r, i = +i, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let a = this._x1, n = this._y1, l = i - t, c = o - r, h = a - t, d = n - r, p = h * h + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > lr) if (!(Math.abs(d * l - c * h) > lr) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let u = i - a, g = o - n, m = l * l + c * c, y = u * u + g * g, C = Math.sqrt(m), b = Math.sqrt(p), k = s * Math.tan((Ta - Math.acos((m + p - y) / (2 * C * b))) / 2), T = k / b, S = k / C;
      Math.abs(T - 1) > lr && this._append`L${t + T * h},${r + T * d}`, this._append`A${s},${s},0,0,${+(d * u > h * g)},${this._x1 = t + S * l},${this._y1 = r + S * c}`;
    }
  }
  arc(t, r, i, o, s, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let n = i * Math.cos(o), l = i * Math.sin(o), c = t + n, h = r + l, d = 1 ^ a, p = a ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > lr || Math.abs(this._y1 - h) > lr) && this._append`L${c},${h}`, i && (p < 0 && (p = p % Sa + Sa), p > v1 ? this._append`A${i},${i},0,1,${d},${t - n},${r - l}A${i},${i},0,1,${d},${this._x1 = c},${this._y1 = h}` : p > lr && this._append`A${i},${i},0,${+(p >= Ta)},${d},${this._x1 = t + i * Math.cos(s)},${this._y1 = r + i * Math.sin(s)}`);
  }
  rect(t, r, i, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+o}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Lr(e) {
  return function() {
    return e;
  };
}
const yL = Math.abs, CL = Math.atan2, xL = Math.cos, bL = Math.max, kL = Math.min, wL = Math.sin, TL = Math.sqrt, Ch = 1e-12, wn = Math.PI, xh = wn / 2, SL = 2 * wn;
function _L(e) {
  return e > 1 ? 0 : e < -1 ? wn : Math.acos(e);
}
function vL(e) {
  return e >= 1 ? xh : e <= -1 ? -xh : Math.asin(e);
}
function F1(e) {
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
  }, () => new L1(t);
}
function A1(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function vd(e) {
  this._context = e;
}
vd.prototype = {
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
function vi(e) {
  return new vd(e);
}
function M1(e) {
  return e[0];
}
function E1(e) {
  return e[1];
}
function $1(e, t) {
  var r = Lr(!0), i = null, o = vi, s = null, a = F1(n);
  e = typeof e == "function" ? e : e === void 0 ? M1 : Lr(e), t = typeof t == "function" ? t : t === void 0 ? E1 : Lr(t);
  function n(l) {
    var c, h = (l = A1(l)).length, d, p = !1, u;
    for (i == null && (s = o(u = a())), c = 0; c <= h; ++c)
      !(c < h && r(d = l[c], c, l)) === p && ((p = !p) ? s.lineStart() : s.lineEnd()), p && s.point(+e(d, c, l), +t(d, c, l));
    if (u) return s = null, u + "" || null;
  }
  return n.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Lr(+l), n) : e;
  }, n.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Lr(+l), n) : t;
  }, n.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Lr(!!l), n) : r;
  }, n.curve = function(l) {
    return arguments.length ? (o = l, i != null && (s = o(i)), n) : o;
  }, n.context = function(l) {
    return arguments.length ? (l == null ? i = s = null : s = o(i = l), n) : i;
  }, n;
}
class Bd {
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
function Ld(e) {
  return new Bd(e, !0);
}
function Fd(e) {
  return new Bd(e, !1);
}
function Je() {
}
function qo(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function ps(e) {
  this._context = e;
}
ps.prototype = {
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
        qo(this, this._x1, this._y1);
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
        qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function _a(e) {
  return new ps(e);
}
function Ad(e) {
  this._context = e;
}
Ad.prototype = {
  areaStart: Je,
  areaEnd: Je,
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
        qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function O1(e) {
  return new Ad(e);
}
function Md(e) {
  this._context = e;
}
Md.prototype = {
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
        qo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function I1(e) {
  return new Md(e);
}
function Ed(e, t) {
  this._basis = new ps(e), this._beta = t;
}
Ed.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], o = t[0], s = e[r] - i, a = t[r] - o, n = -1, l; ++n <= r; )
        l = n / r, this._basis.point(
          this._beta * e[n] + (1 - this._beta) * (i + l * s),
          this._beta * t[n] + (1 - this._beta) * (o + l * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const D1 = (function e(t) {
  function r(i) {
    return t === 1 ? new ps(i) : new Ed(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function Wo(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Tn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Tn.prototype = {
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
        Wo(this, this._x1, this._y1);
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
        Wo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const $d = (function e(t) {
  function r(i) {
    return new Tn(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Sn(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Sn.prototype = {
  areaStart: Je,
  areaEnd: Je,
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
        Wo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const R1 = (function e(t) {
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
        Wo(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const P1 = (function e(t) {
  function r(i) {
    return new _n(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function vn(e, t, r) {
  var i = e._x1, o = e._y1, s = e._x2, a = e._y2;
  if (e._l01_a > Ch) {
    var n = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * n - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, o = (o * n - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > Ch) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    s = (s * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, a = (a * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, o, s, a, e._x2, e._y2);
}
function Od(e, t) {
  this._context = e, this._alpha = t;
}
Od.prototype = {
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
        vn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const Id = (function e(t) {
  function r(i) {
    return t ? new Od(i, t) : new Tn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Dd(e, t) {
  this._context = e, this._alpha = t;
}
Dd.prototype = {
  areaStart: Je,
  areaEnd: Je,
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
        vn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const N1 = (function e(t) {
  function r(i) {
    return t ? new Dd(i, t) : new Sn(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Rd(e, t) {
  this._context = e, this._alpha = t;
}
Rd.prototype = {
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
        vn(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const q1 = (function e(t) {
  function r(i) {
    return t ? new Rd(i, t) : new _n(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Pd(e) {
  this._context = e;
}
Pd.prototype = {
  areaStart: Je,
  areaEnd: Je,
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
function W1(e) {
  return new Pd(e);
}
function bh(e) {
  return e < 0 ? -1 : 1;
}
function kh(e, t, r) {
  var i = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (i || o < 0 && -0), a = (r - e._y1) / (o || i < 0 && -0), n = (s * o + a * i) / (i + o);
  return (bh(s) + bh(a)) * Math.min(Math.abs(s), Math.abs(a), 0.5 * Math.abs(n)) || 0;
}
function wh(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Vs(e, t, r) {
  var i = e._x0, o = e._y0, s = e._x1, a = e._y1, n = (s - i) / 3;
  e._context.bezierCurveTo(i + n, o + n * t, s - n, a - n * r, s, a);
}
function zo(e) {
  this._context = e;
}
zo.prototype = {
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
        Vs(this, this._t0, wh(this, this._t0));
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
          this._point = 3, Vs(this, wh(this, r = kh(this, e, t)), r);
          break;
        default:
          Vs(this, this._t0, r = kh(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Nd(e) {
  this._context = new qd(e);
}
(Nd.prototype = Object.create(zo.prototype)).point = function(e, t) {
  zo.prototype.point.call(this, t, e);
};
function qd(e) {
  this._context = e;
}
qd.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, o, s) {
    this._context.bezierCurveTo(t, e, i, r, s, o);
  }
};
function Wd(e) {
  return new zo(e);
}
function zd(e) {
  return new Nd(e);
}
function Hd(e) {
  this._context = e;
}
Hd.prototype = {
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
        for (var i = Th(e), o = Th(t), s = 0, a = 1; a < r; ++s, ++a)
          this._context.bezierCurveTo(i[0][s], o[0][s], i[1][s], o[1][s], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Th(e) {
  var t, r = e.length - 1, i, o = new Array(r), s = new Array(r), a = new Array(r);
  for (o[0] = 0, s[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) o[t] = 1, s[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (o[r - 1] = 2, s[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = o[t] / s[t - 1], s[t] -= i, a[t] -= i * a[t - 1];
  for (o[r - 1] = a[r - 1] / s[r - 1], t = r - 2; t >= 0; --t) o[t] = (a[t] - o[t + 1]) / s[t];
  for (s[r - 1] = (e[r] + o[r - 1]) / 2, t = 0; t < r - 1; ++t) s[t] = 2 * e[t + 1] - o[t + 1];
  return [o, s];
}
function Yd(e) {
  return new Hd(e);
}
function fs(e, t) {
  this._context = e, this._t = t;
}
fs.prototype = {
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
function Ud(e) {
  return new fs(e, 0.5);
}
function Gd(e) {
  return new fs(e, 0);
}
function jd(e) {
  return new fs(e, 1);
}
function Ci(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
Ci.prototype = {
  constructor: Ci,
  scale: function(e) {
    return e === 1 ? this : new Ci(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Ci(this.k, this.x + this.k * e, this.y + this.k * t);
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
Ci.prototype;
var z1 = /* @__PURE__ */ f((e) => {
  const { securityLevel: t } = gt();
  let r = ct("body");
  if (t === "sandbox") {
    const s = ct(`#i${e}`).node()?.contentDocument ?? document;
    r = ct(s.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function Bn(e) {
  return typeof e > "u" || e === null;
}
f(Bn, "isNothing");
function Xd(e) {
  return typeof e == "object" && e !== null;
}
f(Xd, "isObject");
function Vd(e) {
  return Array.isArray(e) ? e : Bn(e) ? [] : [e];
}
f(Vd, "toArray");
function Zd(e, t) {
  var r, i, o, s;
  if (t)
    for (s = Object.keys(t), r = 0, i = s.length; r < i; r += 1)
      o = s[r], e[o] = t[o];
  return e;
}
f(Zd, "extend");
function Kd(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
f(Kd, "repeat");
function Qd(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
f(Qd, "isNegativeZero");
var H1 = Bn, Y1 = Xd, U1 = Vd, G1 = Kd, j1 = Qd, X1 = Zd, $t = {
  isNothing: H1,
  isObject: Y1,
  toArray: U1,
  repeat: G1,
  isNegativeZero: j1,
  extend: X1
};
function Ln(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
f(Ln, "formatError");
function Gr(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Ln(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
f(Gr, "YAMLException$1");
Gr.prototype = Object.create(Error.prototype);
Gr.prototype.constructor = Gr;
Gr.prototype.toString = /* @__PURE__ */ f(function(t) {
  return this.name + ": " + Ln(this, t);
}, "toString");
var te = Gr;
function bo(e, t, r, i, o) {
  var s = "", a = "", n = Math.floor(o / 2) - 1;
  return i - t > n && (s = " ... ", t = i - n + s.length), r - i > n && (a = " ...", r = i + n - a.length), {
    str: s + e.slice(t, r).replace(/\t/g, "→") + a,
    pos: i - t + s.length
    // relative position
  };
}
f(bo, "getLine");
function ko(e, t) {
  return $t.repeat(" ", t - e.length) + e;
}
f(ko, "padStart");
function Jd(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], o = [], s, a = -1; s = r.exec(e.buffer); )
    o.push(s.index), i.push(s.index + s[0].length), e.position <= s.index && a < 0 && (a = i.length - 2);
  a < 0 && (a = i.length - 1);
  var n = "", l, c, h = Math.min(e.line + t.linesAfter, o.length).toString().length, d = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(a - l < 0); l++)
    c = bo(
      e.buffer,
      i[a - l],
      o[a - l],
      e.position - (i[a] - i[a - l]),
      d
    ), n = $t.repeat(" ", t.indent) + ko((e.line - l + 1).toString(), h) + " | " + c.str + `
` + n;
  for (c = bo(e.buffer, i[a], o[a], e.position, d), n += $t.repeat(" ", t.indent) + ko((e.line + 1).toString(), h) + " | " + c.str + `
`, n += $t.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(a + l >= o.length); l++)
    c = bo(
      e.buffer,
      i[a + l],
      o[a + l],
      e.position - (i[a] - i[a + l]),
      d
    ), n += $t.repeat(" ", t.indent) + ko((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return n.replace(/\n$/, "");
}
f(Jd, "makeSnippet");
var V1 = Jd, Z1 = [
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
], K1 = [
  "scalar",
  "sequence",
  "mapping"
];
function tu(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
f(tu, "compileStyleAliases");
function eu(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (Z1.indexOf(r) === -1)
      throw new te('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = tu(t.styleAliases || null), K1.indexOf(this.kind) === -1)
    throw new te('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
f(eu, "Type$1");
var zt = eu;
function va(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var o = r.length;
    r.forEach(function(s, a) {
      s.tag === i.tag && s.kind === i.kind && s.multi === i.multi && (o = a);
    }), r[o] = i;
  }), r;
}
f(va, "compileList");
function ru() {
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
  function i(o) {
    o.multi ? (e.multi[o.kind].push(o), e.multi.fallback.push(o)) : e[o.kind][o.tag] = e.fallback[o.tag] = o;
  }
  for (f(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
f(ru, "compileMap");
function Ho(e) {
  return this.extend(e);
}
f(Ho, "Schema$1");
Ho.prototype.extend = /* @__PURE__ */ f(function(t) {
  var r = [], i = [];
  if (t instanceof zt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new te("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(s) {
    if (!(s instanceof zt))
      throw new te("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (s.loadKind && s.loadKind !== "scalar")
      throw new te("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (s.multi)
      throw new te("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(s) {
    if (!(s instanceof zt))
      throw new te("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var o = Object.create(Ho.prototype);
  return o.implicit = (this.implicit || []).concat(r), o.explicit = (this.explicit || []).concat(i), o.compiledImplicit = va(o, "implicit"), o.compiledExplicit = va(o, "explicit"), o.compiledTypeMap = ru(o.compiledImplicit, o.compiledExplicit), o;
}, "extend");
var Q1 = Ho, J1 = new zt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ f(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), tk = new zt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ f(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), ek = new zt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ f(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), rk = new Q1({
  explicit: [
    J1,
    tk,
    ek
  ]
});
function iu(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
f(iu, "resolveYamlNull");
function ou() {
  return null;
}
f(ou, "constructYamlNull");
function su(e) {
  return e === null;
}
f(su, "isNull");
var ik = new zt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: iu,
  construct: ou,
  predicate: su,
  represent: {
    canonical: /* @__PURE__ */ f(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ f(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ f(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ f(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ f(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function au(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
f(au, "resolveYamlBoolean");
function nu(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
f(nu, "constructYamlBoolean");
function lu(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
f(lu, "isBoolean");
var ok = new zt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: au,
  construct: nu,
  predicate: lu,
  represent: {
    lowercase: /* @__PURE__ */ f(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ f(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ f(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function hu(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
f(hu, "isHexCode");
function cu(e) {
  return 48 <= e && e <= 55;
}
f(cu, "isOctCode");
function du(e) {
  return 48 <= e && e <= 57;
}
f(du, "isDecCode");
function uu(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, o;
  if (!t) return !1;
  if (o = e[r], (o === "-" || o === "+") && (o = e[++r]), o === "0") {
    if (r + 1 === t) return !0;
    if (o = e[++r], o === "b") {
      for (r++; r < t; r++)
        if (o = e[r], o !== "_") {
          if (o !== "0" && o !== "1") return !1;
          i = !0;
        }
      return i && o !== "_";
    }
    if (o === "x") {
      for (r++; r < t; r++)
        if (o = e[r], o !== "_") {
          if (!hu(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && o !== "_";
    }
    if (o === "o") {
      for (r++; r < t; r++)
        if (o = e[r], o !== "_") {
          if (!cu(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && o !== "_";
    }
  }
  if (o === "_") return !1;
  for (; r < t; r++)
    if (o = e[r], o !== "_") {
      if (!du(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || o === "_");
}
f(uu, "resolveYamlInteger");
function pu(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
f(pu, "constructYamlInteger");
function fu(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !$t.isNegativeZero(e);
}
f(fu, "isInteger");
var sk = new zt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: uu,
  construct: pu,
  predicate: fu,
  represent: {
    binary: /* @__PURE__ */ f(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ f(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ f(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ f(function(e) {
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
}), ak = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function gu(e) {
  return !(e === null || !ak.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
f(gu, "resolveYamlFloat");
function mu(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
f(mu, "constructYamlFloat");
var nk = /^[-+]?[0-9]+e/;
function yu(e, t) {
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
  return r = e.toString(10), nk.test(r) ? r.replace("e", ".e") : r;
}
f(yu, "representYamlFloat");
function Cu(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || $t.isNegativeZero(e));
}
f(Cu, "isFloat");
var lk = new zt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: gu,
  construct: mu,
  predicate: Cu,
  represent: yu,
  defaultStyle: "lowercase"
}), xu = rk.extend({
  implicit: [
    ik,
    ok,
    sk,
    lk
  ]
}), hk = xu, bu = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), ku = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function wu(e) {
  return e === null ? !1 : bu.exec(e) !== null || ku.exec(e) !== null;
}
f(wu, "resolveYamlTimestamp");
function Tu(e) {
  var t, r, i, o, s, a, n, l = 0, c = null, h, d, p;
  if (t = bu.exec(e), t === null && (t = ku.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, o = +t[3], !t[4])
    return new Date(Date.UTC(r, i, o));
  if (s = +t[4], a = +t[5], n = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], d = +(t[11] || 0), c = (h * 60 + d) * 6e4, t[9] === "-" && (c = -c)), p = new Date(Date.UTC(r, i, o, s, a, n, l)), c && p.setTime(p.getTime() - c), p;
}
f(Tu, "constructYamlTimestamp");
function Su(e) {
  return e.toISOString();
}
f(Su, "representYamlTimestamp");
var ck = new zt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: wu,
  construct: Tu,
  instanceOf: Date,
  represent: Su
});
function _u(e) {
  return e === "<<" || e === null;
}
f(_u, "resolveYamlMerge");
var dk = new zt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: _u
}), Fn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function vu(e) {
  if (e === null) return !1;
  var t, r, i = 0, o = e.length, s = Fn;
  for (r = 0; r < o; r++)
    if (t = s.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
f(vu, "resolveYamlBinary");
function Bu(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), o = i.length, s = Fn, a = 0, n = [];
  for (t = 0; t < o; t++)
    t % 4 === 0 && t && (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)), a = a << 6 | s.indexOf(i.charAt(t));
  return r = o % 4 * 6, r === 0 ? (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)) : r === 18 ? (n.push(a >> 10 & 255), n.push(a >> 2 & 255)) : r === 12 && n.push(a >> 4 & 255), new Uint8Array(n);
}
f(Bu, "constructYamlBinary");
function Lu(e) {
  var t = "", r = 0, i, o, s = e.length, a = Fn;
  for (i = 0; i < s; i++)
    i % 3 === 0 && i && (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]), r = (r << 8) + e[i];
  return o = s % 3, o === 0 ? (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]) : o === 2 ? (t += a[r >> 10 & 63], t += a[r >> 4 & 63], t += a[r << 2 & 63], t += a[64]) : o === 1 && (t += a[r >> 2 & 63], t += a[r << 4 & 63], t += a[64], t += a[64]), t;
}
f(Lu, "representYamlBinary");
function Fu(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
f(Fu, "isBinary");
var uk = new zt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: vu,
  construct: Bu,
  predicate: Fu,
  represent: Lu
}), pk = Object.prototype.hasOwnProperty, fk = Object.prototype.toString;
function Au(e) {
  if (e === null) return !0;
  var t = [], r, i, o, s, a, n = e;
  for (r = 0, i = n.length; r < i; r += 1) {
    if (o = n[r], a = !1, fk.call(o) !== "[object Object]") return !1;
    for (s in o)
      if (pk.call(o, s))
        if (!a) a = !0;
        else return !1;
    if (!a) return !1;
    if (t.indexOf(s) === -1) t.push(s);
    else return !1;
  }
  return !0;
}
f(Au, "resolveYamlOmap");
function Mu(e) {
  return e !== null ? e : [];
}
f(Mu, "constructYamlOmap");
var gk = new zt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Au,
  construct: Mu
}), mk = Object.prototype.toString;
function Eu(e) {
  if (e === null) return !0;
  var t, r, i, o, s, a = e;
  for (s = new Array(a.length), t = 0, r = a.length; t < r; t += 1) {
    if (i = a[t], mk.call(i) !== "[object Object]" || (o = Object.keys(i), o.length !== 1)) return !1;
    s[t] = [o[0], i[o[0]]];
  }
  return !0;
}
f(Eu, "resolveYamlPairs");
function $u(e) {
  if (e === null) return [];
  var t, r, i, o, s, a = e;
  for (s = new Array(a.length), t = 0, r = a.length; t < r; t += 1)
    i = a[t], o = Object.keys(i), s[t] = [o[0], i[o[0]]];
  return s;
}
f($u, "constructYamlPairs");
var yk = new zt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Eu,
  construct: $u
}), Ck = Object.prototype.hasOwnProperty;
function Ou(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (Ck.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
f(Ou, "resolveYamlSet");
function Iu(e) {
  return e !== null ? e : {};
}
f(Iu, "constructYamlSet");
var xk = new zt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Ou,
  construct: Iu
}), Du = hk.extend({
  implicit: [
    ck,
    dk
  ],
  explicit: [
    uk,
    gk,
    yk,
    xk
  ]
}), tr = Object.prototype.hasOwnProperty, Yo = 1, Ru = 2, Pu = 3, Uo = 4, Zs = 1, bk = 2, Sh = 3, kk = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, wk = /[\x85\u2028\u2029]/, Tk = /[,\[\]\{\}]/, Nu = /^(?:!|!!|![a-z\-]+!)$/i, qu = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Ba(e) {
  return Object.prototype.toString.call(e);
}
f(Ba, "_class");
function ye(e) {
  return e === 10 || e === 13;
}
f(ye, "is_EOL");
function Qe(e) {
  return e === 9 || e === 32;
}
f(Qe, "is_WHITE_SPACE");
function Gt(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
f(Gt, "is_WS_OR_EOL");
function ur(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
f(ur, "is_FLOW_INDICATOR");
function Wu(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
f(Wu, "fromHexCode");
function zu(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
f(zu, "escapedHexLen");
function Hu(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
f(Hu, "fromDecimalCode");
function La(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
f(La, "simpleEscapeSequence");
function Yu(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
f(Yu, "charFromCodepoint");
function An(e, t, r) {
  t === "__proto__" ? Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r
  }) : e[t] = r;
}
f(An, "setProperty");
var Uu = new Array(256), Gu = new Array(256);
for (ar = 0; ar < 256; ar++)
  Uu[ar] = La(ar) ? 1 : 0, Gu[ar] = La(ar);
var ar;
function ju(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Du, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
f(ju, "State$1");
function Mn(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = V1(r), new te(t, r);
}
f(Mn, "generateError");
function K(e, t) {
  throw Mn(e, t);
}
f(K, "throwError");
function $i(e, t) {
  e.onWarning && e.onWarning.call(null, Mn(e, t));
}
f($i, "throwWarning");
var _h = {
  YAML: /* @__PURE__ */ f(function(t, r, i) {
    var o, s, a;
    t.version !== null && K(t, "duplication of %YAML directive"), i.length !== 1 && K(t, "YAML directive accepts exactly one argument"), o = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), o === null && K(t, "ill-formed argument of the YAML directive"), s = parseInt(o[1], 10), a = parseInt(o[2], 10), s !== 1 && K(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = a < 2, a !== 1 && a !== 2 && $i(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ f(function(t, r, i) {
    var o, s;
    i.length !== 2 && K(t, "TAG directive accepts exactly two arguments"), o = i[0], s = i[1], Nu.test(o) || K(t, "ill-formed tag handle (first argument) of the TAG directive"), tr.call(t.tagMap, o) && K(t, 'there is a previously declared suffix for "' + o + '" tag handle'), qu.test(s) || K(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      s = decodeURIComponent(s);
    } catch {
      K(t, "tag prefix is malformed: " + s);
    }
    t.tagMap[o] = s;
  }, "handleTagDirective")
};
function qe(e, t, r, i) {
  var o, s, a, n;
  if (t < r) {
    if (n = e.input.slice(t, r), i)
      for (o = 0, s = n.length; o < s; o += 1)
        a = n.charCodeAt(o), a === 9 || 32 <= a && a <= 1114111 || K(e, "expected valid JSON character");
    else kk.test(n) && K(e, "the stream contains non-printable characters");
    e.result += n;
  }
}
f(qe, "captureSegment");
function Fa(e, t, r, i) {
  var o, s, a, n;
  for ($t.isObject(r) || K(e, "cannot merge mappings; the provided source object is unacceptable"), o = Object.keys(r), a = 0, n = o.length; a < n; a += 1)
    s = o[a], tr.call(t, s) || (An(t, s, r[s]), i[s] = !0);
}
f(Fa, "mergeMappings");
function pr(e, t, r, i, o, s, a, n, l) {
  var c, h;
  if (Array.isArray(o))
    for (o = Array.prototype.slice.call(o), c = 0, h = o.length; c < h; c += 1)
      Array.isArray(o[c]) && K(e, "nested arrays are not supported inside keys"), typeof o == "object" && Ba(o[c]) === "[object Object]" && (o[c] = "[object Object]");
  if (typeof o == "object" && Ba(o) === "[object Object]" && (o = "[object Object]"), o = String(o), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (c = 0, h = s.length; c < h; c += 1)
        Fa(e, t, s[c], r);
    else
      Fa(e, t, s, r);
  else
    !e.json && !tr.call(r, o) && tr.call(t, o) && (e.line = a || e.line, e.lineStart = n || e.lineStart, e.position = l || e.position, K(e, "duplicated mapping key")), An(t, o, s), delete r[o];
  return t;
}
f(pr, "storeMappingPair");
function gs(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : K(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
f(gs, "readLineBreak");
function _t(e, t, r) {
  for (var i = 0, o = e.input.charCodeAt(e.position); o !== 0; ) {
    for (; Qe(o); )
      o === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), o = e.input.charCodeAt(++e.position);
    if (t && o === 35)
      do
        o = e.input.charCodeAt(++e.position);
      while (o !== 10 && o !== 13 && o !== 0);
    if (ye(o))
      for (gs(e), o = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; o === 32; )
        e.lineIndent++, o = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && $i(e, "deficient indentation"), i;
}
f(_t, "skipSeparationSpace");
function Ui(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || Gt(r)));
}
f(Ui, "testDocumentSeparator");
function ms(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += $t.repeat(`
`, t - 1));
}
f(ms, "writeFoldedLines");
function Xu(e, t, r) {
  var i, o, s, a, n, l, c, h, d = e.kind, p = e.result, u;
  if (u = e.input.charCodeAt(e.position), Gt(u) || ur(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (o = e.input.charCodeAt(e.position + 1), Gt(o) || r && ur(o)))
    return !1;
  for (e.kind = "scalar", e.result = "", s = a = e.position, n = !1; u !== 0; ) {
    if (u === 58) {
      if (o = e.input.charCodeAt(e.position + 1), Gt(o) || r && ur(o))
        break;
    } else if (u === 35) {
      if (i = e.input.charCodeAt(e.position - 1), Gt(i))
        break;
    } else {
      if (e.position === e.lineStart && Ui(e) || r && ur(u))
        break;
      if (ye(u))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, _t(e, !1, -1), e.lineIndent >= t) {
          n = !0, u = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = a, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    n && (qe(e, s, a, !1), ms(e, e.line - l), s = a = e.position, n = !1), Qe(u) || (a = e.position + 1), u = e.input.charCodeAt(++e.position);
  }
  return qe(e, s, a, !1), e.result ? !0 : (e.kind = d, e.result = p, !1);
}
f(Xu, "readPlainScalar");
function Vu(e, t) {
  var r, i, o;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = o = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (qe(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, o = e.position;
      else
        return !0;
    else ye(r) ? (qe(e, i, o, !0), ms(e, _t(e, !1, t)), i = o = e.position) : e.position === e.lineStart && Ui(e) ? K(e, "unexpected end of the document within a single quoted scalar") : (e.position++, o = e.position);
  K(e, "unexpected end of the stream within a single quoted scalar");
}
f(Vu, "readSingleQuotedScalar");
function Zu(e, t) {
  var r, i, o, s, a, n;
  if (n = e.input.charCodeAt(e.position), n !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (n = e.input.charCodeAt(e.position)) !== 0; ) {
    if (n === 34)
      return qe(e, r, e.position, !0), e.position++, !0;
    if (n === 92) {
      if (qe(e, r, e.position, !0), n = e.input.charCodeAt(++e.position), ye(n))
        _t(e, !1, t);
      else if (n < 256 && Uu[n])
        e.result += Gu[n], e.position++;
      else if ((a = zu(n)) > 0) {
        for (o = a, s = 0; o > 0; o--)
          n = e.input.charCodeAt(++e.position), (a = Wu(n)) >= 0 ? s = (s << 4) + a : K(e, "expected hexadecimal character");
        e.result += Yu(s), e.position++;
      } else
        K(e, "unknown escape sequence");
      r = i = e.position;
    } else ye(n) ? (qe(e, r, i, !0), ms(e, _t(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Ui(e) ? K(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  K(e, "unexpected end of the stream within a double quoted scalar");
}
f(Zu, "readDoubleQuotedScalar");
function Ku(e, t) {
  var r = !0, i, o, s, a = e.tag, n, l = e.anchor, c, h, d, p, u, g = /* @__PURE__ */ Object.create(null), m, y, C, b;
  if (b = e.input.charCodeAt(e.position), b === 91)
    h = 93, u = !1, n = [];
  else if (b === 123)
    h = 125, u = !0, n = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = n), b = e.input.charCodeAt(++e.position); b !== 0; ) {
    if (_t(e, !0, t), b = e.input.charCodeAt(e.position), b === h)
      return e.position++, e.tag = a, e.anchor = l, e.kind = u ? "mapping" : "sequence", e.result = n, !0;
    r ? b === 44 && K(e, "expected the node content, but found ','") : K(e, "missed comma between flow collection entries"), y = m = C = null, d = p = !1, b === 63 && (c = e.input.charCodeAt(e.position + 1), Gt(c) && (d = p = !0, e.position++, _t(e, !0, t))), i = e.line, o = e.lineStart, s = e.position, Cr(e, t, Yo, !1, !0), y = e.tag, m = e.result, _t(e, !0, t), b = e.input.charCodeAt(e.position), (p || e.line === i) && b === 58 && (d = !0, b = e.input.charCodeAt(++e.position), _t(e, !0, t), Cr(e, t, Yo, !1, !0), C = e.result), u ? pr(e, n, g, y, m, C, i, o, s) : d ? n.push(pr(e, null, g, y, m, C, i, o, s)) : n.push(m), _t(e, !0, t), b = e.input.charCodeAt(e.position), b === 44 ? (r = !0, b = e.input.charCodeAt(++e.position)) : r = !1;
  }
  K(e, "unexpected end of the stream within a flow collection");
}
f(Ku, "readFlowCollection");
function Qu(e, t) {
  var r, i, o = Zs, s = !1, a = !1, n = t, l = 0, c = !1, h, d;
  if (d = e.input.charCodeAt(e.position), d === 124)
    i = !1;
  else if (d === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; d !== 0; )
    if (d = e.input.charCodeAt(++e.position), d === 43 || d === 45)
      Zs === o ? o = d === 43 ? Sh : bk : K(e, "repeat of a chomping mode identifier");
    else if ((h = Hu(d)) >= 0)
      h === 0 ? K(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? K(e, "repeat of an indentation width identifier") : (n = t + h - 1, a = !0);
    else
      break;
  if (Qe(d)) {
    do
      d = e.input.charCodeAt(++e.position);
    while (Qe(d));
    if (d === 35)
      do
        d = e.input.charCodeAt(++e.position);
      while (!ye(d) && d !== 0);
  }
  for (; d !== 0; ) {
    for (gs(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position); (!a || e.lineIndent < n) && d === 32; )
      e.lineIndent++, d = e.input.charCodeAt(++e.position);
    if (!a && e.lineIndent > n && (n = e.lineIndent), ye(d)) {
      l++;
      continue;
    }
    if (e.lineIndent < n) {
      o === Sh ? e.result += $t.repeat(`
`, s ? 1 + l : l) : o === Zs && s && (e.result += `
`);
      break;
    }
    for (i ? Qe(d) ? (c = !0, e.result += $t.repeat(`
`, s ? 1 + l : l)) : c ? (c = !1, e.result += $t.repeat(`
`, l + 1)) : l === 0 ? s && (e.result += " ") : e.result += $t.repeat(`
`, l) : e.result += $t.repeat(`
`, s ? 1 + l : l), s = !0, a = !0, l = 0, r = e.position; !ye(d) && d !== 0; )
      d = e.input.charCodeAt(++e.position);
    qe(e, r, e.position, !1);
  }
  return !0;
}
f(Qu, "readBlockScalar");
function Aa(e, t) {
  var r, i = e.tag, o = e.anchor, s = [], a, n = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, K(e, "tab characters must not be used in indentation")), !(l !== 45 || (a = e.input.charCodeAt(e.position + 1), !Gt(a)))); ) {
    if (n = !0, e.position++, _t(e, !0, -1) && e.lineIndent <= t) {
      s.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, Cr(e, t, Pu, !1, !0), s.push(e.result), _t(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      K(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return n ? (e.tag = i, e.anchor = o, e.kind = "sequence", e.result = s, !0) : !1;
}
f(Aa, "readBlockSequence");
function Ju(e, t, r) {
  var i, o, s, a, n, l, c = e.tag, h = e.anchor, d = {}, p = /* @__PURE__ */ Object.create(null), u = null, g = null, m = null, y = !1, C = !1, b;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = d), b = e.input.charCodeAt(e.position); b !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, K(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), s = e.line, (b === 63 || b === 58) && Gt(i))
      b === 63 ? (y && (pr(e, d, p, u, g, null, a, n, l), u = g = m = null), C = !0, y = !0, o = !0) : y ? (y = !1, o = !0) : K(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, b = i;
    else {
      if (a = e.line, n = e.lineStart, l = e.position, !Cr(e, r, Ru, !1, !0))
        break;
      if (e.line === s) {
        for (b = e.input.charCodeAt(e.position); Qe(b); )
          b = e.input.charCodeAt(++e.position);
        if (b === 58)
          b = e.input.charCodeAt(++e.position), Gt(b) || K(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (pr(e, d, p, u, g, null, a, n, l), u = g = m = null), C = !0, y = !1, o = !1, u = e.tag, g = e.result;
        else if (C)
          K(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (C)
        K(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === s || e.lineIndent > t) && (y && (a = e.line, n = e.lineStart, l = e.position), Cr(e, t, Uo, !0, o) && (y ? g = e.result : m = e.result), y || (pr(e, d, p, u, g, m, a, n, l), u = g = m = null), _t(e, !0, -1), b = e.input.charCodeAt(e.position)), (e.line === s || e.lineIndent > t) && b !== 0)
      K(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && pr(e, d, p, u, g, null, a, n, l), C && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = d), C;
}
f(Ju, "readBlockMapping");
function tp(e) {
  var t, r = !1, i = !1, o, s, a;
  if (a = e.input.charCodeAt(e.position), a !== 33) return !1;
  if (e.tag !== null && K(e, "duplication of a tag property"), a = e.input.charCodeAt(++e.position), a === 60 ? (r = !0, a = e.input.charCodeAt(++e.position)) : a === 33 ? (i = !0, o = "!!", a = e.input.charCodeAt(++e.position)) : o = "!", t = e.position, r) {
    do
      a = e.input.charCodeAt(++e.position);
    while (a !== 0 && a !== 62);
    e.position < e.length ? (s = e.input.slice(t, e.position), a = e.input.charCodeAt(++e.position)) : K(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !Gt(a); )
      a === 33 && (i ? K(e, "tag suffix cannot contain exclamation marks") : (o = e.input.slice(t - 1, e.position + 1), Nu.test(o) || K(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), a = e.input.charCodeAt(++e.position);
    s = e.input.slice(t, e.position), Tk.test(s) && K(e, "tag suffix cannot contain flow indicator characters");
  }
  s && !qu.test(s) && K(e, "tag name cannot contain such characters: " + s);
  try {
    s = decodeURIComponent(s);
  } catch {
    K(e, "tag name is malformed: " + s);
  }
  return r ? e.tag = s : tr.call(e.tagMap, o) ? e.tag = e.tagMap[o] + s : o === "!" ? e.tag = "!" + s : o === "!!" ? e.tag = "tag:yaml.org,2002:" + s : K(e, 'undeclared tag handle "' + o + '"'), !0;
}
f(tp, "readTagProperty");
function ep(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && K(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !Gt(r) && !ur(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && K(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
f(ep, "readAnchorProperty");
function rp(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !Gt(i) && !ur(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && K(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), tr.call(e.anchorMap, r) || K(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], _t(e, !0, -1), !0;
}
f(rp, "readAlias");
function Cr(e, t, r, i, o) {
  var s, a, n, l = 1, c = !1, h = !1, d, p, u, g, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, s = a = n = Uo === r || Pu === r, i && _t(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; tp(e) || ep(e); )
      _t(e, !0, -1) ? (c = !0, n = s, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : n = !1;
  if (n && (n = c || o), (l === 1 || Uo === r) && (Yo === r || Ru === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? n && (Aa(e, y) || Ju(e, y, m)) || Ku(e, m) ? h = !0 : (a && Qu(e, m) || Vu(e, m) || Zu(e, m) ? h = !0 : rp(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && K(e, "alias node should not have any properties")) : Xu(e, m, Yo === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = n && Aa(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && K(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), d = 0, p = e.implicitTypes.length; d < p; d += 1)
      if (g = e.implicitTypes[d], g.resolve(e.result)) {
        e.result = g.construct(e.result), e.tag = g.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (tr.call(e.typeMap[e.kind || "fallback"], e.tag))
      g = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (g = null, u = e.typeMap.multi[e.kind || "fallback"], d = 0, p = u.length; d < p; d += 1)
        if (e.tag.slice(0, u[d].tag.length) === u[d].tag) {
          g = u[d];
          break;
        }
    g || K(e, "unknown tag !<" + e.tag + ">"), e.result !== null && g.kind !== e.kind && K(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + g.kind + '", not "' + e.kind + '"'), g.resolve(e.result, e.tag) ? (e.result = g.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : K(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
f(Cr, "composeNode");
function ip(e) {
  var t = e.position, r, i, o, s = !1, a;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (a = e.input.charCodeAt(e.position)) !== 0 && (_t(e, !0, -1), a = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || a !== 37)); ) {
    for (s = !0, a = e.input.charCodeAt(++e.position), r = e.position; a !== 0 && !Gt(a); )
      a = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), o = [], i.length < 1 && K(e, "directive name must not be less than one character in length"); a !== 0; ) {
      for (; Qe(a); )
        a = e.input.charCodeAt(++e.position);
      if (a === 35) {
        do
          a = e.input.charCodeAt(++e.position);
        while (a !== 0 && !ye(a));
        break;
      }
      if (ye(a)) break;
      for (r = e.position; a !== 0 && !Gt(a); )
        a = e.input.charCodeAt(++e.position);
      o.push(e.input.slice(r, e.position));
    }
    a !== 0 && gs(e), tr.call(_h, i) ? _h[i](e, i, o) : $i(e, 'unknown document directive "' + i + '"');
  }
  if (_t(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, _t(e, !0, -1)) : s && K(e, "directives end mark is expected"), Cr(e, e.lineIndent - 1, Uo, !1, !0), _t(e, !0, -1), e.checkLineBreaks && wk.test(e.input.slice(t, e.position)) && $i(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Ui(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, _t(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    K(e, "end of the stream or a document separator is expected");
  else
    return;
}
f(ip, "readDocument");
function En(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new ju(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, K(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    ip(r);
  return r.documents;
}
f(En, "loadDocuments");
function Sk(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = En(e, r);
  if (typeof t != "function")
    return i;
  for (var o = 0, s = i.length; o < s; o += 1)
    t(i[o]);
}
f(Sk, "loadAll$1");
function op(e, t) {
  var r = En(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new te("expected a single document in the stream, but found more");
  }
}
f(op, "load$1");
var _k = op, vk = {
  load: _k
}, sp = Object.prototype.toString, ap = Object.prototype.hasOwnProperty, $n = 65279, Bk = 9, Oi = 10, Lk = 13, Fk = 32, Ak = 33, Mk = 34, Ma = 35, Ek = 37, $k = 38, Ok = 39, Ik = 42, np = 44, Dk = 45, Go = 58, Rk = 61, Pk = 62, Nk = 63, qk = 64, lp = 91, hp = 93, Wk = 96, cp = 123, zk = 124, dp = 125, Ht = {};
Ht[0] = "\\0";
Ht[7] = "\\a";
Ht[8] = "\\b";
Ht[9] = "\\t";
Ht[10] = "\\n";
Ht[11] = "\\v";
Ht[12] = "\\f";
Ht[13] = "\\r";
Ht[27] = "\\e";
Ht[34] = '\\"';
Ht[92] = "\\\\";
Ht[133] = "\\N";
Ht[160] = "\\_";
Ht[8232] = "\\L";
Ht[8233] = "\\P";
var Hk = [
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
], Yk = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function up(e, t) {
  var r, i, o, s, a, n, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), o = 0, s = i.length; o < s; o += 1)
    a = i[o], n = String(t[a]), a.slice(0, 2) === "!!" && (a = "tag:yaml.org,2002:" + a.slice(2)), l = e.compiledTypeMap.fallback[a], l && ap.call(l.styleAliases, n) && (n = l.styleAliases[n]), r[a] = n;
  return r;
}
f(up, "compileStyleMap");
function pp(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new te("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + $t.repeat("0", i - t.length) + t;
}
f(pp, "encodeHex");
var Uk = 1, Ii = 2;
function fp(e) {
  this.schema = e.schema || Du, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = $t.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = up(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? Ii : Uk, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
f(fp, "State");
function Ea(e, t) {
  for (var r = $t.repeat(" ", t), i = 0, o = -1, s = "", a, n = e.length; i < n; )
    o = e.indexOf(`
`, i), o === -1 ? (a = e.slice(i), i = n) : (a = e.slice(i, o + 1), i = o + 1), a.length && a !== `
` && (s += r), s += a;
  return s;
}
f(Ea, "indentString");
function jo(e, t) {
  return `
` + $t.repeat(" ", e.indent * t);
}
f(jo, "generateNextLine");
function gp(e, t) {
  var r, i, o;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (o = e.implicitTypes[r], o.resolve(t))
      return !0;
  return !1;
}
f(gp, "testImplicitResolving");
function Di(e) {
  return e === Fk || e === Bk;
}
f(Di, "isWhitespace");
function jr(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== $n || 65536 <= e && e <= 1114111;
}
f(jr, "isPrintable");
function $a(e) {
  return jr(e) && e !== $n && e !== Lk && e !== Oi;
}
f($a, "isNsCharOrWhitespace");
function Oa(e, t, r) {
  var i = $a(e), o = i && !Di(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== np && e !== lp && e !== hp && e !== cp && e !== dp) && e !== Ma && !(t === Go && !o) || $a(t) && !Di(t) && e === Ma || t === Go && o
  );
}
f(Oa, "isPlainSafe");
function mp(e) {
  return jr(e) && e !== $n && !Di(e) && e !== Dk && e !== Nk && e !== Go && e !== np && e !== lp && e !== hp && e !== cp && e !== dp && e !== Ma && e !== $k && e !== Ik && e !== Ak && e !== zk && e !== Rk && e !== Pk && e !== Ok && e !== Mk && e !== Ek && e !== qk && e !== Wk;
}
f(mp, "isPlainSafeFirst");
function yp(e) {
  return !Di(e) && e !== Go;
}
f(yp, "isPlainSafeLast");
function Rr(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
f(Rr, "codePointAt");
function On(e) {
  var t = /^\n* /;
  return t.test(e);
}
f(On, "needIndentIndicator");
var Cp = 1, Ia = 2, xp = 3, bp = 4, $r = 5;
function kp(e, t, r, i, o, s, a, n) {
  var l, c = 0, h = null, d = !1, p = !1, u = i !== -1, g = -1, m = mp(Rr(e, 0)) && yp(Rr(e, e.length - 1));
  if (t || a)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = Rr(e, l), !jr(c))
        return $r;
      m = m && Oa(c, h, n), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = Rr(e, l), c === Oi)
        d = !0, u && (p = p || // Foldable line = too long, and not more-indented.
        l - g - 1 > i && e[g + 1] !== " ", g = l);
      else if (!jr(c))
        return $r;
      m = m && Oa(c, h, n), h = c;
    }
    p = p || u && l - g - 1 > i && e[g + 1] !== " ";
  }
  return !d && !p ? m && !a && !o(e) ? Cp : s === Ii ? $r : Ia : r > 9 && On(e) ? $r : a ? s === Ii ? $r : Ia : p ? bp : xp;
}
f(kp, "chooseScalarStyle");
function wp(e, t, r, i, o) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === Ii ? '""' : "''";
    if (!e.noCompatMode && (Hk.indexOf(t) !== -1 || Yk.test(t)))
      return e.quotingType === Ii ? '"' + t + '"' : "'" + t + "'";
    var s = e.indent * Math.max(1, r), a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - s), n = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return gp(e, c);
    }
    switch (f(l, "testAmbiguity"), kp(
      t,
      n,
      e.indent,
      a,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      o
    )) {
      case Cp:
        return t;
      case Ia:
        return "'" + t.replace(/'/g, "''") + "'";
      case xp:
        return "|" + Da(t, e.indent) + Ra(Ea(t, s));
      case bp:
        return ">" + Da(t, e.indent) + Ra(Ea(Tp(t, a), s));
      case $r:
        return '"' + Sp(t) + '"';
      default:
        throw new te("impossible error: invalid scalar style");
    }
  })();
}
f(wp, "writeScalar");
function Da(e, t) {
  var r = On(e) ? String(t) : "", i = e[e.length - 1] === `
`, o = i && (e[e.length - 2] === `
` || e === `
`), s = o ? "+" : i ? "" : "-";
  return r + s + `
`;
}
f(Da, "blockHeader");
function Ra(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
f(Ra, "dropEndingNewline");
function Tp(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Pa(e.slice(0, c), t);
  })(), o = e[0] === `
` || e[0] === " ", s, a; a = r.exec(e); ) {
    var n = a[1], l = a[2];
    s = l[0] === " ", i += n + (!o && !s && l !== "" ? `
` : "") + Pa(l, t), o = s;
  }
  return i;
}
f(Tp, "foldString");
function Pa(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, o = 0, s, a = 0, n = 0, l = ""; i = r.exec(e); )
    n = i.index, n - o > t && (s = a > o ? a : n, l += `
` + e.slice(o, s), o = s + 1), a = n;
  return l += `
`, e.length - o > t && a > o ? l += e.slice(o, a) + `
` + e.slice(a + 1) : l += e.slice(o), l.slice(1);
}
f(Pa, "foldLine");
function Sp(e) {
  for (var t = "", r = 0, i, o = 0; o < e.length; r >= 65536 ? o += 2 : o++)
    r = Rr(e, o), i = Ht[r], !i && jr(r) ? (t += e[o], r >= 65536 && (t += e[o + 1])) : t += i || pp(r);
  return t;
}
f(Sp, "escapeString");
function _p(e, t, r) {
  var i = "", o = e.tag, s, a, n;
  for (s = 0, a = r.length; s < a; s += 1)
    n = r[s], e.replacer && (n = e.replacer.call(r, String(s), n)), (Fe(e, t, n, !1, !1) || typeof n > "u" && Fe(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = o, e.dump = "[" + i + "]";
}
f(_p, "writeFlowSequence");
function Na(e, t, r, i) {
  var o = "", s = e.tag, a, n, l;
  for (a = 0, n = r.length; a < n; a += 1)
    l = r[a], e.replacer && (l = e.replacer.call(r, String(a), l)), (Fe(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && Fe(e, t + 1, null, !0, !0, !1, !0)) && ((!i || o !== "") && (o += jo(e, t)), e.dump && Oi === e.dump.charCodeAt(0) ? o += "-" : o += "- ", o += e.dump);
  e.tag = s, e.dump = o || "[]";
}
f(Na, "writeBlockSequence");
function vp(e, t, r) {
  var i = "", o = e.tag, s = Object.keys(r), a, n, l, c, h;
  for (a = 0, n = s.length; a < n; a += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = s[a], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), Fe(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Fe(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = o, e.dump = "{" + i + "}";
}
f(vp, "writeFlowMapping");
function Bp(e, t, r, i) {
  var o = "", s = e.tag, a = Object.keys(r), n, l, c, h, d, p;
  if (e.sortKeys === !0)
    a.sort();
  else if (typeof e.sortKeys == "function")
    a.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new te("sortKeys must be a boolean or a function");
  for (n = 0, l = a.length; n < l; n += 1)
    p = "", (!i || o !== "") && (p += jo(e, t)), c = a[n], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), Fe(e, t + 1, c, !0, !0, !0) && (d = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, d && (e.dump && Oi === e.dump.charCodeAt(0) ? p += "?" : p += "? "), p += e.dump, d && (p += jo(e, t)), Fe(e, t + 1, h, !0, d) && (e.dump && Oi === e.dump.charCodeAt(0) ? p += ":" : p += ": ", p += e.dump, o += p));
  e.tag = s, e.dump = o || "{}";
}
f(Bp, "writeBlockMapping");
function qa(e, t, r) {
  var i, o, s, a, n, l;
  for (o = r ? e.explicitTypes : e.implicitTypes, s = 0, a = o.length; s < a; s += 1)
    if (n = o[s], (n.instanceOf || n.predicate) && (!n.instanceOf || typeof t == "object" && t instanceof n.instanceOf) && (!n.predicate || n.predicate(t))) {
      if (r ? n.multi && n.representName ? e.tag = n.representName(t) : e.tag = n.tag : e.tag = "?", n.represent) {
        if (l = e.styleMap[n.tag] || n.defaultStyle, sp.call(n.represent) === "[object Function]")
          i = n.represent(t, l);
        else if (ap.call(n.represent, l))
          i = n.represent[l](t, l);
        else
          throw new te("!<" + n.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
f(qa, "detectType");
function Fe(e, t, r, i, o, s, a) {
  e.tag = null, e.dump = r, qa(e, r, !1) || qa(e, r, !0);
  var n = sp.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = n === "[object Object]" || n === "[object Array]", d, p;
  if (h && (d = e.duplicates.indexOf(r), p = d !== -1), (e.tag !== null && e.tag !== "?" || p || e.indent !== 2 && t > 0) && (o = !1), p && e.usedDuplicates[d])
    e.dump = "*ref_" + d;
  else {
    if (h && p && !e.usedDuplicates[d] && (e.usedDuplicates[d] = !0), n === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (Bp(e, t, e.dump, o), p && (e.dump = "&ref_" + d + e.dump)) : (vp(e, t, e.dump), p && (e.dump = "&ref_" + d + " " + e.dump));
    else if (n === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !a && t > 0 ? Na(e, t - 1, e.dump, o) : Na(e, t, e.dump, o), p && (e.dump = "&ref_" + d + e.dump)) : (_p(e, t, e.dump), p && (e.dump = "&ref_" + d + " " + e.dump));
    else if (n === "[object String]")
      e.tag !== "?" && wp(e, e.dump, t, s, l);
    else {
      if (n === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new te("unacceptable kind of an object to dump " + n);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
f(Fe, "writeNode");
function Lp(e, t) {
  var r = [], i = [], o, s;
  for (Xo(e, r, i), o = 0, s = i.length; o < s; o += 1)
    t.duplicates.push(r[i[o]]);
  t.usedDuplicates = new Array(s);
}
f(Lp, "getDuplicateReferences");
function Xo(e, t, r) {
  var i, o, s;
  if (e !== null && typeof e == "object")
    if (o = t.indexOf(e), o !== -1)
      r.indexOf(o) === -1 && r.push(o);
    else if (t.push(e), Array.isArray(e))
      for (o = 0, s = e.length; o < s; o += 1)
        Xo(e[o], t, r);
    else
      for (i = Object.keys(e), o = 0, s = i.length; o < s; o += 1)
        Xo(e[i[o]], t, r);
}
f(Xo, "inspectNode");
function Gk(e, t) {
  t = t || {};
  var r = new fp(t);
  r.noRefs || Lp(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), Fe(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
f(Gk, "dump$1");
function jk(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
f(jk, "renamed");
var Xk = xu, Vk = vk.load;
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
var ni = /* @__PURE__ */ f((e, t) => {
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
}, vh = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function xi(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = kt(e), t = kt(t);
  const [r, i] = [e.x, e.y], [o, s] = [t.x, t.y], a = o - r, n = s - i;
  return { angle: Math.atan(n / a), deltaX: a, deltaY: n };
}
f(xi, "calculateDeltaAndAngle");
var kt = /* @__PURE__ */ f((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), Zk = /* @__PURE__ */ f((e) => ({
  x: /* @__PURE__ */ f(function(t, r, i) {
    let o = 0;
    const s = kt(i[0]).x < kt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(Wt, e.arrowTypeStart)) {
      const { angle: u, deltaX: g } = xi(i[0], i[1]);
      o = Wt[e.arrowTypeStart] * Math.cos(u) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Wt, e.arrowTypeEnd)) {
      const { angle: u, deltaX: g } = xi(
        i[i.length - 1],
        i[i.length - 2]
      );
      o = Wt[e.arrowTypeEnd] * Math.cos(u) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      kt(t).x - kt(i[i.length - 1]).x
    ), n = Math.abs(
      kt(t).y - kt(i[i.length - 1]).y
    ), l = Math.abs(kt(t).x - kt(i[0]).x), c = Math.abs(kt(t).y - kt(i[0]).y), h = Wt[e.arrowTypeStart], d = Wt[e.arrowTypeEnd], p = 1;
    if (a < d && a > 0 && n < d) {
      let u = d + p - a;
      u *= s === "right" ? -1 : 1, o -= u;
    }
    if (l < h && l > 0 && c < h) {
      let u = h + p - l;
      u *= s === "right" ? -1 : 1, o += u;
    }
    return kt(t).x + o;
  }, "x"),
  y: /* @__PURE__ */ f(function(t, r, i) {
    let o = 0;
    const s = kt(i[0]).y < kt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(Wt, e.arrowTypeStart)) {
      const { angle: u, deltaY: g } = xi(i[0], i[1]);
      o = Wt[e.arrowTypeStart] * Math.abs(Math.sin(u)) * (g >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(Wt, e.arrowTypeEnd)) {
      const { angle: u, deltaY: g } = xi(
        i[i.length - 1],
        i[i.length - 2]
      );
      o = Wt[e.arrowTypeEnd] * Math.abs(Math.sin(u)) * (g >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      kt(t).y - kt(i[i.length - 1]).y
    ), n = Math.abs(
      kt(t).x - kt(i[i.length - 1]).x
    ), l = Math.abs(kt(t).y - kt(i[0]).y), c = Math.abs(kt(t).x - kt(i[0]).x), h = Wt[e.arrowTypeStart], d = Wt[e.arrowTypeEnd], p = 1;
    if (a < d && a > 0 && n < d) {
      let u = d + p - a;
      u *= s === "up" ? -1 : 1, o -= u;
    }
    if (l < h && l > 0 && c < h) {
      let u = h + p - l;
      u *= s === "up" ? -1 : 1, o += u;
    }
    return kt(t).y + o;
  }, "y")
}), "getLineFunctionsWithOffset"), li = {}, Mt = {}, Bh;
function Kk() {
  return Bh || (Bh = 1, Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.BLANK_URL = Mt.relativeFirstCharacters = Mt.whitespaceEscapeCharsRegex = Mt.urlSchemeRegex = Mt.ctrlCharactersRegex = Mt.htmlCtrlEntityRegex = Mt.htmlEntitiesRegex = Mt.invalidProtocolRegex = void 0, Mt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Mt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Mt.htmlCtrlEntityRegex = /&(newline|tab);/gi, Mt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Mt.urlSchemeRegex = /^.+(:|&colon;)/gim, Mt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Mt.relativeFirstCharacters = [".", "/"], Mt.BLANK_URL = "about:blank"), Mt;
}
var Lh;
function Qk() {
  if (Lh) return li;
  Lh = 1, Object.defineProperty(li, "__esModule", { value: !0 }), li.sanitizeUrl = void 0;
  var e = Kk();
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
  function o(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function s(a) {
    if (!a)
      return e.BLANK_URL;
    var n, l = o(a.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = o(l), n = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (n && n.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), d = h.match(e.urlSchemeRegex);
    if (!d)
      return c;
    var p = d[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(p))
      return e.BLANK_URL;
    var u = h.replace(/\\/g, "/");
    if (p === "mailto:" || p.includes("://"))
      return u;
    if (p === "http:" || p === "https:") {
      if (!i(u))
        return e.BLANK_URL;
      var g = new URL(u);
      return g.protocol = g.protocol.toLowerCase(), g.hostname = g.hostname.toLowerCase(), g.toString();
    }
    return u;
  }
  return li.sanitizeUrl = s, li;
}
var Jk = Qk();
function Ks(e) {
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
function t2() {
}
function Fp(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function In(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const e2 = "[object RegExp]", Ap = "[object String]", Mp = "[object Number]", Ep = "[object Boolean]", $p = "[object Arguments]", r2 = "[object Symbol]", i2 = "[object Date]", o2 = "[object Map]", s2 = "[object Set]", a2 = "[object Array]", n2 = "[object ArrayBuffer]", l2 = "[object Object]", h2 = "[object DataView]", c2 = "[object Uint8Array]", d2 = "[object Uint8ClampedArray]", u2 = "[object Uint16Array]", p2 = "[object Uint32Array]", f2 = "[object Int8Array]", g2 = "[object Int16Array]", m2 = "[object Int32Array]", y2 = "[object Float32Array]", C2 = "[object Float64Array]", Fh = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function Dn(e) {
  return typeof Fh.Buffer < "u" && Fh.Buffer.isBuffer(e);
}
function x2(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function Op(e) {
  return e != null && typeof e != "function" && x2(e.length);
}
function b2(e) {
  return e === "__proto__";
}
function Rn(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Pn(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function k2(e, t) {
  return Pr(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function Pr(e, t, r, i = /* @__PURE__ */ new Map(), o = void 0) {
  const s = o?.(e, t, r, i);
  if (s !== void 0) return s;
  if (Rn(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const a = new Array(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = Pr(e[n], n, r, i, o);
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
    for (const [n, l] of e) a.set(n, Pr(l, n, r, i, o));
    return a;
  }
  if (e instanceof Set) {
    const a = /* @__PURE__ */ new Set();
    i.set(e, a);
    for (const n of e) a.add(Pr(n, void 0, r, i, o));
    return a;
  }
  if (Dn(e)) return e.subarray();
  if (Pn(e)) {
    const a = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = Pr(e[n], n, r, i, o);
    return a;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const a = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (typeof File < "u" && e instanceof File) {
    const a = new File([e], e.name, { type: e.type });
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const a = new Blob([e], { type: e.type });
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (e instanceof Error) {
    const a = structuredClone(e);
    return i.set(e, a), a.message = e.message, a.name = e.name, a.stack = e.stack, a.cause = e.cause, a.constructor = e.constructor, ue(a, e, r, i, o), a;
  }
  if (e instanceof Boolean) {
    const a = new Boolean(e.valueOf());
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (e instanceof Number) {
    const a = new Number(e.valueOf());
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (e instanceof String) {
    const a = new String(e.valueOf());
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  if (typeof e == "object" && w2(e)) {
    const a = Object.create(Object.getPrototypeOf(e));
    return i.set(e, a), ue(a, e, r, i, o), a;
  }
  return e;
}
function ue(e, t, r = e, i, o) {
  const s = [...Object.keys(t), ...Fp(t)];
  for (let a = 0; a < s.length; a++) {
    const n = s[a], l = Object.getOwnPropertyDescriptor(e, n);
    (l == null || l.writable) && (e[n] = Pr(t[n], n, r, i, o));
  }
}
function w2(e) {
  switch (In(e)) {
    case $p:
    case a2:
    case n2:
    case h2:
    case Ep:
    case i2:
    case y2:
    case C2:
    case f2:
    case g2:
    case m2:
    case o2:
    case Mp:
    case l2:
    case e2:
    case s2:
    case Ap:
    case r2:
    case c2:
    case d2:
    case u2:
    case p2:
      return !0;
    default:
      return !1;
  }
}
function T2(e, t) {
  return k2(e, (r, i, o, s) => {
    if (typeof e == "object") {
      if (In(e) === "[object Object]" && typeof e.constructor != "function") {
        const a = {};
        return s.set(e, a), ue(a, e, o, s), a;
      }
      switch (Object.prototype.toString.call(e)) {
        case Mp:
        case Ap:
        case Ep: {
          const a = new e.constructor(e?.valueOf());
          return ue(a, e), a;
        }
        case $p: {
          const a = {};
          return ue(a, e), a.length = e.length, a[Symbol.iterator] = e[Symbol.iterator], a;
        }
        default:
          return;
      }
    }
  });
}
function Ah(e) {
  return T2(e);
}
function Wa(e) {
  return e !== null && typeof e == "object" && In(e) === "[object Arguments]";
}
function za(e) {
  return typeof e == "object" && e !== null;
}
function S2(e) {
  return za(e) && Op(e);
}
function Gi(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  const r = function(...i) {
    const o = t ? t.apply(this, i) : i[0], s = r.cache;
    if (s.has(o)) return s.get(o);
    const a = e.apply(this, i);
    return r.cache = s.set(o, a) || s, a;
  };
  return r.cache = new (Gi.Cache || Map)(), r;
}
Gi.Cache = Map;
function wo(e) {
  return Pn(e);
}
function _2(e) {
  const t = e?.constructor;
  return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function v2(e) {
  if (Rn(e)) return e;
  if (Array.isArray(e) || Pn(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
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
function B2(e, ...t) {
  const r = t.slice(0, -1), i = t[t.length - 1];
  let o = e;
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    o = To(o, a, i, /* @__PURE__ */ new Map());
  }
  return o;
}
function To(e, t, r, i) {
  if (Rn(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return v2(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let s = 0; s < t.length; s++) t[s] = t[s] ?? void 0;
  }
  const o = [...Object.keys(t), ...Fp(t)];
  for (let s = 0; s < o.length; s++) {
    const a = o[s];
    if (b2(a)) continue;
    let n = t[a], l = e[a];
    if (Wa(n) && (n = { ...n }), Wa(l) && (l = { ...l }), Dn(n) && (n = Ah(n)), Array.isArray(n)) if (Array.isArray(l)) {
      const h = [], d = Reflect.ownKeys(l);
      for (let p = 0; p < d.length; p++) {
        const u = d[p];
        h[u] = l[u];
      }
      l = h;
    } else if (S2(l)) {
      const h = [];
      for (let d = 0; d < l.length; d++) h[d] = l[d];
      l = h;
    } else l = [];
    const c = r(l, n, a, e, t, i);
    c !== void 0 ? e[a] = c : Array.isArray(n) || za(l) && za(n) && (Ks(l) || Ks(n) || wo(l) || wo(n)) ? e[a] = To(l, n, r, i) : l == null && Ks(n) ? e[a] = To({}, n, r, i) : l == null && wo(n) ? e[a] = Ah(n) : (l === void 0 || n !== void 0) && (e[a] = n);
  }
  return e;
}
function L2(e, ...t) {
  return B2(e, ...t, t2);
}
function Mh(e) {
  if (e == null) return !0;
  if (Op(e))
    return typeof e.splice != "function" && typeof e != "string" && !Dn(e) && !wo(e) && !Wa(e) ? !1 : e.length === 0;
  if (typeof e == "object" || typeof e == "function") {
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    const t = Object.keys(e);
    return _2(e) ? t.filter((r) => r !== "constructor").length === 0 : t.length === 0;
  }
  return !0;
}
var F2 = "​", A2 = {
  curveBasis: _a,
  curveBasisClosed: O1,
  curveBasisOpen: I1,
  curveBumpX: Ld,
  curveBumpY: Fd,
  curveBundle: D1,
  curveCardinalClosed: R1,
  curveCardinalOpen: P1,
  curveCardinal: $d,
  curveCatmullRomClosed: N1,
  curveCatmullRomOpen: q1,
  curveCatmullRom: Id,
  curveLinear: vi,
  curveLinearClosed: W1,
  curveMonotoneX: Wd,
  curveMonotoneY: zd,
  curveNatural: Yd,
  curveStep: Ud,
  curveStepAfter: jd,
  curveStepBefore: Gd
}, M2 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, E2 = /* @__PURE__ */ f(function(e, t) {
  const r = Ip(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((n) => n.args);
    Fo(a), i = Et(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let o = hn(e, t);
  const s = "config";
  return i[s] !== void 0 && (o === "flowchart-v2" && (o = "flowchart"), i[o] = i[s], delete i[s]), i;
}, "detectInit"), Ip = /* @__PURE__ */ f(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${M2.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), P.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const o = [];
    for (; (i = Si.exec(e)) !== null; )
      if (i.index === Si.lastIndex && Si.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const s = i[1] ? i[1] : i[2], a = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        o.push({ type: s, args: a });
      }
    return o.length === 0 ? { type: e, args: null } : o.length === 1 ? o[0] : o;
  } catch (r) {
    return P.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), $2 = /* @__PURE__ */ f(function(e) {
  return e.replace(Si, "");
}, "removeDirectives"), O2 = /* @__PURE__ */ f(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function Nn(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return A2[r] ?? t;
}
f(Nn, "interpolateToCurve");
function Dp(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? Jk.sanitizeUrl(r) : r;
}
f(Dp, "formatUrl");
var I2 = /* @__PURE__ */ f((e, ...t) => {
  const r = e.split("."), i = r.length - 1, o = r[i];
  let s = window;
  for (let a = 0; a < i; a++)
    if (s = s[r[a]], !s) {
      P.error(`Function name: ${e} not found in window`);
      return;
    }
  s[o](...t);
}, "runFunc");
function qn(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
f(qn, "distance");
function Rp(e) {
  let t, r = 0;
  e.forEach((o) => {
    r += qn(o, t), t = o;
  });
  const i = r / 2;
  return Wn(e, i);
}
f(Rp, "traverseEdge");
function Pp(e) {
  return e.length === 1 ? e[0] : Rp(e);
}
f(Pp, "calcLabelPosition");
var Eh = /* @__PURE__ */ f((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), Wn = /* @__PURE__ */ f((e, t) => {
  let r, i = t;
  for (const o of e) {
    if (r) {
      const s = qn(o, r);
      if (s === 0)
        return r;
      if (s < i)
        i -= s;
      else {
        const a = i / s;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: o.x, y: o.y };
        if (a > 0 && a < 1)
          return {
            x: Eh((1 - a) * r.x + a * o.x, 5),
            y: Eh((1 - a) * r.y + a * o.y, 5)
          };
      }
    }
    r = o;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), D2 = /* @__PURE__ */ f((e, t, r) => {
  P.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const o = Wn(t, 25), s = e ? 10 : 5, a = Math.atan2(t[0].y - o.y, t[0].x - o.x), n = { x: 0, y: 0 };
  return n.x = Math.sin(a) * s + (t[0].x + o.x) / 2, n.y = -Math.cos(a) * s + (t[0].y + o.y) / 2, n;
}, "calcCardinalityPosition");
function Np(e, t, r) {
  const i = structuredClone(r);
  P.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const o = 25 + e, s = Wn(i, o), a = 10 + e * 0.5, n = Math.atan2(i[0].y - s.y, i[0].x - s.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(n + Math.PI) * a + (i[0].x + s.x) / 2, l.y = -Math.cos(n + Math.PI) * a + (i[0].y + s.y) / 2) : t === "end_right" ? (l.x = Math.sin(n - Math.PI) * a + (i[0].x + s.x) / 2 - 5, l.y = -Math.cos(n - Math.PI) * a + (i[0].y + s.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(n) * a + (i[0].x + s.x) / 2 - 5, l.y = -Math.cos(n) * a + (i[0].y + s.y) / 2 - 5) : (l.x = Math.sin(n) * a + (i[0].x + s.x) / 2, l.y = -Math.cos(n) * a + (i[0].y + s.y) / 2), l;
}
f(Np, "calcTerminalLabelPosition");
function qp(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
f(qp, "getStylesFromArray");
var $h = 0, R2 = /* @__PURE__ */ f(() => ($h++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + $h), "generateId");
function Wp(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let o = 0; o < e; o++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
f(Wp, "makeRandomHex");
var P2 = /* @__PURE__ */ f((e) => Wp(e.length), "random"), N2 = /* @__PURE__ */ f(function() {
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
}, "getTextObj"), q2 = /* @__PURE__ */ f(function(e, t) {
  const r = t.text.replace(zi.lineBreakRegex, " "), [, i] = ys(t.fontSize), o = e.append("text");
  o.attr("x", t.x), o.attr("y", t.y), o.style("text-anchor", t.anchor), o.style("font-family", t.fontFamily), o.style("font-size", i), o.style("font-weight", t.fontWeight), o.attr("fill", t.fill), t.class !== void 0 && o.attr("class", t.class);
  const s = o.append("tspan");
  return s.attr("x", t.x + t.textMargin * 2), s.attr("fill", t.fill), s.text(r), o;
}, "drawSimpleText"), W2 = Gi(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), zi.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), o = [];
    let s = "";
    return i.forEach((a, n) => {
      const l = ze(`${a} `, r), c = ze(s, r);
      if (l > t) {
        const { hyphenatedStrings: p, remainingWord: u } = z2(a, t, "-", r);
        o.push(s, ...p), s = u;
      } else c + l >= t ? (o.push(s), s = a) : s = [s, a].filter(Boolean).join(" ");
      n + 1 === i.length && o.push(s);
    }), o.filter((a) => a !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), z2 = Gi(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const o = [...e], s = [];
    let a = "";
    return o.forEach((n, l) => {
      const c = `${a}${n}`;
      if (ze(c, i) >= t) {
        const d = l + 1, p = o.length === d, u = `${c}${r}`;
        s.push(p ? c : u), a = "";
      } else
        a = c;
    }), { hyphenatedStrings: s, remainingWord: a };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function zp(e, t) {
  return zn(e, t).height;
}
f(zp, "calculateTextHeight");
function ze(e, t) {
  return zn(e, t).width;
}
f(ze, "calculateTextWidth");
var zn = Gi(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: o = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, s] = ys(r), a = ["sans-serif", i], n = e.split(zi.lineBreakRegex), l = [], c = ct("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const p of a) {
      let u = 0;
      const g = { width: 0, height: 0, lineHeight: 0 };
      for (const m of n) {
        const y = N2();
        y.text = m || F2;
        const C = q2(h, y).style("font-size", s).style("font-weight", o).style("font-family", p), b = (C._groups || C)[0][0].getBBox();
        if (b.width === 0 && b.height === 0)
          throw new Error("svg element not in render tree");
        g.width = Math.round(Math.max(g.width, b.width)), u = Math.round(b.height), g.height += u, g.lineHeight = Math.round(Math.max(g.lineHeight, u));
      }
      l.push(g);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), H2 = class {
  constructor(e = !1, t) {
    this.count = 0, this.count = t ? t.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
  static {
    f(this, "InitIDGenerator");
  }
}, so, Y2 = /* @__PURE__ */ f(function(e) {
  return so = so || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), so.innerHTML = e, unescape(so.textContent);
}, "entityDecode");
function Hn(e) {
  return "str" in e;
}
f(Hn, "isDetailedError");
var U2 = /* @__PURE__ */ f((e, t, r, i) => {
  if (!i)
    return;
  const o = e.node()?.getBBox();
  o && e.append("text").text(i).attr("text-anchor", "middle").attr("x", o.x + o.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), ys = /* @__PURE__ */ f((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function Yn(e, t) {
  return L2({}, e, t);
}
f(Yn, "cleanAndMerge");
var me = {
  assignWithDepth: Et,
  wrapLabel: W2,
  calculateTextHeight: zp,
  calculateTextWidth: ze,
  calculateTextDimensions: zn,
  cleanAndMerge: Yn,
  detectInit: E2,
  detectDirective: Ip,
  isSubstringInArray: O2,
  interpolateToCurve: Nn,
  calcLabelPosition: Pp,
  calcCardinalityPosition: D2,
  calcTerminalLabelPosition: Np,
  formatUrl: Dp,
  getStylesFromArray: qp,
  generateId: R2,
  random: P2,
  runFunc: I2,
  entityDecode: Y2,
  insertTitle: U2,
  isLabelCoordinateInPath: Hp,
  parseFontSize: ys,
  InitIDGenerator: H2
}, G2 = /* @__PURE__ */ f(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), xr = /* @__PURE__ */ f(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), BL = /* @__PURE__ */ f((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: o
}, s) => s || `${i ? `${i}_` : ""}${e}_${t}_${r}${o ? `_${o}` : ""}`, "getEdgeId");
function It(e) {
  return e ?? null;
}
f(It, "handleUndefinedAttr");
function Hp(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), o = t.replace(
    /(\d+\.\d+)/g,
    (s) => Math.round(parseFloat(s)).toString()
  );
  return o.includes(r.toString()) || o.includes(i.toString());
}
f(Hp, "isLabelCoordinateInPath");
var Un = /* @__PURE__ */ f(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
async function Yp(e, t) {
  const r = e.getElementsByTagName("img");
  if (!r || r.length === 0)
    return;
  const i = t.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...r].map(
      (o) => new Promise((s) => {
        function a() {
          if (o.style.display = "flex", o.style.flexDirection = "column", i) {
            const n = gt().fontSize ? gt().fontSize : window.getComputedStyle(document.body).fontSize, l = 5, [c = qc.fontSize] = ys(n), h = c * l + "px";
            o.style.minWidth = h, o.style.maxWidth = h;
          } else
            o.style.width = "100%";
          s(o);
        }
        f(a, "setupImage"), setTimeout(() => {
          o.complete && a();
        }), o.addEventListener("error", a), o.addEventListener("load", a);
      })
    )
  );
}
f(Yp, "configureLabelImages");
var j2 = /* @__PURE__ */ f((e) => {
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
}, "solidStateFill"), Zr = /* @__PURE__ */ f((e) => {
  const t = X2([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), X2 = /* @__PURE__ */ f((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, o] = r.split(":");
    t.set(i.trim(), o?.trim());
  }), t;
}, "styles2Map"), Up = /* @__PURE__ */ f((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), V = /* @__PURE__ */ f((e) => {
  const { stylesArray: t } = Zr(e), r = [], i = [], o = [], s = [];
  return t.forEach((a) => {
    const n = a[0];
    Up(n) ? r.push(a.join(":") + " !important") : (i.push(a.join(":") + " !important"), n.includes("stroke") && o.push(a.join(":") + " !important"), n === "fill" && s.push(a.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: o,
    backgroundStyles: s
  };
}, "styles2String"), j = /* @__PURE__ */ f((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = gt(), { nodeBorder: o, mainBkg: s } = r, { stylesMap: a } = Zr(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: a.get("fill") || s,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || o,
      seed: i,
      strokeWidth: a.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: V2(a.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), V2 = /* @__PURE__ */ f((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const o = isNaN(t[0]) ? 0 : t[0];
    return [o, o];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray");
const Z2 = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Vo = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Gp = Object.freeze({
  ...Z2,
  ...Vo
}), K2 = Object.freeze({
  ...Gp,
  body: "",
  hidden: !1
}), Q2 = Object.freeze({
  width: null,
  height: null
}), J2 = Object.freeze({
  ...Q2,
  ...Vo
}), tw = (e, t, r, i = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3) return null;
    i = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length) return null;
  if (o.length > 1) {
    const n = o.pop(), l = o.pop(), c = {
      provider: o.length > 0 ? o[0] : i,
      prefix: l,
      name: n
    };
    return Qs(c) ? c : null;
  }
  const s = o[0], a = s.split("-");
  if (a.length > 1) {
    const n = {
      provider: i,
      prefix: a.shift(),
      name: a.join("-")
    };
    return Qs(n) ? n : null;
  }
  if (r && i === "") {
    const n = {
      provider: i,
      prefix: "",
      name: s
    };
    return Qs(n, r) ? n : null;
  }
  return null;
}, Qs = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function ew(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Oh(e, t) {
  const r = ew(e, t);
  for (const i in K2) i in Vo ? i in e && !(i in r) && (r[i] = Vo[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function rw(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function s(a) {
    if (r[a]) return o[a] = [];
    if (!(a in o)) {
      o[a] = null;
      const n = i[a] && i[a].parent, l = n && s(n);
      l && (o[a] = [n].concat(l));
    }
    return o[a];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(s), o;
}
function Ih(e, t, r) {
  const i = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let s = {};
  function a(n) {
    s = Oh(i[n] || o[n], s);
  }
  return a(t), r.forEach(a), Oh(e, s);
}
function iw(e, t) {
  if (e.icons[t]) return Ih(e, t, []);
  const r = rw(e, [t])[t];
  return r ? Ih(e, t, r) : null;
}
const ow = /(-?[0-9.]*[0-9]+[0-9.]*)/g, sw = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Dh(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split(ow);
  if (i === null || !i.length) return e;
  const o = [];
  let s = i.shift(), a = sw.test(s);
  for (; ; ) {
    if (a) {
      const n = parseFloat(s);
      isNaN(n) ? o.push(s) : o.push(Math.ceil(n * t * r) / r);
    } else o.push(s);
    if (s = i.shift(), s === void 0) return o.join("");
    a = !a;
  }
}
function aw(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const o = e.indexOf(">", i), s = e.indexOf("</" + t);
    if (o === -1 || s === -1) break;
    const a = e.indexOf(">", s);
    if (a === -1) break;
    r += e.slice(o + 1, s).trim(), e = e.slice(0, i).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function nw(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function lw(e, t, r) {
  const i = aw(e);
  return nw(i.defs, t + i.content + r);
}
const hw = (e) => e === "unset" || e === "undefined" || e === "none";
function cw(e, t) {
  const r = {
    ...Gp,
    ...e
  }, i = {
    ...J2,
    ...t
  }, o = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let s = r.body;
  [r, i].forEach((m) => {
    const y = [], C = m.hFlip, b = m.vFlip;
    let k = m.rotate;
    C ? b ? k += 2 : (y.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"), y.push("scale(-1 1)"), o.top = o.left = 0) : b && (y.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"), y.push("scale(1 -1)"), o.top = o.left = 0);
    let T;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        T = o.height / 2 + o.top, y.unshift("rotate(90 " + T.toString() + " " + T.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
        break;
      case 3:
        T = o.width / 2 + o.left, y.unshift("rotate(-90 " + T.toString() + " " + T.toString() + ")");
        break;
    }
    k % 2 === 1 && (o.left !== o.top && (T = o.left, o.left = o.top, o.top = T), o.width !== o.height && (T = o.width, o.width = o.height, o.height = T)), y.length && (s = lw(s, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const a = i.width, n = i.height, l = o.width, c = o.height;
  let h, d;
  a === null ? (d = n === null ? "1em" : n === "auto" ? c : n, h = Dh(d, l / c)) : (h = a === "auto" ? l : a, d = n === null ? Dh(h, c / l) : n === "auto" ? c : n);
  const p = {}, u = (m, y) => {
    hw(y) || (p[m] = y.toString());
  };
  u("width", h), u("height", d);
  const g = [
    o.left,
    o.top,
    l,
    c
  ];
  return p.viewBox = g.join(" "), {
    attributes: p,
    viewBox: g,
    body: s
  };
}
const dw = /\sid="(\S+)"/g, Rh = /* @__PURE__ */ new Map();
function uw(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = Rh.get(e) || 0;
  return Rh.set(e, t + 1), t ? `${e}${t}` : e;
}
function pw(e) {
  const t = [];
  let r;
  for (; r = dw.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((o) => {
    const s = uw(o), a = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + s + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function fw(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function Gn() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var wr = Gn();
function jp(e) {
  wr = e;
}
var Bi = { exec: () => null };
function mt(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (o, s) => {
    let a = typeof s == "string" ? s : s.source;
    return a = a.replace(jt.caret, "$1"), r = r.replace(o, a), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var gw = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), jt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, mw = /^(?:[ \t]*(?:\n|$))+/, yw = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Cw = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ji = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, xw = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, jn = /(?:[*+-]|\d{1,9}[.)])/, Xp = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Vp = mt(Xp).replace(/bull/g, jn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), bw = mt(Xp).replace(/bull/g, jn).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Xn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, kw = /^[^\n]+/, Vn = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, ww = mt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Tw = mt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, jn).getRegex(), Cs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Zn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Sw = mt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Zn).replace("tag", Cs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Zp = mt(Xn).replace("hr", ji).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cs).getRegex(), _w = mt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Zp).getRegex(), Kn = { blockquote: _w, code: yw, def: ww, fences: Cw, heading: xw, hr: ji, html: Sw, lheading: Vp, list: Tw, newline: mw, paragraph: Zp, table: Bi, text: kw }, Ph = mt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ji).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cs).getRegex(), vw = { ...Kn, lheading: bw, table: Ph, paragraph: mt(Xn).replace("hr", ji).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Ph).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Cs).getRegex() }, Bw = { ...Kn, html: mt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Zn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Bi, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: mt(Xn).replace("hr", ji).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Vp).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Lw = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Fw = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Kp = /^( {2,}|\\)\n(?!\s*$)/, Aw = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, xs = /[\p{P}\p{S}]/u, Qn = /[\s\p{P}\p{S}]/u, Qp = /[^\s\p{P}\p{S}]/u, Mw = mt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Qn).getRegex(), Jp = /(?!~)[\p{P}\p{S}]/u, Ew = /(?!~)[\s\p{P}\p{S}]/u, $w = /(?:[^\s\p{P}\p{S}]|~)/u, Ow = mt(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", gw ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), tf = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Iw = mt(tf, "u").replace(/punct/g, xs).getRegex(), Dw = mt(tf, "u").replace(/punct/g, Jp).getRegex(), ef = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Rw = mt(ef, "gu").replace(/notPunctSpace/g, Qp).replace(/punctSpace/g, Qn).replace(/punct/g, xs).getRegex(), Pw = mt(ef, "gu").replace(/notPunctSpace/g, $w).replace(/punctSpace/g, Ew).replace(/punct/g, Jp).getRegex(), Nw = mt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Qp).replace(/punctSpace/g, Qn).replace(/punct/g, xs).getRegex(), qw = mt(/\\(punct)/, "gu").replace(/punct/g, xs).getRegex(), Ww = mt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), zw = mt(Zn).replace("(?:-->|$)", "-->").getRegex(), Hw = mt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", zw).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Zo = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Yw = mt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Zo).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), rf = mt(/^!?\[(label)\]\[(ref)\]/).replace("label", Zo).replace("ref", Vn).getRegex(), of = mt(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vn).getRegex(), Uw = mt("reflink|nolink(?!\\()", "g").replace("reflink", rf).replace("nolink", of).getRegex(), Nh = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Jn = { _backpedal: Bi, anyPunctuation: qw, autolink: Ww, blockSkip: Ow, br: Kp, code: Fw, del: Bi, emStrongLDelim: Iw, emStrongRDelimAst: Rw, emStrongRDelimUnd: Nw, escape: Lw, link: Yw, nolink: of, punctuation: Mw, reflink: rf, reflinkSearch: Uw, tag: Hw, text: Aw, url: Bi }, Gw = { ...Jn, link: mt(/^!?\[(label)\]\((.*?)\)/).replace("label", Zo).getRegex(), reflink: mt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Zo).getRegex() }, Ha = { ...Jn, emStrongRDelimAst: Pw, emStrongLDelim: Dw, url: mt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Nh).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: mt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Nh).getRegex() }, jw = { ...Ha, br: mt(Kp).replace("{2,}", "*").getRegex(), text: mt(Ha.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ao = { normal: Kn, gfm: vw, pedantic: Bw }, hi = { normal: Jn, gfm: Ha, breaks: jw, pedantic: Gw }, Xw = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, qh = (e) => Xw[e];
function Se(e, t) {
  if (t) {
    if (jt.escapeTest.test(e)) return e.replace(jt.escapeReplace, qh);
  } else if (jt.escapeTestNoEncode.test(e)) return e.replace(jt.escapeReplaceNoEncode, qh);
  return e;
}
function Wh(e) {
  try {
    e = encodeURI(e).replace(jt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function zh(e, t) {
  let r = e.replace(jt.findPipe, (s, a, n) => {
    let l = !1, c = a;
    for (; --c >= 0 && n[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(jt.splitPipe), o = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; o < i.length; o++) i[o] = i[o].trim().replace(jt.slashPipe, "|");
  return i;
}
function ci(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let o = 0;
  for (; o < i && e.charAt(i - o - 1) === t; )
    o++;
  return e.slice(0, i - o);
}
function Vw(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function Hh(e, t, r, i, o) {
  let s = t.href, a = t.title || null, n = e[1].replace(o.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: s, title: a, text: n, tokens: i.inlineTokens(n) };
  return i.state.inLink = !1, l;
}
function Zw(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let o = i[1];
  return t.split(`
`).map((s) => {
    let a = s.match(r.other.beginningSpace);
    if (a === null) return s;
    let [n] = a;
    return n.length >= o.length ? s.slice(o.length) : s;
  }).join(`
`);
}
var Ko = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || wr;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : ci(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], o = Zw(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: o };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let o = ci(i, "#");
        (this.options.pedantic || !o || this.rules.other.endingSpaceChar.test(o)) && (i = o.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: ci(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = ci(r[0], `
`).split(`
`), o = "", s = "", a = [];
      for (; i.length > 0; ) {
        let n = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), n = !0;
        else if (!n) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), d = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        o = o ? `${o}
${h}` : h, s = s ? `${s}
${d}` : d;
        let p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = p, i.length === 0) break;
        let u = a.at(-1);
        if (u?.type === "code") break;
        if (u?.type === "blockquote") {
          let g = u, m = g.raw + `
` + i.join(`
`), y = this.blockquote(m);
          a[a.length - 1] = y, o = o.substring(0, o.length - g.raw.length) + y.raw, s = s.substring(0, s.length - g.text.length) + y.text;
          break;
        } else if (u?.type === "list") {
          let g = u, m = g.raw + `
` + i.join(`
`), y = this.list(m);
          a[a.length - 1] = y, o = o.substring(0, o.length - u.raw.length) + y.raw, s = s.substring(0, s.length - g.raw.length) + y.raw, i = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: o, tokens: a, text: s };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), o = i.length > 1, s = { type: "list", raw: "", ordered: o, start: o ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = o ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = o ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), n = !1;
      for (; t; ) {
        let c = !1, h = "", d = "";
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let p = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (b) => " ".repeat(3 * b.length)), u = t.split(`
`, 1)[0], g = !p.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, d = p.trimStart()) : g ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, d = p.slice(m), m += r[1].length), g && this.rules.other.blankLine.test(u) && (h += u + `
`, t = t.substring(u.length + 1), c = !0), !c) {
          let b = this.rules.other.nextBulletRegex(m), k = this.rules.other.hrRegex(m), T = this.rules.other.fencesBeginRegex(m), S = this.rules.other.headingBeginRegex(m), v = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let B = t.split(`
`, 1)[0], I;
            if (u = B, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), I = u) : I = u.replace(this.rules.other.tabCharGlobal, "    "), T.test(u) || S.test(u) || v.test(u) || b.test(u) || k.test(u)) break;
            if (I.search(this.rules.other.nonSpaceChar) >= m || !u.trim()) d += `
` + I.slice(m);
            else {
              if (g || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || T.test(p) || S.test(p) || k.test(p)) break;
              d += `
` + u;
            }
            !g && !u.trim() && (g = !0), h += B + `
`, t = t.substring(B.length + 1), p = I.slice(m);
          }
        }
        s.loose || (n ? s.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (n = !0));
        let y = null, C;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(d), y && (C = y[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), s.items.push({ type: "list_item", raw: h, task: !!y, checked: C, loose: !1, text: d, tokens: [] }), s.raw += h;
      }
      let l = s.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      s.raw = s.raw.trimEnd();
      for (let c = 0; c < s.items.length; c++) if (this.lexer.state.top = !1, s.items[c].tokens = this.lexer.blockTokens(s.items[c].text, []), !s.loose) {
        let h = s.items[c].tokens.filter((p) => p.type === "space"), d = h.length > 0 && h.some((p) => this.rules.other.anyLine.test(p.raw));
        s.loose = d;
      }
      if (s.loose) for (let c = 0; c < s.items.length; c++) s.items[c].loose = !0;
      return s;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), o = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: o, title: s };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = zh(r[1]), o = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), s = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === o.length) {
      for (let n of o) this.rules.other.tableAlignRight.test(n) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(n) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(n) ? a.align.push("left") : a.align.push(null);
      for (let n = 0; n < i.length; n++) a.header.push({ text: i[n], tokens: this.lexer.inline(i[n]), header: !0, align: a.align[n] });
      for (let n of s) a.rows.push(zh(n, a.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[c] })));
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
        let a = ci(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0) return;
      } else {
        let a = Vw(r[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let n = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, n).trim(), r[3] = "";
        }
      }
      let o = r[2], s = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(o);
        a && (o = a[1], s = a[3]);
      } else s = r[3] ? r[3].slice(1, -1) : "";
      return o = o.trim(), this.rules.other.startAngleBracket.test(o) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? o = o.slice(1) : o = o.slice(1, -1)), Hh(r, { href: o && o.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let o = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), s = r[o.toLowerCase()];
      if (!s) {
        let a = i[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Hh(i, s, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let o = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!o || o[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(o[1] || o[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let s = [...o[0]].length - 1, a, n, l = s, c = 0, h = o[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + s); (o = h.exec(r)) != null; ) {
        if (a = o[1] || o[2] || o[3] || o[4] || o[5] || o[6], !a) continue;
        if (n = [...a].length, o[3] || o[4]) {
          l += n;
          continue;
        } else if ((o[5] || o[6]) && s % 3 && !((s + n) % 3)) {
          c += n;
          continue;
        }
        if (l -= n, l > 0) continue;
        n = Math.min(n, n + l + c);
        let d = [...o[0]][0].length, p = t.slice(0, s + o.index + d + n);
        if (Math.min(s, n) % 2) {
          let g = p.slice(1, -1);
          return { type: "em", raw: p, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        let u = p.slice(2, -2);
        return { type: "strong", raw: p, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), o = this.rules.other.nonSpaceChar.test(i), s = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return o && s && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
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
      let i, o;
      return r[2] === "@" ? (i = r[1], o = "mailto:" + i) : (i = r[1], o = i), { type: "link", raw: r[0], text: i, href: o, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, o;
      if (r[2] === "@") i = r[0], o = "mailto:" + i;
      else {
        let s;
        do
          s = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (s !== r[0]);
        i = r[0], r[1] === "www." ? o = "http://" + r[0] : o = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: o, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, pe = class Ya {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || wr, this.options.tokenizer = this.options.tokenizer || new Ko(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: jt, block: ao.normal, inline: hi.normal };
    this.options.pedantic ? (r.block = ao.pedantic, r.inline = hi.pedantic) : this.options.gfm && (r.block = ao.gfm, this.options.breaks ? r.inline = hi.breaks : r.inline = hi.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: ao, inline: hi };
  }
  static lex(t, r) {
    return new Ya(r).lex(t);
  }
  static lexInline(t, r) {
    return new Ya(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(jt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(jt.tabCharGlobal, "    ").replace(jt.spaceLine, "")); t; ) {
      let o;
      if (this.options.extensions?.block?.some((a) => (o = a.call({ lexer: this }, t, r)) ? (t = t.substring(o.raw.length), r.push(o), !0) : !1)) continue;
      if (o = this.tokenizer.space(t)) {
        t = t.substring(o.raw.length);
        let a = r.at(-1);
        o.raw.length === 1 && a !== void 0 ? a.raw += `
` : r.push(o);
        continue;
      }
      if (o = this.tokenizer.code(t)) {
        t = t.substring(o.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + o.raw, a.text += `
` + o.text, this.inlineQueue.at(-1).src = a.text) : r.push(o);
        continue;
      }
      if (o = this.tokenizer.fences(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.heading(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.hr(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.blockquote(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.list(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.html(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.def(t)) {
        t = t.substring(o.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + o.raw, a.text += `
` + o.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = { href: o.href, title: o.title }, r.push(o));
        continue;
      }
      if (o = this.tokenizer.table(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      if (o = this.tokenizer.lheading(t)) {
        t = t.substring(o.raw.length), r.push(o);
        continue;
      }
      let s = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, n = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, n), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
      }
      if (this.state.top && (o = this.tokenizer.paragraph(s))) {
        let a = r.at(-1);
        i && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + o.raw, a.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(o), i = s.length !== t.length, t = t.substring(o.raw.length);
        continue;
      }
      if (o = this.tokenizer.text(t)) {
        t = t.substring(o.raw.length);
        let a = r.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + o.raw, a.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(o);
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
    let i = t, o = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, o.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let s;
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) s = o[2] ? o[2].length : 0, i = i.slice(0, o.index + s) + "[" + "a".repeat(o[0].length - s - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
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
        let h = 1 / 0, d = t.slice(1), p;
        this.options.extensions.startInline.forEach((u) => {
          p = u.call({ lexer: this }, d), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
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
}, Qo = class {
  options;
  parser;
  constructor(t) {
    this.options = t || wr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let o = (r || "").match(jt.notSpaceStart)?.[0], s = t.replace(jt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Se(o) + '">' + (i ? s : Se(s, !0)) + `</code></pre>
` : "<pre><code>" + (i ? s : Se(s, !0)) + `</code></pre>
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
    let r = t.ordered, i = t.start, o = "";
    for (let n = 0; n < t.items.length; n++) {
      let l = t.items[n];
      o += this.listitem(l);
    }
    let s = r ? "ol" : "ul", a = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + s + a + `>
` + o + "</" + s + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + Se(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
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
    for (let s = 0; s < t.header.length; s++) i += this.tablecell(t.header[s]);
    r += this.tablerow({ text: i });
    let o = "";
    for (let s = 0; s < t.rows.length; s++) {
      let a = t.rows[s];
      i = "";
      for (let n = 0; n < a.length; n++) i += this.tablecell(a[n]);
      o += this.tablerow({ text: i });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + o + `</table>
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
    return `<code>${Se(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let o = this.parser.parseInline(i), s = Wh(t);
    if (s === null) return o;
    t = s;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + Se(r) + '"'), a += ">" + o + "</a>", a;
  }
  image({ href: t, title: r, text: i, tokens: o }) {
    o && (i = this.parser.parseInline(o, this.parser.textRenderer));
    let s = Wh(t);
    if (s === null) return Se(i);
    t = s;
    let a = `<img src="${t}" alt="${i}"`;
    return r && (a += ` title="${Se(r)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Se(t.text);
  }
}, tl = class {
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
}, fe = class Ua {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || wr, this.options.renderer = this.options.renderer || new Qo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new tl();
  }
  static parse(t, r) {
    return new Ua(r).parse(t);
  }
  static parseInline(t, r) {
    return new Ua(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if (this.options.extensions?.renderers?.[s.type]) {
        let n = s, l = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(n.type)) {
          i += l || "";
          continue;
        }
      }
      let a = s;
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
          for (; o + 1 < t.length && t[o + 1].type === "text"; ) n = t[++o], l += `
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
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      if (this.options.extensions?.renderers?.[s.type]) {
        let n = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (n !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += n || "";
          continue;
        }
      }
      let a = s;
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
}, bi = class {
  options;
  block;
  constructor(t) {
    this.options = t || wr;
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
    return this.block ? pe.lex : pe.lexInline;
  }
  provideParser() {
    return this.block ? fe.parse : fe.parseInline;
  }
}, Kw = class {
  defaults = Gn();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = fe;
  Renderer = Qo;
  TextRenderer = tl;
  Lexer = pe;
  Tokenizer = Ko;
  Hooks = bi;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let o of t) switch (i = i.concat(r.call(this, o)), o.type) {
      case "table": {
        let s = o;
        for (let a of s.header) i = i.concat(this.walkTokens(a.tokens, r));
        for (let a of s.rows) for (let n of a) i = i.concat(this.walkTokens(n.tokens, r));
        break;
      }
      case "list": {
        let s = o;
        i = i.concat(this.walkTokens(s.items, r));
        break;
      }
      default: {
        let s = o;
        this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((a) => {
          let n = s[a].flat(1 / 0);
          i = i.concat(this.walkTokens(n, r));
        }) : s.tokens && (i = i.concat(this.walkTokens(s.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let o = { ...i };
      if (o.async = this.defaults.async || o.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name) throw new Error("extension name required");
        if ("renderer" in s) {
          let a = r.renderers[s.name];
          a ? r.renderers[s.name] = function(...n) {
            let l = s.renderer.apply(this, n);
            return l === !1 && (l = a.apply(this, n)), l;
          } : r.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = r[s.level];
          a ? a.unshift(s.tokenizer) : r[s.level] = [s.tokenizer], s.start && (s.level === "block" ? r.startBlock ? r.startBlock.push(s.start) : r.startBlock = [s.start] : s.level === "inline" && (r.startInline ? r.startInline.push(s.start) : r.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (r.childTokens[s.name] = s.childTokens);
      }), o.extensions = r), i.renderer) {
        let s = this.defaults.renderer || new Qo(this.defaults);
        for (let a in i.renderer) {
          if (!(a in s)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let n = a, l = i.renderer[n], c = s[n];
          s[n] = (...h) => {
            let d = l.apply(s, h);
            return d === !1 && (d = c.apply(s, h)), d || "";
          };
        }
        o.renderer = s;
      }
      if (i.tokenizer) {
        let s = this.defaults.tokenizer || new Ko(this.defaults);
        for (let a in i.tokenizer) {
          if (!(a in s)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let n = a, l = i.tokenizer[n], c = s[n];
          s[n] = (...h) => {
            let d = l.apply(s, h);
            return d === !1 && (d = c.apply(s, h)), d;
          };
        }
        o.tokenizer = s;
      }
      if (i.hooks) {
        let s = this.defaults.hooks || new bi();
        for (let a in i.hooks) {
          if (!(a in s)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let n = a, l = i.hooks[n], c = s[n];
          bi.passThroughHooks.has(a) ? s[n] = (h) => {
            if (this.defaults.async && bi.passThroughHooksRespectAsync.has(a)) return (async () => {
              let p = await l.call(s, h);
              return c.call(s, p);
            })();
            let d = l.call(s, h);
            return c.call(s, d);
          } : s[n] = (...h) => {
            if (this.defaults.async) return (async () => {
              let p = await l.apply(s, h);
              return p === !1 && (p = await c.apply(s, h)), p;
            })();
            let d = l.apply(s, h);
            return d === !1 && (d = c.apply(s, h)), d;
          };
        }
        o.hooks = s;
      }
      if (i.walkTokens) {
        let s = this.defaults.walkTokens, a = i.walkTokens;
        o.walkTokens = function(n) {
          let l = [];
          return l.push(a.call(this, n)), s && (l = l.concat(s.call(this, n))), l;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return pe.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return fe.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let o = { ...i }, s = { ...this.defaults, ...o }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === !0 && o.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = t), s.async) return (async () => {
        let n = s.hooks ? await s.hooks.preprocess(r) : r, l = await (s.hooks ? await s.hooks.provideLexer() : t ? pe.lex : pe.lexInline)(n, s), c = s.hooks ? await s.hooks.processAllTokens(l) : l;
        s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
        let h = await (s.hooks ? await s.hooks.provideParser() : t ? fe.parse : fe.parseInline)(c, s);
        return s.hooks ? await s.hooks.postprocess(h) : h;
      })().catch(a);
      try {
        s.hooks && (r = s.hooks.preprocess(r));
        let n = (s.hooks ? s.hooks.provideLexer() : t ? pe.lex : pe.lexInline)(r, s);
        s.hooks && (n = s.hooks.processAllTokens(n)), s.walkTokens && this.walkTokens(n, s.walkTokens);
        let l = (s.hooks ? s.hooks.provideParser() : t ? fe.parse : fe.parseInline)(n, s);
        return s.hooks && (l = s.hooks.postprocess(l)), l;
      } catch (n) {
        return a(n);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let o = "<p>An error occurred:</p><pre>" + Se(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(o) : o;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, br = new Kw();
function yt(e, t) {
  return br.parse(e, t);
}
yt.options = yt.setOptions = function(e) {
  return br.setOptions(e), yt.defaults = br.defaults, jp(yt.defaults), yt;
};
yt.getDefaults = Gn;
yt.defaults = wr;
yt.use = function(...e) {
  return br.use(...e), yt.defaults = br.defaults, jp(yt.defaults), yt;
};
yt.walkTokens = function(e, t) {
  return br.walkTokens(e, t);
};
yt.parseInline = br.parseInline;
yt.Parser = fe;
yt.parser = fe.parse;
yt.Renderer = Qo;
yt.TextRenderer = tl;
yt.Lexer = pe;
yt.lexer = pe.lex;
yt.Tokenizer = Ko;
yt.Hooks = bi;
yt.parse = yt;
yt.options;
yt.setOptions;
yt.use;
yt.walkTokens;
yt.parseInline;
fe.parse;
pe.lex;
function sf(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var o = i.reduce(function(n, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? n.concat(c.map(function(h) {
      var d, p;
      return (p = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && p !== void 0 ? p : 0;
    })) : n;
  }, []);
  if (o.length) {
    var s = new RegExp(`
[	 ]{` + Math.min.apply(Math, o) + "}", "g");
    i = i.map(function(n) {
      return n.replace(s, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return t.forEach(function(n, l) {
    var c = a.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = n;
    typeof n == "string" && n.includes(`
`) && (d = String(n).split(`
`).map(function(p, u) {
      return u === 0 ? p : "" + h + p;
    }).join(`
`)), a += d + i[l + 1];
  }), a;
}
var Qw = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, Ga = /* @__PURE__ */ new Map(), af = /* @__PURE__ */ new Map(), Jw = /* @__PURE__ */ f((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (P.debug("Registering icon pack:", t.name), "loader" in t)
      af.set(t.name, t.loader);
    else if ("icons" in t)
      Ga.set(t.name, t.icons);
    else
      throw P.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), nf = /* @__PURE__ */ f(async (e, t) => {
  const r = tw(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let o = Ga.get(i);
  if (!o) {
    const a = af.get(i);
    if (!a)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      o = { ...await a(), prefix: i }, Ga.set(i, o);
    } catch (n) {
      throw P.error(n), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const s = iw(o, r.name);
  if (!s)
    throw new Error(`Icon not found: ${e}`);
  return s;
}, "getRegisteredIconData"), tT = /* @__PURE__ */ f(async (e) => {
  try {
    return await nf(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), Xi = /* @__PURE__ */ f(async (e, t, r) => {
  let i;
  try {
    i = await nf(e, t?.fallbackPrefix);
  } catch (a) {
    P.error(a), i = Qw;
  }
  const o = cw(i, t), s = fw(pw(o.body), {
    ...o.attributes,
    ...r
  });
  return xe(s, wt());
}, "getIconSVG");
function lf(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`);
  return sf(i);
}
f(lf, "preprocessMarkdown");
function hf(e) {
  return e.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) => t.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((r) => ({ content: r, type: "normal" })) ?? []
  );
}
f(hf, "nonMarkdownToLines");
function cf(e, t = {}) {
  const r = lf(e, t), i = yt.lexer(r), o = [[]];
  let s = 0;
  function a(n, l = "normal") {
    n.type === "text" ? n.text.split(`
`).forEach((h, d) => {
      d !== 0 && (s++, o.push([])), h.split(" ").forEach((p) => {
        p = p.replace(/&#39;/g, "'"), p && o[s].push({ content: p, type: l });
      });
    }) : n.type === "strong" || n.type === "em" ? n.tokens.forEach((c) => {
      a(c, n.type);
    }) : n.type === "html" && o[s].push({ content: n.text, type: "normal" });
  }
  return f(a, "processNode"), i.forEach((n) => {
    n.type === "paragraph" ? n.tokens?.forEach((l) => {
      a(l);
    }) : n.type === "html" ? o[s].push({ content: n.text, type: "normal" }) : o[s].push({ content: n.raw, type: "normal" });
  }), o;
}
f(cf, "markdownToLines");
function df(e) {
  return e ? `<p>${/**
  * Replace new lines with <br /> tags.
  *
  * Unlike in markdown text, `\n` sequences are treated as line breaks here.
  */
  e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
f(df, "nonMarkdownToHTML");
function uf(e, { markdownAutoWrap: t } = {}) {
  const r = yt.lexer(e);
  function i(o) {
    return o.type === "text" ? t === !1 ? o.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : o.text.replace(/\n */g, "<br/>") : o.type === "strong" ? `<strong>${o.tokens?.map(i).join("")}</strong>` : o.type === "em" ? `<em>${o.tokens?.map(i).join("")}</em>` : o.type === "paragraph" ? `<p>${o.tokens?.map(i).join("")}</p>` : o.type === "space" ? "" : o.type === "html" ? `${o.text}` : o.type === "escape" ? o.text : (P.warn(`Unsupported markdown: ${o.type}`), o.raw);
  }
  return f(i, "output"), r.map(i).join("");
}
f(uf, "markdownToHTML");
function pf(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
f(pf, "splitTextToChars");
function ff(e, t) {
  const r = pf(t.content);
  return el(e, [], r, t.type);
}
f(ff, "splitWordToFitWidth");
function el(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [o, ...s] = r, a = [...t, o];
  return e([{ content: a.join(""), type: i }]) ? el(e, a, s, i) : (t.length === 0 && o && (t.push(o), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
f(el, "splitWordToFitWidthRecursion");
function gf(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Jo(e, t);
}
f(gf, "splitLineToFitWidth");
function Jo(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let o = "";
  e[0].content === " " && (o = " ", e.shift());
  const s = e.shift() ?? { content: " ", type: "normal" }, a = [...i];
  if (o !== "" && a.push({ content: o, type: "normal" }), a.push(s), t(a))
    return Jo(e, t, r, a);
  if (i.length > 0)
    r.push(i), e.unshift(s);
  else if (s.content) {
    const [n, l] = ff(t, s);
    r.push([n]), l.content && e.unshift(l);
  }
  return Jo(e, t, r);
}
f(Jo, "splitLineToFitWidthRecursion");
function ja(e, t) {
  t && e.attr("style", t);
}
f(ja, "applyStyle");
var Yh = 16384;
async function mf(e, t, r, i, o = !1, s = wt()) {
  const a = e.append("foreignObject");
  a.attr("width", `${Math.min(10 * r, Yh)}px`), a.attr("height", `${Math.min(10 * r, Yh)}px`);
  const n = a.append("xhtml:div"), l = Li(t.label) ? await Zc(t.label.replace(zi.lineBreakRegex, `
`), s) : xe(t.label, s), c = t.isNode ? "nodeLabel" : "edgeLabel", h = n.append("span");
  h.html(l), ja(h, t.labelStyle), h.attr("class", `${c} ${i}`), ja(n, t.labelStyle), n.style("display", "table-cell"), n.style("white-space", "nowrap"), n.style("line-height", "1.5"), r !== Number.POSITIVE_INFINITY && (n.style("max-width", r + "px"), n.style("text-align", "center")), n.attr("xmlns", "http://www.w3.org/1999/xhtml"), o && n.attr("class", "labelBkg");
  let d = n.node().getBoundingClientRect();
  return d.width === r && (n.style("display", "table"), n.style("white-space", "break-spaces"), n.style("width", r + "px"), d = n.node().getBoundingClientRect()), a.node();
}
f(mf, "addHtmlSpan");
function bs(e, t, r, i = !1) {
  const o = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  return i && o.attr("text-anchor", "middle"), o;
}
f(bs, "createTspan");
function yf(e, t, r) {
  const i = e.append("text"), o = bs(i, 1, t);
  ks(o, r);
  const s = o.node().getComputedTextLength();
  return i.remove(), s;
}
f(yf, "computeWidthOfText");
function eT(e, t, r) {
  const i = e.append("text"), o = bs(i, 1, t);
  ks(o, [{ content: r, type: "normal" }]);
  const s = o.node()?.getBoundingClientRect();
  return s && i.remove(), s;
}
f(eT, "computeDimensionOfText");
function Cf(e, t, r, i = !1, o = !1) {
  const a = t.append("g"), n = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = a.append("text").attr("y", "-10.1");
  o && l.attr("text-anchor", "middle");
  let c = 0;
  for (const h of r) {
    const d = /* @__PURE__ */ f((u) => yf(a, 1.1, u) <= e, "checkWidth"), p = d(h) ? [h] : gf(h, d);
    for (const u of p) {
      const g = bs(l, c, 1.1, o);
      ks(g, u), c++;
    }
  }
  if (i) {
    const h = l.node().getBBox(), d = 2;
    return n.attr("x", h.x - d).attr("y", h.y - d).attr("width", h.width + 2 * d).attr("height", h.height + 2 * d), a.node();
  } else
    return l.node();
}
f(Cf, "createFormattedText");
function Xa(e) {
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
f(Xa, "decodeHTMLEntities");
function ks(e, t) {
  e.text(""), t.forEach((r, i) => {
    const o = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? o.text(Xa(r.content)) : o.text(" " + Xa(r.content));
  });
}
f(ks, "updateTextContentAndStyles");
async function xf(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (o, s, a) => (r.push(
    (async () => {
      const n = `${s}:${a}`;
      return await tT(n) ? await Xi(n, void 0, { class: "label-icon" }) : `<i class='${xe(o, t).replace(":", " ")}'></i>`;
    })()
  ), o));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
f(xf, "replaceIconSubstring");
var Ue = /* @__PURE__ */ f(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: o = "",
  useHtmlLabels: s = !0,
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
    o,
    s,
    n,
    "addSvgBackground: ",
    c
  ), s) {
    const d = a ? uf(t, h) : df(t), p = await xf(xr(d), h), u = t.replace(/\\\\/g, "\\"), g = {
      isNode: n,
      label: Li(t) ? u : p,
      labelStyle: r.replace("fill:", "color:")
    };
    return await mf(e, g, l, o, c, h);
  } else {
    const d = xr(t.replace(/<br\s*\/?>/g, "<br/>")), p = a ? cf(d.replace("<br>", "<br/>"), h) : hf(d), u = Cf(
      l,
      e,
      p,
      t ? c : !1,
      !n
    );
    if (n) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ct(u).attr("style", g);
    } else {
      const g = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ct(u).select("rect").attr("style", g.replace(/background:/g, "fill:"));
      const m = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ct(u).select("text").attr("style", m);
    }
    return i ? ct(u).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : ct(u).selectAll("tspan.text-outer-tspan").classed("row", !0), u;
  }
}, "createText");
function Js(e, t, r) {
  if (e && e.length) {
    const [i, o] = t, s = Math.PI / 180 * r, a = Math.cos(s), n = Math.sin(s);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * a - (h - o) * n + i, l[1] = (c - i) * n + (h - o) * a + o;
    }
  }
}
function rT(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function iT(e, t, r, i = 1) {
  const o = r, s = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, n = [0, 0];
  if (o) for (const c of a) Js(c, n, o);
  const l = (function(c, h, d) {
    const p = [];
    for (const b of c) {
      const k = [...b];
      rT(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && p.push(k);
    }
    const u = [];
    h = Math.max(h, 0.1);
    const g = [];
    for (const b of p) for (let k = 0; k < b.length - 1; k++) {
      const T = b[k], S = b[k + 1];
      if (T[1] !== S[1]) {
        const v = Math.min(T[1], S[1]);
        g.push({ ymin: v, ymax: Math.max(T[1], S[1]), x: v === T[1] ? T[0] : S[0], islope: (S[0] - T[0]) / (S[1] - T[1]) });
      }
    }
    if (g.sort(((b, k) => b.ymin < k.ymin ? -1 : b.ymin > k.ymin ? 1 : b.x < k.x ? -1 : b.x > k.x ? 1 : b.ymax === k.ymax ? 0 : (b.ymax - k.ymax) / Math.abs(b.ymax - k.ymax))), !g.length) return u;
    let m = [], y = g[0].ymin, C = 0;
    for (; m.length || g.length; ) {
      if (g.length) {
        let b = -1;
        for (let k = 0; k < g.length && !(g[k].ymin > y); k++) b = k;
        g.splice(0, b + 1).forEach(((k) => {
          m.push({ s: y, edge: k });
        }));
      }
      if (m = m.filter(((b) => !(b.edge.ymax <= y))), m.sort(((b, k) => b.edge.x === k.edge.x ? 0 : (b.edge.x - k.edge.x) / Math.abs(b.edge.x - k.edge.x))), (d !== 1 || C % h == 0) && m.length > 1) for (let b = 0; b < m.length; b += 2) {
        const k = b + 1;
        if (k >= m.length) break;
        const T = m[b].edge, S = m[k].edge;
        u.push([[Math.round(T.x), y], [Math.round(S.x), y]]);
      }
      y += d, m.forEach(((b) => {
        b.edge.x = b.edge.x + d * b.edge.islope;
      })), C++;
    }
    return u;
  })(a, s, i);
  if (o) {
    for (const c of a) Js(c, n, -o);
    (function(c, h, d) {
      const p = [];
      c.forEach(((u) => p.push(...u))), Js(p, h, d);
    })(l, n, -o);
  }
  return l;
}
function Vi(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let o = t.hachureGap;
  o < 0 && (o = 4 * t.strokeWidth), o = Math.round(Math.max(o, 0.1));
  let s = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (s = o), iT(e, o, i, s || 1);
}
class rl {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Vi(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const o of t) i.push(...this.helper.doubleLineOps(o[0][0], o[0][1], o[1][0], o[1][1], r));
    return i;
  }
}
function ws(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class oT extends rl {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const o = Vi(t, Object.assign({}, r, { hachureGap: i })), s = Math.PI / 180 * r.hachureAngle, a = [], n = 0.5 * i * Math.cos(s), l = 0.5 * i * Math.sin(s);
    for (const [c, h] of o) ws([c, h]) && a.push([[c[0] - n, c[1] + l], [...h]], [[c[0] + n, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(a, r) };
  }
}
class sT extends rl {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), o = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), s = this._fillPolygons(t, o);
    return i.ops = i.ops.concat(s.ops), i;
  }
}
class aT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Vi(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let o = r.hachureGap;
    o < 0 && (o = 4 * r.strokeWidth), o = Math.max(o, 0.1);
    let s = r.fillWeight;
    s < 0 && (s = r.strokeWidth / 2);
    const a = o / 4;
    for (const n of t) {
      const l = ws(n), c = l / o, h = Math.ceil(c) - 1, d = l - h * o, p = (n[0][0] + n[1][0]) / 2 - o / 4, u = Math.min(n[0][1], n[1][1]);
      for (let g = 0; g < h; g++) {
        const m = u + d + g * o, y = p - a + 2 * Math.random() * a, C = m - a + 2 * Math.random() * a, b = this.helper.ellipse(y, C, s, s, r);
        i.push(...b.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class nT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Vi(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, o = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, s = [];
    return t.forEach(((a) => {
      const n = ws(a), l = Math.floor(n / (i + o)), c = (n + o - l * (i + o)) / 2;
      let h = a[0], d = a[1];
      h[0] > d[0] && (h = a[1], d = a[0]);
      const p = Math.atan((d[1] - h[1]) / (d[0] - h[0]));
      for (let u = 0; u < l; u++) {
        const g = u * (i + o), m = g + i, y = [h[0] + g * Math.cos(p) + c * Math.cos(p), h[1] + g * Math.sin(p) + c * Math.sin(p)], C = [h[0] + m * Math.cos(p) + c * Math.cos(p), h[1] + m * Math.sin(p) + c * Math.sin(p)];
        s.push(...this.helper.doubleLineOps(y[0], y[1], C[0], C[1], r));
      }
    })), s;
  }
}
class lT {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, o = r.zigzagOffset < 0 ? i : r.zigzagOffset, s = Vi(t, r = Object.assign({}, r, { hachureGap: i + o }));
    return { type: "fillSketch", ops: this.zigzagLines(s, o, r) };
  }
  zigzagLines(t, r, i) {
    const o = [];
    return t.forEach(((s) => {
      const a = ws(s), n = Math.round(a / (2 * r));
      let l = s[0], c = s[1];
      l[0] > c[0] && (l = s[1], c = s[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let d = 0; d < n; d++) {
        const p = 2 * d * r, u = 2 * (d + 1) * r, g = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + p * Math.cos(h), l[1] + p * Math.sin(h)], y = [l[0] + u * Math.cos(h), l[1] + u * Math.sin(h)], C = [m[0] + g * Math.cos(h + Math.PI / 4), m[1] + g * Math.sin(h + Math.PI / 4)];
        o.push(...this.helper.doubleLineOps(m[0], m[1], C[0], C[1], i), ...this.helper.doubleLineOps(C[0], C[1], y[0], y[1], i));
      }
    })), o;
  }
}
const Kt = {};
class hT {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const cT = 0, ta = 1, Uh = 2, no = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function ea(e, t) {
  return e.type === t;
}
function il(e) {
  const t = [], r = (function(a) {
    const n = new Array();
    for (; a !== ""; ) if (a.match(/^([ \t\r\n,]+)/)) a = a.substr(RegExp.$1.length);
    else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n[n.length] = { type: cT, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
    else {
      if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n[n.length] = { type: ta, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
    }
    return n[n.length] = { type: Uh, text: "" }, n;
  })(e);
  let i = "BOD", o = 0, s = r[o];
  for (; !ea(s, Uh); ) {
    let a = 0;
    const n = [];
    if (i === "BOD") {
      if (s.text !== "M" && s.text !== "m") return il("M0,0" + e);
      o++, a = no[s.text], i = s.text;
    } else ea(s, ta) ? a = no[i] : (o++, a = no[s.text], i = s.text);
    if (!(o + a < r.length)) throw new Error("Path data ended short");
    for (let l = o; l < o + a; l++) {
      const c = r[l];
      if (!ea(c, ta)) throw new Error("Param not a number: " + i + "," + c.text);
      n[n.length] = +c.text;
    }
    if (typeof no[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: n };
      t.push(l), o += a, s = r[o], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function bf(e) {
  let t = 0, r = 0, i = 0, o = 0;
  const s = [];
  for (const { key: a, data: n } of e) switch (a) {
    case "M":
      s.push({ key: "M", data: [...n] }), [t, r] = n, [i, o] = n;
      break;
    case "m":
      t += n[0], r += n[1], s.push({ key: "M", data: [t, r] }), i = t, o = r;
      break;
    case "L":
      s.push({ key: "L", data: [...n] }), [t, r] = n;
      break;
    case "l":
      t += n[0], r += n[1], s.push({ key: "L", data: [t, r] });
      break;
    case "C":
      s.push({ key: "C", data: [...n] }), t = n[4], r = n[5];
      break;
    case "c": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      s.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      s.push({ key: "Q", data: [...n] }), t = n[2], r = n[3];
      break;
    case "q": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      s.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      s.push({ key: "A", data: [...n] }), t = n[5], r = n[6];
      break;
    case "a":
      t += n[5], r += n[6], s.push({ key: "A", data: [n[0], n[1], n[2], n[3], n[4], t, r] });
      break;
    case "H":
      s.push({ key: "H", data: [...n] }), t = n[0];
      break;
    case "h":
      t += n[0], s.push({ key: "H", data: [t] });
      break;
    case "V":
      s.push({ key: "V", data: [...n] }), r = n[0];
      break;
    case "v":
      r += n[0], s.push({ key: "V", data: [r] });
      break;
    case "S":
      s.push({ key: "S", data: [...n] }), t = n[2], r = n[3];
      break;
    case "s": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      s.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      s.push({ key: "T", data: [...n] }), t = n[0], r = n[1];
      break;
    case "t":
      t += n[0], r += n[1], s.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      s.push({ key: "Z", data: [] }), t = i, r = o;
  }
  return s;
}
function kf(e) {
  const t = [];
  let r = "", i = 0, o = 0, s = 0, a = 0, n = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, o] = h, [s, a] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], o = h[5], n = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, o] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, o] });
        break;
      case "V":
        o = h[0], t.push({ key: "L", data: [i, o] });
        break;
      case "S": {
        let d = 0, p = 0;
        r === "C" || r === "S" ? (d = i + (i - n), p = o + (o - l)) : (d = i, p = o), t.push({ key: "C", data: [d, p, ...h] }), n = h[0], l = h[1], i = h[2], o = h[3];
        break;
      }
      case "T": {
        const [d, p] = h;
        let u = 0, g = 0;
        r === "Q" || r === "T" ? (u = i + (i - n), g = o + (o - l)) : (u = i, g = o);
        const m = i + 2 * (u - i) / 3, y = o + 2 * (g - o) / 3, C = d + 2 * (u - d) / 3, b = p + 2 * (g - p) / 3;
        t.push({ key: "C", data: [m, y, C, b, d, p] }), n = u, l = g, i = d, o = p;
        break;
      }
      case "Q": {
        const [d, p, u, g] = h, m = i + 2 * (d - i) / 3, y = o + 2 * (p - o) / 3, C = u + 2 * (d - u) / 3, b = g + 2 * (p - g) / 3;
        t.push({ key: "C", data: [m, y, C, b, u, g] }), n = d, l = p, i = u, o = g;
        break;
      }
      case "A": {
        const d = Math.abs(h[0]), p = Math.abs(h[1]), u = h[2], g = h[3], m = h[4], y = h[5], C = h[6];
        d === 0 || p === 0 ? (t.push({ key: "C", data: [i, o, y, C, y, C] }), i = y, o = C) : (i !== y || o !== C) && (wf(i, o, y, C, d, p, u, g, m).forEach((function(b) {
          t.push({ key: "C", data: b });
        })), i = y, o = C);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = s, o = a;
    }
    r = c;
  }
  return t;
}
function di(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function wf(e, t, r, i, o, s, a, n, l, c) {
  const h = (d = a, Math.PI * d / 180);
  var d;
  let p = [], u = 0, g = 0, m = 0, y = 0;
  if (c) [u, g, m, y] = c;
  else {
    [e, t] = di(e, t, -h), [r, i] = di(r, i, -h);
    const W = (e - r) / 2, O = (t - i) / 2;
    let F = W * W / (o * o) + O * O / (s * s);
    F > 1 && (F = Math.sqrt(F), o *= F, s *= F);
    const L = o * o, E = s * s, R = L * E - L * O * O - E * W * W, H = L * O * O + E * W * W, Y = (n === l ? -1 : 1) * Math.sqrt(Math.abs(R / H));
    m = Y * o * O / s + (e + r) / 2, y = Y * -s * W / o + (t + i) / 2, u = Math.asin(parseFloat(((t - y) / s).toFixed(9))), g = Math.asin(parseFloat(((i - y) / s).toFixed(9))), e < m && (u = Math.PI - u), r < m && (g = Math.PI - g), u < 0 && (u = 2 * Math.PI + u), g < 0 && (g = 2 * Math.PI + g), l && u > g && (u -= 2 * Math.PI), !l && g > u && (g -= 2 * Math.PI);
  }
  let C = g - u;
  if (Math.abs(C) > 120 * Math.PI / 180) {
    const W = g, O = r, F = i;
    g = l && g > u ? u + 120 * Math.PI / 180 * 1 : u + 120 * Math.PI / 180 * -1, p = wf(r = m + o * Math.cos(g), i = y + s * Math.sin(g), O, F, o, s, a, 0, l, [g, W, m, y]);
  }
  C = g - u;
  const b = Math.cos(u), k = Math.sin(u), T = Math.cos(g), S = Math.sin(g), v = Math.tan(C / 4), B = 4 / 3 * o * v, I = 4 / 3 * s * v, N = [e, t], D = [e + B * k, t - I * b], $ = [r + B * S, i - I * T], z = [r, i];
  if (D[0] = 2 * N[0] - D[0], D[1] = 2 * N[1] - D[1], c) return [D, $, z].concat(p);
  {
    p = [D, $, z].concat(p);
    const W = [];
    for (let O = 0; O < p.length; O += 3) {
      const F = di(p[O][0], p[O][1], h), L = di(p[O + 1][0], p[O + 1][1], h), E = di(p[O + 2][0], p[O + 2][1], h);
      W.push([F[0], F[1], L[0], L[1], E[0], E[1]]);
    }
    return W;
  }
}
const dT = { randOffset: function(e, t) {
  return st(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return ts(e, t, r);
}, ellipse: function(e, t, r, i, o) {
  const s = Sf(r, i, o);
  return Va(e, t, o, s).opset;
}, doubleLineOps: function(e, t, r, i, o) {
  return er(e, t, r, i, o, !0);
} };
function Tf(e, t, r, i, o) {
  return { type: "path", ops: er(e, t, r, i, o) };
}
function So(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const o = [];
    for (let s = 0; s < i - 1; s++) o.push(...er(e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], r));
    return t && o.push(...er(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: o };
  }
  return i === 2 ? Tf(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function uT(e, t, r, i, o) {
  return (function(s, a) {
    return So(s, !0, a);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], o);
}
function Gh(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = lo(r[0], 1 * (1 + 0.2 * t.roughness), t), o = t.disableMultiStroke ? [] : lo(r[0], 1.5 * (1 + 0.22 * t.roughness), Vh(t));
    for (let s = 1; s < r.length; s++) {
      const a = r[s];
      if (a.length) {
        const n = lo(a, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : lo(a, 1.5 * (1 + 0.22 * t.roughness), Vh(t));
        for (const c of n) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && o.push(c);
      }
    }
    return { type: "path", ops: i.concat(o) };
  }
  return { type: "path", ops: [] };
}
function Sf(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), o = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), s = 2 * Math.PI / o;
  let a = Math.abs(e / 2), n = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return a += st(a * l, r), n += st(n * l, r), { increment: s, rx: a, ry: n };
}
function Va(e, t, r, i) {
  const [o, s] = Zh(i.increment, e, t, i.rx, i.ry, 1, i.increment * ts(0.1, ts(0.4, 1, r), r), r);
  let a = es(o, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [n] = Zh(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = es(n, null, r);
    a = a.concat(l);
  }
  return { estimatedPoints: s, opset: { type: "path", ops: a } };
}
function jh(e, t, r, i, o, s, a, n, l) {
  const c = e, h = t;
  let d = Math.abs(r / 2), p = Math.abs(i / 2);
  d += st(0.01 * d, l), p += st(0.01 * p, l);
  let u = o, g = s;
  for (; u < 0; ) u += 2 * Math.PI, g += 2 * Math.PI;
  g - u > 2 * Math.PI && (u = 0, g = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (g - u) / 2), C = Kh(y, c, h, d, p, u, g, 1, l);
  if (!l.disableMultiStroke) {
    const b = Kh(y, c, h, d, p, u, g, 1.5, l);
    C.push(...b);
  }
  return a && (n ? C.push(...er(c, h, c + d * Math.cos(u), h + p * Math.sin(u), l), ...er(c, h, c + d * Math.cos(g), h + p * Math.sin(g), l)) : C.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + d * Math.cos(u), h + p * Math.sin(u)] })), { type: "path", ops: C };
}
function Xh(e, t) {
  const r = kf(bf(il(e))), i = [];
  let o = [0, 0], s = [0, 0];
  for (const { key: a, data: n } of r) switch (a) {
    case "M":
      s = [n[0], n[1]], o = [n[0], n[1]];
      break;
    case "L":
      i.push(...er(s[0], s[1], n[0], n[1], t)), s = [n[0], n[1]];
      break;
    case "C": {
      const [l, c, h, d, p, u] = n;
      i.push(...pT(l, c, h, d, p, u, s, t)), s = [p, u];
      break;
    }
    case "Z":
      i.push(...er(s[0], s[1], o[0], o[1], t)), s = [o[0], o[1]];
  }
  return { type: "path", ops: i };
}
function ra(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const o = t.maxRandomnessOffset || 0, s = i.length;
    if (s > 2) {
      r.push({ op: "move", data: [i[0][0] + st(o, t), i[0][1] + st(o, t)] });
      for (let a = 1; a < s; a++) r.push({ op: "lineTo", data: [i[a][0] + st(o, t), i[a][1] + st(o, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function Fr(e, t) {
  return (function(r, i) {
    let o = r.fillStyle || "hachure";
    if (!Kt[o]) switch (o) {
      case "zigzag":
        Kt[o] || (Kt[o] = new oT(i));
        break;
      case "cross-hatch":
        Kt[o] || (Kt[o] = new sT(i));
        break;
      case "dots":
        Kt[o] || (Kt[o] = new aT(i));
        break;
      case "dashed":
        Kt[o] || (Kt[o] = new nT(i));
        break;
      case "zigzag-line":
        Kt[o] || (Kt[o] = new lT(i));
        break;
      default:
        o = "hachure", Kt[o] || (Kt[o] = new rl(i));
    }
    return Kt[o];
  })(t, dT).fillPolygons(e, t);
}
function Vh(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function _f(e) {
  return e.randomizer || (e.randomizer = new hT(e.seed || 0)), e.randomizer.next();
}
function ts(e, t, r, i = 1) {
  return r.roughness * i * (_f(r) * (t - e) + e);
}
function st(e, t, r = 1) {
  return ts(-e, e, t, r);
}
function er(e, t, r, i, o, s = !1) {
  const a = s ? o.disableMultiStrokeFill : o.disableMultiStroke, n = Za(e, t, r, i, o, !0, !1);
  if (a) return n;
  const l = Za(e, t, r, i, o, !0, !0);
  return n.concat(l);
}
function Za(e, t, r, i, o, s, a) {
  const n = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(n);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = o.maxRandomnessOffset || 0;
  h * h * 100 > n && (h = l / 10);
  const d = h / 2, p = 0.2 + 0.2 * _f(o);
  let u = o.bowing * o.maxRandomnessOffset * (i - t) / 200, g = o.bowing * o.maxRandomnessOffset * (e - r) / 200;
  u = st(u, o, c), g = st(g, o, c);
  const m = [], y = () => st(d, o, c), C = () => st(h, o, c), b = o.preserveVertices;
  return a ? m.push({ op: "move", data: [e + (b ? 0 : y()), t + (b ? 0 : y())] }) : m.push({ op: "move", data: [e + (b ? 0 : st(h, o, c)), t + (b ? 0 : st(h, o, c))] }), a ? m.push({ op: "bcurveTo", data: [u + e + (r - e) * p + y(), g + t + (i - t) * p + y(), u + e + 2 * (r - e) * p + y(), g + t + 2 * (i - t) * p + y(), r + (b ? 0 : y()), i + (b ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [u + e + (r - e) * p + C(), g + t + (i - t) * p + C(), u + e + 2 * (r - e) * p + C(), g + t + 2 * (i - t) * p + C(), r + (b ? 0 : C()), i + (b ? 0 : C())] }), m;
}
function lo(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + st(t, r), e[0][1] + st(t, r)]), i.push([e[0][0] + st(t, r), e[0][1] + st(t, r)]);
  for (let o = 1; o < e.length; o++) i.push([e[o][0] + st(t, r), e[o][1] + st(t, r)]), o === e.length - 1 && i.push([e[o][0] + st(t, r), e[o][1] + st(t, r)]);
  return es(i, null, r);
}
function es(e, t, r) {
  const i = e.length, o = [];
  if (i > 3) {
    const s = [], a = 1 - r.curveTightness;
    o.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let n = 1; n + 2 < i; n++) {
      const l = e[n];
      s[0] = [l[0], l[1]], s[1] = [l[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, l[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], s[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], s[3] = [e[n + 1][0], e[n + 1][1]], o.push({ op: "bcurveTo", data: [s[1][0], s[1][1], s[2][0], s[2][1], s[3][0], s[3][1]] });
    }
  } else i === 3 ? (o.push({ op: "move", data: [e[1][0], e[1][1]] }), o.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && o.push(...Za(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return o;
}
function Zh(e, t, r, i, o, s, a, n) {
  const l = [], c = [];
  if (n.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + o * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const d = [t + i * Math.cos(h), r + o * Math.sin(h)];
      l.push(d), c.push(d);
    }
    c.push([t + i * Math.cos(0), r + o * Math.sin(0)]), c.push([t + i * Math.cos(e), r + o * Math.sin(e)]);
  } else {
    const h = st(0.5, n) - Math.PI / 2;
    c.push([st(s, n) + t + 0.9 * i * Math.cos(h - e), st(s, n) + r + 0.9 * o * Math.sin(h - e)]);
    const d = 2 * Math.PI + h - 0.01;
    for (let p = h; p < d; p += e) {
      const u = [st(s, n) + t + i * Math.cos(p), st(s, n) + r + o * Math.sin(p)];
      l.push(u), c.push(u);
    }
    c.push([st(s, n) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * a), st(s, n) + r + o * Math.sin(h + 2 * Math.PI + 0.5 * a)]), c.push([st(s, n) + t + 0.98 * i * Math.cos(h + a), st(s, n) + r + 0.98 * o * Math.sin(h + a)]), c.push([st(s, n) + t + 0.9 * i * Math.cos(h + 0.5 * a), st(s, n) + r + 0.9 * o * Math.sin(h + 0.5 * a)]);
  }
  return [c, l];
}
function Kh(e, t, r, i, o, s, a, n, l) {
  const c = s + st(0.1, l), h = [];
  h.push([st(n, l) + t + 0.9 * i * Math.cos(c - e), st(n, l) + r + 0.9 * o * Math.sin(c - e)]);
  for (let d = c; d <= a; d += e) h.push([st(n, l) + t + i * Math.cos(d), st(n, l) + r + o * Math.sin(d)]);
  return h.push([t + i * Math.cos(a), r + o * Math.sin(a)]), h.push([t + i * Math.cos(a), r + o * Math.sin(a)]), es(h, null, l);
}
function pT(e, t, r, i, o, s, a, n) {
  const l = [], c = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const d = n.disableMultiStroke ? 1 : 2, p = n.preserveVertices;
  for (let u = 0; u < d; u++) u === 0 ? l.push({ op: "move", data: [a[0], a[1]] }) : l.push({ op: "move", data: [a[0] + (p ? 0 : st(c[0], n)), a[1] + (p ? 0 : st(c[0], n))] }), h = p ? [o, s] : [o + st(c[u], n), s + st(c[u], n)], l.push({ op: "bcurveTo", data: [e + st(c[u], n), t + st(c[u], n), r + st(c[u], n), i + st(c[u], n), h[0], h[1]] });
  return l;
}
function ui(e) {
  return [...e];
}
function Qh(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(ui(e[0]), ui(e[1]), ui(e[2]), ui(e[2]));
  else {
    const o = [];
    o.push(e[0], e[0]);
    for (let n = 1; n < e.length; n++) o.push(e[n]), n === e.length - 1 && o.push(e[n]);
    const s = [], a = 1 - t;
    i.push(ui(o[0]));
    for (let n = 1; n + 2 < o.length; n++) {
      const l = o[n];
      s[0] = [l[0], l[1]], s[1] = [l[0] + (a * o[n + 1][0] - a * o[n - 1][0]) / 6, l[1] + (a * o[n + 1][1] - a * o[n - 1][1]) / 6], s[2] = [o[n + 1][0] + (a * o[n][0] - a * o[n + 2][0]) / 6, o[n + 1][1] + (a * o[n][1] - a * o[n + 2][1]) / 6], s[3] = [o[n + 1][0], o[n + 1][1]], i.push(s[1], s[2], s[3]);
    }
  }
  return i;
}
function _o(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function fT(e, t, r) {
  const i = _o(t, r);
  if (i === 0) return _o(e, t);
  let o = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return o = Math.max(0, Math.min(1, o)), _o(e, hr(t, r, o));
}
function hr(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function Ka(e, t, r, i) {
  const o = i || [];
  if ((function(n, l) {
    const c = n[l + 0], h = n[l + 1], d = n[l + 2], p = n[l + 3];
    let u = 3 * h[0] - 2 * c[0] - p[0];
    u *= u;
    let g = 3 * h[1] - 2 * c[1] - p[1];
    g *= g;
    let m = 3 * d[0] - 2 * p[0] - c[0];
    m *= m;
    let y = 3 * d[1] - 2 * p[1] - c[1];
    return y *= y, u < m && (u = m), g < y && (g = y), u + g;
  })(e, t) < r) {
    const n = e[t + 0];
    o.length ? (s = o[o.length - 1], a = n, Math.sqrt(_o(s, a)) > 1 && o.push(n)) : o.push(n), o.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], d = e[t + 3], p = hr(l, c, 0.5), u = hr(c, h, 0.5), g = hr(h, d, 0.5), m = hr(p, u, 0.5), y = hr(u, g, 0.5), C = hr(m, y, 0.5);
    Ka([l, p, m, C], 0, r, o), Ka([C, y, g, d], 0, r, o);
  }
  var s, a;
  return o;
}
function gT(e, t) {
  return rs(e, 0, e.length, t);
}
function rs(e, t, r, i, o) {
  const s = o || [], a = e[t], n = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const d = fT(e[h], a, n);
    d > l && (l = d, c = h);
  }
  return Math.sqrt(l) > i ? (rs(e, t, c + 1, i, s), rs(e, c, r, i, s)) : (s.length || s.push(a), s.push(n)), s;
}
function ia(e, t = 0.15, r) {
  const i = [], o = (e.length - 1) / 3;
  for (let s = 0; s < o; s++)
    Ka(e, 3 * s, t, i);
  return r && r > 0 ? rs(i, 0, i.length, r) : i;
}
const ie = "none";
class is {
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
  line(t, r, i, o, s) {
    const a = this._o(s);
    return this._d("line", [Tf(t, r, i, o, a)], a);
  }
  rectangle(t, r, i, o, s) {
    const a = this._o(s), n = [], l = uT(t, r, i, o, a);
    if (a.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + o], [t, r + o]];
      a.fillStyle === "solid" ? n.push(ra([c], a)) : n.push(Fr([c], a));
    }
    return a.stroke !== ie && n.push(l), this._d("rectangle", n, a);
  }
  ellipse(t, r, i, o, s) {
    const a = this._o(s), n = [], l = Sf(i, o, a), c = Va(t, r, a, l);
    if (a.fill) if (a.fillStyle === "solid") {
      const h = Va(t, r, a, l).opset;
      h.type = "fillPath", n.push(h);
    } else n.push(Fr([c.estimatedPoints], a));
    return a.stroke !== ie && n.push(c.opset), this._d("ellipse", n, a);
  }
  circle(t, r, i, o) {
    const s = this.ellipse(t, r, i, i, o);
    return s.shape = "circle", s;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [So(t, !1, i)], i);
  }
  arc(t, r, i, o, s, a, n = !1, l) {
    const c = this._o(l), h = [], d = jh(t, r, i, o, s, a, n, !0, c);
    if (n && c.fill) if (c.fillStyle === "solid") {
      const p = Object.assign({}, c);
      p.disableMultiStroke = !0;
      const u = jh(t, r, i, o, s, a, !0, !1, p);
      u.type = "fillPath", h.push(u);
    } else h.push((function(p, u, g, m, y, C, b) {
      const k = p, T = u;
      let S = Math.abs(g / 2), v = Math.abs(m / 2);
      S += st(0.01 * S, b), v += st(0.01 * v, b);
      let B = y, I = C;
      for (; B < 0; ) B += 2 * Math.PI, I += 2 * Math.PI;
      I - B > 2 * Math.PI && (B = 0, I = 2 * Math.PI);
      const N = (I - B) / b.curveStepCount, D = [];
      for (let $ = B; $ <= I; $ += N) D.push([k + S * Math.cos($), T + v * Math.sin($)]);
      return D.push([k + S * Math.cos(I), T + v * Math.sin(I)]), D.push([k, T]), Fr([D], b);
    })(t, r, i, o, s, a, c));
    return c.stroke !== ie && h.push(d), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), o = [], s = Gh(t, i);
    if (i.fill && i.fill !== ie) if (i.fillStyle === "solid") {
      const a = Gh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
    } else {
      const a = [], n = t;
      if (n.length) {
        const l = typeof n[0][0] == "number" ? [n] : n;
        for (const c of l) c.length < 3 ? a.push(...c) : c.length === 3 ? a.push(...ia(Qh([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : a.push(...ia(Qh(c), 10, (1 + i.roughness) / 2));
      }
      a.length && o.push(Fr([a], i));
    }
    return i.stroke !== ie && o.push(s), this._d("curve", o, i);
  }
  polygon(t, r) {
    const i = this._o(r), o = [], s = So(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? o.push(ra([t], i)) : o.push(Fr([t], i))), i.stroke !== ie && o.push(s), this._d("polygon", o, i);
  }
  path(t, r) {
    const i = this._o(r), o = [];
    if (!t) return this._d("path", o, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const s = i.fill && i.fill !== "transparent" && i.fill !== ie, a = i.stroke !== ie, n = !!(i.simplification && i.simplification < 1), l = (function(h, d, p) {
      const u = kf(bf(il(h))), g = [];
      let m = [], y = [0, 0], C = [];
      const b = () => {
        C.length >= 4 && m.push(...ia(C, d)), C = [];
      }, k = () => {
        b(), m.length && (g.push(m), m = []);
      };
      for (const { key: S, data: v } of u) switch (S) {
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
      if (k(), !p) return g;
      const T = [];
      for (const S of g) {
        const v = gT(S, p);
        v.length && T.push(v);
      }
      return T;
    })(t, 1, n ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = Xh(t, i);
    if (s) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = Xh(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      o.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else o.push(ra(l, i));
    else o.push(Fr(l, i));
    return a && (n ? l.forEach(((h) => {
      o.push(So(h, !1, i));
    })) : o.push(c)), this._d("path", o, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const o of t.ops) {
      const s = typeof r == "number" && r >= 0 ? o.data.map(((a) => +a.toFixed(r))) : o.data;
      switch (o.op) {
        case "move":
          i += `M${s[0]} ${s[1]} `;
          break;
        case "bcurveTo":
          i += `C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;
          break;
        case "lineTo":
          i += `L${s[0]} ${s[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, o = [];
    for (const s of r) {
      let a = null;
      switch (s.type) {
        case "path":
          a = { d: this.opsToPath(s), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: ie };
          break;
        case "fillPath":
          a = { d: this.opsToPath(s), stroke: ie, strokeWidth: 0, fill: i.fill || ie };
          break;
        case "fillSketch":
          a = this.fillSketch(s, i);
      }
      a && o.push(a);
    }
    return o;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || ie, strokeWidth: i, fill: ie };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class mT {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new is(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), o = this.ctx, s = t.options.fixedDecimalPlaceDigits;
    for (const a of r) switch (a.type) {
      case "path":
        o.save(), o.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, o.lineWidth = i.strokeWidth, i.strokeLineDash && o.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (o.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(o, a, s), o.restore();
        break;
      case "fillPath": {
        o.save(), o.fillStyle = i.fill || "";
        const n = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(o, a, s, n), o.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(o, a, i);
    }
  }
  fillSketch(t, r, i) {
    let o = i.fillWeight;
    o < 0 && (o = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = o, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, o = "nonzero") {
    t.beginPath();
    for (const s of r.ops) {
      const a = typeof i == "number" && i >= 0 ? s.data.map(((n) => +n.toFixed(i))) : s.data;
      switch (s.op) {
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
    r.type === "fillPath" ? t.fill(o) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, o, s) {
    const a = this.gen.line(t, r, i, o, s);
    return this.draw(a), a;
  }
  rectangle(t, r, i, o, s) {
    const a = this.gen.rectangle(t, r, i, o, s);
    return this.draw(a), a;
  }
  ellipse(t, r, i, o, s) {
    const a = this.gen.ellipse(t, r, i, o, s);
    return this.draw(a), a;
  }
  circle(t, r, i, o) {
    const s = this.gen.circle(t, r, i, o);
    return this.draw(s), s;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, o, s, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, o, s, a, n, l);
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
const ho = "http://www.w3.org/2000/svg";
class yT {
  constructor(t, r) {
    this.svg = t, this.gen = new is(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), o = this.svg.ownerDocument || window.document, s = o.createElementNS(ho, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const n of r) {
      let l = null;
      switch (n.type) {
        case "path":
          l = o.createElementNS(ho, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = o.createElementNS(ho, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(o, n, i);
      }
      l && s.appendChild(l);
    }
    return s;
  }
  fillSketch(t, r, i) {
    let o = i.fillWeight;
    o < 0 && (o = i.strokeWidth / 2);
    const s = t.createElementNS(ho, "path");
    return s.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), s.setAttribute("stroke", i.fill || ""), s.setAttribute("stroke-width", o + ""), s.setAttribute("fill", "none"), i.fillLineDash && s.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && s.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), s;
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
  line(t, r, i, o, s) {
    const a = this.gen.line(t, r, i, o, s);
    return this.draw(a);
  }
  rectangle(t, r, i, o, s) {
    const a = this.gen.rectangle(t, r, i, o, s);
    return this.draw(a);
  }
  ellipse(t, r, i, o, s) {
    const a = this.gen.ellipse(t, r, i, o, s);
    return this.draw(a);
  }
  circle(t, r, i, o) {
    const s = this.gen.circle(t, r, i, o);
    return this.draw(s);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, o, s, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, o, s, a, n, l);
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
var G = { canvas: (e, t) => new mT(e, t), svg: (e, t) => new yT(e, t), generator: (e) => new is(e), newSeed: () => is.newSeed() }, ot = /* @__PURE__ */ f(async (e, t, r) => {
  let i;
  const o = t.useHtmlLabels || Ye(gt()?.htmlLabels);
  r ? i = r : i = "node default";
  const s = e.insert("g").attr("class", i).attr("id", t.domId || t.id), a = s.insert("g").attr("class", "label").attr("style", It(t.labelStyle));
  let n;
  t.label === void 0 ? n = "" : n = typeof t.label == "string" ? t.label : t.label[0];
  const l = !!t.icon || !!t.img, c = t.labelType === "markdown", h = await Ue(
    a,
    xe(xr(n), gt()),
    {
      useHtmlLabels: o,
      width: t.width || gt().flowchart?.wrappingWidth,
      classes: c ? "markdown-node-label" : "",
      style: t.labelStyle,
      addSvgBackground: l,
      markdown: c
    },
    gt()
  );
  let d = h.getBBox();
  const p = (t?.padding ?? 0) / 2;
  if (o) {
    const u = h.children[0], g = ct(h);
    await Yp(u, n), d = u.getBoundingClientRect(), g.attr("width", d.width), g.attr("height", d.height);
  }
  return o ? a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")") : a.attr("transform", "translate(0, " + -d.height / 2 + ")"), t.centerLabel && a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: s, bbox: d, halfPadding: p, label: a };
}, "labelHelper"), oa = /* @__PURE__ */ f(async (e, t, r) => {
  const i = r.useHtmlLabels ?? Vt(gt()), o = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), s = await Ue(o, xe(xr(t), gt()), {
    useHtmlLabels: i,
    width: r.width || gt()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let a = s.getBBox();
  const n = r.padding / 2;
  if (Vt(gt())) {
    const l = s.children[0], c = ct(s);
    a = l.getBoundingClientRect(), c.attr("width", a.width), c.attr("height", a.height);
  }
  return i ? o.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")") : o.attr("transform", "translate(0, " + -a.height / 2 + ")"), r.centerLabel && o.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")"), o.insert("rect", ":first-child"), { shapeSvg: e, bbox: a, halfPadding: n, label: o };
}, "insertLabel"), Z = /* @__PURE__ */ f((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), tt = /* @__PURE__ */ f((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function pt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
f(pt, "createPathFromPoints");
function rr(e, t, r, i, o, s) {
  const a = [], l = r - e, c = i - t, h = l / s, d = 2 * Math.PI / h, p = t + c / 2;
  for (let u = 0; u <= 50; u++) {
    const g = u / 50, m = e + g * l, y = p + o * Math.sin(d * (m - e));
    a.push({ x: m, y });
  }
  return a;
}
f(rr, "generateFullSineWavePoints");
function Ri(e, t, r, i, o, s) {
  const a = [], n = o * Math.PI / 180, h = (s * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const p = n + d * h, u = e + r * Math.cos(p), g = t + r * Math.sin(p);
    a.push({ x: -u, y: -g });
  }
  return a;
}
f(Ri, "generateCirclePoints");
function Qa(e) {
  const t = Array.from(e.childNodes).filter(
    (l) => l.tagName === "path"
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = t.map((l) => l.getAttribute("d")).filter((l) => l !== null).join(" ");
  r.setAttribute("d", i);
  const o = t.find((l) => l.getAttribute("fill") !== "none"), s = t.find((l) => l.getAttribute("stroke") !== "none"), a = /* @__PURE__ */ f((l, c) => l?.getAttribute(c) ?? void 0, "getAttr");
  if (o) {
    const l = {
      fill: a(o, "fill"),
      "fill-opacity": a(o, "fill-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  if (s) {
    const l = {
      stroke: a(s, "stroke"),
      "stroke-width": a(s, "stroke-width") ?? "1",
      "stroke-opacity": a(s, "stroke-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.appendChild(r), n;
}
f(Qa, "mergePaths");
var CT = /* @__PURE__ */ f((e, t) => {
  var r = e.x, i = e.y, o = t.x - r, s = t.y - i, a = e.width / 2, n = e.height / 2, l, c;
  return Math.abs(s) * a > Math.abs(o) * n ? (s < 0 && (n = -n), l = s === 0 ? 0 : n * o / s, c = n) : (o < 0 && (a = -a), l = a, c = o === 0 ? 0 : a * s / o), { x: r + l, y: i + c };
}, "intersectRect"), Kr = CT, xT = /* @__PURE__ */ f(async (e, t, r, i = !1, o = !1) => {
  let s = t || "";
  typeof s == "object" && (s = s[0]);
  const a = gt(), n = Vt(a);
  return await Ue(
    e,
    s,
    {
      style: r,
      isTitle: i,
      useHtmlLabels: n,
      markdown: !1,
      isNode: o,
      width: Number.POSITIVE_INFINITY
    },
    a
  );
}, "createLabel"), Ve = xT, ir = /* @__PURE__ */ f((e, t, r, i, o) => [
  "M",
  e + o,
  t,
  // Move to the first point
  "H",
  e + r - o,
  // Draw horizontal line to the beginning of the right corner
  "A",
  o,
  o,
  0,
  0,
  1,
  e + r,
  t + o,
  // Draw arc to the right top corner
  "V",
  t + i - o,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  o,
  o,
  0,
  0,
  1,
  e + r - o,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + o,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  o,
  o,
  0,
  0,
  1,
  e,
  t + i - o,
  // Draw arc to the left bottom corner
  "V",
  t + o,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  o,
  o,
  0,
  0,
  1,
  e + o,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), vf = /* @__PURE__ */ f(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: o } = r, { clusterBkg: s, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = V(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), p = Vt(r), u = d.insert("g").attr("class", "cluster-label ");
  let g;
  t.labelType === "markdown" ? g = await Ue(u, t.label, {
    style: t.labelStyle,
    useHtmlLabels: p,
    isNode: !0,
    width: t.width
  }) : g = await Ve(u, t.label, t.labelStyle || "", !1, !0);
  let m = g.getBBox();
  if (Vt(r)) {
    const B = g.children[0], I = ct(g);
    m = B.getBoundingClientRect(), I.attr("width", m.width), I.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const B = G.svg(d), I = j(t, {
      roughness: 0.7,
      fill: s,
      // fill: 'red',
      stroke: a,
      fillWeight: 3,
      seed: o
    }), N = B.path(ir(b, k, y, C, 0), I);
    T = d.insert(() => (P.debug("Rough node insert CXC", N), N), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = d.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: S } = Un(r);
  if (u.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + S})`
  ), n) {
    const B = u.select("span");
    B && B.attr("style", n);
  }
  const v = T.node().getBBox();
  return t.offsetX = 0, t.width = v.width, t.height = v.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
    return Kr(t, B);
  }, { cluster: d, labelBBox: m };
}, "rect"), bT = /* @__PURE__ */ f((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), i = r.insert("rect", ":first-child"), o = 0 * t.padding, s = o / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - s).attr("y", t.y - t.height / 2 - s).attr("width", t.width + o).attr("height", t.height + o).attr("fill", "none");
  const a = i.node().getBBox();
  return t.width = a.width, t.height = a.height, t.intersect = function(n) {
    return Kr(t, n);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), kT = /* @__PURE__ */ f(async (e, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: o } = r, { altBackground: s, compositeBackground: a, compositeTitleBackground: n, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), d = c.insert("g").attr("class", "cluster-label");
  let p = c.append("rect");
  const u = await Ve(d, t.label, t.labelStyle, void 0, !0);
  let g = u.getBBox();
  if (Vt(r)) {
    const N = u.children[0], D = ct(u);
    g = N.getBoundingClientRect(), D.attr("width", g.width), D.attr("height", g.height);
  }
  const m = 0 * t.padding, y = m / 2, C = (t.width <= g.width + t.padding ? g.width + t.padding : t.width) + m;
  t.width <= g.width + t.padding ? t.diff = (C - t.width) / 2 - t.padding : t.diff = -t.padding;
  const b = t.height + m, k = t.height + m - g.height - 6, T = t.x - C / 2, S = t.y - b / 2;
  t.width = C;
  const v = t.y - t.height / 2 - y + g.height + 2;
  let B;
  if (t.look === "handDrawn") {
    const N = t.cssClasses.includes("statediagram-cluster-alt"), D = G.svg(c), $ = t.rx || t.ry ? D.path(ir(T, S, C, b, 10), {
      roughness: 0.7,
      fill: n,
      fillStyle: "solid",
      stroke: l,
      seed: o
    }) : D.rectangle(T, S, C, b, { seed: o });
    B = c.insert(() => $, ":first-child");
    const z = D.rectangle(T, v, C, k, {
      fill: N ? s : a,
      fillStyle: N ? "hachure" : "solid",
      stroke: l,
      seed: o
    });
    B = c.insert(() => $, ":first-child"), p = c.insert(() => z);
  } else
    B = h.insert("rect", ":first-child"), B.attr("class", "outer").attr("x", T).attr("y", S).attr("width", C).attr("height", b).attr("data-look", t.look), p.attr("class", "inner").attr("x", T).attr("y", v).attr("width", C).attr("height", k);
  d.attr(
    "transform",
    `translate(${t.x - g.width / 2}, ${S + 1 - (Vt(r) ? 0 : 3)})`
  );
  const I = B.node().getBBox();
  return t.height = I.height, t.offsetX = 0, t.offsetY = g.height - t.padding / 2, t.labelBBox = g, t.intersect = function(N) {
    return Kr(t, N);
  }, { cluster: c, labelBBox: g };
}, "roundedWithTitle"), wT = /* @__PURE__ */ f(async (e, t) => {
  P.info("Creating subgraph rect for ", t.id, t);
  const r = gt(), { themeVariables: i, handDrawnSeed: o } = r, { clusterBkg: s, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = V(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), p = Vt(r), u = d.insert("g").attr("class", "cluster-label "), g = await Ue(u, t.label, {
    style: t.labelStyle,
    useHtmlLabels: p,
    isNode: !0,
    width: t.width
  });
  let m = g.getBBox();
  if (Vt(r)) {
    const B = g.children[0], I = ct(g);
    m = B.getBoundingClientRect(), I.attr("width", m.width), I.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height, b = t.x - y / 2, k = t.y - C / 2;
  P.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const B = G.svg(d), I = j(t, {
      roughness: 0.7,
      fill: s,
      // fill: 'red',
      stroke: a,
      fillWeight: 4,
      seed: o
    }), N = B.path(ir(b, k, y, C, t.rx), I);
    T = d.insert(() => (P.debug("Rough node insert CXC", N), N), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = d.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", b).attr("y", k).attr("width", y).attr("height", C);
  const { subGraphTitleTopMargin: S } = Un(r);
  if (u.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + S})`
  ), n) {
    const B = u.select("span");
    B && B.attr("style", n);
  }
  const v = T.node().getBBox();
  return t.offsetX = 0, t.width = v.width, t.height = v.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(B) {
    return Kr(t, B);
  }, { cluster: d, labelBBox: m };
}, "kanbanSection"), TT = /* @__PURE__ */ f((e, t) => {
  const r = gt(), { themeVariables: i, handDrawnSeed: o } = r, { nodeBorder: s } = i, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), n = a.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, d = t.x - c / 2, p = t.y - h / 2;
  t.width = c;
  let u;
  if (t.look === "handDrawn") {
    const y = G.svg(a).rectangle(d, p, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: s,
      seed: o
    });
    u = a.insert(() => y, ":first-child");
  } else {
    u = n.insert("rect", ":first-child");
    let m = "outer";
    t.look, m = "divider", u.attr("class", m).attr("x", d).attr("y", p).attr("width", c).attr("height", h).attr("data-look", t.look);
  }
  const g = u.node().getBBox();
  return t.height = g.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Kr(t, m);
  }, { cluster: a, labelBBox: {} };
}, "divider"), ST = vf, _T = {
  rect: vf,
  squareRect: ST,
  roundedWithTitle: kT,
  noteGroup: bT,
  divider: TT,
  kanbanSection: wT
}, Bf = /* @__PURE__ */ new Map(), vT = /* @__PURE__ */ f(async (e, t) => {
  const r = t.shape || "rect", i = await _T[r](e, t);
  return Bf.set(t.id, i), i;
}, "insertCluster"), $L = /* @__PURE__ */ f(() => {
  Bf = /* @__PURE__ */ new Map();
}, "clear");
function Lf(e, t) {
  return e.intersect(t);
}
f(Lf, "intersectNode");
var BT = Lf;
function Ff(e, t, r, i) {
  var o = e.x, s = e.y, a = o - i.x, n = s - i.y, l = Math.sqrt(t * t * n * n + r * r * a * a), c = Math.abs(t * r * a / l);
  i.x < o && (c = -c);
  var h = Math.abs(t * r * n / l);
  return i.y < s && (h = -h), { x: o + c, y: s + h };
}
f(Ff, "intersectEllipse");
var Af = Ff;
function Mf(e, t, r) {
  return Af(e, t, t, r);
}
f(Mf, "intersectCircle");
var LT = Mf;
function Ef(e, t, r, i) {
  {
    const o = t.y - e.y, s = e.x - t.x, a = t.x * e.y - e.x * t.y, n = o * r.x + s * r.y + a, l = o * i.x + s * i.y + a, c = 1e-6;
    if (n !== 0 && l !== 0 && Ja(n, l))
      return;
    const h = i.y - r.y, d = r.x - i.x, p = i.x * r.y - r.x * i.y, u = h * e.x + d * e.y + p, g = h * t.x + d * t.y + p;
    if (Math.abs(u) < c && Math.abs(g) < c && Ja(u, g))
      return;
    const m = o * d - h * s;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let C = s * p - d * a;
    const b = C < 0 ? (C - y) / m : (C + y) / m;
    C = h * a - o * p;
    const k = C < 0 ? (C - y) / m : (C + y) / m;
    return { x: b, y: k };
  }
}
f(Ef, "intersectLine");
function Ja(e, t) {
  return e * t > 0;
}
f(Ja, "sameSign");
var FT = Ef;
function $f(e, t, r) {
  let i = e.x, o = e.y, s = [], a = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    a = Math.min(a, h.x), n = Math.min(n, h.y);
  }) : (a = Math.min(a, t.x), n = Math.min(n, t.y));
  let l = i - e.width / 2 - a, c = o - e.height / 2 - n;
  for (let h = 0; h < t.length; h++) {
    let d = t[h], p = t[h < t.length - 1 ? h + 1 : 0], u = FT(
      e,
      r,
      { x: l + d.x, y: c + d.y },
      { x: l + p.x, y: c + p.y }
    );
    u && s.push(u);
  }
  return s.length ? (s.length > 1 && s.sort(function(h, d) {
    let p = h.x - r.x, u = h.y - r.y, g = Math.sqrt(p * p + u * u), m = d.x - r.x, y = d.y - r.y, C = Math.sqrt(m * m + y * y);
    return g < C ? -1 : g === C ? 0 : 1;
  }), s[0]) : e;
}
f($f, "intersectPolygon");
var AT = $f, U = {
  node: BT,
  circle: LT,
  ellipse: Af,
  polygon: AT,
  rect: Kr
};
function Of(e, t) {
  const { labelStyles: r } = V(t);
  t.labelStyle = r;
  const i = tt(t);
  let o = i;
  i || (o = "anchor");
  const s = e.insert("g").attr("class", o).attr("id", t.domId || t.id), a = 1, { cssStyles: n } = t, l = G.svg(s), c = j(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, a * 2, c), d = s.insert(() => h, ":first-child");
  return d.attr("class", "anchor").attr("style", It(n)), Z(t, d), t.intersect = function(p) {
    return P.info("Circle intersect", t, a, p), U.circle(t, a, p);
  }, s;
}
f(Of, "anchor");
function tn(e, t, r, i, o, s, a) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), d = (r - e) / 2, p = (i - t) / 2, u = d / o, g = p / s, m = Math.sqrt(u ** 2 + g ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), C = l + y * s * Math.sin(h) * (a ? -1 : 1), b = c - y * o * Math.cos(h) * (a ? -1 : 1), k = Math.atan2((t - b) / s, (e - C) / o);
  let S = Math.atan2((i - b) / s, (r - C) / o) - k;
  a && S < 0 && (S += 2 * Math.PI), !a && S > 0 && (S -= 2 * Math.PI);
  const v = [];
  for (let B = 0; B < 20; B++) {
    const I = B / 19, N = k + I * S, D = C + o * Math.cos(N), $ = b + s * Math.sin(N);
    v.push({ x: D, y: $ });
  }
  return v;
}
f(tn, "generateArcPoints");
function If(e, t, r) {
  const [i, o] = [t, r].sort((s, a) => a - s);
  return o * (1 - Math.sqrt(1 - (e / i / 2) ** 2));
}
f(If, "calculateArcSagitta");
async function Df(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o, n = /* @__PURE__ */ f((N) => N + a, "calcTotalHeight"), l = /* @__PURE__ */ f((N) => {
    const D = N / 2;
    return [D / (2.5 + N / 50), D];
  }, "calcEllipseRadius"), { shapeSvg: c, bbox: h } = await ot(e, t, tt(t)), d = n(t?.height ? t?.height : h.height), [p, u] = l(d), g = If(d, p, u), y = (t?.width ? t?.width : h.width) + s * 2 + g - g, C = d, { cssStyles: b } = t, k = [
    { x: y / 2, y: -C / 2 },
    { x: -y / 2, y: -C / 2 },
    ...tn(-y / 2, -C / 2, -y / 2, C / 2, p, u, !1),
    { x: y / 2, y: C / 2 },
    ...tn(y / 2, C / 2, y / 2, -C / 2, p, u, !0)
  ], T = G.svg(c), S = j(t, {});
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const v = pt(k), B = T.path(v, S), I = c.insert(() => B, ":first-child");
  return I.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && I.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(${p / 2}, 0)`), Z(t, I), t.intersect = function(N) {
    return U.polygon(t, k, N);
  }, c;
}
f(Df, "bowTieRect");
function Ge(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(o) {
      return o.x + "," + o.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
f(Ge, "insertPolygonShape");
var co = 12;
async function Rf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 28 : o, a = t.look === "neo" ? 24 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.width ?? l.width) + (t.look === "neo" ? s * 2 : s + co), h = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), d = 0, p = c, u = -h, g = 0, m = [
    { x: d + co, y: u },
    { x: p, y: u },
    { x: p, y: g },
    { x: d, y: g },
    { x: d, y: u + co },
    { x: d + co, y: u }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = G.svg(n), k = j(t, {}), T = pt(m), S = b.path(T, k);
    y = n.insert(() => S, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), C && y.attr("style", C);
  } else
    y = Ge(n, c, h, m);
  return i && y.attr("style", i), Z(t, y), t.intersect = function(b) {
    return U.polygon(t, m, b);
  }, n;
}
f(Rf, "card");
function Pf(e, t) {
  const { nodeStyles: r } = V(t);
  t.label = "";
  const i = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, s = Math.max(28, t.width ?? 0), a = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ], n = G.svg(i), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = pt(a), h = n.path(c, l), d = i.insert(() => h, ":first-child");
  return o && t.look !== "handDrawn" && d.selectAll("path").attr("style", o), r && t.look !== "handDrawn" && d.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(p) {
    return U.polygon(t, a, p);
  }, i;
}
f(Pf, "choice");
async function ol(e, t, r) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.labelStyle = i;
  const { shapeSvg: s, bbox: a, halfPadding: n } = await ot(e, t, tt(t)), l = 16, c = r?.padding ?? n, h = t.look === "neo" ? a.width / 2 + l * 2 : a.width / 2 + c;
  let d;
  const { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(s), g = j(t, {}), m = u.circle(0, 0, h * 2, g);
    d = s.insert(() => m, ":first-child"), d.attr("class", "basic label-container").attr("style", It(p));
  } else
    d = s.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", o).attr("r", h).attr("cx", 0).attr("cy", 0);
  return Z(t, d), t.calcIntersect = function(u, g) {
    const m = u.width / 2;
    return U.circle(u, m, g);
  }, t.intersect = function(u) {
    return P.info("Circle intersect", t, h, u), U.circle(t, h, u);
  }, s;
}
f(ol, "circle");
function Nf(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, o = { x: i / 2 * t, y: i / 2 * r }, s = { x: -(i / 2) * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: -(i / 2) * r }, n = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${s.x},${s.y} L ${n.x},${n.y}
                   M ${o.x},${o.y} L ${a.x},${a.y}`;
}
f(Nf, "createLine");
function qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r, t.label = "";
  const o = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), s = Math.max(30, t?.width ?? 0), { cssStyles: a } = t, n = G.svg(o), l = j(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = n.circle(0, 0, s * 2, l), h = Nf(s), d = n.path(h, l), p = o.insert(() => c, ":first-child");
  return p.insert(() => d), p.attr("class", "outer-path"), a && t.look !== "handDrawn" && p.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && p.selectAll("path").attr("style", i), Z(t, p), t.intersect = function(u) {
    return P.info("crossedCircle intersect", t, { radius: s, point: u }), U.circle(t, s, u);
  }, o;
}
f(qf, "crossedCircle");
function Re(e, t, r, i = 100, o = 0, s = 180) {
  const a = [], n = o * Math.PI / 180, h = (s * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const p = n + d * h, u = e + r * Math.cos(p), g = t + r * Math.sin(p);
    a.push({ x: -u, y: -g });
  }
  return a;
}
f(Re, "generateCirclePoints");
async function Wf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = s.width + n, h = s.height + l, d = Math.max(5, h * 0.1), { cssStyles: p } = t, u = [
    ...Re(c / 2, -h / 2, d, 30, -90, 0),
    { x: -c / 2 - d, y: d },
    ...Re(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Re(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: -h / 2 },
    ...Re(c / 2, h / 2, d, 20, 0, 90)
  ], g = [
    { x: c / 2, y: -h / 2 - d },
    { x: -c / 2, y: -h / 2 - d },
    ...Re(c / 2, -h / 2, d, 20, -90, 0),
    { x: -c / 2 - d, y: -d },
    ...Re(c / 2 + c * 0.1, -d, d, 20, -180, -270),
    ...Re(c / 2 + c * 0.1, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: h / 2 },
    ...Re(c / 2, h / 2, d, 20, 0, 90),
    { x: -c / 2, y: h / 2 + d },
    { x: c / 2, y: h / 2 + d }
  ], m = G.svg(o), y = j(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = pt(u).replace("Z", ""), k = m.path(b, y), T = pt(g), S = m.path(T, { ...y }), v = o.insert("g", ":first-child");
  return v.insert(() => S, ":first-child").attr("stroke-opacity", 0), v.insert(() => k, ":first-child"), v.attr("class", "text"), p && t.look !== "handDrawn" && v.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${d}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + d - (s.x - (s.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return U.polygon(t, g, B);
  }, o;
}
f(Wf, "curlyBraceLeft");
function Pe(e, t, r, i = 100, o = 0, s = 180) {
  const a = [], n = o * Math.PI / 180, h = (s * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const p = n + d * h, u = e + r * Math.cos(p), g = t + r * Math.sin(p);
    a.push({ x: u, y: g });
  }
  return a;
}
f(Pe, "generateCirclePoints");
async function zf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = s.width + (t.look === "neo" ? n * 2 : n), h = s.height + (t.look === "neo" ? l * 2 : l), d = Math.max(5, h * 0.1), { cssStyles: p } = t, u = [
    ...Pe(c / 2, -h / 2, d, 20, -90, 0),
    { x: c / 2 + d, y: -d },
    ...Pe(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Pe(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: c / 2 + d, y: h / 2 },
    ...Pe(c / 2, h / 2, d, 20, 0, 90)
  ], g = [
    { x: -c / 2, y: -h / 2 - d },
    { x: c / 2, y: -h / 2 - d },
    ...Pe(c / 2, -h / 2, d, 20, -90, 0),
    { x: c / 2 + d, y: -d },
    ...Pe(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Pe(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: c / 2 + d, y: h / 2 },
    ...Pe(c / 2, h / 2, d, 20, 0, 90),
    { x: c / 2, y: h / 2 + d },
    { x: -c / 2, y: h / 2 + d }
  ], m = G.svg(o), y = j(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const b = pt(u).replace("Z", ""), k = m.path(b, y), T = pt(g), S = m.path(T, { ...y }), v = o.insert("g", ":first-child");
  return v.insert(() => S, ":first-child").attr("stroke-opacity", 0), v.insert(() => k, ":first-child"), v.attr("class", "text"), p && t.look !== "handDrawn" && v.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${-d}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return U.polygon(t, g, B);
  }, o;
}
f(zf, "curlyBraceRight");
function Rt(e, t, r, i = 100, o = 0, s = 180) {
  const a = [], n = o * Math.PI / 180, h = (s * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const p = n + d * h, u = e + r * Math.cos(p), g = t + r * Math.sin(p);
    a.push({ x: -u, y: -g });
  }
  return a;
}
f(Rt, "generateCirclePoints");
async function Hf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, tt(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = s.width + (t.look === "neo" ? n * 2 : n), h = s.height + (t.look === "neo" ? l * 2 : l), d = Math.max(5, h * 0.1), { cssStyles: p } = t, u = [
    ...Rt(c / 2, -h / 2, d, 30, -90, 0),
    { x: -c / 2 - d, y: d },
    ...Rt(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Rt(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: -h / 2 },
    ...Rt(c / 2, h / 2, d, 20, 0, 90)
  ], g = [
    ...Rt(-c / 2 + d + d / 2, -h / 2, d, 20, -90, -180),
    { x: c / 2 - d / 2, y: d },
    ...Rt(-c / 2 - d / 2, -d, d, 20, 0, 90),
    ...Rt(-c / 2 - d / 2, d, d, 20, -90, 0),
    { x: c / 2 - d / 2, y: -d },
    ...Rt(-c / 2 + d + d / 2, h / 2, d, 30, -180, -270)
  ], m = [
    { x: c / 2, y: -h / 2 - d },
    { x: -c / 2, y: -h / 2 - d },
    ...Rt(c / 2, -h / 2, d, 20, -90, 0),
    { x: -c / 2 - d, y: -d },
    ...Rt(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Rt(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: h / 2 },
    ...Rt(c / 2, h / 2, d, 20, 0, 90),
    { x: -c / 2, y: h / 2 + d },
    { x: c / 2 - d - d / 2, y: h / 2 + d },
    ...Rt(-c / 2 + d + d / 2, -h / 2, d, 20, -90, -180),
    { x: c / 2 - d / 2, y: d },
    ...Rt(-c / 2 - d / 2, -d, d, 20, 0, 90),
    ...Rt(-c / 2 - d / 2, d, d, 20, -90, 0),
    { x: c / 2 - d / 2, y: -d },
    ...Rt(-c / 2 + d + d / 2, h / 2, d, 30, -180, -270)
  ], y = G.svg(o), C = j(t, { fill: "none" });
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = pt(u).replace("Z", ""), T = y.path(k, C), v = pt(g).replace("Z", ""), B = y.path(v, C), I = pt(m), N = y.path(I, { ...C }), D = o.insert("g", ":first-child");
  return D.insert(() => N, ":first-child").attr("stroke-opacity", 0), D.insert(() => T, ":first-child"), D.insert(() => B, ":first-child"), D.attr("class", "text"), p && t.look !== "handDrawn" && D.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), D.attr("transform", `translate(${d - d / 4}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (s.x - (s.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (s.y - (s.top ?? 0))})`
  ), Z(t, D), t.intersect = function($) {
    return U.polygon(t, m, $);
  }, o;
}
f(Hf, "curlyBraces");
async function Yf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o, n = 20, l = 5, { shapeSvg: c, bbox: h } = await ot(e, t, tt(t)), d = Math.max(n, (h.width + s * 2) * 1.25, t?.width ?? 0), p = Math.max(l, h.height + a * 2, t?.height ?? 0), u = p / 2, { cssStyles: g } = t, m = G.svg(c), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = d, b = p, k = C - u, T = b / 4, S = [
    { x: k, y: 0 },
    { x: T, y: 0 },
    { x: 0, y: b / 2 },
    { x: T, y: b },
    { x: k, y: b },
    ...Ri(-k, -b / 2, u, 50, 270, 90)
  ], v = pt(S), B = m.path(v, y), I = c.insert(() => B, ":first-child");
  return I.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && I.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && I.selectChildren("path").attr("style", i), I.attr("transform", `translate(${-d / 2}, ${-p / 2})`), Z(t, I), t.intersect = function(N) {
    return U.polygon(t, S, N);
  }, c;
}
f(Yf, "curvedTrapezoid");
var MT = /* @__PURE__ */ f((e, t, r, i, o, s) => [
  `M${e},${t + s}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `a${o},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), ET = /* @__PURE__ */ f((e, t, r, i, o, s) => [
  `M${e},${t + s}`,
  `M${e + r},${t + s}`,
  `a${o},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), $T = /* @__PURE__ */ f((e, t, r, i, o, s) => [`M${e - r / 2},${-i / 2}`, `a${o},${s} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), Jh = 8, tc = 8;
async function Uf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 24 : o, a = t.look === "neo" ? 24 : o;
  if (t.width || t.height) {
    const y = t.width ?? 0;
    t.width = (t.width ?? 0) - a, t.width < tc && (t.width = tc);
    const b = y / 2 / (2.5 + y / 50);
    t.height = (t.height ?? 0) - s - b * 3, t.height < Jh && (t.height = Jh);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ot(e, t, tt(t)), h = (t.width ? t.width : l.width) + a, d = h / 2, p = d / (2.5 + h / 50), u = (t.height ? t.height : l.height) + s + p;
  let g;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = G.svg(n), C = ET(0, 0, h, u, d, p), b = $T(0, p, h, u, d, p), k = j(t, {}), T = y.path(C, k), S = y.path(b, j(t, { fill: "none" }));
    g = n.insert(() => S, ":first-child"), g = n.insert(() => T, ":first-child"), g.attr("class", "basic label-container"), m && g.attr("style", m);
  } else {
    const y = MT(0, 0, h, u, d, p);
    g = n.insert("path", ":first-child").attr("d", y).attr("class", "basic label-container outer-path").attr("style", It(m)).attr("style", i);
  }
  return g.attr("label-offset-y", p), g.attr("transform", `translate(${-h / 2}, ${-(u / 2 + p)})`), Z(t, g), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + (t.padding ?? 0) / 1.5 - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(y) {
    const C = U.rect(t, y), b = C.x - (t.x ?? 0);
    if (d != 0 && (Math.abs(b) < (t.width ?? 0) / 2 || Math.abs(b) == (t.width ?? 0) / 2 && Math.abs(C.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - p)) {
      let k = p * p * (1 - b * b / (d * d));
      k > 0 && (k = Math.sqrt(k)), k = p - k, y.y - (t.y ?? 0) > 0 && (k = -k), C.y += k;
    }
    return C;
  }, n;
}
f(Uf, "cylinder");
async function Qr(e, t, r) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.labelStyle = i;
  const { shapeSvg: s, bbox: a } = await ot(e, t, tt(t)), n = Math.max(a.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(a.height + r.labelPaddingY * 2, t?.height || 0), c = -n / 2, h = -l / 2;
  let d, { rx: p, ry: u } = t;
  const { cssStyles: g } = t;
  if (r?.rx && r.ry && (p = r.rx, u = r.ry), t.look === "handDrawn") {
    const m = G.svg(s), y = j(t, {}), C = p || u ? m.path(ir(c, h, n, l, p || 0), y) : m.rectangle(c, h, n, l, y);
    d = s.insert(() => C, ":first-child"), d.attr("class", "basic label-container").attr("style", It(g));
  } else
    d = s.insert("rect", ":first-child"), d.attr("class", "basic label-container").attr("style", o).attr("rx", It(p)).attr("ry", It(u)).attr("x", c).attr("y", h).attr("width", n).attr("height", l);
  return Z(t, d), t.calcIntersect = function(m, y) {
    return U.rect(m, y);
  }, t.intersect = function(m) {
    return U.rect(t, m);
  }, s;
}
f(Qr, "drawRect");
async function Gf(e, t) {
  const { cssClasses: r, labelPaddingX: i, labelPaddingY: o, padding: s, width: a, height: n } = t, l = {
    rx: 0,
    ry: 0,
    labelPaddingX: i ?? (s ?? 0) * 2,
    labelPaddingY: o ?? s ?? 0
  }, c = await Qr(e, t, l);
  if (t.look === "handDrawn") {
    const u = G.svg(c), g = j(t, {}), m = c.select(".basic.label-container > path:nth-child(2)"), y = m.node();
    if (!y)
      return c;
    let C = null;
    if (y instanceof SVGGraphicsElement)
      C = y.getBBox();
    else
      return c;
    return c.insert(
      () => u.line(C.x, C.y, C.x + C.width, C.y, g),
      ".basic.label-container g.label"
    ), c.insert(
      () => u.line(
        C.x,
        C.y + C.height,
        C.x + C.width,
        C.y + C.height,
        g
      ),
      ".basic.label-container g.label"
    ), m.remove(), c;
  }
  const h = c.select(".basic.label-container"), d = (Number(h.attr("width")) || a) ?? 0, p = (Number(h.attr("height")) || n) ?? 0;
  return d > 0 && p > 0 && h.attr("stroke-dasharray", `${d} ${p}`), c;
}
f(Gf, "datastore");
async function jf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.look === "neo" ? 16 : t.padding ?? 0, s = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = n.width + o, h = n.height + s, d = h * 0.2, p = -c / 2, u = -h / 2 - d / 2, { cssStyles: g } = t, m = G.svg(a), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: p, y: u + d },
    { x: -p, y: u + d },
    { x: -p, y: -u },
    { x: p, y: -u },
    { x: p, y: u },
    { x: -p, y: u },
    { x: -p, y: u + d }
  ], b = m.polygon(
    C.map((T) => [T.x, T.y]),
    y
  ), k = a.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${p + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${u + d + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), Z(t, k), t.intersect = function(T) {
    return U.rect(t, T);
  }, a;
}
f(jf, "dividedRectangle");
async function Xf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t), o = t.look === "neo" ? 12 : 5;
  t.labelStyle = r;
  const s = t.padding ?? 0, a = t.look === "neo" ? 16 : s, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.width ? t?.width / 2 : l.width / 2) + (a ?? 0), h = c - o;
  let d;
  const { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(n), g = j(t, { roughness: 0.2, strokeWidth: 2.5 }), m = j(t, { roughness: 0.2, strokeWidth: 1.5 }), y = u.circle(0, 0, c * 2, g), C = u.circle(0, 0, h * 2, m);
    d = n.insert("g", ":first-child"), d.attr("class", It(t.cssClasses)).attr("style", It(p)), d.node()?.appendChild(y), d.node()?.appendChild(C);
  } else {
    d = n.insert("g", ":first-child");
    const u = d.insert("circle", ":first-child"), g = d.insert("circle");
    d.attr("class", "basic label-container").attr("style", i), u.attr("class", "outer-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0), g.attr("class", "inner-circle").attr("style", i).attr("r", h).attr("cx", 0).attr("cy", 0);
  }
  return Z(t, d), t.intersect = function(u) {
    return P.info("DoubleCircle intersect", t, c, u), U.circle(t, c, u);
  }, n;
}
f(Xf, "doublecircle");
function Vf(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.label = "", t.labelStyle = i;
  const s = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), a = 7, { cssStyles: n } = t, l = G.svg(s), { nodeBorder: c } = r, h = j(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const d = l.circle(0, 0, a * 2, h), p = s.insert(() => d, ":first-child");
  return p.selectAll("path").attr("style", `fill: ${c} !important;`), n && n.length > 0 && t.look !== "handDrawn" && p.selectAll("path").attr("style", n), o && t.look !== "handDrawn" && p.selectAll("path").attr("style", o), Z(t, p), t.intersect = function(u) {
    return P.info("filledCircle intersect", t, { radius: a, point: u }), U.circle(t, a, u);
  }, s;
}
f(Vf, "filledCircle");
var ec = 10, rc = 10;
async function Zf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? o * 2 : o;
  (t.width || t.height) && (t.height = t?.height ?? 0, t.height < ec && (t.height = ec), t.width = (t?.width ?? 0) - s - s / 2, t.width < rc && (t.width = rc));
  const { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = (t?.width ? t?.width : n.width) + (s ?? 0), h = t?.height ? t?.height : c + n.height, d = h, p = [
    { x: 0, y: -h },
    { x: d, y: -h },
    { x: d / 2, y: 0 }
  ], { cssStyles: u } = t, g = G.svg(a), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = pt(p), C = g.path(y, m), b = a.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`).attr("class", "outer-path");
  return u && t.look !== "handDrawn" && b.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), t.width = c, t.height = h, Z(t, b), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-h / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(k) {
    return P.info("Triangle intersect", t, p, k), U.polygon(t, p, k);
  }, a;
}
f(Zf, "flippedTriangle");
function Kf(e, t, { dir: r, config: { state: i, themeVariables: o } }) {
  const { nodeStyles: s } = V(t);
  t.label = "";
  const a = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, d = -1 * c / 2, p = G.svg(a), u = j(t, {
    stroke: o.lineColor,
    fill: o.lineColor
  });
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const g = p.rectangle(h, d, l, c, u), m = a.insert(() => g, ":first-child");
  n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), s && t.look !== "handDrawn" && m.selectAll("path").attr("style", s), Z(t, m);
  const y = i?.padding ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(C) {
    return U.rect(t, C);
  }, a;
}
f(Kf, "forkJoin");
async function Qf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = 15, s = 10, a = t.look === "neo" ? 16 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.height = (t?.height ?? 0) - n * 2, t.height < s && (t.height = s), t.width = (t?.width ?? 0) - a * 2, t.width < o && (t.width = o));
  const { shapeSvg: l, bbox: c } = await ot(e, t, tt(t)), h = (t?.width ? t?.width : Math.max(o, c.width)) + a * 2, d = (t?.height ? t?.height : Math.max(s, c.height)) + n * 2, p = d / 2, { cssStyles: u } = t, g = G.svg(l), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -h / 2, y: -d / 2 },
    { x: h / 2 - p, y: -d / 2 },
    ...Ri(-h / 2 + p, 0, p, 50, 90, 270),
    { x: h / 2 - p, y: d / 2 },
    { x: -h / 2, y: d / 2 }
  ], C = pt(y), b = g.path(C, m), k = l.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Z(t, k), t.intersect = function(T) {
    return P.info("Pill intersect", t, { radius: p, point: T }), U.polygon(t, y, T);
  }, l;
}
f(Qf, "halfRoundedRectangle");
var OT = /* @__PURE__ */ f((e, t, r, i, o) => [
  `M${e + o},${t}`,
  `L${e + r - o},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - o},${t - i}`,
  `L${e + o},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function Jf(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t), o = t.look === "neo" ? 3.5 : 4;
  t.labelStyle = r;
  const s = t.padding ?? 0, a = 70, n = 32, l = t.look === "neo" ? a : s, c = t.look === "neo" ? n : s;
  if (t.width || t.height) {
    const k = (t.height ?? 0) / o;
    t.width = (t?.width ?? 0) - 2 * k - c, t.height = (t.height ?? 0) - l;
  }
  const { shapeSvg: h, bbox: d } = await ot(e, t, tt(t)), p = (t?.height ? t?.height : d.height) + l, u = p / o, g = (t?.width ? t?.width : d.width) + 2 * u + c, m = [
    { x: u, y: 0 },
    { x: g - u, y: 0 },
    { x: g, y: -p / 2 },
    { x: g - u, y: -p },
    { x: u, y: -p },
    { x: 0, y: -p / 2 }
  ];
  let y;
  const { cssStyles: C } = t;
  if (t.look === "handDrawn") {
    const b = G.svg(h), k = j(t, {}), T = OT(0, 0, g, p, u), S = b.path(T, k);
    y = h.insert(() => S, ":first-child").attr("transform", `translate(${-g / 2}, ${p / 2})`), C && y.attr("style", C);
  } else
    y = Ge(h, g, p, m);
  return i && y.attr("style", i), t.width = g, t.height = p, Z(t, y), t.intersect = function(b) {
    return U.polygon(t, m, b);
  }, h;
}
f(Jf, "hexagon");
async function tg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: o } = await ot(e, t, tt(t)), s = Math.max(30, t?.width ?? 0), a = Math.max(30, t?.height ?? 0), { cssStyles: n } = t, l = G.svg(o), c = j(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: s, y: 0 },
    { x: 0, y: a },
    { x: s, y: a }
  ], d = pt(h), p = l.path(d, c), u = o.insert(() => p, ":first-child");
  return u.attr("class", "basic label-container outer-path"), n && t.look !== "handDrawn" && u.selectChildren("path").attr("style", n), i && t.look !== "handDrawn" && u.selectChildren("path").attr("style", i), u.attr("transform", `translate(${-s / 2}, ${-a / 2})`), Z(t, u), t.intersect = function(g) {
    return P.info("Pill intersect", t, { points: h }), U.polygon(t, h, g);
  }, o;
}
f(tg, "hourglass");
async function eg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: o } = V(t);
  t.labelStyle = o;
  const s = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(s, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: d } = await ot(e, t, "icon-shape default"), p = t.pos === "t", u = n, g = n, { nodeBorder: m } = r, { stylesMap: y } = Zr(t), C = -g / 2, b = -u / 2, k = t.label ? 8 : 0, T = G.svg(c), S = j(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (S.roughness = 0, S.fillStyle = "solid");
  const v = T.rectangle(C, b, g, u, S), B = Math.max(g, h.width), I = u + h.height + k, N = T.rectangle(-B / 2, -I / 2, B, I, {
    ...S,
    fill: "transparent",
    stroke: "none"
  }), D = c.insert(() => v, ":first-child"), $ = c.insert(() => N);
  if (t.icon) {
    const z = c.append("g");
    z.html(
      `<g>${await Xi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const W = z.node().getBBox(), O = W.width, F = W.height, L = W.x, E = W.y;
    z.attr(
      "transform",
      `translate(${-O / 2 - L},${p ? h.height / 2 + k / 2 - F / 2 - E : -h.height / 2 - k / 2 - F / 2 - E})`
    ), z.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -I / 2 : I / 2 - h.height})`
  ), D.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), Z(t, $), t.intersect = function(z) {
    if (P.info("iconSquare intersect", t, z), !t.label)
      return U.rect(t, z);
    const W = t.x ?? 0, O = t.y ?? 0, F = t.height ?? 0;
    let L = [];
    return p ? L = [
      { x: W - h.width / 2, y: O - F / 2 },
      { x: W + h.width / 2, y: O - F / 2 },
      { x: W + h.width / 2, y: O - F / 2 + h.height + k },
      { x: W + g / 2, y: O - F / 2 + h.height + k },
      { x: W + g / 2, y: O + F / 2 },
      { x: W - g / 2, y: O + F / 2 },
      { x: W - g / 2, y: O - F / 2 + h.height + k },
      { x: W - h.width / 2, y: O - F / 2 + h.height + k }
    ] : L = [
      { x: W - g / 2, y: O - F / 2 },
      { x: W + g / 2, y: O - F / 2 },
      { x: W + g / 2, y: O - F / 2 + u },
      { x: W + h.width / 2, y: O - F / 2 + u },
      { x: W + h.width / 2 / 2, y: O + F / 2 },
      { x: W - h.width / 2, y: O + F / 2 },
      { x: W - h.width / 2, y: O - F / 2 + u },
      { x: W - g / 2, y: O - F / 2 + u }
    ], U.polygon(t, L, z);
  }, c;
}
f(eg, "icon");
async function rg(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: o } = V(t);
  t.labelStyle = o;
  const s = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(s, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: d } = await ot(e, t, "icon-shape default"), p = 20, u = t.label ? 8 : 0, g = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: C } = Zr(t), b = G.svg(c), k = j(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const T = C.get("fill");
  k.stroke = T ?? y;
  const S = c.append("g");
  t.icon && S.html(
    `<g>${await Xi(t.icon, {
      height: n,
      width: n,
      fallbackPrefix: ""
    })}</g>`
  );
  const v = S.node().getBBox(), B = v.width, I = v.height, N = v.x, D = v.y, $ = Math.max(B, I) * Math.SQRT2 + p * 2, z = b.circle(0, 0, $, k), W = Math.max($, h.width), O = $ + h.height + u, F = b.rectangle(-W / 2, -O / 2, W, O, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), L = c.insert(() => z, ":first-child"), E = c.insert(() => F);
  return S.attr(
    "transform",
    `translate(${-B / 2 - N},${g ? h.height / 2 + u / 2 - I / 2 - D : -h.height / 2 - u / 2 - I / 2 - D})`
  ), S.attr("style", `color: ${C.get("stroke") ?? m};`), d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${g ? -O / 2 : O / 2 - h.height})`
  ), L.attr(
    "transform",
    `translate(0,${g ? h.height / 2 + u / 2 : -h.height / 2 - u / 2})`
  ), Z(t, E), t.intersect = function(R) {
    return P.info("iconSquare intersect", t, R), U.rect(t, R);
  }, c;
}
f(rg, "iconCircle");
async function ig(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: o } = V(t);
  t.labelStyle = o;
  const s = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(s, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: d, label: p } = await ot(
    e,
    t,
    "icon-shape default"
  ), u = t.pos === "t", g = n + d * 2, m = n + d * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Zr(t), k = -m / 2, T = -g / 2, S = t.label ? 8 : 0, v = G.svg(c), B = j(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  const I = b.get("fill");
  B.stroke = I ?? C;
  const N = v.path(ir(k, T, m, g, 5), B), D = Math.max(m, h.width), $ = g + h.height + S, z = v.rectangle(-D / 2, -$ / 2, D, $, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child").attr("class", "icon-shape2"), O = c.insert(() => z);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await Xi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const L = F.node().getBBox(), E = L.width, R = L.height, H = L.x, Y = L.y;
    F.attr(
      "transform",
      `translate(${-E / 2 - H},${u ? h.height / 2 + S / 2 - R / 2 - Y : -h.height / 2 - S / 2 - R / 2 - Y})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return p.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${u ? -$ / 2 : $ / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${u ? h.height / 2 + S / 2 : -h.height / 2 - S / 2})`
  ), Z(t, O), t.intersect = function(F) {
    if (P.info("iconSquare intersect", t, F), !t.label)
      return U.rect(t, F);
    const L = t.x ?? 0, E = t.y ?? 0, R = t.height ?? 0;
    let H = [];
    return u ? H = [
      { x: L - h.width / 2, y: E - R / 2 },
      { x: L + h.width / 2, y: E - R / 2 },
      { x: L + h.width / 2, y: E - R / 2 + h.height + S },
      { x: L + m / 2, y: E - R / 2 + h.height + S },
      { x: L + m / 2, y: E + R / 2 },
      { x: L - m / 2, y: E + R / 2 },
      { x: L - m / 2, y: E - R / 2 + h.height + S },
      { x: L - h.width / 2, y: E - R / 2 + h.height + S }
    ] : H = [
      { x: L - m / 2, y: E - R / 2 },
      { x: L + m / 2, y: E - R / 2 },
      { x: L + m / 2, y: E - R / 2 + g },
      { x: L + h.width / 2, y: E - R / 2 + g },
      { x: L + h.width / 2 / 2, y: E + R / 2 },
      { x: L - h.width / 2, y: E + R / 2 },
      { x: L - h.width / 2, y: E - R / 2 + g },
      { x: L - m / 2, y: E - R / 2 + g }
    ], U.polygon(t, H, F);
  }, c;
}
f(ig, "iconRounded");
async function og(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: o } = V(t);
  t.labelStyle = o;
  const s = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(s, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: d, label: p } = await ot(
    e,
    t,
    "icon-shape default"
  ), u = t.pos === "t", g = n + d * 2, m = n + d * 2, { nodeBorder: y, mainBkg: C } = r, { stylesMap: b } = Zr(t), k = -m / 2, T = -g / 2, S = t.label ? 8 : 0, v = G.svg(c), B = j(t, {});
  t.look !== "handDrawn" && (B.roughness = 0, B.fillStyle = "solid");
  const I = b.get("fill");
  B.stroke = I ?? C;
  const N = v.path(ir(k, T, m, g, 0.1), B), D = Math.max(m, h.width), $ = g + h.height + S, z = v.rectangle(-D / 2, -$ / 2, D, $, {
    ...B,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child"), O = c.insert(() => z);
  if (t.icon) {
    const F = c.append("g");
    F.html(
      `<g>${await Xi(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const L = F.node().getBBox(), E = L.width, R = L.height, H = L.x, Y = L.y;
    F.attr(
      "transform",
      `translate(${-E / 2 - H},${u ? h.height / 2 + S / 2 - R / 2 - Y : -h.height / 2 - S / 2 - R / 2 - Y})`
    ), F.attr("style", `color: ${b.get("stroke") ?? y};`);
  }
  return p.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${u ? -$ / 2 : $ / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${u ? h.height / 2 + S / 2 : -h.height / 2 - S / 2})`
  ), Z(t, O), t.intersect = function(F) {
    if (P.info("iconSquare intersect", t, F), !t.label)
      return U.rect(t, F);
    const L = t.x ?? 0, E = t.y ?? 0, R = t.height ?? 0;
    let H = [];
    return u ? H = [
      { x: L - h.width / 2, y: E - R / 2 },
      { x: L + h.width / 2, y: E - R / 2 },
      { x: L + h.width / 2, y: E - R / 2 + h.height + S },
      { x: L + m / 2, y: E - R / 2 + h.height + S },
      { x: L + m / 2, y: E + R / 2 },
      { x: L - m / 2, y: E + R / 2 },
      { x: L - m / 2, y: E - R / 2 + h.height + S },
      { x: L - h.width / 2, y: E - R / 2 + h.height + S }
    ] : H = [
      { x: L - m / 2, y: E - R / 2 },
      { x: L + m / 2, y: E - R / 2 },
      { x: L + m / 2, y: E - R / 2 + g },
      { x: L + h.width / 2, y: E - R / 2 + g },
      { x: L + h.width / 2 / 2, y: E + R / 2 },
      { x: L - h.width / 2, y: E + R / 2 },
      { x: L - h.width / 2, y: E - R / 2 + g },
      { x: L - m / 2, y: E - R / 2 + g }
    ], U.polygon(t, H, F);
  }, c;
}
f(og, "iconSquare");
async function sg(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const o = Number(i.naturalWidth.toString().replace("px", "")), s = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = o / s;
  const { labelStyles: a } = V(t);
  t.labelStyle = a;
  const n = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? n ?? 0 : 0,
    t?.assetWidth ?? o
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? s;
  t.width = Math.max(c, n ?? 0);
  const { shapeSvg: d, bbox: p, label: u } = await ot(e, t, "image-shape default"), g = t.pos === "t", m = -c / 2, y = -h / 2, C = t.label ? 8 : 0, b = G.svg(d), k = j(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const T = b.rectangle(m, y, c, h, k), S = Math.max(c, p.width), v = h + p.height + C, B = b.rectangle(-S / 2, -v / 2, S, v, {
    ...k,
    fill: "none",
    stroke: "none"
  }), I = d.insert(() => T, ":first-child"), N = d.insert(() => B);
  if (t.img) {
    const D = d.append("image");
    D.attr("href", t.img), D.attr("width", c), D.attr("height", h), D.attr("preserveAspectRatio", "none"), D.attr(
      "transform",
      `translate(${-c / 2},${g ? v / 2 - h : -v / 2})`
    );
  }
  return u.attr(
    "transform",
    `translate(${-p.width / 2 - (p.x - (p.left ?? 0))},${g ? -h / 2 - p.height / 2 - C / 2 : h / 2 - p.height / 2 + C / 2})`
  ), I.attr(
    "transform",
    `translate(0,${g ? p.height / 2 + C / 2 : -p.height / 2 - C / 2})`
  ), Z(t, N), t.intersect = function(D) {
    if (P.info("iconSquare intersect", t, D), !t.label)
      return U.rect(t, D);
    const $ = t.x ?? 0, z = t.y ?? 0, W = t.height ?? 0;
    let O = [];
    return g ? O = [
      { x: $ - p.width / 2, y: z - W / 2 },
      { x: $ + p.width / 2, y: z - W / 2 },
      { x: $ + p.width / 2, y: z - W / 2 + p.height + C },
      { x: $ + c / 2, y: z - W / 2 + p.height + C },
      { x: $ + c / 2, y: z + W / 2 },
      { x: $ - c / 2, y: z + W / 2 },
      { x: $ - c / 2, y: z - W / 2 + p.height + C },
      { x: $ - p.width / 2, y: z - W / 2 + p.height + C }
    ] : O = [
      { x: $ - c / 2, y: z - W / 2 },
      { x: $ + c / 2, y: z - W / 2 },
      { x: $ + c / 2, y: z - W / 2 + h },
      { x: $ + p.width / 2, y: z - W / 2 + h },
      { x: $ + p.width / 2 / 2, y: z + W / 2 },
      { x: $ - p.width / 2, y: z + W / 2 },
      { x: $ - p.width / 2, y: z - W / 2 + h },
      { x: $ - c / 2, y: z - W / 2 + h }
    ], U.polygon(t, O, D);
  }, d;
}
f(sg, "imageSquare");
async function ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = o, a = t.look === "neo" ? o * 2 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = Math.max(l.width + (a ?? 0) * 2, t?.width ?? 0), h = Math.max(l.height + (s ?? 0) * 2, t?.height ?? 0), d = [
    { x: 0, y: 0 },
    { x: c, y: 0 },
    { x: c + 3 * h / 6, y: -h },
    { x: -3 * h / 6, y: -h }
  ];
  let p;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = pt(d), C = g.path(y, m);
    p = n.insert(() => C, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), u && p.attr("style", u);
  } else
    p = Ge(n, c, h, d);
  return i && p.attr("style", i), t.width = c, t.height = h, Z(t, p), t.intersect = function(g) {
    return U.polygon(t, d, g);
  }, n;
}
f(ag, "inv_trapezoid");
async function ng(e, t) {
  const { shapeSvg: r, bbox: i, label: o } = await ot(e, t, "label"), s = r.insert("rect", ":first-child");
  return s.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), o.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), Z(t, s), t.intersect = function(l) {
    return U.rect(t, l);
  }, r;
}
f(ng, "labelRect");
async function lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = o, a = t.look === "neo" ? o * 2 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.height ?? l.height) + s, h = (t?.width ?? l.width) + a, d = [
    { x: 0, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: -(3 * c) / 6, y: -c }
  ];
  let p;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = pt(d), C = g.path(y, m);
    p = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && p.attr("style", u);
  } else
    p = Ge(n, h, c, d);
  return i && p.attr("style", i), t.width = h, t.height = c, Z(t, p), t.intersect = function(g) {
    return U.polygon(t, d, g);
  }, n;
}
f(lg, "lean_left");
async function hg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = o, a = t.look === "neo" ? o * 2 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.height ?? l.height) + s, h = (t?.width ?? l.width) + a, d = [
    { x: -3 * c / 6, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: 0, y: -c }
  ];
  let p;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = pt(d), C = g.path(y, m);
    p = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && p.attr("style", u);
  } else
    p = Ge(n, h, c, d);
  return i && p.attr("style", i), t.width = h, t.height = c, Z(t, p), t.intersect = function(g) {
    return U.polygon(t, d, g);
  }, n;
}
f(hg, "lean_right");
function cg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.label = "", t.labelStyle = r;
  const o = e.insert("g").attr("class", tt(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, a = Math.max(35, t?.width ?? 0), n = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: a, y: 0 },
    { x: 0, y: n + l / 2 },
    { x: a - 2 * l, y: n + l / 2 },
    { x: 0, y: 2 * n },
    { x: a, y: n - l / 2 },
    { x: 2 * l, y: n - l / 2 }
  ], h = G.svg(o), d = j(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const p = pt(c), u = h.path(p, d), g = o.insert(() => u, ":first-child");
  return g.attr("class", "outer-path"), s && t.look !== "handDrawn" && g.selectAll("path").attr("style", s), i && t.look !== "handDrawn" && g.selectAll("path").attr("style", i), g.attr("transform", `translate(-${a / 2},${-n})`), Z(t, g), t.intersect = function(m) {
    return P.info("lightningBolt intersect", t, m), U.polygon(t, c, m);
  }, o;
}
f(cg, "lightningBolt");
var IT = /* @__PURE__ */ f((e, t, r, i, o, s, a) => [
  `M${e},${t + s}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `a${o},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + s + a}`,
  `a${o},${s} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), DT = /* @__PURE__ */ f((e, t, r, i, o, s, a) => [
  `M${e},${t + s}`,
  `M${e + r},${t + s}`,
  `a${o},${s} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${o},${s} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + s + a}`,
  `a${o},${s} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), RT = /* @__PURE__ */ f((e, t, r, i, o, s) => [`M${e - r / 2},${-i / 2}`, `a${o},${s} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), ic = 10, oc = 10;
async function dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 24 : o;
  if (t.width || t.height) {
    const C = t.width ?? 0;
    t.width = (t.width ?? 0) - s, t.width < oc && (t.width = oc);
    const k = C / 2 / (2.5 + C / 50);
    t.height = (t.height ?? 0) - a - k * 3, t.height < ic && (t.height = ic);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ot(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + s * 2, d = h / 2, p = d / (2.5 + h / 50), u = (t?.height ? t?.height : l.height) + p + a * 2, g = u * 0.1;
  let m;
  const { cssStyles: y } = t;
  if (t.look === "handDrawn") {
    const C = G.svg(n), b = DT(0, 0, h, u, d, p, g), k = RT(0, p, h, u, d, p), T = j(t, {}), S = C.path(b, T), v = C.path(k, T);
    n.insert(() => v, ":first-child").attr("class", "line"), m = n.insert(() => S, ":first-child"), m.attr("class", "basic label-container"), y && m.attr("style", y);
  } else {
    const C = IT(0, 0, h, u, d, p, g);
    m = n.insert("path", ":first-child").attr("d", C).attr("class", "basic label-container outer-path").attr("style", It(y)).attr("style", i);
  }
  return m.attr("label-offset-y", p), m.attr("transform", `translate(${-h / 2}, ${-(u / 2 + p)})`), Z(t, m), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + p - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(C) {
    const b = U.rect(t, C), k = b.x - (t.x ?? 0);
    if (d != 0 && (Math.abs(k) < (t.width ?? 0) / 2 || Math.abs(k) == (t.width ?? 0) / 2 && Math.abs(b.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - p)) {
      let T = p * p * (1 - k * k / (d * d));
      T > 0 && (T = Math.sqrt(T)), T = p - T, C.y - (t.y ?? 0) > 0 && (T = -T), b.y += T;
    }
    return b;
  }, n;
}
f(dg, "linedCylinder");
async function ug(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o;
  if (t.width || t.height) {
    const T = t.width;
    t.width = (T ?? 0) * 10 / 11 - s * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10);
  }
  const { shapeSvg: n, bbox: l, label: c } = await ot(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + (s ?? 0) * 2, d = (t?.height ? t?.height : l.height) + (a ?? 0) * 2, p = t.look === "neo" ? d / 4 : d / 8, u = d + p, { cssStyles: g } = t, m = G.svg(n), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = [
    { x: -h / 2 - h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: u / 2 },
    ...rr(
      -h / 2 - h / 2 * 0.1,
      u / 2,
      h / 2 + h / 2 * 0.1,
      u / 2,
      p,
      0.8
    ),
    { x: h / 2 + h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2, y: -u / 2 },
    { x: -h / 2, y: u / 2 * 1.1 },
    { x: -h / 2, y: -u / 2 }
  ], b = m.polygon(
    C.map((T) => [T.x, T.y]),
    y
  ), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), g && t.look !== "handDrawn" && k.selectAll("path").attr("style", g), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), k.attr("transform", `translate(0,${-p / 2})`), c.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) + h / 2 * 0.1 / 2 - (l.x - (l.left ?? 0))},${-d / 2 + (t.padding ?? 0) - p / 2 - (l.y - (l.top ?? 0))})`
  ), Z(t, k), t.intersect = function(T) {
    return U.polygon(t, C, T);
  }, n;
}
f(ug, "linedWaveEdgedRect");
async function pg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o, n = t.look === "neo" ? 10 : 5;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - s * 2 - 2 * n, 10), t.height = Math.max((t?.height ?? 0) - a * 2 - 2 * n, 10));
  const { shapeSvg: l, bbox: c, label: h } = await ot(e, t, tt(t)), d = (t?.width ? t?.width : c.width) + s * 2 + 2 * n, p = (t?.height ? t?.height : c.height) + a * 2 + 2 * n, u = d - 2 * n, g = p - 2 * n, m = -u / 2, y = -g / 2, { cssStyles: C } = t, b = G.svg(l), k = j(t, {}), T = [
    { x: m - n, y: y + n },
    { x: m - n, y: y + g + n },
    { x: m + u - n, y: y + g + n },
    { x: m + u - n, y: y + g },
    { x: m + u, y: y + g },
    { x: m + u, y: y + g - n },
    { x: m + u + n, y: y + g - n },
    { x: m + u + n, y: y - n },
    { x: m + n, y: y - n },
    { x: m + n, y },
    { x: m, y },
    { x: m, y: y + n }
  ], S = [
    { x: m, y: y + n },
    { x: m + u - n, y: y + n },
    { x: m + u - n, y: y + g },
    { x: m + u, y: y + g },
    { x: m + u, y },
    { x: m, y }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const v = pt(T);
  let B = b.path(v, k);
  const I = pt(S);
  let N = b.path(I, k);
  t.look !== "handDrawn" && (B = Qa(B), N = Qa(N));
  const D = l.insert("g", ":first-child");
  return D.insert(() => B), D.insert(() => N), D.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && D.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), h.attr(
    "transform",
    `translate(${-(c.width / 2) - n - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + n - (c.y - (c.top ?? 0))})`
  ), Z(t, D), t.intersect = function($) {
    return U.polygon(t, T, $);
  }, l;
}
f(pg, "multiRect");
async function fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, tt(t)), n = t.padding ?? 0, l = t.look === "neo" ? 16 : n, c = t.look === "neo" ? 12 : n;
  let h = !0;
  (t.width || t.height) && (h = !1, t.width = (t?.width ?? 0) - l * 2, t.height = (t?.height ?? 0) - c * 3);
  const d = Math.max(s.width, t?.width ?? 0) + l * 2, p = Math.max(s.height, t?.height ?? 0) + c * 3, u = t.look === "neo" ? p / 4 : p / 8, g = p + (h ? u / 2 : -u / 2), m = -d / 2, y = -g / 2, C = 10, { cssStyles: b } = t, k = rr(
    m - C,
    y + g + C,
    m + d - C,
    y + g + C,
    u,
    0.8
  ), T = k?.[k.length - 1], S = [
    { x: m - C, y: y + C },
    { x: m - C, y: y + g + C },
    ...k,
    { x: m + d - C, y: T.y - C },
    { x: m + d, y: T.y - C },
    { x: m + d, y: T.y - 2 * C },
    { x: m + d + C, y: T.y - 2 * C },
    { x: m + d + C, y: y - C },
    { x: m + C, y: y - C },
    { x: m + C, y },
    { x: m, y },
    { x: m, y: y + C }
  ], v = [
    { x: m, y: y + C },
    { x: m + d - C, y: y + C },
    { x: m + d - C, y: T.y - C },
    { x: m + d, y: T.y - C },
    { x: m + d, y },
    { x: m, y }
  ], B = G.svg(o), I = j(t, {});
  t.look !== "handDrawn" && (I.roughness = 0, I.fillStyle = "solid");
  const N = pt(S), D = B.path(N, I), $ = pt(v), z = B.path($, I), W = o.insert(() => D, ":first-child");
  return W.insert(() => z), W.attr("class", "basic label-container outer-path"), b && t.look !== "handDrawn" && W.selectAll("path").attr("style", b), i && t.look !== "handDrawn" && W.selectAll("path").attr("style", i), W.attr("transform", `translate(0,${-u / 2})`), a.attr(
    "transform",
    `translate(${-(s.width / 2) - C - (s.x - (s.left ?? 0))}, ${-(s.height / 2) + C - u / 2 - (s.y - (s.top ?? 0))})`
  ), Z(t, W), t.intersect = function(O) {
    return U.polygon(t, S, O);
  }, o;
}
f(fg, "multiWaveEdgedRectangle");
async function gg(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.labelStyle = i, t.useHtmlLabels || Vt(wt()) || (t.centerLabel = !0);
  const { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), d = -c / 2, p = -h / 2, { cssStyles: u } = t, g = G.svg(a), m = j(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = g.rectangle(d, p, c, h, m), C = a.insert(() => y, ":first-child");
  return C.attr("class", "basic label-container outer-path"), l.attr("class", "label noteLabel"), u && t.look !== "handDrawn" && C.selectAll("path").attr("style", u), o && t.look !== "handDrawn" && C.selectAll("path").attr("style", o), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, C), t.intersect = function(b) {
    return U.rect(t, b);
  }, a;
}
f(gg, "note");
var PT = /* @__PURE__ */ f((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s } = await ot(e, t, tt(t)), a = s.width + (t.padding ?? 0), n = s.height + (t.padding ?? 0), l = a + n, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let d;
  const { cssStyles: p } = t;
  if (t.look === "handDrawn") {
    const u = G.svg(o), g = j(t, {}), m = PT(0, 0, l), y = u.path(m, g);
    d = o.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), p && d.attr("style", p);
  } else
    d = Ge(o, l, l, h), d.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && d.attr("style", i), Z(t, d), t.calcIntersect = function(u, g) {
    const m = u.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], C = U.polygon(u, y, g);
    return { x: C.x - 0.5, y: C.y - 0.5 };
  }, t.intersect = function(u) {
    return this.calcIntersect(t, u);
  }, o;
}
f(mg, "question");
async function yg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 21 : o ?? 0, a = t.look === "neo" ? 12 : o ?? 0, { shapeSvg: n, bbox: l, label: c } = await ot(e, t, tt(t)), h = (t?.width ?? l.width) + (t.look === "neo" ? s * 2 : s), d = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), p = -h / 2, u = -d / 2, g = u / 2, m = [
    { x: p + g, y: u },
    { x: p, y: 0 },
    { x: p + g, y: -u },
    { x: -p, y: -u },
    { x: -p, y: u }
  ], { cssStyles: y } = t, C = G.svg(n), b = j(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = pt(m), T = C.path(k, b), S = n.insert(() => T, ":first-child");
  return S.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && S.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), S.attr("transform", `translate(${-g / 2},0)`), c.attr(
    "transform",
    `translate(${-g / 2 - l.width / 2 - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), Z(t, S), t.intersect = function(v) {
    return U.polygon(t, m, v);
  }, n;
}
f(yg, "rect_left_inv_arrow");
async function Cg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  let o;
  t.cssClasses ? o = "node " + t.cssClasses : o = "node default";
  const s = e.insert("g").attr("class", o).attr("id", t.domId || t.id), a = s.insert("g"), n = s.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = await Ve(n, c, t.labelStyle, !0, !0);
  let d = { width: 0, height: 0 };
  if (Vt(gt())) {
    const I = h.children[0], N = ct(h);
    d = I.getBoundingClientRect(), N.attr("width", d.width), N.attr("height", d.height);
  }
  P.info("Text 2", l);
  const p = l || [], u = h.getBBox(), g = await Ve(
    n,
    Array.isArray(p) ? p.join("<br/>") : p,
    t.labelStyle,
    !0,
    !0
  ), m = g.children[0], y = ct(g);
  d = m.getBoundingClientRect(), y.attr("width", d.width), y.attr("height", d.height);
  const C = (t.padding || 0) / 2;
  ct(g).attr(
    "transform",
    "translate( " + (d.width > u.width ? 0 : (u.width - d.width) / 2) + ", " + (u.height + C + 5) + ")"
  ), ct(h).attr(
    "transform",
    "translate( " + (d.width < u.width ? 0 : -(u.width - d.width) / 2) + ", 0)"
  ), d = n.node().getBBox(), n.attr(
    "transform",
    "translate(" + -d.width / 2 + ", " + (-d.height / 2 - C + 3) + ")"
  );
  const b = d.width + (t.padding || 0), k = d.height + (t.padding || 0), T = -d.width / 2 - C, S = -d.height / 2 - C;
  let v, B;
  if (t.look === "handDrawn") {
    const I = G.svg(s), N = j(t, {}), D = I.path(
      ir(T, S, b, k, t.rx || 0),
      N
    ), $ = I.line(
      -d.width / 2 - C,
      -d.height / 2 - C + u.height + C,
      d.width / 2 + C,
      -d.height / 2 - C + u.height + C,
      N
    );
    B = s.insert(() => (P.debug("Rough node insert CXC", D), $), ":first-child"), v = s.insert(() => (P.debug("Rough node insert CXC", D), D), ":first-child");
  } else
    v = a.insert("rect", ":first-child"), B = a.insert("line"), v.attr("class", "outer title-state").attr("style", i).attr("x", -d.width / 2 - C).attr("y", -d.height / 2 - C).attr("width", d.width + (t.padding || 0)).attr("height", d.height + (t.padding || 0)), B.attr("class", "divider").attr("x1", -d.width / 2 - C).attr("x2", d.width / 2 + C).attr("y1", -d.height / 2 - C + u.height + C).attr("y2", -d.height / 2 - C + u.height + C);
  return Z(t, v), t.intersect = function(I) {
    return U.rect(t, I);
  }, s;
}
f(Cg, "rectWithTitle");
async function xg(e, t, { config: { themeVariables: r } }) {
  const i = r?.radius ?? 5, o = {
    rx: i,
    ry: i,
    labelPaddingX: (t?.padding ?? 0) * 1,
    labelPaddingY: (t?.padding ?? 0) * 1
  };
  return Qr(e, t, o);
}
f(xg, "roundedRect");
var nr = 8;
async function bg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.look === "neo" ? 16 : t.padding ?? 0, s = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = (t?.width ?? n.width) + o * 2 + (t.look === "neo" ? nr : nr * 2), h = (t?.height ?? n.height) + s * 2, d = c - nr, p = h, u = nr - c / 2, g = -h / 2, { cssStyles: m } = t, y = G.svg(a), C = j(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const b = [
    { x: u, y: g },
    { x: u + d, y: g },
    { x: u + d, y: g + p },
    { x: u - nr, y: g + p },
    { x: u - nr, y: g },
    { x: u, y: g },
    { x: u, y: g + p }
  ], k = y.polygon(
    b.map((S) => [S.x, S.y]),
    C
  ), T = a.insert(() => k, ":first-child");
  return T.attr("class", "basic label-container outer-path").attr("style", It(m)), i && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), m && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${nr / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, T), t.intersect = function(S) {
    return U.rect(t, S);
  }, a;
}
f(bg, "shadedProcess");
async function kg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - s * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - a * 2, 10));
  const { shapeSvg: n, bbox: l, label: c } = await ot(e, t, tt(t)), h = (t?.width ? t?.width : l.width) + s * 2, d = ((t?.height ? t?.height : l.height) + a * 2) * 1.5, p = h, u = d / 1.5, g = -p / 2, m = -u / 2, { cssStyles: y } = t, C = G.svg(n), b = j(t, {});
  t.look !== "handDrawn" && (b.roughness = 0, b.fillStyle = "solid");
  const k = [
    { x: g, y: m },
    { x: g, y: m + u },
    { x: g + p, y: m + u },
    { x: g + p, y: m - u / 2 }
  ], T = pt(k), S = C.path(T, b), v = n.insert(() => S, ":first-child");
  return v.attr("class", "basic label-container  outer-path"), y && t.look !== "handDrawn" && v.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && v.selectChildren("path").attr("style", i), v.attr("transform", `translate(0, ${u / 4})`), c.attr(
    "transform",
    `translate(${-p / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))}, ${-u / 4 + (t.padding ?? 0) - (l.y - (l.top ?? 0))})`
  ), Z(t, v), t.intersect = function(B) {
    return U.polygon(t, k, B);
  }, n;
}
f(kg, "slopedRect");
async function wg(e, t) {
  const r = t.padding ?? 0, i = t.look === "neo" ? 16 : r * 2, o = t.look === "neo" ? 12 : r, s = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? i,
    labelPaddingY: o
  };
  return Qr(e, t, s);
}
f(wg, "squareRect");
async function Tg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 20 : o, a = t.look === "neo" ? 12 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = l.height + (t.look === "neo" ? a * 2 : a), h = l.width + c / 4 + (t.look === "neo" ? s * 2 : s), d = c / 2, { cssStyles: p } = t, u = G.svg(n), g = j(t, {});
  t.look !== "handDrawn" && (g.roughness = 0, g.fillStyle = "solid");
  const m = [
    { x: -h / 2 + d, y: -c / 2 },
    { x: h / 2 - d, y: -c / 2 },
    ...Ri(-h / 2 + d, 0, d, 50, 90, 270),
    { x: h / 2 - d, y: c / 2 },
    ...Ri(h / 2 - d, 0, d, 50, 270, 450)
  ], y = pt(m), C = u.path(y, g), b = n.insert(() => C, ":first-child");
  return b.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && b.selectChildren("path").attr("style", p), i && t.look !== "handDrawn" && b.selectChildren("path").attr("style", i), Z(t, b), t.intersect = function(k) {
    return U.polygon(t, m, k);
  }, n;
}
f(Tg, "stadium");
async function Sg(e, t) {
  const r = {
    rx: t.look === "neo" ? 3 : 5,
    ry: t.look === "neo" ? 3 : 5
  };
  return Qr(e, t, r);
}
f(Sg, "state");
function _g(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.labelStyle = i;
  const { cssStyles: s } = t, { lineColor: a, stateBorder: n, nodeBorder: l, nodeShadow: c } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const h = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), d = G.svg(h), p = j(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const u = d.circle(0, 0, t.width, {
    ...p,
    stroke: a,
    strokeWidth: 2
  }), g = n ?? l, m = (t.width ?? 0) * 5 / 14, y = d.circle(0, 0, m, {
    ...p,
    fill: g,
    stroke: g,
    strokeWidth: 2,
    fillStyle: "solid"
  }), C = h.insert(() => u, ":first-child");
  if (C.insert(() => y), t.look !== "handDrawn" && C.attr("class", "outer-path"), s && C.selectAll("path").attr("style", s), o && C.selectAll("path").attr("style", o), t.width < 25 && c && t.look !== "handDrawn") {
    const b = e.node()?.ownerSVGElement?.id ?? "", k = b ? `${b}-drop-shadow-small` : "drop-shadow-small";
    C.attr("style", `filter:url(#${k})`);
  }
  return Z(t, C), t.intersect = function(b) {
    return U.circle(t, (t.width ?? 0) / 2, b);
  }, h;
}
f(_g, "stateEnd");
function vg(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i, nodeShadow: o } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const s = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const l = G.svg(s).circle(0, 0, t.width, j2(i));
    a = s.insert(() => l), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  } else
    a = s.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  if (t.width < 25 && o && t.look !== "handDrawn") {
    const n = e.node()?.ownerSVGElement?.id ?? "", l = n ? `${n}-drop-shadow-small` : "drop-shadow-small";
    a.attr("style", `filter:url(#${l})`);
  }
  return Z(t, a), t.intersect = function(n) {
    return U.circle(t, (t.width ?? 7) / 2, n);
  }, s;
}
f(vg, "stateStart");
var Ar = 8;
async function Bg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t?.padding ?? 8, s = t.look === "neo" ? 28 : o, a = t.look === "neo" ? 12 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.width ?? l.width) + 2 * Ar + s, h = (t?.height ?? l.height) + a, d = c - 2 * Ar, p = h, u = -c / 2, g = -h / 2, m = [
    { x: 0, y: 0 },
    { x: d, y: 0 },
    { x: d, y: -p },
    { x: 0, y: -p },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: d + 8, y: 0 },
    { x: d + 8, y: -p },
    { x: -8, y: -p },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const y = G.svg(n), C = j(t, {}), b = y.rectangle(u, g, d + 16, p, C), k = y.line(u + Ar, g, u + Ar, g + p, C), T = y.line(u + Ar + d, g, u + Ar + d, g + p, C);
    n.insert(() => k, ":first-child"), n.insert(() => T, ":first-child");
    const S = n.insert(() => b, ":first-child"), { cssStyles: v } = t;
    S.attr("class", "basic label-container").attr("style", It(v)), Z(t, S);
  } else {
    const y = Ge(n, d, p, m);
    i && y.attr("style", i), Z(t, y);
  }
  return t.intersect = function(y) {
    return U.polygon(t, m, y);
  }, n;
}
f(Bg, "subroutine");
var sa = 0.2;
async function Lg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o;
  (t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - a * 2, 10), t.width = Math.max(
    (t?.width ?? 0) - s * 2 - sa * (t.height + a * 2),
    10
  ));
  const { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.height ? t?.height : l.height) + a * 2, h = sa * c, d = sa * c, u = (t?.width ? t?.width : l.width) + s * 2 + h - h, g = c, m = -u / 2, y = -g / 2, { cssStyles: C } = t, b = G.svg(n), k = j(t, {}), T = [
    { x: m - h / 2, y },
    { x: m + u + h / 2, y },
    { x: m + u + h / 2, y: y + g },
    { x: m - h / 2, y: y + g }
  ], S = [
    { x: m + u - h / 2, y: y + g },
    { x: m + u + h / 2, y: y + g },
    { x: m + u + h / 2, y: y + g - d }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const v = pt(T), B = b.path(v, k), I = pt(S), N = b.path(I, { ...k, fillStyle: "solid" }), D = n.insert(() => N, ":first-child");
  return D.insert(() => B, ":first-child"), D.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && D.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && D.selectAll("path").attr("style", i), Z(t, D), t.intersect = function($) {
    return U.polygon(t, T, $);
  }, n;
}
f(Lg, "taggedRect");
async function Fg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, label: a } = await ot(e, t, tt(t)), n = Math.max(s.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(s.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = 0.2 * n, d = 0.2 * l, p = l + c, { cssStyles: u } = t, g = G.svg(o), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -n / 2 - n / 2 * 0.1, y: p / 2 },
    ...rr(
      -n / 2 - n / 2 * 0.1,
      p / 2,
      n / 2 + n / 2 * 0.1,
      p / 2,
      c,
      0.8
    ),
    { x: n / 2 + n / 2 * 0.1, y: -p / 2 },
    { x: -n / 2 - n / 2 * 0.1, y: -p / 2 }
  ], C = -n / 2 + n / 2 * 0.1, b = -p / 2 - d * 0.4, k = [
    { x: C + n - h, y: (b + l) * 1.3 },
    { x: C + n, y: b + l - d },
    { x: C + n, y: (b + l) * 0.9 },
    ...rr(
      C + n,
      (b + l) * 1.25,
      C + n - h,
      (b + l) * 1.3,
      -l * 0.02,
      0.5
    )
  ], T = pt(y), S = g.path(T, m), v = pt(k), B = g.path(v, {
    ...m,
    fillStyle: "solid"
  }), I = o.insert(() => B, ":first-child");
  return I.insert(() => S, ":first-child"), I.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && I.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(0,${-c / 2})`), a.attr(
    "transform",
    `translate(${-n / 2 + (t.padding ?? 0) - (s.x - (s.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (s.y - (s.top ?? 0))})`
  ), Z(t, I), t.intersect = function(N) {
    return U.polygon(t, y, N);
  }, o;
}
f(Fg, "taggedWaveEdgedRectangle");
async function Ag(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s } = await ot(e, t, tt(t)), a = Math.max(s.width + (t.padding ?? 0), t?.width || 0), n = Math.max(s.height + (t.padding ?? 0), t?.height || 0), l = -a / 2, c = -n / 2, h = o.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", a).attr("height", n), Z(t, h), t.intersect = function(d) {
    return U.rect(t, d);
  }, o;
}
f(Ag, "text");
var NT = /* @__PURE__ */ f((e, t, r, i, o, s) => `M${e},${t}
    a${o},${s} 0,0,1 0,${-i}
    l${r},0
    a${o},${s} 0,0,1 0,${i}
    M${r},${-i}
    a${o},${s} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), qT = /* @__PURE__ */ f((e, t, r, i, o, s) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${o},${s} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${o},${s} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), WT = /* @__PURE__ */ f((e, t, r, i, o, s) => [`M${e + r / 2},${-i / 2}`, `a${o},${s} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD"), sc = 5, ac = 10;
async function Mg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 12 : o / 2;
  if (t.width || t.height) {
    const m = t.height ?? 0;
    t.height = (t.height ?? 0) - s, t.height < sc && (t.height = sc);
    const C = m / 2 / (2.5 + m / 50);
    t.width = (t.width ?? 0) - s - C * 3, t.width < ac && (t.width = ac);
  }
  const { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = (t.height ? t.height : n.height) + s, h = c / 2, d = h / (2.5 + c / 50), p = (t.width ? t.width : n.width) + d + s, { cssStyles: u } = t;
  let g;
  if (t.look === "handDrawn") {
    const m = G.svg(a), y = qT(0, 0, p, c, d, h), C = WT(0, 0, p, c, d, h), b = m.path(y, j(t, {})), k = m.path(C, j(t, { fill: "none" }));
    g = a.insert(() => k, ":first-child"), g = a.insert(() => b, ":first-child"), g.attr("class", "basic label-container"), u && g.attr("style", u);
  } else {
    const m = NT(0, 0, p, c, d, h);
    g = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", It(u)).attr("style", i), g.attr("class", "basic label-container outer-path"), u && g.selectAll("path").attr("style", u), i && g.selectAll("path").attr("style", i);
  }
  return g.attr("label-offset-x", d), g.attr("transform", `translate(${-p / 2}, ${c / 2} )`), l.attr(
    "transform",
    `translate(${-(n.width / 2) - d - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Z(t, g), t.intersect = function(m) {
    const y = U.rect(t, m), C = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(C) < (t.height ?? 0) / 2 || Math.abs(C) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - d)) {
      let b = d * d * (1 - C * C / (h * h));
      b != 0 && (b = Math.sqrt(Math.abs(b))), b = d - b, m.x - (t.x ?? 0) > 0 && (b = -b), y.x += b;
    }
    return y;
  }, a;
}
f(Mg, "tiltedCylinder");
async function Eg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = (t.look === "neo", o), a = t.look === "neo" ? o * 2 : o, { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.height ?? l.height) + s, h = (t?.width ?? l.width) + a, d = [
    { x: -3 * c / 6, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: 0, y: -c }
  ];
  let p;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const g = G.svg(n), m = j(t, {}), y = pt(d), C = g.path(y, m);
    p = n.insert(() => C, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && p.attr("style", u);
  } else
    p = Ge(n, h, c, d);
  return i && p.attr("style", i), t.width = h, t.height = c, Z(t, p), t.intersect = function(g) {
    return U.polygon(t, d, g);
  }, n;
}
f(Eg, "trapezoid");
async function $g(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o, n = 15, l = 5;
  (t.width || t.height) && (t.height = (t.height ?? 0) - a * 2, t.height < l && (t.height = l), t.width = (t.width ?? 0) - s * 2, t.width < n && (t.width = n));
  const { shapeSvg: c, bbox: h } = await ot(e, t, tt(t)), d = (t?.width ? t?.width : h.width) + s * 2, p = (t?.height ? t?.height : h.height) + a * 2, { cssStyles: u } = t, g = G.svg(c), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -d / 2 * 0.8, y: -p / 2 },
    { x: d / 2 * 0.8, y: -p / 2 },
    { x: d / 2, y: -p / 2 * 0.6 },
    { x: d / 2, y: p / 2 },
    { x: -d / 2, y: p / 2 },
    { x: -d / 2, y: -p / 2 * 0.6 }
  ], C = pt(y), b = g.path(C, m), k = c.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Z(t, k), t.intersect = function(T) {
    return U.polygon(t, y, T);
  }, c;
}
f($g, "trapezoidalPentagon");
var nc = 10, lc = 10;
async function Og(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? o * 2 : o;
  (t.width || t.height) && (t.width = ((t?.width ?? 0) - s) / 2, t.width < lc && (t.width = lc), t.height = t?.height ?? 0, t.height < nc && (t.height = nc));
  const { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = Ye(gt().flowchart?.htmlLabels), h = (t?.width ? t?.width : n.width) + s, d = t?.height ? t?.height : h + n.height, p = d, u = [
    { x: 0, y: 0 },
    { x: p, y: 0 },
    { x: p / 2, y: -d }
  ], { cssStyles: g } = t, m = G.svg(a), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = pt(u), b = m.path(C, y), k = a.insert(() => b, ":first-child").attr("transform", `translate(${-d / 2}, ${d / 2})`).attr("class", "outer-path");
  return g && t.look !== "handDrawn" && k.selectChildren("path").attr("style", g), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), t.width = h, t.height = d, Z(t, k), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${d / 2 - (n.height + (t.padding ?? 0) / (c ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(T) {
    return P.info("Triangle intersect", t, u, T), U.polygon(t, u, T);
  }, a;
}
f(Og, "triangle");
async function Ig(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 12 : o;
  let n = !0;
  (t.width || t.height) && (n = !1, t.width = (t?.width ?? 0) - s * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10));
  const { shapeSvg: l, bbox: c, label: h } = await ot(e, t, tt(t)), d = (t?.width ? t?.width : c.width) + (s ?? 0) * 2, p = (t?.height ? t?.height : c.height) + (a ?? 0) * 2, u = t.look === "neo" ? p / 4 : p / 8, g = p + (n ? u : -u), { cssStyles: m } = t, C = 14 - d, b = C > 0 ? C / 2 : 0, k = G.svg(l), T = j(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const S = [
    { x: -d / 2 - b, y: g / 2 },
    ...rr(
      -d / 2 - b,
      g / 2,
      d / 2 + b,
      g / 2,
      u,
      0.8
    ),
    { x: d / 2 + b, y: -g / 2 },
    { x: -d / 2 - b, y: -g / 2 }
  ], v = pt(S), B = k.path(v, T), I = l.insert(() => B, ":first-child");
  return I.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && I.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && I.selectAll("path").attr("style", i), I.attr("transform", `translate(0,${-u / 2})`), h.attr(
    "transform",
    `translate(${-d / 2 + (t.padding ?? 0) - (c.x - (c.left ?? 0))},${-p / 2 + (t.padding ?? 0) - u - (c.y - (c.top ?? 0))})`
  ), Z(t, I), t.intersect = function(N) {
    return U.polygon(t, S, N);
  }, l;
}
f(Ig, "waveEdgedRectangle");
async function Dg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.padding ?? 0, s = t.look === "neo" ? 16 : o, a = t.look === "neo" ? 20 : o;
  if (t.width || t.height) {
    t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
    const T = Math.min(t.height * 0.2, t.height / 4);
    t.height = Math.ceil(t.height - a - T * (20 / 9)), t.width = t.width - s * 2;
  }
  const { shapeSvg: n, bbox: l } = await ot(e, t, tt(t)), c = (t?.width ? t?.width : l.width) + s * 2, h = (t?.height ? t?.height : l.height) + a, d = h / 8, p = h + d * 2, { cssStyles: u } = t, g = G.svg(n), m = j(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -c / 2, y: p / 2 },
    ...rr(-c / 2, p / 2, c / 2, p / 2, d, 1),
    { x: c / 2, y: -p / 2 },
    ...rr(c / 2, -p / 2, -c / 2, -p / 2, d, -1)
  ], C = pt(y), b = g.path(C, m), k = n.insert(() => b, ":first-child");
  return k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), Z(t, k), t.intersect = function(T) {
    return U.polygon(t, y, T);
  }, n;
}
f(Dg, "waveRectangle");
var Tt = 10;
async function Rg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t.look === "neo" ? 16 : t.padding ?? 0, s = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2 - Tt, 10), t.height = Math.max((t?.height ?? 0) - s * 2 - Tt, 10));
  const { shapeSvg: a, bbox: n, label: l } = await ot(e, t, tt(t)), c = (t?.width ? t?.width : n.width) + o * 2 + Tt, h = (t?.height ? t?.height : n.height) + s * 2 + Tt, d = c - Tt, p = h - Tt, u = -d / 2, g = -p / 2, { cssStyles: m } = t, y = G.svg(a), C = j(t, {}), b = [
    { x: u - Tt, y: g - Tt },
    { x: u - Tt, y: g + p },
    { x: u + d, y: g + p },
    { x: u + d, y: g - Tt }
  ], k = `M${u - Tt},${g - Tt} L${u + d},${g - Tt} L${u + d},${g + p} L${u - Tt},${g + p} L${u - Tt},${g - Tt}
                M${u - Tt},${g} L${u + d},${g}
                M${u},${g - Tt} L${u},${g + p}`;
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const T = y.path(k, C), S = a.insert(() => T, ":first-child");
  return S.attr("transform", `translate(${Tt / 2}, ${Tt / 2})`), S.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && S.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && S.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${-(n.width / 2) + Tt / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + Tt / 2 - (n.y - (n.top ?? 0))})`
  ), Z(t, S), t.intersect = function(v) {
    return U.polygon(t, b, v);
  }, a;
}
f(Rg, "windowPane");
var hc = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), zT = /* @__PURE__ */ new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function sl(e, t) {
  const r = t;
  r.alias && (t.label = r.alias);
  const { theme: i, themeVariables: o } = wt(), { rowEven: s, rowOdd: a, nodeBorder: n, borderColorArray: l } = o;
  if (t.look === "handDrawn") {
    const { themeVariables: rt } = wt(), { background: ht } = rt, ft = {
      ...t,
      id: t.id + "-background",
      domId: (t.domId || t.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${ht}`]
    };
    await sl(e, ft);
  }
  const c = wt();
  t.useHtmlLabels = c.htmlLabels;
  let h = c.er?.diagramPadding ?? 10, d = c.er?.entityPadding ?? 6;
  const { cssStyles: p } = t, { labelStyles: u, nodeStyles: g } = V(t);
  if (r.attributes.length === 0 && t.label) {
    const rt = {
      rx: 0,
      ry: 0,
      labelPaddingX: h,
      labelPaddingY: h * 1.5
    };
    ze(t.label, c) + rt.labelPaddingX * 2 < c.er.minEntityWidth && (t.width = c.er.minEntityWidth);
    const ht = await Qr(e, t, rt);
    if (i != null && hc.has(i)) {
      const ft = r.colorIndex ?? 0;
      ht.attr("data-color-id", `color-${ft % l.length}`);
    }
    if (!Ye(c.htmlLabels)) {
      const ft = ht.select("text"), xt = ft.node()?.getBBox();
      ft.attr("transform", `translate(${-xt.width / 2}, 0)`);
    }
    return ht;
  }
  c.htmlLabels || (h *= 1.25, d *= 1.25);
  let m = tt(t);
  m || (m = "node default");
  const y = e.insert("g").attr("class", m).attr("id", t.domId || t.id), C = await Or(y, t.label ?? "", c, 0, 0, ["name"], u);
  C.height += d;
  let b = 0;
  const k = [], T = [];
  let S = 0, v = 0, B = 0, I = 0, N = !0, D = !0;
  for (const rt of r.attributes) {
    const ht = await Or(
      y,
      rt.type,
      c,
      0,
      b,
      ["attribute-type"],
      u
    );
    S = Math.max(S, ht.width + h);
    const ft = await Or(
      y,
      rt.name,
      c,
      0,
      b,
      ["attribute-name"],
      u
    );
    v = Math.max(v, ft.width + h);
    const xt = await Or(
      y,
      rt.keys.join(),
      c,
      0,
      b,
      ["attribute-keys"],
      u
    );
    B = Math.max(B, xt.width + h);
    const Ct = await Or(
      y,
      rt.comment,
      c,
      0,
      b,
      ["attribute-comment"],
      u
    );
    I = Math.max(I, Ct.width + h);
    const vt = Math.max(ht.height, ft.height, xt.height, Ct.height) + d;
    T.push({ yOffset: b, rowHeight: vt }), b += vt;
  }
  let $ = 4;
  B <= h && (N = !1, B = 0, $--), I <= h && (D = !1, I = 0, $--);
  const z = y.node().getBBox();
  if (C.width + h * 2 - (S + v + B + I) > 0) {
    const rt = C.width + h * 2 - (S + v + B + I);
    S += rt / $, v += rt / $, B > 0 && (B += rt / $), I > 0 && (I += rt / $);
  }
  const W = S + v + B + I, O = G.svg(y), F = j(t, {});
  t.look !== "handDrawn" && (F.roughness = 0, F.fillStyle = "solid");
  let L = 0;
  T.length > 0 && (L = T.reduce((rt, ht) => rt + (ht?.rowHeight ?? 0), 0));
  const E = Math.max(z.width + h * 2, t?.width || 0, W), R = Math.max((L ?? 0) + C.height, t?.height || 0), H = -E / 2, Y = -R / 2;
  if (y.selectAll("g:not(:first-child)").each((rt, ht, ft) => {
    const xt = ct(ft[ht]), Ct = xt.attr("transform");
    let vt = 0, he = 0;
    if (Ct) {
      const $e = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(Ct);
      $e && (vt = parseFloat($e[1]), he = parseFloat($e[2]), xt.attr("class").includes("attribute-name") ? vt += S : xt.attr("class").includes("attribute-keys") ? vt += S + v : xt.attr("class").includes("attribute-comment") && (vt += S + v + B));
    }
    xt.attr(
      "transform",
      `translate(${H + h / 2 + vt}, ${he + Y + C.height + d / 2})`
    );
  }), y.select(".name").attr("transform", "translate(" + -C.width / 2 + ", " + (Y + d / 2) + ")"), i != null && hc.has(i)) {
    const rt = r.colorIndex ?? 0;
    y.attr("data-color-id", `color-${rt % l.length}`);
  }
  const Q = O.rectangle(H, Y, E, R, F), ut = y.insert(() => Q, ":first-child").attr("class", "outer-path").attr("style", p.join(""));
  k.push(0);
  for (const [rt, ht] of T.entries()) {
    const xt = (rt + 1) % 2 === 0 && ht.yOffset !== 0, Ct = O.rectangle(H, C.height + Y + ht?.yOffset, E, ht?.rowHeight, {
      ...F,
      fill: xt ? s : a,
      stroke: n
    });
    y.insert(() => Ct, "g.label").attr("style", p.join("")).attr("class", `row-rect-${xt ? "even" : "odd"}`);
  }
  const et = 1e-4;
  let dt = Ir(H, C.height + Y, E + H, C.height + Y, et), it = O.polygon(
    dt.map((rt) => [rt.x, rt.y]),
    F
  );
  if (y.insert(() => it).attr("class", "divider"), dt = Ir(S + H, C.height + Y, S + H, R + Y, et), it = O.polygon(
    dt.map((rt) => [rt.x, rt.y]),
    F
  ), y.insert(() => it).attr("class", "divider"), N) {
    const rt = S + v + H;
    dt = Ir(rt, C.height + Y, rt, R + Y, et), it = O.polygon(
      dt.map((ht) => [ht.x, ht.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  if (D) {
    const rt = S + v + B + H;
    dt = Ir(rt, C.height + Y, rt, R + Y, et), it = O.polygon(
      dt.map((ht) => [ht.x, ht.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  for (const rt of k) {
    const ht = C.height + Y + rt;
    dt = Ir(H, ht, E + H, ht, et), it = O.polygon(
      dt.map((ft) => [ft.x, ft.y]),
      F
    ), y.insert(() => it).attr("class", "divider");
  }
  if (Z(t, ut), g && t.look !== "handDrawn")
    if (i != null && zT.has(i))
      y.selectAll("path").attr("style", g);
    else {
      const ht = g.split(";")?.filter((ft) => ft.includes("stroke"))?.map((ft) => `${ft}`).join("; ");
      y.selectAll("path").attr("style", ht ?? ""), y.selectAll(".row-rect-even path").attr("style", g);
    }
  return t.intersect = function(rt) {
    return U.rect(t, rt);
  }, y;
}
f(sl, "erBox");
async function Or(e, t, r, i = 0, o = 0, s = [], a = "") {
  const n = e.insert("g").attr("class", `label ${s.join(" ")}`).attr("transform", `translate(${i}, ${o})`).attr("style", a);
  t !== Jl(t) && (t = Jl(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = n.node().appendChild(
    await Ue(
      n,
      t,
      {
        width: ze(t, r) + 100,
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
  if (Ye(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const d = ct(l);
    c = h.getBoundingClientRect(), d.attr("width", c.width), d.attr("height", c.height);
  }
  return c;
}
f(Or, "addText");
function Ir(e, t, r, i, o) {
  return e === r ? [
    { x: e - o / 2, y: t },
    { x: e + o / 2, y: t },
    { x: r + o / 2, y: i },
    { x: r - o / 2, y: i }
  ] : [
    { x: e, y: t - o / 2 },
    { x: e, y: t + o / 2 },
    { x: r, y: i + o / 2 },
    { x: r, y: i - o / 2 }
  ];
}
f(Ir, "lineToPolygon");
async function Pg(e, t, r, i, o = r.class.padding ?? 12) {
  const s = i ? 0 : 3, a = e.insert("g").attr("class", tt(t)).attr("id", t.domId || t.id);
  let n = null, l = null, c = null, h = null, d = 0, p = 0, u = 0;
  if (n = a.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const b = t.annotations[0];
    await ki(n, { text: `«${b}»` }, 0), d = n.node().getBBox().height;
  }
  l = a.insert("g").attr("class", "label-group text"), await ki(l, t, 0, ["font-weight: bolder"]);
  const g = l.node().getBBox();
  p = g.height, c = a.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const b of t.members) {
    const k = await ki(c, b, m, [b.parseClassifier()]);
    m += k + s;
  }
  u = c.node().getBBox().height, u <= 0 && (u = o / 2), h = a.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const b of t.methods) {
    const k = await ki(h, b, y, [b.parseClassifier()]);
    y += k + s;
  }
  let C = a.node().getBBox();
  if (n !== null) {
    const b = n.node().getBBox();
    n.attr("transform", `translate(${-b.width / 2})`);
  }
  return l.attr("transform", `translate(${-g.width / 2}, ${d})`), C = a.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${d + p + o * 2})`
  ), C = a.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${d + p + (u ? u + o * 4 : o * 2)})`
  ), C = a.node().getBBox(), { shapeSvg: a, bbox: C };
}
f(Pg, "textHelper");
async function ki(e, t, r, i = []) {
  const o = e.insert("g").attr("class", "label").attr("style", i.join("; ")), s = wt();
  let a = "useHtmlLabels" in t ? t.useHtmlLabels : Ye(s.htmlLabels) ?? !0, n = "";
  "text" in t ? n = t.text : n = t.label, !a && n.startsWith("\\") && (n = n.substring(1)), Li(n) && (a = !0);
  const l = await Ue(
    o,
    fn(xr(n)),
    {
      width: ze(n, s) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a
    },
    s
  );
  let c, h = 1;
  if (a) {
    const d = l.children[0], p = ct(l);
    h = d.innerHTML.split("<br>").length, d.innerHTML.includes("</math>") && (h += d.innerHTML.split("<mrow>").length - 1);
    const u = d.getElementsByTagName("img");
    if (u) {
      const g = n.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...u].map(
          (m) => new Promise((y) => {
            function C() {
              if (m.style.display = "flex", m.style.flexDirection = "column", g) {
                const b = s.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, T = parseInt(b, 10) * 5 + "px";
                m.style.minWidth = T, m.style.maxWidth = T;
              } else
                m.style.width = "100%";
              y(m);
            }
            f(C, "setupImage"), setTimeout(() => {
              m.complete && C();
            }), m.addEventListener("error", C), m.addEventListener("load", C);
          })
        )
      );
    }
    c = d.getBoundingClientRect(), p.attr("width", c.width), p.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && ct(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const d = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (d.textContent = n[0] + n.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), n[1] === " " && (d.textContent = d.textContent[0] + " " + d.textContent.substring(1))), d.textContent === "undefined" && (d.textContent = ""), c = l.getBBox();
  }
  return o.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
f(ki, "addText");
async function Ng(e, t) {
  const r = gt(), { themeVariables: i } = r, { useGradient: o } = i, s = r.class.padding ?? 12, a = s, n = t.useHtmlLabels ?? Ye(r.htmlLabels) ?? !0, l = t;
  l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
  const { shapeSvg: c, bbox: h } = await Pg(e, t, r, n, a), { labelStyles: d, nodeStyles: p } = V(t);
  t.labelStyle = d, t.cssStyles = l.styles || "";
  const u = l.styles?.join(";") || p || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const g = l.members.length === 0 && l.methods.length === 0 && !r.class?.hideEmptyMembersBox, m = G.svg(c), y = j(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = Math.max(t.width ?? 0, h.width);
  let b = Math.max(t.height ?? 0, h.height);
  const k = (t.height ?? 0) > h.height;
  l.members.length === 0 && l.methods.length === 0 ? b += a : l.members.length > 0 && l.methods.length === 0 && (b += a * 2);
  const T = -C / 2, S = -b / 2;
  let v = g ? s * 2 : l.members.length === 0 && l.methods.length === 0 ? -s : 0;
  k && (v = s * 2);
  const B = m.rectangle(
    T - s,
    S - s - (g ? s : l.members.length === 0 && l.methods.length === 0 ? -s / 2 : 0),
    C + 2 * s,
    b + 2 * s + v,
    y
  ), I = c.insert(() => B, ":first-child");
  I.attr("class", "basic label-container outer-path");
  const N = I.node().getBBox(), D = c.select(".annotation-group").node().getBBox().height - (g ? s / 2 : 0) || 0, $ = c.select(".label-group").node().getBBox().height - (g ? s / 2 : 0) || 0, z = c.select(".members-group").node().getBBox().height - (g ? s / 2 : 0) || 0, W = (D + $ + S + s - (S - s - (g ? s : l.members.length === 0 && l.methods.length === 0 ? -s / 2 : 0))) / 2;
  if (c.selectAll(".text").each((O, F, L) => {
    const E = ct(L[F]), R = E.attr("transform");
    let H = 0;
    if (R) {
      const et = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(R);
      et && (H = parseFloat(et[2]));
    }
    let Y = H + S + s - (g ? s : l.members.length === 0 && l.methods.length === 0 ? -s / 2 : 0);
    if (E.attr("class").includes("methods-group")) {
      const ut = Math.max(z, a / 2);
      k ? Y = Math.max(
        W,
        D + $ + ut + S + a * 2 + s
      ) + a * 2 : Y = D + $ + ut + S + a * 4 + s;
    }
    l.members.length === 0 && l.methods.length === 0 && r.class?.hideEmptyMembersBox && (l.annotations.length > 0 ? Y = H - a : Y = H), n || (Y -= 4);
    let Q = T;
    (E.attr("class").includes("label-group") || E.attr("class").includes("annotation-group")) && (Q = -E.node()?.getBBox().width / 2 || 0, c.selectAll("text").each(function(ut, et, dt) {
      window.getComputedStyle(dt[et]).textAnchor === "middle" && (Q = 0);
    })), E.attr("transform", `translate(${Q}, ${Y})`);
  }), l.members.length > 0 || l.methods.length > 0 || g) {
    const O = D + $ + S + s, F = m.line(
      N.x,
      O,
      N.x + N.width,
      O + 1e-3,
      y
    );
    c.insert(() => F).attr("class", `divider${t.look === "neo" && !o ? " neo-line" : ""}`).attr("style", u);
  }
  if (g || l.members.length > 0 || l.methods.length > 0) {
    const O = D + $ + z + S + a * 2 + s, F = m.line(
      N.x,
      k ? Math.max(W, O) : O,
      N.x + N.width,
      (k ? Math.max(W, O) : O) + 1e-3,
      y
    );
    c.insert(() => F).attr("class", `divider${t.look === "neo" && !o ? " neo-line" : ""}`).attr("style", u);
  }
  if (l.look !== "handDrawn" && c.selectAll("path").attr("style", u), I.select(":nth-child(2)").attr("style", u), c.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? c.selectAll("span").attr("style", t.labelStyle) : c.selectAll("span").attr("style", u), !n) {
    const O = RegExp(/color\s*:\s*([^;]*)/), F = O.exec(u);
    if (F) {
      const L = F[0].replace("color", "fill");
      c.selectAll("tspan").attr("style", L);
    } else if (d) {
      const L = O.exec(d);
      if (L) {
        const E = L[0].replace("color", "fill");
        c.selectAll("tspan").attr("style", E);
      }
    }
  }
  return Z(t, I), t.intersect = function(O) {
    return U.rect(t, O);
  }, c;
}
f(Ng, "classBox");
async function qg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const o = t, s = t, a = 20, n = 20, l = "verifyMethod" in t, c = tt(t), { themeVariables: h } = gt(), { borderColorArray: d, requirementEdgeLabelBackground: p } = h, u = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let g;
  l ? g = await _e(
    u,
    `&lt;&lt;${o.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : g = await _e(u, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let m = g;
  const y = await _e(
    u,
    o.name,
    m,
    t.labelStyle + "; font-weight: bold;"
  );
  if (m += y + n, l) {
    const N = await _e(
      u,
      `${o.requirementId ? `ID: ${o.requirementId}` : ""}`,
      m,
      t.labelStyle
    );
    m += N;
    const D = await _e(
      u,
      `${o.text ? `Text: ${o.text}` : ""}`,
      m,
      t.labelStyle
    );
    m += D;
    const $ = await _e(
      u,
      `${o.risk ? `Risk: ${o.risk}` : ""}`,
      m,
      t.labelStyle
    );
    m += $, await _e(
      u,
      `${o.verifyMethod ? `Verification: ${o.verifyMethod}` : ""}`,
      m,
      t.labelStyle
    );
  } else {
    const N = await _e(
      u,
      `${s.type ? `Type: ${s.type}` : ""}`,
      m,
      t.labelStyle
    );
    m += N, await _e(
      u,
      `${s.docRef ? `Doc Ref: ${s.docRef}` : ""}`,
      m,
      t.labelStyle
    );
  }
  const C = (u.node()?.getBBox().width ?? 200) + a, b = (u.node()?.getBBox().height ?? 200) + a, k = -C / 2, T = -b / 2, S = G.svg(u), v = j(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const B = S.rectangle(k, T, C, b, v), I = u.insert(() => B, ":first-child");
  if (I.attr("class", "basic label-container outer-path").attr("style", i), d?.length) {
    const N = t.colorIndex ?? 0;
    u.attr("data-color-id", `color-${N % d.length}`);
  }
  if (u.selectAll(".label").each((N, D, $) => {
    const z = ct($[D]), W = z.attr("transform");
    let O = 0, F = 0;
    if (W) {
      const H = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(W);
      H && (O = parseFloat(H[1]), F = parseFloat(H[2]));
    }
    const L = F - b / 2;
    let E = k + a / 2;
    (D === 0 || D === 1) && (E = O), z.attr("transform", `translate(${E}, ${L + a})`);
  }), m > g + y + n) {
    const N = T + g + y + n;
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
    u.insert(() => D).attr("class", "divider");
  }
  return Z(t, I), t.intersect = function(N) {
    return U.rect(t, N);
  }, i && t.look !== "handDrawn" && (p || d?.length) && u.selectAll("path").attr("style", i), u;
}
f(qg, "requirementBox");
async function _e(e, t, r, i = "") {
  if (t === "")
    return 0;
  const o = e.insert("g").attr("class", "label").attr("style", i), s = gt(), a = s.htmlLabels ?? !0, n = await Ue(
    o,
    fn(xr(t)),
    {
      width: ze(t, s) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a,
      style: i
    },
    s
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
  return o.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
f(_e, "addText");
var HT = /* @__PURE__ */ f((e) => {
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
async function Wg(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: o } = V(t);
  t.labelStyle = i || "";
  const s = 10, a = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: n,
    bbox: l,
    label: c
  } = await ot(e, t, tt(t)), h = t.padding || 10;
  let d = "", p;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (d = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), p = n.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", d).attr("target", "_blank"));
  const u = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let g, m;
  p ? { label: g, bbox: m } = await oa(
    p,
    "ticket" in t && t.ticket || "",
    u
  ) : { label: g, bbox: m } = await oa(
    n,
    "ticket" in t && t.ticket || "",
    u
  );
  const { label: y, bbox: C } = await oa(
    n,
    "assigned" in t && t.assigned || "",
    u
  );
  t.width = a;
  const b = 10, k = t?.width || 0, T = Math.max(m.height, C.height) / 2, S = Math.max(l.height + b * 2, t?.height || 0) + T, v = -k / 2, B = -S / 2;
  c.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-T - l.height / 2) + ")"
  ), g.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-T + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + k / 2 - C.width - 2 * s) + ", " + (-T + l.height / 2) + ")"
  );
  let I;
  const { rx: N, ry: D } = t, { cssStyles: $ } = t;
  if (t.look === "handDrawn") {
    const z = G.svg(n), W = j(t, {}), O = N || D ? z.path(ir(v, B, k, S, N || 0), W) : z.rectangle(v, B, k, S, W);
    I = n.insert(() => O, ":first-child"), I.attr("class", "basic label-container").attr("style", $ || null);
  } else {
    I = n.insert("rect", ":first-child"), I.attr("class", "basic label-container __APA__").attr("style", o).attr("rx", N ?? 5).attr("ry", D ?? 5).attr("x", v).attr("y", B).attr("width", k).attr("height", S);
    const z = "priority" in t && t.priority;
    if (z) {
      const W = n.append("line"), O = v + 2, F = B + Math.floor((N ?? 0) / 2), L = B + S - Math.floor((N ?? 0) / 2);
      W.attr("x1", O).attr("y1", F).attr("x2", O).attr("y2", L).attr("stroke-width", "4").attr("stroke", HT(z));
    }
  }
  return Z(t, I), t.height = S, t.intersect = function(z) {
    return U.rect(t, z);
  }, n;
}
f(Wg, "kanbanItem");
async function zg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, halfPadding: a, label: n } = await ot(
    e,
    t,
    tt(t)
  ), l = s.width + 10 * a, c = s.height + 8 * a, h = 0.15 * l, { cssStyles: d } = t, p = s.width + 20, u = s.height + 20, g = Math.max(l, p), m = Math.max(c, u);
  n.attr("transform", `translate(${-s.width / 2}, ${-s.height / 2})`);
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
    const b = G.svg(o), k = j(t, {}), T = b.path(C, k);
    y = o.insert(() => T, ":first-child"), y.attr("class", "basic label-container").attr("style", It(d));
  } else
    y = o.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", C);
  return y.attr("transform", `translate(${-g / 2}, ${-m / 2})`), Z(t, y), t.calcIntersect = function(b, k) {
    return U.rect(b, k);
  }, t.intersect = function(b) {
    return P.info("Bang intersect", t, b), U.rect(t, b);
  }, o;
}
f(zg, "bang");
async function Hg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, halfPadding: a, label: n } = await ot(
    e,
    t,
    tt(t)
  ), l = s.width + 2 * a, c = s.height + 2 * a, h = 0.15 * l, d = 0.25 * l, p = 0.35 * l, u = 0.2 * l, { cssStyles: g } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${p},${p} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${d},${d} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${u},${u} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${d},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${p},${p} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${u},${u} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const C = G.svg(o), b = j(t, {}), k = C.path(y, b);
    m = o.insert(() => k, ":first-child"), m.attr("class", "basic label-container").attr("style", It(g));
  } else
    m = o.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return n.attr("transform", `translate(${-s.width / 2}, ${-s.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), Z(t, m), t.calcIntersect = function(C, b) {
    return U.rect(C, b);
  }, t.intersect = function(C) {
    return P.info("Cloud intersect", t, C), U.rect(t, C);
  }, o;
}
f(Hg, "cloud");
async function Yg(e, t) {
  const { labelStyles: r, nodeStyles: i } = V(t);
  t.labelStyle = r;
  const { shapeSvg: o, bbox: s, halfPadding: a, label: n } = await ot(
    e,
    t,
    tt(t)
  ), l = s.width + 8 * a, c = s.height + 2 * a, h = 5, d = t.look === "neo" ? `
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
  const p = o.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", d);
  return o.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), n.attr("transform", `translate(${-s.width / 2}, ${-s.height / 2})`), o.append(() => n.node()), Z(t, p), t.calcIntersect = function(u, g) {
    return U.rect(u, g);
  }, t.intersect = function(u) {
    return U.rect(t, u);
  }, o;
}
f(Yg, "defaultMindmapNode");
async function Ug(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return ol(e, t, r);
}
f(Ug, "mindmapCircle");
var YT = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: wg
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: xg
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: Tg
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: Bg
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: Uf
  },
  {
    semanticName: "Data Store",
    name: "Data Store",
    shortName: "datastore",
    description: "Data flow diagram data store",
    aliases: ["data-store"],
    handler: Gf
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
    handler: zg
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: Hg
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: mg
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: Jf
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: hg
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: lg
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: Eg
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: ag
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Xf
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: Ag
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: Rf
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: bg
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: vg
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: _g
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Kf
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: tg
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: Wf
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: zf
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: Hf
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: cg
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: Ig
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Qf
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: Mg
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: dg
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Yf
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: jf
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: Og
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: Rg
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Vf
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: $g
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Zf
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: kg
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: fg
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: pg
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: Df
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: qf
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: Fg
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: Lg
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: Dg
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: yg
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: ug
  }
], UT = /* @__PURE__ */ f(() => {
  const t = [
    ...Object.entries({
      // States
      state: Sg,
      choice: Pf,
      note: gg,
      // Rectangles
      rectWithTitle: Cg,
      labelRect: ng,
      // Icons
      iconSquare: og,
      iconCircle: rg,
      icon: eg,
      iconRounded: ig,
      imageSquare: sg,
      anchor: Of,
      // Kanban diagram
      kanbanItem: Wg,
      //Mindmap diagram
      mindmapCircle: Ug,
      defaultMindmapNode: Yg,
      // class diagram
      classBox: Ng,
      // er diagram
      erBox: sl,
      // Requirement diagram
      requirementBox: qg
    }),
    ...YT.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((o) => [o, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), Gg = UT();
function GT(e) {
  return e in Gg;
}
f(GT, "isValidShape");
var Ts = /* @__PURE__ */ new Map();
async function jg(e, t, r) {
  let i, o;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const s = t.shape ? Gg[t.shape] : void 0;
  if (!s)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let a;
    r.config.securityLevel === "sandbox" ? a = "_top" : t.linkTarget && (a = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a ?? null), o = await s(i, t, r);
  } else
    o = await s(e, t, r), i = o;
  return i.attr("data-look", It(t.look)), t.tooltip && o.attr("title", t.tooltip), Ts.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
f(jg, "insertNode");
var OL = /* @__PURE__ */ f((e, t) => {
  Ts.set(t.id, e);
}, "setNodeElem"), IL = /* @__PURE__ */ f(() => {
  Ts.clear();
}, "clear"), DL = /* @__PURE__ */ f((e) => {
  const t = Ts.get(e.id);
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
}, "positionNode"), jT = /* @__PURE__ */ f((e, t, r, i, o, s = !1, a) => {
  t.arrowTypeStart && cc(
    e,
    "start",
    t.arrowTypeStart,
    r,
    i,
    o,
    s,
    a
  ), t.arrowTypeEnd && cc(e, "end", t.arrowTypeEnd, r, i, o, s, a);
}, "addEdgeMarkers"), XT = {
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
}, VT = [
  "cross",
  "point",
  "circle",
  "lollipop",
  "aggregation",
  "extension",
  "composition",
  "dependency",
  "barb"
], cc = /* @__PURE__ */ f((e, t, r, i, o, s, a = !1, n) => {
  const l = XT[r], c = l && VT.includes(l.type);
  if (!l) {
    P.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const h = l.type, u = `${o}_${s}-${h}${t === "start" ? "Start" : "End"}${a && c ? "-margin" : ""}`;
  if (n && n.trim() !== "") {
    const g = n.replace(/[^\dA-Za-z]/g, "_"), m = `${u}_${g}`;
    if (!document.getElementById(m)) {
      const y = document.getElementById(u);
      if (y) {
        const C = y.cloneNode(!0);
        C.id = m, C.querySelectorAll("path, circle, line").forEach((k) => {
          k.setAttribute("stroke", n), l.fill && k.setAttribute("fill", n);
        }), y.parentNode?.appendChild(C);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${m})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${u})`);
}, "addEdgeMarker"), ZT = /* @__PURE__ */ f((e) => typeof e == "string" ? e : gt()?.flowchart?.curve, "resolveEdgeCurveType"), os = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), RL = /* @__PURE__ */ f(() => {
  os.clear(), Pt.clear();
}, "clear"), pi = /* @__PURE__ */ f((e) => e ? typeof e == "string" ? e : e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles"), KT = /* @__PURE__ */ f(async (e, t) => {
  const r = gt();
  let i = Vt(r);
  const { labelStyles: o } = V(t);
  t.labelStyle = o;
  const s = e.insert("g").attr("class", "edgeLabel"), a = s.insert("g").attr("class", "label").attr("data-id", t.id), n = t.labelType === "markdown", c = await Ue(
    e,
    t.label,
    {
      style: pi(t.labelStyle),
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
  let h = c.getBBox(), d = h;
  if (i) {
    const u = c.children[0], g = ct(c);
    h = u.getBoundingClientRect(), d = h, g.attr("width", h.width), g.attr("height", h.height);
  } else {
    const u = ct(c).select("text").node();
    u && typeof u.getBBox == "function" && (d = u.getBBox());
  }
  a.attr("transform", ni(d, i)), os.set(t.id, s), t.width = h.width, t.height = h.height;
  let p;
  if (t.startLabelLeft) {
    const u = e.insert("g").attr("class", "edgeTerminals"), g = u.insert("g").attr("class", "inner"), m = await Ve(
      g,
      t.startLabelLeft,
      pi(t.labelStyle) || "",
      !1,
      !1
    );
    p = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", ni(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).startLeft = u, wi(p, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const u = e.insert("g").attr("class", "edgeTerminals"), g = u.insert("g").attr("class", "inner"), m = await Ve(
      g,
      t.startLabelRight,
      pi(t.labelStyle) || "",
      !1,
      !1
    );
    p = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", ni(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).startRight = u, wi(p, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const u = e.insert("g").attr("class", "edgeTerminals"), g = u.insert("g").attr("class", "inner"), m = await Ve(
      u,
      t.endLabelLeft,
      pi(t.labelStyle) || "",
      !1,
      !1
    );
    p = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", ni(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).endLeft = u, wi(p, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const u = e.insert("g").attr("class", "edgeTerminals"), g = u.insert("g").attr("class", "inner"), m = await Ve(
      u,
      t.endLabelRight,
      pi(t.labelStyle) || "",
      !1,
      !1
    );
    p = m;
    let y = m.getBBox();
    if (i) {
      const C = m.children[0], b = ct(m);
      y = C.getBoundingClientRect(), b.attr("width", y.width), b.attr("height", y.height);
    }
    g.attr("transform", ni(y, i)), Pt.get(t.id) || Pt.set(t.id, {}), Pt.get(t.id).endRight = u, wi(p, t.endLabelRight);
  }
  return c;
}, "insertEdgeLabel");
function wi(e, t) {
  Vt(gt()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
f(wi, "setTerminalWidth");
var QT = /* @__PURE__ */ f((e, t) => {
  P.debug("Moving label abc88 ", e.id, e.label, os.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = gt(), { subGraphTitleTotalMargin: o } = Un(i);
  if (e.label) {
    const s = os.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = me.calcLabelPosition(r);
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
    s.attr("transform", `translate(${a}, ${n + o / 2})`);
  }
  if (e.startLabelLeft) {
    const s = Pt.get(e.id).startLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = me.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    s.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const s = Pt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = me.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    s.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const s = Pt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = me.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    s.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const s = Pt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = me.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    s.attr("transform", `translate(${a}, ${n})`);
  }
}, "positionEdgeLabel"), JT = /* @__PURE__ */ f((e, t) => {
  const r = e.x, i = e.y, o = Math.abs(t.x - r), s = Math.abs(t.y - i), a = e.width / 2, n = e.height / 2;
  return o >= a || s >= n;
}, "outsideNode"), tS = /* @__PURE__ */ f((e, t, r) => {
  P.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, o = e.y, s = Math.abs(i - r.x), a = e.width / 2;
  let n = r.x < t.x ? a - s : a + s;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(o - t.y) * a > Math.abs(i - t.x) * l) {
    let d = r.y < t.y ? t.y - l - o : o - l - t.y;
    n = h * d / c;
    const p = {
      x: r.x < t.x ? r.x + n : r.x - h + n,
      y: r.y < t.y ? r.y + c - d : r.y - c + d
    };
    return n === 0 && (p.x = t.x, p.y = t.y), h === 0 && (p.x = t.x), c === 0 && (p.y = t.y), P.debug(`abc89 top/bottom calc, Q ${c}, q ${d}, R ${h}, r ${n}`, p), p;
  } else {
    r.x < t.x ? n = t.x - a - i : n = i - a - t.x;
    let d = c * n / h, p = r.x < t.x ? r.x + h - n : r.x - h + n, u = r.y < t.y ? r.y + d : r.y - d;
    return P.debug(`sides calc abc89, Q ${c}, q ${d}, R ${h}, r ${n}`, { _x: p, _y: u }), n === 0 && (p = t.x, u = t.y), h === 0 && (p = t.x), c === 0 && (u = t.y), { x: p, y: u };
  }
}, "intersection"), dc = /* @__PURE__ */ f((e, t) => {
  P.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], o = !1;
  return e.forEach((s) => {
    if (P.info("abc88 checking point", s, t), !JT(t, s) && !o) {
      const a = tS(t, i, s);
      P.debug("abc88 inside", s, i, a), P.debug("abc88 intersection", a, t);
      let n = !1;
      r.forEach((l) => {
        n = n || l.x === a.x && l.y === a.y;
      }), r.some((l) => l.x === a.x && l.y === a.y) ? P.warn("abc88 no intersect", a, r) : r.push(a), o = !0;
    } else
      P.warn("abc88 outside", s, i), i = s, o || r.push(s);
  }), P.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Xg(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const o = e[i - 1], s = e[i], a = e[i + 1];
    (o.x === s.x && s.y === a.y && Math.abs(s.x - a.x) > 5 && Math.abs(s.y - o.y) > 5 || o.y === s.y && s.x === a.x && Math.abs(s.x - o.x) > 5 && Math.abs(s.y - a.y) > 5) && (t.push(s), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
f(Xg, "extractCornerPoints");
var uc = /* @__PURE__ */ f(function(e, t, r) {
  const i = t.x - e.x, o = t.y - e.y, s = Math.sqrt(i * i + o * o), a = r / s;
  return { x: t.x - a * i, y: t.y - a * o };
}, "findAdjacentPoint"), eS = /* @__PURE__ */ f(function(e) {
  const { cornerPointPositions: t } = Xg(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const o = e[i - 1], s = e[i + 1], a = e[i], n = uc(o, a, 5), l = uc(s, a, 5), c = l.x - n.x, h = l.y - n.y;
      r.push(n);
      const d = Math.sqrt(2) * 2;
      let p = { x: a.x, y: a.y };
      if (Math.abs(s.x - o.x) > 10 && Math.abs(s.y - o.y) >= 10) {
        P.debug(
          "Corner point fixing",
          Math.abs(s.x - o.x),
          Math.abs(s.y - o.y)
        );
        const u = 5;
        a.x === n.x ? p = {
          x: c < 0 ? n.x - u + d : n.x + u - d,
          y: h < 0 ? n.y - d : n.y + d
        } : p = {
          x: c < 0 ? n.x - d : n.x + d,
          y: h < 0 ? n.y - u + d : n.y + u - d
        };
      } else
        P.debug(
          "Corner point skipping fixing",
          Math.abs(s.x - o.x),
          Math.abs(s.y - o.y)
        );
      r.push(p, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), rS = /* @__PURE__ */ f((e, t, r) => {
  const i = e - t - r, o = 2, s = 2, a = o + s, n = Math.floor(i / a), l = Array(n).fill(`${o} ${s}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), iS = /* @__PURE__ */ f(function(e, t, r, i, o, s, a, n = !1) {
  if (!a)
    throw new Error(
      `insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`
    );
  const { handDrawnSeed: l } = gt();
  let c = t.points, h = !1;
  const d = o;
  var p = s;
  const u = [];
  for (const E in t.cssCompiledStyles)
    Up(E) || u.push(t.cssCompiledStyles[E]);
  P.debug("UIO intersect check", t.points, p.x, d.x), p.intersect && d.intersect && !n && (c = c.slice(1, t.points.length - 1), c.unshift(d.intersect(c[0])), P.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    p,
    p.intersect(c[c.length - 1])
  ), c.push(p.intersect(c[c.length - 1])));
  const g = btoa(JSON.stringify(c));
  t.toCluster && (P.info("to cluster abc88", r.get(t.toCluster)), c = dc(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (P.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = dc(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((E) => !Number.isNaN(E.y));
  const y = ZT(t.curve);
  y !== "rounded" && (m = eS(m));
  let C = vi;
  switch (y) {
    case "linear":
      C = vi;
      break;
    case "basis":
      C = _a;
      break;
    case "cardinal":
      C = $d;
      break;
    case "bumpX":
      C = Ld;
      break;
    case "bumpY":
      C = Fd;
      break;
    case "catmullRom":
      C = Id;
      break;
    case "monotoneX":
      C = Wd;
      break;
    case "monotoneY":
      C = zd;
      break;
    case "natural":
      C = Yd;
      break;
    case "step":
      C = Ud;
      break;
    case "stepAfter":
      C = jd;
      break;
    case "stepBefore":
      C = Gd;
      break;
    case "rounded":
      C = vi;
      break;
    default:
      C = _a;
  }
  const { x: b, y: k } = Zk(t), T = $1().x(b).y(k).curve(C);
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
  let v, B = y === "rounded" ? Vg(Zg(m, t), 5) : T(m);
  const I = Array.isArray(t.style) ? t.style : [t.style];
  let N = I.find((E) => E?.startsWith("stroke:")), D = "";
  t.animate && (D = "edge-animation-fast"), t.animation && (D = "edge-animation-" + t.animation);
  let $ = !1;
  if (t.look === "handDrawn") {
    const E = G.svg(e);
    Object.assign([], m);
    const R = E.path(B, {
      roughness: 0.3,
      seed: l
    });
    S += " transition", v = ct(R).select("path").attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + S + (t.classes ? " " + t.classes : "") + (D ? " " + D : "")
    ).attr("style", I ? I.reduce((Y, Q) => Y + ";" + Q, "") : "");
    let H = v.attr("d");
    v.attr("d", H), e.node().appendChild(v.node());
  } else {
    const E = u.join(";"), R = I ? I.reduce((dt, it) => dt + it + ";", "") : "", H = (E ? E + ";" + R + ";" : R) + ";" + (I ? I.reduce((dt, it) => dt + ";" + it, "") : "");
    v = e.append("path").attr("d", B).attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + S + (t.classes ? " " + t.classes : "") + (D ? " " + D : "")
    ).attr("style", H), N = H.match(/stroke:([^;]+)/)?.[1], $ = t.animate === !0 || !!t.animation || E.includes("animation");
    const Y = v.node(), Q = typeof Y.getTotalLength == "function" ? Y.getTotalLength() : 0, ut = vh[t.arrowTypeStart] || 0, et = vh[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !$) {
      const it = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? rS(Q, ut, et) : `0 ${ut} ${Q - ut - et} ${et}`}; stroke-dashoffset: 0;`;
      v.attr("style", it + v.attr("style"));
    }
  }
  v.attr("data-edge", !0), v.attr("data-et", "edge"), v.attr("data-id", t.id), v.attr("data-points", g), v.attr("data-look", It(t.look)), t.showPoints && m.forEach((E) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", E.x).attr("cy", E.y);
  });
  let z = "";
  (gt().flowchart.arrowMarkerAbsolute || gt().state.arrowMarkerAbsolute) && (z = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, z = z.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), P.info("arrowTypeStart", t.arrowTypeStart), P.info("arrowTypeEnd", t.arrowTypeEnd);
  const W = !$ && t?.look === "neo";
  jT(v, t, z, a, i, W, N);
  const O = Math.floor(c.length / 2), F = c[O];
  me.isLabelCoordinateInPath(F, v.attr("d")) || (h = !0);
  let L = {};
  return h && (L.updatedPath = c), L.originalPath = t.points, L;
}, "insertEdge");
function Vg(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, o = 1e-5;
  for (let s = 0; s < i; s++) {
    const a = e[s], n = e[s - 1], l = e[s + 1];
    if (s === 0)
      r += `M${a.x},${a.y}`;
    else if (s === i - 1)
      r += `L${a.x},${a.y}`;
    else {
      const c = a.x - n.x, h = a.y - n.y, d = l.x - a.x, p = l.y - a.y, u = Math.hypot(c, h), g = Math.hypot(d, p);
      if (u < o || g < o) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const m = c / u, y = h / u, C = d / g, b = p / g, k = m * C + y * b, T = Math.max(-1, Math.min(1, k)), S = Math.acos(T);
      if (S < o || Math.abs(Math.PI - S) < o) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const v = Math.min(t / Math.sin(S / 2), u / 2, g / 2), B = a.x - m * v, I = a.y - y * v, N = a.x + C * v, D = a.y + b * v;
      r += `L${B},${I}`, r += `Q${a.x},${a.y} ${N},${D}`;
    }
  }
  return r;
}
f(Vg, "generateRoundedPath");
function en(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
f(en, "calculateDeltaAndAngle");
function Zg(e, t) {
  const r = e.map((o) => ({ ...o }));
  if (e.length >= 2 && Wt[t.arrowTypeStart]) {
    const o = Wt[t.arrowTypeStart], s = e[0], a = e[1], { angle: n } = en(s, a), l = o * Math.cos(n), c = o * Math.sin(n);
    r[0].x = s.x + l, r[0].y = s.y + c;
  }
  const i = e.length;
  if (i >= 2 && Wt[t.arrowTypeEnd]) {
    const o = Wt[t.arrowTypeEnd], s = e[i - 1], a = e[i - 2], { angle: n } = en(a, s), l = o * Math.cos(n), c = o * Math.sin(n);
    r[i - 1].x = s.x - l, r[i - 1].y = s.y - c;
  }
  return r;
}
f(Zg, "applyMarkerOffsetsToPoints");
var oS = /* @__PURE__ */ f((e, t, r, i) => {
  t.forEach((o) => {
    BS[o](e, r, i);
  });
}, "insertMarkers"), sS = /* @__PURE__ */ f((e, t, r) => {
  P.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", r + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
}, "extension"), aS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), nS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), lS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), hS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
}, "lollipop"), cS = /* @__PURE__ */ f((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "point"), dS = /* @__PURE__ */ f((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "circle"), uS = /* @__PURE__ */ f((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", r + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
}, "cross"), pS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), fS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { transitionColor: s } = o;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${s}`);
}, "barbNeo"), gS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), mS = /* @__PURE__ */ f((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const o = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  o.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), o.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), yS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), CS = /* @__PURE__ */ f((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const o = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  o.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), o.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), xS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s } = o;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${s}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${s}`);
}, "only_one_neo"), bS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s, mainBkg: a } = o, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${s}`).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${s}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${s}`).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${s}`);
}, "zero_or_one_neo"), kS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s } = o;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${s}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${s}`);
}, "one_or_more_neo"), wS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s, mainBkg: a } = o, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${s}`), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${s}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${s}`), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${s}`);
}, "zero_or_more_neo"), TS = /* @__PURE__ */ f((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), SS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s } = o;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${s}`).attr("viewBox", "0 0 25 20").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  ).attr("stroke-linejoin", "miter");
}, "requirement_arrow_neo"), _S = /* @__PURE__ */ f((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), vS = /* @__PURE__ */ f((e, t, r) => {
  const i = wt(), { themeVariables: o } = i, { strokeWidth: s } = o, a = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
  a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${s}`);
}, "requirement_contains_neo"), BS = {
  extension: sS,
  composition: aS,
  aggregation: nS,
  dependency: lS,
  lollipop: hS,
  point: cS,
  circle: dS,
  cross: uS,
  barb: pS,
  barbNeo: fS,
  only_one: gS,
  zero_or_one: mS,
  one_or_more: yS,
  zero_or_more: CS,
  only_one_neo: xS,
  zero_or_one_neo: bS,
  one_or_more_neo: kS,
  zero_or_more_neo: wS,
  requirement_arrow: TS,
  requirement_contains: _S,
  requirement_arrow_neo: SS,
  requirement_contains_neo: vS
}, LS = oS, FS = {
  common: zi,
  getConfig: wt,
  insertCluster: vT,
  insertEdge: iS,
  insertEdgeLabel: KT,
  insertMarkers: LS,
  insertNode: jg,
  interpolateToCurve: Nn,
  labelHelper: ot,
  log: P,
  positionEdgeLabel: QT
}, Pi = {}, Kg = /* @__PURE__ */ f((e) => {
  for (const t of e)
    Pi[t.name] = t;
}, "registerLayoutLoaders"), AS = /* @__PURE__ */ f(() => {
  Kg([
    {
      name: "dagre",
      loader: /* @__PURE__ */ f(async () => await import("./dagre-BM42HDAG-dMuAbxsZ.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ f(async () => await import("./cose-bilkent-S5V4N54A-36GB2yp1.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
AS();
var PL = /* @__PURE__ */ f(async (e, t) => {
  if (!(e.layoutAlgorithm in Pi))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  if (e.diagramId)
    for (const h of e.nodes) {
      const d = h.domId || h.id;
      h.domId = `${e.diagramId}-${d}`;
    }
  const r = Pi[e.layoutAlgorithm], i = await r.loader(), { theme: o, themeVariables: s } = e.config, { useGradient: a, gradientStart: n, gradientStop: l } = s, c = t.attr("id");
  if (t.append("defs").append("filter").attr("id", `${c}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${o?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${c}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${o?.includes("dark") ? "#FFFFFF" : "#000000"}`), a) {
    const h = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    h.append("svg:stop").attr("offset", "0%").attr("stop-color", n).attr("stop-opacity", 1), h.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
  }
  return i.render(e, t, FS, {
    algorithm: r.algorithm
  });
}, "render"), NL = /* @__PURE__ */ f((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in Pi)
    return e;
  if (t in Pi)
    return P.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), al = "comm", Qg = "rule", Jg = "decl", MS = "@media", ES = "@import", $S = "@supports", OS = "@namespace", rn = "@keyframes", tm = "@layer", IS = "@scope", em = Math.abs, nl = String.fromCharCode;
function rm(e) {
  return e.trim();
}
function vo(e, t, r) {
  return e.replace(t, r);
}
function DS(e, t, r) {
  return e.indexOf(t, r);
}
function Wr(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xr(e, t, r) {
  return e.slice(t, r);
}
function ve(e) {
  return e.length;
}
function im(e) {
  return e.length;
}
function uo(e, t) {
  return t.push(e), e;
}
var Ss = 1, Vr = 1, om = 0, le = 0, Lt = 0, Jr = "";
function ll(e, t, r, i, o, s, a, n) {
  return { value: e, root: t, parent: r, type: i, props: o, children: s, line: Ss, column: Vr, length: a, return: "", siblings: n };
}
function RS() {
  return Lt;
}
function PS() {
  return Lt = le > 0 ? Wr(Jr, --le) : 0, Vr--, Lt === 10 && (Vr = 1, Ss--), Lt;
}
function Ce() {
  return Lt = le < om ? Wr(Jr, le++) : 0, Vr++, Lt === 10 && (Vr = 1, Ss++), Lt;
}
function Ze() {
  return Wr(Jr, le);
}
function Bo() {
  return le;
}
function _s(e, t) {
  return Xr(Jr, e, t);
}
function Ni(e) {
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
function NS(e) {
  return Ss = Vr = 1, om = ve(Jr = e), le = 0, [];
}
function qS(e) {
  return Jr = "", e;
}
function aa(e) {
  return rm(_s(le - 1, on(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function WS(e) {
  for (; (Lt = Ze()) && Lt < 33; )
    Ce();
  return Ni(e) > 2 || Ni(Lt) > 3 ? "" : " ";
}
function zS(e, t) {
  for (; --t && Ce() && !(Lt < 48 || Lt > 102 || Lt > 57 && Lt < 65 || Lt > 70 && Lt < 97); )
    ;
  return _s(e, Bo() + (t < 6 && Ze() == 32 && Ce() == 32));
}
function on(e) {
  for (; Ce(); )
    switch (Lt) {
      // ] ) " '
      case e:
        return le;
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
        Ce();
        break;
    }
  return le;
}
function HS(e, t) {
  for (; Ce() && e + Lt !== 57; )
    if (e + Lt === 84 && Ze() === 47)
      break;
  return "/*" + _s(t, le - 1) + "*" + nl(e === 47 ? e : Ce());
}
function YS(e) {
  for (; !Ni(Ze()); )
    Ce();
  return _s(e, le);
}
function US(e) {
  return qS(Lo("", null, null, null, [""], e = NS(e), 0, [0], e));
}
function Lo(e, t, r, i, o, s, a, n, l) {
  for (var c = 0, h = 0, d = a, p = 0, u = 0, g = 0, m = 1, y = 1, C = 1, b = 0, k = "", T = o, S = s, v = i, B = k; y; )
    switch (g = b, b = Ce()) {
      // (
      case 40:
        if (g != 108 && Wr(B, d - 1) == 58) {
          DS(B += vo(aa(b), "&", "&\f"), "&\f", em(c ? n[c - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += aa(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += WS(g);
        break;
      // \
      case 92:
        B += zS(Bo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ze()) {
          case 42:
          case 47:
            uo(GS(HS(Ce(), Bo()), t, r, l), l), (Ni(g || 1) == 5 || Ni(Ze() || 1) == 5) && ve(B) && Xr(B, -1, void 0) !== " " && (B += " ");
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * m:
        n[c++] = ve(B) * C;
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
            C == -1 && (B = vo(B, /\f/g, "")), u > 0 && (ve(B) - d || m === 0 && g === 47) && uo(u > 32 ? fc(B + ";", i, r, d - 1, l) : fc(vo(B, " ", "") + ";", i, r, d - 2, l), l);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (uo(v = pc(B, t, r, c, h, o, n, k, T = [], S = [], d, s), s), b === 123)
              if (h === 0)
                Lo(B, t, v, v, T, s, d, n, S);
              else {
                switch (p) {
                  // c(ontainer)
                  case 99:
                    if (Wr(B, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Wr(B, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? Lo(e, v, v, i && uo(pc(e, v, v, 0, 0, o, n, k, o, T = [], d, S), S), o, S, d, n, i ? T : S) : Lo(B, v, v, v, [""], S, 0, n, S);
              }
        }
        c = h = u = 0, m = C = 1, k = B = "", d = a;
        break;
      // :
      case 58:
        d = 1 + ve(B), u = g;
      default:
        if (m < 1) {
          if (b == 123)
            --m;
          else if (b == 125 && m++ == 0 && PS() == 125)
            continue;
        }
        switch (B += nl(b), b * m) {
          // &
          case 38:
            C = h > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            n[c++] = (ve(B) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Ze() === 45 && (B += aa(Ce())), p = Ze(), h = d = ve(k = B += YS(Bo())), b++;
            break;
          // -
          case 45:
            g === 45 && ve(B) == 2 && (m = 0);
        }
    }
  return s;
}
function pc(e, t, r, i, o, s, a, n, l, c, h, d) {
  for (var p = o - 1, u = o === 0 ? s : [""], g = im(u), m = 0, y = 0, C = 0; m < i; ++m)
    for (var b = 0, k = Xr(e, p + 1, p = em(y = a[m])), T = e; b < g; ++b)
      (T = rm(y > 0 ? u[b] + " " + k : vo(k, /&\f/g, u[b]))) && (l[C++] = T);
  return ll(e, t, r, o === 0 ? Qg : n, l, c, h, d);
}
function GS(e, t, r, i) {
  return ll(e, t, r, al, nl(RS()), Xr(e, 2, -2), 0, i);
}
function fc(e, t, r, i, o) {
  return ll(e, t, r, Jg, Xr(e, 0, i), Xr(e, i + 1, -1), i, o);
}
function sn(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function jS(e, t, r, i) {
  switch (e.type) {
    case tm:
      if (e.children.length) break;
    case ES:
    case OS:
    case Jg:
      return e.return = e.return || e.value;
    case al:
      return "";
    case rn:
      return e.return = e.value + "{" + sn(e.children, i) + "}";
    case Qg:
      if (!ve(e.value = e.props.join(","))) return "";
  }
  return ve(r = sn(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function XS(e) {
  var t = im(e);
  return function(r, i, o, s) {
    for (var a = "", n = 0; n < t; n++)
      a += e[n](r, i, o, s) || "";
    return a;
  };
}
var sm = "c4", VS = /* @__PURE__ */ f((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), ZS = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./c4Diagram-AAUBKEIU-D4DIhSGA.js");
  return { id: sm, diagram: e };
}, "loader"), KS = {
  id: sm,
  detector: VS,
  loader: ZS
}, QS = KS, am = "flowchart", JS = /* @__PURE__ */ f((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), t_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bo64FUb9.js");
  return { id: am, diagram: e };
}, "loader"), e_ = {
  id: am,
  detector: JS,
  loader: t_
}, r_ = e_, nm = "flowchart-v2", i_ = /* @__PURE__ */ f((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), o_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bo64FUb9.js");
  return { id: nm, diagram: e };
}, "loader"), s_ = {
  id: nm,
  detector: i_,
  loader: o_
}, a_ = s_, lm = "er", n_ = /* @__PURE__ */ f((e) => /^\s*erDiagram/.test(e), "detector"), l_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./erDiagram-TEJ5UH35-BfaXEos6.js");
  return { id: lm, diagram: e };
}, "loader"), h_ = {
  id: lm,
  detector: n_,
  loader: l_
}, c_ = h_, hm = "gitGraph", d_ = /* @__PURE__ */ f((e) => /^\s*gitGraph/.test(e), "detector"), u_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-PVQCEYII-2IPjTDgk.js");
  return { id: hm, diagram: e };
}, "loader"), p_ = {
  id: hm,
  detector: d_,
  loader: u_
}, f_ = p_, cm = "gantt", g_ = /* @__PURE__ */ f((e) => /^\s*gantt/.test(e), "detector"), m_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./ganttDiagram-6RSMTGT7-BPHtzsRV.js");
  return { id: cm, diagram: e };
}, "loader"), y_ = {
  id: cm,
  detector: g_,
  loader: m_
}, C_ = y_, dm = "info", x_ = /* @__PURE__ */ f((e) => /^\s*info/.test(e), "detector"), b_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./infoDiagram-5YYISTIA-BJtgH389.js");
  return { id: dm, diagram: e };
}, "loader"), k_ = {
  id: dm,
  detector: x_,
  loader: b_
}, um = "pie", w_ = /* @__PURE__ */ f((e) => /^\s*pie/.test(e), "detector"), T_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./pieDiagram-4H26LBE5-Bvn3Tzh7.js");
  return { id: um, diagram: e };
}, "loader"), S_ = {
  id: um,
  detector: w_,
  loader: T_
}, pm = "quadrantChart", __ = /* @__PURE__ */ f((e) => /^\s*quadrantChart/.test(e), "detector"), v_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./quadrantDiagram-W4KKPZXB-Cn9ui5hr.js");
  return { id: pm, diagram: e };
}, "loader"), B_ = {
  id: pm,
  detector: __,
  loader: v_
}, L_ = B_, fm = "xychart", F_ = /* @__PURE__ */ f((e) => /^\s*xychart(-beta)?/.test(e), "detector"), A_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./xychartDiagram-2RQKCTM6-B_hr9ysG.js");
  return { id: fm, diagram: e };
}, "loader"), M_ = {
  id: fm,
  detector: F_,
  loader: A_
}, E_ = M_, gm = "requirement", $_ = /* @__PURE__ */ f((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), O_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./requirementDiagram-4Y6WPE33-BqtmPm7L.js");
  return { id: gm, diagram: e };
}, "loader"), I_ = {
  id: gm,
  detector: $_,
  loader: O_
}, D_ = I_, mm = "sequence", R_ = /* @__PURE__ */ f((e) => /^\s*sequenceDiagram/.test(e), "detector"), P_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./sequenceDiagram-3UESZ5HK-Eui6PAKs.js");
  return { id: mm, diagram: e };
}, "loader"), N_ = {
  id: mm,
  detector: R_,
  loader: P_
}, q_ = N_, ym = "class", W_ = /* @__PURE__ */ f((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), z_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./classDiagram-4FO5ZUOK-BmEjWrIj.js");
  return { id: ym, diagram: e };
}, "loader"), H_ = {
  id: ym,
  detector: W_,
  loader: z_
}, Y_ = H_, Cm = "classDiagram", U_ = /* @__PURE__ */ f((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), G_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./classDiagram-v2-Q7XG4LA2-BmEjWrIj.js");
  return { id: Cm, diagram: e };
}, "loader"), j_ = {
  id: Cm,
  detector: U_,
  loader: G_
}, X_ = j_, xm = "state", V_ = /* @__PURE__ */ f((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), Z_ = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./stateDiagram-AJRCARHV-CL89RxUj.js");
  return { id: xm, diagram: e };
}, "loader"), K_ = {
  id: xm,
  detector: V_,
  loader: Z_
}, Q_ = K_, bm = "stateDiagram", J_ = /* @__PURE__ */ f((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), tv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-BHNVJYJU-CfXPg50I.js");
  return { id: bm, diagram: e };
}, "loader"), ev = {
  id: bm,
  detector: J_,
  loader: tv
}, rv = ev, km = "journey", iv = /* @__PURE__ */ f((e) => /^\s*journey/.test(e), "detector"), ov = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./journeyDiagram-JHISSGLW-6MyVFOu7.js");
  return { id: km, diagram: e };
}, "loader"), sv = {
  id: km,
  detector: iv,
  loader: ov
}, av = sv, nv = /* @__PURE__ */ f((e, t, r) => {
  P.debug(`rendering svg for syntax error
`);
  const i = z1(t), o = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Kc(i, 100, 512, !0), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), o.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), o.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), o.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), wm = { draw: nv }, lv = wm, hv = {
  db: {},
  renderer: wm,
  parser: {
    parse: /* @__PURE__ */ f(() => {
    }, "parse")
  }
}, cv = hv, Tm = "flowchart-elk", dv = /* @__PURE__ */ f((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), uv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X-Bo64FUb9.js");
  return { id: Tm, diagram: e };
}, "loader"), pv = {
  id: Tm,
  detector: dv,
  loader: uv
}, fv = pv, Sm = "timeline", gv = /* @__PURE__ */ f((e) => /^\s*timeline/.test(e), "detector"), mv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./timeline-definition-PNZ67QCA-DkSOJ5QF.js");
  return { id: Sm, diagram: e };
}, "loader"), yv = {
  id: Sm,
  detector: gv,
  loader: mv
}, Cv = yv, _m = "mindmap", xv = /* @__PURE__ */ f((e) => /^\s*mindmap/.test(e), "detector"), bv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./mindmap-definition-RKZ34NQL-BFOBz8ib.js");
  return { id: _m, diagram: e };
}, "loader"), kv = {
  id: _m,
  detector: xv,
  loader: bv
}, wv = kv, vm = "kanban", Tv = /* @__PURE__ */ f((e) => /^\s*kanban/.test(e), "detector"), Sv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./kanban-definition-UN3LZRKU-CbwiSgLt.js");
  return { id: vm, diagram: e };
}, "loader"), _v = {
  id: vm,
  detector: Tv,
  loader: Sv
}, vv = _v, Bm = "sankey", Bv = /* @__PURE__ */ f((e) => /^\s*sankey(-beta)?/.test(e), "detector"), Lv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./sankeyDiagram-5OEKKPKP-eu2A_aPy.js");
  return { id: Bm, diagram: e };
}, "loader"), Fv = {
  id: Bm,
  detector: Bv,
  loader: Lv
}, Av = Fv, Lm = "packet", Mv = /* @__PURE__ */ f((e) => /^\s*packet(-beta)?/.test(e), "detector"), Ev = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./diagram-LMA3HP47-fDw2svrM.js");
  return { id: Lm, diagram: e };
}, "loader"), $v = {
  id: Lm,
  detector: Mv,
  loader: Ev
}, Fm = "radar", Ov = /* @__PURE__ */ f((e) => /^\s*radar-beta/.test(e), "detector"), Iv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./diagram-2AECGRRQ-CUVLgQza.js");
  return { id: Fm, diagram: e };
}, "loader"), Dv = {
  id: Fm,
  detector: Ov,
  loader: Iv
}, Am = "block", Rv = /* @__PURE__ */ f((e) => /^\s*block(-beta)?/.test(e), "detector"), Pv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./blockDiagram-GPEHLZMM-cJ-p07SC.js");
  return { id: Am, diagram: e };
}, "loader"), Nv = {
  id: Am,
  detector: Rv,
  loader: Pv
}, qv = Nv, Mm = "treeView", Wv = /* @__PURE__ */ f((e) => /^\s*treeView-beta/.test(e), "detector"), zv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./diagram-5GNKFQAL-D3WEB2I4.js");
  return { id: Mm, diagram: e };
}, "loader"), Hv = {
  id: Mm,
  detector: Wv,
  loader: zv
}, Yv = Hv, Em = "architecture", Uv = /* @__PURE__ */ f((e) => /^\s*architecture/.test(e), "detector"), Gv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./architectureDiagram-3BPJPVTR-B6SrVLxf.js");
  return { id: Em, diagram: e };
}, "loader"), jv = {
  id: Em,
  detector: Uv,
  loader: Gv
}, Xv = jv, $m = "eventmodeling", Vv = /* @__PURE__ */ f((e) => /^\s*eventmodeling/.test(e), "detector"), Zv = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./diagram-KO2AKTUF-B-iCb5aQ.js");
  return { id: $m, diagram: e };
}, "loader"), Kv = {
  id: $m,
  detector: Vv,
  loader: Zv
}, Qv = Kv, Om = "ishikawa", Jv = /* @__PURE__ */ f((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), tB = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./ishikawaDiagram-YF4QCWOH-Bb7OYn-3.js");
  return { id: Om, diagram: e };
}, "loader"), eB = {
  id: Om,
  detector: Jv,
  loader: tB
}, Im = "venn", rB = /* @__PURE__ */ f((e) => /^\s*venn-beta/.test(e), "detector"), iB = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./vennDiagram-CIIHVFJN-IgQ9Ry8A.js");
  return { id: Im, diagram: e };
}, "loader"), oB = {
  id: Im,
  detector: rB,
  loader: iB
}, sB = oB, Dm = "treemap", aB = /* @__PURE__ */ f((e) => /^\s*treemap/.test(e), "detector"), nB = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./diagram-OG6HWLK6-FUD2Jjap.js");
  return { id: Dm, diagram: e };
}, "loader"), lB = {
  id: Dm,
  detector: aB,
  loader: nB
}, Rm = "wardley-beta", hB = /* @__PURE__ */ f((e) => /^\s*wardley-beta/i.test(e), "detector"), cB = /* @__PURE__ */ f(async () => {
  const { diagram: e } = await import("./wardleyDiagram-YWT4CUSO-CC9WTQGu.js");
  return { id: Rm, diagram: e };
}, "loader"), dB = {
  id: Rm,
  detector: hB,
  loader: cB
}, uB = dB, gc = !1, vs = /* @__PURE__ */ f(() => {
  gc || (gc = !0, $o("error", cv, (e) => e.toLowerCase().trim() === "error"), $o(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ f(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ f(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ f(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ f(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), ca(fv, wv, Xv), ca(
    QS,
    vv,
    X_,
    Y_,
    c_,
    C_,
    k_,
    S_,
    D_,
    q_,
    a_,
    r_,
    Cv,
    f_,
    rv,
    Q_,
    av,
    L_,
    Av,
    $v,
    E_,
    qv,
    Qv,
    Yv,
    Dv,
    eB,
    lB,
    sB,
    uB
  ));
}, "addDiagrams"), pB = /* @__PURE__ */ f(async () => {
  P.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(gr).map(async ([r, { detector: i, loader: o }]) => {
      if (o)
        try {
          ga(r);
        } catch {
          try {
            const { diagram: s, id: a } = await o();
            $o(a, s, i);
          } catch (s) {
            throw P.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete gr[r], s;
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
}, "loadRegisteredDiagrams"), fB = "graphics-document document";
function Pm(e, t) {
  e.attr("role", fB), t !== "" && e.attr("aria-roledescription", t);
}
f(Pm, "setA11yDiagramInfo");
function Nm(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const o = `chart-desc-${i}`;
      e.attr("aria-describedby", o), e.insert("desc", ":first-child").attr("id", o).text(r);
    }
    if (t) {
      const o = `chart-title-${i}`;
      e.attr("aria-labelledby", o), e.insert("title", ":first-child").attr("id", o).text(t);
    }
  }
}
f(Nm, "addSVGa11yTitleDescription");
var an = class qm {
  constructor(t, r, i, o, s) {
    this.type = t, this.text = r, this.db = i, this.parser = o, this.renderer = s;
  }
  static {
    f(this, "Diagram");
  }
  static async fromText(t, r = {}) {
    const i = wt(), o = hn(t, i);
    t = G2(t) + `
`;
    try {
      ga(o);
    } catch {
      const c = ly(o);
      if (!c)
        throw new Dc(`Diagram ${o} not found.`);
      const { id: h, diagram: d } = await c();
      $o(h, d);
    }
    const { db: s, parser: a, renderer: n, init: l } = ga(o);
    return a.parser && (a.parser.yy = s), s.clear?.(), l?.(i), r.title && s.setDiagramTitle?.(r.title), await a.parse(t), new qm(o, t, s, a, n);
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
}, mc = [], gB = /* @__PURE__ */ f(() => {
  mc.forEach((e) => {
    e();
  }), mc = [];
}, "attachFunctions"), mB = /* @__PURE__ */ f((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function Wm(e) {
  const t = e.match(Ic);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = Vk(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: Xk
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
f(Wm, "extractFrontMatter");
var yB = /* @__PURE__ */ f((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), CB = /* @__PURE__ */ f((e) => {
  const { text: t, metadata: r } = Wm(e), { displayMode: i, title: o, config: s = {} } = r;
  return i && (s.gantt || (s.gantt = {}), s.gantt.displayMode = i), { title: o, config: s, text: t };
}, "processFrontmatter"), xB = /* @__PURE__ */ f((e) => {
  const t = me.detectInit(e) ?? {}, r = me.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: $2(e),
    directive: t
  };
}, "processDirectives");
function hl(e) {
  const t = yB(e), r = CB(t), i = xB(r.text), o = Yn(r.config, i.directive);
  return e = mB(i.text), {
    code: e,
    title: r.title,
    config: o
  };
}
f(hl, "preprocessDiagram");
function zm(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
f(zm, "toBase64");
var bB = 5e4, kB = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", wB = "sandbox", TB = "loose", SB = "http://www.w3.org/2000/svg", _B = "http://www.w3.org/1999/xlink", vB = "http://www.w3.org/1999/xhtml", BB = "100%", LB = "100%", FB = "border:0;margin:0;", AB = "margin:0", MB = "allow-top-navigation-by-user-activation allow-popups", EB = 'The "iframe" tag is not supported by your browser.', $B = ["foreignobject"], OB = ["dominant-baseline"];
function cl(e) {
  const t = hl(e);
  return Mo(), Iy(t.config ?? {}), t;
}
f(cl, "processAndSetConfigs");
async function Hm(e, t) {
  vs();
  try {
    const { code: r, config: i } = cl(e);
    return { diagramType: (await Um(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
f(Hm, "parse");
var yc = /* @__PURE__ */ f((e, t, r = []) => {
  const i = Wc(`{ ${r.join(" !important; ")} !important; }`);
  return `.${e} ${t} ${i}`;
}, "cssImportantStyles"), IB = /* @__PURE__ */ f((e, t = /* @__PURE__ */ new Map()) => {
  const r = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    r.cssRules.length
  ), e.altFontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    r.cssRules.length
  ), t instanceof Map) {
    const n = Vt(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      Mh(l.styles) || n.forEach((c) => {
        r.insertRule(
          yc(l.id, c, l.styles),
          r.cssRules.length
        );
      }), Mh(l.textStyles) || r.insertRule(
        yc(
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
      const o = new CSSStyleSheet();
      o.replaceSync(e.themeCSS), i = fa(o) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + fa(r);
}, "createCssStyles"), DB = /* @__PURE__ */ f((e, t) => sn(
  US(`${e}{${t}}`),
  XS([
    /* @__PURE__ */ f(function(i, o, s, a) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === rn)
          return;
        i.props = i.props.map((n) => n.startsWith(e) ? n : `${e} ${n}`);
      } else i.type.startsWith("@") && ([
        ...[
          MS,
          $S,
          tm,
          IS,
          "@container",
          "@starting-style"
        ],
        rn
        // needed for Mermaid's animation feature
      ].includes(i.type) || (P.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = al));
    }, "addNamespace"),
    jS
  ])
), "compileCSS"), RB = /* @__PURE__ */ f((e, t, r, i) => {
  const o = IB(e, r), s = tC(
    t,
    o,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return DB(i, s);
}, "createUserStyles"), PB = /* @__PURE__ */ f((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = xr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), NB = /* @__PURE__ */ f((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : LB, i = zm(`<body style="${AB}">${e}</body>`);
  return `<iframe style="width:${BB};height:${r};${FB}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${MB}">
  ${EB}
</iframe>`;
}, "putIntoIFrame"), Cc = /* @__PURE__ */ f((e, t, r, i, o) => {
  const s = e.append("div");
  s.attr("id", r), i && s.attr("style", i);
  const a = s.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", SB);
  return o && a.attr("xmlns:xlink", o), a.append("g"), e;
}, "appendDivSvgG");
function nn(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
f(nn, "sandboxedIframe");
var qB = /* @__PURE__ */ f((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), WB = /* @__PURE__ */ f(async function(e, t, r) {
  vs();
  const i = cl(t);
  t = i.code;
  const o = wt();
  P.debug(o), t.length > (o?.maxTextSize ?? bB) && (t = kB);
  const s = `#${e}`, a = "i" + e, n = "#" + a, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ f(() => {
    const W = ct(p ? n : c).node();
    W && "remove" in W && W.remove();
  }, "removeTempElements");
  let d = ct(document.body);
  const p = o.securityLevel === wB, u = o.securityLevel === TB, g = o.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), p) {
      const z = nn(ct(r), a);
      d = ct(z.nodes()[0].contentDocument.body), d.node().style.margin = "0";
    } else
      d = ct(r);
    Cc(d, e, l, `font-family: ${g}`, _B);
  } else {
    if (qB(document, e, l, a), p) {
      const z = nn(ct(document.body), a);
      d = ct(z.nodes()[0].contentDocument.body), d.node().style.margin = "0";
    } else
      d = ct("body");
    Cc(d, e, l);
  }
  let m, y;
  try {
    m = await an.fromText(t, { title: i.title });
  } catch (z) {
    if (o.suppressErrorRendering)
      throw h(), z;
    m = await an.fromText("error"), y = z;
  }
  const C = d.select(c).node(), b = m.type, k = C.firstChild, T = k.firstChild, S = m.renderer.getClasses?.(t, m), v = RB(o, b, S, s), B = document.createElement("style");
  B.innerHTML = v, k.insertBefore(B, T);
  try {
    await m.renderer.draw(t, e, "11.15.0", m);
  } catch (z) {
    throw o.suppressErrorRendering ? h() : lv.draw(t, e, "11.15.0"), z;
  }
  const I = d.select(`${c} svg`), N = m.db.getAccTitle?.(), D = m.db.getAccDescription?.();
  Gm(b, I, N, D), d.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", vB);
  let $ = d.select(c).node().innerHTML;
  if (P.debug("config.arrowMarkerAbsolute", o.arrowMarkerAbsolute), $ = PB($, p, Ye(o.arrowMarkerAbsolute)), p) {
    const z = d.select(c + " svg").node();
    $ = NB($, z);
  } else u || ($ = zr.sanitize($, {
    ADD_TAGS: $B,
    ADD_ATTR: OB,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (gB(), y)
    throw y;
  return h(), {
    diagramType: b,
    svg: $,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function Ym(e = {}) {
  const t = Et({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), $y(t), t?.theme && t.theme in Ne ? t.themeVariables = Ne[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = Ne.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? Ey(t) : zc();
  ln(r.logLevel), vs();
}
f(Ym, "initialize");
var Um = /* @__PURE__ */ f((e, t = {}) => {
  const { code: r } = hl(e);
  return an.fromText(r, t);
}, "getDiagramFromText");
function Gm(e, t, r, i) {
  Pm(t, e), Nm(t, r, i, t.attr("id"));
}
f(Gm, "addA11yInfo");
var kr = Object.freeze({
  render: WB,
  parse: Hm,
  getDiagramFromText: Um,
  initialize: Ym,
  getConfig: wt,
  setConfig: Hc,
  getSiteConfig: zc,
  updateSiteConfig: Oy,
  reset: /* @__PURE__ */ f(() => {
    Mo();
  }, "reset"),
  globalReset: /* @__PURE__ */ f(() => {
    Mo(Hr);
  }, "globalReset"),
  defaultConfig: Hr
});
ln(wt().logLevel);
Mo(wt());
var zB = /* @__PURE__ */ f((e, t, r) => {
  P.warn(e), Hn(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), jm = /* @__PURE__ */ f(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await HB(e);
  } catch (t) {
    if (Hn(t) && P.error(t.str), He.parseError && He.parseError(t), !e.suppressErrors)
      throw P.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), HB = /* @__PURE__ */ f(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = kr.getConfig();
  P.debug(`${e ? "" : "No "}Callback function found`);
  let o;
  if (r)
    o = r;
  else if (t)
    o = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  P.debug(`Found ${o.length} diagrams`), i?.startOnLoad !== void 0 && (P.debug("Start On Load: " + i?.startOnLoad), kr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const s = new me.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const n = [];
  for (const l of Array.from(o)) {
    if (P.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${s.next()}`;
    a = l.innerHTML, a = sf(me.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = me.detectInit(a);
    h && P.debug("Detected early reinit: ", h);
    try {
      const { svg: d, bindFunctions: p } = await Km(c, a, l);
      l.innerHTML = d, e && await e(c), p && p(l);
    } catch (d) {
      zB(d, n, He.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, "runThrowsErrors"), Xm = /* @__PURE__ */ f(function(e) {
  kr.initialize(e);
}, "initialize"), YB = /* @__PURE__ */ f(async function(e, t, r) {
  P.warn("mermaid.init is deprecated. Please use run instead."), e && Xm(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await jm(i);
}, "init"), UB = /* @__PURE__ */ f(async (e, {
  lazyLoad: t = !0
} = {}) => {
  vs(), ca(...e), t === !1 && await pB();
}, "registerExternalDiagrams"), Vm = /* @__PURE__ */ f(function() {
  if (He.startOnLoad) {
    const { startOnLoad: e } = kr.getConfig();
    e && He.run().catch((t) => P.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", Vm, !1);
var GB = /* @__PURE__ */ f(function(e) {
  He.parseError = e;
}, "setParseErrorHandler"), ss = [], na = !1, Zm = /* @__PURE__ */ f(async () => {
  if (!na) {
    for (na = !0; ss.length > 0; ) {
      const e = ss.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          P.error("Error executing queue", t);
        }
    }
    na = !1;
  }
}, "executeQueue"), jB = /* @__PURE__ */ f(async (e, t) => new Promise((r, i) => {
  const o = /* @__PURE__ */ f(() => new Promise((s, a) => {
    kr.parse(e, t).then(
      (n) => {
        s(n), r(n);
      },
      (n) => {
        P.error("Error parsing", n), He.parseError?.(n), a(n), i(n);
      }
    );
  }), "performCall");
  ss.push(o), Zm().catch(i);
}), "parse"), Km = /* @__PURE__ */ f((e, t, r) => new Promise((i, o) => {
  const s = /* @__PURE__ */ f(() => new Promise((a, n) => {
    kr.render(e, t, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        P.error("Error parsing", l), He.parseError?.(l), n(l), o(l);
      }
    );
  }), "performCall");
  ss.push(s), Zm().catch(o);
}), "render"), XB = /* @__PURE__ */ f(() => Object.keys(gr).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), He = {
  startOnLoad: !0,
  mermaidAPI: kr,
  parse: jB,
  render: Km,
  init: YB,
  run: jm,
  registerExternalDiagrams: UB,
  registerLayoutLoaders: Kg,
  initialize: Xm,
  parseError: void 0,
  contentLoaded: Vm,
  setParseErrorHandler: GB,
  detectType: hn,
  registerIconPacks: Jw,
  getRegisteredDiagramsMetadata: XB
}, po = He;
/*! Check if previously processed */
/*!
 * Wait for document loaded before starting the execution
 */
var VB = Object.defineProperty, ZB = Object.getOwnPropertyDescriptor, dl = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? ZB(t, r) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (o = (i ? a(t, r, o) : a(o)) || o);
  return i && o && VB(t, r, o), o;
};
let qi = class {
  theme = "default";
  value = "flowchart TD A[Christmas] -->|Get money| B(Go shopping) B --> C{Let me think} C -->|One| D[Laptop C -->|Two| E[iPhone] C -->|Three| F[fa:fa-car Car]";
};
dl([
  _c("Defines the color scheme or style used for the Mermaid diagram."),
  vc()
], qi.prototype, "theme", 2);
dl([
  _c("Contains the Mermaid diagram code itself."),
  vc()
], qi.prototype, "value", 2);
qi = dl([
  x0({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.mermaid#//MermaidWidgetSettings" })
], qi);
const KB = /* @__PURE__ */ bc({
  __name: "MermaidWidget",
  props: /* @__PURE__ */ d0({
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(e, { expose: t }) {
    const r = kc(e, "configv"), i = e, { id: o } = u0(i), s = El(y0.TINY_EMITTER), a = El(s0), l = m0().params.pageid || "", c = qs(1);
    class h extends ns {
      refresh() {
        m.value = Date.now(), Ws(() => {
          po.run({ nodes: g.value ? [g.value] : [] }).catch(() => {
          });
        });
      }
      zoom(b) {
        c.value = Math.max(0.1, Math.min(5, b)), g.value && (g.value.style.transform = `scale(${c.value})`, g.value.style.transformOrigin = "top left");
      }
    }
    const d = new h();
    t(d), $l(() => {
      o?.value && a.registerInstance(o.value, d, "MermaidWidget", l);
    }), p0(() => {
      o?.value && a.unregisterInstance(o.value);
    });
    const p = () => {
      o?.value && s.emit("widget:MermaidWidget:click", {
        type: "widget:MermaidWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, u = () => {
      o?.value && s.emit("widget:MermaidWidget:right_click", {
        type: "widget:MermaidWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, g = qs(null), m = qs(Date.now()), y = new qi();
    return $l(() => {
      r.value && Object.assign(r.value, { ...y, ...r.value });
    }), Ol(() => r.value.theme, async (C) => {
      po.initialize({
        theme: C
      }), m.value = Date.now(), await Ws();
      try {
        await po.run({
          nodes: g.value ? [g.value] : []
        });
      } catch {
      }
    }, { immediate: !0 }), Ol(() => r.value.value, async (C) => {
      m.value = Date.now(), await Ws();
      try {
        await po.run({
          nodes: g.value ? [g.value] : []
        });
      } catch {
      }
    }, { deep: !0, immediate: !0 }), (C, b) => (Tc(), wc("div", {
      ref_key: "container",
      ref: g,
      key: m.value,
      onClick: p,
      onContextmenu: f0(u, ["prevent"]),
      class: "w-full h-full"
    }, g0(r.value.value), 33));
  }
}), QB = { class: "settings_container" }, JB = /* @__PURE__ */ bc({
  __name: "MermaidWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = kc(e, "modelValue");
    return (r, i) => {
      const o = Il("VaTextarea"), s = Il("VaSelect");
      return Tc(), wc("div", QB, [
        Dl(o, {
          modelValue: t.value.value,
          "onUpdate:modelValue": i[0] || (i[0] = (a) => t.value.value = a),
          minRows: 10
        }, null, 8, ["modelValue"]),
        Dl(s, {
          modelValue: t.value.theme,
          "onUpdate:modelValue": i[1] || (i[1] = (a) => t.value.theme = a),
          options: ["default", "neutral", "dark", "forest", "base"]
        }, null, 8, ["modelValue"])
      ]);
    };
  }
}), tL = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [i, o] of t)
    r[i] = o;
  return r;
}, eL = /* @__PURE__ */ tL(JB, [["__scopeId", "data-v-ec161525"]]), rL = [
  {
    name: "Mermaid Clicked",
    type: "click",
    description: "Triggered when the mermaid widget is clicked",
    payloadType: Rl
  },
  {
    name: "Mermaid Right Clicked",
    type: "right_click",
    description: "Triggered when the mermaid widget is right-clicked",
    payloadType: Rl
  }
];
var iL = Object.defineProperty, oL = Object.getOwnPropertyDescriptor, ul = (e, t, r, i) => {
  for (var o = i > 1 ? void 0 : i ? oL(t, r) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (o = (i ? a(t, r, o) : a(o)) || o);
  return i && o && iL(t, r, o), o;
}, xc = (e, t) => (r, i) => t(r, i, e);
const Dr = "MermaidWidget";
let as = class {
  constructor(e, t) {
    this.events = e, this.actions = t;
  }
  type = Dr;
  component = KB;
  settingsComponent = eL;
  supportedDSTypes = [];
  icon = k0;
  name = "Mermaid";
  register() {
    this.events.registerWidget(Dr, rL), this.actions.registerWidgetType(Dr, ns, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Dr), this.actions.unregisterWidgetType(Dr);
  }
};
ul([
  l0()
], as.prototype, "register", 1);
ul([
  h0()
], as.prototype, "unregister", 1);
as = ul([
  c0({
    service: [b0],
    properties: { "widget.type": Dr }
  }),
  xc(0, Ml(a0)),
  xc(1, Ml(n0))
], as);
export {
  Qc as $,
  gL as A,
  Ke as B,
  F0 as C,
  wt as D,
  hC as E,
  Yn as F,
  qc as G,
  P2 as H,
  z1 as I,
  Xk as J,
  fy as K,
  Li as L,
  pL as M,
  ys as N,
  Hy as O,
  Zc as P,
  Jl as Q,
  $1 as R,
  _a as S,
  R2 as T,
  Wi as U,
  be as V,
  A as W,
  M as X,
  Ky as Y,
  F2 as Z,
  f as _,
  iC as a,
  iS as a$,
  F1 as a0,
  xh as a1,
  Ch as a2,
  SL as a3,
  xL as a4,
  wL as a5,
  kL as a6,
  yL as a7,
  Lr as a8,
  wn as a9,
  o2 as aA,
  m2 as aB,
  g2 as aC,
  f2 as aD,
  C2 as aE,
  y2 as aF,
  i2 as aG,
  Ep as aH,
  h2 as aI,
  n2 as aJ,
  a2 as aK,
  $p as aL,
  Zk as aM,
  Vt as aN,
  Ue as aO,
  ni as aP,
  Un as aQ,
  qp as aR,
  xr as aS,
  Yp as aT,
  Ac as aU,
  LS as aV,
  IL as aW,
  RL as aX,
  $L as aY,
  Z as aZ,
  OL as a_,
  TL as aa,
  CL as ab,
  vL as ac,
  _L as ad,
  bL as ae,
  vT as af,
  jg as ag,
  DL as ah,
  nt as ai,
  Le as aj,
  zn as ak,
  G as al,
  eT as am,
  Rn as an,
  In as ao,
  wo as ap,
  p2 as aq,
  u2 as ar,
  d2 as as,
  c2 as at,
  r2 as au,
  Ap as av,
  s2 as aw,
  e2 as ax,
  l2 as ay,
  Mp as az,
  rC as b,
  QT as b0,
  KT as b1,
  A1 as b2,
  uL as b3,
  S0 as b4,
  Xi as b5,
  Jw as b6,
  Qw as b7,
  Cn as b8,
  Xe as b9,
  uh as ba,
  hb as bb,
  Mi as bc,
  V as bd,
  Up as be,
  ee as bf,
  rb as bg,
  yn as bh,
  ud as bi,
  Yi as bj,
  gd as bk,
  mL as bl,
  L0 as bm,
  as as bn,
  KB as bo,
  eL as bp,
  gt as c,
  ct as d,
  Kc as e,
  Et as f,
  sC as g,
  ze as h,
  xe as i,
  Jk as j,
  zi as k,
  P as l,
  zp as m,
  fL as n,
  NL as o,
  aC as p,
  nC as q,
  PL as r,
  oC as s,
  Vk as t,
  me as u,
  GT as v,
  W2 as w,
  BL as x,
  zr as y,
  eC as z
};
