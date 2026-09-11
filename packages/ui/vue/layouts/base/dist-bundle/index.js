(function(){var i="ui.vue.layouts.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".dottet[data-v-c7f1768a]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-c7f1768a]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-c7f1768a]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-c7f1768a]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-c7f1768a]{display:flex;border:1px solid var(--color-divider);border-radius:8px;margin:16px}.widget-board[data-v-c7f1768a]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow:auto}.report-container .add-btn[data-v-c7f1768a]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-c7f1768a]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-c7f1768a]{position:absolute}.dropdown-buttons-container[data-v-c7f1768a]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-c7f1768a]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-c7f1768a]{z-index:20000000!important}.add_widget-button[data-v-c7f1768a]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-c7f1768a],.v-leave-active[data-v-c7f1768a]{transition:opacity .5s ease}.v-enter-from[data-v-c7f1768a],.v-leave-to[data-v-c7f1768a]{opacity:0}.ghost{display:none}.report-container[data-v-189ac721]{width:100%;height:100%;position:relative}.scroll-viewport[data-v-189ac721]{width:100%;height:100%;overflow:auto}.canvas[data-v-189ac721]{position:relative;min-width:100%;min-height:100%;box-sizing:border-box}.dottet[data-v-189ac721]{background:var(--color-canvas, #dee1e7);background-image:radial-gradient(var(--color-divider, #ccd1d9) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat;transition:background-color .12s ease}.ghost-placeholder[data-v-189ac721]{position:absolute;background-color:color-mix(in srgb,var(--color-accent, #2f5fbd) 10%,transparent);border-radius:var(--radius-sm, 5px);border:2px dashed var(--color-outline, #b9bec9);z-index:1000000;pointer-events:none}.widget-board[data-v-189ac721]{position:absolute;top:0;left:0;width:100%;height:100%}.minimap-canvas[data-v-189ac721]{position:relative;width:100%;height:100%;cursor:pointer}.minimap-widget[data-v-189ac721]{position:absolute;background:color-mix(in srgb,var(--color-accent, #2f5fbd) 30%,transparent);border:1px solid color-mix(in srgb,var(--color-accent, #2f5fbd) 55%,transparent);border-radius:1px}.minimap-viewport[data-v-189ac721]{position:absolute;border:2px solid var(--color-err, #b02a1c);background:color-mix(in srgb,var(--color-err, #b02a1c) 8%,transparent);border-radius:2px;pointer-events:none}.report-container .add-btn[data-v-189ac721]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-189ac721]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-189ac721]{position:absolute}.widget-board-dropdown[data-v-189ac721]{width:100%;height:100%}.dropdown-buttons-container[data-v-189ac721]{display:flex;flex-direction:column;gap:2px;z-index:99999}.menu__item[data-v-189ac721]{justify-content:flex-start;gap:7px;white-space:nowrap}:root[data-board-backdrop=on] .canvas.dottet[data-v-189ac721]{background-color:transparent}.dashboard-item-container.is-selected[data-v-189ac721]:after{content:\"\";position:absolute;inset:-2px;border:1px solid var(--color-accent, #2f5fbd);border-radius:var(--radius-sm, 5px);pointer-events:none}.dashboard-item-container.in-group[data-v-189ac721]:before{content:\"\";position:absolute;inset:-1px;border:1px dashed color-mix(in srgb,var(--color-accent, #2f5fbd) 45%,transparent);border-radius:var(--radius-sm, 5px);pointer-events:none}.align-bar[data-v-189ac721]{position:absolute;top:10px;left:50%;transform:translate(-50%);z-index:30000;display:flex;align-items:center;gap:8px;padding:4px 6px;background:var(--color-pane, #f6f7f9);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-md, 6px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.align-bar__count[data-v-189ac721]{padding:0 4px 0 6px;font-size:var(--text-xs, 11px);color:var(--color-dim, #6b7482);white-space:nowrap}.align-bar__group[data-v-189ac721]{display:flex;gap:1px;padding-left:8px;border-left:1px solid var(--color-divider, #ccd1d9)}.align-bar__btn[data-v-189ac721]{display:flex;align-items:center;justify-content:center;width:26px;height:26px;color:var(--color-fg, #22252b);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.align-bar__btn[data-v-189ac721]:hover{background-color:var(--color-raised, #ffffff)}.align-bar__btn[data-v-189ac721]:focus-visible{outline:2px solid var(--color-accent, #2f5fbd);outline-offset:-2px}.align-bar__btn--quiet[data-v-189ac721]{font-size:15px;line-height:1;color:var(--color-dim, #6b7482)}.align-bar__btn--quiet[data-v-189ac721]:hover{color:var(--color-fg, #22252b)}.canvas-context-menu[data-v-189ac721]{position:absolute;background:var(--color-raised, #ffffff);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-sm, 5px);padding:8px;box-shadow:var(--shadow-e2, 0 2px 8px rgba(25, 30, 45, .14));color:var(--color-fg, #22252b);z-index:10000001}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-189ac721]{z-index:20000000!important}.add_widget-button[data-v-189ac721]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-189ac721]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px}.v-enter-active[data-v-189ac721],.v-leave-active[data-v-189ac721]{transition:opacity .5s ease}.v-enter-from[data-v-189ac721],.v-leave-to[data-v-189ac721]{opacity:0}.bounce-enter-active[data-v-189ac721]{animation:bounce-in-189ac721 .5s}.bounce-leave-active[data-v-189ac721]{animation:bounce-in-189ac721 .5s reverse}@keyframes bounce-in-189ac721{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}\n";})();
import { LAYOUT_REPOSITORY as yp } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { ref as Rr, computed as Ee, defineComponent as uf, inject as bp, onMounted as Pu, nextTick as Au, createElementBlock as Pr, openBlock as mr, Fragment as Vi, renderList as Oo, unref as dr, normalizeStyle as Qe, normalizeClass as Sp, createElementVNode as St, createVNode as li, onUnmounted as xv, watch as mu, withModifiers as yv, createBlock as co, createCommentVNode as mn, withCtx as vo, toDisplayString as po, createStaticVNode as eb, createTextVNode as bv } from "vue";
import { useBoard as nb } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { defineStore as ib } from "pinia";
import { WidgetWrapper as Cp, defaultConfig as ab } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as wp, useRouter as ob } from "vue-router";
import ub from "vuedraggable";
import { DButton as Sv, DIcon as Cv, DFloatingWindow as fb } from "org.eclipse.daanse.board.app.ui.vue.controls";
const { identifiers: sb } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ep = ib("widget-clipboard", () => {
  const t = Rr(null), e = Ee(() => t.value !== null);
  return { clipboardItem: t, hasClipboard: e, copy: (s, u) => {
    t.value = { widget: s, layout: u };
  }, paste: () => t.value, clear: () => {
    t.value = null;
  } };
});
var ho = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ki = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lb = Ki.exports, wv;
function cb() {
  return wv || (wv = 1, (function(t, e) {
    (function() {
      var r, n = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", v = 500, p = "__lodash_placeholder__", h = 1, d = 2, m = 4, _ = 1, x = 2, y = 1, S = 2, E = 4, R = 8, O = 16, T = 32, C = 64, D = 128, I = 256, A = 512, B = 30, H = "...", W = 800, G = 16, Y = 1, X = 2, rt = 3, et = 1 / 0, Z = 9007199254740991, it = 17976931348623157e292, at = NaN, $ = 4294967295, lt = $ - 1, pt = $ >>> 1, ft = [
        ["ary", D],
        ["bind", y],
        ["bindKey", S],
        ["curry", R],
        ["curryRight", O],
        ["flip", A],
        ["partial", T],
        ["partialRight", C],
        ["rearg", I]
      ], ct = "[object Arguments]", ot = "[object Array]", gt = "[object AsyncFunction]", mt = "[object Boolean]", Tt = "[object Date]", Wt = "[object DOMException]", ut = "[object Error]", vt = "[object Function]", Ot = "[object GeneratorFunction]", yt = "[object Map]", Et = "[object Number]", It = "[object Null]", At = "[object Object]", $t = "[object Promise]", zt = "[object Proxy]", Ht = "[object RegExp]", Vt = "[object Set]", ur = "[object String]", nr = "[object Symbol]", fr = "[object Undefined]", tr = "[object WeakMap]", ue = "[object WeakSet]", Ar = "[object ArrayBuffer]", Br = "[object DataView]", We = "[object Float32Array]", Dn = "[object Float64Array]", Ie = "[object Int8Array]", Ne = "[object Int16Array]", an = "[object Int32Array]", He = "[object Uint8Array]", Pe = "[object Uint8ClampedArray]", on = "[object Uint16Array]", Mn = "[object Uint32Array]", J = /\b__p \+= '';/g, V = /\b(__p \+=) '' \+/g, U = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ht = /&(?:amp|lt|gt|quot|#39);/g, Kt = /[&<>"']/g, kr = RegExp(ht.source), Zt = RegExp(Kt.source), te = /<%-([\s\S]+?)%>/g, Oi = /<%([\s\S]+?)%>/g, Ii = /<%=([\s\S]+?)%>/g, Sa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sn = /^\w*$/, Pi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, as = /[\\^$.*+?()[\]{}|]/g, Ah = RegExp(as.source), os = /^\s+/, Bh = /\s/, zh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Gh = /\{\n\/\* \[wrapped with (.+)\] \*/, Fh = /,? & /, kh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Lh = /[()=,{}\[\]\/\s]/, Wh = /\\(\\)?/g, Nh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $f = /\w*$/, Hh = /^[-+]0x[0-9a-f]+$/i, Yh = /^0b[01]+$/i, Xh = /^\[object .+?Constructor\]$/, qh = /^0o[0-7]+$/i, Uh = /^(?:0|[1-9]\d*)$/, $h = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ca = /($^)/, Vh = /['\n\r\u2028\u2029\\]/g, wa = "\\ud800-\\udfff", Kh = "\\u0300-\\u036f", Zh = "\\ufe20-\\ufe2f", Jh = "\\u20d0-\\u20ff", Vf = Kh + Zh + Jh, Kf = "\\u2700-\\u27bf", Zf = "a-z\\xdf-\\xf6\\xf8-\\xff", Qh = "\\xac\\xb1\\xd7\\xf7", jh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", tg = "\\u2000-\\u206f", rg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Jf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Qf = "\\ufe0e\\ufe0f", jf = Qh + jh + tg + rg, ss = "['’]", eg = "[" + wa + "]", tl = "[" + jf + "]", Ea = "[" + Vf + "]", rl = "\\d+", ng = "[" + Kf + "]", el = "[" + Zf + "]", nl = "[^" + wa + jf + rl + Kf + Zf + Jf + "]", us = "\\ud83c[\\udffb-\\udfff]", ig = "(?:" + Ea + "|" + us + ")", il = "[^" + wa + "]", fs = "(?:\\ud83c[\\udde6-\\uddff]){2}", ls = "[\\ud800-\\udbff][\\udc00-\\udfff]", Kn = "[" + Jf + "]", al = "\\u200d", ol = "(?:" + el + "|" + nl + ")", ag = "(?:" + Kn + "|" + nl + ")", sl = "(?:" + ss + "(?:d|ll|m|re|s|t|ve))?", ul = "(?:" + ss + "(?:D|LL|M|RE|S|T|VE))?", fl = ig + "?", ll = "[" + Qf + "]?", og = "(?:" + al + "(?:" + [il, fs, ls].join("|") + ")" + ll + fl + ")*", sg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ug = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", cl = ll + fl + og, fg = "(?:" + [ng, fs, ls].join("|") + ")" + cl, lg = "(?:" + [il + Ea + "?", Ea, fs, ls, eg].join("|") + ")", cg = RegExp(ss, "g"), vg = RegExp(Ea, "g"), cs = RegExp(us + "(?=" + us + ")|" + lg + cl, "g"), pg = RegExp([
        Kn + "?" + el + "+" + sl + "(?=" + [tl, Kn, "$"].join("|") + ")",
        ag + "+" + ul + "(?=" + [tl, Kn + ol, "$"].join("|") + ")",
        Kn + "?" + ol + "+" + sl,
        Kn + "+" + ul,
        ug,
        sg,
        rl,
        fg
      ].join("|"), "g"), dg = RegExp("[" + al + wa + Vf + Qf + "]"), hg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gg = [
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
      ], mg = -1, or = {};
      or[We] = or[Dn] = or[Ie] = or[Ne] = or[an] = or[He] = or[Pe] = or[on] = or[Mn] = !0, or[ct] = or[ot] = or[Ar] = or[mt] = or[Br] = or[Tt] = or[ut] = or[vt] = or[yt] = or[Et] = or[At] = or[Ht] = or[Vt] = or[ur] = or[tr] = !1;
      var ar = {};
      ar[ct] = ar[ot] = ar[Ar] = ar[Br] = ar[mt] = ar[Tt] = ar[We] = ar[Dn] = ar[Ie] = ar[Ne] = ar[an] = ar[yt] = ar[Et] = ar[At] = ar[Ht] = ar[Vt] = ar[ur] = ar[nr] = ar[He] = ar[Pe] = ar[on] = ar[Mn] = !0, ar[ut] = ar[vt] = ar[tr] = !1;
      var _g = {
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
      }, xg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, yg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, bg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Sg = parseFloat, Cg = parseInt, vl = typeof ho == "object" && ho && ho.Object === Object && ho, wg = typeof self == "object" && self && self.Object === Object && self, Tr = vl || wg || Function("return this")(), vs = e && !e.nodeType && e, Rn = vs && !0 && t && !t.nodeType && t, pl = Rn && Rn.exports === vs, ps = pl && vl.process, fe = (function() {
        try {
          var L = Rn && Rn.require && Rn.require("util").types;
          return L || ps && ps.binding && ps.binding("util");
        } catch {
        }
      })(), dl = fe && fe.isArrayBuffer, hl = fe && fe.isDate, gl = fe && fe.isMap, ml = fe && fe.isRegExp, _l = fe && fe.isSet, xl = fe && fe.isTypedArray;
      function re(L, K, q) {
        switch (q.length) {
          case 0:
            return L.call(K);
          case 1:
            return L.call(K, q[0]);
          case 2:
            return L.call(K, q[0], q[1]);
          case 3:
            return L.call(K, q[0], q[1], q[2]);
        }
        return L.apply(K, q);
      }
      function Eg(L, K, q, xt) {
        for (var Bt = -1, Jt = L == null ? 0 : L.length; ++Bt < Jt; ) {
          var Sr = L[Bt];
          K(xt, Sr, q(Sr), L);
        }
        return xt;
      }
      function le(L, K) {
        for (var q = -1, xt = L == null ? 0 : L.length; ++q < xt && K(L[q], q, L) !== !1; )
          ;
        return L;
      }
      function Dg(L, K) {
        for (var q = L == null ? 0 : L.length; q-- && K(L[q], q, L) !== !1; )
          ;
        return L;
      }
      function yl(L, K) {
        for (var q = -1, xt = L == null ? 0 : L.length; ++q < xt; )
          if (!K(L[q], q, L))
            return !1;
        return !0;
      }
      function un(L, K) {
        for (var q = -1, xt = L == null ? 0 : L.length, Bt = 0, Jt = []; ++q < xt; ) {
          var Sr = L[q];
          K(Sr, q, L) && (Jt[Bt++] = Sr);
        }
        return Jt;
      }
      function Da(L, K) {
        var q = L == null ? 0 : L.length;
        return !!q && Zn(L, K, 0) > -1;
      }
      function ds(L, K, q) {
        for (var xt = -1, Bt = L == null ? 0 : L.length; ++xt < Bt; )
          if (q(K, L[xt]))
            return !0;
        return !1;
      }
      function lr(L, K) {
        for (var q = -1, xt = L == null ? 0 : L.length, Bt = Array(xt); ++q < xt; )
          Bt[q] = K(L[q], q, L);
        return Bt;
      }
      function fn(L, K) {
        for (var q = -1, xt = K.length, Bt = L.length; ++q < xt; )
          L[Bt + q] = K[q];
        return L;
      }
      function hs(L, K, q, xt) {
        var Bt = -1, Jt = L == null ? 0 : L.length;
        for (xt && Jt && (q = L[++Bt]); ++Bt < Jt; )
          q = K(q, L[Bt], Bt, L);
        return q;
      }
      function Mg(L, K, q, xt) {
        var Bt = L == null ? 0 : L.length;
        for (xt && Bt && (q = L[--Bt]); Bt--; )
          q = K(q, L[Bt], Bt, L);
        return q;
      }
      function gs(L, K) {
        for (var q = -1, xt = L == null ? 0 : L.length; ++q < xt; )
          if (K(L[q], q, L))
            return !0;
        return !1;
      }
      var Rg = ms("length");
      function Tg(L) {
        return L.split("");
      }
      function Og(L) {
        return L.match(kh) || [];
      }
      function bl(L, K, q) {
        var xt;
        return q(L, function(Bt, Jt, Sr) {
          if (K(Bt, Jt, Sr))
            return xt = Jt, !1;
        }), xt;
      }
      function Ma(L, K, q, xt) {
        for (var Bt = L.length, Jt = q + (xt ? 1 : -1); xt ? Jt-- : ++Jt < Bt; )
          if (K(L[Jt], Jt, L))
            return Jt;
        return -1;
      }
      function Zn(L, K, q) {
        return K === K ? Hg(L, K, q) : Ma(L, Sl, q);
      }
      function Ig(L, K, q, xt) {
        for (var Bt = q - 1, Jt = L.length; ++Bt < Jt; )
          if (xt(L[Bt], K))
            return Bt;
        return -1;
      }
      function Sl(L) {
        return L !== L;
      }
      function Cl(L, K) {
        var q = L == null ? 0 : L.length;
        return q ? xs(L, K) / q : at;
      }
      function ms(L) {
        return function(K) {
          return K == null ? r : K[L];
        };
      }
      function _s(L) {
        return function(K) {
          return L == null ? r : L[K];
        };
      }
      function wl(L, K, q, xt, Bt) {
        return Bt(L, function(Jt, Sr, ir) {
          q = xt ? (xt = !1, Jt) : K(q, Jt, Sr, ir);
        }), q;
      }
      function Pg(L, K) {
        var q = L.length;
        for (L.sort(K); q--; )
          L[q] = L[q].value;
        return L;
      }
      function xs(L, K) {
        for (var q, xt = -1, Bt = L.length; ++xt < Bt; ) {
          var Jt = K(L[xt]);
          Jt !== r && (q = q === r ? Jt : q + Jt);
        }
        return q;
      }
      function ys(L, K) {
        for (var q = -1, xt = Array(L); ++q < L; )
          xt[q] = K(q);
        return xt;
      }
      function Ag(L, K) {
        return lr(K, function(q) {
          return [q, L[q]];
        });
      }
      function El(L) {
        return L && L.slice(0, Tl(L) + 1).replace(os, "");
      }
      function ee(L) {
        return function(K) {
          return L(K);
        };
      }
      function bs(L, K) {
        return lr(K, function(q) {
          return L[q];
        });
      }
      function Ai(L, K) {
        return L.has(K);
      }
      function Dl(L, K) {
        for (var q = -1, xt = L.length; ++q < xt && Zn(K, L[q], 0) > -1; )
          ;
        return q;
      }
      function Ml(L, K) {
        for (var q = L.length; q-- && Zn(K, L[q], 0) > -1; )
          ;
        return q;
      }
      function Bg(L, K) {
        for (var q = L.length, xt = 0; q--; )
          L[q] === K && ++xt;
        return xt;
      }
      var zg = _s(_g), Gg = _s(xg);
      function Fg(L) {
        return "\\" + bg[L];
      }
      function kg(L, K) {
        return L == null ? r : L[K];
      }
      function Jn(L) {
        return dg.test(L);
      }
      function Lg(L) {
        return hg.test(L);
      }
      function Wg(L) {
        for (var K, q = []; !(K = L.next()).done; )
          q.push(K.value);
        return q;
      }
      function Ss(L) {
        var K = -1, q = Array(L.size);
        return L.forEach(function(xt, Bt) {
          q[++K] = [Bt, xt];
        }), q;
      }
      function Rl(L, K) {
        return function(q) {
          return L(K(q));
        };
      }
      function ln(L, K) {
        for (var q = -1, xt = L.length, Bt = 0, Jt = []; ++q < xt; ) {
          var Sr = L[q];
          (Sr === K || Sr === p) && (L[q] = p, Jt[Bt++] = q);
        }
        return Jt;
      }
      function Ra(L) {
        var K = -1, q = Array(L.size);
        return L.forEach(function(xt) {
          q[++K] = xt;
        }), q;
      }
      function Ng(L) {
        var K = -1, q = Array(L.size);
        return L.forEach(function(xt) {
          q[++K] = [xt, xt];
        }), q;
      }
      function Hg(L, K, q) {
        for (var xt = q - 1, Bt = L.length; ++xt < Bt; )
          if (L[xt] === K)
            return xt;
        return -1;
      }
      function Yg(L, K, q) {
        for (var xt = q + 1; xt--; )
          if (L[xt] === K)
            return xt;
        return xt;
      }
      function Qn(L) {
        return Jn(L) ? qg(L) : Rg(L);
      }
      function be(L) {
        return Jn(L) ? Ug(L) : Tg(L);
      }
      function Tl(L) {
        for (var K = L.length; K-- && Bh.test(L.charAt(K)); )
          ;
        return K;
      }
      var Xg = _s(yg);
      function qg(L) {
        for (var K = cs.lastIndex = 0; cs.test(L); )
          ++K;
        return K;
      }
      function Ug(L) {
        return L.match(cs) || [];
      }
      function $g(L) {
        return L.match(pg) || [];
      }
      var Vg = (function L(K) {
        K = K == null ? Tr : jn.defaults(Tr.Object(), K, jn.pick(Tr, gg));
        var q = K.Array, xt = K.Date, Bt = K.Error, Jt = K.Function, Sr = K.Math, ir = K.Object, Cs = K.RegExp, Kg = K.String, ce = K.TypeError, Ta = q.prototype, Zg = Jt.prototype, ti = ir.prototype, Oa = K["__core-js_shared__"], Ia = Zg.toString, jt = ti.hasOwnProperty, Jg = 0, Ol = (function() {
          var i = /[^.]+$/.exec(Oa && Oa.keys && Oa.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), Pa = ti.toString, Qg = Ia.call(ir), jg = Tr._, t0 = Cs(
          "^" + Ia.call(jt).replace(as, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Aa = pl ? K.Buffer : r, cn = K.Symbol, Ba = K.Uint8Array, Il = Aa ? Aa.allocUnsafe : r, za = Rl(ir.getPrototypeOf, ir), Pl = ir.create, Al = ti.propertyIsEnumerable, Ga = Ta.splice, Bl = cn ? cn.isConcatSpreadable : r, Bi = cn ? cn.iterator : r, Tn = cn ? cn.toStringTag : r, Fa = (function() {
          try {
            var i = Bn(ir, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), r0 = K.clearTimeout !== Tr.clearTimeout && K.clearTimeout, e0 = xt && xt.now !== Tr.Date.now && xt.now, n0 = K.setTimeout !== Tr.setTimeout && K.setTimeout, ka = Sr.ceil, La = Sr.floor, ws = ir.getOwnPropertySymbols, i0 = Aa ? Aa.isBuffer : r, zl = K.isFinite, a0 = Ta.join, o0 = Rl(ir.keys, ir), Cr = Sr.max, zr = Sr.min, s0 = xt.now, u0 = K.parseInt, Gl = Sr.random, f0 = Ta.reverse, Es = Bn(K, "DataView"), zi = Bn(K, "Map"), Ds = Bn(K, "Promise"), ri = Bn(K, "Set"), Gi = Bn(K, "WeakMap"), Fi = Bn(ir, "create"), Wa = Gi && new Gi(), ei = {}, l0 = zn(Es), c0 = zn(zi), v0 = zn(Ds), p0 = zn(ri), d0 = zn(Gi), Na = cn ? cn.prototype : r, ki = Na ? Na.valueOf : r, Fl = Na ? Na.toString : r;
        function w(i) {
          if (pr(i) && !Gt(i) && !(i instanceof Xt)) {
            if (i instanceof ve)
              return i;
            if (jt.call(i, "__wrapped__"))
              return kc(i);
          }
          return new ve(i);
        }
        var ni = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(o) {
            if (!cr(o))
              return {};
            if (Pl)
              return Pl(o);
            i.prototype = o;
            var l = new i();
            return i.prototype = r, l;
          };
        })();
        function Ha() {
        }
        function ve(i, o) {
          this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
        }
        w.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: te,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Oi,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Ii,
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
            _: w
          }
        }, w.prototype = Ha.prototype, w.prototype.constructor = w, ve.prototype = ni(Ha.prototype), ve.prototype.constructor = ve;
        function Xt(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $, this.__views__ = [];
        }
        function h0() {
          var i = new Xt(this.__wrapped__);
          return i.__actions__ = Ur(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Ur(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Ur(this.__views__), i;
        }
        function g0() {
          if (this.__filtered__) {
            var i = new Xt(this);
            i.__dir__ = -1, i.__filtered__ = !0;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function m0() {
          var i = this.__wrapped__.value(), o = this.__dir__, l = Gt(i), g = o < 0, b = l ? i.length : 0, M = T1(0, b, this.__views__), P = M.start, F = M.end, N = F - P, Q = g ? F : P - 1, j = this.__iteratees__, nt = j.length, dt = 0, bt = zr(N, this.__takeCount__);
          if (!l || !g && b == N && bt == N)
            return sc(i, this.__actions__);
          var Mt = [];
          t:
            for (; N-- && dt < bt; ) {
              Q += o;
              for (var Lt = -1, Rt = i[Q]; ++Lt < nt; ) {
                var Yt = j[Lt], qt = Yt.iteratee, ae = Yt.type, Nr = qt(Rt);
                if (ae == X)
                  Rt = Nr;
                else if (!Nr) {
                  if (ae == Y)
                    continue t;
                  break t;
                }
              }
              Mt[dt++] = Rt;
            }
          return Mt;
        }
        Xt.prototype = ni(Ha.prototype), Xt.prototype.constructor = Xt;
        function On(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function _0() {
          this.__data__ = Fi ? Fi(null) : {}, this.size = 0;
        }
        function x0(i) {
          var o = this.has(i) && delete this.__data__[i];
          return this.size -= o ? 1 : 0, o;
        }
        function y0(i) {
          var o = this.__data__;
          if (Fi) {
            var l = o[i];
            return l === c ? r : l;
          }
          return jt.call(o, i) ? o[i] : r;
        }
        function b0(i) {
          var o = this.__data__;
          return Fi ? o[i] !== r : jt.call(o, i);
        }
        function S0(i, o) {
          var l = this.__data__;
          return this.size += this.has(i) ? 0 : 1, l[i] = Fi && o === r ? c : o, this;
        }
        On.prototype.clear = _0, On.prototype.delete = x0, On.prototype.get = y0, On.prototype.has = b0, On.prototype.set = S0;
        function Ye(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function C0() {
          this.__data__ = [], this.size = 0;
        }
        function w0(i) {
          var o = this.__data__, l = Ya(o, i);
          if (l < 0)
            return !1;
          var g = o.length - 1;
          return l == g ? o.pop() : Ga.call(o, l, 1), --this.size, !0;
        }
        function E0(i) {
          var o = this.__data__, l = Ya(o, i);
          return l < 0 ? r : o[l][1];
        }
        function D0(i) {
          return Ya(this.__data__, i) > -1;
        }
        function M0(i, o) {
          var l = this.__data__, g = Ya(l, i);
          return g < 0 ? (++this.size, l.push([i, o])) : l[g][1] = o, this;
        }
        Ye.prototype.clear = C0, Ye.prototype.delete = w0, Ye.prototype.get = E0, Ye.prototype.has = D0, Ye.prototype.set = M0;
        function Xe(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function R0() {
          this.size = 0, this.__data__ = {
            hash: new On(),
            map: new (zi || Ye)(),
            string: new On()
          };
        }
        function T0(i) {
          var o = ro(this, i).delete(i);
          return this.size -= o ? 1 : 0, o;
        }
        function O0(i) {
          return ro(this, i).get(i);
        }
        function I0(i) {
          return ro(this, i).has(i);
        }
        function P0(i, o) {
          var l = ro(this, i), g = l.size;
          return l.set(i, o), this.size += l.size == g ? 0 : 1, this;
        }
        Xe.prototype.clear = R0, Xe.prototype.delete = T0, Xe.prototype.get = O0, Xe.prototype.has = I0, Xe.prototype.set = P0;
        function In(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.__data__ = new Xe(); ++o < l; )
            this.add(i[o]);
        }
        function A0(i) {
          return this.__data__.set(i, c), this;
        }
        function B0(i) {
          return this.__data__.has(i);
        }
        In.prototype.add = In.prototype.push = A0, In.prototype.has = B0;
        function Se(i) {
          var o = this.__data__ = new Ye(i);
          this.size = o.size;
        }
        function z0() {
          this.__data__ = new Ye(), this.size = 0;
        }
        function G0(i) {
          var o = this.__data__, l = o.delete(i);
          return this.size = o.size, l;
        }
        function F0(i) {
          return this.__data__.get(i);
        }
        function k0(i) {
          return this.__data__.has(i);
        }
        function L0(i, o) {
          var l = this.__data__;
          if (l instanceof Ye) {
            var g = l.__data__;
            if (!zi || g.length < a - 1)
              return g.push([i, o]), this.size = ++l.size, this;
            l = this.__data__ = new Xe(g);
          }
          return l.set(i, o), this.size = l.size, this;
        }
        Se.prototype.clear = z0, Se.prototype.delete = G0, Se.prototype.get = F0, Se.prototype.has = k0, Se.prototype.set = L0;
        function kl(i, o) {
          var l = Gt(i), g = !l && Gn(i), b = !l && !g && gn(i), M = !l && !g && !b && si(i), P = l || g || b || M, F = P ? ys(i.length, Kg) : [], N = F.length;
          for (var Q in i)
            (o || jt.call(i, Q)) && !(P && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            b && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
            Ve(Q, N))) && F.push(Q);
          return F;
        }
        function Ll(i) {
          var o = i.length;
          return o ? i[Fs(0, o - 1)] : r;
        }
        function W0(i, o) {
          return eo(Ur(i), Pn(o, 0, i.length));
        }
        function N0(i) {
          return eo(Ur(i));
        }
        function Ms(i, o, l) {
          (l !== r && !Ce(i[o], l) || l === r && !(o in i)) && qe(i, o, l);
        }
        function Li(i, o, l) {
          var g = i[o];
          (!(jt.call(i, o) && Ce(g, l)) || l === r && !(o in i)) && qe(i, o, l);
        }
        function Ya(i, o) {
          for (var l = i.length; l--; )
            if (Ce(i[l][0], o))
              return l;
          return -1;
        }
        function H0(i, o, l, g) {
          return vn(i, function(b, M, P) {
            o(g, b, l(b), P);
          }), g;
        }
        function Wl(i, o) {
          return i && Be(o, Mr(o), i);
        }
        function Y0(i, o) {
          return i && Be(o, Vr(o), i);
        }
        function qe(i, o, l) {
          o == "__proto__" && Fa ? Fa(i, o, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : i[o] = l;
        }
        function Rs(i, o) {
          for (var l = -1, g = o.length, b = q(g), M = i == null; ++l < g; )
            b[l] = M ? r : uu(i, o[l]);
          return b;
        }
        function Pn(i, o, l) {
          return i === i && (l !== r && (i = i <= l ? i : l), o !== r && (i = i >= o ? i : o)), i;
        }
        function pe(i, o, l, g, b, M) {
          var P, F = o & h, N = o & d, Q = o & m;
          if (l && (P = b ? l(i, g, b, M) : l(i)), P !== r)
            return P;
          if (!cr(i))
            return i;
          var j = Gt(i);
          if (j) {
            if (P = I1(i), !F)
              return Ur(i, P);
          } else {
            var nt = Gr(i), dt = nt == vt || nt == Ot;
            if (gn(i))
              return lc(i, F);
            if (nt == At || nt == ct || dt && !b) {
              if (P = N || dt ? {} : Tc(i), !F)
                return N ? y1(i, Y0(P, i)) : x1(i, Wl(P, i));
            } else {
              if (!ar[nt])
                return b ? i : {};
              P = P1(i, nt, F);
            }
          }
          M || (M = new Se());
          var bt = M.get(i);
          if (bt)
            return bt;
          M.set(i, P), iv(i) ? i.forEach(function(Rt) {
            P.add(pe(Rt, o, l, Rt, i, M));
          }) : ev(i) && i.forEach(function(Rt, Yt) {
            P.set(Yt, pe(Rt, o, l, Yt, i, M));
          });
          var Mt = Q ? N ? Vs : $s : N ? Vr : Mr, Lt = j ? r : Mt(i);
          return le(Lt || i, function(Rt, Yt) {
            Lt && (Yt = Rt, Rt = i[Yt]), Li(P, Yt, pe(Rt, o, l, Yt, i, M));
          }), P;
        }
        function X0(i) {
          var o = Mr(i);
          return function(l) {
            return Nl(l, i, o);
          };
        }
        function Nl(i, o, l) {
          var g = l.length;
          if (i == null)
            return !g;
          for (i = ir(i); g--; ) {
            var b = l[g], M = o[b], P = i[b];
            if (P === r && !(b in i) || !M(P))
              return !1;
          }
          return !0;
        }
        function Hl(i, o, l) {
          if (typeof i != "function")
            throw new ce(u);
          return Ui(function() {
            i.apply(r, l);
          }, o);
        }
        function Wi(i, o, l, g) {
          var b = -1, M = Da, P = !0, F = i.length, N = [], Q = o.length;
          if (!F)
            return N;
          l && (o = lr(o, ee(l))), g ? (M = ds, P = !1) : o.length >= a && (M = Ai, P = !1, o = new In(o));
          t:
            for (; ++b < F; ) {
              var j = i[b], nt = l == null ? j : l(j);
              if (j = g || j !== 0 ? j : 0, P && nt === nt) {
                for (var dt = Q; dt--; )
                  if (o[dt] === nt)
                    continue t;
                N.push(j);
              } else M(o, nt, g) || N.push(j);
            }
          return N;
        }
        var vn = hc(Ae), Yl = hc(Os, !0);
        function q0(i, o) {
          var l = !0;
          return vn(i, function(g, b, M) {
            return l = !!o(g, b, M), l;
          }), l;
        }
        function Xa(i, o, l) {
          for (var g = -1, b = i.length; ++g < b; ) {
            var M = i[g], P = o(M);
            if (P != null && (F === r ? P === P && !ie(P) : l(P, F)))
              var F = P, N = M;
          }
          return N;
        }
        function U0(i, o, l, g) {
          var b = i.length;
          for (l = kt(l), l < 0 && (l = -l > b ? 0 : b + l), g = g === r || g > b ? b : kt(g), g < 0 && (g += b), g = l > g ? 0 : ov(g); l < g; )
            i[l++] = o;
          return i;
        }
        function Xl(i, o) {
          var l = [];
          return vn(i, function(g, b, M) {
            o(g, b, M) && l.push(g);
          }), l;
        }
        function Or(i, o, l, g, b) {
          var M = -1, P = i.length;
          for (l || (l = B1), b || (b = []); ++M < P; ) {
            var F = i[M];
            o > 0 && l(F) ? o > 1 ? Or(F, o - 1, l, g, b) : fn(b, F) : g || (b[b.length] = F);
          }
          return b;
        }
        var Ts = gc(), ql = gc(!0);
        function Ae(i, o) {
          return i && Ts(i, o, Mr);
        }
        function Os(i, o) {
          return i && ql(i, o, Mr);
        }
        function qa(i, o) {
          return un(o, function(l) {
            return Ke(i[l]);
          });
        }
        function An(i, o) {
          o = dn(o, i);
          for (var l = 0, g = o.length; i != null && l < g; )
            i = i[ze(o[l++])];
          return l && l == g ? i : r;
        }
        function Ul(i, o, l) {
          var g = o(i);
          return Gt(i) ? g : fn(g, l(i));
        }
        function Lr(i) {
          return i == null ? i === r ? fr : It : Tn && Tn in ir(i) ? R1(i) : N1(i);
        }
        function Is(i, o) {
          return i > o;
        }
        function $0(i, o) {
          return i != null && jt.call(i, o);
        }
        function V0(i, o) {
          return i != null && o in ir(i);
        }
        function K0(i, o, l) {
          return i >= zr(o, l) && i < Cr(o, l);
        }
        function Ps(i, o, l) {
          for (var g = l ? ds : Da, b = i[0].length, M = i.length, P = M, F = q(M), N = 1 / 0, Q = []; P--; ) {
            var j = i[P];
            P && o && (j = lr(j, ee(o))), N = zr(j.length, N), F[P] = !l && (o || b >= 120 && j.length >= 120) ? new In(P && j) : r;
          }
          j = i[0];
          var nt = -1, dt = F[0];
          t:
            for (; ++nt < b && Q.length < N; ) {
              var bt = j[nt], Mt = o ? o(bt) : bt;
              if (bt = l || bt !== 0 ? bt : 0, !(dt ? Ai(dt, Mt) : g(Q, Mt, l))) {
                for (P = M; --P; ) {
                  var Lt = F[P];
                  if (!(Lt ? Ai(Lt, Mt) : g(i[P], Mt, l)))
                    continue t;
                }
                dt && dt.push(Mt), Q.push(bt);
              }
            }
          return Q;
        }
        function Z0(i, o, l, g) {
          return Ae(i, function(b, M, P) {
            o(g, l(b), M, P);
          }), g;
        }
        function Ni(i, o, l) {
          o = dn(o, i), i = Ac(i, o);
          var g = i == null ? i : i[ze(he(o))];
          return g == null ? r : re(g, i, l);
        }
        function $l(i) {
          return pr(i) && Lr(i) == ct;
        }
        function J0(i) {
          return pr(i) && Lr(i) == Ar;
        }
        function Q0(i) {
          return pr(i) && Lr(i) == Tt;
        }
        function Hi(i, o, l, g, b) {
          return i === o ? !0 : i == null || o == null || !pr(i) && !pr(o) ? i !== i && o !== o : j0(i, o, l, g, Hi, b);
        }
        function j0(i, o, l, g, b, M) {
          var P = Gt(i), F = Gt(o), N = P ? ot : Gr(i), Q = F ? ot : Gr(o);
          N = N == ct ? At : N, Q = Q == ct ? At : Q;
          var j = N == At, nt = Q == At, dt = N == Q;
          if (dt && gn(i)) {
            if (!gn(o))
              return !1;
            P = !0, j = !1;
          }
          if (dt && !j)
            return M || (M = new Se()), P || si(i) ? Dc(i, o, l, g, b, M) : D1(i, o, N, l, g, b, M);
          if (!(l & _)) {
            var bt = j && jt.call(i, "__wrapped__"), Mt = nt && jt.call(o, "__wrapped__");
            if (bt || Mt) {
              var Lt = bt ? i.value() : i, Rt = Mt ? o.value() : o;
              return M || (M = new Se()), b(Lt, Rt, l, g, M);
            }
          }
          return dt ? (M || (M = new Se()), M1(i, o, l, g, b, M)) : !1;
        }
        function t1(i) {
          return pr(i) && Gr(i) == yt;
        }
        function As(i, o, l, g) {
          var b = l.length, M = b, P = !g;
          if (i == null)
            return !M;
          for (i = ir(i); b--; ) {
            var F = l[b];
            if (P && F[2] ? F[1] !== i[F[0]] : !(F[0] in i))
              return !1;
          }
          for (; ++b < M; ) {
            F = l[b];
            var N = F[0], Q = i[N], j = F[1];
            if (P && F[2]) {
              if (Q === r && !(N in i))
                return !1;
            } else {
              var nt = new Se();
              if (g)
                var dt = g(Q, j, N, i, o, nt);
              if (!(dt === r ? Hi(j, Q, _ | x, g, nt) : dt))
                return !1;
            }
          }
          return !0;
        }
        function Vl(i) {
          if (!cr(i) || G1(i))
            return !1;
          var o = Ke(i) ? t0 : Xh;
          return o.test(zn(i));
        }
        function r1(i) {
          return pr(i) && Lr(i) == Ht;
        }
        function e1(i) {
          return pr(i) && Gr(i) == Vt;
        }
        function n1(i) {
          return pr(i) && uo(i.length) && !!or[Lr(i)];
        }
        function Kl(i) {
          return typeof i == "function" ? i : i == null ? Kr : typeof i == "object" ? Gt(i) ? Ql(i[0], i[1]) : Jl(i) : mv(i);
        }
        function Bs(i) {
          if (!qi(i))
            return o0(i);
          var o = [];
          for (var l in ir(i))
            jt.call(i, l) && l != "constructor" && o.push(l);
          return o;
        }
        function i1(i) {
          if (!cr(i))
            return W1(i);
          var o = qi(i), l = [];
          for (var g in i)
            g == "constructor" && (o || !jt.call(i, g)) || l.push(g);
          return l;
        }
        function zs(i, o) {
          return i < o;
        }
        function Zl(i, o) {
          var l = -1, g = $r(i) ? q(i.length) : [];
          return vn(i, function(b, M, P) {
            g[++l] = o(b, M, P);
          }), g;
        }
        function Jl(i) {
          var o = Zs(i);
          return o.length == 1 && o[0][2] ? Ic(o[0][0], o[0][1]) : function(l) {
            return l === i || As(l, i, o);
          };
        }
        function Ql(i, o) {
          return Qs(i) && Oc(o) ? Ic(ze(i), o) : function(l) {
            var g = uu(l, i);
            return g === r && g === o ? fu(l, i) : Hi(o, g, _ | x);
          };
        }
        function Ua(i, o, l, g, b) {
          i !== o && Ts(o, function(M, P) {
            if (b || (b = new Se()), cr(M))
              a1(i, o, P, l, Ua, g, b);
            else {
              var F = g ? g(tu(i, P), M, P + "", i, o, b) : r;
              F === r && (F = M), Ms(i, P, F);
            }
          }, Vr);
        }
        function a1(i, o, l, g, b, M, P) {
          var F = tu(i, l), N = tu(o, l), Q = P.get(N);
          if (Q) {
            Ms(i, l, Q);
            return;
          }
          var j = M ? M(F, N, l + "", i, o, P) : r, nt = j === r;
          if (nt) {
            var dt = Gt(N), bt = !dt && gn(N), Mt = !dt && !bt && si(N);
            j = N, dt || bt || Mt ? Gt(F) ? j = F : hr(F) ? j = Ur(F) : bt ? (nt = !1, j = lc(N, !0)) : Mt ? (nt = !1, j = cc(N, !0)) : j = [] : $i(N) || Gn(N) ? (j = F, Gn(F) ? j = sv(F) : (!cr(F) || Ke(F)) && (j = Tc(N))) : nt = !1;
          }
          nt && (P.set(N, j), b(j, N, g, M, P), P.delete(N)), Ms(i, l, j);
        }
        function jl(i, o) {
          var l = i.length;
          if (l)
            return o += o < 0 ? l : 0, Ve(o, l) ? i[o] : r;
        }
        function tc(i, o, l) {
          o.length ? o = lr(o, function(M) {
            return Gt(M) ? function(P) {
              return An(P, M.length === 1 ? M[0] : M);
            } : M;
          }) : o = [Kr];
          var g = -1;
          o = lr(o, ee(Dt()));
          var b = Zl(i, function(M, P, F) {
            var N = lr(o, function(Q) {
              return Q(M);
            });
            return { criteria: N, index: ++g, value: M };
          });
          return Pg(b, function(M, P) {
            return _1(M, P, l);
          });
        }
        function o1(i, o) {
          return rc(i, o, function(l, g) {
            return fu(i, g);
          });
        }
        function rc(i, o, l) {
          for (var g = -1, b = o.length, M = {}; ++g < b; ) {
            var P = o[g], F = An(i, P);
            l(F, P) && Yi(M, dn(P, i), F);
          }
          return M;
        }
        function s1(i) {
          return function(o) {
            return An(o, i);
          };
        }
        function Gs(i, o, l, g) {
          var b = g ? Ig : Zn, M = -1, P = o.length, F = i;
          for (i === o && (o = Ur(o)), l && (F = lr(i, ee(l))); ++M < P; )
            for (var N = 0, Q = o[M], j = l ? l(Q) : Q; (N = b(F, j, N, g)) > -1; )
              F !== i && Ga.call(F, N, 1), Ga.call(i, N, 1);
          return i;
        }
        function ec(i, o) {
          for (var l = i ? o.length : 0, g = l - 1; l--; ) {
            var b = o[l];
            if (l == g || b !== M) {
              var M = b;
              Ve(b) ? Ga.call(i, b, 1) : Ws(i, b);
            }
          }
          return i;
        }
        function Fs(i, o) {
          return i + La(Gl() * (o - i + 1));
        }
        function u1(i, o, l, g) {
          for (var b = -1, M = Cr(ka((o - i) / (l || 1)), 0), P = q(M); M--; )
            P[g ? M : ++b] = i, i += l;
          return P;
        }
        function ks(i, o) {
          var l = "";
          if (!i || o < 1 || o > Z)
            return l;
          do
            o % 2 && (l += i), o = La(o / 2), o && (i += i);
          while (o);
          return l;
        }
        function Nt(i, o) {
          return ru(Pc(i, o, Kr), i + "");
        }
        function f1(i) {
          return Ll(ui(i));
        }
        function l1(i, o) {
          var l = ui(i);
          return eo(l, Pn(o, 0, l.length));
        }
        function Yi(i, o, l, g) {
          if (!cr(i))
            return i;
          o = dn(o, i);
          for (var b = -1, M = o.length, P = M - 1, F = i; F != null && ++b < M; ) {
            var N = ze(o[b]), Q = l;
            if (N === "__proto__" || N === "constructor" || N === "prototype")
              return i;
            if (b != P) {
              var j = F[N];
              Q = g ? g(j, N, F) : r, Q === r && (Q = cr(j) ? j : Ve(o[b + 1]) ? [] : {});
            }
            Li(F, N, Q), F = F[N];
          }
          return i;
        }
        var nc = Wa ? function(i, o) {
          return Wa.set(i, o), i;
        } : Kr, c1 = Fa ? function(i, o) {
          return Fa(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: cu(o),
            writable: !0
          });
        } : Kr;
        function v1(i) {
          return eo(ui(i));
        }
        function de(i, o, l) {
          var g = -1, b = i.length;
          o < 0 && (o = -o > b ? 0 : b + o), l = l > b ? b : l, l < 0 && (l += b), b = o > l ? 0 : l - o >>> 0, o >>>= 0;
          for (var M = q(b); ++g < b; )
            M[g] = i[g + o];
          return M;
        }
        function p1(i, o) {
          var l;
          return vn(i, function(g, b, M) {
            return l = o(g, b, M), !l;
          }), !!l;
        }
        function $a(i, o, l) {
          var g = 0, b = i == null ? g : i.length;
          if (typeof o == "number" && o === o && b <= pt) {
            for (; g < b; ) {
              var M = g + b >>> 1, P = i[M];
              P !== null && !ie(P) && (l ? P <= o : P < o) ? g = M + 1 : b = M;
            }
            return b;
          }
          return Ls(i, o, Kr, l);
        }
        function Ls(i, o, l, g) {
          var b = 0, M = i == null ? 0 : i.length;
          if (M === 0)
            return 0;
          o = l(o);
          for (var P = o !== o, F = o === null, N = ie(o), Q = o === r; b < M; ) {
            var j = La((b + M) / 2), nt = l(i[j]), dt = nt !== r, bt = nt === null, Mt = nt === nt, Lt = ie(nt);
            if (P)
              var Rt = g || Mt;
            else Q ? Rt = Mt && (g || dt) : F ? Rt = Mt && dt && (g || !bt) : N ? Rt = Mt && dt && !bt && (g || !Lt) : bt || Lt ? Rt = !1 : Rt = g ? nt <= o : nt < o;
            Rt ? b = j + 1 : M = j;
          }
          return zr(M, lt);
        }
        function ic(i, o) {
          for (var l = -1, g = i.length, b = 0, M = []; ++l < g; ) {
            var P = i[l], F = o ? o(P) : P;
            if (!l || !Ce(F, N)) {
              var N = F;
              M[b++] = P === 0 ? 0 : P;
            }
          }
          return M;
        }
        function ac(i) {
          return typeof i == "number" ? i : ie(i) ? at : +i;
        }
        function ne(i) {
          if (typeof i == "string")
            return i;
          if (Gt(i))
            return lr(i, ne) + "";
          if (ie(i))
            return Fl ? Fl.call(i) : "";
          var o = i + "";
          return o == "0" && 1 / i == -et ? "-0" : o;
        }
        function pn(i, o, l) {
          var g = -1, b = Da, M = i.length, P = !0, F = [], N = F;
          if (l)
            P = !1, b = ds;
          else if (M >= a) {
            var Q = o ? null : w1(i);
            if (Q)
              return Ra(Q);
            P = !1, b = Ai, N = new In();
          } else
            N = o ? [] : F;
          t:
            for (; ++g < M; ) {
              var j = i[g], nt = o ? o(j) : j;
              if (j = l || j !== 0 ? j : 0, P && nt === nt) {
                for (var dt = N.length; dt--; )
                  if (N[dt] === nt)
                    continue t;
                o && N.push(nt), F.push(j);
              } else b(N, nt, l) || (N !== F && N.push(nt), F.push(j));
            }
          return F;
        }
        function Ws(i, o) {
          return o = dn(o, i), i = Ac(i, o), i == null || delete i[ze(he(o))];
        }
        function oc(i, o, l, g) {
          return Yi(i, o, l(An(i, o)), g);
        }
        function Va(i, o, l, g) {
          for (var b = i.length, M = g ? b : -1; (g ? M-- : ++M < b) && o(i[M], M, i); )
            ;
          return l ? de(i, g ? 0 : M, g ? M + 1 : b) : de(i, g ? M + 1 : 0, g ? b : M);
        }
        function sc(i, o) {
          var l = i;
          return l instanceof Xt && (l = l.value()), hs(o, function(g, b) {
            return b.func.apply(b.thisArg, fn([g], b.args));
          }, l);
        }
        function Ns(i, o, l) {
          var g = i.length;
          if (g < 2)
            return g ? pn(i[0]) : [];
          for (var b = -1, M = q(g); ++b < g; )
            for (var P = i[b], F = -1; ++F < g; )
              F != b && (M[b] = Wi(M[b] || P, i[F], o, l));
          return pn(Or(M, 1), o, l);
        }
        function uc(i, o, l) {
          for (var g = -1, b = i.length, M = o.length, P = {}; ++g < b; ) {
            var F = g < M ? o[g] : r;
            l(P, i[g], F);
          }
          return P;
        }
        function Hs(i) {
          return hr(i) ? i : [];
        }
        function Ys(i) {
          return typeof i == "function" ? i : Kr;
        }
        function dn(i, o) {
          return Gt(i) ? i : Qs(i, o) ? [i] : Fc(Qt(i));
        }
        var d1 = Nt;
        function hn(i, o, l) {
          var g = i.length;
          return l = l === r ? g : l, !o && l >= g ? i : de(i, o, l);
        }
        var fc = r0 || function(i) {
          return Tr.clearTimeout(i);
        };
        function lc(i, o) {
          if (o)
            return i.slice();
          var l = i.length, g = Il ? Il(l) : new i.constructor(l);
          return i.copy(g), g;
        }
        function Xs(i) {
          var o = new i.constructor(i.byteLength);
          return new Ba(o).set(new Ba(i)), o;
        }
        function h1(i, o) {
          var l = o ? Xs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.byteLength);
        }
        function g1(i) {
          var o = new i.constructor(i.source, $f.exec(i));
          return o.lastIndex = i.lastIndex, o;
        }
        function m1(i) {
          return ki ? ir(ki.call(i)) : {};
        }
        function cc(i, o) {
          var l = o ? Xs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.length);
        }
        function vc(i, o) {
          if (i !== o) {
            var l = i !== r, g = i === null, b = i === i, M = ie(i), P = o !== r, F = o === null, N = o === o, Q = ie(o);
            if (!F && !Q && !M && i > o || M && P && N && !F && !Q || g && P && N || !l && N || !b)
              return 1;
            if (!g && !M && !Q && i < o || Q && l && b && !g && !M || F && l && b || !P && b || !N)
              return -1;
          }
          return 0;
        }
        function _1(i, o, l) {
          for (var g = -1, b = i.criteria, M = o.criteria, P = b.length, F = l.length; ++g < P; ) {
            var N = vc(b[g], M[g]);
            if (N) {
              if (g >= F)
                return N;
              var Q = l[g];
              return N * (Q == "desc" ? -1 : 1);
            }
          }
          return i.index - o.index;
        }
        function pc(i, o, l, g) {
          for (var b = -1, M = i.length, P = l.length, F = -1, N = o.length, Q = Cr(M - P, 0), j = q(N + Q), nt = !g; ++F < N; )
            j[F] = o[F];
          for (; ++b < P; )
            (nt || b < M) && (j[l[b]] = i[b]);
          for (; Q--; )
            j[F++] = i[b++];
          return j;
        }
        function dc(i, o, l, g) {
          for (var b = -1, M = i.length, P = -1, F = l.length, N = -1, Q = o.length, j = Cr(M - F, 0), nt = q(j + Q), dt = !g; ++b < j; )
            nt[b] = i[b];
          for (var bt = b; ++N < Q; )
            nt[bt + N] = o[N];
          for (; ++P < F; )
            (dt || b < M) && (nt[bt + l[P]] = i[b++]);
          return nt;
        }
        function Ur(i, o) {
          var l = -1, g = i.length;
          for (o || (o = q(g)); ++l < g; )
            o[l] = i[l];
          return o;
        }
        function Be(i, o, l, g) {
          var b = !l;
          l || (l = {});
          for (var M = -1, P = o.length; ++M < P; ) {
            var F = o[M], N = g ? g(l[F], i[F], F, l, i) : r;
            N === r && (N = i[F]), b ? qe(l, F, N) : Li(l, F, N);
          }
          return l;
        }
        function x1(i, o) {
          return Be(i, Js(i), o);
        }
        function y1(i, o) {
          return Be(i, Mc(i), o);
        }
        function Ka(i, o) {
          return function(l, g) {
            var b = Gt(l) ? Eg : H0, M = o ? o() : {};
            return b(l, i, Dt(g, 2), M);
          };
        }
        function ii(i) {
          return Nt(function(o, l) {
            var g = -1, b = l.length, M = b > 1 ? l[b - 1] : r, P = b > 2 ? l[2] : r;
            for (M = i.length > 3 && typeof M == "function" ? (b--, M) : r, P && Wr(l[0], l[1], P) && (M = b < 3 ? r : M, b = 1), o = ir(o); ++g < b; ) {
              var F = l[g];
              F && i(o, F, g, M);
            }
            return o;
          });
        }
        function hc(i, o) {
          return function(l, g) {
            if (l == null)
              return l;
            if (!$r(l))
              return i(l, g);
            for (var b = l.length, M = o ? b : -1, P = ir(l); (o ? M-- : ++M < b) && g(P[M], M, P) !== !1; )
              ;
            return l;
          };
        }
        function gc(i) {
          return function(o, l, g) {
            for (var b = -1, M = ir(o), P = g(o), F = P.length; F--; ) {
              var N = P[i ? F : ++b];
              if (l(M[N], N, M) === !1)
                break;
            }
            return o;
          };
        }
        function b1(i, o, l) {
          var g = o & y, b = Xi(i);
          function M() {
            var P = this && this !== Tr && this instanceof M ? b : i;
            return P.apply(g ? l : this, arguments);
          }
          return M;
        }
        function mc(i) {
          return function(o) {
            o = Qt(o);
            var l = Jn(o) ? be(o) : r, g = l ? l[0] : o.charAt(0), b = l ? hn(l, 1).join("") : o.slice(1);
            return g[i]() + b;
          };
        }
        function ai(i) {
          return function(o) {
            return hs(hv(dv(o).replace(cg, "")), i, "");
          };
        }
        function Xi(i) {
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new i();
              case 1:
                return new i(o[0]);
              case 2:
                return new i(o[0], o[1]);
              case 3:
                return new i(o[0], o[1], o[2]);
              case 4:
                return new i(o[0], o[1], o[2], o[3]);
              case 5:
                return new i(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new i(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new i(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var l = ni(i.prototype), g = i.apply(l, o);
            return cr(g) ? g : l;
          };
        }
        function S1(i, o, l) {
          var g = Xi(i);
          function b() {
            for (var M = arguments.length, P = q(M), F = M, N = oi(b); F--; )
              P[F] = arguments[F];
            var Q = M < 3 && P[0] !== N && P[M - 1] !== N ? [] : ln(P, N);
            if (M -= Q.length, M < l)
              return Sc(
                i,
                o,
                Za,
                b.placeholder,
                r,
                P,
                Q,
                r,
                r,
                l - M
              );
            var j = this && this !== Tr && this instanceof b ? g : i;
            return re(j, this, P);
          }
          return b;
        }
        function _c(i) {
          return function(o, l, g) {
            var b = ir(o);
            if (!$r(o)) {
              var M = Dt(l, 3);
              o = Mr(o), l = function(F) {
                return M(b[F], F, b);
              };
            }
            var P = i(o, l, g);
            return P > -1 ? b[M ? o[P] : P] : r;
          };
        }
        function xc(i) {
          return $e(function(o) {
            var l = o.length, g = l, b = ve.prototype.thru;
            for (i && o.reverse(); g--; ) {
              var M = o[g];
              if (typeof M != "function")
                throw new ce(u);
              if (b && !P && to(M) == "wrapper")
                var P = new ve([], !0);
            }
            for (g = P ? g : l; ++g < l; ) {
              M = o[g];
              var F = to(M), N = F == "wrapper" ? Ks(M) : r;
              N && js(N[0]) && N[1] == (D | R | T | I) && !N[4].length && N[9] == 1 ? P = P[to(N[0])].apply(P, N[3]) : P = M.length == 1 && js(M) ? P[F]() : P.thru(M);
            }
            return function() {
              var Q = arguments, j = Q[0];
              if (P && Q.length == 1 && Gt(j))
                return P.plant(j).value();
              for (var nt = 0, dt = l ? o[nt].apply(this, Q) : j; ++nt < l; )
                dt = o[nt].call(this, dt);
              return dt;
            };
          });
        }
        function Za(i, o, l, g, b, M, P, F, N, Q) {
          var j = o & D, nt = o & y, dt = o & S, bt = o & (R | O), Mt = o & A, Lt = dt ? r : Xi(i);
          function Rt() {
            for (var Yt = arguments.length, qt = q(Yt), ae = Yt; ae--; )
              qt[ae] = arguments[ae];
            if (bt)
              var Nr = oi(Rt), oe = Bg(qt, Nr);
            if (g && (qt = pc(qt, g, b, bt)), M && (qt = dc(qt, M, P, bt)), Yt -= oe, bt && Yt < Q) {
              var gr = ln(qt, Nr);
              return Sc(
                i,
                o,
                Za,
                Rt.placeholder,
                l,
                qt,
                gr,
                F,
                N,
                Q - Yt
              );
            }
            var we = nt ? l : this, Je = dt ? we[i] : i;
            return Yt = qt.length, F ? qt = H1(qt, F) : Mt && Yt > 1 && qt.reverse(), j && N < Yt && (qt.length = N), this && this !== Tr && this instanceof Rt && (Je = Lt || Xi(Je)), Je.apply(we, qt);
          }
          return Rt;
        }
        function yc(i, o) {
          return function(l, g) {
            return Z0(l, i, o(g), {});
          };
        }
        function Ja(i, o) {
          return function(l, g) {
            var b;
            if (l === r && g === r)
              return o;
            if (l !== r && (b = l), g !== r) {
              if (b === r)
                return g;
              typeof l == "string" || typeof g == "string" ? (l = ne(l), g = ne(g)) : (l = ac(l), g = ac(g)), b = i(l, g);
            }
            return b;
          };
        }
        function qs(i) {
          return $e(function(o) {
            return o = lr(o, ee(Dt())), Nt(function(l) {
              var g = this;
              return i(o, function(b) {
                return re(b, g, l);
              });
            });
          });
        }
        function Qa(i, o) {
          o = o === r ? " " : ne(o);
          var l = o.length;
          if (l < 2)
            return l ? ks(o, i) : o;
          var g = ks(o, ka(i / Qn(o)));
          return Jn(o) ? hn(be(g), 0, i).join("") : g.slice(0, i);
        }
        function C1(i, o, l, g) {
          var b = o & y, M = Xi(i);
          function P() {
            for (var F = -1, N = arguments.length, Q = -1, j = g.length, nt = q(j + N), dt = this && this !== Tr && this instanceof P ? M : i; ++Q < j; )
              nt[Q] = g[Q];
            for (; N--; )
              nt[Q++] = arguments[++F];
            return re(dt, b ? l : this, nt);
          }
          return P;
        }
        function bc(i) {
          return function(o, l, g) {
            return g && typeof g != "number" && Wr(o, l, g) && (l = g = r), o = Ze(o), l === r ? (l = o, o = 0) : l = Ze(l), g = g === r ? o < l ? 1 : -1 : Ze(g), u1(o, l, g, i);
          };
        }
        function ja(i) {
          return function(o, l) {
            return typeof o == "string" && typeof l == "string" || (o = ge(o), l = ge(l)), i(o, l);
          };
        }
        function Sc(i, o, l, g, b, M, P, F, N, Q) {
          var j = o & R, nt = j ? P : r, dt = j ? r : P, bt = j ? M : r, Mt = j ? r : M;
          o |= j ? T : C, o &= ~(j ? C : T), o & E || (o &= -4);
          var Lt = [
            i,
            o,
            b,
            bt,
            nt,
            Mt,
            dt,
            F,
            N,
            Q
          ], Rt = l.apply(r, Lt);
          return js(i) && Bc(Rt, Lt), Rt.placeholder = g, zc(Rt, i, o);
        }
        function Us(i) {
          var o = Sr[i];
          return function(l, g) {
            if (l = ge(l), g = g == null ? 0 : zr(kt(g), 292), g && zl(l)) {
              var b = (Qt(l) + "e").split("e"), M = o(b[0] + "e" + (+b[1] + g));
              return b = (Qt(M) + "e").split("e"), +(b[0] + "e" + (+b[1] - g));
            }
            return o(l);
          };
        }
        var w1 = ri && 1 / Ra(new ri([, -0]))[1] == et ? function(i) {
          return new ri(i);
        } : du;
        function Cc(i) {
          return function(o) {
            var l = Gr(o);
            return l == yt ? Ss(o) : l == Vt ? Ng(o) : Ag(o, i(o));
          };
        }
        function Ue(i, o, l, g, b, M, P, F) {
          var N = o & S;
          if (!N && typeof i != "function")
            throw new ce(u);
          var Q = g ? g.length : 0;
          if (Q || (o &= -97, g = b = r), P = P === r ? P : Cr(kt(P), 0), F = F === r ? F : kt(F), Q -= b ? b.length : 0, o & C) {
            var j = g, nt = b;
            g = b = r;
          }
          var dt = N ? r : Ks(i), bt = [
            i,
            o,
            l,
            g,
            b,
            j,
            nt,
            M,
            P,
            F
          ];
          if (dt && L1(bt, dt), i = bt[0], o = bt[1], l = bt[2], g = bt[3], b = bt[4], F = bt[9] = bt[9] === r ? N ? 0 : i.length : Cr(bt[9] - Q, 0), !F && o & (R | O) && (o &= -25), !o || o == y)
            var Mt = b1(i, o, l);
          else o == R || o == O ? Mt = S1(i, o, F) : (o == T || o == (y | T)) && !b.length ? Mt = C1(i, o, l, g) : Mt = Za.apply(r, bt);
          var Lt = dt ? nc : Bc;
          return zc(Lt(Mt, bt), i, o);
        }
        function wc(i, o, l, g) {
          return i === r || Ce(i, ti[l]) && !jt.call(g, l) ? o : i;
        }
        function Ec(i, o, l, g, b, M) {
          return cr(i) && cr(o) && (M.set(o, i), Ua(i, o, r, Ec, M), M.delete(o)), i;
        }
        function E1(i) {
          return $i(i) ? r : i;
        }
        function Dc(i, o, l, g, b, M) {
          var P = l & _, F = i.length, N = o.length;
          if (F != N && !(P && N > F))
            return !1;
          var Q = M.get(i), j = M.get(o);
          if (Q && j)
            return Q == o && j == i;
          var nt = -1, dt = !0, bt = l & x ? new In() : r;
          for (M.set(i, o), M.set(o, i); ++nt < F; ) {
            var Mt = i[nt], Lt = o[nt];
            if (g)
              var Rt = P ? g(Lt, Mt, nt, o, i, M) : g(Mt, Lt, nt, i, o, M);
            if (Rt !== r) {
              if (Rt)
                continue;
              dt = !1;
              break;
            }
            if (bt) {
              if (!gs(o, function(Yt, qt) {
                if (!Ai(bt, qt) && (Mt === Yt || b(Mt, Yt, l, g, M)))
                  return bt.push(qt);
              })) {
                dt = !1;
                break;
              }
            } else if (!(Mt === Lt || b(Mt, Lt, l, g, M))) {
              dt = !1;
              break;
            }
          }
          return M.delete(i), M.delete(o), dt;
        }
        function D1(i, o, l, g, b, M, P) {
          switch (l) {
            case Br:
              if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
                return !1;
              i = i.buffer, o = o.buffer;
            case Ar:
              return !(i.byteLength != o.byteLength || !M(new Ba(i), new Ba(o)));
            case mt:
            case Tt:
            case Et:
              return Ce(+i, +o);
            case ut:
              return i.name == o.name && i.message == o.message;
            case Ht:
            case ur:
              return i == o + "";
            case yt:
              var F = Ss;
            case Vt:
              var N = g & _;
              if (F || (F = Ra), i.size != o.size && !N)
                return !1;
              var Q = P.get(i);
              if (Q)
                return Q == o;
              g |= x, P.set(i, o);
              var j = Dc(F(i), F(o), g, b, M, P);
              return P.delete(i), j;
            case nr:
              if (ki)
                return ki.call(i) == ki.call(o);
          }
          return !1;
        }
        function M1(i, o, l, g, b, M) {
          var P = l & _, F = $s(i), N = F.length, Q = $s(o), j = Q.length;
          if (N != j && !P)
            return !1;
          for (var nt = N; nt--; ) {
            var dt = F[nt];
            if (!(P ? dt in o : jt.call(o, dt)))
              return !1;
          }
          var bt = M.get(i), Mt = M.get(o);
          if (bt && Mt)
            return bt == o && Mt == i;
          var Lt = !0;
          M.set(i, o), M.set(o, i);
          for (var Rt = P; ++nt < N; ) {
            dt = F[nt];
            var Yt = i[dt], qt = o[dt];
            if (g)
              var ae = P ? g(qt, Yt, dt, o, i, M) : g(Yt, qt, dt, i, o, M);
            if (!(ae === r ? Yt === qt || b(Yt, qt, l, g, M) : ae)) {
              Lt = !1;
              break;
            }
            Rt || (Rt = dt == "constructor");
          }
          if (Lt && !Rt) {
            var Nr = i.constructor, oe = o.constructor;
            Nr != oe && "constructor" in i && "constructor" in o && !(typeof Nr == "function" && Nr instanceof Nr && typeof oe == "function" && oe instanceof oe) && (Lt = !1);
          }
          return M.delete(i), M.delete(o), Lt;
        }
        function $e(i) {
          return ru(Pc(i, r, Nc), i + "");
        }
        function $s(i) {
          return Ul(i, Mr, Js);
        }
        function Vs(i) {
          return Ul(i, Vr, Mc);
        }
        var Ks = Wa ? function(i) {
          return Wa.get(i);
        } : du;
        function to(i) {
          for (var o = i.name + "", l = ei[o], g = jt.call(ei, o) ? l.length : 0; g--; ) {
            var b = l[g], M = b.func;
            if (M == null || M == i)
              return b.name;
          }
          return o;
        }
        function oi(i) {
          var o = jt.call(w, "placeholder") ? w : i;
          return o.placeholder;
        }
        function Dt() {
          var i = w.iteratee || vu;
          return i = i === vu ? Kl : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function ro(i, o) {
          var l = i.__data__;
          return z1(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
        }
        function Zs(i) {
          for (var o = Mr(i), l = o.length; l--; ) {
            var g = o[l], b = i[g];
            o[l] = [g, b, Oc(b)];
          }
          return o;
        }
        function Bn(i, o) {
          var l = kg(i, o);
          return Vl(l) ? l : r;
        }
        function R1(i) {
          var o = jt.call(i, Tn), l = i[Tn];
          try {
            i[Tn] = r;
            var g = !0;
          } catch {
          }
          var b = Pa.call(i);
          return g && (o ? i[Tn] = l : delete i[Tn]), b;
        }
        var Js = ws ? function(i) {
          return i == null ? [] : (i = ir(i), un(ws(i), function(o) {
            return Al.call(i, o);
          }));
        } : hu, Mc = ws ? function(i) {
          for (var o = []; i; )
            fn(o, Js(i)), i = za(i);
          return o;
        } : hu, Gr = Lr;
        (Es && Gr(new Es(new ArrayBuffer(1))) != Br || zi && Gr(new zi()) != yt || Ds && Gr(Ds.resolve()) != $t || ri && Gr(new ri()) != Vt || Gi && Gr(new Gi()) != tr) && (Gr = function(i) {
          var o = Lr(i), l = o == At ? i.constructor : r, g = l ? zn(l) : "";
          if (g)
            switch (g) {
              case l0:
                return Br;
              case c0:
                return yt;
              case v0:
                return $t;
              case p0:
                return Vt;
              case d0:
                return tr;
            }
          return o;
        });
        function T1(i, o, l) {
          for (var g = -1, b = l.length; ++g < b; ) {
            var M = l[g], P = M.size;
            switch (M.type) {
              case "drop":
                i += P;
                break;
              case "dropRight":
                o -= P;
                break;
              case "take":
                o = zr(o, i + P);
                break;
              case "takeRight":
                i = Cr(i, o - P);
                break;
            }
          }
          return { start: i, end: o };
        }
        function O1(i) {
          var o = i.match(Gh);
          return o ? o[1].split(Fh) : [];
        }
        function Rc(i, o, l) {
          o = dn(o, i);
          for (var g = -1, b = o.length, M = !1; ++g < b; ) {
            var P = ze(o[g]);
            if (!(M = i != null && l(i, P)))
              break;
            i = i[P];
          }
          return M || ++g != b ? M : (b = i == null ? 0 : i.length, !!b && uo(b) && Ve(P, b) && (Gt(i) || Gn(i)));
        }
        function I1(i) {
          var o = i.length, l = new i.constructor(o);
          return o && typeof i[0] == "string" && jt.call(i, "index") && (l.index = i.index, l.input = i.input), l;
        }
        function Tc(i) {
          return typeof i.constructor == "function" && !qi(i) ? ni(za(i)) : {};
        }
        function P1(i, o, l) {
          var g = i.constructor;
          switch (o) {
            case Ar:
              return Xs(i);
            case mt:
            case Tt:
              return new g(+i);
            case Br:
              return h1(i, l);
            case We:
            case Dn:
            case Ie:
            case Ne:
            case an:
            case He:
            case Pe:
            case on:
            case Mn:
              return cc(i, l);
            case yt:
              return new g();
            case Et:
            case ur:
              return new g(i);
            case Ht:
              return g1(i);
            case Vt:
              return new g();
            case nr:
              return m1(i);
          }
        }
        function A1(i, o) {
          var l = o.length;
          if (!l)
            return i;
          var g = l - 1;
          return o[g] = (l > 1 ? "& " : "") + o[g], o = o.join(l > 2 ? ", " : " "), i.replace(zh, `{
/* [wrapped with ` + o + `] */
`);
        }
        function B1(i) {
          return Gt(i) || Gn(i) || !!(Bl && i && i[Bl]);
        }
        function Ve(i, o) {
          var l = typeof i;
          return o = o ?? Z, !!o && (l == "number" || l != "symbol" && Uh.test(i)) && i > -1 && i % 1 == 0 && i < o;
        }
        function Wr(i, o, l) {
          if (!cr(l))
            return !1;
          var g = typeof o;
          return (g == "number" ? $r(l) && Ve(o, l.length) : g == "string" && o in l) ? Ce(l[o], i) : !1;
        }
        function Qs(i, o) {
          if (Gt(i))
            return !1;
          var l = typeof i;
          return l == "number" || l == "symbol" || l == "boolean" || i == null || ie(i) ? !0 : sn.test(i) || !Sa.test(i) || o != null && i in ir(o);
        }
        function z1(i) {
          var o = typeof i;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
        }
        function js(i) {
          var o = to(i), l = w[o];
          if (typeof l != "function" || !(o in Xt.prototype))
            return !1;
          if (i === l)
            return !0;
          var g = Ks(l);
          return !!g && i === g[0];
        }
        function G1(i) {
          return !!Ol && Ol in i;
        }
        var F1 = Oa ? Ke : gu;
        function qi(i) {
          var o = i && i.constructor, l = typeof o == "function" && o.prototype || ti;
          return i === l;
        }
        function Oc(i) {
          return i === i && !cr(i);
        }
        function Ic(i, o) {
          return function(l) {
            return l == null ? !1 : l[i] === o && (o !== r || i in ir(l));
          };
        }
        function k1(i) {
          var o = oo(i, function(g) {
            return l.size === v && l.clear(), g;
          }), l = o.cache;
          return o;
        }
        function L1(i, o) {
          var l = i[1], g = o[1], b = l | g, M = b < (y | S | D), P = g == D && l == R || g == D && l == I && i[7].length <= o[8] || g == (D | I) && o[7].length <= o[8] && l == R;
          if (!(M || P))
            return i;
          g & y && (i[2] = o[2], b |= l & y ? 0 : E);
          var F = o[3];
          if (F) {
            var N = i[3];
            i[3] = N ? pc(N, F, o[4]) : F, i[4] = N ? ln(i[3], p) : o[4];
          }
          return F = o[5], F && (N = i[5], i[5] = N ? dc(N, F, o[6]) : F, i[6] = N ? ln(i[5], p) : o[6]), F = o[7], F && (i[7] = F), g & D && (i[8] = i[8] == null ? o[8] : zr(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = b, i;
        }
        function W1(i) {
          var o = [];
          if (i != null)
            for (var l in ir(i))
              o.push(l);
          return o;
        }
        function N1(i) {
          return Pa.call(i);
        }
        function Pc(i, o, l) {
          return o = Cr(o === r ? i.length - 1 : o, 0), function() {
            for (var g = arguments, b = -1, M = Cr(g.length - o, 0), P = q(M); ++b < M; )
              P[b] = g[o + b];
            b = -1;
            for (var F = q(o + 1); ++b < o; )
              F[b] = g[b];
            return F[o] = l(P), re(i, this, F);
          };
        }
        function Ac(i, o) {
          return o.length < 2 ? i : An(i, de(o, 0, -1));
        }
        function H1(i, o) {
          for (var l = i.length, g = zr(o.length, l), b = Ur(i); g--; ) {
            var M = o[g];
            i[g] = Ve(M, l) ? b[M] : r;
          }
          return i;
        }
        function tu(i, o) {
          if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
            return i[o];
        }
        var Bc = Gc(nc), Ui = n0 || function(i, o) {
          return Tr.setTimeout(i, o);
        }, ru = Gc(c1);
        function zc(i, o, l) {
          var g = o + "";
          return ru(i, A1(g, Y1(O1(g), l)));
        }
        function Gc(i) {
          var o = 0, l = 0;
          return function() {
            var g = s0(), b = G - (g - l);
            if (l = g, b > 0) {
              if (++o >= W)
                return arguments[0];
            } else
              o = 0;
            return i.apply(r, arguments);
          };
        }
        function eo(i, o) {
          var l = -1, g = i.length, b = g - 1;
          for (o = o === r ? g : o; ++l < o; ) {
            var M = Fs(l, b), P = i[M];
            i[M] = i[l], i[l] = P;
          }
          return i.length = o, i;
        }
        var Fc = k1(function(i) {
          var o = [];
          return i.charCodeAt(0) === 46 && o.push(""), i.replace(Pi, function(l, g, b, M) {
            o.push(b ? M.replace(Wh, "$1") : g || l);
          }), o;
        });
        function ze(i) {
          if (typeof i == "string" || ie(i))
            return i;
          var o = i + "";
          return o == "0" && 1 / i == -et ? "-0" : o;
        }
        function zn(i) {
          if (i != null) {
            try {
              return Ia.call(i);
            } catch {
            }
            try {
              return i + "";
            } catch {
            }
          }
          return "";
        }
        function Y1(i, o) {
          return le(ft, function(l) {
            var g = "_." + l[0];
            o & l[1] && !Da(i, g) && i.push(g);
          }), i.sort();
        }
        function kc(i) {
          if (i instanceof Xt)
            return i.clone();
          var o = new ve(i.__wrapped__, i.__chain__);
          return o.__actions__ = Ur(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
        }
        function X1(i, o, l) {
          (l ? Wr(i, o, l) : o === r) ? o = 1 : o = Cr(kt(o), 0);
          var g = i == null ? 0 : i.length;
          if (!g || o < 1)
            return [];
          for (var b = 0, M = 0, P = q(ka(g / o)); b < g; )
            P[M++] = de(i, b, b += o);
          return P;
        }
        function q1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = 0, b = []; ++o < l; ) {
            var M = i[o];
            M && (b[g++] = M);
          }
          return b;
        }
        function U1() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var o = q(i - 1), l = arguments[0], g = i; g--; )
            o[g - 1] = arguments[g];
          return fn(Gt(l) ? Ur(l) : [l], Or(o, 1));
        }
        var $1 = Nt(function(i, o) {
          return hr(i) ? Wi(i, Or(o, 1, hr, !0)) : [];
        }), V1 = Nt(function(i, o) {
          var l = he(o);
          return hr(l) && (l = r), hr(i) ? Wi(i, Or(o, 1, hr, !0), Dt(l, 2)) : [];
        }), K1 = Nt(function(i, o) {
          var l = he(o);
          return hr(l) && (l = r), hr(i) ? Wi(i, Or(o, 1, hr, !0), r, l) : [];
        });
        function Z1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : kt(o), de(i, o < 0 ? 0 : o, g)) : [];
        }
        function J1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : kt(o), o = g - o, de(i, 0, o < 0 ? 0 : o)) : [];
        }
        function Q1(i, o) {
          return i && i.length ? Va(i, Dt(o, 3), !0, !0) : [];
        }
        function j1(i, o) {
          return i && i.length ? Va(i, Dt(o, 3), !0) : [];
        }
        function tm(i, o, l, g) {
          var b = i == null ? 0 : i.length;
          return b ? (l && typeof l != "number" && Wr(i, o, l) && (l = 0, g = b), U0(i, o, l, g)) : [];
        }
        function Lc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = l == null ? 0 : kt(l);
          return b < 0 && (b = Cr(g + b, 0)), Ma(i, Dt(o, 3), b);
        }
        function Wc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = g - 1;
          return l !== r && (b = kt(l), b = l < 0 ? Cr(g + b, 0) : zr(b, g - 1)), Ma(i, Dt(o, 3), b, !0);
        }
        function Nc(i) {
          var o = i == null ? 0 : i.length;
          return o ? Or(i, 1) : [];
        }
        function rm(i) {
          var o = i == null ? 0 : i.length;
          return o ? Or(i, et) : [];
        }
        function em(i, o) {
          var l = i == null ? 0 : i.length;
          return l ? (o = o === r ? 1 : kt(o), Or(i, o)) : [];
        }
        function nm(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = {}; ++o < l; ) {
            var b = i[o];
            g[b[0]] = b[1];
          }
          return g;
        }
        function Hc(i) {
          return i && i.length ? i[0] : r;
        }
        function im(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = l == null ? 0 : kt(l);
          return b < 0 && (b = Cr(g + b, 0)), Zn(i, o, b);
        }
        function am(i) {
          var o = i == null ? 0 : i.length;
          return o ? de(i, 0, -1) : [];
        }
        var om = Nt(function(i) {
          var o = lr(i, Hs);
          return o.length && o[0] === i[0] ? Ps(o) : [];
        }), sm = Nt(function(i) {
          var o = he(i), l = lr(i, Hs);
          return o === he(l) ? o = r : l.pop(), l.length && l[0] === i[0] ? Ps(l, Dt(o, 2)) : [];
        }), um = Nt(function(i) {
          var o = he(i), l = lr(i, Hs);
          return o = typeof o == "function" ? o : r, o && l.pop(), l.length && l[0] === i[0] ? Ps(l, r, o) : [];
        });
        function fm(i, o) {
          return i == null ? "" : a0.call(i, o);
        }
        function he(i) {
          var o = i == null ? 0 : i.length;
          return o ? i[o - 1] : r;
        }
        function lm(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = g;
          return l !== r && (b = kt(l), b = b < 0 ? Cr(g + b, 0) : zr(b, g - 1)), o === o ? Yg(i, o, b) : Ma(i, Sl, b, !0);
        }
        function cm(i, o) {
          return i && i.length ? jl(i, kt(o)) : r;
        }
        var vm = Nt(Yc);
        function Yc(i, o) {
          return i && i.length && o && o.length ? Gs(i, o) : i;
        }
        function pm(i, o, l) {
          return i && i.length && o && o.length ? Gs(i, o, Dt(l, 2)) : i;
        }
        function dm(i, o, l) {
          return i && i.length && o && o.length ? Gs(i, o, r, l) : i;
        }
        var hm = $e(function(i, o) {
          var l = i == null ? 0 : i.length, g = Rs(i, o);
          return ec(i, lr(o, function(b) {
            return Ve(b, l) ? +b : b;
          }).sort(vc)), g;
        });
        function gm(i, o) {
          var l = [];
          if (!(i && i.length))
            return l;
          var g = -1, b = [], M = i.length;
          for (o = Dt(o, 3); ++g < M; ) {
            var P = i[g];
            o(P, g, i) && (l.push(P), b.push(g));
          }
          return ec(i, b), l;
        }
        function eu(i) {
          return i == null ? i : f0.call(i);
        }
        function mm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (l && typeof l != "number" && Wr(i, o, l) ? (o = 0, l = g) : (o = o == null ? 0 : kt(o), l = l === r ? g : kt(l)), de(i, o, l)) : [];
        }
        function _m(i, o) {
          return $a(i, o);
        }
        function xm(i, o, l) {
          return Ls(i, o, Dt(l, 2));
        }
        function ym(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = $a(i, o);
            if (g < l && Ce(i[g], o))
              return g;
          }
          return -1;
        }
        function bm(i, o) {
          return $a(i, o, !0);
        }
        function Sm(i, o, l) {
          return Ls(i, o, Dt(l, 2), !0);
        }
        function Cm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = $a(i, o, !0) - 1;
            if (Ce(i[g], o))
              return g;
          }
          return -1;
        }
        function wm(i) {
          return i && i.length ? ic(i) : [];
        }
        function Em(i, o) {
          return i && i.length ? ic(i, Dt(o, 2)) : [];
        }
        function Dm(i) {
          var o = i == null ? 0 : i.length;
          return o ? de(i, 1, o) : [];
        }
        function Mm(i, o, l) {
          return i && i.length ? (o = l || o === r ? 1 : kt(o), de(i, 0, o < 0 ? 0 : o)) : [];
        }
        function Rm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : kt(o), o = g - o, de(i, o < 0 ? 0 : o, g)) : [];
        }
        function Tm(i, o) {
          return i && i.length ? Va(i, Dt(o, 3), !1, !0) : [];
        }
        function Om(i, o) {
          return i && i.length ? Va(i, Dt(o, 3)) : [];
        }
        var Im = Nt(function(i) {
          return pn(Or(i, 1, hr, !0));
        }), Pm = Nt(function(i) {
          var o = he(i);
          return hr(o) && (o = r), pn(Or(i, 1, hr, !0), Dt(o, 2));
        }), Am = Nt(function(i) {
          var o = he(i);
          return o = typeof o == "function" ? o : r, pn(Or(i, 1, hr, !0), r, o);
        });
        function Bm(i) {
          return i && i.length ? pn(i) : [];
        }
        function zm(i, o) {
          return i && i.length ? pn(i, Dt(o, 2)) : [];
        }
        function Gm(i, o) {
          return o = typeof o == "function" ? o : r, i && i.length ? pn(i, r, o) : [];
        }
        function nu(i) {
          if (!(i && i.length))
            return [];
          var o = 0;
          return i = un(i, function(l) {
            if (hr(l))
              return o = Cr(l.length, o), !0;
          }), ys(o, function(l) {
            return lr(i, ms(l));
          });
        }
        function Xc(i, o) {
          if (!(i && i.length))
            return [];
          var l = nu(i);
          return o == null ? l : lr(l, function(g) {
            return re(o, r, g);
          });
        }
        var Fm = Nt(function(i, o) {
          return hr(i) ? Wi(i, o) : [];
        }), km = Nt(function(i) {
          return Ns(un(i, hr));
        }), Lm = Nt(function(i) {
          var o = he(i);
          return hr(o) && (o = r), Ns(un(i, hr), Dt(o, 2));
        }), Wm = Nt(function(i) {
          var o = he(i);
          return o = typeof o == "function" ? o : r, Ns(un(i, hr), r, o);
        }), Nm = Nt(nu);
        function Hm(i, o) {
          return uc(i || [], o || [], Li);
        }
        function Ym(i, o) {
          return uc(i || [], o || [], Yi);
        }
        var Xm = Nt(function(i) {
          var o = i.length, l = o > 1 ? i[o - 1] : r;
          return l = typeof l == "function" ? (i.pop(), l) : r, Xc(i, l);
        });
        function qc(i) {
          var o = w(i);
          return o.__chain__ = !0, o;
        }
        function qm(i, o) {
          return o(i), i;
        }
        function no(i, o) {
          return o(i);
        }
        var Um = $e(function(i) {
          var o = i.length, l = o ? i[0] : 0, g = this.__wrapped__, b = function(M) {
            return Rs(M, i);
          };
          return o > 1 || this.__actions__.length || !(g instanceof Xt) || !Ve(l) ? this.thru(b) : (g = g.slice(l, +l + (o ? 1 : 0)), g.__actions__.push({
            func: no,
            args: [b],
            thisArg: r
          }), new ve(g, this.__chain__).thru(function(M) {
            return o && !M.length && M.push(r), M;
          }));
        });
        function $m() {
          return qc(this);
        }
        function Vm() {
          return new ve(this.value(), this.__chain__);
        }
        function Km() {
          this.__values__ === r && (this.__values__ = av(this.value()));
          var i = this.__index__ >= this.__values__.length, o = i ? r : this.__values__[this.__index__++];
          return { done: i, value: o };
        }
        function Zm() {
          return this;
        }
        function Jm(i) {
          for (var o, l = this; l instanceof Ha; ) {
            var g = kc(l);
            g.__index__ = 0, g.__values__ = r, o ? b.__wrapped__ = g : o = g;
            var b = g;
            l = l.__wrapped__;
          }
          return b.__wrapped__ = i, o;
        }
        function Qm() {
          var i = this.__wrapped__;
          if (i instanceof Xt) {
            var o = i;
            return this.__actions__.length && (o = new Xt(this)), o = o.reverse(), o.__actions__.push({
              func: no,
              args: [eu],
              thisArg: r
            }), new ve(o, this.__chain__);
          }
          return this.thru(eu);
        }
        function jm() {
          return sc(this.__wrapped__, this.__actions__);
        }
        var t_ = Ka(function(i, o, l) {
          jt.call(i, l) ? ++i[l] : qe(i, l, 1);
        });
        function r_(i, o, l) {
          var g = Gt(i) ? yl : q0;
          return l && Wr(i, o, l) && (o = r), g(i, Dt(o, 3));
        }
        function e_(i, o) {
          var l = Gt(i) ? un : Xl;
          return l(i, Dt(o, 3));
        }
        var n_ = _c(Lc), i_ = _c(Wc);
        function a_(i, o) {
          return Or(io(i, o), 1);
        }
        function o_(i, o) {
          return Or(io(i, o), et);
        }
        function s_(i, o, l) {
          return l = l === r ? 1 : kt(l), Or(io(i, o), l);
        }
        function Uc(i, o) {
          var l = Gt(i) ? le : vn;
          return l(i, Dt(o, 3));
        }
        function $c(i, o) {
          var l = Gt(i) ? Dg : Yl;
          return l(i, Dt(o, 3));
        }
        var u_ = Ka(function(i, o, l) {
          jt.call(i, l) ? i[l].push(o) : qe(i, l, [o]);
        });
        function f_(i, o, l, g) {
          i = $r(i) ? i : ui(i), l = l && !g ? kt(l) : 0;
          var b = i.length;
          return l < 0 && (l = Cr(b + l, 0)), fo(i) ? l <= b && i.indexOf(o, l) > -1 : !!b && Zn(i, o, l) > -1;
        }
        var l_ = Nt(function(i, o, l) {
          var g = -1, b = typeof o == "function", M = $r(i) ? q(i.length) : [];
          return vn(i, function(P) {
            M[++g] = b ? re(o, P, l) : Ni(P, o, l);
          }), M;
        }), c_ = Ka(function(i, o, l) {
          qe(i, l, o);
        });
        function io(i, o) {
          var l = Gt(i) ? lr : Zl;
          return l(i, Dt(o, 3));
        }
        function v_(i, o, l, g) {
          return i == null ? [] : (Gt(o) || (o = o == null ? [] : [o]), l = g ? r : l, Gt(l) || (l = l == null ? [] : [l]), tc(i, o, l));
        }
        var p_ = Ka(function(i, o, l) {
          i[l ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function d_(i, o, l) {
          var g = Gt(i) ? hs : wl, b = arguments.length < 3;
          return g(i, Dt(o, 4), l, b, vn);
        }
        function h_(i, o, l) {
          var g = Gt(i) ? Mg : wl, b = arguments.length < 3;
          return g(i, Dt(o, 4), l, b, Yl);
        }
        function g_(i, o) {
          var l = Gt(i) ? un : Xl;
          return l(i, so(Dt(o, 3)));
        }
        function m_(i) {
          var o = Gt(i) ? Ll : f1;
          return o(i);
        }
        function __(i, o, l) {
          (l ? Wr(i, o, l) : o === r) ? o = 1 : o = kt(o);
          var g = Gt(i) ? W0 : l1;
          return g(i, o);
        }
        function x_(i) {
          var o = Gt(i) ? N0 : v1;
          return o(i);
        }
        function y_(i) {
          if (i == null)
            return 0;
          if ($r(i))
            return fo(i) ? Qn(i) : i.length;
          var o = Gr(i);
          return o == yt || o == Vt ? i.size : Bs(i).length;
        }
        function b_(i, o, l) {
          var g = Gt(i) ? gs : p1;
          return l && Wr(i, o, l) && (o = r), g(i, Dt(o, 3));
        }
        var S_ = Nt(function(i, o) {
          if (i == null)
            return [];
          var l = o.length;
          return l > 1 && Wr(i, o[0], o[1]) ? o = [] : l > 2 && Wr(o[0], o[1], o[2]) && (o = [o[0]]), tc(i, Or(o, 1), []);
        }), ao = e0 || function() {
          return Tr.Date.now();
        };
        function C_(i, o) {
          if (typeof o != "function")
            throw new ce(u);
          return i = kt(i), function() {
            if (--i < 1)
              return o.apply(this, arguments);
          };
        }
        function Vc(i, o, l) {
          return o = l ? r : o, o = i && o == null ? i.length : o, Ue(i, D, r, r, r, r, o);
        }
        function Kc(i, o) {
          var l;
          if (typeof o != "function")
            throw new ce(u);
          return i = kt(i), function() {
            return --i > 0 && (l = o.apply(this, arguments)), i <= 1 && (o = r), l;
          };
        }
        var iu = Nt(function(i, o, l) {
          var g = y;
          if (l.length) {
            var b = ln(l, oi(iu));
            g |= T;
          }
          return Ue(i, g, o, l, b);
        }), Zc = Nt(function(i, o, l) {
          var g = y | S;
          if (l.length) {
            var b = ln(l, oi(Zc));
            g |= T;
          }
          return Ue(o, g, i, l, b);
        });
        function Jc(i, o, l) {
          o = l ? r : o;
          var g = Ue(i, R, r, r, r, r, r, o);
          return g.placeholder = Jc.placeholder, g;
        }
        function Qc(i, o, l) {
          o = l ? r : o;
          var g = Ue(i, O, r, r, r, r, r, o);
          return g.placeholder = Qc.placeholder, g;
        }
        function jc(i, o, l) {
          var g, b, M, P, F, N, Q = 0, j = !1, nt = !1, dt = !0;
          if (typeof i != "function")
            throw new ce(u);
          o = ge(o) || 0, cr(l) && (j = !!l.leading, nt = "maxWait" in l, M = nt ? Cr(ge(l.maxWait) || 0, o) : M, dt = "trailing" in l ? !!l.trailing : dt);
          function bt(gr) {
            var we = g, Je = b;
            return g = b = r, Q = gr, P = i.apply(Je, we), P;
          }
          function Mt(gr) {
            return Q = gr, F = Ui(Yt, o), j ? bt(gr) : P;
          }
          function Lt(gr) {
            var we = gr - N, Je = gr - Q, _v = o - we;
            return nt ? zr(_v, M - Je) : _v;
          }
          function Rt(gr) {
            var we = gr - N, Je = gr - Q;
            return N === r || we >= o || we < 0 || nt && Je >= M;
          }
          function Yt() {
            var gr = ao();
            if (Rt(gr))
              return qt(gr);
            F = Ui(Yt, Lt(gr));
          }
          function qt(gr) {
            return F = r, dt && g ? bt(gr) : (g = b = r, P);
          }
          function ae() {
            F !== r && fc(F), Q = 0, g = N = b = F = r;
          }
          function Nr() {
            return F === r ? P : qt(ao());
          }
          function oe() {
            var gr = ao(), we = Rt(gr);
            if (g = arguments, b = this, N = gr, we) {
              if (F === r)
                return Mt(N);
              if (nt)
                return fc(F), F = Ui(Yt, o), bt(N);
            }
            return F === r && (F = Ui(Yt, o)), P;
          }
          return oe.cancel = ae, oe.flush = Nr, oe;
        }
        var w_ = Nt(function(i, o) {
          return Hl(i, 1, o);
        }), E_ = Nt(function(i, o, l) {
          return Hl(i, ge(o) || 0, l);
        });
        function D_(i) {
          return Ue(i, A);
        }
        function oo(i, o) {
          if (typeof i != "function" || o != null && typeof o != "function")
            throw new ce(u);
          var l = function() {
            var g = arguments, b = o ? o.apply(this, g) : g[0], M = l.cache;
            if (M.has(b))
              return M.get(b);
            var P = i.apply(this, g);
            return l.cache = M.set(b, P) || M, P;
          };
          return l.cache = new (oo.Cache || Xe)(), l;
        }
        oo.Cache = Xe;
        function so(i) {
          if (typeof i != "function")
            throw new ce(u);
          return function() {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !i.call(this);
              case 1:
                return !i.call(this, o[0]);
              case 2:
                return !i.call(this, o[0], o[1]);
              case 3:
                return !i.call(this, o[0], o[1], o[2]);
            }
            return !i.apply(this, o);
          };
        }
        function M_(i) {
          return Kc(2, i);
        }
        var R_ = d1(function(i, o) {
          o = o.length == 1 && Gt(o[0]) ? lr(o[0], ee(Dt())) : lr(Or(o, 1), ee(Dt()));
          var l = o.length;
          return Nt(function(g) {
            for (var b = -1, M = zr(g.length, l); ++b < M; )
              g[b] = o[b].call(this, g[b]);
            return re(i, this, g);
          });
        }), au = Nt(function(i, o) {
          var l = ln(o, oi(au));
          return Ue(i, T, r, o, l);
        }), tv = Nt(function(i, o) {
          var l = ln(o, oi(tv));
          return Ue(i, C, r, o, l);
        }), T_ = $e(function(i, o) {
          return Ue(i, I, r, r, r, o);
        });
        function O_(i, o) {
          if (typeof i != "function")
            throw new ce(u);
          return o = o === r ? o : kt(o), Nt(i, o);
        }
        function I_(i, o) {
          if (typeof i != "function")
            throw new ce(u);
          return o = o == null ? 0 : Cr(kt(o), 0), Nt(function(l) {
            var g = l[o], b = hn(l, 0, o);
            return g && fn(b, g), re(i, this, b);
          });
        }
        function P_(i, o, l) {
          var g = !0, b = !0;
          if (typeof i != "function")
            throw new ce(u);
          return cr(l) && (g = "leading" in l ? !!l.leading : g, b = "trailing" in l ? !!l.trailing : b), jc(i, o, {
            leading: g,
            maxWait: o,
            trailing: b
          });
        }
        function A_(i) {
          return Vc(i, 1);
        }
        function B_(i, o) {
          return au(Ys(o), i);
        }
        function z_() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return Gt(i) ? i : [i];
        }
        function G_(i) {
          return pe(i, m);
        }
        function F_(i, o) {
          return o = typeof o == "function" ? o : r, pe(i, m, o);
        }
        function k_(i) {
          return pe(i, h | m);
        }
        function L_(i, o) {
          return o = typeof o == "function" ? o : r, pe(i, h | m, o);
        }
        function W_(i, o) {
          return o == null || Nl(i, o, Mr(o));
        }
        function Ce(i, o) {
          return i === o || i !== i && o !== o;
        }
        var N_ = ja(Is), H_ = ja(function(i, o) {
          return i >= o;
        }), Gn = $l(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? $l : function(i) {
          return pr(i) && jt.call(i, "callee") && !Al.call(i, "callee");
        }, Gt = q.isArray, Y_ = dl ? ee(dl) : J0;
        function $r(i) {
          return i != null && uo(i.length) && !Ke(i);
        }
        function hr(i) {
          return pr(i) && $r(i);
        }
        function X_(i) {
          return i === !0 || i === !1 || pr(i) && Lr(i) == mt;
        }
        var gn = i0 || gu, q_ = hl ? ee(hl) : Q0;
        function U_(i) {
          return pr(i) && i.nodeType === 1 && !$i(i);
        }
        function $_(i) {
          if (i == null)
            return !0;
          if ($r(i) && (Gt(i) || typeof i == "string" || typeof i.splice == "function" || gn(i) || si(i) || Gn(i)))
            return !i.length;
          var o = Gr(i);
          if (o == yt || o == Vt)
            return !i.size;
          if (qi(i))
            return !Bs(i).length;
          for (var l in i)
            if (jt.call(i, l))
              return !1;
          return !0;
        }
        function V_(i, o) {
          return Hi(i, o);
        }
        function K_(i, o, l) {
          l = typeof l == "function" ? l : r;
          var g = l ? l(i, o) : r;
          return g === r ? Hi(i, o, r, l) : !!g;
        }
        function ou(i) {
          if (!pr(i))
            return !1;
          var o = Lr(i);
          return o == ut || o == Wt || typeof i.message == "string" && typeof i.name == "string" && !$i(i);
        }
        function Z_(i) {
          return typeof i == "number" && zl(i);
        }
        function Ke(i) {
          if (!cr(i))
            return !1;
          var o = Lr(i);
          return o == vt || o == Ot || o == gt || o == zt;
        }
        function rv(i) {
          return typeof i == "number" && i == kt(i);
        }
        function uo(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Z;
        }
        function cr(i) {
          var o = typeof i;
          return i != null && (o == "object" || o == "function");
        }
        function pr(i) {
          return i != null && typeof i == "object";
        }
        var ev = gl ? ee(gl) : t1;
        function J_(i, o) {
          return i === o || As(i, o, Zs(o));
        }
        function Q_(i, o, l) {
          return l = typeof l == "function" ? l : r, As(i, o, Zs(o), l);
        }
        function j_(i) {
          return nv(i) && i != +i;
        }
        function tx(i) {
          if (F1(i))
            throw new Bt(s);
          return Vl(i);
        }
        function rx(i) {
          return i === null;
        }
        function ex(i) {
          return i == null;
        }
        function nv(i) {
          return typeof i == "number" || pr(i) && Lr(i) == Et;
        }
        function $i(i) {
          if (!pr(i) || Lr(i) != At)
            return !1;
          var o = za(i);
          if (o === null)
            return !0;
          var l = jt.call(o, "constructor") && o.constructor;
          return typeof l == "function" && l instanceof l && Ia.call(l) == Qg;
        }
        var su = ml ? ee(ml) : r1;
        function nx(i) {
          return rv(i) && i >= -Z && i <= Z;
        }
        var iv = _l ? ee(_l) : e1;
        function fo(i) {
          return typeof i == "string" || !Gt(i) && pr(i) && Lr(i) == ur;
        }
        function ie(i) {
          return typeof i == "symbol" || pr(i) && Lr(i) == nr;
        }
        var si = xl ? ee(xl) : n1;
        function ix(i) {
          return i === r;
        }
        function ax(i) {
          return pr(i) && Gr(i) == tr;
        }
        function ox(i) {
          return pr(i) && Lr(i) == ue;
        }
        var sx = ja(zs), ux = ja(function(i, o) {
          return i <= o;
        });
        function av(i) {
          if (!i)
            return [];
          if ($r(i))
            return fo(i) ? be(i) : Ur(i);
          if (Bi && i[Bi])
            return Wg(i[Bi]());
          var o = Gr(i), l = o == yt ? Ss : o == Vt ? Ra : ui;
          return l(i);
        }
        function Ze(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = ge(i), i === et || i === -et) {
            var o = i < 0 ? -1 : 1;
            return o * it;
          }
          return i === i ? i : 0;
        }
        function kt(i) {
          var o = Ze(i), l = o % 1;
          return o === o ? l ? o - l : o : 0;
        }
        function ov(i) {
          return i ? Pn(kt(i), 0, $) : 0;
        }
        function ge(i) {
          if (typeof i == "number")
            return i;
          if (ie(i))
            return at;
          if (cr(i)) {
            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = cr(o) ? o + "" : o;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = El(i);
          var l = Yh.test(i);
          return l || qh.test(i) ? Cg(i.slice(2), l ? 2 : 8) : Hh.test(i) ? at : +i;
        }
        function sv(i) {
          return Be(i, Vr(i));
        }
        function fx(i) {
          return i ? Pn(kt(i), -Z, Z) : i === 0 ? i : 0;
        }
        function Qt(i) {
          return i == null ? "" : ne(i);
        }
        var lx = ii(function(i, o) {
          if (qi(o) || $r(o)) {
            Be(o, Mr(o), i);
            return;
          }
          for (var l in o)
            jt.call(o, l) && Li(i, l, o[l]);
        }), uv = ii(function(i, o) {
          Be(o, Vr(o), i);
        }), lo = ii(function(i, o, l, g) {
          Be(o, Vr(o), i, g);
        }), cx = ii(function(i, o, l, g) {
          Be(o, Mr(o), i, g);
        }), vx = $e(Rs);
        function px(i, o) {
          var l = ni(i);
          return o == null ? l : Wl(l, o);
        }
        var dx = Nt(function(i, o) {
          i = ir(i);
          var l = -1, g = o.length, b = g > 2 ? o[2] : r;
          for (b && Wr(o[0], o[1], b) && (g = 1); ++l < g; )
            for (var M = o[l], P = Vr(M), F = -1, N = P.length; ++F < N; ) {
              var Q = P[F], j = i[Q];
              (j === r || Ce(j, ti[Q]) && !jt.call(i, Q)) && (i[Q] = M[Q]);
            }
          return i;
        }), hx = Nt(function(i) {
          return i.push(r, Ec), re(fv, r, i);
        });
        function gx(i, o) {
          return bl(i, Dt(o, 3), Ae);
        }
        function mx(i, o) {
          return bl(i, Dt(o, 3), Os);
        }
        function _x(i, o) {
          return i == null ? i : Ts(i, Dt(o, 3), Vr);
        }
        function xx(i, o) {
          return i == null ? i : ql(i, Dt(o, 3), Vr);
        }
        function yx(i, o) {
          return i && Ae(i, Dt(o, 3));
        }
        function bx(i, o) {
          return i && Os(i, Dt(o, 3));
        }
        function Sx(i) {
          return i == null ? [] : qa(i, Mr(i));
        }
        function Cx(i) {
          return i == null ? [] : qa(i, Vr(i));
        }
        function uu(i, o, l) {
          var g = i == null ? r : An(i, o);
          return g === r ? l : g;
        }
        function wx(i, o) {
          return i != null && Rc(i, o, $0);
        }
        function fu(i, o) {
          return i != null && Rc(i, o, V0);
        }
        var Ex = yc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Pa.call(o)), i[o] = l;
        }, cu(Kr)), Dx = yc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Pa.call(o)), jt.call(i, o) ? i[o].push(l) : i[o] = [l];
        }, Dt), Mx = Nt(Ni);
        function Mr(i) {
          return $r(i) ? kl(i) : Bs(i);
        }
        function Vr(i) {
          return $r(i) ? kl(i, !0) : i1(i);
        }
        function Rx(i, o) {
          var l = {};
          return o = Dt(o, 3), Ae(i, function(g, b, M) {
            qe(l, o(g, b, M), g);
          }), l;
        }
        function Tx(i, o) {
          var l = {};
          return o = Dt(o, 3), Ae(i, function(g, b, M) {
            qe(l, b, o(g, b, M));
          }), l;
        }
        var Ox = ii(function(i, o, l) {
          Ua(i, o, l);
        }), fv = ii(function(i, o, l, g) {
          Ua(i, o, l, g);
        }), Ix = $e(function(i, o) {
          var l = {};
          if (i == null)
            return l;
          var g = !1;
          o = lr(o, function(M) {
            return M = dn(M, i), g || (g = M.length > 1), M;
          }), Be(i, Vs(i), l), g && (l = pe(l, h | d | m, E1));
          for (var b = o.length; b--; )
            Ws(l, o[b]);
          return l;
        });
        function Px(i, o) {
          return lv(i, so(Dt(o)));
        }
        var Ax = $e(function(i, o) {
          return i == null ? {} : o1(i, o);
        });
        function lv(i, o) {
          if (i == null)
            return {};
          var l = lr(Vs(i), function(g) {
            return [g];
          });
          return o = Dt(o), rc(i, l, function(g, b) {
            return o(g, b[0]);
          });
        }
        function Bx(i, o, l) {
          o = dn(o, i);
          var g = -1, b = o.length;
          for (b || (b = 1, i = r); ++g < b; ) {
            var M = i == null ? r : i[ze(o[g])];
            M === r && (g = b, M = l), i = Ke(M) ? M.call(i) : M;
          }
          return i;
        }
        function zx(i, o, l) {
          return i == null ? i : Yi(i, o, l);
        }
        function Gx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Yi(i, o, l, g);
        }
        var cv = Cc(Mr), vv = Cc(Vr);
        function Fx(i, o, l) {
          var g = Gt(i), b = g || gn(i) || si(i);
          if (o = Dt(o, 4), l == null) {
            var M = i && i.constructor;
            b ? l = g ? new M() : [] : cr(i) ? l = Ke(M) ? ni(za(i)) : {} : l = {};
          }
          return (b ? le : Ae)(i, function(P, F, N) {
            return o(l, P, F, N);
          }), l;
        }
        function kx(i, o) {
          return i == null ? !0 : Ws(i, o);
        }
        function Lx(i, o, l) {
          return i == null ? i : oc(i, o, Ys(l));
        }
        function Wx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : oc(i, o, Ys(l), g);
        }
        function ui(i) {
          return i == null ? [] : bs(i, Mr(i));
        }
        function Nx(i) {
          return i == null ? [] : bs(i, Vr(i));
        }
        function Hx(i, o, l) {
          return l === r && (l = o, o = r), l !== r && (l = ge(l), l = l === l ? l : 0), o !== r && (o = ge(o), o = o === o ? o : 0), Pn(ge(i), o, l);
        }
        function Yx(i, o, l) {
          return o = Ze(o), l === r ? (l = o, o = 0) : l = Ze(l), i = ge(i), K0(i, o, l);
        }
        function Xx(i, o, l) {
          if (l && typeof l != "boolean" && Wr(i, o, l) && (o = l = r), l === r && (typeof o == "boolean" ? (l = o, o = r) : typeof i == "boolean" && (l = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Ze(i), o === r ? (o = i, i = 0) : o = Ze(o)), i > o) {
            var g = i;
            i = o, o = g;
          }
          if (l || i % 1 || o % 1) {
            var b = Gl();
            return zr(i + b * (o - i + Sg("1e-" + ((b + "").length - 1))), o);
          }
          return Fs(i, o);
        }
        var qx = ai(function(i, o, l) {
          return o = o.toLowerCase(), i + (l ? pv(o) : o);
        });
        function pv(i) {
          return lu(Qt(i).toLowerCase());
        }
        function dv(i) {
          return i = Qt(i), i && i.replace($h, zg).replace(vg, "");
        }
        function Ux(i, o, l) {
          i = Qt(i), o = ne(o);
          var g = i.length;
          l = l === r ? g : Pn(kt(l), 0, g);
          var b = l;
          return l -= o.length, l >= 0 && i.slice(l, b) == o;
        }
        function $x(i) {
          return i = Qt(i), i && Zt.test(i) ? i.replace(Kt, Gg) : i;
        }
        function Vx(i) {
          return i = Qt(i), i && Ah.test(i) ? i.replace(as, "\\$&") : i;
        }
        var Kx = ai(function(i, o, l) {
          return i + (l ? "-" : "") + o.toLowerCase();
        }), Zx = ai(function(i, o, l) {
          return i + (l ? " " : "") + o.toLowerCase();
        }), Jx = mc("toLowerCase");
        function Qx(i, o, l) {
          i = Qt(i), o = kt(o);
          var g = o ? Qn(i) : 0;
          if (!o || g >= o)
            return i;
          var b = (o - g) / 2;
          return Qa(La(b), l) + i + Qa(ka(b), l);
        }
        function jx(i, o, l) {
          i = Qt(i), o = kt(o);
          var g = o ? Qn(i) : 0;
          return o && g < o ? i + Qa(o - g, l) : i;
        }
        function ty(i, o, l) {
          i = Qt(i), o = kt(o);
          var g = o ? Qn(i) : 0;
          return o && g < o ? Qa(o - g, l) + i : i;
        }
        function ry(i, o, l) {
          return l || o == null ? o = 0 : o && (o = +o), u0(Qt(i).replace(os, ""), o || 0);
        }
        function ey(i, o, l) {
          return (l ? Wr(i, o, l) : o === r) ? o = 1 : o = kt(o), ks(Qt(i), o);
        }
        function ny() {
          var i = arguments, o = Qt(i[0]);
          return i.length < 3 ? o : o.replace(i[1], i[2]);
        }
        var iy = ai(function(i, o, l) {
          return i + (l ? "_" : "") + o.toLowerCase();
        });
        function ay(i, o, l) {
          return l && typeof l != "number" && Wr(i, o, l) && (o = l = r), l = l === r ? $ : l >>> 0, l ? (i = Qt(i), i && (typeof o == "string" || o != null && !su(o)) && (o = ne(o), !o && Jn(i)) ? hn(be(i), 0, l) : i.split(o, l)) : [];
        }
        var oy = ai(function(i, o, l) {
          return i + (l ? " " : "") + lu(o);
        });
        function sy(i, o, l) {
          return i = Qt(i), l = l == null ? 0 : Pn(kt(l), 0, i.length), o = ne(o), i.slice(l, l + o.length) == o;
        }
        function uy(i, o, l) {
          var g = w.templateSettings;
          l && Wr(i, o, l) && (o = r), i = Qt(i), o = lo({}, o, g, wc);
          var b = lo({}, o.imports, g.imports, wc), M = Mr(b), P = bs(b, M), F, N, Q = 0, j = o.interpolate || Ca, nt = "__p += '", dt = Cs(
            (o.escape || Ca).source + "|" + j.source + "|" + (j === Ii ? Nh : Ca).source + "|" + (o.evaluate || Ca).source + "|$",
            "g"
          ), bt = "//# sourceURL=" + (jt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++mg + "]") + `
`;
          i.replace(dt, function(Rt, Yt, qt, ae, Nr, oe) {
            return qt || (qt = ae), nt += i.slice(Q, oe).replace(Vh, Fg), Yt && (F = !0, nt += `' +
__e(` + Yt + `) +
'`), Nr && (N = !0, nt += `';
` + Nr + `;
__p += '`), qt && (nt += `' +
((__t = (` + qt + `)) == null ? '' : __t) +
'`), Q = oe + Rt.length, Rt;
          }), nt += `';
`;
          var Mt = jt.call(o, "variable") && o.variable;
          if (!Mt)
            nt = `with (obj) {
` + nt + `
}
`;
          else if (Lh.test(Mt))
            throw new Bt(f);
          nt = (N ? nt.replace(J, "") : nt).replace(V, "$1").replace(U, "$1;"), nt = "function(" + (Mt || "obj") + `) {
` + (Mt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (F ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + nt + `return __p
}`;
          var Lt = gv(function() {
            return Jt(M, bt + "return " + nt).apply(r, P);
          });
          if (Lt.source = nt, ou(Lt))
            throw Lt;
          return Lt;
        }
        function fy(i) {
          return Qt(i).toLowerCase();
        }
        function ly(i) {
          return Qt(i).toUpperCase();
        }
        function cy(i, o, l) {
          if (i = Qt(i), i && (l || o === r))
            return El(i);
          if (!i || !(o = ne(o)))
            return i;
          var g = be(i), b = be(o), M = Dl(g, b), P = Ml(g, b) + 1;
          return hn(g, M, P).join("");
        }
        function vy(i, o, l) {
          if (i = Qt(i), i && (l || o === r))
            return i.slice(0, Tl(i) + 1);
          if (!i || !(o = ne(o)))
            return i;
          var g = be(i), b = Ml(g, be(o)) + 1;
          return hn(g, 0, b).join("");
        }
        function py(i, o, l) {
          if (i = Qt(i), i && (l || o === r))
            return i.replace(os, "");
          if (!i || !(o = ne(o)))
            return i;
          var g = be(i), b = Dl(g, be(o));
          return hn(g, b).join("");
        }
        function dy(i, o) {
          var l = B, g = H;
          if (cr(o)) {
            var b = "separator" in o ? o.separator : b;
            l = "length" in o ? kt(o.length) : l, g = "omission" in o ? ne(o.omission) : g;
          }
          i = Qt(i);
          var M = i.length;
          if (Jn(i)) {
            var P = be(i);
            M = P.length;
          }
          if (l >= M)
            return i;
          var F = l - Qn(g);
          if (F < 1)
            return g;
          var N = P ? hn(P, 0, F).join("") : i.slice(0, F);
          if (b === r)
            return N + g;
          if (P && (F += N.length - F), su(b)) {
            if (i.slice(F).search(b)) {
              var Q, j = N;
              for (b.global || (b = Cs(b.source, Qt($f.exec(b)) + "g")), b.lastIndex = 0; Q = b.exec(j); )
                var nt = Q.index;
              N = N.slice(0, nt === r ? F : nt);
            }
          } else if (i.indexOf(ne(b), F) != F) {
            var dt = N.lastIndexOf(b);
            dt > -1 && (N = N.slice(0, dt));
          }
          return N + g;
        }
        function hy(i) {
          return i = Qt(i), i && kr.test(i) ? i.replace(ht, Xg) : i;
        }
        var gy = ai(function(i, o, l) {
          return i + (l ? " " : "") + o.toUpperCase();
        }), lu = mc("toUpperCase");
        function hv(i, o, l) {
          return i = Qt(i), o = l ? r : o, o === r ? Lg(i) ? $g(i) : Og(i) : i.match(o) || [];
        }
        var gv = Nt(function(i, o) {
          try {
            return re(i, r, o);
          } catch (l) {
            return ou(l) ? l : new Bt(l);
          }
        }), my = $e(function(i, o) {
          return le(o, function(l) {
            l = ze(l), qe(i, l, iu(i[l], i));
          }), i;
        });
        function _y(i) {
          var o = i == null ? 0 : i.length, l = Dt();
          return i = o ? lr(i, function(g) {
            if (typeof g[1] != "function")
              throw new ce(u);
            return [l(g[0]), g[1]];
          }) : [], Nt(function(g) {
            for (var b = -1; ++b < o; ) {
              var M = i[b];
              if (re(M[0], this, g))
                return re(M[1], this, g);
            }
          });
        }
        function xy(i) {
          return X0(pe(i, h));
        }
        function cu(i) {
          return function() {
            return i;
          };
        }
        function yy(i, o) {
          return i == null || i !== i ? o : i;
        }
        var by = xc(), Sy = xc(!0);
        function Kr(i) {
          return i;
        }
        function vu(i) {
          return Kl(typeof i == "function" ? i : pe(i, h));
        }
        function Cy(i) {
          return Jl(pe(i, h));
        }
        function wy(i, o) {
          return Ql(i, pe(o, h));
        }
        var Ey = Nt(function(i, o) {
          return function(l) {
            return Ni(l, i, o);
          };
        }), Dy = Nt(function(i, o) {
          return function(l) {
            return Ni(i, l, o);
          };
        });
        function pu(i, o, l) {
          var g = Mr(o), b = qa(o, g);
          l == null && !(cr(o) && (b.length || !g.length)) && (l = o, o = i, i = this, b = qa(o, Mr(o)));
          var M = !(cr(l) && "chain" in l) || !!l.chain, P = Ke(i);
          return le(b, function(F) {
            var N = o[F];
            i[F] = N, P && (i.prototype[F] = function() {
              var Q = this.__chain__;
              if (M || Q) {
                var j = i(this.__wrapped__), nt = j.__actions__ = Ur(this.__actions__);
                return nt.push({ func: N, args: arguments, thisArg: i }), j.__chain__ = Q, j;
              }
              return N.apply(i, fn([this.value()], arguments));
            });
          }), i;
        }
        function My() {
          return Tr._ === this && (Tr._ = jg), this;
        }
        function du() {
        }
        function Ry(i) {
          return i = kt(i), Nt(function(o) {
            return jl(o, i);
          });
        }
        var Ty = qs(lr), Oy = qs(yl), Iy = qs(gs);
        function mv(i) {
          return Qs(i) ? ms(ze(i)) : s1(i);
        }
        function Py(i) {
          return function(o) {
            return i == null ? r : An(i, o);
          };
        }
        var Ay = bc(), By = bc(!0);
        function hu() {
          return [];
        }
        function gu() {
          return !1;
        }
        function zy() {
          return {};
        }
        function Gy() {
          return "";
        }
        function Fy() {
          return !0;
        }
        function ky(i, o) {
          if (i = kt(i), i < 1 || i > Z)
            return [];
          var l = $, g = zr(i, $);
          o = Dt(o), i -= $;
          for (var b = ys(g, o); ++l < i; )
            o(l);
          return b;
        }
        function Ly(i) {
          return Gt(i) ? lr(i, ze) : ie(i) ? [i] : Ur(Fc(Qt(i)));
        }
        function Wy(i) {
          var o = ++Jg;
          return Qt(i) + o;
        }
        var Ny = Ja(function(i, o) {
          return i + o;
        }, 0), Hy = Us("ceil"), Yy = Ja(function(i, o) {
          return i / o;
        }, 1), Xy = Us("floor");
        function qy(i) {
          return i && i.length ? Xa(i, Kr, Is) : r;
        }
        function Uy(i, o) {
          return i && i.length ? Xa(i, Dt(o, 2), Is) : r;
        }
        function $y(i) {
          return Cl(i, Kr);
        }
        function Vy(i, o) {
          return Cl(i, Dt(o, 2));
        }
        function Ky(i) {
          return i && i.length ? Xa(i, Kr, zs) : r;
        }
        function Zy(i, o) {
          return i && i.length ? Xa(i, Dt(o, 2), zs) : r;
        }
        var Jy = Ja(function(i, o) {
          return i * o;
        }, 1), Qy = Us("round"), jy = Ja(function(i, o) {
          return i - o;
        }, 0);
        function tb(i) {
          return i && i.length ? xs(i, Kr) : 0;
        }
        function rb(i, o) {
          return i && i.length ? xs(i, Dt(o, 2)) : 0;
        }
        return w.after = C_, w.ary = Vc, w.assign = lx, w.assignIn = uv, w.assignInWith = lo, w.assignWith = cx, w.at = vx, w.before = Kc, w.bind = iu, w.bindAll = my, w.bindKey = Zc, w.castArray = z_, w.chain = qc, w.chunk = X1, w.compact = q1, w.concat = U1, w.cond = _y, w.conforms = xy, w.constant = cu, w.countBy = t_, w.create = px, w.curry = Jc, w.curryRight = Qc, w.debounce = jc, w.defaults = dx, w.defaultsDeep = hx, w.defer = w_, w.delay = E_, w.difference = $1, w.differenceBy = V1, w.differenceWith = K1, w.drop = Z1, w.dropRight = J1, w.dropRightWhile = Q1, w.dropWhile = j1, w.fill = tm, w.filter = e_, w.flatMap = a_, w.flatMapDeep = o_, w.flatMapDepth = s_, w.flatten = Nc, w.flattenDeep = rm, w.flattenDepth = em, w.flip = D_, w.flow = by, w.flowRight = Sy, w.fromPairs = nm, w.functions = Sx, w.functionsIn = Cx, w.groupBy = u_, w.initial = am, w.intersection = om, w.intersectionBy = sm, w.intersectionWith = um, w.invert = Ex, w.invertBy = Dx, w.invokeMap = l_, w.iteratee = vu, w.keyBy = c_, w.keys = Mr, w.keysIn = Vr, w.map = io, w.mapKeys = Rx, w.mapValues = Tx, w.matches = Cy, w.matchesProperty = wy, w.memoize = oo, w.merge = Ox, w.mergeWith = fv, w.method = Ey, w.methodOf = Dy, w.mixin = pu, w.negate = so, w.nthArg = Ry, w.omit = Ix, w.omitBy = Px, w.once = M_, w.orderBy = v_, w.over = Ty, w.overArgs = R_, w.overEvery = Oy, w.overSome = Iy, w.partial = au, w.partialRight = tv, w.partition = p_, w.pick = Ax, w.pickBy = lv, w.property = mv, w.propertyOf = Py, w.pull = vm, w.pullAll = Yc, w.pullAllBy = pm, w.pullAllWith = dm, w.pullAt = hm, w.range = Ay, w.rangeRight = By, w.rearg = T_, w.reject = g_, w.remove = gm, w.rest = O_, w.reverse = eu, w.sampleSize = __, w.set = zx, w.setWith = Gx, w.shuffle = x_, w.slice = mm, w.sortBy = S_, w.sortedUniq = wm, w.sortedUniqBy = Em, w.split = ay, w.spread = I_, w.tail = Dm, w.take = Mm, w.takeRight = Rm, w.takeRightWhile = Tm, w.takeWhile = Om, w.tap = qm, w.throttle = P_, w.thru = no, w.toArray = av, w.toPairs = cv, w.toPairsIn = vv, w.toPath = Ly, w.toPlainObject = sv, w.transform = Fx, w.unary = A_, w.union = Im, w.unionBy = Pm, w.unionWith = Am, w.uniq = Bm, w.uniqBy = zm, w.uniqWith = Gm, w.unset = kx, w.unzip = nu, w.unzipWith = Xc, w.update = Lx, w.updateWith = Wx, w.values = ui, w.valuesIn = Nx, w.without = Fm, w.words = hv, w.wrap = B_, w.xor = km, w.xorBy = Lm, w.xorWith = Wm, w.zip = Nm, w.zipObject = Hm, w.zipObjectDeep = Ym, w.zipWith = Xm, w.entries = cv, w.entriesIn = vv, w.extend = uv, w.extendWith = lo, pu(w, w), w.add = Ny, w.attempt = gv, w.camelCase = qx, w.capitalize = pv, w.ceil = Hy, w.clamp = Hx, w.clone = G_, w.cloneDeep = k_, w.cloneDeepWith = L_, w.cloneWith = F_, w.conformsTo = W_, w.deburr = dv, w.defaultTo = yy, w.divide = Yy, w.endsWith = Ux, w.eq = Ce, w.escape = $x, w.escapeRegExp = Vx, w.every = r_, w.find = n_, w.findIndex = Lc, w.findKey = gx, w.findLast = i_, w.findLastIndex = Wc, w.findLastKey = mx, w.floor = Xy, w.forEach = Uc, w.forEachRight = $c, w.forIn = _x, w.forInRight = xx, w.forOwn = yx, w.forOwnRight = bx, w.get = uu, w.gt = N_, w.gte = H_, w.has = wx, w.hasIn = fu, w.head = Hc, w.identity = Kr, w.includes = f_, w.indexOf = im, w.inRange = Yx, w.invoke = Mx, w.isArguments = Gn, w.isArray = Gt, w.isArrayBuffer = Y_, w.isArrayLike = $r, w.isArrayLikeObject = hr, w.isBoolean = X_, w.isBuffer = gn, w.isDate = q_, w.isElement = U_, w.isEmpty = $_, w.isEqual = V_, w.isEqualWith = K_, w.isError = ou, w.isFinite = Z_, w.isFunction = Ke, w.isInteger = rv, w.isLength = uo, w.isMap = ev, w.isMatch = J_, w.isMatchWith = Q_, w.isNaN = j_, w.isNative = tx, w.isNil = ex, w.isNull = rx, w.isNumber = nv, w.isObject = cr, w.isObjectLike = pr, w.isPlainObject = $i, w.isRegExp = su, w.isSafeInteger = nx, w.isSet = iv, w.isString = fo, w.isSymbol = ie, w.isTypedArray = si, w.isUndefined = ix, w.isWeakMap = ax, w.isWeakSet = ox, w.join = fm, w.kebabCase = Kx, w.last = he, w.lastIndexOf = lm, w.lowerCase = Zx, w.lowerFirst = Jx, w.lt = sx, w.lte = ux, w.max = qy, w.maxBy = Uy, w.mean = $y, w.meanBy = Vy, w.min = Ky, w.minBy = Zy, w.stubArray = hu, w.stubFalse = gu, w.stubObject = zy, w.stubString = Gy, w.stubTrue = Fy, w.multiply = Jy, w.nth = cm, w.noConflict = My, w.noop = du, w.now = ao, w.pad = Qx, w.padEnd = jx, w.padStart = ty, w.parseInt = ry, w.random = Xx, w.reduce = d_, w.reduceRight = h_, w.repeat = ey, w.replace = ny, w.result = Bx, w.round = Qy, w.runInContext = L, w.sample = m_, w.size = y_, w.snakeCase = iy, w.some = b_, w.sortedIndex = _m, w.sortedIndexBy = xm, w.sortedIndexOf = ym, w.sortedLastIndex = bm, w.sortedLastIndexBy = Sm, w.sortedLastIndexOf = Cm, w.startCase = oy, w.startsWith = sy, w.subtract = jy, w.sum = tb, w.sumBy = rb, w.template = uy, w.times = ky, w.toFinite = Ze, w.toInteger = kt, w.toLength = ov, w.toLower = fy, w.toNumber = ge, w.toSafeInteger = fx, w.toString = Qt, w.toUpper = ly, w.trim = cy, w.trimEnd = vy, w.trimStart = py, w.truncate = dy, w.unescape = hy, w.uniqueId = Wy, w.upperCase = gy, w.upperFirst = lu, w.each = Uc, w.eachRight = $c, w.first = Hc, pu(w, (function() {
          var i = {};
          return Ae(w, function(o, l) {
            jt.call(w.prototype, l) || (i[l] = o);
          }), i;
        })(), { chain: !1 }), w.VERSION = n, le(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          w[i].placeholder = w;
        }), le(["drop", "take"], function(i, o) {
          Xt.prototype[i] = function(l) {
            l = l === r ? 1 : Cr(kt(l), 0);
            var g = this.__filtered__ && !o ? new Xt(this) : this.clone();
            return g.__filtered__ ? g.__takeCount__ = zr(l, g.__takeCount__) : g.__views__.push({
              size: zr(l, $),
              type: i + (g.__dir__ < 0 ? "Right" : "")
            }), g;
          }, Xt.prototype[i + "Right"] = function(l) {
            return this.reverse()[i](l).reverse();
          };
        }), le(["filter", "map", "takeWhile"], function(i, o) {
          var l = o + 1, g = l == Y || l == rt;
          Xt.prototype[i] = function(b) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: Dt(b, 3),
              type: l
            }), M.__filtered__ = M.__filtered__ || g, M;
          };
        }), le(["head", "last"], function(i, o) {
          var l = "take" + (o ? "Right" : "");
          Xt.prototype[i] = function() {
            return this[l](1).value()[0];
          };
        }), le(["initial", "tail"], function(i, o) {
          var l = "drop" + (o ? "" : "Right");
          Xt.prototype[i] = function() {
            return this.__filtered__ ? new Xt(this) : this[l](1);
          };
        }), Xt.prototype.compact = function() {
          return this.filter(Kr);
        }, Xt.prototype.find = function(i) {
          return this.filter(i).head();
        }, Xt.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Xt.prototype.invokeMap = Nt(function(i, o) {
          return typeof i == "function" ? new Xt(this) : this.map(function(l) {
            return Ni(l, i, o);
          });
        }), Xt.prototype.reject = function(i) {
          return this.filter(so(Dt(i)));
        }, Xt.prototype.slice = function(i, o) {
          i = kt(i);
          var l = this;
          return l.__filtered__ && (i > 0 || o < 0) ? new Xt(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), o !== r && (o = kt(o), l = o < 0 ? l.dropRight(-o) : l.take(o - i)), l);
        }, Xt.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Xt.prototype.toArray = function() {
          return this.take($);
        }, Ae(Xt.prototype, function(i, o) {
          var l = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), b = w[g ? "take" + (o == "last" ? "Right" : "") : o], M = g || /^find/.test(o);
          b && (w.prototype[o] = function() {
            var P = this.__wrapped__, F = g ? [1] : arguments, N = P instanceof Xt, Q = F[0], j = N || Gt(P), nt = function(Yt) {
              var qt = b.apply(w, fn([Yt], F));
              return g && dt ? qt[0] : qt;
            };
            j && l && typeof Q == "function" && Q.length != 1 && (N = j = !1);
            var dt = this.__chain__, bt = !!this.__actions__.length, Mt = M && !dt, Lt = N && !bt;
            if (!M && j) {
              P = Lt ? P : new Xt(this);
              var Rt = i.apply(P, F);
              return Rt.__actions__.push({ func: no, args: [nt], thisArg: r }), new ve(Rt, dt);
            }
            return Mt && Lt ? i.apply(this, F) : (Rt = this.thru(nt), Mt ? g ? Rt.value()[0] : Rt.value() : Rt);
          });
        }), le(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var o = Ta[i], l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
          w.prototype[i] = function() {
            var b = arguments;
            if (g && !this.__chain__) {
              var M = this.value();
              return o.apply(Gt(M) ? M : [], b);
            }
            return this[l](function(P) {
              return o.apply(Gt(P) ? P : [], b);
            });
          };
        }), Ae(Xt.prototype, function(i, o) {
          var l = w[o];
          if (l) {
            var g = l.name + "";
            jt.call(ei, g) || (ei[g] = []), ei[g].push({ name: o, func: l });
          }
        }), ei[Za(r, S).name] = [{
          name: "wrapper",
          func: r
        }], Xt.prototype.clone = h0, Xt.prototype.reverse = g0, Xt.prototype.value = m0, w.prototype.at = Um, w.prototype.chain = $m, w.prototype.commit = Vm, w.prototype.next = Km, w.prototype.plant = Jm, w.prototype.reverse = Qm, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = jm, w.prototype.first = w.prototype.head, Bi && (w.prototype[Bi] = Zm), w;
      }), jn = Vg();
      Rn ? ((Rn.exports = jn)._ = jn, vs._ = jn) : Tr._ = jn;
    }).call(lb);
  })(Ki, Ki.exports)), Ki.exports;
}
var Io = cb();
function Dp(t = "", e = () => 0) {
  const r = nb(t), n = (T) => {
    const C = e();
    return C > 0 ? Math.round(T / C) * C : T;
  }, a = Ep(), s = Rr({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    visible: !1
  });
  return {
    board: r,
    clipboardStore: a,
    ghostPlaceholder: s,
    processDropCoordinates: (T, C) => {
      const { clientX: D, clientY: I } = T, { left: A, top: B } = C.getBoundingClientRect();
      return { dropX: n(D - A), dropY: n(I - B) };
    },
    processDragOverCoordinates: (T, C) => {
      const { clientX: D, clientY: I } = T, { left: A, top: B } = C.getBoundingClientRect(), H = D - A, W = I - B;
      s.value.x = n(H - s.value.width / 2), s.value.y = n(W - s.value.height / 2), s.value.visible = !0;
    },
    hidePlaceholder: () => {
      s.value.visible = !1;
    },
    getInitialStyle: (T) => {
      const C = r.layout.value.find((D) => D.id === T);
      return C ? {
        width: `${C.width}px`,
        height: `${C.height}px`,
        transform: `translate(${C.x}px, ${C.y}px)`,
        "z-index": C.z
      } : {};
    },
    getMovableControlStyles: (T) => {
      const C = r.layout.value.find((D) => D.id === T);
      return C ? {
        "z-index": C.z
      } : {};
    },
    drag: (T, C) => {
      const D = r.layout.value.find((I) => I.id === T);
      D && (D.x = n(C.translate[0]), D.y = n(C.translate[1]), C.target.style.transform = `translate(${D.x}px, ${D.y}px)`);
    },
    resize: (T, C) => {
      const D = r.layout.value.find((I) => I.id === T);
      D && (D.width = n(C.width), D.height = n(C.height), D.x = n(C.drag.translate[0]), D.y = n(C.drag.translate[1]), C.target.style.width = `${D.width}px`, C.target.style.height = `${D.height}px`, C.target.style.transform = `translate(${D.x}px, ${D.y}px)`);
    },
    moveUp: (T) => {
      const C = r.layout.value.find((D) => D.id === T);
      C && (C.z += 1);
    },
    moveDown: (T) => {
      const C = r.layout.value.find((D) => D.id === T);
      C && (C.z -= 1);
    },
    moveToTop: (T) => {
      const C = Math.max(...r.layout.value.map((I) => I.z)), D = r.layout.value.find((I) => I.id === T);
      D && (D.z = C + 1);
    },
    moveToBottom: (T) => {
      const C = Math.min(...r.layout.value.map((I) => I.z)), D = r.layout.value.find((I) => I.id === T);
      D && (D.z = C - 1);
    },
    addWidget: (T, C = {}, D = {}, I = {}) => {
      const A = {
        uid: "",
        type: T,
        config: { datasourceId: C?.datasourceId, settings: { ...C?.settings ?? {} } },
        wrapperConfig: D
      };
      return r.addWidget(A, I);
    },
    removeWidget: (T) => {
      r.removeWidget(T);
    },
    copyWidget: (T) => {
      const C = r.widgets.value.find((I) => I.uid === T), D = r.layout.value.find((I) => I.id === T);
      C && D && a.copy(
        {
          type: C.type,
          config: Io.cloneDeep(C.config ?? {}),
          wrapperConfig: Io.cloneDeep(C.wrapperConfig ?? {})
        },
        {
          x: D.x,
          y: D.y,
          z: D.z,
          width: D.width,
          height: D.height,
          group: D.group
        }
      );
    },
    pasteWidget: (T, C) => {
      const D = a.paste();
      if (!D) return null;
      const I = "li_" + Math.random().toString(36).substring(7), A = Math.max(...r.layout.value.map((W) => W.z), 0), B = Io.cloneDeep(D.widget), H = { ...B.config?.settings ?? {}, name: "widget_" + I };
      return r.addWidget(
        {
          uid: I,
          type: B.type,
          config: { datasourceId: B.config?.datasourceId, settings: H },
          wrapperConfig: B.wrapperConfig
        },
        { ...D.layout, id: I, x: T, y: C, z: A + 1 }
      ), I;
    }
  };
}
const vb = { class: "widget-board" }, pb = { class: "dashboard-item" }, db = /* @__PURE__ */ uf({
  __name: "View",
  props: {
    pageId: {}
  },
  setup(t) {
    const e = t, r = wp(), n = e.pageId ?? r.params.pageid ?? "", {
      board: a,
      getInitialStyle: s
    } = Dp(n || ""), u = bp(sb.TINY_EMITTER);
    return Pu(async () => {
      console.log("Base View component mounted for page:", n), await Au(), console.log("📄 Emitting system:pageLoaded for page:", n), u.emit("system:pageLoaded", { pageId: n });
    }), (f, c) => (mr(), Pr("div", vb, [
      (mr(!0), Pr(Vi, null, Oo(dr(a).widgets.value, (v) => (mr(), Pr("div", {
        key: v.uid,
        class: Sp(`${v.uid} dashboard-item-container`),
        style: Qe(dr(s)(v.uid)),
        ref_for: !0,
        ref: v.uid
      }, [
        St("div", pb, [
          li(dr(Cp), {
            widget: v,
            ref_for: !0,
            ref: `${v.uid}_wrapper`,
            editEnabled: !1
          }, null, 8, ["widget"])
        ])
      ], 6))), 128))
    ]));
  }
}), Mp = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, hb = /* @__PURE__ */ Mp(db, [["__scopeId", "data-v-c7f1768a"]]);
function gb(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.map(function(n) {
    return n.split(" ").map(function(a) {
      return a ? "" + t + a : "";
    }).join(" ");
  }).join(" ");
}
function mb(t, e) {
  return e.replace(/([^}{]*){/gm, function(r, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function je(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function Rp(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function Ev(t, e) {
  return function(r) {
    var n = r.prototype;
    t.forEach(function(a) {
      e(n, a);
    });
  };
}
function _b(t, e) {
  return e === void 0 && (e = {}), function(r, n) {
    t.forEach(function(a) {
      var s = e[a] || a;
      s in r || (r[s] = function() {
        for (var u, f = [], c = 0; c < arguments.length; c++)
          f[c] = arguments[c];
        var v = (u = this[n])[a].apply(u, f);
        return v === this[n] ? this : v;
      });
    });
  };
}
var xb = "function", yb = "object", bb = "string", Sb = "number", ff = "undefined", Tp = typeof window !== ff, Cb = typeof document !== ff && document, wb = [{
  open: "(",
  close: ")"
}, {
  open: '"',
  close: '"'
}, {
  open: "'",
  close: "'"
}, {
  open: '\\"',
  close: '\\"'
}, {
  open: "\\'",
  close: "\\'"
}], yr = 1e-7, go = {
  cm: function(t) {
    return t * 96 / 2.54;
  },
  mm: function(t) {
    return t * 96 / 254;
  },
  in: function(t) {
    return t * 96;
  },
  pt: function(t) {
    return t * 96 / 72;
  },
  pc: function(t) {
    return t * 96 / 6;
  },
  "%": function(t, e) {
    return t * e / 100;
  },
  vw: function(t, e) {
    return e === void 0 && (e = window.innerWidth), t / 100 * e;
  },
  vh: function(t, e) {
    return e === void 0 && (e = window.innerHeight), t / 100 * e;
  },
  vmax: function(t, e) {
    return e === void 0 && (e = Math.max(window.innerWidth, window.innerHeight)), t / 100 * e;
  },
  vmin: function(t, e) {
    return e === void 0 && (e = Math.min(window.innerWidth, window.innerHeight)), t / 100 * e;
  }
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Eb() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function Bo(t, e, r, n) {
  return (t * n + e * r) / (r + n);
}
function ca(t) {
  return typeof t === ff;
}
function Te(t) {
  return t && typeof t === yb;
}
function br(t) {
  return Array.isArray(t);
}
function Jr(t) {
  return typeof t === bb;
}
function _i(t) {
  return typeof t === Sb;
}
function lf(t) {
  return typeof t === xb;
}
function Db(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function Op(t, e, r, n, a) {
  var s = cf(t, e, r);
  return s ? r : Mb(t, e, r + 1, n, a);
}
function cf(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function Mb(t, e, r, n, a) {
  for (var s = function(v) {
    var p = e[v].trim();
    if (p === t.close && !cf(t, e, v))
      return {
        value: v
      };
    var h = v, d = Qr(a, function(m) {
      var _ = m.open;
      return _ === p;
    });
    if (d && (h = Op(d, e, v, n, a)), h === -1)
      return u = v, "break";
    v = h, u = v;
  }, u, f = r; f < n; ++f) {
    var c = s(f);
    if (f = u, typeof c == "object") return c.value;
    if (c === "break") break;
  }
  return -1;
}
function vf(t, e) {
  var r = Jr(e) ? {
    separator: e
  } : e, n = r.separator, a = n === void 0 ? "," : n, s = r.isSeparateFirst, u = r.isSeparateOnlyOpenClose, f = r.isSeparateOpenClose, c = f === void 0 ? u : f, v = r.openCloseCharacters, p = v === void 0 ? wb : v, h = p.map(function(D) {
    var I = D.open, A = D.close;
    return I === A ? I : I + "|" + A;
  }).join("|"), d = "(\\s*" + a + "\\s*|" + h + "|\\s+)", m = new RegExp(d, "g"), _ = t.split(m).filter(function(D) {
    return D && D !== "undefined";
  }), x = _.length, y = [], S = [];
  function E() {
    return S.length ? (y.push(S.join("")), S = [], !0) : !1;
  }
  for (var R = function(D) {
    var I = _[D].trim(), A = D, B = Qr(p, function(G) {
      var Y = G.open;
      return Y === I;
    }), H = Qr(p, function(G) {
      var Y = G.close;
      return Y === I;
    });
    if (B) {
      if (A = Op(B, _, D, x, p), A !== -1 && c)
        return E() && s || (y.push(_.slice(D, A + 1).join("")), D = A, s) ? (O = D, "break") : (O = D, "continue");
    } else if (H && !cf(H, _, D)) {
      var W = Eb(p);
      return W.splice(p.indexOf(H), 1), {
        value: vf(t, {
          separator: a,
          isSeparateFirst: s,
          isSeparateOnlyOpenClose: u,
          isSeparateOpenClose: c,
          openCloseCharacters: W
        })
      };
    } else if (Db(I, a) && !u)
      return E(), s ? (O = D, "break") : (O = D, "continue");
    A === -1 && (A = x - 1), S.push(_.slice(D, A + 1).join("")), D = A, O = D;
  }, O, T = 0; T < x; ++T) {
    var C = R(T);
    if (T = O, typeof C == "object") return C.value;
    if (C === "break") break;
  }
  return S.length && y.push(S.join("")), y;
}
function Sn(t) {
  return vf(t, "");
}
function Hn(t) {
  return vf(t, ",");
}
function Ip(t) {
  var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !e || e.length < 4 ? {} : {
    prefix: e[1],
    value: e[2],
    suffix: e[3]
  };
}
function va(t) {
  var e = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);
  if (!e)
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  var r = e[1], n = e[2], a = e[3];
  return {
    prefix: r,
    unit: a,
    value: parseFloat(n)
  };
}
function Rb(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(e, r) {
    return r.toUpperCase();
  });
}
function Po(t, e) {
  return t.replace(/([a-z])([A-Z])/g, function(r, n, a) {
    return "" + n + e + a.toLowerCase();
  });
}
function aa() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function en(t, e, r) {
  r === void 0 && (r = -1);
  for (var n = t.length, a = 0; a < n; ++a)
    if (e(t[a], a, t))
      return a;
  return r;
}
function Qr(t, e, r) {
  var n = en(t, e);
  return n > -1 ? t[n] : r;
}
var Pp = /* @__PURE__ */ (function() {
  var t = aa(), e = Tp && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = aa(), a = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return a;
  };
})(), Tb = /* @__PURE__ */ (function() {
  var t = Tp && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
})();
function nn(t) {
  return Object.keys(t);
}
function Ob(t) {
  var e = nn(t);
  return e.map(function(r) {
    return t[r];
  });
}
function rr(t, e) {
  var r = va(t), n = r.value, a = r.unit;
  if (Te(e)) {
    var s = e[a];
    if (s) {
      if (lf(s))
        return s(n);
      if (go[a])
        return go[a](n, s);
    }
  } else if (a === "%")
    return n * e / 100;
  return go[a] ? go[a](n) : n;
}
function Bu(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
function Dv(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[Pt(e[0], yr), Pt(e[0] / n, yr)], [Pt(e[1] * n, yr), Pt(e[1], yr)]].filter(function(a) {
    return a.every(function(s, u) {
      var f = e[u], c = Pt(f, yr);
      return r ? s <= f || s <= c : s >= f || s >= c;
    });
  })[0] || t;
}
function Ap(t, e, r, n) {
  if (!n)
    return t.map(function(m, _) {
      return Bu(m, e[_], r[_]);
    });
  var a = t[0], s = t[1], u = n === !0 ? a / s : n, f = Dv(t, e, !1, u), c = f[0], v = f[1], p = Dv(t, r, !0, u), h = p[0], d = p[1];
  return a < c || s < v ? (a = c, s = v) : (a > h || s > d) && (a = h, s = d), [a, s];
}
function Ib(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return r;
}
function zu(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return e ? r / e : 0;
}
function _r(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function Pb(t) {
  return [0, 1].map(function(e) {
    return zu(t.map(function(r) {
      return r[e];
    }));
  });
}
function Mv(t) {
  var e = Pb(t), r = _r(e, t[0]), n = _r(e, t[1]);
  return r < n && n - r < Math.PI || r > n && n - r < -Math.PI ? 1 : -1;
}
function tn(t, e) {
  return Math.sqrt(Math.pow((e ? e[0] : 0) - t[0], 2) + Math.pow((e ? e[1] : 0) - t[1], 2));
}
function Pt(t, e) {
  if (!e)
    return t;
  var r = 1 / e;
  return Math.round(t / e) / r;
}
function Rv(t, e) {
  return t.forEach(function(r, n) {
    t[n] = Pt(t[n], e);
  }), t;
}
function Ab(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function Bp(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function zp(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Er(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function Gp(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function Fp(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else {
    var r = new RegExp("(\\s|^)" + e + "(\\s|$)");
    t.className = t.className.replace(r, " ");
  }
}
function Ir(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function wr(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
function Ei(t) {
  return t?.ownerDocument || Cb;
}
function pf(t) {
  return Ei(t).documentElement;
}
function En(t) {
  return Ei(t).body;
}
function bn(t) {
  var e;
  return ((e = t?.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView) || window;
}
function kp(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function Di(t) {
  return Te(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var Bb = /* @__PURE__ */ (function() {
  function t() {
    this.keys = [], this.values = [];
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.values[this.keys.indexOf(r)];
  }, e.set = function(r, n) {
    var a = this.keys, s = this.values, u = a.indexOf(r), f = u === -1 ? a.length : u;
    a[f] = r, s[f] = n;
  }, t;
})(), zb = /* @__PURE__ */ (function() {
  function t() {
    this.object = {};
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.object[r];
  }, e.set = function(r, n) {
    this.object[r] = n;
  }, t;
})(), Gb = typeof Map == "function", Fb = /* @__PURE__ */ (function() {
  function t() {
  }
  var e = t.prototype;
  return e.connect = function(r, n) {
    this.prev = r, this.next = n, r && (r.next = this), n && (n.prev = this);
  }, e.disconnect = function() {
    var r = this.prev, n = this.next;
    r && (r.next = n), n && (n.prev = r);
  }, e.getIndex = function() {
    for (var r = this, n = -1; r; )
      r = r.prev, ++n;
    return n;
  }, t;
})();
function kb(t, e) {
  var r = [], n = [];
  return t.forEach(function(a) {
    var s = a[0], u = a[1], f = new Fb();
    r[s] = f, n[u] = f;
  }), r.forEach(function(a, s) {
    a.connect(r[s - 1]);
  }), t.filter(function(a, s) {
    return !e[s];
  }).map(function(a, s) {
    var u = a[0], f = a[1];
    if (u === f)
      return [0, 0];
    var c = r[u], v = n[f - 1], p = c.getIndex();
    c.disconnect(), v ? c.connect(v, v.next) : c.connect(void 0, r[0]);
    var h = c.getIndex();
    return [p, h];
  });
}
var Lb = /* @__PURE__ */ (function() {
  function t(r, n, a, s, u, f, c, v) {
    this.prevList = r, this.list = n, this.added = a, this.removed = s, this.changed = u, this.maintained = f, this.changedBeforeAdded = c, this.fixed = v;
  }
  var e = t.prototype;
  return Object.defineProperty(e, "ordered", {
    get: function() {
      return this.cacheOrdered || this.caculateOrdered(), this.cacheOrdered;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e, "pureChanged", {
    get: function() {
      return this.cachePureChanged || this.caculateOrdered(), this.cachePureChanged;
    },
    enumerable: !0,
    configurable: !0
  }), e.caculateOrdered = function() {
    var r = kb(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = r.filter(function(s, u) {
      var f = s[0], c = s[1], v = n[u], p = v[0], h = v[1];
      if (f !== c)
        return a.push([p, h]), !0;
    }), this.cachePureChanged = a;
  }, t;
})();
function pa(t, e, r) {
  var n = Gb ? Map : r ? zb : Bb, a = r || function(E) {
    return E;
  }, s = [], u = [], f = [], c = t.map(a), v = e.map(a), p = new n(), h = new n(), d = [], m = [], _ = {}, x = [], y = 0, S = 0;
  return c.forEach(function(E, R) {
    p.set(E, R);
  }), v.forEach(function(E, R) {
    h.set(E, R);
  }), c.forEach(function(E, R) {
    var O = h.get(E);
    typeof O > "u" ? (++S, u.push(R)) : _[O] = S;
  }), v.forEach(function(E, R) {
    var O = p.get(E);
    typeof O > "u" ? (s.push(R), ++y) : (f.push([O, R]), S = _[R] || 0, d.push([O - S, R - y]), m.push(R === O), O !== R && x.push([O, R]));
  }), u.reverse(), new Lb(t, e, s, u, x, f, d, m);
}
var Wb = /* @__PURE__ */ (function() {
  function t(r, n) {
    r === void 0 && (r = []), this.findKeyCallback = n, this.list = [].slice.call(r);
  }
  var e = t.prototype;
  return e.update = function(r) {
    var n = [].slice.call(r), a = pa(this.list, n, this.findKeyCallback);
    return this.list = n, a;
  }, t;
})(), Gu = function(t, e) {
  return Gu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Gu(t, e);
};
function da(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Gu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Ge = function() {
  return Ge = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Ge.apply(this, arguments);
};
function Lp(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function Tv(t, e, r) {
  for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Ov(t) {
  var e = 0;
  return t.map(function(r) {
    return r == null ? "$compat".concat(++e) : "".concat(r);
  });
}
function Wp(t) {
  var e = [];
  return t.forEach(function(r) {
    e = e.concat(br(r) ? Wp(r) : r);
  }), e;
}
function _u(t, e) {
  if (!e)
    return t;
  for (var r in e)
    ca(t[r]) && (t[r] = e[r]);
  return t;
}
function zo(t, e) {
  if (t === e)
    return !1;
  for (var r in t)
    if (!(r in e))
      return !0;
  for (var r in e)
    if (t[r] !== e[r])
      return !0;
  return !1;
}
function Iv(t) {
  var e = t.className, r = Lp(t, ["className"]);
  return e != null && (r.class = e), delete r.style, delete r.children, r;
}
function Pv(t) {
  var e = {}, r = {};
  for (var n in t)
    n.indexOf("on") === 0 ? r[n] = t[n] : e[n] = t[n];
  return [e, r];
}
function $o(t) {
  if (!t)
    return null;
  var e = t.b;
  return Di(e) ? e : $o(t.c);
}
function Np(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Hp(t) {
  t.forEach(function(e) {
    e();
  });
}
function Nb() {
  return this.constructor(this.props, this.context);
}
var df = 0, Vo = /* @__PURE__ */ (function() {
  function t(r, n, a, s, u, f, c) {
    c === void 0 && (c = {}), this.t = r, this.d = n, this.k = a, this.i = s, this.c = u, this.ref = f, this.ps = c, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var e = t.prototype;
  return e.s = function() {
    return !0;
  }, e.u = function(r, n, a, s, u) {
    var f = this, c = f.d, v = Ob(n).filter(function(_) {
      return _.$_req;
    }), p = Wp(v.map(function(_) {
      return _.$_subs;
    })), h = Qr(p, function(_) {
      return _.d === c;
    });
    if (f.b && !Jr(a) && !u && !f.s(a.props, s) && !h) {
      var d = p.reduce(function(_, x) {
        var y = x.d;
        return _[0] ? _[0].d === y && _.push(x) : y > c && _.push(x), _;
      }, []);
      return d.forEach(function(_) {
        ha(_, _._ps, [_.o], r, n, !0);
      }), !1;
    }
    f.o = a, f.ss(s);
    var m = f.ps;
    return Jr(a) || (f.ps = a.props, f.ref = a.ref), hf(this), f.r(r, n, f.b ? m : {}, s), !0;
  }, e.md = function() {
    this.rr();
  }, e.ss = function() {
  }, e.ud = function() {
    this.rr();
  }, e.rr = function() {
    var r = this, n = r.ref, a = r.fr;
    n && n(a ? a.current : r.b);
  }, t;
})();
function Yp() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function Hb() {
  return df;
}
function Yb(t) {
  df = t;
}
function hf(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, df = 0, t;
}
var gf = /* @__PURE__ */ (function() {
  function t(r, n) {
    r === void 0 && (r = {}), this.props = r, this.context = n, this.state = {}, this.$_timer = 0, this.$_state = {}, this.$_subs = [], this.$_cs = {};
  }
  var e = t.prototype;
  return e.render = function() {
    return null;
  }, e.shouldComponentUpdate = function(r, n) {
    return this.props !== r || this.state !== n;
  }, e.setState = function(r, n, a) {
    var s = this;
    s.$_timer || (s.$_state = {}), clearTimeout(s.$_timer), s.$_timer = 0, s.$_state = Ge(Ge({}, s.$_state), r), a ? s.$_setState(n, a) : s.$_timer = window.setTimeout(function() {
      s.$_timer = 0, s.$_setState(n, a);
    });
  }, e.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, e.componentDidMount = function() {
  }, e.componentDidUpdate = function(r, n) {
  }, e.componentWillUnmount = function() {
  }, e.$_setState = function(r, n) {
    var a = [], s = this.$_p, u = ha(s.c, [s], [s.o], a, s._cs, Ge(Ge({}, this.state), this.$_state), n);
    u && (r && a.push(r), Hp(a), hf(null));
  }, t;
})(), Xp = /* @__PURE__ */ (function(t) {
  da(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.shouldComponentUpdate = function(n, a) {
    return zo(this.props, n) || zo(this.state, a);
  }, e;
})(gf);
function qp(t) {
  var e = function(r) {
    e.current = r;
  };
  return e.current = t, e;
}
function Xb(t) {
  return t._fr = !0, t;
}
function qb(t, e, r, n) {
  var a, s;
  return !((a = t?.prototype) === null || a === void 0) && a.render ? s = new t(e, r) : (s = new gf(e, r), s.constructor = t, t._fr ? (n.fr = qp(), s.render = function() {
    return this.constructor(this.props, n.fr);
  }) : s.render = Nb), s.$_p = n, s;
}
var Ub = /* @__PURE__ */ (function(t) {
  da(e, t);
  function e(n, a, s, u, f, c, v) {
    v === void 0 && (v = {});
    var p = t.call(this, n, a, s, u, f, c, _u(v, n.defaultProps)) || this;
    return p.typ = "comp", p._usefs = [], p._uefs = [], p._defs = [], p;
  }
  var r = e.prototype;
  return r.s = function(n, a) {
    var s = this.b;
    return s.shouldComponentUpdate(_u(n, this.t.defaultProps), a || s.state) !== !1;
  }, r.r = function(n, a, s) {
    var u, f, c = this, v = c.t;
    c.ps = _u(c.ps, c.t.defaultProps);
    var p = c.ps, h = !c.b, d = v.contextType, m = c.b, _ = d?.get(c);
    c._cs = a, h ? (m = qb(v, p, _, c), c.b = m) : (m.props = p, m.context = _);
    var x = m.state;
    c._usefs = [], c._uefs = [];
    var y = m.render();
    ((f = (u = y?.props) === null || u === void 0 ? void 0 : u.children) === null || f === void 0 ? void 0 : f.length) === 0 && (y.props.children = c.ps.children);
    var S = Ge(Ge({}, a), m.$_cs);
    ha(c, c._ps, y ? [y] : [], n, S), h ? c._uefs.push(function() {
      d?.register(c), m.componentDidMount();
    }) : c._uefs.push(function() {
      m.componentDidUpdate(s, x);
    }), n.push(function() {
      c._usefs.forEach(function(E) {
        E();
      }), h ? c.md() : c.ud(), c._defs = c._uefs.map(function(E) {
        return E();
      });
    });
  }, r.ss = function(n) {
    var a = this.b;
    !a || !n || (a.state = n);
  }, r.un = function() {
    var n, a = this;
    a._ps.forEach(function(u) {
      u.un();
    });
    var s = a.t;
    (n = s.contextType) === null || n === void 0 || n.unregister(a), clearTimeout(a.b.$_timer), a._defs.forEach(function(u) {
      u && u();
    }), a.b.componentWillUnmount();
  }, e;
})(Vo);
function $b(t, e, r) {
  var n = mf(Iv(t), Iv(e)), a = n.added, s = n.removed, u = n.changed;
  for (var f in a)
    r.setAttribute(f, a[f]);
  for (var c in u)
    r.setAttribute(c, u[c][1]);
  for (var v in s)
    r.removeAttribute(v);
}
function Vb(t, e, r) {
  var n = mf(t, e), a = n.added, s = n.removed;
  for (var u in s)
    r.e(u, !0);
  for (var f in a)
    r.e(f);
}
function mf(t, e) {
  var r = nn(t), n = nn(e), a = pa(r, n, function(c) {
    return c;
  }), s = {}, u = {}, f = {};
  return a.added.forEach(function(c) {
    var v = n[c];
    s[v] = e[v];
  }), a.removed.forEach(function(c) {
    var v = r[c];
    u[v] = t[v];
  }), a.maintained.forEach(function(c) {
    var v = c[0], p = r[v], h = [t[p], e[p]];
    t[p] !== e[p] && (f[p] = h);
  }), {
    added: s,
    removed: u,
    changed: f
  };
}
function Kb(t, e, r) {
  var n = r.style, a = mf(t, e), s = a.added, u = a.removed, f = a.changed;
  for (var c in s) {
    var v = Po(c, "-");
    n.setProperty(v, s[c]);
  }
  for (var c in f) {
    var p = Po(c, "-");
    n.setProperty(p, f[c][1]);
  }
  for (var c in u) {
    var h = Po(c, "-");
    n.removeProperty(h);
  }
}
function Zb(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var Jb = /* @__PURE__ */ (function(t) {
  da(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var r = e.prototype;
  return r.e = function(n, a) {
    var s = this, u = s._es, f = s.b, c = Zb(n);
    a ? (wr(f, c, u[n]), delete u[n]) : (u[n] = function(v) {
      var p, h;
      (h = (p = s.ps)[n]) === null || h === void 0 || h.call(p, v);
    }, Ir(f, c, u[n]));
  }, r.s = function(n) {
    return zo(this.ps, n);
  }, r.r = function(n, a, s) {
    var u, f = this, c = !f.b, v = f.ps;
    if (c) {
      var p = $o(f.c), h = !1;
      f._svg || f.t === "svg" ? h = !0 : h = p && p.ownerSVGElement, f._svg = h;
      var d = (u = f._hyd) === null || u === void 0 ? void 0 : u.splice(0, 1)[0], m = f.t;
      if (d)
        f._hyd = [].slice.call(d.children || []);
      else {
        var _ = Ei(p);
        h ? d = _.createElementNS("http://www.w3.org/2000/svg", m) : d = _.createElement(m);
      }
      f.b = d;
    }
    ha(f, f._ps, v.children, n, a);
    var x = f.b, y = Pv(s), S = y[0], E = y[1], R = Pv(v), O = R[0], T = R[1];
    return $b(S, O, x), Vb(E, T, f), Kb(s.style || {}, v.style || {}, x), n.push(function() {
      c ? f.md() : f.ud();
    }), !0;
  }, r.un = function() {
    var n = this, a = n._es, s = n.b;
    for (var u in a)
      wr(s, u, a[u]);
    n._ps.forEach(function(f) {
      f.un();
    }), n._es = {}, n._sel || Np(s);
  }, e;
})(Vo);
function oa(t) {
  if (!t || Di(t))
    return t;
  var e = t.$_p._ps;
  return e.length ? oa(e[0].b) : null;
}
function Up(t) {
  if (t) {
    if (t.b && Di(t.b))
      return t;
    var e = t._ps;
    return e.length ? Up(e[0]) : null;
  }
}
function Me(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = e || {}, s = a.key, u = a.ref, f = Lp(a, ["key", "ref"]);
  return {
    type: t,
    key: s,
    ref: u,
    props: Ge(Ge({}, f), {
      children: Bp(r).filter(function(c) {
        return c != null && c !== !1;
      })
    })
  };
}
var $p = /* @__PURE__ */ (function(t) {
  da(e, t);
  function e(n, a) {
    a === void 0 && (a = 0);
    var s = t.call(this, "container", a, "container", 0, null) || this;
    return s.typ = "container", s.b = n, s;
  }
  var r = e.prototype;
  return r.r = function() {
    return !0;
  }, r.un = function() {
  }, e;
})(Vo), Qb = /* @__PURE__ */ (function(t) {
  da(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var r = e.prototype;
  return r.r = function(n) {
    var a, s = this, u = !s.b;
    if (u) {
      var f = $o(s.c), c = (a = s._hyd) === null || a === void 0 ? void 0 : a.splice(0, 1)[0];
      s.b = c || Ei(f).createTextNode(s.t.replace("text_", ""));
    }
    return n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, r.un = function() {
    Np(this.b);
  }, e;
})(Vo);
function jb(t, e, r) {
  var n = r.map(function(c) {
    return Jr(c) ? null : c.key;
  }), a = Ov(e.map(function(c) {
    return c.k;
  })), s = Ov(n), u = pa(a, s, function(c) {
    return c;
  });
  u.removed.forEach(function(c) {
    e.splice(c, 1)[0].un();
  }), u.ordered.forEach(function(c) {
    var v = c[0], p = c[1], h = e.splice(v, 1)[0];
    e.splice(p, 0, h);
    var d = oa(h.b), m = oa(e[p + 1] && e[p + 1].b);
    d && d.parentNode.insertBefore(d, m);
  }), u.added.forEach(function(c) {
    e.splice(c, 0, Av(r[c], n[c], c, t));
  });
  var f = u.maintained.filter(function(c) {
    c[0];
    var v = c[1], p = r[v], h = e[v], d = Jr(p) ? "text_".concat(p) : p.type;
    return d !== h.t ? (h.un(), e.splice(v, 1, Av(p, n[v], v, t)), !0) : (h.i = v, !1);
  });
  return Tv(Tv([], u.added, !0), f.map(function(c) {
    c[0];
    var v = c[1];
    return v;
  }));
}
function tS(t, e) {
  for (var r = t._ps, n = r.length, a = e.i + 1; a < n; ++a) {
    var s = oa(r[a].b);
    if (s)
      return s;
  }
  return null;
}
function Av(t, e, r, n) {
  var a = n.d + 1;
  if (Jr(t) || _i(t))
    return new Qb("text_".concat(t), a, e, r, n, null, {});
  var s = t.type, u = typeof s == "string" ? Jb : Ub;
  return new u(s, a, e, r, n, t.ref, t.props);
}
function ha(t, e, r, n, a, s, u) {
  var f = jb(t, e, r), c = t._hyd, v = e.filter(function(h, d) {
    return h._hyd = c, h.u(n, a, r[d], s, u);
  });
  t.typ === "container" && t._sel && e.forEach(function(h) {
    var d = Up(h);
    d && (d._sel = !0);
  }), t._hyd = null;
  var p = $o(t);
  return p && f.reverse().forEach(function(h) {
    var d = e[h], m = oa(d.b);
    if (m && p !== m && !m.parentNode) {
      var _ = tS(t, d);
      p.insertBefore(m, _);
    }
  }), v.length > 0;
}
function rS(t, e, r, n) {
  r === void 0 && (r = e.__CROACT__), n === void 0 && (n = {});
  var a = !!r;
  r || (r = new $p(e));
  var s = [];
  return ha(r, r._ps, t ? [t] : [], s, n, void 0, void 0), Hp(s), hf(null), a || (e.__CROACT__ = r), r;
}
function Bv(t, e, r) {
  return !r && t && (r = new $p(e.parentElement), r._hyd = [e], r._sel = !0), rS(t, e, r), r;
}
function Vp(t) {
  var e = Yp(), r = e._hs || (e._hs = []), n = Hb(), a = r[n];
  if (Yb(n + 1), a) {
    if (!zo(a.deps, t.deps))
      return a.updated = !1, a;
    r[n] = t;
  } else
    r.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function eS(t, e) {
  var r = Vp({
    func: t,
    deps: e
  });
  return r.value;
}
function nS(t) {
  return eS(function() {
    return qp(t);
  }, []);
}
function Kp(t, e, r) {
  var n = Yp(), a = Vp({
    func: function() {
      return t;
    },
    deps: e
  }), s = r ? n._usefs : n._uefs;
  a.updated ? s.push(function() {
    return a.effect && a.effect(), a.effect = t(), a.effect;
  }) : s.push(function() {
    return a.effect;
  });
}
function iS(t, e, r) {
  Kp(function() {
    t?.(e());
  }, r, !0);
}
function _f(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function Zp(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function Jp(t) {
  var e = t;
  if (typeof e > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    e = navigator.userAgent || "";
  }
  return e.toLowerCase();
}
function xf(t, e) {
  try {
    return new RegExp(t, "g").exec(e);
  } catch {
    return null;
  }
}
function aS() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, e = t.brands || t.uaList;
  return !!(e && e.length);
}
function oS(t, e) {
  var r = xf("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function Fu(t) {
  return t.replace(/_/g, ".");
}
function Zi(t, e) {
  var r = null, n = "-1";
  return _f(t, function(a) {
    var s = xf("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !s || a.brand ? !1 : (r = a, n = s[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = oS(a.versionTest.toLowerCase(), e) || n), n = Fu(n), !0);
  }), {
    preset: r,
    version: n
  };
}
function mo(t, e) {
  var r = {
    brand: "",
    version: "-1"
  };
  return _f(t, function(n) {
    var a = Qp(e, n);
    return a ? (r.brand = n.id, r.version = n.versionAlias || a.version, r.version !== "-1") : !1;
  }), r;
}
function Qp(t, e) {
  return Zp(t, function(r) {
    var n = r.brand;
    return xf("" + e.test, n.toLowerCase());
  });
}
var jp = [{
  test: "phantomjs",
  id: "phantomjs"
}, {
  test: "whale",
  id: "whale"
}, {
  test: "edgios|edge|edg",
  id: "edge"
}, {
  test: "msie|trident|windows phone",
  id: "ie",
  versionTest: "iemobile|msie|rv"
}, {
  test: "miuibrowser",
  id: "miui browser"
}, {
  test: "samsungbrowser",
  id: "samsung internet"
}, {
  test: "samsung",
  id: "samsung internet",
  versionTest: "version"
}, {
  test: "chrome|crios",
  id: "chrome"
}, {
  test: "firefox|fxios",
  id: "firefox"
}, {
  test: "android",
  id: "android browser",
  versionTest: "version"
}, {
  test: "safari|iphone|ipad|ipod",
  id: "safari",
  versionTest: "version"
}], td = [{
  test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
  id: "chrome",
  versionTest: "chrome"
}, {
  test: "chromium",
  id: "chrome"
}, {
  test: "whale",
  id: "chrome",
  versionAlias: "-1",
  brand: !0
}], ku = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], rd = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], ed = [{
  test: "windows phone",
  id: "windows phone"
}, {
  test: "windows 2000",
  id: "window",
  versionAlias: "5.0"
}, {
  test: "windows nt",
  id: "window"
}, {
  test: "win32|windows",
  id: "window"
}, {
  test: "iphone|ipad|ipod",
  id: "ios",
  versionTest: "iphone os|cpu os"
}, {
  test: "macos|macintel|mac os x",
  id: "mac"
}, {
  test: "android|linux armv81",
  id: "android"
}, {
  test: "tizen",
  id: "tizen"
}, {
  test: "webos|web0s",
  id: "webos"
}];
function nd(t) {
  return !!Zi(rd, t).preset;
}
function sS(t) {
  var e = Jp(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: nd(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, s = Zi(jp, e), u = s.preset, f = s.version, c = Zi(ed, e), v = c.preset, p = c.version, h = Zi(td, e);
  if (n.chromium = !!h.preset, n.chromiumVersion = h.version, !n.chromium) {
    var d = Zi(ku, e);
    n.webkit = !!d.preset, n.webkitVersion = d.version;
  }
  return v && (a.name = v.id, a.version = p, a.majorVersion = parseInt(p, 10)), u && (n.name = u.id, n.version = f, n.webview && a.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: a,
    isMobile: r,
    isHints: !1
  };
}
function uS(t) {
  var e = navigator.userAgentData, r = (e.uaList || e.brands).slice(), n = e.mobile || !1, a = r[0], s = (e.platform || navigator.platform).toLowerCase(), u = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!mo(rd, r).brand || nd(Jp())
  }, f = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  u.webkit = !u.chromium && _f(ku, function(d) {
    return Qp(r, d);
  });
  var c = mo(td, r);
  if (u.chromium = !!c.brand, u.chromiumVersion = c.version || "-1", !u.chromium) {
    var v = mo(ku, r);
    u.webkit = !!v.brand, u.webkitVersion = v.version || "-1";
  }
  var p = Zp(ed, function(d) {
    return new RegExp("" + d.test, "g").exec(s);
  });
  f.name = p ? p.id : "";
  {
    var h = mo(jp, r);
    u.name = h.brand || u.name, u.version = h.brand && t ? t.uaFullVersion : h.version;
  }
  return u.webkit && (f.name = n ? "ios" : "mac"), f.name === "ios" && u.webview && (u.version = "-1"), f.version = Fu(f.version), u.version = Fu(u.version), f.majorVersion = parseInt(f.version, 10), u.majorVersion = parseInt(u.version, 10), {
    browser: u,
    os: f,
    isMobile: n,
    isHints: !0
  };
}
function fS(t) {
  return aS() ? uS() : sS(t);
}
function lS(t, e, r, n, a, s) {
  for (var u = 0; u < a; ++u) {
    var f = r + u * a, c = n + u * a;
    t[f] += t[c] * s, e[f] += e[c] * s;
  }
}
function cS(t, e, r, n, a) {
  for (var s = 0; s < a; ++s) {
    var u = r + s * a, f = n + s * a, c = t[u], v = e[u];
    t[u] = t[f], t[f] = c, e[u] = e[f], e[f] = v;
  }
}
function vS(t, e, r, n, a) {
  for (var s = 0; s < n; ++s) {
    var u = r + s * n;
    t[u] /= a, e[u] /= a;
  }
}
function id(t, e, r) {
  for (var n = t.slice(), a = 0; a < r; ++a)
    n[a * r + e - 1] = 0, n[(e - 1) * r + a] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function ke(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = sr(e), a = 0; a < e; ++a) {
    var s = e * a + a;
    if (!Pt(r[s], yr)) {
      for (var u = a + 1; u < e; ++u)
        if (r[e * a + u]) {
          cS(r, n, a, u, e);
          break;
        }
    }
    if (!Pt(r[s], yr))
      return [];
    vS(r, n, a, e, r[s]);
    for (var u = 0; u < e; ++u) {
      var f = u, c = u + a * e, v = r[c];
      !Pt(v, yr) || a === u || lS(r, n, f, a, e, -v);
    }
  }
  return n;
}
function pS(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = 0; n < e; ++n)
    for (var a = 0; a < e; ++a)
      r[a * e + n] = t[e * n + a];
  return r;
}
function ad(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = t[e * e - 1], a = 0; a < e - 1; ++a)
    r[a] = t[e * (e - 1) + a] / n;
  return r[e - 1] = 0, r;
}
function dS(t, e) {
  for (var r = sr(e), n = 0; n < e - 1; ++n)
    r[e * (e - 1) + n] = t[n] || 0;
  return r;
}
function Yn(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function Oe(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = sr(r), a = Math.min(e, r), s = 0; s < a - 1; ++s) {
    for (var u = 0; u < a - 1; ++u)
      n[s * r + u] = t[s * e + u];
    n[(s + 1) * r - 1] = t[(s + 1) * e - 1], n[(r - 1) * r + s] = t[(e - 1) * e + s];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function Go(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = sr(t);
  return e.forEach(function(a) {
    n = er(n, a, t);
  }), n;
}
function er(t, e, r) {
  r === void 0 && (r = Math.sqrt(t.length));
  var n = [], a = t.length / r, s = e.length / a;
  if (a) {
    if (!s)
      return t;
  } else return e;
  for (var u = 0; u < r; ++u)
    for (var f = 0; f < s; ++f) {
      n[f * r + u] = 0;
      for (var c = 0; c < a; ++c)
        n[f * r + u] += t[c * r + u] * e[f * a + c];
    }
  return n;
}
function Ut(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] + e[a];
  return n;
}
function wt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] - e[a];
  return n;
}
function hS(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function od(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Fr(t, e, r) {
  r === void 0 && (r = e.length);
  var n = er(t, e, r), a = n[r - 1];
  return n.map(function(s) {
    return s / a;
  });
}
function gS(t, e) {
  return er(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function mS(t, e) {
  return er(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function _S(t, e) {
  return er(t, ma(e, 4));
}
function _o(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, a = e[1], s = a === void 0 ? 1 : a, u = e[2], f = u === void 0 ? 1 : u;
  return er(t, [n, 0, 0, 0, 0, s, 0, 0, 0, 0, f, 0, 0, 0, 0, 1], 4);
}
function ga(t, e) {
  return Fr(ma(e, 3), Yn(t, 3));
}
function xu(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, a = e[1], s = a === void 0 ? 0 : a, u = e[2], f = u === void 0 ? 0 : u;
  return er(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, s, f, 1], 4);
}
function zv(t, e) {
  return er(t, e, 4);
}
function ma(t, e) {
  var r = Math.cos(t), n = Math.sin(t), a = sr(e);
  return a[0] = r, a[1] = n, a[e] = -n, a[e + 1] = r, a;
}
function sr(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function yf(t, e) {
  for (var r = sr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[(e + 1) * a] = t[a];
  return r;
}
function Xn(t, e) {
  for (var r = sr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[e * (e - 1) + a] = t[a];
  return r;
}
function bf(t, e, r, n, a, s, u, f) {
  var c = t[0], v = t[1], p = e[0], h = e[1], d = r[0], m = r[1], _ = n[0], x = n[1], y = a[0], S = a[1], E = s[0], R = s[1], O = u[0], T = u[1], C = f[0], D = f[1], I = [c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, -y * c, -S * c, -E * p, -R * p, -O * d, -T * d, -C * _, -D * _, -y * v, -S * v, -E * h, -R * h, -O * m, -T * m, -C * x, -D * x], A = ke(I, 8);
  if (!A.length)
    return [];
  var B = er(A, [y, S, E, R, O, T, C, D], 8);
  return B[8] = 1, Oe(pS(B), 3, 4);
}
var ji = function() {
  return ji = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ji.apply(this, arguments);
};
function xS() {
  return [
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1
  ];
}
function sa(t, e) {
  return e === void 0 && (e = 0), ci(xi(t, e));
}
function yS(t, e) {
  var r = Fr(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function ci(t) {
  var e = xS();
  return t.forEach(function(r) {
    var n = r.matrixFunction, a = r.functionValue;
    n && (e = n(e, a));
  }), e;
}
function xi(t, e) {
  e === void 0 && (e = 0);
  var r = br(t) ? t : Sn(t);
  return r.map(function(n) {
    var a = Ip(n), s = a.prefix, u = a.value, f = null, c = s, v = "";
    if (s === "translate" || s === "translateX" || s === "translate3d") {
      var p = Te(e) ? ji(ji({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, h = Hn(u).map(function(G, Y) {
        return Y === 0 && "x%" in p ? p["%"] = e["x%"] : Y === 1 && "y%" in p ? p["%"] = e["y%"] : p["%"] = e["o%"], rr(G, p);
      }), d = h[0], m = h[1], _ = m === void 0 ? 0 : m, x = h[2], y = x === void 0 ? 0 : x;
      f = xu, v = [d, _, y];
    } else if (s === "translateY") {
      var S = Te(e) ? ji({ "%": e["y%"] }, e) : {
        "%": e
      }, _ = rr(u, S);
      f = xu, v = [0, _, 0];
    } else if (s === "translateZ") {
      var y = parseFloat(u);
      f = xu, v = [0, 0, y];
    } else if (s === "scale" || s === "scale3d") {
      var E = Hn(u).map(function(G) {
        return parseFloat(G);
      }), R = E[0], O = E[1], T = O === void 0 ? R : O, C = E[2], D = C === void 0 ? 1 : C;
      f = _o, v = [R, T, D];
    } else if (s === "scaleX") {
      var R = parseFloat(u);
      f = _o, v = [R, 1, 1];
    } else if (s === "scaleY") {
      var T = parseFloat(u);
      f = _o, v = [1, T, 1];
    } else if (s === "scaleZ") {
      var D = parseFloat(u);
      f = _o, v = [1, 1, D];
    } else if (s === "rotate" || s === "rotateZ" || s === "rotateX" || s === "rotateY") {
      var I = va(u), A = I.unit, B = I.value, H = A === "rad" ? B : B * Math.PI / 180;
      s === "rotate" || s === "rotateZ" ? (c = "rotateZ", f = _S) : s === "rotateX" ? f = gS : s === "rotateY" && (f = mS), v = H;
    } else if (s === "matrix3d")
      f = zv, v = Hn(u).map(function(G) {
        return parseFloat(G);
      });
    else if (s === "matrix") {
      var W = Hn(u).map(function(G) {
        return parseFloat(G);
      });
      f = zv, v = [
        W[0],
        W[1],
        0,
        0,
        W[2],
        W[3],
        0,
        0,
        0,
        0,
        1,
        0,
        W[4],
        W[5],
        0,
        1
      ];
    } else
      c = "";
    return {
      name: s,
      functionName: c,
      value: u,
      matrixFunction: f,
      functionValue: v
    };
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
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
var Lu = function(t, e) {
  return Lu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Lu(t, e);
};
function bS(t, e) {
  Lu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var sd = typeof Map == "function" ? void 0 : /* @__PURE__ */ (function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
})(), ud = /* @__PURE__ */ (function(t) {
  bS(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, sd) || this;
  }
  return e;
})(Wb);
function SS(t, e) {
  return pa(t, e, sd);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Wu = function() {
  return Wu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Wu.apply(this, arguments);
};
function CS() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
var Ko = /* @__PURE__ */ (function() {
  function t() {
    this._events = {};
  }
  var e = t.prototype;
  return e.on = function(r, n) {
    if (Te(r))
      for (var a in r)
        this.on(a, r[a]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if (Te(r))
      for (var a in r)
        this.off(a);
    else if (!n)
      this._events[r] = [];
    else {
      var s = this._events[r];
      if (s) {
        var u = en(s, function(f) {
          return f.listener === n;
        });
        u > -1 && s.splice(u, 1);
      }
    }
    return this;
  }, e.once = function(r, n) {
    var a = this;
    return n && this._addEvent(r, n, {
      once: !0
    }), new Promise(function(s) {
      a._addEvent(r, s, {
        once: !0
      });
    });
  }, e.emit = function(r, n) {
    var a = this;
    n === void 0 && (n = {});
    var s = this._events[r];
    if (!r || !s)
      return !0;
    var u = !1;
    return n.eventType = r, n.stop = function() {
      u = !0;
    }, n.currentTarget = this, CS(s).forEach(function(f) {
      f.listener(n), f.once && a.off(r, f.listener);
    }), !u;
  }, e.trigger = function(r, n) {
    return n === void 0 && (n = {}), this.emit(r, n);
  }, e._addEvent = function(r, n, a) {
    var s = this._events;
    s[r] = s[r] || [];
    var u = s[r];
    u.push(Wu({
      listener: n
    }, a));
  }, t;
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Nu = function(t, e) {
  return Nu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Nu(t, e);
};
function wS(t, e) {
  Nu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var vi = function() {
  return vi = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, vi.apply(this, arguments);
};
function ES(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function Gv(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function xo(t) {
  if (t) {
    if (Jr(t))
      return document.querySelector(t);
  } else return null;
  if (lf(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var DS = /* @__PURE__ */ (function(t) {
  wS(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n._startRect = null, n._startPos = [], n._prevTime = 0, n._timer = 0, n._prevScrollPos = [0, 0], n._isWait = !1, n._flag = !1, n._currentOptions = null, n._lock = !1, n._unregister = null, n._onScroll = function() {
      var a = n._currentOptions;
      n._lock || !a || n.emit("scrollDrag", {
        next: function(s) {
          n.checkScroll({
            container: a.container,
            inputEvent: s
          });
        }
      });
    }, n;
  }
  var r = e.prototype;
  return r.dragStart = function(n, a) {
    var s = xo(a.container);
    if (!s) {
      this._flag = !1;
      return;
    }
    var u = 0, f = 0, c = 0, v = 0;
    if (s === document.body)
      c = window.innerWidth, v = window.innerHeight;
    else {
      var p = s.getBoundingClientRect();
      u = p.top, f = p.left, c = p.width, v = p.height;
    }
    this._flag = !0, this._startPos = [n.clientX, n.clientY], this._startRect = {
      top: u,
      left: f,
      width: c,
      height: v
    }, this._prevScrollPos = this._getScrollPosition([0, 0], a), this._currentOptions = a, this._registerScrollEvent(a);
  }, r.drag = function(n, a) {
    if (clearTimeout(this._timer), !!this._flag) {
      var s = n.clientX, u = n.clientY, f = a.threshold, c = f === void 0 ? 0 : f, v = this, p = v._startRect, h = v._startPos;
      this._currentOptions = a;
      var d = [0, 0];
      return p.top > u - c ? (h[1] > p.top || u < h[1]) && (d[1] = -1) : p.top + p.height < u + c && (h[1] < p.top + p.height || u > h[1]) && (d[1] = 1), p.left > s - c ? (h[0] > p.left || s < h[0]) && (d[0] = -1) : p.left + p.width < s + c && (h[0] < p.left + p.width || s > h[0]) && (d[0] = 1), !d[0] && !d[1] ? !1 : this._continueDrag(vi(vi({}, a), {
        direction: d,
        inputEvent: n,
        isDrag: !0
      }));
    }
  }, r.checkScroll = function(n) {
    var a = this;
    if (this._isWait)
      return !1;
    var s = n.prevScrollPos, u = s === void 0 ? this._prevScrollPos : s, f = n.direction, c = n.throttleTime, v = c === void 0 ? 0 : c, p = n.inputEvent, h = n.isDrag, d = this._getScrollPosition(f || [0, 0], n), m = d[0] - u[0], _ = d[1] - u[1], x = f || [m ? Math.abs(m) / m : 0, _ ? Math.abs(_) / _ : 0];
    return this._prevScrollPos = d, this._lock = !1, !m && !_ ? !1 : (this.emit("move", {
      offsetX: x[0] ? m : 0,
      offsetY: x[1] ? _ : 0,
      inputEvent: p
    }), v && h && (clearTimeout(this._timer), this._timer = window.setTimeout(function() {
      a._continueDrag(n);
    }, v)), !0);
  }, r.dragEnd = function() {
    this._flag = !1, this._lock = !1, clearTimeout(this._timer), this._unregisterScrollEvent();
  }, r._getScrollPosition = function(n, a) {
    var s = a.container, u = a.getScrollPosition, f = u === void 0 ? ES : u;
    return f({
      container: xo(s),
      direction: n
    });
  }, r._continueDrag = function(n) {
    var a = this, s, u = n.container, f = n.direction, c = n.throttleTime, v = n.useScroll, p = n.isDrag, h = n.inputEvent;
    if (!(!this._flag || p && this._isWait)) {
      var d = aa(), m = Math.max(c + this._prevTime - d, 0);
      if (m > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          a._continueDrag(n);
        }, m), !1;
      this._prevTime = d;
      var _ = this._getScrollPosition(f, n);
      this._prevScrollPos = _, p && (this._isWait = !0), v || (this._lock = !0);
      var x = {
        container: xo(u),
        direction: f,
        inputEvent: h
      };
      return (s = n.requestScroll) === null || s === void 0 || s.call(n, x), this.emit("scroll", x), this._isWait = !1, v || this.checkScroll(vi(vi({}, n), {
        prevScrollPos: _,
        direction: f,
        inputEvent: h
      }));
    }
  }, r._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var a = n.checkScrollEvent;
    if (a) {
      var s = a === !0 ? Gv : a, u = xo(n.container);
      a === !0 && (u === document.body || u === document.documentElement) ? this._unregister = Gv(window, this._onScroll) : this._unregister = s(u, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, e;
})(Ko);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function MS() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function Zr(t) {
  return Pt(t, yr);
}
function RS(t, e) {
  return t.every(function(r, n) {
    return Zr(r - e[n]) === 0;
  });
}
function TS(t, e) {
  return !Zr(t[0] - e[0]) && !Zr(t[1] - e[1]);
}
function fd(t) {
  return t.length < 3 ? 0 : Math.abs(Ib(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function Fv(t, e) {
  var r = e.width, n = e.height, a = e.left, s = e.top, u = qn(t), f = u.minX, c = u.minY, v = u.maxX, p = u.maxY, h = r / (v - f), d = n / (p - c);
  return t.map(function(m) {
    return [a + (m[0] - f) * h, s + (m[1] - c) * d];
  });
}
function qn(t) {
  var e = t.map(function(n) {
    return n[0];
  }), r = t.map(function(n) {
    return n[1];
  });
  return {
    minX: Math.min.apply(Math, e),
    minY: Math.min.apply(Math, r),
    maxX: Math.max.apply(Math, e),
    maxY: Math.max.apply(Math, r)
  };
}
function Hu(t, e, r) {
  var n = t[0], a = t[1], s = qn(e), u = s.minX, f = s.maxX, c = [[u, a], [f, a]], v = Fo(c[0], c[1]), p = Yu(e), h = [];
  if (p.forEach(function(_) {
    var x = Fo(_[0], _[1]), y = _[0];
    if (RS(v, x))
      h.push({
        pos: t,
        line: _,
        type: "line"
      });
    else {
      var S = ld(Sf(v, x), [c, _]);
      S.forEach(function(E) {
        _.some(function(R) {
          return TS(R, E);
        }) ? h.push({
          pos: E,
          line: _,
          type: "point"
        }) : Zr(y[1] - a) !== 0 && h.push({
          pos: E,
          line: _,
          type: "intersection"
        });
      });
    }
  }), Qr(h, function(_) {
    return _[0] === n;
  }))
    return !0;
  var d = 0, m = {};
  return h.forEach(function(_) {
    var x = _.pos, y = _.type, S = _.line;
    if (!(x[0] > n))
      if (y === "intersection")
        ++d;
      else {
        if (y === "line")
          return;
        if (y === "point") {
          var E = Qr(S, function(T) {
            return T[1] !== a;
          }), R = m[x[0]], O = E[1] > a ? 1 : -1;
          R ? R !== O && ++d : m[x[0]] = O;
        }
      }
  }), d % 2 === 1;
}
function Fo(t, e) {
  var r = t[0], n = t[1], a = e[0], s = e[1], u = a - r, f = s - n;
  Math.abs(u) < yr && (u = 0), Math.abs(f) < yr && (f = 0);
  var c = 0, v = 0, p = 0;
  return u ? f ? (c = -f / u, v = 1, p = -c * r - n) : (v = 1, p = -n) : f && (c = -1, p = r), [c, v, p];
}
function Sf(t, e) {
  var r = t[0], n = t[1], a = t[2], s = e[0], u = e[1], f = e[2], c = r === 0 && s === 0, v = n === 0 && u === 0, p = [];
  if (c && v)
    return [];
  if (c) {
    var h = -a / n, d = -f / u;
    return h !== d ? [] : [[-1 / 0, h], [1 / 0, h]];
  } else if (v) {
    var m = -a / r, _ = -f / s;
    return m !== _ ? [] : [[m, -1 / 0], [m, 1 / 0]];
  } else if (r === 0) {
    var x = -a / n, y = -(u * x + f) / s;
    p = [[y, x]];
  } else if (s === 0) {
    var x = -f / u, y = -(n * x + a) / r;
    p = [[y, x]];
  } else if (n === 0) {
    var y = -a / r, x = -(s * y + f) / u;
    p = [[y, x]];
  } else if (u === 0) {
    var y = -f / s, x = -(r * y + a) / n;
    p = [[y, x]];
  } else {
    var y = (n * f - u * a) / (u * r - n * s), x = -(r * y + a) / n;
    p = [[y, x]];
  }
  return p.map(function(S) {
    return [S[0], S[1]];
  });
}
function ld(t, e) {
  var r = e.map(function(h) {
    return [0, 1].map(function(d) {
      return [Math.min(h[0][d], h[1][d]), Math.max(h[0][d], h[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], s = a[0], u = a[1];
    if (Zr(s - t[1][0])) {
      if (!Zr(u - t[1][1])) {
        var v = Math.max.apply(Math, r.map(function(h) {
          return h[0][0];
        })), p = Math.min.apply(Math, r.map(function(h) {
          return h[0][1];
        }));
        if (Zr(v - p) > 0)
          return [];
        n = [[v, u], [p, u]];
      }
    } else {
      var f = Math.max.apply(Math, r.map(function(h) {
        return h[1][0];
      })), c = Math.min.apply(Math, r.map(function(h) {
        return h[1][1];
      }));
      if (Zr(f - c) > 0)
        return [];
      n = [[s, f], [s, c]];
    }
  }
  return n.length || (n = t.filter(function(h) {
    var d = h[0], m = h[1];
    return r.every(function(_) {
      return 0 <= Zr(d - _[0][0]) && 0 <= Zr(_[0][1] - d) && 0 <= Zr(m - _[1][0]) && 0 <= Zr(_[1][1] - m);
    });
  })), n.map(function(h) {
    return [Zr(h[0]), Zr(h[1])];
  });
}
function Yu(t) {
  return MS(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function OS(t, e) {
  var r = t.slice(), n = e.slice();
  Mv(r) === -1 && r.reverse(), Mv(n) === -1 && n.reverse();
  var a = Yu(r), s = Yu(n), u = a.map(function(p) {
    return Fo(p[0], p[1]);
  }), f = s.map(function(p) {
    return Fo(p[0], p[1]);
  }), c = [];
  u.forEach(function(p, h) {
    var d = a[h], m = [];
    f.forEach(function(_, x) {
      var y = Sf(p, _), S = ld(y, [d, s[x]]);
      m.push.apply(m, S.map(function(E) {
        return {
          index1: h,
          index2: x,
          pos: E,
          type: "intersection"
        };
      }));
    }), m.sort(function(_, x) {
      return tn(d[0], _.pos) - tn(d[0], x.pos);
    }), c.push.apply(c, m), Hu(d[1], n) && c.push({
      index1: h,
      index2: -1,
      pos: d[1],
      type: "inside"
    });
  }), s.forEach(function(p, h) {
    if (Hu(p[1], r)) {
      var d = !1, m = en(c, function(_) {
        var x = _.index2;
        return x === h ? (d = !0, !1) : !!d;
      });
      m === -1 && (d = !1, m = en(c, function(_) {
        var x = _.index1, y = _.index2;
        return x === -1 && y + 1 === h ? (d = !0, !1) : !!d;
      })), m === -1 ? c.push({
        index1: -1,
        index2: h,
        pos: p[1],
        type: "inside"
      }) : c.splice(m, 0, {
        index1: -1,
        index2: h,
        pos: p[1],
        type: "inside"
      });
    }
  });
  var v = {};
  return c.filter(function(p) {
    var h = p.pos, d = h[0] + "x" + h[1];
    return v[d] ? !1 : (v[d] = !0, !0);
  });
}
function IS(t, e) {
  var r = OS(t, e);
  return r.map(function(n) {
    var a = n.pos;
    return a;
  });
}
function PS(t, e) {
  var r = IS(t, e);
  return fd(r);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Xu = function(t, e) {
  return Xu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Xu(t, e);
};
function AS(t, e) {
  Xu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var xr = function() {
  return xr = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, xr.apply(this, arguments);
};
function BS(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function yu(t) {
  return BS([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function zS(t) {
  return t.touches && t.touches.length >= 2;
}
function yo(t) {
  return t ? t.touches ? FS(t.touches) : [cd(t)] : [];
}
function GS(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function kv(t, e, r) {
  var n = r.length, a = ta(t, n), s = a.clientX, u = a.clientY, f = a.originalClientX, c = a.originalClientY, v = ta(e, n), p = v.clientX, h = v.clientY, d = ta(r, n), m = d.clientX, _ = d.clientY, x = s - p, y = u - h, S = s - m, E = u - _;
  return {
    clientX: f,
    clientY: c,
    deltaX: x,
    deltaY: y,
    distX: S,
    distY: E
  };
}
function bu(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function FS(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(cd(t[n]));
  return r;
}
function cd(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function ta(t, e) {
  e === void 0 && (e = t.length);
  for (var r = {
    clientX: 0,
    clientY: 0,
    originalClientX: 0,
    originalClientY: 0
  }, n = Math.min(t.length, e), a = 0; a < n; ++a) {
    var s = t[a];
    r.originalClientX += "originalClientX" in s ? s.originalClientX : s.clientX, r.originalClientY += "originalClientY" in s ? s.originalClientY : s.clientY, r.clientX += s.clientX, r.clientY += s.clientY;
  }
  return e ? {
    clientX: r.clientX / e,
    clientY: r.clientY / e,
    originalClientX: r.originalClientX / e,
    originalClientY: r.originalClientY / e
  } : r;
}
var Su = /* @__PURE__ */ (function() {
  function t(e) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = e, this.prevClients = e, this.length = e.length;
  }
  return t.prototype.getAngle = function(e) {
    return e === void 0 && (e = this.prevClients), yu(e);
  }, t.prototype.getRotation = function(e) {
    return e === void 0 && (e = this.prevClients), yu(e) - yu(this.startClients);
  }, t.prototype.getPosition = function(e, r) {
    e === void 0 && (e = this.prevClients);
    var n = kv(e || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, s = n.deltaY;
    return this.movement += Math.sqrt(a * a + s * s), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, a = Math.min(this.length, r.length), s = [], u = 0; u < a; ++u)
      s[u] = kv([e[u]], [r[u]], [n[u]]);
    return s;
  }, t.prototype.getMovement = function(e) {
    var r = this.movement;
    if (!e)
      return r;
    var n = ta(e, this.length), a = ta(this.prevClients, this.length), s = n.clientX - a.clientX, u = n.clientY - a.clientY;
    return Math.sqrt(s * s + u * u) + r;
  }, t.prototype.getDistance = function(e) {
    return e === void 0 && (e = this.prevClients), bu(e);
  }, t.prototype.getScale = function(e) {
    return e === void 0 && (e = this.prevClients), bu(e) / bu(this.startClients);
  }, t.prototype.move = function(e, r) {
    this.startClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    });
  }, t;
})(), Lv = ["textarea", "input"], kS = /* @__PURE__ */ (function(t) {
  AS(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(d, m) {
      if (m === void 0 && (m = !0), !(!a.flag && d.cancelable === !1)) {
        var _ = d.type.indexOf("drag") >= -1;
        if (!(a.flag && _)) {
          a._isDragAPI = !0;
          var x = a.options, y = x.container, S = x.pinchOutside, E = x.preventWheelClick, R = x.preventRightClick, O = x.preventDefault, T = x.checkInput, C = x.dragFocusedInput, D = x.preventClickEventOnDragStart, I = x.preventClickEventOnDrag, A = x.preventClickEventByCondition, B = a._useTouch, H = !a.flag;
          if (a._isSecondaryButton = d.which === 3 || d.button === 2, E && (d.which === 2 || d.button === 1) || R && (d.which === 3 || d.button === 2))
            return a.stop(), !1;
          if (H) {
            var W = a._window.document.activeElement, G = d.target;
            if (G) {
              var Y = G.tagName.toLowerCase(), X = Lv.indexOf(Y) > -1, rt = G.isContentEditable;
              if (X || rt) {
                if (T || !C && W === G)
                  return !1;
                if (W && (W === G || rt && W.isContentEditable && W.contains(G)))
                  if (C)
                    G.blur();
                  else
                    return !1;
              } else if ((O || d.type === "touchstart") && W) {
                var et = W.tagName.toLowerCase();
                (W.isContentEditable || Lv.indexOf(et) > -1) && W.blur();
              }
              (D || I || A) && Ir(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new Su(yo(d))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = m, a._dragFlag = !0, a._prevInputEvent = d, a.data = {}, a.doubleFlag = aa() - a.prevTime < 200, a._isMouseEvent = GS(d), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
            var Z = a._preventMouseEvent || a.emit("dragStart", xr(xr({ data: a.data, datas: a.data, inputEvent: d, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, isTrusted: m, isDouble: a.doubleFlag }, a.getCurrentStore().getPosition()), { preventDefault: function() {
              d.preventDefault();
            }, preventDrag: function() {
              a._dragFlag = !1;
            } }));
            Z === !1 && a.stop(), a._isMouseEvent && a.flag && O && d.preventDefault();
          }
          if (!a.flag)
            return !1;
          var it = 0;
          if (H ? (a._attchDragEvent(), B && S && (it = setTimeout(function() {
            Ir(y, "touchstart", a.onDragStart, {
              passive: !1
            });
          }))) : B && S && wr(y, "touchstart", a.onDragStart), a.flag && zS(d)) {
            if (clearTimeout(it), H && d.touches.length !== d.changedTouches.length)
              return;
            a.pinchFlag || a.onPinchStart(d);
          }
        }
      }
    }, a.onDrag = function(d, m) {
      if (a.flag) {
        var _ = a.options.preventDefault;
        !a._isMouseEvent && _ && d.preventDefault(), a._prevInputEvent = d;
        var x = yo(d), y = a.moveClients(x, d, !1);
        if (a._dragFlag) {
          if (a.pinchFlag || y.deltaX || y.deltaY) {
            var S = a._preventMouseEvent || a.emit("drag", xr(xr({}, y), { isScroll: !!m, inputEvent: d }));
            if (S === !1) {
              a.stop();
              return;
            }
          }
          a.pinchFlag && a.onPinch(d, x);
        }
        a.getCurrentStore().getPosition(x, !0);
      }
    }, a.onDragEnd = function(d) {
      if (a.flag) {
        var m = a.options, _ = m.pinchOutside, x = m.container, y = m.preventClickEventOnDrag, S = m.preventClickEventOnDragStart, E = m.preventClickEventByCondition, R = a.isDrag;
        (y || S || E) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !E && !S && y && !R && a._allowClickEvent(), a._useTouch && _ && wr(x, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(d);
        var O = d?.touches ? yo(d) : [], T = O.length;
        T === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new Su(O));
        var C = a._getPosition(), D = aa(), I = !R && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = R || I ? 0 : D, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", xr({ data: a.data, datas: a.data, isDouble: I, isDrag: R, isClick: !R, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: d, isTrusted: a._isTrusted }, C)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
          a._preventMouseEvent = !1;
        }, 200)), a._isIdle = !0);
      }
    }, a.onBlur = function() {
      a.onDragEnd();
    }, a._allowClickEvent = function() {
      wr(a._window, "click", a._onClick, !0);
    }, a._onClick = function(d) {
      a._allowClickEvent(), a._allowMouseEvent();
      var m = a.options.preventClickEventByCondition;
      m?.(d) || (d.stopPropagation(), d.preventDefault());
    }, a._onContextMenu = function(d) {
      var m = a.options;
      m.preventRightClick ? a.onDragEnd(d) : d.preventDefault();
    }, a._passCallback = function() {
    };
    var s = [].concat(r), u = s[0];
    a._window = kp(u) ? u : bn(u), a.options = xr({ checkInput: !1, container: u && !("document" in u) ? bn(u) : u, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var f = a.options, c = f.container, v = f.events, p = f.checkWindowBlur;
    if (a._useDrag = v.indexOf("drag") > -1, a._useTouch = v.indexOf("touch") > -1, a._useMouse = v.indexOf("mouse") > -1, a.targets = s, a._useDrag && s.forEach(function(d) {
      Ir(d, "dragstart", a.onDragStart);
    }), a._useMouse && (s.forEach(function(d) {
      Ir(d, "mousedown", a.onDragStart), Ir(d, "mousemove", a._passCallback);
    }), Ir(c, "contextmenu", a._onContextMenu)), p && Ir(bn(), "blur", a.onBlur), a._useTouch) {
      var h = {
        passive: !1
      };
      s.forEach(function(d) {
        Ir(d, "touchstart", a.onDragStart, h), Ir(d, "touchmove", a._passCallback, h);
      });
    }
    return a;
  }
  return e.prototype.stop = function() {
    this.isDrag = !1, this.data = {}, this.clientStores = [], this.pinchFlag = !1, this.doubleFlag = !1, this.prevTime = 0, this.flag = !1, this._isIdle = !0, this._allowClickEvent(), this._dettachDragEvent(), this._isDragAPI = !1;
  }, e.prototype.getMovement = function(r) {
    return this.getCurrentStore().getMovement(r) + this.clientStores.slice(1).reduce(function(n, a) {
      return n + a.movement;
    }, 0);
  }, e.prototype.isDragging = function() {
    return this.isDrag;
  }, e.prototype.isIdle = function() {
    return this._isIdle;
  }, e.prototype.isFlag = function() {
    return this.flag;
  }, e.prototype.isPinchFlag = function() {
    return this.pinchFlag;
  }, e.prototype.isDoubleFlag = function() {
    return this.doubleFlag;
  }, e.prototype.isPinching = function() {
    return this.isPinch;
  }, e.prototype.scrollBy = function(r, n, a, s) {
    s === void 0 && (s = !0), this.flag && (this.clientStores[0].move(r, n), s && this.onDrag(a, !0));
  }, e.prototype.move = function(r, n) {
    var a = r[0], s = r[1], u = this.getCurrentStore(), f = u.prevClients;
    return this.moveClients(f.map(function(c) {
      var v = c.clientX, p = c.clientY;
      return {
        clientX: v + a,
        clientY: p + s,
        originalClientX: v,
        originalClientY: p
      };
    }), n, !0);
  }, e.prototype.triggerDragStart = function(r) {
    this.onDragStart(r, !1);
  }, e.prototype.setEventData = function(r) {
    var n = this.data;
    for (var a in r)
      n[a] = r[a];
    return this;
  }, e.prototype.setEventDatas = function(r) {
    return this.setEventData(r);
  }, e.prototype.getCurrentEvent = function(r) {
    return r === void 0 && (r = this._prevInputEvent), xr(xr({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: r });
  }, e.prototype.getEventData = function() {
    return this.data;
  }, e.prototype.getEventDatas = function() {
    return this.data;
  }, e.prototype.unset = function() {
    var r = this, n = this.targets, a = this.options.container;
    this.off(), wr(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(s) {
      wr(s, "dragstart", r.onDragStart);
    }), this._useMouse && (n.forEach(function(s) {
      wr(s, "mousedown", r.onDragStart);
    }), wr(a, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(s) {
      wr(s, "touchstart", r.onDragStart);
    }), wr(a, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, e.prototype.onPinchStart = function(r) {
    var n = this, a = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > a)) {
      var s = new Su(yo(r));
      this.pinchFlag = !0, this._addStore(s);
      var u = this.emit("pinchStart", xr(xr({ data: this.data, datas: this.data, angle: s.getAngle(), touches: this.getCurrentStore().getPositions() }, s.getPosition()), { inputEvent: r, isTrusted: this._isTrusted, preventDefault: function() {
        r.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      u === !1 && (this.pinchFlag = !1);
    }
  }, e.prototype.onPinch = function(r, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var a = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", xr(xr({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: a.getAngle(n), rotation: a.getRotation(n), touches: a.getPositions(n), scale: a.getScale(n), distance: a.getDistance(n) }, a.getPosition(n)), { inputEvent: r, isTrusted: this._isTrusted }));
    }
  }, e.prototype.onPinchEnd = function(r) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var a = this.getCurrentStore();
      this.emit("pinchEnd", xr(xr({ data: this.data, datas: this.data, isPinch: n, touches: a.getPositions() }, a.getPosition()), { inputEvent: r }));
    }
  }, e.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, e.prototype.moveClients = function(r, n, a) {
    var s = this._getPosition(r, a), u = this.isDrag;
    (s.deltaX || s.deltaY) && (this.isDrag = !0);
    var f = !1;
    return !u && this.isDrag && (f = !0), xr(xr({ data: this.data, datas: this.data }, s), { movement: this.getMovement(r), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: f });
  }, e.prototype._addStore = function(r) {
    this.clientStores.splice(0, 0, r);
  }, e.prototype._getPosition = function(r, n) {
    var a = this.getCurrentStore(), s = a.getPosition(r, n), u = this.clientStores.slice(1).reduce(function(v, p) {
      var h = p.getPosition();
      return v.distX += h.distX, v.distY += h.distY, v;
    }, s), f = u.distX, c = u.distY;
    return xr(xr({}, s), { distX: f, distY: c });
  }, e.prototype._attchDragEvent = function() {
    var r = this._window, n = this.options.container, a = {
      passive: !1
    };
    this._isDragAPI && (Ir(n, "dragover", this.onDrag, a), Ir(r, "dragend", this.onDragEnd)), this._useMouse && (Ir(n, "mousemove", this.onDrag), Ir(r, "mouseup", this.onDragEnd)), this._useTouch && (Ir(n, "touchmove", this.onDrag, a), Ir(r, "touchend", this.onDragEnd, a), Ir(r, "touchcancel", this.onDragEnd, a));
  }, e.prototype._dettachDragEvent = function() {
    var r = this._window, n = this.options.container;
    this._isDragAPI && (wr(n, "dragover", this.onDrag), wr(r, "dragend", this.onDragEnd)), this._useMouse && (wr(n, "mousemove", this.onDrag), wr(r, "mouseup", this.onDragEnd)), this._useTouch && (wr(n, "touchstart", this.onDragStart), wr(n, "touchmove", this.onDrag), wr(r, "touchend", this.onDragEnd), wr(r, "touchcancel", this.onDragEnd));
  }, e.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, e;
})(Ko);
function LS(t) {
  for (var e = 5381, r = t.length; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e >>> 0;
}
var WS = LS;
function NS(t) {
  return WS(t).toString(36);
}
function HS(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function YS(t, e, r) {
  return r.original ? e : e.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, a) {
    var s = a.trim();
    return (s ? Hn(s) : [""]).map(function(u) {
      var f = u.trim();
      return f.indexOf("@") === 0 ? f : f.indexOf(":global") > -1 ? f.replace(/\:global/g, "") : f.indexOf(":host") > -1 ? "".concat(f.replace(/\:host/g, ".".concat(t))) : f ? ".".concat(t, " ").concat(f) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function XS(t, e, r, n, a) {
  var s = Ei(n), u = s.createElement("style");
  return u.setAttribute("type", "text/css"), u.setAttribute("data-styled-id", t), u.setAttribute("data-styled-count", "1"), r.nonce && u.setAttribute("nonce", r.nonce), u.innerHTML = YS(t, e, r), (a || s.head || s.body).appendChild(u), u;
}
function qS(t) {
  var e = "rCS" + NS(t);
  return {
    className: e,
    inject: function(r, n) {
      n === void 0 && (n = {});
      var a = HS(r), s = (a || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(e, '"]'));
      if (!s)
        s = XS(e, t, n, r, a);
      else {
        var u = parseFloat(s.getAttribute("data-styled-count")) || 0;
        s.setAttribute("data-styled-count", "".concat(u + 1));
      }
      return {
        destroy: function() {
          var f, c = parseFloat(s.getAttribute("data-styled-count")) || 0;
          c <= 1 ? (s.remove ? s.remove() : (f = s.parentNode) === null || f === void 0 || f.removeChild(s), s = null) : s.setAttribute("data-styled-count", "".concat(c - 1));
        }
      };
    }
  };
}
var qu = function() {
  return qu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, qu.apply(this, arguments);
};
function US(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function vd(t, e) {
  var r = qS(e), n = r.className;
  return Xb(function(a, s) {
    var u = a.className, f = u === void 0 ? "" : u;
    a.cspNonce;
    var c = US(a, ["className", "cspNonce"]), v = nS();
    return iS(s, function() {
      return v.current;
    }, []), Kp(function() {
      var p = r.inject(v.current, {
        nonce: a.cspNonce
      });
      return function() {
        p.destroy();
      };
    }, []), Me(t, qu({
      ref: v,
      "data-styled-id": n,
      className: "".concat(f, " ").concat(n)
    }, c));
  });
}
var Uu = function(t, e) {
  return Uu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Uu(t, e);
};
function _a(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Uu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var z = function() {
  return z = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, z.apply(this, arguments);
};
function $S(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function VS(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
function KS(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function k(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t), a, s = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(a = n.next()).done; ) s.push(a.value);
  } catch (f) {
    u = { error: f };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return s;
}
function st(t, e, r) {
  if (arguments.length === 2) for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function xa(t, e) {
  return z({ events: [], props: [], name: t }, e);
}
var ZS = ["n", "w", "s", "e"], Cf = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function JS(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function QS(t) {
  var e = JS(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var Mi = fS(), pd = Mi.browser.webkit, dd = pd && (function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
})(), hd = Mi.browser.name, gd = parseInt(Mi.browser.version, 10), jS = hd === "chrome", tC = Mi.browser.chromium, rC = parseInt(Mi.browser.chromiumVersion, 10) || 0, eC = jS && gd >= 109 || tC && rC >= 109, nC = hd === "firefox", iC = parseInt(Mi.browser.webkitVersion, 10) >= 612 || gd >= 15, wf = "moveable-", aC = Cf.map(function(t) {
  var e = "", r = "", n = "center", a = "center", s = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (e = "top: ".concat(s, ";"), a = "bottom"), t.indexOf("s") > -1 && (e = "top: 0px;", a = "top"), t.indexOf("w") > -1 && (r = "left: ".concat(s, ";"), n = "right"), t.indexOf("e") > -1 && (r = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(r).concat(e, `
        transform-origin: `).concat(n, " ").concat(a, `;
    }`);
}).join(`
`), oC = `
{
position: absolute;
width: 1px;
height: 1px;
left: 0;
top: 0;
z-index: 3000;
--moveable-color: #4af;
--zoom: 1;
--zoompx: 1px;
--moveable-line-padding: 0;
--moveable-control-padding: 0;
will-change: transform;
outline: 1px solid transparent;
}
.control-box {
z-index: 0;
}
.line, .control {
position: absolute;
left: 0;
top: 0;
will-change: transform;
}
.control {
width: 14px;
height: 14px;
border-radius: 50%;
border: 2px solid #fff;
box-sizing: border-box;
background: #4af;
background: var(--moveable-color);
margin-top: -7px;
margin-left: -7px;
border: 2px solid #fff;
z-index: 10;
}
.around-control {
position: absolute;
will-change: transform;
width: calc(var(--moveable-control-padding, 20) * 1px);
height: calc(var(--moveable-control-padding, 20) * 1px);
left: calc(var(--moveable-control-padding, 20) * -0.5px);
top: calc(var(--moveable-control-padding, 20) * -0.5px);
box-sizing: border-box;
background: transparent;
z-index: 8;
cursor: alias;
transform-origin: center center;
}
`.concat(aC, `
.padding {
position: absolute;
top: 0px;
left: 0px;
width: 100px;
height: 100px;
transform-origin: 0 0;
}
.line {
width: 1px;
height: 1px;
background: #4af;
background: var(--moveable-color);
transform-origin: 0px 50%;
}
.line.edge {
z-index: 1;
background: transparent;
}
.line.dashed {
box-sizing: border-box;
background: transparent;
}
.line.dashed.horizontal {
border-top: 1px dashed #4af;
border-top-color: #4af;
border-top-color: var(--moveable-color);
}
.line.dashed.vertical {
border-left: 1px dashed #4af;
border-left-color: #4af;
border-left-color: var(--moveable-color);
}
.line.vertical {
transform: translateX(-50%);
}
.line.horizontal {
transform: translateY(-50%);
}
.line.vertical.bold {
width: 2px;
}
.line.horizontal.bold {
height: 2px;
}

.control.origin {
border-color: #f55;
background: #fff;
width: 12px;
height: 12px;
margin-top: -6px;
margin-left: -6px;
pointer-events: none;
}
`).concat([0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map(function(t) {
  return `
.direction[data-rotation="`.concat(t, '"], :global .view-control-rotation').concat(t, ` {
`).concat(QS(t), `
}
`);
}).join(`
`), `

.line.direction:before {
content: "";
position: absolute;
width: 100%;
height: calc(var(--moveable-line-padding, 0) * 1px);
bottom: 0;
left: 0;
}
.group {
z-index: -1;
}
.area {
position: absolute;
}
.area-pieces {
position: absolute;
top: 0;
left: 0;
display: none;
}
.area.avoid, .area.pass {
pointer-events: none;
}
.area.avoid+.area-pieces {
display: block;
}
.area-piece {
position: absolute;
}

`).concat(dd ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), sC = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], $u = 1e-4, qr = 1e-7, bo = 1e-9, Vu = Math.pow(10, 10), Wv = -Vu, uC = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, Ef = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, md = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, _d = [
  "isMoveableElement",
  "updateRect",
  "updateTarget",
  "destroy",
  "dragStart",
  "isInside",
  "hitTest",
  "setState",
  "getRect",
  "request",
  "isDragging",
  "getManager",
  "forceUpdate",
  "waitToChangeTarget",
  "updateSelectors",
  "getTargets",
  "stopDrag",
  "getControlBoxElement",
  "getMoveables",
  "getDragElement"
];
function ya(t, e, r, n, a, s) {
  var u, f;
  s === void 0 && (s = "draggable");
  var c = (f = (u = e.gestos[s]) === null || u === void 0 ? void 0 : u.move(r, t.inputEvent)) !== null && f !== void 0 ? f : {}, v = c.originalDatas || c.datas, p = v[s] || (v[s] = {});
  return z(z({}, c), { isPinch: !!n, parentEvent: !0, datas: p, originalDatas: t.originalDatas });
}
var yi = /* @__PURE__ */ (function() {
  function t(e) {
    var r;
    e === void 0 && (e = "draggable"), this.ableName = e, this.prevX = 0, this.prevY = 0, this.startX = 0, this.startY = 0, this.isDrag = !1, this.isFlag = !1, this.datas = {
      draggable: {}
    }, this.datas = (r = {}, r[e] = {}, r);
  }
  return t.prototype.dragStart = function(e, r) {
    this.isDrag = !1, this.isFlag = !1;
    var n = r.originalDatas;
    return this.datas = n, n[this.ableName] || (n[this.ableName] = {}), z(z({}, this.move(e, r.inputEvent)), { type: "dragstart" });
  }, t.prototype.drag = function(e, r) {
    return this.move([
      e[0] - this.prevX,
      e[1] - this.prevY
    ], r);
  }, t.prototype.move = function(e, r) {
    var n, a, s = !1;
    if (!this.isFlag)
      this.prevX = e[0], this.prevY = e[1], this.startX = e[0], this.startY = e[1], n = e[0], a = e[1], this.isFlag = !0;
    else {
      var u = this.isDrag;
      n = this.prevX + e[0], a = this.prevY + e[1], (e[0] || e[1]) && (this.isDrag = !0), !u && this.isDrag && (s = !0);
    }
    return this.prevX = n, this.prevY = a, {
      type: "drag",
      clientX: n,
      clientY: a,
      inputEvent: r,
      isFirstDrag: s,
      isDrag: this.isDrag,
      distX: n - this.startX,
      distY: a - this.startY,
      deltaX: e[0],
      deltaY: e[1],
      datas: this.datas[this.ableName],
      originalDatas: this.datas,
      parentEvent: !0,
      parentGesto: this
    };
  }, t;
})();
function mi(t, e, r, n) {
  var a = t.length === 16, s = a ? 4 : 3, u = Vn(t, r, n, s), f = k(u, 4), c = k(f[0], 2), v = c[0], p = c[1], h = k(f[1], 2), d = h[0], m = h[1], _ = k(f[2], 2), x = _[0], y = _[1], S = k(f[3], 2), E = S[0], R = S[1], O = k(vr(t, e, s), 2), T = O[0], C = O[1], D = Math.min(v, d, x, E), I = Math.min(p, m, y, R), A = Math.max(v, d, x, E), B = Math.max(p, m, y, R);
  v = v - D || 0, d = d - D || 0, x = x - D || 0, E = E - D || 0, p = p - I || 0, m = m - I || 0, y = y - I || 0, R = R - I || 0, T = T - D || 0, C = C - I || 0;
  var H = t[0], W = t[s + 1], G = Yr(H * W);
  return {
    left: D,
    top: I,
    right: A,
    bottom: B,
    origin: [T, C],
    pos1: [v, p],
    pos2: [d, m],
    pos3: [x, y],
    pos4: [E, R],
    direction: G
  };
}
function xd(t, e) {
  var r = e.clientX, n = e.clientY, a = e.datas, s = t.state, u = s.moveableClientRect, f = s.rootMatrix, c = s.is3d, v = s.pos1, p = u.left, h = u.top, d = c ? 4 : 3, m = k(wt(Ci(f, [r - p, n - h], d), v), 2), _ = m[0], x = m[1], y = k(Le({ datas: a, distX: _, distY: x }), 2), S = y[0], E = y[1];
  return [S, E];
}
function $n(t, e) {
  var r = e.datas, n = t.state, a = n.allMatrix, s = n.beforeMatrix, u = n.is3d, f = n.left, c = n.top, v = n.origin, p = n.offsetMatrix, h = n.targetMatrix, d = n.transformOrigin, m = u ? 4 : 3;
  r.is3d = u, r.matrix = a, r.targetMatrix = h, r.beforeMatrix = s, r.offsetMatrix = p, r.transformOrigin = d, r.inverseMatrix = ke(a, m), r.inverseBeforeMatrix = ke(s, m), r.absoluteOrigin = Yn(Ut([f, c], v), m), r.startDragBeforeDist = Fr(r.inverseBeforeMatrix, r.absoluteOrigin, m), r.startDragDist = Fr(r.inverseMatrix, r.absoluteOrigin, m);
}
function fC(t) {
  return mi(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Zo(t, e, r) {
  var n = e.datas, a = e.originalDatas.beforeRenderable, s = n.transformIndex, u = a.nextTransforms, f = u.length, c = a.nextTransformAppendedIndexes, v = -1;
  s === -1 ? (r === "translate" ? v = 0 : r === "rotate" && (v = en(u, function(m) {
    return m.match(/scale\(/g);
  })), v === -1 && (v = u.length), n.transformIndex = v) : Qr(c, function(m) {
    return m.index === s && m.functionName === r;
  }) ? v = s : v = s + c.filter(function(m) {
    return m.index < s;
  }).length;
  var p = zw(u, t.state, v), h = p.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = p.beforeFunctionTexts, n.afterFunctionTexts = p.afterFunctionTexts, n.beforeTransform = p.beforeFunctionMatrix, n.beforeTransform2 = p.beforeFunctionMatrix2, n.targetTansform = p.targetFunctionMatrix, n.afterTransform = p.afterFunctionMatrix, n.afterTransform2 = p.afterFunctionMatrix2, n.targetAllTransform = p.allFunctionMatrix, h.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : f > v && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = st(st([], k(c), !1), [{
    functionName: r,
    index: v,
    isAppend: !0
  }], !1));
}
function Jo(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function lC(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = k(bd({ datas: e, distX: r, distY: n }), 2), s = a[0], u = a[1], f = yd(e, dS([s, u], 4));
  return Fr(f, Yn([0, 0, 0], 4), 4);
}
function yd(t, e, r) {
  var n = t.beforeTransform, a = t.afterTransform, s = t.beforeTransform2, u = t.afterTransform2, f = t.targetAllTransform, c = r ? er(f, e, 4) : er(e, f, 4), v = er(ke(r ? s : n, 4), c, 4), p = er(v, ke(r ? u : a, 4), 4);
  return p;
}
function bd(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = e.inverseBeforeMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return wt(Fr(a, Ut(f, [r, n]), c), u);
}
function Le(t, e) {
  var r = t.datas, n = t.distX, a = t.distY, s = r.inverseBeforeMatrix, u = r.inverseMatrix, f = r.is3d, c = r.startDragBeforeDist, v = r.startDragDist, p = r.absoluteOrigin, h = f ? 4 : 3;
  return wt(Fr(e ? s : u, Ut(p, [n, a]), h), e ? c : v);
}
function cC(t, e) {
  var r = t.datas, n = t.distX, a = t.distY;
  r.beforeMatrix;
  var s = r.matrix, u = r.is3d;
  r.startDragBeforeDist;
  var f = r.startDragDist, c = r.absoluteOrigin, v = u ? 4 : 3;
  return wt(Fr(s, Ut(f, [n, a]), v), c);
}
function vC(t, e, r, n, a, s) {
  return n === void 0 && (n = e), a === void 0 && (a = r), s === void 0 && (s = [0, 0]), t ? t.map(function(u, f) {
    var c = va(u), v = c.value, p = c.unit, h = f ? a : n, d = f ? r : e;
    if (u === "%" || isNaN(v)) {
      var m = h ? s[f] / h : 0;
      return d * m;
    } else if (p !== "%")
      return v;
    return d * v / 100;
  }) : s;
}
function Sd(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function pC(t, e) {
  return Sd(e).map(function(r) {
    return t[r];
  });
}
function Cu(t, e) {
  var r = (e + 1) / 2;
  return [
    Bo(t[0][0], t[1][0], r, 1 - r),
    Bo(t[0][1], t[1][1], r, 1 - r)
  ];
}
function Dr(t, e) {
  var r = Cu([t[0], t[1]], e[0]), n = Cu([t[2], t[3]], e[0]);
  return Cu([r, n], e[1]);
}
function dC(t, e, r, n, a, s) {
  var u = Vn(e, r, n, a), f = Dr(u, s), c = t[0] - f[0], v = t[1] - f[1];
  return [c, v];
}
function ba(t, e, r, n) {
  return er(t, ea(e, n, r), n);
}
function hC(t, e, r, n) {
  var a = t.transformOrigin, s = t.offsetMatrix, u = t.is3d, f = u ? 4 : 3, c;
  if (Jr(r)) {
    var v = e.beforeTransform, p = e.afterTransform;
    n ? c = Oe(sa(r), 4, f) : c = Oe(er(er(v, sa([r]), 4), p, 4), 4, f);
  } else
    c = r;
  return ba(s, c, a, f);
}
function gC(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, s = t.targetMatrix, u = t.targetAllTransform, f = a ? 4 : 3;
  return ba(n, er(u || s, yf(e, f), f), r, f);
}
function Qo(t, e) {
  var r = Ri(e);
  return {
    setTransform: function(n, a) {
      a === void 0 && (a = -1), r.startTransforms = br(n) ? n : Sn(n), Ku(t, e, a);
    },
    setTransformIndex: function(n) {
      Ku(t, e, n);
    }
  };
}
function jo(t, e, r) {
  var n = Ri(e), a = n.startTransforms;
  Ku(t, e, en(a, function(s) {
    return s.indexOf("".concat(r, "(")) === 0;
  }));
}
function Ku(t, e, r) {
  var n = Ri(e), a = e.datas;
  if (a.transformIndex = r, r !== -1) {
    var s = n.startTransforms[r];
    if (s) {
      var u = t.state, f = xi([s], {
        "x%": function(c) {
          return c / 100 * u.offsetWidth;
        },
        "y%": function(c) {
          return c / 100 * u.offsetHeight;
        }
      });
      a.startValue = f[0].functionValue;
    }
  }
}
function Df(t, e) {
  var r = Ri(t);
  r.nextTransforms = Sn(e);
}
function Ri(t) {
  return t.originalDatas.beforeRenderable;
}
function ko(t) {
  var e = t.originalDatas.beforeRenderable;
  return e.nextTransforms;
}
function So(t) {
  return (ko(t) || []).join(" ");
}
function Co(t) {
  return Ri(t).nextStyle;
}
function Cd(t, e, r, n, a) {
  Df(a, e);
  var s = Hr.drag(t, ya(a, t.state, r, n)), u = s ? s.transform : e;
  return z(z({ transform: e, drag: s }, Xr({
    transform: u
  }, a)), { afterTransform: u });
}
function Mf(t, e, r, n, a, s) {
  var u = hC(t.state, a, e, s), f = xC(t, r, n, u);
  return f;
}
function wd(t, e, r, n, a, s, u) {
  var f = Mf(t, e, r, a, s, u), c = t.state, v = c.left, p = c.top, h = t.props.groupable, d = h ? v : 0, m = h ? p : 0, _ = wt(n, f);
  return wt(_, [d, m]);
}
function mC(t, e, r, n, a, s, u) {
  var f = wd(t, e, r, n, a, s, u);
  return f;
}
function _C(t, e, r) {
  return [
    e ? -1 + t[0] / (e / 2) : 0,
    r ? -1 + t[1] / (r / 2) : 0
  ];
}
function xC(t, e, r, n) {
  n === void 0 && (n = t.state.allMatrix);
  var a = t.state, s = a.width, u = a.height, f = a.is3d, c = f ? 4 : 3, v = [
    s / 2 * (1 + e[0]) + r[0],
    u / 2 * (1 + e[1]) + r[1]
  ];
  return vr(n, v, c);
}
function yC(t, e, r) {
  var n = r.fixedDirection, a = r.fixedPosition, s = r.fixedOffset;
  return wd(t, "rotate(".concat(e, "deg)"), n, a, s, r);
}
function bC(t, e, r, n, a, s) {
  var u = t.props.groupable, f = t.state, c = f.transformOrigin, v = f.offsetMatrix, p = f.is3d, h = f.width, d = f.height, m = f.left, _ = f.top, x = s.fixedDirection, y = s.nextTargetMatrix || f.targetMatrix, S = p ? 4 : 3, E = vC(a, e, r, h, d, c), R = u ? m : 0, O = u ? _ : 0, T = ba(v, y, E, S), C = dC(n, T, e, r, S, x);
  return wt(C, [R, O]);
}
function SC(t, e) {
  return Dr(ye(t.state), e);
}
function CC(t, e) {
  var r = t.targetGesto, n = t.controlGesto, a;
  return r?.isFlag() && (a = r.getEventData()[e]), !a && n?.isFlag() && (a = n.getEventData()[e]), a || {};
}
function wC(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function EC(t) {
  var e = t("scale"), r = t("rotate"), n = t("translate"), a = [];
  return n && n !== "0px" && n !== "none" && a.push("translate(".concat(n.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && a.push("rotate(".concat(r, ")")), e && e !== "1" && e !== "none" && a.push("scale(".concat(e.split(/\s+/).join(","), ")")), a;
}
function Ed(t, e, r) {
  for (var n = t, a = [], s = pf(t) || En(t), u = !r && t === e || t === s, f = u, c = !1, v = 3, p, h, d, m = !1, _ = fa(e, e, !0).offsetParent, x = 1; n && !f; ) {
    f = u;
    var y = jr(n), S = y("position"), E = Kd(n), R = S === "fixed", O = EC(y), T = hS(Sw(E)), C = void 0, D = !1, I = !1, A = 0, B = 0, H = 0, W = 0, G = {
      hasTransform: !1,
      fixedContainer: null
    };
    R && (m = !0, G = Mw(n), _ = G.fixedContainer);
    var Y = T.length;
    !c && (Y === 16 || O.length) && (c = !0, v = 4, rf(a), d && (d = Oe(d, 3, 4))), c && Y === 9 && (T = Oe(T, 3, 4));
    var X = Dw(n, t), rt = X.tagName, et = X.hasOffset, Z = X.isSVG, it = X.origin, at = X.targetOrigin, $ = X.offset, lt = k($, 2), pt = lt[0], ft = lt[1];
    rt === "svg" && !n.ownerSVGElement && d && (a.push({
      type: "target",
      target: n,
      matrix: Rw(n, v)
    }), a.push({
      type: "offset",
      target: n,
      matrix: sr(v)
    }));
    var ct = parseFloat(y("zoom")) || 1;
    if (R)
      C = G.fixedContainer, D = !0;
    else {
      var ot = fa(n, e, !1, !0, y), gt = ot.offsetZoom;
      if (C = ot.offsetParent, D = ot.isEnd, I = ot.isStatic, x *= gt, (ot.isCustomElement || gt !== 1) && I)
        pt -= C.offsetLeft, ft -= C.offsetTop;
      else if (nC || eC) {
        var mt = ot.parentSlotElement;
        if (mt) {
          for (var Tt = C, Wt = 0, ut = 0; Tt && wC(Tt); )
            Wt += Tt.offsetLeft, ut += Tt.offsetTop, Tt = Tt.offsetParent;
          pt -= Wt, ft -= ut;
        }
      }
    }
    if (pd && !iC && et && !Z && I && (S === "relative" || S === "static") && (pt -= C.offsetLeft, ft -= C.offsetTop, u = u || D), R)
      et && G.hasTransform && (H = C.clientLeft, W = C.clientTop);
    else if (et && _ !== C && (A = C.clientLeft, B = C.clientTop), et && C === s) {
      var vt = Zd(n, !1);
      pt += vt[0], ft += vt[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: ea(T, v, it)
    }), O.length && (a.push({
      type: "offset",
      target: n,
      matrix: sr(v)
    }), a.push({
      type: "target",
      target: n,
      matrix: ea(sa(O), v, it)
    })), et) {
      var Ot = n === t, yt = Ot ? 0 : n.scrollLeft, Et = Ot ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: Xn([
          pt - yt + A - H,
          ft - Et + B - W
        ], v)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: it
      });
    if (ct !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: ea(yf([ct, ct], v), v, [0, 0])
    }), d || (d = T), p || (p = it), h || (h = at), f || R)
      break;
    n = C, u = D, (!r || n === s) && (f = u);
  }
  return d || (d = sr(v)), p || (p = [0, 0]), h || (h = [0, 0]), {
    zoom: x,
    offsetContainer: _,
    matrixes: a,
    targetMatrix: d,
    transformOrigin: p,
    targetOrigin: h,
    is3d: c,
    hasFixed: m
  };
}
var kn = null, Ln = null, pi = null;
function bi(t) {
  t ? (window.Map && (kn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map()), pi = []) : (kn = null, pi = null, Ln = null);
}
function DC(t) {
  var e = Ln?.get(t);
  if (e)
    return e;
  var r = na(t, !0);
  return Ln && Ln.set(t, r), r;
}
function MC(t, e) {
  if (pi) {
    var r = Qr(pi, function(a) {
      return a[0][0] == t && a[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = Ed(t, e, !0);
  return pi && pi.push([[t, e], n]), n;
}
function jr(t) {
  var e = kn?.get(t);
  if (!e) {
    var r = bn(t).getComputedStyle(t);
    if (!kn)
      return function(s) {
        return r[s];
      };
    e = {
      style: r,
      cached: {}
    }, kn.set(t, e);
  }
  var n = e.cached, a = e.style;
  return function(s) {
    return s in n || (n[s] = a[s]), n[s];
  };
}
function Re(t, e, r) {
  var n = r.originalDatas;
  n.groupable = n.groupable || {};
  var a = n.groupable;
  a.childDatas = a.childDatas || [];
  var s = a.childDatas;
  return t.moveables.map(function(u, f) {
    return s[f] = s[f] || {}, s[f][e] = s[f][e] || {}, z(z({}, r), { isRequestChild: !0, datas: s[f][e], originalDatas: s[f] });
  });
}
function wu(t, e, r, n, a, s, u) {
  var f = !!r.match(/Start$/g), c = !!r.match(/End$/g), v = a.isPinch, p = a.datas, h = Re(t, e.name, a), d = t.moveables, m = [], _ = h.map(function(x, y) {
    var S = d[y], E = S.state, R = E.gestos, O = x;
    if (f)
      O = new yi(u).dragStart(n, x), m.push(O);
    else {
      if (R[u] || (R[u] = p.childGestos[y]), !R[u])
        return;
      O = ya(x, E, n, v, s, u), m.push(O);
    }
    var T = e[r](S, z(z({}, O), { parentFlag: !0 }));
    return c && (R[u] = null), T;
  });
  return f && (p.childGestos = d.map(function(x) {
    return x.state.gestos[u];
  })), {
    eventParams: _,
    childEvents: m
  };
}
function rn(t, e, r, n, a, s) {
  a === void 0 && (a = function(p, h) {
    return h;
  });
  var u = !!r.match(/End$/g), f = Re(t, e.name, n), c = t.moveables, v = f.map(function(p, h) {
    var d = c[h], m = p;
    m = a(d, p);
    var _ = e[r](d, z(z({}, m), { parentFlag: !0 }));
    return u && (d.state.gestos = {}), _;
  });
  return v;
}
function Lo(t, e, r, n) {
  var a = r.fixedDirection, s = r.fixedPosition, u = n.datas.startPositions || ye(e.state), f = Dr(u, a), c = k(Fr(ma(-t.rotation / 180 * Math.PI, 3), [f[0] - s[0], f[1] - s[1], 1], 3), 2), v = c[0], p = c[1];
  return n.datas.originalX = v, n.datas.originalY = p, n;
}
function Dd(t, e, r, n) {
  var a = t.getState(), s = a.renderPoses, u = a.rotation, f = a.direction, c = Un(t.props, e).zoom, v = ra(u / Math.PI * 180), p = {}, h = t.renderState;
  h.renderDirectionMap || (h.renderDirectionMap = {});
  var d = h.renderDirectionMap;
  r.forEach(function(_) {
    var x = _.dir;
    p[x] = !0;
  });
  var m = Yr(f);
  return r.map(function(_) {
    var x = _.data, y = _.classNames, S = _.dir, E = Ef[S];
    if (!E || !p[S])
      return null;
    d[S] = !0;
    var R = (Pt(v, 15) + m * md[S] + 720) % 180, O = {};
    return nn(x).forEach(function(T) {
      O["data-".concat(T)] = x[T];
    }), n.createElement("div", z({ className: Ct.apply(void 0, st(["control", "direction", S, e], k(y), !1)), "data-rotation": R, "data-direction": S }, O, { key: "direction-".concat(S), style: Yo.apply(void 0, st([u, c], k(E.map(function(T) {
      return s[T];
    })), !1)) }));
  });
}
function Md(t, e, r, n) {
  var a = Un(t.props, r), s = a.renderDirections, u = s === void 0 ? e : s, f = a.displayAroundControls;
  if (!u)
    return [];
  var c = u === !0 ? Cf : u;
  return st(st([], k(f ? Id(t, n, r, c) : []), !1), k(Dd(t, r, c.map(function(v) {
    return {
      data: {},
      classNames: [],
      dir: v
    };
  }), n)), !1);
}
function ua(t, e, r, n, a, s) {
  for (var u = [], f = 6; f < arguments.length; f++)
    u[f - 6] = arguments[f];
  var c = _r(r, n), v = e ? Pt(c / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(s), className: Ct.apply(void 0, st(["line", "direction", e ? "edge" : "", e], k(u), !1)), "data-rotation": v, "data-line-key": s, "data-direction": e, style: Qi(r, n, a, c) });
}
function Rd(t, e, r, n, a) {
  var s = r === !0 ? ZS : r;
  return s.map(function(u, f) {
    var c = k(Ef[u], 2), v = c[0], p = c[1];
    if (p != null)
      return ua(t, u, n[v], n[p], a, "".concat(e, "Edge").concat(f), e);
  }).filter(Boolean);
}
function Td(t) {
  return function(e, r) {
    var n = Un(e.props, t).edge;
    return n && (n === !0 || n.length) ? st(st([], k(Rd(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), k(RC(e, t, r)), !1) : Od(e, t, r);
  };
}
function Od(t, e, r) {
  return Md(t, Cf, e, r);
}
function RC(t, e, r) {
  return Md(t, ["nw", "ne", "sw", "se"], e, r);
}
function Id(t, e, r, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var s = t.getState(), u = s.renderPoses, f = s.rotation, c = s.direction, v = a.renderDirectionMap, p = t.props.zoom, h = Yr(c), d = f / Math.PI * 180;
  return (n || nn(v)).map(function(m) {
    var _ = Ef[m];
    if (!_)
      return null;
    var x = (Pt(d, 15) + h * md[m] + 720) % 180, y = ["around-control"];
    return r && y.push("direction", r), e.createElement("div", { className: Ct.apply(void 0, st([], k(y), !1)), "data-rotation": x, "data-direction": m, key: "direction-around-".concat(m), style: Yo.apply(void 0, st([f, p], k(_.map(function(S) {
      return u[S];
    })), !1)) });
  });
}
function Rf(t, e, r) {
  var n = t || {}, a = n.position, s = a === void 0 ? "client" : a, u = n.left, f = u === void 0 ? -1 / 0 : u, c = n.top, v = c === void 0 ? -1 / 0 : c, p = n.right, h = p === void 0 ? 1 / 0 : p, d = n.bottom, m = d === void 0 ? 1 / 0 : d, _ = {
    position: s,
    left: f,
    top: v,
    right: h,
    bottom: m
  };
  return {
    vertical: Nv(_, e, !0),
    horizontal: Nv(_, r, !1)
  };
}
function ts(t, e) {
  var r = t.state, n = r.containerClientRect, a = n.clientHeight, s = n.clientWidth, u = n.clientLeft, f = n.clientTop, c = r.snapOffset, v = c.left, p = c.top, h = c.right, d = c.bottom, m = e || t.props.bounds || {}, _ = m.position || "client", x = _ === "css", y = m.left, S = y === void 0 ? -1 / 0 : y, E = m.top, R = E === void 0 ? -1 / 0 : E, O = m.right, T = O === void 0 ? x ? -1 / 0 : 1 / 0 : O, C = m.bottom, D = C === void 0 ? x ? -1 / 0 : 1 / 0 : C;
  return x && (T = s + h - v - T, D = a + d - p - D), {
    left: S + v - u,
    right: T + v - u,
    top: R + p - f,
    bottom: D + p - f
  };
}
function TC(t, e, r) {
  var n = ts(t), a = n.left, s = n.top, u = n.right, f = n.bottom, c = k(r, 2), v = c[0], p = c[1], h = k(wt(r, e), 2), d = h[0], m = h[1];
  tt(d) < qr && (d = 0), tt(m) < qr && (m = 0);
  var _ = m > 0, x = d > 0, y = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, S = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (d === 0 && m === 0)
    return {
      vertical: y,
      horizontal: S
    };
  if (d === 0)
    _ ? f < p && (S.pos = f, S.offset = p - f) : s > p && (S.pos = s, S.offset = p - s);
  else if (m === 0)
    x ? u < v && (y.pos = u, y.offset = v - u) : a > v && (y.pos = a, y.offset = v - a);
  else {
    var E = m / d, R = r[1] - E * v, O = 0, T = 0, C = !1;
    x && u <= v ? (O = E * u + R, T = u, C = !0) : !x && v <= a && (O = E * a + R, T = a, C = !0), C && (O < s || O > f) && (C = !1), C || (_ && f <= p ? (O = f, T = (O - R) / E, C = !0) : !_ && p <= s && (O = s, T = (O - R) / E, C = !0)), C && (y.isBound = !0, y.pos = T, y.offset = v - T, S.isBound = !0, S.pos = O, S.offset = p - O);
  }
  return {
    vertical: y,
    horizontal: S
  };
}
function Nv(t, e, r) {
  var n = t[r ? "left" : "top"], a = t[r ? "right" : "bottom"], s = Math.min.apply(Math, st([], k(e), !1)), u = Math.max.apply(Math, st([], k(e), !1)), f = [];
  return n + 1 > s && f.push({
    direction: "start",
    isBound: !0,
    offset: s - n,
    pos: n
  }), a - 1 < u && f.push({
    direction: "end",
    isBound: !0,
    offset: u - a,
    pos: a
  }), f.length || f.push({
    isBound: !1,
    offset: 0,
    pos: 0
  }), f.sort(function(c, v) {
    return tt(v.offset) - tt(c.offset);
  });
}
function Hv(t, e, r) {
  var n = r ? t.map(function(a) {
    return ga(a, r);
  }) : t;
  return n.some(function(a) {
    return a[0] < e.left && tt(a[0] - e.left) > 0.1 || a[0] > e.right && tt(a[0] - e.right) > 0.1 || a[1] < e.top && tt(a[1] - e.top) > 0.1 || a[1] > e.bottom && tt(a[1] - e.bottom) > 0.1;
  });
}
function OC(t, e, r) {
  var n = xe(t), a = Math.sqrt(n * n - e * e) || 0;
  return [a, -a].sort(function(s, u) {
    return tt(s - t[r ? 0 : 1]) - tt(u - t[r ? 0 : 1]);
  }).map(function(s) {
    return _r([0, 0], r ? [s, e] : [e, s]);
  });
}
function IC(t, e, r, n, a) {
  if (!t.props.bounds)
    return [];
  var s = a * Math.PI / 180, u = ts(t), f = u.left, c = u.top, v = u.right, p = u.bottom, h = f - n[0], d = v - n[0], m = c - n[1], _ = p - n[1], x = {
    left: h,
    top: m,
    right: d,
    bottom: _
  };
  if (!Hv(r, x, 0))
    return [];
  var y = [];
  return [
    [h, 0],
    [d, 0],
    [m, 1],
    [_, 1]
  ].forEach(function(S) {
    var E = k(S, 2), R = E[0], O = E[1];
    r.forEach(function(T) {
      var C = _r([0, 0], T);
      y.push.apply(y, st([], k(OC(T, R, O).map(function(D) {
        return s + D - C;
      }).filter(function(D) {
        return !Hv(e, x, D);
      }).map(function(D) {
        return Pt(D * 180 / Math.PI, qr);
      })), !1));
    });
  }), y;
}
var PC = ["left", "right", "center"], AC = ["top", "bottom", "middle"], Yv = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, Cn = {
  start: "left",
  end: "right",
  center: "center"
}, wn = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function di() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function Ti(t, e) {
  var r = t.props, n = r.snappable, a = r.bounds, s = r.innerBounds, u = r.verticalGuidelines, f = r.horizontalGuidelines, c = r.snapGridWidth, v = r.snapGridHeight, p = t.state, h = p.guidelines, d = p.enableSnap;
  return !n || !d || e && n !== !0 && n.indexOf(e) < 0 ? !1 : !!(c || v || a || s || h && h.length || u && u.length || f && f.length);
}
function Tf(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function BC(t, e) {
  var r = Tf(t), n = {};
  for (var a in r)
    a in e && r[a] && (n[a] = e[a]);
  return n;
}
function Of(t, e) {
  var r = BC(t, e), n = AC.filter(function(s) {
    return s in r;
  }), a = PC.filter(function(s) {
    return s in r;
  });
  return {
    horizontalNames: n,
    verticalNames: a,
    horizontal: n.map(function(s) {
      return r[s];
    }),
    vertical: a.map(function(s) {
      return r[s];
    })
  };
}
function zC(t, e, r) {
  var n = vr(t, [e.clientLeft, e.clientTop], r);
  return [
    e.left + n[0],
    e.top + n[1]
  ];
}
function GC(t) {
  var e = k(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  Math.abs(a) < yr && (a = 0), Math.abs(s) < yr && (s = 0);
  var u = 0, f = 0, c = 0;
  return a ? s ? (u = -s / a, f = 1, c = u * r[0] - r[1]) : (f = 1, c = -r[1]) : (u = -1, c = r[0]), [u, f, c].map(function(v) {
    return Pt(v, yr);
  });
}
var Pd = "snapRotationThreshold", Ad = "snapRotationDegrees", Bd = "snapHorizontalThreshold", zd = "snapVerticalThreshold";
function rs(t, e, r, n, a, s, u) {
  var f;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var c = t.props, v = ((f = t.state.snapThresholdInfo) === null || f === void 0 ? void 0 : f.multiples) || [1, 1], p = ip(u, c[Bd], 5), h = ip(s, c[zd], 5);
  return Gd(t.state.guidelines, e, r, n, a, p, h, v);
}
function Gd(t, e, r, n, a, s, u, f) {
  return {
    vertical: qv(t, "vertical", e, u * f[0], n),
    horizontal: qv(t, "horizontal", r, s * f[1], a)
  };
}
function FC(t, e, r) {
  var n = k(r, 2), a = n[0], s = n[1], u = k(e, 2), f = u[0], c = u[1], v = k(wt(r, e), 2), p = v[0], h = v[1], d = h > 0, m = p > 0;
  p = Xo(p), h = Xo(h);
  var _ = {
    isSnap: !1,
    offset: 0,
    pos: 0
  }, x = {
    isSnap: !1,
    offset: 0,
    pos: 0
  };
  if (p === 0 && h === 0)
    return {
      vertical: _,
      horizontal: x
    };
  var y = rs(t, p ? [a] : [], h ? [s] : [], [], [], void 0, void 0), S = y.vertical, E = y.horizontal;
  S.posInfos.filter(function(rt) {
    var et = rt.pos;
    return m ? et >= f : et <= f;
  }), E.posInfos.filter(function(rt) {
    var et = rt.pos;
    return d ? et >= c : et <= c;
  }), S.isSnap = S.posInfos.length > 0, E.isSnap = E.posInfos.length > 0;
  var R = Zu(S), O = R.isSnap, T = R.guideline, C = Zu(E), D = C.isSnap, I = C.guideline, A = D ? I.pos[1] : 0, B = O ? T.pos[0] : 0;
  if (p === 0)
    D && (x.isSnap = !0, x.pos = I.pos[1], x.offset = s - x.pos);
  else if (h === 0)
    O && (_.isSnap = !0, _.pos = B, _.offset = a - B);
  else {
    var H = h / p, W = r[1] - H * a, G = 0, Y = 0, X = !1;
    O ? (Y = B, G = H * Y + W, X = !0) : D && (G = A, Y = (G - W) / H, X = !0), X && (_.isSnap = !0, _.pos = Y, _.offset = a - Y, x.isSnap = !0, x.pos = G, x.offset = s - G);
  }
  return {
    vertical: _,
    horizontal: x
  };
}
function xn(t) {
  var e = "";
  return t === -1 || t === "top" || t === "left" ? e = "start" : t === 0 || t === "center" || t === "middle" ? e = "center" : (t === 1 || t === "right" || t === "bottom") && (e = "end"), e;
}
function Xv(t, e, r, n) {
  var a = Of(t.props.snapDirections, e), s = rs(t, a.vertical, a.horizontal, a.verticalNames.map(function(c) {
    return xn(c);
  }), a.horizontalNames.map(function(c) {
    return xn(c);
  }), r, n), u = xn(a.horizontalNames[s.horizontal.index]), f = xn(a.verticalNames[s.vertical.index]);
  return {
    vertical: z(z({}, s.vertical), { direction: f }),
    horizontal: z(z({}, s.horizontal), { direction: u })
  };
}
function Zu(t) {
  var e = t.isSnap;
  if (!e)
    return {
      isSnap: !1,
      offset: 0,
      dist: -1,
      pos: 0,
      guideline: null
    };
  var r = t.posInfos[0], n = r.guidelineInfos[0], a = n.offset, s = n.dist, u = n.guideline;
  return {
    isSnap: e,
    offset: a,
    dist: s,
    pos: r.pos,
    guideline: u
  };
}
function qv(t, e, r, n, a) {
  var s, u;
  if (a === void 0 && (a = []), !t || !t.length)
    return {
      isSnap: !1,
      index: -1,
      direction: "",
      posInfos: []
    };
  var f = e === "vertical", c = f ? 0 : 1, v = r.map(function(h, d) {
    var m = a[d] || "", _ = t.map(function(x) {
      var y = x.pos, S = h - y[c];
      return {
        offset: S,
        dist: tt(S),
        guideline: x,
        direction: m
      };
    }).filter(function(x) {
      var y = x.guideline, S = x.dist, E = y.type;
      return !(E !== e || S > n);
    }).sort(function(x, y) {
      return x.dist - y.dist;
    });
    return {
      pos: h,
      index: d,
      guidelineInfos: _,
      direction: m
    };
  }).filter(function(h) {
    return h.guidelineInfos.length > 0;
  }).sort(function(h, d) {
    return h.guidelineInfos[0].dist - d.guidelineInfos[0].dist;
  }), p = v.length > 0;
  return {
    isSnap: p,
    index: p ? v[0].index : -1,
    direction: (u = (s = v[0]) === null || s === void 0 ? void 0 : s.direction) !== null && u !== void 0 ? u : "",
    posInfos: v
  };
}
function kC(t, e, r, n, a) {
  var s = [];
  r[0] && r[1] ? s = [
    r,
    [-r[0], r[1]],
    [r[0], -r[1]]
  ] : !r[0] && !r[1] ? [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1]
  ].forEach(function(d, m, _) {
    var x = _[m + 1] || _[0];
    s.push(d), s.push([
      (d[0] + x[0]) / 2,
      (d[1] + x[1]) / 2
    ]);
  }) : t.props.keepRatio ? s.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (s.push.apply(s, st([], k(pC([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], r)), !1)), s.length > 1 && s.push([
    (s[0][0] + s[1][0]) / 2,
    (s[0][1] + s[1][1]) / 2
  ]));
  var u = s.map(function(d) {
    return Dr(e, d);
  }), f = u.map(function(d) {
    return d[0];
  }), c = u.map(function(d) {
    return d[1];
  }), v = rs(t, f, c, s.map(function(d) {
    return xn(d[0]);
  }), s.map(function(d) {
    return xn(d[1]);
  }), n, a), p = xn(s.map(function(d) {
    return d[0];
  })[v.vertical.index]), h = xn(s.map(function(d) {
    return d[1];
  })[v.horizontal.index]);
  return {
    vertical: z(z({}, v.vertical), { direction: p }),
    horizontal: z(z({}, v.horizontal), { direction: h })
  };
}
function Fd(t, e) {
  var r = tt(t.offset), n = tt(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < qr ? 1 : n < qr ? -1 : r - n;
}
function Wo(t, e) {
  return t.slice().sort(function(r, n) {
    var a = r.sign[e], s = n.sign[e], u = r.offset[e], f = n.offset[e];
    if (a) {
      if (!s)
        return -1;
    } else return 1;
    return Fd({ isBound: r.isBound, isSnap: r.isSnap, offset: u }, { isBound: n.isBound, isSnap: n.isSnap, offset: f });
  })[0];
}
function LC(t, e, r) {
  var n = [];
  if (r)
    tt(e[0]) !== 1 || tt(e[1]) !== 1 ? n.push([e, [-1, -1]], [e, [-1, 1]], [e, [1, -1]], [e, [1, 1]]) : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]), n.push([e, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var a = t[0] ? t : [1, 1];
    [1, -1].forEach(function(u) {
      [1, -1].forEach(function(f) {
        var c = [u * a[0], f * a[1]];
        e[0] === c[0] && e[1] === c[1] || n.push([e, c]);
      });
    });
  } else if (t[0]) {
    var s = tt(e[0]) === 1 ? [1] : [1, -1];
    s.forEach(function(u) {
      n.push([
        [e[0], -1],
        [u * t[0], -1]
      ], [
        [e[0], 0],
        [u * t[0], 0]
      ], [
        [e[0], 1],
        [u * t[0], 1]
      ]);
    });
  } else if (t[1]) {
    var s = tt(e[1]) === 1 ? [1] : [1, -1];
    s.forEach(function(f) {
      n.push([
        [-1, e[1]],
        [-1, f * t[1]]
      ], [
        [0, e[1]],
        [0, f * t[1]]
      ], [
        [1, e[1]],
        [1, f * t[1]]
      ]);
    });
  }
  return n;
}
function kd(t, e) {
  var r = zu([e[0][0], e[1][0]]), n = zu([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function If(t, e) {
  var r = k(e, 2), n = r[0], a = r[1], s = a[0] - n[0], u = a[1] - n[1];
  tt(s) < qr && (s = 0), tt(u) < qr && (u = 0);
  var f, c;
  if (!s)
    f = n[0], c = t[0];
  else if (!u)
    f = n[1], c = t[1];
  else {
    var v = u / s;
    f = v * (t[0] - n[0]) + n[1], c = t[1];
  }
  return f - c;
}
function Ld(t, e, r, n) {
  return n === void 0 && (n = qr), t.every(function(a) {
    var s = If(a, e), u = s <= 0;
    return u === r || tt(s) <= n;
  });
}
function Uv(t, e, r, n, a) {
  return a === void 0 && (a = 0), n && e - a <= t || !n && t <= r + a ? {
    isBound: !0,
    offset: n ? e - t : r - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function WC(t, e) {
  var r = e.line, n = e.centerSign, a = e.verticalSign, s = e.horizontalSign, u = e.lineConstants, f = t.props.innerBounds;
  if (!f)
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var c = f.left, v = f.top, p = f.width, h = f.height, d = [[c, v], [c, v + h]], m = [[c, v], [c + p, v]], _ = [[c + p, v], [c + p, v + h]], x = [[c, v + h], [c + p, v + h]];
  if (Ld([
    [c, v],
    [c + p, v],
    [c, v + h],
    [c + p, v + h]
  ], r, n))
    return {
      isAllBound: !1,
      isBound: !1,
      isVerticalBound: !1,
      isHorizontalBound: !1,
      offset: [0, 0]
    };
  var y = yn(r, u, m, a), S = yn(r, u, x, a), E = yn(r, u, d, s), R = yn(r, u, _, s), O = y.isBound && S.isBound, T = y.isBound || S.isBound, C = E.isBound && R.isBound, D = E.isBound || R.isBound, I = Si(y.offset, S.offset), A = Si(E.offset, R.offset), B = [0, 0], H = !1, W = !1;
  return tt(A) < tt(I) ? (B = [I, 0], H = T, W = O) : (B = [0, A], H = D, W = C), {
    isAllBound: W,
    isVerticalBound: T,
    isHorizontalBound: D,
    isBound: H,
    offset: B
  };
}
function yn(t, e, r, n, a, s) {
  var u = k(e, 2), f = u[0], c = u[1], v = t[0], p = r[0], h = r[1], d = Xo(h[1] - p[1]), m = Xo(h[0] - p[0]), _ = c, x = f, y = -f / c;
  if (m) {
    if (!d) {
      if (s && !_)
        return {
          isBound: !1,
          offset: 0
        };
      if (x) {
        var O = (p[1] - v[1]) / y + v[0];
        return Uv(O, p[0], h[0], n, a);
      } else {
        var E = p[1] - v[1], R = tt(E) <= (a || 0);
        return {
          isBound: R,
          offset: R ? E : 0
        };
      }
    }
  } else {
    if (s && !x)
      return {
        isBound: !1,
        offset: 0
      };
    if (_) {
      var S = y * (p[0] - v[0]) + v[1];
      return Uv(S, p[1], h[1], n, a);
    } else {
      var E = p[0] - v[0], R = tt(E) <= (a || 0);
      return {
        isBound: R,
        offset: R ? E : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Wd(t, e, r) {
  return e.map(function(n) {
    var a = WC(t, n), s = a.isBound, u = a.offset, f = a.isVerticalBound, c = a.isHorizontalBound, v = n.multiple, p = Le({
      datas: r,
      distX: u[0],
      distY: u[1]
    }).map(function(h, d) {
      return h * (v[d] ? 2 / v[d] : 0);
    });
    return {
      sign: v,
      isBound: s,
      isVerticalBound: f,
      isHorizontalBound: c,
      isSnap: !1,
      offset: p
    };
  });
}
function NC(t, e, r) {
  var n, a = Pf(t, e, [0, 0], !1).map(function(d) {
    return z(z({}, d), { multiple: d.multiple.map(function(m) {
      return tt(m) * 2;
    }) });
  }), s = Wd(t, a, r), u = Wo(s, 0), f = Wo(s, 1), c = 0, v = 0, p = u.isVerticalBound || f.isVerticalBound, h = u.isHorizontalBound || f.isHorizontalBound;
  return (p || h) && (n = k(cC({
    datas: r,
    distX: -u.offset[0],
    distY: -f.offset[1]
  }), 2), c = n[0], v = n[1]), {
    vertical: {
      isBound: p,
      offset: c
    },
    horizontal: {
      isBound: h,
      offset: v
    }
  };
}
function HC(t, e) {
  var r = [], n = t[0], a = t[1];
  return n && a ? r.push([[0, a * 2], t, [-n, a]], [[n * 2, 0], t, [n, -a]]) : n ? (r.push([[n * 2, 0], [n, 1], [n, -1]]), e && r.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : a ? (r.push([[0, a * 2], [1, a], [-1, a]]), e && r.push([[-1, 0], [-1, a], [-1, -a]], [[1, 0], [1, a], [1, -a]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function Pf(t, e, r, n) {
  var a = t.state, s = a.allMatrix, u = a.is3d, f = Vn(s, 100, 100, u ? 4 : 3), c = Dr(f, [0, 0]);
  return HC(r, n).map(function(v) {
    var p = k(v, 3), h = p[0], d = p[1], m = p[2], _ = [
      Dr(f, d),
      Dr(f, m)
    ], x = GC(_), y = kd(c, _), S = y.vertical, E = y.horizontal, R = If(c, _) <= 0;
    return {
      multiple: h,
      centerSign: R,
      verticalSign: S,
      horizontalSign: E,
      lineConstants: x,
      line: [
        Dr(e, d),
        Dr(e, m)
      ]
    };
  });
}
function $v(t, e, r, n) {
  var a = n ? t.map(function(s) {
    return ga(s, n);
  }) : t;
  return [
    [a[0], a[1]],
    [a[1], a[3]],
    [a[3], a[2]],
    [a[2], a[0]]
  ].some(function(s) {
    var u = If(r, s) <= 0;
    return !Ld(e, s, u);
  });
}
function YC(t) {
  var e = k(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  if (!a)
    return tt(r[0]);
  if (!s)
    return tt(r[1]);
  var u = s / a;
  return tt((-u * r[0] + r[1]) / Math.sqrt(Math.pow(u, 2) + 1));
}
function XC(t) {
  var e = k(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  if (!a)
    return [r[0], 0];
  if (!s)
    return [0, r[1]];
  var u = s / a, f = -u * r[0] + r[1];
  return [
    -f / (u + 1 / u),
    f / (u * u + 1)
  ];
}
function qC(t, e, r, n, a) {
  var s = t.props.innerBounds, u = a * Math.PI / 180;
  if (!s)
    return [];
  var f = s.left, c = s.top, v = s.width, p = s.height, h = f - n[0], d = f + v - n[0], m = c - n[1], _ = c + p - n[1], x = [
    [h, m],
    [d, m],
    [h, _],
    [d, _]
  ], y = Dr(r, [0, 0]);
  if (!$v(r, x, y, 0))
    return [];
  var S = [], E = x.map(function(R) {
    return [
      xe(R),
      _r([0, 0], R)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(R) {
    var O = _r([0, 0], XC(R)), T = YC(R);
    S.push.apply(S, st([], k(E.filter(function(C) {
      var D = k(C, 1), I = D[0];
      return I && T <= I;
    }).map(function(C) {
      var D = k(C, 2), I = D[0], A = D[1], B = Math.acos(I ? T / I : 0), H = A + B, W = A - B;
      return [
        u + H - O,
        u + W - O
      ];
    }).reduce(function(C, D) {
      return C.push.apply(C, st([], k(D), !1)), C;
    }, []).filter(function(C) {
      return !$v(e, x, y, C);
    }).map(function(C) {
      return Pt(C * 180 / Math.PI, qr);
    })), !1));
  }), S;
}
function UC(t) {
  var e = t.props.innerBounds, r = di();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, s = n.pos2, u = n.pos3, f = n.pos4, c = [a, s, u, f], v = Dr(c, [0, 0]), p = e.left, h = e.top, d = e.width, m = e.height, _ = [[p, h], [p, h + m]], x = [[p, h], [p + d, h]], y = [[p + d, h], [p + d, h + m]], S = [[p, h + m], [p + d, h + m]], E = Pf(t, c, [0, 0], !1), R = [], O = [];
  return E.forEach(function(T) {
    var C = T.line, D = T.lineConstants, I = kd(v, C), A = I.horizontal, B = I.vertical, H = yn(C, D, x, B, 1, !0), W = yn(C, D, S, B, 1, !0), G = yn(C, D, _, A, 1, !0), Y = yn(C, D, y, A, 1, !0);
    H.isBound && !r.top && (R.push(h), r.top = !0), W.isBound && !r.bottom && (R.push(h + m), r.bottom = !0), G.isBound && !r.left && (O.push(p), r.left = !0), Y.isBound && !r.right && (O.push(p + d), r.right = !0);
  }), {
    boundMap: r,
    horizontal: R,
    vertical: O
  };
}
function $C(t, e, r, n) {
  var a = e[0] - t[0], s = e[1] - t[1];
  if (tt(a) < yr && (a = 0), tt(s) < yr && (s = 0), !a)
    return n ? [0, 0] : [0, r];
  if (!s)
    return n ? [r, 0] : [0, 0];
  var u = s / a, f = t[1] - u * t[0];
  if (n) {
    var c = u * (e[0] + r) + f;
    return [r, c - e[1]];
  } else {
    var v = (e[1] + r - f) / u;
    return [v - e[0], r];
  }
}
function Ju(t, e, r, n, a) {
  var s = $C(t, e, r, n);
  if (!s)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var u = tn(t, e), f = tn(s, t), c = tn(s, e), v = f > u || c > u, p = k(Le({
    datas: a,
    distX: s[0],
    distY: s[1]
  }), 2), h = p[0], d = p[1];
  return {
    offset: [h, d],
    isOutside: v
  };
}
function No(t, e) {
  return t.isBound ? t.offset : e.isSnap ? Zu(e).offset : 0;
}
function VC(t, e, r, n, a) {
  var s = k(e, 2), u = s[0], f = s[1], c = k(r, 2), v = c[0], p = c[1], h = k(n, 2), d = h[0], m = h[1], _ = k(a, 2), x = _[0], y = _[1], S = -x, E = -y;
  if (t && u && f) {
    S = 0, E = 0;
    var R = [];
    if (v && p ? R.push([0, y], [x, 0]) : v ? R.push([x, 0]) : p ? R.push([0, y]) : d && m ? R.push([0, y], [x, 0]) : d ? R.push([x, 0]) : m && R.push([0, y]), R.length) {
      R.sort(function(D, I) {
        return xe(wt([u, f], D)) - xe(wt([u, f], I));
      });
      var O = R[0];
      if (O[0] && tt(u) > yr)
        S = -O[0], E = f * tt(u + S) / tt(u) - f;
      else if (O[1] && tt(f) > yr) {
        var T = f;
        E = -O[1], S = u * tt(f + E) / tt(T) - u;
      }
      if (t && p && v)
        if (tt(S) > yr && tt(S) < tt(x)) {
          var C = tt(x) / tt(S);
          S *= C, E *= C;
        } else if (tt(E) > yr && tt(E) < tt(y)) {
          var C = tt(y) / tt(E);
          S *= C, E *= C;
        } else
          S = Si(-x, S), E = Si(-y, E);
    }
  } else
    S = u || v ? -x : 0, E = f || p ? -y : 0;
  return [S, E];
}
function KC(t, e, r, n, a, s) {
  if (!Ti(t, "draggable"))
    return [
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      },
      {
        isSnap: !1,
        isBound: !1,
        offset: 0
      }
    ];
  var u = zf(s.absolutePoses, [e, r]), f = _e(u), c = f.left, v = f.right, p = f.top, h = f.bottom, d = {
    horizontal: u.map(function(Y) {
      return Y[1];
    }),
    vertical: u.map(function(Y) {
      return Y[0];
    })
  }, m = Tf(t.props.snapDirections), _ = Of(m, {
    left: c,
    right: v,
    top: p,
    bottom: h,
    center: (c + v) / 2,
    middle: (p + h) / 2
  }), x = es(t, a, _, d), y = x.vertical, S = x.horizontal, E = NC(t, u, s), R = E.vertical, O = E.horizontal, T = y.isSnap, C = S.isSnap, D = y.isBound || R.isBound, I = S.isBound || O.isBound, A = Si(y.offset, R.offset), B = Si(S.offset, O.offset), H = k(VC(n, [e, r], [D, I], [T, C], [A, B]), 2), W = H[0], G = H[1];
  return [
    {
      isBound: D,
      isSnap: T,
      offset: W
    },
    {
      isBound: I,
      isSnap: C,
      offset: G
    }
  ];
}
function es(t, e, r, n) {
  n === void 0 && (n = r);
  var a = Rf(ts(t), n.vertical, n.horizontal), s = a.horizontal, u = a.vertical, f = e ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : rs(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = f.horizontal, v = f.vertical, p = No(s[0], c), h = No(u[0], v), d = tt(p), m = tt(h);
  return {
    horizontal: {
      isBound: s[0].isBound,
      isSnap: c.isSnap,
      snapIndex: c.index,
      offset: p,
      dist: d,
      bounds: s,
      snap: c
    },
    vertical: {
      isBound: u[0].isBound,
      isSnap: v.isSnap,
      snapIndex: v.index,
      offset: h,
      dist: m,
      bounds: u,
      snap: v
    }
  };
}
function Vv(t, e, r, n, a, s, u) {
  u === void 0 && (u = [1, 1]);
  var f = Rf(e, r, n), c = f.horizontal, v = f.vertical, p = Gd(t, r, n, [], [], a, s, u), h = p.horizontal, d = p.vertical, m = No(c[0], h), _ = No(v[0], d), x = tt(m), y = tt(_);
  return {
    horizontal: {
      isBound: c[0].isBound,
      isSnap: h.isSnap,
      snapIndex: h.index,
      offset: m,
      dist: x,
      bounds: c,
      snap: h
    },
    vertical: {
      isBound: v[0].isBound,
      isSnap: d.isSnap,
      snapIndex: d.index,
      offset: _,
      dist: y,
      bounds: v,
      snap: d
    }
  };
}
function ZC(t, e, r, n) {
  var a = _r(t, e) / Math.PI * 180, s = r.vertical, u = s.isBound, f = s.isSnap, c = s.dist, v = r.horizontal, p = v.isBound, h = v.isSnap, d = v.dist, m = a % 180, _ = m < 3 || m > 177, x = m > 87 && m < 93;
  return d < c && (u || f && !x && (!n || !_)) ? "vertical" : p || h && !_ && (!n || !x) ? "horizontal" : "";
}
function JC(t, e, r, n, a, s) {
  return r.map(function(u) {
    var f = k(u, 2), c = f[0], v = f[1], p = Dr(e, c), h = Dr(e, v), d = n ? QC(t, p, h, a) : es(t, a, {
      vertical: [h[0]],
      horizontal: [h[1]]
    }), m = d.horizontal, _ = m.offset, x = m.isBound, y = m.isSnap, S = d.vertical, E = S.offset, R = S.isBound, O = S.isSnap, T = wt(v, c);
    if (!E && !_)
      return {
        isBound: R || x,
        isSnap: O || y,
        sign: T,
        offset: [0, 0]
      };
    var C = ZC(p, h, d, n);
    if (!C)
      return {
        sign: T,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var D = C === "vertical", I = [0, 0];
    return !n && tt(v[0]) === 1 && tt(v[1]) === 1 && c[0] !== v[0] && c[1] !== v[1] ? I = Le({
      datas: s,
      distX: -E,
      distY: -_
    }) : I = Ju(p, h, -(D ? E : _), D, s).offset, I = I.map(function(A, B) {
      return A * (T[B] ? 2 / T[B] : 0);
    }), {
      sign: T,
      isBound: D ? R : x,
      isSnap: D ? O : y,
      offset: I
    };
  });
}
function Kv(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function QC(t, e, r, n) {
  var a = TC(t, e, r), s = a.horizontal, u = a.vertical, f = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : FC(t, e, r), c = f.horizontal, v = f.vertical, p = Kv(s, c), h = Kv(u, v), d = tt(p), m = tt(h);
  return {
    horizontal: {
      isBound: s.isBound,
      isSnap: c.isSnap,
      offset: p,
      dist: d
    },
    vertical: {
      isBound: u.isBound,
      isSnap: v.isSnap,
      offset: h,
      dist: m
    }
  };
}
function jC(t, e, r, n, a) {
  var s = [-r[0], -r[1]], u = t.state, f = u.width, c = u.height, v = t.props.bounds, p = 1 / 0, h = 1 / 0;
  if (v) {
    var d = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], m = v.left, _ = m === void 0 ? -1 / 0 : m, x = v.top, y = x === void 0 ? -1 / 0 : x, S = v.right, E = S === void 0 ? 1 / 0 : S, R = v.bottom, O = R === void 0 ? 1 / 0 : R;
    d.forEach(function(T) {
      var C = T[0] !== s[0], D = T[1] !== s[1], I = Dr(e, T), A = _r(n, I) * 360 / Math.PI;
      if (D) {
        var B = I.slice();
        (tt(A - 360) < 2 || tt(A - 180) < 2) && (B[1] = n[1]);
        var H = Ju(n, B, (n[1] < I[1] ? O : y) - I[1], !1, a), W = k(H.offset, 2), G = W[1], Y = H.isOutside;
        isNaN(G) || (h = c + (Y ? 1 : -1) * tt(G));
      }
      if (C) {
        var B = I.slice();
        (tt(A - 90) < 2 || tt(A - 270) < 2) && (B[0] = n[0]);
        var X = Ju(n, B, (n[0] < I[0] ? E : _) - I[0], !0, a), rt = k(X.offset, 1), et = rt[0], Z = X.isOutside;
        isNaN(et) || (p = f + (Z ? 1 : -1) * tt(et));
      }
    });
  }
  return {
    maxWidth: p,
    maxHeight: h
  };
}
var Hr = {
  name: "draggable",
  props: [
    "draggable",
    "throttleDrag",
    "throttleDragRotate",
    "hideThrottleDragRotateLine",
    "startDragRotate",
    "edgeDraggable"
  ],
  events: [
    "dragStart",
    "drag",
    "dragEnd",
    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd"
  ],
  requestStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  requestChildStyle: function() {
    return ["left", "top", "right", "bottom"];
  },
  render: function(t, e) {
    var r = t.props, n = r.hideThrottleDragRotateLine, a = r.throttleDragRotate, s = r.zoom, u = t.getState(), f = u.dragInfo, c = u.beforeOrigin;
    if (n || !a || !f)
      return [];
    var v = f.dist;
    if (!v[0] && !v[1])
      return [];
    var p = xe(v), h = _r(v, [0, 0]);
    return [e.createElement("div", { className: Ct("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(p, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(h, "rad) scaleY(").concat(s, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, a = e.parentGesto, s = t.state, u = s.gestos, f = s.style;
    if (u.draggable)
      return !1;
    u.draggable = a || t.targetGesto, r.datas = {}, r.left = parseFloat(f.left || "") || 0, r.top = parseFloat(f.top || "") || 0, r.bottom = parseFloat(f.bottom || "") || 0, r.right = parseFloat(f.right || "") || 0, r.startValue = [0, 0], $n(t, e), jo(t, e, "translate"), _w(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = Ft(t, e, z({ set: function(p) {
      r.startValue = p;
    } }, Qo(t, e))), v = n || _t(t, "onDragStart", c);
    return v !== !1 ? (r.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (u.draggable = null, r.isPinch = !1), r.isDrag ? c : !1;
  },
  drag: function(t, e) {
    if (e) {
      Zo(t, e, "translate");
      var r = e.datas, n = e.parentEvent, a = e.parentFlag, s = e.isPinch, u = e.deltaOffset, f = e.useSnap, c = e.isRequest, v = e.isGroup, p = e.parentThrottleDrag, h = e.distX, d = e.distY, m = r.isDrag, _ = r.prevDist, x = r.prevBeforeDist, y = r.startValue;
      if (m) {
        u && (h += u[0], d += u[1]);
        var S = t.props, E = S.parentMoveable, R = v ? 0 : S.throttleDrag || p || 0, O = n ? 0 : S.throttleDragRotate || 0, T = 0, C = !1, D = !1, I = !1, A = !1;
        if (!n && O > 0 && (h || d)) {
          var B = S.startDragRotate || 0, H = Pt(B + _r([0, 0], [h, d]) * 180 / Math.PI, O) - B, W = d * Math.abs(Math.cos((H - 90) / 180 * Math.PI)), G = h * Math.abs(Math.cos(H / 180 * Math.PI)), Y = xe([G, W]);
          T = H * Math.PI / 180, h = Y * Math.cos(T), d = Y * Math.sin(T);
        }
        if (!s && !n && !a) {
          var X = k(KC(t, h, d, O, !f && c || u, r), 2), rt = X[0], et = X[1];
          C = rt.isSnap, D = rt.isBound, I = et.isSnap, A = et.isBound;
          var Z = rt.offset, it = et.offset;
          h += Z, d += it;
        }
        var at = Ut(bd({ datas: r, distX: h, distY: d }), y), $ = Ut(lC({ datas: r, distX: h, distY: d }), y);
        Rv($, qr), Rv(at, qr), O || (!C && !D && ($[0] = Pt($[0], R), at[0] = Pt(at[0], R)), !I && !A && ($[1] = Pt($[1], R), at[1] = Pt(at[1], R)));
        var lt = wt(at, y), pt = wt($, y), ft = wt(pt, _), ct = wt(lt, x);
        r.prevDist = pt, r.prevBeforeDist = lt, r.passDelta = ft, r.passDist = pt;
        var ot = r.left + lt[0], gt = r.top + lt[1], mt = r.right - lt[0], Tt = r.bottom - lt[1], Wt = Jo(r, "translate(".concat($[0], "px, ").concat($[1], "px)"), "translate(".concat(pt[0], "px, ").concat(pt[1], "px)"));
        if (Df(e, Wt), t.state.dragInfo.dist = n ? [0, 0] : pt, !(!n && !E && ft.every(function(Et) {
          return !Et;
        }) && ct.some(function(Et) {
          return !Et;
        }))) {
          var ut = t.state, vt = ut.width, Ot = ut.height, yt = Ft(t, e, z({ transform: Wt, dist: pt, delta: ft, translate: $, beforeDist: lt, beforeDelta: ct, beforeTranslate: at, left: ot, top: gt, right: mt, bottom: Tt, width: vt, height: Ot, isPinch: s }, Xr({
            transform: Wt
          }, e)));
          return !n && _t(t, "onDrag", yt), yt;
        }
      }
    }
  },
  dragAfter: function(t, e) {
    var r = e.datas, n = r.deltaOffset;
    return n[0] || n[1] ? (r.deltaOffset = [0, 0], this.drag(t, z(z({}, e), { deltaOffset: n }))) : !1;
  },
  dragEnd: function(t, e) {
    var r = e.parentEvent, n = e.datas;
    if (t.state.dragInfo = null, !!n.isDrag) {
      n.isDrag = !1;
      var a = se(t, e, {});
      return !r && _t(t, "onDragEnd", a), a;
    }
  },
  dragGroupStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = this.dragStart(t, e);
    if (!f)
      return !1;
    var c = wu(t, this, "dragStart", [
      s || 0,
      u || 0
    ], e, !1, "draggable"), v = c.childEvents, p = c.eventParams, h = z(z({}, f), { targets: t.props.targets, events: p }), d = _t(t, "onDragGroupStart", h);
    a.isDrag = d !== !1;
    var m = (n = (r = v[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return a.throttleOffset = [m[0] % 1, m[1] % 1], a.isDrag ? f : !1;
  },
  dragGroup: function(t, e) {
    var r = e.datas;
    if (r.isDrag) {
      var n = this.drag(t, z(z({}, e), { parentThrottleDrag: t.props.throttleDrag })), a = e.datas.passDelta, s = wu(t, this, "drag", a, e, !1, "draggable").eventParams;
      if (n) {
        var u = z({ targets: t.props.targets, events: s }, n);
        return _t(t, "onDragGroup", u), u;
      }
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isDrag) {
      this.dragEnd(t, e);
      var a = wu(t, this, "dragEnd", [0, 0], e, !1, "draggable").eventParams;
      return _t(t, "onDragGroupEnd", se(t, e, {
        targets: t.props.targets,
        events: a
      })), r;
    }
  },
  /**
       * @method Moveable.Draggable#request
       * @param {object} [e] - the draggable's request parameter
       * @param {number} [e.x] - x position
       * @param {number} [e.y] - y position
       * @param {number} [e.deltaX] - X number to move
       * @param {number} [e.deltaY] - Y number to move
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("draggable", { deltaX: 10, deltaY: 10 }, true);
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("draggable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * requester.request({ deltaX: 10, deltaY: 10 });
       * // Use Absolute Value
       * moveable.request("draggable", { x: 200, y: 100 });
       * moveable.request("draggable", { x: 220, y: 100 });
       * moveable.request("draggable", { x: 240, y: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = t.getRect(), n = 0, a = 0, s = !1;
    return {
      isControl: !1,
      requestStart: function(u) {
        return s = u.useSnap, { datas: e, useSnap: s };
      },
      request: function(u) {
        return "x" in u ? n = u.x - r.left : "deltaX" in u && (n += u.deltaX), "y" in u ? a = u.y - r.top : "deltaY" in u && (a += u.deltaY), { datas: e, distX: n, distY: a, useSnap: s };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0, useSnap: s };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.draggable = null, t.state.dragInfo = null;
  }
};
function Nd(t, e) {
  var r = Dr(t, e), n = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: e,
    fixedOffset: n
  };
}
function tw(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = [
    a / 2 * (1 + e[0]),
    s / 2 * (1 + e[1])
  ], c = vr(r, f, u), v = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: v
  };
}
function Hd(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = _C(e, a, s), c = vr(r, e, u), v = [
    a ? 0 : e[0],
    s ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: f,
    fixedOffset: v
  };
}
var Zv = kf("resizable"), Qu = {
  name: "resizable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "resizable",
    "throttleResize",
    "renderDirections",
    "displayAroundControls",
    "keepRatio",
    "resizeFormat",
    "keepRatioFinally",
    "edge",
    "checkResizableError"
  ],
  events: [
    "resizeStart",
    "beforeResize",
    "resize",
    "resizeEnd",
    "resizeGroupStart",
    "beforeResizeGroup",
    "resizeGroup",
    "resizeGroupEnd"
  ],
  render: Td("resizable"),
  dragControlCondition: Zv,
  viewClassName: Ff("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, a = e.isPinch, s = e.isGroup, u = e.parentDirection, f = e.parentGesto, c = e.datas, v = e.parentFixedDirection, p = e.parentEvent, h = rh(u, a, n, c), d = t.state, m = d.target, _ = d.width, x = d.height, y = d.gestos;
    if (!h || !m || y.resizable)
      return !1;
    y.resizable = f || t.controlGesto, !a && $n(t, e), c.datas = {}, c.direction = h, c.startOffsetWidth = _, c.startOffsetHeight = x, c.prevWidth = 0, c.prevHeight = 0, c.minSize = [0, 0], c.startWidth = d.inlineCSSWidth || d.cssWidth, c.startHeight = d.inlineCSSHeight || d.cssHeight, c.maxSize = [1 / 0, 1 / 0], s || (c.minSize = [
      d.minOffsetWidth,
      d.minOffsetHeight
    ], c.maxSize = [
      d.maxOffsetWidth,
      d.maxOffsetHeight
    ]);
    var S = t.props.transformOrigin || "% %";
    c.transformOrigin = Jr(S) ? S.split(" ") : S, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !h[0] && !h[1] || h[0] || !h[1];
    function E(A) {
      c.ratio = A && isFinite(A) ? A : 0;
    }
    c.startPositions = ye(t.state);
    function R(A) {
      var B = Nd(c.startPositions, A);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function O(A) {
      var B = Hd(t.state, A);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function T(A) {
      c.minSize = [
        rr("".concat(A[0]), 0) || 0,
        rr("".concat(A[1]), 0) || 0
      ];
    }
    function C(A) {
      var B = [
        A[0] || 1 / 0,
        A[1] || 1 / 0
      ];
      (!_i(B[0]) || isFinite(B[0])) && (B[0] = rr("".concat(B[0]), 0) || 1 / 0), (!_i(B[1]) || isFinite(B[1])) && (B[1] = rr("".concat(B[1]), 0) || 1 / 0), c.maxSize = B;
    }
    E(_ / x), R(v || [-h[0], -h[1]]), c.setFixedDirection = R, c.setFixedPosition = O, c.setMin = T, c.setMax = C;
    var D = Ft(t, e, {
      direction: h,
      startRatio: c.ratio,
      set: function(A) {
        var B = k(A, 2), H = B[0], W = B[1];
        c.startWidth = H, c.startHeight = W;
      },
      setMin: T,
      setMax: C,
      setRatio: E,
      setFixedDirection: R,
      setFixedPosition: O,
      setOrigin: function(A) {
        c.transformOrigin = A;
      },
      dragStart: Hr.dragStart(t, new yi().dragStart([0, 0], e))
    }), I = p || _t(t, "onResizeStart", D);
    return c.startFixedDirection = c.fixedDirection, c.startFixedPosition = c.fixedPosition, I !== !1 && (c.isResize = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: h
    }), c.isResize ? D : !1;
  },
  dragControl: function(t, e) {
    var r, n = e.datas, a = e.parentFlag, s = e.isPinch, u = e.parentKeepRatio, f = e.dragClient, c = e.parentDist, v = e.useSnap, p = e.isRequest, h = e.isGroup, d = e.parentEvent, m = e.resolveMatrix, _ = n.isResize, x = n.transformOrigin, y = n.startWidth, S = n.startHeight, E = n.prevWidth, R = n.prevHeight, O = n.minSize, T = n.maxSize, C = n.ratio, D = n.startOffsetWidth, I = n.startOffsetHeight, A = n.isWidth;
    if (!_)
      return;
    if (m) {
      var B = t.state.is3d, H = n.startOffsetMatrix, W = n.startTransformOrigin, G = B ? 4 : 3, Y = sa(ko(e)), X = Math.sqrt(Y.length);
      G !== X && (Y = Oe(Y, X, G));
      var rt = ba(H, Y, W, G), et = Vn(rt, D, I, G);
      n.startPositions = et, n.nextTargetMatrix = Y, n.nextAllMatrix = rt;
    }
    var Z = Un(t.props, "resizable"), it = Z.resizeFormat, at = Z.throttleResize, $ = at === void 0 ? a ? 0 : 1 : at, lt = Z.parentMoveable, pt = Z.keepRatioFinally, ft = n.direction, ct = ft, ot = 0, gt = 0;
    !ft[0] && !ft[1] && (ct = [1, 1]);
    var mt = C && (u ?? Z.keepRatio) || !1;
    function Tt() {
      var fr = n.fixedDirection, tr = sh(ct, mt, n, e);
      ot = tr.distWidth, gt = tr.distHeight;
      var ue = ct[0] - fr[0] || mt ? Math.max(D + ot, qr) : D, Ar = ct[1] - fr[1] || mt ? Math.max(I + gt, qr) : I;
      return mt && D && I && (A ? Ar = ue / C : ue = Ar * C), [ue, Ar];
    }
    var Wt = k(Tt(), 2), ut = Wt[0], vt = Wt[1];
    d || (n.setFixedDirection(n.fixedDirection), _t(t, "onBeforeResize", Ft(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(fr) {
        var tr;
        return n.setFixedDirection(fr), tr = k(Tt(), 2), ut = tr[0], vt = tr[1], [ut, vt];
      },
      setFixedPosition: function(fr) {
        var tr;
        return n.setFixedPosition(fr), tr = k(Tt(), 2), ut = tr[0], vt = tr[1], [ut, vt];
      },
      boundingWidth: ut,
      boundingHeight: vt,
      setSize: function(fr) {
        var tr;
        tr = k(fr, 2), ut = tr[0], vt = tr[1];
      }
    }, !0)));
    var Ot = f;
    f || (!a && s ? Ot = SC(t, [0, 0]) : Ot = n.fixedPosition);
    var yt = [0, 0];
    s || (yt = gw(t, ut, vt, ft, Ot, !v && p, n)), c && (!c[0] && (yt[0] = 0), !c[1] && (yt[1] = 0));
    function Et() {
      var fr;
      it && (fr = k(it([ut, vt]), 2), ut = fr[0], vt = fr[1]), ut = Pt(ut, $), vt = Pt(vt, $);
    }
    if (mt) {
      ct[0] && ct[1] && yt[0] && yt[1] && (tt(yt[0]) > tt(yt[1]) ? yt[1] = 0 : yt[0] = 0);
      var It = !yt[0] && !yt[1];
      It && Et(), ct[0] && !ct[1] || yt[0] && !yt[1] || It && A ? (ut += yt[0], vt = ut / C) : (!ct[0] && ct[1] || !yt[0] && yt[1] || It && !A) && (vt += yt[1], ut = vt * C);
    } else
      ut += yt[0], vt += yt[1], ut = Math.max(0, ut), vt = Math.max(0, vt);
    r = k(Ap([ut, vt], O, T, mt ? C : !1), 2), ut = r[0], vt = r[1], Et(), mt && (h || pt) && (A ? vt = ut / C : ut = vt * C), ot = ut - D, gt = vt - I;
    var At = [ot - E, gt - R];
    n.prevWidth = ot, n.prevHeight = gt;
    var $t = bC(t, ut, vt, Ot, x, n);
    if (!(!lt && At.every(function(fr) {
      return !fr;
    }) && $t.every(function(fr) {
      return !fr;
    }))) {
      var zt = Hr.drag(t, ya(e, t.state, $t, !!s, !1, "draggable")), Ht = zt.transform, Vt = y + ot, ur = S + gt, nr = Ft(t, e, z({ width: Vt, height: ur, offsetWidth: Math.round(ut), offsetHeight: Math.round(vt), startRatio: C, boundingWidth: ut, boundingHeight: vt, direction: ft, dist: [ot, gt], delta: At, isPinch: !!s, drag: zt }, nh({
        style: {
          width: "".concat(Vt, "px"),
          height: "".concat(ur, "px")
        },
        transform: Ht
      }, zt, e)));
      return !d && _t(t, "onResize", nr), nr;
    }
  },
  dragControlAfter: function(t, e) {
    var r = e.datas, n = r.isResize, a = r.startOffsetWidth, s = r.startOffsetHeight, u = r.prevWidth, f = r.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var c = t.state, v = c.width, p = c.height, h = v - (a + u), d = p - (s + f), m = tt(h) > 3, _ = tt(d) > 3;
      if (m && (r.startWidth += h, r.startOffsetWidth += h, r.prevWidth += h), _ && (r.startHeight += d, r.startOffsetHeight += d, r.prevHeight += d), m || _)
        return this.dragControl(t, e);
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.parentEvent;
    if (r.isResize) {
      r.isResize = !1;
      var a = se(t, e, {});
      return !n && _t(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: Zv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, z(z({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = Re(t, "resizable", e), s = r.startOffsetWidth, u = r.startOffsetHeight;
    function f() {
      var m = r.minSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.minSize, S = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (S ? y[0] / S : 0), O = u * (E ? y[1] / E : 0);
        m[0] = Math.max(m[0], R), m[1] = Math.max(m[1], O);
      });
    }
    function c() {
      var m = r.maxSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.maxSize, S = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (S ? y[0] / S : 0), O = u * (E ? y[1] / E : 0);
        m[0] = Math.min(m[0], R), m[1] = Math.min(m[1], O);
      });
    }
    var v = rn(t, this, "dragControlStart", e, function(m, _) {
      return Lo(t, m, r, _);
    });
    f(), c();
    var p = function(m) {
      n.setFixedDirection(m), v.forEach(function(_, x) {
        _.setFixedDirection(m), Lo(t, _.moveable, r, a[x]);
      });
    };
    r.setFixedDirection = p;
    var h = z(z({}, n), { targets: t.props.targets, events: v.map(function(m) {
      return z(z({}, m), { setMin: function(_) {
        m.setMin(_), f();
      }, setMax: function(_) {
        m.setMax(_), c();
      } });
    }), setFixedDirection: p, setMin: function(m) {
      n.setMin(m), f();
    }, setMax: function(m) {
      n.setMax(m), c();
    } }), d = _t(t, "onResizeGroupStart", h);
    return r.isResize = d !== !1, r.isResize ? n : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isResize) {
      var n = Un(t.props, "resizable");
      is(t, "onBeforeResize", function(m) {
        _t(t, "onBeforeResizeGroup", Ft(t, e, z(z({}, m), { targets: n.targets }), !0));
      });
      var a = this.dragControl(t, z(z({}, e), { isGroup: !0 }));
      if (a) {
        var s = a.boundingWidth, u = a.boundingHeight, f = a.dist, c = n.keepRatio, v = [
          s / (s - f[0]),
          u / (u - f[1])
        ], p = r.fixedPosition, h = rn(t, this, "dragControl", e, function(m, _) {
          var x = k(Fr(ma(t.rotation / 180 * Math.PI, 3), [
            _.datas.originalX * v[0],
            _.datas.originalY * v[1],
            1
          ], 3), 2), y = x[0], S = x[1];
          return z(z({}, _), { parentDist: null, parentScale: v, dragClient: Ut(p, [y, S]), parentKeepRatio: c });
        }), d = z({ targets: n.targets, events: h }, a);
        return _t(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var a = rn(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return _t(t, "onResizeGroupEnd", s), r;
    }
  },
  /**
       * @method Moveable.Resizable#request
       * @param {Moveable.Resizable.ResizableRequestParam} e - the Resizable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * // Use Relative Value
       * moveable.request("resizable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 }, true);
       *
       * // requestStart
       * const requester = moveable.request("resizable");
       *
       * // request
       * // Use Relative Value
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // Use Absolute Value
       * moveable.request("resizable", { offsetWidth: 100, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 110, offsetHeight: 100 });
       * moveable.request("resizable", { offsetWidth: 120, offsetHeight: 100 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = 0, n = 0, a = !1, s = t.getRect();
    return {
      isControl: !0,
      requestStart: function(u) {
        var f;
        return a = u.useSnap, {
          datas: e,
          parentDirection: u.direction || [1, 1],
          parentIsWidth: (f = u?.horizontal) !== null && f !== void 0 ? f : !0,
          useSnap: a
        };
      },
      request: function(u) {
        return "offsetWidth" in u ? r = u.offsetWidth - s.offsetWidth : "deltaWidth" in u && (r += u.deltaWidth), "offsetHeight" in u ? n = u.offsetHeight - s.offsetHeight : "deltaHeight" in u && (n += u.deltaHeight), {
          datas: e,
          parentDist: [r, n],
          parentKeepRatio: u.keepRatio,
          useSnap: a
        };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0, useSnap: a };
      }
    };
  },
  unset: function(t) {
    t.state.gestos.resizable = null;
  }
};
function Eu(t, e, r, n, a) {
  var s = t.props.groupable, u = t.state, f = u.is3d ? 4 : 3, c = e.origin, v = vr(
    t.state.rootMatrix,
    // TO-DO #710
    wt([c[0], c[1]], s ? [0, 0] : [u.left, u.top]),
    f
  ), p = Ut([a.left, a.top], v);
  e.startAbsoluteOrigin = p, e.prevDeg = _r(p, [r, n]) / Math.PI * 180, e.defaultDeg = e.prevDeg, e.prevSnapDeg = 0, e.loop = 0, e.startDist = tn(p, [r, n]);
}
function Ao(t, e, r) {
  var n = r.defaultDeg, a = r.prevDeg, s = a % 360, u = Math.floor(a / 360);
  s < 0 && (s += 360), s > t && s > 270 && t < 90 ? ++u : s < t && s < 90 && t > 270 && --u;
  var f = e * (u * 360 + t - n);
  return r.prevDeg = n + f, f;
}
function Du(t, e, r, n) {
  return Ao(_r(n.startAbsoluteOrigin, [t, e]) / Math.PI * 180, r, n);
}
function Mu(t, e, r, n, a, s) {
  var u = t.props.throttleRotate, f = u === void 0 ? 0 : u, c = r.prevSnapDeg, v = 0, p = !1;
  if (s) {
    var h = hw(t, e, n, a + n);
    p = h.isSnap, v = a + h.dist;
  }
  p || (v = Pt(a + n, f));
  var d = v - a;
  return r.prevSnapDeg = d, [d - c, d, v];
}
function Yd(t, e, r) {
  var n = k(e, 4), a = n[0], s = n[1], u = n[2], f = n[3];
  if (t === "none")
    return [];
  if (br(t))
    return t.map(function(y) {
      return Yd(y, [a, s, u, f], r)[0];
    });
  var c = k((t || "top").split("-"), 2), v = c[0], p = c[1], h = [a, s];
  v === "left" ? h = [u, a] : v === "right" ? h = [s, f] : v === "bottom" && (h = [f, u]);
  var d = [
    (h[0][0] + h[1][0]) / 2,
    (h[0][1] + h[1][1]) / 2
  ], m = jd(h, r);
  if (p) {
    var _ = p === "top" || p === "left", x = v === "bottom" || v === "left";
    d = h[_ && !x || !_ && x ? 0 : 1];
  }
  return [[d, m]];
}
function ju(t, e) {
  if (e.isRequest)
    return e.requestAble === "rotatable";
  var r = e.inputEvent.target;
  if (Er(r, Ct("rotation-control")) || t.props.rotateAroundControls && Er(r, Ct("around-control")) || Er(r, Ct("control")) && Er(r, Ct("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Lf(n, !0).some(function(a) {
    return a ? r === a || r.contains(a) : !1;
  }) : !1;
}
var rw = `.rotation {
position: absolute;
height: 40px;
width: 1px;
transform-origin: 50% 100%;
height: calc(40px * var(--zoom));
top: auto;
left: 0;
bottom: 100%;
will-change: transform;
}
.rotation .rotation-line {
display: block;
width: 100%;
height: 100%;
transform-origin: 50% 50%;
}
.rotation .rotation-control {
border-color: #4af;
border-color: var(--moveable-color);
background:#fff;
cursor: alias;
}
:global .view-rotation-dragging, .rotatable.direction.control {
cursor: alias;
}
.rotatable.direction.control.move {
cursor: move;
}
`, ew = {
  name: "rotatable",
  canPinch: !0,
  props: [
    "rotatable",
    "rotationPosition",
    "throttleRotate",
    "renderDirections",
    "rotationTarget",
    "rotateAroundControls",
    "edge",
    "resolveAblesWithRotatable",
    "displayAroundControls"
  ],
  events: [
    "rotateStart",
    "beforeRotate",
    "rotate",
    "rotateEnd",
    "rotateGroupStart",
    "beforeRotateGroup",
    "rotateGroup",
    "rotateGroupEnd"
  ],
  css: [rw],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? Ct("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = Un(t.props, "rotatable"), n = r.rotatable, a = r.rotationPosition, s = r.zoom, u = r.renderDirections, f = r.rotateAroundControls, c = r.resolveAblesWithRotatable, v = t.getState(), p = v.renderPoses, h = v.direction;
    if (!n)
      return null;
    var d = Yd(a, p, h), m = [];
    if (d.forEach(function(S, E) {
      var R = k(S, 2), O = R[0], T = R[1];
      m.push(e.createElement(
        "div",
        { key: "rotation".concat(E), className: Ct("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(O[0], "px, ").concat(O[1], "px) rotate(").concat(T, "rad)")
        } },
        e.createElement("div", { className: Ct("line rotation-line"), style: {
          transform: "scaleX(".concat(s, ")")
        } }),
        e.createElement("div", { className: Ct("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(s, ")")
        } })
      ));
    }), u) {
      var _ = nn(c || {}), x = {};
      _.forEach(function(S) {
        c[S].forEach(function(E) {
          x[E] = S;
        });
      });
      var y = [];
      br(u) && (y = u.map(function(S) {
        var E = x[S];
        return {
          data: E ? { resolve: E } : {},
          classNames: E ? ["move"] : [],
          dir: S
        };
      })), m.push.apply(m, st([], k(Dd(t, "rotatable", y, e)), !1));
    }
    return f && m.push.apply(m, st([], k(Id(t, e)), !1)), m;
  },
  dragControlCondition: ju,
  dragControlStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = e.parentRotate, c = e.parentFlag, v = e.isPinch, p = e.isRequest, h = t.state, d = h.target, m = h.left, _ = h.top, x = h.direction, y = h.beforeDirection, S = h.targetTransform, E = h.moveableClientRect, R = h.offsetMatrix, O = h.targetMatrix, T = h.allMatrix, C = h.width, D = h.height;
    if (!p && !d)
      return !1;
    var I = t.getRect();
    a.rect = I, a.transform = S, a.left = m, a.top = _;
    var A = function(ct) {
      var ot = Hd(t.state, ct);
      a.fixedDirection = ot.fixedDirection, a.fixedOffset = ot.fixedOffset, a.fixedPosition = ot.fixedPosition, $ && $.setFixedPosition(ct);
    }, B = function(ct) {
      var ot = tw(t.state, ct);
      a.fixedDirection = ot.fixedDirection, a.fixedOffset = ot.fixedOffset, a.fixedPosition = ot.fixedPosition, $ && $.setFixedDirection(ct);
    }, H = s, W = u;
    if (p || v || c) {
      var G = f || 0;
      a.beforeInfo = {
        origin: I.beforeOrigin,
        prevDeg: G,
        defaultDeg: G,
        prevSnapDeg: 0,
        startDist: 0
      }, a.afterInfo = z(z({}, a.beforeInfo), { origin: I.origin }), a.absoluteInfo = z(z({}, a.beforeInfo), { origin: I.origin, startValue: G });
    } else {
      var Y = (n = e.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (Y) {
        var X = Y.getAttribute("data-direction") || "", rt = uC[X];
        if (rt) {
          a.isControl = !0, a.isAroundControl = Er(Y, Ct("around-control")), a.controlDirection = rt;
          var et = Y.getAttribute("data-resolve");
          et && (a.resolveAble = et);
          var Z = Iw(h.rootMatrix, h.renderPoses, E);
          r = k(Dr(Z, rt), 2), H = r[0], W = r[1];
        }
      }
      a.beforeInfo = { origin: I.beforeOrigin }, a.afterInfo = { origin: I.origin }, a.absoluteInfo = {
        origin: I.origin,
        startValue: I.rotation
      };
      var it = A;
      A = function(ct) {
        var ot = h.is3d ? 4 : 3, gt = k(Ut(ad(O, ot), ct), 2), mt = gt[0], Tt = gt[1], Wt = Fr(R, Yn([mt, Tt], ot)), ut = Fr(T, Yn([ct[0], ct[1]], ot));
        it(ct);
        var vt = h.posDelta;
        a.beforeInfo.origin = wt(Wt, vt), a.afterInfo.origin = wt(ut, vt), a.absoluteInfo.origin = wt(ut, vt), Eu(t, a.beforeInfo, H, W, E), Eu(t, a.afterInfo, H, W, E), Eu(t, a.absoluteInfo, H, W, E);
      }, B = function(ct) {
        var ot = Dr([
          [0, 0],
          [C, 0],
          [0, D],
          [C, D]
        ], ct);
        A(ot);
      };
    }
    a.startClientX = H, a.startClientY = W, a.direction = x, a.beforeDirection = y, a.startValue = 0, a.datas = {}, jo(t, e, "rotate");
    var at = !1, $ = !1;
    if (a.isControl && a.resolveAble) {
      var lt = a.resolveAble;
      lt === "resizable" && ($ = Qu.dragControlStart(t, z(z({}, new yi("resizable").dragStart([0, 0], e)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    $ || (at = Hr.dragStart(t, new yi().dragStart([0, 0], e))), A(Pw(t));
    var pt = Ft(t, e, z(z({ set: function(ct) {
      a.startValue = ct * Math.PI / 180;
    }, setFixedDirection: B, setFixedPosition: A }, Qo(t, e)), { dragStart: at, resizeStart: $ })), ft = _t(t, "onRotateStart", pt);
    return a.isRotate = ft !== !1, h.snapRenderInfo = {
      request: e.isRequest
    }, a.isRotate ? pt : !1;
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.clientDistX, f = e.clientDistY, c = e.parentRotate, v = e.parentFlag, p = e.isPinch, h = e.groupDelta, d = e.resolveMatrix, m = s.beforeDirection, _ = s.beforeInfo, x = s.afterInfo, y = s.absoluteInfo, S = s.isRotate, E = s.startValue, R = s.rect, O = s.startClientX, T = s.startClientY;
    if (S) {
      Zo(t, e, "rotate");
      var C = fC(e), D = m * C, I = t.props.parentMoveable, A = 0, B, H, W = 0, G, Y, X = 0, rt, et, Z = 180 / Math.PI * E, it = y.startValue, at = !1, $ = O + u, lt = T + f;
      if (!v && "parentDist" in e) {
        var pt = e.parentDist;
        B = pt, G = pt, rt = pt;
      } else p || v ? (B = Ao(c, m, _), G = Ao(c, D, x), rt = Ao(c, D, y)) : (B = Du($, lt, m, _), G = Du($, lt, D, x), rt = Du($, lt, D, y), at = !0);
      if (H = Z + B, Y = Z + G, et = it + rt, _t(t, "onBeforeRotate", Ft(t, e, {
        beforeRotation: H,
        rotation: Y,
        absoluteRotation: et,
        setRotation: function(Ot) {
          G = Ot - Z, B = G, rt = G;
        }
      }, !0)), r = k(Mu(t, R, _, B, Z, at), 3), A = r[0], B = r[1], H = r[2], n = k(Mu(t, R, x, G, Z, at), 3), W = n[0], G = n[1], Y = n[2], a = k(Mu(t, R, y, rt, it, at), 3), X = a[0], rt = a[1], et = a[2], !(!X && !W && !A && !I && !d)) {
        var ft = Jo(s, "rotate(".concat(Y, "deg)"), "rotate(".concat(G, "deg)"));
        d && (s.fixedPosition = Mf(t, s.targetAllTransform, s.fixedDirection, s.fixedOffset, s));
        var ct = yC(t, G, s), ot = wt(Ut(h || [0, 0], ct), s.prevInverseDist || [0, 0]);
        s.prevInverseDist = ct, s.requestValue = null;
        var gt = Cd(t, ft, ot, p, e), mt = gt, Tt = tn([$, lt], y.startAbsoluteOrigin) - y.startDist, Wt = void 0;
        if (s.resolveAble === "resizable") {
          var ut = Qu.dragControl(t, z(z({}, ya(e, t.state, [e.deltaX, e.deltaY], !!p, !1, "resizable")), { resolveMatrix: !0, parentDistance: Tt }));
          ut && (Wt = ut, mt = nh(mt, ut, e));
        }
        var vt = Ft(t, e, z(z({ delta: W, dist: G, rotate: Y, rotation: Y, beforeDist: B, beforeDelta: A, beforeRotate: H, beforeRotation: H, absoluteDist: rt, absoluteDelta: X, absoluteRotate: et, absoluteRotation: et, isPinch: !!p, resize: Wt }, gt), mt));
        return _t(t, "onRotate", vt), vt;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = se(t, e, {});
      return _t(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: ju,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = t.state, a = n.left, s = n.top, u = n.beforeOrigin, f = this.dragControlStart(t, e);
    if (!f)
      return !1;
    f.set(r.beforeDirection * t.rotation);
    var c = rn(t, this, "dragControlStart", e, function(h, d) {
      var m = h.state, _ = m.left, x = m.top, y = m.beforeOrigin, S = Ut(wt([_, x], [a, s]), wt(y, u));
      return d.datas.startGroupClient = S, d.datas.groupClient = S, z(z({}, d), { parentRotate: 0 });
    }), v = z(z({}, f), { targets: t.props.targets, events: c }), p = _t(t, "onRotateGroupStart", v);
    return r.isRotate = p !== !1, r.isRotate ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      is(t, "onBeforeRotate", function(v) {
        _t(t, "onBeforeRotateGroup", Ft(t, e, z(z({}, v), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = r.beforeDirection, s = n.beforeDist, u = s / 180 * Math.PI, f = rn(t, this, "dragControl", e, function(v, p) {
          var h = p.datas.startGroupClient, d = k(p.datas.groupClient, 2), m = d[0], _ = d[1], x = k(ga(h, u * a), 2), y = x[0], S = x[1], E = [y - m, S - _];
          return p.datas.groupClient = [y, S], z(z({}, p), { parentRotate: s, groupDelta: E });
        });
        t.rotation = a * n.beforeRotation;
        var c = z({ targets: t.props.targets, events: f, set: function(v) {
          t.rotation = v;
        }, setGroupRotation: function(v) {
          t.rotation = v;
        } }, n);
        return _t(t, "onRotateGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, e);
      var a = rn(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return _t(t, "onRotateGroupEnd", s), r;
    }
  },
  /**
       * @method Moveable.Rotatable#request
       * @param {object} [e] - the Resizable's request parameter
       * @param {number} [e.deltaRotate=0] -  delta number of rotation
       * @param {number} [e.rotate=0] - absolute number of moveable's rotation
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("rotatable", { deltaRotate: 10 }, true);
       *
       * * moveable.request("rotatable", { rotate: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("rotatable");
       *
       * // request
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       * requester.request({ deltaRotate: 10 });
       *
       * requester.request({ rotate: 10 });
       * requester.request({ rotate: 20 });
       * requester.request({ rotate: 30 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function(t) {
    var e = {}, r = 0, n = t.getRotation();
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: e };
      },
      request: function(a) {
        return "deltaRotate" in a ? r += a.deltaRotate : "rotate" in a && (r = a.rotate - n), { datas: e, parentDist: r };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0 };
      }
    };
  }
};
function nw(t, e) {
  var r, n = t.direction, a = t.classNames, s = t.size, u = t.pos, f = t.zoom, c = t.key, v = n === "horizontal", p = v ? "Y" : "X";
  return e.createElement("div", {
    key: c,
    className: a.join(" "),
    style: (r = {}, r[v ? "width" : "height"] = "".concat(s), r.transform = "translate(".concat(u[0], ", ").concat(u[1], ") translate").concat(p, "(-50%) scale").concat(p, "(").concat(f, ")"), r)
  });
}
function Af(t, e) {
  return nw(z(z({}, t), { classNames: st([
    Ct("line", "guideline", t.direction)
  ], k(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(Pt(r, 0.1), "px");
  }) }), e);
}
function Jv(t, e, r, n, a, s, u, f) {
  var c = t.props.zoom;
  return r.map(function(v, p) {
    var h = v.type, d = v.pos, m = [0, 0];
    return m[u] = n, m[u ? 0 : 1] = -a + d, Af({
      key: "".concat(e, "TargetGuideline").concat(p),
      classNames: [Ct("target", "bold", h)],
      posValue: m,
      sizeValue: s,
      zoom: c,
      direction: e
    }, f);
  });
}
function Qv(t, e, r, n, a, s) {
  var u = t.props, f = u.zoom, c = u.isDisplayInnerSnapDigit, v = e === "horizontal" ? Cn : wn, p = a[v.start], h = a[v.end];
  return r.filter(function(d) {
    var m = d.hide, _ = d.elementRect;
    if (m)
      return !1;
    if (c && _) {
      var x = _.rect;
      if (x[v.start] <= p && h <= x[v.end])
        return !1;
    }
    return !0;
  }).map(function(d, m) {
    var _ = d.pos, x = d.size, y = d.element, S = d.className, E = [
      -n[0] + _[0],
      -n[1] + _[1]
    ];
    return Af({
      key: "".concat(e, "-default-guideline-").concat(m),
      classNames: y ? [Ct("bold"), S] : [Ct("normal"), S],
      direction: e,
      posValue: E,
      sizeValue: x,
      zoom: f
    }, s);
  });
}
function Ji(t, e, r, n, a, s, u, f) {
  var c, v = t.props, p = v.snapDigit, h = p === void 0 ? 0 : p, d = v.isDisplaySnapDigit, m = d === void 0 ? !0 : d, _ = v.snapDistFormat, x = _ === void 0 ? function(T, C) {
    return T;
  } : _, y = v.zoom, S = e === "horizontal" ? "X" : "Y", E = e === "vertical" ? "height" : "width", R = Math.abs(a), O = m ? parseFloat(R.toFixed(h)) : 0;
  return f.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: Ct("guideline-group", e), style: (c = {
      left: "".concat(s[0], "px"),
      top: "".concat(s[1], "px")
    }, c[E] = "".concat(R, "px"), c) },
    Af({
      direction: e,
      classNames: [Ct(r), u],
      size: "100%",
      posValue: [0, 0],
      sizeValue: R,
      zoom: y
    }, f),
    f.createElement("div", { className: Ct("size-value", "gap"), style: {
      transform: "translate".concat(S, "(-50%) scale(").concat(y, ")")
    } }, O > 0 ? x(O, e) : "")
  );
}
function iw(t, e, r, n) {
  var a = t === "vertical" ? 0 : 1, s = t === "vertical" ? 1 : 0, u = a ? Cn : wn, f = r[u.start], c = r[u.end];
  return ih(e, function(v) {
    return v.pos[a];
  }).map(function(v) {
    var p = [], h = [], d = [];
    return v.forEach(function(m) {
      var _, x, y = m.element, S = m.elementRect.rect;
      if (S[u.end] < f)
        p.push(m);
      else if (c < S[u.start])
        h.push(m);
      else if (S[u.start] <= f && c <= S[u.end] && n) {
        var E = m.pos, R = { element: y, rect: z(z({}, S), (_ = {}, _[u.end] = S[u.start], _)) }, O = { element: y, rect: z(z({}, S), (x = {}, x[u.start] = S[u.end], x)) }, T = [0, 0], C = [0, 0];
        T[a] = E[a], T[s] = E[s], C[a] = E[a], C[s] = E[s] + m.size, p.push({
          type: t,
          pos: T,
          size: 0,
          elementRect: R,
          direction: "",
          elementDirection: "end"
        }), h.push({
          type: t,
          pos: C,
          size: 0,
          elementRect: O,
          direction: "",
          elementDirection: "start"
        });
      }
    }), p.sort(function(m, _) {
      return _.pos[s] - m.pos[s];
    }), h.sort(function(m, _) {
      return m.pos[s] - _.pos[s];
    }), {
      total: v,
      start: p,
      end: h,
      inner: d
    };
  });
}
function aw(t, e, r, n, a) {
  var s = t.props.isDisplayInnerSnapDigit, u = [];
  return ["vertical", "horizontal"].forEach(function(f) {
    var c = e.filter(function(y) {
      return y.type === f;
    }), v = f === "vertical" ? 1 : 0, p = v ? 0 : 1, h = iw(f, c, n, s), d = v ? wn : Cn, m = v ? Cn : wn, _ = n[d.start], x = n[d.end];
    h.forEach(function(y) {
      var S = y.total, E = y.start, R = y.end, O = y.inner, T = r[p] + S[0].pos[p] - n[m.start], C = n;
      E.forEach(function(D) {
        var I = D.elementRect.rect, A = C[d.start] - I[d.end];
        if (A > 0) {
          var B = [0, 0];
          B[v] = r[v] + C[d.start] - _ - A, B[p] = T, u.push(Ji(t, f, "dashed", u.length, A, B, D.className, a));
        }
        C = I;
      }), C = n, R.forEach(function(D) {
        var I = D.elementRect.rect, A = I[d.start] - C[d.end];
        if (A > 0) {
          var B = [0, 0];
          B[v] = r[v] + C[d.end] - _, B[p] = T, u.push(Ji(t, f, "dashed", u.length, A, B, D.className, a));
        }
        C = I;
      }), O.forEach(function(D) {
        var I = D.elementRect.rect, A = _ - I[d.start], B = I[d.end] - x, H = [0, 0], W = [0, 0];
        H[v] = r[v] - A, H[p] = T, W[v] = r[v] + x - _, W[p] = T, u.push(Ji(t, f, "dashed", u.length, A, H, D.className, a)), u.push(Ji(t, f, "dashed", u.length, B, W, D.className, a));
      });
    });
  }), u;
}
function ow(t, e, r, n, a) {
  var s = [];
  return ["horizontal", "vertical"].forEach(function(u) {
    var f = e.filter(function(y) {
      return y.type === u;
    }).slice(0, 1), c = u === "vertical" ? 0 : 1, v = c ? 0 : 1, p = c ? wn : Cn, h = c ? Cn : wn, d = n[p.start], m = n[p.end], _ = n[h.start], x = n[h.end];
    f.forEach(function(y) {
      var S = y.gap, E = y.gapRects, R = Math.max.apply(Math, st([_], k(E.map(function(C) {
        var D = C.rect;
        return D[h.start];
      })), !1)), O = Math.min.apply(Math, st([x], k(E.map(function(C) {
        var D = C.rect;
        return D[h.end];
      })), !1)), T = (R + O) / 2;
      R === O || T === (_ + x) / 2 || E.forEach(function(C) {
        var D = C.rect, I = C.className, A = [r[0], r[1]];
        if (D[p.end] < d)
          A[c] += D[p.end] - d;
        else if (m < D[p.start])
          A[c] += D[p.start] - d - S;
        else
          return;
        A[v] += T - _, s.push(Ji(t, c ? "vertical" : "horizontal", "gap", s.length, S, A, I, a));
      });
    });
  }), s;
}
function tf(t) {
  var e, r, n = t.state, a = n.containerClientRect, s = n.hasFixed, u = a.overflow, f = a.scrollHeight, c = a.scrollWidth, v = a.clientHeight, p = a.clientWidth, h = a.clientLeft, d = a.clientTop, m = t.props, _ = m.snapGap, x = _ === void 0 ? !0 : _, y = m.verticalGuidelines, S = m.horizontalGuidelines, E = m.snapThreshold, R = E === void 0 ? 5 : E, O = m.maxSnapElementGuidelineDistance, T = O === void 0 ? 1 / 0 : O, C = m.isDisplayGridGuidelines, D = _e(ye(t.state)), I = D.top, A = D.left, B = D.bottom, H = D.right, W = { top: I, left: A, bottom: B, right: H, center: (A + H) / 2, middle: (I + B) / 2 }, G = lw(t), Y = st([], k(G), !1), X = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(it) {
    return it * R;
  });
  x && Y.push.apply(Y, st([], k(sw(t, W, X)), !1));
  var rt = z({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (Y.push.apply(Y, st([], k(fw(t, u ? c : p, u ? f : v, h, d, rt, C)), !1)), s) {
    var et = a.left, Z = a.top;
    rt.left += et, rt.top += Z, rt.right += et, rt.bottom += Z;
  }
  return Y.push.apply(Y, st([], k(qd(S || !1, y || !1, u ? c : p, u ? f : v, h, d, rt)), !1)), Y = Y.filter(function(it) {
    var at = it.element, $ = it.elementRect, lt = it.type;
    if (!at || !$)
      return !0;
    var pt = $.rect;
    return Xd(W, pt, lt, T);
  }), Y;
}
function sw(t, e, r) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, s = a === void 0 ? 1 / 0 : a, u = n.maxSnapElementGapDistance, f = u === void 0 ? 1 / 0 : u, c = t.state.elementRects, v = [];
  return [
    ["vertical", Cn, wn],
    ["horizontal", wn, Cn]
  ].forEach(function(p) {
    var h = k(p, 3), d = h[0], m = h[1], _ = h[2], x = e[m.start], y = e[m.end], S = e[m.center], E = e[_.start], R = e[_.end], O = {
      left: r[0],
      top: r[1]
    };
    function T(I) {
      var A = I.rect, B = O[m.start];
      return A[m.end] < x + B ? x - A[m.end] : y - B < A[m.start] ? A[m.start] - y : -1;
    }
    var C = c.filter(function(I) {
      var A = I.rect;
      return A[_.start] > R || A[_.end] < E ? !1 : T(I) > 0;
    }).sort(function(I, A) {
      return T(I) - T(A);
    }), D = [];
    C.forEach(function(I) {
      C.forEach(function(A) {
        if (I !== A) {
          var B = I.rect, H = A.rect, W = B[_.start], G = B[_.end], Y = H[_.start], X = H[_.end];
          W > X || Y > G || D.push([I, A]);
        }
      });
    }), D.forEach(function(I) {
      var A = k(I, 2), B = A[0], H = A[1], W = B.rect, G = H.rect, Y = W[m.start], X = W[m.end], rt = G[m.start], et = G[m.end], Z = O[m.start], it = 0, at = 0, $ = !1, lt = !1, pt = !1;
      if (X <= x && y <= rt) {
        if (lt = !0, it = (rt - X - (y - x)) / 2, at = X + it + (y - x) / 2, tt(at - S) > Z)
          return;
      } else if (X < rt && et < x + Z) {
        if ($ = !0, it = rt - X, at = et + it, tt(at - x) > Z)
          return;
      } else if (X < rt && y - Z < Y) {
        if (pt = !0, it = rt - X, at = Y - it, tt(at - y) > Z)
          return;
      } else
        return;
      it && Xd(e, G, d, s) && (it > f || v.push({
        type: d,
        pos: d === "vertical" ? [at, 0] : [0, at],
        element: H.element,
        size: 0,
        className: H.className,
        isStart: $,
        isCenter: lt,
        isEnd: pt,
        gap: it,
        hide: !0,
        gapRects: [B, H],
        direction: "",
        elementDirection: ""
      }));
    });
  }), v;
}
function uw(t, e, r, n) {
  var a, s, u = t.props, f = t.state, c = u.snapGridAll, v = u.snapGridWidth, p = v === void 0 ? 0 : v, h = u.snapGridHeight, d = h === void 0 ? 0 : h, m = f.snapRenderInfo, _ = m && (((a = m.direction) === null || a === void 0 ? void 0 : a[0]) || ((s = m.direction) === null || s === void 0 ? void 0 : s[1])), x = t.moveables;
  if (c && x && _ && (p || d)) {
    if (f.snapThresholdInfo)
      return;
    f.snapThresholdInfo = {
      multiples: [1, 1],
      offset: [0, 0]
    };
    var y = t.getRect(), S = y.children, E = m.direction;
    if (S) {
      var R = E.map(function(T, C) {
        var D = C === 0 ? {
          snapSize: p,
          posName: "left",
          sizeName: "width",
          clientOffset: n.left - e
        } : {
          snapSize: d,
          posName: "top",
          sizeName: "height",
          clientOffset: n.top - r
        }, I = D.snapSize, A = D.posName, B = D.sizeName, H = D.clientOffset;
        if (!I)
          return {
            dir: T,
            multiple: 1,
            snapSize: I,
            snapOffset: 0
          };
        var W = y[B], G = y[A], Y = Bp(S.map(function($) {
          return [
            $[A] - G,
            $[B],
            W - $[B] - $[A] + G
          ];
        })).filter(function($) {
          return $;
        }).sort(function($, lt) {
          return $ - lt;
        }), X = Y[0], rt = Y.map(function($) {
          return Pt($ / X, 0.1) * I;
        }), et = 1, Z = Pt(W / X, 0.1);
        for (et = 1; et <= 10 && !rt.every(function($) {
          return $ * et % 1 === 0;
        }); ++et)
          ;
        var it = (-T + 1) / 2, at = Bo(G - H, G - H + W, it, 1 - it);
        return {
          multiple: Z * et,
          dir: T,
          snapSize: I,
          snapOffset: Math.round(at / I)
        };
      }), O = R.map(function(T) {
        return T.multiple || 1;
      });
      f.snapThresholdInfo.multiples = O, f.snapThresholdInfo.offset = R.map(function(T) {
        return T.snapOffset;
      }), R.forEach(function(T, C) {
        T.snapSize;
      });
    }
  } else
    f.snapThresholdInfo = null;
}
function fw(t, e, r, n, a, s, u) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var f = t.props, c = t.state, v = f.snapGridWidth, p = v === void 0 ? 0 : v, h = f.snapGridHeight, d = h === void 0 ? 0 : h, m = [], _ = s.left, x = s.top, y = [0, 0];
  uw(t, n, a, s);
  var S = c.snapThresholdInfo, E = p, R = d;
  if (S && (p *= S.multiples[0] || 1, d *= S.multiples[1] || 1, y = S.offset), d) {
    for (var O = function(C) {
      m.push({
        type: "horizontal",
        pos: [
          _,
          Pt(y[1] * R + C - a + x, 0.1)
        ],
        className: Ct("grid-guideline"),
        size: e,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, T = 0; T <= r * 2; T += d)
      O(T);
    for (var T = -d; T >= -r; T -= d)
      O(T);
  }
  if (p) {
    for (var O = function(D) {
      m.push({
        type: "vertical",
        pos: [
          Pt(y[0] * E + D - n + _, 0.1),
          x
        ],
        className: Ct("grid-guideline"),
        size: r,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, T = 0; T <= e * 2; T += p)
      O(T);
    for (var T = -p; T >= -e; T -= p)
      O(T);
  }
  return m;
}
function Xd(t, e, r, n) {
  return r === "horizontal" ? tt(t.right - e.left) <= n || tt(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? tt(t.bottom - e.top) <= n || tt(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function lw(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var a = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), s = n.map(function(d) {
    return Te(d) && "element" in d ? z(z({}, d), { element: Fe(d.element, !0) }) : {
      element: Fe(d, !0)
    };
  }).filter(function(d) {
    return d.element;
  }), u = SS(a.map(function(d) {
    return d.element;
  }), s.map(function(d) {
    return d.element;
  })), f = u.maintained, c = u.added, v = [];
  f.forEach(function(d) {
    var m = k(d, 2), _ = m[0], x = m[1];
    v[x] = a[_];
  }), cw(t, c.map(function(d) {
    return s[d];
  })).map(function(d, m) {
    v[c[m]] = d;
  }), e.elementRects = v;
  var p = Tf(t.props.elementSnapDirections), h = [];
  return v.forEach(function(d) {
    var m = d.element, _ = d.top, x = _ === void 0 ? p.top : _, y = d.left, S = y === void 0 ? p.left : y, E = d.right, R = E === void 0 ? p.right : E, O = d.bottom, T = O === void 0 ? p.bottom : O, C = d.center, D = C === void 0 ? p.center : C, I = d.middle, A = I === void 0 ? p.middle : I, B = d.className, H = d.rect, W = Of({
      top: x,
      right: R,
      left: S,
      bottom: T,
      center: D,
      middle: A
    }, H), G = W.horizontal, Y = W.vertical, X = W.horizontalNames, rt = W.verticalNames, et = H.top, Z = H.left, it = H.right - Z, at = H.bottom - et, $ = [it, at];
    Y.forEach(function(lt, pt) {
      h.push({
        type: "vertical",
        element: m,
        pos: [
          Pt(lt, 0.1),
          et
        ],
        size: at,
        sizes: $,
        className: B,
        elementRect: d,
        elementDirection: Yv[rt[pt]] || rt[pt],
        direction: ""
      });
    }), G.forEach(function(lt, pt) {
      h.push({
        type: "horizontal",
        element: m,
        pos: [
          Z,
          Pt(lt, 0.1)
        ],
        size: it,
        sizes: $,
        className: B,
        elementRect: d,
        elementDirection: Yv[X[pt]] || X[pt],
        direction: ""
      });
    });
  }), h;
}
function jv(t, e) {
  return t ? t.map(function(r) {
    var n = Te(r) ? r : { pos: r }, a = n.pos;
    return _i(a) ? n : z(z({}, n), { pos: rr(a, e) });
  }) : [];
}
function qd(t, e, r, n, a, s, u) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = { left: 0, top: 0, right: 0, bottom: 0 });
  var f = [], c = u.left, v = u.top, p = u.bottom, h = u.right, d = r + h - c, m = n + p - v;
  return jv(t, m).forEach(function(_) {
    f.push({
      type: "horizontal",
      pos: [
        c,
        Pt(_.pos - s + v, 0.1)
      ],
      size: d,
      className: _.className,
      direction: ""
    });
  }), jv(e, d).forEach(function(_) {
    f.push({
      type: "vertical",
      pos: [
        Pt(_.pos - a + c, 0.1),
        v
      ],
      size: m,
      className: _.className,
      direction: ""
    });
  }), f;
}
function cw(t, e) {
  if (!e.length)
    return [];
  var r = t.props.groupable, n = t.state, a = n.containerClientRect, s = n.rootMatrix, u = n.is3d, f = n.offsetDelta, c = u ? 4 : 3, v = k(zC(s, a, c), 2), p = v[0], h = v[1], d = r ? 0 : f[0], m = r ? 0 : f[1];
  return e.map(function(_) {
    var x = _.element.getBoundingClientRect(), y = x.left - p - d, S = x.top - h - m, E = S + x.height, R = y + x.width, O = k(Ci(s, [y, S], c), 2), T = O[0], C = O[1], D = k(Ci(s, [R, E], c), 2), I = D[0], A = D[1];
    return z(z({}, _), { rect: {
      left: T,
      right: I,
      top: C,
      bottom: A,
      center: (T + I) / 2,
      middle: (C + A) / 2
    } });
  });
}
function wo(t) {
  var e = t.state, r = e.container, n = t.props.snapContainer || r;
  if (e.snapContainer === n && e.guidelines && e.guidelines.length)
    return !1;
  var a = e.containerClientRect, s = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  };
  if (r !== n) {
    var u = Fe(n, !0);
    if (u) {
      var f = na(u), c = ap(e, [
        f.left - a.left,
        f.top - a.top
      ]), v = ap(e, [
        f.right - a.right,
        f.bottom - a.bottom
      ]);
      s.left = Pt(c[0], 1e-5), s.top = Pt(c[1], 1e-5), s.right = Pt(v[0], 1e-5), s.bottom = Pt(v[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = s, e.guidelines = tf(t), e.enableSnap = !0, !0;
}
function Ud(t, e, r, n, a, s) {
  var u = Vn(t, e, r, s ? 4 : 3), f = Dr(u, n);
  return zf(u, wt(a, f));
}
function tp(t) {
  return t ? t / tt(t) : 0;
}
function vw(t, e, r, n, a, s) {
  var u = s.fixedDirection, f = LC(r, u, n), c = Pf(t, e, r, n), v = st(st([], k(JC(t, e, f, n, a, s)), !1), k(Wd(t, c, s)), !1), p = Wo(v, 0), h = Wo(v, 1);
  return {
    width: {
      isBound: p.isBound,
      offset: p.offset[0]
    },
    height: {
      isBound: h.isBound,
      offset: h.offset[1]
    }
  };
}
function pw(t, e, r, n, a, s, u, f, c) {
  var v = Dr(e, u), p = es(t, f, {
    vertical: [v[0]],
    horizontal: [v[1]]
  }), h = p.horizontal.offset, d = p.vertical.offset;
  if (Pt(d, $u) || Pt(h, $u)) {
    var m = k(Le({
      datas: c,
      distX: -d,
      distY: -h
    }), 2), _ = m[0], x = m[1], y = Math.min(a || 1 / 0, r + u[0] * _), S = Math.min(s || 1 / 0, n + u[1] * x);
    return [y - r, S - n];
  }
  return [0, 0];
}
function $d(t, e, r, n, a, s, u, f) {
  for (var c = ye(t.state), v = t.props.keepRatio, p = 0, h = 0, d = 0; d < 2; ++d) {
    var m = e(p, h), _ = vw(t, m, a, v, u, f), x = _.width, y = _.height, S = x.isBound, E = y.isBound, R = x.offset, O = y.offset;
    if (d === 1 && (S || (R = 0), E || (O = 0)), d === 0 && u && !S && !E)
      return [0, 0];
    if (v) {
      var T = tt(R) * (r ? 1 / r : 1), C = tt(O) * (n ? 1 / n : 1), D = S && E ? T < C : E || !S && T < C;
      D ? R = r * O / n : O = n * R / r;
    }
    p += R, h += O;
  }
  if (!v && a[0] && a[1]) {
    var I = jC(t, c, a, s, f), A = I.maxWidth, B = I.maxHeight, H = k(pw(t, e(p, h).map(function(Y) {
      return Y.map(function(X) {
        return Pt(X, $u);
      });
    }), r + p, n + h, A, B, a, u, f), 2), R = H[0], O = H[1];
    p += R, h += O;
  }
  return [p, h];
}
function ra(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function dw(t, e) {
  e = ra(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, a = r * 360 + e;
  return tt(t - n) < tt(t - a) ? n : a;
}
function Ru(t, e) {
  t = ra(t), e = ra(e);
  var r = ra(t - e);
  return Math.min(r, 360 - r);
}
function hw(t, e, r, n) {
  var a, s = t.props, u = (a = s[Pd]) !== null && a !== void 0 ? a : 5, f = s[Ad];
  if (Ti(t, "rotatable")) {
    var c = e.pos1, v = e.pos2, p = e.pos3, h = e.pos4, d = e.origin, m = r * Math.PI / 180, _ = [c, v, p, h].map(function(O) {
      return wt(O, d);
    }), x = _.map(function(O) {
      return ga(O, m);
    }), y = st(st([], k(IC(t, _, x, d, r)), !1), k(qC(t, _, x, d, r)), !1);
    y.sort(function(O, T) {
      return tt(O - r) - tt(T - r);
    });
    var S = y.length > 0;
    if (S)
      return {
        isSnap: S,
        dist: S ? y[0] : r
      };
  }
  if (f?.length && u) {
    var E = f.slice().sort(function(O, T) {
      return Ru(O, n) - Ru(T, n);
    }), R = E[0];
    if (Ru(R, n) <= u)
      return {
        isSnap: !0,
        dist: r + dw(n, R) - n
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function gw(t, e, r, n, a, s, u) {
  if (!Ti(t, "resizable"))
    return [0, 0];
  var f = u.fixedDirection, c = u.nextAllMatrix, v = t.state, p = v.allMatrix, h = v.is3d;
  return $d(t, function(d, m) {
    return Ud(c || p, e + d, r + m, f, a, h);
  }, e, r, n, a, s, u);
}
function mw(t, e, r, n, a) {
  if (!Ti(t, "scalable"))
    return [0, 0];
  var s = a.startOffsetWidth, u = a.startOffsetHeight, f = a.fixedPosition, c = a.fixedDirection, v = a.is3d, p = $d(t, function(h, d) {
    return Ud(gC(a, Ut(e, [h / s, d / u])), s, u, c, f, v);
  }, s, u, r, f, n, a);
  return [p[0] / s, p[1] / u];
}
function _w(t, e) {
  e.absolutePoses = ye(t.state);
}
function rp(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Qr(e, function(s) {
        return s.guideline === a;
      }) || (a.direction = "", e.push({ guideline: a, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, a = r.posInfo;
    return z(z({}, n), { direction: a.direction });
  });
}
function ep(t, e, r, n, a, s) {
  var u = Rf(ts(t, s), e, r), f = u.vertical, c = u.horizontal, v = di();
  f.forEach(function(_) {
    _.isBound && (_.direction === "start" && (v.left = !0), _.direction === "end" && (v.right = !0), n.push({
      type: "bounds",
      pos: _.pos
    }));
  }), c.forEach(function(_) {
    _.isBound && (_.direction === "start" && (v.top = !0), _.direction === "end" && (v.bottom = !0), a.push({
      type: "bounds",
      pos: _.pos
    }));
  });
  var p = UC(t), h = p.boundMap, d = p.vertical, m = p.horizontal;
  return d.forEach(function(_) {
    en(n, function(x) {
      var y = x.type, S = x.pos;
      return y === "bounds" && S === _;
    }) >= 0 || n.push({
      type: "bounds",
      pos: _
    });
  }), m.forEach(function(_) {
    en(a, function(x) {
      var y = x.type, S = x.pos;
      return y === "bounds" && S === _;
    }) >= 0 || a.push({
      type: "bounds",
      pos: _
    });
  }), {
    boundMap: v,
    innerBoundMap: h
  };
}
var xw = kf("", ["resizable", "scalable"]), yw = {
  name: "snappable",
  dragRelation: "strong",
  props: [
    "snappable",
    "snapContainer",
    "snapDirections",
    "elementSnapDirections",
    "snapGap",
    "snapGridWidth",
    "snapGridHeight",
    "isDisplaySnapDigit",
    "isDisplayInnerSnapDigit",
    "isDisplayGridGuidelines",
    "snapDigit",
    "snapThreshold",
    "snapRenderThreshold",
    "snapGridAll",
    Pd,
    Ad,
    Bd,
    zd,
    "horizontalGuidelines",
    "verticalGuidelines",
    "elementGuidelines",
    "bounds",
    "innerBounds",
    "snapDistFormat",
    "maxSnapElementGuidelineDistance",
    "maxSnapElementGapDistance"
  ],
  events: ["snap", "bound"],
  css: [
    `:host {
--bounds-color: #d66;
}
.guideline {
pointer-events: none;
z-index: 2;
}
.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}
.guideline-group {
position: absolute;
top: 0;
left: 0;
}
.guideline-group .size-value {
position: absolute;
color: #f55;
font-size: 12px;
font-size: calc(12px * var(--zoom));
font-weight: bold;
}
.guideline-group.horizontal .size-value {
transform-origin: 50% 100%;
transform: translateX(-50%);
left: 50%;
bottom: 5px;
bottom: calc(2px + 3px * var(--zoom));
}
.guideline-group.vertical .size-value {
transform-origin: 0% 50%;
top: 50%;
transform: translateY(-50%);
left: 5px;
left: calc(2px + 3px * var(--zoom));
}
.guideline.gap {
background: #f55;
}
.size-value.gap {
color: #f55;
}
`
  ],
  render: function(t, e) {
    var r = t.state, n = r.top, a = r.left, s = r.pos1, u = r.pos2, f = r.pos3, c = r.pos4, v = r.snapRenderInfo, p = t.props.snapRenderThreshold, h = p === void 0 ? 1 : p;
    if (!v || !v.render || !Ti(t, ""))
      return gi(t, "boundMap", di(), function(ft) {
        return JSON.stringify(ft);
      }), gi(t, "innerBoundMap", di(), function(ft) {
        return JSON.stringify(ft);
      }), [];
    r.guidelines = tf(t);
    var d = Math.min(s[0], u[0], f[0], c[0]), m = Math.min(s[1], u[1], f[1], c[1]), _ = v.externalPoses || [], x = ye(t.state), y = [], S = [], E = [], R = [], O = [], T = _e(x), C = T.width, D = T.height, I = T.top, A = T.left, B = T.bottom, H = T.right, W = { left: A, right: H, top: I, bottom: B, center: (A + H) / 2, middle: (I + B) / 2 }, G = _.length > 0, Y = G ? _e(_) : {};
    if (!v.request) {
      if (v.direction && O.push(kC(t, x, v.direction, h, h)), v.snap) {
        var X = _e(x);
        v.center && (X.middle = (X.top + X.bottom) / 2, X.center = (X.left + X.right) / 2), O.push(Xv(t, X, h, h));
      }
      G && (v.center && (Y.middle = (Y.top + Y.bottom) / 2, Y.center = (Y.left + Y.right) / 2), O.push(Xv(t, Y, h, h))), O.forEach(function(ft) {
        var ct = ft.vertical.posInfos, ot = ft.horizontal.posInfos;
        y.push.apply(y, st([], k(ct.filter(function(gt) {
          var mt = gt.guidelineInfos;
          return mt.some(function(Tt) {
            var Wt = Tt.guideline;
            return !Wt.hide;
          });
        }).map(function(gt) {
          return {
            type: "snap",
            pos: gt.pos
          };
        })), !1)), S.push.apply(S, st([], k(ot.filter(function(gt) {
          var mt = gt.guidelineInfos;
          return mt.some(function(Tt) {
            var Wt = Tt.guideline;
            return !Wt.hide;
          });
        }).map(function(gt) {
          return {
            type: "snap",
            pos: gt.pos
          };
        })), !1)), E.push.apply(E, st([], k(rp(ct)), !1)), R.push.apply(R, st([], k(rp(ot)), !1));
      });
    }
    var rt = ep(t, [A, H], [I, B], y, S), et = rt.boundMap, Z = rt.innerBoundMap;
    G && ep(t, [Y.left, Y.right], [Y.top, Y.bottom], y, S, v.externalBounds);
    var it = st(st([], k(E), !1), k(R), !1), at = it.filter(function(ft) {
      return ft.element && !ft.gapRects;
    }), $ = it.filter(function(ft) {
      return ft.gapRects;
    }).sort(function(ft, ct) {
      return ft.gap - ct.gap;
    });
    _t(t, "onSnap", {
      guidelines: it.filter(function(ft) {
        var ct = ft.element;
        return !ct;
      }),
      elements: at,
      gaps: $
    }, !0);
    var lt = gi(t, "boundMap", et, function(ft) {
      return JSON.stringify(ft);
    }, di()), pt = gi(t, "innerBoundMap", Z, function(ft) {
      return JSON.stringify(ft);
    }, di());
    return (et === lt || Z === pt) && _t(t, "onBound", {
      bounds: et,
      innerBounds: Z
    }, !0), st(st(st(st(st(st([], k(aw(t, at, [d, m], W, e)), !1), k(ow(t, $, [d, m], W, e)), !1), k(Qv(t, "horizontal", R, [a, n], W, e)), !1), k(Qv(t, "vertical", E, [a, n], W, e)), !1), k(Jv(t, "horizontal", S, d, n, C, 0, e)), !1), k(Jv(t, "vertical", y, m, a, D, 1, e)), !1);
  },
  dragStart: function(t, e) {
    t.state.snapRenderInfo = {
      request: e.isRequest,
      snap: !0,
      center: !0
    }, wo(t);
  },
  drag: function(t) {
    var e = t.state;
    wo(t) || (e.guidelines = tf(t)), e.snapRenderInfo && (e.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, e) {
    if (xw(t, e) || ju(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return Er(e.inputEvent.target, Ct("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, wo(t);
  },
  dragControl: function(t) {
    this.drag(t);
  },
  dragControlEnd: function(t) {
    this.unset(t);
  },
  dragGroupStart: function(t, e) {
    this.dragStart(t, e);
  },
  dragGroup: function(t) {
    this.drag(t);
  },
  dragGroupEnd: function(t) {
    this.unset(t);
  },
  dragGroupControlStart: function(t) {
    t.state.snapRenderInfo = null, wo(t);
  },
  dragGroupControl: function(t) {
    this.drag(t);
  },
  dragGroupControlEnd: function(t) {
    this.unset(t);
  },
  unset: function(t) {
    var e = t.state;
    e.enableSnap = !1, e.guidelines = [], e.snapRenderInfo = null, e.elementRects = [];
  }
};
function bw(t, e) {
  return [
    t[0] * e[0],
    t[1] * e[1]
  ];
}
function Ct() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return gb.apply(void 0, st([wf], k(t), !1));
}
function Vd(t) {
  t();
}
function Sw(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : Te(t) ? t : sa(t);
}
function ea(t, e, r) {
  return Go(e, Xn(r, e), t, Xn(r.map(function(n) {
    return -n;
  }), e));
}
function Cw(t, e, r) {
  if (e === "%") {
    var n = Bf(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function ww(t) {
  var e = Ew(Gf(t, ":before"));
  return e.map(function(r, n) {
    var a = va(r), s = a.value, u = a.unit;
    return s * Cw(t, u, n === 0);
  });
}
function Ho(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function Ew(t) {
  return Ho(t.transformOrigin);
}
function Kd(t) {
  var e = jr(t), r = e("transform");
  if (r && r !== "none")
    return r;
  if ("transform" in t) {
    var n = t.transform, a = n.baseVal;
    if (!a)
      return "";
    var s = a.length;
    if (!s)
      return "";
    for (var u = [], f = function(v) {
      var p = a[v].matrix;
      u.push("matrix(".concat(["a", "b", "c", "d", "e", "f"].map(function(h) {
        return p[h];
      }).join(", "), ")"));
    }, c = 0; c < s; ++c)
      f(c);
    return u.join(" ");
  }
  return "";
}
function fa(t, e, r, n, a) {
  var s, u, f = pf(t) || En(t), c = !1, v, p;
  if (!t || r)
    v = t;
  else {
    var h = (s = t?.assignedSlot) === null || s === void 0 ? void 0 : s.parentElement, d = t.parentElement;
    h ? (c = !0, p = d, v = h) : v = d;
  }
  for (var m = !1, _ = t === e || v === e, x = "relative", y = 1, S = parseFloat(a?.("zoom")) || 1, E = a?.("position"); v && v !== f; ) {
    e === v && (_ = !0);
    var R = jr(v), O = v.tagName.toLowerCase(), T = Kd(v), C = R("willChange"), D = parseFloat(R("zoom")) || 1;
    if (x = R("position"), n && D !== 1) {
      y = D;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && n && S !== 1 && E && E !== "absolute" || O === "svg" || O === "foreignobject" || x !== "static" || T && T !== "none" || C === "transform"
    )
      break;
    var I = (u = t?.assignedSlot) === null || u === void 0 ? void 0 : u.parentNode, A = v.parentNode;
    I && (c = !0, p = A);
    var B = A;
    if (B && B.nodeType === 11) {
      v = B.host, m = !0, x = jr(v)("position");
      break;
    }
    v = B, x = "relative";
  }
  return {
    offsetZoom: y,
    hasSlot: c,
    parentSlotElement: p,
    isCustomElement: m,
    isStatic: x === "static",
    isEnd: _ || !v || v === f,
    offsetParent: v || f
  };
}
function Dw(t, e) {
  var r, n = t.tagName.toLowerCase(), a = t.offsetLeft, s = t.offsetTop, u = jr(t), f = ca(a), c = !f, v, p;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (v = dd ? ww(t) : Ho(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice(), c = !0, n === "svg" ? (a = 0, s = 0) : (r = k(Tw(t, v, t === e && e.tagName.toLowerCase() === "g"), 4), a = r[0], s = r[1], v[0] = r[2], v[1] = r[3])) : (v = Ho(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice()), {
    tagName: n,
    isSVG: f,
    hasOffset: c,
    offset: [a || 0, s || 0],
    origin: v,
    targetOrigin: p
  };
}
function Zd(t, e) {
  var r = jr(t), n = jr(En(t)), a = n("position");
  if (!e && (!a || a === "static"))
    return [0, 0];
  var s = parseInt(n("marginLeft"), 10), u = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (u = 0), (r("left") !== "auto" || r("right") !== "auto") && (s = 0)), [s, u];
}
function rf(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = Oe(r, 3, 4));
  });
}
function Mw(t) {
  for (var e = t.parentElement, r = !1, n = En(t); e; ) {
    var a = Gf(e).transform;
    if (a && a !== "none") {
      r = !0;
      break;
    }
    if (e === n)
      break;
    e = e.parentElement;
  }
  return {
    fixedContainer: e || n,
    hasTransform: r
  };
}
function ns(t, e) {
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(od(t, !e).join(","), ")");
}
function Bf(t) {
  var e = t.clientWidth, r = t.clientHeight;
  if (!t)
    return { x: 0, y: 0, width: 0, height: 0, clientWidth: e, clientHeight: r };
  var n = t.viewBox, a = n && n.baseVal || { x: 0, y: 0, width: 0, height: 0 };
  return {
    x: a.x,
    y: a.y,
    width: a.width || e,
    height: a.height || r,
    clientWidth: e,
    clientHeight: r
  };
}
function Rw(t, e) {
  var r, n = Bf(t), a = n.width, s = n.height, u = n.clientWidth, f = n.clientHeight, c = u / a, v = f / s, p = t.preserveAspectRatio.baseVal, h = p.align, d = p.meetOrSlice, m = [0, 0], _ = [c, v], x = [0, 0];
  if (h !== 1) {
    var y = (h - 2) % 3, S = Math.floor((h - 2) / 3);
    m[0] = a * y / 2, m[1] = s * S / 2;
    var E = d === 2 ? Math.max(v, c) : Math.min(c, v);
    _[0] = E, _[1] = E, x[0] = (u - a) / 2 * y, x[1] = (f - s) / 2 * S;
  }
  var R = yf(_, e);
  return r = k(x, 2), R[e * (e - 1)] = r[0], R[e * (e - 1) + 1] = r[1], ea(R, e, m);
}
function Tw(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var a = jr(t), s = a("transform-box") === "fill-box", u = t.getBBox(), f = Bf(t.ownerSVGElement), c = u.x, v = u.y;
  n === "foreignobject" && !c && !v && (c = parseFloat(t.getAttribute("x")) || 0, v = parseFloat(t.getAttribute("y")) || 0);
  var p = c - f.x, h = v - f.y, d = s ? e[0] : e[0] - p, m = s ? e[1] : e[1] - h;
  return [p, h, d, m];
}
function vr(t, e, r) {
  return Fr(t, Yn(e, r), r);
}
function Vn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(a) {
    return vr(t, a, n);
  });
}
function _e(t) {
  var e = t.map(function(v) {
    return v[0];
  }), r = t.map(function(v) {
    return v[1];
  }), n = Math.min.apply(Math, st([], k(e), !1)), a = Math.min.apply(Math, st([], k(r), !1)), s = Math.max.apply(Math, st([], k(e), !1)), u = Math.max.apply(Math, st([], k(r), !1)), f = s - n, c = u - a;
  return {
    left: n,
    top: a,
    right: s,
    bottom: u,
    width: f,
    height: c
  };
}
function np(t, e, r, n) {
  var a = Vn(t, e, r, n);
  return _e(a);
}
function Ow(t, e, r, n, a) {
  var s, u = t.target, f = t.origin, c = e.matrix, v = Qd(u), p = v.offsetWidth, h = v.offsetHeight, d = r.getBoundingClientRect(), m = [0, 0];
  r === En(r) && (m = Zd(u, !0));
  for (var _ = u.getBoundingClientRect(), x = _.left - d.left + r.scrollLeft - (r.clientLeft || 0) + m[0], y = _.top - d.top + r.scrollTop - (r.clientTop || 0) + m[1], S = _.width, E = _.height, R = Go(n, a, c), O = np(R, p, h, n), T = O.left, C = O.top, D = O.width, I = O.height, A = vr(R, f, n), B = wt(A, [T, C]), H = [
    x + B[0] * S / D,
    y + B[1] * E / I
  ], W = [0, 0], G = 0; ++G < 10; ) {
    var Y = ke(a, n);
    s = k(wt(vr(Y, H, n), vr(Y, A, n)), 2), W[0] = s[0], W[1] = s[1];
    var X = Go(n, a, Xn(W, n), c), rt = np(X, p, h, n), et = rt.left, Z = rt.top, it = et - x, at = Z - y;
    if (tt(it) < 2 && tt(at) < 2)
      break;
    H[0] -= it, H[1] -= at;
  }
  return W.map(function($) {
    return Math.round($);
  });
}
function Iw(t, e, r) {
  var n = t.length === 16, a = n ? 4 : 3, s = e.map(function(c) {
    return vr(t, c, a);
  }), u = r.left, f = r.top;
  return s.map(function(c) {
    return [c[0] + u, c[1] + f];
  });
}
function xe(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function Jd(t, e) {
  return xe([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function Qi(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = _r(t, e));
  var a = Jd(t, e);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(r, ")"),
    width: "".concat(a, "px")
  };
}
function Yo(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = r.length, s = r.reduce(function(f, c) {
    return f + c[0];
  }, 0) / a, u = r.reduce(function(f, c) {
    return f + c[1];
  }, 0) / a;
  return {
    transform: "translateZ(0px) translate(".concat(s, "px, ").concat(u, "px) rotate(").concat(t, "rad) scale(").concat(e, ")")
  };
}
function Un(t, e) {
  var r = t[e];
  return Te(r) ? z(z({}, t), r) : t;
}
function Qd(t) {
  var e = t && !ca(t.offsetWidth), r = 0, n = 0, a = 0, s = 0, u = 0, f = 0, c = 0, v = 0, p = 0, h = 0, d = 0, m = 0, _ = 1 / 0, x = 1 / 0, y = 1 / 0, S = 1 / 0, E = 0, R = 0, O = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var T = t.getBBox();
      O = !0, r = T.width, n = T.height, u = r, f = n, c = r, v = n, a = r, s = n;
    } else {
      var C = jr(t), D = t.style, I = C("boxSizing") === "border-box", A = parseFloat(C("borderLeftWidth")) || 0, B = parseFloat(C("borderRightWidth")) || 0, H = parseFloat(C("borderTopWidth")) || 0, W = parseFloat(C("borderBottomWidth")) || 0, G = parseFloat(C("paddingLeft")) || 0, Y = parseFloat(C("paddingRight")) || 0, X = parseFloat(C("paddingTop")) || 0, rt = parseFloat(C("paddingBottom")) || 0, et = G + Y, Z = X + rt, it = A + B, at = H + W, $ = et + it, lt = Z + at, pt = C("position"), ft = 0, ct = 0;
      if ("clientLeft" in t) {
        var ot = null;
        if (pt === "absolute") {
          var gt = fa(t, En(t));
          ot = gt.offsetParent;
        } else
          ot = t.parentElement;
        if (ot) {
          var mt = jr(ot);
          ft = parseFloat(mt("width")), ct = parseFloat(mt("height"));
        }
      }
      p = Math.max(et, rr(C("minWidth"), ft) || 0), h = Math.max(Z, rr(C("minHeight"), ct) || 0), _ = rr(C("maxWidth"), ft), x = rr(C("maxHeight"), ct), isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0), E = rr(D.width, 0) || 0, R = rr(D.height, 0) || 0, u = parseFloat(C("width")) || 0, f = parseFloat(C("height")) || 0, c = tt(u - E) < 1 ? Bu(p, E || u, _) : u, v = tt(f - R) < 1 ? Bu(h, R || f, x) : f, r = c, n = v, a = c, s = v, I ? (y = _, S = x, d = p, m = h, c = r - $, v = n - lt) : (y = _ + $, S = x + lt, d = p + $, m = h + lt, r = c + $, n = v + lt), a = c + et, s = v + Z;
    }
  return {
    svg: O,
    offsetWidth: r,
    offsetHeight: n,
    clientWidth: a,
    clientHeight: s,
    contentWidth: c,
    contentHeight: v,
    inlineCSSWidth: E,
    inlineCSSHeight: R,
    cssWidth: u,
    cssHeight: f,
    minWidth: p,
    minHeight: h,
    maxWidth: _,
    maxHeight: x,
    minOffsetWidth: d,
    minOffsetHeight: m,
    maxOffsetWidth: y,
    maxOffsetHeight: S
  };
}
function jd(t, e) {
  return _r(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
}
function Eo() {
  return {
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
    clientLeft: 0,
    clientTop: 0,
    clientWidth: 0,
    clientHeight: 0,
    scrollWidth: 0,
    scrollHeight: 0
  };
}
function th(t, e) {
  var r = t === En(t) || t === pf(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = jr(t)("overflow") !== "visible", z(z({}, e), n);
}
function Tu(t, e, r, n) {
  var a = t.left, s = t.right, u = t.top, f = t.bottom, c = e.top, v = e.left, p = {
    left: v + a,
    top: c + u,
    right: v + s,
    bottom: c + f,
    width: s - a,
    height: f - u
  };
  return r && n ? th(r, p) : p;
}
function na(t, e) {
  var r = 0, n = 0, a = 0, s = 0;
  if (t) {
    var u = t.getBoundingClientRect();
    r = u.left, n = u.top, a = u.width, s = u.height;
  }
  var f = {
    left: r,
    top: n,
    width: a,
    height: s,
    right: r + a,
    bottom: n + s
  };
  return t && e ? th(t, f) : f;
}
function Pw(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, a = t.getState(), s = a.offsetWidth, u = a.offsetHeight, f = a.svg, c = a.transformOrigin;
  return !r && f && n ? Wf(n, s, u) : c;
}
function rh(t, e, r, n) {
  var a;
  if (t)
    a = t;
  else if (e)
    a = [0, 0];
  else {
    var s = r.target;
    a = eh(s, n);
  }
  return a;
}
function eh(t, e) {
  if (t) {
    var r = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (e.deg = r, !!n) {
      var a = [0, 0];
      return n.indexOf("w") > -1 && (a[0] = -1), n.indexOf("e") > -1 && (a[0] = 1), n.indexOf("n") > -1 && (a[1] = -1), n.indexOf("s") > -1 && (a[1] = 1), a;
    }
  }
}
function zf(t, e) {
  return [
    Ut(e, t[0]),
    Ut(e, t[1]),
    Ut(e, t[2]),
    Ut(e, t[3])
  ];
}
function ye(t) {
  var e = t.left, r = t.top, n = t.pos1, a = t.pos2, s = t.pos3, u = t.pos4;
  return zf([n, a, s, u], [e, r]);
}
function ef(t, e) {
  t[e ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(t);
  });
}
function hi(t, e) {
  var r = e ? "controlGesto" : "targetGesto", n = t[r];
  n?.isIdle() === !1 && ef(t, e), n?.unset(), t[r] = null;
}
function Xr(t, e) {
  if (e) {
    var r = Ri(e);
    r.nextStyle = z(z({}, r.nextStyle), t);
  }
  return {
    style: t,
    cssText: nn(t).map(function(n) {
      return "".concat(Po(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function nh(t, e, r) {
  var n = e.afterTransform || e.transform;
  return z(z({}, Xr(z(z(z({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
}
function Ft(t, e, r, n) {
  var a = e.datas;
  a.datas || (a.datas = {});
  var s = z(z({}, r), { target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, moveable: t, datas: a.datas, isRequest: e.isRequest, isRequestChild: e.isRequestChild, isFirstDrag: !!e.isFirstDrag, isTrusted: e.isTrusted !== !1, stopAble: function() {
    a.isEventStart = !1;
  }, stopDrag: function() {
    var u;
    (u = e.stop) === null || u === void 0 || u.call(e);
  } });
  return a.isStartEvent ? n || (a.lastEvent = s) : a.isStartEvent = !0, s;
}
function se(t, e, r) {
  var n = e.datas, a = "isDrag" in r ? r.isDrag : e.isDrag;
  return n.datas || (n.datas = {}), z(z({ isDrag: a }, r), { moveable: t, target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: e.isDouble, datas: n.datas, isFirstDrag: !!e.isFirstDrag });
}
function is(t, e, r) {
  t._emitter.on(e, r);
}
function _t(t, e, r, n, a) {
  return t.triggerEvent(e, r, n, a);
}
function Gf(t, e) {
  return bn(t).getComputedStyle(t, e);
}
function Do(t, e, r) {
  var n = {}, a = {};
  return t.filter(function(s) {
    var u = s.name;
    if (n[u] || !e.some(function(f) {
      return s[f];
    }))
      return !1;
    if (!r && s.ableGroup) {
      if (a[s.ableGroup])
        return !1;
      a[s.ableGroup] = !0;
    }
    return n[u] = !0, !0;
  });
}
function nf(t, e) {
  return t === e || t == null && e == null;
}
function ip() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var a = t[n];
    if (!ca(a))
      return a;
  }
  return t[r];
}
function ih(t, e) {
  var r = [], n = [];
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n.indexOf(u), c = r[f] || [];
    f === -1 && (n.push(u), r.push(c)), c.push(a);
  }), r;
}
function Aw(t, e) {
  var r = [], n = {};
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n[u];
    f || (f = [], n[u] = f, r.push(f)), f.push(a);
  }), r;
}
function ah(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Si() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.sort(function(r, n) {
    return tt(n) - tt(r);
  }), t[0];
}
function Ci(t, e, r) {
  return Fr(ke(t, r), Yn(e, r), r);
}
function Bw(t, e) {
  var r, n = t.is3d, a = t.rootMatrix, s = n ? 4 : 3;
  return r = k(Ci(a, [e.distX, e.distY], s), 2), e.distX = r[0], e.distY = r[1], e;
}
function me(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var a = vr(t, [tp(r[0] || 1), 0], n), s = vr(t, [0, tp(r[1] || 1)], n), u = vr(t, [
    r[0] / xe(a),
    r[1] / xe(s)
  ], n);
  return Ut(e, u);
}
function De(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Xo(t) {
  return tt(t) <= qr ? 0 : t;
}
function Ff(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = CC(e, t), n = r.deg;
    return n ? Ct("view-control-rotation".concat(n)) : "";
  };
}
function kf(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(s) {
        return n.requestAble === s;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return Er(a, Ct("direction")) && (!t || Er(a, Ct(t)));
  };
}
function zw(t, e, r) {
  var n, a = xi(t, {
    "x%": function(T) {
      return T / 100 * e.offsetWidth;
    },
    "y%": function(T) {
      return T / 100 * e.offsetHeight;
    }
  }), s = t.slice(0, r < 0 ? void 0 : r), u = t.slice(0, r < 0 ? void 0 : r + 1), f = t[r] || "", c = r < 0 ? [] : t.slice(r), v = r < 0 ? [] : t.slice(r + 1), p = a.slice(0, r < 0 ? void 0 : r), h = a.slice(0, r < 0 ? void 0 : r + 1), d = (n = a[r]) !== null && n !== void 0 ? n : xi([""])[0], m = r < 0 ? [] : a.slice(r), _ = r < 0 ? [] : a.slice(r + 1), x = d ? [d] : [], y = ci(p), S = ci(h), E = ci(m), R = ci(_), O = er(y, E, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: y,
    beforeFunctionMatrix2: S,
    targetFunctionMatrix: ci(x),
    afterFunctionMatrix: E,
    afterFunctionMatrix2: R,
    allFunctionMatrix: O,
    beforeFunctions: p,
    beforeFunctions2: h,
    targetFunction: x[0],
    afterFunctions: m,
    afterFunctions2: _,
    beforeFunctionTexts: s,
    beforeFunctionTexts2: u,
    targetFunctionText: f,
    afterFunctionTexts: c,
    afterFunctionTexts2: v
  };
}
function Gw(t) {
  return !t || !Te(t) || Di(t) ? !1 : br(t) || "length" in t;
}
function Fe(t, e) {
  return t ? Di(t) ? t : Jr(t) ? e ? document.querySelector(t) : t : lf(t) ? t() : kp(t) ? t : "current" in t ? t.current : t : null;
}
function Lf(t, e) {
  if (!t)
    return [];
  var r = Gw(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, a) {
    return Jr(a) && e ? st(st([], k(n), !1), k([].slice.call(document.querySelectorAll(a))), !1) : (br(a) ? n.push(Lf(a, e)) : n.push(Fe(a, e)), n);
  }, []);
}
function Fw(t, e, r) {
  var n = _r(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function ap(t, e) {
  var r = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, s = ke(r, a);
  return n || (s = Oe(s, 3, 4)), s[12] = 0, s[13] = 0, s[14] = 0, yS(s, e);
}
function oh(t, e, r, n, a) {
  var s = k(t, 2), u = s[0], f = s[1], c = 0, v = 0;
  if (a && u && f) {
    var p = _r([0, 0], e), h = _r([0, 0], n), d = xe(e), m = Math.cos(p - h) * d;
    if (!n[0])
      v = m, c = v * r;
    else if (!n[1])
      c = m, v = c / r;
    else {
      var _ = n[0] * u, x = n[1] * f, y = Math.atan2(_ + e[0], x + e[1]), S = Math.atan2(_, x);
      y < 0 && (y += Math.PI * 2), S < 0 && (S += Math.PI * 2);
      var E = 0;
      tt(y - S) < Math.PI / 2 || tt(y - S) > Math.PI / 2 * 3 || (S += Math.PI), E = y - S, E > Math.PI * 2 ? E -= Math.PI * 2 : E > Math.PI ? E = 2 * Math.PI - E : E < -Math.PI && (E = -2 * Math.PI - E);
      var R = xe([_ + e[0], x + e[1]]) * Math.cos(E);
      c = R * Math.sin(S) - _, v = R * Math.cos(S) - x, n[0] < 0 && (c *= -1), n[1] < 0 && (v *= -1);
    }
  } else
    c = n[0] * e[0], v = n[1] * e[1];
  return [c, v];
}
function sh(t, e, r, n) {
  var a, s = r.ratio, u = r.startOffsetWidth, f = r.startOffsetHeight, c = 0, v = 0, p = n.distX, h = n.distY, d = n.pinchScale, m = n.parentDistance, _ = n.parentDist, x = n.parentScale, y = r.fixedDirection, S = [0, 1].map(function(D) {
    return tt(t[D] - y[D]);
  }), E = [0, 1].map(function(D) {
    var I = S[D];
    return I !== 0 && (I = 2 / I), I;
  });
  if (_)
    c = _[0], v = _[1], e && (c ? v || (v = c / s) : c = v * s);
  else if (_i(d))
    c = (d - 1) * u, v = (d - 1) * f;
  else if (x)
    c = (x[0] - 1) * u, v = (x[1] - 1) * f;
  else if (m) {
    var R = u * S[0], O = f * S[1], T = xe([R, O]);
    c = m / T * R * E[0], v = m / T * O * E[1];
  } else {
    var C = Le({ datas: r, distX: p, distY: h });
    C = E.map(function(D, I) {
      return C[I] * D;
    }), a = k(oh([u, f], C, s, t, e), 2), c = a[0], v = a[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: c,
    distHeight: v
  };
}
function af(t, e) {
  if (e) {
    if (t === "left")
      return { x: "0%", y: "50%" };
    if (t === "top")
      return { x: "50%", y: "50%" };
    if (t === "center")
      return { x: "50%", y: "50%" };
    if (t === "right")
      return { x: "100%", y: "50%" };
    if (t === "bottom")
      return { x: "50%", y: "100%" };
    var r = k(t.split(" "), 2), n = r[0], a = r[1], s = af(n || ""), u = af(a || ""), f = z(z({}, s), u), c = {
      x: "50%",
      y: "50%"
    };
    return f.x && (c.x = f.x), f.y && (c.y = f.y), f.value && (f.x && !f.y && (c.y = f.value), !f.x && f.y && (c.x = f.value)), c;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function Wf(t, e, r) {
  var n = af(t, !0), a = n.x, s = n.y;
  return [
    rr(a, e) || 0,
    rr(s, r) || 0
  ];
}
function kw(t, e, r) {
  var n = t.map(function(s) {
    return wt(s, e);
  }), a = n.map(function(s) {
    return ga(s, r);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(s) {
      return Ut(s, e);
    })
  };
}
function uh(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var a = e[n], s = br(r), u = br(a);
    return s && u ? uh(r, a) : !s && !u ? r === a : !1;
  });
}
function gi(t, e, r, n, a) {
  var s = t._store, u = s[e];
  if (!(e in s))
    if (a != null)
      s[e] = a, u = a;
    else
      return s[e] = r, r;
  return u === r || n(u) === n(r) ? u : (s[e] = r, r);
}
function Yr(t) {
  return t >= 0 ? 1 : -1;
}
function tt(t) {
  return Math.abs(t);
}
function Ou(t, e) {
  return Ab(t).map(function(r) {
    return e(r);
  });
}
function fh(t) {
  return _i(t) ? {
    top: t,
    left: t,
    right: t,
    bottom: t
  } : {
    left: t.left || 0,
    top: t.top || 0,
    right: t.right || 0,
    bottom: t.bottom || 0
  };
}
var Lw = xa("pinchable", {
  props: [
    "pinchable"
  ],
  events: [
    "pinchStart",
    "pinch",
    "pinchEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd"
  ],
  dragStart: function() {
    return !0;
  },
  pinchStart: function(t, e) {
    var r = e.datas, n = e.targets, a = e.angle, s = e.originalDatas, u = t.props, f = u.pinchable, c = u.ables;
    if (!f)
      return !1;
    var v = "onPinch".concat(n ? "Group" : "", "Start"), p = "drag".concat(n ? "Group" : "", "ControlStart"), h = (f === !0 ? t.controlAbles : c.filter(function(x) {
      return f.indexOf(x.name) > -1;
    })).filter(function(x) {
      return x.canPinch && x[p];
    }), d = Ft(t, e, {});
    n && (d.targets = n);
    var m = _t(t, v, d);
    r.isPinch = m !== !1, r.ables = h;
    var _ = r.isPinch;
    return _ ? (h.forEach(function(x) {
      if (s[x.name] = s[x.name] || {}, !!x[p]) {
        var y = z(z({}, e), { datas: s[x.name], parentRotate: a, isPinch: !0 });
        x[p](t, y);
      }
    }), t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: [0, 0]
    }, _) : !1;
  },
  pinch: function(t, e) {
    var r = e.datas, n = e.scale, a = e.distance, s = e.originalDatas, u = e.inputEvent, f = e.targets, c = e.angle;
    if (r.isPinch) {
      var v = a * (1 - 1 / n), p = Ft(t, e, {});
      f && (p.targets = f);
      var h = "onPinch".concat(f ? "Group" : "");
      _t(t, h, p);
      var d = r.ables, m = "drag".concat(f ? "Group" : "", "Control");
      return d.forEach(function(_) {
        _[m] && _[m](t, z(z({}, e), { datas: s[_.name], inputEvent: u, resolveMatrix: !0, pinchScale: n, parentDistance: v, parentRotate: c, isPinch: !0 }));
      }), p;
    }
  },
  pinchEnd: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.targets, u = e.originalDatas;
    if (r.isPinch) {
      var f = "onPinch".concat(s ? "Group" : "", "End"), c = se(t, e, { isDrag: n });
      s && (c.targets = s), _t(t, f, c);
      var v = r.ables, p = "drag".concat(s ? "Group" : "", "ControlEnd");
      return v.forEach(function(h) {
        h[p] && h[p](t, z(z({}, e), { isDrag: n, datas: u[h.name], inputEvent: a, isPinch: !0 }));
      }), n;
    }
  },
  pinchGroupStart: function(t, e) {
    return this.pinchStart(t, z(z({}, e), { targets: t.props.targets }));
  },
  pinchGroup: function(t, e) {
    return this.pinch(t, z(z({}, e), { targets: t.props.targets }));
  },
  pinchGroupEnd: function(t, e) {
    return this.pinchEnd(t, z(z({}, e), { targets: t.props.targets }));
  }
}), op = kf("scalable"), Ww = {
  name: "scalable",
  ableGroup: "size",
  canPinch: !0,
  props: [
    "scalable",
    "throttleScale",
    "renderDirections",
    "keepRatio",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "scaleStart",
    "beforeScale",
    "scale",
    "scaleEnd",
    "scaleGroupStart",
    "beforeScaleGroup",
    "scaleGroup",
    "scaleGroupEnd"
  ],
  render: Td("scalable"),
  dragControlCondition: op,
  viewClassName: Ff("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.parentDirection, u = rh(s, n, a, r), f = t.state, c = f.width, v = f.height, p = f.targetTransform, h = f.target, d = f.pos1, m = f.pos2, _ = f.pos4;
    if (!u || !h)
      return !1;
    n || $n(t, e), r.datas = {}, r.transform = p, r.prevDist = [1, 1], r.direction = u, r.startOffsetWidth = c, r.startOffsetHeight = v, r.startValue = [1, 1];
    var x = !u[0] && !u[1] || u[0] || !u[1];
    jo(t, e, "scale"), r.isWidth = x;
    function y(C) {
      r.ratio = C && isFinite(C) ? C : 0;
    }
    r.startPositions = ye(t.state);
    function S(C) {
      var D = Nd(r.startPositions, C);
      r.fixedDirection = D.fixedDirection, r.fixedPosition = D.fixedPosition, r.fixedOffset = D.fixedOffset;
    }
    r.setFixedDirection = S, y(tn(d, m) / tn(m, _)), S([-u[0], -u[1]]);
    var E = function(C) {
      r.minScaleSize = C;
    }, R = function(C) {
      r.maxScaleSize = C;
    };
    E([-1 / 0, -1 / 0]), R([1 / 0, 1 / 0]);
    var O = Ft(t, e, z(z({ direction: u, set: function(C) {
      r.startValue = C;
    }, setRatio: y, setFixedDirection: S, setMinScaleSize: E, setMaxScaleSize: R }, Qo(t, e)), { dragStart: Hr.dragStart(t, new yi().dragStart([0, 0], e)) })), T = _t(t, "onScaleStart", O);
    return r.startFixedDirection = r.fixedDirection, T !== !1 && (r.isScale = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    }), r.isScale ? O : !1;
  },
  dragControl: function(t, e) {
    Zo(t, e, "scale");
    var r = e.datas, n = e.parentKeepRatio, a = e.parentFlag, s = e.isPinch, u = e.dragClient, f = e.isRequest, c = e.useSnap, v = e.resolveMatrix, p = r.prevDist, h = r.direction, d = r.startOffsetWidth, m = r.startOffsetHeight, _ = r.isScale, x = r.startValue, y = r.isWidth, S = r.ratio;
    if (!_)
      return !1;
    var E = t.props, R = E.throttleScale, O = E.parentMoveable, T = h;
    !h[0] && !h[1] && (T = [1, 1]);
    var C = S && (n ?? E.keepRatio) || !1, D = t.state, I = [
      x[0],
      x[1]
    ];
    function A() {
      var ut = sh(T, C, r, e), vt = ut.distWidth, Ot = ut.distHeight, yt = d ? (d + vt) / d : 1, Et = m ? (m + Ot) / m : 1;
      x[0] || (I[0] = vt / d), x[1] || (I[1] = Ot / m);
      var It = (T[0] || C ? yt : 1) * I[0], At = (T[1] || C ? Et : 1) * I[1];
      return It === 0 && (It = Yr(p[0]) * bo), At === 0 && (At = Yr(p[1]) * bo), [It, At];
    }
    var B = A();
    if (!s && t.props.groupable) {
      var H = D.snapRenderInfo || {}, W = H.direction;
      br(W) && (W[0] || W[1]) && (D.snapRenderInfo = { direction: h, request: e.isRequest });
    }
    _t(t, "onBeforeScale", Ft(t, e, {
      scale: B,
      setFixedDirection: function(ut) {
        return r.setFixedDirection(ut), B = A(), B;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(ut) {
        B = ut;
      }
    }, !0));
    var G = [
      B[0] / I[0],
      B[1] / I[1]
    ], Y = u, X = [0, 0], rt = Yr(G[0] * G[1]), et = !u && !a && s;
    if (et || v ? Y = Mf(t, r.targetAllTransform, [0, 0], [0, 0], r) : u || (Y = r.fixedPosition), s || (X = mw(t, G, h, !c && f, r)), C) {
      T[0] && T[1] && X[0] && X[1] && (Math.abs(X[0] * d) > Math.abs(X[1] * m) ? X[1] = 0 : X[0] = 0);
      var Z = !X[0] && !X[1];
      if (Z && (y ? G[0] = Pt(G[0] * I[0], R) / I[0] : G[1] = Pt(G[1] * I[1], R) / I[1]), T[0] && !T[1] || X[0] && !X[1] || Z && y) {
        G[0] += X[0];
        var it = d * G[0] * I[0] / S;
        G[1] = Yr(rt * G[0]) * tt(it / m / I[1]);
      } else if (!T[0] && T[1] || !X[0] && X[1] || Z && !y) {
        G[1] += X[1];
        var at = m * G[1] * I[1] * S;
        G[0] = Yr(rt * G[1]) * tt(at / d / I[0]);
      }
    } else
      G[0] += X[0], G[1] += X[1], X[0] || (G[0] = Pt(G[0] * I[0], R) / I[0]), X[1] || (G[1] = Pt(G[1] * I[1], R) / I[1]);
    G[0] === 0 && (G[0] = Yr(p[0]) * bo), G[1] === 0 && (G[1] = Yr(p[1]) * bo), B = bw(G, [I[0], I[1]]);
    var $ = [
      d,
      m
    ], lt = [
      d * B[0],
      m * B[1]
    ];
    lt = Ap(lt, r.minScaleSize, r.maxScaleSize, C ? S : !1), B = Ou(2, function(ut) {
      return $[ut] ? lt[ut] / $[ut] : lt[ut];
    }), G = Ou(2, function(ut) {
      return B[ut] / I[ut];
    });
    var pt = Ou(2, function(ut) {
      return p[ut] ? G[ut] / p[ut] : G[ut];
    }), ft = "scale(".concat(G.join(", "), ")"), ct = "scale(".concat(B.join(", "), ")"), ot = Jo(r, ct, ft), gt = !x[0] || !x[1], mt = mC(t, gt ? ct : ft, r.fixedDirection, Y, r.fixedOffset, r, gt), Tt = et ? mt : wt(mt, r.prevInverseDist || [0, 0]);
    if (r.prevDist = G, r.prevInverseDist = mt, B[0] === p[0] && B[1] === p[1] && Tt.every(function(ut) {
      return !ut;
    }) && !O && !et)
      return !1;
    var Wt = Ft(t, e, z({ offsetWidth: d, offsetHeight: m, direction: h, scale: B, dist: G, delta: pt, isPinch: !!s }, Cd(t, ot, Tt, s, e)));
    return _t(t, "onScale", Wt), Wt;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = se(t, e, {});
    return _t(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: op,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var a = Re(t, "resizable", e);
    r.moveableScale = t.scale;
    var s = rn(t, this, "dragControlStart", e, function(v, p) {
      return Lo(t, v, r, p);
    }), u = function(v) {
      n.setFixedDirection(v), s.forEach(function(p, h) {
        p.setFixedDirection(v), Lo(t, p.moveable, r, a[h]);
      });
    };
    r.setFixedDirection = u;
    var f = z(z({}, n), { targets: t.props.targets, events: s, setFixedDirection: u }), c = _t(t, "onScaleGroupStart", f);
    return r.isScale = c !== !1, r.isScale ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isScale) {
      is(t, "onBeforeScale", function(p) {
        _t(t, "onBeforeScaleGroup", Ft(t, e, z(z({}, p), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = n.dist, s = r.moveableScale;
        t.scale = [
          a[0] * s[0],
          a[1] * s[1]
        ];
        var u = t.props.keepRatio, f = r.fixedPosition, c = rn(t, this, "dragControl", e, function(p, h) {
          var d = k(Fr(ma(t.rotation / 180 * Math.PI, 3), [
            h.datas.originalX * a[0],
            h.datas.originalY * a[1],
            1
          ], 3), 2), m = d[0], _ = d[1];
          return z(z({}, h), {
            parentDist: null,
            parentScale: a,
            parentKeepRatio: u,
            // recalculate child fixed position for parent group's dragging.
            dragClient: Ut(f, [m, _])
          });
        }), v = z({ targets: t.props.targets, events: c }, n);
        return _t(t, "onScaleGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isScale) {
      this.dragControlEnd(t, e);
      var a = rn(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return _t(t, "onScaleGroupEnd", s), r;
    }
  },
  /**
       * @method Moveable.Scalable#request
       * @param {Moveable.Scalable.ScalableRequestParam} e - the Scalable's request parameter
       * @return {Moveable.Requester} Moveable Requester
       * @example
  
       * // Instantly Request (requestStart - request - requestEnd)
       * moveable.request("scalable", { deltaWidth: 10, deltaHeight: 10 }, true);
       *
       * // requestStart
       * const requester = moveable.request("scalable");
       *
       * // request
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       * requester.request({ deltaWidth: 10, deltaHeight: 10 });
       *
       * // requestEnd
       * requester.requestEnd();
       */
  request: function() {
    var t = {}, e = 0, r = 0, n = !1;
    return {
      isControl: !0,
      requestStart: function(a) {
        return n = a.useSnap, {
          datas: t,
          parentDirection: a.direction || [1, 1],
          useSnap: n
        };
      },
      request: function(a) {
        return e += a.deltaWidth, r += a.deltaHeight, {
          datas: t,
          parentDist: [e, r],
          parentKeepRatio: a.keepRatio,
          useSnap: n
        };
      },
      requestEnd: function() {
        return { datas: t, isDrag: !0, useSnap: n };
      }
    };
  }
};
function _n(t, e) {
  return t.map(function(r, n) {
    return Bo(r, e[n], 1, 2);
  });
}
function sp(t, e, r) {
  var n = _r(t, e), a = _r(t, r), s = a - n;
  return s >= 0 ? s : s + 2 * Math.PI;
}
function Nw(t, e) {
  var r = sp(t[0], t[1], t[2]), n = sp(e[0], e[1], e[2]), a = Math.PI;
  return !(r >= a && n <= a || r <= a && n >= a);
}
var Hw = {
  name: "warpable",
  ableGroup: "size",
  props: [
    "warpable",
    "renderDirections",
    "edge",
    "displayAroundControls"
  ],
  events: [
    "warpStart",
    "warp",
    "warpEnd"
  ],
  viewClassName: Ff("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, a = r.scalable, s = r.warpable, u = r.zoom;
    if (n || a || !s)
      return [];
    var f = t.state, c = f.pos1, v = f.pos2, p = f.pos3, h = f.pos4, d = _n(c, v), m = _n(v, c), _ = _n(c, p), x = _n(p, c), y = _n(p, h), S = _n(h, p), E = _n(v, h), R = _n(h, v);
    return st([
      e.createElement("div", { className: Ct("line"), key: "middeLine1", style: Qi(d, y, u) }),
      e.createElement("div", { className: Ct("line"), key: "middeLine2", style: Qi(m, S, u) }),
      e.createElement("div", { className: Ct("line"), key: "middeLine3", style: Qi(_, E, u) }),
      e.createElement("div", { className: Ct("line"), key: "middeLine4", style: Qi(x, R, u) })
    ], k(Od(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return Er(r, Ct("direction")) && Er(r, Ct("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, a = t.props.target, s = n.target, u = eh(s, r);
    if (!u || !a)
      return !1;
    var f = t.state, c = f.transformOrigin, v = f.is3d, p = f.targetTransform, h = f.targetMatrix, d = f.width, m = f.height, _ = f.left, x = f.top;
    r.datas = {}, r.targetTransform = p, r.warpTargetMatrix = v ? h : Oe(h, 3, 4), r.targetInverseMatrix = id(ke(r.warpTargetMatrix, 4), 3, 4), r.direction = u, r.left = _, r.top = x, r.poses = [
      [0, 0],
      [d, 0],
      [0, m],
      [d, m]
    ].map(function(E) {
      return wt(E, c);
    }), r.nextPoses = r.poses.map(function(E) {
      var R = k(E, 2), O = R[0], T = R[1];
      return Fr(r.warpTargetMatrix, [O, T, 0, 1], 4);
    }), r.startValue = sr(4), r.prevMatrix = sr(4), r.absolutePoses = ye(f), r.posIndexes = Sd(u), $n(t, e), jo(t, e, "matrix3d"), f.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    };
    var y = Ft(t, e, z({ set: function(E) {
      r.startValue = E;
    } }, Qo(t, e))), S = _t(t, "onWarpStart", y);
    return S !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isRequest, a = e.distX, s = e.distY, u = r.targetInverseMatrix, f = r.prevMatrix, c = r.isWarp, v = r.startValue, p = r.poses, h = r.posIndexes, d = r.absolutePoses;
    if (!c)
      return !1;
    if (Zo(t, e, "matrix3d"), Ti(t, "warpable")) {
      var m = h.map(function(A) {
        return d[A];
      });
      m.length > 1 && m.push([
        (m[0][0] + m[1][0]) / 2,
        (m[0][1] + m[1][1]) / 2
      ]);
      var _ = es(t, n, {
        horizontal: m.map(function(A) {
          return A[1] + s;
        }),
        vertical: m.map(function(A) {
          return A[0] + a;
        })
      }), x = _.horizontal, y = _.vertical;
      s -= x.offset, a -= y.offset;
    }
    var S = Le({ datas: r, distX: a, distY: s }, !0), E = r.nextPoses.slice();
    if (h.forEach(function(A) {
      E[A] = Ut(E[A], S);
    }), !sC.every(function(A) {
      return Nw(A.map(function(B) {
        return p[B];
      }), A.map(function(B) {
        return E[B];
      }));
    }))
      return !1;
    var R = bf(p[0], p[2], p[1], p[3], E[0], E[2], E[1], E[3]);
    if (!R.length)
      return !1;
    var O = er(u, R, 4), T = yd(r, O, !0), C = er(ke(f, 4), T, 4);
    r.prevMatrix = T;
    var D = er(v, T, 4), I = Jo(r, "matrix3d(".concat(D.join(", "), ")"), "matrix3d(".concat(T.join(", "), ")"));
    return Df(e, I), _t(t, "onWarp", Ft(t, e, z({ delta: C, matrix: D, dist: T, multiply: er, transform: I }, Xr({
      transform: I
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, _t(t, "onWarpEnd", se(t, e, {})), n) : !1;
  }
}, Yw = /* @__PURE__ */ Ct("area-pieces"), Mo = /* @__PURE__ */ Ct("area-piece"), lh = /* @__PURE__ */ Ct("avoid"), Xw = Ct("view-dragging");
function Iu(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, a = r.height;
    Fp(e, lh), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function up(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: Yw },
    t.createElement("div", { className: Mo }),
    t.createElement("div", { className: Mo }),
    t.createElement("div", { className: Mo }),
    t.createElement("div", { className: Mo })
  );
}
var ch = {
  name: "dragArea",
  props: [
    "dragArea",
    "passDragArea"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  render: function(t, e) {
    var r = t.props, n = r.target, a = r.dragArea, s = r.groupable, u = r.passDragArea, f = t.getState(), c = f.width, v = f.height, p = f.renderPoses, h = u ? Ct("area", "pass") : Ct("area");
    if (s)
      return [
        e.createElement("div", { key: "area", ref: je(t, "areaElement"), className: h }),
        up(e)
      ];
    if (!n || !a)
      return [];
    var d = bf([0, 0], [c, 0], [0, v], [c, v], p[0], p[1], p[2], p[3]), m = d.length ? ns(d, !0) : "none";
    return [
      e.createElement("div", { key: "area", ref: je(t, "areaElement"), className: h, style: {
        top: "0px",
        left: "0px",
        width: "".concat(c, "px"),
        height: "".concat(v, "px"),
        transformOrigin: "0 0",
        transform: m
      } }),
      up(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, a = e.clientY, s = e.inputEvent;
    if (!s)
      return !1;
    r.isDragArea = !1;
    var u = t.areaElement, f = t.state, c = f.moveableClientRect, v = f.renderPoses, p = f.rootMatrix, h = f.is3d, d = c.left, m = c.top, _ = _e(v), x = _.left, y = _.top, S = _.width, E = _.height, R = h ? 4 : 3, O = k(Ci(p, [n - d, a - m], R), 2), T = O[0], C = O[1];
    T -= x, C -= y;
    var D = [
      { left: x, top: y, width: S, height: C - 10 },
      { left: x, top: y, width: T - 10, height: E },
      { left: x, top: y + C + 10, width: S, height: E - C - 10 },
      { left: x + T + 10, top: y, width: S - T - 10, height: E }
    ], I = [].slice.call(u.nextElementSibling.children);
    D.forEach(function(A, B) {
      I[B].style.cssText = "left: ".concat(A.left, "px;top: ").concat(A.top, "px; width: ").concat(A.width, "px; height: ").concat(A.height, "px;");
    }), Gp(u, lh), f.disableNativeEvent = !0;
  },
  drag: function(t, e) {
    var r = e.datas, n = e.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    r.isDragArea || (r.isDragArea = !0, Iu(t));
  },
  dragEnd: function(t, e) {
    this.enableNativeEvent(t);
    var r = e.inputEvent, n = e.datas;
    if (!r)
      return !1;
    n.isDragArea || Iu(t);
  },
  dragGroupStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragGroup: function(t, e) {
    return this.drag(t, e);
  },
  dragGroupEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  unset: function(t) {
    Iu(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var e = t.state;
    e.disableNativeEvent && Pp(function() {
      e.disableNativeEvent = !1;
    });
  }
}, qw = xa("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, a = r.svgOrigin, s = r.groupable, u = t.getState(), f = u.beforeOrigin, c = u.rotation, v = u.svg, p = u.allMatrix, h = u.is3d, d = u.left, m = u.top, _ = u.offsetWidth, x = u.offsetHeight, y;
    if (!s && v && a) {
      var S = k(Wf(a, _, x), 2), E = S[0], R = S[1], O = h ? 4 : 3, T = vr(p, [E, R], O);
      y = Yo(c, n, wt(T, [d, m]));
    } else
      y = Yo(c, n, f);
    return [
      e.createElement("div", { className: Ct("control", "origin"), style: y, key: "beforeOrigin" })
    ];
  }
});
function Uw(t) {
  var e = t.scrollContainer;
  return [
    e.scrollLeft,
    e.scrollTop
  ];
}
var $w = {
  name: "scrollable",
  canPinch: !0,
  props: [
    "scrollable",
    "scrollContainer",
    "scrollThreshold",
    "scrollThrottleTime",
    "getScrollPosition",
    "scrollOptions"
  ],
  events: [
    "scroll",
    "scrollGroup"
  ],
  dragRelation: "strong",
  dragStart: function(t, e) {
    var r = t.props, n = r.scrollContainer, a = n === void 0 ? t.getContainer() : n, s = r.scrollOptions, u = new DS(), f = Fe(a, !0);
    e.datas.dragScroll = u, t.state.dragScroll = u;
    var c = e.isControl ? "controlGesto" : "targetGesto", v = e.targets;
    u.on("scroll", function(p) {
      var h = p.container, d = p.direction, m = Ft(t, e, {
        scrollContainer: h,
        direction: d
      }), _ = v ? "onScrollGroup" : "onScroll";
      v && (m.targets = v), _t(t, _, m);
    }).on("move", function(p) {
      var h = p.offsetX, d = p.offsetY, m = p.inputEvent;
      t[c].scrollBy(h, d, m.inputEvent, !1);
    }).on("scrollDrag", function(p) {
      var h = p.next;
      h(t[c].getCurrentEvent());
    }), u.dragStart(e, z({ container: f }, s));
  },
  checkScroll: function(t, e) {
    var r = e.datas.dragScroll;
    if (r) {
      var n = t.props, a = n.scrollContainer, s = a === void 0 ? t.getContainer() : a, u = n.scrollThreshold, f = u === void 0 ? 0 : u, c = n.scrollThrottleTime, v = c === void 0 ? 0 : c, p = n.getScrollPosition, h = p === void 0 ? Uw : p, d = n.scrollOptions;
      return r.drag(e, z({ container: s, threshold: f, throttleTime: v, getScrollPosition: function(m) {
        return h({ scrollContainer: m.container, direction: m.direction });
      } }, d)), !0;
    }
  },
  drag: function(t, e) {
    return this.checkScroll(t, e);
  },
  dragEnd: function(t, e) {
    e.datas.dragScroll.dragEnd(), e.datas.dragScroll = null;
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, z(z({}, e), { isControl: !0 }));
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupStart: function(t, e) {
    return this.dragStart(t, z(z({}, e), { targets: t.props.targets }));
  },
  dragGroup: function(t, e) {
    return this.drag(t, z(z({}, e), { targets: t.props.targets }));
  },
  dragGroupEnd: function(t, e) {
    return this.dragEnd(t, z(z({}, e), { targets: t.props.targets }));
  },
  dragGroupControlStart: function(t, e) {
    return this.dragStart(t, z(z({}, e), { targets: t.props.targets, isControl: !0 }));
  },
  dragGroupControl: function(t, e) {
    return this.drag(t, z(z({}, e), { targets: t.props.targets }));
  },
  dragGroupControEnd: function(t, e) {
    return this.dragEnd(t, z(z({}, e), { targets: t.props.targets }));
  },
  unset: function(t) {
    var e, r = t.state;
    (e = r.dragScroll) === null || e === void 0 || e.dragEnd(), r.dragScroll = null;
  }
}, vh = {
  name: "",
  props: [
    "target",
    "dragTargetSelf",
    "dragTarget",
    "dragContainer",
    "container",
    "warpSelf",
    "rootContainer",
    "useResizeObserver",
    "useMutationObserver",
    "zoom",
    "dragFocusedInput",
    "transformOrigin",
    "ables",
    "className",
    "pinchThreshold",
    "pinchOutside",
    "triggerAblesSimultaneously",
    "checkInput",
    "cspNonce",
    "translateZ",
    "hideDefaultLines",
    "props",
    "flushSync",
    "stopPropagation",
    "preventClickEventOnDrag",
    "preventClickDefault",
    "viewContainer",
    "persistData",
    "useAccuratePosition",
    "firstRenderState",
    "linePadding",
    "controlPadding",
    "preventDefault",
    "preventRightClick",
    "preventWheelClick",
    "requestStyles"
  ],
  events: [
    "changeTargets"
  ]
}, Vw = xa("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = fh(r.padding || {}), a = n.left, s = n.top, u = n.right, f = n.bottom, c = t.getState(), v = c.renderPoses, p = c.pos1, h = c.pos2, d = c.pos3, m = c.pos4, _ = [p, h, d, m], x = [];
    return a > 0 && x.push([0, 2]), s > 0 && x.push([0, 1]), u > 0 && x.push([1, 3]), f > 0 && x.push([2, 3]), x.map(function(y, S) {
      var E = k(y, 2), R = E[0], O = E[1], T = _[R], C = _[O], D = v[R], I = v[O], A = bf([0, 0], [100, 0], [0, 100], [100, 100], T, C, D, I);
      if (A.length)
        return e.createElement("div", { key: "padding".concat(S), className: Ct("padding"), style: {
          transform: ns(A, !0)
        } });
    });
  }
}), fp = ["nw", "ne", "se", "sw"];
function Ro(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var Kw = [1, 2, 5, 6], Zw = [0, 3, 4, 7], Wn = [1, -1, -1, 1], Nn = [1, 1, -1, -1];
function Nf(t, e, r, n, a, s, u, f) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = r), f === void 0 && (f = n);
  var c = [], v = !1, p = t.filter(function(d) {
    return !d.virtual;
  }), h = p.map(function(d) {
    var m = d.horizontal, _ = d.vertical, x = d.pos;
    if (_ && !v && (v = !0, c.push("/")), v) {
      var y = Math.max(0, _ === 1 ? x[1] - s : f - x[1]);
      return c.push(De(y, n, e)), y;
    } else {
      var y = Math.max(0, m === 1 ? x[0] - a : u - x[0]);
      return c.push(De(y, r, e)), y;
    }
  });
  return {
    radiusPoses: p,
    styles: c,
    raws: h
  };
}
function ph(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var s = t[a];
    s.sub && (s.horizontal && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1, r[0] = a + 1), s.vertical && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function dh(t, e, r, n, a, s, u) {
  var f, c, v, p;
  s === void 0 && (s = [0, 0]), u === void 0 && (u = !1);
  var h = t.indexOf("/"), d = (h > -1 ? t.slice(0, h) : t).length, m = t.slice(0, d), _ = t.slice(d + 1), x = m.length, y = _.length, S = y > 0, E = k(m, 4), R = E[0], O = R === void 0 ? "0px" : R, T = E[1], C = T === void 0 ? O : T, D = E[2], I = D === void 0 ? O : D, A = E[3], B = A === void 0 ? C : A, H = k(_, 4), W = H[0], G = W === void 0 ? O : W, Y = H[1], X = Y === void 0 ? S ? G : C : Y, rt = H[2], et = rt === void 0 ? S ? G : I : rt, Z = H[3], it = Z === void 0 ? S ? X : B : Z, at = [O, C, I, B].map(function(ot) {
    return rr(ot, e);
  }), $ = [G, X, et, it].map(function(ot) {
    return rr(ot, r);
  }), lt = at.slice(), pt = $.slice();
  f = k(Ro([lt[0], lt[1]], e), 2), lt[0] = f[0], lt[1] = f[1], c = k(Ro([lt[3], lt[2]], e), 2), lt[3] = c[0], lt[2] = c[1], v = k(Ro([pt[0], pt[3]], r), 2), pt[0] = v[0], pt[3] = v[1], p = k(Ro([pt[1], pt[2]], r), 2), pt[1] = p[0], pt[2] = p[1];
  var ft = u ? lt : lt.slice(0, Math.max(s[0], x)), ct = u ? pt : pt.slice(0, Math.max(s[1], y));
  return st(st([], k(ft.map(function(ot, gt) {
    var mt = fp[gt];
    return {
      virtual: gt >= x,
      horizontal: Wn[gt],
      vertical: 0,
      pos: [n + ot, a + (Nn[gt] === -1 ? r : 0)],
      sub: !0,
      raw: at[gt],
      direction: mt
    };
  })), !1), k(ct.map(function(ot, gt) {
    var mt = fp[gt];
    return {
      virtual: gt >= y,
      horizontal: 0,
      vertical: Nn[gt],
      pos: [n + (Wn[gt] === -1 ? e : 0), a + ot],
      sub: !0,
      raw: $[gt],
      direction: mt
    };
  })), !1);
}
function Jw(t, e, r, n, a) {
  a === void 0 && (a = e.length);
  var s = ph(t.slice(n)), u = s.horizontalRange, f = s.verticalRange, c = r - n, v = 0;
  if (c === 0)
    v = a;
  else if (c > 0 && c < u[1])
    v = u[1] - c;
  else if (c >= f[0])
    v = f[0] + f[1] - c;
  else
    return;
  t.splice(r, v), e.splice(r, v);
}
function Qw(t, e, r, n, a, s, u, f, c, v, p) {
  v === void 0 && (v = 0), p === void 0 && (p = 0);
  var h = ph(t.slice(r)), d = h.horizontalRange, m = h.verticalRange;
  if (n > -1)
    for (var _ = Wn[n] === 1 ? s - v : f - s, x = d[1]; x <= n; ++x) {
      var y = Nn[x] === 1 ? p : c, S = 0;
      if (n === x ? S = s : x === 0 ? S = v + _ : Wn[x] === -1 && (S = f - (e[r][0] - v)), t.splice(r + x, 0, {
        horizontal: Wn[x],
        vertical: 0,
        pos: [S, y]
      }), e.splice(r + x, 0, [S, y]), x === 0)
        break;
    }
  else if (a > -1) {
    var E = Nn[a] === 1 ? u - p : c - u;
    if (d[1] === 0 && m[1] === 0) {
      var R = [
        v + E,
        p
      ];
      t.push({
        horizontal: Wn[0],
        vertical: 0,
        pos: R
      }), e.push(R);
    }
    for (var O = m[0], x = m[1]; x <= a; ++x) {
      var S = Wn[x] === 1 ? v : f, y = 0;
      if (a === x ? y = u : x === 0 ? y = p + E : Nn[x] === 1 ? y = e[r + O][1] : Nn[x] === -1 && (y = c - (e[r + O][1] - p)), t.push({
        horizontal: 0,
        vertical: Nn[x],
        pos: [S, y]
      }), e.push([S, y]), x === 0)
        break;
    }
  }
}
function jw(t, e) {
  e === void 0 && (e = t.map(function(a) {
    return a.raw;
  }));
  var r = t.map(function(a, s) {
    return a.horizontal ? e[s] : null;
  }).filter(function(a) {
    return a != null;
  }), n = t.map(function(a, s) {
    return a.vertical ? e[s] : null;
  }).filter(function(a) {
    return a != null;
  });
  return {
    horizontals: r,
    verticals: n
  };
}
var tE = [
  [0, -1, "n"],
  [1, 0, "e"]
], rE = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function Hf(t, e, r) {
  var n = t.props.clipRelative, a = t.state, s = a.width, u = a.height, f = e, c = f.type, v = f.poses, p = c === "rect", h = c === "circle";
  if (c === "polygon")
    return r.map(function(C) {
      return "".concat(De(C[0], s, n), " ").concat(De(C[1], u, n));
    });
  if (p || c === "inset") {
    var d = r[1][1], m = r[3][0], _ = r[7][0], x = r[5][1];
    if (p)
      return [
        d,
        m,
        x,
        _
      ].map(function(C) {
        return "".concat(C, "px");
      });
    var y = [d, s - m, u - x, _].map(function(C, D) {
      return De(C, D % 2 ? s : u, n);
    });
    if (r.length > 8) {
      var S = k(wt(r[4], r[0]), 2), E = S[0], R = S[1];
      y.push.apply(y, st(["round"], k(Nf(v.slice(8).map(function(C, D) {
        return z(z({}, C), { pos: r[D] });
      }), n, E, R, _, d, m, x).styles), !1));
    }
    return y;
  } else if (h || c === "ellipse") {
    var O = r[0], T = De(tt(r[1][1] - O[1]), h ? Math.sqrt((s * s + u * u) / 2) : u, n), y = h ? [T] : [De(tt(r[2][0] - O[0]), s, n), T];
    return y.push("at", De(O[0], s, n), De(O[1], u, n)), y;
  }
}
function qo(t, e, r, n) {
  var a = [n, (n + e) / 2, e], s = [t, (t + r) / 2, r];
  return rE.map(function(u) {
    var f = k(u, 3), c = f[0], v = f[1], p = f[2], h = a[c + 1], d = s[v + 1];
    return {
      vertical: tt(v),
      horizontal: tt(c),
      direction: p,
      pos: [h, d]
    };
  });
}
function hh(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    e[0] = Math.min(e[0], a[0]), e[1] = Math.max(e[1], a[0]), r[0] = Math.min(r[0], a[1]), r[1] = Math.max(r[1], a[1]);
  }), [
    tt(e[1] - e[0]),
    tt(r[1] - r[0])
  ];
}
function lp(t, e, r, n, a) {
  var s, u, f, c, v, p, h, d, m;
  if (t) {
    var _ = a;
    if (!_) {
      var x = jr(t), y = x("clipPath");
      _ = y !== "none" ? y : x("clip");
    }
    if (!((!_ || _ === "none" || _ === "auto") && (_ = n, !_))) {
      var S = Ip(_), E = S.prefix, R = E === void 0 ? _ : E, O = S.value, T = O === void 0 ? "" : O, C = R === "circle", D = " ";
      if (R === "polygon") {
        var I = Hn(T || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        D = ",";
        var A = I.map(function(Vt) {
          var ur = k(Vt.split(" "), 2), nr = ur[0], fr = ur[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              rr(nr, e),
              rr(fr, r)
            ]
          };
        }), B = qn(A.map(function(Vt) {
          return Vt.pos;
        }));
        return {
          type: R,
          clipText: _,
          poses: A,
          splitter: D,
          left: B.minX,
          right: B.maxX,
          top: B.minY,
          bottom: B.maxY
        };
      } else if (C || R === "ellipse") {
        var H = "", W = "", G = 0, Y = 0, I = Sn(T);
        if (C) {
          var X = "";
          s = k(I, 4), u = s[0], X = u === void 0 ? "50%" : u, f = s[2], H = f === void 0 ? "50%" : f, c = s[3], W = c === void 0 ? "50%" : c, G = rr(X, Math.sqrt((e * e + r * r) / 2)), Y = G;
        } else {
          var rt = "", et = "";
          v = k(I, 5), p = v[0], rt = p === void 0 ? "50%" : p, h = v[1], et = h === void 0 ? "50%" : h, d = v[3], H = d === void 0 ? "50%" : d, m = v[4], W = m === void 0 ? "50%" : m, G = rr(rt, e), Y = rr(et, r);
        }
        var Z = [
          rr(H, e),
          rr(W, r)
        ], A = st([
          {
            vertical: 1,
            horizontal: 1,
            pos: Z,
            direction: "nesw"
          }
        ], k(tE.slice(0, C ? 1 : 2).map(function(nr) {
          return {
            vertical: tt(nr[1]),
            horizontal: nr[0],
            direction: nr[2],
            sub: !0,
            pos: [
              Z[0] + nr[0] * G,
              Z[1] + nr[1] * Y
            ]
          };
        })), !1);
        return {
          type: R,
          clipText: _,
          radiusX: G,
          radiusY: Y,
          left: Z[0] - G,
          top: Z[1] - Y,
          right: Z[0] + G,
          bottom: Z[1] + Y,
          poses: A,
          splitter: D
        };
      } else if (R === "inset") {
        var I = Sn(T || "0 0 0 0"), it = I.indexOf("round"), at = (it > -1 ? I.slice(0, it) : I).length, $ = I.slice(at + 1), lt = k(I.slice(0, at), 4), pt = lt[0], ft = lt[1], ct = ft === void 0 ? pt : ft, ot = lt[2], gt = ot === void 0 ? pt : ot, mt = lt[3], Tt = mt === void 0 ? ct : mt, Wt = k([pt, gt].map(function(nr) {
          return rr(nr, r);
        }), 2), ut = Wt[0], vt = Wt[1], Ot = k([Tt, ct].map(function(nr) {
          return rr(nr, e);
        }), 2), yt = Ot[0], Et = Ot[1], It = e - Et, At = r - vt, $t = dh($, It - yt, At - ut, yt, ut), A = st(st([], k(qo(ut, It, At, yt)), !1), k($t), !1);
        return {
          type: "inset",
          clipText: _,
          poses: A,
          top: ut,
          left: yt,
          right: It,
          bottom: At,
          radius: $,
          splitter: D
        };
      } else if (R === "rect") {
        var I = Hn(T || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        D = ",";
        var zt = k(I.map(function(ue) {
          var Ar = va(ue).value;
          return Ar;
        }), 4), Ht = zt[0], Et = zt[1], vt = zt[2], yt = zt[3], A = qo(Ht, Et, vt, yt);
        return {
          type: "rect",
          clipText: _,
          poses: A,
          top: Ht,
          right: Et,
          bottom: vt,
          left: yt,
          values: I,
          splitter: D
        };
      }
    }
  }
}
function eE(t, e, r, n, a) {
  var s = t[e], u = s.direction, f = s.sub, c = t.map(function() {
    return [0, 0];
  }), v = u ? u.split("") : [];
  if (n && e < 8) {
    var p = v.filter(function(G) {
      return G === "w" || G === "e";
    }), h = v.filter(function(G) {
      return G === "n" || G === "s";
    }), d = p[0], m = h[0];
    c[e] = r;
    var _ = k(hh(t), 2), x = _[0], y = _[1], S = x && y ? x / y : 0;
    if (S && a) {
      var E = (e + 4) % 8, R = t[E].pos, O = [0, 0];
      u.indexOf("w") > -1 ? O[0] = -1 : u.indexOf("e") > -1 && (O[0] = 1), u.indexOf("n") > -1 ? O[1] = -1 : u.indexOf("s") > -1 && (O[1] = 1);
      var T = oh([x, y], r, S, O, !0), C = x + T[0], D = y + T[1], I = R[1], A = R[1], B = R[0], H = R[0];
      O[0] === -1 ? B = H - C : O[0] === 1 ? H = B + C : (B = B - C / 2, H = H + C / 2), O[1] === -1 ? I = A - D : (O[1] === 1 || (I = A - D / 2), A = I + D);
      var W = qo(I, H, A, B);
      t.forEach(function(G, Y) {
        c[Y][0] = W[Y].pos[0] - G.pos[0], c[Y][1] = W[Y].pos[1] - G.pos[1];
      });
    } else
      t.forEach(function(G, Y) {
        var X = G.direction;
        X && (X.indexOf(d) > -1 && (c[Y][0] = r[0]), X.indexOf(m) > -1 && (c[Y][1] = r[1]));
      }), d && (c[1][0] = r[0] / 2, c[5][0] = r[0] / 2), m && (c[3][1] = r[1] / 2, c[7][1] = r[1] / 2);
  } else u && !f ? v.forEach(function(G) {
    var Y = G === "n" || G === "s";
    t.forEach(function(X, rt) {
      var et = X.direction, Z = X.horizontal, it = X.vertical;
      !et || et.indexOf(G) === -1 || (c[rt] = [
        Y || !Z ? 0 : r[0],
        !Y || !it ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function nE(t, e) {
  var r = k(xd(t, e), 2), n = r[0], a = r[1], s = e.datas, u = s.clipPath, f = s.clipIndex, c = u, v = c.type, p = c.poses, h = c.splitter, d = p.map(function(E) {
    return E.pos;
  });
  if (v === "polygon")
    d.splice(f, 0, [n, a]);
  else if (v === "inset") {
    var m = Kw.indexOf(f), _ = Zw.indexOf(f), x = p.length;
    if (Qw(p, d, 8, m, _, n, a, d[4][0], d[4][1], d[0][0], d[0][1]), x === p.length)
      return;
  } else
    return;
  var y = Hf(t, u, d), S = "".concat(v, "(").concat(y.join(h), ")");
  _t(t, "onClip", Ft(t, e, z({ clipEventType: "added", clipType: v, poses: d, clipStyles: y, clipStyle: S, distX: 0, distY: 0 }, Xr({
    clipPath: S
  }, e))));
}
function iE(t, e) {
  var r = e.datas, n = r.clipPath, a = r.clipIndex, s = n, u = s.type, f = s.poses, c = s.splitter, v = f.map(function(m) {
    return m.pos;
  }), p = v.length;
  if (u === "polygon")
    f.splice(a, 1), v.splice(a, 1);
  else if (u === "inset") {
    if (a < 8 || (Jw(f, v, a, 8, p), p === f.length))
      return;
  } else
    return;
  var h = Hf(t, n, v), d = "".concat(u, "(").concat(h.join(c), ")");
  _t(t, "onClip", Ft(t, e, z({ clipEventType: "removed", clipType: u, poses: v, clipStyles: h, clipStyle: d, distX: 0, distY: 0 }, Xr({
    clipPath: d
  }, e))));
}
var aE = {
  name: "clippable",
  props: [
    "clippable",
    "defaultClipPath",
    "customClipPath",
    "keepRatio",
    "clipRelative",
    "clipArea",
    "dragWithClip",
    "clipTargetBounds",
    "clipVerticalGuidelines",
    "clipHorizontalGuidelines",
    "clipSnapThreshold"
  ],
  events: [
    "clipStart",
    "clip",
    "clipEnd"
  ],
  css: [
    `.control.clip-control {
background: #6d6;
cursor: pointer;
}
.control.clip-control.clip-radius {
background: #d66;
}
.line.clip-line {
background: #6e6;
cursor: move;
z-index: 1;
}
.clip-area {
position: absolute;
top: 0;
left: 0;
}
.clip-ellipse {
position: absolute;
cursor: move;
border: 1px solid #6d6;
border: var(--zoompx) solid #6d6;
border-radius: 50%;
transform-origin: 0px 0px;
}`,
    `:host {
--bounds-color: #d66;
}`,
    `.guideline {
pointer-events: none;
z-index: 2;
}`,
    `.line.guideline.bounds {
background: #d66;
background: var(--bounds-color);
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.customClipPath, a = r.defaultClipPath, s = r.clipArea, u = r.zoom, f = r.groupable, c = t.getState(), v = c.target, p = c.width, h = c.height, d = c.allMatrix, m = c.is3d, _ = c.left, x = c.top, y = c.pos1, S = c.pos2, E = c.pos3, R = c.pos4, O = c.clipPathState, T = c.snapBoundInfos, C = c.rotation;
    if (!v || f)
      return [];
    var D = lp(v, p, h, a || "inset", O || n);
    if (!D)
      return [];
    var I = m ? 4 : 3, A = D.type, B = D.poses, H = B.map(function(Et) {
      var It = vr(d, Et.pos, I);
      return [
        It[0] - _,
        It[1] - x
      ];
    }), W = [], G = [], Y = A === "rect", X = A === "inset", rt = A === "polygon";
    if (Y || X || rt) {
      var et = X ? H.slice(0, 8) : H;
      G = et.map(function(Et, It) {
        var At = It === 0 ? et[et.length - 1] : et[It - 1], $t = _r(At, Et), zt = Jd(At, Et);
        return e.createElement("div", { key: "clipLine".concat(It), className: Ct("line", "clip-line", "snap-control"), "data-clip-index": It, style: {
          width: "".concat(zt, "px"),
          transform: "translate(".concat(At[0], "px, ").concat(At[1], "px) rotate(").concat($t, "rad) scaleY(").concat(u, ")")
        } });
      });
    }
    if (W = H.map(function(Et, It) {
      return e.createElement("div", { key: "clipControl".concat(It), className: Ct("control", "clip-control", "snap-control"), "data-clip-index": It, style: {
        transform: "translate(".concat(Et[0], "px, ").concat(Et[1], "px) rotate(").concat(C, "rad) scale(").concat(u, ")")
      } });
    }), X && W.push.apply(W, st([], k(H.slice(8).map(function(Et, It) {
      return e.createElement("div", { key: "clipRadiusControl".concat(It), className: Ct("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + It, style: {
        transform: "translate(".concat(Et[0], "px, ").concat(Et[1], "px) rotate(").concat(C, "rad) scale(").concat(u, ")")
      } });
    })), !1)), A === "circle" || A === "ellipse") {
      var Z = D.left, it = D.top, at = D.radiusX, $ = D.radiusY, lt = k(wt(vr(d, [Z, it], I), vr(d, [0, 0], I)), 2), pt = lt[0], ft = lt[1], ct = "none";
      if (!s) {
        for (var ot = Math.max(10, at / 5, $ / 5), gt = [], mt = 0; mt <= ot; ++mt) {
          var Tt = Math.PI * 2 / ot * mt;
          gt.push([
            at + (at - u) * Math.cos(Tt),
            $ + ($ - u) * Math.sin(Tt)
          ]);
        }
        gt.push([at, -2]), gt.push([-2, -2]), gt.push([-2, $ * 2 + 2]), gt.push([at * 2 + 2, $ * 2 + 2]), gt.push([at * 2 + 2, -2]), gt.push([at, -2]), ct = "polygon(".concat(gt.map(function(Et) {
          return "".concat(Et[0], "px ").concat(Et[1], "px");
        }).join(", "), ")");
      }
      W.push(e.createElement("div", { key: "clipEllipse", className: Ct("clip-ellipse", "snap-control"), style: {
        width: "".concat(at * 2, "px"),
        height: "".concat($ * 2, "px"),
        clipPath: ct,
        transform: "translate(".concat(-_ + pt, "px, ").concat(-x + ft, "px) ").concat(ns(d))
      } }));
    }
    if (s) {
      var Wt = _e(st([y, S, E, R], k(H), !1)), ut = Wt.width, vt = Wt.height, Ot = Wt.left, yt = Wt.top;
      if (rt || Y || X) {
        var gt = X ? H.slice(0, 8) : H;
        W.push(e.createElement("div", { key: "clipArea", className: Ct("clip-area", "snap-control"), style: {
          width: "".concat(ut, "px"),
          height: "".concat(vt, "px"),
          transform: "translate(".concat(Ot, "px, ").concat(yt, "px)"),
          clipPath: "polygon(".concat(gt.map(function(It) {
            return "".concat(It[0] - Ot, "px ").concat(It[1] - yt, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return T && ["vertical", "horizontal"].forEach(function(Et) {
      var It = T[Et], At = Et === "horizontal";
      It.isSnap && G.push.apply(G, st([], k(It.snap.posInfos.map(function($t, zt) {
        var Ht = $t.pos, Vt = wt(vr(d, At ? [0, Ht] : [Ht, 0], I), [_, x]), ur = wt(vr(d, At ? [p, Ht] : [Ht, h], I), [_, x]);
        return ua(e, "", Vt, ur, u, "clip".concat(Et, "snap").concat(zt), "guideline");
      })), !1)), It.isBound && G.push.apply(G, st([], k(It.bounds.map(function($t, zt) {
        var Ht = $t.pos, Vt = wt(vr(d, At ? [0, Ht] : [Ht, 0], I), [_, x]), ur = wt(vr(d, At ? [p, Ht] : [Ht, h], I), [_, x]);
        return ua(e, "", Vt, ur, u, "clip".concat(Et, "bounds").concat(zt), "guideline", "bounds", "bold");
      })), !1));
    }), st(st([], k(W), !1), k(G), !1);
  },
  dragControlCondition: function(t, e) {
    return e.inputEvent && (e.inputEvent.target.getAttribute("class") || "").indexOf("clip") > -1;
  },
  dragStart: function(t, e) {
    var r = t.props, n = r.dragWithClip, a = n === void 0 ? !0 : n;
    return a ? !1 : this.dragControlStart(t, e);
  },
  drag: function(t, e) {
    return this.dragControl(t, z(z({}, e), { isDragTarget: !0 }));
  },
  dragEnd: function(t, e) {
    return this.dragControlEnd(t, e);
  },
  dragControlStart: function(t, e) {
    var r = t.state, n = t.props, a = n.defaultClipPath, s = n.customClipPath, u = r.target, f = r.width, c = r.height, v = e.inputEvent ? e.inputEvent.target : null, p = v && v.getAttribute("class") || "", h = e.datas, d = lp(u, f, c, a || "inset", s);
    if (!d)
      return !1;
    var m = d.clipText, _ = d.type, x = d.poses, y = _t(t, "onClipStart", Ft(t, e, {
      clipType: _,
      clipStyle: m,
      poses: x.map(function(S) {
        return S.pos;
      })
    }));
    return y === !1 ? (h.isClipStart = !1, !1) : (h.isControl = p && p.indexOf("clip-control") > -1, h.isLine = p.indexOf("clip-line") > -1, h.isArea = p.indexOf("clip-area") > -1 || p.indexOf("clip-ellipse") > -1, h.clipIndex = v ? parseInt(v.getAttribute("data-clip-index"), 10) : -1, h.clipPath = d, h.isClipStart = !0, r.clipPathState = m, $n(t, e), !0);
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.originalDatas, f = e.isDragTarget;
    if (!s.isClipStart)
      return !1;
    var c = s, v = c.isControl, p = c.isLine, h = c.isArea, d = c.clipIndex, m = c.clipPath;
    if (!m)
      return !1;
    var _ = Un(t.props, "clippable"), x = _.keepRatio, y = 0, S = 0, E = u.draggable, R = Le(e);
    f && E ? (r = k(E.prevBeforeDist, 2), y = r[0], S = r[1]) : (n = k(R, 2), y = n[0], S = n[1]);
    var O = [y, S], T = t.state, C = T.width, D = T.height, I = !h && !v && !p, A = m.type, B = m.poses, H = m.splitter, W = B.map(function(U) {
      return U.pos;
    });
    I && (y = -y, S = -S);
    var G = !v || B[d].direction === "nesw", Y = A === "inset" || A === "rect", X = B.map(function() {
      return [0, 0];
    });
    if (v && !G) {
      var rt = B[d], et = rt.horizontal, Z = rt.vertical, it = [
        y * tt(et),
        S * tt(Z)
      ];
      X = eE(B, d, it, Y, x);
    } else G && (X = W.map(function() {
      return [y, S];
    }));
    var at = W.map(function(U, ht) {
      return Ut(U, X[ht]);
    }), $ = st([], k(at), !1);
    T.snapBoundInfos = null;
    var lt = m.type === "circle", pt = m.type === "ellipse";
    if (lt || pt) {
      var ft = _e(at), ct = tt(ft.bottom - ft.top), ot = tt(pt ? ft.right - ft.left : ct), gt = at[0][1] + ct, mt = at[0][0] - ot, Tt = at[0][0] + ot;
      lt && ($.push([Tt, ft.bottom]), X.push([1, 0])), $.push([ft.left, gt]), X.push([0, 1]), $.push([mt, ft.bottom]), X.push([1, 0]);
    }
    var Wt = qd((_.clipHorizontalGuidelines || []).map(function(U) {
      return rr("".concat(U), D);
    }), (_.clipVerticalGuidelines || []).map(function(U) {
      return rr("".concat(U), C);
    }), C, D), ut = [], vt = [];
    if (lt || pt)
      ut = [$[4][0], $[2][0]], vt = [$[1][1], $[3][1]];
    else if (Y) {
      var Ot = [$[0], $[2], $[4], $[6]], yt = [X[0], X[2], X[4], X[6]];
      ut = Ot.filter(function(U, ht) {
        return yt[ht][0];
      }).map(function(U) {
        return U[0];
      }), vt = Ot.filter(function(U, ht) {
        return yt[ht][1];
      }).map(function(U) {
        return U[1];
      });
    } else
      ut = $.filter(function(U, ht) {
        return X[ht][0];
      }).map(function(U) {
        return U[0];
      }), vt = $.filter(function(U, ht) {
        return X[ht][1];
      }).map(function(U) {
        return U[1];
      });
    var Et = [0, 0], It = Vv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: C, bottom: D }, ut, vt, 5, 5), At = It.horizontal, $t = It.vertical, zt = At.offset, Ht = $t.offset;
    if (At.isBound && (Et[1] += zt), $t.isBound && (Et[0] += Ht), (pt || lt) && X[0][0] === 0 && X[0][1] === 0) {
      var ft = _e(at), Vt = ft.bottom - ft.top, ur = pt ? ft.right - ft.left : Vt, nr = $t.isBound ? tt(Ht) : $t.snapIndex === 0 ? -Ht : Ht, fr = At.isBound ? tt(zt) : At.snapIndex === 0 ? -zt : zt;
      ur -= nr, Vt -= fr, lt && (Vt = Fd($t, At) > 0 ? Vt : ur, ur = Vt);
      var tr = $[0];
      $[1][1] = tr[1] - Vt, $[2][0] = tr[0] + ur, $[3][1] = tr[1] + Vt, $[4][0] = tr[0] - ur;
    } else if (Y && x && v) {
      var ue = k(hh(B), 2), Ar = ue[0], Br = ue[1], We = Ar && Br ? Ar / Br : 0, Dn = B[d], Ie = Dn.direction || "", Ne = $[1][1], gt = $[5][1], mt = $[7][0], Tt = $[3][0];
      tt(zt) <= tt(Ht) ? zt = Yr(zt) * tt(Ht) / We : Ht = Yr(Ht) * tt(zt) * We, Ie.indexOf("w") > -1 ? mt -= Ht : Ie.indexOf("e") > -1 ? Tt -= Ht : (mt += Ht / 2, Tt -= Ht / 2), Ie.indexOf("n") > -1 ? Ne -= zt : Ie.indexOf("s") > -1 ? gt -= zt : (Ne += zt / 2, gt -= zt / 2);
      var an = qo(Ne, Tt, gt, mt);
      $.forEach(function(kr, Zt) {
        var te;
        te = k(an[Zt].pos, 2), kr[0] = te[0], kr[1] = te[1];
      });
    } else
      $.forEach(function(U, ht) {
        var Kt = X[ht];
        Kt[0] && (U[0] -= Ht), Kt[1] && (U[1] -= zt);
      });
    var He = Hf(t, m, at), Pe = "".concat(A, "(").concat(He.join(H), ")");
    if (T.clipPathState = Pe, lt || pt)
      ut = [$[4][0], $[2][0]], vt = [$[1][1], $[3][1]];
    else if (Y) {
      var Ot = [$[0], $[2], $[4], $[6]];
      ut = Ot.map(function(ht) {
        return ht[0];
      }), vt = Ot.map(function(ht) {
        return ht[1];
      });
    } else
      ut = $.map(function(U) {
        return U[0];
      }), vt = $.map(function(U) {
        return U[1];
      });
    if (T.snapBoundInfos = Vv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: C, bottom: D }, ut, vt, 1, 1), E) {
      var on = T.is3d, Mn = T.allMatrix, J = on ? 4 : 3, V = Et;
      f && (V = [
        O[0] + Et[0] - R[0],
        O[1] + Et[1] - R[1]
      ]), E.deltaOffset = er(Mn, [V[0], V[1], 0, 0], J);
    }
    return _t(t, "onClip", Ft(t, e, z({ clipEventType: "changed", clipType: A, poses: at, clipStyle: Pe, clipStyles: He, distX: y, distY: S }, Xr((a = {}, a[A === "rect" ? "clip" : "clipPath"] = Pe, a), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, a = e.isDouble, s = n.isLine, u = n.isClipStart, f = n.isControl;
    return u ? (_t(t, "onClipEnd", se(t, e, {})), a && (f ? iE(t, e) : s && nE(t, e)), a || r) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, oE = {
  name: "originDraggable",
  props: [
    "originDraggable",
    "originRelative"
  ],
  events: [
    "dragOriginStart",
    "dragOrigin",
    "dragOriginEnd"
  ],
  css: [
    `:host[data-able-origindraggable] .control.origin {
pointer-events: auto;
}`
  ],
  dragControlCondition: function(t, e) {
    return e.isRequest ? e.requestAble === "originDraggable" : Er(e.inputEvent.target, Ct("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    $n(t, e);
    var n = Ft(t, e, {
      dragStart: Hr.dragStart(t, new yi().dragStart([0, 0], e))
    }), a = _t(t, "onDragOriginStart", n);
    return r.startOrigin = t.state.transformOrigin, r.startTargetOrigin = t.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, a === !1 ? (r.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var s = k(Le(e), 2), u = s[0], f = s[1], c = t.state, v = c.width, p = c.height, h = c.offsetMatrix, d = c.targetMatrix, m = c.is3d, _ = t.props.originRelative, x = _ === void 0 ? !0 : _, y = m ? 4 : 3, S = [u, f];
    if (a) {
      var E = e.distOrigin;
      (E[0] || E[1]) && (S = E);
    }
    var R = Ut(r.startOrigin, S), O = Ut(r.startTargetOrigin, S), T = wt(S, r.prevOrigin), C = ba(h, d, R, y), D = t.getRect(), I = _e(Vn(C, v, p, y)), A = [
      D.left - I.left,
      D.top - I.top
    ];
    r.prevOrigin = S;
    var B = [
      De(O[0], v, x),
      De(O[1], p, x)
    ].join(" "), H = Hr.drag(t, ya(e, t.state, A, !!n)), W = Ft(t, e, z(z({ width: v, height: p, origin: R, dist: S, delta: T, transformOrigin: B, drag: H }, Xr({
      transformOrigin: B,
      transform: H.transform
    }, e)), { afterTransform: H.transform }));
    return _t(t, "onDragOrigin", W), W;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (_t(t, "onDragOriginEnd", se(t, e, {})), !0) : !1;
  },
  dragGroupControlCondition: function(t, e) {
    return this.dragControlCondition(t, e);
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    return !!r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    return r ? (t.transformOrigin = r.transformOrigin, !0) : !1;
  },
  /**
      * @method Moveable.OriginDraggable#request
      * @param {object} e - the OriginDraggable's request parameter
      * @param {number} [e.x] - x position
      * @param {number} [e.y] - y position
      * @param {number} [e.deltaX] - x number to move
      * @param {number} [e.deltaY] - y number to move
      * @param {array} [e.deltaOrigin] - left, top number to move transform-origin
      * @param {array} [e.origin] - transform-origin position
      * @param {number} [e.isInstant] - Whether to execute the request instantly
      * @return {Moveable.Requester} Moveable Requester
      * @example
  
      * // Instantly Request (requestStart - request - requestEnd)
      * // Use Relative Value
      * moveable.request("originDraggable", { deltaX: 10, deltaY: 10 }, true);
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 }, true);
      * // Use Transform Value
      * moveable.request("originDraggable", { deltaOrigin: [10, 0] }, true);
      * moveable.request("originDraggable", { origin: [100, 0] }, true);
      * // requestStart
      * const requester = moveable.request("originDraggable");
      *
      * // request
      * // Use Relative Value
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * requester.request({ deltaX: 10, deltaY: 10 });
      * // Use Absolute Value
      * moveable.request("originDraggable", { x: 200, y: 100 });
      * moveable.request("originDraggable", { x: 220, y: 100 });
      * moveable.request("originDraggable", { x: 240, y: 100 });
      *
      * // requestEnd
      * requester.requestEnd();
      */
  request: function(t) {
    var e = {}, r = t.getRect(), n = 0, a = 0, s = r.transformOrigin, u = [0, 0];
    return {
      isControl: !0,
      requestStart: function() {
        return { datas: e };
      },
      request: function(f) {
        return "deltaOrigin" in f ? (u[0] += f.deltaOrigin[0], u[1] += f.deltaOrigin[1]) : "origin" in f ? (u[0] = f.origin[0] - s[0], u[1] = f.origin[1] - s[1]) : ("x" in f ? n = f.x - r.left : "deltaX" in f && (n += f.deltaX), "y" in f ? a = f.y - r.top : "deltaY" in f && (a += f.deltaY)), { datas: e, distX: n, distY: a, distOrigin: u };
      },
      requestEnd: function() {
        return { datas: e, isDrag: !0 };
      }
    };
  }
};
function sE(t, e, r, n) {
  var a = t.filter(function(c) {
    var v = c.virtual, p = c.horizontal;
    return p && !v;
  }).length, s = t.filter(function(c) {
    var v = c.virtual, p = c.vertical;
    return p && !v;
  }).length, u = -1;
  if (e === 0 && (a === 0 ? u = 0 : a === 1 && (u = 1)), e === 2 && (a <= 2 ? u = 2 : a <= 3 && (u = 3)), e === 3 && (s === 0 ? u = 4 : s < 4 && (u = 7)), e === 1 && (s <= 1 ? u = 5 : s <= 2 && (u = 6)), !(u === -1 || !t[u].virtual)) {
    var f = t[u];
    uE(t, u), u < 4 ? f.pos[0] = r : f.pos[1] = n;
  }
}
function uE(t, e) {
  e < 4 ? t.slice(0, e + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, e + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function fE(t, e) {
  e < 4 ? t.slice(e, 4).forEach(function(r) {
    r.virtual = !0;
  }) : t.slice(e).forEach(function(r) {
    r.virtual = !0;
  });
}
function cp(t, e, r, n, a) {
  n === void 0 && (n = [0, 0]);
  var s = [];
  return !t || t === "0px" ? s = [] : s = Sn(t), dh(s, e, r, 0, 0, n, a);
}
function vp(t, e, r, n, a) {
  var s = t.state, u = s.width, f = s.height, c = Nf(a, t.props.roundRelative, u, f), v = c.raws, p = c.styles, h = c.radiusPoses, d = jw(h, v), m = d.horizontals, _ = d.verticals, x = p.join(" ");
  s.borderRadiusState = x;
  var y = Ft(t, e, z({ horizontals: m, verticals: _, borderRadius: x, width: u, height: f, delta: n, dist: r }, Xr({
    borderRadius: x
  }, e)));
  return _t(t, "onRound", y), y;
}
function pp(t) {
  var e, r, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var s = t.moveables[0], u = t.getTargets()[0];
    u && (s?.props.target === u ? (a = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = a) : (a = Gf(u).borderRadius, n.borderRadius = a));
  }
  return a;
}
var lE = {
  name: "roundable",
  props: [
    "roundable",
    "roundRelative",
    "minRoundControls",
    "maxRoundControls",
    "roundClickable",
    "roundPadding",
    "isDisplayShadowRoundControls"
  ],
  events: [
    "roundStart",
    "round",
    "roundEnd",
    "roundGroupStart",
    "roundGroup",
    "roundGroupEnd"
  ],
  css: [
    `.control.border-radius {
background: #d66;
cursor: pointer;
z-index: 3;
}`,
    `.control.border-radius.vertical {
background: #d6d;
z-index: 2;
}`,
    `.control.border-radius.virtual {
opacity: 0.5;
z-index: 1;
}`,
    `:host.round-line-clickable .line.direction {
cursor: pointer;
}`
  ],
  className: function(t) {
    var e = t.props.roundClickable;
    return e === !0 || e === "line" ? Ct("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, e) {
    var r = t.getState(), n = r.target, a = r.width, s = r.height, u = r.allMatrix, f = r.is3d, c = r.left, v = r.top, p = r.borderRadiusState, h = t.props, d = h.minRoundControls, m = d === void 0 ? [0, 0] : d, _ = h.maxRoundControls, x = _ === void 0 ? [4, 4] : _, y = h.zoom, S = h.roundPadding, E = S === void 0 ? 0 : S, R = h.isDisplayShadowRoundControls, O = h.groupable;
    if (!n)
      return null;
    var T = p || pp(t), C = f ? 4 : 3, D = cp(T, a, s, m, !0);
    if (!D)
      return null;
    var I = 0, A = 0, B = O ? [0, 0] : [c, v];
    return D.map(function(H, W) {
      var G = H.horizontal, Y = H.vertical, X = H.direction || "", rt = st([], k(H.pos), !1);
      A += Math.abs(G), I += Math.abs(Y), G && X.indexOf("n") > -1 && (rt[1] -= E), Y && X.indexOf("w") > -1 && (rt[0] -= E), G && X.indexOf("s") > -1 && (rt[1] += E), Y && X.indexOf("e") > -1 && (rt[0] += E);
      var et = wt(vr(u, rt, C), B), Z = R && R !== "horizontal", it = H.vertical ? I <= x[1] && (Z || !H.virtual) : A <= x[0] && (R || !H.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(W), className: Ct("control", "border-radius", H.vertical ? "vertical" : "", H.virtual ? "virtual" : ""), "data-radius-index": W, style: {
        display: it ? "block" : "none",
        transform: "translate(".concat(et[0], "px, ").concat(et[1], "px) scale(").concat(y, ")")
      } });
    });
  },
  dragControlCondition: function(t, e) {
    if (!e.inputEvent || e.isRequest)
      return !1;
    var r = e.inputEvent.target.getAttribute("class") || "";
    return r.indexOf("border-radius") > -1 || r.indexOf("moveable-line") > -1 && r.indexOf("moveable-direction") > -1;
  },
  dragGroupControlCondition: function(t, e) {
    return this.dragControlCondition(t, e);
  },
  dragControlStart: function(t, e) {
    var r = e.inputEvent, n = e.datas, a = r.target, s = a.getAttribute("class") || "", u = s.indexOf("border-radius") > -1, f = s.indexOf("moveable-line") > -1 && s.indexOf("moveable-direction") > -1, c = u ? parseInt(a.getAttribute("data-radius-index"), 10) : -1, v = -1;
    if (f) {
      var p = a.getAttribute("data-line-key") || "";
      p && (v = parseInt(p.replace(/render-line-/g, ""), 10), isNaN(v) && (v = -1));
    }
    if (!u && !f)
      return !1;
    var h = Ft(t, e, {}), d = _t(t, "onRoundStart", h);
    if (d === !1)
      return !1;
    n.lineIndex = v, n.controlIndex = c, n.isControl = u, n.isLine = f, $n(t, e);
    var m = t.props, _ = m.roundRelative, x = m.minRoundControls, y = x === void 0 ? [0, 0] : x, S = t.state, E = S.width, R = S.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var O = pp(t), T = cp(O || "", E, R, y, !0) || [];
    return n.controlPoses = T, S.borderRadiusState = Nf(T, _, E, R).styles.join(" "), h;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var a = r.controlIndex, s = k(Le(e), 2), u = s[0], f = s[1], c = [u, f], v = wt(c, r.prevDist), p = t.props.maxRoundControls, h = p === void 0 ? [4, 4] : p, d = t.state, m = d.width, _ = d.height, x = n[a], y = x.vertical, S = x.horizontal, E = n.map(function(O) {
      var T = O.horizontal, C = O.vertical, D = [
        T * S * c[0],
        C * y * c[1]
      ];
      if (T) {
        if (h[0] === 1)
          return D;
        if (h[0] < 4 && T !== S)
          return D;
      } else {
        if (h[1] === 0)
          return D[1] = C * S * c[0] / m * _, D;
        if (y) {
          if (h[1] === 1)
            return D;
          if (h[1] < 4 && C !== y)
            return D;
        }
      }
      return [0, 0];
    });
    E[a] = c;
    var R = n.map(function(O, T) {
      return z(z({}, O), { pos: Ut(O.pos, E[T]) });
    });
    return a < 4 ? R.slice(0, a + 1).forEach(function(O) {
      O.virtual = !1;
    }) : R.slice(4, a + 1).forEach(function(O) {
      O.virtual = !1;
    }), r.prevDist = [u, f], vp(t, e, c, v, R);
  },
  dragControlEnd: function(t, e) {
    var r = t.state;
    r.borderRadiusState = "";
    var n = e.datas, a = e.isDouble;
    if (!n.isRound)
      return !1;
    var s = n.isControl, u = n.controlIndex, f = n.isLine, c = n.lineIndex, v = n.controlPoses, p = v.filter(function(S) {
      var E = S.virtual;
      return E;
    }).length, h = t.props.roundClickable, d = h === void 0 ? !0 : h;
    if (a && d) {
      if (s && (d === !0 || d === "control"))
        fE(v, u);
      else if (f && (d === !0 || d === "line")) {
        var m = k(xd(t, e), 2), _ = m[0], x = m[1];
        sE(v, c, _, x);
      }
      p !== v.filter(function(S) {
        var E = S.virtual;
        return E;
      }).length && vp(t, e, [0, 0], [0, 0], v);
    }
    var y = se(t, e, {});
    return _t(t, "onRoundEnd", y), r.borderRadiusState = "", y;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Re(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return _t(t, "onRoundGroupStart", u), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Re(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] }), Xr({
        borderRadius: r.borderRadius
      }, f));
    }) }, r);
    return _t(t, "onRoundGroup", u), u;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, a = Re(t, "roundable", e);
    is(t, "onRound", function(f) {
      var c = z({ targets: t.props.targets, events: a.map(function(v, p) {
        return z(z(z({}, v), { target: n[p], moveable: r[p], currentTarget: r[p] }), Xr({
          borderRadius: f.borderRadius
        }, v));
      }) }, f);
      _t(t, "onRoundGroup", c);
    });
    var s = this.dragControlEnd(t, e);
    if (!s)
      return !1;
    var u = z({ targets: t.props.targets, events: a.map(function(f, c) {
      var v;
      return z(z({}, f), { target: n[c], moveable: r[c], currentTarget: r[c], lastEvent: (v = f.datas) === null || v === void 0 ? void 0 : v.lastEvent });
    }) }, s);
    return _t(t, "onRoundGroupEnd", u), u;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function cE(t, e) {
  var r = e ? 4 : 3, n = sr(r), a = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var gh = {
  isPinch: !0,
  name: "beforeRenderable",
  props: [],
  events: [
    "beforeRenderStart",
    "beforeRender",
    "beforeRenderEnd",
    "beforeRenderGroupStart",
    "beforeRenderGroup",
    "beforeRenderGroupEnd"
  ],
  dragRelation: "weak",
  setTransform: function(t, e) {
    var r = t.state, n = r.is3d, a = r.targetMatrix, s = r.inlineTransform, u = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(od(a, !0), ")"), f = !s || s === "none" ? u : s;
    e.datas.startTransforms = cE(f, n) ? [] : Sn(f);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return Ft(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = br(r) ? r : Sn(r);
      },
      isPinch: !!e.isPinch
    });
  },
  fillDragParams: function(t, e) {
    return Ft(t, e, {
      isPinch: !!e.isPinch
    });
  },
  dragStart: function(t, e) {
    this.setTransform(t, e), this.resetStyle(e), _t(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), _t(t, "onBeforeRender", Ft(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), _t(t, "onBeforeRenderEnd", Ft(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = Re(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.setTransform(c, u), r.resetStyle(u), r.fillDragStartParams(c, u);
    });
    _t(t, "onBeforeRenderGroupStart", Ft(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      setTransform: function() {
      },
      events: s
    }));
  },
  dragGroup: function(t, e) {
    var r = this;
    this.drag(t, e);
    var n = Re(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.resetStyle(u), r.fillDragParams(c, u);
    });
    _t(t, "onBeforeRenderGroup", Ft(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: s
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), _t(t, "onBeforeRenderGroupEnd", Ft(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag,
      targets: t.props.targets
    }));
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupControlStart: function(t, e) {
    return this.dragGroupStart(t, e);
  },
  dragGroupControl: function(t, e) {
    return this.dragGroup(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    return this.dragGroupEnd(t, e);
  }
}, mh = {
  name: "renderable",
  props: [],
  events: [
    "renderStart",
    "render",
    "renderEnd",
    "renderGroupStart",
    "renderGroup",
    "renderGroupEnd"
  ],
  dragRelation: "weak",
  dragStart: function(t, e) {
    _t(t, "onRenderStart", Ft(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  drag: function(t, e) {
    _t(t, "onRender", this.fillDragParams(t, e));
  },
  dragAfter: function(t, e) {
    return this.drag(t, e);
  },
  dragEnd: function(t, e) {
    _t(t, "onRenderEnd", this.fillDragEndParams(t, e));
  },
  dragGroupStart: function(t, e) {
    _t(t, "onRenderGroupStart", Ft(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = Re(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragParams(c, u);
    });
    _t(t, "onRenderGroup", Ft(t, e, z(z({ isPinch: !!e.isPinch, targets: t.props.targets, transform: So(e), transformObject: {} }, Xr(Co(e))), { events: s })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = Re(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragEndParams(c, u);
    });
    _t(t, "onRenderGroupEnd", Ft(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: s, transformObject: {}, transform: So(e) }, Xr(Co(e)))));
  },
  dragControlStart: function(t, e) {
    return this.dragStart(t, e);
  },
  dragControl: function(t, e) {
    return this.drag(t, e);
  },
  dragControlAfter: function(t, e) {
    return this.dragAfter(t, e);
  },
  dragControlEnd: function(t, e) {
    return this.dragEnd(t, e);
  },
  dragGroupControlStart: function(t, e) {
    return this.dragGroupStart(t, e);
  },
  dragGroupControl: function(t, e) {
    return this.dragGroup(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    return this.dragGroupEnd(t, e);
  },
  fillDragParams: function(t, e) {
    var r = {};
    return xi(ko(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Ft(t, e, z({ isPinch: !!e.isPinch, transformObject: r, transform: So(e) }, Xr(Co(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return xi(ko(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Ft(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: So(e) }, Xr(Co(e))));
  }
};
function ia(t, e, r, n, a, s, u) {
  s.clientDistX = s.distX, s.clientDistY = s.distY;
  var f = a === "Start", c = a === "End", v = a === "After", p = t.state.target, h = s.isRequest, d = n.indexOf("Control") > -1;
  if (!p || f && d && !h && t.areaElement === s.inputEvent.target)
    return !1;
  var m = st([], k(e), !1);
  if (h) {
    var _ = s.requestAble;
    m.some(function(W) {
      return W.name === _;
    }) || m.push.apply(m, st([], k(t.props.ables.filter(function(W) {
      return W.name === _;
    })), !1));
  }
  if (!m.length || m.every(function(W) {
    return W.dragRelation;
  }))
    return !1;
  var x = s.inputEvent, y;
  c && x && (y = document.elementFromPoint(s.clientX, s.clientY) || x.target);
  var S = !1, E = function() {
    var W;
    S = !0, (W = s.stop) === null || W === void 0 || W.call(s);
  }, R = f && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  R && t.updateRect(a, !0, !1);
  var O = s.datas, T = d ? "controlGesto" : "targetGesto", C = t[T], D = function(W, G, Y) {
    if (!(G in W) || C !== t[T])
      return !1;
    var X = W.name, rt = O[X] || (O[X] = {});
    if (f && (rt.isEventStart = !Y || !W[Y] || W[Y](t, s)), !rt.isEventStart)
      return !1;
    var et = W[G](t, z(z({}, s), { stop: E, datas: rt, originalDatas: O, inputTarget: y }));
    return t._emitter.off(), f && et === !1 && (rt.isEventStart = !1), et;
  };
  R && m.forEach(function(W) {
    W.unset && W.unset(t);
  }), D(gh, "drag".concat(n).concat(a));
  var I = 0, A = 0;
  r.forEach(function(W) {
    if (S)
      return !1;
    var G = "".concat(W).concat(n).concat(a), Y = "".concat(W).concat(n, "Condition");
    a === "" && !h && Bw(t.state, s);
    var X = m.filter(function(Z) {
      return Z[G];
    });
    X = X.filter(function(Z, it) {
      return Z.name && X.indexOf(Z) === it;
    });
    var rt = X.filter(function(Z) {
      return D(Z, G, Y);
    }), et = rt.length;
    S && ++I, et && ++A, !S && f && X.length && !et && (I += X.filter(function(Z) {
      var it = Z.name, at = O[it];
      return at.isEventStart ? Z.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!v || A) && D(mh, "drag".concat(n).concat(a));
  var B = C !== t[T] || I === r.length;
  if ((c || S || B) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(W) {
    W.state.gestos = {};
  }), m.forEach(function(W) {
    W.unset && W.unset(t);
  })), f && !B && !h && A && t.props.preventDefault && s?.preventDefault(), t.isUnmounted || B)
    return !1;
  if (!f && A && !u || c) {
    var H = t.props.flushSync || Vd;
    H(function() {
      t.updateRect(c ? a : "", !0, !1), t.forceUpdate();
    });
  }
  return !f && !c && !v && A && !u && ia(t, e, r, n, a + "After", s), !0;
}
function Yf(t, e) {
  return function(r, n) {
    var a;
    n === void 0 && (n = r.inputEvent.target);
    var s = n, u = t.areaElement, f = t._dragTarget;
    return !f || !e && (!((a = t.controlGesto) === null || a === void 0) && a.isFlag()) ? !1 : s === f || f.contains(s) || s === u || !t.isMoveableElement(s) && !t.controlBox.contains(s) || Er(s, "moveable-area") || Er(s, "moveable-padding") || Er(s, "moveable-edgeDraggable");
  };
}
function _h(t, e, r) {
  var n = t.controlBox, a = [], s = t.props, u = s.dragArea, f = t.state.target, c = s.dragTarget;
  a.push(n), (!u || c) && a.push(e), !u && c && f && e !== f && s.dragTargetSelf && a.push(f);
  var v = Yf(t);
  return yh(t, a, "targetAbles", r, {
    dragStart: v,
    pinchStart: v
  });
}
function xh(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var a = Yf(t, !0), s = function(u, f) {
    if (f === void 0 && (f = u.inputEvent.target), f === r)
      return !0;
    var c = a(u, f);
    return !c;
  };
  return yh(t, n, "controlAbles", e, {
    dragStart: s,
    pinchStart: s
  });
}
function yh(t, e, r, n, a) {
  a === void 0 && (a = {});
  var s = r === "targetAbles", u = t.props, f = u.pinchOutside, c = u.pinchThreshold, v = u.preventClickEventOnDrag, p = u.preventClickDefault, h = u.checkInput, d = u.dragFocusedInput, m = u.preventDefault, _ = m === void 0 ? !0 : m, x = u.preventRightClick, y = x === void 0 ? !0 : x, S = u.preventWheelClick, E = S === void 0 ? !0 : S, R = u.dragContainer, O = Fe(R, !0), T = {
    preventDefault: _,
    preventRightClick: y,
    preventWheelClick: E,
    container: O || bn(t.getControlBoxElement()),
    pinchThreshold: c,
    pinchOutside: f,
    preventClickEventOnDrag: s ? v : !1,
    preventClickEventOnDragStart: s ? p : !1,
    preventClickEventByCondition: s ? null : function(I) {
      return t.controlBox.contains(I.target);
    },
    checkInput: s ? h : !1,
    dragFocusedInput: d
  }, C = new kS(e, T), D = n === "Control";
  return ["drag", "pinch"].forEach(function(I) {
    ["Start", "", "End"].forEach(function(A) {
      C.on("".concat(I).concat(A), function(B) {
        var H, W = B.eventType, G = I === "drag" && B.isPinch;
        if (a[W] && !a[W](B)) {
          B.stop();
          return;
        }
        if (!G) {
          var Y = I === "drag" ? [I] : ["drag", I], X = st([], k(t[r]), !1), rt = ia(t, X, Y, n, A, B);
          rt ? (t.props.stopPropagation || A === "Start" && D) && ((H = B?.inputEvent) === null || H === void 0 || H.stopPropagation()) : B.stop();
        }
      });
    });
  }), C;
}
var vE = /* @__PURE__ */ (function() {
  function t(e, r, n) {
    var a = this;
    this.target = e, this.moveable = r, this.eventName = n, this.ables = [], this._onEvent = function(s) {
      var u = a.eventName, f = a.moveable;
      f.state.disableNativeEvent || a.ables.forEach(function(c) {
        c[u](f, {
          inputEvent: s
        });
      });
    }, e.addEventListener(n.toLowerCase(), this._onEvent);
  }
  return t.prototype.setAbles = function(e) {
    this.ables = e;
  }, t.prototype.destroy = function() {
    this.target.removeEventListener(this.eventName.toLowerCase(), this._onEvent), this.target = null, this.moveable = null;
  }, t;
})();
function pE(t, e, r, n) {
  var a;
  r === void 0 && (r = e);
  var s = Ed(t, e), u = s.matrixes, f = s.is3d, c = s.targetMatrix, v = s.transformOrigin, p = s.targetOrigin, h = s.offsetContainer, d = s.hasFixed, m = s.zoom, _ = MC(h, r), x = _.matrixes, y = _.is3d, S = _.offsetContainer, E = _.zoom, R = n, O = 4, T = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, C = c, D = sr(O), I = sr(O), A = sr(O), B = sr(O), H = u.length, W = x.map(function(it) {
    return z(z({}, it), { matrix: it.matrix ? st([], k(it.matrix), !1) : void 0 });
  }).reverse();
  u.reverse(), !f && R && (C = Oe(C, 3, 4), rf(u)), !y && R && rf(W), W.forEach(function(it) {
    I = er(I, it.matrix, O);
  });
  var G = r || En(t), Y = ((a = W[0]) === null || a === void 0 ? void 0 : a.target) || fa(G, G, !0).offsetParent, X = W.slice(1).reduce(function(it, at) {
    return er(it, at.matrix, O);
  }, sr(O));
  u.forEach(function(it, at) {
    if (H - 2 === at && (A = D.slice()), H - 1 === at && (B = D.slice()), !it.matrix) {
      var $ = u[at + 1], lt = Ow(it, $, Y, O, er(X, D, O));
      it.matrix = Xn(lt, O);
    }
    D = er(D, it.matrix, O);
  });
  var rt = !T && f;
  C || (C = sr(rt ? 4 : 3));
  var et = ns(T && C.length === 16 ? Oe(C, 4, 3) : C, rt), Z = I;
  return I = id(I, O, O), {
    hasZoom: m !== 1 || E !== 1,
    hasFixed: d,
    matrixes: u,
    rootMatrix: I,
    originalRootMatrix: Z,
    beforeMatrix: A,
    offsetMatrix: B,
    allMatrix: D,
    targetMatrix: C,
    targetTransform: et,
    inlineTransform: t.style.transform,
    transformOrigin: v,
    targetOrigin: p,
    is3d: R,
    offsetContainer: h,
    offsetRootContainer: S
  };
}
function dE(t, e, r, n) {
  r === void 0 && (r = e);
  var a = 0, s = 0, u = 0, f = {}, c = Qd(t);
  if (t && (a = c.offsetWidth, s = c.offsetHeight), t) {
    var v = pE(t, e, r, n), p = mi(v.allMatrix, v.transformOrigin, a, s);
    f = z(z({}, v), p);
    var h = mi(v.allMatrix, [50, 50], 100, 100);
    u = jd([h.pos1, h.pos2], h.direction);
  }
  var d = 4;
  return z(z(z({ hasZoom: !1, width: a, height: s, rotation: u }, c), { originalRootMatrix: sr(d), rootMatrix: sr(d), beforeMatrix: sr(d), offsetMatrix: sr(d), allMatrix: sr(d), targetMatrix: sr(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), f);
}
function of(t, e, r, n, a, s) {
  s === void 0 && (s = []);
  var u = 1, f = [0, 0], c = Eo(), v = Eo(), p = Eo(), h = Eo(), d = [0, 0], m = {}, _ = dE(e, r, a, !0);
  if (e) {
    var x = jr(e);
    s.forEach(function(W) {
      m[W] = x(W);
    });
    var y = _.is3d ? 4 : 3, S = mi(_.offsetMatrix, Ut(_.transformOrigin, ad(_.targetMatrix, y)), _.width, _.height);
    u = S.direction, f = Ut(S.origin, [S.left - _.left, S.top - _.top]), h = na(_.offsetRootContainer);
    var E = fa(n, n, !0).offsetParent || _.offsetRootContainer;
    if (_.hasZoom) {
      var R = mi(er(_.originalRootMatrix, _.allMatrix), _.transformOrigin, _.width, _.height), O = mi(_.originalRootMatrix, Ho(jr(E)("transformOrigin")).map(function(W) {
        return parseFloat(W);
      }), E.offsetWidth, E.offsetHeight);
      if (c = Tu(R, h), p = Tu(O, h, E, !0), t) {
        var T = R.left, C = R.top;
        v = Tu({
          left: T,
          top: C,
          bottom: C,
          right: C
        }, h);
      }
    } else {
      c = na(e), p = DC(E), t && (v = na(t));
      var D = p.left, I = p.top, A = p.clientLeft, B = p.clientTop, H = [
        c.left - D,
        c.top - I
      ];
      d = wt(Ci(_.rootMatrix, H, 4), [A + _.left, B + _.top]);
    }
  }
  return z({ targetClientRect: c, containerClientRect: p, moveableClientRect: v, rootContainerClientRect: h, beforeDirection: u, beforeOrigin: f, originalBeforeOrigin: f, target: e, style: m, offsetDelta: d }, _);
}
function dp(t) {
  var e = t.pos1, r = t.pos2, n = t.pos3, a = t.pos4;
  if (!e || !r || !n || !a)
    return null;
  var s = qn([e, r, n, a]), u = [s.minX, s.minY], f = wt(t.origin, u);
  return e = wt(e, u), r = wt(r, u), n = wt(n, u), a = wt(a, u), z(z({}, t), {
    left: t.left,
    top: t.top,
    posDelta: u,
    pos1: e,
    pos2: r,
    pos3: n,
    pos4: a,
    origin: f,
    beforeOrigin: f,
    // originalBeforeOrigin: origin,
    isPersisted: !0
  });
}
var wi = /* @__PURE__ */ (function(t) {
  _a(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = z({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, of(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new Ko(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var n = r.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        Tb(r._observerId), r._observerId = Pp(function() {
          r.isDragging() || r.updateRect();
        });
      }
    }, r._onPreventClick = function(n) {
      n.stopPropagation(), n.preventDefault();
    }, r;
  }
  return e.prototype.render = function() {
    var r = this.props, n = this.getState(), a = r.parentPosition, s = r.className, u = r.target, f = r.zoom, c = r.cspNonce, v = r.translateZ, p = r.cssStyled, h = r.groupable, d = r.linePadding, m = r.controlPadding;
    this._checkUpdateRootContainer(), this.checkUpdate(), this.updateRenderPoses();
    var _ = k(a || [0, 0], 2), x = _[0], y = _[1], S = n.left, E = n.top, R = n.target, O = n.direction, T = n.hasFixed, C = n.offsetDelta, D = r.targets, I = this.isDragging(), A = {};
    this.getEnabledAbles().forEach(function(X) {
      A["data-able-".concat(X.name.toLowerCase())] = !0;
    });
    var B = this._getAbleClassName(), H = D && D.length && (R || h) || u || !this._hasFirstTarget && this.state.isPersisted, W = this.controlBox || this.props.firstRenderState || this.props.persistData, G = [S - x, E - y];
    !h && r.useAccuratePosition && (G[0] += C[0], G[1] += C[1]);
    var Y = {
      position: T ? "fixed" : "absolute",
      display: H ? "block" : "none",
      visibility: W ? "visible" : "hidden",
      transform: "translate3d(".concat(G[0], "px, ").concat(G[1], "px, ").concat(v, ")"),
      "--zoom": f,
      "--zoompx": "".concat(f, "px")
    };
    return d && (Y["--moveable-line-padding"] = d), m && (Y["--moveable-control-padding"] = m), Me(
      p,
      z({ cspNonce: c, ref: je(this, "controlBox"), className: "".concat(Ct("control-box", O === -1 ? "reverse" : "", I ? "dragging" : ""), " ").concat(B, " ").concat(s) }, A, { onClick: this._onPreventClick, style: Y }),
      this.renderAbles(),
      this._renderLines()
    );
  }, e.prototype.componentDidMount = function() {
    this.isMoveableMounted = !0, this.isUnmounted = !1;
    var r = this.props, n = r.parentMoveable, a = r.container;
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateTargets(), this._updateNativeEvents(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(this.props), !a && !n && !this.state.isPersisted && (this.updateRect("", !1, !1), this.forceUpdate());
  }, e.prototype.componentDidUpdate = function(r) {
    this._checkUpdateRootContainer(), this._checkUpdateViewContainer(), this._updateNativeEvents(), this._updateTargets(), this._updateEvents(), this.updateCheckInput(), this._updateObserver(r);
  }, e.prototype.componentWillUnmount = function() {
    var r, n;
    this.isMoveableMounted = !1, this.isUnmounted = !0, this._emitter.off(), (r = this._reiszeObserver) === null || r === void 0 || r.disconnect(), (n = this._mutationObserver) === null || n === void 0 || n.disconnect();
    var a = this._viewContainer;
    a && this._changeAbleViewClassNames([]), hi(this, !1), hi(this, !0);
    var s = this.events;
    for (var u in s) {
      var f = s[u];
      f && f.destroy();
    }
  }, e.prototype.getTargets = function() {
    var r = this.props.target;
    return r ? [r] : [];
  }, e.prototype.getAble = function(r) {
    var n = this.props.ables || [];
    return Qr(n, function(a) {
      return a.name === r;
    });
  }, e.prototype.getContainer = function() {
    var r = this.props, n = r.parentMoveable, a = r.wrapperMoveable, s = r.container;
    return s || a && a.getContainer() || n && n.getContainer() || this.controlBox.parentElement;
  }, e.prototype.getControlBoxElement = function() {
    return this.controlBox;
  }, e.prototype.getDragElement = function() {
    return this._dragTarget;
  }, e.prototype.isMoveableElement = function(r) {
    var n;
    return r && (((n = r.getAttribute) === null || n === void 0 ? void 0 : n.call(r, "class")) || "").indexOf(wf) > -1;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var a = this.targetGesto, s = this.controlGesto;
    return a && Yf(this)({ inputEvent: r }, n) ? a.isFlag() || a.triggerDragStart(r) : s && this.isMoveableElement(n) && (s.isFlag() || s.triggerDragStart(r)), this;
  }, e.prototype.hitTest = function(r) {
    var n = this.state, a = n.target, s = n.pos1, u = n.pos2, f = n.pos3, c = n.pos4, v = n.targetClientRect;
    if (!a)
      return 0;
    var p;
    if (Di(r)) {
      var h = r.getBoundingClientRect();
      p = {
        left: h.left,
        top: h.top,
        width: h.width,
        height: h.height
      };
    } else
      p = z({ width: 0, height: 0 }, r);
    var d = p.left, m = p.top, _ = p.width, x = p.height, y = Fv([s, u, c, f], v), S = PS(y, [
      [d, m],
      [d + _, m],
      [d + _, m + x],
      [d, m + x]
    ]), E = fd(y);
    return !S || !E ? 0 : Math.min(100, S / E * 100);
  }, e.prototype.isInside = function(r, n) {
    var a = this.state, s = a.target, u = a.pos1, f = a.pos2, c = a.pos3, v = a.pos4, p = a.targetClientRect;
    return s ? Hu([r, n], Fv([u, f, v, c], p)) : !1;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0);
    var s = this.props, u = !s.parentPosition && !s.wrapperMoveable;
    u && bi(!0);
    var f = s.parentMoveable, c = this.state, v = c.target || s.target, p = this.getContainer(), h = f ? f._rootContainer : this._rootContainer, d = of(this.controlBox, v, p, p, h || p, this._getRequestStyles());
    if (!v && this._hasFirstTarget && s.persistData) {
      var m = dp(s.persistData);
      for (var _ in m)
        d[_] = m[_];
    }
    u && bi(), this.updateState(d, f ? !1 : a);
  }, e.prototype.isDragging = function(r) {
    var n, a, s = this.targetGesto, u = this.controlGesto;
    if (s?.isFlag()) {
      if (!r)
        return !0;
      var f = s.getEventData();
      return !!(!((n = f[r]) === null || n === void 0) && n.isEventStart);
    }
    if (u?.isFlag()) {
      if (!r)
        return !0;
      var f = u.getEventData();
      return !!(!((a = f[r]) === null || a === void 0) && a.isEventStart);
    }
    return !1;
  }, e.prototype.updateTarget = function(r) {
    this.updateRect(r, !0);
  }, e.prototype.getRect = function() {
    var r = this.state, n = ye(this.state), a = k(n, 4), s = a[0], u = a[1], f = a[2], c = a[3], v = _e(n), p = r.width, h = r.height, d = v.width, m = v.height, _ = v.left, x = v.top, y = [r.left, r.top], S = Ut(y, r.origin), E = Ut(y, r.beforeOrigin), R = r.transformOrigin;
    return {
      width: d,
      height: m,
      left: _,
      top: x,
      pos1: s,
      pos2: u,
      pos3: f,
      pos4: c,
      offsetWidth: p,
      offsetHeight: h,
      beforeOrigin: E,
      origin: S,
      transformOrigin: R,
      rotation: this.getRotation()
    };
  }, e.prototype.getManager = function() {
    return this;
  }, e.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var n = this.targetGesto;
      n?.isIdle() === !1 && ef(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && ef(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, a = r.pos2, s = r.direction;
    return Fw(n, a, s);
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this, u = s.props, f = u.parentMoveable || u.wrapperMoveable || s, c = f.props.ables, v = u.groupable, p = Qr(c, function(S) {
      return S.name === r;
    });
    if (this.isDragging() || !p || !p.request)
      return {
        request: function() {
          return this;
        },
        requestEnd: function() {
          return this;
        }
      };
    var h = p.request(s), d = a || n.isInstant, m = h.isControl ? "controlAbles" : "targetAbles", _ = "".concat(v ? "Group" : "").concat(h.isControl ? "Control" : ""), x = st([], k(f[m]), !1), y = {
      request: function(S) {
        return ia(s, x, ["drag"], _, "", z(z({}, h.request(S)), { requestAble: r, isRequest: !0 }), d), y;
      },
      requestEnd: function() {
        return ia(s, x, ["drag"], _, "End", z(z({}, h.requestEnd()), { requestAble: r, isRequest: !0 }), d), y;
      }
    };
    return ia(s, x, ["drag"], _, "Start", z(z({}, h.requestStart(n)), { requestAble: r, isRequest: !0 }), d), d ? y.request(n).requestEnd() : y;
  }, e.prototype.getMoveables = function() {
    return [this];
  }, e.prototype.destroy = function() {
    this.componentWillUnmount();
  }, e.prototype.updateRenderPoses = function() {
    var r = this.getState(), n = this.props, a = n.padding, s = r.originalBeforeOrigin, u = r.transformOrigin, f = r.allMatrix, c = r.is3d, v = r.pos1, p = r.pos2, h = r.pos3, d = r.pos4, m = r.left, _ = r.top, x = r.isPersisted, y = n.zoom || 1;
    if (!a && y <= 1) {
      r.renderPoses = [
        v,
        p,
        h,
        d
      ], r.renderLines = [
        [v, p],
        [p, d],
        [d, h],
        [h, v]
      ];
      return;
    }
    var S = fh(a || {}), E = S.left, R = S.top, O = S.bottom, T = S.right, C = c ? 4 : 3, D = [];
    x ? D = u : this.controlBox && n.groupable ? D = s : D = Ut(s, [m, _]);
    var I = Go(C, Xn(D.map(function(Y) {
      return -Y;
    }), C), f, Xn(u, C)), A = me(I, v, [-E, -R], C), B = me(I, p, [T, -R], C), H = me(I, h, [-E, O], C), W = me(I, d, [T, O], C);
    r.renderPoses = [
      A,
      B,
      H,
      W
    ], r.renderLines = [
      [A, B],
      [B, W],
      [W, H],
      [H, A]
    ];
    {
      var G = y / 2;
      r.renderLines = [
        [
          me(I, v, [-E - G, -R], C),
          me(I, p, [T + G, -R], C)
        ],
        [
          me(I, p, [T, -R - G], C),
          me(I, d, [T, O + G], C)
        ],
        [
          me(I, d, [T + G, O], C),
          me(I, h, [-E - G, O], C)
        ],
        [
          me(I, h, [-E, O + G], C),
          me(I, v, [-E, -R - G], C)
        ]
      ];
    }
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, n = r.target, a = r.container, s = r.parentMoveable, u = this.state, f = u.target, c = u.container;
    if (!(!f && !n)) {
      this.updateAbles();
      var v = !nf(f, n), p = v || !nf(c, a);
      if (p) {
        var h = a || this.controlBox;
        h && this.unsetAbles(), this.updateState({ target: n, container: a }), !s && h && this.updateRect("End", !1, !1), this._isPropTargetChanged = v;
      }
    }
  }, e.prototype.waitToChangeTarget = function() {
    return new Promise(function() {
    });
  }, e.prototype.triggerEvent = function(r, n) {
    var a = this.props;
    if (this._emitter.trigger(r, n), a.parentMoveable && n.isRequest && !n.isRequestChild)
      return a.parentMoveable.triggerEvent(r, n, !0);
    var s = a[r];
    return s && s(n);
  }, e.prototype.useCSS = function(r, n) {
    var a = this.props.customStyledMap, s = r + n;
    return a[s] || (a[s] = vd(r, n)), a[s];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, s = n.persistData, u = n.firstRenderState;
    if (u && !a)
      return u;
    if (!this._hasFirstTarget && s) {
      var f = dp(s);
      if (f)
        return this.updateState(f, !1), this.state;
    }
    return this.state.isPersisted = !1, this.state;
  }, e.prototype.updateSelectors = function() {
  }, e.prototype.unsetAbles = function() {
    var r = this;
    this.targetAbles.forEach(function(n) {
      n.unset && n.unset(r);
    });
  }, e.prototype.updateAbles = function(r, n) {
    r === void 0 && (r = this.props.ables), n === void 0 && (n = "");
    var a = this.props, s = a.triggerAblesSimultaneously, u = this.getEnabledAbles(r), f = "drag".concat(n, "Start"), c = "pinch".concat(n, "Start"), v = "drag".concat(n, "ControlStart"), p = Do(u, [f, c], s), h = Do(u, [v], s);
    this.enabledAbles = u, this.targetAbles = p, this.controlAbles = h;
  }, e.prototype.updateState = function(r, n) {
    if (n) {
      if (this.isUnmounted)
        return;
      this.setState(r);
    } else {
      var a = this.state;
      for (var s in r)
        a[s] = r[s];
    }
  }, e.prototype.getEnabledAbles = function(r) {
    r === void 0 && (r = this.props.ables);
    var n = this.props;
    return r.filter(function(a) {
      return a && (a.always && n[a.name] !== !1 || n[a.name]);
    });
  }, e.prototype.renderAbles = function() {
    var r = this, n = this.props, a = n.triggerAblesSimultaneously, s = {
      createElement: Me
    };
    return this.renderState = {}, Aw(ah(Do(this.getEnabledAbles(), ["render"], a).map(function(u) {
      var f = u.render;
      return f(r, s) || [];
    })).filter(function(u) {
      return u;
    }), function(u) {
      var f = u.key;
      return f;
    }).map(function(u) {
      return u[0];
    });
  }, e.prototype.updateCheckInput = function() {
    this.targetGesto && (this.targetGesto.options.checkInput = this.props.checkInput);
  }, e.prototype._getRequestStyles = function() {
    var r = this.getEnabledAbles().reduce(function(n, a) {
      var s, u, f = (u = (s = a.requestStyle) === null || s === void 0 ? void 0 : s.call(a)) !== null && u !== void 0 ? u : [];
      return st(st([], k(n), !1), k(f), !1);
    }, st([], k(this.props.requestStyles || []), !1));
    return r;
  }, e.prototype._updateObserver = function(r) {
    this._updateResizeObserver(r), this._updateMutationObserver(r);
  }, e.prototype._updateEvents = function() {
    var r = this.targetAbles.length, n = this.controlAbles.length, a = this._dragTarget, s = !r && this.targetGesto || this._isTargetChanged(!0);
    s && (hi(this, !1), this.updateState({ gestos: {} })), n || hi(this, !0), a && r && !this.targetGesto && (this.targetGesto = _h(this, a, "")), !this.controlGesto && n && (this.controlGesto = xh(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = Fe(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, a = n.zoom, s = n.hideDefaultLines, u = n.hideChildMoveableDefaultLines, f = n.parentMoveable;
    if (s || f && u)
      return [];
    var c = this.getState(), v = {
      createElement: Me
    };
    return c.renderLines.map(function(p, h) {
      return ua(v, "", p[0], p[1], a, "render-line-".concat(h));
    });
  }, e.prototype._isTargetChanged = function(r) {
    var n = this.props, a = n.dragTarget || n.target, s = this._prevOriginalDragTarget, u = this._prevDragArea, f = n.dragArea, c = !f && s !== a, v = (r || f) && u !== f;
    return c || v || this._prevPropTarget != this._propTarget;
  }, e.prototype._updateNativeEvents = function() {
    var r = this, n = this.props, a = n.dragArea ? this.areaElement : this.state.target, s = this.events, u = nn(s);
    if (this._isTargetChanged())
      for (var f in s) {
        var c = s[f];
        c && c.destroy(), s[f] = null;
      }
    if (a) {
      var v = this.enabledAbles;
      u.forEach(function(p) {
        var h = Do(v, [p]), d = h.length > 0, m = s[p];
        if (!d) {
          m && (m.destroy(), s[p] = null);
          return;
        }
        m || (m = new vE(a, r, p), s[p] = m), m.setAbles(h);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = Fe(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = Fe(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(st(st([], k(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? Xw : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, a = ih(r.filter(Boolean), function(v) {
      return v;
    }).map(function(v) {
      var p = k(v, 1), h = p[0];
      return h;
    }), s = this._viewClassNames, u = pa(s, a), f = u.removed, c = u.added;
    f.forEach(function(v) {
      Fp(n, s[v]);
    }), c.forEach(function(v) {
      Gp(n, a[v]);
    }), this._viewClassNames = a;
  }, e.prototype._getAbleViewClassNames = function() {
    var r = this;
    return (this.getEnabledAbles().map(function(n) {
      var a;
      return ((a = n.viewClassName) === null || a === void 0 ? void 0 : a.call(n, r)) || "";
    }).join(" ") + " ".concat(this._getAbleClassName("-view"))).split(/\s+/g);
  }, e.prototype._getAbleClassName = function(r) {
    var n = this;
    r === void 0 && (r = "");
    var a = this.getEnabledAbles(), s = this.targetGesto, u = this.controlGesto, f = s?.isFlag() ? s.getEventData() : {}, c = u?.isFlag() ? u.getEventData() : {};
    return a.map(function(v) {
      var p, h, d, m = v.name, _ = ((p = v.className) === null || p === void 0 ? void 0 : p.call(v, n)) || "";
      return (!((h = f[m]) === null || h === void 0) && h.isEventStart || !((d = c[m]) === null || d === void 0) && d.isEventStart) && (_ += " ".concat(Ct("".concat(m).concat(r, "-dragging")))), _.trim();
    }).filter(Boolean).join(" ");
  }, e.prototype._updateResizeObserver = function(r) {
    var n, a = this.props, s = a.target, u = bn(this.getControlBoxElement());
    if (!u.ResizeObserver || !s || !a.useResizeObserver) {
      (n = this._reiszeObserver) === null || n === void 0 || n.disconnect();
      return;
    }
    if (!(r.target === s && this._reiszeObserver)) {
      var f = new u.ResizeObserver(this.checkUpdateRect);
      f.observe(s, {
        box: "border-box"
      }), this._reiszeObserver = f;
    }
  }, e.prototype._updateMutationObserver = function(r) {
    var n = this, a, s = this.props, u = s.target, f = bn(this.getControlBoxElement());
    if (!f.MutationObserver || !u || !s.useMutationObserver) {
      (a = this._mutationObserver) === null || a === void 0 || a.disconnect();
      return;
    }
    if (!(r.target === u && this._mutationObserver)) {
      var c = new f.MutationObserver(function(v) {
        var p, h;
        try {
          for (var d = KS(v), m = d.next(); !m.done; m = d.next()) {
            var _ = m.value;
            _.type === "attributes" && _.attributeName === "style" && n.checkUpdateRect();
          }
        } catch (x) {
          p = { error: x };
        } finally {
          try {
            m && !m.done && (h = d.return) && h.call(d);
          } finally {
            if (p) throw p.error;
          }
        }
      });
      c.observe(u, {
        attributes: !0
      }), this._mutationObserver = c;
    }
  }, e.defaultProps = {
    dragTargetSelf: !1,
    target: null,
    dragTarget: null,
    container: null,
    rootContainer: null,
    origin: !0,
    parentMoveable: null,
    wrapperMoveable: null,
    isWrapperMounted: !1,
    parentPosition: null,
    warpSelf: !1,
    svgOrigin: "",
    dragContainer: null,
    useResizeObserver: !1,
    useMutationObserver: !1,
    preventDefault: !0,
    preventRightClick: !0,
    preventWheelClick: !0,
    linePadding: 0,
    controlPadding: 0,
    ables: [],
    pinchThreshold: 20,
    dragArea: !1,
    passDragArea: !1,
    transformOrigin: "",
    className: "",
    zoom: 1,
    triggerAblesSimultaneously: !1,
    padding: {},
    pinchOutside: !0,
    checkInput: !1,
    dragFocusedInput: !1,
    groupable: !1,
    hideDefaultLines: !1,
    cspNonce: "",
    translateZ: 0,
    cssStyled: null,
    customStyledMap: {},
    props: {},
    stopPropagation: !1,
    preventClickDefault: !1,
    preventClickEventOnDrag: !0,
    flushSync: Vd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
})(Xp), Xf = {
  name: "groupable",
  props: [
    "defaultGroupRotate",
    "useDefaultGroupRotate",
    "defaultGroupOrigin",
    "groupable",
    "groupableProps",
    "targetGroups",
    "hideChildMoveableDefaultLines"
  ],
  events: [],
  render: function(t, e) {
    var r, n = t.props, a = n.targets || [], s = t.getState(), u = s.left, f = s.top, c = s.isPersisted, v = n.zoom || 1, p = t.renderGroupRects, h = ((r = n.persistData) === null || r === void 0 ? void 0 : r.children) || [];
    c ? a = h.map(function() {
      return null;
    }) : h = [];
    var d = gi(t, "parentPosition", [u, f], function(_) {
      return _.join(",");
    }), m = gi(t, "requestStyles", t.getRequestChildStyles(), function(_) {
      return _.join(",");
    });
    return t.moveables = t.moveables.slice(0, a.length), st(st([], k(a.map(function(_, x) {
      return e.createElement(wi, { key: "moveable" + x, ref: Rp(t, "moveables", x), target: _, origin: !1, requestStyles: m, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [u, f], persistData: h[x], zoom: v });
    })), !1), k(ah(p.map(function(_, x) {
      var y = _.pos1, S = _.pos2, E = _.pos3, R = _.pos4, O = [y, S, E, R];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(T, C) {
        var D = k(T, 2), I = D[0], A = D[1];
        return ua(e, "", wt(O[I], d), wt(O[A], d), v, "group-rect-".concat(x, "-").concat(C));
      });
    }))), !1);
  }
}, hE = xa("clickable", {
  props: [
    "clickable"
  ],
  events: [
    "click",
    "clickGroup"
  ],
  always: !0,
  dragRelation: "weak",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dragStart: function() {
  },
  dragControlStart: function() {
  },
  dragGroupStart: function(t, e) {
    e.datas.inputTarget = e.inputEvent && e.inputEvent.target;
  },
  dragEnd: function(t, e) {
    var r = t.props.target, n = e.inputEvent, a = e.inputTarget, s = t.isMoveableElement(a), u = !s && t.controlBox.contains(a);
    if (!(!n || !a || e.isDrag || t.isMoveableElement(a) || u)) {
      var f = r.contains(a);
      _t(t, "onClick", Ft(t, e, {
        isDouble: e.isDouble,
        inputTarget: a,
        isTarget: r === a,
        moveableTarget: t.props.target,
        containsTarget: f
      }));
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.inputEvent, n = e.inputTarget;
    if (!(!r || !n || e.isDrag || t.isMoveableElement(n) || e.datas.inputTarget === n)) {
      var a = t.props.targets, s = a.indexOf(n), u = s > -1, f = !1;
      s === -1 && (s = en(a, function(c) {
        return c.contains(n);
      }), f = s > -1), _t(t, "onClickGroup", Ft(t, e, {
        isDouble: e.isDouble,
        targets: a,
        inputTarget: n,
        targetIndex: s,
        isTarget: u,
        containsTarget: f,
        moveableTarget: a[s]
      }));
    }
  },
  dragControlEnd: function(t, e) {
    this.dragEnd(t, e);
  },
  dragGroupControlEnd: function(t, e) {
    this.dragEnd(t, e);
  }
});
function fi(t) {
  var e = t.originalDatas.draggable;
  return e || (t.originalDatas.draggable = {}, e = t.originalDatas.draggable), z(z({}, t), { datas: e });
}
var gE = xa("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? Rd(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Er(a, Ct("direction")) && Er(a, Ct("edge")) && Er(a, Ct("edgeDraggable"));
  },
  dragStart: function(t, e) {
    return Hr.dragStart(t, fi(e));
  },
  drag: function(t, e) {
    return Hr.drag(t, fi(e));
  },
  dragEnd: function(t, e) {
    return Hr.dragEnd(t, fi(e));
  },
  dragGroupCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Er(a, Ct("direction")) && Er(a, Ct("line"));
  },
  dragGroupStart: function(t, e) {
    return Hr.dragGroupStart(t, fi(e));
  },
  dragGroup: function(t, e) {
    return Hr.dragGroup(t, fi(e));
  },
  dragGroupEnd: function(t, e) {
    return Hr.dragGroupEnd(t, fi(e));
  },
  unset: function(t) {
    return Hr.unset(t);
  }
}), bh = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, qf = [
  gh,
  vh,
  yw,
  Lw,
  Hr,
  gE,
  Qu,
  Ww,
  Hw,
  ew,
  $w,
  Vw,
  qw,
  oE,
  aE,
  lE,
  Xf,
  bh,
  hE,
  ch,
  mh
], mE = /* @__PURE__ */ qf.reduce(function(t, e) {
  return (e.events || []).forEach(function(r) {
    zp(t, r);
  }), t;
}, []), _E = /* @__PURE__ */ qf.reduce(function(t, e) {
  return (e.props || []).forEach(function(r) {
    zp(t, r);
  }), t;
}, []);
function hp(t, e) {
  var r = k(t, 3), n = r[0], a = r[1], s = r[2];
  return (n * e[0] + a * e[1] + s) / Math.sqrt(n * n + a * a);
}
function To(t, e) {
  var r = k(t, 2), n = r[0], a = r[1];
  return -n * e[0] - a * e[1];
}
function gp(t, e) {
  return Math.max.apply(Math, st([], k(t.map(function(r) {
    var n = k(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.max(a[e], s[e], u[e], f[e]);
  })), !1));
}
function mp(t, e) {
  return Math.min.apply(Math, st([], k(t.map(function(r) {
    var n = k(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.min(a[e], s[e], u[e], f[e]);
  })), !1));
}
function xE(t, e) {
  var r, n, a, s = [0, 0], u = [0, 0], f = [0, 0], c = [0, 0], v = 0, p = 0;
  if (!t.length)
    return {
      pos1: s,
      pos2: u,
      pos3: f,
      pos4: c,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: v,
      height: p,
      rotation: e
    };
  var h = Pt(e, qr);
  if (h % 90) {
    var d = h / 180 * Math.PI, m = Math.tan(d), _ = -1 / m, x = [Vu, Wv], y = [[0, 0], [0, 0]], S = [Vu, Wv], E = [[0, 0], [0, 0]];
    t.forEach(function(pt) {
      pt.forEach(function(ft) {
        var ct = hp([-m, 1, 0], ft), ot = hp([-_, 1, 0], ft);
        x[0] > ct && (y[0] = ft, x[0] = ct), x[1] < ct && (y[1] = ft, x[1] = ct), S[0] > ot && (E[0] = ft, S[0] = ot), S[1] < ot && (E[1] = ft, S[1] = ot);
      });
    });
    var R = k(y, 2), O = R[0], T = R[1], C = k(E, 2), D = C[0], I = C[1], A = [-m, 1, To([-m, 1], O)], B = [-m, 1, To([-m, 1], T)], H = [-_, 1, To([-_, 1], D)], W = [-_, 1, To([-_, 1], I)];
    r = k([
      [A, H],
      [A, W],
      [B, H],
      [B, W]
    ].map(function(pt) {
      var ft = k(pt, 2), ct = ft[0], ot = ft[1];
      return Sf(ct, ot)[0];
    }), 4), s = r[0], u = r[1], f = r[2], c = r[3], v = S[1] - S[0], p = x[1] - x[0];
  } else {
    var G = mp(t, 0), Y = mp(t, 1), X = gp(t, 0), rt = gp(t, 1);
    if (s = [G, Y], u = [X, Y], f = [G, rt], c = [X, rt], v = X - G, p = rt - Y, h % 180) {
      var et = [f, s, c, u];
      n = k(et, 4), s = n[0], u = n[1], f = n[2], c = n[3], v = rt - Y, p = X - G;
    }
  }
  if (h % 360 > 180) {
    var et = [c, f, u, s];
    a = k(et, 4), s = a[0], u = a[1], f = a[2], c = a[3];
  }
  var Z = qn([s, u, f, c]), it = Z.minX, at = Z.minY, $ = Z.maxX, lt = Z.maxY;
  return {
    pos1: s,
    pos2: u,
    pos3: f,
    pos4: c,
    width: v,
    height: p,
    minX: it,
    minY: at,
    maxX: $,
    maxY: lt,
    rotation: e
  };
}
function Sh(t, e) {
  var r = e.map(function(n) {
    if (br(n)) {
      var a = Sh(t, n), s = a.length;
      return s > 1 ? a : s === 1 ? a[0] : null;
    } else {
      var u = Qr(t, function(f) {
        var c = f.manager;
        return c.props.target === n;
      });
      return u ? (u.finded = !0, u.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && br(r[0]) ? r[0] : r;
}
var yE = /* @__PURE__ */ (function(t) {
  _a(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new ud(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
  }
  return e.prototype.componentDidMount = function() {
    t.prototype.componentDidMount.call(this);
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1, this.updateAbles();
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, a) {
    var s;
    a === void 0 && (a = !0);
    var u = this.state;
    if (!this.controlBox || u.isPersisted)
      return;
    bi(!0), this.moveables.forEach(function(mt) {
      mt.updateRect(r, !1, !1);
    });
    var f = this.props, c = this.moveables, v = u.target || f.target, p = c.map(function(mt) {
      return { finded: !1, manager: mt };
    }), h = this.props.targetGroups || [], d = Sh(p, h), m = f.useDefaultGroupRotate;
    d.push.apply(d, st([], k(p.filter(function(mt) {
      var Tt = mt.finded;
      return !Tt;
    }).map(function(mt) {
      var Tt = mt.manager;
      return Tt;
    })), !1));
    var _ = [], x = !n || r !== "" && f.updateGroup, y = f.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var S = (s = f.persistData) === null || s === void 0 ? void 0 : s.rotation;
      S != null && (y = S);
    }
    function E(mt, Tt, Wt) {
      var ut = mt.map(function($t) {
        if (br($t)) {
          var zt = E($t, Tt), Ht = [zt.pos1, zt.pos2, zt.pos3, zt.pos4];
          return _.push(zt), { poses: Ht, rotation: zt.rotation };
        } else
          return {
            poses: ye($t.state),
            rotation: $t.getRotation()
          };
      }), vt = ut.map(function($t) {
        var zt = $t.rotation;
        return zt;
      }), Ot = 0, yt = vt[0], Et = vt.every(function($t) {
        return Math.abs(yt - $t) < 0.1;
      });
      x ? Ot = !m && Et ? yt : y : Ot = !m && !Wt && Et ? yt : Tt;
      var It = ut.map(function($t) {
        var zt = $t.poses;
        return zt;
      }), At = xE(It, Ot);
      return At;
    }
    var R = E(d, this.rotation, !0);
    x && (this.rotation = R.rotation, this.transformOrigin = f.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = h, this.renderGroupRects = _;
    var O = this.transformOrigin, T = this.rotation, C = this.scale, D = R.width, I = R.height, A = R.minX, B = R.minY, H = kw([
      [0, 0],
      [D, 0],
      [0, I],
      [D, I]
    ], Wf(O, D, I), this.rotation / 180 * Math.PI), W = qn(H.result), G = W.minX, Y = W.minY, X = " rotate(".concat(T, "deg)") + " scale(".concat(Yr(C[0]), ", ").concat(Yr(C[1]), ")"), rt = "translate(".concat(-G, "px, ").concat(-Y, "px)").concat(X);
    this.controlBox.style.transform = "translate3d(".concat(A, "px, ").concat(B, "px, ").concat(this.props.translateZ || 0, ")"), v.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(O, ";") + "width:".concat(D, "px;height:").concat(I, "px;") + "transform: ".concat(rt), u.width = D, u.height = I;
    var et = this.getContainer(), Z = of(this.controlBox, v, this.controlBox, this.getContainer(), this._rootContainer || et, []), it = [Z.left, Z.top], at = k(ye(Z), 4), $ = at[0], lt = at[1], pt = at[2], ft = at[3], ct = qn([$, lt, pt, ft]), ot = [ct.minX, ct.minY], gt = Yr(C[0] * C[1]);
    Z.pos1 = wt($, ot), Z.pos2 = wt(lt, ot), Z.pos3 = wt(pt, ot), Z.pos4 = wt(ft, ot), Z.left = A - Z.left + ot[0], Z.top = B - Z.top + ot[1], Z.origin = wt(Ut(it, Z.origin), ot), Z.beforeOrigin = wt(Ut(it, Z.beforeOrigin), ot), Z.originalBeforeOrigin = Ut(it, Z.originalBeforeOrigin), Z.transformOrigin = wt(Ut(it, Z.transformOrigin), ot), v.style.transform = "translate(".concat(-G - ot[0], "px, ").concat(-Y - ot[1], "px)") + X, bi(), this.updateState(z(z({}, Z), { posDelta: ot, direction: gt, beforeDirection: gt }), a);
  }, e.prototype.getRect = function() {
    return z(z({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, e.prototype.triggerEvent = function(r, n, a) {
    if (a || r.indexOf("Group") > -1)
      return t.prototype.triggerEvent.call(this, r, n);
    this._emitter.trigger(r, n);
  }, e.prototype.getRequestChildStyles = function() {
    var r = this.getEnabledAbles().reduce(function(n, a) {
      var s, u, f = (u = (s = a.requestChildStyle) === null || s === void 0 ? void 0 : s.call(a)) !== null && u !== void 0 ? u : [];
      return st(st([], k(n), !1), k(f), !1);
    }, []);
    return r;
  }, e.prototype.getMoveables = function() {
    return st([], k(this.moveables), !1);
  }, e.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, st(st([], k(this.props.ables), !1), [Xf], !1), "Group");
  }, e.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = Fe(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, a = this._prevDragTarget, s = n.dragTarget || this.areaElement, u = n.targets, f = this.differ.update(u), c = f.added, v = f.changed, p = f.removed, h = c.length || p.length;
    (h || this._prevOriginalDragTarget !== this._originalDragTarget) && (hi(this, !1), hi(this, !0), this.updateState({ gestos: {} })), a !== s && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = _h(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = xh(this, "GroupControl")));
    var d = !nf(r.container, n.container);
    d && (r.container = n.container), (d || h || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || v.length || u.length && !uh(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!h;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = z(z({}, wi.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
})(wi), bE = /* @__PURE__ */ (function(t) {
  _a(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, a = this.props, s = a.cspNonce, u = a.cssStyled, f = a.persistData, c = a.targets || [], v = c.length, p = this.isUnmounted || !v, h = (n = f?.children) !== null && n !== void 0 ? n : [];
    return p && !v && h.length ? c = h.map(function() {
      return null;
    }) : p || (h = []), Me(u, { cspNonce: s, ref: je(this, "controlBox"), className: Ct("control-box") }, c.map(function(d, m) {
      var _, x, y = (x = (_ = a.individualGroupableProps) === null || _ === void 0 ? void 0 : _.call(a, d, m)) !== null && x !== void 0 ? x : {};
      return Me(wi, z({ key: "moveable" + m, ref: Rp(r, "moveables", m) }, a, y, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: h[m] }));
    }));
  }, e.prototype.componentDidMount = function() {
  }, e.prototype.componentDidUpdate = function() {
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0), bi(!0), this.moveables.forEach(function(s) {
      s.updateRect(r, n, a);
    }), bi();
  }, e.prototype.getRect = function() {
    return z(z({}, t.prototype.getRect.call(this)), { children: this.moveables.map(function(r) {
      return r.getRect();
    }) });
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this.moveables.map(function(c) {
      return c.request(r, z(z({}, n), { isInstant: !1 }), !1);
    }), u = a || n.isInstant, f = {
      request: function(c) {
        return s.forEach(function(v) {
          return v.request(c);
        }), this;
      },
      requestEnd: function() {
        return s.forEach(function(c) {
          return c.requestEnd();
        }), this;
      }
    };
    return u ? f.request(n).requestEnd() : f;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var a = n, s = Qr(this.moveables, function(u) {
      var f = u.getTargets()[0], c = u.getControlBoxElement(), v = u.getDragElement();
      return !f || !v ? !1 : v === a || v.contains(a) || v !== f && f === a || f.contains(a) || c === a || c.contains(a);
    });
    return s && s.dragStart(r, n), this;
  }, e.prototype.hitTest = function() {
    return 0;
  }, e.prototype.isInside = function() {
    return !1;
  }, e.prototype.isDragging = function() {
    return !1;
  }, e.prototype.getDragElement = function() {
    return null;
  }, e.prototype.getMoveables = function() {
    return st([], k(this.moveables), !1);
  }, e.prototype.updateRenderPoses = function() {
  }, e.prototype.checkUpdate = function() {
  }, e.prototype.triggerEvent = function() {
  }, e.prototype.updateAbles = function() {
  }, e.prototype._updateEvents = function() {
  }, e.prototype._updateObserver = function() {
  }, e;
})(wi);
function Ch(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Jr(n)) {
        e[n] && r.push.apply(r, st([], k(e[n]), !1));
        return;
      }
      br(n) ? r.push.apply(r, st([], k(Ch(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function wh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Jr(n)) {
        e[n] && r.push.apply(r, st([], k(e[n]), !1));
        return;
      }
      br(n) ? r.push(wh(n, e)) : r.push(n);
    }
  }), r;
}
function Eh(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var a = e[n];
    return !r && !a ? !1 : r != a ? br(r) && br(a) ? Eh(r, a) : !0 : !1;
  });
}
var SE = /* @__PURE__ */ (function(t) {
  _a(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new ud(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
  }
  return e.makeStyled = function() {
    var r = {}, n = this.getTotalAbles();
    n.forEach(function(s) {
      var u = s.css;
      u && u.forEach(function(f) {
        r[f] = !0;
      });
    });
    var a = nn(r).join(`
`);
    this.defaultStyled = vd("div", mb(wf, oC + a));
  }, e.getTotalAbles = function() {
    return st([vh, Xf, bh, ch], k(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, s = a.ables, u = a.props, f = $S(a, ["ables", "props"]), c = k(this._updateRefs(!0), 2), v = c[0], p = c[1], h = Ch(v, p), d = h.length > 1, m = n.getTotalAbles(), _ = st(st([], k(m), !1), k(s || []), !1), x = z(z(z({}, f), u || {}), { ables: _, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = h;
    var y = null, S = this.moveable, E = f.persistData;
    if (E?.children && (d = !0), f.individualGroupable)
      return Me(bE, z({ key: "individual-group", ref: je(this, "moveable") }, x, { target: null, targets: h }));
    if (d) {
      var R = wh(v, p);
      if (S && !S.props.groupable && !S.props.individualGroupable) {
        var O = S.props.target;
        O && h.indexOf(O) > -1 && (y = z({}, S.state));
      }
      return Me(yE, z({ key: "group", ref: je(this, "moveable") }, x, (r = f.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: h, targetGroups: R, firstRenderState: y }));
    } else {
      var T = h[0];
      if (S && (S.props.groupable || S.props.individualGroupable)) {
        var C = S.moveables || [], D = Qr(C, function(I) {
          return I.props.target === T;
        });
        D && (y = z({}, D.state));
      }
      return Me(wi, z({ key: "single", ref: je(this, "moveable") }, x, { target: T, firstRenderState: y }));
    }
  }, e.prototype.componentDidMount = function() {
    this._checkChangeTargets();
  }, e.prototype.componentDidUpdate = function() {
    this._checkChangeTargets();
  }, e.prototype.componentWillUnmount = function() {
    this.selectorMap = {}, this.refTargets = [];
  }, e.prototype.getTargets = function() {
    var r, n;
    return (n = (r = this.moveable) === null || r === void 0 ? void 0 : r.getTargets()) !== null && n !== void 0 ? n : [];
  }, e.prototype.updateSelectors = function() {
    this.selectorMap = {}, this._updateRefs(), this.forceUpdate();
  }, e.prototype.waitToChangeTarget = function() {
    var r = this, n;
    return this._onChangeTargets = function() {
      r._onChangeTargets = null, n();
    }, new Promise(function(a) {
      n = a;
    });
  }, e.prototype.waitToChangeTargets = function() {
    return this.waitToChangeTarget();
  }, e.prototype.getManager = function() {
    return this.moveable;
  }, e.prototype.getMoveables = function() {
    return this.moveable.getMoveables();
  }, e.prototype.getDragElement = function() {
    return this.moveable.getDragElement();
  }, e.prototype._updateRefs = function(r) {
    var n = this.refTargets, a = Lf(this.props.target || this.props.targets), s = typeof document < "u", u = Eh(n, a), f = this.selectorMap, c = {};
    return this.refTargets.forEach(function v(p) {
      if (Jr(p)) {
        var h = f[p];
        h ? c[p] = f[p] : s && (u = !0, c[p] = [].slice.call(document.querySelectorAll(p)));
      } else br(p) && p.forEach(v);
    }), this._tmpRefTargets = a, this._tmpSelectorMap = c, [
      a,
      c,
      !r && u
    ];
  }, e.prototype._checkChangeTargets = function() {
    var r, n, a;
    this.refTargets = this._tmpRefTargets, this.selectorMap = this._tmpSelectorMap;
    var s = this._differ.update(this._elementTargets), u = s.added, f = s.removed, c = u.length || f.length;
    c && ((n = (r = this.props).onChangeTargets) === null || n === void 0 || n.call(r, {
      moveable: this.moveable,
      targets: this._elementTargets
    }), (a = this._onChangeTargets) === null || a === void 0 || a.call(this));
    var v = k(this._updateRefs(), 3), p = v[0], h = v[1], d = v[2];
    this.refTargets = p, this.selectorMap = h, d && this.forceUpdate();
  }, e.defaultAbles = [], e.customStyledMap = {}, e.defaultStyled = null, VS([
    _b(_d)
  ], e.prototype, "moveable", void 0), e;
})(Xp), CE = /* @__PURE__ */ (function(t) {
  _a(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = qf, e;
})(SE), sf = function(t, e) {
  return sf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, sf(t, e);
};
function Uf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  sf(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var la = function() {
  return la = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, la.apply(this, arguments);
};
function wE(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
var EE = /* @__PURE__ */ (function(t) {
  Uf(e, t);
  function e(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var r = e.prototype;
  return r.render = function() {
    return Me(CE, la({
      ref: je(this, "moveable")
    }, this.state));
  }, e;
})(gf), Uo = _E, Dh = _d, Mh = mE, DE = /* @__PURE__ */ (function(t) {
  Uf(e, t);
  function e(n, a) {
    a === void 0 && (a = {});
    var s = t.call(this) || this;
    s.containerProvider = null, s.selfElement = null, s._warp = !1;
    var u = la({}, a), f = {};
    Mh.forEach(function(p) {
      f[Rb("on ".concat(p))] = function(h) {
        return s.trigger(p, h);
      };
    });
    var c;
    a.warpSelf ? (delete a.warpSelf, s._warp = !0, c = n) : (c = Ei(n).createElement("div"), n.appendChild(c)), s.containerProvider = Bv(Me(EE, la({
      ref: je(s, "innerMoveable")
    }, u, f)), c), s.selfElement = c;
    var v = u.target;
    return br(v) && v.length > 1 && s.updateRect(), s;
  }
  var r = e.prototype;
  return r.setState = function(n, a) {
    this.innerMoveable.setState(n, a);
  }, r.forceUpdate = function(n) {
    this.innerMoveable.forceUpdate(n);
  }, r.dragStart = function(n, a) {
    a === void 0 && (a = n.target);
    var s = this.innerMoveable;
    s.$_timer && this.forceUpdate(), this.getMoveable().dragStart(n, a);
  }, r.destroy = function() {
    var n, a = this.selfElement;
    Bv(null, a, this.containerProvider), this._warp || (n = a?.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, e = wE([Ev(Dh, function(n, a) {
    n[a] || (n[a] = function() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      var f = this.getMoveable();
      if (!(!f || !f[a]))
        return f[a].apply(f, s);
    });
  }), Ev(Uo, function(n, a) {
    Object.defineProperty(n, a, {
      get: function() {
        return this.getMoveable().props[a];
      },
      set: function(s) {
        var u;
        this.setState((u = {}, u[a] = s, u));
      },
      enumerable: !0,
      configurable: !0
    });
  })], e), e;
})(Ko), ME = /* @__PURE__ */ (function(t) {
  Uf(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
})(DE);
const Rh = {};
Dh.forEach((t) => {
  Rh[t] = function(...e) {
    return this.$_moveable[t](...e);
  };
});
const Th = {};
Uo.forEach((t) => {
  Th[t] = function(e) {
    this.$_moveable[t] = e;
  };
});
const RE = uf({
  name: "moveable",
  methods: Rh,
  props: Uo,
  watch: Th,
  mounted() {
    const t = {}, e = this.$props;
    Uo.forEach((s) => {
      const u = e[s];
      ca(u) || (t[s] = e[s]);
    });
    const n = this.$refs.moveableElement, a = new ME(n, {
      ...t,
      warpSelf: !0
    });
    Mh.forEach((s) => {
      a.on(s, (u) => {
        this.$emit(s, { ...u });
      });
    }), this.$_moveable = a;
  },
  beforeUnmount() {
    this.$_moveable.destroy();
  }
}), TE = RE, OE = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, IE = { ref: "moveableElement" };
function PE(t, e, r, n, a, s) {
  return mr(), Pr("div", IE, null, 512);
}
const _p = /* @__PURE__ */ OE(TE, [["render", PE]]), AE = { style: { display: "none" } }, BE = { class: "widget-board" }, zE = ["onPointerdown", "onPointerenter", "onPointerleave"], GE = ["onContextmenu"], FE = { class: "align-bar__count" }, kE = { class: "align-bar__group" }, LE = { class: "align-bar__group" }, WE = {
  key: 0,
  class: "align-bar__group"
}, NE = { class: "align-bar__group" }, HE = { class: "dropdown-buttons-container" }, YE = { class: "dropdown-buttons-container" }, Fn = 24, XE = 160, qE = 160, UE = /* @__PURE__ */ uf({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(t, { emit: e }) {
    const r = Rr(document.documentElement.getAttribute("data-board-snap") !== "off");
    let n = null;
    Pu(() => {
      n = new MutationObserver(() => {
        r.value = document.documentElement.getAttribute("data-board-snap") !== "off";
      }), n.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-board-snap"]
      });
    }), xv(() => n?.disconnect());
    const a = e, s = wp();
    ob();
    const u = s.params.pageid || "", f = Rr(), c = Rr(""), v = Rr([]), p = Rr(!1), h = bp("endpointfinder", null);
    Ee(() => !!h), Rr(!1), Rr(void 0);
    const {
      board: d,
      clipboardStore: m,
      ghostPlaceholder: _,
      hidePlaceholder: x,
      getInitialStyle: y,
      getMovableControlStyles: S,
      drag: E,
      resize: R,
      moveUp: O,
      moveDown: T,
      moveToBottom: C,
      moveToTop: D,
      addWidget: I,
      removeWidget: A,
      copyWidget: B,
      pasteWidget: H
    } = Dp(u, () => r.value ? Fn : 0), W = Ee(() => d.widgets.value), G = Ee(() => {
      const J = d.layout.value;
      if (J.length === 0) return { width: 0, height: 0 };
      let V = 0, U = 0;
      for (const ht of J) {
        const Kt = (ht.x || 0) + (ht.width || 0), kr = (ht.y || 0) + (ht.height || 0);
        Kt > V && (V = Kt), kr > U && (U = kr);
      }
      return {
        width: V + XE,
        height: U + qE
      };
    }), Y = Rr(null), X = Rr({ x: 0, y: 0, w: 1, h: 1 }), rt = Rr(null), et = Rr({ w: 200, h: 140 });
    let Z = null;
    const it = Ee(() => {
      const J = Y.value, V = Math.max(G.value.width, J?.clientWidth || 1), U = Math.max(G.value.height, J?.clientHeight || 1);
      return Math.min(et.value.w / V, et.value.h / U);
    }), at = () => {
      const J = Y.value;
      if (!J) return;
      const V = Math.max(G.value.width, J.clientWidth), U = Math.max(G.value.height, J.clientHeight);
      X.value = {
        x: J.scrollLeft / V,
        y: J.scrollTop / U,
        w: J.clientWidth / V,
        h: J.clientHeight / U
      };
    }, $ = (J) => {
      const V = Y.value;
      if (!V) return;
      const ht = J.currentTarget.getBoundingClientRect(), Kt = (J.clientX - ht.left) / ht.width, kr = (J.clientY - ht.top) / ht.height, Zt = Math.max(G.value.width, V.clientWidth), te = Math.max(G.value.height, V.clientHeight);
      V.scrollLeft = Kt * Zt - V.clientWidth / 2, V.scrollTop = kr * te - V.clientHeight / 2;
    }, lt = Ee(() => {
      const J = Y.value;
      return J ? G.value.width > J.clientWidth || G.value.height > J.clientHeight : !1;
    });
    Pu(() => {
      Au(() => at());
    }), mu(rt, (J) => {
      Z?.disconnect(), J && (Z = new ResizeObserver(([V]) => {
        const U = V.contentRect;
        U.width > 0 && U.height > 0 && (et.value = { w: U.width, h: U.height });
      }), Z.observe(J));
    }), xv(() => Z?.disconnect()), mu(G, () => Au(() => at()));
    const pt = Rr({ x: 0, y: 0 }), ft = (J) => [
      { id: "front", icon: "flip_to_front", label: "Nach vorn", run: () => O(J) },
      { id: "back", icon: "flip_to_back", label: "Nach hinten", run: () => T(J) },
      { id: "top", icon: "vertical_align_top", label: "Ganz vorn", run: () => D(J) },
      { id: "bottom", icon: "vertical_align_bottom", label: "Ganz hinten", run: () => C(J) },
      { id: "copy", icon: "content_copy", label: "Kopieren", run: () => ct(J) }
    ], ct = (J) => {
      B(J);
    }, ot = Rr({ visible: !1, x: 0, y: 0 }), gt = (J) => {
      if (!m.hasClipboard) {
        ot.value.visible = !1;
        return;
      }
      J.preventDefault();
      const V = J.currentTarget.getBoundingClientRect();
      pt.value = {
        x: J.clientX - V.left,
        y: J.clientY - V.top
      }, ot.value = {
        visible: !0,
        x: J.clientX - V.left,
        y: J.clientY - V.top
      };
    }, mt = Rr({ visible: !1, x: 0, y: 0, uid: "" }), Tt = (J, V) => {
      V.preventDefault(), V.stopPropagation();
      const ht = V.currentTarget.closest(".report-container")?.getBoundingClientRect();
      mt.value = {
        visible: !0,
        x: V.clientX - (ht?.left ?? 0),
        y: V.clientY - (ht?.top ?? 0),
        uid: J
      };
    }, Wt = () => {
      ot.value.visible = !1, mt.value.visible = !1;
    }, ut = () => {
      H(pt.value.x, pt.value.y), ot.value.visible = !1;
    }, vt = (J) => r.value ? Math.round(J / Fn) * Fn : J, Ot = Rr([]), yt = Ee(() => Ot.value.length > 1), Et = Ee(() => Ot.value.map((J) => `.${J}`));
    function It(J) {
      return Ot.value.includes(J);
    }
    const At = Rr(null);
    function $t(J) {
      const V = S(J), U = At.value === J || It(J);
      return {
        ...V,
        opacity: U ? 1 : 0,
        // Out of the way while invisible, so it cannot catch a click meant for
        // the board or the widget under it
        pointerEvents: U ? "auto" : "none",
        transition: "opacity 90ms ease"
      };
    }
    function zt(J) {
      return !!d.layout.value.find((U) => U.id === J)?.group;
    }
    function Ht(J) {
      const V = d.layout.value, U = V.find((ht) => ht.id === J);
      return U?.group ? V.filter((ht) => ht.group === U.group).map((ht) => ht.id) : [J];
    }
    function Vt(J, V) {
      const U = Ht(J);
      if (!V.ctrlKey && !V.metaKey && !V.shiftKey) {
        Ot.value = U;
        return;
      }
      const ht = U.every((Kt) => It(Kt));
      Ot.value = ht ? Ot.value.filter((Kt) => !U.includes(Kt)) : [...Ot.value, ...U.filter((Kt) => !It(Kt))];
    }
    function ur() {
      Ot.value = [];
    }
    mu(
      () => d.layout.value.map((J) => J.id).join(","),
      (J) => {
        const V = new Set(J ? J.split(",") : []), U = Ot.value.filter((ht) => V.has(ht));
        U.length !== Ot.value.length && (Ot.value = U);
      }
    );
    function nr() {
      const J = d.layout.value;
      return Ot.value.map((V) => J.find((U) => U.id === V)).filter(Boolean);
    }
    function fr(J) {
      for (const V of J.events) {
        const U = [...V.target.classList].find((Kt) => Ot.value.includes(Kt));
        if (!U) continue;
        const ht = d.layout.value.find((Kt) => Kt.id === U);
        ht && (ht.x = vt(V.translate[0]), ht.y = vt(V.translate[1]), V.target.style.transform = `translate(${ht.x}px, ${ht.y}px)`);
      }
    }
    const tr = Ee(() => {
      const J = nr();
      if (J.length < 2) return !1;
      const V = J[0].group;
      return !!V && J.every((U) => U.group === V);
    });
    function ue() {
      const J = nr();
      if (J.length < 2) return;
      const V = `g_${Math.random().toString(36).slice(2, 9)}`;
      for (const U of J) U.group = V;
    }
    function Ar() {
      for (const U of nr()) delete U.group;
      const J = d.layout.value, V = /* @__PURE__ */ new Map();
      for (const U of J)
        U.group && V.set(U.group, (V.get(U.group) ?? 0) + 1);
      for (const U of J)
        U.group && V.get(U.group) === 1 && delete U.group;
    }
    function Br(J) {
      const V = nr();
      if (V.length < 2) return;
      const U = Math.min(...V.map((Zt) => Zt.x)), ht = Math.max(...V.map((Zt) => Zt.x + Zt.width)), Kt = Math.min(...V.map((Zt) => Zt.y)), kr = Math.max(...V.map((Zt) => Zt.y + Zt.height));
      for (const Zt of V)
        switch (J) {
          case "left":
            Zt.x = vt(U);
            break;
          case "right":
            Zt.x = vt(ht - Zt.width);
            break;
          case "hcenter":
            Zt.x = vt((U + ht) / 2 - Zt.width / 2);
            break;
          case "top":
            Zt.y = vt(Kt);
            break;
          case "bottom":
            Zt.y = vt(kr - Zt.height);
            break;
          case "vcenter":
            Zt.y = vt((Kt + kr) / 2 - Zt.height / 2);
            break;
        }
    }
    function We(J) {
      const V = nr();
      if (V.length < 3) return;
      const U = J === "x" ? "width" : "height", ht = [...V].sort((sn, Pi) => sn[J] - Pi[J]), Kt = ht[0], Zt = ht[ht.length - 1][J] - (Kt[J] + Kt[U]), te = ht.slice(1, -1), Oi = te.reduce((sn, Pi) => sn + Pi[U], 0), Ii = (Zt - Oi) / (ht.length - 1);
      let Sa = Kt[J] + Kt[U] + Ii;
      for (const sn of te)
        sn[J] = vt(Sa), Sa += sn[U] + Ii;
    }
    const Dn = (J, V, U, ht) => {
      const Kt = { datasourceId: V, settings: {} }, kr = Io.cloneDeep(ab), Zt = _.value.width, te = _.value.height, Oi = {
        x: vt(U - Zt / 2),
        y: vt(ht - te / 2),
        width: Zt,
        height: te,
        z: 3005
      };
      I(J, Kt, kr, Oi);
    }, Ie = (J) => {
      a("openSettings", J);
    };
    Ee(() => W.value.length === 0 && d.layout.value.length === 0);
    const Ne = (J) => {
      A(J), a("removeWidget", J);
    };
    Ee(() => W.value.find((J) => J.uid === c.value));
    const an = (J) => {
      const V = Y.value;
      if (!V) return { x: 0, y: 0 };
      const U = V.getBoundingClientRect();
      return {
        x: J.clientX - U.left + V.scrollLeft,
        y: J.clientY - U.top + V.scrollTop
      };
    }, He = (J) => {
      x();
      const V = an(J);
      f.value = { dropX: V.x, dropY: V.y };
    }, Pe = (J) => {
      if (J.dataTransfer?.types.includes("text/plain")) {
        J.preventDefault(), p.value = !0;
        const V = an(J);
        _.value.x = vt(V.x - _.value.width / 2), _.value.y = vt(V.y - _.value.height / 2), _.value.visible = !0;
      }
    }, on = (J) => {
      J.dataTransfer?.types.includes("text/plain") && (p.value = !1, x());
    }, Mn = (J) => {
      console.log(J);
      const V = "test", U = J.added?.element?.type || "default", ht = f.value?.dropX ?? _.value.x + _.value.width / 2, Kt = f.value?.dropY ?? _.value.y + _.value.height / 2;
      Dn(U, V, ht, Kt);
    };
    return (J, V) => (mr(), Pr("div", {
      class: "report-container",
      onContextmenu: gt,
      onClick: Wt,
      onPointerdown: yv(ur, ["self"])
    }, [
      St("div", {
        class: "scroll-viewport",
        ref_key: "scrollContainer",
        ref: Y,
        onScroll: at
      }, [
        St("div", {
          class: "canvas dottet",
          style: Qe({
            minWidth: G.value.width > 0 ? `max(100%, ${G.value.width}px)` : void 0,
            minHeight: G.value.height > 0 ? `max(100%, ${G.value.height}px)` : void 0
          }),
          onDrop: He,
          onDragover: Pe,
          onDragleave: on
        }, [
          li(dr(ub), {
            list: v.value,
            group: { name: "widgets" },
            "ghost-class": "ghost",
            itemKey: "type",
            style: { position: "absolute", top: "0", left: "0", height: "100%", width: "100%" },
            onChange: Mn,
            onDrop: He,
            onDragover: Pe,
            onDragleave: on,
            onContextmenu: gt
          }, {
            item: vo(({ element: U }) => [
              St("div", AE, po(U?.type || ""), 1)
            ]),
            _: 1
          }, 8, ["list"]),
          St("div", BE, [
            dr(_).visible ? (mr(), Pr("div", {
              key: 0,
              class: "ghost-placeholder",
              style: Qe({
                left: `${dr(_).x}px`,
                top: `${dr(_).y}px`,
                width: `${dr(_).width}px`,
                height: `${dr(_).height}px`
              })
            }, null, 4)) : mn("", !0),
            (mr(!0), Pr(Vi, null, Oo(W.value, (U) => (mr(), Pr(Vi, {
              key: U.uid
            }, [
              St("div", {
                class: Sp([
                  U.uid,
                  "dashboard-item-container",
                  { "is-selected": It(U.uid), "in-group": zt(U.uid) }
                ]),
                style: Qe(dr(y)(U.uid)),
                ref_for: !0,
                ref: U.uid,
                onPointerdown: (ht) => Vt(U.uid, ht),
                onPointerenter: (ht) => At.value = U.uid,
                onPointerleave: (ht) => At.value = At.value === U.uid ? null : At.value
              }, [
                St("div", {
                  class: "dashboard-item",
                  onContextmenu: (ht) => Tt(U.uid, ht)
                }, [
                  li(dr(Cp), {
                    widget: U,
                    ref_for: !0,
                    ref: `${U.uid}_wrapper`,
                    "extra-actions": ft(U.uid),
                    onOpenSettings: Ie,
                    editEnabled: "",
                    onRemoveWidget: Ne
                  }, null, 8, ["widget", "extra-actions"])
                ], 40, GE)
              ], 46, zE),
              yt.value ? mn("", !0) : (mr(), co(dr(_p), {
                key: 0,
                target: [`.${U.uid}`],
                draggable: !0,
                resizable: !0,
                useResizeObserver: !0,
                useMutationObserver: !0,
                onDrag: (ht) => dr(E)(U.uid, ht),
                onResize: (ht) => dr(R)(U.uid, ht),
                snappable: r.value,
                snapGridWidth: Fn,
                snapGridHeight: Fn,
                origin: !1,
                ref_for: !0,
                ref: `${U.uid}_control`,
                style: Qe($t(U.uid))
              }, null, 8, ["target", "onDrag", "onResize", "snappable", "style"]))
            ], 64))), 128)),
            yt.value ? (mr(), co(dr(_p), {
              key: 1,
              target: Et.value,
              draggable: !0,
              resizable: !1,
              useResizeObserver: !0,
              useMutationObserver: !0,
              origin: !1,
              snappable: r.value,
              snapGridWidth: Fn,
              snapGridHeight: Fn,
              onDragGroup: fr
            }, null, 8, ["target", "snappable"])) : mn("", !0),
            yt.value ? (mr(), Pr("div", {
              key: 2,
              class: "align-bar",
              onPointerdown: V[8] || (V[8] = yv(() => {
              }, ["stop"]))
            }, [
              St("span", FE, po(Ot.value.length) + " " + po(tr.value ? "in einer Gruppe" : "gewählt"), 1),
              St("span", kE, [
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Links bündig",
                  onClick: V[0] || (V[0] = (U) => Br("left"))
                }, [...V[9] || (V[9] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M2 2v12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "4",
                      y: "3.5",
                      width: "9",
                      height: "3",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "4",
                      y: "9.5",
                      width: "5.5",
                      height: "3",
                      fill: "currentColor"
                    })
                  ], -1)
                ])]),
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Waagerecht mittig",
                  onClick: V[1] || (V[1] = (U) => Br("hcenter"))
                }, [...V[10] || (V[10] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M8 2v12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "3",
                      y: "3.5",
                      width: "10",
                      height: "3",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "5",
                      y: "9.5",
                      width: "6",
                      height: "3",
                      fill: "currentColor"
                    })
                  ], -1)
                ])]),
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Rechts bündig",
                  onClick: V[2] || (V[2] = (U) => Br("right"))
                }, [...V[11] || (V[11] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M14 2v12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "3",
                      y: "3.5",
                      width: "9",
                      height: "3",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "6.5",
                      y: "9.5",
                      width: "5.5",
                      height: "3",
                      fill: "currentColor"
                    })
                  ], -1)
                ])])
              ]),
              St("span", LE, [
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Oben bündig",
                  onClick: V[3] || (V[3] = (U) => Br("top"))
                }, [...V[12] || (V[12] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M2 2h12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "3.5",
                      y: "4",
                      width: "3",
                      height: "9",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "9.5",
                      y: "4",
                      width: "3",
                      height: "5.5",
                      fill: "currentColor"
                    })
                  ], -1)
                ])]),
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Senkrecht mittig",
                  onClick: V[4] || (V[4] = (U) => Br("vcenter"))
                }, [...V[13] || (V[13] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M2 8h12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "3.5",
                      y: "3",
                      width: "3",
                      height: "10",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "9.5",
                      y: "5",
                      width: "3",
                      height: "6",
                      fill: "currentColor"
                    })
                  ], -1)
                ])]),
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Unten bündig",
                  onClick: V[5] || (V[5] = (U) => Br("bottom"))
                }, [...V[14] || (V[14] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("path", {
                      d: "M2 14h12",
                      stroke: "currentColor",
                      "stroke-width": "1.6"
                    }),
                    St("rect", {
                      x: "3.5",
                      y: "3",
                      width: "3",
                      height: "9",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "9.5",
                      y: "6.5",
                      width: "3",
                      height: "5.5",
                      fill: "currentColor"
                    })
                  ], -1)
                ])])
              ]),
              Ot.value.length > 2 ? (mr(), Pr("span", WE, [
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Waagerecht gleichmäßig verteilen",
                  onClick: V[6] || (V[6] = (U) => We("x"))
                }, [...V[15] || (V[15] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("rect", {
                      x: "1.5",
                      y: "4",
                      width: "2.5",
                      height: "8",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "6.75",
                      y: "4",
                      width: "2.5",
                      height: "8",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "12",
                      y: "4",
                      width: "2.5",
                      height: "8",
                      fill: "currentColor"
                    })
                  ], -1)
                ])]),
                St("button", {
                  type: "button",
                  class: "align-bar__btn",
                  title: "Senkrecht gleichmäßig verteilen",
                  onClick: V[7] || (V[7] = (U) => We("y"))
                }, [...V[16] || (V[16] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("rect", {
                      x: "4",
                      y: "1.5",
                      width: "8",
                      height: "2.5",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "4",
                      y: "6.75",
                      width: "8",
                      height: "2.5",
                      fill: "currentColor"
                    }),
                    St("rect", {
                      x: "4",
                      y: "12",
                      width: "8",
                      height: "2.5",
                      fill: "currentColor"
                    })
                  ], -1)
                ])])
              ])) : mn("", !0),
              St("span", NE, [
                tr.value ? (mr(), Pr("button", {
                  key: 1,
                  type: "button",
                  class: "align-bar__btn",
                  title: "Gruppierung aufheben",
                  onClick: Ar
                }, [...V[18] || (V[18] = [
                  St("svg", {
                    viewBox: "0 0 16 16",
                    width: "14",
                    height: "14",
                    "aria-hidden": "true"
                  }, [
                    St("rect", {
                      x: "1.5",
                      y: "1.5",
                      width: "6",
                      height: "6",
                      rx: "1",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "1.3"
                    }),
                    St("rect", {
                      x: "8.5",
                      y: "8.5",
                      width: "6",
                      height: "6",
                      rx: "1",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "1.3"
                    }),
                    St("path", {
                      d: "M6 10l4-4",
                      stroke: "currentColor",
                      "stroke-width": "1.6",
                      "stroke-linecap": "round"
                    })
                  ], -1)
                ])])) : (mr(), Pr("button", {
                  key: 0,
                  type: "button",
                  class: "align-bar__btn",
                  title: "Gruppieren - zusammen bewegen und wählen",
                  onClick: ue
                }, [...V[17] || (V[17] = [
                  eb('<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-v-189ac721><rect x="1.5" y="1.5" width="6" height="6" rx="1" fill="currentColor" data-v-189ac721></rect><rect x="8.5" y="8.5" width="6" height="6" rx="1" fill="currentColor" data-v-189ac721></rect><rect x="8.5" y="1.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" data-v-189ac721></rect><rect x="1.5" y="8.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" data-v-189ac721></rect></svg>', 1)
                ])]))
              ]),
              St("button", {
                type: "button",
                class: "align-bar__btn align-bar__btn--quiet",
                title: "Auswahl aufheben",
                onClick: ur
              }, " × ")
            ], 32)) : mn("", !0),
            mt.value.visible ? (mr(), Pr("div", {
              key: 3,
              class: "canvas-context-menu",
              style: Qe({ left: mt.value.x + "px", top: mt.value.y + "px" })
            }, [
              St("div", HE, [
                (mr(!0), Pr(Vi, null, Oo(ft(mt.value.uid), (U) => (mr(), co(dr(Sv), {
                  key: U.id,
                  intent: "quiet",
                  size: "sm",
                  class: "menu__item",
                  onClick: (ht) => {
                    U.run(), Wt();
                  }
                }, {
                  default: vo(() => [
                    li(dr(Cv), {
                      name: U.icon,
                      size: "sm"
                    }, null, 8, ["name"]),
                    bv(" " + po(U.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ], 4)) : mn("", !0),
            ot.value.visible && dr(m).hasClipboard ? (mr(), Pr("div", {
              key: 4,
              class: "canvas-context-menu",
              style: Qe({ left: ot.value.x + "px", top: ot.value.y + "px" })
            }, [
              St("div", YE, [
                li(dr(Sv), {
                  intent: "quiet",
                  size: "sm",
                  class: "menu__item",
                  onClick: ut
                }, {
                  default: vo(() => [
                    li(dr(Cv), {
                      name: "content_paste",
                      size: "sm"
                    }),
                    V[19] || (V[19] = bv(" Einfügen ", -1))
                  ]),
                  _: 1
                })
              ])
            ], 4)) : mn("", !0)
          ])
        ], 36)
      ], 544),
      lt.value ? (mr(), co(dr(fb), {
        key: 0,
        title: "Übersicht",
        "remember-as": "daanse.board.minimap",
        initial: { x: 0, y: 420, w: 240, h: 168, dock: "left" },
        "min-width": 140,
        "max-width": 420,
        "min-height": 110,
        closable: !1,
        dockable: ""
      }, {
        default: vo(() => [
          St("div", {
            ref_key: "minimapBox",
            ref: rt,
            class: "minimap-canvas",
            onClick: $
          }, [
            (mr(!0), Pr(Vi, null, Oo(dr(d).layout.value, (U) => (mr(), Pr("div", {
              key: U.id,
              class: "minimap-widget",
              style: Qe({
                left: U.x * it.value + "px",
                top: U.y * it.value + "px",
                width: U.width * it.value + "px",
                height: U.height * it.value + "px"
              })
            }, null, 4))), 128)),
            St("div", {
              class: "minimap-viewport",
              style: Qe({
                left: X.value.x * 100 + "%",
                top: X.value.y * 100 + "%",
                width: X.value.w * 100 + "%",
                height: X.value.h * 100 + "%"
              })
            }, null, 4)
          ], 512)
        ]),
        _: 1
      })) : mn("", !0)
    ], 32));
  }
}), $E = /* @__PURE__ */ Mp(UE, [["__scopeId", "data-v-189ac721"]]), Oh = "org.eclipse.daanse.board.app.ui.vue.layouts.base";
function Ih({ services: t }) {
  t.getRequired(yp).addLayout({
    id: Oh,
    name: "BaseLayout",
    description: "pixelbased Layout",
    component: hb,
    editor: $E
  });
}
function Ph({ services: t }) {
  t.getRequired(yp).removeLayout(Oh);
}
const VE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Ih,
  deactivate: Ph,
  useClipboardStore: Ep
}, Symbol.toStringTag, { value: "Module" })), xp = "org.eclipse.daanse.board.app.ui.vue.layouts.base", KE = "0.0.1-next.1";
async function iD(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${xp}: tsm runtime is not initialized`);
  e.register(xp, VE, KE, "ui.vue.layouts.base"), await Ih?.(t);
}
async function aD(t) {
  await Ph?.(t);
}
export {
  iD as activate,
  aD as deactivate,
  Ep as useClipboardStore
};
