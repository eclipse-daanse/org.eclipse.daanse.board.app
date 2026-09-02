(function(){var i="ui.vue.widget.routing",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".routing-widget{display:flex;flex-direction:column;height:100%;padding:.75rem;gap:.75rem;overflow-y:auto;font-family:inherit;font-size:.875rem}.routing-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem}.routing-title{font-weight:600;font-size:1rem;color:#c45e00}.costing-select{padding:.25rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;background:#fff}.waypoints-list{display:flex;flex-direction:column;gap:.5rem}.waypoint-row{display:flex;align-items:flex-start;gap:.5rem}.waypoint-dot{width:12px;height:12px;border-radius:50%;margin-top:1.4rem;flex-shrink:0}.waypoint-input-wrapper{flex:1;position:relative}.waypoint-label{display:block;font-size:.7rem;color:#888;margin-bottom:2px}.waypoint-input{width:100%;padding:.35rem .5rem;border:1px solid #ddd;border-radius:4px;font-size:.8rem;box-sizing:border-box}.waypoint-input:focus{outline:none;border-color:#c45e00}.suggestions-dropdown{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ddd;border-radius:0 0 4px 4px;z-index:100;max-height:200px;overflow-y:auto;box-shadow:0 4px 8px #0000001a}.suggestion-item{padding:.4rem .5rem;cursor:pointer;font-size:.75rem;border-bottom:1px solid #f0f0f0}.suggestion-item:hover{background:#fff3e0}.remove-btn{background:none;border:none;color:#999;font-size:1.2rem;cursor:pointer;padding:.2rem;margin-top:1.2rem;line-height:1}.remove-btn:hover{color:#f44336}.routing-actions{display:flex;gap:.5rem;flex-wrap:wrap}.btn-primary{padding:.4rem .75rem;background:#c45e00;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:.8rem;font-weight:500}.btn-primary:hover{background:#a04e00}.btn-primary:disabled{background:#ccc;cursor:not-allowed}.btn-secondary{padding:.4rem .75rem;background:#fff;color:#555;border:1px solid #ddd;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-secondary:hover{background:#f5f5f5}.btn-clear{padding:.4rem .75rem;background:#fff;color:#f44336;border:1px solid #ffcdd2;border-radius:4px;cursor:pointer;font-size:.8rem}.btn-clear:hover{background:#ffebee}.route-result{border-top:1px solid #e0e0e0;padding-top:.75rem}.result-summary{display:flex;gap:1rem;flex-wrap:wrap}.summary-item{display:flex;flex-direction:column}.summary-value{font-weight:600;font-size:1rem;color:#333}.summary-label{font-size:.7rem;color:#888}.maneuvers-section{margin-top:.75rem}.maneuvers-toggle{background:none;border:none;cursor:pointer;font-size:.8rem;color:#555;padding:.25rem 0;font-weight:500}.maneuvers-toggle:hover{color:#c45e00}.maneuvers-list{margin-top:.5rem;display:flex;flex-direction:column;gap:.25rem}.maneuver-item{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;padding:.3rem 0;border-bottom:1px solid #f5f5f5;font-size:.75rem}.maneuver-instruction{flex:1;color:#333}.maneuver-distance{color:#888;white-space:nowrap}.routing-settings[data-v-79a5860e]{display:flex;flex-direction:column;gap:.75rem;padding:.5rem}\n";})();
import { EVENT_ACTIONS_REGISTRY as Pd, EVENT_REGISTRY_ID as Dd } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Fd, deactivate as Md, component as Bd, inject as Ud } from "@eclipse-daanse/tsm";
import { defineComponent as Xo, toRefs as Jo, inject as ou, ref as pe, watch as St, computed as au, onMounted as Nd, onUnmounted as $d, createElementBlock as yn, openBlock as xn, createElementVNode as Z, createCommentVNode as rt, withDirectives as Yo, Fragment as Cr, renderList as Sr, toDisplayString as Gn, vModelSelect as Gd, normalizeStyle as Hd, vModelText as qd, withModifiers as Kd, resolveComponent as zd, unref as lu, createVNode as Yd } from "vue";
import { useRoute as Zd } from "vue-router";
import { useDatasourceRepository as Xd } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as Lt, WidgetActionInterface as Qd, Payload as su } from "org.eclipse.daanse.board.app.lib.events";
import { Documentation as sn, ModelClass as cu, Attribute as de } from "org.eclipse.daanse.board.app.lib.annotations";
import { SET_WAYPOINTS as Vd } from "org.eclipse.daanse.board.app.lib.datasource.valhalla";
import { WIDGET_SERVICE_ID as kd } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Jd } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), jd = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3ccircle%20cx='6'%20cy='19'%20r='3'/%3e%3ccircle%20cx='18'%20cy='5'%20r='3'/%3e%3cpath%20d='M12%2019h4.5a3.5%203.5%200%200%200%200-7h-9a3.5%203.5%200%200%201%200-7H12'/%3e%3c/svg%3e";
var n_ = Object.defineProperty, e_ = Object.getOwnPropertyDescriptor, it = (H, B, o, U) => {
  for (var T = U > 1 ? void 0 : U ? e_(B, o) : B, M = H.length - 1, D; M >= 0; M--)
    (D = H[M]) && (T = (U ? D(B, o, T) : D(T)) || T);
  return U && T && n_(B, o, T), T;
};
let Se = class extends Qd {
  addWaypoint(H, B, o) {
    throw new Error("addWaypoint not implemented");
  }
  removeWaypoint(H) {
    throw new Error("removeWaypoint not implemented");
  }
  clearWaypoints() {
    throw new Error("clearWaypoints not implemented");
  }
  setCosting(H) {
    throw new Error("setCosting not implemented");
  }
  calculateRoute() {
    throw new Error("calculateRoute not implemented");
  }
};
it([
  sn("Adds a waypoint to the route."),
  Lt({ eventType: "routing.addWaypoint" })
], Se.prototype, "addWaypoint", 1);
it([
  sn("Removes a waypoint at a given index."),
  Lt({ eventType: "routing.removeWaypoint" })
], Se.prototype, "removeWaypoint", 1);
it([
  sn("Removes all waypoints and clears the current route."),
  Lt({ eventType: "routing.clearWaypoints" })
], Se.prototype, "clearWaypoints", 1);
it([
  sn("Sets the transport mode for routing."),
  Lt({ eventType: "routing.setCosting" })
], Se.prototype, "setCosting", 1);
it([
  sn("Triggers route calculation with current waypoints."),
  Lt({ eventType: "routing.calculateRoute" })
], Se.prototype, "calculateRoute", 1);
Se = it([
  sn("Abstract base class for Routing Widget operations."),
  cu({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//RoutingWidgetInterface" })
], Se);
var t_ = Object.defineProperty, r_ = Object.getOwnPropertyDescriptor, ut = (H, B, o, U) => {
  for (var T = U > 1 ? void 0 : U ? r_(B, o) : B, M = H.length - 1, D; M >= 0; M--)
    (D = H[M]) && (T = (U ? D(B, o, T) : D(T)) || T);
  return U && T && t_(B, o, T), T;
};
let ge = class extends su {
  geojson;
  distance_km;
  duration_min;
  waypoints;
  costing;
};
ut([
  sn("GeoJSON FeatureCollection of the route."),
  de()
], ge.prototype, "geojson", 2);
ut([
  sn("Total route distance in kilometers."),
  de()
], ge.prototype, "distance_km", 2);
ut([
  sn("Total route duration in minutes."),
  de()
], ge.prototype, "duration_min", 2);
ut([
  sn("Array of waypoints used for the route."),
  de()
], ge.prototype, "waypoints", 2);
ut([
  sn("Transport mode used for the route."),
  de()
], ge.prototype, "costing", 2);
ge = ut([
  sn("Payload emitted when a route has been calculated."),
  cu({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//RouteCalculatedPayload" })
], ge);
var i_ = Object.defineProperty, u_ = Object.getOwnPropertyDescriptor, Wt = (H, B, o, U) => {
  for (var T = U > 1 ? void 0 : U ? u_(B, o) : B, M = H.length - 1, D; M >= 0; M--)
    (D = H[M]) && (T = (U ? D(B, o, T) : D(T)) || T);
  return U && T && i_(B, o, T), T;
};
let ne = class extends su {
  lat;
  lon;
  name;
  index;
};
Wt([
  sn("Latitude of the waypoint."),
  de()
], ne.prototype, "lat", 2);
Wt([
  sn("Longitude of the waypoint."),
  de()
], ne.prototype, "lon", 2);
Wt([
  sn("Display name of the waypoint."),
  de()
], ne.prototype, "name", 2);
Wt([
  sn("Index of the waypoint in the list."),
  de()
], ne.prototype, "index", 2);
ne = Wt([
  sn("Payload emitted when a waypoint is added or removed."),
  cu({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.routing#//WaypointPayload" })
], ne);
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Et = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var f_ = Et.exports, Zo;
function o_() {
  return Zo || (Zo = 1, (function(H, B) {
    (function() {
      var o, U = "4.17.21", T = 200, M = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", D = "Expected a function", $e = "Invalid `variable` option passed into `_.template`", Ot = "__lodash_hash_undefined__", Or = 500, An = "__lodash_placeholder__", $ = 1, Wn = 2, on = 4, Hn = 1, ee = 2, nn = 1, un = 2, Ee = 4, Rn = 8, _e = 16, qn = 32, ve = 64, Kn = 128, Le = 256, Ge = 512, br = 30, Pr = "...", Dr = 800, Fr = 16, bt = 1, Pt = 2, Mr = 3, te = 1 / 0, On = 9007199254740991, Dt = 17976931348623157e292, We = NaN, bn = 4294967295, Br = bn - 1, Ur = bn >>> 1, Ft = [
        ["ary", Kn],
        ["bind", nn],
        ["bindKey", un],
        ["curry", Rn],
        ["curryRight", _e],
        ["flip", Ge],
        ["partial", qn],
        ["partialRight", ve],
        ["rearg", Le]
      ], v = "[object Arguments]", m = "[object Array]", E = "[object AsyncFunction]", K = "[object Boolean]", en = "[object Date]", Nr = "[object DOMException]", ft = "[object Error]", Mt = "[object Function]", pu = "[object GeneratorFunction]", zn = "[object Map]", ot = "[object Number]", Qo = "[object Null]", re = "[object Object]", gu = "[object Promise]", Vo = "[object Proxy]", at = "[object RegExp]", Yn = "[object Set]", lt = "[object String]", Bt = "[object Symbol]", ko = "[object Undefined]", st = "[object WeakMap]", jo = "[object WeakSet]", ct = "[object ArrayBuffer]", He = "[object DataView]", $r = "[object Float32Array]", Gr = "[object Float64Array]", Hr = "[object Int8Array]", qr = "[object Int16Array]", Kr = "[object Int32Array]", zr = "[object Uint8Array]", Yr = "[object Uint8ClampedArray]", Zr = "[object Uint16Array]", Xr = "[object Uint32Array]", na = /\b__p \+= '';/g, ea = /\b(__p \+=) '' \+/g, ta = /(__e\(.*?\)|\b__t\)) \+\n'';/g, du = /&(?:amp|lt|gt|quot|#39);/g, _u = /[&<>"']/g, ra = RegExp(du.source), ia = RegExp(_u.source), ua = /<%-([\s\S]+?)%>/g, fa = /<%([\s\S]+?)%>/g, vu = /<%=([\s\S]+?)%>/g, oa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, aa = /^\w*$/, la = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Jr = /[\\^$.*+?()[\]{}|]/g, sa = RegExp(Jr.source), Qr = /^\s+/, ca = /\s/, ha = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, pa = /\{\n\/\* \[wrapped with (.+)\] \*/, ga = /,? & /, da = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, _a = /[()=,{}\[\]\/\s]/, va = /\\(\\)?/g, wa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, wu = /\w*$/, ma = /^[-+]0x[0-9a-f]+$/i, ya = /^0b[01]+$/i, xa = /^\[object .+?Constructor\]$/, Aa = /^0o[0-7]+$/i, Ra = /^(?:0|[1-9]\d*)$/, Ia = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ut = /($^)/, Ta = /['\n\r\u2028\u2029\\]/g, Nt = "\\ud800-\\udfff", Ca = "\\u0300-\\u036f", Sa = "\\ufe20-\\ufe2f", Ea = "\\u20d0-\\u20ff", mu = Ca + Sa + Ea, yu = "\\u2700-\\u27bf", xu = "a-z\\xdf-\\xf6\\xf8-\\xff", La = "\\xac\\xb1\\xd7\\xf7", Wa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Oa = "\\u2000-\\u206f", ba = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Au = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ru = "\\ufe0e\\ufe0f", Iu = La + Wa + Oa + ba, Vr = "['’]", Pa = "[" + Nt + "]", Tu = "[" + Iu + "]", $t = "[" + mu + "]", Cu = "\\d+", Da = "[" + yu + "]", Su = "[" + xu + "]", Eu = "[^" + Nt + Iu + Cu + yu + xu + Au + "]", kr = "\\ud83c[\\udffb-\\udfff]", Fa = "(?:" + $t + "|" + kr + ")", Lu = "[^" + Nt + "]", jr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ni = "[\\ud800-\\udbff][\\udc00-\\udfff]", qe = "[" + Au + "]", Wu = "\\u200d", Ou = "(?:" + Su + "|" + Eu + ")", Ma = "(?:" + qe + "|" + Eu + ")", bu = "(?:" + Vr + "(?:d|ll|m|re|s|t|ve))?", Pu = "(?:" + Vr + "(?:D|LL|M|RE|S|T|VE))?", Du = Fa + "?", Fu = "[" + Ru + "]?", Ba = "(?:" + Wu + "(?:" + [Lu, jr, ni].join("|") + ")" + Fu + Du + ")*", Ua = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Na = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Mu = Fu + Du + Ba, $a = "(?:" + [Da, jr, ni].join("|") + ")" + Mu, Ga = "(?:" + [Lu + $t + "?", $t, jr, ni, Pa].join("|") + ")", Ha = RegExp(Vr, "g"), qa = RegExp($t, "g"), ei = RegExp(kr + "(?=" + kr + ")|" + Ga + Mu, "g"), Ka = RegExp([
        qe + "?" + Su + "+" + bu + "(?=" + [Tu, qe, "$"].join("|") + ")",
        Ma + "+" + Pu + "(?=" + [Tu, qe + Ou, "$"].join("|") + ")",
        qe + "?" + Ou + "+" + bu,
        qe + "+" + Pu,
        Na,
        Ua,
        Cu,
        $a
      ].join("|"), "g"), za = RegExp("[" + Wu + Nt + mu + Ru + "]"), Ya = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Za = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], Xa = -1, X = {};
      X[$r] = X[Gr] = X[Hr] = X[qr] = X[Kr] = X[zr] = X[Yr] = X[Zr] = X[Xr] = !0, X[v] = X[m] = X[ct] = X[K] = X[He] = X[en] = X[ft] = X[Mt] = X[zn] = X[ot] = X[re] = X[at] = X[Yn] = X[lt] = X[st] = !1;
      var Y = {};
      Y[v] = Y[m] = Y[ct] = Y[He] = Y[K] = Y[en] = Y[$r] = Y[Gr] = Y[Hr] = Y[qr] = Y[Kr] = Y[zn] = Y[ot] = Y[re] = Y[at] = Y[Yn] = Y[lt] = Y[Bt] = Y[zr] = Y[Yr] = Y[Zr] = Y[Xr] = !0, Y[ft] = Y[Mt] = Y[st] = !1;
      var Ja = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Qa = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Va = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, ka = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, ja = parseFloat, nl = parseInt, Bu = typeof Er == "object" && Er && Er.Object === Object && Er, el = typeof self == "object" && self && self.Object === Object && self, an = Bu || el || Function("return this")(), ti = B && !B.nodeType && B, Oe = ti && !0 && H && !H.nodeType && H, Uu = Oe && Oe.exports === ti, ri = Uu && Bu.process, Pn = (function() {
        try {
          var s = Oe && Oe.require && Oe.require("util").types;
          return s || ri && ri.binding && ri.binding("util");
        } catch {
        }
      })(), Nu = Pn && Pn.isArrayBuffer, $u = Pn && Pn.isDate, Gu = Pn && Pn.isMap, Hu = Pn && Pn.isRegExp, qu = Pn && Pn.isSet, Ku = Pn && Pn.isTypedArray;
      function In(s, p, h) {
        switch (h.length) {
          case 0:
            return s.call(p);
          case 1:
            return s.call(p, h[0]);
          case 2:
            return s.call(p, h[0], h[1]);
          case 3:
            return s.call(p, h[0], h[1], h[2]);
        }
        return s.apply(p, h);
      }
      function tl(s, p, h, y) {
        for (var C = -1, N = s == null ? 0 : s.length; ++C < N; ) {
          var tn = s[C];
          p(y, tn, h(tn), s);
        }
        return y;
      }
      function Dn(s, p) {
        for (var h = -1, y = s == null ? 0 : s.length; ++h < y && p(s[h], h, s) !== !1; )
          ;
        return s;
      }
      function rl(s, p) {
        for (var h = s == null ? 0 : s.length; h-- && p(s[h], h, s) !== !1; )
          ;
        return s;
      }
      function zu(s, p) {
        for (var h = -1, y = s == null ? 0 : s.length; ++h < y; )
          if (!p(s[h], h, s))
            return !1;
        return !0;
      }
      function we(s, p) {
        for (var h = -1, y = s == null ? 0 : s.length, C = 0, N = []; ++h < y; ) {
          var tn = s[h];
          p(tn, h, s) && (N[C++] = tn);
        }
        return N;
      }
      function Gt(s, p) {
        var h = s == null ? 0 : s.length;
        return !!h && Ke(s, p, 0) > -1;
      }
      function ii(s, p, h) {
        for (var y = -1, C = s == null ? 0 : s.length; ++y < C; )
          if (h(p, s[y]))
            return !0;
        return !1;
      }
      function J(s, p) {
        for (var h = -1, y = s == null ? 0 : s.length, C = Array(y); ++h < y; )
          C[h] = p(s[h], h, s);
        return C;
      }
      function me(s, p) {
        for (var h = -1, y = p.length, C = s.length; ++h < y; )
          s[C + h] = p[h];
        return s;
      }
      function ui(s, p, h, y) {
        var C = -1, N = s == null ? 0 : s.length;
        for (y && N && (h = s[++C]); ++C < N; )
          h = p(h, s[C], C, s);
        return h;
      }
      function il(s, p, h, y) {
        var C = s == null ? 0 : s.length;
        for (y && C && (h = s[--C]); C--; )
          h = p(h, s[C], C, s);
        return h;
      }
      function fi(s, p) {
        for (var h = -1, y = s == null ? 0 : s.length; ++h < y; )
          if (p(s[h], h, s))
            return !0;
        return !1;
      }
      var ul = oi("length");
      function fl(s) {
        return s.split("");
      }
      function ol(s) {
        return s.match(da) || [];
      }
      function Yu(s, p, h) {
        var y;
        return h(s, function(C, N, tn) {
          if (p(C, N, tn))
            return y = N, !1;
        }), y;
      }
      function Ht(s, p, h, y) {
        for (var C = s.length, N = h + (y ? 1 : -1); y ? N-- : ++N < C; )
          if (p(s[N], N, s))
            return N;
        return -1;
      }
      function Ke(s, p, h) {
        return p === p ? ml(s, p, h) : Ht(s, Zu, h);
      }
      function al(s, p, h, y) {
        for (var C = h - 1, N = s.length; ++C < N; )
          if (y(s[C], p))
            return C;
        return -1;
      }
      function Zu(s) {
        return s !== s;
      }
      function Xu(s, p) {
        var h = s == null ? 0 : s.length;
        return h ? li(s, p) / h : We;
      }
      function oi(s) {
        return function(p) {
          return p == null ? o : p[s];
        };
      }
      function ai(s) {
        return function(p) {
          return s == null ? o : s[p];
        };
      }
      function Ju(s, p, h, y, C) {
        return C(s, function(N, tn, z) {
          h = y ? (y = !1, N) : p(h, N, tn, z);
        }), h;
      }
      function ll(s, p) {
        var h = s.length;
        for (s.sort(p); h--; )
          s[h] = s[h].value;
        return s;
      }
      function li(s, p) {
        for (var h, y = -1, C = s.length; ++y < C; ) {
          var N = p(s[y]);
          N !== o && (h = h === o ? N : h + N);
        }
        return h;
      }
      function si(s, p) {
        for (var h = -1, y = Array(s); ++h < s; )
          y[h] = p(h);
        return y;
      }
      function sl(s, p) {
        return J(p, function(h) {
          return [h, s[h]];
        });
      }
      function Qu(s) {
        return s && s.slice(0, nf(s) + 1).replace(Qr, "");
      }
      function Tn(s) {
        return function(p) {
          return s(p);
        };
      }
      function ci(s, p) {
        return J(p, function(h) {
          return s[h];
        });
      }
      function ht(s, p) {
        return s.has(p);
      }
      function Vu(s, p) {
        for (var h = -1, y = s.length; ++h < y && Ke(p, s[h], 0) > -1; )
          ;
        return h;
      }
      function ku(s, p) {
        for (var h = s.length; h-- && Ke(p, s[h], 0) > -1; )
          ;
        return h;
      }
      function cl(s, p) {
        for (var h = s.length, y = 0; h--; )
          s[h] === p && ++y;
        return y;
      }
      var hl = ai(Ja), pl = ai(Qa);
      function gl(s) {
        return "\\" + ka[s];
      }
      function dl(s, p) {
        return s == null ? o : s[p];
      }
      function ze(s) {
        return za.test(s);
      }
      function _l(s) {
        return Ya.test(s);
      }
      function vl(s) {
        for (var p, h = []; !(p = s.next()).done; )
          h.push(p.value);
        return h;
      }
      function hi(s) {
        var p = -1, h = Array(s.size);
        return s.forEach(function(y, C) {
          h[++p] = [C, y];
        }), h;
      }
      function ju(s, p) {
        return function(h) {
          return s(p(h));
        };
      }
      function ye(s, p) {
        for (var h = -1, y = s.length, C = 0, N = []; ++h < y; ) {
          var tn = s[h];
          (tn === p || tn === An) && (s[h] = An, N[C++] = h);
        }
        return N;
      }
      function qt(s) {
        var p = -1, h = Array(s.size);
        return s.forEach(function(y) {
          h[++p] = y;
        }), h;
      }
      function wl(s) {
        var p = -1, h = Array(s.size);
        return s.forEach(function(y) {
          h[++p] = [y, y];
        }), h;
      }
      function ml(s, p, h) {
        for (var y = h - 1, C = s.length; ++y < C; )
          if (s[y] === p)
            return y;
        return -1;
      }
      function yl(s, p, h) {
        for (var y = h + 1; y--; )
          if (s[y] === p)
            return y;
        return y;
      }
      function Ye(s) {
        return ze(s) ? Al(s) : ul(s);
      }
      function Zn(s) {
        return ze(s) ? Rl(s) : fl(s);
      }
      function nf(s) {
        for (var p = s.length; p-- && ca.test(s.charAt(p)); )
          ;
        return p;
      }
      var xl = ai(Va);
      function Al(s) {
        for (var p = ei.lastIndex = 0; ei.test(s); )
          ++p;
        return p;
      }
      function Rl(s) {
        return s.match(ei) || [];
      }
      function Il(s) {
        return s.match(Ka) || [];
      }
      var Tl = (function s(p) {
        p = p == null ? an : Ze.defaults(an.Object(), p, Ze.pick(an, Za));
        var h = p.Array, y = p.Date, C = p.Error, N = p.Function, tn = p.Math, z = p.Object, pi = p.RegExp, Cl = p.String, Fn = p.TypeError, Kt = h.prototype, Sl = N.prototype, Xe = z.prototype, zt = p["__core-js_shared__"], Yt = Sl.toString, q = Xe.hasOwnProperty, El = 0, ef = (function() {
          var n = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
          return n ? "Symbol(src)_1." + n : "";
        })(), Zt = Xe.toString, Ll = Yt.call(z), Wl = an._, Ol = pi(
          "^" + Yt.call(q).replace(Jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Xt = Uu ? p.Buffer : o, xe = p.Symbol, Jt = p.Uint8Array, tf = Xt ? Xt.allocUnsafe : o, Qt = ju(z.getPrototypeOf, z), rf = z.create, uf = Xe.propertyIsEnumerable, Vt = Kt.splice, ff = xe ? xe.isConcatSpreadable : o, pt = xe ? xe.iterator : o, be = xe ? xe.toStringTag : o, kt = (function() {
          try {
            var n = Be(z, "defineProperty");
            return n({}, "", {}), n;
          } catch {
          }
        })(), bl = p.clearTimeout !== an.clearTimeout && p.clearTimeout, Pl = y && y.now !== an.Date.now && y.now, Dl = p.setTimeout !== an.setTimeout && p.setTimeout, jt = tn.ceil, nr = tn.floor, gi = z.getOwnPropertySymbols, Fl = Xt ? Xt.isBuffer : o, of = p.isFinite, Ml = Kt.join, Bl = ju(z.keys, z), rn = tn.max, cn = tn.min, Ul = y.now, Nl = p.parseInt, af = tn.random, $l = Kt.reverse, di = Be(p, "DataView"), gt = Be(p, "Map"), _i = Be(p, "Promise"), Je = Be(p, "Set"), dt = Be(p, "WeakMap"), _t = Be(z, "create"), er = dt && new dt(), Qe = {}, Gl = Ue(di), Hl = Ue(gt), ql = Ue(_i), Kl = Ue(Je), zl = Ue(dt), tr = xe ? xe.prototype : o, vt = tr ? tr.valueOf : o, lf = tr ? tr.toString : o;
        function u(n) {
          if (V(n) && !S(n) && !(n instanceof P)) {
            if (n instanceof Mn)
              return n;
            if (q.call(n, "__wrapped__"))
              return so(n);
          }
          return new Mn(n);
        }
        var Ve = /* @__PURE__ */ (function() {
          function n() {
          }
          return function(e) {
            if (!Q(e))
              return {};
            if (rf)
              return rf(e);
            n.prototype = e;
            var t = new n();
            return n.prototype = o, t;
          };
        })();
        function rr() {
        }
        function Mn(n, e) {
          this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = o;
        }
        u.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ua,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: fa,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: vu,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: u
          }
        }, u.prototype = rr.prototype, u.prototype.constructor = u, Mn.prototype = Ve(rr.prototype), Mn.prototype.constructor = Mn;
        function P(n) {
          this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = bn, this.__views__ = [];
        }
        function Yl() {
          var n = new P(this.__wrapped__);
          return n.__actions__ = _n(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = _n(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = _n(this.__views__), n;
        }
        function Zl() {
          if (this.__filtered__) {
            var n = new P(this);
            n.__dir__ = -1, n.__filtered__ = !0;
          } else
            n = this.clone(), n.__dir__ *= -1;
          return n;
        }
        function Xl() {
          var n = this.__wrapped__.value(), e = this.__dir__, t = S(n), r = e < 0, i = t ? n.length : 0, f = fc(0, i, this.__views__), a = f.start, l = f.end, c = l - a, g = r ? l : a - 1, d = this.__iteratees__, _ = d.length, w = 0, x = cn(c, this.__takeCount__);
          if (!t || !r && i == c && x == c)
            return Pf(n, this.__actions__);
          var R = [];
          n:
            for (; c-- && w < x; ) {
              g += e;
              for (var W = -1, I = n[g]; ++W < _; ) {
                var b = d[W], F = b.iteratee, En = b.type, dn = F(I);
                if (En == Pt)
                  I = dn;
                else if (!dn) {
                  if (En == bt)
                    continue n;
                  break n;
                }
              }
              R[w++] = I;
            }
          return R;
        }
        P.prototype = Ve(rr.prototype), P.prototype.constructor = P;
        function Pe(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function Jl() {
          this.__data__ = _t ? _t(null) : {}, this.size = 0;
        }
        function Ql(n) {
          var e = this.has(n) && delete this.__data__[n];
          return this.size -= e ? 1 : 0, e;
        }
        function Vl(n) {
          var e = this.__data__;
          if (_t) {
            var t = e[n];
            return t === Ot ? o : t;
          }
          return q.call(e, n) ? e[n] : o;
        }
        function kl(n) {
          var e = this.__data__;
          return _t ? e[n] !== o : q.call(e, n);
        }
        function jl(n, e) {
          var t = this.__data__;
          return this.size += this.has(n) ? 0 : 1, t[n] = _t && e === o ? Ot : e, this;
        }
        Pe.prototype.clear = Jl, Pe.prototype.delete = Ql, Pe.prototype.get = Vl, Pe.prototype.has = kl, Pe.prototype.set = jl;
        function ie(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function ns() {
          this.__data__ = [], this.size = 0;
        }
        function es(n) {
          var e = this.__data__, t = ir(e, n);
          if (t < 0)
            return !1;
          var r = e.length - 1;
          return t == r ? e.pop() : Vt.call(e, t, 1), --this.size, !0;
        }
        function ts(n) {
          var e = this.__data__, t = ir(e, n);
          return t < 0 ? o : e[t][1];
        }
        function rs(n) {
          return ir(this.__data__, n) > -1;
        }
        function is(n, e) {
          var t = this.__data__, r = ir(t, n);
          return r < 0 ? (++this.size, t.push([n, e])) : t[r][1] = e, this;
        }
        ie.prototype.clear = ns, ie.prototype.delete = es, ie.prototype.get = ts, ie.prototype.has = rs, ie.prototype.set = is;
        function ue(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.clear(); ++e < t; ) {
            var r = n[e];
            this.set(r[0], r[1]);
          }
        }
        function us() {
          this.size = 0, this.__data__ = {
            hash: new Pe(),
            map: new (gt || ie)(),
            string: new Pe()
          };
        }
        function fs(n) {
          var e = _r(this, n).delete(n);
          return this.size -= e ? 1 : 0, e;
        }
        function os(n) {
          return _r(this, n).get(n);
        }
        function as(n) {
          return _r(this, n).has(n);
        }
        function ls(n, e) {
          var t = _r(this, n), r = t.size;
          return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
        }
        ue.prototype.clear = us, ue.prototype.delete = fs, ue.prototype.get = os, ue.prototype.has = as, ue.prototype.set = ls;
        function De(n) {
          var e = -1, t = n == null ? 0 : n.length;
          for (this.__data__ = new ue(); ++e < t; )
            this.add(n[e]);
        }
        function ss(n) {
          return this.__data__.set(n, Ot), this;
        }
        function cs(n) {
          return this.__data__.has(n);
        }
        De.prototype.add = De.prototype.push = ss, De.prototype.has = cs;
        function Xn(n) {
          var e = this.__data__ = new ie(n);
          this.size = e.size;
        }
        function hs() {
          this.__data__ = new ie(), this.size = 0;
        }
        function ps(n) {
          var e = this.__data__, t = e.delete(n);
          return this.size = e.size, t;
        }
        function gs(n) {
          return this.__data__.get(n);
        }
        function ds(n) {
          return this.__data__.has(n);
        }
        function _s(n, e) {
          var t = this.__data__;
          if (t instanceof ie) {
            var r = t.__data__;
            if (!gt || r.length < T - 1)
              return r.push([n, e]), this.size = ++t.size, this;
            t = this.__data__ = new ue(r);
          }
          return t.set(n, e), this.size = t.size, this;
        }
        Xn.prototype.clear = hs, Xn.prototype.delete = ps, Xn.prototype.get = gs, Xn.prototype.has = ds, Xn.prototype.set = _s;
        function sf(n, e) {
          var t = S(n), r = !t && Ne(n), i = !t && !r && Ce(n), f = !t && !r && !i && et(n), a = t || r || i || f, l = a ? si(n.length, Cl) : [], c = l.length;
          for (var g in n)
            (e || q.call(n, g)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
            (g == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            i && (g == "offset" || g == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            f && (g == "buffer" || g == "byteLength" || g == "byteOffset") || // Skip index properties.
            le(g, c))) && l.push(g);
          return l;
        }
        function cf(n) {
          var e = n.length;
          return e ? n[Si(0, e - 1)] : o;
        }
        function vs(n, e) {
          return vr(_n(n), Fe(e, 0, n.length));
        }
        function ws(n) {
          return vr(_n(n));
        }
        function vi(n, e, t) {
          (t !== o && !Jn(n[e], t) || t === o && !(e in n)) && fe(n, e, t);
        }
        function wt(n, e, t) {
          var r = n[e];
          (!(q.call(n, e) && Jn(r, t)) || t === o && !(e in n)) && fe(n, e, t);
        }
        function ir(n, e) {
          for (var t = n.length; t--; )
            if (Jn(n[t][0], e))
              return t;
          return -1;
        }
        function ms(n, e, t, r) {
          return Ae(n, function(i, f, a) {
            e(r, i, t(i), a);
          }), r;
        }
        function hf(n, e) {
          return n && kn(e, fn(e), n);
        }
        function ys(n, e) {
          return n && kn(e, wn(e), n);
        }
        function fe(n, e, t) {
          e == "__proto__" && kt ? kt(n, e, {
            configurable: !0,
            enumerable: !0,
            value: t,
            writable: !0
          }) : n[e] = t;
        }
        function wi(n, e) {
          for (var t = -1, r = e.length, i = h(r), f = n == null; ++t < r; )
            i[t] = f ? o : ki(n, e[t]);
          return i;
        }
        function Fe(n, e, t) {
          return n === n && (t !== o && (n = n <= t ? n : t), e !== o && (n = n >= e ? n : e)), n;
        }
        function Bn(n, e, t, r, i, f) {
          var a, l = e & $, c = e & Wn, g = e & on;
          if (t && (a = i ? t(n, r, i, f) : t(n)), a !== o)
            return a;
          if (!Q(n))
            return n;
          var d = S(n);
          if (d) {
            if (a = ac(n), !l)
              return _n(n, a);
          } else {
            var _ = hn(n), w = _ == Mt || _ == pu;
            if (Ce(n))
              return Mf(n, l);
            if (_ == re || _ == v || w && !i) {
              if (a = c || w ? {} : eo(n), !l)
                return c ? Vs(n, ys(a, n)) : Qs(n, hf(a, n));
            } else {
              if (!Y[_])
                return i ? n : {};
              a = lc(n, _, l);
            }
          }
          f || (f = new Xn());
          var x = f.get(n);
          if (x)
            return x;
          f.set(n, a), Oo(n) ? n.forEach(function(I) {
            a.add(Bn(I, e, t, I, n, f));
          }) : Lo(n) && n.forEach(function(I, b) {
            a.set(b, Bn(I, e, t, b, n, f));
          });
          var R = g ? c ? Ui : Bi : c ? wn : fn, W = d ? o : R(n);
          return Dn(W || n, function(I, b) {
            W && (b = I, I = n[b]), wt(a, b, Bn(I, e, t, b, n, f));
          }), a;
        }
        function xs(n) {
          var e = fn(n);
          return function(t) {
            return pf(t, n, e);
          };
        }
        function pf(n, e, t) {
          var r = t.length;
          if (n == null)
            return !r;
          for (n = z(n); r--; ) {
            var i = t[r], f = e[i], a = n[i];
            if (a === o && !(i in n) || !f(a))
              return !1;
          }
          return !0;
        }
        function gf(n, e, t) {
          if (typeof n != "function")
            throw new Fn(D);
          return Tt(function() {
            n.apply(o, t);
          }, e);
        }
        function mt(n, e, t, r) {
          var i = -1, f = Gt, a = !0, l = n.length, c = [], g = e.length;
          if (!l)
            return c;
          t && (e = J(e, Tn(t))), r ? (f = ii, a = !1) : e.length >= T && (f = ht, a = !1, e = new De(e));
          n:
            for (; ++i < l; ) {
              var d = n[i], _ = t == null ? d : t(d);
              if (d = r || d !== 0 ? d : 0, a && _ === _) {
                for (var w = g; w--; )
                  if (e[w] === _)
                    continue n;
                c.push(d);
              } else f(e, _, r) || c.push(d);
            }
          return c;
        }
        var Ae = Gf(Vn), df = Gf(yi, !0);
        function As(n, e) {
          var t = !0;
          return Ae(n, function(r, i, f) {
            return t = !!e(r, i, f), t;
          }), t;
        }
        function ur(n, e, t) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var f = n[r], a = e(f);
            if (a != null && (l === o ? a === a && !Sn(a) : t(a, l)))
              var l = a, c = f;
          }
          return c;
        }
        function Rs(n, e, t, r) {
          var i = n.length;
          for (t = L(t), t < 0 && (t = -t > i ? 0 : i + t), r = r === o || r > i ? i : L(r), r < 0 && (r += i), r = t > r ? 0 : Po(r); t < r; )
            n[t++] = e;
          return n;
        }
        function _f(n, e) {
          var t = [];
          return Ae(n, function(r, i, f) {
            e(r, i, f) && t.push(r);
          }), t;
        }
        function ln(n, e, t, r, i) {
          var f = -1, a = n.length;
          for (t || (t = cc), i || (i = []); ++f < a; ) {
            var l = n[f];
            e > 0 && t(l) ? e > 1 ? ln(l, e - 1, t, r, i) : me(i, l) : r || (i[i.length] = l);
          }
          return i;
        }
        var mi = Hf(), vf = Hf(!0);
        function Vn(n, e) {
          return n && mi(n, e, fn);
        }
        function yi(n, e) {
          return n && vf(n, e, fn);
        }
        function fr(n, e) {
          return we(e, function(t) {
            return se(n[t]);
          });
        }
        function Me(n, e) {
          e = Ie(e, n);
          for (var t = 0, r = e.length; n != null && t < r; )
            n = n[jn(e[t++])];
          return t && t == r ? n : o;
        }
        function wf(n, e, t) {
          var r = e(n);
          return S(n) ? r : me(r, t(n));
        }
        function pn(n) {
          return n == null ? n === o ? ko : Qo : be && be in z(n) ? uc(n) : wc(n);
        }
        function xi(n, e) {
          return n > e;
        }
        function Is(n, e) {
          return n != null && q.call(n, e);
        }
        function Ts(n, e) {
          return n != null && e in z(n);
        }
        function Cs(n, e, t) {
          return n >= cn(e, t) && n < rn(e, t);
        }
        function Ai(n, e, t) {
          for (var r = t ? ii : Gt, i = n[0].length, f = n.length, a = f, l = h(f), c = 1 / 0, g = []; a--; ) {
            var d = n[a];
            a && e && (d = J(d, Tn(e))), c = cn(d.length, c), l[a] = !t && (e || i >= 120 && d.length >= 120) ? new De(a && d) : o;
          }
          d = n[0];
          var _ = -1, w = l[0];
          n:
            for (; ++_ < i && g.length < c; ) {
              var x = d[_], R = e ? e(x) : x;
              if (x = t || x !== 0 ? x : 0, !(w ? ht(w, R) : r(g, R, t))) {
                for (a = f; --a; ) {
                  var W = l[a];
                  if (!(W ? ht(W, R) : r(n[a], R, t)))
                    continue n;
                }
                w && w.push(R), g.push(x);
              }
            }
          return g;
        }
        function Ss(n, e, t, r) {
          return Vn(n, function(i, f, a) {
            e(r, t(i), f, a);
          }), r;
        }
        function yt(n, e, t) {
          e = Ie(e, n), n = uo(n, e);
          var r = n == null ? n : n[jn(Nn(e))];
          return r == null ? o : In(r, n, t);
        }
        function mf(n) {
          return V(n) && pn(n) == v;
        }
        function Es(n) {
          return V(n) && pn(n) == ct;
        }
        function Ls(n) {
          return V(n) && pn(n) == en;
        }
        function xt(n, e, t, r, i) {
          return n === e ? !0 : n == null || e == null || !V(n) && !V(e) ? n !== n && e !== e : Ws(n, e, t, r, xt, i);
        }
        function Ws(n, e, t, r, i, f) {
          var a = S(n), l = S(e), c = a ? m : hn(n), g = l ? m : hn(e);
          c = c == v ? re : c, g = g == v ? re : g;
          var d = c == re, _ = g == re, w = c == g;
          if (w && Ce(n)) {
            if (!Ce(e))
              return !1;
            a = !0, d = !1;
          }
          if (w && !d)
            return f || (f = new Xn()), a || et(n) ? kf(n, e, t, r, i, f) : rc(n, e, c, t, r, i, f);
          if (!(t & Hn)) {
            var x = d && q.call(n, "__wrapped__"), R = _ && q.call(e, "__wrapped__");
            if (x || R) {
              var W = x ? n.value() : n, I = R ? e.value() : e;
              return f || (f = new Xn()), i(W, I, t, r, f);
            }
          }
          return w ? (f || (f = new Xn()), ic(n, e, t, r, i, f)) : !1;
        }
        function Os(n) {
          return V(n) && hn(n) == zn;
        }
        function Ri(n, e, t, r) {
          var i = t.length, f = i, a = !r;
          if (n == null)
            return !f;
          for (n = z(n); i--; ) {
            var l = t[i];
            if (a && l[2] ? l[1] !== n[l[0]] : !(l[0] in n))
              return !1;
          }
          for (; ++i < f; ) {
            l = t[i];
            var c = l[0], g = n[c], d = l[1];
            if (a && l[2]) {
              if (g === o && !(c in n))
                return !1;
            } else {
              var _ = new Xn();
              if (r)
                var w = r(g, d, c, n, e, _);
              if (!(w === o ? xt(d, g, Hn | ee, r, _) : w))
                return !1;
            }
          }
          return !0;
        }
        function yf(n) {
          if (!Q(n) || pc(n))
            return !1;
          var e = se(n) ? Ol : xa;
          return e.test(Ue(n));
        }
        function bs(n) {
          return V(n) && pn(n) == at;
        }
        function Ps(n) {
          return V(n) && hn(n) == Yn;
        }
        function Ds(n) {
          return V(n) && Rr(n.length) && !!X[pn(n)];
        }
        function xf(n) {
          return typeof n == "function" ? n : n == null ? mn : typeof n == "object" ? S(n) ? If(n[0], n[1]) : Rf(n) : Ko(n);
        }
        function Ii(n) {
          if (!It(n))
            return Bl(n);
          var e = [];
          for (var t in z(n))
            q.call(n, t) && t != "constructor" && e.push(t);
          return e;
        }
        function Fs(n) {
          if (!Q(n))
            return vc(n);
          var e = It(n), t = [];
          for (var r in n)
            r == "constructor" && (e || !q.call(n, r)) || t.push(r);
          return t;
        }
        function Ti(n, e) {
          return n < e;
        }
        function Af(n, e) {
          var t = -1, r = vn(n) ? h(n.length) : [];
          return Ae(n, function(i, f, a) {
            r[++t] = e(i, f, a);
          }), r;
        }
        function Rf(n) {
          var e = $i(n);
          return e.length == 1 && e[0][2] ? ro(e[0][0], e[0][1]) : function(t) {
            return t === n || Ri(t, n, e);
          };
        }
        function If(n, e) {
          return Hi(n) && to(e) ? ro(jn(n), e) : function(t) {
            var r = ki(t, n);
            return r === o && r === e ? ji(t, n) : xt(e, r, Hn | ee);
          };
        }
        function or(n, e, t, r, i) {
          n !== e && mi(e, function(f, a) {
            if (i || (i = new Xn()), Q(f))
              Ms(n, e, a, t, or, r, i);
            else {
              var l = r ? r(Ki(n, a), f, a + "", n, e, i) : o;
              l === o && (l = f), vi(n, a, l);
            }
          }, wn);
        }
        function Ms(n, e, t, r, i, f, a) {
          var l = Ki(n, t), c = Ki(e, t), g = a.get(c);
          if (g) {
            vi(n, t, g);
            return;
          }
          var d = f ? f(l, c, t + "", n, e, a) : o, _ = d === o;
          if (_) {
            var w = S(c), x = !w && Ce(c), R = !w && !x && et(c);
            d = c, w || x || R ? S(l) ? d = l : k(l) ? d = _n(l) : x ? (_ = !1, d = Mf(c, !0)) : R ? (_ = !1, d = Bf(c, !0)) : d = [] : Ct(c) || Ne(c) ? (d = l, Ne(l) ? d = Do(l) : (!Q(l) || se(l)) && (d = eo(c))) : _ = !1;
          }
          _ && (a.set(c, d), i(d, c, r, f, a), a.delete(c)), vi(n, t, d);
        }
        function Tf(n, e) {
          var t = n.length;
          if (t)
            return e += e < 0 ? t : 0, le(e, t) ? n[e] : o;
        }
        function Cf(n, e, t) {
          e.length ? e = J(e, function(f) {
            return S(f) ? function(a) {
              return Me(a, f.length === 1 ? f[0] : f);
            } : f;
          }) : e = [mn];
          var r = -1;
          e = J(e, Tn(A()));
          var i = Af(n, function(f, a, l) {
            var c = J(e, function(g) {
              return g(f);
            });
            return { criteria: c, index: ++r, value: f };
          });
          return ll(i, function(f, a) {
            return Js(f, a, t);
          });
        }
        function Bs(n, e) {
          return Sf(n, e, function(t, r) {
            return ji(n, r);
          });
        }
        function Sf(n, e, t) {
          for (var r = -1, i = e.length, f = {}; ++r < i; ) {
            var a = e[r], l = Me(n, a);
            t(l, a) && At(f, Ie(a, n), l);
          }
          return f;
        }
        function Us(n) {
          return function(e) {
            return Me(e, n);
          };
        }
        function Ci(n, e, t, r) {
          var i = r ? al : Ke, f = -1, a = e.length, l = n;
          for (n === e && (e = _n(e)), t && (l = J(n, Tn(t))); ++f < a; )
            for (var c = 0, g = e[f], d = t ? t(g) : g; (c = i(l, d, c, r)) > -1; )
              l !== n && Vt.call(l, c, 1), Vt.call(n, c, 1);
          return n;
        }
        function Ef(n, e) {
          for (var t = n ? e.length : 0, r = t - 1; t--; ) {
            var i = e[t];
            if (t == r || i !== f) {
              var f = i;
              le(i) ? Vt.call(n, i, 1) : Wi(n, i);
            }
          }
          return n;
        }
        function Si(n, e) {
          return n + nr(af() * (e - n + 1));
        }
        function Ns(n, e, t, r) {
          for (var i = -1, f = rn(jt((e - n) / (t || 1)), 0), a = h(f); f--; )
            a[r ? f : ++i] = n, n += t;
          return a;
        }
        function Ei(n, e) {
          var t = "";
          if (!n || e < 1 || e > On)
            return t;
          do
            e % 2 && (t += n), e = nr(e / 2), e && (n += n);
          while (e);
          return t;
        }
        function O(n, e) {
          return zi(io(n, e, mn), n + "");
        }
        function $s(n) {
          return cf(tt(n));
        }
        function Gs(n, e) {
          var t = tt(n);
          return vr(t, Fe(e, 0, t.length));
        }
        function At(n, e, t, r) {
          if (!Q(n))
            return n;
          e = Ie(e, n);
          for (var i = -1, f = e.length, a = f - 1, l = n; l != null && ++i < f; ) {
            var c = jn(e[i]), g = t;
            if (c === "__proto__" || c === "constructor" || c === "prototype")
              return n;
            if (i != a) {
              var d = l[c];
              g = r ? r(d, c, l) : o, g === o && (g = Q(d) ? d : le(e[i + 1]) ? [] : {});
            }
            wt(l, c, g), l = l[c];
          }
          return n;
        }
        var Lf = er ? function(n, e) {
          return er.set(n, e), n;
        } : mn, Hs = kt ? function(n, e) {
          return kt(n, "toString", {
            configurable: !0,
            enumerable: !1,
            value: eu(e),
            writable: !0
          });
        } : mn;
        function qs(n) {
          return vr(tt(n));
        }
        function Un(n, e, t) {
          var r = -1, i = n.length;
          e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
          for (var f = h(i); ++r < i; )
            f[r] = n[r + e];
          return f;
        }
        function Ks(n, e) {
          var t;
          return Ae(n, function(r, i, f) {
            return t = e(r, i, f), !t;
          }), !!t;
        }
        function ar(n, e, t) {
          var r = 0, i = n == null ? r : n.length;
          if (typeof e == "number" && e === e && i <= Ur) {
            for (; r < i; ) {
              var f = r + i >>> 1, a = n[f];
              a !== null && !Sn(a) && (t ? a <= e : a < e) ? r = f + 1 : i = f;
            }
            return i;
          }
          return Li(n, e, mn, t);
        }
        function Li(n, e, t, r) {
          var i = 0, f = n == null ? 0 : n.length;
          if (f === 0)
            return 0;
          e = t(e);
          for (var a = e !== e, l = e === null, c = Sn(e), g = e === o; i < f; ) {
            var d = nr((i + f) / 2), _ = t(n[d]), w = _ !== o, x = _ === null, R = _ === _, W = Sn(_);
            if (a)
              var I = r || R;
            else g ? I = R && (r || w) : l ? I = R && w && (r || !x) : c ? I = R && w && !x && (r || !W) : x || W ? I = !1 : I = r ? _ <= e : _ < e;
            I ? i = d + 1 : f = d;
          }
          return cn(f, Br);
        }
        function Wf(n, e) {
          for (var t = -1, r = n.length, i = 0, f = []; ++t < r; ) {
            var a = n[t], l = e ? e(a) : a;
            if (!t || !Jn(l, c)) {
              var c = l;
              f[i++] = a === 0 ? 0 : a;
            }
          }
          return f;
        }
        function Of(n) {
          return typeof n == "number" ? n : Sn(n) ? We : +n;
        }
        function Cn(n) {
          if (typeof n == "string")
            return n;
          if (S(n))
            return J(n, Cn) + "";
          if (Sn(n))
            return lf ? lf.call(n) : "";
          var e = n + "";
          return e == "0" && 1 / n == -te ? "-0" : e;
        }
        function Re(n, e, t) {
          var r = -1, i = Gt, f = n.length, a = !0, l = [], c = l;
          if (t)
            a = !1, i = ii;
          else if (f >= T) {
            var g = e ? null : ec(n);
            if (g)
              return qt(g);
            a = !1, i = ht, c = new De();
          } else
            c = e ? [] : l;
          n:
            for (; ++r < f; ) {
              var d = n[r], _ = e ? e(d) : d;
              if (d = t || d !== 0 ? d : 0, a && _ === _) {
                for (var w = c.length; w--; )
                  if (c[w] === _)
                    continue n;
                e && c.push(_), l.push(d);
              } else i(c, _, t) || (c !== l && c.push(_), l.push(d));
            }
          return l;
        }
        function Wi(n, e) {
          return e = Ie(e, n), n = uo(n, e), n == null || delete n[jn(Nn(e))];
        }
        function bf(n, e, t, r) {
          return At(n, e, t(Me(n, e)), r);
        }
        function lr(n, e, t, r) {
          for (var i = n.length, f = r ? i : -1; (r ? f-- : ++f < i) && e(n[f], f, n); )
            ;
          return t ? Un(n, r ? 0 : f, r ? f + 1 : i) : Un(n, r ? f + 1 : 0, r ? i : f);
        }
        function Pf(n, e) {
          var t = n;
          return t instanceof P && (t = t.value()), ui(e, function(r, i) {
            return i.func.apply(i.thisArg, me([r], i.args));
          }, t);
        }
        function Oi(n, e, t) {
          var r = n.length;
          if (r < 2)
            return r ? Re(n[0]) : [];
          for (var i = -1, f = h(r); ++i < r; )
            for (var a = n[i], l = -1; ++l < r; )
              l != i && (f[i] = mt(f[i] || a, n[l], e, t));
          return Re(ln(f, 1), e, t);
        }
        function Df(n, e, t) {
          for (var r = -1, i = n.length, f = e.length, a = {}; ++r < i; ) {
            var l = r < f ? e[r] : o;
            t(a, n[r], l);
          }
          return a;
        }
        function bi(n) {
          return k(n) ? n : [];
        }
        function Pi(n) {
          return typeof n == "function" ? n : mn;
        }
        function Ie(n, e) {
          return S(n) ? n : Hi(n, e) ? [n] : lo(G(n));
        }
        var zs = O;
        function Te(n, e, t) {
          var r = n.length;
          return t = t === o ? r : t, !e && t >= r ? n : Un(n, e, t);
        }
        var Ff = bl || function(n) {
          return an.clearTimeout(n);
        };
        function Mf(n, e) {
          if (e)
            return n.slice();
          var t = n.length, r = tf ? tf(t) : new n.constructor(t);
          return n.copy(r), r;
        }
        function Di(n) {
          var e = new n.constructor(n.byteLength);
          return new Jt(e).set(new Jt(n)), e;
        }
        function Ys(n, e) {
          var t = e ? Di(n.buffer) : n.buffer;
          return new n.constructor(t, n.byteOffset, n.byteLength);
        }
        function Zs(n) {
          var e = new n.constructor(n.source, wu.exec(n));
          return e.lastIndex = n.lastIndex, e;
        }
        function Xs(n) {
          return vt ? z(vt.call(n)) : {};
        }
        function Bf(n, e) {
          var t = e ? Di(n.buffer) : n.buffer;
          return new n.constructor(t, n.byteOffset, n.length);
        }
        function Uf(n, e) {
          if (n !== e) {
            var t = n !== o, r = n === null, i = n === n, f = Sn(n), a = e !== o, l = e === null, c = e === e, g = Sn(e);
            if (!l && !g && !f && n > e || f && a && c && !l && !g || r && a && c || !t && c || !i)
              return 1;
            if (!r && !f && !g && n < e || g && t && i && !r && !f || l && t && i || !a && i || !c)
              return -1;
          }
          return 0;
        }
        function Js(n, e, t) {
          for (var r = -1, i = n.criteria, f = e.criteria, a = i.length, l = t.length; ++r < a; ) {
            var c = Uf(i[r], f[r]);
            if (c) {
              if (r >= l)
                return c;
              var g = t[r];
              return c * (g == "desc" ? -1 : 1);
            }
          }
          return n.index - e.index;
        }
        function Nf(n, e, t, r) {
          for (var i = -1, f = n.length, a = t.length, l = -1, c = e.length, g = rn(f - a, 0), d = h(c + g), _ = !r; ++l < c; )
            d[l] = e[l];
          for (; ++i < a; )
            (_ || i < f) && (d[t[i]] = n[i]);
          for (; g--; )
            d[l++] = n[i++];
          return d;
        }
        function $f(n, e, t, r) {
          for (var i = -1, f = n.length, a = -1, l = t.length, c = -1, g = e.length, d = rn(f - l, 0), _ = h(d + g), w = !r; ++i < d; )
            _[i] = n[i];
          for (var x = i; ++c < g; )
            _[x + c] = e[c];
          for (; ++a < l; )
            (w || i < f) && (_[x + t[a]] = n[i++]);
          return _;
        }
        function _n(n, e) {
          var t = -1, r = n.length;
          for (e || (e = h(r)); ++t < r; )
            e[t] = n[t];
          return e;
        }
        function kn(n, e, t, r) {
          var i = !t;
          t || (t = {});
          for (var f = -1, a = e.length; ++f < a; ) {
            var l = e[f], c = r ? r(t[l], n[l], l, t, n) : o;
            c === o && (c = n[l]), i ? fe(t, l, c) : wt(t, l, c);
          }
          return t;
        }
        function Qs(n, e) {
          return kn(n, Gi(n), e);
        }
        function Vs(n, e) {
          return kn(n, jf(n), e);
        }
        function sr(n, e) {
          return function(t, r) {
            var i = S(t) ? tl : ms, f = e ? e() : {};
            return i(t, n, A(r, 2), f);
          };
        }
        function ke(n) {
          return O(function(e, t) {
            var r = -1, i = t.length, f = i > 1 ? t[i - 1] : o, a = i > 2 ? t[2] : o;
            for (f = n.length > 3 && typeof f == "function" ? (i--, f) : o, a && gn(t[0], t[1], a) && (f = i < 3 ? o : f, i = 1), e = z(e); ++r < i; ) {
              var l = t[r];
              l && n(e, l, r, f);
            }
            return e;
          });
        }
        function Gf(n, e) {
          return function(t, r) {
            if (t == null)
              return t;
            if (!vn(t))
              return n(t, r);
            for (var i = t.length, f = e ? i : -1, a = z(t); (e ? f-- : ++f < i) && r(a[f], f, a) !== !1; )
              ;
            return t;
          };
        }
        function Hf(n) {
          return function(e, t, r) {
            for (var i = -1, f = z(e), a = r(e), l = a.length; l--; ) {
              var c = a[n ? l : ++i];
              if (t(f[c], c, f) === !1)
                break;
            }
            return e;
          };
        }
        function ks(n, e, t) {
          var r = e & nn, i = Rt(n);
          function f() {
            var a = this && this !== an && this instanceof f ? i : n;
            return a.apply(r ? t : this, arguments);
          }
          return f;
        }
        function qf(n) {
          return function(e) {
            e = G(e);
            var t = ze(e) ? Zn(e) : o, r = t ? t[0] : e.charAt(0), i = t ? Te(t, 1).join("") : e.slice(1);
            return r[n]() + i;
          };
        }
        function je(n) {
          return function(e) {
            return ui(Ho(Go(e).replace(Ha, "")), n, "");
          };
        }
        function Rt(n) {
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new n();
              case 1:
                return new n(e[0]);
              case 2:
                return new n(e[0], e[1]);
              case 3:
                return new n(e[0], e[1], e[2]);
              case 4:
                return new n(e[0], e[1], e[2], e[3]);
              case 5:
                return new n(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }
            var t = Ve(n.prototype), r = n.apply(t, e);
            return Q(r) ? r : t;
          };
        }
        function js(n, e, t) {
          var r = Rt(n);
          function i() {
            for (var f = arguments.length, a = h(f), l = f, c = nt(i); l--; )
              a[l] = arguments[l];
            var g = f < 3 && a[0] !== c && a[f - 1] !== c ? [] : ye(a, c);
            if (f -= g.length, f < t)
              return Xf(
                n,
                e,
                cr,
                i.placeholder,
                o,
                a,
                g,
                o,
                o,
                t - f
              );
            var d = this && this !== an && this instanceof i ? r : n;
            return In(d, this, a);
          }
          return i;
        }
        function Kf(n) {
          return function(e, t, r) {
            var i = z(e);
            if (!vn(e)) {
              var f = A(t, 3);
              e = fn(e), t = function(l) {
                return f(i[l], l, i);
              };
            }
            var a = n(e, t, r);
            return a > -1 ? i[f ? e[a] : a] : o;
          };
        }
        function zf(n) {
          return ae(function(e) {
            var t = e.length, r = t, i = Mn.prototype.thru;
            for (n && e.reverse(); r--; ) {
              var f = e[r];
              if (typeof f != "function")
                throw new Fn(D);
              if (i && !a && dr(f) == "wrapper")
                var a = new Mn([], !0);
            }
            for (r = a ? r : t; ++r < t; ) {
              f = e[r];
              var l = dr(f), c = l == "wrapper" ? Ni(f) : o;
              c && qi(c[0]) && c[1] == (Kn | Rn | qn | Le) && !c[4].length && c[9] == 1 ? a = a[dr(c[0])].apply(a, c[3]) : a = f.length == 1 && qi(f) ? a[l]() : a.thru(f);
            }
            return function() {
              var g = arguments, d = g[0];
              if (a && g.length == 1 && S(d))
                return a.plant(d).value();
              for (var _ = 0, w = t ? e[_].apply(this, g) : d; ++_ < t; )
                w = e[_].call(this, w);
              return w;
            };
          });
        }
        function cr(n, e, t, r, i, f, a, l, c, g) {
          var d = e & Kn, _ = e & nn, w = e & un, x = e & (Rn | _e), R = e & Ge, W = w ? o : Rt(n);
          function I() {
            for (var b = arguments.length, F = h(b), En = b; En--; )
              F[En] = arguments[En];
            if (x)
              var dn = nt(I), Ln = cl(F, dn);
            if (r && (F = Nf(F, r, i, x)), f && (F = $f(F, f, a, x)), b -= Ln, x && b < g) {
              var j = ye(F, dn);
              return Xf(
                n,
                e,
                cr,
                I.placeholder,
                t,
                F,
                j,
                l,
                c,
                g - b
              );
            }
            var Qn = _ ? t : this, he = w ? Qn[n] : n;
            return b = F.length, l ? F = mc(F, l) : R && b > 1 && F.reverse(), d && c < b && (F.length = c), this && this !== an && this instanceof I && (he = W || Rt(he)), he.apply(Qn, F);
          }
          return I;
        }
        function Yf(n, e) {
          return function(t, r) {
            return Ss(t, n, e(r), {});
          };
        }
        function hr(n, e) {
          return function(t, r) {
            var i;
            if (t === o && r === o)
              return e;
            if (t !== o && (i = t), r !== o) {
              if (i === o)
                return r;
              typeof t == "string" || typeof r == "string" ? (t = Cn(t), r = Cn(r)) : (t = Of(t), r = Of(r)), i = n(t, r);
            }
            return i;
          };
        }
        function Fi(n) {
          return ae(function(e) {
            return e = J(e, Tn(A())), O(function(t) {
              var r = this;
              return n(e, function(i) {
                return In(i, r, t);
              });
            });
          });
        }
        function pr(n, e) {
          e = e === o ? " " : Cn(e);
          var t = e.length;
          if (t < 2)
            return t ? Ei(e, n) : e;
          var r = Ei(e, jt(n / Ye(e)));
          return ze(e) ? Te(Zn(r), 0, n).join("") : r.slice(0, n);
        }
        function nc(n, e, t, r) {
          var i = e & nn, f = Rt(n);
          function a() {
            for (var l = -1, c = arguments.length, g = -1, d = r.length, _ = h(d + c), w = this && this !== an && this instanceof a ? f : n; ++g < d; )
              _[g] = r[g];
            for (; c--; )
              _[g++] = arguments[++l];
            return In(w, i ? t : this, _);
          }
          return a;
        }
        function Zf(n) {
          return function(e, t, r) {
            return r && typeof r != "number" && gn(e, t, r) && (t = r = o), e = ce(e), t === o ? (t = e, e = 0) : t = ce(t), r = r === o ? e < t ? 1 : -1 : ce(r), Ns(e, t, r, n);
          };
        }
        function gr(n) {
          return function(e, t) {
            return typeof e == "string" && typeof t == "string" || (e = $n(e), t = $n(t)), n(e, t);
          };
        }
        function Xf(n, e, t, r, i, f, a, l, c, g) {
          var d = e & Rn, _ = d ? a : o, w = d ? o : a, x = d ? f : o, R = d ? o : f;
          e |= d ? qn : ve, e &= ~(d ? ve : qn), e & Ee || (e &= -4);
          var W = [
            n,
            e,
            i,
            x,
            _,
            R,
            w,
            l,
            c,
            g
          ], I = t.apply(o, W);
          return qi(n) && fo(I, W), I.placeholder = r, oo(I, n, e);
        }
        function Mi(n) {
          var e = tn[n];
          return function(t, r) {
            if (t = $n(t), r = r == null ? 0 : cn(L(r), 292), r && of(t)) {
              var i = (G(t) + "e").split("e"), f = e(i[0] + "e" + (+i[1] + r));
              return i = (G(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - r));
            }
            return e(t);
          };
        }
        var ec = Je && 1 / qt(new Je([, -0]))[1] == te ? function(n) {
          return new Je(n);
        } : iu;
        function Jf(n) {
          return function(e) {
            var t = hn(e);
            return t == zn ? hi(e) : t == Yn ? wl(e) : sl(e, n(e));
          };
        }
        function oe(n, e, t, r, i, f, a, l) {
          var c = e & un;
          if (!c && typeof n != "function")
            throw new Fn(D);
          var g = r ? r.length : 0;
          if (g || (e &= -97, r = i = o), a = a === o ? a : rn(L(a), 0), l = l === o ? l : L(l), g -= i ? i.length : 0, e & ve) {
            var d = r, _ = i;
            r = i = o;
          }
          var w = c ? o : Ni(n), x = [
            n,
            e,
            t,
            r,
            i,
            d,
            _,
            f,
            a,
            l
          ];
          if (w && _c(x, w), n = x[0], e = x[1], t = x[2], r = x[3], i = x[4], l = x[9] = x[9] === o ? c ? 0 : n.length : rn(x[9] - g, 0), !l && e & (Rn | _e) && (e &= -25), !e || e == nn)
            var R = ks(n, e, t);
          else e == Rn || e == _e ? R = js(n, e, l) : (e == qn || e == (nn | qn)) && !i.length ? R = nc(n, e, t, r) : R = cr.apply(o, x);
          var W = w ? Lf : fo;
          return oo(W(R, x), n, e);
        }
        function Qf(n, e, t, r) {
          return n === o || Jn(n, Xe[t]) && !q.call(r, t) ? e : n;
        }
        function Vf(n, e, t, r, i, f) {
          return Q(n) && Q(e) && (f.set(e, n), or(n, e, o, Vf, f), f.delete(e)), n;
        }
        function tc(n) {
          return Ct(n) ? o : n;
        }
        function kf(n, e, t, r, i, f) {
          var a = t & Hn, l = n.length, c = e.length;
          if (l != c && !(a && c > l))
            return !1;
          var g = f.get(n), d = f.get(e);
          if (g && d)
            return g == e && d == n;
          var _ = -1, w = !0, x = t & ee ? new De() : o;
          for (f.set(n, e), f.set(e, n); ++_ < l; ) {
            var R = n[_], W = e[_];
            if (r)
              var I = a ? r(W, R, _, e, n, f) : r(R, W, _, n, e, f);
            if (I !== o) {
              if (I)
                continue;
              w = !1;
              break;
            }
            if (x) {
              if (!fi(e, function(b, F) {
                if (!ht(x, F) && (R === b || i(R, b, t, r, f)))
                  return x.push(F);
              })) {
                w = !1;
                break;
              }
            } else if (!(R === W || i(R, W, t, r, f))) {
              w = !1;
              break;
            }
          }
          return f.delete(n), f.delete(e), w;
        }
        function rc(n, e, t, r, i, f, a) {
          switch (t) {
            case He:
              if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
                return !1;
              n = n.buffer, e = e.buffer;
            case ct:
              return !(n.byteLength != e.byteLength || !f(new Jt(n), new Jt(e)));
            case K:
            case en:
            case ot:
              return Jn(+n, +e);
            case ft:
              return n.name == e.name && n.message == e.message;
            case at:
            case lt:
              return n == e + "";
            case zn:
              var l = hi;
            case Yn:
              var c = r & Hn;
              if (l || (l = qt), n.size != e.size && !c)
                return !1;
              var g = a.get(n);
              if (g)
                return g == e;
              r |= ee, a.set(n, e);
              var d = kf(l(n), l(e), r, i, f, a);
              return a.delete(n), d;
            case Bt:
              if (vt)
                return vt.call(n) == vt.call(e);
          }
          return !1;
        }
        function ic(n, e, t, r, i, f) {
          var a = t & Hn, l = Bi(n), c = l.length, g = Bi(e), d = g.length;
          if (c != d && !a)
            return !1;
          for (var _ = c; _--; ) {
            var w = l[_];
            if (!(a ? w in e : q.call(e, w)))
              return !1;
          }
          var x = f.get(n), R = f.get(e);
          if (x && R)
            return x == e && R == n;
          var W = !0;
          f.set(n, e), f.set(e, n);
          for (var I = a; ++_ < c; ) {
            w = l[_];
            var b = n[w], F = e[w];
            if (r)
              var En = a ? r(F, b, w, e, n, f) : r(b, F, w, n, e, f);
            if (!(En === o ? b === F || i(b, F, t, r, f) : En)) {
              W = !1;
              break;
            }
            I || (I = w == "constructor");
          }
          if (W && !I) {
            var dn = n.constructor, Ln = e.constructor;
            dn != Ln && "constructor" in n && "constructor" in e && !(typeof dn == "function" && dn instanceof dn && typeof Ln == "function" && Ln instanceof Ln) && (W = !1);
          }
          return f.delete(n), f.delete(e), W;
        }
        function ae(n) {
          return zi(io(n, o, po), n + "");
        }
        function Bi(n) {
          return wf(n, fn, Gi);
        }
        function Ui(n) {
          return wf(n, wn, jf);
        }
        var Ni = er ? function(n) {
          return er.get(n);
        } : iu;
        function dr(n) {
          for (var e = n.name + "", t = Qe[e], r = q.call(Qe, e) ? t.length : 0; r--; ) {
            var i = t[r], f = i.func;
            if (f == null || f == n)
              return i.name;
          }
          return e;
        }
        function nt(n) {
          var e = q.call(u, "placeholder") ? u : n;
          return e.placeholder;
        }
        function A() {
          var n = u.iteratee || tu;
          return n = n === tu ? xf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
        }
        function _r(n, e) {
          var t = n.__data__;
          return hc(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
        }
        function $i(n) {
          for (var e = fn(n), t = e.length; t--; ) {
            var r = e[t], i = n[r];
            e[t] = [r, i, to(i)];
          }
          return e;
        }
        function Be(n, e) {
          var t = dl(n, e);
          return yf(t) ? t : o;
        }
        function uc(n) {
          var e = q.call(n, be), t = n[be];
          try {
            n[be] = o;
            var r = !0;
          } catch {
          }
          var i = Zt.call(n);
          return r && (e ? n[be] = t : delete n[be]), i;
        }
        var Gi = gi ? function(n) {
          return n == null ? [] : (n = z(n), we(gi(n), function(e) {
            return uf.call(n, e);
          }));
        } : uu, jf = gi ? function(n) {
          for (var e = []; n; )
            me(e, Gi(n)), n = Qt(n);
          return e;
        } : uu, hn = pn;
        (di && hn(new di(new ArrayBuffer(1))) != He || gt && hn(new gt()) != zn || _i && hn(_i.resolve()) != gu || Je && hn(new Je()) != Yn || dt && hn(new dt()) != st) && (hn = function(n) {
          var e = pn(n), t = e == re ? n.constructor : o, r = t ? Ue(t) : "";
          if (r)
            switch (r) {
              case Gl:
                return He;
              case Hl:
                return zn;
              case ql:
                return gu;
              case Kl:
                return Yn;
              case zl:
                return st;
            }
          return e;
        });
        function fc(n, e, t) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var f = t[r], a = f.size;
            switch (f.type) {
              case "drop":
                n += a;
                break;
              case "dropRight":
                e -= a;
                break;
              case "take":
                e = cn(e, n + a);
                break;
              case "takeRight":
                n = rn(n, e - a);
                break;
            }
          }
          return { start: n, end: e };
        }
        function oc(n) {
          var e = n.match(pa);
          return e ? e[1].split(ga) : [];
        }
        function no(n, e, t) {
          e = Ie(e, n);
          for (var r = -1, i = e.length, f = !1; ++r < i; ) {
            var a = jn(e[r]);
            if (!(f = n != null && t(n, a)))
              break;
            n = n[a];
          }
          return f || ++r != i ? f : (i = n == null ? 0 : n.length, !!i && Rr(i) && le(a, i) && (S(n) || Ne(n)));
        }
        function ac(n) {
          var e = n.length, t = new n.constructor(e);
          return e && typeof n[0] == "string" && q.call(n, "index") && (t.index = n.index, t.input = n.input), t;
        }
        function eo(n) {
          return typeof n.constructor == "function" && !It(n) ? Ve(Qt(n)) : {};
        }
        function lc(n, e, t) {
          var r = n.constructor;
          switch (e) {
            case ct:
              return Di(n);
            case K:
            case en:
              return new r(+n);
            case He:
              return Ys(n, t);
            case $r:
            case Gr:
            case Hr:
            case qr:
            case Kr:
            case zr:
            case Yr:
            case Zr:
            case Xr:
              return Bf(n, t);
            case zn:
              return new r();
            case ot:
            case lt:
              return new r(n);
            case at:
              return Zs(n);
            case Yn:
              return new r();
            case Bt:
              return Xs(n);
          }
        }
        function sc(n, e) {
          var t = e.length;
          if (!t)
            return n;
          var r = t - 1;
          return e[r] = (t > 1 ? "& " : "") + e[r], e = e.join(t > 2 ? ", " : " "), n.replace(ha, `{
/* [wrapped with ` + e + `] */
`);
        }
        function cc(n) {
          return S(n) || Ne(n) || !!(ff && n && n[ff]);
        }
        function le(n, e) {
          var t = typeof n;
          return e = e ?? On, !!e && (t == "number" || t != "symbol" && Ra.test(n)) && n > -1 && n % 1 == 0 && n < e;
        }
        function gn(n, e, t) {
          if (!Q(t))
            return !1;
          var r = typeof e;
          return (r == "number" ? vn(t) && le(e, t.length) : r == "string" && e in t) ? Jn(t[e], n) : !1;
        }
        function Hi(n, e) {
          if (S(n))
            return !1;
          var t = typeof n;
          return t == "number" || t == "symbol" || t == "boolean" || n == null || Sn(n) ? !0 : aa.test(n) || !oa.test(n) || e != null && n in z(e);
        }
        function hc(n) {
          var e = typeof n;
          return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
        }
        function qi(n) {
          var e = dr(n), t = u[e];
          if (typeof t != "function" || !(e in P.prototype))
            return !1;
          if (n === t)
            return !0;
          var r = Ni(t);
          return !!r && n === r[0];
        }
        function pc(n) {
          return !!ef && ef in n;
        }
        var gc = zt ? se : fu;
        function It(n) {
          var e = n && n.constructor, t = typeof e == "function" && e.prototype || Xe;
          return n === t;
        }
        function to(n) {
          return n === n && !Q(n);
        }
        function ro(n, e) {
          return function(t) {
            return t == null ? !1 : t[n] === e && (e !== o || n in z(t));
          };
        }
        function dc(n) {
          var e = xr(n, function(r) {
            return t.size === Or && t.clear(), r;
          }), t = e.cache;
          return e;
        }
        function _c(n, e) {
          var t = n[1], r = e[1], i = t | r, f = i < (nn | un | Kn), a = r == Kn && t == Rn || r == Kn && t == Le && n[7].length <= e[8] || r == (Kn | Le) && e[7].length <= e[8] && t == Rn;
          if (!(f || a))
            return n;
          r & nn && (n[2] = e[2], i |= t & nn ? 0 : Ee);
          var l = e[3];
          if (l) {
            var c = n[3];
            n[3] = c ? Nf(c, l, e[4]) : l, n[4] = c ? ye(n[3], An) : e[4];
          }
          return l = e[5], l && (c = n[5], n[5] = c ? $f(c, l, e[6]) : l, n[6] = c ? ye(n[5], An) : e[6]), l = e[7], l && (n[7] = l), r & Kn && (n[8] = n[8] == null ? e[8] : cn(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
        }
        function vc(n) {
          var e = [];
          if (n != null)
            for (var t in z(n))
              e.push(t);
          return e;
        }
        function wc(n) {
          return Zt.call(n);
        }
        function io(n, e, t) {
          return e = rn(e === o ? n.length - 1 : e, 0), function() {
            for (var r = arguments, i = -1, f = rn(r.length - e, 0), a = h(f); ++i < f; )
              a[i] = r[e + i];
            i = -1;
            for (var l = h(e + 1); ++i < e; )
              l[i] = r[i];
            return l[e] = t(a), In(n, this, l);
          };
        }
        function uo(n, e) {
          return e.length < 2 ? n : Me(n, Un(e, 0, -1));
        }
        function mc(n, e) {
          for (var t = n.length, r = cn(e.length, t), i = _n(n); r--; ) {
            var f = e[r];
            n[r] = le(f, t) ? i[f] : o;
          }
          return n;
        }
        function Ki(n, e) {
          if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
            return n[e];
        }
        var fo = ao(Lf), Tt = Dl || function(n, e) {
          return an.setTimeout(n, e);
        }, zi = ao(Hs);
        function oo(n, e, t) {
          var r = e + "";
          return zi(n, sc(r, yc(oc(r), t)));
        }
        function ao(n) {
          var e = 0, t = 0;
          return function() {
            var r = Ul(), i = Fr - (r - t);
            if (t = r, i > 0) {
              if (++e >= Dr)
                return arguments[0];
            } else
              e = 0;
            return n.apply(o, arguments);
          };
        }
        function vr(n, e) {
          var t = -1, r = n.length, i = r - 1;
          for (e = e === o ? r : e; ++t < e; ) {
            var f = Si(t, i), a = n[f];
            n[f] = n[t], n[t] = a;
          }
          return n.length = e, n;
        }
        var lo = dc(function(n) {
          var e = [];
          return n.charCodeAt(0) === 46 && e.push(""), n.replace(la, function(t, r, i, f) {
            e.push(i ? f.replace(va, "$1") : r || t);
          }), e;
        });
        function jn(n) {
          if (typeof n == "string" || Sn(n))
            return n;
          var e = n + "";
          return e == "0" && 1 / n == -te ? "-0" : e;
        }
        function Ue(n) {
          if (n != null) {
            try {
              return Yt.call(n);
            } catch {
            }
            try {
              return n + "";
            } catch {
            }
          }
          return "";
        }
        function yc(n, e) {
          return Dn(Ft, function(t) {
            var r = "_." + t[0];
            e & t[1] && !Gt(n, r) && n.push(r);
          }), n.sort();
        }
        function so(n) {
          if (n instanceof P)
            return n.clone();
          var e = new Mn(n.__wrapped__, n.__chain__);
          return e.__actions__ = _n(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
        }
        function xc(n, e, t) {
          (t ? gn(n, e, t) : e === o) ? e = 1 : e = rn(L(e), 0);
          var r = n == null ? 0 : n.length;
          if (!r || e < 1)
            return [];
          for (var i = 0, f = 0, a = h(jt(r / e)); i < r; )
            a[f++] = Un(n, i, i += e);
          return a;
        }
        function Ac(n) {
          for (var e = -1, t = n == null ? 0 : n.length, r = 0, i = []; ++e < t; ) {
            var f = n[e];
            f && (i[r++] = f);
          }
          return i;
        }
        function Rc() {
          var n = arguments.length;
          if (!n)
            return [];
          for (var e = h(n - 1), t = arguments[0], r = n; r--; )
            e[r - 1] = arguments[r];
          return me(S(t) ? _n(t) : [t], ln(e, 1));
        }
        var Ic = O(function(n, e) {
          return k(n) ? mt(n, ln(e, 1, k, !0)) : [];
        }), Tc = O(function(n, e) {
          var t = Nn(e);
          return k(t) && (t = o), k(n) ? mt(n, ln(e, 1, k, !0), A(t, 2)) : [];
        }), Cc = O(function(n, e) {
          var t = Nn(e);
          return k(t) && (t = o), k(n) ? mt(n, ln(e, 1, k, !0), o, t) : [];
        });
        function Sc(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === o ? 1 : L(e), Un(n, e < 0 ? 0 : e, r)) : [];
        }
        function Ec(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === o ? 1 : L(e), e = r - e, Un(n, 0, e < 0 ? 0 : e)) : [];
        }
        function Lc(n, e) {
          return n && n.length ? lr(n, A(e, 3), !0, !0) : [];
        }
        function Wc(n, e) {
          return n && n.length ? lr(n, A(e, 3), !0) : [];
        }
        function Oc(n, e, t, r) {
          var i = n == null ? 0 : n.length;
          return i ? (t && typeof t != "number" && gn(n, e, t) && (t = 0, r = i), Rs(n, e, t, r)) : [];
        }
        function co(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : L(t);
          return i < 0 && (i = rn(r + i, 0)), Ht(n, A(e, 3), i);
        }
        function ho(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = r - 1;
          return t !== o && (i = L(t), i = t < 0 ? rn(r + i, 0) : cn(i, r - 1)), Ht(n, A(e, 3), i, !0);
        }
        function po(n) {
          var e = n == null ? 0 : n.length;
          return e ? ln(n, 1) : [];
        }
        function bc(n) {
          var e = n == null ? 0 : n.length;
          return e ? ln(n, te) : [];
        }
        function Pc(n, e) {
          var t = n == null ? 0 : n.length;
          return t ? (e = e === o ? 1 : L(e), ln(n, e)) : [];
        }
        function Dc(n) {
          for (var e = -1, t = n == null ? 0 : n.length, r = {}; ++e < t; ) {
            var i = n[e];
            r[i[0]] = i[1];
          }
          return r;
        }
        function go(n) {
          return n && n.length ? n[0] : o;
        }
        function Fc(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = t == null ? 0 : L(t);
          return i < 0 && (i = rn(r + i, 0)), Ke(n, e, i);
        }
        function Mc(n) {
          var e = n == null ? 0 : n.length;
          return e ? Un(n, 0, -1) : [];
        }
        var Bc = O(function(n) {
          var e = J(n, bi);
          return e.length && e[0] === n[0] ? Ai(e) : [];
        }), Uc = O(function(n) {
          var e = Nn(n), t = J(n, bi);
          return e === Nn(t) ? e = o : t.pop(), t.length && t[0] === n[0] ? Ai(t, A(e, 2)) : [];
        }), Nc = O(function(n) {
          var e = Nn(n), t = J(n, bi);
          return e = typeof e == "function" ? e : o, e && t.pop(), t.length && t[0] === n[0] ? Ai(t, o, e) : [];
        });
        function $c(n, e) {
          return n == null ? "" : Ml.call(n, e);
        }
        function Nn(n) {
          var e = n == null ? 0 : n.length;
          return e ? n[e - 1] : o;
        }
        function Gc(n, e, t) {
          var r = n == null ? 0 : n.length;
          if (!r)
            return -1;
          var i = r;
          return t !== o && (i = L(t), i = i < 0 ? rn(r + i, 0) : cn(i, r - 1)), e === e ? yl(n, e, i) : Ht(n, Zu, i, !0);
        }
        function Hc(n, e) {
          return n && n.length ? Tf(n, L(e)) : o;
        }
        var qc = O(_o);
        function _o(n, e) {
          return n && n.length && e && e.length ? Ci(n, e) : n;
        }
        function Kc(n, e, t) {
          return n && n.length && e && e.length ? Ci(n, e, A(t, 2)) : n;
        }
        function zc(n, e, t) {
          return n && n.length && e && e.length ? Ci(n, e, o, t) : n;
        }
        var Yc = ae(function(n, e) {
          var t = n == null ? 0 : n.length, r = wi(n, e);
          return Ef(n, J(e, function(i) {
            return le(i, t) ? +i : i;
          }).sort(Uf)), r;
        });
        function Zc(n, e) {
          var t = [];
          if (!(n && n.length))
            return t;
          var r = -1, i = [], f = n.length;
          for (e = A(e, 3); ++r < f; ) {
            var a = n[r];
            e(a, r, n) && (t.push(a), i.push(r));
          }
          return Ef(n, i), t;
        }
        function Yi(n) {
          return n == null ? n : $l.call(n);
        }
        function Xc(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (t && typeof t != "number" && gn(n, e, t) ? (e = 0, t = r) : (e = e == null ? 0 : L(e), t = t === o ? r : L(t)), Un(n, e, t)) : [];
        }
        function Jc(n, e) {
          return ar(n, e);
        }
        function Qc(n, e, t) {
          return Li(n, e, A(t, 2));
        }
        function Vc(n, e) {
          var t = n == null ? 0 : n.length;
          if (t) {
            var r = ar(n, e);
            if (r < t && Jn(n[r], e))
              return r;
          }
          return -1;
        }
        function kc(n, e) {
          return ar(n, e, !0);
        }
        function jc(n, e, t) {
          return Li(n, e, A(t, 2), !0);
        }
        function nh(n, e) {
          var t = n == null ? 0 : n.length;
          if (t) {
            var r = ar(n, e, !0) - 1;
            if (Jn(n[r], e))
              return r;
          }
          return -1;
        }
        function eh(n) {
          return n && n.length ? Wf(n) : [];
        }
        function th(n, e) {
          return n && n.length ? Wf(n, A(e, 2)) : [];
        }
        function rh(n) {
          var e = n == null ? 0 : n.length;
          return e ? Un(n, 1, e) : [];
        }
        function ih(n, e, t) {
          return n && n.length ? (e = t || e === o ? 1 : L(e), Un(n, 0, e < 0 ? 0 : e)) : [];
        }
        function uh(n, e, t) {
          var r = n == null ? 0 : n.length;
          return r ? (e = t || e === o ? 1 : L(e), e = r - e, Un(n, e < 0 ? 0 : e, r)) : [];
        }
        function fh(n, e) {
          return n && n.length ? lr(n, A(e, 3), !1, !0) : [];
        }
        function oh(n, e) {
          return n && n.length ? lr(n, A(e, 3)) : [];
        }
        var ah = O(function(n) {
          return Re(ln(n, 1, k, !0));
        }), lh = O(function(n) {
          var e = Nn(n);
          return k(e) && (e = o), Re(ln(n, 1, k, !0), A(e, 2));
        }), sh = O(function(n) {
          var e = Nn(n);
          return e = typeof e == "function" ? e : o, Re(ln(n, 1, k, !0), o, e);
        });
        function ch(n) {
          return n && n.length ? Re(n) : [];
        }
        function hh(n, e) {
          return n && n.length ? Re(n, A(e, 2)) : [];
        }
        function ph(n, e) {
          return e = typeof e == "function" ? e : o, n && n.length ? Re(n, o, e) : [];
        }
        function Zi(n) {
          if (!(n && n.length))
            return [];
          var e = 0;
          return n = we(n, function(t) {
            if (k(t))
              return e = rn(t.length, e), !0;
          }), si(e, function(t) {
            return J(n, oi(t));
          });
        }
        function vo(n, e) {
          if (!(n && n.length))
            return [];
          var t = Zi(n);
          return e == null ? t : J(t, function(r) {
            return In(e, o, r);
          });
        }
        var gh = O(function(n, e) {
          return k(n) ? mt(n, e) : [];
        }), dh = O(function(n) {
          return Oi(we(n, k));
        }), _h = O(function(n) {
          var e = Nn(n);
          return k(e) && (e = o), Oi(we(n, k), A(e, 2));
        }), vh = O(function(n) {
          var e = Nn(n);
          return e = typeof e == "function" ? e : o, Oi(we(n, k), o, e);
        }), wh = O(Zi);
        function mh(n, e) {
          return Df(n || [], e || [], wt);
        }
        function yh(n, e) {
          return Df(n || [], e || [], At);
        }
        var xh = O(function(n) {
          var e = n.length, t = e > 1 ? n[e - 1] : o;
          return t = typeof t == "function" ? (n.pop(), t) : o, vo(n, t);
        });
        function wo(n) {
          var e = u(n);
          return e.__chain__ = !0, e;
        }
        function Ah(n, e) {
          return e(n), n;
        }
        function wr(n, e) {
          return e(n);
        }
        var Rh = ae(function(n) {
          var e = n.length, t = e ? n[0] : 0, r = this.__wrapped__, i = function(f) {
            return wi(f, n);
          };
          return e > 1 || this.__actions__.length || !(r instanceof P) || !le(t) ? this.thru(i) : (r = r.slice(t, +t + (e ? 1 : 0)), r.__actions__.push({
            func: wr,
            args: [i],
            thisArg: o
          }), new Mn(r, this.__chain__).thru(function(f) {
            return e && !f.length && f.push(o), f;
          }));
        });
        function Ih() {
          return wo(this);
        }
        function Th() {
          return new Mn(this.value(), this.__chain__);
        }
        function Ch() {
          this.__values__ === o && (this.__values__ = bo(this.value()));
          var n = this.__index__ >= this.__values__.length, e = n ? o : this.__values__[this.__index__++];
          return { done: n, value: e };
        }
        function Sh() {
          return this;
        }
        function Eh(n) {
          for (var e, t = this; t instanceof rr; ) {
            var r = so(t);
            r.__index__ = 0, r.__values__ = o, e ? i.__wrapped__ = r : e = r;
            var i = r;
            t = t.__wrapped__;
          }
          return i.__wrapped__ = n, e;
        }
        function Lh() {
          var n = this.__wrapped__;
          if (n instanceof P) {
            var e = n;
            return this.__actions__.length && (e = new P(this)), e = e.reverse(), e.__actions__.push({
              func: wr,
              args: [Yi],
              thisArg: o
            }), new Mn(e, this.__chain__);
          }
          return this.thru(Yi);
        }
        function Wh() {
          return Pf(this.__wrapped__, this.__actions__);
        }
        var Oh = sr(function(n, e, t) {
          q.call(n, t) ? ++n[t] : fe(n, t, 1);
        });
        function bh(n, e, t) {
          var r = S(n) ? zu : As;
          return t && gn(n, e, t) && (e = o), r(n, A(e, 3));
        }
        function Ph(n, e) {
          var t = S(n) ? we : _f;
          return t(n, A(e, 3));
        }
        var Dh = Kf(co), Fh = Kf(ho);
        function Mh(n, e) {
          return ln(mr(n, e), 1);
        }
        function Bh(n, e) {
          return ln(mr(n, e), te);
        }
        function Uh(n, e, t) {
          return t = t === o ? 1 : L(t), ln(mr(n, e), t);
        }
        function mo(n, e) {
          var t = S(n) ? Dn : Ae;
          return t(n, A(e, 3));
        }
        function yo(n, e) {
          var t = S(n) ? rl : df;
          return t(n, A(e, 3));
        }
        var Nh = sr(function(n, e, t) {
          q.call(n, t) ? n[t].push(e) : fe(n, t, [e]);
        });
        function $h(n, e, t, r) {
          n = vn(n) ? n : tt(n), t = t && !r ? L(t) : 0;
          var i = n.length;
          return t < 0 && (t = rn(i + t, 0)), Ir(n) ? t <= i && n.indexOf(e, t) > -1 : !!i && Ke(n, e, t) > -1;
        }
        var Gh = O(function(n, e, t) {
          var r = -1, i = typeof e == "function", f = vn(n) ? h(n.length) : [];
          return Ae(n, function(a) {
            f[++r] = i ? In(e, a, t) : yt(a, e, t);
          }), f;
        }), Hh = sr(function(n, e, t) {
          fe(n, t, e);
        });
        function mr(n, e) {
          var t = S(n) ? J : Af;
          return t(n, A(e, 3));
        }
        function qh(n, e, t, r) {
          return n == null ? [] : (S(e) || (e = e == null ? [] : [e]), t = r ? o : t, S(t) || (t = t == null ? [] : [t]), Cf(n, e, t));
        }
        var Kh = sr(function(n, e, t) {
          n[t ? 0 : 1].push(e);
        }, function() {
          return [[], []];
        });
        function zh(n, e, t) {
          var r = S(n) ? ui : Ju, i = arguments.length < 3;
          return r(n, A(e, 4), t, i, Ae);
        }
        function Yh(n, e, t) {
          var r = S(n) ? il : Ju, i = arguments.length < 3;
          return r(n, A(e, 4), t, i, df);
        }
        function Zh(n, e) {
          var t = S(n) ? we : _f;
          return t(n, Ar(A(e, 3)));
        }
        function Xh(n) {
          var e = S(n) ? cf : $s;
          return e(n);
        }
        function Jh(n, e, t) {
          (t ? gn(n, e, t) : e === o) ? e = 1 : e = L(e);
          var r = S(n) ? vs : Gs;
          return r(n, e);
        }
        function Qh(n) {
          var e = S(n) ? ws : qs;
          return e(n);
        }
        function Vh(n) {
          if (n == null)
            return 0;
          if (vn(n))
            return Ir(n) ? Ye(n) : n.length;
          var e = hn(n);
          return e == zn || e == Yn ? n.size : Ii(n).length;
        }
        function kh(n, e, t) {
          var r = S(n) ? fi : Ks;
          return t && gn(n, e, t) && (e = o), r(n, A(e, 3));
        }
        var jh = O(function(n, e) {
          if (n == null)
            return [];
          var t = e.length;
          return t > 1 && gn(n, e[0], e[1]) ? e = [] : t > 2 && gn(e[0], e[1], e[2]) && (e = [e[0]]), Cf(n, ln(e, 1), []);
        }), yr = Pl || function() {
          return an.Date.now();
        };
        function np(n, e) {
          if (typeof e != "function")
            throw new Fn(D);
          return n = L(n), function() {
            if (--n < 1)
              return e.apply(this, arguments);
          };
        }
        function xo(n, e, t) {
          return e = t ? o : e, e = n && e == null ? n.length : e, oe(n, Kn, o, o, o, o, e);
        }
        function Ao(n, e) {
          var t;
          if (typeof e != "function")
            throw new Fn(D);
          return n = L(n), function() {
            return --n > 0 && (t = e.apply(this, arguments)), n <= 1 && (e = o), t;
          };
        }
        var Xi = O(function(n, e, t) {
          var r = nn;
          if (t.length) {
            var i = ye(t, nt(Xi));
            r |= qn;
          }
          return oe(n, r, e, t, i);
        }), Ro = O(function(n, e, t) {
          var r = nn | un;
          if (t.length) {
            var i = ye(t, nt(Ro));
            r |= qn;
          }
          return oe(e, r, n, t, i);
        });
        function Io(n, e, t) {
          e = t ? o : e;
          var r = oe(n, Rn, o, o, o, o, o, e);
          return r.placeholder = Io.placeholder, r;
        }
        function To(n, e, t) {
          e = t ? o : e;
          var r = oe(n, _e, o, o, o, o, o, e);
          return r.placeholder = To.placeholder, r;
        }
        function Co(n, e, t) {
          var r, i, f, a, l, c, g = 0, d = !1, _ = !1, w = !0;
          if (typeof n != "function")
            throw new Fn(D);
          e = $n(e) || 0, Q(t) && (d = !!t.leading, _ = "maxWait" in t, f = _ ? rn($n(t.maxWait) || 0, e) : f, w = "trailing" in t ? !!t.trailing : w);
          function x(j) {
            var Qn = r, he = i;
            return r = i = o, g = j, a = n.apply(he, Qn), a;
          }
          function R(j) {
            return g = j, l = Tt(b, e), d ? x(j) : a;
          }
          function W(j) {
            var Qn = j - c, he = j - g, zo = e - Qn;
            return _ ? cn(zo, f - he) : zo;
          }
          function I(j) {
            var Qn = j - c, he = j - g;
            return c === o || Qn >= e || Qn < 0 || _ && he >= f;
          }
          function b() {
            var j = yr();
            if (I(j))
              return F(j);
            l = Tt(b, W(j));
          }
          function F(j) {
            return l = o, w && r ? x(j) : (r = i = o, a);
          }
          function En() {
            l !== o && Ff(l), g = 0, r = c = i = l = o;
          }
          function dn() {
            return l === o ? a : F(yr());
          }
          function Ln() {
            var j = yr(), Qn = I(j);
            if (r = arguments, i = this, c = j, Qn) {
              if (l === o)
                return R(c);
              if (_)
                return Ff(l), l = Tt(b, e), x(c);
            }
            return l === o && (l = Tt(b, e)), a;
          }
          return Ln.cancel = En, Ln.flush = dn, Ln;
        }
        var ep = O(function(n, e) {
          return gf(n, 1, e);
        }), tp = O(function(n, e, t) {
          return gf(n, $n(e) || 0, t);
        });
        function rp(n) {
          return oe(n, Ge);
        }
        function xr(n, e) {
          if (typeof n != "function" || e != null && typeof e != "function")
            throw new Fn(D);
          var t = function() {
            var r = arguments, i = e ? e.apply(this, r) : r[0], f = t.cache;
            if (f.has(i))
              return f.get(i);
            var a = n.apply(this, r);
            return t.cache = f.set(i, a) || f, a;
          };
          return t.cache = new (xr.Cache || ue)(), t;
        }
        xr.Cache = ue;
        function Ar(n) {
          if (typeof n != "function")
            throw new Fn(D);
          return function() {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, e[0]);
              case 2:
                return !n.call(this, e[0], e[1]);
              case 3:
                return !n.call(this, e[0], e[1], e[2]);
            }
            return !n.apply(this, e);
          };
        }
        function ip(n) {
          return Ao(2, n);
        }
        var up = zs(function(n, e) {
          e = e.length == 1 && S(e[0]) ? J(e[0], Tn(A())) : J(ln(e, 1), Tn(A()));
          var t = e.length;
          return O(function(r) {
            for (var i = -1, f = cn(r.length, t); ++i < f; )
              r[i] = e[i].call(this, r[i]);
            return In(n, this, r);
          });
        }), Ji = O(function(n, e) {
          var t = ye(e, nt(Ji));
          return oe(n, qn, o, e, t);
        }), So = O(function(n, e) {
          var t = ye(e, nt(So));
          return oe(n, ve, o, e, t);
        }), fp = ae(function(n, e) {
          return oe(n, Le, o, o, o, e);
        });
        function op(n, e) {
          if (typeof n != "function")
            throw new Fn(D);
          return e = e === o ? e : L(e), O(n, e);
        }
        function ap(n, e) {
          if (typeof n != "function")
            throw new Fn(D);
          return e = e == null ? 0 : rn(L(e), 0), O(function(t) {
            var r = t[e], i = Te(t, 0, e);
            return r && me(i, r), In(n, this, i);
          });
        }
        function lp(n, e, t) {
          var r = !0, i = !0;
          if (typeof n != "function")
            throw new Fn(D);
          return Q(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), Co(n, e, {
            leading: r,
            maxWait: e,
            trailing: i
          });
        }
        function sp(n) {
          return xo(n, 1);
        }
        function cp(n, e) {
          return Ji(Pi(e), n);
        }
        function hp() {
          if (!arguments.length)
            return [];
          var n = arguments[0];
          return S(n) ? n : [n];
        }
        function pp(n) {
          return Bn(n, on);
        }
        function gp(n, e) {
          return e = typeof e == "function" ? e : o, Bn(n, on, e);
        }
        function dp(n) {
          return Bn(n, $ | on);
        }
        function _p(n, e) {
          return e = typeof e == "function" ? e : o, Bn(n, $ | on, e);
        }
        function vp(n, e) {
          return e == null || pf(n, e, fn(e));
        }
        function Jn(n, e) {
          return n === e || n !== n && e !== e;
        }
        var wp = gr(xi), mp = gr(function(n, e) {
          return n >= e;
        }), Ne = mf(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? mf : function(n) {
          return V(n) && q.call(n, "callee") && !uf.call(n, "callee");
        }, S = h.isArray, yp = Nu ? Tn(Nu) : Es;
        function vn(n) {
          return n != null && Rr(n.length) && !se(n);
        }
        function k(n) {
          return V(n) && vn(n);
        }
        function xp(n) {
          return n === !0 || n === !1 || V(n) && pn(n) == K;
        }
        var Ce = Fl || fu, Ap = $u ? Tn($u) : Ls;
        function Rp(n) {
          return V(n) && n.nodeType === 1 && !Ct(n);
        }
        function Ip(n) {
          if (n == null)
            return !0;
          if (vn(n) && (S(n) || typeof n == "string" || typeof n.splice == "function" || Ce(n) || et(n) || Ne(n)))
            return !n.length;
          var e = hn(n);
          if (e == zn || e == Yn)
            return !n.size;
          if (It(n))
            return !Ii(n).length;
          for (var t in n)
            if (q.call(n, t))
              return !1;
          return !0;
        }
        function Tp(n, e) {
          return xt(n, e);
        }
        function Cp(n, e, t) {
          t = typeof t == "function" ? t : o;
          var r = t ? t(n, e) : o;
          return r === o ? xt(n, e, o, t) : !!r;
        }
        function Qi(n) {
          if (!V(n))
            return !1;
          var e = pn(n);
          return e == ft || e == Nr || typeof n.message == "string" && typeof n.name == "string" && !Ct(n);
        }
        function Sp(n) {
          return typeof n == "number" && of(n);
        }
        function se(n) {
          if (!Q(n))
            return !1;
          var e = pn(n);
          return e == Mt || e == pu || e == E || e == Vo;
        }
        function Eo(n) {
          return typeof n == "number" && n == L(n);
        }
        function Rr(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= On;
        }
        function Q(n) {
          var e = typeof n;
          return n != null && (e == "object" || e == "function");
        }
        function V(n) {
          return n != null && typeof n == "object";
        }
        var Lo = Gu ? Tn(Gu) : Os;
        function Ep(n, e) {
          return n === e || Ri(n, e, $i(e));
        }
        function Lp(n, e, t) {
          return t = typeof t == "function" ? t : o, Ri(n, e, $i(e), t);
        }
        function Wp(n) {
          return Wo(n) && n != +n;
        }
        function Op(n) {
          if (gc(n))
            throw new C(M);
          return yf(n);
        }
        function bp(n) {
          return n === null;
        }
        function Pp(n) {
          return n == null;
        }
        function Wo(n) {
          return typeof n == "number" || V(n) && pn(n) == ot;
        }
        function Ct(n) {
          if (!V(n) || pn(n) != re)
            return !1;
          var e = Qt(n);
          if (e === null)
            return !0;
          var t = q.call(e, "constructor") && e.constructor;
          return typeof t == "function" && t instanceof t && Yt.call(t) == Ll;
        }
        var Vi = Hu ? Tn(Hu) : bs;
        function Dp(n) {
          return Eo(n) && n >= -On && n <= On;
        }
        var Oo = qu ? Tn(qu) : Ps;
        function Ir(n) {
          return typeof n == "string" || !S(n) && V(n) && pn(n) == lt;
        }
        function Sn(n) {
          return typeof n == "symbol" || V(n) && pn(n) == Bt;
        }
        var et = Ku ? Tn(Ku) : Ds;
        function Fp(n) {
          return n === o;
        }
        function Mp(n) {
          return V(n) && hn(n) == st;
        }
        function Bp(n) {
          return V(n) && pn(n) == jo;
        }
        var Up = gr(Ti), Np = gr(function(n, e) {
          return n <= e;
        });
        function bo(n) {
          if (!n)
            return [];
          if (vn(n))
            return Ir(n) ? Zn(n) : _n(n);
          if (pt && n[pt])
            return vl(n[pt]());
          var e = hn(n), t = e == zn ? hi : e == Yn ? qt : tt;
          return t(n);
        }
        function ce(n) {
          if (!n)
            return n === 0 ? n : 0;
          if (n = $n(n), n === te || n === -te) {
            var e = n < 0 ? -1 : 1;
            return e * Dt;
          }
          return n === n ? n : 0;
        }
        function L(n) {
          var e = ce(n), t = e % 1;
          return e === e ? t ? e - t : e : 0;
        }
        function Po(n) {
          return n ? Fe(L(n), 0, bn) : 0;
        }
        function $n(n) {
          if (typeof n == "number")
            return n;
          if (Sn(n))
            return We;
          if (Q(n)) {
            var e = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Q(e) ? e + "" : e;
          }
          if (typeof n != "string")
            return n === 0 ? n : +n;
          n = Qu(n);
          var t = ya.test(n);
          return t || Aa.test(n) ? nl(n.slice(2), t ? 2 : 8) : ma.test(n) ? We : +n;
        }
        function Do(n) {
          return kn(n, wn(n));
        }
        function $p(n) {
          return n ? Fe(L(n), -On, On) : n === 0 ? n : 0;
        }
        function G(n) {
          return n == null ? "" : Cn(n);
        }
        var Gp = ke(function(n, e) {
          if (It(e) || vn(e)) {
            kn(e, fn(e), n);
            return;
          }
          for (var t in e)
            q.call(e, t) && wt(n, t, e[t]);
        }), Fo = ke(function(n, e) {
          kn(e, wn(e), n);
        }), Tr = ke(function(n, e, t, r) {
          kn(e, wn(e), n, r);
        }), Hp = ke(function(n, e, t, r) {
          kn(e, fn(e), n, r);
        }), qp = ae(wi);
        function Kp(n, e) {
          var t = Ve(n);
          return e == null ? t : hf(t, e);
        }
        var zp = O(function(n, e) {
          n = z(n);
          var t = -1, r = e.length, i = r > 2 ? e[2] : o;
          for (i && gn(e[0], e[1], i) && (r = 1); ++t < r; )
            for (var f = e[t], a = wn(f), l = -1, c = a.length; ++l < c; ) {
              var g = a[l], d = n[g];
              (d === o || Jn(d, Xe[g]) && !q.call(n, g)) && (n[g] = f[g]);
            }
          return n;
        }), Yp = O(function(n) {
          return n.push(o, Vf), In(Mo, o, n);
        });
        function Zp(n, e) {
          return Yu(n, A(e, 3), Vn);
        }
        function Xp(n, e) {
          return Yu(n, A(e, 3), yi);
        }
        function Jp(n, e) {
          return n == null ? n : mi(n, A(e, 3), wn);
        }
        function Qp(n, e) {
          return n == null ? n : vf(n, A(e, 3), wn);
        }
        function Vp(n, e) {
          return n && Vn(n, A(e, 3));
        }
        function kp(n, e) {
          return n && yi(n, A(e, 3));
        }
        function jp(n) {
          return n == null ? [] : fr(n, fn(n));
        }
        function ng(n) {
          return n == null ? [] : fr(n, wn(n));
        }
        function ki(n, e, t) {
          var r = n == null ? o : Me(n, e);
          return r === o ? t : r;
        }
        function eg(n, e) {
          return n != null && no(n, e, Is);
        }
        function ji(n, e) {
          return n != null && no(n, e, Ts);
        }
        var tg = Yf(function(n, e, t) {
          e != null && typeof e.toString != "function" && (e = Zt.call(e)), n[e] = t;
        }, eu(mn)), rg = Yf(function(n, e, t) {
          e != null && typeof e.toString != "function" && (e = Zt.call(e)), q.call(n, e) ? n[e].push(t) : n[e] = [t];
        }, A), ig = O(yt);
        function fn(n) {
          return vn(n) ? sf(n) : Ii(n);
        }
        function wn(n) {
          return vn(n) ? sf(n, !0) : Fs(n);
        }
        function ug(n, e) {
          var t = {};
          return e = A(e, 3), Vn(n, function(r, i, f) {
            fe(t, e(r, i, f), r);
          }), t;
        }
        function fg(n, e) {
          var t = {};
          return e = A(e, 3), Vn(n, function(r, i, f) {
            fe(t, i, e(r, i, f));
          }), t;
        }
        var og = ke(function(n, e, t) {
          or(n, e, t);
        }), Mo = ke(function(n, e, t, r) {
          or(n, e, t, r);
        }), ag = ae(function(n, e) {
          var t = {};
          if (n == null)
            return t;
          var r = !1;
          e = J(e, function(f) {
            return f = Ie(f, n), r || (r = f.length > 1), f;
          }), kn(n, Ui(n), t), r && (t = Bn(t, $ | Wn | on, tc));
          for (var i = e.length; i--; )
            Wi(t, e[i]);
          return t;
        });
        function lg(n, e) {
          return Bo(n, Ar(A(e)));
        }
        var sg = ae(function(n, e) {
          return n == null ? {} : Bs(n, e);
        });
        function Bo(n, e) {
          if (n == null)
            return {};
          var t = J(Ui(n), function(r) {
            return [r];
          });
          return e = A(e), Sf(n, t, function(r, i) {
            return e(r, i[0]);
          });
        }
        function cg(n, e, t) {
          e = Ie(e, n);
          var r = -1, i = e.length;
          for (i || (i = 1, n = o); ++r < i; ) {
            var f = n == null ? o : n[jn(e[r])];
            f === o && (r = i, f = t), n = se(f) ? f.call(n) : f;
          }
          return n;
        }
        function hg(n, e, t) {
          return n == null ? n : At(n, e, t);
        }
        function pg(n, e, t, r) {
          return r = typeof r == "function" ? r : o, n == null ? n : At(n, e, t, r);
        }
        var Uo = Jf(fn), No = Jf(wn);
        function gg(n, e, t) {
          var r = S(n), i = r || Ce(n) || et(n);
          if (e = A(e, 4), t == null) {
            var f = n && n.constructor;
            i ? t = r ? new f() : [] : Q(n) ? t = se(f) ? Ve(Qt(n)) : {} : t = {};
          }
          return (i ? Dn : Vn)(n, function(a, l, c) {
            return e(t, a, l, c);
          }), t;
        }
        function dg(n, e) {
          return n == null ? !0 : Wi(n, e);
        }
        function _g(n, e, t) {
          return n == null ? n : bf(n, e, Pi(t));
        }
        function vg(n, e, t, r) {
          return r = typeof r == "function" ? r : o, n == null ? n : bf(n, e, Pi(t), r);
        }
        function tt(n) {
          return n == null ? [] : ci(n, fn(n));
        }
        function wg(n) {
          return n == null ? [] : ci(n, wn(n));
        }
        function mg(n, e, t) {
          return t === o && (t = e, e = o), t !== o && (t = $n(t), t = t === t ? t : 0), e !== o && (e = $n(e), e = e === e ? e : 0), Fe($n(n), e, t);
        }
        function yg(n, e, t) {
          return e = ce(e), t === o ? (t = e, e = 0) : t = ce(t), n = $n(n), Cs(n, e, t);
        }
        function xg(n, e, t) {
          if (t && typeof t != "boolean" && gn(n, e, t) && (e = t = o), t === o && (typeof e == "boolean" ? (t = e, e = o) : typeof n == "boolean" && (t = n, n = o)), n === o && e === o ? (n = 0, e = 1) : (n = ce(n), e === o ? (e = n, n = 0) : e = ce(e)), n > e) {
            var r = n;
            n = e, e = r;
          }
          if (t || n % 1 || e % 1) {
            var i = af();
            return cn(n + i * (e - n + ja("1e-" + ((i + "").length - 1))), e);
          }
          return Si(n, e);
        }
        var Ag = je(function(n, e, t) {
          return e = e.toLowerCase(), n + (t ? $o(e) : e);
        });
        function $o(n) {
          return nu(G(n).toLowerCase());
        }
        function Go(n) {
          return n = G(n), n && n.replace(Ia, hl).replace(qa, "");
        }
        function Rg(n, e, t) {
          n = G(n), e = Cn(e);
          var r = n.length;
          t = t === o ? r : Fe(L(t), 0, r);
          var i = t;
          return t -= e.length, t >= 0 && n.slice(t, i) == e;
        }
        function Ig(n) {
          return n = G(n), n && ia.test(n) ? n.replace(_u, pl) : n;
        }
        function Tg(n) {
          return n = G(n), n && sa.test(n) ? n.replace(Jr, "\\$&") : n;
        }
        var Cg = je(function(n, e, t) {
          return n + (t ? "-" : "") + e.toLowerCase();
        }), Sg = je(function(n, e, t) {
          return n + (t ? " " : "") + e.toLowerCase();
        }), Eg = qf("toLowerCase");
        function Lg(n, e, t) {
          n = G(n), e = L(e);
          var r = e ? Ye(n) : 0;
          if (!e || r >= e)
            return n;
          var i = (e - r) / 2;
          return pr(nr(i), t) + n + pr(jt(i), t);
        }
        function Wg(n, e, t) {
          n = G(n), e = L(e);
          var r = e ? Ye(n) : 0;
          return e && r < e ? n + pr(e - r, t) : n;
        }
        function Og(n, e, t) {
          n = G(n), e = L(e);
          var r = e ? Ye(n) : 0;
          return e && r < e ? pr(e - r, t) + n : n;
        }
        function bg(n, e, t) {
          return t || e == null ? e = 0 : e && (e = +e), Nl(G(n).replace(Qr, ""), e || 0);
        }
        function Pg(n, e, t) {
          return (t ? gn(n, e, t) : e === o) ? e = 1 : e = L(e), Ei(G(n), e);
        }
        function Dg() {
          var n = arguments, e = G(n[0]);
          return n.length < 3 ? e : e.replace(n[1], n[2]);
        }
        var Fg = je(function(n, e, t) {
          return n + (t ? "_" : "") + e.toLowerCase();
        });
        function Mg(n, e, t) {
          return t && typeof t != "number" && gn(n, e, t) && (e = t = o), t = t === o ? bn : t >>> 0, t ? (n = G(n), n && (typeof e == "string" || e != null && !Vi(e)) && (e = Cn(e), !e && ze(n)) ? Te(Zn(n), 0, t) : n.split(e, t)) : [];
        }
        var Bg = je(function(n, e, t) {
          return n + (t ? " " : "") + nu(e);
        });
        function Ug(n, e, t) {
          return n = G(n), t = t == null ? 0 : Fe(L(t), 0, n.length), e = Cn(e), n.slice(t, t + e.length) == e;
        }
        function Ng(n, e, t) {
          var r = u.templateSettings;
          t && gn(n, e, t) && (e = o), n = G(n), e = Tr({}, e, r, Qf);
          var i = Tr({}, e.imports, r.imports, Qf), f = fn(i), a = ci(i, f), l, c, g = 0, d = e.interpolate || Ut, _ = "__p += '", w = pi(
            (e.escape || Ut).source + "|" + d.source + "|" + (d === vu ? wa : Ut).source + "|" + (e.evaluate || Ut).source + "|$",
            "g"
          ), x = "//# sourceURL=" + (q.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Xa + "]") + `
`;
          n.replace(w, function(I, b, F, En, dn, Ln) {
            return F || (F = En), _ += n.slice(g, Ln).replace(Ta, gl), b && (l = !0, _ += `' +
__e(` + b + `) +
'`), dn && (c = !0, _ += `';
` + dn + `;
__p += '`), F && (_ += `' +
((__t = (` + F + `)) == null ? '' : __t) +
'`), g = Ln + I.length, I;
          }), _ += `';
`;
          var R = q.call(e, "variable") && e.variable;
          if (!R)
            _ = `with (obj) {
` + _ + `
}
`;
          else if (_a.test(R))
            throw new C($e);
          _ = (c ? _.replace(na, "") : _).replace(ea, "$1").replace(ta, "$1;"), _ = "function(" + (R || "obj") + `) {
` + (R ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + _ + `return __p
}`;
          var W = qo(function() {
            return N(f, x + "return " + _).apply(o, a);
          });
          if (W.source = _, Qi(W))
            throw W;
          return W;
        }
        function $g(n) {
          return G(n).toLowerCase();
        }
        function Gg(n) {
          return G(n).toUpperCase();
        }
        function Hg(n, e, t) {
          if (n = G(n), n && (t || e === o))
            return Qu(n);
          if (!n || !(e = Cn(e)))
            return n;
          var r = Zn(n), i = Zn(e), f = Vu(r, i), a = ku(r, i) + 1;
          return Te(r, f, a).join("");
        }
        function qg(n, e, t) {
          if (n = G(n), n && (t || e === o))
            return n.slice(0, nf(n) + 1);
          if (!n || !(e = Cn(e)))
            return n;
          var r = Zn(n), i = ku(r, Zn(e)) + 1;
          return Te(r, 0, i).join("");
        }
        function Kg(n, e, t) {
          if (n = G(n), n && (t || e === o))
            return n.replace(Qr, "");
          if (!n || !(e = Cn(e)))
            return n;
          var r = Zn(n), i = Vu(r, Zn(e));
          return Te(r, i).join("");
        }
        function zg(n, e) {
          var t = br, r = Pr;
          if (Q(e)) {
            var i = "separator" in e ? e.separator : i;
            t = "length" in e ? L(e.length) : t, r = "omission" in e ? Cn(e.omission) : r;
          }
          n = G(n);
          var f = n.length;
          if (ze(n)) {
            var a = Zn(n);
            f = a.length;
          }
          if (t >= f)
            return n;
          var l = t - Ye(r);
          if (l < 1)
            return r;
          var c = a ? Te(a, 0, l).join("") : n.slice(0, l);
          if (i === o)
            return c + r;
          if (a && (l += c.length - l), Vi(i)) {
            if (n.slice(l).search(i)) {
              var g, d = c;
              for (i.global || (i = pi(i.source, G(wu.exec(i)) + "g")), i.lastIndex = 0; g = i.exec(d); )
                var _ = g.index;
              c = c.slice(0, _ === o ? l : _);
            }
          } else if (n.indexOf(Cn(i), l) != l) {
            var w = c.lastIndexOf(i);
            w > -1 && (c = c.slice(0, w));
          }
          return c + r;
        }
        function Yg(n) {
          return n = G(n), n && ra.test(n) ? n.replace(du, xl) : n;
        }
        var Zg = je(function(n, e, t) {
          return n + (t ? " " : "") + e.toUpperCase();
        }), nu = qf("toUpperCase");
        function Ho(n, e, t) {
          return n = G(n), e = t ? o : e, e === o ? _l(n) ? Il(n) : ol(n) : n.match(e) || [];
        }
        var qo = O(function(n, e) {
          try {
            return In(n, o, e);
          } catch (t) {
            return Qi(t) ? t : new C(t);
          }
        }), Xg = ae(function(n, e) {
          return Dn(e, function(t) {
            t = jn(t), fe(n, t, Xi(n[t], n));
          }), n;
        });
        function Jg(n) {
          var e = n == null ? 0 : n.length, t = A();
          return n = e ? J(n, function(r) {
            if (typeof r[1] != "function")
              throw new Fn(D);
            return [t(r[0]), r[1]];
          }) : [], O(function(r) {
            for (var i = -1; ++i < e; ) {
              var f = n[i];
              if (In(f[0], this, r))
                return In(f[1], this, r);
            }
          });
        }
        function Qg(n) {
          return xs(Bn(n, $));
        }
        function eu(n) {
          return function() {
            return n;
          };
        }
        function Vg(n, e) {
          return n == null || n !== n ? e : n;
        }
        var kg = zf(), jg = zf(!0);
        function mn(n) {
          return n;
        }
        function tu(n) {
          return xf(typeof n == "function" ? n : Bn(n, $));
        }
        function nd(n) {
          return Rf(Bn(n, $));
        }
        function ed(n, e) {
          return If(n, Bn(e, $));
        }
        var td = O(function(n, e) {
          return function(t) {
            return yt(t, n, e);
          };
        }), rd = O(function(n, e) {
          return function(t) {
            return yt(n, t, e);
          };
        });
        function ru(n, e, t) {
          var r = fn(e), i = fr(e, r);
          t == null && !(Q(e) && (i.length || !r.length)) && (t = e, e = n, n = this, i = fr(e, fn(e)));
          var f = !(Q(t) && "chain" in t) || !!t.chain, a = se(n);
          return Dn(i, function(l) {
            var c = e[l];
            n[l] = c, a && (n.prototype[l] = function() {
              var g = this.__chain__;
              if (f || g) {
                var d = n(this.__wrapped__), _ = d.__actions__ = _n(this.__actions__);
                return _.push({ func: c, args: arguments, thisArg: n }), d.__chain__ = g, d;
              }
              return c.apply(n, me([this.value()], arguments));
            });
          }), n;
        }
        function id() {
          return an._ === this && (an._ = Wl), this;
        }
        function iu() {
        }
        function ud(n) {
          return n = L(n), O(function(e) {
            return Tf(e, n);
          });
        }
        var fd = Fi(J), od = Fi(zu), ad = Fi(fi);
        function Ko(n) {
          return Hi(n) ? oi(jn(n)) : Us(n);
        }
        function ld(n) {
          return function(e) {
            return n == null ? o : Me(n, e);
          };
        }
        var sd = Zf(), cd = Zf(!0);
        function uu() {
          return [];
        }
        function fu() {
          return !1;
        }
        function hd() {
          return {};
        }
        function pd() {
          return "";
        }
        function gd() {
          return !0;
        }
        function dd(n, e) {
          if (n = L(n), n < 1 || n > On)
            return [];
          var t = bn, r = cn(n, bn);
          e = A(e), n -= bn;
          for (var i = si(r, e); ++t < n; )
            e(t);
          return i;
        }
        function _d(n) {
          return S(n) ? J(n, jn) : Sn(n) ? [n] : _n(lo(G(n)));
        }
        function vd(n) {
          var e = ++El;
          return G(n) + e;
        }
        var wd = hr(function(n, e) {
          return n + e;
        }, 0), md = Mi("ceil"), yd = hr(function(n, e) {
          return n / e;
        }, 1), xd = Mi("floor");
        function Ad(n) {
          return n && n.length ? ur(n, mn, xi) : o;
        }
        function Rd(n, e) {
          return n && n.length ? ur(n, A(e, 2), xi) : o;
        }
        function Id(n) {
          return Xu(n, mn);
        }
        function Td(n, e) {
          return Xu(n, A(e, 2));
        }
        function Cd(n) {
          return n && n.length ? ur(n, mn, Ti) : o;
        }
        function Sd(n, e) {
          return n && n.length ? ur(n, A(e, 2), Ti) : o;
        }
        var Ed = hr(function(n, e) {
          return n * e;
        }, 1), Ld = Mi("round"), Wd = hr(function(n, e) {
          return n - e;
        }, 0);
        function Od(n) {
          return n && n.length ? li(n, mn) : 0;
        }
        function bd(n, e) {
          return n && n.length ? li(n, A(e, 2)) : 0;
        }
        return u.after = np, u.ary = xo, u.assign = Gp, u.assignIn = Fo, u.assignInWith = Tr, u.assignWith = Hp, u.at = qp, u.before = Ao, u.bind = Xi, u.bindAll = Xg, u.bindKey = Ro, u.castArray = hp, u.chain = wo, u.chunk = xc, u.compact = Ac, u.concat = Rc, u.cond = Jg, u.conforms = Qg, u.constant = eu, u.countBy = Oh, u.create = Kp, u.curry = Io, u.curryRight = To, u.debounce = Co, u.defaults = zp, u.defaultsDeep = Yp, u.defer = ep, u.delay = tp, u.difference = Ic, u.differenceBy = Tc, u.differenceWith = Cc, u.drop = Sc, u.dropRight = Ec, u.dropRightWhile = Lc, u.dropWhile = Wc, u.fill = Oc, u.filter = Ph, u.flatMap = Mh, u.flatMapDeep = Bh, u.flatMapDepth = Uh, u.flatten = po, u.flattenDeep = bc, u.flattenDepth = Pc, u.flip = rp, u.flow = kg, u.flowRight = jg, u.fromPairs = Dc, u.functions = jp, u.functionsIn = ng, u.groupBy = Nh, u.initial = Mc, u.intersection = Bc, u.intersectionBy = Uc, u.intersectionWith = Nc, u.invert = tg, u.invertBy = rg, u.invokeMap = Gh, u.iteratee = tu, u.keyBy = Hh, u.keys = fn, u.keysIn = wn, u.map = mr, u.mapKeys = ug, u.mapValues = fg, u.matches = nd, u.matchesProperty = ed, u.memoize = xr, u.merge = og, u.mergeWith = Mo, u.method = td, u.methodOf = rd, u.mixin = ru, u.negate = Ar, u.nthArg = ud, u.omit = ag, u.omitBy = lg, u.once = ip, u.orderBy = qh, u.over = fd, u.overArgs = up, u.overEvery = od, u.overSome = ad, u.partial = Ji, u.partialRight = So, u.partition = Kh, u.pick = sg, u.pickBy = Bo, u.property = Ko, u.propertyOf = ld, u.pull = qc, u.pullAll = _o, u.pullAllBy = Kc, u.pullAllWith = zc, u.pullAt = Yc, u.range = sd, u.rangeRight = cd, u.rearg = fp, u.reject = Zh, u.remove = Zc, u.rest = op, u.reverse = Yi, u.sampleSize = Jh, u.set = hg, u.setWith = pg, u.shuffle = Qh, u.slice = Xc, u.sortBy = jh, u.sortedUniq = eh, u.sortedUniqBy = th, u.split = Mg, u.spread = ap, u.tail = rh, u.take = ih, u.takeRight = uh, u.takeRightWhile = fh, u.takeWhile = oh, u.tap = Ah, u.throttle = lp, u.thru = wr, u.toArray = bo, u.toPairs = Uo, u.toPairsIn = No, u.toPath = _d, u.toPlainObject = Do, u.transform = gg, u.unary = sp, u.union = ah, u.unionBy = lh, u.unionWith = sh, u.uniq = ch, u.uniqBy = hh, u.uniqWith = ph, u.unset = dg, u.unzip = Zi, u.unzipWith = vo, u.update = _g, u.updateWith = vg, u.values = tt, u.valuesIn = wg, u.without = gh, u.words = Ho, u.wrap = cp, u.xor = dh, u.xorBy = _h, u.xorWith = vh, u.zip = wh, u.zipObject = mh, u.zipObjectDeep = yh, u.zipWith = xh, u.entries = Uo, u.entriesIn = No, u.extend = Fo, u.extendWith = Tr, ru(u, u), u.add = wd, u.attempt = qo, u.camelCase = Ag, u.capitalize = $o, u.ceil = md, u.clamp = mg, u.clone = pp, u.cloneDeep = dp, u.cloneDeepWith = _p, u.cloneWith = gp, u.conformsTo = vp, u.deburr = Go, u.defaultTo = Vg, u.divide = yd, u.endsWith = Rg, u.eq = Jn, u.escape = Ig, u.escapeRegExp = Tg, u.every = bh, u.find = Dh, u.findIndex = co, u.findKey = Zp, u.findLast = Fh, u.findLastIndex = ho, u.findLastKey = Xp, u.floor = xd, u.forEach = mo, u.forEachRight = yo, u.forIn = Jp, u.forInRight = Qp, u.forOwn = Vp, u.forOwnRight = kp, u.get = ki, u.gt = wp, u.gte = mp, u.has = eg, u.hasIn = ji, u.head = go, u.identity = mn, u.includes = $h, u.indexOf = Fc, u.inRange = yg, u.invoke = ig, u.isArguments = Ne, u.isArray = S, u.isArrayBuffer = yp, u.isArrayLike = vn, u.isArrayLikeObject = k, u.isBoolean = xp, u.isBuffer = Ce, u.isDate = Ap, u.isElement = Rp, u.isEmpty = Ip, u.isEqual = Tp, u.isEqualWith = Cp, u.isError = Qi, u.isFinite = Sp, u.isFunction = se, u.isInteger = Eo, u.isLength = Rr, u.isMap = Lo, u.isMatch = Ep, u.isMatchWith = Lp, u.isNaN = Wp, u.isNative = Op, u.isNil = Pp, u.isNull = bp, u.isNumber = Wo, u.isObject = Q, u.isObjectLike = V, u.isPlainObject = Ct, u.isRegExp = Vi, u.isSafeInteger = Dp, u.isSet = Oo, u.isString = Ir, u.isSymbol = Sn, u.isTypedArray = et, u.isUndefined = Fp, u.isWeakMap = Mp, u.isWeakSet = Bp, u.join = $c, u.kebabCase = Cg, u.last = Nn, u.lastIndexOf = Gc, u.lowerCase = Sg, u.lowerFirst = Eg, u.lt = Up, u.lte = Np, u.max = Ad, u.maxBy = Rd, u.mean = Id, u.meanBy = Td, u.min = Cd, u.minBy = Sd, u.stubArray = uu, u.stubFalse = fu, u.stubObject = hd, u.stubString = pd, u.stubTrue = gd, u.multiply = Ed, u.nth = Hc, u.noConflict = id, u.noop = iu, u.now = yr, u.pad = Lg, u.padEnd = Wg, u.padStart = Og, u.parseInt = bg, u.random = xg, u.reduce = zh, u.reduceRight = Yh, u.repeat = Pg, u.replace = Dg, u.result = cg, u.round = Ld, u.runInContext = s, u.sample = Xh, u.size = Vh, u.snakeCase = Fg, u.some = kh, u.sortedIndex = Jc, u.sortedIndexBy = Qc, u.sortedIndexOf = Vc, u.sortedLastIndex = kc, u.sortedLastIndexBy = jc, u.sortedLastIndexOf = nh, u.startCase = Bg, u.startsWith = Ug, u.subtract = Wd, u.sum = Od, u.sumBy = bd, u.template = Ng, u.times = dd, u.toFinite = ce, u.toInteger = L, u.toLength = Po, u.toLower = $g, u.toNumber = $n, u.toSafeInteger = $p, u.toString = G, u.toUpper = Gg, u.trim = Hg, u.trimEnd = qg, u.trimStart = Kg, u.truncate = zg, u.unescape = Yg, u.uniqueId = vd, u.upperCase = Zg, u.upperFirst = nu, u.each = mo, u.eachRight = yo, u.first = go, ru(u, (function() {
          var n = {};
          return Vn(u, function(e, t) {
            q.call(u.prototype, t) || (n[t] = e);
          }), n;
        })(), { chain: !1 }), u.VERSION = U, Dn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
          u[n].placeholder = u;
        }), Dn(["drop", "take"], function(n, e) {
          P.prototype[n] = function(t) {
            t = t === o ? 1 : rn(L(t), 0);
            var r = this.__filtered__ && !e ? new P(this) : this.clone();
            return r.__filtered__ ? r.__takeCount__ = cn(t, r.__takeCount__) : r.__views__.push({
              size: cn(t, bn),
              type: n + (r.__dir__ < 0 ? "Right" : "")
            }), r;
          }, P.prototype[n + "Right"] = function(t) {
            return this.reverse()[n](t).reverse();
          };
        }), Dn(["filter", "map", "takeWhile"], function(n, e) {
          var t = e + 1, r = t == bt || t == Mr;
          P.prototype[n] = function(i) {
            var f = this.clone();
            return f.__iteratees__.push({
              iteratee: A(i, 3),
              type: t
            }), f.__filtered__ = f.__filtered__ || r, f;
          };
        }), Dn(["head", "last"], function(n, e) {
          var t = "take" + (e ? "Right" : "");
          P.prototype[n] = function() {
            return this[t](1).value()[0];
          };
        }), Dn(["initial", "tail"], function(n, e) {
          var t = "drop" + (e ? "" : "Right");
          P.prototype[n] = function() {
            return this.__filtered__ ? new P(this) : this[t](1);
          };
        }), P.prototype.compact = function() {
          return this.filter(mn);
        }, P.prototype.find = function(n) {
          return this.filter(n).head();
        }, P.prototype.findLast = function(n) {
          return this.reverse().find(n);
        }, P.prototype.invokeMap = O(function(n, e) {
          return typeof n == "function" ? new P(this) : this.map(function(t) {
            return yt(t, n, e);
          });
        }), P.prototype.reject = function(n) {
          return this.filter(Ar(A(n)));
        }, P.prototype.slice = function(n, e) {
          n = L(n);
          var t = this;
          return t.__filtered__ && (n > 0 || e < 0) ? new P(t) : (n < 0 ? t = t.takeRight(-n) : n && (t = t.drop(n)), e !== o && (e = L(e), t = e < 0 ? t.dropRight(-e) : t.take(e - n)), t);
        }, P.prototype.takeRightWhile = function(n) {
          return this.reverse().takeWhile(n).reverse();
        }, P.prototype.toArray = function() {
          return this.take(bn);
        }, Vn(P.prototype, function(n, e) {
          var t = /^(?:filter|find|map|reject)|While$/.test(e), r = /^(?:head|last)$/.test(e), i = u[r ? "take" + (e == "last" ? "Right" : "") : e], f = r || /^find/.test(e);
          i && (u.prototype[e] = function() {
            var a = this.__wrapped__, l = r ? [1] : arguments, c = a instanceof P, g = l[0], d = c || S(a), _ = function(b) {
              var F = i.apply(u, me([b], l));
              return r && w ? F[0] : F;
            };
            d && t && typeof g == "function" && g.length != 1 && (c = d = !1);
            var w = this.__chain__, x = !!this.__actions__.length, R = f && !w, W = c && !x;
            if (!f && d) {
              a = W ? a : new P(this);
              var I = n.apply(a, l);
              return I.__actions__.push({ func: wr, args: [_], thisArg: o }), new Mn(I, w);
            }
            return R && W ? n.apply(this, l) : (I = this.thru(_), R ? r ? I.value()[0] : I.value() : I);
          });
        }), Dn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
          var e = Kt[n], t = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n);
          u.prototype[n] = function() {
            var i = arguments;
            if (r && !this.__chain__) {
              var f = this.value();
              return e.apply(S(f) ? f : [], i);
            }
            return this[t](function(a) {
              return e.apply(S(a) ? a : [], i);
            });
          };
        }), Vn(P.prototype, function(n, e) {
          var t = u[e];
          if (t) {
            var r = t.name + "";
            q.call(Qe, r) || (Qe[r] = []), Qe[r].push({ name: e, func: t });
          }
        }), Qe[cr(o, un).name] = [{
          name: "wrapper",
          func: o
        }], P.prototype.clone = Yl, P.prototype.reverse = Zl, P.prototype.value = Xl, u.prototype.at = Rh, u.prototype.chain = Ih, u.prototype.commit = Th, u.prototype.next = Ch, u.prototype.plant = Eh, u.prototype.reverse = Lh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = Wh, u.prototype.first = u.prototype.head, pt && (u.prototype[pt] = Sh), u;
      }), Ze = Tl();
      Oe ? ((Oe.exports = Ze)._ = Ze, ti._ = Ze) : an._ = Ze;
    }).call(f_);
  })(Et, Et.exports)), Et.exports;
}
var a_ = o_();
const l_ = { class: "routing-widget" }, s_ = { class: "routing-header" }, c_ = ["value"], h_ = { class: "waypoints-list" }, p_ = { class: "waypoint-input-wrapper" }, g_ = { class: "waypoint-label" }, d_ = ["onUpdate:modelValue", "onInput", "onFocus"], __ = {
  key: 0,
  class: "suggestions-dropdown"
}, v_ = ["onMousedown"], w_ = ["onClick"], m_ = { class: "routing-actions" }, y_ = ["disabled"], x_ = {
  key: 0,
  class: "route-result"
}, A_ = { class: "result-summary" }, R_ = { class: "summary-item" }, I_ = { class: "summary-value" }, T_ = { class: "summary-item" }, C_ = { class: "summary-value" }, S_ = { class: "summary-item" }, E_ = { class: "summary-value" }, L_ = { class: "maneuvers-section" }, W_ = {
  key: 0,
  class: "maneuvers-list"
}, O_ = { class: "maneuver-instruction" }, b_ = { class: "maneuver-distance" }, P_ = /* @__PURE__ */ Xo({
  __name: "RoutingWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(H, { expose: B }) {
    const o = H, { datasourceId: U, config: T, id: M } = Jo(o), D = ou(Jd.TINY_EMITTER), $e = ou(Pd), Or = Zd().params.pageid || "", An = T.value?.waypoints, $ = pe(
      Array.isArray(An) ? [...An] : []
    ), Wn = pe(
      T.value?.costing || T.value?.defaultCosting || "auto"
    ), on = pe(null), Hn = pe(!1), ee = pe(!1), nn = pe(
      Array.isArray(An) && An.length > 0 ? An.map((v) => v.name || `${v.lat.toFixed(4)}, ${v.lon.toFixed(4)}`) : ["", ""]
    ), un = pe(
      Array.isArray(An) && An.length > 0 ? An.map(() => []) : [[], []]
    ), Ee = pe(-1);
    function Rn() {
      if (!T.value) return;
      const v = $.value.filter((m) => m.lat !== 0 || m.lon !== 0);
      T.value.waypoints = v.length > 0 ? [...v] : void 0, T.value.costing = Wn.value;
    }
    St($, Rn, { deep: !0 }), St(Wn, Rn);
    const _e = pe(null), { update: qn } = Xd(
      U,
      "object",
      _e
    );
    St(U, (v, m) => {
      qn(v, m);
    }), St(_e, (v) => {
      v && (on.value = v);
    });
    const ve = [
      { text: "Auto", value: "auto", icon: "🚗" },
      { text: "Fahrrad", value: "bicycle", icon: "🚲" },
      { text: "Zu Fuß", value: "pedestrian", icon: "🚶" },
      { text: "LKW", value: "truck", icon: "🚛" },
      { text: "Bus", value: "bus", icon: "🚌" },
      { text: "Roller", value: "motor_scooter", icon: "🛵" },
      { text: "Motorrad", value: "motorcycle", icon: "🏍️" }
    ], Kn = au(() => {
      const v = ve.find((m) => m.value === Wn.value);
      return v ? `${v.icon} ${v.text}` : Wn.value;
    }), Le = au(() => {
      if (!on.value) return "";
      const v = on.value.summary.duration_min;
      if (v < 60) return `${v} min`;
      const m = Math.floor(v / 60), E = v % 60;
      return E > 0 ? `${m} h ${E} min` : `${m} h`;
    }), Ge = au(() => on.value?.legs ? on.value.legs.flatMap(
      (v, m) => v.maneuvers.map((E) => ({ ...E, legIndex: m }))
    ) : []);
    async function br(v, m) {
      if (!v || v.length < 3) {
        un.value[m] = [];
        return;
      }
      try {
        const E = "https://nominatim.openstreetmap.org/search?" + new URLSearchParams({
          q: v,
          format: "json",
          limit: "5",
          addressdetails: "1"
        }), K = await fetch(E, {
          headers: { "User-Agent": "DaanseBoard/1.0" }
        });
        un.value[m] = await K.json();
      } catch {
        un.value[m] = [];
      }
    }
    const Pr = a_.debounce(br, 400);
    function Dr(v) {
      Ee.value = v, Pr(nn.value[v], v);
    }
    function Fr(v, m) {
      const E = {
        lat: parseFloat(m.lat),
        lon: parseFloat(m.lon),
        name: m.display_name?.split(",")[0] || ""
      };
      nn.value[v] = E.name || m.display_name, un.value[v] = [], Ee.value = -1, v < $.value.length ? $.value[v] = E : $.value.push(E), We(E, v);
    }
    function bt() {
      const v = $.value.length > 0 ? $.value.length - 1 : $.value.length;
      $.value.splice(v, 0, {
        lat: 0,
        lon: 0,
        name: ""
      }), nn.value.splice(v, 0, ""), un.value.splice(v, 0, []);
    }
    function Pt(v) {
      const m = $.value.splice(v, 1)[0];
      nn.value.splice(v, 1), un.value.splice(v, 1), m && bn(m, v);
    }
    function Mr(v) {
      return v === 0 ? "Start" : v === $.value.length - 1 && $.value.length > 1 ? "Ziel" : `Halt ${v}`;
    }
    function te(v) {
      return v === 0 ? "#4caf50" : v === $.value.length - 1 && $.value.length > 1 ? "#f44336" : "#2196f3";
    }
    async function On() {
      const v = $.value.filter(
        (m) => m.lat !== 0 || m.lon !== 0
      );
      if (!(v.length < 2)) {
        Hn.value = !0;
        try {
          const {
            DatasourceRepository: m,
            identifier: E
          } = await import("org.eclipse.daanse.board.app.lib.repository.datasource"), en = ou(E).getDatasource(U.value);
          en && typeof en.callEvent == "function" && await en.callEvent(Vd, {
            waypoints: v,
            costing: Wn.value
          });
        } catch (m) {
          console.warn("Route calculation failed:", m);
        } finally {
          Hn.value = !1;
        }
      }
    }
    function Dt() {
      $.value = [], nn.value = ["", ""], un.value = [[], []], on.value = null, Rn(), M?.value && D.emit("widget:RoutingWidget:route_cleared", {
        type: "widget:RoutingWidget:route_cleared",
        widgetId: M.value,
        payload: { widgetId: M.value, timestamp: Date.now() }
      });
    }
    function We(v, m) {
      if (!M?.value) return;
      const E = new ne();
      E.lat = v.lat, E.lon = v.lon, E.name = v.name, E.index = m, D.emit("widget:RoutingWidget:waypoint_added", {
        type: "widget:RoutingWidget:waypoint_added",
        widgetId: M.value,
        payload: E,
        timestamp: Date.now()
      });
    }
    function bn(v, m) {
      if (!M?.value) return;
      const E = new ne();
      E.lat = v.lat, E.lon = v.lon, E.name = v.name, E.index = m, D.emit("widget:RoutingWidget:waypoint_removed", {
        type: "widget:RoutingWidget:waypoint_removed",
        widgetId: M.value,
        payload: E,
        timestamp: Date.now()
      });
    }
    function Br(v) {
      if (!M?.value) return;
      const m = new ge();
      m.geojson = v.geojson, m.distance_km = v.summary.distance_km, m.duration_min = v.summary.duration_min, m.waypoints = v.waypoints, m.costing = Wn.value, D.emit("widget:RoutingWidget:route_calculated", {
        type: "widget:RoutingWidget:route_calculated",
        widgetId: M.value,
        payload: m,
        timestamp: Date.now()
      });
    }
    St(on, (v) => {
      v && Br(v);
    });
    class Ur extends Se {
      addWaypoint(m, E, K) {
        const en = { lat: m, lon: E, name: K };
        $.value.push(en), nn.value.push(K || `${m.toFixed(4)}, ${E.toFixed(4)}`), un.value.push([]), We(en, $.value.length - 1);
      }
      removeWaypoint(m) {
        Pt(m);
      }
      clearWaypoints() {
        Dt();
      }
      setCosting(m) {
        Wn.value = m;
      }
      calculateRoute() {
        On();
      }
    }
    const Ft = new Ur();
    return B(Ft), Nd(() => {
      M?.value && $e.registerInstance(
        M.value,
        Ft,
        "RoutingWidget",
        Or
      ), $.value.filter((m) => m.lat !== 0 || m.lon !== 0).length >= 2 && On();
    }), $d(() => {
      M?.value && $e.unregisterInstance(M.value);
    }), (v, m) => (xn(), yn("div", l_, [
      Z("div", s_, [
        m[2] || (m[2] = Z("span", { class: "routing-title" }, "Routing", -1)),
        Yo(Z("select", {
          "onUpdate:modelValue": m[0] || (m[0] = (E) => Wn.value = E),
          class: "costing-select"
        }, [
          (xn(), yn(Cr, null, Sr(ve, (E) => Z("option", {
            key: E.value,
            value: E.value
          }, Gn(E.icon) + " " + Gn(E.text), 9, c_)), 64))
        ], 512), [
          [Gd, Wn.value]
        ])
      ]),
      Z("div", h_, [
        (xn(!0), yn(Cr, null, Sr(Math.max(2, $.value.length), (E, K) => (xn(), yn("div", {
          key: K,
          class: "waypoint-row"
        }, [
          Z("div", {
            class: "waypoint-dot",
            style: Hd({ backgroundColor: te(K) })
          }, null, 4),
          Z("div", p_, [
            Z("label", g_, Gn(Mr(K)), 1),
            Yo(Z("input", {
              "onUpdate:modelValue": (en) => nn.value[K] = en,
              class: "waypoint-input",
              placeholder: "Adresse eingeben...",
              onInput: (en) => Dr(K),
              onFocus: (en) => Ee.value = K
            }, null, 40, d_), [
              [qd, nn.value[K]]
            ]),
            Ee.value === K && un.value[K] && un.value[K].length > 0 ? (xn(), yn("div", __, [
              (xn(!0), yn(Cr, null, Sr(un.value[K], (en, Nr) => (xn(), yn("div", {
                key: Nr,
                class: "suggestion-item",
                onMousedown: Kd((ft) => Fr(K, en), ["prevent"])
              }, Gn(en.display_name), 41, v_))), 128))
            ])) : rt("", !0)
          ]),
          K >= 2 ? (xn(), yn("button", {
            key: 0,
            class: "remove-btn",
            title: "Entfernen",
            onClick: (en) => Pt(K)
          }, " × ", 8, w_)) : rt("", !0)
        ]))), 128))
      ]),
      Z("div", m_, [
        Z("button", {
          class: "btn-secondary",
          onClick: bt
        }, " + Zwischenhalt "),
        Z("button", {
          class: "btn-primary",
          disabled: Hn.value,
          onClick: On
        }, Gn(Hn.value ? "Berechne..." : "Route berechnen"), 9, y_),
        on.value || $.value.length > 0 ? (xn(), yn("button", {
          key: 0,
          class: "btn-clear",
          onClick: Dt
        }, " Löschen ")) : rt("", !0)
      ]),
      on.value ? (xn(), yn("div", x_, [
        Z("div", A_, [
          Z("div", R_, [
            Z("span", I_, Gn(on.value.summary.distance_km.toFixed(1)) + " km ", 1),
            m[3] || (m[3] = Z("span", { class: "summary-label" }, "Distanz", -1))
          ]),
          Z("div", T_, [
            Z("span", C_, Gn(Le.value), 1),
            m[4] || (m[4] = Z("span", { class: "summary-label" }, "Dauer", -1))
          ]),
          Z("div", S_, [
            Z("span", E_, Gn(Kn.value), 1),
            m[5] || (m[5] = Z("span", { class: "summary-label" }, "Verkehrsart", -1))
          ])
        ]),
        Z("div", L_, [
          Z("button", {
            class: "maneuvers-toggle",
            onClick: m[1] || (m[1] = (E) => ee.value = !ee.value)
          }, Gn(ee.value ? "▾" : "▸") + " Manöver (" + Gn(Ge.value.length) + ") ", 1),
          ee.value ? (xn(), yn("div", W_, [
            (xn(!0), yn(Cr, null, Sr(Ge.value, (E, K) => (xn(), yn("div", {
              key: K,
              class: "maneuver-item"
            }, [
              Z("span", O_, Gn(E.instruction), 1),
              Z("span", b_, Gn(E.length.toFixed(1)) + " km ", 1)
            ]))), 128))
          ])) : rt("", !0)
        ])
      ])) : rt("", !0)
    ]));
  }
}), D_ = {
  key: 0,
  class: "routing-settings"
}, F_ = /* @__PURE__ */ Xo({
  __name: "RoutingWidgetSettings",
  props: {
    widgetSettings: {}
  },
  setup(H) {
    const B = H, { widgetSettings: o } = Jo(B), U = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Zu Fuß", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Roller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ];
    return o.value && !o.value.defaultCosting && (o.value.defaultCosting = "auto"), (T, M) => {
      const D = zd("VaSelect");
      return lu(o) ? (xn(), yn("div", D_, [
        Yd(D, {
          modelValue: lu(o).defaultCosting,
          "onUpdate:modelValue": M[0] || (M[0] = ($e) => lu(o).defaultCosting = $e),
          label: "Default Verkehrsart",
          options: U,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"])
      ])) : rt("", !0);
    };
  }
}), M_ = (H, B) => {
  const o = H.__vccOpts || H;
  for (const [U, T] of B)
    o[U] = T;
  return o;
}, B_ = /* @__PURE__ */ M_(F_, [["__scopeId", "data-v-79a5860e"]]), U_ = [
  {
    name: "Route Calculated",
    type: "route_calculated",
    description: "Triggered when a route has been calculated",
    payloadType: ge
  },
  {
    name: "Waypoint Added",
    type: "waypoint_added",
    description: "Triggered when a waypoint is added",
    payloadType: ne
  },
  {
    name: "Waypoint Removed",
    type: "waypoint_removed",
    description: "Triggered when a waypoint is removed",
    payloadType: ne
  },
  {
    name: "Route Cleared",
    type: "route_cleared",
    description: "Triggered when all waypoints and the route are cleared",
    payloadType: su
  }
];
var N_ = Object.defineProperty, $_ = Object.getOwnPropertyDescriptor, hu = (H, B, o, U) => {
  for (var T = U > 1 ? void 0 : U ? $_(B, o) : B, M = H.length - 1, D; M >= 0; M--)
    (D = H[M]) && (T = (U ? D(B, o, T) : D(T)) || T);
  return U && T && N_(B, o, T), T;
}, G_ = (H, B) => (o, U) => B(o, U, H);
const Lr = "RoutingWidget";
let Wr = class {
  constructor(H) {
    this.events = H;
  }
  type = Lr;
  component = P_;
  settingsComponent = B_;
  supportedDSTypes = ["valhalla"];
  icon = jd;
  name = "Routing";
  register() {
    this.events.registerWidget(Lr, U_);
  }
  unregister() {
    this.events.unregisterWidget(Lr);
  }
};
hu([
  Fd()
], Wr.prototype, "register", 1);
hu([
  Md()
], Wr.prototype, "unregister", 1);
Wr = hu([
  Bd({
    service: [kd],
    properties: { "widget.type": Lr }
  }),
  G_(0, Ud(Dd))
], Wr);
export {
  P_ as RoutingWidget,
  Wr as RoutingWidgetProvider,
  B_ as RoutingWidgetSettings
};
