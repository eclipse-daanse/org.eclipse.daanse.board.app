(function(){var i="ui.vue.layouts.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".dottet[data-v-6934652c]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-6934652c]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-6934652c]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-6934652c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-6934652c]{display:flex;border:1px solid var(--color-divider);border-radius:8px;margin:16px}.widget-board[data-v-6934652c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow:auto}.report-container .add-btn[data-v-6934652c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-6934652c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-6934652c]{position:absolute}.dropdown-buttons-container[data-v-6934652c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-6934652c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-6934652c]{z-index:20000000!important}.add_widget-button[data-v-6934652c]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-6934652c],.v-leave-active[data-v-6934652c]{transition:opacity .5s ease}.v-enter-from[data-v-6934652c],.v-leave-to[data-v-6934652c]{opacity:0}.ghost{display:none}.report-container[data-v-2b5c0415]{width:100%;height:100%;position:relative}.scroll-viewport[data-v-2b5c0415]{width:100%;height:100%;overflow:auto}.canvas[data-v-2b5c0415]{position:relative;min-width:100%;min-height:100%;box-sizing:border-box}.dottet[data-v-2b5c0415]{background:var(--color-canvas, #dee1e7);background-image:radial-gradient(var(--color-divider, #ccd1d9) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat;transition:background-color .12s ease}.ghost-placeholder[data-v-2b5c0415]{position:absolute;background-color:color-mix(in srgb,var(--color-accent, #2f5fbd) 10%,transparent);border-radius:var(--radius-sm, 5px);border:2px dashed var(--color-outline, #b9bec9);z-index:1000000;pointer-events:none}.widget-board[data-v-2b5c0415]{position:absolute;top:0;left:0;width:100%;height:100%}.minimap-canvas[data-v-2b5c0415]{position:relative;width:100%;height:100%;cursor:pointer}.minimap-widget[data-v-2b5c0415]{position:absolute;background:color-mix(in srgb,var(--color-accent, #2f5fbd) 30%,transparent);border:1px solid color-mix(in srgb,var(--color-accent, #2f5fbd) 55%,transparent);border-radius:1px}.minimap-viewport[data-v-2b5c0415]{position:absolute;border:2px solid var(--color-err, #b02a1c);background:color-mix(in srgb,var(--color-err, #b02a1c) 8%,transparent);border-radius:2px;pointer-events:none}.report-container .add-btn[data-v-2b5c0415]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-2b5c0415]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-2b5c0415]{position:absolute}.widget-board-dropdown[data-v-2b5c0415]{width:100%;height:100%}.dropdown-buttons-container[data-v-2b5c0415]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}:root[data-board-backdrop=on] .canvas.dottet[data-v-2b5c0415]{background-color:transparent}.canvas-context-menu[data-v-2b5c0415]{position:absolute;background:var(--color-raised, #ffffff);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-sm, 5px);padding:8px;box-shadow:var(--shadow-e2, 0 2px 8px rgba(25, 30, 45, .14));color:var(--color-fg, #22252b);z-index:10000001}.va-dropdown__content[data-v-2b5c0415]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-2b5c0415]{z-index:20000000!important}.add_widget-button[data-v-2b5c0415]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-2b5c0415]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px}.v-enter-active[data-v-2b5c0415],.v-leave-active[data-v-2b5c0415]{transition:opacity .5s ease}.v-enter-from[data-v-2b5c0415],.v-leave-to[data-v-2b5c0415]{opacity:0}.bounce-enter-active[data-v-2b5c0415]{animation:bounce-in-2b5c0415 .5s}.bounce-leave-active[data-v-2b5c0415]{animation:bounce-in-2b5c0415 .5s reverse}@keyframes bounce-in-2b5c0415{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}\n";})();
import { LAYOUT_REPOSITORY as lp } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { ref as Ar, computed as an, defineComponent as tf, inject as cp, onMounted as Eu, nextTick as wu, createElementBlock as ye, openBlock as fe, Fragment as yo, renderList as Du, unref as fr, normalizeStyle as on, normalizeClass as vp, createElementVNode as xe, createVNode as ue, onUnmounted as pv, watch as dv, resolveComponent as uu, createBlock as Jy, createCommentVNode as fu, withCtx as _e, toDisplayString as Qy, createTextVNode as Qn, withModifiers as jy } from "vue";
import { useLayoutStore as tS } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useWidgetsStore as rS } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { defineStore as eS } from "pinia";
import { WidgetWrapper as pp, defaultConfig as nS } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as dp, useRouter as iS } from "vue-router";
import oS from "vuedraggable";
import { DFloatingWindow as sS } from "org.eclipse.daanse.board.app.ui.vue.controls";
const { identifiers: aS } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), hp = eS("widget-clipboard", () => {
  const t = Ar(null), e = an(() => t.value !== null);
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
var io = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hi = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var uS = Hi.exports, hv;
function fS() {
  return hv || (hv = 1, (function(t, e) {
    (function() {
      var r, n = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", v = 500, p = "__lodash_placeholder__", h = 1, d = 2, m = 4, _ = 1, x = 2, y = 1, b = 2, E = 4, R = 8, O = 16, I = 32, w = 64, D = 128, T = 256, P = 512, B = 30, H = "...", N = 800, L = 16, Y = 1, X = 2, J = 3, j = 1 / 0, V = 9007199254740991, nt = 17976931348623157e292, et = NaN, U = 4294967295, ft = U - 1, pt = U >>> 1, st = [
        ["ary", D],
        ["bind", y],
        ["bindKey", b],
        ["curry", R],
        ["curryRight", O],
        ["flip", P],
        ["partial", I],
        ["partialRight", w],
        ["rearg", T]
      ], lt = "[object Arguments]", ot = "[object Array]", ct = "[object AsyncFunction]", mt = "[object Boolean]", Rt = "[object Date]", Wt = "[object DOMException]", at = "[object Error]", gt = "[object Function]", Yt = "[object GeneratorFunction]", xt = "[object Map]", Ct = "[object Number]", It = "[object Null]", zt = "[object Object]", qt = "[object Promise]", Pt = "[object Proxy]", tt = "[object RegExp]", ut = "[object Set]", wt = "[object String]", Nt = "[object Symbol]", Ut = "[object Undefined]", yt = "[object WeakMap]", ir = "[object WeakSet]", gr = "[object ArrayBuffer]", pe = "[object DataView]", Gn = "[object Float32Array]", xi = "[object Float64Array]", $e = "[object Int8Array]", dn = "[object Int16Array]", yi = "[object Int32Array]", Fn = "[object Uint8Array]", hn = "[object Uint8ClampedArray]", Si = "[object Uint16Array]", bi = "[object Uint32Array]", Vo = /\b__p \+= '';/g, Ci = /\b(__p \+=) '' \+/g, Jt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, br = /&(?:amp|lt|gt|quot|#39);/g, Ei = /[&<>"']/g, ha = RegExp(br.source), Ko = RegExp(Ei.source), wi = /<%-([\s\S]+?)%>/g, Eh = /<%([\s\S]+?)%>/g, Nf = /<%=([\s\S]+?)%>/g, wh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Dh = /^\w*$/, Mh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Zo = /[\\^$.*+?()[\]{}|]/g, Rh = RegExp(Zo.source), Jo = /^\s+/, Th = /\s/, Oh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ih = /\{\n\/\* \[wrapped with (.+)\] \*/, Ph = /,? & /, Ah = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Bh = /[()=,{}\[\]\/\s]/, zh = /\\(\\)?/g, Gh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, kf = /\w*$/, Fh = /^[-+]0x[0-9a-f]+$/i, Lh = /^0b[01]+$/i, Wh = /^\[object .+?Constructor\]$/, Nh = /^0o[0-7]+$/i, kh = /^(?:0|[1-9]\d*)$/, Hh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ga = /($^)/, Yh = /['\n\r\u2028\u2029\\]/g, ma = "\\ud800-\\udfff", Xh = "\\u0300-\\u036f", qh = "\\ufe20-\\ufe2f", Uh = "\\u20d0-\\u20ff", Hf = Xh + qh + Uh, Yf = "\\u2700-\\u27bf", Xf = "a-z\\xdf-\\xf6\\xf8-\\xff", $h = "\\xac\\xb1\\xd7\\xf7", Vh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Kh = "\\u2000-\\u206f", Zh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Uf = "\\ufe0e\\ufe0f", $f = $h + Vh + Kh + Zh, Qo = "['’]", Jh = "[" + ma + "]", Vf = "[" + $f + "]", _a = "[" + Hf + "]", Kf = "\\d+", Qh = "[" + Yf + "]", Zf = "[" + Xf + "]", Jf = "[^" + ma + $f + Kf + Yf + Xf + qf + "]", jo = "\\ud83c[\\udffb-\\udfff]", jh = "(?:" + _a + "|" + jo + ")", Qf = "[^" + ma + "]", ts = "(?:\\ud83c[\\udde6-\\uddff]){2}", rs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ln = "[" + qf + "]", jf = "\\u200d", tl = "(?:" + Zf + "|" + Jf + ")", tg = "(?:" + Ln + "|" + Jf + ")", rl = "(?:" + Qo + "(?:d|ll|m|re|s|t|ve))?", el = "(?:" + Qo + "(?:D|LL|M|RE|S|T|VE))?", nl = jh + "?", il = "[" + Uf + "]?", rg = "(?:" + jf + "(?:" + [Qf, ts, rs].join("|") + ")" + il + nl + ")*", eg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ng = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", al = il + nl + rg, ig = "(?:" + [Qh, ts, rs].join("|") + ")" + al, ag = "(?:" + [Qf + _a + "?", _a, ts, rs, Jh].join("|") + ")", og = RegExp(Qo, "g"), sg = RegExp(_a, "g"), es = RegExp(jo + "(?=" + jo + ")|" + ag + al, "g"), ug = RegExp([
        Ln + "?" + Zf + "+" + rl + "(?=" + [Vf, Ln, "$"].join("|") + ")",
        tg + "+" + el + "(?=" + [Vf, Ln + tl, "$"].join("|") + ")",
        Ln + "?" + tl + "+" + rl,
        Ln + "+" + el,
        ng,
        eg,
        Kf,
        ig
      ].join("|"), "g"), fg = RegExp("[" + jf + ma + Hf + Uf + "]"), lg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, cg = [
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
      ], vg = -1, er = {};
      er[Gn] = er[xi] = er[$e] = er[dn] = er[yi] = er[Fn] = er[hn] = er[Si] = er[bi] = !0, er[lt] = er[ot] = er[gr] = er[mt] = er[pe] = er[Rt] = er[at] = er[gt] = er[xt] = er[Ct] = er[zt] = er[tt] = er[ut] = er[wt] = er[yt] = !1;
      var rr = {};
      rr[lt] = rr[ot] = rr[gr] = rr[pe] = rr[mt] = rr[Rt] = rr[Gn] = rr[xi] = rr[$e] = rr[dn] = rr[yi] = rr[xt] = rr[Ct] = rr[zt] = rr[tt] = rr[ut] = rr[wt] = rr[Nt] = rr[Fn] = rr[hn] = rr[Si] = rr[bi] = !0, rr[at] = rr[gt] = rr[yt] = !1;
      var pg = {
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
      }, dg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, hg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, gg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, mg = parseFloat, _g = parseInt, ol = typeof io == "object" && io && io.Object === Object && io, xg = typeof self == "object" && self && self.Object === Object && self, Er = ol || xg || Function("return this")(), ns = e && !e.nodeType && e, gn = ns && !0 && t && !t.nodeType && t, sl = gn && gn.exports === ns, is = sl && ol.process, jr = (function() {
        try {
          var W = gn && gn.require && gn.require("util").types;
          return W || is && is.binding && is.binding("util");
        } catch {
        }
      })(), ul = jr && jr.isArrayBuffer, fl = jr && jr.isDate, ll = jr && jr.isMap, cl = jr && jr.isRegExp, vl = jr && jr.isSet, pl = jr && jr.isTypedArray;
      function Ur(W, $, q) {
        switch (q.length) {
          case 0:
            return W.call($);
          case 1:
            return W.call($, q[0]);
          case 2:
            return W.call($, q[0], q[1]);
          case 3:
            return W.call($, q[0], q[1], q[2]);
        }
        return W.apply($, q);
      }
      function yg(W, $, q, ht) {
        for (var Ot = -1, Vt = W == null ? 0 : W.length; ++Ot < Vt; ) {
          var mr = W[Ot];
          $(ht, mr, q(mr), W);
        }
        return ht;
      }
      function te(W, $) {
        for (var q = -1, ht = W == null ? 0 : W.length; ++q < ht && $(W[q], q, W) !== !1; )
          ;
        return W;
      }
      function Sg(W, $) {
        for (var q = W == null ? 0 : W.length; q-- && $(W[q], q, W) !== !1; )
          ;
        return W;
      }
      function dl(W, $) {
        for (var q = -1, ht = W == null ? 0 : W.length; ++q < ht; )
          if (!$(W[q], q, W))
            return !1;
        return !0;
      }
      function Ve(W, $) {
        for (var q = -1, ht = W == null ? 0 : W.length, Ot = 0, Vt = []; ++q < ht; ) {
          var mr = W[q];
          $(mr, q, W) && (Vt[Ot++] = mr);
        }
        return Vt;
      }
      function xa(W, $) {
        var q = W == null ? 0 : W.length;
        return !!q && Wn(W, $, 0) > -1;
      }
      function as(W, $, q) {
        for (var ht = -1, Ot = W == null ? 0 : W.length; ++ht < Ot; )
          if (q($, W[ht]))
            return !0;
        return !1;
      }
      function ar(W, $) {
        for (var q = -1, ht = W == null ? 0 : W.length, Ot = Array(ht); ++q < ht; )
          Ot[q] = $(W[q], q, W);
        return Ot;
      }
      function Ke(W, $) {
        for (var q = -1, ht = $.length, Ot = W.length; ++q < ht; )
          W[Ot + q] = $[q];
        return W;
      }
      function os(W, $, q, ht) {
        var Ot = -1, Vt = W == null ? 0 : W.length;
        for (ht && Vt && (q = W[++Ot]); ++Ot < Vt; )
          q = $(q, W[Ot], Ot, W);
        return q;
      }
      function bg(W, $, q, ht) {
        var Ot = W == null ? 0 : W.length;
        for (ht && Ot && (q = W[--Ot]); Ot--; )
          q = $(q, W[Ot], Ot, W);
        return q;
      }
      function ss(W, $) {
        for (var q = -1, ht = W == null ? 0 : W.length; ++q < ht; )
          if ($(W[q], q, W))
            return !0;
        return !1;
      }
      var Cg = us("length");
      function Eg(W) {
        return W.split("");
      }
      function wg(W) {
        return W.match(Ah) || [];
      }
      function hl(W, $, q) {
        var ht;
        return q(W, function(Ot, Vt, mr) {
          if ($(Ot, Vt, mr))
            return ht = Vt, !1;
        }), ht;
      }
      function ya(W, $, q, ht) {
        for (var Ot = W.length, Vt = q + (ht ? 1 : -1); ht ? Vt-- : ++Vt < Ot; )
          if ($(W[Vt], Vt, W))
            return Vt;
        return -1;
      }
      function Wn(W, $, q) {
        return $ === $ ? Fg(W, $, q) : ya(W, gl, q);
      }
      function Dg(W, $, q, ht) {
        for (var Ot = q - 1, Vt = W.length; ++Ot < Vt; )
          if (ht(W[Ot], $))
            return Ot;
        return -1;
      }
      function gl(W) {
        return W !== W;
      }
      function ml(W, $) {
        var q = W == null ? 0 : W.length;
        return q ? ls(W, $) / q : et;
      }
      function us(W) {
        return function($) {
          return $ == null ? r : $[W];
        };
      }
      function fs(W) {
        return function($) {
          return W == null ? r : W[$];
        };
      }
      function _l(W, $, q, ht, Ot) {
        return Ot(W, function(Vt, mr, tr) {
          q = ht ? (ht = !1, Vt) : $(q, Vt, mr, tr);
        }), q;
      }
      function Mg(W, $) {
        var q = W.length;
        for (W.sort($); q--; )
          W[q] = W[q].value;
        return W;
      }
      function ls(W, $) {
        for (var q, ht = -1, Ot = W.length; ++ht < Ot; ) {
          var Vt = $(W[ht]);
          Vt !== r && (q = q === r ? Vt : q + Vt);
        }
        return q;
      }
      function cs(W, $) {
        for (var q = -1, ht = Array(W); ++q < W; )
          ht[q] = $(q);
        return ht;
      }
      function Rg(W, $) {
        return ar($, function(q) {
          return [q, W[q]];
        });
      }
      function xl(W) {
        return W && W.slice(0, Cl(W) + 1).replace(Jo, "");
      }
      function $r(W) {
        return function($) {
          return W($);
        };
      }
      function vs(W, $) {
        return ar($, function(q) {
          return W[q];
        });
      }
      function Di(W, $) {
        return W.has($);
      }
      function yl(W, $) {
        for (var q = -1, ht = W.length; ++q < ht && Wn($, W[q], 0) > -1; )
          ;
        return q;
      }
      function Sl(W, $) {
        for (var q = W.length; q-- && Wn($, W[q], 0) > -1; )
          ;
        return q;
      }
      function Tg(W, $) {
        for (var q = W.length, ht = 0; q--; )
          W[q] === $ && ++ht;
        return ht;
      }
      var Og = fs(pg), Ig = fs(dg);
      function Pg(W) {
        return "\\" + gg[W];
      }
      function Ag(W, $) {
        return W == null ? r : W[$];
      }
      function Nn(W) {
        return fg.test(W);
      }
      function Bg(W) {
        return lg.test(W);
      }
      function zg(W) {
        for (var $, q = []; !($ = W.next()).done; )
          q.push($.value);
        return q;
      }
      function ps(W) {
        var $ = -1, q = Array(W.size);
        return W.forEach(function(ht, Ot) {
          q[++$] = [Ot, ht];
        }), q;
      }
      function bl(W, $) {
        return function(q) {
          return W($(q));
        };
      }
      function Ze(W, $) {
        for (var q = -1, ht = W.length, Ot = 0, Vt = []; ++q < ht; ) {
          var mr = W[q];
          (mr === $ || mr === p) && (W[q] = p, Vt[Ot++] = q);
        }
        return Vt;
      }
      function Sa(W) {
        var $ = -1, q = Array(W.size);
        return W.forEach(function(ht) {
          q[++$] = ht;
        }), q;
      }
      function Gg(W) {
        var $ = -1, q = Array(W.size);
        return W.forEach(function(ht) {
          q[++$] = [ht, ht];
        }), q;
      }
      function Fg(W, $, q) {
        for (var ht = q - 1, Ot = W.length; ++ht < Ot; )
          if (W[ht] === $)
            return ht;
        return -1;
      }
      function Lg(W, $, q) {
        for (var ht = q + 1; ht--; )
          if (W[ht] === $)
            return ht;
        return ht;
      }
      function kn(W) {
        return Nn(W) ? Ng(W) : Cg(W);
      }
      function de(W) {
        return Nn(W) ? kg(W) : Eg(W);
      }
      function Cl(W) {
        for (var $ = W.length; $-- && Th.test(W.charAt($)); )
          ;
        return $;
      }
      var Wg = fs(hg);
      function Ng(W) {
        for (var $ = es.lastIndex = 0; es.test(W); )
          ++$;
        return $;
      }
      function kg(W) {
        return W.match(es) || [];
      }
      function Hg(W) {
        return W.match(ug) || [];
      }
      var Yg = (function W($) {
        $ = $ == null ? Er : Hn.defaults(Er.Object(), $, Hn.pick(Er, cg));
        var q = $.Array, ht = $.Date, Ot = $.Error, Vt = $.Function, mr = $.Math, tr = $.Object, ds = $.RegExp, Xg = $.String, re = $.TypeError, ba = q.prototype, qg = Vt.prototype, Yn = tr.prototype, Ca = $["__core-js_shared__"], Ea = qg.toString, Zt = Yn.hasOwnProperty, Ug = 0, El = (function() {
          var i = /[^.]+$/.exec(Ca && Ca.keys && Ca.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), wa = Yn.toString, $g = Ea.call(tr), Vg = Er._, Kg = ds(
          "^" + Ea.call(Zt).replace(Zo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Da = sl ? $.Buffer : r, Je = $.Symbol, Ma = $.Uint8Array, wl = Da ? Da.allocUnsafe : r, Ra = bl(tr.getPrototypeOf, tr), Dl = tr.create, Ml = Yn.propertyIsEnumerable, Ta = ba.splice, Rl = Je ? Je.isConcatSpreadable : r, Mi = Je ? Je.iterator : r, mn = Je ? Je.toStringTag : r, Oa = (function() {
          try {
            var i = bn(tr, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), Zg = $.clearTimeout !== Er.clearTimeout && $.clearTimeout, Jg = ht && ht.now !== Er.Date.now && ht.now, Qg = $.setTimeout !== Er.setTimeout && $.setTimeout, Ia = mr.ceil, Pa = mr.floor, hs = tr.getOwnPropertySymbols, jg = Da ? Da.isBuffer : r, Tl = $.isFinite, t0 = ba.join, r0 = bl(tr.keys, tr), _r = mr.max, Mr = mr.min, e0 = ht.now, n0 = $.parseInt, Ol = mr.random, i0 = ba.reverse, gs = bn($, "DataView"), Ri = bn($, "Map"), ms = bn($, "Promise"), Xn = bn($, "Set"), Ti = bn($, "WeakMap"), Oi = bn(tr, "create"), Aa = Ti && new Ti(), qn = {}, a0 = Cn(gs), o0 = Cn(Ri), s0 = Cn(ms), u0 = Cn(Xn), f0 = Cn(Ti), Ba = Je ? Je.prototype : r, Ii = Ba ? Ba.valueOf : r, Il = Ba ? Ba.toString : r;
        function C(i) {
          if (ur(i) && !At(i) && !(i instanceof Ht)) {
            if (i instanceof ee)
              return i;
            if (Zt.call(i, "__wrapped__"))
              return Pc(i);
          }
          return new ee(i);
        }
        var Un = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(o) {
            if (!or(o))
              return {};
            if (Dl)
              return Dl(o);
            i.prototype = o;
            var l = new i();
            return i.prototype = r, l;
          };
        })();
        function za() {
        }
        function ee(i, o) {
          this.__wrapped__ = i, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = r;
        }
        C.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: wi,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: Eh,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Nf,
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
        }, C.prototype = za.prototype, C.prototype.constructor = C, ee.prototype = Un(za.prototype), ee.prototype.constructor = ee;
        function Ht(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = U, this.__views__ = [];
        }
        function l0() {
          var i = new Ht(this.__wrapped__);
          return i.__actions__ = Lr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Lr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Lr(this.__views__), i;
        }
        function c0() {
          if (this.__filtered__) {
            var i = new Ht(this);
            i.__dir__ = -1, i.__filtered__ = !0;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function v0() {
          var i = this.__wrapped__.value(), o = this.__dir__, l = At(i), g = o < 0, S = l ? i.length : 0, M = E1(0, S, this.__views__), A = M.start, G = M.end, k = G - A, K = g ? G : A - 1, Z = this.__iteratees__, rt = Z.length, vt = 0, _t = Mr(k, this.__takeCount__);
          if (!l || !g && S == k && _t == k)
            return rc(i, this.__actions__);
          var Dt = [];
          t:
            for (; k-- && vt < _t; ) {
              K += o;
              for (var Ft = -1, Mt = i[K]; ++Ft < rt; ) {
                var kt = Z[Ft], Xt = kt.iteratee, Zr = kt.type, Pr = Xt(Mt);
                if (Zr == X)
                  Mt = Pr;
                else if (!Pr) {
                  if (Zr == Y)
                    continue t;
                  break t;
                }
              }
              Dt[vt++] = Mt;
            }
          return Dt;
        }
        Ht.prototype = Un(za.prototype), Ht.prototype.constructor = Ht;
        function _n(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function p0() {
          this.__data__ = Oi ? Oi(null) : {}, this.size = 0;
        }
        function d0(i) {
          var o = this.has(i) && delete this.__data__[i];
          return this.size -= o ? 1 : 0, o;
        }
        function h0(i) {
          var o = this.__data__;
          if (Oi) {
            var l = o[i];
            return l === c ? r : l;
          }
          return Zt.call(o, i) ? o[i] : r;
        }
        function g0(i) {
          var o = this.__data__;
          return Oi ? o[i] !== r : Zt.call(o, i);
        }
        function m0(i, o) {
          var l = this.__data__;
          return this.size += this.has(i) ? 0 : 1, l[i] = Oi && o === r ? c : o, this;
        }
        _n.prototype.clear = p0, _n.prototype.delete = d0, _n.prototype.get = h0, _n.prototype.has = g0, _n.prototype.set = m0;
        function Ae(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function _0() {
          this.__data__ = [], this.size = 0;
        }
        function x0(i) {
          var o = this.__data__, l = Ga(o, i);
          if (l < 0)
            return !1;
          var g = o.length - 1;
          return l == g ? o.pop() : Ta.call(o, l, 1), --this.size, !0;
        }
        function y0(i) {
          var o = this.__data__, l = Ga(o, i);
          return l < 0 ? r : o[l][1];
        }
        function S0(i) {
          return Ga(this.__data__, i) > -1;
        }
        function b0(i, o) {
          var l = this.__data__, g = Ga(l, i);
          return g < 0 ? (++this.size, l.push([i, o])) : l[g][1] = o, this;
        }
        Ae.prototype.clear = _0, Ae.prototype.delete = x0, Ae.prototype.get = y0, Ae.prototype.has = S0, Ae.prototype.set = b0;
        function Be(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function C0() {
          this.size = 0, this.__data__ = {
            hash: new _n(),
            map: new (Ri || Ae)(),
            string: new _n()
          };
        }
        function E0(i) {
          var o = Va(this, i).delete(i);
          return this.size -= o ? 1 : 0, o;
        }
        function w0(i) {
          return Va(this, i).get(i);
        }
        function D0(i) {
          return Va(this, i).has(i);
        }
        function M0(i, o) {
          var l = Va(this, i), g = l.size;
          return l.set(i, o), this.size += l.size == g ? 0 : 1, this;
        }
        Be.prototype.clear = C0, Be.prototype.delete = E0, Be.prototype.get = w0, Be.prototype.has = D0, Be.prototype.set = M0;
        function xn(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.__data__ = new Be(); ++o < l; )
            this.add(i[o]);
        }
        function R0(i) {
          return this.__data__.set(i, c), this;
        }
        function T0(i) {
          return this.__data__.has(i);
        }
        xn.prototype.add = xn.prototype.push = R0, xn.prototype.has = T0;
        function he(i) {
          var o = this.__data__ = new Ae(i);
          this.size = o.size;
        }
        function O0() {
          this.__data__ = new Ae(), this.size = 0;
        }
        function I0(i) {
          var o = this.__data__, l = o.delete(i);
          return this.size = o.size, l;
        }
        function P0(i) {
          return this.__data__.get(i);
        }
        function A0(i) {
          return this.__data__.has(i);
        }
        function B0(i, o) {
          var l = this.__data__;
          if (l instanceof Ae) {
            var g = l.__data__;
            if (!Ri || g.length < a - 1)
              return g.push([i, o]), this.size = ++l.size, this;
            l = this.__data__ = new Be(g);
          }
          return l.set(i, o), this.size = l.size, this;
        }
        he.prototype.clear = O0, he.prototype.delete = I0, he.prototype.get = P0, he.prototype.has = A0, he.prototype.set = B0;
        function Pl(i, o) {
          var l = At(i), g = !l && En(i), S = !l && !g && en(i), M = !l && !g && !S && Zn(i), A = l || g || S || M, G = A ? cs(i.length, Xg) : [], k = G.length;
          for (var K in i)
            (o || Zt.call(i, K)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
            (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            S && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            M && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
            Le(K, k))) && G.push(K);
          return G;
        }
        function Al(i) {
          var o = i.length;
          return o ? i[Rs(0, o - 1)] : r;
        }
        function z0(i, o) {
          return Ka(Lr(i), yn(o, 0, i.length));
        }
        function G0(i) {
          return Ka(Lr(i));
        }
        function _s(i, o, l) {
          (l !== r && !ge(i[o], l) || l === r && !(o in i)) && ze(i, o, l);
        }
        function Pi(i, o, l) {
          var g = i[o];
          (!(Zt.call(i, o) && ge(g, l)) || l === r && !(o in i)) && ze(i, o, l);
        }
        function Ga(i, o) {
          for (var l = i.length; l--; )
            if (ge(i[l][0], o))
              return l;
          return -1;
        }
        function F0(i, o, l, g) {
          return Qe(i, function(S, M, A) {
            o(g, S, l(S), A);
          }), g;
        }
        function Bl(i, o) {
          return i && Me(o, Cr(o), i);
        }
        function L0(i, o) {
          return i && Me(o, Nr(o), i);
        }
        function ze(i, o, l) {
          o == "__proto__" && Oa ? Oa(i, o, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : i[o] = l;
        }
        function xs(i, o) {
          for (var l = -1, g = o.length, S = q(g), M = i == null; ++l < g; )
            S[l] = M ? r : js(i, o[l]);
          return S;
        }
        function yn(i, o, l) {
          return i === i && (l !== r && (i = i <= l ? i : l), o !== r && (i = i >= o ? i : o)), i;
        }
        function ne(i, o, l, g, S, M) {
          var A, G = o & h, k = o & d, K = o & m;
          if (l && (A = S ? l(i, g, S, M) : l(i)), A !== r)
            return A;
          if (!or(i))
            return i;
          var Z = At(i);
          if (Z) {
            if (A = D1(i), !G)
              return Lr(i, A);
          } else {
            var rt = Rr(i), vt = rt == gt || rt == Yt;
            if (en(i))
              return ic(i, G);
            if (rt == zt || rt == lt || vt && !S) {
              if (A = k || vt ? {} : Cc(i), !G)
                return k ? h1(i, L0(A, i)) : d1(i, Bl(A, i));
            } else {
              if (!rr[rt])
                return S ? i : {};
              A = M1(i, rt, G);
            }
          }
          M || (M = new he());
          var _t = M.get(i);
          if (_t)
            return _t;
          M.set(i, A), Qc(i) ? i.forEach(function(Mt) {
            A.add(ne(Mt, o, l, Mt, i, M));
          }) : Zc(i) && i.forEach(function(Mt, kt) {
            A.set(kt, ne(Mt, o, l, kt, i, M));
          });
          var Dt = K ? k ? Ws : Ls : k ? Nr : Cr, Ft = Z ? r : Dt(i);
          return te(Ft || i, function(Mt, kt) {
            Ft && (kt = Mt, Mt = i[kt]), Pi(A, kt, ne(Mt, o, l, kt, i, M));
          }), A;
        }
        function W0(i) {
          var o = Cr(i);
          return function(l) {
            return zl(l, i, o);
          };
        }
        function zl(i, o, l) {
          var g = l.length;
          if (i == null)
            return !g;
          for (i = tr(i); g--; ) {
            var S = l[g], M = o[S], A = i[S];
            if (A === r && !(S in i) || !M(A))
              return !1;
          }
          return !0;
        }
        function Gl(i, o, l) {
          if (typeof i != "function")
            throw new re(u);
          return Wi(function() {
            i.apply(r, l);
          }, o);
        }
        function Ai(i, o, l, g) {
          var S = -1, M = xa, A = !0, G = i.length, k = [], K = o.length;
          if (!G)
            return k;
          l && (o = ar(o, $r(l))), g ? (M = as, A = !1) : o.length >= a && (M = Di, A = !1, o = new xn(o));
          t:
            for (; ++S < G; ) {
              var Z = i[S], rt = l == null ? Z : l(Z);
              if (Z = g || Z !== 0 ? Z : 0, A && rt === rt) {
                for (var vt = K; vt--; )
                  if (o[vt] === rt)
                    continue t;
                k.push(Z);
              } else M(o, rt, g) || k.push(Z);
            }
          return k;
        }
        var Qe = fc(De), Fl = fc(Ss, !0);
        function N0(i, o) {
          var l = !0;
          return Qe(i, function(g, S, M) {
            return l = !!o(g, S, M), l;
          }), l;
        }
        function Fa(i, o, l) {
          for (var g = -1, S = i.length; ++g < S; ) {
            var M = i[g], A = o(M);
            if (A != null && (G === r ? A === A && !Kr(A) : l(A, G)))
              var G = A, k = M;
          }
          return k;
        }
        function k0(i, o, l, g) {
          var S = i.length;
          for (l = Gt(l), l < 0 && (l = -l > S ? 0 : S + l), g = g === r || g > S ? S : Gt(g), g < 0 && (g += S), g = l > g ? 0 : tv(g); l < g; )
            i[l++] = o;
          return i;
        }
        function Ll(i, o) {
          var l = [];
          return Qe(i, function(g, S, M) {
            o(g, S, M) && l.push(g);
          }), l;
        }
        function wr(i, o, l, g, S) {
          var M = -1, A = i.length;
          for (l || (l = T1), S || (S = []); ++M < A; ) {
            var G = i[M];
            o > 0 && l(G) ? o > 1 ? wr(G, o - 1, l, g, S) : Ke(S, G) : g || (S[S.length] = G);
          }
          return S;
        }
        var ys = lc(), Wl = lc(!0);
        function De(i, o) {
          return i && ys(i, o, Cr);
        }
        function Ss(i, o) {
          return i && Wl(i, o, Cr);
        }
        function La(i, o) {
          return Ve(o, function(l) {
            return We(i[l]);
          });
        }
        function Sn(i, o) {
          o = tn(o, i);
          for (var l = 0, g = o.length; i != null && l < g; )
            i = i[Re(o[l++])];
          return l && l == g ? i : r;
        }
        function Nl(i, o, l) {
          var g = o(i);
          return At(i) ? g : Ke(g, l(i));
        }
        function Or(i) {
          return i == null ? i === r ? Ut : It : mn && mn in tr(i) ? C1(i) : G1(i);
        }
        function bs(i, o) {
          return i > o;
        }
        function H0(i, o) {
          return i != null && Zt.call(i, o);
        }
        function Y0(i, o) {
          return i != null && o in tr(i);
        }
        function X0(i, o, l) {
          return i >= Mr(o, l) && i < _r(o, l);
        }
        function Cs(i, o, l) {
          for (var g = l ? as : xa, S = i[0].length, M = i.length, A = M, G = q(M), k = 1 / 0, K = []; A--; ) {
            var Z = i[A];
            A && o && (Z = ar(Z, $r(o))), k = Mr(Z.length, k), G[A] = !l && (o || S >= 120 && Z.length >= 120) ? new xn(A && Z) : r;
          }
          Z = i[0];
          var rt = -1, vt = G[0];
          t:
            for (; ++rt < S && K.length < k; ) {
              var _t = Z[rt], Dt = o ? o(_t) : _t;
              if (_t = l || _t !== 0 ? _t : 0, !(vt ? Di(vt, Dt) : g(K, Dt, l))) {
                for (A = M; --A; ) {
                  var Ft = G[A];
                  if (!(Ft ? Di(Ft, Dt) : g(i[A], Dt, l)))
                    continue t;
                }
                vt && vt.push(Dt), K.push(_t);
              }
            }
          return K;
        }
        function q0(i, o, l, g) {
          return De(i, function(S, M, A) {
            o(g, l(S), M, A);
          }), g;
        }
        function Bi(i, o, l) {
          o = tn(o, i), i = Mc(i, o);
          var g = i == null ? i : i[Re(ae(o))];
          return g == null ? r : Ur(g, i, l);
        }
        function kl(i) {
          return ur(i) && Or(i) == lt;
        }
        function U0(i) {
          return ur(i) && Or(i) == gr;
        }
        function $0(i) {
          return ur(i) && Or(i) == Rt;
        }
        function zi(i, o, l, g, S) {
          return i === o ? !0 : i == null || o == null || !ur(i) && !ur(o) ? i !== i && o !== o : V0(i, o, l, g, zi, S);
        }
        function V0(i, o, l, g, S, M) {
          var A = At(i), G = At(o), k = A ? ot : Rr(i), K = G ? ot : Rr(o);
          k = k == lt ? zt : k, K = K == lt ? zt : K;
          var Z = k == zt, rt = K == zt, vt = k == K;
          if (vt && en(i)) {
            if (!en(o))
              return !1;
            A = !0, Z = !1;
          }
          if (vt && !Z)
            return M || (M = new he()), A || Zn(i) ? yc(i, o, l, g, S, M) : S1(i, o, k, l, g, S, M);
          if (!(l & _)) {
            var _t = Z && Zt.call(i, "__wrapped__"), Dt = rt && Zt.call(o, "__wrapped__");
            if (_t || Dt) {
              var Ft = _t ? i.value() : i, Mt = Dt ? o.value() : o;
              return M || (M = new he()), S(Ft, Mt, l, g, M);
            }
          }
          return vt ? (M || (M = new he()), b1(i, o, l, g, S, M)) : !1;
        }
        function K0(i) {
          return ur(i) && Rr(i) == xt;
        }
        function Es(i, o, l, g) {
          var S = l.length, M = S, A = !g;
          if (i == null)
            return !M;
          for (i = tr(i); S--; ) {
            var G = l[S];
            if (A && G[2] ? G[1] !== i[G[0]] : !(G[0] in i))
              return !1;
          }
          for (; ++S < M; ) {
            G = l[S];
            var k = G[0], K = i[k], Z = G[1];
            if (A && G[2]) {
              if (K === r && !(k in i))
                return !1;
            } else {
              var rt = new he();
              if (g)
                var vt = g(K, Z, k, i, o, rt);
              if (!(vt === r ? zi(Z, K, _ | x, g, rt) : vt))
                return !1;
            }
          }
          return !0;
        }
        function Hl(i) {
          if (!or(i) || I1(i))
            return !1;
          var o = We(i) ? Kg : Wh;
          return o.test(Cn(i));
        }
        function Z0(i) {
          return ur(i) && Or(i) == tt;
        }
        function J0(i) {
          return ur(i) && Rr(i) == ut;
        }
        function Q0(i) {
          return ur(i) && ro(i.length) && !!er[Or(i)];
        }
        function Yl(i) {
          return typeof i == "function" ? i : i == null ? kr : typeof i == "object" ? At(i) ? Ul(i[0], i[1]) : ql(i) : cv(i);
        }
        function ws(i) {
          if (!Li(i))
            return r0(i);
          var o = [];
          for (var l in tr(i))
            Zt.call(i, l) && l != "constructor" && o.push(l);
          return o;
        }
        function j0(i) {
          if (!or(i))
            return z1(i);
          var o = Li(i), l = [];
          for (var g in i)
            g == "constructor" && (o || !Zt.call(i, g)) || l.push(g);
          return l;
        }
        function Ds(i, o) {
          return i < o;
        }
        function Xl(i, o) {
          var l = -1, g = Wr(i) ? q(i.length) : [];
          return Qe(i, function(S, M, A) {
            g[++l] = o(S, M, A);
          }), g;
        }
        function ql(i) {
          var o = ks(i);
          return o.length == 1 && o[0][2] ? wc(o[0][0], o[0][1]) : function(l) {
            return l === i || Es(l, i, o);
          };
        }
        function Ul(i, o) {
          return Ys(i) && Ec(o) ? wc(Re(i), o) : function(l) {
            var g = js(l, i);
            return g === r && g === o ? tu(l, i) : zi(o, g, _ | x);
          };
        }
        function Wa(i, o, l, g, S) {
          i !== o && ys(o, function(M, A) {
            if (S || (S = new he()), or(M))
              t1(i, o, A, l, Wa, g, S);
            else {
              var G = g ? g(qs(i, A), M, A + "", i, o, S) : r;
              G === r && (G = M), _s(i, A, G);
            }
          }, Nr);
        }
        function t1(i, o, l, g, S, M, A) {
          var G = qs(i, l), k = qs(o, l), K = A.get(k);
          if (K) {
            _s(i, l, K);
            return;
          }
          var Z = M ? M(G, k, l + "", i, o, A) : r, rt = Z === r;
          if (rt) {
            var vt = At(k), _t = !vt && en(k), Dt = !vt && !_t && Zn(k);
            Z = k, vt || _t || Dt ? At(G) ? Z = G : lr(G) ? Z = Lr(G) : _t ? (rt = !1, Z = ic(k, !0)) : Dt ? (rt = !1, Z = ac(k, !0)) : Z = [] : Ni(k) || En(k) ? (Z = G, En(G) ? Z = rv(G) : (!or(G) || We(G)) && (Z = Cc(k))) : rt = !1;
          }
          rt && (A.set(k, Z), S(Z, k, g, M, A), A.delete(k)), _s(i, l, Z);
        }
        function $l(i, o) {
          var l = i.length;
          if (l)
            return o += o < 0 ? l : 0, Le(o, l) ? i[o] : r;
        }
        function Vl(i, o, l) {
          o.length ? o = ar(o, function(M) {
            return At(M) ? function(A) {
              return Sn(A, M.length === 1 ? M[0] : M);
            } : M;
          }) : o = [kr];
          var g = -1;
          o = ar(o, $r(Et()));
          var S = Xl(i, function(M, A, G) {
            var k = ar(o, function(K) {
              return K(M);
            });
            return { criteria: k, index: ++g, value: M };
          });
          return Mg(S, function(M, A) {
            return p1(M, A, l);
          });
        }
        function r1(i, o) {
          return Kl(i, o, function(l, g) {
            return tu(i, g);
          });
        }
        function Kl(i, o, l) {
          for (var g = -1, S = o.length, M = {}; ++g < S; ) {
            var A = o[g], G = Sn(i, A);
            l(G, A) && Gi(M, tn(A, i), G);
          }
          return M;
        }
        function e1(i) {
          return function(o) {
            return Sn(o, i);
          };
        }
        function Ms(i, o, l, g) {
          var S = g ? Dg : Wn, M = -1, A = o.length, G = i;
          for (i === o && (o = Lr(o)), l && (G = ar(i, $r(l))); ++M < A; )
            for (var k = 0, K = o[M], Z = l ? l(K) : K; (k = S(G, Z, k, g)) > -1; )
              G !== i && Ta.call(G, k, 1), Ta.call(i, k, 1);
          return i;
        }
        function Zl(i, o) {
          for (var l = i ? o.length : 0, g = l - 1; l--; ) {
            var S = o[l];
            if (l == g || S !== M) {
              var M = S;
              Le(S) ? Ta.call(i, S, 1) : Is(i, S);
            }
          }
          return i;
        }
        function Rs(i, o) {
          return i + Pa(Ol() * (o - i + 1));
        }
        function n1(i, o, l, g) {
          for (var S = -1, M = _r(Ia((o - i) / (l || 1)), 0), A = q(M); M--; )
            A[g ? M : ++S] = i, i += l;
          return A;
        }
        function Ts(i, o) {
          var l = "";
          if (!i || o < 1 || o > V)
            return l;
          do
            o % 2 && (l += i), o = Pa(o / 2), o && (i += i);
          while (o);
          return l;
        }
        function Lt(i, o) {
          return Us(Dc(i, o, kr), i + "");
        }
        function i1(i) {
          return Al(Jn(i));
        }
        function a1(i, o) {
          var l = Jn(i);
          return Ka(l, yn(o, 0, l.length));
        }
        function Gi(i, o, l, g) {
          if (!or(i))
            return i;
          o = tn(o, i);
          for (var S = -1, M = o.length, A = M - 1, G = i; G != null && ++S < M; ) {
            var k = Re(o[S]), K = l;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return i;
            if (S != A) {
              var Z = G[k];
              K = g ? g(Z, k, G) : r, K === r && (K = or(Z) ? Z : Le(o[S + 1]) ? [] : {});
            }
            Pi(G, k, K), G = G[k];
          }
          return i;
        }
        var Jl = Aa ? function(i, o) {
          return Aa.set(i, o), i;
        } : kr, o1 = Oa ? function(i, o) {
          return Oa(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: eu(o),
            writable: !0
          });
        } : kr;
        function s1(i) {
          return Ka(Jn(i));
        }
        function ie(i, o, l) {
          var g = -1, S = i.length;
          o < 0 && (o = -o > S ? 0 : S + o), l = l > S ? S : l, l < 0 && (l += S), S = o > l ? 0 : l - o >>> 0, o >>>= 0;
          for (var M = q(S); ++g < S; )
            M[g] = i[g + o];
          return M;
        }
        function u1(i, o) {
          var l;
          return Qe(i, function(g, S, M) {
            return l = o(g, S, M), !l;
          }), !!l;
        }
        function Na(i, o, l) {
          var g = 0, S = i == null ? g : i.length;
          if (typeof o == "number" && o === o && S <= pt) {
            for (; g < S; ) {
              var M = g + S >>> 1, A = i[M];
              A !== null && !Kr(A) && (l ? A <= o : A < o) ? g = M + 1 : S = M;
            }
            return S;
          }
          return Os(i, o, kr, l);
        }
        function Os(i, o, l, g) {
          var S = 0, M = i == null ? 0 : i.length;
          if (M === 0)
            return 0;
          o = l(o);
          for (var A = o !== o, G = o === null, k = Kr(o), K = o === r; S < M; ) {
            var Z = Pa((S + M) / 2), rt = l(i[Z]), vt = rt !== r, _t = rt === null, Dt = rt === rt, Ft = Kr(rt);
            if (A)
              var Mt = g || Dt;
            else K ? Mt = Dt && (g || vt) : G ? Mt = Dt && vt && (g || !_t) : k ? Mt = Dt && vt && !_t && (g || !Ft) : _t || Ft ? Mt = !1 : Mt = g ? rt <= o : rt < o;
            Mt ? S = Z + 1 : M = Z;
          }
          return Mr(M, ft);
        }
        function Ql(i, o) {
          for (var l = -1, g = i.length, S = 0, M = []; ++l < g; ) {
            var A = i[l], G = o ? o(A) : A;
            if (!l || !ge(G, k)) {
              var k = G;
              M[S++] = A === 0 ? 0 : A;
            }
          }
          return M;
        }
        function jl(i) {
          return typeof i == "number" ? i : Kr(i) ? et : +i;
        }
        function Vr(i) {
          if (typeof i == "string")
            return i;
          if (At(i))
            return ar(i, Vr) + "";
          if (Kr(i))
            return Il ? Il.call(i) : "";
          var o = i + "";
          return o == "0" && 1 / i == -j ? "-0" : o;
        }
        function je(i, o, l) {
          var g = -1, S = xa, M = i.length, A = !0, G = [], k = G;
          if (l)
            A = !1, S = as;
          else if (M >= a) {
            var K = o ? null : x1(i);
            if (K)
              return Sa(K);
            A = !1, S = Di, k = new xn();
          } else
            k = o ? [] : G;
          t:
            for (; ++g < M; ) {
              var Z = i[g], rt = o ? o(Z) : Z;
              if (Z = l || Z !== 0 ? Z : 0, A && rt === rt) {
                for (var vt = k.length; vt--; )
                  if (k[vt] === rt)
                    continue t;
                o && k.push(rt), G.push(Z);
              } else S(k, rt, l) || (k !== G && k.push(rt), G.push(Z));
            }
          return G;
        }
        function Is(i, o) {
          return o = tn(o, i), i = Mc(i, o), i == null || delete i[Re(ae(o))];
        }
        function tc(i, o, l, g) {
          return Gi(i, o, l(Sn(i, o)), g);
        }
        function ka(i, o, l, g) {
          for (var S = i.length, M = g ? S : -1; (g ? M-- : ++M < S) && o(i[M], M, i); )
            ;
          return l ? ie(i, g ? 0 : M, g ? M + 1 : S) : ie(i, g ? M + 1 : 0, g ? S : M);
        }
        function rc(i, o) {
          var l = i;
          return l instanceof Ht && (l = l.value()), os(o, function(g, S) {
            return S.func.apply(S.thisArg, Ke([g], S.args));
          }, l);
        }
        function Ps(i, o, l) {
          var g = i.length;
          if (g < 2)
            return g ? je(i[0]) : [];
          for (var S = -1, M = q(g); ++S < g; )
            for (var A = i[S], G = -1; ++G < g; )
              G != S && (M[S] = Ai(M[S] || A, i[G], o, l));
          return je(wr(M, 1), o, l);
        }
        function ec(i, o, l) {
          for (var g = -1, S = i.length, M = o.length, A = {}; ++g < S; ) {
            var G = g < M ? o[g] : r;
            l(A, i[g], G);
          }
          return A;
        }
        function As(i) {
          return lr(i) ? i : [];
        }
        function Bs(i) {
          return typeof i == "function" ? i : kr;
        }
        function tn(i, o) {
          return At(i) ? i : Ys(i, o) ? [i] : Ic(Kt(i));
        }
        var f1 = Lt;
        function rn(i, o, l) {
          var g = i.length;
          return l = l === r ? g : l, !o && l >= g ? i : ie(i, o, l);
        }
        var nc = Zg || function(i) {
          return Er.clearTimeout(i);
        };
        function ic(i, o) {
          if (o)
            return i.slice();
          var l = i.length, g = wl ? wl(l) : new i.constructor(l);
          return i.copy(g), g;
        }
        function zs(i) {
          var o = new i.constructor(i.byteLength);
          return new Ma(o).set(new Ma(i)), o;
        }
        function l1(i, o) {
          var l = o ? zs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.byteLength);
        }
        function c1(i) {
          var o = new i.constructor(i.source, kf.exec(i));
          return o.lastIndex = i.lastIndex, o;
        }
        function v1(i) {
          return Ii ? tr(Ii.call(i)) : {};
        }
        function ac(i, o) {
          var l = o ? zs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.length);
        }
        function oc(i, o) {
          if (i !== o) {
            var l = i !== r, g = i === null, S = i === i, M = Kr(i), A = o !== r, G = o === null, k = o === o, K = Kr(o);
            if (!G && !K && !M && i > o || M && A && k && !G && !K || g && A && k || !l && k || !S)
              return 1;
            if (!g && !M && !K && i < o || K && l && S && !g && !M || G && l && S || !A && S || !k)
              return -1;
          }
          return 0;
        }
        function p1(i, o, l) {
          for (var g = -1, S = i.criteria, M = o.criteria, A = S.length, G = l.length; ++g < A; ) {
            var k = oc(S[g], M[g]);
            if (k) {
              if (g >= G)
                return k;
              var K = l[g];
              return k * (K == "desc" ? -1 : 1);
            }
          }
          return i.index - o.index;
        }
        function sc(i, o, l, g) {
          for (var S = -1, M = i.length, A = l.length, G = -1, k = o.length, K = _r(M - A, 0), Z = q(k + K), rt = !g; ++G < k; )
            Z[G] = o[G];
          for (; ++S < A; )
            (rt || S < M) && (Z[l[S]] = i[S]);
          for (; K--; )
            Z[G++] = i[S++];
          return Z;
        }
        function uc(i, o, l, g) {
          for (var S = -1, M = i.length, A = -1, G = l.length, k = -1, K = o.length, Z = _r(M - G, 0), rt = q(Z + K), vt = !g; ++S < Z; )
            rt[S] = i[S];
          for (var _t = S; ++k < K; )
            rt[_t + k] = o[k];
          for (; ++A < G; )
            (vt || S < M) && (rt[_t + l[A]] = i[S++]);
          return rt;
        }
        function Lr(i, o) {
          var l = -1, g = i.length;
          for (o || (o = q(g)); ++l < g; )
            o[l] = i[l];
          return o;
        }
        function Me(i, o, l, g) {
          var S = !l;
          l || (l = {});
          for (var M = -1, A = o.length; ++M < A; ) {
            var G = o[M], k = g ? g(l[G], i[G], G, l, i) : r;
            k === r && (k = i[G]), S ? ze(l, G, k) : Pi(l, G, k);
          }
          return l;
        }
        function d1(i, o) {
          return Me(i, Hs(i), o);
        }
        function h1(i, o) {
          return Me(i, Sc(i), o);
        }
        function Ha(i, o) {
          return function(l, g) {
            var S = At(l) ? yg : F0, M = o ? o() : {};
            return S(l, i, Et(g, 2), M);
          };
        }
        function $n(i) {
          return Lt(function(o, l) {
            var g = -1, S = l.length, M = S > 1 ? l[S - 1] : r, A = S > 2 ? l[2] : r;
            for (M = i.length > 3 && typeof M == "function" ? (S--, M) : r, A && Ir(l[0], l[1], A) && (M = S < 3 ? r : M, S = 1), o = tr(o); ++g < S; ) {
              var G = l[g];
              G && i(o, G, g, M);
            }
            return o;
          });
        }
        function fc(i, o) {
          return function(l, g) {
            if (l == null)
              return l;
            if (!Wr(l))
              return i(l, g);
            for (var S = l.length, M = o ? S : -1, A = tr(l); (o ? M-- : ++M < S) && g(A[M], M, A) !== !1; )
              ;
            return l;
          };
        }
        function lc(i) {
          return function(o, l, g) {
            for (var S = -1, M = tr(o), A = g(o), G = A.length; G--; ) {
              var k = A[i ? G : ++S];
              if (l(M[k], k, M) === !1)
                break;
            }
            return o;
          };
        }
        function g1(i, o, l) {
          var g = o & y, S = Fi(i);
          function M() {
            var A = this && this !== Er && this instanceof M ? S : i;
            return A.apply(g ? l : this, arguments);
          }
          return M;
        }
        function cc(i) {
          return function(o) {
            o = Kt(o);
            var l = Nn(o) ? de(o) : r, g = l ? l[0] : o.charAt(0), S = l ? rn(l, 1).join("") : o.slice(1);
            return g[i]() + S;
          };
        }
        function Vn(i) {
          return function(o) {
            return os(fv(uv(o).replace(og, "")), i, "");
          };
        }
        function Fi(i) {
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
            var l = Un(i.prototype), g = i.apply(l, o);
            return or(g) ? g : l;
          };
        }
        function m1(i, o, l) {
          var g = Fi(i);
          function S() {
            for (var M = arguments.length, A = q(M), G = M, k = Kn(S); G--; )
              A[G] = arguments[G];
            var K = M < 3 && A[0] !== k && A[M - 1] !== k ? [] : Ze(A, k);
            if (M -= K.length, M < l)
              return gc(
                i,
                o,
                Ya,
                S.placeholder,
                r,
                A,
                K,
                r,
                r,
                l - M
              );
            var Z = this && this !== Er && this instanceof S ? g : i;
            return Ur(Z, this, A);
          }
          return S;
        }
        function vc(i) {
          return function(o, l, g) {
            var S = tr(o);
            if (!Wr(o)) {
              var M = Et(l, 3);
              o = Cr(o), l = function(G) {
                return M(S[G], G, S);
              };
            }
            var A = i(o, l, g);
            return A > -1 ? S[M ? o[A] : A] : r;
          };
        }
        function pc(i) {
          return Fe(function(o) {
            var l = o.length, g = l, S = ee.prototype.thru;
            for (i && o.reverse(); g--; ) {
              var M = o[g];
              if (typeof M != "function")
                throw new re(u);
              if (S && !A && $a(M) == "wrapper")
                var A = new ee([], !0);
            }
            for (g = A ? g : l; ++g < l; ) {
              M = o[g];
              var G = $a(M), k = G == "wrapper" ? Ns(M) : r;
              k && Xs(k[0]) && k[1] == (D | R | I | T) && !k[4].length && k[9] == 1 ? A = A[$a(k[0])].apply(A, k[3]) : A = M.length == 1 && Xs(M) ? A[G]() : A.thru(M);
            }
            return function() {
              var K = arguments, Z = K[0];
              if (A && K.length == 1 && At(Z))
                return A.plant(Z).value();
              for (var rt = 0, vt = l ? o[rt].apply(this, K) : Z; ++rt < l; )
                vt = o[rt].call(this, vt);
              return vt;
            };
          });
        }
        function Ya(i, o, l, g, S, M, A, G, k, K) {
          var Z = o & D, rt = o & y, vt = o & b, _t = o & (R | O), Dt = o & P, Ft = vt ? r : Fi(i);
          function Mt() {
            for (var kt = arguments.length, Xt = q(kt), Zr = kt; Zr--; )
              Xt[Zr] = arguments[Zr];
            if (_t)
              var Pr = Kn(Mt), Jr = Tg(Xt, Pr);
            if (g && (Xt = sc(Xt, g, S, _t)), M && (Xt = uc(Xt, M, A, _t)), kt -= Jr, _t && kt < K) {
              var cr = Ze(Xt, Pr);
              return gc(
                i,
                o,
                Ya,
                Mt.placeholder,
                l,
                Xt,
                cr,
                G,
                k,
                K - kt
              );
            }
            var me = rt ? l : this, ke = vt ? me[i] : i;
            return kt = Xt.length, G ? Xt = F1(Xt, G) : Dt && kt > 1 && Xt.reverse(), Z && k < kt && (Xt.length = k), this && this !== Er && this instanceof Mt && (ke = Ft || Fi(ke)), ke.apply(me, Xt);
          }
          return Mt;
        }
        function dc(i, o) {
          return function(l, g) {
            return q0(l, i, o(g), {});
          };
        }
        function Xa(i, o) {
          return function(l, g) {
            var S;
            if (l === r && g === r)
              return o;
            if (l !== r && (S = l), g !== r) {
              if (S === r)
                return g;
              typeof l == "string" || typeof g == "string" ? (l = Vr(l), g = Vr(g)) : (l = jl(l), g = jl(g)), S = i(l, g);
            }
            return S;
          };
        }
        function Gs(i) {
          return Fe(function(o) {
            return o = ar(o, $r(Et())), Lt(function(l) {
              var g = this;
              return i(o, function(S) {
                return Ur(S, g, l);
              });
            });
          });
        }
        function qa(i, o) {
          o = o === r ? " " : Vr(o);
          var l = o.length;
          if (l < 2)
            return l ? Ts(o, i) : o;
          var g = Ts(o, Ia(i / kn(o)));
          return Nn(o) ? rn(de(g), 0, i).join("") : g.slice(0, i);
        }
        function _1(i, o, l, g) {
          var S = o & y, M = Fi(i);
          function A() {
            for (var G = -1, k = arguments.length, K = -1, Z = g.length, rt = q(Z + k), vt = this && this !== Er && this instanceof A ? M : i; ++K < Z; )
              rt[K] = g[K];
            for (; k--; )
              rt[K++] = arguments[++G];
            return Ur(vt, S ? l : this, rt);
          }
          return A;
        }
        function hc(i) {
          return function(o, l, g) {
            return g && typeof g != "number" && Ir(o, l, g) && (l = g = r), o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), g = g === r ? o < l ? 1 : -1 : Ne(g), n1(o, l, g, i);
          };
        }
        function Ua(i) {
          return function(o, l) {
            return typeof o == "string" && typeof l == "string" || (o = oe(o), l = oe(l)), i(o, l);
          };
        }
        function gc(i, o, l, g, S, M, A, G, k, K) {
          var Z = o & R, rt = Z ? A : r, vt = Z ? r : A, _t = Z ? M : r, Dt = Z ? r : M;
          o |= Z ? I : w, o &= ~(Z ? w : I), o & E || (o &= -4);
          var Ft = [
            i,
            o,
            S,
            _t,
            rt,
            Dt,
            vt,
            G,
            k,
            K
          ], Mt = l.apply(r, Ft);
          return Xs(i) && Rc(Mt, Ft), Mt.placeholder = g, Tc(Mt, i, o);
        }
        function Fs(i) {
          var o = mr[i];
          return function(l, g) {
            if (l = oe(l), g = g == null ? 0 : Mr(Gt(g), 292), g && Tl(l)) {
              var S = (Kt(l) + "e").split("e"), M = o(S[0] + "e" + (+S[1] + g));
              return S = (Kt(M) + "e").split("e"), +(S[0] + "e" + (+S[1] - g));
            }
            return o(l);
          };
        }
        var x1 = Xn && 1 / Sa(new Xn([, -0]))[1] == j ? function(i) {
          return new Xn(i);
        } : au;
        function mc(i) {
          return function(o) {
            var l = Rr(o);
            return l == xt ? ps(o) : l == ut ? Gg(o) : Rg(o, i(o));
          };
        }
        function Ge(i, o, l, g, S, M, A, G) {
          var k = o & b;
          if (!k && typeof i != "function")
            throw new re(u);
          var K = g ? g.length : 0;
          if (K || (o &= -97, g = S = r), A = A === r ? A : _r(Gt(A), 0), G = G === r ? G : Gt(G), K -= S ? S.length : 0, o & w) {
            var Z = g, rt = S;
            g = S = r;
          }
          var vt = k ? r : Ns(i), _t = [
            i,
            o,
            l,
            g,
            S,
            Z,
            rt,
            M,
            A,
            G
          ];
          if (vt && B1(_t, vt), i = _t[0], o = _t[1], l = _t[2], g = _t[3], S = _t[4], G = _t[9] = _t[9] === r ? k ? 0 : i.length : _r(_t[9] - K, 0), !G && o & (R | O) && (o &= -25), !o || o == y)
            var Dt = g1(i, o, l);
          else o == R || o == O ? Dt = m1(i, o, G) : (o == I || o == (y | I)) && !S.length ? Dt = _1(i, o, l, g) : Dt = Ya.apply(r, _t);
          var Ft = vt ? Jl : Rc;
          return Tc(Ft(Dt, _t), i, o);
        }
        function _c(i, o, l, g) {
          return i === r || ge(i, Yn[l]) && !Zt.call(g, l) ? o : i;
        }
        function xc(i, o, l, g, S, M) {
          return or(i) && or(o) && (M.set(o, i), Wa(i, o, r, xc, M), M.delete(o)), i;
        }
        function y1(i) {
          return Ni(i) ? r : i;
        }
        function yc(i, o, l, g, S, M) {
          var A = l & _, G = i.length, k = o.length;
          if (G != k && !(A && k > G))
            return !1;
          var K = M.get(i), Z = M.get(o);
          if (K && Z)
            return K == o && Z == i;
          var rt = -1, vt = !0, _t = l & x ? new xn() : r;
          for (M.set(i, o), M.set(o, i); ++rt < G; ) {
            var Dt = i[rt], Ft = o[rt];
            if (g)
              var Mt = A ? g(Ft, Dt, rt, o, i, M) : g(Dt, Ft, rt, i, o, M);
            if (Mt !== r) {
              if (Mt)
                continue;
              vt = !1;
              break;
            }
            if (_t) {
              if (!ss(o, function(kt, Xt) {
                if (!Di(_t, Xt) && (Dt === kt || S(Dt, kt, l, g, M)))
                  return _t.push(Xt);
              })) {
                vt = !1;
                break;
              }
            } else if (!(Dt === Ft || S(Dt, Ft, l, g, M))) {
              vt = !1;
              break;
            }
          }
          return M.delete(i), M.delete(o), vt;
        }
        function S1(i, o, l, g, S, M, A) {
          switch (l) {
            case pe:
              if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
                return !1;
              i = i.buffer, o = o.buffer;
            case gr:
              return !(i.byteLength != o.byteLength || !M(new Ma(i), new Ma(o)));
            case mt:
            case Rt:
            case Ct:
              return ge(+i, +o);
            case at:
              return i.name == o.name && i.message == o.message;
            case tt:
            case wt:
              return i == o + "";
            case xt:
              var G = ps;
            case ut:
              var k = g & _;
              if (G || (G = Sa), i.size != o.size && !k)
                return !1;
              var K = A.get(i);
              if (K)
                return K == o;
              g |= x, A.set(i, o);
              var Z = yc(G(i), G(o), g, S, M, A);
              return A.delete(i), Z;
            case Nt:
              if (Ii)
                return Ii.call(i) == Ii.call(o);
          }
          return !1;
        }
        function b1(i, o, l, g, S, M) {
          var A = l & _, G = Ls(i), k = G.length, K = Ls(o), Z = K.length;
          if (k != Z && !A)
            return !1;
          for (var rt = k; rt--; ) {
            var vt = G[rt];
            if (!(A ? vt in o : Zt.call(o, vt)))
              return !1;
          }
          var _t = M.get(i), Dt = M.get(o);
          if (_t && Dt)
            return _t == o && Dt == i;
          var Ft = !0;
          M.set(i, o), M.set(o, i);
          for (var Mt = A; ++rt < k; ) {
            vt = G[rt];
            var kt = i[vt], Xt = o[vt];
            if (g)
              var Zr = A ? g(Xt, kt, vt, o, i, M) : g(kt, Xt, vt, i, o, M);
            if (!(Zr === r ? kt === Xt || S(kt, Xt, l, g, M) : Zr)) {
              Ft = !1;
              break;
            }
            Mt || (Mt = vt == "constructor");
          }
          if (Ft && !Mt) {
            var Pr = i.constructor, Jr = o.constructor;
            Pr != Jr && "constructor" in i && "constructor" in o && !(typeof Pr == "function" && Pr instanceof Pr && typeof Jr == "function" && Jr instanceof Jr) && (Ft = !1);
          }
          return M.delete(i), M.delete(o), Ft;
        }
        function Fe(i) {
          return Us(Dc(i, r, zc), i + "");
        }
        function Ls(i) {
          return Nl(i, Cr, Hs);
        }
        function Ws(i) {
          return Nl(i, Nr, Sc);
        }
        var Ns = Aa ? function(i) {
          return Aa.get(i);
        } : au;
        function $a(i) {
          for (var o = i.name + "", l = qn[o], g = Zt.call(qn, o) ? l.length : 0; g--; ) {
            var S = l[g], M = S.func;
            if (M == null || M == i)
              return S.name;
          }
          return o;
        }
        function Kn(i) {
          var o = Zt.call(C, "placeholder") ? C : i;
          return o.placeholder;
        }
        function Et() {
          var i = C.iteratee || nu;
          return i = i === nu ? Yl : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function Va(i, o) {
          var l = i.__data__;
          return O1(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
        }
        function ks(i) {
          for (var o = Cr(i), l = o.length; l--; ) {
            var g = o[l], S = i[g];
            o[l] = [g, S, Ec(S)];
          }
          return o;
        }
        function bn(i, o) {
          var l = Ag(i, o);
          return Hl(l) ? l : r;
        }
        function C1(i) {
          var o = Zt.call(i, mn), l = i[mn];
          try {
            i[mn] = r;
            var g = !0;
          } catch {
          }
          var S = wa.call(i);
          return g && (o ? i[mn] = l : delete i[mn]), S;
        }
        var Hs = hs ? function(i) {
          return i == null ? [] : (i = tr(i), Ve(hs(i), function(o) {
            return Ml.call(i, o);
          }));
        } : ou, Sc = hs ? function(i) {
          for (var o = []; i; )
            Ke(o, Hs(i)), i = Ra(i);
          return o;
        } : ou, Rr = Or;
        (gs && Rr(new gs(new ArrayBuffer(1))) != pe || Ri && Rr(new Ri()) != xt || ms && Rr(ms.resolve()) != qt || Xn && Rr(new Xn()) != ut || Ti && Rr(new Ti()) != yt) && (Rr = function(i) {
          var o = Or(i), l = o == zt ? i.constructor : r, g = l ? Cn(l) : "";
          if (g)
            switch (g) {
              case a0:
                return pe;
              case o0:
                return xt;
              case s0:
                return qt;
              case u0:
                return ut;
              case f0:
                return yt;
            }
          return o;
        });
        function E1(i, o, l) {
          for (var g = -1, S = l.length; ++g < S; ) {
            var M = l[g], A = M.size;
            switch (M.type) {
              case "drop":
                i += A;
                break;
              case "dropRight":
                o -= A;
                break;
              case "take":
                o = Mr(o, i + A);
                break;
              case "takeRight":
                i = _r(i, o - A);
                break;
            }
          }
          return { start: i, end: o };
        }
        function w1(i) {
          var o = i.match(Ih);
          return o ? o[1].split(Ph) : [];
        }
        function bc(i, o, l) {
          o = tn(o, i);
          for (var g = -1, S = o.length, M = !1; ++g < S; ) {
            var A = Re(o[g]);
            if (!(M = i != null && l(i, A)))
              break;
            i = i[A];
          }
          return M || ++g != S ? M : (S = i == null ? 0 : i.length, !!S && ro(S) && Le(A, S) && (At(i) || En(i)));
        }
        function D1(i) {
          var o = i.length, l = new i.constructor(o);
          return o && typeof i[0] == "string" && Zt.call(i, "index") && (l.index = i.index, l.input = i.input), l;
        }
        function Cc(i) {
          return typeof i.constructor == "function" && !Li(i) ? Un(Ra(i)) : {};
        }
        function M1(i, o, l) {
          var g = i.constructor;
          switch (o) {
            case gr:
              return zs(i);
            case mt:
            case Rt:
              return new g(+i);
            case pe:
              return l1(i, l);
            case Gn:
            case xi:
            case $e:
            case dn:
            case yi:
            case Fn:
            case hn:
            case Si:
            case bi:
              return ac(i, l);
            case xt:
              return new g();
            case Ct:
            case wt:
              return new g(i);
            case tt:
              return c1(i);
            case ut:
              return new g();
            case Nt:
              return v1(i);
          }
        }
        function R1(i, o) {
          var l = o.length;
          if (!l)
            return i;
          var g = l - 1;
          return o[g] = (l > 1 ? "& " : "") + o[g], o = o.join(l > 2 ? ", " : " "), i.replace(Oh, `{
/* [wrapped with ` + o + `] */
`);
        }
        function T1(i) {
          return At(i) || En(i) || !!(Rl && i && i[Rl]);
        }
        function Le(i, o) {
          var l = typeof i;
          return o = o ?? V, !!o && (l == "number" || l != "symbol" && kh.test(i)) && i > -1 && i % 1 == 0 && i < o;
        }
        function Ir(i, o, l) {
          if (!or(l))
            return !1;
          var g = typeof o;
          return (g == "number" ? Wr(l) && Le(o, l.length) : g == "string" && o in l) ? ge(l[o], i) : !1;
        }
        function Ys(i, o) {
          if (At(i))
            return !1;
          var l = typeof i;
          return l == "number" || l == "symbol" || l == "boolean" || i == null || Kr(i) ? !0 : Dh.test(i) || !wh.test(i) || o != null && i in tr(o);
        }
        function O1(i) {
          var o = typeof i;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
        }
        function Xs(i) {
          var o = $a(i), l = C[o];
          if (typeof l != "function" || !(o in Ht.prototype))
            return !1;
          if (i === l)
            return !0;
          var g = Ns(l);
          return !!g && i === g[0];
        }
        function I1(i) {
          return !!El && El in i;
        }
        var P1 = Ca ? We : su;
        function Li(i) {
          var o = i && i.constructor, l = typeof o == "function" && o.prototype || Yn;
          return i === l;
        }
        function Ec(i) {
          return i === i && !or(i);
        }
        function wc(i, o) {
          return function(l) {
            return l == null ? !1 : l[i] === o && (o !== r || i in tr(l));
          };
        }
        function A1(i) {
          var o = ja(i, function(g) {
            return l.size === v && l.clear(), g;
          }), l = o.cache;
          return o;
        }
        function B1(i, o) {
          var l = i[1], g = o[1], S = l | g, M = S < (y | b | D), A = g == D && l == R || g == D && l == T && i[7].length <= o[8] || g == (D | T) && o[7].length <= o[8] && l == R;
          if (!(M || A))
            return i;
          g & y && (i[2] = o[2], S |= l & y ? 0 : E);
          var G = o[3];
          if (G) {
            var k = i[3];
            i[3] = k ? sc(k, G, o[4]) : G, i[4] = k ? Ze(i[3], p) : o[4];
          }
          return G = o[5], G && (k = i[5], i[5] = k ? uc(k, G, o[6]) : G, i[6] = k ? Ze(i[5], p) : o[6]), G = o[7], G && (i[7] = G), g & D && (i[8] = i[8] == null ? o[8] : Mr(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = S, i;
        }
        function z1(i) {
          var o = [];
          if (i != null)
            for (var l in tr(i))
              o.push(l);
          return o;
        }
        function G1(i) {
          return wa.call(i);
        }
        function Dc(i, o, l) {
          return o = _r(o === r ? i.length - 1 : o, 0), function() {
            for (var g = arguments, S = -1, M = _r(g.length - o, 0), A = q(M); ++S < M; )
              A[S] = g[o + S];
            S = -1;
            for (var G = q(o + 1); ++S < o; )
              G[S] = g[S];
            return G[o] = l(A), Ur(i, this, G);
          };
        }
        function Mc(i, o) {
          return o.length < 2 ? i : Sn(i, ie(o, 0, -1));
        }
        function F1(i, o) {
          for (var l = i.length, g = Mr(o.length, l), S = Lr(i); g--; ) {
            var M = o[g];
            i[g] = Le(M, l) ? S[M] : r;
          }
          return i;
        }
        function qs(i, o) {
          if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
            return i[o];
        }
        var Rc = Oc(Jl), Wi = Qg || function(i, o) {
          return Er.setTimeout(i, o);
        }, Us = Oc(o1);
        function Tc(i, o, l) {
          var g = o + "";
          return Us(i, R1(g, L1(w1(g), l)));
        }
        function Oc(i) {
          var o = 0, l = 0;
          return function() {
            var g = e0(), S = L - (g - l);
            if (l = g, S > 0) {
              if (++o >= N)
                return arguments[0];
            } else
              o = 0;
            return i.apply(r, arguments);
          };
        }
        function Ka(i, o) {
          var l = -1, g = i.length, S = g - 1;
          for (o = o === r ? g : o; ++l < o; ) {
            var M = Rs(l, S), A = i[M];
            i[M] = i[l], i[l] = A;
          }
          return i.length = o, i;
        }
        var Ic = A1(function(i) {
          var o = [];
          return i.charCodeAt(0) === 46 && o.push(""), i.replace(Mh, function(l, g, S, M) {
            o.push(S ? M.replace(zh, "$1") : g || l);
          }), o;
        });
        function Re(i) {
          if (typeof i == "string" || Kr(i))
            return i;
          var o = i + "";
          return o == "0" && 1 / i == -j ? "-0" : o;
        }
        function Cn(i) {
          if (i != null) {
            try {
              return Ea.call(i);
            } catch {
            }
            try {
              return i + "";
            } catch {
            }
          }
          return "";
        }
        function L1(i, o) {
          return te(st, function(l) {
            var g = "_." + l[0];
            o & l[1] && !xa(i, g) && i.push(g);
          }), i.sort();
        }
        function Pc(i) {
          if (i instanceof Ht)
            return i.clone();
          var o = new ee(i.__wrapped__, i.__chain__);
          return o.__actions__ = Lr(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
        }
        function W1(i, o, l) {
          (l ? Ir(i, o, l) : o === r) ? o = 1 : o = _r(Gt(o), 0);
          var g = i == null ? 0 : i.length;
          if (!g || o < 1)
            return [];
          for (var S = 0, M = 0, A = q(Ia(g / o)); S < g; )
            A[M++] = ie(i, S, S += o);
          return A;
        }
        function N1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = 0, S = []; ++o < l; ) {
            var M = i[o];
            M && (S[g++] = M);
          }
          return S;
        }
        function k1() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var o = q(i - 1), l = arguments[0], g = i; g--; )
            o[g - 1] = arguments[g];
          return Ke(At(l) ? Lr(l) : [l], wr(o, 1));
        }
        var H1 = Lt(function(i, o) {
          return lr(i) ? Ai(i, wr(o, 1, lr, !0)) : [];
        }), Y1 = Lt(function(i, o) {
          var l = ae(o);
          return lr(l) && (l = r), lr(i) ? Ai(i, wr(o, 1, lr, !0), Et(l, 2)) : [];
        }), X1 = Lt(function(i, o) {
          var l = ae(o);
          return lr(l) && (l = r), lr(i) ? Ai(i, wr(o, 1, lr, !0), r, l) : [];
        });
        function q1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), ie(i, o < 0 ? 0 : o, g)) : [];
        }
        function U1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), o = g - o, ie(i, 0, o < 0 ? 0 : o)) : [];
        }
        function $1(i, o) {
          return i && i.length ? ka(i, Et(o, 3), !0, !0) : [];
        }
        function V1(i, o) {
          return i && i.length ? ka(i, Et(o, 3), !0) : [];
        }
        function K1(i, o, l, g) {
          var S = i == null ? 0 : i.length;
          return S ? (l && typeof l != "number" && Ir(i, o, l) && (l = 0, g = S), k0(i, o, l, g)) : [];
        }
        function Ac(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : Gt(l);
          return S < 0 && (S = _r(g + S, 0)), ya(i, Et(o, 3), S);
        }
        function Bc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g - 1;
          return l !== r && (S = Gt(l), S = l < 0 ? _r(g + S, 0) : Mr(S, g - 1)), ya(i, Et(o, 3), S, !0);
        }
        function zc(i) {
          var o = i == null ? 0 : i.length;
          return o ? wr(i, 1) : [];
        }
        function Z1(i) {
          var o = i == null ? 0 : i.length;
          return o ? wr(i, j) : [];
        }
        function J1(i, o) {
          var l = i == null ? 0 : i.length;
          return l ? (o = o === r ? 1 : Gt(o), wr(i, o)) : [];
        }
        function Q1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = {}; ++o < l; ) {
            var S = i[o];
            g[S[0]] = S[1];
          }
          return g;
        }
        function Gc(i) {
          return i && i.length ? i[0] : r;
        }
        function j1(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : Gt(l);
          return S < 0 && (S = _r(g + S, 0)), Wn(i, o, S);
        }
        function tm(i) {
          var o = i == null ? 0 : i.length;
          return o ? ie(i, 0, -1) : [];
        }
        var rm = Lt(function(i) {
          var o = ar(i, As);
          return o.length && o[0] === i[0] ? Cs(o) : [];
        }), em = Lt(function(i) {
          var o = ae(i), l = ar(i, As);
          return o === ae(l) ? o = r : l.pop(), l.length && l[0] === i[0] ? Cs(l, Et(o, 2)) : [];
        }), nm = Lt(function(i) {
          var o = ae(i), l = ar(i, As);
          return o = typeof o == "function" ? o : r, o && l.pop(), l.length && l[0] === i[0] ? Cs(l, r, o) : [];
        });
        function im(i, o) {
          return i == null ? "" : t0.call(i, o);
        }
        function ae(i) {
          var o = i == null ? 0 : i.length;
          return o ? i[o - 1] : r;
        }
        function am(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g;
          return l !== r && (S = Gt(l), S = S < 0 ? _r(g + S, 0) : Mr(S, g - 1)), o === o ? Lg(i, o, S) : ya(i, gl, S, !0);
        }
        function om(i, o) {
          return i && i.length ? $l(i, Gt(o)) : r;
        }
        var sm = Lt(Fc);
        function Fc(i, o) {
          return i && i.length && o && o.length ? Ms(i, o) : i;
        }
        function um(i, o, l) {
          return i && i.length && o && o.length ? Ms(i, o, Et(l, 2)) : i;
        }
        function fm(i, o, l) {
          return i && i.length && o && o.length ? Ms(i, o, r, l) : i;
        }
        var lm = Fe(function(i, o) {
          var l = i == null ? 0 : i.length, g = xs(i, o);
          return Zl(i, ar(o, function(S) {
            return Le(S, l) ? +S : S;
          }).sort(oc)), g;
        });
        function cm(i, o) {
          var l = [];
          if (!(i && i.length))
            return l;
          var g = -1, S = [], M = i.length;
          for (o = Et(o, 3); ++g < M; ) {
            var A = i[g];
            o(A, g, i) && (l.push(A), S.push(g));
          }
          return Zl(i, S), l;
        }
        function $s(i) {
          return i == null ? i : i0.call(i);
        }
        function vm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (l && typeof l != "number" && Ir(i, o, l) ? (o = 0, l = g) : (o = o == null ? 0 : Gt(o), l = l === r ? g : Gt(l)), ie(i, o, l)) : [];
        }
        function pm(i, o) {
          return Na(i, o);
        }
        function dm(i, o, l) {
          return Os(i, o, Et(l, 2));
        }
        function hm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Na(i, o);
            if (g < l && ge(i[g], o))
              return g;
          }
          return -1;
        }
        function gm(i, o) {
          return Na(i, o, !0);
        }
        function mm(i, o, l) {
          return Os(i, o, Et(l, 2), !0);
        }
        function _m(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Na(i, o, !0) - 1;
            if (ge(i[g], o))
              return g;
          }
          return -1;
        }
        function xm(i) {
          return i && i.length ? Ql(i) : [];
        }
        function ym(i, o) {
          return i && i.length ? Ql(i, Et(o, 2)) : [];
        }
        function Sm(i) {
          var o = i == null ? 0 : i.length;
          return o ? ie(i, 1, o) : [];
        }
        function bm(i, o, l) {
          return i && i.length ? (o = l || o === r ? 1 : Gt(o), ie(i, 0, o < 0 ? 0 : o)) : [];
        }
        function Cm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), o = g - o, ie(i, o < 0 ? 0 : o, g)) : [];
        }
        function Em(i, o) {
          return i && i.length ? ka(i, Et(o, 3), !1, !0) : [];
        }
        function wm(i, o) {
          return i && i.length ? ka(i, Et(o, 3)) : [];
        }
        var Dm = Lt(function(i) {
          return je(wr(i, 1, lr, !0));
        }), Mm = Lt(function(i) {
          var o = ae(i);
          return lr(o) && (o = r), je(wr(i, 1, lr, !0), Et(o, 2));
        }), Rm = Lt(function(i) {
          var o = ae(i);
          return o = typeof o == "function" ? o : r, je(wr(i, 1, lr, !0), r, o);
        });
        function Tm(i) {
          return i && i.length ? je(i) : [];
        }
        function Om(i, o) {
          return i && i.length ? je(i, Et(o, 2)) : [];
        }
        function Im(i, o) {
          return o = typeof o == "function" ? o : r, i && i.length ? je(i, r, o) : [];
        }
        function Vs(i) {
          if (!(i && i.length))
            return [];
          var o = 0;
          return i = Ve(i, function(l) {
            if (lr(l))
              return o = _r(l.length, o), !0;
          }), cs(o, function(l) {
            return ar(i, us(l));
          });
        }
        function Lc(i, o) {
          if (!(i && i.length))
            return [];
          var l = Vs(i);
          return o == null ? l : ar(l, function(g) {
            return Ur(o, r, g);
          });
        }
        var Pm = Lt(function(i, o) {
          return lr(i) ? Ai(i, o) : [];
        }), Am = Lt(function(i) {
          return Ps(Ve(i, lr));
        }), Bm = Lt(function(i) {
          var o = ae(i);
          return lr(o) && (o = r), Ps(Ve(i, lr), Et(o, 2));
        }), zm = Lt(function(i) {
          var o = ae(i);
          return o = typeof o == "function" ? o : r, Ps(Ve(i, lr), r, o);
        }), Gm = Lt(Vs);
        function Fm(i, o) {
          return ec(i || [], o || [], Pi);
        }
        function Lm(i, o) {
          return ec(i || [], o || [], Gi);
        }
        var Wm = Lt(function(i) {
          var o = i.length, l = o > 1 ? i[o - 1] : r;
          return l = typeof l == "function" ? (i.pop(), l) : r, Lc(i, l);
        });
        function Wc(i) {
          var o = C(i);
          return o.__chain__ = !0, o;
        }
        function Nm(i, o) {
          return o(i), i;
        }
        function Za(i, o) {
          return o(i);
        }
        var km = Fe(function(i) {
          var o = i.length, l = o ? i[0] : 0, g = this.__wrapped__, S = function(M) {
            return xs(M, i);
          };
          return o > 1 || this.__actions__.length || !(g instanceof Ht) || !Le(l) ? this.thru(S) : (g = g.slice(l, +l + (o ? 1 : 0)), g.__actions__.push({
            func: Za,
            args: [S],
            thisArg: r
          }), new ee(g, this.__chain__).thru(function(M) {
            return o && !M.length && M.push(r), M;
          }));
        });
        function Hm() {
          return Wc(this);
        }
        function Ym() {
          return new ee(this.value(), this.__chain__);
        }
        function Xm() {
          this.__values__ === r && (this.__values__ = jc(this.value()));
          var i = this.__index__ >= this.__values__.length, o = i ? r : this.__values__[this.__index__++];
          return { done: i, value: o };
        }
        function qm() {
          return this;
        }
        function Um(i) {
          for (var o, l = this; l instanceof za; ) {
            var g = Pc(l);
            g.__index__ = 0, g.__values__ = r, o ? S.__wrapped__ = g : o = g;
            var S = g;
            l = l.__wrapped__;
          }
          return S.__wrapped__ = i, o;
        }
        function $m() {
          var i = this.__wrapped__;
          if (i instanceof Ht) {
            var o = i;
            return this.__actions__.length && (o = new Ht(this)), o = o.reverse(), o.__actions__.push({
              func: Za,
              args: [$s],
              thisArg: r
            }), new ee(o, this.__chain__);
          }
          return this.thru($s);
        }
        function Vm() {
          return rc(this.__wrapped__, this.__actions__);
        }
        var Km = Ha(function(i, o, l) {
          Zt.call(i, l) ? ++i[l] : ze(i, l, 1);
        });
        function Zm(i, o, l) {
          var g = At(i) ? dl : N0;
          return l && Ir(i, o, l) && (o = r), g(i, Et(o, 3));
        }
        function Jm(i, o) {
          var l = At(i) ? Ve : Ll;
          return l(i, Et(o, 3));
        }
        var Qm = vc(Ac), jm = vc(Bc);
        function t_(i, o) {
          return wr(Ja(i, o), 1);
        }
        function r_(i, o) {
          return wr(Ja(i, o), j);
        }
        function e_(i, o, l) {
          return l = l === r ? 1 : Gt(l), wr(Ja(i, o), l);
        }
        function Nc(i, o) {
          var l = At(i) ? te : Qe;
          return l(i, Et(o, 3));
        }
        function kc(i, o) {
          var l = At(i) ? Sg : Fl;
          return l(i, Et(o, 3));
        }
        var n_ = Ha(function(i, o, l) {
          Zt.call(i, l) ? i[l].push(o) : ze(i, l, [o]);
        });
        function i_(i, o, l, g) {
          i = Wr(i) ? i : Jn(i), l = l && !g ? Gt(l) : 0;
          var S = i.length;
          return l < 0 && (l = _r(S + l, 0)), eo(i) ? l <= S && i.indexOf(o, l) > -1 : !!S && Wn(i, o, l) > -1;
        }
        var a_ = Lt(function(i, o, l) {
          var g = -1, S = typeof o == "function", M = Wr(i) ? q(i.length) : [];
          return Qe(i, function(A) {
            M[++g] = S ? Ur(o, A, l) : Bi(A, o, l);
          }), M;
        }), o_ = Ha(function(i, o, l) {
          ze(i, l, o);
        });
        function Ja(i, o) {
          var l = At(i) ? ar : Xl;
          return l(i, Et(o, 3));
        }
        function s_(i, o, l, g) {
          return i == null ? [] : (At(o) || (o = o == null ? [] : [o]), l = g ? r : l, At(l) || (l = l == null ? [] : [l]), Vl(i, o, l));
        }
        var u_ = Ha(function(i, o, l) {
          i[l ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function f_(i, o, l) {
          var g = At(i) ? os : _l, S = arguments.length < 3;
          return g(i, Et(o, 4), l, S, Qe);
        }
        function l_(i, o, l) {
          var g = At(i) ? bg : _l, S = arguments.length < 3;
          return g(i, Et(o, 4), l, S, Fl);
        }
        function c_(i, o) {
          var l = At(i) ? Ve : Ll;
          return l(i, to(Et(o, 3)));
        }
        function v_(i) {
          var o = At(i) ? Al : i1;
          return o(i);
        }
        function p_(i, o, l) {
          (l ? Ir(i, o, l) : o === r) ? o = 1 : o = Gt(o);
          var g = At(i) ? z0 : a1;
          return g(i, o);
        }
        function d_(i) {
          var o = At(i) ? G0 : s1;
          return o(i);
        }
        function h_(i) {
          if (i == null)
            return 0;
          if (Wr(i))
            return eo(i) ? kn(i) : i.length;
          var o = Rr(i);
          return o == xt || o == ut ? i.size : ws(i).length;
        }
        function g_(i, o, l) {
          var g = At(i) ? ss : u1;
          return l && Ir(i, o, l) && (o = r), g(i, Et(o, 3));
        }
        var m_ = Lt(function(i, o) {
          if (i == null)
            return [];
          var l = o.length;
          return l > 1 && Ir(i, o[0], o[1]) ? o = [] : l > 2 && Ir(o[0], o[1], o[2]) && (o = [o[0]]), Vl(i, wr(o, 1), []);
        }), Qa = Jg || function() {
          return Er.Date.now();
        };
        function __(i, o) {
          if (typeof o != "function")
            throw new re(u);
          return i = Gt(i), function() {
            if (--i < 1)
              return o.apply(this, arguments);
          };
        }
        function Hc(i, o, l) {
          return o = l ? r : o, o = i && o == null ? i.length : o, Ge(i, D, r, r, r, r, o);
        }
        function Yc(i, o) {
          var l;
          if (typeof o != "function")
            throw new re(u);
          return i = Gt(i), function() {
            return --i > 0 && (l = o.apply(this, arguments)), i <= 1 && (o = r), l;
          };
        }
        var Ks = Lt(function(i, o, l) {
          var g = y;
          if (l.length) {
            var S = Ze(l, Kn(Ks));
            g |= I;
          }
          return Ge(i, g, o, l, S);
        }), Xc = Lt(function(i, o, l) {
          var g = y | b;
          if (l.length) {
            var S = Ze(l, Kn(Xc));
            g |= I;
          }
          return Ge(o, g, i, l, S);
        });
        function qc(i, o, l) {
          o = l ? r : o;
          var g = Ge(i, R, r, r, r, r, r, o);
          return g.placeholder = qc.placeholder, g;
        }
        function Uc(i, o, l) {
          o = l ? r : o;
          var g = Ge(i, O, r, r, r, r, r, o);
          return g.placeholder = Uc.placeholder, g;
        }
        function $c(i, o, l) {
          var g, S, M, A, G, k, K = 0, Z = !1, rt = !1, vt = !0;
          if (typeof i != "function")
            throw new re(u);
          o = oe(o) || 0, or(l) && (Z = !!l.leading, rt = "maxWait" in l, M = rt ? _r(oe(l.maxWait) || 0, o) : M, vt = "trailing" in l ? !!l.trailing : vt);
          function _t(cr) {
            var me = g, ke = S;
            return g = S = r, K = cr, A = i.apply(ke, me), A;
          }
          function Dt(cr) {
            return K = cr, G = Wi(kt, o), Z ? _t(cr) : A;
          }
          function Ft(cr) {
            var me = cr - k, ke = cr - K, vv = o - me;
            return rt ? Mr(vv, M - ke) : vv;
          }
          function Mt(cr) {
            var me = cr - k, ke = cr - K;
            return k === r || me >= o || me < 0 || rt && ke >= M;
          }
          function kt() {
            var cr = Qa();
            if (Mt(cr))
              return Xt(cr);
            G = Wi(kt, Ft(cr));
          }
          function Xt(cr) {
            return G = r, vt && g ? _t(cr) : (g = S = r, A);
          }
          function Zr() {
            G !== r && nc(G), K = 0, g = k = S = G = r;
          }
          function Pr() {
            return G === r ? A : Xt(Qa());
          }
          function Jr() {
            var cr = Qa(), me = Mt(cr);
            if (g = arguments, S = this, k = cr, me) {
              if (G === r)
                return Dt(k);
              if (rt)
                return nc(G), G = Wi(kt, o), _t(k);
            }
            return G === r && (G = Wi(kt, o)), A;
          }
          return Jr.cancel = Zr, Jr.flush = Pr, Jr;
        }
        var x_ = Lt(function(i, o) {
          return Gl(i, 1, o);
        }), y_ = Lt(function(i, o, l) {
          return Gl(i, oe(o) || 0, l);
        });
        function S_(i) {
          return Ge(i, P);
        }
        function ja(i, o) {
          if (typeof i != "function" || o != null && typeof o != "function")
            throw new re(u);
          var l = function() {
            var g = arguments, S = o ? o.apply(this, g) : g[0], M = l.cache;
            if (M.has(S))
              return M.get(S);
            var A = i.apply(this, g);
            return l.cache = M.set(S, A) || M, A;
          };
          return l.cache = new (ja.Cache || Be)(), l;
        }
        ja.Cache = Be;
        function to(i) {
          if (typeof i != "function")
            throw new re(u);
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
        function b_(i) {
          return Yc(2, i);
        }
        var C_ = f1(function(i, o) {
          o = o.length == 1 && At(o[0]) ? ar(o[0], $r(Et())) : ar(wr(o, 1), $r(Et()));
          var l = o.length;
          return Lt(function(g) {
            for (var S = -1, M = Mr(g.length, l); ++S < M; )
              g[S] = o[S].call(this, g[S]);
            return Ur(i, this, g);
          });
        }), Zs = Lt(function(i, o) {
          var l = Ze(o, Kn(Zs));
          return Ge(i, I, r, o, l);
        }), Vc = Lt(function(i, o) {
          var l = Ze(o, Kn(Vc));
          return Ge(i, w, r, o, l);
        }), E_ = Fe(function(i, o) {
          return Ge(i, T, r, r, r, o);
        });
        function w_(i, o) {
          if (typeof i != "function")
            throw new re(u);
          return o = o === r ? o : Gt(o), Lt(i, o);
        }
        function D_(i, o) {
          if (typeof i != "function")
            throw new re(u);
          return o = o == null ? 0 : _r(Gt(o), 0), Lt(function(l) {
            var g = l[o], S = rn(l, 0, o);
            return g && Ke(S, g), Ur(i, this, S);
          });
        }
        function M_(i, o, l) {
          var g = !0, S = !0;
          if (typeof i != "function")
            throw new re(u);
          return or(l) && (g = "leading" in l ? !!l.leading : g, S = "trailing" in l ? !!l.trailing : S), $c(i, o, {
            leading: g,
            maxWait: o,
            trailing: S
          });
        }
        function R_(i) {
          return Hc(i, 1);
        }
        function T_(i, o) {
          return Zs(Bs(o), i);
        }
        function O_() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return At(i) ? i : [i];
        }
        function I_(i) {
          return ne(i, m);
        }
        function P_(i, o) {
          return o = typeof o == "function" ? o : r, ne(i, m, o);
        }
        function A_(i) {
          return ne(i, h | m);
        }
        function B_(i, o) {
          return o = typeof o == "function" ? o : r, ne(i, h | m, o);
        }
        function z_(i, o) {
          return o == null || zl(i, o, Cr(o));
        }
        function ge(i, o) {
          return i === o || i !== i && o !== o;
        }
        var G_ = Ua(bs), F_ = Ua(function(i, o) {
          return i >= o;
        }), En = kl(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? kl : function(i) {
          return ur(i) && Zt.call(i, "callee") && !Ml.call(i, "callee");
        }, At = q.isArray, L_ = ul ? $r(ul) : U0;
        function Wr(i) {
          return i != null && ro(i.length) && !We(i);
        }
        function lr(i) {
          return ur(i) && Wr(i);
        }
        function W_(i) {
          return i === !0 || i === !1 || ur(i) && Or(i) == mt;
        }
        var en = jg || su, N_ = fl ? $r(fl) : $0;
        function k_(i) {
          return ur(i) && i.nodeType === 1 && !Ni(i);
        }
        function H_(i) {
          if (i == null)
            return !0;
          if (Wr(i) && (At(i) || typeof i == "string" || typeof i.splice == "function" || en(i) || Zn(i) || En(i)))
            return !i.length;
          var o = Rr(i);
          if (o == xt || o == ut)
            return !i.size;
          if (Li(i))
            return !ws(i).length;
          for (var l in i)
            if (Zt.call(i, l))
              return !1;
          return !0;
        }
        function Y_(i, o) {
          return zi(i, o);
        }
        function X_(i, o, l) {
          l = typeof l == "function" ? l : r;
          var g = l ? l(i, o) : r;
          return g === r ? zi(i, o, r, l) : !!g;
        }
        function Js(i) {
          if (!ur(i))
            return !1;
          var o = Or(i);
          return o == at || o == Wt || typeof i.message == "string" && typeof i.name == "string" && !Ni(i);
        }
        function q_(i) {
          return typeof i == "number" && Tl(i);
        }
        function We(i) {
          if (!or(i))
            return !1;
          var o = Or(i);
          return o == gt || o == Yt || o == ct || o == Pt;
        }
        function Kc(i) {
          return typeof i == "number" && i == Gt(i);
        }
        function ro(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= V;
        }
        function or(i) {
          var o = typeof i;
          return i != null && (o == "object" || o == "function");
        }
        function ur(i) {
          return i != null && typeof i == "object";
        }
        var Zc = ll ? $r(ll) : K0;
        function U_(i, o) {
          return i === o || Es(i, o, ks(o));
        }
        function $_(i, o, l) {
          return l = typeof l == "function" ? l : r, Es(i, o, ks(o), l);
        }
        function V_(i) {
          return Jc(i) && i != +i;
        }
        function K_(i) {
          if (P1(i))
            throw new Ot(s);
          return Hl(i);
        }
        function Z_(i) {
          return i === null;
        }
        function J_(i) {
          return i == null;
        }
        function Jc(i) {
          return typeof i == "number" || ur(i) && Or(i) == Ct;
        }
        function Ni(i) {
          if (!ur(i) || Or(i) != zt)
            return !1;
          var o = Ra(i);
          if (o === null)
            return !0;
          var l = Zt.call(o, "constructor") && o.constructor;
          return typeof l == "function" && l instanceof l && Ea.call(l) == $g;
        }
        var Qs = cl ? $r(cl) : Z0;
        function Q_(i) {
          return Kc(i) && i >= -V && i <= V;
        }
        var Qc = vl ? $r(vl) : J0;
        function eo(i) {
          return typeof i == "string" || !At(i) && ur(i) && Or(i) == wt;
        }
        function Kr(i) {
          return typeof i == "symbol" || ur(i) && Or(i) == Nt;
        }
        var Zn = pl ? $r(pl) : Q0;
        function j_(i) {
          return i === r;
        }
        function tx(i) {
          return ur(i) && Rr(i) == yt;
        }
        function rx(i) {
          return ur(i) && Or(i) == ir;
        }
        var ex = Ua(Ds), nx = Ua(function(i, o) {
          return i <= o;
        });
        function jc(i) {
          if (!i)
            return [];
          if (Wr(i))
            return eo(i) ? de(i) : Lr(i);
          if (Mi && i[Mi])
            return zg(i[Mi]());
          var o = Rr(i), l = o == xt ? ps : o == ut ? Sa : Jn;
          return l(i);
        }
        function Ne(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = oe(i), i === j || i === -j) {
            var o = i < 0 ? -1 : 1;
            return o * nt;
          }
          return i === i ? i : 0;
        }
        function Gt(i) {
          var o = Ne(i), l = o % 1;
          return o === o ? l ? o - l : o : 0;
        }
        function tv(i) {
          return i ? yn(Gt(i), 0, U) : 0;
        }
        function oe(i) {
          if (typeof i == "number")
            return i;
          if (Kr(i))
            return et;
          if (or(i)) {
            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = or(o) ? o + "" : o;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = xl(i);
          var l = Lh.test(i);
          return l || Nh.test(i) ? _g(i.slice(2), l ? 2 : 8) : Fh.test(i) ? et : +i;
        }
        function rv(i) {
          return Me(i, Nr(i));
        }
        function ix(i) {
          return i ? yn(Gt(i), -V, V) : i === 0 ? i : 0;
        }
        function Kt(i) {
          return i == null ? "" : Vr(i);
        }
        var ax = $n(function(i, o) {
          if (Li(o) || Wr(o)) {
            Me(o, Cr(o), i);
            return;
          }
          for (var l in o)
            Zt.call(o, l) && Pi(i, l, o[l]);
        }), ev = $n(function(i, o) {
          Me(o, Nr(o), i);
        }), no = $n(function(i, o, l, g) {
          Me(o, Nr(o), i, g);
        }), ox = $n(function(i, o, l, g) {
          Me(o, Cr(o), i, g);
        }), sx = Fe(xs);
        function ux(i, o) {
          var l = Un(i);
          return o == null ? l : Bl(l, o);
        }
        var fx = Lt(function(i, o) {
          i = tr(i);
          var l = -1, g = o.length, S = g > 2 ? o[2] : r;
          for (S && Ir(o[0], o[1], S) && (g = 1); ++l < g; )
            for (var M = o[l], A = Nr(M), G = -1, k = A.length; ++G < k; ) {
              var K = A[G], Z = i[K];
              (Z === r || ge(Z, Yn[K]) && !Zt.call(i, K)) && (i[K] = M[K]);
            }
          return i;
        }), lx = Lt(function(i) {
          return i.push(r, xc), Ur(nv, r, i);
        });
        function cx(i, o) {
          return hl(i, Et(o, 3), De);
        }
        function vx(i, o) {
          return hl(i, Et(o, 3), Ss);
        }
        function px(i, o) {
          return i == null ? i : ys(i, Et(o, 3), Nr);
        }
        function dx(i, o) {
          return i == null ? i : Wl(i, Et(o, 3), Nr);
        }
        function hx(i, o) {
          return i && De(i, Et(o, 3));
        }
        function gx(i, o) {
          return i && Ss(i, Et(o, 3));
        }
        function mx(i) {
          return i == null ? [] : La(i, Cr(i));
        }
        function _x(i) {
          return i == null ? [] : La(i, Nr(i));
        }
        function js(i, o, l) {
          var g = i == null ? r : Sn(i, o);
          return g === r ? l : g;
        }
        function xx(i, o) {
          return i != null && bc(i, o, H0);
        }
        function tu(i, o) {
          return i != null && bc(i, o, Y0);
        }
        var yx = dc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = wa.call(o)), i[o] = l;
        }, eu(kr)), Sx = dc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = wa.call(o)), Zt.call(i, o) ? i[o].push(l) : i[o] = [l];
        }, Et), bx = Lt(Bi);
        function Cr(i) {
          return Wr(i) ? Pl(i) : ws(i);
        }
        function Nr(i) {
          return Wr(i) ? Pl(i, !0) : j0(i);
        }
        function Cx(i, o) {
          var l = {};
          return o = Et(o, 3), De(i, function(g, S, M) {
            ze(l, o(g, S, M), g);
          }), l;
        }
        function Ex(i, o) {
          var l = {};
          return o = Et(o, 3), De(i, function(g, S, M) {
            ze(l, S, o(g, S, M));
          }), l;
        }
        var wx = $n(function(i, o, l) {
          Wa(i, o, l);
        }), nv = $n(function(i, o, l, g) {
          Wa(i, o, l, g);
        }), Dx = Fe(function(i, o) {
          var l = {};
          if (i == null)
            return l;
          var g = !1;
          o = ar(o, function(M) {
            return M = tn(M, i), g || (g = M.length > 1), M;
          }), Me(i, Ws(i), l), g && (l = ne(l, h | d | m, y1));
          for (var S = o.length; S--; )
            Is(l, o[S]);
          return l;
        });
        function Mx(i, o) {
          return iv(i, to(Et(o)));
        }
        var Rx = Fe(function(i, o) {
          return i == null ? {} : r1(i, o);
        });
        function iv(i, o) {
          if (i == null)
            return {};
          var l = ar(Ws(i), function(g) {
            return [g];
          });
          return o = Et(o), Kl(i, l, function(g, S) {
            return o(g, S[0]);
          });
        }
        function Tx(i, o, l) {
          o = tn(o, i);
          var g = -1, S = o.length;
          for (S || (S = 1, i = r); ++g < S; ) {
            var M = i == null ? r : i[Re(o[g])];
            M === r && (g = S, M = l), i = We(M) ? M.call(i) : M;
          }
          return i;
        }
        function Ox(i, o, l) {
          return i == null ? i : Gi(i, o, l);
        }
        function Ix(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Gi(i, o, l, g);
        }
        var av = mc(Cr), ov = mc(Nr);
        function Px(i, o, l) {
          var g = At(i), S = g || en(i) || Zn(i);
          if (o = Et(o, 4), l == null) {
            var M = i && i.constructor;
            S ? l = g ? new M() : [] : or(i) ? l = We(M) ? Un(Ra(i)) : {} : l = {};
          }
          return (S ? te : De)(i, function(A, G, k) {
            return o(l, A, G, k);
          }), l;
        }
        function Ax(i, o) {
          return i == null ? !0 : Is(i, o);
        }
        function Bx(i, o, l) {
          return i == null ? i : tc(i, o, Bs(l));
        }
        function zx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : tc(i, o, Bs(l), g);
        }
        function Jn(i) {
          return i == null ? [] : vs(i, Cr(i));
        }
        function Gx(i) {
          return i == null ? [] : vs(i, Nr(i));
        }
        function Fx(i, o, l) {
          return l === r && (l = o, o = r), l !== r && (l = oe(l), l = l === l ? l : 0), o !== r && (o = oe(o), o = o === o ? o : 0), yn(oe(i), o, l);
        }
        function Lx(i, o, l) {
          return o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), i = oe(i), X0(i, o, l);
        }
        function Wx(i, o, l) {
          if (l && typeof l != "boolean" && Ir(i, o, l) && (o = l = r), l === r && (typeof o == "boolean" ? (l = o, o = r) : typeof i == "boolean" && (l = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Ne(i), o === r ? (o = i, i = 0) : o = Ne(o)), i > o) {
            var g = i;
            i = o, o = g;
          }
          if (l || i % 1 || o % 1) {
            var S = Ol();
            return Mr(i + S * (o - i + mg("1e-" + ((S + "").length - 1))), o);
          }
          return Rs(i, o);
        }
        var Nx = Vn(function(i, o, l) {
          return o = o.toLowerCase(), i + (l ? sv(o) : o);
        });
        function sv(i) {
          return ru(Kt(i).toLowerCase());
        }
        function uv(i) {
          return i = Kt(i), i && i.replace(Hh, Og).replace(sg, "");
        }
        function kx(i, o, l) {
          i = Kt(i), o = Vr(o);
          var g = i.length;
          l = l === r ? g : yn(Gt(l), 0, g);
          var S = l;
          return l -= o.length, l >= 0 && i.slice(l, S) == o;
        }
        function Hx(i) {
          return i = Kt(i), i && Ko.test(i) ? i.replace(Ei, Ig) : i;
        }
        function Yx(i) {
          return i = Kt(i), i && Rh.test(i) ? i.replace(Zo, "\\$&") : i;
        }
        var Xx = Vn(function(i, o, l) {
          return i + (l ? "-" : "") + o.toLowerCase();
        }), qx = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toLowerCase();
        }), Ux = cc("toLowerCase");
        function $x(i, o, l) {
          i = Kt(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          if (!o || g >= o)
            return i;
          var S = (o - g) / 2;
          return qa(Pa(S), l) + i + qa(Ia(S), l);
        }
        function Vx(i, o, l) {
          i = Kt(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? i + qa(o - g, l) : i;
        }
        function Kx(i, o, l) {
          i = Kt(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? qa(o - g, l) + i : i;
        }
        function Zx(i, o, l) {
          return l || o == null ? o = 0 : o && (o = +o), n0(Kt(i).replace(Jo, ""), o || 0);
        }
        function Jx(i, o, l) {
          return (l ? Ir(i, o, l) : o === r) ? o = 1 : o = Gt(o), Ts(Kt(i), o);
        }
        function Qx() {
          var i = arguments, o = Kt(i[0]);
          return i.length < 3 ? o : o.replace(i[1], i[2]);
        }
        var jx = Vn(function(i, o, l) {
          return i + (l ? "_" : "") + o.toLowerCase();
        });
        function ty(i, o, l) {
          return l && typeof l != "number" && Ir(i, o, l) && (o = l = r), l = l === r ? U : l >>> 0, l ? (i = Kt(i), i && (typeof o == "string" || o != null && !Qs(o)) && (o = Vr(o), !o && Nn(i)) ? rn(de(i), 0, l) : i.split(o, l)) : [];
        }
        var ry = Vn(function(i, o, l) {
          return i + (l ? " " : "") + ru(o);
        });
        function ey(i, o, l) {
          return i = Kt(i), l = l == null ? 0 : yn(Gt(l), 0, i.length), o = Vr(o), i.slice(l, l + o.length) == o;
        }
        function ny(i, o, l) {
          var g = C.templateSettings;
          l && Ir(i, o, l) && (o = r), i = Kt(i), o = no({}, o, g, _c);
          var S = no({}, o.imports, g.imports, _c), M = Cr(S), A = vs(S, M), G, k, K = 0, Z = o.interpolate || ga, rt = "__p += '", vt = ds(
            (o.escape || ga).source + "|" + Z.source + "|" + (Z === Nf ? Gh : ga).source + "|" + (o.evaluate || ga).source + "|$",
            "g"
          ), _t = "//# sourceURL=" + (Zt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vg + "]") + `
`;
          i.replace(vt, function(Mt, kt, Xt, Zr, Pr, Jr) {
            return Xt || (Xt = Zr), rt += i.slice(K, Jr).replace(Yh, Pg), kt && (G = !0, rt += `' +
__e(` + kt + `) +
'`), Pr && (k = !0, rt += `';
` + Pr + `;
__p += '`), Xt && (rt += `' +
((__t = (` + Xt + `)) == null ? '' : __t) +
'`), K = Jr + Mt.length, Mt;
          }), rt += `';
`;
          var Dt = Zt.call(o, "variable") && o.variable;
          if (!Dt)
            rt = `with (obj) {
` + rt + `
}
`;
          else if (Bh.test(Dt))
            throw new Ot(f);
          rt = (k ? rt.replace(Vo, "") : rt).replace(Ci, "$1").replace(Jt, "$1;"), rt = "function(" + (Dt || "obj") + `) {
` + (Dt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (G ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + rt + `return __p
}`;
          var Ft = lv(function() {
            return Vt(M, _t + "return " + rt).apply(r, A);
          });
          if (Ft.source = rt, Js(Ft))
            throw Ft;
          return Ft;
        }
        function iy(i) {
          return Kt(i).toLowerCase();
        }
        function ay(i) {
          return Kt(i).toUpperCase();
        }
        function oy(i, o, l) {
          if (i = Kt(i), i && (l || o === r))
            return xl(i);
          if (!i || !(o = Vr(o)))
            return i;
          var g = de(i), S = de(o), M = yl(g, S), A = Sl(g, S) + 1;
          return rn(g, M, A).join("");
        }
        function sy(i, o, l) {
          if (i = Kt(i), i && (l || o === r))
            return i.slice(0, Cl(i) + 1);
          if (!i || !(o = Vr(o)))
            return i;
          var g = de(i), S = Sl(g, de(o)) + 1;
          return rn(g, 0, S).join("");
        }
        function uy(i, o, l) {
          if (i = Kt(i), i && (l || o === r))
            return i.replace(Jo, "");
          if (!i || !(o = Vr(o)))
            return i;
          var g = de(i), S = yl(g, de(o));
          return rn(g, S).join("");
        }
        function fy(i, o) {
          var l = B, g = H;
          if (or(o)) {
            var S = "separator" in o ? o.separator : S;
            l = "length" in o ? Gt(o.length) : l, g = "omission" in o ? Vr(o.omission) : g;
          }
          i = Kt(i);
          var M = i.length;
          if (Nn(i)) {
            var A = de(i);
            M = A.length;
          }
          if (l >= M)
            return i;
          var G = l - kn(g);
          if (G < 1)
            return g;
          var k = A ? rn(A, 0, G).join("") : i.slice(0, G);
          if (S === r)
            return k + g;
          if (A && (G += k.length - G), Qs(S)) {
            if (i.slice(G).search(S)) {
              var K, Z = k;
              for (S.global || (S = ds(S.source, Kt(kf.exec(S)) + "g")), S.lastIndex = 0; K = S.exec(Z); )
                var rt = K.index;
              k = k.slice(0, rt === r ? G : rt);
            }
          } else if (i.indexOf(Vr(S), G) != G) {
            var vt = k.lastIndexOf(S);
            vt > -1 && (k = k.slice(0, vt));
          }
          return k + g;
        }
        function ly(i) {
          return i = Kt(i), i && ha.test(i) ? i.replace(br, Wg) : i;
        }
        var cy = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toUpperCase();
        }), ru = cc("toUpperCase");
        function fv(i, o, l) {
          return i = Kt(i), o = l ? r : o, o === r ? Bg(i) ? Hg(i) : wg(i) : i.match(o) || [];
        }
        var lv = Lt(function(i, o) {
          try {
            return Ur(i, r, o);
          } catch (l) {
            return Js(l) ? l : new Ot(l);
          }
        }), vy = Fe(function(i, o) {
          return te(o, function(l) {
            l = Re(l), ze(i, l, Ks(i[l], i));
          }), i;
        });
        function py(i) {
          var o = i == null ? 0 : i.length, l = Et();
          return i = o ? ar(i, function(g) {
            if (typeof g[1] != "function")
              throw new re(u);
            return [l(g[0]), g[1]];
          }) : [], Lt(function(g) {
            for (var S = -1; ++S < o; ) {
              var M = i[S];
              if (Ur(M[0], this, g))
                return Ur(M[1], this, g);
            }
          });
        }
        function dy(i) {
          return W0(ne(i, h));
        }
        function eu(i) {
          return function() {
            return i;
          };
        }
        function hy(i, o) {
          return i == null || i !== i ? o : i;
        }
        var gy = pc(), my = pc(!0);
        function kr(i) {
          return i;
        }
        function nu(i) {
          return Yl(typeof i == "function" ? i : ne(i, h));
        }
        function _y(i) {
          return ql(ne(i, h));
        }
        function xy(i, o) {
          return Ul(i, ne(o, h));
        }
        var yy = Lt(function(i, o) {
          return function(l) {
            return Bi(l, i, o);
          };
        }), Sy = Lt(function(i, o) {
          return function(l) {
            return Bi(i, l, o);
          };
        });
        function iu(i, o, l) {
          var g = Cr(o), S = La(o, g);
          l == null && !(or(o) && (S.length || !g.length)) && (l = o, o = i, i = this, S = La(o, Cr(o)));
          var M = !(or(l) && "chain" in l) || !!l.chain, A = We(i);
          return te(S, function(G) {
            var k = o[G];
            i[G] = k, A && (i.prototype[G] = function() {
              var K = this.__chain__;
              if (M || K) {
                var Z = i(this.__wrapped__), rt = Z.__actions__ = Lr(this.__actions__);
                return rt.push({ func: k, args: arguments, thisArg: i }), Z.__chain__ = K, Z;
              }
              return k.apply(i, Ke([this.value()], arguments));
            });
          }), i;
        }
        function by() {
          return Er._ === this && (Er._ = Vg), this;
        }
        function au() {
        }
        function Cy(i) {
          return i = Gt(i), Lt(function(o) {
            return $l(o, i);
          });
        }
        var Ey = Gs(ar), wy = Gs(dl), Dy = Gs(ss);
        function cv(i) {
          return Ys(i) ? us(Re(i)) : e1(i);
        }
        function My(i) {
          return function(o) {
            return i == null ? r : Sn(i, o);
          };
        }
        var Ry = hc(), Ty = hc(!0);
        function ou() {
          return [];
        }
        function su() {
          return !1;
        }
        function Oy() {
          return {};
        }
        function Iy() {
          return "";
        }
        function Py() {
          return !0;
        }
        function Ay(i, o) {
          if (i = Gt(i), i < 1 || i > V)
            return [];
          var l = U, g = Mr(i, U);
          o = Et(o), i -= U;
          for (var S = cs(g, o); ++l < i; )
            o(l);
          return S;
        }
        function By(i) {
          return At(i) ? ar(i, Re) : Kr(i) ? [i] : Lr(Ic(Kt(i)));
        }
        function zy(i) {
          var o = ++Ug;
          return Kt(i) + o;
        }
        var Gy = Xa(function(i, o) {
          return i + o;
        }, 0), Fy = Fs("ceil"), Ly = Xa(function(i, o) {
          return i / o;
        }, 1), Wy = Fs("floor");
        function Ny(i) {
          return i && i.length ? Fa(i, kr, bs) : r;
        }
        function ky(i, o) {
          return i && i.length ? Fa(i, Et(o, 2), bs) : r;
        }
        function Hy(i) {
          return ml(i, kr);
        }
        function Yy(i, o) {
          return ml(i, Et(o, 2));
        }
        function Xy(i) {
          return i && i.length ? Fa(i, kr, Ds) : r;
        }
        function qy(i, o) {
          return i && i.length ? Fa(i, Et(o, 2), Ds) : r;
        }
        var Uy = Xa(function(i, o) {
          return i * o;
        }, 1), $y = Fs("round"), Vy = Xa(function(i, o) {
          return i - o;
        }, 0);
        function Ky(i) {
          return i && i.length ? ls(i, kr) : 0;
        }
        function Zy(i, o) {
          return i && i.length ? ls(i, Et(o, 2)) : 0;
        }
        return C.after = __, C.ary = Hc, C.assign = ax, C.assignIn = ev, C.assignInWith = no, C.assignWith = ox, C.at = sx, C.before = Yc, C.bind = Ks, C.bindAll = vy, C.bindKey = Xc, C.castArray = O_, C.chain = Wc, C.chunk = W1, C.compact = N1, C.concat = k1, C.cond = py, C.conforms = dy, C.constant = eu, C.countBy = Km, C.create = ux, C.curry = qc, C.curryRight = Uc, C.debounce = $c, C.defaults = fx, C.defaultsDeep = lx, C.defer = x_, C.delay = y_, C.difference = H1, C.differenceBy = Y1, C.differenceWith = X1, C.drop = q1, C.dropRight = U1, C.dropRightWhile = $1, C.dropWhile = V1, C.fill = K1, C.filter = Jm, C.flatMap = t_, C.flatMapDeep = r_, C.flatMapDepth = e_, C.flatten = zc, C.flattenDeep = Z1, C.flattenDepth = J1, C.flip = S_, C.flow = gy, C.flowRight = my, C.fromPairs = Q1, C.functions = mx, C.functionsIn = _x, C.groupBy = n_, C.initial = tm, C.intersection = rm, C.intersectionBy = em, C.intersectionWith = nm, C.invert = yx, C.invertBy = Sx, C.invokeMap = a_, C.iteratee = nu, C.keyBy = o_, C.keys = Cr, C.keysIn = Nr, C.map = Ja, C.mapKeys = Cx, C.mapValues = Ex, C.matches = _y, C.matchesProperty = xy, C.memoize = ja, C.merge = wx, C.mergeWith = nv, C.method = yy, C.methodOf = Sy, C.mixin = iu, C.negate = to, C.nthArg = Cy, C.omit = Dx, C.omitBy = Mx, C.once = b_, C.orderBy = s_, C.over = Ey, C.overArgs = C_, C.overEvery = wy, C.overSome = Dy, C.partial = Zs, C.partialRight = Vc, C.partition = u_, C.pick = Rx, C.pickBy = iv, C.property = cv, C.propertyOf = My, C.pull = sm, C.pullAll = Fc, C.pullAllBy = um, C.pullAllWith = fm, C.pullAt = lm, C.range = Ry, C.rangeRight = Ty, C.rearg = E_, C.reject = c_, C.remove = cm, C.rest = w_, C.reverse = $s, C.sampleSize = p_, C.set = Ox, C.setWith = Ix, C.shuffle = d_, C.slice = vm, C.sortBy = m_, C.sortedUniq = xm, C.sortedUniqBy = ym, C.split = ty, C.spread = D_, C.tail = Sm, C.take = bm, C.takeRight = Cm, C.takeRightWhile = Em, C.takeWhile = wm, C.tap = Nm, C.throttle = M_, C.thru = Za, C.toArray = jc, C.toPairs = av, C.toPairsIn = ov, C.toPath = By, C.toPlainObject = rv, C.transform = Px, C.unary = R_, C.union = Dm, C.unionBy = Mm, C.unionWith = Rm, C.uniq = Tm, C.uniqBy = Om, C.uniqWith = Im, C.unset = Ax, C.unzip = Vs, C.unzipWith = Lc, C.update = Bx, C.updateWith = zx, C.values = Jn, C.valuesIn = Gx, C.without = Pm, C.words = fv, C.wrap = T_, C.xor = Am, C.xorBy = Bm, C.xorWith = zm, C.zip = Gm, C.zipObject = Fm, C.zipObjectDeep = Lm, C.zipWith = Wm, C.entries = av, C.entriesIn = ov, C.extend = ev, C.extendWith = no, iu(C, C), C.add = Gy, C.attempt = lv, C.camelCase = Nx, C.capitalize = sv, C.ceil = Fy, C.clamp = Fx, C.clone = I_, C.cloneDeep = A_, C.cloneDeepWith = B_, C.cloneWith = P_, C.conformsTo = z_, C.deburr = uv, C.defaultTo = hy, C.divide = Ly, C.endsWith = kx, C.eq = ge, C.escape = Hx, C.escapeRegExp = Yx, C.every = Zm, C.find = Qm, C.findIndex = Ac, C.findKey = cx, C.findLast = jm, C.findLastIndex = Bc, C.findLastKey = vx, C.floor = Wy, C.forEach = Nc, C.forEachRight = kc, C.forIn = px, C.forInRight = dx, C.forOwn = hx, C.forOwnRight = gx, C.get = js, C.gt = G_, C.gte = F_, C.has = xx, C.hasIn = tu, C.head = Gc, C.identity = kr, C.includes = i_, C.indexOf = j1, C.inRange = Lx, C.invoke = bx, C.isArguments = En, C.isArray = At, C.isArrayBuffer = L_, C.isArrayLike = Wr, C.isArrayLikeObject = lr, C.isBoolean = W_, C.isBuffer = en, C.isDate = N_, C.isElement = k_, C.isEmpty = H_, C.isEqual = Y_, C.isEqualWith = X_, C.isError = Js, C.isFinite = q_, C.isFunction = We, C.isInteger = Kc, C.isLength = ro, C.isMap = Zc, C.isMatch = U_, C.isMatchWith = $_, C.isNaN = V_, C.isNative = K_, C.isNil = J_, C.isNull = Z_, C.isNumber = Jc, C.isObject = or, C.isObjectLike = ur, C.isPlainObject = Ni, C.isRegExp = Qs, C.isSafeInteger = Q_, C.isSet = Qc, C.isString = eo, C.isSymbol = Kr, C.isTypedArray = Zn, C.isUndefined = j_, C.isWeakMap = tx, C.isWeakSet = rx, C.join = im, C.kebabCase = Xx, C.last = ae, C.lastIndexOf = am, C.lowerCase = qx, C.lowerFirst = Ux, C.lt = ex, C.lte = nx, C.max = Ny, C.maxBy = ky, C.mean = Hy, C.meanBy = Yy, C.min = Xy, C.minBy = qy, C.stubArray = ou, C.stubFalse = su, C.stubObject = Oy, C.stubString = Iy, C.stubTrue = Py, C.multiply = Uy, C.nth = om, C.noConflict = by, C.noop = au, C.now = Qa, C.pad = $x, C.padEnd = Vx, C.padStart = Kx, C.parseInt = Zx, C.random = Wx, C.reduce = f_, C.reduceRight = l_, C.repeat = Jx, C.replace = Qx, C.result = Tx, C.round = $y, C.runInContext = W, C.sample = v_, C.size = h_, C.snakeCase = jx, C.some = g_, C.sortedIndex = pm, C.sortedIndexBy = dm, C.sortedIndexOf = hm, C.sortedLastIndex = gm, C.sortedLastIndexBy = mm, C.sortedLastIndexOf = _m, C.startCase = ry, C.startsWith = ey, C.subtract = Vy, C.sum = Ky, C.sumBy = Zy, C.template = ny, C.times = Ay, C.toFinite = Ne, C.toInteger = Gt, C.toLength = tv, C.toLower = iy, C.toNumber = oe, C.toSafeInteger = ix, C.toString = Kt, C.toUpper = ay, C.trim = oy, C.trimEnd = sy, C.trimStart = uy, C.truncate = fy, C.unescape = ly, C.uniqueId = zy, C.upperCase = cy, C.upperFirst = ru, C.each = Nc, C.eachRight = kc, C.first = Gc, iu(C, (function() {
          var i = {};
          return De(C, function(o, l) {
            Zt.call(C.prototype, l) || (i[l] = o);
          }), i;
        })(), { chain: !1 }), C.VERSION = n, te(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          C[i].placeholder = C;
        }), te(["drop", "take"], function(i, o) {
          Ht.prototype[i] = function(l) {
            l = l === r ? 1 : _r(Gt(l), 0);
            var g = this.__filtered__ && !o ? new Ht(this) : this.clone();
            return g.__filtered__ ? g.__takeCount__ = Mr(l, g.__takeCount__) : g.__views__.push({
              size: Mr(l, U),
              type: i + (g.__dir__ < 0 ? "Right" : "")
            }), g;
          }, Ht.prototype[i + "Right"] = function(l) {
            return this.reverse()[i](l).reverse();
          };
        }), te(["filter", "map", "takeWhile"], function(i, o) {
          var l = o + 1, g = l == Y || l == J;
          Ht.prototype[i] = function(S) {
            var M = this.clone();
            return M.__iteratees__.push({
              iteratee: Et(S, 3),
              type: l
            }), M.__filtered__ = M.__filtered__ || g, M;
          };
        }), te(["head", "last"], function(i, o) {
          var l = "take" + (o ? "Right" : "");
          Ht.prototype[i] = function() {
            return this[l](1).value()[0];
          };
        }), te(["initial", "tail"], function(i, o) {
          var l = "drop" + (o ? "" : "Right");
          Ht.prototype[i] = function() {
            return this.__filtered__ ? new Ht(this) : this[l](1);
          };
        }), Ht.prototype.compact = function() {
          return this.filter(kr);
        }, Ht.prototype.find = function(i) {
          return this.filter(i).head();
        }, Ht.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Ht.prototype.invokeMap = Lt(function(i, o) {
          return typeof i == "function" ? new Ht(this) : this.map(function(l) {
            return Bi(l, i, o);
          });
        }), Ht.prototype.reject = function(i) {
          return this.filter(to(Et(i)));
        }, Ht.prototype.slice = function(i, o) {
          i = Gt(i);
          var l = this;
          return l.__filtered__ && (i > 0 || o < 0) ? new Ht(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), o !== r && (o = Gt(o), l = o < 0 ? l.dropRight(-o) : l.take(o - i)), l);
        }, Ht.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Ht.prototype.toArray = function() {
          return this.take(U);
        }, De(Ht.prototype, function(i, o) {
          var l = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), S = C[g ? "take" + (o == "last" ? "Right" : "") : o], M = g || /^find/.test(o);
          S && (C.prototype[o] = function() {
            var A = this.__wrapped__, G = g ? [1] : arguments, k = A instanceof Ht, K = G[0], Z = k || At(A), rt = function(kt) {
              var Xt = S.apply(C, Ke([kt], G));
              return g && vt ? Xt[0] : Xt;
            };
            Z && l && typeof K == "function" && K.length != 1 && (k = Z = !1);
            var vt = this.__chain__, _t = !!this.__actions__.length, Dt = M && !vt, Ft = k && !_t;
            if (!M && Z) {
              A = Ft ? A : new Ht(this);
              var Mt = i.apply(A, G);
              return Mt.__actions__.push({ func: Za, args: [rt], thisArg: r }), new ee(Mt, vt);
            }
            return Dt && Ft ? i.apply(this, G) : (Mt = this.thru(rt), Dt ? g ? Mt.value()[0] : Mt.value() : Mt);
          });
        }), te(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var o = ba[i], l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
          C.prototype[i] = function() {
            var S = arguments;
            if (g && !this.__chain__) {
              var M = this.value();
              return o.apply(At(M) ? M : [], S);
            }
            return this[l](function(A) {
              return o.apply(At(A) ? A : [], S);
            });
          };
        }), De(Ht.prototype, function(i, o) {
          var l = C[o];
          if (l) {
            var g = l.name + "";
            Zt.call(qn, g) || (qn[g] = []), qn[g].push({ name: o, func: l });
          }
        }), qn[Ya(r, b).name] = [{
          name: "wrapper",
          func: r
        }], Ht.prototype.clone = l0, Ht.prototype.reverse = c0, Ht.prototype.value = v0, C.prototype.at = km, C.prototype.chain = Hm, C.prototype.commit = Ym, C.prototype.next = Xm, C.prototype.plant = Um, C.prototype.reverse = $m, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = Vm, C.prototype.first = C.prototype.head, Mi && (C.prototype[Mi] = qm), C;
      }), Hn = Yg();
      gn ? ((gn.exports = Hn)._ = Hn, ns._ = Hn) : Er._ = Hn;
    }).call(uS);
  })(Hi, Hi.exports)), Hi.exports;
}
var gp = fS();
function mp(t = "", e = () => 0) {
  const r = tS(t), n = (w) => {
    const D = e();
    return D > 0 ? Math.round(w / D) * D : w;
  }, a = rS(t), s = hp(), u = Ar({
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
    processDropCoordinates: (w, D) => {
      const { clientX: T, clientY: P } = w, { left: B, top: H } = D.getBoundingClientRect();
      return { dropX: n(T - B), dropY: n(P - H) };
    },
    processDragOverCoordinates: (w, D) => {
      const { clientX: T, clientY: P } = w, { left: B, top: H } = D.getBoundingClientRect(), N = T - B, L = P - H;
      u.value.x = n(N - u.value.width / 2), u.value.y = n(L - u.value.height / 2), u.value.visible = !0;
    },
    hidePlaceholder: () => {
      u.value.visible = !1;
    },
    getInitialStyle: (w) => {
      const D = r?.layout?.find((T) => T.id === w);
      return D ? {
        width: `${D.width}px`,
        height: `${D.height}px`,
        transform: `translate(${D.x}px, ${D.y}px)`,
        "z-index": D.z
      } : {};
    },
    getMovableControlStyles: (w) => {
      const D = r.layout.find((T) => T.id === w);
      return D ? {
        "z-index": D.z
      } : {};
    },
    drag: (w, D) => {
      const T = r.layout.find((P) => P.id === w);
      T && (T.x = n(D.translate[0]), T.y = n(D.translate[1]), D.target.style.transform = `translate(${T.x}px, ${T.y}px)`);
    },
    resize: (w, D) => {
      const T = r.layout.find((P) => P.id === w);
      T && (T.width = n(D.width), T.height = n(D.height), T.x = n(D.drag.translate[0]), T.y = n(D.drag.translate[1]), D.target.style.width = `${T.width}px`, D.target.style.height = `${T.height}px`, D.target.style.transform = `translate(${T.x}px, ${T.y}px)`);
    },
    moveUp: (w) => {
      const D = r.layout.find((T) => T.id === w);
      D && (D.z += 1);
    },
    moveDown: (w) => {
      const D = r.layout.find((T) => T.id === w);
      D && (D.z -= 1);
    },
    moveToTop: (w) => {
      const D = Math.max(...r.layout.map((P) => P.z)), T = r.layout.find((P) => P.id === w);
      T && (T.z = D + 1);
    },
    moveToBottom: (w) => {
      const D = Math.min(...r.layout.map((P) => P.z)), T = r.layout.find((P) => P.id === w);
      T && (T.z = D - 1);
    },
    addWidget: (w, D = {}, T = {}, P = {}) => {
      const B = a.createWidget(w, D, T), H = {
        id: B,
        width: P.width || 300,
        height: P.height || 150,
        x: P.x || 0,
        y: P.y || 0,
        z: P.z || Math.max(...r.layout.map((N) => N.z), 0) + 1
      };
      return r.layout.push(H), B;
    },
    removeWidget: (w) => {
      a.removeWidget(w);
      const D = r.layout.findIndex((T) => T.id === w);
      D > -1 && r.layout.splice(D, 1);
    },
    copyWidget: (w) => {
      const D = a.widgets.find((P) => P.uid === w), T = r.layout.find((P) => P.id === w);
      D && T && s.copy(D, T);
    },
    pasteWidget: (w, D) => {
      const T = s.paste();
      if (!T) return null;
      const P = "li_" + Math.random().toString(36).substring(7), B = Math.max(...r.layout.map((L) => L.z), 0), H = gp.cloneDeep(T.widget);
      H.uid = P, H.config?.settings && (H.config.settings.name = "widget_" + P);
      const N = {
        ...T.layout,
        id: P,
        x: w,
        y: D,
        z: B + 1
      };
      return a.widgets.push(H), r.layout.push(N), P;
    }
  };
}
const lS = { class: "widget-board" }, cS = { class: "dashboard-item" }, vS = /* @__PURE__ */ tf({
  __name: "View",
  props: {
    pageId: {}
  },
  setup(t) {
    const e = t, r = dp(), n = e.pageId ?? r.params.pageid ?? "", {
      widgetStore: a,
      getInitialStyle: s
    } = mp(n || ""), u = cp(aS.TINY_EMITTER);
    return Eu(async () => {
      console.log("Base View component mounted for page:", n), await wu(), console.log("📄 Emitting system:pageLoaded for page:", n), u.emit("system:pageLoaded", { pageId: n });
    }), (f, c) => (fe(), ye("div", lS, [
      (fe(!0), ye(yo, null, Du(fr(a)?.widgets || [], (v) => (fe(), ye("div", {
        key: v.uid,
        class: vp(`${v.uid} dashboard-item-container`),
        style: on(fr(s)(v.uid)),
        ref_for: !0,
        ref: v.uid
      }, [
        xe("div", cS, [
          ue(fr(pp), {
            widget: v,
            ref_for: !0,
            ref: `${v.uid}_wrapper`,
            editEnabled: !1
          }, null, 8, ["widget"])
        ])
      ], 6))), 128))
    ]));
  }
}), _p = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, pS = /* @__PURE__ */ _p(vS, [["__scopeId", "data-v-6934652c"]]);
function dS(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.map(function(n) {
    return n.split(" ").map(function(a) {
      return a ? "" + t + a : "";
    }).join(" ");
  }).join(" ");
}
function hS(t, e) {
  return e.replace(/([^}{]*){/gm, function(r, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function He(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function xp(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function gv(t, e) {
  return function(r) {
    var n = r.prototype;
    t.forEach(function(a) {
      e(n, a);
    });
  };
}
function gS(t, e) {
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
var mS = "function", _S = "object", xS = "string", yS = "number", rf = "undefined", yp = typeof window !== rf, SS = typeof document !== rf && document, bS = [{
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
}], dr = 1e-7, ao = {
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
function CS() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function Co(t, e, r, n) {
  return (t * n + e * r) / (r + n);
}
function ia(t) {
  return typeof t === rf;
}
function Ee(t) {
  return t && typeof t === _S;
}
function hr(t) {
  return Array.isArray(t);
}
function Yr(t) {
  return typeof t === xS;
}
function si(t) {
  return typeof t === yS;
}
function ef(t) {
  return typeof t === mS;
}
function ES(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function Sp(t, e, r, n, a) {
  var s = nf(t, e, r);
  return s ? r : wS(t, e, r + 1, n, a);
}
function nf(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function wS(t, e, r, n, a) {
  for (var s = function(v) {
    var p = e[v].trim();
    if (p === t.close && !nf(t, e, v))
      return {
        value: v
      };
    var h = v, d = Xr(a, function(m) {
      var _ = m.open;
      return _ === p;
    });
    if (d && (h = Sp(d, e, v, n, a)), h === -1)
      return u = v, "break";
    v = h, u = v;
  }, u, f = r; f < n; ++f) {
    var c = s(f);
    if (f = u, typeof c == "object") return c.value;
    if (c === "break") break;
  }
  return -1;
}
function af(t, e) {
  var r = Yr(e) ? {
    separator: e
  } : e, n = r.separator, a = n === void 0 ? "," : n, s = r.isSeparateFirst, u = r.isSeparateOnlyOpenClose, f = r.isSeparateOpenClose, c = f === void 0 ? u : f, v = r.openCloseCharacters, p = v === void 0 ? bS : v, h = p.map(function(D) {
    var T = D.open, P = D.close;
    return T === P ? T : T + "|" + P;
  }).join("|"), d = "(\\s*" + a + "\\s*|" + h + "|\\s+)", m = new RegExp(d, "g"), _ = t.split(m).filter(function(D) {
    return D && D !== "undefined";
  }), x = _.length, y = [], b = [];
  function E() {
    return b.length ? (y.push(b.join("")), b = [], !0) : !1;
  }
  for (var R = function(D) {
    var T = _[D].trim(), P = D, B = Xr(p, function(L) {
      var Y = L.open;
      return Y === T;
    }), H = Xr(p, function(L) {
      var Y = L.close;
      return Y === T;
    });
    if (B) {
      if (P = Sp(B, _, D, x, p), P !== -1 && c)
        return E() && s || (y.push(_.slice(D, P + 1).join("")), D = P, s) ? (O = D, "break") : (O = D, "continue");
    } else if (H && !nf(H, _, D)) {
      var N = CS(p);
      return N.splice(p.indexOf(H), 1), {
        value: af(t, {
          separator: a,
          isSeparateFirst: s,
          isSeparateOnlyOpenClose: u,
          isSeparateOpenClose: c,
          openCloseCharacters: N
        })
      };
    } else if (ES(T, a) && !u)
      return E(), s ? (O = D, "break") : (O = D, "continue");
    P === -1 && (P = x - 1), b.push(_.slice(D, P + 1).join("")), D = P, O = D;
  }, O, I = 0; I < x; ++I) {
    var w = R(I);
    if (I = O, typeof w == "object") return w.value;
    if (w === "break") break;
  }
  return b.length && y.push(b.join("")), y;
}
function ln(t) {
  return af(t, "");
}
function Tn(t) {
  return af(t, ",");
}
function bp(t) {
  var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !e || e.length < 4 ? {} : {
    prefix: e[1],
    value: e[2],
    suffix: e[3]
  };
}
function aa(t) {
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
function DS(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(e, r) {
    return r.toUpperCase();
  });
}
function So(t, e) {
  return t.replace(/([a-z])([A-Z])/g, function(r, n, a) {
    return "" + n + e + a.toLowerCase();
  });
}
function Qi() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function qe(t, e, r) {
  r === void 0 && (r = -1);
  for (var n = t.length, a = 0; a < n; ++a)
    if (e(t[a], a, t))
      return a;
  return r;
}
function Xr(t, e, r) {
  var n = qe(t, e);
  return n > -1 ? t[n] : r;
}
var Cp = /* @__PURE__ */ (function() {
  var t = Qi(), e = yp && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = Qi(), a = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return a;
  };
})(), MS = /* @__PURE__ */ (function() {
  var t = yp && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
})();
function Ue(t) {
  return Object.keys(t);
}
function RS(t) {
  var e = Ue(t);
  return e.map(function(r) {
    return t[r];
  });
}
function Qt(t, e) {
  var r = aa(t), n = r.value, a = r.unit;
  if (Ee(e)) {
    var s = e[a];
    if (s) {
      if (ef(s))
        return s(n);
      if (ao[a])
        return ao[a](n, s);
    }
  } else if (a === "%")
    return n * e / 100;
  return ao[a] ? ao[a](n) : n;
}
function Mu(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
function mv(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[Tt(e[0], dr), Tt(e[0] / n, dr)], [Tt(e[1] * n, dr), Tt(e[1], dr)]].filter(function(a) {
    return a.every(function(s, u) {
      var f = e[u], c = Tt(f, dr);
      return r ? s <= f || s <= c : s >= f || s >= c;
    });
  })[0] || t;
}
function Ep(t, e, r, n) {
  if (!n)
    return t.map(function(m, _) {
      return Mu(m, e[_], r[_]);
    });
  var a = t[0], s = t[1], u = n === !0 ? a / s : n, f = mv(t, e, !1, u), c = f[0], v = f[1], p = mv(t, r, !0, u), h = p[0], d = p[1];
  return a < c || s < v ? (a = c, s = v) : (a > h || s > d) && (a = h, s = d), [a, s];
}
function TS(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return r;
}
function Ru(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return e ? r / e : 0;
}
function vr(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function OS(t) {
  return [0, 1].map(function(e) {
    return Ru(t.map(function(r) {
      return r[e];
    }));
  });
}
function _v(t) {
  var e = OS(t), r = vr(e, t[0]), n = vr(e, t[1]);
  return r < n && n - r < Math.PI || r > n && n - r < -Math.PI ? 1 : -1;
}
function Ye(t, e) {
  return Math.sqrt(Math.pow((e ? e[0] : 0) - t[0], 2) + Math.pow((e ? e[1] : 0) - t[1], 2));
}
function Tt(t, e) {
  if (!e)
    return t;
  var r = 1 / e;
  return Math.round(t / e) / r;
}
function xv(t, e) {
  return t.forEach(function(r, n) {
    t[n] = Tt(t[n], e);
  }), t;
}
function IS(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function wp(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Dp(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function yr(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function Mp(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function Rp(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else {
    var r = new RegExp("(\\s|^)" + e + "(\\s|$)");
    t.className = t.className.replace(r, " ");
  }
}
function Dr(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function xr(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
function di(t) {
  return t?.ownerDocument || SS;
}
function of(t) {
  return di(t).documentElement;
}
function pn(t) {
  return di(t).body;
}
function fn(t) {
  var e;
  return ((e = t?.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView) || window;
}
function Tp(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function hi(t) {
  return Ee(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var PS = /* @__PURE__ */ (function() {
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
})(), AS = /* @__PURE__ */ (function() {
  function t() {
    this.object = {};
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.object[r];
  }, e.set = function(r, n) {
    this.object[r] = n;
  }, t;
})(), BS = typeof Map == "function", zS = /* @__PURE__ */ (function() {
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
function GS(t, e) {
  var r = [], n = [];
  return t.forEach(function(a) {
    var s = a[0], u = a[1], f = new zS();
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
var FS = /* @__PURE__ */ (function() {
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
    var r = GS(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = r.filter(function(s, u) {
      var f = s[0], c = s[1], v = n[u], p = v[0], h = v[1];
      if (f !== c)
        return a.push([p, h]), !0;
    }), this.cachePureChanged = a;
  }, t;
})();
function oa(t, e, r) {
  var n = BS ? Map : r ? AS : PS, a = r || function(E) {
    return E;
  }, s = [], u = [], f = [], c = t.map(a), v = e.map(a), p = new n(), h = new n(), d = [], m = [], _ = {}, x = [], y = 0, b = 0;
  return c.forEach(function(E, R) {
    p.set(E, R);
  }), v.forEach(function(E, R) {
    h.set(E, R);
  }), c.forEach(function(E, R) {
    var O = h.get(E);
    typeof O > "u" ? (++b, u.push(R)) : _[O] = b;
  }), v.forEach(function(E, R) {
    var O = p.get(E);
    typeof O > "u" ? (s.push(R), ++y) : (f.push([O, R]), b = _[R] || 0, d.push([O - b, R - y]), m.push(R === O), O !== R && x.push([O, R]));
  }), u.reverse(), new FS(t, e, s, u, x, f, d, m);
}
var LS = /* @__PURE__ */ (function() {
  function t(r, n) {
    r === void 0 && (r = []), this.findKeyCallback = n, this.list = [].slice.call(r);
  }
  var e = t.prototype;
  return e.update = function(r) {
    var n = [].slice.call(r), a = oa(this.list, n, this.findKeyCallback);
    return this.list = n, a;
  }, t;
})(), Tu = function(t, e) {
  return Tu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Tu(t, e);
};
function sa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Tu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Te = function() {
  return Te = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Te.apply(this, arguments);
};
function Op(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function yv(t, e, r) {
  for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Sv(t) {
  var e = 0;
  return t.map(function(r) {
    return r == null ? "$compat".concat(++e) : "".concat(r);
  });
}
function Ip(t) {
  var e = [];
  return t.forEach(function(r) {
    e = e.concat(hr(r) ? Ip(r) : r);
  }), e;
}
function lu(t, e) {
  if (!e)
    return t;
  for (var r in e)
    ia(t[r]) && (t[r] = e[r]);
  return t;
}
function Eo(t, e) {
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
function bv(t) {
  var e = t.className, r = Op(t, ["className"]);
  return e != null && (r.class = e), delete r.style, delete r.children, r;
}
function Cv(t) {
  var e = {}, r = {};
  for (var n in t)
    n.indexOf("on") === 0 ? r[n] = t[n] : e[n] = t[n];
  return [e, r];
}
function Go(t) {
  if (!t)
    return null;
  var e = t.b;
  return hi(e) ? e : Go(t.c);
}
function Pp(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ap(t) {
  t.forEach(function(e) {
    e();
  });
}
function WS() {
  return this.constructor(this.props, this.context);
}
var sf = 0, Fo = /* @__PURE__ */ (function() {
  function t(r, n, a, s, u, f, c) {
    c === void 0 && (c = {}), this.t = r, this.d = n, this.k = a, this.i = s, this.c = u, this.ref = f, this.ps = c, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var e = t.prototype;
  return e.s = function() {
    return !0;
  }, e.u = function(r, n, a, s, u) {
    var f = this, c = f.d, v = RS(n).filter(function(_) {
      return _.$_req;
    }), p = Ip(v.map(function(_) {
      return _.$_subs;
    })), h = Xr(p, function(_) {
      return _.d === c;
    });
    if (f.b && !Yr(a) && !u && !f.s(a.props, s) && !h) {
      var d = p.reduce(function(_, x) {
        var y = x.d;
        return _[0] ? _[0].d === y && _.push(x) : y > c && _.push(x), _;
      }, []);
      return d.forEach(function(_) {
        ua(_, _._ps, [_.o], r, n, !0);
      }), !1;
    }
    f.o = a, f.ss(s);
    var m = f.ps;
    return Yr(a) || (f.ps = a.props, f.ref = a.ref), uf(this), f.r(r, n, f.b ? m : {}, s), !0;
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
function Bp() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function NS() {
  return sf;
}
function kS(t) {
  sf = t;
}
function uf(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, sf = 0, t;
}
var ff = /* @__PURE__ */ (function() {
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
    s.$_timer || (s.$_state = {}), clearTimeout(s.$_timer), s.$_timer = 0, s.$_state = Te(Te({}, s.$_state), r), a ? s.$_setState(n, a) : s.$_timer = window.setTimeout(function() {
      s.$_timer = 0, s.$_setState(n, a);
    });
  }, e.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, e.componentDidMount = function() {
  }, e.componentDidUpdate = function(r, n) {
  }, e.componentWillUnmount = function() {
  }, e.$_setState = function(r, n) {
    var a = [], s = this.$_p, u = ua(s.c, [s], [s.o], a, s._cs, Te(Te({}, this.state), this.$_state), n);
    u && (r && a.push(r), Ap(a), uf(null));
  }, t;
})(), zp = /* @__PURE__ */ (function(t) {
  sa(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.shouldComponentUpdate = function(n, a) {
    return Eo(this.props, n) || Eo(this.state, a);
  }, e;
})(ff);
function Gp(t) {
  var e = function(r) {
    e.current = r;
  };
  return e.current = t, e;
}
function HS(t) {
  return t._fr = !0, t;
}
function YS(t, e, r, n) {
  var a, s;
  return !((a = t?.prototype) === null || a === void 0) && a.render ? s = new t(e, r) : (s = new ff(e, r), s.constructor = t, t._fr ? (n.fr = Gp(), s.render = function() {
    return this.constructor(this.props, n.fr);
  }) : s.render = WS), s.$_p = n, s;
}
var XS = /* @__PURE__ */ (function(t) {
  sa(e, t);
  function e(n, a, s, u, f, c, v) {
    v === void 0 && (v = {});
    var p = t.call(this, n, a, s, u, f, c, lu(v, n.defaultProps)) || this;
    return p.typ = "comp", p._usefs = [], p._uefs = [], p._defs = [], p;
  }
  var r = e.prototype;
  return r.s = function(n, a) {
    var s = this.b;
    return s.shouldComponentUpdate(lu(n, this.t.defaultProps), a || s.state) !== !1;
  }, r.r = function(n, a, s) {
    var u, f, c = this, v = c.t;
    c.ps = lu(c.ps, c.t.defaultProps);
    var p = c.ps, h = !c.b, d = v.contextType, m = c.b, _ = d?.get(c);
    c._cs = a, h ? (m = YS(v, p, _, c), c.b = m) : (m.props = p, m.context = _);
    var x = m.state;
    c._usefs = [], c._uefs = [];
    var y = m.render();
    ((f = (u = y?.props) === null || u === void 0 ? void 0 : u.children) === null || f === void 0 ? void 0 : f.length) === 0 && (y.props.children = c.ps.children);
    var b = Te(Te({}, a), m.$_cs);
    ua(c, c._ps, y ? [y] : [], n, b), h ? c._uefs.push(function() {
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
})(Fo);
function qS(t, e, r) {
  var n = lf(bv(t), bv(e)), a = n.added, s = n.removed, u = n.changed;
  for (var f in a)
    r.setAttribute(f, a[f]);
  for (var c in u)
    r.setAttribute(c, u[c][1]);
  for (var v in s)
    r.removeAttribute(v);
}
function US(t, e, r) {
  var n = lf(t, e), a = n.added, s = n.removed;
  for (var u in s)
    r.e(u, !0);
  for (var f in a)
    r.e(f);
}
function lf(t, e) {
  var r = Ue(t), n = Ue(e), a = oa(r, n, function(c) {
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
function $S(t, e, r) {
  var n = r.style, a = lf(t, e), s = a.added, u = a.removed, f = a.changed;
  for (var c in s) {
    var v = So(c, "-");
    n.setProperty(v, s[c]);
  }
  for (var c in f) {
    var p = So(c, "-");
    n.setProperty(p, f[c][1]);
  }
  for (var c in u) {
    var h = So(c, "-");
    n.removeProperty(h);
  }
}
function VS(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var KS = /* @__PURE__ */ (function(t) {
  sa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var r = e.prototype;
  return r.e = function(n, a) {
    var s = this, u = s._es, f = s.b, c = VS(n);
    a ? (xr(f, c, u[n]), delete u[n]) : (u[n] = function(v) {
      var p, h;
      (h = (p = s.ps)[n]) === null || h === void 0 || h.call(p, v);
    }, Dr(f, c, u[n]));
  }, r.s = function(n) {
    return Eo(this.ps, n);
  }, r.r = function(n, a, s) {
    var u, f = this, c = !f.b, v = f.ps;
    if (c) {
      var p = Go(f.c), h = !1;
      f._svg || f.t === "svg" ? h = !0 : h = p && p.ownerSVGElement, f._svg = h;
      var d = (u = f._hyd) === null || u === void 0 ? void 0 : u.splice(0, 1)[0], m = f.t;
      if (d)
        f._hyd = [].slice.call(d.children || []);
      else {
        var _ = di(p);
        h ? d = _.createElementNS("http://www.w3.org/2000/svg", m) : d = _.createElement(m);
      }
      f.b = d;
    }
    ua(f, f._ps, v.children, n, a);
    var x = f.b, y = Cv(s), b = y[0], E = y[1], R = Cv(v), O = R[0], I = R[1];
    return qS(b, O, x), US(E, I, f), $S(s.style || {}, v.style || {}, x), n.push(function() {
      c ? f.md() : f.ud();
    }), !0;
  }, r.un = function() {
    var n = this, a = n._es, s = n.b;
    for (var u in a)
      xr(s, u, a[u]);
    n._ps.forEach(function(f) {
      f.un();
    }), n._es = {}, n._sel || Pp(s);
  }, e;
})(Fo);
function ji(t) {
  if (!t || hi(t))
    return t;
  var e = t.$_p._ps;
  return e.length ? ji(e[0].b) : null;
}
function Fp(t) {
  if (t) {
    if (t.b && hi(t.b))
      return t;
    var e = t._ps;
    return e.length ? Fp(e[0]) : null;
  }
}
function be(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = e || {}, s = a.key, u = a.ref, f = Op(a, ["key", "ref"]);
  return {
    type: t,
    key: s,
    ref: u,
    props: Te(Te({}, f), {
      children: wp(r).filter(function(c) {
        return c != null && c !== !1;
      })
    })
  };
}
var Lp = /* @__PURE__ */ (function(t) {
  sa(e, t);
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
})(Fo), ZS = /* @__PURE__ */ (function(t) {
  sa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var r = e.prototype;
  return r.r = function(n) {
    var a, s = this, u = !s.b;
    if (u) {
      var f = Go(s.c), c = (a = s._hyd) === null || a === void 0 ? void 0 : a.splice(0, 1)[0];
      s.b = c || di(f).createTextNode(s.t.replace("text_", ""));
    }
    return n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, r.un = function() {
    Pp(this.b);
  }, e;
})(Fo);
function JS(t, e, r) {
  var n = r.map(function(c) {
    return Yr(c) ? null : c.key;
  }), a = Sv(e.map(function(c) {
    return c.k;
  })), s = Sv(n), u = oa(a, s, function(c) {
    return c;
  });
  u.removed.forEach(function(c) {
    e.splice(c, 1)[0].un();
  }), u.ordered.forEach(function(c) {
    var v = c[0], p = c[1], h = e.splice(v, 1)[0];
    e.splice(p, 0, h);
    var d = ji(h.b), m = ji(e[p + 1] && e[p + 1].b);
    d && d.parentNode.insertBefore(d, m);
  }), u.added.forEach(function(c) {
    e.splice(c, 0, Ev(r[c], n[c], c, t));
  });
  var f = u.maintained.filter(function(c) {
    c[0];
    var v = c[1], p = r[v], h = e[v], d = Yr(p) ? "text_".concat(p) : p.type;
    return d !== h.t ? (h.un(), e.splice(v, 1, Ev(p, n[v], v, t)), !0) : (h.i = v, !1);
  });
  return yv(yv([], u.added, !0), f.map(function(c) {
    c[0];
    var v = c[1];
    return v;
  }));
}
function QS(t, e) {
  for (var r = t._ps, n = r.length, a = e.i + 1; a < n; ++a) {
    var s = ji(r[a].b);
    if (s)
      return s;
  }
  return null;
}
function Ev(t, e, r, n) {
  var a = n.d + 1;
  if (Yr(t) || si(t))
    return new ZS("text_".concat(t), a, e, r, n, null, {});
  var s = t.type, u = typeof s == "string" ? KS : XS;
  return new u(s, a, e, r, n, t.ref, t.props);
}
function ua(t, e, r, n, a, s, u) {
  var f = JS(t, e, r), c = t._hyd, v = e.filter(function(h, d) {
    return h._hyd = c, h.u(n, a, r[d], s, u);
  });
  t.typ === "container" && t._sel && e.forEach(function(h) {
    var d = Fp(h);
    d && (d._sel = !0);
  }), t._hyd = null;
  var p = Go(t);
  return p && f.reverse().forEach(function(h) {
    var d = e[h], m = ji(d.b);
    if (m && p !== m && !m.parentNode) {
      var _ = QS(t, d);
      p.insertBefore(m, _);
    }
  }), v.length > 0;
}
function jS(t, e, r, n) {
  r === void 0 && (r = e.__CROACT__), n === void 0 && (n = {});
  var a = !!r;
  r || (r = new Lp(e));
  var s = [];
  return ua(r, r._ps, t ? [t] : [], s, n, void 0, void 0), Ap(s), uf(null), a || (e.__CROACT__ = r), r;
}
function wv(t, e, r) {
  return !r && t && (r = new Lp(e.parentElement), r._hyd = [e], r._sel = !0), jS(t, e, r), r;
}
function Wp(t) {
  var e = Bp(), r = e._hs || (e._hs = []), n = NS(), a = r[n];
  if (kS(n + 1), a) {
    if (!Eo(a.deps, t.deps))
      return a.updated = !1, a;
    r[n] = t;
  } else
    r.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function tb(t, e) {
  var r = Wp({
    func: t,
    deps: e
  });
  return r.value;
}
function rb(t) {
  return tb(function() {
    return Gp(t);
  }, []);
}
function Np(t, e, r) {
  var n = Bp(), a = Wp({
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
function eb(t, e, r) {
  Np(function() {
    t?.(e());
  }, r, !0);
}
function cf(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function kp(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function Hp(t) {
  var e = t;
  if (typeof e > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    e = navigator.userAgent || "";
  }
  return e.toLowerCase();
}
function vf(t, e) {
  try {
    return new RegExp(t, "g").exec(e);
  } catch {
    return null;
  }
}
function nb() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, e = t.brands || t.uaList;
  return !!(e && e.length);
}
function ib(t, e) {
  var r = vf("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function Ou(t) {
  return t.replace(/_/g, ".");
}
function Yi(t, e) {
  var r = null, n = "-1";
  return cf(t, function(a) {
    var s = vf("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !s || a.brand ? !1 : (r = a, n = s[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = ib(a.versionTest.toLowerCase(), e) || n), n = Ou(n), !0);
  }), {
    preset: r,
    version: n
  };
}
function oo(t, e) {
  var r = {
    brand: "",
    version: "-1"
  };
  return cf(t, function(n) {
    var a = Yp(e, n);
    return a ? (r.brand = n.id, r.version = n.versionAlias || a.version, r.version !== "-1") : !1;
  }), r;
}
function Yp(t, e) {
  return kp(t, function(r) {
    var n = r.brand;
    return vf("" + e.test, n.toLowerCase());
  });
}
var Xp = [{
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
}], qp = [{
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
}], Iu = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], Up = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], $p = [{
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
function Vp(t) {
  return !!Yi(Up, t).preset;
}
function ab(t) {
  var e = Hp(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: Vp(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, s = Yi(Xp, e), u = s.preset, f = s.version, c = Yi($p, e), v = c.preset, p = c.version, h = Yi(qp, e);
  if (n.chromium = !!h.preset, n.chromiumVersion = h.version, !n.chromium) {
    var d = Yi(Iu, e);
    n.webkit = !!d.preset, n.webkitVersion = d.version;
  }
  return v && (a.name = v.id, a.version = p, a.majorVersion = parseInt(p, 10)), u && (n.name = u.id, n.version = f, n.webview && a.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: a,
    isMobile: r,
    isHints: !1
  };
}
function ob(t) {
  var e = navigator.userAgentData, r = (e.uaList || e.brands).slice(), n = e.mobile || !1, a = r[0], s = (e.platform || navigator.platform).toLowerCase(), u = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!oo(Up, r).brand || Vp(Hp())
  }, f = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  u.webkit = !u.chromium && cf(Iu, function(d) {
    return Yp(r, d);
  });
  var c = oo(qp, r);
  if (u.chromium = !!c.brand, u.chromiumVersion = c.version || "-1", !u.chromium) {
    var v = oo(Iu, r);
    u.webkit = !!v.brand, u.webkitVersion = v.version || "-1";
  }
  var p = kp($p, function(d) {
    return new RegExp("" + d.test, "g").exec(s);
  });
  f.name = p ? p.id : "";
  {
    var h = oo(Xp, r);
    u.name = h.brand || u.name, u.version = h.brand && t ? t.uaFullVersion : h.version;
  }
  return u.webkit && (f.name = n ? "ios" : "mac"), f.name === "ios" && u.webview && (u.version = "-1"), f.version = Ou(f.version), u.version = Ou(u.version), f.majorVersion = parseInt(f.version, 10), u.majorVersion = parseInt(u.version, 10), {
    browser: u,
    os: f,
    isMobile: n,
    isHints: !0
  };
}
function sb(t) {
  return nb() ? ob() : ab(t);
}
function ub(t, e, r, n, a, s) {
  for (var u = 0; u < a; ++u) {
    var f = r + u * a, c = n + u * a;
    t[f] += t[c] * s, e[f] += e[c] * s;
  }
}
function fb(t, e, r, n, a) {
  for (var s = 0; s < a; ++s) {
    var u = r + s * a, f = n + s * a, c = t[u], v = e[u];
    t[u] = t[f], t[f] = c, e[u] = e[f], e[f] = v;
  }
}
function lb(t, e, r, n, a) {
  for (var s = 0; s < n; ++s) {
    var u = r + s * n;
    t[u] /= a, e[u] /= a;
  }
}
function Kp(t, e, r) {
  for (var n = t.slice(), a = 0; a < r; ++a)
    n[a * r + e - 1] = 0, n[(e - 1) * r + a] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function Ie(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = nr(e), a = 0; a < e; ++a) {
    var s = e * a + a;
    if (!Tt(r[s], dr)) {
      for (var u = a + 1; u < e; ++u)
        if (r[e * a + u]) {
          fb(r, n, a, u, e);
          break;
        }
    }
    if (!Tt(r[s], dr))
      return [];
    lb(r, n, a, e, r[s]);
    for (var u = 0; u < e; ++u) {
      var f = u, c = u + a * e, v = r[c];
      !Tt(v, dr) || a === u || ub(r, n, f, a, e, -v);
    }
  }
  return n;
}
function cb(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = 0; n < e; ++n)
    for (var a = 0; a < e; ++a)
      r[a * e + n] = t[e * n + a];
  return r;
}
function Zp(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = t[e * e - 1], a = 0; a < e - 1; ++a)
    r[a] = t[e * (e - 1) + a] / n;
  return r[e - 1] = 0, r;
}
function vb(t, e) {
  for (var r = nr(e), n = 0; n < e - 1; ++n)
    r[e * (e - 1) + n] = t[n] || 0;
  return r;
}
function On(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function we(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = nr(r), a = Math.min(e, r), s = 0; s < a - 1; ++s) {
    for (var u = 0; u < a - 1; ++u)
      n[s * r + u] = t[s * e + u];
    n[(s + 1) * r - 1] = t[(s + 1) * e - 1], n[(r - 1) * r + s] = t[(e - 1) * e + s];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function wo(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = nr(t);
  return e.forEach(function(a) {
    n = jt(n, a, t);
  }), n;
}
function jt(t, e, r) {
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
function $t(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] + e[a];
  return n;
}
function bt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] - e[a];
  return n;
}
function pb(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function Jp(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Tr(t, e, r) {
  r === void 0 && (r = e.length);
  var n = jt(t, e, r), a = n[r - 1];
  return n.map(function(s) {
    return s / a;
  });
}
function db(t, e) {
  return jt(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function hb(t, e) {
  return jt(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function gb(t, e) {
  return jt(t, la(e, 4));
}
function so(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, a = e[1], s = a === void 0 ? 1 : a, u = e[2], f = u === void 0 ? 1 : u;
  return jt(t, [n, 0, 0, 0, 0, s, 0, 0, 0, 0, f, 0, 0, 0, 0, 1], 4);
}
function fa(t, e) {
  return Tr(la(e, 3), On(t, 3));
}
function cu(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, a = e[1], s = a === void 0 ? 0 : a, u = e[2], f = u === void 0 ? 0 : u;
  return jt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, s, f, 1], 4);
}
function Dv(t, e) {
  return jt(t, e, 4);
}
function la(t, e) {
  var r = Math.cos(t), n = Math.sin(t), a = nr(e);
  return a[0] = r, a[1] = n, a[e] = -n, a[e + 1] = r, a;
}
function nr(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function pf(t, e) {
  for (var r = nr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[(e + 1) * a] = t[a];
  return r;
}
function In(t, e) {
  for (var r = nr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[e * (e - 1) + a] = t[a];
  return r;
}
function df(t, e, r, n, a, s, u, f) {
  var c = t[0], v = t[1], p = e[0], h = e[1], d = r[0], m = r[1], _ = n[0], x = n[1], y = a[0], b = a[1], E = s[0], R = s[1], O = u[0], I = u[1], w = f[0], D = f[1], T = [c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, -y * c, -b * c, -E * p, -R * p, -O * d, -I * d, -w * _, -D * _, -y * v, -b * v, -E * h, -R * h, -O * m, -I * m, -w * x, -D * x], P = Ie(T, 8);
  if (!P.length)
    return [];
  var B = jt(P, [y, b, E, R, O, I, w, D], 8);
  return B[8] = 1, we(cb(B), 3, 4);
}
var Ui = function() {
  return Ui = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Ui.apply(this, arguments);
};
function mb() {
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
function ta(t, e) {
  return e === void 0 && (e = 0), ti(ui(t, e));
}
function _b(t, e) {
  var r = Tr(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function ti(t) {
  var e = mb();
  return t.forEach(function(r) {
    var n = r.matrixFunction, a = r.functionValue;
    n && (e = n(e, a));
  }), e;
}
function ui(t, e) {
  e === void 0 && (e = 0);
  var r = hr(t) ? t : ln(t);
  return r.map(function(n) {
    var a = bp(n), s = a.prefix, u = a.value, f = null, c = s, v = "";
    if (s === "translate" || s === "translateX" || s === "translate3d") {
      var p = Ee(e) ? Ui(Ui({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, h = Tn(u).map(function(L, Y) {
        return Y === 0 && "x%" in p ? p["%"] = e["x%"] : Y === 1 && "y%" in p ? p["%"] = e["y%"] : p["%"] = e["o%"], Qt(L, p);
      }), d = h[0], m = h[1], _ = m === void 0 ? 0 : m, x = h[2], y = x === void 0 ? 0 : x;
      f = cu, v = [d, _, y];
    } else if (s === "translateY") {
      var b = Ee(e) ? Ui({ "%": e["y%"] }, e) : {
        "%": e
      }, _ = Qt(u, b);
      f = cu, v = [0, _, 0];
    } else if (s === "translateZ") {
      var y = parseFloat(u);
      f = cu, v = [0, 0, y];
    } else if (s === "scale" || s === "scale3d") {
      var E = Tn(u).map(function(L) {
        return parseFloat(L);
      }), R = E[0], O = E[1], I = O === void 0 ? R : O, w = E[2], D = w === void 0 ? 1 : w;
      f = so, v = [R, I, D];
    } else if (s === "scaleX") {
      var R = parseFloat(u);
      f = so, v = [R, 1, 1];
    } else if (s === "scaleY") {
      var I = parseFloat(u);
      f = so, v = [1, I, 1];
    } else if (s === "scaleZ") {
      var D = parseFloat(u);
      f = so, v = [1, 1, D];
    } else if (s === "rotate" || s === "rotateZ" || s === "rotateX" || s === "rotateY") {
      var T = aa(u), P = T.unit, B = T.value, H = P === "rad" ? B : B * Math.PI / 180;
      s === "rotate" || s === "rotateZ" ? (c = "rotateZ", f = gb) : s === "rotateX" ? f = db : s === "rotateY" && (f = hb), v = H;
    } else if (s === "matrix3d")
      f = Dv, v = Tn(u).map(function(L) {
        return parseFloat(L);
      });
    else if (s === "matrix") {
      var N = Tn(u).map(function(L) {
        return parseFloat(L);
      });
      f = Dv, v = [
        N[0],
        N[1],
        0,
        0,
        N[2],
        N[3],
        0,
        0,
        0,
        0,
        1,
        0,
        N[4],
        N[5],
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
var Pu = function(t, e) {
  return Pu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Pu(t, e);
};
function xb(t, e) {
  Pu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Qp = typeof Map == "function" ? void 0 : /* @__PURE__ */ (function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
})(), jp = /* @__PURE__ */ (function(t) {
  xb(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, Qp) || this;
  }
  return e;
})(LS);
function yb(t, e) {
  return oa(t, e, Qp);
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
var Au = function() {
  return Au = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Au.apply(this, arguments);
};
function Sb() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
var Lo = /* @__PURE__ */ (function() {
  function t() {
    this._events = {};
  }
  var e = t.prototype;
  return e.on = function(r, n) {
    if (Ee(r))
      for (var a in r)
        this.on(a, r[a]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if (Ee(r))
      for (var a in r)
        this.off(a);
    else if (!n)
      this._events[r] = [];
    else {
      var s = this._events[r];
      if (s) {
        var u = qe(s, function(f) {
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
    }, n.currentTarget = this, Sb(s).forEach(function(f) {
      f.listener(n), f.once && a.off(r, f.listener);
    }), !u;
  }, e.trigger = function(r, n) {
    return n === void 0 && (n = {}), this.emit(r, n);
  }, e._addEvent = function(r, n, a) {
    var s = this._events;
    s[r] = s[r] || [];
    var u = s[r];
    u.push(Au({
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
var Bu = function(t, e) {
  return Bu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Bu(t, e);
};
function bb(t, e) {
  Bu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ri = function() {
  return ri = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ri.apply(this, arguments);
};
function Cb(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function Mv(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function uo(t) {
  if (t) {
    if (Yr(t))
      return document.querySelector(t);
  } else return null;
  if (ef(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var Eb = /* @__PURE__ */ (function(t) {
  bb(e, t);
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
    var s = uo(a.container);
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
      return p.top > u - c ? (h[1] > p.top || u < h[1]) && (d[1] = -1) : p.top + p.height < u + c && (h[1] < p.top + p.height || u > h[1]) && (d[1] = 1), p.left > s - c ? (h[0] > p.left || s < h[0]) && (d[0] = -1) : p.left + p.width < s + c && (h[0] < p.left + p.width || s > h[0]) && (d[0] = 1), !d[0] && !d[1] ? !1 : this._continueDrag(ri(ri({}, a), {
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
    var s = a.container, u = a.getScrollPosition, f = u === void 0 ? Cb : u;
    return f({
      container: uo(s),
      direction: n
    });
  }, r._continueDrag = function(n) {
    var a = this, s, u = n.container, f = n.direction, c = n.throttleTime, v = n.useScroll, p = n.isDrag, h = n.inputEvent;
    if (!(!this._flag || p && this._isWait)) {
      var d = Qi(), m = Math.max(c + this._prevTime - d, 0);
      if (m > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          a._continueDrag(n);
        }, m), !1;
      this._prevTime = d;
      var _ = this._getScrollPosition(f, n);
      this._prevScrollPos = _, p && (this._isWait = !0), v || (this._lock = !0);
      var x = {
        container: uo(u),
        direction: f,
        inputEvent: h
      };
      return (s = n.requestScroll) === null || s === void 0 || s.call(n, x), this.emit("scroll", x), this._isWait = !1, v || this.checkScroll(ri(ri({}, n), {
        prevScrollPos: _,
        direction: f,
        inputEvent: h
      }));
    }
  }, r._registerScrollEvent = function(n) {
    this._unregisterScrollEvent();
    var a = n.checkScrollEvent;
    if (a) {
      var s = a === !0 ? Mv : a, u = uo(n.container);
      a === !0 && (u === document.body || u === document.documentElement) ? this._unregister = Mv(window, this._onScroll) : this._unregister = s(u, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, e;
})(Lo);
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
function wb() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function Hr(t) {
  return Tt(t, dr);
}
function Db(t, e) {
  return t.every(function(r, n) {
    return Hr(r - e[n]) === 0;
  });
}
function Mb(t, e) {
  return !Hr(t[0] - e[0]) && !Hr(t[1] - e[1]);
}
function td(t) {
  return t.length < 3 ? 0 : Math.abs(TS(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function Rv(t, e) {
  var r = e.width, n = e.height, a = e.left, s = e.top, u = Pn(t), f = u.minX, c = u.minY, v = u.maxX, p = u.maxY, h = r / (v - f), d = n / (p - c);
  return t.map(function(m) {
    return [a + (m[0] - f) * h, s + (m[1] - c) * d];
  });
}
function Pn(t) {
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
function zu(t, e, r) {
  var n = t[0], a = t[1], s = Pn(e), u = s.minX, f = s.maxX, c = [[u, a], [f, a]], v = Do(c[0], c[1]), p = Gu(e), h = [];
  if (p.forEach(function(_) {
    var x = Do(_[0], _[1]), y = _[0];
    if (Db(v, x))
      h.push({
        pos: t,
        line: _,
        type: "line"
      });
    else {
      var b = rd(hf(v, x), [c, _]);
      b.forEach(function(E) {
        _.some(function(R) {
          return Mb(R, E);
        }) ? h.push({
          pos: E,
          line: _,
          type: "point"
        }) : Hr(y[1] - a) !== 0 && h.push({
          pos: E,
          line: _,
          type: "intersection"
        });
      });
    }
  }), Xr(h, function(_) {
    return _[0] === n;
  }))
    return !0;
  var d = 0, m = {};
  return h.forEach(function(_) {
    var x = _.pos, y = _.type, b = _.line;
    if (!(x[0] > n))
      if (y === "intersection")
        ++d;
      else {
        if (y === "line")
          return;
        if (y === "point") {
          var E = Xr(b, function(I) {
            return I[1] !== a;
          }), R = m[x[0]], O = E[1] > a ? 1 : -1;
          R ? R !== O && ++d : m[x[0]] = O;
        }
      }
  }), d % 2 === 1;
}
function Do(t, e) {
  var r = t[0], n = t[1], a = e[0], s = e[1], u = a - r, f = s - n;
  Math.abs(u) < dr && (u = 0), Math.abs(f) < dr && (f = 0);
  var c = 0, v = 0, p = 0;
  return u ? f ? (c = -f / u, v = 1, p = -c * r - n) : (v = 1, p = -n) : f && (c = -1, p = r), [c, v, p];
}
function hf(t, e) {
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
  return p.map(function(b) {
    return [b[0], b[1]];
  });
}
function rd(t, e) {
  var r = e.map(function(h) {
    return [0, 1].map(function(d) {
      return [Math.min(h[0][d], h[1][d]), Math.max(h[0][d], h[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], s = a[0], u = a[1];
    if (Hr(s - t[1][0])) {
      if (!Hr(u - t[1][1])) {
        var v = Math.max.apply(Math, r.map(function(h) {
          return h[0][0];
        })), p = Math.min.apply(Math, r.map(function(h) {
          return h[0][1];
        }));
        if (Hr(v - p) > 0)
          return [];
        n = [[v, u], [p, u]];
      }
    } else {
      var f = Math.max.apply(Math, r.map(function(h) {
        return h[1][0];
      })), c = Math.min.apply(Math, r.map(function(h) {
        return h[1][1];
      }));
      if (Hr(f - c) > 0)
        return [];
      n = [[s, f], [s, c]];
    }
  }
  return n.length || (n = t.filter(function(h) {
    var d = h[0], m = h[1];
    return r.every(function(_) {
      return 0 <= Hr(d - _[0][0]) && 0 <= Hr(_[0][1] - d) && 0 <= Hr(m - _[1][0]) && 0 <= Hr(_[1][1] - m);
    });
  })), n.map(function(h) {
    return [Hr(h[0]), Hr(h[1])];
  });
}
function Gu(t) {
  return wb(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function Rb(t, e) {
  var r = t.slice(), n = e.slice();
  _v(r) === -1 && r.reverse(), _v(n) === -1 && n.reverse();
  var a = Gu(r), s = Gu(n), u = a.map(function(p) {
    return Do(p[0], p[1]);
  }), f = s.map(function(p) {
    return Do(p[0], p[1]);
  }), c = [];
  u.forEach(function(p, h) {
    var d = a[h], m = [];
    f.forEach(function(_, x) {
      var y = hf(p, _), b = rd(y, [d, s[x]]);
      m.push.apply(m, b.map(function(E) {
        return {
          index1: h,
          index2: x,
          pos: E,
          type: "intersection"
        };
      }));
    }), m.sort(function(_, x) {
      return Ye(d[0], _.pos) - Ye(d[0], x.pos);
    }), c.push.apply(c, m), zu(d[1], n) && c.push({
      index1: h,
      index2: -1,
      pos: d[1],
      type: "inside"
    });
  }), s.forEach(function(p, h) {
    if (zu(p[1], r)) {
      var d = !1, m = qe(c, function(_) {
        var x = _.index2;
        return x === h ? (d = !0, !1) : !!d;
      });
      m === -1 && (d = !1, m = qe(c, function(_) {
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
function Tb(t, e) {
  var r = Rb(t, e);
  return r.map(function(n) {
    var a = n.pos;
    return a;
  });
}
function Ob(t, e) {
  var r = Tb(t, e);
  return td(r);
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
var Fu = function(t, e) {
  return Fu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Fu(t, e);
};
function Ib(t, e) {
  Fu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var pr = function() {
  return pr = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, pr.apply(this, arguments);
};
function Pb(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function vu(t) {
  return Pb([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function Ab(t) {
  return t.touches && t.touches.length >= 2;
}
function fo(t) {
  return t ? t.touches ? zb(t.touches) : [ed(t)] : [];
}
function Bb(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function Tv(t, e, r) {
  var n = r.length, a = $i(t, n), s = a.clientX, u = a.clientY, f = a.originalClientX, c = a.originalClientY, v = $i(e, n), p = v.clientX, h = v.clientY, d = $i(r, n), m = d.clientX, _ = d.clientY, x = s - p, y = u - h, b = s - m, E = u - _;
  return {
    clientX: f,
    clientY: c,
    deltaX: x,
    deltaY: y,
    distX: b,
    distY: E
  };
}
function pu(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function zb(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(ed(t[n]));
  return r;
}
function ed(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function $i(t, e) {
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
var du = /* @__PURE__ */ (function() {
  function t(e) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = e, this.prevClients = e, this.length = e.length;
  }
  return t.prototype.getAngle = function(e) {
    return e === void 0 && (e = this.prevClients), vu(e);
  }, t.prototype.getRotation = function(e) {
    return e === void 0 && (e = this.prevClients), vu(e) - vu(this.startClients);
  }, t.prototype.getPosition = function(e, r) {
    e === void 0 && (e = this.prevClients);
    var n = Tv(e || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, s = n.deltaY;
    return this.movement += Math.sqrt(a * a + s * s), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, a = Math.min(this.length, r.length), s = [], u = 0; u < a; ++u)
      s[u] = Tv([e[u]], [r[u]], [n[u]]);
    return s;
  }, t.prototype.getMovement = function(e) {
    var r = this.movement;
    if (!e)
      return r;
    var n = $i(e, this.length), a = $i(this.prevClients, this.length), s = n.clientX - a.clientX, u = n.clientY - a.clientY;
    return Math.sqrt(s * s + u * u) + r;
  }, t.prototype.getDistance = function(e) {
    return e === void 0 && (e = this.prevClients), pu(e);
  }, t.prototype.getScale = function(e) {
    return e === void 0 && (e = this.prevClients), pu(e) / pu(this.startClients);
  }, t.prototype.move = function(e, r) {
    this.startClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    });
  }, t;
})(), Ov = ["textarea", "input"], Gb = /* @__PURE__ */ (function(t) {
  Ib(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(d, m) {
      if (m === void 0 && (m = !0), !(!a.flag && d.cancelable === !1)) {
        var _ = d.type.indexOf("drag") >= -1;
        if (!(a.flag && _)) {
          a._isDragAPI = !0;
          var x = a.options, y = x.container, b = x.pinchOutside, E = x.preventWheelClick, R = x.preventRightClick, O = x.preventDefault, I = x.checkInput, w = x.dragFocusedInput, D = x.preventClickEventOnDragStart, T = x.preventClickEventOnDrag, P = x.preventClickEventByCondition, B = a._useTouch, H = !a.flag;
          if (a._isSecondaryButton = d.which === 3 || d.button === 2, E && (d.which === 2 || d.button === 1) || R && (d.which === 3 || d.button === 2))
            return a.stop(), !1;
          if (H) {
            var N = a._window.document.activeElement, L = d.target;
            if (L) {
              var Y = L.tagName.toLowerCase(), X = Ov.indexOf(Y) > -1, J = L.isContentEditable;
              if (X || J) {
                if (I || !w && N === L)
                  return !1;
                if (N && (N === L || J && N.isContentEditable && N.contains(L)))
                  if (w)
                    L.blur();
                  else
                    return !1;
              } else if ((O || d.type === "touchstart") && N) {
                var j = N.tagName.toLowerCase();
                (N.isContentEditable || Ov.indexOf(j) > -1) && N.blur();
              }
              (D || T || P) && Dr(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new du(fo(d))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = m, a._dragFlag = !0, a._prevInputEvent = d, a.data = {}, a.doubleFlag = Qi() - a.prevTime < 200, a._isMouseEvent = Bb(d), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
            var V = a._preventMouseEvent || a.emit("dragStart", pr(pr({ data: a.data, datas: a.data, inputEvent: d, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, isTrusted: m, isDouble: a.doubleFlag }, a.getCurrentStore().getPosition()), { preventDefault: function() {
              d.preventDefault();
            }, preventDrag: function() {
              a._dragFlag = !1;
            } }));
            V === !1 && a.stop(), a._isMouseEvent && a.flag && O && d.preventDefault();
          }
          if (!a.flag)
            return !1;
          var nt = 0;
          if (H ? (a._attchDragEvent(), B && b && (nt = setTimeout(function() {
            Dr(y, "touchstart", a.onDragStart, {
              passive: !1
            });
          }))) : B && b && xr(y, "touchstart", a.onDragStart), a.flag && Ab(d)) {
            if (clearTimeout(nt), H && d.touches.length !== d.changedTouches.length)
              return;
            a.pinchFlag || a.onPinchStart(d);
          }
        }
      }
    }, a.onDrag = function(d, m) {
      if (a.flag) {
        var _ = a.options.preventDefault;
        !a._isMouseEvent && _ && d.preventDefault(), a._prevInputEvent = d;
        var x = fo(d), y = a.moveClients(x, d, !1);
        if (a._dragFlag) {
          if (a.pinchFlag || y.deltaX || y.deltaY) {
            var b = a._preventMouseEvent || a.emit("drag", pr(pr({}, y), { isScroll: !!m, inputEvent: d }));
            if (b === !1) {
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
        var m = a.options, _ = m.pinchOutside, x = m.container, y = m.preventClickEventOnDrag, b = m.preventClickEventOnDragStart, E = m.preventClickEventByCondition, R = a.isDrag;
        (y || b || E) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !E && !b && y && !R && a._allowClickEvent(), a._useTouch && _ && xr(x, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(d);
        var O = d?.touches ? fo(d) : [], I = O.length;
        I === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new du(O));
        var w = a._getPosition(), D = Qi(), T = !R && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = R || T ? 0 : D, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", pr({ data: a.data, datas: a.data, isDouble: T, isDrag: R, isClick: !R, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: d, isTrusted: a._isTrusted }, w)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
          a._preventMouseEvent = !1;
        }, 200)), a._isIdle = !0);
      }
    }, a.onBlur = function() {
      a.onDragEnd();
    }, a._allowClickEvent = function() {
      xr(a._window, "click", a._onClick, !0);
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
    a._window = Tp(u) ? u : fn(u), a.options = pr({ checkInput: !1, container: u && !("document" in u) ? fn(u) : u, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var f = a.options, c = f.container, v = f.events, p = f.checkWindowBlur;
    if (a._useDrag = v.indexOf("drag") > -1, a._useTouch = v.indexOf("touch") > -1, a._useMouse = v.indexOf("mouse") > -1, a.targets = s, a._useDrag && s.forEach(function(d) {
      Dr(d, "dragstart", a.onDragStart);
    }), a._useMouse && (s.forEach(function(d) {
      Dr(d, "mousedown", a.onDragStart), Dr(d, "mousemove", a._passCallback);
    }), Dr(c, "contextmenu", a._onContextMenu)), p && Dr(fn(), "blur", a.onBlur), a._useTouch) {
      var h = {
        passive: !1
      };
      s.forEach(function(d) {
        Dr(d, "touchstart", a.onDragStart, h), Dr(d, "touchmove", a._passCallback, h);
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
    return r === void 0 && (r = this._prevInputEvent), pr(pr({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: r });
  }, e.prototype.getEventData = function() {
    return this.data;
  }, e.prototype.getEventDatas = function() {
    return this.data;
  }, e.prototype.unset = function() {
    var r = this, n = this.targets, a = this.options.container;
    this.off(), xr(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(s) {
      xr(s, "dragstart", r.onDragStart);
    }), this._useMouse && (n.forEach(function(s) {
      xr(s, "mousedown", r.onDragStart);
    }), xr(a, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(s) {
      xr(s, "touchstart", r.onDragStart);
    }), xr(a, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, e.prototype.onPinchStart = function(r) {
    var n = this, a = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > a)) {
      var s = new du(fo(r));
      this.pinchFlag = !0, this._addStore(s);
      var u = this.emit("pinchStart", pr(pr({ data: this.data, datas: this.data, angle: s.getAngle(), touches: this.getCurrentStore().getPositions() }, s.getPosition()), { inputEvent: r, isTrusted: this._isTrusted, preventDefault: function() {
        r.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      u === !1 && (this.pinchFlag = !1);
    }
  }, e.prototype.onPinch = function(r, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var a = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", pr(pr({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: a.getAngle(n), rotation: a.getRotation(n), touches: a.getPositions(n), scale: a.getScale(n), distance: a.getDistance(n) }, a.getPosition(n)), { inputEvent: r, isTrusted: this._isTrusted }));
    }
  }, e.prototype.onPinchEnd = function(r) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var a = this.getCurrentStore();
      this.emit("pinchEnd", pr(pr({ data: this.data, datas: this.data, isPinch: n, touches: a.getPositions() }, a.getPosition()), { inputEvent: r }));
    }
  }, e.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, e.prototype.moveClients = function(r, n, a) {
    var s = this._getPosition(r, a), u = this.isDrag;
    (s.deltaX || s.deltaY) && (this.isDrag = !0);
    var f = !1;
    return !u && this.isDrag && (f = !0), pr(pr({ data: this.data, datas: this.data }, s), { movement: this.getMovement(r), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: f });
  }, e.prototype._addStore = function(r) {
    this.clientStores.splice(0, 0, r);
  }, e.prototype._getPosition = function(r, n) {
    var a = this.getCurrentStore(), s = a.getPosition(r, n), u = this.clientStores.slice(1).reduce(function(v, p) {
      var h = p.getPosition();
      return v.distX += h.distX, v.distY += h.distY, v;
    }, s), f = u.distX, c = u.distY;
    return pr(pr({}, s), { distX: f, distY: c });
  }, e.prototype._attchDragEvent = function() {
    var r = this._window, n = this.options.container, a = {
      passive: !1
    };
    this._isDragAPI && (Dr(n, "dragover", this.onDrag, a), Dr(r, "dragend", this.onDragEnd)), this._useMouse && (Dr(n, "mousemove", this.onDrag), Dr(r, "mouseup", this.onDragEnd)), this._useTouch && (Dr(n, "touchmove", this.onDrag, a), Dr(r, "touchend", this.onDragEnd, a), Dr(r, "touchcancel", this.onDragEnd, a));
  }, e.prototype._dettachDragEvent = function() {
    var r = this._window, n = this.options.container;
    this._isDragAPI && (xr(n, "dragover", this.onDrag), xr(r, "dragend", this.onDragEnd)), this._useMouse && (xr(n, "mousemove", this.onDrag), xr(r, "mouseup", this.onDragEnd)), this._useTouch && (xr(n, "touchstart", this.onDragStart), xr(n, "touchmove", this.onDrag), xr(r, "touchend", this.onDragEnd), xr(r, "touchcancel", this.onDragEnd));
  }, e.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, e;
})(Lo);
function Fb(t) {
  for (var e = 5381, r = t.length; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e >>> 0;
}
var Lb = Fb;
function Wb(t) {
  return Lb(t).toString(36);
}
function Nb(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function kb(t, e, r) {
  return r.original ? e : e.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, a) {
    var s = a.trim();
    return (s ? Tn(s) : [""]).map(function(u) {
      var f = u.trim();
      return f.indexOf("@") === 0 ? f : f.indexOf(":global") > -1 ? f.replace(/\:global/g, "") : f.indexOf(":host") > -1 ? "".concat(f.replace(/\:host/g, ".".concat(t))) : f ? ".".concat(t, " ").concat(f) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function Hb(t, e, r, n, a) {
  var s = di(n), u = s.createElement("style");
  return u.setAttribute("type", "text/css"), u.setAttribute("data-styled-id", t), u.setAttribute("data-styled-count", "1"), r.nonce && u.setAttribute("nonce", r.nonce), u.innerHTML = kb(t, e, r), (a || s.head || s.body).appendChild(u), u;
}
function Yb(t) {
  var e = "rCS" + Wb(t);
  return {
    className: e,
    inject: function(r, n) {
      n === void 0 && (n = {});
      var a = Nb(r), s = (a || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(e, '"]'));
      if (!s)
        s = Hb(e, t, n, r, a);
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
var Lu = function() {
  return Lu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Lu.apply(this, arguments);
};
function Xb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function nd(t, e) {
  var r = Yb(e), n = r.className;
  return HS(function(a, s) {
    var u = a.className, f = u === void 0 ? "" : u;
    a.cspNonce;
    var c = Xb(a, ["className", "cspNonce"]), v = rb();
    return eb(s, function() {
      return v.current;
    }, []), Np(function() {
      var p = r.inject(v.current, {
        nonce: a.cspNonce
      });
      return function() {
        p.destroy();
      };
    }, []), be(t, Lu({
      ref: v,
      "data-styled-id": n,
      className: "".concat(f, " ").concat(n)
    }, c));
  });
}
var Wu = function(t, e) {
  return Wu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Wu(t, e);
};
function ca(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Wu(t, e);
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
function qb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function Ub(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
function $b(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function F(t, e) {
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
function it(t, e, r) {
  if (arguments.length === 2) for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function va(t, e) {
  return z({ events: [], props: [], name: t }, e);
}
var Vb = ["n", "w", "s", "e"], gf = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function Kb(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function Zb(t) {
  var e = Kb(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var gi = sb(), id = gi.browser.webkit, ad = id && (function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
})(), od = gi.browser.name, sd = parseInt(gi.browser.version, 10), Jb = od === "chrome", Qb = gi.browser.chromium, jb = parseInt(gi.browser.chromiumVersion, 10) || 0, tC = Jb && sd >= 109 || Qb && jb >= 109, rC = od === "firefox", eC = parseInt(gi.browser.webkitVersion, 10) >= 612 || sd >= 15, mf = "moveable-", nC = gf.map(function(t) {
  var e = "", r = "", n = "center", a = "center", s = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (e = "top: ".concat(s, ";"), a = "bottom"), t.indexOf("s") > -1 && (e = "top: 0px;", a = "top"), t.indexOf("w") > -1 && (r = "left: ".concat(s, ";"), n = "right"), t.indexOf("e") > -1 && (r = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(r).concat(e, `
        transform-origin: `).concat(n, " ").concat(a, `;
    }`);
}).join(`
`), iC = `
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
`.concat(nC, `
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
`).concat(Zb(t), `
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

`).concat(ad ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), aC = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Nu = 1e-4, Fr = 1e-7, lo = 1e-9, ku = Math.pow(10, 10), Iv = -ku, oC = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, _f = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, ud = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, fd = [
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
function pa(t, e, r, n, a, s) {
  var u, f;
  s === void 0 && (s = "draggable");
  var c = (f = (u = e.gestos[s]) === null || u === void 0 ? void 0 : u.move(r, t.inputEvent)) !== null && f !== void 0 ? f : {}, v = c.originalDatas || c.datas, p = v[s] || (v[s] = {});
  return z(z({}, c), { isPinch: !!n, parentEvent: !0, datas: p, originalDatas: t.originalDatas });
}
var fi = /* @__PURE__ */ (function() {
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
function oi(t, e, r, n) {
  var a = t.length === 16, s = a ? 4 : 3, u = zn(t, r, n, s), f = F(u, 4), c = F(f[0], 2), v = c[0], p = c[1], h = F(f[1], 2), d = h[0], m = h[1], _ = F(f[2], 2), x = _[0], y = _[1], b = F(f[3], 2), E = b[0], R = b[1], O = F(sr(t, e, s), 2), I = O[0], w = O[1], D = Math.min(v, d, x, E), T = Math.min(p, m, y, R), P = Math.max(v, d, x, E), B = Math.max(p, m, y, R);
  v = v - D || 0, d = d - D || 0, x = x - D || 0, E = E - D || 0, p = p - T || 0, m = m - T || 0, y = y - T || 0, R = R - T || 0, I = I - D || 0, w = w - T || 0;
  var H = t[0], N = t[s + 1], L = zr(H * N);
  return {
    left: D,
    top: T,
    right: P,
    bottom: B,
    origin: [I, w],
    pos1: [v, p],
    pos2: [d, m],
    pos3: [x, y],
    pos4: [E, R],
    direction: L
  };
}
function ld(t, e) {
  var r = e.clientX, n = e.clientY, a = e.datas, s = t.state, u = s.moveableClientRect, f = s.rootMatrix, c = s.is3d, v = s.pos1, p = u.left, h = u.top, d = c ? 4 : 3, m = F(bt(vi(f, [r - p, n - h], d), v), 2), _ = m[0], x = m[1], y = F(Pe({ datas: a, distX: _, distY: x }), 2), b = y[0], E = y[1];
  return [b, E];
}
function Bn(t, e) {
  var r = e.datas, n = t.state, a = n.allMatrix, s = n.beforeMatrix, u = n.is3d, f = n.left, c = n.top, v = n.origin, p = n.offsetMatrix, h = n.targetMatrix, d = n.transformOrigin, m = u ? 4 : 3;
  r.is3d = u, r.matrix = a, r.targetMatrix = h, r.beforeMatrix = s, r.offsetMatrix = p, r.transformOrigin = d, r.inverseMatrix = Ie(a, m), r.inverseBeforeMatrix = Ie(s, m), r.absoluteOrigin = On($t([f, c], v), m), r.startDragBeforeDist = Tr(r.inverseBeforeMatrix, r.absoluteOrigin, m), r.startDragDist = Tr(r.inverseMatrix, r.absoluteOrigin, m);
}
function sC(t) {
  return oi(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Wo(t, e, r) {
  var n = e.datas, a = e.originalDatas.beforeRenderable, s = n.transformIndex, u = a.nextTransforms, f = u.length, c = a.nextTransformAppendedIndexes, v = -1;
  s === -1 ? (r === "translate" ? v = 0 : r === "rotate" && (v = qe(u, function(m) {
    return m.match(/scale\(/g);
  })), v === -1 && (v = u.length), n.transformIndex = v) : Xr(c, function(m) {
    return m.index === s && m.functionName === r;
  }) ? v = s : v = s + c.filter(function(m) {
    return m.index < s;
  }).length;
  var p = AE(u, t.state, v), h = p.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = p.beforeFunctionTexts, n.afterFunctionTexts = p.afterFunctionTexts, n.beforeTransform = p.beforeFunctionMatrix, n.beforeTransform2 = p.beforeFunctionMatrix2, n.targetTansform = p.targetFunctionMatrix, n.afterTransform = p.afterFunctionMatrix, n.afterTransform2 = p.afterFunctionMatrix2, n.targetAllTransform = p.allFunctionMatrix, h.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : f > v && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = it(it([], F(c), !1), [{
    functionName: r,
    index: v,
    isAppend: !0
  }], !1));
}
function No(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function uC(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = F(vd({ datas: e, distX: r, distY: n }), 2), s = a[0], u = a[1], f = cd(e, vb([s, u], 4));
  return Tr(f, On([0, 0, 0], 4), 4);
}
function cd(t, e, r) {
  var n = t.beforeTransform, a = t.afterTransform, s = t.beforeTransform2, u = t.afterTransform2, f = t.targetAllTransform, c = r ? jt(f, e, 4) : jt(e, f, 4), v = jt(Ie(r ? s : n, 4), c, 4), p = jt(v, Ie(r ? u : a, 4), 4);
  return p;
}
function vd(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = e.inverseBeforeMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return bt(Tr(a, $t(f, [r, n]), c), u);
}
function Pe(t, e) {
  var r = t.datas, n = t.distX, a = t.distY, s = r.inverseBeforeMatrix, u = r.inverseMatrix, f = r.is3d, c = r.startDragBeforeDist, v = r.startDragDist, p = r.absoluteOrigin, h = f ? 4 : 3;
  return bt(Tr(e ? s : u, $t(p, [n, a]), h), e ? c : v);
}
function fC(t, e) {
  var r = t.datas, n = t.distX, a = t.distY;
  r.beforeMatrix;
  var s = r.matrix, u = r.is3d;
  r.startDragBeforeDist;
  var f = r.startDragDist, c = r.absoluteOrigin, v = u ? 4 : 3;
  return bt(Tr(s, $t(f, [n, a]), v), c);
}
function lC(t, e, r, n, a, s) {
  return n === void 0 && (n = e), a === void 0 && (a = r), s === void 0 && (s = [0, 0]), t ? t.map(function(u, f) {
    var c = aa(u), v = c.value, p = c.unit, h = f ? a : n, d = f ? r : e;
    if (u === "%" || isNaN(v)) {
      var m = h ? s[f] / h : 0;
      return d * m;
    } else if (p !== "%")
      return v;
    return d * v / 100;
  }) : s;
}
function pd(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function cC(t, e) {
  return pd(e).map(function(r) {
    return t[r];
  });
}
function hu(t, e) {
  var r = (e + 1) / 2;
  return [
    Co(t[0][0], t[1][0], r, 1 - r),
    Co(t[0][1], t[1][1], r, 1 - r)
  ];
}
function Sr(t, e) {
  var r = hu([t[0], t[1]], e[0]), n = hu([t[2], t[3]], e[0]);
  return hu([r, n], e[1]);
}
function vC(t, e, r, n, a, s) {
  var u = zn(e, r, n, a), f = Sr(u, s), c = t[0] - f[0], v = t[1] - f[1];
  return [c, v];
}
function da(t, e, r, n) {
  return jt(t, Ki(e, n, r), n);
}
function pC(t, e, r, n) {
  var a = t.transformOrigin, s = t.offsetMatrix, u = t.is3d, f = u ? 4 : 3, c;
  if (Yr(r)) {
    var v = e.beforeTransform, p = e.afterTransform;
    n ? c = we(ta(r), 4, f) : c = we(jt(jt(v, ta([r]), 4), p, 4), 4, f);
  } else
    c = r;
  return da(s, c, a, f);
}
function dC(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, s = t.targetMatrix, u = t.targetAllTransform, f = a ? 4 : 3;
  return da(n, jt(u || s, pf(e, f), f), r, f);
}
function ko(t, e) {
  var r = mi(e);
  return {
    setTransform: function(n, a) {
      a === void 0 && (a = -1), r.startTransforms = hr(n) ? n : ln(n), Hu(t, e, a);
    },
    setTransformIndex: function(n) {
      Hu(t, e, n);
    }
  };
}
function Ho(t, e, r) {
  var n = mi(e), a = n.startTransforms;
  Hu(t, e, qe(a, function(s) {
    return s.indexOf("".concat(r, "(")) === 0;
  }));
}
function Hu(t, e, r) {
  var n = mi(e), a = e.datas;
  if (a.transformIndex = r, r !== -1) {
    var s = n.startTransforms[r];
    if (s) {
      var u = t.state, f = ui([s], {
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
function xf(t, e) {
  var r = mi(t);
  r.nextTransforms = ln(e);
}
function mi(t) {
  return t.originalDatas.beforeRenderable;
}
function Mo(t) {
  var e = t.originalDatas.beforeRenderable;
  return e.nextTransforms;
}
function co(t) {
  return (Mo(t) || []).join(" ");
}
function vo(t) {
  return mi(t).nextStyle;
}
function dd(t, e, r, n, a) {
  xf(a, e);
  var s = Br.drag(t, pa(a, t.state, r, n)), u = s ? s.transform : e;
  return z(z({ transform: e, drag: s }, Gr({
    transform: u
  }, a)), { afterTransform: u });
}
function yf(t, e, r, n, a, s) {
  var u = pC(t.state, a, e, s), f = mC(t, r, n, u);
  return f;
}
function hd(t, e, r, n, a, s, u) {
  var f = yf(t, e, r, a, s, u), c = t.state, v = c.left, p = c.top, h = t.props.groupable, d = h ? v : 0, m = h ? p : 0, _ = bt(n, f);
  return bt(_, [d, m]);
}
function hC(t, e, r, n, a, s, u) {
  var f = hd(t, e, r, n, a, s, u);
  return f;
}
function gC(t, e, r) {
  return [
    e ? -1 + t[0] / (e / 2) : 0,
    r ? -1 + t[1] / (r / 2) : 0
  ];
}
function mC(t, e, r, n) {
  n === void 0 && (n = t.state.allMatrix);
  var a = t.state, s = a.width, u = a.height, f = a.is3d, c = f ? 4 : 3, v = [
    s / 2 * (1 + e[0]) + r[0],
    u / 2 * (1 + e[1]) + r[1]
  ];
  return sr(n, v, c);
}
function _C(t, e, r) {
  var n = r.fixedDirection, a = r.fixedPosition, s = r.fixedOffset;
  return hd(t, "rotate(".concat(e, "deg)"), n, a, s, r);
}
function xC(t, e, r, n, a, s) {
  var u = t.props.groupable, f = t.state, c = f.transformOrigin, v = f.offsetMatrix, p = f.is3d, h = f.width, d = f.height, m = f.left, _ = f.top, x = s.fixedDirection, y = s.nextTargetMatrix || f.targetMatrix, b = p ? 4 : 3, E = lC(a, e, r, h, d, c), R = u ? m : 0, O = u ? _ : 0, I = da(v, y, E, b), w = vC(n, I, e, r, b, x);
  return bt(w, [R, O]);
}
function yC(t, e) {
  return Sr(ve(t.state), e);
}
function SC(t, e) {
  var r = t.targetGesto, n = t.controlGesto, a;
  return r?.isFlag() && (a = r.getEventData()[e]), !a && n?.isFlag() && (a = n.getEventData()[e]), a || {};
}
function bC(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function CC(t) {
  var e = t("scale"), r = t("rotate"), n = t("translate"), a = [];
  return n && n !== "0px" && n !== "none" && a.push("translate(".concat(n.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && a.push("rotate(".concat(r, ")")), e && e !== "1" && e !== "none" && a.push("scale(".concat(e.split(/\s+/).join(","), ")")), a;
}
function gd(t, e, r) {
  for (var n = t, a = [], s = of(t) || pn(t), u = !r && t === e || t === s, f = u, c = !1, v = 3, p, h, d, m = !1, _ = ea(e, e, !0).offsetParent, x = 1; n && !f; ) {
    f = u;
    var y = qr(n), b = y("position"), E = Nd(n), R = b === "fixed", O = CC(y), I = pb(yE(E)), w = void 0, D = !1, T = !1, P = 0, B = 0, H = 0, N = 0, L = {
      hasTransform: !1,
      fixedContainer: null
    };
    R && (m = !0, L = wE(n), _ = L.fixedContainer);
    var Y = I.length;
    !c && (Y === 16 || O.length) && (c = !0, v = 4, Vu(a), d && (d = we(d, 3, 4))), c && Y === 9 && (I = we(I, 3, 4));
    var X = EE(n, t), J = X.tagName, j = X.hasOffset, V = X.isSVG, nt = X.origin, et = X.targetOrigin, U = X.offset, ft = F(U, 2), pt = ft[0], st = ft[1];
    J === "svg" && !n.ownerSVGElement && d && (a.push({
      type: "target",
      target: n,
      matrix: DE(n, v)
    }), a.push({
      type: "offset",
      target: n,
      matrix: nr(v)
    }));
    var lt = parseFloat(y("zoom")) || 1;
    if (R)
      w = L.fixedContainer, D = !0;
    else {
      var ot = ea(n, e, !1, !0, y), ct = ot.offsetZoom;
      if (w = ot.offsetParent, D = ot.isEnd, T = ot.isStatic, x *= ct, (ot.isCustomElement || ct !== 1) && T)
        pt -= w.offsetLeft, st -= w.offsetTop;
      else if (rC || tC) {
        var mt = ot.parentSlotElement;
        if (mt) {
          for (var Rt = w, Wt = 0, at = 0; Rt && bC(Rt); )
            Wt += Rt.offsetLeft, at += Rt.offsetTop, Rt = Rt.offsetParent;
          pt -= Wt, st -= at;
        }
      }
    }
    if (id && !eC && j && !V && T && (b === "relative" || b === "static") && (pt -= w.offsetLeft, st -= w.offsetTop, u = u || D), R)
      j && L.hasTransform && (H = w.clientLeft, N = w.clientTop);
    else if (j && _ !== w && (P = w.clientLeft, B = w.clientTop), j && w === s) {
      var gt = kd(n, !1);
      pt += gt[0], st += gt[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: Ki(I, v, nt)
    }), O.length && (a.push({
      type: "offset",
      target: n,
      matrix: nr(v)
    }), a.push({
      type: "target",
      target: n,
      matrix: Ki(ta(O), v, nt)
    })), j) {
      var Yt = n === t, xt = Yt ? 0 : n.scrollLeft, Ct = Yt ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: In([
          pt - xt + P - H,
          st - Ct + B - N
        ], v)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: nt
      });
    if (lt !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: Ki(pf([lt, lt], v), v, [0, 0])
    }), d || (d = I), p || (p = nt), h || (h = et), f || R)
      break;
    n = w, u = D, (!r || n === s) && (f = u);
  }
  return d || (d = nr(v)), p || (p = [0, 0]), h || (h = [0, 0]), {
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
var wn = null, Dn = null, ei = null;
function li(t) {
  t ? (window.Map && (wn = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map()), ei = []) : (wn = null, ei = null, Dn = null);
}
function EC(t) {
  var e = Dn?.get(t);
  if (e)
    return e;
  var r = Zi(t, !0);
  return Dn && Dn.set(t, r), r;
}
function wC(t, e) {
  if (ei) {
    var r = Xr(ei, function(a) {
      return a[0][0] == t && a[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = gd(t, e, !0);
  return ei && ei.push([[t, e], n]), n;
}
function qr(t) {
  var e = wn?.get(t);
  if (!e) {
    var r = fn(t).getComputedStyle(t);
    if (!wn)
      return function(s) {
        return r[s];
      };
    e = {
      style: r,
      cached: {}
    }, wn.set(t, e);
  }
  var n = e.cached, a = e.style;
  return function(s) {
    return s in n || (n[s] = a[s]), n[s];
  };
}
function Ce(t, e, r) {
  var n = r.originalDatas;
  n.groupable = n.groupable || {};
  var a = n.groupable;
  a.childDatas = a.childDatas || [];
  var s = a.childDatas;
  return t.moveables.map(function(u, f) {
    return s[f] = s[f] || {}, s[f][e] = s[f][e] || {}, z(z({}, r), { isRequestChild: !0, datas: s[f][e], originalDatas: s[f] });
  });
}
function gu(t, e, r, n, a, s, u) {
  var f = !!r.match(/Start$/g), c = !!r.match(/End$/g), v = a.isPinch, p = a.datas, h = Ce(t, e.name, a), d = t.moveables, m = [], _ = h.map(function(x, y) {
    var b = d[y], E = b.state, R = E.gestos, O = x;
    if (f)
      O = new fi(u).dragStart(n, x), m.push(O);
    else {
      if (R[u] || (R[u] = p.childGestos[y]), !R[u])
        return;
      O = pa(x, E, n, v, s, u), m.push(O);
    }
    var I = e[r](b, z(z({}, O), { parentFlag: !0 }));
    return c && (R[u] = null), I;
  });
  return f && (p.childGestos = d.map(function(x) {
    return x.state.gestos[u];
  })), {
    eventParams: _,
    childEvents: m
  };
}
function Xe(t, e, r, n, a, s) {
  a === void 0 && (a = function(p, h) {
    return h;
  });
  var u = !!r.match(/End$/g), f = Ce(t, e.name, n), c = t.moveables, v = f.map(function(p, h) {
    var d = c[h], m = p;
    m = a(d, p);
    var _ = e[r](d, z(z({}, m), { parentFlag: !0 }));
    return u && (d.state.gestos = {}), _;
  });
  return v;
}
function Ro(t, e, r, n) {
  var a = r.fixedDirection, s = r.fixedPosition, u = n.datas.startPositions || ve(e.state), f = Sr(u, a), c = F(Tr(la(-t.rotation / 180 * Math.PI, 3), [f[0] - s[0], f[1] - s[1], 1], 3), 2), v = c[0], p = c[1];
  return n.datas.originalX = v, n.datas.originalY = p, n;
}
function md(t, e, r, n) {
  var a = t.getState(), s = a.renderPoses, u = a.rotation, f = a.direction, c = An(t.props, e).zoom, v = Vi(u / Math.PI * 180), p = {}, h = t.renderState;
  h.renderDirectionMap || (h.renderDirectionMap = {});
  var d = h.renderDirectionMap;
  r.forEach(function(_) {
    var x = _.dir;
    p[x] = !0;
  });
  var m = zr(f);
  return r.map(function(_) {
    var x = _.data, y = _.classNames, b = _.dir, E = _f[b];
    if (!E || !p[b])
      return null;
    d[b] = !0;
    var R = (Tt(v, 15) + m * ud[b] + 720) % 180, O = {};
    return Ue(x).forEach(function(I) {
      O["data-".concat(I)] = x[I];
    }), n.createElement("div", z({ className: St.apply(void 0, it(["control", "direction", b, e], F(y), !1)), "data-rotation": R, "data-direction": b }, O, { key: "direction-".concat(b), style: Po.apply(void 0, it([u, c], F(E.map(function(I) {
      return s[I];
    })), !1)) }));
  });
}
function _d(t, e, r, n) {
  var a = An(t.props, r), s = a.renderDirections, u = s === void 0 ? e : s, f = a.displayAroundControls;
  if (!u)
    return [];
  var c = u === !0 ? gf : u;
  return it(it([], F(f ? bd(t, n, r, c) : []), !1), F(md(t, r, c.map(function(v) {
    return {
      data: {},
      classNames: [],
      dir: v
    };
  }), n)), !1);
}
function ra(t, e, r, n, a, s) {
  for (var u = [], f = 6; f < arguments.length; f++)
    u[f - 6] = arguments[f];
  var c = vr(r, n), v = e ? Tt(c / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(s), className: St.apply(void 0, it(["line", "direction", e ? "edge" : "", e], F(u), !1)), "data-rotation": v, "data-line-key": s, "data-direction": e, style: qi(r, n, a, c) });
}
function xd(t, e, r, n, a) {
  var s = r === !0 ? Vb : r;
  return s.map(function(u, f) {
    var c = F(_f[u], 2), v = c[0], p = c[1];
    if (p != null)
      return ra(t, u, n[v], n[p], a, "".concat(e, "Edge").concat(f), e);
  }).filter(Boolean);
}
function yd(t) {
  return function(e, r) {
    var n = An(e.props, t).edge;
    return n && (n === !0 || n.length) ? it(it([], F(xd(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), F(DC(e, t, r)), !1) : Sd(e, t, r);
  };
}
function Sd(t, e, r) {
  return _d(t, gf, e, r);
}
function DC(t, e, r) {
  return _d(t, ["nw", "ne", "sw", "se"], e, r);
}
function bd(t, e, r, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var s = t.getState(), u = s.renderPoses, f = s.rotation, c = s.direction, v = a.renderDirectionMap, p = t.props.zoom, h = zr(c), d = f / Math.PI * 180;
  return (n || Ue(v)).map(function(m) {
    var _ = _f[m];
    if (!_)
      return null;
    var x = (Tt(d, 15) + h * ud[m] + 720) % 180, y = ["around-control"];
    return r && y.push("direction", r), e.createElement("div", { className: St.apply(void 0, it([], F(y), !1)), "data-rotation": x, "data-direction": m, key: "direction-around-".concat(m), style: Po.apply(void 0, it([f, p], F(_.map(function(b) {
      return u[b];
    })), !1)) });
  });
}
function Sf(t, e, r) {
  var n = t || {}, a = n.position, s = a === void 0 ? "client" : a, u = n.left, f = u === void 0 ? -1 / 0 : u, c = n.top, v = c === void 0 ? -1 / 0 : c, p = n.right, h = p === void 0 ? 1 / 0 : p, d = n.bottom, m = d === void 0 ? 1 / 0 : d, _ = {
    position: s,
    left: f,
    top: v,
    right: h,
    bottom: m
  };
  return {
    vertical: Pv(_, e, !0),
    horizontal: Pv(_, r, !1)
  };
}
function Yo(t, e) {
  var r = t.state, n = r.containerClientRect, a = n.clientHeight, s = n.clientWidth, u = n.clientLeft, f = n.clientTop, c = r.snapOffset, v = c.left, p = c.top, h = c.right, d = c.bottom, m = e || t.props.bounds || {}, _ = m.position || "client", x = _ === "css", y = m.left, b = y === void 0 ? -1 / 0 : y, E = m.top, R = E === void 0 ? -1 / 0 : E, O = m.right, I = O === void 0 ? x ? -1 / 0 : 1 / 0 : O, w = m.bottom, D = w === void 0 ? x ? -1 / 0 : 1 / 0 : w;
  return x && (I = s + h - v - I, D = a + d - p - D), {
    left: b + v - u,
    right: I + v - u,
    top: R + p - f,
    bottom: D + p - f
  };
}
function MC(t, e, r) {
  var n = Yo(t), a = n.left, s = n.top, u = n.right, f = n.bottom, c = F(r, 2), v = c[0], p = c[1], h = F(bt(r, e), 2), d = h[0], m = h[1];
  Q(d) < Fr && (d = 0), Q(m) < Fr && (m = 0);
  var _ = m > 0, x = d > 0, y = {
    isBound: !1,
    offset: 0,
    pos: 0
  }, b = {
    isBound: !1,
    offset: 0,
    pos: 0
  };
  if (d === 0 && m === 0)
    return {
      vertical: y,
      horizontal: b
    };
  if (d === 0)
    _ ? f < p && (b.pos = f, b.offset = p - f) : s > p && (b.pos = s, b.offset = p - s);
  else if (m === 0)
    x ? u < v && (y.pos = u, y.offset = v - u) : a > v && (y.pos = a, y.offset = v - a);
  else {
    var E = m / d, R = r[1] - E * v, O = 0, I = 0, w = !1;
    x && u <= v ? (O = E * u + R, I = u, w = !0) : !x && v <= a && (O = E * a + R, I = a, w = !0), w && (O < s || O > f) && (w = !1), w || (_ && f <= p ? (O = f, I = (O - R) / E, w = !0) : !_ && p <= s && (O = s, I = (O - R) / E, w = !0)), w && (y.isBound = !0, y.pos = I, y.offset = v - I, b.isBound = !0, b.pos = O, b.offset = p - O);
  }
  return {
    vertical: y,
    horizontal: b
  };
}
function Pv(t, e, r) {
  var n = t[r ? "left" : "top"], a = t[r ? "right" : "bottom"], s = Math.min.apply(Math, it([], F(e), !1)), u = Math.max.apply(Math, it([], F(e), !1)), f = [];
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
    return Q(v.offset) - Q(c.offset);
  });
}
function Av(t, e, r) {
  var n = r ? t.map(function(a) {
    return fa(a, r);
  }) : t;
  return n.some(function(a) {
    return a[0] < e.left && Q(a[0] - e.left) > 0.1 || a[0] > e.right && Q(a[0] - e.right) > 0.1 || a[1] < e.top && Q(a[1] - e.top) > 0.1 || a[1] > e.bottom && Q(a[1] - e.bottom) > 0.1;
  });
}
function RC(t, e, r) {
  var n = ce(t), a = Math.sqrt(n * n - e * e) || 0;
  return [a, -a].sort(function(s, u) {
    return Q(s - t[r ? 0 : 1]) - Q(u - t[r ? 0 : 1]);
  }).map(function(s) {
    return vr([0, 0], r ? [s, e] : [e, s]);
  });
}
function TC(t, e, r, n, a) {
  if (!t.props.bounds)
    return [];
  var s = a * Math.PI / 180, u = Yo(t), f = u.left, c = u.top, v = u.right, p = u.bottom, h = f - n[0], d = v - n[0], m = c - n[1], _ = p - n[1], x = {
    left: h,
    top: m,
    right: d,
    bottom: _
  };
  if (!Av(r, x, 0))
    return [];
  var y = [];
  return [
    [h, 0],
    [d, 0],
    [m, 1],
    [_, 1]
  ].forEach(function(b) {
    var E = F(b, 2), R = E[0], O = E[1];
    r.forEach(function(I) {
      var w = vr([0, 0], I);
      y.push.apply(y, it([], F(RC(I, R, O).map(function(D) {
        return s + D - w;
      }).filter(function(D) {
        return !Av(e, x, D);
      }).map(function(D) {
        return Tt(D * 180 / Math.PI, Fr);
      })), !1));
    });
  }), y;
}
var OC = ["left", "right", "center"], IC = ["top", "bottom", "middle"], Bv = {
  left: "start",
  right: "end",
  center: "center",
  top: "start",
  bottom: "end",
  middle: "center"
}, cn = {
  start: "left",
  end: "right",
  center: "center"
}, vn = {
  start: "top",
  end: "bottom",
  center: "middle"
};
function ni() {
  return {
    left: !1,
    top: !1,
    right: !1,
    bottom: !1
  };
}
function _i(t, e) {
  var r = t.props, n = r.snappable, a = r.bounds, s = r.innerBounds, u = r.verticalGuidelines, f = r.horizontalGuidelines, c = r.snapGridWidth, v = r.snapGridHeight, p = t.state, h = p.guidelines, d = p.enableSnap;
  return !n || !d || e && n !== !0 && n.indexOf(e) < 0 ? !1 : !!(c || v || a || s || h && h.length || u && u.length || f && f.length);
}
function bf(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function PC(t, e) {
  var r = bf(t), n = {};
  for (var a in r)
    a in e && r[a] && (n[a] = e[a]);
  return n;
}
function Cf(t, e) {
  var r = PC(t, e), n = IC.filter(function(s) {
    return s in r;
  }), a = OC.filter(function(s) {
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
function AC(t, e, r) {
  var n = sr(t, [e.clientLeft, e.clientTop], r);
  return [
    e.left + n[0],
    e.top + n[1]
  ];
}
function BC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  Math.abs(a) < dr && (a = 0), Math.abs(s) < dr && (s = 0);
  var u = 0, f = 0, c = 0;
  return a ? s ? (u = -s / a, f = 1, c = u * r[0] - r[1]) : (f = 1, c = -r[1]) : (u = -1, c = r[0]), [u, f, c].map(function(v) {
    return Tt(v, dr);
  });
}
var Cd = "snapRotationThreshold", Ed = "snapRotationDegrees", wd = "snapHorizontalThreshold", Dd = "snapVerticalThreshold";
function Xo(t, e, r, n, a, s, u) {
  var f;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var c = t.props, v = ((f = t.state.snapThresholdInfo) === null || f === void 0 ? void 0 : f.multiples) || [1, 1], p = Kv(u, c[wd], 5), h = Kv(s, c[Dd], 5);
  return Md(t.state.guidelines, e, r, n, a, p, h, v);
}
function Md(t, e, r, n, a, s, u, f) {
  return {
    vertical: Gv(t, "vertical", e, u * f[0], n),
    horizontal: Gv(t, "horizontal", r, s * f[1], a)
  };
}
function zC(t, e, r) {
  var n = F(r, 2), a = n[0], s = n[1], u = F(e, 2), f = u[0], c = u[1], v = F(bt(r, e), 2), p = v[0], h = v[1], d = h > 0, m = p > 0;
  p = Ao(p), h = Ao(h);
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
  var y = Xo(t, p ? [a] : [], h ? [s] : [], [], [], void 0, void 0), b = y.vertical, E = y.horizontal;
  b.posInfos.filter(function(J) {
    var j = J.pos;
    return m ? j >= f : j <= f;
  }), E.posInfos.filter(function(J) {
    var j = J.pos;
    return d ? j >= c : j <= c;
  }), b.isSnap = b.posInfos.length > 0, E.isSnap = E.posInfos.length > 0;
  var R = Yu(b), O = R.isSnap, I = R.guideline, w = Yu(E), D = w.isSnap, T = w.guideline, P = D ? T.pos[1] : 0, B = O ? I.pos[0] : 0;
  if (p === 0)
    D && (x.isSnap = !0, x.pos = T.pos[1], x.offset = s - x.pos);
  else if (h === 0)
    O && (_.isSnap = !0, _.pos = B, _.offset = a - B);
  else {
    var H = h / p, N = r[1] - H * a, L = 0, Y = 0, X = !1;
    O ? (Y = B, L = H * Y + N, X = !0) : D && (L = P, Y = (L - N) / H, X = !0), X && (_.isSnap = !0, _.pos = Y, _.offset = a - Y, x.isSnap = !0, x.pos = L, x.offset = s - L);
  }
  return {
    vertical: _,
    horizontal: x
  };
}
function sn(t) {
  var e = "";
  return t === -1 || t === "top" || t === "left" ? e = "start" : t === 0 || t === "center" || t === "middle" ? e = "center" : (t === 1 || t === "right" || t === "bottom") && (e = "end"), e;
}
function zv(t, e, r, n) {
  var a = Cf(t.props.snapDirections, e), s = Xo(t, a.vertical, a.horizontal, a.verticalNames.map(function(c) {
    return sn(c);
  }), a.horizontalNames.map(function(c) {
    return sn(c);
  }), r, n), u = sn(a.horizontalNames[s.horizontal.index]), f = sn(a.verticalNames[s.vertical.index]);
  return {
    vertical: z(z({}, s.vertical), { direction: f }),
    horizontal: z(z({}, s.horizontal), { direction: u })
  };
}
function Yu(t) {
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
function Gv(t, e, r, n, a) {
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
      var y = x.pos, b = h - y[c];
      return {
        offset: b,
        dist: Q(b),
        guideline: x,
        direction: m
      };
    }).filter(function(x) {
      var y = x.guideline, b = x.dist, E = y.type;
      return !(E !== e || b > n);
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
function GC(t, e, r, n, a) {
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
  }) : t.props.keepRatio ? s.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (s.push.apply(s, it([], F(cC([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], r)), !1)), s.length > 1 && s.push([
    (s[0][0] + s[1][0]) / 2,
    (s[0][1] + s[1][1]) / 2
  ]));
  var u = s.map(function(d) {
    return Sr(e, d);
  }), f = u.map(function(d) {
    return d[0];
  }), c = u.map(function(d) {
    return d[1];
  }), v = Xo(t, f, c, s.map(function(d) {
    return sn(d[0]);
  }), s.map(function(d) {
    return sn(d[1]);
  }), n, a), p = sn(s.map(function(d) {
    return d[0];
  })[v.vertical.index]), h = sn(s.map(function(d) {
    return d[1];
  })[v.horizontal.index]);
  return {
    vertical: z(z({}, v.vertical), { direction: p }),
    horizontal: z(z({}, v.horizontal), { direction: h })
  };
}
function Rd(t, e) {
  var r = Q(t.offset), n = Q(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < Fr ? 1 : n < Fr ? -1 : r - n;
}
function To(t, e) {
  return t.slice().sort(function(r, n) {
    var a = r.sign[e], s = n.sign[e], u = r.offset[e], f = n.offset[e];
    if (a) {
      if (!s)
        return -1;
    } else return 1;
    return Rd({ isBound: r.isBound, isSnap: r.isSnap, offset: u }, { isBound: n.isBound, isSnap: n.isSnap, offset: f });
  })[0];
}
function FC(t, e, r) {
  var n = [];
  if (r)
    Q(e[0]) !== 1 || Q(e[1]) !== 1 ? n.push([e, [-1, -1]], [e, [-1, 1]], [e, [1, -1]], [e, [1, 1]]) : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]), n.push([e, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var a = t[0] ? t : [1, 1];
    [1, -1].forEach(function(u) {
      [1, -1].forEach(function(f) {
        var c = [u * a[0], f * a[1]];
        e[0] === c[0] && e[1] === c[1] || n.push([e, c]);
      });
    });
  } else if (t[0]) {
    var s = Q(e[0]) === 1 ? [1] : [1, -1];
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
    var s = Q(e[1]) === 1 ? [1] : [1, -1];
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
function Td(t, e) {
  var r = Ru([e[0][0], e[1][0]]), n = Ru([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function Ef(t, e) {
  var r = F(e, 2), n = r[0], a = r[1], s = a[0] - n[0], u = a[1] - n[1];
  Q(s) < Fr && (s = 0), Q(u) < Fr && (u = 0);
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
function Od(t, e, r, n) {
  return n === void 0 && (n = Fr), t.every(function(a) {
    var s = Ef(a, e), u = s <= 0;
    return u === r || Q(s) <= n;
  });
}
function Fv(t, e, r, n, a) {
  return a === void 0 && (a = 0), n && e - a <= t || !n && t <= r + a ? {
    isBound: !0,
    offset: n ? e - t : r - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function LC(t, e) {
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
  if (Od([
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
  var y = un(r, u, m, a), b = un(r, u, x, a), E = un(r, u, d, s), R = un(r, u, _, s), O = y.isBound && b.isBound, I = y.isBound || b.isBound, w = E.isBound && R.isBound, D = E.isBound || R.isBound, T = ci(y.offset, b.offset), P = ci(E.offset, R.offset), B = [0, 0], H = !1, N = !1;
  return Q(P) < Q(T) ? (B = [T, 0], H = I, N = O) : (B = [0, P], H = D, N = w), {
    isAllBound: N,
    isVerticalBound: I,
    isHorizontalBound: D,
    isBound: H,
    offset: B
  };
}
function un(t, e, r, n, a, s) {
  var u = F(e, 2), f = u[0], c = u[1], v = t[0], p = r[0], h = r[1], d = Ao(h[1] - p[1]), m = Ao(h[0] - p[0]), _ = c, x = f, y = -f / c;
  if (m) {
    if (!d) {
      if (s && !_)
        return {
          isBound: !1,
          offset: 0
        };
      if (x) {
        var O = (p[1] - v[1]) / y + v[0];
        return Fv(O, p[0], h[0], n, a);
      } else {
        var E = p[1] - v[1], R = Q(E) <= (a || 0);
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
      var b = y * (p[0] - v[0]) + v[1];
      return Fv(b, p[1], h[1], n, a);
    } else {
      var E = p[0] - v[0], R = Q(E) <= (a || 0);
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
function Id(t, e, r) {
  return e.map(function(n) {
    var a = LC(t, n), s = a.isBound, u = a.offset, f = a.isVerticalBound, c = a.isHorizontalBound, v = n.multiple, p = Pe({
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
function WC(t, e, r) {
  var n, a = wf(t, e, [0, 0], !1).map(function(d) {
    return z(z({}, d), { multiple: d.multiple.map(function(m) {
      return Q(m) * 2;
    }) });
  }), s = Id(t, a, r), u = To(s, 0), f = To(s, 1), c = 0, v = 0, p = u.isVerticalBound || f.isVerticalBound, h = u.isHorizontalBound || f.isHorizontalBound;
  return (p || h) && (n = F(fC({
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
function NC(t, e) {
  var r = [], n = t[0], a = t[1];
  return n && a ? r.push([[0, a * 2], t, [-n, a]], [[n * 2, 0], t, [n, -a]]) : n ? (r.push([[n * 2, 0], [n, 1], [n, -1]]), e && r.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : a ? (r.push([[0, a * 2], [1, a], [-1, a]]), e && r.push([[-1, 0], [-1, a], [-1, -a]], [[1, 0], [1, a], [1, -a]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function wf(t, e, r, n) {
  var a = t.state, s = a.allMatrix, u = a.is3d, f = zn(s, 100, 100, u ? 4 : 3), c = Sr(f, [0, 0]);
  return NC(r, n).map(function(v) {
    var p = F(v, 3), h = p[0], d = p[1], m = p[2], _ = [
      Sr(f, d),
      Sr(f, m)
    ], x = BC(_), y = Td(c, _), b = y.vertical, E = y.horizontal, R = Ef(c, _) <= 0;
    return {
      multiple: h,
      centerSign: R,
      verticalSign: b,
      horizontalSign: E,
      lineConstants: x,
      line: [
        Sr(e, d),
        Sr(e, m)
      ]
    };
  });
}
function Lv(t, e, r, n) {
  var a = n ? t.map(function(s) {
    return fa(s, n);
  }) : t;
  return [
    [a[0], a[1]],
    [a[1], a[3]],
    [a[3], a[2]],
    [a[2], a[0]]
  ].some(function(s) {
    var u = Ef(r, s) <= 0;
    return !Od(e, s, u);
  });
}
function kC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  if (!a)
    return Q(r[0]);
  if (!s)
    return Q(r[1]);
  var u = s / a;
  return Q((-u * r[0] + r[1]) / Math.sqrt(Math.pow(u, 2) + 1));
}
function HC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
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
function YC(t, e, r, n, a) {
  var s = t.props.innerBounds, u = a * Math.PI / 180;
  if (!s)
    return [];
  var f = s.left, c = s.top, v = s.width, p = s.height, h = f - n[0], d = f + v - n[0], m = c - n[1], _ = c + p - n[1], x = [
    [h, m],
    [d, m],
    [h, _],
    [d, _]
  ], y = Sr(r, [0, 0]);
  if (!Lv(r, x, y, 0))
    return [];
  var b = [], E = x.map(function(R) {
    return [
      ce(R),
      vr([0, 0], R)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(R) {
    var O = vr([0, 0], HC(R)), I = kC(R);
    b.push.apply(b, it([], F(E.filter(function(w) {
      var D = F(w, 1), T = D[0];
      return T && I <= T;
    }).map(function(w) {
      var D = F(w, 2), T = D[0], P = D[1], B = Math.acos(T ? I / T : 0), H = P + B, N = P - B;
      return [
        u + H - O,
        u + N - O
      ];
    }).reduce(function(w, D) {
      return w.push.apply(w, it([], F(D), !1)), w;
    }, []).filter(function(w) {
      return !Lv(e, x, y, w);
    }).map(function(w) {
      return Tt(w * 180 / Math.PI, Fr);
    })), !1));
  }), b;
}
function XC(t) {
  var e = t.props.innerBounds, r = ni();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, s = n.pos2, u = n.pos3, f = n.pos4, c = [a, s, u, f], v = Sr(c, [0, 0]), p = e.left, h = e.top, d = e.width, m = e.height, _ = [[p, h], [p, h + m]], x = [[p, h], [p + d, h]], y = [[p + d, h], [p + d, h + m]], b = [[p, h + m], [p + d, h + m]], E = wf(t, c, [0, 0], !1), R = [], O = [];
  return E.forEach(function(I) {
    var w = I.line, D = I.lineConstants, T = Td(v, w), P = T.horizontal, B = T.vertical, H = un(w, D, x, B, 1, !0), N = un(w, D, b, B, 1, !0), L = un(w, D, _, P, 1, !0), Y = un(w, D, y, P, 1, !0);
    H.isBound && !r.top && (R.push(h), r.top = !0), N.isBound && !r.bottom && (R.push(h + m), r.bottom = !0), L.isBound && !r.left && (O.push(p), r.left = !0), Y.isBound && !r.right && (O.push(p + d), r.right = !0);
  }), {
    boundMap: r,
    horizontal: R,
    vertical: O
  };
}
function qC(t, e, r, n) {
  var a = e[0] - t[0], s = e[1] - t[1];
  if (Q(a) < dr && (a = 0), Q(s) < dr && (s = 0), !a)
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
function Xu(t, e, r, n, a) {
  var s = qC(t, e, r, n);
  if (!s)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var u = Ye(t, e), f = Ye(s, t), c = Ye(s, e), v = f > u || c > u, p = F(Pe({
    datas: a,
    distX: s[0],
    distY: s[1]
  }), 2), h = p[0], d = p[1];
  return {
    offset: [h, d],
    isOutside: v
  };
}
function Oo(t, e) {
  return t.isBound ? t.offset : e.isSnap ? Yu(e).offset : 0;
}
function UC(t, e, r, n, a) {
  var s = F(e, 2), u = s[0], f = s[1], c = F(r, 2), v = c[0], p = c[1], h = F(n, 2), d = h[0], m = h[1], _ = F(a, 2), x = _[0], y = _[1], b = -x, E = -y;
  if (t && u && f) {
    b = 0, E = 0;
    var R = [];
    if (v && p ? R.push([0, y], [x, 0]) : v ? R.push([x, 0]) : p ? R.push([0, y]) : d && m ? R.push([0, y], [x, 0]) : d ? R.push([x, 0]) : m && R.push([0, y]), R.length) {
      R.sort(function(D, T) {
        return ce(bt([u, f], D)) - ce(bt([u, f], T));
      });
      var O = R[0];
      if (O[0] && Q(u) > dr)
        b = -O[0], E = f * Q(u + b) / Q(u) - f;
      else if (O[1] && Q(f) > dr) {
        var I = f;
        E = -O[1], b = u * Q(f + E) / Q(I) - u;
      }
      if (t && p && v)
        if (Q(b) > dr && Q(b) < Q(x)) {
          var w = Q(x) / Q(b);
          b *= w, E *= w;
        } else if (Q(E) > dr && Q(E) < Q(y)) {
          var w = Q(y) / Q(E);
          b *= w, E *= w;
        } else
          b = ci(-x, b), E = ci(-y, E);
    }
  } else
    b = u || v ? -x : 0, E = f || p ? -y : 0;
  return [b, E];
}
function $C(t, e, r, n, a, s) {
  if (!_i(t, "draggable"))
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
  var u = Rf(s.absolutePoses, [e, r]), f = le(u), c = f.left, v = f.right, p = f.top, h = f.bottom, d = {
    horizontal: u.map(function(Y) {
      return Y[1];
    }),
    vertical: u.map(function(Y) {
      return Y[0];
    })
  }, m = bf(t.props.snapDirections), _ = Cf(m, {
    left: c,
    right: v,
    top: p,
    bottom: h,
    center: (c + v) / 2,
    middle: (p + h) / 2
  }), x = qo(t, a, _, d), y = x.vertical, b = x.horizontal, E = WC(t, u, s), R = E.vertical, O = E.horizontal, I = y.isSnap, w = b.isSnap, D = y.isBound || R.isBound, T = b.isBound || O.isBound, P = ci(y.offset, R.offset), B = ci(b.offset, O.offset), H = F(UC(n, [e, r], [D, T], [I, w], [P, B]), 2), N = H[0], L = H[1];
  return [
    {
      isBound: D,
      isSnap: I,
      offset: N
    },
    {
      isBound: T,
      isSnap: w,
      offset: L
    }
  ];
}
function qo(t, e, r, n) {
  n === void 0 && (n = r);
  var a = Sf(Yo(t), n.vertical, n.horizontal), s = a.horizontal, u = a.vertical, f = e ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : Xo(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = f.horizontal, v = f.vertical, p = Oo(s[0], c), h = Oo(u[0], v), d = Q(p), m = Q(h);
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
function Wv(t, e, r, n, a, s, u) {
  u === void 0 && (u = [1, 1]);
  var f = Sf(e, r, n), c = f.horizontal, v = f.vertical, p = Md(t, r, n, [], [], a, s, u), h = p.horizontal, d = p.vertical, m = Oo(c[0], h), _ = Oo(v[0], d), x = Q(m), y = Q(_);
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
function VC(t, e, r, n) {
  var a = vr(t, e) / Math.PI * 180, s = r.vertical, u = s.isBound, f = s.isSnap, c = s.dist, v = r.horizontal, p = v.isBound, h = v.isSnap, d = v.dist, m = a % 180, _ = m < 3 || m > 177, x = m > 87 && m < 93;
  return d < c && (u || f && !x && (!n || !_)) ? "vertical" : p || h && !_ && (!n || !x) ? "horizontal" : "";
}
function KC(t, e, r, n, a, s) {
  return r.map(function(u) {
    var f = F(u, 2), c = f[0], v = f[1], p = Sr(e, c), h = Sr(e, v), d = n ? ZC(t, p, h, a) : qo(t, a, {
      vertical: [h[0]],
      horizontal: [h[1]]
    }), m = d.horizontal, _ = m.offset, x = m.isBound, y = m.isSnap, b = d.vertical, E = b.offset, R = b.isBound, O = b.isSnap, I = bt(v, c);
    if (!E && !_)
      return {
        isBound: R || x,
        isSnap: O || y,
        sign: I,
        offset: [0, 0]
      };
    var w = VC(p, h, d, n);
    if (!w)
      return {
        sign: I,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var D = w === "vertical", T = [0, 0];
    return !n && Q(v[0]) === 1 && Q(v[1]) === 1 && c[0] !== v[0] && c[1] !== v[1] ? T = Pe({
      datas: s,
      distX: -E,
      distY: -_
    }) : T = Xu(p, h, -(D ? E : _), D, s).offset, T = T.map(function(P, B) {
      return P * (I[B] ? 2 / I[B] : 0);
    }), {
      sign: I,
      isBound: D ? R : x,
      isSnap: D ? O : y,
      offset: T
    };
  });
}
function Nv(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function ZC(t, e, r, n) {
  var a = MC(t, e, r), s = a.horizontal, u = a.vertical, f = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : zC(t, e, r), c = f.horizontal, v = f.vertical, p = Nv(s, c), h = Nv(u, v), d = Q(p), m = Q(h);
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
function JC(t, e, r, n, a) {
  var s = [-r[0], -r[1]], u = t.state, f = u.width, c = u.height, v = t.props.bounds, p = 1 / 0, h = 1 / 0;
  if (v) {
    var d = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], m = v.left, _ = m === void 0 ? -1 / 0 : m, x = v.top, y = x === void 0 ? -1 / 0 : x, b = v.right, E = b === void 0 ? 1 / 0 : b, R = v.bottom, O = R === void 0 ? 1 / 0 : R;
    d.forEach(function(I) {
      var w = I[0] !== s[0], D = I[1] !== s[1], T = Sr(e, I), P = vr(n, T) * 360 / Math.PI;
      if (D) {
        var B = T.slice();
        (Q(P - 360) < 2 || Q(P - 180) < 2) && (B[1] = n[1]);
        var H = Xu(n, B, (n[1] < T[1] ? O : y) - T[1], !1, a), N = F(H.offset, 2), L = N[1], Y = H.isOutside;
        isNaN(L) || (h = c + (Y ? 1 : -1) * Q(L));
      }
      if (w) {
        var B = T.slice();
        (Q(P - 90) < 2 || Q(P - 270) < 2) && (B[0] = n[0]);
        var X = Xu(n, B, (n[0] < T[0] ? E : _) - T[0], !0, a), J = F(X.offset, 1), j = J[0], V = X.isOutside;
        isNaN(j) || (p = f + (V ? 1 : -1) * Q(j));
      }
    });
  }
  return {
    maxWidth: p,
    maxHeight: h
  };
}
var Br = {
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
    var p = ce(v), h = vr(v, [0, 0]);
    return [e.createElement("div", { className: St("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(p, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(h, "rad) scaleY(").concat(s, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, a = e.parentGesto, s = t.state, u = s.gestos, f = s.style;
    if (u.draggable)
      return !1;
    u.draggable = a || t.targetGesto, r.datas = {}, r.left = parseFloat(f.left || "") || 0, r.top = parseFloat(f.top || "") || 0, r.bottom = parseFloat(f.bottom || "") || 0, r.right = parseFloat(f.right || "") || 0, r.startValue = [0, 0], Bn(t, e), Ho(t, e, "translate"), gE(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = Bt(t, e, z({ set: function(p) {
      r.startValue = p;
    } }, ko(t, e))), v = n || dt(t, "onDragStart", c);
    return v !== !1 ? (r.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (u.draggable = null, r.isPinch = !1), r.isDrag ? c : !1;
  },
  drag: function(t, e) {
    if (e) {
      Wo(t, e, "translate");
      var r = e.datas, n = e.parentEvent, a = e.parentFlag, s = e.isPinch, u = e.deltaOffset, f = e.useSnap, c = e.isRequest, v = e.isGroup, p = e.parentThrottleDrag, h = e.distX, d = e.distY, m = r.isDrag, _ = r.prevDist, x = r.prevBeforeDist, y = r.startValue;
      if (m) {
        u && (h += u[0], d += u[1]);
        var b = t.props, E = b.parentMoveable, R = v ? 0 : b.throttleDrag || p || 0, O = n ? 0 : b.throttleDragRotate || 0, I = 0, w = !1, D = !1, T = !1, P = !1;
        if (!n && O > 0 && (h || d)) {
          var B = b.startDragRotate || 0, H = Tt(B + vr([0, 0], [h, d]) * 180 / Math.PI, O) - B, N = d * Math.abs(Math.cos((H - 90) / 180 * Math.PI)), L = h * Math.abs(Math.cos(H / 180 * Math.PI)), Y = ce([L, N]);
          I = H * Math.PI / 180, h = Y * Math.cos(I), d = Y * Math.sin(I);
        }
        if (!s && !n && !a) {
          var X = F($C(t, h, d, O, !f && c || u, r), 2), J = X[0], j = X[1];
          w = J.isSnap, D = J.isBound, T = j.isSnap, P = j.isBound;
          var V = J.offset, nt = j.offset;
          h += V, d += nt;
        }
        var et = $t(vd({ datas: r, distX: h, distY: d }), y), U = $t(uC({ datas: r, distX: h, distY: d }), y);
        xv(U, Fr), xv(et, Fr), O || (!w && !D && (U[0] = Tt(U[0], R), et[0] = Tt(et[0], R)), !T && !P && (U[1] = Tt(U[1], R), et[1] = Tt(et[1], R)));
        var ft = bt(et, y), pt = bt(U, y), st = bt(pt, _), lt = bt(ft, x);
        r.prevDist = pt, r.prevBeforeDist = ft, r.passDelta = st, r.passDist = pt;
        var ot = r.left + ft[0], ct = r.top + ft[1], mt = r.right - ft[0], Rt = r.bottom - ft[1], Wt = No(r, "translate(".concat(U[0], "px, ").concat(U[1], "px)"), "translate(".concat(pt[0], "px, ").concat(pt[1], "px)"));
        if (xf(e, Wt), t.state.dragInfo.dist = n ? [0, 0] : pt, !(!n && !E && st.every(function(Ct) {
          return !Ct;
        }) && lt.some(function(Ct) {
          return !Ct;
        }))) {
          var at = t.state, gt = at.width, Yt = at.height, xt = Bt(t, e, z({ transform: Wt, dist: pt, delta: st, translate: U, beforeDist: ft, beforeDelta: lt, beforeTranslate: et, left: ot, top: ct, right: mt, bottom: Rt, width: gt, height: Yt, isPinch: s }, Gr({
            transform: Wt
          }, e)));
          return !n && dt(t, "onDrag", xt), xt;
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
      var a = Qr(t, e, {});
      return !r && dt(t, "onDragEnd", a), a;
    }
  },
  dragGroupStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = this.dragStart(t, e);
    if (!f)
      return !1;
    var c = gu(t, this, "dragStart", [
      s || 0,
      u || 0
    ], e, !1, "draggable"), v = c.childEvents, p = c.eventParams, h = z(z({}, f), { targets: t.props.targets, events: p }), d = dt(t, "onDragGroupStart", h);
    a.isDrag = d !== !1;
    var m = (n = (r = v[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return a.throttleOffset = [m[0] % 1, m[1] % 1], a.isDrag ? f : !1;
  },
  dragGroup: function(t, e) {
    var r = e.datas;
    if (r.isDrag) {
      var n = this.drag(t, z(z({}, e), { parentThrottleDrag: t.props.throttleDrag })), a = e.datas.passDelta, s = gu(t, this, "drag", a, e, !1, "draggable").eventParams;
      if (n) {
        var u = z({ targets: t.props.targets, events: s }, n);
        return dt(t, "onDragGroup", u), u;
      }
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isDrag) {
      this.dragEnd(t, e);
      var a = gu(t, this, "dragEnd", [0, 0], e, !1, "draggable").eventParams;
      return dt(t, "onDragGroupEnd", Qr(t, e, {
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
function Pd(t, e) {
  var r = Sr(t, e), n = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: e,
    fixedOffset: n
  };
}
function QC(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = [
    a / 2 * (1 + e[0]),
    s / 2 * (1 + e[1])
  ], c = sr(r, f, u), v = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: v
  };
}
function Ad(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = gC(e, a, s), c = sr(r, e, u), v = [
    a ? 0 : e[0],
    s ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: f,
    fixedOffset: v
  };
}
var kv = If("resizable"), qu = {
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
  render: yd("resizable"),
  dragControlCondition: kv,
  viewClassName: Of("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, a = e.isPinch, s = e.isGroup, u = e.parentDirection, f = e.parentGesto, c = e.datas, v = e.parentFixedDirection, p = e.parentEvent, h = Ud(u, a, n, c), d = t.state, m = d.target, _ = d.width, x = d.height, y = d.gestos;
    if (!h || !m || y.resizable)
      return !1;
    y.resizable = f || t.controlGesto, !a && Bn(t, e), c.datas = {}, c.direction = h, c.startOffsetWidth = _, c.startOffsetHeight = x, c.prevWidth = 0, c.prevHeight = 0, c.minSize = [0, 0], c.startWidth = d.inlineCSSWidth || d.cssWidth, c.startHeight = d.inlineCSSHeight || d.cssHeight, c.maxSize = [1 / 0, 1 / 0], s || (c.minSize = [
      d.minOffsetWidth,
      d.minOffsetHeight
    ], c.maxSize = [
      d.maxOffsetWidth,
      d.maxOffsetHeight
    ]);
    var b = t.props.transformOrigin || "% %";
    c.transformOrigin = Yr(b) ? b.split(" ") : b, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !h[0] && !h[1] || h[0] || !h[1];
    function E(P) {
      c.ratio = P && isFinite(P) ? P : 0;
    }
    c.startPositions = ve(t.state);
    function R(P) {
      var B = Pd(c.startPositions, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function O(P) {
      var B = Ad(t.state, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function I(P) {
      c.minSize = [
        Qt("".concat(P[0]), 0) || 0,
        Qt("".concat(P[1]), 0) || 0
      ];
    }
    function w(P) {
      var B = [
        P[0] || 1 / 0,
        P[1] || 1 / 0
      ];
      (!si(B[0]) || isFinite(B[0])) && (B[0] = Qt("".concat(B[0]), 0) || 1 / 0), (!si(B[1]) || isFinite(B[1])) && (B[1] = Qt("".concat(B[1]), 0) || 1 / 0), c.maxSize = B;
    }
    E(_ / x), R(v || [-h[0], -h[1]]), c.setFixedDirection = R, c.setFixedPosition = O, c.setMin = I, c.setMax = w;
    var D = Bt(t, e, {
      direction: h,
      startRatio: c.ratio,
      set: function(P) {
        var B = F(P, 2), H = B[0], N = B[1];
        c.startWidth = H, c.startHeight = N;
      },
      setMin: I,
      setMax: w,
      setRatio: E,
      setFixedDirection: R,
      setFixedPosition: O,
      setOrigin: function(P) {
        c.transformOrigin = P;
      },
      dragStart: Br.dragStart(t, new fi().dragStart([0, 0], e))
    }), T = p || dt(t, "onResizeStart", D);
    return c.startFixedDirection = c.fixedDirection, c.startFixedPosition = c.fixedPosition, T !== !1 && (c.isResize = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: h
    }), c.isResize ? D : !1;
  },
  dragControl: function(t, e) {
    var r, n = e.datas, a = e.parentFlag, s = e.isPinch, u = e.parentKeepRatio, f = e.dragClient, c = e.parentDist, v = e.useSnap, p = e.isRequest, h = e.isGroup, d = e.parentEvent, m = e.resolveMatrix, _ = n.isResize, x = n.transformOrigin, y = n.startWidth, b = n.startHeight, E = n.prevWidth, R = n.prevHeight, O = n.minSize, I = n.maxSize, w = n.ratio, D = n.startOffsetWidth, T = n.startOffsetHeight, P = n.isWidth;
    if (!_)
      return;
    if (m) {
      var B = t.state.is3d, H = n.startOffsetMatrix, N = n.startTransformOrigin, L = B ? 4 : 3, Y = ta(Mo(e)), X = Math.sqrt(Y.length);
      L !== X && (Y = we(Y, X, L));
      var J = da(H, Y, N, L), j = zn(J, D, T, L);
      n.startPositions = j, n.nextTargetMatrix = Y, n.nextAllMatrix = J;
    }
    var V = An(t.props, "resizable"), nt = V.resizeFormat, et = V.throttleResize, U = et === void 0 ? a ? 0 : 1 : et, ft = V.parentMoveable, pt = V.keepRatioFinally, st = n.direction, lt = st, ot = 0, ct = 0;
    !st[0] && !st[1] && (lt = [1, 1]);
    var mt = w && (u ?? V.keepRatio) || !1;
    function Rt() {
      var Ut = n.fixedDirection, yt = Qd(lt, mt, n, e);
      ot = yt.distWidth, ct = yt.distHeight;
      var ir = lt[0] - Ut[0] || mt ? Math.max(D + ot, Fr) : D, gr = lt[1] - Ut[1] || mt ? Math.max(T + ct, Fr) : T;
      return mt && D && T && (P ? gr = ir / w : ir = gr * w), [ir, gr];
    }
    var Wt = F(Rt(), 2), at = Wt[0], gt = Wt[1];
    d || (n.setFixedDirection(n.fixedDirection), dt(t, "onBeforeResize", Bt(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(Ut) {
        var yt;
        return n.setFixedDirection(Ut), yt = F(Rt(), 2), at = yt[0], gt = yt[1], [at, gt];
      },
      setFixedPosition: function(Ut) {
        var yt;
        return n.setFixedPosition(Ut), yt = F(Rt(), 2), at = yt[0], gt = yt[1], [at, gt];
      },
      boundingWidth: at,
      boundingHeight: gt,
      setSize: function(Ut) {
        var yt;
        yt = F(Ut, 2), at = yt[0], gt = yt[1];
      }
    }, !0)));
    var Yt = f;
    f || (!a && s ? Yt = yC(t, [0, 0]) : Yt = n.fixedPosition);
    var xt = [0, 0];
    s || (xt = dE(t, at, gt, st, Yt, !v && p, n)), c && (!c[0] && (xt[0] = 0), !c[1] && (xt[1] = 0));
    function Ct() {
      var Ut;
      nt && (Ut = F(nt([at, gt]), 2), at = Ut[0], gt = Ut[1]), at = Tt(at, U), gt = Tt(gt, U);
    }
    if (mt) {
      lt[0] && lt[1] && xt[0] && xt[1] && (Q(xt[0]) > Q(xt[1]) ? xt[1] = 0 : xt[0] = 0);
      var It = !xt[0] && !xt[1];
      It && Ct(), lt[0] && !lt[1] || xt[0] && !xt[1] || It && P ? (at += xt[0], gt = at / w) : (!lt[0] && lt[1] || !xt[0] && xt[1] || It && !P) && (gt += xt[1], at = gt * w);
    } else
      at += xt[0], gt += xt[1], at = Math.max(0, at), gt = Math.max(0, gt);
    r = F(Ep([at, gt], O, I, mt ? w : !1), 2), at = r[0], gt = r[1], Ct(), mt && (h || pt) && (P ? gt = at / w : at = gt * w), ot = at - D, ct = gt - T;
    var zt = [ot - E, ct - R];
    n.prevWidth = ot, n.prevHeight = ct;
    var qt = xC(t, at, gt, Yt, x, n);
    if (!(!ft && zt.every(function(Ut) {
      return !Ut;
    }) && qt.every(function(Ut) {
      return !Ut;
    }))) {
      var Pt = Br.drag(t, pa(e, t.state, qt, !!s, !1, "draggable")), tt = Pt.transform, ut = y + ot, wt = b + ct, Nt = Bt(t, e, z({ width: ut, height: wt, offsetWidth: Math.round(at), offsetHeight: Math.round(gt), startRatio: w, boundingWidth: at, boundingHeight: gt, direction: st, dist: [ot, ct], delta: zt, isPinch: !!s, drag: Pt }, Vd({
        style: {
          width: "".concat(ut, "px"),
          height: "".concat(wt, "px")
        },
        transform: tt
      }, Pt, e)));
      return !d && dt(t, "onResize", Nt), Nt;
    }
  },
  dragControlAfter: function(t, e) {
    var r = e.datas, n = r.isResize, a = r.startOffsetWidth, s = r.startOffsetHeight, u = r.prevWidth, f = r.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var c = t.state, v = c.width, p = c.height, h = v - (a + u), d = p - (s + f), m = Q(h) > 3, _ = Q(d) > 3;
      if (m && (r.startWidth += h, r.startOffsetWidth += h, r.prevWidth += h), _ && (r.startHeight += d, r.startOffsetHeight += d, r.prevHeight += d), m || _)
        return this.dragControl(t, e);
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.parentEvent;
    if (r.isResize) {
      r.isResize = !1;
      var a = Qr(t, e, {});
      return !n && dt(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: kv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, z(z({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = Ce(t, "resizable", e), s = r.startOffsetWidth, u = r.startOffsetHeight;
    function f() {
      var m = r.minSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.minSize, b = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (b ? y[0] / b : 0), O = u * (E ? y[1] / E : 0);
        m[0] = Math.max(m[0], R), m[1] = Math.max(m[1], O);
      });
    }
    function c() {
      var m = r.maxSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.maxSize, b = x.startOffsetWidth, E = x.startOffsetHeight, R = s * (b ? y[0] / b : 0), O = u * (E ? y[1] / E : 0);
        m[0] = Math.min(m[0], R), m[1] = Math.min(m[1], O);
      });
    }
    var v = Xe(t, this, "dragControlStart", e, function(m, _) {
      return Ro(t, m, r, _);
    });
    f(), c();
    var p = function(m) {
      n.setFixedDirection(m), v.forEach(function(_, x) {
        _.setFixedDirection(m), Ro(t, _.moveable, r, a[x]);
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
    } }), d = dt(t, "onResizeGroupStart", h);
    return r.isResize = d !== !1, r.isResize ? n : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isResize) {
      var n = An(t.props, "resizable");
      $o(t, "onBeforeResize", function(m) {
        dt(t, "onBeforeResizeGroup", Bt(t, e, z(z({}, m), { targets: n.targets }), !0));
      });
      var a = this.dragControl(t, z(z({}, e), { isGroup: !0 }));
      if (a) {
        var s = a.boundingWidth, u = a.boundingHeight, f = a.dist, c = n.keepRatio, v = [
          s / (s - f[0]),
          u / (u - f[1])
        ], p = r.fixedPosition, h = Xe(t, this, "dragControl", e, function(m, _) {
          var x = F(Tr(la(t.rotation / 180 * Math.PI, 3), [
            _.datas.originalX * v[0],
            _.datas.originalY * v[1],
            1
          ], 3), 2), y = x[0], b = x[1];
          return z(z({}, _), { parentDist: null, parentScale: v, dragClient: $t(p, [y, b]), parentKeepRatio: c });
        }), d = z({ targets: n.targets, events: h }, a);
        return dt(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Qr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return dt(t, "onResizeGroupEnd", s), r;
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
function mu(t, e, r, n, a) {
  var s = t.props.groupable, u = t.state, f = u.is3d ? 4 : 3, c = e.origin, v = sr(
    t.state.rootMatrix,
    // TO-DO #710
    bt([c[0], c[1]], s ? [0, 0] : [u.left, u.top]),
    f
  ), p = $t([a.left, a.top], v);
  e.startAbsoluteOrigin = p, e.prevDeg = vr(p, [r, n]) / Math.PI * 180, e.defaultDeg = e.prevDeg, e.prevSnapDeg = 0, e.loop = 0, e.startDist = Ye(p, [r, n]);
}
function bo(t, e, r) {
  var n = r.defaultDeg, a = r.prevDeg, s = a % 360, u = Math.floor(a / 360);
  s < 0 && (s += 360), s > t && s > 270 && t < 90 ? ++u : s < t && s < 90 && t > 270 && --u;
  var f = e * (u * 360 + t - n);
  return r.prevDeg = n + f, f;
}
function _u(t, e, r, n) {
  return bo(vr(n.startAbsoluteOrigin, [t, e]) / Math.PI * 180, r, n);
}
function xu(t, e, r, n, a, s) {
  var u = t.props.throttleRotate, f = u === void 0 ? 0 : u, c = r.prevSnapDeg, v = 0, p = !1;
  if (s) {
    var h = pE(t, e, n, a + n);
    p = h.isSnap, v = a + h.dist;
  }
  p || (v = Tt(a + n, f));
  var d = v - a;
  return r.prevSnapDeg = d, [d - c, d, v];
}
function Bd(t, e, r) {
  var n = F(e, 4), a = n[0], s = n[1], u = n[2], f = n[3];
  if (t === "none")
    return [];
  if (hr(t))
    return t.map(function(y) {
      return Bd(y, [a, s, u, f], r)[0];
    });
  var c = F((t || "top").split("-"), 2), v = c[0], p = c[1], h = [a, s];
  v === "left" ? h = [u, a] : v === "right" ? h = [s, f] : v === "bottom" && (h = [f, u]);
  var d = [
    (h[0][0] + h[1][0]) / 2,
    (h[0][1] + h[1][1]) / 2
  ], m = Xd(h, r);
  if (p) {
    var _ = p === "top" || p === "left", x = v === "bottom" || v === "left";
    d = h[_ && !x || !_ && x ? 0 : 1];
  }
  return [[d, m]];
}
function Uu(t, e) {
  if (e.isRequest)
    return e.requestAble === "rotatable";
  var r = e.inputEvent.target;
  if (yr(r, St("rotation-control")) || t.props.rotateAroundControls && yr(r, St("around-control")) || yr(r, St("control")) && yr(r, St("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Pf(n, !0).some(function(a) {
    return a ? r === a || r.contains(a) : !1;
  }) : !1;
}
var jC = `.rotation {
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
`, tE = {
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
  css: [jC],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? St("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = An(t.props, "rotatable"), n = r.rotatable, a = r.rotationPosition, s = r.zoom, u = r.renderDirections, f = r.rotateAroundControls, c = r.resolveAblesWithRotatable, v = t.getState(), p = v.renderPoses, h = v.direction;
    if (!n)
      return null;
    var d = Bd(a, p, h), m = [];
    if (d.forEach(function(b, E) {
      var R = F(b, 2), O = R[0], I = R[1];
      m.push(e.createElement(
        "div",
        { key: "rotation".concat(E), className: St("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(O[0], "px, ").concat(O[1], "px) rotate(").concat(I, "rad)")
        } },
        e.createElement("div", { className: St("line rotation-line"), style: {
          transform: "scaleX(".concat(s, ")")
        } }),
        e.createElement("div", { className: St("control rotation-control"), style: {
          transform: "translate(0.5px) scale(".concat(s, ")")
        } })
      ));
    }), u) {
      var _ = Ue(c || {}), x = {};
      _.forEach(function(b) {
        c[b].forEach(function(E) {
          x[E] = b;
        });
      });
      var y = [];
      hr(u) && (y = u.map(function(b) {
        var E = x[b];
        return {
          data: E ? { resolve: E } : {},
          classNames: E ? ["move"] : [],
          dir: b
        };
      })), m.push.apply(m, it([], F(md(t, "rotatable", y, e)), !1));
    }
    return f && m.push.apply(m, it([], F(bd(t, e)), !1)), m;
  },
  dragControlCondition: Uu,
  dragControlStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = e.parentRotate, c = e.parentFlag, v = e.isPinch, p = e.isRequest, h = t.state, d = h.target, m = h.left, _ = h.top, x = h.direction, y = h.beforeDirection, b = h.targetTransform, E = h.moveableClientRect, R = h.offsetMatrix, O = h.targetMatrix, I = h.allMatrix, w = h.width, D = h.height;
    if (!p && !d)
      return !1;
    var T = t.getRect();
    a.rect = T, a.transform = b, a.left = m, a.top = _;
    var P = function(lt) {
      var ot = Ad(t.state, lt);
      a.fixedDirection = ot.fixedDirection, a.fixedOffset = ot.fixedOffset, a.fixedPosition = ot.fixedPosition, U && U.setFixedPosition(lt);
    }, B = function(lt) {
      var ot = QC(t.state, lt);
      a.fixedDirection = ot.fixedDirection, a.fixedOffset = ot.fixedOffset, a.fixedPosition = ot.fixedPosition, U && U.setFixedDirection(lt);
    }, H = s, N = u;
    if (p || v || c) {
      var L = f || 0;
      a.beforeInfo = {
        origin: T.beforeOrigin,
        prevDeg: L,
        defaultDeg: L,
        prevSnapDeg: 0,
        startDist: 0
      }, a.afterInfo = z(z({}, a.beforeInfo), { origin: T.origin }), a.absoluteInfo = z(z({}, a.beforeInfo), { origin: T.origin, startValue: L });
    } else {
      var Y = (n = e.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (Y) {
        var X = Y.getAttribute("data-direction") || "", J = oC[X];
        if (J) {
          a.isControl = !0, a.isAroundControl = yr(Y, St("around-control")), a.controlDirection = J;
          var j = Y.getAttribute("data-resolve");
          j && (a.resolveAble = j);
          var V = TE(h.rootMatrix, h.renderPoses, E);
          r = F(Sr(V, J), 2), H = r[0], N = r[1];
        }
      }
      a.beforeInfo = { origin: T.beforeOrigin }, a.afterInfo = { origin: T.origin }, a.absoluteInfo = {
        origin: T.origin,
        startValue: T.rotation
      };
      var nt = P;
      P = function(lt) {
        var ot = h.is3d ? 4 : 3, ct = F($t(Zp(O, ot), lt), 2), mt = ct[0], Rt = ct[1], Wt = Tr(R, On([mt, Rt], ot)), at = Tr(I, On([lt[0], lt[1]], ot));
        nt(lt);
        var gt = h.posDelta;
        a.beforeInfo.origin = bt(Wt, gt), a.afterInfo.origin = bt(at, gt), a.absoluteInfo.origin = bt(at, gt), mu(t, a.beforeInfo, H, N, E), mu(t, a.afterInfo, H, N, E), mu(t, a.absoluteInfo, H, N, E);
      }, B = function(lt) {
        var ot = Sr([
          [0, 0],
          [w, 0],
          [0, D],
          [w, D]
        ], lt);
        P(ot);
      };
    }
    a.startClientX = H, a.startClientY = N, a.direction = x, a.beforeDirection = y, a.startValue = 0, a.datas = {}, Ho(t, e, "rotate");
    var et = !1, U = !1;
    if (a.isControl && a.resolveAble) {
      var ft = a.resolveAble;
      ft === "resizable" && (U = qu.dragControlStart(t, z(z({}, new fi("resizable").dragStart([0, 0], e)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    U || (et = Br.dragStart(t, new fi().dragStart([0, 0], e))), P(OE(t));
    var pt = Bt(t, e, z(z({ set: function(lt) {
      a.startValue = lt * Math.PI / 180;
    }, setFixedDirection: B, setFixedPosition: P }, ko(t, e)), { dragStart: et, resizeStart: U })), st = dt(t, "onRotateStart", pt);
    return a.isRotate = st !== !1, h.snapRenderInfo = {
      request: e.isRequest
    }, a.isRotate ? pt : !1;
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.clientDistX, f = e.clientDistY, c = e.parentRotate, v = e.parentFlag, p = e.isPinch, h = e.groupDelta, d = e.resolveMatrix, m = s.beforeDirection, _ = s.beforeInfo, x = s.afterInfo, y = s.absoluteInfo, b = s.isRotate, E = s.startValue, R = s.rect, O = s.startClientX, I = s.startClientY;
    if (b) {
      Wo(t, e, "rotate");
      var w = sC(e), D = m * w, T = t.props.parentMoveable, P = 0, B, H, N = 0, L, Y, X = 0, J, j, V = 180 / Math.PI * E, nt = y.startValue, et = !1, U = O + u, ft = I + f;
      if (!v && "parentDist" in e) {
        var pt = e.parentDist;
        B = pt, L = pt, J = pt;
      } else p || v ? (B = bo(c, m, _), L = bo(c, D, x), J = bo(c, D, y)) : (B = _u(U, ft, m, _), L = _u(U, ft, D, x), J = _u(U, ft, D, y), et = !0);
      if (H = V + B, Y = V + L, j = nt + J, dt(t, "onBeforeRotate", Bt(t, e, {
        beforeRotation: H,
        rotation: Y,
        absoluteRotation: j,
        setRotation: function(Yt) {
          L = Yt - V, B = L, J = L;
        }
      }, !0)), r = F(xu(t, R, _, B, V, et), 3), P = r[0], B = r[1], H = r[2], n = F(xu(t, R, x, L, V, et), 3), N = n[0], L = n[1], Y = n[2], a = F(xu(t, R, y, J, nt, et), 3), X = a[0], J = a[1], j = a[2], !(!X && !N && !P && !T && !d)) {
        var st = No(s, "rotate(".concat(Y, "deg)"), "rotate(".concat(L, "deg)"));
        d && (s.fixedPosition = yf(t, s.targetAllTransform, s.fixedDirection, s.fixedOffset, s));
        var lt = _C(t, L, s), ot = bt($t(h || [0, 0], lt), s.prevInverseDist || [0, 0]);
        s.prevInverseDist = lt, s.requestValue = null;
        var ct = dd(t, st, ot, p, e), mt = ct, Rt = Ye([U, ft], y.startAbsoluteOrigin) - y.startDist, Wt = void 0;
        if (s.resolveAble === "resizable") {
          var at = qu.dragControl(t, z(z({}, pa(e, t.state, [e.deltaX, e.deltaY], !!p, !1, "resizable")), { resolveMatrix: !0, parentDistance: Rt }));
          at && (Wt = at, mt = Vd(mt, at, e));
        }
        var gt = Bt(t, e, z(z({ delta: N, dist: L, rotate: Y, rotation: Y, beforeDist: B, beforeDelta: P, beforeRotate: H, beforeRotation: H, absoluteDist: J, absoluteDelta: X, absoluteRotate: j, absoluteRotation: j, isPinch: !!p, resize: Wt }, ct), mt));
        return dt(t, "onRotate", gt), gt;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = Qr(t, e, {});
      return dt(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: Uu,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = t.state, a = n.left, s = n.top, u = n.beforeOrigin, f = this.dragControlStart(t, e);
    if (!f)
      return !1;
    f.set(r.beforeDirection * t.rotation);
    var c = Xe(t, this, "dragControlStart", e, function(h, d) {
      var m = h.state, _ = m.left, x = m.top, y = m.beforeOrigin, b = $t(bt([_, x], [a, s]), bt(y, u));
      return d.datas.startGroupClient = b, d.datas.groupClient = b, z(z({}, d), { parentRotate: 0 });
    }), v = z(z({}, f), { targets: t.props.targets, events: c }), p = dt(t, "onRotateGroupStart", v);
    return r.isRotate = p !== !1, r.isRotate ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      $o(t, "onBeforeRotate", function(v) {
        dt(t, "onBeforeRotateGroup", Bt(t, e, z(z({}, v), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = r.beforeDirection, s = n.beforeDist, u = s / 180 * Math.PI, f = Xe(t, this, "dragControl", e, function(v, p) {
          var h = p.datas.startGroupClient, d = F(p.datas.groupClient, 2), m = d[0], _ = d[1], x = F(fa(h, u * a), 2), y = x[0], b = x[1], E = [y - m, b - _];
          return p.datas.groupClient = [y, b], z(z({}, p), { parentRotate: s, groupDelta: E });
        });
        t.rotation = a * n.beforeRotation;
        var c = z({ targets: t.props.targets, events: f, set: function(v) {
          t.rotation = v;
        }, setGroupRotation: function(v) {
          t.rotation = v;
        } }, n);
        return dt(t, "onRotateGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Qr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return dt(t, "onRotateGroupEnd", s), r;
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
function rE(t, e) {
  var r, n = t.direction, a = t.classNames, s = t.size, u = t.pos, f = t.zoom, c = t.key, v = n === "horizontal", p = v ? "Y" : "X";
  return e.createElement("div", {
    key: c,
    className: a.join(" "),
    style: (r = {}, r[v ? "width" : "height"] = "".concat(s), r.transform = "translate(".concat(u[0], ", ").concat(u[1], ") translate").concat(p, "(-50%) scale").concat(p, "(").concat(f, ")"), r)
  });
}
function Df(t, e) {
  return rE(z(z({}, t), { classNames: it([
    St("line", "guideline", t.direction)
  ], F(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(Tt(r, 0.1), "px");
  }) }), e);
}
function Hv(t, e, r, n, a, s, u, f) {
  var c = t.props.zoom;
  return r.map(function(v, p) {
    var h = v.type, d = v.pos, m = [0, 0];
    return m[u] = n, m[u ? 0 : 1] = -a + d, Df({
      key: "".concat(e, "TargetGuideline").concat(p),
      classNames: [St("target", "bold", h)],
      posValue: m,
      sizeValue: s,
      zoom: c,
      direction: e
    }, f);
  });
}
function Yv(t, e, r, n, a, s) {
  var u = t.props, f = u.zoom, c = u.isDisplayInnerSnapDigit, v = e === "horizontal" ? cn : vn, p = a[v.start], h = a[v.end];
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
    var _ = d.pos, x = d.size, y = d.element, b = d.className, E = [
      -n[0] + _[0],
      -n[1] + _[1]
    ];
    return Df({
      key: "".concat(e, "-default-guideline-").concat(m),
      classNames: y ? [St("bold"), b] : [St("normal"), b],
      direction: e,
      posValue: E,
      sizeValue: x,
      zoom: f
    }, s);
  });
}
function Xi(t, e, r, n, a, s, u, f) {
  var c, v = t.props, p = v.snapDigit, h = p === void 0 ? 0 : p, d = v.isDisplaySnapDigit, m = d === void 0 ? !0 : d, _ = v.snapDistFormat, x = _ === void 0 ? function(I, w) {
    return I;
  } : _, y = v.zoom, b = e === "horizontal" ? "X" : "Y", E = e === "vertical" ? "height" : "width", R = Math.abs(a), O = m ? parseFloat(R.toFixed(h)) : 0;
  return f.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: St("guideline-group", e), style: (c = {
      left: "".concat(s[0], "px"),
      top: "".concat(s[1], "px")
    }, c[E] = "".concat(R, "px"), c) },
    Df({
      direction: e,
      classNames: [St(r), u],
      size: "100%",
      posValue: [0, 0],
      sizeValue: R,
      zoom: y
    }, f),
    f.createElement("div", { className: St("size-value", "gap"), style: {
      transform: "translate".concat(b, "(-50%) scale(").concat(y, ")")
    } }, O > 0 ? x(O, e) : "")
  );
}
function eE(t, e, r, n) {
  var a = t === "vertical" ? 0 : 1, s = t === "vertical" ? 1 : 0, u = a ? cn : vn, f = r[u.start], c = r[u.end];
  return Kd(e, function(v) {
    return v.pos[a];
  }).map(function(v) {
    var p = [], h = [], d = [];
    return v.forEach(function(m) {
      var _, x, y = m.element, b = m.elementRect.rect;
      if (b[u.end] < f)
        p.push(m);
      else if (c < b[u.start])
        h.push(m);
      else if (b[u.start] <= f && c <= b[u.end] && n) {
        var E = m.pos, R = { element: y, rect: z(z({}, b), (_ = {}, _[u.end] = b[u.start], _)) }, O = { element: y, rect: z(z({}, b), (x = {}, x[u.start] = b[u.end], x)) }, I = [0, 0], w = [0, 0];
        I[a] = E[a], I[s] = E[s], w[a] = E[a], w[s] = E[s] + m.size, p.push({
          type: t,
          pos: I,
          size: 0,
          elementRect: R,
          direction: "",
          elementDirection: "end"
        }), h.push({
          type: t,
          pos: w,
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
function nE(t, e, r, n, a) {
  var s = t.props.isDisplayInnerSnapDigit, u = [];
  return ["vertical", "horizontal"].forEach(function(f) {
    var c = e.filter(function(y) {
      return y.type === f;
    }), v = f === "vertical" ? 1 : 0, p = v ? 0 : 1, h = eE(f, c, n, s), d = v ? vn : cn, m = v ? cn : vn, _ = n[d.start], x = n[d.end];
    h.forEach(function(y) {
      var b = y.total, E = y.start, R = y.end, O = y.inner, I = r[p] + b[0].pos[p] - n[m.start], w = n;
      E.forEach(function(D) {
        var T = D.elementRect.rect, P = w[d.start] - T[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + w[d.start] - _ - P, B[p] = I, u.push(Xi(t, f, "dashed", u.length, P, B, D.className, a));
        }
        w = T;
      }), w = n, R.forEach(function(D) {
        var T = D.elementRect.rect, P = T[d.start] - w[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + w[d.end] - _, B[p] = I, u.push(Xi(t, f, "dashed", u.length, P, B, D.className, a));
        }
        w = T;
      }), O.forEach(function(D) {
        var T = D.elementRect.rect, P = _ - T[d.start], B = T[d.end] - x, H = [0, 0], N = [0, 0];
        H[v] = r[v] - P, H[p] = I, N[v] = r[v] + x - _, N[p] = I, u.push(Xi(t, f, "dashed", u.length, P, H, D.className, a)), u.push(Xi(t, f, "dashed", u.length, B, N, D.className, a));
      });
    });
  }), u;
}
function iE(t, e, r, n, a) {
  var s = [];
  return ["horizontal", "vertical"].forEach(function(u) {
    var f = e.filter(function(y) {
      return y.type === u;
    }).slice(0, 1), c = u === "vertical" ? 0 : 1, v = c ? 0 : 1, p = c ? vn : cn, h = c ? cn : vn, d = n[p.start], m = n[p.end], _ = n[h.start], x = n[h.end];
    f.forEach(function(y) {
      var b = y.gap, E = y.gapRects, R = Math.max.apply(Math, it([_], F(E.map(function(w) {
        var D = w.rect;
        return D[h.start];
      })), !1)), O = Math.min.apply(Math, it([x], F(E.map(function(w) {
        var D = w.rect;
        return D[h.end];
      })), !1)), I = (R + O) / 2;
      R === O || I === (_ + x) / 2 || E.forEach(function(w) {
        var D = w.rect, T = w.className, P = [r[0], r[1]];
        if (D[p.end] < d)
          P[c] += D[p.end] - d;
        else if (m < D[p.start])
          P[c] += D[p.start] - d - b;
        else
          return;
        P[v] += I - _, s.push(Xi(t, c ? "vertical" : "horizontal", "gap", s.length, b, P, T, a));
      });
    });
  }), s;
}
function $u(t) {
  var e, r, n = t.state, a = n.containerClientRect, s = n.hasFixed, u = a.overflow, f = a.scrollHeight, c = a.scrollWidth, v = a.clientHeight, p = a.clientWidth, h = a.clientLeft, d = a.clientTop, m = t.props, _ = m.snapGap, x = _ === void 0 ? !0 : _, y = m.verticalGuidelines, b = m.horizontalGuidelines, E = m.snapThreshold, R = E === void 0 ? 5 : E, O = m.maxSnapElementGuidelineDistance, I = O === void 0 ? 1 / 0 : O, w = m.isDisplayGridGuidelines, D = le(ve(t.state)), T = D.top, P = D.left, B = D.bottom, H = D.right, N = { top: T, left: P, bottom: B, right: H, center: (P + H) / 2, middle: (T + B) / 2 }, L = uE(t), Y = it([], F(L), !1), X = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(nt) {
    return nt * R;
  });
  x && Y.push.apply(Y, it([], F(aE(t, N, X)), !1));
  var J = z({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (Y.push.apply(Y, it([], F(sE(t, u ? c : p, u ? f : v, h, d, J, w)), !1)), s) {
    var j = a.left, V = a.top;
    J.left += j, J.top += V, J.right += j, J.bottom += V;
  }
  return Y.push.apply(Y, it([], F(Gd(b || !1, y || !1, u ? c : p, u ? f : v, h, d, J)), !1)), Y = Y.filter(function(nt) {
    var et = nt.element, U = nt.elementRect, ft = nt.type;
    if (!et || !U)
      return !0;
    var pt = U.rect;
    return zd(N, pt, ft, I);
  }), Y;
}
function aE(t, e, r) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, s = a === void 0 ? 1 / 0 : a, u = n.maxSnapElementGapDistance, f = u === void 0 ? 1 / 0 : u, c = t.state.elementRects, v = [];
  return [
    ["vertical", cn, vn],
    ["horizontal", vn, cn]
  ].forEach(function(p) {
    var h = F(p, 3), d = h[0], m = h[1], _ = h[2], x = e[m.start], y = e[m.end], b = e[m.center], E = e[_.start], R = e[_.end], O = {
      left: r[0],
      top: r[1]
    };
    function I(T) {
      var P = T.rect, B = O[m.start];
      return P[m.end] < x + B ? x - P[m.end] : y - B < P[m.start] ? P[m.start] - y : -1;
    }
    var w = c.filter(function(T) {
      var P = T.rect;
      return P[_.start] > R || P[_.end] < E ? !1 : I(T) > 0;
    }).sort(function(T, P) {
      return I(T) - I(P);
    }), D = [];
    w.forEach(function(T) {
      w.forEach(function(P) {
        if (T !== P) {
          var B = T.rect, H = P.rect, N = B[_.start], L = B[_.end], Y = H[_.start], X = H[_.end];
          N > X || Y > L || D.push([T, P]);
        }
      });
    }), D.forEach(function(T) {
      var P = F(T, 2), B = P[0], H = P[1], N = B.rect, L = H.rect, Y = N[m.start], X = N[m.end], J = L[m.start], j = L[m.end], V = O[m.start], nt = 0, et = 0, U = !1, ft = !1, pt = !1;
      if (X <= x && y <= J) {
        if (ft = !0, nt = (J - X - (y - x)) / 2, et = X + nt + (y - x) / 2, Q(et - b) > V)
          return;
      } else if (X < J && j < x + V) {
        if (U = !0, nt = J - X, et = j + nt, Q(et - x) > V)
          return;
      } else if (X < J && y - V < Y) {
        if (pt = !0, nt = J - X, et = Y - nt, Q(et - y) > V)
          return;
      } else
        return;
      nt && zd(e, L, d, s) && (nt > f || v.push({
        type: d,
        pos: d === "vertical" ? [et, 0] : [0, et],
        element: H.element,
        size: 0,
        className: H.className,
        isStart: U,
        isCenter: ft,
        isEnd: pt,
        gap: nt,
        hide: !0,
        gapRects: [B, H],
        direction: "",
        elementDirection: ""
      }));
    });
  }), v;
}
function oE(t, e, r, n) {
  var a, s, u = t.props, f = t.state, c = u.snapGridAll, v = u.snapGridWidth, p = v === void 0 ? 0 : v, h = u.snapGridHeight, d = h === void 0 ? 0 : h, m = f.snapRenderInfo, _ = m && (((a = m.direction) === null || a === void 0 ? void 0 : a[0]) || ((s = m.direction) === null || s === void 0 ? void 0 : s[1])), x = t.moveables;
  if (c && x && _ && (p || d)) {
    if (f.snapThresholdInfo)
      return;
    f.snapThresholdInfo = {
      multiples: [1, 1],
      offset: [0, 0]
    };
    var y = t.getRect(), b = y.children, E = m.direction;
    if (b) {
      var R = E.map(function(I, w) {
        var D = w === 0 ? {
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
        var N = y[B], L = y[P], Y = wp(b.map(function(U) {
          return [
            U[P] - L,
            U[B],
            N - U[B] - U[P] + L
          ];
        })).filter(function(U) {
          return U;
        }).sort(function(U, ft) {
          return U - ft;
        }), X = Y[0], J = Y.map(function(U) {
          return Tt(U / X, 0.1) * T;
        }), j = 1, V = Tt(N / X, 0.1);
        for (j = 1; j <= 10 && !J.every(function(U) {
          return U * j % 1 === 0;
        }); ++j)
          ;
        var nt = (-I + 1) / 2, et = Co(L - H, L - H + N, nt, 1 - nt);
        return {
          multiple: V * j,
          dir: I,
          snapSize: T,
          snapOffset: Math.round(et / T)
        };
      }), O = R.map(function(I) {
        return I.multiple || 1;
      });
      f.snapThresholdInfo.multiples = O, f.snapThresholdInfo.offset = R.map(function(I) {
        return I.snapOffset;
      }), R.forEach(function(I, w) {
        I.snapSize;
      });
    }
  } else
    f.snapThresholdInfo = null;
}
function sE(t, e, r, n, a, s, u) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var f = t.props, c = t.state, v = f.snapGridWidth, p = v === void 0 ? 0 : v, h = f.snapGridHeight, d = h === void 0 ? 0 : h, m = [], _ = s.left, x = s.top, y = [0, 0];
  oE(t, n, a, s);
  var b = c.snapThresholdInfo, E = p, R = d;
  if (b && (p *= b.multiples[0] || 1, d *= b.multiples[1] || 1, y = b.offset), d) {
    for (var O = function(w) {
      m.push({
        type: "horizontal",
        pos: [
          _,
          Tt(y[1] * R + w - a + x, 0.1)
        ],
        className: St("grid-guideline"),
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
          Tt(y[0] * E + D - n + _, 0.1),
          x
        ],
        className: St("grid-guideline"),
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
function zd(t, e, r, n) {
  return r === "horizontal" ? Q(t.right - e.left) <= n || Q(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? Q(t.bottom - e.top) <= n || Q(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function uE(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var a = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), s = n.map(function(d) {
    return Ee(d) && "element" in d ? z(z({}, d), { element: Oe(d.element, !0) }) : {
      element: Oe(d, !0)
    };
  }).filter(function(d) {
    return d.element;
  }), u = yb(a.map(function(d) {
    return d.element;
  }), s.map(function(d) {
    return d.element;
  })), f = u.maintained, c = u.added, v = [];
  f.forEach(function(d) {
    var m = F(d, 2), _ = m[0], x = m[1];
    v[x] = a[_];
  }), fE(t, c.map(function(d) {
    return s[d];
  })).map(function(d, m) {
    v[c[m]] = d;
  }), e.elementRects = v;
  var p = bf(t.props.elementSnapDirections), h = [];
  return v.forEach(function(d) {
    var m = d.element, _ = d.top, x = _ === void 0 ? p.top : _, y = d.left, b = y === void 0 ? p.left : y, E = d.right, R = E === void 0 ? p.right : E, O = d.bottom, I = O === void 0 ? p.bottom : O, w = d.center, D = w === void 0 ? p.center : w, T = d.middle, P = T === void 0 ? p.middle : T, B = d.className, H = d.rect, N = Cf({
      top: x,
      right: R,
      left: b,
      bottom: I,
      center: D,
      middle: P
    }, H), L = N.horizontal, Y = N.vertical, X = N.horizontalNames, J = N.verticalNames, j = H.top, V = H.left, nt = H.right - V, et = H.bottom - j, U = [nt, et];
    Y.forEach(function(ft, pt) {
      h.push({
        type: "vertical",
        element: m,
        pos: [
          Tt(ft, 0.1),
          j
        ],
        size: et,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Bv[J[pt]] || J[pt],
        direction: ""
      });
    }), L.forEach(function(ft, pt) {
      h.push({
        type: "horizontal",
        element: m,
        pos: [
          V,
          Tt(ft, 0.1)
        ],
        size: nt,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Bv[X[pt]] || X[pt],
        direction: ""
      });
    });
  }), h;
}
function Xv(t, e) {
  return t ? t.map(function(r) {
    var n = Ee(r) ? r : { pos: r }, a = n.pos;
    return si(a) ? n : z(z({}, n), { pos: Qt(a, e) });
  }) : [];
}
function Gd(t, e, r, n, a, s, u) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = { left: 0, top: 0, right: 0, bottom: 0 });
  var f = [], c = u.left, v = u.top, p = u.bottom, h = u.right, d = r + h - c, m = n + p - v;
  return Xv(t, m).forEach(function(_) {
    f.push({
      type: "horizontal",
      pos: [
        c,
        Tt(_.pos - s + v, 0.1)
      ],
      size: d,
      className: _.className,
      direction: ""
    });
  }), Xv(e, d).forEach(function(_) {
    f.push({
      type: "vertical",
      pos: [
        Tt(_.pos - a + c, 0.1),
        v
      ],
      size: m,
      className: _.className,
      direction: ""
    });
  }), f;
}
function fE(t, e) {
  if (!e.length)
    return [];
  var r = t.props.groupable, n = t.state, a = n.containerClientRect, s = n.rootMatrix, u = n.is3d, f = n.offsetDelta, c = u ? 4 : 3, v = F(AC(s, a, c), 2), p = v[0], h = v[1], d = r ? 0 : f[0], m = r ? 0 : f[1];
  return e.map(function(_) {
    var x = _.element.getBoundingClientRect(), y = x.left - p - d, b = x.top - h - m, E = b + x.height, R = y + x.width, O = F(vi(s, [y, b], c), 2), I = O[0], w = O[1], D = F(vi(s, [R, E], c), 2), T = D[0], P = D[1];
    return z(z({}, _), { rect: {
      left: I,
      right: T,
      top: w,
      bottom: P,
      center: (I + T) / 2,
      middle: (w + P) / 2
    } });
  });
}
function po(t) {
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
    var u = Oe(n, !0);
    if (u) {
      var f = Zi(u), c = Zv(e, [
        f.left - a.left,
        f.top - a.top
      ]), v = Zv(e, [
        f.right - a.right,
        f.bottom - a.bottom
      ]);
      s.left = Tt(c[0], 1e-5), s.top = Tt(c[1], 1e-5), s.right = Tt(v[0], 1e-5), s.bottom = Tt(v[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = s, e.guidelines = $u(t), e.enableSnap = !0, !0;
}
function Fd(t, e, r, n, a, s) {
  var u = zn(t, e, r, s ? 4 : 3), f = Sr(u, n);
  return Rf(u, bt(a, f));
}
function qv(t) {
  return t ? t / Q(t) : 0;
}
function lE(t, e, r, n, a, s) {
  var u = s.fixedDirection, f = FC(r, u, n), c = wf(t, e, r, n), v = it(it([], F(KC(t, e, f, n, a, s)), !1), F(Id(t, c, s)), !1), p = To(v, 0), h = To(v, 1);
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
function cE(t, e, r, n, a, s, u, f, c) {
  var v = Sr(e, u), p = qo(t, f, {
    vertical: [v[0]],
    horizontal: [v[1]]
  }), h = p.horizontal.offset, d = p.vertical.offset;
  if (Tt(d, Nu) || Tt(h, Nu)) {
    var m = F(Pe({
      datas: c,
      distX: -d,
      distY: -h
    }), 2), _ = m[0], x = m[1], y = Math.min(a || 1 / 0, r + u[0] * _), b = Math.min(s || 1 / 0, n + u[1] * x);
    return [y - r, b - n];
  }
  return [0, 0];
}
function Ld(t, e, r, n, a, s, u, f) {
  for (var c = ve(t.state), v = t.props.keepRatio, p = 0, h = 0, d = 0; d < 2; ++d) {
    var m = e(p, h), _ = lE(t, m, a, v, u, f), x = _.width, y = _.height, b = x.isBound, E = y.isBound, R = x.offset, O = y.offset;
    if (d === 1 && (b || (R = 0), E || (O = 0)), d === 0 && u && !b && !E)
      return [0, 0];
    if (v) {
      var I = Q(R) * (r ? 1 / r : 1), w = Q(O) * (n ? 1 / n : 1), D = b && E ? I < w : E || !b && I < w;
      D ? R = r * O / n : O = n * R / r;
    }
    p += R, h += O;
  }
  if (!v && a[0] && a[1]) {
    var T = JC(t, c, a, s, f), P = T.maxWidth, B = T.maxHeight, H = F(cE(t, e(p, h).map(function(Y) {
      return Y.map(function(X) {
        return Tt(X, Nu);
      });
    }), r + p, n + h, P, B, a, u, f), 2), R = H[0], O = H[1];
    p += R, h += O;
  }
  return [p, h];
}
function Vi(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function vE(t, e) {
  e = Vi(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, a = r * 360 + e;
  return Q(t - n) < Q(t - a) ? n : a;
}
function yu(t, e) {
  t = Vi(t), e = Vi(e);
  var r = Vi(t - e);
  return Math.min(r, 360 - r);
}
function pE(t, e, r, n) {
  var a, s = t.props, u = (a = s[Cd]) !== null && a !== void 0 ? a : 5, f = s[Ed];
  if (_i(t, "rotatable")) {
    var c = e.pos1, v = e.pos2, p = e.pos3, h = e.pos4, d = e.origin, m = r * Math.PI / 180, _ = [c, v, p, h].map(function(O) {
      return bt(O, d);
    }), x = _.map(function(O) {
      return fa(O, m);
    }), y = it(it([], F(TC(t, _, x, d, r)), !1), F(YC(t, _, x, d, r)), !1);
    y.sort(function(O, I) {
      return Q(O - r) - Q(I - r);
    });
    var b = y.length > 0;
    if (b)
      return {
        isSnap: b,
        dist: b ? y[0] : r
      };
  }
  if (f?.length && u) {
    var E = f.slice().sort(function(O, I) {
      return yu(O, n) - yu(I, n);
    }), R = E[0];
    if (yu(R, n) <= u)
      return {
        isSnap: !0,
        dist: r + vE(n, R) - n
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function dE(t, e, r, n, a, s, u) {
  if (!_i(t, "resizable"))
    return [0, 0];
  var f = u.fixedDirection, c = u.nextAllMatrix, v = t.state, p = v.allMatrix, h = v.is3d;
  return Ld(t, function(d, m) {
    return Fd(c || p, e + d, r + m, f, a, h);
  }, e, r, n, a, s, u);
}
function hE(t, e, r, n, a) {
  if (!_i(t, "scalable"))
    return [0, 0];
  var s = a.startOffsetWidth, u = a.startOffsetHeight, f = a.fixedPosition, c = a.fixedDirection, v = a.is3d, p = Ld(t, function(h, d) {
    return Fd(dC(a, $t(e, [h / s, d / u])), s, u, c, f, v);
  }, s, u, r, f, n, a);
  return [p[0] / s, p[1] / u];
}
function gE(t, e) {
  e.absolutePoses = ve(t.state);
}
function Uv(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Xr(e, function(s) {
        return s.guideline === a;
      }) || (a.direction = "", e.push({ guideline: a, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, a = r.posInfo;
    return z(z({}, n), { direction: a.direction });
  });
}
function $v(t, e, r, n, a, s) {
  var u = Sf(Yo(t, s), e, r), f = u.vertical, c = u.horizontal, v = ni();
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
  var p = XC(t), h = p.boundMap, d = p.vertical, m = p.horizontal;
  return d.forEach(function(_) {
    qe(n, function(x) {
      var y = x.type, b = x.pos;
      return y === "bounds" && b === _;
    }) >= 0 || n.push({
      type: "bounds",
      pos: _
    });
  }), m.forEach(function(_) {
    qe(a, function(x) {
      var y = x.type, b = x.pos;
      return y === "bounds" && b === _;
    }) >= 0 || a.push({
      type: "bounds",
      pos: _
    });
  }), {
    boundMap: v,
    innerBoundMap: h
  };
}
var mE = If("", ["resizable", "scalable"]), _E = {
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
    Cd,
    Ed,
    wd,
    Dd,
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
    if (!v || !v.render || !_i(t, ""))
      return ai(t, "boundMap", ni(), function(st) {
        return JSON.stringify(st);
      }), ai(t, "innerBoundMap", ni(), function(st) {
        return JSON.stringify(st);
      }), [];
    r.guidelines = $u(t);
    var d = Math.min(s[0], u[0], f[0], c[0]), m = Math.min(s[1], u[1], f[1], c[1]), _ = v.externalPoses || [], x = ve(t.state), y = [], b = [], E = [], R = [], O = [], I = le(x), w = I.width, D = I.height, T = I.top, P = I.left, B = I.bottom, H = I.right, N = { left: P, right: H, top: T, bottom: B, center: (P + H) / 2, middle: (T + B) / 2 }, L = _.length > 0, Y = L ? le(_) : {};
    if (!v.request) {
      if (v.direction && O.push(GC(t, x, v.direction, h, h)), v.snap) {
        var X = le(x);
        v.center && (X.middle = (X.top + X.bottom) / 2, X.center = (X.left + X.right) / 2), O.push(zv(t, X, h, h));
      }
      L && (v.center && (Y.middle = (Y.top + Y.bottom) / 2, Y.center = (Y.left + Y.right) / 2), O.push(zv(t, Y, h, h))), O.forEach(function(st) {
        var lt = st.vertical.posInfos, ot = st.horizontal.posInfos;
        y.push.apply(y, it([], F(lt.filter(function(ct) {
          var mt = ct.guidelineInfos;
          return mt.some(function(Rt) {
            var Wt = Rt.guideline;
            return !Wt.hide;
          });
        }).map(function(ct) {
          return {
            type: "snap",
            pos: ct.pos
          };
        })), !1)), b.push.apply(b, it([], F(ot.filter(function(ct) {
          var mt = ct.guidelineInfos;
          return mt.some(function(Rt) {
            var Wt = Rt.guideline;
            return !Wt.hide;
          });
        }).map(function(ct) {
          return {
            type: "snap",
            pos: ct.pos
          };
        })), !1)), E.push.apply(E, it([], F(Uv(lt)), !1)), R.push.apply(R, it([], F(Uv(ot)), !1));
      });
    }
    var J = $v(t, [P, H], [T, B], y, b), j = J.boundMap, V = J.innerBoundMap;
    L && $v(t, [Y.left, Y.right], [Y.top, Y.bottom], y, b, v.externalBounds);
    var nt = it(it([], F(E), !1), F(R), !1), et = nt.filter(function(st) {
      return st.element && !st.gapRects;
    }), U = nt.filter(function(st) {
      return st.gapRects;
    }).sort(function(st, lt) {
      return st.gap - lt.gap;
    });
    dt(t, "onSnap", {
      guidelines: nt.filter(function(st) {
        var lt = st.element;
        return !lt;
      }),
      elements: et,
      gaps: U
    }, !0);
    var ft = ai(t, "boundMap", j, function(st) {
      return JSON.stringify(st);
    }, ni()), pt = ai(t, "innerBoundMap", V, function(st) {
      return JSON.stringify(st);
    }, ni());
    return (j === ft || V === pt) && dt(t, "onBound", {
      bounds: j,
      innerBounds: V
    }, !0), it(it(it(it(it(it([], F(nE(t, et, [d, m], N, e)), !1), F(iE(t, U, [d, m], N, e)), !1), F(Yv(t, "horizontal", R, [a, n], N, e)), !1), F(Yv(t, "vertical", E, [a, n], N, e)), !1), F(Hv(t, "horizontal", b, d, n, w, 0, e)), !1), F(Hv(t, "vertical", y, m, a, D, 1, e)), !1);
  },
  dragStart: function(t, e) {
    t.state.snapRenderInfo = {
      request: e.isRequest,
      snap: !0,
      center: !0
    }, po(t);
  },
  drag: function(t) {
    var e = t.state;
    po(t) || (e.guidelines = $u(t)), e.snapRenderInfo && (e.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, e) {
    if (mE(t, e) || Uu(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return yr(e.inputEvent.target, St("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, po(t);
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
    t.state.snapRenderInfo = null, po(t);
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
function xE(t, e) {
  return [
    t[0] * e[0],
    t[1] * e[1]
  ];
}
function St() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return dS.apply(void 0, it([mf], F(t), !1));
}
function Wd(t) {
  t();
}
function yE(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : Ee(t) ? t : ta(t);
}
function Ki(t, e, r) {
  return wo(e, In(r, e), t, In(r.map(function(n) {
    return -n;
  }), e));
}
function SE(t, e, r) {
  if (e === "%") {
    var n = Mf(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function bE(t) {
  var e = CE(Tf(t, ":before"));
  return e.map(function(r, n) {
    var a = aa(r), s = a.value, u = a.unit;
    return s * SE(t, u, n === 0);
  });
}
function Io(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function CE(t) {
  return Io(t.transformOrigin);
}
function Nd(t) {
  var e = qr(t), r = e("transform");
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
function ea(t, e, r, n, a) {
  var s, u, f = of(t) || pn(t), c = !1, v, p;
  if (!t || r)
    v = t;
  else {
    var h = (s = t?.assignedSlot) === null || s === void 0 ? void 0 : s.parentElement, d = t.parentElement;
    h ? (c = !0, p = d, v = h) : v = d;
  }
  for (var m = !1, _ = t === e || v === e, x = "relative", y = 1, b = parseFloat(a?.("zoom")) || 1, E = a?.("position"); v && v !== f; ) {
    e === v && (_ = !0);
    var R = qr(v), O = v.tagName.toLowerCase(), I = Nd(v), w = R("willChange"), D = parseFloat(R("zoom")) || 1;
    if (x = R("position"), n && D !== 1) {
      y = D;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && n && b !== 1 && E && E !== "absolute" || O === "svg" || O === "foreignobject" || x !== "static" || I && I !== "none" || w === "transform"
    )
      break;
    var T = (u = t?.assignedSlot) === null || u === void 0 ? void 0 : u.parentNode, P = v.parentNode;
    T && (c = !0, p = P);
    var B = P;
    if (B && B.nodeType === 11) {
      v = B.host, m = !0, x = qr(v)("position");
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
function EE(t, e) {
  var r, n = t.tagName.toLowerCase(), a = t.offsetLeft, s = t.offsetTop, u = qr(t), f = ia(a), c = !f, v, p;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (v = ad ? bE(t) : Io(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice(), c = !0, n === "svg" ? (a = 0, s = 0) : (r = F(ME(t, v, t === e && e.tagName.toLowerCase() === "g"), 4), a = r[0], s = r[1], v[0] = r[2], v[1] = r[3])) : (v = Io(u("transformOrigin")).map(function(h) {
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
function kd(t, e) {
  var r = qr(t), n = qr(pn(t)), a = n("position");
  if (!e && (!a || a === "static"))
    return [0, 0];
  var s = parseInt(n("marginLeft"), 10), u = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (u = 0), (r("left") !== "auto" || r("right") !== "auto") && (s = 0)), [s, u];
}
function Vu(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = we(r, 3, 4));
  });
}
function wE(t) {
  for (var e = t.parentElement, r = !1, n = pn(t); e; ) {
    var a = Tf(e).transform;
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
function Uo(t, e) {
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(Jp(t, !e).join(","), ")");
}
function Mf(t) {
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
function DE(t, e) {
  var r, n = Mf(t), a = n.width, s = n.height, u = n.clientWidth, f = n.clientHeight, c = u / a, v = f / s, p = t.preserveAspectRatio.baseVal, h = p.align, d = p.meetOrSlice, m = [0, 0], _ = [c, v], x = [0, 0];
  if (h !== 1) {
    var y = (h - 2) % 3, b = Math.floor((h - 2) / 3);
    m[0] = a * y / 2, m[1] = s * b / 2;
    var E = d === 2 ? Math.max(v, c) : Math.min(c, v);
    _[0] = E, _[1] = E, x[0] = (u - a) / 2 * y, x[1] = (f - s) / 2 * b;
  }
  var R = pf(_, e);
  return r = F(x, 2), R[e * (e - 1)] = r[0], R[e * (e - 1) + 1] = r[1], Ki(R, e, m);
}
function ME(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var a = qr(t), s = a("transform-box") === "fill-box", u = t.getBBox(), f = Mf(t.ownerSVGElement), c = u.x, v = u.y;
  n === "foreignobject" && !c && !v && (c = parseFloat(t.getAttribute("x")) || 0, v = parseFloat(t.getAttribute("y")) || 0);
  var p = c - f.x, h = v - f.y, d = s ? e[0] : e[0] - p, m = s ? e[1] : e[1] - h;
  return [p, h, d, m];
}
function sr(t, e, r) {
  return Tr(t, On(e, r), r);
}
function zn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(a) {
    return sr(t, a, n);
  });
}
function le(t) {
  var e = t.map(function(v) {
    return v[0];
  }), r = t.map(function(v) {
    return v[1];
  }), n = Math.min.apply(Math, it([], F(e), !1)), a = Math.min.apply(Math, it([], F(r), !1)), s = Math.max.apply(Math, it([], F(e), !1)), u = Math.max.apply(Math, it([], F(r), !1)), f = s - n, c = u - a;
  return {
    left: n,
    top: a,
    right: s,
    bottom: u,
    width: f,
    height: c
  };
}
function Vv(t, e, r, n) {
  var a = zn(t, e, r, n);
  return le(a);
}
function RE(t, e, r, n, a) {
  var s, u = t.target, f = t.origin, c = e.matrix, v = Yd(u), p = v.offsetWidth, h = v.offsetHeight, d = r.getBoundingClientRect(), m = [0, 0];
  r === pn(r) && (m = kd(u, !0));
  for (var _ = u.getBoundingClientRect(), x = _.left - d.left + r.scrollLeft - (r.clientLeft || 0) + m[0], y = _.top - d.top + r.scrollTop - (r.clientTop || 0) + m[1], b = _.width, E = _.height, R = wo(n, a, c), O = Vv(R, p, h, n), I = O.left, w = O.top, D = O.width, T = O.height, P = sr(R, f, n), B = bt(P, [I, w]), H = [
    x + B[0] * b / D,
    y + B[1] * E / T
  ], N = [0, 0], L = 0; ++L < 10; ) {
    var Y = Ie(a, n);
    s = F(bt(sr(Y, H, n), sr(Y, P, n)), 2), N[0] = s[0], N[1] = s[1];
    var X = wo(n, a, In(N, n), c), J = Vv(X, p, h, n), j = J.left, V = J.top, nt = j - x, et = V - y;
    if (Q(nt) < 2 && Q(et) < 2)
      break;
    H[0] -= nt, H[1] -= et;
  }
  return N.map(function(U) {
    return Math.round(U);
  });
}
function TE(t, e, r) {
  var n = t.length === 16, a = n ? 4 : 3, s = e.map(function(c) {
    return sr(t, c, a);
  }), u = r.left, f = r.top;
  return s.map(function(c) {
    return [c[0] + u, c[1] + f];
  });
}
function ce(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function Hd(t, e) {
  return ce([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function qi(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = vr(t, e));
  var a = Hd(t, e);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(r, ")"),
    width: "".concat(a, "px")
  };
}
function Po(t, e) {
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
function An(t, e) {
  var r = t[e];
  return Ee(r) ? z(z({}, t), r) : t;
}
function Yd(t) {
  var e = t && !ia(t.offsetWidth), r = 0, n = 0, a = 0, s = 0, u = 0, f = 0, c = 0, v = 0, p = 0, h = 0, d = 0, m = 0, _ = 1 / 0, x = 1 / 0, y = 1 / 0, b = 1 / 0, E = 0, R = 0, O = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var I = t.getBBox();
      O = !0, r = I.width, n = I.height, u = r, f = n, c = r, v = n, a = r, s = n;
    } else {
      var w = qr(t), D = t.style, T = w("boxSizing") === "border-box", P = parseFloat(w("borderLeftWidth")) || 0, B = parseFloat(w("borderRightWidth")) || 0, H = parseFloat(w("borderTopWidth")) || 0, N = parseFloat(w("borderBottomWidth")) || 0, L = parseFloat(w("paddingLeft")) || 0, Y = parseFloat(w("paddingRight")) || 0, X = parseFloat(w("paddingTop")) || 0, J = parseFloat(w("paddingBottom")) || 0, j = L + Y, V = X + J, nt = P + B, et = H + N, U = j + nt, ft = V + et, pt = w("position"), st = 0, lt = 0;
      if ("clientLeft" in t) {
        var ot = null;
        if (pt === "absolute") {
          var ct = ea(t, pn(t));
          ot = ct.offsetParent;
        } else
          ot = t.parentElement;
        if (ot) {
          var mt = qr(ot);
          st = parseFloat(mt("width")), lt = parseFloat(mt("height"));
        }
      }
      p = Math.max(j, Qt(w("minWidth"), st) || 0), h = Math.max(V, Qt(w("minHeight"), lt) || 0), _ = Qt(w("maxWidth"), st), x = Qt(w("maxHeight"), lt), isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0), E = Qt(D.width, 0) || 0, R = Qt(D.height, 0) || 0, u = parseFloat(w("width")) || 0, f = parseFloat(w("height")) || 0, c = Q(u - E) < 1 ? Mu(p, E || u, _) : u, v = Q(f - R) < 1 ? Mu(h, R || f, x) : f, r = c, n = v, a = c, s = v, T ? (y = _, b = x, d = p, m = h, c = r - U, v = n - ft) : (y = _ + U, b = x + ft, d = p + U, m = h + ft, r = c + U, n = v + ft), a = c + j, s = v + V;
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
    maxOffsetHeight: b
  };
}
function Xd(t, e) {
  return vr(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
}
function ho() {
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
function qd(t, e) {
  var r = t === pn(t) || t === of(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = qr(t)("overflow") !== "visible", z(z({}, e), n);
}
function Su(t, e, r, n) {
  var a = t.left, s = t.right, u = t.top, f = t.bottom, c = e.top, v = e.left, p = {
    left: v + a,
    top: c + u,
    right: v + s,
    bottom: c + f,
    width: s - a,
    height: f - u
  };
  return r && n ? qd(r, p) : p;
}
function Zi(t, e) {
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
  return t && e ? qd(t, f) : f;
}
function OE(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, a = t.getState(), s = a.offsetWidth, u = a.offsetHeight, f = a.svg, c = a.transformOrigin;
  return !r && f && n ? Af(n, s, u) : c;
}
function Ud(t, e, r, n) {
  var a;
  if (t)
    a = t;
  else if (e)
    a = [0, 0];
  else {
    var s = r.target;
    a = $d(s, n);
  }
  return a;
}
function $d(t, e) {
  if (t) {
    var r = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (e.deg = r, !!n) {
      var a = [0, 0];
      return n.indexOf("w") > -1 && (a[0] = -1), n.indexOf("e") > -1 && (a[0] = 1), n.indexOf("n") > -1 && (a[1] = -1), n.indexOf("s") > -1 && (a[1] = 1), a;
    }
  }
}
function Rf(t, e) {
  return [
    $t(e, t[0]),
    $t(e, t[1]),
    $t(e, t[2]),
    $t(e, t[3])
  ];
}
function ve(t) {
  var e = t.left, r = t.top, n = t.pos1, a = t.pos2, s = t.pos3, u = t.pos4;
  return Rf([n, a, s, u], [e, r]);
}
function Ku(t, e) {
  t[e ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(t);
  });
}
function ii(t, e) {
  var r = e ? "controlGesto" : "targetGesto", n = t[r];
  n?.isIdle() === !1 && Ku(t, e), n?.unset(), t[r] = null;
}
function Gr(t, e) {
  if (e) {
    var r = mi(e);
    r.nextStyle = z(z({}, r.nextStyle), t);
  }
  return {
    style: t,
    cssText: Ue(t).map(function(n) {
      return "".concat(So(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function Vd(t, e, r) {
  var n = e.afterTransform || e.transform;
  return z(z({}, Gr(z(z(z({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
}
function Bt(t, e, r, n) {
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
function Qr(t, e, r) {
  var n = e.datas, a = "isDrag" in r ? r.isDrag : e.isDrag;
  return n.datas || (n.datas = {}), z(z({ isDrag: a }, r), { moveable: t, target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: e.isDouble, datas: n.datas, isFirstDrag: !!e.isFirstDrag });
}
function $o(t, e, r) {
  t._emitter.on(e, r);
}
function dt(t, e, r, n, a) {
  return t.triggerEvent(e, r, n, a);
}
function Tf(t, e) {
  return fn(t).getComputedStyle(t, e);
}
function go(t, e, r) {
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
function Zu(t, e) {
  return t === e || t == null && e == null;
}
function Kv() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var a = t[n];
    if (!ia(a))
      return a;
  }
  return t[r];
}
function Kd(t, e) {
  var r = [], n = [];
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n.indexOf(u), c = r[f] || [];
    f === -1 && (n.push(u), r.push(c)), c.push(a);
  }), r;
}
function IE(t, e) {
  var r = [], n = {};
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n[u];
    f || (f = [], n[u] = f, r.push(f)), f.push(a);
  }), r;
}
function Zd(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function ci() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.sort(function(r, n) {
    return Q(n) - Q(r);
  }), t[0];
}
function vi(t, e, r) {
  return Tr(Ie(t, r), On(e, r), r);
}
function PE(t, e) {
  var r, n = t.is3d, a = t.rootMatrix, s = n ? 4 : 3;
  return r = F(vi(a, [e.distX, e.distY], s), 2), e.distX = r[0], e.distY = r[1], e;
}
function se(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var a = sr(t, [qv(r[0] || 1), 0], n), s = sr(t, [0, qv(r[1] || 1)], n), u = sr(t, [
    r[0] / ce(a),
    r[1] / ce(s)
  ], n);
  return $t(e, u);
}
function Se(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Ao(t) {
  return Q(t) <= Fr ? 0 : t;
}
function Of(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = SC(e, t), n = r.deg;
    return n ? St("view-control-rotation".concat(n)) : "";
  };
}
function If(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(s) {
        return n.requestAble === s;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return yr(a, St("direction")) && (!t || yr(a, St(t)));
  };
}
function AE(t, e, r) {
  var n, a = ui(t, {
    "x%": function(I) {
      return I / 100 * e.offsetWidth;
    },
    "y%": function(I) {
      return I / 100 * e.offsetHeight;
    }
  }), s = t.slice(0, r < 0 ? void 0 : r), u = t.slice(0, r < 0 ? void 0 : r + 1), f = t[r] || "", c = r < 0 ? [] : t.slice(r), v = r < 0 ? [] : t.slice(r + 1), p = a.slice(0, r < 0 ? void 0 : r), h = a.slice(0, r < 0 ? void 0 : r + 1), d = (n = a[r]) !== null && n !== void 0 ? n : ui([""])[0], m = r < 0 ? [] : a.slice(r), _ = r < 0 ? [] : a.slice(r + 1), x = d ? [d] : [], y = ti(p), b = ti(h), E = ti(m), R = ti(_), O = jt(y, E, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: y,
    beforeFunctionMatrix2: b,
    targetFunctionMatrix: ti(x),
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
function BE(t) {
  return !t || !Ee(t) || hi(t) ? !1 : hr(t) || "length" in t;
}
function Oe(t, e) {
  return t ? hi(t) ? t : Yr(t) ? e ? document.querySelector(t) : t : ef(t) ? t() : Tp(t) ? t : "current" in t ? t.current : t : null;
}
function Pf(t, e) {
  if (!t)
    return [];
  var r = BE(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, a) {
    return Yr(a) && e ? it(it([], F(n), !1), F([].slice.call(document.querySelectorAll(a))), !1) : (hr(a) ? n.push(Pf(a, e)) : n.push(Oe(a, e)), n);
  }, []);
}
function zE(t, e, r) {
  var n = vr(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function Zv(t, e) {
  var r = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, s = Ie(r, a);
  return n || (s = we(s, 3, 4)), s[12] = 0, s[13] = 0, s[14] = 0, _b(s, e);
}
function Jd(t, e, r, n, a) {
  var s = F(t, 2), u = s[0], f = s[1], c = 0, v = 0;
  if (a && u && f) {
    var p = vr([0, 0], e), h = vr([0, 0], n), d = ce(e), m = Math.cos(p - h) * d;
    if (!n[0])
      v = m, c = v * r;
    else if (!n[1])
      c = m, v = c / r;
    else {
      var _ = n[0] * u, x = n[1] * f, y = Math.atan2(_ + e[0], x + e[1]), b = Math.atan2(_, x);
      y < 0 && (y += Math.PI * 2), b < 0 && (b += Math.PI * 2);
      var E = 0;
      Q(y - b) < Math.PI / 2 || Q(y - b) > Math.PI / 2 * 3 || (b += Math.PI), E = y - b, E > Math.PI * 2 ? E -= Math.PI * 2 : E > Math.PI ? E = 2 * Math.PI - E : E < -Math.PI && (E = -2 * Math.PI - E);
      var R = ce([_ + e[0], x + e[1]]) * Math.cos(E);
      c = R * Math.sin(b) - _, v = R * Math.cos(b) - x, n[0] < 0 && (c *= -1), n[1] < 0 && (v *= -1);
    }
  } else
    c = n[0] * e[0], v = n[1] * e[1];
  return [c, v];
}
function Qd(t, e, r, n) {
  var a, s = r.ratio, u = r.startOffsetWidth, f = r.startOffsetHeight, c = 0, v = 0, p = n.distX, h = n.distY, d = n.pinchScale, m = n.parentDistance, _ = n.parentDist, x = n.parentScale, y = r.fixedDirection, b = [0, 1].map(function(D) {
    return Q(t[D] - y[D]);
  }), E = [0, 1].map(function(D) {
    var T = b[D];
    return T !== 0 && (T = 2 / T), T;
  });
  if (_)
    c = _[0], v = _[1], e && (c ? v || (v = c / s) : c = v * s);
  else if (si(d))
    c = (d - 1) * u, v = (d - 1) * f;
  else if (x)
    c = (x[0] - 1) * u, v = (x[1] - 1) * f;
  else if (m) {
    var R = u * b[0], O = f * b[1], I = ce([R, O]);
    c = m / I * R * E[0], v = m / I * O * E[1];
  } else {
    var w = Pe({ datas: r, distX: p, distY: h });
    w = E.map(function(D, T) {
      return w[T] * D;
    }), a = F(Jd([u, f], w, s, t, e), 2), c = a[0], v = a[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: c,
    distHeight: v
  };
}
function Ju(t, e) {
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
    var r = F(t.split(" "), 2), n = r[0], a = r[1], s = Ju(n || ""), u = Ju(a || ""), f = z(z({}, s), u), c = {
      x: "50%",
      y: "50%"
    };
    return f.x && (c.x = f.x), f.y && (c.y = f.y), f.value && (f.x && !f.y && (c.y = f.value), !f.x && f.y && (c.x = f.value)), c;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function Af(t, e, r) {
  var n = Ju(t, !0), a = n.x, s = n.y;
  return [
    Qt(a, e) || 0,
    Qt(s, r) || 0
  ];
}
function GE(t, e, r) {
  var n = t.map(function(s) {
    return bt(s, e);
  }), a = n.map(function(s) {
    return fa(s, r);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(s) {
      return $t(s, e);
    })
  };
}
function jd(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var a = e[n], s = hr(r), u = hr(a);
    return s && u ? jd(r, a) : !s && !u ? r === a : !1;
  });
}
function ai(t, e, r, n, a) {
  var s = t._store, u = s[e];
  if (!(e in s))
    if (a != null)
      s[e] = a, u = a;
    else
      return s[e] = r, r;
  return u === r || n(u) === n(r) ? u : (s[e] = r, r);
}
function zr(t) {
  return t >= 0 ? 1 : -1;
}
function Q(t) {
  return Math.abs(t);
}
function bu(t, e) {
  return IS(t).map(function(r) {
    return e(r);
  });
}
function th(t) {
  return si(t) ? {
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
var FE = va("pinchable", {
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
    }), d = Bt(t, e, {});
    n && (d.targets = n);
    var m = dt(t, v, d);
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
      var v = a * (1 - 1 / n), p = Bt(t, e, {});
      f && (p.targets = f);
      var h = "onPinch".concat(f ? "Group" : "");
      dt(t, h, p);
      var d = r.ables, m = "drag".concat(f ? "Group" : "", "Control");
      return d.forEach(function(_) {
        _[m] && _[m](t, z(z({}, e), { datas: s[_.name], inputEvent: u, resolveMatrix: !0, pinchScale: n, parentDistance: v, parentRotate: c, isPinch: !0 }));
      }), p;
    }
  },
  pinchEnd: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.targets, u = e.originalDatas;
    if (r.isPinch) {
      var f = "onPinch".concat(s ? "Group" : "", "End"), c = Qr(t, e, { isDrag: n });
      s && (c.targets = s), dt(t, f, c);
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
}), Jv = If("scalable"), LE = {
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
  render: yd("scalable"),
  dragControlCondition: Jv,
  viewClassName: Of("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.parentDirection, u = Ud(s, n, a, r), f = t.state, c = f.width, v = f.height, p = f.targetTransform, h = f.target, d = f.pos1, m = f.pos2, _ = f.pos4;
    if (!u || !h)
      return !1;
    n || Bn(t, e), r.datas = {}, r.transform = p, r.prevDist = [1, 1], r.direction = u, r.startOffsetWidth = c, r.startOffsetHeight = v, r.startValue = [1, 1];
    var x = !u[0] && !u[1] || u[0] || !u[1];
    Ho(t, e, "scale"), r.isWidth = x;
    function y(w) {
      r.ratio = w && isFinite(w) ? w : 0;
    }
    r.startPositions = ve(t.state);
    function b(w) {
      var D = Pd(r.startPositions, w);
      r.fixedDirection = D.fixedDirection, r.fixedPosition = D.fixedPosition, r.fixedOffset = D.fixedOffset;
    }
    r.setFixedDirection = b, y(Ye(d, m) / Ye(m, _)), b([-u[0], -u[1]]);
    var E = function(w) {
      r.minScaleSize = w;
    }, R = function(w) {
      r.maxScaleSize = w;
    };
    E([-1 / 0, -1 / 0]), R([1 / 0, 1 / 0]);
    var O = Bt(t, e, z(z({ direction: u, set: function(w) {
      r.startValue = w;
    }, setRatio: y, setFixedDirection: b, setMinScaleSize: E, setMaxScaleSize: R }, ko(t, e)), { dragStart: Br.dragStart(t, new fi().dragStart([0, 0], e)) })), I = dt(t, "onScaleStart", O);
    return r.startFixedDirection = r.fixedDirection, I !== !1 && (r.isScale = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    }), r.isScale ? O : !1;
  },
  dragControl: function(t, e) {
    Wo(t, e, "scale");
    var r = e.datas, n = e.parentKeepRatio, a = e.parentFlag, s = e.isPinch, u = e.dragClient, f = e.isRequest, c = e.useSnap, v = e.resolveMatrix, p = r.prevDist, h = r.direction, d = r.startOffsetWidth, m = r.startOffsetHeight, _ = r.isScale, x = r.startValue, y = r.isWidth, b = r.ratio;
    if (!_)
      return !1;
    var E = t.props, R = E.throttleScale, O = E.parentMoveable, I = h;
    !h[0] && !h[1] && (I = [1, 1]);
    var w = b && (n ?? E.keepRatio) || !1, D = t.state, T = [
      x[0],
      x[1]
    ];
    function P() {
      var at = Qd(I, w, r, e), gt = at.distWidth, Yt = at.distHeight, xt = d ? (d + gt) / d : 1, Ct = m ? (m + Yt) / m : 1;
      x[0] || (T[0] = gt / d), x[1] || (T[1] = Yt / m);
      var It = (I[0] || w ? xt : 1) * T[0], zt = (I[1] || w ? Ct : 1) * T[1];
      return It === 0 && (It = zr(p[0]) * lo), zt === 0 && (zt = zr(p[1]) * lo), [It, zt];
    }
    var B = P();
    if (!s && t.props.groupable) {
      var H = D.snapRenderInfo || {}, N = H.direction;
      hr(N) && (N[0] || N[1]) && (D.snapRenderInfo = { direction: h, request: e.isRequest });
    }
    dt(t, "onBeforeScale", Bt(t, e, {
      scale: B,
      setFixedDirection: function(at) {
        return r.setFixedDirection(at), B = P(), B;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(at) {
        B = at;
      }
    }, !0));
    var L = [
      B[0] / T[0],
      B[1] / T[1]
    ], Y = u, X = [0, 0], J = zr(L[0] * L[1]), j = !u && !a && s;
    if (j || v ? Y = yf(t, r.targetAllTransform, [0, 0], [0, 0], r) : u || (Y = r.fixedPosition), s || (X = hE(t, L, h, !c && f, r)), w) {
      I[0] && I[1] && X[0] && X[1] && (Math.abs(X[0] * d) > Math.abs(X[1] * m) ? X[1] = 0 : X[0] = 0);
      var V = !X[0] && !X[1];
      if (V && (y ? L[0] = Tt(L[0] * T[0], R) / T[0] : L[1] = Tt(L[1] * T[1], R) / T[1]), I[0] && !I[1] || X[0] && !X[1] || V && y) {
        L[0] += X[0];
        var nt = d * L[0] * T[0] / b;
        L[1] = zr(J * L[0]) * Q(nt / m / T[1]);
      } else if (!I[0] && I[1] || !X[0] && X[1] || V && !y) {
        L[1] += X[1];
        var et = m * L[1] * T[1] * b;
        L[0] = zr(J * L[1]) * Q(et / d / T[0]);
      }
    } else
      L[0] += X[0], L[1] += X[1], X[0] || (L[0] = Tt(L[0] * T[0], R) / T[0]), X[1] || (L[1] = Tt(L[1] * T[1], R) / T[1]);
    L[0] === 0 && (L[0] = zr(p[0]) * lo), L[1] === 0 && (L[1] = zr(p[1]) * lo), B = xE(L, [T[0], T[1]]);
    var U = [
      d,
      m
    ], ft = [
      d * B[0],
      m * B[1]
    ];
    ft = Ep(ft, r.minScaleSize, r.maxScaleSize, w ? b : !1), B = bu(2, function(at) {
      return U[at] ? ft[at] / U[at] : ft[at];
    }), L = bu(2, function(at) {
      return B[at] / T[at];
    });
    var pt = bu(2, function(at) {
      return p[at] ? L[at] / p[at] : L[at];
    }), st = "scale(".concat(L.join(", "), ")"), lt = "scale(".concat(B.join(", "), ")"), ot = No(r, lt, st), ct = !x[0] || !x[1], mt = hC(t, ct ? lt : st, r.fixedDirection, Y, r.fixedOffset, r, ct), Rt = j ? mt : bt(mt, r.prevInverseDist || [0, 0]);
    if (r.prevDist = L, r.prevInverseDist = mt, B[0] === p[0] && B[1] === p[1] && Rt.every(function(at) {
      return !at;
    }) && !O && !j)
      return !1;
    var Wt = Bt(t, e, z({ offsetWidth: d, offsetHeight: m, direction: h, scale: B, dist: L, delta: pt, isPinch: !!s }, dd(t, ot, Rt, s, e)));
    return dt(t, "onScale", Wt), Wt;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = Qr(t, e, {});
    return dt(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: Jv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var a = Ce(t, "resizable", e);
    r.moveableScale = t.scale;
    var s = Xe(t, this, "dragControlStart", e, function(v, p) {
      return Ro(t, v, r, p);
    }), u = function(v) {
      n.setFixedDirection(v), s.forEach(function(p, h) {
        p.setFixedDirection(v), Ro(t, p.moveable, r, a[h]);
      });
    };
    r.setFixedDirection = u;
    var f = z(z({}, n), { targets: t.props.targets, events: s, setFixedDirection: u }), c = dt(t, "onScaleGroupStart", f);
    return r.isScale = c !== !1, r.isScale ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isScale) {
      $o(t, "onBeforeScale", function(p) {
        dt(t, "onBeforeScaleGroup", Bt(t, e, z(z({}, p), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = n.dist, s = r.moveableScale;
        t.scale = [
          a[0] * s[0],
          a[1] * s[1]
        ];
        var u = t.props.keepRatio, f = r.fixedPosition, c = Xe(t, this, "dragControl", e, function(p, h) {
          var d = F(Tr(la(t.rotation / 180 * Math.PI, 3), [
            h.datas.originalX * a[0],
            h.datas.originalY * a[1],
            1
          ], 3), 2), m = d[0], _ = d[1];
          return z(z({}, h), {
            parentDist: null,
            parentScale: a,
            parentKeepRatio: u,
            // recalculate child fixed position for parent group's dragging.
            dragClient: $t(f, [m, _])
          });
        }), v = z({ targets: t.props.targets, events: c }, n);
        return dt(t, "onScaleGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isScale) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Qr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return dt(t, "onScaleGroupEnd", s), r;
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
function nn(t, e) {
  return t.map(function(r, n) {
    return Co(r, e[n], 1, 2);
  });
}
function Qv(t, e, r) {
  var n = vr(t, e), a = vr(t, r), s = a - n;
  return s >= 0 ? s : s + 2 * Math.PI;
}
function WE(t, e) {
  var r = Qv(t[0], t[1], t[2]), n = Qv(e[0], e[1], e[2]), a = Math.PI;
  return !(r >= a && n <= a || r <= a && n >= a);
}
var NE = {
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
  viewClassName: Of("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, a = r.scalable, s = r.warpable, u = r.zoom;
    if (n || a || !s)
      return [];
    var f = t.state, c = f.pos1, v = f.pos2, p = f.pos3, h = f.pos4, d = nn(c, v), m = nn(v, c), _ = nn(c, p), x = nn(p, c), y = nn(p, h), b = nn(h, p), E = nn(v, h), R = nn(h, v);
    return it([
      e.createElement("div", { className: St("line"), key: "middeLine1", style: qi(d, y, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine2", style: qi(m, b, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine3", style: qi(_, E, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine4", style: qi(x, R, u) })
    ], F(Sd(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return yr(r, St("direction")) && yr(r, St("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, a = t.props.target, s = n.target, u = $d(s, r);
    if (!u || !a)
      return !1;
    var f = t.state, c = f.transformOrigin, v = f.is3d, p = f.targetTransform, h = f.targetMatrix, d = f.width, m = f.height, _ = f.left, x = f.top;
    r.datas = {}, r.targetTransform = p, r.warpTargetMatrix = v ? h : we(h, 3, 4), r.targetInverseMatrix = Kp(Ie(r.warpTargetMatrix, 4), 3, 4), r.direction = u, r.left = _, r.top = x, r.poses = [
      [0, 0],
      [d, 0],
      [0, m],
      [d, m]
    ].map(function(E) {
      return bt(E, c);
    }), r.nextPoses = r.poses.map(function(E) {
      var R = F(E, 2), O = R[0], I = R[1];
      return Tr(r.warpTargetMatrix, [O, I, 0, 1], 4);
    }), r.startValue = nr(4), r.prevMatrix = nr(4), r.absolutePoses = ve(f), r.posIndexes = pd(u), Bn(t, e), Ho(t, e, "matrix3d"), f.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    };
    var y = Bt(t, e, z({ set: function(E) {
      r.startValue = E;
    } }, ko(t, e))), b = dt(t, "onWarpStart", y);
    return b !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isRequest, a = e.distX, s = e.distY, u = r.targetInverseMatrix, f = r.prevMatrix, c = r.isWarp, v = r.startValue, p = r.poses, h = r.posIndexes, d = r.absolutePoses;
    if (!c)
      return !1;
    if (Wo(t, e, "matrix3d"), _i(t, "warpable")) {
      var m = h.map(function(P) {
        return d[P];
      });
      m.length > 1 && m.push([
        (m[0][0] + m[1][0]) / 2,
        (m[0][1] + m[1][1]) / 2
      ]);
      var _ = qo(t, n, {
        horizontal: m.map(function(P) {
          return P[1] + s;
        }),
        vertical: m.map(function(P) {
          return P[0] + a;
        })
      }), x = _.horizontal, y = _.vertical;
      s -= x.offset, a -= y.offset;
    }
    var b = Pe({ datas: r, distX: a, distY: s }, !0), E = r.nextPoses.slice();
    if (h.forEach(function(P) {
      E[P] = $t(E[P], b);
    }), !aC.every(function(P) {
      return WE(P.map(function(B) {
        return p[B];
      }), P.map(function(B) {
        return E[B];
      }));
    }))
      return !1;
    var R = df(p[0], p[2], p[1], p[3], E[0], E[2], E[1], E[3]);
    if (!R.length)
      return !1;
    var O = jt(u, R, 4), I = cd(r, O, !0), w = jt(Ie(f, 4), I, 4);
    r.prevMatrix = I;
    var D = jt(v, I, 4), T = No(r, "matrix3d(".concat(D.join(", "), ")"), "matrix3d(".concat(I.join(", "), ")"));
    return xf(e, T), dt(t, "onWarp", Bt(t, e, z({ delta: w, matrix: D, dist: I, multiply: jt, transform: T }, Gr({
      transform: T
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, dt(t, "onWarpEnd", Qr(t, e, {})), n) : !1;
  }
}, kE = /* @__PURE__ */ St("area-pieces"), mo = /* @__PURE__ */ St("area-piece"), rh = /* @__PURE__ */ St("avoid"), HE = St("view-dragging");
function Cu(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, a = r.height;
    Rp(e, rh), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function jv(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: kE },
    t.createElement("div", { className: mo }),
    t.createElement("div", { className: mo }),
    t.createElement("div", { className: mo }),
    t.createElement("div", { className: mo })
  );
}
var eh = {
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
    var r = t.props, n = r.target, a = r.dragArea, s = r.groupable, u = r.passDragArea, f = t.getState(), c = f.width, v = f.height, p = f.renderPoses, h = u ? St("area", "pass") : St("area");
    if (s)
      return [
        e.createElement("div", { key: "area", ref: He(t, "areaElement"), className: h }),
        jv(e)
      ];
    if (!n || !a)
      return [];
    var d = df([0, 0], [c, 0], [0, v], [c, v], p[0], p[1], p[2], p[3]), m = d.length ? Uo(d, !0) : "none";
    return [
      e.createElement("div", { key: "area", ref: He(t, "areaElement"), className: h, style: {
        top: "0px",
        left: "0px",
        width: "".concat(c, "px"),
        height: "".concat(v, "px"),
        transformOrigin: "0 0",
        transform: m
      } }),
      jv(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, a = e.clientY, s = e.inputEvent;
    if (!s)
      return !1;
    r.isDragArea = !1;
    var u = t.areaElement, f = t.state, c = f.moveableClientRect, v = f.renderPoses, p = f.rootMatrix, h = f.is3d, d = c.left, m = c.top, _ = le(v), x = _.left, y = _.top, b = _.width, E = _.height, R = h ? 4 : 3, O = F(vi(p, [n - d, a - m], R), 2), I = O[0], w = O[1];
    I -= x, w -= y;
    var D = [
      { left: x, top: y, width: b, height: w - 10 },
      { left: x, top: y, width: I - 10, height: E },
      { left: x, top: y + w + 10, width: b, height: E - w - 10 },
      { left: x + I + 10, top: y, width: b - I - 10, height: E }
    ], T = [].slice.call(u.nextElementSibling.children);
    D.forEach(function(P, B) {
      T[B].style.cssText = "left: ".concat(P.left, "px;top: ").concat(P.top, "px; width: ").concat(P.width, "px; height: ").concat(P.height, "px;");
    }), Mp(u, rh), f.disableNativeEvent = !0;
  },
  drag: function(t, e) {
    var r = e.datas, n = e.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    r.isDragArea || (r.isDragArea = !0, Cu(t));
  },
  dragEnd: function(t, e) {
    this.enableNativeEvent(t);
    var r = e.inputEvent, n = e.datas;
    if (!r)
      return !1;
    n.isDragArea || Cu(t);
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
    Cu(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var e = t.state;
    e.disableNativeEvent && Cp(function() {
      e.disableNativeEvent = !1;
    });
  }
}, YE = va("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, a = r.svgOrigin, s = r.groupable, u = t.getState(), f = u.beforeOrigin, c = u.rotation, v = u.svg, p = u.allMatrix, h = u.is3d, d = u.left, m = u.top, _ = u.offsetWidth, x = u.offsetHeight, y;
    if (!s && v && a) {
      var b = F(Af(a, _, x), 2), E = b[0], R = b[1], O = h ? 4 : 3, I = sr(p, [E, R], O);
      y = Po(c, n, bt(I, [d, m]));
    } else
      y = Po(c, n, f);
    return [
      e.createElement("div", { className: St("control", "origin"), style: y, key: "beforeOrigin" })
    ];
  }
});
function XE(t) {
  var e = t.scrollContainer;
  return [
    e.scrollLeft,
    e.scrollTop
  ];
}
var qE = {
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
    var r = t.props, n = r.scrollContainer, a = n === void 0 ? t.getContainer() : n, s = r.scrollOptions, u = new Eb(), f = Oe(a, !0);
    e.datas.dragScroll = u, t.state.dragScroll = u;
    var c = e.isControl ? "controlGesto" : "targetGesto", v = e.targets;
    u.on("scroll", function(p) {
      var h = p.container, d = p.direction, m = Bt(t, e, {
        scrollContainer: h,
        direction: d
      }), _ = v ? "onScrollGroup" : "onScroll";
      v && (m.targets = v), dt(t, _, m);
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
      var n = t.props, a = n.scrollContainer, s = a === void 0 ? t.getContainer() : a, u = n.scrollThreshold, f = u === void 0 ? 0 : u, c = n.scrollThrottleTime, v = c === void 0 ? 0 : c, p = n.getScrollPosition, h = p === void 0 ? XE : p, d = n.scrollOptions;
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
}, nh = {
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
}, UE = va("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = th(r.padding || {}), a = n.left, s = n.top, u = n.right, f = n.bottom, c = t.getState(), v = c.renderPoses, p = c.pos1, h = c.pos2, d = c.pos3, m = c.pos4, _ = [p, h, d, m], x = [];
    return a > 0 && x.push([0, 2]), s > 0 && x.push([0, 1]), u > 0 && x.push([1, 3]), f > 0 && x.push([2, 3]), x.map(function(y, b) {
      var E = F(y, 2), R = E[0], O = E[1], I = _[R], w = _[O], D = v[R], T = v[O], P = df([0, 0], [100, 0], [0, 100], [100, 100], I, w, D, T);
      if (P.length)
        return e.createElement("div", { key: "padding".concat(b), className: St("padding"), style: {
          transform: Uo(P, !0)
        } });
    });
  }
}), tp = ["nw", "ne", "se", "sw"];
function _o(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var $E = [1, 2, 5, 6], VE = [0, 3, 4, 7], Mn = [1, -1, -1, 1], Rn = [1, 1, -1, -1];
function Bf(t, e, r, n, a, s, u, f) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = r), f === void 0 && (f = n);
  var c = [], v = !1, p = t.filter(function(d) {
    return !d.virtual;
  }), h = p.map(function(d) {
    var m = d.horizontal, _ = d.vertical, x = d.pos;
    if (_ && !v && (v = !0, c.push("/")), v) {
      var y = Math.max(0, _ === 1 ? x[1] - s : f - x[1]);
      return c.push(Se(y, n, e)), y;
    } else {
      var y = Math.max(0, m === 1 ? x[0] - a : u - x[0]);
      return c.push(Se(y, r, e)), y;
    }
  });
  return {
    radiusPoses: p,
    styles: c,
    raws: h
  };
}
function ih(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var s = t[a];
    s.sub && (s.horizontal && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1, r[0] = a + 1), s.vertical && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function ah(t, e, r, n, a, s, u) {
  var f, c, v, p;
  s === void 0 && (s = [0, 0]), u === void 0 && (u = !1);
  var h = t.indexOf("/"), d = (h > -1 ? t.slice(0, h) : t).length, m = t.slice(0, d), _ = t.slice(d + 1), x = m.length, y = _.length, b = y > 0, E = F(m, 4), R = E[0], O = R === void 0 ? "0px" : R, I = E[1], w = I === void 0 ? O : I, D = E[2], T = D === void 0 ? O : D, P = E[3], B = P === void 0 ? w : P, H = F(_, 4), N = H[0], L = N === void 0 ? O : N, Y = H[1], X = Y === void 0 ? b ? L : w : Y, J = H[2], j = J === void 0 ? b ? L : T : J, V = H[3], nt = V === void 0 ? b ? X : B : V, et = [O, w, T, B].map(function(ot) {
    return Qt(ot, e);
  }), U = [L, X, j, nt].map(function(ot) {
    return Qt(ot, r);
  }), ft = et.slice(), pt = U.slice();
  f = F(_o([ft[0], ft[1]], e), 2), ft[0] = f[0], ft[1] = f[1], c = F(_o([ft[3], ft[2]], e), 2), ft[3] = c[0], ft[2] = c[1], v = F(_o([pt[0], pt[3]], r), 2), pt[0] = v[0], pt[3] = v[1], p = F(_o([pt[1], pt[2]], r), 2), pt[1] = p[0], pt[2] = p[1];
  var st = u ? ft : ft.slice(0, Math.max(s[0], x)), lt = u ? pt : pt.slice(0, Math.max(s[1], y));
  return it(it([], F(st.map(function(ot, ct) {
    var mt = tp[ct];
    return {
      virtual: ct >= x,
      horizontal: Mn[ct],
      vertical: 0,
      pos: [n + ot, a + (Rn[ct] === -1 ? r : 0)],
      sub: !0,
      raw: et[ct],
      direction: mt
    };
  })), !1), F(lt.map(function(ot, ct) {
    var mt = tp[ct];
    return {
      virtual: ct >= y,
      horizontal: 0,
      vertical: Rn[ct],
      pos: [n + (Mn[ct] === -1 ? e : 0), a + ot],
      sub: !0,
      raw: U[ct],
      direction: mt
    };
  })), !1);
}
function KE(t, e, r, n, a) {
  a === void 0 && (a = e.length);
  var s = ih(t.slice(n)), u = s.horizontalRange, f = s.verticalRange, c = r - n, v = 0;
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
function ZE(t, e, r, n, a, s, u, f, c, v, p) {
  v === void 0 && (v = 0), p === void 0 && (p = 0);
  var h = ih(t.slice(r)), d = h.horizontalRange, m = h.verticalRange;
  if (n > -1)
    for (var _ = Mn[n] === 1 ? s - v : f - s, x = d[1]; x <= n; ++x) {
      var y = Rn[x] === 1 ? p : c, b = 0;
      if (n === x ? b = s : x === 0 ? b = v + _ : Mn[x] === -1 && (b = f - (e[r][0] - v)), t.splice(r + x, 0, {
        horizontal: Mn[x],
        vertical: 0,
        pos: [b, y]
      }), e.splice(r + x, 0, [b, y]), x === 0)
        break;
    }
  else if (a > -1) {
    var E = Rn[a] === 1 ? u - p : c - u;
    if (d[1] === 0 && m[1] === 0) {
      var R = [
        v + E,
        p
      ];
      t.push({
        horizontal: Mn[0],
        vertical: 0,
        pos: R
      }), e.push(R);
    }
    for (var O = m[0], x = m[1]; x <= a; ++x) {
      var b = Mn[x] === 1 ? v : f, y = 0;
      if (a === x ? y = u : x === 0 ? y = p + E : Rn[x] === 1 ? y = e[r + O][1] : Rn[x] === -1 && (y = c - (e[r + O][1] - p)), t.push({
        horizontal: 0,
        vertical: Rn[x],
        pos: [b, y]
      }), e.push([b, y]), x === 0)
        break;
    }
  }
}
function JE(t, e) {
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
var QE = [
  [0, -1, "n"],
  [1, 0, "e"]
], jE = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function zf(t, e, r) {
  var n = t.props.clipRelative, a = t.state, s = a.width, u = a.height, f = e, c = f.type, v = f.poses, p = c === "rect", h = c === "circle";
  if (c === "polygon")
    return r.map(function(w) {
      return "".concat(Se(w[0], s, n), " ").concat(Se(w[1], u, n));
    });
  if (p || c === "inset") {
    var d = r[1][1], m = r[3][0], _ = r[7][0], x = r[5][1];
    if (p)
      return [
        d,
        m,
        x,
        _
      ].map(function(w) {
        return "".concat(w, "px");
      });
    var y = [d, s - m, u - x, _].map(function(w, D) {
      return Se(w, D % 2 ? s : u, n);
    });
    if (r.length > 8) {
      var b = F(bt(r[4], r[0]), 2), E = b[0], R = b[1];
      y.push.apply(y, it(["round"], F(Bf(v.slice(8).map(function(w, D) {
        return z(z({}, w), { pos: r[D] });
      }), n, E, R, _, d, m, x).styles), !1));
    }
    return y;
  } else if (h || c === "ellipse") {
    var O = r[0], I = Se(Q(r[1][1] - O[1]), h ? Math.sqrt((s * s + u * u) / 2) : u, n), y = h ? [I] : [Se(Q(r[2][0] - O[0]), s, n), I];
    return y.push("at", Se(O[0], s, n), Se(O[1], u, n)), y;
  }
}
function Bo(t, e, r, n) {
  var a = [n, (n + e) / 2, e], s = [t, (t + r) / 2, r];
  return jE.map(function(u) {
    var f = F(u, 3), c = f[0], v = f[1], p = f[2], h = a[c + 1], d = s[v + 1];
    return {
      vertical: Q(v),
      horizontal: Q(c),
      direction: p,
      pos: [h, d]
    };
  });
}
function oh(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    e[0] = Math.min(e[0], a[0]), e[1] = Math.max(e[1], a[0]), r[0] = Math.min(r[0], a[1]), r[1] = Math.max(r[1], a[1]);
  }), [
    Q(e[1] - e[0]),
    Q(r[1] - r[0])
  ];
}
function rp(t, e, r, n, a) {
  var s, u, f, c, v, p, h, d, m;
  if (t) {
    var _ = a;
    if (!_) {
      var x = qr(t), y = x("clipPath");
      _ = y !== "none" ? y : x("clip");
    }
    if (!((!_ || _ === "none" || _ === "auto") && (_ = n, !_))) {
      var b = bp(_), E = b.prefix, R = E === void 0 ? _ : E, O = b.value, I = O === void 0 ? "" : O, w = R === "circle", D = " ";
      if (R === "polygon") {
        var T = Tn(I || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        D = ",";
        var P = T.map(function(ut) {
          var wt = F(ut.split(" "), 2), Nt = wt[0], Ut = wt[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              Qt(Nt, e),
              Qt(Ut, r)
            ]
          };
        }), B = Pn(P.map(function(ut) {
          return ut.pos;
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
      } else if (w || R === "ellipse") {
        var H = "", N = "", L = 0, Y = 0, T = ln(I);
        if (w) {
          var X = "";
          s = F(T, 4), u = s[0], X = u === void 0 ? "50%" : u, f = s[2], H = f === void 0 ? "50%" : f, c = s[3], N = c === void 0 ? "50%" : c, L = Qt(X, Math.sqrt((e * e + r * r) / 2)), Y = L;
        } else {
          var J = "", j = "";
          v = F(T, 5), p = v[0], J = p === void 0 ? "50%" : p, h = v[1], j = h === void 0 ? "50%" : h, d = v[3], H = d === void 0 ? "50%" : d, m = v[4], N = m === void 0 ? "50%" : m, L = Qt(J, e), Y = Qt(j, r);
        }
        var V = [
          Qt(H, e),
          Qt(N, r)
        ], P = it([
          {
            vertical: 1,
            horizontal: 1,
            pos: V,
            direction: "nesw"
          }
        ], F(QE.slice(0, w ? 1 : 2).map(function(Nt) {
          return {
            vertical: Q(Nt[1]),
            horizontal: Nt[0],
            direction: Nt[2],
            sub: !0,
            pos: [
              V[0] + Nt[0] * L,
              V[1] + Nt[1] * Y
            ]
          };
        })), !1);
        return {
          type: R,
          clipText: _,
          radiusX: L,
          radiusY: Y,
          left: V[0] - L,
          top: V[1] - Y,
          right: V[0] + L,
          bottom: V[1] + Y,
          poses: P,
          splitter: D
        };
      } else if (R === "inset") {
        var T = ln(I || "0 0 0 0"), nt = T.indexOf("round"), et = (nt > -1 ? T.slice(0, nt) : T).length, U = T.slice(et + 1), ft = F(T.slice(0, et), 4), pt = ft[0], st = ft[1], lt = st === void 0 ? pt : st, ot = ft[2], ct = ot === void 0 ? pt : ot, mt = ft[3], Rt = mt === void 0 ? lt : mt, Wt = F([pt, ct].map(function(Nt) {
          return Qt(Nt, r);
        }), 2), at = Wt[0], gt = Wt[1], Yt = F([Rt, lt].map(function(Nt) {
          return Qt(Nt, e);
        }), 2), xt = Yt[0], Ct = Yt[1], It = e - Ct, zt = r - gt, qt = ah(U, It - xt, zt - at, xt, at), P = it(it([], F(Bo(at, It, zt, xt)), !1), F(qt), !1);
        return {
          type: "inset",
          clipText: _,
          poses: P,
          top: at,
          left: xt,
          right: It,
          bottom: zt,
          radius: U,
          splitter: D
        };
      } else if (R === "rect") {
        var T = Tn(I || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        D = ",";
        var Pt = F(T.map(function(ir) {
          var gr = aa(ir).value;
          return gr;
        }), 4), tt = Pt[0], Ct = Pt[1], gt = Pt[2], xt = Pt[3], P = Bo(tt, Ct, gt, xt);
        return {
          type: "rect",
          clipText: _,
          poses: P,
          top: tt,
          right: Ct,
          bottom: gt,
          left: xt,
          values: T,
          splitter: D
        };
      }
    }
  }
}
function tw(t, e, r, n, a) {
  var s = t[e], u = s.direction, f = s.sub, c = t.map(function() {
    return [0, 0];
  }), v = u ? u.split("") : [];
  if (n && e < 8) {
    var p = v.filter(function(L) {
      return L === "w" || L === "e";
    }), h = v.filter(function(L) {
      return L === "n" || L === "s";
    }), d = p[0], m = h[0];
    c[e] = r;
    var _ = F(oh(t), 2), x = _[0], y = _[1], b = x && y ? x / y : 0;
    if (b && a) {
      var E = (e + 4) % 8, R = t[E].pos, O = [0, 0];
      u.indexOf("w") > -1 ? O[0] = -1 : u.indexOf("e") > -1 && (O[0] = 1), u.indexOf("n") > -1 ? O[1] = -1 : u.indexOf("s") > -1 && (O[1] = 1);
      var I = Jd([x, y], r, b, O, !0), w = x + I[0], D = y + I[1], T = R[1], P = R[1], B = R[0], H = R[0];
      O[0] === -1 ? B = H - w : O[0] === 1 ? H = B + w : (B = B - w / 2, H = H + w / 2), O[1] === -1 ? T = P - D : (O[1] === 1 || (T = P - D / 2), P = T + D);
      var N = Bo(T, H, P, B);
      t.forEach(function(L, Y) {
        c[Y][0] = N[Y].pos[0] - L.pos[0], c[Y][1] = N[Y].pos[1] - L.pos[1];
      });
    } else
      t.forEach(function(L, Y) {
        var X = L.direction;
        X && (X.indexOf(d) > -1 && (c[Y][0] = r[0]), X.indexOf(m) > -1 && (c[Y][1] = r[1]));
      }), d && (c[1][0] = r[0] / 2, c[5][0] = r[0] / 2), m && (c[3][1] = r[1] / 2, c[7][1] = r[1] / 2);
  } else u && !f ? v.forEach(function(L) {
    var Y = L === "n" || L === "s";
    t.forEach(function(X, J) {
      var j = X.direction, V = X.horizontal, nt = X.vertical;
      !j || j.indexOf(L) === -1 || (c[J] = [
        Y || !V ? 0 : r[0],
        !Y || !nt ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function rw(t, e) {
  var r = F(ld(t, e), 2), n = r[0], a = r[1], s = e.datas, u = s.clipPath, f = s.clipIndex, c = u, v = c.type, p = c.poses, h = c.splitter, d = p.map(function(E) {
    return E.pos;
  });
  if (v === "polygon")
    d.splice(f, 0, [n, a]);
  else if (v === "inset") {
    var m = $E.indexOf(f), _ = VE.indexOf(f), x = p.length;
    if (ZE(p, d, 8, m, _, n, a, d[4][0], d[4][1], d[0][0], d[0][1]), x === p.length)
      return;
  } else
    return;
  var y = zf(t, u, d), b = "".concat(v, "(").concat(y.join(h), ")");
  dt(t, "onClip", Bt(t, e, z({ clipEventType: "added", clipType: v, poses: d, clipStyles: y, clipStyle: b, distX: 0, distY: 0 }, Gr({
    clipPath: b
  }, e))));
}
function ew(t, e) {
  var r = e.datas, n = r.clipPath, a = r.clipIndex, s = n, u = s.type, f = s.poses, c = s.splitter, v = f.map(function(m) {
    return m.pos;
  }), p = v.length;
  if (u === "polygon")
    f.splice(a, 1), v.splice(a, 1);
  else if (u === "inset") {
    if (a < 8 || (KE(f, v, a, 8, p), p === f.length))
      return;
  } else
    return;
  var h = zf(t, n, v), d = "".concat(u, "(").concat(h.join(c), ")");
  dt(t, "onClip", Bt(t, e, z({ clipEventType: "removed", clipType: u, poses: v, clipStyles: h, clipStyle: d, distX: 0, distY: 0 }, Gr({
    clipPath: d
  }, e))));
}
var nw = {
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
    var r = t.props, n = r.customClipPath, a = r.defaultClipPath, s = r.clipArea, u = r.zoom, f = r.groupable, c = t.getState(), v = c.target, p = c.width, h = c.height, d = c.allMatrix, m = c.is3d, _ = c.left, x = c.top, y = c.pos1, b = c.pos2, E = c.pos3, R = c.pos4, O = c.clipPathState, I = c.snapBoundInfos, w = c.rotation;
    if (!v || f)
      return [];
    var D = rp(v, p, h, a || "inset", O || n);
    if (!D)
      return [];
    var T = m ? 4 : 3, P = D.type, B = D.poses, H = B.map(function(Ct) {
      var It = sr(d, Ct.pos, T);
      return [
        It[0] - _,
        It[1] - x
      ];
    }), N = [], L = [], Y = P === "rect", X = P === "inset", J = P === "polygon";
    if (Y || X || J) {
      var j = X ? H.slice(0, 8) : H;
      L = j.map(function(Ct, It) {
        var zt = It === 0 ? j[j.length - 1] : j[It - 1], qt = vr(zt, Ct), Pt = Hd(zt, Ct);
        return e.createElement("div", { key: "clipLine".concat(It), className: St("line", "clip-line", "snap-control"), "data-clip-index": It, style: {
          width: "".concat(Pt, "px"),
          transform: "translate(".concat(zt[0], "px, ").concat(zt[1], "px) rotate(").concat(qt, "rad) scaleY(").concat(u, ")")
        } });
      });
    }
    if (N = H.map(function(Ct, It) {
      return e.createElement("div", { key: "clipControl".concat(It), className: St("control", "clip-control", "snap-control"), "data-clip-index": It, style: {
        transform: "translate(".concat(Ct[0], "px, ").concat(Ct[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    }), X && N.push.apply(N, it([], F(H.slice(8).map(function(Ct, It) {
      return e.createElement("div", { key: "clipRadiusControl".concat(It), className: St("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + It, style: {
        transform: "translate(".concat(Ct[0], "px, ").concat(Ct[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    })), !1)), P === "circle" || P === "ellipse") {
      var V = D.left, nt = D.top, et = D.radiusX, U = D.radiusY, ft = F(bt(sr(d, [V, nt], T), sr(d, [0, 0], T)), 2), pt = ft[0], st = ft[1], lt = "none";
      if (!s) {
        for (var ot = Math.max(10, et / 5, U / 5), ct = [], mt = 0; mt <= ot; ++mt) {
          var Rt = Math.PI * 2 / ot * mt;
          ct.push([
            et + (et - u) * Math.cos(Rt),
            U + (U - u) * Math.sin(Rt)
          ]);
        }
        ct.push([et, -2]), ct.push([-2, -2]), ct.push([-2, U * 2 + 2]), ct.push([et * 2 + 2, U * 2 + 2]), ct.push([et * 2 + 2, -2]), ct.push([et, -2]), lt = "polygon(".concat(ct.map(function(Ct) {
          return "".concat(Ct[0], "px ").concat(Ct[1], "px");
        }).join(", "), ")");
      }
      N.push(e.createElement("div", { key: "clipEllipse", className: St("clip-ellipse", "snap-control"), style: {
        width: "".concat(et * 2, "px"),
        height: "".concat(U * 2, "px"),
        clipPath: lt,
        transform: "translate(".concat(-_ + pt, "px, ").concat(-x + st, "px) ").concat(Uo(d))
      } }));
    }
    if (s) {
      var Wt = le(it([y, b, E, R], F(H), !1)), at = Wt.width, gt = Wt.height, Yt = Wt.left, xt = Wt.top;
      if (J || Y || X) {
        var ct = X ? H.slice(0, 8) : H;
        N.push(e.createElement("div", { key: "clipArea", className: St("clip-area", "snap-control"), style: {
          width: "".concat(at, "px"),
          height: "".concat(gt, "px"),
          transform: "translate(".concat(Yt, "px, ").concat(xt, "px)"),
          clipPath: "polygon(".concat(ct.map(function(It) {
            return "".concat(It[0] - Yt, "px ").concat(It[1] - xt, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return I && ["vertical", "horizontal"].forEach(function(Ct) {
      var It = I[Ct], zt = Ct === "horizontal";
      It.isSnap && L.push.apply(L, it([], F(It.snap.posInfos.map(function(qt, Pt) {
        var tt = qt.pos, ut = bt(sr(d, zt ? [0, tt] : [tt, 0], T), [_, x]), wt = bt(sr(d, zt ? [p, tt] : [tt, h], T), [_, x]);
        return ra(e, "", ut, wt, u, "clip".concat(Ct, "snap").concat(Pt), "guideline");
      })), !1)), It.isBound && L.push.apply(L, it([], F(It.bounds.map(function(qt, Pt) {
        var tt = qt.pos, ut = bt(sr(d, zt ? [0, tt] : [tt, 0], T), [_, x]), wt = bt(sr(d, zt ? [p, tt] : [tt, h], T), [_, x]);
        return ra(e, "", ut, wt, u, "clip".concat(Ct, "bounds").concat(Pt), "guideline", "bounds", "bold");
      })), !1));
    }), it(it([], F(N), !1), F(L), !1);
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
    var r = t.state, n = t.props, a = n.defaultClipPath, s = n.customClipPath, u = r.target, f = r.width, c = r.height, v = e.inputEvent ? e.inputEvent.target : null, p = v && v.getAttribute("class") || "", h = e.datas, d = rp(u, f, c, a || "inset", s);
    if (!d)
      return !1;
    var m = d.clipText, _ = d.type, x = d.poses, y = dt(t, "onClipStart", Bt(t, e, {
      clipType: _,
      clipStyle: m,
      poses: x.map(function(b) {
        return b.pos;
      })
    }));
    return y === !1 ? (h.isClipStart = !1, !1) : (h.isControl = p && p.indexOf("clip-control") > -1, h.isLine = p.indexOf("clip-line") > -1, h.isArea = p.indexOf("clip-area") > -1 || p.indexOf("clip-ellipse") > -1, h.clipIndex = v ? parseInt(v.getAttribute("data-clip-index"), 10) : -1, h.clipPath = d, h.isClipStart = !0, r.clipPathState = m, Bn(t, e), !0);
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.originalDatas, f = e.isDragTarget;
    if (!s.isClipStart)
      return !1;
    var c = s, v = c.isControl, p = c.isLine, h = c.isArea, d = c.clipIndex, m = c.clipPath;
    if (!m)
      return !1;
    var _ = An(t.props, "clippable"), x = _.keepRatio, y = 0, b = 0, E = u.draggable, R = Pe(e);
    f && E ? (r = F(E.prevBeforeDist, 2), y = r[0], b = r[1]) : (n = F(R, 2), y = n[0], b = n[1]);
    var O = [y, b], I = t.state, w = I.width, D = I.height, T = !h && !v && !p, P = m.type, B = m.poses, H = m.splitter, N = B.map(function(Jt) {
      return Jt.pos;
    });
    T && (y = -y, b = -b);
    var L = !v || B[d].direction === "nesw", Y = P === "inset" || P === "rect", X = B.map(function() {
      return [0, 0];
    });
    if (v && !L) {
      var J = B[d], j = J.horizontal, V = J.vertical, nt = [
        y * Q(j),
        b * Q(V)
      ];
      X = tw(B, d, nt, Y, x);
    } else L && (X = N.map(function() {
      return [y, b];
    }));
    var et = N.map(function(Jt, br) {
      return $t(Jt, X[br]);
    }), U = it([], F(et), !1);
    I.snapBoundInfos = null;
    var ft = m.type === "circle", pt = m.type === "ellipse";
    if (ft || pt) {
      var st = le(et), lt = Q(st.bottom - st.top), ot = Q(pt ? st.right - st.left : lt), ct = et[0][1] + lt, mt = et[0][0] - ot, Rt = et[0][0] + ot;
      ft && (U.push([Rt, st.bottom]), X.push([1, 0])), U.push([st.left, ct]), X.push([0, 1]), U.push([mt, st.bottom]), X.push([1, 0]);
    }
    var Wt = Gd((_.clipHorizontalGuidelines || []).map(function(Jt) {
      return Qt("".concat(Jt), D);
    }), (_.clipVerticalGuidelines || []).map(function(Jt) {
      return Qt("".concat(Jt), w);
    }), w, D), at = [], gt = [];
    if (ft || pt)
      at = [U[4][0], U[2][0]], gt = [U[1][1], U[3][1]];
    else if (Y) {
      var Yt = [U[0], U[2], U[4], U[6]], xt = [X[0], X[2], X[4], X[6]];
      at = Yt.filter(function(Jt, br) {
        return xt[br][0];
      }).map(function(Jt) {
        return Jt[0];
      }), gt = Yt.filter(function(Jt, br) {
        return xt[br][1];
      }).map(function(Jt) {
        return Jt[1];
      });
    } else
      at = U.filter(function(Jt, br) {
        return X[br][0];
      }).map(function(Jt) {
        return Jt[0];
      }), gt = U.filter(function(Jt, br) {
        return X[br][1];
      }).map(function(Jt) {
        return Jt[1];
      });
    var Ct = [0, 0], It = Wv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: D }, at, gt, 5, 5), zt = It.horizontal, qt = It.vertical, Pt = zt.offset, tt = qt.offset;
    if (zt.isBound && (Ct[1] += Pt), qt.isBound && (Ct[0] += tt), (pt || ft) && X[0][0] === 0 && X[0][1] === 0) {
      var st = le(et), ut = st.bottom - st.top, wt = pt ? st.right - st.left : ut, Nt = qt.isBound ? Q(tt) : qt.snapIndex === 0 ? -tt : tt, Ut = zt.isBound ? Q(Pt) : zt.snapIndex === 0 ? -Pt : Pt;
      wt -= Nt, ut -= Ut, ft && (ut = Rd(qt, zt) > 0 ? ut : wt, wt = ut);
      var yt = U[0];
      U[1][1] = yt[1] - ut, U[2][0] = yt[0] + wt, U[3][1] = yt[1] + ut, U[4][0] = yt[0] - wt;
    } else if (Y && x && v) {
      var ir = F(oh(B), 2), gr = ir[0], pe = ir[1], Gn = gr && pe ? gr / pe : 0, xi = B[d], $e = xi.direction || "", dn = U[1][1], ct = U[5][1], mt = U[7][0], Rt = U[3][0];
      Q(Pt) <= Q(tt) ? Pt = zr(Pt) * Q(tt) / Gn : tt = zr(tt) * Q(Pt) * Gn, $e.indexOf("w") > -1 ? mt -= tt : $e.indexOf("e") > -1 ? Rt -= tt : (mt += tt / 2, Rt -= tt / 2), $e.indexOf("n") > -1 ? dn -= Pt : $e.indexOf("s") > -1 ? ct -= Pt : (dn += Pt / 2, ct -= Pt / 2);
      var yi = Bo(dn, Rt, ct, mt);
      U.forEach(function(ha, Ko) {
        var wi;
        wi = F(yi[Ko].pos, 2), ha[0] = wi[0], ha[1] = wi[1];
      });
    } else
      U.forEach(function(Jt, br) {
        var Ei = X[br];
        Ei[0] && (Jt[0] -= tt), Ei[1] && (Jt[1] -= Pt);
      });
    var Fn = zf(t, m, et), hn = "".concat(P, "(").concat(Fn.join(H), ")");
    if (I.clipPathState = hn, ft || pt)
      at = [U[4][0], U[2][0]], gt = [U[1][1], U[3][1]];
    else if (Y) {
      var Yt = [U[0], U[2], U[4], U[6]];
      at = Yt.map(function(br) {
        return br[0];
      }), gt = Yt.map(function(br) {
        return br[1];
      });
    } else
      at = U.map(function(Jt) {
        return Jt[0];
      }), gt = U.map(function(Jt) {
        return Jt[1];
      });
    if (I.snapBoundInfos = Wv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: D }, at, gt, 1, 1), E) {
      var Si = I.is3d, bi = I.allMatrix, Vo = Si ? 4 : 3, Ci = Ct;
      f && (Ci = [
        O[0] + Ct[0] - R[0],
        O[1] + Ct[1] - R[1]
      ]), E.deltaOffset = jt(bi, [Ci[0], Ci[1], 0, 0], Vo);
    }
    return dt(t, "onClip", Bt(t, e, z({ clipEventType: "changed", clipType: P, poses: et, clipStyle: hn, clipStyles: Fn, distX: y, distY: b }, Gr((a = {}, a[P === "rect" ? "clip" : "clipPath"] = hn, a), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, a = e.isDouble, s = n.isLine, u = n.isClipStart, f = n.isControl;
    return u ? (dt(t, "onClipEnd", Qr(t, e, {})), a && (f ? ew(t, e) : s && rw(t, e)), a || r) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, iw = {
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
    return e.isRequest ? e.requestAble === "originDraggable" : yr(e.inputEvent.target, St("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    Bn(t, e);
    var n = Bt(t, e, {
      dragStart: Br.dragStart(t, new fi().dragStart([0, 0], e))
    }), a = dt(t, "onDragOriginStart", n);
    return r.startOrigin = t.state.transformOrigin, r.startTargetOrigin = t.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, a === !1 ? (r.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var s = F(Pe(e), 2), u = s[0], f = s[1], c = t.state, v = c.width, p = c.height, h = c.offsetMatrix, d = c.targetMatrix, m = c.is3d, _ = t.props.originRelative, x = _ === void 0 ? !0 : _, y = m ? 4 : 3, b = [u, f];
    if (a) {
      var E = e.distOrigin;
      (E[0] || E[1]) && (b = E);
    }
    var R = $t(r.startOrigin, b), O = $t(r.startTargetOrigin, b), I = bt(b, r.prevOrigin), w = da(h, d, R, y), D = t.getRect(), T = le(zn(w, v, p, y)), P = [
      D.left - T.left,
      D.top - T.top
    ];
    r.prevOrigin = b;
    var B = [
      Se(O[0], v, x),
      Se(O[1], p, x)
    ].join(" "), H = Br.drag(t, pa(e, t.state, P, !!n)), N = Bt(t, e, z(z({ width: v, height: p, origin: R, dist: b, delta: I, transformOrigin: B, drag: H }, Gr({
      transformOrigin: B,
      transform: H.transform
    }, e)), { afterTransform: H.transform }));
    return dt(t, "onDragOrigin", N), N;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (dt(t, "onDragOriginEnd", Qr(t, e, {})), !0) : !1;
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
function aw(t, e, r, n) {
  var a = t.filter(function(c) {
    var v = c.virtual, p = c.horizontal;
    return p && !v;
  }).length, s = t.filter(function(c) {
    var v = c.virtual, p = c.vertical;
    return p && !v;
  }).length, u = -1;
  if (e === 0 && (a === 0 ? u = 0 : a === 1 && (u = 1)), e === 2 && (a <= 2 ? u = 2 : a <= 3 && (u = 3)), e === 3 && (s === 0 ? u = 4 : s < 4 && (u = 7)), e === 1 && (s <= 1 ? u = 5 : s <= 2 && (u = 6)), !(u === -1 || !t[u].virtual)) {
    var f = t[u];
    ow(t, u), u < 4 ? f.pos[0] = r : f.pos[1] = n;
  }
}
function ow(t, e) {
  e < 4 ? t.slice(0, e + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, e + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function sw(t, e) {
  e < 4 ? t.slice(e, 4).forEach(function(r) {
    r.virtual = !0;
  }) : t.slice(e).forEach(function(r) {
    r.virtual = !0;
  });
}
function ep(t, e, r, n, a) {
  n === void 0 && (n = [0, 0]);
  var s = [];
  return !t || t === "0px" ? s = [] : s = ln(t), ah(s, e, r, 0, 0, n, a);
}
function np(t, e, r, n, a) {
  var s = t.state, u = s.width, f = s.height, c = Bf(a, t.props.roundRelative, u, f), v = c.raws, p = c.styles, h = c.radiusPoses, d = JE(h, v), m = d.horizontals, _ = d.verticals, x = p.join(" ");
  s.borderRadiusState = x;
  var y = Bt(t, e, z({ horizontals: m, verticals: _, borderRadius: x, width: u, height: f, delta: n, dist: r }, Gr({
    borderRadius: x
  }, e)));
  return dt(t, "onRound", y), y;
}
function ip(t) {
  var e, r, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var s = t.moveables[0], u = t.getTargets()[0];
    u && (s?.props.target === u ? (a = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = a) : (a = Tf(u).borderRadius, n.borderRadius = a));
  }
  return a;
}
var uw = {
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
    return e === !0 || e === "line" ? St("round-line-clickable") : "";
  },
  requestStyle: function() {
    return ["borderRadius"];
  },
  requestChildStyle: function() {
    return ["borderRadius"];
  },
  render: function(t, e) {
    var r = t.getState(), n = r.target, a = r.width, s = r.height, u = r.allMatrix, f = r.is3d, c = r.left, v = r.top, p = r.borderRadiusState, h = t.props, d = h.minRoundControls, m = d === void 0 ? [0, 0] : d, _ = h.maxRoundControls, x = _ === void 0 ? [4, 4] : _, y = h.zoom, b = h.roundPadding, E = b === void 0 ? 0 : b, R = h.isDisplayShadowRoundControls, O = h.groupable;
    if (!n)
      return null;
    var I = p || ip(t), w = f ? 4 : 3, D = ep(I, a, s, m, !0);
    if (!D)
      return null;
    var T = 0, P = 0, B = O ? [0, 0] : [c, v];
    return D.map(function(H, N) {
      var L = H.horizontal, Y = H.vertical, X = H.direction || "", J = it([], F(H.pos), !1);
      P += Math.abs(L), T += Math.abs(Y), L && X.indexOf("n") > -1 && (J[1] -= E), Y && X.indexOf("w") > -1 && (J[0] -= E), L && X.indexOf("s") > -1 && (J[1] += E), Y && X.indexOf("e") > -1 && (J[0] += E);
      var j = bt(sr(u, J, w), B), V = R && R !== "horizontal", nt = H.vertical ? T <= x[1] && (V || !H.virtual) : P <= x[0] && (R || !H.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(N), className: St("control", "border-radius", H.vertical ? "vertical" : "", H.virtual ? "virtual" : ""), "data-radius-index": N, style: {
        display: nt ? "block" : "none",
        transform: "translate(".concat(j[0], "px, ").concat(j[1], "px) scale(").concat(y, ")")
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
    var h = Bt(t, e, {}), d = dt(t, "onRoundStart", h);
    if (d === !1)
      return !1;
    n.lineIndex = v, n.controlIndex = c, n.isControl = u, n.isLine = f, Bn(t, e);
    var m = t.props, _ = m.roundRelative, x = m.minRoundControls, y = x === void 0 ? [0, 0] : x, b = t.state, E = b.width, R = b.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var O = ip(t), I = ep(O || "", E, R, y, !0) || [];
    return n.controlPoses = I, b.borderRadiusState = Bf(I, _, E, R).styles.join(" "), h;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var a = r.controlIndex, s = F(Pe(e), 2), u = s[0], f = s[1], c = [u, f], v = bt(c, r.prevDist), p = t.props.maxRoundControls, h = p === void 0 ? [4, 4] : p, d = t.state, m = d.width, _ = d.height, x = n[a], y = x.vertical, b = x.horizontal, E = n.map(function(O) {
      var I = O.horizontal, w = O.vertical, D = [
        I * b * c[0],
        w * y * c[1]
      ];
      if (I) {
        if (h[0] === 1)
          return D;
        if (h[0] < 4 && I !== b)
          return D;
      } else {
        if (h[1] === 0)
          return D[1] = w * b * c[0] / m * _, D;
        if (y) {
          if (h[1] === 1)
            return D;
          if (h[1] < 4 && w !== y)
            return D;
        }
      }
      return [0, 0];
    });
    E[a] = c;
    var R = n.map(function(O, I) {
      return z(z({}, O), { pos: $t(O.pos, E[I]) });
    });
    return a < 4 ? R.slice(0, a + 1).forEach(function(O) {
      O.virtual = !1;
    }) : R.slice(4, a + 1).forEach(function(O) {
      O.virtual = !1;
    }), r.prevDist = [u, f], np(t, e, c, v, R);
  },
  dragControlEnd: function(t, e) {
    var r = t.state;
    r.borderRadiusState = "";
    var n = e.datas, a = e.isDouble;
    if (!n.isRound)
      return !1;
    var s = n.isControl, u = n.controlIndex, f = n.isLine, c = n.lineIndex, v = n.controlPoses, p = v.filter(function(b) {
      var E = b.virtual;
      return E;
    }).length, h = t.props.roundClickable, d = h === void 0 ? !0 : h;
    if (a && d) {
      if (s && (d === !0 || d === "control"))
        sw(v, u);
      else if (f && (d === !0 || d === "line")) {
        var m = F(ld(t, e), 2), _ = m[0], x = m[1];
        aw(v, c, _, x);
      }
      p !== v.filter(function(b) {
        var E = b.virtual;
        return E;
      }).length && np(t, e, [0, 0], [0, 0], v);
    }
    var y = Qr(t, e, {});
    return dt(t, "onRoundEnd", y), r.borderRadiusState = "", y;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Ce(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return dt(t, "onRoundGroupStart", u), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Ce(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] }), Gr({
        borderRadius: r.borderRadius
      }, f));
    }) }, r);
    return dt(t, "onRoundGroup", u), u;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, a = Ce(t, "roundable", e);
    $o(t, "onRound", function(f) {
      var c = z({ targets: t.props.targets, events: a.map(function(v, p) {
        return z(z(z({}, v), { target: n[p], moveable: r[p], currentTarget: r[p] }), Gr({
          borderRadius: f.borderRadius
        }, v));
      }) }, f);
      dt(t, "onRoundGroup", c);
    });
    var s = this.dragControlEnd(t, e);
    if (!s)
      return !1;
    var u = z({ targets: t.props.targets, events: a.map(function(f, c) {
      var v;
      return z(z({}, f), { target: n[c], moveable: r[c], currentTarget: r[c], lastEvent: (v = f.datas) === null || v === void 0 ? void 0 : v.lastEvent });
    }) }, s);
    return dt(t, "onRoundGroupEnd", u), u;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function fw(t, e) {
  var r = e ? 4 : 3, n = nr(r), a = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var sh = {
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
    var r = t.state, n = r.is3d, a = r.targetMatrix, s = r.inlineTransform, u = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(Jp(a, !0), ")"), f = !s || s === "none" ? u : s;
    e.datas.startTransforms = fw(f, n) ? [] : ln(f);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return Bt(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = hr(r) ? r : ln(r);
      },
      isPinch: !!e.isPinch
    });
  },
  fillDragParams: function(t, e) {
    return Bt(t, e, {
      isPinch: !!e.isPinch
    });
  },
  dragStart: function(t, e) {
    this.setTransform(t, e), this.resetStyle(e), dt(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), dt(t, "onBeforeRender", Bt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), dt(t, "onBeforeRenderEnd", Bt(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = Ce(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.setTransform(c, u), r.resetStyle(u), r.fillDragStartParams(c, u);
    });
    dt(t, "onBeforeRenderGroupStart", Bt(t, e, {
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
    var n = Ce(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.resetStyle(u), r.fillDragParams(c, u);
    });
    dt(t, "onBeforeRenderGroup", Bt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: s
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), dt(t, "onBeforeRenderGroupEnd", Bt(t, e, {
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
}, uh = {
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
    dt(t, "onRenderStart", Bt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  drag: function(t, e) {
    dt(t, "onRender", this.fillDragParams(t, e));
  },
  dragAfter: function(t, e) {
    return this.drag(t, e);
  },
  dragEnd: function(t, e) {
    dt(t, "onRenderEnd", this.fillDragEndParams(t, e));
  },
  dragGroupStart: function(t, e) {
    dt(t, "onRenderGroupStart", Bt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = Ce(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragParams(c, u);
    });
    dt(t, "onRenderGroup", Bt(t, e, z(z({ isPinch: !!e.isPinch, targets: t.props.targets, transform: co(e), transformObject: {} }, Gr(vo(e))), { events: s })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = Ce(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragEndParams(c, u);
    });
    dt(t, "onRenderGroupEnd", Bt(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: s, transformObject: {}, transform: co(e) }, Gr(vo(e)))));
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
    return ui(Mo(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Bt(t, e, z({ isPinch: !!e.isPinch, transformObject: r, transform: co(e) }, Gr(vo(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return ui(Mo(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Bt(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: co(e) }, Gr(vo(e))));
  }
};
function Ji(t, e, r, n, a, s, u) {
  s.clientDistX = s.distX, s.clientDistY = s.distY;
  var f = a === "Start", c = a === "End", v = a === "After", p = t.state.target, h = s.isRequest, d = n.indexOf("Control") > -1;
  if (!p || f && d && !h && t.areaElement === s.inputEvent.target)
    return !1;
  var m = it([], F(e), !1);
  if (h) {
    var _ = s.requestAble;
    m.some(function(N) {
      return N.name === _;
    }) || m.push.apply(m, it([], F(t.props.ables.filter(function(N) {
      return N.name === _;
    })), !1));
  }
  if (!m.length || m.every(function(N) {
    return N.dragRelation;
  }))
    return !1;
  var x = s.inputEvent, y;
  c && x && (y = document.elementFromPoint(s.clientX, s.clientY) || x.target);
  var b = !1, E = function() {
    var N;
    b = !0, (N = s.stop) === null || N === void 0 || N.call(s);
  }, R = f && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  R && t.updateRect(a, !0, !1);
  var O = s.datas, I = d ? "controlGesto" : "targetGesto", w = t[I], D = function(N, L, Y) {
    if (!(L in N) || w !== t[I])
      return !1;
    var X = N.name, J = O[X] || (O[X] = {});
    if (f && (J.isEventStart = !Y || !N[Y] || N[Y](t, s)), !J.isEventStart)
      return !1;
    var j = N[L](t, z(z({}, s), { stop: E, datas: J, originalDatas: O, inputTarget: y }));
    return t._emitter.off(), f && j === !1 && (J.isEventStart = !1), j;
  };
  R && m.forEach(function(N) {
    N.unset && N.unset(t);
  }), D(sh, "drag".concat(n).concat(a));
  var T = 0, P = 0;
  r.forEach(function(N) {
    if (b)
      return !1;
    var L = "".concat(N).concat(n).concat(a), Y = "".concat(N).concat(n, "Condition");
    a === "" && !h && PE(t.state, s);
    var X = m.filter(function(V) {
      return V[L];
    });
    X = X.filter(function(V, nt) {
      return V.name && X.indexOf(V) === nt;
    });
    var J = X.filter(function(V) {
      return D(V, L, Y);
    }), j = J.length;
    b && ++T, j && ++P, !b && f && X.length && !j && (T += X.filter(function(V) {
      var nt = V.name, et = O[nt];
      return et.isEventStart ? V.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!v || P) && D(uh, "drag".concat(n).concat(a));
  var B = w !== t[I] || T === r.length;
  if ((c || b || B) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(N) {
    N.state.gestos = {};
  }), m.forEach(function(N) {
    N.unset && N.unset(t);
  })), f && !B && !h && P && t.props.preventDefault && s?.preventDefault(), t.isUnmounted || B)
    return !1;
  if (!f && P && !u || c) {
    var H = t.props.flushSync || Wd;
    H(function() {
      t.updateRect(c ? a : "", !0, !1), t.forceUpdate();
    });
  }
  return !f && !c && !v && P && !u && Ji(t, e, r, n, a + "After", s), !0;
}
function Gf(t, e) {
  return function(r, n) {
    var a;
    n === void 0 && (n = r.inputEvent.target);
    var s = n, u = t.areaElement, f = t._dragTarget;
    return !f || !e && (!((a = t.controlGesto) === null || a === void 0) && a.isFlag()) ? !1 : s === f || f.contains(s) || s === u || !t.isMoveableElement(s) && !t.controlBox.contains(s) || yr(s, "moveable-area") || yr(s, "moveable-padding") || yr(s, "moveable-edgeDraggable");
  };
}
function fh(t, e, r) {
  var n = t.controlBox, a = [], s = t.props, u = s.dragArea, f = t.state.target, c = s.dragTarget;
  a.push(n), (!u || c) && a.push(e), !u && c && f && e !== f && s.dragTargetSelf && a.push(f);
  var v = Gf(t);
  return ch(t, a, "targetAbles", r, {
    dragStart: v,
    pinchStart: v
  });
}
function lh(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var a = Gf(t, !0), s = function(u, f) {
    if (f === void 0 && (f = u.inputEvent.target), f === r)
      return !0;
    var c = a(u, f);
    return !c;
  };
  return ch(t, n, "controlAbles", e, {
    dragStart: s,
    pinchStart: s
  });
}
function ch(t, e, r, n, a) {
  a === void 0 && (a = {});
  var s = r === "targetAbles", u = t.props, f = u.pinchOutside, c = u.pinchThreshold, v = u.preventClickEventOnDrag, p = u.preventClickDefault, h = u.checkInput, d = u.dragFocusedInput, m = u.preventDefault, _ = m === void 0 ? !0 : m, x = u.preventRightClick, y = x === void 0 ? !0 : x, b = u.preventWheelClick, E = b === void 0 ? !0 : b, R = u.dragContainer, O = Oe(R, !0), I = {
    preventDefault: _,
    preventRightClick: y,
    preventWheelClick: E,
    container: O || fn(t.getControlBoxElement()),
    pinchThreshold: c,
    pinchOutside: f,
    preventClickEventOnDrag: s ? v : !1,
    preventClickEventOnDragStart: s ? p : !1,
    preventClickEventByCondition: s ? null : function(T) {
      return t.controlBox.contains(T.target);
    },
    checkInput: s ? h : !1,
    dragFocusedInput: d
  }, w = new Gb(e, I), D = n === "Control";
  return ["drag", "pinch"].forEach(function(T) {
    ["Start", "", "End"].forEach(function(P) {
      w.on("".concat(T).concat(P), function(B) {
        var H, N = B.eventType, L = T === "drag" && B.isPinch;
        if (a[N] && !a[N](B)) {
          B.stop();
          return;
        }
        if (!L) {
          var Y = T === "drag" ? [T] : ["drag", T], X = it([], F(t[r]), !1), J = Ji(t, X, Y, n, P, B);
          J ? (t.props.stopPropagation || P === "Start" && D) && ((H = B?.inputEvent) === null || H === void 0 || H.stopPropagation()) : B.stop();
        }
      });
    });
  }), w;
}
var lw = /* @__PURE__ */ (function() {
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
function cw(t, e, r, n) {
  var a;
  r === void 0 && (r = e);
  var s = gd(t, e), u = s.matrixes, f = s.is3d, c = s.targetMatrix, v = s.transformOrigin, p = s.targetOrigin, h = s.offsetContainer, d = s.hasFixed, m = s.zoom, _ = wC(h, r), x = _.matrixes, y = _.is3d, b = _.offsetContainer, E = _.zoom, R = n, O = 4, I = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, w = c, D = nr(O), T = nr(O), P = nr(O), B = nr(O), H = u.length, N = x.map(function(nt) {
    return z(z({}, nt), { matrix: nt.matrix ? it([], F(nt.matrix), !1) : void 0 });
  }).reverse();
  u.reverse(), !f && R && (w = we(w, 3, 4), Vu(u)), !y && R && Vu(N), N.forEach(function(nt) {
    T = jt(T, nt.matrix, O);
  });
  var L = r || pn(t), Y = ((a = N[0]) === null || a === void 0 ? void 0 : a.target) || ea(L, L, !0).offsetParent, X = N.slice(1).reduce(function(nt, et) {
    return jt(nt, et.matrix, O);
  }, nr(O));
  u.forEach(function(nt, et) {
    if (H - 2 === et && (P = D.slice()), H - 1 === et && (B = D.slice()), !nt.matrix) {
      var U = u[et + 1], ft = RE(nt, U, Y, O, jt(X, D, O));
      nt.matrix = In(ft, O);
    }
    D = jt(D, nt.matrix, O);
  });
  var J = !I && f;
  w || (w = nr(J ? 4 : 3));
  var j = Uo(I && w.length === 16 ? we(w, 4, 3) : w, J), V = T;
  return T = Kp(T, O, O), {
    hasZoom: m !== 1 || E !== 1,
    hasFixed: d,
    matrixes: u,
    rootMatrix: T,
    originalRootMatrix: V,
    beforeMatrix: P,
    offsetMatrix: B,
    allMatrix: D,
    targetMatrix: w,
    targetTransform: j,
    inlineTransform: t.style.transform,
    transformOrigin: v,
    targetOrigin: p,
    is3d: R,
    offsetContainer: h,
    offsetRootContainer: b
  };
}
function vw(t, e, r, n) {
  r === void 0 && (r = e);
  var a = 0, s = 0, u = 0, f = {}, c = Yd(t);
  if (t && (a = c.offsetWidth, s = c.offsetHeight), t) {
    var v = cw(t, e, r, n), p = oi(v.allMatrix, v.transformOrigin, a, s);
    f = z(z({}, v), p);
    var h = oi(v.allMatrix, [50, 50], 100, 100);
    u = Xd([h.pos1, h.pos2], h.direction);
  }
  var d = 4;
  return z(z(z({ hasZoom: !1, width: a, height: s, rotation: u }, c), { originalRootMatrix: nr(d), rootMatrix: nr(d), beforeMatrix: nr(d), offsetMatrix: nr(d), allMatrix: nr(d), targetMatrix: nr(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), f);
}
function Qu(t, e, r, n, a, s) {
  s === void 0 && (s = []);
  var u = 1, f = [0, 0], c = ho(), v = ho(), p = ho(), h = ho(), d = [0, 0], m = {}, _ = vw(e, r, a, !0);
  if (e) {
    var x = qr(e);
    s.forEach(function(N) {
      m[N] = x(N);
    });
    var y = _.is3d ? 4 : 3, b = oi(_.offsetMatrix, $t(_.transformOrigin, Zp(_.targetMatrix, y)), _.width, _.height);
    u = b.direction, f = $t(b.origin, [b.left - _.left, b.top - _.top]), h = Zi(_.offsetRootContainer);
    var E = ea(n, n, !0).offsetParent || _.offsetRootContainer;
    if (_.hasZoom) {
      var R = oi(jt(_.originalRootMatrix, _.allMatrix), _.transformOrigin, _.width, _.height), O = oi(_.originalRootMatrix, Io(qr(E)("transformOrigin")).map(function(N) {
        return parseFloat(N);
      }), E.offsetWidth, E.offsetHeight);
      if (c = Su(R, h), p = Su(O, h, E, !0), t) {
        var I = R.left, w = R.top;
        v = Su({
          left: I,
          top: w,
          bottom: w,
          right: w
        }, h);
      }
    } else {
      c = Zi(e), p = EC(E), t && (v = Zi(t));
      var D = p.left, T = p.top, P = p.clientLeft, B = p.clientTop, H = [
        c.left - D,
        c.top - T
      ];
      d = bt(vi(_.rootMatrix, H, 4), [P + _.left, B + _.top]);
    }
  }
  return z({ targetClientRect: c, containerClientRect: p, moveableClientRect: v, rootContainerClientRect: h, beforeDirection: u, beforeOrigin: f, originalBeforeOrigin: f, target: e, style: m, offsetDelta: d }, _);
}
function ap(t) {
  var e = t.pos1, r = t.pos2, n = t.pos3, a = t.pos4;
  if (!e || !r || !n || !a)
    return null;
  var s = Pn([e, r, n, a]), u = [s.minX, s.minY], f = bt(t.origin, u);
  return e = bt(e, u), r = bt(r, u), n = bt(n, u), a = bt(a, u), z(z({}, t), {
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
var pi = /* @__PURE__ */ (function(t) {
  ca(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = z({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Qu(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new Lo(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var n = r.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        MS(r._observerId), r._observerId = Cp(function() {
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
    var _ = F(a || [0, 0], 2), x = _[0], y = _[1], b = n.left, E = n.top, R = n.target, O = n.direction, I = n.hasFixed, w = n.offsetDelta, D = r.targets, T = this.isDragging(), P = {};
    this.getEnabledAbles().forEach(function(X) {
      P["data-able-".concat(X.name.toLowerCase())] = !0;
    });
    var B = this._getAbleClassName(), H = D && D.length && (R || h) || u || !this._hasFirstTarget && this.state.isPersisted, N = this.controlBox || this.props.firstRenderState || this.props.persistData, L = [b - x, E - y];
    !h && r.useAccuratePosition && (L[0] += w[0], L[1] += w[1]);
    var Y = {
      position: I ? "fixed" : "absolute",
      display: H ? "block" : "none",
      visibility: N ? "visible" : "hidden",
      transform: "translate3d(".concat(L[0], "px, ").concat(L[1], "px, ").concat(v, ")"),
      "--zoom": f,
      "--zoompx": "".concat(f, "px")
    };
    return d && (Y["--moveable-line-padding"] = d), m && (Y["--moveable-control-padding"] = m), be(
      p,
      z({ cspNonce: c, ref: He(this, "controlBox"), className: "".concat(St("control-box", O === -1 ? "reverse" : "", T ? "dragging" : ""), " ").concat(B, " ").concat(s) }, P, { onClick: this._onPreventClick, style: Y }),
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
    a && this._changeAbleViewClassNames([]), ii(this, !1), ii(this, !0);
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
    return Xr(n, function(a) {
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
    return r && (((n = r.getAttribute) === null || n === void 0 ? void 0 : n.call(r, "class")) || "").indexOf(mf) > -1;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var a = this.targetGesto, s = this.controlGesto;
    return a && Gf(this)({ inputEvent: r }, n) ? a.isFlag() || a.triggerDragStart(r) : s && this.isMoveableElement(n) && (s.isFlag() || s.triggerDragStart(r)), this;
  }, e.prototype.hitTest = function(r) {
    var n = this.state, a = n.target, s = n.pos1, u = n.pos2, f = n.pos3, c = n.pos4, v = n.targetClientRect;
    if (!a)
      return 0;
    var p;
    if (hi(r)) {
      var h = r.getBoundingClientRect();
      p = {
        left: h.left,
        top: h.top,
        width: h.width,
        height: h.height
      };
    } else
      p = z({ width: 0, height: 0 }, r);
    var d = p.left, m = p.top, _ = p.width, x = p.height, y = Rv([s, u, c, f], v), b = Ob(y, [
      [d, m],
      [d + _, m],
      [d + _, m + x],
      [d, m + x]
    ]), E = td(y);
    return !b || !E ? 0 : Math.min(100, b / E * 100);
  }, e.prototype.isInside = function(r, n) {
    var a = this.state, s = a.target, u = a.pos1, f = a.pos2, c = a.pos3, v = a.pos4, p = a.targetClientRect;
    return s ? zu([r, n], Rv([u, f, v, c], p)) : !1;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0);
    var s = this.props, u = !s.parentPosition && !s.wrapperMoveable;
    u && li(!0);
    var f = s.parentMoveable, c = this.state, v = c.target || s.target, p = this.getContainer(), h = f ? f._rootContainer : this._rootContainer, d = Qu(this.controlBox, v, p, p, h || p, this._getRequestStyles());
    if (!v && this._hasFirstTarget && s.persistData) {
      var m = ap(s.persistData);
      for (var _ in m)
        d[_] = m[_];
    }
    u && li(), this.updateState(d, f ? !1 : a);
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
    var r = this.state, n = ve(this.state), a = F(n, 4), s = a[0], u = a[1], f = a[2], c = a[3], v = le(n), p = r.width, h = r.height, d = v.width, m = v.height, _ = v.left, x = v.top, y = [r.left, r.top], b = $t(y, r.origin), E = $t(y, r.beforeOrigin), R = r.transformOrigin;
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
      origin: b,
      transformOrigin: R,
      rotation: this.getRotation()
    };
  }, e.prototype.getManager = function() {
    return this;
  }, e.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var n = this.targetGesto;
      n?.isIdle() === !1 && Ku(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && Ku(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, a = r.pos2, s = r.direction;
    return zE(n, a, s);
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this, u = s.props, f = u.parentMoveable || u.wrapperMoveable || s, c = f.props.ables, v = u.groupable, p = Xr(c, function(b) {
      return b.name === r;
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
    var h = p.request(s), d = a || n.isInstant, m = h.isControl ? "controlAbles" : "targetAbles", _ = "".concat(v ? "Group" : "").concat(h.isControl ? "Control" : ""), x = it([], F(f[m]), !1), y = {
      request: function(b) {
        return Ji(s, x, ["drag"], _, "", z(z({}, h.request(b)), { requestAble: r, isRequest: !0 }), d), y;
      },
      requestEnd: function() {
        return Ji(s, x, ["drag"], _, "End", z(z({}, h.requestEnd()), { requestAble: r, isRequest: !0 }), d), y;
      }
    };
    return Ji(s, x, ["drag"], _, "Start", z(z({}, h.requestStart(n)), { requestAble: r, isRequest: !0 }), d), d ? y.request(n).requestEnd() : y;
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
    var b = th(a || {}), E = b.left, R = b.top, O = b.bottom, I = b.right, w = c ? 4 : 3, D = [];
    x ? D = u : this.controlBox && n.groupable ? D = s : D = $t(s, [m, _]);
    var T = wo(w, In(D.map(function(Y) {
      return -Y;
    }), w), f, In(u, w)), P = se(T, v, [-E, -R], w), B = se(T, p, [I, -R], w), H = se(T, h, [-E, O], w), N = se(T, d, [I, O], w);
    r.renderPoses = [
      P,
      B,
      H,
      N
    ], r.renderLines = [
      [P, B],
      [B, N],
      [N, H],
      [H, P]
    ];
    {
      var L = y / 2;
      r.renderLines = [
        [
          se(T, v, [-E - L, -R], w),
          se(T, p, [I + L, -R], w)
        ],
        [
          se(T, p, [I, -R - L], w),
          se(T, d, [I, O + L], w)
        ],
        [
          se(T, d, [I + L, O], w),
          se(T, h, [-E - L, O], w)
        ],
        [
          se(T, h, [-E, O + L], w),
          se(T, v, [-E, -R - L], w)
        ]
      ];
    }
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, n = r.target, a = r.container, s = r.parentMoveable, u = this.state, f = u.target, c = u.container;
    if (!(!f && !n)) {
      this.updateAbles();
      var v = !Zu(f, n), p = v || !Zu(c, a);
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
    return a[s] || (a[s] = nd(r, n)), a[s];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, s = n.persistData, u = n.firstRenderState;
    if (u && !a)
      return u;
    if (!this._hasFirstTarget && s) {
      var f = ap(s);
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
    var a = this.props, s = a.triggerAblesSimultaneously, u = this.getEnabledAbles(r), f = "drag".concat(n, "Start"), c = "pinch".concat(n, "Start"), v = "drag".concat(n, "ControlStart"), p = go(u, [f, c], s), h = go(u, [v], s);
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
      createElement: be
    };
    return this.renderState = {}, IE(Zd(go(this.getEnabledAbles(), ["render"], a).map(function(u) {
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
      return it(it([], F(n), !1), F(f), !1);
    }, it([], F(this.props.requestStyles || []), !1));
    return r;
  }, e.prototype._updateObserver = function(r) {
    this._updateResizeObserver(r), this._updateMutationObserver(r);
  }, e.prototype._updateEvents = function() {
    var r = this.targetAbles.length, n = this.controlAbles.length, a = this._dragTarget, s = !r && this.targetGesto || this._isTargetChanged(!0);
    s && (ii(this, !1), this.updateState({ gestos: {} })), n || ii(this, !0), a && r && !this.targetGesto && (this.targetGesto = fh(this, a, "")), !this.controlGesto && n && (this.controlGesto = lh(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = Oe(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, a = n.zoom, s = n.hideDefaultLines, u = n.hideChildMoveableDefaultLines, f = n.parentMoveable;
    if (s || f && u)
      return [];
    var c = this.getState(), v = {
      createElement: be
    };
    return c.renderLines.map(function(p, h) {
      return ra(v, "", p[0], p[1], a, "render-line-".concat(h));
    });
  }, e.prototype._isTargetChanged = function(r) {
    var n = this.props, a = n.dragTarget || n.target, s = this._prevOriginalDragTarget, u = this._prevDragArea, f = n.dragArea, c = !f && s !== a, v = (r || f) && u !== f;
    return c || v || this._prevPropTarget != this._propTarget;
  }, e.prototype._updateNativeEvents = function() {
    var r = this, n = this.props, a = n.dragArea ? this.areaElement : this.state.target, s = this.events, u = Ue(s);
    if (this._isTargetChanged())
      for (var f in s) {
        var c = s[f];
        c && c.destroy(), s[f] = null;
      }
    if (a) {
      var v = this.enabledAbles;
      u.forEach(function(p) {
        var h = go(v, [p]), d = h.length > 0, m = s[p];
        if (!d) {
          m && (m.destroy(), s[p] = null);
          return;
        }
        m || (m = new lw(a, r, p), s[p] = m), m.setAbles(h);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = Oe(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = Oe(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(it(it([], F(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? HE : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, a = Kd(r.filter(Boolean), function(v) {
      return v;
    }).map(function(v) {
      var p = F(v, 1), h = p[0];
      return h;
    }), s = this._viewClassNames, u = oa(s, a), f = u.removed, c = u.added;
    f.forEach(function(v) {
      Rp(n, s[v]);
    }), c.forEach(function(v) {
      Mp(n, a[v]);
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
      return (!((h = f[m]) === null || h === void 0) && h.isEventStart || !((d = c[m]) === null || d === void 0) && d.isEventStart) && (_ += " ".concat(St("".concat(m).concat(r, "-dragging")))), _.trim();
    }).filter(Boolean).join(" ");
  }, e.prototype._updateResizeObserver = function(r) {
    var n, a = this.props, s = a.target, u = fn(this.getControlBoxElement());
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
    var n = this, a, s = this.props, u = s.target, f = fn(this.getControlBoxElement());
    if (!f.MutationObserver || !u || !s.useMutationObserver) {
      (a = this._mutationObserver) === null || a === void 0 || a.disconnect();
      return;
    }
    if (!(r.target === u && this._mutationObserver)) {
      var c = new f.MutationObserver(function(v) {
        var p, h;
        try {
          for (var d = $b(v), m = d.next(); !m.done; m = d.next()) {
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
    flushSync: Wd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
})(zp), Ff = {
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
    var d = ai(t, "parentPosition", [u, f], function(_) {
      return _.join(",");
    }), m = ai(t, "requestStyles", t.getRequestChildStyles(), function(_) {
      return _.join(",");
    });
    return t.moveables = t.moveables.slice(0, a.length), it(it([], F(a.map(function(_, x) {
      return e.createElement(pi, { key: "moveable" + x, ref: xp(t, "moveables", x), target: _, origin: !1, requestStyles: m, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [u, f], persistData: h[x], zoom: v });
    })), !1), F(Zd(p.map(function(_, x) {
      var y = _.pos1, b = _.pos2, E = _.pos3, R = _.pos4, O = [y, b, E, R];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(I, w) {
        var D = F(I, 2), T = D[0], P = D[1];
        return ra(e, "", bt(O[T], d), bt(O[P], d), v, "group-rect-".concat(x, "-").concat(w));
      });
    }))), !1);
  }
}, pw = va("clickable", {
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
      dt(t, "onClick", Bt(t, e, {
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
      s === -1 && (s = qe(a, function(c) {
        return c.contains(n);
      }), f = s > -1), dt(t, "onClickGroup", Bt(t, e, {
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
function jn(t) {
  var e = t.originalDatas.draggable;
  return e || (t.originalDatas.draggable = {}, e = t.originalDatas.draggable), z(z({}, t), { datas: e });
}
var dw = va("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? xd(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && yr(a, St("direction")) && yr(a, St("edge")) && yr(a, St("edgeDraggable"));
  },
  dragStart: function(t, e) {
    return Br.dragStart(t, jn(e));
  },
  drag: function(t, e) {
    return Br.drag(t, jn(e));
  },
  dragEnd: function(t, e) {
    return Br.dragEnd(t, jn(e));
  },
  dragGroupCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && yr(a, St("direction")) && yr(a, St("line"));
  },
  dragGroupStart: function(t, e) {
    return Br.dragGroupStart(t, jn(e));
  },
  dragGroup: function(t, e) {
    return Br.dragGroup(t, jn(e));
  },
  dragGroupEnd: function(t, e) {
    return Br.dragGroupEnd(t, jn(e));
  },
  unset: function(t) {
    return Br.unset(t);
  }
}), vh = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, Lf = [
  sh,
  nh,
  _E,
  FE,
  Br,
  dw,
  qu,
  LE,
  NE,
  tE,
  qE,
  UE,
  YE,
  iw,
  nw,
  uw,
  Ff,
  vh,
  pw,
  eh,
  uh
], hw = /* @__PURE__ */ Lf.reduce(function(t, e) {
  return (e.events || []).forEach(function(r) {
    Dp(t, r);
  }), t;
}, []), gw = /* @__PURE__ */ Lf.reduce(function(t, e) {
  return (e.props || []).forEach(function(r) {
    Dp(t, r);
  }), t;
}, []);
function op(t, e) {
  var r = F(t, 3), n = r[0], a = r[1], s = r[2];
  return (n * e[0] + a * e[1] + s) / Math.sqrt(n * n + a * a);
}
function xo(t, e) {
  var r = F(t, 2), n = r[0], a = r[1];
  return -n * e[0] - a * e[1];
}
function sp(t, e) {
  return Math.max.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.max(a[e], s[e], u[e], f[e]);
  })), !1));
}
function up(t, e) {
  return Math.min.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.min(a[e], s[e], u[e], f[e]);
  })), !1));
}
function mw(t, e) {
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
  var h = Tt(e, Fr);
  if (h % 90) {
    var d = h / 180 * Math.PI, m = Math.tan(d), _ = -1 / m, x = [ku, Iv], y = [[0, 0], [0, 0]], b = [ku, Iv], E = [[0, 0], [0, 0]];
    t.forEach(function(pt) {
      pt.forEach(function(st) {
        var lt = op([-m, 1, 0], st), ot = op([-_, 1, 0], st);
        x[0] > lt && (y[0] = st, x[0] = lt), x[1] < lt && (y[1] = st, x[1] = lt), b[0] > ot && (E[0] = st, b[0] = ot), b[1] < ot && (E[1] = st, b[1] = ot);
      });
    });
    var R = F(y, 2), O = R[0], I = R[1], w = F(E, 2), D = w[0], T = w[1], P = [-m, 1, xo([-m, 1], O)], B = [-m, 1, xo([-m, 1], I)], H = [-_, 1, xo([-_, 1], D)], N = [-_, 1, xo([-_, 1], T)];
    r = F([
      [P, H],
      [P, N],
      [B, H],
      [B, N]
    ].map(function(pt) {
      var st = F(pt, 2), lt = st[0], ot = st[1];
      return hf(lt, ot)[0];
    }), 4), s = r[0], u = r[1], f = r[2], c = r[3], v = b[1] - b[0], p = x[1] - x[0];
  } else {
    var L = up(t, 0), Y = up(t, 1), X = sp(t, 0), J = sp(t, 1);
    if (s = [L, Y], u = [X, Y], f = [L, J], c = [X, J], v = X - L, p = J - Y, h % 180) {
      var j = [f, s, c, u];
      n = F(j, 4), s = n[0], u = n[1], f = n[2], c = n[3], v = J - Y, p = X - L;
    }
  }
  if (h % 360 > 180) {
    var j = [c, f, u, s];
    a = F(j, 4), s = a[0], u = a[1], f = a[2], c = a[3];
  }
  var V = Pn([s, u, f, c]), nt = V.minX, et = V.minY, U = V.maxX, ft = V.maxY;
  return {
    pos1: s,
    pos2: u,
    pos3: f,
    pos4: c,
    width: v,
    height: p,
    minX: nt,
    minY: et,
    maxX: U,
    maxY: ft,
    rotation: e
  };
}
function ph(t, e) {
  var r = e.map(function(n) {
    if (hr(n)) {
      var a = ph(t, n), s = a.length;
      return s > 1 ? a : s === 1 ? a[0] : null;
    } else {
      var u = Xr(t, function(f) {
        var c = f.manager;
        return c.props.target === n;
      });
      return u ? (u.finded = !0, u.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && hr(r[0]) ? r[0] : r;
}
var _w = /* @__PURE__ */ (function(t) {
  ca(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new jp(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
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
    li(!0), this.moveables.forEach(function(mt) {
      mt.updateRect(r, !1, !1);
    });
    var f = this.props, c = this.moveables, v = u.target || f.target, p = c.map(function(mt) {
      return { finded: !1, manager: mt };
    }), h = this.props.targetGroups || [], d = ph(p, h), m = f.useDefaultGroupRotate;
    d.push.apply(d, it([], F(p.filter(function(mt) {
      var Rt = mt.finded;
      return !Rt;
    }).map(function(mt) {
      var Rt = mt.manager;
      return Rt;
    })), !1));
    var _ = [], x = !n || r !== "" && f.updateGroup, y = f.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var b = (s = f.persistData) === null || s === void 0 ? void 0 : s.rotation;
      b != null && (y = b);
    }
    function E(mt, Rt, Wt) {
      var at = mt.map(function(qt) {
        if (hr(qt)) {
          var Pt = E(qt, Rt), tt = [Pt.pos1, Pt.pos2, Pt.pos3, Pt.pos4];
          return _.push(Pt), { poses: tt, rotation: Pt.rotation };
        } else
          return {
            poses: ve(qt.state),
            rotation: qt.getRotation()
          };
      }), gt = at.map(function(qt) {
        var Pt = qt.rotation;
        return Pt;
      }), Yt = 0, xt = gt[0], Ct = gt.every(function(qt) {
        return Math.abs(xt - qt) < 0.1;
      });
      x ? Yt = !m && Ct ? xt : y : Yt = !m && !Wt && Ct ? xt : Rt;
      var It = at.map(function(qt) {
        var Pt = qt.poses;
        return Pt;
      }), zt = mw(It, Yt);
      return zt;
    }
    var R = E(d, this.rotation, !0);
    x && (this.rotation = R.rotation, this.transformOrigin = f.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = h, this.renderGroupRects = _;
    var O = this.transformOrigin, I = this.rotation, w = this.scale, D = R.width, T = R.height, P = R.minX, B = R.minY, H = GE([
      [0, 0],
      [D, 0],
      [0, T],
      [D, T]
    ], Af(O, D, T), this.rotation / 180 * Math.PI), N = Pn(H.result), L = N.minX, Y = N.minY, X = " rotate(".concat(I, "deg)") + " scale(".concat(zr(w[0]), ", ").concat(zr(w[1]), ")"), J = "translate(".concat(-L, "px, ").concat(-Y, "px)").concat(X);
    this.controlBox.style.transform = "translate3d(".concat(P, "px, ").concat(B, "px, ").concat(this.props.translateZ || 0, ")"), v.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(O, ";") + "width:".concat(D, "px;height:").concat(T, "px;") + "transform: ".concat(J), u.width = D, u.height = T;
    var j = this.getContainer(), V = Qu(this.controlBox, v, this.controlBox, this.getContainer(), this._rootContainer || j, []), nt = [V.left, V.top], et = F(ve(V), 4), U = et[0], ft = et[1], pt = et[2], st = et[3], lt = Pn([U, ft, pt, st]), ot = [lt.minX, lt.minY], ct = zr(w[0] * w[1]);
    V.pos1 = bt(U, ot), V.pos2 = bt(ft, ot), V.pos3 = bt(pt, ot), V.pos4 = bt(st, ot), V.left = P - V.left + ot[0], V.top = B - V.top + ot[1], V.origin = bt($t(nt, V.origin), ot), V.beforeOrigin = bt($t(nt, V.beforeOrigin), ot), V.originalBeforeOrigin = $t(nt, V.originalBeforeOrigin), V.transformOrigin = bt($t(nt, V.transformOrigin), ot), v.style.transform = "translate(".concat(-L - ot[0], "px, ").concat(-Y - ot[1], "px)") + X, li(), this.updateState(z(z({}, V), { posDelta: ot, direction: ct, beforeDirection: ct }), a);
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
      return it(it([], F(n), !1), F(f), !1);
    }, []);
    return r;
  }, e.prototype.getMoveables = function() {
    return it([], F(this.moveables), !1);
  }, e.prototype.updateAbles = function() {
    t.prototype.updateAbles.call(this, it(it([], F(this.props.ables), !1), [Ff], !1), "Group");
  }, e.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = Oe(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, a = this._prevDragTarget, s = n.dragTarget || this.areaElement, u = n.targets, f = this.differ.update(u), c = f.added, v = f.changed, p = f.removed, h = c.length || p.length;
    (h || this._prevOriginalDragTarget !== this._originalDragTarget) && (ii(this, !1), ii(this, !0), this.updateState({ gestos: {} })), a !== s && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = fh(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = lh(this, "GroupControl")));
    var d = !Zu(r.container, n.container);
    d && (r.container = n.container), (d || h || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || v.length || u.length && !jd(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!h;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = z(z({}, pi.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
})(pi), xw = /* @__PURE__ */ (function(t) {
  ca(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, a = this.props, s = a.cspNonce, u = a.cssStyled, f = a.persistData, c = a.targets || [], v = c.length, p = this.isUnmounted || !v, h = (n = f?.children) !== null && n !== void 0 ? n : [];
    return p && !v && h.length ? c = h.map(function() {
      return null;
    }) : p || (h = []), be(u, { cspNonce: s, ref: He(this, "controlBox"), className: St("control-box") }, c.map(function(d, m) {
      var _, x, y = (x = (_ = a.individualGroupableProps) === null || _ === void 0 ? void 0 : _.call(a, d, m)) !== null && x !== void 0 ? x : {};
      return be(pi, z({ key: "moveable" + m, ref: xp(r, "moveables", m) }, a, y, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: h[m] }));
    }));
  }, e.prototype.componentDidMount = function() {
  }, e.prototype.componentDidUpdate = function() {
  }, e.prototype.getTargets = function() {
    return this.props.targets;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0), li(!0), this.moveables.forEach(function(s) {
      s.updateRect(r, n, a);
    }), li();
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
    var a = n, s = Xr(this.moveables, function(u) {
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
    return it([], F(this.moveables), !1);
  }, e.prototype.updateRenderPoses = function() {
  }, e.prototype.checkUpdate = function() {
  }, e.prototype.triggerEvent = function() {
  }, e.prototype.updateAbles = function() {
  }, e.prototype._updateEvents = function() {
  }, e.prototype._updateObserver = function() {
  }, e;
})(pi);
function dh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Yr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      hr(n) ? r.push.apply(r, it([], F(dh(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function hh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Yr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      hr(n) ? r.push(hh(n, e)) : r.push(n);
    }
  }), r;
}
function gh(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var a = e[n];
    return !r && !a ? !1 : r != a ? hr(r) && hr(a) ? gh(r, a) : !0 : !1;
  });
}
var yw = /* @__PURE__ */ (function(t) {
  ca(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new jp(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
  }
  return e.makeStyled = function() {
    var r = {}, n = this.getTotalAbles();
    n.forEach(function(s) {
      var u = s.css;
      u && u.forEach(function(f) {
        r[f] = !0;
      });
    });
    var a = Ue(r).join(`
`);
    this.defaultStyled = nd("div", hS(mf, iC + a));
  }, e.getTotalAbles = function() {
    return it([nh, Ff, vh, eh], F(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, s = a.ables, u = a.props, f = qb(a, ["ables", "props"]), c = F(this._updateRefs(!0), 2), v = c[0], p = c[1], h = dh(v, p), d = h.length > 1, m = n.getTotalAbles(), _ = it(it([], F(m), !1), F(s || []), !1), x = z(z(z({}, f), u || {}), { ables: _, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = h;
    var y = null, b = this.moveable, E = f.persistData;
    if (E?.children && (d = !0), f.individualGroupable)
      return be(xw, z({ key: "individual-group", ref: He(this, "moveable") }, x, { target: null, targets: h }));
    if (d) {
      var R = hh(v, p);
      if (b && !b.props.groupable && !b.props.individualGroupable) {
        var O = b.props.target;
        O && h.indexOf(O) > -1 && (y = z({}, b.state));
      }
      return be(_w, z({ key: "group", ref: He(this, "moveable") }, x, (r = f.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: h, targetGroups: R, firstRenderState: y }));
    } else {
      var I = h[0];
      if (b && (b.props.groupable || b.props.individualGroupable)) {
        var w = b.moveables || [], D = Xr(w, function(T) {
          return T.props.target === I;
        });
        D && (y = z({}, D.state));
      }
      return be(pi, z({ key: "single", ref: He(this, "moveable") }, x, { target: I, firstRenderState: y }));
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
    var n = this.refTargets, a = Pf(this.props.target || this.props.targets), s = typeof document < "u", u = gh(n, a), f = this.selectorMap, c = {};
    return this.refTargets.forEach(function v(p) {
      if (Yr(p)) {
        var h = f[p];
        h ? c[p] = f[p] : s && (u = !0, c[p] = [].slice.call(document.querySelectorAll(p)));
      } else hr(p) && p.forEach(v);
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
    var v = F(this._updateRefs(), 3), p = v[0], h = v[1], d = v[2];
    this.refTargets = p, this.selectorMap = h, d && this.forceUpdate();
  }, e.defaultAbles = [], e.customStyledMap = {}, e.defaultStyled = null, Ub([
    gS(fd)
  ], e.prototype, "moveable", void 0), e;
})(zp), Sw = /* @__PURE__ */ (function(t) {
  ca(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = Lf, e;
})(yw), ju = function(t, e) {
  return ju = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, ju(t, e);
};
function Wf(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ju(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var na = function() {
  return na = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, na.apply(this, arguments);
};
function bw(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
var Cw = /* @__PURE__ */ (function(t) {
  Wf(e, t);
  function e(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var r = e.prototype;
  return r.render = function() {
    return be(Sw, na({
      ref: He(this, "moveable")
    }, this.state));
  }, e;
})(ff), zo = gw, mh = fd, _h = hw, Ew = /* @__PURE__ */ (function(t) {
  Wf(e, t);
  function e(n, a) {
    a === void 0 && (a = {});
    var s = t.call(this) || this;
    s.containerProvider = null, s.selfElement = null, s._warp = !1;
    var u = na({}, a), f = {};
    _h.forEach(function(p) {
      f[DS("on ".concat(p))] = function(h) {
        return s.trigger(p, h);
      };
    });
    var c;
    a.warpSelf ? (delete a.warpSelf, s._warp = !0, c = n) : (c = di(n).createElement("div"), n.appendChild(c)), s.containerProvider = wv(be(Cw, na({
      ref: He(s, "innerMoveable")
    }, u, f)), c), s.selfElement = c;
    var v = u.target;
    return hr(v) && v.length > 1 && s.updateRect(), s;
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
    wv(null, a, this.containerProvider), this._warp || (n = a?.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, e = bw([gv(mh, function(n, a) {
    n[a] || (n[a] = function() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      var f = this.getMoveable();
      if (!(!f || !f[a]))
        return f[a].apply(f, s);
    });
  }), gv(zo, function(n, a) {
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
})(Lo), ww = /* @__PURE__ */ (function(t) {
  Wf(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
})(Ew);
const xh = {};
mh.forEach((t) => {
  xh[t] = function(...e) {
    return this.$_moveable[t](...e);
  };
});
const yh = {};
zo.forEach((t) => {
  yh[t] = function(e) {
    this.$_moveable[t] = e;
  };
});
const Dw = tf({
  name: "moveable",
  methods: xh,
  props: zo,
  watch: yh,
  mounted() {
    const t = {}, e = this.$props;
    zo.forEach((s) => {
      const u = e[s];
      ia(u) || (t[s] = e[s]);
    });
    const n = this.$refs.moveableElement, a = new ww(n, {
      ...t,
      warpSelf: !0
    });
    _h.forEach((s) => {
      a.on(s, (u) => {
        this.$emit(s, { ...u });
      });
    }), this.$_moveable = a;
  },
  beforeUnmount() {
    this.$_moveable.destroy();
  }
}), Mw = Dw, Rw = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Tw = { ref: "moveableElement" };
function Ow(t, e, r, n, a, s) {
  return fe(), ye("div", Tw, null, 512);
}
const Iw = /* @__PURE__ */ Rw(Mw, [["render", Ow]]), Pw = { style: { display: "none" } }, Aw = { class: "widget-board" }, Bw = { class: "dropdown-buttons-container" }, zw = { class: "dropdown-buttons-container" }, ki = 24, Gw = 160, Fw = 160, Lw = /* @__PURE__ */ tf({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(t, { emit: e }) {
    const r = Ar(document.documentElement.getAttribute("data-board-snap") !== "off");
    let n = null;
    Eu(() => {
      n = new MutationObserver(() => {
        r.value = document.documentElement.getAttribute("data-board-snap") !== "off";
      }), n.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["data-board-snap"]
      });
    }), pv(() => n?.disconnect());
    const a = e, s = dp();
    iS();
    const u = s.params.pageid || "", f = Ar(), c = Ar(""), v = Ar([]), p = Ar(!1), h = cp("endpointfinder", null);
    an(() => !!h), Ar(!1), Ar(void 0);
    const {
      layoutStore: d,
      widgetStore: m,
      clipboardStore: _,
      ghostPlaceholder: x,
      hidePlaceholder: y,
      getInitialStyle: b,
      getMovableControlStyles: E,
      drag: R,
      resize: O,
      moveUp: I,
      moveDown: w,
      moveToBottom: D,
      moveToTop: T,
      addWidget: P,
      removeWidget: B,
      copyWidget: H,
      pasteWidget: N
    } = mp(u, () => r.value ? ki : 0), L = an(() => m?.widgets || []), Y = an(() => {
      const tt = d?.layout || [];
      if (tt.length === 0) return { width: 0, height: 0 };
      let ut = 0, wt = 0;
      for (const Nt of tt) {
        const Ut = (Nt.x || 0) + (Nt.width || 0), yt = (Nt.y || 0) + (Nt.height || 0);
        Ut > ut && (ut = Ut), yt > wt && (wt = yt);
      }
      return {
        width: ut + Gw,
        height: wt + Fw
      };
    }), X = Ar(null), J = Ar({ x: 0, y: 0, w: 1, h: 1 }), j = Ar(null), V = Ar({ w: 200, h: 140 });
    let nt = null;
    const et = an(() => {
      const tt = X.value, ut = Math.max(Y.value.width, tt?.clientWidth || 1), wt = Math.max(Y.value.height, tt?.clientHeight || 1);
      return Math.min(V.value.w / ut, V.value.h / wt);
    }), U = () => {
      const tt = X.value;
      if (!tt) return;
      const ut = Math.max(Y.value.width, tt.clientWidth), wt = Math.max(Y.value.height, tt.clientHeight);
      J.value = {
        x: tt.scrollLeft / ut,
        y: tt.scrollTop / wt,
        w: tt.clientWidth / ut,
        h: tt.clientHeight / wt
      };
    }, ft = (tt) => {
      const ut = X.value;
      if (!ut) return;
      const Nt = tt.currentTarget.getBoundingClientRect(), Ut = (tt.clientX - Nt.left) / Nt.width, yt = (tt.clientY - Nt.top) / Nt.height, ir = Math.max(Y.value.width, ut.clientWidth), gr = Math.max(Y.value.height, ut.clientHeight);
      ut.scrollLeft = Ut * ir - ut.clientWidth / 2, ut.scrollTop = yt * gr - ut.clientHeight / 2;
    }, pt = an(() => {
      const tt = X.value;
      return tt ? Y.value.width > tt.clientWidth || Y.value.height > tt.clientHeight : !1;
    });
    Eu(() => {
      wu(() => U());
    }), dv(j, (tt) => {
      nt?.disconnect(), tt && (nt = new ResizeObserver(([ut]) => {
        const wt = ut.contentRect;
        wt.width > 0 && wt.height > 0 && (V.value = { w: wt.width, h: wt.height });
      }), nt.observe(tt));
    }), pv(() => nt?.disconnect()), dv(Y, () => wu(() => U()));
    const st = Ar({ x: 0, y: 0 }), lt = (tt) => [
      { id: "front", icon: "flip_to_front", label: "Nach vorn", run: () => I(tt) },
      { id: "back", icon: "flip_to_back", label: "Nach hinten", run: () => w(tt) },
      { id: "top", icon: "vertical_align_top", label: "Ganz vorn", run: () => T(tt) },
      { id: "bottom", icon: "vertical_align_bottom", label: "Ganz hinten", run: () => D(tt) },
      { id: "copy", icon: "content_copy", label: "Kopieren", run: () => ot(tt) }
    ], ot = (tt) => {
      H(tt);
    }, ct = Ar({ visible: !1, x: 0, y: 0 }), mt = (tt) => {
      if (!_.hasClipboard) {
        ct.value.visible = !1;
        return;
      }
      tt.preventDefault();
      const ut = tt.currentTarget.getBoundingClientRect();
      st.value = {
        x: tt.clientX - ut.left,
        y: tt.clientY - ut.top
      }, ct.value = {
        visible: !0,
        x: tt.clientX - ut.left,
        y: tt.clientY - ut.top
      };
    }, Rt = () => {
      ct.value.visible = !1;
    }, Wt = () => {
      N(st.value.x, st.value.y), ct.value.visible = !1;
    }, at = (tt) => r.value ? Math.round(tt / ki) * ki : tt, gt = (tt, ut, wt, Nt) => {
      const Ut = { datasourceId: ut, settings: {} }, yt = gp.cloneDeep(nS), ir = x.value.width, gr = x.value.height, pe = {
        x: at(wt - ir / 2),
        y: at(Nt - gr / 2),
        width: ir,
        height: gr,
        z: 3005
      };
      P(tt, Ut, yt, pe);
    }, Yt = (tt) => {
      a("openSettings", tt);
    };
    an(() => L.value.length === 0 && (d?.layout || []).length === 0);
    const xt = (tt) => {
      B(tt), a("removeWidget", tt);
    };
    an(() => L.value.find((tt) => tt.uid === c.value));
    const Ct = (tt) => {
      const ut = X.value;
      if (!ut) return { x: 0, y: 0 };
      const wt = ut.getBoundingClientRect();
      return {
        x: tt.clientX - wt.left + ut.scrollLeft,
        y: tt.clientY - wt.top + ut.scrollTop
      };
    }, It = (tt) => {
      y();
      const ut = Ct(tt);
      f.value = { dropX: ut.x, dropY: ut.y };
    }, zt = (tt) => {
      if (tt.dataTransfer?.types.includes("text/plain")) {
        tt.preventDefault(), p.value = !0;
        const ut = Ct(tt);
        x.value.x = at(ut.x - x.value.width / 2), x.value.y = at(ut.y - x.value.height / 2), x.value.visible = !0;
      }
    }, qt = (tt) => {
      tt.dataTransfer?.types.includes("text/plain") && (p.value = !1, y());
    }, Pt = (tt) => {
      console.log(tt);
      const ut = "test", wt = tt.added?.element?.type || "default", Nt = f.value?.dropX ?? x.value.x + x.value.width / 2, Ut = f.value?.dropY ?? x.value.y + x.value.height / 2;
      gt(wt, ut, Nt, Ut);
    };
    return (tt, ut) => {
      const wt = uu("va-button"), Nt = uu("va-dropdown-content"), Ut = uu("va-dropdown");
      return fe(), ye("div", {
        class: "report-container",
        onContextmenu: mt,
        onClick: Rt
      }, [
        xe("div", {
          class: "scroll-viewport",
          ref_key: "scrollContainer",
          ref: X,
          onScroll: U
        }, [
          xe("div", {
            class: "canvas dottet",
            style: on({
              minWidth: Y.value.width > 0 ? `max(100%, ${Y.value.width}px)` : void 0,
              minHeight: Y.value.height > 0 ? `max(100%, ${Y.value.height}px)` : void 0
            }),
            onDrop: It,
            onDragover: zt,
            onDragleave: qt
          }, [
            ue(fr(oS), {
              list: v.value,
              group: { name: "widgets" },
              "ghost-class": "ghost",
              itemKey: "type",
              style: { position: "absolute", top: "0", left: "0", height: "100%", width: "100%" },
              onChange: Pt,
              onDrop: It,
              onDragover: zt,
              onDragleave: qt,
              onContextmenu: mt
            }, {
              item: _e(({ element: yt }) => [
                xe("div", Pw, Qy(yt?.type || ""), 1)
              ]),
              _: 1
            }, 8, ["list"]),
            xe("div", Aw, [
              fr(x).visible ? (fe(), ye("div", {
                key: 0,
                class: "ghost-placeholder",
                style: on({
                  left: `${fr(x).x}px`,
                  top: `${fr(x).y}px`,
                  width: `${fr(x).width}px`,
                  height: `${fr(x).height}px`
                })
              }, null, 4)) : fu("", !0),
              (fe(!0), ye(yo, null, Du(L.value, (yt) => (fe(), ye(yo, {
                key: yt.uid
              }, [
                xe("div", {
                  class: vp(`${yt.uid} dashboard-item-container`),
                  style: on(fr(b)(yt.uid)),
                  ref_for: !0,
                  ref: yt.uid
                }, [
                  ue(Ut, {
                    trigger: "right-click",
                    "auto-placement": !1,
                    placement: "right-start",
                    cursor: ""
                  }, {
                    anchor: _e(() => [
                      xe("div", {
                        class: "dashboard-item",
                        onContextmenu: ut[0] || (ut[0] = jy(() => {
                        }, ["stop"]))
                      }, [
                        ue(fr(pp), {
                          widget: yt,
                          ref_for: !0,
                          ref: `${yt.uid}_wrapper`,
                          "extra-actions": lt(yt.uid),
                          onOpenSettings: Yt,
                          editEnabled: "",
                          onRemoveWidget: xt
                        }, null, 8, ["widget", "extra-actions"])
                      ], 32)
                    ]),
                    default: _e(() => [
                      ue(Nt, null, {
                        default: _e(() => [
                          xe("div", Bw, [
                            ue(wt, {
                              onClick: (ir) => fr(I)(yt.uid)
                            }, {
                              default: _e(() => [...ut[1] || (ut[1] = [
                                Qn(" Move up ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            ue(wt, {
                              onClick: (ir) => fr(w)(yt.uid)
                            }, {
                              default: _e(() => [...ut[2] || (ut[2] = [
                                Qn(" Move down ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            ue(wt, {
                              onClick: (ir) => fr(T)(yt.uid)
                            }, {
                              default: _e(() => [...ut[3] || (ut[3] = [
                                Qn(" Move to top ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            ue(wt, {
                              onClick: (ir) => fr(D)(yt.uid)
                            }, {
                              default: _e(() => [...ut[4] || (ut[4] = [
                                Qn(" Move to bottom ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            ue(wt, {
                              onClick: (ir) => ot(yt.uid)
                            }, {
                              default: _e(() => [...ut[5] || (ut[5] = [
                                Qn(" Copy ", -1)
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
                ], 6),
                ue(fr(Iw), {
                  target: [`.${yt.uid}`],
                  draggable: !0,
                  resizable: !0,
                  useResizeObserver: !0,
                  useMutationObserver: !0,
                  onDrag: (ir) => fr(R)(yt.uid, ir),
                  onResize: (ir) => fr(O)(yt.uid, ir),
                  snappable: r.value,
                  snapGridWidth: ki,
                  snapGridHeight: ki,
                  origin: !1,
                  ref_for: !0,
                  ref: `${yt.uid}_control`,
                  style: on(fr(E)(yt.uid))
                }, null, 8, ["target", "onDrag", "onResize", "snappable", "style"])
              ], 64))), 128)),
              ct.value.visible && fr(_).hasClipboard ? (fe(), ye("div", {
                key: 1,
                class: "canvas-context-menu",
                style: on({ left: ct.value.x + "px", top: ct.value.y + "px" })
              }, [
                xe("div", zw, [
                  ue(wt, {
                    onClick: Wt,
                    size: "small"
                  }, {
                    default: _e(() => [...ut[6] || (ut[6] = [
                      Qn(" Paste ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 4)) : fu("", !0)
            ])
          ], 36)
        ], 544),
        pt.value ? (fe(), Jy(fr(sS), {
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
          default: _e(() => [
            xe("div", {
              ref_key: "minimapBox",
              ref: j,
              class: "minimap-canvas",
              onClick: ft
            }, [
              (fe(!0), ye(yo, null, Du(fr(d)?.layout || [], (yt) => (fe(), ye("div", {
                key: yt.id,
                class: "minimap-widget",
                style: on({
                  left: yt.x * et.value + "px",
                  top: yt.y * et.value + "px",
                  width: yt.width * et.value + "px",
                  height: yt.height * et.value + "px"
                })
              }, null, 4))), 128)),
              xe("div", {
                class: "minimap-viewport",
                style: on({
                  left: J.value.x * 100 + "%",
                  top: J.value.y * 100 + "%",
                  width: J.value.w * 100 + "%",
                  height: J.value.h * 100 + "%"
                })
              }, null, 4)
            ], 512)
          ]),
          _: 1
        })) : fu("", !0)
      ], 32);
    };
  }
}), Ww = /* @__PURE__ */ _p(Lw, [["__scopeId", "data-v-2b5c0415"]]), Sh = "org.eclipse.daanse.board.app.ui.vue.layouts.base";
function bh({ services: t }) {
  t.getRequired(lp).addLayout({
    id: Sh,
    name: "BaseLayout",
    description: "pixelbased Layout",
    component: pS,
    editor: Ww
  });
}
function Ch({ services: t }) {
  t.getRequired(lp).removeLayout(Sh);
}
const Nw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: bh,
  deactivate: Ch,
  useClipboardStore: hp
}, Symbol.toStringTag, { value: "Module" })), fp = "org.eclipse.daanse.board.app.ui.vue.layouts.base", kw = "0.0.1-next.1";
async function Jw(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${fp}: tsm runtime is not initialized`);
  e.register(fp, Nw, kw, "ui.vue.layouts.base"), await bh?.(t);
}
async function Qw(t) {
  await Ch?.(t);
}
export {
  Jw as activate,
  Qw as deactivate,
  hp as useClipboardStore
};
