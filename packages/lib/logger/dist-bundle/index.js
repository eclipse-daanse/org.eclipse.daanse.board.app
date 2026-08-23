import { LOGGER_FACTORY as E, identifier as G } from "org.eclipse.daanse.board.app.lib.api.logger";
import { LOGGER_FACTORY as $, identifier as ee } from "org.eclipse.daanse.board.app.lib.api.logger";
function T(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var v = { exports: {} }, I, k;
function N() {
  if (k) return I;
  k = 1;
  var s = 1e3, o = s * 60, f = o * 60, r = f * 24, m = r * 7, h = r * 365.25;
  I = function(t, e) {
    e = e || {};
    var n = typeof t;
    if (n === "string" && t.length > 0)
      return g(t);
    if (n === "number" && isFinite(t))
      return e.long ? p(t) : b(t);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(t)
    );
  };
  function g(t) {
    if (t = String(t), !(t.length > 100)) {
      var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        t
      );
      if (e) {
        var n = parseFloat(e[1]), a = (e[2] || "ms").toLowerCase();
        switch (a) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return n * h;
          case "weeks":
          case "week":
          case "w":
            return n * m;
          case "days":
          case "day":
          case "d":
            return n * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * f;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * s;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;
          default:
            return;
        }
      }
    }
  }
  function b(t) {
    var e = Math.abs(t);
    return e >= r ? Math.round(t / r) + "d" : e >= f ? Math.round(t / f) + "h" : e >= o ? Math.round(t / o) + "m" : e >= s ? Math.round(t / s) + "s" : t + "ms";
  }
  function p(t) {
    var e = Math.abs(t);
    return e >= r ? i(t, e, r, "day") : e >= f ? i(t, e, f, "hour") : e >= o ? i(t, e, o, "minute") : e >= s ? i(t, e, s, "second") : t + " ms";
  }
  function i(t, e, n, a) {
    var c = e >= n * 1.5;
    return Math.round(t / n) + " " + a + (c ? "s" : "");
  }
  return I;
}
var A, M;
function P() {
  if (M) return A;
  M = 1;
  function s(o) {
    r.debug = r, r.default = r, r.coerce = i, r.disable = b, r.enable = h, r.enabled = p, r.humanize = N(), r.destroy = t, Object.keys(o).forEach((e) => {
      r[e] = o[e];
    }), r.names = [], r.skips = [], r.formatters = {};
    function f(e) {
      let n = 0;
      for (let a = 0; a < e.length; a++)
        n = (n << 5) - n + e.charCodeAt(a), n |= 0;
      return r.colors[Math.abs(n) % r.colors.length];
    }
    r.selectColor = f;
    function r(e) {
      let n, a = null, c, F;
      function u(...l) {
        if (!u.enabled)
          return;
        const d = u, y = Number(/* @__PURE__ */ new Date()), q = y - (n || y);
        d.diff = q, d.prev = n, d.curr = y, n = y, l[0] = r.coerce(l[0]), typeof l[0] != "string" && l.unshift("%O");
        let w = 0;
        l[0] = l[0].replace(/%([a-zA-Z%])/g, (_, z) => {
          if (_ === "%%")
            return "%";
          w++;
          const S = r.formatters[z];
          if (typeof S == "function") {
            const B = l[w];
            _ = S.call(d, B), l.splice(w, 1), w--;
          }
          return _;
        }), r.formatArgs.call(d, l), (d.log || r.log).apply(d, l);
      }
      return u.namespace = e, u.useColors = r.useColors(), u.color = r.selectColor(e), u.extend = m, u.destroy = r.destroy, Object.defineProperty(u, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => a !== null ? a : (c !== r.namespaces && (c = r.namespaces, F = r.enabled(e)), F),
        set: (l) => {
          a = l;
        }
      }), typeof r.init == "function" && r.init(u), u;
    }
    function m(e, n) {
      const a = r(this.namespace + (typeof n > "u" ? ":" : n) + e);
      return a.log = this.log, a;
    }
    function h(e) {
      r.save(e), r.namespaces = e, r.names = [], r.skips = [];
      const n = (typeof e == "string" ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const a of n)
        a[0] === "-" ? r.skips.push(a.slice(1)) : r.names.push(a);
    }
    function g(e, n) {
      let a = 0, c = 0, F = -1, u = 0;
      for (; a < e.length; )
        if (c < n.length && (n[c] === e[a] || n[c] === "*"))
          n[c] === "*" ? (F = c, u = a, c++) : (a++, c++);
        else if (F !== -1)
          c = F + 1, u++, a = u;
        else
          return !1;
      for (; c < n.length && n[c] === "*"; )
        c++;
      return c === n.length;
    }
    function b() {
      const e = [
        ...r.names,
        ...r.skips.map((n) => "-" + n)
      ].join(",");
      return r.enable(""), e;
    }
    function p(e) {
      for (const n of r.skips)
        if (g(e, n))
          return !1;
      for (const n of r.names)
        if (g(e, n))
          return !0;
      return !1;
    }
    function i(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }
    function t() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return A = s, A;
}
var j;
function J() {
  return j || (j = 1, (function(s, o) {
    var f = {};
    o.formatArgs = m, o.save = h, o.load = g, o.useColors = r, o.storage = b(), o.destroy = /* @__PURE__ */ (() => {
      let i = !1;
      return () => {
        i || (i = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), o.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function r() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let i;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (i = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(i[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function m(i) {
      if (i[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + i[0] + (this.useColors ? "%c " : " ") + "+" + s.exports.humanize(this.diff), !this.useColors)
        return;
      const t = "color: " + this.color;
      i.splice(1, 0, t, "color: inherit");
      let e = 0, n = 0;
      i[0].replace(/%[a-zA-Z%]/g, (a) => {
        a !== "%%" && (e++, a === "%c" && (n = e));
      }), i.splice(n, 0, t);
    }
    o.log = console.debug || console.log || (() => {
    });
    function h(i) {
      try {
        i ? o.storage.setItem("debug", i) : o.storage.removeItem("debug");
      } catch {
      }
    }
    function g() {
      let i;
      try {
        i = o.storage.getItem("debug") || o.storage.getItem("DEBUG");
      } catch {
      }
      return !i && typeof process < "u" && "env" in process && (i = f.DEBUG), i;
    }
    function b() {
      try {
        return localStorage;
      } catch {
      }
    }
    s.exports = P()(o);
    const { formatters: p } = s.exports;
    p.j = function(i) {
      try {
        return JSON.stringify(i);
      } catch (t) {
        return "[UnexpectedJSONParseError]: " + t.message;
      }
    };
  })(v, v.exports)), v.exports;
}
var U = J();
const C = /* @__PURE__ */ T(U);
C.log = console.log.bind(console);
if (typeof localStorage < "u") {
  const s = localStorage.getItem("debug");
  s && C.enable(s);
}
class x {
  /**
   * Create a namespaced logger
   * @param namespace The namespace for the logger (e.g., 'daanse:ogcsta:mqtt')
   */
  createLogger(o) {
    return C(o);
  }
  /**
   * Enable specific debug namespaces
   * @param namespaces Comma-separated list of namespaces (e.g., 'daanse:*,express:*')
   */
  enable(o) {
    typeof localStorage < "u" && localStorage.setItem("debug", o), C.enable(o);
  }
  /**
   * Disable all debug logging
   */
  disable() {
    typeof localStorage < "u" && localStorage.removeItem("debug"), C.disable();
  }
  /**
   * Check if a namespace is enabled
   * @param namespace The namespace to check
   */
  isEnabled(o) {
    return C(o).enabled;
  }
}
const O = new x();
function R({ services: s }) {
  s.register(E, O);
}
function D({ services: s }) {
  s.unregister(E);
}
typeof window < "u" && (window.__daanseLoggerFactory = O, window.__daanseDebug = C);
const Y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LOGGER_FACTORY: E,
  LoggerFactory: x,
  activate: R,
  deactivate: D,
  identifier: G,
  loggerFactory: O
}, Symbol.toStringTag, { value: "Module" })), L = "org.eclipse.daanse.board.app.lib.logger", Z = "0.0.1-next.1";
async function H(s) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${L}: tsm runtime is not initialized`);
  o.register(L, Y, Z, "lib.logger"), await R?.(s);
}
async function K(s) {
  await D?.(s);
}
export {
  $ as LOGGER_FACTORY,
  x as LoggerFactory,
  H as activate,
  K as deactivate,
  ee as identifier,
  O as loggerFactory
};
