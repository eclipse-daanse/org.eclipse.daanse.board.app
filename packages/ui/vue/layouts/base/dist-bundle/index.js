(function(){var i="ui.vue.layouts.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".dottet[data-v-6934652c]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-6934652c]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-6934652c]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-6934652c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-6934652c]{display:flex;border:1px solid var(--color-divider);border-radius:8px;margin:16px}.widget-board[data-v-6934652c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow:auto}.report-container .add-btn[data-v-6934652c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-6934652c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-6934652c]{position:absolute}.dropdown-buttons-container[data-v-6934652c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-6934652c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-6934652c]{z-index:20000000!important}.add_widget-button[data-v-6934652c]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-6934652c],.v-leave-active[data-v-6934652c]{transition:opacity .5s ease}.v-enter-from[data-v-6934652c],.v-leave-to[data-v-6934652c]{opacity:0}.ghost{display:none}.report-container[data-v-b55e7b11]{width:100%;height:100%;position:relative}.scroll-viewport[data-v-b55e7b11]{width:100%;height:100%;overflow:auto}.canvas[data-v-b55e7b11]{position:relative;min-width:100%;min-height:100%;box-sizing:border-box}.dottet[data-v-b55e7b11]{background:var(--color-canvas, #dee1e7);background-image:radial-gradient(var(--color-divider, #ccd1d9) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat;transition:background-color .12s ease}.ghost-placeholder[data-v-b55e7b11]{position:absolute;background-color:color-mix(in srgb,var(--color-accent, #2f5fbd) 10%,transparent);border-radius:var(--radius-sm, 5px);border:2px dashed var(--color-outline, #b9bec9);z-index:1000000;pointer-events:none}.widget-board[data-v-b55e7b11]{position:absolute;top:0;left:0;width:100%;height:100%}.minimap-canvas[data-v-b55e7b11]{position:relative;width:100%;height:100%;cursor:pointer}.minimap-widget[data-v-b55e7b11]{position:absolute;background:color-mix(in srgb,var(--color-accent, #2f5fbd) 30%,transparent);border:1px solid color-mix(in srgb,var(--color-accent, #2f5fbd) 55%,transparent);border-radius:1px}.minimap-viewport[data-v-b55e7b11]{position:absolute;border:2px solid var(--color-err, #b02a1c);background:color-mix(in srgb,var(--color-err, #b02a1c) 8%,transparent);border-radius:2px;pointer-events:none}.report-container .add-btn[data-v-b55e7b11]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-b55e7b11]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-b55e7b11]{position:absolute}.widget-board-dropdown[data-v-b55e7b11]{width:100%;height:100%}.dropdown-buttons-container[data-v-b55e7b11]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}:root[data-board-backdrop=on] .canvas.dottet[data-v-b55e7b11]{background-color:transparent}.dashboard-item-container.is-selected[data-v-b55e7b11]:after{content:\"\";position:absolute;inset:-2px;border:1px solid var(--color-accent, #2f5fbd);border-radius:var(--radius-sm, 5px);pointer-events:none}.dashboard-item-container.in-group[data-v-b55e7b11]:before{content:\"\";position:absolute;inset:-1px;border:1px dashed color-mix(in srgb,var(--color-accent, #2f5fbd) 45%,transparent);border-radius:var(--radius-sm, 5px);pointer-events:none}.align-bar[data-v-b55e7b11]{position:absolute;top:10px;left:50%;transform:translate(-50%);z-index:30000;display:flex;align-items:center;gap:8px;padding:4px 6px;background:var(--color-pane, #f6f7f9);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-md, 6px);box-shadow:var(--shadow-e3, 0 6px 20px rgb(0 0 0 / 22%))}.align-bar__count[data-v-b55e7b11]{padding:0 4px 0 6px;font-size:var(--text-xs, 11px);color:var(--color-dim, #6b7482);white-space:nowrap}.align-bar__group[data-v-b55e7b11]{display:flex;gap:1px;padding-left:8px;border-left:1px solid var(--color-divider, #ccd1d9)}.align-bar__btn[data-v-b55e7b11]{display:flex;align-items:center;justify-content:center;width:26px;height:26px;color:var(--color-fg, #22252b);background:none;border:0;border-radius:var(--radius-xs, 3px);cursor:pointer}.align-bar__btn[data-v-b55e7b11]:hover{background-color:var(--color-raised, #ffffff)}.align-bar__btn[data-v-b55e7b11]:focus-visible{outline:2px solid var(--color-accent, #2f5fbd);outline-offset:-2px}.align-bar__btn--quiet[data-v-b55e7b11]{font-size:15px;line-height:1;color:var(--color-dim, #6b7482)}.align-bar__btn--quiet[data-v-b55e7b11]:hover{color:var(--color-fg, #22252b)}.canvas-context-menu[data-v-b55e7b11]{position:absolute;background:var(--color-raised, #ffffff);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-sm, 5px);padding:8px;box-shadow:var(--shadow-e2, 0 2px 8px rgba(25, 30, 45, .14));color:var(--color-fg, #22252b);z-index:10000001}.va-dropdown__content[data-v-b55e7b11]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-b55e7b11]{z-index:20000000!important}.add_widget-button[data-v-b55e7b11]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-b55e7b11]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px}.v-enter-active[data-v-b55e7b11],.v-leave-active[data-v-b55e7b11]{transition:opacity .5s ease}.v-enter-from[data-v-b55e7b11],.v-leave-to[data-v-b55e7b11]{opacity:0}.bounce-enter-active[data-v-b55e7b11]{animation:bounce-in-b55e7b11 .5s}.bounce-leave-active[data-v-b55e7b11]{animation:bounce-in-b55e7b11 .5s reverse}@keyframes bounce-in-b55e7b11{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}\n";})();
import { LAYOUT_REPOSITORY as hp } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { ref as zr, computed as Me, defineComponent as sf, inject as gp, onMounted as Ou, nextTick as Iu, createElementBlock as Wr, openBlock as Rr, Fragment as Eo, renderList as Pu, unref as pr, normalizeStyle as yn, normalizeClass as mp, createElementVNode as bt, createVNode as Re, onUnmounted as _v, watch as cu, resolveComponent as vu, withModifiers as pu, createBlock as du, createCommentVNode as kn, withCtx as De, toDisplayString as hu, createTextVNode as vi, createStaticVNode as rb } from "vue";
import { useLayoutStore as eb } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useWidgetsStore as nb } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { defineStore as ib } from "pinia";
import { WidgetWrapper as _p, defaultConfig as ab } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as xp, useRouter as ob } from "vue-router";
import ub from "vuedraggable";
import { DFloatingWindow as fb } from "org.eclipse.daanse.board.app.ui.vue.controls";
const { identifiers: sb } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), yp = ib("widget-clipboard", () => {
  const t = zr(null), e = Me(() => t.value !== null);
  return { clipboardItem: t, hasClipboard: e, copy: (s, u) => {
    const { uid: f, ...c } = s, { id: v, ...p } = u;
    t.value = {
      widget: c,
      layout: p
    };
  }, paste: () => t.value, clear: () => {
    t.value = null;
  } };
});
var fo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var lb = Vi.exports, xv;
function cb() {
  return xv || (xv = 1, (function(t, e) {
    (function() {
      var r, n = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", v = 500, p = "__lodash_placeholder__", h = 1, d = 2, m = 4, _ = 1, x = 2, y = 1, S = 2, w = 4, R = 8, O = 16, I = 32, E = 64, D = 128, T = 256, P = 512, B = 30, H = "...", W = 800, F = 16, Y = 1, X = 2, j = 3, rt = 1 / 0, K = 9007199254740991, at = 17976931348623157e292, it = NaN, $ = 4294967295, lt = $ - 1, ht = $ >>> 1, ut = [
        ["ary", D],
        ["bind", y],
        ["bindKey", S],
        ["curry", R],
        ["curryRight", O],
        ["flip", P],
        ["partial", I],
        ["partialRight", E],
        ["rearg", T]
      ], ct = "[object Arguments]", st = "[object Array]", pt = "[object AsyncFunction]", xt = "[object Boolean]", Ot = "[object Date]", Yt = "[object DOMException]", nt = "[object Error]", ft = "[object Function]", Xt = "[object GeneratorFunction]", St = "[object Map]", Dt = "[object Number]", Gt = "[object Null]", Wt = "[object Object]", Zt = "[object Promise]", Pt = "[object Proxy]", kt = "[object RegExp]", Jt = "[object Set]", ur = "[object String]", cr = "[object Symbol]", fr = "[object Undefined]", Qt = "[object WeakMap]", jr = "[object WeakSet]", Pr = "[object ArrayBuffer]", ye = "[object DataView]", en = "[object Float32Array]", nn = "[object Float64Array]", be = "[object Int8Array]", Be = "[object Int16Array]", an = "[object Int32Array]", on = "[object Uint8Array]", J = "[object Uint8ClampedArray]", U = "[object Uint16Array]", gt = "[object Uint32Array]", At = /\b__p \+= '';/g, Vt = /\b(__p \+=) '' \+/g, vt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ct = /&(?:amp|lt|gt|quot|#39);/g, te = /[&<>"']/g, sn = RegExp(Ct.source), Zn = RegExp(te.source), un = /<%-([\s\S]+?)%>/g, fn = /<%([\s\S]+?)%>/g, Jn = /<%=([\s\S]+?)%>/g, Th = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Oh = /^\w*$/, Ih = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jo = /[\\^$.*+?()[\]{}|]/g, Ph = RegExp(jo.source), ts = /^\s+/, Ah = /\s/, Bh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, zh = /\{\n\/\* \[wrapped with (.+)\] \*/, Gh = /,? & /, kh = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Fh = /[()=,{}\[\]\/\s]/, Lh = /\\(\\)?/g, Wh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Uf = /\w*$/, Nh = /^[-+]0x[0-9a-f]+$/i, Hh = /^0b[01]+$/i, Yh = /^\[object .+?Constructor\]$/, Xh = /^0o[0-7]+$/i, qh = /^(?:0|[1-9]\d*)$/, Uh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ba = /($^)/, $h = /['\n\r\u2028\u2029\\]/g, Sa = "\\ud800-\\udfff", Vh = "\\u0300-\\u036f", Kh = "\\ufe20-\\ufe2f", Zh = "\\u20d0-\\u20ff", $f = Vh + Kh + Zh, Vf = "\\u2700-\\u27bf", Kf = "a-z\\xdf-\\xf6\\xf8-\\xff", Jh = "\\xac\\xb1\\xd7\\xf7", Qh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", jh = "\\u2000-\\u206f", tg = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Jf = "\\ufe0e\\ufe0f", Qf = Jh + Qh + jh + tg, rs = "['’]", rg = "[" + Sa + "]", jf = "[" + Qf + "]", Ca = "[" + $f + "]", tl = "\\d+", eg = "[" + Vf + "]", rl = "[" + Kf + "]", el = "[^" + Sa + Qf + tl + Vf + Kf + Zf + "]", es = "\\ud83c[\\udffb-\\udfff]", ng = "(?:" + Ca + "|" + es + ")", nl = "[^" + Sa + "]", ns = "(?:\\ud83c[\\udde6-\\uddff]){2}", is = "[\\ud800-\\udbff][\\udc00-\\udfff]", Qn = "[" + Zf + "]", il = "\\u200d", al = "(?:" + rl + "|" + el + ")", ig = "(?:" + Qn + "|" + el + ")", ol = "(?:" + rs + "(?:d|ll|m|re|s|t|ve))?", sl = "(?:" + rs + "(?:D|LL|M|RE|S|T|VE))?", ul = ng + "?", fl = "[" + Jf + "]?", ag = "(?:" + il + "(?:" + [nl, ns, is].join("|") + ")" + fl + ul + ")*", og = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", sg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ll = fl + ul + ag, ug = "(?:" + [eg, ns, is].join("|") + ")" + ll, fg = "(?:" + [nl + Ca + "?", Ca, ns, is, rg].join("|") + ")", lg = RegExp(rs, "g"), cg = RegExp(Ca, "g"), as = RegExp(es + "(?=" + es + ")|" + fg + ll, "g"), vg = RegExp([
        Qn + "?" + rl + "+" + ol + "(?=" + [jf, Qn, "$"].join("|") + ")",
        ig + "+" + sl + "(?=" + [jf, Qn + al, "$"].join("|") + ")",
        Qn + "?" + al + "+" + ol,
        Qn + "+" + sl,
        sg,
        og,
        tl,
        ug
      ].join("|"), "g"), pg = RegExp("[" + il + Sa + $f + Jf + "]"), dg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, hg = [
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
      ], gg = -1, or = {};
      or[en] = or[nn] = or[be] = or[Be] = or[an] = or[on] = or[J] = or[U] = or[gt] = !0, or[ct] = or[st] = or[Pr] = or[xt] = or[ye] = or[Ot] = or[nt] = or[ft] = or[St] = or[Dt] = or[Wt] = or[kt] = or[Jt] = or[ur] = or[Qt] = !1;
      var ar = {};
      ar[ct] = ar[st] = ar[Pr] = ar[ye] = ar[xt] = ar[Ot] = ar[en] = ar[nn] = ar[be] = ar[Be] = ar[an] = ar[St] = ar[Dt] = ar[Wt] = ar[kt] = ar[Jt] = ar[ur] = ar[cr] = ar[on] = ar[J] = ar[U] = ar[gt] = !0, ar[nt] = ar[ft] = ar[Qt] = !1;
      var mg = {
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
      }, _g = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, xg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, yg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, bg = parseFloat, Sg = parseInt, cl = typeof fo == "object" && fo && fo.Object === Object && fo, Cg = typeof self == "object" && self && self.Object === Object && self, Tr = cl || Cg || Function("return this")(), os = e && !e.nodeType && e, Rn = os && !0 && t && !t.nodeType && t, vl = Rn && Rn.exports === os, ss = vl && cl.process, ue = (function() {
        try {
          var L = Rn && Rn.require && Rn.require("util").types;
          return L || ss && ss.binding && ss.binding("util");
        } catch {
        }
      })(), pl = ue && ue.isArrayBuffer, dl = ue && ue.isDate, hl = ue && ue.isMap, gl = ue && ue.isRegExp, ml = ue && ue.isSet, _l = ue && ue.isTypedArray;
      function re(L, V, q) {
        switch (q.length) {
          case 0:
            return L.call(V);
          case 1:
            return L.call(V, q[0]);
          case 2:
            return L.call(V, q[0], q[1]);
          case 3:
            return L.call(V, q[0], q[1], q[2]);
        }
        return L.apply(V, q);
      }
      function wg(L, V, q, _t) {
        for (var Bt = -1, jt = L == null ? 0 : L.length; ++Bt < jt; ) {
          var Sr = L[Bt];
          V(_t, Sr, q(Sr), L);
        }
        return _t;
      }
      function fe(L, V) {
        for (var q = -1, _t = L == null ? 0 : L.length; ++q < _t && V(L[q], q, L) !== !1; )
          ;
        return L;
      }
      function Eg(L, V) {
        for (var q = L == null ? 0 : L.length; q-- && V(L[q], q, L) !== !1; )
          ;
        return L;
      }
      function xl(L, V) {
        for (var q = -1, _t = L == null ? 0 : L.length; ++q < _t; )
          if (!V(L[q], q, L))
            return !1;
        return !0;
      }
      function ln(L, V) {
        for (var q = -1, _t = L == null ? 0 : L.length, Bt = 0, jt = []; ++q < _t; ) {
          var Sr = L[q];
          V(Sr, q, L) && (jt[Bt++] = Sr);
        }
        return jt;
      }
      function wa(L, V) {
        var q = L == null ? 0 : L.length;
        return !!q && jn(L, V, 0) > -1;
      }
      function us(L, V, q) {
        for (var _t = -1, Bt = L == null ? 0 : L.length; ++_t < Bt; )
          if (q(V, L[_t]))
            return !0;
        return !1;
      }
      function lr(L, V) {
        for (var q = -1, _t = L == null ? 0 : L.length, Bt = Array(_t); ++q < _t; )
          Bt[q] = V(L[q], q, L);
        return Bt;
      }
      function cn(L, V) {
        for (var q = -1, _t = V.length, Bt = L.length; ++q < _t; )
          L[Bt + q] = V[q];
        return L;
      }
      function fs(L, V, q, _t) {
        var Bt = -1, jt = L == null ? 0 : L.length;
        for (_t && jt && (q = L[++Bt]); ++Bt < jt; )
          q = V(q, L[Bt], Bt, L);
        return q;
      }
      function Dg(L, V, q, _t) {
        var Bt = L == null ? 0 : L.length;
        for (_t && Bt && (q = L[--Bt]); Bt--; )
          q = V(q, L[Bt], Bt, L);
        return q;
      }
      function ls(L, V) {
        for (var q = -1, _t = L == null ? 0 : L.length; ++q < _t; )
          if (V(L[q], q, L))
            return !0;
        return !1;
      }
      var Mg = cs("length");
      function Rg(L) {
        return L.split("");
      }
      function Tg(L) {
        return L.match(kh) || [];
      }
      function yl(L, V, q) {
        var _t;
        return q(L, function(Bt, jt, Sr) {
          if (V(Bt, jt, Sr))
            return _t = jt, !1;
        }), _t;
      }
      function Ea(L, V, q, _t) {
        for (var Bt = L.length, jt = q + (_t ? 1 : -1); _t ? jt-- : ++jt < Bt; )
          if (V(L[jt], jt, L))
            return jt;
        return -1;
      }
      function jn(L, V, q) {
        return V === V ? Ng(L, V, q) : Ea(L, bl, q);
      }
      function Og(L, V, q, _t) {
        for (var Bt = q - 1, jt = L.length; ++Bt < jt; )
          if (_t(L[Bt], V))
            return Bt;
        return -1;
      }
      function bl(L) {
        return L !== L;
      }
      function Sl(L, V) {
        var q = L == null ? 0 : L.length;
        return q ? ps(L, V) / q : it;
      }
      function cs(L) {
        return function(V) {
          return V == null ? r : V[L];
        };
      }
      function vs(L) {
        return function(V) {
          return L == null ? r : L[V];
        };
      }
      function Cl(L, V, q, _t, Bt) {
        return Bt(L, function(jt, Sr, ir) {
          q = _t ? (_t = !1, jt) : V(q, jt, Sr, ir);
        }), q;
      }
      function Ig(L, V) {
        var q = L.length;
        for (L.sort(V); q--; )
          L[q] = L[q].value;
        return L;
      }
      function ps(L, V) {
        for (var q, _t = -1, Bt = L.length; ++_t < Bt; ) {
          var jt = V(L[_t]);
          jt !== r && (q = q === r ? jt : q + jt);
        }
        return q;
      }
      function ds(L, V) {
        for (var q = -1, _t = Array(L); ++q < L; )
          _t[q] = V(q);
        return _t;
      }
      function Pg(L, V) {
        return lr(V, function(q) {
          return [q, L[q]];
        });
      }
      function wl(L) {
        return L && L.slice(0, Rl(L) + 1).replace(ts, "");
      }
      function ee(L) {
        return function(V) {
          return L(V);
        };
      }
      function hs(L, V) {
        return lr(V, function(q) {
          return L[q];
        });
      }
      function Ai(L, V) {
        return L.has(V);
      }
      function El(L, V) {
        for (var q = -1, _t = L.length; ++q < _t && jn(V, L[q], 0) > -1; )
          ;
        return q;
      }
      function Dl(L, V) {
        for (var q = L.length; q-- && jn(V, L[q], 0) > -1; )
          ;
        return q;
      }
      function Ag(L, V) {
        for (var q = L.length, _t = 0; q--; )
          L[q] === V && ++_t;
        return _t;
      }
      var Bg = vs(mg), zg = vs(_g);
      function Gg(L) {
        return "\\" + yg[L];
      }
      function kg(L, V) {
        return L == null ? r : L[V];
      }
      function ti(L) {
        return pg.test(L);
      }
      function Fg(L) {
        return dg.test(L);
      }
      function Lg(L) {
        for (var V, q = []; !(V = L.next()).done; )
          q.push(V.value);
        return q;
      }
      function gs(L) {
        var V = -1, q = Array(L.size);
        return L.forEach(function(_t, Bt) {
          q[++V] = [Bt, _t];
        }), q;
      }
      function Ml(L, V) {
        return function(q) {
          return L(V(q));
        };
      }
      function vn(L, V) {
        for (var q = -1, _t = L.length, Bt = 0, jt = []; ++q < _t; ) {
          var Sr = L[q];
          (Sr === V || Sr === p) && (L[q] = p, jt[Bt++] = q);
        }
        return jt;
      }
      function Da(L) {
        var V = -1, q = Array(L.size);
        return L.forEach(function(_t) {
          q[++V] = _t;
        }), q;
      }
      function Wg(L) {
        var V = -1, q = Array(L.size);
        return L.forEach(function(_t) {
          q[++V] = [_t, _t];
        }), q;
      }
      function Ng(L, V, q) {
        for (var _t = q - 1, Bt = L.length; ++_t < Bt; )
          if (L[_t] === V)
            return _t;
        return -1;
      }
      function Hg(L, V, q) {
        for (var _t = q + 1; _t--; )
          if (L[_t] === V)
            return _t;
        return _t;
      }
      function ri(L) {
        return ti(L) ? Xg(L) : Mg(L);
      }
      function Se(L) {
        return ti(L) ? qg(L) : Rg(L);
      }
      function Rl(L) {
        for (var V = L.length; V-- && Ah.test(L.charAt(V)); )
          ;
        return V;
      }
      var Yg = vs(xg);
      function Xg(L) {
        for (var V = as.lastIndex = 0; as.test(L); )
          ++V;
        return V;
      }
      function qg(L) {
        return L.match(as) || [];
      }
      function Ug(L) {
        return L.match(vg) || [];
      }
      var $g = (function L(V) {
        V = V == null ? Tr : ei.defaults(Tr.Object(), V, ei.pick(Tr, hg));
        var q = V.Array, _t = V.Date, Bt = V.Error, jt = V.Function, Sr = V.Math, ir = V.Object, ms = V.RegExp, Vg = V.String, le = V.TypeError, Ma = q.prototype, Kg = jt.prototype, ni = ir.prototype, Ra = V["__core-js_shared__"], Ta = Kg.toString, rr = ni.hasOwnProperty, Zg = 0, Tl = (function() {
          var i = /[^.]+$/.exec(Ra && Ra.keys && Ra.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), Oa = ni.toString, Jg = Ta.call(ir), Qg = Tr._, jg = ms(
          "^" + Ta.call(rr).replace(jo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Ia = vl ? V.Buffer : r, pn = V.Symbol, Pa = V.Uint8Array, Ol = Ia ? Ia.allocUnsafe : r, Aa = Ml(ir.getPrototypeOf, ir), Il = ir.create, Pl = ni.propertyIsEnumerable, Ba = Ma.splice, Al = pn ? pn.isConcatSpreadable : r, Bi = pn ? pn.iterator : r, Tn = pn ? pn.toStringTag : r, za = (function() {
          try {
            var i = Bn(ir, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), t0 = V.clearTimeout !== Tr.clearTimeout && V.clearTimeout, r0 = _t && _t.now !== Tr.Date.now && _t.now, e0 = V.setTimeout !== Tr.setTimeout && V.setTimeout, Ga = Sr.ceil, ka = Sr.floor, _s = ir.getOwnPropertySymbols, n0 = Ia ? Ia.isBuffer : r, Bl = V.isFinite, i0 = Ma.join, a0 = Ml(ir.keys, ir), Cr = Sr.max, Ar = Sr.min, o0 = _t.now, s0 = V.parseInt, zl = Sr.random, u0 = Ma.reverse, xs = Bn(V, "DataView"), zi = Bn(V, "Map"), ys = Bn(V, "Promise"), ii = Bn(V, "Set"), Gi = Bn(V, "WeakMap"), ki = Bn(ir, "create"), Fa = Gi && new Gi(), ai = {}, f0 = zn(xs), l0 = zn(zi), c0 = zn(ys), v0 = zn(ii), p0 = zn(Gi), La = pn ? pn.prototype : r, Fi = La ? La.valueOf : r, Gl = La ? La.toString : r;
        function C(i) {
          if (hr(i) && !zt(i) && !(i instanceof Ut)) {
            if (i instanceof ce)
              return i;
            if (rr.call(i, "__wrapped__"))
              return kc(i);
          }
          return new ce(i);
        }
        var oi = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(o) {
            if (!vr(o))
              return {};
            if (Il)
              return Il(o);
            i.prototype = o;
            var l = new i();
            return i.prototype = r, l;
          };
        })();
        function Wa() {
        }
        function ce(i, o) {
          this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
        }
        C.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: un,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: fn,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Jn,
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
            _: C
          }
        }, C.prototype = Wa.prototype, C.prototype.constructor = C, ce.prototype = oi(Wa.prototype), ce.prototype.constructor = ce;
        function Ut(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $, this.__views__ = [];
        }
        function d0() {
          var i = new Ut(this.__wrapped__);
          return i.__actions__ = qr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = qr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = qr(this.__views__), i;
        }
        function h0() {
          if (this.__filtered__) {
            var i = new Ut(this);
            i.__dir__ = -1, i.__filtered__ = !0;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function g0() {
          var i = this.__wrapped__.value(), o = this.__dir__, l = zt(i), g = o < 0, b = l ? i.length : 0, M = R1(0, b, this.__views__), A = M.start, G = M.end, N = G - A, Z = g ? G : A - 1, Q = this.__iteratees__, et = Q.length, dt = 0, yt = Ar(N, this.__takeCount__);
          if (!l || !g && b == N && yt == N)
            return oc(i, this.__actions__);
          var Rt = [];
          t:
            for (; N-- && dt < yt; ) {
              Z += o;
              for (var Nt = -1, Tt = i[Z]; ++Nt < et; ) {
                var qt = Q[Nt], $t = qt.iteratee, ae = qt.type, Lr = $t(Tt);
                if (ae == X)
                  Tt = Lr;
                else if (!Lr) {
                  if (ae == Y)
                    continue t;
                  break t;
                }
              }
              Rt[dt++] = Tt;
            }
          return Rt;
        }
        Ut.prototype = oi(Wa.prototype), Ut.prototype.constructor = Ut;
        function On(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function m0() {
          this.__data__ = ki ? ki(null) : {}, this.size = 0;
        }
        function _0(i) {
          var o = this.has(i) && delete this.__data__[i];
          return this.size -= o ? 1 : 0, o;
        }
        function x0(i) {
          var o = this.__data__;
          if (ki) {
            var l = o[i];
            return l === c ? r : l;
          }
          return rr.call(o, i) ? o[i] : r;
        }
        function y0(i) {
          var o = this.__data__;
          return ki ? o[i] !== r : rr.call(o, i);
        }
        function b0(i, o) {
          var l = this.__data__;
          return this.size += this.has(i) ? 0 : 1, l[i] = ki && o === r ? c : o, this;
        }
        On.prototype.clear = m0, On.prototype.delete = _0, On.prototype.get = x0, On.prototype.has = y0, On.prototype.set = b0;
        function He(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function S0() {
          this.__data__ = [], this.size = 0;
        }
        function C0(i) {
          var o = this.__data__, l = Na(o, i);
          if (l < 0)
            return !1;
          var g = o.length - 1;
          return l == g ? o.pop() : Ba.call(o, l, 1), --this.size, !0;
        }
        function w0(i) {
          var o = this.__data__, l = Na(o, i);
          return l < 0 ? r : o[l][1];
        }
        function E0(i) {
          return Na(this.__data__, i) > -1;
        }
        function D0(i, o) {
          var l = this.__data__, g = Na(l, i);
          return g < 0 ? (++this.size, l.push([i, o])) : l[g][1] = o, this;
        }
        He.prototype.clear = S0, He.prototype.delete = C0, He.prototype.get = w0, He.prototype.has = E0, He.prototype.set = D0;
        function Ye(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function M0() {
          this.size = 0, this.__data__ = {
            hash: new On(),
            map: new (zi || He)(),
            string: new On()
          };
        }
        function R0(i) {
          var o = ja(this, i).delete(i);
          return this.size -= o ? 1 : 0, o;
        }
        function T0(i) {
          return ja(this, i).get(i);
        }
        function O0(i) {
          return ja(this, i).has(i);
        }
        function I0(i, o) {
          var l = ja(this, i), g = l.size;
          return l.set(i, o), this.size += l.size == g ? 0 : 1, this;
        }
        Ye.prototype.clear = M0, Ye.prototype.delete = R0, Ye.prototype.get = T0, Ye.prototype.has = O0, Ye.prototype.set = I0;
        function In(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.__data__ = new Ye(); ++o < l; )
            this.add(i[o]);
        }
        function P0(i) {
          return this.__data__.set(i, c), this;
        }
        function A0(i) {
          return this.__data__.has(i);
        }
        In.prototype.add = In.prototype.push = P0, In.prototype.has = A0;
        function Ce(i) {
          var o = this.__data__ = new He(i);
          this.size = o.size;
        }
        function B0() {
          this.__data__ = new He(), this.size = 0;
        }
        function z0(i) {
          var o = this.__data__, l = o.delete(i);
          return this.size = o.size, l;
        }
        function G0(i) {
          return this.__data__.get(i);
        }
        function k0(i) {
          return this.__data__.has(i);
        }
        function F0(i, o) {
          var l = this.__data__;
          if (l instanceof He) {
            var g = l.__data__;
            if (!zi || g.length < a - 1)
              return g.push([i, o]), this.size = ++l.size, this;
            l = this.__data__ = new Ye(g);
          }
          return l.set(i, o), this.size = l.size, this;
        }
        Ce.prototype.clear = B0, Ce.prototype.delete = z0, Ce.prototype.get = G0, Ce.prototype.has = k0, Ce.prototype.set = F0;
        function kl(i, o) {
          var l = zt(i), g = !l && Gn(i), b = !l && !g && _n(i), M = !l && !g && !b && li(i), A = l || g || b || M, G = A ? ds(i.length, Vg) : [], N = G.length;
          for (var Z in i)
            (o || rr.call(i, Z)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Z == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            b && (Z == "offset" || Z == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (Z == "buffer" || Z == "byteLength" || Z == "byteOffset") || // Skip index properties.
            $e(Z, N))) && G.push(Z);
          return G;
        }
        function Fl(i) {
          var o = i.length;
          return o ? i[Is(0, o - 1)] : r;
        }
        function L0(i, o) {
          return to(qr(i), Pn(o, 0, i.length));
        }
        function W0(i) {
          return to(qr(i));
        }
        function bs(i, o, l) {
          (l !== r && !we(i[o], l) || l === r && !(o in i)) && Xe(i, o, l);
        }
        function Li(i, o, l) {
          var g = i[o];
          (!(rr.call(i, o) && we(g, l)) || l === r && !(o in i)) && Xe(i, o, l);
        }
        function Na(i, o) {
          for (var l = i.length; l--; )
            if (we(i[l][0], o))
              return l;
          return -1;
        }
        function N0(i, o, l, g) {
          return dn(i, function(b, M, A) {
            o(g, b, l(b), A);
          }), g;
        }
        function Ll(i, o) {
          return i && Ge(o, Mr(o), i);
        }
        function H0(i, o) {
          return i && Ge(o, $r(o), i);
        }
        function Xe(i, o, l) {
          o == "__proto__" && za ? za(i, o, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : i[o] = l;
        }
        function Ss(i, o) {
          for (var l = -1, g = o.length, b = q(g), M = i == null; ++l < g; )
            b[l] = M ? r : eu(i, o[l]);
          return b;
        }
        function Pn(i, o, l) {
          return i === i && (l !== r && (i = i <= l ? i : l), o !== r && (i = i >= o ? i : o)), i;
        }
        function ve(i, o, l, g, b, M) {
          var A, G = o & h, N = o & d, Z = o & m;
          if (l && (A = b ? l(i, g, b, M) : l(i)), A !== r)
            return A;
          if (!vr(i))
            return i;
          var Q = zt(i);
          if (Q) {
            if (A = O1(i), !G)
              return qr(i, A);
          } else {
            var et = Br(i), dt = et == ft || et == Xt;
            if (_n(i))
              return fc(i, G);
            if (et == Wt || et == ct || dt && !b) {
              if (A = N || dt ? {} : Rc(i), !G)
                return N ? x1(i, H0(A, i)) : _1(i, Ll(A, i));
            } else {
              if (!ar[et])
                return b ? i : {};
              A = I1(i, et, G);
            }
          }
          M || (M = new Ce());
          var yt = M.get(i);
          if (yt)
            return yt;
          M.set(i, A), nv(i) ? i.forEach(function(Tt) {
            A.add(ve(Tt, o, l, Tt, i, M));
          }) : rv(i) && i.forEach(function(Tt, qt) {
            A.set(qt, ve(Tt, o, l, qt, i, M));
          });
          var Rt = Z ? N ? Hs : Ns : N ? $r : Mr, Nt = Q ? r : Rt(i);
          return fe(Nt || i, function(Tt, qt) {
            Nt && (qt = Tt, Tt = i[qt]), Li(A, qt, ve(Tt, o, l, qt, i, M));
          }), A;
        }
        function Y0(i) {
          var o = Mr(i);
          return function(l) {
            return Wl(l, i, o);
          };
        }
        function Wl(i, o, l) {
          var g = l.length;
          if (i == null)
            return !g;
          for (i = ir(i); g--; ) {
            var b = l[g], M = o[b], A = i[b];
            if (A === r && !(b in i) || !M(A))
              return !1;
          }
          return !0;
        }
        function Nl(i, o, l) {
          if (typeof i != "function")
            throw new le(u);
          return Ui(function() {
            i.apply(r, l);
          }, o);
        }
        function Wi(i, o, l, g) {
          var b = -1, M = wa, A = !0, G = i.length, N = [], Z = o.length;
          if (!G)
            return N;
          l && (o = lr(o, ee(l))), g ? (M = us, A = !1) : o.length >= a && (M = Ai, A = !1, o = new In(o));
          t:
            for (; ++b < G; ) {
              var Q = i[b], et = l == null ? Q : l(Q);
              if (Q = g || Q !== 0 ? Q : 0, A && et === et) {
                for (var dt = Z; dt--; )
                  if (o[dt] === et)
                    continue t;
                N.push(Q);
              } else M(o, et, g) || N.push(Q);
            }
          return N;
        }
        var dn = dc(ze), Hl = dc(ws, !0);
        function X0(i, o) {
          var l = !0;
          return dn(i, function(g, b, M) {
            return l = !!o(g, b, M), l;
          }), l;
        }
        function Ha(i, o, l) {
          for (var g = -1, b = i.length; ++g < b; ) {
            var M = i[g], A = o(M);
            if (A != null && (G === r ? A === A && !ie(A) : l(A, G)))
              var G = A, N = M;
          }
          return N;
        }
        function q0(i, o, l, g) {
          var b = i.length;
          for (l = Lt(l), l < 0 && (l = -l > b ? 0 : b + l), g = g === r || g > b ? b : Lt(g), g < 0 && (g += b), g = l > g ? 0 : av(g); l < g; )
            i[l++] = o;
          return i;
        }
        function Yl(i, o) {
          var l = [];
          return dn(i, function(g, b, M) {
            o(g, b, M) && l.push(g);
          }), l;
        }
        function Or(i, o, l, g, b) {
          var M = -1, A = i.length;
          for (l || (l = A1), b || (b = []); ++M < A; ) {
            var G = i[M];
            o > 0 && l(G) ? o > 1 ? Or(G, o - 1, l, g, b) : cn(b, G) : g || (b[b.length] = G);
          }
          return b;
        }
        var Cs = hc(), Xl = hc(!0);
        function ze(i, o) {
          return i && Cs(i, o, Mr);
        }
        function ws(i, o) {
          return i && Xl(i, o, Mr);
        }
        function Ya(i, o) {
          return ln(o, function(l) {
            return Ve(i[l]);
          });
        }
        function An(i, o) {
          o = gn(o, i);
          for (var l = 0, g = o.length; i != null && l < g; )
            i = i[ke(o[l++])];
          return l && l == g ? i : r;
        }
        function ql(i, o, l) {
          var g = o(i);
          return zt(i) ? g : cn(g, l(i));
        }
        function kr(i) {
          return i == null ? i === r ? fr : Gt : Tn && Tn in ir(i) ? M1(i) : W1(i);
        }
        function Es(i, o) {
          return i > o;
        }
        function U0(i, o) {
          return i != null && rr.call(i, o);
        }
        function $0(i, o) {
          return i != null && o in ir(i);
        }
        function V0(i, o, l) {
          return i >= Ar(o, l) && i < Cr(o, l);
        }
        function Ds(i, o, l) {
          for (var g = l ? us : wa, b = i[0].length, M = i.length, A = M, G = q(M), N = 1 / 0, Z = []; A--; ) {
            var Q = i[A];
            A && o && (Q = lr(Q, ee(o))), N = Ar(Q.length, N), G[A] = !l && (o || b >= 120 && Q.length >= 120) ? new In(A && Q) : r;
          }
          Q = i[0];
          var et = -1, dt = G[0];
          t:
            for (; ++et < b && Z.length < N; ) {
              var yt = Q[et], Rt = o ? o(yt) : yt;
              if (yt = l || yt !== 0 ? yt : 0, !(dt ? Ai(dt, Rt) : g(Z, Rt, l))) {
                for (A = M; --A; ) {
                  var Nt = G[A];
                  if (!(Nt ? Ai(Nt, Rt) : g(i[A], Rt, l)))
                    continue t;
                }
                dt && dt.push(Rt), Z.push(yt);
              }
            }
          return Z;
        }
        function K0(i, o, l, g) {
          return ze(i, function(b, M, A) {
            o(g, l(b), M, A);
          }), g;
        }
        function Ni(i, o, l) {
          o = gn(o, i), i = Pc(i, o);
          var g = i == null ? i : i[ke(de(o))];
          return g == null ? r : re(g, i, l);
        }
        function Ul(i) {
          return hr(i) && kr(i) == ct;
        }
        function Z0(i) {
          return hr(i) && kr(i) == Pr;
        }
        function J0(i) {
          return hr(i) && kr(i) == Ot;
        }
        function Hi(i, o, l, g, b) {
          return i === o ? !0 : i == null || o == null || !hr(i) && !hr(o) ? i !== i && o !== o : Q0(i, o, l, g, Hi, b);
        }
        function Q0(i, o, l, g, b, M) {
          var A = zt(i), G = zt(o), N = A ? st : Br(i), Z = G ? st : Br(o);
          N = N == ct ? Wt : N, Z = Z == ct ? Wt : Z;
          var Q = N == Wt, et = Z == Wt, dt = N == Z;
          if (dt && _n(i)) {
            if (!_n(o))
              return !1;
            A = !0, Q = !1;
          }
          if (dt && !Q)
            return M || (M = new Ce()), A || li(i) ? Ec(i, o, l, g, b, M) : E1(i, o, N, l, g, b, M);
          if (!(l & _)) {
            var yt = Q && rr.call(i, "__wrapped__"), Rt = et && rr.call(o, "__wrapped__");
            if (yt || Rt) {
              var Nt = yt ? i.value() : i, Tt = Rt ? o.value() : o;
              return M || (M = new Ce()), b(Nt, Tt, l, g, M);
            }
          }
          return dt ? (M || (M = new Ce()), D1(i, o, l, g, b, M)) : !1;
        }
        function j0(i) {
          return hr(i) && Br(i) == St;
        }
        function Ms(i, o, l, g) {
          var b = l.length, M = b, A = !g;
          if (i == null)
            return !M;
          for (i = ir(i); b--; ) {
            var G = l[b];
            if (A && G[2] ? G[1] !== i[G[0]] : !(G[0] in i))
              return !1;
          }
          for (; ++b < M; ) {
            G = l[b];
            var N = G[0], Z = i[N], Q = G[1];
            if (A && G[2]) {
              if (Z === r && !(N in i))
                return !1;
            } else {
              var et = new Ce();
              if (g)
                var dt = g(Z, Q, N, i, o, et);
              if (!(dt === r ? Hi(Q, Z, _ | x, g, et) : dt))
                return !1;
            }
          }
          return !0;
        }
        function $l(i) {
          if (!vr(i) || z1(i))
            return !1;
          var o = Ve(i) ? jg : Yh;
          return o.test(zn(i));
        }
        function t1(i) {
          return hr(i) && kr(i) == kt;
        }
        function r1(i) {
          return hr(i) && Br(i) == Jt;
        }
        function e1(i) {
          return hr(i) && oo(i.length) && !!or[kr(i)];
        }
        function Vl(i) {
          return typeof i == "function" ? i : i == null ? Vr : typeof i == "object" ? zt(i) ? Jl(i[0], i[1]) : Zl(i) : gv(i);
        }
        function Rs(i) {
          if (!qi(i))
            return a0(i);
          var o = [];
          for (var l in ir(i))
            rr.call(i, l) && l != "constructor" && o.push(l);
          return o;
        }
        function n1(i) {
          if (!vr(i))
            return L1(i);
          var o = qi(i), l = [];
          for (var g in i)
            g == "constructor" && (o || !rr.call(i, g)) || l.push(g);
          return l;
        }
        function Ts(i, o) {
          return i < o;
        }
        function Kl(i, o) {
          var l = -1, g = Ur(i) ? q(i.length) : [];
          return dn(i, function(b, M, A) {
            g[++l] = o(b, M, A);
          }), g;
        }
        function Zl(i) {
          var o = Xs(i);
          return o.length == 1 && o[0][2] ? Oc(o[0][0], o[0][1]) : function(l) {
            return l === i || Ms(l, i, o);
          };
        }
        function Jl(i, o) {
          return Us(i) && Tc(o) ? Oc(ke(i), o) : function(l) {
            var g = eu(l, i);
            return g === r && g === o ? nu(l, i) : Hi(o, g, _ | x);
          };
        }
        function Xa(i, o, l, g, b) {
          i !== o && Cs(o, function(M, A) {
            if (b || (b = new Ce()), vr(M))
              i1(i, o, A, l, Xa, g, b);
            else {
              var G = g ? g(Vs(i, A), M, A + "", i, o, b) : r;
              G === r && (G = M), bs(i, A, G);
            }
          }, $r);
        }
        function i1(i, o, l, g, b, M, A) {
          var G = Vs(i, l), N = Vs(o, l), Z = A.get(N);
          if (Z) {
            bs(i, l, Z);
            return;
          }
          var Q = M ? M(G, N, l + "", i, o, A) : r, et = Q === r;
          if (et) {
            var dt = zt(N), yt = !dt && _n(N), Rt = !dt && !yt && li(N);
            Q = N, dt || yt || Rt ? zt(G) ? Q = G : gr(G) ? Q = qr(G) : yt ? (et = !1, Q = fc(N, !0)) : Rt ? (et = !1, Q = lc(N, !0)) : Q = [] : $i(N) || Gn(N) ? (Q = G, Gn(G) ? Q = ov(G) : (!vr(G) || Ve(G)) && (Q = Rc(N))) : et = !1;
          }
          et && (A.set(N, Q), b(Q, N, g, M, A), A.delete(N)), bs(i, l, Q);
        }
        function Ql(i, o) {
          var l = i.length;
          if (l)
            return o += o < 0 ? l : 0, $e(o, l) ? i[o] : r;
        }
        function jl(i, o, l) {
          o.length ? o = lr(o, function(M) {
            return zt(M) ? function(A) {
              return An(A, M.length === 1 ? M[0] : M);
            } : M;
          }) : o = [Vr];
          var g = -1;
          o = lr(o, ee(Mt()));
          var b = Kl(i, function(M, A, G) {
            var N = lr(o, function(Z) {
              return Z(M);
            });
            return { criteria: N, index: ++g, value: M };
          });
          return Ig(b, function(M, A) {
            return m1(M, A, l);
          });
        }
        function a1(i, o) {
          return tc(i, o, function(l, g) {
            return nu(i, g);
          });
        }
        function tc(i, o, l) {
          for (var g = -1, b = o.length, M = {}; ++g < b; ) {
            var A = o[g], G = An(i, A);
            l(G, A) && Yi(M, gn(A, i), G);
          }
          return M;
        }
        function o1(i) {
          return function(o) {
            return An(o, i);
          };
        }
        function Os(i, o, l, g) {
          var b = g ? Og : jn, M = -1, A = o.length, G = i;
          for (i === o && (o = qr(o)), l && (G = lr(i, ee(l))); ++M < A; )
            for (var N = 0, Z = o[M], Q = l ? l(Z) : Z; (N = b(G, Q, N, g)) > -1; )
              G !== i && Ba.call(G, N, 1), Ba.call(i, N, 1);
          return i;
        }
        function rc(i, o) {
          for (var l = i ? o.length : 0, g = l - 1; l--; ) {
            var b = o[l];
            if (l == g || b !== M) {
              var M = b;
              $e(b) ? Ba.call(i, b, 1) : Bs(i, b);
            }
          }
          return i;
        }
        function Is(i, o) {
          return i + ka(zl() * (o - i + 1));
        }
        function s1(i, o, l, g) {
          for (var b = -1, M = Cr(Ga((o - i) / (l || 1)), 0), A = q(M); M--; )
            A[g ? M : ++b] = i, i += l;
          return A;
        }
        function Ps(i, o) {
          var l = "";
          if (!i || o < 1 || o > K)
            return l;
          do
            o % 2 && (l += i), o = ka(o / 2), o && (i += i);
          while (o);
          return l;
        }
        function Ht(i, o) {
          return Ks(Ic(i, o, Vr), i + "");
        }
        function u1(i) {
          return Fl(ci(i));
        }
        function f1(i, o) {
          var l = ci(i);
          return to(l, Pn(o, 0, l.length));
        }
        function Yi(i, o, l, g) {
          if (!vr(i))
            return i;
          o = gn(o, i);
          for (var b = -1, M = o.length, A = M - 1, G = i; G != null && ++b < M; ) {
            var N = ke(o[b]), Z = l;
            if (N === "__proto__" || N === "constructor" || N === "prototype")
              return i;
            if (b != A) {
              var Q = G[N];
              Z = g ? g(Q, N, G) : r, Z === r && (Z = vr(Q) ? Q : $e(o[b + 1]) ? [] : {});
            }
            Li(G, N, Z), G = G[N];
          }
          return i;
        }
        var ec = Fa ? function(i, o) {
          return Fa.set(i, o), i;
        } : Vr, l1 = za ? function(i, o) {
          return za(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: au(o),
            writable: !0
          });
        } : Vr;
        function c1(i) {
          return to(ci(i));
        }
        function pe(i, o, l) {
          var g = -1, b = i.length;
          o < 0 && (o = -o > b ? 0 : b + o), l = l > b ? b : l, l < 0 && (l += b), b = o > l ? 0 : l - o >>> 0, o >>>= 0;
          for (var M = q(b); ++g < b; )
            M[g] = i[g + o];
          return M;
        }
        function v1(i, o) {
          var l;
          return dn(i, function(g, b, M) {
            return l = o(g, b, M), !l;
          }), !!l;
        }
        function qa(i, o, l) {
          var g = 0, b = i == null ? g : i.length;
          if (typeof o == "number" && o === o && b <= ht) {
            for (; g < b; ) {
              var M = g + b >>> 1, A = i[M];
              A !== null && !ie(A) && (l ? A <= o : A < o) ? g = M + 1 : b = M;
            }
            return b;
          }
          return As(i, o, Vr, l);
        }
        function As(i, o, l, g) {
          var b = 0, M = i == null ? 0 : i.length;
          if (M === 0)
            return 0;
          o = l(o);
          for (var A = o !== o, G = o === null, N = ie(o), Z = o === r; b < M; ) {
            var Q = ka((b + M) / 2), et = l(i[Q]), dt = et !== r, yt = et === null, Rt = et === et, Nt = ie(et);
            if (A)
              var Tt = g || Rt;
            else Z ? Tt = Rt && (g || dt) : G ? Tt = Rt && dt && (g || !yt) : N ? Tt = Rt && dt && !yt && (g || !Nt) : yt || Nt ? Tt = !1 : Tt = g ? et <= o : et < o;
            Tt ? b = Q + 1 : M = Q;
          }
          return Ar(M, lt);
        }
        function nc(i, o) {
          for (var l = -1, g = i.length, b = 0, M = []; ++l < g; ) {
            var A = i[l], G = o ? o(A) : A;
            if (!l || !we(G, N)) {
              var N = G;
              M[b++] = A === 0 ? 0 : A;
            }
          }
          return M;
        }
        function ic(i) {
          return typeof i == "number" ? i : ie(i) ? it : +i;
        }
        function ne(i) {
          if (typeof i == "string")
            return i;
          if (zt(i))
            return lr(i, ne) + "";
          if (ie(i))
            return Gl ? Gl.call(i) : "";
          var o = i + "";
          return o == "0" && 1 / i == -rt ? "-0" : o;
        }
        function hn(i, o, l) {
          var g = -1, b = wa, M = i.length, A = !0, G = [], N = G;
          if (l)
            A = !1, b = us;
          else if (M >= a) {
            var Z = o ? null : C1(i);
            if (Z)
              return Da(Z);
            A = !1, b = Ai, N = new In();
          } else
            N = o ? [] : G;
          t:
            for (; ++g < M; ) {
              var Q = i[g], et = o ? o(Q) : Q;
              if (Q = l || Q !== 0 ? Q : 0, A && et === et) {
                for (var dt = N.length; dt--; )
                  if (N[dt] === et)
                    continue t;
                o && N.push(et), G.push(Q);
              } else b(N, et, l) || (N !== G && N.push(et), G.push(Q));
            }
          return G;
        }
        function Bs(i, o) {
          return o = gn(o, i), i = Pc(i, o), i == null || delete i[ke(de(o))];
        }
        function ac(i, o, l, g) {
          return Yi(i, o, l(An(i, o)), g);
        }
        function Ua(i, o, l, g) {
          for (var b = i.length, M = g ? b : -1; (g ? M-- : ++M < b) && o(i[M], M, i); )
            ;
          return l ? pe(i, g ? 0 : M, g ? M + 1 : b) : pe(i, g ? M + 1 : 0, g ? b : M);
        }
        function oc(i, o) {
          var l = i;
          return l instanceof Ut && (l = l.value()), fs(o, function(g, b) {
            return b.func.apply(b.thisArg, cn([g], b.args));
          }, l);
        }
        function zs(i, o, l) {
          var g = i.length;
          if (g < 2)
            return g ? hn(i[0]) : [];
          for (var b = -1, M = q(g); ++b < g; )
            for (var A = i[b], G = -1; ++G < g; )
              G != b && (M[b] = Wi(M[b] || A, i[G], o, l));
          return hn(Or(M, 1), o, l);
        }
        function sc(i, o, l) {
          for (var g = -1, b = i.length, M = o.length, A = {}; ++g < b; ) {
            var G = g < M ? o[g] : r;
            l(A, i[g], G);
          }
          return A;
        }
        function Gs(i) {
          return gr(i) ? i : [];
        }
        function ks(i) {
          return typeof i == "function" ? i : Vr;
        }
        function gn(i, o) {
          return zt(i) ? i : Us(i, o) ? [i] : Gc(tr(i));
        }
        var p1 = Ht;
        function mn(i, o, l) {
          var g = i.length;
          return l = l === r ? g : l, !o && l >= g ? i : pe(i, o, l);
        }
        var uc = t0 || function(i) {
          return Tr.clearTimeout(i);
        };
        function fc(i, o) {
          if (o)
            return i.slice();
          var l = i.length, g = Ol ? Ol(l) : new i.constructor(l);
          return i.copy(g), g;
        }
        function Fs(i) {
          var o = new i.constructor(i.byteLength);
          return new Pa(o).set(new Pa(i)), o;
        }
        function d1(i, o) {
          var l = o ? Fs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.byteLength);
        }
        function h1(i) {
          var o = new i.constructor(i.source, Uf.exec(i));
          return o.lastIndex = i.lastIndex, o;
        }
        function g1(i) {
          return Fi ? ir(Fi.call(i)) : {};
        }
        function lc(i, o) {
          var l = o ? Fs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.length);
        }
        function cc(i, o) {
          if (i !== o) {
            var l = i !== r, g = i === null, b = i === i, M = ie(i), A = o !== r, G = o === null, N = o === o, Z = ie(o);
            if (!G && !Z && !M && i > o || M && A && N && !G && !Z || g && A && N || !l && N || !b)
              return 1;
            if (!g && !M && !Z && i < o || Z && l && b && !g && !M || G && l && b || !A && b || !N)
              return -1;
          }
          return 0;
        }
        function m1(i, o, l) {
          for (var g = -1, b = i.criteria, M = o.criteria, A = b.length, G = l.length; ++g < A; ) {
            var N = cc(b[g], M[g]);
            if (N) {
              if (g >= G)
                return N;
              var Z = l[g];
              return N * (Z == "desc" ? -1 : 1);
            }
          }
          return i.index - o.index;
        }
        function vc(i, o, l, g) {
          for (var b = -1, M = i.length, A = l.length, G = -1, N = o.length, Z = Cr(M - A, 0), Q = q(N + Z), et = !g; ++G < N; )
            Q[G] = o[G];
          for (; ++b < A; )
            (et || b < M) && (Q[l[b]] = i[b]);
          for (; Z--; )
            Q[G++] = i[b++];
          return Q;
        }
        function pc(i, o, l, g) {
          for (var b = -1, M = i.length, A = -1, G = l.length, N = -1, Z = o.length, Q = Cr(M - G, 0), et = q(Q + Z), dt = !g; ++b < Q; )
            et[b] = i[b];
          for (var yt = b; ++N < Z; )
            et[yt + N] = o[N];
          for (; ++A < G; )
            (dt || b < M) && (et[yt + l[A]] = i[b++]);
          return et;
        }
        function qr(i, o) {
          var l = -1, g = i.length;
          for (o || (o = q(g)); ++l < g; )
            o[l] = i[l];
          return o;
        }
        function Ge(i, o, l, g) {
          var b = !l;
          l || (l = {});
          for (var M = -1, A = o.length; ++M < A; ) {
            var G = o[M], N = g ? g(l[G], i[G], G, l, i) : r;
            N === r && (N = i[G]), b ? Xe(l, G, N) : Li(l, G, N);
          }
          return l;
        }
        function _1(i, o) {
          return Ge(i, qs(i), o);
        }
        function x1(i, o) {
          return Ge(i, Dc(i), o);
        }
        function $a(i, o) {
          return function(l, g) {
            var b = zt(l) ? wg : N0, M = o ? o() : {};
            return b(l, i, Mt(g, 2), M);
          };
        }
        function si(i) {
          return Ht(function(o, l) {
            var g = -1, b = l.length, M = b > 1 ? l[b - 1] : r, A = b > 2 ? l[2] : r;
            for (M = i.length > 3 && typeof M == "function" ? (b--, M) : r, A && Fr(l[0], l[1], A) && (M = b < 3 ? r : M, b = 1), o = ir(o); ++g < b; ) {
              var G = l[g];
              G && i(o, G, g, M);
            }
            return o;
          });
        }
        function dc(i, o) {
          return function(l, g) {
            if (l == null)
              return l;
            if (!Ur(l))
              return i(l, g);
            for (var b = l.length, M = o ? b : -1, A = ir(l); (o ? M-- : ++M < b) && g(A[M], M, A) !== !1; )
              ;
            return l;
          };
        }
        function hc(i) {
          return function(o, l, g) {
            for (var b = -1, M = ir(o), A = g(o), G = A.length; G--; ) {
              var N = A[i ? G : ++b];
              if (l(M[N], N, M) === !1)
                break;
            }
            return o;
          };
        }
        function y1(i, o, l) {
          var g = o & y, b = Xi(i);
          function M() {
            var A = this && this !== Tr && this instanceof M ? b : i;
            return A.apply(g ? l : this, arguments);
          }
          return M;
        }
        function gc(i) {
          return function(o) {
            o = tr(o);
            var l = ti(o) ? Se(o) : r, g = l ? l[0] : o.charAt(0), b = l ? mn(l, 1).join("") : o.slice(1);
            return g[i]() + b;
          };
        }
        function ui(i) {
          return function(o) {
            return fs(dv(pv(o).replace(lg, "")), i, "");
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
            var l = oi(i.prototype), g = i.apply(l, o);
            return vr(g) ? g : l;
          };
        }
        function b1(i, o, l) {
          var g = Xi(i);
          function b() {
            for (var M = arguments.length, A = q(M), G = M, N = fi(b); G--; )
              A[G] = arguments[G];
            var Z = M < 3 && A[0] !== N && A[M - 1] !== N ? [] : vn(A, N);
            if (M -= Z.length, M < l)
              return bc(
                i,
                o,
                Va,
                b.placeholder,
                r,
                A,
                Z,
                r,
                r,
                l - M
              );
            var Q = this && this !== Tr && this instanceof b ? g : i;
            return re(Q, this, A);
          }
          return b;
        }
        function mc(i) {
          return function(o, l, g) {
            var b = ir(o);
            if (!Ur(o)) {
              var M = Mt(l, 3);
              o = Mr(o), l = function(G) {
                return M(b[G], G, b);
              };
            }
            var A = i(o, l, g);
            return A > -1 ? b[M ? o[A] : A] : r;
          };
        }
        function _c(i) {
          return Ue(function(o) {
            var l = o.length, g = l, b = ce.prototype.thru;
            for (i && o.reverse(); g--; ) {
              var M = o[g];
              if (typeof M != "function")
                throw new le(u);
              if (b && !A && Qa(M) == "wrapper")
                var A = new ce([], !0);
            }
            for (g = A ? g : l; ++g < l; ) {
              M = o[g];
              var G = Qa(M), N = G == "wrapper" ? Ys(M) : r;
              N && $s(N[0]) && N[1] == (D | R | I | T) && !N[4].length && N[9] == 1 ? A = A[Qa(N[0])].apply(A, N[3]) : A = M.length == 1 && $s(M) ? A[G]() : A.thru(M);
            }
            return function() {
              var Z = arguments, Q = Z[0];
              if (A && Z.length == 1 && zt(Q))
                return A.plant(Q).value();
              for (var et = 0, dt = l ? o[et].apply(this, Z) : Q; ++et < l; )
                dt = o[et].call(this, dt);
              return dt;
            };
          });
        }
        function Va(i, o, l, g, b, M, A, G, N, Z) {
          var Q = o & D, et = o & y, dt = o & S, yt = o & (R | O), Rt = o & P, Nt = dt ? r : Xi(i);
          function Tt() {
            for (var qt = arguments.length, $t = q(qt), ae = qt; ae--; )
              $t[ae] = arguments[ae];
            if (yt)
              var Lr = fi(Tt), oe = Ag($t, Lr);
            if (g && ($t = vc($t, g, b, yt)), M && ($t = pc($t, M, A, yt)), qt -= oe, yt && qt < Z) {
              var mr = vn($t, Lr);
              return bc(
                i,
                o,
                Va,
                Tt.placeholder,
                l,
                $t,
                mr,
                G,
                N,
                Z - qt
              );
            }
            var Ee = et ? l : this, Ze = dt ? Ee[i] : i;
            return qt = $t.length, G ? $t = N1($t, G) : Rt && qt > 1 && $t.reverse(), Q && N < qt && ($t.length = N), this && this !== Tr && this instanceof Tt && (Ze = Nt || Xi(Ze)), Ze.apply(Ee, $t);
          }
          return Tt;
        }
        function xc(i, o) {
          return function(l, g) {
            return K0(l, i, o(g), {});
          };
        }
        function Ka(i, o) {
          return function(l, g) {
            var b;
            if (l === r && g === r)
              return o;
            if (l !== r && (b = l), g !== r) {
              if (b === r)
                return g;
              typeof l == "string" || typeof g == "string" ? (l = ne(l), g = ne(g)) : (l = ic(l), g = ic(g)), b = i(l, g);
            }
            return b;
          };
        }
        function Ls(i) {
          return Ue(function(o) {
            return o = lr(o, ee(Mt())), Ht(function(l) {
              var g = this;
              return i(o, function(b) {
                return re(b, g, l);
              });
            });
          });
        }
        function Za(i, o) {
          o = o === r ? " " : ne(o);
          var l = o.length;
          if (l < 2)
            return l ? Ps(o, i) : o;
          var g = Ps(o, Ga(i / ri(o)));
          return ti(o) ? mn(Se(g), 0, i).join("") : g.slice(0, i);
        }
        function S1(i, o, l, g) {
          var b = o & y, M = Xi(i);
          function A() {
            for (var G = -1, N = arguments.length, Z = -1, Q = g.length, et = q(Q + N), dt = this && this !== Tr && this instanceof A ? M : i; ++Z < Q; )
              et[Z] = g[Z];
            for (; N--; )
              et[Z++] = arguments[++G];
            return re(dt, b ? l : this, et);
          }
          return A;
        }
        function yc(i) {
          return function(o, l, g) {
            return g && typeof g != "number" && Fr(o, l, g) && (l = g = r), o = Ke(o), l === r ? (l = o, o = 0) : l = Ke(l), g = g === r ? o < l ? 1 : -1 : Ke(g), s1(o, l, g, i);
          };
        }
        function Ja(i) {
          return function(o, l) {
            return typeof o == "string" && typeof l == "string" || (o = he(o), l = he(l)), i(o, l);
          };
        }
        function bc(i, o, l, g, b, M, A, G, N, Z) {
          var Q = o & R, et = Q ? A : r, dt = Q ? r : A, yt = Q ? M : r, Rt = Q ? r : M;
          o |= Q ? I : E, o &= ~(Q ? E : I), o & w || (o &= -4);
          var Nt = [
            i,
            o,
            b,
            yt,
            et,
            Rt,
            dt,
            G,
            N,
            Z
          ], Tt = l.apply(r, Nt);
          return $s(i) && Ac(Tt, Nt), Tt.placeholder = g, Bc(Tt, i, o);
        }
        function Ws(i) {
          var o = Sr[i];
          return function(l, g) {
            if (l = he(l), g = g == null ? 0 : Ar(Lt(g), 292), g && Bl(l)) {
              var b = (tr(l) + "e").split("e"), M = o(b[0] + "e" + (+b[1] + g));
              return b = (tr(M) + "e").split("e"), +(b[0] + "e" + (+b[1] - g));
            }
            return o(l);
          };
        }
        var C1 = ii && 1 / Da(new ii([, -0]))[1] == rt ? function(i) {
          return new ii(i);
        } : uu;
        function Sc(i) {
          return function(o) {
            var l = Br(o);
            return l == St ? gs(o) : l == Jt ? Wg(o) : Pg(o, i(o));
          };
        }
        function qe(i, o, l, g, b, M, A, G) {
          var N = o & S;
          if (!N && typeof i != "function")
            throw new le(u);
          var Z = g ? g.length : 0;
          if (Z || (o &= -97, g = b = r), A = A === r ? A : Cr(Lt(A), 0), G = G === r ? G : Lt(G), Z -= b ? b.length : 0, o & E) {
            var Q = g, et = b;
            g = b = r;
          }
          var dt = N ? r : Ys(i), yt = [
            i,
            o,
            l,
            g,
            b,
            Q,
            et,
            M,
            A,
            G
          ];
          if (dt && F1(yt, dt), i = yt[0], o = yt[1], l = yt[2], g = yt[3], b = yt[4], G = yt[9] = yt[9] === r ? N ? 0 : i.length : Cr(yt[9] - Z, 0), !G && o & (R | O) && (o &= -25), !o || o == y)
            var Rt = y1(i, o, l);
          else o == R || o == O ? Rt = b1(i, o, G) : (o == I || o == (y | I)) && !b.length ? Rt = S1(i, o, l, g) : Rt = Va.apply(r, yt);
          var Nt = dt ? ec : Ac;
          return Bc(Nt(Rt, yt), i, o);
        }
        function Cc(i, o, l, g) {
          return i === r || we(i, ni[l]) && !rr.call(g, l) ? o : i;
        }
        function wc(i, o, l, g, b, M) {
          return vr(i) && vr(o) && (M.set(o, i), Xa(i, o, r, wc, M), M.delete(o)), i;
        }
        function w1(i) {
          return $i(i) ? r : i;
        }
        function Ec(i, o, l, g, b, M) {
          var A = l & _, G = i.length, N = o.length;
          if (G != N && !(A && N > G))
            return !1;
          var Z = M.get(i), Q = M.get(o);
          if (Z && Q)
            return Z == o && Q == i;
          var et = -1, dt = !0, yt = l & x ? new In() : r;
          for (M.set(i, o), M.set(o, i); ++et < G; ) {
            var Rt = i[et], Nt = o[et];
            if (g)
              var Tt = A ? g(Nt, Rt, et, o, i, M) : g(Rt, Nt, et, i, o, M);
            if (Tt !== r) {
              if (Tt)
                continue;
              dt = !1;
              break;
            }
            if (yt) {
              if (!ls(o, function(qt, $t) {
                if (!Ai(yt, $t) && (Rt === qt || b(Rt, qt, l, g, M)))
                  return yt.push($t);
              })) {
                dt = !1;
                break;
              }
            } else if (!(Rt === Nt || b(Rt, Nt, l, g, M))) {
              dt = !1;
              break;
            }
          }
          return M.delete(i), M.delete(o), dt;
        }
        function E1(i, o, l, g, b, M, A) {
          switch (l) {
            case ye:
              if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
                return !1;
              i = i.buffer, o = o.buffer;
            case Pr:
              return !(i.byteLength != o.byteLength || !M(new Pa(i), new Pa(o)));
            case xt:
            case Ot:
            case Dt:
              return we(+i, +o);
            case nt:
              return i.name == o.name && i.message == o.message;
            case kt:
            case ur:
              return i == o + "";
            case St:
              var G = gs;
            case Jt:
              var N = g & _;
              if (G || (G = Da), i.size != o.size && !N)
                return !1;
              var Z = A.get(i);
              if (Z)
                return Z == o;
              g |= x, A.set(i, o);
              var Q = Ec(G(i), G(o), g, b, M, A);
              return A.delete(i), Q;
            case cr:
              if (Fi)
                return Fi.call(i) == Fi.call(o);
          }
          return !1;
        }
        function D1(i, o, l, g, b, M) {
          var A = l & _, G = Ns(i), N = G.length, Z = Ns(o), Q = Z.length;
          if (N != Q && !A)
            return !1;
          for (var et = N; et--; ) {
            var dt = G[et];
            if (!(A ? dt in o : rr.call(o, dt)))
              return !1;
          }
          var yt = M.get(i), Rt = M.get(o);
          if (yt && Rt)
            return yt == o && Rt == i;
          var Nt = !0;
          M.set(i, o), M.set(o, i);
          for (var Tt = A; ++et < N; ) {
            dt = G[et];
            var qt = i[dt], $t = o[dt];
            if (g)
              var ae = A ? g($t, qt, dt, o, i, M) : g(qt, $t, dt, i, o, M);
            if (!(ae === r ? qt === $t || b(qt, $t, l, g, M) : ae)) {
              Nt = !1;
              break;
            }
            Tt || (Tt = dt == "constructor");
          }
          if (Nt && !Tt) {
            var Lr = i.constructor, oe = o.constructor;
            Lr != oe && "constructor" in i && "constructor" in o && !(typeof Lr == "function" && Lr instanceof Lr && typeof oe == "function" && oe instanceof oe) && (Nt = !1);
          }
          return M.delete(i), M.delete(o), Nt;
        }
        function Ue(i) {
          return Ks(Ic(i, r, Wc), i + "");
        }
        function Ns(i) {
          return ql(i, Mr, qs);
        }
        function Hs(i) {
          return ql(i, $r, Dc);
        }
        var Ys = Fa ? function(i) {
          return Fa.get(i);
        } : uu;
        function Qa(i) {
          for (var o = i.name + "", l = ai[o], g = rr.call(ai, o) ? l.length : 0; g--; ) {
            var b = l[g], M = b.func;
            if (M == null || M == i)
              return b.name;
          }
          return o;
        }
        function fi(i) {
          var o = rr.call(C, "placeholder") ? C : i;
          return o.placeholder;
        }
        function Mt() {
          var i = C.iteratee || ou;
          return i = i === ou ? Vl : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function ja(i, o) {
          var l = i.__data__;
          return B1(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
        }
        function Xs(i) {
          for (var o = Mr(i), l = o.length; l--; ) {
            var g = o[l], b = i[g];
            o[l] = [g, b, Tc(b)];
          }
          return o;
        }
        function Bn(i, o) {
          var l = kg(i, o);
          return $l(l) ? l : r;
        }
        function M1(i) {
          var o = rr.call(i, Tn), l = i[Tn];
          try {
            i[Tn] = r;
            var g = !0;
          } catch {
          }
          var b = Oa.call(i);
          return g && (o ? i[Tn] = l : delete i[Tn]), b;
        }
        var qs = _s ? function(i) {
          return i == null ? [] : (i = ir(i), ln(_s(i), function(o) {
            return Pl.call(i, o);
          }));
        } : fu, Dc = _s ? function(i) {
          for (var o = []; i; )
            cn(o, qs(i)), i = Aa(i);
          return o;
        } : fu, Br = kr;
        (xs && Br(new xs(new ArrayBuffer(1))) != ye || zi && Br(new zi()) != St || ys && Br(ys.resolve()) != Zt || ii && Br(new ii()) != Jt || Gi && Br(new Gi()) != Qt) && (Br = function(i) {
          var o = kr(i), l = o == Wt ? i.constructor : r, g = l ? zn(l) : "";
          if (g)
            switch (g) {
              case f0:
                return ye;
              case l0:
                return St;
              case c0:
                return Zt;
              case v0:
                return Jt;
              case p0:
                return Qt;
            }
          return o;
        });
        function R1(i, o, l) {
          for (var g = -1, b = l.length; ++g < b; ) {
            var M = l[g], A = M.size;
            switch (M.type) {
              case "drop":
                i += A;
                break;
              case "dropRight":
                o -= A;
                break;
              case "take":
                o = Ar(o, i + A);
                break;
              case "takeRight":
                i = Cr(i, o - A);
                break;
            }
          }
          return { start: i, end: o };
        }
        function T1(i) {
          var o = i.match(zh);
          return o ? o[1].split(Gh) : [];
        }
        function Mc(i, o, l) {
          o = gn(o, i);
          for (var g = -1, b = o.length, M = !1; ++g < b; ) {
            var A = ke(o[g]);
            if (!(M = i != null && l(i, A)))
              break;
            i = i[A];
          }
          return M || ++g != b ? M : (b = i == null ? 0 : i.length, !!b && oo(b) && $e(A, b) && (zt(i) || Gn(i)));
        }
        function O1(i) {
          var o = i.length, l = new i.constructor(o);
          return o && typeof i[0] == "string" && rr.call(i, "index") && (l.index = i.index, l.input = i.input), l;
        }
        function Rc(i) {
          return typeof i.constructor == "function" && !qi(i) ? oi(Aa(i)) : {};
        }
        function I1(i, o, l) {
          var g = i.constructor;
          switch (o) {
            case Pr:
              return Fs(i);
            case xt:
            case Ot:
              return new g(+i);
            case ye:
              return d1(i, l);
            case en:
            case nn:
            case be:
            case Be:
            case an:
            case on:
            case J:
            case U:
            case gt:
              return lc(i, l);
            case St:
              return new g();
            case Dt:
            case ur:
              return new g(i);
            case kt:
              return h1(i);
            case Jt:
              return new g();
            case cr:
              return g1(i);
          }
        }
        function P1(i, o) {
          var l = o.length;
          if (!l)
            return i;
          var g = l - 1;
          return o[g] = (l > 1 ? "& " : "") + o[g], o = o.join(l > 2 ? ", " : " "), i.replace(Bh, `{
/* [wrapped with ` + o + `] */
`);
        }
        function A1(i) {
          return zt(i) || Gn(i) || !!(Al && i && i[Al]);
        }
        function $e(i, o) {
          var l = typeof i;
          return o = o ?? K, !!o && (l == "number" || l != "symbol" && qh.test(i)) && i > -1 && i % 1 == 0 && i < o;
        }
        function Fr(i, o, l) {
          if (!vr(l))
            return !1;
          var g = typeof o;
          return (g == "number" ? Ur(l) && $e(o, l.length) : g == "string" && o in l) ? we(l[o], i) : !1;
        }
        function Us(i, o) {
          if (zt(i))
            return !1;
          var l = typeof i;
          return l == "number" || l == "symbol" || l == "boolean" || i == null || ie(i) ? !0 : Oh.test(i) || !Th.test(i) || o != null && i in ir(o);
        }
        function B1(i) {
          var o = typeof i;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
        }
        function $s(i) {
          var o = Qa(i), l = C[o];
          if (typeof l != "function" || !(o in Ut.prototype))
            return !1;
          if (i === l)
            return !0;
          var g = Ys(l);
          return !!g && i === g[0];
        }
        function z1(i) {
          return !!Tl && Tl in i;
        }
        var G1 = Ra ? Ve : lu;
        function qi(i) {
          var o = i && i.constructor, l = typeof o == "function" && o.prototype || ni;
          return i === l;
        }
        function Tc(i) {
          return i === i && !vr(i);
        }
        function Oc(i, o) {
          return function(l) {
            return l == null ? !1 : l[i] === o && (o !== r || i in ir(l));
          };
        }
        function k1(i) {
          var o = io(i, function(g) {
            return l.size === v && l.clear(), g;
          }), l = o.cache;
          return o;
        }
        function F1(i, o) {
          var l = i[1], g = o[1], b = l | g, M = b < (y | S | D), A = g == D && l == R || g == D && l == T && i[7].length <= o[8] || g == (D | T) && o[7].length <= o[8] && l == R;
          if (!(M || A))
            return i;
          g & y && (i[2] = o[2], b |= l & y ? 0 : w);
          var G = o[3];
          if (G) {
            var N = i[3];
            i[3] = N ? vc(N, G, o[4]) : G, i[4] = N ? vn(i[3], p) : o[4];
          }
          return G = o[5], G && (N = i[5], i[5] = N ? pc(N, G, o[6]) : G, i[6] = N ? vn(i[5], p) : o[6]), G = o[7], G && (i[7] = G), g & D && (i[8] = i[8] == null ? o[8] : Ar(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = b, i;
        }
        function L1(i) {
          var o = [];
          if (i != null)
            for (var l in ir(i))
              o.push(l);
          return o;
        }
        function W1(i) {
          return Oa.call(i);
        }
        function Ic(i, o, l) {
          return o = Cr(o === r ? i.length - 1 : o, 0), function() {
            for (var g = arguments, b = -1, M = Cr(g.length - o, 0), A = q(M); ++b < M; )
              A[b] = g[o + b];
            b = -1;
            for (var G = q(o + 1); ++b < o; )
              G[b] = g[b];
            return G[o] = l(A), re(i, this, G);
          };
        }
        function Pc(i, o) {
          return o.length < 2 ? i : An(i, pe(o, 0, -1));
        }
        function N1(i, o) {
          for (var l = i.length, g = Ar(o.length, l), b = qr(i); g--; ) {
            var M = o[g];
            i[g] = $e(M, l) ? b[M] : r;
          }
          return i;
        }
        function Vs(i, o) {
          if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
            return i[o];
        }
        var Ac = zc(ec), Ui = e0 || function(i, o) {
          return Tr.setTimeout(i, o);
        }, Ks = zc(l1);
        function Bc(i, o, l) {
          var g = o + "";
          return Ks(i, P1(g, H1(T1(g), l)));
        }
        function zc(i) {
          var o = 0, l = 0;
          return function() {
            var g = o0(), b = F - (g - l);
            if (l = g, b > 0) {
              if (++o >= W)
                return arguments[0];
            } else
              o = 0;
            return i.apply(r, arguments);
          };
        }
        function to(i, o) {
          var l = -1, g = i.length, b = g - 1;
          for (o = o === r ? g : o; ++l < o; ) {
            var M = Is(l, b), A = i[M];
            i[M] = i[l], i[l] = A;
          }
          return i.length = o, i;
        }
        var Gc = k1(function(i) {
          var o = [];
          return i.charCodeAt(0) === 46 && o.push(""), i.replace(Ih, function(l, g, b, M) {
            o.push(b ? M.replace(Lh, "$1") : g || l);
          }), o;
        });
        function ke(i) {
          if (typeof i == "string" || ie(i))
            return i;
          var o = i + "";
          return o == "0" && 1 / i == -rt ? "-0" : o;
        }
        function zn(i) {
          if (i != null) {
            try {
              return Ta.call(i);
            } catch {
            }
            try {
              return i + "";
            } catch {
            }
          }
          return "";
        }
        function H1(i, o) {
          return fe(ut, function(l) {
            var g = "_." + l[0];
            o & l[1] && !wa(i, g) && i.push(g);
          }), i.sort();
        }
        function kc(i) {
          if (i instanceof Ut)
            return i.clone();
          var o = new ce(i.__wrapped__, i.__chain__);
          return o.__actions__ = qr(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
        }
        function Y1(i, o, l) {
          (l ? Fr(i, o, l) : o === r) ? o = 1 : o = Cr(Lt(o), 0);
          var g = i == null ? 0 : i.length;
          if (!g || o < 1)
            return [];
          for (var b = 0, M = 0, A = q(Ga(g / o)); b < g; )
            A[M++] = pe(i, b, b += o);
          return A;
        }
        function X1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = 0, b = []; ++o < l; ) {
            var M = i[o];
            M && (b[g++] = M);
          }
          return b;
        }
        function q1() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var o = q(i - 1), l = arguments[0], g = i; g--; )
            o[g - 1] = arguments[g];
          return cn(zt(l) ? qr(l) : [l], Or(o, 1));
        }
        var U1 = Ht(function(i, o) {
          return gr(i) ? Wi(i, Or(o, 1, gr, !0)) : [];
        }), $1 = Ht(function(i, o) {
          var l = de(o);
          return gr(l) && (l = r), gr(i) ? Wi(i, Or(o, 1, gr, !0), Mt(l, 2)) : [];
        }), V1 = Ht(function(i, o) {
          var l = de(o);
          return gr(l) && (l = r), gr(i) ? Wi(i, Or(o, 1, gr, !0), r, l) : [];
        });
        function K1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Lt(o), pe(i, o < 0 ? 0 : o, g)) : [];
        }
        function Z1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Lt(o), o = g - o, pe(i, 0, o < 0 ? 0 : o)) : [];
        }
        function J1(i, o) {
          return i && i.length ? Ua(i, Mt(o, 3), !0, !0) : [];
        }
        function Q1(i, o) {
          return i && i.length ? Ua(i, Mt(o, 3), !0) : [];
        }
        function j1(i, o, l, g) {
          var b = i == null ? 0 : i.length;
          return b ? (l && typeof l != "number" && Fr(i, o, l) && (l = 0, g = b), q0(i, o, l, g)) : [];
        }
        function Fc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = l == null ? 0 : Lt(l);
          return b < 0 && (b = Cr(g + b, 0)), Ea(i, Mt(o, 3), b);
        }
        function Lc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = g - 1;
          return l !== r && (b = Lt(l), b = l < 0 ? Cr(g + b, 0) : Ar(b, g - 1)), Ea(i, Mt(o, 3), b, !0);
        }
        function Wc(i) {
          var o = i == null ? 0 : i.length;
          return o ? Or(i, 1) : [];
        }
        function tm(i) {
          var o = i == null ? 0 : i.length;
          return o ? Or(i, rt) : [];
        }
        function rm(i, o) {
          var l = i == null ? 0 : i.length;
          return l ? (o = o === r ? 1 : Lt(o), Or(i, o)) : [];
        }
        function em(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = {}; ++o < l; ) {
            var b = i[o];
            g[b[0]] = b[1];
          }
          return g;
        }
        function Nc(i) {
          return i && i.length ? i[0] : r;
        }
        function nm(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = l == null ? 0 : Lt(l);
          return b < 0 && (b = Cr(g + b, 0)), jn(i, o, b);
        }
        function im(i) {
          var o = i == null ? 0 : i.length;
          return o ? pe(i, 0, -1) : [];
        }
        var am = Ht(function(i) {
          var o = lr(i, Gs);
          return o.length && o[0] === i[0] ? Ds(o) : [];
        }), om = Ht(function(i) {
          var o = de(i), l = lr(i, Gs);
          return o === de(l) ? o = r : l.pop(), l.length && l[0] === i[0] ? Ds(l, Mt(o, 2)) : [];
        }), sm = Ht(function(i) {
          var o = de(i), l = lr(i, Gs);
          return o = typeof o == "function" ? o : r, o && l.pop(), l.length && l[0] === i[0] ? Ds(l, r, o) : [];
        });
        function um(i, o) {
          return i == null ? "" : i0.call(i, o);
        }
        function de(i) {
          var o = i == null ? 0 : i.length;
          return o ? i[o - 1] : r;
        }
        function fm(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var b = g;
          return l !== r && (b = Lt(l), b = b < 0 ? Cr(g + b, 0) : Ar(b, g - 1)), o === o ? Hg(i, o, b) : Ea(i, bl, b, !0);
        }
        function lm(i, o) {
          return i && i.length ? Ql(i, Lt(o)) : r;
        }
        var cm = Ht(Hc);
        function Hc(i, o) {
          return i && i.length && o && o.length ? Os(i, o) : i;
        }
        function vm(i, o, l) {
          return i && i.length && o && o.length ? Os(i, o, Mt(l, 2)) : i;
        }
        function pm(i, o, l) {
          return i && i.length && o && o.length ? Os(i, o, r, l) : i;
        }
        var dm = Ue(function(i, o) {
          var l = i == null ? 0 : i.length, g = Ss(i, o);
          return rc(i, lr(o, function(b) {
            return $e(b, l) ? +b : b;
          }).sort(cc)), g;
        });
        function hm(i, o) {
          var l = [];
          if (!(i && i.length))
            return l;
          var g = -1, b = [], M = i.length;
          for (o = Mt(o, 3); ++g < M; ) {
            var A = i[g];
            o(A, g, i) && (l.push(A), b.push(g));
          }
          return rc(i, b), l;
        }
        function Zs(i) {
          return i == null ? i : u0.call(i);
        }
        function gm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (l && typeof l != "number" && Fr(i, o, l) ? (o = 0, l = g) : (o = o == null ? 0 : Lt(o), l = l === r ? g : Lt(l)), pe(i, o, l)) : [];
        }
        function mm(i, o) {
          return qa(i, o);
        }
        function _m(i, o, l) {
          return As(i, o, Mt(l, 2));
        }
        function xm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = qa(i, o);
            if (g < l && we(i[g], o))
              return g;
          }
          return -1;
        }
        function ym(i, o) {
          return qa(i, o, !0);
        }
        function bm(i, o, l) {
          return As(i, o, Mt(l, 2), !0);
        }
        function Sm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = qa(i, o, !0) - 1;
            if (we(i[g], o))
              return g;
          }
          return -1;
        }
        function Cm(i) {
          return i && i.length ? nc(i) : [];
        }
        function wm(i, o) {
          return i && i.length ? nc(i, Mt(o, 2)) : [];
        }
        function Em(i) {
          var o = i == null ? 0 : i.length;
          return o ? pe(i, 1, o) : [];
        }
        function Dm(i, o, l) {
          return i && i.length ? (o = l || o === r ? 1 : Lt(o), pe(i, 0, o < 0 ? 0 : o)) : [];
        }
        function Mm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Lt(o), o = g - o, pe(i, o < 0 ? 0 : o, g)) : [];
        }
        function Rm(i, o) {
          return i && i.length ? Ua(i, Mt(o, 3), !1, !0) : [];
        }
        function Tm(i, o) {
          return i && i.length ? Ua(i, Mt(o, 3)) : [];
        }
        var Om = Ht(function(i) {
          return hn(Or(i, 1, gr, !0));
        }), Im = Ht(function(i) {
          var o = de(i);
          return gr(o) && (o = r), hn(Or(i, 1, gr, !0), Mt(o, 2));
        }), Pm = Ht(function(i) {
          var o = de(i);
          return o = typeof o == "function" ? o : r, hn(Or(i, 1, gr, !0), r, o);
        });
        function Am(i) {
          return i && i.length ? hn(i) : [];
        }
        function Bm(i, o) {
          return i && i.length ? hn(i, Mt(o, 2)) : [];
        }
        function zm(i, o) {
          return o = typeof o == "function" ? o : r, i && i.length ? hn(i, r, o) : [];
        }
        function Js(i) {
          if (!(i && i.length))
            return [];
          var o = 0;
          return i = ln(i, function(l) {
            if (gr(l))
              return o = Cr(l.length, o), !0;
          }), ds(o, function(l) {
            return lr(i, cs(l));
          });
        }
        function Yc(i, o) {
          if (!(i && i.length))
            return [];
          var l = Js(i);
          return o == null ? l : lr(l, function(g) {
            return re(o, r, g);
          });
        }
        var Gm = Ht(function(i, o) {
          return gr(i) ? Wi(i, o) : [];
        }), km = Ht(function(i) {
          return zs(ln(i, gr));
        }), Fm = Ht(function(i) {
          var o = de(i);
          return gr(o) && (o = r), zs(ln(i, gr), Mt(o, 2));
        }), Lm = Ht(function(i) {
          var o = de(i);
          return o = typeof o == "function" ? o : r, zs(ln(i, gr), r, o);
        }), Wm = Ht(Js);
        function Nm(i, o) {
          return sc(i || [], o || [], Li);
        }
        function Hm(i, o) {
          return sc(i || [], o || [], Yi);
        }
        var Ym = Ht(function(i) {
          var o = i.length, l = o > 1 ? i[o - 1] : r;
          return l = typeof l == "function" ? (i.pop(), l) : r, Yc(i, l);
        });
        function Xc(i) {
          var o = C(i);
          return o.__chain__ = !0, o;
        }
        function Xm(i, o) {
          return o(i), i;
        }
        function ro(i, o) {
          return o(i);
        }
        var qm = Ue(function(i) {
          var o = i.length, l = o ? i[0] : 0, g = this.__wrapped__, b = function(M) {
            return Ss(M, i);
          };
          return o > 1 || this.__actions__.length || !(g instanceof Ut) || !$e(l) ? this.thru(b) : (g = g.slice(l, +l + (o ? 1 : 0)), g.__actions__.push({
            func: ro,
            args: [b],
            thisArg: r
          }), new ce(g, this.__chain__).thru(function(M) {
            return o && !M.length && M.push(r), M;
          }));
        });
        function Um() {
          return Xc(this);
        }
        function $m() {
          return new ce(this.value(), this.__chain__);
        }
        function Vm() {
          this.__values__ === r && (this.__values__ = iv(this.value()));
          var i = this.__index__ >= this.__values__.length, o = i ? r : this.__values__[this.__index__++];
          return { done: i, value: o };
        }
        function Km() {
          return this;
        }
        function Zm(i) {
          for (var o, l = this; l instanceof Wa; ) {
            var g = kc(l);
            g.__index__ = 0, g.__values__ = r, o ? b.__wrapped__ = g : o = g;
            var b = g;
            l = l.__wrapped__;
          }
          return b.__wrapped__ = i, o;
        }
        function Jm() {
          var i = this.__wrapped__;
          if (i instanceof Ut) {
            var o = i;
            return this.__actions__.length && (o = new Ut(this)), o = o.reverse(), o.__actions__.push({
              func: ro,
              args: [Zs],
              thisArg: r
            }), new ce(o, this.__chain__);
          }
          return this.thru(Zs);
        }
        function Qm() {
          return oc(this.__wrapped__, this.__actions__);
        }
        var jm = $a(function(i, o, l) {
          rr.call(i, l) ? ++i[l] : Xe(i, l, 1);
        });
        function t_(i, o, l) {
          var g = zt(i) ? xl : X0;
          return l && Fr(i, o, l) && (o = r), g(i, Mt(o, 3));
        }
        function r_(i, o) {
          var l = zt(i) ? ln : Yl;
          return l(i, Mt(o, 3));
        }
        var e_ = mc(Fc), n_ = mc(Lc);
        function i_(i, o) {
          return Or(eo(i, o), 1);
        }
        function a_(i, o) {
          return Or(eo(i, o), rt);
        }
        function o_(i, o, l) {
          return l = l === r ? 1 : Lt(l), Or(eo(i, o), l);
        }
        function qc(i, o) {
          var l = zt(i) ? fe : dn;
          return l(i, Mt(o, 3));
        }
        function Uc(i, o) {
          var l = zt(i) ? Eg : Hl;
          return l(i, Mt(o, 3));
        }
        var s_ = $a(function(i, o, l) {
          rr.call(i, l) ? i[l].push(o) : Xe(i, l, [o]);
        });
        function u_(i, o, l, g) {
          i = Ur(i) ? i : ci(i), l = l && !g ? Lt(l) : 0;
          var b = i.length;
          return l < 0 && (l = Cr(b + l, 0)), so(i) ? l <= b && i.indexOf(o, l) > -1 : !!b && jn(i, o, l) > -1;
        }
        var f_ = Ht(function(i, o, l) {
          var g = -1, b = typeof o == "function", M = Ur(i) ? q(i.length) : [];
          return dn(i, function(A) {
            M[++g] = b ? re(o, A, l) : Ni(A, o, l);
          }), M;
        }), l_ = $a(function(i, o, l) {
          Xe(i, l, o);
        });
        function eo(i, o) {
          var l = zt(i) ? lr : Kl;
          return l(i, Mt(o, 3));
        }
        function c_(i, o, l, g) {
          return i == null ? [] : (zt(o) || (o = o == null ? [] : [o]), l = g ? r : l, zt(l) || (l = l == null ? [] : [l]), jl(i, o, l));
        }
        var v_ = $a(function(i, o, l) {
          i[l ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function p_(i, o, l) {
          var g = zt(i) ? fs : Cl, b = arguments.length < 3;
          return g(i, Mt(o, 4), l, b, dn);
        }
        function d_(i, o, l) {
          var g = zt(i) ? Dg : Cl, b = arguments.length < 3;
          return g(i, Mt(o, 4), l, b, Hl);
        }
        function h_(i, o) {
          var l = zt(i) ? ln : Yl;
          return l(i, ao(Mt(o, 3)));
        }
        function g_(i) {
          var o = zt(i) ? Fl : u1;
          return o(i);
        }
        function m_(i, o, l) {
          (l ? Fr(i, o, l) : o === r) ? o = 1 : o = Lt(o);
          var g = zt(i) ? L0 : f1;
          return g(i, o);
        }
        function __(i) {
          var o = zt(i) ? W0 : c1;
          return o(i);
        }
        function x_(i) {
          if (i == null)
            return 0;
          if (Ur(i))
            return so(i) ? ri(i) : i.length;
          var o = Br(i);
          return o == St || o == Jt ? i.size : Rs(i).length;
        }
        function y_(i, o, l) {
          var g = zt(i) ? ls : v1;
          return l && Fr(i, o, l) && (o = r), g(i, Mt(o, 3));
        }
        var b_ = Ht(function(i, o) {
          if (i == null)
            return [];
          var l = o.length;
          return l > 1 && Fr(i, o[0], o[1]) ? o = [] : l > 2 && Fr(o[0], o[1], o[2]) && (o = [o[0]]), jl(i, Or(o, 1), []);
        }), no = r0 || function() {
          return Tr.Date.now();
        };
        function S_(i, o) {
          if (typeof o != "function")
            throw new le(u);
          return i = Lt(i), function() {
            if (--i < 1)
              return o.apply(this, arguments);
          };
        }
        function $c(i, o, l) {
          return o = l ? r : o, o = i && o == null ? i.length : o, qe(i, D, r, r, r, r, o);
        }
        function Vc(i, o) {
          var l;
          if (typeof o != "function")
            throw new le(u);
          return i = Lt(i), function() {
            return --i > 0 && (l = o.apply(this, arguments)), i <= 1 && (o = r), l;
          };
        }
        var Qs = Ht(function(i, o, l) {
          var g = y;
          if (l.length) {
            var b = vn(l, fi(Qs));
            g |= I;
          }
          return qe(i, g, o, l, b);
        }), Kc = Ht(function(i, o, l) {
          var g = y | S;
          if (l.length) {
            var b = vn(l, fi(Kc));
            g |= I;
          }
          return qe(o, g, i, l, b);
        });
        function Zc(i, o, l) {
          o = l ? r : o;
          var g = qe(i, R, r, r, r, r, r, o);
          return g.placeholder = Zc.placeholder, g;
        }
        function Jc(i, o, l) {
          o = l ? r : o;
          var g = qe(i, O, r, r, r, r, r, o);
          return g.placeholder = Jc.placeholder, g;
        }
        function Qc(i, o, l) {
          var g, b, M, A, G, N, Z = 0, Q = !1, et = !1, dt = !0;
          if (typeof i != "function")
            throw new le(u);
          o = he(o) || 0, vr(l) && (Q = !!l.leading, et = "maxWait" in l, M = et ? Cr(he(l.maxWait) || 0, o) : M, dt = "trailing" in l ? !!l.trailing : dt);
          function yt(mr) {
            var Ee = g, Ze = b;
            return g = b = r, Z = mr, A = i.apply(Ze, Ee), A;
          }
          function Rt(mr) {
            return Z = mr, G = Ui(qt, o), Q ? yt(mr) : A;
          }
          function Nt(mr) {
            var Ee = mr - N, Ze = mr - Z, mv = o - Ee;
            return et ? Ar(mv, M - Ze) : mv;
          }
          function Tt(mr) {
            var Ee = mr - N, Ze = mr - Z;
            return N === r || Ee >= o || Ee < 0 || et && Ze >= M;
          }
          function qt() {
            var mr = no();
            if (Tt(mr))
              return $t(mr);
            G = Ui(qt, Nt(mr));
          }
          function $t(mr) {
            return G = r, dt && g ? yt(mr) : (g = b = r, A);
          }
          function ae() {
            G !== r && uc(G), Z = 0, g = N = b = G = r;
          }
          function Lr() {
            return G === r ? A : $t(no());
          }
          function oe() {
            var mr = no(), Ee = Tt(mr);
            if (g = arguments, b = this, N = mr, Ee) {
              if (G === r)
                return Rt(N);
              if (et)
                return uc(G), G = Ui(qt, o), yt(N);
            }
            return G === r && (G = Ui(qt, o)), A;
          }
          return oe.cancel = ae, oe.flush = Lr, oe;
        }
        var C_ = Ht(function(i, o) {
          return Nl(i, 1, o);
        }), w_ = Ht(function(i, o, l) {
          return Nl(i, he(o) || 0, l);
        });
        function E_(i) {
          return qe(i, P);
        }
        function io(i, o) {
          if (typeof i != "function" || o != null && typeof o != "function")
            throw new le(u);
          var l = function() {
            var g = arguments, b = o ? o.apply(this, g) : g[0], M = l.cache;
            if (M.has(b))
              return M.get(b);
            var A = i.apply(this, g);
            return l.cache = M.set(b, A) || M, A;
          };
          return l.cache = new (io.Cache || Ye)(), l;
        }
        io.Cache = Ye;
        function ao(i) {
          if (typeof i != "function")
            throw new le(u);
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
        function D_(i) {
          return Vc(2, i);
        }
        var M_ = p1(function(i, o) {
          o = o.length == 1 && zt(o[0]) ? lr(o[0], ee(Mt())) : lr(Or(o, 1), ee(Mt()));
          var l = o.length;
          return Ht(function(g) {
            for (var b = -1, M = Ar(g.length, l); ++b < M; )
              g[b] = o[b].call(this, g[b]);
            return re(i, this, g);
          });
        }), js = Ht(function(i, o) {
          var l = vn(o, fi(js));
          return qe(i, I, r, o, l);
        }), jc = Ht(function(i, o) {
          var l = vn(o, fi(jc));
          return qe(i, E, r, o, l);
        }), R_ = Ue(function(i, o) {
          return qe(i, T, r, r, r, o);
        });
        function T_(i, o) {
          if (typeof i != "function")
            throw new le(u);
          return o = o === r ? o : Lt(o), Ht(i, o);
        }
        function O_(i, o) {
          if (typeof i != "function")
            throw new le(u);
          return o = o == null ? 0 : Cr(Lt(o), 0), Ht(function(l) {
            var g = l[o], b = mn(l, 0, o);
            return g && cn(b, g), re(i, this, b);
          });
        }
        function I_(i, o, l) {
          var g = !0, b = !0;
          if (typeof i != "function")
            throw new le(u);
          return vr(l) && (g = "leading" in l ? !!l.leading : g, b = "trailing" in l ? !!l.trailing : b), Qc(i, o, {
            leading: g,
            maxWait: o,
            trailing: b
          });
        }
        function P_(i) {
          return $c(i, 1);
        }
        function A_(i, o) {
          return js(ks(o), i);
        }
        function B_() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return zt(i) ? i : [i];
        }
        function z_(i) {
          return ve(i, m);
        }
        function G_(i, o) {
          return o = typeof o == "function" ? o : r, ve(i, m, o);
        }
        function k_(i) {
          return ve(i, h | m);
        }
        function F_(i, o) {
          return o = typeof o == "function" ? o : r, ve(i, h | m, o);
        }
        function L_(i, o) {
          return o == null || Wl(i, o, Mr(o));
        }
        function we(i, o) {
          return i === o || i !== i && o !== o;
        }
        var W_ = Ja(Es), N_ = Ja(function(i, o) {
          return i >= o;
        }), Gn = Ul(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Ul : function(i) {
          return hr(i) && rr.call(i, "callee") && !Pl.call(i, "callee");
        }, zt = q.isArray, H_ = pl ? ee(pl) : Z0;
        function Ur(i) {
          return i != null && oo(i.length) && !Ve(i);
        }
        function gr(i) {
          return hr(i) && Ur(i);
        }
        function Y_(i) {
          return i === !0 || i === !1 || hr(i) && kr(i) == xt;
        }
        var _n = n0 || lu, X_ = dl ? ee(dl) : J0;
        function q_(i) {
          return hr(i) && i.nodeType === 1 && !$i(i);
        }
        function U_(i) {
          if (i == null)
            return !0;
          if (Ur(i) && (zt(i) || typeof i == "string" || typeof i.splice == "function" || _n(i) || li(i) || Gn(i)))
            return !i.length;
          var o = Br(i);
          if (o == St || o == Jt)
            return !i.size;
          if (qi(i))
            return !Rs(i).length;
          for (var l in i)
            if (rr.call(i, l))
              return !1;
          return !0;
        }
        function $_(i, o) {
          return Hi(i, o);
        }
        function V_(i, o, l) {
          l = typeof l == "function" ? l : r;
          var g = l ? l(i, o) : r;
          return g === r ? Hi(i, o, r, l) : !!g;
        }
        function tu(i) {
          if (!hr(i))
            return !1;
          var o = kr(i);
          return o == nt || o == Yt || typeof i.message == "string" && typeof i.name == "string" && !$i(i);
        }
        function K_(i) {
          return typeof i == "number" && Bl(i);
        }
        function Ve(i) {
          if (!vr(i))
            return !1;
          var o = kr(i);
          return o == ft || o == Xt || o == pt || o == Pt;
        }
        function tv(i) {
          return typeof i == "number" && i == Lt(i);
        }
        function oo(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= K;
        }
        function vr(i) {
          var o = typeof i;
          return i != null && (o == "object" || o == "function");
        }
        function hr(i) {
          return i != null && typeof i == "object";
        }
        var rv = hl ? ee(hl) : j0;
        function Z_(i, o) {
          return i === o || Ms(i, o, Xs(o));
        }
        function J_(i, o, l) {
          return l = typeof l == "function" ? l : r, Ms(i, o, Xs(o), l);
        }
        function Q_(i) {
          return ev(i) && i != +i;
        }
        function j_(i) {
          if (G1(i))
            throw new Bt(s);
          return $l(i);
        }
        function tx(i) {
          return i === null;
        }
        function rx(i) {
          return i == null;
        }
        function ev(i) {
          return typeof i == "number" || hr(i) && kr(i) == Dt;
        }
        function $i(i) {
          if (!hr(i) || kr(i) != Wt)
            return !1;
          var o = Aa(i);
          if (o === null)
            return !0;
          var l = rr.call(o, "constructor") && o.constructor;
          return typeof l == "function" && l instanceof l && Ta.call(l) == Jg;
        }
        var ru = gl ? ee(gl) : t1;
        function ex(i) {
          return tv(i) && i >= -K && i <= K;
        }
        var nv = ml ? ee(ml) : r1;
        function so(i) {
          return typeof i == "string" || !zt(i) && hr(i) && kr(i) == ur;
        }
        function ie(i) {
          return typeof i == "symbol" || hr(i) && kr(i) == cr;
        }
        var li = _l ? ee(_l) : e1;
        function nx(i) {
          return i === r;
        }
        function ix(i) {
          return hr(i) && Br(i) == Qt;
        }
        function ax(i) {
          return hr(i) && kr(i) == jr;
        }
        var ox = Ja(Ts), sx = Ja(function(i, o) {
          return i <= o;
        });
        function iv(i) {
          if (!i)
            return [];
          if (Ur(i))
            return so(i) ? Se(i) : qr(i);
          if (Bi && i[Bi])
            return Lg(i[Bi]());
          var o = Br(i), l = o == St ? gs : o == Jt ? Da : ci;
          return l(i);
        }
        function Ke(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = he(i), i === rt || i === -rt) {
            var o = i < 0 ? -1 : 1;
            return o * at;
          }
          return i === i ? i : 0;
        }
        function Lt(i) {
          var o = Ke(i), l = o % 1;
          return o === o ? l ? o - l : o : 0;
        }
        function av(i) {
          return i ? Pn(Lt(i), 0, $) : 0;
        }
        function he(i) {
          if (typeof i == "number")
            return i;
          if (ie(i))
            return it;
          if (vr(i)) {
            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = vr(o) ? o + "" : o;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = wl(i);
          var l = Hh.test(i);
          return l || Xh.test(i) ? Sg(i.slice(2), l ? 2 : 8) : Nh.test(i) ? it : +i;
        }
        function ov(i) {
          return Ge(i, $r(i));
        }
        function ux(i) {
          return i ? Pn(Lt(i), -K, K) : i === 0 ? i : 0;
        }
        function tr(i) {
          return i == null ? "" : ne(i);
        }
        var fx = si(function(i, o) {
          if (qi(o) || Ur(o)) {
            Ge(o, Mr(o), i);
            return;
          }
          for (var l in o)
            rr.call(o, l) && Li(i, l, o[l]);
        }), sv = si(function(i, o) {
          Ge(o, $r(o), i);
        }), uo = si(function(i, o, l, g) {
          Ge(o, $r(o), i, g);
        }), lx = si(function(i, o, l, g) {
          Ge(o, Mr(o), i, g);
        }), cx = Ue(Ss);
        function vx(i, o) {
          var l = oi(i);
          return o == null ? l : Ll(l, o);
        }
        var px = Ht(function(i, o) {
          i = ir(i);
          var l = -1, g = o.length, b = g > 2 ? o[2] : r;
          for (b && Fr(o[0], o[1], b) && (g = 1); ++l < g; )
            for (var M = o[l], A = $r(M), G = -1, N = A.length; ++G < N; ) {
              var Z = A[G], Q = i[Z];
              (Q === r || we(Q, ni[Z]) && !rr.call(i, Z)) && (i[Z] = M[Z]);
            }
          return i;
        }), dx = Ht(function(i) {
          return i.push(r, wc), re(uv, r, i);
        });
        function hx(i, o) {
          return yl(i, Mt(o, 3), ze);
        }
        function gx(i, o) {
          return yl(i, Mt(o, 3), ws);
        }
        function mx(i, o) {
          return i == null ? i : Cs(i, Mt(o, 3), $r);
        }
        function _x(i, o) {
          return i == null ? i : Xl(i, Mt(o, 3), $r);
        }
        function xx(i, o) {
          return i && ze(i, Mt(o, 3));
        }
        function yx(i, o) {
          return i && ws(i, Mt(o, 3));
        }
        function bx(i) {
          return i == null ? [] : Ya(i, Mr(i));
        }
        function Sx(i) {
          return i == null ? [] : Ya(i, $r(i));
        }
        function eu(i, o, l) {
          var g = i == null ? r : An(i, o);
          return g === r ? l : g;
        }
        function Cx(i, o) {
          return i != null && Mc(i, o, U0);
        }
        function nu(i, o) {
          return i != null && Mc(i, o, $0);
        }
        var wx = xc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Oa.call(o)), i[o] = l;
        }, au(Vr)), Ex = xc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Oa.call(o)), rr.call(i, o) ? i[o].push(l) : i[o] = [l];
        }, Mt), Dx = Ht(Ni);
        function Mr(i) {
          return Ur(i) ? kl(i) : Rs(i);
        }
        function $r(i) {
          return Ur(i) ? kl(i, !0) : n1(i);
        }
        function Mx(i, o) {
          var l = {};
          return o = Mt(o, 3), ze(i, function(g, b, M) {
            Xe(l, o(g, b, M), g);
          }), l;
        }
        function Rx(i, o) {
          var l = {};
          return o = Mt(o, 3), ze(i, function(g, b, M) {
            Xe(l, b, o(g, b, M));
          }), l;
        }
        var Tx = si(function(i, o, l) {
          Xa(i, o, l);
        }), uv = si(function(i, o, l, g) {
          Xa(i, o, l, g);
        }), Ox = Ue(function(i, o) {
          var l = {};
          if (i == null)
            return l;
          var g = !1;
          o = lr(o, function(M) {
            return M = gn(M, i), g || (g = M.length > 1), M;
          }), Ge(i, Hs(i), l), g && (l = ve(l, h | d | m, w1));
          for (var b = o.length; b--; )
            Bs(l, o[b]);
          return l;
        });
        function Ix(i, o) {
          return fv(i, ao(Mt(o)));
        }
        var Px = Ue(function(i, o) {
          return i == null ? {} : a1(i, o);
        });
        function fv(i, o) {
          if (i == null)
            return {};
          var l = lr(Hs(i), function(g) {
            return [g];
          });
          return o = Mt(o), tc(i, l, function(g, b) {
            return o(g, b[0]);
          });
        }
        function Ax(i, o, l) {
          o = gn(o, i);
          var g = -1, b = o.length;
          for (b || (b = 1, i = r); ++g < b; ) {
            var M = i == null ? r : i[ke(o[g])];
            M === r && (g = b, M = l), i = Ve(M) ? M.call(i) : M;
          }
          return i;
        }
        function Bx(i, o, l) {
          return i == null ? i : Yi(i, o, l);
        }
        function zx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Yi(i, o, l, g);
        }
        var lv = Sc(Mr), cv = Sc($r);
        function Gx(i, o, l) {
          var g = zt(i), b = g || _n(i) || li(i);
          if (o = Mt(o, 4), l == null) {
            var M = i && i.constructor;
            b ? l = g ? new M() : [] : vr(i) ? l = Ve(M) ? oi(Aa(i)) : {} : l = {};
          }
          return (b ? fe : ze)(i, function(A, G, N) {
            return o(l, A, G, N);
          }), l;
        }
        function kx(i, o) {
          return i == null ? !0 : Bs(i, o);
        }
        function Fx(i, o, l) {
          return i == null ? i : ac(i, o, ks(l));
        }
        function Lx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : ac(i, o, ks(l), g);
        }
        function ci(i) {
          return i == null ? [] : hs(i, Mr(i));
        }
        function Wx(i) {
          return i == null ? [] : hs(i, $r(i));
        }
        function Nx(i, o, l) {
          return l === r && (l = o, o = r), l !== r && (l = he(l), l = l === l ? l : 0), o !== r && (o = he(o), o = o === o ? o : 0), Pn(he(i), o, l);
        }
        function Hx(i, o, l) {
          return o = Ke(o), l === r ? (l = o, o = 0) : l = Ke(l), i = he(i), V0(i, o, l);
        }
        function Yx(i, o, l) {
          if (l && typeof l != "boolean" && Fr(i, o, l) && (o = l = r), l === r && (typeof o == "boolean" ? (l = o, o = r) : typeof i == "boolean" && (l = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Ke(i), o === r ? (o = i, i = 0) : o = Ke(o)), i > o) {
            var g = i;
            i = o, o = g;
          }
          if (l || i % 1 || o % 1) {
            var b = zl();
            return Ar(i + b * (o - i + bg("1e-" + ((b + "").length - 1))), o);
          }
          return Is(i, o);
        }
        var Xx = ui(function(i, o, l) {
          return o = o.toLowerCase(), i + (l ? vv(o) : o);
        });
        function vv(i) {
          return iu(tr(i).toLowerCase());
        }
        function pv(i) {
          return i = tr(i), i && i.replace(Uh, Bg).replace(cg, "");
        }
        function qx(i, o, l) {
          i = tr(i), o = ne(o);
          var g = i.length;
          l = l === r ? g : Pn(Lt(l), 0, g);
          var b = l;
          return l -= o.length, l >= 0 && i.slice(l, b) == o;
        }
        function Ux(i) {
          return i = tr(i), i && Zn.test(i) ? i.replace(te, zg) : i;
        }
        function $x(i) {
          return i = tr(i), i && Ph.test(i) ? i.replace(jo, "\\$&") : i;
        }
        var Vx = ui(function(i, o, l) {
          return i + (l ? "-" : "") + o.toLowerCase();
        }), Kx = ui(function(i, o, l) {
          return i + (l ? " " : "") + o.toLowerCase();
        }), Zx = gc("toLowerCase");
        function Jx(i, o, l) {
          i = tr(i), o = Lt(o);
          var g = o ? ri(i) : 0;
          if (!o || g >= o)
            return i;
          var b = (o - g) / 2;
          return Za(ka(b), l) + i + Za(Ga(b), l);
        }
        function Qx(i, o, l) {
          i = tr(i), o = Lt(o);
          var g = o ? ri(i) : 0;
          return o && g < o ? i + Za(o - g, l) : i;
        }
        function jx(i, o, l) {
          i = tr(i), o = Lt(o);
          var g = o ? ri(i) : 0;
          return o && g < o ? Za(o - g, l) + i : i;
        }
        function ty(i, o, l) {
          return l || o == null ? o = 0 : o && (o = +o), s0(tr(i).replace(ts, ""), o || 0);
        }
        function ry(i, o, l) {
          return (l ? Fr(i, o, l) : o === r) ? o = 1 : o = Lt(o), Ps(tr(i), o);
        }
        function ey() {
          var i = arguments, o = tr(i[0]);
          return i.length < 3 ? o : o.replace(i[1], i[2]);
        }
        var ny = ui(function(i, o, l) {
          return i + (l ? "_" : "") + o.toLowerCase();
        });
        function iy(i, o, l) {
          return l && typeof l != "number" && Fr(i, o, l) && (o = l = r), l = l === r ? $ : l >>> 0, l ? (i = tr(i), i && (typeof o == "string" || o != null && !ru(o)) && (o = ne(o), !o && ti(i)) ? mn(Se(i), 0, l) : i.split(o, l)) : [];
        }
        var ay = ui(function(i, o, l) {
          return i + (l ? " " : "") + iu(o);
        });
        function oy(i, o, l) {
          return i = tr(i), l = l == null ? 0 : Pn(Lt(l), 0, i.length), o = ne(o), i.slice(l, l + o.length) == o;
        }
        function sy(i, o, l) {
          var g = C.templateSettings;
          l && Fr(i, o, l) && (o = r), i = tr(i), o = uo({}, o, g, Cc);
          var b = uo({}, o.imports, g.imports, Cc), M = Mr(b), A = hs(b, M), G, N, Z = 0, Q = o.interpolate || ba, et = "__p += '", dt = ms(
            (o.escape || ba).source + "|" + Q.source + "|" + (Q === Jn ? Wh : ba).source + "|" + (o.evaluate || ba).source + "|$",
            "g"
          ), yt = "//# sourceURL=" + (rr.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++gg + "]") + `
`;
          i.replace(dt, function(Tt, qt, $t, ae, Lr, oe) {
            return $t || ($t = ae), et += i.slice(Z, oe).replace($h, Gg), qt && (G = !0, et += `' +
__e(` + qt + `) +
'`), Lr && (N = !0, et += `';
` + Lr + `;
__p += '`), $t && (et += `' +
((__t = (` + $t + `)) == null ? '' : __t) +
'`), Z = oe + Tt.length, Tt;
          }), et += `';
`;
          var Rt = rr.call(o, "variable") && o.variable;
          if (!Rt)
            et = `with (obj) {
` + et + `
}
`;
          else if (Fh.test(Rt))
            throw new Bt(f);
          et = (N ? et.replace(At, "") : et).replace(Vt, "$1").replace(vt, "$1;"), et = "function(" + (Rt || "obj") + `) {
` + (Rt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (G ? ", __e = _.escape" : "") + (N ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + et + `return __p
}`;
          var Nt = hv(function() {
            return jt(M, yt + "return " + et).apply(r, A);
          });
          if (Nt.source = et, tu(Nt))
            throw Nt;
          return Nt;
        }
        function uy(i) {
          return tr(i).toLowerCase();
        }
        function fy(i) {
          return tr(i).toUpperCase();
        }
        function ly(i, o, l) {
          if (i = tr(i), i && (l || o === r))
            return wl(i);
          if (!i || !(o = ne(o)))
            return i;
          var g = Se(i), b = Se(o), M = El(g, b), A = Dl(g, b) + 1;
          return mn(g, M, A).join("");
        }
        function cy(i, o, l) {
          if (i = tr(i), i && (l || o === r))
            return i.slice(0, Rl(i) + 1);
          if (!i || !(o = ne(o)))
            return i;
          var g = Se(i), b = Dl(g, Se(o)) + 1;
          return mn(g, 0, b).join("");
        }
        function vy(i, o, l) {
          if (i = tr(i), i && (l || o === r))
            return i.replace(ts, "");
          if (!i || !(o = ne(o)))
            return i;
          var g = Se(i), b = El(g, Se(o));
          return mn(g, b).join("");
        }
        function py(i, o) {
          var l = B, g = H;
          if (vr(o)) {
            var b = "separator" in o ? o.separator : b;
            l = "length" in o ? Lt(o.length) : l, g = "omission" in o ? ne(o.omission) : g;
          }
          i = tr(i);
          var M = i.length;
          if (ti(i)) {
            var A = Se(i);
            M = A.length;
          }
          if (l >= M)
            return i;
          var G = l - ri(g);
          if (G < 1)
            return g;
          var N = A ? mn(A, 0, G).join("") : i.slice(0, G);
          if (b === r)
            return N + g;
          if (A && (G += N.length - G), ru(b)) {
            if (i.slice(G).search(b)) {
              var Z, Q = N;
              for (b.global || (b = ms(b.source, tr(Uf.exec(b)) + "g")), b.lastIndex = 0; Z = b.exec(Q); )
                var et = Z.index;
              N = N.slice(0, et === r ? G : et);
            }
          } else if (i.indexOf(ne(b), G) != G) {
            var dt = N.lastIndexOf(b);
            dt > -1 && (N = N.slice(0, dt));
          }
          return N + g;
        }
        function dy(i) {
          return i = tr(i), i && sn.test(i) ? i.replace(Ct, Yg) : i;
        }
        var hy = ui(function(i, o, l) {
          return i + (l ? " " : "") + o.toUpperCase();
        }), iu = gc("toUpperCase");
        function dv(i, o, l) {
          return i = tr(i), o = l ? r : o, o === r ? Fg(i) ? Ug(i) : Tg(i) : i.match(o) || [];
        }
        var hv = Ht(function(i, o) {
          try {
            return re(i, r, o);
          } catch (l) {
            return tu(l) ? l : new Bt(l);
          }
        }), gy = Ue(function(i, o) {
          return fe(o, function(l) {
            l = ke(l), Xe(i, l, Qs(i[l], i));
          }), i;
        });
        function my(i) {
          var o = i == null ? 0 : i.length, l = Mt();
          return i = o ? lr(i, function(g) {
            if (typeof g[1] != "function")
              throw new le(u);
            return [l(g[0]), g[1]];
          }) : [], Ht(function(g) {
            for (var b = -1; ++b < o; ) {
              var M = i[b];
              if (re(M[0], this, g))
                return re(M[1], this, g);
            }
          });
        }
        function _y(i) {
          return Y0(ve(i, h));
        }
        function au(i) {
          return function() {
            return i;
          };
        }
        function xy(i, o) {
          return i == null || i !== i ? o : i;
        }
        var yy = _c(), by = _c(!0);
        function Vr(i) {
          return i;
        }
        function ou(i) {
          return Vl(typeof i == "function" ? i : ve(i, h));
        }
        function Sy(i) {
          return Zl(ve(i, h));
        }
        function Cy(i, o) {
          return Jl(i, ve(o, h));
        }
        var wy = Ht(function(i, o) {
          return function(l) {
            return Ni(l, i, o);
          };
        }), Ey = Ht(function(i, o) {
          return function(l) {
            return Ni(i, l, o);
          };
        });
        function su(i, o, l) {
          var g = Mr(o), b = Ya(o, g);
          l == null && !(vr(o) && (b.length || !g.length)) && (l = o, o = i, i = this, b = Ya(o, Mr(o)));
          var M = !(vr(l) && "chain" in l) || !!l.chain, A = Ve(i);
          return fe(b, function(G) {
            var N = o[G];
            i[G] = N, A && (i.prototype[G] = function() {
              var Z = this.__chain__;
              if (M || Z) {
                var Q = i(this.__wrapped__), et = Q.__actions__ = qr(this.__actions__);
                return et.push({ func: N, args: arguments, thisArg: i }), Q.__chain__ = Z, Q;
              }
              return N.apply(i, cn([this.value()], arguments));
            });
          }), i;
        }
        function Dy() {
          return Tr._ === this && (Tr._ = Qg), this;
        }
        function uu() {
        }
        function My(i) {
          return i = Lt(i), Ht(function(o) {
            return Ql(o, i);
          });
        }
        var Ry = Ls(lr), Ty = Ls(xl), Oy = Ls(ls);
        function gv(i) {
          return Us(i) ? cs(ke(i)) : o1(i);
        }
        function Iy(i) {
          return function(o) {
            return i == null ? r : An(i, o);
          };
        }
        var Py = yc(), Ay = yc(!0);
        function fu() {
          return [];
        }
        function lu() {
          return !1;
        }
        function By() {
          return {};
        }
        function zy() {
          return "";
        }
        function Gy() {
          return !0;
        }
        function ky(i, o) {
          if (i = Lt(i), i < 1 || i > K)
            return [];
          var l = $, g = Ar(i, $);
          o = Mt(o), i -= $;
          for (var b = ds(g, o); ++l < i; )
            o(l);
          return b;
        }
        function Fy(i) {
          return zt(i) ? lr(i, ke) : ie(i) ? [i] : qr(Gc(tr(i)));
        }
        function Ly(i) {
          var o = ++Zg;
          return tr(i) + o;
        }
        var Wy = Ka(function(i, o) {
          return i + o;
        }, 0), Ny = Ws("ceil"), Hy = Ka(function(i, o) {
          return i / o;
        }, 1), Yy = Ws("floor");
        function Xy(i) {
          return i && i.length ? Ha(i, Vr, Es) : r;
        }
        function qy(i, o) {
          return i && i.length ? Ha(i, Mt(o, 2), Es) : r;
        }
        function Uy(i) {
          return Sl(i, Vr);
        }
        function $y(i, o) {
          return Sl(i, Mt(o, 2));
        }
        function Vy(i) {
          return i && i.length ? Ha(i, Vr, Ts) : r;
        }
        function Ky(i, o) {
          return i && i.length ? Ha(i, Mt(o, 2), Ts) : r;
        }
        var Zy = Ka(function(i, o) {
          return i * o;
        }, 1), Jy = Ws("round"), Qy = Ka(function(i, o) {
          return i - o;
        }, 0);
        function jy(i) {
          return i && i.length ? ps(i, Vr) : 0;
        }
        function tb(i, o) {
          return i && i.length ? ps(i, Mt(o, 2)) : 0;
        }
        return C.after = S_, C.ary = $c, C.assign = fx, C.assignIn = sv, C.assignInWith = uo, C.assignWith = lx, C.at = cx, C.before = Vc, C.bind = Qs, C.bindAll = gy, C.bindKey = Kc, C.castArray = B_, C.chain = Xc, C.chunk = Y1, C.compact = X1, C.concat = q1, C.cond = my, C.conforms = _y, C.constant = au, C.countBy = jm, C.create = vx, C.curry = Zc, C.curryRight = Jc, C.debounce = Qc, C.defaults = px, C.defaultsDeep = dx, C.defer = C_, C.delay = w_, C.difference = U1, C.differenceBy = $1, C.differenceWith = V1, C.drop = K1, C.dropRight = Z1, C.dropRightWhile = J1, C.dropWhile = Q1, C.fill = j1, C.filter = r_, C.flatMap = i_, C.flatMapDeep = a_, C.flatMapDepth = o_, C.flatten = Wc, C.flattenDeep = tm, C.flattenDepth = rm, C.flip = E_, C.flow = yy, C.flowRight = by, C.fromPairs = em, C.functions = bx, C.functionsIn = Sx, C.groupBy = s_, C.initial = im, C.intersection = am, C.intersectionBy = om, C.intersectionWith = sm, C.invert = wx, C.invertBy = Ex, C.invokeMap = f_, C.iteratee = ou, C.keyBy = l_, C.keys = Mr, C.keysIn = $r, C.map = eo, C.mapKeys = Mx, C.mapValues = Rx, C.matches = Sy, C.matchesProperty = Cy, C.memoize = io, C.merge = Tx, C.mergeWith = uv, C.method = wy, C.methodOf = Ey, C.mixin = su, C.negate = ao, C.nthArg = My, C.omit = Ox, C.omitBy = Ix, C.once = D_, C.orderBy = c_, C.over = Ry, C.overArgs = M_, C.overEvery = Ty, C.overSome = Oy, C.partial = js, C.partialRight = jc, C.partition = v_, C.pick = Px, C.pickBy = fv, C.property = gv, C.propertyOf = Iy, C.pull = cm, C.pullAll = Hc, C.pullAllBy = vm, C.pullAllWith = pm, C.pullAt = dm, C.range = Py, C.rangeRight = Ay, C.rearg = R_, C.reject = h_, C.remove = hm, C.rest = T_, C.reverse = Zs, C.sampleSize = m_, C.set = Bx, C.setWith = zx, C.shuffle = __, C.slice = gm, C.sortBy = b_, C.sortedUniq = Cm, C.sortedUniqBy = wm, C.split = iy, C.spread = O_, C.tail = Em, C.take = Dm, C.takeRight = Mm, C.takeRightWhile = Rm, C.takeWhile = Tm, C.tap = Xm, C.throttle = I_, C.thru = ro, C.toArray = iv, C.toPairs = lv, C.toPairsIn = cv, C.toPath = Fy, C.toPlainObject = ov, C.transform = Gx, C.unary = P_, C.union = Om, C.unionBy = Im, C.unionWith = Pm, C.uniq = Am, C.uniqBy = Bm, C.uniqWith = zm, C.unset = kx, C.unzip = Js, C.unzipWith = Yc, C.update = Fx, C.updateWith = Lx, C.values = ci, C.valuesIn = Wx, C.without = Gm, C.words = dv, C.wrap = A_, C.xor = km, C.xorBy = Fm, C.xorWith = Lm, C.zip = Wm, C.zipObject = Nm, C.zipObjectDeep = Hm, C.zipWith = Ym, C.entries = lv, C.entriesIn = cv, C.extend = sv, C.extendWith = uo, su(C, C), C.add = Wy, C.attempt = hv, C.camelCase = Xx, C.capitalize = vv, C.ceil = Ny, C.clamp = Nx, C.clone = z_, C.cloneDeep = k_, C.cloneDeepWith = F_, C.cloneWith = G_, C.conformsTo = L_, C.deburr = pv, C.defaultTo = xy, C.divide = Hy, C.endsWith = qx, C.eq = we, C.escape = Ux, C.escapeRegExp = $x, C.every = t_, C.find = e_, C.findIndex = Fc, C.findKey = hx, C.findLast = n_, C.findLastIndex = Lc, C.findLastKey = gx, C.floor = Yy, C.forEach = qc, C.forEachRight = Uc, C.forIn = mx, C.forInRight = _x, C.forOwn = xx, C.forOwnRight = yx, C.get = eu, C.gt = W_, C.gte = N_, C.has = Cx, C.hasIn = nu, C.head = Nc, C.identity = Vr, C.includes = u_, C.indexOf = nm, C.inRange = Hx, C.invoke = Dx, C.isArguments = Gn, C.isArray = zt, C.isArrayBuffer = H_, C.isArrayLike = Ur, C.isArrayLikeObject = gr, C.isBoolean = Y_, C.isBuffer = _n, C.isDate = X_, C.isElement = q_, C.isEmpty = U_, C.isEqual = $_, C.isEqualWith = V_, C.isError = tu, C.isFinite = K_, C.isFunction = Ve, C.isInteger = tv, C.isLength = oo, C.isMap = rv, C.isMatch = Z_, C.isMatchWith = J_, C.isNaN = Q_, C.isNative = j_, C.isNil = rx, C.isNull = tx, C.isNumber = ev, C.isObject = vr, C.isObjectLike = hr, C.isPlainObject = $i, C.isRegExp = ru, C.isSafeInteger = ex, C.isSet = nv, C.isString = so, C.isSymbol = ie, C.isTypedArray = li, C.isUndefined = nx, C.isWeakMap = ix, C.isWeakSet = ax, C.join = um, C.kebabCase = Vx, C.last = de, C.lastIndexOf = fm, C.lowerCase = Kx, C.lowerFirst = Zx, C.lt = ox, C.lte = sx, C.max = Xy, C.maxBy = qy, C.mean = Uy, C.meanBy = $y, C.min = Vy, C.minBy = Ky, C.stubArray = fu, C.stubFalse = lu, C.stubObject = By, C.stubString = zy, C.stubTrue = Gy, C.multiply = Zy, C.nth = lm, C.noConflict = Dy, C.noop = uu, C.now = no, C.pad = Jx, C.padEnd = Qx, C.padStart = jx, C.parseInt = ty, C.random = Yx, C.reduce = p_, C.reduceRight = d_, C.repeat = ry, C.replace = ey, C.result = Ax, C.round = Jy, C.runInContext = L, C.sample = g_, C.size = x_, C.snakeCase = ny, C.some = y_, C.sortedIndex = mm, C.sortedIndexBy = _m, C.sortedIndexOf = xm, C.sortedLastIndex = ym, C.sortedLastIndexBy = bm, C.sortedLastIndexOf = Sm, C.startCase = ay, C.startsWith = oy, C.subtract = Qy, C.sum = jy, C.sumBy = tb, C.template = sy, C.times = ky, C.toFinite = Ke, C.toInteger = Lt, C.toLength = av, C.toLower = uy, C.toNumber = he, C.toSafeInteger = ux, C.toString = tr, C.toUpper = fy, C.trim = ly, C.trimEnd = cy, C.trimStart = vy, C.truncate = py, C.unescape = dy, C.uniqueId = Ly, C.upperCase = hy, C.upperFirst = iu, C.each = qc, C.eachRight = Uc, C.first = Nc, su(C, (function() {
          var i = {};
          return ze(C, function(o, l) {
            rr.call(C.prototype, l) || (i[l] = o);
          }), i;
        })(), { chain: !1 }), C.VERSION = n, fe(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          C[i].placeholder = C;
        }), fe(["drop", "take"], function(i, o) {
          Ut.prototype[i] = function(l) {
            l = l === r ? 1 : Cr(Lt(l), 0);
            var g = this.__filtered__ && !o ? new Ut(this) : this.clone();
            return g.__filtered__ ? g.__takeCount__ = Ar(l, g.__takeCount__) : g.__views__.push({
              size: Ar(l, $),
              type: i + (g.__dir__ < 0 ? "Right" : "")
            }), g;
          }, Ut.prototype[i + "Right"] = function(l) {
            return this.reverse()[i](l).reverse();
          };
        }), fe(["filter", "map", "takeWhile"], function(i, o) {
          var l = o + 1, g = l == Y || l == j;
          Ut.prototype[i] = function(b) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: Mt(b, 3),
              type: l
            }), M.__filtered__ = M.__filtered__ || g, M;
          };
        }), fe(["head", "last"], function(i, o) {
          var l = "take" + (o ? "Right" : "");
          Ut.prototype[i] = function() {
            return this[l](1).value()[0];
          };
        }), fe(["initial", "tail"], function(i, o) {
          var l = "drop" + (o ? "" : "Right");
          Ut.prototype[i] = function() {
            return this.__filtered__ ? new Ut(this) : this[l](1);
          };
        }), Ut.prototype.compact = function() {
          return this.filter(Vr);
        }, Ut.prototype.find = function(i) {
          return this.filter(i).head();
        }, Ut.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Ut.prototype.invokeMap = Ht(function(i, o) {
          return typeof i == "function" ? new Ut(this) : this.map(function(l) {
            return Ni(l, i, o);
          });
        }), Ut.prototype.reject = function(i) {
          return this.filter(ao(Mt(i)));
        }, Ut.prototype.slice = function(i, o) {
          i = Lt(i);
          var l = this;
          return l.__filtered__ && (i > 0 || o < 0) ? new Ut(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), o !== r && (o = Lt(o), l = o < 0 ? l.dropRight(-o) : l.take(o - i)), l);
        }, Ut.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Ut.prototype.toArray = function() {
          return this.take($);
        }, ze(Ut.prototype, function(i, o) {
          var l = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), b = C[g ? "take" + (o == "last" ? "Right" : "") : o], M = g || /^find/.test(o);
          b && (C.prototype[o] = function() {
            var A = this.__wrapped__, G = g ? [1] : arguments, N = A instanceof Ut, Z = G[0], Q = N || zt(A), et = function(qt) {
              var $t = b.apply(C, cn([qt], G));
              return g && dt ? $t[0] : $t;
            };
            Q && l && typeof Z == "function" && Z.length != 1 && (N = Q = !1);
            var dt = this.__chain__, yt = !!this.__actions__.length, Rt = M && !dt, Nt = N && !yt;
            if (!M && Q) {
              A = Nt ? A : new Ut(this);
              var Tt = i.apply(A, G);
              return Tt.__actions__.push({ func: ro, args: [et], thisArg: r }), new ce(Tt, dt);
            }
            return Rt && Nt ? i.apply(this, G) : (Tt = this.thru(et), Rt ? g ? Tt.value()[0] : Tt.value() : Tt);
          });
        }), fe(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var o = Ma[i], l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
          C.prototype[i] = function() {
            var b = arguments;
            if (g && !this.__chain__) {
              var M = this.value();
              return o.apply(zt(M) ? M : [], b);
            }
            return this[l](function(A) {
              return o.apply(zt(A) ? A : [], b);
            });
          };
        }), ze(Ut.prototype, function(i, o) {
          var l = C[o];
          if (l) {
            var g = l.name + "";
            rr.call(ai, g) || (ai[g] = []), ai[g].push({ name: o, func: l });
          }
        }), ai[Va(r, S).name] = [{
          name: "wrapper",
          func: r
        }], Ut.prototype.clone = d0, Ut.prototype.reverse = h0, Ut.prototype.value = g0, C.prototype.at = qm, C.prototype.chain = Um, C.prototype.commit = $m, C.prototype.next = Vm, C.prototype.plant = Zm, C.prototype.reverse = Jm, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = Qm, C.prototype.first = C.prototype.head, Bi && (C.prototype[Bi] = Km), C;
      }), ei = $g();
      Rn ? ((Rn.exports = ei)._ = ei, os._ = ei) : Tr._ = ei;
    }).call(lb);
  })(Vi, Vi.exports)), Vi.exports;
}
var bp = cb();
function Sp(t = "", e = () => 0) {
  const r = eb(t), n = (E) => {
    const D = e();
    return D > 0 ? Math.round(E / D) * D : E;
  }, a = nb(t), s = yp(), u = zr({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    visible: !1
  });
  return {
    layoutStore: r,
    widgetStore: a,
    clipboardStore: s,
    ghostPlaceholder: u,
    processDropCoordinates: (E, D) => {
      const { clientX: T, clientY: P } = E, { left: B, top: H } = D.getBoundingClientRect();
      return { dropX: n(T - B), dropY: n(P - H) };
    },
    processDragOverCoordinates: (E, D) => {
      const { clientX: T, clientY: P } = E, { left: B, top: H } = D.getBoundingClientRect(), W = T - B, F = P - H;
      u.value.x = n(W - u.value.width / 2), u.value.y = n(F - u.value.height / 2), u.value.visible = !0;
    },
    hidePlaceholder: () => {
      u.value.visible = !1;
    },
    getInitialStyle: (E) => {
      const D = r?.layout?.find((T) => T.id === E);
      return D ? {
        width: `${D.width}px`,
        height: `${D.height}px`,
        transform: `translate(${D.x}px, ${D.y}px)`,
        "z-index": D.z
      } : {};
    },
    getMovableControlStyles: (E) => {
      const D = r.layout.find((T) => T.id === E);
      return D ? {
        "z-index": D.z
      } : {};
    },
    drag: (E, D) => {
      const T = r.layout.find((P) => P.id === E);
      T && (T.x = n(D.translate[0]), T.y = n(D.translate[1]), D.target.style.transform = `translate(${T.x}px, ${T.y}px)`);
    },
    resize: (E, D) => {
      const T = r.layout.find((P) => P.id === E);
      T && (T.width = n(D.width), T.height = n(D.height), T.x = n(D.drag.translate[0]), T.y = n(D.drag.translate[1]), D.target.style.width = `${T.width}px`, D.target.style.height = `${T.height}px`, D.target.style.transform = `translate(${T.x}px, ${T.y}px)`);
    },
    moveUp: (E) => {
      const D = r.layout.find((T) => T.id === E);
      D && (D.z += 1);
    },
    moveDown: (E) => {
      const D = r.layout.find((T) => T.id === E);
      D && (D.z -= 1);
    },
    moveToTop: (E) => {
      const D = Math.max(...r.layout.map((P) => P.z)), T = r.layout.find((P) => P.id === E);
      T && (T.z = D + 1);
    },
    moveToBottom: (E) => {
      const D = Math.min(...r.layout.map((P) => P.z)), T = r.layout.find((P) => P.id === E);
      T && (T.z = D - 1);
    },
    addWidget: (E, D = {}, T = {}, P = {}) => {
      const B = a.createWidget(E, D, T), H = {
        id: B,
        width: P.width || 300,
        height: P.height || 150,
        x: P.x || 0,
        y: P.y || 0,
        z: P.z || Math.max(...r.layout.map((W) => W.z), 0) + 1
      };
      return r.layout.push(H), B;
    },
    removeWidget: (E) => {
      a.removeWidget(E);
      const D = r.layout.findIndex((T) => T.id === E);
      D > -1 && r.layout.splice(D, 1);
    },
    copyWidget: (E) => {
      const D = a.widgets.find((P) => P.uid === E), T = r.layout.find((P) => P.id === E);
      D && T && s.copy(D, T);
    },
    pasteWidget: (E, D) => {
      const T = s.paste();
      if (!T) return null;
      const P = "li_" + Math.random().toString(36).substring(7), B = Math.max(...r.layout.map((F) => F.z), 0), H = bp.cloneDeep(T.widget);
      H.uid = P, H.config?.settings && (H.config.settings.name = "widget_" + P);
      const W = {
        ...T.layout,
        id: P,
        x: E,
        y: D,
        z: B + 1
      };
      return a.widgets.push(H), r.layout.push(W), P;
    }
  };
}
const vb = { class: "widget-board" }, pb = { class: "dashboard-item" }, db = /* @__PURE__ */ sf({
  __name: "View",
  props: {
    pageId: {}
  },
  setup(t) {
    const e = t, r = xp(), n = e.pageId ?? r.params.pageid ?? "", {
      widgetStore: a,
      getInitialStyle: s
    } = Sp(n || ""), u = gp(sb.TINY_EMITTER);
    return Ou(async () => {
      console.log("Base View component mounted for page:", n), await Iu(), console.log("📄 Emitting system:pageLoaded for page:", n), u.emit("system:pageLoaded", { pageId: n });
    }), (f, c) => (Rr(), Wr("div", vb, [
      (Rr(!0), Wr(Eo, null, Pu(pr(a)?.widgets || [], (v) => (Rr(), Wr("div", {
        key: v.uid,
        class: mp(`${v.uid} dashboard-item-container`),
        style: yn(pr(s)(v.uid)),
        ref_for: !0,
        ref: v.uid
      }, [
        bt("div", pb, [
          Re(pr(_p), {
            widget: v,
            ref_for: !0,
            ref: `${v.uid}_wrapper`,
            editEnabled: !1
          }, null, 8, ["widget"])
        ])
      ], 6))), 128))
    ]));
  }
}), Cp = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, hb = /* @__PURE__ */ Cp(db, [["__scopeId", "data-v-6934652c"]]);
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
function Je(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function wp(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function yv(t, e) {
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
var xb = "function", yb = "object", bb = "string", Sb = "number", uf = "undefined", Ep = typeof window !== uf, Cb = typeof document !== uf && document, wb = [{
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
}], yr = 1e-7, lo = {
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
function Ro(t, e, r, n) {
  return (t * n + e * r) / (r + n);
}
function la(t) {
  return typeof t === uf;
}
function Pe(t) {
  return t && typeof t === yb;
}
function br(t) {
  return Array.isArray(t);
}
function Zr(t) {
  return typeof t === bb;
}
function bi(t) {
  return typeof t === Sb;
}
function ff(t) {
  return typeof t === xb;
}
function Db(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function Dp(t, e, r, n, a) {
  var s = lf(t, e, r);
  return s ? r : Mb(t, e, r + 1, n, a);
}
function lf(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function Mb(t, e, r, n, a) {
  for (var s = function(v) {
    var p = e[v].trim();
    if (p === t.close && !lf(t, e, v))
      return {
        value: v
      };
    var h = v, d = Jr(a, function(m) {
      var _ = m.open;
      return _ === p;
    });
    if (d && (h = Dp(d, e, v, n, a)), h === -1)
      return u = v, "break";
    v = h, u = v;
  }, u, f = r; f < n; ++f) {
    var c = s(f);
    if (f = u, typeof c == "object") return c.value;
    if (c === "break") break;
  }
  return -1;
}
function cf(t, e) {
  var r = Zr(e) ? {
    separator: e
  } : e, n = r.separator, a = n === void 0 ? "," : n, s = r.isSeparateFirst, u = r.isSeparateOnlyOpenClose, f = r.isSeparateOpenClose, c = f === void 0 ? u : f, v = r.openCloseCharacters, p = v === void 0 ? wb : v, h = p.map(function(D) {
    var T = D.open, P = D.close;
    return T === P ? T : T + "|" + P;
  }).join("|"), d = "(\\s*" + a + "\\s*|" + h + "|\\s+)", m = new RegExp(d, "g"), _ = t.split(m).filter(function(D) {
    return D && D !== "undefined";
  }), x = _.length, y = [], S = [];
  function w() {
    return S.length ? (y.push(S.join("")), S = [], !0) : !1;
  }
  for (var R = function(D) {
    var T = _[D].trim(), P = D, B = Jr(p, function(F) {
      var Y = F.open;
      return Y === T;
    }), H = Jr(p, function(F) {
      var Y = F.close;
      return Y === T;
    });
    if (B) {
      if (P = Dp(B, _, D, x, p), P !== -1 && c)
        return w() && s || (y.push(_.slice(D, P + 1).join("")), D = P, s) ? (O = D, "break") : (O = D, "continue");
    } else if (H && !lf(H, _, D)) {
      var W = Eb(p);
      return W.splice(p.indexOf(H), 1), {
        value: cf(t, {
          separator: a,
          isSeparateFirst: s,
          isSeparateOnlyOpenClose: u,
          isSeparateOpenClose: c,
          openCloseCharacters: W
        })
      };
    } else if (Db(T, a) && !u)
      return w(), s ? (O = D, "break") : (O = D, "continue");
    P === -1 && (P = x - 1), S.push(_.slice(D, P + 1).join("")), D = P, O = D;
  }, O, I = 0; I < x; ++I) {
    var E = R(I);
    if (I = O, typeof E == "object") return E.value;
    if (E === "break") break;
  }
  return S.length && y.push(S.join("")), y;
}
function wn(t) {
  return cf(t, "");
}
function Yn(t) {
  return cf(t, ",");
}
function Mp(t) {
  var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !e || e.length < 4 ? {} : {
    prefix: e[1],
    value: e[2],
    suffix: e[3]
  };
}
function ca(t) {
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
function Do(t, e) {
  return t.replace(/([a-z])([A-Z])/g, function(r, n, a) {
    return "" + n + e + a.toLowerCase();
  });
}
function ia() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function tn(t, e, r) {
  r === void 0 && (r = -1);
  for (var n = t.length, a = 0; a < n; ++a)
    if (e(t[a], a, t))
      return a;
  return r;
}
function Jr(t, e, r) {
  var n = tn(t, e);
  return n > -1 ? t[n] : r;
}
var Rp = /* @__PURE__ */ (function() {
  var t = ia(), e = Ep && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = ia(), a = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return a;
  };
})(), Tb = /* @__PURE__ */ (function() {
  var t = Ep && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
})();
function rn(t) {
  return Object.keys(t);
}
function Ob(t) {
  var e = rn(t);
  return e.map(function(r) {
    return t[r];
  });
}
function er(t, e) {
  var r = ca(t), n = r.value, a = r.unit;
  if (Pe(e)) {
    var s = e[a];
    if (s) {
      if (ff(s))
        return s(n);
      if (lo[a])
        return lo[a](n, s);
    }
  } else if (a === "%")
    return n * e / 100;
  return lo[a] ? lo[a](n) : n;
}
function Au(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
function bv(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[It(e[0], yr), It(e[0] / n, yr)], [It(e[1] * n, yr), It(e[1], yr)]].filter(function(a) {
    return a.every(function(s, u) {
      var f = e[u], c = It(f, yr);
      return r ? s <= f || s <= c : s >= f || s >= c;
    });
  })[0] || t;
}
function Tp(t, e, r, n) {
  if (!n)
    return t.map(function(m, _) {
      return Au(m, e[_], r[_]);
    });
  var a = t[0], s = t[1], u = n === !0 ? a / s : n, f = bv(t, e, !1, u), c = f[0], v = f[1], p = bv(t, r, !0, u), h = p[0], d = p[1];
  return a < c || s < v ? (a = c, s = v) : (a > h || s > d) && (a = h, s = d), [a, s];
}
function Ib(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return r;
}
function Bu(t) {
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
    return Bu(t.map(function(r) {
      return r[e];
    }));
  });
}
function Sv(t) {
  var e = Pb(t), r = _r(e, t[0]), n = _r(e, t[1]);
  return r < n && n - r < Math.PI || r > n && n - r < -Math.PI ? 1 : -1;
}
function Qe(t, e) {
  return Math.sqrt(Math.pow((e ? e[0] : 0) - t[0], 2) + Math.pow((e ? e[1] : 0) - t[1], 2));
}
function It(t, e) {
  if (!e)
    return t;
  var r = 1 / e;
  return Math.round(t / e) / r;
}
function Cv(t, e) {
  return t.forEach(function(r, n) {
    t[n] = It(t[n], e);
  }), t;
}
function Ab(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function Op(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Ip(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function Er(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function Pp(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function Ap(t, e) {
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
function Ri(t) {
  return t?.ownerDocument || Cb;
}
function vf(t) {
  return Ri(t).documentElement;
}
function Mn(t) {
  return Ri(t).body;
}
function Cn(t) {
  var e;
  return ((e = t?.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView) || window;
}
function Bp(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function Ti(t) {
  return Pe(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
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
})(), Gb = typeof Map == "function", kb = /* @__PURE__ */ (function() {
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
function Fb(t, e) {
  var r = [], n = [];
  return t.forEach(function(a) {
    var s = a[0], u = a[1], f = new kb();
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
    var r = Fb(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = r.filter(function(s, u) {
      var f = s[0], c = s[1], v = n[u], p = v[0], h = v[1];
      if (f !== c)
        return a.push([p, h]), !0;
    }), this.cachePureChanged = a;
  }, t;
})();
function va(t, e, r) {
  var n = Gb ? Map : r ? zb : Bb, a = r || function(w) {
    return w;
  }, s = [], u = [], f = [], c = t.map(a), v = e.map(a), p = new n(), h = new n(), d = [], m = [], _ = {}, x = [], y = 0, S = 0;
  return c.forEach(function(w, R) {
    p.set(w, R);
  }), v.forEach(function(w, R) {
    h.set(w, R);
  }), c.forEach(function(w, R) {
    var O = h.get(w);
    typeof O > "u" ? (++S, u.push(R)) : _[O] = S;
  }), v.forEach(function(w, R) {
    var O = p.get(w);
    typeof O > "u" ? (s.push(R), ++y) : (f.push([O, R]), S = _[R] || 0, d.push([O - S, R - y]), m.push(R === O), O !== R && x.push([O, R]));
  }), u.reverse(), new Lb(t, e, s, u, x, f, d, m);
}
var Wb = /* @__PURE__ */ (function() {
  function t(r, n) {
    r === void 0 && (r = []), this.findKeyCallback = n, this.list = [].slice.call(r);
  }
  var e = t.prototype;
  return e.update = function(r) {
    var n = [].slice.call(r), a = va(this.list, n, this.findKeyCallback);
    return this.list = n, a;
  }, t;
})(), zu = function(t, e) {
  return zu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, zu(t, e);
};
function pa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  zu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Fe = function() {
  return Fe = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Fe.apply(this, arguments);
};
function zp(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function wv(t, e, r) {
  for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Ev(t) {
  var e = 0;
  return t.map(function(r) {
    return r == null ? "$compat".concat(++e) : "".concat(r);
  });
}
function Gp(t) {
  var e = [];
  return t.forEach(function(r) {
    e = e.concat(br(r) ? Gp(r) : r);
  }), e;
}
function gu(t, e) {
  if (!e)
    return t;
  for (var r in e)
    la(t[r]) && (t[r] = e[r]);
  return t;
}
function To(t, e) {
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
function Dv(t) {
  var e = t.className, r = zp(t, ["className"]);
  return e != null && (r.class = e), delete r.style, delete r.children, r;
}
function Mv(t) {
  var e = {}, r = {};
  for (var n in t)
    n.indexOf("on") === 0 ? r[n] = t[n] : e[n] = t[n];
  return [e, r];
}
function No(t) {
  if (!t)
    return null;
  var e = t.b;
  return Ti(e) ? e : No(t.c);
}
function kp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Fp(t) {
  t.forEach(function(e) {
    e();
  });
}
function Nb() {
  return this.constructor(this.props, this.context);
}
var pf = 0, Ho = /* @__PURE__ */ (function() {
  function t(r, n, a, s, u, f, c) {
    c === void 0 && (c = {}), this.t = r, this.d = n, this.k = a, this.i = s, this.c = u, this.ref = f, this.ps = c, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var e = t.prototype;
  return e.s = function() {
    return !0;
  }, e.u = function(r, n, a, s, u) {
    var f = this, c = f.d, v = Ob(n).filter(function(_) {
      return _.$_req;
    }), p = Gp(v.map(function(_) {
      return _.$_subs;
    })), h = Jr(p, function(_) {
      return _.d === c;
    });
    if (f.b && !Zr(a) && !u && !f.s(a.props, s) && !h) {
      var d = p.reduce(function(_, x) {
        var y = x.d;
        return _[0] ? _[0].d === y && _.push(x) : y > c && _.push(x), _;
      }, []);
      return d.forEach(function(_) {
        da(_, _._ps, [_.o], r, n, !0);
      }), !1;
    }
    f.o = a, f.ss(s);
    var m = f.ps;
    return Zr(a) || (f.ps = a.props, f.ref = a.ref), df(this), f.r(r, n, f.b ? m : {}, s), !0;
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
function Lp() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function Hb() {
  return pf;
}
function Yb(t) {
  pf = t;
}
function df(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, pf = 0, t;
}
var hf = /* @__PURE__ */ (function() {
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
    s.$_timer || (s.$_state = {}), clearTimeout(s.$_timer), s.$_timer = 0, s.$_state = Fe(Fe({}, s.$_state), r), a ? s.$_setState(n, a) : s.$_timer = window.setTimeout(function() {
      s.$_timer = 0, s.$_setState(n, a);
    });
  }, e.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, e.componentDidMount = function() {
  }, e.componentDidUpdate = function(r, n) {
  }, e.componentWillUnmount = function() {
  }, e.$_setState = function(r, n) {
    var a = [], s = this.$_p, u = da(s.c, [s], [s.o], a, s._cs, Fe(Fe({}, this.state), this.$_state), n);
    u && (r && a.push(r), Fp(a), df(null));
  }, t;
})(), Wp = /* @__PURE__ */ (function(t) {
  pa(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.shouldComponentUpdate = function(n, a) {
    return To(this.props, n) || To(this.state, a);
  }, e;
})(hf);
function Np(t) {
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
  return !((a = t?.prototype) === null || a === void 0) && a.render ? s = new t(e, r) : (s = new hf(e, r), s.constructor = t, t._fr ? (n.fr = Np(), s.render = function() {
    return this.constructor(this.props, n.fr);
  }) : s.render = Nb), s.$_p = n, s;
}
var Ub = /* @__PURE__ */ (function(t) {
  pa(e, t);
  function e(n, a, s, u, f, c, v) {
    v === void 0 && (v = {});
    var p = t.call(this, n, a, s, u, f, c, gu(v, n.defaultProps)) || this;
    return p.typ = "comp", p._usefs = [], p._uefs = [], p._defs = [], p;
  }
  var r = e.prototype;
  return r.s = function(n, a) {
    var s = this.b;
    return s.shouldComponentUpdate(gu(n, this.t.defaultProps), a || s.state) !== !1;
  }, r.r = function(n, a, s) {
    var u, f, c = this, v = c.t;
    c.ps = gu(c.ps, c.t.defaultProps);
    var p = c.ps, h = !c.b, d = v.contextType, m = c.b, _ = d?.get(c);
    c._cs = a, h ? (m = qb(v, p, _, c), c.b = m) : (m.props = p, m.context = _);
    var x = m.state;
    c._usefs = [], c._uefs = [];
    var y = m.render();
    ((f = (u = y?.props) === null || u === void 0 ? void 0 : u.children) === null || f === void 0 ? void 0 : f.length) === 0 && (y.props.children = c.ps.children);
    var S = Fe(Fe({}, a), m.$_cs);
    da(c, c._ps, y ? [y] : [], n, S), h ? c._uefs.push(function() {
      d?.register(c), m.componentDidMount();
    }) : c._uefs.push(function() {
      m.componentDidUpdate(s, x);
    }), n.push(function() {
      c._usefs.forEach(function(w) {
        w();
      }), h ? c.md() : c.ud(), c._defs = c._uefs.map(function(w) {
        return w();
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
})(Ho);
function $b(t, e, r) {
  var n = gf(Dv(t), Dv(e)), a = n.added, s = n.removed, u = n.changed;
  for (var f in a)
    r.setAttribute(f, a[f]);
  for (var c in u)
    r.setAttribute(c, u[c][1]);
  for (var v in s)
    r.removeAttribute(v);
}
function Vb(t, e, r) {
  var n = gf(t, e), a = n.added, s = n.removed;
  for (var u in s)
    r.e(u, !0);
  for (var f in a)
    r.e(f);
}
function gf(t, e) {
  var r = rn(t), n = rn(e), a = va(r, n, function(c) {
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
  var n = r.style, a = gf(t, e), s = a.added, u = a.removed, f = a.changed;
  for (var c in s) {
    var v = Do(c, "-");
    n.setProperty(v, s[c]);
  }
  for (var c in f) {
    var p = Do(c, "-");
    n.setProperty(p, f[c][1]);
  }
  for (var c in u) {
    var h = Do(c, "-");
    n.removeProperty(h);
  }
}
function Zb(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var Jb = /* @__PURE__ */ (function(t) {
  pa(e, t);
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
    return To(this.ps, n);
  }, r.r = function(n, a, s) {
    var u, f = this, c = !f.b, v = f.ps;
    if (c) {
      var p = No(f.c), h = !1;
      f._svg || f.t === "svg" ? h = !0 : h = p && p.ownerSVGElement, f._svg = h;
      var d = (u = f._hyd) === null || u === void 0 ? void 0 : u.splice(0, 1)[0], m = f.t;
      if (d)
        f._hyd = [].slice.call(d.children || []);
      else {
        var _ = Ri(p);
        h ? d = _.createElementNS("http://www.w3.org/2000/svg", m) : d = _.createElement(m);
      }
      f.b = d;
    }
    da(f, f._ps, v.children, n, a);
    var x = f.b, y = Mv(s), S = y[0], w = y[1], R = Mv(v), O = R[0], I = R[1];
    return $b(S, O, x), Vb(w, I, f), Kb(s.style || {}, v.style || {}, x), n.push(function() {
      c ? f.md() : f.ud();
    }), !0;
  }, r.un = function() {
    var n = this, a = n._es, s = n.b;
    for (var u in a)
      wr(s, u, a[u]);
    n._ps.forEach(function(f) {
      f.un();
    }), n._es = {}, n._sel || kp(s);
  }, e;
})(Ho);
function aa(t) {
  if (!t || Ti(t))
    return t;
  var e = t.$_p._ps;
  return e.length ? aa(e[0].b) : null;
}
function Hp(t) {
  if (t) {
    if (t.b && Ti(t.b))
      return t;
    var e = t._ps;
    return e.length ? Hp(e[0]) : null;
  }
}
function Oe(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = e || {}, s = a.key, u = a.ref, f = zp(a, ["key", "ref"]);
  return {
    type: t,
    key: s,
    ref: u,
    props: Fe(Fe({}, f), {
      children: Op(r).filter(function(c) {
        return c != null && c !== !1;
      })
    })
  };
}
var Yp = /* @__PURE__ */ (function(t) {
  pa(e, t);
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
})(Ho), Qb = /* @__PURE__ */ (function(t) {
  pa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var r = e.prototype;
  return r.r = function(n) {
    var a, s = this, u = !s.b;
    if (u) {
      var f = No(s.c), c = (a = s._hyd) === null || a === void 0 ? void 0 : a.splice(0, 1)[0];
      s.b = c || Ri(f).createTextNode(s.t.replace("text_", ""));
    }
    return n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, r.un = function() {
    kp(this.b);
  }, e;
})(Ho);
function jb(t, e, r) {
  var n = r.map(function(c) {
    return Zr(c) ? null : c.key;
  }), a = Ev(e.map(function(c) {
    return c.k;
  })), s = Ev(n), u = va(a, s, function(c) {
    return c;
  });
  u.removed.forEach(function(c) {
    e.splice(c, 1)[0].un();
  }), u.ordered.forEach(function(c) {
    var v = c[0], p = c[1], h = e.splice(v, 1)[0];
    e.splice(p, 0, h);
    var d = aa(h.b), m = aa(e[p + 1] && e[p + 1].b);
    d && d.parentNode.insertBefore(d, m);
  }), u.added.forEach(function(c) {
    e.splice(c, 0, Rv(r[c], n[c], c, t));
  });
  var f = u.maintained.filter(function(c) {
    c[0];
    var v = c[1], p = r[v], h = e[v], d = Zr(p) ? "text_".concat(p) : p.type;
    return d !== h.t ? (h.un(), e.splice(v, 1, Rv(p, n[v], v, t)), !0) : (h.i = v, !1);
  });
  return wv(wv([], u.added, !0), f.map(function(c) {
    c[0];
    var v = c[1];
    return v;
  }));
}
function tS(t, e) {
  for (var r = t._ps, n = r.length, a = e.i + 1; a < n; ++a) {
    var s = aa(r[a].b);
    if (s)
      return s;
  }
  return null;
}
function Rv(t, e, r, n) {
  var a = n.d + 1;
  if (Zr(t) || bi(t))
    return new Qb("text_".concat(t), a, e, r, n, null, {});
  var s = t.type, u = typeof s == "string" ? Jb : Ub;
  return new u(s, a, e, r, n, t.ref, t.props);
}
function da(t, e, r, n, a, s, u) {
  var f = jb(t, e, r), c = t._hyd, v = e.filter(function(h, d) {
    return h._hyd = c, h.u(n, a, r[d], s, u);
  });
  t.typ === "container" && t._sel && e.forEach(function(h) {
    var d = Hp(h);
    d && (d._sel = !0);
  }), t._hyd = null;
  var p = No(t);
  return p && f.reverse().forEach(function(h) {
    var d = e[h], m = aa(d.b);
    if (m && p !== m && !m.parentNode) {
      var _ = tS(t, d);
      p.insertBefore(m, _);
    }
  }), v.length > 0;
}
function rS(t, e, r, n) {
  r === void 0 && (r = e.__CROACT__), n === void 0 && (n = {});
  var a = !!r;
  r || (r = new Yp(e));
  var s = [];
  return da(r, r._ps, t ? [t] : [], s, n, void 0, void 0), Fp(s), df(null), a || (e.__CROACT__ = r), r;
}
function Tv(t, e, r) {
  return !r && t && (r = new Yp(e.parentElement), r._hyd = [e], r._sel = !0), rS(t, e, r), r;
}
function Xp(t) {
  var e = Lp(), r = e._hs || (e._hs = []), n = Hb(), a = r[n];
  if (Yb(n + 1), a) {
    if (!To(a.deps, t.deps))
      return a.updated = !1, a;
    r[n] = t;
  } else
    r.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function eS(t, e) {
  var r = Xp({
    func: t,
    deps: e
  });
  return r.value;
}
function nS(t) {
  return eS(function() {
    return Np(t);
  }, []);
}
function qp(t, e, r) {
  var n = Lp(), a = Xp({
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
  qp(function() {
    t?.(e());
  }, r, !0);
}
function mf(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function Up(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function $p(t) {
  var e = t;
  if (typeof e > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    e = navigator.userAgent || "";
  }
  return e.toLowerCase();
}
function _f(t, e) {
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
  var r = _f("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function Gu(t) {
  return t.replace(/_/g, ".");
}
function Ki(t, e) {
  var r = null, n = "-1";
  return mf(t, function(a) {
    var s = _f("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !s || a.brand ? !1 : (r = a, n = s[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = oS(a.versionTest.toLowerCase(), e) || n), n = Gu(n), !0);
  }), {
    preset: r,
    version: n
  };
}
function co(t, e) {
  var r = {
    brand: "",
    version: "-1"
  };
  return mf(t, function(n) {
    var a = Vp(e, n);
    return a ? (r.brand = n.id, r.version = n.versionAlias || a.version, r.version !== "-1") : !1;
  }), r;
}
function Vp(t, e) {
  return Up(t, function(r) {
    var n = r.brand;
    return _f("" + e.test, n.toLowerCase());
  });
}
var Kp = [{
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
}], Zp = [{
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
}], Jp = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], Qp = [{
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
function jp(t) {
  return !!Ki(Jp, t).preset;
}
function sS(t) {
  var e = $p(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: jp(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, s = Ki(Kp, e), u = s.preset, f = s.version, c = Ki(Qp, e), v = c.preset, p = c.version, h = Ki(Zp, e);
  if (n.chromium = !!h.preset, n.chromiumVersion = h.version, !n.chromium) {
    var d = Ki(ku, e);
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
    webview: !!co(Jp, r).brand || jp($p())
  }, f = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  u.webkit = !u.chromium && mf(ku, function(d) {
    return Vp(r, d);
  });
  var c = co(Zp, r);
  if (u.chromium = !!c.brand, u.chromiumVersion = c.version || "-1", !u.chromium) {
    var v = co(ku, r);
    u.webkit = !!v.brand, u.webkitVersion = v.version || "-1";
  }
  var p = Up(Qp, function(d) {
    return new RegExp("" + d.test, "g").exec(s);
  });
  f.name = p ? p.id : "";
  {
    var h = co(Kp, r);
    u.name = h.brand || u.name, u.version = h.brand && t ? t.uaFullVersion : h.version;
  }
  return u.webkit && (f.name = n ? "ios" : "mac"), f.name === "ios" && u.webview && (u.version = "-1"), f.version = Gu(f.version), u.version = Gu(u.version), f.majorVersion = parseInt(f.version, 10), u.majorVersion = parseInt(u.version, 10), {
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
function td(t, e, r) {
  for (var n = t.slice(), a = 0; a < r; ++a)
    n[a * r + e - 1] = 0, n[(e - 1) * r + a] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function We(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = sr(e), a = 0; a < e; ++a) {
    var s = e * a + a;
    if (!It(r[s], yr)) {
      for (var u = a + 1; u < e; ++u)
        if (r[e * a + u]) {
          cS(r, n, a, u, e);
          break;
        }
    }
    if (!It(r[s], yr))
      return [];
    vS(r, n, a, e, r[s]);
    for (var u = 0; u < e; ++u) {
      var f = u, c = u + a * e, v = r[c];
      !It(v, yr) || a === u || lS(r, n, f, a, e, -v);
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
function rd(t, e) {
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
function Xn(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function Ae(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = sr(r), a = Math.min(e, r), s = 0; s < a - 1; ++s) {
    for (var u = 0; u < a - 1; ++u)
      n[s * r + u] = t[s * e + u];
    n[(s + 1) * r - 1] = t[(s + 1) * e - 1], n[(r - 1) * r + s] = t[(e - 1) * e + s];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function Oo(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = sr(t);
  return e.forEach(function(a) {
    n = nr(n, a, t);
  }), n;
}
function nr(t, e, r) {
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
function Kt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] + e[a];
  return n;
}
function Et(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] - e[a];
  return n;
}
function hS(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function ed(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Gr(t, e, r) {
  r === void 0 && (r = e.length);
  var n = nr(t, e, r), a = n[r - 1];
  return n.map(function(s) {
    return s / a;
  });
}
function gS(t, e) {
  return nr(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function mS(t, e) {
  return nr(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function _S(t, e) {
  return nr(t, ga(e, 4));
}
function vo(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, a = e[1], s = a === void 0 ? 1 : a, u = e[2], f = u === void 0 ? 1 : u;
  return nr(t, [n, 0, 0, 0, 0, s, 0, 0, 0, 0, f, 0, 0, 0, 0, 1], 4);
}
function ha(t, e) {
  return Gr(ga(e, 3), Xn(t, 3));
}
function mu(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, a = e[1], s = a === void 0 ? 0 : a, u = e[2], f = u === void 0 ? 0 : u;
  return nr(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, s, f, 1], 4);
}
function Ov(t, e) {
  return nr(t, e, 4);
}
function ga(t, e) {
  var r = Math.cos(t), n = Math.sin(t), a = sr(e);
  return a[0] = r, a[1] = n, a[e] = -n, a[e + 1] = r, a;
}
function sr(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function xf(t, e) {
  for (var r = sr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[(e + 1) * a] = t[a];
  return r;
}
function qn(t, e) {
  for (var r = sr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[e * (e - 1) + a] = t[a];
  return r;
}
function yf(t, e, r, n, a, s, u, f) {
  var c = t[0], v = t[1], p = e[0], h = e[1], d = r[0], m = r[1], _ = n[0], x = n[1], y = a[0], S = a[1], w = s[0], R = s[1], O = u[0], I = u[1], E = f[0], D = f[1], T = [c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, -y * c, -S * c, -w * p, -R * p, -O * d, -I * d, -E * _, -D * _, -y * v, -S * v, -w * h, -R * h, -O * m, -I * m, -E * x, -D * x], P = We(T, 8);
  if (!P.length)
    return [];
  var B = nr(P, [y, S, w, R, O, I, E, D], 8);
  return B[8] = 1, Ae(pS(B), 3, 4);
}
var Qi = function() {
  return Qi = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Qi.apply(this, arguments);
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
function oa(t, e) {
  return e === void 0 && (e = 0), di(Si(t, e));
}
function yS(t, e) {
  var r = Gr(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function di(t) {
  var e = xS();
  return t.forEach(function(r) {
    var n = r.matrixFunction, a = r.functionValue;
    n && (e = n(e, a));
  }), e;
}
function Si(t, e) {
  e === void 0 && (e = 0);
  var r = br(t) ? t : wn(t);
  return r.map(function(n) {
    var a = Mp(n), s = a.prefix, u = a.value, f = null, c = s, v = "";
    if (s === "translate" || s === "translateX" || s === "translate3d") {
      var p = Pe(e) ? Qi(Qi({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, h = Yn(u).map(function(F, Y) {
        return Y === 0 && "x%" in p ? p["%"] = e["x%"] : Y === 1 && "y%" in p ? p["%"] = e["y%"] : p["%"] = e["o%"], er(F, p);
      }), d = h[0], m = h[1], _ = m === void 0 ? 0 : m, x = h[2], y = x === void 0 ? 0 : x;
      f = mu, v = [d, _, y];
    } else if (s === "translateY") {
      var S = Pe(e) ? Qi({ "%": e["y%"] }, e) : {
        "%": e
      }, _ = er(u, S);
      f = mu, v = [0, _, 0];
    } else if (s === "translateZ") {
      var y = parseFloat(u);
      f = mu, v = [0, 0, y];
    } else if (s === "scale" || s === "scale3d") {
      var w = Yn(u).map(function(F) {
        return parseFloat(F);
      }), R = w[0], O = w[1], I = O === void 0 ? R : O, E = w[2], D = E === void 0 ? 1 : E;
      f = vo, v = [R, I, D];
    } else if (s === "scaleX") {
      var R = parseFloat(u);
      f = vo, v = [R, 1, 1];
    } else if (s === "scaleY") {
      var I = parseFloat(u);
      f = vo, v = [1, I, 1];
    } else if (s === "scaleZ") {
      var D = parseFloat(u);
      f = vo, v = [1, 1, D];
    } else if (s === "rotate" || s === "rotateZ" || s === "rotateX" || s === "rotateY") {
      var T = ca(u), P = T.unit, B = T.value, H = P === "rad" ? B : B * Math.PI / 180;
      s === "rotate" || s === "rotateZ" ? (c = "rotateZ", f = _S) : s === "rotateX" ? f = gS : s === "rotateY" && (f = mS), v = H;
    } else if (s === "matrix3d")
      f = Ov, v = Yn(u).map(function(F) {
        return parseFloat(F);
      });
    else if (s === "matrix") {
      var W = Yn(u).map(function(F) {
        return parseFloat(F);
      });
      f = Ov, v = [
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
var Fu = function(t, e) {
  return Fu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Fu(t, e);
};
function bS(t, e) {
  Fu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var nd = typeof Map == "function" ? void 0 : /* @__PURE__ */ (function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
})(), id = /* @__PURE__ */ (function(t) {
  bS(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, nd) || this;
  }
  return e;
})(Wb);
function SS(t, e) {
  return va(t, e, nd);
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
var Lu = function() {
  return Lu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Lu.apply(this, arguments);
};
function CS() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
var Yo = /* @__PURE__ */ (function() {
  function t() {
    this._events = {};
  }
  var e = t.prototype;
  return e.on = function(r, n) {
    if (Pe(r))
      for (var a in r)
        this.on(a, r[a]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if (Pe(r))
      for (var a in r)
        this.off(a);
    else if (!n)
      this._events[r] = [];
    else {
      var s = this._events[r];
      if (s) {
        var u = tn(s, function(f) {
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
    u.push(Lu({
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
var Wu = function(t, e) {
  return Wu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Wu(t, e);
};
function wS(t, e) {
  Wu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var hi = function() {
  return hi = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, hi.apply(this, arguments);
};
function ES(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function Iv(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function po(t) {
  if (t) {
    if (Zr(t))
      return document.querySelector(t);
  } else return null;
  if (ff(t))
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
    var s = po(a.container);
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
      return p.top > u - c ? (h[1] > p.top || u < h[1]) && (d[1] = -1) : p.top + p.height < u + c && (h[1] < p.top + p.height || u > h[1]) && (d[1] = 1), p.left > s - c ? (h[0] > p.left || s < h[0]) && (d[0] = -1) : p.left + p.width < s + c && (h[0] < p.left + p.width || s > h[0]) && (d[0] = 1), !d[0] && !d[1] ? !1 : this._continueDrag(hi(hi({}, a), {
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
      container: po(s),
      direction: n
    });
  }, r._continueDrag = function(n) {
    var a = this, s, u = n.container, f = n.direction, c = n.throttleTime, v = n.useScroll, p = n.isDrag, h = n.inputEvent;
    if (!(!this._flag || p && this._isWait)) {
      var d = ia(), m = Math.max(c + this._prevTime - d, 0);
      if (m > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          a._continueDrag(n);
        }, m), !1;
      this._prevTime = d;
      var _ = this._getScrollPosition(f, n);
      this._prevScrollPos = _, p && (this._isWait = !0), v || (this._lock = !0);
      var x = {
        container: po(u),
        direction: f,
        inputEvent: h
      };
      return (s = n.requestScroll) === null || s === void 0 || s.call(n, x), this.emit("scroll", x), this._isWait = !1, v || this.checkScroll(hi(hi({}, n), {
        prevScrollPos: _,
        direction: f,
        inputEvent: h
      }));
    }
  }, r._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var a = n.checkScrollEvent;
    if (a) {
      var s = a === !0 ? Iv : a, u = po(n.container);
      a === !0 && (u === document.body || u === document.documentElement) ? this._unregister = Iv(window, this._onScroll) : this._unregister = s(u, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, e;
})(Yo);
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
function Kr(t) {
  return It(t, yr);
}
function RS(t, e) {
  return t.every(function(r, n) {
    return Kr(r - e[n]) === 0;
  });
}
function TS(t, e) {
  return !Kr(t[0] - e[0]) && !Kr(t[1] - e[1]);
}
function ad(t) {
  return t.length < 3 ? 0 : Math.abs(Ib(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function Pv(t, e) {
  var r = e.width, n = e.height, a = e.left, s = e.top, u = Un(t), f = u.minX, c = u.minY, v = u.maxX, p = u.maxY, h = r / (v - f), d = n / (p - c);
  return t.map(function(m) {
    return [a + (m[0] - f) * h, s + (m[1] - c) * d];
  });
}
function Un(t) {
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
function Nu(t, e, r) {
  var n = t[0], a = t[1], s = Un(e), u = s.minX, f = s.maxX, c = [[u, a], [f, a]], v = Io(c[0], c[1]), p = Hu(e), h = [];
  if (p.forEach(function(_) {
    var x = Io(_[0], _[1]), y = _[0];
    if (RS(v, x))
      h.push({
        pos: t,
        line: _,
        type: "line"
      });
    else {
      var S = od(bf(v, x), [c, _]);
      S.forEach(function(w) {
        _.some(function(R) {
          return TS(R, w);
        }) ? h.push({
          pos: w,
          line: _,
          type: "point"
        }) : Kr(y[1] - a) !== 0 && h.push({
          pos: w,
          line: _,
          type: "intersection"
        });
      });
    }
  }), Jr(h, function(_) {
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
          var w = Jr(S, function(I) {
            return I[1] !== a;
          }), R = m[x[0]], O = w[1] > a ? 1 : -1;
          R ? R !== O && ++d : m[x[0]] = O;
        }
      }
  }), d % 2 === 1;
}
function Io(t, e) {
  var r = t[0], n = t[1], a = e[0], s = e[1], u = a - r, f = s - n;
  Math.abs(u) < yr && (u = 0), Math.abs(f) < yr && (f = 0);
  var c = 0, v = 0, p = 0;
  return u ? f ? (c = -f / u, v = 1, p = -c * r - n) : (v = 1, p = -n) : f && (c = -1, p = r), [c, v, p];
}
function bf(t, e) {
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
function od(t, e) {
  var r = e.map(function(h) {
    return [0, 1].map(function(d) {
      return [Math.min(h[0][d], h[1][d]), Math.max(h[0][d], h[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], s = a[0], u = a[1];
    if (Kr(s - t[1][0])) {
      if (!Kr(u - t[1][1])) {
        var v = Math.max.apply(Math, r.map(function(h) {
          return h[0][0];
        })), p = Math.min.apply(Math, r.map(function(h) {
          return h[0][1];
        }));
        if (Kr(v - p) > 0)
          return [];
        n = [[v, u], [p, u]];
      }
    } else {
      var f = Math.max.apply(Math, r.map(function(h) {
        return h[1][0];
      })), c = Math.min.apply(Math, r.map(function(h) {
        return h[1][1];
      }));
      if (Kr(f - c) > 0)
        return [];
      n = [[s, f], [s, c]];
    }
  }
  return n.length || (n = t.filter(function(h) {
    var d = h[0], m = h[1];
    return r.every(function(_) {
      return 0 <= Kr(d - _[0][0]) && 0 <= Kr(_[0][1] - d) && 0 <= Kr(m - _[1][0]) && 0 <= Kr(_[1][1] - m);
    });
  })), n.map(function(h) {
    return [Kr(h[0]), Kr(h[1])];
  });
}
function Hu(t) {
  return MS(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function OS(t, e) {
  var r = t.slice(), n = e.slice();
  Sv(r) === -1 && r.reverse(), Sv(n) === -1 && n.reverse();
  var a = Hu(r), s = Hu(n), u = a.map(function(p) {
    return Io(p[0], p[1]);
  }), f = s.map(function(p) {
    return Io(p[0], p[1]);
  }), c = [];
  u.forEach(function(p, h) {
    var d = a[h], m = [];
    f.forEach(function(_, x) {
      var y = bf(p, _), S = od(y, [d, s[x]]);
      m.push.apply(m, S.map(function(w) {
        return {
          index1: h,
          index2: x,
          pos: w,
          type: "intersection"
        };
      }));
    }), m.sort(function(_, x) {
      return Qe(d[0], _.pos) - Qe(d[0], x.pos);
    }), c.push.apply(c, m), Nu(d[1], n) && c.push({
      index1: h,
      index2: -1,
      pos: d[1],
      type: "inside"
    });
  }), s.forEach(function(p, h) {
    if (Nu(p[1], r)) {
      var d = !1, m = tn(c, function(_) {
        var x = _.index2;
        return x === h ? (d = !0, !1) : !!d;
      });
      m === -1 && (d = !1, m = tn(c, function(_) {
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
  return ad(r);
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
var Yu = function(t, e) {
  return Yu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Yu(t, e);
};
function AS(t, e) {
  Yu(t, e);
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
function _u(t) {
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
function ho(t) {
  return t ? t.touches ? kS(t.touches) : [sd(t)] : [];
}
function GS(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function Av(t, e, r) {
  var n = r.length, a = ji(t, n), s = a.clientX, u = a.clientY, f = a.originalClientX, c = a.originalClientY, v = ji(e, n), p = v.clientX, h = v.clientY, d = ji(r, n), m = d.clientX, _ = d.clientY, x = s - p, y = u - h, S = s - m, w = u - _;
  return {
    clientX: f,
    clientY: c,
    deltaX: x,
    deltaY: y,
    distX: S,
    distY: w
  };
}
function xu(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function kS(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(sd(t[n]));
  return r;
}
function sd(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function ji(t, e) {
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
var yu = /* @__PURE__ */ (function() {
  function t(e) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = e, this.prevClients = e, this.length = e.length;
  }
  return t.prototype.getAngle = function(e) {
    return e === void 0 && (e = this.prevClients), _u(e);
  }, t.prototype.getRotation = function(e) {
    return e === void 0 && (e = this.prevClients), _u(e) - _u(this.startClients);
  }, t.prototype.getPosition = function(e, r) {
    e === void 0 && (e = this.prevClients);
    var n = Av(e || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, s = n.deltaY;
    return this.movement += Math.sqrt(a * a + s * s), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, a = Math.min(this.length, r.length), s = [], u = 0; u < a; ++u)
      s[u] = Av([e[u]], [r[u]], [n[u]]);
    return s;
  }, t.prototype.getMovement = function(e) {
    var r = this.movement;
    if (!e)
      return r;
    var n = ji(e, this.length), a = ji(this.prevClients, this.length), s = n.clientX - a.clientX, u = n.clientY - a.clientY;
    return Math.sqrt(s * s + u * u) + r;
  }, t.prototype.getDistance = function(e) {
    return e === void 0 && (e = this.prevClients), xu(e);
  }, t.prototype.getScale = function(e) {
    return e === void 0 && (e = this.prevClients), xu(e) / xu(this.startClients);
  }, t.prototype.move = function(e, r) {
    this.startClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    });
  }, t;
})(), Bv = ["textarea", "input"], FS = /* @__PURE__ */ (function(t) {
  AS(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(d, m) {
      if (m === void 0 && (m = !0), !(!a.flag && d.cancelable === !1)) {
        var _ = d.type.indexOf("drag") >= -1;
        if (!(a.flag && _)) {
          a._isDragAPI = !0;
          var x = a.options, y = x.container, S = x.pinchOutside, w = x.preventWheelClick, R = x.preventRightClick, O = x.preventDefault, I = x.checkInput, E = x.dragFocusedInput, D = x.preventClickEventOnDragStart, T = x.preventClickEventOnDrag, P = x.preventClickEventByCondition, B = a._useTouch, H = !a.flag;
          if (a._isSecondaryButton = d.which === 3 || d.button === 2, w && (d.which === 2 || d.button === 1) || R && (d.which === 3 || d.button === 2))
            return a.stop(), !1;
          if (H) {
            var W = a._window.document.activeElement, F = d.target;
            if (F) {
              var Y = F.tagName.toLowerCase(), X = Bv.indexOf(Y) > -1, j = F.isContentEditable;
              if (X || j) {
                if (I || !E && W === F)
                  return !1;
                if (W && (W === F || j && W.isContentEditable && W.contains(F)))
                  if (E)
                    F.blur();
                  else
                    return !1;
              } else if ((O || d.type === "touchstart") && W) {
                var rt = W.tagName.toLowerCase();
                (W.isContentEditable || Bv.indexOf(rt) > -1) && W.blur();
              }
              (D || T || P) && Ir(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new yu(ho(d))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = m, a._dragFlag = !0, a._prevInputEvent = d, a.data = {}, a.doubleFlag = ia() - a.prevTime < 200, a._isMouseEvent = GS(d), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
            var K = a._preventMouseEvent || a.emit("dragStart", xr(xr({ data: a.data, datas: a.data, inputEvent: d, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, isTrusted: m, isDouble: a.doubleFlag }, a.getCurrentStore().getPosition()), { preventDefault: function() {
              d.preventDefault();
            }, preventDrag: function() {
              a._dragFlag = !1;
            } }));
            K === !1 && a.stop(), a._isMouseEvent && a.flag && O && d.preventDefault();
          }
          if (!a.flag)
            return !1;
          var at = 0;
          if (H ? (a._attchDragEvent(), B && S && (at = setTimeout(function() {
            Ir(y, "touchstart", a.onDragStart, {
              passive: !1
            });
          }))) : B && S && wr(y, "touchstart", a.onDragStart), a.flag && zS(d)) {
            if (clearTimeout(at), H && d.touches.length !== d.changedTouches.length)
              return;
            a.pinchFlag || a.onPinchStart(d);
          }
        }
      }
    }, a.onDrag = function(d, m) {
      if (a.flag) {
        var _ = a.options.preventDefault;
        !a._isMouseEvent && _ && d.preventDefault(), a._prevInputEvent = d;
        var x = ho(d), y = a.moveClients(x, d, !1);
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
        var m = a.options, _ = m.pinchOutside, x = m.container, y = m.preventClickEventOnDrag, S = m.preventClickEventOnDragStart, w = m.preventClickEventByCondition, R = a.isDrag;
        (y || S || w) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !w && !S && y && !R && a._allowClickEvent(), a._useTouch && _ && wr(x, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(d);
        var O = d?.touches ? ho(d) : [], I = O.length;
        I === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new yu(O));
        var E = a._getPosition(), D = ia(), T = !R && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = R || T ? 0 : D, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", xr({ data: a.data, datas: a.data, isDouble: T, isDrag: R, isClick: !R, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: d, isTrusted: a._isTrusted }, E)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
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
    a._window = Bp(u) ? u : Cn(u), a.options = xr({ checkInput: !1, container: u && !("document" in u) ? Cn(u) : u, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var f = a.options, c = f.container, v = f.events, p = f.checkWindowBlur;
    if (a._useDrag = v.indexOf("drag") > -1, a._useTouch = v.indexOf("touch") > -1, a._useMouse = v.indexOf("mouse") > -1, a.targets = s, a._useDrag && s.forEach(function(d) {
      Ir(d, "dragstart", a.onDragStart);
    }), a._useMouse && (s.forEach(function(d) {
      Ir(d, "mousedown", a.onDragStart), Ir(d, "mousemove", a._passCallback);
    }), Ir(c, "contextmenu", a._onContextMenu)), p && Ir(Cn(), "blur", a.onBlur), a._useTouch) {
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
      var s = new yu(ho(r));
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
})(Yo);
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
    return (s ? Yn(s) : [""]).map(function(u) {
      var f = u.trim();
      return f.indexOf("@") === 0 ? f : f.indexOf(":global") > -1 ? f.replace(/\:global/g, "") : f.indexOf(":host") > -1 ? "".concat(f.replace(/\:host/g, ".".concat(t))) : f ? ".".concat(t, " ").concat(f) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function XS(t, e, r, n, a) {
  var s = Ri(n), u = s.createElement("style");
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
var Xu = function() {
  return Xu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Xu.apply(this, arguments);
};
function US(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function ud(t, e) {
  var r = qS(e), n = r.className;
  return Xb(function(a, s) {
    var u = a.className, f = u === void 0 ? "" : u;
    a.cspNonce;
    var c = US(a, ["className", "cspNonce"]), v = nS();
    return iS(s, function() {
      return v.current;
    }, []), qp(function() {
      var p = r.inject(v.current, {
        nonce: a.cspNonce
      });
      return function() {
        p.destroy();
      };
    }, []), Oe(t, Xu({
      ref: v,
      "data-styled-id": n,
      className: "".concat(f, " ").concat(n)
    }, c));
  });
}
var qu = function(t, e) {
  return qu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, qu(t, e);
};
function ma(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  qu(t, e);
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
function ot(t, e, r) {
  if (arguments.length === 2) for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function _a(t, e) {
  return z({ events: [], props: [], name: t }, e);
}
var ZS = ["n", "w", "s", "e"], Sf = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function JS(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function QS(t) {
  var e = JS(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var Oi = fS(), fd = Oi.browser.webkit, ld = fd && (function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
})(), cd = Oi.browser.name, vd = parseInt(Oi.browser.version, 10), jS = cd === "chrome", tC = Oi.browser.chromium, rC = parseInt(Oi.browser.chromiumVersion, 10) || 0, eC = jS && vd >= 109 || tC && rC >= 109, nC = cd === "firefox", iC = parseInt(Oi.browser.webkitVersion, 10) >= 612 || vd >= 15, Cf = "moveable-", aC = Sf.map(function(t) {
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

`).concat(ld ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), sC = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Uu = 1e-4, Xr = 1e-7, go = 1e-9, $u = Math.pow(10, 10), zv = -$u, uC = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, wf = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, pd = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, dd = [
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
function xa(t, e, r, n, a, s) {
  var u, f;
  s === void 0 && (s = "draggable");
  var c = (f = (u = e.gestos[s]) === null || u === void 0 ? void 0 : u.move(r, t.inputEvent)) !== null && f !== void 0 ? f : {}, v = c.originalDatas || c.datas, p = v[s] || (v[s] = {});
  return z(z({}, c), { isPinch: !!n, parentEvent: !0, datas: p, originalDatas: t.originalDatas });
}
var Ci = /* @__PURE__ */ (function() {
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
function yi(t, e, r, n) {
  var a = t.length === 16, s = a ? 4 : 3, u = Kn(t, r, n, s), f = k(u, 4), c = k(f[0], 2), v = c[0], p = c[1], h = k(f[1], 2), d = h[0], m = h[1], _ = k(f[2], 2), x = _[0], y = _[1], S = k(f[3], 2), w = S[0], R = S[1], O = k(dr(t, e, s), 2), I = O[0], E = O[1], D = Math.min(v, d, x, w), T = Math.min(p, m, y, R), P = Math.max(v, d, x, w), B = Math.max(p, m, y, R);
  v = v - D || 0, d = d - D || 0, x = x - D || 0, w = w - D || 0, p = p - T || 0, m = m - T || 0, y = y - T || 0, R = R - T || 0, I = I - D || 0, E = E - T || 0;
  var H = t[0], W = t[s + 1], F = Hr(H * W);
  return {
    left: D,
    top: T,
    right: P,
    bottom: B,
    origin: [I, E],
    pos1: [v, p],
    pos2: [d, m],
    pos3: [x, y],
    pos4: [w, R],
    direction: F
  };
}
function hd(t, e) {
  var r = e.clientX, n = e.clientY, a = e.datas, s = t.state, u = s.moveableClientRect, f = s.rootMatrix, c = s.is3d, v = s.pos1, p = u.left, h = u.top, d = c ? 4 : 3, m = k(Et(Di(f, [r - p, n - h], d), v), 2), _ = m[0], x = m[1], y = k(Ne({ datas: a, distX: _, distY: x }), 2), S = y[0], w = y[1];
  return [S, w];
}
function Vn(t, e) {
  var r = e.datas, n = t.state, a = n.allMatrix, s = n.beforeMatrix, u = n.is3d, f = n.left, c = n.top, v = n.origin, p = n.offsetMatrix, h = n.targetMatrix, d = n.transformOrigin, m = u ? 4 : 3;
  r.is3d = u, r.matrix = a, r.targetMatrix = h, r.beforeMatrix = s, r.offsetMatrix = p, r.transformOrigin = d, r.inverseMatrix = We(a, m), r.inverseBeforeMatrix = We(s, m), r.absoluteOrigin = Xn(Kt([f, c], v), m), r.startDragBeforeDist = Gr(r.inverseBeforeMatrix, r.absoluteOrigin, m), r.startDragDist = Gr(r.inverseMatrix, r.absoluteOrigin, m);
}
function fC(t) {
  return yi(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Xo(t, e, r) {
  var n = e.datas, a = e.originalDatas.beforeRenderable, s = n.transformIndex, u = a.nextTransforms, f = u.length, c = a.nextTransformAppendedIndexes, v = -1;
  s === -1 ? (r === "translate" ? v = 0 : r === "rotate" && (v = tn(u, function(m) {
    return m.match(/scale\(/g);
  })), v === -1 && (v = u.length), n.transformIndex = v) : Jr(c, function(m) {
    return m.index === s && m.functionName === r;
  }) ? v = s : v = s + c.filter(function(m) {
    return m.index < s;
  }).length;
  var p = zw(u, t.state, v), h = p.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = p.beforeFunctionTexts, n.afterFunctionTexts = p.afterFunctionTexts, n.beforeTransform = p.beforeFunctionMatrix, n.beforeTransform2 = p.beforeFunctionMatrix2, n.targetTansform = p.targetFunctionMatrix, n.afterTransform = p.afterFunctionMatrix, n.afterTransform2 = p.afterFunctionMatrix2, n.targetAllTransform = p.allFunctionMatrix, h.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : f > v && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = ot(ot([], k(c), !1), [{
    functionName: r,
    index: v,
    isAppend: !0
  }], !1));
}
function qo(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function lC(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = k(md({ datas: e, distX: r, distY: n }), 2), s = a[0], u = a[1], f = gd(e, dS([s, u], 4));
  return Gr(f, Xn([0, 0, 0], 4), 4);
}
function gd(t, e, r) {
  var n = t.beforeTransform, a = t.afterTransform, s = t.beforeTransform2, u = t.afterTransform2, f = t.targetAllTransform, c = r ? nr(f, e, 4) : nr(e, f, 4), v = nr(We(r ? s : n, 4), c, 4), p = nr(v, We(r ? u : a, 4), 4);
  return p;
}
function md(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = e.inverseBeforeMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return Et(Gr(a, Kt(f, [r, n]), c), u);
}
function Ne(t, e) {
  var r = t.datas, n = t.distX, a = t.distY, s = r.inverseBeforeMatrix, u = r.inverseMatrix, f = r.is3d, c = r.startDragBeforeDist, v = r.startDragDist, p = r.absoluteOrigin, h = f ? 4 : 3;
  return Et(Gr(e ? s : u, Kt(p, [n, a]), h), e ? c : v);
}
function cC(t, e) {
  var r = t.datas, n = t.distX, a = t.distY;
  r.beforeMatrix;
  var s = r.matrix, u = r.is3d;
  r.startDragBeforeDist;
  var f = r.startDragDist, c = r.absoluteOrigin, v = u ? 4 : 3;
  return Et(Gr(s, Kt(f, [n, a]), v), c);
}
function vC(t, e, r, n, a, s) {
  return n === void 0 && (n = e), a === void 0 && (a = r), s === void 0 && (s = [0, 0]), t ? t.map(function(u, f) {
    var c = ca(u), v = c.value, p = c.unit, h = f ? a : n, d = f ? r : e;
    if (u === "%" || isNaN(v)) {
      var m = h ? s[f] / h : 0;
      return d * m;
    } else if (p !== "%")
      return v;
    return d * v / 100;
  }) : s;
}
function _d(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function pC(t, e) {
  return _d(e).map(function(r) {
    return t[r];
  });
}
function bu(t, e) {
  var r = (e + 1) / 2;
  return [
    Ro(t[0][0], t[1][0], r, 1 - r),
    Ro(t[0][1], t[1][1], r, 1 - r)
  ];
}
function Dr(t, e) {
  var r = bu([t[0], t[1]], e[0]), n = bu([t[2], t[3]], e[0]);
  return bu([r, n], e[1]);
}
function dC(t, e, r, n, a, s) {
  var u = Kn(e, r, n, a), f = Dr(u, s), c = t[0] - f[0], v = t[1] - f[1];
  return [c, v];
}
function ya(t, e, r, n) {
  return nr(t, ra(e, n, r), n);
}
function hC(t, e, r, n) {
  var a = t.transformOrigin, s = t.offsetMatrix, u = t.is3d, f = u ? 4 : 3, c;
  if (Zr(r)) {
    var v = e.beforeTransform, p = e.afterTransform;
    n ? c = Ae(oa(r), 4, f) : c = Ae(nr(nr(v, oa([r]), 4), p, 4), 4, f);
  } else
    c = r;
  return ya(s, c, a, f);
}
function gC(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, s = t.targetMatrix, u = t.targetAllTransform, f = a ? 4 : 3;
  return ya(n, nr(u || s, xf(e, f), f), r, f);
}
function Uo(t, e) {
  var r = Ii(e);
  return {
    setTransform: function(n, a) {
      a === void 0 && (a = -1), r.startTransforms = br(n) ? n : wn(n), Vu(t, e, a);
    },
    setTransformIndex: function(n) {
      Vu(t, e, n);
    }
  };
}
function $o(t, e, r) {
  var n = Ii(e), a = n.startTransforms;
  Vu(t, e, tn(a, function(s) {
    return s.indexOf("".concat(r, "(")) === 0;
  }));
}
function Vu(t, e, r) {
  var n = Ii(e), a = e.datas;
  if (a.transformIndex = r, r !== -1) {
    var s = n.startTransforms[r];
    if (s) {
      var u = t.state, f = Si([s], {
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
function Ef(t, e) {
  var r = Ii(t);
  r.nextTransforms = wn(e);
}
function Ii(t) {
  return t.originalDatas.beforeRenderable;
}
function Po(t) {
  var e = t.originalDatas.beforeRenderable;
  return e.nextTransforms;
}
function mo(t) {
  return (Po(t) || []).join(" ");
}
function _o(t) {
  return Ii(t).nextStyle;
}
function xd(t, e, r, n, a) {
  Ef(a, e);
  var s = Nr.drag(t, xa(a, t.state, r, n)), u = s ? s.transform : e;
  return z(z({ transform: e, drag: s }, Yr({
    transform: u
  }, a)), { afterTransform: u });
}
function Df(t, e, r, n, a, s) {
  var u = hC(t.state, a, e, s), f = xC(t, r, n, u);
  return f;
}
function yd(t, e, r, n, a, s, u) {
  var f = Df(t, e, r, a, s, u), c = t.state, v = c.left, p = c.top, h = t.props.groupable, d = h ? v : 0, m = h ? p : 0, _ = Et(n, f);
  return Et(_, [d, m]);
}
function mC(t, e, r, n, a, s, u) {
  var f = yd(t, e, r, n, a, s, u);
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
  return dr(n, v, c);
}
function yC(t, e, r) {
  var n = r.fixedDirection, a = r.fixedPosition, s = r.fixedOffset;
  return yd(t, "rotate(".concat(e, "deg)"), n, a, s, r);
}
function bC(t, e, r, n, a, s) {
  var u = t.props.groupable, f = t.state, c = f.transformOrigin, v = f.offsetMatrix, p = f.is3d, h = f.width, d = f.height, m = f.left, _ = f.top, x = s.fixedDirection, y = s.nextTargetMatrix || f.targetMatrix, S = p ? 4 : 3, w = vC(a, e, r, h, d, c), R = u ? m : 0, O = u ? _ : 0, I = ya(v, y, w, S), E = dC(n, I, e, r, S, x);
  return Et(E, [R, O]);
}
function SC(t, e) {
  return Dr(xe(t.state), e);
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
function bd(t, e, r) {
  for (var n = t, a = [], s = vf(t) || Mn(t), u = !r && t === e || t === s, f = u, c = !1, v = 3, p, h, d, m = !1, _ = ua(e, e, !0).offsetParent, x = 1; n && !f; ) {
    f = u;
    var y = Qr(n), S = y("position"), w = qd(n), R = S === "fixed", O = EC(y), I = hS(Sw(w)), E = void 0, D = !1, T = !1, P = 0, B = 0, H = 0, W = 0, F = {
      hasTransform: !1,
      fixedContainer: null
    };
    R && (m = !0, F = Mw(n), _ = F.fixedContainer);
    var Y = I.length;
    !c && (Y === 16 || O.length) && (c = !0, v = 4, tf(a), d && (d = Ae(d, 3, 4))), c && Y === 9 && (I = Ae(I, 3, 4));
    var X = Dw(n, t), j = X.tagName, rt = X.hasOffset, K = X.isSVG, at = X.origin, it = X.targetOrigin, $ = X.offset, lt = k($, 2), ht = lt[0], ut = lt[1];
    j === "svg" && !n.ownerSVGElement && d && (a.push({
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
      E = F.fixedContainer, D = !0;
    else {
      var st = ua(n, e, !1, !0, y), pt = st.offsetZoom;
      if (E = st.offsetParent, D = st.isEnd, T = st.isStatic, x *= pt, (st.isCustomElement || pt !== 1) && T)
        ht -= E.offsetLeft, ut -= E.offsetTop;
      else if (nC || eC) {
        var xt = st.parentSlotElement;
        if (xt) {
          for (var Ot = E, Yt = 0, nt = 0; Ot && wC(Ot); )
            Yt += Ot.offsetLeft, nt += Ot.offsetTop, Ot = Ot.offsetParent;
          ht -= Yt, ut -= nt;
        }
      }
    }
    if (fd && !iC && rt && !K && T && (S === "relative" || S === "static") && (ht -= E.offsetLeft, ut -= E.offsetTop, u = u || D), R)
      rt && F.hasTransform && (H = E.clientLeft, W = E.clientTop);
    else if (rt && _ !== E && (P = E.clientLeft, B = E.clientTop), rt && E === s) {
      var ft = Ud(n, !1);
      ht += ft[0], ut += ft[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: ra(I, v, at)
    }), O.length && (a.push({
      type: "offset",
      target: n,
      matrix: sr(v)
    }), a.push({
      type: "target",
      target: n,
      matrix: ra(oa(O), v, at)
    })), rt) {
      var Xt = n === t, St = Xt ? 0 : n.scrollLeft, Dt = Xt ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: qn([
          ht - St + P - H,
          ut - Dt + B - W
        ], v)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: at
      });
    if (ct !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: ra(xf([ct, ct], v), v, [0, 0])
    }), d || (d = I), p || (p = at), h || (h = it), f || R)
      break;
    n = E, u = D, (!r || n === s) && (f = u);
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
var Ln = null, Wn = null, gi = null;
function wi(t) {
  t ? (window.Map && (Ln = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map()), gi = []) : (Ln = null, gi = null, Wn = null);
}
function DC(t) {
  var e = Wn?.get(t);
  if (e)
    return e;
  var r = ea(t, !0);
  return Wn && Wn.set(t, r), r;
}
function MC(t, e) {
  if (gi) {
    var r = Jr(gi, function(a) {
      return a[0][0] == t && a[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = bd(t, e, !0);
  return gi && gi.push([[t, e], n]), n;
}
function Qr(t) {
  var e = Ln?.get(t);
  if (!e) {
    var r = Cn(t).getComputedStyle(t);
    if (!Ln)
      return function(s) {
        return r[s];
      };
    e = {
      style: r,
      cached: {}
    }, Ln.set(t, e);
  }
  var n = e.cached, a = e.style;
  return function(s) {
    return s in n || (n[s] = a[s]), n[s];
  };
}
function Ie(t, e, r) {
  var n = r.originalDatas;
  n.groupable = n.groupable || {};
  var a = n.groupable;
  a.childDatas = a.childDatas || [];
  var s = a.childDatas;
  return t.moveables.map(function(u, f) {
    return s[f] = s[f] || {}, s[f][e] = s[f][e] || {}, z(z({}, r), { isRequestChild: !0, datas: s[f][e], originalDatas: s[f] });
  });
}
function Su(t, e, r, n, a, s, u) {
  var f = !!r.match(/Start$/g), c = !!r.match(/End$/g), v = a.isPinch, p = a.datas, h = Ie(t, e.name, a), d = t.moveables, m = [], _ = h.map(function(x, y) {
    var S = d[y], w = S.state, R = w.gestos, O = x;
    if (f)
      O = new Ci(u).dragStart(n, x), m.push(O);
    else {
      if (R[u] || (R[u] = p.childGestos[y]), !R[u])
        return;
      O = xa(x, w, n, v, s, u), m.push(O);
    }
    var I = e[r](S, z(z({}, O), { parentFlag: !0 }));
    return c && (R[u] = null), I;
  });
  return f && (p.childGestos = d.map(function(x) {
    return x.state.gestos[u];
  })), {
    eventParams: _,
    childEvents: m
  };
}
function je(t, e, r, n, a, s) {
  a === void 0 && (a = function(p, h) {
    return h;
  });
  var u = !!r.match(/End$/g), f = Ie(t, e.name, n), c = t.moveables, v = f.map(function(p, h) {
    var d = c[h], m = p;
    m = a(d, p);
    var _ = e[r](d, z(z({}, m), { parentFlag: !0 }));
    return u && (d.state.gestos = {}), _;
  });
  return v;
}
function Ao(t, e, r, n) {
  var a = r.fixedDirection, s = r.fixedPosition, u = n.datas.startPositions || xe(e.state), f = Dr(u, a), c = k(Gr(ga(-t.rotation / 180 * Math.PI, 3), [f[0] - s[0], f[1] - s[1], 1], 3), 2), v = c[0], p = c[1];
  return n.datas.originalX = v, n.datas.originalY = p, n;
}
function Sd(t, e, r, n) {
  var a = t.getState(), s = a.renderPoses, u = a.rotation, f = a.direction, c = $n(t.props, e).zoom, v = ta(u / Math.PI * 180), p = {}, h = t.renderState;
  h.renderDirectionMap || (h.renderDirectionMap = {});
  var d = h.renderDirectionMap;
  r.forEach(function(_) {
    var x = _.dir;
    p[x] = !0;
  });
  var m = Hr(f);
  return r.map(function(_) {
    var x = _.data, y = _.classNames, S = _.dir, w = wf[S];
    if (!w || !p[S])
      return null;
    d[S] = !0;
    var R = (It(v, 15) + m * pd[S] + 720) % 180, O = {};
    return rn(x).forEach(function(I) {
      O["data-".concat(I)] = x[I];
    }), n.createElement("div", z({ className: wt.apply(void 0, ot(["control", "direction", S, e], k(y), !1)), "data-rotation": R, "data-direction": S }, O, { key: "direction-".concat(S), style: ko.apply(void 0, ot([u, c], k(w.map(function(I) {
      return s[I];
    })), !1)) }));
  });
}
function Cd(t, e, r, n) {
  var a = $n(t.props, r), s = a.renderDirections, u = s === void 0 ? e : s, f = a.displayAroundControls;
  if (!u)
    return [];
  var c = u === !0 ? Sf : u;
  return ot(ot([], k(f ? Md(t, n, r, c) : []), !1), k(Sd(t, r, c.map(function(v) {
    return {
      data: {},
      classNames: [],
      dir: v
    };
  }), n)), !1);
}
function sa(t, e, r, n, a, s) {
  for (var u = [], f = 6; f < arguments.length; f++)
    u[f - 6] = arguments[f];
  var c = _r(r, n), v = e ? It(c / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(s), className: wt.apply(void 0, ot(["line", "direction", e ? "edge" : "", e], k(u), !1)), "data-rotation": v, "data-line-key": s, "data-direction": e, style: Ji(r, n, a, c) });
}
function wd(t, e, r, n, a) {
  var s = r === !0 ? ZS : r;
  return s.map(function(u, f) {
    var c = k(wf[u], 2), v = c[0], p = c[1];
    if (p != null)
      return sa(t, u, n[v], n[p], a, "".concat(e, "Edge").concat(f), e);
  }).filter(Boolean);
}
function Ed(t) {
  return function(e, r) {
    var n = $n(e.props, t).edge;
    return n && (n === !0 || n.length) ? ot(ot([], k(wd(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), k(RC(e, t, r)), !1) : Dd(e, t, r);
  };
}
function Dd(t, e, r) {
  return Cd(t, Sf, e, r);
}
function RC(t, e, r) {
  return Cd(t, ["nw", "ne", "sw", "se"], e, r);
}
function Md(t, e, r, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var s = t.getState(), u = s.renderPoses, f = s.rotation, c = s.direction, v = a.renderDirectionMap, p = t.props.zoom, h = Hr(c), d = f / Math.PI * 180;
  return (n || rn(v)).map(function(m) {
    var _ = wf[m];
    if (!_)
      return null;
    var x = (It(d, 15) + h * pd[m] + 720) % 180, y = ["around-control"];
    return r && y.push("direction", r), e.createElement("div", { className: wt.apply(void 0, ot([], k(y), !1)), "data-rotation": x, "data-direction": m, key: "direction-around-".concat(m), style: ko.apply(void 0, ot([f, p], k(_.map(function(S) {
      return u[S];
    })), !1)) });
  });
}
function Mf(t, e, r) {
  var n = t || {}, a = n.position, s = a === void 0 ? "client" : a, u = n.left, f = u === void 0 ? -1 / 0 : u, c = n.top, v = c === void 0 ? -1 / 0 : c, p = n.right, h = p === void 0 ? 1 / 0 : p, d = n.bottom, m = d === void 0 ? 1 / 0 : d, _ = {
    position: s,
    left: f,
    top: v,
    right: h,
    bottom: m
  };
  return {
    vertical: Gv(_, e, !0),
    horizontal: Gv(_, r, !1)
  };
}
function Vo(t, e) {
  var r = t.state, n = r.containerClientRect, a = n.clientHeight, s = n.clientWidth, u = n.clientLeft, f = n.clientTop, c = r.snapOffset, v = c.left, p = c.top, h = c.right, d = c.bottom, m = e || t.props.bounds || {}, _ = m.position || "client", x = _ === "css", y = m.left, S = y === void 0 ? -1 / 0 : y, w = m.top, R = w === void 0 ? -1 / 0 : w, O = m.right, I = O === void 0 ? x ? -1 / 0 : 1 / 0 : O, E = m.bottom, D = E === void 0 ? x ? -1 / 0 : 1 / 0 : E;
  return x && (I = s + h - v - I, D = a + d - p - D), {
    left: S + v - u,
    right: I + v - u,
    top: R + p - f,
    bottom: D + p - f
  };
}
function TC(t, e, r) {
  var n = Vo(t), a = n.left, s = n.top, u = n.right, f = n.bottom, c = k(r, 2), v = c[0], p = c[1], h = k(Et(r, e), 2), d = h[0], m = h[1];
  tt(d) < Xr && (d = 0), tt(m) < Xr && (m = 0);
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
    var w = m / d, R = r[1] - w * v, O = 0, I = 0, E = !1;
    x && u <= v ? (O = w * u + R, I = u, E = !0) : !x && v <= a && (O = w * a + R, I = a, E = !0), E && (O < s || O > f) && (E = !1), E || (_ && f <= p ? (O = f, I = (O - R) / w, E = !0) : !_ && p <= s && (O = s, I = (O - R) / w, E = !0)), E && (y.isBound = !0, y.pos = I, y.offset = v - I, S.isBound = !0, S.pos = O, S.offset = p - O);
  }
  return {
    vertical: y,
    horizontal: S
  };
}
function Gv(t, e, r) {
  var n = t[r ? "left" : "top"], a = t[r ? "right" : "bottom"], s = Math.min.apply(Math, ot([], k(e), !1)), u = Math.max.apply(Math, ot([], k(e), !1)), f = [];
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
function kv(t, e, r) {
  var n = r ? t.map(function(a) {
    return ha(a, r);
  }) : t;
  return n.some(function(a) {
    return a[0] < e.left && tt(a[0] - e.left) > 0.1 || a[0] > e.right && tt(a[0] - e.right) > 0.1 || a[1] < e.top && tt(a[1] - e.top) > 0.1 || a[1] > e.bottom && tt(a[1] - e.bottom) > 0.1;
  });
}
function OC(t, e, r) {
  var n = _e(t), a = Math.sqrt(n * n - e * e) || 0;
  return [a, -a].sort(function(s, u) {
    return tt(s - t[r ? 0 : 1]) - tt(u - t[r ? 0 : 1]);
  }).map(function(s) {
    return _r([0, 0], r ? [s, e] : [e, s]);
  });
}
function IC(t, e, r, n, a) {
  if (!t.props.bounds)
    return [];
  var s = a * Math.PI / 180, u = Vo(t), f = u.left, c = u.top, v = u.right, p = u.bottom, h = f - n[0], d = v - n[0], m = c - n[1], _ = p - n[1], x = {
    left: h,
    top: m,
    right: d,
    bottom: _
  };
  if (!kv(r, x, 0))
    return [];
  var y = [];
  return [
    [h, 0],
    [d, 0],
    [m, 1],
    [_, 1]
  ].forEach(function(S) {
    var w = k(S, 2), R = w[0], O = w[1];
    r.forEach(function(I) {
      var E = _r([0, 0], I);
      y.push.apply(y, ot([], k(OC(I, R, O).map(function(D) {
        return s + D - E;
      }).filter(function(D) {
        return !kv(e, x, D);
      }).map(function(D) {
        return It(D * 180 / Math.PI, Xr);
      })), !1));
    });
  }), y;
}
var PC = ["left", "right", "center"], AC = ["top", "bottom", "middle"], Fv = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, En = {
  start: "left",
  end: "right",
  center: "center"
}, Dn = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function mi() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function Pi(t, e) {
  var r = t.props, n = r.snappable, a = r.bounds, s = r.innerBounds, u = r.verticalGuidelines, f = r.horizontalGuidelines, c = r.snapGridWidth, v = r.snapGridHeight, p = t.state, h = p.guidelines, d = p.enableSnap;
  return !n || !d || e && n !== !0 && n.indexOf(e) < 0 ? !1 : !!(c || v || a || s || h && h.length || u && u.length || f && f.length);
}
function Rf(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function BC(t, e) {
  var r = Rf(t), n = {};
  for (var a in r)
    a in e && r[a] && (n[a] = e[a]);
  return n;
}
function Tf(t, e) {
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
  var n = dr(t, [e.clientLeft, e.clientTop], r);
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
    return It(v, yr);
  });
}
var Rd = "snapRotationThreshold", Td = "snapRotationDegrees", Od = "snapHorizontalThreshold", Id = "snapVerticalThreshold";
function Ko(t, e, r, n, a, s, u) {
  var f;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var c = t.props, v = ((f = t.state.snapThresholdInfo) === null || f === void 0 ? void 0 : f.multiples) || [1, 1], p = jv(u, c[Od], 5), h = jv(s, c[Id], 5);
  return Pd(t.state.guidelines, e, r, n, a, p, h, v);
}
function Pd(t, e, r, n, a, s, u, f) {
  return {
    vertical: Wv(t, "vertical", e, u * f[0], n),
    horizontal: Wv(t, "horizontal", r, s * f[1], a)
  };
}
function kC(t, e, r) {
  var n = k(r, 2), a = n[0], s = n[1], u = k(e, 2), f = u[0], c = u[1], v = k(Et(r, e), 2), p = v[0], h = v[1], d = h > 0, m = p > 0;
  p = Fo(p), h = Fo(h);
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
  var y = Ko(t, p ? [a] : [], h ? [s] : [], [], [], void 0, void 0), S = y.vertical, w = y.horizontal;
  S.posInfos.filter(function(j) {
    var rt = j.pos;
    return m ? rt >= f : rt <= f;
  }), w.posInfos.filter(function(j) {
    var rt = j.pos;
    return d ? rt >= c : rt <= c;
  }), S.isSnap = S.posInfos.length > 0, w.isSnap = w.posInfos.length > 0;
  var R = Ku(S), O = R.isSnap, I = R.guideline, E = Ku(w), D = E.isSnap, T = E.guideline, P = D ? T.pos[1] : 0, B = O ? I.pos[0] : 0;
  if (p === 0)
    D && (x.isSnap = !0, x.pos = T.pos[1], x.offset = s - x.pos);
  else if (h === 0)
    O && (_.isSnap = !0, _.pos = B, _.offset = a - B);
  else {
    var H = h / p, W = r[1] - H * a, F = 0, Y = 0, X = !1;
    O ? (Y = B, F = H * Y + W, X = !0) : D && (F = P, Y = (F - W) / H, X = !0), X && (_.isSnap = !0, _.pos = Y, _.offset = a - Y, x.isSnap = !0, x.pos = F, x.offset = s - F);
  }
  return {
    vertical: _,
    horizontal: x
  };
}
function bn(t) {
  var e = "";
  return t === -1 || t === "top" || t === "left" ? e = "start" : t === 0 || t === "center" || t === "middle" ? e = "center" : (t === 1 || t === "right" || t === "bottom") && (e = "end"), e;
}
function Lv(t, e, r, n) {
  var a = Tf(t.props.snapDirections, e), s = Ko(t, a.vertical, a.horizontal, a.verticalNames.map(function(c) {
    return bn(c);
  }), a.horizontalNames.map(function(c) {
    return bn(c);
  }), r, n), u = bn(a.horizontalNames[s.horizontal.index]), f = bn(a.verticalNames[s.vertical.index]);
  return {
    vertical: z(z({}, s.vertical), { direction: f }),
    horizontal: z(z({}, s.horizontal), { direction: u })
  };
}
function Ku(t) {
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
function Wv(t, e, r, n, a) {
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
      var y = x.guideline, S = x.dist, w = y.type;
      return !(w !== e || S > n);
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
function FC(t, e, r, n, a) {
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
  }) : t.props.keepRatio ? s.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (s.push.apply(s, ot([], k(pC([
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
  }), v = Ko(t, f, c, s.map(function(d) {
    return bn(d[0]);
  }), s.map(function(d) {
    return bn(d[1]);
  }), n, a), p = bn(s.map(function(d) {
    return d[0];
  })[v.vertical.index]), h = bn(s.map(function(d) {
    return d[1];
  })[v.horizontal.index]);
  return {
    vertical: z(z({}, v.vertical), { direction: p }),
    horizontal: z(z({}, v.horizontal), { direction: h })
  };
}
function Ad(t, e) {
  var r = tt(t.offset), n = tt(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < Xr ? 1 : n < Xr ? -1 : r - n;
}
function Bo(t, e) {
  return t.slice().sort(function(r, n) {
    var a = r.sign[e], s = n.sign[e], u = r.offset[e], f = n.offset[e];
    if (a) {
      if (!s)
        return -1;
    } else return 1;
    return Ad({ isBound: r.isBound, isSnap: r.isSnap, offset: u }, { isBound: n.isBound, isSnap: n.isSnap, offset: f });
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
function Bd(t, e) {
  var r = Bu([e[0][0], e[1][0]]), n = Bu([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function Of(t, e) {
  var r = k(e, 2), n = r[0], a = r[1], s = a[0] - n[0], u = a[1] - n[1];
  tt(s) < Xr && (s = 0), tt(u) < Xr && (u = 0);
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
function zd(t, e, r, n) {
  return n === void 0 && (n = Xr), t.every(function(a) {
    var s = Of(a, e), u = s <= 0;
    return u === r || tt(s) <= n;
  });
}
function Nv(t, e, r, n, a) {
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
  if (zd([
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
  var y = Sn(r, u, m, a), S = Sn(r, u, x, a), w = Sn(r, u, d, s), R = Sn(r, u, _, s), O = y.isBound && S.isBound, I = y.isBound || S.isBound, E = w.isBound && R.isBound, D = w.isBound || R.isBound, T = Ei(y.offset, S.offset), P = Ei(w.offset, R.offset), B = [0, 0], H = !1, W = !1;
  return tt(P) < tt(T) ? (B = [T, 0], H = I, W = O) : (B = [0, P], H = D, W = E), {
    isAllBound: W,
    isVerticalBound: I,
    isHorizontalBound: D,
    isBound: H,
    offset: B
  };
}
function Sn(t, e, r, n, a, s) {
  var u = k(e, 2), f = u[0], c = u[1], v = t[0], p = r[0], h = r[1], d = Fo(h[1] - p[1]), m = Fo(h[0] - p[0]), _ = c, x = f, y = -f / c;
  if (m) {
    if (!d) {
      if (s && !_)
        return {
          isBound: !1,
          offset: 0
        };
      if (x) {
        var O = (p[1] - v[1]) / y + v[0];
        return Nv(O, p[0], h[0], n, a);
      } else {
        var w = p[1] - v[1], R = tt(w) <= (a || 0);
        return {
          isBound: R,
          offset: R ? w : 0
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
      return Nv(S, p[1], h[1], n, a);
    } else {
      var w = p[0] - v[0], R = tt(w) <= (a || 0);
      return {
        isBound: R,
        offset: R ? w : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Gd(t, e, r) {
  return e.map(function(n) {
    var a = WC(t, n), s = a.isBound, u = a.offset, f = a.isVerticalBound, c = a.isHorizontalBound, v = n.multiple, p = Ne({
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
  var n, a = If(t, e, [0, 0], !1).map(function(d) {
    return z(z({}, d), { multiple: d.multiple.map(function(m) {
      return tt(m) * 2;
    }) });
  }), s = Gd(t, a, r), u = Bo(s, 0), f = Bo(s, 1), c = 0, v = 0, p = u.isVerticalBound || f.isVerticalBound, h = u.isHorizontalBound || f.isHorizontalBound;
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
function If(t, e, r, n) {
  var a = t.state, s = a.allMatrix, u = a.is3d, f = Kn(s, 100, 100, u ? 4 : 3), c = Dr(f, [0, 0]);
  return HC(r, n).map(function(v) {
    var p = k(v, 3), h = p[0], d = p[1], m = p[2], _ = [
      Dr(f, d),
      Dr(f, m)
    ], x = GC(_), y = Bd(c, _), S = y.vertical, w = y.horizontal, R = Of(c, _) <= 0;
    return {
      multiple: h,
      centerSign: R,
      verticalSign: S,
      horizontalSign: w,
      lineConstants: x,
      line: [
        Dr(e, d),
        Dr(e, m)
      ]
    };
  });
}
function Hv(t, e, r, n) {
  var a = n ? t.map(function(s) {
    return ha(s, n);
  }) : t;
  return [
    [a[0], a[1]],
    [a[1], a[3]],
    [a[3], a[2]],
    [a[2], a[0]]
  ].some(function(s) {
    var u = Of(r, s) <= 0;
    return !zd(e, s, u);
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
  if (!Hv(r, x, y, 0))
    return [];
  var S = [], w = x.map(function(R) {
    return [
      _e(R),
      _r([0, 0], R)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(R) {
    var O = _r([0, 0], XC(R)), I = YC(R);
    S.push.apply(S, ot([], k(w.filter(function(E) {
      var D = k(E, 1), T = D[0];
      return T && I <= T;
    }).map(function(E) {
      var D = k(E, 2), T = D[0], P = D[1], B = Math.acos(T ? I / T : 0), H = P + B, W = P - B;
      return [
        u + H - O,
        u + W - O
      ];
    }).reduce(function(E, D) {
      return E.push.apply(E, ot([], k(D), !1)), E;
    }, []).filter(function(E) {
      return !Hv(e, x, y, E);
    }).map(function(E) {
      return It(E * 180 / Math.PI, Xr);
    })), !1));
  }), S;
}
function UC(t) {
  var e = t.props.innerBounds, r = mi();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, s = n.pos2, u = n.pos3, f = n.pos4, c = [a, s, u, f], v = Dr(c, [0, 0]), p = e.left, h = e.top, d = e.width, m = e.height, _ = [[p, h], [p, h + m]], x = [[p, h], [p + d, h]], y = [[p + d, h], [p + d, h + m]], S = [[p, h + m], [p + d, h + m]], w = If(t, c, [0, 0], !1), R = [], O = [];
  return w.forEach(function(I) {
    var E = I.line, D = I.lineConstants, T = Bd(v, E), P = T.horizontal, B = T.vertical, H = Sn(E, D, x, B, 1, !0), W = Sn(E, D, S, B, 1, !0), F = Sn(E, D, _, P, 1, !0), Y = Sn(E, D, y, P, 1, !0);
    H.isBound && !r.top && (R.push(h), r.top = !0), W.isBound && !r.bottom && (R.push(h + m), r.bottom = !0), F.isBound && !r.left && (O.push(p), r.left = !0), Y.isBound && !r.right && (O.push(p + d), r.right = !0);
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
function Zu(t, e, r, n, a) {
  var s = $C(t, e, r, n);
  if (!s)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var u = Qe(t, e), f = Qe(s, t), c = Qe(s, e), v = f > u || c > u, p = k(Ne({
    datas: a,
    distX: s[0],
    distY: s[1]
  }), 2), h = p[0], d = p[1];
  return {
    offset: [h, d],
    isOutside: v
  };
}
function zo(t, e) {
  return t.isBound ? t.offset : e.isSnap ? Ku(e).offset : 0;
}
function VC(t, e, r, n, a) {
  var s = k(e, 2), u = s[0], f = s[1], c = k(r, 2), v = c[0], p = c[1], h = k(n, 2), d = h[0], m = h[1], _ = k(a, 2), x = _[0], y = _[1], S = -x, w = -y;
  if (t && u && f) {
    S = 0, w = 0;
    var R = [];
    if (v && p ? R.push([0, y], [x, 0]) : v ? R.push([x, 0]) : p ? R.push([0, y]) : d && m ? R.push([0, y], [x, 0]) : d ? R.push([x, 0]) : m && R.push([0, y]), R.length) {
      R.sort(function(D, T) {
        return _e(Et([u, f], D)) - _e(Et([u, f], T));
      });
      var O = R[0];
      if (O[0] && tt(u) > yr)
        S = -O[0], w = f * tt(u + S) / tt(u) - f;
      else if (O[1] && tt(f) > yr) {
        var I = f;
        w = -O[1], S = u * tt(f + w) / tt(I) - u;
      }
      if (t && p && v)
        if (tt(S) > yr && tt(S) < tt(x)) {
          var E = tt(x) / tt(S);
          S *= E, w *= E;
        } else if (tt(w) > yr && tt(w) < tt(y)) {
          var E = tt(y) / tt(w);
          S *= E, w *= E;
        } else
          S = Ei(-x, S), w = Ei(-y, w);
    }
  } else
    S = u || v ? -x : 0, w = f || p ? -y : 0;
  return [S, w];
}
function KC(t, e, r, n, a, s) {
  if (!Pi(t, "draggable"))
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
  var u = Bf(s.absolutePoses, [e, r]), f = me(u), c = f.left, v = f.right, p = f.top, h = f.bottom, d = {
    horizontal: u.map(function(Y) {
      return Y[1];
    }),
    vertical: u.map(function(Y) {
      return Y[0];
    })
  }, m = Rf(t.props.snapDirections), _ = Tf(m, {
    left: c,
    right: v,
    top: p,
    bottom: h,
    center: (c + v) / 2,
    middle: (p + h) / 2
  }), x = Zo(t, a, _, d), y = x.vertical, S = x.horizontal, w = NC(t, u, s), R = w.vertical, O = w.horizontal, I = y.isSnap, E = S.isSnap, D = y.isBound || R.isBound, T = S.isBound || O.isBound, P = Ei(y.offset, R.offset), B = Ei(S.offset, O.offset), H = k(VC(n, [e, r], [D, T], [I, E], [P, B]), 2), W = H[0], F = H[1];
  return [
    {
      isBound: D,
      isSnap: I,
      offset: W
    },
    {
      isBound: T,
      isSnap: E,
      offset: F
    }
  ];
}
function Zo(t, e, r, n) {
  n === void 0 && (n = r);
  var a = Mf(Vo(t), n.vertical, n.horizontal), s = a.horizontal, u = a.vertical, f = e ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : Ko(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = f.horizontal, v = f.vertical, p = zo(s[0], c), h = zo(u[0], v), d = tt(p), m = tt(h);
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
function Yv(t, e, r, n, a, s, u) {
  u === void 0 && (u = [1, 1]);
  var f = Mf(e, r, n), c = f.horizontal, v = f.vertical, p = Pd(t, r, n, [], [], a, s, u), h = p.horizontal, d = p.vertical, m = zo(c[0], h), _ = zo(v[0], d), x = tt(m), y = tt(_);
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
    var f = k(u, 2), c = f[0], v = f[1], p = Dr(e, c), h = Dr(e, v), d = n ? QC(t, p, h, a) : Zo(t, a, {
      vertical: [h[0]],
      horizontal: [h[1]]
    }), m = d.horizontal, _ = m.offset, x = m.isBound, y = m.isSnap, S = d.vertical, w = S.offset, R = S.isBound, O = S.isSnap, I = Et(v, c);
    if (!w && !_)
      return {
        isBound: R || x,
        isSnap: O || y,
        sign: I,
        offset: [0, 0]
      };
    var E = ZC(p, h, d, n);
    if (!E)
      return {
        sign: I,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var D = E === "vertical", T = [0, 0];
    return !n && tt(v[0]) === 1 && tt(v[1]) === 1 && c[0] !== v[0] && c[1] !== v[1] ? T = Ne({
      datas: s,
      distX: -w,
      distY: -_
    }) : T = Zu(p, h, -(D ? w : _), D, s).offset, T = T.map(function(P, B) {
      return P * (I[B] ? 2 / I[B] : 0);
    }), {
      sign: I,
      isBound: D ? R : x,
      isSnap: D ? O : y,
      offset: T
    };
  });
}
function Xv(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function QC(t, e, r, n) {
  var a = TC(t, e, r), s = a.horizontal, u = a.vertical, f = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : kC(t, e, r), c = f.horizontal, v = f.vertical, p = Xv(s, c), h = Xv(u, v), d = tt(p), m = tt(h);
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
    ], m = v.left, _ = m === void 0 ? -1 / 0 : m, x = v.top, y = x === void 0 ? -1 / 0 : x, S = v.right, w = S === void 0 ? 1 / 0 : S, R = v.bottom, O = R === void 0 ? 1 / 0 : R;
    d.forEach(function(I) {
      var E = I[0] !== s[0], D = I[1] !== s[1], T = Dr(e, I), P = _r(n, T) * 360 / Math.PI;
      if (D) {
        var B = T.slice();
        (tt(P - 360) < 2 || tt(P - 180) < 2) && (B[1] = n[1]);
        var H = Zu(n, B, (n[1] < T[1] ? O : y) - T[1], !1, a), W = k(H.offset, 2), F = W[1], Y = H.isOutside;
        isNaN(F) || (h = c + (Y ? 1 : -1) * tt(F));
      }
      if (E) {
        var B = T.slice();
        (tt(P - 90) < 2 || tt(P - 270) < 2) && (B[0] = n[0]);
        var X = Zu(n, B, (n[0] < T[0] ? w : _) - T[0], !0, a), j = k(X.offset, 1), rt = j[0], K = X.isOutside;
        isNaN(rt) || (p = f + (K ? 1 : -1) * tt(rt));
      }
    });
  }
  return {
    maxWidth: p,
    maxHeight: h
  };
}
var Nr = {
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
    var p = _e(v), h = _r(v, [0, 0]);
    return [e.createElement("div", { className: wt("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(p, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(h, "rad) scaleY(").concat(s, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, a = e.parentGesto, s = t.state, u = s.gestos, f = s.style;
    if (u.draggable)
      return !1;
    u.draggable = a || t.targetGesto, r.datas = {}, r.left = parseFloat(f.left || "") || 0, r.top = parseFloat(f.top || "") || 0, r.bottom = parseFloat(f.bottom || "") || 0, r.right = parseFloat(f.right || "") || 0, r.startValue = [0, 0], Vn(t, e), $o(t, e, "translate"), _w(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = Ft(t, e, z({ set: function(p) {
      r.startValue = p;
    } }, Uo(t, e))), v = n || mt(t, "onDragStart", c);
    return v !== !1 ? (r.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (u.draggable = null, r.isPinch = !1), r.isDrag ? c : !1;
  },
  drag: function(t, e) {
    if (e) {
      Xo(t, e, "translate");
      var r = e.datas, n = e.parentEvent, a = e.parentFlag, s = e.isPinch, u = e.deltaOffset, f = e.useSnap, c = e.isRequest, v = e.isGroup, p = e.parentThrottleDrag, h = e.distX, d = e.distY, m = r.isDrag, _ = r.prevDist, x = r.prevBeforeDist, y = r.startValue;
      if (m) {
        u && (h += u[0], d += u[1]);
        var S = t.props, w = S.parentMoveable, R = v ? 0 : S.throttleDrag || p || 0, O = n ? 0 : S.throttleDragRotate || 0, I = 0, E = !1, D = !1, T = !1, P = !1;
        if (!n && O > 0 && (h || d)) {
          var B = S.startDragRotate || 0, H = It(B + _r([0, 0], [h, d]) * 180 / Math.PI, O) - B, W = d * Math.abs(Math.cos((H - 90) / 180 * Math.PI)), F = h * Math.abs(Math.cos(H / 180 * Math.PI)), Y = _e([F, W]);
          I = H * Math.PI / 180, h = Y * Math.cos(I), d = Y * Math.sin(I);
        }
        if (!s && !n && !a) {
          var X = k(KC(t, h, d, O, !f && c || u, r), 2), j = X[0], rt = X[1];
          E = j.isSnap, D = j.isBound, T = rt.isSnap, P = rt.isBound;
          var K = j.offset, at = rt.offset;
          h += K, d += at;
        }
        var it = Kt(md({ datas: r, distX: h, distY: d }), y), $ = Kt(lC({ datas: r, distX: h, distY: d }), y);
        Cv($, Xr), Cv(it, Xr), O || (!E && !D && ($[0] = It($[0], R), it[0] = It(it[0], R)), !T && !P && ($[1] = It($[1], R), it[1] = It(it[1], R)));
        var lt = Et(it, y), ht = Et($, y), ut = Et(ht, _), ct = Et(lt, x);
        r.prevDist = ht, r.prevBeforeDist = lt, r.passDelta = ut, r.passDist = ht;
        var st = r.left + lt[0], pt = r.top + lt[1], xt = r.right - lt[0], Ot = r.bottom - lt[1], Yt = qo(r, "translate(".concat($[0], "px, ").concat($[1], "px)"), "translate(".concat(ht[0], "px, ").concat(ht[1], "px)"));
        if (Ef(e, Yt), t.state.dragInfo.dist = n ? [0, 0] : ht, !(!n && !w && ut.every(function(Dt) {
          return !Dt;
        }) && ct.some(function(Dt) {
          return !Dt;
        }))) {
          var nt = t.state, ft = nt.width, Xt = nt.height, St = Ft(t, e, z({ transform: Yt, dist: ht, delta: ut, translate: $, beforeDist: lt, beforeDelta: ct, beforeTranslate: it, left: st, top: pt, right: xt, bottom: Ot, width: ft, height: Xt, isPinch: s }, Yr({
            transform: Yt
          }, e)));
          return !n && mt(t, "onDrag", St), St;
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
      return !r && mt(t, "onDragEnd", a), a;
    }
  },
  dragGroupStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = this.dragStart(t, e);
    if (!f)
      return !1;
    var c = Su(t, this, "dragStart", [
      s || 0,
      u || 0
    ], e, !1, "draggable"), v = c.childEvents, p = c.eventParams, h = z(z({}, f), { targets: t.props.targets, events: p }), d = mt(t, "onDragGroupStart", h);
    a.isDrag = d !== !1;
    var m = (n = (r = v[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return a.throttleOffset = [m[0] % 1, m[1] % 1], a.isDrag ? f : !1;
  },
  dragGroup: function(t, e) {
    var r = e.datas;
    if (r.isDrag) {
      var n = this.drag(t, z(z({}, e), { parentThrottleDrag: t.props.throttleDrag })), a = e.datas.passDelta, s = Su(t, this, "drag", a, e, !1, "draggable").eventParams;
      if (n) {
        var u = z({ targets: t.props.targets, events: s }, n);
        return mt(t, "onDragGroup", u), u;
      }
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isDrag) {
      this.dragEnd(t, e);
      var a = Su(t, this, "dragEnd", [0, 0], e, !1, "draggable").eventParams;
      return mt(t, "onDragGroupEnd", se(t, e, {
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
function kd(t, e) {
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
  ], c = dr(r, f, u), v = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: v
  };
}
function Fd(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = _C(e, a, s), c = dr(r, e, u), v = [
    a ? 0 : e[0],
    s ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: f,
    fixedOffset: v
  };
}
var qv = kf("resizable"), Ju = {
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
  render: Ed("resizable"),
  dragControlCondition: qv,
  viewClassName: Gf("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, a = e.isPinch, s = e.isGroup, u = e.parentDirection, f = e.parentGesto, c = e.datas, v = e.parentFixedDirection, p = e.parentEvent, h = Jd(u, a, n, c), d = t.state, m = d.target, _ = d.width, x = d.height, y = d.gestos;
    if (!h || !m || y.resizable)
      return !1;
    y.resizable = f || t.controlGesto, !a && Vn(t, e), c.datas = {}, c.direction = h, c.startOffsetWidth = _, c.startOffsetHeight = x, c.prevWidth = 0, c.prevHeight = 0, c.minSize = [0, 0], c.startWidth = d.inlineCSSWidth || d.cssWidth, c.startHeight = d.inlineCSSHeight || d.cssHeight, c.maxSize = [1 / 0, 1 / 0], s || (c.minSize = [
      d.minOffsetWidth,
      d.minOffsetHeight
    ], c.maxSize = [
      d.maxOffsetWidth,
      d.maxOffsetHeight
    ]);
    var S = t.props.transformOrigin || "% %";
    c.transformOrigin = Zr(S) ? S.split(" ") : S, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !h[0] && !h[1] || h[0] || !h[1];
    function w(P) {
      c.ratio = P && isFinite(P) ? P : 0;
    }
    c.startPositions = xe(t.state);
    function R(P) {
      var B = kd(c.startPositions, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function O(P) {
      var B = Fd(t.state, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function I(P) {
      c.minSize = [
        er("".concat(P[0]), 0) || 0,
        er("".concat(P[1]), 0) || 0
      ];
    }
    function E(P) {
      var B = [
        P[0] || 1 / 0,
        P[1] || 1 / 0
      ];
      (!bi(B[0]) || isFinite(B[0])) && (B[0] = er("".concat(B[0]), 0) || 1 / 0), (!bi(B[1]) || isFinite(B[1])) && (B[1] = er("".concat(B[1]), 0) || 1 / 0), c.maxSize = B;
    }
    w(_ / x), R(v || [-h[0], -h[1]]), c.setFixedDirection = R, c.setFixedPosition = O, c.setMin = I, c.setMax = E;
    var D = Ft(t, e, {
      direction: h,
      startRatio: c.ratio,
      set: function(P) {
        var B = k(P, 2), H = B[0], W = B[1];
        c.startWidth = H, c.startHeight = W;
      },
      setMin: I,
      setMax: E,
      setRatio: w,
      setFixedDirection: R,
      setFixedPosition: O,
      setOrigin: function(P) {
        c.transformOrigin = P;
      },
      dragStart: Nr.dragStart(t, new Ci().dragStart([0, 0], e))
    }), T = p || mt(t, "onResizeStart", D);
    return c.startFixedDirection = c.fixedDirection, c.startFixedPosition = c.fixedPosition, T !== !1 && (c.isResize = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: h
    }), c.isResize ? D : !1;
  },
  dragControl: function(t, e) {
    var r, n = e.datas, a = e.parentFlag, s = e.isPinch, u = e.parentKeepRatio, f = e.dragClient, c = e.parentDist, v = e.useSnap, p = e.isRequest, h = e.isGroup, d = e.parentEvent, m = e.resolveMatrix, _ = n.isResize, x = n.transformOrigin, y = n.startWidth, S = n.startHeight, w = n.prevWidth, R = n.prevHeight, O = n.minSize, I = n.maxSize, E = n.ratio, D = n.startOffsetWidth, T = n.startOffsetHeight, P = n.isWidth;
    if (!_)
      return;
    if (m) {
      var B = t.state.is3d, H = n.startOffsetMatrix, W = n.startTransformOrigin, F = B ? 4 : 3, Y = oa(Po(e)), X = Math.sqrt(Y.length);
      F !== X && (Y = Ae(Y, X, F));
      var j = ya(H, Y, W, F), rt = Kn(j, D, T, F);
      n.startPositions = rt, n.nextTargetMatrix = Y, n.nextAllMatrix = j;
    }
    var K = $n(t.props, "resizable"), at = K.resizeFormat, it = K.throttleResize, $ = it === void 0 ? a ? 0 : 1 : it, lt = K.parentMoveable, ht = K.keepRatioFinally, ut = n.direction, ct = ut, st = 0, pt = 0;
    !ut[0] && !ut[1] && (ct = [1, 1]);
    var xt = E && (u ?? K.keepRatio) || !1;
    function Ot() {
      var fr = n.fixedDirection, Qt = nh(ct, xt, n, e);
      st = Qt.distWidth, pt = Qt.distHeight;
      var jr = ct[0] - fr[0] || xt ? Math.max(D + st, Xr) : D, Pr = ct[1] - fr[1] || xt ? Math.max(T + pt, Xr) : T;
      return xt && D && T && (P ? Pr = jr / E : jr = Pr * E), [jr, Pr];
    }
    var Yt = k(Ot(), 2), nt = Yt[0], ft = Yt[1];
    d || (n.setFixedDirection(n.fixedDirection), mt(t, "onBeforeResize", Ft(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(fr) {
        var Qt;
        return n.setFixedDirection(fr), Qt = k(Ot(), 2), nt = Qt[0], ft = Qt[1], [nt, ft];
      },
      setFixedPosition: function(fr) {
        var Qt;
        return n.setFixedPosition(fr), Qt = k(Ot(), 2), nt = Qt[0], ft = Qt[1], [nt, ft];
      },
      boundingWidth: nt,
      boundingHeight: ft,
      setSize: function(fr) {
        var Qt;
        Qt = k(fr, 2), nt = Qt[0], ft = Qt[1];
      }
    }, !0)));
    var Xt = f;
    f || (!a && s ? Xt = SC(t, [0, 0]) : Xt = n.fixedPosition);
    var St = [0, 0];
    s || (St = gw(t, nt, ft, ut, Xt, !v && p, n)), c && (!c[0] && (St[0] = 0), !c[1] && (St[1] = 0));
    function Dt() {
      var fr;
      at && (fr = k(at([nt, ft]), 2), nt = fr[0], ft = fr[1]), nt = It(nt, $), ft = It(ft, $);
    }
    if (xt) {
      ct[0] && ct[1] && St[0] && St[1] && (tt(St[0]) > tt(St[1]) ? St[1] = 0 : St[0] = 0);
      var Gt = !St[0] && !St[1];
      Gt && Dt(), ct[0] && !ct[1] || St[0] && !St[1] || Gt && P ? (nt += St[0], ft = nt / E) : (!ct[0] && ct[1] || !St[0] && St[1] || Gt && !P) && (ft += St[1], nt = ft * E);
    } else
      nt += St[0], ft += St[1], nt = Math.max(0, nt), ft = Math.max(0, ft);
    r = k(Tp([nt, ft], O, I, xt ? E : !1), 2), nt = r[0], ft = r[1], Dt(), xt && (h || ht) && (P ? ft = nt / E : nt = ft * E), st = nt - D, pt = ft - T;
    var Wt = [st - w, pt - R];
    n.prevWidth = st, n.prevHeight = pt;
    var Zt = bC(t, nt, ft, Xt, x, n);
    if (!(!lt && Wt.every(function(fr) {
      return !fr;
    }) && Zt.every(function(fr) {
      return !fr;
    }))) {
      var Pt = Nr.drag(t, xa(e, t.state, Zt, !!s, !1, "draggable")), kt = Pt.transform, Jt = y + st, ur = S + pt, cr = Ft(t, e, z({ width: Jt, height: ur, offsetWidth: Math.round(nt), offsetHeight: Math.round(ft), startRatio: E, boundingWidth: nt, boundingHeight: ft, direction: ut, dist: [st, pt], delta: Wt, isPinch: !!s, drag: Pt }, jd({
        style: {
          width: "".concat(Jt, "px"),
          height: "".concat(ur, "px")
        },
        transform: kt
      }, Pt, e)));
      return !d && mt(t, "onResize", cr), cr;
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
      return !n && mt(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: qv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, z(z({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = Ie(t, "resizable", e), s = r.startOffsetWidth, u = r.startOffsetHeight;
    function f() {
      var m = r.minSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.minSize, S = x.startOffsetWidth, w = x.startOffsetHeight, R = s * (S ? y[0] / S : 0), O = u * (w ? y[1] / w : 0);
        m[0] = Math.max(m[0], R), m[1] = Math.max(m[1], O);
      });
    }
    function c() {
      var m = r.maxSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.maxSize, S = x.startOffsetWidth, w = x.startOffsetHeight, R = s * (S ? y[0] / S : 0), O = u * (w ? y[1] / w : 0);
        m[0] = Math.min(m[0], R), m[1] = Math.min(m[1], O);
      });
    }
    var v = je(t, this, "dragControlStart", e, function(m, _) {
      return Ao(t, m, r, _);
    });
    f(), c();
    var p = function(m) {
      n.setFixedDirection(m), v.forEach(function(_, x) {
        _.setFixedDirection(m), Ao(t, _.moveable, r, a[x]);
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
    } }), d = mt(t, "onResizeGroupStart", h);
    return r.isResize = d !== !1, r.isResize ? n : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isResize) {
      var n = $n(t.props, "resizable");
      Qo(t, "onBeforeResize", function(m) {
        mt(t, "onBeforeResizeGroup", Ft(t, e, z(z({}, m), { targets: n.targets }), !0));
      });
      var a = this.dragControl(t, z(z({}, e), { isGroup: !0 }));
      if (a) {
        var s = a.boundingWidth, u = a.boundingHeight, f = a.dist, c = n.keepRatio, v = [
          s / (s - f[0]),
          u / (u - f[1])
        ], p = r.fixedPosition, h = je(t, this, "dragControl", e, function(m, _) {
          var x = k(Gr(ga(t.rotation / 180 * Math.PI, 3), [
            _.datas.originalX * v[0],
            _.datas.originalY * v[1],
            1
          ], 3), 2), y = x[0], S = x[1];
          return z(z({}, _), { parentDist: null, parentScale: v, dragClient: Kt(p, [y, S]), parentKeepRatio: c });
        }), d = z({ targets: n.targets, events: h }, a);
        return mt(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var a = je(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return mt(t, "onResizeGroupEnd", s), r;
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
function Cu(t, e, r, n, a) {
  var s = t.props.groupable, u = t.state, f = u.is3d ? 4 : 3, c = e.origin, v = dr(
    t.state.rootMatrix,
    // TO-DO #710
    Et([c[0], c[1]], s ? [0, 0] : [u.left, u.top]),
    f
  ), p = Kt([a.left, a.top], v);
  e.startAbsoluteOrigin = p, e.prevDeg = _r(p, [r, n]) / Math.PI * 180, e.defaultDeg = e.prevDeg, e.prevSnapDeg = 0, e.loop = 0, e.startDist = Qe(p, [r, n]);
}
function Mo(t, e, r) {
  var n = r.defaultDeg, a = r.prevDeg, s = a % 360, u = Math.floor(a / 360);
  s < 0 && (s += 360), s > t && s > 270 && t < 90 ? ++u : s < t && s < 90 && t > 270 && --u;
  var f = e * (u * 360 + t - n);
  return r.prevDeg = n + f, f;
}
function wu(t, e, r, n) {
  return Mo(_r(n.startAbsoluteOrigin, [t, e]) / Math.PI * 180, r, n);
}
function Eu(t, e, r, n, a, s) {
  var u = t.props.throttleRotate, f = u === void 0 ? 0 : u, c = r.prevSnapDeg, v = 0, p = !1;
  if (s) {
    var h = hw(t, e, n, a + n);
    p = h.isSnap, v = a + h.dist;
  }
  p || (v = It(a + n, f));
  var d = v - a;
  return r.prevSnapDeg = d, [d - c, d, v];
}
function Ld(t, e, r) {
  var n = k(e, 4), a = n[0], s = n[1], u = n[2], f = n[3];
  if (t === "none")
    return [];
  if (br(t))
    return t.map(function(y) {
      return Ld(y, [a, s, u, f], r)[0];
    });
  var c = k((t || "top").split("-"), 2), v = c[0], p = c[1], h = [a, s];
  v === "left" ? h = [u, a] : v === "right" ? h = [s, f] : v === "bottom" && (h = [f, u]);
  var d = [
    (h[0][0] + h[1][0]) / 2,
    (h[0][1] + h[1][1]) / 2
  ], m = Kd(h, r);
  if (p) {
    var _ = p === "top" || p === "left", x = v === "bottom" || v === "left";
    d = h[_ && !x || !_ && x ? 0 : 1];
  }
  return [[d, m]];
}
function Qu(t, e) {
  if (e.isRequest)
    return e.requestAble === "rotatable";
  var r = e.inputEvent.target;
  if (Er(r, wt("rotation-control")) || t.props.rotateAroundControls && Er(r, wt("around-control")) || Er(r, wt("control")) && Er(r, wt("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Ff(n, !0).some(function(a) {
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
    return t.isDragging("rotatable") ? wt("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = $n(t.props, "rotatable"), n = r.rotatable, a = r.rotationPosition, s = r.zoom, u = r.renderDirections, f = r.rotateAroundControls, c = r.resolveAblesWithRotatable, v = t.getState(), p = v.renderPoses, h = v.direction;
    if (!n)
      return null;
    var d = Ld(a, p, h), m = [];
    if (d.forEach(function(S, w) {
      var R = k(S, 2), O = R[0], I = R[1];
      m.push(e.createElement(
        "div",
        { key: "rotation".concat(w), className: wt("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(O[0], "px, ").concat(O[1], "px) rotate(").concat(I, "rad)")
        } },
        e.createElement("div", { className: wt("line rotation-line"), style: {
          transform: "scaleX(".concat(s, ")")
        } }),
        e.createElement("div", { className: wt("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(s, ")")
        } })
      ));
    }), u) {
      var _ = rn(c || {}), x = {};
      _.forEach(function(S) {
        c[S].forEach(function(w) {
          x[w] = S;
        });
      });
      var y = [];
      br(u) && (y = u.map(function(S) {
        var w = x[S];
        return {
          data: w ? { resolve: w } : {},
          classNames: w ? ["move"] : [],
          dir: S
        };
      })), m.push.apply(m, ot([], k(Sd(t, "rotatable", y, e)), !1));
    }
    return f && m.push.apply(m, ot([], k(Md(t, e)), !1)), m;
  },
  dragControlCondition: Qu,
  dragControlStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = e.parentRotate, c = e.parentFlag, v = e.isPinch, p = e.isRequest, h = t.state, d = h.target, m = h.left, _ = h.top, x = h.direction, y = h.beforeDirection, S = h.targetTransform, w = h.moveableClientRect, R = h.offsetMatrix, O = h.targetMatrix, I = h.allMatrix, E = h.width, D = h.height;
    if (!p && !d)
      return !1;
    var T = t.getRect();
    a.rect = T, a.transform = S, a.left = m, a.top = _;
    var P = function(ct) {
      var st = Fd(t.state, ct);
      a.fixedDirection = st.fixedDirection, a.fixedOffset = st.fixedOffset, a.fixedPosition = st.fixedPosition, $ && $.setFixedPosition(ct);
    }, B = function(ct) {
      var st = tw(t.state, ct);
      a.fixedDirection = st.fixedDirection, a.fixedOffset = st.fixedOffset, a.fixedPosition = st.fixedPosition, $ && $.setFixedDirection(ct);
    }, H = s, W = u;
    if (p || v || c) {
      var F = f || 0;
      a.beforeInfo = {
        origin: T.beforeOrigin,
        prevDeg: F,
        defaultDeg: F,
        prevSnapDeg: 0,
        startDist: 0
      }, a.afterInfo = z(z({}, a.beforeInfo), { origin: T.origin }), a.absoluteInfo = z(z({}, a.beforeInfo), { origin: T.origin, startValue: F });
    } else {
      var Y = (n = e.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (Y) {
        var X = Y.getAttribute("data-direction") || "", j = uC[X];
        if (j) {
          a.isControl = !0, a.isAroundControl = Er(Y, wt("around-control")), a.controlDirection = j;
          var rt = Y.getAttribute("data-resolve");
          rt && (a.resolveAble = rt);
          var K = Iw(h.rootMatrix, h.renderPoses, w);
          r = k(Dr(K, j), 2), H = r[0], W = r[1];
        }
      }
      a.beforeInfo = { origin: T.beforeOrigin }, a.afterInfo = { origin: T.origin }, a.absoluteInfo = {
        origin: T.origin,
        startValue: T.rotation
      };
      var at = P;
      P = function(ct) {
        var st = h.is3d ? 4 : 3, pt = k(Kt(rd(O, st), ct), 2), xt = pt[0], Ot = pt[1], Yt = Gr(R, Xn([xt, Ot], st)), nt = Gr(I, Xn([ct[0], ct[1]], st));
        at(ct);
        var ft = h.posDelta;
        a.beforeInfo.origin = Et(Yt, ft), a.afterInfo.origin = Et(nt, ft), a.absoluteInfo.origin = Et(nt, ft), Cu(t, a.beforeInfo, H, W, w), Cu(t, a.afterInfo, H, W, w), Cu(t, a.absoluteInfo, H, W, w);
      }, B = function(ct) {
        var st = Dr([
          [0, 0],
          [E, 0],
          [0, D],
          [E, D]
        ], ct);
        P(st);
      };
    }
    a.startClientX = H, a.startClientY = W, a.direction = x, a.beforeDirection = y, a.startValue = 0, a.datas = {}, $o(t, e, "rotate");
    var it = !1, $ = !1;
    if (a.isControl && a.resolveAble) {
      var lt = a.resolveAble;
      lt === "resizable" && ($ = Ju.dragControlStart(t, z(z({}, new Ci("resizable").dragStart([0, 0], e)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    $ || (it = Nr.dragStart(t, new Ci().dragStart([0, 0], e))), P(Pw(t));
    var ht = Ft(t, e, z(z({ set: function(ct) {
      a.startValue = ct * Math.PI / 180;
    }, setFixedDirection: B, setFixedPosition: P }, Uo(t, e)), { dragStart: it, resizeStart: $ })), ut = mt(t, "onRotateStart", ht);
    return a.isRotate = ut !== !1, h.snapRenderInfo = {
      request: e.isRequest
    }, a.isRotate ? ht : !1;
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.clientDistX, f = e.clientDistY, c = e.parentRotate, v = e.parentFlag, p = e.isPinch, h = e.groupDelta, d = e.resolveMatrix, m = s.beforeDirection, _ = s.beforeInfo, x = s.afterInfo, y = s.absoluteInfo, S = s.isRotate, w = s.startValue, R = s.rect, O = s.startClientX, I = s.startClientY;
    if (S) {
      Xo(t, e, "rotate");
      var E = fC(e), D = m * E, T = t.props.parentMoveable, P = 0, B, H, W = 0, F, Y, X = 0, j, rt, K = 180 / Math.PI * w, at = y.startValue, it = !1, $ = O + u, lt = I + f;
      if (!v && "parentDist" in e) {
        var ht = e.parentDist;
        B = ht, F = ht, j = ht;
      } else p || v ? (B = Mo(c, m, _), F = Mo(c, D, x), j = Mo(c, D, y)) : (B = wu($, lt, m, _), F = wu($, lt, D, x), j = wu($, lt, D, y), it = !0);
      if (H = K + B, Y = K + F, rt = at + j, mt(t, "onBeforeRotate", Ft(t, e, {
        beforeRotation: H,
        rotation: Y,
        absoluteRotation: rt,
        setRotation: function(Xt) {
          F = Xt - K, B = F, j = F;
        }
      }, !0)), r = k(Eu(t, R, _, B, K, it), 3), P = r[0], B = r[1], H = r[2], n = k(Eu(t, R, x, F, K, it), 3), W = n[0], F = n[1], Y = n[2], a = k(Eu(t, R, y, j, at, it), 3), X = a[0], j = a[1], rt = a[2], !(!X && !W && !P && !T && !d)) {
        var ut = qo(s, "rotate(".concat(Y, "deg)"), "rotate(".concat(F, "deg)"));
        d && (s.fixedPosition = Df(t, s.targetAllTransform, s.fixedDirection, s.fixedOffset, s));
        var ct = yC(t, F, s), st = Et(Kt(h || [0, 0], ct), s.prevInverseDist || [0, 0]);
        s.prevInverseDist = ct, s.requestValue = null;
        var pt = xd(t, ut, st, p, e), xt = pt, Ot = Qe([$, lt], y.startAbsoluteOrigin) - y.startDist, Yt = void 0;
        if (s.resolveAble === "resizable") {
          var nt = Ju.dragControl(t, z(z({}, xa(e, t.state, [e.deltaX, e.deltaY], !!p, !1, "resizable")), { resolveMatrix: !0, parentDistance: Ot }));
          nt && (Yt = nt, xt = jd(xt, nt, e));
        }
        var ft = Ft(t, e, z(z({ delta: W, dist: F, rotate: Y, rotation: Y, beforeDist: B, beforeDelta: P, beforeRotate: H, beforeRotation: H, absoluteDist: j, absoluteDelta: X, absoluteRotate: rt, absoluteRotation: rt, isPinch: !!p, resize: Yt }, pt), xt));
        return mt(t, "onRotate", ft), ft;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = se(t, e, {});
      return mt(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: Qu,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = t.state, a = n.left, s = n.top, u = n.beforeOrigin, f = this.dragControlStart(t, e);
    if (!f)
      return !1;
    f.set(r.beforeDirection * t.rotation);
    var c = je(t, this, "dragControlStart", e, function(h, d) {
      var m = h.state, _ = m.left, x = m.top, y = m.beforeOrigin, S = Kt(Et([_, x], [a, s]), Et(y, u));
      return d.datas.startGroupClient = S, d.datas.groupClient = S, z(z({}, d), { parentRotate: 0 });
    }), v = z(z({}, f), { targets: t.props.targets, events: c }), p = mt(t, "onRotateGroupStart", v);
    return r.isRotate = p !== !1, r.isRotate ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      Qo(t, "onBeforeRotate", function(v) {
        mt(t, "onBeforeRotateGroup", Ft(t, e, z(z({}, v), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = r.beforeDirection, s = n.beforeDist, u = s / 180 * Math.PI, f = je(t, this, "dragControl", e, function(v, p) {
          var h = p.datas.startGroupClient, d = k(p.datas.groupClient, 2), m = d[0], _ = d[1], x = k(ha(h, u * a), 2), y = x[0], S = x[1], w = [y - m, S - _];
          return p.datas.groupClient = [y, S], z(z({}, p), { parentRotate: s, groupDelta: w });
        });
        t.rotation = a * n.beforeRotation;
        var c = z({ targets: t.props.targets, events: f, set: function(v) {
          t.rotation = v;
        }, setGroupRotation: function(v) {
          t.rotation = v;
        } }, n);
        return mt(t, "onRotateGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, e);
      var a = je(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return mt(t, "onRotateGroupEnd", s), r;
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
function Pf(t, e) {
  return nw(z(z({}, t), { classNames: ot([
    wt("line", "guideline", t.direction)
  ], k(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(It(r, 0.1), "px");
  }) }), e);
}
function Uv(t, e, r, n, a, s, u, f) {
  var c = t.props.zoom;
  return r.map(function(v, p) {
    var h = v.type, d = v.pos, m = [0, 0];
    return m[u] = n, m[u ? 0 : 1] = -a + d, Pf({
      key: "".concat(e, "TargetGuideline").concat(p),
      classNames: [wt("target", "bold", h)],
      posValue: m,
      sizeValue: s,
      zoom: c,
      direction: e
    }, f);
  });
}
function $v(t, e, r, n, a, s) {
  var u = t.props, f = u.zoom, c = u.isDisplayInnerSnapDigit, v = e === "horizontal" ? En : Dn, p = a[v.start], h = a[v.end];
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
    var _ = d.pos, x = d.size, y = d.element, S = d.className, w = [
      -n[0] + _[0],
      -n[1] + _[1]
    ];
    return Pf({
      key: "".concat(e, "-default-guideline-").concat(m),
      classNames: y ? [wt("bold"), S] : [wt("normal"), S],
      direction: e,
      posValue: w,
      sizeValue: x,
      zoom: f
    }, s);
  });
}
function Zi(t, e, r, n, a, s, u, f) {
  var c, v = t.props, p = v.snapDigit, h = p === void 0 ? 0 : p, d = v.isDisplaySnapDigit, m = d === void 0 ? !0 : d, _ = v.snapDistFormat, x = _ === void 0 ? function(I, E) {
    return I;
  } : _, y = v.zoom, S = e === "horizontal" ? "X" : "Y", w = e === "vertical" ? "height" : "width", R = Math.abs(a), O = m ? parseFloat(R.toFixed(h)) : 0;
  return f.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: wt("guideline-group", e), style: (c = {
      left: "".concat(s[0], "px"),
      top: "".concat(s[1], "px")
    }, c[w] = "".concat(R, "px"), c) },
    Pf({
      direction: e,
      classNames: [wt(r), u],
      size: "100%",
      posValue: [0, 0],
      sizeValue: R,
      zoom: y
    }, f),
    f.createElement("div", { className: wt("size-value", "gap"), style: {
      transform: "translate".concat(S, "(-50%) scale(").concat(y, ")")
    } }, O > 0 ? x(O, e) : "")
  );
}
function iw(t, e, r, n) {
  var a = t === "vertical" ? 0 : 1, s = t === "vertical" ? 1 : 0, u = a ? En : Dn, f = r[u.start], c = r[u.end];
  return th(e, function(v) {
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
        var w = m.pos, R = { element: y, rect: z(z({}, S), (_ = {}, _[u.end] = S[u.start], _)) }, O = { element: y, rect: z(z({}, S), (x = {}, x[u.start] = S[u.end], x)) }, I = [0, 0], E = [0, 0];
        I[a] = w[a], I[s] = w[s], E[a] = w[a], E[s] = w[s] + m.size, p.push({
          type: t,
          pos: I,
          size: 0,
          elementRect: R,
          direction: "",
          elementDirection: "end"
        }), h.push({
          type: t,
          pos: E,
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
    }), v = f === "vertical" ? 1 : 0, p = v ? 0 : 1, h = iw(f, c, n, s), d = v ? Dn : En, m = v ? En : Dn, _ = n[d.start], x = n[d.end];
    h.forEach(function(y) {
      var S = y.total, w = y.start, R = y.end, O = y.inner, I = r[p] + S[0].pos[p] - n[m.start], E = n;
      w.forEach(function(D) {
        var T = D.elementRect.rect, P = E[d.start] - T[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + E[d.start] - _ - P, B[p] = I, u.push(Zi(t, f, "dashed", u.length, P, B, D.className, a));
        }
        E = T;
      }), E = n, R.forEach(function(D) {
        var T = D.elementRect.rect, P = T[d.start] - E[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + E[d.end] - _, B[p] = I, u.push(Zi(t, f, "dashed", u.length, P, B, D.className, a));
        }
        E = T;
      }), O.forEach(function(D) {
        var T = D.elementRect.rect, P = _ - T[d.start], B = T[d.end] - x, H = [0, 0], W = [0, 0];
        H[v] = r[v] - P, H[p] = I, W[v] = r[v] + x - _, W[p] = I, u.push(Zi(t, f, "dashed", u.length, P, H, D.className, a)), u.push(Zi(t, f, "dashed", u.length, B, W, D.className, a));
      });
    });
  }), u;
}
function ow(t, e, r, n, a) {
  var s = [];
  return ["horizontal", "vertical"].forEach(function(u) {
    var f = e.filter(function(y) {
      return y.type === u;
    }).slice(0, 1), c = u === "vertical" ? 0 : 1, v = c ? 0 : 1, p = c ? Dn : En, h = c ? En : Dn, d = n[p.start], m = n[p.end], _ = n[h.start], x = n[h.end];
    f.forEach(function(y) {
      var S = y.gap, w = y.gapRects, R = Math.max.apply(Math, ot([_], k(w.map(function(E) {
        var D = E.rect;
        return D[h.start];
      })), !1)), O = Math.min.apply(Math, ot([x], k(w.map(function(E) {
        var D = E.rect;
        return D[h.end];
      })), !1)), I = (R + O) / 2;
      R === O || I === (_ + x) / 2 || w.forEach(function(E) {
        var D = E.rect, T = E.className, P = [r[0], r[1]];
        if (D[p.end] < d)
          P[c] += D[p.end] - d;
        else if (m < D[p.start])
          P[c] += D[p.start] - d - S;
        else
          return;
        P[v] += I - _, s.push(Zi(t, c ? "vertical" : "horizontal", "gap", s.length, S, P, T, a));
      });
    });
  }), s;
}
function ju(t) {
  var e, r, n = t.state, a = n.containerClientRect, s = n.hasFixed, u = a.overflow, f = a.scrollHeight, c = a.scrollWidth, v = a.clientHeight, p = a.clientWidth, h = a.clientLeft, d = a.clientTop, m = t.props, _ = m.snapGap, x = _ === void 0 ? !0 : _, y = m.verticalGuidelines, S = m.horizontalGuidelines, w = m.snapThreshold, R = w === void 0 ? 5 : w, O = m.maxSnapElementGuidelineDistance, I = O === void 0 ? 1 / 0 : O, E = m.isDisplayGridGuidelines, D = me(xe(t.state)), T = D.top, P = D.left, B = D.bottom, H = D.right, W = { top: T, left: P, bottom: B, right: H, center: (P + H) / 2, middle: (T + B) / 2 }, F = lw(t), Y = ot([], k(F), !1), X = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(at) {
    return at * R;
  });
  x && Y.push.apply(Y, ot([], k(sw(t, W, X)), !1));
  var j = z({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (Y.push.apply(Y, ot([], k(fw(t, u ? c : p, u ? f : v, h, d, j, E)), !1)), s) {
    var rt = a.left, K = a.top;
    j.left += rt, j.top += K, j.right += rt, j.bottom += K;
  }
  return Y.push.apply(Y, ot([], k(Nd(S || !1, y || !1, u ? c : p, u ? f : v, h, d, j)), !1)), Y = Y.filter(function(at) {
    var it = at.element, $ = at.elementRect, lt = at.type;
    if (!it || !$)
      return !0;
    var ht = $.rect;
    return Wd(W, ht, lt, I);
  }), Y;
}
function sw(t, e, r) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, s = a === void 0 ? 1 / 0 : a, u = n.maxSnapElementGapDistance, f = u === void 0 ? 1 / 0 : u, c = t.state.elementRects, v = [];
  return [
    ["vertical", En, Dn],
    ["horizontal", Dn, En]
  ].forEach(function(p) {
    var h = k(p, 3), d = h[0], m = h[1], _ = h[2], x = e[m.start], y = e[m.end], S = e[m.center], w = e[_.start], R = e[_.end], O = {
      left: r[0],
      top: r[1]
    };
    function I(T) {
      var P = T.rect, B = O[m.start];
      return P[m.end] < x + B ? x - P[m.end] : y - B < P[m.start] ? P[m.start] - y : -1;
    }
    var E = c.filter(function(T) {
      var P = T.rect;
      return P[_.start] > R || P[_.end] < w ? !1 : I(T) > 0;
    }).sort(function(T, P) {
      return I(T) - I(P);
    }), D = [];
    E.forEach(function(T) {
      E.forEach(function(P) {
        if (T !== P) {
          var B = T.rect, H = P.rect, W = B[_.start], F = B[_.end], Y = H[_.start], X = H[_.end];
          W > X || Y > F || D.push([T, P]);
        }
      });
    }), D.forEach(function(T) {
      var P = k(T, 2), B = P[0], H = P[1], W = B.rect, F = H.rect, Y = W[m.start], X = W[m.end], j = F[m.start], rt = F[m.end], K = O[m.start], at = 0, it = 0, $ = !1, lt = !1, ht = !1;
      if (X <= x && y <= j) {
        if (lt = !0, at = (j - X - (y - x)) / 2, it = X + at + (y - x) / 2, tt(it - S) > K)
          return;
      } else if (X < j && rt < x + K) {
        if ($ = !0, at = j - X, it = rt + at, tt(it - x) > K)
          return;
      } else if (X < j && y - K < Y) {
        if (ht = !0, at = j - X, it = Y - at, tt(it - y) > K)
          return;
      } else
        return;
      at && Wd(e, F, d, s) && (at > f || v.push({
        type: d,
        pos: d === "vertical" ? [it, 0] : [0, it],
        element: H.element,
        size: 0,
        className: H.className,
        isStart: $,
        isCenter: lt,
        isEnd: ht,
        gap: at,
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
    var y = t.getRect(), S = y.children, w = m.direction;
    if (S) {
      var R = w.map(function(I, E) {
        var D = E === 0 ? {
          snapSize: p,
          posName: "left",
          sizeName: "width",
          clientOffset: n.left - e
        } : {
          snapSize: d,
          posName: "top",
          sizeName: "height",
          clientOffset: n.top - r
        }, T = D.snapSize, P = D.posName, B = D.sizeName, H = D.clientOffset;
        if (!T)
          return {
            dir: I,
            multiple: 1,
            snapSize: T,
            snapOffset: 0
          };
        var W = y[B], F = y[P], Y = Op(S.map(function($) {
          return [
            $[P] - F,
            $[B],
            W - $[B] - $[P] + F
          ];
        })).filter(function($) {
          return $;
        }).sort(function($, lt) {
          return $ - lt;
        }), X = Y[0], j = Y.map(function($) {
          return It($ / X, 0.1) * T;
        }), rt = 1, K = It(W / X, 0.1);
        for (rt = 1; rt <= 10 && !j.every(function($) {
          return $ * rt % 1 === 0;
        }); ++rt)
          ;
        var at = (-I + 1) / 2, it = Ro(F - H, F - H + W, at, 1 - at);
        return {
          multiple: K * rt,
          dir: I,
          snapSize: T,
          snapOffset: Math.round(it / T)
        };
      }), O = R.map(function(I) {
        return I.multiple || 1;
      });
      f.snapThresholdInfo.multiples = O, f.snapThresholdInfo.offset = R.map(function(I) {
        return I.snapOffset;
      }), R.forEach(function(I, E) {
        I.snapSize;
      });
    }
  } else
    f.snapThresholdInfo = null;
}
function fw(t, e, r, n, a, s, u) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var f = t.props, c = t.state, v = f.snapGridWidth, p = v === void 0 ? 0 : v, h = f.snapGridHeight, d = h === void 0 ? 0 : h, m = [], _ = s.left, x = s.top, y = [0, 0];
  uw(t, n, a, s);
  var S = c.snapThresholdInfo, w = p, R = d;
  if (S && (p *= S.multiples[0] || 1, d *= S.multiples[1] || 1, y = S.offset), d) {
    for (var O = function(E) {
      m.push({
        type: "horizontal",
        pos: [
          _,
          It(y[1] * R + E - a + x, 0.1)
        ],
        className: wt("grid-guideline"),
        size: e,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, I = 0; I <= r * 2; I += d)
      O(I);
    for (var I = -d; I >= -r; I -= d)
      O(I);
  }
  if (p) {
    for (var O = function(D) {
      m.push({
        type: "vertical",
        pos: [
          It(y[0] * w + D - n + _, 0.1),
          x
        ],
        className: wt("grid-guideline"),
        size: r,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, I = 0; I <= e * 2; I += p)
      O(I);
    for (var I = -p; I >= -e; I -= p)
      O(I);
  }
  return m;
}
function Wd(t, e, r, n) {
  return r === "horizontal" ? tt(t.right - e.left) <= n || tt(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? tt(t.bottom - e.top) <= n || tt(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function lw(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var a = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), s = n.map(function(d) {
    return Pe(d) && "element" in d ? z(z({}, d), { element: Le(d.element, !0) }) : {
      element: Le(d, !0)
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
  var p = Rf(t.props.elementSnapDirections), h = [];
  return v.forEach(function(d) {
    var m = d.element, _ = d.top, x = _ === void 0 ? p.top : _, y = d.left, S = y === void 0 ? p.left : y, w = d.right, R = w === void 0 ? p.right : w, O = d.bottom, I = O === void 0 ? p.bottom : O, E = d.center, D = E === void 0 ? p.center : E, T = d.middle, P = T === void 0 ? p.middle : T, B = d.className, H = d.rect, W = Tf({
      top: x,
      right: R,
      left: S,
      bottom: I,
      center: D,
      middle: P
    }, H), F = W.horizontal, Y = W.vertical, X = W.horizontalNames, j = W.verticalNames, rt = H.top, K = H.left, at = H.right - K, it = H.bottom - rt, $ = [at, it];
    Y.forEach(function(lt, ht) {
      h.push({
        type: "vertical",
        element: m,
        pos: [
          It(lt, 0.1),
          rt
        ],
        size: it,
        sizes: $,
        className: B,
        elementRect: d,
        elementDirection: Fv[j[ht]] || j[ht],
        direction: ""
      });
    }), F.forEach(function(lt, ht) {
      h.push({
        type: "horizontal",
        element: m,
        pos: [
          K,
          It(lt, 0.1)
        ],
        size: at,
        sizes: $,
        className: B,
        elementRect: d,
        elementDirection: Fv[X[ht]] || X[ht],
        direction: ""
      });
    });
  }), h;
}
function Vv(t, e) {
  return t ? t.map(function(r) {
    var n = Pe(r) ? r : { pos: r }, a = n.pos;
    return bi(a) ? n : z(z({}, n), { pos: er(a, e) });
  }) : [];
}
function Nd(t, e, r, n, a, s, u) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = { left: 0, top: 0, right: 0, bottom: 0 });
  var f = [], c = u.left, v = u.top, p = u.bottom, h = u.right, d = r + h - c, m = n + p - v;
  return Vv(t, m).forEach(function(_) {
    f.push({
      type: "horizontal",
      pos: [
        c,
        It(_.pos - s + v, 0.1)
      ],
      size: d,
      className: _.className,
      direction: ""
    });
  }), Vv(e, d).forEach(function(_) {
    f.push({
      type: "vertical",
      pos: [
        It(_.pos - a + c, 0.1),
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
    var x = _.element.getBoundingClientRect(), y = x.left - p - d, S = x.top - h - m, w = S + x.height, R = y + x.width, O = k(Di(s, [y, S], c), 2), I = O[0], E = O[1], D = k(Di(s, [R, w], c), 2), T = D[0], P = D[1];
    return z(z({}, _), { rect: {
      left: I,
      right: T,
      top: E,
      bottom: P,
      center: (I + T) / 2,
      middle: (E + P) / 2
    } });
  });
}
function xo(t) {
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
    var u = Le(n, !0);
    if (u) {
      var f = ea(u), c = tp(e, [
        f.left - a.left,
        f.top - a.top
      ]), v = tp(e, [
        f.right - a.right,
        f.bottom - a.bottom
      ]);
      s.left = It(c[0], 1e-5), s.top = It(c[1], 1e-5), s.right = It(v[0], 1e-5), s.bottom = It(v[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = s, e.guidelines = ju(t), e.enableSnap = !0, !0;
}
function Hd(t, e, r, n, a, s) {
  var u = Kn(t, e, r, s ? 4 : 3), f = Dr(u, n);
  return Bf(u, Et(a, f));
}
function Kv(t) {
  return t ? t / tt(t) : 0;
}
function vw(t, e, r, n, a, s) {
  var u = s.fixedDirection, f = LC(r, u, n), c = If(t, e, r, n), v = ot(ot([], k(JC(t, e, f, n, a, s)), !1), k(Gd(t, c, s)), !1), p = Bo(v, 0), h = Bo(v, 1);
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
  var v = Dr(e, u), p = Zo(t, f, {
    vertical: [v[0]],
    horizontal: [v[1]]
  }), h = p.horizontal.offset, d = p.vertical.offset;
  if (It(d, Uu) || It(h, Uu)) {
    var m = k(Ne({
      datas: c,
      distX: -d,
      distY: -h
    }), 2), _ = m[0], x = m[1], y = Math.min(a || 1 / 0, r + u[0] * _), S = Math.min(s || 1 / 0, n + u[1] * x);
    return [y - r, S - n];
  }
  return [0, 0];
}
function Yd(t, e, r, n, a, s, u, f) {
  for (var c = xe(t.state), v = t.props.keepRatio, p = 0, h = 0, d = 0; d < 2; ++d) {
    var m = e(p, h), _ = vw(t, m, a, v, u, f), x = _.width, y = _.height, S = x.isBound, w = y.isBound, R = x.offset, O = y.offset;
    if (d === 1 && (S || (R = 0), w || (O = 0)), d === 0 && u && !S && !w)
      return [0, 0];
    if (v) {
      var I = tt(R) * (r ? 1 / r : 1), E = tt(O) * (n ? 1 / n : 1), D = S && w ? I < E : w || !S && I < E;
      D ? R = r * O / n : O = n * R / r;
    }
    p += R, h += O;
  }
  if (!v && a[0] && a[1]) {
    var T = jC(t, c, a, s, f), P = T.maxWidth, B = T.maxHeight, H = k(pw(t, e(p, h).map(function(Y) {
      return Y.map(function(X) {
        return It(X, Uu);
      });
    }), r + p, n + h, P, B, a, u, f), 2), R = H[0], O = H[1];
    p += R, h += O;
  }
  return [p, h];
}
function ta(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function dw(t, e) {
  e = ta(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, a = r * 360 + e;
  return tt(t - n) < tt(t - a) ? n : a;
}
function Du(t, e) {
  t = ta(t), e = ta(e);
  var r = ta(t - e);
  return Math.min(r, 360 - r);
}
function hw(t, e, r, n) {
  var a, s = t.props, u = (a = s[Rd]) !== null && a !== void 0 ? a : 5, f = s[Td];
  if (Pi(t, "rotatable")) {
    var c = e.pos1, v = e.pos2, p = e.pos3, h = e.pos4, d = e.origin, m = r * Math.PI / 180, _ = [c, v, p, h].map(function(O) {
      return Et(O, d);
    }), x = _.map(function(O) {
      return ha(O, m);
    }), y = ot(ot([], k(IC(t, _, x, d, r)), !1), k(qC(t, _, x, d, r)), !1);
    y.sort(function(O, I) {
      return tt(O - r) - tt(I - r);
    });
    var S = y.length > 0;
    if (S)
      return {
        isSnap: S,
        dist: S ? y[0] : r
      };
  }
  if (f?.length && u) {
    var w = f.slice().sort(function(O, I) {
      return Du(O, n) - Du(I, n);
    }), R = w[0];
    if (Du(R, n) <= u)
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
  if (!Pi(t, "resizable"))
    return [0, 0];
  var f = u.fixedDirection, c = u.nextAllMatrix, v = t.state, p = v.allMatrix, h = v.is3d;
  return Yd(t, function(d, m) {
    return Hd(c || p, e + d, r + m, f, a, h);
  }, e, r, n, a, s, u);
}
function mw(t, e, r, n, a) {
  if (!Pi(t, "scalable"))
    return [0, 0];
  var s = a.startOffsetWidth, u = a.startOffsetHeight, f = a.fixedPosition, c = a.fixedDirection, v = a.is3d, p = Yd(t, function(h, d) {
    return Hd(gC(a, Kt(e, [h / s, d / u])), s, u, c, f, v);
  }, s, u, r, f, n, a);
  return [p[0] / s, p[1] / u];
}
function _w(t, e) {
  e.absolutePoses = xe(t.state);
}
function Zv(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Jr(e, function(s) {
        return s.guideline === a;
      }) || (a.direction = "", e.push({ guideline: a, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, a = r.posInfo;
    return z(z({}, n), { direction: a.direction });
  });
}
function Jv(t, e, r, n, a, s) {
  var u = Mf(Vo(t, s), e, r), f = u.vertical, c = u.horizontal, v = mi();
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
    tn(n, function(x) {
      var y = x.type, S = x.pos;
      return y === "bounds" && S === _;
    }) >= 0 || n.push({
      type: "bounds",
      pos: _
    });
  }), m.forEach(function(_) {
    tn(a, function(x) {
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
    Rd,
    Td,
    Od,
    Id,
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
    if (!v || !v.render || !Pi(t, ""))
      return xi(t, "boundMap", mi(), function(ut) {
        return JSON.stringify(ut);
      }), xi(t, "innerBoundMap", mi(), function(ut) {
        return JSON.stringify(ut);
      }), [];
    r.guidelines = ju(t);
    var d = Math.min(s[0], u[0], f[0], c[0]), m = Math.min(s[1], u[1], f[1], c[1]), _ = v.externalPoses || [], x = xe(t.state), y = [], S = [], w = [], R = [], O = [], I = me(x), E = I.width, D = I.height, T = I.top, P = I.left, B = I.bottom, H = I.right, W = { left: P, right: H, top: T, bottom: B, center: (P + H) / 2, middle: (T + B) / 2 }, F = _.length > 0, Y = F ? me(_) : {};
    if (!v.request) {
      if (v.direction && O.push(FC(t, x, v.direction, h, h)), v.snap) {
        var X = me(x);
        v.center && (X.middle = (X.top + X.bottom) / 2, X.center = (X.left + X.right) / 2), O.push(Lv(t, X, h, h));
      }
      F && (v.center && (Y.middle = (Y.top + Y.bottom) / 2, Y.center = (Y.left + Y.right) / 2), O.push(Lv(t, Y, h, h))), O.forEach(function(ut) {
        var ct = ut.vertical.posInfos, st = ut.horizontal.posInfos;
        y.push.apply(y, ot([], k(ct.filter(function(pt) {
          var xt = pt.guidelineInfos;
          return xt.some(function(Ot) {
            var Yt = Ot.guideline;
            return !Yt.hide;
          });
        }).map(function(pt) {
          return {
            type: "snap",
            pos: pt.pos
          };
        })), !1)), S.push.apply(S, ot([], k(st.filter(function(pt) {
          var xt = pt.guidelineInfos;
          return xt.some(function(Ot) {
            var Yt = Ot.guideline;
            return !Yt.hide;
          });
        }).map(function(pt) {
          return {
            type: "snap",
            pos: pt.pos
          };
        })), !1)), w.push.apply(w, ot([], k(Zv(ct)), !1)), R.push.apply(R, ot([], k(Zv(st)), !1));
      });
    }
    var j = Jv(t, [P, H], [T, B], y, S), rt = j.boundMap, K = j.innerBoundMap;
    F && Jv(t, [Y.left, Y.right], [Y.top, Y.bottom], y, S, v.externalBounds);
    var at = ot(ot([], k(w), !1), k(R), !1), it = at.filter(function(ut) {
      return ut.element && !ut.gapRects;
    }), $ = at.filter(function(ut) {
      return ut.gapRects;
    }).sort(function(ut, ct) {
      return ut.gap - ct.gap;
    });
    mt(t, "onSnap", {
      guidelines: at.filter(function(ut) {
        var ct = ut.element;
        return !ct;
      }),
      elements: it,
      gaps: $
    }, !0);
    var lt = xi(t, "boundMap", rt, function(ut) {
      return JSON.stringify(ut);
    }, mi()), ht = xi(t, "innerBoundMap", K, function(ut) {
      return JSON.stringify(ut);
    }, mi());
    return (rt === lt || K === ht) && mt(t, "onBound", {
      bounds: rt,
      innerBounds: K
    }, !0), ot(ot(ot(ot(ot(ot([], k(aw(t, it, [d, m], W, e)), !1), k(ow(t, $, [d, m], W, e)), !1), k($v(t, "horizontal", R, [a, n], W, e)), !1), k($v(t, "vertical", w, [a, n], W, e)), !1), k(Uv(t, "horizontal", S, d, n, E, 0, e)), !1), k(Uv(t, "vertical", y, m, a, D, 1, e)), !1);
  },
  dragStart: function(t, e) {
    t.state.snapRenderInfo = {
      request: e.isRequest,
      snap: !0,
      center: !0
    }, xo(t);
  },
  drag: function(t) {
    var e = t.state;
    xo(t) || (e.guidelines = ju(t)), e.snapRenderInfo && (e.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, e) {
    if (xw(t, e) || Qu(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return Er(e.inputEvent.target, wt("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, xo(t);
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
    t.state.snapRenderInfo = null, xo(t);
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
function wt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return gb.apply(void 0, ot([Cf], k(t), !1));
}
function Xd(t) {
  t();
}
function Sw(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : Pe(t) ? t : oa(t);
}
function ra(t, e, r) {
  return Oo(e, qn(r, e), t, qn(r.map(function(n) {
    return -n;
  }), e));
}
function Cw(t, e, r) {
  if (e === "%") {
    var n = Af(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function ww(t) {
  var e = Ew(zf(t, ":before"));
  return e.map(function(r, n) {
    var a = ca(r), s = a.value, u = a.unit;
    return s * Cw(t, u, n === 0);
  });
}
function Go(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function Ew(t) {
  return Go(t.transformOrigin);
}
function qd(t) {
  var e = Qr(t), r = e("transform");
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
function ua(t, e, r, n, a) {
  var s, u, f = vf(t) || Mn(t), c = !1, v, p;
  if (!t || r)
    v = t;
  else {
    var h = (s = t?.assignedSlot) === null || s === void 0 ? void 0 : s.parentElement, d = t.parentElement;
    h ? (c = !0, p = d, v = h) : v = d;
  }
  for (var m = !1, _ = t === e || v === e, x = "relative", y = 1, S = parseFloat(a?.("zoom")) || 1, w = a?.("position"); v && v !== f; ) {
    e === v && (_ = !0);
    var R = Qr(v), O = v.tagName.toLowerCase(), I = qd(v), E = R("willChange"), D = parseFloat(R("zoom")) || 1;
    if (x = R("position"), n && D !== 1) {
      y = D;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && n && S !== 1 && w && w !== "absolute" || O === "svg" || O === "foreignobject" || x !== "static" || I && I !== "none" || E === "transform"
    )
      break;
    var T = (u = t?.assignedSlot) === null || u === void 0 ? void 0 : u.parentNode, P = v.parentNode;
    T && (c = !0, p = P);
    var B = P;
    if (B && B.nodeType === 11) {
      v = B.host, m = !0, x = Qr(v)("position");
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
  var r, n = t.tagName.toLowerCase(), a = t.offsetLeft, s = t.offsetTop, u = Qr(t), f = la(a), c = !f, v, p;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (v = ld ? ww(t) : Go(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice(), c = !0, n === "svg" ? (a = 0, s = 0) : (r = k(Tw(t, v, t === e && e.tagName.toLowerCase() === "g"), 4), a = r[0], s = r[1], v[0] = r[2], v[1] = r[3])) : (v = Go(u("transformOrigin")).map(function(h) {
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
function Ud(t, e) {
  var r = Qr(t), n = Qr(Mn(t)), a = n("position");
  if (!e && (!a || a === "static"))
    return [0, 0];
  var s = parseInt(n("marginLeft"), 10), u = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (u = 0), (r("left") !== "auto" || r("right") !== "auto") && (s = 0)), [s, u];
}
function tf(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = Ae(r, 3, 4));
  });
}
function Mw(t) {
  for (var e = t.parentElement, r = !1, n = Mn(t); e; ) {
    var a = zf(e).transform;
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
function Jo(t, e) {
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(ed(t, !e).join(","), ")");
}
function Af(t) {
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
  var r, n = Af(t), a = n.width, s = n.height, u = n.clientWidth, f = n.clientHeight, c = u / a, v = f / s, p = t.preserveAspectRatio.baseVal, h = p.align, d = p.meetOrSlice, m = [0, 0], _ = [c, v], x = [0, 0];
  if (h !== 1) {
    var y = (h - 2) % 3, S = Math.floor((h - 2) / 3);
    m[0] = a * y / 2, m[1] = s * S / 2;
    var w = d === 2 ? Math.max(v, c) : Math.min(c, v);
    _[0] = w, _[1] = w, x[0] = (u - a) / 2 * y, x[1] = (f - s) / 2 * S;
  }
  var R = xf(_, e);
  return r = k(x, 2), R[e * (e - 1)] = r[0], R[e * (e - 1) + 1] = r[1], ra(R, e, m);
}
function Tw(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var a = Qr(t), s = a("transform-box") === "fill-box", u = t.getBBox(), f = Af(t.ownerSVGElement), c = u.x, v = u.y;
  n === "foreignobject" && !c && !v && (c = parseFloat(t.getAttribute("x")) || 0, v = parseFloat(t.getAttribute("y")) || 0);
  var p = c - f.x, h = v - f.y, d = s ? e[0] : e[0] - p, m = s ? e[1] : e[1] - h;
  return [p, h, d, m];
}
function dr(t, e, r) {
  return Gr(t, Xn(e, r), r);
}
function Kn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(a) {
    return dr(t, a, n);
  });
}
function me(t) {
  var e = t.map(function(v) {
    return v[0];
  }), r = t.map(function(v) {
    return v[1];
  }), n = Math.min.apply(Math, ot([], k(e), !1)), a = Math.min.apply(Math, ot([], k(r), !1)), s = Math.max.apply(Math, ot([], k(e), !1)), u = Math.max.apply(Math, ot([], k(r), !1)), f = s - n, c = u - a;
  return {
    left: n,
    top: a,
    right: s,
    bottom: u,
    width: f,
    height: c
  };
}
function Qv(t, e, r, n) {
  var a = Kn(t, e, r, n);
  return me(a);
}
function Ow(t, e, r, n, a) {
  var s, u = t.target, f = t.origin, c = e.matrix, v = Vd(u), p = v.offsetWidth, h = v.offsetHeight, d = r.getBoundingClientRect(), m = [0, 0];
  r === Mn(r) && (m = Ud(u, !0));
  for (var _ = u.getBoundingClientRect(), x = _.left - d.left + r.scrollLeft - (r.clientLeft || 0) + m[0], y = _.top - d.top + r.scrollTop - (r.clientTop || 0) + m[1], S = _.width, w = _.height, R = Oo(n, a, c), O = Qv(R, p, h, n), I = O.left, E = O.top, D = O.width, T = O.height, P = dr(R, f, n), B = Et(P, [I, E]), H = [
    x + B[0] * S / D,
    y + B[1] * w / T
  ], W = [0, 0], F = 0; ++F < 10; ) {
    var Y = We(a, n);
    s = k(Et(dr(Y, H, n), dr(Y, P, n)), 2), W[0] = s[0], W[1] = s[1];
    var X = Oo(n, a, qn(W, n), c), j = Qv(X, p, h, n), rt = j.left, K = j.top, at = rt - x, it = K - y;
    if (tt(at) < 2 && tt(it) < 2)
      break;
    H[0] -= at, H[1] -= it;
  }
  return W.map(function($) {
    return Math.round($);
  });
}
function Iw(t, e, r) {
  var n = t.length === 16, a = n ? 4 : 3, s = e.map(function(c) {
    return dr(t, c, a);
  }), u = r.left, f = r.top;
  return s.map(function(c) {
    return [c[0] + u, c[1] + f];
  });
}
function _e(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function $d(t, e) {
  return _e([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function Ji(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = _r(t, e));
  var a = $d(t, e);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(r, ")"),
    width: "".concat(a, "px")
  };
}
function ko(t, e) {
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
function $n(t, e) {
  var r = t[e];
  return Pe(r) ? z(z({}, t), r) : t;
}
function Vd(t) {
  var e = t && !la(t.offsetWidth), r = 0, n = 0, a = 0, s = 0, u = 0, f = 0, c = 0, v = 0, p = 0, h = 0, d = 0, m = 0, _ = 1 / 0, x = 1 / 0, y = 1 / 0, S = 1 / 0, w = 0, R = 0, O = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var I = t.getBBox();
      O = !0, r = I.width, n = I.height, u = r, f = n, c = r, v = n, a = r, s = n;
    } else {
      var E = Qr(t), D = t.style, T = E("boxSizing") === "border-box", P = parseFloat(E("borderLeftWidth")) || 0, B = parseFloat(E("borderRightWidth")) || 0, H = parseFloat(E("borderTopWidth")) || 0, W = parseFloat(E("borderBottomWidth")) || 0, F = parseFloat(E("paddingLeft")) || 0, Y = parseFloat(E("paddingRight")) || 0, X = parseFloat(E("paddingTop")) || 0, j = parseFloat(E("paddingBottom")) || 0, rt = F + Y, K = X + j, at = P + B, it = H + W, $ = rt + at, lt = K + it, ht = E("position"), ut = 0, ct = 0;
      if ("clientLeft" in t) {
        var st = null;
        if (ht === "absolute") {
          var pt = ua(t, Mn(t));
          st = pt.offsetParent;
        } else
          st = t.parentElement;
        if (st) {
          var xt = Qr(st);
          ut = parseFloat(xt("width")), ct = parseFloat(xt("height"));
        }
      }
      p = Math.max(rt, er(E("minWidth"), ut) || 0), h = Math.max(K, er(E("minHeight"), ct) || 0), _ = er(E("maxWidth"), ut), x = er(E("maxHeight"), ct), isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0), w = er(D.width, 0) || 0, R = er(D.height, 0) || 0, u = parseFloat(E("width")) || 0, f = parseFloat(E("height")) || 0, c = tt(u - w) < 1 ? Au(p, w || u, _) : u, v = tt(f - R) < 1 ? Au(h, R || f, x) : f, r = c, n = v, a = c, s = v, T ? (y = _, S = x, d = p, m = h, c = r - $, v = n - lt) : (y = _ + $, S = x + lt, d = p + $, m = h + lt, r = c + $, n = v + lt), a = c + rt, s = v + K;
    }
  return {
    svg: O,
    offsetWidth: r,
    offsetHeight: n,
    clientWidth: a,
    clientHeight: s,
    contentWidth: c,
    contentHeight: v,
    inlineCSSWidth: w,
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
function Kd(t, e) {
  return _r(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
}
function yo() {
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
function Zd(t, e) {
  var r = t === Mn(t) || t === vf(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = Qr(t)("overflow") !== "visible", z(z({}, e), n);
}
function Mu(t, e, r, n) {
  var a = t.left, s = t.right, u = t.top, f = t.bottom, c = e.top, v = e.left, p = {
    left: v + a,
    top: c + u,
    right: v + s,
    bottom: c + f,
    width: s - a,
    height: f - u
  };
  return r && n ? Zd(r, p) : p;
}
function ea(t, e) {
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
  return t && e ? Zd(t, f) : f;
}
function Pw(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, a = t.getState(), s = a.offsetWidth, u = a.offsetHeight, f = a.svg, c = a.transformOrigin;
  return !r && f && n ? Lf(n, s, u) : c;
}
function Jd(t, e, r, n) {
  var a;
  if (t)
    a = t;
  else if (e)
    a = [0, 0];
  else {
    var s = r.target;
    a = Qd(s, n);
  }
  return a;
}
function Qd(t, e) {
  if (t) {
    var r = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (e.deg = r, !!n) {
      var a = [0, 0];
      return n.indexOf("w") > -1 && (a[0] = -1), n.indexOf("e") > -1 && (a[0] = 1), n.indexOf("n") > -1 && (a[1] = -1), n.indexOf("s") > -1 && (a[1] = 1), a;
    }
  }
}
function Bf(t, e) {
  return [
    Kt(e, t[0]),
    Kt(e, t[1]),
    Kt(e, t[2]),
    Kt(e, t[3])
  ];
}
function xe(t) {
  var e = t.left, r = t.top, n = t.pos1, a = t.pos2, s = t.pos3, u = t.pos4;
  return Bf([n, a, s, u], [e, r]);
}
function rf(t, e) {
  t[e ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(t);
  });
}
function _i(t, e) {
  var r = e ? "controlGesto" : "targetGesto", n = t[r];
  n?.isIdle() === !1 && rf(t, e), n?.unset(), t[r] = null;
}
function Yr(t, e) {
  if (e) {
    var r = Ii(e);
    r.nextStyle = z(z({}, r.nextStyle), t);
  }
  return {
    style: t,
    cssText: rn(t).map(function(n) {
      return "".concat(Do(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function jd(t, e, r) {
  var n = e.afterTransform || e.transform;
  return z(z({}, Yr(z(z(z({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
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
function Qo(t, e, r) {
  t._emitter.on(e, r);
}
function mt(t, e, r, n, a) {
  return t.triggerEvent(e, r, n, a);
}
function zf(t, e) {
  return Cn(t).getComputedStyle(t, e);
}
function bo(t, e, r) {
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
function ef(t, e) {
  return t === e || t == null && e == null;
}
function jv() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var a = t[n];
    if (!la(a))
      return a;
  }
  return t[r];
}
function th(t, e) {
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
function rh(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Ei() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.sort(function(r, n) {
    return tt(n) - tt(r);
  }), t[0];
}
function Di(t, e, r) {
  return Gr(We(t, r), Xn(e, r), r);
}
function Bw(t, e) {
  var r, n = t.is3d, a = t.rootMatrix, s = n ? 4 : 3;
  return r = k(Di(a, [e.distX, e.distY], s), 2), e.distX = r[0], e.distY = r[1], e;
}
function ge(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var a = dr(t, [Kv(r[0] || 1), 0], n), s = dr(t, [0, Kv(r[1] || 1)], n), u = dr(t, [
    r[0] / _e(a),
    r[1] / _e(s)
  ], n);
  return Kt(e, u);
}
function Te(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Fo(t) {
  return tt(t) <= Xr ? 0 : t;
}
function Gf(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = CC(e, t), n = r.deg;
    return n ? wt("view-control-rotation".concat(n)) : "";
  };
}
function kf(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(s) {
        return n.requestAble === s;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return Er(a, wt("direction")) && (!t || Er(a, wt(t)));
  };
}
function zw(t, e, r) {
  var n, a = Si(t, {
    "x%": function(I) {
      return I / 100 * e.offsetWidth;
    },
    "y%": function(I) {
      return I / 100 * e.offsetHeight;
    }
  }), s = t.slice(0, r < 0 ? void 0 : r), u = t.slice(0, r < 0 ? void 0 : r + 1), f = t[r] || "", c = r < 0 ? [] : t.slice(r), v = r < 0 ? [] : t.slice(r + 1), p = a.slice(0, r < 0 ? void 0 : r), h = a.slice(0, r < 0 ? void 0 : r + 1), d = (n = a[r]) !== null && n !== void 0 ? n : Si([""])[0], m = r < 0 ? [] : a.slice(r), _ = r < 0 ? [] : a.slice(r + 1), x = d ? [d] : [], y = di(p), S = di(h), w = di(m), R = di(_), O = nr(y, w, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: y,
    beforeFunctionMatrix2: S,
    targetFunctionMatrix: di(x),
    afterFunctionMatrix: w,
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
  return !t || !Pe(t) || Ti(t) ? !1 : br(t) || "length" in t;
}
function Le(t, e) {
  return t ? Ti(t) ? t : Zr(t) ? e ? document.querySelector(t) : t : ff(t) ? t() : Bp(t) ? t : "current" in t ? t.current : t : null;
}
function Ff(t, e) {
  if (!t)
    return [];
  var r = Gw(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, a) {
    return Zr(a) && e ? ot(ot([], k(n), !1), k([].slice.call(document.querySelectorAll(a))), !1) : (br(a) ? n.push(Ff(a, e)) : n.push(Le(a, e)), n);
  }, []);
}
function kw(t, e, r) {
  var n = _r(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function tp(t, e) {
  var r = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, s = We(r, a);
  return n || (s = Ae(s, 3, 4)), s[12] = 0, s[13] = 0, s[14] = 0, yS(s, e);
}
function eh(t, e, r, n, a) {
  var s = k(t, 2), u = s[0], f = s[1], c = 0, v = 0;
  if (a && u && f) {
    var p = _r([0, 0], e), h = _r([0, 0], n), d = _e(e), m = Math.cos(p - h) * d;
    if (!n[0])
      v = m, c = v * r;
    else if (!n[1])
      c = m, v = c / r;
    else {
      var _ = n[0] * u, x = n[1] * f, y = Math.atan2(_ + e[0], x + e[1]), S = Math.atan2(_, x);
      y < 0 && (y += Math.PI * 2), S < 0 && (S += Math.PI * 2);
      var w = 0;
      tt(y - S) < Math.PI / 2 || tt(y - S) > Math.PI / 2 * 3 || (S += Math.PI), w = y - S, w > Math.PI * 2 ? w -= Math.PI * 2 : w > Math.PI ? w = 2 * Math.PI - w : w < -Math.PI && (w = -2 * Math.PI - w);
      var R = _e([_ + e[0], x + e[1]]) * Math.cos(w);
      c = R * Math.sin(S) - _, v = R * Math.cos(S) - x, n[0] < 0 && (c *= -1), n[1] < 0 && (v *= -1);
    }
  } else
    c = n[0] * e[0], v = n[1] * e[1];
  return [c, v];
}
function nh(t, e, r, n) {
  var a, s = r.ratio, u = r.startOffsetWidth, f = r.startOffsetHeight, c = 0, v = 0, p = n.distX, h = n.distY, d = n.pinchScale, m = n.parentDistance, _ = n.parentDist, x = n.parentScale, y = r.fixedDirection, S = [0, 1].map(function(D) {
    return tt(t[D] - y[D]);
  }), w = [0, 1].map(function(D) {
    var T = S[D];
    return T !== 0 && (T = 2 / T), T;
  });
  if (_)
    c = _[0], v = _[1], e && (c ? v || (v = c / s) : c = v * s);
  else if (bi(d))
    c = (d - 1) * u, v = (d - 1) * f;
  else if (x)
    c = (x[0] - 1) * u, v = (x[1] - 1) * f;
  else if (m) {
    var R = u * S[0], O = f * S[1], I = _e([R, O]);
    c = m / I * R * w[0], v = m / I * O * w[1];
  } else {
    var E = Ne({ datas: r, distX: p, distY: h });
    E = w.map(function(D, T) {
      return E[T] * D;
    }), a = k(eh([u, f], E, s, t, e), 2), c = a[0], v = a[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: c,
    distHeight: v
  };
}
function nf(t, e) {
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
    var r = k(t.split(" "), 2), n = r[0], a = r[1], s = nf(n || ""), u = nf(a || ""), f = z(z({}, s), u), c = {
      x: "50%",
      y: "50%"
    };
    return f.x && (c.x = f.x), f.y && (c.y = f.y), f.value && (f.x && !f.y && (c.y = f.value), !f.x && f.y && (c.x = f.value)), c;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function Lf(t, e, r) {
  var n = nf(t, !0), a = n.x, s = n.y;
  return [
    er(a, e) || 0,
    er(s, r) || 0
  ];
}
function Fw(t, e, r) {
  var n = t.map(function(s) {
    return Et(s, e);
  }), a = n.map(function(s) {
    return ha(s, r);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(s) {
      return Kt(s, e);
    })
  };
}
function ih(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var a = e[n], s = br(r), u = br(a);
    return s && u ? ih(r, a) : !s && !u ? r === a : !1;
  });
}
function xi(t, e, r, n, a) {
  var s = t._store, u = s[e];
  if (!(e in s))
    if (a != null)
      s[e] = a, u = a;
    else
      return s[e] = r, r;
  return u === r || n(u) === n(r) ? u : (s[e] = r, r);
}
function Hr(t) {
  return t >= 0 ? 1 : -1;
}
function tt(t) {
  return Math.abs(t);
}
function Ru(t, e) {
  return Ab(t).map(function(r) {
    return e(r);
  });
}
function ah(t) {
  return bi(t) ? {
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
var Lw = _a("pinchable", {
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
    var m = mt(t, v, d);
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
      mt(t, h, p);
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
      s && (c.targets = s), mt(t, f, c);
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
}), rp = kf("scalable"), Ww = {
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
  render: Ed("scalable"),
  dragControlCondition: rp,
  viewClassName: Gf("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.parentDirection, u = Jd(s, n, a, r), f = t.state, c = f.width, v = f.height, p = f.targetTransform, h = f.target, d = f.pos1, m = f.pos2, _ = f.pos4;
    if (!u || !h)
      return !1;
    n || Vn(t, e), r.datas = {}, r.transform = p, r.prevDist = [1, 1], r.direction = u, r.startOffsetWidth = c, r.startOffsetHeight = v, r.startValue = [1, 1];
    var x = !u[0] && !u[1] || u[0] || !u[1];
    $o(t, e, "scale"), r.isWidth = x;
    function y(E) {
      r.ratio = E && isFinite(E) ? E : 0;
    }
    r.startPositions = xe(t.state);
    function S(E) {
      var D = kd(r.startPositions, E);
      r.fixedDirection = D.fixedDirection, r.fixedPosition = D.fixedPosition, r.fixedOffset = D.fixedOffset;
    }
    r.setFixedDirection = S, y(Qe(d, m) / Qe(m, _)), S([-u[0], -u[1]]);
    var w = function(E) {
      r.minScaleSize = E;
    }, R = function(E) {
      r.maxScaleSize = E;
    };
    w([-1 / 0, -1 / 0]), R([1 / 0, 1 / 0]);
    var O = Ft(t, e, z(z({ direction: u, set: function(E) {
      r.startValue = E;
    }, setRatio: y, setFixedDirection: S, setMinScaleSize: w, setMaxScaleSize: R }, Uo(t, e)), { dragStart: Nr.dragStart(t, new Ci().dragStart([0, 0], e)) })), I = mt(t, "onScaleStart", O);
    return r.startFixedDirection = r.fixedDirection, I !== !1 && (r.isScale = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    }), r.isScale ? O : !1;
  },
  dragControl: function(t, e) {
    Xo(t, e, "scale");
    var r = e.datas, n = e.parentKeepRatio, a = e.parentFlag, s = e.isPinch, u = e.dragClient, f = e.isRequest, c = e.useSnap, v = e.resolveMatrix, p = r.prevDist, h = r.direction, d = r.startOffsetWidth, m = r.startOffsetHeight, _ = r.isScale, x = r.startValue, y = r.isWidth, S = r.ratio;
    if (!_)
      return !1;
    var w = t.props, R = w.throttleScale, O = w.parentMoveable, I = h;
    !h[0] && !h[1] && (I = [1, 1]);
    var E = S && (n ?? w.keepRatio) || !1, D = t.state, T = [
      x[0],
      x[1]
    ];
    function P() {
      var nt = nh(I, E, r, e), ft = nt.distWidth, Xt = nt.distHeight, St = d ? (d + ft) / d : 1, Dt = m ? (m + Xt) / m : 1;
      x[0] || (T[0] = ft / d), x[1] || (T[1] = Xt / m);
      var Gt = (I[0] || E ? St : 1) * T[0], Wt = (I[1] || E ? Dt : 1) * T[1];
      return Gt === 0 && (Gt = Hr(p[0]) * go), Wt === 0 && (Wt = Hr(p[1]) * go), [Gt, Wt];
    }
    var B = P();
    if (!s && t.props.groupable) {
      var H = D.snapRenderInfo || {}, W = H.direction;
      br(W) && (W[0] || W[1]) && (D.snapRenderInfo = { direction: h, request: e.isRequest });
    }
    mt(t, "onBeforeScale", Ft(t, e, {
      scale: B,
      setFixedDirection: function(nt) {
        return r.setFixedDirection(nt), B = P(), B;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(nt) {
        B = nt;
      }
    }, !0));
    var F = [
      B[0] / T[0],
      B[1] / T[1]
    ], Y = u, X = [0, 0], j = Hr(F[0] * F[1]), rt = !u && !a && s;
    if (rt || v ? Y = Df(t, r.targetAllTransform, [0, 0], [0, 0], r) : u || (Y = r.fixedPosition), s || (X = mw(t, F, h, !c && f, r)), E) {
      I[0] && I[1] && X[0] && X[1] && (Math.abs(X[0] * d) > Math.abs(X[1] * m) ? X[1] = 0 : X[0] = 0);
      var K = !X[0] && !X[1];
      if (K && (y ? F[0] = It(F[0] * T[0], R) / T[0] : F[1] = It(F[1] * T[1], R) / T[1]), I[0] && !I[1] || X[0] && !X[1] || K && y) {
        F[0] += X[0];
        var at = d * F[0] * T[0] / S;
        F[1] = Hr(j * F[0]) * tt(at / m / T[1]);
      } else if (!I[0] && I[1] || !X[0] && X[1] || K && !y) {
        F[1] += X[1];
        var it = m * F[1] * T[1] * S;
        F[0] = Hr(j * F[1]) * tt(it / d / T[0]);
      }
    } else
      F[0] += X[0], F[1] += X[1], X[0] || (F[0] = It(F[0] * T[0], R) / T[0]), X[1] || (F[1] = It(F[1] * T[1], R) / T[1]);
    F[0] === 0 && (F[0] = Hr(p[0]) * go), F[1] === 0 && (F[1] = Hr(p[1]) * go), B = bw(F, [T[0], T[1]]);
    var $ = [
      d,
      m
    ], lt = [
      d * B[0],
      m * B[1]
    ];
    lt = Tp(lt, r.minScaleSize, r.maxScaleSize, E ? S : !1), B = Ru(2, function(nt) {
      return $[nt] ? lt[nt] / $[nt] : lt[nt];
    }), F = Ru(2, function(nt) {
      return B[nt] / T[nt];
    });
    var ht = Ru(2, function(nt) {
      return p[nt] ? F[nt] / p[nt] : F[nt];
    }), ut = "scale(".concat(F.join(", "), ")"), ct = "scale(".concat(B.join(", "), ")"), st = qo(r, ct, ut), pt = !x[0] || !x[1], xt = mC(t, pt ? ct : ut, r.fixedDirection, Y, r.fixedOffset, r, pt), Ot = rt ? xt : Et(xt, r.prevInverseDist || [0, 0]);
    if (r.prevDist = F, r.prevInverseDist = xt, B[0] === p[0] && B[1] === p[1] && Ot.every(function(nt) {
      return !nt;
    }) && !O && !rt)
      return !1;
    var Yt = Ft(t, e, z({ offsetWidth: d, offsetHeight: m, direction: h, scale: B, dist: F, delta: ht, isPinch: !!s }, xd(t, st, Ot, s, e)));
    return mt(t, "onScale", Yt), Yt;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = se(t, e, {});
    return mt(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: rp,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var a = Ie(t, "resizable", e);
    r.moveableScale = t.scale;
    var s = je(t, this, "dragControlStart", e, function(v, p) {
      return Ao(t, v, r, p);
    }), u = function(v) {
      n.setFixedDirection(v), s.forEach(function(p, h) {
        p.setFixedDirection(v), Ao(t, p.moveable, r, a[h]);
      });
    };
    r.setFixedDirection = u;
    var f = z(z({}, n), { targets: t.props.targets, events: s, setFixedDirection: u }), c = mt(t, "onScaleGroupStart", f);
    return r.isScale = c !== !1, r.isScale ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isScale) {
      Qo(t, "onBeforeScale", function(p) {
        mt(t, "onBeforeScaleGroup", Ft(t, e, z(z({}, p), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = n.dist, s = r.moveableScale;
        t.scale = [
          a[0] * s[0],
          a[1] * s[1]
        ];
        var u = t.props.keepRatio, f = r.fixedPosition, c = je(t, this, "dragControl", e, function(p, h) {
          var d = k(Gr(ga(t.rotation / 180 * Math.PI, 3), [
            h.datas.originalX * a[0],
            h.datas.originalY * a[1],
            1
          ], 3), 2), m = d[0], _ = d[1];
          return z(z({}, h), {
            parentDist: null,
            parentScale: a,
            parentKeepRatio: u,
            // recalculate child fixed position for parent group's dragging.
            dragClient: Kt(f, [m, _])
          });
        }), v = z({ targets: t.props.targets, events: c }, n);
        return mt(t, "onScaleGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isScale) {
      this.dragControlEnd(t, e);
      var a = je(t, this, "dragControlEnd", e), s = se(t, e, {
        targets: t.props.targets,
        events: a
      });
      return mt(t, "onScaleGroupEnd", s), r;
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
function xn(t, e) {
  return t.map(function(r, n) {
    return Ro(r, e[n], 1, 2);
  });
}
function ep(t, e, r) {
  var n = _r(t, e), a = _r(t, r), s = a - n;
  return s >= 0 ? s : s + 2 * Math.PI;
}
function Nw(t, e) {
  var r = ep(t[0], t[1], t[2]), n = ep(e[0], e[1], e[2]), a = Math.PI;
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
  viewClassName: Gf("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, a = r.scalable, s = r.warpable, u = r.zoom;
    if (n || a || !s)
      return [];
    var f = t.state, c = f.pos1, v = f.pos2, p = f.pos3, h = f.pos4, d = xn(c, v), m = xn(v, c), _ = xn(c, p), x = xn(p, c), y = xn(p, h), S = xn(h, p), w = xn(v, h), R = xn(h, v);
    return ot([
      e.createElement("div", { className: wt("line"), key: "middeLine1", style: Ji(d, y, u) }),
      e.createElement("div", { className: wt("line"), key: "middeLine2", style: Ji(m, S, u) }),
      e.createElement("div", { className: wt("line"), key: "middeLine3", style: Ji(_, w, u) }),
      e.createElement("div", { className: wt("line"), key: "middeLine4", style: Ji(x, R, u) })
    ], k(Dd(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return Er(r, wt("direction")) && Er(r, wt("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, a = t.props.target, s = n.target, u = Qd(s, r);
    if (!u || !a)
      return !1;
    var f = t.state, c = f.transformOrigin, v = f.is3d, p = f.targetTransform, h = f.targetMatrix, d = f.width, m = f.height, _ = f.left, x = f.top;
    r.datas = {}, r.targetTransform = p, r.warpTargetMatrix = v ? h : Ae(h, 3, 4), r.targetInverseMatrix = td(We(r.warpTargetMatrix, 4), 3, 4), r.direction = u, r.left = _, r.top = x, r.poses = [
      [0, 0],
      [d, 0],
      [0, m],
      [d, m]
    ].map(function(w) {
      return Et(w, c);
    }), r.nextPoses = r.poses.map(function(w) {
      var R = k(w, 2), O = R[0], I = R[1];
      return Gr(r.warpTargetMatrix, [O, I, 0, 1], 4);
    }), r.startValue = sr(4), r.prevMatrix = sr(4), r.absolutePoses = xe(f), r.posIndexes = _d(u), Vn(t, e), $o(t, e, "matrix3d"), f.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    };
    var y = Ft(t, e, z({ set: function(w) {
      r.startValue = w;
    } }, Uo(t, e))), S = mt(t, "onWarpStart", y);
    return S !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isRequest, a = e.distX, s = e.distY, u = r.targetInverseMatrix, f = r.prevMatrix, c = r.isWarp, v = r.startValue, p = r.poses, h = r.posIndexes, d = r.absolutePoses;
    if (!c)
      return !1;
    if (Xo(t, e, "matrix3d"), Pi(t, "warpable")) {
      var m = h.map(function(P) {
        return d[P];
      });
      m.length > 1 && m.push([
        (m[0][0] + m[1][0]) / 2,
        (m[0][1] + m[1][1]) / 2
      ]);
      var _ = Zo(t, n, {
        horizontal: m.map(function(P) {
          return P[1] + s;
        }),
        vertical: m.map(function(P) {
          return P[0] + a;
        })
      }), x = _.horizontal, y = _.vertical;
      s -= x.offset, a -= y.offset;
    }
    var S = Ne({ datas: r, distX: a, distY: s }, !0), w = r.nextPoses.slice();
    if (h.forEach(function(P) {
      w[P] = Kt(w[P], S);
    }), !sC.every(function(P) {
      return Nw(P.map(function(B) {
        return p[B];
      }), P.map(function(B) {
        return w[B];
      }));
    }))
      return !1;
    var R = yf(p[0], p[2], p[1], p[3], w[0], w[2], w[1], w[3]);
    if (!R.length)
      return !1;
    var O = nr(u, R, 4), I = gd(r, O, !0), E = nr(We(f, 4), I, 4);
    r.prevMatrix = I;
    var D = nr(v, I, 4), T = qo(r, "matrix3d(".concat(D.join(", "), ")"), "matrix3d(".concat(I.join(", "), ")"));
    return Ef(e, T), mt(t, "onWarp", Ft(t, e, z({ delta: E, matrix: D, dist: I, multiply: nr, transform: T }, Yr({
      transform: T
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, mt(t, "onWarpEnd", se(t, e, {})), n) : !1;
  }
}, Yw = /* @__PURE__ */ wt("area-pieces"), So = /* @__PURE__ */ wt("area-piece"), oh = /* @__PURE__ */ wt("avoid"), Xw = wt("view-dragging");
function Tu(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, a = r.height;
    Ap(e, oh), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function np(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: Yw },
    t.createElement("div", { className: So }),
    t.createElement("div", { className: So }),
    t.createElement("div", { className: So }),
    t.createElement("div", { className: So })
  );
}
var sh = {
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
    var r = t.props, n = r.target, a = r.dragArea, s = r.groupable, u = r.passDragArea, f = t.getState(), c = f.width, v = f.height, p = f.renderPoses, h = u ? wt("area", "pass") : wt("area");
    if (s)
      return [
        e.createElement("div", { key: "area", ref: Je(t, "areaElement"), className: h }),
        np(e)
      ];
    if (!n || !a)
      return [];
    var d = yf([0, 0], [c, 0], [0, v], [c, v], p[0], p[1], p[2], p[3]), m = d.length ? Jo(d, !0) : "none";
    return [
      e.createElement("div", { key: "area", ref: Je(t, "areaElement"), className: h, style: {
        top: "0px",
        left: "0px",
        width: "".concat(c, "px"),
        height: "".concat(v, "px"),
        transformOrigin: "0 0",
        transform: m
      } }),
      np(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, a = e.clientY, s = e.inputEvent;
    if (!s)
      return !1;
    r.isDragArea = !1;
    var u = t.areaElement, f = t.state, c = f.moveableClientRect, v = f.renderPoses, p = f.rootMatrix, h = f.is3d, d = c.left, m = c.top, _ = me(v), x = _.left, y = _.top, S = _.width, w = _.height, R = h ? 4 : 3, O = k(Di(p, [n - d, a - m], R), 2), I = O[0], E = O[1];
    I -= x, E -= y;
    var D = [
      { left: x, top: y, width: S, height: E - 10 },
      { left: x, top: y, width: I - 10, height: w },
      { left: x, top: y + E + 10, width: S, height: w - E - 10 },
      { left: x + I + 10, top: y, width: S - I - 10, height: w }
    ], T = [].slice.call(u.nextElementSibling.children);
    D.forEach(function(P, B) {
      T[B].style.cssText = "left: ".concat(P.left, "px;top: ").concat(P.top, "px; width: ").concat(P.width, "px; height: ").concat(P.height, "px;");
    }), Pp(u, oh), f.disableNativeEvent = !0;
  },
  drag: function(t, e) {
    var r = e.datas, n = e.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    r.isDragArea || (r.isDragArea = !0, Tu(t));
  },
  dragEnd: function(t, e) {
    this.enableNativeEvent(t);
    var r = e.inputEvent, n = e.datas;
    if (!r)
      return !1;
    n.isDragArea || Tu(t);
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
    Tu(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var e = t.state;
    e.disableNativeEvent && Rp(function() {
      e.disableNativeEvent = !1;
    });
  }
}, qw = _a("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, a = r.svgOrigin, s = r.groupable, u = t.getState(), f = u.beforeOrigin, c = u.rotation, v = u.svg, p = u.allMatrix, h = u.is3d, d = u.left, m = u.top, _ = u.offsetWidth, x = u.offsetHeight, y;
    if (!s && v && a) {
      var S = k(Lf(a, _, x), 2), w = S[0], R = S[1], O = h ? 4 : 3, I = dr(p, [w, R], O);
      y = ko(c, n, Et(I, [d, m]));
    } else
      y = ko(c, n, f);
    return [
      e.createElement("div", { className: wt("control", "origin"), style: y, key: "beforeOrigin" })
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
    var r = t.props, n = r.scrollContainer, a = n === void 0 ? t.getContainer() : n, s = r.scrollOptions, u = new DS(), f = Le(a, !0);
    e.datas.dragScroll = u, t.state.dragScroll = u;
    var c = e.isControl ? "controlGesto" : "targetGesto", v = e.targets;
    u.on("scroll", function(p) {
      var h = p.container, d = p.direction, m = Ft(t, e, {
        scrollContainer: h,
        direction: d
      }), _ = v ? "onScrollGroup" : "onScroll";
      v && (m.targets = v), mt(t, _, m);
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
}, uh = {
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
}, Vw = _a("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = ah(r.padding || {}), a = n.left, s = n.top, u = n.right, f = n.bottom, c = t.getState(), v = c.renderPoses, p = c.pos1, h = c.pos2, d = c.pos3, m = c.pos4, _ = [p, h, d, m], x = [];
    return a > 0 && x.push([0, 2]), s > 0 && x.push([0, 1]), u > 0 && x.push([1, 3]), f > 0 && x.push([2, 3]), x.map(function(y, S) {
      var w = k(y, 2), R = w[0], O = w[1], I = _[R], E = _[O], D = v[R], T = v[O], P = yf([0, 0], [100, 0], [0, 100], [100, 100], I, E, D, T);
      if (P.length)
        return e.createElement("div", { key: "padding".concat(S), className: wt("padding"), style: {
          transform: Jo(P, !0)
        } });
    });
  }
}), ip = ["nw", "ne", "se", "sw"];
function Co(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var Kw = [1, 2, 5, 6], Zw = [0, 3, 4, 7], Nn = [1, -1, -1, 1], Hn = [1, 1, -1, -1];
function Wf(t, e, r, n, a, s, u, f) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = r), f === void 0 && (f = n);
  var c = [], v = !1, p = t.filter(function(d) {
    return !d.virtual;
  }), h = p.map(function(d) {
    var m = d.horizontal, _ = d.vertical, x = d.pos;
    if (_ && !v && (v = !0, c.push("/")), v) {
      var y = Math.max(0, _ === 1 ? x[1] - s : f - x[1]);
      return c.push(Te(y, n, e)), y;
    } else {
      var y = Math.max(0, m === 1 ? x[0] - a : u - x[0]);
      return c.push(Te(y, r, e)), y;
    }
  });
  return {
    radiusPoses: p,
    styles: c,
    raws: h
  };
}
function fh(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var s = t[a];
    s.sub && (s.horizontal && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1, r[0] = a + 1), s.vertical && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function lh(t, e, r, n, a, s, u) {
  var f, c, v, p;
  s === void 0 && (s = [0, 0]), u === void 0 && (u = !1);
  var h = t.indexOf("/"), d = (h > -1 ? t.slice(0, h) : t).length, m = t.slice(0, d), _ = t.slice(d + 1), x = m.length, y = _.length, S = y > 0, w = k(m, 4), R = w[0], O = R === void 0 ? "0px" : R, I = w[1], E = I === void 0 ? O : I, D = w[2], T = D === void 0 ? O : D, P = w[3], B = P === void 0 ? E : P, H = k(_, 4), W = H[0], F = W === void 0 ? O : W, Y = H[1], X = Y === void 0 ? S ? F : E : Y, j = H[2], rt = j === void 0 ? S ? F : T : j, K = H[3], at = K === void 0 ? S ? X : B : K, it = [O, E, T, B].map(function(st) {
    return er(st, e);
  }), $ = [F, X, rt, at].map(function(st) {
    return er(st, r);
  }), lt = it.slice(), ht = $.slice();
  f = k(Co([lt[0], lt[1]], e), 2), lt[0] = f[0], lt[1] = f[1], c = k(Co([lt[3], lt[2]], e), 2), lt[3] = c[0], lt[2] = c[1], v = k(Co([ht[0], ht[3]], r), 2), ht[0] = v[0], ht[3] = v[1], p = k(Co([ht[1], ht[2]], r), 2), ht[1] = p[0], ht[2] = p[1];
  var ut = u ? lt : lt.slice(0, Math.max(s[0], x)), ct = u ? ht : ht.slice(0, Math.max(s[1], y));
  return ot(ot([], k(ut.map(function(st, pt) {
    var xt = ip[pt];
    return {
      virtual: pt >= x,
      horizontal: Nn[pt],
      vertical: 0,
      pos: [n + st, a + (Hn[pt] === -1 ? r : 0)],
      sub: !0,
      raw: it[pt],
      direction: xt
    };
  })), !1), k(ct.map(function(st, pt) {
    var xt = ip[pt];
    return {
      virtual: pt >= y,
      horizontal: 0,
      vertical: Hn[pt],
      pos: [n + (Nn[pt] === -1 ? e : 0), a + st],
      sub: !0,
      raw: $[pt],
      direction: xt
    };
  })), !1);
}
function Jw(t, e, r, n, a) {
  a === void 0 && (a = e.length);
  var s = fh(t.slice(n)), u = s.horizontalRange, f = s.verticalRange, c = r - n, v = 0;
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
  var h = fh(t.slice(r)), d = h.horizontalRange, m = h.verticalRange;
  if (n > -1)
    for (var _ = Nn[n] === 1 ? s - v : f - s, x = d[1]; x <= n; ++x) {
      var y = Hn[x] === 1 ? p : c, S = 0;
      if (n === x ? S = s : x === 0 ? S = v + _ : Nn[x] === -1 && (S = f - (e[r][0] - v)), t.splice(r + x, 0, {
        horizontal: Nn[x],
        vertical: 0,
        pos: [S, y]
      }), e.splice(r + x, 0, [S, y]), x === 0)
        break;
    }
  else if (a > -1) {
    var w = Hn[a] === 1 ? u - p : c - u;
    if (d[1] === 0 && m[1] === 0) {
      var R = [
        v + w,
        p
      ];
      t.push({
        horizontal: Nn[0],
        vertical: 0,
        pos: R
      }), e.push(R);
    }
    for (var O = m[0], x = m[1]; x <= a; ++x) {
      var S = Nn[x] === 1 ? v : f, y = 0;
      if (a === x ? y = u : x === 0 ? y = p + w : Hn[x] === 1 ? y = e[r + O][1] : Hn[x] === -1 && (y = c - (e[r + O][1] - p)), t.push({
        horizontal: 0,
        vertical: Hn[x],
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
function Nf(t, e, r) {
  var n = t.props.clipRelative, a = t.state, s = a.width, u = a.height, f = e, c = f.type, v = f.poses, p = c === "rect", h = c === "circle";
  if (c === "polygon")
    return r.map(function(E) {
      return "".concat(Te(E[0], s, n), " ").concat(Te(E[1], u, n));
    });
  if (p || c === "inset") {
    var d = r[1][1], m = r[3][0], _ = r[7][0], x = r[5][1];
    if (p)
      return [
        d,
        m,
        x,
        _
      ].map(function(E) {
        return "".concat(E, "px");
      });
    var y = [d, s - m, u - x, _].map(function(E, D) {
      return Te(E, D % 2 ? s : u, n);
    });
    if (r.length > 8) {
      var S = k(Et(r[4], r[0]), 2), w = S[0], R = S[1];
      y.push.apply(y, ot(["round"], k(Wf(v.slice(8).map(function(E, D) {
        return z(z({}, E), { pos: r[D] });
      }), n, w, R, _, d, m, x).styles), !1));
    }
    return y;
  } else if (h || c === "ellipse") {
    var O = r[0], I = Te(tt(r[1][1] - O[1]), h ? Math.sqrt((s * s + u * u) / 2) : u, n), y = h ? [I] : [Te(tt(r[2][0] - O[0]), s, n), I];
    return y.push("at", Te(O[0], s, n), Te(O[1], u, n)), y;
  }
}
function Lo(t, e, r, n) {
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
function ch(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    e[0] = Math.min(e[0], a[0]), e[1] = Math.max(e[1], a[0]), r[0] = Math.min(r[0], a[1]), r[1] = Math.max(r[1], a[1]);
  }), [
    tt(e[1] - e[0]),
    tt(r[1] - r[0])
  ];
}
function ap(t, e, r, n, a) {
  var s, u, f, c, v, p, h, d, m;
  if (t) {
    var _ = a;
    if (!_) {
      var x = Qr(t), y = x("clipPath");
      _ = y !== "none" ? y : x("clip");
    }
    if (!((!_ || _ === "none" || _ === "auto") && (_ = n, !_))) {
      var S = Mp(_), w = S.prefix, R = w === void 0 ? _ : w, O = S.value, I = O === void 0 ? "" : O, E = R === "circle", D = " ";
      if (R === "polygon") {
        var T = Yn(I || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        D = ",";
        var P = T.map(function(Jt) {
          var ur = k(Jt.split(" "), 2), cr = ur[0], fr = ur[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              er(cr, e),
              er(fr, r)
            ]
          };
        }), B = Un(P.map(function(Jt) {
          return Jt.pos;
        }));
        return {
          type: R,
          clipText: _,
          poses: P,
          splitter: D,
          left: B.minX,
          right: B.maxX,
          top: B.minY,
          bottom: B.maxY
        };
      } else if (E || R === "ellipse") {
        var H = "", W = "", F = 0, Y = 0, T = wn(I);
        if (E) {
          var X = "";
          s = k(T, 4), u = s[0], X = u === void 0 ? "50%" : u, f = s[2], H = f === void 0 ? "50%" : f, c = s[3], W = c === void 0 ? "50%" : c, F = er(X, Math.sqrt((e * e + r * r) / 2)), Y = F;
        } else {
          var j = "", rt = "";
          v = k(T, 5), p = v[0], j = p === void 0 ? "50%" : p, h = v[1], rt = h === void 0 ? "50%" : h, d = v[3], H = d === void 0 ? "50%" : d, m = v[4], W = m === void 0 ? "50%" : m, F = er(j, e), Y = er(rt, r);
        }
        var K = [
          er(H, e),
          er(W, r)
        ], P = ot([
          {
            vertical: 1,
            horizontal: 1,
            pos: K,
            direction: "nesw"
          }
        ], k(tE.slice(0, E ? 1 : 2).map(function(cr) {
          return {
            vertical: tt(cr[1]),
            horizontal: cr[0],
            direction: cr[2],
            sub: !0,
            pos: [
              K[0] + cr[0] * F,
              K[1] + cr[1] * Y
            ]
          };
        })), !1);
        return {
          type: R,
          clipText: _,
          radiusX: F,
          radiusY: Y,
          left: K[0] - F,
          top: K[1] - Y,
          right: K[0] + F,
          bottom: K[1] + Y,
          poses: P,
          splitter: D
        };
      } else if (R === "inset") {
        var T = wn(I || "0 0 0 0"), at = T.indexOf("round"), it = (at > -1 ? T.slice(0, at) : T).length, $ = T.slice(it + 1), lt = k(T.slice(0, it), 4), ht = lt[0], ut = lt[1], ct = ut === void 0 ? ht : ut, st = lt[2], pt = st === void 0 ? ht : st, xt = lt[3], Ot = xt === void 0 ? ct : xt, Yt = k([ht, pt].map(function(cr) {
          return er(cr, r);
        }), 2), nt = Yt[0], ft = Yt[1], Xt = k([Ot, ct].map(function(cr) {
          return er(cr, e);
        }), 2), St = Xt[0], Dt = Xt[1], Gt = e - Dt, Wt = r - ft, Zt = lh($, Gt - St, Wt - nt, St, nt), P = ot(ot([], k(Lo(nt, Gt, Wt, St)), !1), k(Zt), !1);
        return {
          type: "inset",
          clipText: _,
          poses: P,
          top: nt,
          left: St,
          right: Gt,
          bottom: Wt,
          radius: $,
          splitter: D
        };
      } else if (R === "rect") {
        var T = Yn(I || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        D = ",";
        var Pt = k(T.map(function(jr) {
          var Pr = ca(jr).value;
          return Pr;
        }), 4), kt = Pt[0], Dt = Pt[1], ft = Pt[2], St = Pt[3], P = Lo(kt, Dt, ft, St);
        return {
          type: "rect",
          clipText: _,
          poses: P,
          top: kt,
          right: Dt,
          bottom: ft,
          left: St,
          values: T,
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
    var p = v.filter(function(F) {
      return F === "w" || F === "e";
    }), h = v.filter(function(F) {
      return F === "n" || F === "s";
    }), d = p[0], m = h[0];
    c[e] = r;
    var _ = k(ch(t), 2), x = _[0], y = _[1], S = x && y ? x / y : 0;
    if (S && a) {
      var w = (e + 4) % 8, R = t[w].pos, O = [0, 0];
      u.indexOf("w") > -1 ? O[0] = -1 : u.indexOf("e") > -1 && (O[0] = 1), u.indexOf("n") > -1 ? O[1] = -1 : u.indexOf("s") > -1 && (O[1] = 1);
      var I = eh([x, y], r, S, O, !0), E = x + I[0], D = y + I[1], T = R[1], P = R[1], B = R[0], H = R[0];
      O[0] === -1 ? B = H - E : O[0] === 1 ? H = B + E : (B = B - E / 2, H = H + E / 2), O[1] === -1 ? T = P - D : (O[1] === 1 || (T = P - D / 2), P = T + D);
      var W = Lo(T, H, P, B);
      t.forEach(function(F, Y) {
        c[Y][0] = W[Y].pos[0] - F.pos[0], c[Y][1] = W[Y].pos[1] - F.pos[1];
      });
    } else
      t.forEach(function(F, Y) {
        var X = F.direction;
        X && (X.indexOf(d) > -1 && (c[Y][0] = r[0]), X.indexOf(m) > -1 && (c[Y][1] = r[1]));
      }), d && (c[1][0] = r[0] / 2, c[5][0] = r[0] / 2), m && (c[3][1] = r[1] / 2, c[7][1] = r[1] / 2);
  } else u && !f ? v.forEach(function(F) {
    var Y = F === "n" || F === "s";
    t.forEach(function(X, j) {
      var rt = X.direction, K = X.horizontal, at = X.vertical;
      !rt || rt.indexOf(F) === -1 || (c[j] = [
        Y || !K ? 0 : r[0],
        !Y || !at ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function nE(t, e) {
  var r = k(hd(t, e), 2), n = r[0], a = r[1], s = e.datas, u = s.clipPath, f = s.clipIndex, c = u, v = c.type, p = c.poses, h = c.splitter, d = p.map(function(w) {
    return w.pos;
  });
  if (v === "polygon")
    d.splice(f, 0, [n, a]);
  else if (v === "inset") {
    var m = Kw.indexOf(f), _ = Zw.indexOf(f), x = p.length;
    if (Qw(p, d, 8, m, _, n, a, d[4][0], d[4][1], d[0][0], d[0][1]), x === p.length)
      return;
  } else
    return;
  var y = Nf(t, u, d), S = "".concat(v, "(").concat(y.join(h), ")");
  mt(t, "onClip", Ft(t, e, z({ clipEventType: "added", clipType: v, poses: d, clipStyles: y, clipStyle: S, distX: 0, distY: 0 }, Yr({
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
  var h = Nf(t, n, v), d = "".concat(u, "(").concat(h.join(c), ")");
  mt(t, "onClip", Ft(t, e, z({ clipEventType: "removed", clipType: u, poses: v, clipStyles: h, clipStyle: d, distX: 0, distY: 0 }, Yr({
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
    var r = t.props, n = r.customClipPath, a = r.defaultClipPath, s = r.clipArea, u = r.zoom, f = r.groupable, c = t.getState(), v = c.target, p = c.width, h = c.height, d = c.allMatrix, m = c.is3d, _ = c.left, x = c.top, y = c.pos1, S = c.pos2, w = c.pos3, R = c.pos4, O = c.clipPathState, I = c.snapBoundInfos, E = c.rotation;
    if (!v || f)
      return [];
    var D = ap(v, p, h, a || "inset", O || n);
    if (!D)
      return [];
    var T = m ? 4 : 3, P = D.type, B = D.poses, H = B.map(function(Dt) {
      var Gt = dr(d, Dt.pos, T);
      return [
        Gt[0] - _,
        Gt[1] - x
      ];
    }), W = [], F = [], Y = P === "rect", X = P === "inset", j = P === "polygon";
    if (Y || X || j) {
      var rt = X ? H.slice(0, 8) : H;
      F = rt.map(function(Dt, Gt) {
        var Wt = Gt === 0 ? rt[rt.length - 1] : rt[Gt - 1], Zt = _r(Wt, Dt), Pt = $d(Wt, Dt);
        return e.createElement("div", { key: "clipLine".concat(Gt), className: wt("line", "clip-line", "snap-control"), "data-clip-index": Gt, style: {
          width: "".concat(Pt, "px"),
          transform: "translate(".concat(Wt[0], "px, ").concat(Wt[1], "px) rotate(").concat(Zt, "rad) scaleY(").concat(u, ")")
        } });
      });
    }
    if (W = H.map(function(Dt, Gt) {
      return e.createElement("div", { key: "clipControl".concat(Gt), className: wt("control", "clip-control", "snap-control"), "data-clip-index": Gt, style: {
        transform: "translate(".concat(Dt[0], "px, ").concat(Dt[1], "px) rotate(").concat(E, "rad) scale(").concat(u, ")")
      } });
    }), X && W.push.apply(W, ot([], k(H.slice(8).map(function(Dt, Gt) {
      return e.createElement("div", { key: "clipRadiusControl".concat(Gt), className: wt("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + Gt, style: {
        transform: "translate(".concat(Dt[0], "px, ").concat(Dt[1], "px) rotate(").concat(E, "rad) scale(").concat(u, ")")
      } });
    })), !1)), P === "circle" || P === "ellipse") {
      var K = D.left, at = D.top, it = D.radiusX, $ = D.radiusY, lt = k(Et(dr(d, [K, at], T), dr(d, [0, 0], T)), 2), ht = lt[0], ut = lt[1], ct = "none";
      if (!s) {
        for (var st = Math.max(10, it / 5, $ / 5), pt = [], xt = 0; xt <= st; ++xt) {
          var Ot = Math.PI * 2 / st * xt;
          pt.push([
            it + (it - u) * Math.cos(Ot),
            $ + ($ - u) * Math.sin(Ot)
          ]);
        }
        pt.push([it, -2]), pt.push([-2, -2]), pt.push([-2, $ * 2 + 2]), pt.push([it * 2 + 2, $ * 2 + 2]), pt.push([it * 2 + 2, -2]), pt.push([it, -2]), ct = "polygon(".concat(pt.map(function(Dt) {
          return "".concat(Dt[0], "px ").concat(Dt[1], "px");
        }).join(", "), ")");
      }
      W.push(e.createElement("div", { key: "clipEllipse", className: wt("clip-ellipse", "snap-control"), style: {
        width: "".concat(it * 2, "px"),
        height: "".concat($ * 2, "px"),
        clipPath: ct,
        transform: "translate(".concat(-_ + ht, "px, ").concat(-x + ut, "px) ").concat(Jo(d))
      } }));
    }
    if (s) {
      var Yt = me(ot([y, S, w, R], k(H), !1)), nt = Yt.width, ft = Yt.height, Xt = Yt.left, St = Yt.top;
      if (j || Y || X) {
        var pt = X ? H.slice(0, 8) : H;
        W.push(e.createElement("div", { key: "clipArea", className: wt("clip-area", "snap-control"), style: {
          width: "".concat(nt, "px"),
          height: "".concat(ft, "px"),
          transform: "translate(".concat(Xt, "px, ").concat(St, "px)"),
          clipPath: "polygon(".concat(pt.map(function(Gt) {
            return "".concat(Gt[0] - Xt, "px ").concat(Gt[1] - St, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return I && ["vertical", "horizontal"].forEach(function(Dt) {
      var Gt = I[Dt], Wt = Dt === "horizontal";
      Gt.isSnap && F.push.apply(F, ot([], k(Gt.snap.posInfos.map(function(Zt, Pt) {
        var kt = Zt.pos, Jt = Et(dr(d, Wt ? [0, kt] : [kt, 0], T), [_, x]), ur = Et(dr(d, Wt ? [p, kt] : [kt, h], T), [_, x]);
        return sa(e, "", Jt, ur, u, "clip".concat(Dt, "snap").concat(Pt), "guideline");
      })), !1)), Gt.isBound && F.push.apply(F, ot([], k(Gt.bounds.map(function(Zt, Pt) {
        var kt = Zt.pos, Jt = Et(dr(d, Wt ? [0, kt] : [kt, 0], T), [_, x]), ur = Et(dr(d, Wt ? [p, kt] : [kt, h], T), [_, x]);
        return sa(e, "", Jt, ur, u, "clip".concat(Dt, "bounds").concat(Pt), "guideline", "bounds", "bold");
      })), !1));
    }), ot(ot([], k(W), !1), k(F), !1);
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
    var r = t.state, n = t.props, a = n.defaultClipPath, s = n.customClipPath, u = r.target, f = r.width, c = r.height, v = e.inputEvent ? e.inputEvent.target : null, p = v && v.getAttribute("class") || "", h = e.datas, d = ap(u, f, c, a || "inset", s);
    if (!d)
      return !1;
    var m = d.clipText, _ = d.type, x = d.poses, y = mt(t, "onClipStart", Ft(t, e, {
      clipType: _,
      clipStyle: m,
      poses: x.map(function(S) {
        return S.pos;
      })
    }));
    return y === !1 ? (h.isClipStart = !1, !1) : (h.isControl = p && p.indexOf("clip-control") > -1, h.isLine = p.indexOf("clip-line") > -1, h.isArea = p.indexOf("clip-area") > -1 || p.indexOf("clip-ellipse") > -1, h.clipIndex = v ? parseInt(v.getAttribute("data-clip-index"), 10) : -1, h.clipPath = d, h.isClipStart = !0, r.clipPathState = m, Vn(t, e), !0);
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.originalDatas, f = e.isDragTarget;
    if (!s.isClipStart)
      return !1;
    var c = s, v = c.isControl, p = c.isLine, h = c.isArea, d = c.clipIndex, m = c.clipPath;
    if (!m)
      return !1;
    var _ = $n(t.props, "clippable"), x = _.keepRatio, y = 0, S = 0, w = u.draggable, R = Ne(e);
    f && w ? (r = k(w.prevBeforeDist, 2), y = r[0], S = r[1]) : (n = k(R, 2), y = n[0], S = n[1]);
    var O = [y, S], I = t.state, E = I.width, D = I.height, T = !h && !v && !p, P = m.type, B = m.poses, H = m.splitter, W = B.map(function(vt) {
      return vt.pos;
    });
    T && (y = -y, S = -S);
    var F = !v || B[d].direction === "nesw", Y = P === "inset" || P === "rect", X = B.map(function() {
      return [0, 0];
    });
    if (v && !F) {
      var j = B[d], rt = j.horizontal, K = j.vertical, at = [
        y * tt(rt),
        S * tt(K)
      ];
      X = eE(B, d, at, Y, x);
    } else F && (X = W.map(function() {
      return [y, S];
    }));
    var it = W.map(function(vt, Ct) {
      return Kt(vt, X[Ct]);
    }), $ = ot([], k(it), !1);
    I.snapBoundInfos = null;
    var lt = m.type === "circle", ht = m.type === "ellipse";
    if (lt || ht) {
      var ut = me(it), ct = tt(ut.bottom - ut.top), st = tt(ht ? ut.right - ut.left : ct), pt = it[0][1] + ct, xt = it[0][0] - st, Ot = it[0][0] + st;
      lt && ($.push([Ot, ut.bottom]), X.push([1, 0])), $.push([ut.left, pt]), X.push([0, 1]), $.push([xt, ut.bottom]), X.push([1, 0]);
    }
    var Yt = Nd((_.clipHorizontalGuidelines || []).map(function(vt) {
      return er("".concat(vt), D);
    }), (_.clipVerticalGuidelines || []).map(function(vt) {
      return er("".concat(vt), E);
    }), E, D), nt = [], ft = [];
    if (lt || ht)
      nt = [$[4][0], $[2][0]], ft = [$[1][1], $[3][1]];
    else if (Y) {
      var Xt = [$[0], $[2], $[4], $[6]], St = [X[0], X[2], X[4], X[6]];
      nt = Xt.filter(function(vt, Ct) {
        return St[Ct][0];
      }).map(function(vt) {
        return vt[0];
      }), ft = Xt.filter(function(vt, Ct) {
        return St[Ct][1];
      }).map(function(vt) {
        return vt[1];
      });
    } else
      nt = $.filter(function(vt, Ct) {
        return X[Ct][0];
      }).map(function(vt) {
        return vt[0];
      }), ft = $.filter(function(vt, Ct) {
        return X[Ct][1];
      }).map(function(vt) {
        return vt[1];
      });
    var Dt = [0, 0], Gt = Yv(Yt, _.clipTargetBounds && { left: 0, top: 0, right: E, bottom: D }, nt, ft, 5, 5), Wt = Gt.horizontal, Zt = Gt.vertical, Pt = Wt.offset, kt = Zt.offset;
    if (Wt.isBound && (Dt[1] += Pt), Zt.isBound && (Dt[0] += kt), (ht || lt) && X[0][0] === 0 && X[0][1] === 0) {
      var ut = me(it), Jt = ut.bottom - ut.top, ur = ht ? ut.right - ut.left : Jt, cr = Zt.isBound ? tt(kt) : Zt.snapIndex === 0 ? -kt : kt, fr = Wt.isBound ? tt(Pt) : Wt.snapIndex === 0 ? -Pt : Pt;
      ur -= cr, Jt -= fr, lt && (Jt = Ad(Zt, Wt) > 0 ? Jt : ur, ur = Jt);
      var Qt = $[0];
      $[1][1] = Qt[1] - Jt, $[2][0] = Qt[0] + ur, $[3][1] = Qt[1] + Jt, $[4][0] = Qt[0] - ur;
    } else if (Y && x && v) {
      var jr = k(ch(B), 2), Pr = jr[0], ye = jr[1], en = Pr && ye ? Pr / ye : 0, nn = B[d], be = nn.direction || "", Be = $[1][1], pt = $[5][1], xt = $[7][0], Ot = $[3][0];
      tt(Pt) <= tt(kt) ? Pt = Hr(Pt) * tt(kt) / en : kt = Hr(kt) * tt(Pt) * en, be.indexOf("w") > -1 ? xt -= kt : be.indexOf("e") > -1 ? Ot -= kt : (xt += kt / 2, Ot -= kt / 2), be.indexOf("n") > -1 ? Be -= Pt : be.indexOf("s") > -1 ? pt -= Pt : (Be += Pt / 2, pt -= Pt / 2);
      var an = Lo(Be, Ot, pt, xt);
      $.forEach(function(sn, Zn) {
        var un;
        un = k(an[Zn].pos, 2), sn[0] = un[0], sn[1] = un[1];
      });
    } else
      $.forEach(function(vt, Ct) {
        var te = X[Ct];
        te[0] && (vt[0] -= kt), te[1] && (vt[1] -= Pt);
      });
    var on = Nf(t, m, it), J = "".concat(P, "(").concat(on.join(H), ")");
    if (I.clipPathState = J, lt || ht)
      nt = [$[4][0], $[2][0]], ft = [$[1][1], $[3][1]];
    else if (Y) {
      var Xt = [$[0], $[2], $[4], $[6]];
      nt = Xt.map(function(Ct) {
        return Ct[0];
      }), ft = Xt.map(function(Ct) {
        return Ct[1];
      });
    } else
      nt = $.map(function(vt) {
        return vt[0];
      }), ft = $.map(function(vt) {
        return vt[1];
      });
    if (I.snapBoundInfos = Yv(Yt, _.clipTargetBounds && { left: 0, top: 0, right: E, bottom: D }, nt, ft, 1, 1), w) {
      var U = I.is3d, gt = I.allMatrix, At = U ? 4 : 3, Vt = Dt;
      f && (Vt = [
        O[0] + Dt[0] - R[0],
        O[1] + Dt[1] - R[1]
      ]), w.deltaOffset = nr(gt, [Vt[0], Vt[1], 0, 0], At);
    }
    return mt(t, "onClip", Ft(t, e, z({ clipEventType: "changed", clipType: P, poses: it, clipStyle: J, clipStyles: on, distX: y, distY: S }, Yr((a = {}, a[P === "rect" ? "clip" : "clipPath"] = J, a), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, a = e.isDouble, s = n.isLine, u = n.isClipStart, f = n.isControl;
    return u ? (mt(t, "onClipEnd", se(t, e, {})), a && (f ? iE(t, e) : s && nE(t, e)), a || r) : !1;
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
    return e.isRequest ? e.requestAble === "originDraggable" : Er(e.inputEvent.target, wt("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    Vn(t, e);
    var n = Ft(t, e, {
      dragStart: Nr.dragStart(t, new Ci().dragStart([0, 0], e))
    }), a = mt(t, "onDragOriginStart", n);
    return r.startOrigin = t.state.transformOrigin, r.startTargetOrigin = t.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, a === !1 ? (r.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var s = k(Ne(e), 2), u = s[0], f = s[1], c = t.state, v = c.width, p = c.height, h = c.offsetMatrix, d = c.targetMatrix, m = c.is3d, _ = t.props.originRelative, x = _ === void 0 ? !0 : _, y = m ? 4 : 3, S = [u, f];
    if (a) {
      var w = e.distOrigin;
      (w[0] || w[1]) && (S = w);
    }
    var R = Kt(r.startOrigin, S), O = Kt(r.startTargetOrigin, S), I = Et(S, r.prevOrigin), E = ya(h, d, R, y), D = t.getRect(), T = me(Kn(E, v, p, y)), P = [
      D.left - T.left,
      D.top - T.top
    ];
    r.prevOrigin = S;
    var B = [
      Te(O[0], v, x),
      Te(O[1], p, x)
    ].join(" "), H = Nr.drag(t, xa(e, t.state, P, !!n)), W = Ft(t, e, z(z({ width: v, height: p, origin: R, dist: S, delta: I, transformOrigin: B, drag: H }, Yr({
      transformOrigin: B,
      transform: H.transform
    }, e)), { afterTransform: H.transform }));
    return mt(t, "onDragOrigin", W), W;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (mt(t, "onDragOriginEnd", se(t, e, {})), !0) : !1;
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
function op(t, e, r, n, a) {
  n === void 0 && (n = [0, 0]);
  var s = [];
  return !t || t === "0px" ? s = [] : s = wn(t), lh(s, e, r, 0, 0, n, a);
}
function sp(t, e, r, n, a) {
  var s = t.state, u = s.width, f = s.height, c = Wf(a, t.props.roundRelative, u, f), v = c.raws, p = c.styles, h = c.radiusPoses, d = jw(h, v), m = d.horizontals, _ = d.verticals, x = p.join(" ");
  s.borderRadiusState = x;
  var y = Ft(t, e, z({ horizontals: m, verticals: _, borderRadius: x, width: u, height: f, delta: n, dist: r }, Yr({
    borderRadius: x
  }, e)));
  return mt(t, "onRound", y), y;
}
function up(t) {
  var e, r, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var s = t.moveables[0], u = t.getTargets()[0];
    u && (s?.props.target === u ? (a = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = a) : (a = zf(u).borderRadius, n.borderRadius = a));
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
    return e === !0 || e === "line" ? wt("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, e) {
    var r = t.getState(), n = r.target, a = r.width, s = r.height, u = r.allMatrix, f = r.is3d, c = r.left, v = r.top, p = r.borderRadiusState, h = t.props, d = h.minRoundControls, m = d === void 0 ? [0, 0] : d, _ = h.maxRoundControls, x = _ === void 0 ? [4, 4] : _, y = h.zoom, S = h.roundPadding, w = S === void 0 ? 0 : S, R = h.isDisplayShadowRoundControls, O = h.groupable;
    if (!n)
      return null;
    var I = p || up(t), E = f ? 4 : 3, D = op(I, a, s, m, !0);
    if (!D)
      return null;
    var T = 0, P = 0, B = O ? [0, 0] : [c, v];
    return D.map(function(H, W) {
      var F = H.horizontal, Y = H.vertical, X = H.direction || "", j = ot([], k(H.pos), !1);
      P += Math.abs(F), T += Math.abs(Y), F && X.indexOf("n") > -1 && (j[1] -= w), Y && X.indexOf("w") > -1 && (j[0] -= w), F && X.indexOf("s") > -1 && (j[1] += w), Y && X.indexOf("e") > -1 && (j[0] += w);
      var rt = Et(dr(u, j, E), B), K = R && R !== "horizontal", at = H.vertical ? T <= x[1] && (K || !H.virtual) : P <= x[0] && (R || !H.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(W), className: wt("control", "border-radius", H.vertical ? "vertical" : "", H.virtual ? "virtual" : ""), "data-radius-index": W, style: {
        display: at ? "block" : "none",
        transform: "translate(".concat(rt[0], "px, ").concat(rt[1], "px) scale(").concat(y, ")")
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
    var h = Ft(t, e, {}), d = mt(t, "onRoundStart", h);
    if (d === !1)
      return !1;
    n.lineIndex = v, n.controlIndex = c, n.isControl = u, n.isLine = f, Vn(t, e);
    var m = t.props, _ = m.roundRelative, x = m.minRoundControls, y = x === void 0 ? [0, 0] : x, S = t.state, w = S.width, R = S.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var O = up(t), I = op(O || "", w, R, y, !0) || [];
    return n.controlPoses = I, S.borderRadiusState = Wf(I, _, w, R).styles.join(" "), h;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var a = r.controlIndex, s = k(Ne(e), 2), u = s[0], f = s[1], c = [u, f], v = Et(c, r.prevDist), p = t.props.maxRoundControls, h = p === void 0 ? [4, 4] : p, d = t.state, m = d.width, _ = d.height, x = n[a], y = x.vertical, S = x.horizontal, w = n.map(function(O) {
      var I = O.horizontal, E = O.vertical, D = [
        I * S * c[0],
        E * y * c[1]
      ];
      if (I) {
        if (h[0] === 1)
          return D;
        if (h[0] < 4 && I !== S)
          return D;
      } else {
        if (h[1] === 0)
          return D[1] = E * S * c[0] / m * _, D;
        if (y) {
          if (h[1] === 1)
            return D;
          if (h[1] < 4 && E !== y)
            return D;
        }
      }
      return [0, 0];
    });
    w[a] = c;
    var R = n.map(function(O, I) {
      return z(z({}, O), { pos: Kt(O.pos, w[I]) });
    });
    return a < 4 ? R.slice(0, a + 1).forEach(function(O) {
      O.virtual = !1;
    }) : R.slice(4, a + 1).forEach(function(O) {
      O.virtual = !1;
    }), r.prevDist = [u, f], sp(t, e, c, v, R);
  },
  dragControlEnd: function(t, e) {
    var r = t.state;
    r.borderRadiusState = "";
    var n = e.datas, a = e.isDouble;
    if (!n.isRound)
      return !1;
    var s = n.isControl, u = n.controlIndex, f = n.isLine, c = n.lineIndex, v = n.controlPoses, p = v.filter(function(S) {
      var w = S.virtual;
      return w;
    }).length, h = t.props.roundClickable, d = h === void 0 ? !0 : h;
    if (a && d) {
      if (s && (d === !0 || d === "control"))
        fE(v, u);
      else if (f && (d === !0 || d === "line")) {
        var m = k(hd(t, e), 2), _ = m[0], x = m[1];
        sE(v, c, _, x);
      }
      p !== v.filter(function(S) {
        var w = S.virtual;
        return w;
      }).length && sp(t, e, [0, 0], [0, 0], v);
    }
    var y = se(t, e, {});
    return mt(t, "onRoundEnd", y), r.borderRadiusState = "", y;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Ie(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return mt(t, "onRoundGroupStart", u), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Ie(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] }), Yr({
        borderRadius: r.borderRadius
      }, f));
    }) }, r);
    return mt(t, "onRoundGroup", u), u;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, a = Ie(t, "roundable", e);
    Qo(t, "onRound", function(f) {
      var c = z({ targets: t.props.targets, events: a.map(function(v, p) {
        return z(z(z({}, v), { target: n[p], moveable: r[p], currentTarget: r[p] }), Yr({
          borderRadius: f.borderRadius
        }, v));
      }) }, f);
      mt(t, "onRoundGroup", c);
    });
    var s = this.dragControlEnd(t, e);
    if (!s)
      return !1;
    var u = z({ targets: t.props.targets, events: a.map(function(f, c) {
      var v;
      return z(z({}, f), { target: n[c], moveable: r[c], currentTarget: r[c], lastEvent: (v = f.datas) === null || v === void 0 ? void 0 : v.lastEvent });
    }) }, s);
    return mt(t, "onRoundGroupEnd", u), u;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function cE(t, e) {
  var r = e ? 4 : 3, n = sr(r), a = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var vh = {
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
    var r = t.state, n = r.is3d, a = r.targetMatrix, s = r.inlineTransform, u = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(ed(a, !0), ")"), f = !s || s === "none" ? u : s;
    e.datas.startTransforms = cE(f, n) ? [] : wn(f);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return Ft(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = br(r) ? r : wn(r);
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
    this.setTransform(t, e), this.resetStyle(e), mt(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), mt(t, "onBeforeRender", Ft(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), mt(t, "onBeforeRenderEnd", Ft(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = Ie(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.setTransform(c, u), r.resetStyle(u), r.fillDragStartParams(c, u);
    });
    mt(t, "onBeforeRenderGroupStart", Ft(t, e, {
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
    var n = Ie(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.resetStyle(u), r.fillDragParams(c, u);
    });
    mt(t, "onBeforeRenderGroup", Ft(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: s
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), mt(t, "onBeforeRenderGroupEnd", Ft(t, e, {
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
}, ph = {
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
    mt(t, "onRenderStart", Ft(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  drag: function(t, e) {
    mt(t, "onRender", this.fillDragParams(t, e));
  },
  dragAfter: function(t, e) {
    return this.drag(t, e);
  },
  dragEnd: function(t, e) {
    mt(t, "onRenderEnd", this.fillDragEndParams(t, e));
  },
  dragGroupStart: function(t, e) {
    mt(t, "onRenderGroupStart", Ft(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = Ie(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragParams(c, u);
    });
    mt(t, "onRenderGroup", Ft(t, e, z(z({ isPinch: !!e.isPinch, targets: t.props.targets, transform: mo(e), transformObject: {} }, Yr(_o(e))), { events: s })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = Ie(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragEndParams(c, u);
    });
    mt(t, "onRenderGroupEnd", Ft(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: s, transformObject: {}, transform: mo(e) }, Yr(_o(e)))));
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
    return Si(Po(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Ft(t, e, z({ isPinch: !!e.isPinch, transformObject: r, transform: mo(e) }, Yr(_o(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return Si(Po(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Ft(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: mo(e) }, Yr(_o(e))));
  }
};
function na(t, e, r, n, a, s, u) {
  s.clientDistX = s.distX, s.clientDistY = s.distY;
  var f = a === "Start", c = a === "End", v = a === "After", p = t.state.target, h = s.isRequest, d = n.indexOf("Control") > -1;
  if (!p || f && d && !h && t.areaElement === s.inputEvent.target)
    return !1;
  var m = ot([], k(e), !1);
  if (h) {
    var _ = s.requestAble;
    m.some(function(W) {
      return W.name === _;
    }) || m.push.apply(m, ot([], k(t.props.ables.filter(function(W) {
      return W.name === _;
    })), !1));
  }
  if (!m.length || m.every(function(W) {
    return W.dragRelation;
  }))
    return !1;
  var x = s.inputEvent, y;
  c && x && (y = document.elementFromPoint(s.clientX, s.clientY) || x.target);
  var S = !1, w = function() {
    var W;
    S = !0, (W = s.stop) === null || W === void 0 || W.call(s);
  }, R = f && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  R && t.updateRect(a, !0, !1);
  var O = s.datas, I = d ? "controlGesto" : "targetGesto", E = t[I], D = function(W, F, Y) {
    if (!(F in W) || E !== t[I])
      return !1;
    var X = W.name, j = O[X] || (O[X] = {});
    if (f && (j.isEventStart = !Y || !W[Y] || W[Y](t, s)), !j.isEventStart)
      return !1;
    var rt = W[F](t, z(z({}, s), { stop: w, datas: j, originalDatas: O, inputTarget: y }));
    return t._emitter.off(), f && rt === !1 && (j.isEventStart = !1), rt;
  };
  R && m.forEach(function(W) {
    W.unset && W.unset(t);
  }), D(vh, "drag".concat(n).concat(a));
  var T = 0, P = 0;
  r.forEach(function(W) {
    if (S)
      return !1;
    var F = "".concat(W).concat(n).concat(a), Y = "".concat(W).concat(n, "Condition");
    a === "" && !h && Bw(t.state, s);
    var X = m.filter(function(K) {
      return K[F];
    });
    X = X.filter(function(K, at) {
      return K.name && X.indexOf(K) === at;
    });
    var j = X.filter(function(K) {
      return D(K, F, Y);
    }), rt = j.length;
    S && ++T, rt && ++P, !S && f && X.length && !rt && (T += X.filter(function(K) {
      var at = K.name, it = O[at];
      return it.isEventStart ? K.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!v || P) && D(ph, "drag".concat(n).concat(a));
  var B = E !== t[I] || T === r.length;
  if ((c || S || B) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(W) {
    W.state.gestos = {};
  }), m.forEach(function(W) {
    W.unset && W.unset(t);
  })), f && !B && !h && P && t.props.preventDefault && s?.preventDefault(), t.isUnmounted || B)
    return !1;
  if (!f && P && !u || c) {
    var H = t.props.flushSync || Xd;
    H(function() {
      t.updateRect(c ? a : "", !0, !1), t.forceUpdate();
    });
  }
  return !f && !c && !v && P && !u && na(t, e, r, n, a + "After", s), !0;
}
function Hf(t, e) {
  return function(r, n) {
    var a;
    n === void 0 && (n = r.inputEvent.target);
    var s = n, u = t.areaElement, f = t._dragTarget;
    return !f || !e && (!((a = t.controlGesto) === null || a === void 0) && a.isFlag()) ? !1 : s === f || f.contains(s) || s === u || !t.isMoveableElement(s) && !t.controlBox.contains(s) || Er(s, "moveable-area") || Er(s, "moveable-padding") || Er(s, "moveable-edgeDraggable");
  };
}
function dh(t, e, r) {
  var n = t.controlBox, a = [], s = t.props, u = s.dragArea, f = t.state.target, c = s.dragTarget;
  a.push(n), (!u || c) && a.push(e), !u && c && f && e !== f && s.dragTargetSelf && a.push(f);
  var v = Hf(t);
  return gh(t, a, "targetAbles", r, {
    dragStart: v,
    pinchStart: v
  });
}
function hh(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var a = Hf(t, !0), s = function(u, f) {
    if (f === void 0 && (f = u.inputEvent.target), f === r)
      return !0;
    var c = a(u, f);
    return !c;
  };
  return gh(t, n, "controlAbles", e, {
    dragStart: s,
    pinchStart: s
  });
}
function gh(t, e, r, n, a) {
  a === void 0 && (a = {});
  var s = r === "targetAbles", u = t.props, f = u.pinchOutside, c = u.pinchThreshold, v = u.preventClickEventOnDrag, p = u.preventClickDefault, h = u.checkInput, d = u.dragFocusedInput, m = u.preventDefault, _ = m === void 0 ? !0 : m, x = u.preventRightClick, y = x === void 0 ? !0 : x, S = u.preventWheelClick, w = S === void 0 ? !0 : S, R = u.dragContainer, O = Le(R, !0), I = {
    preventDefault: _,
    preventRightClick: y,
    preventWheelClick: w,
    container: O || Cn(t.getControlBoxElement()),
    pinchThreshold: c,
    pinchOutside: f,
    preventClickEventOnDrag: s ? v : !1,
    preventClickEventOnDragStart: s ? p : !1,
    preventClickEventByCondition: s ? null : function(T) {
      return t.controlBox.contains(T.target);
    },
    checkInput: s ? h : !1,
    dragFocusedInput: d
  }, E = new FS(e, I), D = n === "Control";
  return ["drag", "pinch"].forEach(function(T) {
    ["Start", "", "End"].forEach(function(P) {
      E.on("".concat(T).concat(P), function(B) {
        var H, W = B.eventType, F = T === "drag" && B.isPinch;
        if (a[W] && !a[W](B)) {
          B.stop();
          return;
        }
        if (!F) {
          var Y = T === "drag" ? [T] : ["drag", T], X = ot([], k(t[r]), !1), j = na(t, X, Y, n, P, B);
          j ? (t.props.stopPropagation || P === "Start" && D) && ((H = B?.inputEvent) === null || H === void 0 || H.stopPropagation()) : B.stop();
        }
      });
    });
  }), E;
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
  var s = bd(t, e), u = s.matrixes, f = s.is3d, c = s.targetMatrix, v = s.transformOrigin, p = s.targetOrigin, h = s.offsetContainer, d = s.hasFixed, m = s.zoom, _ = MC(h, r), x = _.matrixes, y = _.is3d, S = _.offsetContainer, w = _.zoom, R = n, O = 4, I = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, E = c, D = sr(O), T = sr(O), P = sr(O), B = sr(O), H = u.length, W = x.map(function(at) {
    return z(z({}, at), { matrix: at.matrix ? ot([], k(at.matrix), !1) : void 0 });
  }).reverse();
  u.reverse(), !f && R && (E = Ae(E, 3, 4), tf(u)), !y && R && tf(W), W.forEach(function(at) {
    T = nr(T, at.matrix, O);
  });
  var F = r || Mn(t), Y = ((a = W[0]) === null || a === void 0 ? void 0 : a.target) || ua(F, F, !0).offsetParent, X = W.slice(1).reduce(function(at, it) {
    return nr(at, it.matrix, O);
  }, sr(O));
  u.forEach(function(at, it) {
    if (H - 2 === it && (P = D.slice()), H - 1 === it && (B = D.slice()), !at.matrix) {
      var $ = u[it + 1], lt = Ow(at, $, Y, O, nr(X, D, O));
      at.matrix = qn(lt, O);
    }
    D = nr(D, at.matrix, O);
  });
  var j = !I && f;
  E || (E = sr(j ? 4 : 3));
  var rt = Jo(I && E.length === 16 ? Ae(E, 4, 3) : E, j), K = T;
  return T = td(T, O, O), {
    hasZoom: m !== 1 || w !== 1,
    hasFixed: d,
    matrixes: u,
    rootMatrix: T,
    originalRootMatrix: K,
    beforeMatrix: P,
    offsetMatrix: B,
    allMatrix: D,
    targetMatrix: E,
    targetTransform: rt,
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
  var a = 0, s = 0, u = 0, f = {}, c = Vd(t);
  if (t && (a = c.offsetWidth, s = c.offsetHeight), t) {
    var v = pE(t, e, r, n), p = yi(v.allMatrix, v.transformOrigin, a, s);
    f = z(z({}, v), p);
    var h = yi(v.allMatrix, [50, 50], 100, 100);
    u = Kd([h.pos1, h.pos2], h.direction);
  }
  var d = 4;
  return z(z(z({ hasZoom: !1, width: a, height: s, rotation: u }, c), { originalRootMatrix: sr(d), rootMatrix: sr(d), beforeMatrix: sr(d), offsetMatrix: sr(d), allMatrix: sr(d), targetMatrix: sr(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), f);
}
function af(t, e, r, n, a, s) {
  s === void 0 && (s = []);
  var u = 1, f = [0, 0], c = yo(), v = yo(), p = yo(), h = yo(), d = [0, 0], m = {}, _ = dE(e, r, a, !0);
  if (e) {
    var x = Qr(e);
    s.forEach(function(W) {
      m[W] = x(W);
    });
    var y = _.is3d ? 4 : 3, S = yi(_.offsetMatrix, Kt(_.transformOrigin, rd(_.targetMatrix, y)), _.width, _.height);
    u = S.direction, f = Kt(S.origin, [S.left - _.left, S.top - _.top]), h = ea(_.offsetRootContainer);
    var w = ua(n, n, !0).offsetParent || _.offsetRootContainer;
    if (_.hasZoom) {
      var R = yi(nr(_.originalRootMatrix, _.allMatrix), _.transformOrigin, _.width, _.height), O = yi(_.originalRootMatrix, Go(Qr(w)("transformOrigin")).map(function(W) {
        return parseFloat(W);
      }), w.offsetWidth, w.offsetHeight);
      if (c = Mu(R, h), p = Mu(O, h, w, !0), t) {
        var I = R.left, E = R.top;
        v = Mu({
          left: I,
          top: E,
          bottom: E,
          right: E
        }, h);
      }
    } else {
      c = ea(e), p = DC(w), t && (v = ea(t));
      var D = p.left, T = p.top, P = p.clientLeft, B = p.clientTop, H = [
        c.left - D,
        c.top - T
      ];
      d = Et(Di(_.rootMatrix, H, 4), [P + _.left, B + _.top]);
    }
  }
  return z({ targetClientRect: c, containerClientRect: p, moveableClientRect: v, rootContainerClientRect: h, beforeDirection: u, beforeOrigin: f, originalBeforeOrigin: f, target: e, style: m, offsetDelta: d }, _);
}
function fp(t) {
  var e = t.pos1, r = t.pos2, n = t.pos3, a = t.pos4;
  if (!e || !r || !n || !a)
    return null;
  var s = Un([e, r, n, a]), u = [s.minX, s.minY], f = Et(t.origin, u);
  return e = Et(e, u), r = Et(r, u), n = Et(n, u), a = Et(a, u), z(z({}, t), {
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
var Mi = /* @__PURE__ */ (function(t) {
  ma(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = z({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, af(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new Yo(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var n = r.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        Tb(r._observerId), r._observerId = Rp(function() {
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
    var _ = k(a || [0, 0], 2), x = _[0], y = _[1], S = n.left, w = n.top, R = n.target, O = n.direction, I = n.hasFixed, E = n.offsetDelta, D = r.targets, T = this.isDragging(), P = {};
    this.getEnabledAbles().forEach(function(X) {
      P["data-able-".concat(X.name.toLowerCase())] = !0;
    });
    var B = this._getAbleClassName(), H = D && D.length && (R || h) || u || !this._hasFirstTarget && this.state.isPersisted, W = this.controlBox || this.props.firstRenderState || this.props.persistData, F = [S - x, w - y];
    !h && r.useAccuratePosition && (F[0] += E[0], F[1] += E[1]);
    var Y = {
      position: I ? "fixed" : "absolute",
      display: H ? "block" : "none",
      visibility: W ? "visible" : "hidden",
      transform: "translate3d(".concat(F[0], "px, ").concat(F[1], "px, ").concat(v, ")"),
      "--zoom": f,
      "--zoompx": "".concat(f, "px")
    };
    return d && (Y["--moveable-line-padding"] = d), m && (Y["--moveable-control-padding"] = m), Oe(
      p,
      z({ cspNonce: c, ref: Je(this, "controlBox"), className: "".concat(wt("control-box", O === -1 ? "reverse" : "", T ? "dragging" : ""), " ").concat(B, " ").concat(s) }, P, { onClick: this._onPreventClick, style: Y }),
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
    a && this._changeAbleViewClassNames([]), _i(this, !1), _i(this, !0);
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
    return Jr(n, function(a) {
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
    return r && (((n = r.getAttribute) === null || n === void 0 ? void 0 : n.call(r, "class")) || "").indexOf(Cf) > -1;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var a = this.targetGesto, s = this.controlGesto;
    return a && Hf(this)({ inputEvent: r }, n) ? a.isFlag() || a.triggerDragStart(r) : s && this.isMoveableElement(n) && (s.isFlag() || s.triggerDragStart(r)), this;
  }, e.prototype.hitTest = function(r) {
    var n = this.state, a = n.target, s = n.pos1, u = n.pos2, f = n.pos3, c = n.pos4, v = n.targetClientRect;
    if (!a)
      return 0;
    var p;
    if (Ti(r)) {
      var h = r.getBoundingClientRect();
      p = {
        left: h.left,
        top: h.top,
        width: h.width,
        height: h.height
      };
    } else
      p = z({ width: 0, height: 0 }, r);
    var d = p.left, m = p.top, _ = p.width, x = p.height, y = Pv([s, u, c, f], v), S = PS(y, [
      [d, m],
      [d + _, m],
      [d + _, m + x],
      [d, m + x]
    ]), w = ad(y);
    return !S || !w ? 0 : Math.min(100, S / w * 100);
  }, e.prototype.isInside = function(r, n) {
    var a = this.state, s = a.target, u = a.pos1, f = a.pos2, c = a.pos3, v = a.pos4, p = a.targetClientRect;
    return s ? Nu([r, n], Pv([u, f, v, c], p)) : !1;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0);
    var s = this.props, u = !s.parentPosition && !s.wrapperMoveable;
    u && wi(!0);
    var f = s.parentMoveable, c = this.state, v = c.target || s.target, p = this.getContainer(), h = f ? f._rootContainer : this._rootContainer, d = af(this.controlBox, v, p, p, h || p, this._getRequestStyles());
    if (!v && this._hasFirstTarget && s.persistData) {
      var m = fp(s.persistData);
      for (var _ in m)
        d[_] = m[_];
    }
    u && wi(), this.updateState(d, f ? !1 : a);
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
    var r = this.state, n = xe(this.state), a = k(n, 4), s = a[0], u = a[1], f = a[2], c = a[3], v = me(n), p = r.width, h = r.height, d = v.width, m = v.height, _ = v.left, x = v.top, y = [r.left, r.top], S = Kt(y, r.origin), w = Kt(y, r.beforeOrigin), R = r.transformOrigin;
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
      beforeOrigin: w,
      origin: S,
      transformOrigin: R,
      rotation: this.getRotation()
    };
  }, e.prototype.getManager = function() {
    return this;
  }, e.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var n = this.targetGesto;
      n?.isIdle() === !1 && rf(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && rf(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, a = r.pos2, s = r.direction;
    return kw(n, a, s);
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this, u = s.props, f = u.parentMoveable || u.wrapperMoveable || s, c = f.props.ables, v = u.groupable, p = Jr(c, function(S) {
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
    var h = p.request(s), d = a || n.isInstant, m = h.isControl ? "controlAbles" : "targetAbles", _ = "".concat(v ? "Group" : "").concat(h.isControl ? "Control" : ""), x = ot([], k(f[m]), !1), y = {
      request: function(S) {
        return na(s, x, ["drag"], _, "", z(z({}, h.request(S)), { requestAble: r, isRequest: !0 }), d), y;
      },
      requestEnd: function() {
        return na(s, x, ["drag"], _, "End", z(z({}, h.requestEnd()), { requestAble: r, isRequest: !0 }), d), y;
      }
    };
    return na(s, x, ["drag"], _, "Start", z(z({}, h.requestStart(n)), { requestAble: r, isRequest: !0 }), d), d ? y.request(n).requestEnd() : y;
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
    var S = ah(a || {}), w = S.left, R = S.top, O = S.bottom, I = S.right, E = c ? 4 : 3, D = [];
    x ? D = u : this.controlBox && n.groupable ? D = s : D = Kt(s, [m, _]);
    var T = Oo(E, qn(D.map(function(Y) {
      return -Y;
    }), E), f, qn(u, E)), P = ge(T, v, [-w, -R], E), B = ge(T, p, [I, -R], E), H = ge(T, h, [-w, O], E), W = ge(T, d, [I, O], E);
    r.renderPoses = [
      P,
      B,
      H,
      W
    ], r.renderLines = [
      [P, B],
      [B, W],
      [W, H],
      [H, P]
    ];
    {
      var F = y / 2;
      r.renderLines = [
        [
          ge(T, v, [-w - F, -R], E),
          ge(T, p, [I + F, -R], E)
        ],
        [
          ge(T, p, [I, -R - F], E),
          ge(T, d, [I, O + F], E)
        ],
        [
          ge(T, d, [I + F, O], E),
          ge(T, h, [-w - F, O], E)
        ],
        [
          ge(T, h, [-w, O + F], E),
          ge(T, v, [-w, -R - F], E)
        ]
      ];
    }
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, n = r.target, a = r.container, s = r.parentMoveable, u = this.state, f = u.target, c = u.container;
    if (!(!f && !n)) {
      this.updateAbles();
      var v = !ef(f, n), p = v || !ef(c, a);
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
    return a[s] || (a[s] = ud(r, n)), a[s];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, s = n.persistData, u = n.firstRenderState;
    if (u && !a)
      return u;
    if (!this._hasFirstTarget && s) {
      var f = fp(s);
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
    var a = this.props, s = a.triggerAblesSimultaneously, u = this.getEnabledAbles(r), f = "drag".concat(n, "Start"), c = "pinch".concat(n, "Start"), v = "drag".concat(n, "ControlStart"), p = bo(u, [f, c], s), h = bo(u, [v], s);
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
      createElement: Oe
    };
    return this.renderState = {}, Aw(rh(bo(this.getEnabledAbles(), ["render"], a).map(function(u) {
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
      return ot(ot([], k(n), !1), k(f), !1);
    }, ot([], k(this.props.requestStyles || []), !1));
    return r;
  }, e.prototype._updateObserver = function(r) {
    this._updateResizeObserver(r), this._updateMutationObserver(r);
  }, e.prototype._updateEvents = function() {
    var r = this.targetAbles.length, n = this.controlAbles.length, a = this._dragTarget, s = !r && this.targetGesto || this._isTargetChanged(!0);
    s && (_i(this, !1), this.updateState({ gestos: {} })), n || _i(this, !0), a && r && !this.targetGesto && (this.targetGesto = dh(this, a, "")), !this.controlGesto && n && (this.controlGesto = hh(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = Le(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, a = n.zoom, s = n.hideDefaultLines, u = n.hideChildMoveableDefaultLines, f = n.parentMoveable;
    if (s || f && u)
      return [];
    var c = this.getState(), v = {
      createElement: Oe
    };
    return c.renderLines.map(function(p, h) {
      return sa(v, "", p[0], p[1], a, "render-line-".concat(h));
    });
  }, e.prototype._isTargetChanged = function(r) {
    var n = this.props, a = n.dragTarget || n.target, s = this._prevOriginalDragTarget, u = this._prevDragArea, f = n.dragArea, c = !f && s !== a, v = (r || f) && u !== f;
    return c || v || this._prevPropTarget != this._propTarget;
  }, e.prototype._updateNativeEvents = function() {
    var r = this, n = this.props, a = n.dragArea ? this.areaElement : this.state.target, s = this.events, u = rn(s);
    if (this._isTargetChanged())
      for (var f in s) {
        var c = s[f];
        c && c.destroy(), s[f] = null;
      }
    if (a) {
      var v = this.enabledAbles;
      u.forEach(function(p) {
        var h = bo(v, [p]), d = h.length > 0, m = s[p];
        if (!d) {
          m && (m.destroy(), s[p] = null);
          return;
        }
        m || (m = new vE(a, r, p), s[p] = m), m.setAbles(h);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = Le(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = Le(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(ot(ot([], k(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? Xw : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, a = th(r.filter(Boolean), function(v) {
      return v;
    }).map(function(v) {
      var p = k(v, 1), h = p[0];
      return h;
    }), s = this._viewClassNames, u = va(s, a), f = u.removed, c = u.added;
    f.forEach(function(v) {
      Ap(n, s[v]);
    }), c.forEach(function(v) {
      Pp(n, a[v]);
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
      return (!((h = f[m]) === null || h === void 0) && h.isEventStart || !((d = c[m]) === null || d === void 0) && d.isEventStart) && (_ += " ".concat(wt("".concat(m).concat(r, "-dragging")))), _.trim();
    }).filter(Boolean).join(" ");
  }, e.prototype._updateResizeObserver = function(r) {
    var n, a = this.props, s = a.target, u = Cn(this.getControlBoxElement());
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
    var n = this, a, s = this.props, u = s.target, f = Cn(this.getControlBoxElement());
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
    flushSync: Xd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
})(Wp), Yf = {
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
    var d = xi(t, "parentPosition", [u, f], function(_) {
      return _.join(",");
    }), m = xi(t, "requestStyles", t.getRequestChildStyles(), function(_) {
      return _.join(",");
    });
    return t.moveables = t.moveables.slice(0, a.length), ot(ot([], k(a.map(function(_, x) {
      return e.createElement(Mi, { key: "moveable" + x, ref: wp(t, "moveables", x), target: _, origin: !1, requestStyles: m, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [u, f], persistData: h[x], zoom: v });
    })), !1), k(rh(p.map(function(_, x) {
      var y = _.pos1, S = _.pos2, w = _.pos3, R = _.pos4, O = [y, S, w, R];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(I, E) {
        var D = k(I, 2), T = D[0], P = D[1];
        return sa(e, "", Et(O[T], d), Et(O[P], d), v, "group-rect-".concat(x, "-").concat(E));
      });
    }))), !1);
  }
}, hE = _a("clickable", {
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
      mt(t, "onClick", Ft(t, e, {
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
      s === -1 && (s = tn(a, function(c) {
        return c.contains(n);
      }), f = s > -1), mt(t, "onClickGroup", Ft(t, e, {
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
function pi(t) {
  var e = t.originalDatas.draggable;
  return e || (t.originalDatas.draggable = {}, e = t.originalDatas.draggable), z(z({}, t), { datas: e });
}
var gE = _a("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? wd(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Er(a, wt("direction")) && Er(a, wt("edge")) && Er(a, wt("edgeDraggable"));
  },
  dragStart: function(t, e) {
    return Nr.dragStart(t, pi(e));
  },
  drag: function(t, e) {
    return Nr.drag(t, pi(e));
  },
  dragEnd: function(t, e) {
    return Nr.dragEnd(t, pi(e));
  },
  dragGroupCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && Er(a, wt("direction")) && Er(a, wt("line"));
  },
  dragGroupStart: function(t, e) {
    return Nr.dragGroupStart(t, pi(e));
  },
  dragGroup: function(t, e) {
    return Nr.dragGroup(t, pi(e));
  },
  dragGroupEnd: function(t, e) {
    return Nr.dragGroupEnd(t, pi(e));
  },
  unset: function(t) {
    return Nr.unset(t);
  }
}), mh = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, Xf = [
  vh,
  uh,
  yw,
  Lw,
  Nr,
  gE,
  Ju,
  Ww,
  Hw,
  ew,
  $w,
  Vw,
  qw,
  oE,
  aE,
  lE,
  Yf,
  mh,
  hE,
  sh,
  ph
], mE = /* @__PURE__ */ Xf.reduce(function(t, e) {
  return (e.events || []).forEach(function(r) {
    Ip(t, r);
  }), t;
}, []), _E = /* @__PURE__ */ Xf.reduce(function(t, e) {
  return (e.props || []).forEach(function(r) {
    Ip(t, r);
  }), t;
}, []);
function lp(t, e) {
  var r = k(t, 3), n = r[0], a = r[1], s = r[2];
  return (n * e[0] + a * e[1] + s) / Math.sqrt(n * n + a * a);
}
function wo(t, e) {
  var r = k(t, 2), n = r[0], a = r[1];
  return -n * e[0] - a * e[1];
}
function cp(t, e) {
  return Math.max.apply(Math, ot([], k(t.map(function(r) {
    var n = k(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.max(a[e], s[e], u[e], f[e]);
  })), !1));
}
function vp(t, e) {
  return Math.min.apply(Math, ot([], k(t.map(function(r) {
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
  var h = It(e, Xr);
  if (h % 90) {
    var d = h / 180 * Math.PI, m = Math.tan(d), _ = -1 / m, x = [$u, zv], y = [[0, 0], [0, 0]], S = [$u, zv], w = [[0, 0], [0, 0]];
    t.forEach(function(ht) {
      ht.forEach(function(ut) {
        var ct = lp([-m, 1, 0], ut), st = lp([-_, 1, 0], ut);
        x[0] > ct && (y[0] = ut, x[0] = ct), x[1] < ct && (y[1] = ut, x[1] = ct), S[0] > st && (w[0] = ut, S[0] = st), S[1] < st && (w[1] = ut, S[1] = st);
      });
    });
    var R = k(y, 2), O = R[0], I = R[1], E = k(w, 2), D = E[0], T = E[1], P = [-m, 1, wo([-m, 1], O)], B = [-m, 1, wo([-m, 1], I)], H = [-_, 1, wo([-_, 1], D)], W = [-_, 1, wo([-_, 1], T)];
    r = k([
      [P, H],
      [P, W],
      [B, H],
      [B, W]
    ].map(function(ht) {
      var ut = k(ht, 2), ct = ut[0], st = ut[1];
      return bf(ct, st)[0];
    }), 4), s = r[0], u = r[1], f = r[2], c = r[3], v = S[1] - S[0], p = x[1] - x[0];
  } else {
    var F = vp(t, 0), Y = vp(t, 1), X = cp(t, 0), j = cp(t, 1);
    if (s = [F, Y], u = [X, Y], f = [F, j], c = [X, j], v = X - F, p = j - Y, h % 180) {
      var rt = [f, s, c, u];
      n = k(rt, 4), s = n[0], u = n[1], f = n[2], c = n[3], v = j - Y, p = X - F;
    }
  }
  if (h % 360 > 180) {
    var rt = [c, f, u, s];
    a = k(rt, 4), s = a[0], u = a[1], f = a[2], c = a[3];
  }
  var K = Un([s, u, f, c]), at = K.minX, it = K.minY, $ = K.maxX, lt = K.maxY;
  return {
    pos1: s,
    pos2: u,
    pos3: f,
    pos4: c,
    width: v,
    height: p,
    minX: at,
    minY: it,
    maxX: $,
    maxY: lt,
    rotation: e
  };
}
function _h(t, e) {
  var r = e.map(function(n) {
    if (br(n)) {
      var a = _h(t, n), s = a.length;
      return s > 1 ? a : s === 1 ? a[0] : null;
    } else {
      var u = Jr(t, function(f) {
        var c = f.manager;
        return c.props.target === n;
      });
      return u ? (u.finded = !0, u.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && br(r[0]) ? r[0] : r;
}
var yE = /* @__PURE__ */ (function(t) {
  ma(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new id(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
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
    wi(!0), this.moveables.forEach(function(xt) {
      xt.updateRect(r, !1, !1);
    });
    var f = this.props, c = this.moveables, v = u.target || f.target, p = c.map(function(xt) {
      return { finded: !1, manager: xt };
    }), h = this.props.targetGroups || [], d = _h(p, h), m = f.useDefaultGroupRotate;
    d.push.apply(d, ot([], k(p.filter(function(xt) {
      var Ot = xt.finded;
      return !Ot;
    }).map(function(xt) {
      var Ot = xt.manager;
      return Ot;
    })), !1));
    var _ = [], x = !n || r !== "" && f.updateGroup, y = f.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var S = (s = f.persistData) === null || s === void 0 ? void 0 : s.rotation;
      S != null && (y = S);
    }
    function w(xt, Ot, Yt) {
      var nt = xt.map(function(Zt) {
        if (br(Zt)) {
          var Pt = w(Zt, Ot), kt = [Pt.pos1, Pt.pos2, Pt.pos3, Pt.pos4];
          return _.push(Pt), { poses: kt, rotation: Pt.rotation };
        } else
          return {
            poses: xe(Zt.state),
            rotation: Zt.getRotation()
          };
      }), ft = nt.map(function(Zt) {
        var Pt = Zt.rotation;
        return Pt;
      }), Xt = 0, St = ft[0], Dt = ft.every(function(Zt) {
        return Math.abs(St - Zt) < 0.1;
      });
      x ? Xt = !m && Dt ? St : y : Xt = !m && !Yt && Dt ? St : Ot;
      var Gt = nt.map(function(Zt) {
        var Pt = Zt.poses;
        return Pt;
      }), Wt = xE(Gt, Xt);
      return Wt;
    }
    var R = w(d, this.rotation, !0);
    x && (this.rotation = R.rotation, this.transformOrigin = f.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = h, this.renderGroupRects = _;
    var O = this.transformOrigin, I = this.rotation, E = this.scale, D = R.width, T = R.height, P = R.minX, B = R.minY, H = Fw([
      [0, 0],
      [D, 0],
      [0, T],
      [D, T]
    ], Lf(O, D, T), this.rotation / 180 * Math.PI), W = Un(H.result), F = W.minX, Y = W.minY, X = " rotate(".concat(I, "deg)") + " scale(".concat(Hr(E[0]), ", ").concat(Hr(E[1]), ")"), j = "translate(".concat(-F, "px, ").concat(-Y, "px)").concat(X);
    this.controlBox.style.transform = "translate3d(".concat(P, "px, ").concat(B, "px, ").concat(this.props.translateZ || 0, ")"), v.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(O, ";") + "width:".concat(D, "px;height:").concat(T, "px;") + "transform: ".concat(j), u.width = D, u.height = T;
    var rt = this.getContainer(), K = af(this.controlBox, v, this.controlBox, this.getContainer(), this._rootContainer || rt, []), at = [K.left, K.top], it = k(xe(K), 4), $ = it[0], lt = it[1], ht = it[2], ut = it[3], ct = Un([$, lt, ht, ut]), st = [ct.minX, ct.minY], pt = Hr(E[0] * E[1]);
    K.pos1 = Et($, st), K.pos2 = Et(lt, st), K.pos3 = Et(ht, st), K.pos4 = Et(ut, st), K.left = P - K.left + st[0], K.top = B - K.top + st[1], K.origin = Et(Kt(at, K.origin), st), K.beforeOrigin = Et(Kt(at, K.beforeOrigin), st), K.originalBeforeOrigin = Kt(at, K.originalBeforeOrigin), K.transformOrigin = Et(Kt(at, K.transformOrigin), st), v.style.transform = "translate(".concat(-F - st[0], "px, ").concat(-Y - st[1], "px)") + X, wi(), this.updateState(z(z({}, K), { posDelta: st, direction: pt, beforeDirection: pt }), a);
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
      return ot(ot([], k(n), !1), k(f), !1);
    }, []);
    return r;
  }, e.prototype.getMoveables = function() {
    return ot([], k(this.moveables), !1);
  }, e.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, ot(ot([], k(this.props.ables), !1), [Yf], !1), "Group");
  }, e.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = Le(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, a = this._prevDragTarget, s = n.dragTarget || this.areaElement, u = n.targets, f = this.differ.update(u), c = f.added, v = f.changed, p = f.removed, h = c.length || p.length;
    (h || this._prevOriginalDragTarget !== this._originalDragTarget) && (_i(this, !1), _i(this, !0), this.updateState({ gestos: {} })), a !== s && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = dh(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = hh(this, "GroupControl")));
    var d = !ef(r.container, n.container);
    d && (r.container = n.container), (d || h || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || v.length || u.length && !ih(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!h;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = z(z({}, Mi.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
})(Mi), bE = /* @__PURE__ */ (function(t) {
  ma(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, a = this.props, s = a.cspNonce, u = a.cssStyled, f = a.persistData, c = a.targets || [], v = c.length, p = this.isUnmounted || !v, h = (n = f?.children) !== null && n !== void 0 ? n : [];
    return p && !v && h.length ? c = h.map(function() {
      return null;
    }) : p || (h = []), Oe(u, { cspNonce: s, ref: Je(this, "controlBox"), className: wt("control-box") }, c.map(function(d, m) {
      var _, x, y = (x = (_ = a.individualGroupableProps) === null || _ === void 0 ? void 0 : _.call(a, d, m)) !== null && x !== void 0 ? x : {};
      return Oe(Mi, z({ key: "moveable" + m, ref: wp(r, "moveables", m) }, a, y, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: h[m] }));
    }));
  }, e.prototype.componentDidMount = function() {
  }, e.prototype.componentDidUpdate = function() {
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0), wi(!0), this.moveables.forEach(function(s) {
      s.updateRect(r, n, a);
    }), wi();
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
    var a = n, s = Jr(this.moveables, function(u) {
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
    return ot([], k(this.moveables), !1);
  }, e.prototype.updateRenderPoses = function() {
  }, e.prototype.checkUpdate = function() {
  }, e.prototype.triggerEvent = function() {
  }, e.prototype.updateAbles = function() {
  }, e.prototype._updateEvents = function() {
  }, e.prototype._updateObserver = function() {
  }, e;
})(Mi);
function xh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Zr(n)) {
        e[n] && r.push.apply(r, ot([], k(e[n]), !1));
        return;
      }
      br(n) ? r.push.apply(r, ot([], k(xh(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function yh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Zr(n)) {
        e[n] && r.push.apply(r, ot([], k(e[n]), !1));
        return;
      }
      br(n) ? r.push(yh(n, e)) : r.push(n);
    }
  }), r;
}
function bh(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var a = e[n];
    return !r && !a ? !1 : r != a ? br(r) && br(a) ? bh(r, a) : !0 : !1;
  });
}
var SE = /* @__PURE__ */ (function(t) {
  ma(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new id(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
  }
  return e.makeStyled = function() {
    var r = {}, n = this.getTotalAbles();
    n.forEach(function(s) {
      var u = s.css;
      u && u.forEach(function(f) {
        r[f] = !0;
      });
    });
    var a = rn(r).join(`
`);
    this.defaultStyled = ud("div", mb(Cf, oC + a));
  }, e.getTotalAbles = function() {
    return ot([uh, Yf, mh, sh], k(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, s = a.ables, u = a.props, f = $S(a, ["ables", "props"]), c = k(this._updateRefs(!0), 2), v = c[0], p = c[1], h = xh(v, p), d = h.length > 1, m = n.getTotalAbles(), _ = ot(ot([], k(m), !1), k(s || []), !1), x = z(z(z({}, f), u || {}), { ables: _, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = h;
    var y = null, S = this.moveable, w = f.persistData;
    if (w?.children && (d = !0), f.individualGroupable)
      return Oe(bE, z({ key: "individual-group", ref: Je(this, "moveable") }, x, { target: null, targets: h }));
    if (d) {
      var R = yh(v, p);
      if (S && !S.props.groupable && !S.props.individualGroupable) {
        var O = S.props.target;
        O && h.indexOf(O) > -1 && (y = z({}, S.state));
      }
      return Oe(yE, z({ key: "group", ref: Je(this, "moveable") }, x, (r = f.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: h, targetGroups: R, firstRenderState: y }));
    } else {
      var I = h[0];
      if (S && (S.props.groupable || S.props.individualGroupable)) {
        var E = S.moveables || [], D = Jr(E, function(T) {
          return T.props.target === I;
        });
        D && (y = z({}, D.state));
      }
      return Oe(Mi, z({ key: "single", ref: Je(this, "moveable") }, x, { target: I, firstRenderState: y }));
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
    var n = this.refTargets, a = Ff(this.props.target || this.props.targets), s = typeof document < "u", u = bh(n, a), f = this.selectorMap, c = {};
    return this.refTargets.forEach(function v(p) {
      if (Zr(p)) {
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
    _b(dd)
  ], e.prototype, "moveable", void 0), e;
})(Wp), CE = /* @__PURE__ */ (function(t) {
  ma(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = Xf, e;
})(SE), of = function(t, e) {
  return of = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, of(t, e);
};
function qf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  of(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var fa = function() {
  return fa = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, fa.apply(this, arguments);
};
function wE(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
var EE = /* @__PURE__ */ (function(t) {
  qf(e, t);
  function e(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var r = e.prototype;
  return r.render = function() {
    return Oe(CE, fa({
      ref: Je(this, "moveable")
    }, this.state));
  }, e;
})(hf), Wo = _E, Sh = dd, Ch = mE, DE = /* @__PURE__ */ (function(t) {
  qf(e, t);
  function e(n, a) {
    a === void 0 && (a = {});
    var s = t.call(this) || this;
    s.containerProvider = null, s.selfElement = null, s._warp = !1;
    var u = fa({}, a), f = {};
    Ch.forEach(function(p) {
      f[Rb("on ".concat(p))] = function(h) {
        return s.trigger(p, h);
      };
    });
    var c;
    a.warpSelf ? (delete a.warpSelf, s._warp = !0, c = n) : (c = Ri(n).createElement("div"), n.appendChild(c)), s.containerProvider = Tv(Oe(EE, fa({
      ref: Je(s, "innerMoveable")
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
    Tv(null, a, this.containerProvider), this._warp || (n = a?.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, e = wE([yv(Sh, function(n, a) {
    n[a] || (n[a] = function() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      var f = this.getMoveable();
      if (!(!f || !f[a]))
        return f[a].apply(f, s);
    });
  }), yv(Wo, function(n, a) {
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
})(Yo), ME = /* @__PURE__ */ (function(t) {
  qf(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
})(DE);
const wh = {};
Sh.forEach((t) => {
  wh[t] = function(...e) {
    return this.$_moveable[t](...e);
  };
});
const Eh = {};
Wo.forEach((t) => {
  Eh[t] = function(e) {
    this.$_moveable[t] = e;
  };
});
const RE = sf({
  name: "moveable",
  methods: wh,
  props: Wo,
  watch: Eh,
  mounted() {
    const t = {}, e = this.$props;
    Wo.forEach((s) => {
      const u = e[s];
      la(u) || (t[s] = e[s]);
    });
    const n = this.$refs.moveableElement, a = new ME(n, {
      ...t,
      warpSelf: !0
    });
    Ch.forEach((s) => {
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
  return Rr(), Wr("div", IE, null, 512);
}
const pp = /* @__PURE__ */ OE(TE, [["render", PE]]), AE = { style: { display: "none" } }, BE = { class: "widget-board" }, zE = ["onPointerdown"], GE = { class: "dropdown-buttons-container" }, kE = { class: "align-bar__count" }, FE = { class: "align-bar__group" }, LE = { class: "align-bar__group" }, WE = {
  key: 0,
  class: "align-bar__group"
}, NE = { class: "align-bar__group" }, HE = { class: "dropdown-buttons-container" }, Fn = 24, YE = 160, XE = 160, qE = /* @__PURE__ */ sf({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(t, { emit: e }) {
    const r = zr(document.documentElement.getAttribute("data-board-snap") !== "off");
    let n = null;
    Ou(() => {
      n = new MutationObserver(() => {
        r.value = document.documentElement.getAttribute("data-board-snap") !== "off";
      }), n.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-board-snap"]
      });
    }), _v(() => n?.disconnect());
    const a = e, s = xp();
    ob();
    const u = s.params.pageid || "", f = zr(), c = zr(""), v = zr([]), p = zr(!1), h = gp("endpointfinder", null);
    Me(() => !!h), zr(!1), zr(void 0);
    const {
      layoutStore: d,
      widgetStore: m,
      clipboardStore: _,
      ghostPlaceholder: x,
      hidePlaceholder: y,
      getInitialStyle: S,
      getMovableControlStyles: w,
      drag: R,
      resize: O,
      moveUp: I,
      moveDown: E,
      moveToBottom: D,
      moveToTop: T,
      addWidget: P,
      removeWidget: B,
      copyWidget: H,
      pasteWidget: W
    } = Sp(u, () => r.value ? Fn : 0), F = Me(() => m?.widgets || []), Y = Me(() => {
      const J = d?.layout || [];
      if (J.length === 0) return { width: 0, height: 0 };
      let U = 0, gt = 0;
      for (const At of J) {
        const Vt = (At.x || 0) + (At.width || 0), vt = (At.y || 0) + (At.height || 0);
        Vt > U && (U = Vt), vt > gt && (gt = vt);
      }
      return {
        width: U + YE,
        height: gt + XE
      };
    }), X = zr(null), j = zr({ x: 0, y: 0, w: 1, h: 1 }), rt = zr(null), K = zr({ w: 200, h: 140 });
    let at = null;
    const it = Me(() => {
      const J = X.value, U = Math.max(Y.value.width, J?.clientWidth || 1), gt = Math.max(Y.value.height, J?.clientHeight || 1);
      return Math.min(K.value.w / U, K.value.h / gt);
    }), $ = () => {
      const J = X.value;
      if (!J) return;
      const U = Math.max(Y.value.width, J.clientWidth), gt = Math.max(Y.value.height, J.clientHeight);
      j.value = {
        x: J.scrollLeft / U,
        y: J.scrollTop / gt,
        w: J.clientWidth / U,
        h: J.clientHeight / gt
      };
    }, lt = (J) => {
      const U = X.value;
      if (!U) return;
      const At = J.currentTarget.getBoundingClientRect(), Vt = (J.clientX - At.left) / At.width, vt = (J.clientY - At.top) / At.height, Ct = Math.max(Y.value.width, U.clientWidth), te = Math.max(Y.value.height, U.clientHeight);
      U.scrollLeft = Vt * Ct - U.clientWidth / 2, U.scrollTop = vt * te - U.clientHeight / 2;
    }, ht = Me(() => {
      const J = X.value;
      return J ? Y.value.width > J.clientWidth || Y.value.height > J.clientHeight : !1;
    });
    Ou(() => {
      Iu(() => $());
    }), cu(rt, (J) => {
      at?.disconnect(), J && (at = new ResizeObserver(([U]) => {
        const gt = U.contentRect;
        gt.width > 0 && gt.height > 0 && (K.value = { w: gt.width, h: gt.height });
      }), at.observe(J));
    }), _v(() => at?.disconnect()), cu(Y, () => Iu(() => $()));
    const ut = zr({ x: 0, y: 0 }), ct = (J) => [
      { id: "front", icon: "flip_to_front", label: "Nach vorn", run: () => I(J) },
      { id: "back", icon: "flip_to_back", label: "Nach hinten", run: () => E(J) },
      { id: "top", icon: "vertical_align_top", label: "Ganz vorn", run: () => T(J) },
      { id: "bottom", icon: "vertical_align_bottom", label: "Ganz hinten", run: () => D(J) },
      { id: "copy", icon: "content_copy", label: "Kopieren", run: () => st(J) }
    ], st = (J) => {
      H(J);
    }, pt = zr({ visible: !1, x: 0, y: 0 }), xt = (J) => {
      if (!_.hasClipboard) {
        pt.value.visible = !1;
        return;
      }
      J.preventDefault();
      const U = J.currentTarget.getBoundingClientRect();
      ut.value = {
        x: J.clientX - U.left,
        y: J.clientY - U.top
      }, pt.value = {
        visible: !0,
        x: J.clientX - U.left,
        y: J.clientY - U.top
      };
    }, Ot = () => {
      pt.value.visible = !1;
    }, Yt = () => {
      W(ut.value.x, ut.value.y), pt.value.visible = !1;
    }, nt = (J) => r.value ? Math.round(J / Fn) * Fn : J, ft = zr([]), Xt = Me(() => ft.value.length > 1), St = Me(() => ft.value.map((J) => `.${J}`));
    function Dt(J) {
      return ft.value.includes(J);
    }
    function Gt(J) {
      return !!(d?.layout ?? []).find((gt) => gt.id === J)?.group;
    }
    function Wt(J) {
      const U = d?.layout ?? [], gt = U.find((At) => At.id === J);
      return gt?.group ? U.filter((At) => At.group === gt.group).map((At) => At.id) : [J];
    }
    function Zt(J, U) {
      const gt = Wt(J);
      if (!U.ctrlKey && !U.metaKey && !U.shiftKey) {
        ft.value = gt;
        return;
      }
      const At = gt.every((Vt) => Dt(Vt));
      ft.value = At ? ft.value.filter((Vt) => !gt.includes(Vt)) : [...ft.value, ...gt.filter((Vt) => !Dt(Vt))];
    }
    function Pt() {
      ft.value = [];
    }
    cu(
      () => (d?.layout ?? []).map((J) => J.id).join(","),
      (J) => {
        const U = new Set(J ? J.split(",") : []), gt = ft.value.filter((At) => U.has(At));
        gt.length !== ft.value.length && (ft.value = gt);
      }
    );
    function kt() {
      const J = d?.layout ?? [];
      return ft.value.map((U) => J.find((gt) => gt.id === U)).filter(Boolean);
    }
    function Jt(J) {
      for (const U of J.events) {
        const gt = [...U.target.classList].find((Vt) => ft.value.includes(Vt));
        if (!gt) continue;
        const At = (d?.layout ?? []).find((Vt) => Vt.id === gt);
        At && (At.x = nt(U.translate[0]), At.y = nt(U.translate[1]), U.target.style.transform = `translate(${At.x}px, ${At.y}px)`);
      }
    }
    const ur = Me(() => {
      const J = kt();
      if (J.length < 2) return !1;
      const U = J[0].group;
      return !!U && J.every((gt) => gt.group === U);
    });
    function cr() {
      const J = kt();
      if (J.length < 2) return;
      const U = `g_${Math.random().toString(36).slice(2, 9)}`;
      for (const gt of J) gt.group = U;
    }
    function fr() {
      for (const gt of kt()) delete gt.group;
      const J = d?.layout ?? [], U = /* @__PURE__ */ new Map();
      for (const gt of J)
        gt.group && U.set(gt.group, (U.get(gt.group) ?? 0) + 1);
      for (const gt of J)
        gt.group && U.get(gt.group) === 1 && delete gt.group;
    }
    function Qt(J) {
      const U = kt();
      if (U.length < 2) return;
      const gt = Math.min(...U.map((Ct) => Ct.x)), At = Math.max(...U.map((Ct) => Ct.x + Ct.width)), Vt = Math.min(...U.map((Ct) => Ct.y)), vt = Math.max(...U.map((Ct) => Ct.y + Ct.height));
      for (const Ct of U)
        switch (J) {
          case "left":
            Ct.x = nt(gt);
            break;
          case "right":
            Ct.x = nt(At - Ct.width);
            break;
          case "hcenter":
            Ct.x = nt((gt + At) / 2 - Ct.width / 2);
            break;
          case "top":
            Ct.y = nt(Vt);
            break;
          case "bottom":
            Ct.y = nt(vt - Ct.height);
            break;
          case "vcenter":
            Ct.y = nt((Vt + vt) / 2 - Ct.height / 2);
            break;
        }
    }
    function jr(J) {
      const U = kt();
      if (U.length < 3) return;
      const gt = J === "x" ? "width" : "height", At = [...U].sort((fn, Jn) => fn[J] - Jn[J]), Vt = At[0], Ct = At[At.length - 1][J] - (Vt[J] + Vt[gt]), te = At.slice(1, -1), sn = te.reduce((fn, Jn) => fn + Jn[gt], 0), Zn = (Ct - sn) / (At.length - 1);
      let un = Vt[J] + Vt[gt] + Zn;
      for (const fn of te)
        fn[J] = nt(un), un += fn[gt] + Zn;
    }
    const Pr = (J, U, gt, At) => {
      const Vt = { datasourceId: U, settings: {} }, vt = bp.cloneDeep(ab), Ct = x.value.width, te = x.value.height, sn = {
        x: nt(gt - Ct / 2),
        y: nt(At - te / 2),
        width: Ct,
        height: te,
        z: 3005
      };
      P(J, Vt, vt, sn);
    }, ye = (J) => {
      a("openSettings", J);
    };
    Me(() => F.value.length === 0 && (d?.layout || []).length === 0);
    const en = (J) => {
      B(J), a("removeWidget", J);
    };
    Me(() => F.value.find((J) => J.uid === c.value));
    const nn = (J) => {
      const U = X.value;
      if (!U) return { x: 0, y: 0 };
      const gt = U.getBoundingClientRect();
      return {
        x: J.clientX - gt.left + U.scrollLeft,
        y: J.clientY - gt.top + U.scrollTop
      };
    }, be = (J) => {
      y();
      const U = nn(J);
      f.value = { dropX: U.x, dropY: U.y };
    }, Be = (J) => {
      if (J.dataTransfer?.types.includes("text/plain")) {
        J.preventDefault(), p.value = !0;
        const U = nn(J);
        x.value.x = nt(U.x - x.value.width / 2), x.value.y = nt(U.y - x.value.height / 2), x.value.visible = !0;
      }
    }, an = (J) => {
      J.dataTransfer?.types.includes("text/plain") && (p.value = !1, y());
    }, on = (J) => {
      console.log(J);
      const U = "test", gt = J.added?.element?.type || "default", At = f.value?.dropX ?? x.value.x + x.value.width / 2, Vt = f.value?.dropY ?? x.value.y + x.value.height / 2;
      Pr(gt, U, At, Vt);
    };
    return (J, U) => {
      const gt = vu("va-button"), At = vu("va-dropdown-content"), Vt = vu("va-dropdown");
      return Rr(), Wr("div", {
        class: "report-container",
        onContextmenu: xt,
        onClick: Ot,
        onPointerdown: pu(Pt, ["self"])
      }, [
        bt("div", {
          class: "scroll-viewport",
          ref_key: "scrollContainer",
          ref: X,
          onScroll: $
        }, [
          bt("div", {
            class: "canvas dottet",
            style: yn({
              minWidth: Y.value.width > 0 ? `max(100%, ${Y.value.width}px)` : void 0,
              minHeight: Y.value.height > 0 ? `max(100%, ${Y.value.height}px)` : void 0
            }),
            onDrop: be,
            onDragover: Be,
            onDragleave: an
          }, [
            Re(pr(ub), {
              list: v.value,
              group: { name: "widgets" },
              "ghost-class": "ghost",
              itemKey: "type",
              style: { position: "absolute", top: "0", left: "0", height: "100%", width: "100%" },
              onChange: on,
              onDrop: be,
              onDragover: Be,
              onDragleave: an,
              onContextmenu: xt
            }, {
              item: De(({ element: vt }) => [
                bt("div", AE, hu(vt?.type || ""), 1)
              ]),
              _: 1
            }, 8, ["list"]),
            bt("div", BE, [
              pr(x).visible ? (Rr(), Wr("div", {
                key: 0,
                class: "ghost-placeholder",
                style: yn({
                  left: `${pr(x).x}px`,
                  top: `${pr(x).y}px`,
                  width: `${pr(x).width}px`,
                  height: `${pr(x).height}px`
                })
              }, null, 4)) : kn("", !0),
              (Rr(!0), Wr(Eo, null, Pu(F.value, (vt) => (Rr(), Wr(Eo, {
                key: vt.uid
              }, [
                bt("div", {
                  class: mp([
                    vt.uid,
                    "dashboard-item-container",
                    { "is-selected": Dt(vt.uid), "in-group": Gt(vt.uid) }
                  ]),
                  style: yn(pr(S)(vt.uid)),
                  ref_for: !0,
                  ref: vt.uid,
                  onPointerdown: (Ct) => Zt(vt.uid, Ct)
                }, [
                  Re(Vt, {
                    trigger: "right-click",
                    "auto-placement": !1,
                    placement: "right-start",
                    cursor: ""
                  }, {
                    anchor: De(() => [
                      bt("div", {
                        class: "dashboard-item",
                        onContextmenu: U[0] || (U[0] = pu(() => {
                        }, ["stop"]))
                      }, [
                        Re(pr(_p), {
                          widget: vt,
                          ref_for: !0,
                          ref: `${vt.uid}_wrapper`,
                          "extra-actions": ct(vt.uid),
                          onOpenSettings: ye,
                          editEnabled: "",
                          onRemoveWidget: en
                        }, null, 8, ["widget", "extra-actions"])
                      ], 32)
                    ]),
                    default: De(() => [
                      Re(At, null, {
                        default: De(() => [
                          bt("div", GE, [
                            Re(gt, {
                              onClick: (Ct) => pr(I)(vt.uid)
                            }, {
                              default: De(() => [...U[10] || (U[10] = [
                                vi(" Move up ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            Re(gt, {
                              onClick: (Ct) => pr(E)(vt.uid)
                            }, {
                              default: De(() => [...U[11] || (U[11] = [
                                vi(" Move down ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            Re(gt, {
                              onClick: (Ct) => pr(T)(vt.uid)
                            }, {
                              default: De(() => [...U[12] || (U[12] = [
                                vi(" Move to top ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            Re(gt, {
                              onClick: (Ct) => pr(D)(vt.uid)
                            }, {
                              default: De(() => [...U[13] || (U[13] = [
                                vi(" Move to bottom ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            Re(gt, {
                              onClick: (Ct) => st(vt.uid)
                            }, {
                              default: De(() => [...U[14] || (U[14] = [
                                vi(" Copy ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ], 46, zE),
                Xt.value ? kn("", !0) : (Rr(), du(pr(pp), {
                  key: 0,
                  target: [`.${vt.uid}`],
                  draggable: !0,
                  resizable: !0,
                  useResizeObserver: !0,
                  useMutationObserver: !0,
                  onDrag: (Ct) => pr(R)(vt.uid, Ct),
                  onResize: (Ct) => pr(O)(vt.uid, Ct),
                  snappable: r.value,
                  snapGridWidth: Fn,
                  snapGridHeight: Fn,
                  origin: !1,
                  ref_for: !0,
                  ref: `${vt.uid}_control`,
                  style: yn(pr(w)(vt.uid))
                }, null, 8, ["target", "onDrag", "onResize", "snappable", "style"]))
              ], 64))), 128)),
              Xt.value ? (Rr(), du(pr(pp), {
                key: 1,
                target: St.value,
                draggable: !0,
                resizable: !1,
                useResizeObserver: !0,
                useMutationObserver: !0,
                origin: !1,
                snappable: r.value,
                snapGridWidth: Fn,
                snapGridHeight: Fn,
                onDragGroup: Jt
              }, null, 8, ["target", "snappable"])) : kn("", !0),
              Xt.value ? (Rr(), Wr("div", {
                key: 2,
                class: "align-bar",
                onPointerdown: U[9] || (U[9] = pu(() => {
                }, ["stop"]))
              }, [
                bt("span", kE, hu(ft.value.length) + " " + hu(ur.value ? "in einer Gruppe" : "gewählt"), 1),
                bt("span", FE, [
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Links bündig",
                    onClick: U[1] || (U[1] = (vt) => Qt("left"))
                  }, [...U[15] || (U[15] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M2 2v12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "4",
                        y: "3.5",
                        width: "9",
                        height: "3",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "4",
                        y: "9.5",
                        width: "5.5",
                        height: "3",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])]),
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Waagerecht mittig",
                    onClick: U[2] || (U[2] = (vt) => Qt("hcenter"))
                  }, [...U[16] || (U[16] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M8 2v12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "3",
                        y: "3.5",
                        width: "10",
                        height: "3",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "5",
                        y: "9.5",
                        width: "6",
                        height: "3",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])]),
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Rechts bündig",
                    onClick: U[3] || (U[3] = (vt) => Qt("right"))
                  }, [...U[17] || (U[17] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M14 2v12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "3",
                        y: "3.5",
                        width: "9",
                        height: "3",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "6.5",
                        y: "9.5",
                        width: "5.5",
                        height: "3",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])])
                ]),
                bt("span", LE, [
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Oben bündig",
                    onClick: U[4] || (U[4] = (vt) => Qt("top"))
                  }, [...U[18] || (U[18] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M2 2h12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "3.5",
                        y: "4",
                        width: "3",
                        height: "9",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "9.5",
                        y: "4",
                        width: "3",
                        height: "5.5",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])]),
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Senkrecht mittig",
                    onClick: U[5] || (U[5] = (vt) => Qt("vcenter"))
                  }, [...U[19] || (U[19] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M2 8h12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "3.5",
                        y: "3",
                        width: "3",
                        height: "10",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "9.5",
                        y: "5",
                        width: "3",
                        height: "6",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])]),
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Unten bündig",
                    onClick: U[6] || (U[6] = (vt) => Qt("bottom"))
                  }, [...U[20] || (U[20] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("path", {
                        d: "M2 14h12",
                        stroke: "currentColor",
                        "stroke-width": "1.6"
                      }),
                      bt("rect", {
                        x: "3.5",
                        y: "3",
                        width: "3",
                        height: "9",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "9.5",
                        y: "6.5",
                        width: "3",
                        height: "5.5",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])])
                ]),
                ft.value.length > 2 ? (Rr(), Wr("span", WE, [
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Waagerecht gleichmäßig verteilen",
                    onClick: U[7] || (U[7] = (vt) => jr("x"))
                  }, [...U[21] || (U[21] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("rect", {
                        x: "1.5",
                        y: "4",
                        width: "2.5",
                        height: "8",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "6.75",
                        y: "4",
                        width: "2.5",
                        height: "8",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "12",
                        y: "4",
                        width: "2.5",
                        height: "8",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])]),
                  bt("button", {
                    type: "button",
                    class: "align-bar__btn",
                    title: "Senkrecht gleichmäßig verteilen",
                    onClick: U[8] || (U[8] = (vt) => jr("y"))
                  }, [...U[22] || (U[22] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("rect", {
                        x: "4",
                        y: "1.5",
                        width: "8",
                        height: "2.5",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "4",
                        y: "6.75",
                        width: "8",
                        height: "2.5",
                        fill: "currentColor"
                      }),
                      bt("rect", {
                        x: "4",
                        y: "12",
                        width: "8",
                        height: "2.5",
                        fill: "currentColor"
                      })
                    ], -1)
                  ])])
                ])) : kn("", !0),
                bt("span", NE, [
                  ur.value ? (Rr(), Wr("button", {
                    key: 1,
                    type: "button",
                    class: "align-bar__btn",
                    title: "Gruppierung aufheben",
                    onClick: fr
                  }, [...U[24] || (U[24] = [
                    bt("svg", {
                      viewBox: "0 0 16 16",
                      width: "14",
                      height: "14",
                      "aria-hidden": "true"
                    }, [
                      bt("rect", {
                        x: "1.5",
                        y: "1.5",
                        width: "6",
                        height: "6",
                        rx: "1",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.3"
                      }),
                      bt("rect", {
                        x: "8.5",
                        y: "8.5",
                        width: "6",
                        height: "6",
                        rx: "1",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "1.3"
                      }),
                      bt("path", {
                        d: "M6 10l4-4",
                        stroke: "currentColor",
                        "stroke-width": "1.6",
                        "stroke-linecap": "round"
                      })
                    ], -1)
                  ])])) : (Rr(), Wr("button", {
                    key: 0,
                    type: "button",
                    class: "align-bar__btn",
                    title: "Gruppieren - zusammen bewegen und wählen",
                    onClick: cr
                  }, [...U[23] || (U[23] = [
                    rb('<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" data-v-b55e7b11><rect x="1.5" y="1.5" width="6" height="6" rx="1" fill="currentColor" data-v-b55e7b11></rect><rect x="8.5" y="8.5" width="6" height="6" rx="1" fill="currentColor" data-v-b55e7b11></rect><rect x="8.5" y="1.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" data-v-b55e7b11></rect><rect x="1.5" y="8.5" width="6" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1.3" data-v-b55e7b11></rect></svg>', 1)
                  ])]))
                ]),
                bt("button", {
                  type: "button",
                  class: "align-bar__btn align-bar__btn--quiet",
                  title: "Auswahl aufheben",
                  onClick: Pt
                }, " × ")
              ], 32)) : kn("", !0),
              pt.value.visible && pr(_).hasClipboard ? (Rr(), Wr("div", {
                key: 3,
                class: "canvas-context-menu",
                style: yn({ left: pt.value.x + "px", top: pt.value.y + "px" })
              }, [
                bt("div", HE, [
                  Re(gt, {
                    onClick: Yt,
                    size: "small"
                  }, {
                    default: De(() => [...U[25] || (U[25] = [
                      vi(" Paste ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 4)) : kn("", !0)
            ])
          ], 36)
        ], 544),
        ht.value ? (Rr(), du(pr(fb), {
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
          default: De(() => [
            bt("div", {
              ref_key: "minimapBox",
              ref: rt,
              class: "minimap-canvas",
              onClick: lt
            }, [
              (Rr(!0), Wr(Eo, null, Pu(pr(d)?.layout || [], (vt) => (Rr(), Wr("div", {
                key: vt.id,
                class: "minimap-widget",
                style: yn({
                  left: vt.x * it.value + "px",
                  top: vt.y * it.value + "px",
                  width: vt.width * it.value + "px",
                  height: vt.height * it.value + "px"
                })
              }, null, 4))), 128)),
              bt("div", {
                class: "minimap-viewport",
                style: yn({
                  left: j.value.x * 100 + "%",
                  top: j.value.y * 100 + "%",
                  width: j.value.w * 100 + "%",
                  height: j.value.h * 100 + "%"
                })
              }, null, 4)
            ], 512)
          ]),
          _: 1
        })) : kn("", !0)
      ], 32);
    };
  }
}), UE = /* @__PURE__ */ Cp(qE, [["__scopeId", "data-v-b55e7b11"]]), Dh = "org.eclipse.daanse.board.app.ui.vue.layouts.base";
function Mh({ services: t }) {
  t.getRequired(hp).addLayout({
    id: Dh,
    name: "BaseLayout",
    description: "pixelbased Layout",
    component: hb,
    editor: UE
  });
}
function Rh({ services: t }) {
  t.getRequired(hp).removeLayout(Dh);
}
const $E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: Mh,
  deactivate: Rh,
  useClipboardStore: yp
}, Symbol.toStringTag, { value: "Module" })), dp = "org.eclipse.daanse.board.app.ui.vue.layouts.base", VE = "0.0.1-next.1";
async function iD(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${dp}: tsm runtime is not initialized`);
  e.register(dp, $E, VE, "ui.vue.layouts.base"), await Mh?.(t);
}
async function aD(t) {
  await Rh?.(t);
}
export {
  iD as activate,
  aD as deactivate,
  yp as useClipboardStore
};
