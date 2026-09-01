(function(){var i="ui.vue.layouts.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".dottet[data-v-6934652c]{background:var(--color-canvas);background-image:radial-gradient(var(--color-divider) 1px,transparent 0);background-size:40px 40px;background-position:-19px -19px}.ghost-placeholder[data-v-6934652c]{position:absolute;background-color:#0000001a;border-radius:5px;border:2px dashed var(--color-outline);z-index:100000;pointer-events:none}.report-container[data-v-6934652c]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;width:100%;height:100%;position:relative}.report-container__title[data-v-6934652c]{width:100%;padding:16px;border-bottom:1px dashed var(--color-divider)}.report-container .widgets-adding-controls[data-v-6934652c]{display:flex;border:1px solid var(--color-divider);border-radius:8px;margin:16px}.widget-board[data-v-6934652c]{width:100%;height:100%;display:flex;box-sizing:border-box;overflow:auto}.report-container .add-btn[data-v-6934652c]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-6934652c]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-6934652c]{position:absolute}.dropdown-buttons-container[data-v-6934652c]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.va-dropdown__content[data-v-6934652c]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-6934652c]{z-index:20000000!important}.add_widget-button[data-v-6934652c]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.v-enter-active[data-v-6934652c],.v-leave-active[data-v-6934652c]{transition:opacity .5s ease}.v-enter-from[data-v-6934652c],.v-leave-to[data-v-6934652c]{opacity:0}.ghost{display:none}.report-container[data-v-199415e3]{width:100%;height:100%;position:relative}.scroll-viewport[data-v-199415e3]{width:100%;height:100%;overflow:auto}.canvas[data-v-199415e3]{position:relative;min-width:100%;min-height:100%;box-sizing:border-box}.dottet[data-v-199415e3]{background:var(--color-canvas, #dee1e7);background-image:radial-gradient(var(--color-divider, #ccd1d9) 1px,transparent 0);background-size:24px 24px;background-position:-12px -12px;background-repeat:repeat}.ghost-placeholder[data-v-199415e3]{position:absolute;background-color:color-mix(in srgb,var(--color-accent, #2f5fbd) 10%,transparent);border-radius:var(--radius-sm, 5px);border:2px dashed var(--color-outline, #b9bec9);z-index:1000000;pointer-events:none}.widget-board[data-v-199415e3]{position:absolute;top:0;left:0;width:100%;height:100%}.minimap-canvas[data-v-199415e3]{position:relative;width:100%;height:100%;cursor:pointer}.minimap-widget[data-v-199415e3]{position:absolute;background:color-mix(in srgb,var(--color-accent, #2f5fbd) 30%,transparent);border:1px solid color-mix(in srgb,var(--color-accent, #2f5fbd) 55%,transparent);border-radius:1px}.minimap-viewport[data-v-199415e3]{position:absolute;border:2px solid var(--color-err, #b02a1c);background:color-mix(in srgb,var(--color-err, #b02a1c) 8%,transparent);border-radius:2px;pointer-events:none}.report-container .add-btn[data-v-199415e3]{margin:0 16px 16px 0;align-self:self-end}.dashboard-item[data-v-199415e3]{position:absolute;width:100%;height:100%}.dashboard-item-container[data-v-199415e3]{position:absolute}.widget-board-dropdown[data-v-199415e3]{width:100%;height:100%}.dropdown-buttons-container[data-v-199415e3]{display:flex;flex-direction:column;gap:.5rem;z-index:99999}.canvas-context-menu[data-v-199415e3]{position:absolute;background:var(--color-raised, #ffffff);border:1px solid var(--color-divider, #ccd1d9);border-radius:var(--radius-sm, 5px);padding:8px;box-shadow:var(--shadow-e2, 0 2px 8px rgba(25, 30, 45, .14));color:var(--color-fg, #22252b);z-index:10000001}.va-dropdown__content[data-v-199415e3]{z-index:10000000!important}.va-dropdown__content.va-select-dropdown__content.va-dropdown__content-wrapper[data-v-199415e3]{z-index:20000000!important}.add_widget-button[data-v-199415e3]{position:absolute;display:flex;flex-direction:row;gap:10px;right:30px;bottom:20px}.pages_board[data-v-199415e3]{position:absolute;display:flex;flex-direction:column;gap:10px;left:80px;bottom:20px}.v-enter-active[data-v-199415e3],.v-leave-active[data-v-199415e3]{transition:opacity .5s ease}.v-enter-from[data-v-199415e3],.v-leave-to[data-v-199415e3]{opacity:0}.bounce-enter-active[data-v-199415e3]{animation:bounce-in-199415e3 .5s}.bounce-leave-active[data-v-199415e3]{animation:bounce-in-199415e3 .5s reverse}@keyframes bounce-in-199415e3{0%{transform:scaleY(0%) translateY(100%);opacity:0}to{transform:scaleY(1) translateY(0);opacity:1}}\n";})();
import { LAYOUT_REPOSITORY as sp } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { ref as Nr, computed as an, defineComponent as Qu, inject as up, onMounted as fp, nextTick as Cu, createElementBlock as _e, openBlock as ue, Fragment as xo, renderList as Eu, unref as ur, normalizeStyle as on, normalizeClass as lp, createElementVNode as me, createVNode as se, watch as cv, onUnmounted as Ky, resolveComponent as su, createBlock as Zy, createCommentVNode as uu, withCtx as ge, toDisplayString as Jy, createTextVNode as Qn, withModifiers as Qy } from "vue";
import { useLayoutStore as jy } from "org.eclipse.daanse.board.app.ui.vue.stores.layout";
import { useWidgetsStore as tS } from "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
import { defineStore as rS } from "pinia";
import { WidgetWrapper as cp, defaultConfig as eS } from "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
import { useRoute as vp, useRouter as nS } from "vue-router";
import aS from "vuedraggable";
import { DFloatingWindow as oS } from "org.eclipse.daanse.board.app.ui.vue.controls";
const { identifiers: iS } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), pp = rS("widget-clipboard", () => {
  const t = Nr(null), e = an(() => t.value !== null);
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
var no = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var sS = ki.exports, vv;
function uS() {
  return vv || (vv = 1, (function(t, e) {
    (function() {
      var r, n = "4.17.21", a = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", u = "Expected a function", f = "Invalid `variable` option passed into `_.template`", c = "__lodash_hash_undefined__", v = 500, p = "__lodash_placeholder__", h = 1, d = 2, m = 4, _ = 1, x = 2, y = 1, b = 2, E = 4, T = 8, M = 16, D = 32, w = 64, O = 128, I = 256, P = 512, B = 30, H = "...", W = 800, L = 16, Y = 1, X = 2, Q = 3, j = 1 / 0, V = 9007199254740991, et = 17976931348623157e292, nt = NaN, U = 4294967295, lt = U - 1, vt = U >>> 1, ut = [
        ["ary", O],
        ["bind", y],
        ["bindKey", b],
        ["curry", T],
        ["curryRight", M],
        ["flip", P],
        ["partial", D],
        ["partialRight", w],
        ["rearg", I]
      ], st = "[object Arguments]", at = "[object Array]", dt = "[object AsyncFunction]", _t = "[object Boolean]", Tt = "[object Date]", Wt = "[object DOMException]", ot = "[object Error]", gt = "[object Function]", kt = "[object GeneratorFunction]", yt = "[object Map]", Et = "[object Number]", At = "[object Null]", rt = "[object Object]", ft = "[object Promise]", pt = "[object Proxy]", wt = "[object RegExp]", zt = "[object Set]", Ct = "[object String]", Yt = "[object Symbol]", Qt = "[object Undefined]", jt = "[object WeakMap]", Ee = "[object WeakSet]", zr = "[object ArrayBuffer]", Pe = "[object DataView]", Gn = "[object Float32Array]", xi = "[object Float64Array]", $e = "[object Int8Array]", dn = "[object Int16Array]", yi = "[object Int32Array]", Fn = "[object Uint8Array]", hn = "[object Uint8ClampedArray]", Si = "[object Uint16Array]", bi = "[object Uint32Array]", $o = /\b__p \+= '';/g, Ci = /\b(__p \+=) '' \+/g, Kt = /(__e\(.*?\)|\b__t\)) \+\n'';/g, yr = /&(?:amp|lt|gt|quot|#39);/g, Ei = /[&<>"']/g, da = RegExp(yr.source), Vo = RegExp(Ei.source), wi = /<%-([\s\S]+?)%>/g, bh = /<%([\s\S]+?)%>/g, Lf = /<%=([\s\S]+?)%>/g, Ch = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Eh = /^\w*$/, wh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ko = /[\\^$.*+?()[\]{}|]/g, Dh = RegExp(Ko.source), Zo = /^\s+/, Mh = /\s/, Rh = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Th = /\{\n\/\* \[wrapped with (.+)\] \*/, Oh = /,? & /, Ih = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ph = /[()=,{}\[\]\/\s]/, Ah = /\\(\\)?/g, Bh = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Wf = /\w*$/, zh = /^[-+]0x[0-9a-f]+$/i, Gh = /^0b[01]+$/i, Fh = /^\[object .+?Constructor\]$/, Lh = /^0o[0-7]+$/i, Wh = /^(?:0|[1-9]\d*)$/, Nh = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ha = /($^)/, kh = /['\n\r\u2028\u2029\\]/g, ga = "\\ud800-\\udfff", Hh = "\\u0300-\\u036f", Yh = "\\ufe20-\\ufe2f", Xh = "\\u20d0-\\u20ff", Nf = Hh + Yh + Xh, kf = "\\u2700-\\u27bf", Hf = "a-z\\xdf-\\xf6\\xf8-\\xff", qh = "\\xac\\xb1\\xd7\\xf7", Uh = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", $h = "\\u2000-\\u206f", Vh = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Yf = "A-Z\\xc0-\\xd6\\xd8-\\xde", Xf = "\\ufe0e\\ufe0f", qf = qh + Uh + $h + Vh, Jo = "['’]", Kh = "[" + ga + "]", Uf = "[" + qf + "]", ma = "[" + Nf + "]", $f = "\\d+", Zh = "[" + kf + "]", Vf = "[" + Hf + "]", Kf = "[^" + ga + qf + $f + kf + Hf + Yf + "]", Qo = "\\ud83c[\\udffb-\\udfff]", Jh = "(?:" + ma + "|" + Qo + ")", Zf = "[^" + ga + "]", jo = "(?:\\ud83c[\\udde6-\\uddff]){2}", ts = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ln = "[" + Yf + "]", Jf = "\\u200d", Qf = "(?:" + Vf + "|" + Kf + ")", Qh = "(?:" + Ln + "|" + Kf + ")", jf = "(?:" + Jo + "(?:d|ll|m|re|s|t|ve))?", tl = "(?:" + Jo + "(?:D|LL|M|RE|S|T|VE))?", rl = Jh + "?", el = "[" + Xf + "]?", jh = "(?:" + Jf + "(?:" + [Zf, jo, ts].join("|") + ")" + el + rl + ")*", tg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", nl = el + rl + jh, eg = "(?:" + [Zh, jo, ts].join("|") + ")" + nl, ng = "(?:" + [Zf + ma + "?", ma, jo, ts, Kh].join("|") + ")", ig = RegExp(Jo, "g"), ag = RegExp(ma, "g"), rs = RegExp(Qo + "(?=" + Qo + ")|" + ng + nl, "g"), og = RegExp([
        Ln + "?" + Vf + "+" + jf + "(?=" + [Uf, Ln, "$"].join("|") + ")",
        Qh + "+" + tl + "(?=" + [Uf, Ln + Qf, "$"].join("|") + ")",
        Ln + "?" + Qf + "+" + jf,
        Ln + "+" + tl,
        rg,
        tg,
        $f,
        eg
      ].join("|"), "g"), sg = RegExp("[" + Jf + ga + Nf + Xf + "]"), ug = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, fg = [
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
      ], lg = -1, er = {};
      er[Gn] = er[xi] = er[$e] = er[dn] = er[yi] = er[Fn] = er[hn] = er[Si] = er[bi] = !0, er[st] = er[at] = er[zr] = er[_t] = er[Pe] = er[Tt] = er[ot] = er[gt] = er[yt] = er[Et] = er[rt] = er[wt] = er[zt] = er[Ct] = er[jt] = !1;
      var rr = {};
      rr[st] = rr[at] = rr[zr] = rr[Pe] = rr[_t] = rr[Tt] = rr[Gn] = rr[xi] = rr[$e] = rr[dn] = rr[yi] = rr[yt] = rr[Et] = rr[rt] = rr[wt] = rr[zt] = rr[Ct] = rr[Yt] = rr[Fn] = rr[hn] = rr[Si] = rr[bi] = !0, rr[ot] = rr[gt] = rr[jt] = !1;
      var cg = {
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
      }, vg = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, pg = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, dg = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, hg = parseFloat, gg = parseInt, il = typeof no == "object" && no && no.Object === Object && no, mg = typeof self == "object" && self && self.Object === Object && self, br = il || mg || Function("return this")(), es = e && !e.nodeType && e, gn = es && !0 && t && !t.nodeType && t, al = gn && gn.exports === es, ns = al && il.process, Qr = (function() {
        try {
          var N = gn && gn.require && gn.require("util").types;
          return N || ns && ns.binding && ns.binding("util");
        } catch {
        }
      })(), ol = Qr && Qr.isArrayBuffer, sl = Qr && Qr.isDate, ul = Qr && Qr.isMap, fl = Qr && Qr.isRegExp, ll = Qr && Qr.isSet, cl = Qr && Qr.isTypedArray;
      function qr(N, $, q) {
        switch (q.length) {
          case 0:
            return N.call($);
          case 1:
            return N.call($, q[0]);
          case 2:
            return N.call($, q[0], q[1]);
          case 3:
            return N.call($, q[0], q[1], q[2]);
        }
        return N.apply($, q);
      }
      function _g(N, $, q, mt) {
        for (var It = -1, Ut = N == null ? 0 : N.length; ++It < Ut; ) {
          var hr = N[It];
          $(mt, hr, q(hr), N);
        }
        return mt;
      }
      function jr(N, $) {
        for (var q = -1, mt = N == null ? 0 : N.length; ++q < mt && $(N[q], q, N) !== !1; )
          ;
        return N;
      }
      function xg(N, $) {
        for (var q = N == null ? 0 : N.length; q-- && $(N[q], q, N) !== !1; )
          ;
        return N;
      }
      function vl(N, $) {
        for (var q = -1, mt = N == null ? 0 : N.length; ++q < mt; )
          if (!$(N[q], q, N))
            return !1;
        return !0;
      }
      function Ve(N, $) {
        for (var q = -1, mt = N == null ? 0 : N.length, It = 0, Ut = []; ++q < mt; ) {
          var hr = N[q];
          $(hr, q, N) && (Ut[It++] = hr);
        }
        return Ut;
      }
      function _a(N, $) {
        var q = N == null ? 0 : N.length;
        return !!q && Wn(N, $, 0) > -1;
      }
      function is(N, $, q) {
        for (var mt = -1, It = N == null ? 0 : N.length; ++mt < It; )
          if (q($, N[mt]))
            return !0;
        return !1;
      }
      function ir(N, $) {
        for (var q = -1, mt = N == null ? 0 : N.length, It = Array(mt); ++q < mt; )
          It[q] = $(N[q], q, N);
        return It;
      }
      function Ke(N, $) {
        for (var q = -1, mt = $.length, It = N.length; ++q < mt; )
          N[It + q] = $[q];
        return N;
      }
      function as(N, $, q, mt) {
        var It = -1, Ut = N == null ? 0 : N.length;
        for (mt && Ut && (q = N[++It]); ++It < Ut; )
          q = $(q, N[It], It, N);
        return q;
      }
      function yg(N, $, q, mt) {
        var It = N == null ? 0 : N.length;
        for (mt && It && (q = N[--It]); It--; )
          q = $(q, N[It], It, N);
        return q;
      }
      function os(N, $) {
        for (var q = -1, mt = N == null ? 0 : N.length; ++q < mt; )
          if ($(N[q], q, N))
            return !0;
        return !1;
      }
      var Sg = ss("length");
      function bg(N) {
        return N.split("");
      }
      function Cg(N) {
        return N.match(Ih) || [];
      }
      function pl(N, $, q) {
        var mt;
        return q(N, function(It, Ut, hr) {
          if ($(It, Ut, hr))
            return mt = Ut, !1;
        }), mt;
      }
      function xa(N, $, q, mt) {
        for (var It = N.length, Ut = q + (mt ? 1 : -1); mt ? Ut-- : ++Ut < It; )
          if ($(N[Ut], Ut, N))
            return Ut;
        return -1;
      }
      function Wn(N, $, q) {
        return $ === $ ? zg(N, $, q) : xa(N, dl, q);
      }
      function Eg(N, $, q, mt) {
        for (var It = q - 1, Ut = N.length; ++It < Ut; )
          if (mt(N[It], $))
            return It;
        return -1;
      }
      function dl(N) {
        return N !== N;
      }
      function hl(N, $) {
        var q = N == null ? 0 : N.length;
        return q ? fs(N, $) / q : nt;
      }
      function ss(N) {
        return function($) {
          return $ == null ? r : $[N];
        };
      }
      function us(N) {
        return function($) {
          return N == null ? r : N[$];
        };
      }
      function gl(N, $, q, mt, It) {
        return It(N, function(Ut, hr, tr) {
          q = mt ? (mt = !1, Ut) : $(q, Ut, hr, tr);
        }), q;
      }
      function wg(N, $) {
        var q = N.length;
        for (N.sort($); q--; )
          N[q] = N[q].value;
        return N;
      }
      function fs(N, $) {
        for (var q, mt = -1, It = N.length; ++mt < It; ) {
          var Ut = $(N[mt]);
          Ut !== r && (q = q === r ? Ut : q + Ut);
        }
        return q;
      }
      function ls(N, $) {
        for (var q = -1, mt = Array(N); ++q < N; )
          mt[q] = $(q);
        return mt;
      }
      function Dg(N, $) {
        return ir($, function(q) {
          return [q, N[q]];
        });
      }
      function ml(N) {
        return N && N.slice(0, Sl(N) + 1).replace(Zo, "");
      }
      function Ur(N) {
        return function($) {
          return N($);
        };
      }
      function cs(N, $) {
        return ir($, function(q) {
          return N[q];
        });
      }
      function Di(N, $) {
        return N.has($);
      }
      function _l(N, $) {
        for (var q = -1, mt = N.length; ++q < mt && Wn($, N[q], 0) > -1; )
          ;
        return q;
      }
      function xl(N, $) {
        for (var q = N.length; q-- && Wn($, N[q], 0) > -1; )
          ;
        return q;
      }
      function Mg(N, $) {
        for (var q = N.length, mt = 0; q--; )
          N[q] === $ && ++mt;
        return mt;
      }
      var Rg = us(cg), Tg = us(vg);
      function Og(N) {
        return "\\" + dg[N];
      }
      function Ig(N, $) {
        return N == null ? r : N[$];
      }
      function Nn(N) {
        return sg.test(N);
      }
      function Pg(N) {
        return ug.test(N);
      }
      function Ag(N) {
        for (var $, q = []; !($ = N.next()).done; )
          q.push($.value);
        return q;
      }
      function vs(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(mt, It) {
          q[++$] = [It, mt];
        }), q;
      }
      function yl(N, $) {
        return function(q) {
          return N($(q));
        };
      }
      function Ze(N, $) {
        for (var q = -1, mt = N.length, It = 0, Ut = []; ++q < mt; ) {
          var hr = N[q];
          (hr === $ || hr === p) && (N[q] = p, Ut[It++] = q);
        }
        return Ut;
      }
      function ya(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(mt) {
          q[++$] = mt;
        }), q;
      }
      function Bg(N) {
        var $ = -1, q = Array(N.size);
        return N.forEach(function(mt) {
          q[++$] = [mt, mt];
        }), q;
      }
      function zg(N, $, q) {
        for (var mt = q - 1, It = N.length; ++mt < It; )
          if (N[mt] === $)
            return mt;
        return -1;
      }
      function Gg(N, $, q) {
        for (var mt = q + 1; mt--; )
          if (N[mt] === $)
            return mt;
        return mt;
      }
      function kn(N) {
        return Nn(N) ? Lg(N) : Sg(N);
      }
      function ve(N) {
        return Nn(N) ? Wg(N) : bg(N);
      }
      function Sl(N) {
        for (var $ = N.length; $-- && Mh.test(N.charAt($)); )
          ;
        return $;
      }
      var Fg = us(pg);
      function Lg(N) {
        for (var $ = rs.lastIndex = 0; rs.test(N); )
          ++$;
        return $;
      }
      function Wg(N) {
        return N.match(rs) || [];
      }
      function Ng(N) {
        return N.match(og) || [];
      }
      var kg = (function N($) {
        $ = $ == null ? br : Hn.defaults(br.Object(), $, Hn.pick(br, fg));
        var q = $.Array, mt = $.Date, It = $.Error, Ut = $.Function, hr = $.Math, tr = $.Object, ps = $.RegExp, Hg = $.String, te = $.TypeError, Sa = q.prototype, Yg = Ut.prototype, Yn = tr.prototype, ba = $["__core-js_shared__"], Ca = Yg.toString, Vt = Yn.hasOwnProperty, Xg = 0, bl = (function() {
          var i = /[^.]+$/.exec(ba && ba.keys && ba.keys.IE_PROTO || "");
          return i ? "Symbol(src)_1." + i : "";
        })(), Ea = Yn.toString, qg = Ca.call(tr), Ug = br._, $g = ps(
          "^" + Ca.call(Vt).replace(Ko, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), wa = al ? $.Buffer : r, Je = $.Symbol, Da = $.Uint8Array, Cl = wa ? wa.allocUnsafe : r, Ma = yl(tr.getPrototypeOf, tr), El = tr.create, wl = Yn.propertyIsEnumerable, Ra = Sa.splice, Dl = Je ? Je.isConcatSpreadable : r, Mi = Je ? Je.iterator : r, mn = Je ? Je.toStringTag : r, Ta = (function() {
          try {
            var i = bn(tr, "defineProperty");
            return i({}, "", {}), i;
          } catch {
          }
        })(), Vg = $.clearTimeout !== br.clearTimeout && $.clearTimeout, Kg = mt && mt.now !== br.Date.now && mt.now, Zg = $.setTimeout !== br.setTimeout && $.setTimeout, Oa = hr.ceil, Ia = hr.floor, ds = tr.getOwnPropertySymbols, Jg = wa ? wa.isBuffer : r, Ml = $.isFinite, Qg = Sa.join, jg = yl(tr.keys, tr), gr = hr.max, wr = hr.min, t0 = mt.now, r0 = $.parseInt, Rl = hr.random, e0 = Sa.reverse, hs = bn($, "DataView"), Ri = bn($, "Map"), gs = bn($, "Promise"), Xn = bn($, "Set"), Ti = bn($, "WeakMap"), Oi = bn(tr, "create"), Pa = Ti && new Ti(), qn = {}, n0 = Cn(hs), i0 = Cn(Ri), a0 = Cn(gs), o0 = Cn(Xn), s0 = Cn(Ti), Aa = Je ? Je.prototype : r, Ii = Aa ? Aa.valueOf : r, Tl = Aa ? Aa.toString : r;
        function C(i) {
          if (sr(i) && !Pt(i) && !(i instanceof Ht)) {
            if (i instanceof re)
              return i;
            if (Vt.call(i, "__wrapped__"))
              return Oc(i);
          }
          return new re(i);
        }
        var Un = /* @__PURE__ */ (function() {
          function i() {
          }
          return function(o) {
            if (!ar(o))
              return {};
            if (El)
              return El(o);
            i.prototype = o;
            var l = new i();
            return i.prototype = r, l;
          };
        })();
        function Ba() {
        }
        function re(i, o) {
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
          evaluate: bh,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Lf,
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
        }, C.prototype = Ba.prototype, C.prototype.constructor = C, re.prototype = Un(Ba.prototype), re.prototype.constructor = re;
        function Ht(i) {
          this.__wrapped__ = i, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = U, this.__views__ = [];
        }
        function u0() {
          var i = new Ht(this.__wrapped__);
          return i.__actions__ = Gr(this.__actions__), i.__dir__ = this.__dir__, i.__filtered__ = this.__filtered__, i.__iteratees__ = Gr(this.__iteratees__), i.__takeCount__ = this.__takeCount__, i.__views__ = Gr(this.__views__), i;
        }
        function f0() {
          if (this.__filtered__) {
            var i = new Ht(this);
            i.__dir__ = -1, i.__filtered__ = !0;
          } else
            i = this.clone(), i.__dir__ *= -1;
          return i;
        }
        function l0() {
          var i = this.__wrapped__.value(), o = this.__dir__, l = Pt(i), g = o < 0, S = l ? i.length : 0, R = b1(0, S, this.__views__), A = R.start, G = R.end, k = G - A, K = g ? G : A - 1, Z = this.__iteratees__, tt = Z.length, ct = 0, xt = wr(k, this.__takeCount__);
          if (!l || !g && S == k && xt == k)
            return jl(i, this.__actions__);
          var Mt = [];
          t:
            for (; k-- && ct < xt; ) {
              K += o;
              for (var Ft = -1, Rt = i[K]; ++Ft < tt; ) {
                var Nt = Z[Ft], Xt = Nt.iteratee, Kr = Nt.type, Or = Xt(Rt);
                if (Kr == X)
                  Rt = Or;
                else if (!Or) {
                  if (Kr == Y)
                    continue t;
                  break t;
                }
              }
              Mt[ct++] = Rt;
            }
          return Mt;
        }
        Ht.prototype = Un(Ba.prototype), Ht.prototype.constructor = Ht;
        function _n(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function c0() {
          this.__data__ = Oi ? Oi(null) : {}, this.size = 0;
        }
        function v0(i) {
          var o = this.has(i) && delete this.__data__[i];
          return this.size -= o ? 1 : 0, o;
        }
        function p0(i) {
          var o = this.__data__;
          if (Oi) {
            var l = o[i];
            return l === c ? r : l;
          }
          return Vt.call(o, i) ? o[i] : r;
        }
        function d0(i) {
          var o = this.__data__;
          return Oi ? o[i] !== r : Vt.call(o, i);
        }
        function h0(i, o) {
          var l = this.__data__;
          return this.size += this.has(i) ? 0 : 1, l[i] = Oi && o === r ? c : o, this;
        }
        _n.prototype.clear = c0, _n.prototype.delete = v0, _n.prototype.get = p0, _n.prototype.has = d0, _n.prototype.set = h0;
        function Ae(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function g0() {
          this.__data__ = [], this.size = 0;
        }
        function m0(i) {
          var o = this.__data__, l = za(o, i);
          if (l < 0)
            return !1;
          var g = o.length - 1;
          return l == g ? o.pop() : Ra.call(o, l, 1), --this.size, !0;
        }
        function _0(i) {
          var o = this.__data__, l = za(o, i);
          return l < 0 ? r : o[l][1];
        }
        function x0(i) {
          return za(this.__data__, i) > -1;
        }
        function y0(i, o) {
          var l = this.__data__, g = za(l, i);
          return g < 0 ? (++this.size, l.push([i, o])) : l[g][1] = o, this;
        }
        Ae.prototype.clear = g0, Ae.prototype.delete = m0, Ae.prototype.get = _0, Ae.prototype.has = x0, Ae.prototype.set = y0;
        function Be(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.clear(); ++o < l; ) {
            var g = i[o];
            this.set(g[0], g[1]);
          }
        }
        function S0() {
          this.size = 0, this.__data__ = {
            hash: new _n(),
            map: new (Ri || Ae)(),
            string: new _n()
          };
        }
        function b0(i) {
          var o = $a(this, i).delete(i);
          return this.size -= o ? 1 : 0, o;
        }
        function C0(i) {
          return $a(this, i).get(i);
        }
        function E0(i) {
          return $a(this, i).has(i);
        }
        function w0(i, o) {
          var l = $a(this, i), g = l.size;
          return l.set(i, o), this.size += l.size == g ? 0 : 1, this;
        }
        Be.prototype.clear = S0, Be.prototype.delete = b0, Be.prototype.get = C0, Be.prototype.has = E0, Be.prototype.set = w0;
        function xn(i) {
          var o = -1, l = i == null ? 0 : i.length;
          for (this.__data__ = new Be(); ++o < l; )
            this.add(i[o]);
        }
        function D0(i) {
          return this.__data__.set(i, c), this;
        }
        function M0(i) {
          return this.__data__.has(i);
        }
        xn.prototype.add = xn.prototype.push = D0, xn.prototype.has = M0;
        function pe(i) {
          var o = this.__data__ = new Ae(i);
          this.size = o.size;
        }
        function R0() {
          this.__data__ = new Ae(), this.size = 0;
        }
        function T0(i) {
          var o = this.__data__, l = o.delete(i);
          return this.size = o.size, l;
        }
        function O0(i) {
          return this.__data__.get(i);
        }
        function I0(i) {
          return this.__data__.has(i);
        }
        function P0(i, o) {
          var l = this.__data__;
          if (l instanceof Ae) {
            var g = l.__data__;
            if (!Ri || g.length < a - 1)
              return g.push([i, o]), this.size = ++l.size, this;
            l = this.__data__ = new Be(g);
          }
          return l.set(i, o), this.size = l.size, this;
        }
        pe.prototype.clear = R0, pe.prototype.delete = T0, pe.prototype.get = O0, pe.prototype.has = I0, pe.prototype.set = P0;
        function Ol(i, o) {
          var l = Pt(i), g = !l && En(i), S = !l && !g && en(i), R = !l && !g && !S && Zn(i), A = l || g || S || R, G = A ? ls(i.length, Hg) : [], k = G.length;
          for (var K in i)
            (o || Vt.call(i, K)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
            (K == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            S && (K == "offset" || K == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            R && (K == "buffer" || K == "byteLength" || K == "byteOffset") || // Skip index properties.
            Le(K, k))) && G.push(K);
          return G;
        }
        function Il(i) {
          var o = i.length;
          return o ? i[Ms(0, o - 1)] : r;
        }
        function A0(i, o) {
          return Va(Gr(i), yn(o, 0, i.length));
        }
        function B0(i) {
          return Va(Gr(i));
        }
        function ms(i, o, l) {
          (l !== r && !de(i[o], l) || l === r && !(o in i)) && ze(i, o, l);
        }
        function Pi(i, o, l) {
          var g = i[o];
          (!(Vt.call(i, o) && de(g, l)) || l === r && !(o in i)) && ze(i, o, l);
        }
        function za(i, o) {
          for (var l = i.length; l--; )
            if (de(i[l][0], o))
              return l;
          return -1;
        }
        function z0(i, o, l, g) {
          return Qe(i, function(S, R, A) {
            o(g, S, l(S), A);
          }), g;
        }
        function Pl(i, o) {
          return i && De(o, Sr(o), i);
        }
        function G0(i, o) {
          return i && De(o, Lr(o), i);
        }
        function ze(i, o, l) {
          o == "__proto__" && Ta ? Ta(i, o, {
            configurable: !0,
            enumerable: !0,
            value: l,
            writable: !0
          }) : i[o] = l;
        }
        function _s(i, o) {
          for (var l = -1, g = o.length, S = q(g), R = i == null; ++l < g; )
            S[l] = R ? r : Qs(i, o[l]);
          return S;
        }
        function yn(i, o, l) {
          return i === i && (l !== r && (i = i <= l ? i : l), o !== r && (i = i >= o ? i : o)), i;
        }
        function ee(i, o, l, g, S, R) {
          var A, G = o & h, k = o & d, K = o & m;
          if (l && (A = S ? l(i, g, S, R) : l(i)), A !== r)
            return A;
          if (!ar(i))
            return i;
          var Z = Pt(i);
          if (Z) {
            if (A = E1(i), !G)
              return Gr(i, A);
          } else {
            var tt = Dr(i), ct = tt == gt || tt == kt;
            if (en(i))
              return ec(i, G);
            if (tt == rt || tt == st || ct && !S) {
              if (A = k || ct ? {} : Sc(i), !G)
                return k ? p1(i, G0(A, i)) : v1(i, Pl(A, i));
            } else {
              if (!rr[tt])
                return S ? i : {};
              A = w1(i, tt, G);
            }
          }
          R || (R = new pe());
          var xt = R.get(i);
          if (xt)
            return xt;
          R.set(i, A), Zc(i) ? i.forEach(function(Rt) {
            A.add(ee(Rt, o, l, Rt, i, R));
          }) : Vc(i) && i.forEach(function(Rt, Nt) {
            A.set(Nt, ee(Rt, o, l, Nt, i, R));
          });
          var Mt = K ? k ? Ls : Fs : k ? Lr : Sr, Ft = Z ? r : Mt(i);
          return jr(Ft || i, function(Rt, Nt) {
            Ft && (Nt = Rt, Rt = i[Nt]), Pi(A, Nt, ee(Rt, o, l, Nt, i, R));
          }), A;
        }
        function F0(i) {
          var o = Sr(i);
          return function(l) {
            return Al(l, i, o);
          };
        }
        function Al(i, o, l) {
          var g = l.length;
          if (i == null)
            return !g;
          for (i = tr(i); g--; ) {
            var S = l[g], R = o[S], A = i[S];
            if (A === r && !(S in i) || !R(A))
              return !1;
          }
          return !0;
        }
        function Bl(i, o, l) {
          if (typeof i != "function")
            throw new te(u);
          return Wi(function() {
            i.apply(r, l);
          }, o);
        }
        function Ai(i, o, l, g) {
          var S = -1, R = _a, A = !0, G = i.length, k = [], K = o.length;
          if (!G)
            return k;
          l && (o = ir(o, Ur(l))), g ? (R = is, A = !1) : o.length >= a && (R = Di, A = !1, o = new xn(o));
          t:
            for (; ++S < G; ) {
              var Z = i[S], tt = l == null ? Z : l(Z);
              if (Z = g || Z !== 0 ? Z : 0, A && tt === tt) {
                for (var ct = K; ct--; )
                  if (o[ct] === tt)
                    continue t;
                k.push(Z);
              } else R(o, tt, g) || k.push(Z);
            }
          return k;
        }
        var Qe = sc(we), zl = sc(ys, !0);
        function L0(i, o) {
          var l = !0;
          return Qe(i, function(g, S, R) {
            return l = !!o(g, S, R), l;
          }), l;
        }
        function Ga(i, o, l) {
          for (var g = -1, S = i.length; ++g < S; ) {
            var R = i[g], A = o(R);
            if (A != null && (G === r ? A === A && !Vr(A) : l(A, G)))
              var G = A, k = R;
          }
          return k;
        }
        function W0(i, o, l, g) {
          var S = i.length;
          for (l = Gt(l), l < 0 && (l = -l > S ? 0 : S + l), g = g === r || g > S ? S : Gt(g), g < 0 && (g += S), g = l > g ? 0 : Qc(g); l < g; )
            i[l++] = o;
          return i;
        }
        function Gl(i, o) {
          var l = [];
          return Qe(i, function(g, S, R) {
            o(g, S, R) && l.push(g);
          }), l;
        }
        function Cr(i, o, l, g, S) {
          var R = -1, A = i.length;
          for (l || (l = M1), S || (S = []); ++R < A; ) {
            var G = i[R];
            o > 0 && l(G) ? o > 1 ? Cr(G, o - 1, l, g, S) : Ke(S, G) : g || (S[S.length] = G);
          }
          return S;
        }
        var xs = uc(), Fl = uc(!0);
        function we(i, o) {
          return i && xs(i, o, Sr);
        }
        function ys(i, o) {
          return i && Fl(i, o, Sr);
        }
        function Fa(i, o) {
          return Ve(o, function(l) {
            return We(i[l]);
          });
        }
        function Sn(i, o) {
          o = tn(o, i);
          for (var l = 0, g = o.length; i != null && l < g; )
            i = i[Me(o[l++])];
          return l && l == g ? i : r;
        }
        function Ll(i, o, l) {
          var g = o(i);
          return Pt(i) ? g : Ke(g, l(i));
        }
        function Rr(i) {
          return i == null ? i === r ? Qt : At : mn && mn in tr(i) ? S1(i) : B1(i);
        }
        function Ss(i, o) {
          return i > o;
        }
        function N0(i, o) {
          return i != null && Vt.call(i, o);
        }
        function k0(i, o) {
          return i != null && o in tr(i);
        }
        function H0(i, o, l) {
          return i >= wr(o, l) && i < gr(o, l);
        }
        function bs(i, o, l) {
          for (var g = l ? is : _a, S = i[0].length, R = i.length, A = R, G = q(R), k = 1 / 0, K = []; A--; ) {
            var Z = i[A];
            A && o && (Z = ir(Z, Ur(o))), k = wr(Z.length, k), G[A] = !l && (o || S >= 120 && Z.length >= 120) ? new xn(A && Z) : r;
          }
          Z = i[0];
          var tt = -1, ct = G[0];
          t:
            for (; ++tt < S && K.length < k; ) {
              var xt = Z[tt], Mt = o ? o(xt) : xt;
              if (xt = l || xt !== 0 ? xt : 0, !(ct ? Di(ct, Mt) : g(K, Mt, l))) {
                for (A = R; --A; ) {
                  var Ft = G[A];
                  if (!(Ft ? Di(Ft, Mt) : g(i[A], Mt, l)))
                    continue t;
                }
                ct && ct.push(Mt), K.push(xt);
              }
            }
          return K;
        }
        function Y0(i, o, l, g) {
          return we(i, function(S, R, A) {
            o(g, l(S), R, A);
          }), g;
        }
        function Bi(i, o, l) {
          o = tn(o, i), i = wc(i, o);
          var g = i == null ? i : i[Me(ie(o))];
          return g == null ? r : qr(g, i, l);
        }
        function Wl(i) {
          return sr(i) && Rr(i) == st;
        }
        function X0(i) {
          return sr(i) && Rr(i) == zr;
        }
        function q0(i) {
          return sr(i) && Rr(i) == Tt;
        }
        function zi(i, o, l, g, S) {
          return i === o ? !0 : i == null || o == null || !sr(i) && !sr(o) ? i !== i && o !== o : U0(i, o, l, g, zi, S);
        }
        function U0(i, o, l, g, S, R) {
          var A = Pt(i), G = Pt(o), k = A ? at : Dr(i), K = G ? at : Dr(o);
          k = k == st ? rt : k, K = K == st ? rt : K;
          var Z = k == rt, tt = K == rt, ct = k == K;
          if (ct && en(i)) {
            if (!en(o))
              return !1;
            A = !0, Z = !1;
          }
          if (ct && !Z)
            return R || (R = new pe()), A || Zn(i) ? _c(i, o, l, g, S, R) : x1(i, o, k, l, g, S, R);
          if (!(l & _)) {
            var xt = Z && Vt.call(i, "__wrapped__"), Mt = tt && Vt.call(o, "__wrapped__");
            if (xt || Mt) {
              var Ft = xt ? i.value() : i, Rt = Mt ? o.value() : o;
              return R || (R = new pe()), S(Ft, Rt, l, g, R);
            }
          }
          return ct ? (R || (R = new pe()), y1(i, o, l, g, S, R)) : !1;
        }
        function $0(i) {
          return sr(i) && Dr(i) == yt;
        }
        function Cs(i, o, l, g) {
          var S = l.length, R = S, A = !g;
          if (i == null)
            return !R;
          for (i = tr(i); S--; ) {
            var G = l[S];
            if (A && G[2] ? G[1] !== i[G[0]] : !(G[0] in i))
              return !1;
          }
          for (; ++S < R; ) {
            G = l[S];
            var k = G[0], K = i[k], Z = G[1];
            if (A && G[2]) {
              if (K === r && !(k in i))
                return !1;
            } else {
              var tt = new pe();
              if (g)
                var ct = g(K, Z, k, i, o, tt);
              if (!(ct === r ? zi(Z, K, _ | x, g, tt) : ct))
                return !1;
            }
          }
          return !0;
        }
        function Nl(i) {
          if (!ar(i) || T1(i))
            return !1;
          var o = We(i) ? $g : Fh;
          return o.test(Cn(i));
        }
        function V0(i) {
          return sr(i) && Rr(i) == wt;
        }
        function K0(i) {
          return sr(i) && Dr(i) == zt;
        }
        function Z0(i) {
          return sr(i) && to(i.length) && !!er[Rr(i)];
        }
        function kl(i) {
          return typeof i == "function" ? i : i == null ? Wr : typeof i == "object" ? Pt(i) ? Xl(i[0], i[1]) : Yl(i) : fv(i);
        }
        function Es(i) {
          if (!Li(i))
            return jg(i);
          var o = [];
          for (var l in tr(i))
            Vt.call(i, l) && l != "constructor" && o.push(l);
          return o;
        }
        function J0(i) {
          if (!ar(i))
            return A1(i);
          var o = Li(i), l = [];
          for (var g in i)
            g == "constructor" && (o || !Vt.call(i, g)) || l.push(g);
          return l;
        }
        function ws(i, o) {
          return i < o;
        }
        function Hl(i, o) {
          var l = -1, g = Fr(i) ? q(i.length) : [];
          return Qe(i, function(S, R, A) {
            g[++l] = o(S, R, A);
          }), g;
        }
        function Yl(i) {
          var o = Ns(i);
          return o.length == 1 && o[0][2] ? Cc(o[0][0], o[0][1]) : function(l) {
            return l === i || Cs(l, i, o);
          };
        }
        function Xl(i, o) {
          return Hs(i) && bc(o) ? Cc(Me(i), o) : function(l) {
            var g = Qs(l, i);
            return g === r && g === o ? js(l, i) : zi(o, g, _ | x);
          };
        }
        function La(i, o, l, g, S) {
          i !== o && xs(o, function(R, A) {
            if (S || (S = new pe()), ar(R))
              Q0(i, o, A, l, La, g, S);
            else {
              var G = g ? g(Xs(i, A), R, A + "", i, o, S) : r;
              G === r && (G = R), ms(i, A, G);
            }
          }, Lr);
        }
        function Q0(i, o, l, g, S, R, A) {
          var G = Xs(i, l), k = Xs(o, l), K = A.get(k);
          if (K) {
            ms(i, l, K);
            return;
          }
          var Z = R ? R(G, k, l + "", i, o, A) : r, tt = Z === r;
          if (tt) {
            var ct = Pt(k), xt = !ct && en(k), Mt = !ct && !xt && Zn(k);
            Z = k, ct || xt || Mt ? Pt(G) ? Z = G : fr(G) ? Z = Gr(G) : xt ? (tt = !1, Z = ec(k, !0)) : Mt ? (tt = !1, Z = nc(k, !0)) : Z = [] : Ni(k) || En(k) ? (Z = G, En(G) ? Z = jc(G) : (!ar(G) || We(G)) && (Z = Sc(k))) : tt = !1;
          }
          tt && (A.set(k, Z), S(Z, k, g, R, A), A.delete(k)), ms(i, l, Z);
        }
        function ql(i, o) {
          var l = i.length;
          if (l)
            return o += o < 0 ? l : 0, Le(o, l) ? i[o] : r;
        }
        function Ul(i, o, l) {
          o.length ? o = ir(o, function(R) {
            return Pt(R) ? function(A) {
              return Sn(A, R.length === 1 ? R[0] : R);
            } : R;
          }) : o = [Wr];
          var g = -1;
          o = ir(o, Ur(Dt()));
          var S = Hl(i, function(R, A, G) {
            var k = ir(o, function(K) {
              return K(R);
            });
            return { criteria: k, index: ++g, value: R };
          });
          return wg(S, function(R, A) {
            return c1(R, A, l);
          });
        }
        function j0(i, o) {
          return $l(i, o, function(l, g) {
            return js(i, g);
          });
        }
        function $l(i, o, l) {
          for (var g = -1, S = o.length, R = {}; ++g < S; ) {
            var A = o[g], G = Sn(i, A);
            l(G, A) && Gi(R, tn(A, i), G);
          }
          return R;
        }
        function t1(i) {
          return function(o) {
            return Sn(o, i);
          };
        }
        function Ds(i, o, l, g) {
          var S = g ? Eg : Wn, R = -1, A = o.length, G = i;
          for (i === o && (o = Gr(o)), l && (G = ir(i, Ur(l))); ++R < A; )
            for (var k = 0, K = o[R], Z = l ? l(K) : K; (k = S(G, Z, k, g)) > -1; )
              G !== i && Ra.call(G, k, 1), Ra.call(i, k, 1);
          return i;
        }
        function Vl(i, o) {
          for (var l = i ? o.length : 0, g = l - 1; l--; ) {
            var S = o[l];
            if (l == g || S !== R) {
              var R = S;
              Le(S) ? Ra.call(i, S, 1) : Os(i, S);
            }
          }
          return i;
        }
        function Ms(i, o) {
          return i + Ia(Rl() * (o - i + 1));
        }
        function r1(i, o, l, g) {
          for (var S = -1, R = gr(Oa((o - i) / (l || 1)), 0), A = q(R); R--; )
            A[g ? R : ++S] = i, i += l;
          return A;
        }
        function Rs(i, o) {
          var l = "";
          if (!i || o < 1 || o > V)
            return l;
          do
            o % 2 && (l += i), o = Ia(o / 2), o && (i += i);
          while (o);
          return l;
        }
        function Lt(i, o) {
          return qs(Ec(i, o, Wr), i + "");
        }
        function e1(i) {
          return Il(Jn(i));
        }
        function n1(i, o) {
          var l = Jn(i);
          return Va(l, yn(o, 0, l.length));
        }
        function Gi(i, o, l, g) {
          if (!ar(i))
            return i;
          o = tn(o, i);
          for (var S = -1, R = o.length, A = R - 1, G = i; G != null && ++S < R; ) {
            var k = Me(o[S]), K = l;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return i;
            if (S != A) {
              var Z = G[k];
              K = g ? g(Z, k, G) : r, K === r && (K = ar(Z) ? Z : Le(o[S + 1]) ? [] : {});
            }
            Pi(G, k, K), G = G[k];
          }
          return i;
        }
        var Kl = Pa ? function(i, o) {
          return Pa.set(i, o), i;
        } : Wr, i1 = Ta ? function(i, o) {
          return Ta(i, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ru(o),
            writable: !0
          });
        } : Wr;
        function a1(i) {
          return Va(Jn(i));
        }
        function ne(i, o, l) {
          var g = -1, S = i.length;
          o < 0 && (o = -o > S ? 0 : S + o), l = l > S ? S : l, l < 0 && (l += S), S = o > l ? 0 : l - o >>> 0, o >>>= 0;
          for (var R = q(S); ++g < S; )
            R[g] = i[g + o];
          return R;
        }
        function o1(i, o) {
          var l;
          return Qe(i, function(g, S, R) {
            return l = o(g, S, R), !l;
          }), !!l;
        }
        function Wa(i, o, l) {
          var g = 0, S = i == null ? g : i.length;
          if (typeof o == "number" && o === o && S <= vt) {
            for (; g < S; ) {
              var R = g + S >>> 1, A = i[R];
              A !== null && !Vr(A) && (l ? A <= o : A < o) ? g = R + 1 : S = R;
            }
            return S;
          }
          return Ts(i, o, Wr, l);
        }
        function Ts(i, o, l, g) {
          var S = 0, R = i == null ? 0 : i.length;
          if (R === 0)
            return 0;
          o = l(o);
          for (var A = o !== o, G = o === null, k = Vr(o), K = o === r; S < R; ) {
            var Z = Ia((S + R) / 2), tt = l(i[Z]), ct = tt !== r, xt = tt === null, Mt = tt === tt, Ft = Vr(tt);
            if (A)
              var Rt = g || Mt;
            else K ? Rt = Mt && (g || ct) : G ? Rt = Mt && ct && (g || !xt) : k ? Rt = Mt && ct && !xt && (g || !Ft) : xt || Ft ? Rt = !1 : Rt = g ? tt <= o : tt < o;
            Rt ? S = Z + 1 : R = Z;
          }
          return wr(R, lt);
        }
        function Zl(i, o) {
          for (var l = -1, g = i.length, S = 0, R = []; ++l < g; ) {
            var A = i[l], G = o ? o(A) : A;
            if (!l || !de(G, k)) {
              var k = G;
              R[S++] = A === 0 ? 0 : A;
            }
          }
          return R;
        }
        function Jl(i) {
          return typeof i == "number" ? i : Vr(i) ? nt : +i;
        }
        function $r(i) {
          if (typeof i == "string")
            return i;
          if (Pt(i))
            return ir(i, $r) + "";
          if (Vr(i))
            return Tl ? Tl.call(i) : "";
          var o = i + "";
          return o == "0" && 1 / i == -j ? "-0" : o;
        }
        function je(i, o, l) {
          var g = -1, S = _a, R = i.length, A = !0, G = [], k = G;
          if (l)
            A = !1, S = is;
          else if (R >= a) {
            var K = o ? null : m1(i);
            if (K)
              return ya(K);
            A = !1, S = Di, k = new xn();
          } else
            k = o ? [] : G;
          t:
            for (; ++g < R; ) {
              var Z = i[g], tt = o ? o(Z) : Z;
              if (Z = l || Z !== 0 ? Z : 0, A && tt === tt) {
                for (var ct = k.length; ct--; )
                  if (k[ct] === tt)
                    continue t;
                o && k.push(tt), G.push(Z);
              } else S(k, tt, l) || (k !== G && k.push(tt), G.push(Z));
            }
          return G;
        }
        function Os(i, o) {
          return o = tn(o, i), i = wc(i, o), i == null || delete i[Me(ie(o))];
        }
        function Ql(i, o, l, g) {
          return Gi(i, o, l(Sn(i, o)), g);
        }
        function Na(i, o, l, g) {
          for (var S = i.length, R = g ? S : -1; (g ? R-- : ++R < S) && o(i[R], R, i); )
            ;
          return l ? ne(i, g ? 0 : R, g ? R + 1 : S) : ne(i, g ? R + 1 : 0, g ? S : R);
        }
        function jl(i, o) {
          var l = i;
          return l instanceof Ht && (l = l.value()), as(o, function(g, S) {
            return S.func.apply(S.thisArg, Ke([g], S.args));
          }, l);
        }
        function Is(i, o, l) {
          var g = i.length;
          if (g < 2)
            return g ? je(i[0]) : [];
          for (var S = -1, R = q(g); ++S < g; )
            for (var A = i[S], G = -1; ++G < g; )
              G != S && (R[S] = Ai(R[S] || A, i[G], o, l));
          return je(Cr(R, 1), o, l);
        }
        function tc(i, o, l) {
          for (var g = -1, S = i.length, R = o.length, A = {}; ++g < S; ) {
            var G = g < R ? o[g] : r;
            l(A, i[g], G);
          }
          return A;
        }
        function Ps(i) {
          return fr(i) ? i : [];
        }
        function As(i) {
          return typeof i == "function" ? i : Wr;
        }
        function tn(i, o) {
          return Pt(i) ? i : Hs(i, o) ? [i] : Tc($t(i));
        }
        var s1 = Lt;
        function rn(i, o, l) {
          var g = i.length;
          return l = l === r ? g : l, !o && l >= g ? i : ne(i, o, l);
        }
        var rc = Vg || function(i) {
          return br.clearTimeout(i);
        };
        function ec(i, o) {
          if (o)
            return i.slice();
          var l = i.length, g = Cl ? Cl(l) : new i.constructor(l);
          return i.copy(g), g;
        }
        function Bs(i) {
          var o = new i.constructor(i.byteLength);
          return new Da(o).set(new Da(i)), o;
        }
        function u1(i, o) {
          var l = o ? Bs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.byteLength);
        }
        function f1(i) {
          var o = new i.constructor(i.source, Wf.exec(i));
          return o.lastIndex = i.lastIndex, o;
        }
        function l1(i) {
          return Ii ? tr(Ii.call(i)) : {};
        }
        function nc(i, o) {
          var l = o ? Bs(i.buffer) : i.buffer;
          return new i.constructor(l, i.byteOffset, i.length);
        }
        function ic(i, o) {
          if (i !== o) {
            var l = i !== r, g = i === null, S = i === i, R = Vr(i), A = o !== r, G = o === null, k = o === o, K = Vr(o);
            if (!G && !K && !R && i > o || R && A && k && !G && !K || g && A && k || !l && k || !S)
              return 1;
            if (!g && !R && !K && i < o || K && l && S && !g && !R || G && l && S || !A && S || !k)
              return -1;
          }
          return 0;
        }
        function c1(i, o, l) {
          for (var g = -1, S = i.criteria, R = o.criteria, A = S.length, G = l.length; ++g < A; ) {
            var k = ic(S[g], R[g]);
            if (k) {
              if (g >= G)
                return k;
              var K = l[g];
              return k * (K == "desc" ? -1 : 1);
            }
          }
          return i.index - o.index;
        }
        function ac(i, o, l, g) {
          for (var S = -1, R = i.length, A = l.length, G = -1, k = o.length, K = gr(R - A, 0), Z = q(k + K), tt = !g; ++G < k; )
            Z[G] = o[G];
          for (; ++S < A; )
            (tt || S < R) && (Z[l[S]] = i[S]);
          for (; K--; )
            Z[G++] = i[S++];
          return Z;
        }
        function oc(i, o, l, g) {
          for (var S = -1, R = i.length, A = -1, G = l.length, k = -1, K = o.length, Z = gr(R - G, 0), tt = q(Z + K), ct = !g; ++S < Z; )
            tt[S] = i[S];
          for (var xt = S; ++k < K; )
            tt[xt + k] = o[k];
          for (; ++A < G; )
            (ct || S < R) && (tt[xt + l[A]] = i[S++]);
          return tt;
        }
        function Gr(i, o) {
          var l = -1, g = i.length;
          for (o || (o = q(g)); ++l < g; )
            o[l] = i[l];
          return o;
        }
        function De(i, o, l, g) {
          var S = !l;
          l || (l = {});
          for (var R = -1, A = o.length; ++R < A; ) {
            var G = o[R], k = g ? g(l[G], i[G], G, l, i) : r;
            k === r && (k = i[G]), S ? ze(l, G, k) : Pi(l, G, k);
          }
          return l;
        }
        function v1(i, o) {
          return De(i, ks(i), o);
        }
        function p1(i, o) {
          return De(i, xc(i), o);
        }
        function ka(i, o) {
          return function(l, g) {
            var S = Pt(l) ? _g : z0, R = o ? o() : {};
            return S(l, i, Dt(g, 2), R);
          };
        }
        function $n(i) {
          return Lt(function(o, l) {
            var g = -1, S = l.length, R = S > 1 ? l[S - 1] : r, A = S > 2 ? l[2] : r;
            for (R = i.length > 3 && typeof R == "function" ? (S--, R) : r, A && Tr(l[0], l[1], A) && (R = S < 3 ? r : R, S = 1), o = tr(o); ++g < S; ) {
              var G = l[g];
              G && i(o, G, g, R);
            }
            return o;
          });
        }
        function sc(i, o) {
          return function(l, g) {
            if (l == null)
              return l;
            if (!Fr(l))
              return i(l, g);
            for (var S = l.length, R = o ? S : -1, A = tr(l); (o ? R-- : ++R < S) && g(A[R], R, A) !== !1; )
              ;
            return l;
          };
        }
        function uc(i) {
          return function(o, l, g) {
            for (var S = -1, R = tr(o), A = g(o), G = A.length; G--; ) {
              var k = A[i ? G : ++S];
              if (l(R[k], k, R) === !1)
                break;
            }
            return o;
          };
        }
        function d1(i, o, l) {
          var g = o & y, S = Fi(i);
          function R() {
            var A = this && this !== br && this instanceof R ? S : i;
            return A.apply(g ? l : this, arguments);
          }
          return R;
        }
        function fc(i) {
          return function(o) {
            o = $t(o);
            var l = Nn(o) ? ve(o) : r, g = l ? l[0] : o.charAt(0), S = l ? rn(l, 1).join("") : o.slice(1);
            return g[i]() + S;
          };
        }
        function Vn(i) {
          return function(o) {
            return as(sv(ov(o).replace(ig, "")), i, "");
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
            return ar(g) ? g : l;
          };
        }
        function h1(i, o, l) {
          var g = Fi(i);
          function S() {
            for (var R = arguments.length, A = q(R), G = R, k = Kn(S); G--; )
              A[G] = arguments[G];
            var K = R < 3 && A[0] !== k && A[R - 1] !== k ? [] : Ze(A, k);
            if (R -= K.length, R < l)
              return dc(
                i,
                o,
                Ha,
                S.placeholder,
                r,
                A,
                K,
                r,
                r,
                l - R
              );
            var Z = this && this !== br && this instanceof S ? g : i;
            return qr(Z, this, A);
          }
          return S;
        }
        function lc(i) {
          return function(o, l, g) {
            var S = tr(o);
            if (!Fr(o)) {
              var R = Dt(l, 3);
              o = Sr(o), l = function(G) {
                return R(S[G], G, S);
              };
            }
            var A = i(o, l, g);
            return A > -1 ? S[R ? o[A] : A] : r;
          };
        }
        function cc(i) {
          return Fe(function(o) {
            var l = o.length, g = l, S = re.prototype.thru;
            for (i && o.reverse(); g--; ) {
              var R = o[g];
              if (typeof R != "function")
                throw new te(u);
              if (S && !A && Ua(R) == "wrapper")
                var A = new re([], !0);
            }
            for (g = A ? g : l; ++g < l; ) {
              R = o[g];
              var G = Ua(R), k = G == "wrapper" ? Ws(R) : r;
              k && Ys(k[0]) && k[1] == (O | T | D | I) && !k[4].length && k[9] == 1 ? A = A[Ua(k[0])].apply(A, k[3]) : A = R.length == 1 && Ys(R) ? A[G]() : A.thru(R);
            }
            return function() {
              var K = arguments, Z = K[0];
              if (A && K.length == 1 && Pt(Z))
                return A.plant(Z).value();
              for (var tt = 0, ct = l ? o[tt].apply(this, K) : Z; ++tt < l; )
                ct = o[tt].call(this, ct);
              return ct;
            };
          });
        }
        function Ha(i, o, l, g, S, R, A, G, k, K) {
          var Z = o & O, tt = o & y, ct = o & b, xt = o & (T | M), Mt = o & P, Ft = ct ? r : Fi(i);
          function Rt() {
            for (var Nt = arguments.length, Xt = q(Nt), Kr = Nt; Kr--; )
              Xt[Kr] = arguments[Kr];
            if (xt)
              var Or = Kn(Rt), Zr = Mg(Xt, Or);
            if (g && (Xt = ac(Xt, g, S, xt)), R && (Xt = oc(Xt, R, A, xt)), Nt -= Zr, xt && Nt < K) {
              var lr = Ze(Xt, Or);
              return dc(
                i,
                o,
                Ha,
                Rt.placeholder,
                l,
                Xt,
                lr,
                G,
                k,
                K - Nt
              );
            }
            var he = tt ? l : this, ke = ct ? he[i] : i;
            return Nt = Xt.length, G ? Xt = z1(Xt, G) : Mt && Nt > 1 && Xt.reverse(), Z && k < Nt && (Xt.length = k), this && this !== br && this instanceof Rt && (ke = Ft || Fi(ke)), ke.apply(he, Xt);
          }
          return Rt;
        }
        function vc(i, o) {
          return function(l, g) {
            return Y0(l, i, o(g), {});
          };
        }
        function Ya(i, o) {
          return function(l, g) {
            var S;
            if (l === r && g === r)
              return o;
            if (l !== r && (S = l), g !== r) {
              if (S === r)
                return g;
              typeof l == "string" || typeof g == "string" ? (l = $r(l), g = $r(g)) : (l = Jl(l), g = Jl(g)), S = i(l, g);
            }
            return S;
          };
        }
        function zs(i) {
          return Fe(function(o) {
            return o = ir(o, Ur(Dt())), Lt(function(l) {
              var g = this;
              return i(o, function(S) {
                return qr(S, g, l);
              });
            });
          });
        }
        function Xa(i, o) {
          o = o === r ? " " : $r(o);
          var l = o.length;
          if (l < 2)
            return l ? Rs(o, i) : o;
          var g = Rs(o, Oa(i / kn(o)));
          return Nn(o) ? rn(ve(g), 0, i).join("") : g.slice(0, i);
        }
        function g1(i, o, l, g) {
          var S = o & y, R = Fi(i);
          function A() {
            for (var G = -1, k = arguments.length, K = -1, Z = g.length, tt = q(Z + k), ct = this && this !== br && this instanceof A ? R : i; ++K < Z; )
              tt[K] = g[K];
            for (; k--; )
              tt[K++] = arguments[++G];
            return qr(ct, S ? l : this, tt);
          }
          return A;
        }
        function pc(i) {
          return function(o, l, g) {
            return g && typeof g != "number" && Tr(o, l, g) && (l = g = r), o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), g = g === r ? o < l ? 1 : -1 : Ne(g), r1(o, l, g, i);
          };
        }
        function qa(i) {
          return function(o, l) {
            return typeof o == "string" && typeof l == "string" || (o = ae(o), l = ae(l)), i(o, l);
          };
        }
        function dc(i, o, l, g, S, R, A, G, k, K) {
          var Z = o & T, tt = Z ? A : r, ct = Z ? r : A, xt = Z ? R : r, Mt = Z ? r : R;
          o |= Z ? D : w, o &= ~(Z ? w : D), o & E || (o &= -4);
          var Ft = [
            i,
            o,
            S,
            xt,
            tt,
            Mt,
            ct,
            G,
            k,
            K
          ], Rt = l.apply(r, Ft);
          return Ys(i) && Dc(Rt, Ft), Rt.placeholder = g, Mc(Rt, i, o);
        }
        function Gs(i) {
          var o = hr[i];
          return function(l, g) {
            if (l = ae(l), g = g == null ? 0 : wr(Gt(g), 292), g && Ml(l)) {
              var S = ($t(l) + "e").split("e"), R = o(S[0] + "e" + (+S[1] + g));
              return S = ($t(R) + "e").split("e"), +(S[0] + "e" + (+S[1] - g));
            }
            return o(l);
          };
        }
        var m1 = Xn && 1 / ya(new Xn([, -0]))[1] == j ? function(i) {
          return new Xn(i);
        } : iu;
        function hc(i) {
          return function(o) {
            var l = Dr(o);
            return l == yt ? vs(o) : l == zt ? Bg(o) : Dg(o, i(o));
          };
        }
        function Ge(i, o, l, g, S, R, A, G) {
          var k = o & b;
          if (!k && typeof i != "function")
            throw new te(u);
          var K = g ? g.length : 0;
          if (K || (o &= -97, g = S = r), A = A === r ? A : gr(Gt(A), 0), G = G === r ? G : Gt(G), K -= S ? S.length : 0, o & w) {
            var Z = g, tt = S;
            g = S = r;
          }
          var ct = k ? r : Ws(i), xt = [
            i,
            o,
            l,
            g,
            S,
            Z,
            tt,
            R,
            A,
            G
          ];
          if (ct && P1(xt, ct), i = xt[0], o = xt[1], l = xt[2], g = xt[3], S = xt[4], G = xt[9] = xt[9] === r ? k ? 0 : i.length : gr(xt[9] - K, 0), !G && o & (T | M) && (o &= -25), !o || o == y)
            var Mt = d1(i, o, l);
          else o == T || o == M ? Mt = h1(i, o, G) : (o == D || o == (y | D)) && !S.length ? Mt = g1(i, o, l, g) : Mt = Ha.apply(r, xt);
          var Ft = ct ? Kl : Dc;
          return Mc(Ft(Mt, xt), i, o);
        }
        function gc(i, o, l, g) {
          return i === r || de(i, Yn[l]) && !Vt.call(g, l) ? o : i;
        }
        function mc(i, o, l, g, S, R) {
          return ar(i) && ar(o) && (R.set(o, i), La(i, o, r, mc, R), R.delete(o)), i;
        }
        function _1(i) {
          return Ni(i) ? r : i;
        }
        function _c(i, o, l, g, S, R) {
          var A = l & _, G = i.length, k = o.length;
          if (G != k && !(A && k > G))
            return !1;
          var K = R.get(i), Z = R.get(o);
          if (K && Z)
            return K == o && Z == i;
          var tt = -1, ct = !0, xt = l & x ? new xn() : r;
          for (R.set(i, o), R.set(o, i); ++tt < G; ) {
            var Mt = i[tt], Ft = o[tt];
            if (g)
              var Rt = A ? g(Ft, Mt, tt, o, i, R) : g(Mt, Ft, tt, i, o, R);
            if (Rt !== r) {
              if (Rt)
                continue;
              ct = !1;
              break;
            }
            if (xt) {
              if (!os(o, function(Nt, Xt) {
                if (!Di(xt, Xt) && (Mt === Nt || S(Mt, Nt, l, g, R)))
                  return xt.push(Xt);
              })) {
                ct = !1;
                break;
              }
            } else if (!(Mt === Ft || S(Mt, Ft, l, g, R))) {
              ct = !1;
              break;
            }
          }
          return R.delete(i), R.delete(o), ct;
        }
        function x1(i, o, l, g, S, R, A) {
          switch (l) {
            case Pe:
              if (i.byteLength != o.byteLength || i.byteOffset != o.byteOffset)
                return !1;
              i = i.buffer, o = o.buffer;
            case zr:
              return !(i.byteLength != o.byteLength || !R(new Da(i), new Da(o)));
            case _t:
            case Tt:
            case Et:
              return de(+i, +o);
            case ot:
              return i.name == o.name && i.message == o.message;
            case wt:
            case Ct:
              return i == o + "";
            case yt:
              var G = vs;
            case zt:
              var k = g & _;
              if (G || (G = ya), i.size != o.size && !k)
                return !1;
              var K = A.get(i);
              if (K)
                return K == o;
              g |= x, A.set(i, o);
              var Z = _c(G(i), G(o), g, S, R, A);
              return A.delete(i), Z;
            case Yt:
              if (Ii)
                return Ii.call(i) == Ii.call(o);
          }
          return !1;
        }
        function y1(i, o, l, g, S, R) {
          var A = l & _, G = Fs(i), k = G.length, K = Fs(o), Z = K.length;
          if (k != Z && !A)
            return !1;
          for (var tt = k; tt--; ) {
            var ct = G[tt];
            if (!(A ? ct in o : Vt.call(o, ct)))
              return !1;
          }
          var xt = R.get(i), Mt = R.get(o);
          if (xt && Mt)
            return xt == o && Mt == i;
          var Ft = !0;
          R.set(i, o), R.set(o, i);
          for (var Rt = A; ++tt < k; ) {
            ct = G[tt];
            var Nt = i[ct], Xt = o[ct];
            if (g)
              var Kr = A ? g(Xt, Nt, ct, o, i, R) : g(Nt, Xt, ct, i, o, R);
            if (!(Kr === r ? Nt === Xt || S(Nt, Xt, l, g, R) : Kr)) {
              Ft = !1;
              break;
            }
            Rt || (Rt = ct == "constructor");
          }
          if (Ft && !Rt) {
            var Or = i.constructor, Zr = o.constructor;
            Or != Zr && "constructor" in i && "constructor" in o && !(typeof Or == "function" && Or instanceof Or && typeof Zr == "function" && Zr instanceof Zr) && (Ft = !1);
          }
          return R.delete(i), R.delete(o), Ft;
        }
        function Fe(i) {
          return qs(Ec(i, r, Ac), i + "");
        }
        function Fs(i) {
          return Ll(i, Sr, ks);
        }
        function Ls(i) {
          return Ll(i, Lr, xc);
        }
        var Ws = Pa ? function(i) {
          return Pa.get(i);
        } : iu;
        function Ua(i) {
          for (var o = i.name + "", l = qn[o], g = Vt.call(qn, o) ? l.length : 0; g--; ) {
            var S = l[g], R = S.func;
            if (R == null || R == i)
              return S.name;
          }
          return o;
        }
        function Kn(i) {
          var o = Vt.call(C, "placeholder") ? C : i;
          return o.placeholder;
        }
        function Dt() {
          var i = C.iteratee || eu;
          return i = i === eu ? kl : i, arguments.length ? i(arguments[0], arguments[1]) : i;
        }
        function $a(i, o) {
          var l = i.__data__;
          return R1(o) ? l[typeof o == "string" ? "string" : "hash"] : l.map;
        }
        function Ns(i) {
          for (var o = Sr(i), l = o.length; l--; ) {
            var g = o[l], S = i[g];
            o[l] = [g, S, bc(S)];
          }
          return o;
        }
        function bn(i, o) {
          var l = Ig(i, o);
          return Nl(l) ? l : r;
        }
        function S1(i) {
          var o = Vt.call(i, mn), l = i[mn];
          try {
            i[mn] = r;
            var g = !0;
          } catch {
          }
          var S = Ea.call(i);
          return g && (o ? i[mn] = l : delete i[mn]), S;
        }
        var ks = ds ? function(i) {
          return i == null ? [] : (i = tr(i), Ve(ds(i), function(o) {
            return wl.call(i, o);
          }));
        } : au, xc = ds ? function(i) {
          for (var o = []; i; )
            Ke(o, ks(i)), i = Ma(i);
          return o;
        } : au, Dr = Rr;
        (hs && Dr(new hs(new ArrayBuffer(1))) != Pe || Ri && Dr(new Ri()) != yt || gs && Dr(gs.resolve()) != ft || Xn && Dr(new Xn()) != zt || Ti && Dr(new Ti()) != jt) && (Dr = function(i) {
          var o = Rr(i), l = o == rt ? i.constructor : r, g = l ? Cn(l) : "";
          if (g)
            switch (g) {
              case n0:
                return Pe;
              case i0:
                return yt;
              case a0:
                return ft;
              case o0:
                return zt;
              case s0:
                return jt;
            }
          return o;
        });
        function b1(i, o, l) {
          for (var g = -1, S = l.length; ++g < S; ) {
            var R = l[g], A = R.size;
            switch (R.type) {
              case "drop":
                i += A;
                break;
              case "dropRight":
                o -= A;
                break;
              case "take":
                o = wr(o, i + A);
                break;
              case "takeRight":
                i = gr(i, o - A);
                break;
            }
          }
          return { start: i, end: o };
        }
        function C1(i) {
          var o = i.match(Th);
          return o ? o[1].split(Oh) : [];
        }
        function yc(i, o, l) {
          o = tn(o, i);
          for (var g = -1, S = o.length, R = !1; ++g < S; ) {
            var A = Me(o[g]);
            if (!(R = i != null && l(i, A)))
              break;
            i = i[A];
          }
          return R || ++g != S ? R : (S = i == null ? 0 : i.length, !!S && to(S) && Le(A, S) && (Pt(i) || En(i)));
        }
        function E1(i) {
          var o = i.length, l = new i.constructor(o);
          return o && typeof i[0] == "string" && Vt.call(i, "index") && (l.index = i.index, l.input = i.input), l;
        }
        function Sc(i) {
          return typeof i.constructor == "function" && !Li(i) ? Un(Ma(i)) : {};
        }
        function w1(i, o, l) {
          var g = i.constructor;
          switch (o) {
            case zr:
              return Bs(i);
            case _t:
            case Tt:
              return new g(+i);
            case Pe:
              return u1(i, l);
            case Gn:
            case xi:
            case $e:
            case dn:
            case yi:
            case Fn:
            case hn:
            case Si:
            case bi:
              return nc(i, l);
            case yt:
              return new g();
            case Et:
            case Ct:
              return new g(i);
            case wt:
              return f1(i);
            case zt:
              return new g();
            case Yt:
              return l1(i);
          }
        }
        function D1(i, o) {
          var l = o.length;
          if (!l)
            return i;
          var g = l - 1;
          return o[g] = (l > 1 ? "& " : "") + o[g], o = o.join(l > 2 ? ", " : " "), i.replace(Rh, `{
/* [wrapped with ` + o + `] */
`);
        }
        function M1(i) {
          return Pt(i) || En(i) || !!(Dl && i && i[Dl]);
        }
        function Le(i, o) {
          var l = typeof i;
          return o = o ?? V, !!o && (l == "number" || l != "symbol" && Wh.test(i)) && i > -1 && i % 1 == 0 && i < o;
        }
        function Tr(i, o, l) {
          if (!ar(l))
            return !1;
          var g = typeof o;
          return (g == "number" ? Fr(l) && Le(o, l.length) : g == "string" && o in l) ? de(l[o], i) : !1;
        }
        function Hs(i, o) {
          if (Pt(i))
            return !1;
          var l = typeof i;
          return l == "number" || l == "symbol" || l == "boolean" || i == null || Vr(i) ? !0 : Eh.test(i) || !Ch.test(i) || o != null && i in tr(o);
        }
        function R1(i) {
          var o = typeof i;
          return o == "string" || o == "number" || o == "symbol" || o == "boolean" ? i !== "__proto__" : i === null;
        }
        function Ys(i) {
          var o = Ua(i), l = C[o];
          if (typeof l != "function" || !(o in Ht.prototype))
            return !1;
          if (i === l)
            return !0;
          var g = Ws(l);
          return !!g && i === g[0];
        }
        function T1(i) {
          return !!bl && bl in i;
        }
        var O1 = ba ? We : ou;
        function Li(i) {
          var o = i && i.constructor, l = typeof o == "function" && o.prototype || Yn;
          return i === l;
        }
        function bc(i) {
          return i === i && !ar(i);
        }
        function Cc(i, o) {
          return function(l) {
            return l == null ? !1 : l[i] === o && (o !== r || i in tr(l));
          };
        }
        function I1(i) {
          var o = Qa(i, function(g) {
            return l.size === v && l.clear(), g;
          }), l = o.cache;
          return o;
        }
        function P1(i, o) {
          var l = i[1], g = o[1], S = l | g, R = S < (y | b | O), A = g == O && l == T || g == O && l == I && i[7].length <= o[8] || g == (O | I) && o[7].length <= o[8] && l == T;
          if (!(R || A))
            return i;
          g & y && (i[2] = o[2], S |= l & y ? 0 : E);
          var G = o[3];
          if (G) {
            var k = i[3];
            i[3] = k ? ac(k, G, o[4]) : G, i[4] = k ? Ze(i[3], p) : o[4];
          }
          return G = o[5], G && (k = i[5], i[5] = k ? oc(k, G, o[6]) : G, i[6] = k ? Ze(i[5], p) : o[6]), G = o[7], G && (i[7] = G), g & O && (i[8] = i[8] == null ? o[8] : wr(i[8], o[8])), i[9] == null && (i[9] = o[9]), i[0] = o[0], i[1] = S, i;
        }
        function A1(i) {
          var o = [];
          if (i != null)
            for (var l in tr(i))
              o.push(l);
          return o;
        }
        function B1(i) {
          return Ea.call(i);
        }
        function Ec(i, o, l) {
          return o = gr(o === r ? i.length - 1 : o, 0), function() {
            for (var g = arguments, S = -1, R = gr(g.length - o, 0), A = q(R); ++S < R; )
              A[S] = g[o + S];
            S = -1;
            for (var G = q(o + 1); ++S < o; )
              G[S] = g[S];
            return G[o] = l(A), qr(i, this, G);
          };
        }
        function wc(i, o) {
          return o.length < 2 ? i : Sn(i, ne(o, 0, -1));
        }
        function z1(i, o) {
          for (var l = i.length, g = wr(o.length, l), S = Gr(i); g--; ) {
            var R = o[g];
            i[g] = Le(R, l) ? S[R] : r;
          }
          return i;
        }
        function Xs(i, o) {
          if (!(o === "constructor" && typeof i[o] == "function") && o != "__proto__")
            return i[o];
        }
        var Dc = Rc(Kl), Wi = Zg || function(i, o) {
          return br.setTimeout(i, o);
        }, qs = Rc(i1);
        function Mc(i, o, l) {
          var g = o + "";
          return qs(i, D1(g, G1(C1(g), l)));
        }
        function Rc(i) {
          var o = 0, l = 0;
          return function() {
            var g = t0(), S = L - (g - l);
            if (l = g, S > 0) {
              if (++o >= W)
                return arguments[0];
            } else
              o = 0;
            return i.apply(r, arguments);
          };
        }
        function Va(i, o) {
          var l = -1, g = i.length, S = g - 1;
          for (o = o === r ? g : o; ++l < o; ) {
            var R = Ms(l, S), A = i[R];
            i[R] = i[l], i[l] = A;
          }
          return i.length = o, i;
        }
        var Tc = I1(function(i) {
          var o = [];
          return i.charCodeAt(0) === 46 && o.push(""), i.replace(wh, function(l, g, S, R) {
            o.push(S ? R.replace(Ah, "$1") : g || l);
          }), o;
        });
        function Me(i) {
          if (typeof i == "string" || Vr(i))
            return i;
          var o = i + "";
          return o == "0" && 1 / i == -j ? "-0" : o;
        }
        function Cn(i) {
          if (i != null) {
            try {
              return Ca.call(i);
            } catch {
            }
            try {
              return i + "";
            } catch {
            }
          }
          return "";
        }
        function G1(i, o) {
          return jr(ut, function(l) {
            var g = "_." + l[0];
            o & l[1] && !_a(i, g) && i.push(g);
          }), i.sort();
        }
        function Oc(i) {
          if (i instanceof Ht)
            return i.clone();
          var o = new re(i.__wrapped__, i.__chain__);
          return o.__actions__ = Gr(i.__actions__), o.__index__ = i.__index__, o.__values__ = i.__values__, o;
        }
        function F1(i, o, l) {
          (l ? Tr(i, o, l) : o === r) ? o = 1 : o = gr(Gt(o), 0);
          var g = i == null ? 0 : i.length;
          if (!g || o < 1)
            return [];
          for (var S = 0, R = 0, A = q(Oa(g / o)); S < g; )
            A[R++] = ne(i, S, S += o);
          return A;
        }
        function L1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = 0, S = []; ++o < l; ) {
            var R = i[o];
            R && (S[g++] = R);
          }
          return S;
        }
        function W1() {
          var i = arguments.length;
          if (!i)
            return [];
          for (var o = q(i - 1), l = arguments[0], g = i; g--; )
            o[g - 1] = arguments[g];
          return Ke(Pt(l) ? Gr(l) : [l], Cr(o, 1));
        }
        var N1 = Lt(function(i, o) {
          return fr(i) ? Ai(i, Cr(o, 1, fr, !0)) : [];
        }), k1 = Lt(function(i, o) {
          var l = ie(o);
          return fr(l) && (l = r), fr(i) ? Ai(i, Cr(o, 1, fr, !0), Dt(l, 2)) : [];
        }), H1 = Lt(function(i, o) {
          var l = ie(o);
          return fr(l) && (l = r), fr(i) ? Ai(i, Cr(o, 1, fr, !0), r, l) : [];
        });
        function Y1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), ne(i, o < 0 ? 0 : o, g)) : [];
        }
        function X1(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), o = g - o, ne(i, 0, o < 0 ? 0 : o)) : [];
        }
        function q1(i, o) {
          return i && i.length ? Na(i, Dt(o, 3), !0, !0) : [];
        }
        function U1(i, o) {
          return i && i.length ? Na(i, Dt(o, 3), !0) : [];
        }
        function $1(i, o, l, g) {
          var S = i == null ? 0 : i.length;
          return S ? (l && typeof l != "number" && Tr(i, o, l) && (l = 0, g = S), W0(i, o, l, g)) : [];
        }
        function Ic(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : Gt(l);
          return S < 0 && (S = gr(g + S, 0)), xa(i, Dt(o, 3), S);
        }
        function Pc(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g - 1;
          return l !== r && (S = Gt(l), S = l < 0 ? gr(g + S, 0) : wr(S, g - 1)), xa(i, Dt(o, 3), S, !0);
        }
        function Ac(i) {
          var o = i == null ? 0 : i.length;
          return o ? Cr(i, 1) : [];
        }
        function V1(i) {
          var o = i == null ? 0 : i.length;
          return o ? Cr(i, j) : [];
        }
        function K1(i, o) {
          var l = i == null ? 0 : i.length;
          return l ? (o = o === r ? 1 : Gt(o), Cr(i, o)) : [];
        }
        function Z1(i) {
          for (var o = -1, l = i == null ? 0 : i.length, g = {}; ++o < l; ) {
            var S = i[o];
            g[S[0]] = S[1];
          }
          return g;
        }
        function Bc(i) {
          return i && i.length ? i[0] : r;
        }
        function J1(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = l == null ? 0 : Gt(l);
          return S < 0 && (S = gr(g + S, 0)), Wn(i, o, S);
        }
        function Q1(i) {
          var o = i == null ? 0 : i.length;
          return o ? ne(i, 0, -1) : [];
        }
        var j1 = Lt(function(i) {
          var o = ir(i, Ps);
          return o.length && o[0] === i[0] ? bs(o) : [];
        }), tm = Lt(function(i) {
          var o = ie(i), l = ir(i, Ps);
          return o === ie(l) ? o = r : l.pop(), l.length && l[0] === i[0] ? bs(l, Dt(o, 2)) : [];
        }), rm = Lt(function(i) {
          var o = ie(i), l = ir(i, Ps);
          return o = typeof o == "function" ? o : r, o && l.pop(), l.length && l[0] === i[0] ? bs(l, r, o) : [];
        });
        function em(i, o) {
          return i == null ? "" : Qg.call(i, o);
        }
        function ie(i) {
          var o = i == null ? 0 : i.length;
          return o ? i[o - 1] : r;
        }
        function nm(i, o, l) {
          var g = i == null ? 0 : i.length;
          if (!g)
            return -1;
          var S = g;
          return l !== r && (S = Gt(l), S = S < 0 ? gr(g + S, 0) : wr(S, g - 1)), o === o ? Gg(i, o, S) : xa(i, dl, S, !0);
        }
        function im(i, o) {
          return i && i.length ? ql(i, Gt(o)) : r;
        }
        var am = Lt(zc);
        function zc(i, o) {
          return i && i.length && o && o.length ? Ds(i, o) : i;
        }
        function om(i, o, l) {
          return i && i.length && o && o.length ? Ds(i, o, Dt(l, 2)) : i;
        }
        function sm(i, o, l) {
          return i && i.length && o && o.length ? Ds(i, o, r, l) : i;
        }
        var um = Fe(function(i, o) {
          var l = i == null ? 0 : i.length, g = _s(i, o);
          return Vl(i, ir(o, function(S) {
            return Le(S, l) ? +S : S;
          }).sort(ic)), g;
        });
        function fm(i, o) {
          var l = [];
          if (!(i && i.length))
            return l;
          var g = -1, S = [], R = i.length;
          for (o = Dt(o, 3); ++g < R; ) {
            var A = i[g];
            o(A, g, i) && (l.push(A), S.push(g));
          }
          return Vl(i, S), l;
        }
        function Us(i) {
          return i == null ? i : e0.call(i);
        }
        function lm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (l && typeof l != "number" && Tr(i, o, l) ? (o = 0, l = g) : (o = o == null ? 0 : Gt(o), l = l === r ? g : Gt(l)), ne(i, o, l)) : [];
        }
        function cm(i, o) {
          return Wa(i, o);
        }
        function vm(i, o, l) {
          return Ts(i, o, Dt(l, 2));
        }
        function pm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Wa(i, o);
            if (g < l && de(i[g], o))
              return g;
          }
          return -1;
        }
        function dm(i, o) {
          return Wa(i, o, !0);
        }
        function hm(i, o, l) {
          return Ts(i, o, Dt(l, 2), !0);
        }
        function gm(i, o) {
          var l = i == null ? 0 : i.length;
          if (l) {
            var g = Wa(i, o, !0) - 1;
            if (de(i[g], o))
              return g;
          }
          return -1;
        }
        function mm(i) {
          return i && i.length ? Zl(i) : [];
        }
        function _m(i, o) {
          return i && i.length ? Zl(i, Dt(o, 2)) : [];
        }
        function xm(i) {
          var o = i == null ? 0 : i.length;
          return o ? ne(i, 1, o) : [];
        }
        function ym(i, o, l) {
          return i && i.length ? (o = l || o === r ? 1 : Gt(o), ne(i, 0, o < 0 ? 0 : o)) : [];
        }
        function Sm(i, o, l) {
          var g = i == null ? 0 : i.length;
          return g ? (o = l || o === r ? 1 : Gt(o), o = g - o, ne(i, o < 0 ? 0 : o, g)) : [];
        }
        function bm(i, o) {
          return i && i.length ? Na(i, Dt(o, 3), !1, !0) : [];
        }
        function Cm(i, o) {
          return i && i.length ? Na(i, Dt(o, 3)) : [];
        }
        var Em = Lt(function(i) {
          return je(Cr(i, 1, fr, !0));
        }), wm = Lt(function(i) {
          var o = ie(i);
          return fr(o) && (o = r), je(Cr(i, 1, fr, !0), Dt(o, 2));
        }), Dm = Lt(function(i) {
          var o = ie(i);
          return o = typeof o == "function" ? o : r, je(Cr(i, 1, fr, !0), r, o);
        });
        function Mm(i) {
          return i && i.length ? je(i) : [];
        }
        function Rm(i, o) {
          return i && i.length ? je(i, Dt(o, 2)) : [];
        }
        function Tm(i, o) {
          return o = typeof o == "function" ? o : r, i && i.length ? je(i, r, o) : [];
        }
        function $s(i) {
          if (!(i && i.length))
            return [];
          var o = 0;
          return i = Ve(i, function(l) {
            if (fr(l))
              return o = gr(l.length, o), !0;
          }), ls(o, function(l) {
            return ir(i, ss(l));
          });
        }
        function Gc(i, o) {
          if (!(i && i.length))
            return [];
          var l = $s(i);
          return o == null ? l : ir(l, function(g) {
            return qr(o, r, g);
          });
        }
        var Om = Lt(function(i, o) {
          return fr(i) ? Ai(i, o) : [];
        }), Im = Lt(function(i) {
          return Is(Ve(i, fr));
        }), Pm = Lt(function(i) {
          var o = ie(i);
          return fr(o) && (o = r), Is(Ve(i, fr), Dt(o, 2));
        }), Am = Lt(function(i) {
          var o = ie(i);
          return o = typeof o == "function" ? o : r, Is(Ve(i, fr), r, o);
        }), Bm = Lt($s);
        function zm(i, o) {
          return tc(i || [], o || [], Pi);
        }
        function Gm(i, o) {
          return tc(i || [], o || [], Gi);
        }
        var Fm = Lt(function(i) {
          var o = i.length, l = o > 1 ? i[o - 1] : r;
          return l = typeof l == "function" ? (i.pop(), l) : r, Gc(i, l);
        });
        function Fc(i) {
          var o = C(i);
          return o.__chain__ = !0, o;
        }
        function Lm(i, o) {
          return o(i), i;
        }
        function Ka(i, o) {
          return o(i);
        }
        var Wm = Fe(function(i) {
          var o = i.length, l = o ? i[0] : 0, g = this.__wrapped__, S = function(R) {
            return _s(R, i);
          };
          return o > 1 || this.__actions__.length || !(g instanceof Ht) || !Le(l) ? this.thru(S) : (g = g.slice(l, +l + (o ? 1 : 0)), g.__actions__.push({
            func: Ka,
            args: [S],
            thisArg: r
          }), new re(g, this.__chain__).thru(function(R) {
            return o && !R.length && R.push(r), R;
          }));
        });
        function Nm() {
          return Fc(this);
        }
        function km() {
          return new re(this.value(), this.__chain__);
        }
        function Hm() {
          this.__values__ === r && (this.__values__ = Jc(this.value()));
          var i = this.__index__ >= this.__values__.length, o = i ? r : this.__values__[this.__index__++];
          return { done: i, value: o };
        }
        function Ym() {
          return this;
        }
        function Xm(i) {
          for (var o, l = this; l instanceof Ba; ) {
            var g = Oc(l);
            g.__index__ = 0, g.__values__ = r, o ? S.__wrapped__ = g : o = g;
            var S = g;
            l = l.__wrapped__;
          }
          return S.__wrapped__ = i, o;
        }
        function qm() {
          var i = this.__wrapped__;
          if (i instanceof Ht) {
            var o = i;
            return this.__actions__.length && (o = new Ht(this)), o = o.reverse(), o.__actions__.push({
              func: Ka,
              args: [Us],
              thisArg: r
            }), new re(o, this.__chain__);
          }
          return this.thru(Us);
        }
        function Um() {
          return jl(this.__wrapped__, this.__actions__);
        }
        var $m = ka(function(i, o, l) {
          Vt.call(i, l) ? ++i[l] : ze(i, l, 1);
        });
        function Vm(i, o, l) {
          var g = Pt(i) ? vl : L0;
          return l && Tr(i, o, l) && (o = r), g(i, Dt(o, 3));
        }
        function Km(i, o) {
          var l = Pt(i) ? Ve : Gl;
          return l(i, Dt(o, 3));
        }
        var Zm = lc(Ic), Jm = lc(Pc);
        function Qm(i, o) {
          return Cr(Za(i, o), 1);
        }
        function jm(i, o) {
          return Cr(Za(i, o), j);
        }
        function t_(i, o, l) {
          return l = l === r ? 1 : Gt(l), Cr(Za(i, o), l);
        }
        function Lc(i, o) {
          var l = Pt(i) ? jr : Qe;
          return l(i, Dt(o, 3));
        }
        function Wc(i, o) {
          var l = Pt(i) ? xg : zl;
          return l(i, Dt(o, 3));
        }
        var r_ = ka(function(i, o, l) {
          Vt.call(i, l) ? i[l].push(o) : ze(i, l, [o]);
        });
        function e_(i, o, l, g) {
          i = Fr(i) ? i : Jn(i), l = l && !g ? Gt(l) : 0;
          var S = i.length;
          return l < 0 && (l = gr(S + l, 0)), ro(i) ? l <= S && i.indexOf(o, l) > -1 : !!S && Wn(i, o, l) > -1;
        }
        var n_ = Lt(function(i, o, l) {
          var g = -1, S = typeof o == "function", R = Fr(i) ? q(i.length) : [];
          return Qe(i, function(A) {
            R[++g] = S ? qr(o, A, l) : Bi(A, o, l);
          }), R;
        }), i_ = ka(function(i, o, l) {
          ze(i, l, o);
        });
        function Za(i, o) {
          var l = Pt(i) ? ir : Hl;
          return l(i, Dt(o, 3));
        }
        function a_(i, o, l, g) {
          return i == null ? [] : (Pt(o) || (o = o == null ? [] : [o]), l = g ? r : l, Pt(l) || (l = l == null ? [] : [l]), Ul(i, o, l));
        }
        var o_ = ka(function(i, o, l) {
          i[l ? 0 : 1].push(o);
        }, function() {
          return [[], []];
        });
        function s_(i, o, l) {
          var g = Pt(i) ? as : gl, S = arguments.length < 3;
          return g(i, Dt(o, 4), l, S, Qe);
        }
        function u_(i, o, l) {
          var g = Pt(i) ? yg : gl, S = arguments.length < 3;
          return g(i, Dt(o, 4), l, S, zl);
        }
        function f_(i, o) {
          var l = Pt(i) ? Ve : Gl;
          return l(i, ja(Dt(o, 3)));
        }
        function l_(i) {
          var o = Pt(i) ? Il : e1;
          return o(i);
        }
        function c_(i, o, l) {
          (l ? Tr(i, o, l) : o === r) ? o = 1 : o = Gt(o);
          var g = Pt(i) ? A0 : n1;
          return g(i, o);
        }
        function v_(i) {
          var o = Pt(i) ? B0 : a1;
          return o(i);
        }
        function p_(i) {
          if (i == null)
            return 0;
          if (Fr(i))
            return ro(i) ? kn(i) : i.length;
          var o = Dr(i);
          return o == yt || o == zt ? i.size : Es(i).length;
        }
        function d_(i, o, l) {
          var g = Pt(i) ? os : o1;
          return l && Tr(i, o, l) && (o = r), g(i, Dt(o, 3));
        }
        var h_ = Lt(function(i, o) {
          if (i == null)
            return [];
          var l = o.length;
          return l > 1 && Tr(i, o[0], o[1]) ? o = [] : l > 2 && Tr(o[0], o[1], o[2]) && (o = [o[0]]), Ul(i, Cr(o, 1), []);
        }), Ja = Kg || function() {
          return br.Date.now();
        };
        function g_(i, o) {
          if (typeof o != "function")
            throw new te(u);
          return i = Gt(i), function() {
            if (--i < 1)
              return o.apply(this, arguments);
          };
        }
        function Nc(i, o, l) {
          return o = l ? r : o, o = i && o == null ? i.length : o, Ge(i, O, r, r, r, r, o);
        }
        function kc(i, o) {
          var l;
          if (typeof o != "function")
            throw new te(u);
          return i = Gt(i), function() {
            return --i > 0 && (l = o.apply(this, arguments)), i <= 1 && (o = r), l;
          };
        }
        var Vs = Lt(function(i, o, l) {
          var g = y;
          if (l.length) {
            var S = Ze(l, Kn(Vs));
            g |= D;
          }
          return Ge(i, g, o, l, S);
        }), Hc = Lt(function(i, o, l) {
          var g = y | b;
          if (l.length) {
            var S = Ze(l, Kn(Hc));
            g |= D;
          }
          return Ge(o, g, i, l, S);
        });
        function Yc(i, o, l) {
          o = l ? r : o;
          var g = Ge(i, T, r, r, r, r, r, o);
          return g.placeholder = Yc.placeholder, g;
        }
        function Xc(i, o, l) {
          o = l ? r : o;
          var g = Ge(i, M, r, r, r, r, r, o);
          return g.placeholder = Xc.placeholder, g;
        }
        function qc(i, o, l) {
          var g, S, R, A, G, k, K = 0, Z = !1, tt = !1, ct = !0;
          if (typeof i != "function")
            throw new te(u);
          o = ae(o) || 0, ar(l) && (Z = !!l.leading, tt = "maxWait" in l, R = tt ? gr(ae(l.maxWait) || 0, o) : R, ct = "trailing" in l ? !!l.trailing : ct);
          function xt(lr) {
            var he = g, ke = S;
            return g = S = r, K = lr, A = i.apply(ke, he), A;
          }
          function Mt(lr) {
            return K = lr, G = Wi(Nt, o), Z ? xt(lr) : A;
          }
          function Ft(lr) {
            var he = lr - k, ke = lr - K, lv = o - he;
            return tt ? wr(lv, R - ke) : lv;
          }
          function Rt(lr) {
            var he = lr - k, ke = lr - K;
            return k === r || he >= o || he < 0 || tt && ke >= R;
          }
          function Nt() {
            var lr = Ja();
            if (Rt(lr))
              return Xt(lr);
            G = Wi(Nt, Ft(lr));
          }
          function Xt(lr) {
            return G = r, ct && g ? xt(lr) : (g = S = r, A);
          }
          function Kr() {
            G !== r && rc(G), K = 0, g = k = S = G = r;
          }
          function Or() {
            return G === r ? A : Xt(Ja());
          }
          function Zr() {
            var lr = Ja(), he = Rt(lr);
            if (g = arguments, S = this, k = lr, he) {
              if (G === r)
                return Mt(k);
              if (tt)
                return rc(G), G = Wi(Nt, o), xt(k);
            }
            return G === r && (G = Wi(Nt, o)), A;
          }
          return Zr.cancel = Kr, Zr.flush = Or, Zr;
        }
        var m_ = Lt(function(i, o) {
          return Bl(i, 1, o);
        }), __ = Lt(function(i, o, l) {
          return Bl(i, ae(o) || 0, l);
        });
        function x_(i) {
          return Ge(i, P);
        }
        function Qa(i, o) {
          if (typeof i != "function" || o != null && typeof o != "function")
            throw new te(u);
          var l = function() {
            var g = arguments, S = o ? o.apply(this, g) : g[0], R = l.cache;
            if (R.has(S))
              return R.get(S);
            var A = i.apply(this, g);
            return l.cache = R.set(S, A) || R, A;
          };
          return l.cache = new (Qa.Cache || Be)(), l;
        }
        Qa.Cache = Be;
        function ja(i) {
          if (typeof i != "function")
            throw new te(u);
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
        function y_(i) {
          return kc(2, i);
        }
        var S_ = s1(function(i, o) {
          o = o.length == 1 && Pt(o[0]) ? ir(o[0], Ur(Dt())) : ir(Cr(o, 1), Ur(Dt()));
          var l = o.length;
          return Lt(function(g) {
            for (var S = -1, R = wr(g.length, l); ++S < R; )
              g[S] = o[S].call(this, g[S]);
            return qr(i, this, g);
          });
        }), Ks = Lt(function(i, o) {
          var l = Ze(o, Kn(Ks));
          return Ge(i, D, r, o, l);
        }), Uc = Lt(function(i, o) {
          var l = Ze(o, Kn(Uc));
          return Ge(i, w, r, o, l);
        }), b_ = Fe(function(i, o) {
          return Ge(i, I, r, r, r, o);
        });
        function C_(i, o) {
          if (typeof i != "function")
            throw new te(u);
          return o = o === r ? o : Gt(o), Lt(i, o);
        }
        function E_(i, o) {
          if (typeof i != "function")
            throw new te(u);
          return o = o == null ? 0 : gr(Gt(o), 0), Lt(function(l) {
            var g = l[o], S = rn(l, 0, o);
            return g && Ke(S, g), qr(i, this, S);
          });
        }
        function w_(i, o, l) {
          var g = !0, S = !0;
          if (typeof i != "function")
            throw new te(u);
          return ar(l) && (g = "leading" in l ? !!l.leading : g, S = "trailing" in l ? !!l.trailing : S), qc(i, o, {
            leading: g,
            maxWait: o,
            trailing: S
          });
        }
        function D_(i) {
          return Nc(i, 1);
        }
        function M_(i, o) {
          return Ks(As(o), i);
        }
        function R_() {
          if (!arguments.length)
            return [];
          var i = arguments[0];
          return Pt(i) ? i : [i];
        }
        function T_(i) {
          return ee(i, m);
        }
        function O_(i, o) {
          return o = typeof o == "function" ? o : r, ee(i, m, o);
        }
        function I_(i) {
          return ee(i, h | m);
        }
        function P_(i, o) {
          return o = typeof o == "function" ? o : r, ee(i, h | m, o);
        }
        function A_(i, o) {
          return o == null || Al(i, o, Sr(o));
        }
        function de(i, o) {
          return i === o || i !== i && o !== o;
        }
        var B_ = qa(Ss), z_ = qa(function(i, o) {
          return i >= o;
        }), En = Wl(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? Wl : function(i) {
          return sr(i) && Vt.call(i, "callee") && !wl.call(i, "callee");
        }, Pt = q.isArray, G_ = ol ? Ur(ol) : X0;
        function Fr(i) {
          return i != null && to(i.length) && !We(i);
        }
        function fr(i) {
          return sr(i) && Fr(i);
        }
        function F_(i) {
          return i === !0 || i === !1 || sr(i) && Rr(i) == _t;
        }
        var en = Jg || ou, L_ = sl ? Ur(sl) : q0;
        function W_(i) {
          return sr(i) && i.nodeType === 1 && !Ni(i);
        }
        function N_(i) {
          if (i == null)
            return !0;
          if (Fr(i) && (Pt(i) || typeof i == "string" || typeof i.splice == "function" || en(i) || Zn(i) || En(i)))
            return !i.length;
          var o = Dr(i);
          if (o == yt || o == zt)
            return !i.size;
          if (Li(i))
            return !Es(i).length;
          for (var l in i)
            if (Vt.call(i, l))
              return !1;
          return !0;
        }
        function k_(i, o) {
          return zi(i, o);
        }
        function H_(i, o, l) {
          l = typeof l == "function" ? l : r;
          var g = l ? l(i, o) : r;
          return g === r ? zi(i, o, r, l) : !!g;
        }
        function Zs(i) {
          if (!sr(i))
            return !1;
          var o = Rr(i);
          return o == ot || o == Wt || typeof i.message == "string" && typeof i.name == "string" && !Ni(i);
        }
        function Y_(i) {
          return typeof i == "number" && Ml(i);
        }
        function We(i) {
          if (!ar(i))
            return !1;
          var o = Rr(i);
          return o == gt || o == kt || o == dt || o == pt;
        }
        function $c(i) {
          return typeof i == "number" && i == Gt(i);
        }
        function to(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= V;
        }
        function ar(i) {
          var o = typeof i;
          return i != null && (o == "object" || o == "function");
        }
        function sr(i) {
          return i != null && typeof i == "object";
        }
        var Vc = ul ? Ur(ul) : $0;
        function X_(i, o) {
          return i === o || Cs(i, o, Ns(o));
        }
        function q_(i, o, l) {
          return l = typeof l == "function" ? l : r, Cs(i, o, Ns(o), l);
        }
        function U_(i) {
          return Kc(i) && i != +i;
        }
        function $_(i) {
          if (O1(i))
            throw new It(s);
          return Nl(i);
        }
        function V_(i) {
          return i === null;
        }
        function K_(i) {
          return i == null;
        }
        function Kc(i) {
          return typeof i == "number" || sr(i) && Rr(i) == Et;
        }
        function Ni(i) {
          if (!sr(i) || Rr(i) != rt)
            return !1;
          var o = Ma(i);
          if (o === null)
            return !0;
          var l = Vt.call(o, "constructor") && o.constructor;
          return typeof l == "function" && l instanceof l && Ca.call(l) == qg;
        }
        var Js = fl ? Ur(fl) : V0;
        function Z_(i) {
          return $c(i) && i >= -V && i <= V;
        }
        var Zc = ll ? Ur(ll) : K0;
        function ro(i) {
          return typeof i == "string" || !Pt(i) && sr(i) && Rr(i) == Ct;
        }
        function Vr(i) {
          return typeof i == "symbol" || sr(i) && Rr(i) == Yt;
        }
        var Zn = cl ? Ur(cl) : Z0;
        function J_(i) {
          return i === r;
        }
        function Q_(i) {
          return sr(i) && Dr(i) == jt;
        }
        function j_(i) {
          return sr(i) && Rr(i) == Ee;
        }
        var tx = qa(ws), rx = qa(function(i, o) {
          return i <= o;
        });
        function Jc(i) {
          if (!i)
            return [];
          if (Fr(i))
            return ro(i) ? ve(i) : Gr(i);
          if (Mi && i[Mi])
            return Ag(i[Mi]());
          var o = Dr(i), l = o == yt ? vs : o == zt ? ya : Jn;
          return l(i);
        }
        function Ne(i) {
          if (!i)
            return i === 0 ? i : 0;
          if (i = ae(i), i === j || i === -j) {
            var o = i < 0 ? -1 : 1;
            return o * et;
          }
          return i === i ? i : 0;
        }
        function Gt(i) {
          var o = Ne(i), l = o % 1;
          return o === o ? l ? o - l : o : 0;
        }
        function Qc(i) {
          return i ? yn(Gt(i), 0, U) : 0;
        }
        function ae(i) {
          if (typeof i == "number")
            return i;
          if (Vr(i))
            return nt;
          if (ar(i)) {
            var o = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = ar(o) ? o + "" : o;
          }
          if (typeof i != "string")
            return i === 0 ? i : +i;
          i = ml(i);
          var l = Gh.test(i);
          return l || Lh.test(i) ? gg(i.slice(2), l ? 2 : 8) : zh.test(i) ? nt : +i;
        }
        function jc(i) {
          return De(i, Lr(i));
        }
        function ex(i) {
          return i ? yn(Gt(i), -V, V) : i === 0 ? i : 0;
        }
        function $t(i) {
          return i == null ? "" : $r(i);
        }
        var nx = $n(function(i, o) {
          if (Li(o) || Fr(o)) {
            De(o, Sr(o), i);
            return;
          }
          for (var l in o)
            Vt.call(o, l) && Pi(i, l, o[l]);
        }), tv = $n(function(i, o) {
          De(o, Lr(o), i);
        }), eo = $n(function(i, o, l, g) {
          De(o, Lr(o), i, g);
        }), ix = $n(function(i, o, l, g) {
          De(o, Sr(o), i, g);
        }), ax = Fe(_s);
        function ox(i, o) {
          var l = Un(i);
          return o == null ? l : Pl(l, o);
        }
        var sx = Lt(function(i, o) {
          i = tr(i);
          var l = -1, g = o.length, S = g > 2 ? o[2] : r;
          for (S && Tr(o[0], o[1], S) && (g = 1); ++l < g; )
            for (var R = o[l], A = Lr(R), G = -1, k = A.length; ++G < k; ) {
              var K = A[G], Z = i[K];
              (Z === r || de(Z, Yn[K]) && !Vt.call(i, K)) && (i[K] = R[K]);
            }
          return i;
        }), ux = Lt(function(i) {
          return i.push(r, mc), qr(rv, r, i);
        });
        function fx(i, o) {
          return pl(i, Dt(o, 3), we);
        }
        function lx(i, o) {
          return pl(i, Dt(o, 3), ys);
        }
        function cx(i, o) {
          return i == null ? i : xs(i, Dt(o, 3), Lr);
        }
        function vx(i, o) {
          return i == null ? i : Fl(i, Dt(o, 3), Lr);
        }
        function px(i, o) {
          return i && we(i, Dt(o, 3));
        }
        function dx(i, o) {
          return i && ys(i, Dt(o, 3));
        }
        function hx(i) {
          return i == null ? [] : Fa(i, Sr(i));
        }
        function gx(i) {
          return i == null ? [] : Fa(i, Lr(i));
        }
        function Qs(i, o, l) {
          var g = i == null ? r : Sn(i, o);
          return g === r ? l : g;
        }
        function mx(i, o) {
          return i != null && yc(i, o, N0);
        }
        function js(i, o) {
          return i != null && yc(i, o, k0);
        }
        var _x = vc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Ea.call(o)), i[o] = l;
        }, ru(Wr)), xx = vc(function(i, o, l) {
          o != null && typeof o.toString != "function" && (o = Ea.call(o)), Vt.call(i, o) ? i[o].push(l) : i[o] = [l];
        }, Dt), yx = Lt(Bi);
        function Sr(i) {
          return Fr(i) ? Ol(i) : Es(i);
        }
        function Lr(i) {
          return Fr(i) ? Ol(i, !0) : J0(i);
        }
        function Sx(i, o) {
          var l = {};
          return o = Dt(o, 3), we(i, function(g, S, R) {
            ze(l, o(g, S, R), g);
          }), l;
        }
        function bx(i, o) {
          var l = {};
          return o = Dt(o, 3), we(i, function(g, S, R) {
            ze(l, S, o(g, S, R));
          }), l;
        }
        var Cx = $n(function(i, o, l) {
          La(i, o, l);
        }), rv = $n(function(i, o, l, g) {
          La(i, o, l, g);
        }), Ex = Fe(function(i, o) {
          var l = {};
          if (i == null)
            return l;
          var g = !1;
          o = ir(o, function(R) {
            return R = tn(R, i), g || (g = R.length > 1), R;
          }), De(i, Ls(i), l), g && (l = ee(l, h | d | m, _1));
          for (var S = o.length; S--; )
            Os(l, o[S]);
          return l;
        });
        function wx(i, o) {
          return ev(i, ja(Dt(o)));
        }
        var Dx = Fe(function(i, o) {
          return i == null ? {} : j0(i, o);
        });
        function ev(i, o) {
          if (i == null)
            return {};
          var l = ir(Ls(i), function(g) {
            return [g];
          });
          return o = Dt(o), $l(i, l, function(g, S) {
            return o(g, S[0]);
          });
        }
        function Mx(i, o, l) {
          o = tn(o, i);
          var g = -1, S = o.length;
          for (S || (S = 1, i = r); ++g < S; ) {
            var R = i == null ? r : i[Me(o[g])];
            R === r && (g = S, R = l), i = We(R) ? R.call(i) : R;
          }
          return i;
        }
        function Rx(i, o, l) {
          return i == null ? i : Gi(i, o, l);
        }
        function Tx(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Gi(i, o, l, g);
        }
        var nv = hc(Sr), iv = hc(Lr);
        function Ox(i, o, l) {
          var g = Pt(i), S = g || en(i) || Zn(i);
          if (o = Dt(o, 4), l == null) {
            var R = i && i.constructor;
            S ? l = g ? new R() : [] : ar(i) ? l = We(R) ? Un(Ma(i)) : {} : l = {};
          }
          return (S ? jr : we)(i, function(A, G, k) {
            return o(l, A, G, k);
          }), l;
        }
        function Ix(i, o) {
          return i == null ? !0 : Os(i, o);
        }
        function Px(i, o, l) {
          return i == null ? i : Ql(i, o, As(l));
        }
        function Ax(i, o, l, g) {
          return g = typeof g == "function" ? g : r, i == null ? i : Ql(i, o, As(l), g);
        }
        function Jn(i) {
          return i == null ? [] : cs(i, Sr(i));
        }
        function Bx(i) {
          return i == null ? [] : cs(i, Lr(i));
        }
        function zx(i, o, l) {
          return l === r && (l = o, o = r), l !== r && (l = ae(l), l = l === l ? l : 0), o !== r && (o = ae(o), o = o === o ? o : 0), yn(ae(i), o, l);
        }
        function Gx(i, o, l) {
          return o = Ne(o), l === r ? (l = o, o = 0) : l = Ne(l), i = ae(i), H0(i, o, l);
        }
        function Fx(i, o, l) {
          if (l && typeof l != "boolean" && Tr(i, o, l) && (o = l = r), l === r && (typeof o == "boolean" ? (l = o, o = r) : typeof i == "boolean" && (l = i, i = r)), i === r && o === r ? (i = 0, o = 1) : (i = Ne(i), o === r ? (o = i, i = 0) : o = Ne(o)), i > o) {
            var g = i;
            i = o, o = g;
          }
          if (l || i % 1 || o % 1) {
            var S = Rl();
            return wr(i + S * (o - i + hg("1e-" + ((S + "").length - 1))), o);
          }
          return Ms(i, o);
        }
        var Lx = Vn(function(i, o, l) {
          return o = o.toLowerCase(), i + (l ? av(o) : o);
        });
        function av(i) {
          return tu($t(i).toLowerCase());
        }
        function ov(i) {
          return i = $t(i), i && i.replace(Nh, Rg).replace(ag, "");
        }
        function Wx(i, o, l) {
          i = $t(i), o = $r(o);
          var g = i.length;
          l = l === r ? g : yn(Gt(l), 0, g);
          var S = l;
          return l -= o.length, l >= 0 && i.slice(l, S) == o;
        }
        function Nx(i) {
          return i = $t(i), i && Vo.test(i) ? i.replace(Ei, Tg) : i;
        }
        function kx(i) {
          return i = $t(i), i && Dh.test(i) ? i.replace(Ko, "\\$&") : i;
        }
        var Hx = Vn(function(i, o, l) {
          return i + (l ? "-" : "") + o.toLowerCase();
        }), Yx = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toLowerCase();
        }), Xx = fc("toLowerCase");
        function qx(i, o, l) {
          i = $t(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          if (!o || g >= o)
            return i;
          var S = (o - g) / 2;
          return Xa(Ia(S), l) + i + Xa(Oa(S), l);
        }
        function Ux(i, o, l) {
          i = $t(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? i + Xa(o - g, l) : i;
        }
        function $x(i, o, l) {
          i = $t(i), o = Gt(o);
          var g = o ? kn(i) : 0;
          return o && g < o ? Xa(o - g, l) + i : i;
        }
        function Vx(i, o, l) {
          return l || o == null ? o = 0 : o && (o = +o), r0($t(i).replace(Zo, ""), o || 0);
        }
        function Kx(i, o, l) {
          return (l ? Tr(i, o, l) : o === r) ? o = 1 : o = Gt(o), Rs($t(i), o);
        }
        function Zx() {
          var i = arguments, o = $t(i[0]);
          return i.length < 3 ? o : o.replace(i[1], i[2]);
        }
        var Jx = Vn(function(i, o, l) {
          return i + (l ? "_" : "") + o.toLowerCase();
        });
        function Qx(i, o, l) {
          return l && typeof l != "number" && Tr(i, o, l) && (o = l = r), l = l === r ? U : l >>> 0, l ? (i = $t(i), i && (typeof o == "string" || o != null && !Js(o)) && (o = $r(o), !o && Nn(i)) ? rn(ve(i), 0, l) : i.split(o, l)) : [];
        }
        var jx = Vn(function(i, o, l) {
          return i + (l ? " " : "") + tu(o);
        });
        function ty(i, o, l) {
          return i = $t(i), l = l == null ? 0 : yn(Gt(l), 0, i.length), o = $r(o), i.slice(l, l + o.length) == o;
        }
        function ry(i, o, l) {
          var g = C.templateSettings;
          l && Tr(i, o, l) && (o = r), i = $t(i), o = eo({}, o, g, gc);
          var S = eo({}, o.imports, g.imports, gc), R = Sr(S), A = cs(S, R), G, k, K = 0, Z = o.interpolate || ha, tt = "__p += '", ct = ps(
            (o.escape || ha).source + "|" + Z.source + "|" + (Z === Lf ? Bh : ha).source + "|" + (o.evaluate || ha).source + "|$",
            "g"
          ), xt = "//# sourceURL=" + (Vt.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++lg + "]") + `
`;
          i.replace(ct, function(Rt, Nt, Xt, Kr, Or, Zr) {
            return Xt || (Xt = Kr), tt += i.slice(K, Zr).replace(kh, Og), Nt && (G = !0, tt += `' +
__e(` + Nt + `) +
'`), Or && (k = !0, tt += `';
` + Or + `;
__p += '`), Xt && (tt += `' +
((__t = (` + Xt + `)) == null ? '' : __t) +
'`), K = Zr + Rt.length, Rt;
          }), tt += `';
`;
          var Mt = Vt.call(o, "variable") && o.variable;
          if (!Mt)
            tt = `with (obj) {
` + tt + `
}
`;
          else if (Ph.test(Mt))
            throw new It(f);
          tt = (k ? tt.replace($o, "") : tt).replace(Ci, "$1").replace(Kt, "$1;"), tt = "function(" + (Mt || "obj") + `) {
` + (Mt ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (G ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + tt + `return __p
}`;
          var Ft = uv(function() {
            return Ut(R, xt + "return " + tt).apply(r, A);
          });
          if (Ft.source = tt, Zs(Ft))
            throw Ft;
          return Ft;
        }
        function ey(i) {
          return $t(i).toLowerCase();
        }
        function ny(i) {
          return $t(i).toUpperCase();
        }
        function iy(i, o, l) {
          if (i = $t(i), i && (l || o === r))
            return ml(i);
          if (!i || !(o = $r(o)))
            return i;
          var g = ve(i), S = ve(o), R = _l(g, S), A = xl(g, S) + 1;
          return rn(g, R, A).join("");
        }
        function ay(i, o, l) {
          if (i = $t(i), i && (l || o === r))
            return i.slice(0, Sl(i) + 1);
          if (!i || !(o = $r(o)))
            return i;
          var g = ve(i), S = xl(g, ve(o)) + 1;
          return rn(g, 0, S).join("");
        }
        function oy(i, o, l) {
          if (i = $t(i), i && (l || o === r))
            return i.replace(Zo, "");
          if (!i || !(o = $r(o)))
            return i;
          var g = ve(i), S = _l(g, ve(o));
          return rn(g, S).join("");
        }
        function sy(i, o) {
          var l = B, g = H;
          if (ar(o)) {
            var S = "separator" in o ? o.separator : S;
            l = "length" in o ? Gt(o.length) : l, g = "omission" in o ? $r(o.omission) : g;
          }
          i = $t(i);
          var R = i.length;
          if (Nn(i)) {
            var A = ve(i);
            R = A.length;
          }
          if (l >= R)
            return i;
          var G = l - kn(g);
          if (G < 1)
            return g;
          var k = A ? rn(A, 0, G).join("") : i.slice(0, G);
          if (S === r)
            return k + g;
          if (A && (G += k.length - G), Js(S)) {
            if (i.slice(G).search(S)) {
              var K, Z = k;
              for (S.global || (S = ps(S.source, $t(Wf.exec(S)) + "g")), S.lastIndex = 0; K = S.exec(Z); )
                var tt = K.index;
              k = k.slice(0, tt === r ? G : tt);
            }
          } else if (i.indexOf($r(S), G) != G) {
            var ct = k.lastIndexOf(S);
            ct > -1 && (k = k.slice(0, ct));
          }
          return k + g;
        }
        function uy(i) {
          return i = $t(i), i && da.test(i) ? i.replace(yr, Fg) : i;
        }
        var fy = Vn(function(i, o, l) {
          return i + (l ? " " : "") + o.toUpperCase();
        }), tu = fc("toUpperCase");
        function sv(i, o, l) {
          return i = $t(i), o = l ? r : o, o === r ? Pg(i) ? Ng(i) : Cg(i) : i.match(o) || [];
        }
        var uv = Lt(function(i, o) {
          try {
            return qr(i, r, o);
          } catch (l) {
            return Zs(l) ? l : new It(l);
          }
        }), ly = Fe(function(i, o) {
          return jr(o, function(l) {
            l = Me(l), ze(i, l, Vs(i[l], i));
          }), i;
        });
        function cy(i) {
          var o = i == null ? 0 : i.length, l = Dt();
          return i = o ? ir(i, function(g) {
            if (typeof g[1] != "function")
              throw new te(u);
            return [l(g[0]), g[1]];
          }) : [], Lt(function(g) {
            for (var S = -1; ++S < o; ) {
              var R = i[S];
              if (qr(R[0], this, g))
                return qr(R[1], this, g);
            }
          });
        }
        function vy(i) {
          return F0(ee(i, h));
        }
        function ru(i) {
          return function() {
            return i;
          };
        }
        function py(i, o) {
          return i == null || i !== i ? o : i;
        }
        var dy = cc(), hy = cc(!0);
        function Wr(i) {
          return i;
        }
        function eu(i) {
          return kl(typeof i == "function" ? i : ee(i, h));
        }
        function gy(i) {
          return Yl(ee(i, h));
        }
        function my(i, o) {
          return Xl(i, ee(o, h));
        }
        var _y = Lt(function(i, o) {
          return function(l) {
            return Bi(l, i, o);
          };
        }), xy = Lt(function(i, o) {
          return function(l) {
            return Bi(i, l, o);
          };
        });
        function nu(i, o, l) {
          var g = Sr(o), S = Fa(o, g);
          l == null && !(ar(o) && (S.length || !g.length)) && (l = o, o = i, i = this, S = Fa(o, Sr(o)));
          var R = !(ar(l) && "chain" in l) || !!l.chain, A = We(i);
          return jr(S, function(G) {
            var k = o[G];
            i[G] = k, A && (i.prototype[G] = function() {
              var K = this.__chain__;
              if (R || K) {
                var Z = i(this.__wrapped__), tt = Z.__actions__ = Gr(this.__actions__);
                return tt.push({ func: k, args: arguments, thisArg: i }), Z.__chain__ = K, Z;
              }
              return k.apply(i, Ke([this.value()], arguments));
            });
          }), i;
        }
        function yy() {
          return br._ === this && (br._ = Ug), this;
        }
        function iu() {
        }
        function Sy(i) {
          return i = Gt(i), Lt(function(o) {
            return ql(o, i);
          });
        }
        var by = zs(ir), Cy = zs(vl), Ey = zs(os);
        function fv(i) {
          return Hs(i) ? ss(Me(i)) : t1(i);
        }
        function wy(i) {
          return function(o) {
            return i == null ? r : Sn(i, o);
          };
        }
        var Dy = pc(), My = pc(!0);
        function au() {
          return [];
        }
        function ou() {
          return !1;
        }
        function Ry() {
          return {};
        }
        function Ty() {
          return "";
        }
        function Oy() {
          return !0;
        }
        function Iy(i, o) {
          if (i = Gt(i), i < 1 || i > V)
            return [];
          var l = U, g = wr(i, U);
          o = Dt(o), i -= U;
          for (var S = ls(g, o); ++l < i; )
            o(l);
          return S;
        }
        function Py(i) {
          return Pt(i) ? ir(i, Me) : Vr(i) ? [i] : Gr(Tc($t(i)));
        }
        function Ay(i) {
          var o = ++Xg;
          return $t(i) + o;
        }
        var By = Ya(function(i, o) {
          return i + o;
        }, 0), zy = Gs("ceil"), Gy = Ya(function(i, o) {
          return i / o;
        }, 1), Fy = Gs("floor");
        function Ly(i) {
          return i && i.length ? Ga(i, Wr, Ss) : r;
        }
        function Wy(i, o) {
          return i && i.length ? Ga(i, Dt(o, 2), Ss) : r;
        }
        function Ny(i) {
          return hl(i, Wr);
        }
        function ky(i, o) {
          return hl(i, Dt(o, 2));
        }
        function Hy(i) {
          return i && i.length ? Ga(i, Wr, ws) : r;
        }
        function Yy(i, o) {
          return i && i.length ? Ga(i, Dt(o, 2), ws) : r;
        }
        var Xy = Ya(function(i, o) {
          return i * o;
        }, 1), qy = Gs("round"), Uy = Ya(function(i, o) {
          return i - o;
        }, 0);
        function $y(i) {
          return i && i.length ? fs(i, Wr) : 0;
        }
        function Vy(i, o) {
          return i && i.length ? fs(i, Dt(o, 2)) : 0;
        }
        return C.after = g_, C.ary = Nc, C.assign = nx, C.assignIn = tv, C.assignInWith = eo, C.assignWith = ix, C.at = ax, C.before = kc, C.bind = Vs, C.bindAll = ly, C.bindKey = Hc, C.castArray = R_, C.chain = Fc, C.chunk = F1, C.compact = L1, C.concat = W1, C.cond = cy, C.conforms = vy, C.constant = ru, C.countBy = $m, C.create = ox, C.curry = Yc, C.curryRight = Xc, C.debounce = qc, C.defaults = sx, C.defaultsDeep = ux, C.defer = m_, C.delay = __, C.difference = N1, C.differenceBy = k1, C.differenceWith = H1, C.drop = Y1, C.dropRight = X1, C.dropRightWhile = q1, C.dropWhile = U1, C.fill = $1, C.filter = Km, C.flatMap = Qm, C.flatMapDeep = jm, C.flatMapDepth = t_, C.flatten = Ac, C.flattenDeep = V1, C.flattenDepth = K1, C.flip = x_, C.flow = dy, C.flowRight = hy, C.fromPairs = Z1, C.functions = hx, C.functionsIn = gx, C.groupBy = r_, C.initial = Q1, C.intersection = j1, C.intersectionBy = tm, C.intersectionWith = rm, C.invert = _x, C.invertBy = xx, C.invokeMap = n_, C.iteratee = eu, C.keyBy = i_, C.keys = Sr, C.keysIn = Lr, C.map = Za, C.mapKeys = Sx, C.mapValues = bx, C.matches = gy, C.matchesProperty = my, C.memoize = Qa, C.merge = Cx, C.mergeWith = rv, C.method = _y, C.methodOf = xy, C.mixin = nu, C.negate = ja, C.nthArg = Sy, C.omit = Ex, C.omitBy = wx, C.once = y_, C.orderBy = a_, C.over = by, C.overArgs = S_, C.overEvery = Cy, C.overSome = Ey, C.partial = Ks, C.partialRight = Uc, C.partition = o_, C.pick = Dx, C.pickBy = ev, C.property = fv, C.propertyOf = wy, C.pull = am, C.pullAll = zc, C.pullAllBy = om, C.pullAllWith = sm, C.pullAt = um, C.range = Dy, C.rangeRight = My, C.rearg = b_, C.reject = f_, C.remove = fm, C.rest = C_, C.reverse = Us, C.sampleSize = c_, C.set = Rx, C.setWith = Tx, C.shuffle = v_, C.slice = lm, C.sortBy = h_, C.sortedUniq = mm, C.sortedUniqBy = _m, C.split = Qx, C.spread = E_, C.tail = xm, C.take = ym, C.takeRight = Sm, C.takeRightWhile = bm, C.takeWhile = Cm, C.tap = Lm, C.throttle = w_, C.thru = Ka, C.toArray = Jc, C.toPairs = nv, C.toPairsIn = iv, C.toPath = Py, C.toPlainObject = jc, C.transform = Ox, C.unary = D_, C.union = Em, C.unionBy = wm, C.unionWith = Dm, C.uniq = Mm, C.uniqBy = Rm, C.uniqWith = Tm, C.unset = Ix, C.unzip = $s, C.unzipWith = Gc, C.update = Px, C.updateWith = Ax, C.values = Jn, C.valuesIn = Bx, C.without = Om, C.words = sv, C.wrap = M_, C.xor = Im, C.xorBy = Pm, C.xorWith = Am, C.zip = Bm, C.zipObject = zm, C.zipObjectDeep = Gm, C.zipWith = Fm, C.entries = nv, C.entriesIn = iv, C.extend = tv, C.extendWith = eo, nu(C, C), C.add = By, C.attempt = uv, C.camelCase = Lx, C.capitalize = av, C.ceil = zy, C.clamp = zx, C.clone = T_, C.cloneDeep = I_, C.cloneDeepWith = P_, C.cloneWith = O_, C.conformsTo = A_, C.deburr = ov, C.defaultTo = py, C.divide = Gy, C.endsWith = Wx, C.eq = de, C.escape = Nx, C.escapeRegExp = kx, C.every = Vm, C.find = Zm, C.findIndex = Ic, C.findKey = fx, C.findLast = Jm, C.findLastIndex = Pc, C.findLastKey = lx, C.floor = Fy, C.forEach = Lc, C.forEachRight = Wc, C.forIn = cx, C.forInRight = vx, C.forOwn = px, C.forOwnRight = dx, C.get = Qs, C.gt = B_, C.gte = z_, C.has = mx, C.hasIn = js, C.head = Bc, C.identity = Wr, C.includes = e_, C.indexOf = J1, C.inRange = Gx, C.invoke = yx, C.isArguments = En, C.isArray = Pt, C.isArrayBuffer = G_, C.isArrayLike = Fr, C.isArrayLikeObject = fr, C.isBoolean = F_, C.isBuffer = en, C.isDate = L_, C.isElement = W_, C.isEmpty = N_, C.isEqual = k_, C.isEqualWith = H_, C.isError = Zs, C.isFinite = Y_, C.isFunction = We, C.isInteger = $c, C.isLength = to, C.isMap = Vc, C.isMatch = X_, C.isMatchWith = q_, C.isNaN = U_, C.isNative = $_, C.isNil = K_, C.isNull = V_, C.isNumber = Kc, C.isObject = ar, C.isObjectLike = sr, C.isPlainObject = Ni, C.isRegExp = Js, C.isSafeInteger = Z_, C.isSet = Zc, C.isString = ro, C.isSymbol = Vr, C.isTypedArray = Zn, C.isUndefined = J_, C.isWeakMap = Q_, C.isWeakSet = j_, C.join = em, C.kebabCase = Hx, C.last = ie, C.lastIndexOf = nm, C.lowerCase = Yx, C.lowerFirst = Xx, C.lt = tx, C.lte = rx, C.max = Ly, C.maxBy = Wy, C.mean = Ny, C.meanBy = ky, C.min = Hy, C.minBy = Yy, C.stubArray = au, C.stubFalse = ou, C.stubObject = Ry, C.stubString = Ty, C.stubTrue = Oy, C.multiply = Xy, C.nth = im, C.noConflict = yy, C.noop = iu, C.now = Ja, C.pad = qx, C.padEnd = Ux, C.padStart = $x, C.parseInt = Vx, C.random = Fx, C.reduce = s_, C.reduceRight = u_, C.repeat = Kx, C.replace = Zx, C.result = Mx, C.round = qy, C.runInContext = N, C.sample = l_, C.size = p_, C.snakeCase = Jx, C.some = d_, C.sortedIndex = cm, C.sortedIndexBy = vm, C.sortedIndexOf = pm, C.sortedLastIndex = dm, C.sortedLastIndexBy = hm, C.sortedLastIndexOf = gm, C.startCase = jx, C.startsWith = ty, C.subtract = Uy, C.sum = $y, C.sumBy = Vy, C.template = ry, C.times = Iy, C.toFinite = Ne, C.toInteger = Gt, C.toLength = Qc, C.toLower = ey, C.toNumber = ae, C.toSafeInteger = ex, C.toString = $t, C.toUpper = ny, C.trim = iy, C.trimEnd = ay, C.trimStart = oy, C.truncate = sy, C.unescape = uy, C.uniqueId = Ay, C.upperCase = fy, C.upperFirst = tu, C.each = Lc, C.eachRight = Wc, C.first = Bc, nu(C, (function() {
          var i = {};
          return we(C, function(o, l) {
            Vt.call(C.prototype, l) || (i[l] = o);
          }), i;
        })(), { chain: !1 }), C.VERSION = n, jr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(i) {
          C[i].placeholder = C;
        }), jr(["drop", "take"], function(i, o) {
          Ht.prototype[i] = function(l) {
            l = l === r ? 1 : gr(Gt(l), 0);
            var g = this.__filtered__ && !o ? new Ht(this) : this.clone();
            return g.__filtered__ ? g.__takeCount__ = wr(l, g.__takeCount__) : g.__views__.push({
              size: wr(l, U),
              type: i + (g.__dir__ < 0 ? "Right" : "")
            }), g;
          }, Ht.prototype[i + "Right"] = function(l) {
            return this.reverse()[i](l).reverse();
          };
        }), jr(["filter", "map", "takeWhile"], function(i, o) {
          var l = o + 1, g = l == Y || l == Q;
          Ht.prototype[i] = function(S) {
            var R = this.clone();
            return R.__iteratees__.push({
              iteratee: Dt(S, 3),
              type: l
            }), R.__filtered__ = R.__filtered__ || g, R;
          };
        }), jr(["head", "last"], function(i, o) {
          var l = "take" + (o ? "Right" : "");
          Ht.prototype[i] = function() {
            return this[l](1).value()[0];
          };
        }), jr(["initial", "tail"], function(i, o) {
          var l = "drop" + (o ? "" : "Right");
          Ht.prototype[i] = function() {
            return this.__filtered__ ? new Ht(this) : this[l](1);
          };
        }), Ht.prototype.compact = function() {
          return this.filter(Wr);
        }, Ht.prototype.find = function(i) {
          return this.filter(i).head();
        }, Ht.prototype.findLast = function(i) {
          return this.reverse().find(i);
        }, Ht.prototype.invokeMap = Lt(function(i, o) {
          return typeof i == "function" ? new Ht(this) : this.map(function(l) {
            return Bi(l, i, o);
          });
        }), Ht.prototype.reject = function(i) {
          return this.filter(ja(Dt(i)));
        }, Ht.prototype.slice = function(i, o) {
          i = Gt(i);
          var l = this;
          return l.__filtered__ && (i > 0 || o < 0) ? new Ht(l) : (i < 0 ? l = l.takeRight(-i) : i && (l = l.drop(i)), o !== r && (o = Gt(o), l = o < 0 ? l.dropRight(-o) : l.take(o - i)), l);
        }, Ht.prototype.takeRightWhile = function(i) {
          return this.reverse().takeWhile(i).reverse();
        }, Ht.prototype.toArray = function() {
          return this.take(U);
        }, we(Ht.prototype, function(i, o) {
          var l = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), S = C[g ? "take" + (o == "last" ? "Right" : "") : o], R = g || /^find/.test(o);
          S && (C.prototype[o] = function() {
            var A = this.__wrapped__, G = g ? [1] : arguments, k = A instanceof Ht, K = G[0], Z = k || Pt(A), tt = function(Nt) {
              var Xt = S.apply(C, Ke([Nt], G));
              return g && ct ? Xt[0] : Xt;
            };
            Z && l && typeof K == "function" && K.length != 1 && (k = Z = !1);
            var ct = this.__chain__, xt = !!this.__actions__.length, Mt = R && !ct, Ft = k && !xt;
            if (!R && Z) {
              A = Ft ? A : new Ht(this);
              var Rt = i.apply(A, G);
              return Rt.__actions__.push({ func: Ka, args: [tt], thisArg: r }), new re(Rt, ct);
            }
            return Mt && Ft ? i.apply(this, G) : (Rt = this.thru(tt), Mt ? g ? Rt.value()[0] : Rt.value() : Rt);
          });
        }), jr(["pop", "push", "shift", "sort", "splice", "unshift"], function(i) {
          var o = Sa[i], l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(i);
          C.prototype[i] = function() {
            var S = arguments;
            if (g && !this.__chain__) {
              var R = this.value();
              return o.apply(Pt(R) ? R : [], S);
            }
            return this[l](function(A) {
              return o.apply(Pt(A) ? A : [], S);
            });
          };
        }), we(Ht.prototype, function(i, o) {
          var l = C[o];
          if (l) {
            var g = l.name + "";
            Vt.call(qn, g) || (qn[g] = []), qn[g].push({ name: o, func: l });
          }
        }), qn[Ha(r, b).name] = [{
          name: "wrapper",
          func: r
        }], Ht.prototype.clone = u0, Ht.prototype.reverse = f0, Ht.prototype.value = l0, C.prototype.at = Wm, C.prototype.chain = Nm, C.prototype.commit = km, C.prototype.next = Hm, C.prototype.plant = Xm, C.prototype.reverse = qm, C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = Um, C.prototype.first = C.prototype.head, Mi && (C.prototype[Mi] = Ym), C;
      }), Hn = kg();
      gn ? ((gn.exports = Hn)._ = Hn, es._ = Hn) : br._ = Hn;
    }).call(sS);
  })(ki, ki.exports)), ki.exports;
}
var dp = uS();
function hp(t = "") {
  const e = jy(t), r = tS(t), n = pp(), a = Nr({
    x: 0,
    y: 0,
    width: 300,
    height: 150,
    visible: !1
  });
  return {
    layoutStore: e,
    widgetStore: r,
    clipboardStore: n,
    ghostPlaceholder: a,
    processDropCoordinates: (M, D) => {
      const { clientX: w, clientY: O } = M, { left: I, top: P } = D.getBoundingClientRect(), B = w - I, H = O - P;
      return { dropX: B, dropY: H };
    },
    processDragOverCoordinates: (M, D) => {
      const { clientX: w, clientY: O } = M, { left: I, top: P } = D.getBoundingClientRect(), B = w - I, H = O - P;
      a.value.x = B - a.value.width / 2, a.value.y = H - a.value.height / 2, a.value.visible = !0;
    },
    hidePlaceholder: () => {
      a.value.visible = !1;
    },
    getInitialStyle: (M) => {
      const D = e?.layout?.find((w) => w.id === M);
      return D ? {
        width: `${D.width}px`,
        height: `${D.height}px`,
        transform: `translate(${D.x}px, ${D.y}px)`,
        "z-index": D.z
      } : {};
    },
    getMovableControlStyles: (M) => {
      const D = e.layout.find((w) => w.id === M);
      return D ? {
        "z-index": D.z
      } : {};
    },
    drag: (M, D) => {
      const w = e.layout.find((O) => O.id === M);
      w && (w.x = D.translate[0], w.y = D.translate[1], D.target.style.transform = D.transform);
    },
    resize: (M, D) => {
      const w = e.layout.find((O) => O.id === M);
      w && (w.width = D.width, w.height = D.height, w.x = D.drag.translate[0], w.y = D.drag.translate[1], D.target.style.width = `${D.width}px`, D.target.style.height = `${D.height}px`, D.target.style.transform = D.drag.transform);
    },
    moveUp: (M) => {
      const D = e.layout.find((w) => w.id === M);
      D && (D.z += 1);
    },
    moveDown: (M) => {
      const D = e.layout.find((w) => w.id === M);
      D && (D.z -= 1);
    },
    moveToTop: (M) => {
      const D = Math.max(...e.layout.map((O) => O.z)), w = e.layout.find((O) => O.id === M);
      w && (w.z = D + 1);
    },
    moveToBottom: (M) => {
      const D = Math.min(...e.layout.map((O) => O.z)), w = e.layout.find((O) => O.id === M);
      w && (w.z = D - 1);
    },
    addWidget: (M, D = {}, w = {}, O = {}) => {
      const I = r.createWidget(M, D, w), P = {
        id: I,
        width: O.width || 300,
        height: O.height || 150,
        x: O.x || 0,
        y: O.y || 0,
        z: O.z || Math.max(...e.layout.map((B) => B.z), 0) + 1
      };
      return e.layout.push(P), I;
    },
    removeWidget: (M) => {
      r.removeWidget(M);
      const D = e.layout.findIndex((w) => w.id === M);
      D > -1 && e.layout.splice(D, 1);
    },
    copyWidget: (M) => {
      const D = r.widgets.find((O) => O.uid === M), w = e.layout.find((O) => O.id === M);
      D && w && n.copy(D, w);
    },
    pasteWidget: (M, D) => {
      const w = n.paste();
      if (!w) return null;
      const O = "li_" + Math.random().toString(36).substring(7), I = Math.max(...e.layout.map((H) => H.z), 0), P = dp.cloneDeep(w.widget);
      P.uid = O, P.config?.settings && (P.config.settings.name = "widget_" + O);
      const B = {
        ...w.layout,
        id: O,
        x: M,
        y: D,
        z: I + 1
      };
      return r.widgets.push(P), e.layout.push(B), O;
    }
  };
}
const fS = { class: "widget-board" }, lS = { class: "dashboard-item" }, cS = /* @__PURE__ */ Qu({
  __name: "View",
  props: {
    pageId: {}
  },
  setup(t) {
    const e = t, r = vp(), n = e.pageId ?? r.params.pageid ?? "", {
      widgetStore: a,
      getInitialStyle: s
    } = hp(n || ""), u = up(iS.TINY_EMITTER);
    return fp(async () => {
      console.log("Base View component mounted for page:", n), await Cu(), console.log("📄 Emitting system:pageLoaded for page:", n), u.emit("system:pageLoaded", { pageId: n });
    }), (f, c) => (ue(), _e("div", fS, [
      (ue(!0), _e(xo, null, Eu(ur(a)?.widgets || [], (v) => (ue(), _e("div", {
        key: v.uid,
        class: lp(`${v.uid} dashboard-item-container`),
        style: on(ur(s)(v.uid)),
        ref_for: !0,
        ref: v.uid
      }, [
        me("div", lS, [
          se(ur(cp), {
            widget: v,
            ref_for: !0,
            ref: `${v.uid}_wrapper`,
            editEnabled: !1
          }, null, 8, ["widget"])
        ])
      ], 6))), 128))
    ]));
  }
}), gp = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, vS = /* @__PURE__ */ gp(cS, [["__scopeId", "data-v-6934652c"]]);
function pS(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return e.map(function(n) {
    return n.split(" ").map(function(a) {
      return a ? "" + t + a : "";
    }).join(" ");
  }).join(" ");
}
function dS(t, e) {
  return e.replace(/([^}{]*){/gm, function(r, n) {
    return n.replace(/\.([^{,\s\d.]+)/g, "." + t + "$1") + "{";
  });
}
function He(t, e) {
  return function(r) {
    r && (t[e] = r);
  };
}
function mp(t, e, r) {
  return function(n) {
    n && (t[e][r] = n);
  };
}
function pv(t, e) {
  return function(r) {
    var n = r.prototype;
    t.forEach(function(a) {
      e(n, a);
    });
  };
}
function hS(t, e) {
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
var gS = "function", mS = "object", _S = "string", xS = "number", ju = "undefined", _p = typeof window !== ju, yS = typeof document !== ju && document, SS = [{
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
}], pr = 1e-7, io = {
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
function bS() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
function bo(t, e, r, n) {
  return (t * n + e * r) / (r + n);
}
function na(t) {
  return typeof t === ju;
}
function be(t) {
  return t && typeof t === mS;
}
function dr(t) {
  return Array.isArray(t);
}
function Hr(t) {
  return typeof t === _S;
}
function si(t) {
  return typeof t === xS;
}
function tf(t) {
  return typeof t === gS;
}
function CS(t, e) {
  var r = t === "" || t == " ", n = e === "" || e == " ";
  return n && r || t === e;
}
function xp(t, e, r, n, a) {
  var s = rf(t, e, r);
  return s ? r : ES(t, e, r + 1, n, a);
}
function rf(t, e, r) {
  if (!t.ignore)
    return null;
  var n = e.slice(Math.max(r - 3, 0), r + 3).join("");
  return new RegExp(t.ignore).exec(n);
}
function ES(t, e, r, n, a) {
  for (var s = function(v) {
    var p = e[v].trim();
    if (p === t.close && !rf(t, e, v))
      return {
        value: v
      };
    var h = v, d = Yr(a, function(m) {
      var _ = m.open;
      return _ === p;
    });
    if (d && (h = xp(d, e, v, n, a)), h === -1)
      return u = v, "break";
    v = h, u = v;
  }, u, f = r; f < n; ++f) {
    var c = s(f);
    if (f = u, typeof c == "object") return c.value;
    if (c === "break") break;
  }
  return -1;
}
function ef(t, e) {
  var r = Hr(e) ? {
    separator: e
  } : e, n = r.separator, a = n === void 0 ? "," : n, s = r.isSeparateFirst, u = r.isSeparateOnlyOpenClose, f = r.isSeparateOpenClose, c = f === void 0 ? u : f, v = r.openCloseCharacters, p = v === void 0 ? SS : v, h = p.map(function(O) {
    var I = O.open, P = O.close;
    return I === P ? I : I + "|" + P;
  }).join("|"), d = "(\\s*" + a + "\\s*|" + h + "|\\s+)", m = new RegExp(d, "g"), _ = t.split(m).filter(function(O) {
    return O && O !== "undefined";
  }), x = _.length, y = [], b = [];
  function E() {
    return b.length ? (y.push(b.join("")), b = [], !0) : !1;
  }
  for (var T = function(O) {
    var I = _[O].trim(), P = O, B = Yr(p, function(L) {
      var Y = L.open;
      return Y === I;
    }), H = Yr(p, function(L) {
      var Y = L.close;
      return Y === I;
    });
    if (B) {
      if (P = xp(B, _, O, x, p), P !== -1 && c)
        return E() && s || (y.push(_.slice(O, P + 1).join("")), O = P, s) ? (M = O, "break") : (M = O, "continue");
    } else if (H && !rf(H, _, O)) {
      var W = bS(p);
      return W.splice(p.indexOf(H), 1), {
        value: ef(t, {
          separator: a,
          isSeparateFirst: s,
          isSeparateOnlyOpenClose: u,
          isSeparateOpenClose: c,
          openCloseCharacters: W
        })
      };
    } else if (CS(I, a) && !u)
      return E(), s ? (M = O, "break") : (M = O, "continue");
    P === -1 && (P = x - 1), b.push(_.slice(O, P + 1).join("")), O = P, M = O;
  }, M, D = 0; D < x; ++D) {
    var w = T(D);
    if (D = M, typeof w == "object") return w.value;
    if (w === "break") break;
  }
  return b.length && y.push(b.join("")), y;
}
function ln(t) {
  return ef(t, "");
}
function Tn(t) {
  return ef(t, ",");
}
function yp(t) {
  var e = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);
  return !e || e.length < 4 ? {} : {
    prefix: e[1],
    value: e[2],
    suffix: e[3]
  };
}
function ia(t) {
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
function wS(t) {
  return t.replace(/[\s-_]+([^\s-_])/g, function(e, r) {
    return r.toUpperCase();
  });
}
function yo(t, e) {
  return t.replace(/([a-z])([A-Z])/g, function(r, n, a) {
    return "" + n + e + a.toLowerCase();
  });
}
function Ji() {
  return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
}
function qe(t, e, r) {
  r === void 0 && (r = -1);
  for (var n = t.length, a = 0; a < n; ++a)
    if (e(t[a], a, t))
      return a;
  return r;
}
function Yr(t, e, r) {
  var n = qe(t, e);
  return n > -1 ? t[n] : r;
}
var Sp = /* @__PURE__ */ (function() {
  var t = Ji(), e = _p && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return e ? e.bind(window) : function(r) {
    var n = Ji(), a = setTimeout(function() {
      r(n - t);
    }, 1e3 / 60);
    return a;
  };
})(), DS = /* @__PURE__ */ (function() {
  var t = _p && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return t ? t.bind(window) : function(e) {
    clearTimeout(e);
  };
})();
function Ue(t) {
  return Object.keys(t);
}
function MS(t) {
  var e = Ue(t);
  return e.map(function(r) {
    return t[r];
  });
}
function Zt(t, e) {
  var r = ia(t), n = r.value, a = r.unit;
  if (be(e)) {
    var s = e[a];
    if (s) {
      if (tf(s))
        return s(n);
      if (io[a])
        return io[a](n, s);
    }
  } else if (a === "%")
    return n * e / 100;
  return io[a] ? io[a](n) : n;
}
function wu(t, e, r) {
  return Math.max(e, Math.min(t, r));
}
function dv(t, e, r, n) {
  return n === void 0 && (n = t[0] / t[1]), [[Ot(e[0], pr), Ot(e[0] / n, pr)], [Ot(e[1] * n, pr), Ot(e[1], pr)]].filter(function(a) {
    return a.every(function(s, u) {
      var f = e[u], c = Ot(f, pr);
      return r ? s <= f || s <= c : s >= f || s >= c;
    });
  })[0] || t;
}
function bp(t, e, r, n) {
  if (!n)
    return t.map(function(m, _) {
      return wu(m, e[_], r[_]);
    });
  var a = t[0], s = t[1], u = n === !0 ? a / s : n, f = dv(t, e, !1, u), c = f[0], v = f[1], p = dv(t, r, !0, u), h = p[0], d = p[1];
  return a < c || s < v ? (a = c, s = v) : (a > h || s > d) && (a = h, s = d), [a, s];
}
function RS(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return r;
}
function Du(t) {
  for (var e = t.length, r = 0, n = e - 1; n >= 0; --n)
    r += t[n];
  return e ? r / e : 0;
}
function cr(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function TS(t) {
  return [0, 1].map(function(e) {
    return Du(t.map(function(r) {
      return r[e];
    }));
  });
}
function hv(t) {
  var e = TS(t), r = cr(e, t[0]), n = cr(e, t[1]);
  return r < n && n - r < Math.PI || r > n && n - r < -Math.PI ? 1 : -1;
}
function Ye(t, e) {
  return Math.sqrt(Math.pow((e ? e[0] : 0) - t[0], 2) + Math.pow((e ? e[1] : 0) - t[1], 2));
}
function Ot(t, e) {
  if (!e)
    return t;
  var r = 1 / e;
  return Math.round(t / e) / r;
}
function gv(t, e) {
  return t.forEach(function(r, n) {
    t[n] = Ot(t[n], e);
  }), t;
}
function OS(t) {
  for (var e = [], r = 0; r < t; ++r)
    e.push(r);
  return e;
}
function Cp(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function Ep(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function _r(t, e) {
  return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
}
function wp(t, e) {
  t.classList ? t.classList.add(e) : t.className += " " + e;
}
function Dp(t, e) {
  if (t.classList)
    t.classList.remove(e);
  else {
    var r = new RegExp("(\\s|^)" + e + "(\\s|$)");
    t.className = t.className.replace(r, " ");
  }
}
function Er(t, e, r, n) {
  t.addEventListener(e, r, n);
}
function mr(t, e, r, n) {
  t.removeEventListener(e, r, n);
}
function di(t) {
  return t?.ownerDocument || yS;
}
function nf(t) {
  return di(t).documentElement;
}
function pn(t) {
  return di(t).body;
}
function fn(t) {
  var e;
  return ((e = t?.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView) || window;
}
function Mp(t) {
  return t && "postMessage" in t && "blur" in t && "self" in t;
}
function hi(t) {
  return be(t) && t.nodeName && t.nodeType && "ownerDocument" in t;
}
var IS = /* @__PURE__ */ (function() {
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
})(), PS = /* @__PURE__ */ (function() {
  function t() {
    this.object = {};
  }
  var e = t.prototype;
  return e.get = function(r) {
    return this.object[r];
  }, e.set = function(r, n) {
    this.object[r] = n;
  }, t;
})(), AS = typeof Map == "function", BS = /* @__PURE__ */ (function() {
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
function zS(t, e) {
  var r = [], n = [];
  return t.forEach(function(a) {
    var s = a[0], u = a[1], f = new BS();
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
var GS = /* @__PURE__ */ (function() {
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
    var r = zS(this.changedBeforeAdded, this.fixed), n = this.changed, a = [];
    this.cacheOrdered = r.filter(function(s, u) {
      var f = s[0], c = s[1], v = n[u], p = v[0], h = v[1];
      if (f !== c)
        return a.push([p, h]), !0;
    }), this.cachePureChanged = a;
  }, t;
})();
function aa(t, e, r) {
  var n = AS ? Map : r ? PS : IS, a = r || function(E) {
    return E;
  }, s = [], u = [], f = [], c = t.map(a), v = e.map(a), p = new n(), h = new n(), d = [], m = [], _ = {}, x = [], y = 0, b = 0;
  return c.forEach(function(E, T) {
    p.set(E, T);
  }), v.forEach(function(E, T) {
    h.set(E, T);
  }), c.forEach(function(E, T) {
    var M = h.get(E);
    typeof M > "u" ? (++b, u.push(T)) : _[M] = b;
  }), v.forEach(function(E, T) {
    var M = p.get(E);
    typeof M > "u" ? (s.push(T), ++y) : (f.push([M, T]), b = _[T] || 0, d.push([M - b, T - y]), m.push(T === M), M !== T && x.push([M, T]));
  }), u.reverse(), new GS(t, e, s, u, x, f, d, m);
}
var FS = /* @__PURE__ */ (function() {
  function t(r, n) {
    r === void 0 && (r = []), this.findKeyCallback = n, this.list = [].slice.call(r);
  }
  var e = t.prototype;
  return e.update = function(r) {
    var n = [].slice.call(r), a = aa(this.list, n, this.findKeyCallback);
    return this.list = n, a;
  }, t;
})(), Mu = function(t, e) {
  return Mu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Mu(t, e);
};
function oa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Re = function() {
  return Re = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Re.apply(this, arguments);
};
function Rp(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function mv(t, e, r) {
  for (var n = 0, a = e.length, s; n < a; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function _v(t) {
  var e = 0;
  return t.map(function(r) {
    return r == null ? "$compat".concat(++e) : "".concat(r);
  });
}
function Tp(t) {
  var e = [];
  return t.forEach(function(r) {
    e = e.concat(dr(r) ? Tp(r) : r);
  }), e;
}
function fu(t, e) {
  if (!e)
    return t;
  for (var r in e)
    na(t[r]) && (t[r] = e[r]);
  return t;
}
function Co(t, e) {
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
function xv(t) {
  var e = t.className, r = Rp(t, ["className"]);
  return e != null && (r.class = e), delete r.style, delete r.children, r;
}
function yv(t) {
  var e = {}, r = {};
  for (var n in t)
    n.indexOf("on") === 0 ? r[n] = t[n] : e[n] = t[n];
  return [e, r];
}
function zo(t) {
  if (!t)
    return null;
  var e = t.b;
  return hi(e) ? e : zo(t.c);
}
function Op(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Ip(t) {
  t.forEach(function(e) {
    e();
  });
}
function LS() {
  return this.constructor(this.props, this.context);
}
var af = 0, Go = /* @__PURE__ */ (function() {
  function t(r, n, a, s, u, f, c) {
    c === void 0 && (c = {}), this.t = r, this.d = n, this.k = a, this.i = s, this.c = u, this.ref = f, this.ps = c, this.typ = "prov", this._ps = [], this._cs = {}, this._hyd = null, this._sel = !1;
  }
  var e = t.prototype;
  return e.s = function() {
    return !0;
  }, e.u = function(r, n, a, s, u) {
    var f = this, c = f.d, v = MS(n).filter(function(_) {
      return _.$_req;
    }), p = Tp(v.map(function(_) {
      return _.$_subs;
    })), h = Yr(p, function(_) {
      return _.d === c;
    });
    if (f.b && !Hr(a) && !u && !f.s(a.props, s) && !h) {
      var d = p.reduce(function(_, x) {
        var y = x.d;
        return _[0] ? _[0].d === y && _.push(x) : y > c && _.push(x), _;
      }, []);
      return d.forEach(function(_) {
        sa(_, _._ps, [_.o], r, n, !0);
      }), !1;
    }
    f.o = a, f.ss(s);
    var m = f.ps;
    return Hr(a) || (f.ps = a.props, f.ref = a.ref), of(this), f.r(r, n, f.b ? m : {}, s), !0;
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
function Pp() {
  return Object.__CROACT_CURRENT_INSTNACE__;
}
function WS() {
  return af;
}
function NS(t) {
  af = t;
}
function of(t) {
  return Object.__CROACT_CURRENT_INSTNACE__ = t, af = 0, t;
}
var sf = /* @__PURE__ */ (function() {
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
    s.$_timer || (s.$_state = {}), clearTimeout(s.$_timer), s.$_timer = 0, s.$_state = Re(Re({}, s.$_state), r), a ? s.$_setState(n, a) : s.$_timer = window.setTimeout(function() {
      s.$_timer = 0, s.$_setState(n, a);
    });
  }, e.forceUpdate = function(r) {
    this.setState({}, r, !0);
  }, e.componentDidMount = function() {
  }, e.componentDidUpdate = function(r, n) {
  }, e.componentWillUnmount = function() {
  }, e.$_setState = function(r, n) {
    var a = [], s = this.$_p, u = sa(s.c, [s], [s.o], a, s._cs, Re(Re({}, this.state), this.$_state), n);
    u && (r && a.push(r), Ip(a), of(null));
  }, t;
})(), Ap = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  var r = e.prototype;
  return r.shouldComponentUpdate = function(n, a) {
    return Co(this.props, n) || Co(this.state, a);
  }, e;
})(sf);
function Bp(t) {
  var e = function(r) {
    e.current = r;
  };
  return e.current = t, e;
}
function kS(t) {
  return t._fr = !0, t;
}
function HS(t, e, r, n) {
  var a, s;
  return !((a = t?.prototype) === null || a === void 0) && a.render ? s = new t(e, r) : (s = new sf(e, r), s.constructor = t, t._fr ? (n.fr = Bp(), s.render = function() {
    return this.constructor(this.props, n.fr);
  }) : s.render = LS), s.$_p = n, s;
}
var YS = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e(n, a, s, u, f, c, v) {
    v === void 0 && (v = {});
    var p = t.call(this, n, a, s, u, f, c, fu(v, n.defaultProps)) || this;
    return p.typ = "comp", p._usefs = [], p._uefs = [], p._defs = [], p;
  }
  var r = e.prototype;
  return r.s = function(n, a) {
    var s = this.b;
    return s.shouldComponentUpdate(fu(n, this.t.defaultProps), a || s.state) !== !1;
  }, r.r = function(n, a, s) {
    var u, f, c = this, v = c.t;
    c.ps = fu(c.ps, c.t.defaultProps);
    var p = c.ps, h = !c.b, d = v.contextType, m = c.b, _ = d?.get(c);
    c._cs = a, h ? (m = HS(v, p, _, c), c.b = m) : (m.props = p, m.context = _);
    var x = m.state;
    c._usefs = [], c._uefs = [];
    var y = m.render();
    ((f = (u = y?.props) === null || u === void 0 ? void 0 : u.children) === null || f === void 0 ? void 0 : f.length) === 0 && (y.props.children = c.ps.children);
    var b = Re(Re({}, a), m.$_cs);
    sa(c, c._ps, y ? [y] : [], n, b), h ? c._uefs.push(function() {
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
})(Go);
function XS(t, e, r) {
  var n = uf(xv(t), xv(e)), a = n.added, s = n.removed, u = n.changed;
  for (var f in a)
    r.setAttribute(f, a[f]);
  for (var c in u)
    r.setAttribute(c, u[c][1]);
  for (var v in s)
    r.removeAttribute(v);
}
function qS(t, e, r) {
  var n = uf(t, e), a = n.added, s = n.removed;
  for (var u in s)
    r.e(u, !0);
  for (var f in a)
    r.e(f);
}
function uf(t, e) {
  var r = Ue(t), n = Ue(e), a = aa(r, n, function(c) {
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
function US(t, e, r) {
  var n = r.style, a = uf(t, e), s = a.added, u = a.removed, f = a.changed;
  for (var c in s) {
    var v = yo(c, "-");
    n.setProperty(v, s[c]);
  }
  for (var c in f) {
    var p = yo(c, "-");
    n.setProperty(p, f[c][1]);
  }
  for (var c in u) {
    var h = yo(c, "-");
    n.removeProperty(h);
  }
}
function $S(t) {
  return t.replace(/^on/g, "").toLowerCase();
}
var VS = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "elem", n._es = {}, n._svg = !1, n;
  }
  var r = e.prototype;
  return r.e = function(n, a) {
    var s = this, u = s._es, f = s.b, c = $S(n);
    a ? (mr(f, c, u[n]), delete u[n]) : (u[n] = function(v) {
      var p, h;
      (h = (p = s.ps)[n]) === null || h === void 0 || h.call(p, v);
    }, Er(f, c, u[n]));
  }, r.s = function(n) {
    return Co(this.ps, n);
  }, r.r = function(n, a, s) {
    var u, f = this, c = !f.b, v = f.ps;
    if (c) {
      var p = zo(f.c), h = !1;
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
    sa(f, f._ps, v.children, n, a);
    var x = f.b, y = yv(s), b = y[0], E = y[1], T = yv(v), M = T[0], D = T[1];
    return XS(b, M, x), qS(E, D, f), US(s.style || {}, v.style || {}, x), n.push(function() {
      c ? f.md() : f.ud();
    }), !0;
  }, r.un = function() {
    var n = this, a = n._es, s = n.b;
    for (var u in a)
      mr(s, u, a[u]);
    n._ps.forEach(function(f) {
      f.un();
    }), n._es = {}, n._sel || Op(s);
  }, e;
})(Go);
function Qi(t) {
  if (!t || hi(t))
    return t;
  var e = t.$_p._ps;
  return e.length ? Qi(e[0].b) : null;
}
function zp(t) {
  if (t) {
    if (t.b && hi(t.b))
      return t;
    var e = t._ps;
    return e.length ? zp(e[0]) : null;
  }
}
function ye(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var a = e || {}, s = a.key, u = a.ref, f = Rp(a, ["key", "ref"]);
  return {
    type: t,
    key: s,
    ref: u,
    props: Re(Re({}, f), {
      children: Cp(r).filter(function(c) {
        return c != null && c !== !1;
      })
    })
  };
}
var Gp = /* @__PURE__ */ (function(t) {
  oa(e, t);
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
})(Go), KS = /* @__PURE__ */ (function(t) {
  oa(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.typ = "text", n;
  }
  var r = e.prototype;
  return r.r = function(n) {
    var a, s = this, u = !s.b;
    if (u) {
      var f = zo(s.c), c = (a = s._hyd) === null || a === void 0 ? void 0 : a.splice(0, 1)[0];
      s.b = c || di(f).createTextNode(s.t.replace("text_", ""));
    }
    return n.push(function() {
      u ? s.md() : s.ud();
    }), !0;
  }, r.un = function() {
    Op(this.b);
  }, e;
})(Go);
function ZS(t, e, r) {
  var n = r.map(function(c) {
    return Hr(c) ? null : c.key;
  }), a = _v(e.map(function(c) {
    return c.k;
  })), s = _v(n), u = aa(a, s, function(c) {
    return c;
  });
  u.removed.forEach(function(c) {
    e.splice(c, 1)[0].un();
  }), u.ordered.forEach(function(c) {
    var v = c[0], p = c[1], h = e.splice(v, 1)[0];
    e.splice(p, 0, h);
    var d = Qi(h.b), m = Qi(e[p + 1] && e[p + 1].b);
    d && d.parentNode.insertBefore(d, m);
  }), u.added.forEach(function(c) {
    e.splice(c, 0, Sv(r[c], n[c], c, t));
  });
  var f = u.maintained.filter(function(c) {
    c[0];
    var v = c[1], p = r[v], h = e[v], d = Hr(p) ? "text_".concat(p) : p.type;
    return d !== h.t ? (h.un(), e.splice(v, 1, Sv(p, n[v], v, t)), !0) : (h.i = v, !1);
  });
  return mv(mv([], u.added, !0), f.map(function(c) {
    c[0];
    var v = c[1];
    return v;
  }));
}
function JS(t, e) {
  for (var r = t._ps, n = r.length, a = e.i + 1; a < n; ++a) {
    var s = Qi(r[a].b);
    if (s)
      return s;
  }
  return null;
}
function Sv(t, e, r, n) {
  var a = n.d + 1;
  if (Hr(t) || si(t))
    return new KS("text_".concat(t), a, e, r, n, null, {});
  var s = t.type, u = typeof s == "string" ? VS : YS;
  return new u(s, a, e, r, n, t.ref, t.props);
}
function sa(t, e, r, n, a, s, u) {
  var f = ZS(t, e, r), c = t._hyd, v = e.filter(function(h, d) {
    return h._hyd = c, h.u(n, a, r[d], s, u);
  });
  t.typ === "container" && t._sel && e.forEach(function(h) {
    var d = zp(h);
    d && (d._sel = !0);
  }), t._hyd = null;
  var p = zo(t);
  return p && f.reverse().forEach(function(h) {
    var d = e[h], m = Qi(d.b);
    if (m && p !== m && !m.parentNode) {
      var _ = JS(t, d);
      p.insertBefore(m, _);
    }
  }), v.length > 0;
}
function QS(t, e, r, n) {
  r === void 0 && (r = e.__CROACT__), n === void 0 && (n = {});
  var a = !!r;
  r || (r = new Gp(e));
  var s = [];
  return sa(r, r._ps, t ? [t] : [], s, n, void 0, void 0), Ip(s), of(null), a || (e.__CROACT__ = r), r;
}
function bv(t, e, r) {
  return !r && t && (r = new Gp(e.parentElement), r._hyd = [e], r._sel = !0), QS(t, e, r), r;
}
function Fp(t) {
  var e = Pp(), r = e._hs || (e._hs = []), n = WS(), a = r[n];
  if (NS(n + 1), a) {
    if (!Co(a.deps, t.deps))
      return a.updated = !1, a;
    r[n] = t;
  } else
    r.push(t);
  return t.value = t.func(), t.updated = !0, t;
}
function jS(t, e) {
  var r = Fp({
    func: t,
    deps: e
  });
  return r.value;
}
function tb(t) {
  return jS(function() {
    return Bp(t);
  }, []);
}
function Lp(t, e, r) {
  var n = Pp(), a = Fp({
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
function rb(t, e, r) {
  Lp(function() {
    t?.(e());
  }, r, !0);
}
function ff(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return !0;
  return !1;
}
function Wp(t, e) {
  for (var r = t.length, n = 0; n < r; ++n)
    if (e(t[n], n))
      return t[n];
  return null;
}
function Np(t) {
  var e = t;
  if (typeof e > "u") {
    if (typeof navigator > "u" || !navigator)
      return "";
    e = navigator.userAgent || "";
  }
  return e.toLowerCase();
}
function lf(t, e) {
  try {
    return new RegExp(t, "g").exec(e);
  } catch {
    return null;
  }
}
function eb() {
  if (typeof navigator > "u" || !navigator || !navigator.userAgentData)
    return !1;
  var t = navigator.userAgentData, e = t.brands || t.uaList;
  return !!(e && e.length);
}
function nb(t, e) {
  var r = lf("(" + t + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e);
  return r ? r[3] : "";
}
function Ru(t) {
  return t.replace(/_/g, ".");
}
function Hi(t, e) {
  var r = null, n = "-1";
  return ff(t, function(a) {
    var s = lf("(" + a.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", e);
    return !s || a.brand ? !1 : (r = a, n = s[3] || "-1", a.versionAlias ? n = a.versionAlias : a.versionTest && (n = nb(a.versionTest.toLowerCase(), e) || n), n = Ru(n), !0);
  }), {
    preset: r,
    version: n
  };
}
function ao(t, e) {
  var r = {
    brand: "",
    version: "-1"
  };
  return ff(t, function(n) {
    var a = kp(e, n);
    return a ? (r.brand = n.id, r.version = n.versionAlias || a.version, r.version !== "-1") : !1;
  }), r;
}
function kp(t, e) {
  return Wp(t, function(r) {
    var n = r.brand;
    return lf("" + e.test, n.toLowerCase());
  });
}
var Hp = [{
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
}], Yp = [{
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
}], Tu = [{
  test: "applewebkit",
  id: "webkit",
  versionTest: "applewebkit|safari"
}], Xp = [{
  test: "(?=(iphone|ipad))(?!(.*version))",
  id: "webview"
}, {
  test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
  id: "webview"
}, {
  // test webview
  test: "webview",
  id: "webview"
}], qp = [{
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
function Up(t) {
  return !!Hi(Xp, t).preset;
}
function ib(t) {
  var e = Np(t), r = !!/mobi/g.exec(e), n = {
    name: "unknown",
    version: "-1",
    majorVersion: -1,
    webview: Up(e),
    chromium: !1,
    chromiumVersion: "-1",
    webkit: !1,
    webkitVersion: "-1"
  }, a = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  }, s = Hi(Hp, e), u = s.preset, f = s.version, c = Hi(qp, e), v = c.preset, p = c.version, h = Hi(Yp, e);
  if (n.chromium = !!h.preset, n.chromiumVersion = h.version, !n.chromium) {
    var d = Hi(Tu, e);
    n.webkit = !!d.preset, n.webkitVersion = d.version;
  }
  return v && (a.name = v.id, a.version = p, a.majorVersion = parseInt(p, 10)), u && (n.name = u.id, n.version = f, n.webview && a.name === "ios" && n.name !== "safari" && (n.webview = !1)), n.majorVersion = parseInt(n.version, 10), {
    browser: n,
    os: a,
    isMobile: r,
    isHints: !1
  };
}
function ab(t) {
  var e = navigator.userAgentData, r = (e.uaList || e.brands).slice(), n = e.mobile || !1, a = r[0], s = (e.platform || navigator.platform).toLowerCase(), u = {
    name: a.brand,
    version: a.version,
    majorVersion: -1,
    webkit: !1,
    webkitVersion: "-1",
    chromium: !1,
    chromiumVersion: "-1",
    webview: !!ao(Xp, r).brand || Up(Np())
  }, f = {
    name: "unknown",
    version: "-1",
    majorVersion: -1
  };
  u.webkit = !u.chromium && ff(Tu, function(d) {
    return kp(r, d);
  });
  var c = ao(Yp, r);
  if (u.chromium = !!c.brand, u.chromiumVersion = c.version || "-1", !u.chromium) {
    var v = ao(Tu, r);
    u.webkit = !!v.brand, u.webkitVersion = v.version || "-1";
  }
  var p = Wp(qp, function(d) {
    return new RegExp("" + d.test, "g").exec(s);
  });
  f.name = p ? p.id : "";
  {
    var h = ao(Hp, r);
    u.name = h.brand || u.name, u.version = h.brand && t ? t.uaFullVersion : h.version;
  }
  return u.webkit && (f.name = n ? "ios" : "mac"), f.name === "ios" && u.webview && (u.version = "-1"), f.version = Ru(f.version), u.version = Ru(u.version), f.majorVersion = parseInt(f.version, 10), u.majorVersion = parseInt(u.version, 10), {
    browser: u,
    os: f,
    isMobile: n,
    isHints: !0
  };
}
function ob(t) {
  return eb() ? ab() : ib(t);
}
function sb(t, e, r, n, a, s) {
  for (var u = 0; u < a; ++u) {
    var f = r + u * a, c = n + u * a;
    t[f] += t[c] * s, e[f] += e[c] * s;
  }
}
function ub(t, e, r, n, a) {
  for (var s = 0; s < a; ++s) {
    var u = r + s * a, f = n + s * a, c = t[u], v = e[u];
    t[u] = t[f], t[f] = c, e[u] = e[f], e[f] = v;
  }
}
function fb(t, e, r, n, a) {
  for (var s = 0; s < n; ++s) {
    var u = r + s * n;
    t[u] /= a, e[u] /= a;
  }
}
function $p(t, e, r) {
  for (var n = t.slice(), a = 0; a < r; ++a)
    n[a * r + e - 1] = 0, n[(e - 1) * r + a] = 0;
  return n[(e - 1) * (r + 1)] = 1, n;
}
function Oe(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = t.slice(), n = nr(e), a = 0; a < e; ++a) {
    var s = e * a + a;
    if (!Ot(r[s], pr)) {
      for (var u = a + 1; u < e; ++u)
        if (r[e * a + u]) {
          ub(r, n, a, u, e);
          break;
        }
    }
    if (!Ot(r[s], pr))
      return [];
    fb(r, n, a, e, r[s]);
    for (var u = 0; u < e; ++u) {
      var f = u, c = u + a * e, v = r[c];
      !Ot(v, pr) || a === u || sb(r, n, f, a, e, -v);
    }
  }
  return n;
}
function lb(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = 0; n < e; ++n)
    for (var a = 0; a < e; ++a)
      r[a * e + n] = t[e * n + a];
  return r;
}
function Vp(t, e) {
  e === void 0 && (e = Math.sqrt(t.length));
  for (var r = [], n = t[e * e - 1], a = 0; a < e - 1; ++a)
    r[a] = t[e * (e - 1) + a] / n;
  return r[e - 1] = 0, r;
}
function cb(t, e) {
  for (var r = nr(e), n = 0; n < e - 1; ++n)
    r[e * (e - 1) + n] = t[n] || 0;
  return r;
}
function On(t, e) {
  for (var r = t.slice(), n = t.length; n < e - 1; ++n)
    r[n] = 0;
  return r[e - 1] = 1, r;
}
function Ce(t, e, r) {
  if (e === void 0 && (e = Math.sqrt(t.length)), e === r)
    return t;
  for (var n = nr(r), a = Math.min(e, r), s = 0; s < a - 1; ++s) {
    for (var u = 0; u < a - 1; ++u)
      n[s * r + u] = t[s * e + u];
    n[(s + 1) * r - 1] = t[(s + 1) * e - 1], n[(r - 1) * r + s] = t[(e - 1) * e + s];
  }
  return n[r * r - 1] = t[e * e - 1], n;
}
function Eo(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  var n = nr(t);
  return e.forEach(function(a) {
    n = Jt(n, a, t);
  }), n;
}
function Jt(t, e, r) {
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
function qt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] + e[a];
  return n;
}
function bt(t, e) {
  for (var r = Math.min(t.length, e.length), n = t.slice(), a = 0; a < r; ++a)
    n[a] = n[a] - e[a];
  return n;
}
function vb(t, e) {
  return e === void 0 && (e = t.length === 6), e ? [t[0], t[1], 0, t[2], t[3], 0, t[4], t[5], 1] : t;
}
function Kp(t, e) {
  return e === void 0 && (e = t.length === 9), e ? [t[0], t[1], t[3], t[4], t[6], t[7]] : t;
}
function Mr(t, e, r) {
  r === void 0 && (r = e.length);
  var n = Jt(t, e, r), a = n[r - 1];
  return n.map(function(s) {
    return s / a;
  });
}
function pb(t, e) {
  return Jt(t, [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function db(t, e) {
  return Jt(t, [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1], 4);
}
function hb(t, e) {
  return Jt(t, fa(e, 4));
}
function oo(t, e) {
  var r = e[0], n = r === void 0 ? 1 : r, a = e[1], s = a === void 0 ? 1 : a, u = e[2], f = u === void 0 ? 1 : u;
  return Jt(t, [n, 0, 0, 0, 0, s, 0, 0, 0, 0, f, 0, 0, 0, 0, 1], 4);
}
function ua(t, e) {
  return Mr(fa(e, 3), On(t, 3));
}
function lu(t, e) {
  var r = e[0], n = r === void 0 ? 0 : r, a = e[1], s = a === void 0 ? 0 : a, u = e[2], f = u === void 0 ? 0 : u;
  return Jt(t, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, s, f, 1], 4);
}
function Cv(t, e) {
  return Jt(t, e, 4);
}
function fa(t, e) {
  var r = Math.cos(t), n = Math.sin(t), a = nr(e);
  return a[0] = r, a[1] = n, a[e] = -n, a[e + 1] = r, a;
}
function nr(t) {
  for (var e = t * t, r = [], n = 0; n < e; ++n)
    r[n] = n % (t + 1) ? 0 : 1;
  return r;
}
function cf(t, e) {
  for (var r = nr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[(e + 1) * a] = t[a];
  return r;
}
function In(t, e) {
  for (var r = nr(e), n = Math.min(t.length, e - 1), a = 0; a < n; ++a)
    r[e * (e - 1) + a] = t[a];
  return r;
}
function vf(t, e, r, n, a, s, u, f) {
  var c = t[0], v = t[1], p = e[0], h = e[1], d = r[0], m = r[1], _ = n[0], x = n[1], y = a[0], b = a[1], E = s[0], T = s[1], M = u[0], D = u[1], w = f[0], O = f[1], I = [c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, c, 0, p, 0, d, 0, _, 0, v, 0, h, 0, m, 0, x, 0, 1, 0, 1, 0, 1, 0, 1, -y * c, -b * c, -E * p, -T * p, -M * d, -D * d, -w * _, -O * _, -y * v, -b * v, -E * h, -T * h, -M * m, -D * m, -w * x, -O * x], P = Oe(I, 8);
  if (!P.length)
    return [];
  var B = Jt(P, [y, b, E, T, M, D, w, O], 8);
  return B[8] = 1, Ce(lb(B), 3, 4);
}
var qi = function() {
  return qi = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, qi.apply(this, arguments);
};
function gb() {
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
function ji(t, e) {
  return e === void 0 && (e = 0), ti(ui(t, e));
}
function mb(t, e) {
  var r = Mr(t, [e[0], e[1] || 0, e[2] || 0, 1], 4), n = r[3] || 1;
  return [
    r[0] / n,
    r[1] / n,
    r[2] / n
  ];
}
function ti(t) {
  var e = gb();
  return t.forEach(function(r) {
    var n = r.matrixFunction, a = r.functionValue;
    n && (e = n(e, a));
  }), e;
}
function ui(t, e) {
  e === void 0 && (e = 0);
  var r = dr(t) ? t : ln(t);
  return r.map(function(n) {
    var a = yp(n), s = a.prefix, u = a.value, f = null, c = s, v = "";
    if (s === "translate" || s === "translateX" || s === "translate3d") {
      var p = be(e) ? qi(qi({}, e), { "o%": e["%"] }) : {
        "%": e,
        "o%": e
      }, h = Tn(u).map(function(L, Y) {
        return Y === 0 && "x%" in p ? p["%"] = e["x%"] : Y === 1 && "y%" in p ? p["%"] = e["y%"] : p["%"] = e["o%"], Zt(L, p);
      }), d = h[0], m = h[1], _ = m === void 0 ? 0 : m, x = h[2], y = x === void 0 ? 0 : x;
      f = lu, v = [d, _, y];
    } else if (s === "translateY") {
      var b = be(e) ? qi({ "%": e["y%"] }, e) : {
        "%": e
      }, _ = Zt(u, b);
      f = lu, v = [0, _, 0];
    } else if (s === "translateZ") {
      var y = parseFloat(u);
      f = lu, v = [0, 0, y];
    } else if (s === "scale" || s === "scale3d") {
      var E = Tn(u).map(function(L) {
        return parseFloat(L);
      }), T = E[0], M = E[1], D = M === void 0 ? T : M, w = E[2], O = w === void 0 ? 1 : w;
      f = oo, v = [T, D, O];
    } else if (s === "scaleX") {
      var T = parseFloat(u);
      f = oo, v = [T, 1, 1];
    } else if (s === "scaleY") {
      var D = parseFloat(u);
      f = oo, v = [1, D, 1];
    } else if (s === "scaleZ") {
      var O = parseFloat(u);
      f = oo, v = [1, 1, O];
    } else if (s === "rotate" || s === "rotateZ" || s === "rotateX" || s === "rotateY") {
      var I = ia(u), P = I.unit, B = I.value, H = P === "rad" ? B : B * Math.PI / 180;
      s === "rotate" || s === "rotateZ" ? (c = "rotateZ", f = hb) : s === "rotateX" ? f = pb : s === "rotateY" && (f = db), v = H;
    } else if (s === "matrix3d")
      f = Cv, v = Tn(u).map(function(L) {
        return parseFloat(L);
      });
    else if (s === "matrix") {
      var W = Tn(u).map(function(L) {
        return parseFloat(L);
      });
      f = Cv, v = [
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
var Ou = function(t, e) {
  return Ou = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Ou(t, e);
};
function _b(t, e) {
  Ou(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var Zp = typeof Map == "function" ? void 0 : /* @__PURE__ */ (function() {
  var t = 0;
  return function(e) {
    return e.__DIFF_KEY__ || (e.__DIFF_KEY__ = ++t);
  };
})(), Jp = /* @__PURE__ */ (function(t) {
  _b(e, t);
  function e(r) {
    return r === void 0 && (r = []), t.call(this, r, Zp) || this;
  }
  return e;
})(FS);
function xb(t, e) {
  return aa(t, e, Zp);
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
var Iu = function() {
  return Iu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Iu.apply(this, arguments);
};
function yb() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
  for (var n = Array(t), a = 0, e = 0; e < r; e++) for (var s = arguments[e], u = 0, f = s.length; u < f; u++, a++) n[a] = s[u];
  return n;
}
var Fo = /* @__PURE__ */ (function() {
  function t() {
    this._events = {};
  }
  var e = t.prototype;
  return e.on = function(r, n) {
    if (be(r))
      for (var a in r)
        this.on(a, r[a]);
    else
      this._addEvent(r, n, {});
    return this;
  }, e.off = function(r, n) {
    if (!r)
      this._events = {};
    else if (be(r))
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
    }, n.currentTarget = this, yb(s).forEach(function(f) {
      f.listener(n), f.once && a.off(r, f.listener);
    }), !u;
  }, e.trigger = function(r, n) {
    return n === void 0 && (n = {}), this.emit(r, n);
  }, e._addEvent = function(r, n, a) {
    var s = this._events;
    s[r] = s[r] || [];
    var u = s[r];
    u.push(Iu({
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
var Pu = function(t, e) {
  return Pu = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, Pu(t, e);
};
function Sb(t, e) {
  Pu(t, e);
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
function bb(t) {
  var e = t.container;
  return e === document.body ? [e.scrollLeft || document.documentElement.scrollLeft, e.scrollTop || document.documentElement.scrollTop] : [e.scrollLeft, e.scrollTop];
}
function Ev(t, e) {
  return t.addEventListener("scroll", e), function() {
    t.removeEventListener("scroll", e);
  };
}
function so(t) {
  if (t) {
    if (Hr(t))
      return document.querySelector(t);
  } else return null;
  if (tf(t))
    return t();
  if (t instanceof Element)
    return t;
  if ("current" in t)
    return t.current;
  if ("value" in t)
    return t.value;
}
var Cb = /* @__PURE__ */ (function(t) {
  Sb(e, t);
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
    var s = so(a.container);
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
    var s = a.container, u = a.getScrollPosition, f = u === void 0 ? bb : u;
    return f({
      container: so(s),
      direction: n
    });
  }, r._continueDrag = function(n) {
    var a = this, s, u = n.container, f = n.direction, c = n.throttleTime, v = n.useScroll, p = n.isDrag, h = n.inputEvent;
    if (!(!this._flag || p && this._isWait)) {
      var d = Ji(), m = Math.max(c + this._prevTime - d, 0);
      if (m > 0)
        return clearTimeout(this._timer), this._timer = window.setTimeout(function() {
          a._continueDrag(n);
        }, m), !1;
      this._prevTime = d;
      var _ = this._getScrollPosition(f, n);
      this._prevScrollPos = _, p && (this._isWait = !0), v || (this._lock = !0);
      var x = {
        container: so(u),
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
      var s = a === !0 ? Ev : a, u = so(n.container);
      a === !0 && (u === document.body || u === document.documentElement) ? this._unregister = Ev(window, this._onScroll) : this._unregister = s(u, this._onScroll);
    }
  }, r._unregisterScrollEvent = function() {
    var n;
    (n = this._unregister) === null || n === void 0 || n.call(this), this._unregister = null;
  }, e;
})(Fo);
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
function kr(t) {
  return Ot(t, pr);
}
function wb(t, e) {
  return t.every(function(r, n) {
    return kr(r - e[n]) === 0;
  });
}
function Db(t, e) {
  return !kr(t[0] - e[0]) && !kr(t[1] - e[1]);
}
function Qp(t) {
  return t.length < 3 ? 0 : Math.abs(RS(t.map(function(e, r) {
    var n = t[r + 1] || t[0];
    return e[0] * n[1] - n[0] * e[1];
  }))) / 2;
}
function wv(t, e) {
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
function Au(t, e, r) {
  var n = t[0], a = t[1], s = Pn(e), u = s.minX, f = s.maxX, c = [[u, a], [f, a]], v = wo(c[0], c[1]), p = Bu(e), h = [];
  if (p.forEach(function(_) {
    var x = wo(_[0], _[1]), y = _[0];
    if (wb(v, x))
      h.push({
        pos: t,
        line: _,
        type: "line"
      });
    else {
      var b = jp(pf(v, x), [c, _]);
      b.forEach(function(E) {
        _.some(function(T) {
          return Db(T, E);
        }) ? h.push({
          pos: E,
          line: _,
          type: "point"
        }) : kr(y[1] - a) !== 0 && h.push({
          pos: E,
          line: _,
          type: "intersection"
        });
      });
    }
  }), Yr(h, function(_) {
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
          var E = Yr(b, function(D) {
            return D[1] !== a;
          }), T = m[x[0]], M = E[1] > a ? 1 : -1;
          T ? T !== M && ++d : m[x[0]] = M;
        }
      }
  }), d % 2 === 1;
}
function wo(t, e) {
  var r = t[0], n = t[1], a = e[0], s = e[1], u = a - r, f = s - n;
  Math.abs(u) < pr && (u = 0), Math.abs(f) < pr && (f = 0);
  var c = 0, v = 0, p = 0;
  return u ? f ? (c = -f / u, v = 1, p = -c * r - n) : (v = 1, p = -n) : f && (c = -1, p = r), [c, v, p];
}
function pf(t, e) {
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
function jp(t, e) {
  var r = e.map(function(h) {
    return [0, 1].map(function(d) {
      return [Math.min(h[0][d], h[1][d]), Math.max(h[0][d], h[1][d])];
    });
  }), n = [];
  if (t.length === 2) {
    var a = t[0], s = a[0], u = a[1];
    if (kr(s - t[1][0])) {
      if (!kr(u - t[1][1])) {
        var v = Math.max.apply(Math, r.map(function(h) {
          return h[0][0];
        })), p = Math.min.apply(Math, r.map(function(h) {
          return h[0][1];
        }));
        if (kr(v - p) > 0)
          return [];
        n = [[v, u], [p, u]];
      }
    } else {
      var f = Math.max.apply(Math, r.map(function(h) {
        return h[1][0];
      })), c = Math.min.apply(Math, r.map(function(h) {
        return h[1][1];
      }));
      if (kr(f - c) > 0)
        return [];
      n = [[s, f], [s, c]];
    }
  }
  return n.length || (n = t.filter(function(h) {
    var d = h[0], m = h[1];
    return r.every(function(_) {
      return 0 <= kr(d - _[0][0]) && 0 <= kr(_[0][1] - d) && 0 <= kr(m - _[1][0]) && 0 <= kr(_[1][1] - m);
    });
  })), n.map(function(h) {
    return [kr(h[0]), kr(h[1])];
  });
}
function Bu(t) {
  return Eb(t.slice(1), [t[0]]).map(function(e, r) {
    return [t[r], e];
  });
}
function Mb(t, e) {
  var r = t.slice(), n = e.slice();
  hv(r) === -1 && r.reverse(), hv(n) === -1 && n.reverse();
  var a = Bu(r), s = Bu(n), u = a.map(function(p) {
    return wo(p[0], p[1]);
  }), f = s.map(function(p) {
    return wo(p[0], p[1]);
  }), c = [];
  u.forEach(function(p, h) {
    var d = a[h], m = [];
    f.forEach(function(_, x) {
      var y = pf(p, _), b = jp(y, [d, s[x]]);
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
    }), c.push.apply(c, m), Au(d[1], n) && c.push({
      index1: h,
      index2: -1,
      pos: d[1],
      type: "inside"
    });
  }), s.forEach(function(p, h) {
    if (Au(p[1], r)) {
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
function Rb(t, e) {
  var r = Mb(t, e);
  return r.map(function(n) {
    var a = n.pos;
    return a;
  });
}
function Tb(t, e) {
  var r = Rb(t, e);
  return Qp(r);
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
var zu = function(t, e) {
  return zu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
  }, zu(t, e);
};
function Ob(t, e) {
  zu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var vr = function() {
  return vr = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, vr.apply(this, arguments);
};
function Ib(t, e) {
  var r = e[0] - t[0], n = e[1] - t[1], a = Math.atan2(n, r);
  return a >= 0 ? a : a + Math.PI * 2;
}
function cu(t) {
  return Ib([
    t[0].clientX,
    t[0].clientY
  ], [
    t[1].clientX,
    t[1].clientY
  ]) / Math.PI * 180;
}
function Pb(t) {
  return t.touches && t.touches.length >= 2;
}
function uo(t) {
  return t ? t.touches ? Bb(t.touches) : [td(t)] : [];
}
function Ab(t) {
  return t && (t.type.indexOf("mouse") > -1 || "button" in t);
}
function Dv(t, e, r) {
  var n = r.length, a = Ui(t, n), s = a.clientX, u = a.clientY, f = a.originalClientX, c = a.originalClientY, v = Ui(e, n), p = v.clientX, h = v.clientY, d = Ui(r, n), m = d.clientX, _ = d.clientY, x = s - p, y = u - h, b = s - m, E = u - _;
  return {
    clientX: f,
    clientY: c,
    deltaX: x,
    deltaY: y,
    distX: b,
    distY: E
  };
}
function vu(t) {
  return Math.sqrt(Math.pow(t[0].clientX - t[1].clientX, 2) + Math.pow(t[0].clientY - t[1].clientY, 2));
}
function Bb(t) {
  for (var e = Math.min(t.length, 2), r = [], n = 0; n < e; ++n)
    r.push(td(t[n]));
  return r;
}
function td(t) {
  return {
    clientX: t.clientX,
    clientY: t.clientY
  };
}
function Ui(t, e) {
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
var pu = /* @__PURE__ */ (function() {
  function t(e) {
    this.prevClients = [], this.startClients = [], this.movement = 0, this.length = 0, this.startClients = e, this.prevClients = e, this.length = e.length;
  }
  return t.prototype.getAngle = function(e) {
    return e === void 0 && (e = this.prevClients), cu(e);
  }, t.prototype.getRotation = function(e) {
    return e === void 0 && (e = this.prevClients), cu(e) - cu(this.startClients);
  }, t.prototype.getPosition = function(e, r) {
    e === void 0 && (e = this.prevClients);
    var n = Dv(e || this.prevClients, this.prevClients, this.startClients), a = n.deltaX, s = n.deltaY;
    return this.movement += Math.sqrt(a * a + s * s), this.prevClients = e, n;
  }, t.prototype.getPositions = function(e) {
    e === void 0 && (e = this.prevClients);
    for (var r = this.prevClients, n = this.startClients, a = Math.min(this.length, r.length), s = [], u = 0; u < a; ++u)
      s[u] = Dv([e[u]], [r[u]], [n[u]]);
    return s;
  }, t.prototype.getMovement = function(e) {
    var r = this.movement;
    if (!e)
      return r;
    var n = Ui(e, this.length), a = Ui(this.prevClients, this.length), s = n.clientX - a.clientX, u = n.clientY - a.clientY;
    return Math.sqrt(s * s + u * u) + r;
  }, t.prototype.getDistance = function(e) {
    return e === void 0 && (e = this.prevClients), vu(e);
  }, t.prototype.getScale = function(e) {
    return e === void 0 && (e = this.prevClients), vu(e) / vu(this.startClients);
  }, t.prototype.move = function(e, r) {
    this.startClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    }), this.prevClients.forEach(function(n) {
      n.clientX -= e, n.clientY -= r;
    });
  }, t;
})(), Mv = ["textarea", "input"], zb = /* @__PURE__ */ (function(t) {
  Ob(e, t);
  function e(r, n) {
    n === void 0 && (n = {});
    var a = t.call(this) || this;
    a.options = {}, a.flag = !1, a.pinchFlag = !1, a.data = {}, a.isDrag = !1, a.isPinch = !1, a.clientStores = [], a.targets = [], a.prevTime = 0, a.doubleFlag = !1, a._useMouse = !1, a._useTouch = !1, a._useDrag = !1, a._dragFlag = !1, a._isTrusted = !1, a._isMouseEvent = !1, a._isSecondaryButton = !1, a._preventMouseEvent = !1, a._prevInputEvent = null, a._isDragAPI = !1, a._isIdle = !0, a._preventMouseEventId = 0, a._window = window, a.onDragStart = function(d, m) {
      if (m === void 0 && (m = !0), !(!a.flag && d.cancelable === !1)) {
        var _ = d.type.indexOf("drag") >= -1;
        if (!(a.flag && _)) {
          a._isDragAPI = !0;
          var x = a.options, y = x.container, b = x.pinchOutside, E = x.preventWheelClick, T = x.preventRightClick, M = x.preventDefault, D = x.checkInput, w = x.dragFocusedInput, O = x.preventClickEventOnDragStart, I = x.preventClickEventOnDrag, P = x.preventClickEventByCondition, B = a._useTouch, H = !a.flag;
          if (a._isSecondaryButton = d.which === 3 || d.button === 2, E && (d.which === 2 || d.button === 1) || T && (d.which === 3 || d.button === 2))
            return a.stop(), !1;
          if (H) {
            var W = a._window.document.activeElement, L = d.target;
            if (L) {
              var Y = L.tagName.toLowerCase(), X = Mv.indexOf(Y) > -1, Q = L.isContentEditable;
              if (X || Q) {
                if (D || !w && W === L)
                  return !1;
                if (W && (W === L || Q && W.isContentEditable && W.contains(L)))
                  if (w)
                    L.blur();
                  else
                    return !1;
              } else if ((M || d.type === "touchstart") && W) {
                var j = W.tagName.toLowerCase();
                (W.isContentEditable || Mv.indexOf(j) > -1) && W.blur();
              }
              (O || I || P) && Er(a._window, "click", a._onClick, !0);
            }
            a.clientStores = [new pu(uo(d))], a._isIdle = !1, a.flag = !0, a.isDrag = !1, a._isTrusted = m, a._dragFlag = !0, a._prevInputEvent = d, a.data = {}, a.doubleFlag = Ji() - a.prevTime < 200, a._isMouseEvent = Ab(d), !a._isMouseEvent && a._preventMouseEvent && a._allowMouseEvent();
            var V = a._preventMouseEvent || a.emit("dragStart", vr(vr({ data: a.data, datas: a.data, inputEvent: d, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, isTrusted: m, isDouble: a.doubleFlag }, a.getCurrentStore().getPosition()), { preventDefault: function() {
              d.preventDefault();
            }, preventDrag: function() {
              a._dragFlag = !1;
            } }));
            V === !1 && a.stop(), a._isMouseEvent && a.flag && M && d.preventDefault();
          }
          if (!a.flag)
            return !1;
          var et = 0;
          if (H ? (a._attchDragEvent(), B && b && (et = setTimeout(function() {
            Er(y, "touchstart", a.onDragStart, {
              passive: !1
            });
          }))) : B && b && mr(y, "touchstart", a.onDragStart), a.flag && Pb(d)) {
            if (clearTimeout(et), H && d.touches.length !== d.changedTouches.length)
              return;
            a.pinchFlag || a.onPinchStart(d);
          }
        }
      }
    }, a.onDrag = function(d, m) {
      if (a.flag) {
        var _ = a.options.preventDefault;
        !a._isMouseEvent && _ && d.preventDefault(), a._prevInputEvent = d;
        var x = uo(d), y = a.moveClients(x, d, !1);
        if (a._dragFlag) {
          if (a.pinchFlag || y.deltaX || y.deltaY) {
            var b = a._preventMouseEvent || a.emit("drag", vr(vr({}, y), { isScroll: !!m, inputEvent: d }));
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
        var m = a.options, _ = m.pinchOutside, x = m.container, y = m.preventClickEventOnDrag, b = m.preventClickEventOnDragStart, E = m.preventClickEventByCondition, T = a.isDrag;
        (y || b || E) && requestAnimationFrame(function() {
          a._allowClickEvent();
        }), !E && !b && y && !T && a._allowClickEvent(), a._useTouch && _ && mr(x, "touchstart", a.onDragStart), a.pinchFlag && a.onPinchEnd(d);
        var M = d?.touches ? uo(d) : [], D = M.length;
        D === 0 || !a.options.keepDragging ? a.flag = !1 : a._addStore(new pu(M));
        var w = a._getPosition(), O = Ji(), I = !T && a.doubleFlag;
        a._prevInputEvent = null, a.prevTime = T || I ? 0 : O, a.flag || (a._dettachDragEvent(), a._preventMouseEvent || a.emit("dragEnd", vr({ data: a.data, datas: a.data, isDouble: I, isDrag: T, isClick: !T, isMouseEvent: a._isMouseEvent, isSecondaryButton: a._isSecondaryButton, inputEvent: d, isTrusted: a._isTrusted }, w)), a.clientStores = [], a._isMouseEvent || (a._preventMouseEvent = !0, clearTimeout(a._preventMouseEventId), a._preventMouseEventId = setTimeout(function() {
          a._preventMouseEvent = !1;
        }, 200)), a._isIdle = !0);
      }
    }, a.onBlur = function() {
      a.onDragEnd();
    }, a._allowClickEvent = function() {
      mr(a._window, "click", a._onClick, !0);
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
    a._window = Mp(u) ? u : fn(u), a.options = vr({ checkInput: !1, container: u && !("document" in u) ? fn(u) : u, preventRightClick: !0, preventWheelClick: !0, preventClickEventOnDragStart: !1, preventClickEventOnDrag: !1, preventClickEventByCondition: null, preventDefault: !0, checkWindowBlur: !1, keepDragging: !1, pinchThreshold: 0, events: ["touch", "mouse"] }, n);
    var f = a.options, c = f.container, v = f.events, p = f.checkWindowBlur;
    if (a._useDrag = v.indexOf("drag") > -1, a._useTouch = v.indexOf("touch") > -1, a._useMouse = v.indexOf("mouse") > -1, a.targets = s, a._useDrag && s.forEach(function(d) {
      Er(d, "dragstart", a.onDragStart);
    }), a._useMouse && (s.forEach(function(d) {
      Er(d, "mousedown", a.onDragStart), Er(d, "mousemove", a._passCallback);
    }), Er(c, "contextmenu", a._onContextMenu)), p && Er(fn(), "blur", a.onBlur), a._useTouch) {
      var h = {
        passive: !1
      };
      s.forEach(function(d) {
        Er(d, "touchstart", a.onDragStart, h), Er(d, "touchmove", a._passCallback, h);
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
    return r === void 0 && (r = this._prevInputEvent), vr(vr({ data: this.data, datas: this.data }, this._getPosition()), { movement: this.getMovement(), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, inputEvent: r });
  }, e.prototype.getEventData = function() {
    return this.data;
  }, e.prototype.getEventDatas = function() {
    return this.data;
  }, e.prototype.unset = function() {
    var r = this, n = this.targets, a = this.options.container;
    this.off(), mr(this._window, "blur", this.onBlur), this._useDrag && n.forEach(function(s) {
      mr(s, "dragstart", r.onDragStart);
    }), this._useMouse && (n.forEach(function(s) {
      mr(s, "mousedown", r.onDragStart);
    }), mr(a, "contextmenu", this._onContextMenu)), this._useTouch && (n.forEach(function(s) {
      mr(s, "touchstart", r.onDragStart);
    }), mr(a, "touchstart", this.onDragStart)), this._prevInputEvent = null, this._allowClickEvent(), this._dettachDragEvent();
  }, e.prototype.onPinchStart = function(r) {
    var n = this, a = this.options.pinchThreshold;
    if (!(this.isDrag && this.getMovement() > a)) {
      var s = new pu(uo(r));
      this.pinchFlag = !0, this._addStore(s);
      var u = this.emit("pinchStart", vr(vr({ data: this.data, datas: this.data, angle: s.getAngle(), touches: this.getCurrentStore().getPositions() }, s.getPosition()), { inputEvent: r, isTrusted: this._isTrusted, preventDefault: function() {
        r.preventDefault();
      }, preventDrag: function() {
        n._dragFlag = !1;
      } }));
      u === !1 && (this.pinchFlag = !1);
    }
  }, e.prototype.onPinch = function(r, n) {
    if (!(!this.flag || !this.pinchFlag || n.length < 2)) {
      var a = this.getCurrentStore();
      this.isPinch = !0, this.emit("pinch", vr(vr({ data: this.data, datas: this.data, movement: this.getMovement(n), angle: a.getAngle(n), rotation: a.getRotation(n), touches: a.getPositions(n), scale: a.getScale(n), distance: a.getDistance(n) }, a.getPosition(n)), { inputEvent: r, isTrusted: this._isTrusted }));
    }
  }, e.prototype.onPinchEnd = function(r) {
    if (this.pinchFlag) {
      var n = this.isPinch;
      this.isPinch = !1, this.pinchFlag = !1;
      var a = this.getCurrentStore();
      this.emit("pinchEnd", vr(vr({ data: this.data, datas: this.data, isPinch: n, touches: a.getPositions() }, a.getPosition()), { inputEvent: r }));
    }
  }, e.prototype.getCurrentStore = function() {
    return this.clientStores[0];
  }, e.prototype.moveClients = function(r, n, a) {
    var s = this._getPosition(r, a), u = this.isDrag;
    (s.deltaX || s.deltaY) && (this.isDrag = !0);
    var f = !1;
    return !u && this.isDrag && (f = !0), vr(vr({ data: this.data, datas: this.data }, s), { movement: this.getMovement(r), isDrag: this.isDrag, isPinch: this.isPinch, isScroll: !1, isMouseEvent: this._isMouseEvent, isSecondaryButton: this._isSecondaryButton, inputEvent: n, isTrusted: this._isTrusted, isFirstDrag: f });
  }, e.prototype._addStore = function(r) {
    this.clientStores.splice(0, 0, r);
  }, e.prototype._getPosition = function(r, n) {
    var a = this.getCurrentStore(), s = a.getPosition(r, n), u = this.clientStores.slice(1).reduce(function(v, p) {
      var h = p.getPosition();
      return v.distX += h.distX, v.distY += h.distY, v;
    }, s), f = u.distX, c = u.distY;
    return vr(vr({}, s), { distX: f, distY: c });
  }, e.prototype._attchDragEvent = function() {
    var r = this._window, n = this.options.container, a = {
      passive: !1
    };
    this._isDragAPI && (Er(n, "dragover", this.onDrag, a), Er(r, "dragend", this.onDragEnd)), this._useMouse && (Er(n, "mousemove", this.onDrag), Er(r, "mouseup", this.onDragEnd)), this._useTouch && (Er(n, "touchmove", this.onDrag, a), Er(r, "touchend", this.onDragEnd, a), Er(r, "touchcancel", this.onDragEnd, a));
  }, e.prototype._dettachDragEvent = function() {
    var r = this._window, n = this.options.container;
    this._isDragAPI && (mr(n, "dragover", this.onDrag), mr(r, "dragend", this.onDragEnd)), this._useMouse && (mr(n, "mousemove", this.onDrag), mr(r, "mouseup", this.onDragEnd)), this._useTouch && (mr(n, "touchstart", this.onDragStart), mr(n, "touchmove", this.onDrag), mr(r, "touchend", this.onDragEnd), mr(r, "touchcancel", this.onDragEnd));
  }, e.prototype._allowMouseEvent = function() {
    this._preventMouseEvent = !1, clearTimeout(this._preventMouseEventId);
  }, e;
})(Fo);
function Gb(t) {
  for (var e = 5381, r = t.length; r; )
    e = e * 33 ^ t.charCodeAt(--r);
  return e >>> 0;
}
var Fb = Gb;
function Lb(t) {
  return Fb(t).toString(36);
}
function Wb(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function Nb(t, e, r) {
  return r.original ? e : e.replace(/([^};{\s}][^};{]*|^\s*){/mg, function(n, a) {
    var s = a.trim();
    return (s ? Tn(s) : [""]).map(function(u) {
      var f = u.trim();
      return f.indexOf("@") === 0 ? f : f.indexOf(":global") > -1 ? f.replace(/\:global/g, "") : f.indexOf(":host") > -1 ? "".concat(f.replace(/\:host/g, ".".concat(t))) : f ? ".".concat(t, " ").concat(f) : ".".concat(t);
    }).join(", ") + " {";
  });
}
function kb(t, e, r, n, a) {
  var s = di(n), u = s.createElement("style");
  return u.setAttribute("type", "text/css"), u.setAttribute("data-styled-id", t), u.setAttribute("data-styled-count", "1"), r.nonce && u.setAttribute("nonce", r.nonce), u.innerHTML = Nb(t, e, r), (a || s.head || s.body).appendChild(u), u;
}
function Hb(t) {
  var e = "rCS" + Lb(t);
  return {
    className: e,
    inject: function(r, n) {
      n === void 0 && (n = {});
      var a = Wb(r), s = (a || r.ownerDocument || document).querySelector('style[data-styled-id="'.concat(e, '"]'));
      if (!s)
        s = kb(e, t, n, r, a);
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
var Gu = function() {
  return Gu = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, Gu.apply(this, arguments);
};
function Yb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function rd(t, e) {
  var r = Hb(e), n = r.className;
  return kS(function(a, s) {
    var u = a.className, f = u === void 0 ? "" : u;
    a.cspNonce;
    var c = Yb(a, ["className", "cspNonce"]), v = tb();
    return rb(s, function() {
      return v.current;
    }, []), Lp(function() {
      var p = r.inject(v.current, {
        nonce: a.cspNonce
      });
      return function() {
        p.destroy();
      };
    }, []), ye(t, Gu({
      ref: v,
      "data-styled-id": n,
      className: "".concat(f, " ").concat(n)
    }, c));
  });
}
var Fu = function(t, e) {
  return Fu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Fu(t, e);
};
function la(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Fu(t, e);
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
function Xb(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function qb(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
function Ub(t) {
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
function ca(t, e) {
  return z({ events: [], props: [], name: t }, e);
}
var $b = ["n", "w", "s", "e"], df = ["n", "w", "s", "e", "nw", "ne", "sw", "se"];
function Vb(t, e) {
  return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(32 * t, 'px" height="').concat(32 * t, 'px" viewBox="0 0 32 32" ><path d="M 16,5 L 12,10 L 14.5,10 L 14.5,22 L 12,22 L 16,27 L 20,22 L 17.5,22 L 17.5,10 L 20, 10 L 16,5 Z" stroke-linejoin="round" stroke-width="1.2" fill="black" stroke="white" style="transform:rotate(').concat(e, 'deg);transform-origin: 16px 16px"></path></svg>');
}
function Kb(t) {
  var e = Vb(1, t), r = Math.round(t / 45) * 45 % 180, n = "ns-resize";
  return r === 135 ? n = "nwse-resize" : r === 45 ? n = "nesw-resize" : r === 90 && (n = "ew-resize"), "cursor:".concat(n, ";cursor: url('").concat(e, "') 16 16, ").concat(n, ";");
}
var gi = ob(), ed = gi.browser.webkit, nd = ed && (function() {
  var t = typeof window > "u" ? { userAgent: "" } : window.navigator, e = /applewebkit\/([^\s]+)/g.exec(t.userAgent.toLowerCase());
  return e ? parseFloat(e[1]) < 605 : !1;
})(), id = gi.browser.name, ad = parseInt(gi.browser.version, 10), Zb = id === "chrome", Jb = gi.browser.chromium, Qb = parseInt(gi.browser.chromiumVersion, 10) || 0, jb = Zb && ad >= 109 || Jb && Qb >= 109, tC = id === "firefox", rC = parseInt(gi.browser.webkitVersion, 10) >= 612 || ad >= 15, hf = "moveable-", eC = df.map(function(t) {
  var e = "", r = "", n = "center", a = "center", s = "calc(var(--moveable-control-padding, 20) * -1px)";
  return t.indexOf("n") > -1 && (e = "top: ".concat(s, ";"), a = "bottom"), t.indexOf("s") > -1 && (e = "top: 0px;", a = "top"), t.indexOf("w") > -1 && (r = "left: ".concat(s, ";"), n = "right"), t.indexOf("e") > -1 && (r = "left: 0px;", n = "left"), '.around-control[data-direction*="'.concat(t, `"] {
        `).concat(r).concat(e, `
        transform-origin: `).concat(n, " ").concat(a, `;
    }`);
}).join(`
`), nC = `
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
`.concat(eC, `
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
`).concat(Kb(t), `
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

`).concat(nd ? `:global svg *:before {
content:"";
transform-origin: inherit;
}` : "", `
`), iC = [
  [0, 1, 2],
  [1, 0, 3],
  [2, 0, 3],
  [3, 1, 2]
], Lu = 1e-4, Br = 1e-7, fo = 1e-9, Wu = Math.pow(10, 10), Rv = -Wu, aC = {
  n: [0, -1],
  e: [1, 0],
  s: [0, 1],
  w: [-1, 0],
  nw: [-1, -1],
  ne: [1, -1],
  sw: [-1, 1],
  se: [1, 1]
}, gf = {
  n: [0, 1],
  e: [1, 3],
  s: [3, 2],
  w: [2, 0],
  nw: [0],
  ne: [1],
  sw: [2],
  se: [3]
}, od = {
  n: 0,
  s: 180,
  w: 270,
  e: 90,
  nw: 315,
  ne: 45,
  sw: 225,
  se: 135
}, sd = [
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
function va(t, e, r, n, a, s) {
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
  var a = t.length === 16, s = a ? 4 : 3, u = zn(t, r, n, s), f = F(u, 4), c = F(f[0], 2), v = c[0], p = c[1], h = F(f[1], 2), d = h[0], m = h[1], _ = F(f[2], 2), x = _[0], y = _[1], b = F(f[3], 2), E = b[0], T = b[1], M = F(or(t, e, s), 2), D = M[0], w = M[1], O = Math.min(v, d, x, E), I = Math.min(p, m, y, T), P = Math.max(v, d, x, E), B = Math.max(p, m, y, T);
  v = v - O || 0, d = d - O || 0, x = x - O || 0, E = E - O || 0, p = p - I || 0, m = m - I || 0, y = y - I || 0, T = T - I || 0, D = D - O || 0, w = w - I || 0;
  var H = t[0], W = t[s + 1], L = Pr(H * W);
  return {
    left: O,
    top: I,
    right: P,
    bottom: B,
    origin: [D, w],
    pos1: [v, p],
    pos2: [d, m],
    pos3: [x, y],
    pos4: [E, T],
    direction: L
  };
}
function ud(t, e) {
  var r = e.clientX, n = e.clientY, a = e.datas, s = t.state, u = s.moveableClientRect, f = s.rootMatrix, c = s.is3d, v = s.pos1, p = u.left, h = u.top, d = c ? 4 : 3, m = F(bt(vi(f, [r - p, n - h], d), v), 2), _ = m[0], x = m[1], y = F(Ie({ datas: a, distX: _, distY: x }), 2), b = y[0], E = y[1];
  return [b, E];
}
function Bn(t, e) {
  var r = e.datas, n = t.state, a = n.allMatrix, s = n.beforeMatrix, u = n.is3d, f = n.left, c = n.top, v = n.origin, p = n.offsetMatrix, h = n.targetMatrix, d = n.transformOrigin, m = u ? 4 : 3;
  r.is3d = u, r.matrix = a, r.targetMatrix = h, r.beforeMatrix = s, r.offsetMatrix = p, r.transformOrigin = d, r.inverseMatrix = Oe(a, m), r.inverseBeforeMatrix = Oe(s, m), r.absoluteOrigin = On(qt([f, c], v), m), r.startDragBeforeDist = Mr(r.inverseBeforeMatrix, r.absoluteOrigin, m), r.startDragDist = Mr(r.inverseMatrix, r.absoluteOrigin, m);
}
function oC(t) {
  return oi(t.datas.beforeTransform, [50, 50], 100, 100).direction;
}
function Lo(t, e, r) {
  var n = e.datas, a = e.originalDatas.beforeRenderable, s = n.transformIndex, u = a.nextTransforms, f = u.length, c = a.nextTransformAppendedIndexes, v = -1;
  s === -1 ? (r === "translate" ? v = 0 : r === "rotate" && (v = qe(u, function(m) {
    return m.match(/scale\(/g);
  })), v === -1 && (v = u.length), n.transformIndex = v) : Yr(c, function(m) {
    return m.index === s && m.functionName === r;
  }) ? v = s : v = s + c.filter(function(m) {
    return m.index < s;
  }).length;
  var p = PE(u, t.state, v), h = p.targetFunction, d = r === "rotate" ? "rotateZ" : r;
  n.beforeFunctionTexts = p.beforeFunctionTexts, n.afterFunctionTexts = p.afterFunctionTexts, n.beforeTransform = p.beforeFunctionMatrix, n.beforeTransform2 = p.beforeFunctionMatrix2, n.targetTansform = p.targetFunctionMatrix, n.afterTransform = p.afterFunctionMatrix, n.afterTransform2 = p.afterFunctionMatrix2, n.targetAllTransform = p.allFunctionMatrix, h.functionName === d ? (n.afterFunctionTexts.splice(0, 1), n.isAppendTransform = !1) : f > v && (n.isAppendTransform = !0, a.nextTransformAppendedIndexes = it(it([], F(c), !1), [{
    functionName: r,
    index: v,
    isAppend: !0
  }], !1));
}
function Wo(t, e, r) {
  return "".concat(t.beforeFunctionTexts.join(" "), " ").concat(t.isAppendTransform ? r : e, " ").concat(t.afterFunctionTexts.join(" "));
}
function sC(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = F(ld({ datas: e, distX: r, distY: n }), 2), s = a[0], u = a[1], f = fd(e, cb([s, u], 4));
  return Mr(f, On([0, 0, 0], 4), 4);
}
function fd(t, e, r) {
  var n = t.beforeTransform, a = t.afterTransform, s = t.beforeTransform2, u = t.afterTransform2, f = t.targetAllTransform, c = r ? Jt(f, e, 4) : Jt(e, f, 4), v = Jt(Oe(r ? s : n, 4), c, 4), p = Jt(v, Oe(r ? u : a, 4), 4);
  return p;
}
function ld(t) {
  var e = t.datas, r = t.distX, n = t.distY, a = e.inverseBeforeMatrix, s = e.is3d, u = e.startDragBeforeDist, f = e.absoluteOrigin, c = s ? 4 : 3;
  return bt(Mr(a, qt(f, [r, n]), c), u);
}
function Ie(t, e) {
  var r = t.datas, n = t.distX, a = t.distY, s = r.inverseBeforeMatrix, u = r.inverseMatrix, f = r.is3d, c = r.startDragBeforeDist, v = r.startDragDist, p = r.absoluteOrigin, h = f ? 4 : 3;
  return bt(Mr(e ? s : u, qt(p, [n, a]), h), e ? c : v);
}
function uC(t, e) {
  var r = t.datas, n = t.distX, a = t.distY;
  r.beforeMatrix;
  var s = r.matrix, u = r.is3d;
  r.startDragBeforeDist;
  var f = r.startDragDist, c = r.absoluteOrigin, v = u ? 4 : 3;
  return bt(Mr(s, qt(f, [n, a]), v), c);
}
function fC(t, e, r, n, a, s) {
  return n === void 0 && (n = e), a === void 0 && (a = r), s === void 0 && (s = [0, 0]), t ? t.map(function(u, f) {
    var c = ia(u), v = c.value, p = c.unit, h = f ? a : n, d = f ? r : e;
    if (u === "%" || isNaN(v)) {
      var m = h ? s[f] / h : 0;
      return d * m;
    } else if (p !== "%")
      return v;
    return d * v / 100;
  }) : s;
}
function cd(t) {
  var e = [];
  return t[1] >= 0 && (t[0] >= 0 && e.push(3), t[0] <= 0 && e.push(2)), t[1] <= 0 && (t[0] >= 0 && e.push(1), t[0] <= 0 && e.push(0)), e;
}
function lC(t, e) {
  return cd(e).map(function(r) {
    return t[r];
  });
}
function du(t, e) {
  var r = (e + 1) / 2;
  return [
    bo(t[0][0], t[1][0], r, 1 - r),
    bo(t[0][1], t[1][1], r, 1 - r)
  ];
}
function xr(t, e) {
  var r = du([t[0], t[1]], e[0]), n = du([t[2], t[3]], e[0]);
  return du([r, n], e[1]);
}
function cC(t, e, r, n, a, s) {
  var u = zn(e, r, n, a), f = xr(u, s), c = t[0] - f[0], v = t[1] - f[1];
  return [c, v];
}
function pa(t, e, r, n) {
  return Jt(t, Vi(e, n, r), n);
}
function vC(t, e, r, n) {
  var a = t.transformOrigin, s = t.offsetMatrix, u = t.is3d, f = u ? 4 : 3, c;
  if (Hr(r)) {
    var v = e.beforeTransform, p = e.afterTransform;
    n ? c = Ce(ji(r), 4, f) : c = Ce(Jt(Jt(v, ji([r]), 4), p, 4), 4, f);
  } else
    c = r;
  return pa(s, c, a, f);
}
function pC(t, e) {
  var r = t.transformOrigin, n = t.offsetMatrix, a = t.is3d, s = t.targetMatrix, u = t.targetAllTransform, f = a ? 4 : 3;
  return pa(n, Jt(u || s, cf(e, f), f), r, f);
}
function No(t, e) {
  var r = mi(e);
  return {
    setTransform: function(n, a) {
      a === void 0 && (a = -1), r.startTransforms = dr(n) ? n : ln(n), Nu(t, e, a);
    },
    setTransformIndex: function(n) {
      Nu(t, e, n);
    }
  };
}
function ko(t, e, r) {
  var n = mi(e), a = n.startTransforms;
  Nu(t, e, qe(a, function(s) {
    return s.indexOf("".concat(r, "(")) === 0;
  }));
}
function Nu(t, e, r) {
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
function mf(t, e) {
  var r = mi(t);
  r.nextTransforms = ln(e);
}
function mi(t) {
  return t.originalDatas.beforeRenderable;
}
function Do(t) {
  var e = t.originalDatas.beforeRenderable;
  return e.nextTransforms;
}
function lo(t) {
  return (Do(t) || []).join(" ");
}
function co(t) {
  return mi(t).nextStyle;
}
function vd(t, e, r, n, a) {
  mf(a, e);
  var s = Ir.drag(t, va(a, t.state, r, n)), u = s ? s.transform : e;
  return z(z({ transform: e, drag: s }, Ar({
    transform: u
  }, a)), { afterTransform: u });
}
function _f(t, e, r, n, a, s) {
  var u = vC(t.state, a, e, s), f = gC(t, r, n, u);
  return f;
}
function pd(t, e, r, n, a, s, u) {
  var f = _f(t, e, r, a, s, u), c = t.state, v = c.left, p = c.top, h = t.props.groupable, d = h ? v : 0, m = h ? p : 0, _ = bt(n, f);
  return bt(_, [d, m]);
}
function dC(t, e, r, n, a, s, u) {
  var f = pd(t, e, r, n, a, s, u);
  return f;
}
function hC(t, e, r) {
  return [
    e ? -1 + t[0] / (e / 2) : 0,
    r ? -1 + t[1] / (r / 2) : 0
  ];
}
function gC(t, e, r, n) {
  n === void 0 && (n = t.state.allMatrix);
  var a = t.state, s = a.width, u = a.height, f = a.is3d, c = f ? 4 : 3, v = [
    s / 2 * (1 + e[0]) + r[0],
    u / 2 * (1 + e[1]) + r[1]
  ];
  return or(n, v, c);
}
function mC(t, e, r) {
  var n = r.fixedDirection, a = r.fixedPosition, s = r.fixedOffset;
  return pd(t, "rotate(".concat(e, "deg)"), n, a, s, r);
}
function _C(t, e, r, n, a, s) {
  var u = t.props.groupable, f = t.state, c = f.transformOrigin, v = f.offsetMatrix, p = f.is3d, h = f.width, d = f.height, m = f.left, _ = f.top, x = s.fixedDirection, y = s.nextTargetMatrix || f.targetMatrix, b = p ? 4 : 3, E = fC(a, e, r, h, d, c), T = u ? m : 0, M = u ? _ : 0, D = pa(v, y, E, b), w = cC(n, D, e, r, b, x);
  return bt(w, [T, M]);
}
function xC(t, e) {
  return xr(ce(t.state), e);
}
function yC(t, e) {
  var r = t.targetGesto, n = t.controlGesto, a;
  return r?.isFlag() && (a = r.getEventData()[e]), !a && n?.isFlag() && (a = n.getEventData()[e]), a || {};
}
function SC(t) {
  if (t && t.getRootNode) {
    var e = t.getRootNode();
    if (e.nodeType === 11)
      return e;
  }
}
function bC(t) {
  var e = t("scale"), r = t("rotate"), n = t("translate"), a = [];
  return n && n !== "0px" && n !== "none" && a.push("translate(".concat(n.split(/\s+/).join(","), ")")), r && r !== "1" && r !== "none" && a.push("rotate(".concat(r, ")")), e && e !== "1" && e !== "none" && a.push("scale(".concat(e.split(/\s+/).join(","), ")")), a;
}
function dd(t, e, r) {
  for (var n = t, a = [], s = nf(t) || pn(t), u = !r && t === e || t === s, f = u, c = !1, v = 3, p, h, d, m = !1, _ = ra(e, e, !0).offsetParent, x = 1; n && !f; ) {
    f = u;
    var y = Xr(n), b = y("position"), E = Ld(n), T = b === "fixed", M = bC(y), D = vb(xE(E)), w = void 0, O = !1, I = !1, P = 0, B = 0, H = 0, W = 0, L = {
      hasTransform: !1,
      fixedContainer: null
    };
    T && (m = !0, L = EE(n), _ = L.fixedContainer);
    var Y = D.length;
    !c && (Y === 16 || M.length) && (c = !0, v = 4, Uu(a), d && (d = Ce(d, 3, 4))), c && Y === 9 && (D = Ce(D, 3, 4));
    var X = CE(n, t), Q = X.tagName, j = X.hasOffset, V = X.isSVG, et = X.origin, nt = X.targetOrigin, U = X.offset, lt = F(U, 2), vt = lt[0], ut = lt[1];
    Q === "svg" && !n.ownerSVGElement && d && (a.push({
      type: "target",
      target: n,
      matrix: wE(n, v)
    }), a.push({
      type: "offset",
      target: n,
      matrix: nr(v)
    }));
    var st = parseFloat(y("zoom")) || 1;
    if (T)
      w = L.fixedContainer, O = !0;
    else {
      var at = ra(n, e, !1, !0, y), dt = at.offsetZoom;
      if (w = at.offsetParent, O = at.isEnd, I = at.isStatic, x *= dt, (at.isCustomElement || dt !== 1) && I)
        vt -= w.offsetLeft, ut -= w.offsetTop;
      else if (tC || jb) {
        var _t = at.parentSlotElement;
        if (_t) {
          for (var Tt = w, Wt = 0, ot = 0; Tt && SC(Tt); )
            Wt += Tt.offsetLeft, ot += Tt.offsetTop, Tt = Tt.offsetParent;
          vt -= Wt, ut -= ot;
        }
      }
    }
    if (ed && !rC && j && !V && I && (b === "relative" || b === "static") && (vt -= w.offsetLeft, ut -= w.offsetTop, u = u || O), T)
      j && L.hasTransform && (H = w.clientLeft, W = w.clientTop);
    else if (j && _ !== w && (P = w.clientLeft, B = w.clientTop), j && w === s) {
      var gt = Wd(n, !1);
      vt += gt[0], ut += gt[1];
    }
    if (a.push({
      type: "target",
      target: n,
      matrix: Vi(D, v, et)
    }), M.length && (a.push({
      type: "offset",
      target: n,
      matrix: nr(v)
    }), a.push({
      type: "target",
      target: n,
      matrix: Vi(ji(M), v, et)
    })), j) {
      var kt = n === t, yt = kt ? 0 : n.scrollLeft, Et = kt ? 0 : n.scrollTop;
      a.push({
        type: "offset",
        target: n,
        matrix: In([
          vt - yt + P - H,
          ut - Et + B - W
        ], v)
      });
    } else
      a.push({
        type: "offset",
        target: n,
        origin: et
      });
    if (st !== 1 && a.push({
      type: "zoom",
      target: n,
      matrix: Vi(cf([st, st], v), v, [0, 0])
    }), d || (d = D), p || (p = et), h || (h = nt), f || T)
      break;
    n = w, u = O, (!r || n === s) && (f = u);
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
function CC(t) {
  var e = Dn?.get(t);
  if (e)
    return e;
  var r = Ki(t, !0);
  return Dn && Dn.set(t, r), r;
}
function EC(t, e) {
  if (ei) {
    var r = Yr(ei, function(a) {
      return a[0][0] == t && a[0][1] == e;
    });
    if (r)
      return r[1];
  }
  var n = dd(t, e, !0);
  return ei && ei.push([[t, e], n]), n;
}
function Xr(t) {
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
function Se(t, e, r) {
  var n = r.originalDatas;
  n.groupable = n.groupable || {};
  var a = n.groupable;
  a.childDatas = a.childDatas || [];
  var s = a.childDatas;
  return t.moveables.map(function(u, f) {
    return s[f] = s[f] || {}, s[f][e] = s[f][e] || {}, z(z({}, r), { isRequestChild: !0, datas: s[f][e], originalDatas: s[f] });
  });
}
function hu(t, e, r, n, a, s, u) {
  var f = !!r.match(/Start$/g), c = !!r.match(/End$/g), v = a.isPinch, p = a.datas, h = Se(t, e.name, a), d = t.moveables, m = [], _ = h.map(function(x, y) {
    var b = d[y], E = b.state, T = E.gestos, M = x;
    if (f)
      M = new fi(u).dragStart(n, x), m.push(M);
    else {
      if (T[u] || (T[u] = p.childGestos[y]), !T[u])
        return;
      M = va(x, E, n, v, s, u), m.push(M);
    }
    var D = e[r](b, z(z({}, M), { parentFlag: !0 }));
    return c && (T[u] = null), D;
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
  var u = !!r.match(/End$/g), f = Se(t, e.name, n), c = t.moveables, v = f.map(function(p, h) {
    var d = c[h], m = p;
    m = a(d, p);
    var _ = e[r](d, z(z({}, m), { parentFlag: !0 }));
    return u && (d.state.gestos = {}), _;
  });
  return v;
}
function Mo(t, e, r, n) {
  var a = r.fixedDirection, s = r.fixedPosition, u = n.datas.startPositions || ce(e.state), f = xr(u, a), c = F(Mr(fa(-t.rotation / 180 * Math.PI, 3), [f[0] - s[0], f[1] - s[1], 1], 3), 2), v = c[0], p = c[1];
  return n.datas.originalX = v, n.datas.originalY = p, n;
}
function hd(t, e, r, n) {
  var a = t.getState(), s = a.renderPoses, u = a.rotation, f = a.direction, c = An(t.props, e).zoom, v = $i(u / Math.PI * 180), p = {}, h = t.renderState;
  h.renderDirectionMap || (h.renderDirectionMap = {});
  var d = h.renderDirectionMap;
  r.forEach(function(_) {
    var x = _.dir;
    p[x] = !0;
  });
  var m = Pr(f);
  return r.map(function(_) {
    var x = _.data, y = _.classNames, b = _.dir, E = gf[b];
    if (!E || !p[b])
      return null;
    d[b] = !0;
    var T = (Ot(v, 15) + m * od[b] + 720) % 180, M = {};
    return Ue(x).forEach(function(D) {
      M["data-".concat(D)] = x[D];
    }), n.createElement("div", z({ className: St.apply(void 0, it(["control", "direction", b, e], F(y), !1)), "data-rotation": T, "data-direction": b }, M, { key: "direction-".concat(b), style: Io.apply(void 0, it([u, c], F(E.map(function(D) {
      return s[D];
    })), !1)) }));
  });
}
function gd(t, e, r, n) {
  var a = An(t.props, r), s = a.renderDirections, u = s === void 0 ? e : s, f = a.displayAroundControls;
  if (!u)
    return [];
  var c = u === !0 ? df : u;
  return it(it([], F(f ? yd(t, n, r, c) : []), !1), F(hd(t, r, c.map(function(v) {
    return {
      data: {},
      classNames: [],
      dir: v
    };
  }), n)), !1);
}
function ta(t, e, r, n, a, s) {
  for (var u = [], f = 6; f < arguments.length; f++)
    u[f - 6] = arguments[f];
  var c = cr(r, n), v = e ? Ot(c / Math.PI * 180, 15) % 180 : -1;
  return t.createElement("div", { key: "line-".concat(s), className: St.apply(void 0, it(["line", "direction", e ? "edge" : "", e], F(u), !1)), "data-rotation": v, "data-line-key": s, "data-direction": e, style: Xi(r, n, a, c) });
}
function md(t, e, r, n, a) {
  var s = r === !0 ? $b : r;
  return s.map(function(u, f) {
    var c = F(gf[u], 2), v = c[0], p = c[1];
    if (p != null)
      return ta(t, u, n[v], n[p], a, "".concat(e, "Edge").concat(f), e);
  }).filter(Boolean);
}
function _d(t) {
  return function(e, r) {
    var n = An(e.props, t).edge;
    return n && (n === !0 || n.length) ? it(it([], F(md(r, t, n, e.getState().renderPoses, e.props.zoom)), !1), F(wC(e, t, r)), !1) : xd(e, t, r);
  };
}
function xd(t, e, r) {
  return gd(t, df, e, r);
}
function wC(t, e, r) {
  return gd(t, ["nw", "ne", "sw", "se"], e, r);
}
function yd(t, e, r, n) {
  var a = t.renderState;
  a.renderDirectionMap || (a.renderDirectionMap = {});
  var s = t.getState(), u = s.renderPoses, f = s.rotation, c = s.direction, v = a.renderDirectionMap, p = t.props.zoom, h = Pr(c), d = f / Math.PI * 180;
  return (n || Ue(v)).map(function(m) {
    var _ = gf[m];
    if (!_)
      return null;
    var x = (Ot(d, 15) + h * od[m] + 720) % 180, y = ["around-control"];
    return r && y.push("direction", r), e.createElement("div", { className: St.apply(void 0, it([], F(y), !1)), "data-rotation": x, "data-direction": m, key: "direction-around-".concat(m), style: Io.apply(void 0, it([f, p], F(_.map(function(b) {
      return u[b];
    })), !1)) });
  });
}
function xf(t, e, r) {
  var n = t || {}, a = n.position, s = a === void 0 ? "client" : a, u = n.left, f = u === void 0 ? -1 / 0 : u, c = n.top, v = c === void 0 ? -1 / 0 : c, p = n.right, h = p === void 0 ? 1 / 0 : p, d = n.bottom, m = d === void 0 ? 1 / 0 : d, _ = {
    position: s,
    left: f,
    top: v,
    right: h,
    bottom: m
  };
  return {
    vertical: Tv(_, e, !0),
    horizontal: Tv(_, r, !1)
  };
}
function Ho(t, e) {
  var r = t.state, n = r.containerClientRect, a = n.clientHeight, s = n.clientWidth, u = n.clientLeft, f = n.clientTop, c = r.snapOffset, v = c.left, p = c.top, h = c.right, d = c.bottom, m = e || t.props.bounds || {}, _ = m.position || "client", x = _ === "css", y = m.left, b = y === void 0 ? -1 / 0 : y, E = m.top, T = E === void 0 ? -1 / 0 : E, M = m.right, D = M === void 0 ? x ? -1 / 0 : 1 / 0 : M, w = m.bottom, O = w === void 0 ? x ? -1 / 0 : 1 / 0 : w;
  return x && (D = s + h - v - D, O = a + d - p - O), {
    left: b + v - u,
    right: D + v - u,
    top: T + p - f,
    bottom: O + p - f
  };
}
function DC(t, e, r) {
  var n = Ho(t), a = n.left, s = n.top, u = n.right, f = n.bottom, c = F(r, 2), v = c[0], p = c[1], h = F(bt(r, e), 2), d = h[0], m = h[1];
  J(d) < Br && (d = 0), J(m) < Br && (m = 0);
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
    var E = m / d, T = r[1] - E * v, M = 0, D = 0, w = !1;
    x && u <= v ? (M = E * u + T, D = u, w = !0) : !x && v <= a && (M = E * a + T, D = a, w = !0), w && (M < s || M > f) && (w = !1), w || (_ && f <= p ? (M = f, D = (M - T) / E, w = !0) : !_ && p <= s && (M = s, D = (M - T) / E, w = !0)), w && (y.isBound = !0, y.pos = D, y.offset = v - D, b.isBound = !0, b.pos = M, b.offset = p - M);
  }
  return {
    vertical: y,
    horizontal: b
  };
}
function Tv(t, e, r) {
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
    return J(v.offset) - J(c.offset);
  });
}
function Ov(t, e, r) {
  var n = r ? t.map(function(a) {
    return ua(a, r);
  }) : t;
  return n.some(function(a) {
    return a[0] < e.left && J(a[0] - e.left) > 0.1 || a[0] > e.right && J(a[0] - e.right) > 0.1 || a[1] < e.top && J(a[1] - e.top) > 0.1 || a[1] > e.bottom && J(a[1] - e.bottom) > 0.1;
  });
}
function MC(t, e, r) {
  var n = le(t), a = Math.sqrt(n * n - e * e) || 0;
  return [a, -a].sort(function(s, u) {
    return J(s - t[r ? 0 : 1]) - J(u - t[r ? 0 : 1]);
  }).map(function(s) {
    return cr([0, 0], r ? [s, e] : [e, s]);
  });
}
function RC(t, e, r, n, a) {
  if (!t.props.bounds)
    return [];
  var s = a * Math.PI / 180, u = Ho(t), f = u.left, c = u.top, v = u.right, p = u.bottom, h = f - n[0], d = v - n[0], m = c - n[1], _ = p - n[1], x = {
    left: h,
    top: m,
    right: d,
    bottom: _
  };
  if (!Ov(r, x, 0))
    return [];
  var y = [];
  return [
    [h, 0],
    [d, 0],
    [m, 1],
    [_, 1]
  ].forEach(function(b) {
    var E = F(b, 2), T = E[0], M = E[1];
    r.forEach(function(D) {
      var w = cr([0, 0], D);
      y.push.apply(y, it([], F(MC(D, T, M).map(function(O) {
        return s + O - w;
      }).filter(function(O) {
        return !Ov(e, x, O);
      }).map(function(O) {
        return Ot(O * 180 / Math.PI, Br);
      })), !1));
    });
  }), y;
}
var TC = ["left", "right", "center"], OC = ["top", "bottom", "middle"], Iv = {
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
function yf(t) {
  return t === !1 ? {} : t === !0 || !t ? { left: !0, right: !0, top: !0, bottom: !0 } : t;
}
function IC(t, e) {
  var r = yf(t), n = {};
  for (var a in r)
    a in e && r[a] && (n[a] = e[a]);
  return n;
}
function Sf(t, e) {
  var r = IC(t, e), n = OC.filter(function(s) {
    return s in r;
  }), a = TC.filter(function(s) {
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
function PC(t, e, r) {
  var n = or(t, [e.clientLeft, e.clientTop], r);
  return [
    e.left + n[0],
    e.top + n[1]
  ];
}
function AC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  Math.abs(a) < pr && (a = 0), Math.abs(s) < pr && (s = 0);
  var u = 0, f = 0, c = 0;
  return a ? s ? (u = -s / a, f = 1, c = u * r[0] - r[1]) : (f = 1, c = -r[1]) : (u = -1, c = r[0]), [u, f, c].map(function(v) {
    return Ot(v, pr);
  });
}
var Sd = "snapRotationThreshold", bd = "snapRotationDegrees", Cd = "snapHorizontalThreshold", Ed = "snapVerticalThreshold";
function Yo(t, e, r, n, a, s, u) {
  var f;
  n === void 0 && (n = []), a === void 0 && (a = []);
  var c = t.props, v = ((f = t.state.snapThresholdInfo) === null || f === void 0 ? void 0 : f.multiples) || [1, 1], p = Uv(u, c[Cd], 5), h = Uv(s, c[Ed], 5);
  return wd(t.state.guidelines, e, r, n, a, p, h, v);
}
function wd(t, e, r, n, a, s, u, f) {
  return {
    vertical: Av(t, "vertical", e, u * f[0], n),
    horizontal: Av(t, "horizontal", r, s * f[1], a)
  };
}
function BC(t, e, r) {
  var n = F(r, 2), a = n[0], s = n[1], u = F(e, 2), f = u[0], c = u[1], v = F(bt(r, e), 2), p = v[0], h = v[1], d = h > 0, m = p > 0;
  p = Po(p), h = Po(h);
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
  var y = Yo(t, p ? [a] : [], h ? [s] : [], [], [], void 0, void 0), b = y.vertical, E = y.horizontal;
  b.posInfos.filter(function(Q) {
    var j = Q.pos;
    return m ? j >= f : j <= f;
  }), E.posInfos.filter(function(Q) {
    var j = Q.pos;
    return d ? j >= c : j <= c;
  }), b.isSnap = b.posInfos.length > 0, E.isSnap = E.posInfos.length > 0;
  var T = ku(b), M = T.isSnap, D = T.guideline, w = ku(E), O = w.isSnap, I = w.guideline, P = O ? I.pos[1] : 0, B = M ? D.pos[0] : 0;
  if (p === 0)
    O && (x.isSnap = !0, x.pos = I.pos[1], x.offset = s - x.pos);
  else if (h === 0)
    M && (_.isSnap = !0, _.pos = B, _.offset = a - B);
  else {
    var H = h / p, W = r[1] - H * a, L = 0, Y = 0, X = !1;
    M ? (Y = B, L = H * Y + W, X = !0) : O && (L = P, Y = (L - W) / H, X = !0), X && (_.isSnap = !0, _.pos = Y, _.offset = a - Y, x.isSnap = !0, x.pos = L, x.offset = s - L);
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
function Pv(t, e, r, n) {
  var a = Sf(t.props.snapDirections, e), s = Yo(t, a.vertical, a.horizontal, a.verticalNames.map(function(c) {
    return sn(c);
  }), a.horizontalNames.map(function(c) {
    return sn(c);
  }), r, n), u = sn(a.horizontalNames[s.horizontal.index]), f = sn(a.verticalNames[s.vertical.index]);
  return {
    vertical: z(z({}, s.vertical), { direction: f }),
    horizontal: z(z({}, s.horizontal), { direction: u })
  };
}
function ku(t) {
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
function Av(t, e, r, n, a) {
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
        dist: J(b),
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
function zC(t, e, r, n, a) {
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
  }) : t.props.keepRatio ? s.push([-1, -1], [-1, 1], [1, -1], [1, 1], r) : (s.push.apply(s, it([], F(lC([
    [-1, -1],
    [1, -1],
    [-1, -1],
    [1, 1]
  ], r)), !1)), s.length > 1 && s.push([
    (s[0][0] + s[1][0]) / 2,
    (s[0][1] + s[1][1]) / 2
  ]));
  var u = s.map(function(d) {
    return xr(e, d);
  }), f = u.map(function(d) {
    return d[0];
  }), c = u.map(function(d) {
    return d[1];
  }), v = Yo(t, f, c, s.map(function(d) {
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
function Dd(t, e) {
  var r = J(t.offset), n = J(e.offset);
  return t.isBound && e.isBound ? n - r : t.isBound ? -1 : e.isBound ? 1 : t.isSnap && e.isSnap ? n - r : t.isSnap ? -1 : e.isSnap || r < Br ? 1 : n < Br ? -1 : r - n;
}
function Ro(t, e) {
  return t.slice().sort(function(r, n) {
    var a = r.sign[e], s = n.sign[e], u = r.offset[e], f = n.offset[e];
    if (a) {
      if (!s)
        return -1;
    } else return 1;
    return Dd({ isBound: r.isBound, isSnap: r.isSnap, offset: u }, { isBound: n.isBound, isSnap: n.isSnap, offset: f });
  })[0];
}
function GC(t, e, r) {
  var n = [];
  if (r)
    J(e[0]) !== 1 || J(e[1]) !== 1 ? n.push([e, [-1, -1]], [e, [-1, 1]], [e, [1, -1]], [e, [1, 1]]) : n.push([e, [t[0], -t[1]]], [e, [-t[0], t[1]]]), n.push([e, t]);
  else if (t[0] && t[1] || !t[0] && !t[1]) {
    var a = t[0] ? t : [1, 1];
    [1, -1].forEach(function(u) {
      [1, -1].forEach(function(f) {
        var c = [u * a[0], f * a[1]];
        e[0] === c[0] && e[1] === c[1] || n.push([e, c]);
      });
    });
  } else if (t[0]) {
    var s = J(e[0]) === 1 ? [1] : [1, -1];
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
    var s = J(e[1]) === 1 ? [1] : [1, -1];
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
function Md(t, e) {
  var r = Du([e[0][0], e[1][0]]), n = Du([e[0][1], e[1][1]]);
  return {
    vertical: r <= t[0],
    horizontal: n <= t[1]
  };
}
function bf(t, e) {
  var r = F(e, 2), n = r[0], a = r[1], s = a[0] - n[0], u = a[1] - n[1];
  J(s) < Br && (s = 0), J(u) < Br && (u = 0);
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
function Rd(t, e, r, n) {
  return n === void 0 && (n = Br), t.every(function(a) {
    var s = bf(a, e), u = s <= 0;
    return u === r || J(s) <= n;
  });
}
function Bv(t, e, r, n, a) {
  return a === void 0 && (a = 0), n && e - a <= t || !n && t <= r + a ? {
    isBound: !0,
    offset: n ? e - t : r - t
  } : {
    isBound: !1,
    offset: 0
  };
}
function FC(t, e) {
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
  if (Rd([
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
  var y = un(r, u, m, a), b = un(r, u, x, a), E = un(r, u, d, s), T = un(r, u, _, s), M = y.isBound && b.isBound, D = y.isBound || b.isBound, w = E.isBound && T.isBound, O = E.isBound || T.isBound, I = ci(y.offset, b.offset), P = ci(E.offset, T.offset), B = [0, 0], H = !1, W = !1;
  return J(P) < J(I) ? (B = [I, 0], H = D, W = M) : (B = [0, P], H = O, W = w), {
    isAllBound: W,
    isVerticalBound: D,
    isHorizontalBound: O,
    isBound: H,
    offset: B
  };
}
function un(t, e, r, n, a, s) {
  var u = F(e, 2), f = u[0], c = u[1], v = t[0], p = r[0], h = r[1], d = Po(h[1] - p[1]), m = Po(h[0] - p[0]), _ = c, x = f, y = -f / c;
  if (m) {
    if (!d) {
      if (s && !_)
        return {
          isBound: !1,
          offset: 0
        };
      if (x) {
        var M = (p[1] - v[1]) / y + v[0];
        return Bv(M, p[0], h[0], n, a);
      } else {
        var E = p[1] - v[1], T = J(E) <= (a || 0);
        return {
          isBound: T,
          offset: T ? E : 0
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
      return Bv(b, p[1], h[1], n, a);
    } else {
      var E = p[0] - v[0], T = J(E) <= (a || 0);
      return {
        isBound: T,
        offset: T ? E : 0
      };
    }
  }
  return {
    isBound: !1,
    offset: 0
  };
}
function Td(t, e, r) {
  return e.map(function(n) {
    var a = FC(t, n), s = a.isBound, u = a.offset, f = a.isVerticalBound, c = a.isHorizontalBound, v = n.multiple, p = Ie({
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
function LC(t, e, r) {
  var n, a = Cf(t, e, [0, 0], !1).map(function(d) {
    return z(z({}, d), { multiple: d.multiple.map(function(m) {
      return J(m) * 2;
    }) });
  }), s = Td(t, a, r), u = Ro(s, 0), f = Ro(s, 1), c = 0, v = 0, p = u.isVerticalBound || f.isVerticalBound, h = u.isHorizontalBound || f.isHorizontalBound;
  return (p || h) && (n = F(uC({
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
function WC(t, e) {
  var r = [], n = t[0], a = t[1];
  return n && a ? r.push([[0, a * 2], t, [-n, a]], [[n * 2, 0], t, [n, -a]]) : n ? (r.push([[n * 2, 0], [n, 1], [n, -1]]), e && r.push([[0, -1], [n, -1], [-n, -1]], [[0, 1], [n, 1], [-n, 1]])) : a ? (r.push([[0, a * 2], [1, a], [-1, a]]), e && r.push([[-1, 0], [-1, a], [-1, -a]], [[1, 0], [1, a], [1, -a]])) : r.push([[-1, 0], [-1, -1], [-1, 1]], [[1, 0], [1, -1], [1, 1]], [[0, -1], [-1, -1], [1, -1]], [[0, 1], [-1, 1], [1, 1]]), r;
}
function Cf(t, e, r, n) {
  var a = t.state, s = a.allMatrix, u = a.is3d, f = zn(s, 100, 100, u ? 4 : 3), c = xr(f, [0, 0]);
  return WC(r, n).map(function(v) {
    var p = F(v, 3), h = p[0], d = p[1], m = p[2], _ = [
      xr(f, d),
      xr(f, m)
    ], x = AC(_), y = Md(c, _), b = y.vertical, E = y.horizontal, T = bf(c, _) <= 0;
    return {
      multiple: h,
      centerSign: T,
      verticalSign: b,
      horizontalSign: E,
      lineConstants: x,
      line: [
        xr(e, d),
        xr(e, m)
      ]
    };
  });
}
function zv(t, e, r, n) {
  var a = n ? t.map(function(s) {
    return ua(s, n);
  }) : t;
  return [
    [a[0], a[1]],
    [a[1], a[3]],
    [a[3], a[2]],
    [a[2], a[0]]
  ].some(function(s) {
    var u = bf(r, s) <= 0;
    return !Rd(e, s, u);
  });
}
function NC(t) {
  var e = F(t, 2), r = e[0], n = e[1], a = n[0] - r[0], s = n[1] - r[1];
  if (!a)
    return J(r[0]);
  if (!s)
    return J(r[1]);
  var u = s / a;
  return J((-u * r[0] + r[1]) / Math.sqrt(Math.pow(u, 2) + 1));
}
function kC(t) {
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
function HC(t, e, r, n, a) {
  var s = t.props.innerBounds, u = a * Math.PI / 180;
  if (!s)
    return [];
  var f = s.left, c = s.top, v = s.width, p = s.height, h = f - n[0], d = f + v - n[0], m = c - n[1], _ = c + p - n[1], x = [
    [h, m],
    [d, m],
    [h, _],
    [d, _]
  ], y = xr(r, [0, 0]);
  if (!zv(r, x, y, 0))
    return [];
  var b = [], E = x.map(function(T) {
    return [
      le(T),
      cr([0, 0], T)
    ];
  });
  return [
    [r[0], r[1]],
    [r[1], r[3]],
    [r[3], r[2]],
    [r[2], r[0]]
  ].forEach(function(T) {
    var M = cr([0, 0], kC(T)), D = NC(T);
    b.push.apply(b, it([], F(E.filter(function(w) {
      var O = F(w, 1), I = O[0];
      return I && D <= I;
    }).map(function(w) {
      var O = F(w, 2), I = O[0], P = O[1], B = Math.acos(I ? D / I : 0), H = P + B, W = P - B;
      return [
        u + H - M,
        u + W - M
      ];
    }).reduce(function(w, O) {
      return w.push.apply(w, it([], F(O), !1)), w;
    }, []).filter(function(w) {
      return !zv(e, x, y, w);
    }).map(function(w) {
      return Ot(w * 180 / Math.PI, Br);
    })), !1));
  }), b;
}
function YC(t) {
  var e = t.props.innerBounds, r = ni();
  if (!e)
    return {
      boundMap: r,
      vertical: [],
      horizontal: []
    };
  var n = t.getRect(), a = n.pos1, s = n.pos2, u = n.pos3, f = n.pos4, c = [a, s, u, f], v = xr(c, [0, 0]), p = e.left, h = e.top, d = e.width, m = e.height, _ = [[p, h], [p, h + m]], x = [[p, h], [p + d, h]], y = [[p + d, h], [p + d, h + m]], b = [[p, h + m], [p + d, h + m]], E = Cf(t, c, [0, 0], !1), T = [], M = [];
  return E.forEach(function(D) {
    var w = D.line, O = D.lineConstants, I = Md(v, w), P = I.horizontal, B = I.vertical, H = un(w, O, x, B, 1, !0), W = un(w, O, b, B, 1, !0), L = un(w, O, _, P, 1, !0), Y = un(w, O, y, P, 1, !0);
    H.isBound && !r.top && (T.push(h), r.top = !0), W.isBound && !r.bottom && (T.push(h + m), r.bottom = !0), L.isBound && !r.left && (M.push(p), r.left = !0), Y.isBound && !r.right && (M.push(p + d), r.right = !0);
  }), {
    boundMap: r,
    horizontal: T,
    vertical: M
  };
}
function XC(t, e, r, n) {
  var a = e[0] - t[0], s = e[1] - t[1];
  if (J(a) < pr && (a = 0), J(s) < pr && (s = 0), !a)
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
function Hu(t, e, r, n, a) {
  var s = XC(t, e, r, n);
  if (!s)
    return {
      isOutside: !1,
      offset: [0, 0]
    };
  var u = Ye(t, e), f = Ye(s, t), c = Ye(s, e), v = f > u || c > u, p = F(Ie({
    datas: a,
    distX: s[0],
    distY: s[1]
  }), 2), h = p[0], d = p[1];
  return {
    offset: [h, d],
    isOutside: v
  };
}
function To(t, e) {
  return t.isBound ? t.offset : e.isSnap ? ku(e).offset : 0;
}
function qC(t, e, r, n, a) {
  var s = F(e, 2), u = s[0], f = s[1], c = F(r, 2), v = c[0], p = c[1], h = F(n, 2), d = h[0], m = h[1], _ = F(a, 2), x = _[0], y = _[1], b = -x, E = -y;
  if (t && u && f) {
    b = 0, E = 0;
    var T = [];
    if (v && p ? T.push([0, y], [x, 0]) : v ? T.push([x, 0]) : p ? T.push([0, y]) : d && m ? T.push([0, y], [x, 0]) : d ? T.push([x, 0]) : m && T.push([0, y]), T.length) {
      T.sort(function(O, I) {
        return le(bt([u, f], O)) - le(bt([u, f], I));
      });
      var M = T[0];
      if (M[0] && J(u) > pr)
        b = -M[0], E = f * J(u + b) / J(u) - f;
      else if (M[1] && J(f) > pr) {
        var D = f;
        E = -M[1], b = u * J(f + E) / J(D) - u;
      }
      if (t && p && v)
        if (J(b) > pr && J(b) < J(x)) {
          var w = J(x) / J(b);
          b *= w, E *= w;
        } else if (J(E) > pr && J(E) < J(y)) {
          var w = J(y) / J(E);
          b *= w, E *= w;
        } else
          b = ci(-x, b), E = ci(-y, E);
    }
  } else
    b = u || v ? -x : 0, E = f || p ? -y : 0;
  return [b, E];
}
function UC(t, e, r, n, a, s) {
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
  var u = Df(s.absolutePoses, [e, r]), f = fe(u), c = f.left, v = f.right, p = f.top, h = f.bottom, d = {
    horizontal: u.map(function(Y) {
      return Y[1];
    }),
    vertical: u.map(function(Y) {
      return Y[0];
    })
  }, m = yf(t.props.snapDirections), _ = Sf(m, {
    left: c,
    right: v,
    top: p,
    bottom: h,
    center: (c + v) / 2,
    middle: (p + h) / 2
  }), x = Xo(t, a, _, d), y = x.vertical, b = x.horizontal, E = LC(t, u, s), T = E.vertical, M = E.horizontal, D = y.isSnap, w = b.isSnap, O = y.isBound || T.isBound, I = b.isBound || M.isBound, P = ci(y.offset, T.offset), B = ci(b.offset, M.offset), H = F(qC(n, [e, r], [O, I], [D, w], [P, B]), 2), W = H[0], L = H[1];
  return [
    {
      isBound: O,
      isSnap: D,
      offset: W
    },
    {
      isBound: I,
      isSnap: w,
      offset: L
    }
  ];
}
function Xo(t, e, r, n) {
  n === void 0 && (n = r);
  var a = xf(Ho(t), n.vertical, n.horizontal), s = a.horizontal, u = a.vertical, f = e ? {
    horizontal: { isSnap: !1, index: -1 },
    vertical: { isSnap: !1, index: -1 }
  } : Yo(t, r.vertical, r.horizontal, void 0, void 0, void 0, void 0), c = f.horizontal, v = f.vertical, p = To(s[0], c), h = To(u[0], v), d = J(p), m = J(h);
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
function Gv(t, e, r, n, a, s, u) {
  u === void 0 && (u = [1, 1]);
  var f = xf(e, r, n), c = f.horizontal, v = f.vertical, p = wd(t, r, n, [], [], a, s, u), h = p.horizontal, d = p.vertical, m = To(c[0], h), _ = To(v[0], d), x = J(m), y = J(_);
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
function $C(t, e, r, n) {
  var a = cr(t, e) / Math.PI * 180, s = r.vertical, u = s.isBound, f = s.isSnap, c = s.dist, v = r.horizontal, p = v.isBound, h = v.isSnap, d = v.dist, m = a % 180, _ = m < 3 || m > 177, x = m > 87 && m < 93;
  return d < c && (u || f && !x && (!n || !_)) ? "vertical" : p || h && !_ && (!n || !x) ? "horizontal" : "";
}
function VC(t, e, r, n, a, s) {
  return r.map(function(u) {
    var f = F(u, 2), c = f[0], v = f[1], p = xr(e, c), h = xr(e, v), d = n ? KC(t, p, h, a) : Xo(t, a, {
      vertical: [h[0]],
      horizontal: [h[1]]
    }), m = d.horizontal, _ = m.offset, x = m.isBound, y = m.isSnap, b = d.vertical, E = b.offset, T = b.isBound, M = b.isSnap, D = bt(v, c);
    if (!E && !_)
      return {
        isBound: T || x,
        isSnap: M || y,
        sign: D,
        offset: [0, 0]
      };
    var w = $C(p, h, d, n);
    if (!w)
      return {
        sign: D,
        isBound: !1,
        isSnap: !1,
        offset: [0, 0]
      };
    var O = w === "vertical", I = [0, 0];
    return !n && J(v[0]) === 1 && J(v[1]) === 1 && c[0] !== v[0] && c[1] !== v[1] ? I = Ie({
      datas: s,
      distX: -E,
      distY: -_
    }) : I = Hu(p, h, -(O ? E : _), O, s).offset, I = I.map(function(P, B) {
      return P * (D[B] ? 2 / D[B] : 0);
    }), {
      sign: D,
      isBound: O ? T : x,
      isSnap: O ? M : y,
      offset: I
    };
  });
}
function Fv(t, e) {
  return t.isBound ? t.offset : e.isSnap ? e.offset : 0;
}
function KC(t, e, r, n) {
  var a = DC(t, e, r), s = a.horizontal, u = a.vertical, f = n ? {
    horizontal: { isSnap: !1 },
    vertical: { isSnap: !1 }
  } : BC(t, e, r), c = f.horizontal, v = f.vertical, p = Fv(s, c), h = Fv(u, v), d = J(p), m = J(h);
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
function ZC(t, e, r, n, a) {
  var s = [-r[0], -r[1]], u = t.state, f = u.width, c = u.height, v = t.props.bounds, p = 1 / 0, h = 1 / 0;
  if (v) {
    var d = [
      [r[0], -r[1]],
      [-r[0], r[1]]
    ], m = v.left, _ = m === void 0 ? -1 / 0 : m, x = v.top, y = x === void 0 ? -1 / 0 : x, b = v.right, E = b === void 0 ? 1 / 0 : b, T = v.bottom, M = T === void 0 ? 1 / 0 : T;
    d.forEach(function(D) {
      var w = D[0] !== s[0], O = D[1] !== s[1], I = xr(e, D), P = cr(n, I) * 360 / Math.PI;
      if (O) {
        var B = I.slice();
        (J(P - 360) < 2 || J(P - 180) < 2) && (B[1] = n[1]);
        var H = Hu(n, B, (n[1] < I[1] ? M : y) - I[1], !1, a), W = F(H.offset, 2), L = W[1], Y = H.isOutside;
        isNaN(L) || (h = c + (Y ? 1 : -1) * J(L));
      }
      if (w) {
        var B = I.slice();
        (J(P - 90) < 2 || J(P - 270) < 2) && (B[0] = n[0]);
        var X = Hu(n, B, (n[0] < I[0] ? E : _) - I[0], !0, a), Q = F(X.offset, 1), j = Q[0], V = X.isOutside;
        isNaN(j) || (p = f + (V ? 1 : -1) * J(j));
      }
    });
  }
  return {
    maxWidth: p,
    maxHeight: h
  };
}
var Ir = {
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
    var p = le(v), h = cr(v, [0, 0]);
    return [e.createElement("div", { className: St("line", "horizontal", "dragline", "dashed"), key: "dragRotateGuideline", style: {
      width: "".concat(p, "px"),
      transform: "translate(".concat(c[0], "px, ").concat(c[1], "px) rotate(").concat(h, "rad) scaleY(").concat(s, ")")
    } })];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.parentEvent, a = e.parentGesto, s = t.state, u = s.gestos, f = s.style;
    if (u.draggable)
      return !1;
    u.draggable = a || t.targetGesto, r.datas = {}, r.left = parseFloat(f.left || "") || 0, r.top = parseFloat(f.top || "") || 0, r.bottom = parseFloat(f.bottom || "") || 0, r.right = parseFloat(f.right || "") || 0, r.startValue = [0, 0], Bn(t, e), ko(t, e, "translate"), hE(t, r), r.prevDist = [0, 0], r.prevBeforeDist = [0, 0], r.isDrag = !1, r.deltaOffset = [0, 0];
    var c = Bt(t, e, z({ set: function(p) {
      r.startValue = p;
    } }, No(t, e))), v = n || ht(t, "onDragStart", c);
    return v !== !1 ? (r.isDrag = !0, t.state.dragInfo = {
      startRect: t.getRect(),
      dist: [0, 0]
    }) : (u.draggable = null, r.isPinch = !1), r.isDrag ? c : !1;
  },
  drag: function(t, e) {
    if (e) {
      Lo(t, e, "translate");
      var r = e.datas, n = e.parentEvent, a = e.parentFlag, s = e.isPinch, u = e.deltaOffset, f = e.useSnap, c = e.isRequest, v = e.isGroup, p = e.parentThrottleDrag, h = e.distX, d = e.distY, m = r.isDrag, _ = r.prevDist, x = r.prevBeforeDist, y = r.startValue;
      if (m) {
        u && (h += u[0], d += u[1]);
        var b = t.props, E = b.parentMoveable, T = v ? 0 : b.throttleDrag || p || 0, M = n ? 0 : b.throttleDragRotate || 0, D = 0, w = !1, O = !1, I = !1, P = !1;
        if (!n && M > 0 && (h || d)) {
          var B = b.startDragRotate || 0, H = Ot(B + cr([0, 0], [h, d]) * 180 / Math.PI, M) - B, W = d * Math.abs(Math.cos((H - 90) / 180 * Math.PI)), L = h * Math.abs(Math.cos(H / 180 * Math.PI)), Y = le([L, W]);
          D = H * Math.PI / 180, h = Y * Math.cos(D), d = Y * Math.sin(D);
        }
        if (!s && !n && !a) {
          var X = F(UC(t, h, d, M, !f && c || u, r), 2), Q = X[0], j = X[1];
          w = Q.isSnap, O = Q.isBound, I = j.isSnap, P = j.isBound;
          var V = Q.offset, et = j.offset;
          h += V, d += et;
        }
        var nt = qt(ld({ datas: r, distX: h, distY: d }), y), U = qt(sC({ datas: r, distX: h, distY: d }), y);
        gv(U, Br), gv(nt, Br), M || (!w && !O && (U[0] = Ot(U[0], T), nt[0] = Ot(nt[0], T)), !I && !P && (U[1] = Ot(U[1], T), nt[1] = Ot(nt[1], T)));
        var lt = bt(nt, y), vt = bt(U, y), ut = bt(vt, _), st = bt(lt, x);
        r.prevDist = vt, r.prevBeforeDist = lt, r.passDelta = ut, r.passDist = vt;
        var at = r.left + lt[0], dt = r.top + lt[1], _t = r.right - lt[0], Tt = r.bottom - lt[1], Wt = Wo(r, "translate(".concat(U[0], "px, ").concat(U[1], "px)"), "translate(".concat(vt[0], "px, ").concat(vt[1], "px)"));
        if (mf(e, Wt), t.state.dragInfo.dist = n ? [0, 0] : vt, !(!n && !E && ut.every(function(Et) {
          return !Et;
        }) && st.some(function(Et) {
          return !Et;
        }))) {
          var ot = t.state, gt = ot.width, kt = ot.height, yt = Bt(t, e, z({ transform: Wt, dist: vt, delta: ut, translate: U, beforeDist: lt, beforeDelta: st, beforeTranslate: nt, left: at, top: dt, right: _t, bottom: Tt, width: gt, height: kt, isPinch: s }, Ar({
            transform: Wt
          }, e)));
          return !n && ht(t, "onDrag", yt), yt;
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
      var a = Jr(t, e, {});
      return !r && ht(t, "onDragEnd", a), a;
    }
  },
  dragGroupStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = this.dragStart(t, e);
    if (!f)
      return !1;
    var c = hu(t, this, "dragStart", [
      s || 0,
      u || 0
    ], e, !1, "draggable"), v = c.childEvents, p = c.eventParams, h = z(z({}, f), { targets: t.props.targets, events: p }), d = ht(t, "onDragGroupStart", h);
    a.isDrag = d !== !1;
    var m = (n = (r = v[0]) === null || r === void 0 ? void 0 : r.datas.startValue) !== null && n !== void 0 ? n : [0, 0];
    return a.throttleOffset = [m[0] % 1, m[1] % 1], a.isDrag ? f : !1;
  },
  dragGroup: function(t, e) {
    var r = e.datas;
    if (r.isDrag) {
      var n = this.drag(t, z(z({}, e), { parentThrottleDrag: t.props.throttleDrag })), a = e.datas.passDelta, s = hu(t, this, "drag", a, e, !1, "draggable").eventParams;
      if (n) {
        var u = z({ targets: t.props.targets, events: s }, n);
        return ht(t, "onDragGroup", u), u;
      }
    }
  },
  dragGroupEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isDrag) {
      this.dragEnd(t, e);
      var a = hu(t, this, "dragEnd", [0, 0], e, !1, "draggable").eventParams;
      return ht(t, "onDragGroupEnd", Jr(t, e, {
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
function Od(t, e) {
  var r = xr(t, e), n = [0, 0];
  return {
    fixedPosition: r,
    fixedDirection: e,
    fixedOffset: n
  };
}
function JC(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = [
    a / 2 * (1 + e[0]),
    s / 2 * (1 + e[1])
  ], c = or(r, f, u), v = [0, 0];
  return {
    fixedPosition: c,
    fixedDirection: e,
    fixedOffset: v
  };
}
function Id(t, e) {
  var r = t.allMatrix, n = t.is3d, a = t.width, s = t.height, u = n ? 4 : 3, f = hC(e, a, s), c = or(r, e, u), v = [
    a ? 0 : e[0],
    s ? 0 : e[1]
  ];
  return {
    fixedPosition: c,
    fixedDirection: f,
    fixedOffset: v
  };
}
var Lv = Tf("resizable"), Yu = {
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
  render: _d("resizable"),
  dragControlCondition: Lv,
  viewClassName: Rf("resizable"),
  dragControlStart: function(t, e) {
    var r, n = e.inputEvent, a = e.isPinch, s = e.isGroup, u = e.parentDirection, f = e.parentGesto, c = e.datas, v = e.parentFixedDirection, p = e.parentEvent, h = Xd(u, a, n, c), d = t.state, m = d.target, _ = d.width, x = d.height, y = d.gestos;
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
    c.transformOrigin = Hr(b) ? b.split(" ") : b, c.startOffsetMatrix = d.offsetMatrix, c.startTransformOrigin = d.transformOrigin, c.isWidth = (r = e?.parentIsWidth) !== null && r !== void 0 ? r : !h[0] && !h[1] || h[0] || !h[1];
    function E(P) {
      c.ratio = P && isFinite(P) ? P : 0;
    }
    c.startPositions = ce(t.state);
    function T(P) {
      var B = Od(c.startPositions, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function M(P) {
      var B = Id(t.state, P);
      c.fixedDirection = B.fixedDirection, c.fixedPosition = B.fixedPosition, c.fixedOffset = B.fixedOffset;
    }
    function D(P) {
      c.minSize = [
        Zt("".concat(P[0]), 0) || 0,
        Zt("".concat(P[1]), 0) || 0
      ];
    }
    function w(P) {
      var B = [
        P[0] || 1 / 0,
        P[1] || 1 / 0
      ];
      (!si(B[0]) || isFinite(B[0])) && (B[0] = Zt("".concat(B[0]), 0) || 1 / 0), (!si(B[1]) || isFinite(B[1])) && (B[1] = Zt("".concat(B[1]), 0) || 1 / 0), c.maxSize = B;
    }
    E(_ / x), T(v || [-h[0], -h[1]]), c.setFixedDirection = T, c.setFixedPosition = M, c.setMin = D, c.setMax = w;
    var O = Bt(t, e, {
      direction: h,
      startRatio: c.ratio,
      set: function(P) {
        var B = F(P, 2), H = B[0], W = B[1];
        c.startWidth = H, c.startHeight = W;
      },
      setMin: D,
      setMax: w,
      setRatio: E,
      setFixedDirection: T,
      setFixedPosition: M,
      setOrigin: function(P) {
        c.transformOrigin = P;
      },
      dragStart: Ir.dragStart(t, new fi().dragStart([0, 0], e))
    }), I = p || ht(t, "onResizeStart", O);
    return c.startFixedDirection = c.fixedDirection, c.startFixedPosition = c.fixedPosition, I !== !1 && (c.isResize = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: h
    }), c.isResize ? O : !1;
  },
  dragControl: function(t, e) {
    var r, n = e.datas, a = e.parentFlag, s = e.isPinch, u = e.parentKeepRatio, f = e.dragClient, c = e.parentDist, v = e.useSnap, p = e.isRequest, h = e.isGroup, d = e.parentEvent, m = e.resolveMatrix, _ = n.isResize, x = n.transformOrigin, y = n.startWidth, b = n.startHeight, E = n.prevWidth, T = n.prevHeight, M = n.minSize, D = n.maxSize, w = n.ratio, O = n.startOffsetWidth, I = n.startOffsetHeight, P = n.isWidth;
    if (!_)
      return;
    if (m) {
      var B = t.state.is3d, H = n.startOffsetMatrix, W = n.startTransformOrigin, L = B ? 4 : 3, Y = ji(Do(e)), X = Math.sqrt(Y.length);
      L !== X && (Y = Ce(Y, X, L));
      var Q = pa(H, Y, W, L), j = zn(Q, O, I, L);
      n.startPositions = j, n.nextTargetMatrix = Y, n.nextAllMatrix = Q;
    }
    var V = An(t.props, "resizable"), et = V.resizeFormat, nt = V.throttleResize, U = nt === void 0 ? a ? 0 : 1 : nt, lt = V.parentMoveable, vt = V.keepRatioFinally, ut = n.direction, st = ut, at = 0, dt = 0;
    !ut[0] && !ut[1] && (st = [1, 1]);
    var _t = w && (u ?? V.keepRatio) || !1;
    function Tt() {
      var Qt = n.fixedDirection, jt = Zd(st, _t, n, e);
      at = jt.distWidth, dt = jt.distHeight;
      var Ee = st[0] - Qt[0] || _t ? Math.max(O + at, Br) : O, zr = st[1] - Qt[1] || _t ? Math.max(I + dt, Br) : I;
      return _t && O && I && (P ? zr = Ee / w : Ee = zr * w), [Ee, zr];
    }
    var Wt = F(Tt(), 2), ot = Wt[0], gt = Wt[1];
    d || (n.setFixedDirection(n.fixedDirection), ht(t, "onBeforeResize", Bt(t, e, {
      startFixedDirection: n.startFixedDirection,
      startFixedPosition: n.startFixedPosition,
      setFixedDirection: function(Qt) {
        var jt;
        return n.setFixedDirection(Qt), jt = F(Tt(), 2), ot = jt[0], gt = jt[1], [ot, gt];
      },
      setFixedPosition: function(Qt) {
        var jt;
        return n.setFixedPosition(Qt), jt = F(Tt(), 2), ot = jt[0], gt = jt[1], [ot, gt];
      },
      boundingWidth: ot,
      boundingHeight: gt,
      setSize: function(Qt) {
        var jt;
        jt = F(Qt, 2), ot = jt[0], gt = jt[1];
      }
    }, !0)));
    var kt = f;
    f || (!a && s ? kt = xC(t, [0, 0]) : kt = n.fixedPosition);
    var yt = [0, 0];
    s || (yt = pE(t, ot, gt, ut, kt, !v && p, n)), c && (!c[0] && (yt[0] = 0), !c[1] && (yt[1] = 0));
    function Et() {
      var Qt;
      et && (Qt = F(et([ot, gt]), 2), ot = Qt[0], gt = Qt[1]), ot = Ot(ot, U), gt = Ot(gt, U);
    }
    if (_t) {
      st[0] && st[1] && yt[0] && yt[1] && (J(yt[0]) > J(yt[1]) ? yt[1] = 0 : yt[0] = 0);
      var At = !yt[0] && !yt[1];
      At && Et(), st[0] && !st[1] || yt[0] && !yt[1] || At && P ? (ot += yt[0], gt = ot / w) : (!st[0] && st[1] || !yt[0] && yt[1] || At && !P) && (gt += yt[1], ot = gt * w);
    } else
      ot += yt[0], gt += yt[1], ot = Math.max(0, ot), gt = Math.max(0, gt);
    r = F(bp([ot, gt], M, D, _t ? w : !1), 2), ot = r[0], gt = r[1], Et(), _t && (h || vt) && (P ? gt = ot / w : ot = gt * w), at = ot - O, dt = gt - I;
    var rt = [at - E, dt - T];
    n.prevWidth = at, n.prevHeight = dt;
    var ft = _C(t, ot, gt, kt, x, n);
    if (!(!lt && rt.every(function(Qt) {
      return !Qt;
    }) && ft.every(function(Qt) {
      return !Qt;
    }))) {
      var pt = Ir.drag(t, va(e, t.state, ft, !!s, !1, "draggable")), wt = pt.transform, zt = y + at, Ct = b + dt, Yt = Bt(t, e, z({ width: zt, height: Ct, offsetWidth: Math.round(ot), offsetHeight: Math.round(gt), startRatio: w, boundingWidth: ot, boundingHeight: gt, direction: ut, dist: [at, dt], delta: rt, isPinch: !!s, drag: pt }, Ud({
        style: {
          width: "".concat(zt, "px"),
          height: "".concat(Ct, "px")
        },
        transform: wt
      }, pt, e)));
      return !d && ht(t, "onResize", Yt), Yt;
    }
  },
  dragControlAfter: function(t, e) {
    var r = e.datas, n = r.isResize, a = r.startOffsetWidth, s = r.startOffsetHeight, u = r.prevWidth, f = r.prevHeight;
    if (!(!n || t.props.checkResizableError === !1)) {
      var c = t.state, v = c.width, p = c.height, h = v - (a + u), d = p - (s + f), m = J(h) > 3, _ = J(d) > 3;
      if (m && (r.startWidth += h, r.startOffsetWidth += h, r.prevWidth += h), _ && (r.startHeight += d, r.startOffsetHeight += d, r.prevHeight += d), m || _)
        return this.dragControl(t, e);
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.parentEvent;
    if (r.isResize) {
      r.isResize = !1;
      var a = Jr(t, e, {});
      return !n && ht(t, "onResizeEnd", a), a;
    }
  },
  dragGroupControlCondition: Lv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, z(z({}, e), { isGroup: !0 }));
    if (!n)
      return !1;
    var a = Se(t, "resizable", e), s = r.startOffsetWidth, u = r.startOffsetHeight;
    function f() {
      var m = r.minSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.minSize, b = x.startOffsetWidth, E = x.startOffsetHeight, T = s * (b ? y[0] / b : 0), M = u * (E ? y[1] / E : 0);
        m[0] = Math.max(m[0], T), m[1] = Math.max(m[1], M);
      });
    }
    function c() {
      var m = r.maxSize;
      a.forEach(function(_) {
        var x = _.datas, y = x.maxSize, b = x.startOffsetWidth, E = x.startOffsetHeight, T = s * (b ? y[0] / b : 0), M = u * (E ? y[1] / E : 0);
        m[0] = Math.min(m[0], T), m[1] = Math.min(m[1], M);
      });
    }
    var v = Xe(t, this, "dragControlStart", e, function(m, _) {
      return Mo(t, m, r, _);
    });
    f(), c();
    var p = function(m) {
      n.setFixedDirection(m), v.forEach(function(_, x) {
        _.setFixedDirection(m), Mo(t, _.moveable, r, a[x]);
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
    } }), d = ht(t, "onResizeGroupStart", h);
    return r.isResize = d !== !1, r.isResize ? n : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isResize) {
      var n = An(t.props, "resizable");
      Uo(t, "onBeforeResize", function(m) {
        ht(t, "onBeforeResizeGroup", Bt(t, e, z(z({}, m), { targets: n.targets }), !0));
      });
      var a = this.dragControl(t, z(z({}, e), { isGroup: !0 }));
      if (a) {
        var s = a.boundingWidth, u = a.boundingHeight, f = a.dist, c = n.keepRatio, v = [
          s / (s - f[0]),
          u / (u - f[1])
        ], p = r.fixedPosition, h = Xe(t, this, "dragControl", e, function(m, _) {
          var x = F(Mr(fa(t.rotation / 180 * Math.PI, 3), [
            _.datas.originalX * v[0],
            _.datas.originalY * v[1],
            1
          ], 3), 2), y = x[0], b = x[1];
          return z(z({}, _), { parentDist: null, parentScale: v, dragClient: qt(p, [y, b]), parentKeepRatio: c });
        }), d = z({ targets: n.targets, events: h }, a);
        return ht(t, "onResizeGroup", d), d;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isResize) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Jr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return ht(t, "onResizeGroupEnd", s), r;
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
function gu(t, e, r, n, a) {
  var s = t.props.groupable, u = t.state, f = u.is3d ? 4 : 3, c = e.origin, v = or(
    t.state.rootMatrix,
    // TO-DO #710
    bt([c[0], c[1]], s ? [0, 0] : [u.left, u.top]),
    f
  ), p = qt([a.left, a.top], v);
  e.startAbsoluteOrigin = p, e.prevDeg = cr(p, [r, n]) / Math.PI * 180, e.defaultDeg = e.prevDeg, e.prevSnapDeg = 0, e.loop = 0, e.startDist = Ye(p, [r, n]);
}
function So(t, e, r) {
  var n = r.defaultDeg, a = r.prevDeg, s = a % 360, u = Math.floor(a / 360);
  s < 0 && (s += 360), s > t && s > 270 && t < 90 ? ++u : s < t && s < 90 && t > 270 && --u;
  var f = e * (u * 360 + t - n);
  return r.prevDeg = n + f, f;
}
function mu(t, e, r, n) {
  return So(cr(n.startAbsoluteOrigin, [t, e]) / Math.PI * 180, r, n);
}
function _u(t, e, r, n, a, s) {
  var u = t.props.throttleRotate, f = u === void 0 ? 0 : u, c = r.prevSnapDeg, v = 0, p = !1;
  if (s) {
    var h = vE(t, e, n, a + n);
    p = h.isSnap, v = a + h.dist;
  }
  p || (v = Ot(a + n, f));
  var d = v - a;
  return r.prevSnapDeg = d, [d - c, d, v];
}
function Pd(t, e, r) {
  var n = F(e, 4), a = n[0], s = n[1], u = n[2], f = n[3];
  if (t === "none")
    return [];
  if (dr(t))
    return t.map(function(y) {
      return Pd(y, [a, s, u, f], r)[0];
    });
  var c = F((t || "top").split("-"), 2), v = c[0], p = c[1], h = [a, s];
  v === "left" ? h = [u, a] : v === "right" ? h = [s, f] : v === "bottom" && (h = [f, u]);
  var d = [
    (h[0][0] + h[1][0]) / 2,
    (h[0][1] + h[1][1]) / 2
  ], m = Hd(h, r);
  if (p) {
    var _ = p === "top" || p === "left", x = v === "bottom" || v === "left";
    d = h[_ && !x || !_ && x ? 0 : 1];
  }
  return [[d, m]];
}
function Xu(t, e) {
  if (e.isRequest)
    return e.requestAble === "rotatable";
  var r = e.inputEvent.target;
  if (_r(r, St("rotation-control")) || t.props.rotateAroundControls && _r(r, St("around-control")) || _r(r, St("control")) && _r(r, St("rotatable")))
    return !0;
  var n = t.props.rotationTarget;
  return n ? Of(n, !0).some(function(a) {
    return a ? r === a || r.contains(a) : !1;
  }) : !1;
}
var QC = `.rotation {
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
`, jC = {
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
  css: [QC],
  viewClassName: function(t) {
    return t.isDragging("rotatable") ? St("view-rotation-dragging") : "";
  },
  render: function(t, e) {
    var r = An(t.props, "rotatable"), n = r.rotatable, a = r.rotationPosition, s = r.zoom, u = r.renderDirections, f = r.rotateAroundControls, c = r.resolveAblesWithRotatable, v = t.getState(), p = v.renderPoses, h = v.direction;
    if (!n)
      return null;
    var d = Pd(a, p, h), m = [];
    if (d.forEach(function(b, E) {
      var T = F(b, 2), M = T[0], D = T[1];
      m.push(e.createElement(
        "div",
        { key: "rotation".concat(E), className: St("rotation"), style: {
          // tslint:disable-next-line: max-line-length
          transform: "translate(-50%) translate(".concat(M[0], "px, ").concat(M[1], "px) rotate(").concat(D, "rad)")
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
      dr(u) && (y = u.map(function(b) {
        var E = x[b];
        return {
          data: E ? { resolve: E } : {},
          classNames: E ? ["move"] : [],
          dir: b
        };
      })), m.push.apply(m, it([], F(hd(t, "rotatable", y, e)), !1));
    }
    return f && m.push.apply(m, it([], F(yd(t, e)), !1)), m;
  },
  dragControlCondition: Xu,
  dragControlStart: function(t, e) {
    var r, n, a = e.datas, s = e.clientX, u = e.clientY, f = e.parentRotate, c = e.parentFlag, v = e.isPinch, p = e.isRequest, h = t.state, d = h.target, m = h.left, _ = h.top, x = h.direction, y = h.beforeDirection, b = h.targetTransform, E = h.moveableClientRect, T = h.offsetMatrix, M = h.targetMatrix, D = h.allMatrix, w = h.width, O = h.height;
    if (!p && !d)
      return !1;
    var I = t.getRect();
    a.rect = I, a.transform = b, a.left = m, a.top = _;
    var P = function(st) {
      var at = Id(t.state, st);
      a.fixedDirection = at.fixedDirection, a.fixedOffset = at.fixedOffset, a.fixedPosition = at.fixedPosition, U && U.setFixedPosition(st);
    }, B = function(st) {
      var at = JC(t.state, st);
      a.fixedDirection = at.fixedDirection, a.fixedOffset = at.fixedOffset, a.fixedPosition = at.fixedPosition, U && U.setFixedDirection(st);
    }, H = s, W = u;
    if (p || v || c) {
      var L = f || 0;
      a.beforeInfo = {
        origin: I.beforeOrigin,
        prevDeg: L,
        defaultDeg: L,
        prevSnapDeg: 0,
        startDist: 0
      }, a.afterInfo = z(z({}, a.beforeInfo), { origin: I.origin }), a.absoluteInfo = z(z({}, a.beforeInfo), { origin: I.origin, startValue: L });
    } else {
      var Y = (n = e.inputEvent) === null || n === void 0 ? void 0 : n.target;
      if (Y) {
        var X = Y.getAttribute("data-direction") || "", Q = aC[X];
        if (Q) {
          a.isControl = !0, a.isAroundControl = _r(Y, St("around-control")), a.controlDirection = Q;
          var j = Y.getAttribute("data-resolve");
          j && (a.resolveAble = j);
          var V = RE(h.rootMatrix, h.renderPoses, E);
          r = F(xr(V, Q), 2), H = r[0], W = r[1];
        }
      }
      a.beforeInfo = { origin: I.beforeOrigin }, a.afterInfo = { origin: I.origin }, a.absoluteInfo = {
        origin: I.origin,
        startValue: I.rotation
      };
      var et = P;
      P = function(st) {
        var at = h.is3d ? 4 : 3, dt = F(qt(Vp(M, at), st), 2), _t = dt[0], Tt = dt[1], Wt = Mr(T, On([_t, Tt], at)), ot = Mr(D, On([st[0], st[1]], at));
        et(st);
        var gt = h.posDelta;
        a.beforeInfo.origin = bt(Wt, gt), a.afterInfo.origin = bt(ot, gt), a.absoluteInfo.origin = bt(ot, gt), gu(t, a.beforeInfo, H, W, E), gu(t, a.afterInfo, H, W, E), gu(t, a.absoluteInfo, H, W, E);
      }, B = function(st) {
        var at = xr([
          [0, 0],
          [w, 0],
          [0, O],
          [w, O]
        ], st);
        P(at);
      };
    }
    a.startClientX = H, a.startClientY = W, a.direction = x, a.beforeDirection = y, a.startValue = 0, a.datas = {}, ko(t, e, "rotate");
    var nt = !1, U = !1;
    if (a.isControl && a.resolveAble) {
      var lt = a.resolveAble;
      lt === "resizable" && (U = Yu.dragControlStart(t, z(z({}, new fi("resizable").dragStart([0, 0], e)), { parentPosition: a.controlPosition, parentFixedPosition: a.fixedPosition })));
    }
    U || (nt = Ir.dragStart(t, new fi().dragStart([0, 0], e))), P(TE(t));
    var vt = Bt(t, e, z(z({ set: function(st) {
      a.startValue = st * Math.PI / 180;
    }, setFixedDirection: B, setFixedPosition: P }, No(t, e)), { dragStart: nt, resizeStart: U })), ut = ht(t, "onRotateStart", vt);
    return a.isRotate = ut !== !1, h.snapRenderInfo = {
      request: e.isRequest
    }, a.isRotate ? vt : !1;
  },
  dragControl: function(t, e) {
    var r, n, a, s = e.datas, u = e.clientDistX, f = e.clientDistY, c = e.parentRotate, v = e.parentFlag, p = e.isPinch, h = e.groupDelta, d = e.resolveMatrix, m = s.beforeDirection, _ = s.beforeInfo, x = s.afterInfo, y = s.absoluteInfo, b = s.isRotate, E = s.startValue, T = s.rect, M = s.startClientX, D = s.startClientY;
    if (b) {
      Lo(t, e, "rotate");
      var w = oC(e), O = m * w, I = t.props.parentMoveable, P = 0, B, H, W = 0, L, Y, X = 0, Q, j, V = 180 / Math.PI * E, et = y.startValue, nt = !1, U = M + u, lt = D + f;
      if (!v && "parentDist" in e) {
        var vt = e.parentDist;
        B = vt, L = vt, Q = vt;
      } else p || v ? (B = So(c, m, _), L = So(c, O, x), Q = So(c, O, y)) : (B = mu(U, lt, m, _), L = mu(U, lt, O, x), Q = mu(U, lt, O, y), nt = !0);
      if (H = V + B, Y = V + L, j = et + Q, ht(t, "onBeforeRotate", Bt(t, e, {
        beforeRotation: H,
        rotation: Y,
        absoluteRotation: j,
        setRotation: function(kt) {
          L = kt - V, B = L, Q = L;
        }
      }, !0)), r = F(_u(t, T, _, B, V, nt), 3), P = r[0], B = r[1], H = r[2], n = F(_u(t, T, x, L, V, nt), 3), W = n[0], L = n[1], Y = n[2], a = F(_u(t, T, y, Q, et, nt), 3), X = a[0], Q = a[1], j = a[2], !(!X && !W && !P && !I && !d)) {
        var ut = Wo(s, "rotate(".concat(Y, "deg)"), "rotate(".concat(L, "deg)"));
        d && (s.fixedPosition = _f(t, s.targetAllTransform, s.fixedDirection, s.fixedOffset, s));
        var st = mC(t, L, s), at = bt(qt(h || [0, 0], st), s.prevInverseDist || [0, 0]);
        s.prevInverseDist = st, s.requestValue = null;
        var dt = vd(t, ut, at, p, e), _t = dt, Tt = Ye([U, lt], y.startAbsoluteOrigin) - y.startDist, Wt = void 0;
        if (s.resolveAble === "resizable") {
          var ot = Yu.dragControl(t, z(z({}, va(e, t.state, [e.deltaX, e.deltaY], !!p, !1, "resizable")), { resolveMatrix: !0, parentDistance: Tt }));
          ot && (Wt = ot, _t = Ud(_t, ot, e));
        }
        var gt = Bt(t, e, z(z({ delta: W, dist: L, rotate: Y, rotation: Y, beforeDist: B, beforeDelta: P, beforeRotate: H, beforeRotation: H, absoluteDist: Q, absoluteDelta: X, absoluteRotate: j, absoluteRotation: j, isPinch: !!p, resize: Wt }, dt), _t));
        return ht(t, "onRotate", gt), gt;
      }
    }
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      r.isRotate = !1;
      var n = Jr(t, e, {});
      return ht(t, "onRotateEnd", n), n;
    }
  },
  dragGroupControlCondition: Xu,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = t.state, a = n.left, s = n.top, u = n.beforeOrigin, f = this.dragControlStart(t, e);
    if (!f)
      return !1;
    f.set(r.beforeDirection * t.rotation);
    var c = Xe(t, this, "dragControlStart", e, function(h, d) {
      var m = h.state, _ = m.left, x = m.top, y = m.beforeOrigin, b = qt(bt([_, x], [a, s]), bt(y, u));
      return d.datas.startGroupClient = b, d.datas.groupClient = b, z(z({}, d), { parentRotate: 0 });
    }), v = z(z({}, f), { targets: t.props.targets, events: c }), p = ht(t, "onRotateGroupStart", v);
    return r.isRotate = p !== !1, r.isRotate ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isRotate) {
      Uo(t, "onBeforeRotate", function(v) {
        ht(t, "onBeforeRotateGroup", Bt(t, e, z(z({}, v), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = r.beforeDirection, s = n.beforeDist, u = s / 180 * Math.PI, f = Xe(t, this, "dragControl", e, function(v, p) {
          var h = p.datas.startGroupClient, d = F(p.datas.groupClient, 2), m = d[0], _ = d[1], x = F(ua(h, u * a), 2), y = x[0], b = x[1], E = [y - m, b - _];
          return p.datas.groupClient = [y, b], z(z({}, p), { parentRotate: s, groupDelta: E });
        });
        t.rotation = a * n.beforeRotation;
        var c = z({ targets: t.props.targets, events: f, set: function(v) {
          t.rotation = v;
        }, setGroupRotation: function(v) {
          t.rotation = v;
        } }, n);
        return ht(t, "onRotateGroup", c), c;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isRotate) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Jr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return ht(t, "onRotateGroupEnd", s), r;
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
function tE(t, e) {
  var r, n = t.direction, a = t.classNames, s = t.size, u = t.pos, f = t.zoom, c = t.key, v = n === "horizontal", p = v ? "Y" : "X";
  return e.createElement("div", {
    key: c,
    className: a.join(" "),
    style: (r = {}, r[v ? "width" : "height"] = "".concat(s), r.transform = "translate(".concat(u[0], ", ").concat(u[1], ") translate").concat(p, "(-50%) scale").concat(p, "(").concat(f, ")"), r)
  });
}
function Ef(t, e) {
  return tE(z(z({}, t), { classNames: it([
    St("line", "guideline", t.direction)
  ], F(t.classNames), !1).filter(function(r) {
    return r;
  }), size: t.size || "".concat(t.sizeValue, "px"), pos: t.pos || t.posValue.map(function(r) {
    return "".concat(Ot(r, 0.1), "px");
  }) }), e);
}
function Wv(t, e, r, n, a, s, u, f) {
  var c = t.props.zoom;
  return r.map(function(v, p) {
    var h = v.type, d = v.pos, m = [0, 0];
    return m[u] = n, m[u ? 0 : 1] = -a + d, Ef({
      key: "".concat(e, "TargetGuideline").concat(p),
      classNames: [St("target", "bold", h)],
      posValue: m,
      sizeValue: s,
      zoom: c,
      direction: e
    }, f);
  });
}
function Nv(t, e, r, n, a, s) {
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
    return Ef({
      key: "".concat(e, "-default-guideline-").concat(m),
      classNames: y ? [St("bold"), b] : [St("normal"), b],
      direction: e,
      posValue: E,
      sizeValue: x,
      zoom: f
    }, s);
  });
}
function Yi(t, e, r, n, a, s, u, f) {
  var c, v = t.props, p = v.snapDigit, h = p === void 0 ? 0 : p, d = v.isDisplaySnapDigit, m = d === void 0 ? !0 : d, _ = v.snapDistFormat, x = _ === void 0 ? function(D, w) {
    return D;
  } : _, y = v.zoom, b = e === "horizontal" ? "X" : "Y", E = e === "vertical" ? "height" : "width", T = Math.abs(a), M = m ? parseFloat(T.toFixed(h)) : 0;
  return f.createElement(
    "div",
    { key: "".concat(e, "-").concat(r, "-guideline-").concat(n), className: St("guideline-group", e), style: (c = {
      left: "".concat(s[0], "px"),
      top: "".concat(s[1], "px")
    }, c[E] = "".concat(T, "px"), c) },
    Ef({
      direction: e,
      classNames: [St(r), u],
      size: "100%",
      posValue: [0, 0],
      sizeValue: T,
      zoom: y
    }, f),
    f.createElement("div", { className: St("size-value", "gap"), style: {
      transform: "translate".concat(b, "(-50%) scale(").concat(y, ")")
    } }, M > 0 ? x(M, e) : "")
  );
}
function rE(t, e, r, n) {
  var a = t === "vertical" ? 0 : 1, s = t === "vertical" ? 1 : 0, u = a ? cn : vn, f = r[u.start], c = r[u.end];
  return $d(e, function(v) {
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
        var E = m.pos, T = { element: y, rect: z(z({}, b), (_ = {}, _[u.end] = b[u.start], _)) }, M = { element: y, rect: z(z({}, b), (x = {}, x[u.start] = b[u.end], x)) }, D = [0, 0], w = [0, 0];
        D[a] = E[a], D[s] = E[s], w[a] = E[a], w[s] = E[s] + m.size, p.push({
          type: t,
          pos: D,
          size: 0,
          elementRect: T,
          direction: "",
          elementDirection: "end"
        }), h.push({
          type: t,
          pos: w,
          size: 0,
          elementRect: M,
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
function eE(t, e, r, n, a) {
  var s = t.props.isDisplayInnerSnapDigit, u = [];
  return ["vertical", "horizontal"].forEach(function(f) {
    var c = e.filter(function(y) {
      return y.type === f;
    }), v = f === "vertical" ? 1 : 0, p = v ? 0 : 1, h = rE(f, c, n, s), d = v ? vn : cn, m = v ? cn : vn, _ = n[d.start], x = n[d.end];
    h.forEach(function(y) {
      var b = y.total, E = y.start, T = y.end, M = y.inner, D = r[p] + b[0].pos[p] - n[m.start], w = n;
      E.forEach(function(O) {
        var I = O.elementRect.rect, P = w[d.start] - I[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + w[d.start] - _ - P, B[p] = D, u.push(Yi(t, f, "dashed", u.length, P, B, O.className, a));
        }
        w = I;
      }), w = n, T.forEach(function(O) {
        var I = O.elementRect.rect, P = I[d.start] - w[d.end];
        if (P > 0) {
          var B = [0, 0];
          B[v] = r[v] + w[d.end] - _, B[p] = D, u.push(Yi(t, f, "dashed", u.length, P, B, O.className, a));
        }
        w = I;
      }), M.forEach(function(O) {
        var I = O.elementRect.rect, P = _ - I[d.start], B = I[d.end] - x, H = [0, 0], W = [0, 0];
        H[v] = r[v] - P, H[p] = D, W[v] = r[v] + x - _, W[p] = D, u.push(Yi(t, f, "dashed", u.length, P, H, O.className, a)), u.push(Yi(t, f, "dashed", u.length, B, W, O.className, a));
      });
    });
  }), u;
}
function nE(t, e, r, n, a) {
  var s = [];
  return ["horizontal", "vertical"].forEach(function(u) {
    var f = e.filter(function(y) {
      return y.type === u;
    }).slice(0, 1), c = u === "vertical" ? 0 : 1, v = c ? 0 : 1, p = c ? vn : cn, h = c ? cn : vn, d = n[p.start], m = n[p.end], _ = n[h.start], x = n[h.end];
    f.forEach(function(y) {
      var b = y.gap, E = y.gapRects, T = Math.max.apply(Math, it([_], F(E.map(function(w) {
        var O = w.rect;
        return O[h.start];
      })), !1)), M = Math.min.apply(Math, it([x], F(E.map(function(w) {
        var O = w.rect;
        return O[h.end];
      })), !1)), D = (T + M) / 2;
      T === M || D === (_ + x) / 2 || E.forEach(function(w) {
        var O = w.rect, I = w.className, P = [r[0], r[1]];
        if (O[p.end] < d)
          P[c] += O[p.end] - d;
        else if (m < O[p.start])
          P[c] += O[p.start] - d - b;
        else
          return;
        P[v] += D - _, s.push(Yi(t, c ? "vertical" : "horizontal", "gap", s.length, b, P, I, a));
      });
    });
  }), s;
}
function qu(t) {
  var e, r, n = t.state, a = n.containerClientRect, s = n.hasFixed, u = a.overflow, f = a.scrollHeight, c = a.scrollWidth, v = a.clientHeight, p = a.clientWidth, h = a.clientLeft, d = a.clientTop, m = t.props, _ = m.snapGap, x = _ === void 0 ? !0 : _, y = m.verticalGuidelines, b = m.horizontalGuidelines, E = m.snapThreshold, T = E === void 0 ? 5 : E, M = m.maxSnapElementGuidelineDistance, D = M === void 0 ? 1 / 0 : M, w = m.isDisplayGridGuidelines, O = fe(ce(t.state)), I = O.top, P = O.left, B = O.bottom, H = O.right, W = { top: I, left: P, bottom: B, right: H, center: (P + H) / 2, middle: (I + B) / 2 }, L = sE(t), Y = it([], F(L), !1), X = ((r = (e = n.snapThresholdInfo) === null || e === void 0 ? void 0 : e.multiples) !== null && r !== void 0 ? r : [1, 1]).map(function(et) {
    return et * T;
  });
  x && Y.push.apply(Y, it([], F(iE(t, W, X)), !1));
  var Q = z({}, n.snapOffset || {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0
  });
  if (Y.push.apply(Y, it([], F(oE(t, u ? c : p, u ? f : v, h, d, Q, w)), !1)), s) {
    var j = a.left, V = a.top;
    Q.left += j, Q.top += V, Q.right += j, Q.bottom += V;
  }
  return Y.push.apply(Y, it([], F(Bd(b || !1, y || !1, u ? c : p, u ? f : v, h, d, Q)), !1)), Y = Y.filter(function(et) {
    var nt = et.element, U = et.elementRect, lt = et.type;
    if (!nt || !U)
      return !0;
    var vt = U.rect;
    return Ad(W, vt, lt, D);
  }), Y;
}
function iE(t, e, r) {
  var n = t.props, a = n.maxSnapElementGuidelineDistance, s = a === void 0 ? 1 / 0 : a, u = n.maxSnapElementGapDistance, f = u === void 0 ? 1 / 0 : u, c = t.state.elementRects, v = [];
  return [
    ["vertical", cn, vn],
    ["horizontal", vn, cn]
  ].forEach(function(p) {
    var h = F(p, 3), d = h[0], m = h[1], _ = h[2], x = e[m.start], y = e[m.end], b = e[m.center], E = e[_.start], T = e[_.end], M = {
      left: r[0],
      top: r[1]
    };
    function D(I) {
      var P = I.rect, B = M[m.start];
      return P[m.end] < x + B ? x - P[m.end] : y - B < P[m.start] ? P[m.start] - y : -1;
    }
    var w = c.filter(function(I) {
      var P = I.rect;
      return P[_.start] > T || P[_.end] < E ? !1 : D(I) > 0;
    }).sort(function(I, P) {
      return D(I) - D(P);
    }), O = [];
    w.forEach(function(I) {
      w.forEach(function(P) {
        if (I !== P) {
          var B = I.rect, H = P.rect, W = B[_.start], L = B[_.end], Y = H[_.start], X = H[_.end];
          W > X || Y > L || O.push([I, P]);
        }
      });
    }), O.forEach(function(I) {
      var P = F(I, 2), B = P[0], H = P[1], W = B.rect, L = H.rect, Y = W[m.start], X = W[m.end], Q = L[m.start], j = L[m.end], V = M[m.start], et = 0, nt = 0, U = !1, lt = !1, vt = !1;
      if (X <= x && y <= Q) {
        if (lt = !0, et = (Q - X - (y - x)) / 2, nt = X + et + (y - x) / 2, J(nt - b) > V)
          return;
      } else if (X < Q && j < x + V) {
        if (U = !0, et = Q - X, nt = j + et, J(nt - x) > V)
          return;
      } else if (X < Q && y - V < Y) {
        if (vt = !0, et = Q - X, nt = Y - et, J(nt - y) > V)
          return;
      } else
        return;
      et && Ad(e, L, d, s) && (et > f || v.push({
        type: d,
        pos: d === "vertical" ? [nt, 0] : [0, nt],
        element: H.element,
        size: 0,
        className: H.className,
        isStart: U,
        isCenter: lt,
        isEnd: vt,
        gap: et,
        hide: !0,
        gapRects: [B, H],
        direction: "",
        elementDirection: ""
      }));
    });
  }), v;
}
function aE(t, e, r, n) {
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
      var T = E.map(function(D, w) {
        var O = w === 0 ? {
          snapSize: p,
          posName: "left",
          sizeName: "width",
          clientOffset: n.left - e
        } : {
          snapSize: d,
          posName: "top",
          sizeName: "height",
          clientOffset: n.top - r
        }, I = O.snapSize, P = O.posName, B = O.sizeName, H = O.clientOffset;
        if (!I)
          return {
            dir: D,
            multiple: 1,
            snapSize: I,
            snapOffset: 0
          };
        var W = y[B], L = y[P], Y = Cp(b.map(function(U) {
          return [
            U[P] - L,
            U[B],
            W - U[B] - U[P] + L
          ];
        })).filter(function(U) {
          return U;
        }).sort(function(U, lt) {
          return U - lt;
        }), X = Y[0], Q = Y.map(function(U) {
          return Ot(U / X, 0.1) * I;
        }), j = 1, V = Ot(W / X, 0.1);
        for (j = 1; j <= 10 && !Q.every(function(U) {
          return U * j % 1 === 0;
        }); ++j)
          ;
        var et = (-D + 1) / 2, nt = bo(L - H, L - H + W, et, 1 - et);
        return {
          multiple: V * j,
          dir: D,
          snapSize: I,
          snapOffset: Math.round(nt / I)
        };
      }), M = T.map(function(D) {
        return D.multiple || 1;
      });
      f.snapThresholdInfo.multiples = M, f.snapThresholdInfo.offset = T.map(function(D) {
        return D.snapOffset;
      }), T.forEach(function(D, w) {
        D.snapSize;
      });
    }
  } else
    f.snapThresholdInfo = null;
}
function oE(t, e, r, n, a, s, u) {
  n === void 0 && (n = 0), a === void 0 && (a = 0);
  var f = t.props, c = t.state, v = f.snapGridWidth, p = v === void 0 ? 0 : v, h = f.snapGridHeight, d = h === void 0 ? 0 : h, m = [], _ = s.left, x = s.top, y = [0, 0];
  aE(t, n, a, s);
  var b = c.snapThresholdInfo, E = p, T = d;
  if (b && (p *= b.multiples[0] || 1, d *= b.multiples[1] || 1, y = b.offset), d) {
    for (var M = function(w) {
      m.push({
        type: "horizontal",
        pos: [
          _,
          Ot(y[1] * T + w - a + x, 0.1)
        ],
        className: St("grid-guideline"),
        size: e,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, D = 0; D <= r * 2; D += d)
      M(D);
    for (var D = -d; D >= -r; D -= d)
      M(D);
  }
  if (p) {
    for (var M = function(O) {
      m.push({
        type: "vertical",
        pos: [
          Ot(y[0] * E + O - n + _, 0.1),
          x
        ],
        className: St("grid-guideline"),
        size: r,
        hide: !u,
        direction: "",
        grid: !0
      });
    }, D = 0; D <= e * 2; D += p)
      M(D);
    for (var D = -p; D >= -e; D -= p)
      M(D);
  }
  return m;
}
function Ad(t, e, r, n) {
  return r === "horizontal" ? J(t.right - e.left) <= n || J(t.left - e.right) <= n || t.left <= e.right && e.left <= t.right : r === "vertical" ? J(t.bottom - e.top) <= n || J(t.top - e.bottom) <= n || t.top <= e.bottom && e.top <= t.bottom : !0;
}
function sE(t) {
  var e = t.state, r = t.props.elementGuidelines, n = r === void 0 ? [] : r;
  if (!n.length)
    return e.elementRects = [], [];
  var a = (e.elementRects || []).filter(function(d) {
    return !d.refresh;
  }), s = n.map(function(d) {
    return be(d) && "element" in d ? z(z({}, d), { element: Te(d.element, !0) }) : {
      element: Te(d, !0)
    };
  }).filter(function(d) {
    return d.element;
  }), u = xb(a.map(function(d) {
    return d.element;
  }), s.map(function(d) {
    return d.element;
  })), f = u.maintained, c = u.added, v = [];
  f.forEach(function(d) {
    var m = F(d, 2), _ = m[0], x = m[1];
    v[x] = a[_];
  }), uE(t, c.map(function(d) {
    return s[d];
  })).map(function(d, m) {
    v[c[m]] = d;
  }), e.elementRects = v;
  var p = yf(t.props.elementSnapDirections), h = [];
  return v.forEach(function(d) {
    var m = d.element, _ = d.top, x = _ === void 0 ? p.top : _, y = d.left, b = y === void 0 ? p.left : y, E = d.right, T = E === void 0 ? p.right : E, M = d.bottom, D = M === void 0 ? p.bottom : M, w = d.center, O = w === void 0 ? p.center : w, I = d.middle, P = I === void 0 ? p.middle : I, B = d.className, H = d.rect, W = Sf({
      top: x,
      right: T,
      left: b,
      bottom: D,
      center: O,
      middle: P
    }, H), L = W.horizontal, Y = W.vertical, X = W.horizontalNames, Q = W.verticalNames, j = H.top, V = H.left, et = H.right - V, nt = H.bottom - j, U = [et, nt];
    Y.forEach(function(lt, vt) {
      h.push({
        type: "vertical",
        element: m,
        pos: [
          Ot(lt, 0.1),
          j
        ],
        size: nt,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Iv[Q[vt]] || Q[vt],
        direction: ""
      });
    }), L.forEach(function(lt, vt) {
      h.push({
        type: "horizontal",
        element: m,
        pos: [
          V,
          Ot(lt, 0.1)
        ],
        size: et,
        sizes: U,
        className: B,
        elementRect: d,
        elementDirection: Iv[X[vt]] || X[vt],
        direction: ""
      });
    });
  }), h;
}
function kv(t, e) {
  return t ? t.map(function(r) {
    var n = be(r) ? r : { pos: r }, a = n.pos;
    return si(a) ? n : z(z({}, n), { pos: Zt(a, e) });
  }) : [];
}
function Bd(t, e, r, n, a, s, u) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = { left: 0, top: 0, right: 0, bottom: 0 });
  var f = [], c = u.left, v = u.top, p = u.bottom, h = u.right, d = r + h - c, m = n + p - v;
  return kv(t, m).forEach(function(_) {
    f.push({
      type: "horizontal",
      pos: [
        c,
        Ot(_.pos - s + v, 0.1)
      ],
      size: d,
      className: _.className,
      direction: ""
    });
  }), kv(e, d).forEach(function(_) {
    f.push({
      type: "vertical",
      pos: [
        Ot(_.pos - a + c, 0.1),
        v
      ],
      size: m,
      className: _.className,
      direction: ""
    });
  }), f;
}
function uE(t, e) {
  if (!e.length)
    return [];
  var r = t.props.groupable, n = t.state, a = n.containerClientRect, s = n.rootMatrix, u = n.is3d, f = n.offsetDelta, c = u ? 4 : 3, v = F(PC(s, a, c), 2), p = v[0], h = v[1], d = r ? 0 : f[0], m = r ? 0 : f[1];
  return e.map(function(_) {
    var x = _.element.getBoundingClientRect(), y = x.left - p - d, b = x.top - h - m, E = b + x.height, T = y + x.width, M = F(vi(s, [y, b], c), 2), D = M[0], w = M[1], O = F(vi(s, [T, E], c), 2), I = O[0], P = O[1];
    return z(z({}, _), { rect: {
      left: D,
      right: I,
      top: w,
      bottom: P,
      center: (D + I) / 2,
      middle: (w + P) / 2
    } });
  });
}
function vo(t) {
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
    var u = Te(n, !0);
    if (u) {
      var f = Ki(u), c = $v(e, [
        f.left - a.left,
        f.top - a.top
      ]), v = $v(e, [
        f.right - a.right,
        f.bottom - a.bottom
      ]);
      s.left = Ot(c[0], 1e-5), s.top = Ot(c[1], 1e-5), s.right = Ot(v[0], 1e-5), s.bottom = Ot(v[1], 1e-5);
    }
  }
  return e.snapContainer = n, e.snapOffset = s, e.guidelines = qu(t), e.enableSnap = !0, !0;
}
function zd(t, e, r, n, a, s) {
  var u = zn(t, e, r, s ? 4 : 3), f = xr(u, n);
  return Df(u, bt(a, f));
}
function Hv(t) {
  return t ? t / J(t) : 0;
}
function fE(t, e, r, n, a, s) {
  var u = s.fixedDirection, f = GC(r, u, n), c = Cf(t, e, r, n), v = it(it([], F(VC(t, e, f, n, a, s)), !1), F(Td(t, c, s)), !1), p = Ro(v, 0), h = Ro(v, 1);
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
function lE(t, e, r, n, a, s, u, f, c) {
  var v = xr(e, u), p = Xo(t, f, {
    vertical: [v[0]],
    horizontal: [v[1]]
  }), h = p.horizontal.offset, d = p.vertical.offset;
  if (Ot(d, Lu) || Ot(h, Lu)) {
    var m = F(Ie({
      datas: c,
      distX: -d,
      distY: -h
    }), 2), _ = m[0], x = m[1], y = Math.min(a || 1 / 0, r + u[0] * _), b = Math.min(s || 1 / 0, n + u[1] * x);
    return [y - r, b - n];
  }
  return [0, 0];
}
function Gd(t, e, r, n, a, s, u, f) {
  for (var c = ce(t.state), v = t.props.keepRatio, p = 0, h = 0, d = 0; d < 2; ++d) {
    var m = e(p, h), _ = fE(t, m, a, v, u, f), x = _.width, y = _.height, b = x.isBound, E = y.isBound, T = x.offset, M = y.offset;
    if (d === 1 && (b || (T = 0), E || (M = 0)), d === 0 && u && !b && !E)
      return [0, 0];
    if (v) {
      var D = J(T) * (r ? 1 / r : 1), w = J(M) * (n ? 1 / n : 1), O = b && E ? D < w : E || !b && D < w;
      O ? T = r * M / n : M = n * T / r;
    }
    p += T, h += M;
  }
  if (!v && a[0] && a[1]) {
    var I = ZC(t, c, a, s, f), P = I.maxWidth, B = I.maxHeight, H = F(lE(t, e(p, h).map(function(Y) {
      return Y.map(function(X) {
        return Ot(X, Lu);
      });
    }), r + p, n + h, P, B, a, u, f), 2), T = H[0], M = H[1];
    p += T, h += M;
  }
  return [p, h];
}
function $i(t) {
  return t < 0 && (t = t % 360 + 360), t %= 360, t;
}
function cE(t, e) {
  e = $i(e);
  var r = Math.floor(t / 360), n = r * 360 + 360 - e, a = r * 360 + e;
  return J(t - n) < J(t - a) ? n : a;
}
function xu(t, e) {
  t = $i(t), e = $i(e);
  var r = $i(t - e);
  return Math.min(r, 360 - r);
}
function vE(t, e, r, n) {
  var a, s = t.props, u = (a = s[Sd]) !== null && a !== void 0 ? a : 5, f = s[bd];
  if (_i(t, "rotatable")) {
    var c = e.pos1, v = e.pos2, p = e.pos3, h = e.pos4, d = e.origin, m = r * Math.PI / 180, _ = [c, v, p, h].map(function(M) {
      return bt(M, d);
    }), x = _.map(function(M) {
      return ua(M, m);
    }), y = it(it([], F(RC(t, _, x, d, r)), !1), F(HC(t, _, x, d, r)), !1);
    y.sort(function(M, D) {
      return J(M - r) - J(D - r);
    });
    var b = y.length > 0;
    if (b)
      return {
        isSnap: b,
        dist: b ? y[0] : r
      };
  }
  if (f?.length && u) {
    var E = f.slice().sort(function(M, D) {
      return xu(M, n) - xu(D, n);
    }), T = E[0];
    if (xu(T, n) <= u)
      return {
        isSnap: !0,
        dist: r + cE(n, T) - n
      };
  }
  return {
    isSnap: !1,
    dist: r
  };
}
function pE(t, e, r, n, a, s, u) {
  if (!_i(t, "resizable"))
    return [0, 0];
  var f = u.fixedDirection, c = u.nextAllMatrix, v = t.state, p = v.allMatrix, h = v.is3d;
  return Gd(t, function(d, m) {
    return zd(c || p, e + d, r + m, f, a, h);
  }, e, r, n, a, s, u);
}
function dE(t, e, r, n, a) {
  if (!_i(t, "scalable"))
    return [0, 0];
  var s = a.startOffsetWidth, u = a.startOffsetHeight, f = a.fixedPosition, c = a.fixedDirection, v = a.is3d, p = Gd(t, function(h, d) {
    return zd(pC(a, qt(e, [h / s, d / u])), s, u, c, f, v);
  }, s, u, r, f, n, a);
  return [p[0] / s, p[1] / u];
}
function hE(t, e) {
  e.absolutePoses = ce(t.state);
}
function Yv(t) {
  var e = [];
  return t.forEach(function(r) {
    r.guidelineInfos.forEach(function(n) {
      var a = n.guideline;
      Yr(e, function(s) {
        return s.guideline === a;
      }) || (a.direction = "", e.push({ guideline: a, posInfo: r }));
    });
  }), e.map(function(r) {
    var n = r.guideline, a = r.posInfo;
    return z(z({}, n), { direction: a.direction });
  });
}
function Xv(t, e, r, n, a, s) {
  var u = xf(Ho(t, s), e, r), f = u.vertical, c = u.horizontal, v = ni();
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
  var p = YC(t), h = p.boundMap, d = p.vertical, m = p.horizontal;
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
var gE = Tf("", ["resizable", "scalable"]), mE = {
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
    Sd,
    bd,
    Cd,
    Ed,
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
      return ai(t, "boundMap", ni(), function(ut) {
        return JSON.stringify(ut);
      }), ai(t, "innerBoundMap", ni(), function(ut) {
        return JSON.stringify(ut);
      }), [];
    r.guidelines = qu(t);
    var d = Math.min(s[0], u[0], f[0], c[0]), m = Math.min(s[1], u[1], f[1], c[1]), _ = v.externalPoses || [], x = ce(t.state), y = [], b = [], E = [], T = [], M = [], D = fe(x), w = D.width, O = D.height, I = D.top, P = D.left, B = D.bottom, H = D.right, W = { left: P, right: H, top: I, bottom: B, center: (P + H) / 2, middle: (I + B) / 2 }, L = _.length > 0, Y = L ? fe(_) : {};
    if (!v.request) {
      if (v.direction && M.push(zC(t, x, v.direction, h, h)), v.snap) {
        var X = fe(x);
        v.center && (X.middle = (X.top + X.bottom) / 2, X.center = (X.left + X.right) / 2), M.push(Pv(t, X, h, h));
      }
      L && (v.center && (Y.middle = (Y.top + Y.bottom) / 2, Y.center = (Y.left + Y.right) / 2), M.push(Pv(t, Y, h, h))), M.forEach(function(ut) {
        var st = ut.vertical.posInfos, at = ut.horizontal.posInfos;
        y.push.apply(y, it([], F(st.filter(function(dt) {
          var _t = dt.guidelineInfos;
          return _t.some(function(Tt) {
            var Wt = Tt.guideline;
            return !Wt.hide;
          });
        }).map(function(dt) {
          return {
            type: "snap",
            pos: dt.pos
          };
        })), !1)), b.push.apply(b, it([], F(at.filter(function(dt) {
          var _t = dt.guidelineInfos;
          return _t.some(function(Tt) {
            var Wt = Tt.guideline;
            return !Wt.hide;
          });
        }).map(function(dt) {
          return {
            type: "snap",
            pos: dt.pos
          };
        })), !1)), E.push.apply(E, it([], F(Yv(st)), !1)), T.push.apply(T, it([], F(Yv(at)), !1));
      });
    }
    var Q = Xv(t, [P, H], [I, B], y, b), j = Q.boundMap, V = Q.innerBoundMap;
    L && Xv(t, [Y.left, Y.right], [Y.top, Y.bottom], y, b, v.externalBounds);
    var et = it(it([], F(E), !1), F(T), !1), nt = et.filter(function(ut) {
      return ut.element && !ut.gapRects;
    }), U = et.filter(function(ut) {
      return ut.gapRects;
    }).sort(function(ut, st) {
      return ut.gap - st.gap;
    });
    ht(t, "onSnap", {
      guidelines: et.filter(function(ut) {
        var st = ut.element;
        return !st;
      }),
      elements: nt,
      gaps: U
    }, !0);
    var lt = ai(t, "boundMap", j, function(ut) {
      return JSON.stringify(ut);
    }, ni()), vt = ai(t, "innerBoundMap", V, function(ut) {
      return JSON.stringify(ut);
    }, ni());
    return (j === lt || V === vt) && ht(t, "onBound", {
      bounds: j,
      innerBounds: V
    }, !0), it(it(it(it(it(it([], F(eE(t, nt, [d, m], W, e)), !1), F(nE(t, U, [d, m], W, e)), !1), F(Nv(t, "horizontal", T, [a, n], W, e)), !1), F(Nv(t, "vertical", E, [a, n], W, e)), !1), F(Wv(t, "horizontal", b, d, n, w, 0, e)), !1), F(Wv(t, "vertical", y, m, a, O, 1, e)), !1);
  },
  dragStart: function(t, e) {
    t.state.snapRenderInfo = {
      request: e.isRequest,
      snap: !0,
      center: !0
    }, vo(t);
  },
  drag: function(t) {
    var e = t.state;
    vo(t) || (e.guidelines = qu(t)), e.snapRenderInfo && (e.snapRenderInfo.render = !0);
  },
  pinchStart: function(t) {
    this.unset(t);
  },
  dragEnd: function(t) {
    this.unset(t);
  },
  dragControlCondition: function(t, e) {
    if (gE(t, e) || Xu(t, e))
      return !0;
    if (!e.isRequest && e.inputEvent)
      return _r(e.inputEvent.target, St("snap-control"));
  },
  dragControlStart: function(t) {
    t.state.snapRenderInfo = null, vo(t);
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
    t.state.snapRenderInfo = null, vo(t);
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
function _E(t, e) {
  return [
    t[0] * e[0],
    t[1] * e[1]
  ];
}
function St() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return pS.apply(void 0, it([hf], F(t), !1));
}
function Fd(t) {
  t();
}
function xE(t) {
  return !t || t === "none" ? [1, 0, 0, 1, 0, 0] : be(t) ? t : ji(t);
}
function Vi(t, e, r) {
  return Eo(e, In(r, e), t, In(r.map(function(n) {
    return -n;
  }), e));
}
function yE(t, e, r) {
  if (e === "%") {
    var n = wf(t.ownerSVGElement);
    return n[r ? "width" : "height"] / 100;
  }
  return 1;
}
function SE(t) {
  var e = bE(Mf(t, ":before"));
  return e.map(function(r, n) {
    var a = ia(r), s = a.value, u = a.unit;
    return s * yE(t, u, n === 0);
  });
}
function Oo(t) {
  return t ? t.split(" ") : ["0", "0"];
}
function bE(t) {
  return Oo(t.transformOrigin);
}
function Ld(t) {
  var e = Xr(t), r = e("transform");
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
function ra(t, e, r, n, a) {
  var s, u, f = nf(t) || pn(t), c = !1, v, p;
  if (!t || r)
    v = t;
  else {
    var h = (s = t?.assignedSlot) === null || s === void 0 ? void 0 : s.parentElement, d = t.parentElement;
    h ? (c = !0, p = d, v = h) : v = d;
  }
  for (var m = !1, _ = t === e || v === e, x = "relative", y = 1, b = parseFloat(a?.("zoom")) || 1, E = a?.("position"); v && v !== f; ) {
    e === v && (_ = !0);
    var T = Xr(v), M = v.tagName.toLowerCase(), D = Ld(v), w = T("willChange"), O = parseFloat(T("zoom")) || 1;
    if (x = T("position"), n && O !== 1) {
      y = O;
      break;
    }
    if (
      // offsetParent is the parentElement if the target's zoom is not 1 and not absolute.
      !r && n && b !== 1 && E && E !== "absolute" || M === "svg" || M === "foreignobject" || x !== "static" || D && D !== "none" || w === "transform"
    )
      break;
    var I = (u = t?.assignedSlot) === null || u === void 0 ? void 0 : u.parentNode, P = v.parentNode;
    I && (c = !0, p = P);
    var B = P;
    if (B && B.nodeType === 11) {
      v = B.host, m = !0, x = Xr(v)("position");
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
function CE(t, e) {
  var r, n = t.tagName.toLowerCase(), a = t.offsetLeft, s = t.offsetTop, u = Xr(t), f = na(a), c = !f, v, p;
  return !c && (n !== "svg" || t.ownerSVGElement) ? (v = nd ? SE(t) : Oo(u("transformOrigin")).map(function(h) {
    return parseFloat(h);
  }), p = v.slice(), c = !0, n === "svg" ? (a = 0, s = 0) : (r = F(DE(t, v, t === e && e.tagName.toLowerCase() === "g"), 4), a = r[0], s = r[1], v[0] = r[2], v[1] = r[3])) : (v = Oo(u("transformOrigin")).map(function(h) {
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
function Wd(t, e) {
  var r = Xr(t), n = Xr(pn(t)), a = n("position");
  if (!e && (!a || a === "static"))
    return [0, 0];
  var s = parseInt(n("marginLeft"), 10), u = parseInt(n("marginTop"), 10);
  return r("position") === "absolute" && ((r("top") !== "auto" || r("bottom") !== "auto") && (u = 0), (r("left") !== "auto" || r("right") !== "auto") && (s = 0)), [s, u];
}
function Uu(t) {
  t.forEach(function(e) {
    var r = e.matrix;
    r && (e.matrix = Ce(r, 3, 4));
  });
}
function EE(t) {
  for (var e = t.parentElement, r = !1, n = pn(t); e; ) {
    var a = Mf(e).transform;
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
function qo(t, e) {
  return e === void 0 && (e = t.length > 9), "".concat(e ? "matrix3d" : "matrix", "(").concat(Kp(t, !e).join(","), ")");
}
function wf(t) {
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
function wE(t, e) {
  var r, n = wf(t), a = n.width, s = n.height, u = n.clientWidth, f = n.clientHeight, c = u / a, v = f / s, p = t.preserveAspectRatio.baseVal, h = p.align, d = p.meetOrSlice, m = [0, 0], _ = [c, v], x = [0, 0];
  if (h !== 1) {
    var y = (h - 2) % 3, b = Math.floor((h - 2) / 3);
    m[0] = a * y / 2, m[1] = s * b / 2;
    var E = d === 2 ? Math.max(v, c) : Math.min(c, v);
    _[0] = E, _[1] = E, x[0] = (u - a) / 2 * y, x[1] = (f - s) / 2 * b;
  }
  var T = cf(_, e);
  return r = F(x, 2), T[e * (e - 1)] = r[0], T[e * (e - 1) + 1] = r[1], Vi(T, e, m);
}
function DE(t, e, r) {
  var n = t.tagName.toLowerCase();
  if (!t.getBBox || !r && n === "g")
    return [0, 0, 0, 0];
  var a = Xr(t), s = a("transform-box") === "fill-box", u = t.getBBox(), f = wf(t.ownerSVGElement), c = u.x, v = u.y;
  n === "foreignobject" && !c && !v && (c = parseFloat(t.getAttribute("x")) || 0, v = parseFloat(t.getAttribute("y")) || 0);
  var p = c - f.x, h = v - f.y, d = s ? e[0] : e[0] - p, m = s ? e[1] : e[1] - h;
  return [p, h, d, m];
}
function or(t, e, r) {
  return Mr(t, On(e, r), r);
}
function zn(t, e, r, n) {
  return [[0, 0], [e, 0], [0, r], [e, r]].map(function(a) {
    return or(t, a, n);
  });
}
function fe(t) {
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
function qv(t, e, r, n) {
  var a = zn(t, e, r, n);
  return fe(a);
}
function ME(t, e, r, n, a) {
  var s, u = t.target, f = t.origin, c = e.matrix, v = kd(u), p = v.offsetWidth, h = v.offsetHeight, d = r.getBoundingClientRect(), m = [0, 0];
  r === pn(r) && (m = Wd(u, !0));
  for (var _ = u.getBoundingClientRect(), x = _.left - d.left + r.scrollLeft - (r.clientLeft || 0) + m[0], y = _.top - d.top + r.scrollTop - (r.clientTop || 0) + m[1], b = _.width, E = _.height, T = Eo(n, a, c), M = qv(T, p, h, n), D = M.left, w = M.top, O = M.width, I = M.height, P = or(T, f, n), B = bt(P, [D, w]), H = [
    x + B[0] * b / O,
    y + B[1] * E / I
  ], W = [0, 0], L = 0; ++L < 10; ) {
    var Y = Oe(a, n);
    s = F(bt(or(Y, H, n), or(Y, P, n)), 2), W[0] = s[0], W[1] = s[1];
    var X = Eo(n, a, In(W, n), c), Q = qv(X, p, h, n), j = Q.left, V = Q.top, et = j - x, nt = V - y;
    if (J(et) < 2 && J(nt) < 2)
      break;
    H[0] -= et, H[1] -= nt;
  }
  return W.map(function(U) {
    return Math.round(U);
  });
}
function RE(t, e, r) {
  var n = t.length === 16, a = n ? 4 : 3, s = e.map(function(c) {
    return or(t, c, a);
  }), u = r.left, f = r.top;
  return s.map(function(c) {
    return [c[0] + u, c[1] + f];
  });
}
function le(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
}
function Nd(t, e) {
  return le([
    e[0] - t[0],
    e[1] - t[1]
  ]);
}
function Xi(t, e, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = cr(t, e));
  var a = Nd(t, e);
  return {
    transform: "translateY(-50%) translate(".concat(t[0], "px, ").concat(t[1], "px) rotate(").concat(n, "rad) scaleY(").concat(r, ")"),
    width: "".concat(a, "px")
  };
}
function Io(t, e) {
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
  return be(r) ? z(z({}, t), r) : t;
}
function kd(t) {
  var e = t && !na(t.offsetWidth), r = 0, n = 0, a = 0, s = 0, u = 0, f = 0, c = 0, v = 0, p = 0, h = 0, d = 0, m = 0, _ = 1 / 0, x = 1 / 0, y = 1 / 0, b = 1 / 0, E = 0, T = 0, M = !1;
  if (t)
    if (!e && t.ownerSVGElement) {
      var D = t.getBBox();
      M = !0, r = D.width, n = D.height, u = r, f = n, c = r, v = n, a = r, s = n;
    } else {
      var w = Xr(t), O = t.style, I = w("boxSizing") === "border-box", P = parseFloat(w("borderLeftWidth")) || 0, B = parseFloat(w("borderRightWidth")) || 0, H = parseFloat(w("borderTopWidth")) || 0, W = parseFloat(w("borderBottomWidth")) || 0, L = parseFloat(w("paddingLeft")) || 0, Y = parseFloat(w("paddingRight")) || 0, X = parseFloat(w("paddingTop")) || 0, Q = parseFloat(w("paddingBottom")) || 0, j = L + Y, V = X + Q, et = P + B, nt = H + W, U = j + et, lt = V + nt, vt = w("position"), ut = 0, st = 0;
      if ("clientLeft" in t) {
        var at = null;
        if (vt === "absolute") {
          var dt = ra(t, pn(t));
          at = dt.offsetParent;
        } else
          at = t.parentElement;
        if (at) {
          var _t = Xr(at);
          ut = parseFloat(_t("width")), st = parseFloat(_t("height"));
        }
      }
      p = Math.max(j, Zt(w("minWidth"), ut) || 0), h = Math.max(V, Zt(w("minHeight"), st) || 0), _ = Zt(w("maxWidth"), ut), x = Zt(w("maxHeight"), st), isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0), E = Zt(O.width, 0) || 0, T = Zt(O.height, 0) || 0, u = parseFloat(w("width")) || 0, f = parseFloat(w("height")) || 0, c = J(u - E) < 1 ? wu(p, E || u, _) : u, v = J(f - T) < 1 ? wu(h, T || f, x) : f, r = c, n = v, a = c, s = v, I ? (y = _, b = x, d = p, m = h, c = r - U, v = n - lt) : (y = _ + U, b = x + lt, d = p + U, m = h + lt, r = c + U, n = v + lt), a = c + j, s = v + V;
    }
  return {
    svg: M,
    offsetWidth: r,
    offsetHeight: n,
    clientWidth: a,
    clientHeight: s,
    contentWidth: c,
    contentHeight: v,
    inlineCSSWidth: E,
    inlineCSSHeight: T,
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
function Hd(t, e) {
  return cr(e > 0 ? t[0] : t[1], e > 0 ? t[1] : t[0]);
}
function po() {
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
function Yd(t, e) {
  var r = t === pn(t) || t === nf(t), n = {
    clientLeft: t.clientLeft,
    clientTop: t.clientTop,
    clientWidth: t.clientWidth,
    clientHeight: t.clientHeight,
    scrollWidth: t.scrollWidth,
    scrollHeight: t.scrollHeight,
    overflow: !1
  };
  return r && (n.clientHeight = Math.max(e.height, n.clientHeight), n.scrollHeight = Math.max(e.height, n.scrollHeight)), n.overflow = Xr(t)("overflow") !== "visible", z(z({}, e), n);
}
function yu(t, e, r, n) {
  var a = t.left, s = t.right, u = t.top, f = t.bottom, c = e.top, v = e.left, p = {
    left: v + a,
    top: c + u,
    right: v + s,
    bottom: c + f,
    width: s - a,
    height: f - u
  };
  return r && n ? Yd(r, p) : p;
}
function Ki(t, e) {
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
  return t && e ? Yd(t, f) : f;
}
function TE(t) {
  var e = t.props, r = e.groupable, n = e.svgOrigin, a = t.getState(), s = a.offsetWidth, u = a.offsetHeight, f = a.svg, c = a.transformOrigin;
  return !r && f && n ? If(n, s, u) : c;
}
function Xd(t, e, r, n) {
  var a;
  if (t)
    a = t;
  else if (e)
    a = [0, 0];
  else {
    var s = r.target;
    a = qd(s, n);
  }
  return a;
}
function qd(t, e) {
  if (t) {
    var r = t.getAttribute("data-rotation") || "", n = t.getAttribute("data-direction");
    if (e.deg = r, !!n) {
      var a = [0, 0];
      return n.indexOf("w") > -1 && (a[0] = -1), n.indexOf("e") > -1 && (a[0] = 1), n.indexOf("n") > -1 && (a[1] = -1), n.indexOf("s") > -1 && (a[1] = 1), a;
    }
  }
}
function Df(t, e) {
  return [
    qt(e, t[0]),
    qt(e, t[1]),
    qt(e, t[2]),
    qt(e, t[3])
  ];
}
function ce(t) {
  var e = t.left, r = t.top, n = t.pos1, a = t.pos2, s = t.pos3, u = t.pos4;
  return Df([n, a, s, u], [e, r]);
}
function $u(t, e) {
  t[e ? "controlAbles" : "targetAbles"].forEach(function(r) {
    r.unset && r.unset(t);
  });
}
function ii(t, e) {
  var r = e ? "controlGesto" : "targetGesto", n = t[r];
  n?.isIdle() === !1 && $u(t, e), n?.unset(), t[r] = null;
}
function Ar(t, e) {
  if (e) {
    var r = mi(e);
    r.nextStyle = z(z({}, r.nextStyle), t);
  }
  return {
    style: t,
    cssText: Ue(t).map(function(n) {
      return "".concat(yo(n, "-"), ": ").concat(t[n], ";");
    }).join("")
  };
}
function Ud(t, e, r) {
  var n = e.afterTransform || e.transform;
  return z(z({}, Ar(z(z(z({}, t.style), e.style), { transform: n }), r)), { afterTransform: n, transform: t.transform });
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
function Jr(t, e, r) {
  var n = e.datas, a = "isDrag" in r ? r.isDrag : e.isDrag;
  return n.datas || (n.datas = {}), z(z({ isDrag: a }, r), { moveable: t, target: t.state.target, clientX: e.clientX, clientY: e.clientY, inputEvent: e.inputEvent, currentTarget: t, lastEvent: n.lastEvent, isDouble: e.isDouble, datas: n.datas, isFirstDrag: !!e.isFirstDrag });
}
function Uo(t, e, r) {
  t._emitter.on(e, r);
}
function ht(t, e, r, n, a) {
  return t.triggerEvent(e, r, n, a);
}
function Mf(t, e) {
  return fn(t).getComputedStyle(t, e);
}
function ho(t, e, r) {
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
function Vu(t, e) {
  return t === e || t == null && e == null;
}
function Uv() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  for (var r = t.length - 1, n = 0; n < r; ++n) {
    var a = t[n];
    if (!na(a))
      return a;
  }
  return t[r];
}
function $d(t, e) {
  var r = [], n = [];
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n.indexOf(u), c = r[f] || [];
    f === -1 && (n.push(u), r.push(c)), c.push(a);
  }), r;
}
function OE(t, e) {
  var r = [], n = {};
  return t.forEach(function(a, s) {
    var u = e(a, s, t), f = n[u];
    f || (f = [], n[u] = f, r.push(f)), f.push(a);
  }), r;
}
function Vd(t) {
  return t.reduce(function(e, r) {
    return e.concat(r);
  }, []);
}
function ci() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.sort(function(r, n) {
    return J(n) - J(r);
  }), t[0];
}
function vi(t, e, r) {
  return Mr(Oe(t, r), On(e, r), r);
}
function IE(t, e) {
  var r, n = t.is3d, a = t.rootMatrix, s = n ? 4 : 3;
  return r = F(vi(a, [e.distX, e.distY], s), 2), e.distX = r[0], e.distY = r[1], e;
}
function oe(t, e, r, n) {
  if (!r[0] && !r[1])
    return e;
  var a = or(t, [Hv(r[0] || 1), 0], n), s = or(t, [0, Hv(r[1] || 1)], n), u = or(t, [
    r[0] / le(a),
    r[1] / le(s)
  ], n);
  return qt(e, u);
}
function xe(t, e, r) {
  return r ? "".concat(t / e * 100, "%") : "".concat(t, "px");
}
function Po(t) {
  return J(t) <= Br ? 0 : t;
}
function Rf(t) {
  return function(e) {
    if (!e.isDragging(t))
      return "";
    var r = yC(e, t), n = r.deg;
    return n ? St("view-control-rotation".concat(n)) : "";
  };
}
function Tf(t, e) {
  return e === void 0 && (e = [t]), function(r, n) {
    if (n.isRequest)
      return e.some(function(s) {
        return n.requestAble === s;
      }) ? n.parentDirection : !1;
    var a = n.inputEvent.target;
    return _r(a, St("direction")) && (!t || _r(a, St(t)));
  };
}
function PE(t, e, r) {
  var n, a = ui(t, {
    "x%": function(D) {
      return D / 100 * e.offsetWidth;
    },
    "y%": function(D) {
      return D / 100 * e.offsetHeight;
    }
  }), s = t.slice(0, r < 0 ? void 0 : r), u = t.slice(0, r < 0 ? void 0 : r + 1), f = t[r] || "", c = r < 0 ? [] : t.slice(r), v = r < 0 ? [] : t.slice(r + 1), p = a.slice(0, r < 0 ? void 0 : r), h = a.slice(0, r < 0 ? void 0 : r + 1), d = (n = a[r]) !== null && n !== void 0 ? n : ui([""])[0], m = r < 0 ? [] : a.slice(r), _ = r < 0 ? [] : a.slice(r + 1), x = d ? [d] : [], y = ti(p), b = ti(h), E = ti(m), T = ti(_), M = Jt(y, E, 4);
  return {
    transforms: t,
    beforeFunctionMatrix: y,
    beforeFunctionMatrix2: b,
    targetFunctionMatrix: ti(x),
    afterFunctionMatrix: E,
    afterFunctionMatrix2: T,
    allFunctionMatrix: M,
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
function AE(t) {
  return !t || !be(t) || hi(t) ? !1 : dr(t) || "length" in t;
}
function Te(t, e) {
  return t ? hi(t) ? t : Hr(t) ? e ? document.querySelector(t) : t : tf(t) ? t() : Mp(t) ? t : "current" in t ? t.current : t : null;
}
function Of(t, e) {
  if (!t)
    return [];
  var r = AE(t) ? [].slice.call(t) : [t];
  return r.reduce(function(n, a) {
    return Hr(a) && e ? it(it([], F(n), !1), F([].slice.call(document.querySelectorAll(a))), !1) : (dr(a) ? n.push(Of(a, e)) : n.push(Te(a, e)), n);
  }, []);
}
function BE(t, e, r) {
  var n = cr(t, e) / Math.PI * 180;
  return n = r >= 0 ? n : 180 - n, n = n >= 0 ? n : 360 + n, n;
}
function $v(t, e) {
  var r = t.rootMatrix, n = t.is3d, a = n ? 4 : 3, s = Oe(r, a);
  return n || (s = Ce(s, 3, 4)), s[12] = 0, s[13] = 0, s[14] = 0, mb(s, e);
}
function Kd(t, e, r, n, a) {
  var s = F(t, 2), u = s[0], f = s[1], c = 0, v = 0;
  if (a && u && f) {
    var p = cr([0, 0], e), h = cr([0, 0], n), d = le(e), m = Math.cos(p - h) * d;
    if (!n[0])
      v = m, c = v * r;
    else if (!n[1])
      c = m, v = c / r;
    else {
      var _ = n[0] * u, x = n[1] * f, y = Math.atan2(_ + e[0], x + e[1]), b = Math.atan2(_, x);
      y < 0 && (y += Math.PI * 2), b < 0 && (b += Math.PI * 2);
      var E = 0;
      J(y - b) < Math.PI / 2 || J(y - b) > Math.PI / 2 * 3 || (b += Math.PI), E = y - b, E > Math.PI * 2 ? E -= Math.PI * 2 : E > Math.PI ? E = 2 * Math.PI - E : E < -Math.PI && (E = -2 * Math.PI - E);
      var T = le([_ + e[0], x + e[1]]) * Math.cos(E);
      c = T * Math.sin(b) - _, v = T * Math.cos(b) - x, n[0] < 0 && (c *= -1), n[1] < 0 && (v *= -1);
    }
  } else
    c = n[0] * e[0], v = n[1] * e[1];
  return [c, v];
}
function Zd(t, e, r, n) {
  var a, s = r.ratio, u = r.startOffsetWidth, f = r.startOffsetHeight, c = 0, v = 0, p = n.distX, h = n.distY, d = n.pinchScale, m = n.parentDistance, _ = n.parentDist, x = n.parentScale, y = r.fixedDirection, b = [0, 1].map(function(O) {
    return J(t[O] - y[O]);
  }), E = [0, 1].map(function(O) {
    var I = b[O];
    return I !== 0 && (I = 2 / I), I;
  });
  if (_)
    c = _[0], v = _[1], e && (c ? v || (v = c / s) : c = v * s);
  else if (si(d))
    c = (d - 1) * u, v = (d - 1) * f;
  else if (x)
    c = (x[0] - 1) * u, v = (x[1] - 1) * f;
  else if (m) {
    var T = u * b[0], M = f * b[1], D = le([T, M]);
    c = m / D * T * E[0], v = m / D * M * E[1];
  } else {
    var w = Ie({ datas: r, distX: p, distY: h });
    w = E.map(function(O, I) {
      return w[I] * O;
    }), a = F(Kd([u, f], w, s, t, e), 2), c = a[0], v = a[1];
  }
  return {
    // direction,
    // sizeDirection,
    distWidth: c,
    distHeight: v
  };
}
function Ku(t, e) {
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
    var r = F(t.split(" "), 2), n = r[0], a = r[1], s = Ku(n || ""), u = Ku(a || ""), f = z(z({}, s), u), c = {
      x: "50%",
      y: "50%"
    };
    return f.x && (c.x = f.x), f.y && (c.y = f.y), f.value && (f.x && !f.y && (c.y = f.value), !f.x && f.y && (c.x = f.value)), c;
  }
  return t === "left" ? { x: "0%" } : t === "right" ? { x: "100%" } : t === "top" ? { y: "0%" } : t === "bottom" ? { y: "100%" } : t ? t === "center" ? { value: "50%" } : { value: t } : {};
}
function If(t, e, r) {
  var n = Ku(t, !0), a = n.x, s = n.y;
  return [
    Zt(a, e) || 0,
    Zt(s, r) || 0
  ];
}
function zE(t, e, r) {
  var n = t.map(function(s) {
    return bt(s, e);
  }), a = n.map(function(s) {
    return ua(s, r);
  });
  return {
    prev: n,
    next: a,
    result: a.map(function(s) {
      return qt(s, e);
    })
  };
}
function Jd(t, e) {
  return t.length === e.length && t.every(function(r, n) {
    var a = e[n], s = dr(r), u = dr(a);
    return s && u ? Jd(r, a) : !s && !u ? r === a : !1;
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
function Pr(t) {
  return t >= 0 ? 1 : -1;
}
function J(t) {
  return Math.abs(t);
}
function Su(t, e) {
  return OS(t).map(function(r) {
    return e(r);
  });
}
function Qd(t) {
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
var GE = ca("pinchable", {
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
    var m = ht(t, v, d);
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
      ht(t, h, p);
      var d = r.ables, m = "drag".concat(f ? "Group" : "", "Control");
      return d.forEach(function(_) {
        _[m] && _[m](t, z(z({}, e), { datas: s[_.name], inputEvent: u, resolveMatrix: !0, pinchScale: n, parentDistance: v, parentRotate: c, isPinch: !0 }));
      }), p;
    }
  },
  pinchEnd: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.targets, u = e.originalDatas;
    if (r.isPinch) {
      var f = "onPinch".concat(s ? "Group" : "", "End"), c = Jr(t, e, { isDrag: n });
      s && (c.targets = s), ht(t, f, c);
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
}), Vv = Tf("scalable"), FE = {
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
  render: _d("scalable"),
  dragControlCondition: Vv,
  viewClassName: Rf("scalable"),
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.inputEvent, s = e.parentDirection, u = Xd(s, n, a, r), f = t.state, c = f.width, v = f.height, p = f.targetTransform, h = f.target, d = f.pos1, m = f.pos2, _ = f.pos4;
    if (!u || !h)
      return !1;
    n || Bn(t, e), r.datas = {}, r.transform = p, r.prevDist = [1, 1], r.direction = u, r.startOffsetWidth = c, r.startOffsetHeight = v, r.startValue = [1, 1];
    var x = !u[0] && !u[1] || u[0] || !u[1];
    ko(t, e, "scale"), r.isWidth = x;
    function y(w) {
      r.ratio = w && isFinite(w) ? w : 0;
    }
    r.startPositions = ce(t.state);
    function b(w) {
      var O = Od(r.startPositions, w);
      r.fixedDirection = O.fixedDirection, r.fixedPosition = O.fixedPosition, r.fixedOffset = O.fixedOffset;
    }
    r.setFixedDirection = b, y(Ye(d, m) / Ye(m, _)), b([-u[0], -u[1]]);
    var E = function(w) {
      r.minScaleSize = w;
    }, T = function(w) {
      r.maxScaleSize = w;
    };
    E([-1 / 0, -1 / 0]), T([1 / 0, 1 / 0]);
    var M = Bt(t, e, z(z({ direction: u, set: function(w) {
      r.startValue = w;
    }, setRatio: y, setFixedDirection: b, setMinScaleSize: E, setMaxScaleSize: T }, No(t, e)), { dragStart: Ir.dragStart(t, new fi().dragStart([0, 0], e)) })), D = ht(t, "onScaleStart", M);
    return r.startFixedDirection = r.fixedDirection, D !== !1 && (r.isScale = !0, t.state.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    }), r.isScale ? M : !1;
  },
  dragControl: function(t, e) {
    Lo(t, e, "scale");
    var r = e.datas, n = e.parentKeepRatio, a = e.parentFlag, s = e.isPinch, u = e.dragClient, f = e.isRequest, c = e.useSnap, v = e.resolveMatrix, p = r.prevDist, h = r.direction, d = r.startOffsetWidth, m = r.startOffsetHeight, _ = r.isScale, x = r.startValue, y = r.isWidth, b = r.ratio;
    if (!_)
      return !1;
    var E = t.props, T = E.throttleScale, M = E.parentMoveable, D = h;
    !h[0] && !h[1] && (D = [1, 1]);
    var w = b && (n ?? E.keepRatio) || !1, O = t.state, I = [
      x[0],
      x[1]
    ];
    function P() {
      var ot = Zd(D, w, r, e), gt = ot.distWidth, kt = ot.distHeight, yt = d ? (d + gt) / d : 1, Et = m ? (m + kt) / m : 1;
      x[0] || (I[0] = gt / d), x[1] || (I[1] = kt / m);
      var At = (D[0] || w ? yt : 1) * I[0], rt = (D[1] || w ? Et : 1) * I[1];
      return At === 0 && (At = Pr(p[0]) * fo), rt === 0 && (rt = Pr(p[1]) * fo), [At, rt];
    }
    var B = P();
    if (!s && t.props.groupable) {
      var H = O.snapRenderInfo || {}, W = H.direction;
      dr(W) && (W[0] || W[1]) && (O.snapRenderInfo = { direction: h, request: e.isRequest });
    }
    ht(t, "onBeforeScale", Bt(t, e, {
      scale: B,
      setFixedDirection: function(ot) {
        return r.setFixedDirection(ot), B = P(), B;
      },
      startFixedDirection: r.startFixedDirection,
      setScale: function(ot) {
        B = ot;
      }
    }, !0));
    var L = [
      B[0] / I[0],
      B[1] / I[1]
    ], Y = u, X = [0, 0], Q = Pr(L[0] * L[1]), j = !u && !a && s;
    if (j || v ? Y = _f(t, r.targetAllTransform, [0, 0], [0, 0], r) : u || (Y = r.fixedPosition), s || (X = dE(t, L, h, !c && f, r)), w) {
      D[0] && D[1] && X[0] && X[1] && (Math.abs(X[0] * d) > Math.abs(X[1] * m) ? X[1] = 0 : X[0] = 0);
      var V = !X[0] && !X[1];
      if (V && (y ? L[0] = Ot(L[0] * I[0], T) / I[0] : L[1] = Ot(L[1] * I[1], T) / I[1]), D[0] && !D[1] || X[0] && !X[1] || V && y) {
        L[0] += X[0];
        var et = d * L[0] * I[0] / b;
        L[1] = Pr(Q * L[0]) * J(et / m / I[1]);
      } else if (!D[0] && D[1] || !X[0] && X[1] || V && !y) {
        L[1] += X[1];
        var nt = m * L[1] * I[1] * b;
        L[0] = Pr(Q * L[1]) * J(nt / d / I[0]);
      }
    } else
      L[0] += X[0], L[1] += X[1], X[0] || (L[0] = Ot(L[0] * I[0], T) / I[0]), X[1] || (L[1] = Ot(L[1] * I[1], T) / I[1]);
    L[0] === 0 && (L[0] = Pr(p[0]) * fo), L[1] === 0 && (L[1] = Pr(p[1]) * fo), B = _E(L, [I[0], I[1]]);
    var U = [
      d,
      m
    ], lt = [
      d * B[0],
      m * B[1]
    ];
    lt = bp(lt, r.minScaleSize, r.maxScaleSize, w ? b : !1), B = Su(2, function(ot) {
      return U[ot] ? lt[ot] / U[ot] : lt[ot];
    }), L = Su(2, function(ot) {
      return B[ot] / I[ot];
    });
    var vt = Su(2, function(ot) {
      return p[ot] ? L[ot] / p[ot] : L[ot];
    }), ut = "scale(".concat(L.join(", "), ")"), st = "scale(".concat(B.join(", "), ")"), at = Wo(r, st, ut), dt = !x[0] || !x[1], _t = dC(t, dt ? st : ut, r.fixedDirection, Y, r.fixedOffset, r, dt), Tt = j ? _t : bt(_t, r.prevInverseDist || [0, 0]);
    if (r.prevDist = L, r.prevInverseDist = _t, B[0] === p[0] && B[1] === p[1] && Tt.every(function(ot) {
      return !ot;
    }) && !M && !j)
      return !1;
    var Wt = Bt(t, e, z({ offsetWidth: d, offsetHeight: m, direction: h, scale: B, dist: L, delta: vt, isPinch: !!s }, vd(t, at, Tt, s, e)));
    return ht(t, "onScale", Wt), Wt;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    if (!r.isScale)
      return !1;
    r.isScale = !1;
    var n = Jr(t, e, {});
    return ht(t, "onScaleEnd", n), n;
  },
  dragGroupControlCondition: Vv,
  dragGroupControlStart: function(t, e) {
    var r = e.datas, n = this.dragControlStart(t, e);
    if (!n)
      return !1;
    var a = Se(t, "resizable", e);
    r.moveableScale = t.scale;
    var s = Xe(t, this, "dragControlStart", e, function(v, p) {
      return Mo(t, v, r, p);
    }), u = function(v) {
      n.setFixedDirection(v), s.forEach(function(p, h) {
        p.setFixedDirection(v), Mo(t, p.moveable, r, a[h]);
      });
    };
    r.setFixedDirection = u;
    var f = z(z({}, n), { targets: t.props.targets, events: s, setFixedDirection: u }), c = ht(t, "onScaleGroupStart", f);
    return r.isScale = c !== !1, r.isScale ? f : !1;
  },
  dragGroupControl: function(t, e) {
    var r = e.datas;
    if (r.isScale) {
      Uo(t, "onBeforeScale", function(p) {
        ht(t, "onBeforeScaleGroup", Bt(t, e, z(z({}, p), { targets: t.props.targets }), !0));
      });
      var n = this.dragControl(t, e);
      if (n) {
        var a = n.dist, s = r.moveableScale;
        t.scale = [
          a[0] * s[0],
          a[1] * s[1]
        ];
        var u = t.props.keepRatio, f = r.fixedPosition, c = Xe(t, this, "dragControl", e, function(p, h) {
          var d = F(Mr(fa(t.rotation / 180 * Math.PI, 3), [
            h.datas.originalX * a[0],
            h.datas.originalY * a[1],
            1
          ], 3), 2), m = d[0], _ = d[1];
          return z(z({}, h), {
            parentDist: null,
            parentScale: a,
            parentKeepRatio: u,
            // recalculate child fixed position for parent group's dragging.
            dragClient: qt(f, [m, _])
          });
        }), v = z({ targets: t.props.targets, events: c }, n);
        return ht(t, "onScaleGroup", v), v;
      }
    }
  },
  dragGroupControlEnd: function(t, e) {
    var r = e.isDrag, n = e.datas;
    if (n.isScale) {
      this.dragControlEnd(t, e);
      var a = Xe(t, this, "dragControlEnd", e), s = Jr(t, e, {
        targets: t.props.targets,
        events: a
      });
      return ht(t, "onScaleGroupEnd", s), r;
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
    return bo(r, e[n], 1, 2);
  });
}
function Kv(t, e, r) {
  var n = cr(t, e), a = cr(t, r), s = a - n;
  return s >= 0 ? s : s + 2 * Math.PI;
}
function LE(t, e) {
  var r = Kv(t[0], t[1], t[2]), n = Kv(e[0], e[1], e[2]), a = Math.PI;
  return !(r >= a && n <= a || r <= a && n >= a);
}
var WE = {
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
  viewClassName: Rf("warpable"),
  render: function(t, e) {
    var r = t.props, n = r.resizable, a = r.scalable, s = r.warpable, u = r.zoom;
    if (n || a || !s)
      return [];
    var f = t.state, c = f.pos1, v = f.pos2, p = f.pos3, h = f.pos4, d = nn(c, v), m = nn(v, c), _ = nn(c, p), x = nn(p, c), y = nn(p, h), b = nn(h, p), E = nn(v, h), T = nn(h, v);
    return it([
      e.createElement("div", { className: St("line"), key: "middeLine1", style: Xi(d, y, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine2", style: Xi(m, b, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine3", style: Xi(_, E, u) }),
      e.createElement("div", { className: St("line"), key: "middeLine4", style: Xi(x, T, u) })
    ], F(xd(t, "warpable", e)), !1);
  },
  dragControlCondition: function(t, e) {
    if (e.isRequest)
      return !1;
    var r = e.inputEvent.target;
    return _r(r, St("direction")) && _r(r, St("warpable"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas, n = e.inputEvent, a = t.props.target, s = n.target, u = qd(s, r);
    if (!u || !a)
      return !1;
    var f = t.state, c = f.transformOrigin, v = f.is3d, p = f.targetTransform, h = f.targetMatrix, d = f.width, m = f.height, _ = f.left, x = f.top;
    r.datas = {}, r.targetTransform = p, r.warpTargetMatrix = v ? h : Ce(h, 3, 4), r.targetInverseMatrix = $p(Oe(r.warpTargetMatrix, 4), 3, 4), r.direction = u, r.left = _, r.top = x, r.poses = [
      [0, 0],
      [d, 0],
      [0, m],
      [d, m]
    ].map(function(E) {
      return bt(E, c);
    }), r.nextPoses = r.poses.map(function(E) {
      var T = F(E, 2), M = T[0], D = T[1];
      return Mr(r.warpTargetMatrix, [M, D, 0, 1], 4);
    }), r.startValue = nr(4), r.prevMatrix = nr(4), r.absolutePoses = ce(f), r.posIndexes = cd(u), Bn(t, e), ko(t, e, "matrix3d"), f.snapRenderInfo = {
      request: e.isRequest,
      direction: u
    };
    var y = Bt(t, e, z({ set: function(E) {
      r.startValue = E;
    } }, No(t, e))), b = ht(t, "onWarpStart", y);
    return b !== !1 && (r.isWarp = !0), r.isWarp;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isRequest, a = e.distX, s = e.distY, u = r.targetInverseMatrix, f = r.prevMatrix, c = r.isWarp, v = r.startValue, p = r.poses, h = r.posIndexes, d = r.absolutePoses;
    if (!c)
      return !1;
    if (Lo(t, e, "matrix3d"), _i(t, "warpable")) {
      var m = h.map(function(P) {
        return d[P];
      });
      m.length > 1 && m.push([
        (m[0][0] + m[1][0]) / 2,
        (m[0][1] + m[1][1]) / 2
      ]);
      var _ = Xo(t, n, {
        horizontal: m.map(function(P) {
          return P[1] + s;
        }),
        vertical: m.map(function(P) {
          return P[0] + a;
        })
      }), x = _.horizontal, y = _.vertical;
      s -= x.offset, a -= y.offset;
    }
    var b = Ie({ datas: r, distX: a, distY: s }, !0), E = r.nextPoses.slice();
    if (h.forEach(function(P) {
      E[P] = qt(E[P], b);
    }), !iC.every(function(P) {
      return LE(P.map(function(B) {
        return p[B];
      }), P.map(function(B) {
        return E[B];
      }));
    }))
      return !1;
    var T = vf(p[0], p[2], p[1], p[3], E[0], E[2], E[1], E[3]);
    if (!T.length)
      return !1;
    var M = Jt(u, T, 4), D = fd(r, M, !0), w = Jt(Oe(f, 4), D, 4);
    r.prevMatrix = D;
    var O = Jt(v, D, 4), I = Wo(r, "matrix3d(".concat(O.join(", "), ")"), "matrix3d(".concat(D.join(", "), ")"));
    return mf(e, I), ht(t, "onWarp", Bt(t, e, z({ delta: w, matrix: O, dist: D, multiply: Jt, transform: I }, Ar({
      transform: I
    }, e)))), !0;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas, n = e.isDrag;
    return r.isWarp ? (r.isWarp = !1, ht(t, "onWarpEnd", Jr(t, e, {})), n) : !1;
  }
}, NE = /* @__PURE__ */ St("area-pieces"), go = /* @__PURE__ */ St("area-piece"), jd = /* @__PURE__ */ St("avoid"), kE = St("view-dragging");
function bu(t) {
  var e = t.areaElement;
  if (e) {
    var r = t.state, n = r.width, a = r.height;
    Dp(e, jd), e.style.cssText += "left: 0px; top: 0px; width: ".concat(n, "px; height: ").concat(a, "px");
  }
}
function Zv(t) {
  return t.createElement(
    "div",
    { key: "area_pieces", className: NE },
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go }),
    t.createElement("div", { className: go })
  );
}
var th = {
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
        Zv(e)
      ];
    if (!n || !a)
      return [];
    var d = vf([0, 0], [c, 0], [0, v], [c, v], p[0], p[1], p[2], p[3]), m = d.length ? qo(d, !0) : "none";
    return [
      e.createElement("div", { key: "area", ref: He(t, "areaElement"), className: h, style: {
        top: "0px",
        left: "0px",
        width: "".concat(c, "px"),
        height: "".concat(v, "px"),
        transformOrigin: "0 0",
        transform: m
      } }),
      Zv(e)
    ];
  },
  dragStart: function(t, e) {
    var r = e.datas, n = e.clientX, a = e.clientY, s = e.inputEvent;
    if (!s)
      return !1;
    r.isDragArea = !1;
    var u = t.areaElement, f = t.state, c = f.moveableClientRect, v = f.renderPoses, p = f.rootMatrix, h = f.is3d, d = c.left, m = c.top, _ = fe(v), x = _.left, y = _.top, b = _.width, E = _.height, T = h ? 4 : 3, M = F(vi(p, [n - d, a - m], T), 2), D = M[0], w = M[1];
    D -= x, w -= y;
    var O = [
      { left: x, top: y, width: b, height: w - 10 },
      { left: x, top: y, width: D - 10, height: E },
      { left: x, top: y + w + 10, width: b, height: E - w - 10 },
      { left: x + D + 10, top: y, width: b - D - 10, height: E }
    ], I = [].slice.call(u.nextElementSibling.children);
    O.forEach(function(P, B) {
      I[B].style.cssText = "left: ".concat(P.left, "px;top: ").concat(P.top, "px; width: ").concat(P.width, "px; height: ").concat(P.height, "px;");
    }), wp(u, jd), f.disableNativeEvent = !0;
  },
  drag: function(t, e) {
    var r = e.datas, n = e.inputEvent;
    if (this.enableNativeEvent(t), !n)
      return !1;
    r.isDragArea || (r.isDragArea = !0, bu(t));
  },
  dragEnd: function(t, e) {
    this.enableNativeEvent(t);
    var r = e.inputEvent, n = e.datas;
    if (!r)
      return !1;
    n.isDragArea || bu(t);
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
    bu(t), t.state.disableNativeEvent = !1;
  },
  enableNativeEvent: function(t) {
    var e = t.state;
    e.disableNativeEvent && Sp(function() {
      e.disableNativeEvent = !1;
    });
  }
}, HE = ca("origin", {
  props: ["origin", "svgOrigin"],
  render: function(t, e) {
    var r = t.props, n = r.zoom, a = r.svgOrigin, s = r.groupable, u = t.getState(), f = u.beforeOrigin, c = u.rotation, v = u.svg, p = u.allMatrix, h = u.is3d, d = u.left, m = u.top, _ = u.offsetWidth, x = u.offsetHeight, y;
    if (!s && v && a) {
      var b = F(If(a, _, x), 2), E = b[0], T = b[1], M = h ? 4 : 3, D = or(p, [E, T], M);
      y = Io(c, n, bt(D, [d, m]));
    } else
      y = Io(c, n, f);
    return [
      e.createElement("div", { className: St("control", "origin"), style: y, key: "beforeOrigin" })
    ];
  }
});
function YE(t) {
  var e = t.scrollContainer;
  return [
    e.scrollLeft,
    e.scrollTop
  ];
}
var XE = {
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
    var r = t.props, n = r.scrollContainer, a = n === void 0 ? t.getContainer() : n, s = r.scrollOptions, u = new Cb(), f = Te(a, !0);
    e.datas.dragScroll = u, t.state.dragScroll = u;
    var c = e.isControl ? "controlGesto" : "targetGesto", v = e.targets;
    u.on("scroll", function(p) {
      var h = p.container, d = p.direction, m = Bt(t, e, {
        scrollContainer: h,
        direction: d
      }), _ = v ? "onScrollGroup" : "onScroll";
      v && (m.targets = v), ht(t, _, m);
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
      var n = t.props, a = n.scrollContainer, s = a === void 0 ? t.getContainer() : a, u = n.scrollThreshold, f = u === void 0 ? 0 : u, c = n.scrollThrottleTime, v = c === void 0 ? 0 : c, p = n.getScrollPosition, h = p === void 0 ? YE : p, d = n.scrollOptions;
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
}, rh = {
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
}, qE = ca("padding", {
  props: ["padding"],
  render: function(t, e) {
    var r = t.props;
    if (r.dragArea)
      return [];
    var n = Qd(r.padding || {}), a = n.left, s = n.top, u = n.right, f = n.bottom, c = t.getState(), v = c.renderPoses, p = c.pos1, h = c.pos2, d = c.pos3, m = c.pos4, _ = [p, h, d, m], x = [];
    return a > 0 && x.push([0, 2]), s > 0 && x.push([0, 1]), u > 0 && x.push([1, 3]), f > 0 && x.push([2, 3]), x.map(function(y, b) {
      var E = F(y, 2), T = E[0], M = E[1], D = _[T], w = _[M], O = v[T], I = v[M], P = vf([0, 0], [100, 0], [0, 100], [100, 100], D, w, O, I);
      if (P.length)
        return e.createElement("div", { key: "padding".concat(b), className: St("padding"), style: {
          transform: qo(P, !0)
        } });
    });
  }
}), Jv = ["nw", "ne", "se", "sw"];
function mo(t, e) {
  var r = t[0] + t[1], n = r > e ? e / r : 1;
  return t[0] *= n, t[1] = e - t[1] * n, t;
}
var UE = [1, 2, 5, 6], $E = [0, 3, 4, 7], Mn = [1, -1, -1, 1], Rn = [1, 1, -1, -1];
function Pf(t, e, r, n, a, s, u, f) {
  a === void 0 && (a = 0), s === void 0 && (s = 0), u === void 0 && (u = r), f === void 0 && (f = n);
  var c = [], v = !1, p = t.filter(function(d) {
    return !d.virtual;
  }), h = p.map(function(d) {
    var m = d.horizontal, _ = d.vertical, x = d.pos;
    if (_ && !v && (v = !0, c.push("/")), v) {
      var y = Math.max(0, _ === 1 ? x[1] - s : f - x[1]);
      return c.push(xe(y, n, e)), y;
    } else {
      var y = Math.max(0, m === 1 ? x[0] - a : u - x[0]);
      return c.push(xe(y, r, e)), y;
    }
  });
  return {
    radiusPoses: p,
    styles: c,
    raws: h
  };
}
function eh(t) {
  for (var e = [0, 0], r = [0, 0], n = t.length, a = 0; a < n; ++a) {
    var s = t[a];
    s.sub && (s.horizontal && (e[1] === 0 && (e[0] = a), e[1] = a - e[0] + 1, r[0] = a + 1), s.vertical && (r[1] === 0 && (r[0] = a), r[1] = a - r[0] + 1));
  }
  return {
    horizontalRange: e,
    verticalRange: r
  };
}
function nh(t, e, r, n, a, s, u) {
  var f, c, v, p;
  s === void 0 && (s = [0, 0]), u === void 0 && (u = !1);
  var h = t.indexOf("/"), d = (h > -1 ? t.slice(0, h) : t).length, m = t.slice(0, d), _ = t.slice(d + 1), x = m.length, y = _.length, b = y > 0, E = F(m, 4), T = E[0], M = T === void 0 ? "0px" : T, D = E[1], w = D === void 0 ? M : D, O = E[2], I = O === void 0 ? M : O, P = E[3], B = P === void 0 ? w : P, H = F(_, 4), W = H[0], L = W === void 0 ? M : W, Y = H[1], X = Y === void 0 ? b ? L : w : Y, Q = H[2], j = Q === void 0 ? b ? L : I : Q, V = H[3], et = V === void 0 ? b ? X : B : V, nt = [M, w, I, B].map(function(at) {
    return Zt(at, e);
  }), U = [L, X, j, et].map(function(at) {
    return Zt(at, r);
  }), lt = nt.slice(), vt = U.slice();
  f = F(mo([lt[0], lt[1]], e), 2), lt[0] = f[0], lt[1] = f[1], c = F(mo([lt[3], lt[2]], e), 2), lt[3] = c[0], lt[2] = c[1], v = F(mo([vt[0], vt[3]], r), 2), vt[0] = v[0], vt[3] = v[1], p = F(mo([vt[1], vt[2]], r), 2), vt[1] = p[0], vt[2] = p[1];
  var ut = u ? lt : lt.slice(0, Math.max(s[0], x)), st = u ? vt : vt.slice(0, Math.max(s[1], y));
  return it(it([], F(ut.map(function(at, dt) {
    var _t = Jv[dt];
    return {
      virtual: dt >= x,
      horizontal: Mn[dt],
      vertical: 0,
      pos: [n + at, a + (Rn[dt] === -1 ? r : 0)],
      sub: !0,
      raw: nt[dt],
      direction: _t
    };
  })), !1), F(st.map(function(at, dt) {
    var _t = Jv[dt];
    return {
      virtual: dt >= y,
      horizontal: 0,
      vertical: Rn[dt],
      pos: [n + (Mn[dt] === -1 ? e : 0), a + at],
      sub: !0,
      raw: U[dt],
      direction: _t
    };
  })), !1);
}
function VE(t, e, r, n, a) {
  a === void 0 && (a = e.length);
  var s = eh(t.slice(n)), u = s.horizontalRange, f = s.verticalRange, c = r - n, v = 0;
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
function KE(t, e, r, n, a, s, u, f, c, v, p) {
  v === void 0 && (v = 0), p === void 0 && (p = 0);
  var h = eh(t.slice(r)), d = h.horizontalRange, m = h.verticalRange;
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
      var T = [
        v + E,
        p
      ];
      t.push({
        horizontal: Mn[0],
        vertical: 0,
        pos: T
      }), e.push(T);
    }
    for (var M = m[0], x = m[1]; x <= a; ++x) {
      var b = Mn[x] === 1 ? v : f, y = 0;
      if (a === x ? y = u : x === 0 ? y = p + E : Rn[x] === 1 ? y = e[r + M][1] : Rn[x] === -1 && (y = c - (e[r + M][1] - p)), t.push({
        horizontal: 0,
        vertical: Rn[x],
        pos: [b, y]
      }), e.push([b, y]), x === 0)
        break;
    }
  }
}
function ZE(t, e) {
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
var JE = [
  [0, -1, "n"],
  [1, 0, "e"]
], QE = [
  [-1, -1, "nw"],
  [0, -1, "n"],
  [1, -1, "ne"],
  [1, 0, "e"],
  [1, 1, "se"],
  [0, 1, "s"],
  [-1, 1, "sw"],
  [-1, 0, "w"]
];
function Af(t, e, r) {
  var n = t.props.clipRelative, a = t.state, s = a.width, u = a.height, f = e, c = f.type, v = f.poses, p = c === "rect", h = c === "circle";
  if (c === "polygon")
    return r.map(function(w) {
      return "".concat(xe(w[0], s, n), " ").concat(xe(w[1], u, n));
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
    var y = [d, s - m, u - x, _].map(function(w, O) {
      return xe(w, O % 2 ? s : u, n);
    });
    if (r.length > 8) {
      var b = F(bt(r[4], r[0]), 2), E = b[0], T = b[1];
      y.push.apply(y, it(["round"], F(Pf(v.slice(8).map(function(w, O) {
        return z(z({}, w), { pos: r[O] });
      }), n, E, T, _, d, m, x).styles), !1));
    }
    return y;
  } else if (h || c === "ellipse") {
    var M = r[0], D = xe(J(r[1][1] - M[1]), h ? Math.sqrt((s * s + u * u) / 2) : u, n), y = h ? [D] : [xe(J(r[2][0] - M[0]), s, n), D];
    return y.push("at", xe(M[0], s, n), xe(M[1], u, n)), y;
  }
}
function Ao(t, e, r, n) {
  var a = [n, (n + e) / 2, e], s = [t, (t + r) / 2, r];
  return QE.map(function(u) {
    var f = F(u, 3), c = f[0], v = f[1], p = f[2], h = a[c + 1], d = s[v + 1];
    return {
      vertical: J(v),
      horizontal: J(c),
      direction: p,
      pos: [h, d]
    };
  });
}
function ih(t) {
  var e = [1 / 0, -1 / 0], r = [1 / 0, -1 / 0];
  return t.forEach(function(n) {
    var a = n.pos;
    e[0] = Math.min(e[0], a[0]), e[1] = Math.max(e[1], a[0]), r[0] = Math.min(r[0], a[1]), r[1] = Math.max(r[1], a[1]);
  }), [
    J(e[1] - e[0]),
    J(r[1] - r[0])
  ];
}
function Qv(t, e, r, n, a) {
  var s, u, f, c, v, p, h, d, m;
  if (t) {
    var _ = a;
    if (!_) {
      var x = Xr(t), y = x("clipPath");
      _ = y !== "none" ? y : x("clip");
    }
    if (!((!_ || _ === "none" || _ === "auto") && (_ = n, !_))) {
      var b = yp(_), E = b.prefix, T = E === void 0 ? _ : E, M = b.value, D = M === void 0 ? "" : M, w = T === "circle", O = " ";
      if (T === "polygon") {
        var I = Tn(D || "0% 0%, 100% 0%, 100% 100%, 0% 100%");
        O = ",";
        var P = I.map(function(zt) {
          var Ct = F(zt.split(" "), 2), Yt = Ct[0], Qt = Ct[1];
          return {
            vertical: 1,
            horizontal: 1,
            pos: [
              Zt(Yt, e),
              Zt(Qt, r)
            ]
          };
        }), B = Pn(P.map(function(zt) {
          return zt.pos;
        }));
        return {
          type: T,
          clipText: _,
          poses: P,
          splitter: O,
          left: B.minX,
          right: B.maxX,
          top: B.minY,
          bottom: B.maxY
        };
      } else if (w || T === "ellipse") {
        var H = "", W = "", L = 0, Y = 0, I = ln(D);
        if (w) {
          var X = "";
          s = F(I, 4), u = s[0], X = u === void 0 ? "50%" : u, f = s[2], H = f === void 0 ? "50%" : f, c = s[3], W = c === void 0 ? "50%" : c, L = Zt(X, Math.sqrt((e * e + r * r) / 2)), Y = L;
        } else {
          var Q = "", j = "";
          v = F(I, 5), p = v[0], Q = p === void 0 ? "50%" : p, h = v[1], j = h === void 0 ? "50%" : h, d = v[3], H = d === void 0 ? "50%" : d, m = v[4], W = m === void 0 ? "50%" : m, L = Zt(Q, e), Y = Zt(j, r);
        }
        var V = [
          Zt(H, e),
          Zt(W, r)
        ], P = it([
          {
            vertical: 1,
            horizontal: 1,
            pos: V,
            direction: "nesw"
          }
        ], F(JE.slice(0, w ? 1 : 2).map(function(Yt) {
          return {
            vertical: J(Yt[1]),
            horizontal: Yt[0],
            direction: Yt[2],
            sub: !0,
            pos: [
              V[0] + Yt[0] * L,
              V[1] + Yt[1] * Y
            ]
          };
        })), !1);
        return {
          type: T,
          clipText: _,
          radiusX: L,
          radiusY: Y,
          left: V[0] - L,
          top: V[1] - Y,
          right: V[0] + L,
          bottom: V[1] + Y,
          poses: P,
          splitter: O
        };
      } else if (T === "inset") {
        var I = ln(D || "0 0 0 0"), et = I.indexOf("round"), nt = (et > -1 ? I.slice(0, et) : I).length, U = I.slice(nt + 1), lt = F(I.slice(0, nt), 4), vt = lt[0], ut = lt[1], st = ut === void 0 ? vt : ut, at = lt[2], dt = at === void 0 ? vt : at, _t = lt[3], Tt = _t === void 0 ? st : _t, Wt = F([vt, dt].map(function(Yt) {
          return Zt(Yt, r);
        }), 2), ot = Wt[0], gt = Wt[1], kt = F([Tt, st].map(function(Yt) {
          return Zt(Yt, e);
        }), 2), yt = kt[0], Et = kt[1], At = e - Et, rt = r - gt, ft = nh(U, At - yt, rt - ot, yt, ot), P = it(it([], F(Ao(ot, At, rt, yt)), !1), F(ft), !1);
        return {
          type: "inset",
          clipText: _,
          poses: P,
          top: ot,
          left: yt,
          right: At,
          bottom: rt,
          radius: U,
          splitter: O
        };
      } else if (T === "rect") {
        var I = Tn(D || "0px, ".concat(e, "px, ").concat(r, "px, 0px"));
        O = ",";
        var pt = F(I.map(function(Ee) {
          var zr = ia(Ee).value;
          return zr;
        }), 4), wt = pt[0], Et = pt[1], gt = pt[2], yt = pt[3], P = Ao(wt, Et, gt, yt);
        return {
          type: "rect",
          clipText: _,
          poses: P,
          top: wt,
          right: Et,
          bottom: gt,
          left: yt,
          values: I,
          splitter: O
        };
      }
    }
  }
}
function jE(t, e, r, n, a) {
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
    var _ = F(ih(t), 2), x = _[0], y = _[1], b = x && y ? x / y : 0;
    if (b && a) {
      var E = (e + 4) % 8, T = t[E].pos, M = [0, 0];
      u.indexOf("w") > -1 ? M[0] = -1 : u.indexOf("e") > -1 && (M[0] = 1), u.indexOf("n") > -1 ? M[1] = -1 : u.indexOf("s") > -1 && (M[1] = 1);
      var D = Kd([x, y], r, b, M, !0), w = x + D[0], O = y + D[1], I = T[1], P = T[1], B = T[0], H = T[0];
      M[0] === -1 ? B = H - w : M[0] === 1 ? H = B + w : (B = B - w / 2, H = H + w / 2), M[1] === -1 ? I = P - O : (M[1] === 1 || (I = P - O / 2), P = I + O);
      var W = Ao(I, H, P, B);
      t.forEach(function(L, Y) {
        c[Y][0] = W[Y].pos[0] - L.pos[0], c[Y][1] = W[Y].pos[1] - L.pos[1];
      });
    } else
      t.forEach(function(L, Y) {
        var X = L.direction;
        X && (X.indexOf(d) > -1 && (c[Y][0] = r[0]), X.indexOf(m) > -1 && (c[Y][1] = r[1]));
      }), d && (c[1][0] = r[0] / 2, c[5][0] = r[0] / 2), m && (c[3][1] = r[1] / 2, c[7][1] = r[1] / 2);
  } else u && !f ? v.forEach(function(L) {
    var Y = L === "n" || L === "s";
    t.forEach(function(X, Q) {
      var j = X.direction, V = X.horizontal, et = X.vertical;
      !j || j.indexOf(L) === -1 || (c[Q] = [
        Y || !V ? 0 : r[0],
        !Y || !et ? 0 : r[1]
      ]);
    });
  }) : c[e] = r;
  return c;
}
function tw(t, e) {
  var r = F(ud(t, e), 2), n = r[0], a = r[1], s = e.datas, u = s.clipPath, f = s.clipIndex, c = u, v = c.type, p = c.poses, h = c.splitter, d = p.map(function(E) {
    return E.pos;
  });
  if (v === "polygon")
    d.splice(f, 0, [n, a]);
  else if (v === "inset") {
    var m = UE.indexOf(f), _ = $E.indexOf(f), x = p.length;
    if (KE(p, d, 8, m, _, n, a, d[4][0], d[4][1], d[0][0], d[0][1]), x === p.length)
      return;
  } else
    return;
  var y = Af(t, u, d), b = "".concat(v, "(").concat(y.join(h), ")");
  ht(t, "onClip", Bt(t, e, z({ clipEventType: "added", clipType: v, poses: d, clipStyles: y, clipStyle: b, distX: 0, distY: 0 }, Ar({
    clipPath: b
  }, e))));
}
function rw(t, e) {
  var r = e.datas, n = r.clipPath, a = r.clipIndex, s = n, u = s.type, f = s.poses, c = s.splitter, v = f.map(function(m) {
    return m.pos;
  }), p = v.length;
  if (u === "polygon")
    f.splice(a, 1), v.splice(a, 1);
  else if (u === "inset") {
    if (a < 8 || (VE(f, v, a, 8, p), p === f.length))
      return;
  } else
    return;
  var h = Af(t, n, v), d = "".concat(u, "(").concat(h.join(c), ")");
  ht(t, "onClip", Bt(t, e, z({ clipEventType: "removed", clipType: u, poses: v, clipStyles: h, clipStyle: d, distX: 0, distY: 0 }, Ar({
    clipPath: d
  }, e))));
}
var ew = {
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
    var r = t.props, n = r.customClipPath, a = r.defaultClipPath, s = r.clipArea, u = r.zoom, f = r.groupable, c = t.getState(), v = c.target, p = c.width, h = c.height, d = c.allMatrix, m = c.is3d, _ = c.left, x = c.top, y = c.pos1, b = c.pos2, E = c.pos3, T = c.pos4, M = c.clipPathState, D = c.snapBoundInfos, w = c.rotation;
    if (!v || f)
      return [];
    var O = Qv(v, p, h, a || "inset", M || n);
    if (!O)
      return [];
    var I = m ? 4 : 3, P = O.type, B = O.poses, H = B.map(function(Et) {
      var At = or(d, Et.pos, I);
      return [
        At[0] - _,
        At[1] - x
      ];
    }), W = [], L = [], Y = P === "rect", X = P === "inset", Q = P === "polygon";
    if (Y || X || Q) {
      var j = X ? H.slice(0, 8) : H;
      L = j.map(function(Et, At) {
        var rt = At === 0 ? j[j.length - 1] : j[At - 1], ft = cr(rt, Et), pt = Nd(rt, Et);
        return e.createElement("div", { key: "clipLine".concat(At), className: St("line", "clip-line", "snap-control"), "data-clip-index": At, style: {
          width: "".concat(pt, "px"),
          transform: "translate(".concat(rt[0], "px, ").concat(rt[1], "px) rotate(").concat(ft, "rad) scaleY(").concat(u, ")")
        } });
      });
    }
    if (W = H.map(function(Et, At) {
      return e.createElement("div", { key: "clipControl".concat(At), className: St("control", "clip-control", "snap-control"), "data-clip-index": At, style: {
        transform: "translate(".concat(Et[0], "px, ").concat(Et[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    }), X && W.push.apply(W, it([], F(H.slice(8).map(function(Et, At) {
      return e.createElement("div", { key: "clipRadiusControl".concat(At), className: St("control", "clip-control", "clip-radius", "snap-control"), "data-clip-index": 8 + At, style: {
        transform: "translate(".concat(Et[0], "px, ").concat(Et[1], "px) rotate(").concat(w, "rad) scale(").concat(u, ")")
      } });
    })), !1)), P === "circle" || P === "ellipse") {
      var V = O.left, et = O.top, nt = O.radiusX, U = O.radiusY, lt = F(bt(or(d, [V, et], I), or(d, [0, 0], I)), 2), vt = lt[0], ut = lt[1], st = "none";
      if (!s) {
        for (var at = Math.max(10, nt / 5, U / 5), dt = [], _t = 0; _t <= at; ++_t) {
          var Tt = Math.PI * 2 / at * _t;
          dt.push([
            nt + (nt - u) * Math.cos(Tt),
            U + (U - u) * Math.sin(Tt)
          ]);
        }
        dt.push([nt, -2]), dt.push([-2, -2]), dt.push([-2, U * 2 + 2]), dt.push([nt * 2 + 2, U * 2 + 2]), dt.push([nt * 2 + 2, -2]), dt.push([nt, -2]), st = "polygon(".concat(dt.map(function(Et) {
          return "".concat(Et[0], "px ").concat(Et[1], "px");
        }).join(", "), ")");
      }
      W.push(e.createElement("div", { key: "clipEllipse", className: St("clip-ellipse", "snap-control"), style: {
        width: "".concat(nt * 2, "px"),
        height: "".concat(U * 2, "px"),
        clipPath: st,
        transform: "translate(".concat(-_ + vt, "px, ").concat(-x + ut, "px) ").concat(qo(d))
      } }));
    }
    if (s) {
      var Wt = fe(it([y, b, E, T], F(H), !1)), ot = Wt.width, gt = Wt.height, kt = Wt.left, yt = Wt.top;
      if (Q || Y || X) {
        var dt = X ? H.slice(0, 8) : H;
        W.push(e.createElement("div", { key: "clipArea", className: St("clip-area", "snap-control"), style: {
          width: "".concat(ot, "px"),
          height: "".concat(gt, "px"),
          transform: "translate(".concat(kt, "px, ").concat(yt, "px)"),
          clipPath: "polygon(".concat(dt.map(function(At) {
            return "".concat(At[0] - kt, "px ").concat(At[1] - yt, "px");
          }).join(", "), ")")
        } }));
      }
    }
    return D && ["vertical", "horizontal"].forEach(function(Et) {
      var At = D[Et], rt = Et === "horizontal";
      At.isSnap && L.push.apply(L, it([], F(At.snap.posInfos.map(function(ft, pt) {
        var wt = ft.pos, zt = bt(or(d, rt ? [0, wt] : [wt, 0], I), [_, x]), Ct = bt(or(d, rt ? [p, wt] : [wt, h], I), [_, x]);
        return ta(e, "", zt, Ct, u, "clip".concat(Et, "snap").concat(pt), "guideline");
      })), !1)), At.isBound && L.push.apply(L, it([], F(At.bounds.map(function(ft, pt) {
        var wt = ft.pos, zt = bt(or(d, rt ? [0, wt] : [wt, 0], I), [_, x]), Ct = bt(or(d, rt ? [p, wt] : [wt, h], I), [_, x]);
        return ta(e, "", zt, Ct, u, "clip".concat(Et, "bounds").concat(pt), "guideline", "bounds", "bold");
      })), !1));
    }), it(it([], F(W), !1), F(L), !1);
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
    var r = t.state, n = t.props, a = n.defaultClipPath, s = n.customClipPath, u = r.target, f = r.width, c = r.height, v = e.inputEvent ? e.inputEvent.target : null, p = v && v.getAttribute("class") || "", h = e.datas, d = Qv(u, f, c, a || "inset", s);
    if (!d)
      return !1;
    var m = d.clipText, _ = d.type, x = d.poses, y = ht(t, "onClipStart", Bt(t, e, {
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
    var _ = An(t.props, "clippable"), x = _.keepRatio, y = 0, b = 0, E = u.draggable, T = Ie(e);
    f && E ? (r = F(E.prevBeforeDist, 2), y = r[0], b = r[1]) : (n = F(T, 2), y = n[0], b = n[1]);
    var M = [y, b], D = t.state, w = D.width, O = D.height, I = !h && !v && !p, P = m.type, B = m.poses, H = m.splitter, W = B.map(function(Kt) {
      return Kt.pos;
    });
    I && (y = -y, b = -b);
    var L = !v || B[d].direction === "nesw", Y = P === "inset" || P === "rect", X = B.map(function() {
      return [0, 0];
    });
    if (v && !L) {
      var Q = B[d], j = Q.horizontal, V = Q.vertical, et = [
        y * J(j),
        b * J(V)
      ];
      X = jE(B, d, et, Y, x);
    } else L && (X = W.map(function() {
      return [y, b];
    }));
    var nt = W.map(function(Kt, yr) {
      return qt(Kt, X[yr]);
    }), U = it([], F(nt), !1);
    D.snapBoundInfos = null;
    var lt = m.type === "circle", vt = m.type === "ellipse";
    if (lt || vt) {
      var ut = fe(nt), st = J(ut.bottom - ut.top), at = J(vt ? ut.right - ut.left : st), dt = nt[0][1] + st, _t = nt[0][0] - at, Tt = nt[0][0] + at;
      lt && (U.push([Tt, ut.bottom]), X.push([1, 0])), U.push([ut.left, dt]), X.push([0, 1]), U.push([_t, ut.bottom]), X.push([1, 0]);
    }
    var Wt = Bd((_.clipHorizontalGuidelines || []).map(function(Kt) {
      return Zt("".concat(Kt), O);
    }), (_.clipVerticalGuidelines || []).map(function(Kt) {
      return Zt("".concat(Kt), w);
    }), w, O), ot = [], gt = [];
    if (lt || vt)
      ot = [U[4][0], U[2][0]], gt = [U[1][1], U[3][1]];
    else if (Y) {
      var kt = [U[0], U[2], U[4], U[6]], yt = [X[0], X[2], X[4], X[6]];
      ot = kt.filter(function(Kt, yr) {
        return yt[yr][0];
      }).map(function(Kt) {
        return Kt[0];
      }), gt = kt.filter(function(Kt, yr) {
        return yt[yr][1];
      }).map(function(Kt) {
        return Kt[1];
      });
    } else
      ot = U.filter(function(Kt, yr) {
        return X[yr][0];
      }).map(function(Kt) {
        return Kt[0];
      }), gt = U.filter(function(Kt, yr) {
        return X[yr][1];
      }).map(function(Kt) {
        return Kt[1];
      });
    var Et = [0, 0], At = Gv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: O }, ot, gt, 5, 5), rt = At.horizontal, ft = At.vertical, pt = rt.offset, wt = ft.offset;
    if (rt.isBound && (Et[1] += pt), ft.isBound && (Et[0] += wt), (vt || lt) && X[0][0] === 0 && X[0][1] === 0) {
      var ut = fe(nt), zt = ut.bottom - ut.top, Ct = vt ? ut.right - ut.left : zt, Yt = ft.isBound ? J(wt) : ft.snapIndex === 0 ? -wt : wt, Qt = rt.isBound ? J(pt) : rt.snapIndex === 0 ? -pt : pt;
      Ct -= Yt, zt -= Qt, lt && (zt = Dd(ft, rt) > 0 ? zt : Ct, Ct = zt);
      var jt = U[0];
      U[1][1] = jt[1] - zt, U[2][0] = jt[0] + Ct, U[3][1] = jt[1] + zt, U[4][0] = jt[0] - Ct;
    } else if (Y && x && v) {
      var Ee = F(ih(B), 2), zr = Ee[0], Pe = Ee[1], Gn = zr && Pe ? zr / Pe : 0, xi = B[d], $e = xi.direction || "", dn = U[1][1], dt = U[5][1], _t = U[7][0], Tt = U[3][0];
      J(pt) <= J(wt) ? pt = Pr(pt) * J(wt) / Gn : wt = Pr(wt) * J(pt) * Gn, $e.indexOf("w") > -1 ? _t -= wt : $e.indexOf("e") > -1 ? Tt -= wt : (_t += wt / 2, Tt -= wt / 2), $e.indexOf("n") > -1 ? dn -= pt : $e.indexOf("s") > -1 ? dt -= pt : (dn += pt / 2, dt -= pt / 2);
      var yi = Ao(dn, Tt, dt, _t);
      U.forEach(function(da, Vo) {
        var wi;
        wi = F(yi[Vo].pos, 2), da[0] = wi[0], da[1] = wi[1];
      });
    } else
      U.forEach(function(Kt, yr) {
        var Ei = X[yr];
        Ei[0] && (Kt[0] -= wt), Ei[1] && (Kt[1] -= pt);
      });
    var Fn = Af(t, m, nt), hn = "".concat(P, "(").concat(Fn.join(H), ")");
    if (D.clipPathState = hn, lt || vt)
      ot = [U[4][0], U[2][0]], gt = [U[1][1], U[3][1]];
    else if (Y) {
      var kt = [U[0], U[2], U[4], U[6]];
      ot = kt.map(function(yr) {
        return yr[0];
      }), gt = kt.map(function(yr) {
        return yr[1];
      });
    } else
      ot = U.map(function(Kt) {
        return Kt[0];
      }), gt = U.map(function(Kt) {
        return Kt[1];
      });
    if (D.snapBoundInfos = Gv(Wt, _.clipTargetBounds && { left: 0, top: 0, right: w, bottom: O }, ot, gt, 1, 1), E) {
      var Si = D.is3d, bi = D.allMatrix, $o = Si ? 4 : 3, Ci = Et;
      f && (Ci = [
        M[0] + Et[0] - T[0],
        M[1] + Et[1] - T[1]
      ]), E.deltaOffset = Jt(bi, [Ci[0], Ci[1], 0, 0], $o);
    }
    return ht(t, "onClip", Bt(t, e, z({ clipEventType: "changed", clipType: P, poses: nt, clipStyle: hn, clipStyles: Fn, distX: y, distY: b }, Ar((a = {}, a[P === "rect" ? "clip" : "clipPath"] = hn, a), e)))), !0;
  },
  dragControlEnd: function(t, e) {
    this.unset(t);
    var r = e.isDrag, n = e.datas, a = e.isDouble, s = n.isLine, u = n.isClipStart, f = n.isControl;
    return u ? (ht(t, "onClipEnd", Jr(t, e, {})), a && (f ? rw(t, e) : s && tw(t, e)), a || r) : !1;
  },
  unset: function(t) {
    t.state.clipPathState = "", t.state.snapBoundInfos = null;
  }
}, nw = {
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
    return e.isRequest ? e.requestAble === "originDraggable" : _r(e.inputEvent.target, St("origin"));
  },
  dragControlStart: function(t, e) {
    var r = e.datas;
    Bn(t, e);
    var n = Bt(t, e, {
      dragStart: Ir.dragStart(t, new fi().dragStart([0, 0], e))
    }), a = ht(t, "onDragOriginStart", n);
    return r.startOrigin = t.state.transformOrigin, r.startTargetOrigin = t.state.targetOrigin, r.prevOrigin = [0, 0], r.isDragOrigin = !0, a === !1 ? (r.isDragOrigin = !1, !1) : n;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = e.isPinch, a = e.isRequest;
    if (!r.isDragOrigin)
      return !1;
    var s = F(Ie(e), 2), u = s[0], f = s[1], c = t.state, v = c.width, p = c.height, h = c.offsetMatrix, d = c.targetMatrix, m = c.is3d, _ = t.props.originRelative, x = _ === void 0 ? !0 : _, y = m ? 4 : 3, b = [u, f];
    if (a) {
      var E = e.distOrigin;
      (E[0] || E[1]) && (b = E);
    }
    var T = qt(r.startOrigin, b), M = qt(r.startTargetOrigin, b), D = bt(b, r.prevOrigin), w = pa(h, d, T, y), O = t.getRect(), I = fe(zn(w, v, p, y)), P = [
      O.left - I.left,
      O.top - I.top
    ];
    r.prevOrigin = b;
    var B = [
      xe(M[0], v, x),
      xe(M[1], p, x)
    ].join(" "), H = Ir.drag(t, va(e, t.state, P, !!n)), W = Bt(t, e, z(z({ width: v, height: p, origin: T, dist: b, delta: D, transformOrigin: B, drag: H }, Ar({
      transformOrigin: B,
      transform: H.transform
    }, e)), { afterTransform: H.transform }));
    return ht(t, "onDragOrigin", W), W;
  },
  dragControlEnd: function(t, e) {
    var r = e.datas;
    return r.isDragOrigin ? (ht(t, "onDragOriginEnd", Jr(t, e, {})), !0) : !1;
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
function iw(t, e, r, n) {
  var a = t.filter(function(c) {
    var v = c.virtual, p = c.horizontal;
    return p && !v;
  }).length, s = t.filter(function(c) {
    var v = c.virtual, p = c.vertical;
    return p && !v;
  }).length, u = -1;
  if (e === 0 && (a === 0 ? u = 0 : a === 1 && (u = 1)), e === 2 && (a <= 2 ? u = 2 : a <= 3 && (u = 3)), e === 3 && (s === 0 ? u = 4 : s < 4 && (u = 7)), e === 1 && (s <= 1 ? u = 5 : s <= 2 && (u = 6)), !(u === -1 || !t[u].virtual)) {
    var f = t[u];
    aw(t, u), u < 4 ? f.pos[0] = r : f.pos[1] = n;
  }
}
function aw(t, e) {
  e < 4 ? t.slice(0, e + 1).forEach(function(r) {
    r.virtual = !1;
  }) : (t[0].virtual && (t[0].virtual = !1), t.slice(4, e + 1).forEach(function(r) {
    r.virtual = !1;
  }));
}
function ow(t, e) {
  e < 4 ? t.slice(e, 4).forEach(function(r) {
    r.virtual = !0;
  }) : t.slice(e).forEach(function(r) {
    r.virtual = !0;
  });
}
function jv(t, e, r, n, a) {
  n === void 0 && (n = [0, 0]);
  var s = [];
  return !t || t === "0px" ? s = [] : s = ln(t), nh(s, e, r, 0, 0, n, a);
}
function tp(t, e, r, n, a) {
  var s = t.state, u = s.width, f = s.height, c = Pf(a, t.props.roundRelative, u, f), v = c.raws, p = c.styles, h = c.radiusPoses, d = ZE(h, v), m = d.horizontals, _ = d.verticals, x = p.join(" ");
  s.borderRadiusState = x;
  var y = Bt(t, e, z({ horizontals: m, verticals: _, borderRadius: x, width: u, height: f, delta: n, dist: r }, Ar({
    borderRadius: x
  }, e)));
  return ht(t, "onRound", y), y;
}
function rp(t) {
  var e, r, n = t.getState().style, a = n.borderRadius || "";
  if (!a && t.props.groupable) {
    var s = t.moveables[0], u = t.getTargets()[0];
    u && (s?.props.target === u ? (a = (r = (e = t.moveables[0]) === null || e === void 0 ? void 0 : e.state.style.borderRadius) !== null && r !== void 0 ? r : "", n.borderRadius = a) : (a = Mf(u).borderRadius, n.borderRadius = a));
  }
  return a;
}
var sw = {
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
    var r = t.getState(), n = r.target, a = r.width, s = r.height, u = r.allMatrix, f = r.is3d, c = r.left, v = r.top, p = r.borderRadiusState, h = t.props, d = h.minRoundControls, m = d === void 0 ? [0, 0] : d, _ = h.maxRoundControls, x = _ === void 0 ? [4, 4] : _, y = h.zoom, b = h.roundPadding, E = b === void 0 ? 0 : b, T = h.isDisplayShadowRoundControls, M = h.groupable;
    if (!n)
      return null;
    var D = p || rp(t), w = f ? 4 : 3, O = jv(D, a, s, m, !0);
    if (!O)
      return null;
    var I = 0, P = 0, B = M ? [0, 0] : [c, v];
    return O.map(function(H, W) {
      var L = H.horizontal, Y = H.vertical, X = H.direction || "", Q = it([], F(H.pos), !1);
      P += Math.abs(L), I += Math.abs(Y), L && X.indexOf("n") > -1 && (Q[1] -= E), Y && X.indexOf("w") > -1 && (Q[0] -= E), L && X.indexOf("s") > -1 && (Q[1] += E), Y && X.indexOf("e") > -1 && (Q[0] += E);
      var j = bt(or(u, Q, w), B), V = T && T !== "horizontal", et = H.vertical ? I <= x[1] && (V || !H.virtual) : P <= x[0] && (T || !H.virtual);
      return e.createElement("div", { key: "borderRadiusControl".concat(W), className: St("control", "border-radius", H.vertical ? "vertical" : "", H.virtual ? "virtual" : ""), "data-radius-index": W, style: {
        display: et ? "block" : "none",
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
    var h = Bt(t, e, {}), d = ht(t, "onRoundStart", h);
    if (d === !1)
      return !1;
    n.lineIndex = v, n.controlIndex = c, n.isControl = u, n.isLine = f, Bn(t, e);
    var m = t.props, _ = m.roundRelative, x = m.minRoundControls, y = x === void 0 ? [0, 0] : x, b = t.state, E = b.width, T = b.height;
    n.isRound = !0, n.prevDist = [0, 0];
    var M = rp(t), D = jv(M || "", E, T, y, !0) || [];
    return n.controlPoses = D, b.borderRadiusState = Pf(D, _, E, T).styles.join(" "), h;
  },
  dragControl: function(t, e) {
    var r = e.datas, n = r.controlPoses;
    if (!r.isRound || !r.isControl || !n.length)
      return !1;
    var a = r.controlIndex, s = F(Ie(e), 2), u = s[0], f = s[1], c = [u, f], v = bt(c, r.prevDist), p = t.props.maxRoundControls, h = p === void 0 ? [4, 4] : p, d = t.state, m = d.width, _ = d.height, x = n[a], y = x.vertical, b = x.horizontal, E = n.map(function(M) {
      var D = M.horizontal, w = M.vertical, O = [
        D * b * c[0],
        w * y * c[1]
      ];
      if (D) {
        if (h[0] === 1)
          return O;
        if (h[0] < 4 && D !== b)
          return O;
      } else {
        if (h[1] === 0)
          return O[1] = w * b * c[0] / m * _, O;
        if (y) {
          if (h[1] === 1)
            return O;
          if (h[1] < 4 && w !== y)
            return O;
        }
      }
      return [0, 0];
    });
    E[a] = c;
    var T = n.map(function(M, D) {
      return z(z({}, M), { pos: qt(M.pos, E[D]) });
    });
    return a < 4 ? T.slice(0, a + 1).forEach(function(M) {
      M.virtual = !1;
    }) : T.slice(4, a + 1).forEach(function(M) {
      M.virtual = !1;
    }), r.prevDist = [u, f], tp(t, e, c, v, T);
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
        ow(v, u);
      else if (f && (d === !0 || d === "line")) {
        var m = F(ud(t, e), 2), _ = m[0], x = m[1];
        iw(v, c, _, x);
      }
      p !== v.filter(function(b) {
        var E = b.virtual;
        return E;
      }).length && tp(t, e, [0, 0], [0, 0], v);
    }
    var y = Jr(t, e, {});
    return ht(t, "onRoundEnd", y), r.borderRadiusState = "", y;
  },
  dragGroupControlStart: function(t, e) {
    var r = this.dragControlStart(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Se(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] });
    }) }, r);
    return ht(t, "onRoundGroupStart", u), r;
  },
  dragGroupControl: function(t, e) {
    var r = this.dragControl(t, e);
    if (!r)
      return !1;
    var n = t.moveables, a = t.props.targets, s = Se(t, "roundable", e), u = z({ targets: t.props.targets, events: s.map(function(f, c) {
      return z(z(z({}, f), { target: a[c], moveable: n[c], currentTarget: n[c] }), Ar({
        borderRadius: r.borderRadius
      }, f));
    }) }, r);
    return ht(t, "onRoundGroup", u), u;
  },
  dragGroupControlEnd: function(t, e) {
    var r = t.moveables, n = t.props.targets, a = Se(t, "roundable", e);
    Uo(t, "onRound", function(f) {
      var c = z({ targets: t.props.targets, events: a.map(function(v, p) {
        return z(z(z({}, v), { target: n[p], moveable: r[p], currentTarget: r[p] }), Ar({
          borderRadius: f.borderRadius
        }, v));
      }) }, f);
      ht(t, "onRoundGroup", c);
    });
    var s = this.dragControlEnd(t, e);
    if (!s)
      return !1;
    var u = z({ targets: t.props.targets, events: a.map(function(f, c) {
      var v;
      return z(z({}, f), { target: n[c], moveable: r[c], currentTarget: r[c], lastEvent: (v = f.datas) === null || v === void 0 ? void 0 : v.lastEvent });
    }) }, s);
    return ht(t, "onRoundGroupEnd", u), u;
  },
  unset: function(t) {
    t.state.borderRadiusState = "";
  }
};
function uw(t, e) {
  var r = e ? 4 : 3, n = nr(r), a = "matrix".concat(e ? "3d" : "", "(").concat(n.join(","), ")");
  return t === a || t === "matrix(1,0,0,1,0,0)";
}
var ah = {
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
    var r = t.state, n = r.is3d, a = r.targetMatrix, s = r.inlineTransform, u = n ? "matrix3d(".concat(a.join(","), ")") : "matrix(".concat(Kp(a, !0), ")"), f = !s || s === "none" ? u : s;
    e.datas.startTransforms = uw(f, n) ? [] : ln(f);
  },
  resetStyle: function(t) {
    var e = t.datas;
    e.nextStyle = {}, e.nextTransforms = t.datas.startTransforms, e.nextTransformAppendedIndexes = [];
  },
  fillDragStartParams: function(t, e) {
    return Bt(t, e, {
      setTransform: function(r) {
        e.datas.startTransforms = dr(r) ? r : ln(r);
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
    this.setTransform(t, e), this.resetStyle(e), ht(t, "onBeforeRenderStart", this.fillDragStartParams(t, e));
  },
  drag: function(t, e) {
    e.datas.startTransforms || this.setTransform(t, e), this.resetStyle(e), ht(t, "onBeforeRender", Bt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  dragEnd: function(t, e) {
    e.datas.startTransforms || (this.setTransform(t, e), this.resetStyle(e)), ht(t, "onBeforeRenderEnd", Bt(t, e, {
      isPinch: !!e.isPinch,
      isDrag: e.isDrag
    }));
  },
  dragGroupStart: function(t, e) {
    var r = this;
    this.dragStart(t, e);
    var n = Se(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.setTransform(c, u), r.resetStyle(u), r.fillDragStartParams(c, u);
    });
    ht(t, "onBeforeRenderGroupStart", Bt(t, e, {
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
    var n = Se(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.resetStyle(u), r.fillDragParams(c, u);
    });
    ht(t, "onBeforeRenderGroup", Bt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets,
      events: s
    }));
  },
  dragGroupEnd: function(t, e) {
    this.dragEnd(t, e), ht(t, "onBeforeRenderGroupEnd", Bt(t, e, {
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
}, oh = {
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
    ht(t, "onRenderStart", Bt(t, e, {
      isPinch: !!e.isPinch
    }));
  },
  drag: function(t, e) {
    ht(t, "onRender", this.fillDragParams(t, e));
  },
  dragAfter: function(t, e) {
    return this.drag(t, e);
  },
  dragEnd: function(t, e) {
    ht(t, "onRenderEnd", this.fillDragEndParams(t, e));
  },
  dragGroupStart: function(t, e) {
    ht(t, "onRenderGroupStart", Bt(t, e, {
      isPinch: !!e.isPinch,
      targets: t.props.targets
    }));
  },
  dragGroup: function(t, e) {
    var r = this, n = Se(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragParams(c, u);
    });
    ht(t, "onRenderGroup", Bt(t, e, z(z({ isPinch: !!e.isPinch, targets: t.props.targets, transform: lo(e), transformObject: {} }, Ar(co(e))), { events: s })));
  },
  dragGroupEnd: function(t, e) {
    var r = this, n = Se(t, "beforeRenderable", e), a = t.moveables, s = n.map(function(u, f) {
      var c = a[f];
      return r.fillDragEndParams(c, u);
    });
    ht(t, "onRenderGroupEnd", Bt(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, targets: t.props.targets, events: s, transformObject: {}, transform: lo(e) }, Ar(co(e)))));
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
    return ui(Do(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Bt(t, e, z({ isPinch: !!e.isPinch, transformObject: r, transform: lo(e) }, Ar(co(e))));
  },
  fillDragEndParams: function(t, e) {
    var r = {};
    return ui(Do(e) || []).forEach(function(n) {
      r[n.name] = n.functionValue;
    }), Bt(t, e, z({ isPinch: !!e.isPinch, isDrag: e.isDrag, transformObject: r, transform: lo(e) }, Ar(co(e))));
  }
};
function Zi(t, e, r, n, a, s, u) {
  s.clientDistX = s.distX, s.clientDistY = s.distY;
  var f = a === "Start", c = a === "End", v = a === "After", p = t.state.target, h = s.isRequest, d = n.indexOf("Control") > -1;
  if (!p || f && d && !h && t.areaElement === s.inputEvent.target)
    return !1;
  var m = it([], F(e), !1);
  if (h) {
    var _ = s.requestAble;
    m.some(function(W) {
      return W.name === _;
    }) || m.push.apply(m, it([], F(t.props.ables.filter(function(W) {
      return W.name === _;
    })), !1));
  }
  if (!m.length || m.every(function(W) {
    return W.dragRelation;
  }))
    return !1;
  var x = s.inputEvent, y;
  c && x && (y = document.elementFromPoint(s.clientX, s.clientY) || x.target);
  var b = !1, E = function() {
    var W;
    b = !0, (W = s.stop) === null || W === void 0 || W.call(s);
  }, T = f && (!t.targetGesto || !t.controlGesto || !t.targetGesto.isFlag() || !t.controlGesto.isFlag());
  T && t.updateRect(a, !0, !1);
  var M = s.datas, D = d ? "controlGesto" : "targetGesto", w = t[D], O = function(W, L, Y) {
    if (!(L in W) || w !== t[D])
      return !1;
    var X = W.name, Q = M[X] || (M[X] = {});
    if (f && (Q.isEventStart = !Y || !W[Y] || W[Y](t, s)), !Q.isEventStart)
      return !1;
    var j = W[L](t, z(z({}, s), { stop: E, datas: Q, originalDatas: M, inputTarget: y }));
    return t._emitter.off(), f && j === !1 && (Q.isEventStart = !1), j;
  };
  T && m.forEach(function(W) {
    W.unset && W.unset(t);
  }), O(ah, "drag".concat(n).concat(a));
  var I = 0, P = 0;
  r.forEach(function(W) {
    if (b)
      return !1;
    var L = "".concat(W).concat(n).concat(a), Y = "".concat(W).concat(n, "Condition");
    a === "" && !h && IE(t.state, s);
    var X = m.filter(function(V) {
      return V[L];
    });
    X = X.filter(function(V, et) {
      return V.name && X.indexOf(V) === et;
    });
    var Q = X.filter(function(V) {
      return O(V, L, Y);
    }), j = Q.length;
    b && ++I, j && ++P, !b && f && X.length && !j && (I += X.filter(function(V) {
      var et = V.name, nt = M[et];
      return nt.isEventStart ? V.dragRelation !== "strong" : !1;
    }).length ? 1 : 0);
  }), (!v || P) && O(oh, "drag".concat(n).concat(a));
  var B = w !== t[D] || I === r.length;
  if ((c || b || B) && (t.state.gestos = {}, t.moveables && t.moveables.forEach(function(W) {
    W.state.gestos = {};
  }), m.forEach(function(W) {
    W.unset && W.unset(t);
  })), f && !B && !h && P && t.props.preventDefault && s?.preventDefault(), t.isUnmounted || B)
    return !1;
  if (!f && P && !u || c) {
    var H = t.props.flushSync || Fd;
    H(function() {
      t.updateRect(c ? a : "", !0, !1), t.forceUpdate();
    });
  }
  return !f && !c && !v && P && !u && Zi(t, e, r, n, a + "After", s), !0;
}
function Bf(t, e) {
  return function(r, n) {
    var a;
    n === void 0 && (n = r.inputEvent.target);
    var s = n, u = t.areaElement, f = t._dragTarget;
    return !f || !e && (!((a = t.controlGesto) === null || a === void 0) && a.isFlag()) ? !1 : s === f || f.contains(s) || s === u || !t.isMoveableElement(s) && !t.controlBox.contains(s) || _r(s, "moveable-area") || _r(s, "moveable-padding") || _r(s, "moveable-edgeDraggable");
  };
}
function sh(t, e, r) {
  var n = t.controlBox, a = [], s = t.props, u = s.dragArea, f = t.state.target, c = s.dragTarget;
  a.push(n), (!u || c) && a.push(e), !u && c && f && e !== f && s.dragTargetSelf && a.push(f);
  var v = Bf(t);
  return fh(t, a, "targetAbles", r, {
    dragStart: v,
    pinchStart: v
  });
}
function uh(t, e) {
  var r = t.controlBox, n = [];
  n.push(r);
  var a = Bf(t, !0), s = function(u, f) {
    if (f === void 0 && (f = u.inputEvent.target), f === r)
      return !0;
    var c = a(u, f);
    return !c;
  };
  return fh(t, n, "controlAbles", e, {
    dragStart: s,
    pinchStart: s
  });
}
function fh(t, e, r, n, a) {
  a === void 0 && (a = {});
  var s = r === "targetAbles", u = t.props, f = u.pinchOutside, c = u.pinchThreshold, v = u.preventClickEventOnDrag, p = u.preventClickDefault, h = u.checkInput, d = u.dragFocusedInput, m = u.preventDefault, _ = m === void 0 ? !0 : m, x = u.preventRightClick, y = x === void 0 ? !0 : x, b = u.preventWheelClick, E = b === void 0 ? !0 : b, T = u.dragContainer, M = Te(T, !0), D = {
    preventDefault: _,
    preventRightClick: y,
    preventWheelClick: E,
    container: M || fn(t.getControlBoxElement()),
    pinchThreshold: c,
    pinchOutside: f,
    preventClickEventOnDrag: s ? v : !1,
    preventClickEventOnDragStart: s ? p : !1,
    preventClickEventByCondition: s ? null : function(I) {
      return t.controlBox.contains(I.target);
    },
    checkInput: s ? h : !1,
    dragFocusedInput: d
  }, w = new zb(e, D), O = n === "Control";
  return ["drag", "pinch"].forEach(function(I) {
    ["Start", "", "End"].forEach(function(P) {
      w.on("".concat(I).concat(P), function(B) {
        var H, W = B.eventType, L = I === "drag" && B.isPinch;
        if (a[W] && !a[W](B)) {
          B.stop();
          return;
        }
        if (!L) {
          var Y = I === "drag" ? [I] : ["drag", I], X = it([], F(t[r]), !1), Q = Zi(t, X, Y, n, P, B);
          Q ? (t.props.stopPropagation || P === "Start" && O) && ((H = B?.inputEvent) === null || H === void 0 || H.stopPropagation()) : B.stop();
        }
      });
    });
  }), w;
}
var fw = /* @__PURE__ */ (function() {
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
function lw(t, e, r, n) {
  var a;
  r === void 0 && (r = e);
  var s = dd(t, e), u = s.matrixes, f = s.is3d, c = s.targetMatrix, v = s.transformOrigin, p = s.targetOrigin, h = s.offsetContainer, d = s.hasFixed, m = s.zoom, _ = EC(h, r), x = _.matrixes, y = _.is3d, b = _.offsetContainer, E = _.zoom, T = n, M = 4, D = t.tagName.toLowerCase() !== "svg" && "ownerSVGElement" in t, w = c, O = nr(M), I = nr(M), P = nr(M), B = nr(M), H = u.length, W = x.map(function(et) {
    return z(z({}, et), { matrix: et.matrix ? it([], F(et.matrix), !1) : void 0 });
  }).reverse();
  u.reverse(), !f && T && (w = Ce(w, 3, 4), Uu(u)), !y && T && Uu(W), W.forEach(function(et) {
    I = Jt(I, et.matrix, M);
  });
  var L = r || pn(t), Y = ((a = W[0]) === null || a === void 0 ? void 0 : a.target) || ra(L, L, !0).offsetParent, X = W.slice(1).reduce(function(et, nt) {
    return Jt(et, nt.matrix, M);
  }, nr(M));
  u.forEach(function(et, nt) {
    if (H - 2 === nt && (P = O.slice()), H - 1 === nt && (B = O.slice()), !et.matrix) {
      var U = u[nt + 1], lt = ME(et, U, Y, M, Jt(X, O, M));
      et.matrix = In(lt, M);
    }
    O = Jt(O, et.matrix, M);
  });
  var Q = !D && f;
  w || (w = nr(Q ? 4 : 3));
  var j = qo(D && w.length === 16 ? Ce(w, 4, 3) : w, Q), V = I;
  return I = $p(I, M, M), {
    hasZoom: m !== 1 || E !== 1,
    hasFixed: d,
    matrixes: u,
    rootMatrix: I,
    originalRootMatrix: V,
    beforeMatrix: P,
    offsetMatrix: B,
    allMatrix: O,
    targetMatrix: w,
    targetTransform: j,
    inlineTransform: t.style.transform,
    transformOrigin: v,
    targetOrigin: p,
    is3d: T,
    offsetContainer: h,
    offsetRootContainer: b
  };
}
function cw(t, e, r, n) {
  r === void 0 && (r = e);
  var a = 0, s = 0, u = 0, f = {}, c = kd(t);
  if (t && (a = c.offsetWidth, s = c.offsetHeight), t) {
    var v = lw(t, e, r, n), p = oi(v.allMatrix, v.transformOrigin, a, s);
    f = z(z({}, v), p);
    var h = oi(v.allMatrix, [50, 50], 100, 100);
    u = Hd([h.pos1, h.pos2], h.direction);
  }
  var d = 4;
  return z(z(z({ hasZoom: !1, width: a, height: s, rotation: u }, c), { originalRootMatrix: nr(d), rootMatrix: nr(d), beforeMatrix: nr(d), offsetMatrix: nr(d), allMatrix: nr(d), targetMatrix: nr(d), targetTransform: "", inlineTransform: "", transformOrigin: [0, 0], targetOrigin: [0, 0], is3d: !0, left: 0, top: 0, right: 0, bottom: 0, origin: [0, 0], pos1: [0, 0], pos2: [0, 0], pos3: [0, 0], pos4: [0, 0], direction: 1, hasFixed: !1, offsetContainer: null, offsetRootContainer: null, matrixes: [] }), f);
}
function Zu(t, e, r, n, a, s) {
  s === void 0 && (s = []);
  var u = 1, f = [0, 0], c = po(), v = po(), p = po(), h = po(), d = [0, 0], m = {}, _ = cw(e, r, a, !0);
  if (e) {
    var x = Xr(e);
    s.forEach(function(W) {
      m[W] = x(W);
    });
    var y = _.is3d ? 4 : 3, b = oi(_.offsetMatrix, qt(_.transformOrigin, Vp(_.targetMatrix, y)), _.width, _.height);
    u = b.direction, f = qt(b.origin, [b.left - _.left, b.top - _.top]), h = Ki(_.offsetRootContainer);
    var E = ra(n, n, !0).offsetParent || _.offsetRootContainer;
    if (_.hasZoom) {
      var T = oi(Jt(_.originalRootMatrix, _.allMatrix), _.transformOrigin, _.width, _.height), M = oi(_.originalRootMatrix, Oo(Xr(E)("transformOrigin")).map(function(W) {
        return parseFloat(W);
      }), E.offsetWidth, E.offsetHeight);
      if (c = yu(T, h), p = yu(M, h, E, !0), t) {
        var D = T.left, w = T.top;
        v = yu({
          left: D,
          top: w,
          bottom: w,
          right: w
        }, h);
      }
    } else {
      c = Ki(e), p = CC(E), t && (v = Ki(t));
      var O = p.left, I = p.top, P = p.clientLeft, B = p.clientTop, H = [
        c.left - O,
        c.top - I
      ];
      d = bt(vi(_.rootMatrix, H, 4), [P + _.left, B + _.top]);
    }
  }
  return z({ targetClientRect: c, containerClientRect: p, moveableClientRect: v, rootContainerClientRect: h, beforeDirection: u, beforeOrigin: f, originalBeforeOrigin: f, target: e, style: m, offsetDelta: d }, _);
}
function ep(t) {
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
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.state = z({ container: null, gestos: {}, renderLines: [
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]],
      [[0, 0], [0, 0]]
    ], renderPoses: [[0, 0], [0, 0], [0, 0], [0, 0]], disableNativeEvent: !1, posDelta: [0, 0] }, Zu(null)), r.renderState = {}, r.enabledAbles = [], r.targetAbles = [], r.controlAbles = [], r.rotation = 0, r.scale = [1, 1], r.isMoveableMounted = !1, r.isUnmounted = !1, r.events = {
      mouseEnter: null,
      mouseLeave: null
    }, r._emitter = new Fo(), r._prevOriginalDragTarget = null, r._originalDragTarget = null, r._prevDragTarget = null, r._dragTarget = null, r._prevPropTarget = null, r._propTarget = null, r._prevDragArea = !1, r._isPropTargetChanged = !1, r._hasFirstTarget = !1, r._reiszeObserver = null, r._observerId = 0, r._mutationObserver = null, r._rootContainer = null, r._viewContainer = null, r._viewClassNames = [], r._store = {}, r.checkUpdateRect = function() {
      if (!r.isDragging()) {
        var n = r.props.parentMoveable;
        if (n) {
          n.checkUpdateRect();
          return;
        }
        DS(r._observerId), r._observerId = Sp(function() {
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
    var _ = F(a || [0, 0], 2), x = _[0], y = _[1], b = n.left, E = n.top, T = n.target, M = n.direction, D = n.hasFixed, w = n.offsetDelta, O = r.targets, I = this.isDragging(), P = {};
    this.getEnabledAbles().forEach(function(X) {
      P["data-able-".concat(X.name.toLowerCase())] = !0;
    });
    var B = this._getAbleClassName(), H = O && O.length && (T || h) || u || !this._hasFirstTarget && this.state.isPersisted, W = this.controlBox || this.props.firstRenderState || this.props.persistData, L = [b - x, E - y];
    !h && r.useAccuratePosition && (L[0] += w[0], L[1] += w[1]);
    var Y = {
      position: D ? "fixed" : "absolute",
      display: H ? "block" : "none",
      visibility: W ? "visible" : "hidden",
      transform: "translate3d(".concat(L[0], "px, ").concat(L[1], "px, ").concat(v, ")"),
      "--zoom": f,
      "--zoompx": "".concat(f, "px")
    };
    return d && (Y["--moveable-line-padding"] = d), m && (Y["--moveable-control-padding"] = m), ye(
      p,
      z({ cspNonce: c, ref: He(this, "controlBox"), className: "".concat(St("control-box", M === -1 ? "reverse" : "", I ? "dragging" : ""), " ").concat(B, " ").concat(s) }, P, { onClick: this._onPreventClick, style: Y }),
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
    return Yr(n, function(a) {
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
    return r && (((n = r.getAttribute) === null || n === void 0 ? void 0 : n.call(r, "class")) || "").indexOf(hf) > -1;
  }, e.prototype.dragStart = function(r, n) {
    n === void 0 && (n = r.target);
    var a = this.targetGesto, s = this.controlGesto;
    return a && Bf(this)({ inputEvent: r }, n) ? a.isFlag() || a.triggerDragStart(r) : s && this.isMoveableElement(n) && (s.isFlag() || s.triggerDragStart(r)), this;
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
    var d = p.left, m = p.top, _ = p.width, x = p.height, y = wv([s, u, c, f], v), b = Tb(y, [
      [d, m],
      [d + _, m],
      [d + _, m + x],
      [d, m + x]
    ]), E = Qp(y);
    return !b || !E ? 0 : Math.min(100, b / E * 100);
  }, e.prototype.isInside = function(r, n) {
    var a = this.state, s = a.target, u = a.pos1, f = a.pos2, c = a.pos3, v = a.pos4, p = a.targetClientRect;
    return s ? Au([r, n], wv([u, f, v, c], p)) : !1;
  }, e.prototype.updateRect = function(r, n, a) {
    a === void 0 && (a = !0);
    var s = this.props, u = !s.parentPosition && !s.wrapperMoveable;
    u && li(!0);
    var f = s.parentMoveable, c = this.state, v = c.target || s.target, p = this.getContainer(), h = f ? f._rootContainer : this._rootContainer, d = Zu(this.controlBox, v, p, p, h || p, this._getRequestStyles());
    if (!v && this._hasFirstTarget && s.persistData) {
      var m = ep(s.persistData);
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
    var r = this.state, n = ce(this.state), a = F(n, 4), s = a[0], u = a[1], f = a[2], c = a[3], v = fe(n), p = r.width, h = r.height, d = v.width, m = v.height, _ = v.left, x = v.top, y = [r.left, r.top], b = qt(y, r.origin), E = qt(y, r.beforeOrigin), T = r.transformOrigin;
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
      transformOrigin: T,
      rotation: this.getRotation()
    };
  }, e.prototype.getManager = function() {
    return this;
  }, e.prototype.stopDrag = function(r) {
    if (!r || r === "target") {
      var n = this.targetGesto;
      n?.isIdle() === !1 && $u(this, !1), n?.stop();
    }
    if (!r || r === "control") {
      var n = this.controlGesto;
      n?.isIdle() === !1 && $u(this, !0), n?.stop();
    }
  }, e.prototype.getRotation = function() {
    var r = this.state, n = r.pos1, a = r.pos2, s = r.direction;
    return BE(n, a, s);
  }, e.prototype.request = function(r, n, a) {
    n === void 0 && (n = {});
    var s = this, u = s.props, f = u.parentMoveable || u.wrapperMoveable || s, c = f.props.ables, v = u.groupable, p = Yr(c, function(b) {
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
        return Zi(s, x, ["drag"], _, "", z(z({}, h.request(b)), { requestAble: r, isRequest: !0 }), d), y;
      },
      requestEnd: function() {
        return Zi(s, x, ["drag"], _, "End", z(z({}, h.requestEnd()), { requestAble: r, isRequest: !0 }), d), y;
      }
    };
    return Zi(s, x, ["drag"], _, "Start", z(z({}, h.requestStart(n)), { requestAble: r, isRequest: !0 }), d), d ? y.request(n).requestEnd() : y;
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
    var b = Qd(a || {}), E = b.left, T = b.top, M = b.bottom, D = b.right, w = c ? 4 : 3, O = [];
    x ? O = u : this.controlBox && n.groupable ? O = s : O = qt(s, [m, _]);
    var I = Eo(w, In(O.map(function(Y) {
      return -Y;
    }), w), f, In(u, w)), P = oe(I, v, [-E, -T], w), B = oe(I, p, [D, -T], w), H = oe(I, h, [-E, M], w), W = oe(I, d, [D, M], w);
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
      var L = y / 2;
      r.renderLines = [
        [
          oe(I, v, [-E - L, -T], w),
          oe(I, p, [D + L, -T], w)
        ],
        [
          oe(I, p, [D, -T - L], w),
          oe(I, d, [D, M + L], w)
        ],
        [
          oe(I, d, [D + L, M], w),
          oe(I, h, [-E - L, M], w)
        ],
        [
          oe(I, h, [-E, M + L], w),
          oe(I, v, [-E, -T - L], w)
        ]
      ];
    }
  }, e.prototype.checkUpdate = function() {
    this._isPropTargetChanged = !1;
    var r = this.props, n = r.target, a = r.container, s = r.parentMoveable, u = this.state, f = u.target, c = u.container;
    if (!(!f && !n)) {
      this.updateAbles();
      var v = !Vu(f, n), p = v || !Vu(c, a);
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
    return a[s] || (a[s] = rd(r, n)), a[s];
  }, e.prototype.getState = function() {
    var r, n = this.props;
    (n.target || !((r = n.targets) === null || r === void 0) && r.length) && (this._hasFirstTarget = !0);
    var a = this.controlBox, s = n.persistData, u = n.firstRenderState;
    if (u && !a)
      return u;
    if (!this._hasFirstTarget && s) {
      var f = ep(s);
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
    var a = this.props, s = a.triggerAblesSimultaneously, u = this.getEnabledAbles(r), f = "drag".concat(n, "Start"), c = "pinch".concat(n, "Start"), v = "drag".concat(n, "ControlStart"), p = ho(u, [f, c], s), h = ho(u, [v], s);
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
      createElement: ye
    };
    return this.renderState = {}, OE(Vd(ho(this.getEnabledAbles(), ["render"], a).map(function(u) {
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
    s && (ii(this, !1), this.updateState({ gestos: {} })), n || ii(this, !0), a && r && !this.targetGesto && (this.targetGesto = sh(this, a, "")), !this.controlGesto && n && (this.controlGesto = uh(this, "Control"));
  }, e.prototype._updateTargets = function() {
    var r = this.props;
    this._prevPropTarget = this._propTarget, this._prevDragTarget = this._dragTarget, this._prevOriginalDragTarget = this._originalDragTarget, this._prevDragArea = r.dragArea, this._propTarget = r.target, this._originalDragTarget = r.dragTarget || r.target, this._dragTarget = Te(this._originalDragTarget, !0);
  }, e.prototype._renderLines = function() {
    var r = this.props, n = r, a = n.zoom, s = n.hideDefaultLines, u = n.hideChildMoveableDefaultLines, f = n.parentMoveable;
    if (s || f && u)
      return [];
    var c = this.getState(), v = {
      createElement: ye
    };
    return c.renderLines.map(function(p, h) {
      return ta(v, "", p[0], p[1], a, "render-line-".concat(h));
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
        var h = ho(v, [p]), d = h.length > 0, m = s[p];
        if (!d) {
          m && (m.destroy(), s[p] = null);
          return;
        }
        m || (m = new fw(a, r, p), s[p] = m), m.setAbles(h);
      });
    }
  }, e.prototype._checkUpdateRootContainer = function() {
    var r = this.props.rootContainer;
    !this._rootContainer && r && (this._rootContainer = Te(r, !0));
  }, e.prototype._checkUpdateViewContainer = function() {
    var r = this.props.viewContainer;
    !this._viewContainer && r && (this._viewContainer = Te(r, !0));
    var n = this._viewContainer;
    n && this._changeAbleViewClassNames(it(it([], F(this._getAbleViewClassNames()), !1), [
      this.isDragging() ? kE : ""
    ], !1));
  }, e.prototype._changeAbleViewClassNames = function(r) {
    var n = this._viewContainer, a = $d(r.filter(Boolean), function(v) {
      return v;
    }).map(function(v) {
      var p = F(v, 1), h = p[0];
      return h;
    }), s = this._viewClassNames, u = aa(s, a), f = u.removed, c = u.added;
    f.forEach(function(v) {
      Dp(n, s[v]);
    }), c.forEach(function(v) {
      wp(n, a[v]);
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
          for (var d = Ub(v), m = d.next(); !m.done; m = d.next()) {
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
    flushSync: Fd,
    firstRenderState: null,
    persistData: null,
    viewContainer: null,
    requestStyles: [],
    useAccuratePosition: !1
  }, e;
})(Ap), zf = {
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
      return e.createElement(pi, { key: "moveable" + x, ref: mp(t, "moveables", x), target: _, origin: !1, requestStyles: m, cssStyled: n.cssStyled, customStyledMap: n.customStyledMap, useResizeObserver: n.useResizeObserver, useMutationObserver: n.useMutationObserver, hideChildMoveableDefaultLines: n.hideChildMoveableDefaultLines, parentMoveable: t, parentPosition: [u, f], persistData: h[x], zoom: v });
    })), !1), F(Vd(p.map(function(_, x) {
      var y = _.pos1, b = _.pos2, E = _.pos3, T = _.pos4, M = [y, b, E, T];
      return [
        [0, 1],
        [1, 3],
        [3, 2],
        [2, 0]
      ].map(function(D, w) {
        var O = F(D, 2), I = O[0], P = O[1];
        return ta(e, "", bt(M[I], d), bt(M[P], d), v, "group-rect-".concat(x, "-").concat(w));
      });
    }))), !1);
  }
}, vw = ca("clickable", {
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
      ht(t, "onClick", Bt(t, e, {
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
      }), f = s > -1), ht(t, "onClickGroup", Bt(t, e, {
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
var pw = ca("edgeDraggable", {
  css: [
    `.edge.edgeDraggable.line {
cursor: move;
}`
  ],
  render: function(t, e) {
    var r = t.props, n = r.edgeDraggable;
    return n ? md(e, "edgeDraggable", n, t.getState().renderPoses, r.zoom) : [];
  },
  dragCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && _r(a, St("direction")) && _r(a, St("edge")) && _r(a, St("edgeDraggable"));
  },
  dragStart: function(t, e) {
    return Ir.dragStart(t, jn(e));
  },
  drag: function(t, e) {
    return Ir.drag(t, jn(e));
  },
  dragEnd: function(t, e) {
    return Ir.dragEnd(t, jn(e));
  },
  dragGroupCondition: function(t, e) {
    var r, n = t.props, a = (r = e.inputEvent) === null || r === void 0 ? void 0 : r.target;
    return !n.edgeDraggable || !a ? !1 : !n.draggable && _r(a, St("direction")) && _r(a, St("line"));
  },
  dragGroupStart: function(t, e) {
    return Ir.dragGroupStart(t, jn(e));
  },
  dragGroup: function(t, e) {
    return Ir.dragGroup(t, jn(e));
  },
  dragGroupEnd: function(t, e) {
    return Ir.dragGroupEnd(t, jn(e));
  },
  unset: function(t) {
    return Ir.unset(t);
  }
}), lh = {
  name: "individualGroupable",
  props: [
    "individualGroupable",
    "individualGroupableProps"
  ],
  events: []
}, Gf = [
  ah,
  rh,
  mE,
  GE,
  Ir,
  pw,
  Yu,
  FE,
  WE,
  jC,
  XE,
  qE,
  HE,
  nw,
  ew,
  sw,
  zf,
  lh,
  vw,
  th,
  oh
], dw = /* @__PURE__ */ Gf.reduce(function(t, e) {
  return (e.events || []).forEach(function(r) {
    Ep(t, r);
  }), t;
}, []), hw = /* @__PURE__ */ Gf.reduce(function(t, e) {
  return (e.props || []).forEach(function(r) {
    Ep(t, r);
  }), t;
}, []);
function np(t, e) {
  var r = F(t, 3), n = r[0], a = r[1], s = r[2];
  return (n * e[0] + a * e[1] + s) / Math.sqrt(n * n + a * a);
}
function _o(t, e) {
  var r = F(t, 2), n = r[0], a = r[1];
  return -n * e[0] - a * e[1];
}
function ip(t, e) {
  return Math.max.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.max(a[e], s[e], u[e], f[e]);
  })), !1));
}
function ap(t, e) {
  return Math.min.apply(Math, it([], F(t.map(function(r) {
    var n = F(r, 4), a = n[0], s = n[1], u = n[2], f = n[3];
    return Math.min(a[e], s[e], u[e], f[e]);
  })), !1));
}
function gw(t, e) {
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
  var h = Ot(e, Br);
  if (h % 90) {
    var d = h / 180 * Math.PI, m = Math.tan(d), _ = -1 / m, x = [Wu, Rv], y = [[0, 0], [0, 0]], b = [Wu, Rv], E = [[0, 0], [0, 0]];
    t.forEach(function(vt) {
      vt.forEach(function(ut) {
        var st = np([-m, 1, 0], ut), at = np([-_, 1, 0], ut);
        x[0] > st && (y[0] = ut, x[0] = st), x[1] < st && (y[1] = ut, x[1] = st), b[0] > at && (E[0] = ut, b[0] = at), b[1] < at && (E[1] = ut, b[1] = at);
      });
    });
    var T = F(y, 2), M = T[0], D = T[1], w = F(E, 2), O = w[0], I = w[1], P = [-m, 1, _o([-m, 1], M)], B = [-m, 1, _o([-m, 1], D)], H = [-_, 1, _o([-_, 1], O)], W = [-_, 1, _o([-_, 1], I)];
    r = F([
      [P, H],
      [P, W],
      [B, H],
      [B, W]
    ].map(function(vt) {
      var ut = F(vt, 2), st = ut[0], at = ut[1];
      return pf(st, at)[0];
    }), 4), s = r[0], u = r[1], f = r[2], c = r[3], v = b[1] - b[0], p = x[1] - x[0];
  } else {
    var L = ap(t, 0), Y = ap(t, 1), X = ip(t, 0), Q = ip(t, 1);
    if (s = [L, Y], u = [X, Y], f = [L, Q], c = [X, Q], v = X - L, p = Q - Y, h % 180) {
      var j = [f, s, c, u];
      n = F(j, 4), s = n[0], u = n[1], f = n[2], c = n[3], v = Q - Y, p = X - L;
    }
  }
  if (h % 360 > 180) {
    var j = [c, f, u, s];
    a = F(j, 4), s = a[0], u = a[1], f = a[2], c = a[3];
  }
  var V = Pn([s, u, f, c]), et = V.minX, nt = V.minY, U = V.maxX, lt = V.maxY;
  return {
    pos1: s,
    pos2: u,
    pos3: f,
    pos4: c,
    width: v,
    height: p,
    minX: et,
    minY: nt,
    maxX: U,
    maxY: lt,
    rotation: e
  };
}
function ch(t, e) {
  var r = e.map(function(n) {
    if (dr(n)) {
      var a = ch(t, n), s = a.length;
      return s > 1 ? a : s === 1 ? a[0] : null;
    } else {
      var u = Yr(t, function(f) {
        var c = f.manager;
        return c.props.target === n;
      });
      return u ? (u.finded = !0, u.manager) : null;
    }
  }).filter(Boolean);
  return r.length === 1 && dr(r[0]) ? r[0] : r;
}
var mw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.differ = new Jp(), r.moveables = [], r.transformOrigin = "50% 50%", r.renderGroupRects = [], r._targetGroups = [], r._hasFirstTargets = !1, r;
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
    li(!0), this.moveables.forEach(function(_t) {
      _t.updateRect(r, !1, !1);
    });
    var f = this.props, c = this.moveables, v = u.target || f.target, p = c.map(function(_t) {
      return { finded: !1, manager: _t };
    }), h = this.props.targetGroups || [], d = ch(p, h), m = f.useDefaultGroupRotate;
    d.push.apply(d, it([], F(p.filter(function(_t) {
      var Tt = _t.finded;
      return !Tt;
    }).map(function(_t) {
      var Tt = _t.manager;
      return Tt;
    })), !1));
    var _ = [], x = !n || r !== "" && f.updateGroup, y = f.defaultGroupRotate || 0;
    if (!this._hasFirstTargets) {
      var b = (s = f.persistData) === null || s === void 0 ? void 0 : s.rotation;
      b != null && (y = b);
    }
    function E(_t, Tt, Wt) {
      var ot = _t.map(function(ft) {
        if (dr(ft)) {
          var pt = E(ft, Tt), wt = [pt.pos1, pt.pos2, pt.pos3, pt.pos4];
          return _.push(pt), { poses: wt, rotation: pt.rotation };
        } else
          return {
            poses: ce(ft.state),
            rotation: ft.getRotation()
          };
      }), gt = ot.map(function(ft) {
        var pt = ft.rotation;
        return pt;
      }), kt = 0, yt = gt[0], Et = gt.every(function(ft) {
        return Math.abs(yt - ft) < 0.1;
      });
      x ? kt = !m && Et ? yt : y : kt = !m && !Wt && Et ? yt : Tt;
      var At = ot.map(function(ft) {
        var pt = ft.poses;
        return pt;
      }), rt = gw(At, kt);
      return rt;
    }
    var T = E(d, this.rotation, !0);
    x && (this.rotation = T.rotation, this.transformOrigin = f.defaultGroupOrigin || "50% 50%", this.scale = [1, 1]), this._targetGroups = h, this.renderGroupRects = _;
    var M = this.transformOrigin, D = this.rotation, w = this.scale, O = T.width, I = T.height, P = T.minX, B = T.minY, H = zE([
      [0, 0],
      [O, 0],
      [0, I],
      [O, I]
    ], If(M, O, I), this.rotation / 180 * Math.PI), W = Pn(H.result), L = W.minX, Y = W.minY, X = " rotate(".concat(D, "deg)") + " scale(".concat(Pr(w[0]), ", ").concat(Pr(w[1]), ")"), Q = "translate(".concat(-L, "px, ").concat(-Y, "px)").concat(X);
    this.controlBox.style.transform = "translate3d(".concat(P, "px, ").concat(B, "px, ").concat(this.props.translateZ || 0, ")"), v.style.cssText += "left:0px;top:0px;" + "transform-origin:".concat(M, ";") + "width:".concat(O, "px;height:").concat(I, "px;") + "transform: ".concat(Q), u.width = O, u.height = I;
    var j = this.getContainer(), V = Zu(this.controlBox, v, this.controlBox, this.getContainer(), this._rootContainer || j, []), et = [V.left, V.top], nt = F(ce(V), 4), U = nt[0], lt = nt[1], vt = nt[2], ut = nt[3], st = Pn([U, lt, vt, ut]), at = [st.minX, st.minY], dt = Pr(w[0] * w[1]);
    V.pos1 = bt(U, at), V.pos2 = bt(lt, at), V.pos3 = bt(vt, at), V.pos4 = bt(ut, at), V.left = P - V.left + at[0], V.top = B - V.top + at[1], V.origin = bt(qt(et, V.origin), at), V.beforeOrigin = bt(qt(et, V.beforeOrigin), at), V.originalBeforeOrigin = qt(et, V.originalBeforeOrigin), V.transformOrigin = bt(qt(et, V.transformOrigin), at), v.style.transform = "translate(".concat(-L - at[0], "px, ").concat(-Y - at[1], "px)") + X, li(), this.updateState(z(z({}, V), { posDelta: at, direction: dt, beforeDirection: dt }), a);
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
    t.prototype.updateAbles.call(this, it(it([], F(this.props.ables), !1), [zf], !1), "Group");
  }, e.prototype._updateTargets = function() {
    t.prototype._updateTargets.call(this), this._originalDragTarget = this.props.dragTarget || this.areaElement, this._dragTarget = Te(this._originalDragTarget, !0);
  }, e.prototype._updateEvents = function() {
    var r = this.state, n = this.props, a = this._prevDragTarget, s = n.dragTarget || this.areaElement, u = n.targets, f = this.differ.update(u), c = f.added, v = f.changed, p = f.removed, h = c.length || p.length;
    (h || this._prevOriginalDragTarget !== this._originalDragTarget) && (ii(this, !1), ii(this, !0), this.updateState({ gestos: {} })), a !== s && (r.target = null), r.target || (r.target = this.areaElement, this.controlBox.style.display = "block"), r.target && (this.targetGesto || (this.targetGesto = sh(this, this._dragTarget, "Group")), this.controlGesto || (this.controlGesto = uh(this, "GroupControl")));
    var d = !Vu(r.container, n.container);
    d && (r.container = n.container), (d || h || this.transformOrigin !== (n.defaultGroupOrigin || "50% 50%") || v.length || u.length && !Jd(this._targetGroups, n.targetGroups || [])) && (this.updateRect(), this._hasFirstTargets = !0), this._isPropTargetChanged = !!h;
  }, e.prototype._updateObserver = function() {
  }, e.defaultProps = z(z({}, pi.defaultProps), { transformOrigin: ["50%", "50%"], groupable: !0, dragArea: !0, keepRatio: !0, targets: [], defaultGroupRotate: 0, defaultGroupOrigin: "50% 50%" }), e;
})(pi), _w = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.moveables = [], r;
  }
  return e.prototype.render = function() {
    var r = this, n, a = this.props, s = a.cspNonce, u = a.cssStyled, f = a.persistData, c = a.targets || [], v = c.length, p = this.isUnmounted || !v, h = (n = f?.children) !== null && n !== void 0 ? n : [];
    return p && !v && h.length ? c = h.map(function() {
      return null;
    }) : p || (h = []), ye(u, { cspNonce: s, ref: He(this, "controlBox"), className: St("control-box") }, c.map(function(d, m) {
      var _, x, y = (x = (_ = a.individualGroupableProps) === null || _ === void 0 ? void 0 : _.call(a, d, m)) !== null && x !== void 0 ? x : {};
      return ye(pi, z({ key: "moveable" + m, ref: mp(r, "moveables", m) }, a, y, { target: d, wrapperMoveable: r, isWrapperMounted: r.isMoveableMounted, persistData: h[m] }));
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
    var a = n, s = Yr(this.moveables, function(u) {
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
function vh(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Hr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      dr(n) ? r.push.apply(r, it([], F(vh(n, e)), !1)) : r.push(n);
    }
  }), r;
}
function ph(t, e) {
  var r = [];
  return t.forEach(function(n) {
    if (n) {
      if (Hr(n)) {
        e[n] && r.push.apply(r, it([], F(e[n]), !1));
        return;
      }
      dr(n) ? r.push(ph(n, e)) : r.push(n);
    }
  }), r;
}
function dh(t, e) {
  return t.length !== e.length || t.some(function(r, n) {
    var a = e[n];
    return !r && !a ? !1 : r != a ? dr(r) && dr(a) ? dh(r, a) : !0 : !1;
  });
}
var xw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.refTargets = [], r.selectorMap = {}, r._differ = new Jp(), r._elementTargets = [], r._tmpRefTargets = [], r._tmpSelectorMap = {}, r._onChangeTargets = null, r;
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
    this.defaultStyled = rd("div", dS(hf, nC + a));
  }, e.getTotalAbles = function() {
    return it([rh, zf, lh, th], F(this.defaultAbles), !1);
  }, e.prototype.render = function() {
    var r, n = this.constructor;
    n.defaultStyled || n.makeStyled();
    var a = this.props, s = a.ables, u = a.props, f = Xb(a, ["ables", "props"]), c = F(this._updateRefs(!0), 2), v = c[0], p = c[1], h = vh(v, p), d = h.length > 1, m = n.getTotalAbles(), _ = it(it([], F(m), !1), F(s || []), !1), x = z(z(z({}, f), u || {}), { ables: _, cssStyled: n.defaultStyled, customStyledMap: n.customStyledMap });
    this._elementTargets = h;
    var y = null, b = this.moveable, E = f.persistData;
    if (E?.children && (d = !0), f.individualGroupable)
      return ye(_w, z({ key: "individual-group", ref: He(this, "moveable") }, x, { target: null, targets: h }));
    if (d) {
      var T = ph(v, p);
      if (b && !b.props.groupable && !b.props.individualGroupable) {
        var M = b.props.target;
        M && h.indexOf(M) > -1 && (y = z({}, b.state));
      }
      return ye(mw, z({ key: "group", ref: He(this, "moveable") }, x, (r = f.groupableProps) !== null && r !== void 0 ? r : {}, { target: null, targets: h, targetGroups: T, firstRenderState: y }));
    } else {
      var D = h[0];
      if (b && (b.props.groupable || b.props.individualGroupable)) {
        var w = b.moveables || [], O = Yr(w, function(I) {
          return I.props.target === D;
        });
        O && (y = z({}, O.state));
      }
      return ye(pi, z({ key: "single", ref: He(this, "moveable") }, x, { target: D, firstRenderState: y }));
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
    var n = this.refTargets, a = Of(this.props.target || this.props.targets), s = typeof document < "u", u = dh(n, a), f = this.selectorMap, c = {};
    return this.refTargets.forEach(function v(p) {
      if (Hr(p)) {
        var h = f[p];
        h ? c[p] = f[p] : s && (u = !0, c[p] = [].slice.call(document.querySelectorAll(p)));
      } else dr(p) && p.forEach(v);
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
  }, e.defaultAbles = [], e.customStyledMap = {}, e.defaultStyled = null, qb([
    hS(sd)
  ], e.prototype, "moveable", void 0), e;
})(Ap), yw = /* @__PURE__ */ (function(t) {
  la(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.defaultAbles = Gf, e;
})(xw), Ju = function(t, e) {
  return Ju = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
  }, Ju(t, e);
};
function Ff(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ju(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ea = function() {
  return ea = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ea.apply(this, arguments);
};
function Sw(t, e, r, n) {
  var a = arguments.length, s = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(t, e, r, n);
  else for (var f = t.length - 1; f >= 0; f--) (u = t[f]) && (s = (a < 3 ? u(s) : a > 3 ? u(e, r, s) : u(e, r)) || s);
  return a > 3 && s && Object.defineProperty(e, r, s), s;
}
var bw = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e(n) {
    var a = t.call(this, n) || this;
    return a.state = {}, a.state = a.props, a;
  }
  var r = e.prototype;
  return r.render = function() {
    return ye(yw, ea({
      ref: He(this, "moveable")
    }, this.state));
  }, e;
})(sf), Bo = hw, hh = sd, gh = dw, Cw = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e(n, a) {
    a === void 0 && (a = {});
    var s = t.call(this) || this;
    s.containerProvider = null, s.selfElement = null, s._warp = !1;
    var u = ea({}, a), f = {};
    gh.forEach(function(p) {
      f[wS("on ".concat(p))] = function(h) {
        return s.trigger(p, h);
      };
    });
    var c;
    a.warpSelf ? (delete a.warpSelf, s._warp = !0, c = n) : (c = di(n).createElement("div"), n.appendChild(c)), s.containerProvider = bv(ye(bw, ea({
      ref: He(s, "innerMoveable")
    }, u, f)), c), s.selfElement = c;
    var v = u.target;
    return dr(v) && v.length > 1 && s.updateRect(), s;
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
    bv(null, a, this.containerProvider), this._warp || (n = a?.parentElement) === null || n === void 0 || n.removeChild(a), this.containerProvider = null, this.off(), this.selfElement = null, this.innerMoveable = null;
  }, r.getMoveable = function() {
    return this.innerMoveable.moveable;
  }, e = Sw([pv(hh, function(n, a) {
    n[a] || (n[a] = function() {
      for (var s = [], u = 0; u < arguments.length; u++)
        s[u] = arguments[u];
      var f = this.getMoveable();
      if (!(!f || !f[a]))
        return f[a].apply(f, s);
    });
  }), pv(Bo, function(n, a) {
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
})(Fo), Ew = /* @__PURE__ */ (function(t) {
  Ff(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
})(Cw);
const mh = {};
hh.forEach((t) => {
  mh[t] = function(...e) {
    return this.$_moveable[t](...e);
  };
});
const _h = {};
Bo.forEach((t) => {
  _h[t] = function(e) {
    this.$_moveable[t] = e;
  };
});
const ww = Qu({
  name: "moveable",
  methods: mh,
  props: Bo,
  watch: _h,
  mounted() {
    const t = {}, e = this.$props;
    Bo.forEach((s) => {
      const u = e[s];
      na(u) || (t[s] = e[s]);
    });
    const n = this.$refs.moveableElement, a = new Ew(n, {
      ...t,
      warpSelf: !0
    });
    gh.forEach((s) => {
      a.on(s, (u) => {
        this.$emit(s, { ...u });
      });
    }), this.$_moveable = a;
  },
  beforeUnmount() {
    this.$_moveable.destroy();
  }
}), Dw = ww, Mw = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Rw = { ref: "moveableElement" };
function Tw(t, e, r, n, a, s) {
  return ue(), _e("div", Rw, null, 512);
}
const Ow = /* @__PURE__ */ Mw(Dw, [["render", Tw]]), Iw = { style: { display: "none" } }, Pw = { class: "widget-board" }, Aw = { class: "dropdown-buttons-container" }, Bw = { class: "dropdown-buttons-container" }, zw = 160, Gw = 160, Fw = /* @__PURE__ */ Qu({
  __name: "Edit",
  emits: ["openSettings", "removeWidget"],
  setup(t, { emit: e }) {
    const r = e, n = vp();
    nS();
    const a = n.params.pageid || "", s = Nr(), u = Nr(""), f = Nr([]), c = Nr(!1), v = up("endpointfinder", null);
    an(() => !!v), Nr(!1), Nr(void 0);
    const {
      layoutStore: p,
      widgetStore: h,
      clipboardStore: d,
      ghostPlaceholder: m,
      hidePlaceholder: _,
      getInitialStyle: x,
      getMovableControlStyles: y,
      drag: b,
      resize: E,
      moveUp: T,
      moveDown: M,
      moveToBottom: D,
      moveToTop: w,
      addWidget: O,
      removeWidget: I,
      copyWidget: P,
      pasteWidget: B
    } = hp(a), H = an(() => h?.widgets || []), W = an(() => {
      const rt = p?.layout || [];
      if (rt.length === 0) return { width: 0, height: 0 };
      let ft = 0, pt = 0;
      for (const wt of rt) {
        const zt = (wt.x || 0) + (wt.width || 0), Ct = (wt.y || 0) + (wt.height || 0);
        zt > ft && (ft = zt), Ct > pt && (pt = Ct);
      }
      return {
        width: ft + zw,
        height: pt + Gw
      };
    }), L = Nr(null), Y = Nr({ x: 0, y: 0, w: 1, h: 1 }), X = Nr(null), Q = Nr({ w: 200, h: 140 });
    let j = null;
    const V = an(() => {
      const rt = L.value, ft = Math.max(W.value.width, rt?.clientWidth || 1), pt = Math.max(W.value.height, rt?.clientHeight || 1);
      return Math.min(Q.value.w / ft, Q.value.h / pt);
    }), et = () => {
      const rt = L.value;
      if (!rt) return;
      const ft = Math.max(W.value.width, rt.clientWidth), pt = Math.max(W.value.height, rt.clientHeight);
      Y.value = {
        x: rt.scrollLeft / ft,
        y: rt.scrollTop / pt,
        w: rt.clientWidth / ft,
        h: rt.clientHeight / pt
      };
    }, nt = (rt) => {
      const ft = L.value;
      if (!ft) return;
      const wt = rt.currentTarget.getBoundingClientRect(), zt = (rt.clientX - wt.left) / wt.width, Ct = (rt.clientY - wt.top) / wt.height, Yt = Math.max(W.value.width, ft.clientWidth), Qt = Math.max(W.value.height, ft.clientHeight);
      ft.scrollLeft = zt * Yt - ft.clientWidth / 2, ft.scrollTop = Ct * Qt - ft.clientHeight / 2;
    }, U = an(() => {
      const rt = L.value;
      return rt ? W.value.width > rt.clientWidth || W.value.height > rt.clientHeight : !1;
    });
    fp(() => {
      Cu(() => et());
    }), cv(X, (rt) => {
      j?.disconnect(), rt && (j = new ResizeObserver(([ft]) => {
        const pt = ft.contentRect;
        pt.width > 0 && pt.height > 0 && (Q.value = { w: pt.width, h: pt.height });
      }), j.observe(rt));
    }), Ky(() => j?.disconnect()), cv(W, () => Cu(() => et()));
    const lt = Nr({ x: 0, y: 0 }), vt = (rt) => [
      { id: "front", icon: "flip_to_front", label: "Nach vorn", run: () => T(rt) },
      { id: "back", icon: "flip_to_back", label: "Nach hinten", run: () => M(rt) },
      { id: "top", icon: "vertical_align_top", label: "Ganz vorn", run: () => w(rt) },
      { id: "bottom", icon: "vertical_align_bottom", label: "Ganz hinten", run: () => D(rt) },
      { id: "copy", icon: "content_copy", label: "Kopieren", run: () => ut(rt) }
    ], ut = (rt) => {
      P(rt);
    }, st = Nr({ visible: !1, x: 0, y: 0 }), at = (rt) => {
      if (!d.hasClipboard) {
        st.value.visible = !1;
        return;
      }
      rt.preventDefault();
      const ft = rt.currentTarget.getBoundingClientRect();
      lt.value = {
        x: rt.clientX - ft.left,
        y: rt.clientY - ft.top
      }, st.value = {
        visible: !0,
        x: rt.clientX - ft.left,
        y: rt.clientY - ft.top
      };
    }, dt = () => {
      st.value.visible = !1;
    }, _t = () => {
      B(lt.value.x, lt.value.y), st.value.visible = !1;
    }, Tt = (rt, ft, pt, wt) => {
      const zt = { datasourceId: ft, settings: {} }, Ct = dp.cloneDeep(eS), Yt = m.value.width, Qt = m.value.height, jt = {
        x: pt - Yt / 2,
        y: wt - Qt / 2,
        width: Yt,
        height: Qt,
        z: 3005
      };
      O(rt, zt, Ct, jt);
    }, Wt = (rt) => {
      r("openSettings", rt);
    };
    an(() => H.value.length === 0 && (p?.layout || []).length === 0);
    const ot = (rt) => {
      I(rt), r("removeWidget", rt);
    };
    an(() => H.value.find((rt) => rt.uid === u.value));
    const gt = (rt) => {
      const ft = L.value;
      if (!ft) return { x: 0, y: 0 };
      const pt = ft.getBoundingClientRect();
      return {
        x: rt.clientX - pt.left + ft.scrollLeft,
        y: rt.clientY - pt.top + ft.scrollTop
      };
    }, kt = (rt) => {
      console.log("ondrop"), _();
      const ft = gt(rt);
      s.value = { dropX: ft.x, dropY: ft.y };
    }, yt = (rt) => {
      if (rt.dataTransfer?.types.includes("text/plain")) {
        rt.preventDefault(), c.value = !0;
        const ft = gt(rt);
        m.value.x = ft.x - m.value.width / 2, m.value.y = ft.y - m.value.height / 2, m.value.visible = !0;
      }
    }, Et = (rt) => {
      rt.dataTransfer?.types.includes("text/plain") && (c.value = !1, _());
    }, At = (rt) => {
      console.log(rt);
      const ft = "test", pt = rt.added?.element?.type || "default", wt = s.value?.dropX ?? m.value.x + m.value.width / 2, zt = s.value?.dropY ?? m.value.y + m.value.height / 2;
      Tt(pt, ft, wt, zt);
    };
    return (rt, ft) => {
      const pt = su("va-button"), wt = su("va-dropdown-content"), zt = su("va-dropdown");
      return ue(), _e("div", {
        class: "report-container",
        onContextmenu: at,
        onClick: dt
      }, [
        me("div", {
          class: "scroll-viewport",
          ref_key: "scrollContainer",
          ref: L,
          onScroll: et
        }, [
          me("div", {
            class: "canvas dottet",
            style: on({
              minWidth: W.value.width > 0 ? `max(100%, ${W.value.width}px)` : void 0,
              minHeight: W.value.height > 0 ? `max(100%, ${W.value.height}px)` : void 0
            }),
            onDrop: kt,
            onDragover: yt,
            onDragleave: Et
          }, [
            se(ur(aS), {
              list: f.value,
              group: { name: "widgets" },
              "ghost-class": "ghost",
              itemKey: "type",
              style: { position: "absolute", top: "0", left: "0", height: "100%", width: "100%" },
              onChange: At,
              onDrop: kt,
              onDragover: yt,
              onDragleave: Et,
              onContextmenu: at
            }, {
              item: ge(({ element: Ct }) => [
                me("div", Iw, Jy(Ct?.type || ""), 1)
              ]),
              _: 1
            }, 8, ["list"]),
            me("div", Pw, [
              ur(m).visible ? (ue(), _e("div", {
                key: 0,
                class: "ghost-placeholder",
                style: on({
                  left: `${ur(m).x}px`,
                  top: `${ur(m).y}px`,
                  width: `${ur(m).width}px`,
                  height: `${ur(m).height}px`
                })
              }, null, 4)) : uu("", !0),
              (ue(!0), _e(xo, null, Eu(H.value, (Ct) => (ue(), _e(xo, {
                key: Ct.uid
              }, [
                me("div", {
                  class: lp(`${Ct.uid} dashboard-item-container`),
                  style: on(ur(x)(Ct.uid)),
                  ref_for: !0,
                  ref: Ct.uid
                }, [
                  se(zt, {
                    trigger: "right-click",
                    "auto-placement": !1,
                    placement: "right-start",
                    cursor: ""
                  }, {
                    anchor: ge(() => [
                      me("div", {
                        class: "dashboard-item",
                        onContextmenu: ft[0] || (ft[0] = Qy(() => {
                        }, ["stop"]))
                      }, [
                        se(ur(cp), {
                          widget: Ct,
                          ref_for: !0,
                          ref: `${Ct.uid}_wrapper`,
                          "extra-actions": vt(Ct.uid),
                          onOpenSettings: Wt,
                          editEnabled: "",
                          onRemoveWidget: ot
                        }, null, 8, ["widget", "extra-actions"])
                      ], 32)
                    ]),
                    default: ge(() => [
                      se(wt, null, {
                        default: ge(() => [
                          me("div", Aw, [
                            se(pt, {
                              onClick: (Yt) => ur(T)(Ct.uid)
                            }, {
                              default: ge(() => [...ft[1] || (ft[1] = [
                                Qn(" Move up ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            se(pt, {
                              onClick: (Yt) => ur(M)(Ct.uid)
                            }, {
                              default: ge(() => [...ft[2] || (ft[2] = [
                                Qn(" Move down ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            se(pt, {
                              onClick: (Yt) => ur(w)(Ct.uid)
                            }, {
                              default: ge(() => [...ft[3] || (ft[3] = [
                                Qn(" Move to top ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            se(pt, {
                              onClick: (Yt) => ur(D)(Ct.uid)
                            }, {
                              default: ge(() => [...ft[4] || (ft[4] = [
                                Qn(" Move to bottom ", -1)
                              ])]),
                              _: 1
                            }, 8, ["onClick"]),
                            se(pt, {
                              onClick: (Yt) => ut(Ct.uid)
                            }, {
                              default: ge(() => [...ft[5] || (ft[5] = [
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
                se(ur(Ow), {
                  target: [`.${Ct.uid}`],
                  draggable: !0,
                  resizable: !0,
                  useResizeObserver: !0,
                  useMutationObserver: !0,
                  onDrag: (Yt) => ur(b)(Ct.uid, Yt),
                  onResize: (Yt) => ur(E)(Ct.uid, Yt),
                  snappable: !0,
                  snapGridWidth: 20,
                  snapGridHeight: 20,
                  origin: !1,
                  ref_for: !0,
                  ref: `${Ct.uid}_control`,
                  style: on(ur(y)(Ct.uid))
                }, null, 8, ["target", "onDrag", "onResize", "style"])
              ], 64))), 128)),
              st.value.visible && ur(d).hasClipboard ? (ue(), _e("div", {
                key: 1,
                class: "canvas-context-menu",
                style: on({ left: st.value.x + "px", top: st.value.y + "px" })
              }, [
                me("div", Bw, [
                  se(pt, {
                    onClick: _t,
                    size: "small"
                  }, {
                    default: ge(() => [...ft[6] || (ft[6] = [
                      Qn(" Paste ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 4)) : uu("", !0)
            ])
          ], 36)
        ], 544),
        U.value ? (ue(), Zy(ur(oS), {
          key: 0,
          title: "Übersicht",
          "remember-as": "daanse.board.minimap",
          initial: { x: 16, y: 420, w: 220, h: 168 },
          "min-width": 140,
          "max-width": 420,
          "min-height": 110,
          closable: !1
        }, {
          default: ge(() => [
            me("div", {
              ref_key: "minimapBox",
              ref: X,
              class: "minimap-canvas",
              onClick: nt
            }, [
              (ue(!0), _e(xo, null, Eu(ur(p)?.layout || [], (Ct) => (ue(), _e("div", {
                key: Ct.id,
                class: "minimap-widget",
                style: on({
                  left: Ct.x * V.value + "px",
                  top: Ct.y * V.value + "px",
                  width: Ct.width * V.value + "px",
                  height: Ct.height * V.value + "px"
                })
              }, null, 4))), 128)),
              me("div", {
                class: "minimap-viewport",
                style: on({
                  left: Y.value.x * 100 + "%",
                  top: Y.value.y * 100 + "%",
                  width: Y.value.w * 100 + "%",
                  height: Y.value.h * 100 + "%"
                })
              }, null, 4)
            ], 512)
          ]),
          _: 1
        })) : uu("", !0)
      ], 32);
    };
  }
}), Lw = /* @__PURE__ */ gp(Fw, [["__scopeId", "data-v-199415e3"]]), xh = "org.eclipse.daanse.board.app.ui.vue.layouts.base";
function yh({ services: t }) {
  t.getRequired(sp).addLayout({
    id: xh,
    name: "BaseLayout",
    description: "pixelbased Layout",
    component: vS,
    editor: Lw
  });
}
function Sh({ services: t }) {
  t.getRequired(sp).removeLayout(xh);
}
const Ww = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: yh,
  deactivate: Sh,
  useClipboardStore: pp
}, Symbol.toStringTag, { value: "Module" })), op = "org.eclipse.daanse.board.app.ui.vue.layouts.base", Nw = "0.0.1-next.1";
async function Zw(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${op}: tsm runtime is not initialized`);
  e.register(op, Ww, Nw, "ui.vue.layouts.base"), await yh?.(t);
}
async function Jw(t) {
  await Sh?.(t);
}
export {
  Zw as activate,
  Jw as deactivate,
  pp as useClipboardStore
};
